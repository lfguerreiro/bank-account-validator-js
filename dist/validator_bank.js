/*!
 * Banks Validator 
 * https://github.com/lfguerreiro/bank-account-validator-js
 * 
 * hash:c7d2acf0dc5250ca602e
 * chunkhash:6f8bbea36c5ebaf1faa3
 * file:validator_bank.js
 */!function(r){var t={};function u(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return r[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=r,u.c=t,u.d=function(e,n,r){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)u.d(r,t,function(e){return n[e]}.bind(null,t));return r},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u(u.s=0)}([function(e,n,r){e.exports=r(1)},function(e,n,r){"use strict";function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}r.r(n);var l=new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,n,r){n&&t(e.prototype,n),r&&t(e,r)}(e,[{key:"bankNumberIsValid",value:function(e){return/^([0-9A-Za-x]{3,5})$/.test(e)}},{key:"agencyNumberIsValid",value:function(e){return/^[0-9]{1,5}$/.test(e)&&0<parseInt(e)}},{key:"mod11",value:function(e){return e%11}},{key:"agencyCheckNumberIsValid",value:function(e){return/^[a-zA-Z0-9]{0,2}$/.test(e)}},{key:"accountNumberIsValid",value:function(e){return/^[0-9]{1,12}$/.test(e)&&0<parseInt(e)}},{key:"normalizeStartValue",value:function(e,n){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"0";return e===n?e:e.toString().padStart(n,r)}},{key:"accountCheckNumberIsValid",value:function(e){return/^[a-zA-Z0-9]{0,2}$/.test(e)}},{key:"agencyCheckNumberMatch",value:function(e){return!0}},{key:"accountCheckNumberMatch",value:function(e){return!0}},{key:"agencyNumberMsgError",value:function(e){return"Agência inválida"}},{key:"agencyCheckNumberMsgError",value:function(){return"Dígito da agência inválido"}},{key:"accountNumberMsgError",value:function(e){return"Conta corrente inválida"}}]),e}());function u(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var c=new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,n,r){n&&u(e.prototype,n),r&&u(e,r)}(e,[{key:"agencyNumberIsValid",value:function(e){return/^(?!0000)([0-9]{4})$/.test(e)}},{key:"agencyCheckNumberIsValid",value:function(e){return/^[a-zA-Z0-9]{0,1}$/.test(e)}},{key:"accountNumberIsValid",value:function(e){return/^[0-9]{1,12}$/.test(e)&&0<parseInt(e)}},{key:"accountCheckNumberIsValid",value:function(e){return/^[a-zA-Z0-9]{1}$/.test(e)}},{key:"agencyNumberMsgError",value:function(e){return void 0===e&&(e=this.agencyNumberLength()),"A agência deve conter "+e+" números. Complete com zeros a esquerda se necessário."}},{key:"agencyCheckNumberMsgError",value:function(e){return void 0===e||0===e?"O dígito da agência deve ser vazio":1===e?"O dígito da agência deve conter 1 dígito":"O dígito da agência deve conter "+e+" números. Complete com zeros a esquerda se necessário."}},{key:"accountNumberMsgError",value:function(e){return"A conta de conter "+e+" números"}},{key:"agencyNumberLength",value:function(){return 4}}]),e}());function a(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var o=new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,n,r){n&&a(e.prototype,n),r&&a(e,r)}(e,[{key:"calculate",value:function(e,n){for(var r=(e+n).split(""),t=0,u=0,c=0;c<r.length;c++){var a=parseInt(r[c]);u=this.multiplyAccordingParity(a,c),t+=u=this.adjustAccordingLength(u)}return this.module(t)}},{key:"multiplyAccordingParity",value:function(e,n){return e*(n%2==0?2:1)}},{key:"adjustAccordingLength",value:function(e){if(9<e)for(var n=e.toString().split(""),r=e=0;r<n.length;r++)e+=parseInt(n[r]);return e}},{key:"module",value:function(e){var n=e%10;return 0==n?"0":(10-n).toString()}}]),e}());function i(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var f=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,n,r){n&&i(e.prototype,n),r&&i(e,r)}(e,[{key:"agencyNumberIsValid",value:function(e){return c.agencyNumberIsValid(e)}},{key:"agencyCheckNumberIsValid",value:function(e){return void 0===e||""===e}},{key:"accountNumberIsValid",value:function(e){return e.length==this.accountNumberLength()&&c.accountNumberIsValid(e)}},{key:"accountCheckNumberIsValid",value:function(e){return c.accountCheckNumberIsValid(e)}},{key:"agencyCheckNumberMatch",value:function(e){return!0}},{key:"accountCheckNumberMatch",value:function(e){return o.calculate(e.agencyNumber,e.accountNumber)===e.accountCheckNumber}},{key:"agencyNumberMsgError",value:function(){return c.agencyNumberMsgError()}},{key:"agencyCheckNumberMsgError",value:function(){return c.agencyCheckNumberMsgError()}},{key:"accountNumberMsgError",value:function(){return c.accountNumberMsgError(this.accountNumberLength())}},{key:"accountNumberLength",value:function(){return 5}}]),e}();function s(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var y=new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,n,r){n&&s(e.prototype,n),r&&s(e,r)}(e,[{key:"calculateAccount",value:function(e){for(var n=e.split(""),r=0,t=0;t<n.length;t++){var u=parseInt(n[t]);r+=this.multiplyAccordingWeight(u,t)}return this.accountModule(r)}},{key:"multiplyAccordingWeight",value:function(e,n){return e*[2,7,6,5,4,3,2][n]}},{key:"accountModule",value:function(e){var n=e%11;return 0==n?"0":1==n?"P":(11-n).toString()}},{key:"calculateAgency",value:function(e){for(var n=e.split(""),r=0,t=0;t<n.length;t++)seq=5-t,r+=parseInt(n[t])*seq;return this.agencyMod11ule(r)}},{key:"agencyModule",value:function(e){var n=11-e%11;return 10===n?"P":11===n?"0":n.toString()}}]),e}());function b(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var g=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,n,r){n&&b(e.prototype,n),r&&b(e,r)}(e,[{key:"agencyNumberIsValid",value:function(e){return c.agencyNumberIsValid(e)}},{key:"agencyCheckNumberIsValid",value:function(e){return void 0===e||""===e}},{key:"accountNumberIsValid",value:function(e){return e.length==this.accountNumberLength()&&c.accountNumberIsValid(e)}},{key:"accountCheckNumberIsValid",value:function(e){return c.accountCheckNumberIsValid(e)}},{key:"agencyCheckNumberMatch",value:function(e){if(this.agencyCheckNumberIsValid)return!0;var n=y.calculateAgency(e.agencyNumber),r=e.agencyCheckNumber.toUpperCase();return"0"===r?n===r||"P"===n:n===r}},{key:"accountCheckNumberMatch",value:function(e){var n=y.calculateAccount(e.accountNumber),r=e.accountCheckNumber.toUpperCase();return"0"===r?n===r||"P"===n:n===r}},{key:"agencyNumberMsgError",value:function(){return c.agencyNumberMsgError()}},{key:"agencyCheckNumberMsgError",value:function(){return c.agencyCheckNumberMsgError()}},{key:"accountNumberMsgError",value:function(){return c.accountNumberMsgError(this.accountNumberLength())}},{key:"accountNumberLength",value:function(){return 7}}]),e}();function m(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var h=new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,n,r){n&&m(e.prototype,n),r&&m(e,r)}(e,[{key:"calculateAccount",value:function(e){for(var n=e.split(""),r=0,t=0,u=0;u<n.length;u++)t=9-u,r+=parseInt(n[u])*t;return this.module(r)}},{key:"calculateAgency",value:function(e){for(var n=e.split(""),r=0,t=0,u=0;u<n.length;u++)t=5-u,r+=parseInt(n[u])*t;return this.module(r)}},{key:"module",value:function(e){var n=11-e%11;return 10===n?"X":11===n?"0":n.toString()}}]),e}());function v(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var k=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,n,r){n&&v(e.prototype,n),r&&v(e,r)}(e,[{key:"agencyNumberIsValid",value:function(e){return e.length==this.agencytNumberLength()&&c.agencyNumberIsValid(e)}},{key:"agencyCheckNumberIsValid",value:function(e){return void 0===e||""===e}},{key:"accountNumberIsValid",value:function(e){return l.normalizeStartValue(e,this.accountNumberLength(),0).length==this.accountNumberLength()&&c.accountNumberIsValid(e)}},{key:"accountCheckNumberIsValid",value:function(e){return c.accountCheckNumberIsValid(e)}},{key:"agencyCheckNumberMatch",value:function(e){if(this.agencyCheckNumberIsValid)return!0;var n=h.calculateAgency(e.agencyNumber),r=e.agencyCheckNumber.toUpperCase();return"0"===r?n===r||"X"===n:n===r}},{key:"accountCheckNumberMatch",value:function(e){var n=l.normalizeStartValue(e.accountNumber,8,0);return h.calculateAccount(n)===e.accountCheckNumber.toUpperCase()}},{key:"agencyNumberMsgError",value:function(){return c.agencyNumberMsgError()}},{key:"agencyCheckNumberMsgError",value:function(){return c.agencyCheckNumberMsgError(this.agencyCheckNumberLength())}},{key:"accountNumberMsgError",value:function(){return c.accountNumberMsgError(this.accountNumberLength())}},{key:"agencytNumberLength",value:function(){return 4}},{key:"agencyCheckNumberLength",value:function(){return 1}},{key:"accountNumberLength",value:function(){return 8}}]),e}();function N(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var d=new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,n,r){n&&N(e.prototype,n),r&&N(e,r)}(e,[{key:"calculate",value:function(e,n){for(var r=(e+l.normalizeStartValue(n,10,0)).split(""),t=0,u=0,c=0;c<r.length;c++){var a=parseInt(r[c]),o=this.multiplyAccordingWeight(a,c).toString(),i=1===o.length?0:1;u=o.substring(i),t+=parseInt(u)}return this.accountModule(t)}},{key:"multiplyAccordingWeight",value:function(e,n){return e*[9,7,3,1,0,0,9,7,1,3,1,9,7,3][n]}},{key:"accountModule",value:function(e){var n=e.toString().substring(1);return 0===n?"0":(10-n).toString()}},{key:"validAccount",value:function(e){var n=e.toString().substring(0,2);return-1<["01","02","03","05","07","09","13","27","35","37","43","45","46","48","50","53","60","92"].indexOf(n)}}]),e}());function p(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var C=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,n,r){n&&p(e.prototype,n),r&&p(e,r)}(e,[{key:"agencyNumberIsValid",value:function(e){return e.length==this.agencytNumberLength()&&c.agencyNumberIsValid(e)}},{key:"agencyCheckNumberIsValid",value:function(e){return void 0===e||""===e}},{key:"accountNumberIsValid",value:function(e){var n=d.validAccount(e);return e.length==this.accountNumberLength()&&c.accountNumberIsValid(e)&&n}},{key:"accountCheckNumberIsValid",value:function(e){return c.accountCheckNumberIsValid(e)}},{key:"agencyCheckNumberMatch",value:function(e){return!0}},{key:"accountCheckNumberMatch",value:function(e){return d.calculate(e.agencyNumber,e.accountNumber)===e.accountCheckNumber}},{key:"agencyNumberMsgError",value:function(){return c.agencyNumberMsgError()}},{key:"agencyCheckNumberMsgError",value:function(){return c.agencyCheckNumberMsgError()}},{key:"accountNumberMsgError",value:function(){return c.accountNumberMsgError(this.accountNumberLength())}},{key:"agencytNumberLength",value:function(){return 4}},{key:"accountNumberLength",value:function(){return 8}}]),e}();function I(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var M=new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,n,r){n&&I(e.prototype,n),r&&I(e,r)}(e,[{key:"calculate",value:function(e){for(var n=l.normalizeStartValue(e,10,0).split(""),r=0,t=0;t<n.length;t++){var u=parseInt(n[t]);r+=this.mutiplyAccordingWeight(u,t)}return this.accountModule(r)}},{key:"mutiplyAccordingWeight",value:function(e,n){return e*[11,10,9,8,7,6,5,4,3,2][n]}},{key:"accountModule",value:function(e){var n=parseInt(e%11),r=Math.abs(parseInt(11-n));return 0===r&&1===r?"0":r.toString()}}]),e}());function E(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var V=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,n,r){n&&E(e.prototype,n),r&&E(e,r)}(e,[{key:"agencyNumberIsValid",value:function(e){return c.agencyNumberIsValid(e)}},{key:"agencyCheckNumberIsValid",value:function(e){return void 0===e||""===e}},{key:"accountNumberIsValid",value:function(e){return e.length==this.accountNumberLength()&&c.accountNumberIsValid(e)}},{key:"accountCheckNumberIsValid",value:function(e){return c.accountCheckNumberIsValid(e)}},{key:"agencyCheckNumberMatch",value:function(e){return!0}},{key:"accountCheckNumberMatch",value:function(e){return M.calculate(e.accountNumber)===e.accountCheckNumber}},{key:"agencyNumberMsgError",value:function(){return c.agencyNumberMsgError()}},{key:"agencyCheckNumberMsgError",value:function(){return c.agencyCheckNumberMsgError()}},{key:"accountNumberMsgError",value:function(){return c.accountNumberMsgError(this.accountNumberLength())}},{key:"accountNumberLength",value:function(){return 7}}]),e}();function w(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var A=new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,n,r){n&&w(e.prototype,n),r&&w(e,r)}(e,[{key:"calculate",value:function(e,n){for(var r=(e+n).split(""),t=0,u=0;u<r.length;u++){var c=parseInt(r[u]);t+=this.multiplyAccordingWeight(c,u)}return this.accountModule(t)}},{key:"multiplyAccordingWeight",value:function(e,n){return e*[8,9,2,3,4,5,6,7,8,9][n]}},{key:"accountModule",value:function(e){var n=parseInt(e%11);return 10===n||0===n?"0":n.toString()}}]),e}());function L(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var O=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,n,r){n&&L(e.prototype,n),r&&L(e,r)}(e,[{key:"agencyNumberIsValid",value:function(e){return c.agencyNumberIsValid(e)}},{key:"agencyCheckNumberIsValid",value:function(e){return void 0===e||""===e}},{key:"accountNumberIsValid",value:function(e){return e.length==this.accountNumberLength()&&c.accountNumberIsValid(e)}},{key:"accountCheckNumberIsValid",value:function(e){return c.accountCheckNumberIsValid(e)}},{key:"agencyCheckNumberMatch",value:function(e){return!0}},{key:"accountCheckNumberMatch",value:function(e){return A.calculate(e.agencyNumber,e.accountNumber)===e.accountCheckNumber}},{key:"agencyNumberMsgError",value:function(){return c.agencyNumberMsgError()}},{key:"agencyCheckNumberMsgError",value:function(){return c.agencyCheckNumberMsgError()}},{key:"accountNumberMsgError",value:function(){return c.accountNumberMsgError(this.accountNumberLength())}},{key:"accountNumberLength",value:function(){return 6}}]),e}();function P(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var j=new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,n,r){n&&P(e.prototype,n),r&&P(e,r)}(e,[{key:"calculate",value:function(e){for(var n=e.split(""),r=0,t=0;t<n.length;t++){var u=parseInt(n[t]);r+=this.multiplyAccordingWeight(u,t)}return this.moduleEleven(r).toString()}},{key:"multiplyAccordingWeight",value:function(e,n){return e*[3,2,4,7,6,5,4,3,2][n]}},{key:"moduleEleven",value:function(e){var n=e%11;return 0==n?0:1==n?6:11-n}}]),e}());function T(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var S=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,n,r){n&&T(e.prototype,n),r&&T(e,r)}(e,[{key:"agencyNumberIsValid",value:function(e){return c.agencyNumberIsValid(e)}},{key:"agencyCheckNumberIsValid",value:function(e){return void 0===e||""===e}},{key:"accountNumberIsValid",value:function(e){return e.length==this.accountNumberLength()&&c.accountNumberIsValid(e)}},{key:"accountCheckNumberIsValid",value:function(e){return c.accountCheckNumberIsValid(e)}},{key:"agencyCheckNumberMatch",value:function(e){return!0}},{key:"accountCheckNumberMatch",value:function(e){return j.calculate(e.accountNumber)===e.accountCheckNumber}},{key:"agencyNumberMsgError",value:function(){return c.agencyNumberMsgError()}},{key:"agencyCheckNumberMsgError",value:function(){return c.agencyCheckNumberMsgError()}},{key:"accountNumberMsgError",value:function(){return c.accountNumberMsgError(this.accountNumberLength())}},{key:"accountNumberLength",value:function(){return 9}}]),e}();function _(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var U=new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,n,r){n&&_(e.prototype,n),r&&_(e,r)}(e,[{key:"calculate",value:function(e,n){for(var r=(e+n).split(""),t=0,u=0;u<r.length;u++){var c=parseInt(r[u]);t+=this.multiplyAccordingWeight(c,u)}return this.accountModule(t)}},{key:"multiplyAccordingWeight",value:function(e,n){return e*[8,7,6,5,4,3,2,9,8,7,6,5,4,3,2][n]}},{key:"accountModule",value:function(e){var n=parseInt(10*e),r=parseInt(n/11),t=Math.abs(parseInt(11*r-n));return 10===t?"0":t.toString()}}]),e}());function W(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var z=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,n,r){n&&W(e.prototype,n),r&&W(e,r)}(e,[{key:"agencyNumberIsValid",value:function(e){return c.agencyNumberIsValid(e)}},{key:"agencyCheckNumberIsValid",value:function(e){return void 0===e||""===e}},{key:"accountNumberIsValid",value:function(e){return e.length==this.accountNumberLength()&&c.accountNumberIsValid(e)}},{key:"accountCheckNumberIsValid",value:function(e){return c.accountCheckNumberIsValid(e)}},{key:"agencyCheckNumberMatch",value:function(e){return!0}},{key:"accountCheckNumberMatch",value:function(e){return U.calculate(e.agencyNumber,e.accountNumber)===e.accountCheckNumber}},{key:"agencyNumberMsgError",value:function(){return c.agencyNumberMsgError()}},{key:"agencyCheckNumberMsgError",value:function(){return c.agencyCheckNumberMsgError()}},{key:"accountNumberMsgError",value:function(){return c.accountNumberMsgError(this.accountNumberLength())}},{key:"accountNumberLength",value:function(){return 11}}]),e}();function D(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var B=new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,n,r){n&&D(e.prototype,n),r&&D(e,r)}(e,[{key:"calculate",value:function(e,n){for(var r=(e+n).split(""),t=0,u=0;u<r.length;u++){var c=parseInt(r[u]);t+=this.multiplyAccordingWeight(c,u)}return this.accountModule(t)}},{key:"multiplyAccordingWeight",value:function(e,n){return e*[8,1,4,7,2,2,5,9,3,9,5][n]}},{key:"accountModule",value:function(e){var n=parseInt(e%11),r=Math.abs(parseInt(11-n));return 0===r||1===r?"0":r.toString()}}]),e}());function $(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var x=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,n,r){n&&$(e.prototype,n),r&&$(e,r)}(e,[{key:"agencyNumberIsValid",value:function(e){return e.length==this.agencytNumberLength()&&c.agencyNumberIsValid(e)}},{key:"agencyCheckNumberIsValid",value:function(e){return void 0===e||""===e}},{key:"accountNumberIsValid",value:function(e){return e.length==this.accountNumberLength()&&c.accountNumberIsValid(e)}},{key:"accountCheckNumberIsValid",value:function(e){return c.accountCheckNumberIsValid(e)}},{key:"agencyCheckNumberMatch",value:function(e){return!0}},{key:"accountCheckNumberMatch",value:function(e){return B.calculate(e.agencyNumber,e.accountNumber)===e.accountCheckNumber}},{key:"agencyNumberMsgError",value:function(){return c.agencyNumberMsgError()}},{key:"agencyCheckNumberMsgError",value:function(){return c.agencyCheckNumberMsgError()}},{key:"accountNumberMsgError",value:function(){return c.accountNumberMsgError(this.accountNumberLength())}},{key:"agencytNumberLength",value:function(){return 4}},{key:"accountNumberLength",value:function(){return 7}}]),e}(),R="001",H="237",K="341",Z="033",q="745",G="399",Y="041",X="104",F="356";function J(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function Q(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var ee=function(){function n(){var e;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.validators=(J(e={},R,new k),J(e,H,new g),J(e,K,new f),J(e,Z,new C),J(e,q,new V),J(e,G,new O),J(e,Y,new S),J(e,X,new z),J(e,F,new x),e)}return function(e,n,r){n&&Q(e.prototype,n),r&&Q(e,r)}(n,[{key:"validator",value:function(e){return this.validators[e]?this.validators[e]:l}},{key:"validate",value:function(u){var c=this;return new Promise(function(e,n){var r=c.validator(u.bankNumber),t=[];l.bankNumberIsValid(u.bankNumber)||t.push({description:"Banco inválido",code:"INVALID_BANK_NUMBER"}),r.agencyNumberIsValid(u.agencyNumber)||t.push({description:r.agencyNumberMsgError(),code:"INVALID_AGENCY_NUMBER"}),r.agencyCheckNumberIsValid(u.agencyCheckNumber)||t.push({description:r.agencyCheckNumberMsgError(),code:"INVALID_AGENCY_CHECK_NUMBER"}),r.accountNumberIsValid(u.accountNumber)||t.push({description:r.accountNumberMsgError(),code:"INVALID_ACCOUNT_NUMBER"}),r.accountCheckNumberIsValid(u.accountCheckNumber)||t.push({description:"Dígito da conta corrente inválido",code:"INVALID_ACCOUNT_CHECK_NUMBER"}),r.agencyNumberIsValid(u.agencyNumber)&&r.agencyCheckNumberIsValid(u.agencyCheckNumber)&&(r.agencyCheckNumberMatch(u)||t.push({description:"Dígito da agência não corresponde ao número da agência preenchido",code:"AGENCY_CHECK_NUMBER_DONT_MATCH"})),r.accountNumberIsValid(u.accountNumber)&&r.accountCheckNumberIsValid(u.accountCheckNumber)&&(r.accountCheckNumberMatch(u)||t.push({description:"Dígito da conta não corresponde ao número da conta/agência preenchido",code:"ACCOUNT_CHECK_NUMBER_DONT_MATCH"})),0===t.length?e():n({errors:t})})}}]),n}();window.BankAccount=ee}]);