webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/link.js":
/*!****************************!*\
  !*** ./components/link.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/home/henry/stuff/school/bebra/web/www/components/link.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n&:before {\n  ", "\n}\n\n\t&:hover {\n\t\t&:before {\n      scaleX(1)\n\t\t }\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tcontent: '';\n\tposition: absolute;\n\twidth: 100%;\n\theight: 0.1em;\n\tbottom: -5px;\n\tleft: 0;\n\tbackground: -webkit-linear-gradient(right, red, #008cff, #50ff00);\n\tbackground: linear-gradient(270deg, red, #008cff, #50ff00);\n\tbackground-size: 600% 600%;\n\t-webkit-animation: _2S0HYUuRGSgZN7w7T0tH4p 30s ease infinite;\n\tanimation: _2S0HYUuRGSgZN7w7T0tH4p 30s ease infinite;\n\t-webkit-transform: scaleX(0);\n\ttransform: scaleX(0);\n\t-webkit-transition: all 0.48s cubic-bezier(1, 0, 0, 1);\n\ttransition: all 0.48s cubic-bezier(1, 0, 0, 1);\n\t-webkit-transform-origin: left;\n\ttransform-origin: left;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var activeCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject());
var Link = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].a(_templateObject2(), activeCSS);

var Item = function Item(_ref) {
  var children = _ref.children,
      router = _ref.router,
      href = _ref.href;

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push(href);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    href: href,
    onClick: handleClick,
    active: router.pathname === href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, children);
};

Item.propTypes = {
  href: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  router: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Item));

/***/ })

})
//# sourceMappingURL=_app.js.c4f8f04fd11eac19e343.hot-update.js.map