// _____   _____    _____   _          __  _          __ 
// |  _  \ |  _  \  | ____| | |        / / | |        / / 
// | |_| | | |_| |  | |__   | |  __   / /  | |  __   / /  
// |  _  { |  _  /  |  __|  | | /  | / /   | | /  | / /   
// | |_| | | | \ \  | |___  | |/   |/ /    | |/   |/ /    
// |_____/ |_|  \_\ |_____| |___/|___/     |___/|___/     
//                                                    .io



export default class BrewwAnimations {

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


  public static Bewwopacity(sections:  NodeListOf<HTMLElement>,animateDistance: number) {
    window.addEventListener('scroll', updateOpacity);
    function updateOpacity(){

    
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + ((document.documentElement && document.documentElement.scrollTop) || 0);
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
    
      // Calculate the distance from the section's top to the center of the viewport
      const distanceToCenter = windowHeight / 2 - (sectionTop + sectionHeight / 2 - scrollPosition);
      
      // Calculate the maximum distance from the center for full opacity
      const maxDistanceToCenter = windowHeight / 2;
    
      // Calculate the opacity based on the scroll position
      let opacity = 0;
    
      if (distanceToCenter < 0) {
        opacity = 1 + (distanceToCenter / maxDistanceToCenter);
      } else {
        opacity = 1 - (distanceToCenter / maxDistanceToCenter);
      }
    
      // Ensure opacity is within the valid range of 0 to 1
      opacity = Math.max(0, Math.min(1, opacity));
    
      section.style.opacity = opacity.toString();
   
    
    });
  }
    
    
    
  }
  public static linear(p: number) {
    return p;
  }

  public static easeInQuad(t: number, b: number, c: number, d: number) {
    return c * (t /= d) * t + b;
  }

  public static easeOutQuad(t: number, b: number, c: number, d: number) {
    return -c * (t /= d) * (t - 2) + b;
  }

  public static easeInOutQuad(t: number, b: number, c: number, d: number) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
    return (-c / 2) * (--t * (t - 2) - 1) + b;
  }

  public static easeInCubic(t: number, b: number, c: number, d: number) {
    return c * (t /= d) * t * t + b;
  }

  public static easeOutCubic(t: number, b: number, c: number, d: number) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  }

  public static easeInOutCubic(t: number, b: number, c: number, d: number) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
    return (c / 2) * ((t -= 2) * t * t + 2) + b;
  }

  public static easeInQuart(t: number, b: number, c: number, d: number) {
    return c * (t /= d) * t * t * t + b;
  }

  public static easeOutQuart(t: number, b: number, c: number, d: number) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  }

  public static easeInOutQuart(t: number, b: number, c: number, d: number) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
    return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
  }

  public static easeInQuint(t: number, b: number, c: number, d: number) {
    return c * (t /= d) * t * t * t * t + b;
  }

  public static easeOutQuint(t: number, b: number, c: number, d: number) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  }

  public static easeInOutQuint(t: number, b: number, c: number, d: number) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b;
    return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
  }

  public static easeInSine(t: number, b: number, c: number, d: number) {
    return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
  }

  public static easeOutSine(t: number, b: number, c: number, d: number) {
    return c * Math.sin((t / d) * (Math.PI / 2)) + b;
  }

  public static easeInOutSine(t: number, b: number, c: number, d: number) {
    return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
  }

  public static easeInExpo(t: number, b: number, c: number, d: number) {
    return t === 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  }

  public static easeOutExpo(t: number, b: number, c: number, d: number) {
    return t === d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
  }

  public static easeInOutExpo(t: number, b: number, c: number, d: number) {
    if (t === 0) return b;
    if (t === d) return b + c;
    if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
    return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
  }

  public static easeInCirc(t: number, b: number, c: number, d: number) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  }

  public static easeOutCirc(t: number, b: number, c: number, d: number) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  }

  public static easeInOutCirc(t: number, b: number, c: number, d: number) {
    if ((t /= d / 2) < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
    return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  }
  
public static easeOutElastic(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	let s = 1.70158;
	let p = 0;
	let a = amountOfChange;
	if (elapsed === 0) {
		return initialValue;
	}
	if ((elapsed /= duration) === 1) {
		return initialValue + amountOfChange;
	}
	if (!p) {
		p = duration * 0.3;
	}
	if (a < Math.abs(amountOfChange)) {
		a = amountOfChange;
		s = p / 4;
	} else {
		s = p / (2 * Math.PI) * Math.asin(amountOfChange / a);
	}
	return a * Math.pow(2, -10 * elapsed) * Math.sin((elapsed * duration - s) * (2 * Math.PI) / p) + amountOfChange + initialValue;
}
public static easeOutBounce(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	if ((elapsed /= duration) < 1 / 2.75) {
		return amountOfChange * (7.5625 * elapsed * elapsed) + initialValue;
	} else if (elapsed < 2 / 2.75) {
		return amountOfChange * (7.5625 * (elapsed -= 1.5 / 2.75) * elapsed + 0.75) + initialValue;
	} else if (elapsed < 2.5 / 2.75) {
		return amountOfChange * (7.5625 * (elapsed -= 2.25 / 2.75) * elapsed + 0.9375) + initialValue;
	} else {
		return amountOfChange * (7.5625 * (elapsed -= 2.625 / 2.75) * elapsed + 0.984375) + initialValue;
	}
}

}
