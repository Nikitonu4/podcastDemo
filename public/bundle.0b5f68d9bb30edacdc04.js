(()=>{"use strict";var n={740:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(15),r=e.n(o),a=e(645),i=e.n(a)()(r());i.push([n.id,"/**\n * Body CSS\n */\n\nhtml,\nbody {\n  height: 100%;\n}\n\nhtml,\nbody,\ninput,\ntextarea,\nbutton {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n}\n\n\n/**\n  * Sidebar CSS\n  */\n\n#sidebar {\n  background-color: #39A1F4;\n  padding: 15px;\n}\n\n@media (min-width: 768px) {\n  #sidebar {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    width: 180px;\n    height: 100%;\n    padding-top: 30px;\n  }\n}\n\n\n/**\n  * Content CSS\n  */\n@media (min-width: 768px) {\n  #content {\n    margin-left: 180px;\n  }\n}\n\n.floating-btn {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n}\n\n.modal {\n  max-width: 600px;\n  min-height: 300px;\n  margin: 100px auto;\n  overflow-y: auto;\n  background: #fff;\n}\n\n.modal>h1 {\n  text-align: center;\n}\n\n.modal .modal-content {\n  padding: 1rem;\n}","",{version:3,sources:["webpack://./src/css/styles.css"],names:[],mappings:"AAAA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;;;EAKE,mCAAmC;EACnC,kCAAkC;EAClC,6CAA6C;AAC/C;;;AAGA;;GAEG;;AAEH;EACE,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE;IACE,eAAe;IACf,MAAM;IACN,SAAS;IACT,YAAY;IACZ,YAAY;IACZ,iBAAiB;EACnB;AACF;;;AAGA;;GAEG;AACH;EACE;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf",sourcesContent:["/**\n * Body CSS\n */\n\nhtml,\nbody {\n  height: 100%;\n}\n\nhtml,\nbody,\ninput,\ntextarea,\nbutton {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n}\n\n\n/**\n  * Sidebar CSS\n  */\n\n#sidebar {\n  background-color: #39A1F4;\n  padding: 15px;\n}\n\n@media (min-width: 768px) {\n  #sidebar {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    width: 180px;\n    height: 100%;\n    padding-top: 30px;\n  }\n}\n\n\n/**\n  * Content CSS\n  */\n@media (min-width: 768px) {\n  #content {\n    margin-left: 180px;\n  }\n}\n\n.floating-btn {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n}\n\n.modal {\n  max-width: 600px;\n  min-height: 300px;\n  margin: 100px auto;\n  overflow-y: auto;\n  background: #fff;\n}\n\n.modal>h1 {\n  text-align: center;\n}\n\n.modal .modal-content {\n  padding: 1rem;\n}"],sourceRoot:""}]);const s=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);o&&r[d[0]]||(e&&(d[2]?d[2]="".concat(e," and ").concat(d[2]):d[2]=e),t.push(d))}},t}},15:n=>{function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}n.exports=function(n){var e,o,r=(o=4,function(n){if(Array.isArray(n))return n}(e=n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var o,r,a=[],i=!0,s=!1;try{for(e=e.call(n);!(i=(o=e.next()).done)&&(a.push(o.value),!t||a.length!==t);i=!0);}catch(n){s=!0,r=n}finally{try{i||null==e.return||e.return()}finally{if(s)throw r}}return a}}(e,o)||function(n,e){if(n){if("string"==typeof n)return t(n,e);var o=Object.prototype.toString.call(n).slice(8,-1);return"Object"===o&&n.constructor&&(o=n.constructor.name),"Map"===o||"Set"===o?Array.from(n):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(n,e):void 0}}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[1],i=r[3];if(!i)return a;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),c="/*# ".concat(d," */"),u=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[a].concat(u).concat([c]).join("\n")}return[a].join("\n")}},994:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var d=n[s],c=o.base?d[0]+o.base:d[0],u=a[c]||0,l="".concat(c," ").concat(u);a[c]=u+1;var p=e(l),A={css:d[1],media:d[2],sourceMap:d[3]};-1!==p?(t[p].references++,t[p].updater(A)):t.push({identifier:l,updater:r(A,o),references:1}),i.push(l)}return i}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);t[s].references--}for(var d=o(n,r),c=0;c<a.length;c++){var u=e(a[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=d}}},569:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o=e.css,r=e.media,a=e.sourceMap;r?n.setAttribute("media",r):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,n)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return n[o](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{function n(n){return n.length>=10}class t{static create(n){return fetch("https://podcast-questions-app1-default-rtdb.firebaseio.com/questions.json",{method:"POST",body:JSON.stringify(n),header:{"Content-Type":"application/json"}}).then((n=>n.json())).then((t=>(n.id=t.name,n))).then(r).then(t.renderList)}static renderList(){const n=a(),t=n.length?n.map(o).join(" "):'<div class="mui--text-headline">Вы пока ничего не спрашивали</div>';document.getElementById("list").innerHTML=t}}function o(n){return`\n  <div class="mui--text-black-54">\n  ${new Date(n.date).toLocaleDateString()}\n  ${new Date(n.date).toLocaleTimeString()}\n  </div>\n  <div>${n.text}</div>\n  `}function r(n){const t=a();t.push(n),localStorage.setItem("questions",JSON.stringify(t))}function a(){return JSON.parse(localStorage.getItem("questions")||"[]")}var i=e(994),s=e.n(i),d=e(795),c=e.n(d),u=e(569),l=e.n(u),p=e(565),A=e.n(p),f=e(216),m=e.n(f),h=e(589),g=e.n(h),v=e(740),b={};b.styleTagTransform=g(),b.setAttributes=A(),b.insert=l().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=m(),s()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals;const y=document.getElementById("form"),C=y.querySelector("#question-input"),x=y.querySelector("#submit"),E=document.querySelector("#modal-btn");function S(n){var t,e;n.preventDefault(),t=n.target.querySelector("#email").value,e=n.target.querySelector("#password").value,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[AIzaSyCBDBgtLcp8UNdQFf3zF1Y_jt6N0Vc30j4]",{method:"POST",body:JSON.stringify({email:t,password:e,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((n=>n.json())).then((n=>console.log(n)))}window.addEventListener("load",t.renderList),y.addEventListener("submit",(function(e){if(e.preventDefault(),n(C.value)){const n={text:C.value.trim(),date:(new Date).toJSON()};x.disabled=!0,t.create(n).then((()=>{C.value="",C.className="",x.disabled=!1}))}})),C.addEventListener("input",(()=>{x.disabled=!n(C.value)})),E.addEventListener("click",(function(){(function(n,t){const e=document.createElement("div");e.classList.add("modal");e.innerHTML='\n  <h1>Авторзация</h1>\n  <div class="modal-content">\n  <form id="auth-form" class="mui-form">\n      <div class="mui-textfield mui-textfield--float-label">\n        <input type="email" id="email" required>\n        <label for="email">Email</label>\n      </div>\n      <div class="mui-textfield mui-textfield--float-label">\n        <input type="password" id="password" required>\n        <label for="password">Пароль</label>\n      </div>\n      <button type="submit"class="mui-btn mui-btn--raised mui-btn--primary" >Войти</button>\n\n  </form>\n  </div>\n  ',mui.overlay("on",e)})(),document.getElementById("auth-form").addEventListener("submit",S,{once:!0})}))})()})();
//# sourceMappingURL=main.js.map