(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/0+H":function(t,e,n){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=i(n("q1tI")),o=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,i=t.hybrid,r=void 0!==i&&i,o=t.hasQuery;return n||r&&(void 0!==o&&o)}e.isInAmpMode=a,e.useAmp=function(){return a(r.default.useContext(o.AmpStateContext))}},0:function(t,e,n){n("GcxT"),t.exports=n("nOHt")},"1KBa":function(t,e,n){"use strict";var i=n("q1tI"),r=n.n(i),o=n("vOnD"),a=n("nOHt"),s=r.a.createElement,l=Object(o.d)(["0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}"]),u=Object(o.b)(["content:'';position:absolute;width:100%;height:2px;bottom:-5px;left:0;background:linear-gradient(270deg,#ff0000,#008cff,#50ff00);background-size:600% 600%;animation:"," 30s ease infinite;transform:scaleX(0);transition:all 0.48s cubic-bezier(1,0,0,1);transform-origin:left;"],l),c=Object(o.b)(["background:linear-gradient(270deg,#ff0000,#008cff,#50ff00);background-size:600% 600%;animation:"," 5s linear infinite;-webkit-background-clip:text;-webkit-text-fill-color:transparent;"],l),h=o.c.a.withConfig({displayName:"link__Link",componentId:"sc-1xpsa6j-0"})(["animation-delay:0.5s;animation-duration:0.6s;animation-timing-function:cubic-bezier(0.46,0.03,0.52,0.96);transition:color 0.6s ease-in-out;position:relative;transition:color 0.6s ease-in-out;text-decoration:none;color:",";&:before{"," ","}&:hover{color:white;"," &::before{transform:scaleX(1);}}svg{display:flex;height:1.3rem;width:1.3rem;color:white;}"],(function(t){return t.active||t.animateFontColor?"white":"#7e7e7e"}),(function(t){return!t.animateFontColor&&u}),(function(t){return t.active&&"transform: scaleX(1);"}),(function(t){return t.animateFontColor&&c})),f=function(t){var e=t.children,n=t.router,i=t.href,r=t.animateFontColor;return s(h,{href:i,onClick:i.includes(":")?void 0:function(t){t.preventDefault(),n.push(i)},active:n.pathname===i,animateFontColor:r},e)};f.defaultProps={animateFontColor:!1},e.a=Object(a.withRouter)(f)},"1TCz":function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function a(t){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t){return(s="function"===typeof Symbol&&"symbol"===a(Symbol.iterator)?function(t){return a(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":a(t)})(t)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,e){return!e||"object"!==s(e)&&"function"!==typeof e?l(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}n.r(e),n.d(e,"default",(function(){return W}));var d=n("q1tI"),p=n.n(d),m=n("vOnD"),v=n("8Bbg"),y=n.n(v),b=n("8Kt/"),g=n.n(b);var w=n("patp"),x=n.n(w),k=p.a.createElement;function C(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var O=m.c.div.withConfig({displayName:"background__Background",componentId:"sc-17bnv8w-0"})(["position:fixed;top:0;left:0;right:0;bottom:0;background:black;z-index:-1;overflow:hidden;display:flex;justify-content:center;align-items:center;> video{height:130vh;flex:1;object-fit:cover;}> div{position:absolute;background:rgba(0,0,0,0.6);height:100vh;width:100vw;}"]),S=function(t){f(r,t);var e,n=(e=r,function(){var t,n=c(e);if(C()){var i=c(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return u(this,t)});function r(){var t,e,o,a;i(this,r);for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];return t=n.call.apply(n,[this].concat(u)),e=l(t),o="background",a=p.a.createRef(),o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,t}return o(r,[{key:"componentDidMount",value:function(){var t=this.background.current;this.parallax=new x.a(t,{})}},{key:"render",value:function(){return k(O,{ref:this.background},k("video",{"data-depth":"0.3",autoPlay:!0,loop:!0,muted:!0,preload:"auto"},k("source",{src:"/static/bg.webm",type:'video/webm; codecs="vp8, vorbis"'}),k("source",{src:"/static/bg.mp4",type:"video/mp4"})),k("div",{"data-depth":"0"}))}}]),r}(p.a.Component),Y=n("1KBa"),X=n("Lnxd"),j=function(t){return Object(X.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}}]})(t)};j.displayName="FiGithub";var P=function(t){return Object(X.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"}},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"}}]})(t)};P.displayName="FiLinkedin";var R=function(t){return Object(X.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}}]})(t)};R.displayName="FiTwitter";var T=n("ma3e"),_=p.a.createElement,E=Object(m.d)(["0%{transform:translateY(1.6rem);}100%{transform:translateY(0);}"]),M=m.c.nav.withConfig({displayName:"header__Header",componentId:"sc-11fssh3-0"})(["ol{list-style:none;padding:0;display:flex;justify-content:center;align-items:center;min-height:1.8rem;margin:1rem 0 2rem 0;overflow:hidden;}"]),D=m.c.li.withConfig({displayName:"header__Title",componentId:"sc-11fssh3-1"})(["margin-right:auto;font-size:1rem;animation-duration:0.6s;animation-timing-function:cubic-bezier(0.46,0.03,0.52,0.96);animation-fill-mode:forwards;animation-name:",";transform:translateY(1.6rem);animation-delay:0s;@media only screen and (max-width:30rem){display:none;}"],E),z=m.c.li.withConfig({displayName:"header__Item",componentId:"sc-11fssh3-2"})(["margin-right:0.5rem;display:flex;animation-duration:0.6s;animation-timing-function:cubic-bezier(0.46,0.03,0.52,0.96);animation-fill-mode:forwards;animation-name:",";transform:translateY(1.6rem);animation-delay:",";&:last-of-type{margin-right:0;}"],E,(function(t){return t.delay})),A=function(){return _(M,null,_("ol",null,_(D,null,_(Y.a,{prefetch:!0,href:"/",animateFontColor:!0},"explodingcamera")),_(z,{delay:".2s"},_(Y.a,{prefetch:!0,href:"/"},"home")),_(z,{delay:".3s"},_(Y.a,{prefetch:!0,href:"/projects"},"projects")),_(z,{delay:".4s"},_(Y.a,{prefetch:!0,href:"/me"},"about me")),"\xa0",_(z,{delay:".5s"},_(Y.a,{href:"https://twitter.com/explodingcamera"},_(R,null))),_(z,{delay:".6s"},_(Y.a,{href:"https://github.com/explodingcamera"},_(j,null))),_(z,{delay:".7s"},_(Y.a,{href:"https://keybase.io/explodingcamera/pgp_keys.asc"},_(T.a,null))),_(z,{delay:".8s"},_(Y.a,{href:"https://www.linkedin.com/in/henrygressmann/"},_(P,null)))))},F=p.a.createElement;function I(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function N(){var t,e,n=(t=["\n\t","\n\th1,\n\th2, \n\th3,\n\th4,\n\th5,\n\th6 {\n\t\tmargin: 0;\n\t}\n\tbody {\n\t\tposition: absolute;\n    width: 100vw;\n    overflow-x: hidden;\n\t}\n"],e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}})));return N=function(){return n},n}var L=Object(m.a)(N(),"/*! modern-normalize v0.6.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\n:root {\n\t-moz-tab-size: 4;\n\ttab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\nAdd the correct height in Firefox.\n*/\n\nhr {\n\theight: 0;\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nCorrect the padding in Firefox.\n*/\n\nfieldset {\n\tpadding: 0.35em 0.75em 0.625em;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n[type='search']::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n"),q=m.c.div.withConfig({displayName:"_app__Layout",componentId:"sc-1ijjqfy-0"})(["font-family:'Roboto Mono','Menlo','DejaVu Sans Mono','Bitstream Vera Sans Mono',Courier,monospace;color:white;display:flex;flex-direction:column;min-height:100vh;width:100%;max-width:1280px;padding:2rem 3rem;margin:0 auto;> div{flex:1;}"]),W=function(t){f(r,t);var e,n=(e=r,function(){var t,n=c(e);if(I()){var i=c(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return u(this,t)});function r(){return i(this,r),n.apply(this,arguments)}return o(r,[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return F(p.a.Fragment,null,F(g.a,null,F("title",null,"henrygressmann.de")),F(L,null),F(S,null),F(q,null,F(A,null),F(e,n)))}}]),r}(y.a)},"7W2i":function(t,e,n){var i=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},"8Kt/":function(t,e,n){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=i(n("q1tI")),o=i(n("Xuae")),a=n("lwAK"),s=n("FYa8"),l=n("/0+H");function u(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function c(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=u;var h=["name","httpEquiv","charSet","itemProp"];function f(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(c,[]).reverse().concat(u(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,i={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var a=r.key.slice(r.key.indexOf("$")+1);t.has(a)?o=!1:t.add(a)}switch(r.type){case"title":case"base":e.has(r.type)?o=!1:e.add(r.type);break;case"meta":for(var s=0,l=h.length;s<l;s++){var u=h[s];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var c=r.props[u],f=i[u]||new Set;f.has(c)?o=!1:(f.add(c),i[u]=f)}}}return o}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}var d=o.default();function p(t){var e=t.children;return r.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return r.default.createElement(s.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:l.isInAmpMode(t)},e)}))}))}p.rewind=d.rewind,e.default=p},B5Ud:function(t,e,n){"use strict";var i=n("lwsE"),r=n("W8MJ"),o=n("a1gu"),a=n("Nsbk"),s=n("7W2i"),l=n("o0o1");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var c=n("TqRt");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=m,e.default=void 0;var h=c(n("q1tI")),f=n("g/15");function d(t){var e,n,i;return l.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.Component,n=t.ctx,r.next=3,l.awrap((0,f.loadGetInitialProps)(e,n));case 3:return i=r.sent,r.abrupt("return",{pageProps:i});case 5:case"end":return r.stop()}}),null,null,null,Promise)}e.AppInitialProps=f.AppInitialProps;var p=function(t){s(l,t);var e,n=(e=l,function(){var t,n=a(e);if(u()){var i=a(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return o(this,t)});function l(){return i(this,l),n.apply(this,arguments)}return r(l,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,i=t.pageProps,r=t.__N_SSG,o=t.__N_SSP;return h.default.createElement(n,Object.assign({},i,r||o?{}:{url:m(e)}))}}]),l}(h.default.Component);function m(t){var e=t.pathname,n=t.asPath,i=t.query;return{get query(){return i},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var i=n?e:"",r=n||e;return t.push(i,r)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var i=n?e:"",r=n||e;return t.replace(i,r)}}}e.default=p,p.origGetInitialProps=d,p.getInitialProps=d},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var r=i(n("q1tI"));e.HeadManagerContext=r.createContext(null)},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},Ijbi:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},Lnxd:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n("q1tI"),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=i.createContext&&i.createContext(r),a=function(){return(a=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},s=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&(n[i[r]]=t[i[r]])}return n};function l(t){return function(e){return i.createElement(u,a({attr:a({},t.attr)},e),function t(e){return e&&e.map((function(e,n){return i.createElement(e.tag,a({key:n},e.attr),t(e.child))}))}(t.child))}}function u(t){var e=function(e){var n,r=t.size||e.size||"1em";e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className);var o=t.attr,l=t.title,u=s(t,["attr","title"]);return i.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,u,{className:n,style:a({color:t.color||e.color},e.style,t.style),height:r,width:r,xmlns:"http://www.w3.org/2000/svg"}),l&&i.createElement("title",null,l),t.children)};return void 0!==o?i.createElement(o.Consumer,null,(function(t){return e(t)})):e(r)}},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},RIqP:function(t,e,n){var i=n("Ijbi"),r=n("EbDI"),o=n("Bnag");t.exports=function(t){return i(t)||r(t)||o()}},Xuae:function(t,e,n){"use strict";var i=n("lwsE"),r=n("PJYZ"),o=n("W8MJ"),a=n("a1gu"),s=n("Nsbk"),l=n("7W2i"),u=n("RIqP");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(e,"__esModule",{value:!0});var h=n("q1tI"),f=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(u(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(u){l(p,u);var h,d=(h=p,function(){var t,e=s(h);if(c()){var n=s(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return a(this,t)});function p(t){var o;return i(this,p),o=d.call(this,t),f&&(e.add(r(o)),n(r(o))),o}return o(p,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),o(p,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),p}(h.Component)}},a1gu:function(t,e,n){var i=n("cDf5"),r=n("PJYZ");t.exports=function(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?r(t):e}},lwAK:function(t,e,n){"use strict";var i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var r=i(n("q1tI"));e.AmpStateContext=r.createContext({})},patp:function(t,e,n){(function(e){var n;t.exports=function t(e,i,r){function o(s,l){if(!i[s]){if(!e[s]){if(!l&&"function"==typeof n&&n)return n(s,!0);if(a)return a(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=i[s]={exports:{}};e[s][0].call(c.exports,(function(t){var n=e[s][1][t];return o(n||t)}),c,c.exports,t,e,i,r)}return i[s].exports}for(var a="function"==typeof n&&n,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(t,e,n){"use strict";var i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}e.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(t){i[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(r){return!1}}()?Object.assign:function(t,e){for(var n,s,l=a(t),u=1;u<arguments.length;u++){for(var c in n=Object(arguments[u]))r.call(n,c)&&(l[c]=n[c]);if(i){s=i(n);for(var h=0;h<s.length;h++)o.call(n,s[h])&&(l[s[h]]=n[s[h]])}}return l}},{}],2:[function(t,e,n){(function(t){(function(){var n,i,r,o,a,s;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},i=t.hrtime,o=(n=function(){var t;return 1e9*(t=i())[0]+t[1]})(),s=1e9*t.uptime(),a=o-s):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)}).call(this,t("_process"))},{_process:3}],3:[function(t,e,n){var i,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function l(t){if(i===setTimeout)return setTimeout(t,0);if((i===a||!i)&&setTimeout)return i=setTimeout,setTimeout(t,0);try{return i(t,0)}catch(e){try{return i.call(null,t,0)}catch(e){return i.call(this,t,0)}}}!function(){try{i="function"===typeof setTimeout?setTimeout:a}catch(t){i=a}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var u,c=[],h=!1,f=-1;function d(){h&&u&&(h=!1,u.length?c=u.concat(c):f=-1,c.length&&p())}function p(){if(!h){var t=l(d);h=!0;for(var e=c.length;e;){for(u=c,c=[];++f<e;)u&&u[f].run();f=-1,e=c.length}u=null,h=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function v(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new m(t,e)),1!==c.length||h||l(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},{}],4:[function(t,n,i){(function(e){for(var i=t("performance-now"),r="undefined"===typeof window?e:window,o=["moz","webkit"],a="AnimationFrame",s=r["request"+a],l=r["cancel"+a]||r["cancelRequest"+a],u=0;!s&&u<o.length;u++)s=r[o[u]+"Request"+a],l=r[o[u]+"Cancel"+a]||r[o[u]+"CancelRequest"+a];if(!s||!l){var c=0,h=0,f=[];s=function(t){if(0===f.length){var e=i(),n=Math.max(0,1e3/60-(e-c));c=n+e,setTimeout((function(){var t=f.slice(0);f.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(c)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return f.push({handle:++h,callback:t,cancelled:!1}),h},l=function(t){for(var e=0;e<f.length;e++)f[e].handle===t&&(f[e].cancelled=!0)}}n.exports=function(t){return s.call(r,t)},n.exports.cancel=function(){l.apply(r,arguments)},n.exports.polyfill=function(){r.requestAnimationFrame=s,r.cancelAnimationFrame=l}}).call(this,"undefined"!==typeof e?e:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{})},{"performance-now":2}],5:[function(t,e,n){"use strict";var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=t("raf"),o=t("object-assign"),a={propertyCache:{},vendors:[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],clamp:function(t,e,n){return e<n?t<e?e:t>n?n:t:t<n?n:t>e?e:t},data:function(t,e){return a.deserialize(t.getAttribute("data-"+e))},deserialize:function(t){return"true"===t||"false"!==t&&("null"===t?null:!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):t)},camelCase:function(t){return t.replace(/-+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))},accelerate:function(t){a.css(t,"transform","translate3d(0,0,0) rotate(0.0001deg)"),a.css(t,"transform-style","preserve-3d"),a.css(t,"backface-visibility","hidden")},transformSupport:function(t){for(var e=document.createElement("div"),n=!1,i=null,r=!1,o=null,s=null,l=0,u=a.vendors.length;l<u;l++)if(null!==a.vendors[l]?(o=a.vendors[l][0]+"transform",s=a.vendors[l][1]+"Transform"):(o="transform",s="transform"),void 0!==e.style[s]){n=!0;break}switch(t){case"2D":r=n;break;case"3D":if(n){var c=document.body||document.createElement("body"),h=document.documentElement,f=h.style.overflow,d=!1;document.body||(d=!0,h.style.overflow="hidden",h.appendChild(c),c.style.overflow="hidden",c.style.background=""),c.appendChild(e),e.style[s]="translate3d(1px,1px,1px)",r=void 0!==(i=window.getComputedStyle(e).getPropertyValue(o))&&i.length>0&&"none"!==i,h.style.overflow=f,c.removeChild(e),d&&(c.removeAttribute("style"),c.parentNode.removeChild(c))}}return r},css:function(t,e,n){var i=a.propertyCache[e];if(!i)for(var r=0,o=a.vendors.length;r<o;r++)if(i=null!==a.vendors[r]?a.camelCase(a.vendors[r][1]+"-"+e):e,void 0!==t.style[i]){a.propertyCache[e]=i;break}t.style[i]=n}},s={relativeInput:!1,clipRelativeInput:!1,inputElement:null,hoverOnly:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!1,precision:1,onReady:null,selector:null},l=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=e;var i={calibrateX:a.data(this.element,"calibrate-x"),calibrateY:a.data(this.element,"calibrate-y"),invertX:a.data(this.element,"invert-x"),invertY:a.data(this.element,"invert-y"),limitX:a.data(this.element,"limit-x"),limitY:a.data(this.element,"limit-y"),scalarX:a.data(this.element,"scalar-x"),scalarY:a.data(this.element,"scalar-y"),frictionX:a.data(this.element,"friction-x"),frictionY:a.data(this.element,"friction-y"),originX:a.data(this.element,"origin-x"),originY:a.data(this.element,"origin-y"),pointerEvents:a.data(this.element,"pointer-events"),precision:a.data(this.element,"precision"),relativeInput:a.data(this.element,"relative-input"),clipRelativeInput:a.data(this.element,"clip-relative-input"),hoverOnly:a.data(this.element,"hover-only"),inputElement:document.querySelector(a.data(this.element,"input-element")),selector:a.data(this.element,"selector")};for(var r in i)null===i[r]&&delete i[r];o(this,s,i,n),this.inputElement||(this.inputElement=this.element),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.elementPositionX=0,this.elementPositionY=0,this.elementWidth=0,this.elementHeight=0,this.elementCenterX=0,this.elementCenterY=0,this.elementRangeX=0,this.elementRangeY=0,this.calibrationX=0,this.calibrationY=0,this.inputX=0,this.inputY=0,this.motionX=0,this.motionY=0,this.velocityX=0,this.velocityY=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onDeviceMotion=this.onDeviceMotion.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onMotionTimer=this.onMotionTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.windowWidth=null,this.windowHeight=null,this.windowCenterX=null,this.windowCenterY=null,this.windowRadiusX=null,this.windowRadiusY=null,this.portrait=!1,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.motionSupport=!!window.DeviceMotionEvent&&!this.desktop,this.orientationSupport=!!window.DeviceOrientationEvent&&!this.desktop,this.orientationStatus=0,this.motionStatus=0,this.initialise()}return i(t,[{key:"initialise",value:function(){void 0===this.transform2DSupport&&(this.transform2DSupport=a.transformSupport("2D"),this.transform3DSupport=a.transformSupport("3D")),this.transform3DSupport&&a.accelerate(this.element),"static"===window.getComputedStyle(this.element).getPropertyValue("position")&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)}},{key:"doReadyCallback",value:function(){this.onReady&&this.onReady()}},{key:"updateLayers",value:function(){this.selector?this.layers=this.element.querySelectorAll(this.selector):this.layers=this.element.children,this.layers.length||console.warn("ParallaxJS: Your scene does not have any layers."),this.depthsX=[],this.depthsY=[];for(var t=0;t<this.layers.length;t++){var e=this.layers[t];this.transform3DSupport&&a.accelerate(e),e.style.position=t?"absolute":"relative",e.style.display="block",e.style.left=0,e.style.top=0;var n=a.data(e,"depth")||0;this.depthsX.push(a.data(e,"depth-x")||n),this.depthsY.push(a.data(e,"depth-y")||n)}}},{key:"updateDimensions",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowCenterX=this.windowWidth*this.originX,this.windowCenterY=this.windowHeight*this.originY,this.windowRadiusX=Math.max(this.windowCenterX,this.windowWidth-this.windowCenterX),this.windowRadiusY=Math.max(this.windowCenterY,this.windowHeight-this.windowCenterY)}},{key:"updateBounds",value:function(){this.bounds=this.inputElement.getBoundingClientRect(),this.elementPositionX=this.bounds.left,this.elementPositionY=this.bounds.top,this.elementWidth=this.bounds.width,this.elementHeight=this.bounds.height,this.elementCenterX=this.elementWidth*this.originX,this.elementCenterY=this.elementHeight*this.originY,this.elementRangeX=Math.max(this.elementCenterX,this.elementWidth-this.elementCenterX),this.elementRangeY=Math.max(this.elementCenterY,this.elementHeight-this.elementCenterY)}},{key:"queueCalibration",value:function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)}},{key:"enable",value:function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=!1,window.addEventListener("deviceorientation",this.onDeviceOrientation),this.detectionTimer=setTimeout(this.onOrientationTimer,this.supportDelay)):this.motionSupport?(this.portrait=!1,window.addEventListener("devicemotion",this.onDeviceMotion),this.detectionTimer=setTimeout(this.onMotionTimer,this.supportDelay)):(this.calibrationX=0,this.calibrationY=0,this.portrait=!1,window.addEventListener("mousemove",this.onMouseMove),this.doReadyCallback()),window.addEventListener("resize",this.onWindowResize),this.raf=r(this.onAnimationFrame))}},{key:"disable",value:function(){this.enabled&&(this.enabled=!1,this.orientationSupport?window.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?window.removeEventListener("devicemotion",this.onDeviceMotion):window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize),r.cancel(this.raf))}},{key:"calibrate",value:function(t,e){this.calibrateX=void 0===t?this.calibrateX:t,this.calibrateY=void 0===e?this.calibrateY:e}},{key:"invert",value:function(t,e){this.invertX=void 0===t?this.invertX:t,this.invertY=void 0===e?this.invertY:e}},{key:"friction",value:function(t,e){this.frictionX=void 0===t?this.frictionX:t,this.frictionY=void 0===e?this.frictionY:e}},{key:"scalar",value:function(t,e){this.scalarX=void 0===t?this.scalarX:t,this.scalarY=void 0===e?this.scalarY:e}},{key:"limit",value:function(t,e){this.limitX=void 0===t?this.limitX:t,this.limitY=void 0===e?this.limitY:e}},{key:"origin",value:function(t,e){this.originX=void 0===t?this.originX:t,this.originY=void 0===e?this.originY:e}},{key:"setInputElement",value:function(t){this.inputElement=t,this.updateDimensions()}},{key:"setPosition",value:function(t,e,n){e=e.toFixed(this.precision)+"px",n=n.toFixed(this.precision)+"px",this.transform3DSupport?a.css(t,"transform","translate3d("+e+","+n+",0)"):this.transform2DSupport?a.css(t,"transform","translate("+e+","+n+")"):(t.style.left=e,t.style.top=n)}},{key:"onOrientationTimer",value:function(){this.orientationSupport&&0===this.orientationStatus?(this.disable(),this.orientationSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onMotionTimer",value:function(){this.motionSupport&&0===this.motionStatus?(this.disable(),this.motionSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onCalibrationTimer",value:function(){this.calibrationFlag=!0}},{key:"onWindowResize",value:function(){this.updateDimensions()}},{key:"onAnimationFrame",value:function(){this.updateBounds();var t=this.inputX-this.calibrationX,e=this.inputY-this.calibrationY;(Math.abs(t)>this.calibrationThreshold||Math.abs(e)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.motionX=this.calibrateX?e:this.inputY,this.motionY=this.calibrateY?t:this.inputX):(this.motionX=this.calibrateX?t:this.inputX,this.motionY=this.calibrateY?e:this.inputY),this.motionX*=this.elementWidth*(this.scalarX/100),this.motionY*=this.elementHeight*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.motionX=a.clamp(this.motionX,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.motionY=a.clamp(this.motionY,-this.limitY,this.limitY)),this.velocityX+=(this.motionX-this.velocityX)*this.frictionX,this.velocityY+=(this.motionY-this.velocityY)*this.frictionY;for(var n=0;n<this.layers.length;n++){var i=this.layers[n],o=this.depthsX[n],s=this.depthsY[n],l=this.velocityX*(o*(this.invertX?-1:1)),u=this.velocityY*(s*(this.invertY?-1:1));this.setPosition(i,l,u)}this.raf=r(this.onAnimationFrame)}},{key:"rotate",value:function(t,e){var n=(t||0)/30,i=(e||0)/30,r=this.windowHeight>this.windowWidth;this.portrait!==r&&(this.portrait=r,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.calibrationX=n,this.calibrationY=i),this.inputX=n,this.inputY=i}},{key:"onDeviceOrientation",value:function(t){var e=t.beta,n=t.gamma;null!==e&&null!==n&&(this.orientationStatus=1,this.rotate(e,n))}},{key:"onDeviceMotion",value:function(t){var e=t.rotationRate.beta,n=t.rotationRate.gamma;null!==e&&null!==n&&(this.motionStatus=1,this.rotate(e,n))}},{key:"onMouseMove",value:function(t){var e=t.clientX,n=t.clientY;if(this.hoverOnly&&(e<this.elementPositionX||e>this.elementPositionX+this.elementWidth||n<this.elementPositionY||n>this.elementPositionY+this.elementHeight))return this.inputX=0,void(this.inputY=0);this.relativeInput?(this.clipRelativeInput&&(e=Math.max(e,this.elementPositionX),e=Math.min(e,this.elementPositionX+this.elementWidth),n=Math.max(n,this.elementPositionY),n=Math.min(n,this.elementPositionY+this.elementHeight)),this.elementRangeX&&this.elementRangeY&&(this.inputX=(e-this.elementPositionX-this.elementCenterX)/this.elementRangeX,this.inputY=(n-this.elementPositionY-this.elementCenterY)/this.elementRangeY)):this.windowRadiusX&&this.windowRadiusY&&(this.inputX=(e-this.windowCenterX)/this.windowRadiusX,this.inputY=(n-this.windowCenterY)/this.windowRadiusY)}},{key:"destroy",value:function(){this.disable(),clearTimeout(this.calibrationTimer),clearTimeout(this.detectionTimer),this.element.removeAttribute("style");for(var t=0;t<this.layers.length;t++)this.layers[t].removeAttribute("style");delete this.element,delete this.layers}},{key:"version",value:function(){return"3.1.0"}}]),t}();e.exports=l},{"object-assign":1,raf:4}]},{},[5])(5)}).call(this,n("yLpj"))},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}t.exports=n}},[[0,0,2,4,1,3]]]);