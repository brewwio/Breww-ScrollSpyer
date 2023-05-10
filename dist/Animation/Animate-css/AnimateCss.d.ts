import { AnimationOptionsInterface } from "../../Common_interfaces/Animation_Interface";
import 'animate.css/source/_vars.css';
import 'animate.css/source/_base.css';
declare class AnimateCss {
    private static animLibrary;
    private static fadeUpAnimation;
    private static fadeDownAnimation;
    private static initAnimation;
    private static revertAnimation;
    static animateTwoWay(section: HTMLElement, sections: NodeListOf<HTMLElement>, animationOptions: AnimationOptionsInterface): boolean;
    static animateOneWay(section: HTMLElement, animationOptions: AnimationOptionsInterface): boolean;
}
export default AnimateCss;
