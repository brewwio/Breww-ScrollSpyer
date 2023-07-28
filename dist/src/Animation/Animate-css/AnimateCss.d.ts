import { AnimationOptionsInterface } from "../../../Animation_Interface-46efa467.js";
declare class AnimateCss {
    private static initAnimation;
    private static revertAnimation;
    animateTwoWay(section: HTMLElement, sections: NodeListOf<HTMLElement>, animationOptions: AnimationOptionsInterface): void | boolean;
    animateOneWay(section: HTMLElement, animationOptions: AnimationOptionsInterface): void | boolean;
}
export { AnimateCss as default };
