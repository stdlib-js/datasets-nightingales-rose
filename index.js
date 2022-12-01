// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("buffer")):"function"==typeof define&&define.amd?define(["buffer"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).rose=e(r.require$$0)}(this,(function(r){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function t(){return e&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function i(r,e){return null!=r&&o.call(r,e)}var a="function"==typeof Symbol?Symbol.toStringTag:"";var u=t()?function(r){var e,t,o;if(null==r)return n.call(r);t=r[a],e=i(r,a);try{r[a]=void 0}catch(e){return n.call(r)}return o=n.call(r),e?r[a]=t:delete r[a],o}:function(r){return n.call(r)};var c=Array.isArray?Array.isArray:function(r){return"[object Array]"===u(r)},f="function"==typeof Object.defineProperty?Object.defineProperty:null;var s,l=Object.defineProperty,p=Object.prototype,y=p.toString,d=p.__defineGetter__,v=p.__defineSetter__,g=p.__lookupGetter__,h=p.__lookupSetter__;s=function(){try{return f({},"x",{}),!0}catch(r){return!1}}()?l:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===y.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===y.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(g.call(r,e)||h.call(r,e)?(n=r.__proto__,r.__proto__=p,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&d&&d.call(r,e,t.get),a&&v&&v.call(r,e,t.set),r};var w=s;function b(r,e,t){w(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function m(r){return"number"==typeof r}var j=Number,A=j.prototype.toString;var O=t();function _(r){return"object"==typeof r&&(r instanceof j||(O?function(r){try{return A.call(r),!0}catch(r){return!1}}(r):"[object Number]"===u(r)))}function E(r){return m(r)||_(r)}b(E,"isPrimitive",m),b(E,"isObject",_);var T=Number.POSITIVE_INFINITY,I=j.NEGATIVE_INFINITY,S=Math.floor;function x(r){return S(r)===r}function U(r){return r<T&&r>I&&x(r)}function z(r){return m(r)&&U(r)}function F(r){return _(r)&&U(r.valueOf())}function Z(r){return z(r)||F(r)}function k(r){return z(r)&&r>=0}function P(r){return F(r)&&r.valueOf()>=0}function V(r){return k(r)||P(r)}function C(r){return null!==r&&"object"==typeof r}function N(r){return C(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}b(Z,"isPrimitive",z),b(Z,"isObject",F),b(V,"isPrimitive",k),b(V,"isObject",P),b(C,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!c(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(C));var $=/./;function B(r){return"boolean"==typeof r}var R=Boolean.prototype.toString;var L=t();function M(r){return"object"==typeof r&&(r instanceof Boolean||(L?function(r){try{return R.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===u(r)))}function G(r){return B(r)||M(r)}function W(){return new Function("return this;")()}b(G,"isPrimitive",B),b(G,"isObject",M);var X="object"==typeof self?self:null,D="object"==typeof window?window:null,Y="object"==typeof global?global:null;var q=function(r){if(arguments.length){if(!B(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return W()}if(X)return X;if(D)return D;if(Y)return Y;throw new Error("unexpected error. Unable to resolve global object.")}(),H=q.document&&q.document.childNodes,J=Int8Array;function K(){return/^\s*function\s*([^(]*)/i}var Q=/^\s*function\s*([^(]*)/i;function rr(r){var e,t,n;if(("Object"===(t=u(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Q.exec(n.toString()))return e[1]}return N(r)?"Buffer":t}b(K,"REGEXP",Q);var er="function"==typeof $||"object"==typeof J||"function"==typeof H?function(r){return rr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?rr(r).toLowerCase():e};function tr(r){return"function"===er(r)}var nr,or=Object.getPrototypeOf;nr=tr(Object.getPrototypeOf)?or:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===u(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ir=nr;function ar(r){return null==r?null:(r=Object(r),ir(r))}function ur(r){return"string"==typeof r}var cr=String.prototype.valueOf;var fr=t();function sr(r){return"object"==typeof r&&(r instanceof String||(fr?function(r){try{return cr.call(r),!0}catch(r){return!1}}(r):"[object String]"===u(r)))}function lr(r){return ur(r)||sr(r)}function pr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}function yr(r){return"number"==typeof r}function dr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function vr(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+dr(o):dr(o)+r,n&&(r="-"+r)),r}b(lr,"isPrimitive",ur),b(lr,"isObject",sr),b(pr,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/);var gr=String.prototype.toLowerCase,hr=String.prototype.toUpperCase;function wr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!yr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=vr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=vr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===hr.call(r.specifier)?hr.call(t):gr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function br(r){return"string"==typeof r}var mr=Math.abs,jr=String.prototype.toLowerCase,Ar=String.prototype.toUpperCase,Or=String.prototype.replace,_r=/e\+(\d)$/,Er=/e-(\d)$/,Tr=/^(\d+)$/,Ir=/^(\d+)e/,Sr=/\.0$/,xr=/\.0*e/,Ur=/(\..*[^0])0*e/;function zr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!yr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":mr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Or.call(t,Ur,"$1e"),t=Or.call(t,xr,"e"),t=Or.call(t,Sr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Or.call(t,_r,"e+0$1"),t=Or.call(t,Er,"e-0$1"),r.alternate&&(t=Or.call(t,Tr,"$1."),t=Or.call(t,Ir,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Ar.call(r.specifier)?Ar.call(t):jr.call(t)}function Fr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Zr(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Fr(n):Fr(n)+r}var kr=String.fromCharCode,Pr=isNaN,Vr=Array.isArray;function Cr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Nr(r){var e,t,n,o,i,a,u,c,f;if(!Vr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(br(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=Cr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Pr(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,Pr(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=wr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Pr(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Pr(i)?String(n.arg):kr(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=zr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=vr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Zr(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var $r=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Br(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Rr(r){var e,t,n,o;for(t=[],o=0,n=$r.exec(r);n;)(e=r.slice(o,$r.lastIndex-n[0].length)).length&&t.push(e),t.push(Br(n)),o=$r.lastIndex,n=$r.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function Lr(r){return"string"==typeof r}function Mr(r){var e,t,n;if(!Lr(r))throw new TypeError(Mr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Rr(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return Nr.apply(null,t)}function Gr(r){if(!ur(r))throw new TypeError(Mr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return(r=/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/.exec(r))?new RegExp(r[1],r[2]):null}function Wr(r){return r!=r}function Xr(r){return m(r)&&Wr(r)}function Dr(r){return _(r)&&Wr(r.valueOf())}function Yr(r){return Xr(r)||Dr(r)}b(Yr,"isPrimitive",Xr),b(Yr,"isObject",Dr);function qr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&x(r.length)&&r.length>=0&&r.length<=9007199254740991}function Hr(r,e,t){var n,o;if(!qr(r)&&!ur(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!z(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Yr(e)){for(;o<n;o++)if(Yr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}function Jr(r){return Object.keys(Object(r))}var Kr,Qr=void 0!==Object.keys;function re(r){return"[object Arguments]"===u(r)}Kr=function(){return re(arguments)}();var ee=Kr,te=Object.prototype.propertyIsEnumerable;var ne=!te.call("beep","0");function oe(r,e){var t;return null!=r&&(!(t=te.call(r,e))&&ne&&lr(r)?!Xr(e=+e)&&z(e)&&e>=0&&e<r.length:t)}var ie=4294967295;var ae=ee?re:function(r){return null!==r&&"object"==typeof r&&!c(r)&&"number"==typeof r.length&&x(r.length)&&r.length>=0&&r.length<=ie&&i(r,"callee")&&!oe(r,"callee")},ue=Array.prototype.slice;var ce=oe((function(){}),"prototype"),fe=!oe({toString:null},"toString");function se(r){return r.constructor&&r.constructor.prototype===r}var le=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],pe="undefined"==typeof window?void 0:window;var ye=function(){var r;if("undefined"===er(pe))return!1;for(r in pe)try{-1===Hr(le,r)&&i(pe,r)&&null!==pe[r]&&"object"===er(pe[r])&&se(pe[r])}catch(r){return!0}return!1}(),de="undefined"!=typeof window;var ve,ge=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ve=Qr?function(){return 2!==(Jr(arguments)||"").length}(1,2)?function(r){return ae(r)?Jr(ue.call(r)):Jr(r)}:Jr:function(r){var e,t,n,o,a,u,c;if(o=[],ae(r)){for(c=0;c<r.length;c++)o.push(c.toString());return o}if("string"==typeof r){if(r.length>0&&!i(r,"0"))for(c=0;c<r.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!C(r))return o;t=ce&&n}for(a in r)t&&"prototype"===a||!i(r,a)||o.push(String(a));if(fe)for(e=function(r){if(!1===de&&!ye)return se(r);try{return se(r)}catch(r){return!1}}(r),c=0;c<ge.length;c++)u=ge[c],e&&"constructor"===u||!i(r,u)||o.push(String(u));return o};var he=ve,we=void 0!==Object.getOwnPropertyNames,be=Object.getOwnPropertyNames;var me=we?function(r){return be(Object(r))}:function(r){return he(Object(r))},je=void 0!==Object.getOwnPropertyDescriptor,Ae=Object.getOwnPropertyDescriptor;var Oe=je?function(r,e){var t;return null==r||void 0===(t=Ae(r,e))?null:t}:function(r,e){return i(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null},_e="function"==typeof Buffer?Buffer:null;var Ee,Te=r.Buffer;Ee=function(){var r,e;if("function"!=typeof _e)return!1;try{r=N(e="function"==typeof _e.from?_e.from([1,2,3,4]):new _e([1,2,3,4]))&&1===e[0]&&2===e[1]&&3===e[2]&&4===e[3]}catch(e){r=!1}return r}()?Te:function(){throw new Error("not implemented")};var Ie=Ee;var Se=tr(Ie.from)?function(r){if(!N(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return Ie.from(r)}:function(r){if(!N(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return new Ie(r)},xe="function"==typeof Int8Array;var Ue="function"==typeof Int8Array?Int8Array:null;var ze,Fe="function"==typeof Int8Array?Int8Array:void 0;ze=function(){var r,e,t;if("function"!=typeof Ue)return!1;try{e=new Ue([1,3.14,-3.14,128]),t=e,r=(xe&&t instanceof Int8Array||"[object Int8Array]"===u(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Fe:function(){throw new Error("not implemented")};var Ze=ze,ke="function"==typeof Uint8Array;var Pe="function"==typeof Uint8Array?Uint8Array:null;var Ve,Ce="function"==typeof Uint8Array?Uint8Array:void 0;Ve=function(){var r,e,t;if("function"!=typeof Pe)return!1;try{e=new Pe(e=[1,3.14,-3.14,256,257]),t=e,r=(ke&&t instanceof Uint8Array||"[object Uint8Array]"===u(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ce:function(){throw new Error("not implemented")};var Ne=Ve,$e="function"==typeof Uint8ClampedArray;var Be="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Re,Le="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;Re=function(){var r,e,t;if("function"!=typeof Be)return!1;try{e=new Be([-1,0,1,3.14,4.99,255,256]),t=e,r=($e&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===u(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Le:function(){throw new Error("not implemented")};var Me=Re,Ge="function"==typeof Int16Array;var We="function"==typeof Int16Array?Int16Array:null;var Xe,De="function"==typeof Int16Array?Int16Array:void 0;Xe=function(){var r,e,t;if("function"!=typeof We)return!1;try{e=new We([1,3.14,-3.14,32768]),t=e,r=(Ge&&t instanceof Int16Array||"[object Int16Array]"===u(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?De:function(){throw new Error("not implemented")};var Ye=Xe,qe="function"==typeof Uint16Array;var He="function"==typeof Uint16Array?Uint16Array:null;var Je,Ke="function"==typeof Uint16Array?Uint16Array:void 0;Je=function(){var r,e,t;if("function"!=typeof He)return!1;try{e=new He(e=[1,3.14,-3.14,65536,65537]),t=e,r=(qe&&t instanceof Uint16Array||"[object Uint16Array]"===u(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ke:function(){throw new Error("not implemented")};var Qe=Je,rt="function"==typeof Int32Array;var et="function"==typeof Int32Array?Int32Array:null;var tt,nt="function"==typeof Int32Array?Int32Array:void 0;tt=function(){var r,e,t;if("function"!=typeof et)return!1;try{e=new et([1,3.14,-3.14,2147483648]),t=e,r=(rt&&t instanceof Int32Array||"[object Int32Array]"===u(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?nt:function(){throw new Error("not implemented")};var ot=tt,it="function"==typeof Uint32Array;var at="function"==typeof Uint32Array?Uint32Array:null;var ut,ct="function"==typeof Uint32Array?Uint32Array:void 0;ut=function(){var r,e,t;if("function"!=typeof at)return!1;try{e=new at(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(it&&t instanceof Uint32Array||"[object Uint32Array]"===u(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ct:function(){throw new Error("not implemented")};var ft=ut,st="function"==typeof Float32Array;var lt="function"==typeof Float32Array?Float32Array:null;var pt,yt="function"==typeof Float32Array?Float32Array:void 0;pt=function(){var r,e,t;if("function"!=typeof lt)return!1;try{e=new lt([1,3.14,-3.14,5e40]),t=e,r=(st&&t instanceof Float32Array||"[object Float32Array]"===u(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===T}catch(e){r=!1}return r}()?yt:function(){throw new Error("not implemented")};var dt=pt,vt="function"==typeof Float64Array;var gt="function"==typeof Float64Array?Float64Array:null;var ht,wt="function"==typeof Float64Array?Float64Array:void 0;ht=function(){var r,e,t;if("function"!=typeof gt)return!1;try{e=new gt([1,3.14,-3.14,NaN]),t=e,r=(vt&&t instanceof Float64Array||"[object Float64Array]"===u(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?wt:function(){throw new Error("not implemented")};var bt=ht;function mt(r){return new Ze(r)}function jt(r){return new Ne(r)}function At(r){return new Me(r)}function Ot(r){return new Ye(r)}function _t(r){return new Qe(r)}function Et(r){return new ot(r)}function Tt(r){return new ft(r)}function It(r){return new dt(r)}function St(r){return new bt(r)}var xt={int8array:mt,uint8array:jt,uint8clampedarray:At,int16array:Ot,uint16array:_t,int32array:Et,uint32array:Tt,float32array:It,float64array:St};function Ut(r,e,t,n,o){var a,f,s,l,p,y,d,v,g,h;if(o-=1,"object"!=typeof r||null===r)return r;if(N(r))return Se(r);if(function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===u(r))return!0;r=ar(r)}return!1}(r))return function(r){var e,t,n,o,a,u,f=[],s=[];for(a=new r.constructor(r.message),f.push(r),s.push(a),r.stack&&(a.stack=r.stack),r.code&&(a.code=r.code),r.errno&&(a.errno=r.errno),r.syscall&&(a.syscall=r.syscall),e=he(r),u=0;u<e.length;u++)o=e[u],i(t=Oe(r,o),"value")&&(n=c(r[o])?[]:{},t.value=Ut(r[o],n,f,s,-1)),w(a,o,t);return a}(r);if("date"===(s=er(r)))return new Date(+r);if("regexp"===s)return Gr(r.toString());if("set"===s)return new Set(r);if("map"===s)return new Map(r);if("string"===s||"boolean"===s||"number"===s)return r.valueOf();if(p=xt[s])return p(r);if("array"!==s&&"object"!==s)return"function"==typeof Object.freeze?function(r){var e,t,n,o,a,u,f,s;for(e=[],o=[],f=Object.create(ar(r)),e.push(r),o.push(f),t=me(r),s=0;s<t.length;s++)n=t[s],i(a=Oe(r,n),"value")&&(u=c(r[n])?[]:{},a.value=Ut(r[n],u,e,o,-1)),w(f,n,a);return Object.isExtensible(r)||Object.preventExtensions(f),Object.isSealed(r)&&Object.seal(f),Object.isFrozen(r)&&Object.freeze(f),f}(r):{};if(f=he(r),o>0)for(a=s,h=0;h<f.length;h++)v=r[y=f[h]],s=er(v),"object"!=typeof v||null===v||"array"!==s&&"object"!==s||N(v)?"object"===a?(i(l=Oe(r,y),"value")&&(l.value=Ut(v)),w(e,y,l)):e[y]=Ut(v):-1===(g=Hr(t,v))?(d=c(v)?new Array(v.length):{},t.push(v),n.push(d),"array"===a?e[y]=Ut(v,d,t,n,o):(i(l=Oe(r,y),"value")&&(l.value=Ut(v,d,t,n,o)),w(e,y,l))):e[y]=n[g];else if("array"===s)for(h=0;h<f.length;h++)e[y=f[h]]=r[y];else for(h=0;h<f.length;h++)y=f[h],l=Oe(r,y),w(e,y,l);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}var zt=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}];return function(){return function(r,e){var t;if(arguments.length>1){if(!k(e))throw new TypeError("invalid argument. `level` must be a nonnegative integer. Value: `"+e+"`.");if(0===e)return r}else e=T;return Ut(r,t=c(r)?new Array(r.length):{},[r],[t],e)}(zt)}}));
//# sourceMappingURL=index.js.map
