!function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(t,o,e){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(o,t){if(1&t&&(o=n(o)),8&t)return o;if(4&t&&"object"==typeof o&&o&&o.__esModule)return o;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:o}),2&t&&"string"!=typeof o)for(var r in o)n.d(e,r,function(t){return o[t]}.bind(null,r));return e},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="",n(n.s=4)}([function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var c=function(t){return document.querySelectorAll(t)};o.es=c,o.on_=function(e,o,r,n){if(void 0===o&&(o=""),void 0===r&&(r={}),void 0===n&&(n=-1),-1===e.constructor.toString().indexOf("Array")&&""!==o)-1<n?c(e)[n].addEventListener(o,r):Array.from(c(e),function(t){return t.addEventListener(o,r)});else for(var t=function(o,t){void 0===e[o][3]&&(e[o][3]=-1),-1<n?c(e[o][0])[e[o][3]].addEventListener(e[o][1],e[o][2]):Array.from(c(e[o][0]),function(t){return t.addEventListener(e[o][1],e[o][2])})},u=0,i=e.length;u<i;u++)t(u)},o.css_=function(e,o,r,t){if(void 0===o&&(o=""),void 0===r&&(r=-1),void 0===t&&(t=""),"GET"===t.toUpperCase()&&-1<r)return c(e)[r].style[o];if(-1===e.constructor.toString().indexOf("Array")&&""!==o)-1<r?Object.assign(c(e)[r].style,o):Array.from(c(e),function(t){Object.assign(t.style,o)});else for(var n=function(o,t){void 0===e[o][2]&&(e[o][2]=-1),-1<r?Object.assign(c(e[o][0])[e[o][2]].style,e[o][1]):Array.from(c(e[o][0]),function(t){Object.assign(t.style,e[o][1])})},u=0,i=e.length;u<i;u++)n(u)},o.html_=function(e,o,r){if(void 0===o&&(o=""),void 0===r&&(r=-1),"GET"===o.toUpperCase()&&-1<r)return c(e)[r].innerHTML;if(-1===e.constructor.toString().indexOf("Array")&&""!==o)-1<r?c(e)[r].innerHTML=o:Array.from(c(e),function(t){t.innerHTML=o});else for(var t=function(o,t){void 0===e[o][2]&&(e[o][2]=-1),-1<r?c(e[o][0])[e[o][2]].innerHTML=e[o][1]:Array.from(c(e[o][0]),function(t){t.innerHTML=e[o][1]})},n=0,u=e.length;n<u;n++)t(n)},o.attr_=function(e,o,r,t){if(void 0===o&&(o=""),void 0===r&&(r=-1),void 0===t&&(t=""),"GET"===t.toUpperCase()&&-1<r)return c(e)[r].getAttribute(o);if(-1===e.constructor.toString().indexOf("Array")&&""!==o)-1<r?Object.assign(c(e)[r].setAttribute,o):Array.from(c(e),function(t){Object.assign(t.setAttribute,o)});else for(var n=function(o,t){void 0===e[o][2]&&(e[o][2]=-1),-1<r?Object.assign(c(e[o][0])[e[o][2]].setAttribute,e[o][1]):Array.from(c(e[o][0]),function(t){Object.assign(t.setAttribute,e[o][1])})},u=0,i=e.length;u<i;u++)n(u)}},,,,function(t,o,e){var r=0,n=0,u=new Date,i=e(0),c=i.on_,a=i.css_,s=function(t){a(0<t?[["p:not(#copyright) span, h2 span",{color:"#eee"}],["body",{background:"#333"}],["#toNight",{transform:"scale(0)"}],["#toLight",{transform:"scale(1)"}],["#title",{color:"#222",background:"#eee"}],["p:not(#copyright)",{color:"#bbb"}],["button",{color:"#222",border:".5vmin solid #222",background:"transparent"}]]:[["p:not(#copyright) span, h2 span",{color:"#444"}],["body",{background:"#fff"}],["#toNight",{transform:"scale(1)"}],["#toLight",{transform:"scale(0)"}],["#title",{color:"#eee",background:"#222"}],["p:not(#copyright)",{color:"#666"}],["button",{color:"#eee",border:".5vmin solid #eee",background:"transparent"}]])};r=18<=u.getHours()||u.getHours()<=8?1:0,setInterval(function(){1!==n&&(r=18<=u.getHours()||u.getHours()<=8?1:0)},1e3),c([["#toNight","click",function(){n=18<=u.getHours()||u.getHours()<=8?1:0,s(r=1)}],["#toLight","click",function(){n=u.getHours()<18&&8<u.getHours()?1:0,s(r=0)}],["#back, #back button","mouseover",function(){a("#back button",0<r?{color:"#eee",background:"#222"}:{color:"#222",background:"#eee"})}],["#back, #back button","mouseout",function(){r="rgb(255, 255, 255)"===$("body").css_("background-color")?0:1,a("#back button",0<r?{color:"#222",background:"#eee"}:{color:"#eee",background:"#222"})}],["#about, #about button","mouseover",function(){a("#about button",0<r?{color:"#eee",background:"#222"}:{color:"#222",background:"#eee"})}],["#about, #about button","mouseout",function(){r="rgb(255, 255, 255)"===a("body","background-color",0,"GET")?0:1,a("#about button",0<r?{color:"#222",background:"#eee"}:{color:"#eee",background:"#222"})}]]),s(r)}]);