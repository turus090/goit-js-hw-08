function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,p=function(){return c.Date.now()};function g(e,t,n){var r,o,i,a,u,f,l=0,c=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function h(e){return l=e,u=setTimeout(j,t),c?y(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-l>=i}function j(){var e=p();if(S(e))return w(e);u=setTimeout(j,function(e){var n=t-(e-f);return d?m(n,i-(e-l)):n}(e))}function w(e){return u=void 0,g&&r?y(e):(r=o=void 0,a)}function O(){var e=p(),n=S(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return h(f);if(d)return u=setTimeout(j,t),y(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=b(t)||0,v(n)&&(c=!!n.leading,i=(d="maxWait"in n)?s(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=o=u=void 0},O.flush=function(){return void 0===u?a:w(p())},O}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),h={email:document.querySelector("input"),message:document.querySelector("textarea")};let S={};const j=()=>{h.email.value=S.email||null,h.message.value=S.message||null},w=()=>{localStorage.getItem("feedback-form-state")?(S=JSON.parse(localStorage.getItem("feedback-form-state")),j()):(S={},j())};w(),hadleUpdate=e=>{S[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))},y.addEventListener("input",e(t)(hadleUpdate,500)),y.addEventListener("submit",(()=>{localStorage.removeItem("feedback-form-state"),w()}));
//# sourceMappingURL=03-feedback.27e85e80.js.map
