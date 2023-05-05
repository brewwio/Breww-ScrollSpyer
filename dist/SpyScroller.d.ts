import { ErrorMessages } from "./ErrorMessages";
import { AnimationOptionsInterface } from "./Common_interfaces/Animation_Interface";
import './sass/BrewwAnimation.scss';
interface ISpyScrollerOptions {
    sectionSelector: string;
    targetSelector: string;
    topOffset: number | {
        min: number;
        max: number;
        values: {
            maxWidth?: number;
            minWidth?: number;
            topOffset: number;
        }[];
    };
    hrefAttribute: string;
    activeClass: string[];
    onSectionChange?: (section: HTMLElement, sections: NodeListOf<HTMLElement>, animation: object) => void;
    onLastScrollInView: (() => void) | null;
    onFirstScrollInView?: () => void;
    animation: AnimationOptionsInterface;
    smoothScroll: boolean;
}
export default class SpyScroller {
    private boundOnScroll;
    private readonly menuList;
    private readonly options;
    private readonly sections;
    private lastActiveSection;
    isLastSection: boolean;
    constructor(menu?: string | HTMLElement, options?: Partial<ISpyScrollerOptions>);
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
export { SpyScroller, ErrorMessages };
