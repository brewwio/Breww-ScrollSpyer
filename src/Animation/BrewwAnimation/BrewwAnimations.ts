// _____   _____    _____   _          __  _          __ 
// |  _  \ |  _  \  | ____| | |        / / | |        / / 
// | |_| | | |_| |  | |__   | |  __   / /  | |  __   / /  
// |  _  { |  _  /  |  __|  | | /  | / /   | | /  | / /   
// | |_| | | | \ \  | |___  | |/   |/ /    | |/   |/ /    
// |_____/ |_|  \_\ |_____| |___/|___/     |___/|___/     
//                                                    .io
const { cos, sin, pow, sqrt, PI } = Math;

const easings = {
  linear: (p: number) => p,
  easeInQuad: (_: any, t: number, b: number, c: number, d: number) =>
    c * (t /= d) * t + b,
  easeOutQuad: (_: any, t: number, b: number, c: number, d: number) =>
    -c * (t /= d) * (t - 2) + b,
  easeInOutQuad: (_: any, t: number, b: number, c: number, d: number) => {
    return (t /= d / 2) < 1 ? (c / 2) * t * t + b : (-c / 2) * (--t * (t - 2) - 1) + b;
  },
  easeInCubic: (_: any, t: number, b: number, c: number, d: number) =>
    c * (t /= d) * t * t + b,
  easeOutCubic: (_: any, t: number, b: number, c: number, d: number) =>
    c * ((t = t / d - 1) * t * t + 1) + b,
  easeInOutCubic: (_: any, t: number, b: number, c: number, d: number) => {
    return (t /= d / 2) < 1 ? (c / 2) * t * t * t + b : (c / 2) * ((t -= 2) * t * t + 2) + b;
  },
  easeInQuart: (_: any, t: number, b: number, c: number, d: number) =>
    c * (t /= d) * t * t * t + b,
  easeOutQuart: (_: any, t: number, b: number, c: number, d: number) =>
    -c * ((t = t / d - 1) * t * t * t - 1) + b,
  easeInOutQuart: (_: any, t: number, b: number, c: number, d: number) => {
    return (t /= d / 2) < 1 ? (c / 2) * t * t * t * t + b : (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
  },
  easeInQuint: (_: any, t: number, b: number, c: number, d: number) =>
    c * (t /= d) * t * t * t * t + b,
  easeOutQuint: (_: any, t: number, b: number, c: number, d: number) =>
    c * ((t = t / d - 1) * t * t * t * t + 1) + b,
  easeInOutQuint: (_: any, t: number, b: number, c: number, d: number) => {
    return (t /= d / 2) < 1
      ? (c / 2) * t * t * t * t * t + b
      : (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
  },
  easeInSine: (_: any, t: number, b: number, c: number, d: number) =>
    -c * cos((t / d) * (PI / 2)) + c + b,
  easeOutSine: (_: any, t: number, b: number, c: number, d: number) =>
    c * sin((t / d) * (PI / 2)) + b,
  easeInOutSine: (_: any, t: number, b: number, c: number, d: number) =>
    (-c / 2) * (cos((PI * t) / d) - 1) + b,
  easeInExpo: (_: any, t: number, b: number, c: number, d: number) =>
    t === 0 ? b : c * pow(2, 10 * (t / d - 1)) + b,
  easeOutExpo: (_: any, t: number, b: number, c: number, d: number) =>
    t === d ? b + c : c * (-pow(2, (-10 * t) / d) + 1) + b,
  easeInOutExpo: (_: any, t: number, b: number, c: number, d: number) => {
    if (t === 0) return b;
    if (t === d) return b + c;
    if ((t /= d / 2) < 1)
      return (c / 2) * pow(2, 10 * (t - 1)) + b;
    return (c / 2) * (-pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: (_: any, t: number, b: number, c: number, d: number) =>
    -c * (sqrt(1 - (t /= d) * t) - 1) + b,
  easeOutCirc: (_: any, t: number, b: number, c: number, d: number) =>
    c * sqrt(1 - (t = t / d - 1) * t) + b,
  easeInOutCirc: (_: any, t: number, b: number, c: number, d: number) => {
    return (t /= d / 2) < 1
      ? (-c / 2) * (sqrt(1 - t * t) - 1) + b
      : (c / 2) * (sqrt(1 - (t -= 2) * t) + 1) + b;
  },
};

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

  
  public static Bewwopacity(section: HTMLElement, windowHeight: number, scrollPosition: number, animateDistance: number) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const distanceToCenter = windowHeight / 2 - (sectionTop + sectionHeight / 2 - scrollPosition);
    const distanceRatio = Math.min(1, Math.abs(distanceToCenter) / animateDistance);
    let opacity = 1 - distanceRatio;
    section.style.opacity = opacity.toString();
  }
  
  public static BrewwEasing()
  {
      document.addEventListener('DOMContentLoaded', function() {
      const button = document.getElementById('scroll-button');
      const targetElement = document.getElementById('target-element');

      button.addEventListener('click', function() {
        alert("hi");
        // scrollTo(targetElement, 1000,'easeInOutQuad');
      });
    });
  }

 private  scrollTo(target : any, duration: any, easing :any) {
    const start = window.scrollY ;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    const destinationOffset = typeof target === 'number' ? target : target.offsetTop;
    const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

    if ('requestAnimationFrame' in window === false) {
      window.scroll(0, destinationOffsetToScroll);
      return;
    }

    function scroll() {
      const now = 'now' in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, ((now - startTime) / duration));
      const timeFunction = easing(time);
      window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

      if (window.scrollY  === destinationOffsetToScroll) {
        return;
      }

      requestAnimationFrame(scroll);
    }
    scroll();
  }

}

