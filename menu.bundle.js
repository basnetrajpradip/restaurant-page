/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["menu"],{

/***/ "./src/assets/images sync (image\\d+\\.(png%7Cjpe?g%7Csvg%7Cgif))$":
/*!*************************************************************************************!*\
  !*** ./src/assets/images/ sync nonrecursive (image\d+\.(png%7Cjpe?g%7Csvg%7Cgif))$ ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./image1.jpg\": \"./src/assets/images/image1.jpg\",\n\t\"./image2.jpg\": \"./src/assets/images/image2.jpg\",\n\t\"./image3.jpg\": \"./src/assets/images/image3.jpg\",\n\t\"./image4.jpg\": \"./src/assets/images/image4.jpg\",\n\t\"./image5.jpg\": \"./src/assets/images/image5.jpg\",\n\t\"./image6.jpg\": \"./src/assets/images/image6.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets/images sync (image\\\\d+\\\\.(png%7Cjpe?g%7Csvg%7Cgif))$\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/_sync_nonrecursive_(image\\d+\\.(png%257Cjpe?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction createMenu() {\n  const menuWrapper = document.createElement(\"div\");\n  const menuHero = document.createElement(\"div\");\n  const menuContent = document.createElement(\"div\");\n  const cardContainer = document.createElement(\"div\");\n  const cards = [];\n\n  menuContent.classList.add(\"menu-content\");\n  cardContainer.classList.add(\"card-container\");\n  menuWrapper.classList.add(\"menu-wrapper\");\n  menuHero.classList.add(\"menu-hero\");\n\n  const imageContext = __webpack_require__(\"./src/assets/images sync (image\\\\d+\\\\.(png%7Cjpe?g%7Csvg%7Cgif))$\");\n  const imageFileNames = imageContext.keys();\n\n  for (let i = 0; i < imageFileNames.length; i++) {\n    const img = document.createElement(\"img\");\n    img.src = imageContext(imageFileNames[i]);\n\n    cards[i] = document.createElement(\"div\");\n    cards[i].appendChild(img);\n    cards[i].classList.add(\"card\");\n    cardContainer.appendChild(cards[i]);\n  }\n\n  menuContent.appendChild(cardContainer);\n\n  menuHero.textContent = \"Our Menu\";\n\n  menuWrapper.appendChild(menuHero);\n  menuWrapper.appendChild(menuContent);\n\n  return menuWrapper;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/assets/images/image1.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/image1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/image1.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/image1.jpg?");

/***/ }),

/***/ "./src/assets/images/image2.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/image2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/image2.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/image2.jpg?");

/***/ }),

/***/ "./src/assets/images/image3.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/image3.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/image3.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/image3.jpg?");

/***/ }),

/***/ "./src/assets/images/image4.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/image4.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/image4.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/image4.jpg?");

/***/ }),

/***/ "./src/assets/images/image5.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/image5.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/image5.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/image5.jpg?");

/***/ }),

/***/ "./src/assets/images/image6.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/image6.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/image6.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/image6.jpg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);