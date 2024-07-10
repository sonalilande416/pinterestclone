"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[22987],{798580:function(e,t,r){var n=r(624797),i=/\/today\/(article|best|trending)\/[\w-]+\/(\d+)/,o=function(e,t){return t?e.substring(t.length).split("/")[0]:e},a=function(e){var t,r=e.boardUrl,a=e.path,s=e.pinId,u=e.pinnerUserName,c=e.search,d=e.storyPinDataId;if(!a)return"";switch(a){case"/":case"/homefeed/":return"UserHomefeedResource";case u&&"/".concat(u,"/pins/"):return"UserPinsResource";case u&&"/".concat(u,"/"):case/\/_activity\//.test(a)&&a:return"UserActivityPinsResource";case/\/_created\//.test(a)&&a:return d?"UserStoryPinsFeedResource":"UserActivityPinsResource";case/\/_community\//.test(a)&&a:return"UserDiscoveredPinsResource";case/\/_saved\//.test(a)&&a:return"BoardlessPinsResource";case u&&"/".concat(u,"/_shopping_list/"):return"ShoppingListFeedResource";case/\/visual-search\//.test(a)&&a:return"VisualLiveSearchResource";case/\/pin\//.test(a)&&a:var p=o(a,"/pin/");if(s!==p)return"RelatedPinFeedResource_".concat(p);break;case/\/search\//.test(a)&&a:if(c){var l=(0,n.mB)(c,{shouldDecode:!1}).q||"";return"SearchResource_".concat(l.toLowerCase())}break;case/\/categories\//.test(a)&&a:var f=o(a,"/categories/");return"CategoryFeedResource_".concat(f);case/\/discover\/topics\//.test(a)&&a:return"CategoryFeedResource";case/\/news_hub\//.test(a)&&a:var m=o(a,"/news_hub/");return"NewsHubDetailsResource_".concat(m);case/\/_tools\/more-ideas\//.test(a)&&a:return"BoardContentRecommendationResource";case/\/topics\//.test(a)&&a:var v=o(a,"/topics/");return"TopicFeedResource_".concat(v);case/\/source\//.test(a)&&a:var g=o(a,"/source/");return"DomainFeedResource_".concat(g);case/\/explore\//.test(a)&&a:var h=o(a,"/explore/");return"SearchResource_".concat(h);case r:case!!r&&/\/more_ideas\//.test(a)&&a:return"BoardFeedResource";case r&&a.indexOf(r)>-1&&a:return"BoardSectionPinsResource";case/\/brand_catalog\//.test(a)&&a:return"BrandCatalogFeedResource";case i.test(a)&&a:var _=(null===(t=a.match(i))||void 0===t?void 0:t[2])||"unknown";return"TodayArticleFeedResource_".concat(_);case/\/today\//.test(a):return"TodayTabResource";case/\story_feed\//.test(a)&&a:if(c){var P=(0,n.mB)(c),y=P.feed_type,b=P.request_params;return"StoryFeedResource_".concat(y,"_").concat(b)}}return""},s=function(e){var t=null==e?void 0:e.pathname;return t?(t.match(/\/search\//)&&null!=e&&e.search&&(t+=e.search),t.toLowerCase()):""};t.Z=function(e){var t,r,n=e.boardUrl,i=e.location,o=e.pinId,u=e.pinnerUserName,c=e.previousHistory,d=e.storyPinDataId,p=e.trackingParams,l=e.trackingParamsMap,f=void 0===l?{}:l;if(o&&p&&i){if(!f)return"".concat(null!=p?p:"","~0");var m=i.pathname,v=i.search,g=a({boardUrl:n,path:m,pinId:o,pinnerUserName:u,search:v,storyPinDataId:d,trackingParams:p,trackingParamsMap:f}),h=Object.keys(f);if((m||"").startsWith("/pin/")){var _=h.find(function(e){return"PinResource"!==e});t=_?f[_]:f.PinResource}else t=f[g];return!t&&c&&c.length&&(r=a({boardUrl:n,path:s(c[c.length-1].location),pinId:o,pinnerUserName:u,search:v,storyPinDataId:d,trackingParams:p,trackingParamsMap:f}),t=f[r]),t||(t="".concat(p||"","~0")),t}}},287434:function(e,t){t.Z=function(){return 1e6*Date.now()}},839372:function(e,t,r){r.d(t,{w:function(){return P}});var n=r(798580),i=r(287434),o=r(503325),a=r(623891),s=r(953565);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){l(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,f(n.key),n)}}function l(e,t,r){return(t=f(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==u(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===u(t)?t:String(t)}var m=null,v={ACTIVE:"ACTIVE",PAUSED:"PAUSED"},g=function(){return window&&window.performance&&window.performance.now?"(Time: ".concat((window.performance.now()/1e3).toFixed(3),"s)"):""},h=function(e){var t=!1;return function(){t||(t=!0,e.apply(void 0,arguments))}},_={};function P(e){var t=e.contextLogger,r=e.shouldExtractTrackingParams;if(m)return m;var u=function(e,i,o){if(r&&o&&e){var a=e.pair_id,s=e.event_type;if(4703===s&&a&&_[a])e.clientTrackingParams=_[a];else{var u,c,d,p,l=e.object_id_str,f=l?o[l]:null,m=null==i?void 0:null===(c=i.current)||void 0===c?void 0:c.location,v=null==i?void 0:i.previous;f&&m&&(u=(0,n.Z)({boardUrl:null===(d=f.board)||void 0===d?void 0:d.url,location:m,pinId:f.id,pinnerUserName:null===(p=f.pinner)||void 0===p?void 0:p.username,previousHistory:v,storyPinDataId:f.story_pin_data_id,trackingParams:f.tracking_params,trackingParamsMap:f.tracking_params_map})||"".concat(f.tracking_params||"","~0"),e.clientTrackingParams=u,4702===s&&a&&(_[a]=u))}}t.logContextEvent(e)},c=new Map,f=(0,a.Z)()&&(0,a.Z)().debug_timespent,P=[],y=f?console:{error:function(){},log:function(){},group:function(){},groupEnd:function(){}};return console.group||(y.group=function(){var e;return(e=console).log.apply(e,arguments)},y.groupEnd=function(){}),m=new(function(){var e,r;function n(){var e=this;(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,n),l(this,"appTimedPair",null),l(this,"clickthroughProperties",null),l(this,"historyStackContext",null),l(this,"offsiteTimedPair",null),l(this,"offsiteTimedPairForegroundId",null),l(this,"pins",Object.freeze({})),l(this,"addEventListeners",function(){"undefined"!==document.hidden?(t="hidden",r="visibilitychange"):"undefined"!==document.msHidden?(t="msHidden",r="msvisibilitychange"):"undefined"!==document.webkitHidden&&(t="webkitHidden",r="webkitvisibilitychange"),r&&document.addEventListener(r,function(r){document[t]?e.unregisterApp(!1,void 0,r):document.hasFocus()&&e.registerApp()},!1),window.addEventListener("focus",e.registerApp),window.addEventListener("blur",function(t){return e.unregisterApp(!1,void 0,t)});var t,r,n=h(function(t){return e.unregisterApp(!0,void 0,t)});window.addEventListener("beforeunload",n),window.addEventListener("pagehide",n);var i=navigator&&navigator.userAgent.toLowerCase();i&&i.includes("macintosh")&&i.includes("chrome")&&window.addEventListener("popstate",function(){document.hasFocus()||document[t]||(0,s.nP)("chrome_mac_back_forward_button",{sampleRate:1})})}),l(this,"storeClickthroughProperties",function(t){e.clickthroughProperties&&(0,s.nP)("webapp.metrics.clickthroughs.overwritten",{sampleRate:1,tags:{previousView:e.clickthroughProperties.view_type,previousViewParameter:e.clickthroughProperties.view_parameter,nextView:t.view_type,nextViewParameter:t.view_parameter}}),e.clickthroughProperties=d({time:(0,i.Z)()},t)}),l(this,"clearClickthroughProperties",function(){e.clickthroughProperties=null,e.offsiteTimedPair=null,e.offsiteTimedPairForegroundId=null}),l(this,"registerApp",function(){y.group("App Foreground",g()),null==e.appTimedPair?(e.appTimedPair=new o.Z,e.appTimedPair.start(),e._unpauseAllComponents(),e._endOffsiteTimedPair(),null!==e.appTimedPair&&void 0!==e.appTimedPair&&u({event_type:4700,pair_id:e.appTimedPair.uuid},e.historyStackContext,e.pins)):y.error("TimedPair already exists for app."),y.groupEnd()}),l(this,"unregisterApp",function(){var r=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2?arguments[2]:void 0;y.group("App Background",g());var o=e.appTimedPair;if(null!=o){e._pauseAllComponents();var a=o.end();e._startOffsiteTimedPair(),u({event_type:4701,duration_ns:a,pair_id:o.uuid},e.historyStackContext,e.pins),e.appTimedPair=null}else y.error("No TimedPair found for app.");var s=["beforeunload","pagehide"],c=s.includes(null==i?void 0:i.type),d=s.includes(null==i?void 0:i.pauseReason);(c||d)&&e._endOffsiteTimedPair(),n||t.flushContextEvents(null!=r&&r),y.groupEnd()}),l(this,"_activateComponent",function(t){y.group("Activating component",g()),f&&y.log(t.getContext());var r=t.getTimedPair();if(r){r.start();var n=t.getLoggerContext(),i=n.view,o=n.viewParameter,a=n.component,s=n.element,c=n.objectId,p=n.clientTrackingParams;u({event_type:4702,view_type:i,view_parameter:o,component:a,element:s,object_id_str:c,view_data:t.props.viewData,pair_id:r.uuid,clientTrackingParams:p,aux_data:d({time_spent_foreground_pairid:e.appTimedPair&&e.appTimedPair.uuid,time_spent_parent_pairid:t.getParentId()},t.props.auxData)},e.historyStackContext,e.pins)}y.groupEnd()}),l(this,"_deactivateComponent",function(t){y.group("Deactivating component",g()),f&&y.log(t.getContext());var r=t.getTimedPair();if(r){var n=r.view,i=r.viewParameter,o=r.component,a=r.element,s=r.objectId,c=r.clientTrackingParams,p=r.end();u({event_type:4703,view_type:n,view_parameter:i,component:o,element:a,object_id_str:s,view_data:t.props.viewData,duration_ns:p,pair_id:r.uuid,clientTrackingParams:c,aux_data:d({time_spent_foreground_pairid:e.appTimedPair&&e.appTimedPair.uuid,time_spent_parent_pairid:t.getParentId()},t.props.auxData)},e.historyStackContext,e.pins)}y.groupEnd()}),l(this,"_startOffsiteTimedPair",function(){var t=e.clickthroughProperties;t&&(e.offsiteTimedPair=new o.Z(d(d({},t),{},{view:186,viewParameter:t.view_parameter,objectId:t.object_id_str})),e.offsiteTimedPair.start(),e.offsiteTimedPairForegroundId=e.appTimedPair?e.appTimedPair.uuid:null,t.aux_data=d(d({},t.aux_data),{},{time_to_offsite:void 0!==t.time&&null!==t.time&&"number"==typeof t.time?(0,i.Z)()-t.time:void 0}),u(d(d({},t),{},{event_type:4702,view_type:186,pair_id:e.offsiteTimedPair?e.offsiteTimedPair.uuid:null,aux_data:d(d({},t.aux_data),{},{time_spent_foreground_pairid:e.offsiteTimedPairForegroundId})}),e.historyStackContext,e.pins))}),l(this,"_endOffsiteTimedPair",function(){var t=e.offsiteTimedPair,r=e.clickthroughProperties;if(t&&r){var n=t.end();u(d(d({},r),{},{event_type:4703,view_type:186,pair_id:e.offsiteTimedPair?e.offsiteTimedPair.uuid:null,aux_data:d(d({},r.aux_data),{},{time_spent_foreground_pairid:e.offsiteTimedPairForegroundId}),duration_ns:n}),e.historyStackContext,e.pins),e._onOffsiteEnd(),e.clearClickthroughProperties()}}),l(this,"_onOffsiteEnd",function(){y.group("Trigger onOffsiteEndCallbacks"),P.forEach(function(t){return t({appTimedPair:e.appTimedPair,clickthroughProperties:e.clickthroughProperties,offsiteTimedPair:e.offsiteTimedPair,offsiteTimedPairForegroundId:e.offsiteTimedPairForegroundId})}),y.groupEnd()}),l(this,"_pauseAllComponents",function(){y.group("Pause all components"),c.forEach(function(t,r,n){t===v.ACTIVE&&e._deactivateComponent(r),n.set(r,v.PAUSED)}),y.groupEnd()}),l(this,"_unpauseAllComponents",function(){y.group("Unpause all components"),c.forEach(function(t,r){var n=new o.Z(r.getLoggerContext());r.setTimedPair(n,function(){c.set(r,v.ACTIVE),e._activateComponent(r)})}),y.groupEnd()})}return e=[{key:"setHistoryStackContext",value:function(e){this.historyStackContext=e}},{key:"setPins",value:function(e){this.pins=e}},{key:"registerComponent",value:function(e){null===this.appTimedPair?c.set(e,v.PAUSED):(c.set(e,v.ACTIVE),this._activateComponent(e))}},{key:"unregisterComponent",value:function(e){c.get(e)===v.ACTIVE&&(this._deactivateComponent(e),e.setTimedPair(new o.Z(e.getLoggerContext()))),c.delete(e)}},{key:"size",value:function(){return c.size}},{key:"onOffsiteEnd",value:function(e){P.push(e)}},{key:"removeOnOffsiteEnd",value:function(e){var t=P.indexOf(e);t>-1&&P.splice(t,1)}}],p(n.prototype,e),r&&p(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}())}},822987:function(e,t,r){r.d(t,{j:function(){return f},w:function(){return l}});var n=r(214877),i=r(342513),o=r(5859),a=r(839372),s=r(554786),u=r(494125),c=r(819267),d=(0,i.Z)("TimeSpentManagerContext"),p=d.Provider,l=d.useMaybeHook;function f(e){var t=e.children,r=(0,n.v)(),i=(0,s.HG)(),d=(0,o.B)().isAuthenticated,l=(0,a.w)({contextLogger:r,shouldExtractTrackingParams:i&&d});return(0,u.Z)(function(){document.hasFocus()&&l.registerApp(),l.addEventListeners()}),(0,c.jsx)(p,{value:l,children:t})}},503325:function(e,t,r){var n,i,o,a=r(512419),s=r(946878);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,p(n.key),n)}}function d(e,t,r){return(t=p(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==u(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===u(t)?t:String(t)}var l="undefined"!=typeof window&&window.performance&&window.performance.now?function(){return Math.floor(1e6*window.performance.now())}:function(){return 1e6*Date.now()},f=(n=function e(t){var r=this;(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,e),d(this,"start",function(){return r.startTime=l(),r.startTime}),d(this,"end",function(){return r.endTime=l(),r.duration=r.startTime?r.endTime-r.startTime:null,r.duration});try{this.uuid=(0,a.Z)()}catch(e){this.uuid=(0,s.Z)()}t&&Object.assign(this,t)},i&&c(n.prototype,i),o&&c(n,o),Object.defineProperty(n,"prototype",{writable:!1}),n);t.Z=f},946878:function(e,t,r){var n,i,o=r(15263),a=r(78239),s=0,u=0;t.Z=function(e,t,r){var c=t&&r||0,d=t||Array(16),p=(e=e||{}).node||n,l=void 0!==e.clockseq?e.clockseq:i;if(null==p||null==l){var f=e.random||(e.rng||o.Z)();null==p&&(p=n=[1|f[0],f[1],f[2],f[3],f[4],f[5]]),null==l&&(l=i=(f[6]<<8|f[7])&16383)}var m=void 0!==e.msecs?e.msecs:Date.now(),v=void 0!==e.nsecs?e.nsecs:u+1,g=m-s+(v-u)/1e4;if(g<0&&void 0===e.clockseq&&(l=l+1&16383),(g<0||m>s)&&void 0===e.nsecs&&(v=0),v>=1e4)throw Error("uuid.v1(): Can't create more than 10M uuids/sec");s=m,u=v,i=l;var h=((268435455&(m+=122192928e5))*1e4+v)%4294967296;d[c++]=h>>>24&255,d[c++]=h>>>16&255,d[c++]=h>>>8&255,d[c++]=255&h;var _=m/4294967296*1e4&268435455;d[c++]=_>>>8&255,d[c++]=255&_,d[c++]=_>>>24&15|16,d[c++]=_>>>16&255,d[c++]=l>>>8|128,d[c++]=255&l;for(var P=0;P<6;++P)d[c+P]=p[P];return t||(0,a.Z)(d)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/22987-2fdae462ef186a68.js.map
