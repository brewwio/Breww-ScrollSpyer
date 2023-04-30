import { ErrorMessages } from "./ErrorMessages";

// Define an interface for the options of the SpyScroller class
interface ISpyScrollerOptions {
  // The selector for the section elements that are linked to the menu items
  sectionSelector: string;
  // The selector for the menu item elements that are linked to the sections
  targetSelector: string;
  // The offset from the top of the window to determine the active section
  topOffset: number;
  // The attribute name that contains the href value of the menu item elements
  hrefAttribute: string;
  // The class name(s) to be added to the active menu item element
  activeClass: string[];

  // A callback function to be executed when the last section is in view
  onLastScrollInView: (() => void) | null;
  // A callback function to be executed when the first section is in view (optional)
  onFirstScrollInView?: () => void;
  // An option to enable or disable the opacity effect for the menu items based on their distance from the center
  opacity: {
    enabled: boolean;
    opacityDistanceFromCenter: number;
  };
  // An option to enable or disable smooth scrolling when clicking on a menu item
  smoothScroll: boolean;
}

class SpyScroller {
  private readonly boundOnScroll: () => void;
  private readonly menuList: HTMLElement;
  private readonly options: ISpyScrollerOptions;
  private readonly sections: NodeListOf<HTMLElement>;
  public isLastSection: boolean = false;

  // Define a constructor for the SpyScroller class
  constructor(
    // The menu element or its selector that contains the menu items
    menu: string | HTMLElement = "#navMain",
    // The options object that configures the behavior of the SpyScroller instance (optional)
    options: Partial<ISpyScrollerOptions> = {}
  ) {
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

    // Set the options property by merging the default values with the provided options
    this.options = {
      sectionSelector: options.sectionSelector ?? "section",
      targetSelector: options.targetSelector ?? "[data-jump]",
      topOffset: options.topOffset ?? 0,
      hrefAttribute: options.hrefAttribute ?? "href",
      activeClass: Array.isArray(options.activeClass) ? options.activeClass : ["active"],
      onLastScrollInView: options.onLastScrollInView ?? null,
      onFirstScrollInView: options.onFirstScrollInView ?? null,
      opacity: {
        enabled: options.opacity?.enabled ?? false,
        opacityDistanceFromCenter: options.opacity?.opacityDistanceFromCenter ?? 50,
      },
      smoothScroll: options.smoothScroll ?? false,
    };

    // Get all the section elements from the document using the sectionSelector option
    this.sections = document.querySelectorAll<HTMLElement>(this.options.sectionSelector);

    // Bind the onSectionScroll and boundOnScroll methods to the current instance
    this.onSectionScroll = this.onSectionScroll.bind(this);
    this.boundOnScroll = this.onScroll.bind(this);
    // Add an event listener to the window object that calls these methods when the user scrolls
    window.addEventListener("scroll", () => {
      this.boundOnScroll();
      if (this.options.opacity?.enabled) this.onSectionScroll();
    });
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
    const currentPosition = (document.documentElement.scrollTop || document.body.scrollTop) + this.options.topOffset;
    return Array.from(this.sections).find((section) => {
      const startAt = section.offsetTop;
      const endAt = startAt + section.offsetHeight;
      return currentPosition >= startAt && currentPosition < endAt;
    });
  }

  /**
   * On scroll event handler to adjust the opacity of sections based on their position in the viewport.
   * @since Version 1.0.0
   * @returns void
   */
  
  private onSectionScroll(): void {
    const windowHeight = window.innerHeight;
    const scrollPosition =
      window.scrollY || window.pageYOffset || document.body.scrollTop + ((document.documentElement && document.documentElement.scrollTop) || 0);

    this.sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;

      const distanceFromTop = Math.abs(scrollPosition - sectionTop);
      const distanceFromBottom = Math.abs(scrollPosition + windowHeight - sectionBottom);

      let opacity = 1;
      let opacityDistanceFromCenter = this.options.opacity.opacityDistanceFromCenter;
      // If the section is within 100pxdefault or based on topOffset  from the top or bottom of the viewport, maintain an opacity of 1
      if (distanceFromTop <= opacityDistanceFromCenter || distanceFromBottom <= opacityDistanceFromCenter) {
        opacity = 1;
      } else {
        const distanceToCenter = windowHeight / 2 - (sectionTop + sectionHeight / 2 - scrollPosition);

        // If the section is within 100px from the center of the viewport, maintain an opacity of 1
        if (Math.abs(distanceToCenter) <= opacityDistanceFromCenter) {
          opacity = 1;
        } else {
          const maxDistanceToCenter = windowHeight / 2 + sectionHeight / 2 - opacityDistanceFromCenter;
          const distanceRatio = Math.min(1, Math.abs(distanceToCenter) / maxDistanceToCenter);
          opacity = 1 - distanceRatio;
        }
      }
      section.style.opacity = opacity.toString();
    });
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
    // Get the current active section based on the scroll position and the top offset
    const section = this.currentActiveSection();
    // Get the corresponding menu item for the active section
    const menuItem = this.getActiveMenuItem(section);

    if (menuItem) {
      // Remove the active class from all menu items except the current one
      this.removeActiveLink({ ignore: menuItem });
      // Check if the current menu item is a submenu and add the active class to its parent if needed
      this.ActiveLinkChecker(menuItem);
    }
    // If a callback function is provided for the last section in view, execute it
    if (this.options.onLastScrollInView) {
      // Get the last section element
      const lastSection = this.sections[this.sections.length - 1];
      // Get its top and bottom positions
      const startAt = lastSection.offsetTop;
      const endAt = startAt + lastSection.offsetHeight;
      // Get the current scroll position with the top offset
      const currentPosition = (document.documentElement.scrollTop || document.body.scrollTop) + this.options.topOffset;
      // Check if the current scroll position is within the last section's range
      const isInView = currentPosition >= startAt && currentPosition < endAt;

      if (isInView) {
        // Call the callback function
        this.options.onLastScrollInView();
      }
    }
    // If a callback function is provided for the first section in view, execute it
    if (this.options.onFirstScrollInView) {
      // Get the first section element
      const firstSection = this.sections[0];
      // Get its top position
      const firstSectionTop = firstSection.offsetTop;
      // Get the current scroll position
      const scrollTop = window.pageYOffset;

      if (scrollTop <= firstSectionTop) {
        // Call the callback function
        this.options.onFirstScrollInView();
      }
    }
  }
  
  
  /**
   * Method open To All
   * Add an event listener to the window object that calls the boundOnScroll and onSectionScroll methods when the user scrolls.
   * @returns void
   * @since Version 1.0.0
   */

  public bind(): void {
    window.addEventListener("scroll", () => {
      // Call the boundOnScroll method to update the active menu item based on the current section
      this.boundOnScroll();
      // If opacity option is enabled, call the onSectionScroll method to update the opacity of the menu items based on the scroll position
      if (this.options.opacity?.enabled) this.onSectionScroll();
    });
  }


  /**
   * Remove the event listener from the window object that was added by the bind method.
   * @returns void
   * @since Version 1.0.0
   */

  public unbind(): void {
    window.removeEventListener("scroll", () => {
      // Stop calling the boundOnScroll and onSectionScroll methods when the user scrolls
      this.boundOnScroll();
      if (this.options.opacity?.enabled) this.onSectionScroll();
    });
  }
}

export { SpyScroller, ErrorMessages };
