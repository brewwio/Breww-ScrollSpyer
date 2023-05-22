var BrewwAnimations = (function () {
  'use strict';

  // _____   _____    _____   _          __  _          __ 
  // |  _  \ |  _  \  | ____| | |        / / | |        / / 
  // | |_| | | |_| |  | |__   | |  __   / /  | |  __   / /  
  // |  _  { |  _  /  |  __|  | | /  | / /   | | /  | / /   
  // | |_| | | | \ \  | |___  | |/   |/ /    | |/   |/ /    
  // |_____/ |_|  \_\ |_____| |___/|___/     |___/|___/     
  //                                                    .io
  var BrewwAnimations = /** @class */ (function () {
      function BrewwAnimations() {
      }
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
      BrewwAnimations.Bewwopacity = function (section, windowHeight, scrollPosition, animateDistance) {
          var sectionTop = section.offsetTop;
          var sectionHeight = section.offsetHeight;
          var distanceToCenter = windowHeight / 2 - (sectionTop + sectionHeight / 2 - scrollPosition);
          var distanceRatio = Math.min(1, Math.abs(distanceToCenter) / animateDistance);
          var opacity = 1 - distanceRatio;
          section.style.opacity = opacity.toString();
      };
      BrewwAnimations.linear = function (p) {
          return p;
      };
      BrewwAnimations.easeInQuad = function (t, b, c, d) {
          return c * (t /= d) * t + b;
      };
      BrewwAnimations.easeOutQuad = function (t, b, c, d) {
          return -c * (t /= d) * (t - 2) + b;
      };
      BrewwAnimations.easeInOutQuad = function (t, b, c, d) {
          if ((t /= d / 2) < 1)
              return (c / 2) * t * t + b;
          return (-c / 2) * (--t * (t - 2) - 1) + b;
      };
      BrewwAnimations.easeInCubic = function (t, b, c, d) {
          return c * (t /= d) * t * t + b;
      };
      BrewwAnimations.easeOutCubic = function (t, b, c, d) {
          return c * ((t = t / d - 1) * t * t + 1) + b;
      };
      BrewwAnimations.easeInOutCubic = function (t, b, c, d) {
          if ((t /= d / 2) < 1)
              return (c / 2) * t * t * t + b;
          return (c / 2) * ((t -= 2) * t * t + 2) + b;
      };
      BrewwAnimations.easeInQuart = function (t, b, c, d) {
          return c * (t /= d) * t * t * t + b;
      };
      BrewwAnimations.easeOutQuart = function (t, b, c, d) {
          return -c * ((t = t / d - 1) * t * t * t - 1) + b;
      };
      BrewwAnimations.easeInOutQuart = function (t, b, c, d) {
          if ((t /= d / 2) < 1)
              return (c / 2) * t * t * t * t + b;
          return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
      };
      BrewwAnimations.easeInQuint = function (t, b, c, d) {
          return c * (t /= d) * t * t * t * t + b;
      };
      BrewwAnimations.easeOutQuint = function (t, b, c, d) {
          return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
      };
      BrewwAnimations.easeInOutQuint = function (t, b, c, d) {
          if ((t /= d / 2) < 1)
              return (c / 2) * t * t * t * t * t + b;
          return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
      };
      BrewwAnimations.easeInSine = function (t, b, c, d) {
          return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
      };
      BrewwAnimations.easeOutSine = function (t, b, c, d) {
          return c * Math.sin((t / d) * (Math.PI / 2)) + b;
      };
      BrewwAnimations.easeInOutSine = function (t, b, c, d) {
          return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
      };
      BrewwAnimations.easeInExpo = function (t, b, c, d) {
          return t === 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
      };
      BrewwAnimations.easeOutExpo = function (t, b, c, d) {
          return t === d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
      };
      BrewwAnimations.easeInOutExpo = function (t, b, c, d) {
          if (t === 0)
              return b;
          if (t === d)
              return b + c;
          if ((t /= d / 2) < 1)
              return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
          return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
      };
      BrewwAnimations.easeInCirc = function (t, b, c, d) {
          return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
      };
      BrewwAnimations.easeOutCirc = function (t, b, c, d) {
          return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
      };
      BrewwAnimations.easeInOutCirc = function (t, b, c, d) {
          if ((t /= d / 2) < 1)
              return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
          return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
      };
      BrewwAnimations.easeOutElastic = function (elapsed, initialValue, amountOfChange, duration) {
          var s = 1.70158;
          var p = 0;
          var a = amountOfChange;
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
          }
          else {
              s = p / (2 * Math.PI) * Math.asin(amountOfChange / a);
          }
          return a * Math.pow(2, -10 * elapsed) * Math.sin((elapsed * duration - s) * (2 * Math.PI) / p) + amountOfChange + initialValue;
      };
      BrewwAnimations.easeOutBounce = function (elapsed, initialValue, amountOfChange, duration) {
          if ((elapsed /= duration) < 1 / 2.75) {
              return amountOfChange * (7.5625 * elapsed * elapsed) + initialValue;
          }
          else if (elapsed < 2 / 2.75) {
              return amountOfChange * (7.5625 * (elapsed -= 1.5 / 2.75) * elapsed + 0.75) + initialValue;
          }
          else if (elapsed < 2.5 / 2.75) {
              return amountOfChange * (7.5625 * (elapsed -= 2.25 / 2.75) * elapsed + 0.9375) + initialValue;
          }
          else {
              return amountOfChange * (7.5625 * (elapsed -= 2.625 / 2.75) * elapsed + 0.984375) + initialValue;
          }
      };
      return BrewwAnimations;
  }());

  return BrewwAnimations;

})();
