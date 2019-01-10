webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link */ "./components/link.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.mjs");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");

var _jsxFileName = "/home/henry/stuff/school/bebra/web/www/components/header.js";

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tmargin-right: 0.5rem;\n\tdisplay: flex;\n\n\tanimation-duration: 0.6s;\n\tanimation-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);\n\tanimation-fill-mode: forwards;\n\tanimation-name: ", ";\n\ttransform: translateY(1.6rem);\n\tanimation-delay: ", ";\n\n\t&:last-of-type {\n\t\tmargin-right: 0;\n\t}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tmargin-right: auto;\n\tfont-size: 1rem;\n\n\tanimation-duration: 0.6s;\n\tanimation-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);\n\tanimation-fill-mode: forwards;\n\tanimation-name: ", ";\n\ttransform: translateY(1.6rem);\n\tanimation-delay: 0s;\n\n\t@media only screen and (max-width: 30rem) {\n\t\tdisplay: none;\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tol {\n\t\tlist-style: none;\n\t\tpadding: 0;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tmin-height: 1.8rem;\n\t\tmargin: 1rem 0 2rem 0;\n\t\toverflow: hidden;\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t0% {transform: translateY(1.6rem);}\n\t100% {transform: translateY(0);}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var slideIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_templateObject());
var Header = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav(_templateObject2());
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li(_templateObject3(), slideIn);
var Item = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li(_templateObject4(), slideIn, function (props) {
  return props.delay;
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/",
    animateFontColor: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "explodingcamera")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    delay: ".2s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    delay: ".3s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "projects")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    delay: ".4s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/me",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "about me")), "\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    delay: ".5s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "https://twitter.com/explodingcamera",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiTwitter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    delay: ".6s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "https://github.com/explodingcamera",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiGithub"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    delay: ".7s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "https://keybase.io/explodingcamera/pgp_keys.asc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaKey"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    delay: ".8s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "https://www.linkedin.com/in/henrygressmann/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiLinkedin"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })))));
});

/***/ })

})
//# sourceMappingURL=_app.js.99b1551937c6d0577c07.hot-update.js.map