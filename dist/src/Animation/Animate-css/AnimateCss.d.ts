interface AnimationOptionsInterface {
    animType?: string;
    enabled?: boolean;
    animateTwoWay?: boolean;
    opacityDistanceFromCenter?: number;
}
declare class AnimateCss {
    private static initAnimation;
    private static revertAnimation;
    animateTwoWay(section: HTMLElement, sections: NodeListOf<HTMLElement>, animationOptions: AnimationOptionsInterface): boolean;
    animateOneWay(section: HTMLElement, animationOptions: AnimationOptionsInterface): boolean;
}
export { AnimationOptionsInterface, AnimateCss as default };
