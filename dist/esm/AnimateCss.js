function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ":root {\n  --animate-duration: 1s;\n  --animate-delay: 1s;\n  --animate-repeat: 1;\n}\n";
styleInject(css_248z$1);

var css_248z = ".animated {\n  -webkit-animation-duration: var(--animate-duration);\n          animation-duration: var(--animate-duration);\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n}\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n.animated.repeat-1 {\n  -webkit-animation-iteration-count: var(--animate-repeat);\n          animation-iteration-count: var(--animate-repeat);\n}\n\n.animated.repeat-2 {\n  -webkit-animation-iteration-count: calc(var(--animate-repeat) * 2);\n          animation-iteration-count: calc(var(--animate-repeat) * 2);\n}\n\n.animated.repeat-3 {\n  -webkit-animation-iteration-count: calc(var(--animate-repeat) * 3);\n          animation-iteration-count: calc(var(--animate-repeat) * 3);\n}\n\n.animated.delay-1s {\n  -webkit-animation-delay: var(--animate-delay);\n          animation-delay: var(--animate-delay);\n}\n\n.animated.delay-2s {\n  -webkit-animation-delay: calc(var(--animate-delay) * 2);\n          animation-delay: calc(var(--animate-delay) * 2);\n}\n\n.animated.delay-3s {\n  -webkit-animation-delay: calc(var(--animate-delay) * 3);\n          animation-delay: calc(var(--animate-delay) * 3);\n}\n\n.animated.delay-4s {\n  -webkit-animation-delay: calc(var(--animate-delay) * 4);\n          animation-delay: calc(var(--animate-delay) * 4);\n}\n\n.animated.delay-5s {\n  -webkit-animation-delay: calc(var(--animate-delay) * 5);\n          animation-delay: calc(var(--animate-delay) * 5);\n}\n\n.animated.faster {\n  -webkit-animation-duration: calc(var(--animate-duration) / 2);\n          animation-duration: calc(var(--animate-duration) / 2);\n}\n\n.animated.fast {\n  -webkit-animation-duration: calc(var(--animate-duration) * 0.8);\n          animation-duration: calc(var(--animate-duration) * 0.8);\n}\n\n.animated.slow {\n  -webkit-animation-duration: calc(var(--animate-duration) * 2);\n          animation-duration: calc(var(--animate-duration) * 2);\n}\n\n.animated.slower {\n  -webkit-animation-duration: calc(var(--animate-duration) * 3);\n          animation-duration: calc(var(--animate-duration) * 3);\n}\n\n@media print, (prefers-reduced-motion: reduce) {\n  .animated {\n    -webkit-animation-duration: 1ms !important;\n            animation-duration: 1ms !important;\n    -webkit-transition-duration: 1ms !important;\n            transition-duration: 1ms !important;\n    -webkit-animation-iteration-count: 1 !important;\n            animation-iteration-count: 1 !important;\n  }\n\n  .animated[class*='Out'] {\n    opacity: 0;\n  }\n}\n";
styleInject(css_248z);

function importCss(fileName) {
    return __awaiter(this, void 0, void 0, function () {
        var cssModule, styleElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, import("animate.css/source/".concat(fileName))];
                case 1:
                    cssModule = _a.sent();
                    styleElement = document.createElement('style');
                    styleElement.textContent = cssModule.default;
                    document.head.appendChild(styleElement);
                    return [2 /*return*/];
            }
        });
    });
}
function applyCss(className) {
    switch (className) {
        case 'bounce':
            importCss('attention_seekers/bounce.css');
            break;
        case 'flash':
            importCss('attention_seekers/flash.css');
            break;
        case 'pulse':
            importCss('attention_seekers/pulse.css');
            break;
        case 'rubberBand':
            importCss('attention_seekers/rubberBand.css');
            break;
        case 'shake':
            importCss('attention_seekers/shake.css');
            break;
        case 'headShake':
            importCss('attention_seekers/headShake.css');
            break;
        case 'swing':
            importCss('attention_seekers/swing.css');
            break;
        case 'tada':
            importCss('attention_seekers/tada.css');
            break;
        case 'wobble':
            importCss('attention_seekers/wobble.css');
            break;
        case 'jello':
            importCss('attention_seekers/jello.css');
            break;
        case 'heartBeat':
            importCss('attention_seekers/heartBeat.css');
            break;
        default:
            throw new Error("Invalid CSS class: ".concat(className));
    }
}

var animLibrary = 'animated';
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
                    section.classList.add(animLibrary);
                    section.classList.add(animtype.trim());
                    applyCss(animtype.trim());
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
    return AnimateCss;
}());

export { AnimateCss as default };
