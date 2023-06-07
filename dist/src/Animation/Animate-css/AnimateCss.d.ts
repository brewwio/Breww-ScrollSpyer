import { AnimationOptionsInterface } from "../../../Animation_Interface-46efa467.js";
declare class AnimateCss {
    private static initAnimation;
    private static revertAnimation;
    Bewwopacity(sections: NodeListOf<HTMLElement>, animateDistance: number): void;
    animateTwoWay(section: HTMLElement, sections: NodeListOf<HTMLElement>, animationOptions: AnimationOptionsInterface): boolean;
    animateOneWay(section: HTMLElement, animationOptions: AnimationOptionsInterface): boolean;
}
export { AnimateCss as default };
