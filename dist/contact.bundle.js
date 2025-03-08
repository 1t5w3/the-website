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

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/reset.css */ \"./src/styles/reset.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.css */ \"./src/styles/main.css\");\n \r\n\r\n\r\n\r\n\r\nfunction gridCellDimensions() {\r\n    const element = document.createElement(\"div\");\r\n    element.style.position = \"fixed\";\r\n    element.style.height = \"var(--line-height)\";\r\n    element.style.width = \"1ch\";\r\n    document.body.appendChild(element);\r\n    const rect = element.getBoundingClientRect();\r\n    document.body.removeChild(element);\r\n    return { width: rect.width, height: rect.height };\r\n  }\r\n  \r\n  // Add padding to each media to maintain grid.\r\n  function adjustMediaPadding() {\r\n    const cell = gridCellDimensions();\r\n  \r\n    function setHeightFromRatio(media, ratio) {\r\n        const rect = media.getBoundingClientRect();\r\n        const realHeight = rect.width / ratio;\r\n        const diff = cell.height - (realHeight % cell.height);\r\n        media.style.setProperty(\"padding-bottom\", `${diff}px`);\r\n    }\r\n  \r\n    function setFallbackHeight(media) {\r\n        const rect = media.getBoundingClientRect();\r\n        const height = Math.round((rect.width / 2) / cell.height) * cell.height;\r\n        media.style.setProperty(\"height\", `${height}px`);\r\n    }\r\n  \r\n    function onMediaLoaded(media) {\r\n      var width, height;\r\n      switch (media.tagName) {\r\n        case \"IMG\":\r\n          width = media.naturalWidth;\r\n          height = media.naturalHeight;\r\n          break;\r\n        case \"VIDEO\":\r\n          width = media.videoWidth;\r\n          height = media.videoHeight;\r\n          break;\r\n      }\r\n      if (width > 0 && height > 0) {\r\n        setHeightFromRatio(media, width / height);\r\n      } else {\r\n        setFallbackHeight(media);\r\n      }\r\n    }\r\n  \r\n    const medias = document.querySelectorAll(\"img, video\");\r\n    for (media of medias) {\r\n      switch (media.tagName) {\r\n        case \"IMG\":\r\n          if (media.complete) {\r\n            onMediaLoaded(media);\r\n          } else {\r\n            media.addEventListener(\"load\", () => onMediaLoaded(media));\r\n            media.addEventListener(\"error\", function() {\r\n                setFallbackHeight(media);\r\n            });\r\n          }\r\n          break;\r\n        case \"VIDEO\":\r\n          switch (media.readyState) {\r\n            case HTMLMediaElement.HAVE_CURRENT_DATA:\r\n            case HTMLMediaElement.HAVE_FUTURE_DATA:\r\n            case HTMLMediaElement.HAVE_ENOUGH_DATA:\r\n              onMediaLoaded(media);\r\n              break;\r\n            default:\r\n              media.addEventListener(\"loadeddata\", () => onMediaLoaded(media));\r\n              media.addEventListener(\"error\", function() {\r\n                setFallbackHeight(media);\r\n              });\r\n              break;\r\n          }\r\n          break;\r\n      }\r\n    }\r\n  }\r\n  \r\n  adjustMediaPadding();\r\n  window.addEventListener(\"load\", adjustMediaPadding);\r\n  window.addEventListener(\"resize\", adjustMediaPadding);\r\n  \r\n  function checkOffsets() {\r\n    const ignoredTagNames = new Set([\r\n      \"THEAD\",\r\n      \"TBODY\",\r\n      \"TFOOT\",\r\n      \"TR\",\r\n      \"TD\",\r\n      \"TH\",\r\n    ]);\r\n    const cell = gridCellDimensions();\r\n    const elements = document.querySelectorAll(\"body :not(.debug-grid, .debug-toggle)\");\r\n    for (const element of elements) {\r\n      if (ignoredTagNames.has(element.tagName)) {\r\n        continue;\r\n      }\r\n      const rect = element.getBoundingClientRect();\r\n      if (rect.width === 0 && rect.height === 0) {\r\n        continue;\r\n      }\r\n      const top = rect.top + window.scrollY;\r\n      const left = rect.left + window.scrollX;\r\n      const offset = top % (cell.height / 2);\r\n      if(offset > 0) {\r\n        element.classList.add(\"off-grid\");\r\n        console.error(\"Incorrect vertical offset for\", element, \"with remainder\", top % cell.height, \"when expecting divisible by\", cell.height / 2);\r\n      } else {\r\n        element.classList.remove(\"off-grid\");\r\n      }\r\n    }\r\n  }\r\n  \r\n  const debugToggle = document.querySelector(\".debug-toggle\");\r\n  function onDebugToggle() {\r\n    document.body.classList.toggle(\"debug\", debugToggle.checked);\r\n  }\r\n  debugToggle.addEventListener(\"change\", onDebugToggle);\r\n  onDebugToggle();\r\n  \r\n  \n\n//# sourceURL=webpack:///./src/pages/contact.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/styles/main.css?");

/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/styles/reset.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/contact.js");
/******/ 	
/******/ })()
;