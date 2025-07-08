(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function GS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Nd={exports:{}},yl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function KS(){if(O_)return yl;O_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return yl.Fragment=t,yl.jsx=n,yl.jsxs=n,yl}var N_;function QS(){return N_||(N_=1,Nd.exports=KS()),Nd.exports}var q=QS(),Md={exports:{}},St={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function YS(){if(M_)return St;M_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),w=Symbol.iterator;function C(D){return D===null||typeof D!="object"?null:(D=w&&D[w]||D["@@iterator"],typeof D=="function"?D:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,nt={};function W(D,$,rt){this.props=D,this.context=$,this.refs=nt,this.updater=rt||B}W.prototype.isReactComponent={},W.prototype.setState=function(D,$){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,$,"setState")},W.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function ft(){}ft.prototype=W.prototype;function et(D,$,rt){this.props=D,this.context=$,this.refs=nt,this.updater=rt||B}var ot=et.prototype=new ft;ot.constructor=et,X(ot,W.prototype),ot.isPureReactComponent=!0;var Dt=Array.isArray,pt={H:null,A:null,T:null,S:null,V:null},Rt=Object.prototype.hasOwnProperty;function M(D,$,rt,J,ht,It){return rt=It.ref,{$$typeof:r,type:D,key:$,ref:rt!==void 0?rt:null,props:It}}function S(D,$){return M(D.type,$,void 0,void 0,void 0,D.props)}function R(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function N(D){var $={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(rt){return $[rt]})}var V=/\/+/g;function x(D,$){return typeof D=="object"&&D!==null&&D.key!=null?N(""+D.key):$.toString(36)}function I(){}function xe(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(I,I):(D.status="pending",D.then(function($){D.status==="pending"&&(D.status="fulfilled",D.value=$)},function($){D.status==="pending"&&(D.status="rejected",D.reason=$)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function se(D,$,rt,J,ht){var It=typeof D;(It==="undefined"||It==="boolean")&&(D=null);var Et=!1;if(D===null)Et=!0;else switch(It){case"bigint":case"string":case"number":Et=!0;break;case"object":switch(D.$$typeof){case r:case t:Et=!0;break;case T:return Et=D._init,se(Et(D._payload),$,rt,J,ht)}}if(Et)return ht=ht(D),Et=J===""?"."+x(D,0):J,Dt(ht)?(rt="",Et!=null&&(rt=Et.replace(V,"$&/")+"/"),se(ht,$,rt,"",function(Kn){return Kn})):ht!=null&&(R(ht)&&(ht=S(ht,rt+(ht.key==null||D&&D.key===ht.key?"":(""+ht.key).replace(V,"$&/")+"/")+Et)),$.push(ht)),1;Et=0;var Ie=J===""?".":J+":";if(Dt(D))for(var Zt=0;Zt<D.length;Zt++)J=D[Zt],It=Ie+x(J,Zt),Et+=se(J,$,rt,It,ht);else if(Zt=C(D),typeof Zt=="function")for(D=Zt.call(D),Zt=0;!(J=D.next()).done;)J=J.value,It=Ie+x(J,Zt++),Et+=se(J,$,rt,It,ht);else if(It==="object"){if(typeof D.then=="function")return se(xe(D),$,rt,J,ht);throw $=String(D),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return Et}function F(D,$,rt){if(D==null)return D;var J=[],ht=0;return se(D,J,"","",function(It){return $.call(rt,It,ht++)}),J}function it(D){if(D._status===-1){var $=D._result;$=$(),$.then(function(rt){(D._status===0||D._status===-1)&&(D._status=1,D._result=rt)},function(rt){(D._status===0||D._status===-1)&&(D._status=2,D._result=rt)}),D._status===-1&&(D._status=0,D._result=$)}if(D._status===1)return D._result.default;throw D._result}var ct=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function zt(){}return St.Children={map:F,forEach:function(D,$,rt){F(D,function(){$.apply(this,arguments)},rt)},count:function(D){var $=0;return F(D,function(){$++}),$},toArray:function(D){return F(D,function($){return $})||[]},only:function(D){if(!R(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},St.Component=W,St.Fragment=n,St.Profiler=o,St.PureComponent=et,St.StrictMode=s,St.Suspense=p,St.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=pt,St.__COMPILER_RUNTIME={__proto__:null,c:function(D){return pt.H.useMemoCache(D)}},St.cache=function(D){return function(){return D.apply(null,arguments)}},St.cloneElement=function(D,$,rt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var J=X({},D.props),ht=D.key,It=void 0;if($!=null)for(Et in $.ref!==void 0&&(It=void 0),$.key!==void 0&&(ht=""+$.key),$)!Rt.call($,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&$.ref===void 0||(J[Et]=$[Et]);var Et=arguments.length-2;if(Et===1)J.children=rt;else if(1<Et){for(var Ie=Array(Et),Zt=0;Zt<Et;Zt++)Ie[Zt]=arguments[Zt+2];J.children=Ie}return M(D.type,ht,void 0,void 0,It,J)},St.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},St.createElement=function(D,$,rt){var J,ht={},It=null;if($!=null)for(J in $.key!==void 0&&(It=""+$.key),$)Rt.call($,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ht[J]=$[J]);var Et=arguments.length-2;if(Et===1)ht.children=rt;else if(1<Et){for(var Ie=Array(Et),Zt=0;Zt<Et;Zt++)Ie[Zt]=arguments[Zt+2];ht.children=Ie}if(D&&D.defaultProps)for(J in Et=D.defaultProps,Et)ht[J]===void 0&&(ht[J]=Et[J]);return M(D,It,void 0,void 0,null,ht)},St.createRef=function(){return{current:null}},St.forwardRef=function(D){return{$$typeof:m,render:D}},St.isValidElement=R,St.lazy=function(D){return{$$typeof:T,_payload:{_status:-1,_result:D},_init:it}},St.memo=function(D,$){return{$$typeof:y,type:D,compare:$===void 0?null:$}},St.startTransition=function(D){var $=pt.T,rt={};pt.T=rt;try{var J=D(),ht=pt.S;ht!==null&&ht(rt,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(zt,ct)}catch(It){ct(It)}finally{pt.T=$}},St.unstable_useCacheRefresh=function(){return pt.H.useCacheRefresh()},St.use=function(D){return pt.H.use(D)},St.useActionState=function(D,$,rt){return pt.H.useActionState(D,$,rt)},St.useCallback=function(D,$){return pt.H.useCallback(D,$)},St.useContext=function(D){return pt.H.useContext(D)},St.useDebugValue=function(){},St.useDeferredValue=function(D,$){return pt.H.useDeferredValue(D,$)},St.useEffect=function(D,$,rt){var J=pt.H;if(typeof rt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(D,$)},St.useId=function(){return pt.H.useId()},St.useImperativeHandle=function(D,$,rt){return pt.H.useImperativeHandle(D,$,rt)},St.useInsertionEffect=function(D,$){return pt.H.useInsertionEffect(D,$)},St.useLayoutEffect=function(D,$){return pt.H.useLayoutEffect(D,$)},St.useMemo=function(D,$){return pt.H.useMemo(D,$)},St.useOptimistic=function(D,$){return pt.H.useOptimistic(D,$)},St.useReducer=function(D,$,rt){return pt.H.useReducer(D,$,rt)},St.useRef=function(D){return pt.H.useRef(D)},St.useState=function(D){return pt.H.useState(D)},St.useSyncExternalStore=function(D,$,rt){return pt.H.useSyncExternalStore(D,$,rt)},St.useTransition=function(){return pt.H.useTransition()},St.version="19.1.0",St}var V_;function bm(){return V_||(V_=1,Md.exports=YS()),Md.exports}var be=bm(),Vd={exports:{}},_l={},Pd={exports:{}},xd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_;function XS(){return P_||(P_=1,function(r){function t(F,it){var ct=F.length;F.push(it);t:for(;0<ct;){var zt=ct-1>>>1,D=F[zt];if(0<o(D,it))F[zt]=it,F[ct]=D,ct=zt;else break t}}function n(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var it=F[0],ct=F.pop();if(ct!==it){F[0]=ct;t:for(var zt=0,D=F.length,$=D>>>1;zt<$;){var rt=2*(zt+1)-1,J=F[rt],ht=rt+1,It=F[ht];if(0>o(J,ct))ht<D&&0>o(It,J)?(F[zt]=It,F[ht]=ct,zt=ht):(F[zt]=J,F[rt]=ct,zt=rt);else if(ht<D&&0>o(It,ct))F[zt]=It,F[ht]=ct,zt=ht;else break t}}return it}function o(F,it){var ct=F.sortIndex-it.sortIndex;return ct!==0?ct:F.id-it.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var p=[],y=[],T=1,w=null,C=3,B=!1,X=!1,nt=!1,W=!1,ft=typeof setTimeout=="function"?setTimeout:null,et=typeof clearTimeout=="function"?clearTimeout:null,ot=typeof setImmediate<"u"?setImmediate:null;function Dt(F){for(var it=n(y);it!==null;){if(it.callback===null)s(y);else if(it.startTime<=F)s(y),it.sortIndex=it.expirationTime,t(p,it);else break;it=n(y)}}function pt(F){if(nt=!1,Dt(F),!X)if(n(p)!==null)X=!0,Rt||(Rt=!0,x());else{var it=n(y);it!==null&&se(pt,it.startTime-F)}}var Rt=!1,M=-1,S=5,R=-1;function N(){return W?!0:!(r.unstable_now()-R<S)}function V(){if(W=!1,Rt){var F=r.unstable_now();R=F;var it=!0;try{t:{X=!1,nt&&(nt=!1,et(M),M=-1),B=!0;var ct=C;try{e:{for(Dt(F),w=n(p);w!==null&&!(w.expirationTime>F&&N());){var zt=w.callback;if(typeof zt=="function"){w.callback=null,C=w.priorityLevel;var D=zt(w.expirationTime<=F);if(F=r.unstable_now(),typeof D=="function"){w.callback=D,Dt(F),it=!0;break e}w===n(p)&&s(p),Dt(F)}else s(p);w=n(p)}if(w!==null)it=!0;else{var $=n(y);$!==null&&se(pt,$.startTime-F),it=!1}}break t}finally{w=null,C=ct,B=!1}it=void 0}}finally{it?x():Rt=!1}}}var x;if(typeof ot=="function")x=function(){ot(V)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,xe=I.port2;I.port1.onmessage=V,x=function(){xe.postMessage(null)}}else x=function(){ft(V,0)};function se(F,it){M=ft(function(){F(r.unstable_now())},it)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_next=function(F){switch(C){case 1:case 2:case 3:var it=3;break;default:it=C}var ct=C;C=it;try{return F()}finally{C=ct}},r.unstable_requestPaint=function(){W=!0},r.unstable_runWithPriority=function(F,it){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ct=C;C=F;try{return it()}finally{C=ct}},r.unstable_scheduleCallback=function(F,it,ct){var zt=r.unstable_now();switch(typeof ct=="object"&&ct!==null?(ct=ct.delay,ct=typeof ct=="number"&&0<ct?zt+ct:zt):ct=zt,F){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ct+D,F={id:T++,callback:it,priorityLevel:F,startTime:ct,expirationTime:D,sortIndex:-1},ct>zt?(F.sortIndex=ct,t(y,F),n(p)===null&&F===n(y)&&(nt?(et(M),M=-1):nt=!0,se(pt,ct-zt))):(F.sortIndex=D,t(p,F),X||B||(X=!0,Rt||(Rt=!0,x()))),F},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(F){var it=C;return function(){var ct=C;C=it;try{return F.apply(this,arguments)}finally{C=ct}}}}(xd)),xd}var x_;function $S(){return x_||(x_=1,Pd.exports=XS()),Pd.exports}var kd={exports:{}},Ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function ZS(){if(k_)return Ke;k_=1;var r=bm();function t(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)y+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,y,T){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:w==null?null:""+w,children:p,containerInfo:y,implementation:T}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ke.createPortal=function(p,y){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return u(p,y,null,T)},Ke.flushSync=function(p){var y=f.T,T=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=T,s.d.f()}},Ke.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},Ke.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Ke.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var T=y.as,w=m(T,y.crossOrigin),C=typeof y.integrity=="string"?y.integrity:void 0,B=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;T==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:w,integrity:C,fetchPriority:B}):T==="script"&&s.d.X(p,{crossOrigin:w,integrity:C,fetchPriority:B,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Ke.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var T=m(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},Ke.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var T=y.as,w=m(T,y.crossOrigin);s.d.L(p,T,{crossOrigin:w,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Ke.preloadModule=function(p,y){if(typeof p=="string")if(y){var T=m(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},Ke.requestFormReset=function(p){s.d.r(p)},Ke.unstable_batchedUpdates=function(p,y){return p(y)},Ke.useFormState=function(p,y,T){return f.H.useFormState(p,y,T)},Ke.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ke.version="19.1.0",Ke}var U_;function TE(){if(U_)return kd.exports;U_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),kd.exports=ZS(),kd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function WS(){if(L_)return _l;L_=1;var r=$S(),t=bm(),n=TE();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function p(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return m(h),e;if(d===l)return m(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,E=h.child;E;){if(E===a){v=!0,a=h,l=d;break}if(E===l){v=!0,l=h,a=d;break}E=E.sibling}if(!v){for(E=d.child;E;){if(E===a){v=!0,a=d,l=h;break}if(E===l){v=!0,l=d,a=h;break}E=E.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function y(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=y(e),i!==null)return i;e=e.sibling}return null}var T=Object.assign,w=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),nt=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),ft=Symbol.for("react.provider"),et=Symbol.for("react.consumer"),ot=Symbol.for("react.context"),Dt=Symbol.for("react.forward_ref"),pt=Symbol.for("react.suspense"),Rt=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function x(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var I=Symbol.for("react.client.reference");function xe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===I?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case W:return"Profiler";case nt:return"StrictMode";case pt:return"Suspense";case Rt:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case ot:return(e.displayName||"Context")+".Provider";case et:return(e._context.displayName||"Context")+".Consumer";case Dt:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case M:return i=e.displayName||null,i!==null?i:xe(e.type)||"Memo";case S:i=e._payload,e=e._init;try{return xe(e(i))}catch{}}return null}var se=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct={pending:!1,data:null,method:null,action:null},zt=[],D=-1;function $(e){return{current:e}}function rt(e){0>D||(e.current=zt[D],zt[D]=null,D--)}function J(e,i){D++,zt[D]=e.current,e.current=i}var ht=$(null),It=$(null),Et=$(null),Ie=$(null);function Zt(e,i){switch(J(Et,i),J(It,e),J(ht,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?r_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=r_(i),e=s_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}rt(ht),J(ht,e)}function Kn(){rt(ht),rt(It),rt(Et)}function Ji(e){e.memoizedState!==null&&J(Ie,e);var i=ht.current,a=s_(i,e.type);i!==a&&(J(It,e),J(ht,a))}function vi(e){It.current===e&&(rt(ht),rt(It)),Ie.current===e&&(rt(Ie),fl._currentValue=ct)}var Yr=Object.prototype.hasOwnProperty,Xr=r.unstable_scheduleCallback,$r=r.unstable_cancelCallback,lo=r.unstable_shouldYield,iu=r.unstable_requestPaint,_n=r.unstable_now,Oh=r.unstable_getCurrentPriorityLevel,uo=r.unstable_ImmediatePriority,Ys=r.unstable_UserBlockingPriority,Zr=r.unstable_NormalPriority,Nh=r.unstable_LowPriority,Xs=r.unstable_IdlePriority,co=r.log,ru=r.unstable_setDisableYieldValue,ae=null,Ht=null;function ln(e){if(typeof co=="function"&&ru(e),Ht&&typeof Ht.setStrictMode=="function")try{Ht.setStrictMode(ae,e)}catch{}}var Fe=Math.clz32?Math.clz32:Wr,su=Math.log,Mh=Math.LN2;function Wr(e){return e>>>=0,e===0?32:31-(su(e)/Mh|0)|0}var Jr=256,ts=4194304;function xn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $s(e,i,a){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var E=l&134217727;return E!==0?(l=E&~d,l!==0?h=xn(l):(v&=E,v!==0?h=xn(v):a||(a=E&~e,a!==0&&(h=xn(a))))):(E=l&~d,E!==0?h=xn(E):v!==0?h=xn(v):a||(a=l&~e,a!==0&&(h=xn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function es(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ho(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fo(){var e=Jr;return Jr<<=1,(Jr&4194048)===0&&(Jr=256),e}function mo(){var e=ts;return ts<<=1,(ts&62914560)===0&&(ts=4194304),e}function Ei(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function Ti(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function go(e,i,a,l,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,b=e.expirationTimes,L=e.hiddenUpdates;for(a=v&~a;0<a;){var G=31-Fe(a),Q=1<<G;E[G]=0,b[G]=-1;var z=L[G];if(z!==null)for(L[G]=null,G=0;G<z.length;G++){var j=z[G];j!==null&&(j.lane&=-536870913)}a&=~Q}l!==0&&Qn(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function Qn(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Fe(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function po(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-Fe(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function tr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Zs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function er(){var e=it.p;return e!==0?e:(e=window.event,e===void 0?32:b_(e.type))}function au(e,i){var a=it.p;try{return it.p=e,i()}finally{it.p=a}}var te=Math.random().toString(36).slice(2),ve="__reactFiber$"+te,de="__reactProps$"+te,vn="__reactContainer$"+te,yo="__reactEvents$"+te,Vh="__reactListeners$"+te,nr="__reactHandles$"+te,ou="__reactResources$"+te,ns="__reactMarker$"+te;function ir(e){delete e[ve],delete e[de],delete e[yo],delete e[Vh],delete e[nr]}function Ai(e){var i=e[ve];if(i)return i;for(var a=e.parentNode;a;){if(i=a[vn]||a[ve]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=u_(e);e!==null;){if(a=e[ve])return a;e=u_(e)}return i}e=a,a=e.parentNode}return null}function Yn(e){if(e=e[ve]||e[vn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Xn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function Ze(e){var i=e[ou];return i||(i=e[ou]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ue(e){e[ns]=!0}var _o=new Set,Ws={};function kn(e,i){Si(e,i),Si(e+"Capture",i)}function Si(e,i){for(Ws[e]=i,e=0;e<i.length;e++)_o.add(i[e])}var lu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),uu={},is={};function cu(e){return Yr.call(is,e)?!0:Yr.call(uu,e)?!1:lu.test(e)?is[e]=!0:(uu[e]=!0,!1)}function rr(e,i,a){if(cu(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function $n(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function ke(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}var rs,hu;function bi(e){if(rs===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);rs=i&&i[1]||"",hu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rs+e+hu}var Js=!1;function ta(e,i){if(!e||Js)return"";Js=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(j){var z=j}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(j){z=j}e.call(Q.prototype)}}else{try{throw Error()}catch(j){z=j}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(j){if(j&&z&&typeof j.stack=="string")return[j.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],E=d[1];if(v&&E){var b=v.split(`
`),L=E.split(`
`);for(h=l=0;l<b.length&&!b[l].includes("DetermineComponentFrameRoot");)l++;for(;h<L.length&&!L[h].includes("DetermineComponentFrameRoot");)h++;if(l===b.length||h===L.length)for(l=b.length-1,h=L.length-1;1<=l&&0<=h&&b[l]!==L[h];)h--;for(;1<=l&&0<=h;l--,h--)if(b[l]!==L[h]){if(l!==1||h!==1)do if(l--,h--,0>h||b[l]!==L[h]){var G=`
`+b[l].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=l&&0<=h);break}}}finally{Js=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?bi(a):""}function vo(e){switch(e.tag){case 26:case 27:case 5:return bi(e.type);case 16:return bi("Lazy");case 13:return bi("Suspense");case 19:return bi("SuspenseList");case 0:case 15:return ta(e.type,!1);case 11:return ta(e.type.render,!1);case 1:return ta(e.type,!0);case 31:return bi("Activity");default:return""}}function ea(e){try{var i="";do i+=vo(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function We(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Eo(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ph(e){var i=Eo(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function na(e){e._valueTracker||(e._valueTracker=Ph(e))}function To(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=Eo(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function ss(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var xh=/[\n"\\]/g;function me(e){return e.replace(xh,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function un(e,i,a,l,h,d,v,E){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+We(i)):e.value!==""+We(i)&&(e.value=""+We(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?sr(e,v,We(i)):a!=null?sr(e,v,We(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+We(E):e.removeAttribute("name")}function as(e,i,a,l,h,d,v,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+We(a):"",i=i!=null?""+We(i):a,E||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=E?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function sr(e,i,a){i==="number"&&ss(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function wi(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+We(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Kt(e,i,a){if(i!=null&&(i=""+We(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+We(a):""}function os(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(se(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=We(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function En(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var ls=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fu(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||ls.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Ao(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&fu(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&fu(e,d,i[d])}function So(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Uh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ia(e){return Uh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ri=null;function Tn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ii=null,Ci=null;function bo(e){var i=Yn(e);if(i&&(e=i.stateNode)){var a=e[de]||null;t:switch(e=i.stateNode,i.type){case"input":if(un(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+me(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[de]||null;if(!h)throw Error(s(90));un(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&To(l)}break t;case"textarea":Kt(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&wi(e,!!a.multiple,i,!1)}}}var Zn=!1;function du(e,i,a){if(Zn)return e(i,a);Zn=!0;try{var l=e(i);return l}finally{if(Zn=!1,(Ii!==null||Ci!==null)&&(ac(),Ii&&(i=Ii,e=Ci,Ci=Ii=null,bo(i),e)))for(i=0;i<e.length;i++)bo(e[i])}}function us(e,i){var a=e.stateNode;if(a===null)return null;var l=a[de]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),An=!1;if(Un)try{var cs={};Object.defineProperty(cs,"passive",{get:function(){An=!0}}),window.addEventListener("test",cs,cs),window.removeEventListener("test",cs,cs)}catch{An=!1}var Wn=null,ar=null,Di=null;function wo(){if(Di)return Di;var e,i=ar,a=i.length,l,h="value"in Wn?Wn.value:Wn.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Di=h.slice(e,1<l?1-l:void 0)}function Jn(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ti(){return!0}function Ro(){return!1}function Ce(e){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ti:Ro,this.isPropagationStopped=Ro,this}return T(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),i}var Bt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ra=Ce(Bt),hs=T({},Bt,{view:0,detail:0}),mu=Ce(hs),sa,aa,ei,fs=T({},hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ei&&(ei&&e.type==="mousemove"?(sa=e.screenX-ei.screenX,aa=e.screenY-ei.screenY):aa=sa=0,ei=e),sa)},movementY:function(e){return"movementY"in e?e.movementY:aa}}),Sn=Ce(fs),gu=T({},fs,{dataTransfer:0}),Lh=Ce(gu),ds=T({},hs,{relatedTarget:0}),oa=Ce(ds),Io=T({},Bt,{animationName:0,elapsedTime:0,pseudoElement:0}),la=Ce(Io),pu=T({},Bt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ua=Ce(pu),zh=T({},Bt,{data:0}),Co=Ce(zh),ms={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_u={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Do(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=_u[e])?!!i[e]:!1}function gs(){return Do}var vu=T({},hs,{key:function(e){if(e.key){var i=ms[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Jn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gs,charCode:function(e){return e.type==="keypress"?Jn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ca=Ce(vu),Eu=T({},fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oo=Ce(Eu),Oi=T({},hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gs}),Tu=Ce(Oi),Au=T({},Bt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Su=Ce(Au),bu=T({},fs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ha=Ce(bu),Je=T({},Bt,{newState:0,oldState:0}),wu=Ce(Je),Ru=[9,13,27,32],ni=Un&&"CompositionEvent"in window,c=null;Un&&"documentMode"in document&&(c=document.documentMode);var g=Un&&"TextEvent"in window&&!c,_=Un&&(!ni||c&&8<c&&11>=c),A=" ",k=!1;function H(e,i){switch(e){case"keyup":return Ru.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tt(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pt=!1;function Ee(e,i){switch(e){case"compositionend":return tt(i);case"keypress":return i.which!==32?null:(k=!0,A);case"textInput":return e=i.data,e===A&&k?null:e;default:return null}}function xt(e,i){if(Pt)return e==="compositionend"||!ni&&H(e,i)?(e=wo(),Di=ar=Wn=null,Pt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var De={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Te(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!De[e.type]:i==="textarea"}function Ni(e,i,a,l){Ii?Ci?Ci.push(l):Ci=[l]:Ii=l,i=fc(i,"onChange"),0<i.length&&(a=new ra("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var Ue=null,ii=null;function No(e){Jy(e,0)}function Iu(e){var i=Xn(e);if(To(i))return e}function Eg(e,i){if(e==="change")return i}var Tg=!1;if(Un){var jh;if(Un){var Bh="oninput"in document;if(!Bh){var Ag=document.createElement("div");Ag.setAttribute("oninput","return;"),Bh=typeof Ag.oninput=="function"}jh=Bh}else jh=!1;Tg=jh&&(!document.documentMode||9<document.documentMode)}function Sg(){Ue&&(Ue.detachEvent("onpropertychange",bg),ii=Ue=null)}function bg(e){if(e.propertyName==="value"&&Iu(ii)){var i=[];Ni(i,ii,e,Tn(e)),du(No,i)}}function TA(e,i,a){e==="focusin"?(Sg(),Ue=i,ii=a,Ue.attachEvent("onpropertychange",bg)):e==="focusout"&&Sg()}function AA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Iu(ii)}function SA(e,i){if(e==="click")return Iu(i)}function bA(e,i){if(e==="input"||e==="change")return Iu(i)}function wA(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var cn=typeof Object.is=="function"?Object.is:wA;function Mo(e,i){if(cn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Yr.call(i,h)||!cn(e[h],i[h]))return!1}return!0}function wg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rg(e,i){var a=wg(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=wg(a)}}function Ig(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Ig(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Cg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ss(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=ss(e.document)}return i}function qh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var RA=Un&&"documentMode"in document&&11>=document.documentMode,fa=null,Hh=null,Vo=null,Fh=!1;function Dg(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fh||fa==null||fa!==ss(l)||(l=fa,"selectionStart"in l&&qh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Vo&&Mo(Vo,l)||(Vo=l,l=fc(Hh,"onSelect"),0<l.length&&(i=new ra("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=fa)))}function ps(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var da={animationend:ps("Animation","AnimationEnd"),animationiteration:ps("Animation","AnimationIteration"),animationstart:ps("Animation","AnimationStart"),transitionrun:ps("Transition","TransitionRun"),transitionstart:ps("Transition","TransitionStart"),transitioncancel:ps("Transition","TransitionCancel"),transitionend:ps("Transition","TransitionEnd")},Gh={},Og={};Un&&(Og=document.createElement("div").style,"AnimationEvent"in window||(delete da.animationend.animation,delete da.animationiteration.animation,delete da.animationstart.animation),"TransitionEvent"in window||delete da.transitionend.transition);function ys(e){if(Gh[e])return Gh[e];if(!da[e])return e;var i=da[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in Og)return Gh[e]=i[a];return e}var Ng=ys("animationend"),Mg=ys("animationiteration"),Vg=ys("animationstart"),IA=ys("transitionrun"),CA=ys("transitionstart"),DA=ys("transitioncancel"),Pg=ys("transitionend"),xg=new Map,Kh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kh.push("scrollEnd");function Ln(e,i){xg.set(e,i),kn(i,[e])}var kg=new WeakMap;function bn(e,i){if(typeof e=="object"&&e!==null){var a=kg.get(e);return a!==void 0?a:(i={value:e,source:i,stack:ea(i)},kg.set(e,i),i)}return{value:e,source:i,stack:ea(i)}}var wn=[],ma=0,Qh=0;function Cu(){for(var e=ma,i=Qh=ma=0;i<e;){var a=wn[i];wn[i++]=null;var l=wn[i];wn[i++]=null;var h=wn[i];wn[i++]=null;var d=wn[i];if(wn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Ug(a,h,d)}}function Du(e,i,a,l){wn[ma++]=e,wn[ma++]=i,wn[ma++]=a,wn[ma++]=l,Qh|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Yh(e,i,a,l){return Du(e,i,a,l),Ou(e)}function ga(e,i){return Du(e,null,null,i),Ou(e)}function Ug(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-Fe(a),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function Ou(e){if(50<rl)throw rl=0,ed=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var pa={};function OA(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(e,i,a,l){return new OA(e,i,a,l)}function Xh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mi(e,i){var a=e.alternate;return a===null?(a=hn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Lg(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Nu(e,i,a,l,h,d){var v=0;if(l=e,typeof e=="function")Xh(e)&&(v=1);else if(typeof e=="string")v=MS(e,a,ht.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=hn(31,a,i,h),e.elementType=R,e.lanes=d,e;case X:return _s(a.children,h,d,i);case nt:v=8,h|=24;break;case W:return e=hn(12,a,i,h|2),e.elementType=W,e.lanes=d,e;case pt:return e=hn(13,a,i,h),e.elementType=pt,e.lanes=d,e;case Rt:return e=hn(19,a,i,h),e.elementType=Rt,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ft:case ot:v=10;break t;case et:v=9;break t;case Dt:v=11;break t;case M:v=14;break t;case S:v=16,l=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=hn(v,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function _s(e,i,a,l){return e=hn(7,e,l,i),e.lanes=a,e}function $h(e,i,a){return e=hn(6,e,null,i),e.lanes=a,e}function Zh(e,i,a){return i=hn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var ya=[],_a=0,Mu=null,Vu=0,Rn=[],In=0,vs=null,Vi=1,Pi="";function Es(e,i){ya[_a++]=Vu,ya[_a++]=Mu,Mu=e,Vu=i}function zg(e,i,a){Rn[In++]=Vi,Rn[In++]=Pi,Rn[In++]=vs,vs=e;var l=Vi;e=Pi;var h=32-Fe(l)-1;l&=~(1<<h),a+=1;var d=32-Fe(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Vi=1<<32-Fe(i)+h|a<<h|l,Pi=d+e}else Vi=1<<d|a<<h|l,Pi=e}function Wh(e){e.return!==null&&(Es(e,1),zg(e,1,0))}function Jh(e){for(;e===Mu;)Mu=ya[--_a],ya[_a]=null,Vu=ya[--_a],ya[_a]=null;for(;e===vs;)vs=Rn[--In],Rn[In]=null,Pi=Rn[--In],Rn[In]=null,Vi=Rn[--In],Rn[In]=null}var tn=null,oe=null,jt=!1,Ts=null,ri=!1,tf=Error(s(519));function As(e){var i=Error(s(418,""));throw ko(bn(i,e)),tf}function jg(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[ve]=e,i[de]=l,a){case"dialog":Nt("cancel",i),Nt("close",i);break;case"iframe":case"object":case"embed":Nt("load",i);break;case"video":case"audio":for(a=0;a<al.length;a++)Nt(al[a],i);break;case"source":Nt("error",i);break;case"img":case"image":case"link":Nt("error",i),Nt("load",i);break;case"details":Nt("toggle",i);break;case"input":Nt("invalid",i),as(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),na(i);break;case"select":Nt("invalid",i);break;case"textarea":Nt("invalid",i),os(i,l.value,l.defaultValue,l.children),na(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||i_(i.textContent,a)?(l.popover!=null&&(Nt("beforetoggle",i),Nt("toggle",i)),l.onScroll!=null&&Nt("scroll",i),l.onScrollEnd!=null&&Nt("scrollend",i),l.onClick!=null&&(i.onclick=dc),i=!0):i=!1,i||As(e)}function Bg(e){for(tn=e.return;tn;)switch(tn.tag){case 5:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:tn=tn.return}}function Po(e){if(e!==tn)return!1;if(!jt)return Bg(e),jt=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||yd(e.type,e.memoizedProps)),a=!a),a&&oe&&As(e),Bg(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){oe=jn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}oe=null}}else i===27?(i=oe,Ar(e.type)?(e=Td,Td=null,oe=e):oe=i):oe=tn?jn(e.stateNode.nextSibling):null;return!0}function xo(){oe=tn=null,jt=!1}function qg(){var e=Ts;return e!==null&&(rn===null?rn=e:rn.push.apply(rn,e),Ts=null),e}function ko(e){Ts===null?Ts=[e]:Ts.push(e)}var ef=$(null),Ss=null,xi=null;function or(e,i,a){J(ef,i._currentValue),i._currentValue=a}function ki(e){e._currentValue=ef.current,rt(ef)}function nf(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function rf(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var E=d;d=h;for(var b=0;b<i.length;b++)if(E.context===i[b]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),nf(d.return,a,e),l||(v=null);break t}d=E.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),nf(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function Uo(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var E=h.type;cn(h.pendingProps.value,v.value)||(e!==null?e.push(E):e=[E])}}else if(h===Ie.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(fl):e=[fl])}h=h.return}e!==null&&rf(i,e,a,l),i.flags|=262144}function Pu(e){for(e=e.firstContext;e!==null;){if(!cn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function bs(e){Ss=e,xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ge(e){return Hg(Ss,e)}function xu(e,i){return Ss===null&&bs(e),Hg(e,i)}function Hg(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},xi===null){if(e===null)throw Error(s(308));xi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else xi=xi.next=i;return a}var NA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},MA=r.unstable_scheduleCallback,VA=r.unstable_NormalPriority,Ae={$$typeof:ot,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sf(){return{controller:new NA,data:new Map,refCount:0}}function Lo(e){e.refCount--,e.refCount===0&&MA(VA,function(){e.controller.abort()})}var zo=null,af=0,va=0,Ea=null;function PA(e,i){if(zo===null){var a=zo=[];af=0,va=ld(),Ea={status:"pending",value:void 0,then:function(l){a.push(l)}}}return af++,i.then(Fg,Fg),i}function Fg(){if(--af===0&&zo!==null){Ea!==null&&(Ea.status="fulfilled");var e=zo;zo=null,va=0,Ea=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function xA(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Gg=F.S;F.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&PA(e,i),Gg!==null&&Gg(e,i)};var ws=$(null);function of(){var e=ws.current;return e!==null?e:Wt.pooledCache}function ku(e,i){i===null?J(ws,ws.current):J(ws,i.pool)}function Kg(){var e=of();return e===null?null:{parent:Ae._currentValue,pool:e}}var jo=Error(s(460)),Qg=Error(s(474)),Uu=Error(s(542)),lf={then:function(){}};function Yg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Lu(){}function Xg(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Lu,Lu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Zg(e),e;default:if(typeof i.status=="string")i.then(Lu,Lu);else{if(e=Wt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Zg(e),e}throw Bo=i,jo}}var Bo=null;function $g(){if(Bo===null)throw Error(s(459));var e=Bo;return Bo=null,e}function Zg(e){if(e===jo||e===Uu)throw Error(s(483))}var lr=!1;function uf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ur(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function cr(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ft&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Ou(e),Ug(e,null,a),i}return Du(e,l,i,a),Ou(e)}function qo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,po(e,a)}}function hf(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var ff=!1;function Ho(){if(ff){var e=Ea;if(e!==null)throw e}}function Fo(e,i,a,l){ff=!1;var h=e.updateQueue;lr=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var b=E,L=b.next;b.next=null,v===null?d=L:v.next=L,v=b;var G=e.alternate;G!==null&&(G=G.updateQueue,E=G.lastBaseUpdate,E!==v&&(E===null?G.firstBaseUpdate=L:E.next=L,G.lastBaseUpdate=b))}if(d!==null){var Q=h.baseState;v=0,G=L=b=null,E=d;do{var z=E.lane&-536870913,j=z!==E.lane;if(j?(kt&z)===z:(l&z)===z){z!==0&&z===va&&(ff=!0),G!==null&&(G=G.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var vt=e,mt=E;z=i;var Xt=a;switch(mt.tag){case 1:if(vt=mt.payload,typeof vt=="function"){Q=vt.call(Xt,Q,z);break t}Q=vt;break t;case 3:vt.flags=vt.flags&-65537|128;case 0:if(vt=mt.payload,z=typeof vt=="function"?vt.call(Xt,Q,z):vt,z==null)break t;Q=T({},Q,z);break t;case 2:lr=!0}}z=E.callback,z!==null&&(e.flags|=64,j&&(e.flags|=8192),j=h.callbacks,j===null?h.callbacks=[z]:j.push(z))}else j={lane:z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},G===null?(L=G=j,b=Q):G=G.next=j,v|=z;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;j=E,E=j.next,j.next=null,h.lastBaseUpdate=j,h.shared.pending=null}}while(!0);G===null&&(b=Q),h.baseState=b,h.firstBaseUpdate=L,h.lastBaseUpdate=G,d===null&&(h.shared.lanes=0),_r|=v,e.lanes=v,e.memoizedState=Q}}function Wg(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function Jg(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Wg(a[e],i)}var Ta=$(null),zu=$(0);function tp(e,i){e=Hi,J(zu,e),J(Ta,i),Hi=e|i.baseLanes}function df(){J(zu,Hi),J(Ta,Ta.current)}function mf(){Hi=zu.current,rt(Ta),rt(zu)}var hr=0,bt=null,Qt=null,ge=null,ju=!1,Aa=!1,Rs=!1,Bu=0,Go=0,Sa=null,kA=0;function ce(){throw Error(s(321))}function gf(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!cn(e[a],i[a]))return!1;return!0}function pf(e,i,a,l,h,d){return hr=d,bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?Up:Lp,Rs=!1,d=a(l,h),Rs=!1,Aa&&(d=np(i,a,l,h)),ep(e),d}function ep(e){F.H=Qu;var i=Qt!==null&&Qt.next!==null;if(hr=0,ge=Qt=bt=null,ju=!1,Go=0,Sa=null,i)throw Error(s(300));e===null||Oe||(e=e.dependencies,e!==null&&Pu(e)&&(Oe=!0))}function np(e,i,a,l){bt=e;var h=0;do{if(Aa&&(Sa=null),Go=0,Aa=!1,25<=h)throw Error(s(301));if(h+=1,ge=Qt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=HA,d=i(a,l)}while(Aa);return d}function UA(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?Ko(i):i,e=e.useState()[0],(Qt!==null?Qt.memoizedState:null)!==e&&(bt.flags|=1024),i}function yf(){var e=Bu!==0;return Bu=0,e}function _f(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function vf(e){if(ju){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}ju=!1}hr=0,ge=Qt=bt=null,Aa=!1,Go=Bu=0,Sa=null}function en(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?bt.memoizedState=ge=e:ge=ge.next=e,ge}function pe(){if(Qt===null){var e=bt.alternate;e=e!==null?e.memoizedState:null}else e=Qt.next;var i=ge===null?bt.memoizedState:ge.next;if(i!==null)ge=i,Qt=e;else{if(e===null)throw bt.alternate===null?Error(s(467)):Error(s(310));Qt=e,e={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},ge===null?bt.memoizedState=ge=e:ge=ge.next=e}return ge}function Ef(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ko(e){var i=Go;return Go+=1,Sa===null&&(Sa=[]),e=Xg(Sa,e,i),i=bt,(ge===null?i.memoizedState:ge.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?Up:Lp),e}function qu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ko(e);if(e.$$typeof===ot)return Ge(e)}throw Error(s(438,String(e)))}function Tf(e){var i=null,a=bt.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=bt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Ef(),bt.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=N;return i.index++,a}function Ui(e,i){return typeof i=="function"?i(e):i}function Hu(e){var i=pe();return Af(i,Qt,e)}function Af(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var E=v=null,b=null,L=i,G=!1;do{var Q=L.lane&-536870913;if(Q!==L.lane?(kt&Q)===Q:(hr&Q)===Q){var z=L.revertLane;if(z===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),Q===va&&(G=!0);else if((hr&z)===z){L=L.next,z===va&&(G=!0);continue}else Q={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},b===null?(E=b=Q,v=d):b=b.next=Q,bt.lanes|=z,_r|=z;Q=L.action,Rs&&a(d,Q),d=L.hasEagerState?L.eagerState:a(d,Q)}else z={lane:Q,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},b===null?(E=b=z,v=d):b=b.next=z,bt.lanes|=Q,_r|=Q;L=L.next}while(L!==null&&L!==i);if(b===null?v=d:b.next=E,!cn(d,e.memoizedState)&&(Oe=!0,G&&(a=Ea,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=b,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Sf(e){var i=pe(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);cn(d,i.memoizedState)||(Oe=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function ip(e,i,a){var l=bt,h=pe(),d=jt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!cn((Qt||h).memoizedState,a);v&&(h.memoizedState=a,Oe=!0),h=h.queue;var E=ap.bind(null,l,h,e);if(Qo(2048,8,E,[e]),h.getSnapshot!==i||v||ge!==null&&ge.memoizedState.tag&1){if(l.flags|=2048,ba(9,Fu(),sp.bind(null,l,h,a,i),null),Wt===null)throw Error(s(349));d||(hr&124)!==0||rp(l,i,a)}return a}function rp(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=bt.updateQueue,i===null?(i=Ef(),bt.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function sp(e,i,a,l){i.value=a,i.getSnapshot=l,op(i)&&lp(e)}function ap(e,i,a){return a(function(){op(i)&&lp(e)})}function op(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!cn(e,a)}catch{return!0}}function lp(e){var i=ga(e,2);i!==null&&pn(i,e,2)}function bf(e){var i=en();if(typeof e=="function"){var a=e;if(e=a(),Rs){ln(!0);try{a()}finally{ln(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:e},i}function up(e,i,a,l){return e.baseState=a,Af(e,Qt,typeof l=="function"?l:Ui)}function LA(e,i,a,l,h){if(Ku(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};F.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,cp(i,d)):(d.next=a.next,i.pending=a.next=d)}}function cp(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=F.T,v={};F.T=v;try{var E=a(h,l),b=F.S;b!==null&&b(v,E),hp(e,i,E)}catch(L){wf(e,i,L)}finally{F.T=d}}else try{d=a(h,l),hp(e,i,d)}catch(L){wf(e,i,L)}}function hp(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){fp(e,i,l)},function(l){return wf(e,i,l)}):fp(e,i,a)}function fp(e,i,a){i.status="fulfilled",i.value=a,dp(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,cp(e,a)))}function wf(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,dp(i),i=i.next;while(i!==l)}e.action=null}function dp(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function mp(e,i){return i}function gp(e,i){if(jt){var a=Wt.formState;if(a!==null){t:{var l=bt;if(jt){if(oe){e:{for(var h=oe,d=ri;h.nodeType!==8;){if(!d){h=null;break e}if(h=jn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){oe=jn(h.nextSibling),l=h.data==="F!";break t}}As(l)}l=!1}l&&(i=a[0])}}return a=en(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mp,lastRenderedState:i},a.queue=l,a=Pp.bind(null,bt,l),l.dispatch=a,l=bf(!1),d=Of.bind(null,bt,!1,l.queue),l=en(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=LA.bind(null,bt,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function pp(e){var i=pe();return yp(i,Qt,e)}function yp(e,i,a){if(i=Af(e,i,mp)[0],e=Hu(Ui)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Ko(i)}catch(v){throw v===jo?Uu:v}else l=i;i=pe();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(bt.flags|=2048,ba(9,Fu(),zA.bind(null,h,a),null)),[l,d,e]}function zA(e,i){e.action=i}function _p(e){var i=pe(),a=Qt;if(a!==null)return yp(i,a,e);pe(),i=i.memoizedState,a=pe();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function ba(e,i,a,l){return e={tag:e,create:a,deps:l,inst:i,next:null},i=bt.updateQueue,i===null&&(i=Ef(),bt.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function Fu(){return{destroy:void 0,resource:void 0}}function vp(){return pe().memoizedState}function Gu(e,i,a,l){var h=en();l=l===void 0?null:l,bt.flags|=e,h.memoizedState=ba(1|i,Fu(),a,l)}function Qo(e,i,a,l){var h=pe();l=l===void 0?null:l;var d=h.memoizedState.inst;Qt!==null&&l!==null&&gf(l,Qt.memoizedState.deps)?h.memoizedState=ba(i,d,a,l):(bt.flags|=e,h.memoizedState=ba(1|i,d,a,l))}function Ep(e,i){Gu(8390656,8,e,i)}function Tp(e,i){Qo(2048,8,e,i)}function Ap(e,i){return Qo(4,2,e,i)}function Sp(e,i){return Qo(4,4,e,i)}function bp(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function wp(e,i,a){a=a!=null?a.concat([e]):null,Qo(4,4,bp.bind(null,i,e),a)}function Rf(){}function Rp(e,i){var a=pe();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&gf(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function Ip(e,i){var a=pe();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&gf(i,l[1]))return l[0];if(l=e(),Rs){ln(!0);try{e()}finally{ln(!1)}}return a.memoizedState=[l,i],l}function If(e,i,a){return a===void 0||(hr&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=Oy(),bt.lanes|=e,_r|=e,a)}function Cp(e,i,a,l){return cn(a,i)?a:Ta.current!==null?(e=If(e,a,l),cn(e,i)||(Oe=!0),e):(hr&42)===0?(Oe=!0,e.memoizedState=a):(e=Oy(),bt.lanes|=e,_r|=e,i)}function Dp(e,i,a,l,h){var d=it.p;it.p=d!==0&&8>d?d:8;var v=F.T,E={};F.T=E,Of(e,!1,i,a);try{var b=h(),L=F.S;if(L!==null&&L(E,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var G=xA(b,l);Yo(e,i,G,gn(e))}else Yo(e,i,l,gn(e))}catch(Q){Yo(e,i,{then:function(){},status:"rejected",reason:Q},gn())}finally{it.p=d,F.T=v}}function jA(){}function Cf(e,i,a,l){if(e.tag!==5)throw Error(s(476));var h=Op(e).queue;Dp(e,h,i,ct,a===null?jA:function(){return Np(e),a(l)})}function Op(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ct,baseState:ct,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:ct},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Np(e){var i=Op(e).next.queue;Yo(e,i,{},gn())}function Df(){return Ge(fl)}function Mp(){return pe().memoizedState}function Vp(){return pe().memoizedState}function BA(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=gn();e=ur(a);var l=cr(i,e,a);l!==null&&(pn(l,i,a),qo(l,i,a)),i={cache:sf()},e.payload=i;return}i=i.return}}function qA(e,i,a){var l=gn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ku(e)?xp(i,a):(a=Yh(e,i,a,l),a!==null&&(pn(a,e,l),kp(a,i,l)))}function Pp(e,i,a){var l=gn();Yo(e,i,a,l)}function Yo(e,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ku(e))xp(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,E=d(v,a);if(h.hasEagerState=!0,h.eagerState=E,cn(E,v))return Du(e,i,h,0),Wt===null&&Cu(),!1}catch{}finally{}if(a=Yh(e,i,h,l),a!==null)return pn(a,e,l),kp(a,i,l),!0}return!1}function Of(e,i,a,l){if(l={lane:2,revertLane:ld(),action:l,hasEagerState:!1,eagerState:null,next:null},Ku(e)){if(i)throw Error(s(479))}else i=Yh(e,a,l,2),i!==null&&pn(i,e,2)}function Ku(e){var i=e.alternate;return e===bt||i!==null&&i===bt}function xp(e,i){Aa=ju=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function kp(e,i,a){if((a&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,po(e,a)}}var Qu={readContext:Ge,use:qu,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useLayoutEffect:ce,useInsertionEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useSyncExternalStore:ce,useId:ce,useHostTransitionStatus:ce,useFormState:ce,useActionState:ce,useOptimistic:ce,useMemoCache:ce,useCacheRefresh:ce},Up={readContext:Ge,use:qu,useCallback:function(e,i){return en().memoizedState=[e,i===void 0?null:i],e},useContext:Ge,useEffect:Ep,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Gu(4194308,4,bp.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Gu(4194308,4,e,i)},useInsertionEffect:function(e,i){Gu(4,2,e,i)},useMemo:function(e,i){var a=en();i=i===void 0?null:i;var l=e();if(Rs){ln(!0);try{e()}finally{ln(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=en();if(a!==void 0){var h=a(i);if(Rs){ln(!0);try{a(i)}finally{ln(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=qA.bind(null,bt,e),[l.memoizedState,e]},useRef:function(e){var i=en();return e={current:e},i.memoizedState=e},useState:function(e){e=bf(e);var i=e.queue,a=Pp.bind(null,bt,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Rf,useDeferredValue:function(e,i){var a=en();return If(a,e,i)},useTransition:function(){var e=bf(!1);return e=Dp.bind(null,bt,e.queue,!0,!1),en().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=bt,h=en();if(jt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Wt===null)throw Error(s(349));(kt&124)!==0||rp(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,Ep(ap.bind(null,l,d,e),[e]),l.flags|=2048,ba(9,Fu(),sp.bind(null,l,d,a,i),null),a},useId:function(){var e=en(),i=Wt.identifierPrefix;if(jt){var a=Pi,l=Vi;a=(l&~(1<<32-Fe(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Bu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=kA++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:Df,useFormState:gp,useActionState:gp,useOptimistic:function(e){var i=en();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Of.bind(null,bt,!0,a),a.dispatch=i,[e,i]},useMemoCache:Tf,useCacheRefresh:function(){return en().memoizedState=BA.bind(null,bt)}},Lp={readContext:Ge,use:qu,useCallback:Rp,useContext:Ge,useEffect:Tp,useImperativeHandle:wp,useInsertionEffect:Ap,useLayoutEffect:Sp,useMemo:Ip,useReducer:Hu,useRef:vp,useState:function(){return Hu(Ui)},useDebugValue:Rf,useDeferredValue:function(e,i){var a=pe();return Cp(a,Qt.memoizedState,e,i)},useTransition:function(){var e=Hu(Ui)[0],i=pe().memoizedState;return[typeof e=="boolean"?e:Ko(e),i]},useSyncExternalStore:ip,useId:Mp,useHostTransitionStatus:Df,useFormState:pp,useActionState:pp,useOptimistic:function(e,i){var a=pe();return up(a,Qt,e,i)},useMemoCache:Tf,useCacheRefresh:Vp},HA={readContext:Ge,use:qu,useCallback:Rp,useContext:Ge,useEffect:Tp,useImperativeHandle:wp,useInsertionEffect:Ap,useLayoutEffect:Sp,useMemo:Ip,useReducer:Sf,useRef:vp,useState:function(){return Sf(Ui)},useDebugValue:Rf,useDeferredValue:function(e,i){var a=pe();return Qt===null?If(a,e,i):Cp(a,Qt.memoizedState,e,i)},useTransition:function(){var e=Sf(Ui)[0],i=pe().memoizedState;return[typeof e=="boolean"?e:Ko(e),i]},useSyncExternalStore:ip,useId:Mp,useHostTransitionStatus:Df,useFormState:_p,useActionState:_p,useOptimistic:function(e,i){var a=pe();return Qt!==null?up(a,Qt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Tf,useCacheRefresh:Vp},wa=null,Xo=0;function Yu(e){var i=Xo;return Xo+=1,wa===null&&(wa=[]),Xg(wa,e,i)}function $o(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Xu(e,i){throw i.$$typeof===w?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function zp(e){var i=e._init;return i(e._payload)}function jp(e){function i(P,O){if(e){var U=P.deletions;U===null?(P.deletions=[O],P.flags|=16):U.push(O)}}function a(P,O){if(!e)return null;for(;O!==null;)i(P,O),O=O.sibling;return null}function l(P){for(var O=new Map;P!==null;)P.key!==null?O.set(P.key,P):O.set(P.index,P),P=P.sibling;return O}function h(P,O){return P=Mi(P,O),P.index=0,P.sibling=null,P}function d(P,O,U){return P.index=U,e?(U=P.alternate,U!==null?(U=U.index,U<O?(P.flags|=67108866,O):U):(P.flags|=67108866,O)):(P.flags|=1048576,O)}function v(P){return e&&P.alternate===null&&(P.flags|=67108866),P}function E(P,O,U,K){return O===null||O.tag!==6?(O=$h(U,P.mode,K),O.return=P,O):(O=h(O,U),O.return=P,O)}function b(P,O,U,K){var at=U.type;return at===X?G(P,O,U.props.children,K,U.key):O!==null&&(O.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===S&&zp(at)===O.type)?(O=h(O,U.props),$o(O,U),O.return=P,O):(O=Nu(U.type,U.key,U.props,null,P.mode,K),$o(O,U),O.return=P,O)}function L(P,O,U,K){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=Zh(U,P.mode,K),O.return=P,O):(O=h(O,U.children||[]),O.return=P,O)}function G(P,O,U,K,at){return O===null||O.tag!==7?(O=_s(U,P.mode,K,at),O.return=P,O):(O=h(O,U),O.return=P,O)}function Q(P,O,U){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=$h(""+O,P.mode,U),O.return=P,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case C:return U=Nu(O.type,O.key,O.props,null,P.mode,U),$o(U,O),U.return=P,U;case B:return O=Zh(O,P.mode,U),O.return=P,O;case S:var K=O._init;return O=K(O._payload),Q(P,O,U)}if(se(O)||x(O))return O=_s(O,P.mode,U,null),O.return=P,O;if(typeof O.then=="function")return Q(P,Yu(O),U);if(O.$$typeof===ot)return Q(P,xu(P,O),U);Xu(P,O)}return null}function z(P,O,U,K){var at=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return at!==null?null:E(P,O,""+U,K);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case C:return U.key===at?b(P,O,U,K):null;case B:return U.key===at?L(P,O,U,K):null;case S:return at=U._init,U=at(U._payload),z(P,O,U,K)}if(se(U)||x(U))return at!==null?null:G(P,O,U,K,null);if(typeof U.then=="function")return z(P,O,Yu(U),K);if(U.$$typeof===ot)return z(P,O,xu(P,U),K);Xu(P,U)}return null}function j(P,O,U,K,at){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return P=P.get(U)||null,E(O,P,""+K,at);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case C:return P=P.get(K.key===null?U:K.key)||null,b(O,P,K,at);case B:return P=P.get(K.key===null?U:K.key)||null,L(O,P,K,at);case S:var Ct=K._init;return K=Ct(K._payload),j(P,O,U,K,at)}if(se(K)||x(K))return P=P.get(U)||null,G(O,P,K,at,null);if(typeof K.then=="function")return j(P,O,U,Yu(K),at);if(K.$$typeof===ot)return j(P,O,U,xu(O,K),at);Xu(O,K)}return null}function vt(P,O,U,K){for(var at=null,Ct=null,lt=O,gt=O=0,Me=null;lt!==null&&gt<U.length;gt++){lt.index>gt?(Me=lt,lt=null):Me=lt.sibling;var Lt=z(P,lt,U[gt],K);if(Lt===null){lt===null&&(lt=Me);break}e&&lt&&Lt.alternate===null&&i(P,lt),O=d(Lt,O,gt),Ct===null?at=Lt:Ct.sibling=Lt,Ct=Lt,lt=Me}if(gt===U.length)return a(P,lt),jt&&Es(P,gt),at;if(lt===null){for(;gt<U.length;gt++)lt=Q(P,U[gt],K),lt!==null&&(O=d(lt,O,gt),Ct===null?at=lt:Ct.sibling=lt,Ct=lt);return jt&&Es(P,gt),at}for(lt=l(lt);gt<U.length;gt++)Me=j(lt,P,gt,U[gt],K),Me!==null&&(e&&Me.alternate!==null&&lt.delete(Me.key===null?gt:Me.key),O=d(Me,O,gt),Ct===null?at=Me:Ct.sibling=Me,Ct=Me);return e&&lt.forEach(function(Ir){return i(P,Ir)}),jt&&Es(P,gt),at}function mt(P,O,U,K){if(U==null)throw Error(s(151));for(var at=null,Ct=null,lt=O,gt=O=0,Me=null,Lt=U.next();lt!==null&&!Lt.done;gt++,Lt=U.next()){lt.index>gt?(Me=lt,lt=null):Me=lt.sibling;var Ir=z(P,lt,Lt.value,K);if(Ir===null){lt===null&&(lt=Me);break}e&&lt&&Ir.alternate===null&&i(P,lt),O=d(Ir,O,gt),Ct===null?at=Ir:Ct.sibling=Ir,Ct=Ir,lt=Me}if(Lt.done)return a(P,lt),jt&&Es(P,gt),at;if(lt===null){for(;!Lt.done;gt++,Lt=U.next())Lt=Q(P,Lt.value,K),Lt!==null&&(O=d(Lt,O,gt),Ct===null?at=Lt:Ct.sibling=Lt,Ct=Lt);return jt&&Es(P,gt),at}for(lt=l(lt);!Lt.done;gt++,Lt=U.next())Lt=j(lt,P,gt,Lt.value,K),Lt!==null&&(e&&Lt.alternate!==null&&lt.delete(Lt.key===null?gt:Lt.key),O=d(Lt,O,gt),Ct===null?at=Lt:Ct.sibling=Lt,Ct=Lt);return e&&lt.forEach(function(FS){return i(P,FS)}),jt&&Es(P,gt),at}function Xt(P,O,U,K){if(typeof U=="object"&&U!==null&&U.type===X&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case C:t:{for(var at=U.key;O!==null;){if(O.key===at){if(at=U.type,at===X){if(O.tag===7){a(P,O.sibling),K=h(O,U.props.children),K.return=P,P=K;break t}}else if(O.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===S&&zp(at)===O.type){a(P,O.sibling),K=h(O,U.props),$o(K,U),K.return=P,P=K;break t}a(P,O);break}else i(P,O);O=O.sibling}U.type===X?(K=_s(U.props.children,P.mode,K,U.key),K.return=P,P=K):(K=Nu(U.type,U.key,U.props,null,P.mode,K),$o(K,U),K.return=P,P=K)}return v(P);case B:t:{for(at=U.key;O!==null;){if(O.key===at)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){a(P,O.sibling),K=h(O,U.children||[]),K.return=P,P=K;break t}else{a(P,O);break}else i(P,O);O=O.sibling}K=Zh(U,P.mode,K),K.return=P,P=K}return v(P);case S:return at=U._init,U=at(U._payload),Xt(P,O,U,K)}if(se(U))return vt(P,O,U,K);if(x(U)){if(at=x(U),typeof at!="function")throw Error(s(150));return U=at.call(U),mt(P,O,U,K)}if(typeof U.then=="function")return Xt(P,O,Yu(U),K);if(U.$$typeof===ot)return Xt(P,O,xu(P,U),K);Xu(P,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,O!==null&&O.tag===6?(a(P,O.sibling),K=h(O,U),K.return=P,P=K):(a(P,O),K=$h(U,P.mode,K),K.return=P,P=K),v(P)):a(P,O)}return function(P,O,U,K){try{Xo=0;var at=Xt(P,O,U,K);return wa=null,at}catch(lt){if(lt===jo||lt===Uu)throw lt;var Ct=hn(29,lt,null,P.mode);return Ct.lanes=K,Ct.return=P,Ct}finally{}}}var Ra=jp(!0),Bp=jp(!1),Cn=$(null),si=null;function fr(e){var i=e.alternate;J(Se,Se.current&1),J(Cn,e),si===null&&(i===null||Ta.current!==null||i.memoizedState!==null)&&(si=e)}function qp(e){if(e.tag===22){if(J(Se,Se.current),J(Cn,e),si===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(si=e)}}else dr()}function dr(){J(Se,Se.current),J(Cn,Cn.current)}function Li(e){rt(Cn),si===e&&(si=null),rt(Se)}var Se=$(0);function $u(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Ed(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Nf(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:T({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Mf={enqueueSetState:function(e,i,a){e=e._reactInternals;var l=gn(),h=ur(l);h.payload=i,a!=null&&(h.callback=a),i=cr(e,h,l),i!==null&&(pn(i,e,l),qo(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=gn(),h=ur(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=cr(e,h,l),i!==null&&(pn(i,e,l),qo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=gn(),l=ur(a);l.tag=2,i!=null&&(l.callback=i),i=cr(e,l,a),i!==null&&(pn(i,e,a),qo(i,e,a))}};function Hp(e,i,a,l,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!Mo(a,l)||!Mo(h,d):!0}function Fp(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&Mf.enqueueReplaceState(i,i.state,null)}function Is(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=T({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Zu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Gp(e){Zu(e)}function Kp(e){console.error(e)}function Qp(e){Zu(e)}function Wu(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Yp(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Vf(e,i,a){return a=ur(a),a.tag=3,a.payload={element:null},a.callback=function(){Wu(e,i)},a}function Xp(e){return e=ur(e),e.tag=3,e}function $p(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){Yp(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Yp(i,a,l),typeof h!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function FA(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Uo(i,a,h,!0),a=Cn.current,a!==null){switch(a.tag){case 13:return si===null?id():a.alternate===null&&le===0&&(le=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===lf?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),sd(e,l,h)),!1;case 22:return a.flags|=65536,l===lf?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),sd(e,l,h)),!1}throw Error(s(435,a.tag))}return sd(e,l,h),id(),!1}if(jt)return i=Cn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==tf&&(e=Error(s(422),{cause:l}),ko(bn(e,a)))):(l!==tf&&(i=Error(s(423),{cause:l}),ko(bn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=bn(l,a),h=Vf(e.stateNode,l,h),hf(e,h),le!==4&&(le=2)),!1;var d=Error(s(520),{cause:l});if(d=bn(d,a),il===null?il=[d]:il.push(d),le!==4&&(le=2),i===null)return!0;l=bn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=Vf(a.stateNode,l,e),hf(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(vr===null||!vr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Xp(h),$p(h,e,a,l),hf(a,h),!1}a=a.return}while(a!==null);return!1}var Zp=Error(s(461)),Oe=!1;function Le(e,i,a,l){i.child=e===null?Bp(i,null,a,l):Ra(i,e.child,a,l)}function Wp(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var E in l)E!=="ref"&&(v[E]=l[E])}else v=l;return bs(i),l=pf(e,i,a,v,d,h),E=yf(),e!==null&&!Oe?(_f(e,i,h),zi(e,i,h)):(jt&&E&&Wh(i),i.flags|=1,Le(e,i,l,h),i.child)}function Jp(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!Xh(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,ty(e,i,d,l,h)):(e=Nu(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Bf(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Mo,a(v,l)&&e.ref===i.ref)return zi(e,i,h)}return i.flags|=1,e=Mi(d,l),e.ref=i.ref,e.return=i,i.child=e}function ty(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(Mo(d,l)&&e.ref===i.ref)if(Oe=!1,i.pendingProps=l=d,Bf(e,h))(e.flags&131072)!==0&&(Oe=!0);else return i.lanes=e.lanes,zi(e,i,h)}return Pf(e,i,a,l,h)}function ey(e,i,a){var l=i.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return ny(e,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&ku(i,d!==null?d.cachePool:null),d!==null?tp(i,d):df(),qp(i);else return i.lanes=i.childLanes=536870912,ny(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(ku(i,d.cachePool),tp(i,d),dr(),i.memoizedState=null):(e!==null&&ku(i,null),df(),dr());return Le(e,i,h,a),i.child}function ny(e,i,a,l){var h=of();return h=h===null?null:{parent:Ae._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&ku(i,null),df(),qp(i),e!==null&&Uo(e,i,l,!0),null}function Ju(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Pf(e,i,a,l,h){return bs(i),a=pf(e,i,a,l,void 0,h),l=yf(),e!==null&&!Oe?(_f(e,i,h),zi(e,i,h)):(jt&&l&&Wh(i),i.flags|=1,Le(e,i,a,h),i.child)}function iy(e,i,a,l,h,d){return bs(i),i.updateQueue=null,a=np(i,l,a,h),ep(e),l=yf(),e!==null&&!Oe?(_f(e,i,d),zi(e,i,d)):(jt&&l&&Wh(i),i.flags|=1,Le(e,i,a,d),i.child)}function ry(e,i,a,l,h){if(bs(i),i.stateNode===null){var d=pa,v=a.contextType;typeof v=="object"&&v!==null&&(d=Ge(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Mf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},uf(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Ge(v):pa,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Nf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Mf.enqueueReplaceState(d,d.state,null),Fo(i,l,d,h),Ho(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var E=i.memoizedProps,b=Is(a,E);d.props=b;var L=d.context,G=a.contextType;v=pa,typeof G=="object"&&G!==null&&(v=Ge(G));var Q=a.getDerivedStateFromProps;G=typeof Q=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,G||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||L!==v)&&Fp(i,d,l,v),lr=!1;var z=i.memoizedState;d.state=z,Fo(i,l,d,h),Ho(),L=i.memoizedState,E||z!==L||lr?(typeof Q=="function"&&(Nf(i,a,Q,l),L=i.memoizedState),(b=lr||Hp(i,a,b,l,z,L,v))?(G||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=L),d.props=l,d.state=L,d.context=v,l=b):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,cf(e,i),v=i.memoizedProps,G=Is(a,v),d.props=G,Q=i.pendingProps,z=d.context,L=a.contextType,b=pa,typeof L=="object"&&L!==null&&(b=Ge(L)),E=a.getDerivedStateFromProps,(L=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==Q||z!==b)&&Fp(i,d,l,b),lr=!1,z=i.memoizedState,d.state=z,Fo(i,l,d,h),Ho();var j=i.memoizedState;v!==Q||z!==j||lr||e!==null&&e.dependencies!==null&&Pu(e.dependencies)?(typeof E=="function"&&(Nf(i,a,E,l),j=i.memoizedState),(G=lr||Hp(i,a,G,l,z,j,b)||e!==null&&e.dependencies!==null&&Pu(e.dependencies))?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,j,b),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,j,b)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=j),d.props=l,d.state=j,d.context=b,l=G):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Ju(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Ra(i,e.child,null,h),i.child=Ra(i,null,a,h)):Le(e,i,a,h),i.memoizedState=d.state,e=i.child):e=zi(e,i,h),e}function sy(e,i,a,l){return xo(),i.flags|=256,Le(e,i,a,l),i.child}var xf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kf(e){return{baseLanes:e,cachePool:Kg()}}function Uf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Dn),e}function ay(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Se.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(jt){if(h?fr(i):dr(),jt){var E=oe,b;if(b=E){t:{for(b=E,E=ri;b.nodeType!==8;){if(!E){E=null;break t}if(b=jn(b.nextSibling),b===null){E=null;break t}}E=b}E!==null?(i.memoizedState={dehydrated:E,treeContext:vs!==null?{id:Vi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},b=hn(18,null,null,0),b.stateNode=E,b.return=i,i.child=b,tn=i,oe=null,b=!0):b=!1}b||As(i)}if(E=i.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Ed(E)?i.lanes=32:i.lanes=536870912,null;Li(i)}return E=l.children,l=l.fallback,h?(dr(),h=i.mode,E=tc({mode:"hidden",children:E},h),l=_s(l,h,a,null),E.return=i,l.return=i,E.sibling=l,i.child=E,h=i.child,h.memoizedState=kf(a),h.childLanes=Uf(e,v,a),i.memoizedState=xf,l):(fr(i),Lf(i,E))}if(b=e.memoizedState,b!==null&&(E=b.dehydrated,E!==null)){if(d)i.flags&256?(fr(i),i.flags&=-257,i=zf(e,i,a)):i.memoizedState!==null?(dr(),i.child=e.child,i.flags|=128,i=null):(dr(),h=l.fallback,E=i.mode,l=tc({mode:"visible",children:l.children},E),h=_s(h,E,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Ra(i,e.child,null,a),l=i.child,l.memoizedState=kf(a),l.childLanes=Uf(e,v,a),i.memoizedState=xf,i=h);else if(fr(i),Ed(E)){if(v=E.nextSibling&&E.nextSibling.dataset,v)var L=v.dgst;v=L,l=Error(s(419)),l.stack="",l.digest=v,ko({value:l,source:null,stack:null}),i=zf(e,i,a)}else if(Oe||Uo(e,i,a,!1),v=(a&e.childLanes)!==0,Oe||v){if(v=Wt,v!==null&&(l=a&-a,l=(l&42)!==0?1:tr(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==b.retryLane))throw b.retryLane=l,ga(e,l),pn(v,e,l),Zp;E.data==="$?"||id(),i=zf(e,i,a)}else E.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=b.treeContext,oe=jn(E.nextSibling),tn=i,jt=!0,Ts=null,ri=!1,e!==null&&(Rn[In++]=Vi,Rn[In++]=Pi,Rn[In++]=vs,Vi=e.id,Pi=e.overflow,vs=i),i=Lf(i,l.children),i.flags|=4096);return i}return h?(dr(),h=l.fallback,E=i.mode,b=e.child,L=b.sibling,l=Mi(b,{mode:"hidden",children:l.children}),l.subtreeFlags=b.subtreeFlags&65011712,L!==null?h=Mi(L,h):(h=_s(h,E,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=e.child.memoizedState,E===null?E=kf(a):(b=E.cachePool,b!==null?(L=Ae._currentValue,b=b.parent!==L?{parent:L,pool:L}:b):b=Kg(),E={baseLanes:E.baseLanes|a,cachePool:b}),h.memoizedState=E,h.childLanes=Uf(e,v,a),i.memoizedState=xf,l):(fr(i),a=e.child,e=a.sibling,a=Mi(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function Lf(e,i){return i=tc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function tc(e,i){return e=hn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function zf(e,i,a){return Ra(i,e.child,null,a),e=Lf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function oy(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),nf(e.return,i,a)}function jf(e,i,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function ly(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Le(e,i,l.children,a),l=Se.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oy(e,a,i);else if(e.tag===19)oy(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(J(Se,l),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&$u(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),jf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&$u(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}jf(i,!0,a,null,d);break;case"together":jf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function zi(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),_r|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(Uo(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Mi(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Mi(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Bf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Pu(e)))}function GA(e,i,a){switch(i.tag){case 3:Zt(i,i.stateNode.containerInfo),or(i,Ae,e.memoizedState.cache),xo();break;case 27:case 5:Ji(i);break;case 4:Zt(i,i.stateNode.containerInfo);break;case 10:or(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(fr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?ay(e,i,a):(fr(i),e=zi(e,i,a),e!==null?e.sibling:null);fr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Uo(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return ly(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),J(Se,Se.current),l)break;return null;case 22:case 23:return i.lanes=0,ey(e,i,a);case 24:or(i,Ae,e.memoizedState.cache)}return zi(e,i,a)}function uy(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Oe=!0;else{if(!Bf(e,a)&&(i.flags&128)===0)return Oe=!1,GA(e,i,a);Oe=(e.flags&131072)!==0}else Oe=!1,jt&&(i.flags&1048576)!==0&&zg(i,Vu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Xh(l)?(e=Is(l,e),i.tag=1,i=ry(null,i,l,e,a)):(i.tag=0,i=Pf(null,i,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===Dt){i.tag=11,i=Wp(null,i,l,e,a);break t}else if(h===M){i.tag=14,i=Jp(null,i,l,e,a);break t}}throw i=xe(l)||l,Error(s(306,i,""))}}return i;case 0:return Pf(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Is(l,i.pendingProps),ry(e,i,l,h,a);case 3:t:{if(Zt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,cf(e,i),Fo(i,l,null,a);var v=i.memoizedState;if(l=v.cache,or(i,Ae,l),l!==d.cache&&rf(i,[Ae],a,!0),Ho(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=sy(e,i,l,a);break t}else if(l!==h){h=bn(Error(s(424)),i),ko(h),i=sy(e,i,l,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(oe=jn(e.firstChild),tn=i,jt=!0,Ts=null,ri=!0,a=Bp(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(xo(),l===h){i=zi(e,i,a);break t}Le(e,i,l,a)}i=i.child}return i;case 26:return Ju(e,i),e===null?(a=d_(i.type,null,i.pendingProps,null))?i.memoizedState=a:jt||(a=i.type,e=i.pendingProps,l=mc(Et.current).createElement(a),l[ve]=i,l[de]=e,je(l,a,e),ue(l),i.stateNode=l):i.memoizedState=d_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Ji(i),e===null&&jt&&(l=i.stateNode=c_(i.type,i.pendingProps,Et.current),tn=i,ri=!0,h=oe,Ar(i.type)?(Td=h,oe=jn(l.firstChild)):oe=h),Le(e,i,i.pendingProps.children,a),Ju(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&jt&&((h=l=oe)&&(l=vS(l,i.type,i.pendingProps,ri),l!==null?(i.stateNode=l,tn=i,oe=jn(l.firstChild),ri=!1,h=!0):h=!1),h||As(i)),Ji(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,yd(h,d)?l=null:v!==null&&yd(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=pf(e,i,UA,null,null,a),fl._currentValue=h),Ju(e,i),Le(e,i,l,a),i.child;case 6:return e===null&&jt&&((e=a=oe)&&(a=ES(a,i.pendingProps,ri),a!==null?(i.stateNode=a,tn=i,oe=null,e=!0):e=!1),e||As(i)),null;case 13:return ay(e,i,a);case 4:return Zt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Ra(i,null,l,a):Le(e,i,l,a),i.child;case 11:return Wp(e,i,i.type,i.pendingProps,a);case 7:return Le(e,i,i.pendingProps,a),i.child;case 8:return Le(e,i,i.pendingProps.children,a),i.child;case 12:return Le(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,or(i,i.type,l.value),Le(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,bs(i),h=Ge(h),l=l(h),i.flags|=1,Le(e,i,l,a),i.child;case 14:return Jp(e,i,i.type,i.pendingProps,a);case 15:return ty(e,i,i.type,i.pendingProps,a);case 19:return ly(e,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},e===null?(a=tc(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Mi(e.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return ey(e,i,a);case 24:return bs(i),l=Ge(Ae),e===null?(h=of(),h===null&&(h=Wt,d=sf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},uf(i),or(i,Ae,h)):((e.lanes&a)!==0&&(cf(e,i),Fo(i,null,null,a),Ho()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),or(i,Ae,l)):(l=d.cache,or(i,Ae,l),l!==h.cache&&rf(i,[Ae],a,!0))),Le(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function ji(e){e.flags|=4}function cy(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!__(i)){if(i=Cn.current,i!==null&&((kt&4194048)===kt?si!==null:(kt&62914560)!==kt&&(kt&536870912)===0||i!==si))throw Bo=lf,Qg;e.flags|=8192}}function ec(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?mo():536870912,e.lanes|=i,Oa|=i)}function Zo(e,i){if(!jt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ne(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function KA(e,i,a){var l=i.pendingProps;switch(Jh(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(i),null;case 1:return ne(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ki(Ae),Kn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Po(i)?ji(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,qg())),ne(i),null;case 26:return a=i.memoizedState,e===null?(ji(i),a!==null?(ne(i),cy(i,a)):(ne(i),i.flags&=-16777217)):a?a!==e.memoizedState?(ji(i),ne(i),cy(i,a)):(ne(i),i.flags&=-16777217):(e.memoizedProps!==l&&ji(i),ne(i),i.flags&=-16777217),null;case 27:vi(i),a=Et.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ji(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ne(i),null}e=ht.current,Po(i)?jg(i):(e=c_(h,l,a),i.stateNode=e,ji(i))}return ne(i),null;case 5:if(vi(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ji(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ne(i),null}if(e=ht.current,Po(i))jg(i);else{switch(h=mc(Et.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[ve]=i,e[de]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(je(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ji(i)}}return ne(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&ji(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=Et.current,Po(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=tn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[ve]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||i_(e.nodeValue,a)),e||As(i)}else e=mc(e).createTextNode(l),e[ve]=i,i.stateNode=e}return ne(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Po(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[ve]=i}else xo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ne(i),h=!1}else h=qg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Li(i),i):(Li(i),null)}if(Li(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),ec(i,i.updateQueue),ne(i),null;case 4:return Kn(),e===null&&fd(i.stateNode.containerInfo),ne(i),null;case 10:return ki(i.type),ne(i),null;case 19:if(rt(Se),h=i.memoizedState,h===null)return ne(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)Zo(h,!1);else{if(le!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=$u(e),d!==null){for(i.flags|=128,Zo(h,!1),e=d.updateQueue,i.updateQueue=e,ec(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Lg(a,e),a=a.sibling;return J(Se,Se.current&1|2),i.child}e=e.sibling}h.tail!==null&&_n()>rc&&(i.flags|=128,l=!0,Zo(h,!1),i.lanes=4194304)}else{if(!l)if(e=$u(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,ec(i,e),Zo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!jt)return ne(i),null}else 2*_n()-h.renderingStartTime>rc&&a!==536870912&&(i.flags|=128,l=!0,Zo(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=_n(),i.sibling=null,e=Se.current,J(Se,l?e&1|2:e&1),i):(ne(i),null);case 22:case 23:return Li(i),mf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ne(i),i.subtreeFlags&6&&(i.flags|=8192)):ne(i),a=i.updateQueue,a!==null&&ec(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&rt(ws),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ki(Ae),ne(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function QA(e,i){switch(Jh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ki(Ae),Kn(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return vi(i),null;case 13:if(Li(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));xo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return rt(Se),null;case 4:return Kn(),null;case 10:return ki(i.type),null;case 22:case 23:return Li(i),mf(),e!==null&&rt(ws),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ki(Ae),null;case 25:return null;default:return null}}function hy(e,i){switch(Jh(i),i.tag){case 3:ki(Ae),Kn();break;case 26:case 27:case 5:vi(i);break;case 4:Kn();break;case 13:Li(i);break;case 19:rt(Se);break;case 10:ki(i.type);break;case 22:case 23:Li(i),mf(),e!==null&&rt(ws);break;case 24:ki(Ae)}}function Wo(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(E){$t(i,i.return,E)}}function mr(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var v=l.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,h=i;var b=a,L=E;try{L()}catch(G){$t(h,b,G)}}}l=l.next}while(l!==d)}}catch(G){$t(i,i.return,G)}}function fy(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Jg(i,a)}catch(l){$t(e,e.return,l)}}}function dy(e,i,a){a.props=Is(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){$t(e,i,l)}}function Jo(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(h){$t(e,i,h)}}function ai(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){$t(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){$t(e,i,h)}else a.current=null}function my(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){$t(e,e.return,h)}}function qf(e,i,a){try{var l=e.stateNode;mS(l,e.type,a,i),l[de]=i}catch(h){$t(e,e.return,h)}}function gy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ar(e.type)||e.tag===4}function Hf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||gy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ar(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ff(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=dc));else if(l!==4&&(l===27&&Ar(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Ff(e,i,a),e=e.sibling;e!==null;)Ff(e,i,a),e=e.sibling}function nc(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&(l===27&&Ar(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(nc(e,i,a),e=e.sibling;e!==null;)nc(e,i,a),e=e.sibling}function py(e){var i=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);je(i,l,a),i[ve]=e,i[de]=a}catch(d){$t(e,e.return,d)}}var Bi=!1,he=!1,Gf=!1,yy=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function YA(e,i){if(e=e.containerInfo,gd=Ec,e=Cg(e),qh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,E=-1,b=-1,L=0,G=0,Q=e,z=null;e:for(;;){for(var j;Q!==a||h!==0&&Q.nodeType!==3||(E=v+h),Q!==d||l!==0&&Q.nodeType!==3||(b=v+l),Q.nodeType===3&&(v+=Q.nodeValue.length),(j=Q.firstChild)!==null;)z=Q,Q=j;for(;;){if(Q===e)break e;if(z===a&&++L===h&&(E=v),z===d&&++G===l&&(b=v),(j=Q.nextSibling)!==null)break;Q=z,z=Q.parentNode}Q=j}a=E===-1||b===-1?null:{start:E,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(pd={focusedElem:e,selectionRange:a},Ec=!1,Ne=i;Ne!==null;)if(i=Ne,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Ne=e;else for(;Ne!==null;){switch(i=Ne,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var vt=Is(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(vt,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(mt){$t(a,a.return,mt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)vd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Ne=e;break}Ne=i.return}}function _y(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:gr(e,a),l&4&&Wo(5,a);break;case 1:if(gr(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){$t(a,a.return,v)}else{var h=Is(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){$t(a,a.return,v)}}l&64&&fy(a),l&512&&Jo(a,a.return);break;case 3:if(gr(e,a),l&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Jg(e,i)}catch(v){$t(a,a.return,v)}}break;case 27:i===null&&l&4&&py(a);case 26:case 5:gr(e,a),i===null&&l&4&&my(a),l&512&&Jo(a,a.return);break;case 12:gr(e,a);break;case 13:gr(e,a),l&4&&Ty(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=iS.bind(null,a),TS(e,a))));break;case 22:if(l=a.memoizedState!==null||Bi,!l){i=i!==null&&i.memoizedState!==null||he,h=Bi;var d=he;Bi=l,(he=i)&&!d?pr(e,a,(a.subtreeFlags&8772)!==0):gr(e,a),Bi=h,he=d}break;case 30:break;default:gr(e,a)}}function vy(e){var i=e.alternate;i!==null&&(e.alternate=null,vy(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ir(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ee=null,nn=!1;function qi(e,i,a){for(a=a.child;a!==null;)Ey(e,i,a),a=a.sibling}function Ey(e,i,a){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(ae,a)}catch{}switch(a.tag){case 26:he||ai(a,i),qi(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:he||ai(a,i);var l=ee,h=nn;Ar(a.type)&&(ee=a.stateNode,nn=!1),qi(e,i,a),ll(a.stateNode),ee=l,nn=h;break;case 5:he||ai(a,i);case 6:if(l=ee,h=nn,ee=null,qi(e,i,a),ee=l,nn=h,ee!==null)if(nn)try{(ee.nodeType===9?ee.body:ee.nodeName==="HTML"?ee.ownerDocument.body:ee).removeChild(a.stateNode)}catch(d){$t(a,i,d)}else try{ee.removeChild(a.stateNode)}catch(d){$t(a,i,d)}break;case 18:ee!==null&&(nn?(e=ee,l_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),pl(e)):l_(ee,a.stateNode));break;case 4:l=ee,h=nn,ee=a.stateNode.containerInfo,nn=!0,qi(e,i,a),ee=l,nn=h;break;case 0:case 11:case 14:case 15:he||mr(2,a,i),he||mr(4,a,i),qi(e,i,a);break;case 1:he||(ai(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&dy(a,i,l)),qi(e,i,a);break;case 21:qi(e,i,a);break;case 22:he=(l=he)||a.memoizedState!==null,qi(e,i,a),he=l;break;default:qi(e,i,a)}}function Ty(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pl(e)}catch(a){$t(i,i.return,a)}}function XA(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new yy),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new yy),i;default:throw Error(s(435,e.tag))}}function Kf(e,i){var a=XA(e);i.forEach(function(l){var h=rS.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function fn(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,v=i,E=v;t:for(;E!==null;){switch(E.tag){case 27:if(Ar(E.type)){ee=E.stateNode,nn=!1;break t}break;case 5:ee=E.stateNode,nn=!1;break t;case 3:case 4:ee=E.stateNode.containerInfo,nn=!0;break t}E=E.return}if(ee===null)throw Error(s(160));Ey(d,v,h),ee=null,nn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Ay(i,e),i=i.sibling}var zn=null;function Ay(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:fn(i,e),dn(e),l&4&&(mr(3,e,e.return),Wo(3,e),mr(5,e,e.return));break;case 1:fn(i,e),dn(e),l&512&&(he||a===null||ai(a,a.return)),l&64&&Bi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=zn;if(fn(i,e),dn(e),l&512&&(he||a===null||ai(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[ns]||d[ve]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),je(d,l,a),d[ve]=e,ue(d),l=d;break t;case"link":var v=p_("link","href",h).get(l+(a.href||""));if(v){for(var E=0;E<v.length;E++)if(d=v[E],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(E,1);break e}}d=h.createElement(l),je(d,l,a),h.head.appendChild(d);break;case"meta":if(v=p_("meta","content",h).get(l+(a.content||""))){for(E=0;E<v.length;E++)if(d=v[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(E,1);break e}}d=h.createElement(l),je(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[ve]=e,ue(d),l=d}e.stateNode=l}else y_(h,e.type,e.stateNode);else e.stateNode=g_(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?y_(h,e.type,e.stateNode):g_(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&qf(e,e.memoizedProps,a.memoizedProps)}break;case 27:fn(i,e),dn(e),l&512&&(he||a===null||ai(a,a.return)),a!==null&&l&4&&qf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(fn(i,e),dn(e),l&512&&(he||a===null||ai(a,a.return)),e.flags&32){h=e.stateNode;try{En(h,"")}catch(j){$t(e,e.return,j)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,qf(e,h,a!==null?a.memoizedProps:h)),l&1024&&(Gf=!0);break;case 6:if(fn(i,e),dn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(j){$t(e,e.return,j)}}break;case 3:if(yc=null,h=zn,zn=gc(i.containerInfo),fn(i,e),zn=h,dn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{pl(i.containerInfo)}catch(j){$t(e,e.return,j)}Gf&&(Gf=!1,Sy(e));break;case 4:l=zn,zn=gc(e.stateNode.containerInfo),fn(i,e),dn(e),zn=l;break;case 12:fn(i,e),dn(e);break;case 13:fn(i,e),dn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wf=_n()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Kf(e,l)));break;case 22:h=e.memoizedState!==null;var b=a!==null&&a.memoizedState!==null,L=Bi,G=he;if(Bi=L||h,he=G||b,fn(i,e),he=G,Bi=L,dn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||b||Bi||he||Cs(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){b=a=i;try{if(d=b.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{E=b.stateNode;var Q=b.memoizedProps.style,z=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;E.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(j){$t(b,b.return,j)}}}else if(i.tag===6){if(a===null){b=i;try{b.stateNode.nodeValue=h?"":b.memoizedProps}catch(j){$t(b,b.return,j)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Kf(e,a))));break;case 19:fn(i,e),dn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Kf(e,l)));break;case 30:break;case 21:break;default:fn(i,e),dn(e)}}function dn(e){var i=e.flags;if(i&2){try{for(var a,l=e.return;l!==null;){if(gy(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Hf(e);nc(e,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(En(v,""),a.flags&=-33);var E=Hf(e);nc(e,E,v);break;case 3:case 4:var b=a.stateNode.containerInfo,L=Hf(e);Ff(e,L,b);break;default:throw Error(s(161))}}catch(G){$t(e,e.return,G)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Sy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Sy(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function gr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)_y(e,i.alternate,i),i=i.sibling}function Cs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:mr(4,i,i.return),Cs(i);break;case 1:ai(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&dy(i,i.return,a),Cs(i);break;case 27:ll(i.stateNode);case 26:case 5:ai(i,i.return),Cs(i);break;case 22:i.memoizedState===null&&Cs(i);break;case 30:Cs(i);break;default:Cs(i)}e=e.sibling}}function pr(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:pr(h,d,a),Wo(4,d);break;case 1:if(pr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(L){$t(l,l.return,L)}if(l=d,h=l.updateQueue,h!==null){var E=l.stateNode;try{var b=h.shared.hiddenCallbacks;if(b!==null)for(h.shared.hiddenCallbacks=null,h=0;h<b.length;h++)Wg(b[h],E)}catch(L){$t(l,l.return,L)}}a&&v&64&&fy(d),Jo(d,d.return);break;case 27:py(d);case 26:case 5:pr(h,d,a),a&&l===null&&v&4&&my(d),Jo(d,d.return);break;case 12:pr(h,d,a);break;case 13:pr(h,d,a),a&&v&4&&Ty(h,d);break;case 22:d.memoizedState===null&&pr(h,d,a),Jo(d,d.return);break;case 30:break;default:pr(h,d,a)}i=i.sibling}}function Qf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Lo(a))}function Yf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Lo(e))}function oi(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)by(e,i,a,l),i=i.sibling}function by(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:oi(e,i,a,l),h&2048&&Wo(9,i);break;case 1:oi(e,i,a,l);break;case 3:oi(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Lo(e)));break;case 12:if(h&2048){oi(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,E=d.onPostCommit;typeof E=="function"&&E(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){$t(i,i.return,b)}}else oi(e,i,a,l);break;case 13:oi(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?oi(e,i,a,l):tl(e,i):d._visibility&2?oi(e,i,a,l):(d._visibility|=2,Ia(e,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Qf(v,i);break;case 24:oi(e,i,a,l),h&2048&&Yf(i.alternate,i);break;default:oi(e,i,a,l)}}function Ia(e,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,E=a,b=l,L=v.flags;switch(v.tag){case 0:case 11:case 15:Ia(d,v,E,b,h),Wo(8,v);break;case 23:break;case 22:var G=v.stateNode;v.memoizedState!==null?G._visibility&2?Ia(d,v,E,b,h):tl(d,v):(G._visibility|=2,Ia(d,v,E,b,h)),h&&L&2048&&Qf(v.alternate,v);break;case 24:Ia(d,v,E,b,h),h&&L&2048&&Yf(v.alternate,v);break;default:Ia(d,v,E,b,h)}i=i.sibling}}function tl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:tl(a,l),h&2048&&Qf(l.alternate,l);break;case 24:tl(a,l),h&2048&&Yf(l.alternate,l);break;default:tl(a,l)}i=i.sibling}}var el=8192;function Ca(e){if(e.subtreeFlags&el)for(e=e.child;e!==null;)wy(e),e=e.sibling}function wy(e){switch(e.tag){case 26:Ca(e),e.flags&el&&e.memoizedState!==null&&PS(zn,e.memoizedState,e.memoizedProps);break;case 5:Ca(e);break;case 3:case 4:var i=zn;zn=gc(e.stateNode.containerInfo),Ca(e),zn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=el,el=16777216,Ca(e),el=i):Ca(e));break;default:Ca(e)}}function Ry(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function nl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ne=l,Cy(l,e)}Ry(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Iy(e),e=e.sibling}function Iy(e){switch(e.tag){case 0:case 11:case 15:nl(e),e.flags&2048&&mr(9,e,e.return);break;case 3:nl(e);break;case 12:nl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,ic(e)):nl(e);break;default:nl(e)}}function ic(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ne=l,Cy(l,e)}Ry(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:mr(8,i,i.return),ic(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,ic(i));break;default:ic(i)}e=e.sibling}}function Cy(e,i){for(;Ne!==null;){var a=Ne;switch(a.tag){case 0:case 11:case 15:mr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Lo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ne=l;else t:for(a=e;Ne!==null;){l=Ne;var h=l.sibling,d=l.return;if(vy(l),l===a){Ne=null;break t}if(h!==null){h.return=d,Ne=h;break t}Ne=d}}}var $A={getCacheForType:function(e){var i=Ge(Ae),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},ZA=typeof WeakMap=="function"?WeakMap:Map,Ft=0,Wt=null,Ot=null,kt=0,Gt=0,mn=null,yr=!1,Da=!1,Xf=!1,Hi=0,le=0,_r=0,Ds=0,$f=0,Dn=0,Oa=0,il=null,rn=null,Zf=!1,Wf=0,rc=1/0,sc=null,vr=null,ze=0,Er=null,Na=null,Ma=0,Jf=0,td=null,Dy=null,rl=0,ed=null;function gn(){if((Ft&2)!==0&&kt!==0)return kt&-kt;if(F.T!==null){var e=va;return e!==0?e:ld()}return er()}function Oy(){Dn===0&&(Dn=(kt&536870912)===0||jt?fo():536870912);var e=Cn.current;return e!==null&&(e.flags|=32),Dn}function pn(e,i,a){(e===Wt&&(Gt===2||Gt===9)||e.cancelPendingCommit!==null)&&(Va(e,0),Tr(e,kt,Dn,!1)),Ti(e,a),((Ft&2)===0||e!==Wt)&&(e===Wt&&((Ft&2)===0&&(Ds|=a),le===4&&Tr(e,kt,Dn,!1)),li(e))}function Ny(e,i,a){if((Ft&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&e.expiredLanes)===0||es(e,i),h=l?tS(e,i):rd(e,i,!0),d=l;do{if(h===0){Da&&!l&&Tr(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!WA(a)){h=rd(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var E=e;h=il;var b=E.current.memoizedState.isDehydrated;if(b&&(Va(E,v).flags|=256),v=rd(E,v,!1),v!==2){if(Xf&&!b){E.errorRecoveryDisabledLanes|=d,Ds|=d,h=4;break t}d=rn,rn=h,d!==null&&(rn===null?rn=d:rn.push.apply(rn,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){Va(e,0),Tr(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Tr(l,i,Dn,!yr);break t;case 2:rn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=Wf+300-_n(),10<h)){if(Tr(l,i,Dn,!yr),$s(l,0,!0)!==0)break t;l.timeoutHandle=a_(My.bind(null,l,a,rn,sc,Zf,i,Dn,Ds,Oa,yr,d,2,-0,0),h);break t}My(l,a,rn,sc,Zf,i,Dn,Ds,Oa,yr,d,0,-0,0)}}break}while(!0);li(e)}function My(e,i,a,l,h,d,v,E,b,L,G,Q,z,j){if(e.timeoutHandle=-1,Q=i.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(hl={stylesheets:null,count:0,unsuspend:VS},wy(i),Q=xS(),Q!==null)){e.cancelPendingCommit=Q(zy.bind(null,e,i,d,a,l,h,v,E,b,G,1,z,j)),Tr(e,d,v,!L);return}zy(e,i,d,a,l,h,v,E,b)}function WA(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!cn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Tr(e,i,a,l){i&=~$f,i&=~Ds,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-Fe(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&Qn(e,a,i)}function ac(){return(Ft&6)===0?(sl(0),!1):!0}function nd(){if(Ot!==null){if(Gt===0)var e=Ot.return;else e=Ot,xi=Ss=null,vf(e),wa=null,Xo=0,e=Ot;for(;e!==null;)hy(e.alternate,e),e=e.return;Ot=null}}function Va(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,pS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),nd(),Wt=e,Ot=a=Mi(e.current,null),kt=i,Gt=0,mn=null,yr=!1,Da=es(e,i),Xf=!1,Oa=Dn=$f=Ds=_r=le=0,rn=il=null,Zf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-Fe(l),d=1<<h;i|=e[h],l&=~d}return Hi=i,Cu(),a}function Vy(e,i){bt=null,F.H=Qu,i===jo||i===Uu?(i=$g(),Gt=3):i===Qg?(i=$g(),Gt=4):Gt=i===Zp?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,mn=i,Ot===null&&(le=1,Wu(e,bn(i,e.current)))}function Py(){var e=F.H;return F.H=Qu,e===null?Qu:e}function xy(){var e=F.A;return F.A=$A,e}function id(){le=4,yr||(kt&4194048)!==kt&&Cn.current!==null||(Da=!0),(_r&134217727)===0&&(Ds&134217727)===0||Wt===null||Tr(Wt,kt,Dn,!1)}function rd(e,i,a){var l=Ft;Ft|=2;var h=Py(),d=xy();(Wt!==e||kt!==i)&&(sc=null,Va(e,i)),i=!1;var v=le;t:do try{if(Gt!==0&&Ot!==null){var E=Ot,b=mn;switch(Gt){case 8:nd(),v=6;break t;case 3:case 2:case 9:case 6:Cn.current===null&&(i=!0);var L=Gt;if(Gt=0,mn=null,Pa(e,E,b,L),a&&Da){v=0;break t}break;default:L=Gt,Gt=0,mn=null,Pa(e,E,b,L)}}JA(),v=le;break}catch(G){Vy(e,G)}while(!0);return i&&e.shellSuspendCounter++,xi=Ss=null,Ft=l,F.H=h,F.A=d,Ot===null&&(Wt=null,kt=0,Cu()),v}function JA(){for(;Ot!==null;)ky(Ot)}function tS(e,i){var a=Ft;Ft|=2;var l=Py(),h=xy();Wt!==e||kt!==i?(sc=null,rc=_n()+500,Va(e,i)):Da=es(e,i);t:do try{if(Gt!==0&&Ot!==null){i=Ot;var d=mn;e:switch(Gt){case 1:Gt=0,mn=null,Pa(e,i,d,1);break;case 2:case 9:if(Yg(d)){Gt=0,mn=null,Uy(i);break}i=function(){Gt!==2&&Gt!==9||Wt!==e||(Gt=7),li(e)},d.then(i,i);break t;case 3:Gt=7;break t;case 4:Gt=5;break t;case 7:Yg(d)?(Gt=0,mn=null,Uy(i)):(Gt=0,mn=null,Pa(e,i,d,7));break;case 5:var v=null;switch(Ot.tag){case 26:v=Ot.memoizedState;case 5:case 27:var E=Ot;if(!v||__(v)){Gt=0,mn=null;var b=E.sibling;if(b!==null)Ot=b;else{var L=E.return;L!==null?(Ot=L,oc(L)):Ot=null}break e}}Gt=0,mn=null,Pa(e,i,d,5);break;case 6:Gt=0,mn=null,Pa(e,i,d,6);break;case 8:nd(),le=6;break t;default:throw Error(s(462))}}eS();break}catch(G){Vy(e,G)}while(!0);return xi=Ss=null,F.H=l,F.A=h,Ft=a,Ot!==null?0:(Wt=null,kt=0,Cu(),le)}function eS(){for(;Ot!==null&&!lo();)ky(Ot)}function ky(e){var i=uy(e.alternate,e,Hi);e.memoizedProps=e.pendingProps,i===null?oc(e):Ot=i}function Uy(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=iy(a,i,i.pendingProps,i.type,void 0,kt);break;case 11:i=iy(a,i,i.pendingProps,i.type.render,i.ref,kt);break;case 5:vf(i);default:hy(a,i),i=Ot=Lg(i,Hi),i=uy(a,i,Hi)}e.memoizedProps=e.pendingProps,i===null?oc(e):Ot=i}function Pa(e,i,a,l){xi=Ss=null,vf(i),wa=null,Xo=0;var h=i.return;try{if(FA(e,h,i,a,kt)){le=1,Wu(e,bn(a,e.current)),Ot=null;return}}catch(d){if(h!==null)throw Ot=h,d;le=1,Wu(e,bn(a,e.current)),Ot=null;return}i.flags&32768?(jt||l===1?e=!0:Da||(kt&536870912)!==0?e=!1:(yr=e=!0,(l===2||l===9||l===3||l===6)&&(l=Cn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ly(i,e)):oc(i)}function oc(e){var i=e;do{if((i.flags&32768)!==0){Ly(i,yr);return}e=i.return;var a=KA(i.alternate,i,Hi);if(a!==null){Ot=a;return}if(i=i.sibling,i!==null){Ot=i;return}Ot=i=e}while(i!==null);le===0&&(le=5)}function Ly(e,i){do{var a=QA(e.alternate,e);if(a!==null){a.flags&=32767,Ot=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Ot=e;return}Ot=e=a}while(e!==null);le=6,Ot=null}function zy(e,i,a,l,h,d,v,E,b){e.cancelPendingCommit=null;do lc();while(ze!==0);if((Ft&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Qh,go(e,a,d,v,E,b),e===Wt&&(Ot=Wt=null,kt=0),Na=i,Er=e,Ma=a,Jf=d,td=h,Dy=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sS(Zr,function(){return Fy(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,h=it.p,it.p=2,v=Ft,Ft|=4;try{YA(e,i,a)}finally{Ft=v,it.p=h,F.T=l}}ze=1,jy(),By(),qy()}}function jy(){if(ze===1){ze=0;var e=Er,i=Na,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var l=it.p;it.p=2;var h=Ft;Ft|=4;try{Ay(i,e);var d=pd,v=Cg(e.containerInfo),E=d.focusedElem,b=d.selectionRange;if(v!==E&&E&&E.ownerDocument&&Ig(E.ownerDocument.documentElement,E)){if(b!==null&&qh(E)){var L=b.start,G=b.end;if(G===void 0&&(G=L),"selectionStart"in E)E.selectionStart=L,E.selectionEnd=Math.min(G,E.value.length);else{var Q=E.ownerDocument||document,z=Q&&Q.defaultView||window;if(z.getSelection){var j=z.getSelection(),vt=E.textContent.length,mt=Math.min(b.start,vt),Xt=b.end===void 0?mt:Math.min(b.end,vt);!j.extend&&mt>Xt&&(v=Xt,Xt=mt,mt=v);var P=Rg(E,mt),O=Rg(E,Xt);if(P&&O&&(j.rangeCount!==1||j.anchorNode!==P.node||j.anchorOffset!==P.offset||j.focusNode!==O.node||j.focusOffset!==O.offset)){var U=Q.createRange();U.setStart(P.node,P.offset),j.removeAllRanges(),mt>Xt?(j.addRange(U),j.extend(O.node,O.offset)):(U.setEnd(O.node,O.offset),j.addRange(U))}}}}for(Q=[],j=E;j=j.parentNode;)j.nodeType===1&&Q.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<Q.length;E++){var K=Q[E];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Ec=!!gd,pd=gd=null}finally{Ft=h,it.p=l,F.T=a}}e.current=i,ze=2}}function By(){if(ze===2){ze=0;var e=Er,i=Na,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var l=it.p;it.p=2;var h=Ft;Ft|=4;try{_y(e,i.alternate,i)}finally{Ft=h,it.p=l,F.T=a}}ze=3}}function qy(){if(ze===4||ze===3){ze=0,iu();var e=Er,i=Na,a=Ma,l=Dy;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?ze=5:(ze=0,Na=Er=null,Hy(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(vr=null),Zs(a),i=i.stateNode,Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(ae,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,h=it.p,it.p=2,F.T=null;try{for(var d=e.onRecoverableError,v=0;v<l.length;v++){var E=l[v];d(E.value,{componentStack:E.stack})}}finally{F.T=i,it.p=h}}(Ma&3)!==0&&lc(),li(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===ed?rl++:(rl=0,ed=e):rl=0,sl(0)}}function Hy(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Lo(i)))}function lc(e){return jy(),By(),qy(),Fy()}function Fy(){if(ze!==5)return!1;var e=Er,i=Jf;Jf=0;var a=Zs(Ma),l=F.T,h=it.p;try{it.p=32>a?32:a,F.T=null,a=td,td=null;var d=Er,v=Ma;if(ze=0,Na=Er=null,Ma=0,(Ft&6)!==0)throw Error(s(331));var E=Ft;if(Ft|=4,Iy(d.current),by(d,d.current,v,a),Ft=E,sl(0,!1),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(ae,d)}catch{}return!0}finally{it.p=h,F.T=l,Hy(e,i)}}function Gy(e,i,a){i=bn(a,i),i=Vf(e.stateNode,i,2),e=cr(e,i,2),e!==null&&(Ti(e,2),li(e))}function $t(e,i,a){if(e.tag===3)Gy(e,e,a);else for(;i!==null;){if(i.tag===3){Gy(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(vr===null||!vr.has(l))){e=bn(a,e),a=Xp(2),l=cr(i,a,2),l!==null&&($p(a,l,i,e),Ti(l,2),li(l));break}}i=i.return}}function sd(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new ZA;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Xf=!0,h.add(a),e=nS.bind(null,e,i,a),i.then(e,e))}function nS(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Wt===e&&(kt&a)===a&&(le===4||le===3&&(kt&62914560)===kt&&300>_n()-Wf?(Ft&2)===0&&Va(e,0):$f|=a,Oa===kt&&(Oa=0)),li(e)}function Ky(e,i){i===0&&(i=mo()),e=ga(e,i),e!==null&&(Ti(e,i),li(e))}function iS(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),Ky(e,a)}function rS(e,i){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),Ky(e,a)}function sS(e,i){return Xr(e,i)}var uc=null,xa=null,ad=!1,cc=!1,od=!1,Os=0;function li(e){e!==xa&&e.next===null&&(xa===null?uc=xa=e:xa=xa.next=e),cc=!0,ad||(ad=!0,oS())}function sl(e,i){if(!od&&cc){od=!0;do for(var a=!1,l=uc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,E=l.pingedLanes;d=(1<<31-Fe(42|e)+1)-1,d&=h&~(v&~E),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,$y(l,d))}else d=kt,d=$s(l,l===Wt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||es(l,d)||(a=!0,$y(l,d));l=l.next}while(a);od=!1}}function aS(){Qy()}function Qy(){cc=ad=!1;var e=0;Os!==0&&(gS()&&(e=Os),Os=0);for(var i=_n(),a=null,l=uc;l!==null;){var h=l.next,d=Yy(l,i);d===0?(l.next=null,a===null?uc=h:a.next=h,h===null&&(xa=a)):(a=l,(e!==0||(d&3)!==0)&&(cc=!0)),l=h}sl(e)}function Yy(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Fe(d),E=1<<v,b=h[v];b===-1?((E&a)===0||(E&l)!==0)&&(h[v]=ho(E,i)):b<=i&&(e.expiredLanes|=E),d&=~E}if(i=Wt,a=kt,a=$s(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===i&&(Gt===2||Gt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&$r(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||es(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&$r(l),Zs(a)){case 2:case 8:a=Ys;break;case 32:a=Zr;break;case 268435456:a=Xs;break;default:a=Zr}return l=Xy.bind(null,e),a=Xr(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&$r(l),e.callbackPriority=2,e.callbackNode=null,2}function Xy(e,i){if(ze!==0&&ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(lc()&&e.callbackNode!==a)return null;var l=kt;return l=$s(e,e===Wt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Ny(e,l,i),Yy(e,_n()),e.callbackNode!=null&&e.callbackNode===a?Xy.bind(null,e):null)}function $y(e,i){if(lc())return null;Ny(e,i,!0)}function oS(){yS(function(){(Ft&6)!==0?Xr(uo,aS):Qy()})}function ld(){return Os===0&&(Os=fo()),Os}function Zy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ia(""+e)}function Wy(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function lS(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=Zy((h[de]||null).action),v=l.submitter;v&&(i=(i=v[de]||null)?Zy(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var E=new ra("action","action",null,l,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Os!==0){var b=v?Wy(h,v):new FormData(h);Cf(a,{pending:!0,data:b,method:h.method,action:d},null,b)}}else typeof d=="function"&&(E.preventDefault(),b=v?Wy(h,v):new FormData(h),Cf(a,{pending:!0,data:b,method:h.method,action:d},d,b))},currentTarget:h}]})}}for(var ud=0;ud<Kh.length;ud++){var cd=Kh[ud],uS=cd.toLowerCase(),cS=cd[0].toUpperCase()+cd.slice(1);Ln(uS,"on"+cS)}Ln(Ng,"onAnimationEnd"),Ln(Mg,"onAnimationIteration"),Ln(Vg,"onAnimationStart"),Ln("dblclick","onDoubleClick"),Ln("focusin","onFocus"),Ln("focusout","onBlur"),Ln(IA,"onTransitionRun"),Ln(CA,"onTransitionStart"),Ln(DA,"onTransitionCancel"),Ln(Pg,"onTransitionEnd"),Si("onMouseEnter",["mouseout","mouseover"]),Si("onMouseLeave",["mouseout","mouseover"]),Si("onPointerEnter",["pointerout","pointerover"]),Si("onPointerLeave",["pointerout","pointerover"]),kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),kn("onBeforeInput",["compositionend","keypress","textInput","paste"]),kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(al));function Jy(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var E=l[v],b=E.instance,L=E.currentTarget;if(E=E.listener,b!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=L;try{d(h)}catch(G){Zu(G)}h.currentTarget=null,d=b}else for(v=0;v<l.length;v++){if(E=l[v],b=E.instance,L=E.currentTarget,E=E.listener,b!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=L;try{d(h)}catch(G){Zu(G)}h.currentTarget=null,d=b}}}}function Nt(e,i){var a=i[yo];a===void 0&&(a=i[yo]=new Set);var l=e+"__bubble";a.has(l)||(t_(i,e,2,!1),a.add(l))}function hd(e,i,a){var l=0;i&&(l|=4),t_(a,e,l,i)}var hc="_reactListening"+Math.random().toString(36).slice(2);function fd(e){if(!e[hc]){e[hc]=!0,_o.forEach(function(a){a!=="selectionchange"&&(hS.has(a)||hd(a,!1,e),hd(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[hc]||(i[hc]=!0,hd("selectionchange",!1,i))}}function t_(e,i,a,l){switch(b_(i)){case 2:var h=LS;break;case 8:h=zS;break;default:h=Rd}a=h.bind(null,i,a,e),h=void 0,!An||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function dd(e,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var E=l.stateNode.containerInfo;if(E===h)break;if(v===4)for(v=l.return;v!==null;){var b=v.tag;if((b===3||b===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;E!==null;){if(v=Ai(E),v===null)return;if(b=v.tag,b===5||b===6||b===26||b===27){l=d=v;continue t}E=E.parentNode}}l=l.return}du(function(){var L=d,G=Tn(a),Q=[];t:{var z=xg.get(e);if(z!==void 0){var j=ra,vt=e;switch(e){case"keypress":if(Jn(a)===0)break t;case"keydown":case"keyup":j=ca;break;case"focusin":vt="focus",j=oa;break;case"focusout":vt="blur",j=oa;break;case"beforeblur":case"afterblur":j=oa;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Sn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Lh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Tu;break;case Ng:case Mg:case Vg:j=la;break;case Pg:j=Su;break;case"scroll":case"scrollend":j=mu;break;case"wheel":j=ha;break;case"copy":case"cut":case"paste":j=ua;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Oo;break;case"toggle":case"beforetoggle":j=wu}var mt=(i&4)!==0,Xt=!mt&&(e==="scroll"||e==="scrollend"),P=mt?z!==null?z+"Capture":null:z;mt=[];for(var O=L,U;O!==null;){var K=O;if(U=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||U===null||P===null||(K=us(O,P),K!=null&&mt.push(ol(O,K,U))),Xt)break;O=O.return}0<mt.length&&(z=new j(z,vt,null,a,G),Q.push({event:z,listeners:mt}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",z&&a!==Ri&&(vt=a.relatedTarget||a.fromElement)&&(Ai(vt)||vt[vn]))break t;if((j||z)&&(z=G.window===G?G:(z=G.ownerDocument)?z.defaultView||z.parentWindow:window,j?(vt=a.relatedTarget||a.toElement,j=L,vt=vt?Ai(vt):null,vt!==null&&(Xt=u(vt),mt=vt.tag,vt!==Xt||mt!==5&&mt!==27&&mt!==6)&&(vt=null)):(j=null,vt=L),j!==vt)){if(mt=Sn,K="onMouseLeave",P="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(mt=Oo,K="onPointerLeave",P="onPointerEnter",O="pointer"),Xt=j==null?z:Xn(j),U=vt==null?z:Xn(vt),z=new mt(K,O+"leave",j,a,G),z.target=Xt,z.relatedTarget=U,K=null,Ai(G)===L&&(mt=new mt(P,O+"enter",vt,a,G),mt.target=U,mt.relatedTarget=Xt,K=mt),Xt=K,j&&vt)e:{for(mt=j,P=vt,O=0,U=mt;U;U=ka(U))O++;for(U=0,K=P;K;K=ka(K))U++;for(;0<O-U;)mt=ka(mt),O--;for(;0<U-O;)P=ka(P),U--;for(;O--;){if(mt===P||P!==null&&mt===P.alternate)break e;mt=ka(mt),P=ka(P)}mt=null}else mt=null;j!==null&&e_(Q,z,j,mt,!1),vt!==null&&Xt!==null&&e_(Q,Xt,vt,mt,!0)}}t:{if(z=L?Xn(L):window,j=z.nodeName&&z.nodeName.toLowerCase(),j==="select"||j==="input"&&z.type==="file")var at=Eg;else if(Te(z))if(Tg)at=bA;else{at=AA;var Ct=TA}else j=z.nodeName,!j||j.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?L&&So(L.elementType)&&(at=Eg):at=SA;if(at&&(at=at(e,L))){Ni(Q,at,a,G);break t}Ct&&Ct(e,z,L),e==="focusout"&&L&&z.type==="number"&&L.memoizedProps.value!=null&&sr(z,"number",z.value)}switch(Ct=L?Xn(L):window,e){case"focusin":(Te(Ct)||Ct.contentEditable==="true")&&(fa=Ct,Hh=L,Vo=null);break;case"focusout":Vo=Hh=fa=null;break;case"mousedown":Fh=!0;break;case"contextmenu":case"mouseup":case"dragend":Fh=!1,Dg(Q,a,G);break;case"selectionchange":if(RA)break;case"keydown":case"keyup":Dg(Q,a,G)}var lt;if(ni)t:{switch(e){case"compositionstart":var gt="onCompositionStart";break t;case"compositionend":gt="onCompositionEnd";break t;case"compositionupdate":gt="onCompositionUpdate";break t}gt=void 0}else Pt?H(e,a)&&(gt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(gt="onCompositionStart");gt&&(_&&a.locale!=="ko"&&(Pt||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&Pt&&(lt=wo()):(Wn=G,ar="value"in Wn?Wn.value:Wn.textContent,Pt=!0)),Ct=fc(L,gt),0<Ct.length&&(gt=new Co(gt,e,null,a,G),Q.push({event:gt,listeners:Ct}),lt?gt.data=lt:(lt=tt(a),lt!==null&&(gt.data=lt)))),(lt=g?Ee(e,a):xt(e,a))&&(gt=fc(L,"onBeforeInput"),0<gt.length&&(Ct=new Co("onBeforeInput","beforeinput",null,a,G),Q.push({event:Ct,listeners:gt}),Ct.data=lt)),lS(Q,e,L,a,G)}Jy(Q,i)})}function ol(e,i,a){return{instance:e,listener:i,currentTarget:a}}function fc(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=us(e,a),h!=null&&l.unshift(ol(e,h,d)),h=us(e,i),h!=null&&l.push(ol(e,h,d))),e.tag===3)return l;e=e.return}return[]}function ka(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function e_(e,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var E=a,b=E.alternate,L=E.stateNode;if(E=E.tag,b!==null&&b===l)break;E!==5&&E!==26&&E!==27||L===null||(b=L,h?(L=us(a,d),L!=null&&v.unshift(ol(a,L,b))):h||(L=us(a,d),L!=null&&v.push(ol(a,L,b)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var fS=/\r\n?/g,dS=/\u0000|\uFFFD/g;function n_(e){return(typeof e=="string"?e:""+e).replace(fS,`
`).replace(dS,"")}function i_(e,i){return i=n_(i),n_(e)===i}function dc(){}function Yt(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||En(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&En(e,""+l);break;case"className":$n(e,"class",l);break;case"tabIndex":$n(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":$n(e,a,l);break;case"style":Ao(e,l,d);break;case"data":if(i!=="object"){$n(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ia(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Yt(e,i,"name",h.name,h,null),Yt(e,i,"formEncType",h.formEncType,h,null),Yt(e,i,"formMethod",h.formMethod,h,null),Yt(e,i,"formTarget",h.formTarget,h,null)):(Yt(e,i,"encType",h.encType,h,null),Yt(e,i,"method",h.method,h,null),Yt(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ia(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=dc);break;case"onScroll":l!=null&&Nt("scroll",e);break;case"onScrollEnd":l!=null&&Nt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ia(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Nt("beforetoggle",e),Nt("toggle",e),rr(e,"popover",l);break;case"xlinkActuate":ke(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ke(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ke(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ke(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ke(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ke(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ke(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ke(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ke(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":rr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=kh.get(a)||a,rr(e,a,l))}}function md(e,i,a,l,h,d){switch(a){case"style":Ao(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?En(e,l):(typeof l=="number"||typeof l=="bigint")&&En(e,""+l);break;case"onScroll":l!=null&&Nt("scroll",e);break;case"onScrollEnd":l!=null&&Nt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=dc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ws.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[de]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):rr(e,a,l)}}}function je(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Nt("error",e),Nt("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Yt(e,i,d,v,a,null)}}h&&Yt(e,i,"srcSet",a.srcSet,a,null),l&&Yt(e,i,"src",a.src,a,null);return;case"input":Nt("invalid",e);var E=d=v=h=null,b=null,L=null;for(l in a)if(a.hasOwnProperty(l)){var G=a[l];if(G!=null)switch(l){case"name":h=G;break;case"type":v=G;break;case"checked":b=G;break;case"defaultChecked":L=G;break;case"value":d=G;break;case"defaultValue":E=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,i));break;default:Yt(e,i,l,G,a,null)}}as(e,d,E,b,L,v,h,!1),na(e);return;case"select":Nt("invalid",e),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":v=E;break;case"multiple":l=E;default:Yt(e,i,h,E,a,null)}i=d,a=v,e.multiple=!!l,i!=null?wi(e,!!l,i,!1):a!=null&&wi(e,!!l,a,!0);return;case"textarea":Nt("invalid",e),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(E=a[v],E!=null))switch(v){case"value":l=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Yt(e,i,v,E,a,null)}os(e,l,h,d),na(e);return;case"option":for(b in a)if(a.hasOwnProperty(b)&&(l=a[b],l!=null))switch(b){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Yt(e,i,b,l,a,null)}return;case"dialog":Nt("beforetoggle",e),Nt("toggle",e),Nt("cancel",e),Nt("close",e);break;case"iframe":case"object":Nt("load",e);break;case"video":case"audio":for(l=0;l<al.length;l++)Nt(al[l],e);break;case"image":Nt("error",e),Nt("load",e);break;case"details":Nt("toggle",e);break;case"embed":case"source":case"link":Nt("error",e),Nt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(l=a[L],l!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Yt(e,i,L,l,a,null)}return;default:if(So(i)){for(G in a)a.hasOwnProperty(G)&&(l=a[G],l!==void 0&&md(e,i,G,l,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!=null&&Yt(e,i,E,l,a,null))}function mS(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,E=null,b=null,L=null,G=null;for(j in a){var Q=a[j];if(a.hasOwnProperty(j)&&Q!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":b=Q;default:l.hasOwnProperty(j)||Yt(e,i,j,null,l,Q)}}for(var z in l){var j=l[z];if(Q=a[z],l.hasOwnProperty(z)&&(j!=null||Q!=null))switch(z){case"type":d=j;break;case"name":h=j;break;case"checked":L=j;break;case"defaultChecked":G=j;break;case"value":v=j;break;case"defaultValue":E=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,i));break;default:j!==Q&&Yt(e,i,z,j,l,Q)}}un(e,v,E,b,L,G,d,h);return;case"select":j=v=E=z=null;for(d in a)if(b=a[d],a.hasOwnProperty(d)&&b!=null)switch(d){case"value":break;case"multiple":j=b;default:l.hasOwnProperty(d)||Yt(e,i,d,null,l,b)}for(h in l)if(d=l[h],b=a[h],l.hasOwnProperty(h)&&(d!=null||b!=null))switch(h){case"value":z=d;break;case"defaultValue":E=d;break;case"multiple":v=d;default:d!==b&&Yt(e,i,h,d,l,b)}i=E,a=v,l=j,z!=null?wi(e,!!a,z,!1):!!l!=!!a&&(i!=null?wi(e,!!a,i,!0):wi(e,!!a,a?[]:"",!1));return;case"textarea":j=z=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Yt(e,i,E,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":j=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Yt(e,i,v,h,l,d)}Kt(e,z,j);return;case"option":for(var vt in a)if(z=a[vt],a.hasOwnProperty(vt)&&z!=null&&!l.hasOwnProperty(vt))switch(vt){case"selected":e.selected=!1;break;default:Yt(e,i,vt,null,l,z)}for(b in l)if(z=l[b],j=a[b],l.hasOwnProperty(b)&&z!==j&&(z!=null||j!=null))switch(b){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Yt(e,i,b,z,l,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var mt in a)z=a[mt],a.hasOwnProperty(mt)&&z!=null&&!l.hasOwnProperty(mt)&&Yt(e,i,mt,null,l,z);for(L in l)if(z=l[L],j=a[L],l.hasOwnProperty(L)&&z!==j&&(z!=null||j!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Yt(e,i,L,z,l,j)}return;default:if(So(i)){for(var Xt in a)z=a[Xt],a.hasOwnProperty(Xt)&&z!==void 0&&!l.hasOwnProperty(Xt)&&md(e,i,Xt,void 0,l,z);for(G in l)z=l[G],j=a[G],!l.hasOwnProperty(G)||z===j||z===void 0&&j===void 0||md(e,i,G,z,l,j);return}}for(var P in a)z=a[P],a.hasOwnProperty(P)&&z!=null&&!l.hasOwnProperty(P)&&Yt(e,i,P,null,l,z);for(Q in l)z=l[Q],j=a[Q],!l.hasOwnProperty(Q)||z===j||z==null&&j==null||Yt(e,i,Q,z,l,j)}var gd=null,pd=null;function mc(e){return e.nodeType===9?e:e.ownerDocument}function r_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function s_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function yd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var _d=null;function gS(){var e=window.event;return e&&e.type==="popstate"?e===_d?!1:(_d=e,!0):(_d=null,!1)}var a_=typeof setTimeout=="function"?setTimeout:void 0,pS=typeof clearTimeout=="function"?clearTimeout:void 0,o_=typeof Promise=="function"?Promise:void 0,yS=typeof queueMicrotask=="function"?queueMicrotask:typeof o_<"u"?function(e){return o_.resolve(null).then(e).catch(_S)}:a_;function _S(e){setTimeout(function(){throw e})}function Ar(e){return e==="head"}function l_(e,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=e.ownerDocument;if(a&1&&ll(v.documentElement),a&2&&ll(v.body),a&4)for(a=v.head,ll(a),v=a.firstChild;v;){var E=v.nextSibling,b=v.nodeName;v[ns]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=E}}if(h===0){e.removeChild(d),pl(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);pl(i)}function vd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":vd(a),ir(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function vS(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ns])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=jn(e.nextSibling),e===null)break}return null}function ES(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=jn(e.nextSibling),e===null))return null;return e}function Ed(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function TS(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function jn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Td=null;function u_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function c_(e,i,a){switch(i=mc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ll(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ir(e)}var On=new Map,h_=new Set;function gc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Fi=it.d;it.d={f:AS,r:SS,D:bS,C:wS,L:RS,m:IS,X:DS,S:CS,M:OS};function AS(){var e=Fi.f(),i=ac();return e||i}function SS(e){var i=Yn(e);i!==null&&i.tag===5&&i.type==="form"?Np(i):Fi.r(e)}var Ua=typeof document>"u"?null:document;function f_(e,i,a){var l=Ua;if(l&&typeof i=="string"&&i){var h=me(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),h_.has(h)||(h_.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),je(i,"link",e),ue(i),l.head.appendChild(i)))}}function bS(e){Fi.D(e),f_("dns-prefetch",e,null)}function wS(e,i){Fi.C(e,i),f_("preconnect",e,i)}function RS(e,i,a){Fi.L(e,i,a);var l=Ua;if(l&&e&&i){var h='link[rel="preload"][as="'+me(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+me(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+me(a.imageSizes)+'"]')):h+='[href="'+me(e)+'"]';var d=h;switch(i){case"style":d=La(e);break;case"script":d=za(e)}On.has(d)||(e=T({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),On.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(ul(d))||i==="script"&&l.querySelector(cl(d))||(i=l.createElement("link"),je(i,"link",e),ue(i),l.head.appendChild(i)))}}function IS(e,i){Fi.m(e,i);var a=Ua;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+me(l)+'"][href="'+me(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=za(e)}if(!On.has(d)&&(e=T({rel:"modulepreload",href:e},i),On.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(cl(d)))return}l=a.createElement("link"),je(l,"link",e),ue(l),a.head.appendChild(l)}}}function CS(e,i,a){Fi.S(e,i,a);var l=Ua;if(l&&e){var h=Ze(l).hoistableStyles,d=La(e);i=i||"default";var v=h.get(d);if(!v){var E={loading:0,preload:null};if(v=l.querySelector(ul(d)))E.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":i},a),(a=On.get(d))&&Ad(e,a);var b=v=l.createElement("link");ue(b),je(b,"link",e),b._p=new Promise(function(L,G){b.onload=L,b.onerror=G}),b.addEventListener("load",function(){E.loading|=1}),b.addEventListener("error",function(){E.loading|=2}),E.loading|=4,pc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:E},h.set(d,v)}}}function DS(e,i){Fi.X(e,i);var a=Ua;if(a&&e){var l=Ze(a).hoistableScripts,h=za(e),d=l.get(h);d||(d=a.querySelector(cl(h)),d||(e=T({src:e,async:!0},i),(i=On.get(h))&&Sd(e,i),d=a.createElement("script"),ue(d),je(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function OS(e,i){Fi.M(e,i);var a=Ua;if(a&&e){var l=Ze(a).hoistableScripts,h=za(e),d=l.get(h);d||(d=a.querySelector(cl(h)),d||(e=T({src:e,async:!0,type:"module"},i),(i=On.get(h))&&Sd(e,i),d=a.createElement("script"),ue(d),je(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function d_(e,i,a,l){var h=(h=Et.current)?gc(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=La(a.href),a=Ze(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=La(a.href);var d=Ze(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(ul(e)))&&!d._p&&(v.instance=d,v.state.loading=5),On.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},On.set(e,a),d||NS(h,e,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=za(a),a=Ze(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function La(e){return'href="'+me(e)+'"'}function ul(e){return'link[rel="stylesheet"]['+e+"]"}function m_(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function NS(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),je(i,"link",a),ue(i),e.head.appendChild(i))}function za(e){return'[src="'+me(e)+'"]'}function cl(e){return"script[async]"+e}function g_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+me(a.href)+'"]');if(l)return i.instance=l,ue(l),l;var h=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ue(l),je(l,"style",h),pc(l,a.precedence,e),i.instance=l;case"stylesheet":h=La(a.href);var d=e.querySelector(ul(h));if(d)return i.state.loading|=4,i.instance=d,ue(d),d;l=m_(a),(h=On.get(h))&&Ad(l,h),d=(e.ownerDocument||e).createElement("link"),ue(d);var v=d;return v._p=new Promise(function(E,b){v.onload=E,v.onerror=b}),je(d,"link",l),i.state.loading|=4,pc(d,a.precedence,e),i.instance=d;case"script":return d=za(a.src),(h=e.querySelector(cl(d)))?(i.instance=h,ue(h),h):(l=a,(h=On.get(d))&&(l=T({},a),Sd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),ue(h),je(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,pc(l,a.precedence,e));return i.instance}function pc(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var E=l[v];if(E.dataset.precedence===i)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function Ad(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Sd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var yc=null;function p_(e,i,a){if(yc===null){var l=new Map,h=yc=new Map;h.set(a,l)}else h=yc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[ns]||d[ve]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var E=l.get(v);E?E.push(d):l.set(v,[d])}}return l}function y_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function MS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function __(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var hl=null;function VS(){}function PS(e,i,a){if(hl===null)throw Error(s(475));var l=hl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=La(a.href),d=e.querySelector(ul(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=_c.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,ue(d);return}d=e.ownerDocument||e,a=m_(a),(h=On.get(h))&&Ad(a,h),d=d.createElement("link"),ue(d);var v=d;v._p=new Promise(function(E,b){v.onload=E,v.onerror=b}),je(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=_c.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function xS(){if(hl===null)throw Error(s(475));var e=hl;return e.stylesheets&&e.count===0&&bd(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&bd(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function _c(){if(this.count--,this.count===0){if(this.stylesheets)bd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vc=null;function bd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vc=new Map,i.forEach(kS,e),vc=null,_c.call(e))}function kS(e,i){if(!(i.state.loading&4)){var a=vc.get(e);if(a)var l=a.get(null);else{a=new Map,vc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=_c.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var fl={$$typeof:ot,Provider:null,Consumer:null,_currentValue:ct,_currentValue2:ct,_threadCount:0};function US(e,i,a,l,h,d,v,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ei(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ei(0),this.hiddenUpdates=Ei(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function v_(e,i,a,l,h,d,v,E,b,L,G,Q){return e=new US(e,i,a,v,E,b,L,Q),i=1,d===!0&&(i|=24),d=hn(3,null,null,i),e.current=d,d.stateNode=e,i=sf(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},uf(d),e}function E_(e){return e?(e=pa,e):pa}function T_(e,i,a,l,h,d){h=E_(h),l.context===null?l.context=h:l.pendingContext=h,l=ur(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=cr(e,l,i),a!==null&&(pn(a,e,i),qo(a,e,i))}function A_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function wd(e,i){A_(e,i),(e=e.alternate)&&A_(e,i)}function S_(e){if(e.tag===13){var i=ga(e,67108864);i!==null&&pn(i,e,67108864),wd(e,67108864)}}var Ec=!0;function LS(e,i,a,l){var h=F.T;F.T=null;var d=it.p;try{it.p=2,Rd(e,i,a,l)}finally{it.p=d,F.T=h}}function zS(e,i,a,l){var h=F.T;F.T=null;var d=it.p;try{it.p=8,Rd(e,i,a,l)}finally{it.p=d,F.T=h}}function Rd(e,i,a,l){if(Ec){var h=Id(l);if(h===null)dd(e,i,l,Tc,a),w_(e,l);else if(BS(h,e,i,a,l))l.stopPropagation();else if(w_(e,l),i&4&&-1<jS.indexOf(e)){for(;h!==null;){var d=Yn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=xn(d.pendingLanes);if(v!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var b=1<<31-Fe(v);E.entanglements[1]|=b,v&=~b}li(d),(Ft&6)===0&&(rc=_n()+500,sl(0))}}break;case 13:E=ga(d,2),E!==null&&pn(E,d,2),ac(),wd(d,2)}if(d=Id(l),d===null&&dd(e,i,l,Tc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else dd(e,i,l,null,a)}}function Id(e){return e=Tn(e),Cd(e)}var Tc=null;function Cd(e){if(Tc=null,e=Ai(e),e!==null){var i=u(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Tc=e,null}function b_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Oh()){case uo:return 2;case Ys:return 8;case Zr:case Nh:return 32;case Xs:return 268435456;default:return 32}default:return 32}}var Dd=!1,Sr=null,br=null,wr=null,dl=new Map,ml=new Map,Rr=[],jS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function w_(e,i){switch(e){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":dl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ml.delete(i.pointerId)}}function gl(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Yn(i),i!==null&&S_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function BS(e,i,a,l,h){switch(i){case"focusin":return Sr=gl(Sr,e,i,a,l,h),!0;case"dragenter":return br=gl(br,e,i,a,l,h),!0;case"mouseover":return wr=gl(wr,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return dl.set(d,gl(dl.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,ml.set(d,gl(ml.get(d)||null,e,i,a,l,h)),!0}return!1}function R_(e){var i=Ai(e.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,au(e.priority,function(){if(a.tag===13){var l=gn();l=tr(l);var h=ga(a,l);h!==null&&pn(h,a,l),wd(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ac(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=Id(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Ri=l,a.target.dispatchEvent(l),Ri=null}else return i=Yn(a),i!==null&&S_(i),e.blockedOn=a,!1;i.shift()}return!0}function I_(e,i,a){Ac(e)&&a.delete(i)}function qS(){Dd=!1,Sr!==null&&Ac(Sr)&&(Sr=null),br!==null&&Ac(br)&&(br=null),wr!==null&&Ac(wr)&&(wr=null),dl.forEach(I_),ml.forEach(I_)}function Sc(e,i){e.blockedOn===i&&(e.blockedOn=null,Dd||(Dd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,qS)))}var bc=null;function C_(e){bc!==e&&(bc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){bc===e&&(bc=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(Cd(l||a)===null)continue;break}var d=Yn(a);d!==null&&(e.splice(i,3),i-=3,Cf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function pl(e){function i(b){return Sc(b,e)}Sr!==null&&Sc(Sr,e),br!==null&&Sc(br,e),wr!==null&&Sc(wr,e),dl.forEach(i),ml.forEach(i);for(var a=0;a<Rr.length;a++){var l=Rr[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Rr.length&&(a=Rr[0],a.blockedOn===null);)R_(a),a.blockedOn===null&&Rr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[de]||null;if(typeof d=="function")v||C_(a);else if(v){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[de]||null)E=v.formAction;else if(Cd(h)!==null)continue}else E=v.action;typeof E=="function"?a[l+1]=E:(a.splice(l,3),l-=3),C_(a)}}}function Od(e){this._internalRoot=e}wc.prototype.render=Od.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=gn();T_(a,l,e,i,null,null)},wc.prototype.unmount=Od.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;T_(e.current,2,null,e,null,null),ac(),i[vn]=null}};function wc(e){this._internalRoot=e}wc.prototype.unstable_scheduleHydration=function(e){if(e){var i=er();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Rr.length&&i!==0&&i<Rr[a].priority;a++);Rr.splice(a,0,e),a===0&&R_(e)}};var D_=t.version;if(D_!=="19.1.0")throw Error(s(527,D_,"19.1.0"));it.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(i),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var HS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rc.isDisabled&&Rc.supportsFiber)try{ae=Rc.inject(HS),Ht=Rc}catch{}}return _l.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",h=Gp,d=Kp,v=Qp,E=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(E=i.unstable_transitionCallbacks)),i=v_(e,1,!1,null,null,a,l,h,d,v,E,null),e[vn]=i.current,fd(e),new Od(i)},_l.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=Gp,v=Kp,E=Qp,b=null,L=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(b=a.unstable_transitionCallbacks),a.formState!==void 0&&(L=a.formState)),i=v_(e,1,!0,i,a??null,l,h,d,v,E,b,L),i.context=E_(null),a=i.current,l=gn(),l=tr(l),h=ur(l),h.callback=null,cr(a,h,l),a=l,i.current.lanes=a,Ti(i,a),li(i),e[vn]=i.current,fd(e),new wc(i)},_l.version="19.1.0",_l}var z_;function JS(){if(z_)return Vd.exports;z_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Vd.exports=WS(),Vd.exports}var tb=JS();const vl={low:{color:"#047857",background:"#d1fae5",description:"Caffeine levels are mild, resulting in a light boost in alertness with minimal side effects.",maxLevel:100},moderate:{color:"#b45309",background:"#fef3c7",description:"A moderate amount of caffeine leads to noticeable stimulation, increased focus, and potential restlessness.",maxLevel:200},high:{color:"#e11d48",background:"#ffe4e6",description:"Elevated caffeine levels can cause jitteriness, rapid heartbeat, and trouble concentrating, signaling an excessive intake.",maxLevel:9999}},Zd=[{name:"Espresso",caffeine:63},{name:"Double Espresso",caffeine:126},{name:"Americano",caffeine:96},{name:"Cappuccino",caffeine:80},{name:"Latte",caffeine:80},{name:"Mocha",caffeine:90},{name:"Macchiato",caffeine:85},{name:"Flat White",caffeine:130},{name:"Cortado",caffeine:85},{name:"Red Eye",caffeine:159},{name:"Black Coffee (8oz)",caffeine:95},{name:"Iced Coffee (8oz)",caffeine:90},{name:"Cold Brew (12oz)",caffeine:155},{name:"Nitro Cold Brew (12oz)",caffeine:215},{name:"Drip Coffee (12oz)",caffeine:120},{name:"Frappuccino",caffeine:95},{name:"Turkish Coffee",caffeine:160},{name:"Irish Coffee",caffeine:70},{name:"Vietnamese Coffee",caffeine:100},{name:"Affogato",caffeine:65},{name:"Instant Coffee (1 tsp)",caffeine:30},{name:"Decaf Coffee",caffeine:2},{name:"Chai Latte",caffeine:40},{name:"Matcha Latte",caffeine:70},{name:"Monster Energy (16oz)",caffeine:160},{name:"Red Bull (8.4oz)",caffeine:80},{name:"Rockstar Energy (16oz)",caffeine:160},{name:"Bang Energy (16oz)",caffeine:300},{name:"Celsius Energy Drink (12oz)",caffeine:200},{name:"5-hour Energy (2oz)",caffeine:200},{name:"NOS Energy Drink (16oz)",caffeine:160},{name:"Reign Energy Drink (16oz)",caffeine:300},{name:"Starbucks Doubleshot (6.5oz)",caffeine:135},{name:"Monster Java (15oz)",caffeine:188},{name:"AMP Energy Drink (16oz)",caffeine:142},{name:"Zipfizz (1 tube)",caffeine:100}],eb=5;function AE(r){const t=Date.now(),n=eb*60*60*1e3,s=48*60*60*1e3;let o=0;for(const[u,f]of Object.entries(r)){const m=t-parseInt(u);if(m<=s){const y=wm(f.name)*Math.pow(.5,m/n);o+=y}}return o.toFixed(2)}function wm(r){const t=Zd.find(n=>n.name===r);return t?t.caffeine:0}function nb(r){const t={};for(const u of Object.values(r)){const f=u.name;t[f]?t[f]++:t[f]=1}const n=Object.entries(t).sort((u,f)=>f[1]-u[1]),s=Object.values(t).reduce((u,f)=>u+f,0);return n.slice(0,3).map(([u,f])=>{const m=(f/s*100).toFixed(2);return{coffeeName:u,count:f,percentage:m+"%"}})}function ib(r){const n=Date.now()-r,s=Math.floor(n/1e3),o=Math.floor(s/60),u=Math.floor(o/60),f=Math.floor(u/24),m=Math.floor(f/30),p=f%30,y=u%24,T=o%60,w=s%60;let C="";return m>0&&(C+=`${m}M `),p>0&&(C+=`${p}D `),y>0&&(C+=`${y}H `),T>0&&(C+=`${T}M `),(w>0||C==="")&&(C+=`${w}S`),C.trim()}function rb(r){const t={};let n=0,s=0,o=0,u=0;for(const[y,T]of Object.entries(r)){const w=new Date(parseInt(y)).toISOString().split("T")[0],C=wm(T.name),B=parseFloat(T.cost);t[w]||(t[w]={caffeine:0,cost:0,count:0}),t[w].caffeine+=C,t[w].cost+=B,t[w].count+=1,n+=1,s+=B}const f=Object.keys(t).length;for(const[y,T]of Object.entries(t))T.caffeine>0&&(o+=T.caffeine,u+=1);const m=u>0?(o/u).toFixed(2):0,p=u>0?(s/u).toFixed(2):0;return{daily_caffeine:m,daily_cost:p,average_coffees:(n/f).toFixed(2),total_cost:s.toFixed(2)}}var sb=TE();const ab=GS(sb);function SE(r){const{children:t,handleCloseModal:n}=r;return ab.createPortal(q.jsxs("div",{className:"modal-container",children:[q.jsx("button",{onClick:n,className:"modal-underlay"}),q.jsx("div",{className:"modal-content",children:t})]}),document.getElementById("portal"))}const ob=()=>{};var j_={};/**
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
 */const bE=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},lb=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];t[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],p=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;t[s++]=String.fromCharCode(55296+(p>>10)),t[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],f=r[n++];t[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},wE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,T=u>>2,w=(u&3)<<4|m>>4;let C=(m&15)<<2|y>>6,B=y&63;p||(B=64,f||(C=64)),s.push(n[T],n[w],n[C],n[B])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(bE(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):lb(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const w=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||y==null||w==null)throw new ub;const C=u<<2|m>>4;if(s.push(C),y!==64){const B=m<<4&240|y>>2;if(s.push(B),w!==64){const X=y<<6&192|w;s.push(X)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class ub extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cb=function(r){const t=bE(r);return wE.encodeByteArray(t,!0)},Hc=function(r){return cb(r).replace(/\./g,"")},RE=function(r){try{return wE.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function hb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fb=()=>hb().__FIREBASE_DEFAULTS__,db=()=>{if(typeof process>"u"||typeof j_>"u")return;const r=j_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},mb=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&RE(r[1]);return t&&JSON.parse(t)},hh=()=>{try{return ob()||fb()||db()||mb()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},IE=r=>{var t,n;return(n=(t=hh())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[r]},gb=r=>{const t=IE(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},CE=()=>{var r;return(r=hh())===null||r===void 0?void 0:r.config},DE=r=>{var t;return(t=hh())===null||t===void 0?void 0:t[`_${r}`]};/**
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
 */class pb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function to(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function OE(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function yb(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Hc(JSON.stringify(n)),Hc(JSON.stringify(f)),""].join(".")}const Cl={};function _b(){const r={prod:[],emulator:[]};for(const t of Object.keys(Cl))Cl[t]?r.emulator.push(t):r.prod.push(t);return r}function vb(r){let t=document.getElementById(r),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),n=!0),{created:n,element:t}}let B_=!1;function NE(r,t){if(typeof window>"u"||typeof document>"u"||!to(window.location.host)||Cl[r]===t||Cl[r]||B_)return;Cl[r]=t;function n(C){return`__firebase__banner__${C}`}const s="__firebase__banner",u=_b().prod.length>0;function f(){const C=document.getElementById(s);C&&C.remove()}function m(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function p(C,B){C.setAttribute("width","24"),C.setAttribute("id",B),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function y(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{B_=!0,f()},C}function T(C,B){C.setAttribute("id",B),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function w(){const C=vb(s),B=n("text"),X=document.getElementById(B)||document.createElement("span"),nt=n("learnmore"),W=document.getElementById(nt)||document.createElement("a"),ft=n("preprendIcon"),et=document.getElementById(ft)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const ot=C.element;m(ot),T(W,nt);const Dt=y();p(et,ft),ot.append(et,X,W,Dt),document.body.appendChild(ot)}u?(X.innerText="Preview backend disconnected.",et.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(et.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,X.innerText="Preview backend running in this workspace."),X.setAttribute("id",B)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Eb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function Tb(){var r;const t=(r=hh())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ab(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ME(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Sb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bb(){const r=$e();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function wb(){return!Tb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function VE(){try{return typeof indexedDB=="object"}catch{return!1}}function PE(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;t(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){t(n)}})}function Rb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Ib="FirebaseError";class Gn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Ib,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bs.prototype.create)}}class Bs{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?Cb(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new Gn(o,m,s)}}function Cb(r,t){return r.replace(Db,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const Db=/\{\$([^}]+)}/g;function Ob(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function Lr(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=t[o];if(q_(u)&&q_(f)){if(!Lr(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function q_(r){return r!==null&&typeof r=="object"}/**
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
 */function Ql(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Al(r){const t={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");t[decodeURIComponent(o)]=decodeURIComponent(u)}}),t}function Sl(r){const t=r.indexOf("?");if(!t)return"";const n=r.indexOf("#",t);return r.substring(t,n>0?n:void 0)}function Nb(r,t){const n=new Mb(r,t);return n.subscribe.bind(n)}class Mb{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Vb(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=Ud),o.error===void 0&&(o.error=Ud),o.complete===void 0&&(o.complete=Ud);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vb(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function Ud(){}/**
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
 */const Pb=1e3,xb=2,kb=4*60*60*1e3,Ub=.5;function H_(r,t=Pb,n=xb){const s=t*Math.pow(n,r),o=Math.round(Ub*s*(Math.random()-.5)*2);return Math.min(kb,s+o)}/**
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
 */function on(r){return r&&r._delegate?r._delegate:r}class Hn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ns="[DEFAULT]";/**
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
 */class Lb{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new pb;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t?.identifier),o=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jb(t))try{this.getOrInitializeService({instanceIdentifier:Ns})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(t=Ns){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ns){return this.instances.has(t)}getOptions(t=Ns){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(t,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(t),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&t(f,o),()=>{u.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zb(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Ns){return this.component?this.component.multipleInstances?t:Ns:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zb(r){return r===Ns?void 0:r}function jb(r){return r.instantiationMode==="EAGER"}/**
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
 */class Bb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Lb(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Mt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Mt||(Mt={}));const qb={debug:Mt.DEBUG,verbose:Mt.VERBOSE,info:Mt.INFO,warn:Mt.WARN,error:Mt.ERROR,silent:Mt.SILENT},Hb=Mt.INFO,Fb={[Mt.DEBUG]:"log",[Mt.VERBOSE]:"log",[Mt.INFO]:"info",[Mt.WARN]:"warn",[Mt.ERROR]:"error"},Gb=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=Fb[t];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fh{constructor(t){this.name=t,this._logLevel=Hb,this._logHandler=Gb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Mt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?qb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Mt.DEBUG,...t),this._logHandler(this,Mt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Mt.VERBOSE,...t),this._logHandler(this,Mt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Mt.INFO,...t),this._logHandler(this,Mt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Mt.WARN,...t),this._logHandler(this,Mt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Mt.ERROR,...t),this._logHandler(this,Mt.ERROR,...t)}}const Kb=(r,t)=>t.some(n=>r instanceof n);let F_,G_;function Qb(){return F_||(F_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yb(){return G_||(G_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xE=new WeakMap,Wd=new WeakMap,kE=new WeakMap,Ld=new WeakMap,Rm=new WeakMap;function Xb(r){const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(Pr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&xE.set(n,r)}).catch(()=>{}),Rm.set(t,r),t}function $b(r){if(Wd.has(r))return;const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});Wd.set(r,t)}let Jd={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return Wd.get(r);if(t==="objectStoreNames")return r.objectStoreNames||kE.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Zb(r){Jd=r(Jd)}function Wb(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(zd(this),t,...n);return kE.set(s,t.sort?t.sort():[t]),Pr(s)}:Yb().includes(r)?function(...t){return r.apply(zd(this),t),Pr(xE.get(this))}:function(...t){return Pr(r.apply(zd(this),t))}}function Jb(r){return typeof r=="function"?Wb(r):(r instanceof IDBTransaction&&$b(r),Kb(r,Qb())?new Proxy(r,Jd):r)}function Pr(r){if(r instanceof IDBRequest)return Xb(r);if(Ld.has(r))return Ld.get(r);const t=Jb(r);return t!==r&&(Ld.set(r,t),Rm.set(t,r)),t}const zd=r=>Rm.get(r);function UE(r,t,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,t),m=Pr(f);return s&&f.addEventListener("upgradeneeded",p=>{s(Pr(f.result),p.oldVersion,p.newVersion,Pr(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const t1=["get","getKey","getAll","getAllKeys","count"],e1=["put","add","delete","clear"],jd=new Map;function K_(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(jd.get(t))return jd.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=e1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||t1.includes(n)))return;const u=async function(f,...m){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&p.done]))[0]};return jd.set(t,u),u}Zb(r=>({...r,get:(t,n,s)=>K_(t,n)||r.get(t,n,s),has:(t,n)=>!!K_(t,n)||r.has(t,n)}));/**
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
 */class n1{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(i1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function i1(r){const t=r.getComponent();return t?.type==="VERSION"}const tm="@firebase/app",Q_="0.13.2";/**
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
 */const Xi=new fh("@firebase/app"),r1="@firebase/app-compat",s1="@firebase/analytics-compat",a1="@firebase/analytics",o1="@firebase/app-check-compat",l1="@firebase/app-check",u1="@firebase/auth",c1="@firebase/auth-compat",h1="@firebase/database",f1="@firebase/data-connect",d1="@firebase/database-compat",m1="@firebase/functions",g1="@firebase/functions-compat",p1="@firebase/installations",y1="@firebase/installations-compat",_1="@firebase/messaging",v1="@firebase/messaging-compat",E1="@firebase/performance",T1="@firebase/performance-compat",A1="@firebase/remote-config",S1="@firebase/remote-config-compat",b1="@firebase/storage",w1="@firebase/storage-compat",R1="@firebase/firestore",I1="@firebase/ai",C1="@firebase/firestore-compat",D1="firebase",O1="11.10.0";/**
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
 */const em="[DEFAULT]",N1={[tm]:"fire-core",[r1]:"fire-core-compat",[a1]:"fire-analytics",[s1]:"fire-analytics-compat",[l1]:"fire-app-check",[o1]:"fire-app-check-compat",[u1]:"fire-auth",[c1]:"fire-auth-compat",[h1]:"fire-rtdb",[f1]:"fire-data-connect",[d1]:"fire-rtdb-compat",[m1]:"fire-fn",[g1]:"fire-fn-compat",[p1]:"fire-iid",[y1]:"fire-iid-compat",[_1]:"fire-fcm",[v1]:"fire-fcm-compat",[E1]:"fire-perf",[T1]:"fire-perf-compat",[A1]:"fire-rc",[S1]:"fire-rc-compat",[b1]:"fire-gcs",[w1]:"fire-gcs-compat",[R1]:"fire-fst",[C1]:"fire-fst-compat",[I1]:"fire-vertex","fire-js":"fire-js",[D1]:"fire-js-all"};/**
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
 */const Fc=new Map,M1=new Map,nm=new Map;function Y_(r,t){try{r.container.addComponent(t)}catch(n){Xi.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function pi(r){const t=r.name;if(nm.has(t))return Xi.debug(`There were multiple attempts to register component ${t}.`),!1;nm.set(t,r);for(const n of Fc.values())Y_(n,r);for(const n of M1.values())Y_(n,r);return!0}function qs(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function Nn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const V1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xr=new Bs("app","Firebase",V1);/**
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
 */class P1{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
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
 */const eo=O1;function LE(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s=Object.assign({name:em,automaticDataCollectionEnabled:!0},t),o=s.name;if(typeof o!="string"||!o)throw xr.create("bad-app-name",{appName:String(o)});if(n||(n=CE()),!n)throw xr.create("no-options");const u=Fc.get(o);if(u){if(Lr(n,u.options)&&Lr(s,u.config))return u;throw xr.create("duplicate-app",{appName:o})}const f=new Bb(o);for(const p of nm.values())f.addComponent(p);const m=new P1(n,s,f);return Fc.set(o,m),m}function Im(r=em){const t=Fc.get(r);if(!t&&r===em&&CE())return LE();if(!t)throw xr.create("no-app",{appName:r});return t}function Pn(r,t,n){var s;let o=(s=N1[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const u=o.match(/\s|\//),f=t.match(/\s|\//);if(u||f){const m=[`Unable to register library "${o}" with version "${t}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&m.push("and"),f&&m.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Xi.warn(m.join(" "));return}pi(new Hn(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const x1="firebase-heartbeat-database",k1=1,kl="firebase-heartbeat-store";let Bd=null;function zE(){return Bd||(Bd=UE(x1,k1,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(kl)}catch(n){console.warn(n)}}}}).catch(r=>{throw xr.create("idb-open",{originalErrorMessage:r.message})})),Bd}async function U1(r){try{const n=(await zE()).transaction(kl),s=await n.objectStore(kl).get(jE(r));return await n.done,s}catch(t){if(t instanceof Gn)Xi.warn(t.message);else{const n=xr.create("idb-get",{originalErrorMessage:t?.message});Xi.warn(n.message)}}}async function X_(r,t){try{const s=(await zE()).transaction(kl,"readwrite");await s.objectStore(kl).put(t,jE(r)),await s.done}catch(n){if(n instanceof Gn)Xi.warn(n.message);else{const s=xr.create("idb-set",{originalErrorMessage:n?.message});Xi.warn(s.message)}}}function jE(r){return`${r.name}!${r.options.appId}`}/**
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
 */const L1=1024,z1=30;class j1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new q1(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=$_();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>z1){const f=H1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Xi.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$_(),{heartbeatsToSend:s,unsentEntries:o}=B1(this._heartbeatsCache.heartbeats),u=Hc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Xi.warn(n),""}}}function $_(){return new Date().toISOString().substring(0,10)}function B1(r,t=L1){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),Z_(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Z_(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class q1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return VE()?PE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await U1(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return X_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return X_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Z_(r){return Hc(JSON.stringify({version:2,heartbeats:r})).length}function H1(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
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
 */function F1(r){pi(new Hn("platform-logger",t=>new n1(t),"PRIVATE")),pi(new Hn("heartbeat",t=>new j1(t),"PRIVATE")),Pn(tm,Q_,r),Pn(tm,Q_,"esm2017"),Pn("fire-js","")}F1("");var G1="firebase",K1="11.10.0";/**
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
 */Pn(G1,K1,"app");const BE="@firebase/installations",Cm="0.6.18";/**
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
 */const qE=1e4,HE=`w:${Cm}`,FE="FIS_v2",Q1="https://firebaseinstallations.googleapis.com/v1",Y1=60*60*1e3,X1="installations",$1="Installations";/**
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
 */const Z1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},xs=new Bs(X1,$1,Z1);function GE(r){return r instanceof Gn&&r.code.includes("request-failed")}/**
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
 */function KE({projectId:r}){return`${Q1}/projects/${r}/installations`}function QE(r){return{token:r.token,requestStatus:2,expiresIn:J1(r.expiresIn),creationTime:Date.now()}}async function YE(r,t){const s=(await t.json()).error;return xs.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function XE({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function W1(r,{refreshToken:t}){const n=XE(r);return n.append("Authorization",tw(t)),n}async function $E(r){const t=await r();return t.status>=500&&t.status<600?r():t}function J1(r){return Number(r.replace("s","000"))}function tw(r){return`${FE} ${r}`}/**
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
 */async function ew({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const s=KE(r),o=XE(r),u=t.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:FE,appId:r.appId,sdkVersion:HE},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await $E(()=>fetch(s,m));if(p.ok){const y=await p.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:QE(y.authToken)}}else throw await YE("Create Installation",p)}/**
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
 */function ZE(r){return new Promise(t=>{setTimeout(t,r)})}/**
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
 */function nw(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const iw=/^[cdef][\w-]{21}$/,im="";function rw(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=sw(r);return iw.test(n)?n:im}catch{return im}}function sw(r){return nw(r).substr(0,22)}/**
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
 */function dh(r){return`${r.appName}!${r.appId}`}/**
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
 */const WE=new Map;function JE(r,t){const n=dh(r);tT(n,t),aw(n,t)}function tT(r,t){const n=WE.get(r);if(n)for(const s of n)s(t)}function aw(r,t){const n=ow();n&&n.postMessage({key:r,fid:t}),lw()}let Ms=null;function ow(){return!Ms&&"BroadcastChannel"in self&&(Ms=new BroadcastChannel("[Firebase] FID Change"),Ms.onmessage=r=>{tT(r.data.key,r.data.fid)}),Ms}function lw(){WE.size===0&&Ms&&(Ms.close(),Ms=null)}/**
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
 */const uw="firebase-installations-database",cw=1,ks="firebase-installations-store";let qd=null;function Dm(){return qd||(qd=UE(uw,cw,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(ks)}}})),qd}async function Gc(r,t){const n=dh(r),o=(await Dm()).transaction(ks,"readwrite"),u=o.objectStore(ks),f=await u.get(n);return await u.put(t,n),await o.done,(!f||f.fid!==t.fid)&&JE(r,t.fid),t}async function eT(r){const t=dh(r),s=(await Dm()).transaction(ks,"readwrite");await s.objectStore(ks).delete(t),await s.done}async function mh(r,t){const n=dh(r),o=(await Dm()).transaction(ks,"readwrite"),u=o.objectStore(ks),f=await u.get(n),m=t(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&JE(r,m.fid),m}/**
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
 */async function Om(r){let t;const n=await mh(r.appConfig,s=>{const o=hw(s),u=fw(r,o);return t=u.registrationPromise,u.installationEntry});return n.fid===im?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function hw(r){const t=r||{fid:rw(),registrationStatus:0};return nT(t)}function fw(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(xs.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=dw(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:mw(r)}:{installationEntry:t}}async function dw(r,t){try{const n=await ew(r,t);return Gc(r.appConfig,n)}catch(n){throw GE(n)&&n.customData.serverCode===409?await eT(r.appConfig):await Gc(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function mw(r){let t=await W_(r.appConfig);for(;t.registrationStatus===1;)await ZE(100),t=await W_(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Om(r);return s||n}return t}function W_(r){return mh(r,t=>{if(!t)throw xs.create("installation-not-found");return nT(t)})}function nT(r){return gw(r)?{fid:r.fid,registrationStatus:0}:r}function gw(r){return r.registrationStatus===1&&r.registrationTime+qE<Date.now()}/**
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
 */async function pw({appConfig:r,heartbeatServiceProvider:t},n){const s=yw(r,n),o=W1(r,n),u=t.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:HE,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await $E(()=>fetch(s,m));if(p.ok){const y=await p.json();return QE(y)}else throw await YE("Generate Auth Token",p)}function yw(r,{fid:t}){return`${KE(r)}/${t}/authTokens:generate`}/**
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
 */async function Nm(r,t=!1){let n;const s=await mh(r.appConfig,u=>{if(!iT(u))throw xs.create("not-registered");const f=u.authToken;if(!t&&Ew(f))return u;if(f.requestStatus===1)return n=_w(r,t),u;{if(!navigator.onLine)throw xs.create("app-offline");const m=Aw(u);return n=vw(r,m),m}});return n?await n:s.authToken}async function _w(r,t){let n=await J_(r.appConfig);for(;n.authToken.requestStatus===1;)await ZE(100),n=await J_(r.appConfig);const s=n.authToken;return s.requestStatus===0?Nm(r,t):s}function J_(r){return mh(r,t=>{if(!iT(t))throw xs.create("not-registered");const n=t.authToken;return Sw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function vw(r,t){try{const n=await pw(r,t),s=Object.assign(Object.assign({},t),{authToken:n});return await Gc(r.appConfig,s),n}catch(n){if(GE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await eT(r.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Gc(r.appConfig,s)}throw n}}function iT(r){return r!==void 0&&r.registrationStatus===2}function Ew(r){return r.requestStatus===2&&!Tw(r)}function Tw(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+Y1}function Aw(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function Sw(r){return r.requestStatus===1&&r.requestTime+qE<Date.now()}/**
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
 */async function bw(r){const t=r,{installationEntry:n,registrationPromise:s}=await Om(t);return s?s.catch(console.error):Nm(t).catch(console.error),n.fid}/**
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
 */async function ww(r,t=!1){const n=r;return await Rw(n),(await Nm(n,t)).token}async function Rw(r){const{registrationPromise:t}=await Om(r);t&&await t}/**
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
 */function Iw(r){if(!r||!r.options)throw Hd("App Configuration");if(!r.name)throw Hd("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw Hd(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Hd(r){return xs.create("missing-app-config-values",{valueName:r})}/**
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
 */const rT="installations",Cw="installations-internal",Dw=r=>{const t=r.getProvider("app").getImmediate(),n=Iw(t),s=qs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Ow=r=>{const t=r.getProvider("app").getImmediate(),n=qs(t,rT).getImmediate();return{getId:()=>bw(n),getToken:o=>ww(n,o)}};function Nw(){pi(new Hn(rT,Dw,"PUBLIC")),pi(new Hn(Cw,Ow,"PRIVATE"))}Nw();Pn(BE,Cm);Pn(BE,Cm,"esm2017");/**
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
 */const Kc="analytics",Mw="firebase_id",Vw="origin",Pw=60*1e3,xw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Mm="https://www.googletagmanager.com/gtag/js";/**
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
 */const an=new fh("@firebase/analytics");/**
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
 */const kw={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},yn=new Bs("analytics","Analytics",kw);/**
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
 */function Uw(r){if(!r.startsWith(Mm)){const t=yn.create("invalid-gtag-resource",{gtagURL:r});return an.warn(t.message),""}return r}function sT(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function Lw(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function zw(r,t){const n=Lw("firebase-js-sdk-policy",{createScriptURL:Uw}),s=document.createElement("script"),o=`${Mm}?l=${r}&id=${t}`;s.src=n?n?.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function jw(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function Bw(r,t,n,s,o,u){const f=s[o];try{if(f)await t[f];else{const p=(await sT(n)).find(y=>y.measurementId===o);p&&await t[p.appId]}}catch(m){an.error(m)}r("config",o,u)}async function qw(r,t,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await sT(n);for(const p of f){const y=m.find(w=>w.measurementId===p),T=y&&t[y.appId];if(T)u.push(T);else{u=[];break}}}u.length===0&&(u=Object.values(t)),await Promise.all(u),r("event",s,o||{})}catch(u){an.error(u)}}function Hw(r,t,n,s){async function o(u,...f){try{if(u==="event"){const[m,p]=f;await qw(r,t,n,m,p)}else if(u==="config"){const[m,p]=f;await Bw(r,t,n,s,m,p)}else if(u==="consent"){const[m,p]=f;r("consent",m,p)}else if(u==="get"){const[m,p,y]=f;r("get",m,p,y)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){an.error(m)}}return o}function Fw(r,t,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=Hw(u,r,t,n),{gtagCore:u,wrappedGtag:window[o]}}function Gw(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Mm)&&n.src.includes(r))return n;return null}/**
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
 */const Kw=30,Qw=1e3;class Yw{constructor(t={},n=Qw){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const aT=new Yw;function Xw(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function $w(r){var t;const{appId:n,apiKey:s}=r,o={method:"GET",headers:Xw(s)},u=xw.replace("{app-id}",n),f=await fetch(u,o);if(f.status!==200&&f.status!==304){let m="";try{const p=await f.json();!((t=p.error)===null||t===void 0)&&t.message&&(m=p.error.message)}catch{}throw yn.create("config-fetch-failed",{httpStatus:f.status,responseMessage:m})}return f.json()}async function Zw(r,t=aT,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw yn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw yn.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new tR;return setTimeout(async()=>{m.abort()},Pw),oT({appId:s,apiKey:o,measurementId:u},f,m,t)}async function oT(r,{throttleEndTimeMillis:t,backoffCount:n},s,o=aT){var u;const{appId:f,measurementId:m}=r;try{await Ww(s,t)}catch(p){if(m)return an.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:f,measurementId:m};throw p}try{const p=await $w(r);return o.deleteThrottleMetadata(f),p}catch(p){const y=p;if(!Jw(y)){if(o.deleteThrottleMetadata(f),m)return an.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${y?.message}]`),{appId:f,measurementId:m};throw p}const T=Number((u=y?.customData)===null||u===void 0?void 0:u.httpStatus)===503?H_(n,o.intervalMillis,Kw):H_(n,o.intervalMillis),w={throttleEndTimeMillis:Date.now()+T,backoffCount:n+1};return o.setThrottleMetadata(f,w),an.debug(`Calling attemptFetch again in ${T} millis`),oT(r,w,s,o)}}function Ww(r,t){return new Promise((n,s)=>{const o=Math.max(t-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(yn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Jw(r){if(!(r instanceof Gn)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class tR{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function eR(r,t,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await t,f=Object.assign(Object.assign({},s),{send_to:u});r("event",n,f)}}/**
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
 */async function nR(){if(VE())try{await PE()}catch(r){return an.warn(yn.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return an.warn(yn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function iR(r,t,n,s,o,u,f){var m;const p=Zw(r);p.then(B=>{n[B.measurementId]=B.appId,r.options.measurementId&&B.measurementId!==r.options.measurementId&&an.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${B.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(B=>an.error(B)),t.push(p);const y=nR().then(B=>{if(B)return s.getId()}),[T,w]=await Promise.all([p,y]);Gw(u)||zw(u,T.measurementId),o("js",new Date);const C=(m=f?.config)!==null&&m!==void 0?m:{};return C[Vw]="firebase",C.update=!0,w!=null&&(C[Mw]=w),o("config",T.measurementId,C),T.measurementId}/**
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
 */class rR{constructor(t){this.app=t}_delete(){return delete Dl[this.app.options.appId],Promise.resolve()}}let Dl={},tv=[];const ev={};let Fd="dataLayer",sR="gtag",nv,lT,iv=!1;function aR(){const r=[];if(ME()&&r.push("This is a browser extension environment."),Rb()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=yn.create("invalid-analytics-context",{errorInfo:t});an.warn(n.message)}}function oR(r,t,n){aR();const s=r.options.appId;if(!s)throw yn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)an.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw yn.create("no-api-key");if(Dl[s]!=null)throw yn.create("already-exists",{id:s});if(!iv){jw(Fd);const{wrappedGtag:u,gtagCore:f}=Fw(Dl,tv,ev,Fd,sR);lT=u,nv=f,iv=!0}return Dl[s]=iR(r,tv,ev,t,nv,Fd,n),new rR(r)}function lR(r=Im()){r=on(r);const t=qs(r,Kc);return t.isInitialized()?t.getImmediate():uR(r)}function uR(r,t={}){const n=qs(r,Kc);if(n.isInitialized()){const o=n.getImmediate();if(Lr(t,n.getOptions()))return o;throw yn.create("already-initialized")}return n.initialize({options:t})}function cR(r,t,n,s){r=on(r),eR(lT,Dl[r.app.options.appId],t,n,s).catch(o=>an.error(o))}const rv="@firebase/analytics",sv="0.10.17";function hR(){pi(new Hn(Kc,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return oR(s,o,n)},"PUBLIC")),pi(new Hn("analytics-internal",r,"PRIVATE")),Pn(rv,sv),Pn(rv,sv,"esm2017");function r(t){try{const n=t.getProvider(Kc).getImmediate();return{logEvent:(s,o,u)=>cR(n,s,o,u)}}catch(n){throw yn.create("interop-component-reg-failed",{reason:n})}}}hR();function Vm(r,t){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&t.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function uT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fR=uT,cT=new Bs("auth","Firebase",uT());/**
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
 */const Qc=new fh("@firebase/auth");function dR(r,...t){Qc.logLevel<=Mt.WARN&&Qc.warn(`Auth (${eo}): ${r}`,...t)}function Vc(r,...t){Qc.logLevel<=Mt.ERROR&&Qc.error(`Auth (${eo}): ${r}`,...t)}/**
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
 */function Fn(r,...t){throw Pm(r,...t)}function ci(r,...t){return Pm(r,...t)}function hT(r,t,n){const s=Object.assign(Object.assign({},fR()),{[t]:n});return new Bs("auth","Firebase",s).create(t,{appName:r.name})}function Qi(r){return hT(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pm(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return cT.create(r,...t)}function yt(r,t,...n){if(!r)throw Pm(t,...n)}function Gi(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Vc(t),new Error(t)}function $i(r,t){r||Gi(t)}/**
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
 */function rm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function mR(){return av()==="http:"||av()==="https:"}function av(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function gR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mR()||ME()||"connection"in navigator)?navigator.onLine:!0}function pR(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Yl{constructor(t,n){this.shortDelay=t,this.longDelay=n,$i(n>t,"Short delay should be less than long delay!"),this.isMobile=Eb()||Sb()}get(){return gR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xm(r,t){$i(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class fT{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const _R=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vR=new Yl(3e4,6e4);function Kr(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function Qr(r,t,n,s,o={}){return dT(r,o,async()=>{let u={},f={};s&&(t==="GET"?f=s:u={body:JSON.stringify(s)});const m=Ql(Object.assign({key:r.config.apiKey},f)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:t,headers:p},u);return Ab()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&to(r.emulatorConfig.host)&&(y.credentials="include"),fT.fetch()(await mT(r,r.config.apiHost,n,m),y)})}async function dT(r,t,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},yR),t);try{const o=new TR(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Ic(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[p,y]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ic(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw Ic(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw Ic(r,"user-disabled",f);const T=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw hT(r,T,y);Fn(r,T)}}catch(o){if(o instanceof Gn)throw o;Fn(r,"network-request-failed",{message:String(o)})}}async function Xl(r,t,n,s,o={}){const u=await Qr(r,t,n,s,o);return"mfaPendingCredential"in u&&Fn(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function mT(r,t,n,s){const o=`${t}${n}?${s}`,u=r,f=u.config.emulator?xm(r.config,o):`${r.config.apiScheme}://${o}`;return _R.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function ER(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class TR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(ci(this.auth,"network-request-failed")),vR.get())})}}function Ic(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=ci(r,t,s);return o.customData._tokenResponse=n,o}function ov(r){return r!==void 0&&r.enterprise!==void 0}class AR{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return ER(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function SR(r,t){return Qr(r,"GET","/v2/recaptchaConfig",Kr(r,t))}/**
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
 */async function bR(r,t){return Qr(r,"POST","/v1/accounts:delete",t)}async function Yc(r,t){return Qr(r,"POST","/v1/accounts:lookup",t)}/**
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
 */function Ol(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function wR(r,t=!1){const n=on(r),s=await n.getIdToken(t),o=km(s);yt(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u?.sign_in_provider;return{claims:o,token:s,authTime:Ol(Gd(o.auth_time)),issuedAtTime:Ol(Gd(o.iat)),expirationTime:Ol(Gd(o.exp)),signInProvider:f||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Gd(r){return Number(r)*1e3}function km(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return Vc("JWT malformed, contained fewer than 3 sections"),null;try{const o=RE(n);return o?JSON.parse(o):(Vc("Failed to decode base64 JWT payload"),null)}catch(o){return Vc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function lv(r){const t=km(r);return yt(t,"internal-error"),yt(typeof t.exp<"u","internal-error"),yt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ul(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof Gn&&RR(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function RR({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class IR{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ol(this.lastLoginAt),this.creationTime=Ol(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xc(r){var t;const n=r.auth,s=await r.getIdToken(),o=await Ul(r,Yc(n,{idToken:s}));yt(o?.users.length,n,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const f=!((t=u.providerUserInfo)===null||t===void 0)&&t.length?gT(u.providerUserInfo):[],m=DR(r.providerData,f),p=r.isAnonymous,y=!(r.email&&u.passwordHash)&&!m?.length,T=p?y:!1,w={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new sm(u.createdAt,u.lastLoginAt),isAnonymous:T};Object.assign(r,w)}async function CR(r){const t=on(r);await Xc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function DR(r,t){return[...r.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function gT(r){return r.map(t=>{var{providerId:n}=t,s=Vm(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function OR(r,t){const n=await dT(r,{},async()=>{const s=Ql({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await mT(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:m,body:s};return r.emulatorConfig&&to(r.emulatorConfig.host)&&(p.credentials="include"),fT.fetch()(f,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function NR(r,t){return Qr(r,"POST","/v2/accounts:revokeToken",Kr(r,t))}/**
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
 */class Ga{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){yt(t.idToken,"internal-error"),yt(typeof t.idToken<"u","internal-error"),yt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):lv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){yt(t.length!==0,"internal-error");const n=lv(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(yt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await OR(t,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new Ga;return s&&(yt(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(yt(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),u&&(yt(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ga,this.toJSON())}_performRefresh(){return Gi("not implemented")}}/**
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
 */function Cr(r,t){yt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Bn{constructor(t){var{uid:n,auth:s,stsTokenManager:o}=t,u=Vm(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new IR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new sm(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(t){const n=await Ul(this,this.stsTokenManager.getToken(this.auth,t));return yt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return wR(this,t)}reload(){return CR(this)}_assign(t){this!==t&&(yt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Bn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){yt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await Xc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nn(this.auth.app))return Promise.reject(Qi(this.auth));const t=await this.getIdToken();return await Ul(this,bR(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,o,u,f,m,p,y,T;const w=(s=n.displayName)!==null&&s!==void 0?s:void 0,C=(o=n.email)!==null&&o!==void 0?o:void 0,B=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,X=(f=n.photoURL)!==null&&f!==void 0?f:void 0,nt=(m=n.tenantId)!==null&&m!==void 0?m:void 0,W=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,ft=(y=n.createdAt)!==null&&y!==void 0?y:void 0,et=(T=n.lastLoginAt)!==null&&T!==void 0?T:void 0,{uid:ot,emailVerified:Dt,isAnonymous:pt,providerData:Rt,stsTokenManager:M}=n;yt(ot&&M,t,"internal-error");const S=Ga.fromJSON(this.name,M);yt(typeof ot=="string",t,"internal-error"),Cr(w,t.name),Cr(C,t.name),yt(typeof Dt=="boolean",t,"internal-error"),yt(typeof pt=="boolean",t,"internal-error"),Cr(B,t.name),Cr(X,t.name),Cr(nt,t.name),Cr(W,t.name),Cr(ft,t.name),Cr(et,t.name);const R=new Bn({uid:ot,auth:t,email:C,emailVerified:Dt,displayName:w,isAnonymous:pt,photoURL:X,phoneNumber:B,tenantId:nt,stsTokenManager:S,createdAt:ft,lastLoginAt:et});return Rt&&Array.isArray(Rt)&&(R.providerData=Rt.map(N=>Object.assign({},N))),W&&(R._redirectEventId=W),R}static async _fromIdTokenResponse(t,n,s=!1){const o=new Ga;o.updateFromServerResponse(n);const u=new Bn({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await Xc(u),u}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];yt(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?gT(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!u?.length,m=new Ga;m.updateFromIdToken(s);const p=new Bn({uid:o.localId,auth:t,stsTokenManager:m,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new sm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(p,y),p}}/**
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
 */const uv=new Map;function Ki(r){$i(r instanceof Function,"Expected a class definition");let t=uv.get(r);return t?($i(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,uv.set(r,t),t)}/**
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
 */class pT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}pT.type="NONE";const cv=pT;/**
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
 */function Pc(r,t,n){return`firebase:${r}:${t}:${n}`}class Ka{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Pc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Pc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Yc(this.auth,{idToken:t}).catch(()=>{});return n?Bn._fromGetAccountInfoResponse(this.auth,n,t):null}return Bn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Ka(Ki(cv),t,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||Ki(cv);const f=Pc(s,t.config.apiKey,t.name);let m=null;for(const y of n)try{const T=await y._get(f);if(T){let w;if(typeof T=="string"){const C=await Yc(t,{idToken:T}).catch(()=>{});if(!C)break;w=await Bn._fromGetAccountInfoResponse(t,C,T)}else w=Bn._fromJSON(t,T);y!==u&&(m=w),u=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new Ka(u,t,s):(u=p[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new Ka(u,t,s))}}/**
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
 */function hv(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ET(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(yT(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(AT(t))return"Blackberry";if(ST(t))return"Webos";if(_T(t))return"Safari";if((t.includes("chrome/")||vT(t))&&!t.includes("edge/"))return"Chrome";if(TT(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function yT(r=$e()){return/firefox\//i.test(r)}function _T(r=$e()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function vT(r=$e()){return/crios\//i.test(r)}function ET(r=$e()){return/iemobile/i.test(r)}function TT(r=$e()){return/android/i.test(r)}function AT(r=$e()){return/blackberry/i.test(r)}function ST(r=$e()){return/webos/i.test(r)}function Um(r=$e()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function MR(r=$e()){var t;return Um(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function VR(){return bb()&&document.documentMode===10}function bT(r=$e()){return Um(r)||TT(r)||ST(r)||AT(r)||/windows phone/i.test(r)||ET(r)}/**
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
 */function wT(r,t=[]){let n;switch(r){case"Browser":n=hv($e());break;case"Worker":n=`${hv($e())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${eo}/${s}`}/**
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
 */class PR{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=u=>new Promise((f,m)=>{try{const p=t(u);f(p)}catch(p){m(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function xR(r,t={}){return Qr(r,"GET","/v2/passwordPolicy",Kr(r,t))}/**
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
 */const kR=6;class UR{constructor(t){var n,s,o,u;const f=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:kR,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=t.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,s,o,u,f,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,p),this.validatePasswordCharacterOptions(t,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(f=p.containsNumericCharacter)!==null&&f!==void 0?f:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
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
 */class LR{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fv(this),this.idTokenSubscription=new fv(this),this.beforeStateQueue=new PR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ki(n)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await Ka.create(this,t),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Yc(this,{idToken:t}),s=await Bn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Nn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,m=o?._redirectEventId,p=await this.tryRedirectSignIn(t);(!f||f===m)&&p?.user&&(o=p.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return yt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Xc(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=pR()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Nn(this.app))return Promise.reject(Qi(this));const n=t?on(t):null;return n&&yt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&yt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Nn(this.app)?Promise.reject(Qi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Nn(this.app)?Promise.reject(Qi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ki(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await xR(this),n=new UR(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Bs("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await NR(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ki(t)||this._popupRedirectResolver;yt(n,this,"argument-error"),this.redirectPersistenceManager=await Ka.create(this,[Ki(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(yt(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const p=t.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=t.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return yt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=wT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var t;if(Nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n?.error&&dR(`Error while retrieving App Check token: ${n.error}`),n?.token}}function Hs(r){return on(r)}class fv{constructor(t){this.auth=t,this.observer=null,this.addObserver=Nb(n=>this.observer=n)}get next(){return yt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let gh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zR(r){gh=r}function RT(r){return gh.loadJS(r)}function jR(){return gh.recaptchaEnterpriseScript}function BR(){return gh.gapiScript}function qR(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class HR{constructor(){this.enterprise=new FR}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class FR{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const GR="recaptcha-enterprise",IT="NO_RECAPTCHA";class KR{constructor(t){this.type=GR,this.auth=Hs(t)}async verify(t="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{SR(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new AR(p);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,f(y.siteKey)}}).catch(p=>{m(p)})})}function o(u,f,m){const p=window.grecaptcha;ov(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:t}).then(y=>{f(y)}).catch(()=>{f(IT)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new HR().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!n&&ov(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let p=jR();p.length!==0&&(p+=m),RT(p).then(()=>{o(m,u,f)}).catch(y=>{f(y)})}}).catch(m=>{f(m)})})}}async function dv(r,t,n,s=!1,o=!1){const u=new KR(r);let f;if(o)f=IT;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const m=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function am(r,t,n,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await dv(r,t,n,n==="getOobCode");return s(r,f)}else return s(r,t).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await dv(r,t,n,n==="getOobCode");return s(r,m)}else return Promise.reject(f)})}/**
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
 */function QR(r,t){const n=qs(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(Lr(u,t??{}))return o;Fn(o,"already-initialized")}return n.initialize({options:t})}function YR(r,t){const n=t?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Ki);t?.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t?.popupRedirectResolver)}function XR(r,t,n){const s=Hs(r);yt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,u=CT(t),{host:f,port:m}=$R(t),p=m===null?"":`:${m}`,y={url:`${u}//${f}${p}/`},T=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){yt(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),yt(Lr(y,s.config.emulator)&&Lr(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,to(f)?(OE(`${u}//${f}${p}`),NE("Auth",!0)):ZR()}function CT(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function $R(r){const t=CT(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:mv(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:mv(f)}}}function mv(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function ZR(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Lm{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Gi("not implemented")}_getIdTokenResponse(t){return Gi("not implemented")}_linkToIdToken(t,n){return Gi("not implemented")}_getReauthenticationResolver(t){return Gi("not implemented")}}async function WR(r,t){return Qr(r,"POST","/v1/accounts:signUp",t)}/**
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
 */async function JR(r,t){return Xl(r,"POST","/v1/accounts:signInWithPassword",Kr(r,t))}/**
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
 */async function tI(r,t){return Xl(r,"POST","/v1/accounts:signInWithEmailLink",Kr(r,t))}async function eI(r,t){return Xl(r,"POST","/v1/accounts:signInWithEmailLink",Kr(r,t))}/**
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
 */class Ll extends Lm{constructor(t,n,s,o=null){super("password",s),this._email=t,this._password=n,this._tenantId=o}static _fromEmailAndPassword(t,n){return new Ll(t,n,"password")}static _fromEmailAndCode(t,n,s=null){return new Ll(t,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return am(t,n,"signInWithPassword",JR);case"emailLink":return tI(t,{email:this._email,oobCode:this._password});default:Fn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return am(t,s,"signUpPassword",WR);case"emailLink":return eI(t,{idToken:n,email:this._email,oobCode:this._password});default:Fn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Qa(r,t){return Xl(r,"POST","/v1/accounts:signInWithIdp",Kr(r,t))}/**
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
 */const nI="http://localhost";class Us extends Lm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Us(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o}=n,u=Vm(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new Us(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return Qa(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Qa(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Qa(t,n)}buildRequest(){const t={requestUri:nI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ql(n)}return t}}/**
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
 */function iI(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rI(r){const t=Al(Sl(r)).link,n=t?Al(Sl(t)).deep_link_id:null,s=Al(Sl(r)).deep_link_id;return(s?Al(Sl(s)).link:null)||s||n||t||r}class zm{constructor(t){var n,s,o,u,f,m;const p=Al(Sl(t)),y=(n=p.apiKey)!==null&&n!==void 0?n:null,T=(s=p.oobCode)!==null&&s!==void 0?s:null,w=iI((o=p.mode)!==null&&o!==void 0?o:null);yt(y&&T&&w,"argument-error"),this.apiKey=y,this.operation=w,this.code=T,this.continueUrl=(u=p.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(f=p.lang)!==null&&f!==void 0?f:null,this.tenantId=(m=p.tenantId)!==null&&m!==void 0?m:null}static parseLink(t){const n=rI(t);try{return new zm(n)}catch{return null}}}/**
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
 */class no{constructor(){this.providerId=no.PROVIDER_ID}static credential(t,n){return Ll._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const s=zm.parseLink(n);return yt(s,"argument-error"),Ll._fromEmailAndCode(t,s.code,s.tenantId)}}no.PROVIDER_ID="password";no.EMAIL_PASSWORD_SIGN_IN_METHOD="password";no.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class DT{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $l extends DT{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Dr extends $l{constructor(){super("facebook.com")}static credential(t){return Us._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Dr.credentialFromTaggedObject(t)}static credentialFromError(t){return Dr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Dr.credential(t.oauthAccessToken)}catch{return null}}}Dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dr.PROVIDER_ID="facebook.com";/**
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
 */class Or extends $l{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Us._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Or.credentialFromTaggedObject(t)}static credentialFromError(t){return Or.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Or.credential(n,s)}catch{return null}}}Or.GOOGLE_SIGN_IN_METHOD="google.com";Or.PROVIDER_ID="google.com";/**
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
 */class Nr extends $l{constructor(){super("github.com")}static credential(t){return Us._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Nr.credentialFromTaggedObject(t)}static credentialFromError(t){return Nr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Nr.credential(t.oauthAccessToken)}catch{return null}}}Nr.GITHUB_SIGN_IN_METHOD="github.com";Nr.PROVIDER_ID="github.com";/**
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
 */class Mr extends $l{constructor(){super("twitter.com")}static credential(t,n){return Us._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Mr.credentialFromTaggedObject(t)}static credentialFromError(t){return Mr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Mr.credential(n,s)}catch{return null}}}Mr.TWITTER_SIGN_IN_METHOD="twitter.com";Mr.PROVIDER_ID="twitter.com";/**
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
 */async function sI(r,t){return Xl(r,"POST","/v1/accounts:signUp",Kr(r,t))}/**
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
 */class Ls{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const u=await Bn._fromIdTokenResponse(t,s,o),f=gv(s);return new Ls({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=gv(s);return new Ls({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function gv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class $c extends Gn{constructor(t,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,$c.prototype),this.customData={appName:t.name,tenantId:(u=t.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new $c(t,n,s,o)}}function OT(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?$c._fromErrorAndOperation(r,u,t,s):u})}async function aI(r,t,n=!1){const s=await Ul(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return Ls._forOperation(r,"link",s)}/**
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
 */async function oI(r,t,n=!1){const{auth:s}=r;if(Nn(s.app))return Promise.reject(Qi(s));const o="reauthenticate";try{const u=await Ul(r,OT(s,o,t,r),n);yt(u.idToken,s,"internal-error");const f=km(u.idToken);yt(f,s,"internal-error");const{sub:m}=f;return yt(r.uid===m,s,"user-mismatch"),Ls._forOperation(r,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&Fn(s,"user-mismatch"),u}}/**
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
 */async function NT(r,t,n=!1){if(Nn(r.app))return Promise.reject(Qi(r));const s="signIn",o=await OT(r,s,t),u=await Ls._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}async function lI(r,t){return NT(Hs(r),t)}/**
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
 */async function MT(r){const t=Hs(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function uI(r,t,n){if(Nn(r.app))return Promise.reject(Qi(r));const s=Hs(r),f=await am(s,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",sI).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&MT(r),p}),m=await Ls._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(m.user),m}function cI(r,t,n){return Nn(r.app)?Promise.reject(Qi(r)):lI(on(r),no.credential(t,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&MT(r),s})}function hI(r,t,n,s){return on(r).onIdTokenChanged(t,n,s)}function fI(r,t,n){return on(r).beforeAuthStateChanged(t,n)}function dI(r){return on(r).signOut()}const Zc="__sak";/**
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
 */class VT{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zc,"1"),this.storage.removeItem(Zc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const mI=1e3,gI=10;class PT extends VT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bT(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,m,p)=>{this.notifyListeners(f,p)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);VR()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,gI):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},mI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}PT.type="LOCAL";const pI=PT;/**
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
 */class xT extends VT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}xT.type="SESSION";const kT=xT;/**
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
 */function yI(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ph{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new ph(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async y=>y(n.origin,u)),p=await yI(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ph.receivers=[];/**
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
 */function jm(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class _I{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,p)=>{const y=jm("",20);o.port1.start();const T=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(w){const C=w;if(C.data.eventId===y)switch(C.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(C.data.response);break;default:clearTimeout(T),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function hi(){return window}function vI(r){hi().location.href=r}/**
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
 */function UT(){return typeof hi().WorkerGlobalScope<"u"&&typeof hi().importScripts=="function"}async function EI(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TI(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function AI(){return UT()?self:null}/**
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
 */const LT="firebaseLocalStorageDb",SI=1,Wc="firebaseLocalStorage",zT="fbase_key";class Zl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yh(r,t){return r.transaction([Wc],t?"readwrite":"readonly").objectStore(Wc)}function bI(){const r=indexedDB.deleteDatabase(LT);return new Zl(r).toPromise()}function om(){const r=indexedDB.open(LT,SI);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Wc,{keyPath:zT})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Wc)?t(s):(s.close(),await bI(),t(await om()))})})}async function pv(r,t,n){const s=yh(r,!0).put({[zT]:t,value:n});return new Zl(s).toPromise()}async function wI(r,t){const n=yh(r,!1).get(t),s=await new Zl(n).toPromise();return s===void 0?null:s.value}function yv(r,t){const n=yh(r,!0).delete(t);return new Zl(n).toPromise()}const RI=800,II=3;class jT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await om(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>II)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return UT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ph._getInstance(AI()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await EI(),!this.activeServiceWorker)return;this.sender=new _I(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||TI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await om();return await pv(t,Zc,"1"),await yv(t,Zc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>pv(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>wI(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>yv(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=yh(o,!1).getAll();return new Zl(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jT.type="LOCAL";const CI=jT;new Yl(3e4,6e4);/**
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
 */function DI(r,t){return t?Ki(t):(yt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Bm extends Lm{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Qa(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Qa(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Qa(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function OI(r){return NT(r.auth,new Bm(r),r.bypassAuthState)}function NI(r){const{auth:t,user:n}=r;return yt(n,t,"internal-error"),oI(n,new Bm(r),r.bypassAuthState)}async function MI(r){const{auth:t,user:n}=r;return yt(n,t,"internal-error"),aI(n,new Bm(r),r.bypassAuthState)}/**
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
 */class BT{constructor(t,n,s,o,u=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=t;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return OI;case"linkViaPopup":case"linkViaRedirect":return MI;case"reauthViaPopup":case"reauthViaRedirect":return NI;default:Fn(this.auth,"internal-error")}}resolve(t){$i(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){$i(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const VI=new Yl(2e3,1e4);class Fa extends BT{constructor(t,n,s,o,u){super(t,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Fa.currentPopupAction&&Fa.currentPopupAction.cancel(),Fa.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return yt(t,this.auth,"internal-error"),t}async onExecution(){$i(this.filter.length===1,"Popup operations only handle one event");const t=jm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ci(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ci(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fa.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ci(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,VI.get())};t()}}Fa.currentPopupAction=null;/**
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
 */const PI="pendingRedirect",xc=new Map;class xI extends BT{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=xc.get(this.auth._key());if(!t){try{const s=await kI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}xc.set(this.auth._key(),t)}return this.bypassAuthState||xc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kI(r,t){const n=zI(t),s=LI(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function UI(r,t){xc.set(r._key(),t)}function LI(r){return Ki(r._redirectPersistence)}function zI(r){return Pc(PI,r.config.apiKey,r.name)}async function jI(r,t,n=!1){if(Nn(r.app))return Promise.reject(Qi(r));const s=Hs(r),o=DI(s,t),f=await new xI(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
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
 */const BI=10*60*1e3;class qI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!HI(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!qT(t)){const o=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(ci(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=BI&&this.cachedEventUids.clear(),this.cachedEventUids.has(_v(t))}saveEventToCache(t){this.cachedEventUids.add(_v(t)),this.lastProcessedEventTime=Date.now()}}function _v(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function qT({type:r,error:t}){return r==="unknown"&&t?.code==="auth/no-auth-event"}function HI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qT(r);default:return!1}}/**
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
 */async function FI(r,t={}){return Qr(r,"GET","/v1/projects",t)}/**
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
 */const GI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KI=/^https?/;async function QI(r){if(r.config.emulator)return;const{authorizedDomains:t}=await FI(r);for(const n of t)try{if(YI(n))return}catch{}Fn(r,"unauthorized-domain")}function YI(r){const t=rm(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!KI.test(n))return!1;if(GI.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const XI=new Yl(3e4,6e4);function vv(){const r=hi().___jsl;if(r?.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function $I(r){return new Promise((t,n)=>{var s,o,u;function f(){vv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{vv(),n(ci(r,"network-request-failed"))},timeout:XI.get()})}if(!((o=(s=hi().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((u=hi().gapi)===null||u===void 0)&&u.load)f();else{const m=qR("iframefcb");return hi()[m]=()=>{gapi.load?f():n(ci(r,"network-request-failed"))},RT(`${BR()}?onload=${m}`).catch(p=>n(p))}}).catch(t=>{throw kc=null,t})}let kc=null;function ZI(r){return kc=kc||$I(r),kc}/**
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
 */const WI=new Yl(5e3,15e3),JI="__/auth/iframe",tC="emulator/auth/iframe",eC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iC(r){const t=r.config;yt(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?xm(t,tC):`https://${r.config.authDomain}/${JI}`,s={apiKey:t.apiKey,appName:r.name,v:eo},o=nC.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Ql(s).slice(1)}`}async function rC(r){const t=await ZI(r),n=hi().gapi;return yt(n,r,"internal-error"),t.open({where:document.body,url:iC(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eC,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=ci(r,"network-request-failed"),m=hi().setTimeout(()=>{u(f)},WI.get());function p(){hi().clearTimeout(m),o(s)}s.ping(p).then(p,()=>{u(f)})}))}/**
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
 */const sC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aC=500,oC=600,lC="_blank",uC="http://localhost";class Ev{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cC(r,t,n,s=aC,o=oC){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const p=Object.assign(Object.assign({},sC),{width:s.toString(),height:o.toString(),top:u,left:f}),y=$e().toLowerCase();n&&(m=vT(y)?lC:n),yT(y)&&(t=t||uC,p.scrollbars="yes");const T=Object.entries(p).reduce((C,[B,X])=>`${C}${B}=${X},`,"");if(MR(y)&&m!=="_self")return hC(t||"",m),new Ev(null);const w=window.open(t||"",m,T);yt(w,r,"popup-blocked");try{w.focus()}catch{}return new Ev(w)}function hC(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const fC="__/auth/handler",dC="emulator/auth/handler",mC=encodeURIComponent("fac");async function Tv(r,t,n,s,o,u){yt(r.config.authDomain,r,"auth-domain-config-required"),yt(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:eo,eventId:o};if(t instanceof DT){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",Ob(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[T,w]of Object.entries({}))f[T]=w}if(t instanceof $l){const T=t.getScopes().filter(w=>w!=="");T.length>0&&(f.scopes=T.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const T of Object.keys(m))m[T]===void 0&&delete m[T];const p=await r._getAppCheckToken(),y=p?`#${mC}=${encodeURIComponent(p)}`:"";return`${gC(r)}?${Ql(m).slice(1)}${y}`}function gC({config:r}){return r.emulator?xm(r,dC):`https://${r.authDomain}/${fC}`}/**
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
 */const Kd="webStorageSupport";class pC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kT,this._completeRedirectFn=jI,this._overrideRedirectResult=UI}async _openPopup(t,n,s,o){var u;$i((u=this.eventManagers[t._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await Tv(t,n,s,rm(),o);return cC(t,f,jm())}async _openRedirect(t,n,s,o){await this._originValidation(t);const u=await Tv(t,n,s,rm(),o);return vI(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):($i(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await rC(t),s=new qI(t);return n.register("authEvent",o=>(yt(o?.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Kd,{type:Kd},o=>{var u;const f=(u=o?.[0])===null||u===void 0?void 0:u[Kd];f!==void 0&&n(!!f),Fn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QI(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return bT()||_T()||Um()}}const yC=pC;var Av="@firebase/auth",Sv="1.10.8";/**
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
 */class _C{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){yt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vC(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function EC(r){pi(new Hn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;yt(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wT(r)},y=new LR(s,o,u,p);return YR(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),pi(new Hn("auth-internal",t=>{const n=Hs(t.getProvider("auth").getImmediate());return(s=>new _C(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(Av,Sv,vC(r)),Pn(Av,Sv,"esm2017")}/**
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
 */const TC=5*60,AC=DE("authIdTokenMaxAge")||TC;let bv=null;const SC=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>AC)return;const o=n?.token;bv!==o&&(bv=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function bC(r=Im()){const t=qs(r,"auth");if(t.isInitialized())return t.getImmediate();const n=QR(r,{popupRedirectResolver:yC,persistence:[CI,pI,kT]}),s=DE("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=SC(u.toString());fI(n,f,()=>f(n.currentUser)),hI(n,m=>f(m))}}const o=IE("auth");return o&&XR(n,`http://${o}`),n}function wC(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}zR({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=o=>{const u=ci("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",wC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});EC("Browser");var wv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kr,HT;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(M,S){function R(){}R.prototype=S.prototype,M.D=S.prototype,M.prototype=new R,M.prototype.constructor=M,M.C=function(N,V,x){for(var I=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)I[xe-2]=arguments[xe];return S.prototype[V].apply(N,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(M,S,R){R||(R=0);var N=Array(16);if(typeof S=="string")for(var V=0;16>V;++V)N[V]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(V=0;16>V;++V)N[V]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=M.g[0],R=M.g[1],V=M.g[2];var x=M.g[3],I=S+(x^R&(V^x))+N[0]+3614090360&4294967295;S=R+(I<<7&4294967295|I>>>25),I=x+(V^S&(R^V))+N[1]+3905402710&4294967295,x=S+(I<<12&4294967295|I>>>20),I=V+(R^x&(S^R))+N[2]+606105819&4294967295,V=x+(I<<17&4294967295|I>>>15),I=R+(S^V&(x^S))+N[3]+3250441966&4294967295,R=V+(I<<22&4294967295|I>>>10),I=S+(x^R&(V^x))+N[4]+4118548399&4294967295,S=R+(I<<7&4294967295|I>>>25),I=x+(V^S&(R^V))+N[5]+1200080426&4294967295,x=S+(I<<12&4294967295|I>>>20),I=V+(R^x&(S^R))+N[6]+2821735955&4294967295,V=x+(I<<17&4294967295|I>>>15),I=R+(S^V&(x^S))+N[7]+4249261313&4294967295,R=V+(I<<22&4294967295|I>>>10),I=S+(x^R&(V^x))+N[8]+1770035416&4294967295,S=R+(I<<7&4294967295|I>>>25),I=x+(V^S&(R^V))+N[9]+2336552879&4294967295,x=S+(I<<12&4294967295|I>>>20),I=V+(R^x&(S^R))+N[10]+4294925233&4294967295,V=x+(I<<17&4294967295|I>>>15),I=R+(S^V&(x^S))+N[11]+2304563134&4294967295,R=V+(I<<22&4294967295|I>>>10),I=S+(x^R&(V^x))+N[12]+1804603682&4294967295,S=R+(I<<7&4294967295|I>>>25),I=x+(V^S&(R^V))+N[13]+4254626195&4294967295,x=S+(I<<12&4294967295|I>>>20),I=V+(R^x&(S^R))+N[14]+2792965006&4294967295,V=x+(I<<17&4294967295|I>>>15),I=R+(S^V&(x^S))+N[15]+1236535329&4294967295,R=V+(I<<22&4294967295|I>>>10),I=S+(V^x&(R^V))+N[1]+4129170786&4294967295,S=R+(I<<5&4294967295|I>>>27),I=x+(R^V&(S^R))+N[6]+3225465664&4294967295,x=S+(I<<9&4294967295|I>>>23),I=V+(S^R&(x^S))+N[11]+643717713&4294967295,V=x+(I<<14&4294967295|I>>>18),I=R+(x^S&(V^x))+N[0]+3921069994&4294967295,R=V+(I<<20&4294967295|I>>>12),I=S+(V^x&(R^V))+N[5]+3593408605&4294967295,S=R+(I<<5&4294967295|I>>>27),I=x+(R^V&(S^R))+N[10]+38016083&4294967295,x=S+(I<<9&4294967295|I>>>23),I=V+(S^R&(x^S))+N[15]+3634488961&4294967295,V=x+(I<<14&4294967295|I>>>18),I=R+(x^S&(V^x))+N[4]+3889429448&4294967295,R=V+(I<<20&4294967295|I>>>12),I=S+(V^x&(R^V))+N[9]+568446438&4294967295,S=R+(I<<5&4294967295|I>>>27),I=x+(R^V&(S^R))+N[14]+3275163606&4294967295,x=S+(I<<9&4294967295|I>>>23),I=V+(S^R&(x^S))+N[3]+4107603335&4294967295,V=x+(I<<14&4294967295|I>>>18),I=R+(x^S&(V^x))+N[8]+1163531501&4294967295,R=V+(I<<20&4294967295|I>>>12),I=S+(V^x&(R^V))+N[13]+2850285829&4294967295,S=R+(I<<5&4294967295|I>>>27),I=x+(R^V&(S^R))+N[2]+4243563512&4294967295,x=S+(I<<9&4294967295|I>>>23),I=V+(S^R&(x^S))+N[7]+1735328473&4294967295,V=x+(I<<14&4294967295|I>>>18),I=R+(x^S&(V^x))+N[12]+2368359562&4294967295,R=V+(I<<20&4294967295|I>>>12),I=S+(R^V^x)+N[5]+4294588738&4294967295,S=R+(I<<4&4294967295|I>>>28),I=x+(S^R^V)+N[8]+2272392833&4294967295,x=S+(I<<11&4294967295|I>>>21),I=V+(x^S^R)+N[11]+1839030562&4294967295,V=x+(I<<16&4294967295|I>>>16),I=R+(V^x^S)+N[14]+4259657740&4294967295,R=V+(I<<23&4294967295|I>>>9),I=S+(R^V^x)+N[1]+2763975236&4294967295,S=R+(I<<4&4294967295|I>>>28),I=x+(S^R^V)+N[4]+1272893353&4294967295,x=S+(I<<11&4294967295|I>>>21),I=V+(x^S^R)+N[7]+4139469664&4294967295,V=x+(I<<16&4294967295|I>>>16),I=R+(V^x^S)+N[10]+3200236656&4294967295,R=V+(I<<23&4294967295|I>>>9),I=S+(R^V^x)+N[13]+681279174&4294967295,S=R+(I<<4&4294967295|I>>>28),I=x+(S^R^V)+N[0]+3936430074&4294967295,x=S+(I<<11&4294967295|I>>>21),I=V+(x^S^R)+N[3]+3572445317&4294967295,V=x+(I<<16&4294967295|I>>>16),I=R+(V^x^S)+N[6]+76029189&4294967295,R=V+(I<<23&4294967295|I>>>9),I=S+(R^V^x)+N[9]+3654602809&4294967295,S=R+(I<<4&4294967295|I>>>28),I=x+(S^R^V)+N[12]+3873151461&4294967295,x=S+(I<<11&4294967295|I>>>21),I=V+(x^S^R)+N[15]+530742520&4294967295,V=x+(I<<16&4294967295|I>>>16),I=R+(V^x^S)+N[2]+3299628645&4294967295,R=V+(I<<23&4294967295|I>>>9),I=S+(V^(R|~x))+N[0]+4096336452&4294967295,S=R+(I<<6&4294967295|I>>>26),I=x+(R^(S|~V))+N[7]+1126891415&4294967295,x=S+(I<<10&4294967295|I>>>22),I=V+(S^(x|~R))+N[14]+2878612391&4294967295,V=x+(I<<15&4294967295|I>>>17),I=R+(x^(V|~S))+N[5]+4237533241&4294967295,R=V+(I<<21&4294967295|I>>>11),I=S+(V^(R|~x))+N[12]+1700485571&4294967295,S=R+(I<<6&4294967295|I>>>26),I=x+(R^(S|~V))+N[3]+2399980690&4294967295,x=S+(I<<10&4294967295|I>>>22),I=V+(S^(x|~R))+N[10]+4293915773&4294967295,V=x+(I<<15&4294967295|I>>>17),I=R+(x^(V|~S))+N[1]+2240044497&4294967295,R=V+(I<<21&4294967295|I>>>11),I=S+(V^(R|~x))+N[8]+1873313359&4294967295,S=R+(I<<6&4294967295|I>>>26),I=x+(R^(S|~V))+N[15]+4264355552&4294967295,x=S+(I<<10&4294967295|I>>>22),I=V+(S^(x|~R))+N[6]+2734768916&4294967295,V=x+(I<<15&4294967295|I>>>17),I=R+(x^(V|~S))+N[13]+1309151649&4294967295,R=V+(I<<21&4294967295|I>>>11),I=S+(V^(R|~x))+N[4]+4149444226&4294967295,S=R+(I<<6&4294967295|I>>>26),I=x+(R^(S|~V))+N[11]+3174756917&4294967295,x=S+(I<<10&4294967295|I>>>22),I=V+(S^(x|~R))+N[2]+718787259&4294967295,V=x+(I<<15&4294967295|I>>>17),I=R+(x^(V|~S))+N[9]+3951481745&4294967295,M.g[0]=M.g[0]+S&4294967295,M.g[1]=M.g[1]+(V+(I<<21&4294967295|I>>>11))&4294967295,M.g[2]=M.g[2]+V&4294967295,M.g[3]=M.g[3]+x&4294967295}s.prototype.u=function(M,S){S===void 0&&(S=M.length);for(var R=S-this.blockSize,N=this.B,V=this.h,x=0;x<S;){if(V==0)for(;x<=R;)o(this,M,x),x+=this.blockSize;if(typeof M=="string"){for(;x<S;)if(N[V++]=M.charCodeAt(x++),V==this.blockSize){o(this,N),V=0;break}}else for(;x<S;)if(N[V++]=M[x++],V==this.blockSize){o(this,N),V=0;break}}this.h=V,this.o+=S},s.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var S=1;S<M.length-8;++S)M[S]=0;var R=8*this.o;for(S=M.length-8;S<M.length;++S)M[S]=R&255,R/=256;for(this.u(M),M=Array(16),S=R=0;4>S;++S)for(var N=0;32>N;N+=8)M[R++]=this.g[S]>>>N&255;return M};function u(M,S){var R=m;return Object.prototype.hasOwnProperty.call(R,M)?R[M]:R[M]=S(M)}function f(M,S){this.h=S;for(var R=[],N=!0,V=M.length-1;0<=V;V--){var x=M[V]|0;N&&x==S||(R[V]=x,N=!1)}this.g=R}var m={};function p(M){return-128<=M&&128>M?u(M,function(S){return new f([S|0],0>S?-1:0)}):new f([M|0],0>M?-1:0)}function y(M){if(isNaN(M)||!isFinite(M))return w;if(0>M)return W(y(-M));for(var S=[],R=1,N=0;M>=R;N++)S[N]=M/R|0,R*=4294967296;return new f(S,0)}function T(M,S){if(M.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(M.charAt(0)=="-")return W(T(M.substring(1),S));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(S,8)),N=w,V=0;V<M.length;V+=8){var x=Math.min(8,M.length-V),I=parseInt(M.substring(V,V+x),S);8>x?(x=y(Math.pow(S,x)),N=N.j(x).add(y(I))):(N=N.j(R),N=N.add(y(I)))}return N}var w=p(0),C=p(1),B=p(16777216);r=f.prototype,r.m=function(){if(nt(this))return-W(this).m();for(var M=0,S=1,R=0;R<this.g.length;R++){var N=this.i(R);M+=(0<=N?N:4294967296+N)*S,S*=4294967296}return M},r.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(X(this))return"0";if(nt(this))return"-"+W(this).toString(M);for(var S=y(Math.pow(M,6)),R=this,N="";;){var V=Dt(R,S).g;R=ft(R,V.j(S));var x=((0<R.g.length?R.g[0]:R.h)>>>0).toString(M);if(R=V,X(R))return x+N;for(;6>x.length;)x="0"+x;N=x+N}},r.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function X(M){if(M.h!=0)return!1;for(var S=0;S<M.g.length;S++)if(M.g[S]!=0)return!1;return!0}function nt(M){return M.h==-1}r.l=function(M){return M=ft(this,M),nt(M)?-1:X(M)?0:1};function W(M){for(var S=M.g.length,R=[],N=0;N<S;N++)R[N]=~M.g[N];return new f(R,~M.h).add(C)}r.abs=function(){return nt(this)?W(this):this},r.add=function(M){for(var S=Math.max(this.g.length,M.g.length),R=[],N=0,V=0;V<=S;V++){var x=N+(this.i(V)&65535)+(M.i(V)&65535),I=(x>>>16)+(this.i(V)>>>16)+(M.i(V)>>>16);N=I>>>16,x&=65535,I&=65535,R[V]=I<<16|x}return new f(R,R[R.length-1]&-2147483648?-1:0)};function ft(M,S){return M.add(W(S))}r.j=function(M){if(X(this)||X(M))return w;if(nt(this))return nt(M)?W(this).j(W(M)):W(W(this).j(M));if(nt(M))return W(this.j(W(M)));if(0>this.l(B)&&0>M.l(B))return y(this.m()*M.m());for(var S=this.g.length+M.g.length,R=[],N=0;N<2*S;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var V=0;V<M.g.length;V++){var x=this.i(N)>>>16,I=this.i(N)&65535,xe=M.i(V)>>>16,se=M.i(V)&65535;R[2*N+2*V]+=I*se,et(R,2*N+2*V),R[2*N+2*V+1]+=x*se,et(R,2*N+2*V+1),R[2*N+2*V+1]+=I*xe,et(R,2*N+2*V+1),R[2*N+2*V+2]+=x*xe,et(R,2*N+2*V+2)}for(N=0;N<S;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=S;N<2*S;N++)R[N]=0;return new f(R,0)};function et(M,S){for(;(M[S]&65535)!=M[S];)M[S+1]+=M[S]>>>16,M[S]&=65535,S++}function ot(M,S){this.g=M,this.h=S}function Dt(M,S){if(X(S))throw Error("division by zero");if(X(M))return new ot(w,w);if(nt(M))return S=Dt(W(M),S),new ot(W(S.g),W(S.h));if(nt(S))return S=Dt(M,W(S)),new ot(W(S.g),S.h);if(30<M.g.length){if(nt(M)||nt(S))throw Error("slowDivide_ only works with positive integers.");for(var R=C,N=S;0>=N.l(M);)R=pt(R),N=pt(N);var V=Rt(R,1),x=Rt(N,1);for(N=Rt(N,2),R=Rt(R,2);!X(N);){var I=x.add(N);0>=I.l(M)&&(V=V.add(R),x=I),N=Rt(N,1),R=Rt(R,1)}return S=ft(M,V.j(S)),new ot(V,S)}for(V=w;0<=M.l(S);){for(R=Math.max(1,Math.floor(M.m()/S.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),x=y(R),I=x.j(S);nt(I)||0<I.l(M);)R-=N,x=y(R),I=x.j(S);X(x)&&(x=C),V=V.add(x),M=ft(M,I)}return new ot(V,M)}r.A=function(M){return Dt(this,M).h},r.and=function(M){for(var S=Math.max(this.g.length,M.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)&M.i(N);return new f(R,this.h&M.h)},r.or=function(M){for(var S=Math.max(this.g.length,M.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)|M.i(N);return new f(R,this.h|M.h)},r.xor=function(M){for(var S=Math.max(this.g.length,M.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)^M.i(N);return new f(R,this.h^M.h)};function pt(M){for(var S=M.g.length+1,R=[],N=0;N<S;N++)R[N]=M.i(N)<<1|M.i(N-1)>>>31;return new f(R,M.h)}function Rt(M,S){var R=S>>5;S%=32;for(var N=M.g.length-R,V=[],x=0;x<N;x++)V[x]=0<S?M.i(x+R)>>>S|M.i(x+R+1)<<32-S:M.i(x+R);return new f(V,M.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,HT=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=T,kr=f}).apply(typeof wv<"u"?wv:typeof self<"u"?self:typeof window<"u"?window:{});var Cc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var FT,bl,GT,Uc,lm,KT,QT,YT;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,_){return c==Array.prototype||c==Object.prototype||(c[g]=_.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cc=="object"&&Cc];for(var g=0;g<c.length;++g){var _=c[g];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,g){if(g)t:{var _=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var k=c[A];if(!(k in _))break t;_=_[k]}c=c[c.length-1],A=_[c],g=g(A),g!=A&&g!=null&&t(_,c,{configurable:!0,writable:!0,value:g})}}function u(c,g){c instanceof String&&(c+="");var _=0,A=!1,k={next:function(){if(!A&&_<c.length){var H=_++;return{value:g(H,c[H]),done:!1}}return A=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}o("Array.prototype.values",function(c){return c||function(){return u(this,function(g,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function p(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function y(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function T(c,g,_){return c.call.apply(c.bind,arguments)}function w(c,g,_){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,A),c.apply(g,k)}}return function(){return c.apply(g,arguments)}}function C(c,g,_){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:w,C.apply(null,arguments)}function B(c,g){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function X(c,g){function _(){}_.prototype=g.prototype,c.aa=g.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(A,k,H){for(var tt=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)tt[Pt-2]=arguments[Pt];return g.prototype[k].apply(A,tt)}}function nt(c){const g=c.length;if(0<g){const _=Array(g);for(let A=0;A<g;A++)_[A]=c[A];return _}return[]}function W(c,g){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(p(A)){const k=c.length||0,H=A.length||0;c.length=k+H;for(let tt=0;tt<H;tt++)c[k+tt]=A[tt]}else c.push(A)}}class ft{constructor(g,_){this.i=g,this.j=_,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function et(c){return/^[\s\xa0]*$/.test(c)}function ot(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function Dt(c){return Dt[" "](c),c}Dt[" "]=function(){};var pt=ot().indexOf("Gecko")!=-1&&!(ot().toLowerCase().indexOf("webkit")!=-1&&ot().indexOf("Edge")==-1)&&!(ot().indexOf("Trident")!=-1||ot().indexOf("MSIE")!=-1)&&ot().indexOf("Edge")==-1;function Rt(c,g,_){for(const A in c)g.call(_,c[A],A,c)}function M(c,g){for(const _ in c)g.call(void 0,c[_],_,c)}function S(c){const g={};for(const _ in c)g[_]=c[_];return g}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,g){let _,A;for(let k=1;k<arguments.length;k++){A=arguments[k];for(_ in A)c[_]=A[_];for(let H=0;H<R.length;H++)_=R[H],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function V(c){var g=1;c=c.split(":");const _=[];for(;0<g&&c.length;)_.push(c.shift()),g--;return c.length&&_.push(c.join(":")),_}function x(c){m.setTimeout(()=>{throw c},0)}function I(){var c=zt;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class xe{constructor(){this.h=this.g=null}add(g,_){const A=se.get();A.set(g,_),this.h?this.h.next=A:this.g=A,this.h=A}}var se=new ft(()=>new F,c=>c.reset());class F{constructor(){this.next=this.g=this.h=null}set(g,_){this.h=g,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let it,ct=!1,zt=new xe,D=()=>{const c=m.Promise.resolve(void 0);it=()=>{c.then($)}};var $=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(_){x(_)}var g=se;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}ct=!1};function rt(){this.s=this.s,this.C=this.C}rt.prototype.s=!1,rt.prototype.ma=function(){this.s||(this.s=!0,this.N())},rt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function J(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var ht=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};m.addEventListener("test",_,g),m.removeEventListener("test",_,g)}catch{}return c}();function It(c,g){if(J.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(pt){t:{try{Dt(g.nodeName);var k=!0;break t}catch{}k=!1}k||(g=null)}}else _=="mouseover"?g=c.fromElement:_=="mouseout"&&(g=c.toElement);this.relatedTarget=g,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Et[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&It.aa.h.call(this)}}X(It,J);var Et={2:"touch",3:"pen",4:"mouse"};It.prototype.h=function(){It.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ie="closure_listenable_"+(1e6*Math.random()|0),Zt=0;function Kn(c,g,_,A,k){this.listener=c,this.proxy=null,this.src=g,this.type=_,this.capture=!!A,this.ha=k,this.key=++Zt,this.da=this.fa=!1}function Ji(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function vi(c){this.src=c,this.g={},this.h=0}vi.prototype.add=function(c,g,_,A,k){var H=c.toString();c=this.g[H],c||(c=this.g[H]=[],this.h++);var tt=Xr(c,g,A,k);return-1<tt?(g=c[tt],_||(g.fa=!1)):(g=new Kn(g,this.src,H,!!A,k),g.fa=_,c.push(g)),g};function Yr(c,g){var _=g.type;if(_ in c.g){var A=c.g[_],k=Array.prototype.indexOf.call(A,g,void 0),H;(H=0<=k)&&Array.prototype.splice.call(A,k,1),H&&(Ji(g),c.g[_].length==0&&(delete c.g[_],c.h--))}}function Xr(c,g,_,A){for(var k=0;k<c.length;++k){var H=c[k];if(!H.da&&H.listener==g&&H.capture==!!_&&H.ha==A)return k}return-1}var $r="closure_lm_"+(1e6*Math.random()|0),lo={};function iu(c,g,_,A,k){if(Array.isArray(g)){for(var H=0;H<g.length;H++)iu(c,g[H],_,A,k);return null}return _=ru(_),c&&c[Ie]?c.K(g,_,y(A)?!!A.capture:!1,k):_n(c,g,_,!1,A,k)}function _n(c,g,_,A,k,H){if(!g)throw Error("Invalid event type");var tt=y(k)?!!k.capture:!!k,Pt=Xs(c);if(Pt||(c[$r]=Pt=new vi(c)),_=Pt.add(g,_,A,tt,H),_.proxy)return _;if(A=Oh(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)ht||(k=tt),k===void 0&&(k=!1),c.addEventListener(g.toString(),A,k);else if(c.attachEvent)c.attachEvent(Zr(g.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Oh(){function c(_){return g.call(c.src,c.listener,_)}const g=Nh;return c}function uo(c,g,_,A,k){if(Array.isArray(g))for(var H=0;H<g.length;H++)uo(c,g[H],_,A,k);else A=y(A)?!!A.capture:!!A,_=ru(_),c&&c[Ie]?(c=c.i,g=String(g).toString(),g in c.g&&(H=c.g[g],_=Xr(H,_,A,k),-1<_&&(Ji(H[_]),Array.prototype.splice.call(H,_,1),H.length==0&&(delete c.g[g],c.h--)))):c&&(c=Xs(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Xr(g,_,A,k)),(_=-1<c?g[c]:null)&&Ys(_))}function Ys(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[Ie])Yr(g.i,c);else{var _=c.type,A=c.proxy;g.removeEventListener?g.removeEventListener(_,A,c.capture):g.detachEvent?g.detachEvent(Zr(_),A):g.addListener&&g.removeListener&&g.removeListener(A),(_=Xs(g))?(Yr(_,c),_.h==0&&(_.src=null,g[$r]=null)):Ji(c)}}}function Zr(c){return c in lo?lo[c]:lo[c]="on"+c}function Nh(c,g){if(c.da)c=!0;else{g=new It(g,this);var _=c.listener,A=c.ha||c.src;c.fa&&Ys(c),c=_.call(A,g)}return c}function Xs(c){return c=c[$r],c instanceof vi?c:null}var co="__closure_events_fn_"+(1e9*Math.random()>>>0);function ru(c){return typeof c=="function"?c:(c[co]||(c[co]=function(g){return c.handleEvent(g)}),c[co])}function ae(){rt.call(this),this.i=new vi(this),this.M=this,this.F=null}X(ae,rt),ae.prototype[Ie]=!0,ae.prototype.removeEventListener=function(c,g,_,A){uo(this,c,g,_,A)};function Ht(c,g){var _,A=c.F;if(A)for(_=[];A;A=A.F)_.push(A);if(c=c.M,A=g.type||g,typeof g=="string")g=new J(g,c);else if(g instanceof J)g.target=g.target||c;else{var k=g;g=new J(A,c),N(g,k)}if(k=!0,_)for(var H=_.length-1;0<=H;H--){var tt=g.g=_[H];k=ln(tt,A,!0,g)&&k}if(tt=g.g=c,k=ln(tt,A,!0,g)&&k,k=ln(tt,A,!1,g)&&k,_)for(H=0;H<_.length;H++)tt=g.g=_[H],k=ln(tt,A,!1,g)&&k}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var _=c.g[g],A=0;A<_.length;A++)Ji(_[A]);delete c.g[g],c.h--}}this.F=null},ae.prototype.K=function(c,g,_,A){return this.i.add(String(c),g,!1,_,A)},ae.prototype.L=function(c,g,_,A){return this.i.add(String(c),g,!0,_,A)};function ln(c,g,_,A){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var k=!0,H=0;H<g.length;++H){var tt=g[H];if(tt&&!tt.da&&tt.capture==_){var Pt=tt.listener,Ee=tt.ha||tt.src;tt.fa&&Yr(c.i,tt),k=Pt.call(Ee,A)!==!1&&k}}return k&&!A.defaultPrevented}function Fe(c,g,_){if(typeof c=="function")_&&(c=C(c,_));else if(c&&typeof c.handleEvent=="function")c=C(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:m.setTimeout(c,g||0)}function su(c){c.g=Fe(()=>{c.g=null,c.i&&(c.i=!1,su(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class Mh extends rt{constructor(g,_){super(),this.m=g,this.l=_,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:su(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wr(c){rt.call(this),this.h=c,this.g={}}X(Wr,rt);var Jr=[];function ts(c){Rt(c.g,function(g,_){this.g.hasOwnProperty(_)&&Ys(g)},c),c.g={}}Wr.prototype.N=function(){Wr.aa.N.call(this),ts(this)},Wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xn=m.JSON.stringify,$s=m.JSON.parse,es=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function ho(){}ho.prototype.h=null;function fo(c){return c.h||(c.h=c.i())}function mo(){}var Ei={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ti(){J.call(this,"d")}X(Ti,J);function go(){J.call(this,"c")}X(go,J);var Qn={},po=null;function tr(){return po=po||new ae}Qn.La="serverreachability";function Zs(c){J.call(this,Qn.La,c)}X(Zs,J);function er(c){const g=tr();Ht(g,new Zs(g))}Qn.STAT_EVENT="statevent";function au(c,g){J.call(this,Qn.STAT_EVENT,c),this.stat=g}X(au,J);function te(c){const g=tr();Ht(g,new au(g,c))}Qn.Ma="timingevent";function ve(c,g){J.call(this,Qn.Ma,c),this.size=g}X(ve,J);function de(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},g)}function vn(){this.g=!0}vn.prototype.xa=function(){this.g=!1};function yo(c,g,_,A,k,H){c.info(function(){if(c.g)if(H)for(var tt="",Pt=H.split("&"),Ee=0;Ee<Pt.length;Ee++){var xt=Pt[Ee].split("=");if(1<xt.length){var De=xt[0];xt=xt[1];var Te=De.split("_");tt=2<=Te.length&&Te[1]=="type"?tt+(De+"="+xt+"&"):tt+(De+"=redacted&")}}else tt=null;else tt=H;return"XMLHTTP REQ ("+A+") [attempt "+k+"]: "+g+`
`+_+`
`+tt})}function Vh(c,g,_,A,k,H,tt){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+k+"]: "+g+`
`+_+`
`+H+" "+tt})}function nr(c,g,_,A){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+ns(c,_)+(A?" "+A:"")})}function ou(c,g){c.info(function(){return"TIMEOUT: "+g})}vn.prototype.info=function(){};function ns(c,g){if(!c.g)return g;if(!g)return null;try{var _=JSON.parse(g);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var A=_[c];if(!(2>A.length)){var k=A[1];if(Array.isArray(k)&&!(1>k.length)){var H=k[0];if(H!="noop"&&H!="stop"&&H!="close")for(var tt=1;tt<k.length;tt++)k[tt]=""}}}}return xn(_)}catch{return g}}var ir={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ai={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Yn;function Xn(){}X(Xn,ho),Xn.prototype.g=function(){return new XMLHttpRequest},Xn.prototype.i=function(){return{}},Yn=new Xn;function Ze(c,g,_,A){this.j=c,this.i=g,this.l=_,this.R=A||1,this.U=new Wr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ue}function ue(){this.i=null,this.g="",this.h=!1}var _o={},Ws={};function kn(c,g,_){c.L=1,c.v=os(un(g)),c.m=_,c.P=!0,Si(c,null)}function Si(c,g){c.F=Date.now(),is(c),c.A=un(c.v);var _=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),bo(_.i,"t",A),c.C=0,_=c.j.J,c.h=new ue,c.g=Su(c.j,_?g:null,!c.m),0<c.O&&(c.M=new Mh(C(c.Y,c,c.g),c.O)),g=c.U,_=c.g,A=c.ca;var k="readystatechange";Array.isArray(k)||(k&&(Jr[0]=k.toString()),k=Jr);for(var H=0;H<k.length;H++){var tt=iu(_,k[H],A||g.handleEvent,!1,g.h||g);if(!tt)break;g.g[tt.key]=tt}g=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),er(),yo(c.i,c.u,c.A,c.l,c.R,c.m)}Ze.prototype.ca=function(c){c=c.target;const g=this.M;g&&Sn(c)==3?g.j():this.Y(c)},Ze.prototype.Y=function(c){try{if(c==this.g)t:{const Te=Sn(this.g);var g=this.g.Ba();const Ni=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||gu(this.g)))){this.J||Te!=4||g==7||(g==8||0>=Ni?er(3):er(2)),rr(this);var _=this.g.Z();this.X=_;e:if(lu(this)){var A=gu(this.g);c="";var k=A.length,H=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ke(this),$n(this);var tt="";break e}this.h.i=new m.TextDecoder}for(g=0;g<k;g++)this.h.h=!0,c+=this.h.i.decode(A[g],{stream:!(H&&g==k-1)});A.length=0,this.h.g+=c,this.C=0,tt=this.h.g}else tt=this.g.oa();if(this.o=_==200,Vh(this.i,this.u,this.A,this.l,this.R,Te,_),this.o){if(this.T&&!this.K){e:{if(this.g){var Pt,Ee=this.g;if((Pt=Ee.g?Ee.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!et(Pt)){var xt=Pt;break e}}xt=null}if(_=xt)nr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rs(this,_);else{this.o=!1,this.s=3,te(12),ke(this),$n(this);break t}}if(this.P){_=!0;let Ue;for(;!this.J&&this.C<tt.length;)if(Ue=uu(this,tt),Ue==Ws){Te==4&&(this.s=4,te(14),_=!1),nr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ue==_o){this.s=4,te(15),nr(this.i,this.l,tt,"[Invalid Chunk]"),_=!1;break}else nr(this.i,this.l,Ue,null),rs(this,Ue);if(lu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||tt.length!=0||this.h.h||(this.s=1,te(16),_=!1),this.o=this.o&&_,!_)nr(this.i,this.l,tt,"[Invalid Chunked Response]"),ke(this),$n(this);else if(0<tt.length&&!this.W){this.W=!0;var De=this.j;De.g==this&&De.ba&&!De.M&&(De.j.info("Great, no buffering proxy detected. Bytes received: "+tt.length),gs(De),De.M=!0,te(11))}}else nr(this.i,this.l,tt,null),rs(this,tt);Te==4&&ke(this),this.o&&!this.J&&(Te==4?Eu(this.j,this):(this.o=!1,is(this)))}else Lh(this.g),_==400&&0<tt.indexOf("Unknown SID")?(this.s=3,te(12)):(this.s=0,te(13)),ke(this),$n(this)}}}catch{}finally{}};function lu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function uu(c,g){var _=c.C,A=g.indexOf(`
`,_);return A==-1?Ws:(_=Number(g.substring(_,A)),isNaN(_)?_o:(A+=1,A+_>g.length?Ws:(g=g.slice(A,A+_),c.C=A+_,g)))}Ze.prototype.cancel=function(){this.J=!0,ke(this)};function is(c){c.S=Date.now()+c.I,cu(c,c.I)}function cu(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=de(C(c.ba,c),g)}function rr(c){c.B&&(m.clearTimeout(c.B),c.B=null)}Ze.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(ou(this.i,this.A),this.L!=2&&(er(),te(17)),ke(this),this.s=2,$n(this)):cu(this,this.S-c)};function $n(c){c.j.G==0||c.J||Eu(c.j,c)}function ke(c){rr(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,ts(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function rs(c,g){try{var _=c.j;if(_.G!=0&&(_.g==c||vo(_.h,c))){if(!c.K&&vo(_.h,c)&&_.G==3){try{var A=_.Da.g.parse(g)}catch{A=null}if(Array.isArray(A)&&A.length==3){var k=A;if(k[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)ca(_),la(_);else break t;Do(_),te(18)}}else _.za=k[1],0<_.za-_.T&&37500>k[2]&&_.F&&_.v==0&&!_.C&&(_.C=de(C(_.Za,_),6e3));if(1>=ta(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Oi(_,11)}else if((c.K||_.g==c)&&ca(_),!et(g))for(k=_.Da.g.parse(g),g=0;g<k.length;g++){let xt=k[g];if(_.T=xt[0],xt=xt[1],_.G==2)if(xt[0]=="c"){_.K=xt[1],_.ia=xt[2];const De=xt[3];De!=null&&(_.la=De,_.j.info("VER="+_.la));const Te=xt[4];Te!=null&&(_.Aa=Te,_.j.info("SVER="+_.Aa));const Ni=xt[5];Ni!=null&&typeof Ni=="number"&&0<Ni&&(A=1.5*Ni,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const Ue=c.g;if(Ue){const ii=Ue.g?Ue.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ii){var H=A.h;H.g||ii.indexOf("spdy")==-1&&ii.indexOf("quic")==-1&&ii.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(ea(H,H.h),H.h=null))}if(A.D){const No=Ue.g?Ue.g.getResponseHeader("X-HTTP-Session-Id"):null;No&&(A.ya=No,Kt(A.I,A.D,No))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var tt=c;if(A.qa=Au(A,A.J?A.ia:null,A.W),tt.K){We(A.h,tt);var Pt=tt,Ee=A.L;Ee&&(Pt.I=Ee),Pt.B&&(rr(Pt),is(Pt)),A.g=tt}else _u(A);0<_.i.length&&ua(_)}else xt[0]!="stop"&&xt[0]!="close"||Oi(_,7);else _.G==3&&(xt[0]=="stop"||xt[0]=="close"?xt[0]=="stop"?Oi(_,7):Io(_):xt[0]!="noop"&&_.l&&_.l.ta(xt),_.v=0)}}er(4)}catch{}}var hu=class{constructor(c,g){this.g=c,this.map=g}};function bi(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Js(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function ta(c){return c.h?1:c.g?c.g.size:0}function vo(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function ea(c,g){c.g?c.g.add(g):c.h=g}function We(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}bi.prototype.cancel=function(){if(this.i=Eo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Eo(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const _ of c.g.values())g=g.concat(_.D);return g}return nt(c.i)}function Ph(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(p(c)){for(var g=[],_=c.length,A=0;A<_;A++)g.push(c[A]);return g}g=[],_=0;for(A in c)g[_++]=c[A];return g}function na(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(p(c)||typeof c=="string"){var g=[];c=c.length;for(var _=0;_<c;_++)g.push(_);return g}g=[],_=0;for(const A in c)g[_++]=A;return g}}}function To(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(p(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var _=na(c),A=Ph(c),k=A.length,H=0;H<k;H++)g.call(void 0,A[H],_&&_[H],c)}var ss=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xh(c,g){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var A=c[_].indexOf("="),k=null;if(0<=A){var H=c[_].substring(0,A);k=c[_].substring(A+1)}else H=c[_];g(H,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function me(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof me){this.h=c.h,as(this,c.j),this.o=c.o,this.g=c.g,sr(this,c.s),this.l=c.l;var g=c.i,_=new Ri;_.i=g.i,g.g&&(_.g=new Map(g.g),_.h=g.h),wi(this,_),this.m=c.m}else c&&(g=String(c).match(ss))?(this.h=!1,as(this,g[1]||"",!0),this.o=En(g[2]||""),this.g=En(g[3]||"",!0),sr(this,g[4]),this.l=En(g[5]||"",!0),wi(this,g[6]||"",!0),this.m=En(g[7]||"")):(this.h=!1,this.i=new Ri(null,this.h))}me.prototype.toString=function(){var c=[],g=this.j;g&&c.push(ls(g,Ao,!0),":");var _=this.g;return(_||g=="file")&&(c.push("//"),(g=this.o)&&c.push(ls(g,Ao,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(ls(_,_.charAt(0)=="/"?kh:So,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",ls(_,ia)),c.join("")};function un(c){return new me(c)}function as(c,g,_){c.j=_?En(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function sr(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function wi(c,g,_){g instanceof Ri?(c.i=g,du(c.i,c.h)):(_||(g=ls(g,Uh)),c.i=new Ri(g,c.h))}function Kt(c,g,_){c.i.set(g,_)}function os(c){return Kt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function En(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ls(c,g,_){return typeof c=="string"?(c=encodeURI(c).replace(g,fu),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function fu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Ao=/[#\/\?@]/g,So=/[#\?:]/g,kh=/[#\?]/g,Uh=/[#\?@]/g,ia=/#/g;function Ri(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Tn(c){c.g||(c.g=new Map,c.h=0,c.i&&xh(c.i,function(g,_){c.add(decodeURIComponent(g.replace(/\+/g," ")),_)}))}r=Ri.prototype,r.add=function(c,g){Tn(this),this.i=null,c=Zn(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(g),this.h+=1,this};function Ii(c,g){Tn(c),g=Zn(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Ci(c,g){return Tn(c),g=Zn(c,g),c.g.has(g)}r.forEach=function(c,g){Tn(this),this.g.forEach(function(_,A){_.forEach(function(k){c.call(g,k,A,this)},this)},this)},r.na=function(){Tn(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),_=[];for(let A=0;A<g.length;A++){const k=c[A];for(let H=0;H<k.length;H++)_.push(g[A])}return _},r.V=function(c){Tn(this);let g=[];if(typeof c=="string")Ci(this,c)&&(g=g.concat(this.g.get(Zn(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)g=g.concat(c[_])}return g},r.set=function(c,g){return Tn(this),this.i=null,c=Zn(this,c),Ci(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},r.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function bo(c,g,_){Ii(c,g),0<_.length&&(c.i=null,c.g.set(Zn(c,g),nt(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var _=0;_<g.length;_++){var A=g[_];const H=encodeURIComponent(String(A)),tt=this.V(A);for(A=0;A<tt.length;A++){var k=H;tt[A]!==""&&(k+="="+encodeURIComponent(String(tt[A]))),c.push(k)}}return this.i=c.join("&")};function Zn(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function du(c,g){g&&!c.j&&(Tn(c),c.i=null,c.g.forEach(function(_,A){var k=A.toLowerCase();A!=k&&(Ii(this,A),bo(this,k,_))},c)),c.j=g}function us(c,g){const _=new vn;if(m.Image){const A=new Image;A.onload=B(An,_,"TestLoadImage: loaded",!0,g,A),A.onerror=B(An,_,"TestLoadImage: error",!1,g,A),A.onabort=B(An,_,"TestLoadImage: abort",!1,g,A),A.ontimeout=B(An,_,"TestLoadImage: timeout",!1,g,A),m.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else g(!1)}function Un(c,g){const _=new vn,A=new AbortController,k=setTimeout(()=>{A.abort(),An(_,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:A.signal}).then(H=>{clearTimeout(k),H.ok?An(_,"TestPingServer: ok",!0,g):An(_,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(k),An(_,"TestPingServer: error",!1,g)})}function An(c,g,_,A,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),A(_)}catch{}}function cs(){this.g=new es}function Wn(c,g,_){const A=_||"";try{To(c,function(k,H){let tt=k;y(k)&&(tt=xn(k)),g.push(A+H+"="+encodeURIComponent(tt))})}catch(k){throw g.push(A+"type="+encodeURIComponent("_badmap")),k}}function ar(c){this.l=c.Ub||null,this.j=c.eb||!1}X(ar,ho),ar.prototype.g=function(){return new Di(this.l,this.j)},ar.prototype.i=function(c){return function(){return c}}({});function Di(c,g){ae.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}X(Di,ae),r=Di.prototype,r.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,ti(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||m).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jn(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ti(this)),this.g&&(this.readyState=3,ti(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function wo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?Jn(this):ti(this),this.readyState==3&&wo(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,Jn(this))},r.Qa=function(c){this.g&&(this.response=c,Jn(this))},r.ga=function(){this.g&&Jn(this)};function Jn(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ti(c)}r.setRequestHeader=function(c,g){this.u.append(c,g)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var _=g.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=g.next();return c.join(`\r
`)};function ti(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Ro(c){let g="";return Rt(c,function(_,A){g+=A,g+=":",g+=_,g+=`\r
`}),g}function Ce(c,g,_){t:{for(A in _){var A=!1;break t}A=!0}A||(_=Ro(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Kt(c,g,_))}function Bt(c){ae.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}X(Bt,ae);var ra=/^https?$/i,hs=["POST","PUT"];r=Bt.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,g,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yn.g(),this.v=this.o?fo(this.o):fo(Yn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(H){mu(this,H);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var k in A)_.set(k,A[k]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const H of A.keys())_.set(H,A.get(H));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(H=>H.toLowerCase()=="content-type"),k=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(hs,g,void 0))||A||k||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,tt]of _)this.g.setRequestHeader(H,tt);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fs(this),this.u=!0,this.g.send(c),this.u=!1}catch(H){mu(this,H)}};function mu(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,sa(c),ei(c)}function sa(c){c.A||(c.A=!0,Ht(c,"complete"),Ht(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ht(this,"complete"),Ht(this,"abort"),ei(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ei(this,!0)),Bt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?aa(this):this.bb())},r.bb=function(){aa(this)};function aa(c){if(c.h&&typeof f<"u"&&(!c.v[1]||Sn(c)!=4||c.Z()!=2)){if(c.u&&Sn(c)==4)Fe(c.Ea,0,c);else if(Ht(c,"readystatechange"),Sn(c)==4){c.h=!1;try{const tt=c.Z();t:switch(tt){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break t;default:g=!1}var _;if(!(_=g)){var A;if(A=tt===0){var k=String(c.D).match(ss)[1]||null;!k&&m.self&&m.self.location&&(k=m.self.location.protocol.slice(0,-1)),A=!ra.test(k?k.toLowerCase():"")}_=A}if(_)Ht(c,"complete"),Ht(c,"success");else{c.m=6;try{var H=2<Sn(c)?c.g.statusText:""}catch{H=""}c.l=H+" ["+c.Z()+"]",sa(c)}}finally{ei(c)}}}}function ei(c,g){if(c.g){fs(c);const _=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Ht(c,"ready");try{_.onreadystatechange=A}catch{}}}function fs(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function Sn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),$s(g)}};function gu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Lh(c){const g={};c=(c.g&&2<=Sn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(et(c[A]))continue;var _=V(c[A]);const k=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const H=g[k]||[];g[k]=H,H.push(_)}M(g,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ds(c,g,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||g}function oa(c){this.Aa=0,this.i=[],this.j=new vn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ds("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ds("baseRetryDelayMs",5e3,c),this.cb=ds("retryDelaySeedMs",1e4,c),this.Wa=ds("forwardChannelMaxRetries",2,c),this.wa=ds("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new bi(c&&c.concurrentRequestLimit),this.Da=new cs,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=oa.prototype,r.la=8,r.G=1,r.connect=function(c,g,_,A){te(0),this.W=c,this.H=g||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=Au(this,null,this.W),ua(this)};function Io(c){if(pu(c),c.G==3){var g=c.U++,_=un(c.I);if(Kt(_,"SID",c.K),Kt(_,"RID",g),Kt(_,"TYPE","terminate"),ms(c,_),g=new Ze(c,c.j,g),g.L=2,g.v=os(un(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(g.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=g.v,_=!0),_||(g.g=Su(g.j,null),g.g.ea(g.v)),g.F=Date.now(),is(g)}Tu(c)}function la(c){c.g&&(gs(c),c.g.cancel(),c.g=null)}function pu(c){la(c),c.u&&(m.clearTimeout(c.u),c.u=null),ca(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function ua(c){if(!Js(c.h)&&!c.s){c.s=!0;var g=c.Ga;it||D(),ct||(it(),ct=!0),zt.add(g,c),c.B=0}}function zh(c,g){return ta(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=de(C(c.Ga,c,g),Oo(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const k=new Ze(this,this.j,c);let H=this.o;if(this.S&&(H?(H=S(H),N(H,this.S)):H=this.S),this.m!==null||this.O||(k.H=H,H=null),this.P)t:{for(var g=0,_=0;_<this.i.length;_++){e:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(g+=A,4096<g){g=_;break t}if(g===4096||_===this.i.length-1){g=_+1;break t}}g=1e3}else g=1e3;g=yu(this,k,g),_=un(this.I),Kt(_,"RID",c),Kt(_,"CVER",22),this.D&&Kt(_,"X-HTTP-Session-Id",this.D),ms(this,_),H&&(this.O?g="headers="+encodeURIComponent(String(Ro(H)))+"&"+g:this.m&&Ce(_,this.m,H)),ea(this.h,k),this.Ua&&Kt(_,"TYPE","init"),this.P?(Kt(_,"$req",g),Kt(_,"SID","null"),k.T=!0,kn(k,_,null)):kn(k,_,g),this.G=2}}else this.G==3&&(c?Co(this,c):this.i.length==0||Js(this.h)||Co(this))};function Co(c,g){var _;g?_=g.l:_=c.U++;const A=un(c.I);Kt(A,"SID",c.K),Kt(A,"RID",_),Kt(A,"AID",c.T),ms(c,A),c.m&&c.o&&Ce(A,c.m,c.o),_=new Ze(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),g&&(c.i=g.D.concat(c.i)),g=yu(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ea(c.h,_),kn(_,A,g)}function ms(c,g){c.H&&Rt(c.H,function(_,A){Kt(g,A,_)}),c.l&&To({},function(_,A){Kt(g,A,_)})}function yu(c,g,_){_=Math.min(c.i.length,_);var A=c.l?C(c.l.Na,c.l,c):null;t:{var k=c.i;let H=-1;for(;;){const tt=["count="+_];H==-1?0<_?(H=k[0].g,tt.push("ofs="+H)):H=0:tt.push("ofs="+H);let Pt=!0;for(let Ee=0;Ee<_;Ee++){let xt=k[Ee].g;const De=k[Ee].map;if(xt-=H,0>xt)H=Math.max(0,k[Ee].g-100),Pt=!1;else try{Wn(De,tt,"req"+xt+"_")}catch{A&&A(De)}}if(Pt){A=tt.join("&");break t}}}return c=c.i.splice(0,_),g.D=c,A}function _u(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;it||D(),ct||(it(),ct=!0),zt.add(g,c),c.v=0}}function Do(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=de(C(c.Fa,c),Oo(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,vu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=de(C(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,te(10),la(this),vu(this))};function gs(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function vu(c){c.g=new Ze(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=un(c.qa);Kt(g,"RID","rpc"),Kt(g,"SID",c.K),Kt(g,"AID",c.T),Kt(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&Kt(g,"TO",c.ja),Kt(g,"TYPE","xmlhttp"),ms(c,g),c.m&&c.o&&Ce(g,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=os(un(g)),_.m=null,_.P=!0,Si(_,c)}r.Za=function(){this.C!=null&&(this.C=null,la(this),Do(this),te(19))};function ca(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function Eu(c,g){var _=null;if(c.g==g){ca(c),gs(c),c.g=null;var A=2}else if(vo(c.h,g))_=g.D,We(c.h,g),A=1;else return;if(c.G!=0){if(g.o)if(A==1){_=g.m?g.m.length:0,g=Date.now()-g.F;var k=c.B;A=tr(),Ht(A,new ve(A,_)),ua(c)}else _u(c);else if(k=g.s,k==3||k==0&&0<g.X||!(A==1&&zh(c,g)||A==2&&Do(c)))switch(_&&0<_.length&&(g=c.h,g.i=g.i.concat(_)),k){case 1:Oi(c,5);break;case 4:Oi(c,10);break;case 3:Oi(c,6);break;default:Oi(c,2)}}}function Oo(c,g){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*g}function Oi(c,g){if(c.j.info("Error code "+g),g==2){var _=C(c.fb,c),A=c.Xa;const k=!A;A=new me(A||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||as(A,"https"),os(A),k?us(A.toString(),_):Un(A.toString(),_)}else te(2);c.G=0,c.l&&c.l.sa(g),Tu(c),pu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),te(2)):(this.j.info("Failed to ping google.com"),te(1))};function Tu(c){if(c.G=0,c.ka=[],c.l){const g=Eo(c.h);(g.length!=0||c.i.length!=0)&&(W(c.ka,g),W(c.ka,c.i),c.h.i.length=0,nt(c.i),c.i.length=0),c.l.ra()}}function Au(c,g,_){var A=_ instanceof me?un(_):new me(_);if(A.g!="")g&&(A.g=g+"."+A.g),sr(A,A.s);else{var k=m.location;A=k.protocol,g=g?g+"."+k.hostname:k.hostname,k=+k.port;var H=new me(null);A&&as(H,A),g&&(H.g=g),k&&sr(H,k),_&&(H.l=_),A=H}return _=c.D,g=c.ya,_&&g&&Kt(A,_,g),Kt(A,"VER",c.la),ms(c,A),A}function Su(c,g,_){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new Bt(new ar({eb:_})):new Bt(c.pa),g.Ha(c.J),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function bu(){}r=bu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ha(){}ha.prototype.g=function(c,g){return new Je(c,g)};function Je(c,g){ae.call(this),this.g=new oa(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!et(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!et(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new ni(this)}X(Je,ae),Je.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Je.prototype.close=function(){Io(this.g)},Je.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=xn(c),c=_);g.i.push(new hu(g.Ya++,c)),g.G==3&&ua(g)},Je.prototype.N=function(){this.g.l=null,delete this.j,Io(this.g),delete this.g,Je.aa.N.call(this)};function wu(c){Ti.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){t:{for(const _ in g){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}X(wu,Ti);function Ru(){go.call(this),this.status=1}X(Ru,go);function ni(c){this.g=c}X(ni,bu),ni.prototype.ua=function(){Ht(this.g,"a")},ni.prototype.ta=function(c){Ht(this.g,new wu(c))},ni.prototype.sa=function(c){Ht(this.g,new Ru)},ni.prototype.ra=function(){Ht(this.g,"b")},ha.prototype.createWebChannel=ha.prototype.g,Je.prototype.send=Je.prototype.o,Je.prototype.open=Je.prototype.m,Je.prototype.close=Je.prototype.close,YT=function(){return new ha},QT=function(){return tr()},KT=Qn,lm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ir.NO_ERROR=0,ir.TIMEOUT=8,ir.HTTP_ERROR=6,Uc=ir,Ai.COMPLETE="complete",GT=Ai,mo.EventType=Ei,Ei.OPEN="a",Ei.CLOSE="b",Ei.ERROR="c",Ei.MESSAGE="d",ae.prototype.listen=ae.prototype.K,bl=mo,Bt.prototype.listenOnce=Bt.prototype.L,Bt.prototype.getLastError=Bt.prototype.Ka,Bt.prototype.getLastErrorCode=Bt.prototype.Ba,Bt.prototype.getStatus=Bt.prototype.Z,Bt.prototype.getResponseJson=Bt.prototype.Oa,Bt.prototype.getResponseText=Bt.prototype.oa,Bt.prototype.send=Bt.prototype.ea,Bt.prototype.setWithCredentials=Bt.prototype.Ha,FT=Bt}).apply(typeof Cc<"u"?Cc:typeof self<"u"?self:typeof window<"u"?window:{});const Rv="@firebase/firestore",Iv="4.8.0";/**
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
 */class Ye{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
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
 */let io="11.10.0";/**
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
 */const zs=new fh("@firebase/firestore");function ja(){return zs.logLevel}function st(r,...t){if(zs.logLevel<=Mt.DEBUG){const n=t.map(qm);zs.debug(`Firestore (${io}): ${r}`,...n)}}function Zi(r,...t){if(zs.logLevel<=Mt.ERROR){const n=t.map(qm);zs.error(`Firestore (${io}): ${r}`,...n)}}function zr(r,...t){if(zs.logLevel<=Mt.WARN){const n=t.map(qm);zs.warn(`Firestore (${io}): ${r}`,...n)}}function qm(r){if(typeof r=="string")return r;try{/**
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
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
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
 */function _t(r,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,XT(r,s,n)}function XT(r,t,n){let s=`FIRESTORE (${io}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Zi(s),new Error(s)}function qt(r,t,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||XT(t,o,s)}function At(r,t){return r}/**
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
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ut extends Gn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ur{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class $T{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class RC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class IC{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class CC{constructor(t){this.t=t,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){qt(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let u=new Ur;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Ur,t.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const p=u;t.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},m=p=>{st("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>m(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(st("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Ur)}},0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(st("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(qt(typeof s.accessToken=="string",31837,{l:s}),new $T(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return qt(t===null||typeof t=="string",2055,{h:t}),new Ye(t)}}class DC{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class OC{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new DC(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NC{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Nn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){qt(this.o===void 0,3512);const s=u=>{u.error!=null&&st("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,st("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable(()=>s(u))};const o=u=>{st("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):st("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Cv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(qt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Cv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function MC(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */function ZT(){return new TextEncoder}/**
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
 */class Hm{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=MC(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=t.charAt(o[u]%62))}return s}}function wt(r,t){return r<t?-1:r>t?1:0}function um(r,t){let n=0;for(;n<r.length&&n<t.length;){const s=r.codePointAt(n),o=t.codePointAt(n);if(s!==o){if(s<128&&o<128)return wt(s,o);{const u=ZT(),f=VC(u.encode(Dv(r,n)),u.encode(Dv(t,n)));return f!==0?f:wt(s,o)}}n+=s>65535?2:1}return wt(r.length,t.length)}function Dv(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function VC(r,t){for(let n=0;n<r.length&&n<t.length;++n)if(r[n]!==t[n])return wt(r[n],t[n]);return wt(r.length,t.length)}function Xa(r,t,n){return r.length===t.length&&r.every((s,o)=>n(s,t[o]))}/**
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
 */const Ov="__name__";class ui{constructor(t,n,s){n===void 0?n=0:n>t.length&&_t(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&_t(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return ui.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ui?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const u=ui.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return wt(t.length,n.length)}static compareSegments(t,n){const s=ui.isNumericId(t),o=ui.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?ui.extractNumericId(t).compare(ui.extractNumericId(n)):um(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return kr.fromString(t.substring(4,t.length-2))}}class ie extends ui{construct(t,n,s){return new ie(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new ut(Z.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new ie(n)}static emptyPath(){return new ie([])}}const PC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends ui{construct(t,n,s){return new qe(t,n,s)}static isValidIdentifier(t){return PC.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ov}static keyField(){return new qe([Ov])}static fromServerFormat(t){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ut(Z.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const m=t[o];if(m==="\\"){if(o+1===t.length)throw new ut(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ut(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=p,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new ut(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new qe(n)}static emptyPath(){return new qe([])}}/**
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
 */class dt{constructor(t){this.path=t}static fromPath(t){return new dt(ie.fromString(t))}static fromName(t){return new dt(ie.fromString(t).popFirst(5))}static empty(){return new dt(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ie.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return ie.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new dt(new ie(t.slice()))}}/**
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
 */function xC(r,t,n){if(!n)throw new ut(Z.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function kC(r,t,n,s){if(t===!0&&s===!0)throw new ut(Z.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function Nv(r){if(!dt.isDocumentKey(r))throw new ut(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function WT(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Fm(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":_t(12329,{type:typeof r})}function zl(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new ut(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fm(r);throw new ut(Z.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
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
 */function _e(r,t){const n={typeString:r};return t&&(n.value=t),n}function Wl(r,t){if(!WT(r))throw new ut(Z.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in t)if(t[s]){const o=t[s].typeString,u="value"in t[s]?{value:t[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new ut(Z.INVALID_ARGUMENT,n);return!0}/**
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
 */const Mv=-62135596800,Vv=1e6;class Jt{static now(){return Jt.fromMillis(Date.now())}static fromDate(t){return Jt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*Vv);return new Jt(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new ut(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ut(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Mv)throw new ut(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ut(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Vv}_compareTo(t){return this.seconds===t.seconds?wt(this.nanoseconds,t.nanoseconds):wt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Jt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Wl(t,Jt._jsonSchema))return new Jt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Mv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Jt._jsonSchemaVersion="firestore/timestamp/1.0",Jt._jsonSchema={type:_e("string",Jt._jsonSchemaVersion),seconds:_e("number"),nanoseconds:_e("number")};/**
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
 */class Tt{static fromTimestamp(t){return new Tt(t)}static min(){return new Tt(new Jt(0,0))}static max(){return new Tt(new Jt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const jl=-1;function UC(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Tt.fromTimestamp(s===1e9?new Jt(n+1,0):new Jt(n,s));return new jr(o,dt.empty(),t)}function LC(r){return new jr(r.readTime,r.key,jl)}class jr{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new jr(Tt.min(),dt.empty(),jl)}static max(){return new jr(Tt.max(),dt.empty(),jl)}}function zC(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=dt.comparator(r.documentKey,t.documentKey),n!==0?n:wt(r.largestBatchId,t.largestBatchId))}/**
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
 */const jC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class BC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function ro(r){if(r.code!==Z.FAILED_PRECONDITION||r.message!==jC)throw r;st("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Y{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&_t(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new Y((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof Y?n:Y.resolve(n)}catch(n){return Y.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):Y.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):Y.reject(n)}static resolve(t){return new Y((n,s)=>{n(t)})}static reject(t){return new Y((n,s)=>{s(t)})}static waitFor(t){return new Y((n,s)=>{let o=0,u=0,f=!1;t.forEach(m=>{++o,m.next(()=>{++u,f&&u===o&&n()},p=>s(p))}),f=!0,u===o&&n()})}static or(t){let n=Y.resolve(!1);for(const s of t)n=n.next(o=>o?Y.resolve(o):s());return n}static forEach(t,n){const s=[];return t.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(t,n){return new Y((s,o)=>{const u=t.length,f=new Array(u);let m=0;for(let p=0;p<u;p++){const y=p;n(t[y]).next(T=>{f[y]=T,++m,m===u&&s(f)},T=>o(T))}})}static doWhile(t,n){return new Y((s,o)=>{const u=()=>{t()===!0?n().next(()=>{u()},o):s()};u()})}}function qC(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function so(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class _h{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this._e(s),this.ae=s=>n.writeSequenceNumber(s))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}_h.ue=-1;/**
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
 */const Gm=-1;function vh(r){return r==null}function Jc(r){return r===0&&1/r==-1/0}function HC(r){return typeof r=="number"&&Number.isInteger(r)&&!Jc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const JT="";function FC(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=Pv(t)),t=GC(r.get(n),t);return Pv(t)}function GC(r,t){let n=t;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case JT:n+="";break;default:n+=u}}return n}function Pv(r){return r+JT+""}/**
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
 */function xv(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function Fs(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function t0(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class re{constructor(t,n){this.comparator=t,this.root=n||Be.EMPTY}insert(t,n){return new re(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(t){return new re(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Be.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Dc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Dc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Dc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Dc(this.root,t,this.comparator,!0)}}class Dc{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?s(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Be{constructor(t,n,s,o,u){this.key=t,this.value=n,this.color=s??Be.RED,this.left=o??Be.EMPTY,this.right=u??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,u){return new Be(t??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const u=s(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return Be.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _t(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _t(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw _t(27949);return t+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw _t(57766)}get value(){throw _t(16141)}get color(){throw _t(16727)}get left(){throw _t(29726)}get right(){throw _t(36894)}copy(t,n,s,o,u){return this}insert(t,n,s){return new Be(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Re{constructor(t){this.comparator=t,this.data=new re(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new kv(this.data.getIterator())}getIteratorFrom(t){return new kv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof Re)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Re(this.comparator);return n.data=t,n}}class kv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class qn{constructor(t){this.fields=t,t.sort(qe.comparator)}static empty(){return new qn([])}unionWith(t){let n=new Re(qe.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new qn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Xa(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class e0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class He{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new e0("Invalid base64 string: "+u):u}}(t);return new He(n)}static fromUint8Array(t){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(t);return new He(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return wt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}He.EMPTY_BYTE_STRING=new He("");const KC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Br(r){if(qt(!!r,39018),typeof r=="string"){let t=0;const n=KC.exec(r);if(qt(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:fe(r.seconds),nanos:fe(r.nanos)}}function fe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function qr(r){return typeof r=="string"?He.fromBase64String(r):He.fromUint8Array(r)}/**
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
 */const n0="server_timestamp",i0="__type__",r0="__previous_value__",s0="__local_write_time__";function Km(r){var t,n;return((n=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[i0])===null||n===void 0?void 0:n.stringValue)===n0}function Eh(r){const t=r.mapValue.fields[r0];return Km(t)?Eh(t):t}function Bl(r){const t=Br(r.mapValue.fields[s0].timestampValue);return new Jt(t.seconds,t.nanos)}/**
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
 */class QC{constructor(t,n,s,o,u,f,m,p,y,T){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=T}}const th="(default)";class ql{constructor(t,n){this.projectId=t,this.database=n||th}static empty(){return new ql("","")}get isDefaultDatabase(){return this.database===th}isEqual(t){return t instanceof ql&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const a0="__type__",YC="__max__",Oc={mapValue:{}},o0="__vector__",eh="value";function Hr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Km(r)?4:$C(r)?9007199254740991:XC(r)?10:11:_t(28295,{value:r})}function yi(r,t){if(r===t)return!0;const n=Hr(r);if(n!==Hr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Bl(r).isEqual(Bl(t));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=Br(o.timestampValue),m=Br(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(o,u){return qr(o.bytesValue).isEqual(qr(u.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(o,u){return fe(o.geoPointValue.latitude)===fe(u.geoPointValue.latitude)&&fe(o.geoPointValue.longitude)===fe(u.geoPointValue.longitude)}(r,t);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return fe(o.integerValue)===fe(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=fe(o.doubleValue),m=fe(u.doubleValue);return f===m?Jc(f)===Jc(m):isNaN(f)&&isNaN(m)}return!1}(r,t);case 9:return Xa(r.arrayValue.values||[],t.arrayValue.values||[],yi);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(xv(f)!==xv(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!yi(f[p],m[p])))return!1;return!0}(r,t);default:return _t(52216,{left:r})}}function Hl(r,t){return(r.values||[]).find(n=>yi(n,t))!==void 0}function $a(r,t){if(r===t)return 0;const n=Hr(r),s=Hr(t);if(n!==s)return wt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return wt(r.booleanValue,t.booleanValue);case 2:return function(u,f){const m=fe(u.integerValue||u.doubleValue),p=fe(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1}(r,t);case 3:return Uv(r.timestampValue,t.timestampValue);case 4:return Uv(Bl(r),Bl(t));case 5:return um(r.stringValue,t.stringValue);case 6:return function(u,f){const m=qr(u),p=qr(f);return m.compareTo(p)}(r.bytesValue,t.bytesValue);case 7:return function(u,f){const m=u.split("/"),p=f.split("/");for(let y=0;y<m.length&&y<p.length;y++){const T=wt(m[y],p[y]);if(T!==0)return T}return wt(m.length,p.length)}(r.referenceValue,t.referenceValue);case 8:return function(u,f){const m=wt(fe(u.latitude),fe(f.latitude));return m!==0?m:wt(fe(u.longitude),fe(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Lv(r.arrayValue,t.arrayValue);case 10:return function(u,f){var m,p,y,T;const w=u.fields||{},C=f.fields||{},B=(m=w[eh])===null||m===void 0?void 0:m.arrayValue,X=(p=C[eh])===null||p===void 0?void 0:p.arrayValue,nt=wt(((y=B?.values)===null||y===void 0?void 0:y.length)||0,((T=X?.values)===null||T===void 0?void 0:T.length)||0);return nt!==0?nt:Lv(B,X)}(r.mapValue,t.mapValue);case 11:return function(u,f){if(u===Oc.mapValue&&f===Oc.mapValue)return 0;if(u===Oc.mapValue)return 1;if(f===Oc.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),y=f.fields||{},T=Object.keys(y);p.sort(),T.sort();for(let w=0;w<p.length&&w<T.length;++w){const C=um(p[w],T[w]);if(C!==0)return C;const B=$a(m[p[w]],y[T[w]]);if(B!==0)return B}return wt(p.length,T.length)}(r.mapValue,t.mapValue);default:throw _t(23264,{le:n})}}function Uv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return wt(r,t);const n=Br(r),s=Br(t),o=wt(n.seconds,s.seconds);return o!==0?o:wt(n.nanos,s.nanos)}function Lv(r,t){const n=r.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=$a(n[o],s[o]);if(u)return u}return wt(n.length,s.length)}function Za(r){return cm(r)}function cm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=Br(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return qr(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return dt.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=cm(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${cm(n.fields[f])}`;return o+"}"}(r.mapValue):_t(61005,{value:r})}function Lc(r){switch(Hr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Eh(r);return t?16+Lc(t):16;case 5:return 2*r.stringValue.length;case 6:return qr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Lc(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Fs(s.fields,(u,f)=>{o+=u.length+Lc(f)}),o}(r.mapValue);default:throw _t(13486,{value:r})}}function hm(r){return!!r&&"integerValue"in r}function Qm(r){return!!r&&"arrayValue"in r}function zv(r){return!!r&&"nullValue"in r}function jv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function zc(r){return!!r&&"mapValue"in r}function XC(r){var t,n;return((n=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[a0])===null||n===void 0?void 0:n.stringValue)===o0}function Nl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Fs(r.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Nl(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Nl(r.arrayValue.values[n]);return t}return Object.assign({},r)}function $C(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===YC}/**
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
 */class Mn{constructor(t){this.value=t}static empty(){return new Mn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!zc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Nl(n)}setAll(t){let n=qe.emptyPath(),s={},o=[];t.forEach((f,m)=>{if(!n.isImmediateParentOf(m)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=Nl(f):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(t){const n=this.field(t.popLast());zc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return yi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];zc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){Fs(n,(o,u)=>t[o]=u);for(const o of s)delete t[o]}clone(){return new Mn(Nl(this.value))}}function l0(r){const t=[];return Fs(r.fields,(n,s)=>{const o=new qe([n]);if(zc(s)){const u=l0(s.mapValue).fields;if(u.length===0)t.push(o);else for(const f of u)t.push(o.child(f))}else t.push(o)}),new qn(t)}/**
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
 */class Xe{constructor(t,n,s,o,u,f,m){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(t){return new Xe(t,0,Tt.min(),Tt.min(),Tt.min(),Mn.empty(),0)}static newFoundDocument(t,n,s,o){return new Xe(t,1,n,Tt.min(),s,o,0)}static newNoDocument(t,n){return new Xe(t,2,n,Tt.min(),Tt.min(),Mn.empty(),0)}static newUnknownDocument(t,n){return new Xe(t,3,n,Tt.min(),Tt.min(),Mn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(Tt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Mn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Mn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Tt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Xe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class nh{constructor(t,n){this.position=t,this.inclusive=n}}function Bv(r,t,n){let s=0;for(let o=0;o<r.position.length;o++){const u=t[o],f=r.position[o];if(u.field.isKeyField()?s=dt.comparator(dt.fromName(f.referenceValue),n.key):s=$a(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function qv(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!yi(r.position[n],t.position[n]))return!1;return!0}/**
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
 */class ih{constructor(t,n="asc"){this.field=t,this.dir=n}}function ZC(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class u0{}class we extends u0{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new JC(t,n,s):n==="array-contains"?new n2(t,s):n==="in"?new i2(t,s):n==="not-in"?new r2(t,s):n==="array-contains-any"?new s2(t,s):new we(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new t2(t,s):new e2(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison($a(n,this.value)):n!==null&&Hr(this.value)===Hr(n)&&this.matchesComparison($a(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return _t(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _i extends u0{constructor(t,n){super(),this.filters=t,this.op=n,this.he=null}static create(t,n){return new _i(t,n)}matches(t){return c0(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function c0(r){return r.op==="and"}function h0(r){return WC(r)&&c0(r)}function WC(r){for(const t of r.filters)if(t instanceof _i)return!1;return!0}function fm(r){if(r instanceof we)return r.field.canonicalString()+r.op.toString()+Za(r.value);if(h0(r))return r.filters.map(t=>fm(t)).join(",");{const t=r.filters.map(n=>fm(n)).join(",");return`${r.op}(${t})`}}function f0(r,t){return r instanceof we?function(s,o){return o instanceof we&&s.op===o.op&&s.field.isEqual(o.field)&&yi(s.value,o.value)}(r,t):r instanceof _i?function(s,o){return o instanceof _i&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,m)=>u&&f0(f,o.filters[m]),!0):!1}(r,t):void _t(19439)}function d0(r){return r instanceof we?function(n){return`${n.field.canonicalString()} ${n.op} ${Za(n.value)}`}(r):r instanceof _i?function(n){return n.op.toString()+" {"+n.getFilters().map(d0).join(" ,")+"}"}(r):"Filter"}class JC extends we{constructor(t,n,s){super(t,n,s),this.key=dt.fromName(s.referenceValue)}matches(t){const n=dt.comparator(t.key,this.key);return this.matchesComparison(n)}}class t2 extends we{constructor(t,n){super(t,"in",n),this.keys=m0("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class e2 extends we{constructor(t,n){super(t,"not-in",n),this.keys=m0("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function m0(r,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>dt.fromName(s.referenceValue))}class n2 extends we{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Qm(n)&&Hl(n.arrayValue,this.value)}}class i2 extends we{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Hl(this.value.arrayValue,n)}}class r2 extends we{constructor(t,n){super(t,"not-in",n)}matches(t){if(Hl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Hl(this.value.arrayValue,n)}}class s2 extends we{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Qm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Hl(this.value.arrayValue,s))}}/**
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
 */class a2{constructor(t,n=null,s=[],o=[],u=null,f=null,m=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Pe=null}}function Hv(r,t=null,n=[],s=[],o=null,u=null,f=null){return new a2(r,t,n,s,o,u,f)}function Ym(r){const t=At(r);if(t.Pe===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>fm(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),vh(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Za(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Za(s)).join(",")),t.Pe=n}return t.Pe}function Xm(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!ZC(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!f0(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!qv(r.startAt,t.startAt)&&qv(r.endAt,t.endAt)}function dm(r){return dt.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Th{constructor(t,n=null,s=[],o=[],u=null,f="F",m=null,p=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=p,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function o2(r,t,n,s,o,u,f,m){return new Th(r,t,n,s,o,u,f,m)}function $m(r){return new Th(r)}function Fv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function l2(r){return r.collectionGroup!==null}function Ml(r){const t=At(r);if(t.Te===null){t.Te=[];const n=new Set;for(const u of t.explicitOrderBy)t.Te.push(u),n.add(u.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Re(qe.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(m=m.add(y.field))})}),m})(t).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||t.Te.push(new ih(u,s))}),n.has(qe.keyField().canonicalString())||t.Te.push(new ih(qe.keyField(),s))}return t.Te}function fi(r){const t=At(r);return t.Ie||(t.Ie=u2(t,Ml(r))),t.Ie}function u2(r,t){if(r.limitType==="F")return Hv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new ih(o.field,u)});const n=r.endAt?new nh(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new nh(r.startAt.position,r.startAt.inclusive):null;return Hv(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function mm(r,t,n){return new Th(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function Ah(r,t){return Xm(fi(r),fi(t))&&r.limitType===t.limitType}function g0(r){return`${Ym(fi(r))}|lt:${r.limitType}`}function Ba(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>d0(o)).join(", ")}]`),vh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>Za(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>Za(o)).join(",")),`Target(${s})`}(fi(r))}; limitType=${r.limitType})`}function Sh(r,t){return t.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):dt.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,t)&&function(s,o){for(const u of Ml(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,t)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,t)&&function(s,o){return!(s.startAt&&!function(f,m,p){const y=Bv(f,m,p);return f.inclusive?y<=0:y<0}(s.startAt,Ml(s),o)||s.endAt&&!function(f,m,p){const y=Bv(f,m,p);return f.inclusive?y>=0:y>0}(s.endAt,Ml(s),o))}(r,t)}function c2(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function p0(r){return(t,n)=>{let s=!1;for(const o of Ml(r)){const u=h2(o,t,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function h2(r,t,n){const s=r.field.isKeyField()?dt.comparator(t.key,n.key):function(u,f,m){const p=f.data.field(u),y=m.data.field(u);return p!==null&&y!==null?$a(p,y):_t(42886)}(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return _t(19790,{direction:r.dir})}}/**
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
 */class Gs{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){Fs(this.inner,(n,s)=>{for(const[o,u]of s)t(o,u)})}isEmpty(){return t0(this.inner)}size(){return this.innerSize}}/**
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
 */const f2=new re(dt.comparator);function Wi(){return f2}const y0=new re(dt.comparator);function wl(...r){let t=y0;for(const n of r)t=t.insert(n.key,n);return t}function _0(r){let t=y0;return r.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Vs(){return Vl()}function v0(){return Vl()}function Vl(){return new Gs(r=>r.toString(),(r,t)=>r.isEqual(t))}const d2=new re(dt.comparator),m2=new Re(dt.comparator);function Vt(...r){let t=m2;for(const n of r)t=t.add(n);return t}const g2=new Re(wt);function p2(){return g2}/**
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
 */function Zm(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jc(t)?"-0":t}}function E0(r){return{integerValue:""+r}}function y2(r,t){return HC(t)?E0(t):Zm(r,t)}/**
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
 */class bh{constructor(){this._=void 0}}function _2(r,t,n){return r instanceof rh?function(o,u){const f={fields:{[i0]:{stringValue:n0},[s0]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Km(u)&&(u=Eh(u)),u&&(f.fields[r0]=u),{mapValue:f}}(n,t):r instanceof Fl?A0(r,t):r instanceof Gl?S0(r,t):function(o,u){const f=T0(o,u),m=Gv(f)+Gv(o.Ee);return hm(f)&&hm(o.Ee)?E0(m):Zm(o.serializer,m)}(r,t)}function v2(r,t,n){return r instanceof Fl?A0(r,t):r instanceof Gl?S0(r,t):n}function T0(r,t){return r instanceof sh?function(s){return hm(s)||function(u){return!!u&&"doubleValue"in u}(s)}(t)?t:{integerValue:0}:null}class rh extends bh{}class Fl extends bh{constructor(t){super(),this.elements=t}}function A0(r,t){const n=b0(t);for(const s of r.elements)n.some(o=>yi(o,s))||n.push(s);return{arrayValue:{values:n}}}class Gl extends bh{constructor(t){super(),this.elements=t}}function S0(r,t){let n=b0(t);for(const s of r.elements)n=n.filter(o=>!yi(o,s));return{arrayValue:{values:n}}}class sh extends bh{constructor(t,n){super(),this.serializer=t,this.Ee=n}}function Gv(r){return fe(r.integerValue||r.doubleValue)}function b0(r){return Qm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function E2(r,t){return r.field.isEqual(t.field)&&function(s,o){return s instanceof Fl&&o instanceof Fl||s instanceof Gl&&o instanceof Gl?Xa(s.elements,o.elements,yi):s instanceof sh&&o instanceof sh?yi(s.Ee,o.Ee):s instanceof rh&&o instanceof rh}(r.transform,t.transform)}class T2{constructor(t,n){this.version=t,this.transformResults=n}}class Yi{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Yi}static exists(t){return new Yi(void 0,t)}static updateTime(t){return new Yi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function jc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class wh{}function w0(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new I0(r.key,Yi.none()):new Jl(r.key,r.data,Yi.none());{const n=r.data,s=Mn.empty();let o=new Re(qe.comparator);for(let u of t.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new Ks(r.key,s,new qn(o.toArray()),Yi.none())}}function A2(r,t,n){r instanceof Jl?function(o,u,f){const m=o.value.clone(),p=Qv(o.fieldTransforms,u,f.transformResults);m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,t,n):r instanceof Ks?function(o,u,f){if(!jc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=Qv(o.fieldTransforms,u,f.transformResults),p=u.data;p.setAll(R0(o)),p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,t,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,n)}function Pl(r,t,n,s){return r instanceof Jl?function(u,f,m,p){if(!jc(u.precondition,f))return m;const y=u.value.clone(),T=Yv(u.fieldTransforms,p,f);return y.setAll(T),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,t,n,s):r instanceof Ks?function(u,f,m,p){if(!jc(u.precondition,f))return m;const y=Yv(u.fieldTransforms,p,f),T=f.data;return T.setAll(R0(u)),T.setAll(y),f.convertToFoundDocument(f.version,T).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(w=>w.field))}(r,t,n,s):function(u,f,m){return jc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(r,t,n)}function S2(r,t){let n=null;for(const s of r.fieldTransforms){const o=t.data.field(s.field),u=T0(s.transform,o||null);u!=null&&(n===null&&(n=Mn.empty()),n.set(s.field,u))}return n||null}function Kv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Xa(s,o,(u,f)=>E2(u,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Jl extends wh{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ks extends wh{constructor(t,n,s,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function R0(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}}),t}function Qv(r,t,n){const s=new Map;qt(r.length===n.length,32656,{Ae:n.length,Re:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=t.data.field(u.field);s.set(u.field,v2(f,m,n[o]))}return s}function Yv(r,t,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,_2(u,f,t))}return s}class I0 extends wh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class b2 extends wh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class w2{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&A2(u,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Pl(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Pl(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=v0();return this.mutations.forEach(o=>{const u=t.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const p=w0(f,m);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(Tt.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Vt())}isEqual(t){return this.batchId===t.batchId&&Xa(this.mutations,t.mutations,(n,s)=>Kv(n,s))&&Xa(this.baseMutations,t.baseMutations,(n,s)=>Kv(n,s))}}class Wm{constructor(t,n,s,o){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(t,n,s){qt(t.mutations.length===s.length,58842,{Ve:t.mutations.length,me:s.length});let o=function(){return d2}();const u=t.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new Wm(t,n,s,o)}}/**
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
 */class R2{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class I2{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var ye,Ut;function C2(r){switch(r){case Z.OK:return _t(64938);case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0;default:return _t(15467,{code:r})}}function C0(r){if(r===void 0)return Zi("GRPC error has no .code"),Z.UNKNOWN;switch(r){case ye.OK:return Z.OK;case ye.CANCELLED:return Z.CANCELLED;case ye.UNKNOWN:return Z.UNKNOWN;case ye.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case ye.INTERNAL:return Z.INTERNAL;case ye.UNAVAILABLE:return Z.UNAVAILABLE;case ye.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case ye.NOT_FOUND:return Z.NOT_FOUND;case ye.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case ye.ABORTED:return Z.ABORTED;case ye.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case ye.DATA_LOSS:return Z.DATA_LOSS;default:return _t(39323,{code:r})}}(Ut=ye||(ye={}))[Ut.OK=0]="OK",Ut[Ut.CANCELLED=1]="CANCELLED",Ut[Ut.UNKNOWN=2]="UNKNOWN",Ut[Ut.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ut[Ut.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ut[Ut.NOT_FOUND=5]="NOT_FOUND",Ut[Ut.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ut[Ut.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ut[Ut.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ut[Ut.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ut[Ut.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ut[Ut.ABORTED=10]="ABORTED",Ut[Ut.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ut[Ut.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ut[Ut.INTERNAL=13]="INTERNAL",Ut[Ut.UNAVAILABLE=14]="UNAVAILABLE",Ut[Ut.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const D2=new kr([4294967295,4294967295],0);function Xv(r){const t=ZT().encode(r),n=new HT;return n.update(t),new Uint8Array(n.digest())}function $v(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new kr([n,s],0),new kr([o,u],0)]}class Jm{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Rl(`Invalid padding: ${n}`);if(s<0)throw new Rl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Rl(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new Rl(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*t.length-n,this.ge=kr.fromNumber(this.fe)}pe(t,n,s){let o=t.add(n.multiply(kr.fromNumber(s)));return o.compare(D2)===1&&(o=new kr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const n=Xv(t),[s,o]=$v(n);for(let u=0;u<this.hashCount;u++){const f=this.pe(s,o,u);if(!this.ye(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new Jm(u,o,n);return s.forEach(m=>f.insert(m)),f}insert(t){if(this.fe===0)return;const n=Xv(t),[s,o]=$v(n);for(let u=0;u<this.hashCount;u++){const f=this.pe(s,o,u);this.we(f)}}we(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class Rl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Rh{constructor(t,n,s,o,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,tu.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Rh(Tt.min(),o,new re(wt),Wi(),Vt())}}class tu{constructor(t,n,s,o,u){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new tu(s,n,Vt(),Vt(),Vt())}}/**
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
 */class Bc{constructor(t,n,s,o){this.Se=t,this.removedTargetIds=n,this.key=s,this.be=o}}class D0{constructor(t,n){this.targetId=t,this.De=n}}class O0{constructor(t,n,s=He.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class Zv{constructor(){this.ve=0,this.Ce=Wv(),this.Fe=He.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=Vt(),n=Vt(),s=Vt();return this.Ce.forEach((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:_t(38017,{changeType:u})}}),new tu(this.Fe,this.Me,t,n,s)}ke(){this.xe=!1,this.Ce=Wv()}qe(t,n){this.xe=!0,this.Ce=this.Ce.insert(t,n)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,qt(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class O2{constructor(t){this.We=t,this.Ge=new Map,this.ze=Wi(),this.je=Nc(),this.Je=Nc(),this.He=new re(wt)}Ye(t){for(const n of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(n,t.be):this.Xe(n,t.key,t.be);for(const n of t.removedTargetIds)this.Xe(n,t.key,t.be)}et(t){this.forEachTarget(t,n=>{const s=this.tt(n);switch(t.state){case 0:this.nt(n)&&s.Be(t.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(t.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(s.Ke(),s.Be(t.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),s.Be(t.resumeToken));break;default:_t(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Ge.forEach((s,o)=>{this.nt(o)&&n(o)})}it(t){const n=t.targetId,s=t.De.count,o=this.st(n);if(o){const u=o.target;if(dm(u))if(s===0){const f=new dt(u.path);this.Xe(n,f,Xe.newNoDocument(f,Tt.min()))}else qt(s===1,20013,{expectedCount:s});else{const f=this.ot(n);if(f!==s){const m=this._t(t),p=m?this.ut(m,t,f):1;if(p!==0){this.rt(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,y)}}}}}_t(t){const n=t.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=qr(s).toUint8Array()}catch(p){if(p instanceof e0)return zr("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new Jm(f,o,u)}catch(p){return zr(p instanceof Rl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.fe===0?null:m}ut(t,n,s){return n.De.count===s-this.ht(t,n.targetId)?0:2}ht(t,n){const s=this.We.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.We.lt(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(m)||(this.Xe(n,u,null),o++)}),o}Pt(t){const n=new Map;this.Ge.forEach((u,f)=>{const m=this.st(f);if(m){if(u.current&&dm(m.target)){const p=new dt(m.target.path);this.Tt(p).has(f)||this.It(f,p)||this.Xe(f,p,Xe.newNoDocument(p,t))}u.Ne&&(n.set(f,u.Le()),u.ke())}});let s=Vt();this.Je.forEach((u,f)=>{let m=!0;f.forEachWhile(p=>{const y=this.st(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.ze.forEach((u,f)=>f.setReadTime(t));const o=new Rh(t,n,this.He,this.ze,s);return this.ze=Wi(),this.je=Nc(),this.Je=Nc(),this.He=new re(wt),o}Ze(t,n){if(!this.nt(t))return;const s=this.It(t,n.key)?2:0;this.tt(t).qe(n.key,s),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(t)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(t))}Xe(t,n,s){if(!this.nt(t))return;const o=this.tt(t);this.It(t,n)?o.qe(n,1):o.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(t)),this.Je=this.Je.insert(n,this.dt(n).add(t)),s&&(this.ze=this.ze.insert(n,s))}removeTarget(t){this.Ge.delete(t)}ot(t){const n=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let n=this.Ge.get(t);return n||(n=new Zv,this.Ge.set(t,n)),n}dt(t){let n=this.Je.get(t);return n||(n=new Re(wt),this.Je=this.Je.insert(t,n)),n}Tt(t){let n=this.je.get(t);return n||(n=new Re(wt),this.je=this.je.insert(t,n)),n}nt(t){const n=this.st(t)!==null;return n||st("WatchChangeAggregator","Detected inactive target",t),n}st(t){const n=this.Ge.get(t);return n&&n.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new Zv),this.We.getRemoteKeysForTarget(t).forEach(n=>{this.Xe(t,n,null)})}It(t,n){return this.We.getRemoteKeysForTarget(t).has(n)}}function Nc(){return new re(dt.comparator)}function Wv(){return new re(dt.comparator)}const N2={asc:"ASCENDING",desc:"DESCENDING"},M2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},V2={and:"AND",or:"OR"};class P2{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function gm(r,t){return r.useProto3Json||vh(t)?t:{value:t}}function ah(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function N0(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function x2(r,t){return ah(r,t.toTimestamp())}function di(r){return qt(!!r,49232),Tt.fromTimestamp(function(n){const s=Br(n);return new Jt(s.seconds,s.nanos)}(r))}function tg(r,t){return pm(r,t).canonicalString()}function pm(r,t){const n=function(o){return new ie(["projects",o.projectId,"databases",o.database])}(r).child("documents");return t===void 0?n:n.child(t)}function M0(r){const t=ie.fromString(r);return qt(U0(t),10190,{key:t.toString()}),t}function ym(r,t){return tg(r.databaseId,t.path)}function Qd(r,t){const n=M0(t);if(n.get(1)!==r.databaseId.projectId)throw new ut(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new ut(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new dt(P0(n))}function V0(r,t){return tg(r.databaseId,t)}function k2(r){const t=M0(r);return t.length===4?ie.emptyPath():P0(t)}function _m(r){return new ie(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function P0(r){return qt(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Jv(r,t,n){return{name:ym(r,t),fields:n.value.mapValue.fields}}function U2(r,t){let n;if("targetChange"in t){t.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:_t(39313,{state:y})}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=function(y,T){return y.useProto3Json?(qt(T===void 0||typeof T=="string",58123),He.fromBase64String(T||"")):(qt(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),He.fromUint8Array(T||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,m=f&&function(y){const T=y.code===void 0?Z.UNKNOWN:C0(y.code);return new ut(T,y.message||"")}(f);n=new O0(s,o,u,m||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=Qd(r,s.document.name),u=di(s.document.updateTime),f=s.document.createTime?di(s.document.createTime):Tt.min(),m=new Mn({mapValue:{fields:s.document.fields}}),p=Xe.newFoundDocument(o,u,f,m),y=s.targetIds||[],T=s.removedTargetIds||[];n=new Bc(y,T,p.key,p)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=Qd(r,s.document),u=s.readTime?di(s.readTime):Tt.min(),f=Xe.newNoDocument(o,u),m=s.removedTargetIds||[];n=new Bc([],m,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=Qd(r,s.document),u=s.removedTargetIds||[];n=new Bc([],u,o,null)}else{if(!("filter"in t))return _t(11601,{At:t});{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new I2(o,u),m=s.targetId;n=new D0(m,f)}}return n}function L2(r,t){let n;if(t instanceof Jl)n={update:Jv(r,t.key,t.value)};else if(t instanceof I0)n={delete:ym(r,t.key)};else if(t instanceof Ks)n={update:Jv(r,t.key,t.data),updateMask:Q2(t.fieldMask)};else{if(!(t instanceof b2))return _t(16599,{Rt:t.type});n={verify:ym(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(u,f){const m=f.transform;if(m instanceof rh)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Fl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Gl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof sh)return{fieldPath:f.field.canonicalString(),increment:m.Ee};throw _t(20930,{transform:f.transform})}(0,s))),t.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:x2(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:_t(27497)}(r,t.precondition)),n}function z2(r,t){return r&&r.length>0?(qt(t!==void 0,14353),r.map(n=>function(o,u){let f=o.updateTime?di(o.updateTime):di(u);return f.isEqual(Tt.min())&&(f=di(u)),new T2(f,o.transformResults||[])}(n,t))):[]}function j2(r,t){return{documents:[V0(r,t.path)]}}function B2(r,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=V0(r,o);const u=function(y){if(y.length!==0)return k0(_i.create(y,"and"))}(t.filters);u&&(n.structuredQuery.where=u);const f=function(y){if(y.length!==0)return y.map(T=>function(C){return{field:qa(C.field),direction:F2(C.dir)}}(T))}(t.orderBy);f&&(n.structuredQuery.orderBy=f);const m=gm(r,t.limit);return m!==null&&(n.structuredQuery.limit=m),t.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(t.endAt)),{Vt:n,parent:o}}function q2(r){let t=k2(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){qt(s===1,65062);const T=n.from[0];T.allDescendants?o=T.collectionId:t=t.child(T.collectionId)}let u=[];n.where&&(u=function(w){const C=x0(w);return C instanceof _i&&h0(C)?C.getFilters():[C]}(n.where));let f=[];n.orderBy&&(f=function(w){return w.map(C=>function(X){return new ih(Ha(X.field),function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(X.direction))}(C))}(n.orderBy));let m=null;n.limit&&(m=function(w){let C;return C=typeof w=="object"?w.value:w,vh(C)?null:C}(n.limit));let p=null;n.startAt&&(p=function(w){const C=!!w.before,B=w.values||[];return new nh(B,C)}(n.startAt));let y=null;return n.endAt&&(y=function(w){const C=!w.before,B=w.values||[];return new nh(B,C)}(n.endAt)),o2(t,o,f,u,m,"F",p,y)}function H2(r,t){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _t(28987,{purpose:o})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function x0(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ha(n.unaryFilter.field);return we.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ha(n.unaryFilter.field);return we.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ha(n.unaryFilter.field);return we.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ha(n.unaryFilter.field);return we.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _t(61313);default:return _t(60726)}}(r):r.fieldFilter!==void 0?function(n){return we.create(Ha(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _t(58110);default:return _t(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return _i.create(n.compositeFilter.filters.map(s=>x0(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _t(1026)}}(n.compositeFilter.op))}(r):_t(30097,{filter:r})}function F2(r){return N2[r]}function G2(r){return M2[r]}function K2(r){return V2[r]}function qa(r){return{fieldPath:r.canonicalString()}}function Ha(r){return qe.fromServerFormat(r.fieldPath)}function k0(r){return r instanceof we?function(n){if(n.op==="=="){if(jv(n.value))return{unaryFilter:{field:qa(n.field),op:"IS_NAN"}};if(zv(n.value))return{unaryFilter:{field:qa(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(jv(n.value))return{unaryFilter:{field:qa(n.field),op:"IS_NOT_NAN"}};if(zv(n.value))return{unaryFilter:{field:qa(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qa(n.field),op:G2(n.op),value:n.value}}}(r):r instanceof _i?function(n){const s=n.getFilters().map(o=>k0(o));return s.length===1?s[0]:{compositeFilter:{op:K2(n.op),filters:s}}}(r):_t(54877,{filter:r})}function Q2(r){const t=[];return r.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function U0(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Vr{constructor(t,n,s,o,u=Tt.min(),f=Tt.min(),m=He.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(t){return new Vr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Y2{constructor(t){this.gt=t}}function X2(r){const t=q2({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?mm(t,t.limit,"L"):t}/**
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
 */class $2{constructor(){this.Dn=new Z2}addToCollectionParentIndex(t,n){return this.Dn.add(n),Y.resolve()}getCollectionParents(t,n){return Y.resolve(this.Dn.getEntries(n))}addFieldIndex(t,n){return Y.resolve()}deleteFieldIndex(t,n){return Y.resolve()}deleteAllFieldIndexes(t){return Y.resolve()}createTargetIndexes(t,n){return Y.resolve()}getDocumentsMatchingTarget(t,n){return Y.resolve(null)}getIndexType(t,n){return Y.resolve(0)}getFieldIndexes(t,n){return Y.resolve([])}getNextCollectionGroupToUpdate(t){return Y.resolve(null)}getMinOffset(t,n){return Y.resolve(jr.min())}getMinOffsetFromCollectionGroup(t,n){return Y.resolve(jr.min())}updateCollectionGroup(t,n,s){return Y.resolve()}updateIndexEntries(t,n){return Y.resolve()}}class Z2{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new Re(ie.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new Re(ie.comparator)).toArray()}}/**
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
 */const tE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},L0=41943040;class sn{static withCacheSize(t){return new sn(t,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */sn.DEFAULT_COLLECTION_PERCENTILE=10,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sn.DEFAULT=new sn(L0,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sn.DISABLED=new sn(-1,0,0);/**
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
 */class Wa{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new Wa(0)}static ur(){return new Wa(-1)}}/**
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
 */const eE="LruGarbageCollector",W2=1048576;function nE([r,t],[n,s]){const o=wt(r,n);return o===0?wt(t,s):o}class J2{constructor(t){this.Tr=t,this.buffer=new Re(nE),this.Ir=0}dr(){return++this.Ir}Er(t){const n=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();nE(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class tD{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){st(eE,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){so(n)?st(eE,"Ignoring IndexedDB error during garbage collection: ",n):await ro(n)}await this.Rr(3e5)})}}class eD{constructor(t,n){this.Vr=t,this.params=n}calculateTargetCount(t,n){return this.Vr.mr(t).next(s=>Math.floor(n/100*s))}nthSequenceNumber(t,n){if(n===0)return Y.resolve(_h.ue);const s=new J2(n);return this.Vr.forEachTarget(t,o=>s.Er(o.sequenceNumber)).next(()=>this.Vr.gr(t,o=>s.Er(o))).next(()=>s.maxValue)}removeTargets(t,n,s){return this.Vr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.Vr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(st("LruGarbageCollector","Garbage collection skipped; disabled"),Y.resolve(tE)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(st("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),tE):this.pr(t,n))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,n){let s,o,u,f,m,p,y;const T=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(st("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,f=Date.now(),this.nthSequenceNumber(t,o))).next(w=>(s=w,m=Date.now(),this.removeTargets(t,s,n))).next(w=>(u=w,p=Date.now(),this.removeOrphanedDocuments(t,s))).next(w=>(y=Date.now(),ja()<=Mt.DEBUG&&st("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-T}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${w} documents in `+(y-p)+`ms
Total Duration: ${y-T}ms`),Y.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:w})))}}function nD(r,t){return new eD(r,t)}/**
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
 */class iD{constructor(){this.changes=new Gs(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Xe.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?Y.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class rD{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class sD{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(t,n))).next(o=>(s!==null&&Pl(s.mutation,o,qn.empty(),Jt.now()),o))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,Vt()).next(()=>s))}getLocalViewOfDocuments(t,n,s=Vt()){const o=Vs();return this.populateOverlays(t,o,n).next(()=>this.computeViews(t,n,o,s).next(u=>{let f=wl();return u.forEach((m,p)=>{f=f.insert(m,p.overlayedDocument)}),f}))}getOverlayedDocuments(t,n){const s=Vs();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,Vt()))}populateOverlays(t,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(t,o).next(u=>{u.forEach((f,m)=>{n.set(f,m)})})}computeViews(t,n,s,o){let u=Wi();const f=Vl(),m=function(){return Vl()}();return n.forEach((p,y)=>{const T=s.get(y.key);o.has(y.key)&&(T===void 0||T.mutation instanceof Ks)?u=u.insert(y.key,y):T!==void 0?(f.set(y.key,T.mutation.getFieldMask()),Pl(T.mutation,y,T.mutation.getFieldMask(),Jt.now())):f.set(y.key,qn.empty())}),this.recalculateAndSaveOverlays(t,u).next(p=>(p.forEach((y,T)=>f.set(y,T)),n.forEach((y,T)=>{var w;return m.set(y,new rD(T,(w=f.get(y))!==null&&w!==void 0?w:null))}),m))}recalculateAndSaveOverlays(t,n){const s=Vl();let o=new re((f,m)=>f-m),u=Vt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(f=>{for(const m of f)m.keys().forEach(p=>{const y=n.get(p);if(y===null)return;let T=s.get(p)||qn.empty();T=m.applyToLocalView(y,T),s.set(p,T);const w=(o.get(m.batchId)||Vt()).add(p);o=o.insert(m.batchId,w)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),y=p.key,T=p.value,w=v0();T.forEach(C=>{if(!u.has(C)){const B=w0(n.get(C),s.get(C));B!==null&&w.set(C,B),u=u.add(C)}}),f.push(this.documentOverlayCache.saveOverlays(t,y,w))}return Y.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s,o){return function(f){return dt.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):l2(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-u.size):Y.resolve(Vs());let m=jl,p=u;return f.next(y=>Y.forEach(y,(T,w)=>(m<w.largestBatchId&&(m=w.largestBatchId),u.get(T)?Y.resolve():this.remoteDocumentCache.getEntry(t,T).next(C=>{p=p.insert(T,C)}))).next(()=>this.populateOverlays(t,y,u)).next(()=>this.computeViews(t,p,y,Vt())).next(T=>({batchId:m,changes:_0(T)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new dt(n)).next(s=>{let o=wl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const u=n.collectionGroup;let f=wl();return this.indexManager.getCollectionParents(t,u).next(m=>Y.forEach(m,p=>{const y=function(w,C){return new Th(C,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(n,p.child(u));return this.getDocumentsMatchingCollectionQuery(t,y,s,o).next(T=>{T.forEach((w,C)=>{f=f.insert(w,C)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,u,o))).next(f=>{u.forEach((p,y)=>{const T=y.getKey();f.get(T)===null&&(f=f.insert(T,Xe.newInvalidDocument(T)))});let m=wl();return f.forEach((p,y)=>{const T=u.get(p);T!==void 0&&Pl(T.mutation,y,qn.empty(),Jt.now()),Sh(n,y)&&(m=m.insert(p,y))}),m})}}/**
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
 */class aD{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,n){return Y.resolve(this.Br.get(n))}saveBundleMetadata(t,n){return this.Br.set(n.id,function(o){return{id:o.id,version:o.version,createTime:di(o.createTime)}}(n)),Y.resolve()}getNamedQuery(t,n){return Y.resolve(this.Lr.get(n))}saveNamedQuery(t,n){return this.Lr.set(n.name,function(o){return{name:o.name,query:X2(o.bundledQuery),readTime:di(o.readTime)}}(n)),Y.resolve()}}/**
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
 */class oD{constructor(){this.overlays=new re(dt.comparator),this.kr=new Map}getOverlay(t,n){return Y.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Vs();return Y.forEach(n,o=>this.getOverlay(t,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((o,u)=>{this.wt(t,n,u)}),Y.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.kr.delete(s)),Y.resolve()}getOverlaysForCollection(t,n,s){const o=Vs(),u=n.length+1,f=new dt(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return Y.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let u=new re((y,T)=>y-T);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let T=u.get(y.largestBatchId);T===null&&(T=Vs(),u=u.insert(y.largestBatchId,T)),T.set(y.getKey(),y)}}const m=Vs(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,T)=>m.set(y,T)),!(m.size()>=o)););return Y.resolve(m)}wt(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new R2(n,s));let u=this.kr.get(n);u===void 0&&(u=Vt(),this.kr.set(n,u)),this.kr.set(n,u.add(s.key))}}/**
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
 */class lD{constructor(){this.sessionToken=He.EMPTY_BYTE_STRING}getSessionToken(t){return Y.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,Y.resolve()}}/**
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
 */class eg{constructor(){this.qr=new Re(Ve.Qr),this.$r=new Re(Ve.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,n){const s=new Ve(t,n);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.Wr(new Ve(t,n))}Gr(t,n){t.forEach(s=>this.removeReference(s,n))}zr(t){const n=new dt(new ie([])),s=new Ve(n,t),o=new Ve(n,t+1),u=[];return this.$r.forEachInRange([s,o],f=>{this.Wr(f),u.push(f.key)}),u}jr(){this.qr.forEach(t=>this.Wr(t))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const n=new dt(new ie([])),s=new Ve(n,t),o=new Ve(n,t+1);let u=Vt();return this.$r.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(t){const n=new Ve(t,0),s=this.qr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Ve{constructor(t,n){this.key=t,this.Hr=n}static Qr(t,n){return dt.comparator(t.key,n.key)||wt(t.Hr,n.Hr)}static Ur(t,n){return wt(t.Hr,n.Hr)||dt.comparator(t.key,n.key)}}/**
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
 */class uD{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Re(Ve.Qr)}checkEmpty(t){return Y.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const u=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new w2(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Yr=this.Yr.add(new Ve(m.key,u)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return Y.resolve(f)}lookupMutationBatch(t,n){return Y.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.Xr(s),u=o<0?0:o;return Y.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(this.mutationQueue.length===0?Gm:this.er-1)}getAllMutationBatches(t){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Ve(n,0),o=new Ve(n,Number.POSITIVE_INFINITY),u=[];return this.Yr.forEachInRange([s,o],f=>{const m=this.Zr(f.Hr);u.push(m)}),Y.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Re(wt);return n.forEach(o=>{const u=new Ve(o,0),f=new Ve(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([u,f],m=>{s=s.add(m.Hr)})}),Y.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let u=s;dt.isDocumentKey(u)||(u=u.child(""));const f=new Ve(new dt(u),0);let m=new Re(wt);return this.Yr.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(p.Hr)),!0)},f),Y.resolve(this.ei(m))}ei(t){const n=[];return t.forEach(s=>{const o=this.Zr(s);o!==null&&n.push(o)}),n}removeMutationBatch(t,n){qt(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return Y.forEach(n.mutations,o=>{const u=new Ve(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.Yr=s})}rr(t){}containsKey(t,n){const s=new Ve(n,0),o=this.Yr.firstAfterOrEqual(s);return Y.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,Y.resolve()}ti(t,n){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const n=this.Xr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class cD{constructor(t){this.ni=t,this.docs=function(){return new re(dt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ni(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return Y.resolve(s?s.document.mutableCopy():Xe.newInvalidDocument(n))}getEntries(t,n){let s=Wi();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Xe.newInvalidDocument(o))}),Y.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let u=Wi();const f=n.path,m=new dt(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:y,value:{document:T}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||zC(LC(T),s)<=0||(o.has(T.key)||Sh(n,T))&&(u=u.insert(T.key,T.mutableCopy()))}return Y.resolve(u)}getAllFromCollectionGroup(t,n,s,o){_t(9500)}ri(t,n){return Y.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new hD(this)}getSize(t){return Y.resolve(this.size)}}class hD extends iD{constructor(t){super(),this.Or=t}applyChanges(t){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Or.addEntry(t,o)):this.Or.removeEntry(s)}),Y.waitFor(n)}getFromCache(t,n){return this.Or.getEntry(t,n)}getAllFromCache(t,n){return this.Or.getEntries(t,n)}}/**
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
 */class fD{constructor(t){this.persistence=t,this.ii=new Gs(n=>Ym(n),Xm),this.lastRemoteSnapshotVersion=Tt.min(),this.highestTargetId=0,this.si=0,this.oi=new eg,this.targetCount=0,this._i=Wa.ar()}forEachTarget(t,n){return this.ii.forEach((s,o)=>n(o)),Y.resolve()}getLastRemoteSnapshotVersion(t){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Y.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.si&&(this.si=n),Y.resolve()}hr(t){this.ii.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this._i=new Wa(n),this.highestTargetId=n),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,n){return this.hr(n),this.targetCount+=1,Y.resolve()}updateTargetData(t,n){return this.hr(n),Y.resolve()}removeTargetData(t,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,Y.resolve()}removeTargets(t,n,s){let o=0;const u=[];return this.ii.forEach((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.ii.delete(f),u.push(this.removeMatchingKeysForTargetId(t,m.targetId)),o++)}),Y.waitFor(u).next(()=>o)}getTargetCount(t){return Y.resolve(this.targetCount)}getTargetData(t,n){const s=this.ii.get(n)||null;return Y.resolve(s)}addMatchingKeys(t,n,s){return this.oi.Kr(n,s),Y.resolve()}removeMatchingKeys(t,n,s){this.oi.Gr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(t,f))}),Y.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this.oi.zr(n),Y.resolve()}getMatchingKeysForTargetId(t,n){const s=this.oi.Jr(n);return Y.resolve(s)}containsKey(t,n){return Y.resolve(this.oi.containsKey(n))}}/**
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
 */class z0{constructor(t,n){this.ai={},this.overlays={},this.ui=new _h(0),this.ci=!1,this.ci=!0,this.li=new lD,this.referenceDelegate=t(this),this.hi=new fD(this),this.indexManager=new $2,this.remoteDocumentCache=function(o){return new cD(o)}(s=>this.referenceDelegate.Pi(s)),this.serializer=new Y2(n),this.Ti=new aD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new oD,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.ai[t.toKey()];return s||(s=new uD(n,this.referenceDelegate),this.ai[t.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,n,s){st("MemoryPersistence","Starting transaction:",t);const o=new dD(this.ui.next());return this.referenceDelegate.Ii(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ei(t,n){return Y.or(Object.values(this.ai).map(s=>()=>s.containsKey(t,n)))}}class dD extends BC{constructor(t){super(),this.currentSequenceNumber=t}}class ng{constructor(t){this.persistence=t,this.Ai=new eg,this.Ri=null}static Vi(t){return new ng(t)}get mi(){if(this.Ri)return this.Ri;throw _t(60996)}addReference(t,n,s){return this.Ai.addReference(s,n),this.mi.delete(s.toString()),Y.resolve()}removeReference(t,n,s){return this.Ai.removeReference(s,n),this.mi.add(s.toString()),Y.resolve()}markPotentiallyOrphaned(t,n){return this.mi.add(n.toString()),Y.resolve()}removeTarget(t,n){this.Ai.zr(n.targetId).forEach(o=>this.mi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(o=>{o.forEach(u=>this.mi.add(u.toString()))}).next(()=>s.removeTargetData(t,n))}Ii(){this.Ri=new Set}di(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.mi,s=>{const o=dt.fromPath(s);return this.fi(t,o).next(u=>{u||n.removeEntry(o,Tt.min())})}).next(()=>(this.Ri=null,n.apply(t)))}updateLimboDocument(t,n){return this.fi(t,n).next(s=>{s?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(t){return 0}fi(t,n){return Y.or([()=>Y.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ei(t,n)])}}class oh{constructor(t,n){this.persistence=t,this.gi=new Gs(s=>FC(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=nD(this,n)}static Vi(t,n){return new oh(t,n)}Ii(){}di(t){return Y.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}mr(t){const n=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>n.next(o=>s+o))}yr(t){let n=0;return this.gr(t,s=>{n++}).next(()=>n)}gr(t,n){return Y.forEach(this.gi,(s,o)=>this.Sr(t,s,o).next(u=>u?Y.resolve():n(o)))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ri(t,f=>this.Sr(t,f,n).next(m=>{m||(s++,u.removeEntry(f,Tt.min()))})).next(()=>u.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,n){return this.gi.set(n,t.currentSequenceNumber),Y.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.gi.set(s,t.currentSequenceNumber),Y.resolve()}removeReference(t,n,s){return this.gi.set(s,t.currentSequenceNumber),Y.resolve()}updateLimboDocument(t,n){return this.gi.set(n,t.currentSequenceNumber),Y.resolve()}Pi(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Lc(t.data.value)),n}Sr(t,n,s){return Y.or([()=>this.persistence.Ei(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.gi.get(n);return Y.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class ig{constructor(t,n,s,o){this.targetId=t,this.fromCache=n,this.Is=s,this.ds=o}static Es(t,n){let s=Vt(),o=Vt();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new ig(t,n.fromCache,s,o)}}/**
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
 */class mD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class gD{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return wb()?8:qC($e())>0?6:4}()}initialize(t,n){this.gs=t,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(t,n,s,o){const u={result:null};return this.ps(t,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.ys(t,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new mD;return this.ws(t,n,f).next(m=>{if(u.result=m,this.Rs)return this.Ss(t,n,f,m.size)})}).next(()=>u.result)}Ss(t,n,s,o){return s.documentReadCount<this.Vs?(ja()<=Mt.DEBUG&&st("QueryEngine","SDK will not create cache indexes for query:",Ba(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Y.resolve()):(ja()<=Mt.DEBUG&&st("QueryEngine","Query:",Ba(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(ja()<=Mt.DEBUG&&st("QueryEngine","The SDK decides to create cache indexes for query:",Ba(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,fi(n))):Y.resolve())}ps(t,n){if(Fv(n))return Y.resolve(null);let s=fi(n);return this.indexManager.getIndexType(t,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=mm(n,null,"F"),s=fi(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(u=>{const f=Vt(...u);return this.gs.getDocuments(t,f).next(m=>this.indexManager.getMinOffset(t,s).next(p=>{const y=this.bs(n,m);return this.Ds(n,y,f,p.readTime)?this.ps(t,mm(n,null,"F")):this.vs(t,y,n,p)}))})))}ys(t,n,s,o){return Fv(n)||o.isEqual(Tt.min())?Y.resolve(null):this.gs.getDocuments(t,s).next(u=>{const f=this.bs(n,u);return this.Ds(n,f,s,o)?Y.resolve(null):(ja()<=Mt.DEBUG&&st("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ba(n)),this.vs(t,f,n,UC(o,jl)).next(m=>m))})}bs(t,n){let s=new Re(p0(t));return n.forEach((o,u)=>{Sh(t,u)&&(s=s.add(u))}),s}Ds(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ws(t,n,s){return ja()<=Mt.DEBUG&&st("QueryEngine","Using full collection scan to execute query:",Ba(n)),this.gs.getDocumentsMatchingQuery(t,n,jr.min(),s)}vs(t,n,s,o){return this.gs.getDocumentsMatchingQuery(t,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
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
 */const rg="LocalStore",pD=3e8;class yD{constructor(t,n,s,o){this.persistence=t,this.Cs=n,this.serializer=o,this.Fs=new re(wt),this.Ms=new Gs(u=>Ym(u),Xm),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(s)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new sD(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Fs))}}function _D(r,t,n,s){return new yD(r,t,n,s)}async function j0(r,t){const n=At(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.Ns(t),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],m=[];let p=Vt();for(const y of o){f.push(y.batchId);for(const T of y.mutations)p=p.add(T.key)}for(const y of u){m.push(y.batchId);for(const T of y.mutations)p=p.add(T.key)}return n.localDocuments.getDocuments(s,p).next(y=>({Bs:y,removedBatchIds:f,addedBatchIds:m}))})})}function vD(r,t){const n=At(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=t.batch.keys(),u=n.Os.newChangeBuffer({trackRemovals:!0});return function(m,p,y,T){const w=y.batch,C=w.keys();let B=Y.resolve();return C.forEach(X=>{B=B.next(()=>T.getEntry(p,X)).next(nt=>{const W=y.docVersions.get(X);qt(W!==null,48541),nt.version.compareTo(W)<0&&(w.applyToRemoteDocument(nt,y),nt.isValidDocument()&&(nt.setReadTime(y.commitVersion),T.addEntry(nt)))})}),B.next(()=>m.mutationQueue.removeMutationBatch(p,w))}(n,s,t,u).next(()=>u.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let p=Vt();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(p=p.add(m.batch.mutations[y].key));return p}(t))).next(()=>n.localDocuments.getDocuments(s,o))})}function B0(r){const t=At(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.hi.getLastRemoteSnapshotVersion(n))}function ED(r,t){const n=At(r),s=t.snapshotVersion;let o=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.Os.newChangeBuffer({trackRemovals:!0});o=n.Fs;const m=[];t.targetChanges.forEach((T,w)=>{const C=o.get(w);if(!C)return;m.push(n.hi.removeMatchingKeys(u,T.removedDocuments,w).next(()=>n.hi.addMatchingKeys(u,T.addedDocuments,w)));let B=C.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(w)!==null?B=B.withResumeToken(He.EMPTY_BYTE_STRING,Tt.min()).withLastLimboFreeSnapshotVersion(Tt.min()):T.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(T.resumeToken,s)),o=o.insert(w,B),function(nt,W,ft){return nt.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-nt.snapshotVersion.toMicroseconds()>=pD?!0:ft.addedDocuments.size+ft.modifiedDocuments.size+ft.removedDocuments.size>0}(C,B,T)&&m.push(n.hi.updateTargetData(u,B))});let p=Wi(),y=Vt();if(t.documentUpdates.forEach(T=>{t.resolvedLimboDocuments.has(T)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,T))}),m.push(TD(u,f,t.documentUpdates).next(T=>{p=T.Ls,y=T.ks})),!s.isEqual(Tt.min())){const T=n.hi.getLastRemoteSnapshotVersion(u).next(w=>n.hi.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(T)}return Y.waitFor(m).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,p,y)).next(()=>p)}).then(u=>(n.Fs=o,u))}function TD(r,t,n){let s=Vt(),o=Vt();return n.forEach(u=>s=s.add(u)),t.getEntries(r,s).next(u=>{let f=Wi();return n.forEach((m,p)=>{const y=u.get(m);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(Tt.min())?(t.removeEntry(m,p.readTime),f=f.insert(m,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(p),f=f.insert(m,p)):st(rg,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",p.version)}),{Ls:f,ks:o}})}function AD(r,t){const n=At(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=Gm),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function SD(r,t){const n=At(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.hi.getTargetData(s,t).next(u=>u?(o=u,Y.resolve(o)):n.hi.allocateTargetId(s).next(f=>(o=new Vr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.hi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(s.targetId,s),n.Ms.set(t,s.targetId)),s})}async function vm(r,t,n){const s=At(r),o=s.Fs.get(t),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!so(f))throw f;st(rg,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Fs=s.Fs.remove(t),s.Ms.delete(o.target)}function iE(r,t,n){const s=At(r);let o=Tt.min(),u=Vt();return s.persistence.runTransaction("Execute query","readwrite",f=>function(p,y,T){const w=At(p),C=w.Ms.get(T);return C!==void 0?Y.resolve(w.Fs.get(C)):w.hi.getTargetData(y,T)}(s,f,fi(t)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(f,m.targetId).next(p=>{u=p})}).next(()=>s.Cs.getDocumentsMatchingQuery(f,t,n?o:Tt.min(),n?u:Vt())).next(m=>(bD(s,c2(t),m),{documents:m,qs:u})))}function bD(r,t,n){let s=r.xs.get(t)||Tt.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.xs.set(t,s)}class rE{constructor(){this.activeTargetIds=p2()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class wD{constructor(){this.Fo=new rE,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,n,s){this.Mo[t]=n}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new rE,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class RD{xo(t){}shutdown(){}}/**
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
 */const sE="ConnectivityMonitor";class aE{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){st(sE,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){st(sE,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Mc=null;function Em(){return Mc===null?Mc=function(){return 268435456+Math.round(2147483648*Math.random())}():Mc++,"0x"+Mc.toString(16)}/**
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
 */const Yd="RestConnection",ID={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class CD{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+t.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===th?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(t,n,s,o,u){const f=Em(),m=this.Go(t,n.toUriEncodedString());st(Yd,`Sending RPC '${t}' ${f}:`,m,s);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(p,o,u);const{host:y}=new URL(m),T=to(y);return this.jo(t,m,p,s,T).then(w=>(st(Yd,`Received RPC '${t}' ${f}: `,w),w),w=>{throw zr(Yd,`RPC '${t}' ${f} failed with error: `,w,"url: ",m,"request:",s),w})}Jo(t,n,s,o,u,f){return this.Wo(t,n,s,o,u)}zo(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+io}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>t[u]=o),s&&s.headers.forEach((o,u)=>t[u]=o)}Go(t,n){const s=ID[t];return`${this.$o}/v1/${n}:${s}`}terminate(){}}/**
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
 */class DD{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
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
 */const Qe="WebChannelConnection";class OD extends CD{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,n,s,o,u){const f=Em();return new Promise((m,p)=>{const y=new FT;y.setWithCredentials(!0),y.listenOnce(GT.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case Uc.NO_ERROR:const w=y.getResponseJson();st(Qe,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(w)),m(w);break;case Uc.TIMEOUT:st(Qe,`RPC '${t}' ${f} timed out`),p(new ut(Z.DEADLINE_EXCEEDED,"Request time out"));break;case Uc.HTTP_ERROR:const C=y.getStatus();if(st(Qe,`RPC '${t}' ${f} failed with status:`,C,"response text:",y.getResponseText()),C>0){let B=y.getResponseJson();Array.isArray(B)&&(B=B[0]);const X=B?.error;if(X&&X.status&&X.message){const nt=function(ft){const et=ft.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(et)>=0?et:Z.UNKNOWN}(X.status);p(new ut(nt,X.message))}else p(new ut(Z.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new ut(Z.UNAVAILABLE,"Connection failed."));break;default:_t(9055,{c_:t,streamId:f,l_:y.getLastErrorCode(),h_:y.getLastError()})}}finally{st(Qe,`RPC '${t}' ${f} completed.`)}});const T=JSON.stringify(o);st(Qe,`RPC '${t}' ${f} sending request:`,o),y.send(n,"POST",T,s,15)})}P_(t,n,s){const o=Em(),u=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=YT(),m=QT(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.zo(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const T=u.join("");st(Qe,`Creating RPC '${t}' stream ${o}: ${T}`,p);const w=f.createWebChannel(T,p);this.T_(w);let C=!1,B=!1;const X=new DD({Ho:W=>{B?st(Qe,`Not sending because RPC '${t}' stream ${o} is closed:`,W):(C||(st(Qe,`Opening RPC '${t}' stream ${o} transport.`),w.open(),C=!0),st(Qe,`RPC '${t}' stream ${o} sending:`,W),w.send(W))},Yo:()=>w.close()}),nt=(W,ft,et)=>{W.listen(ft,ot=>{try{et(ot)}catch(Dt){setTimeout(()=>{throw Dt},0)}})};return nt(w,bl.EventType.OPEN,()=>{B||(st(Qe,`RPC '${t}' stream ${o} transport opened.`),X.s_())}),nt(w,bl.EventType.CLOSE,()=>{B||(B=!0,st(Qe,`RPC '${t}' stream ${o} transport closed`),X.__(),this.I_(w))}),nt(w,bl.EventType.ERROR,W=>{B||(B=!0,zr(Qe,`RPC '${t}' stream ${o} transport errored. Name:`,W.name,"Message:",W.message),X.__(new ut(Z.UNAVAILABLE,"The operation could not be completed")))}),nt(w,bl.EventType.MESSAGE,W=>{var ft;if(!B){const et=W.data[0];qt(!!et,16349);const ot=et,Dt=ot?.error||((ft=ot[0])===null||ft===void 0?void 0:ft.error);if(Dt){st(Qe,`RPC '${t}' stream ${o} received error:`,Dt);const pt=Dt.status;let Rt=function(R){const N=ye[R];if(N!==void 0)return C0(N)}(pt),M=Dt.message;Rt===void 0&&(Rt=Z.INTERNAL,M="Unknown error status: "+pt+" with message "+Dt.message),B=!0,X.__(new ut(Rt,M)),w.close()}else st(Qe,`RPC '${t}' stream ${o} received:`,et),X.a_(et)}}),nt(m,KT.STAT_EVENT,W=>{W.stat===lm.PROXY?st(Qe,`RPC '${t}' stream ${o} detected buffering proxy`):W.stat===lm.NOPROXY&&st(Qe,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{X.o_()},0),X}terminate(){this.u_.forEach(t=>t.close()),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter(n=>n===t)}}function Xd(){return typeof document<"u"?document:null}/**
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
 */function Ih(r){return new P2(r,!0)}/**
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
 */class q0{constructor(t,n,s=1e3,o=1.5,u=6e4){this.Fi=t,this.timerId=n,this.d_=s,this.E_=o,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const n=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,n-s);o>0&&st("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,()=>(this.m_=Date.now(),t())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const oE="PersistentStream";class H0{constructor(t,n,s,o,u,f,m,p){this.Fi=t,this.w_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new q0(t,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():n&&n.code===Z.RESOURCE_EXHAUSTED?(Zi(n.toString()),Zi("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(n)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.b_===n&&this.W_(s,o)},s=>{t(()=>{const o=new ut(Z.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)})})}W_(t,n){const s=this.K_(this.b_);this.stream=this.z_(t,n),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.e_(()=>{s(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(o=>{s(()=>this.G_(o))}),this.stream.onMessage(o=>{s(()=>++this.C_==1?this.j_(o):this.onNext(o))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(t){return st(oE,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return n=>{this.Fi.enqueueAndForget(()=>this.b_===t?n():(st(oE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ND extends H0{constructor(t,n,s,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}z_(t,n){return this.connection.P_("Listen",t,n)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const n=U2(this.serializer,t),s=function(u){if(!("targetChange"in u))return Tt.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?Tt.min():f.readTime?di(f.readTime):Tt.min()}(t);return this.listener.J_(n,s)}H_(t){const n={};n.database=_m(this.serializer),n.addTarget=function(u,f){let m;const p=f.target;if(m=dm(p)?{documents:j2(u,p)}:{query:B2(u,p).Vt},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=N0(u,f.resumeToken);const y=gm(u,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(Tt.min())>0){m.readTime=ah(u,f.snapshotVersion.toTimestamp());const y=gm(u,f.expectedCount);y!==null&&(m.expectedCount=y)}return m}(this.serializer,t);const s=H2(this.serializer,t);s&&(n.labels=s),this.k_(n)}Y_(t){const n={};n.database=_m(this.serializer),n.removeTarget=t,this.k_(n)}}class MD extends H0{constructor(t,n,s,o,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,n){return this.connection.P_("Write",t,n)}j_(t){return qt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,qt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){qt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const n=z2(t.writeResults,t.commitTime),s=di(t.commitTime);return this.listener.ta(s,n)}na(){const t={};t.database=_m(this.serializer),this.k_(t)}X_(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>L2(this.serializer,s))};this.k_(n)}}/**
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
 */class VD{}class PD extends VD{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ut(Z.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,n,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.Wo(t,pm(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ut(Z.UNKNOWN,u.toString())})}Jo(t,n,s,o,u){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Jo(t,pm(n,s),o,f,m,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ut(Z.UNKNOWN,f.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class xD{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Zi(n),this._a=!1):st("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const js="RemoteStore";class kD{constructor(t,n,s,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=u,this.Ea.xo(f=>{s.enqueueAndForget(async()=>{Qs(this)&&(st(js,"Restarting streams for network reachability change."),await async function(p){const y=At(p);y.Ia.add(4),await eu(y),y.Aa.set("Unknown"),y.Ia.delete(4),await Ch(y)}(this))})}),this.Aa=new xD(s,o)}}async function Ch(r){if(Qs(r))for(const t of r.da)await t(!0)}async function eu(r){for(const t of r.da)await t(!1)}function F0(r,t){const n=At(r);n.Ta.has(t.targetId)||(n.Ta.set(t.targetId,t),lg(n)?og(n):ao(n).x_()&&ag(n,t))}function sg(r,t){const n=At(r),s=ao(n);n.Ta.delete(t),s.x_()&&G0(n,t),n.Ta.size===0&&(s.x_()?s.B_():Qs(n)&&n.Aa.set("Unknown"))}function ag(r,t){if(r.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Tt.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ao(r).H_(t)}function G0(r,t){r.Ra.$e(t),ao(r).Y_(t)}function og(r){r.Ra=new O2({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>r.Ta.get(t)||null,lt:()=>r.datastore.serializer.databaseId}),ao(r).start(),r.Aa.aa()}function lg(r){return Qs(r)&&!ao(r).M_()&&r.Ta.size>0}function Qs(r){return At(r).Ia.size===0}function K0(r){r.Ra=void 0}async function UD(r){r.Aa.set("Online")}async function LD(r){r.Ta.forEach((t,n)=>{ag(r,t)})}async function zD(r,t){K0(r),lg(r)?(r.Aa.la(t),og(r)):r.Aa.set("Unknown")}async function jD(r,t,n){if(r.Aa.set("Online"),t instanceof O0&&t.state===2&&t.cause)try{await async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Ta.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ta.delete(m),o.Ra.removeTarget(m))}(r,t)}catch(s){st(js,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await lh(r,s)}else if(t instanceof Bc?r.Ra.Ye(t):t instanceof D0?r.Ra.it(t):r.Ra.et(t),!n.isEqual(Tt.min()))try{const s=await B0(r.localStore);n.compareTo(s)>=0&&await function(u,f){const m=u.Ra.Pt(f);return m.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const T=u.Ta.get(y);T&&u.Ta.set(y,T.withResumeToken(p.resumeToken,f))}}),m.targetMismatches.forEach((p,y)=>{const T=u.Ta.get(p);if(!T)return;u.Ta.set(p,T.withResumeToken(He.EMPTY_BYTE_STRING,T.snapshotVersion)),G0(u,p);const w=new Vr(T.target,p,y,T.sequenceNumber);ag(u,w)}),u.remoteSyncer.applyRemoteEvent(m)}(r,n)}catch(s){st(js,"Failed to raise snapshot:",s),await lh(r,s)}}async function lh(r,t,n){if(!so(t))throw t;r.Ia.add(1),await eu(r),r.Aa.set("Offline"),n||(n=()=>B0(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{st(js,"Retrying IndexedDB access"),await n(),r.Ia.delete(1),await Ch(r)})}function Q0(r,t){return t().catch(n=>lh(r,n,t))}async function Dh(r){const t=At(r),n=Fr(t);let s=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:Gm;for(;BD(t);)try{const o=await AD(t.localStore,s);if(o===null){t.Pa.length===0&&n.B_();break}s=o.batchId,qD(t,o)}catch(o){await lh(t,o)}Y0(t)&&X0(t)}function BD(r){return Qs(r)&&r.Pa.length<10}function qD(r,t){r.Pa.push(t);const n=Fr(r);n.x_()&&n.Z_&&n.X_(t.mutations)}function Y0(r){return Qs(r)&&!Fr(r).M_()&&r.Pa.length>0}function X0(r){Fr(r).start()}async function HD(r){Fr(r).na()}async function FD(r){const t=Fr(r);for(const n of r.Pa)t.X_(n.mutations)}async function GD(r,t,n){const s=r.Pa.shift(),o=Wm.from(s,t,n);await Q0(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Dh(r)}async function KD(r,t){t&&Fr(r).Z_&&await async function(s,o){if(function(f){return C2(f)&&f!==Z.ABORTED}(o.code)){const u=s.Pa.shift();Fr(s).N_(),await Q0(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Dh(s)}}(r,t),Y0(r)&&X0(r)}async function lE(r,t){const n=At(r);n.asyncQueue.verifyOperationInProgress(),st(js,"RemoteStore received new credentials");const s=Qs(n);n.Ia.add(3),await eu(n),s&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ia.delete(3),await Ch(n)}async function QD(r,t){const n=At(r);t?(n.Ia.delete(2),await Ch(n)):t||(n.Ia.add(2),await eu(n),n.Aa.set("Unknown"))}function ao(r){return r.Va||(r.Va=function(n,s,o){const u=At(n);return u.ia(),new ND(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Zo:UD.bind(null,r),e_:LD.bind(null,r),n_:zD.bind(null,r),J_:jD.bind(null,r)}),r.da.push(async t=>{t?(r.Va.N_(),lg(r)?og(r):r.Aa.set("Unknown")):(await r.Va.stop(),K0(r))})),r.Va}function Fr(r){return r.ma||(r.ma=function(n,s,o){const u=At(n);return u.ia(),new MD(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:HD.bind(null,r),n_:KD.bind(null,r),ea:FD.bind(null,r),ta:GD.bind(null,r)}),r.da.push(async t=>{t?(r.ma.N_(),await Dh(r)):(await r.ma.stop(),r.Pa.length>0&&(st(js,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))})),r.ma}/**
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
 */class ug{constructor(t,n,s,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,u){const f=Date.now()+s,m=new ug(t,n,f,o,u);return m.start(s),m}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ut(Z.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cg(r,t){if(Zi("AsyncQueue",`${t}: ${r}`),so(r))return new ut(Z.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Ya{static emptySet(t){return new Ya(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||dt.comparator(n.key,s.key):(n,s)=>dt.comparator(n.key,s.key),this.keyedMap=wl(),this.sortedSet=new re(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ya)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Ya;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class uE{constructor(){this.fa=new re(dt.comparator)}track(t){const n=t.doc.key,s=this.fa.get(n);s?t.type!==0&&s.type===3?this.fa=this.fa.insert(n,t):t.type===3&&s.type!==1?this.fa=this.fa.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.fa=this.fa.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.fa=this.fa.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.fa=this.fa.remove(n):t.type===1&&s.type===2?this.fa=this.fa.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.fa=this.fa.insert(n,{type:2,doc:t.doc}):_t(63341,{At:t,ga:s}):this.fa=this.fa.insert(n,t)}pa(){const t=[];return this.fa.inorderTraversal((n,s)=>{t.push(s)}),t}}class Ja{constructor(t,n,s,o,u,f,m,p,y){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(t,n,s,o,u){const f=[];return n.forEach(m=>{f.push({type:0,doc:m})}),new Ja(t,n,Ya.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ah(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class YD{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(t=>t.ba())}}class XD{constructor(){this.queries=cE(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,s){const o=At(n),u=o.queries;o.queries=cE(),u.forEach((f,m)=>{for(const p of m.wa)p.onError(s)})})(this,new ut(Z.ABORTED,"Firestore shutting down"))}}function cE(){return new Gs(r=>g0(r),Ah)}async function $D(r,t){const n=At(r);let s=3;const o=t.query;let u=n.queries.get(o);u?!u.Sa()&&t.ba()&&(s=2):(u=new YD,s=t.ba()?0:1);try{switch(s){case 0:u.ya=await n.onListen(o,!0);break;case 1:u.ya=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=cg(f,`Initialization of query '${Ba(t.query)}' failed`);return void t.onError(m)}n.queries.set(o,u),u.wa.push(t),t.va(n.onlineState),u.ya&&t.Ca(u.ya)&&hg(n)}async function ZD(r,t){const n=At(r),s=t.query;let o=3;const u=n.queries.get(s);if(u){const f=u.wa.indexOf(t);f>=0&&(u.wa.splice(f,1),u.wa.length===0?o=t.ba()?0:1:!u.Sa()&&t.ba()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function WD(r,t){const n=At(r);let s=!1;for(const o of t){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.wa)m.Ca(o)&&(s=!0);f.ya=o}}s&&hg(n)}function JD(r,t,n){const s=At(r),o=s.queries.get(t);if(o)for(const u of o.wa)u.onError(n);s.queries.delete(t)}function hg(r){r.Da.forEach(t=>{t.next()})}var Tm,hE;(hE=Tm||(Tm={})).Fa="default",hE.Cache="cache";class tO{constructor(t,n,s){this.query=t,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new Ja(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),n=!0):this.Ba(t,this.onlineState)&&(this.La(t),n=!0),this.Oa=t,n}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),n=!0),n}Ba(t,n){if(!t.fromCache||!this.ba())return!0;const s=n!=="Offline";return(!this.options.ka||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(t){t=Ja.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==Tm.Cache}}/**
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
 */class $0{constructor(t){this.key=t}}class Z0{constructor(t){this.key=t}}class eO{constructor(t,n){this.query=t,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Vt(),this.mutatedKeys=Vt(),this.Xa=p0(t),this.eu=new Ya(this.Xa)}get tu(){return this.Ha}nu(t,n){const s=n?n.ru:new uE,o=n?n.eu:this.eu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((T,w)=>{const C=o.get(T),B=Sh(this.query,w)?w:null,X=!!C&&this.mutatedKeys.has(C.key),nt=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let W=!1;C&&B?C.data.isEqual(B.data)?X!==nt&&(s.track({type:3,doc:B}),W=!0):this.iu(C,B)||(s.track({type:2,doc:B}),W=!0,(p&&this.Xa(B,p)>0||y&&this.Xa(B,y)<0)&&(m=!0)):!C&&B?(s.track({type:0,doc:B}),W=!0):C&&!B&&(s.track({type:1,doc:C}),W=!0,(p||y)&&(m=!0)),W&&(B?(f=f.add(B),u=nt?u.add(T):u.delete(T)):(f=f.delete(T),u=u.delete(T)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const T=this.query.limitType==="F"?f.last():f.first();f=f.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{eu:f,ru:s,Ds:m,mutatedKeys:u}}iu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const u=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const f=t.ru.pa();f.sort((T,w)=>function(B,X){const nt=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _t(20277,{At:W})}};return nt(B)-nt(X)}(T.type,w.type)||this.Xa(T.doc,w.doc)),this.su(s),o=o!=null&&o;const m=n&&!o?this.ou():[],p=this.Za.size===0&&this.current&&!o?1:0,y=p!==this.Ya;return this.Ya=p,f.length!==0||y?{snapshot:new Ja(this.query,t.eu,u,f,t.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:m}:{_u:m}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new uE,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=Vt(),this.eu.forEach(s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))});const n=[];return t.forEach(s=>{this.Za.has(s)||n.push(new Z0(s))}),this.Za.forEach(s=>{t.has(s)||n.push(new $0(s))}),n}uu(t){this.Ha=t.qs,this.Za=Vt();const n=this.nu(t.documents);return this.applyChanges(n,!0)}cu(){return Ja.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const fg="SyncEngine";class nO{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class iO{constructor(t){this.key=t,this.lu=!1}}class rO{constructor(t,n,s,o,u,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.hu={},this.Pu=new Gs(m=>g0(m),Ah),this.Tu=new Map,this.Iu=new Set,this.du=new re(dt.comparator),this.Eu=new Map,this.Au=new eg,this.Ru={},this.Vu=new Map,this.mu=Wa.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function sO(r,t,n=!0){const s=iA(r);let o;const u=s.Pu.get(t);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.cu()):o=await W0(s,t,n,!0),o}async function aO(r,t){const n=iA(r);await W0(n,t,!0,!1)}async function W0(r,t,n,s){const o=await SD(r.localStore,fi(t)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await oO(r,t,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&F0(r.remoteStore,o),m}async function oO(r,t,n,s,o){r.gu=(w,C,B)=>async function(nt,W,ft,et){let ot=W.view.nu(ft);ot.Ds&&(ot=await iE(nt.localStore,W.query,!1).then(({documents:M})=>W.view.nu(M,ot)));const Dt=et&&et.targetChanges.get(W.targetId),pt=et&&et.targetMismatches.get(W.targetId)!=null,Rt=W.view.applyChanges(ot,nt.isPrimaryClient,Dt,pt);return dE(nt,W.targetId,Rt._u),Rt.snapshot}(r,w,C,B);const u=await iE(r.localStore,t,!0),f=new eO(t,u.qs),m=f.nu(u.documents),p=tu.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(m,r.isPrimaryClient,p);dE(r,n,y._u);const T=new nO(t,n,f);return r.Pu.set(t,T),r.Tu.has(n)?r.Tu.get(n).push(t):r.Tu.set(n,[t]),y.snapshot}async function lO(r,t,n){const s=At(r),o=s.Pu.get(t),u=s.Tu.get(o.targetId);if(u.length>1)return s.Tu.set(o.targetId,u.filter(f=>!Ah(f,t))),void s.Pu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await vm(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&sg(s.remoteStore,o.targetId),Am(s,o.targetId)}).catch(ro)):(Am(s,o.targetId),await vm(s.localStore,o.targetId,!0))}async function uO(r,t){const n=At(r),s=n.Pu.get(t),o=n.Tu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),sg(n.remoteStore,s.targetId))}async function cO(r,t,n){const s=yO(r);try{const o=await function(f,m){const p=At(f),y=Jt.now(),T=m.reduce((B,X)=>B.add(X.key),Vt());let w,C;return p.persistence.runTransaction("Locally write mutations","readwrite",B=>{let X=Wi(),nt=Vt();return p.Os.getEntries(B,T).next(W=>{X=W,X.forEach((ft,et)=>{et.isValidDocument()||(nt=nt.add(ft))})}).next(()=>p.localDocuments.getOverlayedDocuments(B,X)).next(W=>{w=W;const ft=[];for(const et of m){const ot=S2(et,w.get(et.key).overlayedDocument);ot!=null&&ft.push(new Ks(et.key,ot,l0(ot.value.mapValue),Yi.exists(!0)))}return p.mutationQueue.addMutationBatch(B,y,ft,m)}).next(W=>{C=W;const ft=W.applyToLocalDocumentSet(w,nt);return p.documentOverlayCache.saveOverlays(B,W.batchId,ft)})}).then(()=>({batchId:C.batchId,changes:_0(w)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),function(f,m,p){let y=f.Ru[f.currentUser.toKey()];y||(y=new re(wt)),y=y.insert(m,p),f.Ru[f.currentUser.toKey()]=y}(s,o.batchId,n),await nu(s,o.changes),await Dh(s.remoteStore)}catch(o){const u=cg(o,"Failed to persist write");n.reject(u)}}async function J0(r,t){const n=At(r);try{const s=await ED(n.localStore,t);t.targetChanges.forEach((o,u)=>{const f=n.Eu.get(u);f&&(qt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.lu=!0:o.modifiedDocuments.size>0?qt(f.lu,14607):o.removedDocuments.size>0&&(qt(f.lu,42227),f.lu=!1))}),await nu(n,s,t)}catch(s){await ro(s)}}function fE(r,t,n){const s=At(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Pu.forEach((u,f)=>{const m=f.view.va(t);m.snapshot&&o.push(m.snapshot)}),function(f,m){const p=At(f);p.onlineState=m;let y=!1;p.queries.forEach((T,w)=>{for(const C of w.wa)C.va(m)&&(y=!0)}),y&&hg(p)}(s.eventManager,t),o.length&&s.hu.J_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function hO(r,t,n){const s=At(r);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s.Eu.get(t),u=o&&o.key;if(u){let f=new re(dt.comparator);f=f.insert(u,Xe.newNoDocument(u,Tt.min()));const m=Vt().add(u),p=new Rh(Tt.min(),new Map,new re(wt),f,m);await J0(s,p),s.du=s.du.remove(u),s.Eu.delete(t),dg(s)}else await vm(s.localStore,t,!1).then(()=>Am(s,t,n)).catch(ro)}async function fO(r,t){const n=At(r),s=t.batch.batchId;try{const o=await vD(n.localStore,t);eA(n,s,null),tA(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await nu(n,o)}catch(o){await ro(o)}}async function dO(r,t,n){const s=At(r);try{const o=await function(f,m){const p=At(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let T;return p.mutationQueue.lookupMutationBatch(y,m).next(w=>(qt(w!==null,37113),T=w.keys(),p.mutationQueue.removeMutationBatch(y,w))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,T,m)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,T)).next(()=>p.localDocuments.getDocuments(y,T))})}(s.localStore,t);eA(s,t,n),tA(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await nu(s,o)}catch(o){await ro(o)}}function tA(r,t){(r.Vu.get(t)||[]).forEach(n=>{n.resolve()}),r.Vu.delete(t)}function eA(r,t,n){const s=At(r);let o=s.Ru[s.currentUser.toKey()];if(o){const u=o.get(t);u&&(n?u.reject(n):u.resolve(),o=o.remove(t)),s.Ru[s.currentUser.toKey()]=o}}function Am(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.Tu.get(t))r.Pu.delete(s),n&&r.hu.pu(s,n);r.Tu.delete(t),r.isPrimaryClient&&r.Au.zr(t).forEach(s=>{r.Au.containsKey(s)||nA(r,s)})}function nA(r,t){r.Iu.delete(t.path.canonicalString());const n=r.du.get(t);n!==null&&(sg(r.remoteStore,n),r.du=r.du.remove(t),r.Eu.delete(n),dg(r))}function dE(r,t,n){for(const s of n)s instanceof $0?(r.Au.addReference(s.key,t),mO(r,s)):s instanceof Z0?(st(fg,"Document no longer in limbo: "+s.key),r.Au.removeReference(s.key,t),r.Au.containsKey(s.key)||nA(r,s.key)):_t(19791,{yu:s})}function mO(r,t){const n=t.key,s=n.path.canonicalString();r.du.get(n)||r.Iu.has(s)||(st(fg,"New document in limbo: "+n),r.Iu.add(s),dg(r))}function dg(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Iu.values().next().value;r.Iu.delete(t);const n=new dt(ie.fromString(t)),s=r.mu.next();r.Eu.set(s,new iO(n)),r.du=r.du.insert(n,s),F0(r.remoteStore,new Vr(fi($m(n.path)),s,"TargetPurposeLimboResolution",_h.ue))}}async function nu(r,t,n){const s=At(r),o=[],u=[],f=[];s.Pu.isEmpty()||(s.Pu.forEach((m,p)=>{f.push(s.gu(p,t,n).then(y=>{var T;if((y||n)&&s.isPrimaryClient){const w=y?!y.fromCache:(T=n?.targetChanges.get(p.targetId))===null||T===void 0?void 0:T.current;s.sharedClientState.updateQueryState(p.targetId,w?"current":"not-current")}if(y){o.push(y);const w=ig.Es(p.targetId,y);u.push(w)}}))}),await Promise.all(f),s.hu.J_(o),await async function(p,y){const T=At(p);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>Y.forEach(y,C=>Y.forEach(C.Is,B=>T.persistence.referenceDelegate.addReference(w,C.targetId,B)).next(()=>Y.forEach(C.ds,B=>T.persistence.referenceDelegate.removeReference(w,C.targetId,B)))))}catch(w){if(!so(w))throw w;st(rg,"Failed to update sequence numbers: "+w)}for(const w of y){const C=w.targetId;if(!w.fromCache){const B=T.Fs.get(C),X=B.snapshotVersion,nt=B.withLastLimboFreeSnapshotVersion(X);T.Fs=T.Fs.insert(C,nt)}}}(s.localStore,u))}async function gO(r,t){const n=At(r);if(!n.currentUser.isEqual(t)){st(fg,"User change. New user:",t.toKey());const s=await j0(n.localStore,t);n.currentUser=t,function(u,f){u.Vu.forEach(m=>{m.forEach(p=>{p.reject(new ut(Z.CANCELLED,f))})}),u.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await nu(n,s.Bs)}}function pO(r,t){const n=At(r),s=n.Eu.get(t);if(s&&s.lu)return Vt().add(s.key);{let o=Vt();const u=n.Tu.get(t);if(!u)return o;for(const f of u){const m=n.Pu.get(f);o=o.unionWith(m.view.tu)}return o}}function iA(r){const t=At(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=J0.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=pO.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=hO.bind(null,t),t.hu.J_=WD.bind(null,t.eventManager),t.hu.pu=JD.bind(null,t.eventManager),t}function yO(r){const t=At(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=fO.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=dO.bind(null,t),t}class uh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ih(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,n){return null}Fu(t,n){return null}vu(t){return _D(this.persistence,new gD,t.initialUser,this.serializer)}Du(t){return new z0(ng.Vi,this.serializer)}bu(t){return new wD}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}uh.provider={build:()=>new uh};class _O extends uh{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,n){qt(this.persistence.referenceDelegate instanceof oh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new tD(s,t.asyncQueue,n)}Du(t){const n=this.cacheSizeBytes!==void 0?sn.withCacheSize(this.cacheSizeBytes):sn.DEFAULT;return new z0(s=>oh.Vi(s,n),this.serializer)}}class Sm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>fE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=gO.bind(null,this.syncEngine),await QD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new XD}()}createDatastore(t){const n=Ih(t.databaseInfo.databaseId),s=function(u){return new OD(u)}(t.databaseInfo);return function(u,f,m,p){return new PD(u,f,m,p)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return function(s,o,u,f,m){return new kD(s,o,u,f,m)}(this.localStore,this.datastore,t.asyncQueue,n=>fE(this.syncEngine,n,0),function(){return aE.C()?new aE:new RD}())}createSyncEngine(t,n){return function(o,u,f,m,p,y,T){const w=new rO(o,u,f,m,p,y);return T&&(w.fu=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(o){const u=At(o);st(js,"RemoteStore shutting down."),u.Ia.add(5),await eu(u),u.Ea.shutdown(),u.Aa.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Sm.provider={build:()=>new Sm};/**
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
 */class vO{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):Zi("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */const Gr="FirestoreClient";class EO{constructor(t,n,s,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Ye.UNAUTHENTICATED,this.clientId=Hm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{st(Gr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(st(Gr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=cg(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function $d(r,t){r.asyncQueue.verifyOperationInProgress(),st(Gr,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await j0(t.localStore,o),s=o)}),t.persistence.setDatabaseDeletedListener(()=>{zr("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then(()=>{st("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(o=>{zr("Terminating Firestore due to IndexedDb database deletion failed",o)})}),r._offlineComponents=t}async function mE(r,t){r.asyncQueue.verifyOperationInProgress();const n=await TO(r);st(Gr,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(s=>lE(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>lE(t.remoteStore,o)),r._onlineComponents=t}async function TO(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){st(Gr,"Using user provided OfflineComponentProvider");try{await $d(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(o){return o.name==="FirebaseError"?o.code===Z.FAILED_PRECONDITION||o.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;zr("Error using user provided cache. Falling back to memory cache: "+n),await $d(r,new uh)}}else st(Gr,"Using default OfflineComponentProvider"),await $d(r,new _O(void 0));return r._offlineComponents}async function rA(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(st(Gr,"Using user provided OnlineComponentProvider"),await mE(r,r._uninitializedComponentsProvider._online)):(st(Gr,"Using default OnlineComponentProvider"),await mE(r,new Sm))),r._onlineComponents}function AO(r){return rA(r).then(t=>t.syncEngine)}async function SO(r){const t=await rA(r),n=t.eventManager;return n.onListen=sO.bind(null,t.syncEngine),n.onUnlisten=lO.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=aO.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=uO.bind(null,t.syncEngine),n}function bO(r,t,n={}){const s=new Ur;return r.asyncQueue.enqueueAndForget(async()=>function(u,f,m,p,y){const T=new vO({next:C=>{T.Ou(),f.enqueueAndForget(()=>ZD(u,w));const B=C.docs.has(m);!B&&C.fromCache?y.reject(new ut(Z.UNAVAILABLE,"Failed to get document because the client is offline.")):B&&C.fromCache&&p&&p.source==="server"?y.reject(new ut(Z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(C)},error:C=>y.reject(C)}),w=new tO($m(m.path),T,{includeMetadataChanges:!0,ka:!0});return $D(u,w)}(await SO(r),r.asyncQueue,t,n,s)),s.promise}/**
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
 */function sA(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const gE=new Map;/**
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
 */const aA="firestore.googleapis.com",pE=!0;class yE{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new ut(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=aA,this.ssl=pE}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:pE;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=L0;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<W2)throw new ut(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}kC("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sA((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ut(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ut(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ut(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class mg{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ut(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new ut(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yE(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new RC;switch(s.type){case"firstParty":return new OC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ut(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=gE.get(n);s&&(st("ComponentProvider","Removing Datastore"),gE.delete(n),s.terminate())}(this),Promise.resolve()}}function wO(r,t,n,s={}){var o;r=zl(r,mg);const u=to(t),f=r._getSettings(),m=Object.assign(Object.assign({},f),{emulatorOptions:r._getEmulatorOptions()}),p=`${t}:${n}`;u&&(OE(`https://${p}`),NE("Firestore",!0)),f.host!==aA&&f.host!==p&&zr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},f),{host:p,ssl:u,emulatorOptions:s});if(!Lr(y,m)&&(r._setSettings(y),s.mockUserToken)){let T,w;if(typeof s.mockUserToken=="string")T=s.mockUserToken,w=Ye.MOCK_USER;else{T=yb(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new ut(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new Ye(C)}r._authCredentials=new IC(new $T(T,w))}}/**
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
 */class gg{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new gg(this.firestore,t,this._query)}}class Pe{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Pe(this.firestore,t,this._key)}toJSON(){return{type:Pe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,s){if(Wl(n,Pe._jsonSchema))return new Pe(t,s||null,new dt(ie.fromString(n.referencePath)))}}Pe._jsonSchemaVersion="firestore/documentReference/1.0",Pe._jsonSchema={type:_e("string",Pe._jsonSchemaVersion),referencePath:_e("string")};class Kl extends gg{constructor(t,n,s){super(t,n,$m(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Pe(this.firestore,null,new dt(t))}withConverter(t){return new Kl(this.firestore,t,this._path)}}function oA(r,t,...n){if(r=on(r),arguments.length===1&&(t=Hm.newId()),xC("doc","path",t),r instanceof mg){const s=ie.fromString(t,...n);return Nv(s),new Pe(r,null,new dt(s))}{if(!(r instanceof Pe||r instanceof Kl))throw new ut(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ie.fromString(t,...n));return Nv(s),new Pe(r.firestore,r instanceof Kl?r.converter:null,new dt(s))}}/**
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
 */const _E="AsyncQueue";class vE{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new q0(this,"async_queue_retry"),this.oc=()=>{const s=Xd();s&&st(_E,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=t;const n=Xd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const n=Xd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Ur;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Zu.push(t),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!so(t))throw t;st(_E,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(t){const n=this._c.then(()=>(this.nc=!0,t().catch(s=>{throw this.tc=s,this.nc=!1,Zi("INTERNAL UNHANDLED ERROR: ",EE(s)),s}).then(s=>(this.nc=!1,s))));return this._c=n,n}enqueueAfterDelay(t,n,s){this.ac(),this.sc.indexOf(t)>-1&&(n=0);const o=ug.createAndSchedule(this,t,n,s,u=>this.lc(u));return this.ec.push(o),o}ac(){this.tc&&_t(47125,{hc:EE(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const n of this.ec)if(n.timerId===t)return!0;return!1}Ic(t){return this.Pc().then(()=>{this.ec.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Pc()})}dc(t){this.sc.push(t)}lc(t){const n=this.ec.indexOf(t);this.ec.splice(n,1)}}function EE(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class pg extends mg{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new vE,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new vE(t),this._firestoreClient=void 0,await t}}}function RO(r,t){const n=typeof r=="object"?r:Im(),s=typeof r=="string"?r:th,o=qs(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=gb("firestore");u&&wO(o,...u)}return o}function lA(r){if(r._terminated)throw new ut(Z.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||IO(r),r._firestoreClient}function IO(r){var t,n,s;const o=r._freezeSettings(),u=function(m,p,y,T){return new QC(m,p,y,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,sA(T.experimentalLongPollingOptions),T.useFetchStreams,T.isUsingEmulator)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new EO(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(m){const p=m?._online.build();return{_offline:m?._offline.build(p),_online:p}}(r._componentsProvider))}/**
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
 */class Vn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Vn(He.fromBase64String(t))}catch(n){throw new ut(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Vn(He.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Vn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Wl(t,Vn._jsonSchema))return Vn.fromBase64String(t.bytes)}}Vn._jsonSchemaVersion="firestore/bytes/1.0",Vn._jsonSchema={type:_e("string",Vn._jsonSchemaVersion),bytes:_e("string")};/**
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
 */class yg{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new ut(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class uA{constructor(t){this._methodName=t}}/**
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
 */class mi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new ut(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new ut(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return wt(this._lat,t._lat)||wt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:mi._jsonSchemaVersion}}static fromJSON(t){if(Wl(t,mi._jsonSchema))return new mi(t.latitude,t.longitude)}}mi._jsonSchemaVersion="firestore/geoPoint/1.0",mi._jsonSchema={type:_e("string",mi._jsonSchemaVersion),latitude:_e("number"),longitude:_e("number")};/**
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
 */class gi{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,t._values)}toJSON(){return{type:gi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Wl(t,gi._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(n=>typeof n=="number"))return new gi(t.vectorValues);throw new ut(Z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}gi._jsonSchemaVersion="firestore/vectorValue/1.0",gi._jsonSchema={type:_e("string",gi._jsonSchemaVersion),vectorValues:_e("object")};/**
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
 */const CO=/^__.*__$/;class DO{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Ks(t,this.data,this.fieldMask,n,this.fieldTransforms):new Jl(t,this.data,n,this.fieldTransforms)}}function cA(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _t(40011,{Ec:r})}}class _g{constructor(t,n,s,o,u,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new _g(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.Rc({path:s,mc:!1});return o.fc(t),o}gc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return ch(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(cA(this.Ec)&&CO.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class OO{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||Ih(t)}Dc(t,n,s,o=!1){return new _g({Ec:t,methodName:n,bc:s,path:qe.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function NO(r){const t=r._freezeSettings(),n=Ih(r._databaseId);return new OO(r._databaseId,!!t.ignoreUndefinedProperties,n)}function MO(r,t,n,s,o,u={}){const f=r.Dc(u.merge||u.mergeFields?2:0,t,n,o);mA("Data must be an object, but it was:",f,s);const m=fA(s,f);let p,y;if(u.merge)p=new qn(f.fieldMask),y=f.fieldTransforms;else if(u.mergeFields){const T=[];for(const w of u.mergeFields){const C=VO(t,w,n);if(!f.contains(C))throw new ut(Z.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);xO(T,C)||T.push(C)}p=new qn(T),y=f.fieldTransforms.filter(w=>p.covers(w.field))}else p=null,y=f.fieldTransforms;return new DO(new Mn(m),p,y)}function hA(r,t){if(dA(r=on(r)))return mA("Unsupported field value:",t,r),fA(r,t);if(r instanceof uA)return function(s,o){if(!cA(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const m of s){let p=hA(m,o.yc(f));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),f++}return{arrayValue:{values:u}}}(r,t)}return function(s,o){if((s=on(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return y2(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Jt.fromDate(s);return{timestampValue:ah(o.serializer,u)}}if(s instanceof Jt){const u=new Jt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ah(o.serializer,u)}}if(s instanceof mi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Vn)return{bytesValue:N0(o.serializer,s._byteString)};if(s instanceof Pe){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.wc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:tg(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof gi)return function(f,m){return{mapValue:{fields:{[a0]:{stringValue:o0},[eh]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw m.wc("VectorValues must only contain numeric values.");return Zm(m.serializer,y)})}}}}}}(s,o);throw o.wc(`Unsupported field value: ${Fm(s)}`)}(r,t)}function fA(r,t){const n={};return t0(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Fs(r,(s,o)=>{const u=hA(o,t.Vc(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function dA(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Jt||r instanceof mi||r instanceof Vn||r instanceof Pe||r instanceof uA||r instanceof gi)}function mA(r,t,n){if(!dA(n)||!WT(n)){const s=Fm(n);throw s==="an object"?t.wc(r+" a custom object"):t.wc(r+" "+s)}}function VO(r,t,n){if((t=on(t))instanceof yg)return t._internalPath;if(typeof t=="string")return gA(r,t);throw ch("Field path arguments must be of type string or ",r,!1,void 0,n)}const PO=new RegExp("[~\\*/\\[\\]]");function gA(r,t,n){if(t.search(PO)>=0)throw ch(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new yg(...t.split("."))._internalPath}catch{throw ch(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function ch(r,t,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${t}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(u||f)&&(p+=" (found",u&&(p+=` in field ${s}`),f&&(p+=` in document ${o}`),p+=")"),new ut(Z.INVALID_ARGUMENT,m+r+p)}function xO(r,t){return r.some(n=>n.isEqual(t))}/**
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
 */class pA{constructor(t,n,s,o,u){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new kO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(yA("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kO extends pA{data(){return super.data()}}function yA(r,t){return typeof t=="string"?gA(r,t):t instanceof yg?t._internalPath:t._delegate._internalPath}class UO{convertValue(t,n="none"){switch(Hr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return fe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(qr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw _t(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Fs(t,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(t){var n,s,o;const u=(o=(s=(n=t.fields)===null||n===void 0?void 0:n[eh].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>fe(f.doubleValue));return new gi(u)}convertGeoPoint(t){return new mi(fe(t.latitude),fe(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Eh(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Bl(t));default:return null}}convertTimestamp(t){const n=Br(t);return new Jt(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=ie.fromString(t);qt(U0(s),9688,{name:t});const o=new ql(s.get(1),s.get(3)),u=new dt(s.popFirst(5));return o.isEqual(n)||Zi(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
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
 */function LO(r,t,n){let s;return s=r?n&&(n.merge||n.mergeFields)?r.toFirestore(t,n):r.toFirestore(t):t,s}class Il{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ps extends pA{constructor(t,n,s,o,u,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new qc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(yA("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ut(Z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=Ps._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ps._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ps._jsonSchema={type:_e("string",Ps._jsonSchemaVersion),bundleSource:_e("string","DocumentSnapshot"),bundleName:_e("string"),bundle:_e("string")};class qc extends Ps{data(t={}){return super.data(t)}}class xl{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new Il(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new qc(this._firestore,this._userDataWriter,s.key,s,new Il(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ut(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(m=>{const p=new qc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Il(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const p=new qc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Il(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,T=-1;return m.type!==0&&(y=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),T=f.indexOf(m.doc.key)),{type:zO(m.type),doc:p,oldIndex:y,newIndex:T}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ut(Z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=xl._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Hm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function zO(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _t(61501,{type:r})}}/**
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
 */function jO(r){r=zl(r,Pe);const t=zl(r.firestore,pg);return bO(lA(t),r._key).then(n=>FO(t,r,n))}xl._jsonSchemaVersion="firestore/querySnapshot/1.0",xl._jsonSchema={type:_e("string",xl._jsonSchemaVersion),bundleSource:_e("string","QuerySnapshot"),bundleName:_e("string"),bundle:_e("string")};class BO extends UO{constructor(t){super(),this.firestore=t}convertBytes(t){return new Vn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Pe(this.firestore,null,n)}}function qO(r,t,n){r=zl(r,Pe);const s=zl(r.firestore,pg),o=LO(r.converter,t,n);return HO(s,[MO(NO(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,Yi.none())])}function HO(r,t){return function(s,o){const u=new Ur;return s.asyncQueue.enqueueAndForget(async()=>cO(await AO(s),o,u)),u.promise}(lA(r),t)}function FO(r,t,n){const s=n.docs.get(t._key),o=new BO(r);return new Ps(r,o,t._key,s,new Il(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(o){io=o})(eo),pi(new Hn("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new pg(new CC(s.getProvider("auth-internal")),new NC(f,s.getProvider("app-check-internal")),function(y,T){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ut(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ql(y.options.projectId,T)}(f,o),f);return u=Object.assign({useFetchStreams:n},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),Pn(Rv,Iv,t),Pn(Rv,Iv,"esm2017")})();const GO={apiKey:"AIzaSyBUeW6-GpdE55BksU8FGYXHIscgNry5bdA",authDomain:"caffiend-9eb22.firebaseapp.com",projectId:"caffiend-9eb22",storageBucket:"caffiend-9eb22.firebasestorage.app",messagingSenderId:"656188831153",appId:"1:656188831153:web:e18c8f72fa5952aa61b990",measurementId:"G-Q8ZKG4CS68"},vg=LE(GO);lR(vg);const El=bC(vg),_A=RO(vg),vA=be.createContext();function oo(){return be.useContext(vA)}function KO(r){const{children:t}=r,[n,s]=be.useState(null),[o,u]=be.useState(!1),[f,m]=be.useState(null);function p(B,X){return uI(El,B,X)}function y(B,X){return cI(El,B,X)}function T(){return s(null),m(null),dI(El)}function w(B){return El.sendPasswordResetEmail(B)}const C={globalUser:n,setGlobalUser:s,isLoading:o,setIsLoading:u,globalData:f,setGlobalData:m,signup:p,login:y,logout:T,resetPassword:w};return be.useEffect(()=>El.onAuthStateChanged(async X=>{if(s(X),!X){console.log("No user is signed in");return}try{u(!0);const nt=oA(_A,"users",X.uid),W=await jO(nt);let ft={};W.exists()&&(ft=W.data()),m(ft)}catch(nt){console.error("Error fetching user data:",nt)}finally{u(!1)}}),[]),q.jsx(vA.Provider,{value:C,children:t})}function EA(r){const[t,n]=be.useState(!1),[s,o]=be.useState(""),[u,f]=be.useState(""),[m,p]=be.useState(!1),{signup:y,login:T,globalUser:w,setGlobalUser:C}=oo(),{handleCloseModal:B}=r,[X,nt]=be.useState(null);async function W(){if(!s||!s.includes("@")||!u||u.length<6||m){alert("Please enter a valid email and password (at least 6 characters)");return}try{p(!0),nt(null),t?await y(s,u):await T(s,u),B()}catch(ft){console.log(ft.message)}finally{p(!1)}}return q.jsxs(q.Fragment,{children:[q.jsx("h2",{className:"sign-up-text",children:t?"Sign up":"Log in"}),q.jsx("p",{children:t?"Create an account!":"Sign in to your account!"}),X&&q.jsxs("p",{children:["❌",X]}),q.jsx("input",{placeholder:"Email",value:s,onChange:ft=>{o(ft.target.value)}}),q.jsx("input",{placeholder:"********",type:"password",value:u,onChange:ft=>{f(ft.target.value)}}),q.jsx("button",{onClick:W,children:q.jsx("p",{children:m?"Authenticating...":"Submit"})}),q.jsx("hr",{}),q.jsxs("div",{className:"register-content",children:[q.jsx("p",{children:t?"Already have an account?":"Don't have an account?"}),q.jsx("button",{onClick:()=>{n(!t)},children:q.jsx("p",{children:t?"Sign in":"Sign up"})})]})]})}function QO(r){const{isAuthenticated:t}=r,[n,s]=be.useState(!1),[o,u]=be.useState("null"),[f,m]=be.useState(!1),[p,y]=be.useState(0),[T,w]=be.useState(0),[C,B]=be.useState(0),{globalData:X,setGlobalData:nt,globalUser:W}=oo();async function ft(){if(!t){s(!0);return}if(o)try{const et={...X||{}},ot=Date.now(),Dt=T*60*60*1e3+C*60*1e3,pt=ot-Dt,Rt={name:o,cost:p};et[pt]=Rt,console.log(pt,o,p),nt(et);const M=oA(_A,"users",W.uid),S=await qO(M,{[pt]:Rt},{merge:!0});u(null),B(0),w(0),y(0)}catch(et){console.log(et.message)}}return q.jsxs(q.Fragment,{children:[n&&q.jsx(SE,{handleCloseModal:()=>s(!1),children:q.jsx(EA,{handleCloseModal:()=>s(!1)})}),q.jsx("div",{className:"section-hearder",children:q.jsx("h2",{children:"Start traking today"})}),q.jsx("h4",{children:"Select Coffee Type"}),q.jsxs("div",{className:"coffee-grid",children:[Zd.slice(0,5).map((et,ot)=>q.jsxs("button",{onClick:()=>{u(et.name),m(!1)},className:"button-card"+(et.name===o?" coffee-button-selected":""),children:[q.jsx("h4",{children:et.name}),q.jsxs("p",{children:[et.caffeine,"mg"]})]},ot)),q.jsxs("button",{onClick:()=>{m(!0),u("null")},className:"button-card"+(f?" coffee-button-selected":""),children:[q.jsx("h4",{children:"Other"}),q.jsx("p",{children:"n/a"})]})]}),f&&q.jsxs("select",{onChange:et=>{u(et.target.value),m(!1)},name:"",id:"coffee-list",className:"coffee-list",children:[q.jsx("option",{value:"null",children:"Select option"}),Zd.map((et,ot)=>q.jsxs("option",{value:et.name,children:[et.name," (",et.caffeine,"mg)"]},ot))]}),q.jsx("h4",{children:"Add the cost"}),q.jsx("input",{type:"number",value:p,onChange:et=>y(et.target.value),placeholder:"4.5",className:"w-full"}),q.jsx("h4",{children:"Time since consumption"}),q.jsxs("div",{className:"time-entry",children:[q.jsxs("div",{children:[q.jsx("h6",{children:"Hours"}),q.jsxs("select",{id:"hours-select",onChange:et=>{w(et.target.value)},children:[q.jsx("option",{value:"0",children:"0"}),[...Array(24).keys()].map(et=>q.jsx("option",{value:et,children:et},et))]})]}),q.jsxs("div",{children:[q.jsx("h6",{children:"Minutes"}),q.jsxs("select",{id:"minutes-select",onChange:et=>{B(et.target.value)},children:[q.jsx("option",{value:"0",children:"0"}),[0,5,10,15,30,45].map(et=>q.jsx("option",{value:et,children:et},et))]})]})]}),q.jsx("button",{onClick:ft,children:q.jsx("p",{children:"Add Entry"})})]})}function YO(){return q.jsxs(q.Fragment,{children:[q.jsxs("h1",{children:["Coffee Tracking for Coffee"," ",q.jsx("abbr",{title:"An enthusiast or devotee",children:"Fiends"}),"!"]}),q.jsxs("div",{className:"benefits-list",children:[q.jsxs("h3",{className:"font-bolder",children:["Try ",q.jsx("span",{className:"text-gradient",children:"caffeinist"})," and start ..."]}),q.jsx("p",{children:"✅ Tracking every coffee"}),q.jsx("p",{children:"✅ Measuring your blood caffeine levels"}),q.jsx("p",{children:"✅ Costing and quanitifying your addition"})]}),q.jsxs("div",{className:"card info-card",children:[q.jsxs("div",{children:[q.jsx("i",{className:"fa-solid fa-circle-info"}),q.jsx("h3",{children:"Did you know..."})]}),q.jsx("h5",{children:"That caffeine's half-life is about 5 hours?"}),q.jsx("p",{children:"This means that after 5 hours, half the caffeine you consumed is still in your system, keeping you alert longer! So if you drink a cup of coffee with 200 mg of caffeine, 5 hours, later, you'll still have about 100 mg of caffeine in your system."})]})]})}function XO(){const{globalData:r}=oo();return q.jsxs(q.Fragment,{children:[q.jsxs("div",{className:"section-header",children:[q.jsx("i",{className:"fa-solid fa-timeline"}),q.jsx("h2",{children:"History"})]}),q.jsx("p",{children:q.jsx("i",{children:"Hover for more information!"})}),q.jsx("div",{className:"coffee-history",children:Object.keys(r).sort((t,n)=>n-t).map((t,n)=>{const s=r[t],o=ib(t),u=wm(s.name),f=AE({[t]:s}),m=`${s.name} | ${o} | ${s.cost} | ${f}mg/ ${u}mg`;return q.jsx("div",{title:m,children:q.jsx("i",{className:"fa-solid fa-mug-hot"})},n)})})]})}function $O(r){const{children:t}=r,[n,s]=be.useState(!1),{globalUser:o,logout:u}=oo(),f=q.jsxs("header",{children:[q.jsxs("div",{children:[q.jsx("h1",{className:"text-gradient",children:"CAFFEINIST"}),q.jsx("p",{children:"For coffee Insatiates"})]}),o?q.jsx("button",{onClick:u,children:q.jsx("p",{children:"Logout"})}):q.jsxs("button",{onClick:()=>{s(!0)},children:[q.jsx("p",{children:"Sign up Now"}),q.jsx("i",{className:"fa-solid fa-mug-hot"})]})]}),m=q.jsx("footer",{children:q.jsxs("p",{children:[q.jsx("span",{className:"text-gradient",children:"CAFFEINIST"})," was made by Surajit"," "]})});function p(){s(!1)}return q.jsxs(q.Fragment,{children:[n&&q.jsxs(SE,{handleCloseModal:p,children:[" ",q.jsx(EA,{handleCloseModal:p})," "]}),f,q.jsx("main",{children:t}),m]})}function Tl(r){const{lg:t,title:n,children:s}=r;return q.jsxs("div",{className:"card stat-card "+(t?" col-span-2":""),children:[q.jsx("h4",{children:n}),s]})}function ZO(){const{globalData:r}=oo(),t=rb(r),n=AE(r),s=n<vl.low.maxLevel?"low":n<vl.moderate.maxLevel?"moderate":"high";return q.jsxs(q.Fragment,{children:[q.jsxs("div",{className:"section-header",children:[q.jsx("i",{className:"fa-solid fa-chart-simple"}),q.jsx("h2",{children:"Stats"})]}),q.jsxs("div",{className:"stats-grid",children:[q.jsx(Tl,{lg:!0,title:"Active caffine level",children:q.jsxs("div",{className:"status",children:[q.jsxs("p",{children:[q.jsxs("span",{className:"stat-text",children:[" ",n]}),"mg"]}),q.jsx("h4",{style:{color:vl[s].color,background:vl[s].background},children:s}),q.jsx("p",{children:vl[s].description})]})}),q.jsx(Tl,{title:"Daily Caffine",children:q.jsxs("p",{children:[q.jsx("span",{className:"stat-text",children:t.daily_caffeine}),"mg"]})}),q.jsx(Tl,{title:"Avg # of coffee",children:q.jsx("p",{children:q.jsx("span",{className:"stat-text",children:t.average_coffees})})}),q.jsx(Tl,{title:"Daily cost($)",children:q.jsxs("p",{children:["$",q.jsx("span",{className:"stat-text",children:t.daily_cost})]})}),q.jsx(Tl,{title:"Total cost",children:q.jsxs("p",{children:["$",q.jsx("span",{className:"stat-text",children:t.total_cost})]})}),q.jsxs("table",{className:"stat-table",children:[q.jsx("thead",{children:q.jsxs("tr",{children:[q.jsx("th",{children:"Coffee Name"}),q.jsx("th",{children:"Number of Purchase"}),q.jsx("th",{children:"Percentage of total"})]})}),q.jsx("tbody",{children:nb(r).map((o,u)=>q.jsxs("tr",{children:[q.jsx("td",{children:o.coffeeName}),q.jsx("td",{children:o.count}),q.jsx("td",{children:o.percentage})]},u))})]})]})]})}function WO(){const{globalUser:r,globalData:t,isLoading:n}=oo(),s=r,o=t&&!!Object.keys(t||{}).length,u=q.jsxs(q.Fragment,{children:[q.jsx(ZO,{}),q.jsx(XO,{})]});return q.jsxs($O,{children:[q.jsx(YO,{}),q.jsx(QO,{isAuthenticated:s}),s&&n&&q.jsx("p",{children:"Loading"}),s&&o&&u]})}tb.createRoot(document.getElementById("root")).render(q.jsx(be.StrictMode,{children:q.jsx(KO,{children:q.jsx(WO,{})})}));
