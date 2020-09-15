!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React"),require("mobxReact"),require("ReactDOM"),require("mobx")):"function"==typeof define&&define.amd?define(["React","mobxReact","ReactDOM","mobx"],t):"object"==typeof exports?exports.GithubReposGrid=t(require("React"),require("mobxReact"),require("ReactDOM"),require("mobx")):e.GithubReposGrid=t(e.React,e.mobxReact,e.ReactDOM,e.mobx)}(window,(function(e,t,n,r){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});const a=n(9),i=n(14);class u{constructor(){this.lastErrorMessage=null,this.isLoading=!1,this.username="",this.data=[],this.sortColumn="name",this.columns=[],this.sortFn=()=>{throw new Error("sortFn is not defined")}}setColumns(e){return this.columns=e,this}setSortFn(e){return this.sortFn=e,this}get grid(){return this.data.map(e=>this.columns.reduce((t,n)=>(t[n]=e[n],t),{name:null})).sort((e,t)=>this.sortFn(this.sortColumn,e,t))}}r([a.observable],u.prototype,"lastErrorMessage",void 0),r([a.observable],u.prototype,"isLoading",void 0),r([a.observable],u.prototype,"username",void 0),r([a.observable],u.prototype,"data",void 0),r([a.observable],u.prototype,"sortColumn",void 0),r([a.computed],u.prototype,"grid",null);const s=new u;function l(e){const t=i.endpoint("GET /users/:user/repos",{per_page:100,user:e}),{url:n}=t;return function(e,t){return fetch(e,t).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}(n,o(t,["url"]))}t.default={bootstrapStore:(e,t)=>s.setColumns(e).setSortFn(t),changeUsername:e=>{s.username=e},changeSort:e=>{e!==s.sortColumn&&(s.sortColumn=e)},loadRepos:()=>{s.username&&(s.isLoading=!0,l(s.username).then(e=>{s.lastErrorMessage=null,s.isLoading=!1,s.data=e}).catch(e=>{s.lastErrorMessage=e.toString(),s.isLoading=!1}))}}},function(e,t,n){e.exports={Body:"_3DNoE",Header:"_8eIiC",Content:"_2UypT",H1:"u3sbw",Text:"_2kID0",P:"_3Br0w",Footer:"MugYn",Panel:"xLJbz",PanelIsHidden:"_2mUfy",Input:"_3ZUXR",Grid:"_36OYZ",Row:"_2975X",Column:"_2ahwO",Name:"DgcdC",isSorted:"_2Tlo-",Cell:"RrCI6",ColumnHeader:"McpAx"}},function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.usePanel=t.useGrid=t.useStores=void 0;const i=a(n(0)),u=n(1);function s(){return i.useContext(u.MobXProviderContext)}t.useStores=s,t.useGrid=function(){const{store:{isLoading:e,columns:t,sortColumn:n,grid:r,lastErrorMessage:o}}=s();return{isLoading:e,columns:t,sortColumn:n,grid:r,lastErrorMessage:o}},t.usePanel=function(){const{store:{username:e,isLoading:t}}=s();return{username:e,isLoading:t}}},function(e,t,n){"use strict";(function(e){function r(){return"object"==typeof navigator&&"userAgent"in navigator?navigator.userAgent:"object"==typeof e&&"version"in e?`Node.js/${e.version.substr(1)} (${e.platform}; ${e.arch})`:"<environment undetectable>"}n.d(t,"a",(function(){return r}))}).call(this,n(10))},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=a(n(0)),s=a(n(8)),l=n(1),c=i(n(2)),f=i(n(11)),d=i(n(12)),p=i(n(13)),m=["name","description","language","forks","git_url","size"],h=c.default.bootstrapStore(m,(e,t,n)=>{const r=t[e],o=n[e];return null===r?-1:r===o?0:r<o?-1:1});s.render(u.createElement(l.Provider,{store:h},u.createElement(d.default,null,u.createElement(f.default,{renderRow:(e,t,n,r,o)=>u.createElement("div",{key:e,className:r},t.map(e=>u.createElement("div",{key:e,className:o,title:n[e]},u.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",padding:"4px"}},n[e])," ")))}),u.createElement(p.default,null))),document.getElementById("app")),t.default=c.default},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var s,l=[],c=!1,f=-1;function d(){c&&s&&(c=!1,s.length?l=s.concat(l):f=-1,l.length&&p())}function p(){if(!c){var e=u(d);c=!0;for(var t=l.length;t;){for(s=l,l=[];++f<t;)s&&s[f].run();f=-1,t=l.length}s=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||c||u(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=a(n(0)),s=n(1),l=i(n(4)),c=n(5),f=i(n(2)),d=i(n(3)),p=s.observer(({renderRow:e})=>{const t=c.useGrid(),n=e=>f.default.changeSort(e.currentTarget.getAttribute("data-column"));return u.createElement(u.Fragment,null,null!==t.lastErrorMessage?u.createElement(u.Fragment,null,u.createElement("h1",{className:d.default.H1},"Something went wrong"),u.createElement("p",{className:l.default(d.default.Text,d.default.P)},t.lastErrorMessage)):t.isLoading?u.createElement("h1",{className:d.default.H1},"Please wait, data is loading..."):t.grid.length?u.createElement("div",{className:d.default.Grid},u.createElement("div",{className:d.default.Row},t.columns.map(e=>u.createElement("div",{key:e,className:l.default(d.default.Column,d.default.Cell,d.default.ColumnHeader)},u.createElement("div",{className:l.default(d.default.Name,{[d.default.isSorted]:t.sortColumn===e}),"data-column":e,onClick:n},e)," "))),t.grid.map((n,r)=>e(r,t.columns,n,d.default.Row,d.default.Cell))):u.createElement(u.Fragment,null,u.createElement("h1",{className:d.default.H1},"No data loaded"),u.createElement("p",{className:l.default(d.default.Text,d.default.P)},"Nothing to show...")))});t.default=p},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=a(n(0)),s=i(n(3));t.default=({children:e})=>u.createElement("div",{className:s.default.Body},u.createElement("header",{className:s.default.Header},"Github repos list app🐱‍🏍"),u.createElement("section",{className:s.default.Content},e),u.createElement("footer",{className:s.default.Footer},"© ",(new Date).getFullYear()," ",u.createElement("a",{href:"mailto:oleg.sherbakov.85@gmail.com",rel:"nofollow"},"oleg.sherbakov.85@gmail.com")))},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=a(n(0)),s=n(1),l=i(n(4)),c=n(5),f=i(n(2)),d=i(n(3)),p=s.observer(()=>{const e=c.usePanel(),[t,n]=u.useState(!1),r=!e.username||e.isLoading;return u.createElement("nav",{className:l.default(d.default.Panel,{[d.default.PanelIsHidden]:t}),onDoubleClick:e=>e.target===e.currentTarget&&n(!t),title:"click to hide panel"},u.createElement("input",{type:"text",value:e.username,onChange:e=>f.default.changeUsername(e.target.value),onKeyDown:e=>"Enter"===e.key&&f.default.loadRepos(),className:d.default.Input,placeholder:"enter any username",autoComplete:"off"}),u.createElement("br",null),u.createElement("button",{onClick:()=>f.default.loadRepos(),disabled:r},"load repositories"))});t.default=p},function(e,t,n){"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function r(e){return"[object Object]"===Object.prototype.toString.call(e)}n.r(t),n.d(t,"endpoint",(function(){return v}));var o=n(6);function a(e,t){const n=Object.assign({},e);return Object.keys(t).forEach(o=>{var i,u,s;!1!==r(i=t[o])&&(void 0===(u=i.constructor)||!1!==r(s=u.prototype)&&!1!==s.hasOwnProperty("isPrototypeOf"))?o in e?n[o]=a(e[o],t[o]):Object.assign(n,{[o]:t[o]}):Object.assign(n,{[o]:t[o]})}),n}function i(e,t,n){if("string"==typeof t){let[e,r]=t.split(" ");n=Object.assign(r?{method:e,url:r}:{url:e},n)}else n=Object.assign({},t);var r;n.headers=(r=n.headers)?Object.keys(r).reduce((e,t)=>(e[t.toLowerCase()]=r[t],e),{}):{};const o=a(e||{},n);return e&&e.mediaType.previews.length&&(o.mediaType.previews=e.mediaType.previews.filter(e=>!o.mediaType.previews.includes(e)).concat(o.mediaType.previews)),o.mediaType.previews=o.mediaType.previews.map(e=>e.replace(/-preview/,"")),o}const u=/\{[^}]+\}/g;function s(e){return e.replace(/^\W+|\W+$/g,"").split(/,/)}function l(e,t){return Object.keys(e).filter(e=>!t.includes(e)).reduce((t,n)=>(t[n]=e[n],t),{})}function c(e){return e.split(/(%[0-9A-Fa-f]{2})/g).map((function(e){return/%[0-9A-Fa-f]/.test(e)||(e=encodeURI(e).replace(/%5B/g,"[").replace(/%5D/g,"]")),e})).join("")}function f(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function d(e,t,n){return t="+"===e||"#"===e?c(t):f(t),n?f(n)+"="+t:t}function p(e){return null!=e}function m(e){return";"===e||"&"===e||"?"===e}function h(e,t){var n=["+","#",".","/",";","?","&"];return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,(function(e,r,o){if(r){let e="";const o=[];if(-1!==n.indexOf(r.charAt(0))&&(e=r.charAt(0),r=r.substr(1)),r.split(/,/g).forEach((function(n){var r=/([^:\*]*)(?::(\d+)|(\*))?/.exec(n);o.push(function(e,t,n,r){var o=e[n],a=[];if(p(o)&&""!==o)if("string"==typeof o||"number"==typeof o||"boolean"==typeof o)o=o.toString(),r&&"*"!==r&&(o=o.substring(0,parseInt(r,10))),a.push(d(t,o,m(t)?n:""));else if("*"===r)Array.isArray(o)?o.filter(p).forEach((function(e){a.push(d(t,e,m(t)?n:""))})):Object.keys(o).forEach((function(e){p(o[e])&&a.push(d(t,o[e],e))}));else{const e=[];Array.isArray(o)?o.filter(p).forEach((function(n){e.push(d(t,n))})):Object.keys(o).forEach((function(n){p(o[n])&&(e.push(f(n)),e.push(d(t,o[n].toString())))})),m(t)?a.push(f(n)+"="+e.join(",")):0!==e.length&&a.push(e.join(","))}else";"===t?p(o)&&a.push(f(n)):""!==o||"&"!==t&&"?"!==t?""===o&&a.push(""):a.push(f(n)+"=");return a}(t,e,r[1],r[2]||r[3]))})),e&&"+"!==e){var a=",";return"?"===e?a="&":"#"!==e&&(a=e),(0!==o.length?e:"")+o.join(a)}return o.join(",")}return c(o)}))}function b(e){let t,n=e.method.toUpperCase(),r=(e.url||"/").replace(/:([a-z]\w+)/g,"{+$1}"),o=Object.assign({},e.headers),a=l(e,["method","baseUrl","url","headers","request","mediaType"]);const i=function(e){const t=e.match(u);return t?t.map(s).reduce((e,t)=>e.concat(t),[]):[]}(r);var c;r=(c=r,{expand:h.bind(null,c)}).expand(a),/^http/.test(r)||(r=e.baseUrl+r);const f=l(a,Object.keys(e).filter(e=>i.includes(e)).concat("baseUrl"));if(!/application\/octet-stream/i.test(o.accept)&&(e.mediaType.format&&(o.accept=o.accept.split(/,/).map(t=>t.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,"application/vnd$1$2."+e.mediaType.format)).join(",")),e.mediaType.previews.length)){const t=o.accept.match(/[\w-]+(?=-preview)/g)||[];o.accept=t.concat(e.mediaType.previews).map(t=>`application/vnd.github.${t}-preview${e.mediaType.format?"."+e.mediaType.format:"+json"}`).join(",")}return["GET","HEAD"].includes(n)?r=function(e,t){const n=/\?/.test(e)?"&":"?",r=Object.keys(t);return 0===r.length?e:e+n+r.map(e=>"q"===e?"q="+t.q.split("+").map(encodeURIComponent).join("+"):`${e}=${encodeURIComponent(t[e])}`).join("&")}(r,f):"data"in f?t=f.data:Object.keys(f).length?t=f:o["content-length"]=0,o["content-type"]||void 0===t||(o["content-type"]="application/json; charset=utf-8"),["PATCH","PUT"].includes(n)&&void 0===t&&(t=""),Object.assign({method:n,url:r,headers:o},void 0!==t?{body:t}:null,e.request?{request:e.request}:null)}function g(e,t,n){return b(i(e,t,n))}const v=function e(t,n){const r=i(t,n),o=g.bind(null,r);return Object.assign(o,{DEFAULTS:r,defaults:e.bind(null,r),merge:i.bind(null,r),parse:b})}(null,{method:"GET",baseUrl:"https://api.github.com",headers:{accept:"application/vnd.github.v3+json","user-agent":"octokit-endpoint.js/6.0.6 "+Object(o.a)()},mediaType:{format:"",previews:[]}})}])}));
//# sourceMappingURL=index.js.map