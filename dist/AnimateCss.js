(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("AnimateCss", [], factory);
	else if(typeof exports === 'object')
		exports["AnimateCss"] = factory();
	else
		root["AnimateCss"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var AnimateCss = /** @class */ (function () {
    function AnimateCss() {
    }
    AnimateCss.fadeUpAnimation = function (element) {
        // implementation here
    };
    AnimateCss.fadeDownAnimation = function (section) {
        console.log(section);
    };
    AnimateCss.initAnimation = function (section) {
        var animtype = section.getAttribute('anim-type');
        if (animtype && animtype.trim() !== '') {
            section.classList.add(AnimateCss.animLibrary);
            section.classList.add(animtype.trim());
        }
    };
    AnimateCss.revertAnimation = function (sections) {
        var sectionsArray = Array.from(sections);
        sectionsArray.forEach(function (section) {
            var animtype = section.getAttribute('anim-type');
            if (animtype && animtype.trim() !== '') {
                section.classList.remove(animtype.trim());
            }
        });
    };
    AnimateCss.animateTwoWay = function (section, sections, animationOptions) {
        if (!animationOptions.enabled)
            return false;
        if (!(section instanceof HTMLElement)) {
            throw new Error("First argument must be of type HTMLElement");
        }
        if (!(sections instanceof NodeList) || sections.length === 0 || !(sections[0] instanceof HTMLElement)) {
            throw new Error("Second argument must be of type NodeListOf<HTMLElement> and cannot be empty");
        }
        AnimateCss.revertAnimation(sections);
        AnimateCss.initAnimation(section);
    };
    AnimateCss.animateOneWay = function (section, animationOptions) {
        if (!animationOptions.enabled)
            return false;
        if (!(section instanceof HTMLElement)) {
            throw new Error("First argument must be of type HTMLElement");
        }
        AnimateCss.initAnimation(section);
    };
    AnimateCss.animLibrary = 'animate__animated';
    return AnimateCss;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimateCss);

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});