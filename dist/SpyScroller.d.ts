import { ErrorMessages } from "./ErrorMessages";
import { AnimationOptions } from "./Common_interfaces/Animation_Interface";
import './sass/BrewwAnimation.scss';
interface ISpyScrollerOptions {
    sectionSelector: string;
    targetSelector: string;
    topOffset: number;
    hrefAttribute: string;
    activeClass: string[];
    onLastScrollInView: (() => void) | null;
    onFirstScrollInView?: () => void;
    animation: AnimationOptions;
    smoothScroll: boolean;
}
declare class SpyScroller {
    private readonly boundOnScroll;
    private readonly menuList;
    private readonly options;
    private readonly sections;
    private lastActiveSection;
    isLastSection: boolean;
    constructor(menu?: string | HTMLElement, options?: Partial<ISpyScrollerOptions>);
    private setMoothScroll;
    private currentActiveSection;
    /**
     * On scroll event handler to adjust the opacity of sections based on their position in the viewport.
     * @since Version 1.0.0
     * @returns void
     */
    private onSectionScroll;
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
}
export { SpyScroller, ErrorMessages };
