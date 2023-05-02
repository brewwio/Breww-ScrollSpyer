import { AnimationOptions } from "./Common_interfaces/Animation_Interface";
import { AnimationType_Interface } from "./Common_interfaces/AnimationType_Interface";
declare class BrewwAnimationHandler {
    /**
     *
    Initializes the animation for the given section based on the specified animation library and type.
    @param section - The section element to apply the animation to.
    @since 1.0.0
    @returns void
    **/
    private initAnimation;
    /**
      Reverts the animation applied to the given elements by removing the corresponding CSS class.
      @param elements - A NodeList containing the elements to revert the animation on.
      @since 1.0.0
      @returns void
    **/
    static revertAnimation(elements: NodeListOf<HTMLElement>): void;
    animateInitiater(animationObject: AnimationOptions, section: HTMLElement, sections: NodeListOf<HTMLElement>, animationType: AnimationType_Interface): void;
}
export { BrewwAnimationHandler };
