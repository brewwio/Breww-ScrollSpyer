// _____   _____    _____   _          __  _          __ 
// |  _  \ |  _  \  | ____| | |        / / | |        / / 
// | |_| | | |_| |  | |__   | |  __   / /  | |  __   / /  
// |  _  { |  _  /  |  __|  | | /  | / /   | | /  | / /   
// | |_| | | | \ \  | |___  | |/   |/ /    | |/   |/ /    
// |_____/ |_|  \_\ |_____| |___/|___/     |___/|___/     
//                                                    .io

import { AnimationOptions } from "./Common_interfaces/Animation_Interface";
import {AnimationType_Interface} from "./Common_interfaces/AnimationType_Interface";

class BrewwAnimationHandler {
   
    private initAnimation(section: HTMLElement) {
      const animLibrary = section.getAttribute('anim-library');
      const animtype = section.getAttribute('anim-type');
      if (animLibrary && animLibrary.trim() !== '') {
        section.classList.add(animLibrary.trim());
        section.classList.add(animtype.trim());
      }
    }
  
  
   
    public static revertAnimation(elements: NodeListOf<HTMLElement>) {
      elements.forEach((element) => {
        const section = element;
        const animLibrary = section.getAttribute('anim-library');
        const animtype = section.getAttribute('anim-type');
        if (animLibrary && animLibrary.trim() !== '') {
          section.classList.remove(animtype.trim());
        }
      });
    }


    public animateInitiater(animationObject:AnimationOptions,section: HTMLElement,sections: NodeListOf<HTMLElement>,animationType:AnimationType_Interface )
    {      
      console.log(animationType.animLibrary)      
     
      if(animationType.animLibrary != "attribute" && animationType.animType != "attribute")
      {
        if (animationObject.animateTwoWay) BrewwAnimationHandler.revertAnimation(sections);
        this.initAnimation(section);  
        return
      }
      
      if( section.getAttribute('anim-library')  == "animate__animated" )
      {
        console.log("y")
        if (animationObject.animateTwoWay) BrewwAnimationHandler.revertAnimation(sections);
        this.initAnimation(section);  
        return 
      }
    }

    private animateLibrarySwitcher(libraryName: string)
    {
      switch (libraryName) {
        case "animate__animated":
          return "initAnimationAnimateCss"; // library name
        case "library2":
          return "method2";
        case "library3":
          return "method3";
        default:
          return ""
      }
    }
  }
  
  export { BrewwAnimationHandler };
  