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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


// import the specific CSS file you need
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
        return __awaiter(this, void 0, void 0, function () {
            var animtype;
            return __generator(this, function (_a) {
                animtype = section.getAttribute('anim-type');
                if (animtype && animtype.trim() !== '') {
                    section.classList.add(AnimateCss.animLibrary);
                    section.classList.add(animtype.trim());
                }
                return [2 /*return*/];
            });
        });
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
    // constructor() {
    //   try {
    //     const _ = require('animate.css');
    //     // or import _ from 'lodash'; for ES6 modules
    //     console.log('lodash is installed');
    //   } catch (error) {
    //     console.log('lodash is not installed');
    //   }
    // }
    AnimateCss.animLibrary = 'animated';
    return AnimateCss;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimateCss);

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});