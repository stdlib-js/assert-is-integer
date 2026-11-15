"use strict";var i=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(m){throw (e=0, m)}};};var t=i(function(z,c){
var b=require('@stdlib/constants-float64-pinf/dist'),O=require('@stdlib/constants-float64-ninf/dist'),f=require('@stdlib/math-base-assert-is-integer/dist');function p(r){return r<b&&r>O&&f(r)}c.exports=p
});var s=i(function(A,q){
var x=require('@stdlib/assert-is-number/dist').isPrimitive,N=t();function P(r){return x(r)&&N(r)}q.exports=P
});var u=i(function(B,v){
var g=require('@stdlib/assert-is-number/dist').isObject,j=t();function F(r){return g(r)&&j(r.valueOf())}v.exports=F
});var o=i(function(C,a){
var d=s(),y=u();function R(r){return d(r)||y(r)}a.exports=R
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),n=o(),h=s(),k=u();I(n,"isPrimitive",h);I(n,"isObject",k);module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
