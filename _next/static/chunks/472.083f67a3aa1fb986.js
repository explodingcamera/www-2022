(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[472],{6472:function(e,t,r){"use strict";r.r(t),r.d(t,{Terminal:function(){return z}});var i=r(45),n=r(959),o=r(3641),l=r(1048),a=r(284);let s=(e=0)=>t=>`\u001B[${t+e}m`,c=(e=0)=>t=>`\u001B[${38+e};5;${t}m`,u=(e=0)=>(t,r,i)=>`\u001B[${38+e};2;${t};${r};${i}m`,h={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],overline:[53,55],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],gray:[90,39],grey:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgGray:[100,49],bgGrey:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};Object.keys(h.modifier);let b=Object.keys(h.color),d=Object.keys(h.bgColor);[...b,...d];let g=function(){let e=new Map;for(let[t,r]of Object.entries(h)){for(let[t,i]of Object.entries(r))h[t]={open:`\u001B[${i[0]}m`,close:`\u001B[${i[1]}m`},r[t]=h[t],e.set(i[0],i[1]);Object.defineProperty(h,t,{value:r,enumerable:!1})}return Object.defineProperty(h,"codes",{value:e,enumerable:!1}),h.color.close="\x1b[39m",h.bgColor.close="\x1b[49m",h.color.ansi=s(),h.color.ansi256=c(),h.color.ansi16m=u(),h.bgColor.ansi=s(10),h.bgColor.ansi256=c(10),h.bgColor.ansi16m=u(10),Object.defineProperties(h,{rgbToAnsi256:{value:(e,t,r)=>e===t&&t===r?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(t/255*5)+Math.round(r/255*5),enumerable:!1},hexToRgb:{value(e){let t=/[a-f\d]{6}|[a-f\d]{3}/i.exec(e.toString(16));if(!t)return[0,0,0];let[r]=t;3===r.length&&(r=[...r].map(e=>e+e).join(""));let i=Number.parseInt(r,16);return[i>>16&255,i>>8&255,255&i]},enumerable:!1},hexToAnsi256:{value:e=>h.rgbToAnsi256(...h.hexToRgb(e)),enumerable:!1},ansi256ToAnsi:{value(e){let t,r,i;if(e<8)return 30+e;if(e<16)return 90+(e-8);if(e>=232)r=t=((e-232)*10+8)/255,i=t;else{e-=16;let n=e%36;t=Math.floor(e/36)/5,r=Math.floor(n/6)/5,i=n%6/5}let n=2*Math.max(t,r,i);if(0===n)return 30;let o=30+(Math.round(i)<<2|Math.round(r)<<1|Math.round(t));return 2===n&&(o+=60),o},enumerable:!1},rgbToAnsi:{value:(e,t,r)=>h.ansi256ToAnsi(h.rgbToAnsi256(e,t,r)),enumerable:!1},hexToAnsi:{value:e=>h.ansi256ToAnsi(h.hexToAnsi256(e)),enumerable:!1}}),h}(),p=(()=>{if(navigator.userAgentData){let e=navigator.userAgentData.brands.find(({brand:e})=>"Chromium"===e);if(e&&e.version>93)return 3}return/\b(Chrome|Chromium)\//.test(navigator.userAgent)?1:0})(),f=0!==p&&{level:p,hasBasic:!0,has256:p>=2,has16m:p>=3},{stdout:m,stderr:y}={stdout:f,stderr:f},v=Symbol("GENERATOR"),w=Symbol("STYLER"),x=Symbol("IS_EMPTY"),k=["ansi","ansi","ansi256","ansi16m"],O=Object.create(null),B=(e,t={})=>{if(t.level&&!(Number.isInteger(t.level)&&t.level>=0&&t.level<=3))throw Error("The `level` option should be an integer from 0 to 3");let r=m?m.level:0;e.level=void 0===t.level?r:t.level},_=e=>{let t=(...e)=>e.join(" ");return B(t,e),Object.setPrototypeOf(t,j.prototype),t};function j(e){return _(e)}for(let[e,t]of(Object.setPrototypeOf(j.prototype,Function.prototype),Object.entries(g)))O[e]={get(){let r=C(this,M(t.open,t.close,this[w]),this[x]);return Object.defineProperty(this,e,{value:r}),r}};O.visible={get(){let e=C(this,this[w],!0);return Object.defineProperty(this,"visible",{value:e}),e}};let A=(e,t,r,...i)=>"rgb"===e?"ansi16m"===t?g[r].ansi16m(...i):"ansi256"===t?g[r].ansi256(g.rgbToAnsi256(...i)):g[r].ansi(g.rgbToAnsi(...i)):"hex"===e?A("rgb",t,r,...g.hexToRgb(...i)):g[r][e](...i);for(let e of["rgb","hex","ansi256"]){O[e]={get(){let{level:t}=this;return function(...r){let i=M(A(e,k[t],"color",...r),g.color.close,this[w]);return C(this,i,this[x])}}};let t="bg"+e[0].toUpperCase()+e.slice(1);O[t]={get(){let{level:t}=this;return function(...r){let i=M(A(e,k[t],"bgColor",...r),g.bgColor.close,this[w]);return C(this,i,this[x])}}}}let T=Object.defineProperties(()=>{},{...O,level:{enumerable:!0,get(){return this[v].level},set(e){this[v].level=e}}}),M=(e,t,r)=>{let i,n;return void 0===r?(i=e,n=t):(i=r.openAll+e,n=t+r.closeAll),{open:e,close:t,openAll:i,closeAll:n,parent:r}},C=(e,t,r)=>{let i=(...e)=>P(i,1===e.length?""+e[0]:e.join(" "));return Object.setPrototypeOf(i,T),i[v]=e,i[w]=t,i[x]=r,i},P=(e,t)=>{if(e.level<=0||!t)return e[x]?"":t;let r=e[w];if(void 0===r)return t;let{openAll:i,closeAll:n}=r;if(t.includes("\x1b"))for(;void 0!==r;)t=function(e,t,r){let i=e.indexOf(t);if(-1===i)return e;let n=t.length,o=0,l="";do l+=e.slice(o,i)+t+r,o=i+n,i=e.indexOf(t,o);while(-1!==i);return l+e.slice(o)}(t,r.close,r.open),r=r.parent;let o=t.indexOf("\n");return -1!==o&&(t=function(e,t,r,i){let n=0,o="";do{let l="\r"===e[i-1];o+=e.slice(n,l?i-1:i)+t+(l?"\r\n":"\n")+r,n=i+1,i=e.indexOf("\n",n)}while(-1!==i);return o+e.slice(n)}(t,n,i,o)),i+t+n};Object.defineProperties(j.prototype,O);let E=_(void 0);_({level:y?y.level:0});var S=r(1742);let R=(0,S.F4)("		from,to{opacity:0;}50%{opacity:1;}"),I=(0,S.F4)("	 0%{opacity:1401759986;}5%{opacity:1310178007;}10%{opacity:623983780;}15%{opacity:789961012;}20%{opacity:566310986;}25%{opacity:134590213;}30%{opacity:1229133229;}35%{opacity:2144974493;}40%{opacity:587001174;}45%{opacity:54491341;}50%{opacity:635106317;}55%{opacity:2041637725;}60%{opacity:1343043108;}65%{opacity:1763081334;}70%{opacity:743479678;}75%{opacity:925080358;}80%{opacity:1252565817;}85%{opacity:1136094834;}90%{opacity:1783802481;}95%{opacity:1929022493;}100%{opacity:672688511;}"),N=(0,o.Z)("div",{target:"e1yjsjdx0"})("	min-height:100vh;min-width:30rem;padding:3rem;display:flex;background:black;&::before{content:' ';display:block;position:absolute;top:0;left:0;bottom:0;right:0;background:linear-gradient(\n				rgba(18,16,16,0) 50%,rgba(0,0,0,0.25) 50%\n			),linear-gradient(\n				90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06)\n			);z-index:2;background-size:100% 2px,3px 100%;pointer-events:none;}&:after{content:' ';display:block;position:absolute;top:0;left:0;bottom:0;right:0;background:rgba(18,16,16,0.1);opacity:0;z-index:2;pointer-events:none;animation-name:",I,";animation-duration:0.15s;animation-iteration-count:infinite;}.scrollbar::-webkit-scrollbar{background-color:#fff;width:16px;}> div{flex:1;}.xterm-rows{filter:drop-shadow(rgba(34,255,143,1) 0px 0px 3px);}.xterm-viewport{&::-webkit-scrollbar{background-color:transparent;width:10px;}&::-webkit-scrollbar-track{background-color:transparent;}&::-webkit-scrollbar-thumb{background-color:white;border-radius:10px;}&::-webkit-scrollbar-thumb:hover{background-color:#a0a0a5;border:4px solid #f4f4f4;}&::-webkit-scrollbar-button{display:none;}}.xterm-cursor-bar{animation-name:",R,";animation-duration:1s;animation-iteration-count:infinite;animation-timing-function:step-end;}"),$=async e=>new Promise(t=>{setTimeout(t,e)}),z=()=>{let e=n.useRef(null),t=n.useRef(new a.FitAddon),[,r]=(0,n.useState)(""),[o]=(0,n.useState)(!0),s=async(t,r)=>{for(let n of t){var i;null===(i=e.current)||void 0===i||i.terminal.write(n),await $(r)}};(0,n.useEffect)(()=>{let e=()=>t.current.fit();return window.addEventListener("resize",e),console.clear(),()=>window.removeEventListener("resize",e)}),(0,n.useEffect)(()=>{let i=e.current;t.current.fit();let n=async()=>{await s(E.hex("#00ff09")("You're finally awake..."),200),await $(2e3),null==i||i.terminal.writeln(""),await s(E.hex("#00ff09")("You might think you have come far, but this is only the beginning..."),50),await s(E.hex("#00ff09")("We want the best,  \nnot the followers.  Thus, the first few there will receive\nthe prize."),50),await s(E.hex("#00ff09")("Yo​u​​ w​ill ​se​​​e m​e, w​here​ th​e​re i​​s​ ​​no d​arkn​ess"),50)};return i&&n(),()=>{null==i||i.terminal.reset(),r("")}},[e]);let c=t=>{var i;if(!o){if(console.log(t.charCodeAt(0)),13===t.charCodeAt(0))return;null==e||null===(i=e.current)||void 0===i||i.terminal.write(t),r(e=>e+t)}};return(0,i.tZ)(N,{children:(0,i.tZ)(l.O,{addons:[t.current],options:{lineHeight:1,cursorStyle:"bar",rendererType:"dom",fontFamily:"Roboto Mono",windowOptions:{fullscreenWin:!0}},ref:e,onData:c})})}},284:function(e){var t,r;self,e.exports=(Object.defineProperty(r=t={},"__esModule",{value:!0}),r.FitAddon=void 0,r.FitAddon=class{constructor(){}activate(e){this._terminal=e}dispose(){}fit(){let e=this.proposeDimensions();if(!e||!this._terminal||isNaN(e.cols)||isNaN(e.rows))return;let t=this._terminal._core;this._terminal.rows===e.rows&&this._terminal.cols===e.cols||(t._renderService.clear(),this._terminal.resize(e.cols,e.rows))}proposeDimensions(){if(!this._terminal||!this._terminal.element||!this._terminal.element.parentElement)return;let e=this._terminal._core,t=e._renderService.dimensions;if(0===t.css.cell.width||0===t.css.cell.height)return;let r=0===this._terminal.options.scrollback?0:e.viewport.scrollBarWidth,i=window.getComputedStyle(this._terminal.element.parentElement),n=parseInt(i.getPropertyValue("height")),o=Math.max(0,parseInt(i.getPropertyValue("width"))),l=window.getComputedStyle(this._terminal.element),a=n-(parseInt(l.getPropertyValue("padding-top"))+parseInt(l.getPropertyValue("padding-bottom"))),s=o-(parseInt(l.getPropertyValue("padding-right"))+parseInt(l.getPropertyValue("padding-left")))-r;return{cols:Math.max(2,Math.floor(s/t.css.cell.width)),rows:Math.max(1,Math.floor(a/t.css.cell.height))}}},t)}}]);
//# sourceMappingURL=472.083f67a3aa1fb986.js.map