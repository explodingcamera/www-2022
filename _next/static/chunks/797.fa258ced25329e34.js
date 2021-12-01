(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{8797:function(t,e,n){"use strict";n.r(e),n.d(e,{Terminal:function(){return D}});var r=n(7383),o=n.n(r),i=n(4637),a=n(9496),l=n(7343),s=n(5885),c=n(9277);const u=(t=0)=>e=>`\x1b[${e+t}m`,h=(t=0)=>e=>`\x1b[${38+t};5;${e}m`,p=(t=0)=>(e,n,r)=>`\x1b[${38+t};2;${e};${n};${r}m`;var b=function(){const t=new Map,e={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],overline:[53,55],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};e.color.gray=e.color.blackBright,e.bgColor.bgGray=e.bgColor.bgBlackBright,e.color.grey=e.color.blackBright,e.bgColor.bgGrey=e.bgColor.bgBlackBright;for(const[n,r]of Object.entries(e)){for(const[n,o]of Object.entries(r))e[n]={open:`\x1b[${o[0]}m`,close:`\x1b[${o[1]}m`},r[n]=e[n],t.set(o[0],o[1]);Object.defineProperty(e,n,{value:r,enumerable:!1})}return Object.defineProperty(e,"codes",{value:t,enumerable:!1}),e.color.close="\x1b[39m",e.bgColor.close="\x1b[49m",e.color.ansi=u(),e.color.ansi256=h(),e.color.ansi16m=p(),e.bgColor.ansi=u(10),e.bgColor.ansi256=h(10),e.bgColor.ansi16m=p(10),Object.defineProperties(e,{rgbToAnsi256:{value:(t,e,n)=>t===e&&e===n?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(e/255*5)+Math.round(n/255*5),enumerable:!1},hexToRgb:{value:t=>{const e=/(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(t.toString(16));if(!e)return[0,0,0];let{colorString:n}=e.groups;3===n.length&&(n=[...n].map((t=>t+t)).join(""));const r=Number.parseInt(n,16);return[r>>16&255,r>>8&255,255&r]},enumerable:!1},hexToAnsi256:{value:t=>e.rgbToAnsi256(...e.hexToRgb(t)),enumerable:!1},ansi256ToAnsi:{value:t=>{if(t<8)return 30+t;if(t<16)return t-8+90;let e,n,r;if(t>=232)e=(10*(t-232)+8)/255,n=e,r=e;else{const o=(t-=16)%36;e=Math.floor(t/36)/5,n=Math.floor(o/6)/5,r=o%6/5}const o=2*Math.max(e,n,r);if(0===o)return 30;let i=30+(Math.round(r)<<2|Math.round(n)<<1|Math.round(e));return 2===o&&(i+=60),i},enumerable:!1},rgbToAnsi:{value:(t,n,r)=>e.ansi256ToAnsi(e.rgbToAnsi256(t,n,r)),enumerable:!1},hexToAnsi:{value:t=>e.ansi256ToAnsi(e.hexToAnsi256(t)),enumerable:!1}}),e}();const f=!!/\b(Chrome|Chromium)\//.test(navigator.userAgent)&&{level:1,hasBasic:!0,has256:!1,has16m:!1};var d={stdout:f,stderr:f};function g(t,e,n){let r=t.indexOf(e);if(-1===r)return t;const o=e.length;let i=0,a="";do{a+=t.substr(i,r-i)+e+n,i=r+o,r=t.indexOf(e,i)}while(-1!==r);return a+=t.slice(i),a}const{stdout:m,stderr:v}=d,y=Symbol("GENERATOR"),w=Symbol("STYLER"),x=Symbol("IS_EMPTY"),k=["ansi","ansi","ansi256","ansi16m"],O=Object.create(null);const B=t=>{const e=(...t)=>t.join(" ");return((t,e={})=>{if(e.level&&!(Number.isInteger(e.level)&&e.level>=0&&e.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");const n=m?m.level:0;t.level=void 0===e.level?n:e.level})(e,t),Object.setPrototypeOf(e,j.prototype),e};function j(t){return B(t)}Object.setPrototypeOf(j.prototype,Function.prototype);for(const[H,L]of Object.entries(b))O[H]={get(){const t=T(this,P(L.open,L.close,this[w]),this[x]);return Object.defineProperty(this,H,{value:t}),t}};O.visible={get(){const t=T(this,this[w],!0);return Object.defineProperty(this,"visible",{value:t}),t}};const C=(t,e,n,...r)=>"rgb"===t?"ansi16m"===e?b[n].ansi16m(...r):"ansi256"===e?b[n].ansi256(b.rgbToAnsi256(...r)):b[n].ansi(b.rgbToAnsi(...r)):"hex"===t?C("rgb",e,n,...b.hexToRgb(...r)):b[n][t](...r),_=["rgb","hex","ansi256"];for(const H of _){O[H]={get(){const{level:t}=this;return function(...e){const n=P(C(H,k[t],"color",...e),b.color.close,this[w]);return T(this,n,this[x])}}};O["bg"+H[0].toUpperCase()+H.slice(1)]={get(){const{level:t}=this;return function(...e){const n=P(C(H,k[t],"bgColor",...e),b.bgColor.close,this[w]);return T(this,n,this[x])}}}}const A=Object.defineProperties((()=>{}),{...O,level:{enumerable:!0,get(){return this[y].level},set(t){this[y].level=t}}}),P=(t,e,n)=>{let r,o;return void 0===n?(r=t,o=e):(r=n.openAll+t,o=e+n.closeAll),{open:t,close:e,openAll:r,closeAll:o,parent:n}},T=(t,e,n)=>{const r=(...t)=>M(r,1===t.length?""+t[0]:t.join(" "));return Object.setPrototypeOf(r,A),r[y]=t,r[w]=e,r[x]=n,r},M=(t,e)=>{if(t.level<=0||!e)return t[x]?"":e;let n=t[w];if(void 0===n)return e;const{openAll:r,closeAll:o}=n;if(e.includes("\x1b"))for(;void 0!==n;)e=g(e,n.close,n.open),n=n.parent;const i=e.indexOf("\n");return-1!==i&&(e=function(t,e,n,r){let o=0,i="";do{const a="\r"===t[r-1];i+=t.substr(o,(a?r-1:r)-o)+e+(a?"\r\n":"\n")+n,o=r+1,r=t.indexOf("\n",o)}while(-1!==r);return i+=t.slice(o),i}(e,o,r,i)),r+e+o};Object.defineProperties(j.prototype,O);const S=j();j({level:v?v.level:0});var E=S;function z(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function R(){var t=z(["\n\t\tfrom,\n\t\tto {\n\t\t\topacity: 0;\n\t\t}\n\t\t50% {\n\t\t\topacity: 1;\n\t\t}\n"]);return R=function(){return t},t}function I(){var t=z(["\n\t 0% {\n\t\t opacity: 1401759986;\n\t}\n\t 5% {\n\t\t opacity: 1310178007;\n\t}\n\t 10% {\n\t\t opacity: 623983780;\n\t}\n\t 15% {\n\t\t opacity: 789961012;\n\t}\n\t 20% {\n\t\t opacity: 566310986;\n\t}\n\t 25% {\n\t\t opacity: 134590213;\n\t}\n\t 30% {\n\t\t opacity: 1229133229;\n\t}\n\t 35% {\n\t\t opacity: 2144974493;\n\t}\n\t 40% {\n\t\t opacity: 587001174;\n\t}\n\t 45% {\n\t\t opacity: 54491341;\n\t}\n\t 50% {\n\t\t opacity: 635106317;\n\t}\n\t 55% {\n\t\t opacity: 2041637725;\n\t}\n\t 60% {\n\t\t opacity: 1343043108;\n\t}\n\t 65% {\n\t\t opacity: 1763081334;\n\t}\n\t 70% {\n\t\t opacity: 743479678;\n\t}\n\t 75% {\n\t\t opacity: 925080358;\n\t}\n\t 80% {\n\t\t opacity: 1252565817;\n\t}\n\t 85% {\n\t\t opacity: 1136094834;\n\t}\n\t 90% {\n\t\t opacity: 1783802481;\n\t}\n\t 95% {\n\t\t opacity: 1929022493;\n\t}\n\t 100% {\n\t\t opacity: 672688511;\n\t}\n}\n"]);return I=function(){return t},t}var $=(0,l.F4)(R()),F=(0,l.F4)(I());function W(t,e,n,r,o,i,a){try{var l=t[i](a),s=l.value}catch(c){return void n(c)}l.done?e(s):Promise.resolve(s).then(r,o)}function Y(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){W(i,r,o,a,l,"next",t)}function l(t){W(i,r,o,a,l,"throw",t)}a(void 0)}))}}function V(){var t,e,n=(t=["\n\tmin-height: 100vh;\n\tmin-width: 30rem;\n\tpadding: 3rem;\n\tdisplay: flex;\n\tbackground: black;\n\n\t&::before {\n\t\tcontent: ' ';\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tbottom: 0;\n\t\tright: 0;\n\t\tbackground: linear-gradient(\n\t\t\t\trgba(18, 16, 16, 0) 50%,\n\t\t\t\trgba(0, 0, 0, 0.25) 50%\n\t\t\t),\n\t\t\tlinear-gradient(\n\t\t\t\t90deg,\n\t\t\t\trgba(255, 0, 0, 0.06),\n\t\t\t\trgba(0, 255, 0, 0.02),\n\t\t\t\trgba(0, 0, 255, 0.06)\n\t\t\t);\n\t\tz-index: 2;\n\t\tbackground-size: 100% 2px, 3px 100%;\n\t\tpointer-events: none;\n\t}\n\n\t&:after {\n\t\tcontent: ' ';\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tbottom: 0;\n\t\tright: 0;\n\t\tbackground: rgba(18, 16, 16, 0.1);\n\t\topacity: 0;\n\t\tz-index: 2;\n\t\tpointer-events: none;\n\t\tanimation-name: ",";\n\t\tanimation-duration: 0.15s;\n\t\tanimation-iteration-count: infinite;\n\t}\n\n\t.scrollbar::-webkit-scrollbar {\n\t\tbackground-color: #fff;\n\t\twidth: 16px;\n\t}\n\n\t> div {\n\t\tflex: 1;\n\t}\n\n\t.xterm-rows {\n\t\tfilter: drop-shadow(rgba(34, 255, 143, 1) 0px 0px 3px);\n\t}\n\n\t.xterm-viewport {\n\t\t&::-webkit-scrollbar {\n\t\t\tbackground-color: transparent;\n\t\t\twidth: 10px;\n\t\t}\n\n\t\t&::-webkit-scrollbar-track {\n\t\t\tbackground-color: transparent;\n\t\t}\n\n\t\t&::-webkit-scrollbar-thumb {\n\t\t\tbackground-color: white;\n\t\t\tborder-radius: 10px;\n\t\t}\n\t\t&::-webkit-scrollbar-thumb:hover {\n\t\t\tbackground-color: #a0a0a5;\n\t\t\tborder: 4px solid #f4f4f4;\n\t\t}\n\n\t\t&::-webkit-scrollbar-button {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\n\t.xterm-cursor-bar {\n\t\tanimation-name: ",";\n\t\tanimation-duration: 1s;\n\t\tanimation-iteration-count: infinite;\n\t\tanimation-timing-function: step-end;\n\t}\n"],e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}})));return V=function(){return n},n}var G=l.ZP.div(V(),F,$),N=Y(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout(t,e)})));case 1:case"end":return t.stop()}}),t)}))),D=function(){var t=a.useRef(null),e=a.useRef(new c.FitAddon),n=(0,a.useState)(""),r=(n[0],n[1]),l=(0,a.useState)(!0),u=l[0],h=(l[1],Y(o().mark((function e(n,r){var i,a,l,s,c,u,h;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=!0,a=!1,l=void 0,e.prev=1,s=n[Symbol.iterator]();case 3:if(i=(c=s.next()).done){e.next=12;break}return u=c.value,null===(h=t.current)||void 0===h||h.terminal.write(u),e.next=9,N(r);case 9:i=!0,e.next=3;break;case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),a=!0,l=e.t0;case 18:e.prev=18,e.prev=19,i||null==s.return||s.return();case 21:if(e.prev=21,!a){e.next=24;break}throw l;case 24:return e.finish(21);case 25:return e.finish(18);case 26:case"end":return e.stop()}}),e,null,[[1,14,18,26],[19,,21,25]])}))));(0,a.useEffect)((function(){var t=function(){return e.current.fit()};return window.addEventListener("resize",t),console.clear(),function(){return window.removeEventListener("resize",t)}})),(0,a.useEffect)((function(){var n=t.current;e.current.fit();var i=Y(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(E.hex("#00ff09")("You're finally awake..."),200);case 2:return t.next=4,N(2e3);case 4:return null===n||void 0===n||n.terminal.writeln(""),t.next=7,h(E.hex("#00ff09")("You might think you have come far, but this is only the beginning..."),50);case 7:return t.next=9,h(E.hex("#00ff09")("We want the best,  \nnot the followers.  Thus, the first few there will receive\nthe prize."),50);case 9:return t.next=11,h(E.hex("#00ff09")("Yo\u200bu\u200b\u200b w\u200bill \u200bse\u200b\u200b\u200be m\u200be, w\u200bhere\u200b th\u200be\u200bre i\u200b\u200bs\u200b \u200b\u200bno d\u200barkn\u200bess"),50);case 11:case"end":return t.stop()}}),t)})));return n&&i(),function(){null===n||void 0===n||n.terminal.reset(),r("")}}),[t]);return(0,i.jsx)(G,{children:(0,i.jsx)(s.O,{addons:[e.current],options:{lineHeight:1,cursorStyle:"bar",rendererType:"dom",fontFamily:"Roboto Mono",windowOptions:{fullscreenWin:!0}},ref:t,onData:function(e){var n;u||(console.log(e.charCodeAt(0)),13!==e.charCodeAt(0)&&(null===t||void 0===t||null===(n=t.current)||void 0===n||n.terminal.write(e),r((function(t){return t+e}))))}})})}},9277:function(t){self,t.exports=(()=>{"use strict";var t={775:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.FitAddon=void 0;var n=function(){function t(){}return t.prototype.activate=function(t){this._terminal=t},t.prototype.dispose=function(){},t.prototype.fit=function(){var t=this.proposeDimensions();if(t&&this._terminal){var e=this._terminal._core;this._terminal.rows===t.rows&&this._terminal.cols===t.cols||(e._renderService.clear(),this._terminal.resize(t.cols,t.rows))}},t.prototype.proposeDimensions=function(){if(this._terminal&&this._terminal.element&&this._terminal.element.parentElement){var t=this._terminal._core;if(0!==t._renderService.dimensions.actualCellWidth&&0!==t._renderService.dimensions.actualCellHeight){var e=window.getComputedStyle(this._terminal.element.parentElement),n=parseInt(e.getPropertyValue("height")),r=Math.max(0,parseInt(e.getPropertyValue("width"))),o=window.getComputedStyle(this._terminal.element),i=n-(parseInt(o.getPropertyValue("padding-top"))+parseInt(o.getPropertyValue("padding-bottom"))),a=r-(parseInt(o.getPropertyValue("padding-right"))+parseInt(o.getPropertyValue("padding-left")))-t.viewport.scrollBarWidth;return{cols:Math.max(2,Math.floor(a/t._renderService.dimensions.actualCellWidth)),rows:Math.max(1,Math.floor(i/t._renderService.dimensions.actualCellHeight))}}}},t}();e.FitAddon=n}},e={};return function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}(775)})()}}]);