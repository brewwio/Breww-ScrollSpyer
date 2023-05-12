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
/******/ 	var __webpack_modules__ = ({

/***/ 1647:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./_base.css": [
		8643,
		8643
	],
	"./_vars.css": [
		6914,
		6914
	],
	"./animate.css": [
		9453,
		9453
	],
	"./attention_seekers/bounce.css": [
		9298,
		9298
	],
	"./attention_seekers/flash.css": [
		4117,
		4117
	],
	"./attention_seekers/headShake.css": [
		3096,
		3096
	],
	"./attention_seekers/heartBeat.css": [
		7428,
		7428
	],
	"./attention_seekers/jello.css": [
		2225,
		2225
	],
	"./attention_seekers/pulse.css": [
		7790,
		7790
	],
	"./attention_seekers/rubberBand.css": [
		5273,
		5273
	],
	"./attention_seekers/shake.css": [
		114,
		114
	],
	"./attention_seekers/shakeX.css": [
		3538,
		3538
	],
	"./attention_seekers/shakeY.css": [
		6220,
		6220
	],
	"./attention_seekers/swing.css": [
		9425,
		9425
	],
	"./attention_seekers/tada.css": [
		5739,
		5739
	],
	"./attention_seekers/wobble.css": [
		4133,
		9045
	],
	"./back_entrances/backInDown.css": [
		3540,
		3540
	],
	"./back_entrances/backInLeft.css": [
		509,
		509
	],
	"./back_entrances/backInRight.css": [
		441,
		441
	],
	"./back_entrances/backInUp.css": [
		9968,
		9968
	],
	"./back_exits/backOutDown.css": [
		5945,
		5945
	],
	"./back_exits/backOutLeft.css": [
		9809,
		9809
	],
	"./back_exits/backOutRight.css": [
		8763,
		8763
	],
	"./back_exits/backOutUp.css": [
		3480,
		3480
	],
	"./bouncing_entrances/bounceIn.css": [
		124,
		124
	],
	"./bouncing_entrances/bounceInDown.css": [
		1187,
		1187
	],
	"./bouncing_entrances/bounceInLeft.css": [
		3356,
		3356
	],
	"./bouncing_entrances/bounceInRight.css": [
		8139,
		8139
	],
	"./bouncing_entrances/bounceInUp.css": [
		1976,
		1976
	],
	"./bouncing_exits/bounceOut.css": [
		2034,
		2034
	],
	"./bouncing_exits/bounceOutDown.css": [
		7083,
		7083
	],
	"./bouncing_exits/bounceOutLeft.css": [
		2087,
		4133
	],
	"./bouncing_exits/bounceOutRight.css": [
		1375,
		1375
	],
	"./bouncing_exits/bounceOutUp.css": [
		372,
		372
	],
	"./fading_entrances/fadeIn.css": [
		313,
		313
	],
	"./fading_entrances/fadeInBottomLeft.css": [
		1020,
		1020
	],
	"./fading_entrances/fadeInBottomRight.css": [
		6704,
		6704
	],
	"./fading_entrances/fadeInDown.css": [
		1184,
		1184
	],
	"./fading_entrances/fadeInDownBig.css": [
		6666,
		6666
	],
	"./fading_entrances/fadeInLeft.css": [
		4655,
		4655
	],
	"./fading_entrances/fadeInLeftBig.css": [
		5675,
		5675
	],
	"./fading_entrances/fadeInRight.css": [
		3756,
		3756
	],
	"./fading_entrances/fadeInRightBig.css": [
		3798,
		3798
	],
	"./fading_entrances/fadeInTopLeft.css": [
		8693,
		8693
	],
	"./fading_entrances/fadeInTopRight.css": [
		8960,
		8960
	],
	"./fading_entrances/fadeInUp.css": [
		8277,
		8277
	],
	"./fading_entrances/fadeInUpBig.css": [
		2201,
		2201
	],
	"./fading_exits/fadeOut.css": [
		7225,
		7225
	],
	"./fading_exits/fadeOutBottomLeft.css": [
		930,
		930
	],
	"./fading_exits/fadeOutBottomRight.css": [
		428,
		428
	],
	"./fading_exits/fadeOutDown.css": [
		9922,
		9922
	],
	"./fading_exits/fadeOutDownBig.css": [
		2932,
		2932
	],
	"./fading_exits/fadeOutLeft.css": [
		7512,
		7512
	],
	"./fading_exits/fadeOutLeftBig.css": [
		155,
		155
	],
	"./fading_exits/fadeOutRight.css": [
		9397,
		9397
	],
	"./fading_exits/fadeOutRightBig.css": [
		6068,
		6068
	],
	"./fading_exits/fadeOutTopLeft.css": [
		798,
		798
	],
	"./fading_exits/fadeOutTopRight.css": [
		9357,
		9357
	],
	"./fading_exits/fadeOutUp.css": [
		3412,
		3412
	],
	"./fading_exits/fadeOutUpBig.css": [
		2146,
		2146
	],
	"./flippers/flip.css": [
		1718,
		1718
	],
	"./flippers/flipInX.css": [
		2956,
		2956
	],
	"./flippers/flipInY.css": [
		9437,
		9437
	],
	"./flippers/flipOutX.css": [
		5991,
		5991
	],
	"./flippers/flipOutY.css": [
		4652,
		4652
	],
	"./lightspeed/lightSpeedInLeft.css": [
		4244,
		4244
	],
	"./lightspeed/lightSpeedInRight.css": [
		555,
		555
	],
	"./lightspeed/lightSpeedOutLeft.css": [
		9716,
		9716
	],
	"./lightspeed/lightSpeedOutRight.css": [
		3745,
		3745
	],
	"./rotating_entrances/rotateIn.css": [
		2021,
		2021
	],
	"./rotating_entrances/rotateInDownLeft.css": [
		7309,
		7309
	],
	"./rotating_entrances/rotateInDownRight.css": [
		2761,
		2761
	],
	"./rotating_entrances/rotateInUpLeft.css": [
		4821,
		4821
	],
	"./rotating_entrances/rotateInUpRight.css": [
		3156,
		3156
	],
	"./rotating_exits/rotateOut.css": [
		3785,
		3785
	],
	"./rotating_exits/rotateOutDownLeft.css": [
		1010,
		1010
	],
	"./rotating_exits/rotateOutDownRight.css": [
		2873,
		2873
	],
	"./rotating_exits/rotateOutUpLeft.css": [
		6277,
		6277
	],
	"./rotating_exits/rotateOutUpRight.css": [
		5770,
		5770
	],
	"./sliding_entrances/slideInDown.css": [
		2928,
		2928
	],
	"./sliding_entrances/slideInLeft.css": [
		7338,
		7338
	],
	"./sliding_entrances/slideInRight.css": [
		178,
		178
	],
	"./sliding_entrances/slideInUp.css": [
		1004,
		1004
	],
	"./sliding_exits/slideOutDown.css": [
		7646,
		7646
	],
	"./sliding_exits/slideOutLeft.css": [
		3496,
		3496
	],
	"./sliding_exits/slideOutRight.css": [
		9926,
		9926
	],
	"./sliding_exits/slideOutUp.css": [
		1206,
		1206
	],
	"./specials/hinge.css": [
		4018,
		4018
	],
	"./specials/jackInTheBox.css": [
		8051,
		8051
	],
	"./specials/rollIn.css": [
		8824,
		8824
	],
	"./specials/rollOut.css": [
		8356,
		8356
	],
	"./zooming_entrances/zoomIn.css": [
		6113,
		6113
	],
	"./zooming_entrances/zoomInDown.css": [
		1967,
		1967
	],
	"./zooming_entrances/zoomInLeft.css": [
		7187,
		7187
	],
	"./zooming_entrances/zoomInRight.css": [
		6824,
		6824
	],
	"./zooming_entrances/zoomInUp.css": [
		6457,
		6457
	],
	"./zooming_exits/zoomOut.css": [
		1556,
		1556
	],
	"./zooming_exits/zoomOutDown.css": [
		7885,
		7885
	],
	"./zooming_exits/zoomOutLeft.css": [
		4454,
		4454
	],
	"./zooming_exits/zoomOutRight.css": [
		4008,
		4008
	],
	"./zooming_exits/zoomOutUp.css": [
		6644,
		6644
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 1647;
module.exports = webpackAsyncContext;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "styles/chunks/" + chunkId + "/" + chunkId + "." + {"114":"9023ab00fcc01e875cf7","124":"10c00e9954c4ea68b83c","155":"8976b857f46cb99385b3","178":"fd9d204494dfc79cc41f","313":"82a54205bb11fca2dd8a","372":"7ff4ab432ef7d81c43a6","428":"ee26127834bf55c94afb","441":"d3f4aea653aa25eb028b","509":"e03926aa5d12b0f4d587","555":"3593400810e7ed47a57a","798":"154c5d688cc73287ae37","930":"db0d81df7e8c53029cac","1004":"8403cfd16198da009873","1010":"0ad183220a40bbf6b38f","1020":"ca617fb9f3c535287256","1184":"338e4ab6efb9f9acf8b4","1187":"f78616ce48ce3c758846","1206":"168bc6c3152a68684825","1375":"cb651614154e380d8d11","1556":"e54cb3236b6025e1c066","1718":"3faa9bf36234baa9fd61","1967":"318c91e60ca80f610ddd","1976":"140a6079afea4746106c","2021":"7df0fa633901ed8004c2","2034":"441accf221cd4a2e1aae","2146":"9dba5dc673e295e1f1c7","2201":"285adab7e54c98bf4d85","2225":"ccf0a1d04415641f5e69","2761":"9df6e3d8b86f43dfa622","2873":"e816a1ec63ae6427dd3f","2928":"bfee66a1c679cf3f3c90","2932":"f9c42315137e9a0ce694","2956":"db154ac7d07d7817a144","3096":"7a6160d8030cc7b5081d","3156":"8362f8b8b7c7da31bacc","3356":"151896e662d9e0f18c19","3412":"023d21783efc549c36dd","3480":"135c33f9479034473da5","3496":"c75f65301a127c1299ad","3538":"06290f325ddc6b469749","3540":"391b94cb6bc926b7c497","3745":"0fbd33ca3ce07b2405a1","3756":"949b592929501c5def32","3785":"0018c4fe03e721a5f13c","3798":"b6a41ce3d5008137e66c","4008":"f25af2dc3ddca8e3ca44","4018":"efad73e6dce410b6466b","4117":"f660c80e791e5a23d9f7","4133":"63a391860aec106039f4","4244":"0f05aef09af1706648b6","4454":"494c1aaddf30a1b0c9af","4652":"77945d2c2475cb15ed8a","4655":"31eb897974f03822f832","4821":"a1154f6260d82c7b83c0","5273":"72d4117e387a504d2d57","5675":"0872a1b9c6cfe945eb03","5739":"68f237e74c071b139efd","5770":"c0a2fcefbff10872943a","5945":"68f928af07081470e98a","5991":"399d6c81e0b8342818b5","6068":"b799124a9ac6113371f8","6113":"1624d48cd11f5cbb3246","6220":"558417c0ac5510488c17","6277":"1ccaac2d9748120e4bec","6457":"7682c8375d39ebb051d6","6644":"cac6648afc20c59aff1b","6666":"f8d30705086aed838cff","6704":"aeee0f6607710b063c31","6824":"4610370818f211558c5d","7083":"c7051054ecc5c5ef22e2","7187":"21ce03191bcc4315158d","7225":"c118a4d2e9e5c26684e8","7309":"36efb058d0426e3e009d","7338":"25c4c1c7626d9bdbc5ae","7428":"e81141c466ae6d274305","7512":"40967c687ee006f371d4","7646":"0e6560c1f016721a7a9a","7790":"9ae72cab9d2853675d10","7885":"37d25e3aca53634ab6bc","8051":"91841ea90a33da9cdcfa","8139":"b21330d1377ee5baa530","8277":"9c1d87b489cddeb5c020","8356":"8e3d0fcd795f2eeba726","8693":"8ecce2db48ffc63d7ac3","8763":"99c93884a5dc43582575","8824":"7301cb6f3e2dace4bb4b","8960":"16fd9e4b5274bd4769e8","9045":"4f339434a05d40d90f70","9298":"afbe1d8a152ff762f67d","9357":"c06847c39d5a97f96428","9397":"cc09976f71972846b77b","9425":"8cb360403ca1943ca24f","9437":"2419bb82c022ec128fe1","9453":"9358cea9d3168a2d4d39","9716":"4d19da6ada25233ee9fb","9809":"ffa1c982bae0ac9e2088","9922":"6f9d6809b60e90654f14","9926":"89f8876c49fe608a32dd","9968":"d43074412a91d968f4b1"}[chunkId] + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "styles/chunks/" + chunkId + "/" + chunkId + "." + {"114":"9023ab00fcc01e875cf7","124":"10c00e9954c4ea68b83c","155":"8976b857f46cb99385b3","178":"fd9d204494dfc79cc41f","313":"82a54205bb11fca2dd8a","372":"7ff4ab432ef7d81c43a6","428":"ee26127834bf55c94afb","441":"d3f4aea653aa25eb028b","509":"e03926aa5d12b0f4d587","555":"3593400810e7ed47a57a","798":"154c5d688cc73287ae37","930":"db0d81df7e8c53029cac","1004":"8403cfd16198da009873","1010":"0ad183220a40bbf6b38f","1020":"ca617fb9f3c535287256","1184":"338e4ab6efb9f9acf8b4","1187":"f78616ce48ce3c758846","1206":"168bc6c3152a68684825","1375":"cb651614154e380d8d11","1556":"e54cb3236b6025e1c066","1718":"3faa9bf36234baa9fd61","1967":"318c91e60ca80f610ddd","1976":"140a6079afea4746106c","2021":"7df0fa633901ed8004c2","2034":"441accf221cd4a2e1aae","2146":"9dba5dc673e295e1f1c7","2201":"285adab7e54c98bf4d85","2225":"ccf0a1d04415641f5e69","2761":"9df6e3d8b86f43dfa622","2873":"e816a1ec63ae6427dd3f","2928":"bfee66a1c679cf3f3c90","2932":"f9c42315137e9a0ce694","2956":"db154ac7d07d7817a144","3096":"7a6160d8030cc7b5081d","3156":"8362f8b8b7c7da31bacc","3356":"151896e662d9e0f18c19","3412":"023d21783efc549c36dd","3480":"135c33f9479034473da5","3496":"c75f65301a127c1299ad","3538":"06290f325ddc6b469749","3540":"391b94cb6bc926b7c497","3745":"0fbd33ca3ce07b2405a1","3756":"949b592929501c5def32","3785":"0018c4fe03e721a5f13c","3798":"b6a41ce3d5008137e66c","4008":"f25af2dc3ddca8e3ca44","4018":"efad73e6dce410b6466b","4117":"f660c80e791e5a23d9f7","4133":"63a391860aec106039f4","4244":"0f05aef09af1706648b6","4454":"494c1aaddf30a1b0c9af","4652":"77945d2c2475cb15ed8a","4655":"31eb897974f03822f832","4821":"a1154f6260d82c7b83c0","5273":"72d4117e387a504d2d57","5675":"0872a1b9c6cfe945eb03","5739":"68f237e74c071b139efd","5770":"c0a2fcefbff10872943a","5945":"68f928af07081470e98a","5991":"399d6c81e0b8342818b5","6068":"b799124a9ac6113371f8","6113":"1624d48cd11f5cbb3246","6220":"558417c0ac5510488c17","6277":"1ccaac2d9748120e4bec","6457":"7682c8375d39ebb051d6","6644":"cac6648afc20c59aff1b","6666":"f8d30705086aed838cff","6704":"aeee0f6607710b063c31","6824":"4610370818f211558c5d","7083":"c7051054ecc5c5ef22e2","7187":"21ce03191bcc4315158d","7225":"c118a4d2e9e5c26684e8","7309":"36efb058d0426e3e009d","7338":"25c4c1c7626d9bdbc5ae","7428":"e81141c466ae6d274305","7512":"40967c687ee006f371d4","7646":"0e6560c1f016721a7a9a","7790":"9ae72cab9d2853675d10","7885":"37d25e3aca53634ab6bc","8051":"91841ea90a33da9cdcfa","8139":"b21330d1377ee5baa530","8277":"9c1d87b489cddeb5c020","8356":"8e3d0fcd795f2eeba726","8693":"8ecce2db48ffc63d7ac3","8763":"99c93884a5dc43582575","8824":"7301cb6f3e2dace4bb4b","8960":"16fd9e4b5274bd4769e8","9045":"4f339434a05d40d90f70","9298":"afbe1d8a152ff762f67d","9357":"c06847c39d5a97f96428","9397":"cc09976f71972846b77b","9425":"8cb360403ca1943ca24f","9437":"2419bb82c022ec128fe1","9453":"9358cea9d3168a2d4d39","9716":"4d19da6ada25233ee9fb","9809":"ffa1c982bae0ac9e2088","9922":"6f9d6809b60e90654f14","9926":"89f8876c49fe608a32dd","9968":"d43074412a91d968f4b1"}[chunkId] + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "breww-spyer:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			1776: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"114":1,"124":1,"155":1,"178":1,"313":1,"372":1,"428":1,"441":1,"509":1,"555":1,"798":1,"930":1,"1004":1,"1010":1,"1020":1,"1184":1,"1187":1,"1206":1,"1375":1,"1556":1,"1718":1,"1967":1,"1976":1,"2021":1,"2034":1,"2146":1,"2201":1,"2225":1,"2761":1,"2873":1,"2928":1,"2932":1,"2956":1,"3096":1,"3156":1,"3356":1,"3412":1,"3480":1,"3496":1,"3538":1,"3540":1,"3745":1,"3756":1,"3785":1,"3798":1,"4008":1,"4018":1,"4117":1,"4133":1,"4244":1,"4454":1,"4652":1,"4655":1,"4821":1,"5273":1,"5675":1,"5739":1,"5770":1,"5945":1,"5991":1,"6068":1,"6113":1,"6220":1,"6277":1,"6457":1,"6644":1,"6666":1,"6704":1,"6824":1,"7083":1,"7187":1,"7225":1,"7309":1,"7338":1,"7428":1,"7512":1,"7646":1,"7790":1,"7885":1,"8051":1,"8139":1,"8277":1,"8356":1,"8693":1,"8763":1,"8824":1,"8960":1,"9045":1,"9298":1,"9357":1,"9397":1,"9425":1,"9437":1,"9453":1,"9716":1,"9809":1,"9922":1,"9926":1,"9968":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			1776: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"114":1,"124":1,"155":1,"178":1,"313":1,"372":1,"428":1,"441":1,"509":1,"555":1,"798":1,"930":1,"1004":1,"1010":1,"1020":1,"1184":1,"1187":1,"1206":1,"1375":1,"1556":1,"1718":1,"1967":1,"1976":1,"2021":1,"2034":1,"2146":1,"2201":1,"2225":1,"2761":1,"2873":1,"2928":1,"2932":1,"2956":1,"3096":1,"3156":1,"3356":1,"3412":1,"3480":1,"3496":1,"3538":1,"3540":1,"3745":1,"3756":1,"3785":1,"3798":1,"4008":1,"4018":1,"4117":1,"4133":1,"4244":1,"4454":1,"4652":1,"4655":1,"4821":1,"5273":1,"5675":1,"5739":1,"5770":1,"5945":1,"5991":1,"6068":1,"6113":1,"6220":1,"6277":1,"6457":1,"6644":1,"6666":1,"6704":1,"6824":1,"7083":1,"7187":1,"7225":1,"7309":1,"7338":1,"7428":1,"7512":1,"7646":1,"7790":1,"7885":1,"8051":1,"8139":1,"8277":1,"8356":1,"8693":1,"8763":1,"8824":1,"8960":1,"9045":1,"9298":1,"9357":1,"9397":1,"9425":1,"9437":1,"9453":1,"9716":1,"9809":1,"9922":1,"9926":1,"9968":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			1776: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = this["webpackChunkbreww_spyer"] = this["webpackChunkbreww_spyer"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Animate_css_AnimateCss)
});

;// CONCATENATED MODULE: ./src/Animation/Animate-css/herper.ts
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
function importCss(fileName) {
    return __awaiter(this, void 0, void 0, function () {
        var cssModule, styleElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, __webpack_require__(1647)("./".concat(fileName))];
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

;// CONCATENATED MODULE: ./src/Animation/Animate-css/AnimateCss.ts
var AnimateCss_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var AnimateCss_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
        return AnimateCss_awaiter(this, void 0, void 0, function () {
            var animtype;
            return AnimateCss_generator(this, function (_a) {
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
/* harmony default export */ const Animate_css_AnimateCss = (AnimateCss);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});