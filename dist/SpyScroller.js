!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define("SpyScroller",[],o):"object"==typeof exports?exports.SpyScroller=o():t.SpyScroller=o()}(this,(()=>(()=>{"use strict";var t,o={d:(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t,o){return null!=o&&"undefined"!=typeof Symbol&&o[Symbol.hasInstance]?!!o[Symbol.hasInstance](t):t instanceof o}o.r(e),o.d(e,{ErrorMessages:()=>t,SpyScroller:()=>l}),function(t){t.INVALID_NUMBER="Number must be greater then 1"}(t||(t={}));var i,r=new((i=function(){}).prototype.initAnimation=function(t){var o=t.getAttribute("anim-library"),e=t.getAttribute("anim-type");o&&""!==o.trim()&&(t.classList.add(o.trim()),t.classList.add(e.trim()))},i.revertAnimation=function(t){t.forEach((function(t){var o=t,e=o.getAttribute("anim-library"),n=o.getAttribute("anim-type");e&&""!==e.trim()&&o.classList.remove(n.trim())}))},i.prototype.animateInitiater=function(t,o,e,n){t.animateTwoWay&&i.revertAnimation(e),this.initAnimation(o)},i),l=function(){var t=function(t,o){void 0===t&&(t="#navMenu"),void 0===o&&(o={});var e,i,r,l,s,a,c,u,d,p,f,m,v,h,y,S,b,w,g,A=this;if(this.isLastSection=!1,this.options={sectionSelector:null!==(e=o.sectionSelector)&&void 0!==e?e:"section",targetSelector:null!==(i=o.targetSelector)&&void 0!==i?i:"[data-jump]",topOffset:null!==(r=o.topOffset)&&void 0!==r?r:0,hrefAttribute:null!==(l=o.hrefAttribute)&&void 0!==l?l:"href",activeClass:Array.isArray(o.activeClass)?o.activeClass:["active"],onLastScrollInView:null!==(s=o.onLastScrollInView)&&void 0!==s?s:null,onFirstScrollInView:null!==(a=o.onFirstScrollInView)&&void 0!==a?a:null,animation:{enabled:null!==(u=null===(c=o.animation)||void 0===c?void 0:c.enabled)&&void 0!==u&&u,animateTwoWay:null===(p=null===(d=o.animation)||void 0===d?void 0:d.animateTwoWay)||void 0===p||p,opacityDistanceFromCenter:null!==(m=null===(f=o.animation)||void 0===f?void 0:f.opacityDistanceFromCenter)&&void 0!==m?m:50},smoothScroll:null!==(v=o.smoothScroll)&&void 0!==v&&v,animationType:{enabled:null!==(y=null===(h=o.animationType)||void 0===h?void 0:h.enabled)&&void 0!==y&&y,animLibrary:null!==(b=null===(S=o.animationType)||void 0===S?void 0:S.animLibrary)&&void 0!==b?b:"attribute",animType:null!==(g=null===(w=o.animationType)||void 0===w?void 0:w.animType)&&void 0!==g?g:"attribute"}},!t)throw new Error("First argument cannot be empty");if("string"!=typeof t&&!n(t,HTMLElement))throw new TypeError("menu can be either string or an instance of HTMLElement");if("object"!=typeof o)throw new TypeError("options can only be of type object");if(this.menuList=n(t,HTMLElement)?t:document.querySelector(t),!this.menuList)throw new Error('No menu element found for selector "'.concat(t,'"'));this.sections=document.querySelectorAll(this.options.sectionSelector),this.onSectionScroll=this.onSectionScroll.bind(this),this.boundOnScroll=this.onScroll.bind(this),window.addEventListener("scroll",(function(){var t;A.boundOnScroll(),(null===(t=A.options.animation)||void 0===t?void 0:t.enabled)&&A.onSectionScroll()})),this.options.smoothScroll&&this.setMoothScroll()};return t.prototype.setMoothScroll=function(){for(var t=document.querySelectorAll(this.options.targetSelector),o=function(o){t[o].addEventListener("click",(function(e){e.preventDefault();var n=t[o].getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth"})}))},e=0;e<t.length;e++)o(e)},t.prototype.currentActiveSection=function(){var t=(document.documentElement.scrollTop||document.body.scrollTop)+this.options.topOffset;return Array.from(this.sections).find((function(o){var e=o.offsetTop,n=e+o.offsetHeight;return t>=e&&t<n}))},t.prototype.onSectionScroll=function(){var t=window.innerHeight,o=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);this.sections.forEach((function(e){var n=e.offsetTop,i=n+e.offsetHeight;Math.abs(o-n),Math.abs(o+t-i)}))},t.prototype.getActiveMenuItem=function(t){if(t){var o=t.getAttribute("id"),e=this.options.targetSelector;if("[data-jump]"===this.options.targetSelector){e="data-jump";var n=document.querySelectorAll("[data-jump]");return Array.from(n).find((function(t){return t.getAttribute(e)===o}))}return this.menuList.querySelector('[href="#'.concat(o,'"]'))}},t.prototype.removeActiveLink=function(t){var o=this;void 0===t&&(t={}),this.menuList.querySelectorAll(this.options.targetSelector).forEach((function(t){var e;return(e=t.classList).remove.apply(e,o.options.activeClass)}))},t.prototype.ActiveLinkChecker=function(t){var o;t.matches(this.options.targetSelector)&&!this.options.activeClass.some((function(o){return t.classList.contains(o)}))&&((o=t.classList).add.apply(o,this.options.activeClass),this.handleSubmenu(t)),t.scrollIntoView({behavior:"smooth"})},t.prototype.handleSubmenu=function(t){var o,e=t.closest("li");if(e){var n=e.closest("ul");if(n&&n.closest("li")){var i=n.closest("li");if(i)return(o=i.classList).add.apply(o,this.options.activeClass),!0}}return!1},t.prototype.onScroll=function(){var t=this.currentActiveSection();if(this.lastActiveSection!=t){this.lastActiveSection=t;var o=this.getActiveMenuItem(t);this.options.animation.enabled&&r.animateInitiater(this.options.animation,t,this.sections,this.options.animationType),o&&(this.removeActiveLink({ignore:o}),this.ActiveLinkChecker(o)),this.options.onLastScrollInView&&this.executeLastSectionCallbackIfInView(t),this.options.onFirstScrollInView&&this.executeFistSectionCallbackIfInView(t)}},t.prototype.executeLastSectionCallbackIfInView=function(t){var o=this.sections[this.sections.length-1],e=o.offsetTop,n=e+o.offsetHeight,i=(document.documentElement.scrollTop||document.body.scrollTop)+this.options.topOffset;i>=e&&i<n&&this.options.onLastScrollInView()},t.prototype.executeFistSectionCallbackIfInView=function(t){var o=this.sections[0].offsetTop;window.pageYOffset<=o&&this.options.onFirstScrollInView()},t.prototype.bind=function(){var t=this;window.addEventListener("scroll",(function(){var o;t.boundOnScroll(),(null===(o=t.options.animation)||void 0===o?void 0:o.enabled)&&t.onSectionScroll()}))},t.prototype.unbind=function(){var t=this;window.removeEventListener("scroll",(function(){var o;t.boundOnScroll(),(null===(o=t.options.animation)||void 0===o?void 0:o.enabled)&&t.onSectionScroll()}))},t}();return e})()));