// _____   _____    _____   _          __  _          __ 
// |  _  \ |  _  \  | ____| | |        / / | |        / / 
// | |_| | | |_| |  | |__   | |  __   / /  | |  __   / /  
// |  _  { |  _  /  |  __|  | | /  | / /   | | /  | / /   
// | |_| | | | \ \  | |___  | |/   |/ /    | |/   |/ /    
// |_____/ |_|  \_\ |_____| |___/|___/     |___/|___/     
//                                                    .io






import { AnimationOptionsInterface } from "./Common_interfaces/Animation_Interface";

// import './sass/BrewwAnimation.scss';
// Define an interface for the options of the SpyScroller class
interface ISpyScrollerOptions {
  sectionSelector: string;
  targetSelector: string;
  topOffset: {
    min?: number;
    max?: number;
    values?: {
      maxWidth?: number;
      minWidth?: number;
      topOffset: number;
    }[];
  };
  hrefAttribute: string;
  activeClass: string[];
  onSectionChange?: (
    section: HTMLElement,
    sections: NodeListOf<HTMLElement>,
    animation: object
  ) => void;
  onLastScrollInView?: (() => void) | null;
  onFirstScrollInView?: () => void;
  animation?: Partial<AnimationOptionsInterface>;
  smoothScroll: boolean;
}


export default class SpyScroller {
  private boundOnScroll: () => void;
  private readonly menuList: HTMLElement;
  private readonly options: ISpyScrollerOptions;
  private readonly sections: NodeListOf<HTMLElement>;
  private lastActiveSection: HTMLElement
  public isLastSection: boolean = false;

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
      topOffset: { min: 0, max: 0, values: [{ topOffset: 500 }] },
      hrefAttribute: options.hrefAttribute ?? "href",
      activeClass: Array.isArray(options.activeClass) ? options.activeClass : ["active"],
      onLastScrollInView: options.onLastScrollInView ?? null,
      onFirstScrollInView: options.onFirstScrollInView ?? null,
      onSectionChange: options.onSectionChange ?? null,
      animation: {
        animType: options.animation?.animType ?? "attribute",
        enabled: options.animation?.enabled ?? false,
        animateTwoWay: options.animation?.animateTwoWay ?? true,
        opacityDistanceFromCenter: options.animation?.opacityDistanceFromCenter ?? 50,
      },
      smoothScroll: options.smoothScroll ?? false,

    };


    // Validate the menu argument and throw an error if it is empty or invalid
    if (!menu) {
      throw new Error("First argument cannot be empty");
    }
    if (!(typeof menu === "string" || menu instanceof HTMLElement)) {
      throw new TypeError("menu can be either string or an instance of HTMLElement");
    }

    // Validate the options argument and throw an error if it is not an object
    if (typeof options !== "object") {
      throw new TypeError("options can only be of type object");
    }

    // Get the menu element from the menu argument or query the document for it
    this.menuList = menu instanceof HTMLElement ? menu : document.querySelector(menu);
    // Throw an error if no menu element is found
    if (!this.menuList) {
      throw new Error(`No menu element found for selector "${menu}"`);
    }

    // Get all the section elements from the document using the sectionSelector option
    this.sections = document.querySelectorAll<HTMLElement>(this.options.sectionSelector);

    // Bind the onSectionScroll and boundOnScroll methods to the current instance
    this.boundOnScroll = this.onScroll.bind(this);
    this.bind()
    // If smoothScroll option is enabled, call the setMoothScroll method to enable smooth scrolling behavior
    if (this.options.smoothScroll) this.setMoothScroll();
  }

  private setMoothScroll(): void {
    const links = document.querySelectorAll<HTMLElement>(this.options.targetSelector);

    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", (event: any) => {
        event.preventDefault();
        const href = links[i].getAttribute("href");
        document.querySelector(href).scrollIntoView({ behavior: "smooth" });
      });
    }
  }

  private currentActiveSection(): HTMLElement | undefined {
    const currentPosition =
      (document.documentElement.scrollTop || document.body.scrollTop) +
      this.getTopOffset();
    return Array.from(this.sections).find((section) => {
      const startAt = this.getOffset(section);
      const endAt = startAt + section.offsetHeight;
      return currentPosition >= startAt && currentPosition < endAt;
    });
  }
  
  private getTopOffset(): number {
    const screenWidth = window.innerWidth;
    let topOffset = 200;
  
    if (Array.isArray(this.options.topOffset)) {
      for (const option of this.options.topOffset) {
        if (
          (!option.minWidth || screenWidth >= option.minWidth) &&
          (!option.maxWidth || screenWidth <= option.maxWidth)
        ) {
          topOffset = option.topOffset;
        }
      }
    } else if (typeof this.options.topOffset === 'number') {
      topOffset = this.options.topOffset;
    }
  console.log("topoffset"+topOffset)
    return topOffset;
  }
  
  
  
  private getOffset(element: HTMLElement, horizontal = false): number {
    if (!element) {
      return 0;
    }
    const parentElement = element.offsetParent as HTMLElement;
    return (
      this.getOffset(parentElement, horizontal) +
      (horizontal ? element.offsetLeft : element.offsetTop)
    );
  }
  
  
  /**
   * Returns the active menu item based on the current active section
   * @since Version 1.0.0
   * @param section The currently active section
   * @returns The HTML anchor element of the corresponding menu item
   */

  private getActiveMenuItem(section: HTMLElement): HTMLAnchorElement | undefined {
    if (!section) {
      return;
    }

    let sectionId = section.getAttribute("id");
    let attribute = this.options.targetSelector;
    if (this.options.targetSelector === "[data-jump]") {
      attribute = "data-jump";
      const items = document.querySelectorAll("[data-jump]");
      return Array.from(items).find((item) => item.getAttribute(attribute) === sectionId) as HTMLAnchorElement;
    } else {
      return this.menuList.querySelector(`[href="#${sectionId}"]`);
    }
  }

  private removeActiveLink(options: { ignore?: HTMLAnchorElement } = {}): void {
    this.menuList
      .querySelectorAll<HTMLAnchorElement>(this.options.targetSelector)
      .forEach((item) => item.classList.remove(...this.options.activeClass));
  }


  /**
   * Check if the menuItem is a match to the targetSelector and doesn't contain activeClass,
   * if true, add the activeClass to the menuItem and call handleSubmenu function.
   * @param menuItem - the HTMLAnchorElement to be checked.
   * @returns void
   * @since Version 1.0.0
   */

  private ActiveLinkChecker(menuItem: HTMLAnchorElement): void {
    if (menuItem.matches(this.options.targetSelector) && !this.options.activeClass.some((className) => menuItem.classList.contains(className))) {
      menuItem.classList.add(...this.options.activeClass);
      this.handleSubmenu(menuItem); // call handleSubmenu function to check for submenu and add active class
    }
    menuItem.scrollIntoView({ behavior: "smooth" }); // scroll the menuItem into view with smooth behavior
  }


  /**
   * Check if the menuItem is a submenu and add the active class to its parent <li> element if needed.
   * @param menuItem - the HTMLAnchorElement that represents the menu item to be checked.
   * @returns boolean - true if the menuItem is a submenu and its parent <li> element was updated, false otherwise.
   * @since Version 1.0.0
   */

  private handleSubmenu(menuItem: HTMLAnchorElement): boolean {
    // Check if the current section is nested inside a <ul> tag
    const parentLi = menuItem.closest("li");
    if (parentLi) {
      const parentUl = parentLi.closest("ul");
      if (parentUl && parentUl.closest("li")) {
        const parentLi = parentUl.closest("li");
        if (parentLi) {
          // Add the active class to the parent <li> element
          parentLi.classList.add(...this.options.activeClass);
          // Return true to indicate that the submenu was handled
          return true;
        }
      }
    }
    // Return false to indicate that the submenu was not handled
    return false;
  }


  /**
   * Perform actions based on the current scroll position and the active section and menu item.
   * @returns void
   * @since Version 1.0.0
   */

  private onScroll(): void {
    const section = this.currentActiveSection();
    if (this.lastActiveSection == section) return
    this.lastActiveSection = section

    this.executeSectionChanged(section, this.sections);

    const menuItem = this.getActiveMenuItem(section);
    //if (this.options.animation.enabled) BrewwAnimationHandlerObj.animateInitiater(this.options.animation,section,this.sections,this.options.animationType);

    if (menuItem) {
      this.removeActiveLink({ ignore: menuItem });
      this.ActiveLinkChecker(menuItem);
    }

    if (this.options.onLastScrollInView) {
      this.executeLastSectionCallbackIfInView(section)
    }

    if (this.options.onFirstScrollInView) {
      this.executeFistSectionCallbackIfInView(section)
    }
  }

  private executeSectionChanged(section: HTMLElement, sections: NodeListOf<HTMLElement>): void {
    this.options.onSectionChange(section, sections, this.options.animation);
  }

  private executeLastSectionCallbackIfInView(section: HTMLElement) {
    // const lastSection = this.sections[this.sections.length - 1];
    // const startAt = lastSection.offsetTop;
    // const endAt = startAt + lastSection.offsetHeight;
    // const currentPosition = (document.documentElement.scrollTop || document.body.scrollTop) + this.options.topOffset;
    // if (currentPosition >= startAt && currentPosition < endAt) {
    //   this.options.onLastScrollInView();
    // }
  }

  private executeFistSectionCallbackIfInView(section: HTMLElement) {
    // const firstSection = this.sections[0];
    // const firstSectionTop = firstSection.offsetTop;
    // const scrollTop = window.pageYOffset;

    // if (scrollTop <= firstSectionTop) {
    //   this.options.onFirstScrollInView();
    // }
  }

  /**
   * Method open To All
   * Add an event listener to the window object that calls the boundOnScroll and onSectionScroll methods when the user scrolls.
   * @returns void
   * @since Version 1.0.0
   */

  public bind(): void {
    this.boundOnScroll = this.onScroll.bind(this);
    window.addEventListener("scroll", this.boundOnScroll);
  }


  /**
   * Remove the event listener from the window object that was added by the bind method.
   * @returns void
   * @since Version 1.0.0
   */

  public unbind(): void {

    window.removeEventListener("scroll", this.boundOnScroll);
    this.boundOnScroll = null;
  }

  public getCurrentSection(isChild: boolean = false) {  

    let childObject : any = null;
    if (isChild)  childObject = this.currentSectionChild();
        
    let sectioninfo = {
      currentActiveSectionElement: this.currentActiveSection(),
      currentActiveSectionIndex: Array.from(this.sections).indexOf(this.currentActiveSection()),
      currentSectionId: this.currentActiveSection().getAttribute("id"),
      currentSectionDataList: this.currentActiveSection().attributes,
      currentSectionClassList: this.currentActiveSection().classList,
      currentSectionChildElementCount: this.currentActiveSection().childElementCount,
      currentSectionFirstChild: this.currentActiveSection().firstElementChild,
      currentSectionLastChild: this.currentActiveSection().lastElementChild,
      currentSectiionChildElementNclass:  childObject
    };

    return sectioninfo;
  }


  private currentSectionChild()
  {
    const children = this.currentActiveSection().children;
    const childObjects: { tag: string, attributes: { [key: string]: string }, classes: string[] }[] = [];

    for (let i = 0; i < children.length; i++) {
      const child = children[i];

      const attributes: { [key: string]: string } = {};
      for (let j = 0; j < child.attributes.length; j++) {
        const attribute = child.attributes[j];
        attributes[attribute.name] = attribute.value;
      }

      const classes = Array.from(child.classList);
      const childObject = { tag: child.tagName, attributes, classes };
      childObjects.push(childObject);
    }
  }
}

