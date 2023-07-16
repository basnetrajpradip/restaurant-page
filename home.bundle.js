"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHome)\n/* harmony export */ });\n/* harmony import */ var _assets_images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/restaurant.jpg */ \"./src/assets/images/restaurant.jpg\");\n\n\nfunction createHome() {\n  const homeContent = document.createElement(\"div\");\n  const leftContent = document.createElement(\"div\");\n  const homeHero = document.createElement(\"div\");\n  const heroInfo = document.createElement(\"div\");\n  const homeButtons = document.createElement(\"div\");\n  const rightContent = document.createElement(\"div\");\n\n  const highlightSpan = document.createElement(\"span\");\n  const lineBreaker1 = document.createElement(\"br\");\n  const lineBreaker2 = document.createElement(\"br\");\n\n  const menuBtn = document.createElement(\"button\");\n  const contactBtn = document.createElement(\"button\");\n\n  homeContent.classList.add(\"home-content\");\n  leftContent.classList.add(\"left-content\");\n  homeHero.classList.add(\"home-hero\");\n  heroInfo.classList.add(\"hero-info\");\n  homeButtons.classList.add(\"home-buttons\");\n  rightContent.classList.add(\"right-content\");\n  menuBtn.classList.add(\"menu-btn\");\n  contactBtn.classList.add(\"contact-btn\");\n  highlightSpan.classList.add(\"highlight\");\n\n  const myRestImage = new Image();\n  myRestImage.src = _assets_images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  myRestImage.alt = \"Restaurant Image\";\n\n  homeHero.textContent = \"Have the best\";\n  highlightSpan.textContent = \" Dinner \";\n  const textNode1 = document.createTextNode(\"Experience with your loved ones.\");\n\n  homeHero.appendChild(highlightSpan);\n  homeHero.appendChild(lineBreaker1);\n  homeHero.appendChild(textNode1);\n\n  heroInfo.textContent = \"Looking for a place to celebrate the day?\";\n  heroInfo.appendChild(lineBreaker2);\n  const textNode2 = document.createTextNode(\"You've come to the right place.\");\n  heroInfo.appendChild(textNode2);\n\n  menuBtn.textContent = \"See Menu\";\n  contactBtn.textContent = \"Contact Us\";\n\n  homeButtons.appendChild(menuBtn);\n  homeButtons.appendChild(contactBtn);\n\n  leftContent.appendChild(homeHero);\n  leftContent.appendChild(heroInfo);\n  leftContent.appendChild(homeButtons);\n  rightContent.appendChild(myRestImage);\n\n  homeContent.appendChild(leftContent);\n  homeContent.appendChild(rightContent);\n\n  return homeContent;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/assets/images/restaurant.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/restaurant.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/restaurant.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/restaurant.jpg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);