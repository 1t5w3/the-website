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

/***/ "./src/pages/BPcounter.js":
/*!********************************!*\
  !*** ./src/pages/BPcounter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ \"./src/styles/main.css\");\n\r\n\r\n\r\nfunction gridCellDimensions() {\r\n    const element = document.createElement(\"div\");\r\n    element.style.position = \"fixed\";\r\n    element.style.height = \"var(--line-height)\";\r\n    element.style.width = \"1ch\";\r\n    document.body.appendChild(element);\r\n    const rect = element.getBoundingClientRect();\r\n    document.body.removeChild(element);\r\n    return { width: rect.width, height: rect.height };\r\n  }\r\n  \r\n  // Add padding to each media to maintain grid.\r\n  function adjustMediaPadding() {\r\n    const cell = gridCellDimensions();\r\n  \r\n    function setHeightFromRatio(media, ratio) {\r\n        const rect = media.getBoundingClientRect();\r\n        const realHeight = rect.width / ratio;\r\n        const diff = cell.height - (realHeight % cell.height);\r\n        media.style.setProperty(\"padding-bottom\", `${diff}px`);\r\n    }\r\n  \r\n    function setFallbackHeight(media) {\r\n        const rect = media.getBoundingClientRect();\r\n        const height = Math.round((rect.width / 2) / cell.height) * cell.height;\r\n        media.style.setProperty(\"height\", `${height}px`);\r\n    }\r\n  \r\n    function onMediaLoaded(media) {\r\n      var width, height;\r\n      switch (media.tagName) {\r\n        case \"IMG\":\r\n          width = media.naturalWidth;\r\n          height = media.naturalHeight;\r\n          break;\r\n        case \"VIDEO\":\r\n          width = media.videoWidth;\r\n          height = media.videoHeight;\r\n          break;\r\n      }\r\n      if (width > 0 && height > 0) {\r\n        setHeightFromRatio(media, width / height);\r\n      } else {\r\n        setFallbackHeight(media);\r\n      }\r\n    }\r\n  \r\n    const medias = document.querySelectorAll(\"img, video\");\r\n    for (media of medias) {\r\n      switch (media.tagName) {\r\n        case \"IMG\":\r\n          if (media.complete) {\r\n            onMediaLoaded(media);\r\n          } else {\r\n            media.addEventListener(\"load\", () => onMediaLoaded(media));\r\n            media.addEventListener(\"error\", function() {\r\n                setFallbackHeight(media);\r\n            });\r\n          }\r\n          break;\r\n        case \"VIDEO\":\r\n          switch (media.readyState) {\r\n            case HTMLMediaElement.HAVE_CURRENT_DATA:\r\n            case HTMLMediaElement.HAVE_FUTURE_DATA:\r\n            case HTMLMediaElement.HAVE_ENOUGH_DATA:\r\n              onMediaLoaded(media);\r\n              break;\r\n            default:\r\n              media.addEventListener(\"loadeddata\", () => onMediaLoaded(media));\r\n              media.addEventListener(\"error\", function() {\r\n                setFallbackHeight(media);\r\n              });\r\n              break;\r\n          }\r\n          break;\r\n      }\r\n    }\r\n  }\r\n  \r\n  adjustMediaPadding();\r\n  window.addEventListener(\"load\", adjustMediaPadding);\r\n  window.addEventListener(\"resize\", adjustMediaPadding);\r\n  \r\n  function checkOffsets() {\r\n    const ignoredTagNames = new Set([\r\n      \"THEAD\",\r\n      \"TBODY\",\r\n      \"TFOOT\",\r\n      \"TR\",\r\n      \"TD\",\r\n      \"TH\",\r\n    ]);\r\n    const cell = gridCellDimensions();\r\n    const elements = document.querySelectorAll(\"body :not(.debug-grid, .debug-toggle)\");\r\n    for (const element of elements) {\r\n      if (ignoredTagNames.has(element.tagName)) {\r\n        continue;\r\n      }\r\n      const rect = element.getBoundingClientRect();\r\n      if (rect.width === 0 && rect.height === 0) {\r\n        continue;\r\n      }\r\n      const top = rect.top + window.scrollY;\r\n      const left = rect.left + window.scrollX;\r\n      const offset = top % (cell.height / 2);\r\n      if(offset > 0) {\r\n        element.classList.add(\"off-grid\");\r\n        console.error(\"Incorrect vertical offset for\", element, \"with remainder\", top % cell.height, \"when expecting divisible by\", cell.height / 2);\r\n      } else {\r\n        element.classList.remove(\"off-grid\");\r\n      }\r\n    }\r\n  }\r\n  \r\n\r\n  \r\n  \r\n\r\nvar countDownDate = new Date(\"May 2, 2025 10:30:00\").getTime();\r\n  \r\n\r\n  var x = setInterval(function() {\r\n  \r\n    var now = new Date().getTime();\r\n  \r\n\r\n    var distance = countDownDate - now;\r\n  \r\n    var days = Math.floor(distance / (1000 * 60 * 60 * 24));\r\n    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\r\n    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));\r\n    var seconds = Math.floor((distance % (1000 * 60)) / 1000);\r\n    console.log(document.getElementsByName(\"days\")[0].value)\r\n    document.getElementsByName(\"days\")[0].value = days\r\n    document.getElementById(\"demo\").innerHTML = days + \"d \" + hours + \"h \"\r\n    + minutes + \"m \" + seconds + \"s Untill the battle pass ends\";\r\n  \r\n    if (distance < 0) {\r\n      clearInterval(x);\r\n      document.getElementById(\"demo\").innerHTML = \"EXPIRED\";\r\n    }\r\n  }, 1000);\r\nvar startingLevel = document.getElementsByName(\"startingLevel\")[0].value\r\nvar finalLevel = document.getElementsByName(\"finalLevel\")[0].value\r\ndocument.getElementsByName(\"XPEarnedTF\")[0].value = false\r\n\r\n\r\ndocument.getElementsByName(\"startingLevel\")[0].addEventListener('change', startingLevelAssigning);\r\ndocument.getElementsByName(\"finalLevel\")[0].addEventListener('change', finalLevelAssigning);\r\ndocument.getElementsByName(\"XPEarned\")[0].addEventListener('change', XPEarnedAssigning);\r\n\r\n\r\nfunction startingLevelAssigning(){\r\n    document.getElementsByName(\"startingLevel\")[0].value = checkNumberRange(Number(document.getElementsByName(\"startingLevel\")[0].value))\r\n    startingLevel = Number(document.getElementsByName(\"startingLevel\")[0].value)\r\n    checkIfStartIsLowerThanFinal()\r\n    distance()\r\n}\r\nfunction finalLevelAssigning(){\r\n    document.getElementsByName(\"finalLevel\")[0].value = checkNumberRange(Number(document.getElementsByName(\"finalLevel\")[0].value))\r\n    finalLevel = Number(document.getElementsByName(\"finalLevel\")[0].value)\r\n    checkIfStartIsLowerThanFinal()\r\n    distance()\r\n}\r\nfunction XPEarnedAssigning(){\r\n    var XPEarned = Number(document.getElementsByName(\"XPEarned\")[0].value)\r\n    if(XPEarned === 0) document.getElementsByName(\"XPEarnedTF\")[0].value = false;\r\n    else document.getElementsByName(\"XPEarnedTF\")[0].value = true;\r\n    distance()\r\n    \r\n}\r\nfunction checkIfStartIsLowerThanFinal(){\r\n    if(startingLevel >= finalLevel){\r\n        finalLevel = Number(startingLevel) + 1\r\n        document.getElementsByName(\"finalLevel\")[0].value = finalLevel\r\n        if(finalLevel > 200){\r\n            finalLevel = 200\r\n            document.getElementsByName(\"finalLevel\")[0].value = finalLevel\r\n        }\r\n        console.log(\"new start is: \"+ startingLevel +\" and new final is: \"+finalLevel)\r\n    }\r\n}\r\nfunction checkNumberRange(object){\r\n    if(object > 200){\r\n        return object = 200\r\n    }else if(object < 1){\r\n        return object = 1\r\n    }else return object\r\n}\r\n\r\nfunction distance(){\r\n    if(document.getElementsByName(\"XPEarnedTF\")[0].value === false){\r\nvar BPdistance = finalLevel - startingLevel\r\ndocument.getElementById('BPDistance').innerHTML = \"Distance : \" + BPdistance\r\nvar XPneeded = Number(BPdistance) * 80000\r\ndocument.getElementById('BPXPneeded').innerHTML = \"you need : \" + Number(XPneeded) +\" XP\"   \r\nvar XPperDay = Math.floor(XPneeded/Number(document.getElementsByName(\"days\")[0].value))\r\ndocument.getElementById('BPDaysNeeded').innerHTML = \"That is : \"+XPperDay+\" XP in \"+Number(document.getElementsByName(\"days\")[0].value)+\" Days\"\r\n}else if(document.getElementsByName(\"XPEarnedTF\")[0].value === true){\r\nvar BPdistance = finalLevel - startingLevel\r\ndocument.getElementById('BPDistance').innerHTML = \"Distance : \" + BPdistance\r\nvar XPneeded = Number(BPdistance) * 80000\r\ndocument.getElementById('BPXPneeded').innerHTML = \"you need : \" + Number(XPneeded) +\" XP\"   \r\nvar XPperDay = Number(document.getElementsByName(\"XPEarned\")[0].value)\r\nvar days = Math.floor(XPneeded/XPperDay)\r\ndocument.getElementById('BPDaysNeeded').innerHTML = \"That is : \"+XPperDay+\" XP in \"+days+\" Days\"\r\nif(days > Number(document.getElementsByName(\"days\")[0].value)){\r\n    document.getElementById('BPWillMakeIt').innerHTML = \"You will Not make it\"\r\n}else{\r\n    console.log(\"soemthin\")\r\n    document.getElementById('BPWillMakeIt').innerHTML = \"You will make it\"\r\n}\r\n\r\n}}\n\n//# sourceURL=webpack:///./src/pages/BPcounter.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/styles/main.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/BPcounter.js");
/******/ 	
/******/ })()
;