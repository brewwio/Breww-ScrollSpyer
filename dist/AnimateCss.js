!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("SpyScroller",[],t):"object"==typeof exports?exports.SpyScroller=t():e.SpyScroller=t()}(this,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{AnimateCss:()=>o});var o={fadeUpAnimation:function(e){},fadeDownAnimation:function(e){},initAnimation:function(e,t,o){t&&""!==t.trim()&&(e.classList.add(t.trim()),e.classList.add(o.trim()))},revertAnimation:function(e,t,o){e.forEach((function(e){var r=e;t&&""!==t.trim()&&r.classList.remove(o.trim())}))}};return t})()));