var t=function(){function t(t,e){var n,o,i,r,s,c,l,a,u,f,h,d,p,m;if(void 0===t&&(t="#navMenu"),void 0===e&&(e={}),this.isLastSection=!1,this.options={sectionSelector:null!==(n=e.sectionSelector)&&void 0!==n?n:"section",targetSelector:null!==(o=e.targetSelector)&&void 0!==o?o:"[data-jump]",topOffset:Array.isArray(e.topOffset)?e.topOffset:[{topOffset:500}],activeClass:Array.isArray(e.activeClass)?e.activeClass:["active"],onLastScrollInView:null!==(i=e.onLastScrollInView)&&void 0!==i?i:null,onFirstScrollInView:null!==(r=e.onFirstScrollInView)&&void 0!==r?r:null,onSectionChange:null!==(s=e.onSectionChange)&&void 0!==s?s:null,onScroll:null!==(c=e.onScroll)&&void 0!==c?c:null,animation:{animType:null!==(a=null===(l=e.animation)||void 0===l?void 0:l.animType)&&void 0!==a?a:"attribute",enabled:null!==(f=null===(u=e.animation)||void 0===u?void 0:u.enabled)&&void 0!==f&&f},easing:{enabled:null!==(d=null===(h=e.easing)||void 0===h?void 0:h.enabled)&&void 0!==d&&d,type:null!==(m=null===(p=e.easing)||void 0===p?void 0:p.type)&&void 0!==m?m:""}},!t)throw new Error("First argument cannot be empty");if(!("string"==typeof t||t instanceof HTMLElement))throw new TypeError("menu can be either string or an instance of HTMLElement");if("object"!=typeof e)throw new TypeError("options can only be of type object");if("object"!=typeof this.options.animation)throw new TypeError("animation in options can only be of type object");if(this.menuList=t instanceof HTMLElement?t:document.querySelector(t),this.Navmenu=t instanceof HTMLElement?t:document.querySelector(t),!this.menuList)throw new Error('No menu element found for selector "'.concat(t,'"'));this.sections=document.querySelectorAll(this.options.sectionSelector),this.boundOnScroll=this.onScroll.bind(this),this.bind(),this.options.easing.enabled&&this.easing()}return t.prototype.easing=function(){var t=this;"[data-jump]"===this.options.targetSelector?this.menuList.querySelectorAll(this.options.targetSelector).forEach((function(e){e.addEventListener("click",(function(e){var n=e.target.closest("[data-jump]");if(n){e.preventDefault();var o=n.getAttribute("data-jump");t.scrollTo(document.getElementById(o),1e3,t.options.easing.type)}}))})):this.menuList.querySelectorAll(this.options.targetSelector).forEach((function(e){e.addEventListener("click",(function(n){n.preventDefault(),t.scrollTo(document.getElementById(e.getAttribute("href").replace("#","")),1e3,t.options.easing.type)}))}))},t.prototype.scrollTo=function(t,e,n){var o=window.pageYOffset,i="now"in window.performance?performance.now():(new Date).getTime(),r=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),s=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,c="number"==typeof t?t:t.offsetTop,l=Math.round(r-c<s?r-s:c);"requestAnimationFrame"in window!=!1?function t(){var r=("now"in window.performance?performance.now():(new Date).getTime())-i,s=Math.min(1,r/e),c=n(s,0,1,1);window.scroll(0,Math.ceil(c*(l-o)+o)),window.pageYOffset===l||r>e||requestAnimationFrame(t)}():window.scroll(0,l)},t.prototype.currentActiveSection=function(){var t=this,e=(document.documentElement.scrollTop||document.body.scrollTop)+this.getTopOffset();return Array.from(this.sections).find((function(n){var o=t.getOffset(n),i=o+n.offsetHeight;return e>=o&&e<i}))},t.prototype.getTopOffset=function(){var t,e=window.innerWidth;if(Array.isArray(this.options.topOffset))for(var n=0,o=this.options.topOffset;n<o.length;n++){var i=o[n];if((!i.minWidth||e>=i.minWidth)&&(!i.maxWidth||e<=i.maxWidth)){t=i.topOffset;break}}else"number"==typeof this.options.topOffset&&(t=this.options.topOffset);return t},t.prototype.getOffset=function(t,e){if(void 0===e&&(e=!1),!t)return 0;var n=t.offsetParent;return this.getOffset(n,e)+(e?t.offsetLeft:t.offsetTop)},t.prototype.getActiveMenuItem=function(t){if(t){var e=t.getAttribute("id"),n=this.options.targetSelector;if("[data-jump]"===this.options.targetSelector){n="data-jump";var o=document.querySelectorAll("[".concat(n,"]")),i=Array.from(o).find((function(t){return t.getAttribute(n)===e}));return{sectionId:e,element:i}}i=this.menuList.querySelector('[href="#'.concat(e,'"]'));return{sectionId:e,element:i}}},t.prototype.removeActiveLink=function(t){var e=this;this.menuList.querySelectorAll(this.options.targetSelector).forEach((function(t){var n;return(n=t.classList).remove.apply(n,e.options.activeClass)}))},t.prototype.ActiveLinkChecker=function(t){var e;t.matches(this.options.targetSelector)&&!this.options.activeClass.some((function(e){return t.classList.contains(e)}))&&((e=t.classList).add.apply(e,this.options.activeClass),this.handleSubmenu(t)),t.scrollIntoView({behavior:"smooth"})},t.prototype.handleSubmenu=function(t){var e,n=t.closest("li");if(n){var o=n.closest("ul");if(o&&o.closest("li")){var i=o.closest("li");if(i)return(e=i.classList).add.apply(e,this.options.activeClass),!0}}return!1},t.prototype.onScroll=function(){var t=this.currentActiveSection();if(this.options.onScroll&&this.executeonScroll(t,this.sections),this.lastActiveSection!=t){this.lastActiveSection=t,this.options.onSectionChange&&this.executeSectionChanged(t,this.sections);var e=this.getActiveMenuItem(t),n=e.sectionId,o=e.element;o&&(this.removeActiveLink({ignore:o}),this.ActiveLinkChecker(o)),this.options.onLastScrollInView&&this.executeLastSectionCallbackIfInView(n,o),this.options.onFirstScrollInView}},t.prototype.executeSectionChanged=function(t,e){this.options.onSectionChange(t,e,this.options.animation)},t.prototype.executeonScroll=function(t,e){this.options.onScroll(t,e,this.options.animation)},t.prototype.executeLastSectionCallbackIfInView=function(t,e){console.log(t,e)},t.prototype.executeFistSectionCallbackIfInView=function(t){var e=this.sections[0].offsetTop;window.screenY<=e&&this.options.onFirstScrollInView()},t.prototype.bind=function(){this.boundOnScroll=this.onScroll.bind(this),window.addEventListener("scroll",this.boundOnScroll)},t.prototype.unbind=function(){window.removeEventListener("scroll",this.boundOnScroll),this.boundOnScroll=null},t.prototype.getCurrentSection=function(t){void 0===t&&(t=!1);var e=null;return t&&(e=this.currentSectionChild()),{currentActiveSectionElement:this.currentActiveSection(),currentActiveSectionIndex:Array.from(this.sections).indexOf(this.currentActiveSection()),currentSectionId:this.currentActiveSection().getAttribute("id"),currentSectionDataList:this.currentActiveSection().attributes,currentSectionClassList:this.currentActiveSection().classList,currentSectionChildElementCount:this.currentActiveSection().childElementCount,currentSectionFirstChild:this.currentActiveSection().firstElementChild,currentSectionLastChild:this.currentActiveSection().lastElementChild,currentSectiionChildElementNclass:e}},t.prototype.currentSectionChild=function(){for(var t=this.currentActiveSection().children,e=0;e<t.length;e++){for(var n=t[e],o={},i=0;i<n.attributes.length;i++){var r=n.attributes[i];o[r.name]=r.value}Array.from(n.classList);n.tagName}},t}();export{t as default};
