import { ErrorMessages } from './ErrorMessages';
interface ISpyScrollerOptions {
    sectionSelector: string;
    targetSelector: string;
    topOffset: number;
    hrefAttribute: string;
    activeClass: string[];
    onActive: ((menuItem: HTMLAnchorElement, section: HTMLElement) => void) | null;
    onLastScrollInView: (() => void) | null;
    onFirstScrollInView?: () => void;
}
declare class SpyScroller {
    private readonly boundOnScroll;
    private readonly menuList;
    private readonly options;
    private readonly sections;
    isLastSection: boolean;
    constructor(menu?: string | HTMLElement, options?: Partial<ISpyScrollerOptions>);
    private getCurrentSection;
    private onSectionScroll;
    private getCurrentMenuItem;
    private setActive;
    private removeCurrentActive;
    private onScroll;
    bind(): void;
    unbind(): void;
}
export { SpyScroller, ErrorMessages };
