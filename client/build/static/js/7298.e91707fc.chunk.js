(self.webpackChunkclient=self.webpackChunkclient||[]).push([[7298],{47298:function(n,t,e){"use strict";e.r(t);var r=e(38145);t.default=function(n){return(0,r.J3)(n)&&n.children}},38145:function(n,t,e){"use strict";e.d(t,{J3:function(){return a},aC:function(){return f},iP:function(){return p}});var r=e(16030),i=e(72791),u=e(16871),o=e(66383),c=function(n){return{currentUser:n.user.currentUser}},f=function(n){var t=(0,r.v9)(c).currentUser,e=(0,u.s0)();return(0,i.useEffect)((function(){t||e(o.ym)}),[e,t]),t},s=function(n){return{currentUser:n.user.currentUser}},a=function(n){var t=(0,r.v9)(s).currentUser,e=(0,u.s0)();return(0,i.useEffect)((function(){t?t.isAdmin||e(o.Sd):e(o.ym)}),[t,e]),t},v=e(70885),l=e(95095),d=e.n(l),p=function(){var n=(0,i.useState)(0),t=(0,v.Z)(n,2),e=t[0],r=t[1],u=(0,i.useCallback)(d()((function(){window&&r(window.innerWidth)}),250),[]);return(0,i.useEffect)((function(){return window&&(r(window.innerWidth),window.addEventListener("resize",u)),function(){u.cancel(),window&&window.removeEventListener("resize",u)}}),[]),e}},95095:function(n,t,e){var r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,o=/^0o[0-7]+$/i,c=parseInt,f="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g,s="object"==typeof self&&self&&self.Object===Object&&self,a=f||s||Function("return this")(),v=Object.prototype.toString,l=Math.max,d=Math.min,p=function(){return a.Date.now()};function w(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function b(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==v.call(n)}(n))return NaN;if(w(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=w(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(r,"");var e=u.test(n);return e||o.test(n)?c(n.slice(2),e?2:8):i.test(n)?NaN:+n}n.exports=function(n,t,e){var r,i,u,o,c,f,s=0,a=!1,v=!1,m=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function y(t){var e=r,u=i;return r=i=void 0,s=t,o=n.apply(u,e)}function h(n){return s=n,c=setTimeout(j,t),a?y(n):o}function g(n){var e=n-f;return void 0===f||e>=t||e<0||v&&n-s>=u}function j(){var n=p();if(g(n))return E(n);c=setTimeout(j,function(n){var e=t-(n-f);return v?d(e,u-(n-s)):e}(n))}function E(n){return c=void 0,m&&r?y(n):(r=i=void 0,o)}function O(){var n=p(),e=g(n);if(r=arguments,i=this,f=n,e){if(void 0===c)return h(f);if(v)return c=setTimeout(j,t),y(f)}return void 0===c&&(c=setTimeout(j,t)),o}return t=b(t)||0,w(e)&&(a=!!e.leading,u=(v="maxWait"in e)?l(b(e.maxWait)||0,t):u,m="trailing"in e?!!e.trailing:m),O.cancel=function(){void 0!==c&&clearTimeout(c),s=0,r=f=i=c=void 0},O.flush=function(){return void 0===c?o:E(p())},O}}}]);
//# sourceMappingURL=7298.e91707fc.chunk.js.map