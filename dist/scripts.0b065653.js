parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"imtx":[function(require,module,exports) {
var e=document.getElementById("bill"),t=document.querySelectorAll(".tip-val"),n=document.getElementById("custom-tip"),u=document.getElementById("people"),a=document.querySelector(".error-msg"),l=document.querySelectorAll(".amount"),r=document.querySelector(".reset"),i=0,c=.15,o=1;function s(e){return e.match(/^[0-9]*\.?[0-9]*$/)}function v(e){return e.match(/^[0-9]*$/)}function d(e){t.forEach(function(t){t.classList.remove("btn-active"),e.target.innerHTML==t.innerHTML&&(t.classList.add("btn-active"),c=parseFloat(t.innerHTML)/100)}),n.value="",g()}function m(){v(n.value)||(n.value=n.value.substring(0,n.value.length-1)),c=parseFloat(n.value/100),t.forEach(function(e){e.classList.remove("btn-active")}),""!==n.value&&g()}function f(){e.value.includes(",")&&(e.value=e.value.replace(",",".")),s(e.value)||(e.value=e.value.substring(0,e.value.length-1)),i=parseFloat(e.value),g()}function L(){v(u.value)||(u.value=u.value.substring(0,u.value.length-1)),(o=parseFloat(u.value))<=0&&(a.classList.add("show-error-msg"),setTimeout(function(){a.classList.remove("show-error-msg")},3e3)),g()}function g(){if(o>=1){var e=i*c/o,t=i*(c+1)/o;l[0].innerHTML="$"+e.toFixed(2),l[1].innerHTML="$"+t.toFixed(2)}}function p(){e.value="0.0",f(),t[2].click(),u.value="1",L()}e.addEventListener("input",f),t.forEach(function(e){e.addEventListener("click",d)}),n.addEventListener("input",m),u.addEventListener("input",L),r.addEventListener("click",p);
},{}]},{},["imtx"], null)
//# sourceMappingURL=/scripts.0b065653.js.map