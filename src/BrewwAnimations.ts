// _____   _____    _____   _          __  _          __ 
// |  _  \ |  _  \  | ____| | |        / / | |        / / 
// | |_| | | |_| |  | |__   | |  __   / /  | |  __   / /  
// |  _  { |  _  /  |  __|  | | /  | / /   | | /  | / /   
// | |_| | | | \ \  | |___  | |/   |/ /    | |/   |/ /    
// |_____/ |_|  \_\ |_____| |___/|___/     |___/|___/     
//                                                    .io


class BrewwAnimations {

  /**  
  Sets the opacity of the given section based on scroll position and distance from the center of the viewport.
  @param section - The section element to apply the opacity effect to.
  @param windowHeight - The height of the viewport.
  @param scrollPosition - The current scroll position of the window.
  @param animateDistance - The distance from the center of the viewport at which the section should start fading.
  @since 1.0.0
  #returns void
  @NOTE  ---------------------------------------- >>>> :-) :-) --------------------> 
  Currently opacity is set to default, it's one of the most famous styles or animations used by worldwide developers, so we implemented it first. Currently, we are planning to add more animations and transforms. But we did not want to give a bad impression, so we have enabled users to use third-party animation libraries. Currently, we support 'animate'.
  **/

  public static Bewwopacity(section: HTMLElement, windowHeight: number, scrollPosition: number, animateDistance: number) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const distanceToCenter = windowHeight / 2 - (sectionTop + sectionHeight / 2 - scrollPosition);
    const distanceRatio = Math.min(1, Math.abs(distanceToCenter) / animateDistance);
    let opacity = 1 - distanceRatio;
    section.style.opacity = opacity.toString();
  }

}

export { BrewwAnimations};
