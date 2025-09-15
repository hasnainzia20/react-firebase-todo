(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var Rd={exports:{}},gl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function CS(){if(w_)return gl;w_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var g in l)g!=="key"&&(c[g]=l[g])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return gl.Fragment=t,gl.jsx=n,gl.jsxs=n,gl}var R_;function DS(){return R_||(R_=1,Rd.exports=CS()),Rd.exports}var Oe=DS(),Id={exports:{}},At={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function NS(){if(I_)return At;I_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),I=Symbol.iterator;function C(D){return D===null||typeof D!="object"?null:(D=I&&D[I]||D["@@iterator"],typeof D=="function"?D:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,nt={};function Z(D,Y,et){this.props=D,this.context=Y,this.refs=nt,this.updater=et||G}Z.prototype.isReactComponent={},Z.prototype.setState=function(D,Y){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Y,"setState")},Z.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function Tt(){}Tt.prototype=Z.prototype;function gt(D,Y,et){this.props=D,this.context=Y,this.refs=nt,this.updater=et||G}var ct=gt.prototype=new Tt;ct.constructor=gt,$(ct,Z.prototype),ct.isPureReactComponent=!0;var qt=Array.isArray,Et={H:null,A:null,T:null,S:null,V:null},Lt=Object.prototype.hasOwnProperty;function V(D,Y,et,J,lt,bt){return et=bt.ref,{$$typeof:r,type:D,key:Y,ref:et!==void 0?et:null,props:bt}}function S(D,Y){return V(D.type,Y,void 0,void 0,void 0,D.props)}function R(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function O(D){var Y={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(et){return Y[et]})}var M=/\/+/g;function k(D,Y){return typeof D=="object"&&D!==null&&D.key!=null?O(""+D.key):Y.toString(36)}function w(){}function Pe(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(w,w):(D.status="pending",D.then(function(Y){D.status==="pending"&&(D.status="fulfilled",D.value=Y)},function(Y){D.status==="pending"&&(D.status="rejected",D.reason=Y)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function re(D,Y,et,J,lt){var bt=typeof D;(bt==="undefined"||bt==="boolean")&&(D=null);var yt=!1;if(D===null)yt=!0;else switch(bt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(D.$$typeof){case r:case t:yt=!0;break;case A:return yt=D._init,re(yt(D._payload),Y,et,J,lt)}}if(yt)return lt=lt(D),yt=J===""?"."+k(D,0):J,qt(lt)?(et="",yt!=null&&(et=yt.replace(M,"$&/")+"/"),re(lt,Y,et,"",function(Gn){return Gn})):lt!=null&&(R(lt)&&(lt=S(lt,et+(lt.key==null||D&&D.key===lt.key?"":(""+lt.key).replace(M,"$&/")+"/")+yt)),Y.push(lt)),1;yt=0;var we=J===""?".":J+":";if(qt(D))for(var $t=0;$t<D.length;$t++)J=D[$t],bt=we+k(J,$t),yt+=re(J,Y,et,bt,lt);else if($t=C(D),typeof $t=="function")for(D=$t.call(D),$t=0;!(J=D.next()).done;)J=J.value,bt=we+k(J,$t++),yt+=re(J,Y,et,bt,lt);else if(bt==="object"){if(typeof D.then=="function")return re(Pe(D),Y,et,J,lt);throw Y=String(D),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return yt}function j(D,Y,et){if(D==null)return D;var J=[],lt=0;return re(D,J,"","",function(bt){return Y.call(et,bt,lt++)}),J}function tt(D){if(D._status===-1){var Y=D._result;Y=Y(),Y.then(function(et){(D._status===0||D._status===-1)&&(D._status=1,D._result=et)},function(et){(D._status===0||D._status===-1)&&(D._status=2,D._result=et)}),D._status===-1&&(D._status=0,D._result=Y)}if(D._status===1)return D._result.default;throw D._result}var ot=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Ut(){}return At.Children={map:j,forEach:function(D,Y,et){j(D,function(){Y.apply(this,arguments)},et)},count:function(D){var Y=0;return j(D,function(){Y++}),Y},toArray:function(D){return j(D,function(Y){return Y})||[]},only:function(D){if(!R(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},At.Component=Z,At.Fragment=n,At.Profiler=l,At.PureComponent=gt,At.StrictMode=s,At.Suspense=p,At.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Et,At.__COMPILER_RUNTIME={__proto__:null,c:function(D){return Et.H.useMemoCache(D)}},At.cache=function(D){return function(){return D.apply(null,arguments)}},At.cloneElement=function(D,Y,et){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var J=$({},D.props),lt=D.key,bt=void 0;if(Y!=null)for(yt in Y.ref!==void 0&&(bt=void 0),Y.key!==void 0&&(lt=""+Y.key),Y)!Lt.call(Y,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&Y.ref===void 0||(J[yt]=Y[yt]);var yt=arguments.length-2;if(yt===1)J.children=et;else if(1<yt){for(var we=Array(yt),$t=0;$t<yt;$t++)we[$t]=arguments[$t+2];J.children=we}return V(D.type,lt,void 0,void 0,bt,J)},At.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},At.createElement=function(D,Y,et){var J,lt={},bt=null;if(Y!=null)for(J in Y.key!==void 0&&(bt=""+Y.key),Y)Lt.call(Y,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(lt[J]=Y[J]);var yt=arguments.length-2;if(yt===1)lt.children=et;else if(1<yt){for(var we=Array(yt),$t=0;$t<yt;$t++)we[$t]=arguments[$t+2];lt.children=we}if(D&&D.defaultProps)for(J in yt=D.defaultProps,yt)lt[J]===void 0&&(lt[J]=yt[J]);return V(D,bt,void 0,void 0,null,lt)},At.createRef=function(){return{current:null}},At.forwardRef=function(D){return{$$typeof:g,render:D}},At.isValidElement=R,At.lazy=function(D){return{$$typeof:A,_payload:{_status:-1,_result:D},_init:tt}},At.memo=function(D,Y){return{$$typeof:y,type:D,compare:Y===void 0?null:Y}},At.startTransition=function(D){var Y=Et.T,et={};Et.T=et;try{var J=D(),lt=Et.S;lt!==null&&lt(et,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(Ut,ot)}catch(bt){ot(bt)}finally{Et.T=Y}},At.unstable_useCacheRefresh=function(){return Et.H.useCacheRefresh()},At.use=function(D){return Et.H.use(D)},At.useActionState=function(D,Y,et){return Et.H.useActionState(D,Y,et)},At.useCallback=function(D,Y){return Et.H.useCallback(D,Y)},At.useContext=function(D){return Et.H.useContext(D)},At.useDebugValue=function(){},At.useDeferredValue=function(D,Y){return Et.H.useDeferredValue(D,Y)},At.useEffect=function(D,Y,et){var J=Et.H;if(typeof et=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(D,Y)},At.useId=function(){return Et.H.useId()},At.useImperativeHandle=function(D,Y,et){return Et.H.useImperativeHandle(D,Y,et)},At.useInsertionEffect=function(D,Y){return Et.H.useInsertionEffect(D,Y)},At.useLayoutEffect=function(D,Y){return Et.H.useLayoutEffect(D,Y)},At.useMemo=function(D,Y){return Et.H.useMemo(D,Y)},At.useOptimistic=function(D,Y){return Et.H.useOptimistic(D,Y)},At.useReducer=function(D,Y,et){return Et.H.useReducer(D,Y,et)},At.useRef=function(D){return Et.H.useRef(D)},At.useState=function(D){return Et.H.useState(D)},At.useSyncExternalStore=function(D,Y,et){return Et.H.useSyncExternalStore(D,Y,et)},At.useTransition=function(){return Et.H.useTransition()},At.version="19.1.1",At}var C_;function Tm(){return C_||(C_=1,Id.exports=NS()),Id.exports}var Sc=Tm(),Cd={exports:{}},pl={},Dd={exports:{}},Nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function OS(){return D_||(D_=1,(function(r){function t(j,tt){var ot=j.length;j.push(tt);t:for(;0<ot;){var Ut=ot-1>>>1,D=j[Ut];if(0<l(D,tt))j[Ut]=tt,j[ot]=D,ot=Ut;else break t}}function n(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var tt=j[0],ot=j.pop();if(ot!==tt){j[0]=ot;t:for(var Ut=0,D=j.length,Y=D>>>1;Ut<Y;){var et=2*(Ut+1)-1,J=j[et],lt=et+1,bt=j[lt];if(0>l(J,ot))lt<D&&0>l(bt,J)?(j[Ut]=bt,j[lt]=ot,Ut=lt):(j[Ut]=J,j[et]=ot,Ut=et);else if(lt<D&&0>l(bt,ot))j[Ut]=bt,j[lt]=ot,Ut=lt;else break t}}return tt}function l(j,tt){var ot=j.sortIndex-tt.sortIndex;return ot!==0?ot:j.id-tt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,g=d.now();r.unstable_now=function(){return d.now()-g}}var p=[],y=[],A=1,I=null,C=3,G=!1,$=!1,nt=!1,Z=!1,Tt=typeof setTimeout=="function"?setTimeout:null,gt=typeof clearTimeout=="function"?clearTimeout:null,ct=typeof setImmediate<"u"?setImmediate:null;function qt(j){for(var tt=n(y);tt!==null;){if(tt.callback===null)s(y);else if(tt.startTime<=j)s(y),tt.sortIndex=tt.expirationTime,t(p,tt);else break;tt=n(y)}}function Et(j){if(nt=!1,qt(j),!$)if(n(p)!==null)$=!0,Lt||(Lt=!0,k());else{var tt=n(y);tt!==null&&re(Et,tt.startTime-j)}}var Lt=!1,V=-1,S=5,R=-1;function O(){return Z?!0:!(r.unstable_now()-R<S)}function M(){if(Z=!1,Lt){var j=r.unstable_now();R=j;var tt=!0;try{t:{$=!1,nt&&(nt=!1,gt(V),V=-1),G=!0;var ot=C;try{e:{for(qt(j),I=n(p);I!==null&&!(I.expirationTime>j&&O());){var Ut=I.callback;if(typeof Ut=="function"){I.callback=null,C=I.priorityLevel;var D=Ut(I.expirationTime<=j);if(j=r.unstable_now(),typeof D=="function"){I.callback=D,qt(j),tt=!0;break e}I===n(p)&&s(p),qt(j)}else s(p);I=n(p)}if(I!==null)tt=!0;else{var Y=n(y);Y!==null&&re(Et,Y.startTime-j),tt=!1}}break t}finally{I=null,C=ot,G=!1}tt=void 0}}finally{tt?k():Lt=!1}}}var k;if(typeof ct=="function")k=function(){ct(M)};else if(typeof MessageChannel<"u"){var w=new MessageChannel,Pe=w.port2;w.port1.onmessage=M,k=function(){Pe.postMessage(null)}}else k=function(){Tt(M,0)};function re(j,tt){V=Tt(function(){j(r.unstable_now())},tt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(j){j.callback=null},r.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<j?Math.floor(1e3/j):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_next=function(j){switch(C){case 1:case 2:case 3:var tt=3;break;default:tt=C}var ot=C;C=tt;try{return j()}finally{C=ot}},r.unstable_requestPaint=function(){Z=!0},r.unstable_runWithPriority=function(j,tt){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var ot=C;C=j;try{return tt()}finally{C=ot}},r.unstable_scheduleCallback=function(j,tt,ot){var Ut=r.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?Ut+ot:Ut):ot=Ut,j){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ot+D,j={id:A++,callback:tt,priorityLevel:j,startTime:ot,expirationTime:D,sortIndex:-1},ot>Ut?(j.sortIndex=ot,t(y,j),n(p)===null&&j===n(y)&&(nt?(gt(V),V=-1):nt=!0,re(Et,ot-Ut))):(j.sortIndex=D,t(p,j),$||G||($=!0,Lt||(Lt=!0,k()))),j},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(j){var tt=C;return function(){var ot=C;C=tt;try{return j.apply(this,arguments)}finally{C=ot}}}})(Nd)),Nd}var N_;function MS(){return N_||(N_=1,Dd.exports=OS()),Dd.exports}var Od={exports:{}},Fe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function VS(){if(O_)return Fe;O_=1;var r=Tm();function t(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)y+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,y,A){var I=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:I==null?null:""+I,children:p,containerInfo:y,implementation:A}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Fe.createPortal=function(p,y){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return c(p,y,null,A)},Fe.flushSync=function(p){var y=d.T,A=s.p;try{if(d.T=null,s.p=2,p)return p()}finally{d.T=y,s.p=A,s.d.f()}},Fe.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},Fe.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Fe.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var A=y.as,I=g(A,y.crossOrigin),C=typeof y.integrity=="string"?y.integrity:void 0,G=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;A==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:I,integrity:C,fetchPriority:G}):A==="script"&&s.d.X(p,{crossOrigin:I,integrity:C,fetchPriority:G,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Fe.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var A=g(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:A,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},Fe.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var A=y.as,I=g(A,y.crossOrigin);s.d.L(p,A,{crossOrigin:I,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Fe.preloadModule=function(p,y){if(typeof p=="string")if(y){var A=g(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:A,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},Fe.requestFormReset=function(p){s.d.r(p)},Fe.unstable_batchedUpdates=function(p,y){return p(y)},Fe.useFormState=function(p,y,A){return d.H.useFormState(p,y,A)},Fe.useFormStatus=function(){return d.H.useHostTransitionStatus()},Fe.version="19.1.1",Fe}var M_;function PS(){if(M_)return Od.exports;M_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Od.exports=VS(),Od.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_;function kS(){if(V_)return pl;V_=1;var r=MS(),t=Tm(),n=PS();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function d(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function g(e){if(c(e)!==e)throw Error(s(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,o=i;;){var h=a.return;if(h===null)break;var f=h.alternate;if(f===null){if(o=h.return,o!==null){a=o;continue}break}if(h.child===f.child){for(f=h.child;f;){if(f===a)return g(h),e;if(f===o)return g(h),i;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=h,o=f;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,o=f;break}if(T===o){v=!0,o=h,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,o=h;break}if(T===o){v=!0,o=f,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function y(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=y(e),i!==null)return i;e=e.sibling}return null}var A=Object.assign,I=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),nt=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),Tt=Symbol.for("react.provider"),gt=Symbol.for("react.consumer"),ct=Symbol.for("react.context"),qt=Symbol.for("react.forward_ref"),Et=Symbol.for("react.suspense"),Lt=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var w=Symbol.for("react.client.reference");function Pe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===w?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case Z:return"Profiler";case nt:return"StrictMode";case Et:return"Suspense";case Lt:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case ct:return(e.displayName||"Context")+".Provider";case gt:return(e._context.displayName||"Context")+".Consumer";case qt:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return i=e.displayName||null,i!==null?i:Pe(e.type)||"Memo";case S:i=e._payload,e=e._init;try{return Pe(e(i))}catch{}}return null}var re=Array.isArray,j=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},Ut=[],D=-1;function Y(e){return{current:e}}function et(e){0>D||(e.current=Ut[D],Ut[D]=null,D--)}function J(e,i){D++,Ut[D]=e.current,e.current=i}var lt=Y(null),bt=Y(null),yt=Y(null),we=Y(null);function $t(e,i){switch(J(yt,i),J(bt,e),J(lt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Wy(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Wy(i),e=t_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}et(lt),J(lt,e)}function Gn(){et(lt),et(bt),et(yt)}function Zi(e){e.memoizedState!==null&&J(we,e);var i=lt.current,a=t_(i,e.type);i!==a&&(J(bt,e),J(lt,a))}function _i(e){bt.current===e&&(et(lt),et(bt)),we.current===e&&(et(we),cl._currentValue=ot)}var Qr=Object.prototype.hasOwnProperty,Kr=r.unstable_scheduleCallback,Yr=r.unstable_cancelCallback,ao=r.unstable_shouldYield,Fl=r.unstable_requestPaint,vn=r.unstable_now,wh=r.unstable_getCurrentPriorityLevel,oo=r.unstable_ImmediatePriority,Hs=r.unstable_UserBlockingPriority,Xr=r.unstable_NormalPriority,Rh=r.unstable_LowPriority,Gs=r.unstable_IdlePriority,lo=r.log,Ql=r.unstable_setDisableYieldValue,se=null,jt=null;function ln(e){if(typeof lo=="function"&&Ql(e),jt&&typeof jt.setStrictMode=="function")try{jt.setStrictMode(se,e)}catch{}}var He=Math.clz32?Math.clz32:$r,Kl=Math.log,Ih=Math.LN2;function $r(e){return e>>>=0,e===0?32:31-(Kl(e)/Ih|0)|0}var Zr=256,Jr=4194304;function Pn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Fs(e,i,a){var o=e.pendingLanes;if(o===0)return 0;var h=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?h=Pn(o):(v&=T,v!==0?h=Pn(v):a||(a=T&~e,a!==0&&(h=Pn(a))))):(T=o&~f,T!==0?h=Pn(T):v!==0?h=Pn(v):a||(a=o&~e,a!==0&&(h=Pn(a)))),h===0?0:i!==0&&i!==h&&(i&f)===0&&(f=h&-h,a=i&-i,f>=a||f===32&&(a&4194048)!==0)?i:h}function Wr(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function uo(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function co(){var e=Zr;return Zr<<=1,(Zr&4194048)===0&&(Zr=256),e}function ho(){var e=Jr;return Jr<<=1,(Jr&62914560)===0&&(Jr=4194304),e}function vi(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function Ti(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function fo(e,i,a,o,h,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,b=e.expirationTimes,L=e.hiddenUpdates;for(a=v&~a;0<a;){var H=31-He(a),Q=1<<H;T[H]=0,b[H]=-1;var z=L[H];if(z!==null)for(L[H]=null,H=0;H<z.length;H++){var B=z[H];B!==null&&(B.lane&=-536870913)}a&=~Q}o!==0&&Fn(e,o,0),f!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~i))}function Fn(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-He(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function mo(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var o=31-He(a),h=1<<o;h&i|e[o]&i&&(e[o]|=i),a&=~h}}function Ji(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Wi(){var e=tt.p;return e!==0?e:(e=window.event,e===void 0?32:v_(e.type))}function Yl(e,i){var a=tt.p;try{return tt.p=e,i()}finally{tt.p=a}}var te=Math.random().toString(36).slice(2),_e="__reactFiber$"+te,fe="__reactProps$"+te,Tn="__reactContainer$"+te,go="__reactEvents$"+te,Ch="__reactListeners$"+te,tr="__reactHandles$"+te,Xl="__reactResources$"+te,ts="__reactMarker$"+te;function er(e){delete e[_e],delete e[fe],delete e[go],delete e[Ch],delete e[tr]}function Ei(e){var i=e[_e];if(i)return i;for(var a=e.parentNode;a;){if(i=a[Tn]||a[_e]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=r_(e);e!==null;){if(a=e[_e])return a;e=r_(e)}return i}e=a,a=e.parentNode}return null}function Qn(e){if(e=e[_e]||e[Tn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Kn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function Ze(e){var i=e[Xl];return i||(i=e[Xl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function le(e){e[ts]=!0}var po=new Set,Ks={};function kn(e,i){Ai(e,i),Ai(e+"Capture",i)}function Ai(e,i){for(Ks[e]=i,e=0;e<i.length;e++)po.add(i[e])}var $l=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zl={},es={};function Jl(e){return Qr.call(es,e)?!0:Qr.call(Zl,e)?!1:$l.test(e)?es[e]=!0:(Zl[e]=!0,!1)}function nr(e,i,a){if(Jl(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function Yn(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function ke(e,i,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+o)}}var ns,Wl;function Si(e){if(ns===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);ns=i&&i[1]||"",Wl=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ns+e+Wl}var Ys=!1;function Xs(e,i){if(!e||Ys)return"";Ys=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(B){var z=B}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(B){z=B}e.call(Q.prototype)}}else{try{throw Error()}catch(B){z=B}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(B){if(B&&z&&typeof B.stack=="string")return[B.stack,z.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var b=v.split(`
`),L=T.split(`
`);for(h=o=0;o<b.length&&!b[o].includes("DetermineComponentFrameRoot");)o++;for(;h<L.length&&!L[h].includes("DetermineComponentFrameRoot");)h++;if(o===b.length||h===L.length)for(o=b.length-1,h=L.length-1;1<=o&&0<=h&&b[o]!==L[h];)h--;for(;1<=o&&0<=h;o--,h--)if(b[o]!==L[h]){if(o!==1||h!==1)do if(o--,h--,0>h||b[o]!==L[h]){var H=`
`+b[o].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=o&&0<=h);break}}}finally{Ys=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Si(a):""}function yo(e){switch(e.tag){case 26:case 27:case 5:return Si(e.type);case 16:return Si("Lazy");case 13:return Si("Suspense");case 19:return Si("SuspenseList");case 0:case 15:return Xs(e.type,!1);case 11:return Xs(e.type.render,!1);case 1:return Xs(e.type,!0);case 31:return Si("Activity");default:return""}}function $s(e){try{var i="";do i+=yo(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Je(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _o(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Dh(e){var i=_o(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,f=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){o=""+v,f.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Zs(e){e._valueTracker||(e._valueTracker=Dh(e))}function vo(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return e&&(o=_o(e)?e.checked?"true":"false":e.value),e=o,e!==a?(i.setValue(e),!0):!1}function is(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Nh=/[\n"\\]/g;function de(e){return e.replace(Nh,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function un(e,i,a,o,h,f,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Je(i)):e.value!==""+Je(i)&&(e.value=""+Je(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?ir(e,v,Je(i)):a!=null?ir(e,v,Je(a)):o!=null&&e.removeAttribute("value"),h==null&&f!=null&&(e.defaultChecked=!!f),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Je(T):e.removeAttribute("name")}function rs(e,i,a,o,h,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),i!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||i!=null))return;a=a!=null?""+Je(a):"",i=i!=null?""+Je(i):a,T||i===e.value||(e.value=i),e.defaultValue=i}o=o??h,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function ir(e,i,a){i==="number"&&is(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function bi(e,i,a,o){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Je(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,o&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Ft(e,i,a){if(i!=null&&(i=""+Je(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+Je(a):""}function ss(e,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(s(92));if(re(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=Je(i),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function En(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var as=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tu(e,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,a):typeof a!="number"||a===0||as.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function To(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var h in i)o=i[h],i.hasOwnProperty(h)&&a[h]!==o&&tu(e,h,o)}else for(var f in i)i.hasOwnProperty(f)&&tu(e,f,i[f])}function Eo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Js(e){return Mh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var wi=null;function An(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ri=null,Ii=null;function Ao(e){var i=Qn(e);if(i&&(e=i.stateNode)){var a=e[fe]||null;t:switch(e=i.stateNode,i.type){case"input":if(un(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+de(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==e&&o.form===e.form){var h=o[fe]||null;if(!h)throw Error(s(90));un(o,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===e.form&&vo(o)}break t;case"textarea":Ft(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&bi(e,!!a.multiple,i,!1)}}}var Xn=!1;function eu(e,i,a){if(Xn)return e(i,a);Xn=!0;try{var o=e(i);return o}finally{if(Xn=!1,(Ri!==null||Ii!==null)&&(Yu(),Ri&&(i=Ri,e=Ii,Ii=Ri=null,Ao(i),e)))for(i=0;i<e.length;i++)Ao(e[i])}}function os(e,i){var a=e.stateNode;if(a===null)return null;var o=a[fe]||null;if(o===null)return null;a=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sn=!1;if(Un)try{var ls={};Object.defineProperty(ls,"passive",{get:function(){Sn=!0}}),window.addEventListener("test",ls,ls),window.removeEventListener("test",ls,ls)}catch{Sn=!1}var $n=null,rr=null,Ci=null;function So(){if(Ci)return Ci;var e,i=rr,a=i.length,o,h="value"in $n?$n.value:$n.textContent,f=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(o=1;o<=v&&i[a-o]===h[f-o];o++);return Ci=h.slice(e,1<o?1-o:void 0)}function Zn(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Jn(){return!0}function bo(){return!1}function Re(e){function i(a,o,h,f,v){this._reactName=a,this._targetInst=h,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Jn:bo,this.isPropagationStopped=bo,this}return A(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),i}var zt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ws=Re(zt),us=A({},zt,{view:0,detail:0}),nu=Re(us),ta,ea,Wn,cs=A({},us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wn&&(Wn&&e.type==="mousemove"?(ta=e.screenX-Wn.screenX,ea=e.screenY-Wn.screenY):ea=ta=0,Wn=e),ta)},movementY:function(e){return"movementY"in e?e.movementY:ea}}),bn=Re(cs),iu=A({},cs,{dataTransfer:0}),Vh=Re(iu),hs=A({},us,{relatedTarget:0}),na=Re(hs),wo=A({},zt,{animationName:0,elapsedTime:0,pseudoElement:0}),ia=Re(wo),ru=A({},zt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ra=Re(ru),Ph=A({},zt,{data:0}),Ro=Re(Ph),fs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},su={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},au={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Io(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=au[e])?!!i[e]:!1}function ds(){return Io}var ou=A({},us,{key:function(e){if(e.key){var i=fs[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Zn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?su[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ds,charCode:function(e){return e.type==="keypress"?Zn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sa=Re(ou),lu=A({},cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Co=Re(lu),Di=A({},us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ds}),uu=Re(Di),cu=A({},zt,{propertyName:0,elapsedTime:0,pseudoElement:0}),hu=Re(cu),fu=A({},cs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),aa=Re(fu),We=A({},zt,{newState:0,oldState:0}),du=Re(We),mu=[9,13,27,32],ti=Un&&"CompositionEvent"in window,u=null;Un&&"documentMode"in document&&(u=document.documentMode);var m=Un&&"TextEvent"in window&&!u,_=Un&&(!ti||u&&8<u&&11>=u),E=" ",U=!1;function q(e,i){switch(e){case"keyup":return mu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function W(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function ve(e,i){switch(e){case"compositionend":return W(i);case"keypress":return i.which!==32?null:(U=!0,E);case"textInput":return e=i.data,e===E&&U?null:e;default:return null}}function Mt(e,i){if(Ot)return e==="compositionend"||!ti&&q(e,i)?(e=So(),Ci=rr=$n=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Ie={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Te(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Ie[e.type]:i==="textarea"}function Ni(e,i,a,o){Ri?Ii?Ii.push(o):Ii=[o]:Ri=o,i=tc(i,"onChange"),0<i.length&&(a=new Ws("onChange","change",null,a,o),e.push({event:a,listeners:i}))}var Ue=null,ei=null;function Do(e){Yy(e,0)}function gu(e){var i=Kn(e);if(vo(i))return e}function gg(e,i){if(e==="change")return i}var pg=!1;if(Un){var kh;if(Un){var Uh="oninput"in document;if(!Uh){var yg=document.createElement("div");yg.setAttribute("oninput","return;"),Uh=typeof yg.oninput=="function"}kh=Uh}else kh=!1;pg=kh&&(!document.documentMode||9<document.documentMode)}function _g(){Ue&&(Ue.detachEvent("onpropertychange",vg),ei=Ue=null)}function vg(e){if(e.propertyName==="value"&&gu(ei)){var i=[];Ni(i,ei,e,An(e)),eu(Do,i)}}function rA(e,i,a){e==="focusin"?(_g(),Ue=i,ei=a,Ue.attachEvent("onpropertychange",vg)):e==="focusout"&&_g()}function sA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gu(ei)}function aA(e,i){if(e==="click")return gu(i)}function oA(e,i){if(e==="input"||e==="change")return gu(i)}function lA(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var cn=typeof Object.is=="function"?Object.is:lA;function No(e,i){if(cn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var h=a[o];if(!Qr.call(i,h)||!cn(e[h],i[h]))return!1}return!0}function Tg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Eg(e,i){var a=Tg(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=i&&o>=i)return{node:a,offset:i-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Tg(a)}}function Ag(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Ag(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Sg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=is(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=is(e.document)}return i}function xh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var uA=Un&&"documentMode"in document&&11>=document.documentMode,oa=null,Lh=null,Oo=null,zh=!1;function bg(e,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;zh||oa==null||oa!==is(o)||(o=oa,"selectionStart"in o&&xh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Oo&&No(Oo,o)||(Oo=o,o=tc(Lh,"onSelect"),0<o.length&&(i=new Ws("onSelect","select",null,i,a),e.push({event:i,listeners:o}),i.target=oa)))}function ms(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var la={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionrun:ms("Transition","TransitionRun"),transitionstart:ms("Transition","TransitionStart"),transitioncancel:ms("Transition","TransitionCancel"),transitionend:ms("Transition","TransitionEnd")},Bh={},wg={};Un&&(wg=document.createElement("div").style,"AnimationEvent"in window||(delete la.animationend.animation,delete la.animationiteration.animation,delete la.animationstart.animation),"TransitionEvent"in window||delete la.transitionend.transition);function gs(e){if(Bh[e])return Bh[e];if(!la[e])return e;var i=la[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in wg)return Bh[e]=i[a];return e}var Rg=gs("animationend"),Ig=gs("animationiteration"),Cg=gs("animationstart"),cA=gs("transitionrun"),hA=gs("transitionstart"),fA=gs("transitioncancel"),Dg=gs("transitionend"),Ng=new Map,qh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qh.push("scrollEnd");function xn(e,i){Ng.set(e,i),kn(i,[e])}var Og=new WeakMap;function wn(e,i){if(typeof e=="object"&&e!==null){var a=Og.get(e);return a!==void 0?a:(i={value:e,source:i,stack:$s(i)},Og.set(e,i),i)}return{value:e,source:i,stack:$s(i)}}var Rn=[],ua=0,jh=0;function pu(){for(var e=ua,i=jh=ua=0;i<e;){var a=Rn[i];Rn[i++]=null;var o=Rn[i];Rn[i++]=null;var h=Rn[i];Rn[i++]=null;var f=Rn[i];if(Rn[i++]=null,o!==null&&h!==null){var v=o.pending;v===null?h.next=h:(h.next=v.next,v.next=h),o.pending=h}f!==0&&Mg(a,h,f)}}function yu(e,i,a,o){Rn[ua++]=e,Rn[ua++]=i,Rn[ua++]=a,Rn[ua++]=o,jh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Hh(e,i,a,o){return yu(e,i,a,o),_u(e)}function ca(e,i){return yu(e,null,null,i),_u(e)}function Mg(e,i,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var h=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(h=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,h&&i!==null&&(h=31-He(a),e=f.hiddenUpdates,o=e[h],o===null?e[h]=[i]:o.push(i),i.lane=a|536870912),f):null}function _u(e){if(50<nl)throw nl=0,$f=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ha={};function dA(e,i,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(e,i,a,o){return new dA(e,i,a,o)}function Gh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oi(e,i){var a=e.alternate;return a===null?(a=hn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Vg(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function vu(e,i,a,o,h,f){var v=0;if(o=e,typeof e=="function")Gh(e)&&(v=1);else if(typeof e=="string")v=gS(e,a,lt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=hn(31,a,i,h),e.elementType=R,e.lanes=f,e;case $:return ps(a.children,h,f,i);case nt:v=8,h|=24;break;case Z:return e=hn(12,a,i,h|2),e.elementType=Z,e.lanes=f,e;case Et:return e=hn(13,a,i,h),e.elementType=Et,e.lanes=f,e;case Lt:return e=hn(19,a,i,h),e.elementType=Lt,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tt:case ct:v=10;break t;case gt:v=9;break t;case qt:v=11;break t;case V:v=14;break t;case S:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return i=hn(v,a,i,h),i.elementType=e,i.type=o,i.lanes=f,i}function ps(e,i,a,o){return e=hn(7,e,o,i),e.lanes=a,e}function Fh(e,i,a){return e=hn(6,e,null,i),e.lanes=a,e}function Qh(e,i,a){return i=hn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var fa=[],da=0,Tu=null,Eu=0,In=[],Cn=0,ys=null,Mi=1,Vi="";function _s(e,i){fa[da++]=Eu,fa[da++]=Tu,Tu=e,Eu=i}function Pg(e,i,a){In[Cn++]=Mi,In[Cn++]=Vi,In[Cn++]=ys,ys=e;var o=Mi;e=Vi;var h=32-He(o)-1;o&=~(1<<h),a+=1;var f=32-He(i)+h;if(30<f){var v=h-h%5;f=(o&(1<<v)-1).toString(32),o>>=v,h-=v,Mi=1<<32-He(i)+h|a<<h|o,Vi=f+e}else Mi=1<<f|a<<h|o,Vi=e}function Kh(e){e.return!==null&&(_s(e,1),Pg(e,1,0))}function Yh(e){for(;e===Tu;)Tu=fa[--da],fa[da]=null,Eu=fa[--da],fa[da]=null;for(;e===ys;)ys=In[--Cn],In[Cn]=null,Vi=In[--Cn],In[Cn]=null,Mi=In[--Cn],In[Cn]=null}var tn=null,ae=null,xt=!1,vs=null,ni=!1,Xh=Error(s(519));function Ts(e){var i=Error(s(418,""));throw Po(wn(i,e)),Xh}function kg(e){var i=e.stateNode,a=e.type,o=e.memoizedProps;switch(i[_e]=e,i[fe]=o,a){case"dialog":It("cancel",i),It("close",i);break;case"iframe":case"object":case"embed":It("load",i);break;case"video":case"audio":for(a=0;a<rl.length;a++)It(rl[a],i);break;case"source":It("error",i);break;case"img":case"image":case"link":It("error",i),It("load",i);break;case"details":It("toggle",i);break;case"input":It("invalid",i),rs(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Zs(i);break;case"select":It("invalid",i);break;case"textarea":It("invalid",i),ss(i,o.value,o.defaultValue,o.children),Zs(i)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||Jy(i.textContent,a)?(o.popover!=null&&(It("beforetoggle",i),It("toggle",i)),o.onScroll!=null&&It("scroll",i),o.onScrollEnd!=null&&It("scrollend",i),o.onClick!=null&&(i.onclick=ec),i=!0):i=!1,i||Ts(e)}function Ug(e){for(tn=e.return;tn;)switch(tn.tag){case 5:case 13:ni=!1;return;case 27:case 3:ni=!0;return;default:tn=tn.return}}function Mo(e){if(e!==tn)return!1;if(!xt)return Ug(e),xt=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||fd(e.type,e.memoizedProps)),a=!a),a&&ae&&Ts(e),Ug(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){ae=zn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}ae=null}}else i===27?(i=ae,Tr(e.type)?(e=pd,pd=null,ae=e):ae=i):ae=tn?zn(e.stateNode.nextSibling):null;return!0}function Vo(){ae=tn=null,xt=!1}function xg(){var e=vs;return e!==null&&(rn===null?rn=e:rn.push.apply(rn,e),vs=null),e}function Po(e){vs===null?vs=[e]:vs.push(e)}var $h=Y(null),Es=null,Pi=null;function sr(e,i,a){J($h,i._currentValue),i._currentValue=a}function ki(e){e._currentValue=$h.current,et($h)}function Zh(e,i,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===a)break;e=e.return}}function Jh(e,i,a,o){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var f=h.dependencies;if(f!==null){var v=h.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=h;for(var b=0;b<i.length;b++)if(T.context===i[b]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Zh(f.return,a,e),o||(v=null);break t}f=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Zh(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function ko(e,i,a,o){e=null;for(var h=i,f=!1;h!==null;){if(!f){if((h.flags&524288)!==0)f=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;cn(h.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(h===we.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(cl):e=[cl])}h=h.return}e!==null&&Jh(i,e,a,o),i.flags|=262144}function Au(e){for(e=e.firstContext;e!==null;){if(!cn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function As(e){Es=e,Pi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ge(e){return Lg(Es,e)}function Su(e,i){return Es===null&&As(e),Lg(e,i)}function Lg(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Pi===null){if(e===null)throw Error(s(308));Pi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Pi=Pi.next=i;return a}var mA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},gA=r.unstable_scheduleCallback,pA=r.unstable_NormalPriority,Ee={$$typeof:ct,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wh(){return{controller:new mA,data:new Map,refCount:0}}function Uo(e){e.refCount--,e.refCount===0&&gA(pA,function(){e.controller.abort()})}var xo=null,tf=0,ma=0,ga=null;function yA(e,i){if(xo===null){var a=xo=[];tf=0,ma=id(),ga={status:"pending",value:void 0,then:function(o){a.push(o)}}}return tf++,i.then(zg,zg),i}function zg(){if(--tf===0&&xo!==null){ga!==null&&(ga.status="fulfilled");var e=xo;xo=null,ma=0,ga=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function _A(e,i){var a=[],o={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(o.status="rejected",o.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),o}var Bg=j.S;j.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&yA(e,i),Bg!==null&&Bg(e,i)};var Ss=Y(null);function ef(){var e=Ss.current;return e!==null?e:Zt.pooledCache}function bu(e,i){i===null?J(Ss,Ss.current):J(Ss,i.pool)}function qg(){var e=ef();return e===null?null:{parent:Ee._currentValue,pool:e}}var Lo=Error(s(460)),jg=Error(s(474)),wu=Error(s(542)),nf={then:function(){}};function Hg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ru(){}function Gg(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Ru,Ru),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Qg(e),e;default:if(typeof i.status=="string")i.then(Ru,Ru);else{if(e=Zt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=o}},function(o){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Qg(e),e}throw zo=i,Lo}}var zo=null;function Fg(){if(zo===null)throw Error(s(459));var e=zo;return zo=null,e}function Qg(e){if(e===Lo||e===wu)throw Error(s(483))}var ar=!1;function rf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function or(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function lr(e,i,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ht&2)!==0){var h=o.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),o.pending=i,i=_u(e),Mg(e,null,a),i}return yu(e,o,i,a),_u(e)}function Bo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,mo(e,a)}}function af(e,i){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var h=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?h=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?h=f=i:f=f.next=i}else h=f=i;a={baseState:o.baseState,firstBaseUpdate:h,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var of=!1;function qo(){if(of){var e=ga;if(e!==null)throw e}}function jo(e,i,a,o){of=!1;var h=e.updateQueue;ar=!1;var f=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var b=T,L=b.next;b.next=null,v===null?f=L:v.next=L,v=b;var H=e.alternate;H!==null&&(H=H.updateQueue,T=H.lastBaseUpdate,T!==v&&(T===null?H.firstBaseUpdate=L:T.next=L,H.lastBaseUpdate=b))}if(f!==null){var Q=h.baseState;v=0,H=L=b=null,T=f;do{var z=T.lane&-536870913,B=z!==T.lane;if(B?(Vt&z)===z:(o&z)===z){z!==0&&z===ma&&(of=!0),H!==null&&(H=H.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var mt=e,ht=T;z=i;var Yt=a;switch(ht.tag){case 1:if(mt=ht.payload,typeof mt=="function"){Q=mt.call(Yt,Q,z);break t}Q=mt;break t;case 3:mt.flags=mt.flags&-65537|128;case 0:if(mt=ht.payload,z=typeof mt=="function"?mt.call(Yt,Q,z):mt,z==null)break t;Q=A({},Q,z);break t;case 2:ar=!0}}z=T.callback,z!==null&&(e.flags|=64,B&&(e.flags|=8192),B=h.callbacks,B===null?h.callbacks=[z]:B.push(z))}else B={lane:z,tag:T.tag,payload:T.payload,callback:T.callback,next:null},H===null?(L=H=B,b=Q):H=H.next=B,v|=z;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;B=T,T=B.next,B.next=null,h.lastBaseUpdate=B,h.shared.pending=null}}while(!0);H===null&&(b=Q),h.baseState=b,h.firstBaseUpdate=L,h.lastBaseUpdate=H,f===null&&(h.shared.lanes=0),pr|=v,e.lanes=v,e.memoizedState=Q}}function Kg(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function Yg(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Kg(a[e],i)}var pa=Y(null),Iu=Y(0);function Xg(e,i){e=ji,J(Iu,e),J(pa,i),ji=e|i.baseLanes}function lf(){J(Iu,ji),J(pa,pa.current)}function uf(){ji=Iu.current,et(pa),et(Iu)}var ur=0,St=null,Qt=null,me=null,Cu=!1,ya=!1,bs=!1,Du=0,Ho=0,_a=null,vA=0;function ue(){throw Error(s(321))}function cf(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!cn(e[a],i[a]))return!1;return!0}function hf(e,i,a,o,h,f){return ur=f,St=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,j.H=e===null||e.memoizedState===null?Mp:Vp,bs=!1,f=a(o,h),bs=!1,ya&&(f=Zg(i,a,o,h)),$g(e),f}function $g(e){j.H=ku;var i=Qt!==null&&Qt.next!==null;if(ur=0,me=Qt=St=null,Cu=!1,Ho=0,_a=null,i)throw Error(s(300));e===null||Ce||(e=e.dependencies,e!==null&&Au(e)&&(Ce=!0))}function Zg(e,i,a,o){St=e;var h=0;do{if(ya&&(_a=null),Ho=0,ya=!1,25<=h)throw Error(s(301));if(h+=1,me=Qt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}j.H=RA,f=i(a,o)}while(ya);return f}function TA(){var e=j.H,i=e.useState()[0];return i=typeof i.then=="function"?Go(i):i,e=e.useState()[0],(Qt!==null?Qt.memoizedState:null)!==e&&(St.flags|=1024),i}function ff(){var e=Du!==0;return Du=0,e}function df(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function mf(e){if(Cu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Cu=!1}ur=0,me=Qt=St=null,ya=!1,Ho=Du=0,_a=null}function en(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?St.memoizedState=me=e:me=me.next=e,me}function ge(){if(Qt===null){var e=St.alternate;e=e!==null?e.memoizedState:null}else e=Qt.next;var i=me===null?St.memoizedState:me.next;if(i!==null)me=i,Qt=e;else{if(e===null)throw St.alternate===null?Error(s(467)):Error(s(310));Qt=e,e={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},me===null?St.memoizedState=me=e:me=me.next=e}return me}function gf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Go(e){var i=Ho;return Ho+=1,_a===null&&(_a=[]),e=Gg(_a,e,i),i=St,(me===null?i.memoizedState:me.next)===null&&(i=i.alternate,j.H=i===null||i.memoizedState===null?Mp:Vp),e}function Nu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Go(e);if(e.$$typeof===ct)return Ge(e)}throw Error(s(438,String(e)))}function pf(e){var i=null,a=St.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=St.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=gf(),St.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),o=0;o<e;o++)a[o]=O;return i.index++,a}function Ui(e,i){return typeof i=="function"?i(e):i}function Ou(e){var i=ge();return yf(i,Qt,e)}function yf(e,i,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var h=e.baseQueue,f=o.pending;if(f!==null){if(h!==null){var v=h.next;h.next=f.next,f.next=v}i.baseQueue=h=f,o.pending=null}if(f=e.baseState,h===null)e.memoizedState=f;else{i=h.next;var T=v=null,b=null,L=i,H=!1;do{var Q=L.lane&-536870913;if(Q!==L.lane?(Vt&Q)===Q:(ur&Q)===Q){var z=L.revertLane;if(z===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),Q===ma&&(H=!0);else if((ur&z)===z){L=L.next,z===ma&&(H=!0);continue}else Q={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},b===null?(T=b=Q,v=f):b=b.next=Q,St.lanes|=z,pr|=z;Q=L.action,bs&&a(f,Q),f=L.hasEagerState?L.eagerState:a(f,Q)}else z={lane:Q,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},b===null?(T=b=z,v=f):b=b.next=z,St.lanes|=Q,pr|=Q;L=L.next}while(L!==null&&L!==i);if(b===null?v=f:b.next=T,!cn(f,e.memoizedState)&&(Ce=!0,H&&(a=ga,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=b,o.lastRenderedState=f}return h===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function _f(e){var i=ge(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,h=a.pending,f=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do f=e(f,v.action),v=v.next;while(v!==h);cn(f,i.memoizedState)||(Ce=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),a.lastRenderedState=f}return[f,o]}function Jg(e,i,a){var o=St,h=ge(),f=xt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!cn((Qt||h).memoizedState,a);v&&(h.memoizedState=a,Ce=!0),h=h.queue;var T=ep.bind(null,o,h,e);if(Fo(2048,8,T,[e]),h.getSnapshot!==i||v||me!==null&&me.memoizedState.tag&1){if(o.flags|=2048,va(9,Mu(),tp.bind(null,o,h,a,i),null),Zt===null)throw Error(s(349));f||(ur&124)!==0||Wg(o,i,a)}return a}function Wg(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=St.updateQueue,i===null?(i=gf(),St.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function tp(e,i,a,o){i.value=a,i.getSnapshot=o,np(i)&&ip(e)}function ep(e,i,a){return a(function(){np(i)&&ip(e)})}function np(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!cn(e,a)}catch{return!0}}function ip(e){var i=ca(e,2);i!==null&&pn(i,e,2)}function vf(e){var i=en();if(typeof e=="function"){var a=e;if(e=a(),bs){ln(!0);try{a()}finally{ln(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:e},i}function rp(e,i,a,o){return e.baseState=a,yf(e,Qt,typeof o=="function"?o:Ui)}function EA(e,i,a,o,h){if(Pu(e))throw Error(s(485));if(e=i.action,e!==null){var f={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};j.T!==null?a(!0):f.isTransition=!1,o(f),a=i.pending,a===null?(f.next=i.pending=f,sp(i,f)):(f.next=a.next,i.pending=a.next=f)}}function sp(e,i){var a=i.action,o=i.payload,h=e.state;if(i.isTransition){var f=j.T,v={};j.T=v;try{var T=a(h,o),b=j.S;b!==null&&b(v,T),ap(e,i,T)}catch(L){Tf(e,i,L)}finally{j.T=f}}else try{f=a(h,o),ap(e,i,f)}catch(L){Tf(e,i,L)}}function ap(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){op(e,i,o)},function(o){return Tf(e,i,o)}):op(e,i,a)}function op(e,i,a){i.status="fulfilled",i.value=a,lp(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,sp(e,a)))}function Tf(e,i,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,lp(i),i=i.next;while(i!==o)}e.action=null}function lp(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function up(e,i){return i}function cp(e,i){if(xt){var a=Zt.formState;if(a!==null){t:{var o=St;if(xt){if(ae){e:{for(var h=ae,f=ni;h.nodeType!==8;){if(!f){h=null;break e}if(h=zn(h.nextSibling),h===null){h=null;break e}}f=h.data,h=f==="F!"||f==="F"?h:null}if(h){ae=zn(h.nextSibling),o=h.data==="F!";break t}}Ts(o)}o=!1}o&&(i=a[0])}}return a=en(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:up,lastRenderedState:i},a.queue=o,a=Dp.bind(null,St,o),o.dispatch=a,o=vf(!1),f=wf.bind(null,St,!1,o.queue),o=en(),h={state:i,dispatch:null,action:e,pending:null},o.queue=h,a=EA.bind(null,St,h,f,a),h.dispatch=a,o.memoizedState=e,[i,a,!1]}function hp(e){var i=ge();return fp(i,Qt,e)}function fp(e,i,a){if(i=yf(e,i,up)[0],e=Ou(Ui)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=Go(i)}catch(v){throw v===Lo?wu:v}else o=i;i=ge();var h=i.queue,f=h.dispatch;return a!==i.memoizedState&&(St.flags|=2048,va(9,Mu(),AA.bind(null,h,a),null)),[o,f,e]}function AA(e,i){e.action=i}function dp(e){var i=ge(),a=Qt;if(a!==null)return fp(i,a,e);ge(),i=i.memoizedState,a=ge();var o=a.queue.dispatch;return a.memoizedState=e,[i,o,!1]}function va(e,i,a,o){return e={tag:e,create:a,deps:o,inst:i,next:null},i=St.updateQueue,i===null&&(i=gf(),St.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,i.lastEffect=e),e}function Mu(){return{destroy:void 0,resource:void 0}}function mp(){return ge().memoizedState}function Vu(e,i,a,o){var h=en();o=o===void 0?null:o,St.flags|=e,h.memoizedState=va(1|i,Mu(),a,o)}function Fo(e,i,a,o){var h=ge();o=o===void 0?null:o;var f=h.memoizedState.inst;Qt!==null&&o!==null&&cf(o,Qt.memoizedState.deps)?h.memoizedState=va(i,f,a,o):(St.flags|=e,h.memoizedState=va(1|i,f,a,o))}function gp(e,i){Vu(8390656,8,e,i)}function pp(e,i){Fo(2048,8,e,i)}function yp(e,i){return Fo(4,2,e,i)}function _p(e,i){return Fo(4,4,e,i)}function vp(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Tp(e,i,a){a=a!=null?a.concat([e]):null,Fo(4,4,vp.bind(null,i,e),a)}function Ef(){}function Ep(e,i){var a=ge();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&cf(i,o[1])?o[0]:(a.memoizedState=[e,i],e)}function Ap(e,i){var a=ge();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&cf(i,o[1]))return o[0];if(o=e(),bs){ln(!0);try{e()}finally{ln(!1)}}return a.memoizedState=[o,i],o}function Af(e,i,a){return a===void 0||(ur&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=wy(),St.lanes|=e,pr|=e,a)}function Sp(e,i,a,o){return cn(a,i)?a:pa.current!==null?(e=Af(e,a,o),cn(e,i)||(Ce=!0),e):(ur&42)===0?(Ce=!0,e.memoizedState=a):(e=wy(),St.lanes|=e,pr|=e,i)}function bp(e,i,a,o,h){var f=tt.p;tt.p=f!==0&&8>f?f:8;var v=j.T,T={};j.T=T,wf(e,!1,i,a);try{var b=h(),L=j.S;if(L!==null&&L(T,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var H=_A(b,o);Qo(e,i,H,gn(e))}else Qo(e,i,o,gn(e))}catch(Q){Qo(e,i,{then:function(){},status:"rejected",reason:Q},gn())}finally{tt.p=f,j.T=v}}function SA(){}function Sf(e,i,a,o){if(e.tag!==5)throw Error(s(476));var h=wp(e).queue;bp(e,h,i,ot,a===null?SA:function(){return Rp(e),a(o)})}function wp(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:ot},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Rp(e){var i=wp(e).next.queue;Qo(e,i,{},gn())}function bf(){return Ge(cl)}function Ip(){return ge().memoizedState}function Cp(){return ge().memoizedState}function bA(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=gn();e=or(a);var o=lr(i,e,a);o!==null&&(pn(o,i,a),Bo(o,i,a)),i={cache:Wh()},e.payload=i;return}i=i.return}}function wA(e,i,a){var o=gn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Pu(e)?Np(i,a):(a=Hh(e,i,a,o),a!==null&&(pn(a,e,o),Op(a,i,o)))}function Dp(e,i,a){var o=gn();Qo(e,i,a,o)}function Qo(e,i,a,o){var h={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pu(e))Np(i,h);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var v=i.lastRenderedState,T=f(v,a);if(h.hasEagerState=!0,h.eagerState=T,cn(T,v))return yu(e,i,h,0),Zt===null&&pu(),!1}catch{}finally{}if(a=Hh(e,i,h,o),a!==null)return pn(a,e,o),Op(a,i,o),!0}return!1}function wf(e,i,a,o){if(o={lane:2,revertLane:id(),action:o,hasEagerState:!1,eagerState:null,next:null},Pu(e)){if(i)throw Error(s(479))}else i=Hh(e,a,o,2),i!==null&&pn(i,e,2)}function Pu(e){var i=e.alternate;return e===St||i!==null&&i===St}function Np(e,i){ya=Cu=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Op(e,i,a){if((a&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,mo(e,a)}}var ku={readContext:Ge,use:Nu,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useLayoutEffect:ue,useInsertionEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useSyncExternalStore:ue,useId:ue,useHostTransitionStatus:ue,useFormState:ue,useActionState:ue,useOptimistic:ue,useMemoCache:ue,useCacheRefresh:ue},Mp={readContext:Ge,use:Nu,useCallback:function(e,i){return en().memoizedState=[e,i===void 0?null:i],e},useContext:Ge,useEffect:gp,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Vu(4194308,4,vp.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Vu(4194308,4,e,i)},useInsertionEffect:function(e,i){Vu(4,2,e,i)},useMemo:function(e,i){var a=en();i=i===void 0?null:i;var o=e();if(bs){ln(!0);try{e()}finally{ln(!1)}}return a.memoizedState=[o,i],o},useReducer:function(e,i,a){var o=en();if(a!==void 0){var h=a(i);if(bs){ln(!0);try{a(i)}finally{ln(!1)}}}else h=i;return o.memoizedState=o.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},o.queue=e,e=e.dispatch=wA.bind(null,St,e),[o.memoizedState,e]},useRef:function(e){var i=en();return e={current:e},i.memoizedState=e},useState:function(e){e=vf(e);var i=e.queue,a=Dp.bind(null,St,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Ef,useDeferredValue:function(e,i){var a=en();return Af(a,e,i)},useTransition:function(){var e=vf(!1);return e=bp.bind(null,St,e.queue,!0,!1),en().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var o=St,h=en();if(xt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Zt===null)throw Error(s(349));(Vt&124)!==0||Wg(o,i,a)}h.memoizedState=a;var f={value:a,getSnapshot:i};return h.queue=f,gp(ep.bind(null,o,f,e),[e]),o.flags|=2048,va(9,Mu(),tp.bind(null,o,f,a,i),null),a},useId:function(){var e=en(),i=Zt.identifierPrefix;if(xt){var a=Vi,o=Mi;a=(o&~(1<<32-He(o)-1)).toString(32)+a,i="«"+i+"R"+a,a=Du++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=vA++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:bf,useFormState:cp,useActionState:cp,useOptimistic:function(e){var i=en();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=wf.bind(null,St,!0,a),a.dispatch=i,[e,i]},useMemoCache:pf,useCacheRefresh:function(){return en().memoizedState=bA.bind(null,St)}},Vp={readContext:Ge,use:Nu,useCallback:Ep,useContext:Ge,useEffect:pp,useImperativeHandle:Tp,useInsertionEffect:yp,useLayoutEffect:_p,useMemo:Ap,useReducer:Ou,useRef:mp,useState:function(){return Ou(Ui)},useDebugValue:Ef,useDeferredValue:function(e,i){var a=ge();return Sp(a,Qt.memoizedState,e,i)},useTransition:function(){var e=Ou(Ui)[0],i=ge().memoizedState;return[typeof e=="boolean"?e:Go(e),i]},useSyncExternalStore:Jg,useId:Ip,useHostTransitionStatus:bf,useFormState:hp,useActionState:hp,useOptimistic:function(e,i){var a=ge();return rp(a,Qt,e,i)},useMemoCache:pf,useCacheRefresh:Cp},RA={readContext:Ge,use:Nu,useCallback:Ep,useContext:Ge,useEffect:pp,useImperativeHandle:Tp,useInsertionEffect:yp,useLayoutEffect:_p,useMemo:Ap,useReducer:_f,useRef:mp,useState:function(){return _f(Ui)},useDebugValue:Ef,useDeferredValue:function(e,i){var a=ge();return Qt===null?Af(a,e,i):Sp(a,Qt.memoizedState,e,i)},useTransition:function(){var e=_f(Ui)[0],i=ge().memoizedState;return[typeof e=="boolean"?e:Go(e),i]},useSyncExternalStore:Jg,useId:Ip,useHostTransitionStatus:bf,useFormState:dp,useActionState:dp,useOptimistic:function(e,i){var a=ge();return Qt!==null?rp(a,Qt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:pf,useCacheRefresh:Cp},Ta=null,Ko=0;function Uu(e){var i=Ko;return Ko+=1,Ta===null&&(Ta=[]),Gg(Ta,e,i)}function Yo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function xu(e,i){throw i.$$typeof===I?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Pp(e){var i=e._init;return i(e._payload)}function kp(e){function i(P,N){if(e){var x=P.deletions;x===null?(P.deletions=[N],P.flags|=16):x.push(N)}}function a(P,N){if(!e)return null;for(;N!==null;)i(P,N),N=N.sibling;return null}function o(P){for(var N=new Map;P!==null;)P.key!==null?N.set(P.key,P):N.set(P.index,P),P=P.sibling;return N}function h(P,N){return P=Oi(P,N),P.index=0,P.sibling=null,P}function f(P,N,x){return P.index=x,e?(x=P.alternate,x!==null?(x=x.index,x<N?(P.flags|=67108866,N):x):(P.flags|=67108866,N)):(P.flags|=1048576,N)}function v(P){return e&&P.alternate===null&&(P.flags|=67108866),P}function T(P,N,x,F){return N===null||N.tag!==6?(N=Fh(x,P.mode,F),N.return=P,N):(N=h(N,x),N.return=P,N)}function b(P,N,x,F){var rt=x.type;return rt===$?H(P,N,x.props.children,F,x.key):N!==null&&(N.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===S&&Pp(rt)===N.type)?(N=h(N,x.props),Yo(N,x),N.return=P,N):(N=vu(x.type,x.key,x.props,null,P.mode,F),Yo(N,x),N.return=P,N)}function L(P,N,x,F){return N===null||N.tag!==4||N.stateNode.containerInfo!==x.containerInfo||N.stateNode.implementation!==x.implementation?(N=Qh(x,P.mode,F),N.return=P,N):(N=h(N,x.children||[]),N.return=P,N)}function H(P,N,x,F,rt){return N===null||N.tag!==7?(N=ps(x,P.mode,F,rt),N.return=P,N):(N=h(N,x),N.return=P,N)}function Q(P,N,x){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=Fh(""+N,P.mode,x),N.return=P,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case C:return x=vu(N.type,N.key,N.props,null,P.mode,x),Yo(x,N),x.return=P,x;case G:return N=Qh(N,P.mode,x),N.return=P,N;case S:var F=N._init;return N=F(N._payload),Q(P,N,x)}if(re(N)||k(N))return N=ps(N,P.mode,x,null),N.return=P,N;if(typeof N.then=="function")return Q(P,Uu(N),x);if(N.$$typeof===ct)return Q(P,Su(P,N),x);xu(P,N)}return null}function z(P,N,x,F){var rt=N!==null?N.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return rt!==null?null:T(P,N,""+x,F);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case C:return x.key===rt?b(P,N,x,F):null;case G:return x.key===rt?L(P,N,x,F):null;case S:return rt=x._init,x=rt(x._payload),z(P,N,x,F)}if(re(x)||k(x))return rt!==null?null:H(P,N,x,F,null);if(typeof x.then=="function")return z(P,N,Uu(x),F);if(x.$$typeof===ct)return z(P,N,Su(P,x),F);xu(P,x)}return null}function B(P,N,x,F,rt){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return P=P.get(x)||null,T(N,P,""+F,rt);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case C:return P=P.get(F.key===null?x:F.key)||null,b(N,P,F,rt);case G:return P=P.get(F.key===null?x:F.key)||null,L(N,P,F,rt);case S:var wt=F._init;return F=wt(F._payload),B(P,N,x,F,rt)}if(re(F)||k(F))return P=P.get(x)||null,H(N,P,F,rt,null);if(typeof F.then=="function")return B(P,N,x,Uu(F),rt);if(F.$$typeof===ct)return B(P,N,x,Su(N,F),rt);xu(N,F)}return null}function mt(P,N,x,F){for(var rt=null,wt=null,at=N,ft=N=0,Ne=null;at!==null&&ft<x.length;ft++){at.index>ft?(Ne=at,at=null):Ne=at.sibling;var kt=z(P,at,x[ft],F);if(kt===null){at===null&&(at=Ne);break}e&&at&&kt.alternate===null&&i(P,at),N=f(kt,N,ft),wt===null?rt=kt:wt.sibling=kt,wt=kt,at=Ne}if(ft===x.length)return a(P,at),xt&&_s(P,ft),rt;if(at===null){for(;ft<x.length;ft++)at=Q(P,x[ft],F),at!==null&&(N=f(at,N,ft),wt===null?rt=at:wt.sibling=at,wt=at);return xt&&_s(P,ft),rt}for(at=o(at);ft<x.length;ft++)Ne=B(at,P,ft,x[ft],F),Ne!==null&&(e&&Ne.alternate!==null&&at.delete(Ne.key===null?ft:Ne.key),N=f(Ne,N,ft),wt===null?rt=Ne:wt.sibling=Ne,wt=Ne);return e&&at.forEach(function(wr){return i(P,wr)}),xt&&_s(P,ft),rt}function ht(P,N,x,F){if(x==null)throw Error(s(151));for(var rt=null,wt=null,at=N,ft=N=0,Ne=null,kt=x.next();at!==null&&!kt.done;ft++,kt=x.next()){at.index>ft?(Ne=at,at=null):Ne=at.sibling;var wr=z(P,at,kt.value,F);if(wr===null){at===null&&(at=Ne);break}e&&at&&wr.alternate===null&&i(P,at),N=f(wr,N,ft),wt===null?rt=wr:wt.sibling=wr,wt=wr,at=Ne}if(kt.done)return a(P,at),xt&&_s(P,ft),rt;if(at===null){for(;!kt.done;ft++,kt=x.next())kt=Q(P,kt.value,F),kt!==null&&(N=f(kt,N,ft),wt===null?rt=kt:wt.sibling=kt,wt=kt);return xt&&_s(P,ft),rt}for(at=o(at);!kt.done;ft++,kt=x.next())kt=B(at,P,ft,kt.value,F),kt!==null&&(e&&kt.alternate!==null&&at.delete(kt.key===null?ft:kt.key),N=f(kt,N,ft),wt===null?rt=kt:wt.sibling=kt,wt=kt);return e&&at.forEach(function(IS){return i(P,IS)}),xt&&_s(P,ft),rt}function Yt(P,N,x,F){if(typeof x=="object"&&x!==null&&x.type===$&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case C:t:{for(var rt=x.key;N!==null;){if(N.key===rt){if(rt=x.type,rt===$){if(N.tag===7){a(P,N.sibling),F=h(N,x.props.children),F.return=P,P=F;break t}}else if(N.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===S&&Pp(rt)===N.type){a(P,N.sibling),F=h(N,x.props),Yo(F,x),F.return=P,P=F;break t}a(P,N);break}else i(P,N);N=N.sibling}x.type===$?(F=ps(x.props.children,P.mode,F,x.key),F.return=P,P=F):(F=vu(x.type,x.key,x.props,null,P.mode,F),Yo(F,x),F.return=P,P=F)}return v(P);case G:t:{for(rt=x.key;N!==null;){if(N.key===rt)if(N.tag===4&&N.stateNode.containerInfo===x.containerInfo&&N.stateNode.implementation===x.implementation){a(P,N.sibling),F=h(N,x.children||[]),F.return=P,P=F;break t}else{a(P,N);break}else i(P,N);N=N.sibling}F=Qh(x,P.mode,F),F.return=P,P=F}return v(P);case S:return rt=x._init,x=rt(x._payload),Yt(P,N,x,F)}if(re(x))return mt(P,N,x,F);if(k(x)){if(rt=k(x),typeof rt!="function")throw Error(s(150));return x=rt.call(x),ht(P,N,x,F)}if(typeof x.then=="function")return Yt(P,N,Uu(x),F);if(x.$$typeof===ct)return Yt(P,N,Su(P,x),F);xu(P,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,N!==null&&N.tag===6?(a(P,N.sibling),F=h(N,x),F.return=P,P=F):(a(P,N),F=Fh(x,P.mode,F),F.return=P,P=F),v(P)):a(P,N)}return function(P,N,x,F){try{Ko=0;var rt=Yt(P,N,x,F);return Ta=null,rt}catch(at){if(at===Lo||at===wu)throw at;var wt=hn(29,at,null,P.mode);return wt.lanes=F,wt.return=P,wt}finally{}}}var Ea=kp(!0),Up=kp(!1),Dn=Y(null),ii=null;function cr(e){var i=e.alternate;J(Ae,Ae.current&1),J(Dn,e),ii===null&&(i===null||pa.current!==null||i.memoizedState!==null)&&(ii=e)}function xp(e){if(e.tag===22){if(J(Ae,Ae.current),J(Dn,e),ii===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(ii=e)}}else hr()}function hr(){J(Ae,Ae.current),J(Dn,Dn.current)}function xi(e){et(Dn),ii===e&&(ii=null),et(Ae)}var Ae=Y(0);function Lu(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||gd(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Rf(e,i,a,o){i=e.memoizedState,a=a(o,i),a=a==null?i:A({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var If={enqueueSetState:function(e,i,a){e=e._reactInternals;var o=gn(),h=or(o);h.payload=i,a!=null&&(h.callback=a),i=lr(e,h,o),i!==null&&(pn(i,e,o),Bo(i,e,o))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var o=gn(),h=or(o);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=lr(e,h,o),i!==null&&(pn(i,e,o),Bo(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=gn(),o=or(a);o.tag=2,i!=null&&(o.callback=i),i=lr(e,o,a),i!==null&&(pn(i,e,a),Bo(i,e,a))}};function Lp(e,i,a,o,h,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):i.prototype&&i.prototype.isPureReactComponent?!No(a,o)||!No(h,f):!0}function zp(e,i,a,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==e&&If.enqueueReplaceState(i,i.state,null)}function ws(e,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(e=e.defaultProps){a===i&&(a=A({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var zu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Bp(e){zu(e)}function qp(e){console.error(e)}function jp(e){zu(e)}function Bu(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function Hp(e,i,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Cf(e,i,a){return a=or(a),a.tag=3,a.payload={element:null},a.callback=function(){Bu(e,i)},a}function Gp(e){return e=or(e),e.tag=3,e}function Fp(e,i,a,o){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var f=o.value;e.payload=function(){return h(f)},e.callback=function(){Hp(i,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Hp(i,a,o),typeof h!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function IA(e,i,a,o,h){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&ko(i,a,h,!0),a=Dn.current,a!==null){switch(a.tag){case 13:return ii===null?Jf():a.alternate===null&&oe===0&&(oe=3),a.flags&=-257,a.flags|=65536,a.lanes=h,o===nf?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),td(e,o,h)),!1;case 22:return a.flags|=65536,o===nf?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),td(e,o,h)),!1}throw Error(s(435,a.tag))}return td(e,o,h),Jf(),!1}if(xt)return i=Dn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,o!==Xh&&(e=Error(s(422),{cause:o}),Po(wn(e,a)))):(o!==Xh&&(i=Error(s(423),{cause:o}),Po(wn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,o=wn(o,a),h=Cf(e.stateNode,o,h),af(e,h),oe!==4&&(oe=2)),!1;var f=Error(s(520),{cause:o});if(f=wn(f,a),el===null?el=[f]:el.push(f),oe!==4&&(oe=2),i===null)return!0;o=wn(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=Cf(a.stateNode,o,e),af(a,e),!1;case 1:if(i=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(yr===null||!yr.has(f))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Gp(h),Fp(h,e,a,o),af(a,h),!1}a=a.return}while(a!==null);return!1}var Qp=Error(s(461)),Ce=!1;function xe(e,i,a,o){i.child=e===null?Up(i,null,a,o):Ea(i,e.child,a,o)}function Kp(e,i,a,o,h){a=a.render;var f=i.ref;if("ref"in o){var v={};for(var T in o)T!=="ref"&&(v[T]=o[T])}else v=o;return As(i),o=hf(e,i,a,v,f,h),T=ff(),e!==null&&!Ce?(df(e,i,h),Li(e,i,h)):(xt&&T&&Kh(i),i.flags|=1,xe(e,i,o,h),i.child)}function Yp(e,i,a,o,h){if(e===null){var f=a.type;return typeof f=="function"&&!Gh(f)&&f.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=f,Xp(e,i,f,o,h)):(e=vu(a.type,null,o,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(f=e.child,!Uf(e,h)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:No,a(v,o)&&e.ref===i.ref)return Li(e,i,h)}return i.flags|=1,e=Oi(f,o),e.ref=i.ref,e.return=i,i.child=e}function Xp(e,i,a,o,h){if(e!==null){var f=e.memoizedProps;if(No(f,o)&&e.ref===i.ref)if(Ce=!1,i.pendingProps=o=f,Uf(e,h))(e.flags&131072)!==0&&(Ce=!0);else return i.lanes=e.lanes,Li(e,i,h)}return Df(e,i,a,o,h)}function $p(e,i,a){var o=i.pendingProps,h=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(h=i.child=e.child,f=0;h!==null;)f=f|h.lanes|h.childLanes,h=h.sibling;i.childLanes=f&~o}else i.childLanes=0,i.child=null;return Zp(e,i,o,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&bu(i,f!==null?f.cachePool:null),f!==null?Xg(i,f):lf(),xp(i);else return i.lanes=i.childLanes=536870912,Zp(e,i,f!==null?f.baseLanes|a:a,a)}else f!==null?(bu(i,f.cachePool),Xg(i,f),hr(),i.memoizedState=null):(e!==null&&bu(i,null),lf(),hr());return xe(e,i,h,a),i.child}function Zp(e,i,a,o){var h=ef();return h=h===null?null:{parent:Ee._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&bu(i,null),lf(),xp(i),e!==null&&ko(e,i,o,!0),null}function qu(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Df(e,i,a,o,h){return As(i),a=hf(e,i,a,o,void 0,h),o=ff(),e!==null&&!Ce?(df(e,i,h),Li(e,i,h)):(xt&&o&&Kh(i),i.flags|=1,xe(e,i,a,h),i.child)}function Jp(e,i,a,o,h,f){return As(i),i.updateQueue=null,a=Zg(i,o,a,h),$g(e),o=ff(),e!==null&&!Ce?(df(e,i,f),Li(e,i,f)):(xt&&o&&Kh(i),i.flags|=1,xe(e,i,a,f),i.child)}function Wp(e,i,a,o,h){if(As(i),i.stateNode===null){var f=ha,v=a.contextType;typeof v=="object"&&v!==null&&(f=Ge(v)),f=new a(o,f),i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=If,i.stateNode=f,f._reactInternals=i,f=i.stateNode,f.props=o,f.state=i.memoizedState,f.refs={},rf(i),v=a.contextType,f.context=typeof v=="object"&&v!==null?Ge(v):ha,f.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Rf(i,a,v,o),f.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&If.enqueueReplaceState(f,f.state,null),jo(i,o,f,h),qo(),f.state=i.memoizedState),typeof f.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){f=i.stateNode;var T=i.memoizedProps,b=ws(a,T);f.props=b;var L=f.context,H=a.contextType;v=ha,typeof H=="object"&&H!==null&&(v=Ge(H));var Q=a.getDerivedStateFromProps;H=typeof Q=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,H||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||L!==v)&&zp(i,f,o,v),ar=!1;var z=i.memoizedState;f.state=z,jo(i,o,f,h),qo(),L=i.memoizedState,T||z!==L||ar?(typeof Q=="function"&&(Rf(i,a,Q,o),L=i.memoizedState),(b=ar||Lp(i,a,b,o,z,L,v))?(H||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(i.flags|=4194308)):(typeof f.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=L),f.props=o,f.state=L,f.context=v,o=b):(typeof f.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{f=i.stateNode,sf(e,i),v=i.memoizedProps,H=ws(a,v),f.props=H,Q=i.pendingProps,z=f.context,L=a.contextType,b=ha,typeof L=="object"&&L!==null&&(b=Ge(L)),T=a.getDerivedStateFromProps,(L=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==Q||z!==b)&&zp(i,f,o,b),ar=!1,z=i.memoizedState,f.state=z,jo(i,o,f,h),qo();var B=i.memoizedState;v!==Q||z!==B||ar||e!==null&&e.dependencies!==null&&Au(e.dependencies)?(typeof T=="function"&&(Rf(i,a,T,o),B=i.memoizedState),(H=ar||Lp(i,a,H,o,z,B,b)||e!==null&&e.dependencies!==null&&Au(e.dependencies))?(L||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,B,b),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,B,b)),typeof f.componentDidUpdate=="function"&&(i.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=B),f.props=o,f.state=B,f.context=b,o=H):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),o=!1)}return f=o,qu(e,i),o=(i.flags&128)!==0,f||o?(f=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),i.flags|=1,e!==null&&o?(i.child=Ea(i,e.child,null,h),i.child=Ea(i,null,a,h)):xe(e,i,a,h),i.memoizedState=f.state,e=i.child):e=Li(e,i,h),e}function ty(e,i,a,o){return Vo(),i.flags|=256,xe(e,i,a,o),i.child}var Nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Of(e){return{baseLanes:e,cachePool:qg()}}function Mf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Nn),e}function ey(e,i,a){var o=i.pendingProps,h=!1,f=(i.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(Ae.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(xt){if(h?cr(i):hr(),xt){var T=ae,b;if(b=T){t:{for(b=T,T=ni;b.nodeType!==8;){if(!T){T=null;break t}if(b=zn(b.nextSibling),b===null){T=null;break t}}T=b}T!==null?(i.memoizedState={dehydrated:T,treeContext:ys!==null?{id:Mi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},b=hn(18,null,null,0),b.stateNode=T,b.return=i,i.child=b,tn=i,ae=null,b=!0):b=!1}b||Ts(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return gd(T)?i.lanes=32:i.lanes=536870912,null;xi(i)}return T=o.children,o=o.fallback,h?(hr(),h=i.mode,T=ju({mode:"hidden",children:T},h),o=ps(o,h,a,null),T.return=i,o.return=i,T.sibling=o,i.child=T,h=i.child,h.memoizedState=Of(a),h.childLanes=Mf(e,v,a),i.memoizedState=Nf,o):(cr(i),Vf(i,T))}if(b=e.memoizedState,b!==null&&(T=b.dehydrated,T!==null)){if(f)i.flags&256?(cr(i),i.flags&=-257,i=Pf(e,i,a)):i.memoizedState!==null?(hr(),i.child=e.child,i.flags|=128,i=null):(hr(),h=o.fallback,T=i.mode,o=ju({mode:"visible",children:o.children},T),h=ps(h,T,a,null),h.flags|=2,o.return=i,h.return=i,o.sibling=h,i.child=o,Ea(i,e.child,null,a),o=i.child,o.memoizedState=Of(a),o.childLanes=Mf(e,v,a),i.memoizedState=Nf,i=h);else if(cr(i),gd(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var L=v.dgst;v=L,o=Error(s(419)),o.stack="",o.digest=v,Po({value:o,source:null,stack:null}),i=Pf(e,i,a)}else if(Ce||ko(e,i,a,!1),v=(a&e.childLanes)!==0,Ce||v){if(v=Zt,v!==null&&(o=a&-a,o=(o&42)!==0?1:Ji(o),o=(o&(v.suspendedLanes|a))!==0?0:o,o!==0&&o!==b.retryLane))throw b.retryLane=o,ca(e,o),pn(v,e,o),Qp;T.data==="$?"||Jf(),i=Pf(e,i,a)}else T.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=b.treeContext,ae=zn(T.nextSibling),tn=i,xt=!0,vs=null,ni=!1,e!==null&&(In[Cn++]=Mi,In[Cn++]=Vi,In[Cn++]=ys,Mi=e.id,Vi=e.overflow,ys=i),i=Vf(i,o.children),i.flags|=4096);return i}return h?(hr(),h=o.fallback,T=i.mode,b=e.child,L=b.sibling,o=Oi(b,{mode:"hidden",children:o.children}),o.subtreeFlags=b.subtreeFlags&65011712,L!==null?h=Oi(L,h):(h=ps(h,T,a,null),h.flags|=2),h.return=i,o.return=i,o.sibling=h,i.child=o,o=h,h=i.child,T=e.child.memoizedState,T===null?T=Of(a):(b=T.cachePool,b!==null?(L=Ee._currentValue,b=b.parent!==L?{parent:L,pool:L}:b):b=qg(),T={baseLanes:T.baseLanes|a,cachePool:b}),h.memoizedState=T,h.childLanes=Mf(e,v,a),i.memoizedState=Nf,o):(cr(i),a=e.child,e=a.sibling,a=Oi(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function Vf(e,i){return i=ju({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function ju(e,i){return e=hn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Pf(e,i,a){return Ea(i,e.child,null,a),e=Vf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function ny(e,i,a){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),Zh(e.return,i,a)}function kf(e,i,a,o,h){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:h}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=h)}function iy(e,i,a){var o=i.pendingProps,h=o.revealOrder,f=o.tail;if(xe(e,i,o.children,a),o=Ae.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ny(e,a,i);else if(e.tag===19)ny(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(J(Ae,o),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&Lu(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),kf(i,!1,h,a,f);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Lu(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}kf(i,!0,a,null,f);break;case"together":kf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Li(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),pr|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(ko(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Oi(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Oi(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Uf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Au(e)))}function CA(e,i,a){switch(i.tag){case 3:$t(i,i.stateNode.containerInfo),sr(i,Ee,e.memoizedState.cache),Vo();break;case 27:case 5:Zi(i);break;case 4:$t(i,i.stateNode.containerInfo);break;case 10:sr(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(cr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?ey(e,i,a):(cr(i),e=Li(e,i,a),e!==null?e.sibling:null);cr(i);break;case 19:var h=(e.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(ko(e,i,a,!1),o=(a&i.childLanes)!==0),h){if(o)return iy(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),J(Ae,Ae.current),o)break;return null;case 22:case 23:return i.lanes=0,$p(e,i,a);case 24:sr(i,Ee,e.memoizedState.cache)}return Li(e,i,a)}function ry(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Ce=!0;else{if(!Uf(e,a)&&(i.flags&128)===0)return Ce=!1,CA(e,i,a);Ce=(e.flags&131072)!==0}else Ce=!1,xt&&(i.flags&1048576)!==0&&Pg(i,Eu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var o=i.elementType,h=o._init;if(o=h(o._payload),i.type=o,typeof o=="function")Gh(o)?(e=ws(o,e),i.tag=1,i=Wp(null,i,o,e,a)):(i.tag=0,i=Df(null,i,o,e,a));else{if(o!=null){if(h=o.$$typeof,h===qt){i.tag=11,i=Kp(null,i,o,e,a);break t}else if(h===V){i.tag=14,i=Yp(null,i,o,e,a);break t}}throw i=Pe(o)||o,Error(s(306,i,""))}}return i;case 0:return Df(e,i,i.type,i.pendingProps,a);case 1:return o=i.type,h=ws(o,i.pendingProps),Wp(e,i,o,h,a);case 3:t:{if($t(i,i.stateNode.containerInfo),e===null)throw Error(s(387));o=i.pendingProps;var f=i.memoizedState;h=f.element,sf(e,i),jo(i,o,null,a);var v=i.memoizedState;if(o=v.cache,sr(i,Ee,o),o!==f.cache&&Jh(i,[Ee],a,!0),qo(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){i=ty(e,i,o,a);break t}else if(o!==h){h=wn(Error(s(424)),i),Po(h),i=ty(e,i,o,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ae=zn(e.firstChild),tn=i,xt=!0,vs=null,ni=!0,a=Up(i,null,o,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Vo(),o===h){i=Li(e,i,a);break t}xe(e,i,o,a)}i=i.child}return i;case 26:return qu(e,i),e===null?(a=l_(i.type,null,i.pendingProps,null))?i.memoizedState=a:xt||(a=i.type,e=i.pendingProps,o=nc(yt.current).createElement(a),o[_e]=i,o[fe]=e,ze(o,a,e),le(o),i.stateNode=o):i.memoizedState=l_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Zi(i),e===null&&xt&&(o=i.stateNode=s_(i.type,i.pendingProps,yt.current),tn=i,ni=!0,h=ae,Tr(i.type)?(pd=h,ae=zn(o.firstChild)):ae=h),xe(e,i,i.pendingProps.children,a),qu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&xt&&((h=o=ae)&&(o=nS(o,i.type,i.pendingProps,ni),o!==null?(i.stateNode=o,tn=i,ae=zn(o.firstChild),ni=!1,h=!0):h=!1),h||Ts(i)),Zi(i),h=i.type,f=i.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,fd(h,f)?o=null:v!==null&&fd(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=hf(e,i,TA,null,null,a),cl._currentValue=h),qu(e,i),xe(e,i,o,a),i.child;case 6:return e===null&&xt&&((e=a=ae)&&(a=iS(a,i.pendingProps,ni),a!==null?(i.stateNode=a,tn=i,ae=null,e=!0):e=!1),e||Ts(i)),null;case 13:return ey(e,i,a);case 4:return $t(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=Ea(i,null,o,a):xe(e,i,o,a),i.child;case 11:return Kp(e,i,i.type,i.pendingProps,a);case 7:return xe(e,i,i.pendingProps,a),i.child;case 8:return xe(e,i,i.pendingProps.children,a),i.child;case 12:return xe(e,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,sr(i,i.type,o.value),xe(e,i,o.children,a),i.child;case 9:return h=i.type._context,o=i.pendingProps.children,As(i),h=Ge(h),o=o(h),i.flags|=1,xe(e,i,o,a),i.child;case 14:return Yp(e,i,i.type,i.pendingProps,a);case 15:return Xp(e,i,i.type,i.pendingProps,a);case 19:return iy(e,i,a);case 31:return o=i.pendingProps,a=i.mode,o={mode:o.mode,children:o.children},e===null?(a=ju(o,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Oi(e.child,o),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return $p(e,i,a);case 24:return As(i),o=Ge(Ee),e===null?(h=ef(),h===null&&(h=Zt,f=Wh(),h.pooledCache=f,f.refCount++,f!==null&&(h.pooledCacheLanes|=a),h=f),i.memoizedState={parent:o,cache:h},rf(i),sr(i,Ee,h)):((e.lanes&a)!==0&&(sf(e,i),jo(i,null,null,a),qo()),h=e.memoizedState,f=i.memoizedState,h.parent!==o?(h={parent:o,cache:o},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),sr(i,Ee,o)):(o=f.cache,sr(i,Ee,o),o!==h.cache&&Jh(i,[Ee],a,!0))),xe(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function zi(e){e.flags|=4}function sy(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!d_(i)){if(i=Dn.current,i!==null&&((Vt&4194048)===Vt?ii!==null:(Vt&62914560)!==Vt&&(Vt&536870912)===0||i!==ii))throw zo=nf,jg;e.flags|=8192}}function Hu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?ho():536870912,e.lanes|=i,wa|=i)}function Xo(e,i){if(!xt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ne(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags&65011712,o|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags,o|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=o,e.childLanes=a,i}function DA(e,i,a){var o=i.pendingProps;switch(Yh(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(i),null;case 1:return ne(i),null;case 3:return a=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),ki(Ee),Gn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Mo(i)?zi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,xg())),ne(i),null;case 26:return a=i.memoizedState,e===null?(zi(i),a!==null?(ne(i),sy(i,a)):(ne(i),i.flags&=-16777217)):a?a!==e.memoizedState?(zi(i),ne(i),sy(i,a)):(ne(i),i.flags&=-16777217):(e.memoizedProps!==o&&zi(i),ne(i),i.flags&=-16777217),null;case 27:_i(i),a=yt.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==o&&zi(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return ne(i),null}e=lt.current,Mo(i)?kg(i):(e=s_(h,o,a),i.stateNode=e,zi(i))}return ne(i),null;case 5:if(_i(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&zi(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return ne(i),null}if(e=lt.current,Mo(i))kg(i);else{switch(h=nc(yt.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?h.createElement("select",{is:o.is}):h.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?h.createElement(a,{is:o.is}):h.createElement(a)}}e[_e]=i,e[fe]=o;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(ze(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&zi(i)}}return ne(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&zi(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(e=yt.current,Mo(i)){if(e=i.stateNode,a=i.memoizedProps,o=null,h=tn,h!==null)switch(h.tag){case 27:case 5:o=h.memoizedProps}e[_e]=i,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Jy(e.nodeValue,a)),e||Ts(i)}else e=nc(e).createTextNode(o),e[_e]=i,i.stateNode=e}return ne(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Mo(i),o!==null&&o.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[_e]=i}else Vo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ne(i),h=!1}else h=xg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(xi(i),i):(xi(i),null)}if(xi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=i.child,h=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(h=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==h&&(o.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),Hu(i,i.updateQueue),ne(i),null;case 4:return Gn(),e===null&&od(i.stateNode.containerInfo),ne(i),null;case 10:return ki(i.type),ne(i),null;case 19:if(et(Ae),h=i.memoizedState,h===null)return ne(i),null;if(o=(i.flags&128)!==0,f=h.rendering,f===null)if(o)Xo(h,!1);else{if(oe!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(f=Lu(e),f!==null){for(i.flags|=128,Xo(h,!1),e=f.updateQueue,i.updateQueue=e,Hu(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Vg(a,e),a=a.sibling;return J(Ae,Ae.current&1|2),i.child}e=e.sibling}h.tail!==null&&vn()>Qu&&(i.flags|=128,o=!0,Xo(h,!1),i.lanes=4194304)}else{if(!o)if(e=Lu(f),e!==null){if(i.flags|=128,o=!0,e=e.updateQueue,i.updateQueue=e,Hu(i,e),Xo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!f.alternate&&!xt)return ne(i),null}else 2*vn()-h.renderingStartTime>Qu&&a!==536870912&&(i.flags|=128,o=!0,Xo(h,!1),i.lanes=4194304);h.isBackwards?(f.sibling=i.child,i.child=f):(e=h.last,e!==null?e.sibling=f:i.child=f,h.last=f)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=vn(),i.sibling=null,e=Ae.current,J(Ae,o?e&1|2:e&1),i):(ne(i),null);case 22:case 23:return xi(i),uf(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(ne(i),i.subtreeFlags&6&&(i.flags|=8192)):ne(i),a=i.updateQueue,a!==null&&Hu(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),e!==null&&et(Ss),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ki(Ee),ne(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function NA(e,i){switch(Yh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ki(Ee),Gn(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return _i(i),null;case 13:if(xi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Vo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return et(Ae),null;case 4:return Gn(),null;case 10:return ki(i.type),null;case 22:case 23:return xi(i),uf(),e!==null&&et(Ss),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ki(Ee),null;case 25:return null;default:return null}}function ay(e,i){switch(Yh(i),i.tag){case 3:ki(Ee),Gn();break;case 26:case 27:case 5:_i(i);break;case 4:Gn();break;case 13:xi(i);break;case 19:et(Ae);break;case 10:ki(i.type);break;case 22:case 23:xi(i),uf(),e!==null&&et(Ss);break;case 24:ki(Ee)}}function $o(e,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var h=o.next;a=h;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==h)}}catch(T){Xt(i,i.return,T)}}function fr(e,i,a){try{var o=i.updateQueue,h=o!==null?o.lastEffect:null;if(h!==null){var f=h.next;o=f;do{if((o.tag&e)===e){var v=o.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=i;var b=a,L=T;try{L()}catch(H){Xt(h,b,H)}}}o=o.next}while(o!==f)}}catch(H){Xt(i,i.return,H)}}function oy(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Yg(i,a)}catch(o){Xt(e,e.return,o)}}}function ly(e,i,a){a.props=ws(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Xt(e,i,o)}}function Zo(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(h){Xt(e,i,h)}}function ri(e,i){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(h){Xt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Xt(e,i,h)}else a.current=null}function uy(e){var i=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(h){Xt(e,e.return,h)}}function xf(e,i,a){try{var o=e.stateNode;ZA(o,e.type,a,i),o[fe]=i}catch(h){Xt(e,e.return,h)}}function cy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Tr(e.type)||e.tag===4}function Lf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||cy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Tr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zf(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ec));else if(o!==4&&(o===27&&Tr(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(zf(e,i,a),e=e.sibling;e!==null;)zf(e,i,a),e=e.sibling}function Gu(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(o!==4&&(o===27&&Tr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Gu(e,i,a),e=e.sibling;e!==null;)Gu(e,i,a),e=e.sibling}function hy(e){var i=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);ze(i,o,a),i[_e]=e,i[fe]=a}catch(f){Xt(e,e.return,f)}}var Bi=!1,ce=!1,Bf=!1,fy=typeof WeakSet=="function"?WeakSet:Set,De=null;function OA(e,i){if(e=e.containerInfo,cd=lc,e=Sg(e),xh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var h=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,T=-1,b=-1,L=0,H=0,Q=e,z=null;e:for(;;){for(var B;Q!==a||h!==0&&Q.nodeType!==3||(T=v+h),Q!==f||o!==0&&Q.nodeType!==3||(b=v+o),Q.nodeType===3&&(v+=Q.nodeValue.length),(B=Q.firstChild)!==null;)z=Q,Q=B;for(;;){if(Q===e)break e;if(z===a&&++L===h&&(T=v),z===f&&++H===o&&(b=v),(B=Q.nextSibling)!==null)break;Q=z,z=Q.parentNode}Q=B}a=T===-1||b===-1?null:{start:T,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(hd={focusedElem:e,selectionRange:a},lc=!1,De=i;De!==null;)if(i=De,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,De=e;else for(;De!==null;){switch(i=De,f=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=i,h=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var mt=ws(a.type,h,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(mt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ht){Xt(a,a.return,ht)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)md(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":md(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,De=e;break}De=i.return}}function dy(e,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:dr(e,a),o&4&&$o(5,a);break;case 1:if(dr(e,a),o&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){Xt(a,a.return,v)}else{var h=ws(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Xt(a,a.return,v)}}o&64&&oy(a),o&512&&Zo(a,a.return);break;case 3:if(dr(e,a),o&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Yg(e,i)}catch(v){Xt(a,a.return,v)}}break;case 27:i===null&&o&4&&hy(a);case 26:case 5:dr(e,a),i===null&&o&4&&uy(a),o&512&&Zo(a,a.return);break;case 12:dr(e,a);break;case 13:dr(e,a),o&4&&py(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=BA.bind(null,a),rS(e,a))));break;case 22:if(o=a.memoizedState!==null||Bi,!o){i=i!==null&&i.memoizedState!==null||ce,h=Bi;var f=ce;Bi=o,(ce=i)&&!f?mr(e,a,(a.subtreeFlags&8772)!==0):dr(e,a),Bi=h,ce=f}break;case 30:break;default:dr(e,a)}}function my(e){var i=e.alternate;i!==null&&(e.alternate=null,my(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&er(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ee=null,nn=!1;function qi(e,i,a){for(a=a.child;a!==null;)gy(e,i,a),a=a.sibling}function gy(e,i,a){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(se,a)}catch{}switch(a.tag){case 26:ce||ri(a,i),qi(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ce||ri(a,i);var o=ee,h=nn;Tr(a.type)&&(ee=a.stateNode,nn=!1),qi(e,i,a),al(a.stateNode),ee=o,nn=h;break;case 5:ce||ri(a,i);case 6:if(o=ee,h=nn,ee=null,qi(e,i,a),ee=o,nn=h,ee!==null)if(nn)try{(ee.nodeType===9?ee.body:ee.nodeName==="HTML"?ee.ownerDocument.body:ee).removeChild(a.stateNode)}catch(f){Xt(a,i,f)}else try{ee.removeChild(a.stateNode)}catch(f){Xt(a,i,f)}break;case 18:ee!==null&&(nn?(e=ee,i_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ml(e)):i_(ee,a.stateNode));break;case 4:o=ee,h=nn,ee=a.stateNode.containerInfo,nn=!0,qi(e,i,a),ee=o,nn=h;break;case 0:case 11:case 14:case 15:ce||fr(2,a,i),ce||fr(4,a,i),qi(e,i,a);break;case 1:ce||(ri(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&ly(a,i,o)),qi(e,i,a);break;case 21:qi(e,i,a);break;case 22:ce=(o=ce)||a.memoizedState!==null,qi(e,i,a),ce=o;break;default:qi(e,i,a)}}function py(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ml(e)}catch(a){Xt(i,i.return,a)}}function MA(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new fy),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new fy),i;default:throw Error(s(435,e.tag))}}function qf(e,i){var a=MA(e);i.forEach(function(o){var h=qA.bind(null,e,o);a.has(o)||(a.add(o),o.then(h,h))})}function fn(e,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var h=a[o],f=e,v=i,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(Tr(T.type)){ee=T.stateNode,nn=!1;break t}break;case 5:ee=T.stateNode,nn=!1;break t;case 3:case 4:ee=T.stateNode.containerInfo,nn=!0;break t}T=T.return}if(ee===null)throw Error(s(160));gy(f,v,h),ee=null,nn=!1,f=h.alternate,f!==null&&(f.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)yy(i,e),i=i.sibling}var Ln=null;function yy(e,i){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:fn(i,e),dn(e),o&4&&(fr(3,e,e.return),$o(3,e),fr(5,e,e.return));break;case 1:fn(i,e),dn(e),o&512&&(ce||a===null||ri(a,a.return)),o&64&&Bi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var h=Ln;if(fn(i,e),dn(e),o&512&&(ce||a===null||ri(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(o){case"title":f=h.getElementsByTagName("title")[0],(!f||f[ts]||f[_e]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=h.createElement(o),h.head.insertBefore(f,h.querySelector("head > title"))),ze(f,o,a),f[_e]=e,le(f),o=f;break t;case"link":var v=h_("link","href",h).get(o+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}f=h.createElement(o),ze(f,o,a),h.head.appendChild(f);break;case"meta":if(v=h_("meta","content",h).get(o+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}f=h.createElement(o),ze(f,o,a),h.head.appendChild(f);break;default:throw Error(s(468,o))}f[_e]=e,le(f),o=f}e.stateNode=o}else f_(h,e.type,e.stateNode);else e.stateNode=c_(h,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?f_(h,e.type,e.stateNode):c_(h,o,e.memoizedProps)):o===null&&e.stateNode!==null&&xf(e,e.memoizedProps,a.memoizedProps)}break;case 27:fn(i,e),dn(e),o&512&&(ce||a===null||ri(a,a.return)),a!==null&&o&4&&xf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(fn(i,e),dn(e),o&512&&(ce||a===null||ri(a,a.return)),e.flags&32){h=e.stateNode;try{En(h,"")}catch(B){Xt(e,e.return,B)}}o&4&&e.stateNode!=null&&(h=e.memoizedProps,xf(e,h,a!==null?a.memoizedProps:h)),o&1024&&(Bf=!0);break;case 6:if(fn(i,e),dn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(B){Xt(e,e.return,B)}}break;case 3:if(sc=null,h=Ln,Ln=ic(i.containerInfo),fn(i,e),Ln=h,dn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ml(i.containerInfo)}catch(B){Xt(e,e.return,B)}Bf&&(Bf=!1,_y(e));break;case 4:o=Ln,Ln=ic(e.stateNode.containerInfo),fn(i,e),dn(e),Ln=o;break;case 12:fn(i,e),dn(e);break;case 13:fn(i,e),dn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Kf=vn()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,qf(e,o)));break;case 22:h=e.memoizedState!==null;var b=a!==null&&a.memoizedState!==null,L=Bi,H=ce;if(Bi=L||h,ce=H||b,fn(i,e),ce=H,Bi=L,dn(e),o&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||b||Bi||ce||Rs(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){b=a=i;try{if(f=b.stateNode,h)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=b.stateNode;var Q=b.memoizedProps.style,z=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;T.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(B){Xt(b,b.return,B)}}}else if(i.tag===6){if(a===null){b=i;try{b.stateNode.nodeValue=h?"":b.memoizedProps}catch(B){Xt(b,b.return,B)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,qf(e,a))));break;case 19:fn(i,e),dn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,qf(e,o)));break;case 30:break;case 21:break;default:fn(i,e),dn(e)}}function dn(e){var i=e.flags;if(i&2){try{for(var a,o=e.return;o!==null;){if(cy(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,f=Lf(e);Gu(e,f,h);break;case 5:var v=a.stateNode;a.flags&32&&(En(v,""),a.flags&=-33);var T=Lf(e);Gu(e,T,v);break;case 3:case 4:var b=a.stateNode.containerInfo,L=Lf(e);zf(e,L,b);break;default:throw Error(s(161))}}catch(H){Xt(e,e.return,H)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function _y(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;_y(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function dr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)dy(e,i.alternate,i),i=i.sibling}function Rs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:fr(4,i,i.return),Rs(i);break;case 1:ri(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&ly(i,i.return,a),Rs(i);break;case 27:al(i.stateNode);case 26:case 5:ri(i,i.return),Rs(i);break;case 22:i.memoizedState===null&&Rs(i);break;case 30:Rs(i);break;default:Rs(i)}e=e.sibling}}function mr(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,h=e,f=i,v=f.flags;switch(f.tag){case 0:case 11:case 15:mr(h,f,a),$o(4,f);break;case 1:if(mr(h,f,a),o=f,h=o.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(L){Xt(o,o.return,L)}if(o=f,h=o.updateQueue,h!==null){var T=o.stateNode;try{var b=h.shared.hiddenCallbacks;if(b!==null)for(h.shared.hiddenCallbacks=null,h=0;h<b.length;h++)Kg(b[h],T)}catch(L){Xt(o,o.return,L)}}a&&v&64&&oy(f),Zo(f,f.return);break;case 27:hy(f);case 26:case 5:mr(h,f,a),a&&o===null&&v&4&&uy(f),Zo(f,f.return);break;case 12:mr(h,f,a);break;case 13:mr(h,f,a),a&&v&4&&py(h,f);break;case 22:f.memoizedState===null&&mr(h,f,a),Zo(f,f.return);break;case 30:break;default:mr(h,f,a)}i=i.sibling}}function jf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Uo(a))}function Hf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Uo(e))}function si(e,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)vy(e,i,a,o),i=i.sibling}function vy(e,i,a,o){var h=i.flags;switch(i.tag){case 0:case 11:case 15:si(e,i,a,o),h&2048&&$o(9,i);break;case 1:si(e,i,a,o);break;case 3:si(e,i,a,o),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Uo(e)));break;case 12:if(h&2048){si(e,i,a,o),e=i.stateNode;try{var f=i.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){Xt(i,i.return,b)}}else si(e,i,a,o);break;case 13:si(e,i,a,o);break;case 23:break;case 22:f=i.stateNode,v=i.alternate,i.memoizedState!==null?f._visibility&2?si(e,i,a,o):Jo(e,i):f._visibility&2?si(e,i,a,o):(f._visibility|=2,Aa(e,i,a,o,(i.subtreeFlags&10256)!==0)),h&2048&&jf(v,i);break;case 24:si(e,i,a,o),h&2048&&Hf(i.alternate,i);break;default:si(e,i,a,o)}}function Aa(e,i,a,o,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var f=e,v=i,T=a,b=o,L=v.flags;switch(v.tag){case 0:case 11:case 15:Aa(f,v,T,b,h),$o(8,v);break;case 23:break;case 22:var H=v.stateNode;v.memoizedState!==null?H._visibility&2?Aa(f,v,T,b,h):Jo(f,v):(H._visibility|=2,Aa(f,v,T,b,h)),h&&L&2048&&jf(v.alternate,v);break;case 24:Aa(f,v,T,b,h),h&&L&2048&&Hf(v.alternate,v);break;default:Aa(f,v,T,b,h)}i=i.sibling}}function Jo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,o=i,h=o.flags;switch(o.tag){case 22:Jo(a,o),h&2048&&jf(o.alternate,o);break;case 24:Jo(a,o),h&2048&&Hf(o.alternate,o);break;default:Jo(a,o)}i=i.sibling}}var Wo=8192;function Sa(e){if(e.subtreeFlags&Wo)for(e=e.child;e!==null;)Ty(e),e=e.sibling}function Ty(e){switch(e.tag){case 26:Sa(e),e.flags&Wo&&e.memoizedState!==null&&yS(Ln,e.memoizedState,e.memoizedProps);break;case 5:Sa(e);break;case 3:case 4:var i=Ln;Ln=ic(e.stateNode.containerInfo),Sa(e),Ln=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Wo,Wo=16777216,Sa(e),Wo=i):Sa(e));break;default:Sa(e)}}function Ey(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function tl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];De=o,Sy(o,e)}Ey(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ay(e),e=e.sibling}function Ay(e){switch(e.tag){case 0:case 11:case 15:tl(e),e.flags&2048&&fr(9,e,e.return);break;case 3:tl(e);break;case 12:tl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Fu(e)):tl(e);break;default:tl(e)}}function Fu(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];De=o,Sy(o,e)}Ey(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:fr(8,i,i.return),Fu(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Fu(i));break;default:Fu(i)}e=e.sibling}}function Sy(e,i){for(;De!==null;){var a=De;switch(a.tag){case 0:case 11:case 15:fr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Uo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,De=o;else t:for(a=e;De!==null;){o=De;var h=o.sibling,f=o.return;if(my(o),o===a){De=null;break t}if(h!==null){h.return=f,De=h;break t}De=f}}}var VA={getCacheForType:function(e){var i=Ge(Ee),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},PA=typeof WeakMap=="function"?WeakMap:Map,Ht=0,Zt=null,Rt=null,Vt=0,Gt=0,mn=null,gr=!1,ba=!1,Gf=!1,ji=0,oe=0,pr=0,Is=0,Ff=0,Nn=0,wa=0,el=null,rn=null,Qf=!1,Kf=0,Qu=1/0,Ku=null,yr=null,Le=0,_r=null,Ra=null,Ia=0,Yf=0,Xf=null,by=null,nl=0,$f=null;function gn(){if((Ht&2)!==0&&Vt!==0)return Vt&-Vt;if(j.T!==null){var e=ma;return e!==0?e:id()}return Wi()}function wy(){Nn===0&&(Nn=(Vt&536870912)===0||xt?co():536870912);var e=Dn.current;return e!==null&&(e.flags|=32),Nn}function pn(e,i,a){(e===Zt&&(Gt===2||Gt===9)||e.cancelPendingCommit!==null)&&(Ca(e,0),vr(e,Vt,Nn,!1)),Ti(e,a),((Ht&2)===0||e!==Zt)&&(e===Zt&&((Ht&2)===0&&(Is|=a),oe===4&&vr(e,Vt,Nn,!1)),ai(e))}function Ry(e,i,a){if((Ht&6)!==0)throw Error(s(327));var o=!a&&(i&124)===0&&(i&e.expiredLanes)===0||Wr(e,i),h=o?xA(e,i):Wf(e,i,!0),f=o;do{if(h===0){ba&&!o&&vr(e,i,0,!1);break}else{if(a=e.current.alternate,f&&!kA(a)){h=Wf(e,i,!1),f=!1;continue}if(h===2){if(f=i,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var T=e;h=el;var b=T.current.memoizedState.isDehydrated;if(b&&(Ca(T,v).flags|=256),v=Wf(T,v,!1),v!==2){if(Gf&&!b){T.errorRecoveryDisabledLanes|=f,Is|=f,h=4;break t}f=rn,rn=h,f!==null&&(rn===null?rn=f:rn.push.apply(rn,f))}h=v}if(f=!1,h!==2)continue}}if(h===1){Ca(e,0),vr(e,i,0,!0);break}t:{switch(o=e,f=h,f){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:vr(o,i,Nn,!gr);break t;case 2:rn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=Kf+300-vn(),10<h)){if(vr(o,i,Nn,!gr),Fs(o,0,!0)!==0)break t;o.timeoutHandle=e_(Iy.bind(null,o,a,rn,Ku,Qf,i,Nn,Is,wa,gr,f,2,-0,0),h);break t}Iy(o,a,rn,Ku,Qf,i,Nn,Is,wa,gr,f,0,-0,0)}}break}while(!0);ai(e)}function Iy(e,i,a,o,h,f,v,T,b,L,H,Q,z,B){if(e.timeoutHandle=-1,Q=i.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(ul={stylesheets:null,count:0,unsuspend:pS},Ty(i),Q=_S(),Q!==null)){e.cancelPendingCommit=Q(Py.bind(null,e,i,f,a,o,h,v,T,b,H,1,z,B)),vr(e,f,v,!L);return}Py(e,i,f,a,o,h,v,T,b)}function kA(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var h=a[o],f=h.getSnapshot;h=h.value;try{if(!cn(f(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function vr(e,i,a,o){i&=~Ff,i&=~Is,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var h=i;0<h;){var f=31-He(h),v=1<<f;o[f]=-1,h&=~v}a!==0&&Fn(e,a,i)}function Yu(){return(Ht&6)===0?(il(0),!1):!0}function Zf(){if(Rt!==null){if(Gt===0)var e=Rt.return;else e=Rt,Pi=Es=null,mf(e),Ta=null,Ko=0,e=Rt;for(;e!==null;)ay(e.alternate,e),e=e.return;Rt=null}}function Ca(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,WA(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Zf(),Zt=e,Rt=a=Oi(e.current,null),Vt=i,Gt=0,mn=null,gr=!1,ba=Wr(e,i),Gf=!1,wa=Nn=Ff=Is=pr=oe=0,rn=el=null,Qf=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var h=31-He(o),f=1<<h;i|=e[h],o&=~f}return ji=i,pu(),a}function Cy(e,i){St=null,j.H=ku,i===Lo||i===wu?(i=Fg(),Gt=3):i===jg?(i=Fg(),Gt=4):Gt=i===Qp?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,mn=i,Rt===null&&(oe=1,Bu(e,wn(i,e.current)))}function Dy(){var e=j.H;return j.H=ku,e===null?ku:e}function Ny(){var e=j.A;return j.A=VA,e}function Jf(){oe=4,gr||(Vt&4194048)!==Vt&&Dn.current!==null||(ba=!0),(pr&134217727)===0&&(Is&134217727)===0||Zt===null||vr(Zt,Vt,Nn,!1)}function Wf(e,i,a){var o=Ht;Ht|=2;var h=Dy(),f=Ny();(Zt!==e||Vt!==i)&&(Ku=null,Ca(e,i)),i=!1;var v=oe;t:do try{if(Gt!==0&&Rt!==null){var T=Rt,b=mn;switch(Gt){case 8:Zf(),v=6;break t;case 3:case 2:case 9:case 6:Dn.current===null&&(i=!0);var L=Gt;if(Gt=0,mn=null,Da(e,T,b,L),a&&ba){v=0;break t}break;default:L=Gt,Gt=0,mn=null,Da(e,T,b,L)}}UA(),v=oe;break}catch(H){Cy(e,H)}while(!0);return i&&e.shellSuspendCounter++,Pi=Es=null,Ht=o,j.H=h,j.A=f,Rt===null&&(Zt=null,Vt=0,pu()),v}function UA(){for(;Rt!==null;)Oy(Rt)}function xA(e,i){var a=Ht;Ht|=2;var o=Dy(),h=Ny();Zt!==e||Vt!==i?(Ku=null,Qu=vn()+500,Ca(e,i)):ba=Wr(e,i);t:do try{if(Gt!==0&&Rt!==null){i=Rt;var f=mn;e:switch(Gt){case 1:Gt=0,mn=null,Da(e,i,f,1);break;case 2:case 9:if(Hg(f)){Gt=0,mn=null,My(i);break}i=function(){Gt!==2&&Gt!==9||Zt!==e||(Gt=7),ai(e)},f.then(i,i);break t;case 3:Gt=7;break t;case 4:Gt=5;break t;case 7:Hg(f)?(Gt=0,mn=null,My(i)):(Gt=0,mn=null,Da(e,i,f,7));break;case 5:var v=null;switch(Rt.tag){case 26:v=Rt.memoizedState;case 5:case 27:var T=Rt;if(!v||d_(v)){Gt=0,mn=null;var b=T.sibling;if(b!==null)Rt=b;else{var L=T.return;L!==null?(Rt=L,Xu(L)):Rt=null}break e}}Gt=0,mn=null,Da(e,i,f,5);break;case 6:Gt=0,mn=null,Da(e,i,f,6);break;case 8:Zf(),oe=6;break t;default:throw Error(s(462))}}LA();break}catch(H){Cy(e,H)}while(!0);return Pi=Es=null,j.H=o,j.A=h,Ht=a,Rt!==null?0:(Zt=null,Vt=0,pu(),oe)}function LA(){for(;Rt!==null&&!ao();)Oy(Rt)}function Oy(e){var i=ry(e.alternate,e,ji);e.memoizedProps=e.pendingProps,i===null?Xu(e):Rt=i}function My(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=Jp(a,i,i.pendingProps,i.type,void 0,Vt);break;case 11:i=Jp(a,i,i.pendingProps,i.type.render,i.ref,Vt);break;case 5:mf(i);default:ay(a,i),i=Rt=Vg(i,ji),i=ry(a,i,ji)}e.memoizedProps=e.pendingProps,i===null?Xu(e):Rt=i}function Da(e,i,a,o){Pi=Es=null,mf(i),Ta=null,Ko=0;var h=i.return;try{if(IA(e,h,i,a,Vt)){oe=1,Bu(e,wn(a,e.current)),Rt=null;return}}catch(f){if(h!==null)throw Rt=h,f;oe=1,Bu(e,wn(a,e.current)),Rt=null;return}i.flags&32768?(xt||o===1?e=!0:ba||(Vt&536870912)!==0?e=!1:(gr=e=!0,(o===2||o===9||o===3||o===6)&&(o=Dn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Vy(i,e)):Xu(i)}function Xu(e){var i=e;do{if((i.flags&32768)!==0){Vy(i,gr);return}e=i.return;var a=DA(i.alternate,i,ji);if(a!==null){Rt=a;return}if(i=i.sibling,i!==null){Rt=i;return}Rt=i=e}while(i!==null);oe===0&&(oe=5)}function Vy(e,i){do{var a=NA(e.alternate,e);if(a!==null){a.flags&=32767,Rt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Rt=e;return}Rt=e=a}while(e!==null);oe=6,Rt=null}function Py(e,i,a,o,h,f,v,T,b){e.cancelPendingCommit=null;do $u();while(Le!==0);if((Ht&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(f=i.lanes|i.childLanes,f|=jh,fo(e,a,f,v,T,b),e===Zt&&(Rt=Zt=null,Vt=0),Ra=i,_r=e,Ia=a,Yf=f,Xf=h,by=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,jA(Xr,function(){return zy(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=j.T,j.T=null,h=tt.p,tt.p=2,v=Ht,Ht|=4;try{OA(e,i,a)}finally{Ht=v,tt.p=h,j.T=o}}Le=1,ky(),Uy(),xy()}}function ky(){if(Le===1){Le=0;var e=_r,i=Ra,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=j.T,j.T=null;var o=tt.p;tt.p=2;var h=Ht;Ht|=4;try{yy(i,e);var f=hd,v=Sg(e.containerInfo),T=f.focusedElem,b=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&Ag(T.ownerDocument.documentElement,T)){if(b!==null&&xh(T)){var L=b.start,H=b.end;if(H===void 0&&(H=L),"selectionStart"in T)T.selectionStart=L,T.selectionEnd=Math.min(H,T.value.length);else{var Q=T.ownerDocument||document,z=Q&&Q.defaultView||window;if(z.getSelection){var B=z.getSelection(),mt=T.textContent.length,ht=Math.min(b.start,mt),Yt=b.end===void 0?ht:Math.min(b.end,mt);!B.extend&&ht>Yt&&(v=Yt,Yt=ht,ht=v);var P=Eg(T,ht),N=Eg(T,Yt);if(P&&N&&(B.rangeCount!==1||B.anchorNode!==P.node||B.anchorOffset!==P.offset||B.focusNode!==N.node||B.focusOffset!==N.offset)){var x=Q.createRange();x.setStart(P.node,P.offset),B.removeAllRanges(),ht>Yt?(B.addRange(x),B.extend(N.node,N.offset)):(x.setEnd(N.node,N.offset),B.addRange(x))}}}}for(Q=[],B=T;B=B.parentNode;)B.nodeType===1&&Q.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<Q.length;T++){var F=Q[T];F.element.scrollLeft=F.left,F.element.scrollTop=F.top}}lc=!!cd,hd=cd=null}finally{Ht=h,tt.p=o,j.T=a}}e.current=i,Le=2}}function Uy(){if(Le===2){Le=0;var e=_r,i=Ra,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=j.T,j.T=null;var o=tt.p;tt.p=2;var h=Ht;Ht|=4;try{dy(e,i.alternate,i)}finally{Ht=h,tt.p=o,j.T=a}}Le=3}}function xy(){if(Le===4||Le===3){Le=0,Fl();var e=_r,i=Ra,a=Ia,o=by;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Le=5:(Le=0,Ra=_r=null,Ly(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(yr=null),Qs(a),i=i.stateNode,jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(se,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=j.T,h=tt.p,tt.p=2,j.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var T=o[v];f(T.value,{componentStack:T.stack})}}finally{j.T=i,tt.p=h}}(Ia&3)!==0&&$u(),ai(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===$f?nl++:(nl=0,$f=e):nl=0,il(0)}}function Ly(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Uo(i)))}function $u(e){return ky(),Uy(),xy(),zy()}function zy(){if(Le!==5)return!1;var e=_r,i=Yf;Yf=0;var a=Qs(Ia),o=j.T,h=tt.p;try{tt.p=32>a?32:a,j.T=null,a=Xf,Xf=null;var f=_r,v=Ia;if(Le=0,Ra=_r=null,Ia=0,(Ht&6)!==0)throw Error(s(331));var T=Ht;if(Ht|=4,Ay(f.current),vy(f,f.current,v,a),Ht=T,il(0,!1),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(se,f)}catch{}return!0}finally{tt.p=h,j.T=o,Ly(e,i)}}function By(e,i,a){i=wn(a,i),i=Cf(e.stateNode,i,2),e=lr(e,i,2),e!==null&&(Ti(e,2),ai(e))}function Xt(e,i,a){if(e.tag===3)By(e,e,a);else for(;i!==null;){if(i.tag===3){By(i,e,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(yr===null||!yr.has(o))){e=wn(a,e),a=Gp(2),o=lr(i,a,2),o!==null&&(Fp(a,o,i,e),Ti(o,2),ai(o));break}}i=i.return}}function td(e,i,a){var o=e.pingCache;if(o===null){o=e.pingCache=new PA;var h=new Set;o.set(i,h)}else h=o.get(i),h===void 0&&(h=new Set,o.set(i,h));h.has(a)||(Gf=!0,h.add(a),e=zA.bind(null,e,i,a),i.then(e,e))}function zA(e,i,a){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Zt===e&&(Vt&a)===a&&(oe===4||oe===3&&(Vt&62914560)===Vt&&300>vn()-Kf?(Ht&2)===0&&Ca(e,0):Ff|=a,wa===Vt&&(wa=0)),ai(e)}function qy(e,i){i===0&&(i=ho()),e=ca(e,i),e!==null&&(Ti(e,i),ai(e))}function BA(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),qy(e,a)}function qA(e,i){var a=0;switch(e.tag){case 13:var o=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),qy(e,a)}function jA(e,i){return Kr(e,i)}var Zu=null,Na=null,ed=!1,Ju=!1,nd=!1,Cs=0;function ai(e){e!==Na&&e.next===null&&(Na===null?Zu=Na=e:Na=Na.next=e),Ju=!0,ed||(ed=!0,GA())}function il(e,i){if(!nd&&Ju){nd=!0;do for(var a=!1,o=Zu;o!==null;){if(e!==0){var h=o.pendingLanes;if(h===0)var f=0;else{var v=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-He(42|e)+1)-1,f&=h&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Fy(o,f))}else f=Vt,f=Fs(o,o===Zt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Wr(o,f)||(a=!0,Fy(o,f));o=o.next}while(a);nd=!1}}function HA(){jy()}function jy(){Ju=ed=!1;var e=0;Cs!==0&&(JA()&&(e=Cs),Cs=0);for(var i=vn(),a=null,o=Zu;o!==null;){var h=o.next,f=Hy(o,i);f===0?(o.next=null,a===null?Zu=h:a.next=h,h===null&&(Na=a)):(a=o,(e!==0||(f&3)!==0)&&(Ju=!0)),o=h}il(e)}function Hy(e,i){for(var a=e.suspendedLanes,o=e.pingedLanes,h=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-He(f),T=1<<v,b=h[v];b===-1?((T&a)===0||(T&o)!==0)&&(h[v]=uo(T,i)):b<=i&&(e.expiredLanes|=T),f&=~T}if(i=Zt,a=Vt,a=Fs(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===i&&(Gt===2||Gt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Yr(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Wr(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(o!==null&&Yr(o),Qs(a)){case 2:case 8:a=Hs;break;case 32:a=Xr;break;case 268435456:a=Gs;break;default:a=Xr}return o=Gy.bind(null,e),a=Kr(a,o),e.callbackPriority=i,e.callbackNode=a,i}return o!==null&&o!==null&&Yr(o),e.callbackPriority=2,e.callbackNode=null,2}function Gy(e,i){if(Le!==0&&Le!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if($u()&&e.callbackNode!==a)return null;var o=Vt;return o=Fs(e,e===Zt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Ry(e,o,i),Hy(e,vn()),e.callbackNode!=null&&e.callbackNode===a?Gy.bind(null,e):null)}function Fy(e,i){if($u())return null;Ry(e,i,!0)}function GA(){tS(function(){(Ht&6)!==0?Kr(oo,HA):jy()})}function id(){return Cs===0&&(Cs=co()),Cs}function Qy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Js(""+e)}function Ky(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function FA(e,i,a,o,h){if(i==="submit"&&a&&a.stateNode===h){var f=Qy((h[fe]||null).action),v=o.submitter;v&&(i=(i=v[fe]||null)?Qy(i.formAction):v.getAttribute("formAction"),i!==null&&(f=i,v=null));var T=new Ws("action","action",null,o,h);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Cs!==0){var b=v?Ky(h,v):new FormData(h);Sf(a,{pending:!0,data:b,method:h.method,action:f},null,b)}}else typeof f=="function"&&(T.preventDefault(),b=v?Ky(h,v):new FormData(h),Sf(a,{pending:!0,data:b,method:h.method,action:f},f,b))},currentTarget:h}]})}}for(var rd=0;rd<qh.length;rd++){var sd=qh[rd],QA=sd.toLowerCase(),KA=sd[0].toUpperCase()+sd.slice(1);xn(QA,"on"+KA)}xn(Rg,"onAnimationEnd"),xn(Ig,"onAnimationIteration"),xn(Cg,"onAnimationStart"),xn("dblclick","onDoubleClick"),xn("focusin","onFocus"),xn("focusout","onBlur"),xn(cA,"onTransitionRun"),xn(hA,"onTransitionStart"),xn(fA,"onTransitionCancel"),xn(Dg,"onTransitionEnd"),Ai("onMouseEnter",["mouseout","mouseover"]),Ai("onMouseLeave",["mouseout","mouseover"]),Ai("onPointerEnter",["pointerout","pointerover"]),Ai("onPointerLeave",["pointerout","pointerover"]),kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),kn("onBeforeInput",["compositionend","keypress","textInput","paste"]),kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rl));function Yy(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],h=o.event;o=o.listeners;t:{var f=void 0;if(i)for(var v=o.length-1;0<=v;v--){var T=o[v],b=T.instance,L=T.currentTarget;if(T=T.listener,b!==f&&h.isPropagationStopped())break t;f=T,h.currentTarget=L;try{f(h)}catch(H){zu(H)}h.currentTarget=null,f=b}else for(v=0;v<o.length;v++){if(T=o[v],b=T.instance,L=T.currentTarget,T=T.listener,b!==f&&h.isPropagationStopped())break t;f=T,h.currentTarget=L;try{f(h)}catch(H){zu(H)}h.currentTarget=null,f=b}}}}function It(e,i){var a=i[go];a===void 0&&(a=i[go]=new Set);var o=e+"__bubble";a.has(o)||(Xy(i,e,2,!1),a.add(o))}function ad(e,i,a){var o=0;i&&(o|=4),Xy(a,e,o,i)}var Wu="_reactListening"+Math.random().toString(36).slice(2);function od(e){if(!e[Wu]){e[Wu]=!0,po.forEach(function(a){a!=="selectionchange"&&(YA.has(a)||ad(a,!1,e),ad(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Wu]||(i[Wu]=!0,ad("selectionchange",!1,i))}}function Xy(e,i,a,o){switch(v_(i)){case 2:var h=ES;break;case 8:h=AS;break;default:h=Ed}a=h.bind(null,i,a,e),h=void 0,!Sn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),o?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function ld(e,i,a,o,h){var f=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var T=o.stateNode.containerInfo;if(T===h)break;if(v===4)for(v=o.return;v!==null;){var b=v.tag;if((b===3||b===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;T!==null;){if(v=Ei(T),v===null)return;if(b=v.tag,b===5||b===6||b===26||b===27){o=f=v;continue t}T=T.parentNode}}o=o.return}eu(function(){var L=f,H=An(a),Q=[];t:{var z=Ng.get(e);if(z!==void 0){var B=Ws,mt=e;switch(e){case"keypress":if(Zn(a)===0)break t;case"keydown":case"keyup":B=sa;break;case"focusin":mt="focus",B=na;break;case"focusout":mt="blur",B=na;break;case"beforeblur":case"afterblur":B=na;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=bn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Vh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=uu;break;case Rg:case Ig:case Cg:B=ia;break;case Dg:B=hu;break;case"scroll":case"scrollend":B=nu;break;case"wheel":B=aa;break;case"copy":case"cut":case"paste":B=ra;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Co;break;case"toggle":case"beforetoggle":B=du}var ht=(i&4)!==0,Yt=!ht&&(e==="scroll"||e==="scrollend"),P=ht?z!==null?z+"Capture":null:z;ht=[];for(var N=L,x;N!==null;){var F=N;if(x=F.stateNode,F=F.tag,F!==5&&F!==26&&F!==27||x===null||P===null||(F=os(N,P),F!=null&&ht.push(sl(N,F,x))),Yt)break;N=N.return}0<ht.length&&(z=new B(z,mt,null,a,H),Q.push({event:z,listeners:ht}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",z&&a!==wi&&(mt=a.relatedTarget||a.fromElement)&&(Ei(mt)||mt[Tn]))break t;if((B||z)&&(z=H.window===H?H:(z=H.ownerDocument)?z.defaultView||z.parentWindow:window,B?(mt=a.relatedTarget||a.toElement,B=L,mt=mt?Ei(mt):null,mt!==null&&(Yt=c(mt),ht=mt.tag,mt!==Yt||ht!==5&&ht!==27&&ht!==6)&&(mt=null)):(B=null,mt=L),B!==mt)){if(ht=bn,F="onMouseLeave",P="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(ht=Co,F="onPointerLeave",P="onPointerEnter",N="pointer"),Yt=B==null?z:Kn(B),x=mt==null?z:Kn(mt),z=new ht(F,N+"leave",B,a,H),z.target=Yt,z.relatedTarget=x,F=null,Ei(H)===L&&(ht=new ht(P,N+"enter",mt,a,H),ht.target=x,ht.relatedTarget=Yt,F=ht),Yt=F,B&&mt)e:{for(ht=B,P=mt,N=0,x=ht;x;x=Oa(x))N++;for(x=0,F=P;F;F=Oa(F))x++;for(;0<N-x;)ht=Oa(ht),N--;for(;0<x-N;)P=Oa(P),x--;for(;N--;){if(ht===P||P!==null&&ht===P.alternate)break e;ht=Oa(ht),P=Oa(P)}ht=null}else ht=null;B!==null&&$y(Q,z,B,ht,!1),mt!==null&&Yt!==null&&$y(Q,Yt,mt,ht,!0)}}t:{if(z=L?Kn(L):window,B=z.nodeName&&z.nodeName.toLowerCase(),B==="select"||B==="input"&&z.type==="file")var rt=gg;else if(Te(z))if(pg)rt=oA;else{rt=sA;var wt=rA}else B=z.nodeName,!B||B.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?L&&Eo(L.elementType)&&(rt=gg):rt=aA;if(rt&&(rt=rt(e,L))){Ni(Q,rt,a,H);break t}wt&&wt(e,z,L),e==="focusout"&&L&&z.type==="number"&&L.memoizedProps.value!=null&&ir(z,"number",z.value)}switch(wt=L?Kn(L):window,e){case"focusin":(Te(wt)||wt.contentEditable==="true")&&(oa=wt,Lh=L,Oo=null);break;case"focusout":Oo=Lh=oa=null;break;case"mousedown":zh=!0;break;case"contextmenu":case"mouseup":case"dragend":zh=!1,bg(Q,a,H);break;case"selectionchange":if(uA)break;case"keydown":case"keyup":bg(Q,a,H)}var at;if(ti)t:{switch(e){case"compositionstart":var ft="onCompositionStart";break t;case"compositionend":ft="onCompositionEnd";break t;case"compositionupdate":ft="onCompositionUpdate";break t}ft=void 0}else Ot?q(e,a)&&(ft="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ft="onCompositionStart");ft&&(_&&a.locale!=="ko"&&(Ot||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&Ot&&(at=So()):($n=H,rr="value"in $n?$n.value:$n.textContent,Ot=!0)),wt=tc(L,ft),0<wt.length&&(ft=new Ro(ft,e,null,a,H),Q.push({event:ft,listeners:wt}),at?ft.data=at:(at=W(a),at!==null&&(ft.data=at)))),(at=m?ve(e,a):Mt(e,a))&&(ft=tc(L,"onBeforeInput"),0<ft.length&&(wt=new Ro("onBeforeInput","beforeinput",null,a,H),Q.push({event:wt,listeners:ft}),wt.data=at)),FA(Q,e,L,a,H)}Yy(Q,i)})}function sl(e,i,a){return{instance:e,listener:i,currentTarget:a}}function tc(e,i){for(var a=i+"Capture",o=[];e!==null;){var h=e,f=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||f===null||(h=os(e,a),h!=null&&o.unshift(sl(e,h,f)),h=os(e,i),h!=null&&o.push(sl(e,h,f))),e.tag===3)return o;e=e.return}return[]}function Oa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $y(e,i,a,o,h){for(var f=i._reactName,v=[];a!==null&&a!==o;){var T=a,b=T.alternate,L=T.stateNode;if(T=T.tag,b!==null&&b===o)break;T!==5&&T!==26&&T!==27||L===null||(b=L,h?(L=os(a,f),L!=null&&v.unshift(sl(a,L,b))):h||(L=os(a,f),L!=null&&v.push(sl(a,L,b)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var XA=/\r\n?/g,$A=/\u0000|\uFFFD/g;function Zy(e){return(typeof e=="string"?e:""+e).replace(XA,`
`).replace($A,"")}function Jy(e,i){return i=Zy(i),Zy(e)===i}function ec(){}function Kt(e,i,a,o,h,f){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||En(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&En(e,""+o);break;case"className":Yn(e,"class",o);break;case"tabIndex":Yn(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Yn(e,a,o);break;case"style":To(e,o,f);break;case"data":if(i!=="object"){Yn(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Js(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(i!=="input"&&Kt(e,i,"name",h.name,h,null),Kt(e,i,"formEncType",h.formEncType,h,null),Kt(e,i,"formMethod",h.formMethod,h,null),Kt(e,i,"formTarget",h.formTarget,h,null)):(Kt(e,i,"encType",h.encType,h,null),Kt(e,i,"method",h.method,h,null),Kt(e,i,"target",h.target,h,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Js(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ec);break;case"onScroll":o!=null&&It("scroll",e);break;case"onScrollEnd":o!=null&&It("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Js(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":It("beforetoggle",e),It("toggle",e),nr(e,"popover",o);break;case"xlinkActuate":ke(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ke(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ke(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ke(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ke(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ke(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ke(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ke(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ke(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":nr(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Oh.get(a)||a,nr(e,a,o))}}function ud(e,i,a,o,h,f){switch(a){case"style":To(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?En(e,o):(typeof o=="number"||typeof o=="bigint")&&En(e,""+o);break;case"onScroll":o!=null&&It("scroll",e);break;case"onScrollEnd":o!=null&&It("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ec);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ks.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),f=e[fe]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(i,f,h),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,o,h);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):nr(e,a,o)}}}function ze(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":It("error",e),It("load",e);var o=!1,h=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Kt(e,i,f,v,a,null)}}h&&Kt(e,i,"srcSet",a.srcSet,a,null),o&&Kt(e,i,"src",a.src,a,null);return;case"input":It("invalid",e);var T=f=v=h=null,b=null,L=null;for(o in a)if(a.hasOwnProperty(o)){var H=a[o];if(H!=null)switch(o){case"name":h=H;break;case"type":v=H;break;case"checked":b=H;break;case"defaultChecked":L=H;break;case"value":f=H;break;case"defaultValue":T=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,i));break;default:Kt(e,i,o,H,a,null)}}rs(e,f,T,b,L,v,h,!1),Zs(e);return;case"select":It("invalid",e),o=v=f=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":o=T;default:Kt(e,i,h,T,a,null)}i=f,a=v,e.multiple=!!o,i!=null?bi(e,!!o,i,!1):a!=null&&bi(e,!!o,a,!0);return;case"textarea":It("invalid",e),f=h=o=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":o=T;break;case"defaultValue":h=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Kt(e,i,v,T,a,null)}ss(e,o,h,f),Zs(e);return;case"option":for(b in a)if(a.hasOwnProperty(b)&&(o=a[b],o!=null))switch(b){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Kt(e,i,b,o,a,null)}return;case"dialog":It("beforetoggle",e),It("toggle",e),It("cancel",e),It("close",e);break;case"iframe":case"object":It("load",e);break;case"video":case"audio":for(o=0;o<rl.length;o++)It(rl[o],e);break;case"image":It("error",e),It("load",e);break;case"details":It("toggle",e);break;case"embed":case"source":case"link":It("error",e),It("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(o=a[L],o!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Kt(e,i,L,o,a,null)}return;default:if(Eo(i)){for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!==void 0&&ud(e,i,H,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Kt(e,i,T,o,a,null))}function ZA(e,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,f=null,v=null,T=null,b=null,L=null,H=null;for(B in a){var Q=a[B];if(a.hasOwnProperty(B)&&Q!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":b=Q;default:o.hasOwnProperty(B)||Kt(e,i,B,null,o,Q)}}for(var z in o){var B=o[z];if(Q=a[z],o.hasOwnProperty(z)&&(B!=null||Q!=null))switch(z){case"type":f=B;break;case"name":h=B;break;case"checked":L=B;break;case"defaultChecked":H=B;break;case"value":v=B;break;case"defaultValue":T=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,i));break;default:B!==Q&&Kt(e,i,z,B,o,Q)}}un(e,v,T,b,L,H,f,h);return;case"select":B=v=T=z=null;for(f in a)if(b=a[f],a.hasOwnProperty(f)&&b!=null)switch(f){case"value":break;case"multiple":B=b;default:o.hasOwnProperty(f)||Kt(e,i,f,null,o,b)}for(h in o)if(f=o[h],b=a[h],o.hasOwnProperty(h)&&(f!=null||b!=null))switch(h){case"value":z=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==b&&Kt(e,i,h,f,o,b)}i=T,a=v,o=B,z!=null?bi(e,!!a,z,!1):!!o!=!!a&&(i!=null?bi(e,!!a,i,!0):bi(e,!!a,a?[]:"",!1));return;case"textarea":B=z=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Kt(e,i,T,null,o,h)}for(v in o)if(h=o[v],f=a[v],o.hasOwnProperty(v)&&(h!=null||f!=null))switch(v){case"value":z=h;break;case"defaultValue":B=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==f&&Kt(e,i,v,h,o,f)}Ft(e,z,B);return;case"option":for(var mt in a)if(z=a[mt],a.hasOwnProperty(mt)&&z!=null&&!o.hasOwnProperty(mt))switch(mt){case"selected":e.selected=!1;break;default:Kt(e,i,mt,null,o,z)}for(b in o)if(z=o[b],B=a[b],o.hasOwnProperty(b)&&z!==B&&(z!=null||B!=null))switch(b){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Kt(e,i,b,z,o,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ht in a)z=a[ht],a.hasOwnProperty(ht)&&z!=null&&!o.hasOwnProperty(ht)&&Kt(e,i,ht,null,o,z);for(L in o)if(z=o[L],B=a[L],o.hasOwnProperty(L)&&z!==B&&(z!=null||B!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Kt(e,i,L,z,o,B)}return;default:if(Eo(i)){for(var Yt in a)z=a[Yt],a.hasOwnProperty(Yt)&&z!==void 0&&!o.hasOwnProperty(Yt)&&ud(e,i,Yt,void 0,o,z);for(H in o)z=o[H],B=a[H],!o.hasOwnProperty(H)||z===B||z===void 0&&B===void 0||ud(e,i,H,z,o,B);return}}for(var P in a)z=a[P],a.hasOwnProperty(P)&&z!=null&&!o.hasOwnProperty(P)&&Kt(e,i,P,null,o,z);for(Q in o)z=o[Q],B=a[Q],!o.hasOwnProperty(Q)||z===B||z==null&&B==null||Kt(e,i,Q,z,o,B)}var cd=null,hd=null;function nc(e){return e.nodeType===9?e:e.ownerDocument}function Wy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function t_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function fd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var dd=null;function JA(){var e=window.event;return e&&e.type==="popstate"?e===dd?!1:(dd=e,!0):(dd=null,!1)}var e_=typeof setTimeout=="function"?setTimeout:void 0,WA=typeof clearTimeout=="function"?clearTimeout:void 0,n_=typeof Promise=="function"?Promise:void 0,tS=typeof queueMicrotask=="function"?queueMicrotask:typeof n_<"u"?function(e){return n_.resolve(null).then(e).catch(eS)}:e_;function eS(e){setTimeout(function(){throw e})}function Tr(e){return e==="head"}function i_(e,i){var a=i,o=0,h=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var v=e.ownerDocument;if(a&1&&al(v.documentElement),a&2&&al(v.body),a&4)for(a=v.head,al(a),v=a.firstChild;v;){var T=v.nextSibling,b=v.nodeName;v[ts]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=T}}if(h===0){e.removeChild(f),ml(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);ml(i)}function md(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":md(a),er(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function nS(e,i,a,o){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ts])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var f=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=zn(e.nextSibling),e===null)break}return null}function iS(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=zn(e.nextSibling),e===null))return null;return e}function gd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function rS(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var o=function(){i(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function zn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var pd=null;function r_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function s_(e,i,a){switch(i=nc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function al(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);er(e)}var On=new Map,a_=new Set;function ic(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Hi=tt.d;tt.d={f:sS,r:aS,D:oS,C:lS,L:uS,m:cS,X:fS,S:hS,M:dS};function sS(){var e=Hi.f(),i=Yu();return e||i}function aS(e){var i=Qn(e);i!==null&&i.tag===5&&i.type==="form"?Rp(i):Hi.r(e)}var Ma=typeof document>"u"?null:document;function o_(e,i,a){var o=Ma;if(o&&typeof i=="string"&&i){var h=de(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),a_.has(h)||(a_.add(h),e={rel:e,crossOrigin:a,href:i},o.querySelector(h)===null&&(i=o.createElement("link"),ze(i,"link",e),le(i),o.head.appendChild(i)))}}function oS(e){Hi.D(e),o_("dns-prefetch",e,null)}function lS(e,i){Hi.C(e,i),o_("preconnect",e,i)}function uS(e,i,a){Hi.L(e,i,a);var o=Ma;if(o&&e&&i){var h='link[rel="preload"][as="'+de(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+de(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+de(a.imageSizes)+'"]')):h+='[href="'+de(e)+'"]';var f=h;switch(i){case"style":f=Va(e);break;case"script":f=Pa(e)}On.has(f)||(e=A({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),On.set(f,e),o.querySelector(h)!==null||i==="style"&&o.querySelector(ol(f))||i==="script"&&o.querySelector(ll(f))||(i=o.createElement("link"),ze(i,"link",e),le(i),o.head.appendChild(i)))}}function cS(e,i){Hi.m(e,i);var a=Ma;if(a&&e){var o=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+de(o)+'"][href="'+de(e)+'"]',f=h;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Pa(e)}if(!On.has(f)&&(e=A({rel:"modulepreload",href:e},i),On.set(f,e),a.querySelector(h)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ll(f)))return}o=a.createElement("link"),ze(o,"link",e),le(o),a.head.appendChild(o)}}}function hS(e,i,a){Hi.S(e,i,a);var o=Ma;if(o&&e){var h=Ze(o).hoistableStyles,f=Va(e);i=i||"default";var v=h.get(f);if(!v){var T={loading:0,preload:null};if(v=o.querySelector(ol(f)))T.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":i},a),(a=On.get(f))&&yd(e,a);var b=v=o.createElement("link");le(b),ze(b,"link",e),b._p=new Promise(function(L,H){b.onload=L,b.onerror=H}),b.addEventListener("load",function(){T.loading|=1}),b.addEventListener("error",function(){T.loading|=2}),T.loading|=4,rc(v,i,o)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(f,v)}}}function fS(e,i){Hi.X(e,i);var a=Ma;if(a&&e){var o=Ze(a).hoistableScripts,h=Pa(e),f=o.get(h);f||(f=a.querySelector(ll(h)),f||(e=A({src:e,async:!0},i),(i=On.get(h))&&_d(e,i),f=a.createElement("script"),le(f),ze(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(h,f))}}function dS(e,i){Hi.M(e,i);var a=Ma;if(a&&e){var o=Ze(a).hoistableScripts,h=Pa(e),f=o.get(h);f||(f=a.querySelector(ll(h)),f||(e=A({src:e,async:!0,type:"module"},i),(i=On.get(h))&&_d(e,i),f=a.createElement("script"),le(f),ze(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(h,f))}}function l_(e,i,a,o){var h=(h=yt.current)?ic(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Va(a.href),a=Ze(h).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Va(a.href);var f=Ze(h).hoistableStyles,v=f.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=h.querySelector(ol(e)))&&!f._p&&(v.instance=f,v.state.loading=5),On.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},On.set(e,a),f||mS(h,e,a,v.state))),i&&o===null)throw Error(s(528,""));return v}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Pa(a),a=Ze(h).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Va(e){return'href="'+de(e)+'"'}function ol(e){return'link[rel="stylesheet"]['+e+"]"}function u_(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function mS(e,i,a,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),ze(i,"link",a),le(i),e.head.appendChild(i))}function Pa(e){return'[src="'+de(e)+'"]'}function ll(e){return"script[async]"+e}function c_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+de(a.href)+'"]');if(o)return i.instance=o,le(o),o;var h=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),le(o),ze(o,"style",h),rc(o,a.precedence,e),i.instance=o;case"stylesheet":h=Va(a.href);var f=e.querySelector(ol(h));if(f)return i.state.loading|=4,i.instance=f,le(f),f;o=u_(a),(h=On.get(h))&&yd(o,h),f=(e.ownerDocument||e).createElement("link"),le(f);var v=f;return v._p=new Promise(function(T,b){v.onload=T,v.onerror=b}),ze(f,"link",o),i.state.loading|=4,rc(f,a.precedence,e),i.instance=f;case"script":return f=Pa(a.src),(h=e.querySelector(ll(f)))?(i.instance=h,le(h),h):(o=a,(h=On.get(f))&&(o=A({},a),_d(o,h)),e=e.ownerDocument||e,h=e.createElement("script"),le(h),ze(h,"link",o),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,rc(o,a.precedence,e));return i.instance}function rc(e,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=o.length?o[o.length-1]:null,f=h,v=0;v<o.length;v++){var T=o[v];if(T.dataset.precedence===i)f=T;else if(f!==h)break}f?f.parentNode.insertBefore(e,f.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function yd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function _d(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var sc=null;function h_(e,i,a){if(sc===null){var o=new Map,h=sc=new Map;h.set(a,o)}else h=sc,o=h.get(a),o||(o=new Map,h.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var f=a[h];if(!(f[ts]||f[_e]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(i)||"";v=e+v;var T=o.get(v);T?T.push(f):o.set(v,[f])}}return o}function f_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function gS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function d_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ul=null;function pS(){}function yS(e,i,a){if(ul===null)throw Error(s(475));var o=ul;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Va(a.href),f=e.querySelector(ol(h));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=ac.bind(o),e.then(o,o)),i.state.loading|=4,i.instance=f,le(f);return}f=e.ownerDocument||e,a=u_(a),(h=On.get(h))&&yd(a,h),f=f.createElement("link"),le(f);var v=f;v._p=new Promise(function(T,b){v.onload=T,v.onerror=b}),ze(f,"link",a),i.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=ac.bind(o),e.addEventListener("load",i),e.addEventListener("error",i))}}function _S(){if(ul===null)throw Error(s(475));var e=ul;return e.stylesheets&&e.count===0&&vd(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&vd(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function ac(){if(this.count--,this.count===0){if(this.stylesheets)vd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var oc=null;function vd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,oc=new Map,i.forEach(vS,e),oc=null,ac.call(e))}function vS(e,i){if(!(i.state.loading&4)){var a=oc.get(e);if(a)var o=a.get(null);else{a=new Map,oc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<h.length;f++){var v=h[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}h=i.instance,v=h.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,h),a.set(v,h),this.count++,o=ac.bind(this),h.addEventListener("load",o),h.addEventListener("error",o),f?f.parentNode.insertBefore(h,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var cl={$$typeof:ct,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function TS(e,i,a,o,h,f,v,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vi(0),this.hiddenUpdates=vi(null),this.identifierPrefix=o,this.onUncaughtError=h,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function m_(e,i,a,o,h,f,v,T,b,L,H,Q){return e=new TS(e,i,a,v,T,b,L,Q),i=1,f===!0&&(i|=24),f=hn(3,null,null,i),e.current=f,f.stateNode=e,i=Wh(),i.refCount++,e.pooledCache=i,i.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:i},rf(f),e}function g_(e){return e?(e=ha,e):ha}function p_(e,i,a,o,h,f){h=g_(h),o.context===null?o.context=h:o.pendingContext=h,o=or(i),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=lr(e,o,i),a!==null&&(pn(a,e,i),Bo(a,e,i))}function y_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Td(e,i){y_(e,i),(e=e.alternate)&&y_(e,i)}function __(e){if(e.tag===13){var i=ca(e,67108864);i!==null&&pn(i,e,67108864),Td(e,67108864)}}var lc=!0;function ES(e,i,a,o){var h=j.T;j.T=null;var f=tt.p;try{tt.p=2,Ed(e,i,a,o)}finally{tt.p=f,j.T=h}}function AS(e,i,a,o){var h=j.T;j.T=null;var f=tt.p;try{tt.p=8,Ed(e,i,a,o)}finally{tt.p=f,j.T=h}}function Ed(e,i,a,o){if(lc){var h=Ad(o);if(h===null)ld(e,i,o,uc,a),T_(e,o);else if(bS(h,e,i,a,o))o.stopPropagation();else if(T_(e,o),i&4&&-1<SS.indexOf(e)){for(;h!==null;){var f=Qn(h);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Pn(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var b=1<<31-He(v);T.entanglements[1]|=b,v&=~b}ai(f),(Ht&6)===0&&(Qu=vn()+500,il(0))}}break;case 13:T=ca(f,2),T!==null&&pn(T,f,2),Yu(),Td(f,2)}if(f=Ad(o),f===null&&ld(e,i,o,uc,a),f===h)break;h=f}h!==null&&o.stopPropagation()}else ld(e,i,o,null,a)}}function Ad(e){return e=An(e),Sd(e)}var uc=null;function Sd(e){if(uc=null,e=Ei(e),e!==null){var i=c(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=d(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return uc=e,null}function v_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wh()){case oo:return 2;case Hs:return 8;case Xr:case Rh:return 32;case Gs:return 268435456;default:return 32}default:return 32}}var bd=!1,Er=null,Ar=null,Sr=null,hl=new Map,fl=new Map,br=[],SS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function T_(e,i){switch(e){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":hl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fl.delete(i.pointerId)}}function dl(e,i,a,o,h,f){return e===null||e.nativeEvent!==f?(e={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[h]},i!==null&&(i=Qn(i),i!==null&&__(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function bS(e,i,a,o,h){switch(i){case"focusin":return Er=dl(Er,e,i,a,o,h),!0;case"dragenter":return Ar=dl(Ar,e,i,a,o,h),!0;case"mouseover":return Sr=dl(Sr,e,i,a,o,h),!0;case"pointerover":var f=h.pointerId;return hl.set(f,dl(hl.get(f)||null,e,i,a,o,h)),!0;case"gotpointercapture":return f=h.pointerId,fl.set(f,dl(fl.get(f)||null,e,i,a,o,h)),!0}return!1}function E_(e){var i=Ei(e.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=d(a),i!==null){e.blockedOn=i,Yl(e.priority,function(){if(a.tag===13){var o=gn();o=Ji(o);var h=ca(a,o);h!==null&&pn(h,a,o),Td(a,o)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=Ad(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);wi=o,a.target.dispatchEvent(o),wi=null}else return i=Qn(a),i!==null&&__(i),e.blockedOn=a,!1;i.shift()}return!0}function A_(e,i,a){cc(e)&&a.delete(i)}function wS(){bd=!1,Er!==null&&cc(Er)&&(Er=null),Ar!==null&&cc(Ar)&&(Ar=null),Sr!==null&&cc(Sr)&&(Sr=null),hl.forEach(A_),fl.forEach(A_)}function hc(e,i){e.blockedOn===i&&(e.blockedOn=null,bd||(bd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,wS)))}var fc=null;function S_(e){fc!==e&&(fc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){fc===e&&(fc=null);for(var i=0;i<e.length;i+=3){var a=e[i],o=e[i+1],h=e[i+2];if(typeof o!="function"){if(Sd(o||a)===null)continue;break}var f=Qn(a);f!==null&&(e.splice(i,3),i-=3,Sf(f,{pending:!0,data:h,method:a.method,action:o},o,h))}}))}function ml(e){function i(b){return hc(b,e)}Er!==null&&hc(Er,e),Ar!==null&&hc(Ar,e),Sr!==null&&hc(Sr,e),hl.forEach(i),fl.forEach(i);for(var a=0;a<br.length;a++){var o=br[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<br.length&&(a=br[0],a.blockedOn===null);)E_(a),a.blockedOn===null&&br.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var h=a[o],f=a[o+1],v=h[fe]||null;if(typeof f=="function")v||S_(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(h=f,v=f[fe]||null)T=v.formAction;else if(Sd(h)!==null)continue}else T=v.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),S_(a)}}}function wd(e){this._internalRoot=e}dc.prototype.render=wd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,o=gn();p_(a,o,e,i,null,null)},dc.prototype.unmount=wd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;p_(e.current,2,null,e,null,null),Yu(),i[Tn]=null}};function dc(e){this._internalRoot=e}dc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Wi();e={blockedOn:null,target:e,priority:i};for(var a=0;a<br.length&&i!==0&&i<br[a].priority;a++);br.splice(a,0,e),a===0&&E_(e)}};var b_=t.version;if(b_!=="19.1.1")throw Error(s(527,b_,"19.1.1"));tt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(i),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var RS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{se=mc.inject(RS),jt=mc}catch{}}return pl.createRoot=function(e,i){if(!l(e))throw Error(s(299));var a=!1,o="",h=Bp,f=qp,v=jp,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(f=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=m_(e,1,!1,null,null,a,o,h,f,v,T,null),e[Tn]=i.current,od(e),new wd(i)},pl.hydrateRoot=function(e,i,a){if(!l(e))throw Error(s(299));var o=!1,h="",f=Bp,v=qp,T=jp,b=null,L=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(b=a.unstable_transitionCallbacks),a.formState!==void 0&&(L=a.formState)),i=m_(e,1,!0,i,a??null,o,h,f,v,T,b,L),i.context=g_(null),a=i.current,o=gn(),o=Ji(o),h=or(o),h.callback=null,lr(a,h,o),a=o,i.current.lanes=a,Ti(i,a),ai(i),e[Tn]=i.current,od(e),new dc(i)},pl.version="19.1.1",pl}var P_;function US(){if(P_)return Cd.exports;P_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Cd.exports=kS(),Cd.exports}var xS=US();const LS=()=>{};var k_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?t[n++]=l:l<2048?(t[n++]=l>>6|192,t[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=l>>18|240,t[n++]=l>>12&63|128,t[n++]=l>>6&63|128,t[n++]=l&63|128):(t[n++]=l>>12|224,t[n++]=l>>6&63|128,t[n++]=l&63|128)}return t},zS=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)t[s++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[n++];t[s++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[n++],d=r[n++],g=r[n++],p=((l&7)<<18|(c&63)<<12|(d&63)<<6|g&63)-65536;t[s++]=String.fromCharCode(55296+(p>>10)),t[s++]=String.fromCharCode(56320+(p&1023))}else{const c=r[n++],d=r[n++];t[s++]=String.fromCharCode((l&15)<<12|(c&63)<<6|d&63)}}return t.join("")},pT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const c=r[l],d=l+1<r.length,g=d?r[l+1]:0,p=l+2<r.length,y=p?r[l+2]:0,A=c>>2,I=(c&3)<<4|g>>4;let C=(g&15)<<2|y>>6,G=y&63;p||(G=64,d||(C=64)),s.push(n[A],n[I],n[C],n[G])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(gT(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):zS(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const c=n[r.charAt(l++)],g=l<r.length?n[r.charAt(l)]:0;++l;const y=l<r.length?n[r.charAt(l)]:64;++l;const I=l<r.length?n[r.charAt(l)]:64;if(++l,c==null||g==null||y==null||I==null)throw new BS;const C=c<<2|g>>4;if(s.push(C),y!==64){const G=g<<4&240|y>>2;if(s.push(G),I!==64){const $=y<<6&192|I;s.push($)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class BS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qS=function(r){const t=gT(r);return pT.encodeByteArray(t,!0)},Pc=function(r){return qS(r).replace(/\./g,"")},yT=function(r){try{return pT.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=()=>jS().__FIREBASE_DEFAULTS__,GS=()=>{if(typeof process>"u"||typeof k_>"u")return;const r=k_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},FS=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&yT(r[1]);return t&&JSON.parse(t)},nh=()=>{try{return LS()||HS()||GS()||FS()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},_T=r=>nh()?.emulatorHosts?.[r],QS=r=>{const t=_T(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},vT=()=>nh()?.config,TT=r=>nh()?.[`_${r}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ET(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Pc(JSON.stringify(n)),Pc(JSON.stringify(d)),""].join(".")}const Tl={};function XS(){const r={prod:[],emulator:[]};for(const t of Object.keys(Tl))Tl[t]?r.emulator.push(t):r.prod.push(t);return r}function $S(r){let t=document.getElementById(r),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),n=!0),{created:n,element:t}}let U_=!1;function AT(r,t){if(typeof window>"u"||typeof document>"u"||!Wa(window.location.host)||Tl[r]===t||Tl[r]||U_)return;Tl[r]=t;function n(C){return`__firebase__banner__${C}`}const s="__firebase__banner",c=XS().prod.length>0;function d(){const C=document.getElementById(s);C&&C.remove()}function g(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function p(C,G){C.setAttribute("width","24"),C.setAttribute("id",G),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function y(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{U_=!0,d()},C}function A(C,G){C.setAttribute("id",G),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function I(){const C=$S(s),G=n("text"),$=document.getElementById(G)||document.createElement("span"),nt=n("learnmore"),Z=document.getElementById(nt)||document.createElement("a"),Tt=n("preprendIcon"),gt=document.getElementById(Tt)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const ct=C.element;g(ct),A(Z,nt);const qt=y();p(gt,Tt),ct.append(gt,$,Z,qt),document.body.appendChild(ct)}c?($.innerText="Preview backend disconnected.",gt.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(gt.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",G)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function JS(){const r=nh()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ST(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function t1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function e1(){const r=Xe();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function n1(){return!JS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bT(){try{return typeof indexedDB=="object"}catch{return!1}}function wT(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{t(l.error?.message||"")}}catch(n){t(n)}})}function i1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1="FirebaseError";class Hn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=r1,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zs.prototype.create)}}class zs{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},l=`${this.service}/${t}`,c=this.errors[t],d=c?s1(c,s):"Error",g=`${this.serviceName}: ${d} (${l}).`;return new Hn(l,g,s)}}function s1(r,t){return r.replace(a1,(n,s)=>{const l=t[s];return l!=null?String(l):`<${s}?>`})}const a1=/\{\$([^}]+)}/g;function o1(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function xr(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const l of n){if(!s.includes(l))return!1;const c=r[l],d=t[l];if(x_(c)&&x_(d)){if(!xr(c,d))return!1}else if(c!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function x_(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function l1(r,t){const n=new u1(r,t);return n.subscribe.bind(n)}class u1{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let l;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");c1(t,["next","error","complete"])?l=t:l={next:t,error:n,complete:s},l.next===void 0&&(l.next=Md),l.error===void 0&&(l.error=Md),l.complete===void 0&&(l.complete=Md);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function c1(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function Md(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=1e3,f1=2,d1=14400*1e3,m1=.5;function L_(r,t=h1,n=f1){const s=t*Math.pow(n,r),l=Math.round(m1*s*(Math.random()-.5)*2);return Math.min(d1,s+l)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(r){return r&&r._delegate?r._delegate:r}class jn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new KS;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),s=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(y1(t))try{this.getOrInitializeService({instanceIdentifier:Ds})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:l});s.resolve(c)}catch{}}}}clearInstance(t=Ds){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ds){return this.instances.has(t)}getOptions(t=Ds){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,d]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(c);s===g&&d.resolve(l)}return l}onInit(t,n){const s=this.normalizeInstanceIdentifier(n),l=this.onInitCallbacks.get(s)??new Set;l.add(t),this.onInitCallbacks.set(s,l);const c=this.instances.get(s);return c&&t(c,s),()=>{l.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:p1(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Ds){return this.component?this.component.multipleInstances?t:Ds:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function p1(r){return r===Ds?void 0:r}function y1(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new g1(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ct;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ct||(Ct={}));const v1={debug:Ct.DEBUG,verbose:Ct.VERBOSE,info:Ct.INFO,warn:Ct.WARN,error:Ct.ERROR,silent:Ct.SILENT},T1=Ct.INFO,E1={[Ct.DEBUG]:"log",[Ct.VERBOSE]:"log",[Ct.INFO]:"info",[Ct.WARN]:"warn",[Ct.ERROR]:"error"},A1=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),l=E1[t];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ih{constructor(t){this.name=t,this._logLevel=T1,this._logHandler=A1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ct))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?v1[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ct.DEBUG,...t),this._logHandler(this,Ct.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ct.VERBOSE,...t),this._logHandler(this,Ct.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ct.INFO,...t),this._logHandler(this,Ct.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ct.WARN,...t),this._logHandler(this,Ct.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ct.ERROR,...t),this._logHandler(this,Ct.ERROR,...t)}}const S1=(r,t)=>t.some(n=>r instanceof n);let z_,B_;function b1(){return z_||(z_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function w1(){return B_||(B_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const RT=new WeakMap,Kd=new WeakMap,IT=new WeakMap,Vd=new WeakMap,Em=new WeakMap;function R1(r){const t=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",d)},c=()=>{n(Mr(r.result)),l()},d=()=>{s(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",d)});return t.then(n=>{n instanceof IDBCursor&&RT.set(n,r)}).catch(()=>{}),Em.set(t,r),t}function I1(r){if(Kd.has(r))return;const t=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",d),r.removeEventListener("abort",d)},c=()=>{n(),l()},d=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",d),r.addEventListener("abort",d)});Kd.set(r,t)}let Yd={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return Kd.get(r);if(t==="objectStoreNames")return r.objectStoreNames||IT.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function C1(r){Yd=r(Yd)}function D1(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(Pd(this),t,...n);return IT.set(s,t.sort?t.sort():[t]),Mr(s)}:w1().includes(r)?function(...t){return r.apply(Pd(this),t),Mr(RT.get(this))}:function(...t){return Mr(r.apply(Pd(this),t))}}function N1(r){return typeof r=="function"?D1(r):(r instanceof IDBTransaction&&I1(r),S1(r,b1())?new Proxy(r,Yd):r)}function Mr(r){if(r instanceof IDBRequest)return R1(r);if(Vd.has(r))return Vd.get(r);const t=N1(r);return t!==r&&(Vd.set(r,t),Em.set(t,r)),t}const Pd=r=>Em.get(r);function CT(r,t,{blocked:n,upgrade:s,blocking:l,terminated:c}={}){const d=indexedDB.open(r,t),g=Mr(d);return s&&d.addEventListener("upgradeneeded",p=>{s(Mr(d.result),p.oldVersion,p.newVersion,Mr(d.transaction),p)}),n&&d.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),g.then(p=>{c&&p.addEventListener("close",()=>c()),l&&p.addEventListener("versionchange",y=>l(y.oldVersion,y.newVersion,y))}).catch(()=>{}),g}const O1=["get","getKey","getAll","getAllKeys","count"],M1=["put","add","delete","clear"],kd=new Map;function q_(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(kd.get(t))return kd.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,l=M1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||O1.includes(n)))return;const c=async function(d,...g){const p=this.transaction(d,l?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(g.shift())),(await Promise.all([y[n](...g),l&&p.done]))[0]};return kd.set(t,c),c}C1(r=>({...r,get:(t,n,s)=>q_(t,n)||r.get(t,n,s),has:(t,n)=>!!q_(t,n)||r.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(P1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function P1(r){return r.getComponent()?.type==="VERSION"}const Xd="@firebase/app",j_="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=new ih("@firebase/app"),k1="@firebase/app-compat",U1="@firebase/analytics-compat",x1="@firebase/analytics",L1="@firebase/app-check-compat",z1="@firebase/app-check",B1="@firebase/auth",q1="@firebase/auth-compat",j1="@firebase/database",H1="@firebase/data-connect",G1="@firebase/database-compat",F1="@firebase/functions",Q1="@firebase/functions-compat",K1="@firebase/installations",Y1="@firebase/installations-compat",X1="@firebase/messaging",$1="@firebase/messaging-compat",Z1="@firebase/performance",J1="@firebase/performance-compat",W1="@firebase/remote-config",tb="@firebase/remote-config-compat",eb="@firebase/storage",nb="@firebase/storage-compat",ib="@firebase/firestore",rb="@firebase/ai",sb="@firebase/firestore-compat",ab="firebase",ob="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="[DEFAULT]",lb={[Xd]:"fire-core",[k1]:"fire-core-compat",[x1]:"fire-analytics",[U1]:"fire-analytics-compat",[z1]:"fire-app-check",[L1]:"fire-app-check-compat",[B1]:"fire-auth",[q1]:"fire-auth-compat",[j1]:"fire-rtdb",[H1]:"fire-data-connect",[G1]:"fire-rtdb-compat",[F1]:"fire-fn",[Q1]:"fire-fn-compat",[K1]:"fire-iid",[Y1]:"fire-iid-compat",[X1]:"fire-fcm",[$1]:"fire-fcm-compat",[Z1]:"fire-perf",[J1]:"fire-perf-compat",[W1]:"fire-rc",[tb]:"fire-rc-compat",[eb]:"fire-gcs",[nb]:"fire-gcs-compat",[ib]:"fire-fst",[sb]:"fire-fst-compat",[rb]:"fire-vertex","fire-js":"fire-js",[ab]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=new Map,ub=new Map,Zd=new Map;function H_(r,t){try{r.container.addComponent(t)}catch(n){Qi.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function gi(r){const t=r.name;if(Zd.has(t))return Qi.debug(`There were multiple attempts to register component ${t}.`),!1;Zd.set(t,r);for(const n of kc.values())H_(n,r);for(const n of ub.values())H_(n,r);return!0}function Bs(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function li(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vr=new zs("app","Firebase",cb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(t,n,s){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=ob;function DT(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s={name:$d,automaticDataCollectionEnabled:!0,...t},l=s.name;if(typeof l!="string"||!l)throw Vr.create("bad-app-name",{appName:String(l)});if(n||(n=vT()),!n)throw Vr.create("no-options");const c=kc.get(l);if(c){if(xr(n,c.options)&&xr(s,c.config))return c;throw Vr.create("duplicate-app",{appName:l})}const d=new _1(l);for(const p of Zd.values())d.addComponent(p);const g=new hb(n,s,d);return kc.set(l,g),g}function Am(r=$d){const t=kc.get(r);if(!t&&r===$d&&vT())return DT();if(!t)throw Vr.create("no-app",{appName:r});return t}function Vn(r,t,n){let s=lb[r]??r;n&&(s+=`-${n}`);const l=s.match(/\s|\//),c=t.match(/\s|\//);if(l||c){const d=[`Unable to register library "${s}" with version "${t}":`];l&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Qi.warn(d.join(" "));return}gi(new jn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb="firebase-heartbeat-database",db=1,Il="firebase-heartbeat-store";let Ud=null;function NT(){return Ud||(Ud=CT(fb,db,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Il)}catch(n){console.warn(n)}}}}).catch(r=>{throw Vr.create("idb-open",{originalErrorMessage:r.message})})),Ud}async function mb(r){try{const n=(await NT()).transaction(Il),s=await n.objectStore(Il).get(OT(r));return await n.done,s}catch(t){if(t instanceof Hn)Qi.warn(t.message);else{const n=Vr.create("idb-get",{originalErrorMessage:t?.message});Qi.warn(n.message)}}}async function G_(r,t){try{const s=(await NT()).transaction(Il,"readwrite");await s.objectStore(Il).put(t,OT(r)),await s.done}catch(n){if(n instanceof Hn)Qi.warn(n.message);else{const s=Vr.create("idb-set",{originalErrorMessage:n?.message});Qi.warn(s.message)}}}function OT(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=1024,pb=30;class yb{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vb(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=F_();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(l=>l.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>pb){const l=Tb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){Qi.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=F_(),{heartbeatsToSend:n,unsentEntries:s}=_b(this._heartbeatsCache.heartbeats),l=Pc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Qi.warn(t),""}}}function F_(){return new Date().toISOString().substring(0,10)}function _b(r,t=gb){const n=[];let s=r.slice();for(const l of r){const c=n.find(d=>d.agent===l.agent);if(c){if(c.dates.push(l.date),Q_(n)>t){c.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),Q_(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class vb{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bT()?wT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mb(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return G_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return G_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Q_(r){return Pc(JSON.stringify({version:2,heartbeats:r})).length}function Tb(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(r){gi(new jn("platform-logger",t=>new V1(t),"PRIVATE")),gi(new jn("heartbeat",t=>new yb(t),"PRIVATE")),Vn(Xd,j_,r),Vn(Xd,j_,"esm2020"),Vn("fire-js","")}Eb("");var K_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pr,MT;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(V,S){function R(){}R.prototype=S.prototype,V.D=S.prototype,V.prototype=new R,V.prototype.constructor=V,V.C=function(O,M,k){for(var w=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)w[Pe-2]=arguments[Pe];return S.prototype[M].apply(O,w)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(V,S,R){R||(R=0);var O=Array(16);if(typeof S=="string")for(var M=0;16>M;++M)O[M]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(M=0;16>M;++M)O[M]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=V.g[0],R=V.g[1],M=V.g[2];var k=V.g[3],w=S+(k^R&(M^k))+O[0]+3614090360&4294967295;S=R+(w<<7&4294967295|w>>>25),w=k+(M^S&(R^M))+O[1]+3905402710&4294967295,k=S+(w<<12&4294967295|w>>>20),w=M+(R^k&(S^R))+O[2]+606105819&4294967295,M=k+(w<<17&4294967295|w>>>15),w=R+(S^M&(k^S))+O[3]+3250441966&4294967295,R=M+(w<<22&4294967295|w>>>10),w=S+(k^R&(M^k))+O[4]+4118548399&4294967295,S=R+(w<<7&4294967295|w>>>25),w=k+(M^S&(R^M))+O[5]+1200080426&4294967295,k=S+(w<<12&4294967295|w>>>20),w=M+(R^k&(S^R))+O[6]+2821735955&4294967295,M=k+(w<<17&4294967295|w>>>15),w=R+(S^M&(k^S))+O[7]+4249261313&4294967295,R=M+(w<<22&4294967295|w>>>10),w=S+(k^R&(M^k))+O[8]+1770035416&4294967295,S=R+(w<<7&4294967295|w>>>25),w=k+(M^S&(R^M))+O[9]+2336552879&4294967295,k=S+(w<<12&4294967295|w>>>20),w=M+(R^k&(S^R))+O[10]+4294925233&4294967295,M=k+(w<<17&4294967295|w>>>15),w=R+(S^M&(k^S))+O[11]+2304563134&4294967295,R=M+(w<<22&4294967295|w>>>10),w=S+(k^R&(M^k))+O[12]+1804603682&4294967295,S=R+(w<<7&4294967295|w>>>25),w=k+(M^S&(R^M))+O[13]+4254626195&4294967295,k=S+(w<<12&4294967295|w>>>20),w=M+(R^k&(S^R))+O[14]+2792965006&4294967295,M=k+(w<<17&4294967295|w>>>15),w=R+(S^M&(k^S))+O[15]+1236535329&4294967295,R=M+(w<<22&4294967295|w>>>10),w=S+(M^k&(R^M))+O[1]+4129170786&4294967295,S=R+(w<<5&4294967295|w>>>27),w=k+(R^M&(S^R))+O[6]+3225465664&4294967295,k=S+(w<<9&4294967295|w>>>23),w=M+(S^R&(k^S))+O[11]+643717713&4294967295,M=k+(w<<14&4294967295|w>>>18),w=R+(k^S&(M^k))+O[0]+3921069994&4294967295,R=M+(w<<20&4294967295|w>>>12),w=S+(M^k&(R^M))+O[5]+3593408605&4294967295,S=R+(w<<5&4294967295|w>>>27),w=k+(R^M&(S^R))+O[10]+38016083&4294967295,k=S+(w<<9&4294967295|w>>>23),w=M+(S^R&(k^S))+O[15]+3634488961&4294967295,M=k+(w<<14&4294967295|w>>>18),w=R+(k^S&(M^k))+O[4]+3889429448&4294967295,R=M+(w<<20&4294967295|w>>>12),w=S+(M^k&(R^M))+O[9]+568446438&4294967295,S=R+(w<<5&4294967295|w>>>27),w=k+(R^M&(S^R))+O[14]+3275163606&4294967295,k=S+(w<<9&4294967295|w>>>23),w=M+(S^R&(k^S))+O[3]+4107603335&4294967295,M=k+(w<<14&4294967295|w>>>18),w=R+(k^S&(M^k))+O[8]+1163531501&4294967295,R=M+(w<<20&4294967295|w>>>12),w=S+(M^k&(R^M))+O[13]+2850285829&4294967295,S=R+(w<<5&4294967295|w>>>27),w=k+(R^M&(S^R))+O[2]+4243563512&4294967295,k=S+(w<<9&4294967295|w>>>23),w=M+(S^R&(k^S))+O[7]+1735328473&4294967295,M=k+(w<<14&4294967295|w>>>18),w=R+(k^S&(M^k))+O[12]+2368359562&4294967295,R=M+(w<<20&4294967295|w>>>12),w=S+(R^M^k)+O[5]+4294588738&4294967295,S=R+(w<<4&4294967295|w>>>28),w=k+(S^R^M)+O[8]+2272392833&4294967295,k=S+(w<<11&4294967295|w>>>21),w=M+(k^S^R)+O[11]+1839030562&4294967295,M=k+(w<<16&4294967295|w>>>16),w=R+(M^k^S)+O[14]+4259657740&4294967295,R=M+(w<<23&4294967295|w>>>9),w=S+(R^M^k)+O[1]+2763975236&4294967295,S=R+(w<<4&4294967295|w>>>28),w=k+(S^R^M)+O[4]+1272893353&4294967295,k=S+(w<<11&4294967295|w>>>21),w=M+(k^S^R)+O[7]+4139469664&4294967295,M=k+(w<<16&4294967295|w>>>16),w=R+(M^k^S)+O[10]+3200236656&4294967295,R=M+(w<<23&4294967295|w>>>9),w=S+(R^M^k)+O[13]+681279174&4294967295,S=R+(w<<4&4294967295|w>>>28),w=k+(S^R^M)+O[0]+3936430074&4294967295,k=S+(w<<11&4294967295|w>>>21),w=M+(k^S^R)+O[3]+3572445317&4294967295,M=k+(w<<16&4294967295|w>>>16),w=R+(M^k^S)+O[6]+76029189&4294967295,R=M+(w<<23&4294967295|w>>>9),w=S+(R^M^k)+O[9]+3654602809&4294967295,S=R+(w<<4&4294967295|w>>>28),w=k+(S^R^M)+O[12]+3873151461&4294967295,k=S+(w<<11&4294967295|w>>>21),w=M+(k^S^R)+O[15]+530742520&4294967295,M=k+(w<<16&4294967295|w>>>16),w=R+(M^k^S)+O[2]+3299628645&4294967295,R=M+(w<<23&4294967295|w>>>9),w=S+(M^(R|~k))+O[0]+4096336452&4294967295,S=R+(w<<6&4294967295|w>>>26),w=k+(R^(S|~M))+O[7]+1126891415&4294967295,k=S+(w<<10&4294967295|w>>>22),w=M+(S^(k|~R))+O[14]+2878612391&4294967295,M=k+(w<<15&4294967295|w>>>17),w=R+(k^(M|~S))+O[5]+4237533241&4294967295,R=M+(w<<21&4294967295|w>>>11),w=S+(M^(R|~k))+O[12]+1700485571&4294967295,S=R+(w<<6&4294967295|w>>>26),w=k+(R^(S|~M))+O[3]+2399980690&4294967295,k=S+(w<<10&4294967295|w>>>22),w=M+(S^(k|~R))+O[10]+4293915773&4294967295,M=k+(w<<15&4294967295|w>>>17),w=R+(k^(M|~S))+O[1]+2240044497&4294967295,R=M+(w<<21&4294967295|w>>>11),w=S+(M^(R|~k))+O[8]+1873313359&4294967295,S=R+(w<<6&4294967295|w>>>26),w=k+(R^(S|~M))+O[15]+4264355552&4294967295,k=S+(w<<10&4294967295|w>>>22),w=M+(S^(k|~R))+O[6]+2734768916&4294967295,M=k+(w<<15&4294967295|w>>>17),w=R+(k^(M|~S))+O[13]+1309151649&4294967295,R=M+(w<<21&4294967295|w>>>11),w=S+(M^(R|~k))+O[4]+4149444226&4294967295,S=R+(w<<6&4294967295|w>>>26),w=k+(R^(S|~M))+O[11]+3174756917&4294967295,k=S+(w<<10&4294967295|w>>>22),w=M+(S^(k|~R))+O[2]+718787259&4294967295,M=k+(w<<15&4294967295|w>>>17),w=R+(k^(M|~S))+O[9]+3951481745&4294967295,V.g[0]=V.g[0]+S&4294967295,V.g[1]=V.g[1]+(M+(w<<21&4294967295|w>>>11))&4294967295,V.g[2]=V.g[2]+M&4294967295,V.g[3]=V.g[3]+k&4294967295}s.prototype.u=function(V,S){S===void 0&&(S=V.length);for(var R=S-this.blockSize,O=this.B,M=this.h,k=0;k<S;){if(M==0)for(;k<=R;)l(this,V,k),k+=this.blockSize;if(typeof V=="string"){for(;k<S;)if(O[M++]=V.charCodeAt(k++),M==this.blockSize){l(this,O),M=0;break}}else for(;k<S;)if(O[M++]=V[k++],M==this.blockSize){l(this,O),M=0;break}}this.h=M,this.o+=S},s.prototype.v=function(){var V=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);V[0]=128;for(var S=1;S<V.length-8;++S)V[S]=0;var R=8*this.o;for(S=V.length-8;S<V.length;++S)V[S]=R&255,R/=256;for(this.u(V),V=Array(16),S=R=0;4>S;++S)for(var O=0;32>O;O+=8)V[R++]=this.g[S]>>>O&255;return V};function c(V,S){var R=g;return Object.prototype.hasOwnProperty.call(R,V)?R[V]:R[V]=S(V)}function d(V,S){this.h=S;for(var R=[],O=!0,M=V.length-1;0<=M;M--){var k=V[M]|0;O&&k==S||(R[M]=k,O=!1)}this.g=R}var g={};function p(V){return-128<=V&&128>V?c(V,function(S){return new d([S|0],0>S?-1:0)}):new d([V|0],0>V?-1:0)}function y(V){if(isNaN(V)||!isFinite(V))return I;if(0>V)return Z(y(-V));for(var S=[],R=1,O=0;V>=R;O++)S[O]=V/R|0,R*=4294967296;return new d(S,0)}function A(V,S){if(V.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(V.charAt(0)=="-")return Z(A(V.substring(1),S));if(0<=V.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(S,8)),O=I,M=0;M<V.length;M+=8){var k=Math.min(8,V.length-M),w=parseInt(V.substring(M,M+k),S);8>k?(k=y(Math.pow(S,k)),O=O.j(k).add(y(w))):(O=O.j(R),O=O.add(y(w)))}return O}var I=p(0),C=p(1),G=p(16777216);r=d.prototype,r.m=function(){if(nt(this))return-Z(this).m();for(var V=0,S=1,R=0;R<this.g.length;R++){var O=this.i(R);V+=(0<=O?O:4294967296+O)*S,S*=4294967296}return V},r.toString=function(V){if(V=V||10,2>V||36<V)throw Error("radix out of range: "+V);if($(this))return"0";if(nt(this))return"-"+Z(this).toString(V);for(var S=y(Math.pow(V,6)),R=this,O="";;){var M=qt(R,S).g;R=Tt(R,M.j(S));var k=((0<R.g.length?R.g[0]:R.h)>>>0).toString(V);if(R=M,$(R))return k+O;for(;6>k.length;)k="0"+k;O=k+O}},r.i=function(V){return 0>V?0:V<this.g.length?this.g[V]:this.h};function $(V){if(V.h!=0)return!1;for(var S=0;S<V.g.length;S++)if(V.g[S]!=0)return!1;return!0}function nt(V){return V.h==-1}r.l=function(V){return V=Tt(this,V),nt(V)?-1:$(V)?0:1};function Z(V){for(var S=V.g.length,R=[],O=0;O<S;O++)R[O]=~V.g[O];return new d(R,~V.h).add(C)}r.abs=function(){return nt(this)?Z(this):this},r.add=function(V){for(var S=Math.max(this.g.length,V.g.length),R=[],O=0,M=0;M<=S;M++){var k=O+(this.i(M)&65535)+(V.i(M)&65535),w=(k>>>16)+(this.i(M)>>>16)+(V.i(M)>>>16);O=w>>>16,k&=65535,w&=65535,R[M]=w<<16|k}return new d(R,R[R.length-1]&-2147483648?-1:0)};function Tt(V,S){return V.add(Z(S))}r.j=function(V){if($(this)||$(V))return I;if(nt(this))return nt(V)?Z(this).j(Z(V)):Z(Z(this).j(V));if(nt(V))return Z(this.j(Z(V)));if(0>this.l(G)&&0>V.l(G))return y(this.m()*V.m());for(var S=this.g.length+V.g.length,R=[],O=0;O<2*S;O++)R[O]=0;for(O=0;O<this.g.length;O++)for(var M=0;M<V.g.length;M++){var k=this.i(O)>>>16,w=this.i(O)&65535,Pe=V.i(M)>>>16,re=V.i(M)&65535;R[2*O+2*M]+=w*re,gt(R,2*O+2*M),R[2*O+2*M+1]+=k*re,gt(R,2*O+2*M+1),R[2*O+2*M+1]+=w*Pe,gt(R,2*O+2*M+1),R[2*O+2*M+2]+=k*Pe,gt(R,2*O+2*M+2)}for(O=0;O<S;O++)R[O]=R[2*O+1]<<16|R[2*O];for(O=S;O<2*S;O++)R[O]=0;return new d(R,0)};function gt(V,S){for(;(V[S]&65535)!=V[S];)V[S+1]+=V[S]>>>16,V[S]&=65535,S++}function ct(V,S){this.g=V,this.h=S}function qt(V,S){if($(S))throw Error("division by zero");if($(V))return new ct(I,I);if(nt(V))return S=qt(Z(V),S),new ct(Z(S.g),Z(S.h));if(nt(S))return S=qt(V,Z(S)),new ct(Z(S.g),S.h);if(30<V.g.length){if(nt(V)||nt(S))throw Error("slowDivide_ only works with positive integers.");for(var R=C,O=S;0>=O.l(V);)R=Et(R),O=Et(O);var M=Lt(R,1),k=Lt(O,1);for(O=Lt(O,2),R=Lt(R,2);!$(O);){var w=k.add(O);0>=w.l(V)&&(M=M.add(R),k=w),O=Lt(O,1),R=Lt(R,1)}return S=Tt(V,M.j(S)),new ct(M,S)}for(M=I;0<=V.l(S);){for(R=Math.max(1,Math.floor(V.m()/S.m())),O=Math.ceil(Math.log(R)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),k=y(R),w=k.j(S);nt(w)||0<w.l(V);)R-=O,k=y(R),w=k.j(S);$(k)&&(k=C),M=M.add(k),V=Tt(V,w)}return new ct(M,V)}r.A=function(V){return qt(this,V).h},r.and=function(V){for(var S=Math.max(this.g.length,V.g.length),R=[],O=0;O<S;O++)R[O]=this.i(O)&V.i(O);return new d(R,this.h&V.h)},r.or=function(V){for(var S=Math.max(this.g.length,V.g.length),R=[],O=0;O<S;O++)R[O]=this.i(O)|V.i(O);return new d(R,this.h|V.h)},r.xor=function(V){for(var S=Math.max(this.g.length,V.g.length),R=[],O=0;O<S;O++)R[O]=this.i(O)^V.i(O);return new d(R,this.h^V.h)};function Et(V){for(var S=V.g.length+1,R=[],O=0;O<S;O++)R[O]=V.i(O)<<1|V.i(O-1)>>>31;return new d(R,V.h)}function Lt(V,S){var R=S>>5;S%=32;for(var O=V.g.length-R,M=[],k=0;k<O;k++)M[k]=0<S?V.i(k+R)>>>S|V.i(k+R+1)<<32-S:V.i(k+R);return new d(M,V.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,MT=s,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=y,d.fromString=A,Pr=d}).apply(typeof K_<"u"?K_:typeof self<"u"?self:typeof window<"u"?window:{});var gc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var VT,yl,PT,bc,Jd,kT,UT,xT;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof gc=="object"&&gc];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function l(u,m){if(m)t:{var _=s;u=u.split(".");for(var E=0;E<u.length-1;E++){var U=u[E];if(!(U in _))break t;_=_[U]}u=u[u.length-1],E=_[u],m=m(E),m!=E&&m!=null&&t(_,u,{configurable:!0,writable:!0,value:m})}}function c(u,m){u instanceof String&&(u+="");var _=0,E=!1,U={next:function(){if(!E&&_<u.length){var q=_++;return{value:m(q,u[q]),done:!1}}return E=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}l("Array.prototype.values",function(u){return u||function(){return c(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},g=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function A(u,m,_){return u.call.apply(u.bind,arguments)}function I(u,m,_){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,E),u.apply(m,U)}}return function(){return u.apply(m,arguments)}}function C(u,m,_){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:I,C.apply(null,arguments)}function G(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var E=_.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function $(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(E,U,q){for(var W=Array(arguments.length-2),Ot=2;Ot<arguments.length;Ot++)W[Ot-2]=arguments[Ot];return m.prototype[U].apply(E,W)}}function nt(u){const m=u.length;if(0<m){const _=Array(m);for(let E=0;E<m;E++)_[E]=u[E];return _}return[]}function Z(u,m){for(let _=1;_<arguments.length;_++){const E=arguments[_];if(p(E)){const U=u.length||0,q=E.length||0;u.length=U+q;for(let W=0;W<q;W++)u[U+W]=E[W]}else u.push(E)}}class Tt{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function gt(u){return/^[\s\xa0]*$/.test(u)}function ct(){var u=g.navigator;return u&&(u=u.userAgent)?u:""}function qt(u){return qt[" "](u),u}qt[" "]=function(){};var Et=ct().indexOf("Gecko")!=-1&&!(ct().toLowerCase().indexOf("webkit")!=-1&&ct().indexOf("Edge")==-1)&&!(ct().indexOf("Trident")!=-1||ct().indexOf("MSIE")!=-1)&&ct().indexOf("Edge")==-1;function Lt(u,m,_){for(const E in u)m.call(_,u[E],E,u)}function V(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function S(u){const m={};for(const _ in u)m[_]=u[_];return m}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(u,m){let _,E;for(let U=1;U<arguments.length;U++){E=arguments[U];for(_ in E)u[_]=E[_];for(let q=0;q<R.length;q++)_=R[q],Object.prototype.hasOwnProperty.call(E,_)&&(u[_]=E[_])}}function M(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function k(u){g.setTimeout(()=>{throw u},0)}function w(){var u=Ut;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Pe{constructor(){this.h=this.g=null}add(m,_){const E=re.get();E.set(m,_),this.h?this.h.next=E:this.g=E,this.h=E}}var re=new Tt(()=>new j,u=>u.reset());class j{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let tt,ot=!1,Ut=new Pe,D=()=>{const u=g.Promise.resolve(void 0);tt=()=>{u.then(Y)}};var Y=()=>{for(var u;u=w();){try{u.h.call(u.g)}catch(_){k(_)}var m=re;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ot=!1};function et(){this.s=this.s,this.C=this.C}et.prototype.s=!1,et.prototype.ma=function(){this.s||(this.s=!0,this.N())},et.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function J(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var lt=(function(){if(!g.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};g.addEventListener("test",_,m),g.removeEventListener("test",_,m)}catch{}return u})();function bt(u,m){if(J.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Et){t:{try{qt(m.nodeName);var U=!0;break t}catch{}U=!1}U||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:yt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&bt.aa.h.call(this)}}$(bt,J);var yt={2:"touch",3:"pen",4:"mouse"};bt.prototype.h=function(){bt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var we="closure_listenable_"+(1e6*Math.random()|0),$t=0;function Gn(u,m,_,E,U){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!E,this.ha=U,this.key=++$t,this.da=this.fa=!1}function Zi(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function _i(u){this.src=u,this.g={},this.h=0}_i.prototype.add=function(u,m,_,E,U){var q=u.toString();u=this.g[q],u||(u=this.g[q]=[],this.h++);var W=Kr(u,m,E,U);return-1<W?(m=u[W],_||(m.fa=!1)):(m=new Gn(m,this.src,q,!!E,U),m.fa=_,u.push(m)),m};function Qr(u,m){var _=m.type;if(_ in u.g){var E=u.g[_],U=Array.prototype.indexOf.call(E,m,void 0),q;(q=0<=U)&&Array.prototype.splice.call(E,U,1),q&&(Zi(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Kr(u,m,_,E){for(var U=0;U<u.length;++U){var q=u[U];if(!q.da&&q.listener==m&&q.capture==!!_&&q.ha==E)return U}return-1}var Yr="closure_lm_"+(1e6*Math.random()|0),ao={};function Fl(u,m,_,E,U){if(Array.isArray(m)){for(var q=0;q<m.length;q++)Fl(u,m[q],_,E,U);return null}return _=Ql(_),u&&u[we]?u.K(m,_,y(E)?!!E.capture:!1,U):vn(u,m,_,!1,E,U)}function vn(u,m,_,E,U,q){if(!m)throw Error("Invalid event type");var W=y(U)?!!U.capture:!!U,Ot=Gs(u);if(Ot||(u[Yr]=Ot=new _i(u)),_=Ot.add(m,_,E,W,q),_.proxy)return _;if(E=wh(),_.proxy=E,E.src=u,E.listener=_,u.addEventListener)lt||(U=W),U===void 0&&(U=!1),u.addEventListener(m.toString(),E,U);else if(u.attachEvent)u.attachEvent(Xr(m.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return _}function wh(){function u(_){return m.call(u.src,u.listener,_)}const m=Rh;return u}function oo(u,m,_,E,U){if(Array.isArray(m))for(var q=0;q<m.length;q++)oo(u,m[q],_,E,U);else E=y(E)?!!E.capture:!!E,_=Ql(_),u&&u[we]?(u=u.i,m=String(m).toString(),m in u.g&&(q=u.g[m],_=Kr(q,_,E,U),-1<_&&(Zi(q[_]),Array.prototype.splice.call(q,_,1),q.length==0&&(delete u.g[m],u.h--)))):u&&(u=Gs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Kr(m,_,E,U)),(_=-1<u?m[u]:null)&&Hs(_))}function Hs(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[we])Qr(m.i,u);else{var _=u.type,E=u.proxy;m.removeEventListener?m.removeEventListener(_,E,u.capture):m.detachEvent?m.detachEvent(Xr(_),E):m.addListener&&m.removeListener&&m.removeListener(E),(_=Gs(m))?(Qr(_,u),_.h==0&&(_.src=null,m[Yr]=null)):Zi(u)}}}function Xr(u){return u in ao?ao[u]:ao[u]="on"+u}function Rh(u,m){if(u.da)u=!0;else{m=new bt(m,this);var _=u.listener,E=u.ha||u.src;u.fa&&Hs(u),u=_.call(E,m)}return u}function Gs(u){return u=u[Yr],u instanceof _i?u:null}var lo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ql(u){return typeof u=="function"?u:(u[lo]||(u[lo]=function(m){return u.handleEvent(m)}),u[lo])}function se(){et.call(this),this.i=new _i(this),this.M=this,this.F=null}$(se,et),se.prototype[we]=!0,se.prototype.removeEventListener=function(u,m,_,E){oo(this,u,m,_,E)};function jt(u,m){var _,E=u.F;if(E)for(_=[];E;E=E.F)_.push(E);if(u=u.M,E=m.type||m,typeof m=="string")m=new J(m,u);else if(m instanceof J)m.target=m.target||u;else{var U=m;m=new J(E,u),O(m,U)}if(U=!0,_)for(var q=_.length-1;0<=q;q--){var W=m.g=_[q];U=ln(W,E,!0,m)&&U}if(W=m.g=u,U=ln(W,E,!0,m)&&U,U=ln(W,E,!1,m)&&U,_)for(q=0;q<_.length;q++)W=m.g=_[q],U=ln(W,E,!1,m)&&U}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],E=0;E<_.length;E++)Zi(_[E]);delete u.g[m],u.h--}}this.F=null},se.prototype.K=function(u,m,_,E){return this.i.add(String(u),m,!1,_,E)},se.prototype.L=function(u,m,_,E){return this.i.add(String(u),m,!0,_,E)};function ln(u,m,_,E){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,q=0;q<m.length;++q){var W=m[q];if(W&&!W.da&&W.capture==_){var Ot=W.listener,ve=W.ha||W.src;W.fa&&Qr(u.i,W),U=Ot.call(ve,E)!==!1&&U}}return U&&!E.defaultPrevented}function He(u,m,_){if(typeof u=="function")_&&(u=C(u,_));else if(u&&typeof u.handleEvent=="function")u=C(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:g.setTimeout(u,m||0)}function Kl(u){u.g=He(()=>{u.g=null,u.i&&(u.i=!1,Kl(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Ih extends et{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Kl(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $r(u){et.call(this),this.h=u,this.g={}}$($r,et);var Zr=[];function Jr(u){Lt(u.g,function(m,_){this.g.hasOwnProperty(_)&&Hs(m)},u),u.g={}}$r.prototype.N=function(){$r.aa.N.call(this),Jr(this)},$r.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pn=g.JSON.stringify,Fs=g.JSON.parse,Wr=class{stringify(u){return g.JSON.stringify(u,void 0)}parse(u){return g.JSON.parse(u,void 0)}};function uo(){}uo.prototype.h=null;function co(u){return u.h||(u.h=u.i())}function ho(){}var vi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ti(){J.call(this,"d")}$(Ti,J);function fo(){J.call(this,"c")}$(fo,J);var Fn={},mo=null;function Ji(){return mo=mo||new se}Fn.La="serverreachability";function Qs(u){J.call(this,Fn.La,u)}$(Qs,J);function Wi(u){const m=Ji();jt(m,new Qs(m))}Fn.STAT_EVENT="statevent";function Yl(u,m){J.call(this,Fn.STAT_EVENT,u),this.stat=m}$(Yl,J);function te(u){const m=Ji();jt(m,new Yl(m,u))}Fn.Ma="timingevent";function _e(u,m){J.call(this,Fn.Ma,u),this.size=m}$(_e,J);function fe(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){u()},m)}function Tn(){this.g=!0}Tn.prototype.xa=function(){this.g=!1};function go(u,m,_,E,U,q){u.info(function(){if(u.g)if(q)for(var W="",Ot=q.split("&"),ve=0;ve<Ot.length;ve++){var Mt=Ot[ve].split("=");if(1<Mt.length){var Ie=Mt[0];Mt=Mt[1];var Te=Ie.split("_");W=2<=Te.length&&Te[1]=="type"?W+(Ie+"="+Mt+"&"):W+(Ie+"=redacted&")}}else W=null;else W=q;return"XMLHTTP REQ ("+E+") [attempt "+U+"]: "+m+`
`+_+`
`+W})}function Ch(u,m,_,E,U,q,W){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+U+"]: "+m+`
`+_+`
`+q+" "+W})}function tr(u,m,_,E){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+ts(u,_)+(E?" "+E:"")})}function Xl(u,m){u.info(function(){return"TIMEOUT: "+m})}Tn.prototype.info=function(){};function ts(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var E=_[u];if(!(2>E.length)){var U=E[1];if(Array.isArray(U)&&!(1>U.length)){var q=U[0];if(q!="noop"&&q!="stop"&&q!="close")for(var W=1;W<U.length;W++)U[W]=""}}}}return Pn(_)}catch{return m}}var er={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ei={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qn;function Kn(){}$(Kn,uo),Kn.prototype.g=function(){return new XMLHttpRequest},Kn.prototype.i=function(){return{}},Qn=new Kn;function Ze(u,m,_,E){this.j=u,this.i=m,this.l=_,this.R=E||1,this.U=new $r(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new le}function le(){this.i=null,this.g="",this.h=!1}var po={},Ks={};function kn(u,m,_){u.L=1,u.v=ss(un(m)),u.m=_,u.P=!0,Ai(u,null)}function Ai(u,m){u.F=Date.now(),es(u),u.A=un(u.v);var _=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Ao(_.i,"t",E),u.C=0,_=u.j.J,u.h=new le,u.g=hu(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Ih(C(u.Y,u,u.g),u.O)),m=u.U,_=u.g,E=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(Zr[0]=U.toString()),U=Zr);for(var q=0;q<U.length;q++){var W=Fl(_,U[q],E||m.handleEvent,!1,m.h||m);if(!W)break;m.g[W.key]=W}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Wi(),go(u.i,u.u,u.A,u.l,u.R,u.m)}Ze.prototype.ca=function(u){u=u.target;const m=this.M;m&&bn(u)==3?m.j():this.Y(u)},Ze.prototype.Y=function(u){try{if(u==this.g)t:{const Te=bn(this.g);var m=this.g.Ba();const Ni=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||iu(this.g)))){this.J||Te!=4||m==7||(m==8||0>=Ni?Wi(3):Wi(2)),nr(this);var _=this.g.Z();this.X=_;e:if($l(this)){var E=iu(this.g);u="";var U=E.length,q=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ke(this),Yn(this);var W="";break e}this.h.i=new g.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,u+=this.h.i.decode(E[m],{stream:!(q&&m==U-1)});E.length=0,this.h.g+=u,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=_==200,Ch(this.i,this.u,this.A,this.l,this.R,Te,_),this.o){if(this.T&&!this.K){e:{if(this.g){var Ot,ve=this.g;if((Ot=ve.g?ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!gt(Ot)){var Mt=Ot;break e}}Mt=null}if(_=Mt)tr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ns(this,_);else{this.o=!1,this.s=3,te(12),ke(this),Yn(this);break t}}if(this.P){_=!0;let Ue;for(;!this.J&&this.C<W.length;)if(Ue=Zl(this,W),Ue==Ks){Te==4&&(this.s=4,te(14),_=!1),tr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ue==po){this.s=4,te(15),tr(this.i,this.l,W,"[Invalid Chunk]"),_=!1;break}else tr(this.i,this.l,Ue,null),ns(this,Ue);if($l(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||W.length!=0||this.h.h||(this.s=1,te(16),_=!1),this.o=this.o&&_,!_)tr(this.i,this.l,W,"[Invalid Chunked Response]"),ke(this),Yn(this);else if(0<W.length&&!this.W){this.W=!0;var Ie=this.j;Ie.g==this&&Ie.ba&&!Ie.M&&(Ie.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),ds(Ie),Ie.M=!0,te(11))}}else tr(this.i,this.l,W,null),ns(this,W);Te==4&&ke(this),this.o&&!this.J&&(Te==4?lu(this.j,this):(this.o=!1,es(this)))}else Vh(this.g),_==400&&0<W.indexOf("Unknown SID")?(this.s=3,te(12)):(this.s=0,te(13)),ke(this),Yn(this)}}}catch{}finally{}};function $l(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Zl(u,m){var _=u.C,E=m.indexOf(`
`,_);return E==-1?Ks:(_=Number(m.substring(_,E)),isNaN(_)?po:(E+=1,E+_>m.length?Ks:(m=m.slice(E,E+_),u.C=E+_,m)))}Ze.prototype.cancel=function(){this.J=!0,ke(this)};function es(u){u.S=Date.now()+u.I,Jl(u,u.I)}function Jl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=fe(C(u.ba,u),m)}function nr(u){u.B&&(g.clearTimeout(u.B),u.B=null)}Ze.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Xl(this.i,this.A),this.L!=2&&(Wi(),te(17)),ke(this),this.s=2,Yn(this)):Jl(this,this.S-u)};function Yn(u){u.j.G==0||u.J||lu(u.j,u)}function ke(u){nr(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Jr(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function ns(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||yo(_.h,u))){if(!u.K&&yo(_.h,u)&&_.G==3){try{var E=_.Da.g.parse(m)}catch{E=null}if(Array.isArray(E)&&E.length==3){var U=E;if(U[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)sa(_),ia(_);else break t;Io(_),te(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=fe(C(_.Za,_),6e3));if(1>=Xs(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Di(_,11)}else if((u.K||_.g==u)&&sa(_),!gt(m))for(U=_.Da.g.parse(m),m=0;m<U.length;m++){let Mt=U[m];if(_.T=Mt[0],Mt=Mt[1],_.G==2)if(Mt[0]=="c"){_.K=Mt[1],_.ia=Mt[2];const Ie=Mt[3];Ie!=null&&(_.la=Ie,_.j.info("VER="+_.la));const Te=Mt[4];Te!=null&&(_.Aa=Te,_.j.info("SVER="+_.Aa));const Ni=Mt[5];Ni!=null&&typeof Ni=="number"&&0<Ni&&(E=1.5*Ni,_.L=E,_.j.info("backChannelRequestTimeoutMs_="+E)),E=_;const Ue=u.g;if(Ue){const ei=Ue.g?Ue.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ei){var q=E.h;q.g||ei.indexOf("spdy")==-1&&ei.indexOf("quic")==-1&&ei.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&($s(q,q.h),q.h=null))}if(E.D){const Do=Ue.g?Ue.g.getResponseHeader("X-HTTP-Session-Id"):null;Do&&(E.ya=Do,Ft(E.I,E.D,Do))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),E=_;var W=u;if(E.qa=cu(E,E.J?E.ia:null,E.W),W.K){Je(E.h,W);var Ot=W,ve=E.L;ve&&(Ot.I=ve),Ot.B&&(nr(Ot),es(Ot)),E.g=W}else au(E);0<_.i.length&&ra(_)}else Mt[0]!="stop"&&Mt[0]!="close"||Di(_,7);else _.G==3&&(Mt[0]=="stop"||Mt[0]=="close"?Mt[0]=="stop"?Di(_,7):wo(_):Mt[0]!="noop"&&_.l&&_.l.ta(Mt),_.v=0)}}Wi(4)}catch{}}var Wl=class{constructor(u,m){this.g=u,this.map=m}};function Si(u){this.l=u||10,g.PerformanceNavigationTiming?(u=g.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ys(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Xs(u){return u.h?1:u.g?u.g.size:0}function yo(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function $s(u,m){u.g?u.g.add(m):u.h=m}function Je(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Si.prototype.cancel=function(){if(this.i=_o(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function _o(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return nt(u.i)}function Dh(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,E=0;E<_;E++)m.push(u[E]);return m}m=[],_=0;for(E in u)m[_++]=u[E];return m}function Zs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const E in u)m[_++]=E;return m}}}function vo(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Zs(u),E=Dh(u),U=E.length,q=0;q<U;q++)m.call(void 0,E[q],_&&_[q],u)}var is=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nh(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var E=u[_].indexOf("="),U=null;if(0<=E){var q=u[_].substring(0,E);U=u[_].substring(E+1)}else q=u[_];m(q,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function de(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof de){this.h=u.h,rs(this,u.j),this.o=u.o,this.g=u.g,ir(this,u.s),this.l=u.l;var m=u.i,_=new wi;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),bi(this,_),this.m=u.m}else u&&(m=String(u).match(is))?(this.h=!1,rs(this,m[1]||"",!0),this.o=En(m[2]||""),this.g=En(m[3]||"",!0),ir(this,m[4]),this.l=En(m[5]||"",!0),bi(this,m[6]||"",!0),this.m=En(m[7]||"")):(this.h=!1,this.i=new wi(null,this.h))}de.prototype.toString=function(){var u=[],m=this.j;m&&u.push(as(m,To,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(as(m,To,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(as(_,_.charAt(0)=="/"?Oh:Eo,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",as(_,Js)),u.join("")};function un(u){return new de(u)}function rs(u,m,_){u.j=_?En(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function ir(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function bi(u,m,_){m instanceof wi?(u.i=m,eu(u.i,u.h)):(_||(m=as(m,Mh)),u.i=new wi(m,u.h))}function Ft(u,m,_){u.i.set(m,_)}function ss(u){return Ft(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function En(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function as(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,tu),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function tu(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var To=/[#\/\?@]/g,Eo=/[#\?:]/g,Oh=/[#\?]/g,Mh=/[#\?@]/g,Js=/#/g;function wi(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function An(u){u.g||(u.g=new Map,u.h=0,u.i&&Nh(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}r=wi.prototype,r.add=function(u,m){An(this),this.i=null,u=Xn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Ri(u,m){An(u),m=Xn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Ii(u,m){return An(u),m=Xn(u,m),u.g.has(m)}r.forEach=function(u,m){An(this),this.g.forEach(function(_,E){_.forEach(function(U){u.call(m,U,E,this)},this)},this)},r.na=function(){An(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let E=0;E<m.length;E++){const U=u[E];for(let q=0;q<U.length;q++)_.push(m[E])}return _},r.V=function(u){An(this);let m=[];if(typeof u=="string")Ii(this,u)&&(m=m.concat(this.g.get(Xn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},r.set=function(u,m){return An(this),this.i=null,u=Xn(this,u),Ii(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Ao(u,m,_){Ri(u,m),0<_.length&&(u.i=null,u.g.set(Xn(u,m),nt(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var E=m[_];const q=encodeURIComponent(String(E)),W=this.V(E);for(E=0;E<W.length;E++){var U=q;W[E]!==""&&(U+="="+encodeURIComponent(String(W[E]))),u.push(U)}}return this.i=u.join("&")};function Xn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function eu(u,m){m&&!u.j&&(An(u),u.i=null,u.g.forEach(function(_,E){var U=E.toLowerCase();E!=U&&(Ri(this,E),Ao(this,U,_))},u)),u.j=m}function os(u,m){const _=new Tn;if(g.Image){const E=new Image;E.onload=G(Sn,_,"TestLoadImage: loaded",!0,m,E),E.onerror=G(Sn,_,"TestLoadImage: error",!1,m,E),E.onabort=G(Sn,_,"TestLoadImage: abort",!1,m,E),E.ontimeout=G(Sn,_,"TestLoadImage: timeout",!1,m,E),g.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else m(!1)}function Un(u,m){const _=new Tn,E=new AbortController,U=setTimeout(()=>{E.abort(),Sn(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:E.signal}).then(q=>{clearTimeout(U),q.ok?Sn(_,"TestPingServer: ok",!0,m):Sn(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),Sn(_,"TestPingServer: error",!1,m)})}function Sn(u,m,_,E,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),E(_)}catch{}}function ls(){this.g=new Wr}function $n(u,m,_){const E=_||"";try{vo(u,function(U,q){let W=U;y(U)&&(W=Pn(U)),m.push(E+q+"="+encodeURIComponent(W))})}catch(U){throw m.push(E+"type="+encodeURIComponent("_badmap")),U}}function rr(u){this.l=u.Ub||null,this.j=u.eb||!1}$(rr,uo),rr.prototype.g=function(){return new Ci(this.l,this.j)},rr.prototype.i=(function(u){return function(){return u}})({});function Ci(u,m){se.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(Ci,se),r=Ci.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Jn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||g).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Jn(this)),this.g&&(this.readyState=3,Jn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof g.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;So(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function So(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Zn(this):Jn(this),this.readyState==3&&So(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Zn(this))},r.Qa=function(u){this.g&&(this.response=u,Zn(this))},r.ga=function(){this.g&&Zn(this)};function Zn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Jn(u)}r.setRequestHeader=function(u,m){this.u.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Jn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ci.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function bo(u){let m="";return Lt(u,function(_,E){m+=E,m+=":",m+=_,m+=`\r
`}),m}function Re(u,m,_){t:{for(E in _){var E=!1;break t}E=!0}E||(_=bo(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):Ft(u,m,_))}function zt(u){se.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(zt,se);var Ws=/^https?$/i,us=["POST","PUT"];r=zt.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,m,_,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qn.g(),this.v=this.o?co(this.o):co(Qn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(q){nu(this,q);return}if(u=_||"",_=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var U in E)_.set(U,E[U]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const q of E.keys())_.set(q,E.get(q));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(_.keys()).find(q=>q.toLowerCase()=="content-type"),U=g.FormData&&u instanceof g.FormData,!(0<=Array.prototype.indexOf.call(us,m,void 0))||E||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,W]of _)this.g.setRequestHeader(q,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cs(this),this.u=!0,this.g.send(u),this.u=!1}catch(q){nu(this,q)}};function nu(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,ta(u),Wn(u)}function ta(u){u.A||(u.A=!0,jt(u,"complete"),jt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,jt(this,"complete"),jt(this,"abort"),Wn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wn(this,!0)),zt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ea(this):this.bb())},r.bb=function(){ea(this)};function ea(u){if(u.h&&typeof d<"u"&&(!u.v[1]||bn(u)!=4||u.Z()!=2)){if(u.u&&bn(u)==4)He(u.Ea,0,u);else if(jt(u,"readystatechange"),bn(u)==4){u.h=!1;try{const W=u.Z();t:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var _;if(!(_=m)){var E;if(E=W===0){var U=String(u.D).match(is)[1]||null;!U&&g.self&&g.self.location&&(U=g.self.location.protocol.slice(0,-1)),E=!Ws.test(U?U.toLowerCase():"")}_=E}if(_)jt(u,"complete"),jt(u,"success");else{u.m=6;try{var q=2<bn(u)?u.g.statusText:""}catch{q=""}u.l=q+" ["+u.Z()+"]",ta(u)}}finally{Wn(u)}}}}function Wn(u,m){if(u.g){cs(u);const _=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||jt(u,"ready");try{_.onreadystatechange=E}catch{}}}function cs(u){u.I&&(g.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function bn(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Fs(m)}};function iu(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Vh(u){const m={};u=(u.g&&2<=bn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(gt(u[E]))continue;var _=M(u[E]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const q=m[U]||[];m[U]=q,q.push(_)}V(m,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hs(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function na(u){this.Aa=0,this.i=[],this.j=new Tn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hs("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hs("baseRetryDelayMs",5e3,u),this.cb=hs("retryDelaySeedMs",1e4,u),this.Wa=hs("forwardChannelMaxRetries",2,u),this.wa=hs("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Si(u&&u.concurrentRequestLimit),this.Da=new ls,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=na.prototype,r.la=8,r.G=1,r.connect=function(u,m,_,E){te(0),this.W=u,this.H=m||{},_&&E!==void 0&&(this.H.OSID=_,this.H.OAID=E),this.F=this.X,this.I=cu(this,null,this.W),ra(this)};function wo(u){if(ru(u),u.G==3){var m=u.U++,_=un(u.I);if(Ft(_,"SID",u.K),Ft(_,"RID",m),Ft(_,"TYPE","terminate"),fs(u,_),m=new Ze(u,u.j,m),m.L=2,m.v=ss(un(_)),_=!1,g.navigator&&g.navigator.sendBeacon)try{_=g.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&g.Image&&(new Image().src=m.v,_=!0),_||(m.g=hu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),es(m)}uu(u)}function ia(u){u.g&&(ds(u),u.g.cancel(),u.g=null)}function ru(u){ia(u),u.u&&(g.clearTimeout(u.u),u.u=null),sa(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&g.clearTimeout(u.s),u.s=null)}function ra(u){if(!Ys(u.h)&&!u.s){u.s=!0;var m=u.Ga;tt||D(),ot||(tt(),ot=!0),Ut.add(m,u),u.B=0}}function Ph(u,m){return Xs(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=fe(C(u.Ga,u,m),Co(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new Ze(this,this.j,u);let q=this.o;if(this.S&&(q?(q=S(q),O(q,this.S)):q=this.S),this.m!==null||this.O||(U.H=q,q=null),this.P)t:{for(var m=0,_=0;_<this.i.length;_++){e:{var E=this.i[_];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break e}E=void 0}if(E===void 0)break;if(m+=E,4096<m){m=_;break t}if(m===4096||_===this.i.length-1){m=_+1;break t}}m=1e3}else m=1e3;m=su(this,U,m),_=un(this.I),Ft(_,"RID",u),Ft(_,"CVER",22),this.D&&Ft(_,"X-HTTP-Session-Id",this.D),fs(this,_),q&&(this.O?m="headers="+encodeURIComponent(String(bo(q)))+"&"+m:this.m&&Re(_,this.m,q)),$s(this.h,U),this.Ua&&Ft(_,"TYPE","init"),this.P?(Ft(_,"$req",m),Ft(_,"SID","null"),U.T=!0,kn(U,_,null)):kn(U,_,m),this.G=2}}else this.G==3&&(u?Ro(this,u):this.i.length==0||Ys(this.h)||Ro(this))};function Ro(u,m){var _;m?_=m.l:_=u.U++;const E=un(u.I);Ft(E,"SID",u.K),Ft(E,"RID",_),Ft(E,"AID",u.T),fs(u,E),u.m&&u.o&&Re(E,u.m,u.o),_=new Ze(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=su(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),$s(u.h,_),kn(_,E,m)}function fs(u,m){u.H&&Lt(u.H,function(_,E){Ft(m,E,_)}),u.l&&vo({},function(_,E){Ft(m,E,_)})}function su(u,m,_){_=Math.min(u.i.length,_);var E=u.l?C(u.l.Na,u.l,u):null;t:{var U=u.i;let q=-1;for(;;){const W=["count="+_];q==-1?0<_?(q=U[0].g,W.push("ofs="+q)):q=0:W.push("ofs="+q);let Ot=!0;for(let ve=0;ve<_;ve++){let Mt=U[ve].g;const Ie=U[ve].map;if(Mt-=q,0>Mt)q=Math.max(0,U[ve].g-100),Ot=!1;else try{$n(Ie,W,"req"+Mt+"_")}catch{E&&E(Ie)}}if(Ot){E=W.join("&");break t}}}return u=u.i.splice(0,_),m.D=u,E}function au(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;tt||D(),ot||(tt(),ot=!0),Ut.add(m,u),u.v=0}}function Io(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=fe(C(u.Fa,u),Co(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,ou(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=fe(C(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,te(10),ia(this),ou(this))};function ds(u){u.A!=null&&(g.clearTimeout(u.A),u.A=null)}function ou(u){u.g=new Ze(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=un(u.qa);Ft(m,"RID","rpc"),Ft(m,"SID",u.K),Ft(m,"AID",u.T),Ft(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ft(m,"TO",u.ja),Ft(m,"TYPE","xmlhttp"),fs(u,m),u.m&&u.o&&Re(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=ss(un(m)),_.m=null,_.P=!0,Ai(_,u)}r.Za=function(){this.C!=null&&(this.C=null,ia(this),Io(this),te(19))};function sa(u){u.C!=null&&(g.clearTimeout(u.C),u.C=null)}function lu(u,m){var _=null;if(u.g==m){sa(u),ds(u),u.g=null;var E=2}else if(yo(u.h,m))_=m.D,Je(u.h,m),E=1;else return;if(u.G!=0){if(m.o)if(E==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var U=u.B;E=Ji(),jt(E,new _e(E,_)),ra(u)}else au(u);else if(U=m.s,U==3||U==0&&0<m.X||!(E==1&&Ph(u,m)||E==2&&Io(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),U){case 1:Di(u,5);break;case 4:Di(u,10);break;case 3:Di(u,6);break;default:Di(u,2)}}}function Co(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Di(u,m){if(u.j.info("Error code "+m),m==2){var _=C(u.fb,u),E=u.Xa;const U=!E;E=new de(E||"//www.google.com/images/cleardot.gif"),g.location&&g.location.protocol=="http"||rs(E,"https"),ss(E),U?os(E.toString(),_):Un(E.toString(),_)}else te(2);u.G=0,u.l&&u.l.sa(m),uu(u),ru(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),te(2)):(this.j.info("Failed to ping google.com"),te(1))};function uu(u){if(u.G=0,u.ka=[],u.l){const m=_o(u.h);(m.length!=0||u.i.length!=0)&&(Z(u.ka,m),Z(u.ka,u.i),u.h.i.length=0,nt(u.i),u.i.length=0),u.l.ra()}}function cu(u,m,_){var E=_ instanceof de?un(_):new de(_);if(E.g!="")m&&(E.g=m+"."+E.g),ir(E,E.s);else{var U=g.location;E=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var q=new de(null);E&&rs(q,E),m&&(q.g=m),U&&ir(q,U),_&&(q.l=_),E=q}return _=u.D,m=u.ya,_&&m&&Ft(E,_,m),Ft(E,"VER",u.la),fs(u,E),E}function hu(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new zt(new rr({eb:_})):new zt(u.pa),m.Ha(u.J),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function fu(){}r=fu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function aa(){}aa.prototype.g=function(u,m){return new We(u,m)};function We(u,m){se.call(this),this.g=new na(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!gt(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!gt(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new ti(this)}$(We,se),We.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},We.prototype.close=function(){wo(this.g)},We.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Pn(u),u=_);m.i.push(new Wl(m.Ya++,u)),m.G==3&&ra(m)},We.prototype.N=function(){this.g.l=null,delete this.j,wo(this.g),delete this.g,We.aa.N.call(this)};function du(u){Ti.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){t:{for(const _ in m){u=_;break t}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}$(du,Ti);function mu(){fo.call(this),this.status=1}$(mu,fo);function ti(u){this.g=u}$(ti,fu),ti.prototype.ua=function(){jt(this.g,"a")},ti.prototype.ta=function(u){jt(this.g,new du(u))},ti.prototype.sa=function(u){jt(this.g,new mu)},ti.prototype.ra=function(){jt(this.g,"b")},aa.prototype.createWebChannel=aa.prototype.g,We.prototype.send=We.prototype.o,We.prototype.open=We.prototype.m,We.prototype.close=We.prototype.close,xT=function(){return new aa},UT=function(){return Ji()},kT=Fn,Jd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},er.NO_ERROR=0,er.TIMEOUT=8,er.HTTP_ERROR=6,bc=er,Ei.COMPLETE="complete",PT=Ei,ho.EventType=vi,vi.OPEN="a",vi.CLOSE="b",vi.ERROR="c",vi.MESSAGE="d",se.prototype.listen=se.prototype.K,yl=ho,zt.prototype.listenOnce=zt.prototype.L,zt.prototype.getLastError=zt.prototype.Ka,zt.prototype.getLastErrorCode=zt.prototype.Ba,zt.prototype.getStatus=zt.prototype.Z,zt.prototype.getResponseJson=zt.prototype.Oa,zt.prototype.getResponseText=zt.prototype.oa,zt.prototype.send=zt.prototype.ea,zt.prototype.setWithCredentials=zt.prototype.Ha,VT=zt}).apply(typeof gc<"u"?gc:typeof self<"u"?self:typeof window<"u"?window:{});const Y_="@firebase/firestore",X_="4.9.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo="12.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=new ih("@firebase/firestore");function ka(){return Vs.logLevel}function it(r,...t){if(Vs.logLevel<=Ct.DEBUG){const n=t.map(Sm);Vs.debug(`Firestore (${eo}): ${r}`,...n)}}function Ki(r,...t){if(Vs.logLevel<=Ct.ERROR){const n=t.map(Sm);Vs.error(`Firestore (${eo}): ${r}`,...n)}}function Qa(r,...t){if(Vs.logLevel<=Ct.WARN){const n=t.map(Sm);Vs.warn(`Firestore (${eo}): ${r}`,...n)}}function Sm(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(r,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,LT(r,s,n)}function LT(r,t,n){let s=`FIRESTORE (${eo}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Ki(s),new Error(s)}function Bt(r,t,n,s){let l="Unexpected state";typeof n=="string"?l=n:s=n,r||LT(t,l,s)}function vt(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class st extends Hn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ab{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable((()=>n(Ke.UNAUTHENTICATED)))}shutdown(){}}class Sb{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class bb{constructor(t){this.t=t,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Bt(this.o===void 0,42304);let s=this.i;const l=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let c=new kr;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new kr,t.enqueueRetryable((()=>l(this.currentUser)))};const d=()=>{const p=c;t.enqueueRetryable((async()=>{await p.promise,await l(this.currentUser)}))},g=p=>{it("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((p=>g(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?g(p):(it("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new kr)}}),0),d()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==t?(it("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Bt(typeof s.accessToken=="string",31837,{l:s}),new zT(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Bt(t===null||typeof t=="string",2055,{h:t}),new Ke(t)}}class wb{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Rb{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new wb(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable((()=>n(Ke.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class $_{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ib{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,li(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Bt(this.o===void 0,3512);const s=c=>{c.error!=null&&it("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const d=c.token!==this.m;return this.m=c.token,it("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?n(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable((()=>s(c)))};const l=c=>{it("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>l(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?l(c):it("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new $_(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((n=>n?(Bt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new $_(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const l=Cb(40);for(let c=0;c<l.length;++c)s.length<20&&l[c]<n&&(s+=t.charAt(l[c]%62))}return s}}function Dt(r,t){return r<t?-1:r>t?1:0}function Wd(r,t){const n=Math.min(r.length,t.length);for(let s=0;s<n;s++){const l=r.charAt(s),c=t.charAt(s);if(l!==c)return xd(l)===xd(c)?Dt(l,c):xd(l)?1:-1}return Dt(r.length,t.length)}const Db=55296,Nb=57343;function xd(r){const t=r.charCodeAt(0);return t>=Db&&t<=Nb}function Ka(r,t,n){return r.length===t.length&&r.every(((s,l)=>n(s,t[l])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="__name__";class oi{constructor(t,n,s){n===void 0?n=0:n>t.length&&dt(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&dt(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return oi.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof oi?t.forEach((s=>{n.push(s)})):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let l=0;l<s;l++){const c=oi.compareSegments(t.get(l),n.get(l));if(c!==0)return c}return Dt(t.length,n.length)}static compareSegments(t,n){const s=oi.isNumericId(t),l=oi.isNumericId(n);return s&&!l?-1:!s&&l?1:s&&l?oi.extractNumericId(t).compare(oi.extractNumericId(n)):Wd(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Pr.fromString(t.substring(4,t.length-2))}}class Jt extends oi{construct(t,n,s){return new Jt(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new st(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((l=>l.length>0)))}return new Jt(n)}static emptyPath(){return new Jt([])}}const Ob=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends oi{construct(t,n,s){return new qe(t,n,s)}static isValidIdentifier(t){return Ob.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Z_}static keyField(){return new qe([Z_])}static fromServerFormat(t){const n=[];let s="",l=0;const c=()=>{if(s.length===0)throw new st(X.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let d=!1;for(;l<t.length;){const g=t[l];if(g==="\\"){if(l+1===t.length)throw new st(X.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[l+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new st(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=p,l+=2}else g==="`"?(d=!d,l++):g!=="."||d?(s+=g,l++):(c(),l++)}if(c(),d)throw new st(X.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new qe(n)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.path=t}static fromPath(t){return new ut(Jt.fromString(t))}static fromName(t){return new ut(Jt.fromString(t).popFirst(5))}static empty(){return new ut(Jt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Jt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Jt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ut(new Jt(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(r,t,n){if(!n)throw new st(X.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Mb(r,t,n,s){if(t===!0&&s===!0)throw new st(X.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function J_(r){if(!ut.isDocumentKey(r))throw new st(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function W_(r){if(ut.isDocumentKey(r))throw new st(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function qT(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function wm(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(s){return s.constructor?s.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":dt(12329,{type:typeof r})}function Ps(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new st(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wm(r);throw new st(X.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(r,t){const n={typeString:r};return t&&(n.value=t),n}function Ul(r,t){if(!qT(r))throw new st(X.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in t)if(t[s]){const l=t[s].typeString,c="value"in t[s]?{value:t[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const d=r[s];if(l&&typeof d!==l){n=`JSON field '${s}' must be a ${l}.`;break}if(c!==void 0&&d!==c.value){n=`Expected '${s}' field to equal '${c.value}'`;break}}if(n)throw new st(X.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=-62135596800,ev=1e6;class Wt{static now(){return Wt.fromMillis(Date.now())}static fromDate(t){return Wt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*ev);return new Wt(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new st(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new st(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<tv)throw new st(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new st(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ev}_compareTo(t){return this.seconds===t.seconds?Dt(this.nanoseconds,t.nanoseconds):Dt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Wt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Ul(t,Wt._jsonSchema))return new Wt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-tv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Wt._jsonSchemaVersion="firestore/timestamp/1.0",Wt._jsonSchema={type:ye("string",Wt._jsonSchemaVersion),seconds:ye("number"),nanoseconds:ye("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{static fromTimestamp(t){return new _t(t)}static min(){return new _t(new Wt(0,0))}static max(){return new _t(new Wt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl=-1;function Vb(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,l=_t.fromTimestamp(s===1e9?new Wt(n+1,0):new Wt(n,s));return new Lr(l,ut.empty(),t)}function Pb(r){return new Lr(r.readTime,r.key,Cl)}class Lr{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Lr(_t.min(),ut.empty(),Cl)}static max(){return new Lr(_t.max(),ut.empty(),Cl)}}function kb(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=ut.comparator(r.documentKey,t.documentKey),n!==0?n:Dt(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(r){if(r.code!==X.FAILED_PRECONDITION||r.message!==Ub)throw r;it("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&dt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new K(((s,l)=>{this.nextCallback=c=>{this.wrapSuccess(t,c).next(s,l)},this.catchCallback=c=>{this.wrapFailure(n,c).next(s,l)}}))}toPromise(){return new Promise(((t,n)=>{this.next(t,n)}))}wrapUserFunction(t){try{const n=t();return n instanceof K?n:K.resolve(n)}catch(n){return K.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction((()=>t(n))):K.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction((()=>t(n))):K.reject(n)}static resolve(t){return new K(((n,s)=>{n(t)}))}static reject(t){return new K(((n,s)=>{s(t)}))}static waitFor(t){return new K(((n,s)=>{let l=0,c=0,d=!1;t.forEach((g=>{++l,g.next((()=>{++c,d&&c===l&&n()}),(p=>s(p)))})),d=!0,c===l&&n()}))}static or(t){let n=K.resolve(!1);for(const s of t)n=n.next((l=>l?K.resolve(l):s()));return n}static forEach(t,n){const s=[];return t.forEach(((l,c)=>{s.push(n.call(this,l,c))})),this.waitFor(s)}static mapArray(t,n){return new K(((s,l)=>{const c=t.length,d=new Array(c);let g=0;for(let p=0;p<c;p++){const y=p;n(t[y]).next((A=>{d[y]=A,++g,g===c&&s(d)}),(A=>l(A)))}}))}static doWhile(t,n){return new K(((s,l)=>{const c=()=>{t()===!0?n().next((()=>{c()}),l):s()};c()}))}}function Lb(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function io(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}rh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=-1;function sh(r){return r==null}function Uc(r){return r===0&&1/r==-1/0}function zb(r){return typeof r=="number"&&Number.isInteger(r)&&!Uc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT="";function Bb(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=nv(t)),t=qb(r.get(n),t);return nv(t)}function qb(r,t){let n=t;const s=r.length;for(let l=0;l<s;l++){const c=r.charAt(l);switch(c){case"\0":n+="";break;case jT:n+="";break;default:n+=c}}return n}function nv(r){return r+jT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function Gr(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function HT(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t,n){this.comparator=t,this.root=n||Be.EMPTY}insert(t,n){return new ie(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(t){return new ie(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Be.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const l=this.comparator(t,s.key);if(l===0)return n+s.left.size;l<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((n,s)=>(t(n,s),!1)))}toString(){const t=[];return this.inorderTraversal(((n,s)=>(t.push(`${n}:${s}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new pc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new pc(this.root,t,this.comparator,!1)}getReverseIterator(){return new pc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new pc(this.root,t,this.comparator,!0)}}class pc{constructor(t,n,s,l){this.isReverse=l,this.nodeStack=[];let c=1;for(;!t.isEmpty();)if(c=n?s(t.key,n):1,n&&l&&(c*=-1),c<0)t=this.isReverse?t.left:t.right;else{if(c===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Be{constructor(t,n,s,l,c){this.key=t,this.value=n,this.color=s??Be.RED,this.left=l??Be.EMPTY,this.right=c??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,l,c){return new Be(t??this.key,n??this.value,s??this.color,l??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let l=this;const c=s(t,l.key);return l=c<0?l.copy(null,null,null,l.left.insert(t,n,s),null):c===0?l.copy(null,n,null,null,null):l.copy(null,null,null,null,l.right.insert(t,n,s)),l.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,l=this;if(n(t,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(t,n),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),n(t,l.key)===0){if(l.right.isEmpty())return Be.EMPTY;s=l.right.min(),l=l.copy(s.key,s.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(t,n))}return l.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw dt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw dt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw dt(27949);return t+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw dt(57766)}get value(){throw dt(16141)}get color(){throw dt(16727)}get left(){throw dt(29726)}get right(){throw dt(36894)}copy(t,n,s,l,c){return this}insert(t,n,s){return new Be(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t){this.comparator=t,this.data=new ie(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((n,s)=>(t(n),!1)))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const l=s.getNext();if(this.comparator(l.key,t[1])>=0)return;n(l.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new rv(this.data.getIterator())}getIteratorFrom(t){return new rv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach((s=>{n=n.add(s)})),n}isEqual(t){if(!(t instanceof be)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const l=n.getNext().key,c=s.getNext().key;if(this.comparator(l,c)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((n=>{t.push(n)})),t}toString(){const t=[];return this.forEach((n=>t.push(n))),"SortedSet("+t.toString()+")"}copy(t){const n=new be(this.comparator);return n.data=t,n}}class rv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(t){this.fields=t,t.sort(qe.comparator)}static empty(){return new yn([])}unionWith(t){let n=new be(qe.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new yn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ka(this.fields,t.fields,((n,s)=>n.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t){this.binaryString=t}static fromBase64String(t){const n=(function(l){try{return atob(l)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new GT("Invalid base64 string: "+c):c}})(t);return new je(n)}static fromUint8Array(t){const n=(function(l){let c="";for(let d=0;d<l.length;++d)c+=String.fromCharCode(l[d]);return c})(t);return new je(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let l=0;l<n.length;l++)s[l]=n.charCodeAt(l);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Dt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}je.EMPTY_BYTE_STRING=new je("");const jb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zr(r){if(Bt(!!r,39018),typeof r=="string"){let t=0;const n=jb.exec(r);if(Bt(!!n,46558,{timestamp:r}),n[1]){let l=n[1];l=(l+"000000000").substr(0,9),t=Number(l)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:he(r.seconds),nanos:he(r.nanos)}}function he(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Br(r){return typeof r=="string"?je.fromBase64String(r):je.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT="server_timestamp",QT="__type__",KT="__previous_value__",YT="__local_write_time__";function Im(r){return(r?.mapValue?.fields||{})[QT]?.stringValue===FT}function ah(r){const t=r.mapValue.fields[KT];return Im(t)?ah(t):t}function Dl(r){const t=zr(r.mapValue.fields[YT].timestampValue);return new Wt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(t,n,s,l,c,d,g,p,y,A){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=l,this.ssl=c,this.forceLongPolling=d,this.autoDetectLongPolling=g,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=A}}const xc="(default)";class Nl{constructor(t,n){this.projectId=t,this.database=n||xc}static empty(){return new Nl("","")}get isDefaultDatabase(){return this.database===xc}isEqual(t){return t instanceof Nl&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT="__type__",Gb="__max__",yc={mapValue:{}},$T="__vector__",Lc="value";function qr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Im(r)?4:Qb(r)?9007199254740991:Fb(r)?10:11:dt(28295,{value:r})}function pi(r,t){if(r===t)return!0;const n=qr(r);if(n!==qr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Dl(r).isEqual(Dl(t));case 3:return(function(l,c){if(typeof l.timestampValue=="string"&&typeof c.timestampValue=="string"&&l.timestampValue.length===c.timestampValue.length)return l.timestampValue===c.timestampValue;const d=zr(l.timestampValue),g=zr(c.timestampValue);return d.seconds===g.seconds&&d.nanos===g.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(l,c){return Br(l.bytesValue).isEqual(Br(c.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(l,c){return he(l.geoPointValue.latitude)===he(c.geoPointValue.latitude)&&he(l.geoPointValue.longitude)===he(c.geoPointValue.longitude)})(r,t);case 2:return(function(l,c){if("integerValue"in l&&"integerValue"in c)return he(l.integerValue)===he(c.integerValue);if("doubleValue"in l&&"doubleValue"in c){const d=he(l.doubleValue),g=he(c.doubleValue);return d===g?Uc(d)===Uc(g):isNaN(d)&&isNaN(g)}return!1})(r,t);case 9:return Ka(r.arrayValue.values||[],t.arrayValue.values||[],pi);case 10:case 11:return(function(l,c){const d=l.mapValue.fields||{},g=c.mapValue.fields||{};if(iv(d)!==iv(g))return!1;for(const p in d)if(d.hasOwnProperty(p)&&(g[p]===void 0||!pi(d[p],g[p])))return!1;return!0})(r,t);default:return dt(52216,{left:r})}}function Ol(r,t){return(r.values||[]).find((n=>pi(n,t)))!==void 0}function Ya(r,t){if(r===t)return 0;const n=qr(r),s=qr(t);if(n!==s)return Dt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Dt(r.booleanValue,t.booleanValue);case 2:return(function(c,d){const g=he(c.integerValue||c.doubleValue),p=he(d.integerValue||d.doubleValue);return g<p?-1:g>p?1:g===p?0:isNaN(g)?isNaN(p)?0:-1:1})(r,t);case 3:return sv(r.timestampValue,t.timestampValue);case 4:return sv(Dl(r),Dl(t));case 5:return Wd(r.stringValue,t.stringValue);case 6:return(function(c,d){const g=Br(c),p=Br(d);return g.compareTo(p)})(r.bytesValue,t.bytesValue);case 7:return(function(c,d){const g=c.split("/"),p=d.split("/");for(let y=0;y<g.length&&y<p.length;y++){const A=Dt(g[y],p[y]);if(A!==0)return A}return Dt(g.length,p.length)})(r.referenceValue,t.referenceValue);case 8:return(function(c,d){const g=Dt(he(c.latitude),he(d.latitude));return g!==0?g:Dt(he(c.longitude),he(d.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return av(r.arrayValue,t.arrayValue);case 10:return(function(c,d){const g=c.fields||{},p=d.fields||{},y=g[Lc]?.arrayValue,A=p[Lc]?.arrayValue,I=Dt(y?.values?.length||0,A?.values?.length||0);return I!==0?I:av(y,A)})(r.mapValue,t.mapValue);case 11:return(function(c,d){if(c===yc.mapValue&&d===yc.mapValue)return 0;if(c===yc.mapValue)return 1;if(d===yc.mapValue)return-1;const g=c.fields||{},p=Object.keys(g),y=d.fields||{},A=Object.keys(y);p.sort(),A.sort();for(let I=0;I<p.length&&I<A.length;++I){const C=Wd(p[I],A[I]);if(C!==0)return C;const G=Ya(g[p[I]],y[A[I]]);if(G!==0)return G}return Dt(p.length,A.length)})(r.mapValue,t.mapValue);default:throw dt(23264,{he:n})}}function sv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Dt(r,t);const n=zr(r),s=zr(t),l=Dt(n.seconds,s.seconds);return l!==0?l:Dt(n.nanos,s.nanos)}function av(r,t){const n=r.values||[],s=t.values||[];for(let l=0;l<n.length&&l<s.length;++l){const c=Ya(n[l],s[l]);if(c)return c}return Dt(n.length,s.length)}function Xa(r){return tm(r)}function tm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(n){const s=zr(n);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(n){return Br(n).toBase64()})(r.bytesValue):"referenceValue"in r?(function(n){return ut.fromName(n).toString()})(r.referenceValue):"geoPointValue"in r?(function(n){return`geo(${n.latitude},${n.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(n){let s="[",l=!0;for(const c of n.values||[])l?l=!1:s+=",",s+=tm(c);return s+"]"})(r.arrayValue):"mapValue"in r?(function(n){const s=Object.keys(n.fields||{}).sort();let l="{",c=!0;for(const d of s)c?c=!1:l+=",",l+=`${d}:${tm(n.fields[d])}`;return l+"}"})(r.mapValue):dt(61005,{value:r})}function wc(r){switch(qr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ah(r);return t?16+wc(t):16;case 5:return 2*r.stringValue.length;case 6:return Br(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((l,c)=>l+wc(c)),0)})(r.arrayValue);case 10:case 11:return(function(s){let l=0;return Gr(s.fields,((c,d)=>{l+=c.length+wc(d)})),l})(r.mapValue);default:throw dt(13486,{value:r})}}function em(r){return!!r&&"integerValue"in r}function Cm(r){return!!r&&"arrayValue"in r}function ov(r){return!!r&&"nullValue"in r}function lv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Rc(r){return!!r&&"mapValue"in r}function Fb(r){return(r?.mapValue?.fields||{})[XT]?.stringValue===$T}function El(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return Gr(r.mapValue.fields,((n,s)=>t.mapValue.fields[n]=El(s))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=El(r.arrayValue.values[n]);return t}return{...r}}function Qb(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Gb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t){this.value=t}static empty(){return new an({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Rc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=El(n)}setAll(t){let n=qe.emptyPath(),s={},l=[];t.forEach(((d,g)=>{if(!n.isImmediateParentOf(g)){const p=this.getFieldsMap(n);this.applyChanges(p,s,l),s={},l=[],n=g.popLast()}d?s[g.lastSegment()]=El(d):l.push(g.lastSegment())}));const c=this.getFieldsMap(n);this.applyChanges(c,s,l)}delete(t){const n=this.field(t.popLast());Rc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return pi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let l=n.mapValue.fields[t.get(s)];Rc(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=l),n=l}return n.mapValue.fields}applyChanges(t,n,s){Gr(n,((l,c)=>t[l]=c));for(const l of s)delete t[l]}clone(){return new an(El(this.value))}}function ZT(r){const t=[];return Gr(r.fields,((n,s)=>{const l=new qe([n]);if(Rc(s)){const c=ZT(s.mapValue).fields;if(c.length===0)t.push(l);else for(const d of c)t.push(l.child(d))}else t.push(l)})),new yn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t,n,s,l,c,d,g){this.key=t,this.documentType=n,this.version=s,this.readTime=l,this.createTime=c,this.data=d,this.documentState=g}static newInvalidDocument(t){return new Ye(t,0,_t.min(),_t.min(),_t.min(),an.empty(),0)}static newFoundDocument(t,n,s,l){return new Ye(t,1,n,_t.min(),s,l,0)}static newNoDocument(t,n){return new Ye(t,2,n,_t.min(),_t.min(),an.empty(),0)}static newUnknownDocument(t,n){return new Ye(t,3,n,_t.min(),_t.min(),an.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(_t.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=an.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=an.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_t.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ye&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(t,n){this.position=t,this.inclusive=n}}function uv(r,t,n){let s=0;for(let l=0;l<r.position.length;l++){const c=t[l],d=r.position[l];if(c.field.isKeyField()?s=ut.comparator(ut.fromName(d.referenceValue),n.key):s=Ya(d,n.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function cv(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!pi(r.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t,n="asc"){this.field=t,this.dir=n}}function Kb(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{}class Se extends JT{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new Xb(t,n,s):n==="array-contains"?new Jb(t,s):n==="in"?new Wb(t,s):n==="not-in"?new tw(t,s):n==="array-contains-any"?new ew(t,s):new Se(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new $b(t,s):new Zb(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ya(n,this.value)):n!==null&&qr(this.value)===qr(n)&&this.matchesComparison(Ya(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return dt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yi extends JT{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new yi(t,n)}matches(t){return WT(this)?this.filters.find((n=>!n.matches(t)))===void 0:this.filters.find((n=>n.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,n)=>t.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function WT(r){return r.op==="and"}function tE(r){return Yb(r)&&WT(r)}function Yb(r){for(const t of r.filters)if(t instanceof yi)return!1;return!0}function nm(r){if(r instanceof Se)return r.field.canonicalString()+r.op.toString()+Xa(r.value);if(tE(r))return r.filters.map((t=>nm(t))).join(",");{const t=r.filters.map((n=>nm(n))).join(",");return`${r.op}(${t})`}}function eE(r,t){return r instanceof Se?(function(s,l){return l instanceof Se&&s.op===l.op&&s.field.isEqual(l.field)&&pi(s.value,l.value)})(r,t):r instanceof yi?(function(s,l){return l instanceof yi&&s.op===l.op&&s.filters.length===l.filters.length?s.filters.reduce(((c,d,g)=>c&&eE(d,l.filters[g])),!0):!1})(r,t):void dt(19439)}function nE(r){return r instanceof Se?(function(n){return`${n.field.canonicalString()} ${n.op} ${Xa(n.value)}`})(r):r instanceof yi?(function(n){return n.op.toString()+" {"+n.getFilters().map(nE).join(" ,")+"}"})(r):"Filter"}class Xb extends Se{constructor(t,n,s){super(t,n,s),this.key=ut.fromName(s.referenceValue)}matches(t){const n=ut.comparator(t.key,this.key);return this.matchesComparison(n)}}class $b extends Se{constructor(t,n){super(t,"in",n),this.keys=iE("in",n)}matches(t){return this.keys.some((n=>n.isEqual(t.key)))}}class Zb extends Se{constructor(t,n){super(t,"not-in",n),this.keys=iE("not-in",n)}matches(t){return!this.keys.some((n=>n.isEqual(t.key)))}}function iE(r,t){return(t.arrayValue?.values||[]).map((n=>ut.fromName(n.referenceValue)))}class Jb extends Se{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Cm(n)&&Ol(n.arrayValue,this.value)}}class Wb extends Se{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ol(this.value.arrayValue,n)}}class tw extends Se{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ol(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ol(this.value.arrayValue,n)}}class ew extends Se{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Cm(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>Ol(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(t,n=null,s=[],l=[],c=null,d=null,g=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=l,this.limit=c,this.startAt=d,this.endAt=g,this.Te=null}}function hv(r,t=null,n=[],s=[],l=null,c=null,d=null){return new nw(r,t,n,s,l,c,d)}function Dm(r){const t=vt(r);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((s=>nm(s))).join(","),n+="|ob:",n+=t.orderBy.map((s=>(function(c){return c.field.canonicalString()+c.dir})(s))).join(","),sh(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((s=>Xa(s))).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((s=>Xa(s))).join(",")),t.Te=n}return t.Te}function Nm(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!Kb(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!eE(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!cv(r.startAt,t.startAt)&&cv(r.endAt,t.endAt)}function im(r){return ut.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(t,n=null,s=[],l=[],c=null,d="F",g=null,p=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=l,this.limit=c,this.limitType=d,this.startAt=g,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function iw(r,t,n,s,l,c,d,g){return new oh(r,t,n,s,l,c,d,g)}function rE(r){return new oh(r)}function fv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function rw(r){return r.collectionGroup!==null}function Al(r){const t=vt(r);if(t.Ie===null){t.Ie=[];const n=new Set;for(const c of t.explicitOrderBy)t.Ie.push(c),n.add(c.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(d){let g=new be(qe.comparator);return d.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(g=g.add(y.field))}))})),g})(t).forEach((c=>{n.has(c.canonicalString())||c.isKeyField()||t.Ie.push(new Bc(c,s))})),n.has(qe.keyField().canonicalString())||t.Ie.push(new Bc(qe.keyField(),s))}return t.Ie}function ui(r){const t=vt(r);return t.Ee||(t.Ee=sw(t,Al(r))),t.Ee}function sw(r,t){if(r.limitType==="F")return hv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((l=>{const c=l.dir==="desc"?"asc":"desc";return new Bc(l.field,c)}));const n=r.endAt?new zc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new zc(r.startAt.position,r.startAt.inclusive):null;return hv(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function rm(r,t,n){return new oh(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function lh(r,t){return Nm(ui(r),ui(t))&&r.limitType===t.limitType}function sE(r){return`${Dm(ui(r))}|lt:${r.limitType}`}function Ua(r){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((l=>nE(l))).join(", ")}]`),sh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((l=>(function(d){return`${d.field.canonicalString()} (${d.dir})`})(l))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((l=>Xa(l))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((l=>Xa(l))).join(",")),`Target(${s})`})(ui(r))}; limitType=${r.limitType})`}function uh(r,t){return t.isFoundDocument()&&(function(s,l){const c=l.key.path;return s.collectionGroup!==null?l.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):ut.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)})(r,t)&&(function(s,l){for(const c of Al(s))if(!c.field.isKeyField()&&l.data.field(c.field)===null)return!1;return!0})(r,t)&&(function(s,l){for(const c of s.filters)if(!c.matches(l))return!1;return!0})(r,t)&&(function(s,l){return!(s.startAt&&!(function(d,g,p){const y=uv(d,g,p);return d.inclusive?y<=0:y<0})(s.startAt,Al(s),l)||s.endAt&&!(function(d,g,p){const y=uv(d,g,p);return d.inclusive?y>=0:y>0})(s.endAt,Al(s),l))})(r,t)}function aw(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function aE(r){return(t,n)=>{let s=!1;for(const l of Al(r)){const c=ow(l,t,n);if(c!==0)return c;s=s||l.field.isKeyField()}return 0}}function ow(r,t,n){const s=r.field.isKeyField()?ut.comparator(t.key,n.key):(function(c,d,g){const p=d.data.field(c),y=g.data.field(c);return p!==null&&y!==null?Ya(p,y):dt(42886)})(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return dt(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[l,c]of s)if(this.equalsFn(l,t))return c}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),l=this.inner[s];if(l===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let c=0;c<l.length;c++)if(this.equalsFn(l[c][0],t))return void(l[c]=[t,n]);l.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let l=0;l<s.length;l++)if(this.equalsFn(s[l][0],t))return s.length===1?delete this.inner[n]:s.splice(l,1),this.innerSize--,!0;return!1}forEach(t){Gr(this.inner,((n,s)=>{for(const[l,c]of s)t(l,c)}))}isEmpty(){return HT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=new ie(ut.comparator);function Yi(){return lw}const oE=new ie(ut.comparator);function _l(...r){let t=oE;for(const n of r)t=t.insert(n.key,n);return t}function lE(r){let t=oE;return r.forEach(((n,s)=>t=t.insert(n,s.overlayedDocument))),t}function Ns(){return Sl()}function uE(){return Sl()}function Sl(){return new qs((r=>r.toString()),((r,t)=>r.isEqual(t)))}const uw=new ie(ut.comparator),cw=new be(ut.comparator);function Nt(...r){let t=cw;for(const n of r)t=t.add(n);return t}const hw=new be(Dt);function fw(){return hw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uc(t)?"-0":t}}function cE(r){return{integerValue:""+r}}function dw(r,t){return zb(t)?cE(t):Om(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(){this._=void 0}}function mw(r,t,n){return r instanceof qc?(function(l,c){const d={fields:{[QT]:{stringValue:FT},[YT]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return c&&Im(c)&&(c=ah(c)),c&&(d.fields[KT]=c),{mapValue:d}})(n,t):r instanceof Ml?fE(r,t):r instanceof Vl?dE(r,t):(function(l,c){const d=hE(l,c),g=dv(d)+dv(l.Ae);return em(d)&&em(l.Ae)?cE(g):Om(l.serializer,g)})(r,t)}function gw(r,t,n){return r instanceof Ml?fE(r,t):r instanceof Vl?dE(r,t):n}function hE(r,t){return r instanceof jc?(function(s){return em(s)||(function(c){return!!c&&"doubleValue"in c})(s)})(t)?t:{integerValue:0}:null}class qc extends ch{}class Ml extends ch{constructor(t){super(),this.elements=t}}function fE(r,t){const n=mE(t);for(const s of r.elements)n.some((l=>pi(l,s)))||n.push(s);return{arrayValue:{values:n}}}class Vl extends ch{constructor(t){super(),this.elements=t}}function dE(r,t){let n=mE(t);for(const s of r.elements)n=n.filter((l=>!pi(l,s)));return{arrayValue:{values:n}}}class jc extends ch{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function dv(r){return he(r.integerValue||r.doubleValue)}function mE(r){return Cm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function pw(r,t){return r.field.isEqual(t.field)&&(function(s,l){return s instanceof Ml&&l instanceof Ml||s instanceof Vl&&l instanceof Vl?Ka(s.elements,l.elements,pi):s instanceof jc&&l instanceof jc?pi(s.Ae,l.Ae):s instanceof qc&&l instanceof qc})(r.transform,t.transform)}class yw{constructor(t,n){this.version=t,this.transformResults=n}}class qn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new qn}static exists(t){return new qn(void 0,t)}static updateTime(t){return new qn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ic(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class hh{}function gE(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Mm(r.key,qn.none()):new xl(r.key,r.data,qn.none());{const n=r.data,s=an.empty();let l=new be(qe.comparator);for(let c of t.fields)if(!l.has(c)){let d=n.field(c);d===null&&c.length>1&&(c=c.popLast(),d=n.field(c)),d===null?s.delete(c):s.set(c,d),l=l.add(c)}return new Fr(r.key,s,new yn(l.toArray()),qn.none())}}function _w(r,t,n){r instanceof xl?(function(l,c,d){const g=l.value.clone(),p=gv(l.fieldTransforms,c,d.transformResults);g.setAll(p),c.convertToFoundDocument(d.version,g).setHasCommittedMutations()})(r,t,n):r instanceof Fr?(function(l,c,d){if(!Ic(l.precondition,c))return void c.convertToUnknownDocument(d.version);const g=gv(l.fieldTransforms,c,d.transformResults),p=c.data;p.setAll(pE(l)),p.setAll(g),c.convertToFoundDocument(d.version,p).setHasCommittedMutations()})(r,t,n):(function(l,c,d){c.convertToNoDocument(d.version).setHasCommittedMutations()})(0,t,n)}function bl(r,t,n,s){return r instanceof xl?(function(c,d,g,p){if(!Ic(c.precondition,d))return g;const y=c.value.clone(),A=pv(c.fieldTransforms,p,d);return y.setAll(A),d.convertToFoundDocument(d.version,y).setHasLocalMutations(),null})(r,t,n,s):r instanceof Fr?(function(c,d,g,p){if(!Ic(c.precondition,d))return g;const y=pv(c.fieldTransforms,p,d),A=d.data;return A.setAll(pE(c)),A.setAll(y),d.convertToFoundDocument(d.version,A).setHasLocalMutations(),g===null?null:g.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map((I=>I.field)))})(r,t,n,s):(function(c,d,g){return Ic(c.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):g})(r,t,n)}function vw(r,t){let n=null;for(const s of r.fieldTransforms){const l=t.data.field(s.field),c=hE(s.transform,l||null);c!=null&&(n===null&&(n=an.empty()),n.set(s.field,c))}return n||null}function mv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(s,l){return s===void 0&&l===void 0||!(!s||!l)&&Ka(s,l,((c,d)=>pw(c,d)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class xl extends hh{constructor(t,n,s,l=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class Fr extends hh{constructor(t,n,s,l,c=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=l,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function pE(r){const t=new Map;return r.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}})),t}function gv(r,t,n){const s=new Map;Bt(r.length===n.length,32656,{Re:n.length,Ve:r.length});for(let l=0;l<n.length;l++){const c=r[l],d=c.transform,g=t.data.field(c.field);s.set(c.field,gw(d,g,n[l]))}return s}function pv(r,t,n){const s=new Map;for(const l of r){const c=l.transform,d=n.data.field(l.field);s.set(l.field,mw(c,d,t))}return s}class Mm extends hh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Tw extends hh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(t,n,s,l){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=l}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let l=0;l<this.mutations.length;l++){const c=this.mutations[l];c.key.isEqual(t.key)&&_w(c,t,s[l])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=bl(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=bl(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=uE();return this.mutations.forEach((l=>{const c=t.get(l.key),d=c.overlayedDocument;let g=this.applyToLocalView(d,c.mutatedFields);g=n.has(l.key)?null:g;const p=gE(d,g);p!==null&&s.set(l.key,p),d.isValidDocument()||d.convertToNoDocument(_t.min())})),s}keys(){return this.mutations.reduce(((t,n)=>t.add(n.key)),Nt())}isEqual(t){return this.batchId===t.batchId&&Ka(this.mutations,t.mutations,((n,s)=>mv(n,s)))&&Ka(this.baseMutations,t.baseMutations,((n,s)=>mv(n,s)))}}class Vm{constructor(t,n,s,l){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=l}static from(t,n,s){Bt(t.mutations.length===s.length,58842,{me:t.mutations.length,fe:s.length});let l=(function(){return uw})();const c=t.mutations;for(let d=0;d<c.length;d++)l=l.insert(c[d].key,s[d].version);return new Vm(t,n,s,l)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe,Pt;function bw(r){switch(r){case X.OK:return dt(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return dt(15467,{code:r})}}function yE(r){if(r===void 0)return Ki("GRPC error has no .code"),X.UNKNOWN;switch(r){case pe.OK:return X.OK;case pe.CANCELLED:return X.CANCELLED;case pe.UNKNOWN:return X.UNKNOWN;case pe.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case pe.INTERNAL:return X.INTERNAL;case pe.UNAVAILABLE:return X.UNAVAILABLE;case pe.UNAUTHENTICATED:return X.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case pe.NOT_FOUND:return X.NOT_FOUND;case pe.ALREADY_EXISTS:return X.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return X.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case pe.ABORTED:return X.ABORTED;case pe.OUT_OF_RANGE:return X.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return X.UNIMPLEMENTED;case pe.DATA_LOSS:return X.DATA_LOSS;default:return dt(39323,{code:r})}}(Pt=pe||(pe={}))[Pt.OK=0]="OK",Pt[Pt.CANCELLED=1]="CANCELLED",Pt[Pt.UNKNOWN=2]="UNKNOWN",Pt[Pt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pt[Pt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pt[Pt.NOT_FOUND=5]="NOT_FOUND",Pt[Pt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pt[Pt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pt[Pt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pt[Pt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pt[Pt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pt[Pt.ABORTED=10]="ABORTED",Pt[Pt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pt[Pt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pt[Pt.INTERNAL=13]="INTERNAL",Pt[Pt.UNAVAILABLE=14]="UNAVAILABLE",Pt[Pt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=new Pr([4294967295,4294967295],0);function yv(r){const t=ww().encode(r),n=new MT;return n.update(t),new Uint8Array(n.digest())}function _v(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),l=t.getUint32(8,!0),c=t.getUint32(12,!0);return[new Pr([n,s],0),new Pr([l,c],0)]}class Pm{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new vl(`Invalid padding: ${n}`);if(s<0)throw new vl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new vl(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new vl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=Pr.fromNumber(this.ge)}ye(t,n,s){let l=t.add(n.multiply(Pr.fromNumber(s)));return l.compare(Rw)===1&&(l=new Pr([l.getBits(0),l.getBits(1)],0)),l.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=yv(t),[s,l]=_v(n);for(let c=0;c<this.hashCount;c++){const d=this.ye(s,l,c);if(!this.we(d))return!1}return!0}static create(t,n,s){const l=t%8==0?0:8-t%8,c=new Uint8Array(Math.ceil(t/8)),d=new Pm(c,l,n);return s.forEach((g=>d.insert(g))),d}insert(t){if(this.ge===0)return;const n=yv(t),[s,l]=_v(n);for(let c=0;c<this.hashCount;c++){const d=this.ye(s,l,c);this.Se(d)}}Se(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class vl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t,n,s,l,c){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=l,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const l=new Map;return l.set(t,Ll.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new fh(_t.min(),l,new ie(Dt),Yi(),Nt())}}class Ll{constructor(t,n,s,l,c){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=l,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Ll(s,n,Nt(),Nt(),Nt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,n,s,l){this.be=t,this.removedTargetIds=n,this.key=s,this.De=l}}class _E{constructor(t,n){this.targetId=t,this.Ce=n}}class vE{constructor(t,n,s=je.EMPTY_BYTE_STRING,l=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=l}}class vv{constructor(){this.ve=0,this.Fe=Tv(),this.Me=je.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Nt(),n=Nt(),s=Nt();return this.Fe.forEach(((l,c)=>{switch(c){case 0:t=t.add(l);break;case 2:n=n.add(l);break;case 1:s=s.add(l);break;default:dt(38017,{changeType:c})}})),new Ll(this.Me,this.xe,t,n,s)}qe(){this.Oe=!1,this.Fe=Tv()}Qe(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Bt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Iw{constructor(t){this.Ge=t,this.ze=new Map,this.je=Yi(),this.Je=_c(),this.He=_c(),this.Ye=new ie(Dt)}Ze(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Xe(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,(n=>{const s=this.nt(n);switch(t.state){case 0:this.rt(n)&&s.Le(t.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(t.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(t.resumeToken));break;default:dt(56790,{state:t.state})}}))}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach(((s,l)=>{this.rt(l)&&n(l)}))}st(t){const n=t.targetId,s=t.Ce.count,l=this.ot(n);if(l){const c=l.target;if(im(c))if(s===0){const d=new ut(c.path);this.et(n,d,Ye.newNoDocument(d,_t.min()))}else Bt(s===1,20013,{expectedCount:s});else{const d=this._t(n);if(d!==s){const g=this.ut(t),p=g?this.ct(g,t,d):1;if(p!==0){this.it(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,y)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:l=0},hashCount:c=0}=n;let d,g;try{d=Br(s).toUint8Array()}catch(p){if(p instanceof GT)return Qa("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{g=new Pm(d,l,c)}catch(p){return Qa(p instanceof vl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return g.ge===0?null:g}ct(t,n,s){return n.Ce.count===s-this.Pt(t,n.targetId)?0:2}Pt(t,n){const s=this.Ge.getRemoteKeysForTarget(n);let l=0;return s.forEach((c=>{const d=this.Ge.ht(),g=`projects/${d.projectId}/databases/${d.database}/documents/${c.path.canonicalString()}`;t.mightContain(g)||(this.et(n,c,null),l++)})),l}Tt(t){const n=new Map;this.ze.forEach(((c,d)=>{const g=this.ot(d);if(g){if(c.current&&im(g.target)){const p=new ut(g.target.path);this.It(p).has(d)||this.Et(d,p)||this.et(d,p,Ye.newNoDocument(p,t))}c.Be&&(n.set(d,c.ke()),c.qe())}}));let s=Nt();this.He.forEach(((c,d)=>{let g=!0;d.forEachWhile((p=>{const y=this.ot(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(g=!1,!1)})),g&&(s=s.add(c))})),this.je.forEach(((c,d)=>d.setReadTime(t)));const l=new fh(t,n,this.Ye,this.je,s);return this.je=Yi(),this.Je=_c(),this.He=_c(),this.Ye=new ie(Dt),l}Xe(t,n){if(!this.rt(t))return;const s=this.Et(t,n.key)?2:0;this.nt(t).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(t)),this.He=this.He.insert(n.key,this.dt(n.key).add(t))}et(t,n,s){if(!this.rt(t))return;const l=this.nt(t);this.Et(t,n)?l.Qe(n,1):l.$e(n),this.He=this.He.insert(n,this.dt(n).delete(t)),this.He=this.He.insert(n,this.dt(n).add(t)),s&&(this.je=this.je.insert(n,s))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let n=this.ze.get(t);return n||(n=new vv,this.ze.set(t,n)),n}dt(t){let n=this.He.get(t);return n||(n=new be(Dt),this.He=this.He.insert(t,n)),n}It(t){let n=this.Je.get(t);return n||(n=new be(Dt),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||it("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new vv),this.Ge.getRemoteKeysForTarget(t).forEach((n=>{this.et(t,n,null)}))}Et(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function _c(){return new ie(ut.comparator)}function Tv(){return new ie(ut.comparator)}const Cw={asc:"ASCENDING",desc:"DESCENDING"},Dw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Nw={and:"AND",or:"OR"};class Ow{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function sm(r,t){return r.useProto3Json||sh(t)?t:{value:t}}function Hc(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function TE(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Mw(r,t){return Hc(r,t.toTimestamp())}function ci(r){return Bt(!!r,49232),_t.fromTimestamp((function(n){const s=zr(n);return new Wt(s.seconds,s.nanos)})(r))}function km(r,t){return am(r,t).canonicalString()}function am(r,t){const n=(function(l){return new Jt(["projects",l.projectId,"databases",l.database])})(r).child("documents");return t===void 0?n:n.child(t)}function EE(r){const t=Jt.fromString(r);return Bt(RE(t),10190,{key:t.toString()}),t}function om(r,t){return km(r.databaseId,t.path)}function Ld(r,t){const n=EE(t);if(n.get(1)!==r.databaseId.projectId)throw new st(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new st(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ut(SE(n))}function AE(r,t){return km(r.databaseId,t)}function Vw(r){const t=EE(r);return t.length===4?Jt.emptyPath():SE(t)}function lm(r){return new Jt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function SE(r){return Bt(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Ev(r,t,n){return{name:om(r,t),fields:n.value.mapValue.fields}}function Pw(r,t){let n;if("targetChange"in t){t.targetChange;const s=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:dt(39313,{state:y})})(t.targetChange.targetChangeType||"NO_CHANGE"),l=t.targetChange.targetIds||[],c=(function(y,A){return y.useProto3Json?(Bt(A===void 0||typeof A=="string",58123),je.fromBase64String(A||"")):(Bt(A===void 0||A instanceof Buffer||A instanceof Uint8Array,16193),je.fromUint8Array(A||new Uint8Array))})(r,t.targetChange.resumeToken),d=t.targetChange.cause,g=d&&(function(y){const A=y.code===void 0?X.UNKNOWN:yE(y.code);return new st(A,y.message||"")})(d);n=new vE(s,l,c,g||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const l=Ld(r,s.document.name),c=ci(s.document.updateTime),d=s.document.createTime?ci(s.document.createTime):_t.min(),g=new an({mapValue:{fields:s.document.fields}}),p=Ye.newFoundDocument(l,c,d,g),y=s.targetIds||[],A=s.removedTargetIds||[];n=new Cc(y,A,p.key,p)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const l=Ld(r,s.document),c=s.readTime?ci(s.readTime):_t.min(),d=Ye.newNoDocument(l,c),g=s.removedTargetIds||[];n=new Cc([],g,d.key,d)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const l=Ld(r,s.document),c=s.removedTargetIds||[];n=new Cc([],c,l,null)}else{if(!("filter"in t))return dt(11601,{Rt:t});{t.filter;const s=t.filter;s.targetId;const{count:l=0,unchangedNames:c}=s,d=new Sw(l,c),g=s.targetId;n=new _E(g,d)}}return n}function kw(r,t){let n;if(t instanceof xl)n={update:Ev(r,t.key,t.value)};else if(t instanceof Mm)n={delete:om(r,t.key)};else if(t instanceof Fr)n={update:Ev(r,t.key,t.data),updateMask:Gw(t.fieldMask)};else{if(!(t instanceof Tw))return dt(16599,{Vt:t.type});n={verify:om(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((s=>(function(c,d){const g=d.transform;if(g instanceof qc)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(g instanceof Ml)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:g.elements}};if(g instanceof Vl)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:g.elements}};if(g instanceof jc)return{fieldPath:d.field.canonicalString(),increment:g.Ae};throw dt(20930,{transform:d.transform})})(0,s)))),t.precondition.isNone||(n.currentDocument=(function(l,c){return c.updateTime!==void 0?{updateTime:Mw(l,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:dt(27497)})(r,t.precondition)),n}function Uw(r,t){return r&&r.length>0?(Bt(t!==void 0,14353),r.map((n=>(function(l,c){let d=l.updateTime?ci(l.updateTime):ci(c);return d.isEqual(_t.min())&&(d=ci(c)),new yw(d,l.transformResults||[])})(n,t)))):[]}function xw(r,t){return{documents:[AE(r,t.path)]}}function Lw(r,t){const n={structuredQuery:{}},s=t.path;let l;t.collectionGroup!==null?(l=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(l=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=AE(r,l);const c=(function(y){if(y.length!==0)return wE(yi.create(y,"and"))})(t.filters);c&&(n.structuredQuery.where=c);const d=(function(y){if(y.length!==0)return y.map((A=>(function(C){return{field:xa(C.field),direction:qw(C.dir)}})(A)))})(t.orderBy);d&&(n.structuredQuery.orderBy=d);const g=sm(r,t.limit);return g!==null&&(n.structuredQuery.limit=g),t.startAt&&(n.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(t.startAt)),t.endAt&&(n.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(t.endAt)),{ft:n,parent:l}}function zw(r){let t=Vw(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let l=null;if(s>0){Bt(s===1,65062);const A=n.from[0];A.allDescendants?l=A.collectionId:t=t.child(A.collectionId)}let c=[];n.where&&(c=(function(I){const C=bE(I);return C instanceof yi&&tE(C)?C.getFilters():[C]})(n.where));let d=[];n.orderBy&&(d=(function(I){return I.map((C=>(function($){return new Bc(La($.field),(function(Z){switch(Z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(C)))})(n.orderBy));let g=null;n.limit&&(g=(function(I){let C;return C=typeof I=="object"?I.value:I,sh(C)?null:C})(n.limit));let p=null;n.startAt&&(p=(function(I){const C=!!I.before,G=I.values||[];return new zc(G,C)})(n.startAt));let y=null;return n.endAt&&(y=(function(I){const C=!I.before,G=I.values||[];return new zc(G,C)})(n.endAt)),iw(t,l,d,c,g,"F",p,y)}function Bw(r,t){const n=(function(l){switch(l){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return dt(28987,{purpose:l})}})(t.purpose);return n==null?null:{"goog-listen-tags":n}}function bE(r){return r.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=La(n.unaryFilter.field);return Se.create(s,"==",{doubleValue:NaN});case"IS_NULL":const l=La(n.unaryFilter.field);return Se.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=La(n.unaryFilter.field);return Se.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=La(n.unaryFilter.field);return Se.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return dt(61313);default:return dt(60726)}})(r):r.fieldFilter!==void 0?(function(n){return Se.create(La(n.fieldFilter.field),(function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return dt(58110);default:return dt(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(n){return yi.create(n.compositeFilter.filters.map((s=>bE(s))),(function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return dt(1026)}})(n.compositeFilter.op))})(r):dt(30097,{filter:r})}function qw(r){return Cw[r]}function jw(r){return Dw[r]}function Hw(r){return Nw[r]}function xa(r){return{fieldPath:r.canonicalString()}}function La(r){return qe.fromServerFormat(r.fieldPath)}function wE(r){return r instanceof Se?(function(n){if(n.op==="=="){if(lv(n.value))return{unaryFilter:{field:xa(n.field),op:"IS_NAN"}};if(ov(n.value))return{unaryFilter:{field:xa(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(lv(n.value))return{unaryFilter:{field:xa(n.field),op:"IS_NOT_NAN"}};if(ov(n.value))return{unaryFilter:{field:xa(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xa(n.field),op:jw(n.op),value:n.value}}})(r):r instanceof yi?(function(n){const s=n.getFilters().map((l=>wE(l)));return s.length===1?s[0]:{compositeFilter:{op:Hw(n.op),filters:s}}})(r):dt(54877,{filter:r})}function Gw(r){const t=[];return r.fields.forEach((n=>t.push(n.canonicalString()))),{fieldPaths:t}}function RE(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t,n,s,l,c=_t.min(),d=_t.min(),g=je.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=l,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=g,this.expectedCount=p}withSequenceNumber(t){return new Or(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(t){this.yt=t}}function Qw(r){const t=zw({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?rm(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(){this.Cn=new Yw}addToCollectionParentIndex(t,n){return this.Cn.add(n),K.resolve()}getCollectionParents(t,n){return K.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return K.resolve()}deleteFieldIndex(t,n){return K.resolve()}deleteAllFieldIndexes(t){return K.resolve()}createTargetIndexes(t,n){return K.resolve()}getDocumentsMatchingTarget(t,n){return K.resolve(null)}getIndexType(t,n){return K.resolve(0)}getFieldIndexes(t,n){return K.resolve([])}getNextCollectionGroupToUpdate(t){return K.resolve(null)}getMinOffset(t,n){return K.resolve(Lr.min())}getMinOffsetFromCollectionGroup(t,n){return K.resolve(Lr.min())}updateCollectionGroup(t,n,s){return K.resolve()}updateIndexEntries(t,n){return K.resolve()}}class Yw{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),l=this.index[n]||new be(Jt.comparator),c=!l.has(s);return this.index[n]=l.add(s),c}has(t){const n=t.lastSegment(),s=t.popLast(),l=this.index[n];return l&&l.has(s)}getEntries(t){return(this.index[t]||new be(Jt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},IE=41943040;class sn{static withCacheSize(t){return new sn(t,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn.DEFAULT_COLLECTION_PERCENTILE=10,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sn.DEFAULT=new sn(IE,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sn.DISABLED=new sn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new $a(0)}static cr(){return new $a(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv="LruGarbageCollector",Xw=1048576;function bv([r,t],[n,s]){const l=Dt(r,n);return l===0?Dt(t,s):l}class $w{constructor(t){this.Ir=t,this.buffer=new be(bv),this.Er=0}dr(){return++this.Er}Ar(t){const n=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();bv(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Zw{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){it(Sv,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){io(n)?it(Sv,"Ignoring IndexedDB error during garbage collection: ",n):await no(n)}await this.Vr(3e5)}))}}class Jw{constructor(t,n){this.mr=t,this.params=n}calculateTargetCount(t,n){return this.mr.gr(t).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(t,n){if(n===0)return K.resolve(rh.ce);const s=new $w(n);return this.mr.forEachTarget(t,(l=>s.Ar(l.sequenceNumber))).next((()=>this.mr.pr(t,(l=>s.Ar(l))))).next((()=>s.maxValue))}removeTargets(t,n,s){return this.mr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.mr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(it("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(Av)):this.getCacheSize(t).next((s=>s<this.params.cacheSizeCollectionThreshold?(it("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Av):this.yr(t,n)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,n){let s,l,c,d,g,p,y;const A=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(it("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),l=this.params.maximumSequenceNumbersToCollect):l=I,d=Date.now(),this.nthSequenceNumber(t,l)))).next((I=>(s=I,g=Date.now(),this.removeTargets(t,s,n)))).next((I=>(c=I,p=Date.now(),this.removeOrphanedDocuments(t,s)))).next((I=>(y=Date.now(),ka()<=Ct.DEBUG&&it("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-A}ms
	Determined least recently used ${l} in `+(g-d)+`ms
	Removed ${c} targets in `+(p-g)+`ms
	Removed ${I} documents in `+(y-p)+`ms
Total Duration: ${y-A}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:c,documentsRemoved:I}))))}}function Ww(r,t){return new Jw(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(){this.changes=new qs((t=>t.toString()),((t,n)=>t.isEqual(n))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Ye.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?K.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(t,n,s,l){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=l}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next((l=>(s=l,this.remoteDocumentCache.getEntry(t,n)))).next((l=>(s!==null&&bl(s.mutation,l,yn.empty(),Wt.now()),l)))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next((s=>this.getLocalViewOfDocuments(t,s,Nt()).next((()=>s))))}getLocalViewOfDocuments(t,n,s=Nt()){const l=Ns();return this.populateOverlays(t,l,n).next((()=>this.computeViews(t,n,l,s).next((c=>{let d=_l();return c.forEach(((g,p)=>{d=d.insert(g,p.overlayedDocument)})),d}))))}getOverlayedDocuments(t,n){const s=Ns();return this.populateOverlays(t,s,n).next((()=>this.computeViews(t,n,s,Nt())))}populateOverlays(t,n,s){const l=[];return s.forEach((c=>{n.has(c)||l.push(c)})),this.documentOverlayCache.getOverlays(t,l).next((c=>{c.forEach(((d,g)=>{n.set(d,g)}))}))}computeViews(t,n,s,l){let c=Yi();const d=Sl(),g=(function(){return Sl()})();return n.forEach(((p,y)=>{const A=s.get(y.key);l.has(y.key)&&(A===void 0||A.mutation instanceof Fr)?c=c.insert(y.key,y):A!==void 0?(d.set(y.key,A.mutation.getFieldMask()),bl(A.mutation,y,A.mutation.getFieldMask(),Wt.now())):d.set(y.key,yn.empty())})),this.recalculateAndSaveOverlays(t,c).next((p=>(p.forEach(((y,A)=>d.set(y,A))),n.forEach(((y,A)=>g.set(y,new eR(A,d.get(y)??null)))),g)))}recalculateAndSaveOverlays(t,n){const s=Sl();let l=new ie(((d,g)=>d-g)),c=Nt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next((d=>{for(const g of d)g.keys().forEach((p=>{const y=n.get(p);if(y===null)return;let A=s.get(p)||yn.empty();A=g.applyToLocalView(y,A),s.set(p,A);const I=(l.get(g.batchId)||Nt()).add(p);l=l.insert(g.batchId,I)}))})).next((()=>{const d=[],g=l.getReverseIterator();for(;g.hasNext();){const p=g.getNext(),y=p.key,A=p.value,I=uE();A.forEach((C=>{if(!c.has(C)){const G=gE(n.get(C),s.get(C));G!==null&&I.set(C,G),c=c.add(C)}})),d.push(this.documentOverlayCache.saveOverlays(t,y,I))}return K.waitFor(d)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next((s=>this.recalculateAndSaveOverlays(t,s)))}getDocumentsMatchingQuery(t,n,s,l){return(function(d){return ut.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):rw(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,l):this.getDocumentsMatchingCollectionQuery(t,n,s,l)}getNextDocuments(t,n,s,l){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,l).next((c=>{const d=l-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,l-c.size):K.resolve(Ns());let g=Cl,p=c;return d.next((y=>K.forEach(y,((A,I)=>(g<I.largestBatchId&&(g=I.largestBatchId),c.get(A)?K.resolve():this.remoteDocumentCache.getEntry(t,A).next((C=>{p=p.insert(A,C)}))))).next((()=>this.populateOverlays(t,y,c))).next((()=>this.computeViews(t,p,y,Nt()))).next((A=>({batchId:g,changes:lE(A)})))))}))}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new ut(n)).next((s=>{let l=_l();return s.isFoundDocument()&&(l=l.insert(s.key,s)),l}))}getDocumentsMatchingCollectionGroupQuery(t,n,s,l){const c=n.collectionGroup;let d=_l();return this.indexManager.getCollectionParents(t,c).next((g=>K.forEach(g,(p=>{const y=(function(I,C){return new oh(C,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(n,p.child(c));return this.getDocumentsMatchingCollectionQuery(t,y,s,l).next((A=>{A.forEach(((I,C)=>{d=d.insert(I,C)}))}))})).next((()=>d))))}getDocumentsMatchingCollectionQuery(t,n,s,l){let c;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next((d=>(c=d,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,c,l)))).next((d=>{c.forEach(((p,y)=>{const A=y.getKey();d.get(A)===null&&(d=d.insert(A,Ye.newInvalidDocument(A)))}));let g=_l();return d.forEach(((p,y)=>{const A=c.get(p);A!==void 0&&bl(A.mutation,y,yn.empty(),Wt.now()),uh(n,y)&&(g=g.insert(p,y))})),g}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,n){return K.resolve(this.Lr.get(n))}saveBundleMetadata(t,n){return this.Lr.set(n.id,(function(l){return{id:l.id,version:l.version,createTime:ci(l.createTime)}})(n)),K.resolve()}getNamedQuery(t,n){return K.resolve(this.kr.get(n))}saveNamedQuery(t,n){return this.kr.set(n.name,(function(l){return{name:l.name,query:Qw(l.bundledQuery),readTime:ci(l.readTime)}})(n)),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(){this.overlays=new ie(ut.comparator),this.qr=new Map}getOverlay(t,n){return K.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Ns();return K.forEach(n,(l=>this.getOverlay(t,l).next((c=>{c!==null&&s.set(l,c)})))).next((()=>s))}saveOverlays(t,n,s){return s.forEach(((l,c)=>{this.St(t,n,c)})),K.resolve()}removeOverlaysForBatchId(t,n,s){const l=this.qr.get(s);return l!==void 0&&(l.forEach((c=>this.overlays=this.overlays.remove(c))),this.qr.delete(s)),K.resolve()}getOverlaysForCollection(t,n,s){const l=Ns(),c=n.length+1,d=new ut(n.child("")),g=this.overlays.getIteratorFrom(d);for(;g.hasNext();){const p=g.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===c&&p.largestBatchId>s&&l.set(p.getKey(),p)}return K.resolve(l)}getOverlaysForCollectionGroup(t,n,s,l){let c=new ie(((y,A)=>y-A));const d=this.overlays.getIterator();for(;d.hasNext();){const y=d.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let A=c.get(y.largestBatchId);A===null&&(A=Ns(),c=c.insert(y.largestBatchId,A)),A.set(y.getKey(),y)}}const g=Ns(),p=c.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,A)=>g.set(y,A))),!(g.size()>=l)););return K.resolve(g)}St(t,n,s){const l=this.overlays.get(s.key);if(l!==null){const d=this.qr.get(l.largestBatchId).delete(s.key);this.qr.set(l.largestBatchId,d)}this.overlays=this.overlays.insert(s.key,new Aw(n,s));let c=this.qr.get(n);c===void 0&&(c=Nt(),this.qr.set(n,c)),this.qr.set(n,c.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(){this.sessionToken=je.EMPTY_BYTE_STRING}getSessionToken(t){return K.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(){this.Qr=new be(Me.$r),this.Ur=new be(Me.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,n){const s=new Me(t,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(t,n){t.forEach((s=>this.addReference(s,n)))}removeReference(t,n){this.Gr(new Me(t,n))}zr(t,n){t.forEach((s=>this.removeReference(s,n)))}jr(t){const n=new ut(new Jt([])),s=new Me(n,t),l=new Me(n,t+1),c=[];return this.Ur.forEachInRange([s,l],(d=>{this.Gr(d),c.push(d.key)})),c}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const n=new ut(new Jt([])),s=new Me(n,t),l=new Me(n,t+1);let c=Nt();return this.Ur.forEachInRange([s,l],(d=>{c=c.add(d.key)})),c}containsKey(t){const n=new Me(t,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Me{constructor(t,n){this.key=t,this.Yr=n}static $r(t,n){return ut.comparator(t.key,n.key)||Dt(t.Yr,n.Yr)}static Kr(t,n){return Dt(t.Yr,n.Yr)||ut.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new be(Me.$r)}checkEmpty(t){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,l){const c=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new Ew(c,n,s,l);this.mutationQueue.push(d);for(const g of l)this.Zr=this.Zr.add(new Me(g.key,c)),this.indexManager.addToCollectionParentIndex(t,g.key.path.popLast());return K.resolve(d)}lookupMutationBatch(t,n){return K.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,l=this.ei(s),c=l<0?0:l;return K.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?Rm:this.tr-1)}getAllMutationBatches(t){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Me(n,0),l=new Me(n,Number.POSITIVE_INFINITY),c=[];return this.Zr.forEachInRange([s,l],(d=>{const g=this.Xr(d.Yr);c.push(g)})),K.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new be(Dt);return n.forEach((l=>{const c=new Me(l,0),d=new Me(l,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([c,d],(g=>{s=s.add(g.Yr)}))})),K.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,l=s.length+1;let c=s;ut.isDocumentKey(c)||(c=c.child(""));const d=new Me(new ut(c),0);let g=new be(Dt);return this.Zr.forEachWhile((p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===l&&(g=g.add(p.Yr)),!0)}),d),K.resolve(this.ti(g))}ti(t){const n=[];return t.forEach((s=>{const l=this.Xr(s);l!==null&&n.push(l)})),n}removeMutationBatch(t,n){Bt(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return K.forEach(n.mutations,(l=>{const c=new Me(l.key,n.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(t,l.key)})).next((()=>{this.Zr=s}))}ir(t){}containsKey(t,n){const s=new Me(n,0),l=this.Zr.firstAfterOrEqual(s);return K.resolve(n.isEqual(l&&l.key))}performConsistencyCheck(t){return this.mutationQueue.length,K.resolve()}ni(t,n){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const n=this.ei(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(t){this.ri=t,this.docs=(function(){return new ie(ut.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,l=this.docs.get(s),c=l?l.size:0,d=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:d}),this.size+=d-c,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return K.resolve(s?s.document.mutableCopy():Ye.newInvalidDocument(n))}getEntries(t,n){let s=Yi();return n.forEach((l=>{const c=this.docs.get(l);s=s.insert(l,c?c.document.mutableCopy():Ye.newInvalidDocument(l))})),K.resolve(s)}getDocumentsMatchingQuery(t,n,s,l){let c=Yi();const d=n.path,g=new ut(d.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(g);for(;p.hasNext();){const{key:y,value:{document:A}}=p.getNext();if(!d.isPrefixOf(y.path))break;y.path.length>d.length+1||kb(Pb(A),s)<=0||(l.has(A.key)||uh(n,A))&&(c=c.insert(A.key,A.mutableCopy()))}return K.resolve(c)}getAllFromCollectionGroup(t,n,s,l){dt(9500)}ii(t,n){return K.forEach(this.docs,(s=>n(s)))}newChangeBuffer(t){return new lR(this)}getSize(t){return K.resolve(this.size)}}class lR extends tR{constructor(t){super(),this.Nr=t}applyChanges(t){const n=[];return this.changes.forEach(((s,l)=>{l.isValidDocument()?n.push(this.Nr.addEntry(t,l)):this.Nr.removeEntry(s)})),K.waitFor(n)}getFromCache(t,n){return this.Nr.getEntry(t,n)}getAllFromCache(t,n){return this.Nr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(t){this.persistence=t,this.si=new qs((n=>Dm(n)),Nm),this.lastRemoteSnapshotVersion=_t.min(),this.highestTargetId=0,this.oi=0,this._i=new Um,this.targetCount=0,this.ai=$a.ur()}forEachTarget(t,n){return this.si.forEach(((s,l)=>n(l))),K.resolve()}getLastRemoteSnapshotVersion(t){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return K.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),K.resolve()}Pr(t){this.si.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ai=new $a(n),this.highestTargetId=n),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,n){return this.Pr(n),this.targetCount+=1,K.resolve()}updateTargetData(t,n){return this.Pr(n),K.resolve()}removeTargetData(t,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,K.resolve()}removeTargets(t,n,s){let l=0;const c=[];return this.si.forEach(((d,g)=>{g.sequenceNumber<=n&&s.get(g.targetId)===null&&(this.si.delete(d),c.push(this.removeMatchingKeysForTargetId(t,g.targetId)),l++)})),K.waitFor(c).next((()=>l))}getTargetCount(t){return K.resolve(this.targetCount)}getTargetData(t,n){const s=this.si.get(n)||null;return K.resolve(s)}addMatchingKeys(t,n,s){return this._i.Wr(n,s),K.resolve()}removeMatchingKeys(t,n,s){this._i.zr(n,s);const l=this.persistence.referenceDelegate,c=[];return l&&n.forEach((d=>{c.push(l.markPotentiallyOrphaned(t,d))})),K.waitFor(c)}removeMatchingKeysForTargetId(t,n){return this._i.jr(n),K.resolve()}getMatchingKeysForTargetId(t,n){const s=this._i.Hr(n);return K.resolve(s)}containsKey(t,n){return K.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(t,n){this.ui={},this.overlays={},this.ci=new rh(0),this.li=!1,this.li=!0,this.hi=new sR,this.referenceDelegate=t(this),this.Pi=new uR(this),this.indexManager=new Kw,this.remoteDocumentCache=(function(l){return new oR(l)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new Fw(n),this.Ii=new iR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new rR,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.ui[t.toKey()];return s||(s=new aR(n,this.referenceDelegate),this.ui[t.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,n,s){it("MemoryPersistence","Starting transaction:",t);const l=new cR(this.ci.next());return this.referenceDelegate.Ei(),s(l).next((c=>this.referenceDelegate.di(l).next((()=>c)))).toPromise().then((c=>(l.raiseOnCommittedEvent(),c)))}Ai(t,n){return K.or(Object.values(this.ui).map((s=>()=>s.containsKey(t,n))))}}class cR extends xb{constructor(t){super(),this.currentSequenceNumber=t}}class xm{constructor(t){this.persistence=t,this.Ri=new Um,this.Vi=null}static mi(t){return new xm(t)}get fi(){if(this.Vi)return this.Vi;throw dt(60996)}addReference(t,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),K.resolve()}removeReference(t,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),K.resolve()}markPotentiallyOrphaned(t,n){return this.fi.add(n.toString()),K.resolve()}removeTarget(t,n){this.Ri.jr(n.targetId).forEach((l=>this.fi.add(l.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next((l=>{l.forEach((c=>this.fi.add(c.toString())))})).next((()=>s.removeTargetData(t,n)))}Ei(){this.Vi=new Set}di(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.fi,(s=>{const l=ut.fromPath(s);return this.gi(t,l).next((c=>{c||n.removeEntry(l,_t.min())}))})).next((()=>(this.Vi=null,n.apply(t))))}updateLimboDocument(t,n){return this.gi(t,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(t){return 0}gi(t,n){return K.or([()=>K.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ai(t,n)])}}class Gc{constructor(t,n){this.persistence=t,this.pi=new qs((s=>Bb(s.path)),((s,l)=>s.isEqual(l))),this.garbageCollector=Ww(this,n)}static mi(t,n){return new Gc(t,n)}Ei(){}di(t){return K.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}gr(t){const n=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((s=>n.next((l=>s+l))))}wr(t){let n=0;return this.pr(t,(s=>{n++})).next((()=>n))}pr(t,n){return K.forEach(this.pi,((s,l)=>this.br(t,s,l).next((c=>c?K.resolve():n(l)))))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const l=this.persistence.getRemoteDocumentCache(),c=l.newChangeBuffer();return l.ii(t,(d=>this.br(t,d,n).next((g=>{g||(s++,c.removeEntry(d,_t.min()))})))).next((()=>c.apply(t))).next((()=>s))}markPotentiallyOrphaned(t,n){return this.pi.set(n,t.currentSequenceNumber),K.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.pi.set(s,t.currentSequenceNumber),K.resolve()}removeReference(t,n,s){return this.pi.set(s,t.currentSequenceNumber),K.resolve()}updateLimboDocument(t,n){return this.pi.set(n,t.currentSequenceNumber),K.resolve()}Ti(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=wc(t.data.value)),n}br(t,n,s){return K.or([()=>this.persistence.Ai(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const l=this.pi.get(n);return K.resolve(l!==void 0&&l>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(t,n,s,l){this.targetId=t,this.fromCache=n,this.Es=s,this.ds=l}static As(t,n){let s=Nt(),l=Nt();for(const c of n.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:l=l.add(c.doc.key)}return new Lm(t,n.fromCache,s,l)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return n1()?8:Lb(Xe())>0?6:4})()}initialize(t,n){this.ps=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,s,l){const c={result:null};return this.ys(t,n).next((d=>{c.result=d})).next((()=>{if(!c.result)return this.ws(t,n,l,s).next((d=>{c.result=d}))})).next((()=>{if(c.result)return;const d=new hR;return this.Ss(t,n,d).next((g=>{if(c.result=g,this.Vs)return this.bs(t,n,d,g.size)}))})).next((()=>c.result))}bs(t,n,s,l){return s.documentReadCount<this.fs?(ka()<=Ct.DEBUG&&it("QueryEngine","SDK will not create cache indexes for query:",Ua(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),K.resolve()):(ka()<=Ct.DEBUG&&it("QueryEngine","Query:",Ua(n),"scans",s.documentReadCount,"local documents and returns",l,"documents as results."),s.documentReadCount>this.gs*l?(ka()<=Ct.DEBUG&&it("QueryEngine","The SDK decides to create cache indexes for query:",Ua(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ui(n))):K.resolve())}ys(t,n){if(fv(n))return K.resolve(null);let s=ui(n);return this.indexManager.getIndexType(t,s).next((l=>l===0?null:(n.limit!==null&&l===1&&(n=rm(n,null,"F"),s=ui(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next((c=>{const d=Nt(...c);return this.ps.getDocuments(t,d).next((g=>this.indexManager.getMinOffset(t,s).next((p=>{const y=this.Ds(n,g);return this.Cs(n,y,d,p.readTime)?this.ys(t,rm(n,null,"F")):this.vs(t,y,n,p)}))))})))))}ws(t,n,s,l){return fv(n)||l.isEqual(_t.min())?K.resolve(null):this.ps.getDocuments(t,s).next((c=>{const d=this.Ds(n,c);return this.Cs(n,d,s,l)?K.resolve(null):(ka()<=Ct.DEBUG&&it("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),Ua(n)),this.vs(t,d,n,Vb(l,Cl)).next((g=>g)))}))}Ds(t,n){let s=new be(aE(t));return n.forEach(((l,c)=>{uh(t,c)&&(s=s.add(c))})),s}Cs(t,n,s,l){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const c=t.limitType==="F"?n.last():n.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(l)>0)}Ss(t,n,s){return ka()<=Ct.DEBUG&&it("QueryEngine","Using full collection scan to execute query:",Ua(n)),this.ps.getDocumentsMatchingQuery(t,n,Lr.min(),s)}vs(t,n,s,l){return this.ps.getDocumentsMatchingQuery(t,s,l).next((c=>(n.forEach((d=>{c=c.insert(d.key,d)})),c)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm="LocalStore",dR=3e8;class mR{constructor(t,n,s,l){this.persistence=t,this.Fs=n,this.serializer=l,this.Ms=new ie(Dt),this.xs=new qs((c=>Dm(c)),Nm),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(s)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new nR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>t.collect(n,this.Ms)))}}function gR(r,t,n,s){return new mR(r,t,n,s)}async function DE(r,t){const n=vt(r);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let l;return n.mutationQueue.getAllMutationBatches(s).next((c=>(l=c,n.Bs(t),n.mutationQueue.getAllMutationBatches(s)))).next((c=>{const d=[],g=[];let p=Nt();for(const y of l){d.push(y.batchId);for(const A of y.mutations)p=p.add(A.key)}for(const y of c){g.push(y.batchId);for(const A of y.mutations)p=p.add(A.key)}return n.localDocuments.getDocuments(s,p).next((y=>({Ls:y,removedBatchIds:d,addedBatchIds:g})))}))}))}function pR(r,t){const n=vt(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const l=t.batch.keys(),c=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(g,p,y,A){const I=y.batch,C=I.keys();let G=K.resolve();return C.forEach(($=>{G=G.next((()=>A.getEntry(p,$))).next((nt=>{const Z=y.docVersions.get($);Bt(Z!==null,48541),nt.version.compareTo(Z)<0&&(I.applyToRemoteDocument(nt,y),nt.isValidDocument()&&(nt.setReadTime(y.commitVersion),A.addEntry(nt)))}))})),G.next((()=>g.mutationQueue.removeMutationBatch(p,I)))})(n,s,t,c).next((()=>c.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,l,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(g){let p=Nt();for(let y=0;y<g.mutationResults.length;++y)g.mutationResults[y].transformResults.length>0&&(p=p.add(g.batch.mutations[y].key));return p})(t)))).next((()=>n.localDocuments.getDocuments(s,l)))}))}function NE(r){const t=vt(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>t.Pi.getLastRemoteSnapshotVersion(n)))}function yR(r,t){const n=vt(r),s=t.snapshotVersion;let l=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(c=>{const d=n.Ns.newChangeBuffer({trackRemovals:!0});l=n.Ms;const g=[];t.targetChanges.forEach(((A,I)=>{const C=l.get(I);if(!C)return;g.push(n.Pi.removeMatchingKeys(c,A.removedDocuments,I).next((()=>n.Pi.addMatchingKeys(c,A.addedDocuments,I))));let G=C.withSequenceNumber(c.currentSequenceNumber);t.targetMismatches.get(I)!==null?G=G.withResumeToken(je.EMPTY_BYTE_STRING,_t.min()).withLastLimboFreeSnapshotVersion(_t.min()):A.resumeToken.approximateByteSize()>0&&(G=G.withResumeToken(A.resumeToken,s)),l=l.insert(I,G),(function(nt,Z,Tt){return nt.resumeToken.approximateByteSize()===0||Z.snapshotVersion.toMicroseconds()-nt.snapshotVersion.toMicroseconds()>=dR?!0:Tt.addedDocuments.size+Tt.modifiedDocuments.size+Tt.removedDocuments.size>0})(C,G,A)&&g.push(n.Pi.updateTargetData(c,G))}));let p=Yi(),y=Nt();if(t.documentUpdates.forEach((A=>{t.resolvedLimboDocuments.has(A)&&g.push(n.persistence.referenceDelegate.updateLimboDocument(c,A))})),g.push(_R(c,d,t.documentUpdates).next((A=>{p=A.ks,y=A.qs}))),!s.isEqual(_t.min())){const A=n.Pi.getLastRemoteSnapshotVersion(c).next((I=>n.Pi.setTargetsMetadata(c,c.currentSequenceNumber,s)));g.push(A)}return K.waitFor(g).next((()=>d.apply(c))).next((()=>n.localDocuments.getLocalViewOfDocuments(c,p,y))).next((()=>p))})).then((c=>(n.Ms=l,c)))}function _R(r,t,n){let s=Nt(),l=Nt();return n.forEach((c=>s=s.add(c))),t.getEntries(r,s).next((c=>{let d=Yi();return n.forEach(((g,p)=>{const y=c.get(g);p.isFoundDocument()!==y.isFoundDocument()&&(l=l.add(g)),p.isNoDocument()&&p.version.isEqual(_t.min())?(t.removeEntry(g,p.readTime),d=d.insert(g,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(p),d=d.insert(g,p)):it(zm,"Ignoring outdated watch update for ",g,". Current version:",y.version," Watch version:",p.version)})),{ks:d,qs:l}}))}function vR(r,t){const n=vt(r);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(t===void 0&&(t=Rm),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t))))}function TR(r,t){const n=vt(r);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let l;return n.Pi.getTargetData(s,t).next((c=>c?(l=c,K.resolve(l)):n.Pi.allocateTargetId(s).next((d=>(l=new Or(t,d,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,l).next((()=>l)))))))})).then((s=>{const l=n.Ms.get(s.targetId);return(l===null||s.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(t,s.targetId)),s}))}async function um(r,t,n){const s=vt(r),l=s.Ms.get(t),c=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",c,(d=>s.persistence.referenceDelegate.removeTarget(d,l)))}catch(d){if(!io(d))throw d;it(zm,`Failed to update sequence numbers for target ${t}: ${d}`)}s.Ms=s.Ms.remove(t),s.xs.delete(l.target)}function wv(r,t,n){const s=vt(r);let l=_t.min(),c=Nt();return s.persistence.runTransaction("Execute query","readwrite",(d=>(function(p,y,A){const I=vt(p),C=I.xs.get(A);return C!==void 0?K.resolve(I.Ms.get(C)):I.Pi.getTargetData(y,A)})(s,d,ui(t)).next((g=>{if(g)return l=g.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(d,g.targetId).next((p=>{c=p}))})).next((()=>s.Fs.getDocumentsMatchingQuery(d,t,n?l:_t.min(),n?c:Nt()))).next((g=>(ER(s,aw(t),g),{documents:g,Qs:c})))))}function ER(r,t,n){let s=r.Os.get(t)||_t.min();n.forEach(((l,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)})),r.Os.set(t,s)}class Rv{constructor(){this.activeTargetIds=fw()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class AR{constructor(){this.Mo=new Rv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,n,s){this.xo[t]=n}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Rv,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv="ConnectivityMonitor";class Cv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){it(Iv,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){it(Iv,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vc=null;function cm(){return vc===null?vc=(function(){return 268435456+Math.round(2147483648*Math.random())})():vc++,"0x"+vc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd="RestConnection",bR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class wR{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+t.host,this.Ko=`projects/${s}/databases/${l}`,this.Wo=this.databaseId.database===xc?`project_id=${s}`:`project_id=${s}&database_id=${l}`}Go(t,n,s,l,c){const d=cm(),g=this.zo(t,n.toUriEncodedString());it(zd,`Sending RPC '${t}' ${d}:`,g,s);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,l,c);const{host:y}=new URL(g),A=Wa(y);return this.Jo(t,g,p,s,A).then((I=>(it(zd,`Received RPC '${t}' ${d}: `,I),I)),(I=>{throw Qa(zd,`RPC '${t}' ${d} failed with error: `,I,"url: ",g,"request:",s),I}))}Ho(t,n,s,l,c,d){return this.Go(t,n,s,l,c)}jo(t,n,s){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+eo})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((l,c)=>t[c]=l)),s&&s.headers.forEach(((l,c)=>t[c]=l))}zo(t,n){const s=bR[t];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="WebChannelConnection";class IR extends wR{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,s,l,c){const d=cm();return new Promise(((g,p)=>{const y=new VT;y.setWithCredentials(!0),y.listenOnce(PT.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case bc.NO_ERROR:const I=y.getResponseJson();it(Qe,`XHR for RPC '${t}' ${d} received:`,JSON.stringify(I)),g(I);break;case bc.TIMEOUT:it(Qe,`RPC '${t}' ${d} timed out`),p(new st(X.DEADLINE_EXCEEDED,"Request time out"));break;case bc.HTTP_ERROR:const C=y.getStatus();if(it(Qe,`RPC '${t}' ${d} failed with status:`,C,"response text:",y.getResponseText()),C>0){let G=y.getResponseJson();Array.isArray(G)&&(G=G[0]);const $=G?.error;if($&&$.status&&$.message){const nt=(function(Tt){const gt=Tt.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(gt)>=0?gt:X.UNKNOWN})($.status);p(new st(nt,$.message))}else p(new st(X.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new st(X.UNAVAILABLE,"Connection failed."));break;default:dt(9055,{l_:t,streamId:d,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{it(Qe,`RPC '${t}' ${d} completed.`)}}));const A=JSON.stringify(l);it(Qe,`RPC '${t}' ${d} sending request:`,l),y.send(n,"POST",A,s,15)}))}T_(t,n,s){const l=cm(),c=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],d=xT(),g=UT(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const A=c.join("");it(Qe,`Creating RPC '${t}' stream ${l}: ${A}`,p);const I=d.createWebChannel(A,p);this.I_(I);let C=!1,G=!1;const $=new RR({Yo:Z=>{G?it(Qe,`Not sending because RPC '${t}' stream ${l} is closed:`,Z):(C||(it(Qe,`Opening RPC '${t}' stream ${l} transport.`),I.open(),C=!0),it(Qe,`RPC '${t}' stream ${l} sending:`,Z),I.send(Z))},Zo:()=>I.close()}),nt=(Z,Tt,gt)=>{Z.listen(Tt,(ct=>{try{gt(ct)}catch(qt){setTimeout((()=>{throw qt}),0)}}))};return nt(I,yl.EventType.OPEN,(()=>{G||(it(Qe,`RPC '${t}' stream ${l} transport opened.`),$.o_())})),nt(I,yl.EventType.CLOSE,(()=>{G||(G=!0,it(Qe,`RPC '${t}' stream ${l} transport closed`),$.a_(),this.E_(I))})),nt(I,yl.EventType.ERROR,(Z=>{G||(G=!0,Qa(Qe,`RPC '${t}' stream ${l} transport errored. Name:`,Z.name,"Message:",Z.message),$.a_(new st(X.UNAVAILABLE,"The operation could not be completed")))})),nt(I,yl.EventType.MESSAGE,(Z=>{if(!G){const Tt=Z.data[0];Bt(!!Tt,16349);const gt=Tt,ct=gt?.error||gt[0]?.error;if(ct){it(Qe,`RPC '${t}' stream ${l} received error:`,ct);const qt=ct.status;let Et=(function(S){const R=pe[S];if(R!==void 0)return yE(R)})(qt),Lt=ct.message;Et===void 0&&(Et=X.INTERNAL,Lt="Unknown error status: "+qt+" with message "+ct.message),G=!0,$.a_(new st(Et,Lt)),I.close()}else it(Qe,`RPC '${t}' stream ${l} received:`,Tt),$.u_(Tt)}})),nt(g,kT.STAT_EVENT,(Z=>{Z.stat===Jd.PROXY?it(Qe,`RPC '${t}' stream ${l} detected buffering proxy`):Z.stat===Jd.NOPROXY&&it(Qe,`RPC '${t}' stream ${l} detected no buffering proxy`)})),setTimeout((()=>{$.__()}),0),$}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((n=>n===t))}}function Bd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(r){return new Ow(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(t,n,s=1e3,l=1.5,c=6e4){this.Mi=t,this.timerId=n,this.d_=s,this.A_=l,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),l=Math.max(0,n-s);l>0&&it("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,l,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv="PersistentStream";class ME{constructor(t,n,s,l,c,d,g,p){this.Mi=t,this.S_=s,this.b_=l,this.connection=c,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=g,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new OE(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===X.RESOURCE_EXHAUSTED?(Ki(n.toString()),Ki("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(n)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,l])=>{this.D_===n&&this.G_(s,l)}),(s=>{t((()=>{const l=new st(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(l)}))}))}G_(t,n){const s=this.W_(this.D_);this.stream=this.j_(t,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((l=>{s((()=>this.z_(l)))})),this.stream.onMessage((l=>{s((()=>++this.F_==1?this.J_(l):this.onNext(l)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return it(Dv,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return n=>{this.Mi.enqueueAndForget((()=>this.D_===t?n():(it(Dv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class CR extends ME{constructor(t,n,s,l,c,d){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,l,d),this.serializer=c}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=Pw(this.serializer,t),s=(function(c){if(!("targetChange"in c))return _t.min();const d=c.targetChange;return d.targetIds&&d.targetIds.length?_t.min():d.readTime?ci(d.readTime):_t.min()})(t);return this.listener.H_(n,s)}Y_(t){const n={};n.database=lm(this.serializer),n.addTarget=(function(c,d){let g;const p=d.target;if(g=im(p)?{documents:xw(c,p)}:{query:Lw(c,p).ft},g.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){g.resumeToken=TE(c,d.resumeToken);const y=sm(c,d.expectedCount);y!==null&&(g.expectedCount=y)}else if(d.snapshotVersion.compareTo(_t.min())>0){g.readTime=Hc(c,d.snapshotVersion.toTimestamp());const y=sm(c,d.expectedCount);y!==null&&(g.expectedCount=y)}return g})(this.serializer,t);const s=Bw(this.serializer,t);s&&(n.labels=s),this.q_(n)}Z_(t){const n={};n.database=lm(this.serializer),n.removeTarget=t,this.q_(n)}}class DR extends ME{constructor(t,n,s,l,c,d){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,l,d),this.serializer=c}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return Bt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Bt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Bt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=Uw(t.writeResults,t.commitTime),s=ci(t.commitTime);return this.listener.na(s,n)}ra(){const t={};t.database=lm(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map((s=>kw(this.serializer,s)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{}class OR extends NR{constructor(t,n,s,l){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=l,this.ia=!1}sa(){if(this.ia)throw new st(X.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,n,s,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Go(t,am(n,s),l,c,d))).catch((c=>{throw c.name==="FirebaseError"?(c.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new st(X.UNKNOWN,c.toString())}))}Ho(t,n,s,l,c){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([d,g])=>this.connection.Ho(t,am(n,s),l,d,g,c))).catch((d=>{throw d.name==="FirebaseError"?(d.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new st(X.UNKNOWN,d.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class MR{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ki(n),this.aa=!1):it("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="RemoteStore";class VR{constructor(t,n,s,l,c){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=c,this.Aa.Oo((d=>{s.enqueueAndForget((async()=>{js(this)&&(it(ks,"Restarting streams for network reachability change."),await(async function(p){const y=vt(p);y.Ea.add(4),await zl(y),y.Ra.set("Unknown"),y.Ea.delete(4),await mh(y)})(this))}))})),this.Ra=new MR(s,l)}}async function mh(r){if(js(r))for(const t of r.da)await t(!0)}async function zl(r){for(const t of r.da)await t(!1)}function VE(r,t){const n=vt(r);n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),Hm(n)?jm(n):ro(n).O_()&&qm(n,t))}function Bm(r,t){const n=vt(r),s=ro(n);n.Ia.delete(t),s.O_()&&PE(n,t),n.Ia.size===0&&(s.O_()?s.L_():js(n)&&n.Ra.set("Unknown"))}function qm(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(_t.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ro(r).Y_(t)}function PE(r,t){r.Va.Ue(t),ro(r).Z_(t)}function jm(r){r.Va=new Iw({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),ro(r).start(),r.Ra.ua()}function Hm(r){return js(r)&&!ro(r).x_()&&r.Ia.size>0}function js(r){return vt(r).Ea.size===0}function kE(r){r.Va=void 0}async function PR(r){r.Ra.set("Online")}async function kR(r){r.Ia.forEach(((t,n)=>{qm(r,t)}))}async function UR(r,t){kE(r),Hm(r)?(r.Ra.ha(t),jm(r)):r.Ra.set("Unknown")}async function xR(r,t,n){if(r.Ra.set("Online"),t instanceof vE&&t.state===2&&t.cause)try{await(async function(l,c){const d=c.cause;for(const g of c.targetIds)l.Ia.has(g)&&(await l.remoteSyncer.rejectListen(g,d),l.Ia.delete(g),l.Va.removeTarget(g))})(r,t)}catch(s){it(ks,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Fc(r,s)}else if(t instanceof Cc?r.Va.Ze(t):t instanceof _E?r.Va.st(t):r.Va.tt(t),!n.isEqual(_t.min()))try{const s=await NE(r.localStore);n.compareTo(s)>=0&&await(function(c,d){const g=c.Va.Tt(d);return g.targetChanges.forEach(((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const A=c.Ia.get(y);A&&c.Ia.set(y,A.withResumeToken(p.resumeToken,d))}})),g.targetMismatches.forEach(((p,y)=>{const A=c.Ia.get(p);if(!A)return;c.Ia.set(p,A.withResumeToken(je.EMPTY_BYTE_STRING,A.snapshotVersion)),PE(c,p);const I=new Or(A.target,p,y,A.sequenceNumber);qm(c,I)})),c.remoteSyncer.applyRemoteEvent(g)})(r,n)}catch(s){it(ks,"Failed to raise snapshot:",s),await Fc(r,s)}}async function Fc(r,t,n){if(!io(t))throw t;r.Ea.add(1),await zl(r),r.Ra.set("Offline"),n||(n=()=>NE(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{it(ks,"Retrying IndexedDB access"),await n(),r.Ea.delete(1),await mh(r)}))}function UE(r,t){return t().catch((n=>Fc(r,n,t)))}async function gh(r){const t=vt(r),n=jr(t);let s=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Rm;for(;LR(t);)try{const l=await vR(t.localStore,s);if(l===null){t.Ta.length===0&&n.L_();break}s=l.batchId,zR(t,l)}catch(l){await Fc(t,l)}xE(t)&&LE(t)}function LR(r){return js(r)&&r.Ta.length<10}function zR(r,t){r.Ta.push(t);const n=jr(r);n.O_()&&n.X_&&n.ea(t.mutations)}function xE(r){return js(r)&&!jr(r).x_()&&r.Ta.length>0}function LE(r){jr(r).start()}async function BR(r){jr(r).ra()}async function qR(r){const t=jr(r);for(const n of r.Ta)t.ea(n.mutations)}async function jR(r,t,n){const s=r.Ta.shift(),l=Vm.from(s,t,n);await UE(r,(()=>r.remoteSyncer.applySuccessfulWrite(l))),await gh(r)}async function HR(r,t){t&&jr(r).X_&&await(async function(s,l){if((function(d){return bw(d)&&d!==X.ABORTED})(l.code)){const c=s.Ta.shift();jr(s).B_(),await UE(s,(()=>s.remoteSyncer.rejectFailedWrite(c.batchId,l))),await gh(s)}})(r,t),xE(r)&&LE(r)}async function Nv(r,t){const n=vt(r);n.asyncQueue.verifyOperationInProgress(),it(ks,"RemoteStore received new credentials");const s=js(n);n.Ea.add(3),await zl(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await mh(n)}async function GR(r,t){const n=vt(r);t?(n.Ea.delete(2),await mh(n)):t||(n.Ea.add(2),await zl(n),n.Ra.set("Unknown"))}function ro(r){return r.ma||(r.ma=(function(n,s,l){const c=vt(n);return c.sa(),new CR(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)})(r.datastore,r.asyncQueue,{Xo:PR.bind(null,r),t_:kR.bind(null,r),r_:UR.bind(null,r),H_:xR.bind(null,r)}),r.da.push((async t=>{t?(r.ma.B_(),Hm(r)?jm(r):r.Ra.set("Unknown")):(await r.ma.stop(),kE(r))}))),r.ma}function jr(r){return r.fa||(r.fa=(function(n,s,l){const c=vt(n);return c.sa(),new DR(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:BR.bind(null,r),r_:HR.bind(null,r),ta:qR.bind(null,r),na:jR.bind(null,r)}),r.da.push((async t=>{t?(r.fa.B_(),await gh(r)):(await r.fa.stop(),r.Ta.length>0&&(it(ks,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(t,n,s,l,c){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=l,this.removalCallback=c,this.deferred=new kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,l,c){const d=Date.now()+s,g=new Gm(t,n,d,l,c);return g.start(s),g}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new st(X.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fm(r,t){if(Ki("AsyncQueue",`${t}: ${r}`),io(r))return new st(X.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{static emptySet(t){return new Ba(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||ut.comparator(n.key,s.key):(n,s)=>ut.comparator(n.key,s.key),this.keyedMap=_l(),this.sortedSet=new ie(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((n,s)=>(t(n),!1)))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ba)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const l=n.getNext().key,c=s.getNext().key;if(!l.isEqual(c))return!1}return!0}toString(){const t=[];return this.forEach((n=>{t.push(n.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Ba;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(){this.ga=new ie(ut.comparator)}track(t){const n=t.doc.key,s=this.ga.get(n);s?t.type!==0&&s.type===3?this.ga=this.ga.insert(n,t):t.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.ga=this.ga.remove(n):t.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):dt(63341,{Rt:t,pa:s}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal(((n,s)=>{t.push(s)})),t}}class Za{constructor(t,n,s,l,c,d,g,p,y){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=l,this.mutatedKeys=c,this.fromCache=d,this.syncStateChanged=g,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(t,n,s,l,c){const d=[];return n.forEach((g=>{d.push({type:0,doc:g})})),new Za(t,n,Ba.emptySet(n),d,s,l,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&lh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let l=0;l<n.length;l++)if(n[l].type!==s[l].type||!n[l].doc.isEqual(s[l].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class QR{constructor(){this.queries=Mv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const l=vt(n),c=l.queries;l.queries=Mv(),c.forEach(((d,g)=>{for(const p of g.Sa)p.onError(s)}))})(this,new st(X.ABORTED,"Firestore shutting down"))}}function Mv(){return new qs((r=>sE(r)),lh)}async function KR(r,t){const n=vt(r);let s=3;const l=t.query;let c=n.queries.get(l);c?!c.ba()&&t.Da()&&(s=2):(c=new FR,s=t.Da()?0:1);try{switch(s){case 0:c.wa=await n.onListen(l,!0);break;case 1:c.wa=await n.onListen(l,!1);break;case 2:await n.onFirstRemoteStoreListen(l)}}catch(d){const g=Fm(d,`Initialization of query '${Ua(t.query)}' failed`);return void t.onError(g)}n.queries.set(l,c),c.Sa.push(t),t.va(n.onlineState),c.wa&&t.Fa(c.wa)&&Qm(n)}async function YR(r,t){const n=vt(r),s=t.query;let l=3;const c=n.queries.get(s);if(c){const d=c.Sa.indexOf(t);d>=0&&(c.Sa.splice(d,1),c.Sa.length===0?l=t.Da()?0:1:!c.ba()&&t.Da()&&(l=2))}switch(l){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function XR(r,t){const n=vt(r);let s=!1;for(const l of t){const c=l.query,d=n.queries.get(c);if(d){for(const g of d.Sa)g.Fa(l)&&(s=!0);d.wa=l}}s&&Qm(n)}function $R(r,t,n){const s=vt(r),l=s.queries.get(t);if(l)for(const c of l.Sa)c.onError(n);s.queries.delete(t)}function Qm(r){r.Ca.forEach((t=>{t.next()}))}var hm,Vv;(Vv=hm||(hm={})).Ma="default",Vv.Cache="cache";class ZR{constructor(t,n,s){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(t){if(!this.options.includeMetadataChanges){const s=[];for(const l of t.docChanges)l.type!==3&&s.push(l);t=new Za(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=Za.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==hm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(t){this.key=t}}class BE{constructor(t){this.key=t}}class JR{constructor(t,n){this.query=t,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Nt(),this.mutatedKeys=Nt(),this.eu=aE(t),this.tu=new Ba(this.eu)}get nu(){return this.Ya}ru(t,n){const s=n?n.iu:new Ov,l=n?n.tu:this.tu;let c=n?n.mutatedKeys:this.mutatedKeys,d=l,g=!1;const p=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,y=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(t.inorderTraversal(((A,I)=>{const C=l.get(A),G=uh(this.query,I)?I:null,$=!!C&&this.mutatedKeys.has(C.key),nt=!!G&&(G.hasLocalMutations||this.mutatedKeys.has(G.key)&&G.hasCommittedMutations);let Z=!1;C&&G?C.data.isEqual(G.data)?$!==nt&&(s.track({type:3,doc:G}),Z=!0):this.su(C,G)||(s.track({type:2,doc:G}),Z=!0,(p&&this.eu(G,p)>0||y&&this.eu(G,y)<0)&&(g=!0)):!C&&G?(s.track({type:0,doc:G}),Z=!0):C&&!G&&(s.track({type:1,doc:C}),Z=!0,(p||y)&&(g=!0)),Z&&(G?(d=d.add(G),c=nt?c.add(A):c.delete(A)):(d=d.delete(A),c=c.delete(A)))})),this.query.limit!==null)for(;d.size>this.query.limit;){const A=this.query.limitType==="F"?d.last():d.first();d=d.delete(A.key),c=c.delete(A.key),s.track({type:1,doc:A})}return{tu:d,iu:s,Cs:g,mutatedKeys:c}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,l){const c=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const d=t.iu.ya();d.sort(((A,I)=>(function(G,$){const nt=Z=>{switch(Z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return dt(20277,{Rt:Z})}};return nt(G)-nt($)})(A.type,I.type)||this.eu(A.doc,I.doc))),this.ou(s),l=l??!1;const g=n&&!l?this._u():[],p=this.Xa.size===0&&this.current&&!l?1:0,y=p!==this.Za;return this.Za=p,d.length!==0||y?{snapshot:new Za(this.query,t.tu,c,d,t.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:g}:{au:g}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ov,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),t.modifiedDocuments.forEach((n=>{})),t.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Nt(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return t.forEach((s=>{this.Xa.has(s)||n.push(new BE(s))})),this.Xa.forEach((s=>{t.has(s)||n.push(new zE(s))})),n}cu(t){this.Ya=t.Qs,this.Xa=Nt();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return Za.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Km="SyncEngine";class WR{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class tI{constructor(t){this.key=t,this.hu=!1}}class eI{constructor(t,n,s,l,c,d){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=l,this.currentUser=c,this.maxConcurrentLimboResolutions=d,this.Pu={},this.Tu=new qs((g=>sE(g)),lh),this.Iu=new Map,this.Eu=new Set,this.du=new ie(ut.comparator),this.Au=new Map,this.Ru=new Um,this.Vu={},this.mu=new Map,this.fu=$a.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function nI(r,t,n=!0){const s=QE(r);let l;const c=s.Tu.get(t);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),l=c.view.lu()):l=await qE(s,t,n,!0),l}async function iI(r,t){const n=QE(r);await qE(n,t,!0,!1)}async function qE(r,t,n,s){const l=await TR(r.localStore,ui(t)),c=l.targetId,d=r.sharedClientState.addLocalQueryTarget(c,n);let g;return s&&(g=await rI(r,t,c,d==="current",l.resumeToken)),r.isPrimaryClient&&n&&VE(r.remoteStore,l),g}async function rI(r,t,n,s,l){r.pu=(I,C,G)=>(async function(nt,Z,Tt,gt){let ct=Z.view.ru(Tt);ct.Cs&&(ct=await wv(nt.localStore,Z.query,!1).then((({documents:V})=>Z.view.ru(V,ct))));const qt=gt&&gt.targetChanges.get(Z.targetId),Et=gt&&gt.targetMismatches.get(Z.targetId)!=null,Lt=Z.view.applyChanges(ct,nt.isPrimaryClient,qt,Et);return kv(nt,Z.targetId,Lt.au),Lt.snapshot})(r,I,C,G);const c=await wv(r.localStore,t,!0),d=new JR(t,c.Qs),g=d.ru(c.documents),p=Ll.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",l),y=d.applyChanges(g,r.isPrimaryClient,p);kv(r,n,y.au);const A=new WR(t,n,d);return r.Tu.set(t,A),r.Iu.has(n)?r.Iu.get(n).push(t):r.Iu.set(n,[t]),y.snapshot}async function sI(r,t,n){const s=vt(r),l=s.Tu.get(t),c=s.Iu.get(l.targetId);if(c.length>1)return s.Iu.set(l.targetId,c.filter((d=>!lh(d,t)))),void s.Tu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(l.targetId),s.sharedClientState.isActiveQueryTarget(l.targetId)||await um(s.localStore,l.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(l.targetId),n&&Bm(s.remoteStore,l.targetId),fm(s,l.targetId)})).catch(no)):(fm(s,l.targetId),await um(s.localStore,l.targetId,!0))}async function aI(r,t){const n=vt(r),s=n.Tu.get(t),l=n.Iu.get(s.targetId);n.isPrimaryClient&&l.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Bm(n.remoteStore,s.targetId))}async function oI(r,t,n){const s=mI(r);try{const l=await(function(d,g){const p=vt(d),y=Wt.now(),A=g.reduce(((G,$)=>G.add($.key)),Nt());let I,C;return p.persistence.runTransaction("Locally write mutations","readwrite",(G=>{let $=Yi(),nt=Nt();return p.Ns.getEntries(G,A).next((Z=>{$=Z,$.forEach(((Tt,gt)=>{gt.isValidDocument()||(nt=nt.add(Tt))}))})).next((()=>p.localDocuments.getOverlayedDocuments(G,$))).next((Z=>{I=Z;const Tt=[];for(const gt of g){const ct=vw(gt,I.get(gt.key).overlayedDocument);ct!=null&&Tt.push(new Fr(gt.key,ct,ZT(ct.value.mapValue),qn.exists(!0)))}return p.mutationQueue.addMutationBatch(G,y,Tt,g)})).next((Z=>{C=Z;const Tt=Z.applyToLocalDocumentSet(I,nt);return p.documentOverlayCache.saveOverlays(G,Z.batchId,Tt)}))})).then((()=>({batchId:C.batchId,changes:lE(I)})))})(s.localStore,t);s.sharedClientState.addPendingMutation(l.batchId),(function(d,g,p){let y=d.Vu[d.currentUser.toKey()];y||(y=new ie(Dt)),y=y.insert(g,p),d.Vu[d.currentUser.toKey()]=y})(s,l.batchId,n),await Bl(s,l.changes),await gh(s.remoteStore)}catch(l){const c=Fm(l,"Failed to persist write");n.reject(c)}}async function jE(r,t){const n=vt(r);try{const s=await yR(n.localStore,t);t.targetChanges.forEach(((l,c)=>{const d=n.Au.get(c);d&&(Bt(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1,22616),l.addedDocuments.size>0?d.hu=!0:l.modifiedDocuments.size>0?Bt(d.hu,14607):l.removedDocuments.size>0&&(Bt(d.hu,42227),d.hu=!1))})),await Bl(n,s,t)}catch(s){await no(s)}}function Pv(r,t,n){const s=vt(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const l=[];s.Tu.forEach(((c,d)=>{const g=d.view.va(t);g.snapshot&&l.push(g.snapshot)})),(function(d,g){const p=vt(d);p.onlineState=g;let y=!1;p.queries.forEach(((A,I)=>{for(const C of I.Sa)C.va(g)&&(y=!0)})),y&&Qm(p)})(s.eventManager,t),l.length&&s.Pu.H_(l),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function lI(r,t,n){const s=vt(r);s.sharedClientState.updateQueryState(t,"rejected",n);const l=s.Au.get(t),c=l&&l.key;if(c){let d=new ie(ut.comparator);d=d.insert(c,Ye.newNoDocument(c,_t.min()));const g=Nt().add(c),p=new fh(_t.min(),new Map,new ie(Dt),d,g);await jE(s,p),s.du=s.du.remove(c),s.Au.delete(t),Ym(s)}else await um(s.localStore,t,!1).then((()=>fm(s,t,n))).catch(no)}async function uI(r,t){const n=vt(r),s=t.batch.batchId;try{const l=await pR(n.localStore,t);GE(n,s,null),HE(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Bl(n,l)}catch(l){await no(l)}}async function cI(r,t,n){const s=vt(r);try{const l=await(function(d,g){const p=vt(d);return p.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let A;return p.mutationQueue.lookupMutationBatch(y,g).next((I=>(Bt(I!==null,37113),A=I.keys(),p.mutationQueue.removeMutationBatch(y,I)))).next((()=>p.mutationQueue.performConsistencyCheck(y))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(y,A,g))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,A))).next((()=>p.localDocuments.getDocuments(y,A)))}))})(s.localStore,t);GE(s,t,n),HE(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Bl(s,l)}catch(l){await no(l)}}function HE(r,t){(r.mu.get(t)||[]).forEach((n=>{n.resolve()})),r.mu.delete(t)}function GE(r,t,n){const s=vt(r);let l=s.Vu[s.currentUser.toKey()];if(l){const c=l.get(t);c&&(n?c.reject(n):c.resolve(),l=l.remove(t)),s.Vu[s.currentUser.toKey()]=l}}function fm(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.Iu.get(t))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach((s=>{r.Ru.containsKey(s)||FE(r,s)}))}function FE(r,t){r.Eu.delete(t.path.canonicalString());const n=r.du.get(t);n!==null&&(Bm(r.remoteStore,n),r.du=r.du.remove(t),r.Au.delete(n),Ym(r))}function kv(r,t,n){for(const s of n)s instanceof zE?(r.Ru.addReference(s.key,t),hI(r,s)):s instanceof BE?(it(Km,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,t),r.Ru.containsKey(s.key)||FE(r,s.key)):dt(19791,{wu:s})}function hI(r,t){const n=t.key,s=n.path.canonicalString();r.du.get(n)||r.Eu.has(s)||(it(Km,"New document in limbo: "+n),r.Eu.add(s),Ym(r))}function Ym(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const n=new ut(Jt.fromString(t)),s=r.fu.next();r.Au.set(s,new tI(n)),r.du=r.du.insert(n,s),VE(r.remoteStore,new Or(ui(rE(n.path)),s,"TargetPurposeLimboResolution",rh.ce))}}async function Bl(r,t,n){const s=vt(r),l=[],c=[],d=[];s.Tu.isEmpty()||(s.Tu.forEach(((g,p)=>{d.push(s.pu(p,t,n).then((y=>{if((y||n)&&s.isPrimaryClient){const A=y?!y.fromCache:n?.targetChanges.get(p.targetId)?.current;s.sharedClientState.updateQueryState(p.targetId,A?"current":"not-current")}if(y){l.push(y);const A=Lm.As(p.targetId,y);c.push(A)}})))})),await Promise.all(d),s.Pu.H_(l),await(async function(p,y){const A=vt(p);try{await A.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>K.forEach(y,(C=>K.forEach(C.Es,(G=>A.persistence.referenceDelegate.addReference(I,C.targetId,G))).next((()=>K.forEach(C.ds,(G=>A.persistence.referenceDelegate.removeReference(I,C.targetId,G)))))))))}catch(I){if(!io(I))throw I;it(zm,"Failed to update sequence numbers: "+I)}for(const I of y){const C=I.targetId;if(!I.fromCache){const G=A.Ms.get(C),$=G.snapshotVersion,nt=G.withLastLimboFreeSnapshotVersion($);A.Ms=A.Ms.insert(C,nt)}}})(s.localStore,c))}async function fI(r,t){const n=vt(r);if(!n.currentUser.isEqual(t)){it(Km,"User change. New user:",t.toKey());const s=await DE(n.localStore,t);n.currentUser=t,(function(c,d){c.mu.forEach((g=>{g.forEach((p=>{p.reject(new st(X.CANCELLED,d))}))})),c.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Bl(n,s.Ls)}}function dI(r,t){const n=vt(r),s=n.Au.get(t);if(s&&s.hu)return Nt().add(s.key);{let l=Nt();const c=n.Iu.get(t);if(!c)return l;for(const d of c){const g=n.Tu.get(d);l=l.unionWith(g.view.nu)}return l}}function QE(r){const t=vt(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=jE.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=dI.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=lI.bind(null,t),t.Pu.H_=XR.bind(null,t.eventManager),t.Pu.yu=$R.bind(null,t.eventManager),t}function mI(r){const t=vt(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=uI.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=cI.bind(null,t),t}class Qc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=dh(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return gR(this.persistence,new fR,t.initialUser,this.serializer)}Cu(t){return new CE(xm.mi,this.serializer)}Du(t){return new AR}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qc.provider={build:()=>new Qc};class gI extends Qc{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){Bt(this.persistence.referenceDelegate instanceof Gc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Zw(s,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?sn.withCacheSize(this.cacheSizeBytes):sn.DEFAULT;return new CE((s=>Gc.mi(s,n)),this.serializer)}}class dm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Pv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=fI.bind(null,this.syncEngine),await GR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new QR})()}createDatastore(t){const n=dh(t.databaseInfo.databaseId),s=(function(c){return new IR(c)})(t.databaseInfo);return(function(c,d,g,p){return new OR(c,d,g,p)})(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return(function(s,l,c,d,g){return new VR(s,l,c,d,g)})(this.localStore,this.datastore,t.asyncQueue,(n=>Pv(this.syncEngine,n,0)),(function(){return Cv.v()?new Cv:new SR})())}createSyncEngine(t,n){return(function(l,c,d,g,p,y,A){const I=new eI(l,c,d,g,p,y);return A&&(I.gu=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=vt(n);it(ks,"RemoteStore shutting down."),s.Ea.add(5),await zl(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}dm.provider={build:()=>new dm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Ki("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout((()=>{this.muted||t(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="FirestoreClient";class yI{constructor(t,n,s,l,c){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=l,this.user=Ke.UNAUTHENTICATED,this.clientId=bm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,(async d=>{it(Hr,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d})),this.appCheckCredentials.start(s,(d=>(it(Hr,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Fm(n,"Failed to shutdown persistence");t.reject(s)}})),t.promise}}async function qd(r,t){r.asyncQueue.verifyOperationInProgress(),it(Hr,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener((async l=>{s.isEqual(l)||(await DE(t.localStore,l),s=l)})),t.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=t}async function Uv(r,t){r.asyncQueue.verifyOperationInProgress();const n=await _I(r);it(Hr,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener((s=>Nv(t.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,l)=>Nv(t.remoteStore,l))),r._onlineComponents=t}async function _I(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){it(Hr,"Using user provided OfflineComponentProvider");try{await qd(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!(function(l){return l.name==="FirebaseError"?l.code===X.FAILED_PRECONDITION||l.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11})(n))throw n;Qa("Error using user provided cache. Falling back to memory cache: "+n),await qd(r,new Qc)}}else it(Hr,"Using default OfflineComponentProvider"),await qd(r,new gI(void 0));return r._offlineComponents}async function KE(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(it(Hr,"Using user provided OnlineComponentProvider"),await Uv(r,r._uninitializedComponentsProvider._online)):(it(Hr,"Using default OnlineComponentProvider"),await Uv(r,new dm))),r._onlineComponents}function vI(r){return KE(r).then((t=>t.syncEngine))}async function TI(r){const t=await KE(r),n=t.eventManager;return n.onListen=nI.bind(null,t.syncEngine),n.onUnlisten=sI.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=iI.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=aI.bind(null,t.syncEngine),n}function EI(r,t,n={}){const s=new kr;return r.asyncQueue.enqueueAndForget((async()=>(function(c,d,g,p,y){const A=new pI({next:C=>{A.Nu(),d.enqueueAndForget((()=>YR(c,I))),C.fromCache&&p.source==="server"?y.reject(new st(X.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(C)},error:C=>y.reject(C)}),I=new ZR(g,A,{includeMetadataChanges:!0,qa:!0});return KR(c,I)})(await TI(r),r.asyncQueue,t,n,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="firestore.googleapis.com",Lv=!0;class zv{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new st(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=XE,this.ssl=Lv}else this.host=t.host,this.ssl=t.ssl??Lv;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=IE;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Xw)throw new st(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Mb("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=YE(t.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new st(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new st(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new st(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(s,l){return s.timeoutSeconds===l.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ph{constructor(t,n,s,l){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new st(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new st(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zv(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Ab;switch(s.type){case"firstParty":return new Rb(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new st(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=xv.get(n);s&&(it("ComponentProvider","Removing Datastore"),xv.delete(n),s.terminate())})(this),Promise.resolve()}}function AI(r,t,n,s={}){r=Ps(r,ph);const l=Wa(t),c=r._getSettings(),d={...c,emulatorOptions:r._getEmulatorOptions()},g=`${t}:${n}`;l&&(ET(`https://${g}`),AT("Firestore",!0)),c.host!==XE&&c.host!==g&&Qa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...c,host:g,ssl:l,emulatorOptions:s};if(!xr(p,d)&&(r._setSettings(p),s.mockUserToken)){let y,A;if(typeof s.mockUserToken=="string")y=s.mockUserToken,A=Ke.MOCK_USER;else{y=YS(s.mockUserToken,r._app?.options.projectId);const I=s.mockUserToken.sub||s.mockUserToken.user_id;if(!I)throw new st(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new Ke(I)}r._authCredentials=new Sb(new zT(y,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new yh(this.firestore,t,this._query)}}class Ve{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ve(this.firestore,t,this._key)}toJSON(){return{type:Ve._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,s){if(Ul(n,Ve._jsonSchema))return new Ve(t,s||null,new ut(Jt.fromString(n.referencePath)))}}Ve._jsonSchemaVersion="firestore/documentReference/1.0",Ve._jsonSchema={type:ye("string",Ve._jsonSchemaVersion),referencePath:ye("string")};class Ur extends yh{constructor(t,n,s){super(t,n,rE(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ve(this.firestore,null,new ut(t))}withConverter(t){return new Ur(this.firestore,t,this._path)}}function Bv(r,t,...n){if(r=$e(r),BT("collection","path",t),r instanceof ph){const s=Jt.fromString(t,...n);return W_(s),new Ur(r,null,s)}{if(!(r instanceof Ve||r instanceof Ur))throw new st(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Jt.fromString(t,...n));return W_(s),new Ur(r.firestore,null,s)}}function mm(r,t,...n){if(r=$e(r),arguments.length===1&&(t=bm.newId()),BT("doc","path",t),r instanceof ph){const s=Jt.fromString(t,...n);return J_(s),new Ve(r,null,new ut(s))}{if(!(r instanceof Ve||r instanceof Ur))throw new st(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Jt.fromString(t,...n));return J_(s),new Ve(r.firestore,r instanceof Ur?r.converter:null,new ut(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv="AsyncQueue";class jv{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new OE(this,"async_queue_retry"),this._c=()=>{const s=Bd();s&&it(qv,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=t;const n=Bd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=Bd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new kr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!io(t))throw t;it(qv,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const n=this.ac.then((()=>(this.rc=!0,t().catch((s=>{throw this.nc=s,this.rc=!1,Ki("INTERNAL UNHANDLED ERROR: ",Hv(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(t,n,s){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const l=Gm.createAndSchedule(this,t,n,s,(c=>this.hc(c)));return this.tc.push(l),l}uc(){this.nc&&dt(47125,{Pc:Hv(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function Hv(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class ql extends ph{constructor(t,n,s,l){super(t,n,s,l),this.type="firestore",this._queue=new jv,this._persistenceKey=l?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new jv(t),this._firestoreClient=void 0,await t}}}function SI(r,t){const n=typeof r=="object"?r:Am(),s=typeof r=="string"?r:xc,l=Bs(n,"firestore").getImmediate({identifier:s});if(!l._initialized){const c=QS("firestore");c&&AI(l,...c)}return l}function $E(r){if(r._terminated)throw new st(X.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||bI(r),r._firestoreClient}function bI(r){const t=r._freezeSettings(),n=(function(l,c,d,g){return new Hb(l,c,d,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,YE(g.experimentalLongPollingOptions),g.useFetchStreams,g.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,t);r._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new yI(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&(function(l){const c=l?._online.build();return{_offline:l?._offline.build(c),_online:c}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Mn(je.fromBase64String(t))}catch(n){throw new st(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Mn(je.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Mn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Ul(t,Mn._jsonSchema))return Mn.fromBase64String(t.bytes)}}Mn._jsonSchemaVersion="firestore/bytes/1.0",Mn._jsonSchema={type:ye("string",Mn._jsonSchemaVersion),bytes:ye("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new st(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new st(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new st(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Dt(this._lat,t._lat)||Dt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hi._jsonSchemaVersion}}static fromJSON(t){if(Ul(t,hi._jsonSchema))return new hi(t.latitude,t.longitude)}}hi._jsonSchemaVersion="firestore/geoPoint/1.0",hi._jsonSchema={type:ye("string",hi._jsonSchemaVersion),latitude:ye("number"),longitude:ye("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t){this._values=(t||[]).map((n=>n))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(s,l){if(s.length!==l.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==l[c])return!1;return!0})(this._values,t._values)}toJSON(){return{type:fi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Ul(t,fi._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((n=>typeof n=="number")))return new fi(t.vectorValues);throw new st(X.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}fi._jsonSchemaVersion="firestore/vectorValue/1.0",fi._jsonSchema={type:ye("string",fi._jsonSchemaVersion),vectorValues:ye("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=/^__.*__$/;class RI{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Fr(t,this.data,this.fieldMask,n,this.fieldTransforms):new xl(t,this.data,n,this.fieldTransforms)}}class ZE{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Fr(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function JE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw dt(40011,{Ac:r})}}class $m{constructor(t,n,s,l,c,d){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=l,c===void 0&&this.Rc(),this.fieldTransforms=c||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new $m({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const n=this.path?.child(t),s=this.Vc({path:n,fc:!1});return s.gc(t),s}yc(t){const n=this.path?.child(t),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Kc(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((n=>t.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>t.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(JE(this.Ac)&&wI.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class II{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||dh(t)}Cc(t,n,s,l=!1){return new $m({Ac:t,methodName:n,Dc:s,path:qe.emptyPath(),fc:!1,bc:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function WE(r){const t=r._freezeSettings(),n=dh(r._databaseId);return new II(r._databaseId,!!t.ignoreUndefinedProperties,n)}function CI(r,t,n,s,l,c={}){const d=r.Cc(c.merge||c.mergeFields?2:0,t,n,l);Zm("Data must be an object, but it was:",d,s);const g=t0(s,d);let p,y;if(c.merge)p=new yn(d.fieldMask),y=d.fieldTransforms;else if(c.mergeFields){const A=[];for(const I of c.mergeFields){const C=gm(t,I,n);if(!d.contains(C))throw new st(X.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);n0(A,C)||A.push(C)}p=new yn(A),y=d.fieldTransforms.filter((I=>p.covers(I.field)))}else p=null,y=d.fieldTransforms;return new RI(new an(g),p,y)}class vh extends Xm{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof vh}}function DI(r,t,n,s){const l=r.Cc(1,t,n);Zm("Data must be an object, but it was:",l,s);const c=[],d=an.empty();Gr(s,((p,y)=>{const A=Jm(t,p,n);y=$e(y);const I=l.yc(A);if(y instanceof vh)c.push(A);else{const C=Th(y,I);C!=null&&(c.push(A),d.set(A,C))}}));const g=new yn(c);return new ZE(d,g,l.fieldTransforms)}function NI(r,t,n,s,l,c){const d=r.Cc(1,t,n),g=[gm(t,s,n)],p=[l];if(c.length%2!=0)throw new st(X.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<c.length;C+=2)g.push(gm(t,c[C])),p.push(c[C+1]);const y=[],A=an.empty();for(let C=g.length-1;C>=0;--C)if(!n0(y,g[C])){const G=g[C];let $=p[C];$=$e($);const nt=d.yc(G);if($ instanceof vh)y.push(G);else{const Z=Th($,nt);Z!=null&&(y.push(G),A.set(G,Z))}}const I=new yn(y);return new ZE(A,I,d.fieldTransforms)}function Th(r,t){if(e0(r=$e(r)))return Zm("Unsupported field value:",t,r),t0(r,t);if(r instanceof Xm)return(function(s,l){if(!JE(l.Ac))throw l.Sc(`${s._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Sc(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(l);c&&l.fieldTransforms.push(c)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(s,l){const c=[];let d=0;for(const g of s){let p=Th(g,l.wc(d));p==null&&(p={nullValue:"NULL_VALUE"}),c.push(p),d++}return{arrayValue:{values:c}}})(r,t)}return(function(s,l){if((s=$e(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return dw(l.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=Wt.fromDate(s);return{timestampValue:Hc(l.serializer,c)}}if(s instanceof Wt){const c=new Wt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Hc(l.serializer,c)}}if(s instanceof hi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Mn)return{bytesValue:TE(l.serializer,s._byteString)};if(s instanceof Ve){const c=l.databaseId,d=s.firestore._databaseId;if(!d.isEqual(c))throw l.Sc(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:km(s.firestore._databaseId||l.databaseId,s._key.path)}}if(s instanceof fi)return(function(d,g){return{mapValue:{fields:{[XT]:{stringValue:$T},[Lc]:{arrayValue:{values:d.toArray().map((y=>{if(typeof y!="number")throw g.Sc("VectorValues must only contain numeric values.");return Om(g.serializer,y)}))}}}}}})(s,l);throw l.Sc(`Unsupported field value: ${wm(s)}`)})(r,t)}function t0(r,t){const n={};return HT(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Gr(r,((s,l)=>{const c=Th(l,t.mc(s));c!=null&&(n[s]=c)})),{mapValue:{fields:n}}}function e0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Wt||r instanceof hi||r instanceof Mn||r instanceof Ve||r instanceof Xm||r instanceof fi)}function Zm(r,t,n){if(!e0(n)||!qT(n)){const s=wm(n);throw s==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+s)}}function gm(r,t,n){if((t=$e(t))instanceof _h)return t._internalPath;if(typeof t=="string")return Jm(r,t);throw Kc("Field path arguments must be of type string or ",r,!1,void 0,n)}const OI=new RegExp("[~\\*/\\[\\]]");function Jm(r,t,n){if(t.search(OI)>=0)throw Kc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new _h(...t.split("."))._internalPath}catch{throw Kc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Kc(r,t,n,s,l){const c=s&&!s.isEmpty(),d=l!==void 0;let g=`Function ${t}() called with invalid data`;n&&(g+=" (via `toFirestore()`)"),g+=". ";let p="";return(c||d)&&(p+=" (found",c&&(p+=` in field ${s}`),d&&(p+=` in document ${l}`),p+=")"),new st(X.INVALID_ARGUMENT,g+r+p)}function n0(r,t){return r.some((n=>n.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(t,n,s,l,c){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=l,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new MI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(r0("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class MI extends i0{data(){return super.data()}}function r0(r,t){return typeof t=="string"?Jm(r,t):t instanceof _h?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new st(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class PI{convertValue(t,n="none"){switch(qr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return he(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Br(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw dt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Gr(t,((l,c)=>{s[l]=this.convertValue(c,n)})),s}convertVectorValue(t){const n=t.fields?.[Lc].arrayValue?.values?.map((s=>he(s.doubleValue)));return new fi(n)}convertGeoPoint(t){return new hi(he(t.latitude),he(t.longitude))}convertArray(t,n){return(t.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(t,n){switch(n){case"previous":const s=ah(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Dl(t));default:return null}}convertTimestamp(t){const n=zr(t);return new Wt(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=Jt.fromString(t);Bt(RE(s),9688,{name:t});const l=new Nl(s.get(1),s.get(3)),c=new ut(s.popFirst(5));return l.isEqual(n)||Ki(`Document ${c} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(r,t,n){let s;return s=r?r.toFirestore(t):t,s}class Tc{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class qa extends i0{constructor(t,n,s,l,c,d){super(t,n,s,l,d),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Dc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(r0("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new st(X.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=qa._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}qa._jsonSchemaVersion="firestore/documentSnapshot/1.0",qa._jsonSchema={type:ye("string",qa._jsonSchemaVersion),bundleSource:ye("string","DocumentSnapshot"),bundleName:ye("string"),bundle:ye("string")};class Dc extends qa{data(t={}){return super.data(t)}}class ja{constructor(t,n,s,l){this._firestore=t,this._userDataWriter=n,this._snapshot=l,this.metadata=new Tc(l.hasPendingWrites,l.fromCache),this.query=s}get docs(){const t=[];return this.forEach((n=>t.push(n))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach((s=>{t.call(n,new Dc(this._firestore,this._userDataWriter,s.key,s,new Tc(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new st(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(l,c){if(l._snapshot.oldDocs.isEmpty()){let d=0;return l._snapshot.docChanges.map((g=>{const p=new Dc(l._firestore,l._userDataWriter,g.doc.key,g.doc,new Tc(l._snapshot.mutatedKeys.has(g.doc.key),l._snapshot.fromCache),l.query.converter);return g.doc,{type:"added",doc:p,oldIndex:-1,newIndex:d++}}))}{let d=l._snapshot.oldDocs;return l._snapshot.docChanges.filter((g=>c||g.type!==3)).map((g=>{const p=new Dc(l._firestore,l._userDataWriter,g.doc.key,g.doc,new Tc(l._snapshot.mutatedKeys.has(g.doc.key),l._snapshot.fromCache),l.query.converter);let y=-1,A=-1;return g.type!==0&&(y=d.indexOf(g.doc.key),d=d.delete(g.doc.key)),g.type!==1&&(d=d.add(g.doc),A=d.indexOf(g.doc.key)),{type:UI(g.type),doc:p,oldIndex:y,newIndex:A}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new st(X.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=ja._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=bm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],l=[];return this.docs.forEach((c=>{c._document!==null&&(n.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),l.push(c.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function UI(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return dt(61501,{type:r})}}ja._jsonSchemaVersion="firestore/querySnapshot/1.0",ja._jsonSchema={type:ye("string",ja._jsonSchemaVersion),bundleSource:ye("string","QuerySnapshot"),bundleName:ye("string"),bundle:ye("string")};class xI extends PI{constructor(t){super(),this.firestore=t}convertBytes(t){return new Mn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Ve(this.firestore,null,n)}}function LI(r){r=Ps(r,yh);const t=Ps(r.firestore,ql),n=$E(t),s=new xI(t);return VI(r._query),EI(n,r._query).then((l=>new ja(t,s,r,l)))}function zI(r,t,n,...s){r=Ps(r,Ve);const l=Ps(r.firestore,ql),c=WE(l);let d;return d=typeof(t=$e(t))=="string"||t instanceof _h?NI(c,"updateDoc",r._key,t,n,s):DI(c,"updateDoc",r._key,t),Wm(l,[d.toMutation(r._key,qn.exists(!0))])}function BI(r){return Wm(Ps(r.firestore,ql),[new Mm(r._key,qn.none())])}function qI(r,t){const n=Ps(r.firestore,ql),s=mm(r),l=kI(r.converter,t);return Wm(n,[CI(WE(r.firestore),"addDoc",s._key,l,r.converter!==null,{}).toMutation(s._key,qn.exists(!1))]).then((()=>s))}function Wm(r,t){return(function(s,l){const c=new kr;return s.asyncQueue.enqueueAndForget((async()=>oI(await vI(s),l,c))),c.promise})($E(r),t)}(function(t,n=!0){(function(l){eo=l})(to),gi(new jn("firestore",((s,{instanceIdentifier:l,options:c})=>{const d=s.getProvider("app").getImmediate(),g=new ql(new bb(s.getProvider("auth-internal")),new Ib(d,s.getProvider("app-check-internal")),(function(y,A){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new st(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nl(y.options.projectId,A)})(d,l),d);return c={useFetchStreams:n,...c},g._setSettings(c),g}),"PUBLIC").setMultipleInstances(!0)),Vn(Y_,X_,t),Vn(Y_,X_,"esm2020")})();var jI="firebase",HI="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vn(jI,HI,"app");const s0="@firebase/installations",tg="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0=1e4,o0=`w:${tg}`,l0="FIS_v2",GI="https://firebaseinstallations.googleapis.com/v1",FI=3600*1e3,QI="installations",KI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Us=new zs(QI,KI,YI);function u0(r){return r instanceof Hn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0({projectId:r}){return`${GI}/projects/${r}/installations`}function h0(r){return{token:r.token,requestStatus:2,expiresIn:$I(r.expiresIn),creationTime:Date.now()}}async function f0(r,t){const s=(await t.json()).error;return Us.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function d0({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function XI(r,{refreshToken:t}){const n=d0(r);return n.append("Authorization",ZI(t)),n}async function m0(r){const t=await r();return t.status>=500&&t.status<600?r():t}function $I(r){return Number(r.replace("s","000"))}function ZI(r){return`${l0} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const s=c0(r),l=d0(r),c=t.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&l.append("x-firebase-client",y)}const d={fid:n,authVersion:l0,appId:r.appId,sdkVersion:o0},g={method:"POST",headers:l,body:JSON.stringify(d)},p=await m0(()=>fetch(s,g));if(p.ok){const y=await p.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:h0(y.authToken)}}else throw await f0("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(r){return new Promise(t=>{setTimeout(t,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=/^[cdef][\w-]{21}$/,pm="";function eC(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=nC(r);return tC.test(n)?n:pm}catch{return pm}}function nC(r){return WI(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=new Map;function y0(r,t){const n=Eh(r);_0(n,t),iC(n,t)}function _0(r,t){const n=p0.get(r);if(n)for(const s of n)s(t)}function iC(r,t){const n=rC();n&&n.postMessage({key:r,fid:t}),sC()}let Os=null;function rC(){return!Os&&"BroadcastChannel"in self&&(Os=new BroadcastChannel("[Firebase] FID Change"),Os.onmessage=r=>{_0(r.data.key,r.data.fid)}),Os}function sC(){p0.size===0&&Os&&(Os.close(),Os=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC="firebase-installations-database",oC=1,xs="firebase-installations-store";let jd=null;function eg(){return jd||(jd=CT(aC,oC,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(xs)}}})),jd}async function Yc(r,t){const n=Eh(r),l=(await eg()).transaction(xs,"readwrite"),c=l.objectStore(xs),d=await c.get(n);return await c.put(t,n),await l.done,(!d||d.fid!==t.fid)&&y0(r,t.fid),t}async function v0(r){const t=Eh(r),s=(await eg()).transaction(xs,"readwrite");await s.objectStore(xs).delete(t),await s.done}async function Ah(r,t){const n=Eh(r),l=(await eg()).transaction(xs,"readwrite"),c=l.objectStore(xs),d=await c.get(n),g=t(d);return g===void 0?await c.delete(n):await c.put(g,n),await l.done,g&&(!d||d.fid!==g.fid)&&y0(r,g.fid),g}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ng(r){let t;const n=await Ah(r.appConfig,s=>{const l=lC(s),c=uC(r,l);return t=c.registrationPromise,c.installationEntry});return n.fid===pm?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function lC(r){const t=r||{fid:eC(),registrationStatus:0};return T0(t)}function uC(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(Us.create("app-offline"));return{installationEntry:t,registrationPromise:l}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=cC(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:hC(r)}:{installationEntry:t}}async function cC(r,t){try{const n=await JI(r,t);return Yc(r.appConfig,n)}catch(n){throw u0(n)&&n.customData.serverCode===409?await v0(r.appConfig):await Yc(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function hC(r){let t=await Gv(r.appConfig);for(;t.registrationStatus===1;)await g0(100),t=await Gv(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await ng(r);return s||n}return t}function Gv(r){return Ah(r,t=>{if(!t)throw Us.create("installation-not-found");return T0(t)})}function T0(r){return fC(r)?{fid:r.fid,registrationStatus:0}:r}function fC(r){return r.registrationStatus===1&&r.registrationTime+a0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dC({appConfig:r,heartbeatServiceProvider:t},n){const s=mC(r,n),l=XI(r,n),c=t.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&l.append("x-firebase-client",y)}const d={installation:{sdkVersion:o0,appId:r.appId}},g={method:"POST",headers:l,body:JSON.stringify(d)},p=await m0(()=>fetch(s,g));if(p.ok){const y=await p.json();return h0(y)}else throw await f0("Generate Auth Token",p)}function mC(r,{fid:t}){return`${c0(r)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ig(r,t=!1){let n;const s=await Ah(r.appConfig,c=>{if(!E0(c))throw Us.create("not-registered");const d=c.authToken;if(!t&&yC(d))return c;if(d.requestStatus===1)return n=gC(r,t),c;{if(!navigator.onLine)throw Us.create("app-offline");const g=vC(c);return n=pC(r,g),g}});return n?await n:s.authToken}async function gC(r,t){let n=await Fv(r.appConfig);for(;n.authToken.requestStatus===1;)await g0(100),n=await Fv(r.appConfig);const s=n.authToken;return s.requestStatus===0?ig(r,t):s}function Fv(r){return Ah(r,t=>{if(!E0(t))throw Us.create("not-registered");const n=t.authToken;return TC(n)?{...t,authToken:{requestStatus:0}}:t})}async function pC(r,t){try{const n=await dC(r,t),s={...t,authToken:n};return await Yc(r.appConfig,s),n}catch(n){if(u0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await v0(r.appConfig);else{const s={...t,authToken:{requestStatus:0}};await Yc(r.appConfig,s)}throw n}}function E0(r){return r!==void 0&&r.registrationStatus===2}function yC(r){return r.requestStatus===2&&!_C(r)}function _C(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+FI}function vC(r){const t={requestStatus:1,requestTime:Date.now()};return{...r,authToken:t}}function TC(r){return r.requestStatus===1&&r.requestTime+a0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EC(r){const t=r,{installationEntry:n,registrationPromise:s}=await ng(t);return s?s.catch(console.error):ig(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AC(r,t=!1){const n=r;return await SC(n),(await ig(n,t)).token}async function SC(r){const{registrationPromise:t}=await ng(r);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(r){if(!r||!r.options)throw Hd("App Configuration");if(!r.name)throw Hd("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw Hd(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Hd(r){return Us.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0="installations",wC="installations-internal",RC=r=>{const t=r.getProvider("app").getImmediate(),n=bC(t),s=Bs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},IC=r=>{const t=r.getProvider("app").getImmediate(),n=Bs(t,A0).getImmediate();return{getId:()=>EC(n),getToken:l=>AC(n,l)}};function CC(){gi(new jn(A0,RC,"PUBLIC")),gi(new jn(wC,IC,"PRIVATE"))}CC();Vn(s0,tg);Vn(s0,tg,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="analytics",DC="firebase_id",NC="origin",OC=60*1e3,MC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",rg="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=new ih("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},_n=new zs("analytics","Analytics",VC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(r){if(!r.startsWith(rg)){const t=_n.create("invalid-gtag-resource",{gtagURL:r});return on.warn(t.message),""}return r}function S0(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function kC(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function UC(r,t){const n=kC("firebase-js-sdk-policy",{createScriptURL:PC}),s=document.createElement("script"),l=`${rg}?l=${r}&id=${t}`;s.src=n?n?.createScriptURL(l):l,s.async=!0,document.head.appendChild(s)}function xC(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function LC(r,t,n,s,l,c){const d=s[l];try{if(d)await t[d];else{const p=(await S0(n)).find(y=>y.measurementId===l);p&&await t[p.appId]}}catch(g){on.error(g)}r("config",l,c)}async function zC(r,t,n,s,l){try{let c=[];if(l&&l.send_to){let d=l.send_to;Array.isArray(d)||(d=[d]);const g=await S0(n);for(const p of d){const y=g.find(I=>I.measurementId===p),A=y&&t[y.appId];if(A)c.push(A);else{c=[];break}}}c.length===0&&(c=Object.values(t)),await Promise.all(c),r("event",s,l||{})}catch(c){on.error(c)}}function BC(r,t,n,s){async function l(c,...d){try{if(c==="event"){const[g,p]=d;await zC(r,t,n,g,p)}else if(c==="config"){const[g,p]=d;await LC(r,t,n,s,g,p)}else if(c==="consent"){const[g,p]=d;r("consent",g,p)}else if(c==="get"){const[g,p,y]=d;r("get",g,p,y)}else if(c==="set"){const[g]=d;r("set",g)}else r(c,...d)}catch(g){on.error(g)}}return l}function qC(r,t,n,s,l){let c=function(...d){window[s].push(arguments)};return window[l]&&typeof window[l]=="function"&&(c=window[l]),window[l]=BC(c,r,t,n),{gtagCore:c,wrappedGtag:window[l]}}function jC(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(rg)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=30,GC=1e3;class FC{constructor(t={},n=GC){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const b0=new FC;function QC(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function KC(r){const{appId:t,apiKey:n}=r,s={method:"GET",headers:QC(n)},l=MC.replace("{app-id}",t),c=await fetch(l,s);if(c.status!==200&&c.status!==304){let d="";try{const g=await c.json();g.error?.message&&(d=g.error.message)}catch{}throw _n.create("config-fetch-failed",{httpStatus:c.status,responseMessage:d})}return c.json()}async function YC(r,t=b0,n){const{appId:s,apiKey:l,measurementId:c}=r.options;if(!s)throw _n.create("no-app-id");if(!l){if(c)return{measurementId:c,appId:s};throw _n.create("no-api-key")}const d=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},g=new ZC;return setTimeout(async()=>{g.abort()},OC),w0({appId:s,apiKey:l,measurementId:c},d,g,t)}async function w0(r,{throttleEndTimeMillis:t,backoffCount:n},s,l=b0){const{appId:c,measurementId:d}=r;try{await XC(s,t)}catch(g){if(d)return on.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${g?.message}]`),{appId:c,measurementId:d};throw g}try{const g=await KC(r);return l.deleteThrottleMetadata(c),g}catch(g){const p=g;if(!$C(p)){if(l.deleteThrottleMetadata(c),d)return on.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:c,measurementId:d};throw g}const y=Number(p?.customData?.httpStatus)===503?L_(n,l.intervalMillis,HC):L_(n,l.intervalMillis),A={throttleEndTimeMillis:Date.now()+y,backoffCount:n+1};return l.setThrottleMetadata(c,A),on.debug(`Calling attemptFetch again in ${y} millis`),w0(r,A,s,l)}}function XC(r,t){return new Promise((n,s)=>{const l=Math.max(t-Date.now(),0),c=setTimeout(n,l);r.addEventListener(()=>{clearTimeout(c),s(_n.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function $C(r){if(!(r instanceof Hn)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class ZC{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function JC(r,t,n,s,l){if(l&&l.global){r("event",n,s);return}else{const c=await t,d={...s,send_to:c};r("event",n,d)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WC(){if(bT())try{await wT()}catch(r){return on.warn(_n.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return on.warn(_n.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function t2(r,t,n,s,l,c,d){const g=YC(r);g.then(C=>{n[C.measurementId]=C.appId,r.options.measurementId&&C.measurementId!==r.options.measurementId&&on.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>on.error(C)),t.push(g);const p=WC().then(C=>{if(C)return s.getId()}),[y,A]=await Promise.all([g,p]);jC(c)||UC(c,y.measurementId),l("js",new Date);const I=d?.config??{};return I[NC]="firebase",I.update=!0,A!=null&&(I[DC]=A),l("config",y.measurementId,I),y.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(t){this.app=t}_delete(){return delete wl[this.app.options.appId],Promise.resolve()}}let wl={},Qv=[];const Kv={};let Gd="dataLayer",n2="gtag",Yv,R0,Xv=!1;function i2(){const r=[];if(ST()&&r.push("This is a browser extension environment."),i1()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,l)=>`(${l+1}) ${s}`).join(" "),n=_n.create("invalid-analytics-context",{errorInfo:t});on.warn(n.message)}}function r2(r,t,n){i2();const s=r.options.appId;if(!s)throw _n.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)on.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw _n.create("no-api-key");if(wl[s]!=null)throw _n.create("already-exists",{id:s});if(!Xv){xC(Gd);const{wrappedGtag:c,gtagCore:d}=qC(wl,Qv,Kv,Gd,n2);R0=c,Yv=d,Xv=!0}return wl[s]=t2(r,Qv,Kv,t,Yv,Gd,n),new e2(r)}function s2(r=Am()){r=$e(r);const t=Bs(r,Xc);return t.isInitialized()?t.getImmediate():a2(r)}function a2(r,t={}){const n=Bs(r,Xc);if(n.isInitialized()){const l=n.getImmediate();if(xr(t,n.getOptions()))return l;throw _n.create("already-initialized")}return n.initialize({options:t})}function o2(r,t,n,s){r=$e(r),JC(R0,wl[r.app.options.appId],t,n,s).catch(l=>on.error(l))}const $v="@firebase/analytics",Zv="0.10.18";function l2(){gi(new jn(Xc,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),l=t.getProvider("installations-internal").getImmediate();return r2(s,l,n)},"PUBLIC")),gi(new jn("analytics-internal",r,"PRIVATE")),Vn($v,Zv),Vn($v,Zv,"esm2020");function r(t){try{const n=t.getProvider(Xc).getImmediate();return{logEvent:(s,l,c)=>o2(n,s,l,c)}}catch(n){throw _n.create("interop-component-reg-failed",{reason:n})}}}l2();function I0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u2=I0,C0=new zs("auth","Firebase",I0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=new ih("@firebase/auth");function c2(r,...t){$c.logLevel<=Ct.WARN&&$c.warn(`Auth (${to}): ${r}`,...t)}function Nc(r,...t){$c.logLevel<=Ct.ERROR&&$c.error(`Auth (${to}): ${r}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(r,...t){throw sg(r,...t)}function di(r,...t){return sg(r,...t)}function D0(r,t,n){const s={...u2(),[t]:n};return new zs("auth","Firebase",s).create(t,{appName:r.name})}function Ms(r){return D0(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sg(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return C0.create(r,...t)}function pt(r,t,...n){if(!r)throw sg(t,...n)}function Gi(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Nc(t),new Error(t)}function $i(r,t){r||Gi(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(){return typeof self<"u"&&self.location?.href||""}function h2(){return Jv()==="http:"||Jv()==="https:"}function Jv(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(h2()||ST()||"connection"in navigator)?navigator.onLine:!0}function d2(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,n){this.shortDelay=t,this.longDelay=n,$i(n>t,"Short delay should be less than long delay!"),this.isMobile=ZS()||t1()}get(){return f2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(r,t){$i(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],p2=new jl(3e4,6e4);function og(r,t){return r.tenantId&&!t.tenantId?{...t,tenantId:r.tenantId}:t}async function so(r,t,n,s,l={}){return O0(r,l,async()=>{let c={},d={};s&&(t==="GET"?d=s:c={body:JSON.stringify(s)});const g=kl({key:r.config.apiKey,...d}).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y={method:t,headers:p,...c};return WS()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&Wa(r.emulatorConfig.host)&&(y.credentials="include"),N0.fetch()(await M0(r,r.config.apiHost,n,g),y)})}async function O0(r,t,n){r._canInitEmulator=!1;const s={...m2,...t};try{const l=new _2(r),c=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await c.json();if("needConfirmation"in d)throw Ec(r,"account-exists-with-different-credential",d);if(c.ok&&!("errorMessage"in d))return d;{const g=c.ok?d.errorMessage:d.error.message,[p,y]=g.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ec(r,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw Ec(r,"email-already-in-use",d);if(p==="USER_DISABLED")throw Ec(r,"user-disabled",d);const A=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw D0(r,A,y);Xi(r,A)}}catch(l){if(l instanceof Hn)throw l;Xi(r,"network-request-failed",{message:String(l)})}}async function y2(r,t,n,s,l={}){const c=await so(r,t,n,s,l);return"mfaPendingCredential"in c&&Xi(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function M0(r,t,n,s){const l=`${t}${n}?${s}`,c=r,d=c.config.emulator?ag(r.config,l):`${r.config.apiScheme}://${l}`;return g2.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(d).toString():d}class _2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(di(this.auth,"network-request-failed")),p2.get())})}}function Ec(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=di(r,t,s);return l.customData._tokenResponse=n,l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v2(r,t){return so(r,"POST","/v1/accounts:delete",t)}async function Zc(r,t){return so(r,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function T2(r,t=!1){const n=$e(r),s=await n.getIdToken(t),l=lg(s);pt(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,d=c?.sign_in_provider;return{claims:l,token:s,authTime:Rl(Fd(l.auth_time)),issuedAtTime:Rl(Fd(l.iat)),expirationTime:Rl(Fd(l.exp)),signInProvider:d||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Fd(r){return Number(r)*1e3}function lg(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return Nc("JWT malformed, contained fewer than 3 sections"),null;try{const l=yT(n);return l?JSON.parse(l):(Nc("Failed to decode base64 JWT payload"),null)}catch(l){return Nc("Caught error parsing JWT payload as JSON",l?.toString()),null}}function Wv(r){const t=lg(r);return pt(t,"internal-error"),pt(typeof t.exp<"u","internal-error"),pt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pl(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof Hn&&E2(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function E2({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rl(this.lastLoginAt),this.creationTime=Rl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jc(r){const t=r.auth,n=await r.getIdToken(),s=await Pl(r,Zc(t,{idToken:n}));pt(s?.users.length,t,"internal-error");const l=s.users[0];r._notifyReloadListener(l);const c=l.providerUserInfo?.length?V0(l.providerUserInfo):[],d=b2(r.providerData,c),g=r.isAnonymous,p=!(r.email&&l.passwordHash)&&!d?.length,y=g?p:!1,A={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new _m(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(r,A)}async function S2(r){const t=$e(r);await Jc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function b2(r,t){return[...r.filter(s=>!t.some(l=>l.providerId===s.providerId)),...t]}function V0(r){return r.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w2(r,t){const n=await O0(r,{},async()=>{const s=kl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:l,apiKey:c}=r.config,d=await M0(r,l,"/v1/token",`key=${c}`),g=await r._getAdditionalHeaders();g["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:g,body:s};return r.emulatorConfig&&Wa(r.emulatorConfig.host)&&(p.credentials="include"),N0.fetch()(d,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function R2(r,t){return so(r,"POST","/v2/accounts:revokeToken",og(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){pt(t.idToken,"internal-error"),pt(typeof t.idToken<"u","internal-error"),pt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Wv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){pt(t.length!==0,"internal-error");const n=Wv(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:l,expiresIn:c}=await w2(t,n);this.updateTokensAndExpiration(s,l,Number(c))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:l,expirationTime:c}=n,d=new Ha;return s&&(pt(typeof s=="string","internal-error",{appName:t}),d.refreshToken=s),l&&(pt(typeof l=="string","internal-error",{appName:t}),d.accessToken=l),c&&(pt(typeof c=="number","internal-error",{appName:t}),d.expirationTime=c),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ha,this.toJSON())}_performRefresh(){return Gi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(r,t){pt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Bn{constructor({uid:t,auth:n,stsTokenManager:s,...l}){this.providerId="firebase",this.proactiveRefresh=new A2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new _m(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(t){const n=await Pl(this,this.stsTokenManager.getToken(this.auth,t));return pt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return T2(this,t)}reload(){return S2(this)}_assign(t){this!==t&&(pt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Bn({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){pt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await Jc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(li(this.auth.app))return Promise.reject(Ms(this.auth));const t=await this.getIdToken();return await Pl(this,v2(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const s=n.displayName??void 0,l=n.email??void 0,c=n.phoneNumber??void 0,d=n.photoURL??void 0,g=n.tenantId??void 0,p=n._redirectEventId??void 0,y=n.createdAt??void 0,A=n.lastLoginAt??void 0,{uid:I,emailVerified:C,isAnonymous:G,providerData:$,stsTokenManager:nt}=n;pt(I&&nt,t,"internal-error");const Z=Ha.fromJSON(this.name,nt);pt(typeof I=="string",t,"internal-error"),Rr(s,t.name),Rr(l,t.name),pt(typeof C=="boolean",t,"internal-error"),pt(typeof G=="boolean",t,"internal-error"),Rr(c,t.name),Rr(d,t.name),Rr(g,t.name),Rr(p,t.name),Rr(y,t.name),Rr(A,t.name);const Tt=new Bn({uid:I,auth:t,email:l,emailVerified:C,displayName:s,isAnonymous:G,photoURL:d,phoneNumber:c,tenantId:g,stsTokenManager:Z,createdAt:y,lastLoginAt:A});return $&&Array.isArray($)&&(Tt.providerData=$.map(gt=>({...gt}))),p&&(Tt._redirectEventId=p),Tt}static async _fromIdTokenResponse(t,n,s=!1){const l=new Ha;l.updateFromServerResponse(n);const c=new Bn({uid:n.localId,auth:t,stsTokenManager:l,isAnonymous:s});return await Jc(c),c}static async _fromGetAccountInfoResponse(t,n,s){const l=n.users[0];pt(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?V0(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!c?.length,g=new Ha;g.updateFromIdToken(s);const p=new Bn({uid:l.localId,auth:t,stsTokenManager:g,isAnonymous:d}),y={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new _m(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!c?.length};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT=new Map;function Fi(r){$i(r instanceof Function,"Expected a class definition");let t=tT.get(r);return t?($i(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,tT.set(r,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}P0.type="NONE";const eT=P0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(r,t,n){return`firebase:${r}:${t}:${n}`}class Ga{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:l,name:c}=this.auth;this.fullUserKey=Oc(this.userKey,l.apiKey,c),this.fullPersistenceKey=Oc("persistence",l.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Zc(this.auth,{idToken:t}).catch(()=>{});return n?Bn._fromGetAccountInfoResponse(this.auth,n,t):null}return Bn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Ga(Fi(eT),t,s);const l=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let c=l[0]||Fi(eT);const d=Oc(s,t.config.apiKey,t.name);let g=null;for(const y of n)try{const A=await y._get(d);if(A){let I;if(typeof A=="string"){const C=await Zc(t,{idToken:A}).catch(()=>{});if(!C)break;I=await Bn._fromGetAccountInfoResponse(t,C,A)}else I=Bn._fromJSON(t,A);y!==c&&(g=I),c=y;break}}catch{}const p=l.filter(y=>y._shouldAllowMigration);return!c._shouldAllowMigration||!p.length?new Ga(c,t,s):(c=p[0],g&&await c._set(d,g.toJSON()),await Promise.all(n.map(async y=>{if(y!==c)try{await y._remove(d)}catch{}})),new Ga(c,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(L0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(k0(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(B0(t))return"Blackberry";if(q0(t))return"Webos";if(U0(t))return"Safari";if((t.includes("chrome/")||x0(t))&&!t.includes("edge/"))return"Chrome";if(z0(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function k0(r=Xe()){return/firefox\//i.test(r)}function U0(r=Xe()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function x0(r=Xe()){return/crios\//i.test(r)}function L0(r=Xe()){return/iemobile/i.test(r)}function z0(r=Xe()){return/android/i.test(r)}function B0(r=Xe()){return/blackberry/i.test(r)}function q0(r=Xe()){return/webos/i.test(r)}function ug(r=Xe()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function I2(r=Xe()){return ug(r)&&!!window.navigator?.standalone}function C2(){return e1()&&document.documentMode===10}function j0(r=Xe()){return ug(r)||z0(r)||q0(r)||B0(r)||/windows phone/i.test(r)||L0(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(r,t=[]){let n;switch(r){case"Browser":n=nT(Xe());break;case"Worker":n=`${nT(Xe())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${to}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=c=>new Promise((d,g)=>{try{const p=t(c);d(p)}catch(p){g(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N2(r,t={}){return so(r,"GET","/v2/passwordPolicy",og(r,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2=6;class M2{constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??O2,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),l&&(n.meetsMaxPasswordLength=t.length<=l)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<t.length;l++)s=t.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,l,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(t,n,s,l){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iT(this),this.idTokenSubscription=new iT(this),this.beforeStateQueue=new D2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=C0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Fi(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ga.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Zc(this,{idToken:t}),s=await Bn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(li(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,l=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,d=s?._redirectEventId,g=await this.tryRedirectSignIn(t);(!c||c===d)&&g?.user&&(s=g.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return pt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Jc(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=d2()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(li(this.app))return Promise.reject(Ms(this));const n=t?$e(t):null;return n&&pt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&pt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return li(this.app)?Promise.reject(Ms(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return li(this.app)?Promise.reject(Ms(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await N2(this),n=new M2(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new zs("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await R2(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Fi(t)||this._popupRedirectResolver;pt(n,this,"argument-error"),this.redirectPersistenceManager=await Ga.create(this,[Fi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,l){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let d=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(pt(g,this,"internal-error"),g.then(()=>{d||c(this.currentUser)}),typeof n=="function"){const p=t.addObserver(n,s,l);return()=>{d=!0,p()}}else{const p=t.addObserver(n);return()=>{d=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return pt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=H0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){if(li(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&c2(`Error while retrieving App Check token: ${t.error}`),t?.token}}function cg(r){return $e(r)}class iT{constructor(t){this.auth=t,this.observer=null,this.addObserver=l1(n=>this.observer=n)}get next(){return pt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hg={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function P2(r){hg=r}function k2(r){return hg.loadJS(r)}function U2(){return hg.gapiScript}function x2(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L2(r,t){const n=Bs(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),c=n.getOptions();if(xr(c,t??{}))return l;Xi(l,"already-initialized")}return n.initialize({options:t})}function z2(r,t){const n=t?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Fi);t?.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t?.popupRedirectResolver)}function B2(r,t,n){const s=cg(r);pt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const l=!1,c=G0(t),{host:d,port:g}=q2(t),p=g===null?"":`:${g}`,y={url:`${c}//${d}${p}/`},A=Object.freeze({host:d,port:g,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){pt(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),pt(xr(y,s.config.emulator)&&xr(A,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=A,s.settings.appVerificationDisabledForTesting=!0,Wa(d)?(ET(`${c}//${d}${p}`),AT("Auth",!0)):j2()}function G0(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function q2(r){const t=G0(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const c=l[1];return{host:c,port:rT(s.substr(c.length+1))}}else{const[c,d]=s.split(":");return{host:c,port:rT(d)}}}function rT(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function j2(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Gi("not implemented")}_getIdTokenResponse(t){return Gi("not implemented")}_linkToIdToken(t,n){return Gi("not implemented")}_getReauthenticationResolver(t){return Gi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fa(r,t){return y2(r,"POST","/v1/accounts:signInWithIdp",og(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2="http://localhost";class Ls extends F0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ls(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Xi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:l,...c}=n;if(!s||!l)return null;const d=new Ls(s,l);return d.idToken=c.idToken||void 0,d.accessToken=c.accessToken||void 0,d.secret=c.secret,d.nonce=c.nonce,d.pendingToken=c.pendingToken||null,d}_getIdTokenResponse(t){const n=this.buildRequest();return Fa(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Fa(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Fa(t,n)}buildRequest(){const t={requestUri:H2,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=kl(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl extends Q0{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Hl{constructor(){super("facebook.com")}static credential(t){return Ls._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ir.credentialFromTaggedObject(t)}static credentialFromError(t){return Ir.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ir.credential(t.oauthAccessToken)}catch{return null}}}Ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ir.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Hl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ls._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Cr.credentialFromTaggedObject(t)}static credentialFromError(t){return Cr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Cr.credential(n,s)}catch{return null}}}Cr.GOOGLE_SIGN_IN_METHOD="google.com";Cr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends Hl{constructor(){super("github.com")}static credential(t){return Ls._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Dr.credentialFromTaggedObject(t)}static credentialFromError(t){return Dr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Dr.credential(t.oauthAccessToken)}catch{return null}}}Dr.GITHUB_SIGN_IN_METHOD="github.com";Dr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends Hl{constructor(){super("twitter.com")}static credential(t,n){return Ls._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Nr.credentialFromTaggedObject(t)}static credentialFromError(t){return Nr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Nr.credential(n,s)}catch{return null}}}Nr.TWITTER_SIGN_IN_METHOD="twitter.com";Nr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,l=!1){const c=await Bn._fromIdTokenResponse(t,s,l),d=sT(s);return new Ja({user:c,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const l=sT(s);return new Ja({user:t,providerId:l,_tokenResponse:s,operationType:n})}}function sT(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc extends Hn{constructor(t,n,s,l){super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,Wc.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,l){return new Wc(t,n,s,l)}}function K0(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Wc._fromErrorAndOperation(r,c,t,s):c})}async function G2(r,t,n=!1){const s=await Pl(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return Ja._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F2(r,t,n=!1){const{auth:s}=r;if(li(s.app))return Promise.reject(Ms(s));const l="reauthenticate";try{const c=await Pl(r,K0(s,l,t,r),n);pt(c.idToken,s,"internal-error");const d=lg(c.idToken);pt(d,s,"internal-error");const{sub:g}=d;return pt(r.uid===g,s,"user-mismatch"),Ja._forOperation(r,l,c)}catch(c){throw c?.code==="auth/user-not-found"&&Xi(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q2(r,t,n=!1){if(li(r.app))return Promise.reject(Ms(r));const s="signIn",l=await K0(r,s,t),c=await Ja._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(c.user),c}function K2(r,t,n,s){return $e(r).onIdTokenChanged(t,n,s)}function Y2(r,t,n){return $e(r).beforeAuthStateChanged(t,n)}const th="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(th,"1"),this.storage.removeItem(th),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2=1e3,$2=10;class X0 extends Y0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=j0(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&t(n,l,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((d,g,p)=>{this.notifyListeners(d,p)});return}const s=t.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},c=this.storage.getItem(s);C2()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(l,$2):l()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},X2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}X0.type="LOCAL";const Z2=X0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0 extends Y0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}$0.type="SESSION";const Z0=$0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J2(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(l=>l.isListeningto(t));if(n)return n;const s=new Sh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:l,data:c}=n.data,d=this.handlersMap[l];if(!d?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const g=Array.from(d).map(async y=>y(n.origin,c)),p=await J2(g);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,d;return new Promise((g,p)=>{const y=fg("",20);l.port1.start();const A=setTimeout(()=>{p(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(I){const C=I;if(C.data.eventId===y)switch(C.data.status){case"ack":clearTimeout(A),c=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),g(C.data.response);break;default:clearTimeout(A),clearTimeout(c),p(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:t,eventId:y,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(){return window}function tD(r){mi().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(){return typeof mi().WorkerGlobalScope<"u"&&typeof mi().importScripts=="function"}async function eD(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nD(){return navigator?.serviceWorker?.controller||null}function iD(){return J0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0="firebaseLocalStorageDb",rD=1,eh="firebaseLocalStorage",tA="fbase_key";class Gl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bh(r,t){return r.transaction([eh],t?"readwrite":"readonly").objectStore(eh)}function sD(){const r=indexedDB.deleteDatabase(W0);return new Gl(r).toPromise()}function vm(){const r=indexedDB.open(W0,rD);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(eh,{keyPath:tA})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(eh)?t(s):(s.close(),await sD(),t(await vm()))})})}async function aT(r,t,n){const s=bh(r,!0).put({[tA]:t,value:n});return new Gl(s).toPromise()}async function aD(r,t){const n=bh(r,!1).get(t),s=await new Gl(n).toPromise();return s===void 0?null:s.value}function oT(r,t){const n=bh(r,!0).delete(t);return new Gl(n).toPromise()}const oD=800,lD=3;class eA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vm(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>lD)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return J0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sh._getInstance(iD()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await eD(),!this.activeServiceWorker)return;this.sender=new W2(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||nD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await vm();return await aT(t,th,"1"),await oT(t,th),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>aT(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>aD(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>oT(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(l=>{const c=bh(l,!1).getAll();return new Gl(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:l,value:c}of t)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eA.type="LOCAL";const uD=eA;new jl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cD(r,t){return t?Fi(t):(pt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg extends F0{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Fa(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Fa(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Fa(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function hD(r){return Q2(r.auth,new dg(r),r.bypassAuthState)}function fD(r){const{auth:t,user:n}=r;return pt(n,t,"internal-error"),F2(n,new dg(r),r.bypassAuthState)}async function dD(r){const{auth:t,user:n}=r;return pt(n,t,"internal-error"),G2(n,new dg(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(t,n,s,l,c=!1){this.auth=t,this.resolver=s,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:l,tenantId:c,error:d,type:g}=t;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(p))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return hD;case"linkViaPopup":case"linkViaRedirect":return dD;case"reauthViaPopup":case"reauthViaRedirect":return fD;default:Xi(this.auth,"internal-error")}}resolve(t){$i(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){$i(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD=new jl(2e3,1e4);class za extends nA{constructor(t,n,s,l,c){super(t,n,l,c),this.provider=s,this.authWindow=null,this.pollId=null,za.currentPopupAction&&za.currentPopupAction.cancel(),za.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return pt(t,this.auth,"internal-error"),t}async onExecution(){$i(this.filter.length===1,"Popup operations only handle one event");const t=fg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(di(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(di(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,za.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(di(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,mD.get())};t()}}za.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD="pendingRedirect",Mc=new Map;class pD extends nA{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=Mc.get(this.auth._key());if(!t){try{const s=await yD(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}Mc.set(this.auth._key(),t)}return this.bypassAuthState||Mc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yD(r,t){const n=TD(t),s=vD(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function _D(r,t){Mc.set(r._key(),t)}function vD(r){return Fi(r._redirectPersistence)}function TD(r){return Oc(gD,r.config.apiKey,r.name)}async function ED(r,t,n=!1){if(li(r.app))return Promise.reject(Ms(r));const s=cg(r),l=cD(s,t),d=await new pD(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,t)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD=600*1e3;class SD{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!bD(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!iA(t)){const s=t.error.code?.split("auth/")[1]||"internal-error";n.onError(di(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=AD&&this.cachedEventUids.clear(),this.cachedEventUids.has(lT(t))}saveEventToCache(t){this.cachedEventUids.add(lT(t)),this.lastProcessedEventTime=Date.now()}}function lT(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function iA({type:r,error:t}){return r==="unknown"&&t?.code==="auth/no-auth-event"}function bD(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iA(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wD(r,t={}){return so(r,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ID=/^https?/;async function CD(r){if(r.config.emulator)return;const{authorizedDomains:t}=await wD(r);for(const n of t)try{if(DD(n))return}catch{}Xi(r,"unauthorized-domain")}function DD(r){const t=ym(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!ID.test(n))return!1;if(RD.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ND=new jl(3e4,6e4);function uT(){const r=mi().___jsl;if(r?.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function OD(r){return new Promise((t,n)=>{function s(){uT(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{uT(),n(di(r,"network-request-failed"))},timeout:ND.get()})}if(mi().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(mi().gapi?.load)s();else{const l=x2("iframefcb");return mi()[l]=()=>{gapi.load?s():n(di(r,"network-request-failed"))},k2(`${U2()}?onload=${l}`).catch(c=>n(c))}}).catch(t=>{throw Vc=null,t})}let Vc=null;function MD(r){return Vc=Vc||OD(r),Vc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD=new jl(5e3,15e3),PD="__/auth/iframe",kD="emulator/auth/iframe",UD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LD(r){const t=r.config;pt(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?ag(t,kD):`https://${r.config.authDomain}/${PD}`,s={apiKey:t.apiKey,appName:r.name,v:to},l=xD.get(r.config.apiHost);l&&(s.eid=l);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${kl(s).slice(1)}`}async function zD(r){const t=await MD(r),n=mi().gapi;return pt(n,r,"internal-error"),t.open({where:document.body,url:LD(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UD,dontclear:!0},s=>new Promise(async(l,c)=>{await s.restyle({setHideOnLeave:!1});const d=di(r,"network-request-failed"),g=mi().setTimeout(()=>{c(d)},VD.get());function p(){mi().clearTimeout(g),l(s)}s.ping(p).then(p,()=>{c(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qD=500,jD=600,HD="_blank",GD="http://localhost";class cT{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FD(r,t,n,s=qD,l=jD){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let g="";const p={...BD,width:s.toString(),height:l.toString(),top:c,left:d},y=Xe().toLowerCase();n&&(g=x0(y)?HD:n),k0(y)&&(t=t||GD,p.scrollbars="yes");const A=Object.entries(p).reduce((C,[G,$])=>`${C}${G}=${$},`,"");if(I2(y)&&g!=="_self")return QD(t||"",g),new cT(null);const I=window.open(t||"",g,A);pt(I,r,"popup-blocked");try{I.focus()}catch{}return new cT(I)}function QD(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KD="__/auth/handler",YD="emulator/auth/handler",XD=encodeURIComponent("fac");async function hT(r,t,n,s,l,c){pt(r.config.authDomain,r,"auth-domain-config-required"),pt(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:to,eventId:l};if(t instanceof Q0){t.setDefaultLanguage(r.languageCode),d.providerId=t.providerId||"",o1(t.getCustomParameters())||(d.customParameters=JSON.stringify(t.getCustomParameters()));for(const[A,I]of Object.entries({}))d[A]=I}if(t instanceof Hl){const A=t.getScopes().filter(I=>I!=="");A.length>0&&(d.scopes=A.join(","))}r.tenantId&&(d.tid=r.tenantId);const g=d;for(const A of Object.keys(g))g[A]===void 0&&delete g[A];const p=await r._getAppCheckToken(),y=p?`#${XD}=${encodeURIComponent(p)}`:"";return`${$D(r)}?${kl(g).slice(1)}${y}`}function $D({config:r}){return r.emulator?ag(r,YD):`https://${r.authDomain}/${KD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="webStorageSupport";class ZD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Z0,this._completeRedirectFn=ED,this._overrideRedirectResult=_D}async _openPopup(t,n,s,l){$i(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const c=await hT(t,n,s,ym(),l);return FD(t,c,fg())}async _openRedirect(t,n,s,l){await this._originValidation(t);const c=await hT(t,n,s,ym(),l);return tD(c),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:l,promise:c}=this.eventManagers[n];return l?Promise.resolve(l):($i(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await zD(t),s=new SD(t);return n.register("authEvent",l=>(pt(l?.authEvent,t,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Qd,{type:Qd},l=>{const c=l?.[0]?.[Qd];c!==void 0&&n(!!c),Xi(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CD(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return j0()||U0()||ug()}}const JD=ZD;var fT="@firebase/auth",dT="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eN(r){gi(new jn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),l=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:d,authDomain:g}=s.options;pt(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:d,authDomain:g,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:H0(r)},y=new V2(s,l,c,p);return z2(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),gi(new jn("auth-internal",t=>{const n=cg(t.getProvider("auth").getImmediate());return(s=>new WD(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vn(fT,dT,tN(r)),Vn(fT,dT,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN=300,iN=TT("authIdTokenMaxAge")||nN;let mT=null;const rN=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>iN)return;const l=n?.token;mT!==l&&(mT=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function sN(r=Am()){const t=Bs(r,"auth");if(t.isInitialized())return t.getImmediate();const n=L2(r,{popupRedirectResolver:JD,persistence:[uD,Z2,Z0]}),s=TT("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const d=rN(c.toString());Y2(n,d,()=>d(n.currentUser)),K2(n,g=>d(g))}}const l=_T("auth");return l&&B2(n,`http://${l}`),n}function aN(){return document.getElementsByTagName("head")?.[0]??document}P2({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=l=>{const c=di("internal-error");c.customData=l,n(c)},s.type="text/javascript",s.charset="UTF-8",aN().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eN("Browser");const oN={apiKey:"AIzaSyCUkLFirhxk3vClG_jK7RBt3-T3gLDhRKI",authDomain:"chat-todo-288ee.firebaseapp.com",projectId:"chat-todo-288ee",storageBucket:"chat-todo-288ee.firebasestorage.app",messagingSenderId:"1066571366121",appId:"1:1066571366121:web:c36772fafd7cdf8f0fba78",measurementId:"G-66SRWLC9YJ"},mg=DT(oN);sN(mg);const Ac=SI(mg);s2(mg);function lN(){const[r,t]=Sc.useState([]),[n,s]=Sc.useState("");Sc.useEffect(()=>{(async()=>{try{const p=await LI(Bv(Ac,"todos")),y=[];p.forEach(A=>{y.push({id:A.id,...A.data()})}),t(y)}catch(p){console.error("Error fetching todos: ",p)}})()},[]);const l=async g=>{if(g.preventDefault(),n.trim()!=="")try{const p=await qI(Bv(Ac,"todos"),{text:n,completed:!1,createdAt:new Date});console.log("Document written with ID: ",p.id),t([...r,{id:p.id,text:n,completed:!1}]),s("")}catch(p){console.error("Error adding document: ",p)}},c=async g=>{try{const p=mm(Ac,"todos",g);await BI(p),t(r.filter(y=>y.id!==g)),console.log("Document successfully deleted!")}catch(p){console.error("Error removing document: ",p)}},d=async(g,p)=>{try{const y=mm(Ac,"todos",g);await zI(y,{completed:!p}),t(r.map(A=>A.id===g?{...A,completed:!p}:A)),console.log("Document successfully updated!")}catch(y){console.error("Error updating document: ",y)}};return Oe.jsx(Oe.Fragment,{children:Oe.jsxs("div",{className:"flex flex-col items-center justify-center h-screen bg-sky-100",children:[Oe.jsx("h1",{className:"text-3xl font-bold mb-4",children:"To-Do App"}),Oe.jsx("div",{className:"mb-4 bg-white p-4 rounded-md shadow md:w-[50vw]",children:Oe.jsxs("form",{onSubmit:l,className:"p-2 flex flex-col items-center space-x-2 gap-3",children:[Oe.jsx("input",{className:"border border-gray-300 p-1 rounded-md w-full text-black focus:outline-none",type:"text",value:n,onChange:g=>s(g.target.value),placeholder:"Add a new to-do"}),Oe.jsx("button",{className:"py-2 px-4 rounded-lg bg-sky-500 text-white font-bold hover:bg-sky-600",type:"submit",children:"Add To-Do"})]})}),Oe.jsxs("div",{children:[Oe.jsx("h2",{children:"My To-Do List"}),Oe.jsx("ul",{className:"bg-white p-4 rounded-md shadow md:w-[50vw]",children:r.length>0?r.map(g=>Oe.jsxs("li",{className:"flex justify-between items-center mb-2 border-b border-gray-300 py-2",children:[Oe.jsx("input",{className:"w-5 h-5 rounded-lg",type:"checkbox",checked:g.completed,onChange:()=>d(g.id,g.completed)}),Oe.jsx("span",{style:{textDecoration:g.completed?"line-through":"none"},children:g.text}),Oe.jsx("button",{onClick:()=>c(g.id),className:"py-2 px-4 rounded-lg bg-red-500 text-white font-bold hover:bg-red-600",children:"Delete"})]},g.id)):Oe.jsx("li",{children:"No to-do items found."})})]})]})})}xS.createRoot(document.getElementById("root")).render(Oe.jsx(Sc.StrictMode,{children:Oe.jsx(lN,{})}));
