import { ErrorMessages } from './ErrorMessages';

interface ISpyScrollerOptions {
  sectionSelector: string;
  targetSelector: string;
  topOffset: number;
  hrefAttribute: string;
  activeClass: string[];
  onActive:
    | ((menuItem: HTMLAnchorElement, section: HTMLElement) => void)
    | null;
    onLastScrollInView: (() => void) | null;
    onFirstScrollInView?: () => void;
}

class SpyScroller {
  private readonly boundOnScroll: () => void;
  private readonly menuList: HTMLElement;
  private readonly options: ISpyScrollerOptions;
  private readonly sections: NodeListOf<HTMLElement>;
  public isLastSection: boolean = false;


  constructor(
    menu: string | HTMLElement = "#navMain",
    options: Partial<ISpyScrollerOptions> = {}
  ) {
    if (!menu) {
      throw new Error("First argument cannot be empty");
    }
    if (!(typeof menu === "string" || menu instanceof HTMLElement)) {
      throw new TypeError(
        "menu can be either string or an instance of HTMLElement"
      );
    }

    if (typeof options !== "object") {
      throw new TypeError("options can only be of type object");
    }

    this.menuList =
      menu instanceof HTMLElement ? menu : document.querySelector(menu);
    if (!this.menuList) {
      throw new Error(`No menu element found for selector "${menu}"`);
    }

    this.options = {
      sectionSelector: options.sectionSelector ?? "section",
      targetSelector: options.targetSelector ?? "a",
      topOffset: options.topOffset ?? 0,
      hrefAttribute: options.hrefAttribute ?? "href",
      activeClass: Array.isArray(options.activeClass)
        ? options.activeClass
        : ["active"],
      onActive: options.onActive ?? null,
      onLastScrollInView: options.onLastScrollInView ?? null,
      onFirstScrollInView: options.onFirstScrollInView ?? null, 
    };

    this.sections = document.querySelectorAll<HTMLElement>(
      this.options.sectionSelector
    );

    this.onSectionScroll = this.onSectionScroll.bind(this);
    this.boundOnScroll = this.onScroll.bind(this);
    window.addEventListener("scroll", this.boundOnScroll);
  }

  private getCurrentSection(): HTMLElement | undefined {
    for (let i = 0; i < this.sections.length; i++) {
      const section = this.sections[i];
      const startAt = section.offsetTop;
      const endAt = startAt + section.offsetHeight;
      const currentPosition =
        (document.documentElement.scrollTop || document.body.scrollTop) +
        this.options.topOffset;
      const isInView = currentPosition >= startAt && currentPosition < endAt;
      if (isInView) {
        return section;
      }
    }
  }


  private onSectionScroll(): void {
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

    this.sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;

      // Calculate the distance from the section to the center of the viewport
      const distanceToCenter =
        windowHeight / 2 - (sectionTop + sectionHeight / 2 - scrollPosition);

      // Calculate the maximum distance from the center of the viewport that should be faded out
      const maxDistanceToCenter = windowHeight / 2 + sectionHeight / 2;

      // Calculate the opacity based on the distance from the center of the viewport
      let opacity = 1;
      if (distanceToCenter > maxDistanceToCenter) {
        opacity = 0;
      } else if (distanceToCenter > 0) {
        opacity = 1 - distanceToCenter / maxDistanceToCenter;
      }

      // Set the opacity of the section
      section.style.opacity = `${opacity}`;

      
    });
  }

  private getCurrentMenuItem(
    section: HTMLElement
  ): HTMLAnchorElement | undefined {
    if (!section) {
      return;
    }

    const sectionId = section.getAttribute("id");
    return this.menuList.querySelector<HTMLAnchorElement>(
      `[${this.options.hrefAttribute}="#${sectionId}"]`
    );
  }

  private setActive(menuItem: HTMLAnchorElement, section: HTMLElement): void {
    const hasActiveClass = this.options.activeClass.some((className) =>
      menuItem.classList.contains(className)
    );

    if (!hasActiveClass) {
      menuItem.classList.add(...this.options.activeClass);

      if (this.options.onActive) {
        this.options.onActive(menuItem, section);
      }
    }
  }

  private removeCurrentActive(
    options: { ignore: HTMLAnchorElement | null } = { ignore: null }
  ): void {
    const { hrefAttribute, targetSelector } = this.options;
    const menuItems = this.menuList.querySelectorAll<HTMLAnchorElement>(
      `${targetSelector}:not([${hrefAttribute}="${options.ignore?.getAttribute(
        hrefAttribute
      )}"])`
    );

    menuItems.forEach((item) =>
      item.classList.remove(...this.options.activeClass)
    );
  }

  private onScroll(): void {
    const section = this.getCurrentSection();
    const menuItem = this.getCurrentMenuItem(section);

    if (menuItem) {
      this.removeCurrentActive({ ignore: menuItem });
      this.setActive(menuItem, section);
    }
    if (this.options.onLastScrollInView) {
      const lastSection = this.sections[this.sections.length - 1];
      const startAt = lastSection.offsetTop;
      const endAt = startAt + lastSection.offsetHeight;
      const currentPosition = (document.documentElement.scrollTop || document.body.scrollTop) + this.options.topOffset;
      const isInView = currentPosition >= startAt && currentPosition < endAt;

      if (isInView) {
        this.options.onLastScrollInView();
      }
    }
    if (this.options.onFirstScrollInView ) {

      const firstSection = this.sections[0];
      const firstSectionTop = firstSection.offsetTop;
      const scrollTop = window.pageYOffset;

      if (scrollTop <= firstSectionTop) {
        this.options.onFirstScrollInView();
      }
    }
    
  }

  //PUBLIC METHODS
  public bind(): void {
    window.addEventListener("scroll", this.boundOnScroll);
  }

  public unbind(): void {
    window.removeEventListener("scroll", this.boundOnScroll);
  }
}

export { SpyScroller, ErrorMessages };
