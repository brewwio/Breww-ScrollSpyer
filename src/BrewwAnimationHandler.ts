// _____   _____    _____   _          __  _          __ 
// |  _  \ |  _  \  | ____| | |        / / | |        / / 
// | |_| | | |_| |  | |__   | |  __   / /  | |  __   / /  
// |  _  { |  _  /  |  __|  | | /  | / /   | | /  | / /   
// | |_| | | | \ \  | |___  | |/   |/ /    | |/   |/ /    
// |_____/ |_|  \_\ |_____| |___/|___/     |___/|___/     
//                                                    .io

import { AnimationOptions } from "./Common_interfaces/Animation_Interface";
class BrewwAnimationHandler {
    /**
     * 
    Initializes the animation for the given section based on the specified animation library and type.
    @param section - The section element to apply the animation to.
    @since 1.0.0
    @returns void
    **/
  
    private initAnimation(section: HTMLElement) {
      const animLibrary = section.getAttribute('anim-library');
      const animtype = section.getAttribute('breww-anim');
      if (animLibrary && animLibrary.trim() !== '') {
        section.classList.add(animLibrary.trim());
        section.classList.add(animtype.trim());
      }
    }
  
  
    /**
      Reverts the animation applied to the given elements by removing the corresponding CSS class.
      @param elements - A NodeList containing the elements to revert the animation on.
      @since 1.0.0
      @returns void
    **/
  
    public static revertAnimation(elements: NodeListOf<HTMLElement>) {
      elements.forEach((element) => {
        const section = element;
        const animLibrary = section.getAttribute('anim-library');
        const animtype = section.getAttribute('breww-anim');
        if (animLibrary && animLibrary.trim() !== '') {
          section.classList.remove(animtype.trim());
        }
      });
    }

    
    public animateInitiater(animationObject:AnimationOptions,section: HTMLElement,sections: NodeListOf<HTMLElement> )
    {     
      if (animationObject.animateTwoWay) BrewwAnimationHandler.revertAnimation(sections);
      this.initAnimation(section);  
    }

  }
  
  export { BrewwAnimationHandler };
  