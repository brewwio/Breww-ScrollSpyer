import { ErrorMessages } from './ErrorMessages';

interface ISpyScrollerOptions {
  sectionSelector: string;
  targetSelector: string;
  topOffset: number;
  hrefAttribute: string;
  activeClass: string[];

    onLastScrollInView: (() => void) | null;
    onFirstScrollInView?: () => void;
    opacity: {
      enabled: boolean;
      opacityDistanceFromCenter: number;
    };
    smoothScroll:boolean
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
      targetSelector: options.targetSelector ?? "[data-jump]",
      topOffset: options.topOffset ?? 0,
      hrefAttribute: options.hrefAttribute ?? "href",
      activeClass: Array.isArray(options.activeClass)
        ? options.activeClass
        : ["active"],
      onLastScrollInView: options.onLastScrollInView ?? null,
      onFirstScrollInView: options.onFirstScrollInView ?? null, 
      opacity: {
        enabled: options.opacity?.enabled ?? false,
        opacityDistanceFromCenter: options.opacity?.opacityDistanceFromCenter ?? 50
      },
      smoothScroll: options.smoothScroll ?? false
    };

    this.sections = document.querySelectorAll<HTMLElement>(
      this.options.sectionSelector
    );

    this.onSectionScroll = this.onSectionScroll.bind(this);
    this.boundOnScroll = this.onScroll.bind(this);
    window.addEventListener("scroll", () => {
      this.boundOnScroll();
      if (this.options.opacity?.enabled) this.onSectionScroll();
    });
    if (this.options.smoothScroll) this.setMoothScroll();
  }

  private setMoothScroll(): void {
    const links = document.querySelectorAll<HTMLElement>(this.options.targetSelector);
  
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', (event: any) => {
        event.preventDefault();
        const href = links[i].getAttribute('href');
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      });
    }
  }
  

  private currentActiveSection(): HTMLElement | undefined {
    const currentPosition =
      (document.documentElement.scrollTop || document.body.scrollTop) +
      this.options.topOffset;
    return Array.from(this.sections).find(section => {
      const startAt = section.offsetTop;
      const endAt = startAt + section.offsetHeight;
      return currentPosition >= startAt && currentPosition < endAt;
    });
  }
  
  private onSectionScroll(): void {
    const windowHeight = window.innerHeight;
    const scrollPosition =
      window.scrollY ||
      window.pageYOffset ||
      (document.body.scrollTop +
        (document.documentElement && document.documentElement.scrollTop || 0));
  
    this.sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;
  
      const distanceFromTop = Math.abs(scrollPosition - sectionTop);
      const distanceFromBottom = Math.abs(scrollPosition + windowHeight - sectionBottom);
  
      let opacity = 1;
      let opacityDistanceFromCenter = this.options.opacity.opacityDistanceFromCenter
      // If the section is within 100px from the top or bottom of the viewport, maintain an opacity of 1
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
  

  private getActiveMenuItem(section: HTMLElement): HTMLAnchorElement | undefined {
    if (!section) {
      return;
    }
  
    let sectionId = section.getAttribute("id");
    let attribute = this.options.targetSelector;
  

    if (document.querySelectorAll('[data-jump]').length > 0 && this.options.targetSelector === '[data-jump]') {
      attribute = 'data-jump';
      const items = document.querySelectorAll('[data-jump]')
     return Array.from(items).find(
    item => item.getAttribute(attribute) === sectionId
  ) as HTMLAnchorElement;
    }else{
      return this.menuList.querySelector(
        `[${this.options.hrefAttribute}="#${sectionId}"]`
    );
    }
  
    // Find the active menu item based on the attribute
   
  }
  

  private removeActiveLink(options: { ignore?: HTMLAnchorElement } = {}): void {
    this.menuList.querySelectorAll<HTMLAnchorElement>(this.options.targetSelector).forEach(item => item.classList.remove(...this.options.activeClass));

  }

  private makeActiveLink(menuItem: HTMLAnchorElement): void {
    if (menuItem.matches(this.options.targetSelector) && !this.options.activeClass.some(className => menuItem.classList.contains(className))) {
      menuItem.classList.add(...this.options.activeClass);
    }
    menuItem.scrollIntoView({ behavior: "smooth" });
  }
  

  private onScroll(): void {
    const section = this.currentActiveSection();
    const menuItem = this.getActiveMenuItem(section);
    console.log(menuItem)
    if (menuItem) {
      this.removeActiveLink({ ignore: menuItem });
      this.makeActiveLink(menuItem);
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
    window.addEventListener("scroll", () => {
      this.boundOnScroll();
      if (this.options.opacity?.enabled) this.onSectionScroll();
    });
  }

  public unbind(): void {
    window.removeEventListener("scroll", () => {
      this.boundOnScroll();
      if (this.options.opacity?.enabled) this.onSectionScroll();
    });
  }
}

export { SpyScroller, ErrorMessages };
