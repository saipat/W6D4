/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection{\n  constructor(nodes){\n    this.nodes = nodes;\n  }\n  \n  html (string) {\n    if (string === undefined) {\n      //return inner html of the first node inthe array\n      return this.nodes[0].innerHTML;\n      \n    } else {\n      //string will become the innerhtml for each of the nodes\n      for(let i = 0; i< this.nodes; i++) {\n        this.nodes[i].innerHTML = string;\n      }\n    }\n  }\n  \n  empty () {\n    for(let i = 0; i< this.nodes; i++) {\n      this.nodes[i].html(\"\");\n    }\n  }\n  \n  append (child) {\n    //string\n    //jquery object\n    //htmlElement\n    if (typeof child === \"string\") {\n      for(let i = 0; i < this.length; i++) {\n        this[i].innerHTML += child;\n      }\n    } else if (typeof child === \"object\" && !(child instanceof DOMNodeCollection)) {\n      child = $l(child);\n      this.nodes.push(child);  \n    } else {\n      this.nodes.push(child);\n    }\n  }\n  \n  addClass (name) {\n    for(let n = 0; n < this.nodes.length; n++){\n      const node = this.nodes[n];\n      node.classList.add(name);\n    }\n  }\n  \n  removeClass(oldClass) {\n    for(let n = 0; n < this.nodes.length; n++){\n      const node = this.nodes[n];\n      node.classList.remove(oldClass);\n    }\n  }\n\n  attr (dataType, value) {\n    if (value === undefined) {\n      return this.nodes[0].getAttribute(dataType);\n    } else {\n      for(let n = 0; n < this.nodes.length; n++){\n        const node = this.nodes[n];\n        node.setAttribute(dataType, value);\n      }\n    }\n  }\n  \n  children(){\n    const childArray = [];\n    for(let n=0; n<this.nodes.length; n++){\n      const node = this.nodes[n];\n      for(let i = 0; i< node.children.length; i++){\n        childArray.push(node.children[i]);\n      }\n    }\n    return new DOMNodeCollection(childArray);\n  }\n  \n  parent () {\n    const parentArray = [];\n    for(let n=0; n<this.nodes.length; n++){\n      const node = this.nodes[n];\n      parentArray.push(node.parentNode);\n    }\n    return new DOMNodeCollection(parentArray);\n  }\n  \n  find (selector) {\n    const selectorArray = [];\n    const nodeList = document.querySelectorAll(selector);\n    for (let i = 0; i < nodeList.length; i++) {\n      selectorArray.push(nodeList[i]);\n    }\n    return new DOMNodeCollection(selectorArray);\n  }\n  \n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__ (/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nfunction $l(selector){\n  // console.log(this);\n  const array = [];\n  if(selector instanceof HTMLElement){\n    array.push(selector);\n    return new DOMNodeCollection(array);\n  }else {\n    let elements = document.querySelectorAll(selector);\n    elements = Array.from(elements);\n    return new DOMNodeCollection(elements);\n  }\n}\n\nwindow.$l = $l;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });