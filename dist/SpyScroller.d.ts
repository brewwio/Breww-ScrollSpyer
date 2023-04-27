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
    smoothScroll: boolean;
}
declare class SpyScroller {
    private readonly boundOnScroll;
    private readonly menuList;
    private readonly options;
    private readonly sections;
    isLastSection: boolean;
    constructor(menu?: string | HTMLElement, options?: Partial<ISpyScrollerOptions>);
    private setMoothScroll;
    private currentActiveSection;
    private onSectionScroll;
    private getActiveMenuItem;
    private removeActiveLink;
    private makeActiveLink;
    private onScroll;
    bind(): void;
    unbind(): void;
}
export { SpyScroller, ErrorMessages };
