"use strict";

require("regenerator-runtime");

require("bootstrap/dist/css/bootstrap.min.css");

require("../styles/style.css");

require("../styles/responsive.css");

var _app = _interopRequireDefault(require("./view/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import main from './scripts/main';
// import "./component/main-navbar.js";
var app = new _app["default"]({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent')
});
window.addEventListener('hashchange', function () {
  app.renderPage();
});
window.addEventListener('load', function () {
  app.renderPage();
});