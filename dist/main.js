/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/key.js":
/*!***************************!*\
  !*** ./src/assets/key.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   key: () => (/* binding */ key)\n/* harmony export */ });\nconst key =\n  \"C9S1lbYdLTtAbJbgdeVD6pM16ZD8OYaxBZd%2BqEW273T9uJayVKrwsS4ORv2GS%2FDZrz4uhcHnTTEbDtvOulfvBQ%3D%3D\";\n\n\n//# sourceURL=webpack://my-webpack-project/./src/assets/key.js?");

/***/ }),

/***/ "./src/js/getItem.js":
/*!***************************!*\
  !*** ./src/js/getItem.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_key_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/key.js */ \"./src/assets/key.js\");\n/* harmony import */ var _getNumOfRows_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNumOfRows.js */ \"./src/js/getNumOfRows.js\");\n\n\n\nasync function getItem() {\n  const totalCount = await (0,_getNumOfRows_js__WEBPACK_IMPORTED_MODULE_1__.getNumOfRows)();\n  const item = [];\n  const url =\n    \"http://api.data.go.kr/openapi/tn_pubr_public_free_mlsv_api\"; /*URL*/\n  let queryParams =\n    \"?\" + encodeURIComponent(\"serviceKey\") + \"=\" + _assets_key_js__WEBPACK_IMPORTED_MODULE_0__.key; /*Service Key*/\n  queryParams +=\n    \"&\" + encodeURIComponent(\"pageNo\") + \"=\" + encodeURIComponent(\"1\"); /**/\n  queryParams +=\n    \"&\" +\n    encodeURIComponent(\"numOfRows\") +\n    \"=\" +\n    encodeURIComponent(totalCount); /**/\n  queryParams +=\n    \"&\" + encodeURIComponent(\"type\") + \"=\" + encodeURIComponent(\"json\"); /**/\n\n  const response = await fetch(url + queryParams);\n  const result = await response.json();\n  item.push(result.response.body.items);\n  return item;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getItem);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/js/getItem.js?");

/***/ }),

/***/ "./src/js/getNumOfRows.js":
/*!********************************!*\
  !*** ./src/js/getNumOfRows.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getNumOfRows: () => (/* binding */ getNumOfRows)\n/* harmony export */ });\n/* harmony import */ var _assets_key_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/key.js */ \"./src/assets/key.js\");\n\n\nconst getNumOfRows = async () => {\n  const url =\n    \"http://api.data.go.kr/openapi/tn_pubr_public_free_mlsv_api\"; /*URL*/\n  let queryParams =\n    \"?\" + encodeURIComponent(\"serviceKey\") + \"=\" + _assets_key_js__WEBPACK_IMPORTED_MODULE_0__.key; /*Service Key*/\n  queryParams +=\n    \"&\" + encodeURIComponent(\"pageNo\") + \"=\" + encodeURIComponent(\"1\"); /**/\n  queryParams +=\n    \"&\" +\n    encodeURIComponent(\"numOfRows\") +\n    \"=\" +\n    encodeURIComponent(\"100\"); /**/\n  queryParams +=\n    \"&\" + encodeURIComponent(\"type\") + \"=\" + encodeURIComponent(\"json\"); /**/\n\n  const response = await fetch(url + queryParams);\n  const result = await response.json();\n  const numOfRows = result.response.body.totalCount;\n\n  return numOfRows;\n};\n\n\n//# sourceURL=webpack://my-webpack-project/./src/js/getNumOfRows.js?");

/***/ }),

/***/ "./src/js/map.js":
/*!***********************!*\
  !*** ./src/js/map.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   map: () => (/* binding */ map)\n/* harmony export */ });\nconst map = (item) => {\n  const { naver } = window;\n  var mapOptions = {\n    center: new naver.maps.LatLng(37.3595704, 127.105399),\n    zoom: 7,\n  };\n\n  var map = new naver.maps.Map(\"map\", {\n    scaleControl: false,\n    logoControl: false,\n    mapDataControl: false,\n    zoomControl: true,\n    minZoom: 6,\n    zoom: 8,\n  });\n\n  var contentString;\n\n  const setContentString = (obj) => {\n    contentString = \"test\";\n  };\n\n  item.map((items) => {\n    items.map((items) => {\n      var marker = new naver.maps.Marker({\n        position: new naver.maps.LatLng(items.latitude, items.longitude),\n        map: map,\n      });\n\n      naver.maps.Event.addListener(marker, \"click\", function (e) {\n        setContentString();\n        console.log(e);\n        console.log(contentString);\n        if (infowindow.getMap()) {\n          infowindow.close();\n        } else {\n          infowindow.open(map, marker);\n        }\n      });\n    });\n  });\n\n  var infowindow = new naver.maps.InfoWindow({\n    content: contentString,\n  });\n};\n\n\n//# sourceURL=webpack://my-webpack-project/./src/js/map.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_getItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/getItem.js */ \"./src/js/getItem.js\");\n/* harmony import */ var _js_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/map.js */ \"./src/js/map.js\");\n\n\n\nconst item = await (0,_js_getItem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//네이버 맵\n(0,_js_map_js__WEBPACK_IMPORTED_MODULE_1__.map)(item);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://my-webpack-project/./src/main.js?");

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
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;