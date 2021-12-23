"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _tentang = _interopRequireDefault(require("../view/pages/tentang"));

var _masuk = _interopRequireDefault(require("../view/pages/masuk"));

var _daftar = _interopRequireDefault(require("../view/pages/daftar"));

var _home = _interopRequireDefault(require("../view/pages/home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = {
  '/': _home["default"],
  '/tentang': _tentang["default"],
  '/masuk': _masuk["default"],
  '/daftar': _daftar["default"]
};
var _default = routes;
exports["default"] = _default;