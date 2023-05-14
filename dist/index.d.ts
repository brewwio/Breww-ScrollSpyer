// File: AnimationOptionsInterface.ts
interface AnimationOptionsInterface {
    animType?: string;
    enabled?: boolean;
    animateTwoWay?: boolean;
    opacityDistanceFromCenter?: number;
}
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
    onSectionChange?: (section: HTMLElement, sections: NodeListOf<HTMLElement>, animation: object) => void;
    onLastScrollInView?: (() => void) | null;
    onFirstScrollInView?: () => void;
    animation?: Partial<AnimationOptionsInterface>;
    smoothScroll: boolean;
}
declare class SpyScroller {
    private boundOnScroll;
    private readonly menuList;
    private readonly options;
    private readonly sections;
    private lastActiveSection;
    isLastSection: boolean;
    // Define a constructor for the SpyScroller class
    constructor(
    // The menu element or its selector that contains the menu items
    menu?: string | HTMLElement, 
    // The options object that configures the behavior of the SpyScroller instance (optional)
    options?: Partial<ISpyScrollerOptions>);
    private setMoothScroll;
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
    private executeLastSectionCallbackIfInView;
    private executeFistSectionCallbackIfInView;
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
// import the specific CSS file you need
declare class AnimateCss {
    private static fadeUpAnimation;
    private static fadeDownAnimation;
    private static initAnimation;
    private static revertAnimation;
    animateTwoWay(section: HTMLElement, sections: NodeListOf<HTMLElement>, animationOptions: AnimationOptionsInterface): boolean;
    animateOneWay(section: HTMLElement, animationOptions: AnimationOptionsInterface): boolean;
}
// _____   _____    _____   _          __  _          __
// |  _  \ |  _  \  | ____| | |        / / | |        / /
// | |_| | | |_| |  | |__   | |  __   / /  | |  __   / /
// |  _  { |  _  /  |  __|  | | /  | / /   | | /  | / /
// | |_| | | | \ \  | |___  | |/   |/ /    | |/   |/ /
// |_____/ |_|  \_\ |_____| |___/|___/     |___/|___/
//                                                    .io
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
    static Bewwopacity(section: HTMLElement, windowHeight: number, scrollPosition: number, animateDistance: number): void;
}
export { SpyScroller, AnimateCss, BrewwAnimations };
