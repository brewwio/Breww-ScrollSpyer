import { AnimationOptionsInterface } from "../../Common_interfaces/Animation_Interface";
// import 'animate.css/source/_vars.css';

// import 'animate.css/source/_base.css';
// import {applyCss} from  './helper'
const animLibrary = 'animated';
 // import the specific CSS file you need

 
  export default class AnimateCss {
  

  private static fadeUpAnimation(element: HTMLElement) {
    // implementation here
  }
  
  private static fadeDownAnimation(section: HTMLElement) {
    console.log(section);
  }

  private static async initAnimation(section: HTMLElement , animationOptions:AnimationOptionsInterface) {
    
    const animtype = section.getAttribute('anim-type');
    if (animtype && animtype.trim() !== '') {
      section.classList.add(animLibrary);
      section.classList.add(animtype.trim());
      // applyCss(animtype.trim())
    }

  }

  
  private static revertAnimation(sections: NodeListOf<HTMLElement>) {
    const sectionsArray = Array.from(sections);
    sectionsArray.forEach((section) => {
      const animtype = section.getAttribute('anim-type');
      if (animtype && animtype.trim() !== '') {
        section.classList.remove(animtype.trim());
      }
    });
  }

  public  animateTwoWay(section: HTMLElement, sections: NodeListOf<HTMLElement>, animationOptions:AnimationOptionsInterface) {
    if(!animationOptions.enabled) return false
    if (!(section instanceof HTMLElement)) {
      throw new Error("First argument must be of type HTMLElement");
    }

    if (!(sections instanceof NodeList) || sections.length === 0 || !(sections[0] instanceof HTMLElement)) {
      throw new Error("Second argument must be of type NodeListOf<HTMLElement> and cannot be empty");
    }
    AnimateCss.revertAnimation(sections);
    AnimateCss.initAnimation(section,animationOptions);   
  }

  public  animateOneWay(section: HTMLElement, animationOptions:AnimationOptionsInterface) {
    if(!animationOptions.enabled) return false
    if (!(section instanceof HTMLElement)) {
      throw new Error("First argument must be of type HTMLElement");
    }
    AnimateCss.initAnimation(section,animationOptions);   
  }
}

