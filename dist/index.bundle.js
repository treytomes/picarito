/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./ibm_vga8.woff2 */ "./src/ibm_vga8.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n\tfont-family: 'OEM437';\r\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n\tfont-weight: 600;\r\n\tfont-style: normal;\r\n}\r\n\r\nhtml, body {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tmargin: 0;\r\n}\r\n\r\n\r\n  canvas {\r\n\tdisplay: block;  /* prevents scrollbar */\r\n\twidth: 100%;\r\n\theight: 100%;\r\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,qBAAqB;CACrB,4CAA4B;CAC5B,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,SAAS;AACV;;;EAGE;CACD,cAAc,GAAG,uBAAuB;CACxC,WAAW;CACX,YAAY;EACX","sourcesContent":["@font-face {\r\n\tfont-family: 'OEM437';\r\n\tsrc: url('./ibm_vga8.woff2');\r\n\tfont-weight: 600;\r\n\tfont-style: normal;\r\n}\r\n\r\nhtml, body {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tmargin: 0;\r\n}\r\n\r\n\r\n  canvas {\r\n\tdisplay: block;  /* prevents scrollbar */\r\n\twidth: 100%;\r\n\theight: 100%;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Point.js":
/*!**********************!*\
  !*** ./src/Point.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Point)
/* harmony export */ });
class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}


/***/ }),

/***/ "./src/Rectangle.js":
/*!**************************!*\
  !*** ./src/Rectangle.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Rectangle)
/* harmony export */ });
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point.js */ "./src/Point.js");


class Rectangle extends _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor(x, y, width, height) {
		super(x, y);
		this.width = width;
		this.height = height;
	}

	get left () {
		return this.x;
	}

	get right() {
		return this.x + this.width - 1;
	}

	get center() {
		return (this.left + this.right) / 2;
	}

	get top() {
		return this.y;
	}

	get bottom() {
		return this.y + this.height - 1;
	}

	get middle() {
		return (this.top + this.bottom) / 2;
	}

	contains(x, y) {
		return (this.x <= x) && (x < this.x + this.width) && (this.y <= y) && (y < this.y + this.height);
	}

	/**
	 * Create a new rectangle representing the intersection of this rectangle with another.
	 * @param {Rectangle} other
	 * @returns {Rectangle} A new rectangle representing the intersection, or null if they don't intersect.
	 */
	intersect(other) {
		const left = Math.max(this.left, other.left);
		const right = Math.min(this.right, other.right);
		const top = Math.max(this.top, other.top);
		const bottom = Math.min(this.bottom, other.bottom);
		const width = right - left + 1;
		const height = bottom - top + 1;
		if ((left > right) || (top > bottom)) {
			return null;
		}
		return new Rectangle(left, top, width, height); 
	}
}


/***/ }),

/***/ "./src/OEM437_8.png":
/*!**************************!*\
  !*** ./src/OEM437_8.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "837ced4e4865933d2f8f.png";

/***/ }),

/***/ "./src/ibm_vga8.woff2":
/*!****************************!*\
  !*** ./src/ibm_vga8.woff2 ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0304e53d71e8d0cc5bec.woff2";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
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
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Rectangle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rectangle.js */ "./src/Rectangle.js");
/* harmony import */ var _OEM437_8_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OEM437_8.png */ "./src/OEM437_8.png");


// TODO: https://webpack.js.org/guides/output-management/

// https://codepen.io/treytomes/pen/Exowzmx





class Binding extends EventTarget {
	constructor(source, propertyName) {
		super();
		this.source = source;
		this.propertyName = propertyName;
	}

	get value() {
		return this.source[this.propertyName];
	}

	set value(newValue) {
		const oldValue = this.value;
		if (oldValue != newValue) {
			this.source[this.propertyName] = newValue;
			this.dispatchEvent(new CustomEvent('change', { detail: {
				oldValue: oldValue,
				newValue: newValue
			} }));
		}
	}
}

/**
 * Draws a rounded rectangle using the current state of the canvas. 
 * If you omit the last three params, it will draw a rectangle 
 * outline with a 5 pixel border radius .
 * 
 * Source: https://js-bits.blogspot.com/2010/07/canvas-rounded-corner-rectangles.html
 * 
 * @param {CanvasRenderingContext2D} context
 * @param {Number} x The top left x coordinate
 * @param {Number} y The top left y coordinate 
 * @param {Number} width The width of the rectangle 
 * @param {Number} height The height of the rectangle
 * @param {Number|Number[]} radius The corner radius. Defaults to 5.
 * @param {Boolean} fill Whether to fill the rectangle. Defaults to false.
 * @param {Boolean} stroke Whether to stroke the rectangle. Defaults to true.
 */
function roundRect(context, x, y, width, height, radius, fill, stroke) {
	if (typeof stroke == "undefined" ) {
		stroke = true;
	}

	let radiusTL = 5;
	let radiusTR = 5;
	let radiusBL = 5;
	let radiusBR = 5;

	if (typeof radius === "object") {
		// Assume it's an array.
		// This is based on: https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
		switch (radius.length) {
		case 1:
			radiusTL = radius[0];
			radiusTR = radius[0];
			radiusBL = radius[0];
			radiusBR = radius[0];
			break;
		case 2:
			radiusTL = radius[0];
			radiusBR = radius[0];
			radiusTR = radius[1];
			radiusBL = radius[1];
			break;
		case 3:
			radiusTL = radius[0];
			radiusTR = radius[1];
			radiusBL = radius[1];
			radiusBR = radius[2];
		case 4:
			radiusTL = radius[0];
			radiusTR = radius[1];
			radiusBL = radius[2];
			radiusBR = radius[3];
			break;
		default:
			throw 'Corner radius must be either a number, or an array of 1 or 4 numbers.';
		}
	} else if (typeof radius === "number") {
		radiusTL = radius;
		radiusTR = radius;
		radiusBL = radius;
		radiusBR = radius;
	}

	context.beginPath();
	context.moveTo(x + radiusTL, y);
	context.lineTo(x + width - radiusTR, y);
	context.quadraticCurveTo(x + width, y, x + width, y + radiusTR);
	context.lineTo(x + width, y + height - radiusBR);
	context.quadraticCurveTo(x + width, y + height, x + width - radiusBR, y + height);
	context.lineTo(x + radiusBL, y + height);
	context.quadraticCurveTo(x, y + height, x, y + height - radiusBL);
	context.lineTo(x, y + radiusTL);
	context.quadraticCurveTo(x, y, x + radiusTL, y);
	context.closePath();
	if (stroke) {
		context.stroke();
	}
	if (fill) {
		context.fill();
	}        
}

/**
 * @static @property {UIElement} root;
 * @property {UIElement} parent; 
 * @property {Rectangle} bounds;
 */
class UIElement extends EventTarget {
	static root = null;
	static mouseFocus = null;
	static clippingStack = [];

	/**
	 * 
	 * @param {UIElement} parent 
	 * @param {Rectangle} bounds 
	 */
	constructor(parent, bounds) {
		super();

		this.parent = parent;
		this.bounds = bounds;
		this.needsRender = true;
		this.contentLoaded = false;
		this.hasMouseHover = false;
		//this._dataContext = null;

		this.children = [];
	}

	/*
	get dataContext() {
		if (this._dataContext != null) {
			return this._dataContext;
		} else if (this.parent != null) {
			return this.parent.dataContext;
		} else {
			return null;
		}
	}

	set dataContext(value) {
		this._dataContext = value;
	}
	*/

	get globalX() {
		if (this.parent != null) {
			return this.parent.globalX + this.bounds.x;
		} else {
			return this.bounds.x;
		}
	}

	get globalY() {
		if (this.parent != null) {
			return this.parent.globalY + this.bounds.y;
		} else {
			return this.bounds.y;
		}
	}

	get globalBounds() {
		return new _Rectangle_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.globalX, this.globalY, this.bounds.width, this.bounds.height);
	}

	hasMouseFocus() {
		return UIElement.mouseFocus == this;
	}

	acquireMouseFocus() {
		if (!this.hasMouseFocus()) {
			UIElement.mouseFocus = this;
			return true;
		}
		return false;
	}

	loseMouseFocus() {
		if (this.hasMouseFocus()) {
			UIElement.mouseFocus = null;
			return true;
		}
		return false;
	}

	onMouseDown(x, y, buttons) {
		if (!this.hasMouseFocus() && !this.hasMouseHover) {
			return false;
		}

		for (let n = this.children.length - 1; n >= 0; n--) {
			const child = this.children[n];
			if (child.onMouseDown(x, y, buttons)) {
				return true;
			}
		}

		let detail = {
			x: x,
			y: y,
			buttons: buttons,
			handled: false
		};
		this.dispatchEvent(new CustomEvent('mouseDown', { detail: detail }));

		this.mouseDrag = {
			startX: x,
			startY: y,
			endX: null,
			endY: null,
			buttons: buttons
		};
		return detail.handled;
	}

	onMouseUp(x, y, buttons) {
		if (!this.hasMouseFocus() && !this.hasMouseHover) {
			return false;
		}

		for (let n = this.children.length - 1; n >= 0; n--) {
			const child = this.children[n];
			if (child.onMouseUp(x, y, buttons)) {
				return true;
			}
		}

		if (this.mouseDrag != null) {
			if ((x == null) || (y == null)) {
				x = this.mouseDrag.endX;
				y = this.mouseDrag.endY;
			}
			if (buttons == 0) {
				buttons = this.mouseDrag.buttons;
			}
		}
		
		let detail = {
			x: x,
			y: y,
			buttons: buttons,
			handled: false
		};
		this.dispatchEvent(new CustomEvent('mouseUp', { detail: detail }));

		this.mouseDrag = null;
		return detail.handled;
	}

	onMouseMove(x, y, buttons) {
		if (!this.hasMouseFocus()) {
			if (!this.globalBounds.contains(x, y)) {
				if (this.hasMouseHover) {
					this.onLoseMouseHover();
				}
				return false;
			}
		}

		if (!this.hasMouseHover) {
			this.onAcquireMouseHover();
		}

		for (let n = this.children.length - 1; n >= 0; n--) {
			const child = this.children[n];
			if (child.onMouseMove(x, y, buttons)) {
				return true;
			}
		}

		if (this.mouseDrag != null) {
			this.onMouseDrag(x, y, buttons);
		} else {
			this.dispatchEvent(new CustomEvent('mouseMove', {
				detail: {
					x: x,
					y: y,
					buttons: buttons
				 }
			}));
		}
		return false;
	}

	onMouseDrag(x, y, buttons) {
		if (!this.bounds.contains(x, y) && !this.hasMouseFocus()) {
			if (this.hasMouseHover) {
				this.onLoseMouseHover();
			}
			return false;
		}

		this.mouseDrag.endX = x;
		this.mouseDrag.endY = y;
		
		let detail = {
			x: x,
			y: y,
			buttons: buttons,
			drag: this.mouseDrag
		};
		this.dispatchEvent(new CustomEvent('mouseDrag', { detail: detail }));
		return detail.handled;
	}

	/**
	 * @param {CanvasRenderingContext2D} context 
	 */
	loadContent(context) {
	}

	/**
	 * @param {CanvasRenderingContext2D} context 
	 */
	onRender(context) {
		if (!this.contentLoaded) {
			this.loadContent(context);
			this.contentLoaded = true;
		}

		let clippingRect = this.globalBounds;
		let previousClippingRect = UIElement.root.bounds;
		if (UIElement.clippingStack.length > 0) {
			let previousClippingRect = UIElement.clippingStack[UIElement.clippingStack.length - 1];
			clippingRect = clippingRect.intersect(previousClippingRect);
		}
		if (clippingRect == null) {
			return;
		}
		UIElement.clippingStack.push(clippingRect);

		context.save();
		context.clip(context.rect(clippingRect.x, clippingRect.y, clippingRect.width, clippingRect.height));
		context.translate(this.bounds.x, this.bounds.y);

		for (let n = 0; n < this.children.length; n++) {
			const child = this.children[n];
			child.onRender(context);
		}

		//if (!this.needsRender) {
		//	return;
		//}

		this.dispatchEvent(new CustomEvent('render', {
			detail: {
				context: context
		 	}
		}));

		context.restore();
		UIElement.clippingStack.pop();
		this.needsRender = false;
	}

	onAcquireMouseHover() {
		this.hasMouseHover = true;
		this.dispatchEvent(new Event('acquireMouseHover'));
	}

	onLoseMouseHover() {
		this.hasMouseHover = false;
		this.dispatchEvent(new Event('loseMouseHover'));
	}

	triggerRender() {
		if (UIElement.root.isRendering) {
			return;
		}
		
		this.needsRender = true;
		UIElement.root.render();
	}
}

class BorderElement extends UIElement {
	constructor(parent, bounds) {
		super(parent, bounds);
		this.lineWidth = 3;
		this.fillStyle = 'white';
		this.strokeStyle = 'black';
		this.cornerRadius = 0;

		this.addEventListener('render', e => this.renderEventHandler(e.detail.context));
	}

	/**
	 * @param {CanvasRenderingContext2D} context 
	 */
	renderEventHandler(context) {
		context.lineWidth = this.lineWidth;
		context.fillStyle = this.fillStyle;
		context.strokeStyle = this.strokeStyle;

		const shouldFill = this.fillStyle != null;
		const shouldStroke = this.strokeStyle != null;

		if (this.cornerRadius != 0) {
			roundRect(context, this.lineWidth, this.lineWidth, this.bounds.width - this.lineWidth * 2, this.bounds.height - this.lineWidth * 2, this.cornerRadius, shouldFill, shouldStroke);
		} else {
			if (shouldFill) {
				context.fillRect(this.lineWidth, this.lineWidth, this.bounds.width - this.lineWidth * 2, this.bounds.height - this.lineWidth * 2);
			}
			if (shouldStroke) {
				context.strokeRect(this.lineWidth, this.lineWidth, this.bounds.width - this.lineWidth * 2, this.bounds.height - this.lineWidth * 2);
			}
		}
	}
}

class LabelElement extends UIElement {
	/**
	 * @param {UIElement} parent 
	 * @param {Rectangle} bounds 
	 * @param {string} text
	 */
	constructor(parent, bounds, text) {
		super(parent, bounds);
		this.font = '16px Calibri';
		this.fillStyle = 'black';
		this.horizontalAlignment = 'center'; // left, center, right
		this.verticalAlignment = 'middle'; // top, middle, bottom
		this.text = text;

		if (this.text instanceof Binding) {
			this.text.addEventListener('change', e => this.triggerRender());
		}

		//this.textWidth = null;
		//this.textHeight = null;
		//this.needsRemeasure = true;

		this.addEventListener('render', e => this.renderEventHandler(e.detail.context));
	}

	/**
	 * @param {CanvasRenderingContext2D} context 
	 */
	renderEventHandler(context) {
		context.font = this.font;

		//if (this.needsRemeasure) {
		//	context.textBaseline = 'top';
		//	const textMetrics = context.measureText(this.text);
		//	this.textWidth = textMetrics.width;
		//	this.textHeight = textMetrics.fontBoundingBoxDescent;
		//	console.log(this.textWidth, this.textHeight);
		//	this.needsRemeasure = false;
		//}

		let y = 0;
		if (this.verticalAlignment == 'middle') {
			y = this.bounds.height / 2;
		} else if (this.verticalAlignment == 'bottom') {
			y = this.bounds.height;
		}

		let x = 0;
		if (this.horizontalAlignment == 'center') {
			x = this.bounds.width / 2;
		} else if (this.horizontalAlignment == 'right') {
			x = this.bounds.width;
		}

		context.fillStyle = this.fillStyle;
		context.textAlign = this.horizontalAlignment;
		context.textBaseline = this.verticalAlignment;

		const text = (this.text instanceof Binding) ? this.text.value : this.text;
		context.fillText(text, x, y, this.bounds.width);
	}
}

class HeaderedContentControl extends UIElement {
	constructor(parent, bounds) {
		super(parent, bounds);
		
		this.headingBorder = new BorderElement(this, new _Rectangle_js__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0, bounds.width, 32));
		this.headingLabel = new LabelElement()
		this.contentBorder = null;
	}
}

class ButtonElement extends UIElement {
	constructor(parent, bounds) {
		super(parent, bounds);

		this.cornerRadius = 2;

		this.addEventListener('acquireMouseHover', () => this.acquireMouseHoverEventHandler());
		this.addEventListener('loseMouseHover', () => this.loseMouseHoverEventHandler());
		this.addEventListener('mouseDown', e => this.mouseDownEventHandler(e));
		this.addEventListener('mouseUp', e => this.mouseUpEventHandler(e));

		this.border = new BorderElement(this, new _Rectangle_js__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0, bounds.width, bounds.height));
		this.label = new LabelElement(this, new _Rectangle_js__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0, bounds.width, bounds.height), "Label");

		this.children = [
			this.border,
			this.label
		];

		this.isEnabled = true;
	}

	/**
	 * @param {CanvasRenderingContext2D} context 
	 */
	loadContent(context) {
		super.loadContent(context);

		this.foregroundBrush = '#000';

		this.normalBrush = context.createLinearGradient(0, 0, 0, this.bounds.height);
		this.normalBrush.addColorStop(0, '#fff');
		this.normalBrush.addColorStop(1, '#ccc');

		this.normalBorderBrush = context.createLinearGradient(0, 0, 0, this.bounds.height);
		this.normalBorderBrush.addColorStop(0, '#ccc');
		this.normalBorderBrush.addColorStop(1, '#444');

		this.darkBrush = context.createLinearGradient(0, 0, 0, this.bounds.height);
		this.darkBrush.addColorStop(0, '#fff');
		this.darkBrush.addColorStop(1, '#aaa');

		this.pressedBrush = context.createLinearGradient(0, 0, 0, this.bounds.height);
		this.pressedBrush.addColorStop(0, '#bbb');
		this.pressedBrush.addColorStop(0.1, '#eee');
		this.pressedBrush.addColorStop(0.9, '#eee');
		this.pressedBrush.addColorStop(1, '#fff');

		this.pressedBorderBrush = context.createLinearGradient(0, 0, 0, this.bounds.height);
		this.pressedBorderBrush.addColorStop(0, '#444');
		this.pressedBorderBrush.addColorStop(1, '#888');

		// keyboard focus or defaulted
		this.defaultedBorderBrush = context.createLinearGradient(0, 0, 0, this.bounds.height);
		this.defaultedBorderBrush.addColorStop(0, '#777');
		this.defaultedBorderBrush.addColorStop(1, '#000');

		this.disabledForegroundBrush = '#888';
		this.disabledBackgroundBrush = '#eee';
		this.disabledBorderBrush = '#aaa';

		this.border.lineWidth = 1;

		//this.disable();
		this.enable();
	}

	enable() {
		this.isEnabled = true;
		this.border.fillStyle = this.normalBrush;
		this.border.strokeStyle = this.normalBorderBrush;
		this.label.fillStyle = this.foregroundBrush;
		this.triggerRender();
	}

	disable() {
		this.isEnabled = false;
		this.fillStyle = this.disabledBackgroundBrush;
		this.strokeStyle = this.disabledBorderBrush;
		this.label.fillStyle = this.disabledForegroundBrush;
		this.triggerRender();
	}

	acquireMouseHoverEventHandler() {
		if (!this.isEnabled) {
			return;
		}

		if (this.hasMouseFocus()) {
			return;
		}
		this.border.fillStyle = this.darkBrush;
		this.border.triggerRender();
	}

	loseMouseHoverEventHandler() {
		if (!this.isEnabled) {
			return;
		}

		if (this.hasMouseFocus()) {
			return;
		}
		this.border.fillStyle = this.normalBrush;
		this.border.triggerRender();
	}

	mouseDownEventHandler(e) {
		if (!this.isEnabled) {
			return;
		}

		if (this.acquireMouseFocus()) {
			this.border.fillStyle = this.pressedBrush;
			this.border.strokeStyle = this.pressedBorderBrush;
			this.border.triggerRender();
		}
		e.detail.handled = true;
	}

	mouseUpEventHandler(e) {
		if (!this.isEnabled) {
			return;
		}

		if (this.loseMouseFocus()) {
			this.border.fillStyle = this.normalBrush;
			this.border.strokeStyle = this.normalBorderBrush;
			this.border.triggerRender();
			this.dispatchEvent(new Event('clicked'));
		}
		e.detail.handled = true;
	}
}


class GameBounds extends UIElement {
	constructor(parent, bounds) {
		super(parent, bounds);
	}

	/**
	 * @param {CanvasRenderingContext2D} context 
	 */
	loadContent(context) {
	}

	/**
	 * @param {CanvasRenderingContext2D} context 
	 */
	onRender(context) {
		context.drawImage(OEM437_8, 0, 0, 256, 256, 0, 0, 256, 256);
	}
}

/**
 * @property {HTMLCanvasElement} canvas
 * @property {CanvasRenderingContext2D} context
 */
class Application extends UIElement {
	constructor() {
		super(null, new _Rectangle_js__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0, 0, 0));

		UIElement.root = this;

		this.canvas = null;
		this.context = null;
		this.isRendering = false;
	}

	render() {
		this.isRendering = true;
		this.onRender(this.context);
		this.isRendering = false;
	}

	onRender(context) {
		context.fillStyle = 'green';
		context.fillRect(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height);

		for (let n = 0; n < this.children.length; n++) {
			const child = this.children[n];
			child.onRender(context);
		}
	}

	onResize() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.bounds.width = this.canvas.width;
		this.bounds.height = this.canvas.height;
		this.onRender(this.context);
	}

	onMouseDown(x, y, buttons) {
		if (UIElement.mouseFocus != null) {
			if (UIElement.mouseFocus.onMouseDown(x, y, buttons)) {
				return true;
			}
		}
		return super.onMouseDown(x, y, buttons);
	}

	onMouseUp(x, y, buttons) {
		if (UIElement.mouseFocus != null) {
			if (UIElement.mouseFocus.onMouseUp(x, y, buttons)) {
				return true;
			}
		}
		return super.onMouseUp(x, y, buttons);
	}

	onMouseMove(x, y, buttons) {
		if (UIElement.mouseFocus != null) {
			if (UIElement.mouseFocus.onMouseMove(x, y, buttons)) {
				return true;
			}
		}
		return super.onMouseMove(x, y, buttons);
	}

	onMouseDrag(x, y, buttons) {
		if (UIElement.mouseFocus != null) {
			if (UIElement.mouseFocus.onMouseDrag(x, y, buttons)) {
				return true;
			}
		}
		return super.onMouseDrag(x, y, buttons);
	}

	onLoad() {
		this.canvas = document.createElement('canvas');
		document.body.appendChild(this.canvas);
		this.context = this.canvas.getContext('2d');

		this.canvas.addEventListener('mousedown', e => this.onMouseDown(e.clientX, e.clientY, e.buttons));
		this.canvas.addEventListener('mouseup', e => this.onMouseUp(e.clientX, e.clientY, e.buttons));
		this.canvas.addEventListener('mousemove', e => this.onMouseMove(e.clientX, e.clientY, e.buttons));

		this.canvas.addEventListener('touchstart', e => {
			for (let n = 0; n < e.touches.length; n++) {
				const touch = e.touches[n];
				this.onMouseDown(touch.clientX, touch.clientY, 1);
			}
		});

		this.canvas.addEventListener('touchend', e => this.onMouseUp(null, null, 1));

		this.canvas.addEventListener('touchmove', e => {
			for (let n = 0; n < e.touches.length; n++) {
				const touch = e.touches[n];
				this.onMouseDrag(touch.clientX, touch.clientY, 1);
			}
		});

		window.addEventListener('resize', () => this.onResize());
		this.onResize();
	}
}

class TestApp extends Application {
	constructor() {
		super();
	}
}

const dataContext = {
	value: 0
};
const valueBinding = new Binding(dataContext, 'value');

const app = new TestApp();

const game = new GameBounds(app, new _Rectangle_js__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0, app.width, app.height));
app.children.push(game);

const border = new BorderElement(app, new _Rectangle_js__WEBPACK_IMPORTED_MODULE_1__["default"](64, 64, 256, 256));
border.cornerRadius = [ 5, 5, 0, 0 ];
border.fillStyle = '#8c8';
app.children.push(border);

const btn = new ButtonElement(app, new _Rectangle_js__WEBPACK_IMPORTED_MODULE_1__["default"](20, 100, 128, 32));
btn.label.text = 'Press Me';
btn.addEventListener('clicked', () => {
	console.log('You clicked it!');
	valueBinding.value++;
});
app.children.push(btn);

const lbl = new LabelElement(app, new _Rectangle_js__WEBPACK_IMPORTED_MODULE_1__["default"](100, 200, 128, 32), valueBinding);
app.children.push(lbl);

window.addEventListener('load', () => app.onLoad(), false);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBCQUEwQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwQkFBMEI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1CQUFtQjtBQUNqQyxjQUFjLDBCQUEwQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscURBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDBCQUEwQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxxREFBUztBQUM5QztBQUNBO0FBQ0EsMENBQTBDLHFEQUFTO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHFEQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxzQ0FBc0MscURBQVM7QUFDL0M7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGljYXJpdG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BpY2FyaXRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9waWNhcml0by8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcGljYXJpdG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9waWNhcml0by8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9waWNhcml0by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9waWNhcml0by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcGljYXJpdG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcGljYXJpdG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcGljYXJpdG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9waWNhcml0by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BpY2FyaXRvLy4vc3JjL1BvaW50LmpzIiwid2VicGFjazovL3BpY2FyaXRvLy4vc3JjL1JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly9waWNhcml0by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waWNhcml0by93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9waWNhcml0by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGljYXJpdG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9waWNhcml0by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BpY2FyaXRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGljYXJpdG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcGljYXJpdG8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcGljYXJpdG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaWJtX3ZnYTgud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ09FTTQzNyc7XFxyXFxuXFx0c3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLCBib2R5IHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4gIGNhbnZhcyB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7ICAvKiBwcmV2ZW50cyBzY3JvbGxiYXIgKi9cXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLHFCQUFxQjtDQUNyQiw0Q0FBNEI7Q0FDNUIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osU0FBUztBQUNWOzs7RUFHRTtDQUNELGNBQWMsR0FBRyx1QkFBdUI7Q0FDeEMsV0FBVztDQUNYLFlBQVk7RUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ09FTTQzNyc7XFxyXFxuXFx0c3JjOiB1cmwoJy4vaWJtX3ZnYTgud29mZjInKTtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuICBjYW52YXMge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrOyAgLyogcHJldmVudHMgc2Nyb2xsYmFyICovXFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XHJcblx0Y29uc3RydWN0b3IoeCwgeSkge1xyXG5cdFx0dGhpcy54ID0geDtcclxuXHRcdHRoaXMueSA9IHk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBQb2ludCBmcm9tICcuL1BvaW50LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIFBvaW50IHtcclxuXHRjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcblx0XHRzdXBlcih4LCB5KTtcclxuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcclxuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cdH1cclxuXHJcblx0Z2V0IGxlZnQgKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMueDtcclxuXHR9XHJcblxyXG5cdGdldCByaWdodCgpIHtcclxuXHRcdHJldHVybiB0aGlzLnggKyB0aGlzLndpZHRoIC0gMTtcclxuXHR9XHJcblxyXG5cdGdldCBjZW50ZXIoKSB7XHJcblx0XHRyZXR1cm4gKHRoaXMubGVmdCArIHRoaXMucmlnaHQpIC8gMjtcclxuXHR9XHJcblxyXG5cdGdldCB0b3AoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy55O1xyXG5cdH1cclxuXHJcblx0Z2V0IGJvdHRvbSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodCAtIDE7XHJcblx0fVxyXG5cclxuXHRnZXQgbWlkZGxlKCkge1xyXG5cdFx0cmV0dXJuICh0aGlzLnRvcCArIHRoaXMuYm90dG9tKSAvIDI7XHJcblx0fVxyXG5cclxuXHRjb250YWlucyh4LCB5KSB7XHJcblx0XHRyZXR1cm4gKHRoaXMueCA8PSB4KSAmJiAoeCA8IHRoaXMueCArIHRoaXMud2lkdGgpICYmICh0aGlzLnkgPD0geSkgJiYgKHkgPCB0aGlzLnkgKyB0aGlzLmhlaWdodCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgYSBuZXcgcmVjdGFuZ2xlIHJlcHJlc2VudGluZyB0aGUgaW50ZXJzZWN0aW9uIG9mIHRoaXMgcmVjdGFuZ2xlIHdpdGggYW5vdGhlci5cclxuXHQgKiBAcGFyYW0ge1JlY3RhbmdsZX0gb3RoZXJcclxuXHQgKiBAcmV0dXJucyB7UmVjdGFuZ2xlfSBBIG5ldyByZWN0YW5nbGUgcmVwcmVzZW50aW5nIHRoZSBpbnRlcnNlY3Rpb24sIG9yIG51bGwgaWYgdGhleSBkb24ndCBpbnRlcnNlY3QuXHJcblx0ICovXHJcblx0aW50ZXJzZWN0KG90aGVyKSB7XHJcblx0XHRjb25zdCBsZWZ0ID0gTWF0aC5tYXgodGhpcy5sZWZ0LCBvdGhlci5sZWZ0KTtcclxuXHRcdGNvbnN0IHJpZ2h0ID0gTWF0aC5taW4odGhpcy5yaWdodCwgb3RoZXIucmlnaHQpO1xyXG5cdFx0Y29uc3QgdG9wID0gTWF0aC5tYXgodGhpcy50b3AsIG90aGVyLnRvcCk7XHJcblx0XHRjb25zdCBib3R0b20gPSBNYXRoLm1pbih0aGlzLmJvdHRvbSwgb3RoZXIuYm90dG9tKTtcclxuXHRcdGNvbnN0IHdpZHRoID0gcmlnaHQgLSBsZWZ0ICsgMTtcclxuXHRcdGNvbnN0IGhlaWdodCA9IGJvdHRvbSAtIHRvcCArIDE7XHJcblx0XHRpZiAoKGxlZnQgPiByaWdodCkgfHwgKHRvcCA+IGJvdHRvbSkpIHtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZShsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQpOyBcclxuXHR9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gVE9ETzogaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9ndWlkZXMvb3V0cHV0LW1hbmFnZW1lbnQvXHJcblxyXG4vLyBodHRwczovL2NvZGVwZW4uaW8vdHJleXRvbWVzL3Blbi9FeG93em14XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL1JlY3RhbmdsZS5qcyc7XHJcbmltcG9ydCAnLi9PRU00MzdfOC5wbmcnO1xyXG5cclxuY2xhc3MgQmluZGluZyBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcclxuXHRjb25zdHJ1Y3Rvcihzb3VyY2UsIHByb3BlcnR5TmFtZSkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xyXG5cdFx0dGhpcy5wcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5hbWU7XHJcblx0fVxyXG5cclxuXHRnZXQgdmFsdWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VbdGhpcy5wcm9wZXJ0eU5hbWVdO1xyXG5cdH1cclxuXHJcblx0c2V0IHZhbHVlKG5ld1ZhbHVlKSB7XHJcblx0XHRjb25zdCBvbGRWYWx1ZSA9IHRoaXMudmFsdWU7XHJcblx0XHRpZiAob2xkVmFsdWUgIT0gbmV3VmFsdWUpIHtcclxuXHRcdFx0dGhpcy5zb3VyY2VbdGhpcy5wcm9wZXJ0eU5hbWVdID0gbmV3VmFsdWU7XHJcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZScsIHsgZGV0YWlsOiB7XHJcblx0XHRcdFx0b2xkVmFsdWU6IG9sZFZhbHVlLFxyXG5cdFx0XHRcdG5ld1ZhbHVlOiBuZXdWYWx1ZVxyXG5cdFx0XHR9IH0pKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEcmF3cyBhIHJvdW5kZWQgcmVjdGFuZ2xlIHVzaW5nIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBjYW52YXMuIFxyXG4gKiBJZiB5b3Ugb21pdCB0aGUgbGFzdCB0aHJlZSBwYXJhbXMsIGl0IHdpbGwgZHJhdyBhIHJlY3RhbmdsZSBcclxuICogb3V0bGluZSB3aXRoIGEgNSBwaXhlbCBib3JkZXIgcmFkaXVzIC5cclxuICogXHJcbiAqIFNvdXJjZTogaHR0cHM6Ly9qcy1iaXRzLmJsb2dzcG90LmNvbS8yMDEwLzA3L2NhbnZhcy1yb3VuZGVkLWNvcm5lci1yZWN0YW5nbGVzLmh0bWxcclxuICogXHJcbiAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjb250ZXh0XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFRoZSB0b3AgbGVmdCB4IGNvb3JkaW5hdGVcclxuICogQHBhcmFtIHtOdW1iZXJ9IHkgVGhlIHRvcCBsZWZ0IHkgY29vcmRpbmF0ZSBcclxuICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgcmVjdGFuZ2xlIFxyXG4gKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0IFRoZSBoZWlnaHQgb2YgdGhlIHJlY3RhbmdsZVxyXG4gKiBAcGFyYW0ge051bWJlcnxOdW1iZXJbXX0gcmFkaXVzIFRoZSBjb3JuZXIgcmFkaXVzLiBEZWZhdWx0cyB0byA1LlxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGZpbGwgV2hldGhlciB0byBmaWxsIHRoZSByZWN0YW5nbGUuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHN0cm9rZSBXaGV0aGVyIHRvIHN0cm9rZSB0aGUgcmVjdGFuZ2xlLiBEZWZhdWx0cyB0byB0cnVlLlxyXG4gKi9cclxuZnVuY3Rpb24gcm91bmRSZWN0KGNvbnRleHQsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cywgZmlsbCwgc3Ryb2tlKSB7XHJcblx0aWYgKHR5cGVvZiBzdHJva2UgPT0gXCJ1bmRlZmluZWRcIiApIHtcclxuXHRcdHN0cm9rZSA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRsZXQgcmFkaXVzVEwgPSA1O1xyXG5cdGxldCByYWRpdXNUUiA9IDU7XHJcblx0bGV0IHJhZGl1c0JMID0gNTtcclxuXHRsZXQgcmFkaXVzQlIgPSA1O1xyXG5cclxuXHRpZiAodHlwZW9mIHJhZGl1cyA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0Ly8gQXNzdW1lIGl0J3MgYW4gYXJyYXkuXHJcblx0XHQvLyBUaGlzIGlzIGJhc2VkIG9uOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLXJhZGl1c1xyXG5cdFx0c3dpdGNoIChyYWRpdXMubGVuZ3RoKSB7XHJcblx0XHRjYXNlIDE6XHJcblx0XHRcdHJhZGl1c1RMID0gcmFkaXVzWzBdO1xyXG5cdFx0XHRyYWRpdXNUUiA9IHJhZGl1c1swXTtcclxuXHRcdFx0cmFkaXVzQkwgPSByYWRpdXNbMF07XHJcblx0XHRcdHJhZGl1c0JSID0gcmFkaXVzWzBdO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgMjpcclxuXHRcdFx0cmFkaXVzVEwgPSByYWRpdXNbMF07XHJcblx0XHRcdHJhZGl1c0JSID0gcmFkaXVzWzBdO1xyXG5cdFx0XHRyYWRpdXNUUiA9IHJhZGl1c1sxXTtcclxuXHRcdFx0cmFkaXVzQkwgPSByYWRpdXNbMV07XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAzOlxyXG5cdFx0XHRyYWRpdXNUTCA9IHJhZGl1c1swXTtcclxuXHRcdFx0cmFkaXVzVFIgPSByYWRpdXNbMV07XHJcblx0XHRcdHJhZGl1c0JMID0gcmFkaXVzWzFdO1xyXG5cdFx0XHRyYWRpdXNCUiA9IHJhZGl1c1syXTtcclxuXHRcdGNhc2UgNDpcclxuXHRcdFx0cmFkaXVzVEwgPSByYWRpdXNbMF07XHJcblx0XHRcdHJhZGl1c1RSID0gcmFkaXVzWzFdO1xyXG5cdFx0XHRyYWRpdXNCTCA9IHJhZGl1c1syXTtcclxuXHRcdFx0cmFkaXVzQlIgPSByYWRpdXNbM107XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0dGhyb3cgJ0Nvcm5lciByYWRpdXMgbXVzdCBiZSBlaXRoZXIgYSBudW1iZXIsIG9yIGFuIGFycmF5IG9mIDEgb3IgNCBudW1iZXJzLic7XHJcblx0XHR9XHJcblx0fSBlbHNlIGlmICh0eXBlb2YgcmFkaXVzID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRyYWRpdXNUTCA9IHJhZGl1cztcclxuXHRcdHJhZGl1c1RSID0gcmFkaXVzO1xyXG5cdFx0cmFkaXVzQkwgPSByYWRpdXM7XHJcblx0XHRyYWRpdXNCUiA9IHJhZGl1cztcclxuXHR9XHJcblxyXG5cdGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcblx0Y29udGV4dC5tb3ZlVG8oeCArIHJhZGl1c1RMLCB5KTtcclxuXHRjb250ZXh0LmxpbmVUbyh4ICsgd2lkdGggLSByYWRpdXNUUiwgeSk7XHJcblx0Y29udGV4dC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoLCB5ICsgcmFkaXVzVFIpO1xyXG5cdGNvbnRleHQubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGl1c0JSKTtcclxuXHRjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGggLSByYWRpdXNCUiwgeSArIGhlaWdodCk7XHJcblx0Y29udGV4dC5saW5lVG8oeCArIHJhZGl1c0JMLCB5ICsgaGVpZ2h0KTtcclxuXHRjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGhlaWdodCwgeCwgeSArIGhlaWdodCAtIHJhZGl1c0JMKTtcclxuXHRjb250ZXh0LmxpbmVUbyh4LCB5ICsgcmFkaXVzVEwpO1xyXG5cdGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgcmFkaXVzVEwsIHkpO1xyXG5cdGNvbnRleHQuY2xvc2VQYXRoKCk7XHJcblx0aWYgKHN0cm9rZSkge1xyXG5cdFx0Y29udGV4dC5zdHJva2UoKTtcclxuXHR9XHJcblx0aWYgKGZpbGwpIHtcclxuXHRcdGNvbnRleHQuZmlsbCgpO1xyXG5cdH0gICAgICAgIFxyXG59XHJcblxyXG4vKipcclxuICogQHN0YXRpYyBAcHJvcGVydHkge1VJRWxlbWVudH0gcm9vdDtcclxuICogQHByb3BlcnR5IHtVSUVsZW1lbnR9IHBhcmVudDsgXHJcbiAqIEBwcm9wZXJ0eSB7UmVjdGFuZ2xlfSBib3VuZHM7XHJcbiAqL1xyXG5jbGFzcyBVSUVsZW1lbnQgZXh0ZW5kcyBFdmVudFRhcmdldCB7XHJcblx0c3RhdGljIHJvb3QgPSBudWxsO1xyXG5cdHN0YXRpYyBtb3VzZUZvY3VzID0gbnVsbDtcclxuXHRzdGF0aWMgY2xpcHBpbmdTdGFjayA9IFtdO1xyXG5cclxuXHQvKipcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge1VJRWxlbWVudH0gcGFyZW50IFxyXG5cdCAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBib3VuZHMgXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IocGFyZW50LCBib3VuZHMpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcblx0XHR0aGlzLmJvdW5kcyA9IGJvdW5kcztcclxuXHRcdHRoaXMubmVlZHNSZW5kZXIgPSB0cnVlO1xyXG5cdFx0dGhpcy5jb250ZW50TG9hZGVkID0gZmFsc2U7XHJcblx0XHR0aGlzLmhhc01vdXNlSG92ZXIgPSBmYWxzZTtcclxuXHRcdC8vdGhpcy5fZGF0YUNvbnRleHQgPSBudWxsO1xyXG5cclxuXHRcdHRoaXMuY2hpbGRyZW4gPSBbXTtcclxuXHR9XHJcblxyXG5cdC8qXHJcblx0Z2V0IGRhdGFDb250ZXh0KCkge1xyXG5cdFx0aWYgKHRoaXMuX2RhdGFDb250ZXh0ICE9IG51bGwpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX2RhdGFDb250ZXh0O1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLnBhcmVudCAhPSBudWxsKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLnBhcmVudC5kYXRhQ29udGV4dDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0IGRhdGFDb250ZXh0KHZhbHVlKSB7XHJcblx0XHR0aGlzLl9kYXRhQ29udGV4dCA9IHZhbHVlO1xyXG5cdH1cclxuXHQqL1xyXG5cclxuXHRnZXQgZ2xvYmFsWCgpIHtcclxuXHRcdGlmICh0aGlzLnBhcmVudCAhPSBudWxsKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLnBhcmVudC5nbG9iYWxYICsgdGhpcy5ib3VuZHMueDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmJvdW5kcy54O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0IGdsb2JhbFkoKSB7XHJcblx0XHRpZiAodGhpcy5wYXJlbnQgIT0gbnVsbCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJlbnQuZ2xvYmFsWSArIHRoaXMuYm91bmRzLnk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5ib3VuZHMueTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldCBnbG9iYWxCb3VuZHMoKSB7XHJcblx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLmdsb2JhbFgsIHRoaXMuZ2xvYmFsWSwgdGhpcy5ib3VuZHMud2lkdGgsIHRoaXMuYm91bmRzLmhlaWdodCk7XHJcblx0fVxyXG5cclxuXHRoYXNNb3VzZUZvY3VzKCkge1xyXG5cdFx0cmV0dXJuIFVJRWxlbWVudC5tb3VzZUZvY3VzID09IHRoaXM7XHJcblx0fVxyXG5cclxuXHRhY3F1aXJlTW91c2VGb2N1cygpIHtcclxuXHRcdGlmICghdGhpcy5oYXNNb3VzZUZvY3VzKCkpIHtcclxuXHRcdFx0VUlFbGVtZW50Lm1vdXNlRm9jdXMgPSB0aGlzO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGxvc2VNb3VzZUZvY3VzKCkge1xyXG5cdFx0aWYgKHRoaXMuaGFzTW91c2VGb2N1cygpKSB7XHJcblx0XHRcdFVJRWxlbWVudC5tb3VzZUZvY3VzID0gbnVsbDtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRvbk1vdXNlRG93bih4LCB5LCBidXR0b25zKSB7XHJcblx0XHRpZiAoIXRoaXMuaGFzTW91c2VGb2N1cygpICYmICF0aGlzLmhhc01vdXNlSG92ZXIpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAobGV0IG4gPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IG4gPj0gMDsgbi0tKSB7XHJcblx0XHRcdGNvbnN0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltuXTtcclxuXHRcdFx0aWYgKGNoaWxkLm9uTW91c2VEb3duKHgsIHksIGJ1dHRvbnMpKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRsZXQgZGV0YWlsID0ge1xyXG5cdFx0XHR4OiB4LFxyXG5cdFx0XHR5OiB5LFxyXG5cdFx0XHRidXR0b25zOiBidXR0b25zLFxyXG5cdFx0XHRoYW5kbGVkOiBmYWxzZVxyXG5cdFx0fTtcclxuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ21vdXNlRG93bicsIHsgZGV0YWlsOiBkZXRhaWwgfSkpO1xyXG5cclxuXHRcdHRoaXMubW91c2VEcmFnID0ge1xyXG5cdFx0XHRzdGFydFg6IHgsXHJcblx0XHRcdHN0YXJ0WTogeSxcclxuXHRcdFx0ZW5kWDogbnVsbCxcclxuXHRcdFx0ZW5kWTogbnVsbCxcclxuXHRcdFx0YnV0dG9uczogYnV0dG9uc1xyXG5cdFx0fTtcclxuXHRcdHJldHVybiBkZXRhaWwuaGFuZGxlZDtcclxuXHR9XHJcblxyXG5cdG9uTW91c2VVcCh4LCB5LCBidXR0b25zKSB7XHJcblx0XHRpZiAoIXRoaXMuaGFzTW91c2VGb2N1cygpICYmICF0aGlzLmhhc01vdXNlSG92ZXIpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAobGV0IG4gPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IG4gPj0gMDsgbi0tKSB7XHJcblx0XHRcdGNvbnN0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltuXTtcclxuXHRcdFx0aWYgKGNoaWxkLm9uTW91c2VVcCh4LCB5LCBidXR0b25zKSkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMubW91c2VEcmFnICE9IG51bGwpIHtcclxuXHRcdFx0aWYgKCh4ID09IG51bGwpIHx8ICh5ID09IG51bGwpKSB7XHJcblx0XHRcdFx0eCA9IHRoaXMubW91c2VEcmFnLmVuZFg7XHJcblx0XHRcdFx0eSA9IHRoaXMubW91c2VEcmFnLmVuZFk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGJ1dHRvbnMgPT0gMCkge1xyXG5cdFx0XHRcdGJ1dHRvbnMgPSB0aGlzLm1vdXNlRHJhZy5idXR0b25zO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGxldCBkZXRhaWwgPSB7XHJcblx0XHRcdHg6IHgsXHJcblx0XHRcdHk6IHksXHJcblx0XHRcdGJ1dHRvbnM6IGJ1dHRvbnMsXHJcblx0XHRcdGhhbmRsZWQ6IGZhbHNlXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbW91c2VVcCcsIHsgZGV0YWlsOiBkZXRhaWwgfSkpO1xyXG5cclxuXHRcdHRoaXMubW91c2VEcmFnID0gbnVsbDtcclxuXHRcdHJldHVybiBkZXRhaWwuaGFuZGxlZDtcclxuXHR9XHJcblxyXG5cdG9uTW91c2VNb3ZlKHgsIHksIGJ1dHRvbnMpIHtcclxuXHRcdGlmICghdGhpcy5oYXNNb3VzZUZvY3VzKCkpIHtcclxuXHRcdFx0aWYgKCF0aGlzLmdsb2JhbEJvdW5kcy5jb250YWlucyh4LCB5KSkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmhhc01vdXNlSG92ZXIpIHtcclxuXHRcdFx0XHRcdHRoaXMub25Mb3NlTW91c2VIb3ZlcigpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIXRoaXMuaGFzTW91c2VIb3Zlcikge1xyXG5cdFx0XHR0aGlzLm9uQWNxdWlyZU1vdXNlSG92ZXIoKTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKGxldCBuID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBuID49IDA7IG4tLSkge1xyXG5cdFx0XHRjb25zdCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5bbl07XHJcblx0XHRcdGlmIChjaGlsZC5vbk1vdXNlTW92ZSh4LCB5LCBidXR0b25zKSkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMubW91c2VEcmFnICE9IG51bGwpIHtcclxuXHRcdFx0dGhpcy5vbk1vdXNlRHJhZyh4LCB5LCBidXR0b25zKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ21vdXNlTW92ZScsIHtcclxuXHRcdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRcdHg6IHgsXHJcblx0XHRcdFx0XHR5OiB5LFxyXG5cdFx0XHRcdFx0YnV0dG9uczogYnV0dG9uc1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdH0pKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdG9uTW91c2VEcmFnKHgsIHksIGJ1dHRvbnMpIHtcclxuXHRcdGlmICghdGhpcy5ib3VuZHMuY29udGFpbnMoeCwgeSkgJiYgIXRoaXMuaGFzTW91c2VGb2N1cygpKSB7XHJcblx0XHRcdGlmICh0aGlzLmhhc01vdXNlSG92ZXIpIHtcclxuXHRcdFx0XHR0aGlzLm9uTG9zZU1vdXNlSG92ZXIoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5tb3VzZURyYWcuZW5kWCA9IHg7XHJcblx0XHR0aGlzLm1vdXNlRHJhZy5lbmRZID0geTtcclxuXHRcdFxyXG5cdFx0bGV0IGRldGFpbCA9IHtcclxuXHRcdFx0eDogeCxcclxuXHRcdFx0eTogeSxcclxuXHRcdFx0YnV0dG9uczogYnV0dG9ucyxcclxuXHRcdFx0ZHJhZzogdGhpcy5tb3VzZURyYWdcclxuXHRcdH07XHJcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdtb3VzZURyYWcnLCB7IGRldGFpbDogZGV0YWlsIH0pKTtcclxuXHRcdHJldHVybiBkZXRhaWwuaGFuZGxlZDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjb250ZXh0IFxyXG5cdCAqL1xyXG5cdGxvYWRDb250ZW50KGNvbnRleHQpIHtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjb250ZXh0IFxyXG5cdCAqL1xyXG5cdG9uUmVuZGVyKGNvbnRleHQpIHtcclxuXHRcdGlmICghdGhpcy5jb250ZW50TG9hZGVkKSB7XHJcblx0XHRcdHRoaXMubG9hZENvbnRlbnQoY29udGV4dCk7XHJcblx0XHRcdHRoaXMuY29udGVudExvYWRlZCA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGNsaXBwaW5nUmVjdCA9IHRoaXMuZ2xvYmFsQm91bmRzO1xyXG5cdFx0bGV0IHByZXZpb3VzQ2xpcHBpbmdSZWN0ID0gVUlFbGVtZW50LnJvb3QuYm91bmRzO1xyXG5cdFx0aWYgKFVJRWxlbWVudC5jbGlwcGluZ1N0YWNrLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0bGV0IHByZXZpb3VzQ2xpcHBpbmdSZWN0ID0gVUlFbGVtZW50LmNsaXBwaW5nU3RhY2tbVUlFbGVtZW50LmNsaXBwaW5nU3RhY2subGVuZ3RoIC0gMV07XHJcblx0XHRcdGNsaXBwaW5nUmVjdCA9IGNsaXBwaW5nUmVjdC5pbnRlcnNlY3QocHJldmlvdXNDbGlwcGluZ1JlY3QpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGNsaXBwaW5nUmVjdCA9PSBudWxsKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdFVJRWxlbWVudC5jbGlwcGluZ1N0YWNrLnB1c2goY2xpcHBpbmdSZWN0KTtcclxuXHJcblx0XHRjb250ZXh0LnNhdmUoKTtcclxuXHRcdGNvbnRleHQuY2xpcChjb250ZXh0LnJlY3QoY2xpcHBpbmdSZWN0LngsIGNsaXBwaW5nUmVjdC55LCBjbGlwcGluZ1JlY3Qud2lkdGgsIGNsaXBwaW5nUmVjdC5oZWlnaHQpKTtcclxuXHRcdGNvbnRleHQudHJhbnNsYXRlKHRoaXMuYm91bmRzLngsIHRoaXMuYm91bmRzLnkpO1xyXG5cclxuXHRcdGZvciAobGV0IG4gPSAwOyBuIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IG4rKykge1xyXG5cdFx0XHRjb25zdCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5bbl07XHJcblx0XHRcdGNoaWxkLm9uUmVuZGVyKGNvbnRleHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vaWYgKCF0aGlzLm5lZWRzUmVuZGVyKSB7XHJcblx0XHQvL1x0cmV0dXJuO1xyXG5cdFx0Ly99XHJcblxyXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncmVuZGVyJywge1xyXG5cdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRjb250ZXh0OiBjb250ZXh0XHJcblx0XHQgXHR9XHJcblx0XHR9KSk7XHJcblxyXG5cdFx0Y29udGV4dC5yZXN0b3JlKCk7XHJcblx0XHRVSUVsZW1lbnQuY2xpcHBpbmdTdGFjay5wb3AoKTtcclxuXHRcdHRoaXMubmVlZHNSZW5kZXIgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdG9uQWNxdWlyZU1vdXNlSG92ZXIoKSB7XHJcblx0XHR0aGlzLmhhc01vdXNlSG92ZXIgPSB0cnVlO1xyXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnYWNxdWlyZU1vdXNlSG92ZXInKSk7XHJcblx0fVxyXG5cclxuXHRvbkxvc2VNb3VzZUhvdmVyKCkge1xyXG5cdFx0dGhpcy5oYXNNb3VzZUhvdmVyID0gZmFsc2U7XHJcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdsb3NlTW91c2VIb3ZlcicpKTtcclxuXHR9XHJcblxyXG5cdHRyaWdnZXJSZW5kZXIoKSB7XHJcblx0XHRpZiAoVUlFbGVtZW50LnJvb3QuaXNSZW5kZXJpbmcpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHR0aGlzLm5lZWRzUmVuZGVyID0gdHJ1ZTtcclxuXHRcdFVJRWxlbWVudC5yb290LnJlbmRlcigpO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgQm9yZGVyRWxlbWVudCBleHRlbmRzIFVJRWxlbWVudCB7XHJcblx0Y29uc3RydWN0b3IocGFyZW50LCBib3VuZHMpIHtcclxuXHRcdHN1cGVyKHBhcmVudCwgYm91bmRzKTtcclxuXHRcdHRoaXMubGluZVdpZHRoID0gMztcclxuXHRcdHRoaXMuZmlsbFN0eWxlID0gJ3doaXRlJztcclxuXHRcdHRoaXMuc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xyXG5cdFx0dGhpcy5jb3JuZXJSYWRpdXMgPSAwO1xyXG5cclxuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncmVuZGVyJywgZSA9PiB0aGlzLnJlbmRlckV2ZW50SGFuZGxlcihlLmRldGFpbC5jb250ZXh0KSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY29udGV4dCBcclxuXHQgKi9cclxuXHRyZW5kZXJFdmVudEhhbmRsZXIoY29udGV4dCkge1xyXG5cdFx0Y29udGV4dC5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcclxuXHRcdGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5maWxsU3R5bGU7XHJcblx0XHRjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5zdHJva2VTdHlsZTtcclxuXHJcblx0XHRjb25zdCBzaG91bGRGaWxsID0gdGhpcy5maWxsU3R5bGUgIT0gbnVsbDtcclxuXHRcdGNvbnN0IHNob3VsZFN0cm9rZSA9IHRoaXMuc3Ryb2tlU3R5bGUgIT0gbnVsbDtcclxuXHJcblx0XHRpZiAodGhpcy5jb3JuZXJSYWRpdXMgIT0gMCkge1xyXG5cdFx0XHRyb3VuZFJlY3QoY29udGV4dCwgdGhpcy5saW5lV2lkdGgsIHRoaXMubGluZVdpZHRoLCB0aGlzLmJvdW5kcy53aWR0aCAtIHRoaXMubGluZVdpZHRoICogMiwgdGhpcy5ib3VuZHMuaGVpZ2h0IC0gdGhpcy5saW5lV2lkdGggKiAyLCB0aGlzLmNvcm5lclJhZGl1cywgc2hvdWxkRmlsbCwgc2hvdWxkU3Ryb2tlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChzaG91bGRGaWxsKSB7XHJcblx0XHRcdFx0Y29udGV4dC5maWxsUmVjdCh0aGlzLmxpbmVXaWR0aCwgdGhpcy5saW5lV2lkdGgsIHRoaXMuYm91bmRzLndpZHRoIC0gdGhpcy5saW5lV2lkdGggKiAyLCB0aGlzLmJvdW5kcy5oZWlnaHQgLSB0aGlzLmxpbmVXaWR0aCAqIDIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChzaG91bGRTdHJva2UpIHtcclxuXHRcdFx0XHRjb250ZXh0LnN0cm9rZVJlY3QodGhpcy5saW5lV2lkdGgsIHRoaXMubGluZVdpZHRoLCB0aGlzLmJvdW5kcy53aWR0aCAtIHRoaXMubGluZVdpZHRoICogMiwgdGhpcy5ib3VuZHMuaGVpZ2h0IC0gdGhpcy5saW5lV2lkdGggKiAyKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgTGFiZWxFbGVtZW50IGV4dGVuZHMgVUlFbGVtZW50IHtcclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge1VJRWxlbWVudH0gcGFyZW50IFxyXG5cdCAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBib3VuZHMgXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHRcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihwYXJlbnQsIGJvdW5kcywgdGV4dCkge1xyXG5cdFx0c3VwZXIocGFyZW50LCBib3VuZHMpO1xyXG5cdFx0dGhpcy5mb250ID0gJzE2cHggQ2FsaWJyaSc7XHJcblx0XHR0aGlzLmZpbGxTdHlsZSA9ICdibGFjayc7XHJcblx0XHR0aGlzLmhvcml6b250YWxBbGlnbm1lbnQgPSAnY2VudGVyJzsgLy8gbGVmdCwgY2VudGVyLCByaWdodFxyXG5cdFx0dGhpcy52ZXJ0aWNhbEFsaWdubWVudCA9ICdtaWRkbGUnOyAvLyB0b3AsIG1pZGRsZSwgYm90dG9tXHJcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xyXG5cclxuXHRcdGlmICh0aGlzLnRleHQgaW5zdGFuY2VvZiBCaW5kaW5nKSB7XHJcblx0XHRcdHRoaXMudGV4dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHRoaXMudHJpZ2dlclJlbmRlcigpKTtcclxuXHRcdH1cclxuXHJcblx0XHQvL3RoaXMudGV4dFdpZHRoID0gbnVsbDtcclxuXHRcdC8vdGhpcy50ZXh0SGVpZ2h0ID0gbnVsbDtcclxuXHRcdC8vdGhpcy5uZWVkc1JlbWVhc3VyZSA9IHRydWU7XHJcblxyXG5cdFx0dGhpcy5hZGRFdmVudExpc3RlbmVyKCdyZW5kZXInLCBlID0+IHRoaXMucmVuZGVyRXZlbnRIYW5kbGVyKGUuZGV0YWlsLmNvbnRleHQpKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjb250ZXh0IFxyXG5cdCAqL1xyXG5cdHJlbmRlckV2ZW50SGFuZGxlcihjb250ZXh0KSB7XHJcblx0XHRjb250ZXh0LmZvbnQgPSB0aGlzLmZvbnQ7XHJcblxyXG5cdFx0Ly9pZiAodGhpcy5uZWVkc1JlbWVhc3VyZSkge1xyXG5cdFx0Ly9cdGNvbnRleHQudGV4dEJhc2VsaW5lID0gJ3RvcCc7XHJcblx0XHQvL1x0Y29uc3QgdGV4dE1ldHJpY3MgPSBjb250ZXh0Lm1lYXN1cmVUZXh0KHRoaXMudGV4dCk7XHJcblx0XHQvL1x0dGhpcy50ZXh0V2lkdGggPSB0ZXh0TWV0cmljcy53aWR0aDtcclxuXHRcdC8vXHR0aGlzLnRleHRIZWlnaHQgPSB0ZXh0TWV0cmljcy5mb250Qm91bmRpbmdCb3hEZXNjZW50O1xyXG5cdFx0Ly9cdGNvbnNvbGUubG9nKHRoaXMudGV4dFdpZHRoLCB0aGlzLnRleHRIZWlnaHQpO1xyXG5cdFx0Ly9cdHRoaXMubmVlZHNSZW1lYXN1cmUgPSBmYWxzZTtcclxuXHRcdC8vfVxyXG5cclxuXHRcdGxldCB5ID0gMDtcclxuXHRcdGlmICh0aGlzLnZlcnRpY2FsQWxpZ25tZW50ID09ICdtaWRkbGUnKSB7XHJcblx0XHRcdHkgPSB0aGlzLmJvdW5kcy5oZWlnaHQgLyAyO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLnZlcnRpY2FsQWxpZ25tZW50ID09ICdib3R0b20nKSB7XHJcblx0XHRcdHkgPSB0aGlzLmJvdW5kcy5oZWlnaHQ7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHggPSAwO1xyXG5cdFx0aWYgKHRoaXMuaG9yaXpvbnRhbEFsaWdubWVudCA9PSAnY2VudGVyJykge1xyXG5cdFx0XHR4ID0gdGhpcy5ib3VuZHMud2lkdGggLyAyO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmhvcml6b250YWxBbGlnbm1lbnQgPT0gJ3JpZ2h0Jykge1xyXG5cdFx0XHR4ID0gdGhpcy5ib3VuZHMud2lkdGg7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmZpbGxTdHlsZTtcclxuXHRcdGNvbnRleHQudGV4dEFsaWduID0gdGhpcy5ob3Jpem9udGFsQWxpZ25tZW50O1xyXG5cdFx0Y29udGV4dC50ZXh0QmFzZWxpbmUgPSB0aGlzLnZlcnRpY2FsQWxpZ25tZW50O1xyXG5cclxuXHRcdGNvbnN0IHRleHQgPSAodGhpcy50ZXh0IGluc3RhbmNlb2YgQmluZGluZykgPyB0aGlzLnRleHQudmFsdWUgOiB0aGlzLnRleHQ7XHJcblx0XHRjb250ZXh0LmZpbGxUZXh0KHRleHQsIHgsIHksIHRoaXMuYm91bmRzLndpZHRoKTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIEhlYWRlcmVkQ29udGVudENvbnRyb2wgZXh0ZW5kcyBVSUVsZW1lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHBhcmVudCwgYm91bmRzKSB7XHJcblx0XHRzdXBlcihwYXJlbnQsIGJvdW5kcyk7XHJcblx0XHRcclxuXHRcdHRoaXMuaGVhZGluZ0JvcmRlciA9IG5ldyBCb3JkZXJFbGVtZW50KHRoaXMsIG5ldyBSZWN0YW5nbGUoMCwgMCwgYm91bmRzLndpZHRoLCAzMikpO1xyXG5cdFx0dGhpcy5oZWFkaW5nTGFiZWwgPSBuZXcgTGFiZWxFbGVtZW50KClcclxuXHRcdHRoaXMuY29udGVudEJvcmRlciA9IG51bGw7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBCdXR0b25FbGVtZW50IGV4dGVuZHMgVUlFbGVtZW50IHtcclxuXHRjb25zdHJ1Y3RvcihwYXJlbnQsIGJvdW5kcykge1xyXG5cdFx0c3VwZXIocGFyZW50LCBib3VuZHMpO1xyXG5cclxuXHRcdHRoaXMuY29ybmVyUmFkaXVzID0gMjtcclxuXHJcblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2FjcXVpcmVNb3VzZUhvdmVyJywgKCkgPT4gdGhpcy5hY3F1aXJlTW91c2VIb3ZlckV2ZW50SGFuZGxlcigpKTtcclxuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbG9zZU1vdXNlSG92ZXInLCAoKSA9PiB0aGlzLmxvc2VNb3VzZUhvdmVyRXZlbnRIYW5kbGVyKCkpO1xyXG5cdFx0dGhpcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZURvd24nLCBlID0+IHRoaXMubW91c2VEb3duRXZlbnRIYW5kbGVyKGUpKTtcclxuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VVcCcsIGUgPT4gdGhpcy5tb3VzZVVwRXZlbnRIYW5kbGVyKGUpKTtcclxuXHJcblx0XHR0aGlzLmJvcmRlciA9IG5ldyBCb3JkZXJFbGVtZW50KHRoaXMsIG5ldyBSZWN0YW5nbGUoMCwgMCwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KSk7XHJcblx0XHR0aGlzLmxhYmVsID0gbmV3IExhYmVsRWxlbWVudCh0aGlzLCBuZXcgUmVjdGFuZ2xlKDAsIDAsIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCksIFwiTGFiZWxcIik7XHJcblxyXG5cdFx0dGhpcy5jaGlsZHJlbiA9IFtcclxuXHRcdFx0dGhpcy5ib3JkZXIsXHJcblx0XHRcdHRoaXMubGFiZWxcclxuXHRcdF07XHJcblxyXG5cdFx0dGhpcy5pc0VuYWJsZWQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGNvbnRleHQgXHJcblx0ICovXHJcblx0bG9hZENvbnRlbnQoY29udGV4dCkge1xyXG5cdFx0c3VwZXIubG9hZENvbnRlbnQoY29udGV4dCk7XHJcblxyXG5cdFx0dGhpcy5mb3JlZ3JvdW5kQnJ1c2ggPSAnIzAwMCc7XHJcblxyXG5cdFx0dGhpcy5ub3JtYWxCcnVzaCA9IGNvbnRleHQuY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMCwgdGhpcy5ib3VuZHMuaGVpZ2h0KTtcclxuXHRcdHRoaXMubm9ybWFsQnJ1c2guYWRkQ29sb3JTdG9wKDAsICcjZmZmJyk7XHJcblx0XHR0aGlzLm5vcm1hbEJydXNoLmFkZENvbG9yU3RvcCgxLCAnI2NjYycpO1xyXG5cclxuXHRcdHRoaXMubm9ybWFsQm9yZGVyQnJ1c2ggPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIHRoaXMuYm91bmRzLmhlaWdodCk7XHJcblx0XHR0aGlzLm5vcm1hbEJvcmRlckJydXNoLmFkZENvbG9yU3RvcCgwLCAnI2NjYycpO1xyXG5cdFx0dGhpcy5ub3JtYWxCb3JkZXJCcnVzaC5hZGRDb2xvclN0b3AoMSwgJyM0NDQnKTtcclxuXHJcblx0XHR0aGlzLmRhcmtCcnVzaCA9IGNvbnRleHQuY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMCwgdGhpcy5ib3VuZHMuaGVpZ2h0KTtcclxuXHRcdHRoaXMuZGFya0JydXNoLmFkZENvbG9yU3RvcCgwLCAnI2ZmZicpO1xyXG5cdFx0dGhpcy5kYXJrQnJ1c2guYWRkQ29sb3JTdG9wKDEsICcjYWFhJyk7XHJcblxyXG5cdFx0dGhpcy5wcmVzc2VkQnJ1c2ggPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIHRoaXMuYm91bmRzLmhlaWdodCk7XHJcblx0XHR0aGlzLnByZXNzZWRCcnVzaC5hZGRDb2xvclN0b3AoMCwgJyNiYmInKTtcclxuXHRcdHRoaXMucHJlc3NlZEJydXNoLmFkZENvbG9yU3RvcCgwLjEsICcjZWVlJyk7XHJcblx0XHR0aGlzLnByZXNzZWRCcnVzaC5hZGRDb2xvclN0b3AoMC45LCAnI2VlZScpO1xyXG5cdFx0dGhpcy5wcmVzc2VkQnJ1c2guYWRkQ29sb3JTdG9wKDEsICcjZmZmJyk7XHJcblxyXG5cdFx0dGhpcy5wcmVzc2VkQm9yZGVyQnJ1c2ggPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIHRoaXMuYm91bmRzLmhlaWdodCk7XHJcblx0XHR0aGlzLnByZXNzZWRCb3JkZXJCcnVzaC5hZGRDb2xvclN0b3AoMCwgJyM0NDQnKTtcclxuXHRcdHRoaXMucHJlc3NlZEJvcmRlckJydXNoLmFkZENvbG9yU3RvcCgxLCAnIzg4OCcpO1xyXG5cclxuXHRcdC8vIGtleWJvYXJkIGZvY3VzIG9yIGRlZmF1bHRlZFxyXG5cdFx0dGhpcy5kZWZhdWx0ZWRCb3JkZXJCcnVzaCA9IGNvbnRleHQuY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMCwgdGhpcy5ib3VuZHMuaGVpZ2h0KTtcclxuXHRcdHRoaXMuZGVmYXVsdGVkQm9yZGVyQnJ1c2guYWRkQ29sb3JTdG9wKDAsICcjNzc3Jyk7XHJcblx0XHR0aGlzLmRlZmF1bHRlZEJvcmRlckJydXNoLmFkZENvbG9yU3RvcCgxLCAnIzAwMCcpO1xyXG5cclxuXHRcdHRoaXMuZGlzYWJsZWRGb3JlZ3JvdW5kQnJ1c2ggPSAnIzg4OCc7XHJcblx0XHR0aGlzLmRpc2FibGVkQmFja2dyb3VuZEJydXNoID0gJyNlZWUnO1xyXG5cdFx0dGhpcy5kaXNhYmxlZEJvcmRlckJydXNoID0gJyNhYWEnO1xyXG5cclxuXHRcdHRoaXMuYm9yZGVyLmxpbmVXaWR0aCA9IDE7XHJcblxyXG5cdFx0Ly90aGlzLmRpc2FibGUoKTtcclxuXHRcdHRoaXMuZW5hYmxlKCk7XHJcblx0fVxyXG5cclxuXHRlbmFibGUoKSB7XHJcblx0XHR0aGlzLmlzRW5hYmxlZCA9IHRydWU7XHJcblx0XHR0aGlzLmJvcmRlci5maWxsU3R5bGUgPSB0aGlzLm5vcm1hbEJydXNoO1xyXG5cdFx0dGhpcy5ib3JkZXIuc3Ryb2tlU3R5bGUgPSB0aGlzLm5vcm1hbEJvcmRlckJydXNoO1xyXG5cdFx0dGhpcy5sYWJlbC5maWxsU3R5bGUgPSB0aGlzLmZvcmVncm91bmRCcnVzaDtcclxuXHRcdHRoaXMudHJpZ2dlclJlbmRlcigpO1xyXG5cdH1cclxuXHJcblx0ZGlzYWJsZSgpIHtcclxuXHRcdHRoaXMuaXNFbmFibGVkID0gZmFsc2U7XHJcblx0XHR0aGlzLmZpbGxTdHlsZSA9IHRoaXMuZGlzYWJsZWRCYWNrZ3JvdW5kQnJ1c2g7XHJcblx0XHR0aGlzLnN0cm9rZVN0eWxlID0gdGhpcy5kaXNhYmxlZEJvcmRlckJydXNoO1xyXG5cdFx0dGhpcy5sYWJlbC5maWxsU3R5bGUgPSB0aGlzLmRpc2FibGVkRm9yZWdyb3VuZEJydXNoO1xyXG5cdFx0dGhpcy50cmlnZ2VyUmVuZGVyKCk7XHJcblx0fVxyXG5cclxuXHRhY3F1aXJlTW91c2VIb3ZlckV2ZW50SGFuZGxlcigpIHtcclxuXHRcdGlmICghdGhpcy5pc0VuYWJsZWQpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmhhc01vdXNlRm9jdXMoKSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLmJvcmRlci5maWxsU3R5bGUgPSB0aGlzLmRhcmtCcnVzaDtcclxuXHRcdHRoaXMuYm9yZGVyLnRyaWdnZXJSZW5kZXIoKTtcclxuXHR9XHJcblxyXG5cdGxvc2VNb3VzZUhvdmVyRXZlbnRIYW5kbGVyKCkge1xyXG5cdFx0aWYgKCF0aGlzLmlzRW5hYmxlZCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuaGFzTW91c2VGb2N1cygpKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuYm9yZGVyLmZpbGxTdHlsZSA9IHRoaXMubm9ybWFsQnJ1c2g7XHJcblx0XHR0aGlzLmJvcmRlci50cmlnZ2VyUmVuZGVyKCk7XHJcblx0fVxyXG5cclxuXHRtb3VzZURvd25FdmVudEhhbmRsZXIoZSkge1xyXG5cdFx0aWYgKCF0aGlzLmlzRW5hYmxlZCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuYWNxdWlyZU1vdXNlRm9jdXMoKSkge1xyXG5cdFx0XHR0aGlzLmJvcmRlci5maWxsU3R5bGUgPSB0aGlzLnByZXNzZWRCcnVzaDtcclxuXHRcdFx0dGhpcy5ib3JkZXIuc3Ryb2tlU3R5bGUgPSB0aGlzLnByZXNzZWRCb3JkZXJCcnVzaDtcclxuXHRcdFx0dGhpcy5ib3JkZXIudHJpZ2dlclJlbmRlcigpO1xyXG5cdFx0fVxyXG5cdFx0ZS5kZXRhaWwuaGFuZGxlZCA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRtb3VzZVVwRXZlbnRIYW5kbGVyKGUpIHtcclxuXHRcdGlmICghdGhpcy5pc0VuYWJsZWQpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmxvc2VNb3VzZUZvY3VzKCkpIHtcclxuXHRcdFx0dGhpcy5ib3JkZXIuZmlsbFN0eWxlID0gdGhpcy5ub3JtYWxCcnVzaDtcclxuXHRcdFx0dGhpcy5ib3JkZXIuc3Ryb2tlU3R5bGUgPSB0aGlzLm5vcm1hbEJvcmRlckJydXNoO1xyXG5cdFx0XHR0aGlzLmJvcmRlci50cmlnZ2VyUmVuZGVyKCk7XHJcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrZWQnKSk7XHJcblx0XHR9XHJcblx0XHRlLmRldGFpbC5oYW5kbGVkID0gdHJ1ZTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBHYW1lQm91bmRzIGV4dGVuZHMgVUlFbGVtZW50IHtcclxuXHRjb25zdHJ1Y3RvcihwYXJlbnQsIGJvdW5kcykge1xyXG5cdFx0c3VwZXIocGFyZW50LCBib3VuZHMpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGNvbnRleHQgXHJcblx0ICovXHJcblx0bG9hZENvbnRlbnQoY29udGV4dCkge1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGNvbnRleHQgXHJcblx0ICovXHJcblx0b25SZW5kZXIoY29udGV4dCkge1xyXG5cdFx0Y29udGV4dC5kcmF3SW1hZ2UoT0VNNDM3XzgsIDAsIDAsIDI1NiwgMjU2LCAwLCAwLCAyNTYsIDI1Nik7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzXHJcbiAqIEBwcm9wZXJ0eSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjb250ZXh0XHJcbiAqL1xyXG5jbGFzcyBBcHBsaWNhdGlvbiBleHRlbmRzIFVJRWxlbWVudCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcihudWxsLCBuZXcgUmVjdGFuZ2xlKDAsIDAsIDAsIDApKTtcclxuXHJcblx0XHRVSUVsZW1lbnQucm9vdCA9IHRoaXM7XHJcblxyXG5cdFx0dGhpcy5jYW52YXMgPSBudWxsO1xyXG5cdFx0dGhpcy5jb250ZXh0ID0gbnVsbDtcclxuXHRcdHRoaXMuaXNSZW5kZXJpbmcgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHRoaXMuaXNSZW5kZXJpbmcgPSB0cnVlO1xyXG5cdFx0dGhpcy5vblJlbmRlcih0aGlzLmNvbnRleHQpO1xyXG5cdFx0dGhpcy5pc1JlbmRlcmluZyA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0b25SZW5kZXIoY29udGV4dCkge1xyXG5cdFx0Y29udGV4dC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xyXG5cdFx0Y29udGV4dC5maWxsUmVjdCh0aGlzLmJvdW5kcy54LCB0aGlzLmJvdW5kcy55LCB0aGlzLmJvdW5kcy53aWR0aCwgdGhpcy5ib3VuZHMuaGVpZ2h0KTtcclxuXHJcblx0XHRmb3IgKGxldCBuID0gMDsgbiA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBuKyspIHtcclxuXHRcdFx0Y29uc3QgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW25dO1xyXG5cdFx0XHRjaGlsZC5vblJlbmRlcihjb250ZXh0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uUmVzaXplKCkge1xyXG5cdFx0dGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHRcdHRoaXMuYm91bmRzLndpZHRoID0gdGhpcy5jYW52YXMud2lkdGg7XHJcblx0XHR0aGlzLmJvdW5kcy5oZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XHJcblx0XHR0aGlzLm9uUmVuZGVyKHRoaXMuY29udGV4dCk7XHJcblx0fVxyXG5cclxuXHRvbk1vdXNlRG93bih4LCB5LCBidXR0b25zKSB7XHJcblx0XHRpZiAoVUlFbGVtZW50Lm1vdXNlRm9jdXMgIT0gbnVsbCkge1xyXG5cdFx0XHRpZiAoVUlFbGVtZW50Lm1vdXNlRm9jdXMub25Nb3VzZURvd24oeCwgeSwgYnV0dG9ucykpIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHN1cGVyLm9uTW91c2VEb3duKHgsIHksIGJ1dHRvbnMpO1xyXG5cdH1cclxuXHJcblx0b25Nb3VzZVVwKHgsIHksIGJ1dHRvbnMpIHtcclxuXHRcdGlmIChVSUVsZW1lbnQubW91c2VGb2N1cyAhPSBudWxsKSB7XHJcblx0XHRcdGlmIChVSUVsZW1lbnQubW91c2VGb2N1cy5vbk1vdXNlVXAoeCwgeSwgYnV0dG9ucykpIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHN1cGVyLm9uTW91c2VVcCh4LCB5LCBidXR0b25zKTtcclxuXHR9XHJcblxyXG5cdG9uTW91c2VNb3ZlKHgsIHksIGJ1dHRvbnMpIHtcclxuXHRcdGlmIChVSUVsZW1lbnQubW91c2VGb2N1cyAhPSBudWxsKSB7XHJcblx0XHRcdGlmIChVSUVsZW1lbnQubW91c2VGb2N1cy5vbk1vdXNlTW92ZSh4LCB5LCBidXR0b25zKSkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gc3VwZXIub25Nb3VzZU1vdmUoeCwgeSwgYnV0dG9ucyk7XHJcblx0fVxyXG5cclxuXHRvbk1vdXNlRHJhZyh4LCB5LCBidXR0b25zKSB7XHJcblx0XHRpZiAoVUlFbGVtZW50Lm1vdXNlRm9jdXMgIT0gbnVsbCkge1xyXG5cdFx0XHRpZiAoVUlFbGVtZW50Lm1vdXNlRm9jdXMub25Nb3VzZURyYWcoeCwgeSwgYnV0dG9ucykpIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHN1cGVyLm9uTW91c2VEcmFnKHgsIHksIGJ1dHRvbnMpO1xyXG5cdH1cclxuXHJcblx0b25Mb2FkKCkge1xyXG5cdFx0dGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xyXG5cdFx0dGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcblx0XHR0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHRoaXMub25Nb3VzZURvd24oZS5jbGllbnRYLCBlLmNsaWVudFksIGUuYnV0dG9ucykpO1xyXG5cdFx0dGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGUgPT4gdGhpcy5vbk1vdXNlVXAoZS5jbGllbnRYLCBlLmNsaWVudFksIGUuYnV0dG9ucykpO1xyXG5cdFx0dGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB0aGlzLm9uTW91c2VNb3ZlKGUuY2xpZW50WCwgZS5jbGllbnRZLCBlLmJ1dHRvbnMpKTtcclxuXHJcblx0XHR0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZSA9PiB7XHJcblx0XHRcdGZvciAobGV0IG4gPSAwOyBuIDwgZS50b3VjaGVzLmxlbmd0aDsgbisrKSB7XHJcblx0XHRcdFx0Y29uc3QgdG91Y2ggPSBlLnRvdWNoZXNbbl07XHJcblx0XHRcdFx0dGhpcy5vbk1vdXNlRG93bih0b3VjaC5jbGllbnRYLCB0b3VjaC5jbGllbnRZLCAxKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBlID0+IHRoaXMub25Nb3VzZVVwKG51bGwsIG51bGwsIDEpKTtcclxuXHJcblx0XHR0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBlID0+IHtcclxuXHRcdFx0Zm9yIChsZXQgbiA9IDA7IG4gPCBlLnRvdWNoZXMubGVuZ3RoOyBuKyspIHtcclxuXHRcdFx0XHRjb25zdCB0b3VjaCA9IGUudG91Y2hlc1tuXTtcclxuXHRcdFx0XHR0aGlzLm9uTW91c2VEcmFnKHRvdWNoLmNsaWVudFgsIHRvdWNoLmNsaWVudFksIDEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4gdGhpcy5vblJlc2l6ZSgpKTtcclxuXHRcdHRoaXMub25SZXNpemUoKTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFRlc3RBcHAgZXh0ZW5kcyBBcHBsaWNhdGlvbiB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxufVxyXG5cclxuY29uc3QgZGF0YUNvbnRleHQgPSB7XHJcblx0dmFsdWU6IDBcclxufTtcclxuY29uc3QgdmFsdWVCaW5kaW5nID0gbmV3IEJpbmRpbmcoZGF0YUNvbnRleHQsICd2YWx1ZScpO1xyXG5cclxuY29uc3QgYXBwID0gbmV3IFRlc3RBcHAoKTtcclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZUJvdW5kcyhhcHAsIG5ldyBSZWN0YW5nbGUoMCwgMCwgYXBwLndpZHRoLCBhcHAuaGVpZ2h0KSk7XHJcbmFwcC5jaGlsZHJlbi5wdXNoKGdhbWUpO1xyXG5cclxuY29uc3QgYm9yZGVyID0gbmV3IEJvcmRlckVsZW1lbnQoYXBwLCBuZXcgUmVjdGFuZ2xlKDY0LCA2NCwgMjU2LCAyNTYpKTtcclxuYm9yZGVyLmNvcm5lclJhZGl1cyA9IFsgNSwgNSwgMCwgMCBdO1xyXG5ib3JkZXIuZmlsbFN0eWxlID0gJyM4YzgnO1xyXG5hcHAuY2hpbGRyZW4ucHVzaChib3JkZXIpO1xyXG5cclxuY29uc3QgYnRuID0gbmV3IEJ1dHRvbkVsZW1lbnQoYXBwLCBuZXcgUmVjdGFuZ2xlKDIwLCAxMDAsIDEyOCwgMzIpKTtcclxuYnRuLmxhYmVsLnRleHQgPSAnUHJlc3MgTWUnO1xyXG5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2tlZCcsICgpID0+IHtcclxuXHRjb25zb2xlLmxvZygnWW91IGNsaWNrZWQgaXQhJyk7XHJcblx0dmFsdWVCaW5kaW5nLnZhbHVlKys7XHJcbn0pO1xyXG5hcHAuY2hpbGRyZW4ucHVzaChidG4pO1xyXG5cclxuY29uc3QgbGJsID0gbmV3IExhYmVsRWxlbWVudChhcHAsIG5ldyBSZWN0YW5nbGUoMTAwLCAyMDAsIDEyOCwgMzIpLCB2YWx1ZUJpbmRpbmcpO1xyXG5hcHAuY2hpbGRyZW4ucHVzaChsYmwpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiBhcHAub25Mb2FkKCksIGZhbHNlKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9