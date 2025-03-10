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

/***/ "./src/pages/todo.js":
/*!***************************!*\
  !*** ./src/pages/todo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ \"./src/styles/main.css\");\n\r\n\r\nfunction gridCellDimensions() {\r\n    const element = document.createElement(\"div\");\r\n    element.style.position = \"fixed\";\r\n    element.style.height = \"var(--line-height)\";\r\n    element.style.width = \"1ch\";\r\n    document.body.appendChild(element);\r\n    const rect = element.getBoundingClientRect();\r\n    document.body.removeChild(element);\r\n    return { width: rect.width, height: rect.height };\r\n  }\r\n  \r\n  function adjustMediaPadding() {\r\n    const cell = gridCellDimensions();\r\n  \r\n    function setHeightFromRatio(media, ratio) {\r\n        const rect = media.getBoundingClientRect();\r\n        const realHeight = rect.width / ratio;\r\n        const diff = cell.height - (realHeight % cell.height);\r\n        media.style.setProperty(\"padding-bottom\", `${diff}px`);\r\n    }\r\n  \r\n    function setFallbackHeight(media) {\r\n        const rect = media.getBoundingClientRect();\r\n        const height = Math.round((rect.width / 2) / cell.height) * cell.height;\r\n        media.style.setProperty(\"height\", `${height}px`);\r\n    }\r\n  \r\n    function onMediaLoaded(media) {\r\n      var width, height;\r\n      switch (media.tagName) {\r\n        case \"IMG\":\r\n          width = media.naturalWidth;\r\n          height = media.naturalHeight;\r\n          break;\r\n        case \"VIDEO\":\r\n          width = media.videoWidth;\r\n          height = media.videoHeight;\r\n          break;\r\n      }\r\n      if (width > 0 && height > 0) {\r\n        setHeightFromRatio(media, width / height);\r\n      } else {\r\n        setFallbackHeight(media);\r\n      }\r\n    }\r\n  \r\n    const medias = document.querySelectorAll(\"img, video\");\r\n    for (media of medias) {\r\n      switch (media.tagName) {\r\n        case \"IMG\":\r\n          if (media.complete) {\r\n            onMediaLoaded(media);\r\n          } else {\r\n            media.addEventListener(\"load\", () => onMediaLoaded(media));\r\n            media.addEventListener(\"error\", function() {\r\n                setFallbackHeight(media);\r\n            });\r\n          }\r\n          break;\r\n        case \"VIDEO\":\r\n          switch (media.readyState) {\r\n            case HTMLMediaElement.HAVE_CURRENT_DATA:\r\n            case HTMLMediaElement.HAVE_FUTURE_DATA:\r\n            case HTMLMediaElement.HAVE_ENOUGH_DATA:\r\n              onMediaLoaded(media);\r\n              break;\r\n            default:\r\n              media.addEventListener(\"loadeddata\", () => onMediaLoaded(media));\r\n              media.addEventListener(\"error\", function() {\r\n                setFallbackHeight(media);\r\n              });\r\n              break;\r\n          }\r\n          break;\r\n      }\r\n    }\r\n  }\r\n  \r\n  adjustMediaPadding();\r\n  window.addEventListener(\"load\", adjustMediaPadding);\r\n  window.addEventListener(\"resize\", adjustMediaPadding);\r\n  \r\n  function checkOffsets() {\r\n    const ignoredTagNames = new Set([\r\n      \"THEAD\",\r\n      \"TBODY\",\r\n      \"TFOOT\",\r\n      \"TR\",\r\n      \"TD\",\r\n      \"TH\",\r\n    ]);\r\n    const cell = gridCellDimensions();\r\n    const elements = document.querySelectorAll(\"body :not(.debug-grid, .debug-toggle)\");\r\n    for (const element of elements) {\r\n      if (ignoredTagNames.has(element.tagName)) {\r\n        continue;\r\n      }\r\n      const rect = element.getBoundingClientRect();\r\n      if (rect.width === 0 && rect.height === 0) {\r\n        continue;\r\n      }\r\n      const top = rect.top + window.scrollY;\r\n      const left = rect.left + window.scrollX;\r\n      const offset = top % (cell.height / 2);\r\n      if(offset > 0) {\r\n        element.classList.add(\"off-grid\");\r\n        console.error(\"Incorrect vertical offset for\", element, \"with remainder\", top % cell.height, \"when expecting divisible by\", cell.height / 2);\r\n      } else {\r\n        element.classList.remove(\"off-grid\");\r\n      }\r\n    }\r\n  }\r\n\r\n\r\n/* the code starts here */\r\ndocument.getElementById(\"newTaskButton\").addEventListener(\"click\", togglePopup);\r\ndocument.getElementById(\"TDSubmit\").addEventListener(\"click\", submit);\r\ndocument.getElementById(\"Xbutton\").addEventListener(\"click\", togglePopup);\r\n\r\nlet tasksArray = JSON.parse(localStorage.getItem(\"tasksList\")) || [];\r\nlet i = tasksArray.length ? Math.max(...tasksArray.map(task => task.id)) + 1 : 1;\r\n\r\nfunction loadTasks() {\r\n  tasksArray = JSON.parse(localStorage.getItem(\"tasksList\")) || [];\r\n  tasksArray.forEach(task => {\r\n    createTask(task);\r\n  });\r\n  if (tasksArray.length > 0) {\r\n    i = Math.max(...tasksArray.map(task => task.id)) + 1;\r\n  } else {\r\n    i = 1;\r\n  }\r\n}\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", loadTasks);\r\n\r\nfunction createTask(TDD) {\r\n  if (!TDD.hasOwnProperty(\"id\")) {\r\n    TDD.id = i;\r\n    i++;\r\n  }\r\n  const div = document.createElement(\"div\");\r\n  div.style.border = \"var(--border-thickness) solid var(--text-color)\";\r\n  div.style.padding = \"calc((var(--line-height) / 2)) calc(1ch - var(--border-thickness)/2 calc((var(--line-height) / 2) - (var(--border-thickness)))\";\r\n  div.style.lineHeight = \"var(--line-height)\";\r\n  div.style.verticalAlign = \"top\";\r\n  div.style.textAlign = \"left\";\r\n  div.style.position = \"relative\";\r\n  div.style.top = \"calc(var(--line-height) / 2)\";\r\n  div.style.width = \"calc(round(down, 100%, 1ch))\";\r\n  div.style.borderCollapse = \"collapse\";\r\n  div.style.margin = \"0 0 calc(var(--line-height) * 2)\";\r\n  div.style.paddingLeft = \"10px\";\r\n  div.id = `taskDiv${TDD.id}`;\r\n  div.dataset.taskId = TDD.id;\r\n  const title = document.createElement(\"p\");\r\n  const date = document.createElement(\"p\");\r\n  const description = document.createElement(\"p\");\r\n  title.innerHTML = TDD.title;\r\n  date.innerHTML = TDD.date;\r\n  description.innerHTML = TDD.description;\r\n  document.getElementById(\"tasks\").appendChild(div);\r\n  div.appendChild(title);\r\n  div.appendChild(date);\r\n  div.appendChild(description);\r\n  const button1 = document.createElement(\"button\");\r\n  button1.style.position = \"absolute\";\r\n  button1.style.right = \"0\";\r\n  button1.style.top = \"40px\";\r\n  button1.innerHTML = \"Done!\";\r\n  button1.id = \"doneButton\";\r\n  button1.name = `${TDD.id}`;\r\n  button1.addEventListener(\"click\", function() {\r\n    done(div);\r\n  });\r\n  div.appendChild(button1);\r\n}\r\n\r\nfunction done(div) {\r\n  const taskId = parseInt(div.dataset.taskId, 10);\r\n  tasksArray = tasksArray.filter(task => task.id !== taskId);\r\n  localStorage.setItem(\"tasksList\", JSON.stringify(tasksArray));\r\n  document.getElementById(\"tasks\").removeChild(div);\r\n}\r\n\r\nfunction submit() {\r\n  const title = document.getElementById(\"TDTitle\").value;\r\n  const date = document.getElementById(\"TDDate\").value;\r\n  const description = document.getElementById(\"TDDescription\").value;\r\n  console.log(title + \" \" + date + \" \" + description);\r\n  const TDD = { title, date, description };\r\n  createTask(TDD);\r\n  tasksArray.push(TDD);\r\n  localStorage.setItem(\"tasksList\", JSON.stringify(tasksArray));\r\n  togglePopup();\r\n}\r\n\r\nfunction togglePopup() {\r\n  const popup = document.getElementById(\"myPopup\");\r\n  popup.classList.toggle(\"show\");\r\n}\r\n\n\n//# sourceURL=webpack:///./src/pages/todo.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/todo.js");
/******/ 	
/******/ })()
;