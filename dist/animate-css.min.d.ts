interface AnimationOptionsInterface {
    animType?: string;
    enabled?: boolean;
    animateTwoWay?: boolean;
    opacityDistanceFromCenter?: number;
}
declare class AnimateCss {
    private static initAnimation;
    private static revertAnimation;
    animateTwoWay(section: HTMLElement, sections: NodeListOf<HTMLElement>, animationOptions: AnimationOptionsInterface): void | boolean;
    animateOneWay(section: HTMLElement, animationOptions: AnimationOptionsInterface): void | boolean;
}
export { AnimateCss as default };
