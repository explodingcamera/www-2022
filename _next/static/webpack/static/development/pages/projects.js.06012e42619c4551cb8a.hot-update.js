webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "/home/henry/stuff/school/bebra/web/www/pages/projects.js";

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tflex: 1;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tmargin-right: -0.5rem;\n\tmargin-left: -0.5rem;\n\talign-items: start;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\ttext-decoration: none;\n\tuser-select: none;\n\tposition: relative;\n\tcursor: pointer;\n\tdisplay: flex;\n\talign-items: center;\n\tcolor: rgb(60, 60, 60);\n\theight: 2.7rem;\n\tfont-size: 1rem;\n\tfont-weight: 600;\n\tbox-shadow: rgba(0, 0, 0, 0.02) 0px 2px 2px 0px,\n\t\trgba(0, 0, 0, 0.1) 0px 3px 1px -2px, rgba(0, 0, 0, 0.11) 0px 1px 5px 0px;\n\tborder-radius: 5px;\n\tmargin: 0px 0.5rem 0px 0px;\n\tpadding: 0px 0.8rem;\n\toutline: none;\n\tborder-width: initial;\n\tborder-style: none;\n\tborder-color: initial;\n\tborder-image: initial;\n\tbackground: linear-gradient(\n\t\t135deg,\n\t\trgb(255, 255, 255) 10%,\n\t\trgb(219, 219, 219) 100%\n\t);\n\ttransition: all 0.2s ease-in-out 0s;\n\t&:hover {\n\t\ttransform: translateY(-1px);\n\t\tbox-shadow: rgba(0, 0, 0, 0.09) 0px 2px 2px 0px,\n\t\t\trgba(0, 0, 0, 0.1) 0px 3px 1px -2px, rgba(0, 0, 0, 0.11) 0px 1px 5px 0px;\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\twidth: calc(", "% - 1rem);\n\n\t@media only screen and (max-width: 70rem) {\n\t\twidth: calc(", "% - 1rem);\n\t}\n\t@media only screen and (max-width: 55rem) {\n\t\twidth: calc(", "% - 1rem);\n\t}\n\n\tbackground: rgba(255, 255, 255, 0.07);\n\tmargin: 0.5rem;\n\tpadding: 1rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-height: 32rem;\n\n\th1 {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tfont-size: 1.7rem;\n\t\tletter-spacing: -1px;\n\n\t\tspan {\n\t\t\tfont-size: 1rem;\n\t\t\tcolor: aqua;\n\t\t\tletter-spacing: -0.3px;\n\t\t}\n\t}\n\n\tp {\n\t\tmargin: 0;\n\t\tline-height: 1.4;\n\t\tletter-spacing: -0.3px;\n\t}\n\n\timg {\n\t\theight: 12rem;\n\t\tobject-fit: cover;\n\t\tobject-position: top;\n\t\tmargin: 1rem 0;\n\t}\n\n\tdiv:last-of-type {\n\t\tpadding-top: 1rem;\n\t\tmargin-top: auto;\n\t\tdisplay: flex;\n\t\ta {\n\t\t\ttext-decoration: none;\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var ProjectWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), 100 / 3, 100 / 2, 100 / 1);
var ProjectButton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button(_templateObject2());

var Project = function Project(_ref) {
  var title = _ref.title,
      from = _ref.from,
      img = _ref.img,
      text = _ref.text,
      buttons = _ref.buttons;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ProjectWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, title, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, from)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "/static/projects/".concat(img),
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, text), buttons && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, buttons.map(function (b) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      key: buttons.indexOf(b),
      href: b.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ProjectButton, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, b.name));
  })));
};

var Projects = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3());
var projects = [{
  title: 'canX',
  from: '2018 - now',
  img: 'canx.png',
  text: "canX is the fair and open space for everyone to share creative ideas.\nWe enable users and creators to produce content independently and get rewarded for doing what they love.",
  buttons: [{
    link: 'https://canx.org',
    name: 'canX.org'
  }]
}, {
  title: 'livecount.pro',
  from: '2017 - now',
  img: 'livecount.png',
  text: "LiveCount is a realtime follower/subscriber counter with support for multiple social networks and multiple channels at the same time. I created this just as a quick project over the course of one weekend.",
  buttons: [{
    link: 'https://livecount.pro',
    name: 'livecount.pro'
  }, {
    link: 'https://github.com/explodingcamera/livecount.pro',
    name: 'code'
  }]
}, {
  title: 'musiqpad',
  from: '2016',
  img: 'musiqpad.png',
  text: "Musiqpad was/is a social-music software platform for users to host their own rooms and enjoy music together with others. Our Team sadly doesn't have enought time for it anymore but I hope we can continue to work on it in the future.",
  buttons: [{
    link: 'https://github.com/musiqpad/mqp-server',
    name: 'code'
  }]
}, {
  title: 'musiqplus',
  from: '2016',
  img: 'musiqplus.jpg',
  text: "MusiqPlus was a Chrome plugin that enhanced the experience on musiqpad servers with a ton of extra features. This started my involvement with Musiqpad and was one of my first \"big\" projects.",
  buttons: [{
    link: 'https://github.com/explodingcamera/musiqplus',
    name: 'code'
  }]
}, {
  title: 'multitube.cf',
  from: '2016',
  img: 'musiqpad.png',
  text: "My first Node.Js Project, Multitube was a website for viewing two youtube videos side-by-side. I was inspired by youtubemultiplier but their implementation was lacking features and ux was horrible so I build my own site.",
  buttons: [{
    link: 'https://github.com/explodingcamera/multitube',
    name: 'code'
  }]
}];

var ProjectsComponent = function ProjectsComponent() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Projects, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, projects.map(function (p) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Project, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: projects.indexOf(p)
    }, p, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectsComponent);

/***/ })

})
//# sourceMappingURL=projects.js.06012e42619c4551cb8a.hot-update.js.map