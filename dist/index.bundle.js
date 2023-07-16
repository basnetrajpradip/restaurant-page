/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/mainFont.ttf */ \"./src/assets/fonts/mainFont.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/bodyFont.ttf */ \"./src/assets/fonts/bodyFont.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: mainFont;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n@font-face {\n  font-family: bodyFont;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\n:root {\n  --primary: #af664b;\n  --secondary: #e5ddc2;\n  --accent: #685a2c;\n  --background: #ffffff;\n  --text: #190b0e;\n  --border: #000000;\n}\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--background);\n  font-size: 16px;\n  font-family: bodyFont;\n  height: 100%;\n}\n\n.container {\n  display: grid;\n  min-height: 100vh;\n  grid-template-rows: auto 1fr auto;\n}\n\n.logo {\n  font-family: mainFont;\n  font-size: 3rem;\n  font-weight: bold;\n  color: var(--primary);\n}\n\nli {\n  list-style: none;\n  color: var(--text);\n}\n\nli:hover {\n  color: var(--primary);\n  cursor: pointer;\n}\n\n.header {\n  margin-top: 2rem;\n  grid-row: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 37rem;\n}\n.nav-bar > ul {\n  display: flex;\n  font-size: 1.3rem;\n  gap: 8rem;\n}\n\n.content {\n  grid-row: 2;\n  margin: 15rem;\n  margin-top: 6rem;\n}\n\n.home-content {\n  display: flex;\n  gap: 4rem;\n}\n\n.left-content {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n}\n\n.right-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.home-hero {\n  font-size: 3rem;\n  min-width: 4rem;\n}\n\n.footer {\n  color: var(--secondary);\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--text);\n}\n\n.git-icon {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n\n.footer svg {\n  grid-row: 3;\n  height: 2.5rem;\n  width: 2.5rem;\n  fill: var(--background);\n}\n\n.footer svg:hover {\n  fill: var(--primary);\n}\n\n.home-hero {\n  font-size: 3.5rem;\n  font-weight: 550;\n}\n\n.hero-info {\n  font-size: 1.9rem;\n}\n\n.highlight {\n  font-weight: bold;\n  font-size: 2.7rem;\n  color: var(--primary);\n}\n\n.home-buttons {\n  display: flex;\n  gap: 3rem;\n}\n\n.home-buttons > button {\n  height: 3.5rem;\n  width: 10rem;\n  border-radius: 10px;\n  font-size: 1.2rem;\n  font-family: bodyFont;\n}\n\n.menu-btn {\n  background-color: var(--primary);\n  border: var(--primary);\n  color: var(--background);\n}\n\n.contact-btn {\n  background-color: var(--secondary);\n  border: var(--secondary);\n}\n\n.right-content > img {\n  border: 2px solid var(--accent);\n  border-radius: 6px;\n  padding: 0.3rem;\n  width: 34rem;\n}\n\n.menu-content {\n  margin-top: 3.5rem;\n}\n\n.menu-hero {\n  font-family: bodyFont;\n  font-weight: bold;\n  color: var(--accent);\n  font-size: 3.5rem;\n  display: flex;\n  justify-content: center;\n}\n\n.card-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 10rem;\n}\n\n.card {\n  border: 3px solid var(--accent);\n  height: auto;\n  width: 25rem;\n  border-radius: 5px;\n  box-shadow: 3px 3px 8px var(--accent);\n}\n\n.card > img {\n  height: 100%;\n  width: 100%;\n}\n\n.contacts-wrapper {\n  display: flex;\n  justify-content: space-between;\n}\n\n.left-contacts {\n  color: #493f1e;\n  width: 100%;\n  padding: 5rem;\n  padding-top: 7.5rem;\n  padding-bottom: 10.8rem;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n  background-color: var(--secondary);\n}\n\n.right-contacts {\n  color: var(--secondary);\n  padding: 5rem;\n  padding-top: 7rem;\n  padding-bottom: 10rem;\n  background-color: var(--primary);\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.location {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n}\n\n.follow {\n  display: flex;\n  flex-direction: column;\n  gap: 1.53rem;\n}\n\n.location-hero,\n.contacts-hero,\n.follow-hero {\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.location-info,\n.policy {\n  font-size: 1.23rem;\n}\n\n.follow-svg {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.follow-svg svg {\n  height: 3rem;\n  fill: #493f1e;\n}\n\n.follow-svg svg:hover {\n  fill: var(--primary);\n}\n\n.contacts-form {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  gap: 1rem;\n}\n\n.contacts-form input {\n  height: 3rem;\n  font-family: bodyFont;\n  padding: 0.2rem;\n  font-size: 1rem;\n}\n\ntextarea {\n  resize: none;\n  font-family: bodyFont;\n  padding: 0.2rem;\n  font-size: 1rem;\n}\n\n.submit-btn > button {\n  border: 4px solid var(--secondary);\n  background-color: #af664b;\n  height: 3.5rem;\n  width: 10rem;\n  font-size: 1.2rem;\n  color: var(--secondary);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/images sync (image\\d+\\.(png%7Cjpe?g%7Csvg%7Cgif))$":
/*!*************************************************************************************!*\
  !*** ./src/assets/images/ sync nonrecursive (image\d+\.(png%7Cjpe?g%7Csvg%7Cgif))$ ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./image1.jpg\": \"./src/assets/images/image1.jpg\",\n\t\"./image2.jpg\": \"./src/assets/images/image2.jpg\",\n\t\"./image3.jpg\": \"./src/assets/images/image3.jpg\",\n\t\"./image4.jpg\": \"./src/assets/images/image4.jpg\",\n\t\"./image5.jpg\": \"./src/assets/images/image5.jpg\",\n\t\"./image6.jpg\": \"./src/assets/images/image6.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets/images sync (image\\\\d+\\\\.(png%7Cjpe?g%7Csvg%7Cgif))$\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/_sync_nonrecursive_(image\\d+\\.(png%257Cjpe?");

/***/ }),

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createContacts)\n/* harmony export */ });\nfunction createContacts() {\n  const contactsWrapper = document.createElement(\"div\");\n  const leftContacts = document.createElement(\"div\");\n  const location = document.createElement(\"div\");\n  const locationHero = document.createElement(\"div\");\n  const locationInfo = document.createElement(\"div\");\n  const follow = document.createElement(\"div\");\n  const followHero = document.createElement(\"div\");\n  const followSvg = document.createElement(\"div\");\n  const policy = document.createElement(\"div\");\n  const rightContacts = document.createElement(\"div\");\n  const contactsHero = document.createElement(\"div\");\n  const contactsForm = document.createElement(\"div\");\n  const submitBtn = document.createElement(\"div\");\n  const locationPara = document.createElement(\"p\");\n  const subBtn = document.createElement(\"button\");\n\n  contactsWrapper.classList.add(\"contacts-wrapper\");\n  leftContacts.classList.add(\"left-contacts\");\n  location.classList.add(\"location\");\n  locationHero.classList.add(\"location-hero\");\n  locationInfo.classList.add(\"location-info\");\n  follow.classList.add(\"follow\");\n  followHero.classList.add(\"follow-hero\");\n  followSvg.classList.add(\"follow-svg\");\n  policy.classList.add(\"policy\");\n  rightContacts.classList.add(\"right-contacts\");\n  contactsForm.classList.add(\"contacts-form\");\n  contactsHero.classList.add(\"contacts-hero\");\n  submitBtn.classList.add(\"submit-btn\");\n\n  locationHero.textContent = \"LOCATION\";\n  locationInfo.textContent = \"28 Gorkhey Street, 1032 Itahari\";\n  locationPara.textContent = \"NP 56705\";\n  followHero.textContent = \"FOLLOW US\";\n  policy.textContent = \"©2023 Privacy policy\";\n  contactsHero.textContent = \"CONTACTS FORM\";\n  subBtn.textContent = \"Submit\";\n\n  //svg elements\n\n  //for facebook\n  const fbSvg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\n  fbSvg.setAttribute(\"xmlns\", \"http://www.w3.org/2000/svg\");\n  fbSvg.setAttribute(\"viewBox\", \"0 0 24 24\");\n  const pathElementfb = document.createElementNS(\"http://www.w3.org/2000/svg\", \"path\");\n  pathElementfb.setAttribute(\n    \"d\",\n    \"M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z\"\n  );\n  fbSvg.appendChild(pathElementfb);\n\n  //for insta\n  const instaSvg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\n  instaSvg.setAttribute(\"xmlns\", \"https://www.w3.org/2000/svg\");\n  instaSvg.setAttribute(\"viewBox\", \"0 0 24 24\");\n  const pathElementInsta = document.createElementNS(\"http://www.w3.org/2000/svg\", \"path\");\n  pathElementInsta.setAttribute(\n    \"d\",\n    \"M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z\"\n  );\n\n  instaSvg.appendChild(pathElementInsta);\n\n  //for twitter\n  const twitSvg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\n  twitSvg.setAttribute(\"xmlns\", \"http://www.w3.org/2000/svg\");\n  twitSvg.setAttribute(\"viewBox\", \"0 0 24 24\");\n\n  const pathElementTwit = document.createElementNS(\"http://www.w3.org/2000/svg\", \"path\");\n  pathElementTwit.setAttribute(\n    \"d\",\n    \"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z\"\n  );\n  twitSvg.appendChild(pathElementTwit);\n\n  //for snapchat\n  const snapSvg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\n  snapSvg.setAttribute(\"xmlns\", \"http://www.w3.org/2000/svg\");\n  snapSvg.setAttribute(\"viewBox\", \"0 0 24 24\");\n\n  const pathElementSnap = document.createElementNS(\"http://www.w3.org/2000/svg\", \"path\");\n  pathElementSnap.setAttribute(\n    \"d\",\n    \"M21.93 16.56C21.79 16.18 21.5 16 21.22 15.81C21.17 15.78 21.11 15.75 21.07 15.73C21 15.68 20.89 15.64 20.8 15.59C19.86 15.09 19.12 14.46 18.61 13.72C18.47 13.5 18.35 13.29 18.24 13.06C18.2 12.93 18.2 12.86 18.23 12.8C18.26 12.75 18.3 12.7 18.35 12.67C18.5 12.56 18.68 12.46 18.79 12.38C19 12.25 19.15 12.15 19.25 12.08C19.64 11.81 19.91 11.5 20.08 11.2C20.32 10.75 20.35 10.22 20.16 9.75C19.91 9.08 19.27 8.66 18.5 8.66C18.34 8.66 18.18 8.68 18 8.71C18 8.72 17.94 8.73 17.9 8.74C17.9 8.28 17.89 7.8 17.85 7.32C17.71 5.64 17.12 4.76 16.5 4.06C16.11 3.62 15.65 3.24 15.14 2.95C14.21 2.42 13.15 2.15 12 2.15S9.8 2.42 8.87 2.95C8.35 3.24 7.89 3.62 7.5 4.06C6.88 4.76 6.3 5.64 6.15 7.32C6.11 7.8 6.1 8.28 6.11 8.74C6.06 8.73 6 8.72 6 8.71C5.82 8.68 5.66 8.66 5.5 8.66C4.73 8.66 4.09 9.08 3.84 9.75C3.65 10.22 3.68 10.75 3.92 11.2C4.09 11.5 4.36 11.81 4.75 12.08C4.85 12.15 5 12.25 5.21 12.39L5.63 12.66C5.69 12.7 5.73 12.75 5.77 12.8C5.8 12.87 5.8 12.94 5.75 13.07C5.65 13.3 5.53 13.5 5.39 13.72C4.89 14.45 4.18 15.07 3.27 15.56C2.78 15.82 2.28 16 2.07 16.56C1.91 17 2 17.5 2.42 17.91C2.57 18.06 2.74 18.19 2.93 18.29C3.33 18.5 3.75 18.68 4.18 18.79C4.27 18.82 4.36 18.85 4.43 18.91C4.58 19.03 4.56 19.23 4.76 19.5C4.86 19.66 5 19.79 5.13 19.89C5.54 20.18 6 20.19 6.5 20.21C6.94 20.23 7.44 20.25 8 20.44C8.26 20.5 8.5 20.67 8.79 20.85C9.5 21.27 10.42 21.85 12 21.85C13.57 21.85 14.5 21.27 15.22 20.84C15.5 20.67 15.75 20.5 16 20.44C16.55 20.25 17.06 20.23 17.5 20.21C18 20.2 18.46 20.18 18.87 19.89C19.04 19.77 19.18 19.61 19.29 19.43C19.43 19.19 19.43 19 19.56 18.91C19.63 18.86 19.71 18.82 19.8 18.8C20.24 18.68 20.66 18.5 21.06 18.29C21.27 18.18 21.45 18.04 21.6 17.87L21.61 17.87C22 17.46 22.08 17 21.93 16.56M20.53 17.31C19.67 17.78 19.1 17.73 18.66 18C18.5 18.12 18.45 18.28 18.42 18.44C18.41 18.5 18.4 18.58 18.39 18.64C18.37 18.78 18.34 18.9 18.24 18.97C17.9 19.2 16.91 18.95 15.63 19.37C14.57 19.72 13.9 20.73 12 20.73C10.1 20.73 9.45 19.73 8.37 19.37C7.1 18.95 6.1 19.2 5.77 18.97C5.5 18.78 5.72 18.26 5.34 18C4.9 17.73 4.33 17.78 3.5 17.31C3.19 17.15 3.14 17 3.18 16.93C3.22 16.84 3.34 16.77 3.42 16.73C5.07 15.94 6 14.91 6.47 14.1C6.91 13.38 7 12.83 7.03 12.75C7.06 12.54 7.09 12.38 6.86 12.17C6.64 11.96 5.66 11.36 5.39 11.17C4.93 10.85 4.74 10.54 4.88 10.15L4.88 10.15V10.15C5 9.88 5.23 9.78 5.5 9.78C5.58 9.78 5.66 9.79 5.74 9.81C6.24 9.91 6.72 10.16 7 10.23C7.03 10.24 7.06 10.24 7.1 10.24C7.19 10.24 7.24 10.21 7.27 10.15C7.28 10.11 7.29 10.06 7.29 10C7.25 9.46 7.18 8.41 7.26 7.42C7.3 7 7.37 6.64 7.46 6.33C7.66 5.65 8 5.2 8.34 4.79C8.59 4.5 9.75 3.27 12 3.27C13.85 3.27 14.96 4.11 15.44 4.56C15.54 4.66 15.62 4.74 15.66 4.79C16.04 5.23 16.38 5.71 16.58 6.47C16.65 6.74 16.71 7.06 16.74 7.42C16.82 8.4 16.75 9.46 16.71 10C16.71 10.04 16.71 10.08 16.72 10.11C16.73 10.2 16.79 10.24 16.9 10.24C16.94 10.24 16.97 10.24 17 10.23C17.28 10.16 17.76 9.91 18.26 9.8C18.34 9.79 18.42 9.78 18.5 9.78C18.75 9.78 19 9.87 19.1 10.1L19.11 10.14L19.12 10.14L19.12 10.15C19.27 10.53 19.07 10.85 18.62 11.16C18.35 11.35 17.36 11.96 17.14 12.16C16.91 12.38 16.94 12.54 16.97 12.75C17 12.85 17.18 13.8 18.08 14.86C18.63 15.5 19.42 16.17 20.58 16.73C20.65 16.76 20.74 16.81 20.79 16.87C20.82 16.92 20.84 16.96 20.83 17C20.82 17.1 20.73 17.2 20.53 17.31Z\"\n  );\n  snapSvg.appendChild(pathElementSnap);\n\n  //input fields\n\n  //create input elements\n  const nameInput = document.createElement(\"input\");\n  nameInput.setAttribute(\"type\", \"text\");\n  nameInput.setAttribute(\"placeholder\", \"Enter your Name\");\n\n  const emailInput = document.createElement(\"input\");\n  emailInput.setAttribute(\"type\", \"email\");\n  emailInput.setAttribute(\"placeholder\", \"Enter a valid Email address\");\n\n  // Create the textarea element\n  const messageTextarea = document.createElement(\"textarea\");\n  messageTextarea.setAttribute(\"rows\", \"6\");\n  messageTextarea.setAttribute(\"cols\", \"50\");\n  messageTextarea.setAttribute(\"placeholder\", \"Enter your message\");\n\n  followSvg.appendChild(fbSvg);\n  followSvg.appendChild(instaSvg);\n  followSvg.appendChild(twitSvg);\n  followSvg.appendChild(snapSvg);\n\n  follow.appendChild(followHero);\n  follow.appendChild(followSvg);\n  follow.appendChild(policy);\n\n  location.appendChild(locationHero);\n  locationInfo.appendChild(locationPara);\n  location.appendChild(locationInfo);\n\n  leftContacts.appendChild(location);\n  leftContacts.appendChild(follow);\n\n  contactsForm.appendChild(nameInput);\n  contactsForm.appendChild(emailInput);\n  contactsForm.appendChild(messageTextarea);\n\n  rightContacts.appendChild(contactsHero);\n  rightContacts.appendChild(contactsForm);\n  submitBtn.appendChild(subBtn);\n  rightContacts.appendChild(submitBtn);\n\n  contactsWrapper.appendChild(leftContacts);\n  contactsWrapper.appendChild(rightContacts);\n\n  return contactsWrapper;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/contacts.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHome)\n/* harmony export */ });\n/* harmony import */ var _assets_images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/restaurant.jpg */ \"./src/assets/images/restaurant.jpg\");\n\n\nfunction createHome() {\n  const homeContent = document.createElement(\"div\");\n  const leftContent = document.createElement(\"div\");\n  const homeHero = document.createElement(\"div\");\n  const heroInfo = document.createElement(\"div\");\n  const homeButtons = document.createElement(\"div\");\n  const rightContent = document.createElement(\"div\");\n\n  const highlightSpan = document.createElement(\"span\");\n  const lineBreaker1 = document.createElement(\"br\");\n  const lineBreaker2 = document.createElement(\"br\");\n\n  const menuBtn = document.createElement(\"button\");\n  const contactBtn = document.createElement(\"button\");\n\n  homeContent.classList.add(\"home-content\");\n  leftContent.classList.add(\"left-content\");\n  homeHero.classList.add(\"home-hero\");\n  heroInfo.classList.add(\"hero-info\");\n  homeButtons.classList.add(\"home-buttons\");\n  rightContent.classList.add(\"right-content\");\n  menuBtn.classList.add(\"menu-btn\");\n  contactBtn.classList.add(\"contact-btn\");\n  highlightSpan.classList.add(\"highlight\");\n\n  const myRestImage = new Image();\n  myRestImage.src = _assets_images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  myRestImage.alt = \"Restaurant Image\";\n\n  homeHero.textContent = \"Have the best\";\n  highlightSpan.textContent = \" Dinner \";\n  const textNode1 = document.createTextNode(\"Experience with your loved ones.\");\n\n  homeHero.appendChild(highlightSpan);\n  homeHero.appendChild(lineBreaker1);\n  homeHero.appendChild(textNode1);\n\n  heroInfo.textContent = \"Looking for a place to celebrate the day?\";\n  heroInfo.appendChild(lineBreaker2);\n  const textNode2 = document.createTextNode(\"You've come to the right place.\");\n  heroInfo.appendChild(textNode2);\n\n  menuBtn.textContent = \"See Menu\";\n  contactBtn.textContent = \"Contact Us\";\n\n  homeButtons.appendChild(menuBtn);\n  homeButtons.appendChild(contactBtn);\n\n  leftContent.appendChild(homeHero);\n  leftContent.appendChild(heroInfo);\n  leftContent.appendChild(homeButtons);\n  rightContent.appendChild(myRestImage);\n\n  homeContent.appendChild(leftContent);\n  homeContent.appendChild(rightContent);\n\n  return homeContent;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contacts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts.js */ \"./src/contacts.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nconst content = document.querySelector(\".content\");\n\ncontent.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\nconst menu = document.querySelector(\".menu\");\nconst home = document.querySelector(\".home\");\nconst contacts = document.querySelector(\".contacts\");\nlet menuBtn = document.querySelector(\".menu-btn\");\nlet contactBtn = document.querySelector(\".contact-btn\");\n\nfunction changeTitle(title) {\n  document.title = title;\n}\n\nfunction removeAllChildNodes(parent) {\n  while (parent.firstChild) {\n    parent.removeChild(parent.firstChild);\n  }\n}\n\nfunction renderMenu(event) {\n  removeAllChildNodes(content);\n  content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n  changeTitle(\"The Restaurant | Menu\");\n}\n\nfunction renderHome(event) {\n  removeAllChildNodes(content);\n  content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n  changeTitle(\"The Restaurant | Home\");\n  contactBtn = document.querySelector(\".contact-btn\");\n  menuBtn = document.querySelector(\".menu-btn\");\n  contactBtn.addEventListener(\"click\", renderContacts);\n  menuBtn.addEventListener(\"click\", renderMenu);\n}\n\nfunction renderContacts(event) {\n  removeAllChildNodes(content);\n  content.appendChild((0,_contacts_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  changeTitle(\"The Restaurant | Contacts\");\n}\n\nmenu.addEventListener(\"click\", renderMenu);\nhome.addEventListener(\"click\", renderHome);\ncontacts.addEventListener(\"click\", renderContacts);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction createMenu() {\n  const menuWrapper = document.createElement(\"div\");\n  const menuHero = document.createElement(\"div\");\n  const menuContent = document.createElement(\"div\");\n  const cardContainer = document.createElement(\"div\");\n  const cards = [];\n\n  menuContent.classList.add(\"menu-content\");\n  cardContainer.classList.add(\"card-container\");\n  menuWrapper.classList.add(\"menu-wrapper\");\n  menuHero.classList.add(\"menu-hero\");\n\n  const imageContext = __webpack_require__(\"./src/assets/images sync (image\\\\d+\\\\.(png%7Cjpe?g%7Csvg%7Cgif))$\");\n  const imageFileNames = imageContext.keys();\n\n  for (let i = 0; i < imageFileNames.length; i++) {\n    const img = document.createElement(\"img\");\n    img.src = imageContext(imageFileNames[i]);\n\n    cards[i] = document.createElement(\"div\");\n    cards[i].appendChild(img);\n    cards[i].classList.add(\"card\");\n    cardContainer.appendChild(cards[i]);\n  }\n\n  menuContent.appendChild(cardContainer);\n\n  menuHero.textContent = \"Our Menu\";\n\n  menuWrapper.appendChild(menuHero);\n  menuWrapper.appendChild(menuContent);\n\n  return menuWrapper;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/assets/fonts/bodyFont.ttf":
/*!***************************************!*\
  !*** ./src/assets/fonts/bodyFont.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/fonts/bodyFont.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/fonts/bodyFont.ttf?");

/***/ }),

/***/ "./src/assets/fonts/mainFont.ttf":
/*!***************************************!*\
  !*** ./src/assets/fonts/mainFont.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/fonts/mainFont.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/fonts/mainFont.ttf?");

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

/***/ }),

/***/ "./src/assets/images/restaurant.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/restaurant.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/restaurant.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/restaurant.jpg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);