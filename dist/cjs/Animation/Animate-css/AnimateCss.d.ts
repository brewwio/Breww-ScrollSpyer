import { AnimationOptionsInterface } from "../../Common_interfaces/Animation_Interface";
export default class AnimateCss {
    private static fadeUpAnimation;
    private static fadeDownAnimation;
    private static initAnimation;
    private static revertAnimation;
    animateTwoWay(section: HTMLElement, sections: NodeListOf<HTMLElement>, animationOptions: AnimationOptionsInterface): boolean;
    animateOneWay(section: HTMLElement, animationOptions: AnimationOptionsInterface): boolean;
}
