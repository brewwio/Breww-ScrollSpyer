import { AnimationOptionsInterface } from "../../../Animation_Interface-525872c3.js";
declare class AnimateCss {
    private static fadeUpAnimation;
    private static fadeDownAnimation;
    private static initAnimation;
    private static revertAnimation;
    animateTwoWay(section: HTMLElement, sections: NodeListOf<HTMLElement>, animationOptions: AnimationOptionsInterface): boolean;
    animateOneWay(section: HTMLElement, animationOptions: AnimationOptionsInterface): boolean;
}
export { AnimateCss as default };
