"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[97100,27056],{481177:function(n,e){e.Z={AMP_TRACKING_DOMAIN:"amp.pinterest.com",BoardPrivacy:{SECRET:"secret",PUBLIC:"public",PROTECTED:"protected"},BoardType:{PROTECTED:"protected"},BulkAction:{MOVE:"bulkMove",COPY:"bulkCopy",CREATE_SECTION:"bulkCreateSection",DELETE:"bulkDelete"},MAX_CHARS_FOR_BOARD_PIN_DESCRIPTION:500,MAX_CHARS_FOR_BOARD_TITLE:50,MAX_CHARS_FOR_FIRST_NAME:30,MAX_FETCH_NUM_FOLLOWERS_PER_PAGE:50,MAX_STORED_VISITED_PIN_PAGES:10,VIDEO_IFRAME_ID:"video-iframe"}},696534:function(n,e,r){r.d(e,{F6:function(){return d},Hs:function(){return f},Yc:function(){return l},vs:function(){return s}});var t=r(672652),o=r(191313),u=r(217058);function i(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=Array(e);r<e;r++)t[r]=n[r];return t}var a="theme",c="dark"===(0,o.qn)(a),l=function(){return c};function s(){var n,e=function(n){if(Array.isArray(n))return n}(n=(0,t.useState)(!1))||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,o,u,i,a=[],c=!0,l=!1;try{if(u=(r=r.call(n)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(t=u.call(r)).done)&&(a.push(t.value),a.length!==e);c=!0);}catch(n){l=!0,o=n}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return a}}(n,2)||function(n,e){if(n){if("string"==typeof n)return i(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);if("Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(n,e)}}(n,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=e[0],o=e[1];return(0,t.useEffect)(function(){o(l())},[o]),r}var f=function(){(0,o.Nh)(a,"dark"),(0,u.My)("mweb.dark_mode.enable"),window.location.reload()},d=function(){(0,o.L_)(a),(0,u.My)("mweb.dark_mode.disable"),window.location.reload()}},213377:function(n,e,r){r.d(e,{$H:function(){return i},$q:function(){return h},D6:function(){return l},KN:function(){return S},Lo:function(){return o},P2:function(){return y},TS:function(){return _},Wv:function(){return g},ZZ:function(){return f},g5:function(){return d},jC:function(){return a},lX:function(){return v},nW:function(){return p},oX:function(){return m},qG:function(){return b},tG:function(){return u},yF:function(){return t},yc:function(){return s},yt:function(){return c}});var t=236,o=157.33333333333334,u=175,i=24,a=4,c=8,l=2,s=2,f=14,d=16,p=12,v=16,y=24,m=16,b=-1,h=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n?e?v:p:y},g=function(n){var e=n.contentVisibleItemCount,r=n.gap,o=n.isDesktop,i=n.moduleWidth;return e||i?Math.min((i-Math.ceil(e)*r)/e,o?t:u):t},S=function(n,e,r,t){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:f,u=n+o;return"\n@media (min-width: ".concat(e*u,"px) and (max-width: ").concat((r+1)*u-1,"px) {\n  ").concat(t,"\n}\n")},_=function(n,e,r){var o=r?3:2,i=e?5:o,a=e?t:u,l=e?m:c,s=a*i+l*i-(e?12:!e&&r?12:6);if(!n)return s;for(var f=i;f>=2&&!(n>s);f-=1)s=a*f+l*f;return s}},140017:function(n,e,r){r.d(e,{oz:function(){return u},q6:function(){return o}});var t=(0,r(342513).Z)("i18n"),o=t.Provider,u=t.Consumer,i=t.useHook;e.ZP=i},681508:function(n,e,r){r.d(e,{Q4:function(){return f},Rq:function(){return u},Vf:function(){return i},ab:function(){return l},jd:function(){return a},nw:function(){return s},oy:function(){return c}});var t=r(658583),o=r(622541),u=function(n){return"ios"===n&&(window.devicePixelRatio||1)*window.screen.height==2436},i=28,a=function(n){return window.innerHeight>=748&&u(n)},c=function(){return"undefined"!=typeof window&&!!window.navigator&&(/iPad/.test(navigator.platform)||navigator.maxTouchPoints>1&&"MacIntel"===navigator.platform)},l=function(){t.t8(o.oj,String(!0),(0,t.kZ)(o.oj))},s=function(){return!!t.U2(o.oj)},f=function(){c()&&!s()&&(l(),"undefined"!=typeof window&&window.location.reload(!0))}},179425:function(n,e,r){r.r(e);var t=r(684404),o=r(213377),u=r(681508),i=r(403862),a=r(5859),c=r(819267);e.default=function(n){var e=n.children,r=n.dataLayoutShiftBoundaryId,l=n.hasFixedHeader,s=n.hasGutter,f=void 0===s||s,d=n.height,p=n.showKeychainError,v=n.useViewport,y=(0,a.B)(),m=(0,u.jd)(y.userAgent.platform)?u.Vf:0;return(0,c.jsx)(t.xu,{"data-layout-shift-boundary-id":r||"PageContainer",height:void 0!==v&&v?"calc(100vh - ".concat(m,"px)"):d,paddingX:f?o.D6:void 0,paddingY:void 0!==l&&l||void 0!==p&&p?void 0:3,children:(0,c.jsx)(i.C,{value:!!f,children:e})})}},403862:function(n,e,r){r.d(e,{C:function(){return u},V:function(){return i}});var t=r(672652),o=(0,t.createContext)(!1),u=o.Provider,i=function(){return(0,t.useContext)(o)}},227258:function(n,e,r){r.d(e,{U:function(){return v},b:function(){return y}});var t=r(216167),o=r(288240),u=r(839967),i=r(827625),a=r(197036),c=r(838458);function l(n){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function s(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=Array(e);r<e;r++)t[r]=n[r];return t}function f(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),r.push.apply(r,t)}return r}function d(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach(function(e){var t,o;t=e,o=r[e],(t=function(n){var e=function(n,e){if("object"!==l(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var t=r.call(n,e||"default");if("object"!==l(t))return t;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}(n,"string");return"symbol"===l(e)?e:String(e)}(t))in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))})}return n}function p(n){var e=n.addSuspenseResourceSSRData,r=n.fetchOptions,l=n.resource,f=n.resourceCreator,v=n.retry;return function(n,y){var m,b,h,g=r.bookmark,S=r.headers,_=r.options,k=r.refresh,w=r.schema,O=(0,o.Z)(_);if(null!==(m=y().resources)&&void 0!==m&&null!==(b=m[l])&&void 0!==b&&null!==(h=b[O])&&void 0!==h&&h.fetching&&!v)return Promise.resolve();var E=v?v.bookmark:g,C=E?d(d({},_),{},{bookmarks:[E]}):_;return n((0,i.LQ)(l,_,!0)),(null!=f?f:t.Z.create)(l,C).callGet(void 0,S).then(function(n){return e&&n.resource&&e(n),n}).then(function(e){var o,d=(function(n){if(Array.isArray(n))return n}(o=e.bookmarks||[])||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,o,u,i,a=[],c=!0,l=!1;try{if(u=(r=r.call(n)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(t=u.call(r)).done)&&(a.push(t.value),a.length!==e);c=!0);}catch(n){l=!0,o=n}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return a}}(o,1)||function(n,e){if(n){if("string"==typeof n)return s(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);if("Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(n,e)}}(o,1)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],y=e.resource_response.data,m=(0,c.f)({data:y,opts:{bookmark:g,options:_,schema:w},resource:l})||{normalizedResponse:null,resourceSchema:void 0},b=m.normalizedResponse,h=m.resourceSchema,S=e.resource?null:e;if(e.resource){d=e.resource_response.bookmark||"";var O=(0,a.Z)(e);b=O.normalizedResponse,h=O.schema,S=O.response}if(Array.isArray(y)&&0===y.length&&d&&d!==u.qx){var E=v?v.count:0;if(!(E>=u.s9))return n(p({resource:l,fetchOptions:r,retry:{count:E+1,bookmark:d},resourceCreator:f}))}return S&&(g?(n((0,i.Dm)(l,_,S,b,h)),t.Z.fetchMoreCompleteCallback&&t.Z.fetchMoreCompleteCallback({resource:l,options:_,response:S,normalizedResponse:b,refresh:k,resourceSchema:h})):(n((0,i.Sr)(l,_,S,b,k,h)),t.Z.fetchCompleteCallback&&t.Z.fetchCompleteCallback({resource:l,options:_,response:S,normalizedResponse:b,refresh:k,resourceSchema:h}))),Promise.resolve()},function(e){n((0,i.Tl)(l,_,e))})}}var v=function(n,e,r,t){return p({resource:n,fetchOptions:{bookmark:e.bookmark,headers:e.headers,options:e.options,refresh:!1,schema:e.schema},resourceCreator:r,addSuspenseResourceSSRData:t})},y=function(n,e,r){return p({resource:n,fetchOptions:{headers:e.headers,options:e.options,refresh:!0,schema:e.schema},resourceCreator:r})}},827625:function(n,e,r){r.d(e,{Dm:function(){return c},LQ:function(){return u},Sr:function(){return a},Tl:function(){return i},XM:function(){return o},jB:function(){return l}});var t=r(419821);function o(n,e,r,o){return{type:t.AF,payload:{resource:n,options:e,response:r,normalizedResponse:o}}}function u(n,e,r){return{type:t.KK,payload:{resource:n,options:e,isFetching:r}}}var i=function(n,e,r){return{type:t.cR,payload:{resource:n,options:e,error:r}}};function a(n,e,r,o,u,i){return{type:t.zP,payload:{isRefresh:u,normalizedResponse:o,options:e,resource:n,response:r,schema:i}}}function c(n,e,r,o,u){return{type:t.aW,payload:{resource:n,options:e,response:r,normalizedResponse:o,schema:u}}}function l(n,e){return{type:t.se,payload:{resource:n,optionsOrOptionsKey:e}}}},197036:function(n,e,r){r.d(e,{Z:function(){return i}});var t=r(654369),o=r(888037),u=r(838458);function i(n){var e=n.resource,r=n.resource_response,i=e.name,a=e.options,c=(0,o.Z)(r),l=r.data,s=r.error,f=(0,u.J)(i,{options:a});return{error:s,isRefresh:!1,normalizedResponse:f&&l?(0,t.Fv)(l,f):null,options:a,resource:i,response:{auxData:c,resource_response:{data:l,error:s}},schema:f}}},610465:function(n,e,r){r.d(e,{Z:function(){return o}});var t=r(149722);function o(n){return n===(0,t.Z)().id}},838458:function(n,e,r){r.d(e,{J:function(){return u},f:function(){return i}});var t=r(654369),o=r(539426),u=function(n,e){var r=e.bookmark,t=e.options,u=e.schema||o.Z[n];return"function"==typeof u?u({resource:n,options:t,bookmark:r}):u};function i(n){var e=n.data,r=n.opts,o=r.bookmark,i=r.options,a=r.schema,c=u(n.resource,{bookmark:o,options:i,schema:a});return{normalizedResponse:c&&e?(0,t.Fv)(e,c):null,resourceSchema:c}}},853989:function(n,e){/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function t(n,e){var r=n.length;for(n.push(e);0<r;){var t=r-1>>>1,o=n[t];if(0<i(o,e))n[t]=e,n[r]=o,r=t;else break}}function o(n){return 0===n.length?null:n[0]}function u(n){if(0===n.length)return null;var e=n[0],r=n.pop();if(r!==e){n[0]=r;for(var t=0,o=n.length,u=o>>>1;t<u;){var a=2*(t+1)-1,c=n[a],l=a+1,s=n[l];if(0>i(c,r))l<o&&0>i(s,c)?(n[t]=s,n[l]=r,t=l):(n[t]=c,n[a]=r,t=a);else if(l<o&&0>i(s,r))n[t]=s,n[l]=r,t=l;else break}}return e}function i(n,e){var r=n.sortIndex-e.sortIndex;return 0!==r?r:n.id-e.id}if("object"===("undefined"==typeof performance?"undefined":r(performance))&&"function"==typeof performance.now){var a,c=performance;e.unstable_now=function(){return c.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var f=[],d=[],p=1,v=null,y=3,m=!1,b=!1,h=!1,g="function"==typeof setTimeout?setTimeout:null,S="function"==typeof clearTimeout?clearTimeout:null,_="undefined"!=typeof setImmediate?setImmediate:null;function k(n){for(var e=o(d);null!==e;){if(null===e.callback)u(d);else if(e.startTime<=n)u(d),e.sortIndex=e.expirationTime,t(f,e);else break;e=o(d)}}function w(n){if(h=!1,k(n),!b){if(null!==o(f))b=!0,D(O);else{var e=o(d);null!==e&&M(w,e.startTime-n)}}}function O(n,r){b=!1,h&&(h=!1,S(P),P=-1),m=!0;var t=y;try{for(k(r),v=o(f);null!==v&&(!(v.expirationTime>r)||n&&!j());){var i=v.callback;if("function"==typeof i){v.callback=null,y=v.priorityLevel;var a=i(v.expirationTime<=r);r=e.unstable_now(),"function"==typeof a?v.callback=a:v===o(f)&&u(f),k(r)}else u(f);v=o(f)}if(null!==v)var c=!0;else{var l=o(d);null!==l&&M(w,l.startTime-r),c=!1}return c}finally{v=null,y=t,m=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var E=!1,C=null,P=-1,A=5,R=-1;function j(){return!(e.unstable_now()-R<A)}function x(){if(null!==C){var n=e.unstable_now();R=n;var r=!0;try{r=C(!0,n)}finally{r?a():(E=!1,C=null)}}else E=!1}if("function"==typeof _)a=function(){_(x)};else if("undefined"!=typeof MessageChannel){var I=new MessageChannel,T=I.port2;I.port1.onmessage=x,a=function(){T.postMessage(null)}}else a=function(){g(x,0)};function D(n){C=n,E||(E=!0,a())}function M(n,r){P=g(function(){n(e.unstable_now())},r)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(n){n.callback=null},e.unstable_continueExecution=function(){b||m||(b=!0,D(O))},e.unstable_forceFrameRate=function(n){0>n||125<n?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<n?Math.floor(1e3/n):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return o(f)},e.unstable_next=function(n){switch(y){case 1:case 2:case 3:var e=3;break;default:e=y}var r=y;y=e;try{return n()}finally{y=r}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(n,e){switch(n){case 1:case 2:case 3:case 4:case 5:break;default:n=3}var r=y;y=n;try{return e()}finally{y=r}},e.unstable_scheduleCallback=function(n,u,i){var a=e.unstable_now();switch(i="object"===r(i)&&null!==i&&"number"==typeof(i=i.delay)&&0<i?a+i:a,n){case 1:var c=-1;break;case 2:c=250;break;case 5:c=1073741823;break;case 4:c=1e4;break;default:c=5e3}return c=i+c,n={id:p++,callback:u,priorityLevel:n,startTime:i,expirationTime:c,sortIndex:-1},i>a?(n.sortIndex=i,t(d,n),null===o(f)&&n===o(d)&&(h?(S(P),P=-1):h=!0,M(w,i-a))):(n.sortIndex=c,t(f,n),b||m||(b=!0,D(O))),n},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(n){var e=y;return function(){var r=y;y=e;try{return n.apply(this,arguments)}finally{y=r}}}},702294:function(n,e,r){n.exports=r(853989)},874884:function(n,e,r){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=r(672652),o="function"==typeof Object.is?Object.is:function(n,e){return n===e&&(0!==n||1/n==1/e)||n!=n&&e!=e},u=t.useState,i=t.useEffect,a=t.useLayoutEffect,c=t.useDebugValue;function l(n){var e=n.getSnapshot;n=n.value;try{var r=e();return!o(n,r)}catch(n){return!0}}var s="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(n,e){return e()}:function(n,e){var r=e(),t=u({inst:{value:r,getSnapshot:e}}),o=t[0].inst,s=t[1];return a(function(){o.value=r,o.getSnapshot=e,l(o)&&s({inst:o})},[n,r,e]),i(function(){return l(o)&&s({inst:o}),n(function(){l(o)&&s({inst:o})})},[n]),c(r),r};e.useSyncExternalStore=void 0!==t.useSyncExternalStore?t.useSyncExternalStore:s},439599:function(n,e,r){/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=r(672652),o=r(329329),u="function"==typeof Object.is?Object.is:function(n,e){return n===e&&(0!==n||1/n==1/e)||n!=n&&e!=e},i=o.useSyncExternalStore,a=t.useRef,c=t.useEffect,l=t.useMemo,s=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(n,e,r,t,o){var f=a(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;var p=i(n,(f=l(function(){function n(n){if(!c){if(c=!0,i=n,n=t(n),void 0!==o&&d.hasValue){var e=d.value;if(o(e,n))return a=e}return a=n}if(e=a,u(i,n))return e;var r=t(n);return void 0!==o&&o(e,r)?e:(i=n,a=r)}var i,a,c=!1,l=void 0===r?null:r;return[function(){return n(e())},null===l?void 0:function(){return n(l())}]},[e,r,t,o]))[0],f[1]);return c(function(){d.hasValue=!0,d.value=p},[p]),s(p),p}},329329:function(n,e,r){n.exports=r(874884)},456884:function(n,e,r){n.exports=r(439599)}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/97100-122320dbabb10b37.js.map
