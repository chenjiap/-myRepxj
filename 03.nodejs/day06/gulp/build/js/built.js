(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _module = _interopRequireDefault(require("./module1"));

var _module2 = require("./module2");

var _module3 = require("./module3");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable */
console.log((0, _module["default"])(7, 7));
console.log(_module2.name, _module2.age);
console.log((0, _module3.mul)(2, 3));
console.log((0, _module3.count)(2, 1));
/* eslint-enable */
},{"./module1":2,"./module2":3,"./module3":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function add(x, y) {
  return x + y;
}

var _default = add;
exports["default"] = _default;
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.age = exports.name = void 0;
var name = 'jsck';
exports.name = name;
var age = 18;
exports.age = age;
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mul = mul;
exports.count = count;

function mul(x, y) {
  return x * y;
}

function count(x, y) {
  return x - y;
}
},{}]},{},[1])