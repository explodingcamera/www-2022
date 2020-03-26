webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _this = undefined,
    _jsxFileName = "/home/henry/stuff/git/www/pages/projects.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var ProjectWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "projects__ProjectWrapper",
  componentId: "xbl6s3-0"
})(["width:calc(", "% - 1rem);@media only screen and (max-width:70rem){width:calc(", "% - 1rem);}@media only screen and (max-width:55rem){width:calc(", "% - 1rem);}background:rgba(255,255,255,0.07);margin:0.5rem;padding:1rem;display:flex;flex-direction:column;min-height:33.5rem;box-shadow:0px 0px 7px 0px rgba(0,0,0,0.35);h1{display:flex;justify-content:space-between;align-items:center;font-size:1.7rem;letter-spacing:-1px;span{font-size:1rem;color:aqua;letter-spacing:-0.3px;}}p{margin:0;line-height:1.4;letter-spacing:-0.3px;text-shadow:0px 0px 5px black;}img{height:12rem;object-fit:cover;object-position:top;margin:1rem 0;box-shadow:0px 0px 8px 5px rgba(0,0,0,0.6);}div:last-of-type{padding-top:1rem;margin-top:auto;display:flex;a{text-decoration:none;}}"], 100 / 3, 100 / 2, 100 / 1);
var ProjectButton = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "projects__ProjectButton",
  componentId: "xbl6s3-1"
})(["text-decoration:none;user-select:none;position:relative;cursor:pointer;display:flex;align-items:center;color:rgb(255,255,255);height:2.7rem;font-size:1rem;font-weight:600;box-shadow:rgba(0,0,0,0.02) 0px 2px 2px 0px,rgba(0,0,0,0.1) 0px 3px 1px -2px,rgba(0,0,0,0.11) 0px 1px 5px 0px;margin:0px 0.5rem 0px 0px;padding:0px 0.8rem;outline:none;border-width:initial;border-style:none;border-color:initial;border-image:initial;background:linear-gradient( 135deg,rgba(97,97,97,0.63) 10%,rgba(72,72,72,0.15) 100% );transition:all 0.2s ease-in-out 0s;&:hover{transform:translateY(-1px);box-shadow:rgba(0,0,0,0.09) 0px 2px 2px 0px,rgba(0,0,0,0.1) 0px 3px 1px -2px,rgba(0,0,0,0.11) 0px 1px 5px 0px;}"]);

var Project = function Project(_ref) {
  var title = _ref.title,
      from = _ref.from,
      img = _ref.img,
      text = _ref.text,
      buttons = _ref.buttons;
  return __jsx(ProjectWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 2
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 3
    }
  }, title, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 4
    }
  }, from)), __jsx("img", {
    src: "static/projects/".concat(img),
    alt: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 3
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 3
    }
  }, text), buttons && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 4
    }
  }, buttons.map(function (b) {
    return __jsx("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      key: buttons.indexOf(b),
      href: b.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 6
      }
    }, __jsx(ProjectButton, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 7
      }
    }, b.name));
  })));
};

var Projects = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "projects__Projects",
  componentId: "xbl6s3-2"
})(["flex:1;display:flex;flex-wrap:wrap;margin-right:-0.5rem;margin-left:-0.5rem;align-items:start;"]);
var projects = [{
  title: 'TwoWeeksOfFood',
  from: '2020',
  img: 'twof.jpeg',
  text: "Created at the #wirvsvirus hackathon, TwoWeeksOfFood aims to solve some of the supply issues created by the CORVID-19 Crisis. (Created with Arthur Hoge)",
  buttons: [{
    link: 'https://twoweeksoffood.netlify.com',
    name: 'website'
  }, {
    link: 'https://www.linkedin.com/posts/arthurhoge_wevsvirus-activity-6648368790553800704-gTAQ',
    name: 'more infos'
  }, {
    link: 'https://github.com/twoweeksoffood/twoweeksoffood',
    name: "code"
  }]
}, {
  title: 'recordskip',
  from: '2019',
  img: 'recordskip.jpeg',
  text: "Recordskip was my first semester-project at Code University. It's an app for vinyl music lovers that tracks your collection and gives you music recomendations for your vinyl collation.",
  buttons: [{
    link: 'https://github.com/recordskip/recordskip-app',
    name: 'code'
  }]
}, {
  title: 'canX',
  from: '2018 - now',
  img: 'canx-min.png',
  text: "canX is the fair and open space for everyone to share creative ideas.\nWe enable users and creators to produce content independently and get rewarded for doing what they love.",
  buttons: [{
    link: 'https://canx.org',
    name: 'canX.org'
  }]
}, {
  title: 'livecount.pro',
  from: '2017 - 2019',
  img: 'livecount-min.png',
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
  img: 'musiqpad-min.png',
  text: "Musiqpad was/is a social-music software platform for users to host their own rooms and enjoy music together with others. Our Team sadly doesn't have enought time for it anymore but I hope we can continue to work on it in the future.",
  buttons: [{
    link: 'https://github.com/musiqpad/mqp-server',
    name: 'code'
  }]
}, {
  title: 'musiqplus',
  from: '2015-2016',
  img: 'musiqplus.jpg',
  text: "MusiqPlus was a Chrome plugin that enhanced the experience on musiqpad servers with a ton of extra features. This started my involvement with Musiqpad and was one of my first \"big\" projects.",
  buttons: [{
    link: 'https://github.com/explodingcamera/musiqplus',
    name: 'code'
  }]
}, {
  title: 'multitube.cf',
  from: '2014',
  img: 'multitube-min.png',
  text: "My first Node.Js Project, Multitube was a website for viewing two youtube videos side-by-side. I was inspired by youtubemultiplier but their implementation was lacking features and ux was horrible so I build my own site.",
  buttons: [{
    link: 'https://github.com/explodingcamera/multitube',
    name: 'code'
  }]
}];

var ProjectsComponent = function ProjectsComponent() {
  return __jsx(Projects, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 2
    }
  }, projects.map(function (p) {
    return __jsx(Project, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: projects.indexOf(p)
    }, p, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 4
      }
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectsComponent);

/***/ })

})
//# sourceMappingURL=projects.js.8783d68a63e302af97ee.hot-update.js.map