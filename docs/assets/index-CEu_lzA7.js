function zx(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Vx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var A0={exports:{}},cc={},b0={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uo=Symbol.for("react.element"),Hx=Symbol.for("react.portal"),Gx=Symbol.for("react.fragment"),Wx=Symbol.for("react.strict_mode"),Xx=Symbol.for("react.profiler"),jx=Symbol.for("react.provider"),Yx=Symbol.for("react.context"),$x=Symbol.for("react.forward_ref"),qx=Symbol.for("react.suspense"),Kx=Symbol.for("react.memo"),Zx=Symbol.for("react.lazy"),rp=Symbol.iterator;function Jx(t){return t===null||typeof t!="object"?null:(t=rp&&t[rp]||t["@@iterator"],typeof t=="function"?t:null)}var C0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R0=Object.assign,P0={};function Qs(t,e,n){this.props=t,this.context=e,this.refs=P0,this.updater=n||C0}Qs.prototype.isReactComponent={};Qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function L0(){}L0.prototype=Qs.prototype;function Lf(t,e,n){this.props=t,this.context=e,this.refs=P0,this.updater=n||C0}var Nf=Lf.prototype=new L0;Nf.constructor=Lf;R0(Nf,Qs.prototype);Nf.isPureReactComponent=!0;var sp=Array.isArray,N0=Object.prototype.hasOwnProperty,Df={current:null},D0={key:!0,ref:!0,__self:!0,__source:!0};function I0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)N0.call(e,i)&&!D0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:uo,type:t,key:s,ref:a,props:r,_owner:Df.current}}function Qx(t,e){return{$$typeof:uo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function If(t){return typeof t=="object"&&t!==null&&t.$$typeof===uo}function e_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ap=/\/+/g;function Ic(t,e){return typeof t=="object"&&t!==null&&t.key!=null?e_(""+t.key):e.toString(36)}function dl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case uo:case Hx:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Ic(a,0):i,sp(r)?(n="",t!=null&&(n=t.replace(ap,"$&/")+"/"),dl(r,e,n,"",function(c){return c})):r!=null&&(If(r)&&(r=Qx(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(ap,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",sp(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Ic(s,o);a+=dl(s,e,n,l,r)}else if(l=Jx(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Ic(s,o++),a+=dl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function So(t,e,n){if(t==null)return t;var i=[],r=0;return dl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function t_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},fl={transition:null},n_={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:fl,ReactCurrentOwner:Df};function U0(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:So,forEach:function(t,e,n){So(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return So(t,function(){e++}),e},toArray:function(t){return So(t,function(e){return e})||[]},only:function(t){if(!If(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Qs;We.Fragment=Gx;We.Profiler=Xx;We.PureComponent=Lf;We.StrictMode=Wx;We.Suspense=qx;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n_;We.act=U0;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=R0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Df.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)N0.call(e,l)&&!D0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:uo,type:t.type,key:r,ref:s,props:i,_owner:a}};We.createContext=function(t){return t={$$typeof:Yx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jx,_context:t},t.Consumer=t};We.createElement=I0;We.createFactory=function(t){var e=I0.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:$x,render:t}};We.isValidElement=If;We.lazy=function(t){return{$$typeof:Zx,_payload:{_status:-1,_result:t},_init:t_}};We.memo=function(t,e){return{$$typeof:Kx,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=fl.transition;fl.transition={};try{t()}finally{fl.transition=e}};We.unstable_act=U0;We.useCallback=function(t,e){return dn.current.useCallback(t,e)};We.useContext=function(t){return dn.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};We.useEffect=function(t,e){return dn.current.useEffect(t,e)};We.useId=function(){return dn.current.useId()};We.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return dn.current.useMemo(t,e)};We.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};We.useRef=function(t){return dn.current.useRef(t)};We.useState=function(t){return dn.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return dn.current.useTransition()};We.version="18.3.1";b0.exports=We;var Me=b0.exports;const ht=Vx(Me),i_=zx({__proto__:null,default:ht},[Me]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_=Me,s_=Symbol.for("react.element"),a_=Symbol.for("react.fragment"),o_=Object.prototype.hasOwnProperty,l_=r_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c_={key:!0,ref:!0,__self:!0,__source:!0};function F0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)o_.call(e,i)&&!c_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:s_,type:t,key:s,ref:a,props:r,_owner:l_.current}}cc.Fragment=a_;cc.jsx=F0;cc.jsxs=F0;A0.exports=cc;var y=A0.exports,O0={exports:{}},Pn={},k0={exports:{}},B0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,j){var ne=D.length;D.push(j);e:for(;0<ne;){var re=ne-1>>>1,oe=D[re];if(0<r(oe,j))D[re]=j,D[ne]=oe,ne=re;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var j=D[0],ne=D.pop();if(ne!==j){D[0]=ne;e:for(var re=0,oe=D.length,Be=oe>>>1;re<Be;){var qe=2*(re+1)-1,He=D[qe],U=qe+1,J=D[U];if(0>r(He,ne))U<oe&&0>r(J,He)?(D[re]=J,D[U]=ne,re=U):(D[re]=He,D[qe]=ne,re=qe);else if(U<oe&&0>r(J,ne))D[re]=J,D[U]=ne,re=U;else break e}}return j}function r(D,j){var ne=D.sortIndex-j.sortIndex;return ne!==0?ne:D.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,f=null,d=3,p=!1,v=!1,E=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(D){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=D)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function M(D){if(E=!1,S(D),!v)if(n(l)!==null)v=!0,K(T);else{var j=n(c);j!==null&&V(M,j.startTime-D)}}function T(D,j){v=!1,E&&(E=!1,u(x),x=-1),p=!0;var ne=d;try{for(S(j),f=n(l);f!==null&&(!(f.expirationTime>j)||D&&!L());){var re=f.callback;if(typeof re=="function"){f.callback=null,d=f.priorityLevel;var oe=re(f.expirationTime<=j);j=t.unstable_now(),typeof oe=="function"?f.callback=oe:f===n(l)&&i(l),S(j)}else i(l);f=n(l)}if(f!==null)var Be=!0;else{var qe=n(c);qe!==null&&V(M,qe.startTime-j),Be=!1}return Be}finally{f=null,d=ne,p=!1}}var A=!1,b=null,x=-1,C=5,P=-1;function L(){return!(t.unstable_now()-P<C)}function B(){if(b!==null){var D=t.unstable_now();P=D;var j=!0;try{j=b(!0,D)}finally{j?q():(A=!1,b=null)}}else A=!1}var q;if(typeof g=="function")q=function(){g(B)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,z=ee.port2;ee.port1.onmessage=B,q=function(){z.postMessage(null)}}else q=function(){m(B,0)};function K(D){b=D,A||(A=!0,q())}function V(D,j){x=m(function(){D(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,K(T))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var ne=d;d=j;try{return D()}finally{d=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,j){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var ne=d;d=D;try{return j()}finally{d=ne}},t.unstable_scheduleCallback=function(D,j,ne){var re=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?re+ne:re):ne=re,D){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=ne+oe,D={id:h++,callback:j,priorityLevel:D,startTime:ne,expirationTime:oe,sortIndex:-1},ne>re?(D.sortIndex=ne,e(c,D),n(l)===null&&D===n(c)&&(E?(u(x),x=-1):E=!0,V(M,ne-re))):(D.sortIndex=oe,e(l,D),v||p||(v=!0,K(T))),D},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(D){var j=d;return function(){var ne=d;d=j;try{return D.apply(this,arguments)}finally{d=ne}}}})(B0);k0.exports=B0;var u_=k0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_=Me,Rn=u_;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var z0=new Set,Va={};function Yr(t,e){Hs(t,e),Hs(t+"Capture",e)}function Hs(t,e){for(Va[t]=e,t=0;t<e.length;t++)z0.add(e[t])}var Di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vu=Object.prototype.hasOwnProperty,f_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,op={},lp={};function h_(t){return Vu.call(lp,t)?!0:Vu.call(op,t)?!1:f_.test(t)?lp[t]=!0:(op[t]=!0,!1)}function p_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function m_(t,e,n,i){if(e===null||typeof e>"u"||p_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Uf=/[\-:]([a-z])/g;function Ff(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Uf,Ff);jt[e]=new fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Uf,Ff);jt[e]=new fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Uf,Ff);jt[e]=new fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new fn(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Of(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(m_(e,n,r,i)&&(n=null),i||r===null?h_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Bi=d_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mo=Symbol.for("react.element"),ys=Symbol.for("react.portal"),Ss=Symbol.for("react.fragment"),kf=Symbol.for("react.strict_mode"),Hu=Symbol.for("react.profiler"),V0=Symbol.for("react.provider"),H0=Symbol.for("react.context"),Bf=Symbol.for("react.forward_ref"),Gu=Symbol.for("react.suspense"),Wu=Symbol.for("react.suspense_list"),zf=Symbol.for("react.memo"),Ki=Symbol.for("react.lazy"),G0=Symbol.for("react.offscreen"),cp=Symbol.iterator;function sa(t){return t===null||typeof t!="object"?null:(t=cp&&t[cp]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,Uc;function Ma(t){if(Uc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Uc=e&&e[1]||""}return`
`+Uc+t}var Fc=!1;function Oc(t,e){if(!t||Fc)return"";Fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ma(t):""}function g_(t){switch(t.tag){case 5:return Ma(t.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return t=Oc(t.type,!1),t;case 11:return t=Oc(t.type.render,!1),t;case 1:return t=Oc(t.type,!0),t;default:return""}}function Xu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ss:return"Fragment";case ys:return"Portal";case Hu:return"Profiler";case kf:return"StrictMode";case Gu:return"Suspense";case Wu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H0:return(t.displayName||"Context")+".Consumer";case V0:return(t._context.displayName||"Context")+".Provider";case Bf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zf:return e=t.displayName||null,e!==null?e:Xu(t.type)||"Memo";case Ki:e=t._payload,t=t._init;try{return Xu(t(e))}catch{}}return null}function v_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xu(e);case 8:return e===kf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function W0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function x_(t){var e=W0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Eo(t){t._valueTracker||(t._valueTracker=x_(t))}function X0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=W0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Rl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ju(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function up(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function j0(t,e){e=e.checked,e!=null&&Of(t,"checked",e,!1)}function Yu(t,e){j0(t,e);var n=pr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$u(t,e.type,n):e.hasOwnProperty("defaultValue")&&$u(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $u(t,e,n){(e!=="number"||Rl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ea=Array.isArray;function Ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function qu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Ea(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function Y0(t,e){var n=pr(e.value),i=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function hp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ku(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wo,q0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wo=wo||document.createElement("div"),wo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ha(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},__=["Webkit","ms","Moz","O"];Object.keys(Ra).forEach(function(t){__.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ra[e]=Ra[t]})});function K0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ra.hasOwnProperty(t)&&Ra[t]?(""+e).trim():e+"px"}function Z0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=K0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var y_=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zu(t,e){if(e){if(y_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Ju(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qu=null;function Vf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ed=null,Is=null,Us=null;function pp(t){if(t=po(t)){if(typeof ed!="function")throw Error(se(280));var e=t.stateNode;e&&(e=pc(e),ed(t.stateNode,t.type,e))}}function J0(t){Is?Us?Us.push(t):Us=[t]:Is=t}function Q0(){if(Is){var t=Is,e=Us;if(Us=Is=null,pp(t),e)for(t=0;t<e.length;t++)pp(e[t])}}function eg(t,e){return t(e)}function tg(){}var kc=!1;function ng(t,e,n){if(kc)return t(e,n);kc=!0;try{return eg(t,e,n)}finally{kc=!1,(Is!==null||Us!==null)&&(tg(),Q0())}}function Ga(t,e){var n=t.stateNode;if(n===null)return null;var i=pc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var td=!1;if(Di)try{var aa={};Object.defineProperty(aa,"passive",{get:function(){td=!0}}),window.addEventListener("test",aa,aa),window.removeEventListener("test",aa,aa)}catch{td=!1}function S_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Pa=!1,Pl=null,Ll=!1,nd=null,M_={onError:function(t){Pa=!0,Pl=t}};function E_(t,e,n,i,r,s,a,o,l){Pa=!1,Pl=null,S_.apply(M_,arguments)}function w_(t,e,n,i,r,s,a,o,l){if(E_.apply(this,arguments),Pa){if(Pa){var c=Pl;Pa=!1,Pl=null}else throw Error(se(198));Ll||(Ll=!0,nd=c)}}function $r(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ig(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function mp(t){if($r(t)!==t)throw Error(se(188))}function T_(t){var e=t.alternate;if(!e){if(e=$r(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return mp(r),t;if(s===i)return mp(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function rg(t){return t=T_(t),t!==null?sg(t):null}function sg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sg(t);if(e!==null)return e;t=t.sibling}return null}var ag=Rn.unstable_scheduleCallback,gp=Rn.unstable_cancelCallback,A_=Rn.unstable_shouldYield,b_=Rn.unstable_requestPaint,At=Rn.unstable_now,C_=Rn.unstable_getCurrentPriorityLevel,Hf=Rn.unstable_ImmediatePriority,og=Rn.unstable_UserBlockingPriority,Nl=Rn.unstable_NormalPriority,R_=Rn.unstable_LowPriority,lg=Rn.unstable_IdlePriority,uc=null,hi=null;function P_(t){if(hi&&typeof hi.onCommitFiberRoot=="function")try{hi.onCommitFiberRoot(uc,t,void 0,(t.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:D_,L_=Math.log,N_=Math.LN2;function D_(t){return t>>>=0,t===0?32:31-(L_(t)/N_|0)|0}var To=64,Ao=4194304;function wa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=wa(o):(s&=a,s!==0&&(i=wa(s)))}else a=n&~r,a!==0?i=wa(a):s!==0&&(i=wa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Jn(e),r=1<<n,i|=t[n],e&=~r;return i}function I_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function U_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Jn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=I_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function id(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cg(){var t=To;return To<<=1,!(To&4194240)&&(To=64),t}function Bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jn(e),t[e]=n}function F_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Gf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function ug(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dg,Wf,fg,hg,pg,rd=!1,bo=[],sr=null,ar=null,or=null,Wa=new Map,Xa=new Map,Ji=[],O_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vp(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":Wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xa.delete(e.pointerId)}}function oa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=po(e),e!==null&&Wf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function k_(t,e,n,i,r){switch(e){case"focusin":return sr=oa(sr,t,e,n,i,r),!0;case"dragenter":return ar=oa(ar,t,e,n,i,r),!0;case"mouseover":return or=oa(or,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Wa.set(s,oa(Wa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Xa.set(s,oa(Xa.get(s)||null,t,e,n,i,r)),!0}return!1}function mg(t){var e=Dr(t.target);if(e!==null){var n=$r(e);if(n!==null){if(e=n.tag,e===13){if(e=ig(n),e!==null){t.blockedOn=e,pg(t.priority,function(){fg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Qu=i,n.target.dispatchEvent(i),Qu=null}else return e=po(n),e!==null&&Wf(e),t.blockedOn=n,!1;e.shift()}return!0}function xp(t,e,n){hl(t)&&n.delete(e)}function B_(){rd=!1,sr!==null&&hl(sr)&&(sr=null),ar!==null&&hl(ar)&&(ar=null),or!==null&&hl(or)&&(or=null),Wa.forEach(xp),Xa.forEach(xp)}function la(t,e){t.blockedOn===e&&(t.blockedOn=null,rd||(rd=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,B_)))}function ja(t){function e(r){return la(r,t)}if(0<bo.length){la(bo[0],t);for(var n=1;n<bo.length;n++){var i=bo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(sr!==null&&la(sr,t),ar!==null&&la(ar,t),or!==null&&la(or,t),Wa.forEach(e),Xa.forEach(e),n=0;n<Ji.length;n++)i=Ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ji.length&&(n=Ji[0],n.blockedOn===null);)mg(n),n.blockedOn===null&&Ji.shift()}var Fs=Bi.ReactCurrentBatchConfig,Il=!0;function z_(t,e,n,i){var r=it,s=Fs.transition;Fs.transition=null;try{it=1,Xf(t,e,n,i)}finally{it=r,Fs.transition=s}}function V_(t,e,n,i){var r=it,s=Fs.transition;Fs.transition=null;try{it=4,Xf(t,e,n,i)}finally{it=r,Fs.transition=s}}function Xf(t,e,n,i){if(Il){var r=sd(t,e,n,i);if(r===null)qc(t,e,i,Ul,n),vp(t,i);else if(k_(r,t,e,n,i))i.stopPropagation();else if(vp(t,i),e&4&&-1<O_.indexOf(t)){for(;r!==null;){var s=po(r);if(s!==null&&dg(s),s=sd(t,e,n,i),s===null&&qc(t,e,i,Ul,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else qc(t,e,i,null,n)}}var Ul=null;function sd(t,e,n,i){if(Ul=null,t=Vf(i),t=Dr(t),t!==null)if(e=$r(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ig(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ul=t,null}function gg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C_()){case Hf:return 1;case og:return 4;case Nl:case R_:return 16;case lg:return 536870912;default:return 16}default:return 16}}var tr=null,jf=null,pl=null;function vg(){if(pl)return pl;var t,e=jf,n=e.length,i,r="value"in tr?tr.value:tr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return pl=r.slice(t,1<i?1-i:void 0)}function ml(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Co(){return!0}function _p(){return!1}function Ln(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Co:_p,this.isPropagationStopped=_p,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Co)},persist:function(){},isPersistent:Co}),e}var ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yf=Ln(ea),ho=_t({},ea,{view:0,detail:0}),H_=Ln(ho),zc,Vc,ca,dc=_t({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$f,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ca&&(ca&&t.type==="mousemove"?(zc=t.screenX-ca.screenX,Vc=t.screenY-ca.screenY):Vc=zc=0,ca=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Vc}}),yp=Ln(dc),G_=_t({},dc,{dataTransfer:0}),W_=Ln(G_),X_=_t({},ho,{relatedTarget:0}),Hc=Ln(X_),j_=_t({},ea,{animationName:0,elapsedTime:0,pseudoElement:0}),Y_=Ln(j_),$_=_t({},ea,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),q_=Ln($_),K_=_t({},ea,{data:0}),Sp=Ln(K_),Z_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ey(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Q_[t])?!!e[t]:!1}function $f(){return ey}var ty=_t({},ho,{key:function(t){if(t.key){var e=Z_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?J_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$f,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ny=Ln(ty),iy=_t({},dc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mp=Ln(iy),ry=_t({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$f}),sy=Ln(ry),ay=_t({},ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),oy=Ln(ay),ly=_t({},dc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cy=Ln(ly),uy=[9,13,27,32],qf=Di&&"CompositionEvent"in window,La=null;Di&&"documentMode"in document&&(La=document.documentMode);var dy=Di&&"TextEvent"in window&&!La,xg=Di&&(!qf||La&&8<La&&11>=La),Ep=" ",wp=!1;function _g(t,e){switch(t){case"keyup":return uy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ms=!1;function fy(t,e){switch(t){case"compositionend":return yg(e);case"keypress":return e.which!==32?null:(wp=!0,Ep);case"textInput":return t=e.data,t===Ep&&wp?null:t;default:return null}}function hy(t,e){if(Ms)return t==="compositionend"||!qf&&_g(t,e)?(t=vg(),pl=jf=tr=null,Ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xg&&e.locale!=="ko"?null:e.data;default:return null}}var py={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!py[t.type]:e==="textarea"}function Sg(t,e,n,i){J0(i),e=Fl(e,"onChange"),0<e.length&&(n=new Yf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Na=null,Ya=null;function my(t){Ng(t,0)}function fc(t){var e=Ts(t);if(X0(e))return t}function gy(t,e){if(t==="change")return e}var Mg=!1;if(Di){var Gc;if(Di){var Wc="oninput"in document;if(!Wc){var Ap=document.createElement("div");Ap.setAttribute("oninput","return;"),Wc=typeof Ap.oninput=="function"}Gc=Wc}else Gc=!1;Mg=Gc&&(!document.documentMode||9<document.documentMode)}function bp(){Na&&(Na.detachEvent("onpropertychange",Eg),Ya=Na=null)}function Eg(t){if(t.propertyName==="value"&&fc(Ya)){var e=[];Sg(e,Ya,t,Vf(t)),ng(my,e)}}function vy(t,e,n){t==="focusin"?(bp(),Na=e,Ya=n,Na.attachEvent("onpropertychange",Eg)):t==="focusout"&&bp()}function xy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fc(Ya)}function _y(t,e){if(t==="click")return fc(e)}function yy(t,e){if(t==="input"||t==="change")return fc(e)}function Sy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ei=typeof Object.is=="function"?Object.is:Sy;function $a(t,e){if(ei(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Vu.call(e,r)||!ei(t[r],e[r]))return!1}return!0}function Cp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rp(t,e){var n=Cp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cp(n)}}function wg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?wg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Tg(){for(var t=window,e=Rl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Rl(t.document)}return e}function Kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function My(t){var e=Tg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&wg(n.ownerDocument.documentElement,n)){if(i!==null&&Kf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Rp(n,s);var a=Rp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ey=Di&&"documentMode"in document&&11>=document.documentMode,Es=null,ad=null,Da=null,od=!1;function Pp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;od||Es==null||Es!==Rl(i)||(i=Es,"selectionStart"in i&&Kf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Da&&$a(Da,i)||(Da=i,i=Fl(ad,"onSelect"),0<i.length&&(e=new Yf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Es)))}function Ro(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:Ro("Animation","AnimationEnd"),animationiteration:Ro("Animation","AnimationIteration"),animationstart:Ro("Animation","AnimationStart"),transitionend:Ro("Transition","TransitionEnd")},Xc={},Ag={};Di&&(Ag=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function hc(t){if(Xc[t])return Xc[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ag)return Xc[t]=e[n];return t}var bg=hc("animationend"),Cg=hc("animationiteration"),Rg=hc("animationstart"),Pg=hc("transitionend"),Lg=new Map,Lp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){Lg.set(t,e),Yr(e,[t])}for(var jc=0;jc<Lp.length;jc++){var Yc=Lp[jc],wy=Yc.toLowerCase(),Ty=Yc[0].toUpperCase()+Yc.slice(1);xr(wy,"on"+Ty)}xr(bg,"onAnimationEnd");xr(Cg,"onAnimationIteration");xr(Rg,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(Pg,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);Yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ay=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function Np(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,w_(i,e,void 0,t),t.currentTarget=null}function Ng(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Np(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Np(r,o,c),s=l}}}if(Ll)throw t=nd,Ll=!1,nd=null,t}function dt(t,e){var n=e[fd];n===void 0&&(n=e[fd]=new Set);var i=t+"__bubble";n.has(i)||(Dg(e,t,2,!1),n.add(i))}function $c(t,e,n){var i=0;e&&(i|=4),Dg(n,t,i,e)}var Po="_reactListening"+Math.random().toString(36).slice(2);function qa(t){if(!t[Po]){t[Po]=!0,z0.forEach(function(n){n!=="selectionchange"&&(Ay.has(n)||$c(n,!1,t),$c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Po]||(e[Po]=!0,$c("selectionchange",!1,e))}}function Dg(t,e,n,i){switch(gg(e)){case 1:var r=z_;break;case 4:r=V_;break;default:r=Xf}n=r.bind(null,e,n,t),r=void 0,!td||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function qc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Dr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}ng(function(){var c=s,h=Vf(n),f=[];e:{var d=Lg.get(t);if(d!==void 0){var p=Yf,v=t;switch(t){case"keypress":if(ml(n)===0)break e;case"keydown":case"keyup":p=ny;break;case"focusin":v="focus",p=Hc;break;case"focusout":v="blur",p=Hc;break;case"beforeblur":case"afterblur":p=Hc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=W_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=sy;break;case bg:case Cg:case Rg:p=Y_;break;case Pg:p=oy;break;case"scroll":p=H_;break;case"wheel":p=cy;break;case"copy":case"cut":case"paste":p=q_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Mp}var E=(e&4)!==0,m=!E&&t==="scroll",u=E?d!==null?d+"Capture":null:d;E=[];for(var g=c,S;g!==null;){S=g;var M=S.stateNode;if(S.tag===5&&M!==null&&(S=M,u!==null&&(M=Ga(g,u),M!=null&&E.push(Ka(g,M,S)))),m)break;g=g.return}0<E.length&&(d=new p(d,v,null,n,h),f.push({event:d,listeners:E}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Qu&&(v=n.relatedTarget||n.fromElement)&&(Dr(v)||v[Ii]))break e;if((p||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Dr(v):null,v!==null&&(m=$r(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(E=yp,M="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(E=Mp,M="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?d:Ts(p),S=v==null?d:Ts(v),d=new E(M,g+"leave",p,n,h),d.target=m,d.relatedTarget=S,M=null,Dr(h)===c&&(E=new E(u,g+"enter",v,n,h),E.target=S,E.relatedTarget=m,M=E),m=M,p&&v)t:{for(E=p,u=v,g=0,S=E;S;S=ts(S))g++;for(S=0,M=u;M;M=ts(M))S++;for(;0<g-S;)E=ts(E),g--;for(;0<S-g;)u=ts(u),S--;for(;g--;){if(E===u||u!==null&&E===u.alternate)break t;E=ts(E),u=ts(u)}E=null}else E=null;p!==null&&Dp(f,d,p,E,!1),v!==null&&m!==null&&Dp(f,m,v,E,!0)}}e:{if(d=c?Ts(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=gy;else if(Tp(d))if(Mg)T=yy;else{T=xy;var A=vy}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=_y);if(T&&(T=T(t,c))){Sg(f,T,n,h);break e}A&&A(t,d,c),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&$u(d,"number",d.value)}switch(A=c?Ts(c):window,t){case"focusin":(Tp(A)||A.contentEditable==="true")&&(Es=A,ad=c,Da=null);break;case"focusout":Da=ad=Es=null;break;case"mousedown":od=!0;break;case"contextmenu":case"mouseup":case"dragend":od=!1,Pp(f,n,h);break;case"selectionchange":if(Ey)break;case"keydown":case"keyup":Pp(f,n,h)}var b;if(qf)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Ms?_g(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(xg&&n.locale!=="ko"&&(Ms||x!=="onCompositionStart"?x==="onCompositionEnd"&&Ms&&(b=vg()):(tr=h,jf="value"in tr?tr.value:tr.textContent,Ms=!0)),A=Fl(c,x),0<A.length&&(x=new Sp(x,t,null,n,h),f.push({event:x,listeners:A}),b?x.data=b:(b=yg(n),b!==null&&(x.data=b)))),(b=dy?fy(t,n):hy(t,n))&&(c=Fl(c,"onBeforeInput"),0<c.length&&(h=new Sp("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=b))}Ng(f,e)})}function Ka(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ga(t,n),s!=null&&i.unshift(Ka(t,s,r)),s=Ga(t,e),s!=null&&i.push(Ka(t,s,r))),t=t.return}return i}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ga(n,s),l!=null&&a.unshift(Ka(n,l,o))):r||(l=Ga(n,s),l!=null&&a.push(Ka(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var by=/\r\n?/g,Cy=/\u0000|\uFFFD/g;function Ip(t){return(typeof t=="string"?t:""+t).replace(by,`
`).replace(Cy,"")}function Lo(t,e,n){if(e=Ip(e),Ip(t)!==e&&n)throw Error(se(425))}function Ol(){}var ld=null,cd=null;function ud(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var dd=typeof setTimeout=="function"?setTimeout:void 0,Ry=typeof clearTimeout=="function"?clearTimeout:void 0,Up=typeof Promise=="function"?Promise:void 0,Py=typeof queueMicrotask=="function"?queueMicrotask:typeof Up<"u"?function(t){return Up.resolve(null).then(t).catch(Ly)}:dd;function Ly(t){setTimeout(function(){throw t})}function Kc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ja(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ja(e)}function lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ta=Math.random().toString(36).slice(2),ui="__reactFiber$"+ta,Za="__reactProps$"+ta,Ii="__reactContainer$"+ta,fd="__reactEvents$"+ta,Ny="__reactListeners$"+ta,Dy="__reactHandles$"+ta;function Dr(t){var e=t[ui];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ii]||n[ui]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fp(t);t!==null;){if(n=t[ui])return n;t=Fp(t)}return e}t=n,n=t.parentNode}return null}function po(t){return t=t[ui]||t[Ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function pc(t){return t[Za]||null}var hd=[],As=-1;function _r(t){return{current:t}}function ft(t){0>As||(t.current=hd[As],hd[As]=null,As--)}function ut(t,e){As++,hd[As]=t.current,t.current=e}var mr={},tn=_r(mr),gn=_r(!1),zr=mr;function Gs(t,e){var n=t.type.contextTypes;if(!n)return mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function vn(t){return t=t.childContextTypes,t!=null}function kl(){ft(gn),ft(tn)}function Op(t,e,n){if(tn.current!==mr)throw Error(se(168));ut(tn,e),ut(gn,n)}function Ig(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,v_(t)||"Unknown",r));return _t({},n,i)}function Bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,zr=tn.current,ut(tn,t),ut(gn,gn.current),!0}function kp(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Ig(t,e,zr),i.__reactInternalMemoizedMergedChildContext=t,ft(gn),ft(tn),ut(tn,t)):ft(gn),ut(gn,n)}var Ti=null,mc=!1,Zc=!1;function Ug(t){Ti===null?Ti=[t]:Ti.push(t)}function Iy(t){mc=!0,Ug(t)}function yr(){if(!Zc&&Ti!==null){Zc=!0;var t=0,e=it;try{var n=Ti;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ti=null,mc=!1}catch(r){throw Ti!==null&&(Ti=Ti.slice(t+1)),ag(Hf,yr),r}finally{it=e,Zc=!1}}return null}var bs=[],Cs=0,zl=null,Vl=0,In=[],Un=0,Vr=null,Ai=1,bi="";function Cr(t,e){bs[Cs++]=Vl,bs[Cs++]=zl,zl=t,Vl=e}function Fg(t,e,n){In[Un++]=Ai,In[Un++]=bi,In[Un++]=Vr,Vr=t;var i=Ai;t=bi;var r=32-Jn(i)-1;i&=~(1<<r),n+=1;var s=32-Jn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ai=1<<32-Jn(e)+r|n<<r|i,bi=s+t}else Ai=1<<s|n<<r|i,bi=t}function Zf(t){t.return!==null&&(Cr(t,1),Fg(t,1,0))}function Jf(t){for(;t===zl;)zl=bs[--Cs],bs[Cs]=null,Vl=bs[--Cs],bs[Cs]=null;for(;t===Vr;)Vr=In[--Un],In[Un]=null,bi=In[--Un],In[Un]=null,Ai=In[--Un],In[Un]=null}var bn=null,An=null,pt=!1,$n=null;function Og(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bn=t,An=lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bn=t,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vr!==null?{id:Ai,overflow:bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bn=t,An=null,!0):!1;default:return!1}}function pd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function md(t){if(pt){var e=An;if(e){var n=e;if(!Bp(t,e)){if(pd(t))throw Error(se(418));e=lr(n.nextSibling);var i=bn;e&&Bp(t,e)?Og(i,n):(t.flags=t.flags&-4097|2,pt=!1,bn=t)}}else{if(pd(t))throw Error(se(418));t.flags=t.flags&-4097|2,pt=!1,bn=t}}}function zp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function No(t){if(t!==bn)return!1;if(!pt)return zp(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ud(t.type,t.memoizedProps)),e&&(e=An)){if(pd(t))throw kg(),Error(se(418));for(;e;)Og(t,e),e=lr(e.nextSibling)}if(zp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){An=lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}An=null}}else An=bn?lr(t.stateNode.nextSibling):null;return!0}function kg(){for(var t=An;t;)t=lr(t.nextSibling)}function Ws(){An=bn=null,pt=!1}function Qf(t){$n===null?$n=[t]:$n.push(t)}var Uy=Bi.ReactCurrentBatchConfig;function ua(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Do(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vp(t){var e=t._init;return e(t._payload)}function Bg(t){function e(u,g){if(t){var S=u.deletions;S===null?(u.deletions=[g],u.flags|=16):S.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=fr(u,g),u.index=0,u.sibling=null,u}function s(u,g,S){return u.index=S,t?(S=u.alternate,S!==null?(S=S.index,S<g?(u.flags|=2,g):S):(u.flags|=2,g)):(u.flags|=1048576,g)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,S,M){return g===null||g.tag!==6?(g=ru(S,u.mode,M),g.return=u,g):(g=r(g,S),g.return=u,g)}function l(u,g,S,M){var T=S.type;return T===Ss?h(u,g,S.props.children,M,S.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ki&&Vp(T)===g.type)?(M=r(g,S.props),M.ref=ua(u,g,S),M.return=u,M):(M=Ml(S.type,S.key,S.props,null,u.mode,M),M.ref=ua(u,g,S),M.return=u,M)}function c(u,g,S,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=su(S,u.mode,M),g.return=u,g):(g=r(g,S.children||[]),g.return=u,g)}function h(u,g,S,M,T){return g===null||g.tag!==7?(g=Br(S,u.mode,M,T),g.return=u,g):(g=r(g,S),g.return=u,g)}function f(u,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ru(""+g,u.mode,S),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Mo:return S=Ml(g.type,g.key,g.props,null,u.mode,S),S.ref=ua(u,null,g),S.return=u,S;case ys:return g=su(g,u.mode,S),g.return=u,g;case Ki:var M=g._init;return f(u,M(g._payload),S)}if(Ea(g)||sa(g))return g=Br(g,u.mode,S,null),g.return=u,g;Do(u,g)}return null}function d(u,g,S,M){var T=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return T!==null?null:o(u,g,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Mo:return S.key===T?l(u,g,S,M):null;case ys:return S.key===T?c(u,g,S,M):null;case Ki:return T=S._init,d(u,g,T(S._payload),M)}if(Ea(S)||sa(S))return T!==null?null:h(u,g,S,M,null);Do(u,S)}return null}function p(u,g,S,M,T){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(S)||null,o(g,u,""+M,T);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Mo:return u=u.get(M.key===null?S:M.key)||null,l(g,u,M,T);case ys:return u=u.get(M.key===null?S:M.key)||null,c(g,u,M,T);case Ki:var A=M._init;return p(u,g,S,A(M._payload),T)}if(Ea(M)||sa(M))return u=u.get(S)||null,h(g,u,M,T,null);Do(g,M)}return null}function v(u,g,S,M){for(var T=null,A=null,b=g,x=g=0,C=null;b!==null&&x<S.length;x++){b.index>x?(C=b,b=null):C=b.sibling;var P=d(u,b,S[x],M);if(P===null){b===null&&(b=C);break}t&&b&&P.alternate===null&&e(u,b),g=s(P,g,x),A===null?T=P:A.sibling=P,A=P,b=C}if(x===S.length)return n(u,b),pt&&Cr(u,x),T;if(b===null){for(;x<S.length;x++)b=f(u,S[x],M),b!==null&&(g=s(b,g,x),A===null?T=b:A.sibling=b,A=b);return pt&&Cr(u,x),T}for(b=i(u,b);x<S.length;x++)C=p(b,u,x,S[x],M),C!==null&&(t&&C.alternate!==null&&b.delete(C.key===null?x:C.key),g=s(C,g,x),A===null?T=C:A.sibling=C,A=C);return t&&b.forEach(function(L){return e(u,L)}),pt&&Cr(u,x),T}function E(u,g,S,M){var T=sa(S);if(typeof T!="function")throw Error(se(150));if(S=T.call(S),S==null)throw Error(se(151));for(var A=T=null,b=g,x=g=0,C=null,P=S.next();b!==null&&!P.done;x++,P=S.next()){b.index>x?(C=b,b=null):C=b.sibling;var L=d(u,b,P.value,M);if(L===null){b===null&&(b=C);break}t&&b&&L.alternate===null&&e(u,b),g=s(L,g,x),A===null?T=L:A.sibling=L,A=L,b=C}if(P.done)return n(u,b),pt&&Cr(u,x),T;if(b===null){for(;!P.done;x++,P=S.next())P=f(u,P.value,M),P!==null&&(g=s(P,g,x),A===null?T=P:A.sibling=P,A=P);return pt&&Cr(u,x),T}for(b=i(u,b);!P.done;x++,P=S.next())P=p(b,u,x,P.value,M),P!==null&&(t&&P.alternate!==null&&b.delete(P.key===null?x:P.key),g=s(P,g,x),A===null?T=P:A.sibling=P,A=P);return t&&b.forEach(function(B){return e(u,B)}),pt&&Cr(u,x),T}function m(u,g,S,M){if(typeof S=="object"&&S!==null&&S.type===Ss&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Mo:e:{for(var T=S.key,A=g;A!==null;){if(A.key===T){if(T=S.type,T===Ss){if(A.tag===7){n(u,A.sibling),g=r(A,S.props.children),g.return=u,u=g;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ki&&Vp(T)===A.type){n(u,A.sibling),g=r(A,S.props),g.ref=ua(u,A,S),g.return=u,u=g;break e}n(u,A);break}else e(u,A);A=A.sibling}S.type===Ss?(g=Br(S.props.children,u.mode,M,S.key),g.return=u,u=g):(M=Ml(S.type,S.key,S.props,null,u.mode,M),M.ref=ua(u,g,S),M.return=u,u=M)}return a(u);case ys:e:{for(A=S.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){n(u,g.sibling),g=r(g,S.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=su(S,u.mode,M),g.return=u,u=g}return a(u);case Ki:return A=S._init,m(u,g,A(S._payload),M)}if(Ea(S))return v(u,g,S,M);if(sa(S))return E(u,g,S,M);Do(u,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,S),g.return=u,u=g):(n(u,g),g=ru(S,u.mode,M),g.return=u,u=g),a(u)):n(u,g)}return m}var Xs=Bg(!0),zg=Bg(!1),Hl=_r(null),Gl=null,Rs=null,eh=null;function th(){eh=Rs=Gl=null}function nh(t){var e=Hl.current;ft(Hl),t._currentValue=e}function gd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Os(t,e){Gl=t,eh=Rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function Bn(t){var e=t._currentValue;if(eh!==t)if(t={context:t,memoizedValue:e,next:null},Rs===null){if(Gl===null)throw Error(se(308));Rs=t,Gl.dependencies={lanes:0,firstContext:t}}else Rs=Rs.next=t;return e}var Ir=null;function ih(t){Ir===null?Ir=[t]:Ir.push(t)}function Vg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ih(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ui(t,i)}function Ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zi=!1;function rh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ui(t,n)}return r=i.interleaved,r===null?(e.next=e,ih(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ui(t,n)}function gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Gf(t,n)}}function Hp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wl(t,e,n,i){var r=t.updateQueue;Zi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,h=c=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,E=o;switch(d=e,p=n,E.tag){case 1:if(v=E.payload,typeof v=="function"){f=v.call(p,f,d);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,d=typeof v=="function"?v.call(p,f,d):v,d==null)break e;f=_t({},f,d);break e;case 2:Zi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=f):h=h.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Gr|=a,t.lanes=a,t.memoizedState=f}}function Gp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var mo={},pi=_r(mo),Ja=_r(mo),Qa=_r(mo);function Ur(t){if(t===mo)throw Error(se(174));return t}function sh(t,e){switch(ut(Qa,e),ut(Ja,t),ut(pi,mo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ku(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ku(e,t)}ft(pi),ut(pi,e)}function js(){ft(pi),ft(Ja),ft(Qa)}function Gg(t){Ur(Qa.current);var e=Ur(pi.current),n=Ku(e,t.type);e!==n&&(ut(Ja,t),ut(pi,n))}function ah(t){Ja.current===t&&(ft(pi),ft(Ja))}var gt=_r(0);function Xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jc=[];function oh(){for(var t=0;t<Jc.length;t++)Jc[t]._workInProgressVersionPrimary=null;Jc.length=0}var vl=Bi.ReactCurrentDispatcher,Qc=Bi.ReactCurrentBatchConfig,Hr=0,xt=null,Dt=null,zt=null,jl=!1,Ia=!1,eo=0,Fy=0;function $t(){throw Error(se(321))}function lh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ei(t[n],e[n]))return!1;return!0}function ch(t,e,n,i,r,s){if(Hr=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vl.current=t===null||t.memoizedState===null?zy:Vy,t=n(i,r),Ia){s=0;do{if(Ia=!1,eo=0,25<=s)throw Error(se(301));s+=1,zt=Dt=null,e.updateQueue=null,vl.current=Hy,t=n(i,r)}while(Ia)}if(vl.current=Yl,e=Dt!==null&&Dt.next!==null,Hr=0,zt=Dt=xt=null,jl=!1,e)throw Error(se(300));return t}function uh(){var t=eo!==0;return eo=0,t}function li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?xt.memoizedState=zt=t:zt=zt.next=t,zt}function zn(){if(Dt===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=zt===null?xt.memoizedState:zt.next;if(e!==null)zt=e,Dt=t;else{if(t===null)throw Error(se(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},zt===null?xt.memoizedState=zt=t:zt=zt.next=t}return zt}function to(t,e){return typeof e=="function"?e(t):e}function eu(t){var e=zn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((Hr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,xt.lanes|=h,Gr|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ei(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,xt.lanes|=s,Gr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tu(t){var e=zn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ei(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Wg(){}function Xg(t,e){var n=xt,i=zn(),r=e(),s=!ei(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,dh($g.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,no(9,Yg.bind(null,n,i,r,e),void 0,null),Vt===null)throw Error(se(349));Hr&30||jg(n,e,r)}return r}function jg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Yg(t,e,n,i){e.value=n,e.getSnapshot=i,qg(e)&&Kg(t)}function $g(t,e,n){return n(function(){qg(e)&&Kg(t)})}function qg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ei(t,n)}catch{return!0}}function Kg(t){var e=Ui(t,1);e!==null&&Qn(e,t,1,-1)}function Wp(t){var e=li();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:to,lastRenderedState:t},e.queue=t,t=t.dispatch=By.bind(null,xt,t),[e.memoizedState,t]}function no(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Zg(){return zn().memoizedState}function xl(t,e,n,i){var r=li();xt.flags|=t,r.memoizedState=no(1|e,n,void 0,i===void 0?null:i)}function gc(t,e,n,i){var r=zn();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var a=Dt.memoizedState;if(s=a.destroy,i!==null&&lh(i,a.deps)){r.memoizedState=no(e,n,s,i);return}}xt.flags|=t,r.memoizedState=no(1|e,n,s,i)}function Xp(t,e){return xl(8390656,8,t,e)}function dh(t,e){return gc(2048,8,t,e)}function Jg(t,e){return gc(4,2,t,e)}function Qg(t,e){return gc(4,4,t,e)}function ev(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function tv(t,e,n){return n=n!=null?n.concat([t]):null,gc(4,4,ev.bind(null,e,t),n)}function fh(){}function nv(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&lh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function iv(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&lh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function rv(t,e,n){return Hr&21?(ei(n,e)||(n=cg(),xt.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function Oy(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Qc.transition;Qc.transition={};try{t(!1),e()}finally{it=n,Qc.transition=i}}function sv(){return zn().memoizedState}function ky(t,e,n){var i=dr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},av(t))ov(e,n);else if(n=Vg(t,e,n,i),n!==null){var r=on();Qn(n,t,i,r),lv(n,e,i)}}function By(t,e,n){var i=dr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(av(t))ov(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ei(o,a)){var l=e.interleaved;l===null?(r.next=r,ih(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Vg(t,e,r,i),n!==null&&(r=on(),Qn(n,t,i,r),lv(n,e,i))}}function av(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function ov(t,e){Ia=jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function lv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Gf(t,n)}}var Yl={readContext:Bn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},zy={readContext:Bn,useCallback:function(t,e){return li().memoizedState=[t,e===void 0?null:e],t},useContext:Bn,useEffect:Xp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xl(4194308,4,ev.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return xl(4,2,t,e)},useMemo:function(t,e){var n=li();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=li();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ky.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=li();return t={current:t},e.memoizedState=t},useState:Wp,useDebugValue:fh,useDeferredValue:function(t){return li().memoizedState=t},useTransition:function(){var t=Wp(!1),e=t[0];return t=Oy.bind(null,t[1]),li().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=li();if(pt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Vt===null)throw Error(se(349));Hr&30||jg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Xp($g.bind(null,i,s,t),[t]),i.flags|=2048,no(9,Yg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=li(),e=Vt.identifierPrefix;if(pt){var n=bi,i=Ai;n=(i&~(1<<32-Jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Fy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Vy={readContext:Bn,useCallback:nv,useContext:Bn,useEffect:dh,useImperativeHandle:tv,useInsertionEffect:Jg,useLayoutEffect:Qg,useMemo:iv,useReducer:eu,useRef:Zg,useState:function(){return eu(to)},useDebugValue:fh,useDeferredValue:function(t){var e=zn();return rv(e,Dt.memoizedState,t)},useTransition:function(){var t=eu(to)[0],e=zn().memoizedState;return[t,e]},useMutableSource:Wg,useSyncExternalStore:Xg,useId:sv,unstable_isNewReconciler:!1},Hy={readContext:Bn,useCallback:nv,useContext:Bn,useEffect:dh,useImperativeHandle:tv,useInsertionEffect:Jg,useLayoutEffect:Qg,useMemo:iv,useReducer:tu,useRef:Zg,useState:function(){return tu(to)},useDebugValue:fh,useDeferredValue:function(t){var e=zn();return Dt===null?e.memoizedState=t:rv(e,Dt.memoizedState,t)},useTransition:function(){var t=tu(to)[0],e=zn().memoizedState;return[t,e]},useMutableSource:Wg,useSyncExternalStore:Xg,useId:sv,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vc={isMounted:function(t){return(t=t._reactInternals)?$r(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=on(),r=dr(t),s=Ri(i,r);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(Qn(e,t,r,i),gl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=on(),r=dr(t),s=Ri(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(Qn(e,t,r,i),gl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=on(),i=dr(t),r=Ri(n,i);r.tag=2,e!=null&&(r.callback=e),e=cr(t,r,i),e!==null&&(Qn(e,t,i,n),gl(e,t,i))}};function jp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!$a(n,i)||!$a(r,s):!0}function cv(t,e,n){var i=!1,r=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bn(s):(r=vn(e)?zr:tn.current,i=e.contextTypes,s=(i=i!=null)?Gs(t,r):mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&vc.enqueueReplaceState(e,e.state,null)}function xd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},rh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Bn(s):(s=vn(e)?zr:tn.current,r.context=Gs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&vc.enqueueReplaceState(r,r.state,null),Wl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ys(t,e){try{var n="",i=e;do n+=g_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function nu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _d(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Gy=typeof WeakMap=="function"?WeakMap:Map;function uv(t,e,n){n=Ri(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ql||(ql=!0,Rd=i),_d(t,e)},n}function dv(t,e,n){n=Ri(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){_d(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_d(t,e),typeof i!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function $p(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Gy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=iS.bind(null,t,e,n),e.then(t,t))}function qp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ri(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var Wy=Bi.ReactCurrentOwner,mn=!1;function sn(t,e,n,i){e.child=t===null?zg(e,null,n,i):Xs(e,t.child,n,i)}function Zp(t,e,n,i,r){n=n.render;var s=e.ref;return Os(e,r),i=ch(t,e,n,i,s,r),n=uh(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(pt&&n&&Zf(e),e.flags|=1,sn(t,e,i,r),e.child)}function Jp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!yh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,fv(t,e,s,i,r)):(t=Ml(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:$a,n(a,i)&&t.ref===e.ref)return Fi(t,e,r)}return e.flags|=1,t=fr(s,i),t.ref=e.ref,t.return=e,e.child=t}function fv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if($a(s,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,Fi(t,e,r)}return yd(t,e,n,i,r)}function hv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(Ls,Mn),Mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(Ls,Mn),Mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(Ls,Mn),Mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(Ls,Mn),Mn|=i;return sn(t,e,r,n),e.child}function pv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yd(t,e,n,i,r){var s=vn(n)?zr:tn.current;return s=Gs(e,s),Os(e,r),n=ch(t,e,n,i,s,r),i=uh(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(pt&&i&&Zf(e),e.flags|=1,sn(t,e,n,r),e.child)}function Qp(t,e,n,i,r){if(vn(n)){var s=!0;Bl(e)}else s=!1;if(Os(e,r),e.stateNode===null)_l(t,e),cv(e,n,i),xd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bn(c):(c=vn(n)?zr:tn.current,c=Gs(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Yp(e,a,i,c),Zi=!1;var d=e.memoizedState;a.state=d,Wl(e,i,a,r),l=e.memoizedState,o!==i||d!==l||gn.current||Zi?(typeof h=="function"&&(vd(e,n,h,i),l=e.memoizedState),(o=Zi||jp(e,n,o,i,d,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Hg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:jn(e.type,o),a.props=c,f=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=vn(n)?zr:tn.current,l=Gs(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||d!==l)&&Yp(e,a,i,l),Zi=!1,d=e.memoizedState,a.state=d,Wl(e,i,a,r);var v=e.memoizedState;o!==f||d!==v||gn.current||Zi?(typeof p=="function"&&(vd(e,n,p,i),v=e.memoizedState),(c=Zi||jp(e,n,c,i,d,v,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Sd(t,e,n,i,s,r)}function Sd(t,e,n,i,r,s){pv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&kp(e,n,!1),Fi(t,e,s);i=e.stateNode,Wy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Xs(e,t.child,null,s),e.child=Xs(e,null,o,s)):sn(t,e,o,s),e.memoizedState=i.state,r&&kp(e,n,!0),e.child}function mv(t){var e=t.stateNode;e.pendingContext?Op(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Op(t,e.context,!1),sh(t,e.containerInfo)}function em(t,e,n,i,r){return Ws(),Qf(r),e.flags|=256,sn(t,e,n,i),e.child}var Md={dehydrated:null,treeContext:null,retryLane:0};function Ed(t){return{baseLanes:t,cachePool:null,transitions:null}}function gv(t,e,n){var i=e.pendingProps,r=gt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(gt,r&1),t===null)return md(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=yc(a,i,0,null),t=Br(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ed(n),e.memoizedState=Md,t):hh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Xy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=fr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=fr(o,s):(s=Br(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Ed(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Md,i}return s=t.child,t=s.sibling,i=fr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function hh(t,e){return e=yc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Io(t,e,n,i){return i!==null&&Qf(i),Xs(e,t.child,null,n),t=hh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Xy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=nu(Error(se(422))),Io(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=yc({mode:"visible",children:i.children},r,0,null),s=Br(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Xs(e,t.child,null,a),e.child.memoizedState=Ed(a),e.memoizedState=Md,s);if(!(e.mode&1))return Io(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(se(419)),i=nu(s,i,void 0),Io(t,e,a,i)}if(o=(a&t.childLanes)!==0,mn||o){if(i=Vt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ui(t,r),Qn(i,t,r,-1))}return _h(),i=nu(Error(se(421))),Io(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=rS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,An=lr(r.nextSibling),bn=e,pt=!0,$n=null,t!==null&&(In[Un++]=Ai,In[Un++]=bi,In[Un++]=Vr,Ai=t.id,bi=t.overflow,Vr=e),e=hh(e,i.children),e.flags|=4096,e)}function tm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),gd(t.return,e,n)}function iu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function vv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tm(t,n,e);else if(t.tag===19)tm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Xl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),iu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Xl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}iu(e,!0,n,null,s);break;case"together":iu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _l(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jy(t,e,n){switch(e.tag){case 3:mv(e),Ws();break;case 5:Gg(e);break;case 1:vn(e.type)&&Bl(e);break;case 4:sh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(Hl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?gv(t,e,n):(ut(gt,gt.current&1),t=Fi(t,e,n),t!==null?t.sibling:null);ut(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return vv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,hv(t,e,n)}return Fi(t,e,n)}var xv,wd,_v,yv;xv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wd=function(){};_v=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ur(pi.current);var s=null;switch(n){case"input":r=ju(t,r),i=ju(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=qu(t,r),i=qu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ol)}Zu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Va.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Va.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&dt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};yv=function(t,e,n,i){n!==i&&(e.flags|=4)};function da(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Yy(t,e,n){var i=e.pendingProps;switch(Jf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return vn(e.type)&&kl(),qt(e),null;case 3:return i=e.stateNode,js(),ft(gn),ft(tn),oh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(No(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$n!==null&&(Nd($n),$n=null))),wd(t,e),qt(e),null;case 5:ah(e);var r=Ur(Qa.current);if(n=e.type,t!==null&&e.stateNode!=null)_v(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return qt(e),null}if(t=Ur(pi.current),No(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ui]=e,i[Za]=s,t=(e.mode&1)!==0,n){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<Ta.length;r++)dt(Ta[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":up(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":fp(i,s),dt("invalid",i)}Zu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Lo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Lo(i.textContent,o,t),r=["children",""+o]):Va.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&dt("scroll",i)}switch(n){case"input":Eo(i),dp(i,s,!0);break;case"textarea":Eo(i),hp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ol)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ui]=e,t[Za]=i,xv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Ju(n,i),n){case"dialog":dt("cancel",t),dt("close",t),r=i;break;case"iframe":case"object":case"embed":dt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ta.length;r++)dt(Ta[r],t);r=i;break;case"source":dt("error",t),r=i;break;case"img":case"image":case"link":dt("error",t),dt("load",t),r=i;break;case"details":dt("toggle",t),r=i;break;case"input":up(t,i),r=ju(t,i),dt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),dt("invalid",t);break;case"textarea":fp(t,i),r=qu(t,i),dt("invalid",t);break;default:r=i}Zu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Z0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&q0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ha(t,l):typeof l=="number"&&Ha(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Va.hasOwnProperty(s)?l!=null&&s==="onScroll"&&dt("scroll",t):l!=null&&Of(t,s,l,a))}switch(n){case"input":Eo(t),dp(t,i,!1);break;case"textarea":Eo(t),hp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+pr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ol)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)yv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Ur(Qa.current),Ur(pi.current),No(e)){if(i=e.stateNode,n=e.memoizedProps,i[ui]=e,(s=i.nodeValue!==n)&&(t=bn,t!==null))switch(t.tag){case 3:Lo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Lo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ui]=e,e.stateNode=i}return qt(e),null;case 13:if(ft(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&An!==null&&e.mode&1&&!(e.flags&128))kg(),Ws(),e.flags|=98560,s=!1;else if(s=No(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[ui]=e}else Ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else $n!==null&&(Nd($n),$n=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?It===0&&(It=3):_h())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return js(),wd(t,e),t===null&&qa(e.stateNode.containerInfo),qt(e),null;case 10:return nh(e.type._context),qt(e),null;case 17:return vn(e.type)&&kl(),qt(e),null;case 19:if(ft(gt),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)da(s,!1);else{if(It!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Xl(t),a!==null){for(e.flags|=128,da(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(gt,gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>$s&&(e.flags|=128,i=!0,da(s,!1),e.lanes=4194304)}else{if(!i)if(t=Xl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),da(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!pt)return qt(e),null}else 2*At()-s.renderingStartTime>$s&&n!==1073741824&&(e.flags|=128,i=!0,da(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=gt.current,ut(gt,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return xh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function $y(t,e){switch(Jf(e),e.tag){case 1:return vn(e.type)&&kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return js(),ft(gn),ft(tn),oh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ah(e),null;case 13:if(ft(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(gt),null;case 4:return js(),null;case 10:return nh(e.type._context),null;case 22:case 23:return xh(),null;case 24:return null;default:return null}}var Uo=!1,Jt=!1,qy=typeof WeakSet=="function"?WeakSet:Set,Se=null;function Ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Et(t,e,i)}else n.current=null}function Td(t,e,n){try{n()}catch(i){Et(t,e,i)}}var nm=!1;function Ky(t,e){if(ld=Il,t=Tg(),Kf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++h===i&&(l=a),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cd={focusedElem:t,selectionRange:n},Il=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var E=v.memoizedProps,m=v.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?E:jn(e.type,E),m);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(M){Et(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return v=nm,nm=!1,v}function Ua(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Td(e,n,s)}r=r.next}while(r!==i)}}function xc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ad(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Sv(t){var e=t.alternate;e!==null&&(t.alternate=null,Sv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ui],delete e[Za],delete e[fd],delete e[Ny],delete e[Dy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Mv(t){return t.tag===5||t.tag===3||t.tag===4}function im(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ol));else if(i!==4&&(t=t.child,t!==null))for(bd(t,e,n),t=t.sibling;t!==null;)bd(t,e,n),t=t.sibling}function Cd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Cd(t,e,n),t=t.sibling;t!==null;)Cd(t,e,n),t=t.sibling}var Gt=null,Yn=!1;function Gi(t,e,n){for(n=n.child;n!==null;)Ev(t,e,n),n=n.sibling}function Ev(t,e,n){if(hi&&typeof hi.onCommitFiberUnmount=="function")try{hi.onCommitFiberUnmount(uc,n)}catch{}switch(n.tag){case 5:Jt||Ps(n,e);case 6:var i=Gt,r=Yn;Gt=null,Gi(t,e,n),Gt=i,Yn=r,Gt!==null&&(Yn?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(Yn?(t=Gt,n=n.stateNode,t.nodeType===8?Kc(t.parentNode,n):t.nodeType===1&&Kc(t,n),ja(t)):Kc(Gt,n.stateNode));break;case 4:i=Gt,r=Yn,Gt=n.stateNode.containerInfo,Yn=!0,Gi(t,e,n),Gt=i,Yn=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Td(n,e,a),r=r.next}while(r!==i)}Gi(t,e,n);break;case 1:if(!Jt&&(Ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Et(n,e,o)}Gi(t,e,n);break;case 21:Gi(t,e,n);break;case 22:n.mode&1?(Jt=(i=Jt)||n.memoizedState!==null,Gi(t,e,n),Jt=i):Gi(t,e,n);break;default:Gi(t,e,n)}}function rm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qy),e.forEach(function(i){var r=sS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Hn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Gt=o.stateNode,Yn=!1;break e;case 3:Gt=o.stateNode.containerInfo,Yn=!0;break e;case 4:Gt=o.stateNode.containerInfo,Yn=!0;break e}o=o.return}if(Gt===null)throw Error(se(160));Ev(s,a,r),Gt=null,Yn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Et(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)wv(e,t),e=e.sibling}function wv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hn(e,t),ri(t),i&4){try{Ua(3,t,t.return),xc(3,t)}catch(E){Et(t,t.return,E)}try{Ua(5,t,t.return)}catch(E){Et(t,t.return,E)}}break;case 1:Hn(e,t),ri(t),i&512&&n!==null&&Ps(n,n.return);break;case 5:if(Hn(e,t),ri(t),i&512&&n!==null&&Ps(n,n.return),t.flags&32){var r=t.stateNode;try{Ha(r,"")}catch(E){Et(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&j0(r,s),Ju(o,a);var c=Ju(o,s);for(a=0;a<l.length;a+=2){var h=l[a],f=l[a+1];h==="style"?Z0(r,f):h==="dangerouslySetInnerHTML"?q0(r,f):h==="children"?Ha(r,f):Of(r,h,f,c)}switch(o){case"input":Yu(r,s);break;case"textarea":Y0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ds(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ds(r,!!s.multiple,s.defaultValue,!0):Ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[Za]=s}catch(E){Et(t,t.return,E)}}break;case 6:if(Hn(e,t),ri(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){Et(t,t.return,E)}}break;case 3:if(Hn(e,t),ri(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ja(e.containerInfo)}catch(E){Et(t,t.return,E)}break;case 4:Hn(e,t),ri(t);break;case 13:Hn(e,t),ri(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(gh=At())),i&4&&rm(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(c=Jt)||h,Hn(e,t),Jt=c):Hn(e,t),ri(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Se=t,h=t.child;h!==null;){for(f=Se=h;Se!==null;){switch(d=Se,p=d.child,d.tag){case 0:case 11:case 14:case 15:Ua(4,d,d.return);break;case 1:Ps(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(E){Et(i,n,E)}}break;case 5:Ps(d,d.return);break;case 22:if(d.memoizedState!==null){am(f);continue}}p!==null?(p.return=d,Se=p):am(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=K0("display",a))}catch(E){Et(t,t.return,E)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(E){Et(t,t.return,E)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Hn(e,t),ri(t),i&4&&rm(t);break;case 21:break;default:Hn(e,t),ri(t)}}function ri(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Mv(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ha(r,""),i.flags&=-33);var s=im(t);Cd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=im(t);bd(t,o,a);break;default:throw Error(se(161))}}catch(l){Et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Zy(t,e,n){Se=t,Tv(t)}function Tv(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Uo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Jt;o=Uo;var c=Jt;if(Uo=a,(Jt=l)&&!c)for(Se=r;Se!==null;)a=Se,l=a.child,a.tag===22&&a.memoizedState!==null?om(r):l!==null?(l.return=a,Se=l):om(r);for(;s!==null;)Se=s,Tv(s),s=s.sibling;Se=r,Uo=o,Jt=c}sm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):sm(t)}}function sm(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||xc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ja(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Jt||e.flags&512&&Ad(e)}catch(d){Et(e,e.return,d)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function am(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function om(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xc(4,e)}catch(l){Et(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var s=e.return;try{Ad(e)}catch(l){Et(e,s,l)}break;case 5:var a=e.return;try{Ad(e)}catch(l){Et(e,a,l)}}}catch(l){Et(e,e.return,l)}if(e===t){Se=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Se=o;break}Se=e.return}}var Jy=Math.ceil,$l=Bi.ReactCurrentDispatcher,ph=Bi.ReactCurrentOwner,kn=Bi.ReactCurrentBatchConfig,Je=0,Vt=null,Pt=null,Xt=0,Mn=0,Ls=_r(0),It=0,io=null,Gr=0,_c=0,mh=0,Fa=null,pn=null,gh=0,$s=1/0,Ei=null,ql=!1,Rd=null,ur=null,Fo=!1,nr=null,Kl=0,Oa=0,Pd=null,yl=-1,Sl=0;function on(){return Je&6?At():yl!==-1?yl:yl=At()}function dr(t){return t.mode&1?Je&2&&Xt!==0?Xt&-Xt:Uy.transition!==null?(Sl===0&&(Sl=cg()),Sl):(t=it,t!==0||(t=window.event,t=t===void 0?16:gg(t.type)),t):1}function Qn(t,e,n,i){if(50<Oa)throw Oa=0,Pd=null,Error(se(185));fo(t,n,i),(!(Je&2)||t!==Vt)&&(t===Vt&&(!(Je&2)&&(_c|=n),It===4&&Qi(t,Xt)),xn(t,i),n===1&&Je===0&&!(e.mode&1)&&($s=At()+500,mc&&yr()))}function xn(t,e){var n=t.callbackNode;U_(t,e);var i=Dl(t,t===Vt?Xt:0);if(i===0)n!==null&&gp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&gp(n),e===1)t.tag===0?Iy(lm.bind(null,t)):Ug(lm.bind(null,t)),Py(function(){!(Je&6)&&yr()}),n=null;else{switch(ug(i)){case 1:n=Hf;break;case 4:n=og;break;case 16:n=Nl;break;case 536870912:n=lg;break;default:n=Nl}n=Dv(n,Av.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Av(t,e){if(yl=-1,Sl=0,Je&6)throw Error(se(327));var n=t.callbackNode;if(ks()&&t.callbackNode!==n)return null;var i=Dl(t,t===Vt?Xt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Zl(t,i);else{e=i;var r=Je;Je|=2;var s=Cv();(Vt!==t||Xt!==e)&&(Ei=null,$s=At()+500,kr(t,e));do try{tS();break}catch(o){bv(t,o)}while(!0);th(),$l.current=s,Je=r,Pt!==null?e=0:(Vt=null,Xt=0,e=It)}if(e!==0){if(e===2&&(r=id(t),r!==0&&(i=r,e=Ld(t,r))),e===1)throw n=io,kr(t,0),Qi(t,i),xn(t,At()),n;if(e===6)Qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Qy(r)&&(e=Zl(t,i),e===2&&(s=id(t),s!==0&&(i=s,e=Ld(t,s))),e===1))throw n=io,kr(t,0),Qi(t,i),xn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Rr(t,pn,Ei);break;case 3:if(Qi(t,i),(i&130023424)===i&&(e=gh+500-At(),10<e)){if(Dl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){on(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=dd(Rr.bind(null,t,pn,Ei),e);break}Rr(t,pn,Ei);break;case 4:if(Qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Jn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Jy(i/1960))-i,10<i){t.timeoutHandle=dd(Rr.bind(null,t,pn,Ei),i);break}Rr(t,pn,Ei);break;case 5:Rr(t,pn,Ei);break;default:throw Error(se(329))}}}return xn(t,At()),t.callbackNode===n?Av.bind(null,t):null}function Ld(t,e){var n=Fa;return t.current.memoizedState.isDehydrated&&(kr(t,e).flags|=256),t=Zl(t,e),t!==2&&(e=pn,pn=n,e!==null&&Nd(e)),t}function Nd(t){pn===null?pn=t:pn.push.apply(pn,t)}function Qy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ei(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qi(t,e){for(e&=~mh,e&=~_c,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jn(e),i=1<<n;t[n]=-1,e&=~i}}function lm(t){if(Je&6)throw Error(se(327));ks();var e=Dl(t,0);if(!(e&1))return xn(t,At()),null;var n=Zl(t,e);if(t.tag!==0&&n===2){var i=id(t);i!==0&&(e=i,n=Ld(t,i))}if(n===1)throw n=io,kr(t,0),Qi(t,e),xn(t,At()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rr(t,pn,Ei),xn(t,At()),null}function vh(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&($s=At()+500,mc&&yr())}}function Wr(t){nr!==null&&nr.tag===0&&!(Je&6)&&ks();var e=Je;Je|=1;var n=kn.transition,i=it;try{if(kn.transition=null,it=1,t)return t()}finally{it=i,kn.transition=n,Je=e,!(Je&6)&&yr()}}function xh(){Mn=Ls.current,ft(Ls)}function kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ry(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(Jf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&kl();break;case 3:js(),ft(gn),ft(tn),oh();break;case 5:ah(i);break;case 4:js();break;case 13:ft(gt);break;case 19:ft(gt);break;case 10:nh(i.type._context);break;case 22:case 23:xh()}n=n.return}if(Vt=t,Pt=t=fr(t.current,null),Xt=Mn=e,It=0,io=null,mh=_c=Gr=0,pn=Fa=null,Ir!==null){for(e=0;e<Ir.length;e++)if(n=Ir[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Ir=null}return t}function bv(t,e){do{var n=Pt;try{if(th(),vl.current=Yl,jl){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}jl=!1}if(Hr=0,zt=Dt=xt=null,Ia=!1,eo=0,ph.current=null,n===null||n.return===null){It=1,io=e,Pt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Xt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=qp(a);if(p!==null){p.flags&=-257,Kp(p,a,o,s,e),p.mode&1&&$p(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var E=new Set;E.add(l),e.updateQueue=E}else v.add(l);break e}else{if(!(e&1)){$p(s,c,e),_h();break e}l=Error(se(426))}}else if(pt&&o.mode&1){var m=qp(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Kp(m,a,o,s,e),Qf(Ys(l,o));break e}}s=l=Ys(l,o),It!==4&&(It=2),Fa===null?Fa=[s]:Fa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=uv(s,l,e);Hp(s,u);break e;case 1:o=l;var g=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(ur===null||!ur.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=dv(s,o,e);Hp(s,M);break e}}s=s.return}while(s!==null)}Pv(n)}catch(T){e=T,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function Cv(){var t=$l.current;return $l.current=Yl,t===null?Yl:t}function _h(){(It===0||It===3||It===2)&&(It=4),Vt===null||!(Gr&268435455)&&!(_c&268435455)||Qi(Vt,Xt)}function Zl(t,e){var n=Je;Je|=2;var i=Cv();(Vt!==t||Xt!==e)&&(Ei=null,kr(t,e));do try{eS();break}catch(r){bv(t,r)}while(!0);if(th(),Je=n,$l.current=i,Pt!==null)throw Error(se(261));return Vt=null,Xt=0,It}function eS(){for(;Pt!==null;)Rv(Pt)}function tS(){for(;Pt!==null&&!A_();)Rv(Pt)}function Rv(t){var e=Nv(t.alternate,t,Mn);t.memoizedProps=t.pendingProps,e===null?Pv(t):Pt=e,ph.current=null}function Pv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$y(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{It=6,Pt=null;return}}else if(n=Yy(n,e,Mn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);It===0&&(It=5)}function Rr(t,e,n){var i=it,r=kn.transition;try{kn.transition=null,it=1,nS(t,e,n,i)}finally{kn.transition=r,it=i}return null}function nS(t,e,n,i){do ks();while(nr!==null);if(Je&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(F_(t,s),t===Vt&&(Pt=Vt=null,Xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fo||(Fo=!0,Dv(Nl,function(){return ks(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var a=it;it=1;var o=Je;Je|=4,ph.current=null,Ky(t,n),wv(n,t),My(cd),Il=!!ld,cd=ld=null,t.current=n,Zy(n),b_(),Je=o,it=a,kn.transition=s}else t.current=n;if(Fo&&(Fo=!1,nr=t,Kl=r),s=t.pendingLanes,s===0&&(ur=null),P_(n.stateNode),xn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ql)throw ql=!1,t=Rd,Rd=null,t;return Kl&1&&t.tag!==0&&ks(),s=t.pendingLanes,s&1?t===Pd?Oa++:(Oa=0,Pd=t):Oa=0,yr(),null}function ks(){if(nr!==null){var t=ug(Kl),e=kn.transition,n=it;try{if(kn.transition=null,it=16>t?16:t,nr===null)var i=!1;else{if(t=nr,nr=null,Kl=0,Je&6)throw Error(se(331));var r=Je;for(Je|=4,Se=t.current;Se!==null;){var s=Se,a=s.child;if(Se.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Se=c;Se!==null;){var h=Se;switch(h.tag){case 0:case 11:case 15:Ua(8,h,s)}var f=h.child;if(f!==null)f.return=h,Se=f;else for(;Se!==null;){h=Se;var d=h.sibling,p=h.return;if(Sv(h),h===c){Se=null;break}if(d!==null){d.return=p,Se=d;break}Se=p}}}var v=s.alternate;if(v!==null){var E=v.child;if(E!==null){v.child=null;do{var m=E.sibling;E.sibling=null,E=m}while(E!==null)}}Se=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Se=a;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ua(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Se=u;break e}Se=s.return}}var g=t.current;for(Se=g;Se!==null;){a=Se;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,Se=S;else e:for(a=g;Se!==null;){if(o=Se,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:xc(9,o)}}catch(T){Et(o,o.return,T)}if(o===a){Se=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,Se=M;break e}Se=o.return}}if(Je=r,yr(),hi&&typeof hi.onPostCommitFiberRoot=="function")try{hi.onPostCommitFiberRoot(uc,t)}catch{}i=!0}return i}finally{it=n,kn.transition=e}}return!1}function cm(t,e,n){e=Ys(n,e),e=uv(t,e,1),t=cr(t,e,1),e=on(),t!==null&&(fo(t,1,e),xn(t,e))}function Et(t,e,n){if(t.tag===3)cm(t,t,n);else for(;e!==null;){if(e.tag===3){cm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ur===null||!ur.has(i))){t=Ys(n,t),t=dv(e,t,1),e=cr(e,t,1),t=on(),e!==null&&(fo(e,1,t),xn(e,t));break}}e=e.return}}function iS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=on(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(Xt&n)===n&&(It===4||It===3&&(Xt&130023424)===Xt&&500>At()-gh?kr(t,0):mh|=n),xn(t,e)}function Lv(t,e){e===0&&(t.mode&1?(e=Ao,Ao<<=1,!(Ao&130023424)&&(Ao=4194304)):e=1);var n=on();t=Ui(t,e),t!==null&&(fo(t,e,n),xn(t,n))}function rS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Lv(t,n)}function sS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),Lv(t,n)}var Nv;Nv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,jy(t,e,n);mn=!!(t.flags&131072)}else mn=!1,pt&&e.flags&1048576&&Fg(e,Vl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;_l(t,e),t=e.pendingProps;var r=Gs(e,tn.current);Os(e,n),r=ch(null,e,i,t,r,n);var s=uh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(s=!0,Bl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,rh(e),r.updater=vc,e.stateNode=r,r._reactInternals=e,xd(e,i,t,n),e=Sd(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&Zf(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(_l(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=oS(i),t=jn(i,t),r){case 0:e=yd(null,e,i,t,n);break e;case 1:e=Qp(null,e,i,t,n);break e;case 11:e=Zp(null,e,i,t,n);break e;case 14:e=Jp(null,e,i,jn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),yd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Qp(t,e,i,r,n);case 3:e:{if(mv(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Hg(t,e),Wl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ys(Error(se(423)),e),e=em(t,e,i,n,r);break e}else if(i!==r){r=Ys(Error(se(424)),e),e=em(t,e,i,n,r);break e}else for(An=lr(e.stateNode.containerInfo.firstChild),bn=e,pt=!0,$n=null,n=zg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ws(),i===r){e=Fi(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return Gg(e),t===null&&md(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,ud(i,r)?a=null:s!==null&&ud(i,s)&&(e.flags|=32),pv(t,e),sn(t,e,a,n),e.child;case 6:return t===null&&md(e),null;case 13:return gv(t,e,n);case 4:return sh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Xs(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Zp(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ut(Hl,i._currentValue),i._currentValue=a,s!==null)if(ei(s.value,a)){if(s.children===r.children&&!gn.current){e=Fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ri(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),gd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(se(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),gd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Os(e,n),r=Bn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),Jp(t,e,i,r,n);case 15:return fv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),_l(t,e),e.tag=1,vn(i)?(t=!0,Bl(e)):t=!1,Os(e,n),cv(e,i,r),xd(e,i,r,n),Sd(null,e,i,!0,t,n);case 19:return vv(t,e,n);case 22:return hv(t,e,n)}throw Error(se(156,e.tag))};function Dv(t,e){return ag(t,e)}function aS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new aS(t,e,n,i)}function yh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oS(t){if(typeof t=="function")return yh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bf)return 11;if(t===zf)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ml(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")yh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Ss:return Br(n.children,r,s,e);case kf:a=8,r|=8;break;case Hu:return t=On(12,n,e,r|2),t.elementType=Hu,t.lanes=s,t;case Gu:return t=On(13,n,e,r),t.elementType=Gu,t.lanes=s,t;case Wu:return t=On(19,n,e,r),t.elementType=Wu,t.lanes=s,t;case G0:return yc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case V0:a=10;break e;case H0:a=9;break e;case Bf:a=11;break e;case zf:a=14;break e;case Ki:a=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=On(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Br(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function yc(t,e,n,i){return t=On(22,t,i,e),t.elementType=G0,t.lanes=n,t.stateNode={isHidden:!1},t}function ru(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function su(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function lS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bc(0),this.expirationTimes=Bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Sh(t,e,n,i,r,s,a,o,l){return t=new lS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rh(s),t}function cS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Iv(t){if(!t)return mr;t=t._reactInternals;e:{if($r(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(vn(n))return Ig(t,n,e)}return e}function Uv(t,e,n,i,r,s,a,o,l){return t=Sh(n,i,!0,t,r,s,a,o,l),t.context=Iv(null),n=t.current,i=on(),r=dr(n),s=Ri(i,r),s.callback=e??null,cr(n,s,r),t.current.lanes=r,fo(t,r,i),xn(t,i),t}function Sc(t,e,n,i){var r=e.current,s=on(),a=dr(r);return n=Iv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ri(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=cr(r,e,a),t!==null&&(Qn(t,r,a,s),gl(t,r,a)),a}function Jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function um(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mh(t,e){um(t,e),(t=t.alternate)&&um(t,e)}function uS(){return null}var Fv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Eh(t){this._internalRoot=t}Mc.prototype.render=Eh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Sc(t,e,null,null)};Mc.prototype.unmount=Eh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){Sc(null,t,null,null)}),e[Ii]=null}};function Mc(t){this._internalRoot=t}Mc.prototype.unstable_scheduleHydration=function(t){if(t){var e=hg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ji.length&&e!==0&&e<Ji[n].priority;n++);Ji.splice(n,0,t),n===0&&mg(t)}};function wh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ec(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dm(){}function dS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Jl(a);s.call(c)}}var a=Uv(e,i,t,0,null,!1,!1,"",dm);return t._reactRootContainer=a,t[Ii]=a.current,qa(t.nodeType===8?t.parentNode:t),Wr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Jl(l);o.call(c)}}var l=Sh(t,0,!1,null,null,!1,!1,"",dm);return t._reactRootContainer=l,t[Ii]=l.current,qa(t.nodeType===8?t.parentNode:t),Wr(function(){Sc(e,l,n,i)}),l}function wc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Jl(a);o.call(l)}}Sc(e,a,t,r)}else a=dS(n,e,t,r,i);return Jl(a)}dg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wa(e.pendingLanes);n!==0&&(Gf(e,n|1),xn(e,At()),!(Je&6)&&($s=At()+500,yr()))}break;case 13:Wr(function(){var i=Ui(t,1);if(i!==null){var r=on();Qn(i,t,1,r)}}),Mh(t,1)}};Wf=function(t){if(t.tag===13){var e=Ui(t,134217728);if(e!==null){var n=on();Qn(e,t,134217728,n)}Mh(t,134217728)}};fg=function(t){if(t.tag===13){var e=dr(t),n=Ui(t,e);if(n!==null){var i=on();Qn(n,t,e,i)}Mh(t,e)}};hg=function(){return it};pg=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};ed=function(t,e,n){switch(e){case"input":if(Yu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=pc(i);if(!r)throw Error(se(90));X0(i),Yu(i,r)}}}break;case"textarea":Y0(t,n);break;case"select":e=n.value,e!=null&&Ds(t,!!n.multiple,e,!1)}};eg=vh;tg=Wr;var fS={usingClientEntryPoint:!1,Events:[po,Ts,pc,J0,Q0,vh]},fa={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hS={bundleType:fa.bundleType,version:fa.version,rendererPackageName:fa.rendererPackageName,rendererConfig:fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=rg(t),t===null?null:t.stateNode},findFiberByHostInstance:fa.findFiberByHostInstance||uS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oo.isDisabled&&Oo.supportsFiber)try{uc=Oo.inject(hS),hi=Oo}catch{}}Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fS;Pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wh(e))throw Error(se(200));return cS(t,e,null,n)};Pn.createRoot=function(t,e){if(!wh(t))throw Error(se(299));var n=!1,i="",r=Fv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Sh(t,1,!1,null,null,n,!1,i,r),t[Ii]=e.current,qa(t.nodeType===8?t.parentNode:t),new Eh(e)};Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=rg(e),t=t===null?null:t.stateNode,t};Pn.flushSync=function(t){return Wr(t)};Pn.hydrate=function(t,e,n){if(!Ec(e))throw Error(se(200));return wc(null,t,e,!0,n)};Pn.hydrateRoot=function(t,e,n){if(!wh(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Fv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Uv(e,null,t,1,n??null,r,!1,s,a),t[Ii]=e.current,qa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Mc(e)};Pn.render=function(t,e,n){if(!Ec(e))throw Error(se(200));return wc(null,t,e,!1,n)};Pn.unmountComponentAtNode=function(t){if(!Ec(t))throw Error(se(40));return t._reactRootContainer?(Wr(function(){wc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ii]=null})}),!0):!1};Pn.unstable_batchedUpdates=vh;Pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ec(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return wc(t,e,n,!1,i)};Pn.version="18.3.1-next-f1338f8080-20240426";function Ov(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ov)}catch(t){console.error(t)}}Ov(),O0.exports=Pn;var pS=O0.exports,kv,fm=pS;kv=fm.createRoot,fm.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ro(){return ro=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ro.apply(null,arguments)}var ir;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ir||(ir={}));const hm="popstate";function mS(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return Dd("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Ql(r)}return vS(e,n,null,t)}function Lt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Th(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gS(){return Math.random().toString(36).substr(2,8)}function pm(t,e){return{usr:t.state,key:t.key,idx:e}}function Dd(t,e,n,i){return n===void 0&&(n=null),ro({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?na(e):e,{state:n,key:e&&e.key||i||gS()})}function Ql(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function na(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function vS(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=ir.Pop,l=null,c=h();c==null&&(c=0,a.replaceState(ro({},a.state,{idx:c}),""));function h(){return(a.state||{idx:null}).idx}function f(){o=ir.Pop;let m=h(),u=m==null?null:m-c;c=m,l&&l({action:o,location:E.location,delta:u})}function d(m,u){o=ir.Push;let g=Dd(E.location,m,u);c=h()+1;let S=pm(g,c),M=E.createHref(g);try{a.pushState(S,"",M)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;r.location.assign(M)}s&&l&&l({action:o,location:E.location,delta:1})}function p(m,u){o=ir.Replace;let g=Dd(E.location,m,u);c=h();let S=pm(g,c),M=E.createHref(g);a.replaceState(S,"",M),s&&l&&l({action:o,location:E.location,delta:0})}function v(m){let u=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof m=="string"?m:Ql(m);return g=g.replace(/ $/,"%20"),Lt(u,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,u)}let E={get action(){return o},get location(){return t(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(hm,f),l=m,()=>{r.removeEventListener(hm,f),l=null}},createHref(m){return e(r,m)},createURL:v,encodeLocation(m){let u=v(m);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:d,replace:p,go(m){return a.go(m)}};return E}var mm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(mm||(mm={}));function xS(t,e,n){return n===void 0&&(n="/"),_S(t,e,n)}function _S(t,e,n,i){let r=typeof e=="string"?na(e):e,s=Ah(r.pathname||"/",n);if(s==null)return null;let a=Bv(t);yS(a);let o=null,l=NS(s);for(let c=0;o==null&&c<a.length;++c)o=RS(a[c],l);return o}function Bv(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(Lt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=hr([i,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(Lt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Bv(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:bS(c,s.index),routesMeta:h})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of zv(s.path))r(s,a,l)}),e}function zv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=zv(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function yS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:CS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const SS=/^:[\w-]+$/,MS=3,ES=2,wS=1,TS=10,AS=-2,gm=t=>t==="*";function bS(t,e){let n=t.split("/"),i=n.length;return n.some(gm)&&(i+=AS),e&&(i+=ES),n.filter(r=>!gm(r)).reduce((r,s)=>r+(SS.test(s)?MS:s===""?wS:TS),i)}function CS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function RS(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=PS({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),d=l.route;if(!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:hr([s,f.pathname]),pathnameBase:OS(hr([s,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(s=hr([s,f.pathnameBase]))}return a}function PS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=LS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,h,f)=>{let{paramName:d,isOptional:p}=h;if(d==="*"){let E=o[f]||"";a=s.slice(0,s.length-E.length).replace(/(.)\/+$/,"$1")}const v=o[f];return p&&!v?c[d]=void 0:c[d]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function LS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Th(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function NS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Th(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ah(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const DS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,IS=t=>DS.test(t);function US(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?na(t):t,s;if(n)if(IS(n))s=n;else{if(n.includes("//")){let a=n;n=Gv(n),Th(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=vm(n.substring(1),"/"):s=vm(n,e)}else s=e;return{pathname:s,search:kS(i),hash:BS(r)}}function vm(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function au(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function FS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Vv(t,e){let n=FS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Hv(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=na(t):(r=ro({},t),Lt(!r.pathname||!r.pathname.includes("?"),au("?","pathname","search",r)),Lt(!r.pathname||!r.pathname.includes("#"),au("#","pathname","hash",r)),Lt(!r.search||!r.search.includes("#"),au("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let f=e.length-1;if(!i&&a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),f-=1;r.pathname=d.join("/")}o=f>=0?e[f]:"/"}let l=US(r,o),c=a&&a!=="/"&&a.endsWith("/"),h=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const Gv=t=>t.replace(/\/\/+/g,"/"),hr=t=>Gv(t.join("/")),OS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),kS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,BS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function zS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Wv=["post","put","patch","delete"];new Set(Wv);const VS=["get",...Wv];new Set(VS);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function so(){return so=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},so.apply(null,arguments)}const bh=Me.createContext(null),HS=Me.createContext(null),qr=Me.createContext(null),Tc=Me.createContext(null),Kr=Me.createContext({outlet:null,matches:[],isDataRoute:!1}),Xv=Me.createContext(null);function GS(t,e){let{relative:n}=e===void 0?{}:e;go()||Lt(!1);let{basename:i,navigator:r}=Me.useContext(qr),{hash:s,pathname:a,search:o}=Yv(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:hr([i,a])),r.createHref({pathname:l,search:o,hash:s})}function go(){return Me.useContext(Tc)!=null}function Ac(){return go()||Lt(!1),Me.useContext(Tc).location}function jv(t){Me.useContext(qr).static||Me.useLayoutEffect(t)}function WS(){let{isDataRoute:t}=Me.useContext(Kr);return t?i1():XS()}function XS(){go()||Lt(!1);let t=Me.useContext(bh),{basename:e,future:n,navigator:i}=Me.useContext(qr),{matches:r}=Me.useContext(Kr),{pathname:s}=Ac(),a=JSON.stringify(Vv(r,n.v7_relativeSplatPath)),o=Me.useRef(!1);return jv(()=>{o.current=!0}),Me.useCallback(function(c,h){if(h===void 0&&(h={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let f=Hv(c,JSON.parse(a),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:hr([e,f.pathname])),(h.replace?i.replace:i.push)(f,h.state,h)},[e,i,a,s,t])}function Yv(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=Me.useContext(qr),{matches:r}=Me.useContext(Kr),{pathname:s}=Ac(),a=JSON.stringify(Vv(r,i.v7_relativeSplatPath));return Me.useMemo(()=>Hv(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function jS(t,e){return YS(t,e)}function YS(t,e,n,i){go()||Lt(!1);let{navigator:r}=Me.useContext(qr),{matches:s}=Me.useContext(Kr),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=Ac(),h;if(e){var f;let m=typeof e=="string"?na(e):e;l==="/"||(f=m.pathname)!=null&&f.startsWith(l)||Lt(!1),h=m}else h=c;let d=h.pathname||"/",p=d;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(m.length).join("/")}let v=xS(t,{pathname:p}),E=JS(v&&v.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:hr([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:hr([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&E?Me.createElement(Tc.Provider,{value:{location:so({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:ir.Pop}},E):E}function $S(){let t=n1(),e=zS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Me.createElement(Me.Fragment,null,Me.createElement("h2",null,"Unexpected Application Error!"),Me.createElement("h3",{style:{fontStyle:"italic"}},e),n?Me.createElement("pre",{style:r},n):null,null)}const qS=Me.createElement($S,null);class KS extends Me.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?Me.createElement(Kr.Provider,{value:this.props.routeContext},Me.createElement(Xv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ZS(t){let{routeContext:e,match:n,children:i}=t,r=Me.useContext(bh);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),Me.createElement(Kr.Provider,{value:e},i)}function JS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let h=a.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);h>=0||Lt(!1),a=a.slice(0,Math.min(a.length,h+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let h=0;h<a.length;h++){let f=a[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:d,errors:p}=n,v=f.route.loader&&d[f.route.id]===void 0&&(!p||p[f.route.id]===void 0);if(f.route.lazy||v){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((h,f,d)=>{let p,v=!1,E=null,m=null;n&&(p=o&&f.route.id?o[f.route.id]:void 0,E=f.route.errorElement||qS,l&&(c<0&&d===0?(r1("route-fallback"),v=!0,m=null):c===d&&(v=!0,m=f.route.hydrateFallbackElement||null)));let u=e.concat(a.slice(0,d+1)),g=()=>{let S;return p?S=E:v?S=m:f.route.Component?S=Me.createElement(f.route.Component,null):f.route.element?S=f.route.element:S=h,Me.createElement(ZS,{match:f,routeContext:{outlet:h,matches:u,isDataRoute:n!=null},children:S})};return n&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?Me.createElement(KS,{location:n.location,revalidation:n.revalidation,component:E,error:p,children:g(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):g()},null)}var $v=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}($v||{}),qv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(qv||{});function QS(t){let e=Me.useContext(bh);return e||Lt(!1),e}function e1(t){let e=Me.useContext(HS);return e||Lt(!1),e}function t1(t){let e=Me.useContext(Kr);return e||Lt(!1),e}function Kv(t){let e=t1(),n=e.matches[e.matches.length-1];return n.route.id||Lt(!1),n.route.id}function n1(){var t;let e=Me.useContext(Xv),n=e1(),i=Kv();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function i1(){let{router:t}=QS($v.UseNavigateStable),e=Kv(qv.UseNavigateStable),n=Me.useRef(!1);return jv(()=>{n.current=!0}),Me.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,so({fromRouteId:e},s)))},[t,e])}const xm={};function r1(t,e,n){xm[t]||(xm[t]=!0)}function s1(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function oi(t){Lt(!1)}function a1(t){let{basename:e="/",children:n=null,location:i,navigationType:r=ir.Pop,navigator:s,static:a=!1,future:o}=t;go()&&Lt(!1);let l=e.replace(/^\/*/,"/"),c=Me.useMemo(()=>({basename:l,navigator:s,static:a,future:so({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=na(i));let{pathname:h="/",search:f="",hash:d="",state:p=null,key:v="default"}=i,E=Me.useMemo(()=>{let m=Ah(h,l);return m==null?null:{location:{pathname:m,search:f,hash:d,state:p,key:v},navigationType:r}},[l,h,f,d,p,v,r]);return E==null?null:Me.createElement(qr.Provider,{value:c},Me.createElement(Tc.Provider,{children:n,value:E}))}function o1(t){let{children:e,location:n}=t;return jS(Id(e),n)}new Promise(()=>{});function Id(t,e){e===void 0&&(e=[]);let n=[];return Me.Children.forEach(t,(i,r)=>{if(!Me.isValidElement(i))return;let s=[...e,r];if(i.type===Me.Fragment){n.push.apply(n,Id(i.props.children,s));return}i.type!==oi&&Lt(!1),!i.props.index||!i.props.children||Lt(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Id(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ud(){return Ud=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ud.apply(null,arguments)}function l1(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function c1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function u1(t,e){return t.button===0&&(!e||e==="_self")&&!c1(t)}const d1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],f1="6";try{window.__reactRouterVersion=f1}catch{}const h1="startTransition",_m=i_[h1];function p1(t){let{basename:e,children:n,future:i,window:r}=t,s=Me.useRef();s.current==null&&(s.current=mS({window:r,v5Compat:!0}));let a=s.current,[o,l]=Me.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},h=Me.useCallback(f=>{c&&_m?_m(()=>l(f)):l(f)},[l,c]);return Me.useLayoutEffect(()=>a.listen(h),[a,h]),Me.useEffect(()=>s1(i),[i]),Me.createElement(a1,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const m1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",g1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Er=Me.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:h,viewTransition:f}=e,d=l1(e,d1),{basename:p}=Me.useContext(qr),v,E=!1;if(typeof c=="string"&&g1.test(c)&&(v=c,m1))try{let S=new URL(window.location.href),M=c.startsWith("//")?new URL(S.protocol+c):new URL(c),T=Ah(M.pathname,p);M.origin===S.origin&&T!=null?c=T+M.search+M.hash:E=!0}catch{}let m=GS(c,{relative:r}),u=v1(c,{replace:a,state:o,target:l,preventScrollReset:h,relative:r,viewTransition:f});function g(S){i&&i(S),S.defaultPrevented||u(S)}return Me.createElement("a",Ud({},d,{href:v||m,onClick:E||s?i:g,ref:n,target:l}))});var ym;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ym||(ym={}));var Sm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Sm||(Sm={}));function v1(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=WS(),c=Ac(),h=Yv(t,{relative:a});return Me.useCallback(f=>{if(u1(f,n)){f.preventDefault();let d=i!==void 0?i:Ql(c)===Ql(h);l(t,{replace:d,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,h,i,r,n,t,s,a,o])}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ch="185",x1=0,Mm=1,_1=2,El=1,y1=2,Aa=3,gr=0,ln=1,qn=2,Pi=0,Bs=1,wi=2,Em=3,wm=4,S1=5,Lr=100,M1=101,E1=102,w1=103,T1=104,A1=200,b1=201,C1=202,R1=203,Fd=204,Od=205,P1=206,L1=207,N1=208,D1=209,I1=210,U1=211,F1=212,O1=213,k1=214,kd=0,Bd=1,zd=2,qs=3,Vd=4,Hd=5,Gd=6,Wd=7,Zv=0,B1=1,z1=2,mi=0,Jv=1,Qv=2,ex=3,Rh=4,tx=5,nx=6,ix=7,rx=300,Xr=301,Ks=302,ou=303,lu=304,bc=306,Xd=1e3,Ci=1001,jd=1002,Wt=1003,V1=1004,ko=1005,Qt=1006,cu=1007,Fr=1008,Tn=1009,sx=1010,ax=1011,ao=1012,Ph=1013,vi=1014,di=1015,Oi=1016,Lh=1017,Nh=1018,oo=1020,ox=35902,lx=35899,cx=1021,ux=1022,Zn=1023,ki=1026,Or=1027,dx=1028,Dh=1029,jr=1030,Ih=1031,Uh=1033,wl=33776,Tl=33777,Al=33778,bl=33779,Yd=35840,$d=35841,qd=35842,Kd=35843,Zd=36196,Jd=37492,Qd=37496,ef=37488,tf=37489,ec=37490,nf=37491,rf=37808,sf=37809,af=37810,of=37811,lf=37812,cf=37813,uf=37814,df=37815,ff=37816,hf=37817,pf=37818,mf=37819,gf=37820,vf=37821,xf=36492,_f=36494,yf=36495,Sf=36283,Mf=36284,tc=36285,Ef=36286,H1=3200,wf=0,G1=1,er="",En="srgb",nc="srgb-linear",ic="linear",tt="srgb",ns=7680,Tm=519,W1=512,X1=513,j1=514,Fh=515,Y1=516,$1=517,Oh=518,q1=519,Tf=35044,Am="300 es",fi=2e3,lo=2001;function K1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function rc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Z1(){const t=rc("canvas");return t.style.display="block",t}const bm={};function sc(...t){const e="THREE."+t.shift();console.log(e,...t)}function fx(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function De(...t){t=fx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function $e(...t){t=fx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function zs(...t){const e=t.join(" ");e in bm||(bm[e]=!0,De(...t))}function J1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Q1={[kd]:Bd,[zd]:Gd,[Vd]:Wd,[qs]:Hd,[Bd]:kd,[Gd]:zd,[Wd]:Vd,[Hd]:qs};class Zr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cm=1234567;const ka=Math.PI/180,co=180/Math.PI;function Li(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function Xe(t,e,n){return Math.max(e,Math.min(n,t))}function kh(t,e){return(t%e+e)%e}function eM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function tM(t,e,n){return t!==e?(n-t)/(e-t):0}function Ba(t,e,n){return(1-n)*t+n*e}function nM(t,e,n,i){return Ba(t,e,1-Math.exp(-n*i))}function iM(t,e=1){return e-Math.abs(kh(t,e*2)-e)}function rM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function sM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function aM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function oM(t,e){return t+Math.random()*(e-t)}function lM(t){return t*(.5-Math.random())}function cM(t){t!==void 0&&(Cm=t);let e=Cm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uM(t){return t*ka}function dM(t){return t*co}function fM(t){return(t&t-1)===0&&t!==0}function hM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function pM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function mM(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),h=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),v=a((i-e)/2);switch(r){case"XYX":t.set(o*h,l*f,l*d,o*c);break;case"YZY":t.set(l*d,o*h,l*f,o*c);break;case"ZXZ":t.set(l*f,l*d,o*h,o*c);break;case"XZX":t.set(o*h,l*v,l*p,o*c);break;case"YXY":t.set(l*p,o*h,l*v,o*c);break;case"ZYZ":t.set(l*v,l*p,o*h,o*c);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Kn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function nt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Rm={DEG2RAD:ka,RAD2DEG:co,generateUUID:Li,clamp:Xe,euclideanModulo:kh,mapLinear:eM,inverseLerp:tM,lerp:Ba,damp:nM,pingpong:iM,smoothstep:rM,smootherstep:sM,randInt:aM,randFloat:oM,randFloatSpread:lM,seededRandom:cM,degToRad:uM,radToDeg:dM,isPowerOfTwo:fM,ceilPowerOfTwo:hM,floorPowerOfTwo:pM,setQuaternionFromProperEuler:mM,normalize:nt,denormalize:Kn},Wh=class Wh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wh.prototype.isVector2=!0;let ke=Wh;class ia{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3],d=s[a+0],p=s[a+1],v=s[a+2],E=s[a+3];if(f!==E||l!==d||c!==p||h!==v){let m=l*d+c*p+h*v+f*E;m<0&&(d=-d,p=-p,v=-v,E=-E,m=-m);let u=1-o;if(m<.9995){const g=Math.acos(m),S=Math.sin(g);u=Math.sin(u*g)/S,o=Math.sin(o*g)/S,l=l*u+d*o,c=c*u+p*o,h=h*u+v*o,f=f*u+E*o}else{l=l*u+d*o,c=c*u+p*o,h=h*u+v*o,f=f*u+E*o;const g=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=g,c*=g,h*=g,f*=g}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[a],d=s[a+1],p=s[a+2],v=s[a+3];return e[n]=o*v+h*f+l*p-c*d,e[n+1]=l*v+h*d+c*f-o*p,e[n+2]=c*v+h*p+o*d-l*f,e[n+3]=h*v-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),f=o(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*h*f+c*p*v,this._y=c*p*f-d*h*v,this._z=c*h*v+d*p*f,this._w=c*h*f-d*p*v;break;case"YXZ":this._x=d*h*f+c*p*v,this._y=c*p*f-d*h*v,this._z=c*h*v-d*p*f,this._w=c*h*f+d*p*v;break;case"ZXY":this._x=d*h*f-c*p*v,this._y=c*p*f+d*h*v,this._z=c*h*v+d*p*f,this._w=c*h*f-d*p*v;break;case"ZYX":this._x=d*h*f-c*p*v,this._y=c*p*f+d*h*v,this._z=c*h*v-d*p*f,this._w=c*h*f+d*p*v;break;case"YZX":this._x=d*h*f+c*p*v,this._y=c*p*f+d*h*v,this._z=c*h*v-d*p*f,this._w=c*h*f-d*p*v;break;case"XZY":this._x=d*h*f-c*p*v,this._y=c*p*f-d*h*v,this._z=c*h*v+d*p*f,this._w=c*h*f+d*p*v;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],f=n[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Xh=class Xh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Pm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Pm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*h,this.y=i+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uu.copy(this).projectOnVector(e),this.sub(uu)}reflect(e){return this.sub(uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xh.prototype.isVector3=!0;let k=Xh;const uu=new k,Pm=new ia,jh=class jh{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],p=i[5],v=i[8],E=r[0],m=r[3],u=r[6],g=r[1],S=r[4],M=r[7],T=r[2],A=r[5],b=r[8];return s[0]=a*E+o*g+l*T,s[3]=a*m+o*S+l*A,s[6]=a*u+o*M+l*b,s[1]=c*E+h*g+f*T,s[4]=c*m+h*S+f*A,s[7]=c*u+h*M+f*b,s[2]=d*E+p*g+v*T,s[5]=d*m+p*S+v*A,s[8]=d*u+p*M+v*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*s,p=c*s-a*l,v=n*f+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=f*E,e[1]=(r*c-h*i)*E,e[2]=(o*i-r*a)*E,e[3]=d*E,e[4]=(h*n-r*l)*E,e[5]=(r*s-o*n)*E,e[6]=p*E,e[7]=(i*l-c*n)*E,e[8]=(a*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(du.makeScale(e,n)),this}rotate(e){return zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(du.makeRotation(-e)),this}translate(e,n){return zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(du.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};jh.prototype.isMatrix3=!0;let Ie=jh;const du=new Ie,Lm=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nm=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gM(){const t={enabled:!0,workingColorSpace:nc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===tt&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(r.r=Vs(r.r),r.g=Vs(r.g),r.b=Vs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===er?ic:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[nc]:{primaries:e,whitePoint:i,transfer:ic,toXYZ:Lm,fromXYZ:Nm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:Lm,fromXYZ:Nm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),t}const je=gM();function Ni(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let is;class vM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{is===void 0&&(is=rc("canvas")),is.width=e.width,is.height=e.height;const r=is.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=is}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=rc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ni(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ni(n[i]/255)*255):n[i]=Ni(n[i]);return{data:n,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xM=0;class Bh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(fu(r[a].image)):s.push(fu(r[a]))}else s=fu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function fu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?vM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let _M=0;const hu=new k;class en extends Zr{constructor(e=en.DEFAULT_IMAGE,n=en.DEFAULT_MAPPING,i=Ci,r=Ci,s=Qt,a=Fr,o=Zn,l=Tn,c=en.DEFAULT_ANISOTROPY,h=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=Li(),this.name="",this.source=new Bh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hu).x}get height(){return this.source.getSize(hu).y}get depth(){return this.source.getSize(hu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){De(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xd:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case jd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xd:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case jd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=rx;en.DEFAULT_ANISOTROPY=1;const Yh=class Yh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],v=l[9],E=l[2],m=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-E)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+E)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,M=(p+1)/2,T=(u+1)/2,A=(h+d)/4,b=(f+E)/4,x=(v+m)/4;return S>M&&S>T?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=A/i,s=b/i):M>T?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=x/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=b/s,r=x/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(f-E)*(f-E)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(f-E)/g,this.z=(d-h)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this.w=Xe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this.w=Xe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yh.prototype.isVector4=!0;let vt=Yh;class yM extends Zr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new vt(0,0,e,n),this.scissorTest=!1,this.viewport=new vt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new en(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Bh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends yM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class hx extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class SM extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lc=class lc{constructor(e,n,i,r,s,a,o,l,c,h,f,d,p,v,E,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,f,d,p,v,E,m)}set(e,n,i,r,s,a,o,l,c,h,f,d,p,v,E,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=v,u[11]=E,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/rs.setFromMatrixColumn(e,0).length(),s=1/rs.setFromMatrixColumn(e,1).length(),a=1/rs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*h,p=a*f,v=o*h,E=o*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=p+v*c,n[5]=d-E*c,n[9]=-o*l,n[2]=E-d*c,n[6]=v+p*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*f,v=c*h,E=c*f;n[0]=d+E*o,n[4]=v*o-p,n[8]=a*c,n[1]=a*f,n[5]=a*h,n[9]=-o,n[2]=p*o-v,n[6]=E+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*f,v=c*h,E=c*f;n[0]=d-E*o,n[4]=-a*f,n[8]=v+p*o,n[1]=p+v*o,n[5]=a*h,n[9]=E-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*f,v=o*h,E=o*f;n[0]=l*h,n[4]=v*c-p,n[8]=d*c+E,n[1]=l*f,n[5]=E*c+d,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,v=o*l,E=o*c;n[0]=l*h,n[4]=E-d*f,n[8]=v*f+p,n[1]=f,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*f+v,n[10]=d-E*f}else if(e.order==="XZY"){const d=a*l,p=a*c,v=o*l,E=o*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=d*f+E,n[5]=a*h,n[9]=p*f-v,n[2]=v*f-p,n[6]=o*h,n[10]=E*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(MM,e,EM)}lookAt(e,n,i){const r=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Wi.crossVectors(i,yn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Wi.crossVectors(i,yn)),Wi.normalize(),Bo.crossVectors(yn,Wi),r[0]=Wi.x,r[4]=Bo.x,r[8]=yn.x,r[1]=Wi.y,r[5]=Bo.y,r[9]=yn.y,r[2]=Wi.z,r[6]=Bo.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],p=i[13],v=i[2],E=i[6],m=i[10],u=i[14],g=i[3],S=i[7],M=i[11],T=i[15],A=r[0],b=r[4],x=r[8],C=r[12],P=r[1],L=r[5],B=r[9],q=r[13],ee=r[2],z=r[6],K=r[10],V=r[14],D=r[3],j=r[7],ne=r[11],re=r[15];return s[0]=a*A+o*P+l*ee+c*D,s[4]=a*b+o*L+l*z+c*j,s[8]=a*x+o*B+l*K+c*ne,s[12]=a*C+o*q+l*V+c*re,s[1]=h*A+f*P+d*ee+p*D,s[5]=h*b+f*L+d*z+p*j,s[9]=h*x+f*B+d*K+p*ne,s[13]=h*C+f*q+d*V+p*re,s[2]=v*A+E*P+m*ee+u*D,s[6]=v*b+E*L+m*z+u*j,s[10]=v*x+E*B+m*K+u*ne,s[14]=v*C+E*q+m*V+u*re,s[3]=g*A+S*P+M*ee+T*D,s[7]=g*b+S*L+M*z+T*j,s[11]=g*x+S*B+M*K+T*ne,s[15]=g*C+S*q+M*V+T*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],p=e[14],v=e[3],E=e[7],m=e[11],u=e[15],g=l*p-c*d,S=o*p-c*f,M=o*d-l*f,T=a*p-c*h,A=a*d-l*h,b=a*f-o*h;return n*(E*g-m*S+u*M)-i*(v*g-m*T+u*A)+r*(v*S-E*T+u*b)-s*(v*M-E*A+m*b)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return n*(a*h-o*c)-i*(s*h-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],p=e[11],v=e[12],E=e[13],m=e[14],u=e[15],g=n*o-i*a,S=n*l-r*a,M=n*c-s*a,T=i*l-r*o,A=i*c-s*o,b=r*c-s*l,x=h*E-f*v,C=h*m-d*v,P=h*u-p*v,L=f*m-d*E,B=f*u-p*E,q=d*u-p*m,ee=g*q-S*B+M*L+T*P-A*C+b*x;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/ee;return e[0]=(o*q-l*B+c*L)*z,e[1]=(r*B-i*q-s*L)*z,e[2]=(E*b-m*A+u*T)*z,e[3]=(d*A-f*b-p*T)*z,e[4]=(l*P-a*q-c*C)*z,e[5]=(n*q-r*P+s*C)*z,e[6]=(m*M-v*b-u*S)*z,e[7]=(h*b-d*M+p*S)*z,e[8]=(a*B-o*P+c*x)*z,e[9]=(i*P-n*B-s*x)*z,e[10]=(v*A-E*M+u*g)*z,e[11]=(f*M-h*A-p*g)*z,e[12]=(o*C-a*L-l*x)*z,e[13]=(n*L-i*C+r*x)*z,e[14]=(E*S-v*T-m*g)*z,e[15]=(h*T-f*S+d*g)*z,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,f=o+o,d=s*c,p=s*h,v=s*f,E=a*h,m=a*f,u=o*f,g=l*c,S=l*h,M=l*f,T=i.x,A=i.y,b=i.z;return r[0]=(1-(E+u))*T,r[1]=(p+M)*T,r[2]=(v-S)*T,r[3]=0,r[4]=(p-M)*A,r[5]=(1-(d+u))*A,r[6]=(m+g)*A,r[7]=0,r[8]=(v+S)*b,r[9]=(m-g)*b,r[10]=(1-(d+E))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=rs.set(r[0],r[1],r[2]).length();const o=rs.set(r[4],r[5],r[6]).length(),l=rs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Gn.copy(this);const c=1/a,h=1/o,f=1/l;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=f,Gn.elements[9]*=f,Gn.elements[10]*=f,n.setFromRotationMatrix(Gn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=fi,l=!1){const c=this.elements,h=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let v,E;if(l)v=s/(a-s),E=a*s/(a-s);else if(o===fi)v=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===lo)v=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=fi,l=!1){const c=this.elements,h=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,E;if(l)v=1/(a-s),E=a/(a-s);else if(o===fi)v=-2/(a-s),E=-(a+s)/(a-s);else if(o===lo)v=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};lc.prototype.isMatrix4=!0;let mt=lc;const rs=new k,Gn=new mt,MM=new k(0,0,0),EM=new k(1,1,1),Wi=new k,Bo=new k,yn=new k,Dm=new mt,Im=new ia;class vr{constructor(e=0,n=0,i=0,r=vr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Im.setFromEuler(this),this.setFromQuaternion(Im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vr.DEFAULT_ORDER="XYZ";class px{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wM=0;const Um=new k,ss=new ia,xi=new mt,zo=new k,ha=new k,TM=new k,AM=new ia,Fm=new k(1,0,0),Om=new k(0,1,0),km=new k(0,0,1),Bm={type:"added"},bM={type:"removed"},as={type:"childadded",child:null},pu={type:"childremoved",child:null};class Ut extends Zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new k,n=new vr,i=new ia,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ie}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new px,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Fm,e)}rotateY(e){return this.rotateOnAxis(Om,e)}rotateZ(e){return this.rotateOnAxis(km,e)}translateOnAxis(e,n){return Um.copy(e).applyQuaternion(this.quaternion),this.position.add(Um.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Fm,e)}translateY(e){return this.translateOnAxis(Om,e)}translateZ(e){return this.translateOnAxis(km,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?zo.copy(e):zo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(ha,zo,this.up):xi.lookAt(zo,ha,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),ss.setFromRotationMatrix(xi),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bm),as.child=e,this.dispatchEvent(as),as.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(bM),pu.child=e,this.dispatchEvent(pu),pu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bm),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,TM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,AM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new k(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ba extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CM={type:"move"};class mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const E of e.hand.values()){const m=n.getJointPose(E,i),u=this._getHandJoint(c,E);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(CM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ba;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const mx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function gu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ge{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=je.workingColorSpace){return this.r=e,this.g=n,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=je.workingColorSpace){if(e=kh(e,1),n=Xe(n,0,1),i=Xe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=gu(a,s,e+1/3),this.g=gu(a,s,e),this.b=gu(a,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,n=En){function i(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=En){const i=mx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return je.workingToColorSpace(Zt.copy(this),e),Math.round(Xe(Zt.r*255,0,255))*65536+Math.round(Xe(Zt.g*255,0,255))*256+Math.round(Xe(Zt.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=je.workingColorSpace){je.workingToColorSpace(Zt.copy(this),n);const i=Zt.r,r=Zt.g,s=Zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=je.workingColorSpace){return je.workingToColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=En){je.workingToColorSpace(Zt.copy(this),e);const n=Zt.r,i=Zt.g,r=Zt.b;return e!==En?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+n,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Xi),e.getHSL(Vo);const i=Ba(Xi.h,Vo.h,n),r=Ba(Xi.s,Vo.s,n),s=Ba(Xi.l,Vo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Ge;Ge.NAMES=mx;class zh{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=n}clone(){return new zh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class RM extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vr,this.environmentIntensity=1,this.environmentRotation=new vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Wn=new k,_i=new k,vu=new k,yi=new k,os=new k,ls=new k,zm=new k,xu=new k,_u=new k,yu=new k,Su=new vt,Mu=new vt,Eu=new vt;class Fn{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Wn.subVectors(e,n),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Wn.subVectors(r,n),_i.subVectors(i,n),vu.subVectors(e,n);const a=Wn.dot(Wn),o=Wn.dot(_i),l=Wn.dot(vu),c=_i.dot(_i),h=_i.dot(vu),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-o*h)*d,v=(a*h-o*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Su.setScalar(0),Mu.setScalar(0),Eu.setScalar(0),Su.fromBufferAttribute(e,n),Mu.fromBufferAttribute(e,i),Eu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Su,s.x),a.addScaledVector(Mu,s.y),a.addScaledVector(Eu,s.z),a}static isFrontFacing(e,n,i,r){return Wn.subVectors(i,n),_i.subVectors(e,n),Wn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Wn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Fn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Fn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;os.subVectors(r,i),ls.subVectors(s,i),xu.subVectors(e,i);const l=os.dot(xu),c=ls.dot(xu);if(l<=0&&c<=0)return n.copy(i);_u.subVectors(e,r);const h=os.dot(_u),f=ls.dot(_u);if(h>=0&&f<=h)return n.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(os,a);yu.subVectors(e,s);const p=os.dot(yu),v=ls.dot(yu);if(v>=0&&p<=v)return n.copy(s);const E=p*c-l*v;if(E<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(ls,o);const m=h*v-p*f;if(m<=0&&f-h>=0&&p-v>=0)return zm.subVectors(s,r),o=(f-h)/(f-h+(p-v)),n.copy(r).addScaledVector(zm,o);const u=1/(m+E+d);return a=E*u,o=d*u,n.copy(i).addScaledVector(os,a).addScaledVector(ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class vo{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xn):Xn.fromBufferAttribute(s,a),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ho.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ho.copy(i.boundingBox)),Ho.applyMatrix4(e.matrixWorld),this.union(Ho)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),Go.subVectors(this.max,pa),cs.subVectors(e.a,pa),us.subVectors(e.b,pa),ds.subVectors(e.c,pa),ji.subVectors(us,cs),Yi.subVectors(ds,us),wr.subVectors(cs,ds);let n=[0,-ji.z,ji.y,0,-Yi.z,Yi.y,0,-wr.z,wr.y,ji.z,0,-ji.x,Yi.z,0,-Yi.x,wr.z,0,-wr.x,-ji.y,ji.x,0,-Yi.y,Yi.x,0,-wr.y,wr.x,0];return!wu(n,cs,us,ds,Go)||(n=[1,0,0,0,1,0,0,0,1],!wu(n,cs,us,ds,Go))?!1:(Wo.crossVectors(ji,Yi),n=[Wo.x,Wo.y,Wo.z],wu(n,cs,us,ds,Go))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Si=[new k,new k,new k,new k,new k,new k,new k,new k],Xn=new k,Ho=new vo,cs=new k,us=new k,ds=new k,ji=new k,Yi=new k,wr=new k,pa=new k,Go=new k,Wo=new k,Tr=new k;function wu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Tr.fromArray(t,s);const o=r.x*Math.abs(Tr.x)+r.y*Math.abs(Tr.y)+r.z*Math.abs(Tr.z),l=e.dot(Tr),c=n.dot(Tr),h=i.dot(Tr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Rt=new k,Xo=new ke;let PM=0;class Cn extends Zr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Tf,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Xo.fromBufferAttribute(this,n),Xo.applyMatrix3(e),this.setXY(n,Xo.x,Xo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Kn(n,this.array)),n}setX(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Kn(n,this.array)),n}setY(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Kn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Kn(n,this.array)),n}setW(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class gx extends Cn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class vx extends Cn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class cn extends Cn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const LM=new vo,ma=new k,Tu=new k;class Cc{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):LM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);const n=ma.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ma,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(Tu)),this.expandByPoint(ma.copy(e.center).sub(Tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let NM=0;const Dn=new mt,Au=new Ut,fs=new k,Sn=new vo,ga=new vo,Bt=new k;class un extends Zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(K1(e)?vx:gx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return Au.lookAt(e),Au.updateMatrix(),this.applyMatrix4(Au.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new cn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ga.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(Sn.min,ga.min),Sn.expandByPoint(Bt),Bt.addVectors(Sn.max,ga.max),Sn.expandByPoint(Bt)):(Sn.expandByPoint(ga.min),Sn.expandByPoint(ga.max))}Sn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Bt.fromBufferAttribute(o,c),l&&(fs.fromBufferAttribute(e,c),Bt.add(fs)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Cn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new k,l[x]=new k;const c=new k,h=new k,f=new k,d=new ke,p=new ke,v=new ke,E=new k,m=new k;function u(x,C,P){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,C),f.fromBufferAttribute(i,P),d.fromBufferAttribute(s,x),p.fromBufferAttribute(s,C),v.fromBufferAttribute(s,P),h.sub(c),f.sub(c),p.sub(d),v.sub(d);const L=1/(p.x*v.y-v.x*p.y);isFinite(L)&&(E.copy(h).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(L),o[x].add(E),o[C].add(E),o[P].add(E),l[x].add(m),l[C].add(m),l[P].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let x=0,C=g.length;x<C;++x){const P=g[x],L=P.start,B=P.count;for(let q=L,ee=L+B;q<ee;q+=3)u(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const S=new k,M=new k,T=new k,A=new k;function b(x){T.fromBufferAttribute(r,x),A.copy(T);const C=o[x];S.copy(C),S.sub(T.multiplyScalar(T.dot(C))).normalize(),M.crossVectors(A,C);const L=M.dot(l[x])<0?-1:1;a.setXYZW(x,S.x,S.y,S.z,L)}for(let x=0,C=g.length;x<C;++x){const P=g[x],L=P.start,B=P.count;for(let q=L,ee=L+B;q<ee;q+=3)b(e.getX(q+0)),b(e.getX(q+1)),b(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Cn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,h=new k,f=new k;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),E=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,E),a.fromBufferAttribute(n,m),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let p=0,v=0;for(let E=0,m=l.length;E<m;E++){o.isInterleavedBufferAttribute?p=l[E]*o.data.stride+o.offset:p=l[E]*h;for(let u=0;u<h;u++)d[v++]=c[p++]}return new Cn(d,h,f)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new un,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],p=e(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class DM{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Tf,this.updateRanges=[],this.version=0,this.uuid=Li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new k;class ac{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix4(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyNormalMatrix(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.transformDirection(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Kn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Kn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Kn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Kn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){sc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Cn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ac(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){sc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let IM=0;class Jr extends Zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=Bs,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fd,this.blendDst=Od,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){De(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(i.blending=this.blending),this.side!==gr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fd&&(i.blendSrc=this.blendSrc),this.blendDst!==Od&&(i.blendDst=this.blendDst),this.blendEquation!==Lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ke().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Af extends Jr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let hs;const va=new k,ps=new k,ms=new k,gs=new ke,xa=new ke,xx=new mt,jo=new k,_a=new k,Yo=new k,Vm=new ke,bu=new ke,Hm=new ke;class Gm extends Ut{constructor(e=new Af){if(super(),this.isSprite=!0,this.type="Sprite",hs===void 0){hs=new un;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new DM(n,5);hs.setIndex([0,1,2,0,2,3]),hs.setAttribute("position",new ac(i,3,0,!1)),hs.setAttribute("uv",new ac(i,2,3,!1))}this.geometry=hs,this.material=e,this.center=new ke(.5,.5),this.count=1}raycast(e,n){e.camera===null&&$e('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ps.setFromMatrixScale(this.matrixWorld),xx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ms.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ps.multiplyScalar(-ms.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;$o(jo.set(-.5,-.5,0),ms,a,ps,r,s),$o(_a.set(.5,-.5,0),ms,a,ps,r,s),$o(Yo.set(.5,.5,0),ms,a,ps,r,s),Vm.set(0,0),bu.set(1,0),Hm.set(1,1);let o=e.ray.intersectTriangle(jo,_a,Yo,!1,va);if(o===null&&($o(_a.set(-.5,.5,0),ms,a,ps,r,s),bu.set(0,1),o=e.ray.intersectTriangle(jo,Yo,_a,!1,va),o===null))return;const l=e.ray.origin.distanceTo(va);l<e.near||l>e.far||n.push({distance:l,point:va.clone(),uv:Fn.getInterpolation(va,jo,_a,Yo,Vm,bu,Hm,new ke),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function $o(t,e,n,i,r,s){gs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(xa.x=s*gs.x-r*gs.y,xa.y=r*gs.x+s*gs.y):xa.copy(gs),t.copy(e),t.x+=xa.x,t.y+=xa.y,t.applyMatrix4(xx)}const Mi=new k,Cu=new k,qo=new k,$i=new k,Ru=new k,Ko=new k,Pu=new k;class _x{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,n),Mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Cu.copy(e).add(n).multiplyScalar(.5),qo.copy(n).sub(e).normalize(),$i.copy(this.origin).sub(Cu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(qo),o=$i.dot(this.direction),l=-$i.dot(qo),c=$i.lengthSq(),h=Math.abs(1-a*a);let f,d,p,v;if(h>0)if(f=a*l-o,d=a*o-l,v=s*h,f>=0)if(d>=-v)if(d<=v){const E=1/h;f*=E,d*=E,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Cu).addScaledVector(qo,d),p}intersectSphere(e,n){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,n,i,r,s){Ru.subVectors(n,e),Ko.subVectors(i,e),Pu.crossVectors(Ru,Ko);let a=this.direction.dot(Pu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$i.subVectors(this.origin,e);const l=o*this.direction.dot(Ko.crossVectors($i,Ko));if(l<0)return null;const c=o*this.direction.dot(Ru.cross($i));if(c<0||l+c>a)return null;const h=-o*$i.dot(Pu);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class za extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.combine=Zv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wm=new mt,Ar=new _x,Zo=new Cc,Xm=new k,Jo=new k,Qo=new k,el=new k,Lu=new k,tl=new k,jm=new k,nl=new k;class an extends Ut{constructor(e=new un,n=new za){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){tl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(Lu.fromBufferAttribute(f,e),a?tl.addScaledVector(Lu,h):tl.addScaledVector(Lu.sub(n),h))}n.add(tl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zo.copy(i.boundingSphere),Zo.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(Zo.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Zo,Xm)===null||Ar.origin.distanceToSquared(Xm)>(e.far-e.near)**2))&&(Wm.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(Wm),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,E=d.length;v<E;v++){const m=d[v],u=a[m.materialIndex],g=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,T=S;M<T;M+=3){const A=o.getX(M),b=o.getX(M+1),x=o.getX(M+2);r=il(this,u,e,i,c,h,f,A,b,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),E=Math.min(o.count,p.start+p.count);for(let m=v,u=E;m<u;m+=3){const g=o.getX(m),S=o.getX(m+1),M=o.getX(m+2);r=il(this,a,e,i,c,h,f,g,S,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,E=d.length;v<E;v++){const m=d[v],u=a[m.materialIndex],g=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,T=S;M<T;M+=3){const A=M,b=M+1,x=M+2;r=il(this,u,e,i,c,h,f,A,b,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let m=v,u=E;m<u;m+=3){const g=m,S=m+1,M=m+2;r=il(this,a,e,i,c,h,f,g,S,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function UM(t,e,n,i,r,s,a,o){let l;if(e.side===ln?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===gr,o),l===null)return null;nl.copy(o),nl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(nl);return c<n.near||c>n.far?null:{distance:c,point:nl.clone(),object:t}}function il(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Jo),t.getVertexPosition(l,Qo),t.getVertexPosition(c,el);const h=UM(t,e,n,i,Jo,Qo,el,jm);if(h){const f=new k;Fn.getBarycoord(jm,Jo,Qo,el,f),r&&(h.uv=Fn.getInterpolatedAttribute(r,o,l,c,f,new ke)),s&&(h.uv1=Fn.getInterpolatedAttribute(s,o,l,c,f,new ke)),a&&(h.normal=Fn.getInterpolatedAttribute(a,o,l,c,f,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new k,materialIndex:0};Fn.getNormal(Jo,Qo,el,d.normal),h.face=d,h.barycoord=f}return h}class FM extends en{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Wt,h=Wt,f,d){super(null,a,o,l,c,h,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nu=new k,OM=new k,kM=new Ie;class Pr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Nu.subVectors(i,n).cross(OM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Nu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||kM.getNormalMatrix(e),r=this.coplanarPoint(Nu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new Cc,BM=new ke(.5,.5),rl=new k;class Vh{constructor(e=new Pr,n=new Pr,i=new Pr,r=new Pr,s=new Pr,a=new Pr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],f=s[5],d=s[6],p=s[7],v=s[8],E=s[9],m=s[10],u=s[11],g=s[12],S=s[13],M=s[14],T=s[15];if(r[0].setComponents(c-a,p-h,u-v,T-g).normalize(),r[1].setComponents(c+a,p+h,u+v,T+g).normalize(),r[2].setComponents(c+o,p+f,u+E,T+S).normalize(),r[3].setComponents(c-o,p-f,u-E,T-S).normalize(),i)r[4].setComponents(l,d,m,M).normalize(),r[5].setComponents(c-l,p-d,u-m,T-M).normalize();else if(r[4].setComponents(c-l,p-d,u-m,T-M).normalize(),n===fi)r[5].setComponents(c+l,p+d,u+m,T+M).normalize();else if(n===lo)r[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){br.center.set(0,0,0);const n=BM.distanceTo(e.center);return br.radius=.7071067811865476+n,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(rl.x=r.normal.x>0?e.max.x:e.min.x,rl.y=r.normal.y>0?e.max.y:e.min.y,rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bf extends Jr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ym=new mt,Cf=new _x,sl=new Cc,al=new k;class $m extends Ut{constructor(e=new un,n=new bf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(r),sl.radius+=s,e.ray.intersectsSphere(sl)===!1)return;Ym.copy(r).invert(),Cf.copy(e.ray).applyMatrix4(Ym);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=d,E=p;v<E;v++){const m=c.getX(v);al.fromBufferAttribute(f,m),qm(al,m,l,r,e,n,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let v=d,E=p;v<E;v++)al.fromBufferAttribute(f,v),qm(al,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function qm(t,e,n,i,r,s,a){const o=Cf.distanceSqToPoint(t);if(o<n){const l=new k;Cf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class yx extends en{constructor(e=[],n=Xr,i,r,s,a,o,l,c,h){super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Du extends en{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zs extends en{constructor(e,n,i=vi,r,s,a,o=Wt,l=Wt,c,h=ki,f=1){if(h!==ki&&h!==Or)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class zM extends Zs{constructor(e,n=vi,i=Xr,r,s,a=Wt,o=Wt,l,c=ki){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sx extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xo extends un{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,p=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(h,3)),this.setAttribute("uv",new cn(f,2));function v(E,m,u,g,S,M,T,A,b,x,C){const P=M/b,L=T/x,B=M/2,q=T/2,ee=A/2,z=b+1,K=x+1;let V=0,D=0;const j=new k;for(let ne=0;ne<K;ne++){const re=ne*L-q;for(let oe=0;oe<z;oe++){const Be=oe*P-B;j[E]=Be*g,j[m]=re*S,j[u]=ee,c.push(j.x,j.y,j.z),j[E]=0,j[m]=0,j[u]=A>0?1:-1,h.push(j.x,j.y,j.z),f.push(oe/b),f.push(1-ne/x),V+=1}}for(let ne=0;ne<x;ne++)for(let re=0;re<b;re++){const oe=d+re+z*ne,Be=d+re+z*(ne+1),qe=d+(re+1)+z*(ne+1),He=d+(re+1)+z*ne;l.push(oe,Be,He),l.push(Be,qe,He),D+=6}o.addGroup(p,D,C),p+=D,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Rc extends un{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,f=e/o,d=n/l,p=[],v=[],E=[],m=[];for(let u=0;u<h;u++){const g=u*d-a;for(let S=0;S<c;S++){const M=S*f-s;v.push(M,-g,0),E.push(0,0,1),m.push(S/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const S=g+c*u,M=g+c*(u+1),T=g+1+c*(u+1),A=g+1+c*u;p.push(S,M,A),p.push(M,T,A)}this.setIndex(p),this.setAttribute("position",new cn(v,3)),this.setAttribute("normal",new cn(E,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rc(e.width,e.height,e.widthSegments,e.heightSegments)}}class oc extends un{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],h=[];let f=e;const d=(n-e)/r,p=new k,v=new ke;for(let E=0;E<=r;E++){for(let m=0;m<=i;m++){const u=s+m/i*a;p.x=f*Math.cos(u),p.y=f*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/n+1)/2,v.y=(p.y/n+1)/2,h.push(v.x,v.y)}f+=d}for(let E=0;E<r;E++){const m=E*(i+1);for(let u=0;u<i;u++){const g=u+m,S=g,M=g+i+1,T=g+i+2,A=g+1;o.push(S,M,A),o.push(M,T,A)}}this.setIndex(o),this.setAttribute("position",new cn(l,3)),this.setAttribute("normal",new cn(c,3)),this.setAttribute("uv",new cn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ns extends un{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new k,d=new k,p=[],v=[],E=[],m=[];for(let u=0;u<=i;u++){const g=[],S=u/i,M=a+S*o,T=e*Math.cos(M),A=Math.sqrt(e*e-T*T);let b=0;u===0&&a===0?b=.5/n:u===i&&l===Math.PI&&(b=-.5/n);for(let x=0;x<=n;x++){const C=x/n,P=r+C*s;f.x=-A*Math.cos(P),f.y=T,f.z=A*Math.sin(P),v.push(f.x,f.y,f.z),d.copy(f).normalize(),E.push(d.x,d.y,d.z),m.push(C+b,1-S),g.push(c++)}h.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const S=h[u][g+1],M=h[u][g],T=h[u+1][g],A=h[u+1][g+1];(u!==0||a>0)&&p.push(S,M,A),(u!==i-1||l<Math.PI)&&p.push(M,T,A)}this.setIndex(p),this.setAttribute("position",new cn(v,3)),this.setAttribute("normal",new cn(E,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Km(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Km(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=Js(t[n]);for(const r in i)e[r]=i[r]}return e}function Km(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function VM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Mx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const HM={clone:Js,merge:rn};var GM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GM,this.fragmentShader=WM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=VM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Ge().setHex(r.value);break;case"v2":this.uniforms[i].value=new ke().fromArray(r.value);break;case"v3":this.uniforms[i].value=new k().fromArray(r.value);break;case"v4":this.uniforms[i].value=new vt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ie().fromArray(r.value);break;case"m4":this.uniforms[i].value=new mt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class XM extends Vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jM extends Jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wf,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class YM extends Jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $M extends Jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Hh extends Ut{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class qM extends Hh{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Iu=new mt,Zm=new k,Jm=new k;class Ex{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vh,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Zm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zm),Jm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Jm),n.updateMatrixWorld(),Iu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Iu,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===lo||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Iu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ol=new k,ll=new ia,si=new k;class wx extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ol,ll,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ol,ll,si.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(ol,ll,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ol,ll,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qi=new k,Qm=new ke,e0=new ke;class wn extends wx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=co*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return co*2*Math.atan(Math.tan(ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,n){return this.getViewBounds(e,Qm,e0),n.subVectors(e0,Qm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ka*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class KM extends Ex{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0}}class ZM extends Hh{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new KM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Gh extends wx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class JM extends Ex{constructor(){super(new Gh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class QM extends Hh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new JM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const vs=-90,xs=1;class eE extends Ut{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(vs,xs,e,n);r.layers=this.layers,this.add(r);const s=new wn(vs,xs,e,n);s.layers=this.layers,this.add(s);const a=new wn(vs,xs,e,n);a.layers=this.layers,this.add(a);const o=new wn(vs,xs,e,n);o.layers=this.layers,this.add(o);const l=new wn(vs,xs,e,n);l.layers=this.layers,this.add(l);const c=new wn(vs,xs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(f,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class tE extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class nE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,De("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const $h=class $h{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};$h.prototype.isMatrix2=!0;let t0=$h;function n0(t,e,n,i){const r=iE(i);switch(n){case cx:return t*e;case dx:return t*e/r.components*r.byteLength;case Dh:return t*e/r.components*r.byteLength;case jr:return t*e*2/r.components*r.byteLength;case Ih:return t*e*2/r.components*r.byteLength;case ux:return t*e*3/r.components*r.byteLength;case Zn:return t*e*4/r.components*r.byteLength;case Uh:return t*e*4/r.components*r.byteLength;case wl:case Tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Al:case bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $d:case Kd:return Math.max(t,16)*Math.max(e,8)/4;case Yd:case qd:return Math.max(t,8)*Math.max(e,8)/2;case Zd:case Jd:case ef:case tf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Qd:case ec:case nf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case rf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case af:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case of:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case lf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case cf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case uf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case df:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ff:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case hf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case pf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case mf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case gf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case vf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case xf:case _f:case yf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Sf:case Mf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case tc:case Ef:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function iE(t){switch(t){case Tn:case sx:return{byteLength:1,components:1};case ao:case ax:case Oi:return{byteLength:2,components:1};case Lh:case Nh:return{byteLength:2,components:4};case vi:case Ph:case di:return{byteLength:4,components:1};case ox:case lx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ch}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ch);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function rE(t){const e=new WeakMap;function n(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const h=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,h);else{f.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<f.length;p++){const v=f[d],E=f[p];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++d,f[d]=E)}f.length=d+1;for(let p=0,v=f.length;p<v;p++){const E=f[p];t.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var sE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,pE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_E=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,TE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,AE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,CE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,RE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,PE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,LE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UE="gl_FragColor = linearToOutputTexel( gl_FragColor );",FE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,kE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,BE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,HE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,YE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$E=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ZE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,JE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ew=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,aw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ow=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,lw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_w=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ew=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ww=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Aw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Iw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Uw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ow=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Hw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ww=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$w=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,mT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_T=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,IT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:sE,alphahash_pars_fragment:aE,alphamap_fragment:oE,alphamap_pars_fragment:lE,alphatest_fragment:cE,alphatest_pars_fragment:uE,aomap_fragment:dE,aomap_pars_fragment:fE,batching_pars_vertex:hE,batching_vertex:pE,begin_vertex:mE,beginnormal_vertex:gE,bsdfs:vE,iridescence_fragment:xE,bumpmap_pars_fragment:_E,clipping_planes_fragment:yE,clipping_planes_pars_fragment:SE,clipping_planes_pars_vertex:ME,clipping_planes_vertex:EE,color_fragment:wE,color_pars_fragment:TE,color_pars_vertex:AE,color_vertex:bE,common:CE,cube_uv_reflection_fragment:RE,defaultnormal_vertex:PE,displacementmap_pars_vertex:LE,displacementmap_vertex:NE,emissivemap_fragment:DE,emissivemap_pars_fragment:IE,colorspace_fragment:UE,colorspace_pars_fragment:FE,envmap_fragment:OE,envmap_common_pars_fragment:kE,envmap_pars_fragment:BE,envmap_pars_vertex:zE,envmap_physical_pars_fragment:ZE,envmap_vertex:VE,fog_vertex:HE,fog_pars_vertex:GE,fog_fragment:WE,fog_pars_fragment:XE,gradientmap_pars_fragment:jE,lightmap_pars_fragment:YE,lights_lambert_fragment:$E,lights_lambert_pars_fragment:qE,lights_pars_begin:KE,lights_toon_fragment:JE,lights_toon_pars_fragment:QE,lights_phong_fragment:ew,lights_phong_pars_fragment:tw,lights_physical_fragment:nw,lights_physical_pars_fragment:iw,lights_fragment_begin:rw,lights_fragment_maps:sw,lights_fragment_end:aw,lightprobes_pars_fragment:ow,logdepthbuf_fragment:lw,logdepthbuf_pars_fragment:cw,logdepthbuf_pars_vertex:uw,logdepthbuf_vertex:dw,map_fragment:fw,map_pars_fragment:hw,map_particle_fragment:pw,map_particle_pars_fragment:mw,metalnessmap_fragment:gw,metalnessmap_pars_fragment:vw,morphinstance_vertex:xw,morphcolor_vertex:_w,morphnormal_vertex:yw,morphtarget_pars_vertex:Sw,morphtarget_vertex:Mw,normal_fragment_begin:Ew,normal_fragment_maps:ww,normal_pars_fragment:Tw,normal_pars_vertex:Aw,normal_vertex:bw,normalmap_pars_fragment:Cw,clearcoat_normal_fragment_begin:Rw,clearcoat_normal_fragment_maps:Pw,clearcoat_pars_fragment:Lw,iridescence_pars_fragment:Nw,opaque_fragment:Dw,packing:Iw,premultiplied_alpha_fragment:Uw,project_vertex:Fw,dithering_fragment:Ow,dithering_pars_fragment:kw,roughnessmap_fragment:Bw,roughnessmap_pars_fragment:zw,shadowmap_pars_fragment:Vw,shadowmap_pars_vertex:Hw,shadowmap_vertex:Gw,shadowmask_pars_fragment:Ww,skinbase_vertex:Xw,skinning_pars_vertex:jw,skinning_vertex:Yw,skinnormal_vertex:$w,specularmap_fragment:qw,specularmap_pars_fragment:Kw,tonemapping_fragment:Zw,tonemapping_pars_fragment:Jw,transmission_fragment:Qw,transmission_pars_fragment:eT,uv_pars_fragment:tT,uv_pars_vertex:nT,uv_vertex:iT,worldpos_vertex:rT,background_vert:sT,background_frag:aT,backgroundCube_vert:oT,backgroundCube_frag:lT,cube_vert:cT,cube_frag:uT,depth_vert:dT,depth_frag:fT,distance_vert:hT,distance_frag:pT,equirect_vert:mT,equirect_frag:gT,linedashed_vert:vT,linedashed_frag:xT,meshbasic_vert:_T,meshbasic_frag:yT,meshlambert_vert:ST,meshlambert_frag:MT,meshmatcap_vert:ET,meshmatcap_frag:wT,meshnormal_vert:TT,meshnormal_frag:AT,meshphong_vert:bT,meshphong_frag:CT,meshphysical_vert:RT,meshphysical_frag:PT,meshtoon_vert:LT,meshtoon_frag:NT,points_vert:DT,points_frag:IT,shadow_vert:UT,shadow_frag:FT,sprite_vert:OT,sprite_frag:kT},me={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},ci={basic:{uniforms:rn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:rn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:rn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:rn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:rn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:rn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:rn([me.points,me.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:rn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:rn([me.common,me.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:rn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:rn([me.sprite,me.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:rn([me.common,me.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:rn([me.lights,me.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ci.physical={uniforms:rn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const cl={r:0,b:0,g:0},BT=new mt,Ax=new Ie;Ax.set(-1,0,0,0,1,0,0,0,1);function zT(t,e,n,i,r,s){const a=new Ge(0);let o=r===!0?0:1,l,c,h=null,f=0,d=null;function p(g){let S=g.isScene===!0?g.background:null;if(S&&S.isTexture){const M=g.backgroundBlurriness>0;S=e.get(S,M)}return S}function v(g){let S=!1;const M=p(g);M===null?m(a,o):M&&M.isColor&&(m(M,1),S=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(g,S){const M=p(S);M&&(M.isCubeTexture||M.mapping===bc)?(c===void 0&&(c=new an(new xo(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Js(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(BT.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ax),c.material.toneMapped=je.getTransfer(M.colorSpace)!==tt,(h!==M||f!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new an(new Rc(2,2),new Vn({name:"BackgroundMaterial",uniforms:Js(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=je.getTransfer(M.colorSpace)!==tt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,d=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,S){g.getRGB(cl,Mx(t)),n.buffers.color.setClear(cl.r,cl.g,cl.b,S,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,S=1){a.set(g),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,m(a,o)},render:v,addToRenderList:E,dispose:u}}function VT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(L,B,q,ee,z){let K=!1;const V=f(L,ee,q,B);s!==V&&(s=V,c(s.object)),K=p(L,ee,q,z),K&&v(L,ee,q,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,M(L,B,q,ee),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(L){return t.bindVertexArray(L)}function h(L){return t.deleteVertexArray(L)}function f(L,B,q,ee){const z=ee.wireframe===!0;let K=i[B.id];K===void 0&&(K={},i[B.id]=K);const V=L.isInstancedMesh===!0?L.id:0;let D=K[V];D===void 0&&(D={},K[V]=D);let j=D[q.id];j===void 0&&(j={},D[q.id]=j);let ne=j[z];return ne===void 0&&(ne=d(l()),j[z]=ne),ne}function d(L){const B=[],q=[],ee=[];for(let z=0;z<n;z++)B[z]=0,q[z]=0,ee[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:ee,object:L,attributes:{},index:null}}function p(L,B,q,ee){const z=s.attributes,K=B.attributes;let V=0;const D=q.getAttributes();for(const j in D)if(D[j].location>=0){const re=z[j];let oe=K[j];if(oe===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),re===void 0||re.attribute!==oe||oe&&re.data!==oe.data)return!0;V++}return s.attributesNum!==V||s.index!==ee}function v(L,B,q,ee){const z={},K=B.attributes;let V=0;const D=q.getAttributes();for(const j in D)if(D[j].location>=0){let re=K[j];re===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(re=L.instanceColor));const oe={};oe.attribute=re,re&&re.data&&(oe.data=re.data),z[j]=oe,V++}s.attributes=z,s.attributesNum=V,s.index=ee}function E(){const L=s.newAttributes;for(let B=0,q=L.length;B<q;B++)L[B]=0}function m(L){u(L,0)}function u(L,B){const q=s.newAttributes,ee=s.enabledAttributes,z=s.attributeDivisors;q[L]=1,ee[L]===0&&(t.enableVertexAttribArray(L),ee[L]=1),z[L]!==B&&(t.vertexAttribDivisor(L,B),z[L]=B)}function g(){const L=s.newAttributes,B=s.enabledAttributes;for(let q=0,ee=B.length;q<ee;q++)B[q]!==L[q]&&(t.disableVertexAttribArray(q),B[q]=0)}function S(L,B,q,ee,z,K,V){V===!0?t.vertexAttribIPointer(L,B,q,z,K):t.vertexAttribPointer(L,B,q,ee,z,K)}function M(L,B,q,ee){E();const z=ee.attributes,K=q.getAttributes(),V=B.defaultAttributeValues;for(const D in K){const j=K[D];if(j.location>=0){let ne=z[D];if(ne===void 0&&(D==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),D==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor)),ne!==void 0){const re=ne.normalized,oe=ne.itemSize,Be=e.get(ne);if(Be===void 0)continue;const qe=Be.buffer,He=Be.type,U=Be.bytesPerElement,J=He===t.INT||He===t.UNSIGNED_INT||ne.gpuType===Ph;if(ne.isInterleavedBufferAttribute){const Y=ne.data,he=Y.stride,we=ne.offset;if(Y.isInstancedInterleavedBuffer){for(let Ee=0;Ee<j.locationSize;Ee++)u(j.location+Ee,Y.meshPerAttribute);L.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Ee=0;Ee<j.locationSize;Ee++)m(j.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let Ee=0;Ee<j.locationSize;Ee++)S(j.location+Ee,oe/j.locationSize,He,re,he*U,(we+oe/j.locationSize*Ee)*U,J)}else{if(ne.isInstancedBufferAttribute){for(let Y=0;Y<j.locationSize;Y++)u(j.location+Y,ne.meshPerAttribute);L.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Y=0;Y<j.locationSize;Y++)m(j.location+Y);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let Y=0;Y<j.locationSize;Y++)S(j.location+Y,oe/j.locationSize,He,re,oe*U,oe/j.locationSize*Y*U,J)}}else if(V!==void 0){const re=V[D];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(j.location,re);break;case 3:t.vertexAttrib3fv(j.location,re);break;case 4:t.vertexAttrib4fv(j.location,re);break;default:t.vertexAttrib1fv(j.location,re)}}}}g()}function T(){C();for(const L in i){const B=i[L];for(const q in B){const ee=B[q];for(const z in ee){const K=ee[z];for(const V in K)h(K[V].object),delete K[V];delete ee[z]}}delete i[L]}}function A(L){if(i[L.id]===void 0)return;const B=i[L.id];for(const q in B){const ee=B[q];for(const z in ee){const K=ee[z];for(const V in K)h(K[V].object),delete K[V];delete ee[z]}}delete i[L.id]}function b(L){for(const B in i){const q=i[B];for(const ee in q){const z=q[ee];if(z[L.id]===void 0)continue;const K=z[L.id];for(const V in K)h(K[V].object),delete K[V];delete z[L.id]}}}function x(L){for(const B in i){const q=i[B],ee=L.isInstancedMesh===!0?L.id:0,z=q[ee];if(z!==void 0){for(const K in z){const V=z[K];for(const D in V)h(V[D].object),delete V[D];delete z[K]}delete q[ee],Object.keys(q).length===0&&delete i[B]}}}function C(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:b,initAttributes:E,enableAttribute:m,disableUnusedAttributes:g}}function HT(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function GT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==Zn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const x=b===Oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Tn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==di&&!x)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(De("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:S,maxFragmentUniforms:M,maxSamples:T,samples:A}}function WT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Pr,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=h(f,d,0)},this.setState=function(f,d,p){const v=f.clippingPlanes,E=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!r||v===null||v.length===0||s&&!m)s?h(null):c();else{const g=s?0:i,S=g*4;let M=u.clippingState||null;l.value=M,M=h(v,d,S,p);for(let T=0;T!==S;++T)M[T]=n[T];u.clippingState=M,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,p,v){const E=f!==null?f.length:0;let m=null;if(E!==0){if(m=l.value,v!==!0||m===null){const u=p+E*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let S=0,M=p;S!==E;++S,M+=4)a.copy(f[S]).applyMatrix4(g,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}const rr=4,i0=[.125,.215,.35,.446,.526,.582],Nr=20,XT=256,ya=new Gh,r0=new Ge;let Uu=null,Fu=0,Ou=0,ku=!1;const jT=new k;class s0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=jT}=s;Uu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel(),ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=l0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Uu,Fu,Ou),this._renderer.xr.enabled=ku,e.scissorTest=!1,_s(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xr||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel(),ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Oi,format:Zn,colorSpace:nc,depthBuffer:!1},r=a0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=a0(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=YT(s)),this._blurMaterial=qT(s,e,n),this._ggxMaterial=$T(s,e,n)}return r}_compileMaterial(e){const n=new an(new un,e);this._renderer.compile(n,ya)}_sceneToCubeUV(e,n,i,r,s){const l=new wn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(r0),f.toneMapping=mi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new an(new xo,new za({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,m=E.material;let u=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,u=!0):(m.color.copy(r0),u=!0);for(let S=0;S<6;S++){const M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[S],s.y,s.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[S]));const T=this._cubeSize;_s(r,M*T,S>2?T:0,T,T),f.setRenderTarget(r),u&&f.render(E,l),f.render(e,l)}f.toneMapping=p,f.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xr||e.mapping===Ks;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=l0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=o0());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;_s(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ya)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),d=0+c*1.25,p=f*d,{_lodMax:v}=this,E=this._sizeLods[i],m=3*E*(i>v-rr?i-v+rr:0),u=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-n,_s(s,m,u,3*E,2*E),r.setRenderTarget(s),r.render(o,ya),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,_s(e,m,u,3*E,2*E),r.setRenderTarget(e),r.render(o,ya)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&$e("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Nr-1),E=s/v,m=isFinite(s)?1+Math.floor(h*E):Nr;m>Nr&&De(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Nr}`);const u=[];let g=0;for(let b=0;b<Nr;++b){const x=b/E,C=Math.exp(-x*x/2);u.push(C),b===0?g+=C:b<m&&(g+=2*C)}for(let b=0;b<u.length;b++)u[b]=u[b]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=v,d.mipInt.value=S-i;const M=this._sizeLods[r],T=3*M*(r>S-rr?r-S+rr:0),A=4*(this._cubeSize-M);_s(n,T,A,3*M,2*M),l.setRenderTarget(n),l.render(f,ya)}}function YT(t){const e=[],n=[],i=[];let r=t;const s=t-rr+1+i0.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-rr?l=i0[a-t+rr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,v=6,E=3,m=2,u=1,g=new Float32Array(E*v*p),S=new Float32Array(m*v*p),M=new Float32Array(u*v*p);for(let A=0;A<p;A++){const b=A%3*2/3-1,x=A>2?0:-1,C=[b,x,0,b+2/3,x,0,b+2/3,x+1,0,b,x,0,b+2/3,x+1,0,b,x+1,0];g.set(C,E*v*A),S.set(d,m*v*A);const P=[A,A,A,A,A,A];M.set(P,u*v*A)}const T=new un;T.setAttribute("position",new Cn(g,E)),T.setAttribute("uv",new Cn(S,m)),T.setAttribute("faceIndex",new Cn(M,u)),i.push(new an(T,null)),r>rr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function a0(t,e,n){const i=new gi(t,e,n);return i.texture.mapping=bc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _s(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function $T(t,e,n){return new Vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:XT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function qT(t,e,n){const i=new Float32Array(Nr),r=new k(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function o0(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function l0(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Pc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class bx extends gi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new yx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new xo(5,5,5),s=new Vn({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Pi});s.uniforms.tEquirect.value=n;const a=new an(r,s),o=n.minFilter;return n.minFilter===Fr&&(n.minFilter=Qt),new eE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function KT(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?a(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===ou||p===lu)if(e.has(d)){const v=e.get(d).texture;return o(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const E=new bx(v.height);return E.fromEquirectangularTexture(t,d),e.set(d,E),d.addEventListener("dispose",c),o(E.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const p=d.mapping,v=p===ou||p===lu,E=p===Xr||p===Ks;if(v||E){let m=n.get(d);const u=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new s0(t)),m=v?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const g=d.image;return v&&g&&g.height>0||E&&g&&l(g)?(i===null&&(i=new s0(t)),m=v?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,p){return p===ou?d.mapping=Xr:p===lu&&(d.mapping=Ks),d}function l(d){let p=0;const v=6;for(let E=0;E<v;E++)d[E]!==void 0&&p++;return p===v}function c(d){const p=d.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function h(d){const p=d.target;p.removeEventListener("dispose",h);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function ZT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&zs("WebGLRenderer: "+i+" extension not supported."),r}}}function JT(t,e,n,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,v=f.attributes.position;let E=0;if(v===void 0)return;if(p!==null){const g=p.array;E=p.version;for(let S=0,M=g.length;S<M;S+=3){const T=g[S+0],A=g[S+1],b=g[S+2];d.push(T,A,A,b,b,T)}}else{const g=v.array;E=v.version;for(let S=0,M=g.length/3-1;S<M;S+=3){const T=S+0,A=S+1,b=S+2;d.push(T,A,A,b,b,T)}}const m=new(v.count>=65535?vx:gx)(d,1);m.version=E;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function h(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function QT(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){t.drawElements(i,d,s,f*a),n.update(d,i,1)}function c(f,d,p){p!==0&&(t.drawElementsInstanced(i,d,s,f*a,p),n.update(d,i,p))}function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,p);let E=0;for(let m=0;m<p;m++)E+=d[m];n.update(E,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function e2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function t2(t,e,n){const i=new WeakMap,r=new vt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let P=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var p=P;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let M=0;v===!0&&(M=1),E===!0&&(M=2),m===!0&&(M=3);let T=o.attributes.position.count*M,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const b=new Float32Array(T*A*4*f),x=new hx(b,T,A,f);x.type=di,x.needsUpdate=!0;const C=M*4;for(let L=0;L<f;L++){const B=u[L],q=g[L],ee=S[L],z=T*A*4*L;for(let K=0;K<B.count;K++){const V=K*C;v===!0&&(r.fromBufferAttribute(B,K),b[z+V+0]=r.x,b[z+V+1]=r.y,b[z+V+2]=r.z,b[z+V+3]=0),E===!0&&(r.fromBufferAttribute(q,K),b[z+V+4]=r.x,b[z+V+5]=r.y,b[z+V+6]=r.z,b[z+V+7]=0),m===!0&&(r.fromBufferAttribute(ee,K),b[z+V+8]=r.x,b[z+V+9]=r.y,b[z+V+10]=r.z,b[z+V+11]=ee.itemSize===4?r.w:1)}}d={count:f,texture:x,size:new ke(T,A)},i.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const E=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function n2(t,e,n,i,r){let s=new WeakMap;function a(c){const h=r.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return d}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const i2={[Jv]:"LINEAR_TONE_MAPPING",[Qv]:"REINHARD_TONE_MAPPING",[ex]:"CINEON_TONE_MAPPING",[Rh]:"ACES_FILMIC_TONE_MAPPING",[nx]:"AGX_TONE_MAPPING",[ix]:"NEUTRAL_TONE_MAPPING",[tx]:"CUSTOM_TONE_MAPPING"};function r2(t,e,n,i,r,s){const a=new gi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Zs(e,n):void 0}),o=new gi(e,n,{type:Oi,depthBuffer:!1,stencilBuffer:!1}),l=new un;l.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new cn([0,2,0,0,2,0],2));const c=new XM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new an(l,c),f=new Gh(-1,1,1,-1,0,1);let d=null,p=null,v=!1,E,m=null,u=[],g=!1;this.setSize=function(S,M){a.setSize(S,M),o.setSize(S,M);for(let T=0;T<u.length;T++){const A=u[T];A.setSize&&A.setSize(S,M)}},this.setEffects=function(S){u=S,g=u.length>0&&u[0].isRenderPass===!0;const M=a.width,T=a.height;for(let A=0;A<u.length;A++){const b=u[A];b.setSize&&b.setSize(M,T)}},this.begin=function(S,M){if(v||S.toneMapping===mi&&u.length===0)return!1;if(m=M,M!==null){const T=M.width,A=M.height;(a.width!==T||a.height!==A)&&this.setSize(T,A)}return g===!1&&S.setRenderTarget(a),E=S.toneMapping,S.toneMapping=mi,!0},this.hasRenderPass=function(){return g},this.end=function(S,M){S.toneMapping=E,v=!0;let T=a,A=o;for(let b=0;b<u.length;b++){const x=u[b];if(x.enabled!==!1&&(x.render(S,A,T,M),x.needsSwap!==!1)){const C=T;T=A,A=C}}if(d!==S.outputColorSpace||p!==S.toneMapping){d=S.outputColorSpace,p=S.toneMapping,c.defines={},je.getTransfer(d)===tt&&(c.defines.SRGB_TRANSFER="");const b=i2[p];b&&(c.defines[b]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(m),S.render(h,f),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Cx=new en,Rf=new Zs(1,1),Rx=new hx,Px=new SM,Lx=new yx,c0=[],u0=[],d0=new Float32Array(16),f0=new Float32Array(9),h0=new Float32Array(4);function ra(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=c0[r];if(s===void 0&&(s=new Float32Array(r),c0[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Lc(t,e){let n=u0[e];n===void 0&&(n=new Int32Array(e),u0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function s2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function a2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function o2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function l2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function c2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;h0.set(i),t.uniformMatrix2fv(this.addr,!1,h0),Ot(n,i)}}function u2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;f0.set(i),t.uniformMatrix3fv(this.addr,!1,f0),Ot(n,i)}}function d2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;d0.set(i),t.uniformMatrix4fv(this.addr,!1,d0),Ot(n,i)}}function f2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function h2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function p2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function m2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function g2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function v2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function x2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function _2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function y2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Rf.compareFunction=n.isReversedDepthBuffer()?Oh:Fh,s=Rf):s=Cx,n.setTexture2D(e||s,r)}function S2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Px,r)}function M2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Lx,r)}function E2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Rx,r)}function w2(t){switch(t){case 5126:return s2;case 35664:return a2;case 35665:return o2;case 35666:return l2;case 35674:return c2;case 35675:return u2;case 35676:return d2;case 5124:case 35670:return f2;case 35667:case 35671:return h2;case 35668:case 35672:return p2;case 35669:case 35673:return m2;case 5125:return g2;case 36294:return v2;case 36295:return x2;case 36296:return _2;case 35678:case 36198:case 36298:case 36306:case 35682:return y2;case 35679:case 36299:case 36307:return S2;case 35680:case 36300:case 36308:case 36293:return M2;case 36289:case 36303:case 36311:case 36292:return E2}}function T2(t,e){t.uniform1fv(this.addr,e)}function A2(t,e){const n=ra(e,this.size,2);t.uniform2fv(this.addr,n)}function b2(t,e){const n=ra(e,this.size,3);t.uniform3fv(this.addr,n)}function C2(t,e){const n=ra(e,this.size,4);t.uniform4fv(this.addr,n)}function R2(t,e){const n=ra(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function P2(t,e){const n=ra(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function L2(t,e){const n=ra(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function N2(t,e){t.uniform1iv(this.addr,e)}function D2(t,e){t.uniform2iv(this.addr,e)}function I2(t,e){t.uniform3iv(this.addr,e)}function U2(t,e){t.uniform4iv(this.addr,e)}function F2(t,e){t.uniform1uiv(this.addr,e)}function O2(t,e){t.uniform2uiv(this.addr,e)}function k2(t,e){t.uniform3uiv(this.addr,e)}function B2(t,e){t.uniform4uiv(this.addr,e)}function z2(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Rf:a=Cx;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function V2(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Px,s[a])}function H2(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Lx,s[a])}function G2(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Rx,s[a])}function W2(t){switch(t){case 5126:return T2;case 35664:return A2;case 35665:return b2;case 35666:return C2;case 35674:return R2;case 35675:return P2;case 35676:return L2;case 5124:case 35670:return N2;case 35667:case 35671:return D2;case 35668:case 35672:return I2;case 35669:case 35673:return U2;case 5125:return F2;case 36294:return O2;case 36295:return k2;case 36296:return B2;case 35678:case 36198:case 36298:case 36306:case 35682:return z2;case 35679:case 36299:case 36307:return V2;case 35680:case 36300:case 36308:case 36293:return H2;case 36289:case 36303:case 36311:case 36292:return G2}}class X2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=w2(n.type)}}class j2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=W2(n.type)}}class Y2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Bu=/(\w+)(\])?(\[|\.)?/g;function p0(t,e){t.seq.push(e),t.map[e.id]=e}function $2(t,e,n){const i=t.name,r=i.length;for(Bu.lastIndex=0;;){const s=Bu.exec(i),a=Bu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){p0(n,c===void 0?new X2(o,t,e):new j2(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new Y2(o),p0(n,f)),n=f}}}class Cl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);$2(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function m0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const q2=37297;let K2=0;function Z2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const g0=new Ie;function J2(t){je._getMatrix(g0,je.workingColorSpace,t);const e=`mat3( ${g0.elements.map(n=>n.toFixed(4))} )`;switch(je.getTransfer(t)){case ic:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function v0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Z2(t.getShaderSource(e),o)}else return s}function Q2(t,e){const n=J2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const eA={[Jv]:"Linear",[Qv]:"Reinhard",[ex]:"Cineon",[Rh]:"ACESFilmic",[nx]:"AgX",[ix]:"Neutral",[tx]:"Custom"};function tA(t,e){const n=eA[e];return n===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ul=new k;function nA(){je.getLuminanceCoefficients(ul);const t=ul.x.toFixed(4),e=ul.y.toFixed(4),n=ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function rA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function sA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ca(t){return t!==""}function x0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pf(t){return t.replace(aA,lA)}const oA=new Map;function lA(t,e){let n=ze[e];if(n===void 0){const i=oA.get(e);if(i!==void 0)n=ze[i],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Pf(n)}const cA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function y0(t){return t.replace(cA,uA)}function uA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function S0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const dA={[El]:"SHADOWMAP_TYPE_PCF",[Aa]:"SHADOWMAP_TYPE_VSM"};function fA(t){return dA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const hA={[Xr]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE",[bc]:"ENVMAP_TYPE_CUBE_UV"};function pA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":hA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const mA={[Ks]:"ENVMAP_MODE_REFRACTION"};function gA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":mA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vA={[Zv]:"ENVMAP_BLENDING_MULTIPLY",[B1]:"ENVMAP_BLENDING_MIX",[z1]:"ENVMAP_BLENDING_ADD"};function xA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":vA[t.combine]||"ENVMAP_BLENDING_NONE"}function _A(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function yA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=fA(n),c=pA(n),h=gA(n),f=xA(n),d=_A(n),p=iA(n),v=rA(s),E=r.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ca).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ca).join(`
`),u.length>0&&(u+=`
`)):(m=[S0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),u=[S0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mi?"#define TONE_MAPPING":"",n.toneMapping!==mi?ze.tonemapping_pars_fragment:"",n.toneMapping!==mi?tA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Q2("linearToOutputTexel",n.outputColorSpace),nA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ca).join(`
`)),a=Pf(a),a=x0(a,n),a=_0(a,n),o=Pf(o),o=x0(o,n),o=_0(o,n),a=y0(a),o=y0(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Am?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Am?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=g+m+a,M=g+u+o,T=m0(r,r.VERTEX_SHADER,S),A=m0(r,r.FRAGMENT_SHADER,M);r.attachShader(E,T),r.attachShader(E,A),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function b(L){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(E)||"",q=r.getShaderInfoLog(T)||"",ee=r.getShaderInfoLog(A)||"",z=B.trim(),K=q.trim(),V=ee.trim();let D=!0,j=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(D=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,T,A);else{const ne=v0(r,T,"vertex"),re=v0(r,A,"fragment");$e("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+ne+`
`+re)}else z!==""?De("WebGLProgram: Program Info Log:",z):(K===""||V==="")&&(j=!1);j&&(L.diagnostics={runnable:D,programLog:z,vertexShader:{log:K,prefix:m},fragmentShader:{log:V,prefix:u}})}r.deleteShader(T),r.deleteShader(A),x=new Cl(r,E),C=sA(r,E)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let C;this.getAttributes=function(){return C===void 0&&b(this),C};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(E,q2)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=K2++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=T,this.fragmentShader=A,this}let SA=0;class MA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new EA(e),n.set(e,i)),i}}class EA{constructor(e){this.id=SA++,this.code=e,this.usedTimes=0}}function wA(t){return t===jr||t===ec||t===tc}function TA(t,e,n,i,r,s){const a=new px,o=new MA,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function E(x,C,P,L,B,q){const ee=L.fog,z=B.geometry,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,D=e.get(x.envMap||K,V),j=D&&D.mapping===bc?D.image.height:null,ne=p[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&De("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const re=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,oe=re!==void 0?re.length:0;let Be=0;z.morphAttributes.position!==void 0&&(Be=1),z.morphAttributes.normal!==void 0&&(Be=2),z.morphAttributes.color!==void 0&&(Be=3);let qe,He,U,J;if(ne){const Te=ci[ne];qe=Te.vertexShader,He=Te.fragmentShader}else{qe=x.vertexShader,He=x.fragmentShader;const Te=o.getVertexShaderStage(x),St=o.getFragmentShaderStage(x);o.update(x,Te,St),U=Te.id,J=St.id}const Y=t.getRenderTarget(),he=t.state.buffers.depth.getReversed(),we=B.isInstancedMesh===!0,Ee=B.isBatchedMesh===!0,Ye=!!x.map,Ue=!!x.matcap,st=!!D,Qe=!!x.aoMap,Ke=!!x.lightMap,bt=!!x.bumpMap&&x.wireframe===!1,Nt=!!x.normalMap,kt=!!x.displacementMap,Ht=!!x.emissiveMap,yt=!!x.metalnessMap,Ct=!!x.roughnessMap,I=x.anisotropy>0,hn=x.clearcoat>0,et=x.dispersion>0,R=x.iridescence>0,_=x.sheen>0,O=x.transmission>0,W=I&&!!x.anisotropyMap,$=hn&&!!x.clearcoatMap,ae=hn&&!!x.clearcoatNormalMap,ce=hn&&!!x.clearcoatRoughnessMap,Z=R&&!!x.iridescenceMap,te=R&&!!x.iridescenceThicknessMap,ue=_&&!!x.sheenColorMap,Ce=_&&!!x.sheenRoughnessMap,pe=!!x.specularMap,de=!!x.specularColorMap,Le=!!x.specularIntensityMap,Ne=O&&!!x.transmissionMap,Fe=O&&!!x.thicknessMap,N=!!x.gradientMap,le=!!x.alphaMap,Q=x.alphaTest>0,fe=!!x.alphaHash,xe=!!x.extensions;let ie=mi;x.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ie=t.toneMapping);const be={shaderID:ne,shaderType:x.type,shaderName:x.name,vertexShader:qe,fragmentShader:He,defines:x.defines,customVertexShaderID:U,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ee,batchingColor:Ee&&B._colorsTexture!==null,instancing:we,instancingColor:we&&B.instanceColor!==null,instancingMorph:we&&B.morphTexture!==null,outputColorSpace:Y===null?t.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ye,matcap:Ue,envMap:st,envMapMode:st&&D.mapping,envMapCubeUVHeight:j,aoMap:Qe,lightMap:Ke,bumpMap:bt,normalMap:Nt,displacementMap:kt,emissiveMap:Ht,normalMapObjectSpace:Nt&&x.normalMapType===G1,normalMapTangentSpace:Nt&&x.normalMapType===wf,packedNormalMap:Nt&&x.normalMapType===wf&&wA(x.normalMap.format),metalnessMap:yt,roughnessMap:Ct,anisotropy:I,anisotropyMap:W,clearcoat:hn,clearcoatMap:$,clearcoatNormalMap:ae,clearcoatRoughnessMap:ce,dispersion:et,iridescence:R,iridescenceMap:Z,iridescenceThicknessMap:te,sheen:_,sheenColorMap:ue,sheenRoughnessMap:Ce,specularMap:pe,specularColorMap:de,specularIntensityMap:Le,transmission:O,transmissionMap:Ne,thicknessMap:Fe,gradientMap:N,opaque:x.transparent===!1&&x.blending===Bs&&x.alphaToCoverage===!1,alphaMap:le,alphaTest:Q,alphaHash:fe,combine:x.combine,mapUv:Ye&&v(x.map.channel),aoMapUv:Qe&&v(x.aoMap.channel),lightMapUv:Ke&&v(x.lightMap.channel),bumpMapUv:bt&&v(x.bumpMap.channel),normalMapUv:Nt&&v(x.normalMap.channel),displacementMapUv:kt&&v(x.displacementMap.channel),emissiveMapUv:Ht&&v(x.emissiveMap.channel),metalnessMapUv:yt&&v(x.metalnessMap.channel),roughnessMapUv:Ct&&v(x.roughnessMap.channel),anisotropyMapUv:W&&v(x.anisotropyMap.channel),clearcoatMapUv:$&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&v(x.sheenRoughnessMap.channel),specularMapUv:pe&&v(x.specularMap.channel),specularColorMapUv:de&&v(x.specularColorMap.channel),specularIntensityMapUv:Le&&v(x.specularIntensityMap.channel),transmissionMapUv:Ne&&v(x.transmissionMap.channel),thicknessMapUv:Fe&&v(x.thicknessMap.channel),alphaMapUv:le&&v(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Nt||I),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&(Ye||le),fog:!!ee,useFog:x.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&Nt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:he,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Be,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:ie,decodeVideoTexture:Ye&&x.map.isVideoTexture===!0&&je.getTransfer(x.map.colorSpace)===tt,decodeVideoTextureEmissive:Ht&&x.emissiveMap.isVideoTexture===!0&&je.getTransfer(x.emissiveMap.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===qn,flipSided:x.side===ln,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&x.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function m(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)C.push(P),C.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(u(C,x),g(C,x),C.push(t.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function u(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function g(x,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function S(x){const C=p[x.type];let P;if(C){const L=ci[C];P=HM.clone(L.uniforms)}else P=x.uniforms;return P}function M(x,C){let P=h.get(C);return P!==void 0?++P.usedTimes:(P=new yA(t,C,x,r),c.push(P),h.set(C,P)),P}function T(x){if(--x.usedTimes===0){const C=c.indexOf(x);c[C]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function b(){o.dispose()}return{getParameters:E,getProgramCacheKey:m,getUniforms:S,acquireProgram:M,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:b}}function AA(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function bA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function M0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function E0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,v,E,m,u){let g=t[e];return g===void 0?(g={id:d.id,object:d,geometry:p,material:v,materialVariant:a(d),groupOrder:E,renderOrder:d.renderOrder,z:m,group:u},t[e]=g):(g.id=d.id,g.object=d,g.geometry=p,g.material=v,g.materialVariant=a(d),g.groupOrder=E,g.renderOrder=d.renderOrder,g.z=m,g.group=u),e++,g}function l(d,p,v,E,m,u){const g=o(d,p,v,E,m,u);v.transmission>0?i.push(g):v.transparent===!0?r.push(g):n.push(g)}function c(d,p,v,E,m,u){const g=o(d,p,v,E,m,u);v.transmission>0?i.unshift(g):v.transparent===!0?r.unshift(g):n.unshift(g)}function h(d,p,v){n.length>1&&n.sort(d||bA),i.length>1&&i.sort(p||M0),r.length>1&&r.sort(p||M0),v&&(n.reverse(),i.reverse(),r.reverse())}function f(){for(let d=e,p=t.length;d<p;d++){const v=t[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:h}}function CA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new E0,t.set(i,[a])):r>=s.length?(a=new E0,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function RA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Ge};break;case"SpotLight":n={position:new k,direction:new k,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function PA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let LA=0;function NA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function DA(t){const e=new RA,n=PA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new mt,a=new mt;function o(c){let h=0,f=0,d=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let p=0,v=0,E=0,m=0,u=0,g=0,S=0,M=0,T=0,A=0,b=0;c.sort(NA);for(let C=0,P=c.length;C<P;C++){const L=c[C],B=L.color,q=L.intensity,ee=L.distance;let z=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===jr?z=L.shadow.map.texture:z=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=B.r*q,f+=B.g*q,d+=B.b*q;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],q);b++}else if(L.isDirectionalLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const V=L.shadow,D=n.get(L);D.shadowIntensity=V.intensity,D.shadowBias=V.bias,D.shadowNormalBias=V.normalBias,D.shadowRadius=V.radius,D.shadowMapSize=V.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=L.shadow.matrix,g++}i.directional[p]=K,p++}else if(L.isSpotLight){const K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(B).multiplyScalar(q),K.distance=ee,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[E]=K;const V=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,V.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[E]=V.matrix,L.castShadow){const D=n.get(L);D.shadowIntensity=V.intensity,D.shadowBias=V.bias,D.shadowNormalBias=V.normalBias,D.shadowRadius=V.radius,D.shadowMapSize=V.mapSize,i.spotShadow[E]=D,i.spotShadowMap[E]=z,M++}E++}else if(L.isRectAreaLight){const K=e.get(L);K.color.copy(B).multiplyScalar(q),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=K,m++}else if(L.isPointLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){const V=L.shadow,D=n.get(L);D.shadowIntensity=V.intensity,D.shadowBias=V.bias,D.shadowNormalBias=V.normalBias,D.shadowRadius=V.radius,D.shadowMapSize=V.mapSize,D.shadowCameraNear=V.camera.near,D.shadowCameraFar=V.camera.far,i.pointShadow[v]=D,i.pointShadowMap[v]=z,i.pointShadowMatrix[v]=L.shadow.matrix,S++}i.point[v]=K,v++}else if(L.isHemisphereLight){const K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(q),K.groundColor.copy(L.groundColor).multiplyScalar(q),i.hemi[u]=K,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==p||x.pointLength!==v||x.spotLength!==E||x.rectAreaLength!==m||x.hemiLength!==u||x.numDirectionalShadows!==g||x.numPointShadows!==S||x.numSpotShadows!==M||x.numSpotMaps!==T||x.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=m,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,x.directionalLength=p,x.pointLength=v,x.spotLength=E,x.rectAreaLength=m,x.hemiLength=u,x.numDirectionalShadows=g,x.numPointShadows=S,x.numSpotShadows=M,x.numSpotMaps=T,x.numLightProbes=b,i.version=LA++)}function l(c,h){let f=0,d=0,p=0,v=0,E=0;const m=h.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const S=c[u];if(S.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(S.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const M=i.hemi[E];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),E++}}}return{setup:o,setupView:l,state:i}}function w0(t){const e=new DA(t),n=[],i=[],r=[];function s(d){f.camera=d,n.length=0,i.length=0,r.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function h(d){e.setupView(n,d)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function IA(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new w0(t),e.set(r,[o])):s>=a.length?(o=new w0(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const UA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,OA=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],kA=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],T0=new mt,Sa=new k,zu=new k;function BA(t,e,n){let i=new Vh;const r=new ke,s=new ke,a=new vt,o=new YM,l=new $M,c={},h=n.maxTextureSize,f={[gr]:ln,[ln]:gr,[qn]:qn},d=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:UA,fragmentShader:FA}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new un;v.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new an(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=El;let u=this.type;this.render=function(A,b,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===y1&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=El);const C=t.getRenderTarget(),P=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Pi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const q=u!==this.type;q&&b.traverse(function(ee){ee.material&&(Array.isArray(ee.material)?ee.material.forEach(z=>z.needsUpdate=!0):ee.material.needsUpdate=!0)});for(let ee=0,z=A.length;ee<z;ee++){const K=A[ee],V=K.shadow;if(V===void 0){De("WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const D=V.getFrameExtents();r.multiply(D),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/D.x),r.x=s.x*D.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/D.y),r.y=s.y*D.y,V.mapSize.y=s.y));const j=t.state.buffers.depth.getReversed();if(V.camera._reversedDepth=j,V.map===null||q===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Aa){if(K.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new gi(r.x,r.y,{format:jr,type:Oi,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),V.map.texture.name=K.name+".shadowMap",V.map.depthTexture=new Zs(r.x,r.y,di),V.map.depthTexture.name=K.name+".shadowMapDepth",V.map.depthTexture.format=ki,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Wt,V.map.depthTexture.magFilter=Wt}else K.isPointLight?(V.map=new bx(r.x),V.map.depthTexture=new zM(r.x,vi)):(V.map=new gi(r.x,r.y),V.map.depthTexture=new Zs(r.x,r.y,vi)),V.map.depthTexture.name=K.name+".shadowMap",V.map.depthTexture.format=ki,this.type===El?(V.map.depthTexture.compareFunction=j?Oh:Fh,V.map.depthTexture.minFilter=Qt,V.map.depthTexture.magFilter=Qt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Wt,V.map.depthTexture.magFilter=Wt);V.camera.updateProjectionMatrix()}const ne=V.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<ne;re++){if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,re),t.clear();else{re===0&&(t.setRenderTarget(V.map),t.clear());const oe=V.getViewport(re);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),B.viewport(a)}if(K.isPointLight){const oe=V.camera,Be=V.matrix,qe=K.distance||oe.far;qe!==oe.far&&(oe.far=qe,oe.updateProjectionMatrix()),Sa.setFromMatrixPosition(K.matrixWorld),oe.position.copy(Sa),zu.copy(oe.position),zu.add(OA[re]),oe.up.copy(kA[re]),oe.lookAt(zu),oe.updateMatrixWorld(),Be.makeTranslation(-Sa.x,-Sa.y,-Sa.z),T0.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),V._frustum.setFromProjectionMatrix(T0,oe.coordinateSystem,oe.reversedDepth)}else V.updateMatrices(K);i=V.getFrustum(),M(b,x,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===Aa&&g(V,x),V.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(C,P,L)};function g(A,b){const x=e.update(E);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new gi(r.x,r.y,{format:jr,type:Oi})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(b,null,x,d,E,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(b,null,x,p,E,null)}function S(A,b,x,C){let P=null;const L=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)P=L;else if(P=x.isPointLight===!0?l:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const B=P.uuid,q=b.uuid;let ee=c[B];ee===void 0&&(ee={},c[B]=ee);let z=ee[q];z===void 0&&(z=P.clone(),ee[q]=z,b.addEventListener("dispose",T)),P=z}if(P.visible=b.visible,P.wireframe=b.wireframe,C===Aa?P.side=b.shadowSide!==null?b.shadowSide:b.side:P.side=b.shadowSide!==null?b.shadowSide:f[b.side],P.alphaMap=b.alphaMap,P.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,P.map=b.map,P.clipShadows=b.clipShadows,P.clippingPlanes=b.clippingPlanes,P.clipIntersection=b.clipIntersection,P.displacementMap=b.displacementMap,P.displacementScale=b.displacementScale,P.displacementBias=b.displacementBias,P.wireframeLinewidth=b.wireframeLinewidth,P.linewidth=b.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const B=t.properties.get(P);B.light=x}return P}function M(A,b,x,C,P){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&P===Aa)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);const q=e.update(A),ee=A.material;if(Array.isArray(ee)){const z=q.groups;for(let K=0,V=z.length;K<V;K++){const D=z[K],j=ee[D.materialIndex];if(j&&j.visible){const ne=S(A,j,C,P);A.onBeforeShadow(t,A,b,x,q,ne,D),t.renderBufferDirect(x,null,q,ne,A,D),A.onAfterShadow(t,A,b,x,q,ne,D)}}}else if(ee.visible){const z=S(A,ee,C,P);A.onBeforeShadow(t,A,b,x,q,z,null),t.renderBufferDirect(x,null,q,z,A,null),A.onAfterShadow(t,A,b,x,q,z,null)}}const B=A.children;for(let q=0,ee=B.length;q<ee;q++)M(B[q],b,x,C,P)}function T(A){A.target.removeEventListener("dispose",T);for(const x in c){const C=c[x],P=A.target.uuid;P in C&&(C[P].dispose(),delete C[P])}}}function zA(t,e){function n(){let N=!1;const le=new vt;let Q=null;const fe=new vt(0,0,0,0);return{setMask:function(xe){Q!==xe&&!N&&(t.colorMask(xe,xe,xe,xe),Q=xe)},setLocked:function(xe){N=xe},setClear:function(xe,ie,be,Te,St){St===!0&&(xe*=Te,ie*=Te,be*=Te),le.set(xe,ie,be,Te),fe.equals(le)===!1&&(t.clearColor(xe,ie,be,Te),fe.copy(le))},reset:function(){N=!1,Q=null,fe.set(-1,0,0,0)}}}function i(){let N=!1,le=!1,Q=null,fe=null,xe=null;return{setReversed:function(ie){if(le!==ie){const be=e.get("EXT_clip_control");ie?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),le=ie;const Te=xe;xe=null,this.setClear(Te)}},getReversed:function(){return le},setTest:function(ie){ie?Y(t.DEPTH_TEST):he(t.DEPTH_TEST)},setMask:function(ie){Q!==ie&&!N&&(t.depthMask(ie),Q=ie)},setFunc:function(ie){if(le&&(ie=Q1[ie]),fe!==ie){switch(ie){case kd:t.depthFunc(t.NEVER);break;case Bd:t.depthFunc(t.ALWAYS);break;case zd:t.depthFunc(t.LESS);break;case qs:t.depthFunc(t.LEQUAL);break;case Vd:t.depthFunc(t.EQUAL);break;case Hd:t.depthFunc(t.GEQUAL);break;case Gd:t.depthFunc(t.GREATER);break;case Wd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=ie}},setLocked:function(ie){N=ie},setClear:function(ie){xe!==ie&&(xe=ie,le&&(ie=1-ie),t.clearDepth(ie))},reset:function(){N=!1,Q=null,fe=null,xe=null,le=!1}}}function r(){let N=!1,le=null,Q=null,fe=null,xe=null,ie=null,be=null,Te=null,St=null;return{setTest:function(lt){N||(lt?Y(t.STENCIL_TEST):he(t.STENCIL_TEST))},setMask:function(lt){le!==lt&&!N&&(t.stencilMask(lt),le=lt)},setFunc:function(lt,ti,ni){(Q!==lt||fe!==ti||xe!==ni)&&(t.stencilFunc(lt,ti,ni),Q=lt,fe=ti,xe=ni)},setOp:function(lt,ti,ni){(ie!==lt||be!==ti||Te!==ni)&&(t.stencilOp(lt,ti,ni),ie=lt,be=ti,Te=ni)},setLocked:function(lt){N=lt},setClear:function(lt){St!==lt&&(t.clearStencil(lt),St=lt)},reset:function(){N=!1,le=null,Q=null,fe=null,xe=null,ie=null,be=null,Te=null,St=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},f={},d={},p=new WeakMap,v=[],E=null,m=!1,u=null,g=null,S=null,M=null,T=null,A=null,b=null,x=new Ge(0,0,0),C=0,P=!1,L=null,B=null,q=null,ee=null,z=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,D=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(j)[1]),V=D>=1):j.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),V=D>=2);let ne=null,re={};const oe=t.getParameter(t.SCISSOR_BOX),Be=t.getParameter(t.VIEWPORT),qe=new vt().fromArray(oe),He=new vt().fromArray(Be);function U(N,le,Q,fe){const xe=new Uint8Array(4),ie=t.createTexture();t.bindTexture(N,ie),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<Q;be++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(le+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return ie}const J={};J[t.TEXTURE_2D]=U(t.TEXTURE_2D,t.TEXTURE_2D,1),J[t.TEXTURE_CUBE_MAP]=U(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[t.TEXTURE_2D_ARRAY]=U(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),J[t.TEXTURE_3D]=U(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(t.DEPTH_TEST),a.setFunc(qs),bt(!1),Nt(Mm),Y(t.CULL_FACE),Qe(Pi);function Y(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function he(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function we(N,le){return d[N]!==le?(t.bindFramebuffer(N,le),d[N]=le,N===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=le),N===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=le),!0):!1}function Ee(N,le){let Q=v,fe=!1;if(N){Q=p.get(le),Q===void 0&&(Q=[],p.set(le,Q));const xe=N.textures;if(Q.length!==xe.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,be=xe.length;ie<be;ie++)Q[ie]=t.COLOR_ATTACHMENT0+ie;Q.length=xe.length,fe=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,fe=!0);fe&&t.drawBuffers(Q)}function Ye(N){return E!==N?(t.useProgram(N),E=N,!0):!1}const Ue={[Lr]:t.FUNC_ADD,[M1]:t.FUNC_SUBTRACT,[E1]:t.FUNC_REVERSE_SUBTRACT};Ue[w1]=t.MIN,Ue[T1]=t.MAX;const st={[A1]:t.ZERO,[b1]:t.ONE,[C1]:t.SRC_COLOR,[Fd]:t.SRC_ALPHA,[I1]:t.SRC_ALPHA_SATURATE,[N1]:t.DST_COLOR,[P1]:t.DST_ALPHA,[R1]:t.ONE_MINUS_SRC_COLOR,[Od]:t.ONE_MINUS_SRC_ALPHA,[D1]:t.ONE_MINUS_DST_COLOR,[L1]:t.ONE_MINUS_DST_ALPHA,[U1]:t.CONSTANT_COLOR,[F1]:t.ONE_MINUS_CONSTANT_COLOR,[O1]:t.CONSTANT_ALPHA,[k1]:t.ONE_MINUS_CONSTANT_ALPHA};function Qe(N,le,Q,fe,xe,ie,be,Te,St,lt){if(N===Pi){m===!0&&(he(t.BLEND),m=!1);return}if(m===!1&&(Y(t.BLEND),m=!0),N!==S1){if(N!==u||lt!==P){if((g!==Lr||T!==Lr)&&(t.blendEquation(t.FUNC_ADD),g=Lr,T=Lr),lt)switch(N){case Bs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wi:t.blendFunc(t.ONE,t.ONE);break;case Em:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case wm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:$e("WebGLState: Invalid blending: ",N);break}else switch(N){case Bs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wi:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Em:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wm:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",N);break}S=null,M=null,A=null,b=null,x.set(0,0,0),C=0,u=N,P=lt}return}xe=xe||le,ie=ie||Q,be=be||fe,(le!==g||xe!==T)&&(t.blendEquationSeparate(Ue[le],Ue[xe]),g=le,T=xe),(Q!==S||fe!==M||ie!==A||be!==b)&&(t.blendFuncSeparate(st[Q],st[fe],st[ie],st[be]),S=Q,M=fe,A=ie,b=be),(Te.equals(x)===!1||St!==C)&&(t.blendColor(Te.r,Te.g,Te.b,St),x.copy(Te),C=St),u=N,P=!1}function Ke(N,le){N.side===qn?he(t.CULL_FACE):Y(t.CULL_FACE);let Q=N.side===ln;le&&(Q=!Q),bt(Q),N.blending===Bs&&N.transparent===!1?Qe(Pi):Qe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const fe=N.stencilWrite;o.setTest(fe),fe&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ht(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Y(t.SAMPLE_ALPHA_TO_COVERAGE):he(t.SAMPLE_ALPHA_TO_COVERAGE)}function bt(N){L!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),L=N)}function Nt(N){N!==x1?(Y(t.CULL_FACE),N!==B&&(N===Mm?t.cullFace(t.BACK):N===_1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):he(t.CULL_FACE),B=N}function kt(N){N!==q&&(V&&t.lineWidth(N),q=N)}function Ht(N,le,Q){N?(Y(t.POLYGON_OFFSET_FILL),(ee!==le||z!==Q)&&(ee=le,z=Q,a.getReversed()&&(le=-le),t.polygonOffset(le,Q))):he(t.POLYGON_OFFSET_FILL)}function yt(N){N?Y(t.SCISSOR_TEST):he(t.SCISSOR_TEST)}function Ct(N){N===void 0&&(N=t.TEXTURE0+K-1),ne!==N&&(t.activeTexture(N),ne=N)}function I(N,le,Q){Q===void 0&&(ne===null?Q=t.TEXTURE0+K-1:Q=ne);let fe=re[Q];fe===void 0&&(fe={type:void 0,texture:void 0},re[Q]=fe),(fe.type!==N||fe.texture!==le)&&(ne!==Q&&(t.activeTexture(Q),ne=Q),t.bindTexture(N,le||J[N]),fe.type=N,fe.texture=le)}function hn(){const N=re[ne];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function et(){try{t.compressedTexImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function _(){try{t.texSubImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function O(){try{t.texSubImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function $(){try{t.compressedTexSubImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function ae(){try{t.texStorage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function ce(){try{t.texStorage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function Z(){try{t.texImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function te(){try{t.texImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function ue(N){return f[N]!==void 0?f[N]:t.getParameter(N)}function Ce(N,le){f[N]!==le&&(t.pixelStorei(N,le),f[N]=le)}function pe(N){qe.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),qe.copy(N))}function de(N){He.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),He.copy(N))}function Le(N,le){let Q=c.get(le);Q===void 0&&(Q=new WeakMap,c.set(le,Q));let fe=Q.get(N);fe===void 0&&(fe=t.getUniformBlockIndex(le,N.name),Q.set(N,fe))}function Ne(N,le){const fe=c.get(le).get(N);l.get(le)!==fe&&(t.uniformBlockBinding(le,fe,N.__bindingPointIndex),l.set(le,fe))}function Fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},f={},ne=null,re={},d={},p=new WeakMap,v=[],E=null,m=!1,u=null,g=null,S=null,M=null,T=null,A=null,b=null,x=new Ge(0,0,0),C=0,P=!1,L=null,B=null,q=null,ee=null,z=null,qe.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Y,disable:he,bindFramebuffer:we,drawBuffers:Ee,useProgram:Ye,setBlending:Qe,setMaterial:Ke,setFlipSided:bt,setCullFace:Nt,setLineWidth:kt,setPolygonOffset:Ht,setScissorTest:yt,activeTexture:Ct,bindTexture:I,unbindTexture:hn,compressedTexImage2D:et,compressedTexImage3D:R,texImage2D:Z,texImage3D:te,pixelStorei:Ce,getParameter:ue,updateUBOMapping:Le,uniformBlockBinding:Ne,texStorage2D:ae,texStorage3D:ce,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:W,compressedTexSubImage3D:$,scissor:pe,viewport:de,reset:Fe}}function VA(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,h=new WeakMap,f=new Set;let d;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,_){return v?new OffscreenCanvas(R,_):rc("canvas")}function m(R,_,O){let W=1;const $=et(R);if(($.width>O||$.height>O)&&(W=O/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ae=Math.floor(W*$.width),ce=Math.floor(W*$.height);d===void 0&&(d=E(ae,ce));const Z=_?E(ae,ce):d;return Z.width=ae,Z.height=ce,Z.getContext("2d").drawImage(R,0,0,ae,ce),De("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ae+"x"+ce+")."),Z}else return"data"in R&&De("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function u(R){return R.generateMipmaps}function g(R){t.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(R,_,O,W,$,ae=!1){if(R!==null){if(t[R]!==void 0)return t[R];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ce;W&&(ce=e.get("EXT_texture_norm16"),ce||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=_;if(_===t.RED&&(O===t.FLOAT&&(Z=t.R32F),O===t.HALF_FLOAT&&(Z=t.R16F),O===t.UNSIGNED_BYTE&&(Z=t.R8),O===t.UNSIGNED_SHORT&&ce&&(Z=ce.R16_EXT),O===t.SHORT&&ce&&(Z=ce.R16_SNORM_EXT)),_===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.R8UI),O===t.UNSIGNED_SHORT&&(Z=t.R16UI),O===t.UNSIGNED_INT&&(Z=t.R32UI),O===t.BYTE&&(Z=t.R8I),O===t.SHORT&&(Z=t.R16I),O===t.INT&&(Z=t.R32I)),_===t.RG&&(O===t.FLOAT&&(Z=t.RG32F),O===t.HALF_FLOAT&&(Z=t.RG16F),O===t.UNSIGNED_BYTE&&(Z=t.RG8),O===t.UNSIGNED_SHORT&&ce&&(Z=ce.RG16_EXT),O===t.SHORT&&ce&&(Z=ce.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.RG8UI),O===t.UNSIGNED_SHORT&&(Z=t.RG16UI),O===t.UNSIGNED_INT&&(Z=t.RG32UI),O===t.BYTE&&(Z=t.RG8I),O===t.SHORT&&(Z=t.RG16I),O===t.INT&&(Z=t.RG32I)),_===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),O===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),O===t.UNSIGNED_INT&&(Z=t.RGB32UI),O===t.BYTE&&(Z=t.RGB8I),O===t.SHORT&&(Z=t.RGB16I),O===t.INT&&(Z=t.RGB32I)),_===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),O===t.UNSIGNED_INT&&(Z=t.RGBA32UI),O===t.BYTE&&(Z=t.RGBA8I),O===t.SHORT&&(Z=t.RGBA16I),O===t.INT&&(Z=t.RGBA32I)),_===t.RGB&&(O===t.UNSIGNED_SHORT&&ce&&(Z=ce.RGB16_EXT),O===t.SHORT&&ce&&(Z=ce.RGB16_SNORM_EXT),O===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),O===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),_===t.RGBA){const te=ae?ic:je.getTransfer($);O===t.FLOAT&&(Z=t.RGBA32F),O===t.HALF_FLOAT&&(Z=t.RGBA16F),O===t.UNSIGNED_BYTE&&(Z=te===tt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT&&ce&&(Z=ce.RGBA16_EXT),O===t.SHORT&&ce&&(Z=ce.RGBA16_SNORM_EXT),O===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function T(R,_){let O;return R?_===null||_===vi||_===oo?O=t.DEPTH24_STENCIL8:_===di?O=t.DEPTH32F_STENCIL8:_===ao&&(O=t.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===vi||_===oo?O=t.DEPTH_COMPONENT24:_===di?O=t.DEPTH_COMPONENT32F:_===ao&&(O=t.DEPTH_COMPONENT16),O}function A(R,_){return u(R)===!0||R.isFramebufferTexture&&R.minFilter!==Wt&&R.minFilter!==Qt?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function b(R){const _=R.target;_.removeEventListener("dispose",b),C(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&f.delete(_)}function x(R){const _=R.target;_.removeEventListener("dispose",x),L(_)}function C(R){const _=i.get(R);if(_.__webglInit===void 0)return;const O=R.source,W=p.get(O);if(W){const $=W[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&P(R),Object.keys(W).length===0&&p.delete(O)}i.remove(R)}function P(R){const _=i.get(R);t.deleteTexture(_.__webglTexture);const O=R.source,W=p.get(O);delete W[_.__cacheKey],a.memory.textures--}function L(R){const _=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let $=0;$<_.__webglFramebuffer[W].length;$++)t.deleteFramebuffer(_.__webglFramebuffer[W][$]);else t.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)t.deleteFramebuffer(_.__webglFramebuffer[W]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=R.textures;for(let W=0,$=O.length;W<$;W++){const ae=i.get(O[W]);ae.__webglTexture&&(t.deleteTexture(ae.__webglTexture),a.memory.textures--),i.remove(O[W])}i.remove(R)}let B=0;function q(){B=0}function ee(){return B}function z(R){B=R}function K(){const R=B;return R>=r.maxTextures&&De("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),B+=1,R}function V(R){const _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function D(R,_){const O=i.get(R);if(R.isVideoTexture&&I(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){const W=R.image;if(W===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{he(O,R,_);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+_)}function j(R,_){const O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){he(O,R,_);return}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+_)}function ne(R,_){const O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){he(O,R,_);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+_)}function re(R,_){const O=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&O.__version!==R.version){we(O,R,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+_)}const oe={[Xd]:t.REPEAT,[Ci]:t.CLAMP_TO_EDGE,[jd]:t.MIRRORED_REPEAT},Be={[Wt]:t.NEAREST,[V1]:t.NEAREST_MIPMAP_NEAREST,[ko]:t.NEAREST_MIPMAP_LINEAR,[Qt]:t.LINEAR,[cu]:t.LINEAR_MIPMAP_NEAREST,[Fr]:t.LINEAR_MIPMAP_LINEAR},qe={[W1]:t.NEVER,[q1]:t.ALWAYS,[X1]:t.LESS,[Fh]:t.LEQUAL,[j1]:t.EQUAL,[Oh]:t.GEQUAL,[Y1]:t.GREATER,[$1]:t.NOTEQUAL};function He(R,_){if(_.type===di&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Qt||_.magFilter===cu||_.magFilter===ko||_.magFilter===Fr||_.minFilter===Qt||_.minFilter===cu||_.minFilter===ko||_.minFilter===Fr)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,oe[_.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,oe[_.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,oe[_.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Be[_.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Be[_.minFilter]),_.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,qe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Wt||_.minFilter!==ko&&_.minFilter!==Fr||_.type===di&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function U(R,_){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",b));const W=_.source;let $=p.get(W);$===void 0&&($={},p.set(W,$));const ae=V(_);if(ae!==R.__cacheKey){$[ae]===void 0&&($[ae]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[ae].usedTimes++;const ce=$[R.__cacheKey];ce!==void 0&&($[R.__cacheKey].usedTimes--,ce.usedTimes===0&&P(_)),R.__cacheKey=ae,R.__webglTexture=$[ae].texture}return O}function J(R,_,O){return Math.floor(Math.floor(R/O)/_)}function Y(R,_,O,W){const ae=R.updateRanges;if(ae.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,O,W,_.data);else{ae.sort((Ce,pe)=>Ce.start-pe.start);let ce=0;for(let Ce=1;Ce<ae.length;Ce++){const pe=ae[ce],de=ae[Ce],Le=pe.start+pe.count,Ne=J(de.start,_.width,4),Fe=J(pe.start,_.width,4);de.start<=Le+1&&Ne===Fe&&J(de.start+de.count-1,_.width,4)===Ne?pe.count=Math.max(pe.count,de.start+de.count-pe.start):(++ce,ae[ce]=de)}ae.length=ce+1;const Z=n.getParameter(t.UNPACK_ROW_LENGTH),te=n.getParameter(t.UNPACK_SKIP_PIXELS),ue=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Ce=0,pe=ae.length;Ce<pe;Ce++){const de=ae[Ce],Le=Math.floor(de.start/4),Ne=Math.ceil(de.count/4),Fe=Le%_.width,N=Math.floor(Le/_.width),le=Ne,Q=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,Fe,N,le,Q,O,W,_.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Z),n.pixelStorei(t.UNPACK_SKIP_PIXELS,te),n.pixelStorei(t.UNPACK_SKIP_ROWS,ue)}}function he(R,_,O){let W=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=t.TEXTURE_3D);const $=U(R,_),ae=_.source;n.bindTexture(W,R.__webglTexture,t.TEXTURE0+O);const ce=i.get(ae);if(ae.version!==ce.__version||$===!0){if(n.activeTexture(t.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const Q=je.getPrimaries(je.workingColorSpace),fe=_.colorSpace===er?null:je.getPrimaries(_.colorSpace),xe=_.colorSpace===er||Q===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let te=m(_.image,!1,r.maxTextureSize);te=hn(_,te);const ue=s.convert(_.format,_.colorSpace),Ce=s.convert(_.type);let pe=M(_.internalFormat,ue,Ce,_.normalized,_.colorSpace,_.isVideoTexture);He(W,_);let de;const Le=_.mipmaps,Ne=_.isVideoTexture!==!0,Fe=ce.__version===void 0||$===!0,N=ae.dataReady,le=A(_,te);if(_.isDepthTexture)pe=T(_.format===Or,_.type),Fe&&(Ne?n.texStorage2D(t.TEXTURE_2D,1,pe,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,pe,te.width,te.height,0,ue,Ce,null));else if(_.isDataTexture)if(Le.length>0){Ne&&Fe&&n.texStorage2D(t.TEXTURE_2D,le,pe,Le[0].width,Le[0].height);for(let Q=0,fe=Le.length;Q<fe;Q++)de=Le[Q],Ne?N&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,de.width,de.height,ue,Ce,de.data):n.texImage2D(t.TEXTURE_2D,Q,pe,de.width,de.height,0,ue,Ce,de.data);_.generateMipmaps=!1}else Ne?(Fe&&n.texStorage2D(t.TEXTURE_2D,le,pe,te.width,te.height),N&&Y(_,te,ue,Ce)):n.texImage2D(t.TEXTURE_2D,0,pe,te.width,te.height,0,ue,Ce,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ne&&Fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,pe,Le[0].width,Le[0].height,te.depth);for(let Q=0,fe=Le.length;Q<fe;Q++)if(de=Le[Q],_.format!==Zn)if(ue!==null)if(Ne){if(N)if(_.layerUpdates.size>0){const xe=n0(de.width,de.height,_.format,_.type);for(const ie of _.layerUpdates){const be=de.data.subarray(ie*xe/de.data.BYTES_PER_ELEMENT,(ie+1)*xe/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,ie,de.width,de.height,1,ue,be)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,te.depth,ue,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,pe,de.width,de.height,te.depth,0,de.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,te.depth,ue,Ce,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,pe,de.width,de.height,te.depth,0,ue,Ce,de.data)}else{Ne&&Fe&&n.texStorage2D(t.TEXTURE_2D,le,pe,Le[0].width,Le[0].height);for(let Q=0,fe=Le.length;Q<fe;Q++)de=Le[Q],_.format!==Zn?ue!==null?Ne?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,de.width,de.height,ue,de.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,pe,de.width,de.height,0,de.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?N&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,de.width,de.height,ue,Ce,de.data):n.texImage2D(t.TEXTURE_2D,Q,pe,de.width,de.height,0,ue,Ce,de.data)}else if(_.isDataArrayTexture)if(Ne){if(Fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,pe,te.width,te.height,te.depth),N)if(_.layerUpdates.size>0){const Q=n0(te.width,te.height,_.format,_.type);for(const fe of _.layerUpdates){const xe=te.data.subarray(fe*Q/te.data.BYTES_PER_ELEMENT,(fe+1)*Q/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,fe,te.width,te.height,1,ue,Ce,xe)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ue,Ce,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,te.width,te.height,te.depth,0,ue,Ce,te.data);else if(_.isData3DTexture)Ne?(Fe&&n.texStorage3D(t.TEXTURE_3D,le,pe,te.width,te.height,te.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ue,Ce,te.data)):n.texImage3D(t.TEXTURE_3D,0,pe,te.width,te.height,te.depth,0,ue,Ce,te.data);else if(_.isFramebufferTexture){if(Fe)if(Ne)n.texStorage2D(t.TEXTURE_2D,le,pe,te.width,te.height);else{let Q=te.width,fe=te.height;for(let xe=0;xe<le;xe++)n.texImage2D(t.TEXTURE_2D,xe,pe,Q,fe,0,ue,Ce,null),Q>>=1,fe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const Q=t.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),te.parentNode!==Q){Q.appendChild(te),f.add(_),Q.onpaint=fe=>{const xe=fe.changedElements;for(const ie of f)xe.includes(ie.image)&&(ie.needsUpdate=!0)},Q.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,te);else{const xe=t.RGBA,ie=t.RGBA,be=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,xe,ie,be,te)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Ne&&Fe){const Q=et(Le[0]);n.texStorage2D(t.TEXTURE_2D,le,pe,Q.width,Q.height)}for(let Q=0,fe=Le.length;Q<fe;Q++)de=Le[Q],Ne?N&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ue,Ce,de):n.texImage2D(t.TEXTURE_2D,Q,pe,ue,Ce,de);_.generateMipmaps=!1}else if(Ne){if(Fe){const Q=et(te);n.texStorage2D(t.TEXTURE_2D,le,pe,Q.width,Q.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,Ce,te)}else n.texImage2D(t.TEXTURE_2D,0,pe,ue,Ce,te);u(_)&&g(W),ce.__version=ae.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function we(R,_,O){if(_.image.length!==6)return;const W=U(R,_),$=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+O);const ae=i.get($);if($.version!==ae.__version||W===!0){n.activeTexture(t.TEXTURE0+O);const ce=je.getPrimaries(je.workingColorSpace),Z=_.colorSpace===er?null:je.getPrimaries(_.colorSpace),te=_.colorSpace===er||ce===Z?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ue=_.isCompressedTexture||_.image[0].isCompressedTexture,Ce=_.image[0]&&_.image[0].isDataTexture,pe=[];for(let ie=0;ie<6;ie++)!ue&&!Ce?pe[ie]=m(_.image[ie],!0,r.maxCubemapSize):pe[ie]=Ce?_.image[ie].image:_.image[ie],pe[ie]=hn(_,pe[ie]);const de=pe[0],Le=s.convert(_.format,_.colorSpace),Ne=s.convert(_.type),Fe=M(_.internalFormat,Le,Ne,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,le=ae.__version===void 0||W===!0,Q=$.dataReady;let fe=A(_,de);He(t.TEXTURE_CUBE_MAP,_);let xe;if(ue){N&&le&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Fe,de.width,de.height);for(let ie=0;ie<6;ie++){xe=pe[ie].mipmaps;for(let be=0;be<xe.length;be++){const Te=xe[be];_.format!==Zn?Le!==null?N?Q&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be,0,0,Te.width,Te.height,Le,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be,Fe,Te.width,Te.height,0,Te.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be,0,0,Te.width,Te.height,Le,Ne,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be,Fe,Te.width,Te.height,0,Le,Ne,Te.data)}}}else{if(xe=_.mipmaps,N&&le){xe.length>0&&fe++;const ie=et(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Fe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ce){N?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,pe[ie].width,pe[ie].height,Le,Ne,pe[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,pe[ie].width,pe[ie].height,0,Le,Ne,pe[ie].data);for(let be=0;be<xe.length;be++){const St=xe[be].image[ie].image;N?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be+1,0,0,St.width,St.height,Le,Ne,St.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be+1,Fe,St.width,St.height,0,Le,Ne,St.data)}}else{N?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Le,Ne,pe[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,Le,Ne,pe[ie]);for(let be=0;be<xe.length;be++){const Te=xe[be];N?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be+1,0,0,Le,Ne,Te.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be+1,Fe,Le,Ne,Te.image[ie])}}}u(_)&&g(t.TEXTURE_CUBE_MAP),ae.__version=$.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Ee(R,_,O,W,$,ae){const ce=s.convert(O.format,O.colorSpace),Z=s.convert(O.type),te=M(O.internalFormat,ce,Z,O.normalized,O.colorSpace),ue=i.get(_),Ce=i.get(O);if(Ce.__renderTarget=_,!ue.__hasExternalTextures){const pe=Math.max(1,_.width>>ae),de=Math.max(1,_.height>>ae);$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?n.texImage3D($,ae,te,pe,de,_.depth,0,ce,Z,null):n.texImage2D($,ae,te,pe,de,0,ce,Z,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ct(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,$,Ce.__webglTexture,0,yt(_)):($===t.TEXTURE_2D||$>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,$,Ce.__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ye(R,_,O){if(t.bindRenderbuffer(t.RENDERBUFFER,R),_.depthBuffer){const W=_.depthTexture,$=W&&W.isDepthTexture?W.type:null,ae=T(_.stencilBuffer,$),ce=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ct(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(_),ae,_.width,_.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(_),ae,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ae,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,R)}else{const W=_.textures;for(let $=0;$<W.length;$++){const ae=W[$],ce=s.convert(ae.format,ae.colorSpace),Z=s.convert(ae.type),te=M(ae.internalFormat,ce,Z,ae.normalized,ae.colorSpace);Ct(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(_),te,_.width,_.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(_),te,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,te,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ue(R,_,O){const W=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=i.get(_.depthTexture);if($.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W){if($.__webglInit===void 0&&($.__webglInit=!0,_.depthTexture.addEventListener("dispose",b)),$.__webglTexture===void 0){$.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),He(t.TEXTURE_CUBE_MAP,_.depthTexture);const ue=s.convert(_.depthTexture.format),Ce=s.convert(_.depthTexture.type);let pe;_.depthTexture.format===ki?pe=t.DEPTH_COMPONENT24:_.depthTexture.format===Or&&(pe=t.DEPTH24_STENCIL8);for(let de=0;de<6;de++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,pe,_.width,_.height,0,ue,Ce,null)}}else D(_.depthTexture,0);const ae=$.__webglTexture,ce=yt(_),Z=W?t.TEXTURE_CUBE_MAP_POSITIVE_X+O:t.TEXTURE_2D,te=_.depthTexture.format===Or?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===ki)Ct(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,Z,ae,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,te,Z,ae,0);else if(_.depthTexture.format===Or)Ct(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,Z,ae,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,te,Z,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(R){const _=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){const W=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=W}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let W=0;W<6;W++)Ue(_.__webglFramebuffer[W],R,W);else{const W=R.texture.mipmaps;W&&W.length>0?Ue(_.__webglFramebuffer[0],R,0):Ue(_.__webglFramebuffer,R,0)}else if(O){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=t.createRenderbuffer(),Ye(_.__webglDepthbuffer[W],R,!1);else{const $=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=_.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,ae)}}else{const W=R.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),Ye(_.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,ae)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Qe(R,_,O){const W=i.get(R);_!==void 0&&Ee(W.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&st(R)}function Ke(R){const _=R.texture,O=i.get(R),W=i.get(_);R.addEventListener("dispose",x);const $=R.textures,ae=R.isWebGLCubeRenderTarget===!0,ce=$.length>1;if(ce||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=_.version,a.memory.textures++),ae){O.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[Z]=[];for(let te=0;te<_.mipmaps.length;te++)O.__webglFramebuffer[Z][te]=t.createFramebuffer()}else O.__webglFramebuffer[Z]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)O.__webglFramebuffer[Z]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(ce)for(let Z=0,te=$.length;Z<te;Z++){const ue=i.get($[Z]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&Ct(R)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Z=0;Z<$.length;Z++){const te=$[Z];O.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[Z]);const ue=s.convert(te.format,te.colorSpace),Ce=s.convert(te.type),pe=M(te.internalFormat,ue,Ce,te.normalized,te.colorSpace,R.isXRRenderTarget===!0),de=yt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,pe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,O.__webglColorRenderbuffer[Z])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),Ye(O.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),He(t.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)Ee(O.__webglFramebuffer[Z][te],R,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,te);else Ee(O.__webglFramebuffer[Z],R,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);u(_)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){for(let Z=0,te=$.length;Z<te;Z++){const ue=$[Z],Ce=i.get(ue);let pe=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,Ce.__webglTexture),He(pe,ue),Ee(O.__webglFramebuffer,R,ue,t.COLOR_ATTACHMENT0+Z,pe,0),u(ue)&&g(pe)}n.unbindTexture()}else{let Z=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Z,W.__webglTexture),He(Z,_),_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)Ee(O.__webglFramebuffer[te],R,_,t.COLOR_ATTACHMENT0,Z,te);else Ee(O.__webglFramebuffer,R,_,t.COLOR_ATTACHMENT0,Z,0);u(_)&&g(Z),n.unbindTexture()}R.depthBuffer&&st(R)}function bt(R){const _=R.textures;for(let O=0,W=_.length;O<W;O++){const $=_[O];if(u($)){const ae=S(R),ce=i.get($).__webglTexture;n.bindTexture(ae,ce),g(ae),n.unbindTexture()}}}const Nt=[],kt=[];function Ht(R){if(R.samples>0){if(Ct(R)===!1){const _=R.textures,O=R.width,W=R.height;let $=t.COLOR_BUFFER_BIT;const ae=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(R),Z=_.length>1;if(Z)for(let ue=0;ue<_.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const te=R.texture.mipmaps;te&&te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ue=0;ue<_.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=t.STENCIL_BUFFER_BIT)),Z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const Ce=i.get(_[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ce,0)}t.blitFramebuffer(0,0,O,W,0,0,O,W,$,t.NEAREST),l===!0&&(Nt.length=0,kt.length=0,Nt.push(t.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Nt.push(ae),kt.push(ae),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,kt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Nt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let ue=0;ue<_.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const Ce=i.get(_[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,Ce,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const _=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function yt(R){return Math.min(r.maxSamples,R.samples)}function Ct(R){const _=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function I(R){const _=a.render.frame;h.get(R)!==_&&(h.set(R,_),R.update())}function hn(R,_){const O=R.colorSpace,W=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==nc&&O!==er&&(je.getTransfer(O)===tt?(W!==Zn||$!==Tn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",O)),_}function et(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=q,this.getTextureUnits=ee,this.setTextureUnits=z,this.setTexture2D=D,this.setTexture2DArray=j,this.setTexture3D=ne,this.setTextureCube=re,this.rebindTextures=Qe,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function HA(t,e){function n(i,r=er){let s;const a=je.getTransfer(r);if(i===Tn)return t.UNSIGNED_BYTE;if(i===Lh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Nh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ox)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===lx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===sx)return t.BYTE;if(i===ax)return t.SHORT;if(i===ao)return t.UNSIGNED_SHORT;if(i===Ph)return t.INT;if(i===vi)return t.UNSIGNED_INT;if(i===di)return t.FLOAT;if(i===Oi)return t.HALF_FLOAT;if(i===cx)return t.ALPHA;if(i===ux)return t.RGB;if(i===Zn)return t.RGBA;if(i===ki)return t.DEPTH_COMPONENT;if(i===Or)return t.DEPTH_STENCIL;if(i===dx)return t.RED;if(i===Dh)return t.RED_INTEGER;if(i===jr)return t.RG;if(i===Ih)return t.RG_INTEGER;if(i===Uh)return t.RGBA_INTEGER;if(i===wl||i===Tl||i===Al||i===bl)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===wl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===wl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yd||i===$d||i===qd||i===Kd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Yd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$d)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Kd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zd||i===Jd||i===Qd||i===ef||i===tf||i===ec||i===nf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Zd||i===Jd)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Qd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ef)return s.COMPRESSED_R11_EAC;if(i===tf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ec)return s.COMPRESSED_RG11_EAC;if(i===nf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===rf||i===sf||i===af||i===of||i===lf||i===cf||i===uf||i===df||i===ff||i===hf||i===pf||i===mf||i===gf||i===vf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===rf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===af)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===of)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===df)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ff)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xf||i===_f||i===yf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===xf)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_f)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sf||i===Mf||i===tc||i===Ef)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Sf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Mf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ef)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===oo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const GA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Sx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Vn({vertexShader:GA,fragmentShader:WA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new an(new Rc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jA extends Zr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,v=null;const E=typeof XRWebGLBinding<"u",m=new XA,u={},g=n.getContextAttributes();let S=null,M=null;const T=[],A=[],b=new ke;let x=null;const C=new wn;C.viewport=new vt;const P=new wn;P.viewport=new vt;const L=[C,P],B=new tE;let q=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let J=T[U];return J===void 0&&(J=new mu,T[U]=J),J.getTargetRaySpace()},this.getControllerGrip=function(U){let J=T[U];return J===void 0&&(J=new mu,T[U]=J),J.getGripSpace()},this.getHand=function(U){let J=T[U];return J===void 0&&(J=new mu,T[U]=J),J.getHandSpace()};function z(U){const J=A.indexOf(U.inputSource);if(J===-1)return;const Y=T[J];Y!==void 0&&(Y.update(U.inputSource,U.frame,c||a),Y.dispatchEvent({type:U.type,data:U.inputSource}))}function K(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",V);for(let U=0;U<T.length;U++){const J=A[U];J!==null&&(A[U]=null,T[U].disconnect(J))}q=null,ee=null,m.reset();for(const U in u)delete u[U];e.setRenderTarget(S),p=null,d=null,f=null,r=null,M=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&E&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",K),r.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(b),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Y=null,he=null,we=null;g.depth&&(we=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Y=g.stencil?Or:ki,he=g.stencil?oo:vi);const Ee={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ee),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new gi(d.textureWidth,d.textureHeight,{format:Zn,type:Tn,depthTexture:new Zs(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Y={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Y),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new gi(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(U){for(let J=0;J<U.removed.length;J++){const Y=U.removed[J],he=A.indexOf(Y);he>=0&&(A[he]=null,T[he].disconnect(Y))}for(let J=0;J<U.added.length;J++){const Y=U.added[J];let he=A.indexOf(Y);if(he===-1){for(let Ee=0;Ee<T.length;Ee++)if(Ee>=A.length){A.push(Y),he=Ee;break}else if(A[Ee]===null){A[Ee]=Y,he=Ee;break}if(he===-1)break}const we=T[he];we&&we.connect(Y)}}const D=new k,j=new k;function ne(U,J,Y){D.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(Y.matrixWorld);const he=D.distanceTo(j),we=J.projectionMatrix.elements,Ee=Y.projectionMatrix.elements,Ye=we[14]/(we[10]-1),Ue=we[14]/(we[10]+1),st=(we[9]+1)/we[5],Qe=(we[9]-1)/we[5],Ke=(we[8]-1)/we[0],bt=(Ee[8]+1)/Ee[0],Nt=Ye*Ke,kt=Ye*bt,Ht=he/(-Ke+bt),yt=Ht*-Ke;if(J.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(yt),U.translateZ(Ht),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),we[10]===-1)U.projectionMatrix.copy(J.projectionMatrix),U.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Ct=Ye+Ht,I=Ue+Ht,hn=Nt-yt,et=kt+(he-yt),R=st*Ue/I*Ct,_=Qe*Ue/I*Ct;U.projectionMatrix.makePerspective(hn,et,R,_,Ct,I),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function re(U,J){J===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(J.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;let J=U.near,Y=U.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(Y=m.depthFar)),B.near=P.near=C.near=J,B.far=P.far=C.far=Y,(q!==B.near||ee!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),q=B.near,ee=B.far),B.layers.mask=U.layers.mask|6,C.layers.mask=B.layers.mask&-5,P.layers.mask=B.layers.mask&-3;const he=U.parent,we=B.cameras;re(B,he);for(let Ee=0;Ee<we.length;Ee++)re(we[Ee],he);we.length===2?ne(B,C,P):B.projectionMatrix.copy(C.projectionMatrix),oe(U,B,he)};function oe(U,J,Y){Y===null?U.matrix.copy(J.matrixWorld):(U.matrix.copy(Y.matrixWorld),U.matrix.invert(),U.matrix.multiply(J.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(J.projectionMatrix),U.projectionMatrixInverse.copy(J.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=co*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(U){l=U,d!==null&&(d.fixedFoveation=U),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=U)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(U){return u[U]};let Be=null;function qe(U,J){if(h=J.getViewerPose(c||a),v=J,h!==null){const Y=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let he=!1;Y.length!==B.cameras.length&&(B.cameras.length=0,he=!0);for(let Ue=0;Ue<Y.length;Ue++){const st=Y[Ue];let Qe=null;if(p!==null)Qe=p.getViewport(st);else{const bt=f.getViewSubImage(d,st);Qe=bt.viewport,Ue===0&&(e.setRenderTargetTextures(M,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(M))}let Ke=L[Ue];Ke===void 0&&(Ke=new wn,Ke.layers.enable(Ue),Ke.viewport=new vt,L[Ue]=Ke),Ke.matrix.fromArray(st.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(st.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ue===0&&(B.matrix.copy(Ke.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),he===!0&&B.cameras.push(Ke)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){f=i.getBinding();const Ue=f.getDepthInformation(Y[0]);Ue&&Ue.isValid&&Ue.texture&&m.init(Ue,r.renderState)}if(we&&we.includes("camera-access")&&E){e.state.unbindTexture(),f=i.getBinding();for(let Ue=0;Ue<Y.length;Ue++){const st=Y[Ue].camera;if(st){let Qe=u[st];Qe||(Qe=new Sx,u[st]=Qe);const Ke=f.getCameraImage(st);Qe.sourceTexture=Ke}}}}for(let Y=0;Y<T.length;Y++){const he=A[Y],we=T[Y];he!==null&&we!==void 0&&we.update(he,J,c||a)}Be&&Be(U,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),v=null}const He=new Tx;He.setAnimationLoop(qe),this.setAnimationLoop=function(U){Be=U},this.dispose=function(){}}}const YA=new mt,Nx=new Ie;Nx.set(-1,0,0,0,1,0,0,0,1);function $A(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Mx(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,g,S,M){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(m,u):u.isMeshLambertMaterial?(s(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),v(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),E(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,S):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===ln&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===ln&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u),S=g.envMap,M=g.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(YA.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Nx),m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,S){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=S*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===ln&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function E(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qA(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){const A=T.program;i.uniformBlockBinding(M,A)}function c(M,T){let A=r[M.id];A===void 0&&(m(M),A=h(M),r[M.id]=A,M.addEventListener("dispose",g));const b=T.program;i.updateUBOMapping(M,b);const x=e.render.frame;s[M.id]!==x&&(d(M),s[M.id]=x)}function h(M){const T=f();M.__bindingPointIndex=T;const A=t.createBuffer(),b=M.__size,x=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,b,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,A),A}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const T=r[M.id],A=M.uniforms,b=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let x=0,C=A.length;x<C;x++){const P=A[x];if(Array.isArray(P))for(let L=0,B=P.length;L<B;L++)p(P[L],x,L,b);else p(P,x,0,b)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(M,T,A,b){if(E(M,T,A,b)===!0){const x=M.__offset,C=M.value;if(Array.isArray(C)){let P=0;for(let L=0;L<C.length;L++){const B=C[L],q=u(B);v(B,M.__data,P),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(C,M.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,M.__data)}}function v(M,T,A){typeof M=="number"||typeof M=="boolean"?T[0]=M:M.isMatrix3?(T[0]=M.elements[0],T[1]=M.elements[1],T[2]=M.elements[2],T[3]=0,T[4]=M.elements[3],T[5]=M.elements[4],T[6]=M.elements[5],T[7]=0,T[8]=M.elements[6],T[9]=M.elements[7],T[10]=M.elements[8],T[11]=0):ArrayBuffer.isView(M)?T.set(new M.constructor(M.buffer,M.byteOffset,T.length)):M.toArray(T,A)}function E(M,T,A,b){const x=M.value,C=T+"_"+A;if(b[C]===void 0)return typeof x=="number"||typeof x=="boolean"?b[C]=x:ArrayBuffer.isView(x)?b[C]=x.slice():b[C]=x.clone(),!0;{const P=b[C];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return b[C]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(M){const T=M.uniforms;let A=0;const b=16;for(let C=0,P=T.length;C<P;C++){const L=Array.isArray(T[C])?T[C]:[T[C]];for(let B=0,q=L.length;B<q;B++){const ee=L[B],z=Array.isArray(ee.value)?ee.value:[ee.value];for(let K=0,V=z.length;K<V;K++){const D=z[K],j=u(D),ne=A%b,re=ne%j.boundary,oe=ne+re;A+=re,oe!==0&&b-oe<j.storage&&(A+=b-oe),ee.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=A,A+=j.storage}}}const x=A%b;return x>0&&(A+=b-x),M.__size=A,M.__cache={},this}function u(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):De("WebGLRenderer: Unsupported uniform value type.",M),T}function g(M){const T=M.target;T.removeEventListener("dispose",g);const A=a.indexOf(T.__bindingPointIndex);a.splice(A,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function S(){for(const M in r)t.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:S}}const KA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ai=null;function ZA(){return ai===null&&(ai=new FM(KA,16,16,jr,Oi),ai.name="DFG_LUT",ai.minFilter=Qt,ai.magFilter=Qt,ai.wrapS=Ci,ai.wrapT=Ci,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}class JA{constructor(e={}){const{canvas:n=Z1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Tn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const E=p,m=new Set([Uh,Ih,Dh]),u=new Set([Tn,vi,ao,oo,Lh,Nh]),g=new Uint32Array(4),S=new Int32Array(4),M=new k;let T=null,A=null;const b=[],x=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,B=null,q=null,ee=null,z=null;this._outputColorSpace=En;let K=0,V=0,D=null,j=-1,ne=null;const re=new vt,oe=new vt;let Be=null;const qe=new Ge(0);let He=0,U=n.width,J=n.height,Y=1,he=null,we=null;const Ee=new vt(0,0,U,J),Ye=new vt(0,0,U,J);let Ue=!1;const st=new Vh;let Qe=!1,Ke=!1;const bt=new mt,Nt=new k,kt=new vt,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Ct(){return D===null?Y:1}let I=i;function hn(w,F){return n.getContext(w,F)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ch}`),n.addEventListener("webglcontextlost",St,!1),n.addEventListener("webglcontextrestored",lt,!1),n.addEventListener("webglcontextcreationerror",ti,!1),I===null){const F="webgl2";if(I=hn(F,w),I===null)throw hn(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw $e("WebGLRenderer: "+w.message),w}let et,R,_,O,W,$,ae,ce,Z,te,ue,Ce,pe,de,Le,Ne,Fe,N,le,Q,fe,xe,ie;function be(){et=new ZT(I),et.init(),fe=new HA(I,et),R=new GT(I,et,e,fe),_=new zA(I,et),R.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),q=I.createFramebuffer(),ee=I.createFramebuffer(),z=I.createFramebuffer(),O=new e2(I),W=new AA,$=new VA(I,et,_,W,R,fe,O),ae=new KT(P),ce=new rE(I),xe=new VT(I,ce),Z=new JT(I,ce,O,xe),te=new n2(I,Z,ce,xe,O),N=new t2(I,R,$),Le=new WT(W),ue=new TA(P,ae,et,R,xe,Le),Ce=new $A(P,W),pe=new CA,de=new IA(et),Fe=new zT(P,ae,_,te,v,l),Ne=new BA(P,te,R),ie=new qA(I,O,R,_),le=new HT(I,et,O),Q=new QT(I,et,O),O.programs=ue.programs,P.capabilities=R,P.extensions=et,P.properties=W,P.renderLists=pe,P.shadowMap=Ne,P.state=_,P.info=O}be(),E!==Tn&&(C=new r2(E,n.width,n.height,o,r,s));const Te=new jA(P,I);this.xr=Te,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(U,J,!1))},this.getSize=function(w){return w.set(U,J)},this.setSize=function(w,F,X=!0){if(Te.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}U=w,J=F,n.width=Math.floor(w*Y),n.height=Math.floor(F*Y),X===!0&&(n.style.width=w+"px",n.style.height=F+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(U*Y,J*Y).floor()},this.setDrawingBufferSize=function(w,F,X){U=w,J=F,Y=X,n.width=Math.floor(w*X),n.height=Math.floor(F*X),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(E===Tn){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(re)},this.getViewport=function(w){return w.copy(Ee)},this.setViewport=function(w,F,X,H){w.isVector4?Ee.set(w.x,w.y,w.z,w.w):Ee.set(w,F,X,H),_.viewport(re.copy(Ee).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(Ye)},this.setScissor=function(w,F,X,H){w.isVector4?Ye.set(w.x,w.y,w.z,w.w):Ye.set(w,F,X,H),_.scissor(oe.copy(Ye).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(w){_.setScissorTest(Ue=w)},this.setOpaqueSort=function(w){he=w},this.setTransparentSort=function(w){we=w},this.getClearColor=function(w){return w.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,X=!0){let H=0;if(w){let G=!1;if(D!==null){const ve=D.texture.format;G=m.has(ve)}if(G){const ve=D.texture.type,ye=u.has(ve),ge=Fe.getClearColor(),Ae=Fe.getClearAlpha(),Re=ge.r,Oe=ge.g,Ve=ge.b;ye?(g[0]=Re,g[1]=Oe,g[2]=Ve,g[3]=Ae,I.clearBufferuiv(I.COLOR,0,g)):(S[0]=Re,S[1]=Oe,S[2]=Ve,S[3]=Ae,I.clearBufferiv(I.COLOR,0,S))}else H|=I.COLOR_BUFFER_BIT}F&&(H|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),B=w},this.dispose=function(){n.removeEventListener("webglcontextlost",St,!1),n.removeEventListener("webglcontextrestored",lt,!1),n.removeEventListener("webglcontextcreationerror",ti,!1),Fe.dispose(),pe.dispose(),de.dispose(),W.dispose(),ae.dispose(),te.dispose(),xe.dispose(),ie.dispose(),ue.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Kh),Te.removeEventListener("sessionend",Zh),Mr.stop()};function St(w){w.preventDefault(),sc("WebGLRenderer: Context Lost."),L=!0}function lt(){sc("WebGLRenderer: Context Restored."),L=!1;const w=O.autoReset,F=Ne.enabled,X=Ne.autoUpdate,H=Ne.needsUpdate,G=Ne.type;be(),O.autoReset=w,Ne.enabled=F,Ne.autoUpdate=X,Ne.needsUpdate=H,Ne.type=G}function ti(w){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ni(w){const F=w.target;F.removeEventListener("dispose",ni),Dx(F)}function Dx(w){Ix(w),W.remove(w)}function Ix(w){const F=W.get(w).programs;F!==void 0&&(F.forEach(function(X){ue.releaseProgram(X)}),w.isShaderMaterial&&ue.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,X,H,G,ve){F===null&&(F=Ht);const ye=G.isMesh&&G.matrixWorld.determinantAffine()<0,ge=Ox(w,F,X,H,G);_.setMaterial(H,ye);let Ae=X.index,Re=1;if(H.wireframe===!0){if(Ae=Z.getWireframeAttribute(X),Ae===void 0)return;Re=2}const Oe=X.drawRange,Ve=X.attributes.position;let Pe=Oe.start*Re,rt=(Oe.start+Oe.count)*Re;ve!==null&&(Pe=Math.max(Pe,ve.start*Re),rt=Math.min(rt,(ve.start+ve.count)*Re)),Ae!==null?(Pe=Math.max(Pe,0),rt=Math.min(rt,Ae.count)):Ve!=null&&(Pe=Math.max(Pe,0),rt=Math.min(rt,Ve.count));const wt=rt-Pe;if(wt<0||wt===1/0)return;xe.setup(G,H,ge,X,Ae);let Mt,at=le;if(Ae!==null&&(Mt=ce.get(Ae),at=Q,at.setIndex(Mt)),G.isMesh)H.wireframe===!0?(_.setLineWidth(H.wireframeLinewidth*Ct()),at.setMode(I.LINES)):at.setMode(I.TRIANGLES);else if(G.isLine){let Yt=H.linewidth;Yt===void 0&&(Yt=1),_.setLineWidth(Yt*Ct()),G.isLineSegments?at.setMode(I.LINES):G.isLineLoop?at.setMode(I.LINE_LOOP):at.setMode(I.LINE_STRIP)}else G.isPoints?at.setMode(I.POINTS):G.isSprite&&at.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(et.get("WEBGL_multi_draw"))at.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Yt=G._multiDrawStarts,_e=G._multiDrawCounts,_n=G._multiDrawCount,Ze=Ae?ce.get(Ae).bytesPerElement:1,Nn=W.get(H).currentProgram.getUniforms();for(let ii=0;ii<_n;ii++)Nn.setValue(I,"_gl_DrawID",ii),at.render(Yt[ii]/Ze,_e[ii])}else if(G.isInstancedMesh)at.renderInstances(Pe,wt,G.count);else if(X.isInstancedBufferGeometry){const Yt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,_e=Math.min(X.instanceCount,Yt);at.renderInstances(Pe,wt,_e)}else at.render(Pe,wt)};function qh(w,F,X){w.transparent===!0&&w.side===qn&&w.forceSinglePass===!1?(w.side=ln,w.needsUpdate=!0,yo(w,F,X),w.side=gr,w.needsUpdate=!0,yo(w,F,X),w.side=qn):yo(w,F,X)}this.compile=function(w,F,X=null){X===null&&(X=w),A=de.get(X),A.init(F),x.push(A),X.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),w!==X&&w.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights();const H=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ve=G.material;if(ve)if(Array.isArray(ve))for(let ye=0;ye<ve.length;ye++){const ge=ve[ye];qh(ge,X,G),H.add(ge)}else qh(ve,X,G),H.add(ve)}),A=x.pop(),H},this.compileAsync=function(w,F,X=null){const H=this.compile(w,F,X);return new Promise(G=>{function ve(){if(H.forEach(function(ye){W.get(ye).currentProgram.isReady()&&H.delete(ye)}),H.size===0){G(w);return}setTimeout(ve,10)}et.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Nc=null;function Ux(w){Nc&&Nc(w)}function Kh(){Mr.stop()}function Zh(){Mr.start()}const Mr=new Tx;Mr.setAnimationLoop(Ux),typeof self<"u"&&Mr.setContext(self),this.setAnimationLoop=function(w){Nc=w,Te.setAnimationLoop(w),w===null?Mr.stop():Mr.start()},Te.addEventListener("sessionstart",Kh),Te.addEventListener("sessionend",Zh),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;B!==null&&B.renderStart(w,F);const X=Te.enabled===!0&&Te.isPresenting===!0,H=C!==null&&(D===null||X)&&C.begin(P,D);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(F),F=Te.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,F,D),A=de.get(w,x.length),A.init(F),A.state.textureUnits=$.getTextureUnits(),x.push(A),bt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),st.setFromProjectionMatrix(bt,fi,F.reversedDepth),Ke=this.localClippingEnabled,Qe=Le.init(this.clippingPlanes,Ke),T=pe.get(w,b.length),T.init(),b.push(T),Te.enabled===!0&&Te.isPresenting===!0){const ye=P.xr.getDepthSensingMesh();ye!==null&&Dc(ye,F,-1/0,P.sortObjects)}Dc(w,F,0,P.sortObjects),T.finish(),P.sortObjects===!0&&T.sort(he,we,F.reversedDepth),yt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,yt&&Fe.addToRenderList(T,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&Le.beginShadows();const G=A.state.shadowsArray;if(Ne.render(G,w,F),Qe===!0&&Le.endShadows(),(H&&C.hasRenderPass())===!1){const ye=T.opaque,ge=T.transmissive;if(A.setupLights(),F.isArrayCamera){const Ae=F.cameras;if(ge.length>0)for(let Re=0,Oe=Ae.length;Re<Oe;Re++){const Ve=Ae[Re];Qh(ye,ge,w,Ve)}yt&&Fe.render(w);for(let Re=0,Oe=Ae.length;Re<Oe;Re++){const Ve=Ae[Re];Jh(T,w,Ve,Ve.viewport)}}else ge.length>0&&Qh(ye,ge,w,F),yt&&Fe.render(w),Jh(T,w,F)}D!==null&&V===0&&($.updateMultisampleRenderTarget(D),$.updateRenderTargetMipmap(D)),H&&C.end(P),w.isScene===!0&&w.onAfterRender(P,w,F),xe.resetDefaultState(),j=-1,ne=null,x.pop(),x.length>0?(A=x[x.length-1],$.setTextureUnits(A.state.textureUnits),Qe===!0&&Le.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,b.pop(),b.length>0?T=b[b.length-1]:T=null,B!==null&&B.renderEnd()};function Dc(w,F,X,H){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLightProbeGrid)A.pushLightProbeGrid(w);else if(w.isLight)A.pushLight(w),w.castShadow&&A.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||st.intersectsSprite(w)){H&&kt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(bt);const ye=te.update(w),ge=w.material;ge.visible&&T.push(w,ye,ge,X,kt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||st.intersectsObject(w))){const ye=te.update(w),ge=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),kt.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),kt.copy(ye.boundingSphere.center)),kt.applyMatrix4(w.matrixWorld).applyMatrix4(bt)),Array.isArray(ge)){const Ae=ye.groups;for(let Re=0,Oe=Ae.length;Re<Oe;Re++){const Ve=Ae[Re],Pe=ge[Ve.materialIndex];Pe&&Pe.visible&&T.push(w,ye,Pe,X,kt.z,Ve)}}else ge.visible&&T.push(w,ye,ge,X,kt.z,null)}}const ve=w.children;for(let ye=0,ge=ve.length;ye<ge;ye++)Dc(ve[ye],F,X,H)}function Jh(w,F,X,H){const{opaque:G,transmissive:ve,transparent:ye}=w;A.setupLightsView(X),Qe===!0&&Le.setGlobalState(P.clippingPlanes,X),H&&_.viewport(re.copy(H)),G.length>0&&_o(G,F,X),ve.length>0&&_o(ve,F,X),ye.length>0&&_o(ye,F,X),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Qh(w,F,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[H.id]===void 0){const Pe=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[H.id]=new gi(1,1,{generateMipmaps:!0,type:Pe?Oi:Tn,minFilter:Fr,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const ve=A.state.transmissionRenderTarget[H.id],ye=H.viewport||re;ve.setSize(ye.z*P.transmissionResolutionScale,ye.w*P.transmissionResolutionScale);const ge=P.getRenderTarget(),Ae=P.getActiveCubeFace(),Re=P.getActiveMipmapLevel();P.setRenderTarget(ve),P.getClearColor(qe),He=P.getClearAlpha(),He<1&&P.setClearColor(16777215,.5),P.clear(),yt&&Fe.render(X);const Oe=P.toneMapping;P.toneMapping=mi;const Ve=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),A.setupLightsView(H),Qe===!0&&Le.setGlobalState(P.clippingPlanes,H),_o(w,X,H),$.updateMultisampleRenderTarget(ve),$.updateRenderTargetMipmap(ve),et.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let rt=0,wt=F.length;rt<wt;rt++){const Mt=F[rt],{object:at,geometry:Yt,material:_e,group:_n}=Mt;if(_e.side===qn&&at.layers.test(H.layers)){const Ze=_e.side;_e.side=ln,_e.needsUpdate=!0,ep(at,X,H,Yt,_e,_n),_e.side=Ze,_e.needsUpdate=!0,Pe=!0}}Pe===!0&&($.updateMultisampleRenderTarget(ve),$.updateRenderTargetMipmap(ve))}P.setRenderTarget(ge,Ae,Re),P.setClearColor(qe,He),Ve!==void 0&&(H.viewport=Ve),P.toneMapping=Oe}function _o(w,F,X){const H=F.isScene===!0?F.overrideMaterial:null;for(let G=0,ve=w.length;G<ve;G++){const ye=w[G],{object:ge,geometry:Ae,group:Re}=ye;let Oe=ye.material;Oe.allowOverride===!0&&H!==null&&(Oe=H),ge.layers.test(X.layers)&&ep(ge,F,X,Ae,Oe,Re)}}function ep(w,F,X,H,G,ve){w.onBeforeRender(P,F,X,H,G,ve),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(P,F,X,H,w,ve),G.transparent===!0&&G.side===qn&&G.forceSinglePass===!1?(G.side=ln,G.needsUpdate=!0,P.renderBufferDirect(X,F,H,G,w,ve),G.side=gr,G.needsUpdate=!0,P.renderBufferDirect(X,F,H,G,w,ve),G.side=qn):P.renderBufferDirect(X,F,H,G,w,ve),w.onAfterRender(P,F,X,H,G,ve)}function yo(w,F,X){F.isScene!==!0&&(F=Ht);const H=W.get(w),G=A.state.lights,ve=A.state.shadowsArray,ye=G.state.version,ge=ue.getParameters(w,G.state,ve,F,X,A.state.lightProbeGridArray),Ae=ue.getProgramCacheKey(ge);let Re=H.programs;H.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;const Oe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;H.envMap=ae.get(w.envMap||H.environment,Oe),H.envMapRotation=H.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Re===void 0&&(w.addEventListener("dispose",ni),Re=new Map,H.programs=Re);let Ve=Re.get(Ae);if(Ve!==void 0){if(H.currentProgram===Ve&&H.lightsStateVersion===ye)return np(w,ge),Ve}else ge.uniforms=ue.getUniforms(w),B!==null&&w.isNodeMaterial&&B.build(w,X,ge),w.onBeforeCompile(ge,P),Ve=ue.acquireProgram(ge,Ae),Re.set(Ae,Ve),H.uniforms=ge.uniforms;const Pe=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pe.clippingPlanes=Le.uniform),np(w,ge),H.needsLights=Bx(w),H.lightsStateVersion=ye,H.needsLights&&(Pe.ambientLightColor.value=G.state.ambient,Pe.lightProbe.value=G.state.probe,Pe.directionalLights.value=G.state.directional,Pe.directionalLightShadows.value=G.state.directionalShadow,Pe.spotLights.value=G.state.spot,Pe.spotLightShadows.value=G.state.spotShadow,Pe.rectAreaLights.value=G.state.rectArea,Pe.ltc_1.value=G.state.rectAreaLTC1,Pe.ltc_2.value=G.state.rectAreaLTC2,Pe.pointLights.value=G.state.point,Pe.pointLightShadows.value=G.state.pointShadow,Pe.hemisphereLights.value=G.state.hemi,Pe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Pe.spotLightMatrix.value=G.state.spotLightMatrix,Pe.spotLightMap.value=G.state.spotLightMap,Pe.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=A.state.lightProbeGridArray.length>0,H.currentProgram=Ve,H.uniformsList=null,Ve}function tp(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Cl.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function np(w,F){const X=W.get(w);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Fx(w,F){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;M.setFromMatrixPosition(F.matrixWorld);for(let X=0,H=w.length;X<H;X++){const G=w[X];if(G.texture!==null&&G.boundingBox.containsPoint(M))return G}return null}function Ox(w,F,X,H,G){F.isScene!==!0&&(F=Ht),$.resetTextureUnits();const ve=F.fog,ye=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,ge=D===null?P.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:je.workingColorSpace,Ae=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Re=ae.get(H.envMap||ye,Ae),Oe=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ve=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Pe=!!X.morphAttributes.position,rt=!!X.morphAttributes.normal,wt=!!X.morphAttributes.color;let Mt=mi;H.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Mt=P.toneMapping);const at=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Yt=at!==void 0?at.length:0,_e=W.get(H),_n=A.state.lights;if(Qe===!0&&(Ke===!0||w!==ne)){const ct=w===ne&&H.id===j;Le.setState(H,w,ct)}let Ze=!1;H.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==_n.state.version||_e.outputColorSpace!==ge||G.isBatchedMesh&&_e.batching===!1||!G.isBatchedMesh&&_e.batching===!0||G.isBatchedMesh&&_e.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&_e.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&_e.instancing===!1||!G.isInstancedMesh&&_e.instancing===!0||G.isSkinnedMesh&&_e.skinning===!1||!G.isSkinnedMesh&&_e.skinning===!0||G.isInstancedMesh&&_e.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&_e.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&_e.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&_e.instancingMorph===!1&&G.morphTexture!==null||_e.envMap!==Re||H.fog===!0&&_e.fog!==ve||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Le.numPlanes||_e.numIntersection!==Le.numIntersection)||_e.vertexAlphas!==Oe||_e.vertexTangents!==Ve||_e.morphTargets!==Pe||_e.morphNormals!==rt||_e.morphColors!==wt||_e.toneMapping!==Mt||_e.morphTargetsCount!==Yt||!!_e.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Ze=!0):(Ze=!0,_e.__version=H.version);let Nn=_e.currentProgram;Ze===!0&&(Nn=yo(H,F,G),B&&H.isNodeMaterial&&B.onUpdateProgram(H,Nn,_e));let ii=!1,zi=!1,Qr=!1;const ot=Nn.getUniforms(),Tt=_e.uniforms;if(_.useProgram(Nn.program)&&(ii=!0,zi=!0,Qr=!0),H.id!==j&&(j=H.id,zi=!0),_e.needsLights){const ct=Fx(A.state.lightProbeGridArray,G);_e.lightProbeGrid!==ct&&(_e.lightProbeGrid=ct,zi=!0)}if(ii||ne!==w){_.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ot.setValue(I,"projectionMatrix",w.projectionMatrix),ot.setValue(I,"viewMatrix",w.matrixWorldInverse);const Hi=ot.map.cameraPosition;Hi!==void 0&&Hi.setValue(I,Nt.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&ot.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ot.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),ne!==w&&(ne=w,zi=!0,Qr=!0)}if(_e.needsLights&&(_n.state.directionalShadowMap.length>0&&ot.setValue(I,"directionalShadowMap",_n.state.directionalShadowMap,$),_n.state.spotShadowMap.length>0&&ot.setValue(I,"spotShadowMap",_n.state.spotShadowMap,$),_n.state.pointShadowMap.length>0&&ot.setValue(I,"pointShadowMap",_n.state.pointShadowMap,$)),G.isSkinnedMesh){ot.setOptional(I,G,"bindMatrix"),ot.setOptional(I,G,"bindMatrixInverse");const ct=G.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),ot.setValue(I,"boneTexture",ct.boneTexture,$))}G.isBatchedMesh&&(ot.setOptional(I,G,"batchingTexture"),ot.setValue(I,"batchingTexture",G._matricesTexture,$),ot.setOptional(I,G,"batchingIdTexture"),ot.setValue(I,"batchingIdTexture",G._indirectTexture,$),ot.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&ot.setValue(I,"batchingColorTexture",G._colorsTexture,$));const Vi=X.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&N.update(G,X,Nn),(zi||_e.receiveShadow!==G.receiveShadow)&&(_e.receiveShadow=G.receiveShadow,ot.setValue(I,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(Tt.envMapIntensity.value=F.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=ZA()),zi){if(ot.setValue(I,"toneMappingExposure",P.toneMappingExposure),_e.needsLights&&kx(Tt,Qr),ve&&H.fog===!0&&Ce.refreshFogUniforms(Tt,ve),Ce.refreshMaterialUniforms(Tt,H,Y,J,A.state.transmissionRenderTarget[w.id]),_e.needsLights&&_e.lightProbeGrid){const ct=_e.lightProbeGrid;Tt.probesSH.value=ct.texture,Tt.probesMin.value.copy(ct.boundingBox.min),Tt.probesMax.value.copy(ct.boundingBox.max),Tt.probesResolution.value.copy(ct.resolution)}Cl.upload(I,tp(_e),Tt,$)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Cl.upload(I,tp(_e),Tt,$),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ot.setValue(I,"center",G.center),ot.setValue(I,"modelViewMatrix",G.modelViewMatrix),ot.setValue(I,"normalMatrix",G.normalMatrix),ot.setValue(I,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const ct=H.uniformsGroups;for(let Hi=0,es=ct.length;Hi<es;Hi++){const ip=ct[Hi];ie.update(ip,Nn),ie.bind(ip,Nn)}}return Nn}function kx(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Bx(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(w,F,X){const H=W.get(w);H.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),W.get(w.texture).__webglTexture=F,W.get(w.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const X=W.get(w);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,X=0){D=w,K=F,V=X;let H=null,G=!1,ve=!1;if(w){const ge=W.get(w);if(ge.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(I.FRAMEBUFFER,ge.__webglFramebuffer),re.copy(w.viewport),oe.copy(w.scissor),Be=w.scissorTest,_.viewport(re),_.scissor(oe),_.setScissorTest(Be),j=-1;return}else if(ge.__webglFramebuffer===void 0)$.setupRenderTarget(w);else if(ge.__hasExternalTextures)$.rebindTextures(w,W.get(w.texture).__webglTexture,W.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Oe=w.depthTexture;if(ge.__boundDepthTexture!==Oe){if(Oe!==null&&W.has(Oe)&&(w.width!==Oe.image.width||w.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(w)}}const Ae=w.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ve=!0);const Re=W.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Re[F])?H=Re[F][X]:H=Re[F],G=!0):w.samples>0&&$.useMultisampledRTT(w)===!1?H=W.get(w).__webglMultisampledFramebuffer:Array.isArray(Re)?H=Re[X]:H=Re,re.copy(w.viewport),oe.copy(w.scissor),Be=w.scissorTest}else re.copy(Ee).multiplyScalar(Y).floor(),oe.copy(Ye).multiplyScalar(Y).floor(),Be=Ue;if(X!==0&&(H=q),_.bindFramebuffer(I.FRAMEBUFFER,H)&&_.drawBuffers(w,H),_.viewport(re),_.scissor(oe),_.setScissorTest(Be),G){const ge=W.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,ge.__webglTexture,X)}else if(ve){const ge=F;for(let Ae=0;Ae<w.textures.length;Ae++){const Re=W.get(w.textures[Ae]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ae,Re.__webglTexture,X,ge)}}else if(w!==null&&X!==0){const ge=W.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ge.__webglTexture,X)}j=-1},this.readRenderTargetPixels=function(w,F,X,H,G,ve,ye,ge=0){if(!(w&&w.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){_.bindFramebuffer(I.FRAMEBUFFER,Ae);try{const Re=w.textures[ge],Oe=Re.format,Ve=Re.type;if(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),!R.textureFormatReadable(Oe)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(Ve)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-H&&X>=0&&X<=w.height-G&&I.readPixels(F,X,H,G,fe.convert(Oe),fe.convert(Ve),ve)}finally{const Re=D!==null?W.get(D).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(w,F,X,H,G,ve,ye,ge=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae)if(F>=0&&F<=w.width-H&&X>=0&&X<=w.height-G){_.bindFramebuffer(I.FRAMEBUFFER,Ae);const Re=w.textures[ge],Oe=Re.format,Ve=Re.type;if(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),!R.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Pe),I.bufferData(I.PIXEL_PACK_BUFFER,ve.byteLength,I.STREAM_READ),I.readPixels(F,X,H,G,fe.convert(Oe),fe.convert(Ve),0);const rt=D!==null?W.get(D).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,rt);const wt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await J1(I,wt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Pe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ve),I.deleteBuffer(Pe),I.deleteSync(wt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,X=0){const H=Math.pow(2,-X),G=Math.floor(w.image.width*H),ve=Math.floor(w.image.height*H),ye=F!==null?F.x:0,ge=F!==null?F.y:0;$.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,ye,ge,G,ve),_.unbindTexture()},this.copyTextureToTexture=function(w,F,X=null,H=null,G=0,ve=0){let ye,ge,Ae,Re,Oe,Ve,Pe,rt,wt;const Mt=w.isCompressedTexture?w.mipmaps[ve]:w.image;if(X!==null)ye=X.max.x-X.min.x,ge=X.max.y-X.min.y,Ae=X.isBox3?X.max.z-X.min.z:1,Re=X.min.x,Oe=X.min.y,Ve=X.isBox3?X.min.z:0;else{const Tt=Math.pow(2,-G);ye=Math.floor(Mt.width*Tt),ge=Math.floor(Mt.height*Tt),w.isDataArrayTexture?Ae=Mt.depth:w.isData3DTexture?Ae=Math.floor(Mt.depth*Tt):Ae=1,Re=0,Oe=0,Ve=0}H!==null?(Pe=H.x,rt=H.y,wt=H.z):(Pe=0,rt=0,wt=0);const at=fe.convert(F.format),Yt=fe.convert(F.type);let _e;F.isData3DTexture?($.setTexture3D(F,0),_e=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?($.setTexture2DArray(F,0),_e=I.TEXTURE_2D_ARRAY):($.setTexture2D(F,0),_e=I.TEXTURE_2D),_.activeTexture(I.TEXTURE0),_.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const _n=_.getParameter(I.UNPACK_ROW_LENGTH),Ze=_.getParameter(I.UNPACK_IMAGE_HEIGHT),Nn=_.getParameter(I.UNPACK_SKIP_PIXELS),ii=_.getParameter(I.UNPACK_SKIP_ROWS),zi=_.getParameter(I.UNPACK_SKIP_IMAGES);_.pixelStorei(I.UNPACK_ROW_LENGTH,Mt.width),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Mt.height),_.pixelStorei(I.UNPACK_SKIP_PIXELS,Re),_.pixelStorei(I.UNPACK_SKIP_ROWS,Oe),_.pixelStorei(I.UNPACK_SKIP_IMAGES,Ve);const Qr=w.isDataArrayTexture||w.isData3DTexture,ot=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const Tt=W.get(w),Vi=W.get(F),ct=W.get(Tt.__renderTarget),Hi=W.get(Vi.__renderTarget);_.bindFramebuffer(I.READ_FRAMEBUFFER,ct.__webglFramebuffer),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let es=0;es<Ae;es++)Qr&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,W.get(w).__webglTexture,G,Ve+es),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,W.get(F).__webglTexture,ve,wt+es)),I.blitFramebuffer(Re,Oe,ye,ge,Pe,rt,ye,ge,I.DEPTH_BUFFER_BIT,I.NEAREST);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||W.has(w)){const Tt=W.get(w),Vi=W.get(F);_.bindFramebuffer(I.READ_FRAMEBUFFER,ee),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,z);for(let ct=0;ct<Ae;ct++)Qr?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tt.__webglTexture,G,Ve+ct):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Tt.__webglTexture,G),ot?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vi.__webglTexture,ve,wt+ct):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Vi.__webglTexture,ve),G!==0?I.blitFramebuffer(Re,Oe,ye,ge,Pe,rt,ye,ge,I.COLOR_BUFFER_BIT,I.NEAREST):ot?I.copyTexSubImage3D(_e,ve,Pe,rt,wt+ct,Re,Oe,ye,ge):I.copyTexSubImage2D(_e,ve,Pe,rt,Re,Oe,ye,ge);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ot?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(_e,ve,Pe,rt,wt,ye,ge,Ae,at,Yt,Mt.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(_e,ve,Pe,rt,wt,ye,ge,Ae,at,Mt.data):I.texSubImage3D(_e,ve,Pe,rt,wt,ye,ge,Ae,at,Yt,Mt):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ve,Pe,rt,ye,ge,at,Yt,Mt.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ve,Pe,rt,Mt.width,Mt.height,at,Mt.data):I.texSubImage2D(I.TEXTURE_2D,ve,Pe,rt,ye,ge,at,Yt,Mt);_.pixelStorei(I.UNPACK_ROW_LENGTH,_n),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ze),_.pixelStorei(I.UNPACK_SKIP_PIXELS,Nn),_.pixelStorei(I.UNPACK_SKIP_ROWS,ii),_.pixelStorei(I.UNPACK_SKIP_IMAGES,zi),ve===0&&F.generateMipmaps&&I.generateMipmap(_e),_.unbindTexture()},this.initRenderTarget=function(w){W.get(w).__webglFramebuffer===void 0&&$.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?$.setTextureCube(w,0):w.isData3DTexture?$.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?$.setTexture2DArray(w,0):$.setTexture2D(w,0),_.unbindTexture()},this.resetState=function(){K=0,V=0,D=null,_.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),n.unpackColorSpace=je._getUnpackColorSpace()}}function Sr({title:t,children:e}){return y.jsxs("div",{className:"page",children:[y.jsxs("header",{children:[y.jsx("h1",{children:"🎉 Happy 25th Birthday 🎉"}),y.jsx("p",{children:"Personal site scaffold for a data analyst."})]}),y.jsxs("nav",{children:[y.jsx(Er,{to:"/",children:"Home"}),y.jsx(Er,{to:"/kenton",children:"Kenton"}),y.jsx(Er,{to:"/ml",children:"ML"}),y.jsx(Er,{to:"/code",children:"Code"}),y.jsx(Er,{to:"/links",children:"Links"}),y.jsx(Er,{to:"/contact",children:"Contact"}),y.jsx(Er,{to:"/more",children:"More"})]}),y.jsxs("main",{children:[y.jsx("h2",{children:t}),e]})]})}function QA(){const t=ht.useRef(null);return ht.useEffect(()=>{const e=t.current;if(!e)return;const n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=new JA({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.toneMapping=Rh,i.toneMappingExposure=1.25;const r=new RM;r.fog=new zh(197125,.038);const s=new wn(42,1,.1,80);s.position.set(0,.08,4.5);const a=new ba;a.position.y=.46,a.rotation.z=-.18,r.add(a);let o=7421;const l=()=>((o=o*16807%2147483647)-1)/2147483646,c=(U,J="rgba(0,0,0,0)")=>{const Y=document.createElement("canvas");Y.width=Y.height=128;const he=Y.getContext("2d"),we=he.createRadialGradient(64,64,0,64,64,64);return we.addColorStop(0,"#fff"),we.addColorStop(.08,U),we.addColorStop(.34,"rgba(255,70,12,.65)"),we.addColorStop(1,J),he.fillStyle=we,he.fillRect(0,0,128,128),new Du(Y)},h=document.createElement("canvas");h.width=2048,h.height=1024;const f=h.getContext("2d"),d=f.createLinearGradient(0,0,0,1024);d.addColorStop(0,"#07111d"),d.addColorStop(.45,"#062338"),d.addColorStop(1,"#04080e"),f.fillStyle=d,f.fillRect(0,0,2048,1024),f.strokeStyle="rgba(109,164,180,.07)",f.lineWidth=1;for(let U=84;U<1024;U+=86)f.beginPath(),f.moveTo(0,U),f.lineTo(2048,U),f.stroke();for(let U=0;U<2048;U+=128)f.beginPath(),f.moveTo(U,0),f.lineTo(U,1024),f.stroke();[[[95,280],[170,180],[330,152],[465,220],[520,330],[445,382],[390,465],[270,448],[198,370]],[[430,450],[570,455],[650,555],[625,702],[552,866],[492,776],[472,610]],[[790,182],[870,120],[962,145],[1008,230],[955,282],[850,270]],[[930,290],[1070,255],[1190,330],[1160,470],[1080,610],[1015,785],[930,690],[890,518]],[[1020,235],[1245,150],[1530,185],[1800,305],[1725,430],[1512,470],[1400,390],[1220,418],[1120,338]],[[1575,650],[1720,612],[1838,685],[1785,800],[1645,824],[1550,742]],[[845,850],[1200,875],[1540,842],[1800,895],[1640,950],[1050,958]]].forEach(U=>{f.beginPath(),U.forEach(([J,Y],he)=>he?f.lineTo(J,Y):f.moveTo(J,Y)),f.closePath(),f.fillStyle="#19231f",f.fill(),f.strokeStyle="rgba(226,124,67,.38)",f.lineWidth=4,f.stroke()});const v=[[-118,34],[-74,40],[-46,-23],[2,48],[37,55],[31,30],[77,28],[116,39],[139,35],[151,-33],[18,-34]];v.forEach(([U,J],Y)=>{const he=(U+180)/360*2048,we=(90-J)/180*1024,Ee=Y%3===0?82:54,Ye=f.createRadialGradient(he,we,0,he,we,Ee);Ye.addColorStop(0,"#fff7c2"),Ye.addColorStop(.08,"#ff9a1f"),Ye.addColorStop(.25,"#d52d09"),Ye.addColorStop(.58,"rgba(92,15,4,.72)"),Ye.addColorStop(1,"rgba(0,0,0,0)"),f.fillStyle=Ye,f.fillRect(he-Ee,we-Ee,Ee*2,Ee*2)});for(let U=0;U<210;U++){const J=l()*2048,Y=250+l()*560;f.fillStyle=`rgba(255,${70+Math.floor(l()*100)},25,${.18+l()*.48})`,f.fillRect(J,Y,1+l()*3,1+l()*3)}const E=new Du(h);E.colorSpace=En,E.anisotropy=i.capabilities.getMaxAnisotropy();const m=new an(new Ns(1.18,96,96),new jM({map:E,roughness:.96,metalness:.02,emissive:2163968,emissiveIntensity:.42}));m.rotation.y=-1.15,a.add(m);const u={uTime:{value:0},uHeat:{value:.2}},g=new an(new Ns(1.205,96,96),new Vn({uniforms:u,transparent:!0,depthWrite:!1,blending:wi,vertexShader:"varying vec3 vN; varying vec3 vP; void main(){vN=normalize(normalMatrix*normal);vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uTime; uniform float uHeat; varying vec3 vN; varying vec3 vP; void main(){float bands=sin(vP.x*31.+sin(vP.y*19.)+uTime*1.8)*sin(vP.y*27.-uTime);float cracks=smoothstep(.72,.96,bands);float rim=pow(1.-abs(vN.z),3.);vec3 c=mix(vec3(1.,.055,.005),vec3(1.,.68,.12),cracks);gl_FragColor=vec4(c,(cracks*.26+rim*.19)*uHeat);}"}));g.rotation.y=m.rotation.y,a.add(g);const S=document.createElement("canvas");S.width=1024,S.height=512;const M=S.getContext("2d");for(let U=0;U<420;U++){const J=l()*1024,Y=l()*512,he=6+l()*45,we=M.createRadialGradient(J,Y,0,J,Y,he);we.addColorStop(0,`rgba(38,20,18,${.06+l()*.13})`),we.addColorStop(1,"rgba(0,0,0,0)"),M.fillStyle=we,M.fillRect(J-he,Y-he,he*2,he*2)}const T=new Du(S),A=new an(new Ns(1.245,72,72),new za({map:T,transparent:!0,opacity:.82,depthWrite:!1,color:7155751}));A.rotation.y=m.rotation.y+.2,a.add(A);const b=new an(new Ns(1.3,72,72),new Vn({transparent:!0,side:ln,blending:wi,depthWrite:!1,vertexShader:"varying vec3 n;void main(){n=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 n;void main(){float i=pow(max(0.,.72-dot(n,vec3(0.,0.,1.))),3.2);gl_FragColor=vec4(1.,.11,.025,i*.72);}"}));a.add(b);const x=c("#fff3b0"),C=[],P=new k(0,0,1);v.forEach(([U,J],Y)=>{const he=Rm.degToRad(90-J),we=Rm.degToRad(U+180),Ee=new k().setFromSphericalCoords(1,he,we),Ye=new Gm(new Af({map:x,color:Y<3?16773798:16730891,transparent:!0,blending:wi,depthWrite:!1,opacity:0}));Ye.position.copy(Ee).multiplyScalar(1.235),Ye.scale.setScalar(.07),Ye.userData={delay:Y*.24,index:Y},m.add(Ye),C.push(Ye);const Ue=new an(new oc(.035,.047,32),new za({color:16738835,transparent:!0,opacity:0,side:qn,blending:wi,depthWrite:!1}));Ue.position.copy(Ee).multiplyScalar(1.224),Ue.quaternion.setFromUnitVectors(P,Ee),Ue.userData={delay:Y*.24,index:Y},m.add(Ue),C.push(Ue)});const L=new Float32Array(5400);for(let U=0;U<L.length;U+=3)L[U]=(l()-.5)*28,L[U+1]=(l()-.5)*17,L[U+2]=-3-l()*20;const B=new un;B.setAttribute("position",new Cn(L,3));const q=new $m(B,new bf({color:14477823,size:.018,transparent:!0,opacity:.7,sizeAttenuation:!0}));r.add(q);const ee=new Float32Array(1800);for(let U=0;U<ee.length;U+=3){const J=1.35+l()*2.2,Y=l()*Math.PI*2,he=(l()-.5)*1.4;ee[U]=Math.cos(Y)*J,ee[U+1]=he,ee[U+2]=Math.sin(Y)*J}const z=new un;z.setAttribute("position",new Cn(ee,3));const K=new $m(z,new bf({color:16734742,size:.018,transparent:!0,opacity:.68,blending:wi,depthWrite:!1}));r.add(K);const V=c("#ffdf91"),D=new Gm(new Af({map:V,color:16723208,transparent:!0,opacity:.42,blending:wi,depthWrite:!1}));D.position.set(-3.4,1.5,-4),D.scale.set(7,7,1),r.add(D);const j=[0,1,2].map(U=>{const J=new an(new oc(1.31,1.326,128),new za({color:U===0?16769441:16727050,transparent:!0,opacity:0,side:qn,blending:wi,depthWrite:!1}));return J.position.y=.46,J.userData.index=U,r.add(J),J});r.add(new qM(8358566,1310976,.55));const ne=new QM(16765347,2.5);ne.position.set(-4,2.8,5),r.add(ne);const re=new ZM(16723200,13,8,1.7);re.position.set(1,-.25,2.3),r.add(re);const oe=new nE,Be=()=>{const U=e.clientWidth||1,J=e.clientHeight||1;i.setSize(U,J,!1),s.aspect=U/J,s.updateProjectionMatrix()};Be(),window.addEventListener("resize",Be);let qe;const He=()=>{qe=requestAnimationFrame(He);const U=oe.getElapsedTime(),J=n?0:.0014;m.rotation.y+=J,g.rotation.y+=J*.82,A.rotation.y-=J*.32,u.uTime.value=U,u.uHeat.value=Math.min(1.35,.18+U*.22),A.material.opacity=Math.min(.92,.38+U*.075),C.forEach(Y=>{const he=Math.max(0,U-Y.userData.delay);Y.isSprite?(Y.material.opacity=Math.min(1,he*2.4)*(.64+Math.sin(U*8+Y.userData.index)*.24),Y.scale.setScalar(.04+Math.min(.17,he*.045))):(Y.material.opacity=he>0?Math.max(0,.7-he%2.1/2.1):0,Y.scale.setScalar(1+he%2.1*2.8))}),j.forEach((Y,he)=>{const we=Math.max(0,U-he*.65),Ee=we%4.2;Y.scale.setScalar(1+Ee*.52),Y.material.opacity=we>0?Math.max(0,.44-Ee*.105):0}),K.rotation.z+=J*.38,K.rotation.y-=J*.2,re.intensity=10+Math.sin(U*5.4)*3.5+Math.sin(U*13)*1.2,s.position.z=4.25+Math.min(.5,U*.035),n||(s.position.x=Math.sin(U*19)*Math.max(0,.018-U*.002),s.position.y=.08+Math.sin(U*14)*Math.max(0,.011-U*.001)),s.lookAt(0,0,0),i.render(r,s)};return He(),()=>{cancelAnimationFrame(qe),window.removeEventListener("resize",Be),r.traverse(U=>{var J,Y;(J=U.geometry)==null||J.dispose(),Array.isArray(U.material)?U.material.forEach(he=>he.dispose()):(Y=U.material)==null||Y.dispose()}),E.dispose(),T.dispose(),x.dispose(),V.dispose(),i.dispose()}},[]),y.jsx("canvas",{ref:t,"aria-label":"A burning Earth surrounded by global firestorms and ash",style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}})}function eb({onReset:t}){const[e,n]=ht.useState(0);ht.useEffect(()=>{const l=Date.now(),c=setInterval(()=>n(Math.floor((Date.now()-l)/1e3)),1e3);return()=>clearInterval(c)},[]);const i=`T+00:${String(e).padStart(2,"0")}`,r=[{x:0,w:9,h:43},{x:7,w:7,h:31},{x:13,w:11,h:55},{x:22,w:6,h:36},{x:27,w:10,h:63,falling:!0},{x:36,w:7,h:44},{x:42,w:12,h:38},{x:53,w:8,h:57},{x:60,w:6,h:34},{x:65,w:12,h:69},{x:76,w:7,h:46},{x:82,w:11,h:58},{x:92,w:9,h:39}],s=Array.from({length:34},(l,c)=>({x:c*31%101,size:22+c*17%58,delay:-(c*13%24)/10})),a=Array.from({length:9},(l,c)=>({x:5+c*19%92,delay:-(c*7%31)/10,scale:.55+c%4*.2})),o=Array.from({length:46},(l,c)=>({x:c*37%101,delay:-(c*11%53)/10,duration:3.5+c%6*.7}));return y.jsxs("section",{className:"doomsday","aria-live":"polite",children:[y.jsx(QA,{}),y.jsx("div",{className:"doom-vignette"}),y.jsx("div",{className:"doom-grain"}),y.jsx("div",{className:"doom-scan"}),y.jsx("div",{className:"meteor-field","aria-hidden":"true",children:a.map((l,c)=>y.jsx("i",{className:"meteor",style:{"--x":`${l.x}%`,"--delay":`${l.delay}s`,"--scale":l.scale}},c))}),y.jsx("div",{className:"sky-blast sky-blast-one","aria-hidden":"true"}),y.jsx("div",{className:"sky-blast sky-blast-two","aria-hidden":"true"}),y.jsx("div",{className:"ash-field","aria-hidden":"true",children:o.map((l,c)=>y.jsx("i",{style:{"--x":`${l.x}%`,"--delay":`${l.delay}s`,"--duration":`${l.duration}s`}},c))}),y.jsxs("div",{className:"doom-topline mono",children:[y.jsxs("div",{children:[y.jsx("span",{className:"doom-live"}),"PLANETARY EXTINCTION"]}),y.jsx("div",{children:i})]}),y.jsxs("div",{className:"city-destruction","aria-hidden":"true",children:[y.jsx("div",{className:"smoke-column smoke-one"}),y.jsx("div",{className:"smoke-column smoke-two"}),y.jsx("div",{className:"smoke-column smoke-three"}),y.jsx("div",{className:"ruined-skyline",children:r.map((l,c)=>y.jsx("i",{className:`ruin ruin-${c%3}${l.falling?" ruin-falling":""}`,style:{"--x":`${l.x}%`,"--w":`${l.w}%`,"--h":`${l.h}%`},children:y.jsx("b",{})},c))}),y.jsxs("svg",{className:"broken-bridge",viewBox:"0 0 1200 190",preserveAspectRatio:"none",children:[y.jsx("path",{d:"M0 136 L176 130 L315 92 L452 124 L512 143 M688 147 L756 113 L910 100 L1035 132 L1200 139"}),y.jsx("path",{d:"M188 130 L188 35 M1008 132 L1008 38 M188 42 Q360 51 452 124 M1008 44 Q850 52 756 113"}),y.jsx("path",{className:"bridge-cable",d:"M452 124 L512 182 M756 113 L690 180"})]}),y.jsx("div",{className:"fireline",children:s.map((l,c)=>y.jsx("i",{className:"flame",style:{"--x":`${l.x}%`,"--size":`${l.size}px`,"--delay":`${l.delay}s`}},c))})]}),y.jsxs("div",{className:"doom-end",children:[y.jsx("strong",{children:"THE END"}),y.jsx("span",{className:"mono",children:"NO CITIES LEFT TO NAME"})]}),y.jsx("div",{className:"doom-bottom",children:y.jsxs("button",{onClick:t,className:"doom-reset mono","aria-label":"Reset the experiment",children:["REWIND ",y.jsx("span",{children:"↺"})]})})]})}function tb(){const[t,e]=ht.useState(1.4),[n,i]=ht.useState(1),r=[{f:8,w:1.5,h:1.8},{f:22,w:2,h:.9}];return y.jsxs("div",{style:{height:320,position:"relative",background:"#020617",overflow:"hidden"},children:[y.jsxs("svg",{viewBox:"0 0 400 200",style:{width:"100%",height:"100%",display:"block"},children:[y.jsx("rect",{width:400,height:200,fill:"#020617"}),y.jsx("text",{x:12,y:18,fill:"#22d3ee",fontSize:8,className:"mono",children:"PSD(f) = A / f^χ · x·y + Σ peaks"}),y.jsx("text",{x:12,y:192,fill:"#64748b",fontSize:6,className:"mono",children:"f (Hz) log — 1 ─── 10 ─── 100"}),y.jsx("path",{d:`M ${Array.from({length:80},(s,a)=>{const o=1+99*a/79,l=30+Math.log10(o)/2*340,c=170-60*n/Math.pow(o,t)*40-r.reduce((h,f)=>h+f.h*Math.exp(-Math.pow(Math.log10(o)-Math.log10(f.f),2)/(2*Math.pow(f.w/10,2))),0)*30;return`${a===0?"M":"L"} ${l.toFixed(1)} ${c.toFixed(1)}`}).join(" ")}`,fill:"none",stroke:"#f472b6",strokeWidth:1.6,opacity:.95}),y.jsx("path",{d:`M ${Array.from({length:80},(s,a)=>{const o=1+99*a/79,l=30+Math.log10(o)/2*340,c=170-60*n/Math.pow(o,t)*40;return`${a===0?"M":"L"} ${l.toFixed(1)} ${c.toFixed(1)}`}).join(" ")}`,fill:"none",stroke:"#22d3ee",strokeWidth:1,opacity:.35,strokeDasharray:"4 4"}),r.map((s,a)=>{const o=30+Math.log10(s.f)/2*340;return y.jsxs("g",{children:[y.jsx("line",{x1:o,y1:40,x2:o,y2:170,stroke:"rgba(99,102,241,0.18)",strokeWidth:1}),y.jsxs("text",{x:o,y:36,textAnchor:"middle",fill:"#a78bfa",fontSize:6,className:"mono",children:[s.f,"Hz"]})]},a)}),y.jsxs("text",{x:320,y:28,fill:"#f472b6",fontSize:7,className:"mono",children:["χ=",t.toFixed(2)]}),y.jsxs("text",{x:320,y:38,fill:"#22d3ee",fontSize:7,className:"mono",children:["A·x·y=",n.toFixed(2)]})]}),y.jsxs("div",{style:{position:"absolute",bottom:42,left:12,right:12,display:"flex",gap:12,alignItems:"center"},children:[y.jsxs("label",{className:"mono",style:{fontSize:10,color:"#e2e8f0",display:"flex",gap:6,alignItems:"center"},children:["χ ",y.jsx("input",{type:"range",min:.5,max:2.5,step:.05,value:t,onChange:s=>e(parseFloat(s.target.value)),style:{width:90}})]}),y.jsxs("label",{className:"mono",style:{fontSize:10,color:"#e2e8f0",display:"flex",gap:6,alignItems:"center"},children:["A ",y.jsx("input",{type:"range",min:.4,max:1.8,step:.05,value:n,onChange:s=>i(parseFloat(s.target.value)),style:{width:90}})]}),y.jsx("span",{className:"mono",style:{fontSize:9,color:"#94a3b8",marginLeft:"auto"},children:"x·y = lateral · anterior — aperiodic × space"})]})]})}function nb(){var m;const t={paper:"#E8E0C8",ink:"#0A0A0B"},e={w:2400,h:1600},n=[{id:"kenton",label:"CABIN",sub:"KENTON",href:"/kenton",x:420,y:520,w:148,h:112,lore:"Where Kenton keeps the signal logs. The heater still ticks."},{id:"store",label:"STORE",sub:"LINKS",href:"/links",x:760,y:420,w:132,h:108,lore:"A general store that sells other peoples websites."},{id:"theatre",label:"THEATRE",sub:"ML LAB",href:"/ml",x:1080,y:560,w:152,h:118,lore:"The prediction theatre — curtains, yields, and P/E ratios."},{id:"code",label:"MILL",sub:"CODE",href:"/code",x:620,y:780,w:136,h:102,lore:"The code mill — sawdust and shipped features."},{id:"contact",label:"POST",sub:"CONTACT",href:"/contact",x:980,y:820,w:110,h:82,lore:"Post office. Write a letter, it might arrive."},{id:"more",label:"SHED",sub:"MORE",href:"/more",x:1450,y:620,w:96,h:78,lore:"A shed that is bigger inside."},{id:"hook_north",label:"NORTH LOT",sub:"HOOK_NORTH",href:null,x:520,y:220,w:110,h:80,hook:!0,lore:"Reserved — Codex: add a lighthouse / observatory here."},{id:"hook_east",label:"EAST LOT",sub:"HOOK_EAST",href:null,x:1750,y:740,w:120,h:90,hook:!0,lore:"Reserved — Codex: add a dock / fishing game here."},{id:"hook_south",label:"SOUTH LOT",sub:"HOOK_SOUTH",href:null,x:900,y:1180,w:130,h:90,hook:!0,lore:"Reserved — Codex: add a cave / archive here."},{id:"hook_west",label:"WEST LOT",sub:"HOOK_WEST",href:null,x:220,y:900,w:110,h:86,hook:!0,lore:"Reserved — Codex: add a grove / shrine here."}],[i,r]=ht.useState({x:700,y:400}),[s,a]=ht.useState(null),[o,l]=ht.useState({x:700,y:400}),[c,h]=ht.useState(!1);ht.useEffect(()=>{let u;const g=()=>{l(S=>({x:S.x+(i.x-S.x)*.08,y:S.y+(i.y-S.y)*.08})),u=requestAnimationFrame(g)};return u=requestAnimationFrame(g),()=>cancelAnimationFrame(u)},[i]),ht.useEffect(()=>{const g=new Set,S=b=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","a","s","d"].includes(b.key.toLowerCase())&&(b.preventDefault(),g.add(b.key.toLowerCase()))},M=b=>g.delete(b.key.toLowerCase());window.addEventListener("keydown",S),window.addEventListener("keyup",M);let T;const A=()=>{let b=0,x=0;(g.has("arrowleft")||g.has("a"))&&(b-=9),(g.has("arrowright")||g.has("d"))&&(b+=9),(g.has("arrowup")||g.has("w"))&&(x-=9),(g.has("arrowdown")||g.has("s"))&&(x+=9),(b||x)&&r(C=>{let P=Math.max(24,Math.min(e.w-24,C.x+b)),L=Math.max(24,Math.min(e.h-24,C.y+x));return(P<=28||P>=e.w-28||L<=28||L>=e.h-28)&&(h(!0),setTimeout(()=>window.location.href="/avery",260)),{x:P,y:L}}),T=requestAnimationFrame(A)};return T=requestAnimationFrame(A),()=>{cancelAnimationFrame(T),window.removeEventListener("keydown",S),window.removeEventListener("keyup",M)}},[]),ht.useEffect(()=>{const u=n.find(g=>!g.hook&&i.x>g.x-22&&i.x<g.x+g.w+22&&i.y>g.y-22&&i.y<g.y+g.h+22);a((u==null?void 0:u.id)||null)},[i]);const f=1e3,d=650,p=Math.max(0,Math.min(e.w-f,o.x-f/2)),v=Math.max(0,Math.min(e.h-d,o.y-d/2)),E=(u,g,S)=>{const M=(u-S.left)/S.width,T=(g-S.top)/S.height;return{x:p+M*f,y:v+T*d}};return y.jsxs("div",{style:{margin:"-24px -24px 0",background:t.paper,color:t.ink,minHeight:"calc(100vh - 72px)",position:"relative",overflow:"hidden",filter:"sepia(0.38) saturate(0.82)"},children:[y.jsx("style",{children:"@keyframes drift{from{transform:translateX(-240px)}to{transform:translateX(2640px)}} @keyframes flash{0%,49%{fill:#9A8E7A}50%,100%{fill:#7E8FA3}} .flash{animation:flash 0.28s steps(1) infinite} .ink{stroke:#0A0A0B; stroke-linecap:round; stroke-linejoin:round} @keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}"}),c&&y.jsx("div",{style:{position:"absolute",inset:0,zIndex:20,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(10,10,11,0.78)",color:"#F5EED8",fontFamily:"JetBrains Mono,monospace",fontSize:20,letterSpacing:5},children:"EDGE → AVERY…"}),y.jsxs("svg",{viewBox:`${p} ${v} ${f} ${d}`,style:{width:"100%",height:"calc(100vh - 72px)",display:"block"},onClick:u=>{const g=u.currentTarget.getBoundingClientRect(),S=E(u.clientX,u.clientY,g);r({x:Math.max(24,Math.min(e.w-24,S.x)),y:Math.max(24,Math.min(e.h-24,S.y))})},children:[y.jsx("rect",{x:"0",y:"0",width:e.w,height:e.h,fill:"#E8E0C8"}),y.jsx("rect",{x:"0",y:"0",width:e.w,height:e.h,fill:"none",stroke:"#0A0A0B",strokeWidth:"4"}),y.jsx("ellipse",{cx:"900",cy:"620",rx:"720",ry:"420",fill:"#C2B8A3",className:"ink",strokeWidth:"3.5"}),y.jsx("ellipse",{cx:"900",cy:"600",rx:"680",ry:"390",fill:"#D9D0B6",stroke:"#0A0A0B",strokeWidth:"2.2"}),y.jsx("ellipse",{cx:"900",cy:"600",rx:"640",ry:"360",fill:"none",stroke:"#0A0A0B",strokeWidth:"1",strokeDasharray:"6 8",opacity:"0.35"}),y.jsxs("g",{stroke:"#0A0A0B",strokeWidth:"1.4",opacity:"0.9",fill:"none",children:[Array.from({length:18}).map((u,g)=>y.jsx("path",{d:`M ${-60+g*140} ${1320+g%3*18} q 28 -9 56 0 t 56 0 t 56 0`},g)),Array.from({length:14}).map((u,g)=>y.jsx("path",{d:`M ${-40+g*170} 120 q 26 -8 52 0 t 52 0`},g))]}),y.jsxs("g",{opacity:"0.96",children:[y.jsxs("g",{style:{animation:"drift 32s linear infinite"},children:[y.jsx("ellipse",{cx:"320",cy:"140",rx:"70",ry:"26",fill:"#F5EED8",className:"ink",strokeWidth:"2.6"}),y.jsx("ellipse",{cx:"360",cy:"128",rx:"44",ry:"20",fill:"#F5EED8",className:"ink",strokeWidth:"2.6"}),y.jsx("ellipse",{cx:"280",cy:"150",rx:"36",ry:"16",fill:"#F5EED8",className:"ink",strokeWidth:"2.6"})]}),y.jsxs("g",{style:{animation:"drift 46s linear infinite"},children:[y.jsx("ellipse",{cx:"980",cy:"110",rx:"80",ry:"28",fill:"#F5EED8",className:"ink",strokeWidth:"2.6"}),y.jsx("ellipse",{cx:"1030",cy:"98",rx:"48",ry:"18",fill:"#F5EED8",className:"ink",strokeWidth:"2.6"})]}),y.jsxs("g",{style:{animation:"drift 38s linear infinite",animationDelay:"-10s"},children:[y.jsx("ellipse",{cx:"1500",cy:"160",rx:"60",ry:"22",fill:"#F5EED8",className:"ink",strokeWidth:"2.6"}),y.jsx("ellipse",{cx:"1540",cy:"148",rx:"38",ry:"16",fill:"#F5EED8",className:"ink",strokeWidth:"2.6"})]})]}),Array.from({length:28}).map((u,g)=>{const S=999+g*137,M=180+S*73%2100,T=260+S*41%900;return!(Math.pow((M-900)/680,2)+Math.pow((T-600)/390,2)<1)||n.some(b=>Math.hypot(M-(b.x+b.w/2),T-(b.y+b.h/2))<90)?null:y.jsxs("g",{children:[y.jsx("rect",{x:M-4,y:T,width:"7",height:"16",fill:"#6B6254",className:"ink",strokeWidth:"1.7"}),y.jsx("circle",{cx:M,cy:T-8,r:"16",fill:"#9A8E7A",className:"ink",strokeWidth:"2"}),y.jsx("circle",{cx:M-7,cy:T-2,r:"10",fill:"#C2B8A3",className:"ink",strokeWidth:"1.6"})]},g)}),y.jsxs("g",{stroke:"#0A0A0B",strokeWidth:"1.6",strokeDasharray:"8 10",opacity:"0.45",fill:"none",children:[y.jsx("path",{d:"M 480 580 Q 620 520 780 480 T 1150 620"}),y.jsx("path",{d:"M 680 840 Q 830 860 1030 860"})]}),n.map(u=>{const g=s===u.id,S=u.hook;return y.jsxs("g",{onClick:()=>u.href&&(window.location.href=u.href),style:{cursor:u.href?"pointer":"default"},opacity:S?.55:1,children:[y.jsx("rect",{x:u.x,y:u.y,width:u.w,height:u.h,rx:"11",fill:S?"none":g?"#9A8E7A":"#F5EED8",className:g?"flash ink":"ink",strokeWidth:S?1.8:3,strokeDasharray:S?"8 6":""}),!S&&y.jsx("rect",{x:u.x+12,y:u.y+16,width:u.w-24,height:"14",rx:"4",fill:"#0A0A0B"}),y.jsx("text",{x:u.x+u.w/2,y:u.y+26,textAnchor:"middle",fontSize:"8.5",fontFamily:"JetBrains Mono,monospace",fill:S?"#0A0A0B":"#F5EED8",fontWeight:"800",children:u.label}),!S&&y.jsx("text",{x:u.x+u.w/2,y:u.y+u.h-16,textAnchor:"middle",fontSize:"7",fontFamily:"JetBrains Mono,monospace",fill:"#0A0A0B",fontWeight:"700",children:u.sub}),S&&y.jsx("text",{x:u.x+u.w/2,y:u.y+u.h-14,textAnchor:"middle",fontSize:"6.5",fontFamily:"JetBrains Mono,monospace",fill:"#0A0A0B",children:u.sub}),!S&&y.jsx("rect",{x:u.x+u.w/2-15,y:u.y+u.h-30,width:"30",height:"22",rx:"3",fill:"#C2B8A3",className:"ink",strokeWidth:"2"}),g&&y.jsx("text",{x:u.x+u.w/2,y:u.y-12,textAnchor:"middle",fontSize:"9",fontFamily:"JetBrains Mono,monospace",fill:"#0A0A0B",fontWeight:"800",children:"▶ ENTER [↵]"}),S&&y.jsx("text",{x:u.x+u.w/2,y:u.y+u.h/2+4,textAnchor:"middle",fontSize:"10",opacity:"0.7",children:"◇"})]},u.id)}),y.jsxs("g",{transform:`translate(${i.x},${i.y})`,style:{animation:"bob 0.9s ease-in-out infinite"},children:[y.jsx("ellipse",{cx:"0",cy:"16",rx:"11",ry:"4.5",fill:"rgba(0,0,0,0.22)"}),y.jsx("rect",{x:"-10",y:"-16",width:"20",height:"20",rx:"7",fill:"#0A0A0B",stroke:"#F5EED8",strokeWidth:"1.3"}),y.jsx("circle",{cx:"0",cy:"-7",r:"5.5",fill:"#F5EED8",stroke:"#0A0A0B",strokeWidth:"1.7"}),y.jsx("text",{x:"0",y:"-4.5",textAnchor:"middle",fontSize:"7.5",children:"◉"})]}),y.jsxs("g",{opacity:"0.42",fontFamily:"JetBrains Mono,monospace",fontSize:"8",fill:"#0A0A0B",textAnchor:"middle",children:[y.jsx("text",{x:e.w/2,y:"22",children:"— NORTH EDGE → AVERY —"}),y.jsx("text",{x:e.w/2,y:e.h-14,children:"— SOUTH EDGE → AVERY —"}),y.jsx("text",{x:"18",y:e.h/2,transform:`rotate(-90 18 ${e.h/2})`,children:"WEST EDGE → AVERY"}),y.jsx("text",{x:e.w-18,y:e.h/2,transform:`rotate(90 ${e.w-18} ${e.h/2})`,children:"EAST EDGE → AVERY"})]})]}),y.jsxs("div",{style:{position:"absolute",bottom:10,left:10,right:10,display:"flex",gap:8,flexWrap:"wrap",alignItems:"flex-end",justifyContent:"space-between",fontFamily:"JetBrains Mono,monospace",fontSize:10,zIndex:6},children:[y.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[y.jsx("span",{style:{background:"#0A0A0B",color:"#F5EED8",padding:"7px 11px",borderRadius:999},children:"WASD / ARROWS · CLICK to walk · ENTER to enter"}),s&&y.jsx("span",{style:{background:"#F5EED8",border:"2px solid #0A0A0B",padding:"6px 10px",borderRadius:999,maxWidth:420,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:(m=n.find(u=>u.id===s))==null?void 0:m.lore})]}),y.jsxs("div",{style:{background:"rgba(245,238,216,0.92)",border:"2.5px solid #0A0A0B",borderRadius:10,padding:"6px 10px",maxWidth:360,lineHeight:1.4},children:[y.jsx("b",{children:"THE ESPRIT ARCHIPELAGO"})," — a faded map. Walk far; the world is 2400×1600. Dashed lots (HOOK_*) are for Codex to build on — wire `data-hook` or add SVG groups with id `hook_*` and they’ll flash + link. No banner."]})]})]})}function ib(){return y.jsxs(Sr,{title:"",children:[y.jsx("style",{children:`
        .kenton-wrap{margin:0 -24px; padding:0; background:#f8fafc}
        .kenton-hero{position:relative; overflow:hidden; background:
          radial-gradient(900px 520px at 12% 0%, rgba(99,102,241,0.16), transparent 62%),
          radial-gradient(760px 520px at 96% 18%, rgba(14,165,233,0.14), transparent 62%),
          linear-gradient(180deg,#ffffff 0%, #f1f5f9 100%); border-bottom:1px solid #e2e8f0}
        .kenton-shell{max-width:1180px; margin:0 auto; padding:32px 24px 0; position:relative}
        .kenton-grid{max-width:1180px; margin:0 auto; padding:20px 24px 32px; display:grid; grid-template-columns: 1.15fr 0.85fr; gap:18px}
        .kglass{-webkit-backdrop-filter:blur(14px) saturate(1.2); backdrop-filter:blur(14px) saturate(1.2); background:rgba(255,255,255,0.94); border:1px solid rgba(15,23,42,0.07); box-shadow:0 8px 28px rgba(15,23,42,0.07)}
        .mono{font-family:'JetBrains Mono',ui-monospace,monospace}
        @media(max-width:900px){ .kenton-grid{grid-template-columns:1fr} }
      `}),y.jsxs("div",{className:"kenton-wrap",children:[y.jsx("div",{className:"kenton-hero",children:y.jsx("div",{className:"kenton-shell",children:y.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.15fr 0.85fr",gap:28,alignItems:"center",padding:"8px 0 28px"},children:[y.jsxs("div",{children:[y.jsx("div",{className:"mono",style:{fontSize:11,letterSpacing:3,color:"#6366f1",fontWeight:700},children:"KENTON GUARIAN — SAN DIEGO · UCSD MATH-CS"}),y.jsxs("div",{style:{fontSize:"clamp(30px,3.6vw,42px)",fontWeight:800,letterSpacing:"-0.04em",lineHeight:1.05,marginTop:8,color:"#0f172a"},children:["Data · software ·",y.jsx("br",{}),y.jsx("span",{style:{background:"linear-gradient(90deg,#6366f1,#06b6d4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"signal research."})]}),y.jsxs("p",{style:{fontSize:15,color:"#475569",lineHeight:1.65,marginTop:14,maxWidth:560},children:["Mathematics-Computer Science, UC San Diego (Dec 2023) — Voytek Lab alum, Machine Learning Engineer in Cognitive Science. Built deep nets for brain signals at ",y.jsx("strong",{children:"98% accuracy"}),", patent-pending heart-signal parametrization (",y.jsx("strong",{children:"1000× faster"}),"), and secure data platforms that lifted research efficiency 30%. Published: ",y.jsx("em",{children:"Sleep breathing patterns and neurocognitive function in a diverse Hispanic/Latino cohort"})," — ",y.jsx("em",{children:"Alzheimer's & Dementia"})," (2023) ",y.jsx("a",{href:"https://doi.org/10.1002/alz.074342",target:"_blank",rel:"noreferrer",style:{color:"#6366f1"},children:"doi:10.1002/alz.074342 ↗"}),"."]}),y.jsxs("div",{style:{display:"flex",gap:10,marginTop:16,flexWrap:"wrap"},children:[y.jsx("a",{href:"mailto:Kenton.Guarian@gmail.com",className:"mono",style:{padding:"11px 16px",borderRadius:999,textDecoration:"none",fontWeight:700,fontSize:13,background:"#0f172a",color:"#fff"},children:"Kenton.Guarian@gmail.com"}),y.jsx("a",{href:"https://www.linkedin.com/in/kguarian/",target:"_blank",rel:"noreferrer",className:"mono",style:{fontSize:11,alignSelf:"center",color:"#0a66c2",background:"#fff",border:"1px solid #e2e8f0",padding:"6px 10px",borderRadius:999,textDecoration:"none"},children:"in · kguarian ↗"}),y.jsx("a",{href:"https://github.com/kguarian",target:"_blank",rel:"noreferrer",className:"mono",style:{fontSize:11,alignSelf:"center",color:"#0f172a",background:"#fff",border:"1px solid #e2e8f0",padding:"6px 10px",borderRadius:999,textDecoration:"none"},children:"GitHub · 34 repos ↗"}),y.jsx("a",{href:"https://voyteklab.com/members",target:"_blank",rel:"noreferrer",className:"mono",style:{fontSize:11,alignSelf:"center",color:"#6366f1"},children:"Voytek Lab ↗"})]})]}),y.jsxs("div",{style:{position:"relative"},children:[y.jsxs("div",{className:"kglass",style:{borderRadius:20,overflow:"hidden",position:"relative",background:"#0f172a"},children:[y.jsx(tb,{}),y.jsxs("div",{style:{position:"absolute",bottom:10,left:10,right:10,display:"flex",gap:8,flexWrap:"wrap"},children:[y.jsx("span",{className:"kglass mono",style:{fontSize:10,padding:"6px 10px",borderRadius:999},children:"NEURAL OSCILLATIONS"}),y.jsx("span",{className:"kglass mono",style:{fontSize:10,padding:"6px 10px",borderRadius:999},children:"1/f · aperiodic"})]})]}),y.jsxs("div",{className:"kglass",style:{position:"absolute",bottom:-16,left:-8,borderRadius:14,padding:"10px 12px",display:"flex",gap:10,alignItems:"center",maxWidth:280},children:[y.jsx("div",{style:{width:54,height:54,borderRadius:10,background:"linear-gradient(135deg,#6366f1,#06b6d4)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:12},children:"UCSD"}),y.jsxs("div",{children:[y.jsx("div",{style:{fontWeight:700,fontSize:13},children:"UC San Diego"}),y.jsx("div",{className:"mono",style:{fontSize:10,color:"#64748b"},children:"B.S. Math-CS · Provost Honors · PATHS/Golden Pyramid"})]})]})]})]})})}),y.jsxs("div",{className:"kenton-grid",children:[y.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[y.jsxs("div",{className:"kglass",style:{borderRadius:16,padding:16},children:[y.jsx("div",{className:"mono",style:{fontSize:10,letterSpacing:2,color:"#6366f1"},children:"EXPERIENCE"}),y.jsxs("div",{style:{marginTop:12,borderLeft:"2px solid #e2e8f0",paddingLeft:14,display:"flex",flexDirection:"column",gap:14},children:[y.jsxs("div",{children:[y.jsx("div",{style:{fontWeight:700},children:"Machine Learning Engineer — UC San Diego, CogSci (Voytek Lab)"}),y.jsx("div",{className:"mono",style:{fontSize:11,color:"#64748b"},children:"Mar 2021 – Present · La Jolla"}),y.jsxs("ul",{style:{margin:"6px 0 0",paddingLeft:16,fontSize:13,color:"#334155",lineHeight:1.6},children:[y.jsxs("li",{children:["Deep net for brain signals — ",y.jsx("strong",{children:"98% accuracy"}),", new benchmark"]}),y.jsxs("li",{children:["Patent-pending heart-signal parametrization — ",y.jsx("strong",{children:"1000×"})," speedup"]}),y.jsx("li",{children:"Secure data collection platform — +30% research efficiency"}),y.jsxs("li",{children:[y.jsx("em",{children:"Alzheimer's & Dementia"})," 2023 — Sleep breathing patterns (co-author) — ",y.jsx("a",{href:"https://doi.org/10.1002/alz.074342",target:"_blank",rel:"noreferrer",style:{color:"#6366f1"},children:"doi:10.1002/alz.074342"})]})]})]}),y.jsxs("div",{children:[y.jsx("div",{style:{fontWeight:700},children:"Software Engineer — Mechanical Music Digest"}),y.jsx("div",{className:"mono",style:{fontSize:11,color:"#64748b"},children:"Oct 2020 – Mar 2021 · San Diego"}),y.jsx("ul",{style:{margin:"6px 0 0",paddingLeft:16,fontSize:13,color:"#334155",lineHeight:1.6},children:y.jsx("li",{children:"AI behavioral monitoring, automated compliance, newsletter distribution, VirtualDJ extensions"})})]}),y.jsxs("div",{children:[y.jsx("div",{style:{fontWeight:700},children:"Front-End Developer — UC San Diego, CSE"}),y.jsx("div",{className:"mono",style:{fontSize:11,color:"#64748b"},children:"Jun – Sep 2021"}),y.jsx("ul",{style:{margin:"6px 0 0",paddingLeft:16,fontSize:13,color:"#334155"},children:y.jsx("li",{children:"Serverless code execution — zero-infra, instant scale"})})]})]})]}),y.jsxs("div",{className:"kglass",style:{borderRadius:16,padding:16},children:[y.jsx("div",{className:"mono",style:{fontSize:10,letterSpacing:2,color:"#6366f1"},children:"TECHNICAL SKILLS"}),y.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap",marginTop:10},children:["Python","SQL","JavaScript","Go","Java","C++","PyTorch","NumPy","Pandas","Scikit-Learn","Jupyter","DNNs","DSP","Systems Programming","API Design"].map(t=>y.jsx("span",{className:"mono",style:{fontSize:11,padding:"6px 10px",borderRadius:999,background:"#f1f5f9",border:"1px solid #e2e8f0"},children:t},t))})]})]}),y.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[y.jsxs("div",{className:"kglass",style:{borderRadius:16,overflow:"hidden"},children:[y.jsx("div",{style:{width:"100%",height:36,background:"linear-gradient(90deg,#f1f5f9,#e0e7ff)"}}),y.jsxs("div",{style:{padding:14},children:[y.jsx("div",{style:{fontWeight:700},children:"Selected Projects"}),y.jsxs("ul",{style:{margin:"6px 0 0",paddingLeft:16,fontSize:13,color:"#475569",lineHeight:1.6},children:[y.jsx("li",{children:"Brain Monitoring — ML predicts mental exercise"}),y.jsx("li",{children:"CS Education — browser code execution platform"}),y.jsx("li",{children:"Optimized Stock Portfolio — linear algebra"}),y.jsx("li",{children:"Music Analytics — listening records & analytics"})]})]})]}),y.jsxs("div",{className:"kglass",style:{borderRadius:16,overflow:"hidden"},children:[y.jsx("div",{style:{width:"100%",height:36,background:"linear-gradient(90deg,#ecfeff,#f0f9ff)"}}),y.jsxs("div",{style:{padding:12},children:[y.jsx("div",{style:{fontWeight:700,fontSize:14},children:"San Diego · La Jolla"}),y.jsx("div",{style:{fontSize:12,color:"#64748b"},children:"UC San Diego Math-CS — Data Science, Neural Data Science, Stats, Algorithms"}),y.jsxs("div",{style:{marginTop:8,display:"flex",gap:8},children:[y.jsx("a",{href:"/ml",style:{fontSize:12,fontWeight:700,color:"#6366f1",textDecoration:"none"},children:"ML →"}),y.jsx("a",{href:"/code",style:{fontSize:12,color:"#475569",textDecoration:"none"},children:"Code →"}),y.jsx("a",{href:"https://doi.org/10.1002/alz.074342",target:"_blank",rel:"noreferrer",style:{fontSize:11,color:"#94a3b8"},children:"Alzheimer's & Dementia (2023) ↗"})]})]})]}),y.jsxs("div",{className:"kglass mono",style:{borderRadius:16,padding:12,fontSize:11,color:"#64748b",display:"flex",gap:8,flexWrap:"wrap"},children:[y.jsx("span",{children:"📄 Resumes in repo root"}),y.jsx("span",{children:"·"}),y.jsx("span",{children:"Highly recommended by Prof. Brad Voytek (voytek@ucsd.edu)"})]})]})]})]})]})}function rb(){const[t,e]=ht.useState("ready"),[n]=ht.useState(1),[i,r]=ht.useState({alive:0,dead:0}),[s,a]=ht.useState(0),o=i.alive+i.dead;ht.useRef(null);function l(){t==="ready"&&(e("arming"),setTimeout(()=>e("superposed"),1200))}function c(){if(t!=="superposed")return;e("measuring");let f=0;const d=setInterval(()=>{a(p=>p+1),f++,f>6&&clearInterval(d)},120);setTimeout(()=>{const p=Math.random()<.5;e(p?"alive":"dead"),r(v=>({alive:v.alive+(p?1:0),dead:v.dead+(p?0:1)}))},1100)}function h(){e("ready"),a(0)}return y.jsxs(Sr,{title:"",children:[y.jsx("style",{children:`
        .avery-root{font-family:-apple-system,BlinkMacSystemFont,'SF Pro Display',system-ui,sans-serif; color:#e2e8f0; margin:0; padding:28px 0 32px; overflow:hidden; border-radius:0; background:#020617; position:relative; font-size:16px; line-height:1.55; min-height: calc(100vh - 140px)}
        .avery-bg{position:absolute; top:0; left:0; right:0; bottom:0; background:
          radial-gradient(700px 420px at 18% 8%, rgba(236,72,153,0.30), transparent 62%),
          radial-gradient(720px 480px at 88% 92%, rgba(6,182,212,0.24), transparent 62%),
          radial-gradient(560px 520px at 52% 48%, rgba(139,92,246,0.16), transparent 72%),
          linear-gradient(180deg,#020617 0%, #0b1220 100%); z-index:0}
        .avery-grid{position:absolute; top:0; left:0; right:0; bottom:0; opacity:0.06; background-image: linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px); background-size:36px 36px; z-index:0}
        .glass{-webkit-backdrop-filter:blur(18px) saturate(1.35); backdrop-filter:blur(18px) saturate(1.35); background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.10); box-shadow: 0 10px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.14)}
        @supports not ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px))) { .glass{ background:rgba(15,23,42,0.88) } }
        .neon{box-shadow: 0 0 14px rgba(236,72,153,0.55), 0 0 36px rgba(6,182,212,0.32), inset 0 0 14px rgba(255,255,255,0.06)}
        .mono{font-family:'JetBrains Mono',ui-monospace,Menlo,monospace; letter-spacing:0.02em}
        @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @keyframes wave{0%{stroke-dashoffset:0}100%{stroke-dashoffset:40}}
        @keyframes glowPulse{0%{filter:drop-shadow(0 0 6px #ec4899)}50%{filter:drop-shadow(0 0 16px #06b6d4)}100%{filter:drop-shadow(0 0 6px #ec4899)}}
        @keyframes decayFlash{0%{opacity:0}15%{opacity:1}30%{opacity:0}100%{opacity:0}}
        @keyframes doomReveal{from{opacity:0;filter:brightness(3) saturate(0)}to{opacity:1;filter:brightness(1) saturate(1)}}
        @keyframes doomFlash{0%{opacity:.9}5%{opacity:.06}10%{opacity:.32}16%,100%{opacity:0}}
        @keyframes grainWalk{0%,100%{transform:translate(0,0)}25%{transform:translate(2%,-3%)}50%{transform:translate(-3%,1%)}75%{transform:translate(1%,3%)}}
        @keyframes scanFall{from{transform:translateY(-12vh)}to{transform:translateY(112vh)}}
        @keyframes liveBlink{50%{opacity:.28;box-shadow:0 0 2px #ff3b17}}
        @keyframes signalDie{from{stroke-dashoffset:0}to{stroke-dashoffset:-110}}
        @keyframes meteorFall{0%{transform:translate3d(0,-35vh,0) rotate(-32deg) scaleY(var(--scale));opacity:0}8%{opacity:1}72%,100%{transform:translate3d(-48vw,112vh,0) rotate(-32deg) scaleY(var(--scale));opacity:0}}
        @keyframes blastPulse{0%,100%{transform:scale(.72);opacity:.4}50%{transform:scale(1.15);opacity:.95}}
        @keyframes smokeBillow{0%{transform:translate3d(0,22%,0) scale(.75);opacity:.3}50%{transform:translate3d(-4%,-8%,0) scale(1.08);opacity:.75}100%{transform:translate3d(7%,-36%,0) scale(1.42);opacity:0}}
        @keyframes flameDance{0%,100%{transform:rotate(42deg) scale(1,.92);filter:brightness(.9)}35%{transform:rotate(49deg) scale(.82,1.18);filter:brightness(1.5)}70%{transform:rotate(37deg) scale(1.14,.78)}}
        @keyframes cityCollapse{0%,46%{transform:rotate(0) translate(0,0)}72%,100%{transform:rotate(14deg) translate(9px,12px)}}
        @keyframes ashDrift{0%{transform:translate3d(0,-8vh,0) rotate(0);opacity:0}15%{opacity:.9}100%{transform:translate3d(-14vw,108vh,0) rotate(480deg);opacity:0}}
        .avery-shell{max-width:1280px; margin:0 auto; position:relative; z-index:2; padding:0 20px}
        .avery-main{display:grid; grid-template-columns: 1.45fr 0.9fr; gap:20px; padding:20px 0 0}
        .avery-title{font-size: clamp(22px, 2.6vw, 30px); font-weight:800; letter-spacing:-0.04em; line-height:1.05}
        .avery-btn{min-height:44px; padding:0 18px; border-radius:999px; font-weight:700; font-size:13.5px; cursor:pointer; transition: transform 0.12s, box-shadow 0.2s, opacity 0.2s; display:inline-flex; align-items:center; gap:8px}
        .avery-btn:active{transform:scale(0.98)}
        .avery-btn-primary{color:#fff; background:linear-gradient(90deg,#ec4899,#7c3aed); border:none; box-shadow: 0 6px 20px rgba(236,72,153,0.45)}
        .avery-btn-primary:hover{box-shadow: 0 8px 28px rgba(236,72,153,0.6), 0 0 0 3px rgba(236,72,153,0.18)}
        .avery-btn-ghost{color:#e2e8f0; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12)}
        .avery-btn-ghost:hover{background:rgba(255,255,255,0.10)}
        .avery-dead-root{padding:0;min-height:calc(100vh - 140px);background:#030205}
        .avery-dead-root .avery-shell{max-width:none;padding:0}
        .doomsday{position:relative;min-height:clamp(650px,calc(100vh - 140px),920px);overflow:hidden;background:radial-gradient(circle at 50% 40%,#27100d,#030205 60%);color:#f4e8df;isolation:isolate;animation:doomReveal 1.2s cubic-bezier(.2,.8,.2,1)}
        .doomsday:before{content:"";position:absolute;inset:0;z-index:2;pointer-events:none;background:#fff;animation:doomFlash 2.4s ease-out forwards}
        .doom-vignette{position:absolute;inset:-2px;z-index:2;pointer-events:none;background:radial-gradient(ellipse 70% 65% at 51% 44%,transparent 28%,rgba(3,1,2,.36) 66%,rgba(3,1,2,.96) 100%),linear-gradient(180deg,rgba(2,1,2,.6),transparent 25%,transparent 66%,rgba(2,1,2,.9))}
        .doom-grain{position:absolute;inset:-40%;z-index:3;pointer-events:none;opacity:.11;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E");animation:grainWalk .25s steps(2) infinite}
        .doom-scan{position:absolute;z-index:4;left:0;right:0;height:14vh;pointer-events:none;background:linear-gradient(180deg,transparent,rgba(255,104,50,.055),transparent);animation:scanFall 7s linear infinite}
        .doom-topline{position:absolute;z-index:8;top:0;left:0;right:0;padding:22px 26px;display:flex;justify-content:space-between;gap:18px;border-bottom:1px solid rgba(255,185,143,.12);background:linear-gradient(180deg,rgba(3,1,2,.6),transparent);font-size:9px;letter-spacing:.22em;color:rgba(255,222,202,.68)}
        .doom-live{display:inline-block;width:6px;height:6px;border-radius:50%;margin-right:9px;background:#ff3b17;box-shadow:0 0 12px #ff3b17;animation:liveBlink .8s infinite}
        .meteor-field,.ash-field{position:absolute;inset:0;z-index:5;overflow:hidden;pointer-events:none}.meteor{position:absolute;left:var(--x);top:-18vh;width:3px;height:24vh;border-radius:50%;background:linear-gradient(180deg,transparent 0,#ff4a18 72%,#fff1ba 100%);box-shadow:0 0 9px #ff3c0c,0 0 25px rgba(255,73,16,.8);transform-origin:bottom;animation:meteorFall 3.4s var(--delay) linear infinite}.meteor:after{content:"";position:absolute;bottom:-5px;left:-5px;width:13px;height:13px;border-radius:50%;background:#fff4bc;box-shadow:0 0 18px 8px #ff3b0a}
        .sky-blast{position:absolute;z-index:4;width:clamp(90px,14vw,190px);aspect-ratio:1;border-radius:50%;pointer-events:none;background:radial-gradient(circle,#fff9cf 0 4%,#ffae27 10%,rgba(255,48,5,.92) 24%,rgba(116,13,3,.55) 49%,transparent 72%);filter:blur(.3px) drop-shadow(0 0 22px #ff2c00);animation:blastPulse 1.5s ease-in-out infinite}.sky-blast:after{content:"";position:absolute;inset:36%;border-radius:46% 54% 43% 57%;background:#fff;box-shadow:0 -28px 32px #ff5a0a,28px 15px 28px #ff2a00,-24px 19px 33px #ff7a11}.sky-blast-one{left:8%;top:28%}.sky-blast-two{right:9%;top:17%;transform:scale(.62);animation-delay:-.7s}
        .ash-field i{position:absolute;left:var(--x);top:-2%;width:3px;height:7px;background:#d58455;box-shadow:0 0 5px #ff5128;animation:ashDrift var(--duration) var(--delay) linear infinite}.ash-field i:nth-child(3n){width:5px;height:2px;background:#5f514d;box-shadow:none}.ash-field i:nth-child(4n){background:#ffd0a2}
        .city-destruction{position:absolute;z-index:6;left:0;right:0;bottom:0;height:58%;pointer-events:none;background:linear-gradient(0deg,rgba(3,1,1,.98) 0,rgba(25,4,2,.76) 16%,transparent 62%)}
        .city-destruction:before{content:"";position:absolute;left:-10%;right:-10%;bottom:19%;height:30%;background:radial-gradient(ellipse at center,rgba(255,75,8,.66),rgba(128,15,2,.28) 38%,transparent 69%);filter:blur(18px)}
        .ruined-skyline{position:absolute;z-index:2;inset:0 0 9%}.ruin{position:absolute;left:var(--x);bottom:0;width:var(--w);height:var(--h);display:block;transform-origin:bottom right;background:linear-gradient(90deg,#050303,#16100e 48%,#030202);border-left:1px solid rgba(255,102,48,.18);filter:drop-shadow(0 0 12px rgba(0,0,0,.95));clip-path:polygon(0 12%,10% 8%,18% 13%,27% 2%,38% 9%,48% 4%,58% 16%,70% 7%,79% 12%,88% 4%,100% 14%,100% 100%,0 100%)}.ruin-1{clip-path:polygon(0 5%,16% 15%,29% 7%,43% 18%,58% 3%,72% 14%,86% 9%,100% 19%,100% 100%,0 100%)}.ruin-2{clip-path:polygon(0 17%,13% 10%,24% 20%,37% 5%,52% 13%,66% 3%,81% 18%,100% 8%,100% 100%,0 100%)}.ruin b{position:absolute;inset:17% 14% 8%;opacity:.72;background:repeating-linear-gradient(90deg,transparent 0 9px,rgba(255,85,19,.7) 10px 13px,transparent 14px 21px),repeating-linear-gradient(0deg,transparent 0 13px,rgba(255,181,72,.2) 14px 18px,transparent 19px 28px);mix-blend-mode:screen;filter:drop-shadow(0 0 4px #ff3c00)}.ruin b:after{content:"";position:absolute;inset:0;background:linear-gradient(115deg,transparent 45%,#050303 46% 59%,transparent 60%),linear-gradient(70deg,transparent 55%,#080504 56% 68%,transparent 69%)}.ruin-falling{animation:cityCollapse 8s 1.4s cubic-bezier(.5,0,.8,1) forwards}
        .smoke-column{position:absolute;z-index:1;bottom:9%;width:28%;height:95%;border-radius:50%;opacity:.45;background:radial-gradient(circle at 50% 75%,#2f1711 0 17%,rgba(31,23,22,.9) 31%,rgba(8,7,8,.7) 52%,transparent 72%);filter:blur(13px);animation:smokeBillow 7s ease-out infinite}.smoke-column:after{content:"";position:absolute;inset:4% 20% 35%;border-radius:50%;background:#160e0d;box-shadow:40px -25px 42px #211513,-35px -60px 50px #0b0909}.smoke-one{left:8%}.smoke-two{left:39%;animation-delay:-3.2s;transform:scale(1.2)}.smoke-three{right:3%;animation-delay:-5.4s;transform:scale(.82)}
        .broken-bridge{position:absolute;z-index:3;left:-2%;bottom:5%;width:104%;height:27%;overflow:visible;filter:drop-shadow(0 4px 5px #000)}.broken-bridge path{fill:none;stroke:#0a0706;stroke-width:15;vector-effect:non-scaling-stroke;stroke-linecap:square}.broken-bridge path:nth-child(2){stroke-width:6}.broken-bridge .bridge-cable{stroke:#24100b;stroke-width:3}
        .fireline{position:absolute;z-index:4;left:-3%;right:-3%;bottom:-5%;height:33%;background:radial-gradient(ellipse at 50% 110%,#ffd65a 0,#ff5a09 24%,rgba(158,18,2,.86) 47%,transparent 72%);filter:drop-shadow(0 -8px 18px rgba(255,47,0,.75))}.flame{position:absolute;left:var(--x);bottom:8%;width:var(--size);height:calc(var(--size) * 1.65);display:block;border-radius:75% 8% 68% 45%;background:linear-gradient(135deg,#fff7bd 0 14%,#ffae19 32%,#ff3208 68%,rgba(111,8,0,.2));box-shadow:0 0 12px #ff4a0a;transform-origin:50% 100%;animation:flameDance .48s var(--delay) ease-in-out infinite}
        .doom-end{position:absolute;z-index:7;left:clamp(20px,5vw,68px);top:17%;display:flex;flex-direction:column;color:#fff1e8;text-shadow:0 3px 24px #000}.doom-end strong{font-family:Impact,'Arial Black',sans-serif;font-size:clamp(42px,7vw,94px);line-height:.85;letter-spacing:-.045em}.doom-end span{margin-top:12px;font-size:8px;letter-spacing:.36em;color:#ff9b73}
        .doom-bottom{position:absolute;z-index:10;right:20px;bottom:18px}
        .doom-reset{flex:none;padding:13px 15px;border:1px solid rgba(255,151,108,.38);background:rgba(28,6,4,.46);color:#ffc1a6;font-size:8px;letter-spacing:.2em;cursor:pointer;transition:.2s ease}.doom-reset:hover{background:#ff4a1f;color:#120301;border-color:#ff4a1f;box-shadow:0 0 30px rgba(255,69,25,.35)}.doom-reset span{margin-left:12px;font-size:13px}
        @media (max-width: 960px){ .avery-main{grid-template-columns:1fr} .avery-shell{max-width:720px} }
        @media (max-width: 760px){.doomsday{min-height:720px}.doom-topline{padding:17px 18px;font-size:7px}.doom-end{top:13%;left:18px}.doom-end span{font-size:6px}.city-destruction{height:54%}.sky-blast-one{left:-4%;top:32%}.sky-blast-two{right:-2%;top:24%}.doom-bottom{right:12px;bottom:12px}.doom-reset{padding:10px 12px}.ruin b{background-size:16px 24px}.broken-bridge{height:22%}}
        @media (max-width: 640px){ .avery-root{border-radius:12px; margin:-0.75rem -0.75rem 0} .avery-dead-root{border-radius:0}.avery-title{font-size:22px} }
        @media (prefers-reduced-motion:reduce){.doomsday,.doomsday:before,.doom-grain,.doom-scan,.doom-live,.meteor,.sky-blast,.ash-field i,.smoke-column,.flame,.ruin-falling{animation:none!important}.doom-grain{display:none}}
      `}),y.jsxs("div",{className:`avery-root ${t==="dead"?"avery-dead-root":""}`,children:[t!=="dead"&&y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"avery-bg"}),y.jsx("div",{className:"avery-grid"})]}),y.jsxs("div",{className:"avery-shell",children:[t!=="dead"&&y.jsxs("div",{style:{padding:"18px 18px 0",display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12},children:[y.jsxs("div",{children:[y.jsx("div",{className:"mono",style:{fontSize:10,letterSpacing:3,opacity:.7,color:"#22d3ee"},children:"AVERY LAB // SCHRÖDINGER PROTOCOL"}),y.jsx("div",{className:"avery-title",style:{background:"linear-gradient(90deg,#f472b6,#22d3ee,#a78bfa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"The Cat Experiment"}),y.jsx("div",{style:{fontSize:12,opacity:.75},children:"Physically accurate · sealed box · single ²¹⁰Po atom · Geiger + hammer + HCN vial · unitary evolution until measurement"})]}),y.jsxs("div",{className:"glass",style:{borderRadius:12,padding:"10px 14px",minWidth:160},children:[y.jsx("div",{className:"mono",style:{fontSize:10,opacity:.7},children:"STATE VECTOR"}),y.jsxs("div",{className:"mono",style:{fontSize:13},children:["|ψ⟩ = ",y.jsx("span",{style:{color:t==="alive"?"#10b981":t==="dead"?"#ef4444":"#f472b6"},children:t==="alive"?"1|alive⟩":t==="dead"?"1|dead⟩":t==="superposed"||t==="measuring"?"(|alive⟩+|dead⟩)/√2":"—"})]}),y.jsxs("div",{className:"mono",style:{fontSize:10,opacity:.6},children:["P(alive)=P(dead)=50% · t½=",n,"s · HFS"]})]})]}),t==="dead"?y.jsx(eb,{onReset:h}):y.jsxs("div",{className:"avery-main",children:[y.jsxs("div",{className:"glass neon",style:{borderRadius:16,padding:14,position:"relative",overflow:"hidden"},children:[y.jsx("div",{className:"mono",style:{fontSize:10,letterSpacing:2,opacity:.7,marginBottom:8},children:"APPARATUS — CROSS SECTION"}),y.jsx("div",{style:{background:"rgba(0,0,0,0.35)",borderRadius:12,padding:8,border:"1px solid rgba(255,255,255,0.08)"},children:y.jsxs("svg",{viewBox:"0 0 640 360",width:"100%",style:{display:"block",maxHeight:360},children:[y.jsx("rect",{x:12,y:12,width:616,height:336,rx:18,fill:"none",stroke:"rgba(255,255,255,0.12)",strokeWidth:1.2}),y.jsx("text",{x:22,y:28,fill:"#94a3b8",fontSize:8,className:"mono",children:"LEAD SHIELD · 5cm · THERMALLY ISOLATED"}),y.jsxs("g",{children:[y.jsx("rect",{x:28,y:48,width:160,height:120,rx:12,fill:"rgba(139,92,246,0.12)",stroke:"#a78bfa",strokeWidth:1.2}),y.jsx("text",{x:36,y:64,fill:"#c4b5fd",fontSize:9,className:"mono",children:"ATOM CHAMBER"}),y.jsx("text",{x:36,y:76,fill:"#c4b5fd",fontSize:7,className:"mono",children:"single ²¹⁰Po · α-decay · t½=1s"}),y.jsx("circle",{cx:108,cy:112,r:18,fill:"#7c3aed",stroke:"#ddd6fe",strokeWidth:1,opacity:t==="superposed"?.95:.7,style:{animation:t==="superposed"?"glowPulse 1.2s infinite":""}}),y.jsx("circle",{cx:108,cy:112,r:4,fill:"#fde68a"}),y.jsx("ellipse",{cx:108,cy:112,rx:38,ry:18,fill:"none",stroke:"#22d3ee",strokeWidth:.9,opacity:.5}),y.jsx("ellipse",{cx:108,cy:112,rx:18,ry:38,fill:"none",stroke:"#ec4899",strokeWidth:.9,opacity:.5}),y.jsx("circle",{cx:146,cy:112,r:3,fill:"#22d3ee",style:{animation:t!=="ready"?"spin 1s linear infinite":""}}),y.jsx("path",{d:"M 28 148 Q 60 132 92 148 T 156 148 T 188 148",fill:"none",stroke:"#f472b6",strokeWidth:1.2,strokeDasharray:"6 4",style:{animation:"wave 1s linear infinite",opacity:t==="superposed"?1:.25}}),(t==="alive"||t==="dead")&&y.jsx("text",{x:108,y:134,textAnchor:"middle",fill:t==="dead"?"#f87171":"#34d399",fontSize:7,className:"mono",children:t==="dead"?"DECAYED → α":"NOT DECAYED"})]}),y.jsxs("g",{children:[y.jsx("rect",{x:200,y:78,width:110,height:52,rx:10,fill:"rgba(6,182,212,0.14)",stroke:"#22d3ee",strokeWidth:1.2}),y.jsx("text",{x:208,y:94,fill:"#67e8f9",fontSize:8,className:"mono",children:"GEIGER-MÜLLER"}),y.jsx("rect",{x:214,y:102,width:82,height:10,rx:5,fill:t==="measuring"||t==="dead"?"#22d3ee":"#334155"}),y.jsx("rect",{x:214,y:102,width:t==="measuring"?s%4*20+10:t==="dead"?82:8,height:10,rx:5,fill:"#f472b6",style:{transition:"width 0.15s"}}),y.jsx("circle",{cx:304,cy:107,r:4,fill:t==="measuring"?"#fde68a":"#64748b",style:{animation:t==="measuring"?"decayFlash 0.25s infinite":""}}),y.jsx("text",{x:208,y:124,fill:"#94a3b8",fontSize:6,className:"mono",children:"Ar + HV · avalanche"}),y.jsx("path",{d:"M188 112 H200",stroke:"#67e8f9",strokeWidth:1.2})]}),y.jsxs("g",{children:[y.jsx("rect",{x:328,y:66,width:86,height:74,rx:10,fill:"rgba(251,146,60,0.12)",stroke:"#fb923c",strokeWidth:1.2}),y.jsx("text",{x:336,y:82,fill:"#fed7aa",fontSize:8,className:"mono",children:"HAMMER RELAY"}),y.jsx("rect",{x:348,y:90,width:46,height:28,rx:6,fill:t==="dead"?"#fb923c":"#1f2937",stroke:"#fdba74"}),y.jsx("line",{x1:371,y1:118,x2:371,y2:148,stroke:"#fdba74",strokeWidth:3,strokeLinecap:"round",style:{transform:t==="dead"?"rotate(42deg)":"rotate(0deg)",transformOrigin:"371px 118px",transition:"transform 0.4s"}}),y.jsx("text",{x:336,y:134,fill:"#94a3b8",fontSize:6,className:"mono",children:t==="dead"?"TRIGGERED":"ARMED"}),y.jsx("path",{d:"M310 107 H328",stroke:"#fb923c",strokeWidth:1.2})]}),y.jsxs("g",{children:[y.jsx("rect",{x:434,y:88,width:44,height:56,rx:8,fill:t==="dead"?"rgba(239,68,68,0.28)":"rgba(16,185,129,0.14)",stroke:t==="dead"?"#ef4444":"#10b981",strokeWidth:1.2}),y.jsx("text",{x:438,y:104,fill:t==="dead"?"#fecaca":"#6ee7b7",fontSize:6,className:"mono",children:"HCN"}),y.jsx("text",{x:438,y:112,fill:t==="dead"?"#fecaca":"#6ee7b7",fontSize:6,className:"mono",children:"VIAL"}),y.jsx("path",{d:"M 442 122 Q 456 130 470 122",stroke:t==="dead"?"#fecaca":"#6ee7b7",strokeWidth:1,fill:"none",opacity:t==="dead"?.9:.4,style:{strokeDasharray:t==="dead"?"0":"2 3"}}),t==="dead"&&y.jsx("text",{x:456,y:138,textAnchor:"middle",fill:"#fecaca",fontSize:6,className:"mono",children:"SHATTERED"}),y.jsx("path",{d:"M414 107 H434",stroke:"#fb923c",strokeWidth:1.2})]}),y.jsxs("g",{children:[y.jsx("rect",{x:28,y:190,width:450,height:148,rx:16,fill:t==="superposed"?"rgba(255,255,255,0.04)":t==="alive"?"rgba(16,185,129,0.10)":t==="dead"?"rgba(239,68,68,0.10)":"rgba(15,23,42,0.5)",stroke:t==="alive"?"#10b981":t==="dead"?"#ef4444":"rgba(255,255,255,0.14)",strokeWidth:1.4}),y.jsx("text",{x:36,y:206,fill:"#e2e8f0",fontSize:9,className:"mono",children:"CAT CHAMBER · SEALED · NO DECOHERENCE UNTIL MEASURED"}),y.jsx("text",{x:248,y:278,textAnchor:"middle",fontSize:t==="superposed"?56:68,style:{filter:t==="superposed"?"blur(0.3px) brightness(1.1)":"",opacity:t==="superposed"?.92:1,transition:"all 0.4s"},children:t==="superposed"?"🐱":t==="alive"?"😸":t==="dead"?"😵":"📦"}),t==="superposed"&&y.jsxs(y.Fragment,{children:[y.jsx("text",{x:248,y:300,textAnchor:"middle",fill:"#f472b6",fontSize:8,className:"mono",children:"|ψ_cat⟩ = (|alive⟩ + |dead⟩)/√2"}),y.jsxs("g",{opacity:.75,children:[y.jsx("text",{x:180,y:250,fill:"#22d3ee",fontSize:10,children:"😺"}),y.jsx("text",{x:300,y:250,fill:"#f87171",fontSize:10,children:"💀"}),y.jsx("path",{d:"M200 255 Q248 235 296 255",fill:"none",stroke:"url(#grad)",strokeWidth:1.2,strokeDasharray:"4 3"})]})]}),t==="measuring"&&y.jsx("text",{x:248,y:300,textAnchor:"middle",fill:"#fde68a",fontSize:9,className:"mono",children:"DECOHERING… ENTANGLING WITH APPARATUS"}),t==="alive"&&y.jsx("text",{x:248,y:302,textAnchor:"middle",fill:"#6ee7b7",fontSize:9,className:"mono",children:"COLLAPSED → |alive⟩ · NO DECAY OBSERVED"}),t==="dead"&&y.jsx("text",{x:248,y:298,textAnchor:"middle",fill:"#fecaca",fontSize:9,className:"mono",children:"COLLAPSED → |dead⟩ · WORLD BURNS"}),t==="dead"&&y.jsx("text",{x:248,y:312,textAnchor:"middle",fill:"#f87171",fontSize:7,className:"mono",children:"nuclear ash · hymn to Virgil: facilis descensus Averno"}),y.jsx("path",{d:"M108 168 V190",stroke:"#a78bfa",strokeWidth:1,strokeDasharray:"5 4",opacity:.6}),y.jsx("path",{d:"M456 144 V190",stroke:t==="dead"?"#ef4444":"#10b981",strokeWidth:1,strokeDasharray:"5 4",opacity:.65})]}),y.jsxs("g",{children:[y.jsx("rect",{x:496,y:48,width:132,height:290,rx:12,fill:"rgba(255,255,255,0.05)",stroke:"rgba(255,255,255,0.08)"}),y.jsx("text",{x:506,y:66,fill:"#e2e8f0",fontSize:8,className:"mono",children:"PHYSICS"}),y.jsx("text",{x:506,y:80,fill:"#94a3b8",fontSize:6,className:"mono",children:"U(t)=exp(-iHt/ħ) · unitary"}),y.jsx("text",{x:506,y:92,fill:"#94a3b8",fontSize:6,className:"mono",children:"measurement = projection"}),y.jsx("text",{x:506,y:108,fill:"#f472b6",fontSize:7,className:"mono",children:"Born rule: |α|²=|β|²=½"}),y.jsx("text",{x:506,y:124,fill:"#22d3ee",fontSize:7,className:"mono",children:"atom → Geiger entangled"}),y.jsx("text",{x:506,y:136,fill:"#a78bfa",fontSize:7,className:"mono",children:"cat entangled → macro"}),y.jsx("text",{x:506,y:152,fill:"#fde68a",fontSize:7,className:"mono",children:"observer collapses"}),y.jsx("line",{x1:506,y1:162,x2:618,y2:162,stroke:"rgba(255,255,255,0.08)"}),y.jsx("text",{x:506,y:176,fill:"#94a3b8",fontSize:6,className:"mono",children:"TRIAL STATS"}),y.jsxs("text",{x:506,y:190,fill:"#6ee7b7",fontSize:9,className:"mono",children:["ALIVE ",i.alive]}),y.jsxs("text",{x:566,y:190,fill:"#f87171",fontSize:9,className:"mono",children:["DEAD ",i.dead]}),y.jsxs("text",{x:506,y:204,fill:"#cbd5e1",fontSize:7,className:"mono",children:["N=",o," · expect 50/50"]})]}),y.jsx("defs",{children:y.jsxs("linearGradient",{id:"grad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[y.jsx("stop",{offset:"0%",stopColor:"#22d3ee"}),y.jsx("stop",{offset:"100%",stopColor:"#f472b6"})]})})]})}),y.jsxs("div",{style:{display:"flex",gap:8,marginTop:12,flexWrap:"wrap"},children:[t==="ready"&&y.jsx("button",{onClick:l,className:"avery-btn avery-btn-primary",children:"⚡ Arm atom — seal box"}),t==="arming"&&y.jsx("span",{className:"mono",style:{fontSize:12,padding:"10px 0",color:"#fde68a"},children:"Sealing… evacuating decoherence…"}),t==="superposed"&&y.jsx("button",{onClick:c,className:"avery-btn avery-btn-primary",children:"👁️ Measure — open box"}),t==="measuring"&&y.jsx("span",{className:"mono",style:{fontSize:12,padding:"10px 0",color:"#fde68a"},children:"Collapsing wavefunction…"}),(t==="alive"||t==="dead")&&y.jsx("button",{onClick:h,className:"avery-btn avery-btn-ghost",children:"↺ New run — re-prepare |ψ⟩"}),o>0&&y.jsx("button",{onClick:()=>r({alive:0,dead:0}),className:"avery-btn",style:{background:"transparent",color:"#94a3b8",border:"1px solid rgba(148,163,184,0.25)"},children:"Reset stats"})]})]}),y.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[y.jsxs("div",{className:"glass",style:{borderRadius:16,padding:14},children:[y.jsx("div",{className:"mono",style:{fontSize:10,letterSpacing:2,opacity:.7},children:"WAVEFUNCTION"}),y.jsxs("div",{className:"mono",style:{fontSize:11,marginTop:6,lineHeight:1.6},children:[y.jsx("span",{style:{color:"#f472b6"},children:"|ψ(t)⟩"})," = α(t)|not decayed⟩|alive⟩ + β(t)|decayed⟩|dead⟩",y.jsx("br",{}),y.jsxs("span",{style:{opacity:.6},children:["α = e",y.jsx("sup",{children:"-λt/2"}),", |α|² = e",y.jsx("sup",{children:"-λt"}),", |β|² = 1-e",y.jsx("sup",{children:"-λt"})]}),y.jsx("br",{}),y.jsx("span",{style:{opacity:.6},children:"Half-life 1s ⇒ λ=ln2≈0.693 s⁻¹. At t=1s, P=½."})]}),y.jsxs("div",{style:{marginTop:10,height:54,background:"rgba(0,0,0,0.35)",borderRadius:10,padding:6,display:"flex",alignItems:"center",gap:6},children:[y.jsxs("div",{style:{flex:1,height:8,borderRadius:6,background:"#0f172a",overflow:"hidden",display:"flex"},children:[y.jsx("div",{style:{width:`${t==="alive"?100:t==="dead"?0:50}%`,background:"linear-gradient(90deg,#10b981,#22d3ee)",transition:"width 0.6s"}}),y.jsx("div",{style:{flex:1,background:"linear-gradient(90deg,#ef4444,#f472b6)",transition:"width 0.6s",opacity:t==="superposed"?.9:t==="alive"?.15:t==="dead"?1:.9}})]}),y.jsxs("div",{className:"mono",style:{fontSize:10,minWidth:64,textAlign:"right"},children:[y.jsx("span",{style:{color:"#34d399"},children:t==="alive"?"100%":t==="dead"?"0%":"50%"}),y.jsx("span",{style:{opacity:.5},children:" / "}),y.jsx("span",{style:{color:"#f87171"},children:t==="dead"?"100%":t==="alive"?"0%":"50%"})]})]}),y.jsxs("div",{style:{marginTop:8,display:"flex",gap:6},children:[y.jsxs("span",{className:"mono",style:{fontSize:10,padding:"4px 8px",borderRadius:20,background:"rgba(16,185,129,0.14)",color:"#6ee7b7",border:"1px solid rgba(16,185,129,0.3)"},children:["alive ",i.alive]}),y.jsxs("span",{className:"mono",style:{fontSize:10,padding:"4px 8px",borderRadius:20,background:"rgba(239,68,68,0.14)",color:"#fecaca",border:"1px solid rgba(239,68,68,0.3)"},children:["dead ",i.dead]}),y.jsxs("span",{className:"mono",style:{fontSize:10,padding:"4px 8px",borderRadius:20,background:"rgba(255,255,255,0.06)",color:"#cbd5e1"},children:["N=",o]})]})]}),y.jsxs("div",{className:"glass",style:{borderRadius:16,padding:14},children:[y.jsx("div",{className:"mono",style:{fontSize:10,letterSpacing:2,opacity:.7},children:"WHAT YOU'RE SEEING"}),y.jsxs("ul",{style:{margin:"8px 0 0",paddingLeft:16,fontSize:12,lineHeight:1.5,opacity:.85},children:[y.jsxs("li",{children:[y.jsx("strong",{children:"Atom chamber:"})," single ²¹⁰Po nucleus. α-decay is quantum tunneling — truly random, no hidden variable. Orbitals shimmer while superposed."]}),y.jsxs("li",{children:[y.jsx("strong",{children:"Geiger + relay + vial:"})," decay → avalanche → hammer shatters HCN. Chain is unitary until you look."]}),y.jsxs("li",{children:[y.jsx("strong",{children:"Cat:"})," entangled with atom. Not “unknown” — ",y.jsx("em",{children:"undetermined"}),". Measurement projects to |alive⟩ or |dead⟩ with Born probabilities."]}),y.jsxs("li",{children:[y.jsx("strong",{children:"Repeat:"})," each run re-prepares |ψ⟩. Over many trials, ~50/50. No memory."]})]})]}),y.jsxs("div",{className:"glass",style:{borderRadius:16,padding:12,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsx("div",{className:"mono",style:{fontSize:10,opacity:.6},children:"Avery’s lab • punk-rock liquid glass • neon cyber-physics"}),y.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:t==="superposed"?"#f472b6":t==="alive"?"#10b981":t==="dead"?"#ef4444":"#334155",boxShadow:`0 0 10px ${t==="superposed"?"#ec4899":t==="alive"?"#10b981":t==="dead"?"#ef4444":"transparent"}`,animation:t!=="ready"?"glowPulse 1s infinite":""}})]})]})]})]})]})]})}function sb(){var r,s,a,o,l,c,h,f,d,p,v,E,m,u,g,S,M,T,A,b,x,C,P,L,B,q,ee,z,K,V;const[t,e]=ht.useState(null),[n,i]=ht.useState(null);return ht.useEffect(()=>{fetch("/ml/validate.json").then(D=>D.json()).then(e).catch(()=>fetch("./ml/validate.json").then(D=>D.json()).then(e).catch(D=>i(String(D)))),t||fetch("/docs/ml/validate.json").then(D=>D.json()).then(e).catch(()=>{})},[]),ht.useEffect(()=>{t||fetch("ml/validate.json").then(D=>D.json()).then(e).catch(()=>{})},[t]),y.jsxs(Sr,{title:"",children:[y.jsx("style",{children:".ml-root{margin:0 -24px; padding:24px; background:#f8fafc} .ml-shell{max-width:1100px; margin:0 auto} .mono{font-family:'JetBrains Mono',monospace}"}),y.jsx("div",{className:"ml-root",children:y.jsxs("div",{className:"ml-shell",children:[y.jsx("div",{className:"mono",style:{fontSize:10,letterSpacing:2,color:"#6366f1"},children:"ML LAB — TREASURY · YIELD CURVE · P/E · M2 · DXY · OIL · GOLD · SILVER · GSR · REIT · REPO · 200MA"}),y.jsx("div",{style:{fontSize:26,fontWeight:800,letterSpacing:"-0.02em"},children:"SPY & NVDA — next-day NN"}),y.jsxs("p",{style:{fontSize:13,color:"#475569"},children:["17-feature MLP 32×16 — adds ",y.jsx("strong",{children:"P/E (SPY 27.7, NVDA ~35)"})," and ",y.jsx("strong",{children:"10Y−2Y curve"}),". Trained 5y, validate holdout. WASM via JSON."]}),n&&y.jsxs("div",{style:{color:"#ef4444",fontSize:12},children:["Load failed: ",n," — run ",y.jsx("code",{children:"python3 ml/train.py"})," to regenerate ml/*.json"]}),t?y.jsxs(y.Fragment,{children:[y.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginTop:16},children:[y.jsxs("div",{style:{background:"#fff",border:"1px solid #e2e8f0",borderRadius:14,padding:16},children:[y.jsx("div",{style:{fontWeight:700},children:"Traditional — what inputs say"}),y.jsxs("div",{className:"mono",style:{fontSize:11,marginTop:8,lineHeight:1.7,color:"#334155"},children:["Yield curve ",y.jsxs("strong",{style:{color:((r=t.traditional)==null?void 0:r.yield_curve)>0?"#10b981":"#ef4444"},children:[(a=(s=t.traditional)==null?void 0:s.yield_curve)==null?void 0:a.toFixed(2),"% ",(o=t.traditional)!=null&&o.curve_inv?" (inverted!)":""]})," — ",((l=t.traditional)==null?void 0:l.yield_curve)>0?"upward, risk-on":"inverted, caution",y.jsx("br",{}),"P/E SPY ",y.jsx("strong",{children:(h=(c=t.traditional)==null?void 0:c.pe_spy)==null?void 0:h.toFixed(1)})," ",y.jsxs("span",{style:{color:((f=t.traditional)==null?void 0:f.pe_spy_z)>1?"#ef4444":"#64748b"},children:["(z ",(p=(d=t.traditional)==null?void 0:d.pe_spy_z)==null?void 0:p.toFixed(2),")"]})," — ",((v=t.traditional)==null?void 0:v.pe_spy_z)>1?"rich":"fair",y.jsx("br",{}),"SPY vs 200MA ",y.jsxs("strong",{children:[(((E=t.traditional)==null?void 0:E.spy_vs_200)*100).toFixed(1),"%"]})," — ",((m=t.traditional)==null?void 0:m.spy_vs_200)>.05?"extended":((u=t.traditional)==null?void 0:u.spy_vs_200)>0?"above":"below",y.jsx("br",{}),"DXY ",y.jsx("strong",{children:(S=(g=t.traditional)==null?void 0:g.dxy)==null?void 0:S.toFixed(1)})]}),y.jsxs("svg",{viewBox:"0 0 300 60",style:{width:"100%",height:60,marginTop:8,background:"#f8fafc",borderRadius:8},children:[y.jsxs("text",{x:8,y:12,fontSize:7,className:"mono",fill:"#64748b",children:["10Y-2Y curve (last 5y proxy, now ",(T=(M=t.traditional)==null?void 0:M.yield_curve)==null?void 0:T.toFixed(2),"%)"]}),y.jsx("line",{x1:20,y1:30,x2:280,y2:30,stroke:"#e2e8f0"}),y.jsx("line",{x1:150,y1:20,x2:150,y2:40,stroke:"#10b981",strokeDasharray:"3 3"}),y.jsxs("text",{x:150,y:50,textAnchor:"middle",fontSize:6,className:"mono",fill:"#10b981",children:["today ",((A=t.traditional)==null?void 0:A.yield_curve)>0?"+":"",(x=(b=t.traditional)==null?void 0:b.yield_curve)==null?void 0:x.toFixed(2),"%"]}),y.jsx("circle",{cx:150+((C=t.traditional)==null?void 0:C.yield_curve)*40,cy:30,r:4,fill:((P=t.traditional)==null?void 0:P.yield_curve)>0?"#10b981":"#ef4444"})]})]}),y.jsxs("div",{style:{background:"#0f172a",color:"#e2e8f0",borderRadius:14,padding:16},children:[y.jsx("div",{className:"mono",style:{fontSize:11,color:"#22d3ee"},children:"ML TOTAL EVALUATION"}),y.jsxs("div",{style:{display:"flex",gap:12,marginTop:8},children:[y.jsxs("div",{children:[y.jsx("div",{className:"mono",style:{fontSize:10,color:"#94a3b8"},children:"SPY"}),y.jsxs("div",{style:{fontSize:20,fontWeight:800},children:["$",(L=t.pred_px_spy)==null?void 0:L.toFixed(2)," ",y.jsxs("span",{style:{fontSize:11,color:t.pred_ret_spy>0?"#34d399":"#f87171"},children:[(t.pred_ret_spy*100).toFixed(2),"%"]})]})]}),y.jsxs("div",{children:[y.jsx("div",{className:"mono",style:{fontSize:10,color:"#94a3b8"},children:"NVDA"}),y.jsxs("div",{style:{fontSize:20,fontWeight:800},children:["$",(B=t.pred_px_nvda)==null?void 0:B.toFixed(2)," ",y.jsxs("span",{style:{fontSize:11,color:t.pred_ret_nvda>0?"#34d399":"#f87171"},children:[(t.pred_ret_nvda*100).toFixed(2),"%"]})]})]})]}),y.jsxs("div",{className:"mono",style:{fontSize:10,marginTop:8,color:t.hold?"#34d399":"#f87171"},children:[t.hold?"✓ HOLD — MAE ok, toy signal":"✗ HOLD FAILED — MAE too high, toy only (not trading)"," · MAE SPY ",(t.mae_spy*100).toFixed(1),"% NVDA ",(t.mae_nvda*100).toFixed(1),"%"]}),y.jsxs("div",{className:"mono",style:{fontSize:10,marginTop:6,opacity:.6},children:["close SPY ",(q=t.last_close_spy)==null?void 0:q.toFixed(2)," / NVDA ",(ee=t.last_close_nvda)==null?void 0:ee.toFixed(2)," · ",t.n_train," train / ",t.n_test," test · ",t.pred_date]})]})]}),y.jsxs("div",{className:"mono",style:{fontSize:10,marginTop:10,color:"#64748b"},children:["Traditional said: curve ",((z=t.traditional)==null?void 0:z.yield_curve)>0?"steep":"flat/inverted",", P/E ",(V=(K=t.traditional)==null?void 0:K.pe_spy)==null?void 0:V.toFixed(1)," — ML blends all 17 feats (treasury, P/E, DXY, gold… ) into one number above. Backtest must be green before this becomes more than a toy."]})]}):y.jsx("div",{className:"mono",style:{fontSize:12,color:"#64748b",marginTop:12},children:"Loading ml/validate.json…"}),y.jsxs("div",{style:{marginTop:16,fontSize:12,color:"#475569"},children:["Full feature list in ",y.jsx("code",{children:"ml/meta.json"})," — includes yield curve, monetary supply (M2 proxy via SHV), DXY, oil, gold, silver, GSR, real estate (VNQ), repo (SHV), VOO/SPY vs 200MA. Add more via ",y.jsx("code",{children:"TICKERS"})," in ",y.jsx("code",{children:"ml/train.py"}),"."]})]})})]})}function ab(){return y.jsx(Sr,{title:"Contact",children:y.jsx("p",{children:"Contact page scaffold."})})}function ob(){return y.jsx(Sr,{title:"Links",children:y.jsx("p",{children:"Links page scaffold."})})}function lb(){return y.jsx(Sr,{title:"Code",children:y.jsx("p",{children:"Code/projects page scaffold."})})}function cb(){return y.jsx(Sr,{title:"More",children:y.jsx("p",{children:"Extra page scaffold."})})}function ub(){return y.jsx(Sr,{title:"Not Found",children:y.jsx("p",{children:"That page does not exist."})})}kv(document.getElementById("root")).render(y.jsx(ht.StrictMode,{children:y.jsx(p1,{children:y.jsxs(o1,{children:[y.jsx(oi,{path:"/",element:y.jsx(nb,{})}),y.jsx(oi,{path:"/kenton",element:y.jsx(ib,{})}),y.jsx(oi,{path:"/avery",element:y.jsx(rb,{})}),y.jsx(oi,{path:"/ml",element:y.jsx(sb,{})}),y.jsx(oi,{path:"/contact",element:y.jsx(ab,{})}),y.jsx(oi,{path:"/links",element:y.jsx(ob,{})}),y.jsx(oi,{path:"/code",element:y.jsx(lb,{})}),y.jsx(oi,{path:"/more",element:y.jsx(cb,{})}),y.jsx(oi,{path:"*",element:y.jsx(ub,{})})]})})}));
