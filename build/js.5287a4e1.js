parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
function e(){var e=document.querySelector(".togglemenu");document.querySelector(".navbar__menu");e.classList.toggle("active"),navbar__menu.classList.toggle("active")}window.addEventListener("scroll",function(){document.querySelector(".navbar").classList.toggle("sticky",window.scrollY>0)});var t=document.querySelector("#hamburger"),c=document.querySelector(".navbar__menu"),n=document.querySelector("body"),o=document.querySelectorAll(".navbar__menu--links"),l=function(){t.classList.toggle("is-active"),c.classList.toggle("active"),n.classList.toggle("active")};t.addEventListener("click",l);var r=function(e){o.style.color=white};
},{}],"UhYQ":[function(require,module,exports) {

},{"./..\\assets\\basicux-01.jpg":[["basicux-01.05bf771a.jpg","JIuE"],"JIuE"],"./..\\assets\\loader-basicux.jpg":[["loader-basicux.c1d2f2aa.jpg","d5dr"],"d5dr"],"./..\\assets\\triniso-01.jpg":[["triniso-01.a869b57b.jpg","plto"],"plto"],"./..\\assets\\loader-triniso.jpg":[["loader-triniso.8914b344.jpg","NN8Q"],"NN8Q"],"./..\\assets\\symova-01.jpg":[["symova-01.9ffd97ca.jpg","wIk5"],"wIk5"],"./..\\assets\\loader-symova.jpg":[["loader-symova.972699ad.jpg","JiK6"],"JiK6"],"./..\\assets\\pmr-01.jpg":[["pmr-01.5c47734a.jpg","v2o2"],"v2o2"],"./..\\assets\\loader-pmr.jpg":[["loader-pmr.4143563a.jpg","wuaO"],"wuaO"]}],"QvaY":[function(require,module,exports) {
"use strict";require("./main"),require("../scss/portfolio.scss");
},{"./main":"d6sW","../scss/portfolio.scss":"UhYQ"}]},{},["QvaY"], null)
//# sourceMappingURL=js.5287a4e1.js.map