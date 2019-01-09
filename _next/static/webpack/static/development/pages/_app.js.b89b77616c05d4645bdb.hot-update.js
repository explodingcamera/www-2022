webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/link.js":
/*!****************************!*\
  !*** ./components/link.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/henry/stuff/school/bebra/web/www/components/link.js";



var ActiveLink = function ActiveLink(_ref) {
  var children = _ref.children,
      router = _ref.router,
      href = _ref.href;
  var style = {
    marginRight: 10,
    color: router.pathname === href ? 'red' : 'black'
  };

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push(href);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: href,
    onClick: handleClick,
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ActiveLink));

/***/ })

})
//# sourceMappingURL=_app.js.b89b77616c05d4645bdb.hot-update.js.map