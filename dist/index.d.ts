interface AnimationOptionsInterface {
    animType?: string;
    enabled?: boolean;
    animateTwoWay?: boolean;
    opacityDistanceFromCenter?: number;
}

interface ISpyScrollerOptions {
    sectionSelector: string;
    targetSelector: string;
    topOffset: {
        maxWidth?: number;
        minWidth?: number;
        topOffset: number;
    }[];
    activeClass: string[];
    onSectionChange?: (section: HTMLElement, sections: NodeListOf<HTMLElement>, animation: object) => void;
    onScroll?: (currentSection: HTMLElement, sections: NodeListOf<HTMLElement>, animation: object) => void;
    easing: {
        enabled?: boolean;
        type?: string;
    };
    onLastScrollInView?: (() => void) | null;
    onFirstScrollInView?: () => void;
    animation?: Partial<AnimationOptionsInterface>;
}
declare class SpyScroller {
    private boundOnScroll;
    private readonly menuList;
    private readonly options;
    private readonly sections;
    private lastActiveSection;
    isLastSection: boolean;
    private readonly Navmenu;
    constructor(menu?: string | HTMLElement, options?: Partial<ISpyScrollerOptions>);
    private easing;
    private scrollTo;
    private currentActiveSection;
    private getTopOffset;
    private getOffset;
    /**
     * Returns the active menu item based on the current active section
     * @since Version 1.0.0
     * @param section The currently active section
     * @returns The HTML anchor element of the corresponding menu item
     */
    private getActiveMenuItem;
    private removeActiveLink;
    /**
     * Check if the menuItem is a match to the targetSelector and doesn't contain activeClass,
     * if true, add the activeClass to the menuItem and call handleSubmenu function.
     * @param menuItem - the HTMLAnchorElement to be checked.
     * @returns void
     * @since Version 1.0.0
     */
    private ActiveLinkChecker;
    /**
     * Check if the menuItem is a submenu and add the active class to its parent <li> element if needed.
     * @param menuItem - the HTMLAnchorElement that represents the menu item to be checked.
     * @returns boolean - true if the menuItem is a submenu and its parent <li> element was updated, false otherwise.
     * @since Version 1.0.0
     */
    private handleSubmenu;
    /**
     * Perform actions based on the current scroll position and the active section and menu item.
     * @returns void
     * @since Version 1.0.0
     */
    private onScroll;
    private executeSectionChanged;
    private executeonScroll;
    /**
     * Method open To All
     * Add an event listener to the window object that calls the boundOnScroll and onSectionScroll methods when the user scrolls.
     * @returns void
     * @since Version 1.0.0
     */
    bind(): void;
    /**
     * Remove the event listener from the window object that was added by the bind method.
     * @returns void
     * @since Version 1.0.0
     */
    unbind(): void;
    getCurrentSection(isChild?: boolean): {
        currentActiveSectionElement: HTMLElement;
        currentActiveSectionIndex: number;
        currentSectionId: string;
        currentSectionDataList: NamedNodeMap;
        currentSectionClassList: DOMTokenList;
        currentSectionChildElementCount: number;
        currentSectionFirstChild: Element;
        currentSectionLastChild: Element;
        currentSectiionChildElementNclass: any;
    };
    private currentSectionChild;
}

declare class AnimateCss {
    private static initAnimation;
    private static revertAnimation;
    animateTwoWay(section: HTMLElement, sections: NodeListOf<HTMLElement>, animationOptions: AnimationOptionsInterface): boolean;
    animateOneWay(section: HTMLElement, animationOptions: AnimationOptionsInterface): boolean;
}

declare class BrewwAnimations {
    /**
    Sets the opacity of the given section based on scroll position and distance from the center of the viewport.
    @param section - The section element to apply the opacity effect to.
    @param windowHeight - The height of the viewport.
    @param scrollPosition - The current scroll position of the window.
    @param animateDistance - The distance from the center of the viewport at which the section should start fading.
    @since 1.0.0
    #returns void
    @NOTE  ---------------------------------------- >>>> :-) :-) -------------------->
    Currently opacity is set to default, it's one of the most famous styles or animations used by worldwide developers, so we implemented it first. Currently, we are planning to add more animations and transforms. But we did not want to give a bad impression, so we have enabled users to use third-party animation libraries. Currently, we support 'animate'.
    **/
    static Bewwopacity(sections: NodeListOf<HTMLElement>, animateDistance: number): void;
    static linear(p: number): number;
    static easeInQuad(t: number, b: number, c: number, d: number): number;
    static easeOutQuad(t: number, b: number, c: number, d: number): number;
    static easeInOutQuad(t: number, b: number, c: number, d: number): number;
    static easeInCubic(t: number, b: number, c: number, d: number): number;
    static easeOutCubic(t: number, b: number, c: number, d: number): number;
    static easeInOutCubic(t: number, b: number, c: number, d: number): number;
    static easeInQuart(t: number, b: number, c: number, d: number): number;
    static easeOutQuart(t: number, b: number, c: number, d: number): number;
    static easeInOutQuart(t: number, b: number, c: number, d: number): number;
    static easeInQuint(t: number, b: number, c: number, d: number): number;
    static easeOutQuint(t: number, b: number, c: number, d: number): number;
    static easeInOutQuint(t: number, b: number, c: number, d: number): number;
    static easeInSine(t: number, b: number, c: number, d: number): number;
    static easeOutSine(t: number, b: number, c: number, d: number): number;
    static easeInOutSine(t: number, b: number, c: number, d: number): number;
    static easeInExpo(t: number, b: number, c: number, d: number): number;
    static easeOutExpo(t: number, b: number, c: number, d: number): number;
    static easeInOutExpo(t: number, b: number, c: number, d: number): number;
    static easeInCirc(t: number, b: number, c: number, d: number): number;
    static easeOutCirc(t: number, b: number, c: number, d: number): number;
    static easeInOutCirc(t: number, b: number, c: number, d: number): number;
    static easeOutElastic(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number;
    static easeOutBounce(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number;
}

export { AnimateCss, BrewwAnimations, SpyScroller };
