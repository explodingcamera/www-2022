(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[122],{4998:function(e,t,r){"use strict";r.r(t),r.d(t,{Terminal:function(){return Y}});var n=r(1520),o=r(6874),i=r.n(o),a=r(4479),l=r(959),s=r(9335),c=r(35),u=r(4758);const p=(e=0)=>t=>`\x1b[${t+e}m`,h=(e=0)=>t=>`\x1b[${38+e};5;${t}m`,b=(e=0)=>(t,r,n)=>`\x1b[${38+e};2;${t};${r};${n}m`;const f=function(){const e=new Map,t={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],overline:[53,55],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};t.color.gray=t.color.blackBright,t.bgColor.bgGray=t.bgColor.bgBlackBright,t.color.grey=t.color.blackBright,t.bgColor.bgGrey=t.bgColor.bgBlackBright;for(const[r,n]of Object.entries(t)){for(const[r,o]of Object.entries(n))t[r]={open:`\x1b[${o[0]}m`,close:`\x1b[${o[1]}m`},n[r]=t[r],e.set(o[0],o[1]);Object.defineProperty(t,r,{value:n,enumerable:!1})}return Object.defineProperty(t,"codes",{value:e,enumerable:!1}),t.color.close="\x1b[39m",t.bgColor.close="\x1b[49m",t.color.ansi=p(),t.color.ansi256=h(),t.color.ansi16m=b(),t.bgColor.ansi=p(10),t.bgColor.ansi256=h(10),t.bgColor.ansi16m=b(10),Object.defineProperties(t,{rgbToAnsi256:{value:(e,t,r)=>e===t&&t===r?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(t/255*5)+Math.round(r/255*5),enumerable:!1},hexToRgb:{value:e=>{const t=/(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(e.toString(16));if(!t)return[0,0,0];let{colorString:r}=t.groups;3===r.length&&(r=[...r].map((e=>e+e)).join(""));const n=Number.parseInt(r,16);return[n>>16&255,n>>8&255,255&n]},enumerable:!1},hexToAnsi256:{value:e=>t.rgbToAnsi256(...t.hexToRgb(e)),enumerable:!1},ansi256ToAnsi:{value:e=>{if(e<8)return 30+e;if(e<16)return e-8+90;let t,r,n;if(e>=232)t=(10*(e-232)+8)/255,r=t,n=t;else{const o=(e-=16)%36;t=Math.floor(e/36)/5,r=Math.floor(o/6)/5,n=o%6/5}const o=2*Math.max(t,r,n);if(0===o)return 30;let i=30+(Math.round(n)<<2|Math.round(r)<<1|Math.round(t));return 2===o&&(i+=60),i},enumerable:!1},rgbToAnsi:{value:(e,r,n)=>t.ansi256ToAnsi(t.rgbToAnsi256(e,r,n)),enumerable:!1},hexToAnsi:{value:e=>t.ansi256ToAnsi(t.hexToAnsi256(e)),enumerable:!1}}),t}();var d=f;const g=!!/\b(Chrome|Chromium)\//.test(navigator.userAgent)&&{level:1,hasBasic:!0,has256:!1,has16m:!1};var m={stdout:g,stderr:g};function v(e,t,r){let n=e.indexOf(t);if(-1===n)return e;const o=t.length;let i=0,a="";do{a+=e.substr(i,n-i)+t+r,i=n+o,n=e.indexOf(t,i)}while(-1!==n);return a+=e.slice(i),a}const{stdout:y,stderr:w}=m,x=Symbol("GENERATOR"),k=Symbol("STYLER"),B=Symbol("IS_EMPTY"),C=["ansi","ansi","ansi256","ansi16m"],_=Object.create(null);const A=e=>{const t=(...e)=>e.join(" ");return((e,t={})=>{if(t.level&&!(Number.isInteger(t.level)&&t.level>=0&&t.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");const r=y?y.level:0;e.level=void 0===t.level?r:t.level})(t,e),Object.setPrototypeOf(t,O.prototype),t};function O(e){return A(e)}Object.setPrototypeOf(O.prototype,Function.prototype);for(const[V,G]of Object.entries(d))_[V]={get(){const e=j(this,P(G.open,G.close,this[k]),this[B]);return Object.defineProperty(this,V,{value:e}),e}};_.visible={get(){const e=j(this,this[k],!0);return Object.defineProperty(this,"visible",{value:e}),e}};const S=(e,t,r,...n)=>"rgb"===e?"ansi16m"===t?d[r].ansi16m(...n):"ansi256"===t?d[r].ansi256(d.rgbToAnsi256(...n)):d[r].ansi(d.rgbToAnsi(...n)):"hex"===e?S("rgb",t,r,...d.hexToRgb(...n)):d[r][e](...n),T=["rgb","hex","ansi256"];for(const V of T){_[V]={get(){const{level:e}=this;return function(...t){const r=P(S(V,C[e],"color",...t),d.color.close,this[k]);return j(this,r,this[B])}}};_["bg"+V[0].toUpperCase()+V.slice(1)]={get(){const{level:e}=this;return function(...t){const r=P(S(V,C[e],"bgColor",...t),d.bgColor.close,this[k]);return j(this,r,this[B])}}}}const M=Object.defineProperties((()=>{}),{..._,level:{enumerable:!0,get(){return this[x].level},set(e){this[x].level=e}}}),P=(e,t,r)=>{let n,o;return void 0===r?(n=e,o=t):(n=r.openAll+e,o=t+r.closeAll),{open:e,close:t,openAll:n,closeAll:o,parent:r}},j=(e,t,r)=>{const n=(...e)=>E(n,1===e.length?""+e[0]:e.join(" "));return Object.setPrototypeOf(n,M),n[x]=e,n[k]=t,n[B]=r,n},E=(e,t)=>{if(e.level<=0||!t)return e[B]?"":t;let r=e[k];if(void 0===r)return t;const{openAll:n,closeAll:o}=r;if(t.includes("\x1b"))for(;void 0!==r;)t=v(t,r.close,r.open),r=r.parent;const i=t.indexOf("\n");return-1!==i&&(t=function(e,t,r,n){let o=0,i="";do{const a="\r"===e[n-1];i+=e.substr(o,(a?n-1:n)-o)+t+(a?"\r\n":"\n")+r,o=n+1,n=e.indexOf("\n",o)}while(-1!==n);return i+=e.slice(o),i}(t,o,n,i)),n+t+o};Object.defineProperties(O.prototype,_);const I=O();O({level:w?w.level:0});var R=I,$=r(5222),Z=(0,$.F4)("\t\tfrom,to{opacity:0;}50%{opacity:1;}"),z=(0,$.F4)("\t 0%{opacity:1401759986;}5%{opacity:1310178007;}10%{opacity:623983780;}15%{opacity:789961012;}20%{opacity:566310986;}25%{opacity:134590213;}30%{opacity:1229133229;}35%{opacity:2144974493;}40%{opacity:587001174;}45%{opacity:54491341;}50%{opacity:635106317;}55%{opacity:2041637725;}60%{opacity:1343043108;}65%{opacity:1763081334;}70%{opacity:743479678;}75%{opacity:925080358;}80%{opacity:1252565817;}85%{opacity:1136094834;}90%{opacity:1783802481;}95%{opacity:1929022493;}100%{opacity:672688511;}"),F=(0,s.Z)("div",{target:"e10e8rl60"})("\tmin-height:100vh;min-width:30rem;padding:3rem;display:flex;background:black;&::before{content:' ';display:block;position:absolute;top:0;left:0;bottom:0;right:0;background:linear-gradient(\n\t\t\t\trgba(18,16,16,0) 50%,rgba(0,0,0,0.25) 50%\n\t\t\t),linear-gradient(\n\t\t\t\t90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06)\n\t\t\t);z-index:2;background-size:100% 2px,3px 100%;pointer-events:none;}&:after{content:' ';display:block;position:absolute;top:0;left:0;bottom:0;right:0;background:rgba(18,16,16,0.1);opacity:0;z-index:2;pointer-events:none;animation-name:",z,";animation-duration:0.15s;animation-iteration-count:infinite;}.scrollbar::-webkit-scrollbar{background-color:#fff;width:16px;}> div{flex:1;}.xterm-rows{filter:drop-shadow(rgba(34,255,143,1) 0px 0px 3px);}.xterm-viewport{&::-webkit-scrollbar{background-color:transparent;width:10px;}&::-webkit-scrollbar-track{background-color:transparent;}&::-webkit-scrollbar-thumb{background-color:white;border-radius:10px;}&::-webkit-scrollbar-thumb:hover{background-color:#a0a0a5;border:4px solid #f4f4f4;}&::-webkit-scrollbar-button{display:none;}}.xterm-cursor-bar{animation-name:",Z,";animation-duration:1s;animation-iteration-count:infinite;animation-timing-function:step-end;}"),W=function(){var e=(0,n.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout(e,t)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=l.useRef(null),t=l.useRef(new u.FitAddon),r=(0,l.useState)(""),o=(r[0],r[1]),s=(0,l.useState)(!0),p=s[0],h=(s[1],function(){var t=(0,n.Z)(i().mark((function t(r,n){var o,a,l,s,c,u,p;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=!0,a=!1,l=void 0,t.prev=1,s=r[Symbol.iterator]();case 3:if(o=(c=s.next()).done){t.next=12;break}return u=c.value,null===(p=e.current)||void 0===p||p.terminal.write(u),t.next=9,W(n);case 9:o=!0,t.next=3;break;case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(1),a=!0,l=t.t0;case 18:t.prev=18,t.prev=19,o||null==s.return||s.return();case 21:if(t.prev=21,!a){t.next=24;break}throw l;case 24:return t.finish(21);case 25:return t.finish(18);case 26:case"end":return t.stop()}}),t,null,[[1,14,18,26],[19,,21,25]])})));return function(e,r){return t.apply(this,arguments)}}());(0,l.useEffect)((function(){var e=function(){return t.current.fit()};return window.addEventListener("resize",e),console.clear(),function(){return window.removeEventListener("resize",e)}})),(0,l.useEffect)((function(){var r=e.current;t.current.fit();var a=function(){var e=(0,n.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(R.hex("#00ff09")("You're finally awake..."),200);case 2:return e.next=4,W(2e3);case 4:return null===r||void 0===r||r.terminal.writeln(""),e.next=7,h(R.hex("#00ff09")("You might think you have come far, but this is only the beginning..."),50);case 7:return e.next=9,h(R.hex("#00ff09")("We want the best,  \nnot the followers.  Thus, the first few there will receive\nthe prize."),50);case 9:return e.next=11,h(R.hex("#00ff09")("Yo\u200bu\u200b\u200b w\u200bill \u200bse\u200b\u200b\u200be m\u200be, w\u200bhere\u200b th\u200be\u200bre i\u200b\u200bs\u200b \u200b\u200bno d\u200barkn\u200bess"),50);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r&&a(),function(){null===r||void 0===r||r.terminal.reset(),o("")}}),[e]);return(0,a.tZ)(F,{children:(0,a.tZ)(c.O,{addons:[t.current],options:{lineHeight:1,cursorStyle:"bar",rendererType:"dom",fontFamily:"Roboto Mono",windowOptions:{fullscreenWin:!0}},ref:e,onData:function(t){var r;p||(console.log(t.charCodeAt(0)),13!==t.charCodeAt(0)&&(null===e||void 0===e||null===(r=e.current)||void 0===r||r.terminal.write(t),o((function(e){return e+t}))))}})})}},4758:function(e){self,e.exports=(()=>{"use strict";var e={775:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FitAddon=void 0;var r=function(){function e(){}return e.prototype.activate=function(e){this._terminal=e},e.prototype.dispose=function(){},e.prototype.fit=function(){var e=this.proposeDimensions();if(e&&this._terminal){var t=this._terminal._core;this._terminal.rows===e.rows&&this._terminal.cols===e.cols||(t._renderService.clear(),this._terminal.resize(e.cols,e.rows))}},e.prototype.proposeDimensions=function(){if(this._terminal&&this._terminal.element&&this._terminal.element.parentElement){var e=this._terminal._core;if(0!==e._renderService.dimensions.actualCellWidth&&0!==e._renderService.dimensions.actualCellHeight){var t=window.getComputedStyle(this._terminal.element.parentElement),r=parseInt(t.getPropertyValue("height")),n=Math.max(0,parseInt(t.getPropertyValue("width"))),o=window.getComputedStyle(this._terminal.element),i=r-(parseInt(o.getPropertyValue("padding-top"))+parseInt(o.getPropertyValue("padding-bottom"))),a=n-(parseInt(o.getPropertyValue("padding-right"))+parseInt(o.getPropertyValue("padding-left")))-e.viewport.scrollBarWidth;return{cols:Math.max(2,Math.floor(a/e._renderService.dimensions.actualCellWidth)),rows:Math.max(1,Math.floor(i/e._renderService.dimensions.actualCellHeight))}}}},e}();t.FitAddon=r}},t={};return function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}(775)})()},113:function(e,t,r){"use strict";function n(e,t){return null!=t&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):e instanceof t}r.d(t,{Z:function(){return n}})},130:function(e,t,r){"use strict";function n(e){return e&&e.constructor===Symbol?"symbol":typeof e}r.d(t,{Z:function(){return n}})}}]);