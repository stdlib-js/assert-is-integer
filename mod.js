// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return t({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,c=n.__lookupSetter__;var l=e,f=function(t,r,e){var l,f,b,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((f="value"in e)&&(u.call(t,r)||c.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),b="get"in e,p="set"in e,f&&(b||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return b&&a&&a.call(t,r,e.get),p&&i&&i.call(t,r,e.set),t},b=r()?l:f;var p=function(t,r,e){b(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})};var y=function(t){return"number"==typeof t};var v=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var _=function(){return v&&"symbol"==typeof Symbol.toStringTag},s=Object.prototype.toString,m=s;var j=function(t){return m.call(t)},d=Object.prototype.hasOwnProperty;var g=function(t,r){return null!=t&&d.call(t,r)},S="function"==typeof Symbol?Symbol.toStringTag:"",O=g,h=S,w=s;var I=j,P=function(t){var r,e,n;if(null==t)return w.call(t);e=t[h],r=O(t,h);try{t[h]=void 0}catch(r){return w.call(t)}return n=w.call(t),r?t[h]=e:delete t[h],n},N=_()?P:I,T=Number,E=T.prototype.toString;var V=N,A=T,F=function(t){try{return E.call(t),!0}catch(t){return!1}},G=_();var k=function(t){return"object"==typeof t&&(t instanceof A||(G?F(t):"[object Number]"===V(t)))},x=y,Y=k;var C=p,M=function(t){return x(t)||Y(t)},q=y,z=k;C(M,"isPrimitive",q),C(M,"isObject",z);var B=Number.POSITIVE_INFINITY,D=T.NEGATIVE_INFINITY,H=Math.floor;var J=function(t){return H(t)===t};function K(t){return t<B&&t>D&&J(t)}function L(t){return q(t)&&K(t)}function Q(t){return z(t)&&K(t.valueOf())}function R(t){return L(t)||Q(t)}p(R,"isPrimitive",L),p(R,"isObject",Q);export{R as default,Q as isObject,L as isPrimitive};
//# sourceMappingURL=mod.js.map