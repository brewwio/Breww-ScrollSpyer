// File: AnimationOptionsInterface.ts
interface AnimationOptionsInterface {
    animType?: string;
    enabled?: boolean;
    animateTwoWay?: boolean;
    opacityDistanceFromCenter?: number;
}
declare class AnimateCss {
    // private static fadeUpAnimation(element: HTMLElement) {
    //   // implementation here
    // }
    // private static fadeDownAnimation(section: HTMLElement) {
    //   console.log(section);
    // }
    private static initAnimation;
    private static revertAnimation;
    animateTwoWay(section: HTMLElement, sections: NodeListOf<HTMLElement>, animationOptions: AnimationOptionsInterface): boolean;
    animateOneWay(section: HTMLElement, animationOptions: AnimationOptionsInterface): boolean;
}
export { AnimateCss as default };
