import { AnimationOptionsInterface } from "src/Common_interfaces/Animation_Interface";
declare class AnimateCss {
    private static initAnimation;
    private static revertAnimation;
    animateTwoWay(section: HTMLElement, sections: NodeListOf<HTMLElement>, animationOptions: AnimationOptionsInterface): void | boolean;
    animateOneWay(section: HTMLElement, animationOptions: AnimationOptionsInterface): void | boolean;
}
export { AnimateCss as default };
