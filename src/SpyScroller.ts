// _____   _____    _____   _          __  _          __
// |  _  \ |  _  \  | ____| | |        / / | |        / /
// | |_| | | |_| |  | |__   | |  __   / /  | |  __   / /
// |  _  { |  _  /  |  __|  | | /  | / /   | | /  | / /
// | |_| | | | \ \  | |___  | |/   |/ /    | |/   |/ /
// |_____/ |_|  \_\ |_____| |___/|___/     |___/|___/
//                                                    .io

import { AnimationOptionsInterface } from "./Common_interfaces/Animation_Interface"

interface ISpyScrollerOptions {
  sectionSelector: string
  targetSelector: string
  topOffset: {
    maxWidth?: number
    minWidth?: number
    topOffset: number
  }[]

  activeClass: string[]
  onSectionChange?: (
    section: HTMLElement,
    sections: NodeListOf<HTMLElement>,
    animation: object
  ) => void
  onScroll?: (
    currentSection: HTMLElement,
    sections: NodeListOf<HTMLElement>,
    animation: object
  ) => void
  easing: {
    enabled?: boolean
    type?: string
  }
  onLastScrollInView?: (() => void) | null
  onFirstScrollInView?: () => void
  animation?: Partial<AnimationOptionsInterface>
}

export default class SpyScroller {
  private boundOnScroll: () => void
  private readonly menuList: HTMLElement
  private readonly options: ISpyScrollerOptions
  public readonly sections: NodeListOf<HTMLElement>
  private lastActiveSection: HTMLElement
  public isLastSection = false
  private readonly Navmenu: HTMLElement

  // Define a constructor for the SpyScroller class
  constructor(
    // The menu element or its selector that contains the menu items
    menu: string | HTMLElement = "#navMenu",
    // The options object that configures the behavior of the SpyScroller instance (optional)
    options: Partial<ISpyScrollerOptions> = {}
  ) {
    // Set the options property by merging the default values with the provided options
    this.options = {
      sectionSelector: options.sectionSelector ?? "section",
      targetSelector: options.targetSelector ?? "[data-jump]",
      
     topOffset: Array.isArray(options.topOffset)
  ? options.topOffset
  : typeof options.topOffset === "string"
    ? [{ topOffset: parseInt(options.topOffset) }]
    : [{ topOffset: 500 }],

      activeClass: Array.isArray(options.activeClass)
        ? options.activeClass
        : ["active"],
      onLastScrollInView: options.onLastScrollInView ?? null,
      onFirstScrollInView: options.onFirstScrollInView ?? null,
      onSectionChange: options.onSectionChange ?? null,
      onScroll: options.onScroll ?? null,
      animation: {
        animType: options.animation?.animType ?? "attribute",
        enabled: options.animation?.enabled ?? false,
      },
      easing: {
        enabled: options.easing?.enabled ?? false,
        type: options.easing?.type ?? "",
      },
    }

    if (!menu) {
      throw new Error("First argument cannot be empty")
    }
    if (!(typeof menu === "string" || menu instanceof HTMLElement)) {
      throw new TypeError(
        "menu can be either string or an instance of HTMLElement"
      )
    }

    if (typeof options !== "object") {
      throw new TypeError("options can only be of type object")
    }

    if (typeof options.targetSelector !== "string") {
      throw new TypeError("targetSelector can only be of type string")
    }

    if (options.targetSelector == "") {
      throw new TypeError("targetSelector can not be empty")
    }

    if (typeof this.options.animation !== "object") {
      throw new TypeError("animation in options can only be of type object")
    }

    if(typeof this.options.topOffset !== "object")
    {
      throw new TypeError("animation in options can only be of type object or string with topoffset")
    }

    this.menuList =
      menu instanceof HTMLElement ? menu : document.querySelector(menu)
    this.Navmenu =
      menu instanceof HTMLElement ? menu : document.querySelector(menu)

    if (!this.menuList) {
      throw new Error(`No menu element found for selector "${menu}"`)
    }

    this.sections = document.querySelectorAll<HTMLElement>(
      this.options.sectionSelector
    )

    this.boundOnScroll = this.onScroll.bind(this)
    this.bind()
    if (this.options.easing.enabled) this.easing()
  }

  /**
   * Applies easing to the menu items based on the selected target.
   * If the target selector is "[data-jump]", it adds click event listeners to each menu item with the target selector,
   * retrieves the target element using the data-jump attribute, and scrolls to the target element using the specified easing type.
   * If the target selector is different[HREF], it adds click event listeners to each menu item with the target selector,
   * retrieves the target element using the item's href attribute, and scrolls to the target element using the specified easing type.
   *
   * @private
   * @function easing
   * @return {void}
   * @since 1.0.0
   */

  private easing(): void {
    if (this.options.targetSelector === "[data-jump]") {
      this.menuList
        .querySelectorAll<HTMLAnchorElement>(this.options.targetSelector)
        .forEach((item: HTMLAnchorElement) => {
          item.addEventListener("click", (event) => {
            const target = (event.target as Element).closest("[data-jump]")
            if (!target) return

            event.preventDefault()
            const refId = target.getAttribute("data-jump")
            this.scrollTo(
              document.getElementById(refId),
              1000,
              this.options.easing.type
            )
          })
        })
    } else {
      this.menuList
        .querySelectorAll<HTMLAnchorElement>(this.options.targetSelector)
        .forEach((item: HTMLAnchorElement) => {
          item.addEventListener("click", (event: Event) => {
            event.preventDefault()
            // console.log(item.getAttribute("href").replace("#", ""));
            this.scrollTo(
              document.getElementById(
                item.getAttribute("href").replace("#", "")
              ),
              1000,
              this.options.easing.type
            )
          })
        })
    }
  }

  /**
   * Scrolls the window to a specified target element using the provided duration and easing function.
   *
   * @private
   * @function scrollTo
   * @param {HTMLElement} target - The target element to scroll to.
   * @param {number} duration - The duration of the scrolling animation in milliseconds.
   * @param {any} easing - The easing function to apply during the scrolling animation.
   * @return {void}
   * @since 1.0.0
   */

  private scrollTo(target: HTMLElement, duration: number, easing: any) {
    const start = window.pageYOffset
    const startTime =
      "now" in window.performance ? performance.now() : new Date().getTime()

    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    )
    const windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.getElementsByTagName("body")[0].clientHeight
    const destinationOffset =
      typeof target === "number" ? target : target.offsetTop
    const destinationOffsetToScroll = Math.round(
      documentHeight - destinationOffset < windowHeight
        ? documentHeight - windowHeight
        : destinationOffset
    )

    if ("requestAnimationFrame" in window === false) {
      window.scroll(0, destinationOffsetToScroll)
      return
    }

    function scroll() {
      const now =
        "now" in window.performance ? performance.now() : new Date().getTime()
      const elapsed = now - startTime
      const time = Math.min(1, elapsed / duration)

      const startValue = 0 // Adjust this value according to your needs
      const amountOfChange = 1 // Adjust this value according to your needs
      const timeFunction = easing(time, startValue, amountOfChange, 1)
      window.scroll(
        0,
        Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start)
      )

      if (
        window.pageYOffset === destinationOffsetToScroll ||
        elapsed > duration
      ) {
        return
      }

      requestAnimationFrame(scroll)
    }

    scroll()
  }

  /**
   * Retrieves the currently active section based on the current scroll position.
   *
   * @private
   * @function currentActiveSection
   * @returns {HTMLElement | undefined} - The currently active section element, or undefined if no section is active.
   * @since 1.0.0
   */

  private currentActiveSection(): HTMLElement | undefined {
    const currentPosition =
      (document.documentElement.scrollTop || document.body.scrollTop) +
      this.getTopOffset()
    return Array.from(this.sections).find((section) => {
      const startAt = this.getOffset(section)
      const endAt = startAt + section.offsetHeight
      return currentPosition >= startAt && currentPosition < endAt
    })
  }

  /**
   * Retrieves the top offset value based on the current screen width and options configuration.
   *
   * @private
   * @function getTopOffset
   * @returns {number} - The top offset value to be used.
   * @since 1.0.0
   */
  private getTopOffset(): number {
 
    const screenWidth = window.innerWidth
    let topOffset: number
    // console.log(this.options.topOffset);
    if (Array.isArray(this.options.topOffset)) {
    
      for (const option of this.options.topOffset) {
        if (
          (!option.minWidth || screenWidth >= option.minWidth) &&
          (!option.maxWidth || screenWidth <= option.maxWidth)
        )        
        {        
          topOffset = option.topOffset
          break // Added break statement to exit the loop once the matching option is found
        }
      }
    } 
    return topOffset
  }

  /**
   * Retrieves the offset position of the specified element relative to its offset parent.
   *
   * @private
   * @function getOffset
   * @param {HTMLElement} element - The element for which to retrieve the offset position.
   * @param {boolean} horizontal - Optional. Indicates whether to retrieve the horizontal offset (default: false).
   * @returns {number} - The offset position of the element.
   * @since 1.0.0
   */

  private getOffset(element: HTMLElement, horizontal = false): number {
    if (!element) {
      return 0
    }
    const parentElement = element.offsetParent as HTMLElement
    return (
      this.getOffset(parentElement, horizontal) +
      (horizontal ? element.offsetLeft : element.offsetTop)
    )
  }

  /**
   * Retrieves the active menu item information based on the specified section element.
   *
   * @private
   * @function getActiveMenuItem
   * @param {HTMLElement} section - The section element for which to retrieve the active menu item.
   * @returns {Object | undefined} - The active menu item information, including sectionId, element, isLastSection, and isFirstSection. Returns undefined if the section is not valid.
   * @since 1.0.0
   */

  private getActiveMenuItem(section: HTMLElement):
    | {
        sectionId: string
        element: HTMLAnchorElement
        isLastSection: boolean
        isFirstSection: boolean
      }
    | undefined {
    if (!section) {
      return
    }
    let isLastSection = false
    let isFirstSection = false
    const sectionId = section.getAttribute("id")
    let attribute = this.options.targetSelector

    if (this.options.targetSelector === "[data-jump]") {
      attribute = "data-jump"
      const items = document.querySelectorAll(`[${attribute}]`)
      const element = Array.from(items).find(
        (item) => item.getAttribute(attribute) === sectionId
      ) as HTMLAnchorElement
      const index = Array.from(items).indexOf(element)

      if (Array.from(items).indexOf(element) === 0) {
        isFirstSection = true
      } else if (index === items.length - 1) {
        isLastSection = true
      }

      return {
        sectionId: sectionId as string,
        element: element,
        isFirstSection: isFirstSection,
        isLastSection: isLastSection,
      }
    } else {
      const element = this.menuList.querySelector(
        `[href="#${sectionId}"]`
      ) as HTMLAnchorElement
      const menuItems = Array.from(
        this.menuList.querySelectorAll('[href^="#"]')
      )
      const index = menuItems.findIndex((item) => item === element)

      if (index == 0) isFirstSection = true
      if (menuItems.length - 1 == index) isLastSection = true

      return {
        sectionId: sectionId as string,
        element: element,
        isFirstSection: isFirstSection,
        isLastSection: isLastSection,
      }
    }
  }

  /**
   * Removes the active class from all menu links, except for the specified element to ignore.
   *
   * @private
   * @function removeActiveLink
   * @param {Object} options - Optional. An object containing additional options.
   * @param {HTMLAnchorElement} options.ignore - Optional. The menu link element to ignore and not remove the active class from.
   * @returns {void}
   * @since 1.0.0
   */

  private removeActiveLink(options: { ignore?: HTMLAnchorElement } = {}): void {
    this.menuList
      .querySelectorAll<HTMLAnchorElement>(this.options.targetSelector)
      .forEach((item) => item.classList.remove(...this.options.activeClass))
  }

  /**
   * Checks and updates the active state of a menu link based on the provided menu item element.
   *
   * @private
   * @function ActiveLinkChecker
   * @param {HTMLAnchorElement} menuItem - The menu item element to check and update the active state for.
   * @returns {void}
   * @since 1.0.0
   */

  private ActiveLinkChecker(menuItem: HTMLAnchorElement): void {
    if (
      menuItem.matches(this.options.targetSelector) &&
      !this.options.activeClass.some((className) =>
        menuItem.classList.contains(className)
      )
    ) {
      menuItem.classList.add(...this.options.activeClass)
      this.handleSubmenu(menuItem)
    }
    menuItem.scrollIntoView({ behavior: "smooth" }) // scroll the menuItem into view with smooth behavior
  }

  /**
   * Handles the submenu behavior for a given menu item by adding the active class to its parent list item if applicable.
   *
   * @private
   * @function handleSubmenu
   * @param {HTMLAnchorElement} menuItem - The menu item element for which to handle the submenu behavior.
   * @returns {boolean} - Indicates whether the submenu was successfully handled and the active class was added to the parent list item.
   * @since 1.0.0
   */

  private handleSubmenu(menuItem: HTMLAnchorElement): boolean {
    const parentLi = menuItem.closest("li")
    if (parentLi) {
      const parentUl = parentLi.closest("ul")
      if (parentUl && parentUl.closest("li")) {
        const parentLi = parentUl.closest("li")
        if (parentLi) {
          parentLi.classList.add(...this.options.activeClass)
          return true
        }
      }
    }
    return false
  }

  /**
   * Perform actions based on the current scroll position and the active section and menu item.
   * @returns void
   * @since Version 1.0.0
   */

  private onScroll(): void {
    const section = this.currentActiveSection()
    if (this.options.onScroll) this.executeonScroll(section, this.sections)
    if (this.lastActiveSection == section) return
    this.lastActiveSection = section

    if (this.options.onSectionChange)
      this.executeSectionChanged(section, this.sections)

    const activeMenuItem = this.getActiveMenuItem(section)
   // const activateSectionId = activeMenuItem.sectionId
    const menuItem = activeMenuItem.element

    if (menuItem) {
      this.removeActiveLink({ ignore: menuItem })
      this.ActiveLinkChecker(menuItem)
    }

    if (this.options.onLastScrollInView) {
      if (activeMenuItem.isLastSection) this.options.onLastScrollInView()
    }

    if (this.options.onFirstScrollInView) {
      if (activeMenuItem.isFirstSection) this.options.onFirstScrollInView()
    }
  }

  private executeSectionChanged(
    section: HTMLElement,
    sections: NodeListOf<HTMLElement>
  ): void {
    this.options.onSectionChange(section, sections, this.options.animation)
  }

  private executeonScroll(
    section: HTMLElement,
    sections: NodeListOf<HTMLElement>
  ): void {
    this.options.onScroll(section, sections, this.options.animation)
  }

  /**
   * Method open To All
   * Add an event listener to the window object that calls the boundOnScroll and onSectionScroll methods when the user scrolls.
   * @returns void
   * @since Version 1.0.0
   */

  public bind(): void {
    this.boundOnScroll = this.onScroll.bind(this)
    window.addEventListener("scroll", this.boundOnScroll)
  }

  /**
   * Remove the event listener from the window object that was added by the bind method.
   * @returns void
   * @since Version 1.0.0
   */

  public unbind(): void {
    window.removeEventListener("scroll", this.boundOnScroll)
    this.boundOnScroll = null
  }

  /**
   * Retrieves information about the current active section.
   *
   * @public
   * @function getCurrentSection
   * @param {boolean} isChild - Optional. Specifies whether to include information about child elements of the current section. Default is false.
   * @returns {Object} - An object containing information about the current active section.
   * @since 1.0.0
   */

  public getCurrentSection(isChild: boolean = false) {
    let childObject: any = null
    if (isChild) childObject = this.currentSectionChild()

    const sectioninfo = {
      currentActiveSectionElement: this.currentActiveSection(),
      currentActiveSectionIndex: Array.from(this.sections).indexOf(
        this.currentActiveSection()
      ),
      currentSectionId: this.currentActiveSection().getAttribute("id"),
      currentSectionDataList: this.currentActiveSection().attributes,
      currentSectionClassList: this.currentActiveSection().classList,
      currentSectionChildElementCount:
        this.currentActiveSection().childElementCount,
      currentSectionFirstChild: this.currentActiveSection().firstElementChild,
      currentSectionLastChild: this.currentActiveSection().lastElementChild,
      currentSectiionChildElementNclass: childObject,
    }

    return sectioninfo
  }

  /**
   * Retrieves information about the child elements of the current active section.
   *
   * @private
   * @function currentSectionChild
   * @returns {Array} - An array of objects containing information about the child elements of the current active section.
   * @since 1.0.0
   */

  private currentSectionChild() {
    const children = this.currentActiveSection().children
    const childObjects: {
      tag: string
      attributes: { [key: string]: string }
      classes: string[]
    }[] = []

    for (let i = 0; i < children.length; i++) {
      const child = children[i]

      const attributes: { [key: string]: string } = {}
      for (let j = 0; j < child.attributes.length; j++) {
        const attribute = child.attributes[j]
        attributes[attribute.name] = attribute.value
      }

      const classes = Array.from(child.classList)
      const childObject = { tag: child.tagName, attributes, classes }
      childObjects.push(childObject)
    }
  }
}
