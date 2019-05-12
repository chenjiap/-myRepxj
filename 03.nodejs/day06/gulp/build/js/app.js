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