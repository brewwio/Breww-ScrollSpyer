
## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/node%20js-red)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/typescript-yellow)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/version%201.0%20Major-orange)](http://www.gnu.org/licenses/agpl-3.0)


# Breww Scoll-spyer

Why This ScrollSpyer: We have explored various scrollspy tools available on the internet, but encountered issues with some of them. Specifically, some don't support multiple menus, while others lack animation capabilities. We consider animations to be necessary in any scrollspy tool. If you're unfamiliar with what we're referring to, we invite you to explore our examples with animation for a better understanding.



## Setup

Make sure to install the dependencies:

```bash
npm i @breww.io/scroll-spyer

#FOR BROWSERS
https://cdn.jsdelivr.net/npm/@breww.io/scroll-spyer/dist/browser/spyscroll.min.js

#WITH Animate.css
https://cdn.jsdelivr.net/npm/@breww.io/scroll-spyer/dist/browser/animate-css.min.js

#WITH BREWW Easing & Animation
https://cdn.jsdelivr.net/npm/@breww.io/scroll-spyer/dist/browser/BrewwAnimations.js
https://cdn.jsdelivr.net/npm/@breww.io/scroll-spyer/dist/browser/BrewwEasings.js

```





 
## Documentation

[Documentation](https://scrollspyer.breww.io/)

Extendable. Learn how to use ScrollSpy and funcationlities in detail.


## Features

- Everything included, ready for action.
- Plug-in your own modules with additional functionalities.
- Using Rollup
- ES6 Support


## Usage/Example
## DEMO 1 
 🔗 Links
[![portfolio](https://img.shields.io/badge/Test-Live!-red?style=for-the-badge&logo=ko-fi&logoColor=red)](https://demo-scrollspyer.breww.io/demo1)
```javascript
var animate = new AnimateCss();
    let sec ;
    const options = {
        sectionSelector: 'section',  // Query selector to your sections
        targetSelector: '[data-jump]', // Query selector to your elements that will be added `active` class
        topOffset: [
            { maxWidth: 767, topOffset: 300 },
            { minWidth: 768, maxWidth: 991, topOffset: 250 },
            { minWidth: 992, maxWidth: 4999, topOffset: 400 },
            ],
        easing: {
        enabled: true,
        type: BrewwEasings.linear
        },
        activeClass: ['activer', 'highlight'],
        onLastScrollInView: () => console.log("last"),
        onFirstScrollInView: () => console.log("hi"),
        animation: { enabled: true,  animType:'anim-type' },
        onScroll: (section, sections, animationOptions) => {
            sec = sections;
            console.log(animationOptions)
				animate.animateTwoWay(section,sections,animationOptions);
		},
        onSectionChange:(currentsection, sections, animationOptions) =>{
            //your function maybe custom  one
           // animate.animateTwoWay(currentsection,sections,animationOptions);          
        }        
    }

```

DEMO 2 (With Opacity Breww's Custom animation)

# DEMO 2
[![portfolio](https://img.shields.io/badge/Test-Live!-red?style=for-the-badge&logo=ko-fi&logoColor=red)](https://demo-scrollspyer.breww.io/demo2)
```javascript
    var animate = new AnimateCss();
    let sec;
    const options = {
        sectionSelector: '.maintest',  // Query selector to your sections
        targetSelector: '[data-jump]', // Query selector to your elements that will be added `active` class
      
        easing: {
            enabled: true,
            type: BrewwEasings.linear
        },
        activeClass: ['activer', 'highlight'],
        onLastScrollInView: () => console.log("last"),
        onFirstScrollInView: () => console.log("hi"),
        animation: { enabled: false, animType: 'anim-type' },
        onScroll: (section, sections, animationOptions) => {
            sec = sections;
            console.log(animationOptions)
            animate.animateTwoWay(section, sections, animationOptions);
        },
        onSectionChange: (currentsection, sections, animationOptions) => {
            //your actions
        }

    }
    const spyscroll = new SpyScroll(document.getElementById('nav'), options);
    BrewwAnimations.Bewwopacity(spyscroll.sections, 400);

```
## 🔗 Links
[![portfolio](https://img.shields.io/badge/DEMO!-000?style=for-the-badge&logo=ko-fi&logoColor=white)](DEMO1)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=DEMO@&logoColor=white)](https://www.linkedin.com/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)

