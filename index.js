// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("buffer")):"function"==typeof define&&define.amd?define(["buffer"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).rose=e(r.require$$0)}(this,(function(r){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function t(){return e&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function i(r,e){return null!=r&&o.call(r,e)}var a="function"==typeof Symbol?Symbol:void 0,u="function"==typeof a?a.toStringTag:"";var c=t()?function(r){var e,t,o;if(null==r)return n.call(r);t=r[u],e=i(r,u);try{r[u]=void 0}catch(e){return n.call(r)}return o=n.call(r),e?r[u]=t:delete r[u],o}:function(r){return n.call(r)};var f=Array.isArray?Array.isArray:function(r){return"[object Array]"===c(r)},s="function"==typeof Object.defineProperty?Object.defineProperty:null;var l=Object.defineProperty;function p(r){return"number"==typeof r}function y(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function d(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+y(o):y(o)+r,n&&(r="-"+r)),r}var v=String.prototype.toLowerCase,g=String.prototype.toUpperCase;function h(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!p(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=d(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=d(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===g.call(r.specifier)?g.call(t):v.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var w=Math.abs,b=String.prototype.toLowerCase,m=String.prototype.toUpperCase,j=String.prototype.replace,A=/e\+(\d)$/,O=/e-(\d)$/,_=/^(\d+)$/,E=/^(\d+)e/,T=/\.0$/,I=/\.0*e/,S=/(\..*[^0])0*e/;function x(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!p(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":w(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=j.call(t,S,"$1e"),t=j.call(t,I,"e"),t=j.call(t,T,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=j.call(t,A,"e+0$1"),t=j.call(t,O,"e-0$1"),r.alternate&&(t=j.call(t,_,"$1."),t=j.call(t,E,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===m.call(r.specifier)?m.call(t):b.call(t)}function U(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var z=String.fromCharCode,F=Array.isArray;function Z(r){return r!=r}function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function P(r){var e,t,n,o,i,a,u,c,f,s,l,p,y;if(!F(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(n=r[c],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Z(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,Z(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=h(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!Z(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Z(i)?String(n.arg):z(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=x(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=d(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,l=n.width,p=n.padRight,y=void 0,(y=l-s.length)<0?s:s=p?s+U(y):U(y)+s)),a+=n.arg||"",u+=1}return a}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function C(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function $(r){var e,t,n,o;for(t=[],o=0,n=V.exec(r);n;)(e=r.slice(o,V.lastIndex-n[0].length)).length&&t.push(e),t.push(C(n)),o=V.lastIndex,n=V.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function B(r){var e,t;if("string"!=typeof r)throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[$(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return P.apply(null,e)}var N,R=Object.prototype,L=R.toString,M=R.__defineGetter__,G=R.__defineSetter__,W=R.__lookupGetter__,X=R.__lookupSetter__;N=function(){try{return s({},"x",{}),!0}catch(r){return!1}}()?l:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===L.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===L.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(W.call(r,e)||X.call(r,e)?(n=r.__proto__,r.__proto__=R,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&M&&M.call(r,e,t.get),a&&G&&G.call(r,e,t.set),r};var D=N;function Y(r,e,t){D(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function q(r){return"number"==typeof r}var H=Number,J=H.prototype.toString;var K=t();function Q(r){return"object"==typeof r&&(r instanceof H||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Number]"===c(r)))}function rr(r){return q(r)||Q(r)}Y(rr,"isPrimitive",q),Y(rr,"isObject",Q);var er=Number.POSITIVE_INFINITY,tr=H.NEGATIVE_INFINITY,nr=Math.floor;function or(r){return nr(r)===r}function ir(r){return r<er&&r>tr&&or(r)}function ar(r){return q(r)&&ir(r)}function ur(r){return Q(r)&&ir(r.valueOf())}function cr(r){return ar(r)||ur(r)}function fr(r){return ar(r)&&r>=0}function sr(r){return ur(r)&&r.valueOf()>=0}function lr(r){return fr(r)||sr(r)}function pr(r){return null!==r&&"object"==typeof r}function yr(r){return pr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}Y(cr,"isPrimitive",ar),Y(cr,"isObject",ur),Y(lr,"isPrimitive",fr),Y(lr,"isObject",sr),Y(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!f(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(pr));var dr=Object,vr=/./;function gr(r){return"boolean"==typeof r}var hr=Boolean,wr=Boolean.prototype.toString;var br=t();function mr(r){return"object"==typeof r&&(r instanceof hr||(br?function(r){try{return wr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===c(r)))}function jr(r){return gr(r)||mr(r)}Y(jr,"isPrimitive",gr),Y(jr,"isObject",mr);var Ar="object"==typeof self?self:null,Or="object"==typeof window?window:null,_r="object"==typeof global?global:null,Er="object"==typeof globalThis?globalThis:null;var Tr=function(r){if(arguments.length){if(!gr(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Er)return Er;if(Ar)return Ar;if(Or)return Or;if(_r)return _r;throw new Error("unexpected error. Unable to resolve global object.")}(),Ir=Tr.document&&Tr.document.childNodes,Sr=Int8Array;function xr(){return/^\s*function\s*([^(]*)/i}var Ur=/^\s*function\s*([^(]*)/i;function zr(r){var e,t,n;if(("Object"===(t=c(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Ur.exec(n.toString()))return e[1]}return yr(r)?"Buffer":t}Y(xr,"REGEXP",Ur);var Fr="function"==typeof vr||"object"==typeof Sr||"function"==typeof Ir?function(r){return zr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?zr(r).toLowerCase():e};function Zr(r){return"function"===Fr(r)}var kr,Pr=Object.getPrototypeOf;kr=Zr(Object.getPrototypeOf)?Pr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===c(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Vr=kr;function Cr(r){return null==r?null:(r=dr(r),Vr(r))}function $r(r){return"string"==typeof r}var Br=String.prototype.valueOf;var Nr=t();function Rr(r){return"object"==typeof r&&(r instanceof String||(Nr?function(r){try{return Br.call(r),!0}catch(r){return!1}}(r):"[object String]"===c(r)))}function Lr(r){return $r(r)||Rr(r)}function Mr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}function Gr(r){return r!=r}function Wr(r){return q(r)&&Gr(r)}function Xr(r){return Q(r)&&Gr(r.valueOf())}function Dr(r){return Wr(r)||Xr(r)}Y(Lr,"isPrimitive",$r),Y(Lr,"isObject",Rr),Y(Mr,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/),Y(Dr,"isPrimitive",Wr),Y(Dr,"isObject",Xr);var Yr=9007199254740991;function qr(r,e,t){var n,o,i;if(!(i=r,"object"==typeof i&&null!==i&&"number"==typeof i.length&&or(i.length)&&i.length>=0&&i.length<=Yr||$r(r)))throw new TypeError(B("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!ar(t))throw new TypeError(B("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Dr(e)){for(;o<n;o++)if(Dr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}function Hr(r){return Object.keys(Object(r))}var Jr,Kr=void 0!==Object.keys;function Qr(r){return"[object Arguments]"===c(r)}Jr=function(){return Qr(arguments)}();var re=Jr,ee=Object.prototype.propertyIsEnumerable;var te=!ee.call("beep","0");function ne(r,e){var t;return null!=r&&(!(t=ee.call(r,e))&&te&&Lr(r)?!Wr(e=+e)&&ar(e)&&e>=0&&e<r.length:t)}var oe=4294967295;var ie=re?Qr:function(r){return null!==r&&"object"==typeof r&&!f(r)&&"number"==typeof r.length&&or(r.length)&&r.length>=0&&r.length<=oe&&i(r,"callee")&&!ne(r,"callee")},ae=Array.prototype.slice;var ue=ne((function(){}),"prototype"),ce=!ne({toString:null},"toString");function fe(r){return r.constructor&&r.constructor.prototype===r}var se=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],le="undefined"==typeof window?void 0:window;var pe=function(){var r;if("undefined"===Fr(le))return!1;for(r in le)try{-1===qr(se,r)&&i(le,r)&&null!==le[r]&&"object"===Fr(le[r])&&fe(le[r])}catch(r){return!0}return!1}(),ye="undefined"!=typeof window;var de,ve=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];de=Kr?function(){return 2!==(Hr(arguments)||"").length}(1,2)?function(r){return ie(r)?Hr(ae.call(r)):Hr(r)}:Hr:function(r){var e,t,n,o,a,u,c;if(o=[],ie(r)){for(c=0;c<r.length;c++)o.push(c.toString());return o}if("string"==typeof r){if(r.length>0&&!i(r,"0"))for(c=0;c<r.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!pr(r))return o;t=ue&&n}for(a in r)t&&"prototype"===a||!i(r,a)||o.push(String(a));if(ce)for(e=function(r){if(!1===ye&&!pe)return fe(r);try{return fe(r)}catch(r){return!1}}(r),c=0;c<ve.length;c++)u=ve[c],e&&"constructor"===u||!i(r,u)||o.push(String(u));return o};var ge=de,he=void 0!==Object.getOwnPropertyNames,we=dr.getOwnPropertyNames;var be=he?function(r){return we(dr(r))}:function(r){return ge(dr(r))},me=void 0!==Object.getOwnPropertyDescriptor,je=Object.getOwnPropertyDescriptor;var Ae=me?function(r,e){var t;return null==r||void 0===(t=je(r,e))?null:t}:function(r,e){return i(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null},Oe="function"==typeof Buffer?Buffer:null;var _e,Ee=r.Buffer;_e=function(){var r,e;if("function"!=typeof Oe)return!1;try{r=yr(e="function"==typeof Oe.from?Oe.from([1,2,3,4]):new Oe([1,2,3,4]))&&1===e[0]&&2===e[1]&&3===e[2]&&4===e[3]}catch(e){r=!1}return r}()?Ee:function(){throw new Error("not implemented")};var Te=_e;var Ie=Zr(Te.from)?function(r){if(!yr(r))throw new TypeError(B("invalid argument. Must provide a Buffer. Value: `%s`.",r));return Te.from(r)}:function(r){if(!yr(r))throw new TypeError(B("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new Te(r)},Se="function"==typeof Int8Array;var xe="function"==typeof Int8Array?Int8Array:null;var Ue,ze="function"==typeof Int8Array?Int8Array:void 0;Ue=function(){var r,e,t;if("function"!=typeof xe)return!1;try{e=new xe([1,3.14,-3.14,128]),t=e,r=(Se&&t instanceof Int8Array||"[object Int8Array]"===c(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?ze:function(){throw new Error("not implemented")};var Fe=Ue,Ze="function"==typeof Uint8Array;var ke="function"==typeof Uint8Array?Uint8Array:null;var Pe,Ve="function"==typeof Uint8Array?Uint8Array:void 0;Pe=function(){var r,e,t;if("function"!=typeof ke)return!1;try{e=new ke(e=[1,3.14,-3.14,256,257]),t=e,r=(Ze&&t instanceof Uint8Array||"[object Uint8Array]"===c(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ve:function(){throw new Error("not implemented")};var Ce=Pe,$e="function"==typeof Uint8ClampedArray;var Be="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Ne,Re="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;Ne=function(){var r,e,t;if("function"!=typeof Be)return!1;try{e=new Be([-1,0,1,3.14,4.99,255,256]),t=e,r=($e&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===c(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Re:function(){throw new Error("not implemented")};var Le=Ne,Me="function"==typeof Int16Array;var Ge="function"==typeof Int16Array?Int16Array:null;var We,Xe="function"==typeof Int16Array?Int16Array:void 0;We=function(){var r,e,t;if("function"!=typeof Ge)return!1;try{e=new Ge([1,3.14,-3.14,32768]),t=e,r=(Me&&t instanceof Int16Array||"[object Int16Array]"===c(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Xe:function(){throw new Error("not implemented")};var De=We,Ye="function"==typeof Uint16Array;var qe="function"==typeof Uint16Array?Uint16Array:null;var He,Je="function"==typeof Uint16Array?Uint16Array:void 0;He=function(){var r,e,t;if("function"!=typeof qe)return!1;try{e=new qe(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Ye&&t instanceof Uint16Array||"[object Uint16Array]"===c(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Je:function(){throw new Error("not implemented")};var Ke=He,Qe="function"==typeof Int32Array;var rt="function"==typeof Int32Array?Int32Array:null;var et,tt="function"==typeof Int32Array?Int32Array:void 0;et=function(){var r,e,t;if("function"!=typeof rt)return!1;try{e=new rt([1,3.14,-3.14,2147483648]),t=e,r=(Qe&&t instanceof Int32Array||"[object Int32Array]"===c(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?tt:function(){throw new Error("not implemented")};var nt=et,ot="function"==typeof Uint32Array;var it="function"==typeof Uint32Array?Uint32Array:null;var at,ut="function"==typeof Uint32Array?Uint32Array:void 0;at=function(){var r,e,t;if("function"!=typeof it)return!1;try{e=new it(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(ot&&t instanceof Uint32Array||"[object Uint32Array]"===c(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ut:function(){throw new Error("not implemented")};var ct=at,ft="function"==typeof Float32Array;var st="function"==typeof Float32Array?Float32Array:null;var lt,pt="function"==typeof Float32Array?Float32Array:void 0;lt=function(){var r,e,t;if("function"!=typeof st)return!1;try{e=new st([1,3.14,-3.14,5e40]),t=e,r=(ft&&t instanceof Float32Array||"[object Float32Array]"===c(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===er}catch(e){r=!1}return r}()?pt:function(){throw new Error("not implemented")};var yt=lt,dt="function"==typeof Float64Array;var vt="function"==typeof Float64Array?Float64Array:null;var gt,ht="function"==typeof Float64Array?Float64Array:void 0;gt=function(){var r,e,t;if("function"!=typeof vt)return!1;try{e=new vt([1,3.14,-3.14,NaN]),t=e,r=(dt&&t instanceof Float64Array||"[object Float64Array]"===c(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ht:function(){throw new Error("not implemented")};var wt=gt;function bt(r){return new Fe(r)}function mt(r){return new Ce(r)}function jt(r){return new Le(r)}function At(r){return new De(r)}function Ot(r){return new Ke(r)}function _t(r){return new nt(r)}function Et(r){return new ct(r)}function Tt(r){return new yt(r)}function It(r){return new wt(r)}var St={int8array:bt,uint8array:mt,uint8clampedarray:jt,int16array:At,uint16array:Ot,int32array:_t,uint32array:Et,float32array:Tt,float64array:It};function xt(r,e,t,n,o){var a,u,s,l,p,y,d,v,g,h;if(o-=1,"object"!=typeof r||null===r)return r;if(yr(r))return Ie(r);if(function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===c(r))return!0;r=Cr(r)}return!1}(r))return function(r){var e,t,n,o,a,u,c=[],s=[];for(a=new r.constructor(r.message),c.push(r),s.push(a),r.stack&&(a.stack=r.stack),r.code&&(a.code=r.code),r.errno&&(a.errno=r.errno),r.syscall&&(a.syscall=r.syscall),e=ge(r),u=0;u<e.length;u++)o=e[u],i(t=Ae(r,o),"value")&&(n=f(r[o])?[]:{},t.value=xt(r[o],n,c,s,-1)),D(a,o,t);return a}(r);if("date"===(s=Fr(r)))return new Date(+r);if("regexp"===s)return function(r){if(!$r(r))throw new TypeError(B("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return(r=/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/.exec(r))?new RegExp(r[1],r[2]):null}(r.toString());if("set"===s)return new Set(r);if("map"===s)return new Map(r);if("string"===s||"boolean"===s||"number"===s)return r.valueOf();if(p=St[s])return p(r);if("array"!==s&&"object"!==s)return"function"==typeof Object.freeze?function(r){var e,t,n,o,a,u,c,s;for(e=[],o=[],c=Object.create(Cr(r)),e.push(r),o.push(c),t=be(r),s=0;s<t.length;s++)n=t[s],i(a=Ae(r,n),"value")&&(u=f(r[n])?[]:{},a.value=xt(r[n],u,e,o,-1)),D(c,n,a);return Object.isExtensible(r)||Object.preventExtensions(c),Object.isSealed(r)&&Object.seal(c),Object.isFrozen(r)&&Object.freeze(c),c}(r):{};if(u=ge(r),o>0)for(a=s,h=0;h<u.length;h++)v=r[y=u[h]],s=Fr(v),"object"!=typeof v||null===v||"array"!==s&&"object"!==s||yr(v)?"object"===a?(i(l=Ae(r,y),"value")&&(l.value=xt(v)),D(e,y,l)):e[y]=xt(v):-1===(g=qr(t,v))?(d=f(v)?new Array(v.length):{},t.push(v),n.push(d),"array"===a?e[y]=xt(v,d,t,n,o):(i(l=Ae(r,y),"value")&&(l.value=xt(v,d,t,n,o)),D(e,y,l))):e[y]=n[g];else if("array"===s)for(h=0;h<u.length;h++)e[y=u[h]]=r[y];else for(h=0;h<u.length;h++)y=u[h],l=Ae(r,y),D(e,y,l);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}var Ut=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}];return function(){return function(r,e){var t;if(arguments.length>1){if(!fr(e))throw new TypeError(B("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(0===e)return r}else e=er;return xt(r,t=f(r)?new Array(r.length):{},[r],[t],e)}(Ut)}}));
//# sourceMappingURL=index.js.map
