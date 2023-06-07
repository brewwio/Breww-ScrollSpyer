var BrewwEasings = (function () {
  'use strict';

  // _____   _____    _____   _          __  _          __
  // |  _  \ |  _  \  | ____| | |        / / | |        / /
  // | |_| | | |_| |  | |__   | |  __   / /  | |  __   / /
  // |  _  { |  _  /  |  __|  | | /  | / /   | | /  | / /
  // | |_| | | | \ \  | |___  | |/   |/ /    | |/   |/ /
  // |_____/ |_|  \_\ |_____| |___/|___/     |___/|___/
  //                                                    .io
  var BrewwEasings = /** @class */ (function () {
      function BrewwEasings() {
      }
      BrewwEasings.linear = function (p) {
          return p;
      };
      BrewwEasings.easeInQuad = function (t, b, c, d) {
          return c * (t /= d) * t + b;
      };
      BrewwEasings.easeOutQuad = function (t, b, c, d) {
          return -c * (t /= d) * (t - 2) + b;
      };
      BrewwEasings.easeInOutQuad = function (t, b, c, d) {
          if ((t /= d / 2) < 1)
              return (c / 2) * t * t + b;
          return (-c / 2) * (--t * (t - 2) - 1) + b;
      };
      BrewwEasings.easeInCubic = function (t, b, c, d) {
          return c * (t /= d) * t * t + b;
      };
      BrewwEasings.easeOutCubic = function (t, b, c, d) {
          return c * ((t = t / d - 1) * t * t + 1) + b;
      };
      BrewwEasings.easeInOutCubic = function (t, b, c, d) {
          if ((t /= d / 2) < 1)
              return (c / 2) * t * t * t + b;
          return (c / 2) * ((t -= 2) * t * t + 2) + b;
      };
      BrewwEasings.easeInQuart = function (t, b, c, d) {
          return c * (t /= d) * t * t * t + b;
      };
      BrewwEasings.easeOutQuart = function (t, b, c, d) {
          return -c * ((t = t / d - 1) * t * t * t - 1) + b;
      };
      BrewwEasings.easeInOutQuart = function (t, b, c, d) {
          if ((t /= d / 2) < 1)
              return (c / 2) * t * t * t * t + b;
          return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
      };
      BrewwEasings.easeInQuint = function (t, b, c, d) {
          return c * (t /= d) * t * t * t * t + b;
      };
      BrewwEasings.easeOutQuint = function (t, b, c, d) {
          return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
      };
      BrewwEasings.easeInOutQuint = function (t, b, c, d) {
          if ((t /= d / 2) < 1)
              return (c / 2) * t * t * t * t * t + b;
          return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
      };
      BrewwEasings.easeInSine = function (t, b, c, d) {
          return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
      };
      BrewwEasings.easeOutSine = function (t, b, c, d) {
          return c * Math.sin((t / d) * (Math.PI / 2)) + b;
      };
      BrewwEasings.easeInOutSine = function (t, b, c, d) {
          return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
      };
      BrewwEasings.easeInExpo = function (t, b, c, d) {
          return t === 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
      };
      BrewwEasings.easeOutExpo = function (t, b, c, d) {
          return t === d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
      };
      BrewwEasings.easeInOutExpo = function (t, b, c, d) {
          if (t === 0)
              return b;
          if (t === d)
              return b + c;
          if ((t /= d / 2) < 1)
              return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
          return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
      };
      BrewwEasings.easeInCirc = function (t, b, c, d) {
          return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
      };
      BrewwEasings.easeOutCirc = function (t, b, c, d) {
          return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
      };
      BrewwEasings.easeInOutCirc = function (t, b, c, d) {
          if ((t /= d / 2) < 1)
              return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
          return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
      };
      BrewwEasings.easeOutElastic = function (elapsed, initialValue, amountOfChange, duration) {
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
              s = (p / (2 * Math.PI)) * Math.asin(amountOfChange / a);
          }
          return (a *
              Math.pow(2, -10 * elapsed) *
              Math.sin(((elapsed * duration - s) * (2 * Math.PI)) / p) +
              amountOfChange +
              initialValue);
      };
      BrewwEasings.easeOutBounce = function (elapsed, initialValue, amountOfChange, duration) {
          if ((elapsed /= duration) < 1 / 2.75) {
              return amountOfChange * (7.5625 * elapsed * elapsed) + initialValue;
          }
          else if (elapsed < 2 / 2.75) {
              return (amountOfChange * (7.5625 * (elapsed -= 1.5 / 2.75) * elapsed + 0.75) +
                  initialValue);
          }
          else if (elapsed < 2.5 / 2.75) {
              return (amountOfChange *
                  (7.5625 * (elapsed -= 2.25 / 2.75) * elapsed + 0.9375) +
                  initialValue);
          }
          else {
              return (amountOfChange *
                  (7.5625 * (elapsed -= 2.625 / 2.75) * elapsed + 0.984375) +
                  initialValue);
          }
      };
      return BrewwEasings;
  }());

  return BrewwEasings;

})();
