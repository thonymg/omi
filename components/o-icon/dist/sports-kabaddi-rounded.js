(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["sports-kabaddi-rounded"] = factory(require("omi"));
	else
		root["sports-kabaddi-rounded"] = factory(root["Omi"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_omi__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./esm/sports-kabaddi-rounded.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./esm/sports-kabaddi-rounded.js":
/*!***************************************!*\
  !*** ./esm/sports-kabaddi-rounded.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ \"omi\");\nvar createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ \"./esm/utils/createSvgIcon.js\");\nexports.default = createSvgIcon_1.default(omi_1.h(omi_1.h.f, null, omi_1.h(\"circle\", {\n    cx: \"16.5\",\n    cy: \"2.38\",\n    r: \"2\"\n}), omi_1.h(\"path\", {\n    d: \"M24 10.88v-3.7l-4.99-2.11c-.98-.41-2.12-.07-2.71.81l-1 1.6c-.67 1.18-1.91 2.06-3.41 2.32l.06.06c.69.69 1.52 1.07 2.46 1.17.8-.42 1.52-.98 2.09-1.64l.6 3-1.16 1.1-.94.89v6.5c0 .55.45 1 1 1s1-.45 1-1v-5l2.1-2 1.62 7.19c.11.47.53.81 1.02.81.66 0 1.15-.6 1.02-1.24l-1.94-9.76-.62-3.1 1.8.7v2.4c0 .55.45 1 1 1s1-.45 1-1zM10.29 8.09c.22.15.47.24.72.29.13.02.25.04.38.04s.26-.01.38-.04c.13-.02.25-.06.37-.11.24-.1.47-.24.66-.44.49-.49.67-1.17.55-1.8-.07-.37-.25-.74-.55-1.03-.19-.19-.42-.34-.66-.44-.12-.05-.24-.09-.37-.11s-.25-.04-.38-.04c-.12 0-.23.01-.35.03-.14.02-.28.06-.41.11-.23.11-.46.26-.65.45-.3.29-.48.66-.55 1.03-.12.63.06 1.31.55 1.8.09.1.2.18.31.26z\"\n}), omi_1.h(\"path\", {\n    d: \"M11.24 10.56l-2-2c-.1-.1-.2-.18-.31-.26-.22-.14-.47-.24-.72-.28-.13-.03-.25-.04-.38-.04-.51 0-1.02.2-1.41.59l-3.34 3.34c-.41.41-.62.98-.58 1.54 0 .18.04.37.11.55l1.07 2.95-2.92 2.92c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l3.54-3.54v-2.22L7 16.75v4.13c0 .55.45 1 1 1s1-.45 1-1v-5l-2.12-2.12 2.36-2.36.71.71c1.02 1 2.28 1.69 3.79 1.94.64.11 1.21-.45 1.16-1.1-.03-.48-.4-.87-.87-.94-1.13-.18-2.06-.72-2.79-1.45z\"\n})), 'SportsKabaddiRounded');\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/sports-kabaddi-rounded.js?");

/***/ }),

/***/ "./esm/utils/createSvgIcon.js":
/*!************************************!*\
  !*** ./esm/utils/createSvgIcon.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ \"omi\");\nvar hyphenateRE = /\\B([A-Z])/g;\nvar hyphenate = function (str) {\n    return str.replace(hyphenateRE, '-$1').toLowerCase();\n};\nfunction createSvgIcon(path, displayName) {\n    omi_1.define(hyphenate('OIcon' + displayName), function (_) {\n        return omi_1.h('svg', __assign({ viewBox: \"0 0 24 24\", title: displayName }, _.props), path);\n    }, {\n        css: \":host {\\n  fill: currentColor;\\n  width: 1em;\\n  height: 1em;\\n  display: inline-block;\\n  font-size: 1.5rem;\\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  flex-shrink: 0;\\n  user-select: none;\\n}\"\n    });\n}\nexports.default = createSvgIcon;\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?");

/***/ }),

/***/ "omi":
/*!******************************************************************************!*\
  !*** external {"commonjs":"omi","commonjs2":"omi","amd":"omi","root":"Omi"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?");

/***/ })

/******/ })["default"];
});