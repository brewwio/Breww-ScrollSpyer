var BrewwAnimations = (function () {
  'use strict';

  var BrewwAnimations = /** @class */ (function () {
      function BrewwAnimations() {
      }
      BrewwAnimations.Bewwopacity = function (sections, animateDistance) {
          window.addEventListener("scroll", updateOpacity);
          function updateOpacity() {
              var windowHeight = window.innerHeight;
              var scrollPosition = window.scrollY ||
                  window.pageYOffset ||
                  document.body.scrollTop +
                      ((document.documentElement && document.documentElement.scrollTop) ||
                          0);
              sections.forEach(function (section) {
                  var sectionTop = section.offsetTop;
                  var sectionHeight = section.offsetHeight;
                  // Calculate the distance from the section's top to the center of the viewport
                  var distanceToCenter = (windowHeight / 2 - (sectionTop + sectionHeight / 2 - scrollPosition));
                  // Calculate the maximum distance from the center for full opacity
                  var maxDistanceToCenter = (windowHeight / 2);
                  // Calculate the opacity based on the scroll position
                  var opacity = 0;
                  if (distanceToCenter + animateDistance < 0) {
                      opacity = 1 + distanceToCenter / maxDistanceToCenter;
                  }
                  else {
                      opacity = 1 - distanceToCenter / maxDistanceToCenter;
                  }
                  // Ensure opacity is within the valid range of 0 to 1
                  opacity = Math.max(0, Math.min(1, opacity));
                  section.style.opacity = opacity.toString();
              });
          }
      };
      return BrewwAnimations;
  }());

  return BrewwAnimations;

})();
