import { AnimationOptions } from "./Common_interfaces/Animation_Interface";
import { AnimationType_Interface } from "./Common_interfaces/AnimationType_Interface";
declare class BrewwAnimationHandler {
    private initAnimation;
    static revertAnimation(elements: NodeListOf<HTMLElement>): void;
    animateInitiater(animationObject: AnimationOptions, section: HTMLElement, sections: NodeListOf<HTMLElement>, animationType: AnimationType_Interface): void;
    private animateLibrarySwitcher;
}
export { BrewwAnimationHandler };
