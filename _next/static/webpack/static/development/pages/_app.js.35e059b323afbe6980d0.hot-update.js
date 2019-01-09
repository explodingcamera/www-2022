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

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tanimation-delay: 0.5s;\n\tanimation-duration: 0.6s;\n\tanimation-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);\n\ttransition: color 0.6s ease-in-out;\n\tposition: relative;\n\ttransition: color 0.6s ease-in-out;\n\n\tcolor: ", ";\n\n\t&:before {\n\t\t", "\n\t\t", "\n\t}\n\t&:hover {\n\t\tcolor: white;\n\t\t&::before {\n\t\t\ttransform: scaleX(1);\n\t\t}\n\t}\n\n\t", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tanimation: gradient 5s linear infinite;\n\t-webkit-background-clip: text;\n\t-webkit-text-fill-color: transparent;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tcontent: '';\n\tposition: absolute;\n\twidth: 100%;\n\theight: 0.1em;\n\tbottom: -5px;\n\tleft: 0;\n\tbackground: linear-gradient(270deg, #ff0000, #008cff, #50ff00);\n\tbackground-size: 600% 600%;\n\tanimation: ", " 30s ease infinite;\n\ttransform: scaleX(0);\n\ttransition: all 0.48s cubic-bezier(1, 0, 0, 1);\n\ttransform-origin: left;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  0%{background-position:0% 50%}\n  50%{background-position:100% 50%}\n  100%{background-position:0% 50%}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var gradient = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_templateObject());
var activeCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2(), gradient);
var fontColorCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3());
var Link = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].a(_templateObject4(), function (props) {
  return props.active ? 'white' : '#7e7e7e';
}, function (props) {
  return !props.animateFontColor && activeCSS;
}, function (props) {
  return props.active && 'transform: scaleX(1);';
}, function (props) {
  return props.animateFontColor && fontColorCSS;
});

var Item = function Item(_ref) {
  var children = _ref.children,
      router = _ref.router,
      href = _ref.href,
      animateFontColor = _ref.animateFontColor;

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push(href);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    href: href,
    onClick: handleClick,
    active: router.pathname === href,
    animateFontColor: animateFontColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, children);
};

Item.propTypes = {
  href: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  router: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  animateFontColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
Item.defaultProps = {
  animateFontColor: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Item));

/***/ })

})
//# sourceMappingURL=_app.js.35e059b323afbe6980d0.hot-update.js.map