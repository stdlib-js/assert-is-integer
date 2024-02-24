// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{isPrimitive as s,isObject as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@v0.2.1-esm/index.mjs";function m(t){return t<i&&t>n&&r(t)}function d(t){return s(t)&&m(t)}function o(t){return e(t)&&m(t.valueOf())}function j(t){return d(t)||o(t)}t(j,"isPrimitive",d),t(j,"isObject",o);export{j as default,o as isObject,d as isPrimitive};
//# sourceMappingURL=index.mjs.map
