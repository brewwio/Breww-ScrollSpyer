module.exports = function (el, options = {}) {
    const ScrollSpy = require('./SpyScroller.js');
    const AnimateCss = require('./Animation/Animate-css/AnimateCss.js');
  
    // Use the ScrollSpy module
    const scrollSpyInstance = new ScrollSpy(el, options);
    
    // Use the AnimateCss class
    const animateCssInstance = new AnimateCss();
  
    return { scrollSpyInstance, animateCssInstance };
  };
