(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[41309],{411245:function(t,e,r){(window.__PWS_LOADED_HANDLERS__=window.__PWS_LOADED_HANDLERS__||{})["www/board/[id]/report"]=function(){return r(241433).Z}},420240:function(t,e,r){"use strict";var n,o,a=r(107366);function u(t,e,r,n,o,a,u){try{var i=t[a](u),s=i.value}catch(t){r(t);return}i.done?e(s):Promise.resolve(s).then(n,o)}var i=(n=regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.Z)({url:"/v3/board/".concat(e,"/report_reasons/")});case 2:return r=t.sent,t.abrupt("return",r.resource_response.data);case 4:case"end":return t.stop()}},t)}),o=function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function i(t){u(a,r,o,i,s,"next",t)}function s(t){u(a,r,o,i,s,"throw",t)}i(void 0)})},function(t){return o.apply(this,arguments)});e.Z=i},329456:function(t,e,r){"use strict";var n,o,a=r(107366);function u(t,e,r,n,o,a,u){try{var i=t[a](u),s=i.value}catch(t){r(t);return}i.done?e(s):Promise.resolve(s).then(n,o)}var i=(n=regeneratorRuntime.mark(function t(e,r){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.Z)({url:"/v3/board/".concat(e,"/flag/"),method:"POST",data:r});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}),o=function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function i(t){u(a,r,o,i,s,"next",t)}function s(t){u(a,r,o,i,s,"throw",t)}i(void 0)})},function(t,e){return o.apply(this,arguments)});e.Z=i},302607:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n=r(454514),o=r(140017),a=r(13848),u=r(819267);function i(){var t=(0,o.ZP)(),e=(0,a.F9)().showToast;return{showErrorToast:function(){e(function(e){var r=e.hideToast;return(0,u.jsx)(n.ZP,{onHide:r,text:t._('Something went wrong.', 'fetchReportingReasons.Toast.Unsuccessful', 'Toast after fetching reporting reasons is unsuccessful')})})},showSuccessToast:function(){e(function(e){var r=e.hideToast;return(0,u.jsx)(n.ZP,{onHide:r,text:t._('Thanks! Your feedback helps us improve Pinterest.', 'userReporting.handleSubmitReport.toast', 'toast after reporting a user successfully')})})}}}},241433:function(t,e,r){"use strict";r.d(e,{Z:function(){return w}});var n=r(328038),o=r(179425),a=r(554786),u=r(149722),i=r(672652),s=r(587703),c=r(420240),l=r(329456),f=r(302607),p=r(494125),v=r(195191),d=r(819267);function y(t,e,r,n,o,a,u){try{var i=t[a](u),s=i.value}catch(t){r(t);return}i.done?e(s):Promise.resolve(s).then(n,o)}function h(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var a=t.apply(e,r);function u(t){y(a,n,o,u,i,"next",t)}function i(t){y(a,n,o,u,i,"throw",t)}u(void 0)})}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function _(t){var e,r,o=t.boardId,a=(0,n.k6)(),u=(0,s.Z)(),y=(0,f.Z)(),_=y.showErrorToast,w=y.showSuccessToast,b=function(){a.go(-1)},g=function(t){if(Array.isArray(t))return t}(e=(0,i.useState)(null))||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,u,i=[],s=!0,c=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=a.call(r)).done)&&(i.push(n.value),i.length!==e);s=!0);}catch(t){c=!0,o=t}finally{try{if(!s&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return i}}(e,2)||function(t,e){if(t){if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(t,e)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),S=g[0],x=g[1];(0,p.Z)(function(){var t;(t=h(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,c.Z)(o);case 3:(e=t.sent)?x(e):_(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),_();case 10:case"end":return t.stop()}},t,null,[[0,7]])})),function(){return t.apply(this,arguments)})()});var A=a.location.state,P=(r=h(regeneratorRuntime.mark(function t(e){var r,n,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.reasonKey,n=e.selectedReason,null!=A&&A.viewType&&A.viewParameter&&u({event_type:7759,view_type:A.viewType,view_parameter:A.viewParameter,object_id_str:o,element:null==n?void 0:n.element_type}),t.prev=2,a={reason:r},t.next=6,(0,l.Z)(o,a);case 6:b(),w(),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),b(),_();case 14:case"end":return t.stop()}},t,null,[[2,10]])})),function(t){return r.apply(this,arguments)});return(0,d.jsx)(v.Z,{handleSubmitReport:P,objectToReport:{type:"board",id:o,viewType:null==A?void 0:A.viewType,viewParameter:null==A?void 0:A.viewParameter},reportingReasons:S})}var w=function(){var t=(0,n.$B)().params.id,e=(0,u.Z)().isAuth,r=(0,a.ZP)();return e&&"desktop"!==r?(0,d.jsx)(o.default,{children:(0,d.jsx)(_,{boardId:null!=t?t:""})}):(0,d.jsx)(n.l_,{to:"/"})}},998855:function(t,e,r){var n;function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function u(){for(var t="",e=0;e<arguments.length;e++){var r=arguments[e];r&&(t=i(t,function(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!==o(t))return"";if(Array.isArray(t))return u.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var r in t)a.call(t,r)&&t[r]&&(e=i(e,r));return e}(r)))}return t}function i(t,e){return e?t?t+" "+e:t+e:t}t.exports?(u.default=u,t.exports=u):"object"===o(r.amdO)&&r.amdO?void 0!==(n=(function(){return u}).apply(e,[]))&&(t.exports=n):window.classNames=u}()}},function(t){t.O(0,[97270,84404,28038,24797,55169,44801,14644],function(){return t(t.s=411245)}),t.O()}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/www/board/[id]/report-8b3eca2ac619ad53.js.map
