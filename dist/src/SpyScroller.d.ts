import { AnimationOptionsInterface } from "./Animation/Animate-css/AnimateCss.js";
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
    readonly sections: NodeListOf<HTMLElement>;
    private lastActiveSection;
    isLastSection: boolean;
    private readonly Navmenu;
    // Define a constructor for the SpyScroller class
    constructor(menu?: string | HTMLElement, options?: Partial<ISpyScrollerOptions>);
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
    private easing;
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
    private scrollTo;
    /**
     * Retrieves the currently active section based on the current scroll position.
     *
     * @private
     * @function currentActiveSection
     * @returns {HTMLElement | undefined} - The currently active section element, or undefined if no section is active.
     * @since 1.0.0
     */
    /**
     * Retrieves the currently active section based on the current scroll position.
     *
     * @private
     * @function currentActiveSection
     * @returns {HTMLElement | undefined} - The currently active section element, or undefined if no section is active.
     * @since 1.0.0
     */
    private currentActiveSection;
    /**
     * Retrieves the top offset value based on the current screen width and options configuration.
     *
     * @private
     * @function getTopOffset
     * @returns {number} - The top offset value to be used.
     * @since 1.0.0
     */
    /**
     * Retrieves the top offset value based on the current screen width and options configuration.
     *
     * @private
     * @function getTopOffset
     * @returns {number} - The top offset value to be used.
     * @since 1.0.0
     */
    private getTopOffset;
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
    private getOffset;
    /**
     * Retrieves the active menu item information based on the specified section element.
     *
     * @private
     * @function getActiveMenuItem
     * @param {HTMLElement} section - The section element for which to retrieve the active menu item.
     * @returns {Object | undefined} - The active menu item information, including sectionId, element, isLastSection, and isFirstSection. Returns undefined if the section is not valid.
     * @since 1.0.0
     */
    /**
     * Retrieves the active menu item information based on the specified section element.
     *
     * @private
     * @function getActiveMenuItem
     * @param {HTMLElement} section - The section element for which to retrieve the active menu item.
     * @returns {Object | undefined} - The active menu item information, including sectionId, element, isLastSection, and isFirstSection. Returns undefined if the section is not valid.
     * @since 1.0.0
     */
    private getActiveMenuItem;
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
    private removeActiveLink;
    /**
     * Checks and updates the active state of a menu link based on the provided menu item element.
     *
     * @private
     * @function ActiveLinkChecker
     * @param {HTMLAnchorElement} menuItem - The menu item element to check and update the active state for.
     * @returns {void}
     * @since 1.0.0
     */
    /**
     * Checks and updates the active state of a menu link based on the provided menu item element.
     *
     * @private
     * @function ActiveLinkChecker
     * @param {HTMLAnchorElement} menuItem - The menu item element to check and update the active state for.
     * @returns {void}
     * @since 1.0.0
     */
    private ActiveLinkChecker;
    /**
     * Handles the submenu behavior for a given menu item by adding the active class to its parent list item if applicable.
     *
     * @private
     * @function handleSubmenu
     * @param {HTMLAnchorElement} menuItem - The menu item element for which to handle the submenu behavior.
     * @returns {boolean} - Indicates whether the submenu was successfully handled and the active class was added to the parent list item.
     * @since 1.0.0
     */
    /**
     * Handles the submenu behavior for a given menu item by adding the active class to its parent list item if applicable.
     *
     * @private
     * @function handleSubmenu
     * @param {HTMLAnchorElement} menuItem - The menu item element for which to handle the submenu behavior.
     * @returns {boolean} - Indicates whether the submenu was successfully handled and the active class was added to the parent list item.
     * @since 1.0.0
     */
    private handleSubmenu;
    /**
     * Perform actions based on the current scroll position and the active section and menu item.
     * @returns void
     * @since Version 1.0.0
     */
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
    /**
     * Remove the event listener from the window object that was added by the bind method.
     * @returns void
     * @since Version 1.0.0
     */
    unbind(): void;
    /**
     * Retrieves information about the current active section.
     *
     * @public
     * @function getCurrentSection
     * @param {boolean} isChild - Optional. Specifies whether to include information about child elements of the current section. Default is false.
     * @returns {Object} - An object containing information about the current active section.
     * @since 1.0.0
     */
    /**
     * Retrieves information about the current active section.
     *
     * @public
     * @function getCurrentSection
     * @param {boolean} isChild - Optional. Specifies whether to include information about child elements of the current section. Default is false.
     * @returns {Object} - An object containing information about the current active section.
     * @since 1.0.0
     */
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
    /**
     * Retrieves information about the child elements of the current active section.
     *
     * @private
     * @function currentSectionChild
     * @returns {Array} - An array of objects containing information about the child elements of the current active section.
     * @since 1.0.0
     */
    /**
     * Retrieves information about the child elements of the current active section.
     *
     * @private
     * @function currentSectionChild
     * @returns {Array} - An array of objects containing information about the child elements of the current active section.
     * @since 1.0.0
     */
    private currentSectionChild;
}
export { SpyScroller as default };
