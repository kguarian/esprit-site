function zx(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Vx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var A0={exports:{}},cc={},b0={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uo=Symbol.for("react.element"),Hx=Symbol.for("react.portal"),Gx=Symbol.for("react.fragment"),Wx=Symbol.for("react.strict_mode"),Xx=Symbol.for("react.profiler"),jx=Symbol.for("react.provider"),Yx=Symbol.for("react.context"),$x=Symbol.for("react.forward_ref"),qx=Symbol.for("react.suspense"),Kx=Symbol.for("react.memo"),Zx=Symbol.for("react.lazy"),rp=Symbol.iterator;function Jx(t){return t===null||typeof t!="object"?null:(t=rp&&t[rp]||t["@@iterator"],typeof t=="function"?t:null)}var R0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C0=Object.assign,P0={};function Qs(t,e,n){this.props=t,this.context=e,this.refs=P0,this.updater=n||R0}Qs.prototype.isReactComponent={};Qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function L0(){}L0.prototype=Qs.prototype;function Lf(t,e,n){this.props=t,this.context=e,this.refs=P0,this.updater=n||R0}var Nf=Lf.prototype=new L0;Nf.constructor=Lf;C0(Nf,Qs.prototype);Nf.isPureReactComponent=!0;var sp=Array.isArray,N0=Object.prototype.hasOwnProperty,Df={current:null},D0={key:!0,ref:!0,__self:!0,__source:!0};function I0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)N0.call(e,i)&&!D0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:uo,type:t,key:s,ref:a,props:r,_owner:Df.current}}function Qx(t,e){return{$$typeof:uo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function If(t){return typeof t=="object"&&t!==null&&t.$$typeof===uo}function e_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ap=/\/+/g;function Ic(t,e){return typeof t=="object"&&t!==null&&t.key!=null?e_(""+t.key):e.toString(36)}function dl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case uo:case Hx:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Ic(a,0):i,sp(r)?(n="",t!=null&&(n=t.replace(ap,"$&/")+"/"),dl(r,e,n,"",function(c){return c})):r!=null&&(If(r)&&(r=Qx(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(ap,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",sp(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Ic(s,o);a+=dl(s,e,n,l,r)}else if(l=Jx(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Ic(s,o++),a+=dl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function So(t,e,n){if(t==null)return t;var i=[],r=0;return dl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function t_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},fl={transition:null},n_={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:fl,ReactCurrentOwner:Df};function U0(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:So,forEach:function(t,e,n){So(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return So(t,function(){e++}),e},toArray:function(t){return So(t,function(e){return e})||[]},only:function(t){if(!If(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Qs;We.Fragment=Gx;We.Profiler=Xx;We.PureComponent=Lf;We.StrictMode=Wx;We.Suspense=qx;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n_;We.act=U0;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=C0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Df.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)N0.call(e,l)&&!D0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:uo,type:t.type,key:r,ref:s,props:i,_owner:a}};We.createContext=function(t){return t={$$typeof:Yx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jx,_context:t},t.Consumer=t};We.createElement=I0;We.createFactory=function(t){var e=I0.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:$x,render:t}};We.isValidElement=If;We.lazy=function(t){return{$$typeof:Zx,_payload:{_status:-1,_result:t},_init:t_}};We.memo=function(t,e){return{$$typeof:Kx,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=fl.transition;fl.transition={};try{t()}finally{fl.transition=e}};We.unstable_act=U0;We.useCallback=function(t,e){return dn.current.useCallback(t,e)};We.useContext=function(t){return dn.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};We.useEffect=function(t,e){return dn.current.useEffect(t,e)};We.useId=function(){return dn.current.useId()};We.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return dn.current.useMemo(t,e)};We.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};We.useRef=function(t){return dn.current.useRef(t)};We.useState=function(t){return dn.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return dn.current.useTransition()};We.version="18.3.1";b0.exports=We;var Me=b0.exports;const gt=Vx(Me),i_=zx({__proto__:null,default:gt},[Me]);/**
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
 */(function(t){function e(D,j){var ne=D.length;D.push(j);e:for(;0<ne;){var re=ne-1>>>1,oe=D[re];if(0<r(oe,j))D[re]=j,D[ne]=oe,ne=re;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var j=D[0],ne=D.pop();if(ne!==j){D[0]=ne;e:for(var re=0,oe=D.length,Be=oe>>>1;re<Be;){var qe=2*(re+1)-1,He=D[qe],U=qe+1,J=D[U];if(0>r(He,ne))U<oe&&0>r(J,He)?(D[re]=J,D[U]=ne,re=U):(D[re]=He,D[qe]=ne,re=qe);else if(U<oe&&0>r(J,ne))D[re]=J,D[U]=ne,re=U;else break e}}return j}function r(D,j){var ne=D.sortIndex-j.sortIndex;return ne!==0?ne:D.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,h=null,d=3,p=!1,g=!1,E=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(D){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=D)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function S(D){if(E=!1,M(D),!g)if(n(l)!==null)g=!0,K(A);else{var j=n(c);j!==null&&V(S,j.startTime-D)}}function A(D,j){g=!1,E&&(E=!1,u(_),_=-1),p=!0;var ne=d;try{for(M(j),h=n(l);h!==null&&(!(h.expirationTime>j)||D&&!L());){var re=h.callback;if(typeof re=="function"){h.callback=null,d=h.priorityLevel;var oe=re(h.expirationTime<=j);j=t.unstable_now(),typeof oe=="function"?h.callback=oe:h===n(l)&&i(l),M(j)}else i(l);h=n(l)}if(h!==null)var Be=!0;else{var qe=n(c);qe!==null&&V(S,qe.startTime-j),Be=!1}return Be}finally{h=null,d=ne,p=!1}}var w=!1,R=null,_=-1,b=5,P=-1;function L(){return!(t.unstable_now()-P<b)}function B(){if(R!==null){var D=t.unstable_now();P=D;var j=!0;try{j=R(!0,D)}finally{j?q():(w=!1,R=null)}}else w=!1}var q;if(typeof v=="function")q=function(){v(B)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,z=ee.port2;ee.port1.onmessage=B,q=function(){z.postMessage(null)}}else q=function(){m(B,0)};function K(D){R=D,w||(w=!0,q())}function V(D,j){_=m(function(){D(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,K(A))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var ne=d;d=j;try{return D()}finally{d=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,j){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var ne=d;d=D;try{return j()}finally{d=ne}},t.unstable_scheduleCallback=function(D,j,ne){var re=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?re+ne:re):ne=re,D){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=ne+oe,D={id:f++,callback:j,priorityLevel:D,startTime:ne,expirationTime:oe,sortIndex:-1},ne>re?(D.sortIndex=ne,e(c,D),n(l)===null&&D===n(c)&&(E?(u(_),_=-1):E=!0,V(S,ne-re))):(D.sortIndex=oe,e(l,D),g||p||(g=!0,K(A))),D},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(D){var j=d;return function(){var ne=d;d=j;try{return D.apply(this,arguments)}finally{d=ne}}}})(B0);k0.exports=B0;var u_=k0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_=Me,Cn=u_;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var z0=new Set,Va={};function Yr(t,e){Hs(t,e),Hs(t+"Capture",e)}function Hs(t,e){for(Va[t]=e,t=0;t<e.length;t++)z0.add(e[t])}var Di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vu=Object.prototype.hasOwnProperty,f_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,op={},lp={};function h_(t){return Vu.call(lp,t)?!0:Vu.call(op,t)?!1:f_.test(t)?lp[t]=!0:(op[t]=!0,!1)}function p_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function m_(t,e,n,i){if(e===null||typeof e>"u"||p_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Uf=/[\-:]([a-z])/g;function Ff(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Uf,Ff);jt[e]=new fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Uf,Ff);jt[e]=new fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Uf,Ff);jt[e]=new fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new fn(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Of(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(m_(e,n,r,i)&&(n=null),i||r===null?h_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Bi=d_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mo=Symbol.for("react.element"),ys=Symbol.for("react.portal"),Ss=Symbol.for("react.fragment"),kf=Symbol.for("react.strict_mode"),Hu=Symbol.for("react.profiler"),V0=Symbol.for("react.provider"),H0=Symbol.for("react.context"),Bf=Symbol.for("react.forward_ref"),Gu=Symbol.for("react.suspense"),Wu=Symbol.for("react.suspense_list"),zf=Symbol.for("react.memo"),Ki=Symbol.for("react.lazy"),G0=Symbol.for("react.offscreen"),cp=Symbol.iterator;function sa(t){return t===null||typeof t!="object"?null:(t=cp&&t[cp]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,Uc;function Ma(t){if(Uc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Uc=e&&e[1]||""}return`
`+Uc+t}var Fc=!1;function Oc(t,e){if(!t||Fc)return"";Fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ma(t):""}function g_(t){switch(t.tag){case 5:return Ma(t.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return t=Oc(t.type,!1),t;case 11:return t=Oc(t.type.render,!1),t;case 1:return t=Oc(t.type,!0),t;default:return""}}function Xu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ss:return"Fragment";case ys:return"Portal";case Hu:return"Profiler";case kf:return"StrictMode";case Gu:return"Suspense";case Wu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H0:return(t.displayName||"Context")+".Consumer";case V0:return(t._context.displayName||"Context")+".Provider";case Bf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zf:return e=t.displayName||null,e!==null?e:Xu(t.type)||"Memo";case Ki:e=t._payload,t=t._init;try{return Xu(t(e))}catch{}}return null}function v_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xu(e);case 8:return e===kf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function W0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function x_(t){var e=W0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Eo(t){t._valueTracker||(t._valueTracker=x_(t))}function X0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=W0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ju(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function up(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function j0(t,e){e=e.checked,e!=null&&Of(t,"checked",e,!1)}function Yu(t,e){j0(t,e);var n=pr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$u(t,e.type,n):e.hasOwnProperty("defaultValue")&&$u(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $u(t,e,n){(e!=="number"||Cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ea=Array.isArray;function Ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function qu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Ea(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function Y0(t,e){var n=pr(e.value),i=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function hp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ku(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var To,q0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(To=To||document.createElement("div"),To.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=To.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ha(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},__=["Webkit","ms","Moz","O"];Object.keys(Ca).forEach(function(t){__.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ca[e]=Ca[t]})});function K0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ca.hasOwnProperty(t)&&Ca[t]?(""+e).trim():e+"px"}function Z0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=K0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var y_=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zu(t,e){if(e){if(y_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Ju(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qu=null;function Vf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ed=null,Is=null,Us=null;function pp(t){if(t=po(t)){if(typeof ed!="function")throw Error(se(280));var e=t.stateNode;e&&(e=pc(e),ed(t.stateNode,t.type,e))}}function J0(t){Is?Us?Us.push(t):Us=[t]:Is=t}function Q0(){if(Is){var t=Is,e=Us;if(Us=Is=null,pp(t),e)for(t=0;t<e.length;t++)pp(e[t])}}function eg(t,e){return t(e)}function tg(){}var kc=!1;function ng(t,e,n){if(kc)return t(e,n);kc=!0;try{return eg(t,e,n)}finally{kc=!1,(Is!==null||Us!==null)&&(tg(),Q0())}}function Ga(t,e){var n=t.stateNode;if(n===null)return null;var i=pc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var td=!1;if(Di)try{var aa={};Object.defineProperty(aa,"passive",{get:function(){td=!0}}),window.addEventListener("test",aa,aa),window.removeEventListener("test",aa,aa)}catch{td=!1}function S_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Pa=!1,Pl=null,Ll=!1,nd=null,M_={onError:function(t){Pa=!0,Pl=t}};function E_(t,e,n,i,r,s,a,o,l){Pa=!1,Pl=null,S_.apply(M_,arguments)}function T_(t,e,n,i,r,s,a,o,l){if(E_.apply(this,arguments),Pa){if(Pa){var c=Pl;Pa=!1,Pl=null}else throw Error(se(198));Ll||(Ll=!0,nd=c)}}function $r(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ig(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function mp(t){if($r(t)!==t)throw Error(se(188))}function w_(t){var e=t.alternate;if(!e){if(e=$r(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return mp(r),t;if(s===i)return mp(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function rg(t){return t=w_(t),t!==null?sg(t):null}function sg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sg(t);if(e!==null)return e;t=t.sibling}return null}var ag=Cn.unstable_scheduleCallback,gp=Cn.unstable_cancelCallback,A_=Cn.unstable_shouldYield,b_=Cn.unstable_requestPaint,At=Cn.unstable_now,R_=Cn.unstable_getCurrentPriorityLevel,Hf=Cn.unstable_ImmediatePriority,og=Cn.unstable_UserBlockingPriority,Nl=Cn.unstable_NormalPriority,C_=Cn.unstable_LowPriority,lg=Cn.unstable_IdlePriority,uc=null,hi=null;function P_(t){if(hi&&typeof hi.onCommitFiberRoot=="function")try{hi.onCommitFiberRoot(uc,t,void 0,(t.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:D_,L_=Math.log,N_=Math.LN2;function D_(t){return t>>>=0,t===0?32:31-(L_(t)/N_|0)|0}var wo=64,Ao=4194304;function Ta(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ta(o):(s&=a,s!==0&&(i=Ta(s)))}else a=n&~r,a!==0?i=Ta(a):s!==0&&(i=Ta(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Jn(e),r=1<<n,i|=t[n],e&=~r;return i}function I_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function U_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Jn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=I_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function id(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cg(){var t=wo;return wo<<=1,!(wo&4194240)&&(wo=64),t}function Bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jn(e),t[e]=n}function F_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Gf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function ug(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dg,Wf,fg,hg,pg,rd=!1,bo=[],sr=null,ar=null,or=null,Wa=new Map,Xa=new Map,Ji=[],O_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vp(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":Wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xa.delete(e.pointerId)}}function oa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=po(e),e!==null&&Wf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function k_(t,e,n,i,r){switch(e){case"focusin":return sr=oa(sr,t,e,n,i,r),!0;case"dragenter":return ar=oa(ar,t,e,n,i,r),!0;case"mouseover":return or=oa(or,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Wa.set(s,oa(Wa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Xa.set(s,oa(Xa.get(s)||null,t,e,n,i,r)),!0}return!1}function mg(t){var e=Dr(t.target);if(e!==null){var n=$r(e);if(n!==null){if(e=n.tag,e===13){if(e=ig(n),e!==null){t.blockedOn=e,pg(t.priority,function(){fg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Qu=i,n.target.dispatchEvent(i),Qu=null}else return e=po(n),e!==null&&Wf(e),t.blockedOn=n,!1;e.shift()}return!0}function xp(t,e,n){hl(t)&&n.delete(e)}function B_(){rd=!1,sr!==null&&hl(sr)&&(sr=null),ar!==null&&hl(ar)&&(ar=null),or!==null&&hl(or)&&(or=null),Wa.forEach(xp),Xa.forEach(xp)}function la(t,e){t.blockedOn===e&&(t.blockedOn=null,rd||(rd=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,B_)))}function ja(t){function e(r){return la(r,t)}if(0<bo.length){la(bo[0],t);for(var n=1;n<bo.length;n++){var i=bo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(sr!==null&&la(sr,t),ar!==null&&la(ar,t),or!==null&&la(or,t),Wa.forEach(e),Xa.forEach(e),n=0;n<Ji.length;n++)i=Ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ji.length&&(n=Ji[0],n.blockedOn===null);)mg(n),n.blockedOn===null&&Ji.shift()}var Fs=Bi.ReactCurrentBatchConfig,Il=!0;function z_(t,e,n,i){var r=it,s=Fs.transition;Fs.transition=null;try{it=1,Xf(t,e,n,i)}finally{it=r,Fs.transition=s}}function V_(t,e,n,i){var r=it,s=Fs.transition;Fs.transition=null;try{it=4,Xf(t,e,n,i)}finally{it=r,Fs.transition=s}}function Xf(t,e,n,i){if(Il){var r=sd(t,e,n,i);if(r===null)qc(t,e,i,Ul,n),vp(t,i);else if(k_(r,t,e,n,i))i.stopPropagation();else if(vp(t,i),e&4&&-1<O_.indexOf(t)){for(;r!==null;){var s=po(r);if(s!==null&&dg(s),s=sd(t,e,n,i),s===null&&qc(t,e,i,Ul,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else qc(t,e,i,null,n)}}var Ul=null;function sd(t,e,n,i){if(Ul=null,t=Vf(i),t=Dr(t),t!==null)if(e=$r(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ig(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ul=t,null}function gg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(R_()){case Hf:return 1;case og:return 4;case Nl:case C_:return 16;case lg:return 536870912;default:return 16}default:return 16}}var tr=null,jf=null,pl=null;function vg(){if(pl)return pl;var t,e=jf,n=e.length,i,r="value"in tr?tr.value:tr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return pl=r.slice(t,1<i?1-i:void 0)}function ml(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ro(){return!0}function _p(){return!1}function Ln(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ro:_p,this.isPropagationStopped=_p,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ro)},persist:function(){},isPersistent:Ro}),e}var ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yf=Ln(ea),ho=_t({},ea,{view:0,detail:0}),H_=Ln(ho),zc,Vc,ca,dc=_t({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$f,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ca&&(ca&&t.type==="mousemove"?(zc=t.screenX-ca.screenX,Vc=t.screenY-ca.screenY):Vc=zc=0,ca=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Vc}}),yp=Ln(dc),G_=_t({},dc,{dataTransfer:0}),W_=Ln(G_),X_=_t({},ho,{relatedTarget:0}),Hc=Ln(X_),j_=_t({},ea,{animationName:0,elapsedTime:0,pseudoElement:0}),Y_=Ln(j_),$_=_t({},ea,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),q_=Ln($_),K_=_t({},ea,{data:0}),Sp=Ln(K_),Z_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ey(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Q_[t])?!!e[t]:!1}function $f(){return ey}var ty=_t({},ho,{key:function(t){if(t.key){var e=Z_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?J_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$f,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ny=Ln(ty),iy=_t({},dc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mp=Ln(iy),ry=_t({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$f}),sy=Ln(ry),ay=_t({},ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),oy=Ln(ay),ly=_t({},dc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cy=Ln(ly),uy=[9,13,27,32],qf=Di&&"CompositionEvent"in window,La=null;Di&&"documentMode"in document&&(La=document.documentMode);var dy=Di&&"TextEvent"in window&&!La,xg=Di&&(!qf||La&&8<La&&11>=La),Ep=" ",Tp=!1;function _g(t,e){switch(t){case"keyup":return uy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ms=!1;function fy(t,e){switch(t){case"compositionend":return yg(e);case"keypress":return e.which!==32?null:(Tp=!0,Ep);case"textInput":return t=e.data,t===Ep&&Tp?null:t;default:return null}}function hy(t,e){if(Ms)return t==="compositionend"||!qf&&_g(t,e)?(t=vg(),pl=jf=tr=null,Ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xg&&e.locale!=="ko"?null:e.data;default:return null}}var py={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!py[t.type]:e==="textarea"}function Sg(t,e,n,i){J0(i),e=Fl(e,"onChange"),0<e.length&&(n=new Yf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Na=null,Ya=null;function my(t){Ng(t,0)}function fc(t){var e=ws(t);if(X0(e))return t}function gy(t,e){if(t==="change")return e}var Mg=!1;if(Di){var Gc;if(Di){var Wc="oninput"in document;if(!Wc){var Ap=document.createElement("div");Ap.setAttribute("oninput","return;"),Wc=typeof Ap.oninput=="function"}Gc=Wc}else Gc=!1;Mg=Gc&&(!document.documentMode||9<document.documentMode)}function bp(){Na&&(Na.detachEvent("onpropertychange",Eg),Ya=Na=null)}function Eg(t){if(t.propertyName==="value"&&fc(Ya)){var e=[];Sg(e,Ya,t,Vf(t)),ng(my,e)}}function vy(t,e,n){t==="focusin"?(bp(),Na=e,Ya=n,Na.attachEvent("onpropertychange",Eg)):t==="focusout"&&bp()}function xy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fc(Ya)}function _y(t,e){if(t==="click")return fc(e)}function yy(t,e){if(t==="input"||t==="change")return fc(e)}function Sy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ei=typeof Object.is=="function"?Object.is:Sy;function $a(t,e){if(ei(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Vu.call(e,r)||!ei(t[r],e[r]))return!1}return!0}function Rp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cp(t,e){var n=Rp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rp(n)}}function Tg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function wg(){for(var t=window,e=Cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Cl(t.document)}return e}function Kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function My(t){var e=wg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Tg(n.ownerDocument.documentElement,n)){if(i!==null&&Kf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Cp(n,s);var a=Cp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ey=Di&&"documentMode"in document&&11>=document.documentMode,Es=null,ad=null,Da=null,od=!1;function Pp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;od||Es==null||Es!==Cl(i)||(i=Es,"selectionStart"in i&&Kf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Da&&$a(Da,i)||(Da=i,i=Fl(ad,"onSelect"),0<i.length&&(e=new Yf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Es)))}function Co(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ts={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionend:Co("Transition","TransitionEnd")},Xc={},Ag={};Di&&(Ag=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function hc(t){if(Xc[t])return Xc[t];if(!Ts[t])return t;var e=Ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ag)return Xc[t]=e[n];return t}var bg=hc("animationend"),Rg=hc("animationiteration"),Cg=hc("animationstart"),Pg=hc("transitionend"),Lg=new Map,Lp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){Lg.set(t,e),Yr(e,[t])}for(var jc=0;jc<Lp.length;jc++){var Yc=Lp[jc],Ty=Yc.toLowerCase(),wy=Yc[0].toUpperCase()+Yc.slice(1);xr(Ty,"on"+wy)}xr(bg,"onAnimationEnd");xr(Rg,"onAnimationIteration");xr(Cg,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(Pg,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);Yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ay=new Set("cancel close invalid load scroll toggle".split(" ").concat(wa));function Np(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,T_(i,e,void 0,t),t.currentTarget=null}function Ng(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Np(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Np(r,o,c),s=l}}}if(Ll)throw t=nd,Ll=!1,nd=null,t}function dt(t,e){var n=e[fd];n===void 0&&(n=e[fd]=new Set);var i=t+"__bubble";n.has(i)||(Dg(e,t,2,!1),n.add(i))}function $c(t,e,n){var i=0;e&&(i|=4),Dg(n,t,i,e)}var Po="_reactListening"+Math.random().toString(36).slice(2);function qa(t){if(!t[Po]){t[Po]=!0,z0.forEach(function(n){n!=="selectionchange"&&(Ay.has(n)||$c(n,!1,t),$c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Po]||(e[Po]=!0,$c("selectionchange",!1,e))}}function Dg(t,e,n,i){switch(gg(e)){case 1:var r=z_;break;case 4:r=V_;break;default:r=Xf}n=r.bind(null,e,n,t),r=void 0,!td||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function qc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Dr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}ng(function(){var c=s,f=Vf(n),h=[];e:{var d=Lg.get(t);if(d!==void 0){var p=Yf,g=t;switch(t){case"keypress":if(ml(n)===0)break e;case"keydown":case"keyup":p=ny;break;case"focusin":g="focus",p=Hc;break;case"focusout":g="blur",p=Hc;break;case"beforeblur":case"afterblur":p=Hc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=W_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=sy;break;case bg:case Rg:case Cg:p=Y_;break;case Pg:p=oy;break;case"scroll":p=H_;break;case"wheel":p=cy;break;case"copy":case"cut":case"paste":p=q_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Mp}var E=(e&4)!==0,m=!E&&t==="scroll",u=E?d!==null?d+"Capture":null:d;E=[];for(var v=c,M;v!==null;){M=v;var S=M.stateNode;if(M.tag===5&&S!==null&&(M=S,u!==null&&(S=Ga(v,u),S!=null&&E.push(Ka(v,S,M)))),m)break;v=v.return}0<E.length&&(d=new p(d,g,null,n,f),h.push({event:d,listeners:E}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Qu&&(g=n.relatedTarget||n.fromElement)&&(Dr(g)||g[Ii]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Dr(g):null,g!==null&&(m=$r(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(E=yp,S="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(E=Mp,S="onPointerLeave",u="onPointerEnter",v="pointer"),m=p==null?d:ws(p),M=g==null?d:ws(g),d=new E(S,v+"leave",p,n,f),d.target=m,d.relatedTarget=M,S=null,Dr(f)===c&&(E=new E(u,v+"enter",g,n,f),E.target=M,E.relatedTarget=m,S=E),m=S,p&&g)t:{for(E=p,u=g,v=0,M=E;M;M=ts(M))v++;for(M=0,S=u;S;S=ts(S))M++;for(;0<v-M;)E=ts(E),v--;for(;0<M-v;)u=ts(u),M--;for(;v--;){if(E===u||u!==null&&E===u.alternate)break t;E=ts(E),u=ts(u)}E=null}else E=null;p!==null&&Dp(h,d,p,E,!1),g!==null&&m!==null&&Dp(h,m,g,E,!0)}}e:{if(d=c?ws(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var A=gy;else if(wp(d))if(Mg)A=yy;else{A=xy;var w=vy}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=_y);if(A&&(A=A(t,c))){Sg(h,A,n,f);break e}w&&w(t,d,c),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&$u(d,"number",d.value)}switch(w=c?ws(c):window,t){case"focusin":(wp(w)||w.contentEditable==="true")&&(Es=w,ad=c,Da=null);break;case"focusout":Da=ad=Es=null;break;case"mousedown":od=!0;break;case"contextmenu":case"mouseup":case"dragend":od=!1,Pp(h,n,f);break;case"selectionchange":if(Ey)break;case"keydown":case"keyup":Pp(h,n,f)}var R;if(qf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ms?_g(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(xg&&n.locale!=="ko"&&(Ms||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ms&&(R=vg()):(tr=f,jf="value"in tr?tr.value:tr.textContent,Ms=!0)),w=Fl(c,_),0<w.length&&(_=new Sp(_,t,null,n,f),h.push({event:_,listeners:w}),R?_.data=R:(R=yg(n),R!==null&&(_.data=R)))),(R=dy?fy(t,n):hy(t,n))&&(c=Fl(c,"onBeforeInput"),0<c.length&&(f=new Sp("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=R))}Ng(h,e)})}function Ka(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ga(t,n),s!=null&&i.unshift(Ka(t,s,r)),s=Ga(t,e),s!=null&&i.push(Ka(t,s,r))),t=t.return}return i}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ga(n,s),l!=null&&a.unshift(Ka(n,l,o))):r||(l=Ga(n,s),l!=null&&a.push(Ka(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var by=/\r\n?/g,Ry=/\u0000|\uFFFD/g;function Ip(t){return(typeof t=="string"?t:""+t).replace(by,`
`).replace(Ry,"")}function Lo(t,e,n){if(e=Ip(e),Ip(t)!==e&&n)throw Error(se(425))}function Ol(){}var ld=null,cd=null;function ud(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var dd=typeof setTimeout=="function"?setTimeout:void 0,Cy=typeof clearTimeout=="function"?clearTimeout:void 0,Up=typeof Promise=="function"?Promise:void 0,Py=typeof queueMicrotask=="function"?queueMicrotask:typeof Up<"u"?function(t){return Up.resolve(null).then(t).catch(Ly)}:dd;function Ly(t){setTimeout(function(){throw t})}function Kc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ja(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ja(e)}function lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ta=Math.random().toString(36).slice(2),ui="__reactFiber$"+ta,Za="__reactProps$"+ta,Ii="__reactContainer$"+ta,fd="__reactEvents$"+ta,Ny="__reactListeners$"+ta,Dy="__reactHandles$"+ta;function Dr(t){var e=t[ui];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ii]||n[ui]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fp(t);t!==null;){if(n=t[ui])return n;t=Fp(t)}return e}t=n,n=t.parentNode}return null}function po(t){return t=t[ui]||t[Ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function pc(t){return t[Za]||null}var hd=[],As=-1;function _r(t){return{current:t}}function ft(t){0>As||(t.current=hd[As],hd[As]=null,As--)}function ut(t,e){As++,hd[As]=t.current,t.current=e}var mr={},tn=_r(mr),gn=_r(!1),zr=mr;function Gs(t,e){var n=t.type.contextTypes;if(!n)return mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function vn(t){return t=t.childContextTypes,t!=null}function kl(){ft(gn),ft(tn)}function Op(t,e,n){if(tn.current!==mr)throw Error(se(168));ut(tn,e),ut(gn,n)}function Ig(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,v_(t)||"Unknown",r));return _t({},n,i)}function Bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,zr=tn.current,ut(tn,t),ut(gn,gn.current),!0}function kp(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Ig(t,e,zr),i.__reactInternalMemoizedMergedChildContext=t,ft(gn),ft(tn),ut(tn,t)):ft(gn),ut(gn,n)}var wi=null,mc=!1,Zc=!1;function Ug(t){wi===null?wi=[t]:wi.push(t)}function Iy(t){mc=!0,Ug(t)}function yr(){if(!Zc&&wi!==null){Zc=!0;var t=0,e=it;try{var n=wi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}wi=null,mc=!1}catch(r){throw wi!==null&&(wi=wi.slice(t+1)),ag(Hf,yr),r}finally{it=e,Zc=!1}}return null}var bs=[],Rs=0,zl=null,Vl=0,In=[],Un=0,Vr=null,Ai=1,bi="";function Rr(t,e){bs[Rs++]=Vl,bs[Rs++]=zl,zl=t,Vl=e}function Fg(t,e,n){In[Un++]=Ai,In[Un++]=bi,In[Un++]=Vr,Vr=t;var i=Ai;t=bi;var r=32-Jn(i)-1;i&=~(1<<r),n+=1;var s=32-Jn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ai=1<<32-Jn(e)+r|n<<r|i,bi=s+t}else Ai=1<<s|n<<r|i,bi=t}function Zf(t){t.return!==null&&(Rr(t,1),Fg(t,1,0))}function Jf(t){for(;t===zl;)zl=bs[--Rs],bs[Rs]=null,Vl=bs[--Rs],bs[Rs]=null;for(;t===Vr;)Vr=In[--Un],In[Un]=null,bi=In[--Un],In[Un]=null,Ai=In[--Un],In[Un]=null}var bn=null,An=null,ht=!1,$n=null;function Og(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bn=t,An=lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bn=t,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vr!==null?{id:Ai,overflow:bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bn=t,An=null,!0):!1;default:return!1}}function pd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function md(t){if(ht){var e=An;if(e){var n=e;if(!Bp(t,e)){if(pd(t))throw Error(se(418));e=lr(n.nextSibling);var i=bn;e&&Bp(t,e)?Og(i,n):(t.flags=t.flags&-4097|2,ht=!1,bn=t)}}else{if(pd(t))throw Error(se(418));t.flags=t.flags&-4097|2,ht=!1,bn=t}}}function zp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function No(t){if(t!==bn)return!1;if(!ht)return zp(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ud(t.type,t.memoizedProps)),e&&(e=An)){if(pd(t))throw kg(),Error(se(418));for(;e;)Og(t,e),e=lr(e.nextSibling)}if(zp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){An=lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}An=null}}else An=bn?lr(t.stateNode.nextSibling):null;return!0}function kg(){for(var t=An;t;)t=lr(t.nextSibling)}function Ws(){An=bn=null,ht=!1}function Qf(t){$n===null?$n=[t]:$n.push(t)}var Uy=Bi.ReactCurrentBatchConfig;function ua(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Do(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vp(t){var e=t._init;return e(t._payload)}function Bg(t){function e(u,v){if(t){var M=u.deletions;M===null?(u.deletions=[v],u.flags|=16):M.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=fr(u,v),u.index=0,u.sibling=null,u}function s(u,v,M){return u.index=M,t?(M=u.alternate,M!==null?(M=M.index,M<v?(u.flags|=2,v):M):(u.flags|=2,v)):(u.flags|=1048576,v)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,v,M,S){return v===null||v.tag!==6?(v=ru(M,u.mode,S),v.return=u,v):(v=r(v,M),v.return=u,v)}function l(u,v,M,S){var A=M.type;return A===Ss?f(u,v,M.props.children,S,M.key):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ki&&Vp(A)===v.type)?(S=r(v,M.props),S.ref=ua(u,v,M),S.return=u,S):(S=Ml(M.type,M.key,M.props,null,u.mode,S),S.ref=ua(u,v,M),S.return=u,S)}function c(u,v,M,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==M.containerInfo||v.stateNode.implementation!==M.implementation?(v=su(M,u.mode,S),v.return=u,v):(v=r(v,M.children||[]),v.return=u,v)}function f(u,v,M,S,A){return v===null||v.tag!==7?(v=Br(M,u.mode,S,A),v.return=u,v):(v=r(v,M),v.return=u,v)}function h(u,v,M){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ru(""+v,u.mode,M),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Mo:return M=Ml(v.type,v.key,v.props,null,u.mode,M),M.ref=ua(u,null,v),M.return=u,M;case ys:return v=su(v,u.mode,M),v.return=u,v;case Ki:var S=v._init;return h(u,S(v._payload),M)}if(Ea(v)||sa(v))return v=Br(v,u.mode,M,null),v.return=u,v;Do(u,v)}return null}function d(u,v,M,S){var A=v!==null?v.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return A!==null?null:o(u,v,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Mo:return M.key===A?l(u,v,M,S):null;case ys:return M.key===A?c(u,v,M,S):null;case Ki:return A=M._init,d(u,v,A(M._payload),S)}if(Ea(M)||sa(M))return A!==null?null:f(u,v,M,S,null);Do(u,M)}return null}function p(u,v,M,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(M)||null,o(v,u,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Mo:return u=u.get(S.key===null?M:S.key)||null,l(v,u,S,A);case ys:return u=u.get(S.key===null?M:S.key)||null,c(v,u,S,A);case Ki:var w=S._init;return p(u,v,M,w(S._payload),A)}if(Ea(S)||sa(S))return u=u.get(M)||null,f(v,u,S,A,null);Do(v,S)}return null}function g(u,v,M,S){for(var A=null,w=null,R=v,_=v=0,b=null;R!==null&&_<M.length;_++){R.index>_?(b=R,R=null):b=R.sibling;var P=d(u,R,M[_],S);if(P===null){R===null&&(R=b);break}t&&R&&P.alternate===null&&e(u,R),v=s(P,v,_),w===null?A=P:w.sibling=P,w=P,R=b}if(_===M.length)return n(u,R),ht&&Rr(u,_),A;if(R===null){for(;_<M.length;_++)R=h(u,M[_],S),R!==null&&(v=s(R,v,_),w===null?A=R:w.sibling=R,w=R);return ht&&Rr(u,_),A}for(R=i(u,R);_<M.length;_++)b=p(R,u,_,M[_],S),b!==null&&(t&&b.alternate!==null&&R.delete(b.key===null?_:b.key),v=s(b,v,_),w===null?A=b:w.sibling=b,w=b);return t&&R.forEach(function(L){return e(u,L)}),ht&&Rr(u,_),A}function E(u,v,M,S){var A=sa(M);if(typeof A!="function")throw Error(se(150));if(M=A.call(M),M==null)throw Error(se(151));for(var w=A=null,R=v,_=v=0,b=null,P=M.next();R!==null&&!P.done;_++,P=M.next()){R.index>_?(b=R,R=null):b=R.sibling;var L=d(u,R,P.value,S);if(L===null){R===null&&(R=b);break}t&&R&&L.alternate===null&&e(u,R),v=s(L,v,_),w===null?A=L:w.sibling=L,w=L,R=b}if(P.done)return n(u,R),ht&&Rr(u,_),A;if(R===null){for(;!P.done;_++,P=M.next())P=h(u,P.value,S),P!==null&&(v=s(P,v,_),w===null?A=P:w.sibling=P,w=P);return ht&&Rr(u,_),A}for(R=i(u,R);!P.done;_++,P=M.next())P=p(R,u,_,P.value,S),P!==null&&(t&&P.alternate!==null&&R.delete(P.key===null?_:P.key),v=s(P,v,_),w===null?A=P:w.sibling=P,w=P);return t&&R.forEach(function(B){return e(u,B)}),ht&&Rr(u,_),A}function m(u,v,M,S){if(typeof M=="object"&&M!==null&&M.type===Ss&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case Mo:e:{for(var A=M.key,w=v;w!==null;){if(w.key===A){if(A=M.type,A===Ss){if(w.tag===7){n(u,w.sibling),v=r(w,M.props.children),v.return=u,u=v;break e}}else if(w.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ki&&Vp(A)===w.type){n(u,w.sibling),v=r(w,M.props),v.ref=ua(u,w,M),v.return=u,u=v;break e}n(u,w);break}else e(u,w);w=w.sibling}M.type===Ss?(v=Br(M.props.children,u.mode,S,M.key),v.return=u,u=v):(S=Ml(M.type,M.key,M.props,null,u.mode,S),S.ref=ua(u,v,M),S.return=u,u=S)}return a(u);case ys:e:{for(w=M.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===M.containerInfo&&v.stateNode.implementation===M.implementation){n(u,v.sibling),v=r(v,M.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=su(M,u.mode,S),v.return=u,u=v}return a(u);case Ki:return w=M._init,m(u,v,w(M._payload),S)}if(Ea(M))return g(u,v,M,S);if(sa(M))return E(u,v,M,S);Do(u,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,M),v.return=u,u=v):(n(u,v),v=ru(M,u.mode,S),v.return=u,u=v),a(u)):n(u,v)}return m}var Xs=Bg(!0),zg=Bg(!1),Hl=_r(null),Gl=null,Cs=null,eh=null;function th(){eh=Cs=Gl=null}function nh(t){var e=Hl.current;ft(Hl),t._currentValue=e}function gd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Os(t,e){Gl=t,eh=Cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function Bn(t){var e=t._currentValue;if(eh!==t)if(t={context:t,memoizedValue:e,next:null},Cs===null){if(Gl===null)throw Error(se(308));Cs=t,Gl.dependencies={lanes:0,firstContext:t}}else Cs=Cs.next=t;return e}var Ir=null;function ih(t){Ir===null?Ir=[t]:Ir.push(t)}function Vg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ih(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ui(t,i)}function Ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zi=!1;function rh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ui(t,n)}return r=i.interleaved,r===null?(e.next=e,ih(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ui(t,n)}function gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Gf(t,n)}}function Hp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wl(t,e,n,i){var r=t.updateQueue;Zi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,f=c=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=t,E=o;switch(d=e,p=n,E.tag){case 1:if(g=E.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=E.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=_t({},h,d);break e;case 2:Zi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=p,l=h):f=f.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Gr|=a,t.lanes=a,t.memoizedState=h}}function Gp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var mo={},pi=_r(mo),Ja=_r(mo),Qa=_r(mo);function Ur(t){if(t===mo)throw Error(se(174));return t}function sh(t,e){switch(ut(Qa,e),ut(Ja,t),ut(pi,mo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ku(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ku(e,t)}ft(pi),ut(pi,e)}function js(){ft(pi),ft(Ja),ft(Qa)}function Gg(t){Ur(Qa.current);var e=Ur(pi.current),n=Ku(e,t.type);e!==n&&(ut(Ja,t),ut(pi,n))}function ah(t){Ja.current===t&&(ft(pi),ft(Ja))}var mt=_r(0);function Xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jc=[];function oh(){for(var t=0;t<Jc.length;t++)Jc[t]._workInProgressVersionPrimary=null;Jc.length=0}var vl=Bi.ReactCurrentDispatcher,Qc=Bi.ReactCurrentBatchConfig,Hr=0,xt=null,Dt=null,zt=null,jl=!1,Ia=!1,eo=0,Fy=0;function $t(){throw Error(se(321))}function lh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ei(t[n],e[n]))return!1;return!0}function ch(t,e,n,i,r,s){if(Hr=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vl.current=t===null||t.memoizedState===null?zy:Vy,t=n(i,r),Ia){s=0;do{if(Ia=!1,eo=0,25<=s)throw Error(se(301));s+=1,zt=Dt=null,e.updateQueue=null,vl.current=Hy,t=n(i,r)}while(Ia)}if(vl.current=Yl,e=Dt!==null&&Dt.next!==null,Hr=0,zt=Dt=xt=null,jl=!1,e)throw Error(se(300));return t}function uh(){var t=eo!==0;return eo=0,t}function li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?xt.memoizedState=zt=t:zt=zt.next=t,zt}function zn(){if(Dt===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=zt===null?xt.memoizedState:zt.next;if(e!==null)zt=e,Dt=t;else{if(t===null)throw Error(se(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},zt===null?xt.memoizedState=zt=t:zt=zt.next=t}return zt}function to(t,e){return typeof e=="function"?e(t):e}function eu(t){var e=zn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((Hr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,xt.lanes|=f,Gr|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ei(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,xt.lanes|=s,Gr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tu(t){var e=zn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ei(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Wg(){}function Xg(t,e){var n=xt,i=zn(),r=e(),s=!ei(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,dh($g.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,no(9,Yg.bind(null,n,i,r,e),void 0,null),Vt===null)throw Error(se(349));Hr&30||jg(n,e,r)}return r}function jg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Yg(t,e,n,i){e.value=n,e.getSnapshot=i,qg(e)&&Kg(t)}function $g(t,e,n){return n(function(){qg(e)&&Kg(t)})}function qg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ei(t,n)}catch{return!0}}function Kg(t){var e=Ui(t,1);e!==null&&Qn(e,t,1,-1)}function Wp(t){var e=li();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:to,lastRenderedState:t},e.queue=t,t=t.dispatch=By.bind(null,xt,t),[e.memoizedState,t]}function no(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Zg(){return zn().memoizedState}function xl(t,e,n,i){var r=li();xt.flags|=t,r.memoizedState=no(1|e,n,void 0,i===void 0?null:i)}function gc(t,e,n,i){var r=zn();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var a=Dt.memoizedState;if(s=a.destroy,i!==null&&lh(i,a.deps)){r.memoizedState=no(e,n,s,i);return}}xt.flags|=t,r.memoizedState=no(1|e,n,s,i)}function Xp(t,e){return xl(8390656,8,t,e)}function dh(t,e){return gc(2048,8,t,e)}function Jg(t,e){return gc(4,2,t,e)}function Qg(t,e){return gc(4,4,t,e)}function ev(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function tv(t,e,n){return n=n!=null?n.concat([t]):null,gc(4,4,ev.bind(null,e,t),n)}function fh(){}function nv(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&lh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function iv(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&lh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function rv(t,e,n){return Hr&21?(ei(n,e)||(n=cg(),xt.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function Oy(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Qc.transition;Qc.transition={};try{t(!1),e()}finally{it=n,Qc.transition=i}}function sv(){return zn().memoizedState}function ky(t,e,n){var i=dr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},av(t))ov(e,n);else if(n=Vg(t,e,n,i),n!==null){var r=on();Qn(n,t,i,r),lv(n,e,i)}}function By(t,e,n){var i=dr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(av(t))ov(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ei(o,a)){var l=e.interleaved;l===null?(r.next=r,ih(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Vg(t,e,r,i),n!==null&&(r=on(),Qn(n,t,i,r),lv(n,e,i))}}function av(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function ov(t,e){Ia=jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function lv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Gf(t,n)}}var Yl={readContext:Bn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},zy={readContext:Bn,useCallback:function(t,e){return li().memoizedState=[t,e===void 0?null:e],t},useContext:Bn,useEffect:Xp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xl(4194308,4,ev.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return xl(4,2,t,e)},useMemo:function(t,e){var n=li();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=li();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ky.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=li();return t={current:t},e.memoizedState=t},useState:Wp,useDebugValue:fh,useDeferredValue:function(t){return li().memoizedState=t},useTransition:function(){var t=Wp(!1),e=t[0];return t=Oy.bind(null,t[1]),li().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=li();if(ht){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Vt===null)throw Error(se(349));Hr&30||jg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Xp($g.bind(null,i,s,t),[t]),i.flags|=2048,no(9,Yg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=li(),e=Vt.identifierPrefix;if(ht){var n=bi,i=Ai;n=(i&~(1<<32-Jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Fy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Vy={readContext:Bn,useCallback:nv,useContext:Bn,useEffect:dh,useImperativeHandle:tv,useInsertionEffect:Jg,useLayoutEffect:Qg,useMemo:iv,useReducer:eu,useRef:Zg,useState:function(){return eu(to)},useDebugValue:fh,useDeferredValue:function(t){var e=zn();return rv(e,Dt.memoizedState,t)},useTransition:function(){var t=eu(to)[0],e=zn().memoizedState;return[t,e]},useMutableSource:Wg,useSyncExternalStore:Xg,useId:sv,unstable_isNewReconciler:!1},Hy={readContext:Bn,useCallback:nv,useContext:Bn,useEffect:dh,useImperativeHandle:tv,useInsertionEffect:Jg,useLayoutEffect:Qg,useMemo:iv,useReducer:tu,useRef:Zg,useState:function(){return tu(to)},useDebugValue:fh,useDeferredValue:function(t){var e=zn();return Dt===null?e.memoizedState=t:rv(e,Dt.memoizedState,t)},useTransition:function(){var t=tu(to)[0],e=zn().memoizedState;return[t,e]},useMutableSource:Wg,useSyncExternalStore:Xg,useId:sv,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vc={isMounted:function(t){return(t=t._reactInternals)?$r(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=on(),r=dr(t),s=Ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(Qn(e,t,r,i),gl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=on(),r=dr(t),s=Ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(Qn(e,t,r,i),gl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=on(),i=dr(t),r=Ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=cr(t,r,i),e!==null&&(Qn(e,t,i,n),gl(e,t,i))}};function jp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!$a(n,i)||!$a(r,s):!0}function cv(t,e,n){var i=!1,r=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bn(s):(r=vn(e)?zr:tn.current,i=e.contextTypes,s=(i=i!=null)?Gs(t,r):mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&vc.enqueueReplaceState(e,e.state,null)}function xd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},rh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Bn(s):(s=vn(e)?zr:tn.current,r.context=Gs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&vc.enqueueReplaceState(r,r.state,null),Wl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ys(t,e){try{var n="",i=e;do n+=g_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function nu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _d(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Gy=typeof WeakMap=="function"?WeakMap:Map;function uv(t,e,n){n=Ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ql||(ql=!0,Cd=i),_d(t,e)},n}function dv(t,e,n){n=Ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){_d(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_d(t,e),typeof i!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function $p(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Gy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=iS.bind(null,t,e,n),e.then(t,t))}function qp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ci(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var Wy=Bi.ReactCurrentOwner,mn=!1;function sn(t,e,n,i){e.child=t===null?zg(e,null,n,i):Xs(e,t.child,n,i)}function Zp(t,e,n,i,r){n=n.render;var s=e.ref;return Os(e,r),i=ch(t,e,n,i,s,r),n=uh(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(ht&&n&&Zf(e),e.flags|=1,sn(t,e,i,r),e.child)}function Jp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!yh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,fv(t,e,s,i,r)):(t=Ml(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:$a,n(a,i)&&t.ref===e.ref)return Fi(t,e,r)}return e.flags|=1,t=fr(s,i),t.ref=e.ref,t.return=e,e.child=t}function fv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if($a(s,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,Fi(t,e,r)}return yd(t,e,n,i,r)}function hv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(Ls,Mn),Mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(Ls,Mn),Mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(Ls,Mn),Mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(Ls,Mn),Mn|=i;return sn(t,e,r,n),e.child}function pv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yd(t,e,n,i,r){var s=vn(n)?zr:tn.current;return s=Gs(e,s),Os(e,r),n=ch(t,e,n,i,s,r),i=uh(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(ht&&i&&Zf(e),e.flags|=1,sn(t,e,n,r),e.child)}function Qp(t,e,n,i,r){if(vn(n)){var s=!0;Bl(e)}else s=!1;if(Os(e,r),e.stateNode===null)_l(t,e),cv(e,n,i),xd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bn(c):(c=vn(n)?zr:tn.current,c=Gs(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Yp(e,a,i,c),Zi=!1;var d=e.memoizedState;a.state=d,Wl(e,i,a,r),l=e.memoizedState,o!==i||d!==l||gn.current||Zi?(typeof f=="function"&&(vd(e,n,f,i),l=e.memoizedState),(o=Zi||jp(e,n,o,i,d,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Hg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:jn(e.type,o),a.props=c,h=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=vn(n)?zr:tn.current,l=Gs(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==l)&&Yp(e,a,i,l),Zi=!1,d=e.memoizedState,a.state=d,Wl(e,i,a,r);var g=e.memoizedState;o!==h||d!==g||gn.current||Zi?(typeof p=="function"&&(vd(e,n,p,i),g=e.memoizedState),(c=Zi||jp(e,n,c,i,d,g,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Sd(t,e,n,i,s,r)}function Sd(t,e,n,i,r,s){pv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&kp(e,n,!1),Fi(t,e,s);i=e.stateNode,Wy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Xs(e,t.child,null,s),e.child=Xs(e,null,o,s)):sn(t,e,o,s),e.memoizedState=i.state,r&&kp(e,n,!0),e.child}function mv(t){var e=t.stateNode;e.pendingContext?Op(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Op(t,e.context,!1),sh(t,e.containerInfo)}function em(t,e,n,i,r){return Ws(),Qf(r),e.flags|=256,sn(t,e,n,i),e.child}var Md={dehydrated:null,treeContext:null,retryLane:0};function Ed(t){return{baseLanes:t,cachePool:null,transitions:null}}function gv(t,e,n){var i=e.pendingProps,r=mt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(mt,r&1),t===null)return md(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=yc(a,i,0,null),t=Br(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ed(n),e.memoizedState=Md,t):hh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Xy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=fr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=fr(o,s):(s=Br(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Ed(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Md,i}return s=t.child,t=s.sibling,i=fr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function hh(t,e){return e=yc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Io(t,e,n,i){return i!==null&&Qf(i),Xs(e,t.child,null,n),t=hh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Xy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=nu(Error(se(422))),Io(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=yc({mode:"visible",children:i.children},r,0,null),s=Br(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Xs(e,t.child,null,a),e.child.memoizedState=Ed(a),e.memoizedState=Md,s);if(!(e.mode&1))return Io(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(se(419)),i=nu(s,i,void 0),Io(t,e,a,i)}if(o=(a&t.childLanes)!==0,mn||o){if(i=Vt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ui(t,r),Qn(i,t,r,-1))}return _h(),i=nu(Error(se(421))),Io(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=rS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,An=lr(r.nextSibling),bn=e,ht=!0,$n=null,t!==null&&(In[Un++]=Ai,In[Un++]=bi,In[Un++]=Vr,Ai=t.id,bi=t.overflow,Vr=e),e=hh(e,i.children),e.flags|=4096,e)}function tm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),gd(t.return,e,n)}function iu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function vv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tm(t,n,e);else if(t.tag===19)tm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Xl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),iu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Xl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}iu(e,!0,n,null,s);break;case"together":iu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _l(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jy(t,e,n){switch(e.tag){case 3:mv(e),Ws();break;case 5:Gg(e);break;case 1:vn(e.type)&&Bl(e);break;case 4:sh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(Hl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?gv(t,e,n):(ut(mt,mt.current&1),t=Fi(t,e,n),t!==null?t.sibling:null);ut(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return vv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,hv(t,e,n)}return Fi(t,e,n)}var xv,Td,_v,yv;xv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Td=function(){};_v=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ur(pi.current);var s=null;switch(n){case"input":r=ju(t,r),i=ju(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=qu(t,r),i=qu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ol)}Zu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Va.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Va.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&dt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};yv=function(t,e,n,i){n!==i&&(e.flags|=4)};function da(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Yy(t,e,n){var i=e.pendingProps;switch(Jf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return vn(e.type)&&kl(),qt(e),null;case 3:return i=e.stateNode,js(),ft(gn),ft(tn),oh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(No(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$n!==null&&(Nd($n),$n=null))),Td(t,e),qt(e),null;case 5:ah(e);var r=Ur(Qa.current);if(n=e.type,t!==null&&e.stateNode!=null)_v(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return qt(e),null}if(t=Ur(pi.current),No(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ui]=e,i[Za]=s,t=(e.mode&1)!==0,n){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<wa.length;r++)dt(wa[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":up(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":fp(i,s),dt("invalid",i)}Zu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Lo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Lo(i.textContent,o,t),r=["children",""+o]):Va.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&dt("scroll",i)}switch(n){case"input":Eo(i),dp(i,s,!0);break;case"textarea":Eo(i),hp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ol)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ui]=e,t[Za]=i,xv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Ju(n,i),n){case"dialog":dt("cancel",t),dt("close",t),r=i;break;case"iframe":case"object":case"embed":dt("load",t),r=i;break;case"video":case"audio":for(r=0;r<wa.length;r++)dt(wa[r],t);r=i;break;case"source":dt("error",t),r=i;break;case"img":case"image":case"link":dt("error",t),dt("load",t),r=i;break;case"details":dt("toggle",t),r=i;break;case"input":up(t,i),r=ju(t,i),dt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),dt("invalid",t);break;case"textarea":fp(t,i),r=qu(t,i),dt("invalid",t);break;default:r=i}Zu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Z0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&q0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ha(t,l):typeof l=="number"&&Ha(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Va.hasOwnProperty(s)?l!=null&&s==="onScroll"&&dt("scroll",t):l!=null&&Of(t,s,l,a))}switch(n){case"input":Eo(t),dp(t,i,!1);break;case"textarea":Eo(t),hp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+pr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ol)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)yv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Ur(Qa.current),Ur(pi.current),No(e)){if(i=e.stateNode,n=e.memoizedProps,i[ui]=e,(s=i.nodeValue!==n)&&(t=bn,t!==null))switch(t.tag){case 3:Lo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Lo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ui]=e,e.stateNode=i}return qt(e),null;case 13:if(ft(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&An!==null&&e.mode&1&&!(e.flags&128))kg(),Ws(),e.flags|=98560,s=!1;else if(s=No(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[ui]=e}else Ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else $n!==null&&(Nd($n),$n=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?It===0&&(It=3):_h())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return js(),Td(t,e),t===null&&qa(e.stateNode.containerInfo),qt(e),null;case 10:return nh(e.type._context),qt(e),null;case 17:return vn(e.type)&&kl(),qt(e),null;case 19:if(ft(mt),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)da(s,!1);else{if(It!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Xl(t),a!==null){for(e.flags|=128,da(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(mt,mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>$s&&(e.flags|=128,i=!0,da(s,!1),e.lanes=4194304)}else{if(!i)if(t=Xl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),da(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ht)return qt(e),null}else 2*At()-s.renderingStartTime>$s&&n!==1073741824&&(e.flags|=128,i=!0,da(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=mt.current,ut(mt,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return xh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function $y(t,e){switch(Jf(e),e.tag){case 1:return vn(e.type)&&kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return js(),ft(gn),ft(tn),oh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ah(e),null;case 13:if(ft(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(mt),null;case 4:return js(),null;case 10:return nh(e.type._context),null;case 22:case 23:return xh(),null;case 24:return null;default:return null}}var Uo=!1,Jt=!1,qy=typeof WeakSet=="function"?WeakSet:Set,Se=null;function Ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Et(t,e,i)}else n.current=null}function wd(t,e,n){try{n()}catch(i){Et(t,e,i)}}var nm=!1;function Ky(t,e){if(ld=Il,t=wg(),Kf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++f===i&&(l=a),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cd={focusedElem:t,selectionRange:n},Il=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var E=g.memoizedProps,m=g.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?E:jn(e.type,E),m);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){Et(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return g=nm,nm=!1,g}function Ua(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&wd(e,n,s)}r=r.next}while(r!==i)}}function xc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ad(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Sv(t){var e=t.alternate;e!==null&&(t.alternate=null,Sv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ui],delete e[Za],delete e[fd],delete e[Ny],delete e[Dy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Mv(t){return t.tag===5||t.tag===3||t.tag===4}function im(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ol));else if(i!==4&&(t=t.child,t!==null))for(bd(t,e,n),t=t.sibling;t!==null;)bd(t,e,n),t=t.sibling}function Rd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Rd(t,e,n),t=t.sibling;t!==null;)Rd(t,e,n),t=t.sibling}var Gt=null,Yn=!1;function Gi(t,e,n){for(n=n.child;n!==null;)Ev(t,e,n),n=n.sibling}function Ev(t,e,n){if(hi&&typeof hi.onCommitFiberUnmount=="function")try{hi.onCommitFiberUnmount(uc,n)}catch{}switch(n.tag){case 5:Jt||Ps(n,e);case 6:var i=Gt,r=Yn;Gt=null,Gi(t,e,n),Gt=i,Yn=r,Gt!==null&&(Yn?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(Yn?(t=Gt,n=n.stateNode,t.nodeType===8?Kc(t.parentNode,n):t.nodeType===1&&Kc(t,n),ja(t)):Kc(Gt,n.stateNode));break;case 4:i=Gt,r=Yn,Gt=n.stateNode.containerInfo,Yn=!0,Gi(t,e,n),Gt=i,Yn=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&wd(n,e,a),r=r.next}while(r!==i)}Gi(t,e,n);break;case 1:if(!Jt&&(Ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Et(n,e,o)}Gi(t,e,n);break;case 21:Gi(t,e,n);break;case 22:n.mode&1?(Jt=(i=Jt)||n.memoizedState!==null,Gi(t,e,n),Jt=i):Gi(t,e,n);break;default:Gi(t,e,n)}}function rm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qy),e.forEach(function(i){var r=sS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Hn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Gt=o.stateNode,Yn=!1;break e;case 3:Gt=o.stateNode.containerInfo,Yn=!0;break e;case 4:Gt=o.stateNode.containerInfo,Yn=!0;break e}o=o.return}if(Gt===null)throw Error(se(160));Ev(s,a,r),Gt=null,Yn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Et(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tv(e,t),e=e.sibling}function Tv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hn(e,t),ri(t),i&4){try{Ua(3,t,t.return),xc(3,t)}catch(E){Et(t,t.return,E)}try{Ua(5,t,t.return)}catch(E){Et(t,t.return,E)}}break;case 1:Hn(e,t),ri(t),i&512&&n!==null&&Ps(n,n.return);break;case 5:if(Hn(e,t),ri(t),i&512&&n!==null&&Ps(n,n.return),t.flags&32){var r=t.stateNode;try{Ha(r,"")}catch(E){Et(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&j0(r,s),Ju(o,a);var c=Ju(o,s);for(a=0;a<l.length;a+=2){var f=l[a],h=l[a+1];f==="style"?Z0(r,h):f==="dangerouslySetInnerHTML"?q0(r,h):f==="children"?Ha(r,h):Of(r,f,h,c)}switch(o){case"input":Yu(r,s);break;case"textarea":Y0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ds(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ds(r,!!s.multiple,s.defaultValue,!0):Ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[Za]=s}catch(E){Et(t,t.return,E)}}break;case 6:if(Hn(e,t),ri(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){Et(t,t.return,E)}}break;case 3:if(Hn(e,t),ri(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ja(e.containerInfo)}catch(E){Et(t,t.return,E)}break;case 4:Hn(e,t),ri(t);break;case 13:Hn(e,t),ri(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(gh=At())),i&4&&rm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(c=Jt)||f,Hn(e,t),Jt=c):Hn(e,t),ri(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Se=t,f=t.child;f!==null;){for(h=Se=f;Se!==null;){switch(d=Se,p=d.child,d.tag){case 0:case 11:case 14:case 15:Ua(4,d,d.return);break;case 1:Ps(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(E){Et(i,n,E)}}break;case 5:Ps(d,d.return);break;case 22:if(d.memoizedState!==null){am(h);continue}}p!==null?(p.return=d,Se=p):am(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=K0("display",a))}catch(E){Et(t,t.return,E)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(E){Et(t,t.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Hn(e,t),ri(t),i&4&&rm(t);break;case 21:break;default:Hn(e,t),ri(t)}}function ri(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Mv(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ha(r,""),i.flags&=-33);var s=im(t);Rd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=im(t);bd(t,o,a);break;default:throw Error(se(161))}}catch(l){Et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Zy(t,e,n){Se=t,wv(t)}function wv(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Uo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Jt;o=Uo;var c=Jt;if(Uo=a,(Jt=l)&&!c)for(Se=r;Se!==null;)a=Se,l=a.child,a.tag===22&&a.memoizedState!==null?om(r):l!==null?(l.return=a,Se=l):om(r);for(;s!==null;)Se=s,wv(s),s=s.sibling;Se=r,Uo=o,Jt=c}sm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):sm(t)}}function sm(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||xc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&ja(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Jt||e.flags&512&&Ad(e)}catch(d){Et(e,e.return,d)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function am(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function om(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xc(4,e)}catch(l){Et(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var s=e.return;try{Ad(e)}catch(l){Et(e,s,l)}break;case 5:var a=e.return;try{Ad(e)}catch(l){Et(e,a,l)}}}catch(l){Et(e,e.return,l)}if(e===t){Se=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Se=o;break}Se=e.return}}var Jy=Math.ceil,$l=Bi.ReactCurrentDispatcher,ph=Bi.ReactCurrentOwner,kn=Bi.ReactCurrentBatchConfig,Je=0,Vt=null,Pt=null,Xt=0,Mn=0,Ls=_r(0),It=0,io=null,Gr=0,_c=0,mh=0,Fa=null,pn=null,gh=0,$s=1/0,Ei=null,ql=!1,Cd=null,ur=null,Fo=!1,nr=null,Kl=0,Oa=0,Pd=null,yl=-1,Sl=0;function on(){return Je&6?At():yl!==-1?yl:yl=At()}function dr(t){return t.mode&1?Je&2&&Xt!==0?Xt&-Xt:Uy.transition!==null?(Sl===0&&(Sl=cg()),Sl):(t=it,t!==0||(t=window.event,t=t===void 0?16:gg(t.type)),t):1}function Qn(t,e,n,i){if(50<Oa)throw Oa=0,Pd=null,Error(se(185));fo(t,n,i),(!(Je&2)||t!==Vt)&&(t===Vt&&(!(Je&2)&&(_c|=n),It===4&&Qi(t,Xt)),xn(t,i),n===1&&Je===0&&!(e.mode&1)&&($s=At()+500,mc&&yr()))}function xn(t,e){var n=t.callbackNode;U_(t,e);var i=Dl(t,t===Vt?Xt:0);if(i===0)n!==null&&gp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&gp(n),e===1)t.tag===0?Iy(lm.bind(null,t)):Ug(lm.bind(null,t)),Py(function(){!(Je&6)&&yr()}),n=null;else{switch(ug(i)){case 1:n=Hf;break;case 4:n=og;break;case 16:n=Nl;break;case 536870912:n=lg;break;default:n=Nl}n=Dv(n,Av.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Av(t,e){if(yl=-1,Sl=0,Je&6)throw Error(se(327));var n=t.callbackNode;if(ks()&&t.callbackNode!==n)return null;var i=Dl(t,t===Vt?Xt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Zl(t,i);else{e=i;var r=Je;Je|=2;var s=Rv();(Vt!==t||Xt!==e)&&(Ei=null,$s=At()+500,kr(t,e));do try{tS();break}catch(o){bv(t,o)}while(!0);th(),$l.current=s,Je=r,Pt!==null?e=0:(Vt=null,Xt=0,e=It)}if(e!==0){if(e===2&&(r=id(t),r!==0&&(i=r,e=Ld(t,r))),e===1)throw n=io,kr(t,0),Qi(t,i),xn(t,At()),n;if(e===6)Qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Qy(r)&&(e=Zl(t,i),e===2&&(s=id(t),s!==0&&(i=s,e=Ld(t,s))),e===1))throw n=io,kr(t,0),Qi(t,i),xn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Cr(t,pn,Ei);break;case 3:if(Qi(t,i),(i&130023424)===i&&(e=gh+500-At(),10<e)){if(Dl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){on(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=dd(Cr.bind(null,t,pn,Ei),e);break}Cr(t,pn,Ei);break;case 4:if(Qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Jn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Jy(i/1960))-i,10<i){t.timeoutHandle=dd(Cr.bind(null,t,pn,Ei),i);break}Cr(t,pn,Ei);break;case 5:Cr(t,pn,Ei);break;default:throw Error(se(329))}}}return xn(t,At()),t.callbackNode===n?Av.bind(null,t):null}function Ld(t,e){var n=Fa;return t.current.memoizedState.isDehydrated&&(kr(t,e).flags|=256),t=Zl(t,e),t!==2&&(e=pn,pn=n,e!==null&&Nd(e)),t}function Nd(t){pn===null?pn=t:pn.push.apply(pn,t)}function Qy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ei(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qi(t,e){for(e&=~mh,e&=~_c,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jn(e),i=1<<n;t[n]=-1,e&=~i}}function lm(t){if(Je&6)throw Error(se(327));ks();var e=Dl(t,0);if(!(e&1))return xn(t,At()),null;var n=Zl(t,e);if(t.tag!==0&&n===2){var i=id(t);i!==0&&(e=i,n=Ld(t,i))}if(n===1)throw n=io,kr(t,0),Qi(t,e),xn(t,At()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cr(t,pn,Ei),xn(t,At()),null}function vh(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&($s=At()+500,mc&&yr())}}function Wr(t){nr!==null&&nr.tag===0&&!(Je&6)&&ks();var e=Je;Je|=1;var n=kn.transition,i=it;try{if(kn.transition=null,it=1,t)return t()}finally{it=i,kn.transition=n,Je=e,!(Je&6)&&yr()}}function xh(){Mn=Ls.current,ft(Ls)}function kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Cy(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(Jf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&kl();break;case 3:js(),ft(gn),ft(tn),oh();break;case 5:ah(i);break;case 4:js();break;case 13:ft(mt);break;case 19:ft(mt);break;case 10:nh(i.type._context);break;case 22:case 23:xh()}n=n.return}if(Vt=t,Pt=t=fr(t.current,null),Xt=Mn=e,It=0,io=null,mh=_c=Gr=0,pn=Fa=null,Ir!==null){for(e=0;e<Ir.length;e++)if(n=Ir[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Ir=null}return t}function bv(t,e){do{var n=Pt;try{if(th(),vl.current=Yl,jl){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}jl=!1}if(Hr=0,zt=Dt=xt=null,Ia=!1,eo=0,ph.current=null,n===null||n.return===null){It=1,io=e,Pt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Xt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=qp(a);if(p!==null){p.flags&=-257,Kp(p,a,o,s,e),p.mode&1&&$p(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var E=new Set;E.add(l),e.updateQueue=E}else g.add(l);break e}else{if(!(e&1)){$p(s,c,e),_h();break e}l=Error(se(426))}}else if(ht&&o.mode&1){var m=qp(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Kp(m,a,o,s,e),Qf(Ys(l,o));break e}}s=l=Ys(l,o),It!==4&&(It=2),Fa===null?Fa=[s]:Fa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=uv(s,l,e);Hp(s,u);break e;case 1:o=l;var v=s.type,M=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(ur===null||!ur.has(M)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=dv(s,o,e);Hp(s,S);break e}}s=s.return}while(s!==null)}Pv(n)}catch(A){e=A,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function Rv(){var t=$l.current;return $l.current=Yl,t===null?Yl:t}function _h(){(It===0||It===3||It===2)&&(It=4),Vt===null||!(Gr&268435455)&&!(_c&268435455)||Qi(Vt,Xt)}function Zl(t,e){var n=Je;Je|=2;var i=Rv();(Vt!==t||Xt!==e)&&(Ei=null,kr(t,e));do try{eS();break}catch(r){bv(t,r)}while(!0);if(th(),Je=n,$l.current=i,Pt!==null)throw Error(se(261));return Vt=null,Xt=0,It}function eS(){for(;Pt!==null;)Cv(Pt)}function tS(){for(;Pt!==null&&!A_();)Cv(Pt)}function Cv(t){var e=Nv(t.alternate,t,Mn);t.memoizedProps=t.pendingProps,e===null?Pv(t):Pt=e,ph.current=null}function Pv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$y(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{It=6,Pt=null;return}}else if(n=Yy(n,e,Mn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);It===0&&(It=5)}function Cr(t,e,n){var i=it,r=kn.transition;try{kn.transition=null,it=1,nS(t,e,n,i)}finally{kn.transition=r,it=i}return null}function nS(t,e,n,i){do ks();while(nr!==null);if(Je&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(F_(t,s),t===Vt&&(Pt=Vt=null,Xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fo||(Fo=!0,Dv(Nl,function(){return ks(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var a=it;it=1;var o=Je;Je|=4,ph.current=null,Ky(t,n),Tv(n,t),My(cd),Il=!!ld,cd=ld=null,t.current=n,Zy(n),b_(),Je=o,it=a,kn.transition=s}else t.current=n;if(Fo&&(Fo=!1,nr=t,Kl=r),s=t.pendingLanes,s===0&&(ur=null),P_(n.stateNode),xn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ql)throw ql=!1,t=Cd,Cd=null,t;return Kl&1&&t.tag!==0&&ks(),s=t.pendingLanes,s&1?t===Pd?Oa++:(Oa=0,Pd=t):Oa=0,yr(),null}function ks(){if(nr!==null){var t=ug(Kl),e=kn.transition,n=it;try{if(kn.transition=null,it=16>t?16:t,nr===null)var i=!1;else{if(t=nr,nr=null,Kl=0,Je&6)throw Error(se(331));var r=Je;for(Je|=4,Se=t.current;Se!==null;){var s=Se,a=s.child;if(Se.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Se=c;Se!==null;){var f=Se;switch(f.tag){case 0:case 11:case 15:Ua(8,f,s)}var h=f.child;if(h!==null)h.return=f,Se=h;else for(;Se!==null;){f=Se;var d=f.sibling,p=f.return;if(Sv(f),f===c){Se=null;break}if(d!==null){d.return=p,Se=d;break}Se=p}}}var g=s.alternate;if(g!==null){var E=g.child;if(E!==null){g.child=null;do{var m=E.sibling;E.sibling=null,E=m}while(E!==null)}}Se=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Se=a;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ua(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Se=u;break e}Se=s.return}}var v=t.current;for(Se=v;Se!==null;){a=Se;var M=a.child;if(a.subtreeFlags&2064&&M!==null)M.return=a,Se=M;else e:for(a=v;Se!==null;){if(o=Se,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:xc(9,o)}}catch(A){Et(o,o.return,A)}if(o===a){Se=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Se=S;break e}Se=o.return}}if(Je=r,yr(),hi&&typeof hi.onPostCommitFiberRoot=="function")try{hi.onPostCommitFiberRoot(uc,t)}catch{}i=!0}return i}finally{it=n,kn.transition=e}}return!1}function cm(t,e,n){e=Ys(n,e),e=uv(t,e,1),t=cr(t,e,1),e=on(),t!==null&&(fo(t,1,e),xn(t,e))}function Et(t,e,n){if(t.tag===3)cm(t,t,n);else for(;e!==null;){if(e.tag===3){cm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ur===null||!ur.has(i))){t=Ys(n,t),t=dv(e,t,1),e=cr(e,t,1),t=on(),e!==null&&(fo(e,1,t),xn(e,t));break}}e=e.return}}function iS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=on(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(Xt&n)===n&&(It===4||It===3&&(Xt&130023424)===Xt&&500>At()-gh?kr(t,0):mh|=n),xn(t,e)}function Lv(t,e){e===0&&(t.mode&1?(e=Ao,Ao<<=1,!(Ao&130023424)&&(Ao=4194304)):e=1);var n=on();t=Ui(t,e),t!==null&&(fo(t,e,n),xn(t,n))}function rS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Lv(t,n)}function sS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),Lv(t,n)}var Nv;Nv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,jy(t,e,n);mn=!!(t.flags&131072)}else mn=!1,ht&&e.flags&1048576&&Fg(e,Vl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;_l(t,e),t=e.pendingProps;var r=Gs(e,tn.current);Os(e,n),r=ch(null,e,i,t,r,n);var s=uh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(s=!0,Bl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,rh(e),r.updater=vc,e.stateNode=r,r._reactInternals=e,xd(e,i,t,n),e=Sd(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&Zf(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(_l(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=oS(i),t=jn(i,t),r){case 0:e=yd(null,e,i,t,n);break e;case 1:e=Qp(null,e,i,t,n);break e;case 11:e=Zp(null,e,i,t,n);break e;case 14:e=Jp(null,e,i,jn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),yd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Qp(t,e,i,r,n);case 3:e:{if(mv(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Hg(t,e),Wl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ys(Error(se(423)),e),e=em(t,e,i,n,r);break e}else if(i!==r){r=Ys(Error(se(424)),e),e=em(t,e,i,n,r);break e}else for(An=lr(e.stateNode.containerInfo.firstChild),bn=e,ht=!0,$n=null,n=zg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ws(),i===r){e=Fi(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return Gg(e),t===null&&md(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,ud(i,r)?a=null:s!==null&&ud(i,s)&&(e.flags|=32),pv(t,e),sn(t,e,a,n),e.child;case 6:return t===null&&md(e),null;case 13:return gv(t,e,n);case 4:return sh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Xs(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Zp(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ut(Hl,i._currentValue),i._currentValue=a,s!==null)if(ei(s.value,a)){if(s.children===r.children&&!gn.current){e=Fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ci(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),gd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(se(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),gd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Os(e,n),r=Bn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),Jp(t,e,i,r,n);case 15:return fv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),_l(t,e),e.tag=1,vn(i)?(t=!0,Bl(e)):t=!1,Os(e,n),cv(e,i,r),xd(e,i,r,n),Sd(null,e,i,!0,t,n);case 19:return vv(t,e,n);case 22:return hv(t,e,n)}throw Error(se(156,e.tag))};function Dv(t,e){return ag(t,e)}function aS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new aS(t,e,n,i)}function yh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oS(t){if(typeof t=="function")return yh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bf)return 11;if(t===zf)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ml(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")yh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Ss:return Br(n.children,r,s,e);case kf:a=8,r|=8;break;case Hu:return t=On(12,n,e,r|2),t.elementType=Hu,t.lanes=s,t;case Gu:return t=On(13,n,e,r),t.elementType=Gu,t.lanes=s,t;case Wu:return t=On(19,n,e,r),t.elementType=Wu,t.lanes=s,t;case G0:return yc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case V0:a=10;break e;case H0:a=9;break e;case Bf:a=11;break e;case zf:a=14;break e;case Ki:a=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=On(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Br(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function yc(t,e,n,i){return t=On(22,t,i,e),t.elementType=G0,t.lanes=n,t.stateNode={isHidden:!1},t}function ru(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function su(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function lS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bc(0),this.expirationTimes=Bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Sh(t,e,n,i,r,s,a,o,l){return t=new lS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rh(s),t}function cS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Iv(t){if(!t)return mr;t=t._reactInternals;e:{if($r(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(vn(n))return Ig(t,n,e)}return e}function Uv(t,e,n,i,r,s,a,o,l){return t=Sh(n,i,!0,t,r,s,a,o,l),t.context=Iv(null),n=t.current,i=on(),r=dr(n),s=Ci(i,r),s.callback=e??null,cr(n,s,r),t.current.lanes=r,fo(t,r,i),xn(t,i),t}function Sc(t,e,n,i){var r=e.current,s=on(),a=dr(r);return n=Iv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ci(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=cr(r,e,a),t!==null&&(Qn(t,r,a,s),gl(t,r,a)),a}function Jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function um(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mh(t,e){um(t,e),(t=t.alternate)&&um(t,e)}function uS(){return null}var Fv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Eh(t){this._internalRoot=t}Mc.prototype.render=Eh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Sc(t,e,null,null)};Mc.prototype.unmount=Eh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){Sc(null,t,null,null)}),e[Ii]=null}};function Mc(t){this._internalRoot=t}Mc.prototype.unstable_scheduleHydration=function(t){if(t){var e=hg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ji.length&&e!==0&&e<Ji[n].priority;n++);Ji.splice(n,0,t),n===0&&mg(t)}};function Th(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ec(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dm(){}function dS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Jl(a);s.call(c)}}var a=Uv(e,i,t,0,null,!1,!1,"",dm);return t._reactRootContainer=a,t[Ii]=a.current,qa(t.nodeType===8?t.parentNode:t),Wr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Jl(l);o.call(c)}}var l=Sh(t,0,!1,null,null,!1,!1,"",dm);return t._reactRootContainer=l,t[Ii]=l.current,qa(t.nodeType===8?t.parentNode:t),Wr(function(){Sc(e,l,n,i)}),l}function Tc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Jl(a);o.call(l)}}Sc(e,a,t,r)}else a=dS(n,e,t,r,i);return Jl(a)}dg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ta(e.pendingLanes);n!==0&&(Gf(e,n|1),xn(e,At()),!(Je&6)&&($s=At()+500,yr()))}break;case 13:Wr(function(){var i=Ui(t,1);if(i!==null){var r=on();Qn(i,t,1,r)}}),Mh(t,1)}};Wf=function(t){if(t.tag===13){var e=Ui(t,134217728);if(e!==null){var n=on();Qn(e,t,134217728,n)}Mh(t,134217728)}};fg=function(t){if(t.tag===13){var e=dr(t),n=Ui(t,e);if(n!==null){var i=on();Qn(n,t,e,i)}Mh(t,e)}};hg=function(){return it};pg=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};ed=function(t,e,n){switch(e){case"input":if(Yu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=pc(i);if(!r)throw Error(se(90));X0(i),Yu(i,r)}}}break;case"textarea":Y0(t,n);break;case"select":e=n.value,e!=null&&Ds(t,!!n.multiple,e,!1)}};eg=vh;tg=Wr;var fS={usingClientEntryPoint:!1,Events:[po,ws,pc,J0,Q0,vh]},fa={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hS={bundleType:fa.bundleType,version:fa.version,rendererPackageName:fa.rendererPackageName,rendererConfig:fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=rg(t),t===null?null:t.stateNode},findFiberByHostInstance:fa.findFiberByHostInstance||uS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oo.isDisabled&&Oo.supportsFiber)try{uc=Oo.inject(hS),hi=Oo}catch{}}Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fS;Pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Th(e))throw Error(se(200));return cS(t,e,null,n)};Pn.createRoot=function(t,e){if(!Th(t))throw Error(se(299));var n=!1,i="",r=Fv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Sh(t,1,!1,null,null,n,!1,i,r),t[Ii]=e.current,qa(t.nodeType===8?t.parentNode:t),new Eh(e)};Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=rg(e),t=t===null?null:t.stateNode,t};Pn.flushSync=function(t){return Wr(t)};Pn.hydrate=function(t,e,n){if(!Ec(e))throw Error(se(200));return Tc(null,t,e,!0,n)};Pn.hydrateRoot=function(t,e,n){if(!Th(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Fv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Uv(e,null,t,1,n??null,r,!1,s,a),t[Ii]=e.current,qa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Mc(e)};Pn.render=function(t,e,n){if(!Ec(e))throw Error(se(200));return Tc(null,t,e,!1,n)};Pn.unmountComponentAtNode=function(t){if(!Ec(t))throw Error(se(40));return t._reactRootContainer?(Wr(function(){Tc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ii]=null})}),!0):!1};Pn.unstable_batchedUpdates=vh;Pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ec(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Tc(t,e,n,!1,i)};Pn.version="18.3.1-next-f1338f8080-20240426";function Ov(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ov)}catch(t){console.error(t)}}Ov(),O0.exports=Pn;var pS=O0.exports,kv,fm=pS;kv=fm.createRoot,fm.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ro(){return ro=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ro.apply(null,arguments)}var ir;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ir||(ir={}));const hm="popstate";function mS(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return Dd("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Ql(r)}return vS(e,n,null,t)}function Lt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function wh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gS(){return Math.random().toString(36).substr(2,8)}function pm(t,e){return{usr:t.state,key:t.key,idx:e}}function Dd(t,e,n,i){return n===void 0&&(n=null),ro({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?na(e):e,{state:n,key:e&&e.key||i||gS()})}function Ql(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function na(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function vS(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=ir.Pop,l=null,c=f();c==null&&(c=0,a.replaceState(ro({},a.state,{idx:c}),""));function f(){return(a.state||{idx:null}).idx}function h(){o=ir.Pop;let m=f(),u=m==null?null:m-c;c=m,l&&l({action:o,location:E.location,delta:u})}function d(m,u){o=ir.Push;let v=Dd(E.location,m,u);c=f()+1;let M=pm(v,c),S=E.createHref(v);try{a.pushState(M,"",S)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;r.location.assign(S)}s&&l&&l({action:o,location:E.location,delta:1})}function p(m,u){o=ir.Replace;let v=Dd(E.location,m,u);c=f();let M=pm(v,c),S=E.createHref(v);a.replaceState(M,"",S),s&&l&&l({action:o,location:E.location,delta:0})}function g(m){let u=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof m=="string"?m:Ql(m);return v=v.replace(/ $/,"%20"),Lt(u,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,u)}let E={get action(){return o},get location(){return t(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(hm,h),l=m,()=>{r.removeEventListener(hm,h),l=null}},createHref(m){return e(r,m)},createURL:g,encodeLocation(m){let u=g(m);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:d,replace:p,go(m){return a.go(m)}};return E}var mm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(mm||(mm={}));function xS(t,e,n){return n===void 0&&(n="/"),_S(t,e,n)}function _S(t,e,n,i){let r=typeof e=="string"?na(e):e,s=Ah(r.pathname||"/",n);if(s==null)return null;let a=Bv(t);yS(a);let o=null,l=NS(s);for(let c=0;o==null&&c<a.length;++c)o=CS(a[c],l);return o}function Bv(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(Lt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=hr([i,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(Lt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Bv(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:bS(c,s.index),routesMeta:f})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of zv(s.path))r(s,a,l)}),e}function zv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=zv(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function yS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:RS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const SS=/^:[\w-]+$/,MS=3,ES=2,TS=1,wS=10,AS=-2,gm=t=>t==="*";function bS(t,e){let n=t.split("/"),i=n.length;return n.some(gm)&&(i+=AS),e&&(i+=ES),n.filter(r=>!gm(r)).reduce((r,s)=>r+(SS.test(s)?MS:s===""?TS:wS),i)}function RS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function CS(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",h=PS({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),d=l.route;if(!h)return null;Object.assign(r,h.params),a.push({params:r,pathname:hr([s,h.pathname]),pathnameBase:OS(hr([s,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(s=hr([s,h.pathnameBase]))}return a}function PS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=LS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,f,h)=>{let{paramName:d,isOptional:p}=f;if(d==="*"){let E=o[h]||"";a=s.slice(0,s.length-E.length).replace(/(.)\/+$/,"$1")}const g=o[h];return p&&!g?c[d]=void 0:c[d]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function LS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),wh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function NS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return wh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ah(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const DS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,IS=t=>DS.test(t);function US(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?na(t):t,s;if(n)if(IS(n))s=n;else{if(n.includes("//")){let a=n;n=Gv(n),wh(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=vm(n.substring(1),"/"):s=vm(n,e)}else s=e;return{pathname:s,search:kS(i),hash:BS(r)}}function vm(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function au(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function FS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Vv(t,e){let n=FS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Hv(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=na(t):(r=ro({},t),Lt(!r.pathname||!r.pathname.includes("?"),au("?","pathname","search",r)),Lt(!r.pathname||!r.pathname.includes("#"),au("#","pathname","hash",r)),Lt(!r.search||!r.search.includes("#"),au("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let h=e.length-1;if(!i&&a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),h-=1;r.pathname=d.join("/")}o=h>=0?e[h]:"/"}let l=US(r,o),c=a&&a!=="/"&&a.endsWith("/"),f=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const Gv=t=>t.replace(/\/\/+/g,"/"),hr=t=>Gv(t.join("/")),OS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),kS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,BS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function zS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Wv=["post","put","patch","delete"];new Set(Wv);const VS=["get",...Wv];new Set(VS);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function so(){return so=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},so.apply(null,arguments)}const bh=Me.createContext(null),HS=Me.createContext(null),qr=Me.createContext(null),wc=Me.createContext(null),Kr=Me.createContext({outlet:null,matches:[],isDataRoute:!1}),Xv=Me.createContext(null);function GS(t,e){let{relative:n}=e===void 0?{}:e;go()||Lt(!1);let{basename:i,navigator:r}=Me.useContext(qr),{hash:s,pathname:a,search:o}=Yv(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:hr([i,a])),r.createHref({pathname:l,search:o,hash:s})}function go(){return Me.useContext(wc)!=null}function Ac(){return go()||Lt(!1),Me.useContext(wc).location}function jv(t){Me.useContext(qr).static||Me.useLayoutEffect(t)}function WS(){let{isDataRoute:t}=Me.useContext(Kr);return t?i1():XS()}function XS(){go()||Lt(!1);let t=Me.useContext(bh),{basename:e,future:n,navigator:i}=Me.useContext(qr),{matches:r}=Me.useContext(Kr),{pathname:s}=Ac(),a=JSON.stringify(Vv(r,n.v7_relativeSplatPath)),o=Me.useRef(!1);return jv(()=>{o.current=!0}),Me.useCallback(function(c,f){if(f===void 0&&(f={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let h=Hv(c,JSON.parse(a),s,f.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:hr([e,h.pathname])),(f.replace?i.replace:i.push)(h,f.state,f)},[e,i,a,s,t])}function Yv(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=Me.useContext(qr),{matches:r}=Me.useContext(Kr),{pathname:s}=Ac(),a=JSON.stringify(Vv(r,i.v7_relativeSplatPath));return Me.useMemo(()=>Hv(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function jS(t,e){return YS(t,e)}function YS(t,e,n,i){go()||Lt(!1);let{navigator:r}=Me.useContext(qr),{matches:s}=Me.useContext(Kr),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=Ac(),f;if(e){var h;let m=typeof e=="string"?na(e):e;l==="/"||(h=m.pathname)!=null&&h.startsWith(l)||Lt(!1),f=m}else f=c;let d=f.pathname||"/",p=d;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(m.length).join("/")}let g=xS(t,{pathname:p}),E=JS(g&&g.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:hr([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:hr([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&E?Me.createElement(wc.Provider,{value:{location:so({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:ir.Pop}},E):E}function $S(){let t=n1(),e=zS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Me.createElement(Me.Fragment,null,Me.createElement("h2",null,"Unexpected Application Error!"),Me.createElement("h3",{style:{fontStyle:"italic"}},e),n?Me.createElement("pre",{style:r},n):null,null)}const qS=Me.createElement($S,null);class KS extends Me.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?Me.createElement(Kr.Provider,{value:this.props.routeContext},Me.createElement(Xv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ZS(t){let{routeContext:e,match:n,children:i}=t,r=Me.useContext(bh);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),Me.createElement(Kr.Provider,{value:e},i)}function JS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let f=a.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);f>=0||Lt(!1),a=a.slice(0,Math.min(a.length,f+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<a.length;f++){let h=a[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=f),h.route.id){let{loaderData:d,errors:p}=n,g=h.route.loader&&d[h.route.id]===void 0&&(!p||p[h.route.id]===void 0);if(h.route.lazy||g){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((f,h,d)=>{let p,g=!1,E=null,m=null;n&&(p=o&&h.route.id?o[h.route.id]:void 0,E=h.route.errorElement||qS,l&&(c<0&&d===0?(r1("route-fallback"),g=!0,m=null):c===d&&(g=!0,m=h.route.hydrateFallbackElement||null)));let u=e.concat(a.slice(0,d+1)),v=()=>{let M;return p?M=E:g?M=m:h.route.Component?M=Me.createElement(h.route.Component,null):h.route.element?M=h.route.element:M=f,Me.createElement(ZS,{match:h,routeContext:{outlet:f,matches:u,isDataRoute:n!=null},children:M})};return n&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?Me.createElement(KS,{location:n.location,revalidation:n.revalidation,component:E,error:p,children:v(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):v()},null)}var $v=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}($v||{}),qv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(qv||{});function QS(t){let e=Me.useContext(bh);return e||Lt(!1),e}function e1(t){let e=Me.useContext(HS);return e||Lt(!1),e}function t1(t){let e=Me.useContext(Kr);return e||Lt(!1),e}function Kv(t){let e=t1(),n=e.matches[e.matches.length-1];return n.route.id||Lt(!1),n.route.id}function n1(){var t;let e=Me.useContext(Xv),n=e1(),i=Kv();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function i1(){let{router:t}=QS($v.UseNavigateStable),e=Kv(qv.UseNavigateStable),n=Me.useRef(!1);return jv(()=>{n.current=!0}),Me.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,so({fromRouteId:e},s)))},[t,e])}const xm={};function r1(t,e,n){xm[t]||(xm[t]=!0)}function s1(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function oi(t){Lt(!1)}function a1(t){let{basename:e="/",children:n=null,location:i,navigationType:r=ir.Pop,navigator:s,static:a=!1,future:o}=t;go()&&Lt(!1);let l=e.replace(/^\/*/,"/"),c=Me.useMemo(()=>({basename:l,navigator:s,static:a,future:so({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=na(i));let{pathname:f="/",search:h="",hash:d="",state:p=null,key:g="default"}=i,E=Me.useMemo(()=>{let m=Ah(f,l);return m==null?null:{location:{pathname:m,search:h,hash:d,state:p,key:g},navigationType:r}},[l,f,h,d,p,g,r]);return E==null?null:Me.createElement(qr.Provider,{value:c},Me.createElement(wc.Provider,{children:n,value:E}))}function o1(t){let{children:e,location:n}=t;return jS(Id(e),n)}new Promise(()=>{});function Id(t,e){e===void 0&&(e=[]);let n=[];return Me.Children.forEach(t,(i,r)=>{if(!Me.isValidElement(i))return;let s=[...e,r];if(i.type===Me.Fragment){n.push.apply(n,Id(i.props.children,s));return}i.type!==oi&&Lt(!1),!i.props.index||!i.props.children||Lt(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Id(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ud(){return Ud=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ud.apply(null,arguments)}function l1(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function c1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function u1(t,e){return t.button===0&&(!e||e==="_self")&&!c1(t)}const d1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],f1="6";try{window.__reactRouterVersion=f1}catch{}const h1="startTransition",_m=i_[h1];function p1(t){let{basename:e,children:n,future:i,window:r}=t,s=Me.useRef();s.current==null&&(s.current=mS({window:r,v5Compat:!0}));let a=s.current,[o,l]=Me.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},f=Me.useCallback(h=>{c&&_m?_m(()=>l(h)):l(h)},[l,c]);return Me.useLayoutEffect(()=>a.listen(f),[a,f]),Me.useEffect(()=>s1(i),[i]),Me.createElement(a1,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const m1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",g1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Er=Me.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:f,viewTransition:h}=e,d=l1(e,d1),{basename:p}=Me.useContext(qr),g,E=!1;if(typeof c=="string"&&g1.test(c)&&(g=c,m1))try{let M=new URL(window.location.href),S=c.startsWith("//")?new URL(M.protocol+c):new URL(c),A=Ah(S.pathname,p);S.origin===M.origin&&A!=null?c=A+S.search+S.hash:E=!0}catch{}let m=GS(c,{relative:r}),u=v1(c,{replace:a,state:o,target:l,preventScrollReset:f,relative:r,viewTransition:h});function v(M){i&&i(M),M.defaultPrevented||u(M)}return Me.createElement("a",Ud({},d,{href:g||m,onClick:E||s?i:v,ref:n,target:l}))});var ym;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ym||(ym={}));var Sm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Sm||(Sm={}));function v1(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=WS(),c=Ac(),f=Yv(t,{relative:a});return Me.useCallback(h=>{if(u1(h,n)){h.preventDefault();let d=i!==void 0?i:Ql(c)===Ql(f);l(t,{replace:d,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,f,i,r,n,t,s,a,o])}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rh="185",x1=0,Mm=1,_1=2,El=1,y1=2,Aa=3,gr=0,ln=1,qn=2,Pi=0,Bs=1,Ti=2,Em=3,Tm=4,S1=5,Lr=100,M1=101,E1=102,T1=103,w1=104,A1=200,b1=201,R1=202,C1=203,Fd=204,Od=205,P1=206,L1=207,N1=208,D1=209,I1=210,U1=211,F1=212,O1=213,k1=214,kd=0,Bd=1,zd=2,qs=3,Vd=4,Hd=5,Gd=6,Wd=7,Zv=0,B1=1,z1=2,mi=0,Jv=1,Qv=2,ex=3,Ch=4,tx=5,nx=6,ix=7,rx=300,Xr=301,Ks=302,ou=303,lu=304,bc=306,Xd=1e3,Ri=1001,jd=1002,Wt=1003,V1=1004,ko=1005,Qt=1006,cu=1007,Fr=1008,wn=1009,sx=1010,ax=1011,ao=1012,Ph=1013,vi=1014,di=1015,Oi=1016,Lh=1017,Nh=1018,oo=1020,ox=35902,lx=35899,cx=1021,ux=1022,Zn=1023,ki=1026,Or=1027,dx=1028,Dh=1029,jr=1030,Ih=1031,Uh=1033,Tl=33776,wl=33777,Al=33778,bl=33779,Yd=35840,$d=35841,qd=35842,Kd=35843,Zd=36196,Jd=37492,Qd=37496,ef=37488,tf=37489,ec=37490,nf=37491,rf=37808,sf=37809,af=37810,of=37811,lf=37812,cf=37813,uf=37814,df=37815,ff=37816,hf=37817,pf=37818,mf=37819,gf=37820,vf=37821,xf=36492,_f=36494,yf=36495,Sf=36283,Mf=36284,tc=36285,Ef=36286,H1=3200,Tf=0,G1=1,er="",En="srgb",nc="srgb-linear",ic="linear",tt="srgb",ns=7680,wm=519,W1=512,X1=513,j1=514,Fh=515,Y1=516,$1=517,Oh=518,q1=519,wf=35044,Am="300 es",fi=2e3,lo=2001;function K1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function rc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Z1(){const t=rc("canvas");return t.style.display="block",t}const bm={};function sc(...t){const e="THREE."+t.shift();console.log(e,...t)}function fx(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function De(...t){t=fx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function $e(...t){t=fx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function zs(...t){const e=t.join(" ");e in bm||(bm[e]=!0,De(...t))}function J1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Q1={[kd]:Bd,[zd]:Gd,[Vd]:Wd,[qs]:Hd,[Bd]:kd,[Gd]:zd,[Wd]:Vd,[Hd]:qs};class Zr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rm=1234567;const ka=Math.PI/180,co=180/Math.PI;function Li(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function Xe(t,e,n){return Math.max(e,Math.min(n,t))}function kh(t,e){return(t%e+e)%e}function eM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function tM(t,e,n){return t!==e?(n-t)/(e-t):0}function Ba(t,e,n){return(1-n)*t+n*e}function nM(t,e,n,i){return Ba(t,e,1-Math.exp(-n*i))}function iM(t,e=1){return e-Math.abs(kh(t,e*2)-e)}function rM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function sM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function aM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function oM(t,e){return t+Math.random()*(e-t)}function lM(t){return t*(.5-Math.random())}function cM(t){t!==void 0&&(Rm=t);let e=Rm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uM(t){return t*ka}function dM(t){return t*co}function fM(t){return(t&t-1)===0&&t!==0}function hM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function pM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function mM(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),f=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":t.set(o*f,l*h,l*d,o*c);break;case"YZY":t.set(l*d,o*f,l*h,o*c);break;case"ZXZ":t.set(l*h,l*d,o*f,o*c);break;case"XZX":t.set(o*f,l*g,l*p,o*c);break;case"YXY":t.set(l*p,o*f,l*g,o*c);break;case"ZYZ":t.set(l*g,l*p,o*f,o*c);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Kn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function nt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Cm={DEG2RAD:ka,RAD2DEG:co,generateUUID:Li,clamp:Xe,euclideanModulo:kh,mapLinear:eM,inverseLerp:tM,lerp:Ba,damp:nM,pingpong:iM,smoothstep:rM,smootherstep:sM,randInt:aM,randFloat:oM,randFloatSpread:lM,seededRandom:cM,degToRad:uM,radToDeg:dM,isPowerOfTwo:fM,ceilPowerOfTwo:hM,floorPowerOfTwo:pM,setQuaternionFromProperEuler:mM,normalize:nt,denormalize:Kn},Wh=class Wh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wh.prototype.isVector2=!0;let ke=Wh;class ia{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],d=s[a+0],p=s[a+1],g=s[a+2],E=s[a+3];if(h!==E||l!==d||c!==p||f!==g){let m=l*d+c*p+f*g+h*E;m<0&&(d=-d,p=-p,g=-g,E=-E,m=-m);let u=1-o;if(m<.9995){const v=Math.acos(m),M=Math.sin(v);u=Math.sin(u*v)/M,o=Math.sin(o*v)/M,l=l*u+d*o,c=c*u+p*o,f=f*u+g*o,h=h*u+E*o}else{l=l*u+d*o,c=c*u+p*o,f=f*u+g*o,h=h*u+E*o;const v=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=v,c*=v,f*=v,h*=v}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[n]=o*g+f*h+l*p-c*d,e[n+1]=l*g+f*d+c*h-o*p,e[n+2]=c*g+f*p+o*d-l*h,e[n+3]=f*g-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),h=o(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*f*h+c*p*g,this._y=c*p*h-d*f*g,this._z=c*f*g+d*p*h,this._w=c*f*h-d*p*g;break;case"YXZ":this._x=d*f*h+c*p*g,this._y=c*p*h-d*f*g,this._z=c*f*g-d*p*h,this._w=c*f*h+d*p*g;break;case"ZXY":this._x=d*f*h-c*p*g,this._y=c*p*h+d*f*g,this._z=c*f*g+d*p*h,this._w=c*f*h-d*p*g;break;case"ZYX":this._x=d*f*h-c*p*g,this._y=c*p*h+d*f*g,this._z=c*f*g-d*p*h,this._w=c*f*h+d*p*g;break;case"YZX":this._x=d*f*h+c*p*g,this._y=c*p*h+d*f*g,this._z=c*f*g-d*p*h,this._w=c*f*h-d*p*g;break;case"XZY":this._x=d*f*h-c*p*g,this._y=c*p*h-d*f*g,this._z=c*f*g+d*p*h,this._w=c*f*h+d*p*g;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(f-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Xh=class Xh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Pm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Pm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*f,this.y=i+l*f+o*c-s*h,this.z=r+l*h+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uu.copy(this).projectOnVector(e),this.sub(uu)}reflect(e){return this.sub(uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xh.prototype.isVector3=!0;let k=Xh;const uu=new k,Pm=new ia,jh=class jh{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],p=i[5],g=i[8],E=r[0],m=r[3],u=r[6],v=r[1],M=r[4],S=r[7],A=r[2],w=r[5],R=r[8];return s[0]=a*E+o*v+l*A,s[3]=a*m+o*M+l*w,s[6]=a*u+o*S+l*R,s[1]=c*E+f*v+h*A,s[4]=c*m+f*M+h*w,s[7]=c*u+f*S+h*R,s[2]=d*E+p*v+g*A,s[5]=d*m+p*M+g*w,s[8]=d*u+p*S+g*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*a-o*c,d=o*l-f*s,p=c*s-a*l,g=n*h+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/g;return e[0]=h*E,e[1]=(r*c-f*i)*E,e[2]=(o*i-r*a)*E,e[3]=d*E,e[4]=(f*n-r*l)*E,e[5]=(r*s-o*n)*E,e[6]=p*E,e[7]=(i*l-c*n)*E,e[8]=(a*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(du.makeScale(e,n)),this}rotate(e){return zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(du.makeRotation(-e)),this}translate(e,n){return zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(du.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};jh.prototype.isMatrix3=!0;let Ie=jh;const du=new Ie,Lm=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nm=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gM(){const t={enabled:!0,workingColorSpace:nc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===tt&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(r.r=Vs(r.r),r.g=Vs(r.g),r.b=Vs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===er?ic:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[nc]:{primaries:e,whitePoint:i,transfer:ic,toXYZ:Lm,fromXYZ:Nm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:Lm,fromXYZ:Nm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),t}const je=gM();function Ni(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let is;class vM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{is===void 0&&(is=rc("canvas")),is.width=e.width,is.height=e.height;const r=is.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=is}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=rc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ni(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ni(n[i]/255)*255):n[i]=Ni(n[i]);return{data:n,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xM=0;class Bh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(fu(r[a].image)):s.push(fu(r[a]))}else s=fu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function fu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?vM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let _M=0;const hu=new k;class en extends Zr{constructor(e=en.DEFAULT_IMAGE,n=en.DEFAULT_MAPPING,i=Ri,r=Ri,s=Qt,a=Fr,o=Zn,l=wn,c=en.DEFAULT_ANISOTROPY,f=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=Li(),this.name="",this.source=new Bh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hu).x}get height(){return this.source.getSize(hu).y}get depth(){return this.source.getSize(hu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){De(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xd:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case jd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xd:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case jd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=rx;en.DEFAULT_ANISOTROPY=1;const Yh=class Yh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],p=l[5],g=l[9],E=l[2],m=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,S=(p+1)/2,A=(u+1)/2,w=(f+d)/4,R=(h+E)/4,_=(g+m)/4;return M>S&&M>A?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=w/i,s=R/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=_/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=_/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(h-E)*(h-E)+(d-f)*(d-f));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-E)/v,this.z=(d-f)/v,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this.w=Xe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this.w=Xe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yh.prototype.isVector4=!0;let vt=Yh;class yM extends Zr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new vt(0,0,e,n),this.scissorTest=!1,this.viewport=new vt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new en(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Bh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends yM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class hx extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class SM extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lc=class lc{constructor(e,n,i,r,s,a,o,l,c,f,h,d,p,g,E,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,h,d,p,g,E,m)}set(e,n,i,r,s,a,o,l,c,f,h,d,p,g,E,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=p,u[7]=g,u[11]=E,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/rs.setFromMatrixColumn(e,0).length(),s=1/rs.setFromMatrixColumn(e,1).length(),a=1/rs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*f,p=a*h,g=o*f,E=o*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=p+g*c,n[5]=d-E*c,n[9]=-o*l,n[2]=E-d*c,n[6]=g+p*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*f,p=l*h,g=c*f,E=c*h;n[0]=d+E*o,n[4]=g*o-p,n[8]=a*c,n[1]=a*h,n[5]=a*f,n[9]=-o,n[2]=p*o-g,n[6]=E+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*f,p=l*h,g=c*f,E=c*h;n[0]=d-E*o,n[4]=-a*h,n[8]=g+p*o,n[1]=p+g*o,n[5]=a*f,n[9]=E-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*f,p=a*h,g=o*f,E=o*h;n[0]=l*f,n[4]=g*c-p,n[8]=d*c+E,n[1]=l*h,n[5]=E*c+d,n[9]=p*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,E=o*c;n[0]=l*f,n[4]=E-d*h,n[8]=g*h+p,n[1]=h,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=p*h+g,n[10]=d-E*h}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,E=o*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+E,n[5]=a*f,n[9]=p*h-g,n[2]=g*h-p,n[6]=o*f,n[10]=E*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(MM,e,EM)}lookAt(e,n,i){const r=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Wi.crossVectors(i,yn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Wi.crossVectors(i,yn)),Wi.normalize(),Bo.crossVectors(yn,Wi),r[0]=Wi.x,r[4]=Bo.x,r[8]=yn.x,r[1]=Wi.y,r[5]=Bo.y,r[9]=yn.y,r[2]=Wi.z,r[6]=Bo.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],p=i[13],g=i[2],E=i[6],m=i[10],u=i[14],v=i[3],M=i[7],S=i[11],A=i[15],w=r[0],R=r[4],_=r[8],b=r[12],P=r[1],L=r[5],B=r[9],q=r[13],ee=r[2],z=r[6],K=r[10],V=r[14],D=r[3],j=r[7],ne=r[11],re=r[15];return s[0]=a*w+o*P+l*ee+c*D,s[4]=a*R+o*L+l*z+c*j,s[8]=a*_+o*B+l*K+c*ne,s[12]=a*b+o*q+l*V+c*re,s[1]=f*w+h*P+d*ee+p*D,s[5]=f*R+h*L+d*z+p*j,s[9]=f*_+h*B+d*K+p*ne,s[13]=f*b+h*q+d*V+p*re,s[2]=g*w+E*P+m*ee+u*D,s[6]=g*R+E*L+m*z+u*j,s[10]=g*_+E*B+m*K+u*ne,s[14]=g*b+E*q+m*V+u*re,s[3]=v*w+M*P+S*ee+A*D,s[7]=v*R+M*L+S*z+A*j,s[11]=v*_+M*B+S*K+A*ne,s[15]=v*b+M*q+S*V+A*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],p=e[14],g=e[3],E=e[7],m=e[11],u=e[15],v=l*p-c*d,M=o*p-c*h,S=o*d-l*h,A=a*p-c*f,w=a*d-l*f,R=a*h-o*f;return n*(E*v-m*M+u*S)-i*(g*v-m*A+u*w)+r*(g*M-E*A+u*R)-s*(g*S-E*w+m*R)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return n*(a*f-o*c)-i*(s*f-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],p=e[11],g=e[12],E=e[13],m=e[14],u=e[15],v=n*o-i*a,M=n*l-r*a,S=n*c-s*a,A=i*l-r*o,w=i*c-s*o,R=r*c-s*l,_=f*E-h*g,b=f*m-d*g,P=f*u-p*g,L=h*m-d*E,B=h*u-p*E,q=d*u-p*m,ee=v*q-M*B+S*L+A*P-w*b+R*_;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/ee;return e[0]=(o*q-l*B+c*L)*z,e[1]=(r*B-i*q-s*L)*z,e[2]=(E*R-m*w+u*A)*z,e[3]=(d*w-h*R-p*A)*z,e[4]=(l*P-a*q-c*b)*z,e[5]=(n*q-r*P+s*b)*z,e[6]=(m*S-g*R-u*M)*z,e[7]=(f*R-d*S+p*M)*z,e[8]=(a*B-o*P+c*_)*z,e[9]=(i*P-n*B-s*_)*z,e[10]=(g*w-E*S+u*v)*z,e[11]=(h*S-f*w-p*v)*z,e[12]=(o*b-a*L-l*_)*z,e[13]=(n*L-i*b+r*_)*z,e[14]=(E*M-g*A-m*v)*z,e[15]=(f*A-h*M+d*v)*z,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,h=o+o,d=s*c,p=s*f,g=s*h,E=a*f,m=a*h,u=o*h,v=l*c,M=l*f,S=l*h,A=i.x,w=i.y,R=i.z;return r[0]=(1-(E+u))*A,r[1]=(p+S)*A,r[2]=(g-M)*A,r[3]=0,r[4]=(p-S)*w,r[5]=(1-(d+u))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+M)*R,r[9]=(m-v)*R,r[10]=(1-(d+E))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=rs.set(r[0],r[1],r[2]).length();const o=rs.set(r[4],r[5],r[6]).length(),l=rs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Gn.copy(this);const c=1/a,f=1/o,h=1/l;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=f,Gn.elements[5]*=f,Gn.elements[6]*=f,Gn.elements[8]*=h,Gn.elements[9]*=h,Gn.elements[10]*=h,n.setFromRotationMatrix(Gn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=fi,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let g,E;if(l)g=s/(a-s),E=a*s/(a-s);else if(o===fi)g=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===lo)g=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=fi,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,E;if(l)g=1/(a-s),E=a/(a-s);else if(o===fi)g=-2/(a-s),E=-(a+s)/(a-s);else if(o===lo)g=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};lc.prototype.isMatrix4=!0;let pt=lc;const rs=new k,Gn=new pt,MM=new k(0,0,0),EM=new k(1,1,1),Wi=new k,Bo=new k,yn=new k,Dm=new pt,Im=new ia;class vr{constructor(e=0,n=0,i=0,r=vr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Im.setFromEuler(this),this.setFromQuaternion(Im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vr.DEFAULT_ORDER="XYZ";class px{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let TM=0;const Um=new k,ss=new ia,xi=new pt,zo=new k,ha=new k,wM=new k,AM=new ia,Fm=new k(1,0,0),Om=new k(0,1,0),km=new k(0,0,1),Bm={type:"added"},bM={type:"removed"},as={type:"childadded",child:null},pu={type:"childremoved",child:null};class Ut extends Zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new k,n=new vr,i=new ia,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ie}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new px,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Fm,e)}rotateY(e){return this.rotateOnAxis(Om,e)}rotateZ(e){return this.rotateOnAxis(km,e)}translateOnAxis(e,n){return Um.copy(e).applyQuaternion(this.quaternion),this.position.add(Um.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Fm,e)}translateY(e){return this.translateOnAxis(Om,e)}translateZ(e){return this.translateOnAxis(km,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?zo.copy(e):zo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(ha,zo,this.up):xi.lookAt(zo,ha,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),ss.setFromRotationMatrix(xi),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bm),as.child=e,this.dispatchEvent(as),as.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(bM),pu.child=e,this.dispatchEvent(pu),pu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bm),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,wM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,AM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new k(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ba extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RM={type:"move"};class mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const E of e.hand.values()){const m=n.getJointPose(E,i),u=this._getHandJoint(c,E);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(RM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ba;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const mx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function gu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ge{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=je.workingColorSpace){return this.r=e,this.g=n,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=je.workingColorSpace){if(e=kh(e,1),n=Xe(n,0,1),i=Xe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=gu(a,s,e+1/3),this.g=gu(a,s,e),this.b=gu(a,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,n=En){function i(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=En){const i=mx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return je.workingToColorSpace(Zt.copy(this),e),Math.round(Xe(Zt.r*255,0,255))*65536+Math.round(Xe(Zt.g*255,0,255))*256+Math.round(Xe(Zt.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=je.workingColorSpace){je.workingToColorSpace(Zt.copy(this),n);const i=Zt.r,r=Zt.g,s=Zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=je.workingColorSpace){return je.workingToColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=En){je.workingToColorSpace(Zt.copy(this),e);const n=Zt.r,i=Zt.g,r=Zt.b;return e!==En?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+n,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Xi),e.getHSL(Vo);const i=Ba(Xi.h,Vo.h,n),r=Ba(Xi.s,Vo.s,n),s=Ba(Xi.l,Vo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Ge;Ge.NAMES=mx;class zh{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=n}clone(){return new zh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class CM extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vr,this.environmentIntensity=1,this.environmentRotation=new vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Wn=new k,_i=new k,vu=new k,yi=new k,os=new k,ls=new k,zm=new k,xu=new k,_u=new k,yu=new k,Su=new vt,Mu=new vt,Eu=new vt;class Fn{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Wn.subVectors(e,n),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Wn.subVectors(r,n),_i.subVectors(i,n),vu.subVectors(e,n);const a=Wn.dot(Wn),o=Wn.dot(_i),l=Wn.dot(vu),c=_i.dot(_i),f=_i.dot(vu),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-o*f)*d,g=(a*f-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Su.setScalar(0),Mu.setScalar(0),Eu.setScalar(0),Su.fromBufferAttribute(e,n),Mu.fromBufferAttribute(e,i),Eu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Su,s.x),a.addScaledVector(Mu,s.y),a.addScaledVector(Eu,s.z),a}static isFrontFacing(e,n,i,r){return Wn.subVectors(i,n),_i.subVectors(e,n),Wn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Wn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Fn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Fn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;os.subVectors(r,i),ls.subVectors(s,i),xu.subVectors(e,i);const l=os.dot(xu),c=ls.dot(xu);if(l<=0&&c<=0)return n.copy(i);_u.subVectors(e,r);const f=os.dot(_u),h=ls.dot(_u);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(os,a);yu.subVectors(e,s);const p=os.dot(yu),g=ls.dot(yu);if(g>=0&&p<=g)return n.copy(s);const E=p*c-l*g;if(E<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(ls,o);const m=f*g-p*h;if(m<=0&&h-f>=0&&p-g>=0)return zm.subVectors(s,r),o=(h-f)/(h-f+(p-g)),n.copy(r).addScaledVector(zm,o);const u=1/(m+E+d);return a=E*u,o=d*u,n.copy(i).addScaledVector(os,a).addScaledVector(ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class vo{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xn):Xn.fromBufferAttribute(s,a),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ho.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ho.copy(i.boundingBox)),Ho.applyMatrix4(e.matrixWorld),this.union(Ho)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),Go.subVectors(this.max,pa),cs.subVectors(e.a,pa),us.subVectors(e.b,pa),ds.subVectors(e.c,pa),ji.subVectors(us,cs),Yi.subVectors(ds,us),Tr.subVectors(cs,ds);let n=[0,-ji.z,ji.y,0,-Yi.z,Yi.y,0,-Tr.z,Tr.y,ji.z,0,-ji.x,Yi.z,0,-Yi.x,Tr.z,0,-Tr.x,-ji.y,ji.x,0,-Yi.y,Yi.x,0,-Tr.y,Tr.x,0];return!Tu(n,cs,us,ds,Go)||(n=[1,0,0,0,1,0,0,0,1],!Tu(n,cs,us,ds,Go))?!1:(Wo.crossVectors(ji,Yi),n=[Wo.x,Wo.y,Wo.z],Tu(n,cs,us,ds,Go))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Si=[new k,new k,new k,new k,new k,new k,new k,new k],Xn=new k,Ho=new vo,cs=new k,us=new k,ds=new k,ji=new k,Yi=new k,Tr=new k,pa=new k,Go=new k,Wo=new k,wr=new k;function Tu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){wr.fromArray(t,s);const o=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),l=e.dot(wr),c=n.dot(wr),f=i.dot(wr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Ct=new k,Xo=new ke;let PM=0;class Rn extends Zr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=wf,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Xo.fromBufferAttribute(this,n),Xo.applyMatrix3(e),this.setXY(n,Xo.x,Xo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Kn(n,this.array)),n}setX(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Kn(n,this.array)),n}setY(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Kn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Kn(n,this.array)),n}setW(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class gx extends Rn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class vx extends Rn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class cn extends Rn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const LM=new vo,ma=new k,wu=new k;class Rc{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):LM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);const n=ma.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ma,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(wu)),this.expandByPoint(ma.copy(e.center).sub(wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let NM=0;const Dn=new pt,Au=new Ut,fs=new k,Sn=new vo,ga=new vo,Bt=new k;class un extends Zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(K1(e)?vx:gx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return Au.lookAt(e),Au.updateMatrix(),this.applyMatrix4(Au.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new cn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ga.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(Sn.min,ga.min),Sn.expandByPoint(Bt),Bt.addVectors(Sn.max,ga.max),Sn.expandByPoint(Bt)):(Sn.expandByPoint(ga.min),Sn.expandByPoint(ga.max))}Sn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Bt.fromBufferAttribute(o,c),l&&(fs.fromBufferAttribute(e,c),Bt.add(fs)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Rn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new k,l[_]=new k;const c=new k,f=new k,h=new k,d=new ke,p=new ke,g=new ke,E=new k,m=new k;function u(_,b,P){c.fromBufferAttribute(i,_),f.fromBufferAttribute(i,b),h.fromBufferAttribute(i,P),d.fromBufferAttribute(s,_),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,P),f.sub(c),h.sub(c),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(E.copy(f).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(L),o[_].add(E),o[b].add(E),o[P].add(E),l[_].add(m),l[b].add(m),l[P].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let _=0,b=v.length;_<b;++_){const P=v[_],L=P.start,B=P.count;for(let q=L,ee=L+B;q<ee;q+=3)u(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const M=new k,S=new k,A=new k,w=new k;function R(_){A.fromBufferAttribute(r,_),w.copy(A);const b=o[_];M.copy(b),M.sub(A.multiplyScalar(A.dot(b))).normalize(),S.crossVectors(w,b);const L=S.dot(l[_])<0?-1:1;a.setXYZW(_,M.x,M.y,M.z,L)}for(let _=0,b=v.length;_<b;++_){const P=v[_],L=P.start,B=P.count;for(let q=L,ee=L+B;q<ee;q+=3)R(e.getX(q+0)),R(e.getX(q+1)),R(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Rn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,f=new k,h=new k;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),E=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,E),a.fromBufferAttribute(n,m),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,h=o.normalized,d=new c.constructor(l.length*f);let p=0,g=0;for(let E=0,m=l.length;E<m;E++){o.isInterleavedBufferAttribute?p=l[E]*o.data.stride+o.offset:p=l[E]*f;for(let u=0;u<f;u++)d[g++]=c[p++]}return new Rn(d,f,h)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new un,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,h=c.length;f<h;f++){const d=c[f],p=e(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class DM{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=wf,this.updateRanges=[],this.version=0,this.uuid=Li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new k;class ac{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix4(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyNormalMatrix(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.transformDirection(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Kn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Kn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Kn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Kn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){sc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Rn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ac(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){sc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let IM=0;class Jr extends Zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=Bs,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fd,this.blendDst=Od,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){De(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(i.blending=this.blending),this.side!==gr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fd&&(i.blendSrc=this.blendSrc),this.blendDst!==Od&&(i.blendDst=this.blendDst),this.blendEquation!==Lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ke().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Af extends Jr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let hs;const va=new k,ps=new k,ms=new k,gs=new ke,xa=new ke,xx=new pt,jo=new k,_a=new k,Yo=new k,Vm=new ke,bu=new ke,Hm=new ke;class Gm extends Ut{constructor(e=new Af){if(super(),this.isSprite=!0,this.type="Sprite",hs===void 0){hs=new un;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new DM(n,5);hs.setIndex([0,1,2,0,2,3]),hs.setAttribute("position",new ac(i,3,0,!1)),hs.setAttribute("uv",new ac(i,2,3,!1))}this.geometry=hs,this.material=e,this.center=new ke(.5,.5),this.count=1}raycast(e,n){e.camera===null&&$e('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ps.setFromMatrixScale(this.matrixWorld),xx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ms.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ps.multiplyScalar(-ms.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;$o(jo.set(-.5,-.5,0),ms,a,ps,r,s),$o(_a.set(.5,-.5,0),ms,a,ps,r,s),$o(Yo.set(.5,.5,0),ms,a,ps,r,s),Vm.set(0,0),bu.set(1,0),Hm.set(1,1);let o=e.ray.intersectTriangle(jo,_a,Yo,!1,va);if(o===null&&($o(_a.set(-.5,.5,0),ms,a,ps,r,s),bu.set(0,1),o=e.ray.intersectTriangle(jo,Yo,_a,!1,va),o===null))return;const l=e.ray.origin.distanceTo(va);l<e.near||l>e.far||n.push({distance:l,point:va.clone(),uv:Fn.getInterpolation(va,jo,_a,Yo,Vm,bu,Hm,new ke),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function $o(t,e,n,i,r,s){gs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(xa.x=s*gs.x-r*gs.y,xa.y=r*gs.x+s*gs.y):xa.copy(gs),t.copy(e),t.x+=xa.x,t.y+=xa.y,t.applyMatrix4(xx)}const Mi=new k,Ru=new k,qo=new k,$i=new k,Cu=new k,Ko=new k,Pu=new k;class _x{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,n),Mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ru.copy(e).add(n).multiplyScalar(.5),qo.copy(n).sub(e).normalize(),$i.copy(this.origin).sub(Ru);const s=e.distanceTo(n)*.5,a=-this.direction.dot(qo),o=$i.dot(this.direction),l=-$i.dot(qo),c=$i.lengthSq(),f=Math.abs(1-a*a);let h,d,p,g;if(f>0)if(h=a*l-o,d=a*o-l,g=s*f,h>=0)if(d>=-g)if(d<=g){const E=1/f;h*=E,d*=E,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ru).addScaledVector(qo,d),p}intersectSphere(e,n){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,n,i,r,s){Cu.subVectors(n,e),Ko.subVectors(i,e),Pu.crossVectors(Cu,Ko);let a=this.direction.dot(Pu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$i.subVectors(this.origin,e);const l=o*this.direction.dot(Ko.crossVectors($i,Ko));if(l<0)return null;const c=o*this.direction.dot(Cu.cross($i));if(c<0||l+c>a)return null;const f=-o*$i.dot(Pu);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class za extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.combine=Zv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wm=new pt,Ar=new _x,Zo=new Rc,Xm=new k,Jo=new k,Qo=new k,el=new k,Lu=new k,tl=new k,jm=new k,nl=new k;class an extends Ut{constructor(e=new un,n=new za){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){tl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],h=s[l];f!==0&&(Lu.fromBufferAttribute(h,e),a?tl.addScaledVector(Lu,f):tl.addScaledVector(Lu.sub(n),f))}n.add(tl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zo.copy(i.boundingSphere),Zo.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(Zo.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Zo,Xm)===null||Ar.origin.distanceToSquared(Xm)>(e.far-e.near)**2))&&(Wm.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(Wm),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,E=d.length;g<E;g++){const m=d[g],u=a[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,A=M;S<A;S+=3){const w=o.getX(S),R=o.getX(S+1),_=o.getX(S+2);r=il(this,u,e,i,c,f,h,w,R,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),E=Math.min(o.count,p.start+p.count);for(let m=g,u=E;m<u;m+=3){const v=o.getX(m),M=o.getX(m+1),S=o.getX(m+2);r=il(this,a,e,i,c,f,h,v,M,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,E=d.length;g<E;g++){const m=d[g],u=a[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,A=M;S<A;S+=3){const w=S,R=S+1,_=S+2;r=il(this,u,e,i,c,f,h,w,R,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let m=g,u=E;m<u;m+=3){const v=m,M=m+1,S=m+2;r=il(this,a,e,i,c,f,h,v,M,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function UM(t,e,n,i,r,s,a,o){let l;if(e.side===ln?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===gr,o),l===null)return null;nl.copy(o),nl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(nl);return c<n.near||c>n.far?null:{distance:c,point:nl.clone(),object:t}}function il(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Jo),t.getVertexPosition(l,Qo),t.getVertexPosition(c,el);const f=UM(t,e,n,i,Jo,Qo,el,jm);if(f){const h=new k;Fn.getBarycoord(jm,Jo,Qo,el,h),r&&(f.uv=Fn.getInterpolatedAttribute(r,o,l,c,h,new ke)),s&&(f.uv1=Fn.getInterpolatedAttribute(s,o,l,c,h,new ke)),a&&(f.normal=Fn.getInterpolatedAttribute(a,o,l,c,h,new k),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new k,materialIndex:0};Fn.getNormal(Jo,Qo,el,d.normal),f.face=d,f.barycoord=h}return f}class FM extends en{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Wt,f=Wt,h,d){super(null,a,o,l,c,f,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nu=new k,OM=new k,kM=new Ie;class Pr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Nu.subVectors(i,n).cross(OM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Nu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||kM.getNormalMatrix(e),r=this.coplanarPoint(Nu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new Rc,BM=new ke(.5,.5),rl=new k;class Vh{constructor(e=new Pr,n=new Pr,i=new Pr,r=new Pr,s=new Pr,a=new Pr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],h=s[5],d=s[6],p=s[7],g=s[8],E=s[9],m=s[10],u=s[11],v=s[12],M=s[13],S=s[14],A=s[15];if(r[0].setComponents(c-a,p-f,u-g,A-v).normalize(),r[1].setComponents(c+a,p+f,u+g,A+v).normalize(),r[2].setComponents(c+o,p+h,u+E,A+M).normalize(),r[3].setComponents(c-o,p-h,u-E,A-M).normalize(),i)r[4].setComponents(l,d,m,S).normalize(),r[5].setComponents(c-l,p-d,u-m,A-S).normalize();else if(r[4].setComponents(c-l,p-d,u-m,A-S).normalize(),n===fi)r[5].setComponents(c+l,p+d,u+m,A+S).normalize();else if(n===lo)r[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){br.center.set(0,0,0);const n=BM.distanceTo(e.center);return br.radius=.7071067811865476+n,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(rl.x=r.normal.x>0?e.max.x:e.min.x,rl.y=r.normal.y>0?e.max.y:e.min.y,rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bf extends Jr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ym=new pt,Rf=new _x,sl=new Rc,al=new k;class $m extends Ut{constructor(e=new un,n=new bf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(r),sl.radius+=s,e.ray.intersectsSphere(sl)===!1)return;Ym.copy(r).invert(),Rf.copy(e.ray).applyMatrix4(Ym);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,E=p;g<E;g++){const m=c.getX(g);al.fromBufferAttribute(h,m),qm(al,m,l,r,e,n,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,E=p;g<E;g++)al.fromBufferAttribute(h,g),qm(al,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function qm(t,e,n,i,r,s,a){const o=Rf.distanceSqToPoint(t);if(o<n){const l=new k;Rf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class yx extends en{constructor(e=[],n=Xr,i,r,s,a,o,l,c,f){super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Du extends en{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zs extends en{constructor(e,n,i=vi,r,s,a,o=Wt,l=Wt,c,f=ki,h=1){if(f!==ki&&f!==Or)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class zM extends Zs{constructor(e,n=vi,i=Xr,r,s,a=Wt,o=Wt,l,c=ki){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sx extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xo extends un{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(f,3)),this.setAttribute("uv",new cn(h,2));function g(E,m,u,v,M,S,A,w,R,_,b){const P=S/R,L=A/_,B=S/2,q=A/2,ee=w/2,z=R+1,K=_+1;let V=0,D=0;const j=new k;for(let ne=0;ne<K;ne++){const re=ne*L-q;for(let oe=0;oe<z;oe++){const Be=oe*P-B;j[E]=Be*v,j[m]=re*M,j[u]=ee,c.push(j.x,j.y,j.z),j[E]=0,j[m]=0,j[u]=w>0?1:-1,f.push(j.x,j.y,j.z),h.push(oe/R),h.push(1-ne/_),V+=1}}for(let ne=0;ne<_;ne++)for(let re=0;re<R;re++){const oe=d+re+z*ne,Be=d+re+z*(ne+1),qe=d+(re+1)+z*(ne+1),He=d+(re+1)+z*ne;l.push(oe,Be,He),l.push(Be,qe,He),D+=6}o.addGroup(p,D,b),p+=D,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Cc extends un{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,h=e/o,d=n/l,p=[],g=[],E=[],m=[];for(let u=0;u<f;u++){const v=u*d-a;for(let M=0;M<c;M++){const S=M*h-s;g.push(S,-v,0),E.push(0,0,1),m.push(M/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const M=v+c*u,S=v+c*(u+1),A=v+1+c*(u+1),w=v+1+c*u;p.push(M,S,w),p.push(S,A,w)}this.setIndex(p),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(E,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.width,e.height,e.widthSegments,e.heightSegments)}}class oc extends un{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],f=[];let h=e;const d=(n-e)/r,p=new k,g=new ke;for(let E=0;E<=r;E++){for(let m=0;m<=i;m++){const u=s+m/i*a;p.x=h*Math.cos(u),p.y=h*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/n+1)/2,g.y=(p.y/n+1)/2,f.push(g.x,g.y)}h+=d}for(let E=0;E<r;E++){const m=E*(i+1);for(let u=0;u<i;u++){const v=u+m,M=v,S=v+i+1,A=v+i+2,w=v+1;o.push(M,S,w),o.push(S,A,w)}}this.setIndex(o),this.setAttribute("position",new cn(l,3)),this.setAttribute("normal",new cn(c,3)),this.setAttribute("uv",new cn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ns extends un{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const f=[],h=new k,d=new k,p=[],g=[],E=[],m=[];for(let u=0;u<=i;u++){const v=[],M=u/i,S=a+M*o,A=e*Math.cos(S),w=Math.sqrt(e*e-A*A);let R=0;u===0&&a===0?R=.5/n:u===i&&l===Math.PI&&(R=-.5/n);for(let _=0;_<=n;_++){const b=_/n,P=r+b*s;h.x=-w*Math.cos(P),h.y=A,h.z=w*Math.sin(P),g.push(h.x,h.y,h.z),d.copy(h).normalize(),E.push(d.x,d.y,d.z),m.push(b+R,1-M),v.push(c++)}f.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const M=f[u][v+1],S=f[u][v],A=f[u+1][v],w=f[u+1][v+1];(u!==0||a>0)&&p.push(M,S,w),(u!==i-1||l<Math.PI)&&p.push(S,A,w)}this.setIndex(p),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(E,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Km(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Km(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=Js(t[n]);for(const r in i)e[r]=i[r]}return e}function Km(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function VM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Mx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const HM={clone:Js,merge:rn};var GM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GM,this.fragmentShader=WM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=VM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Ge().setHex(r.value);break;case"v2":this.uniforms[i].value=new ke().fromArray(r.value);break;case"v3":this.uniforms[i].value=new k().fromArray(r.value);break;case"v4":this.uniforms[i].value=new vt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ie().fromArray(r.value);break;case"m4":this.uniforms[i].value=new pt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class XM extends Vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jM extends Jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tf,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class YM extends Jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $M extends Jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Hh extends Ut{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class qM extends Hh{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Iu=new pt,Zm=new k,Jm=new k;class Ex{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vh,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Zm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zm),Jm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Jm),n.updateMatrixWorld(),Iu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Iu,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===lo||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Iu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ol=new k,ll=new ia,si=new k;class Tx extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ol,ll,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ol,ll,si.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(ol,ll,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ol,ll,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qi=new k,Qm=new ke,e0=new ke;class Tn extends Tx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=co*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return co*2*Math.atan(Math.tan(ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,n){return this.getViewBounds(e,Qm,e0),n.subVectors(e0,Qm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ka*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class KM extends Ex{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0}}class ZM extends Hh{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new KM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Gh extends Tx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class JM extends Ex{constructor(){super(new Gh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class QM extends Hh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new JM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const vs=-90,xs=1;class eE extends Ut{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(vs,xs,e,n);r.layers=this.layers,this.add(r);const s=new Tn(vs,xs,e,n);s.layers=this.layers,this.add(s);const a=new Tn(vs,xs,e,n);a.layers=this.layers,this.add(a);const o=new Tn(vs,xs,e,n);o.layers=this.layers,this.add(o);const l=new Tn(vs,xs,e,n);l.layers=this.layers,this.add(l);const c=new Tn(vs,xs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class tE extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class nE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,De("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const $h=class $h{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};$h.prototype.isMatrix2=!0;let t0=$h;function n0(t,e,n,i){const r=iE(i);switch(n){case cx:return t*e;case dx:return t*e/r.components*r.byteLength;case Dh:return t*e/r.components*r.byteLength;case jr:return t*e*2/r.components*r.byteLength;case Ih:return t*e*2/r.components*r.byteLength;case ux:return t*e*3/r.components*r.byteLength;case Zn:return t*e*4/r.components*r.byteLength;case Uh:return t*e*4/r.components*r.byteLength;case Tl:case wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Al:case bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $d:case Kd:return Math.max(t,16)*Math.max(e,8)/4;case Yd:case qd:return Math.max(t,8)*Math.max(e,8)/2;case Zd:case Jd:case ef:case tf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Qd:case ec:case nf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case rf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case af:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case of:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case lf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case cf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case uf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case df:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ff:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case hf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case pf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case mf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case gf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case vf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case xf:case _f:case yf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Sf:case Mf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case tc:case Ef:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function iE(t){switch(t){case wn:case sx:return{byteLength:1,components:1};case ao:case ax:case Oi:return{byteLength:2,components:1};case Lh:case Nh:return{byteLength:2,components:4};case vi:case Ph:case di:return{byteLength:4,components:1};case ox:case lx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rh}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function rE(t){const e=new WeakMap;function n(o,l){const c=o.array,f=o.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,f);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],E=h[p];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++d,h[d]=E)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const E=h[p];t.bufferSubData(c,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var sE=`#ifdef USE_ALPHAHASH
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
#endif`,TE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
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
#endif`,RE=`#define PI 3.141592653589793
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
} // validated`,CE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nT=`PhysicalMaterial material;
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
#endif`,iT=`uniform sampler2D dfgLUT;
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
}`,rT=`
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
#endif`,sT=`#if defined( RE_IndirectDiffuse )
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
#endif`,aT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oT=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,lT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mT=`#if defined( USE_POINTS_UV )
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
#endif`,gT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_T=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ST=`#ifdef USE_MORPHTARGETS
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
#endif`,MT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ET=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,TT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,RT=`#ifdef USE_NORMALMAP
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
#endif`,CT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,UT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,WT=`float getShadowMask() {
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
}`,XT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jT=`#ifdef USE_SKINNING
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
#endif`,YT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$T=`#ifdef USE_SKINNING
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
#endif`,qT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,QT=`#ifdef USE_TRANSMISSION
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
#endif`,ew=`#ifdef USE_TRANSMISSION
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
#endif`,tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aw=`uniform sampler2D t2D;
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
}`,ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dw=`#include <common>
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
}`,fw=`#if DEPTH_PACKING == 3200
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
}`,hw=`#define DISTANCE
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
}`,pw=`#define DISTANCE
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
}`,mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vw=`uniform float scale;
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
}`,xw=`uniform vec3 diffuse;
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
}`,_w=`#include <common>
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
}`,yw=`uniform vec3 diffuse;
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
}`,Sw=`#define LAMBERT
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
}`,Mw=`#define LAMBERT
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
}`,Ew=`#define MATCAP
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
}`,Tw=`#define MATCAP
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
}`,ww=`#define NORMAL
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
}`,Aw=`#define NORMAL
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
}`,bw=`#define PHONG
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
}`,Rw=`#define PHONG
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
}`,Cw=`#define STANDARD
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
}`,Pw=`#define STANDARD
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
}`,Lw=`#define TOON
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
}`,Nw=`#define TOON
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
}`,Dw=`uniform float size;
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
}`,Iw=`uniform vec3 diffuse;
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
}`,Uw=`#include <common>
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
}`,Fw=`uniform vec3 color;
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
}`,Ow=`uniform float rotation;
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
}`,kw=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:sE,alphahash_pars_fragment:aE,alphamap_fragment:oE,alphamap_pars_fragment:lE,alphatest_fragment:cE,alphatest_pars_fragment:uE,aomap_fragment:dE,aomap_pars_fragment:fE,batching_pars_vertex:hE,batching_vertex:pE,begin_vertex:mE,beginnormal_vertex:gE,bsdfs:vE,iridescence_fragment:xE,bumpmap_pars_fragment:_E,clipping_planes_fragment:yE,clipping_planes_pars_fragment:SE,clipping_planes_pars_vertex:ME,clipping_planes_vertex:EE,color_fragment:TE,color_pars_fragment:wE,color_pars_vertex:AE,color_vertex:bE,common:RE,cube_uv_reflection_fragment:CE,defaultnormal_vertex:PE,displacementmap_pars_vertex:LE,displacementmap_vertex:NE,emissivemap_fragment:DE,emissivemap_pars_fragment:IE,colorspace_fragment:UE,colorspace_pars_fragment:FE,envmap_fragment:OE,envmap_common_pars_fragment:kE,envmap_pars_fragment:BE,envmap_pars_vertex:zE,envmap_physical_pars_fragment:ZE,envmap_vertex:VE,fog_vertex:HE,fog_pars_vertex:GE,fog_fragment:WE,fog_pars_fragment:XE,gradientmap_pars_fragment:jE,lightmap_pars_fragment:YE,lights_lambert_fragment:$E,lights_lambert_pars_fragment:qE,lights_pars_begin:KE,lights_toon_fragment:JE,lights_toon_pars_fragment:QE,lights_phong_fragment:eT,lights_phong_pars_fragment:tT,lights_physical_fragment:nT,lights_physical_pars_fragment:iT,lights_fragment_begin:rT,lights_fragment_maps:sT,lights_fragment_end:aT,lightprobes_pars_fragment:oT,logdepthbuf_fragment:lT,logdepthbuf_pars_fragment:cT,logdepthbuf_pars_vertex:uT,logdepthbuf_vertex:dT,map_fragment:fT,map_pars_fragment:hT,map_particle_fragment:pT,map_particle_pars_fragment:mT,metalnessmap_fragment:gT,metalnessmap_pars_fragment:vT,morphinstance_vertex:xT,morphcolor_vertex:_T,morphnormal_vertex:yT,morphtarget_pars_vertex:ST,morphtarget_vertex:MT,normal_fragment_begin:ET,normal_fragment_maps:TT,normal_pars_fragment:wT,normal_pars_vertex:AT,normal_vertex:bT,normalmap_pars_fragment:RT,clearcoat_normal_fragment_begin:CT,clearcoat_normal_fragment_maps:PT,clearcoat_pars_fragment:LT,iridescence_pars_fragment:NT,opaque_fragment:DT,packing:IT,premultiplied_alpha_fragment:UT,project_vertex:FT,dithering_fragment:OT,dithering_pars_fragment:kT,roughnessmap_fragment:BT,roughnessmap_pars_fragment:zT,shadowmap_pars_fragment:VT,shadowmap_pars_vertex:HT,shadowmap_vertex:GT,shadowmask_pars_fragment:WT,skinbase_vertex:XT,skinning_pars_vertex:jT,skinning_vertex:YT,skinnormal_vertex:$T,specularmap_fragment:qT,specularmap_pars_fragment:KT,tonemapping_fragment:ZT,tonemapping_pars_fragment:JT,transmission_fragment:QT,transmission_pars_fragment:ew,uv_pars_fragment:tw,uv_pars_vertex:nw,uv_vertex:iw,worldpos_vertex:rw,background_vert:sw,background_frag:aw,backgroundCube_vert:ow,backgroundCube_frag:lw,cube_vert:cw,cube_frag:uw,depth_vert:dw,depth_frag:fw,distance_vert:hw,distance_frag:pw,equirect_vert:mw,equirect_frag:gw,linedashed_vert:vw,linedashed_frag:xw,meshbasic_vert:_w,meshbasic_frag:yw,meshlambert_vert:Sw,meshlambert_frag:Mw,meshmatcap_vert:Ew,meshmatcap_frag:Tw,meshnormal_vert:ww,meshnormal_frag:Aw,meshphong_vert:bw,meshphong_frag:Rw,meshphysical_vert:Cw,meshphysical_frag:Pw,meshtoon_vert:Lw,meshtoon_frag:Nw,points_vert:Dw,points_frag:Iw,shadow_vert:Uw,shadow_frag:Fw,sprite_vert:Ow,sprite_frag:kw},me={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},ci={basic:{uniforms:rn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:rn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:rn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:rn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:rn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:rn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:rn([me.points,me.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:rn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:rn([me.common,me.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:rn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:rn([me.sprite,me.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:rn([me.common,me.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:rn([me.lights,me.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ci.physical={uniforms:rn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const cl={r:0,b:0,g:0},Bw=new pt,Ax=new Ie;Ax.set(-1,0,0,0,1,0,0,0,1);function zw(t,e,n,i,r,s){const a=new Ge(0);let o=r===!0?0:1,l,c,f=null,h=0,d=null;function p(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const S=v.backgroundBlurriness>0;M=e.get(M,S)}return M}function g(v){let M=!1;const S=p(v);S===null?m(a,o):S&&S.isColor&&(m(S,1),M=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(v,M){const S=p(M);S&&(S.isCubeTexture||S.mapping===bc)?(c===void 0&&(c=new an(new xo(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Js(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Bw.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ax),c.material.toneMapped=je.getTransfer(S.colorSpace)!==tt,(f!==S||h!==S.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,d=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new an(new Cc(2,2),new Vn({name:"BackgroundMaterial",uniforms:Js(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=je.getTransfer(S.colorSpace)!==tt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=S,h=S.version,d=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,M){v.getRGB(cl,Mx(t)),n.buffers.color.setClear(cl.r,cl.g,cl.b,M,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:E,dispose:u}}function Vw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(L,B,q,ee,z){let K=!1;const V=h(L,ee,q,B);s!==V&&(s=V,c(s.object)),K=p(L,ee,q,z),K&&g(L,ee,q,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,S(L,B,q,ee),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(L){return t.bindVertexArray(L)}function f(L){return t.deleteVertexArray(L)}function h(L,B,q,ee){const z=ee.wireframe===!0;let K=i[B.id];K===void 0&&(K={},i[B.id]=K);const V=L.isInstancedMesh===!0?L.id:0;let D=K[V];D===void 0&&(D={},K[V]=D);let j=D[q.id];j===void 0&&(j={},D[q.id]=j);let ne=j[z];return ne===void 0&&(ne=d(l()),j[z]=ne),ne}function d(L){const B=[],q=[],ee=[];for(let z=0;z<n;z++)B[z]=0,q[z]=0,ee[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:ee,object:L,attributes:{},index:null}}function p(L,B,q,ee){const z=s.attributes,K=B.attributes;let V=0;const D=q.getAttributes();for(const j in D)if(D[j].location>=0){const re=z[j];let oe=K[j];if(oe===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),re===void 0||re.attribute!==oe||oe&&re.data!==oe.data)return!0;V++}return s.attributesNum!==V||s.index!==ee}function g(L,B,q,ee){const z={},K=B.attributes;let V=0;const D=q.getAttributes();for(const j in D)if(D[j].location>=0){let re=K[j];re===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(re=L.instanceColor));const oe={};oe.attribute=re,re&&re.data&&(oe.data=re.data),z[j]=oe,V++}s.attributes=z,s.attributesNum=V,s.index=ee}function E(){const L=s.newAttributes;for(let B=0,q=L.length;B<q;B++)L[B]=0}function m(L){u(L,0)}function u(L,B){const q=s.newAttributes,ee=s.enabledAttributes,z=s.attributeDivisors;q[L]=1,ee[L]===0&&(t.enableVertexAttribArray(L),ee[L]=1),z[L]!==B&&(t.vertexAttribDivisor(L,B),z[L]=B)}function v(){const L=s.newAttributes,B=s.enabledAttributes;for(let q=0,ee=B.length;q<ee;q++)B[q]!==L[q]&&(t.disableVertexAttribArray(q),B[q]=0)}function M(L,B,q,ee,z,K,V){V===!0?t.vertexAttribIPointer(L,B,q,z,K):t.vertexAttribPointer(L,B,q,ee,z,K)}function S(L,B,q,ee){E();const z=ee.attributes,K=q.getAttributes(),V=B.defaultAttributeValues;for(const D in K){const j=K[D];if(j.location>=0){let ne=z[D];if(ne===void 0&&(D==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),D==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor)),ne!==void 0){const re=ne.normalized,oe=ne.itemSize,Be=e.get(ne);if(Be===void 0)continue;const qe=Be.buffer,He=Be.type,U=Be.bytesPerElement,J=He===t.INT||He===t.UNSIGNED_INT||ne.gpuType===Ph;if(ne.isInterleavedBufferAttribute){const Y=ne.data,he=Y.stride,Te=ne.offset;if(Y.isInstancedInterleavedBuffer){for(let Ee=0;Ee<j.locationSize;Ee++)u(j.location+Ee,Y.meshPerAttribute);L.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Ee=0;Ee<j.locationSize;Ee++)m(j.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let Ee=0;Ee<j.locationSize;Ee++)M(j.location+Ee,oe/j.locationSize,He,re,he*U,(Te+oe/j.locationSize*Ee)*U,J)}else{if(ne.isInstancedBufferAttribute){for(let Y=0;Y<j.locationSize;Y++)u(j.location+Y,ne.meshPerAttribute);L.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Y=0;Y<j.locationSize;Y++)m(j.location+Y);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let Y=0;Y<j.locationSize;Y++)M(j.location+Y,oe/j.locationSize,He,re,oe*U,oe/j.locationSize*Y*U,J)}}else if(V!==void 0){const re=V[D];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(j.location,re);break;case 3:t.vertexAttrib3fv(j.location,re);break;case 4:t.vertexAttrib4fv(j.location,re);break;default:t.vertexAttrib1fv(j.location,re)}}}}v()}function A(){b();for(const L in i){const B=i[L];for(const q in B){const ee=B[q];for(const z in ee){const K=ee[z];for(const V in K)f(K[V].object),delete K[V];delete ee[z]}}delete i[L]}}function w(L){if(i[L.id]===void 0)return;const B=i[L.id];for(const q in B){const ee=B[q];for(const z in ee){const K=ee[z];for(const V in K)f(K[V].object),delete K[V];delete ee[z]}}delete i[L.id]}function R(L){for(const B in i){const q=i[B];for(const ee in q){const z=q[ee];if(z[L.id]===void 0)continue;const K=z[L.id];for(const V in K)f(K[V].object),delete K[V];delete z[L.id]}}}function _(L){for(const B in i){const q=i[B],ee=L.isInstancedMesh===!0?L.id:0,z=q[ee];if(z!==void 0){for(const K in z){const V=z[K];for(const D in V)f(V[D].object),delete V[D];delete z[K]}delete q[ee],Object.keys(q).length===0&&delete i[B]}}}function b(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:m,disableUnusedAttributes:v}}function Hw(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let d=0;for(let p=0;p<f;p++)d+=c[p];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Gw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Zn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===Oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==wn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==di&&!_)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(De("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:S,maxSamples:A,samples:w}}function Ww(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Pr,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,E=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||g===null||g.length===0||s&&!m)s?f(null):c();else{const v=s?0:i,M=v*4;let S=u.clippingState||null;l.value=S,S=f(g,d,M,p);for(let A=0;A!==M;++A)S[A]=n[A];u.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,p,g){const E=h!==null?h.length:0;let m=null;if(E!==0){if(m=l.value,g!==!0||m===null){const u=p+E*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let M=0,S=p;M!==E;++M,S+=4)a.copy(h[M]).applyMatrix4(v,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}const rr=4,i0=[.125,.215,.35,.446,.526,.582],Nr=20,Xw=256,ya=new Gh,r0=new Ge;let Uu=null,Fu=0,Ou=0,ku=!1;const jw=new k;class s0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=jw}=s;Uu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel(),ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=l0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Uu,Fu,Ou),this._renderer.xr.enabled=ku,e.scissorTest=!1,_s(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xr||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel(),ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Oi,format:Zn,colorSpace:nc,depthBuffer:!1},r=a0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=a0(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Yw(s)),this._blurMaterial=qw(s,e,n),this._ggxMaterial=$w(s,e,n)}return r}_compileMaterial(e){const n=new an(new un,e);this._renderer.compile(n,ya)}_sceneToCubeUV(e,n,i,r,s){const l=new Tn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(r0),h.toneMapping=mi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new an(new xo,new za({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,m=E.material;let u=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,u=!0):(m.color.copy(r0),u=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[M],s.y,s.z)):S===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[M]));const A=this._cubeSize;_s(r,S*A,M>2?A:0,A,A),h.setRenderTarget(r),u&&h.render(E,l),h.render(e,l)}h.toneMapping=p,h.autoClear=d,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xr||e.mapping===Ks;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=l0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=o0());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;_s(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ya)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),d=0+c*1.25,p=h*d,{_lodMax:g}=this,E=this._sizeLods[i],m=3*E*(i>g-rr?i-g+rr:0),u=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,_s(s,m,u,3*E,2*E),r.setRenderTarget(s),r.render(o,ya),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,_s(e,m,u,3*E,2*E),r.setRenderTarget(e),r.render(o,ya)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&$e("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[r];h.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Nr-1),E=s/g,m=isFinite(s)?1+Math.floor(f*E):Nr;m>Nr&&De(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Nr}`);const u=[];let v=0;for(let R=0;R<Nr;++R){const _=R/E,b=Math.exp(-_*_/2);u.push(b),R===0?v+=b:R<m&&(v+=2*b)}for(let R=0;R<u.length;R++)u[R]=u[R]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const S=this._sizeLods[r],A=3*S*(r>M-rr?r-M+rr:0),w=4*(this._cubeSize-S);_s(n,A,w,3*S,2*S),l.setRenderTarget(n),l.render(h,ya)}}function Yw(t){const e=[],n=[],i=[];let r=t;const s=t-rr+1+i0.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-rr?l=i0[a-t+rr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,g=6,E=3,m=2,u=1,v=new Float32Array(E*g*p),M=new Float32Array(m*g*p),S=new Float32Array(u*g*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,_=w>2?0:-1,b=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];v.set(b,E*g*w),M.set(d,m*g*w);const P=[w,w,w,w,w,w];S.set(P,u*g*w)}const A=new un;A.setAttribute("position",new Rn(v,E)),A.setAttribute("uv",new Rn(M,m)),A.setAttribute("faceIndex",new Rn(S,u)),i.push(new an(A,null)),r>rr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function a0(t,e,n){const i=new gi(t,e,n);return i.texture.mapping=bc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _s(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function $w(t,e,n){return new Vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function qw(t,e,n){const i=new Float32Array(Nr),r=new k(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pc(),fragmentShader:`

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
			`},r=new xo(5,5,5),s=new Vn({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Pi});s.uniforms.tEquirect.value=n;const a=new an(r,s),o=n.minFilter;return n.minFilter===Fr&&(n.minFilter=Qt),new eE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function Kw(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?a(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===ou||p===lu)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const E=new bx(g.height);return E.fromEquirectangularTexture(t,d),e.set(d,E),d.addEventListener("dispose",c),o(E.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const p=d.mapping,g=p===ou||p===lu,E=p===Xr||p===Ks;if(g||E){let m=n.get(d);const u=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new s0(t)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const v=d.image;return g&&v&&v.height>0||E&&v&&l(v)?(i===null&&(i=new s0(t)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",f),m.texture):null}}}return d}function o(d,p){return p===ou?d.mapping=Xr:p===lu&&(d.mapping=Ks),d}function l(d){let p=0;const g=6;for(let E=0;E<g;E++)d[E]!==void 0&&p++;return p===g}function c(d){const p=d.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function f(d){const p=d.target;p.removeEventListener("dispose",f);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function Zw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&zs("WebGLRenderer: "+i+" extension not supported."),r}}}function Jw(t,e,n,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,g=h.attributes.position;let E=0;if(g===void 0)return;if(p!==null){const v=p.array;E=p.version;for(let M=0,S=v.length;M<S;M+=3){const A=v[M+0],w=v[M+1],R=v[M+2];d.push(A,w,w,R,R,A)}}else{const v=g.array;E=g.version;for(let M=0,S=v.length/3-1;M<S;M+=3){const A=M+0,w=M+1,R=M+2;d.push(A,w,w,R,R,A)}}const m=new(g.count>=65535?vx:gx)(d,1);m.version=E;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function f(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function Qw(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){t.drawElements(i,d,s,h*a),n.update(d,i,1)}function c(h,d,p){p!==0&&(t.drawElementsInstanced(i,d,s,h*a,p),n.update(d,i,p))}function f(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,p);let E=0;for(let m=0;m<p;m++)E+=d[m];n.update(E,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function eA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function tA(t,e,n){const i=new WeakMap,r=new vt;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let P=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var p=P;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),E===!0&&(S=2),m===!0&&(S=3);let A=o.attributes.position.count*S,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*w*4*h),_=new hx(R,A,w,h);_.type=di,_.needsUpdate=!0;const b=S*4;for(let L=0;L<h;L++){const B=u[L],q=v[L],ee=M[L],z=A*w*4*L;for(let K=0;K<B.count;K++){const V=K*b;g===!0&&(r.fromBufferAttribute(B,K),R[z+V+0]=r.x,R[z+V+1]=r.y,R[z+V+2]=r.z,R[z+V+3]=0),E===!0&&(r.fromBufferAttribute(q,K),R[z+V+4]=r.x,R[z+V+5]=r.y,R[z+V+6]=r.z,R[z+V+7]=0),m===!0&&(r.fromBufferAttribute(ee,K),R[z+V+8]=r.x,R[z+V+9]=r.y,R[z+V+10]=r.z,R[z+V+11]=ee.itemSize===4?r.w:1)}}d={count:h,texture:_,size:new ke(A,w)},i.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const E=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function nA(t,e,n,i,r){let s=new WeakMap;function a(c){const f=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==f&&(p.update(),s.set(p,f))}return d}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:a,dispose:o}}const iA={[Jv]:"LINEAR_TONE_MAPPING",[Qv]:"REINHARD_TONE_MAPPING",[ex]:"CINEON_TONE_MAPPING",[Ch]:"ACES_FILMIC_TONE_MAPPING",[nx]:"AGX_TONE_MAPPING",[ix]:"NEUTRAL_TONE_MAPPING",[tx]:"CUSTOM_TONE_MAPPING"};function rA(t,e,n,i,r,s){const a=new gi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Zs(e,n):void 0}),o=new gi(e,n,{type:Oi,depthBuffer:!1,stencilBuffer:!1}),l=new un;l.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new cn([0,2,0,0,2,0],2));const c=new XM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new an(l,c),h=new Gh(-1,1,1,-1,0,1);let d=null,p=null,g=!1,E,m=null,u=[],v=!1;this.setSize=function(M,S){a.setSize(M,S),o.setSize(M,S);for(let A=0;A<u.length;A++){const w=u[A];w.setSize&&w.setSize(M,S)}},this.setEffects=function(M){u=M,v=u.length>0&&u[0].isRenderPass===!0;const S=a.width,A=a.height;for(let w=0;w<u.length;w++){const R=u[w];R.setSize&&R.setSize(S,A)}},this.begin=function(M,S){if(g||M.toneMapping===mi&&u.length===0)return!1;if(m=S,S!==null){const A=S.width,w=S.height;(a.width!==A||a.height!==w)&&this.setSize(A,w)}return v===!1&&M.setRenderTarget(a),E=M.toneMapping,M.toneMapping=mi,!0},this.hasRenderPass=function(){return v},this.end=function(M,S){M.toneMapping=E,g=!0;let A=a,w=o;for(let R=0;R<u.length;R++){const _=u[R];if(_.enabled!==!1&&(_.render(M,w,A,S),_.needsSwap!==!1)){const b=A;A=w,w=b}}if(d!==M.outputColorSpace||p!==M.toneMapping){d=M.outputColorSpace,p=M.toneMapping,c.defines={},je.getTransfer(d)===tt&&(c.defines.SRGB_TRANSFER="");const R=iA[p];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,M.setRenderTarget(m),M.render(f,h),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Rx=new en,Cf=new Zs(1,1),Cx=new hx,Px=new SM,Lx=new yx,c0=[],u0=[],d0=new Float32Array(16),f0=new Float32Array(9),h0=new Float32Array(4);function ra(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=c0[r];if(s===void 0&&(s=new Float32Array(r),c0[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Lc(t,e){let n=u0[e];n===void 0&&(n=new Int32Array(e),u0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function sA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function aA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function oA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function lA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function cA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;h0.set(i),t.uniformMatrix2fv(this.addr,!1,h0),Ot(n,i)}}function uA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;f0.set(i),t.uniformMatrix3fv(this.addr,!1,f0),Ot(n,i)}}function dA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;d0.set(i),t.uniformMatrix4fv(this.addr,!1,d0),Ot(n,i)}}function fA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function hA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function pA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function mA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function gA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function vA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function xA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function _A(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function yA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Cf.compareFunction=n.isReversedDepthBuffer()?Oh:Fh,s=Cf):s=Rx,n.setTexture2D(e||s,r)}function SA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Px,r)}function MA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Lx,r)}function EA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Cx,r)}function TA(t){switch(t){case 5126:return sA;case 35664:return aA;case 35665:return oA;case 35666:return lA;case 35674:return cA;case 35675:return uA;case 35676:return dA;case 5124:case 35670:return fA;case 35667:case 35671:return hA;case 35668:case 35672:return pA;case 35669:case 35673:return mA;case 5125:return gA;case 36294:return vA;case 36295:return xA;case 36296:return _A;case 35678:case 36198:case 36298:case 36306:case 35682:return yA;case 35679:case 36299:case 36307:return SA;case 35680:case 36300:case 36308:case 36293:return MA;case 36289:case 36303:case 36311:case 36292:return EA}}function wA(t,e){t.uniform1fv(this.addr,e)}function AA(t,e){const n=ra(e,this.size,2);t.uniform2fv(this.addr,n)}function bA(t,e){const n=ra(e,this.size,3);t.uniform3fv(this.addr,n)}function RA(t,e){const n=ra(e,this.size,4);t.uniform4fv(this.addr,n)}function CA(t,e){const n=ra(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function PA(t,e){const n=ra(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function LA(t,e){const n=ra(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function NA(t,e){t.uniform1iv(this.addr,e)}function DA(t,e){t.uniform2iv(this.addr,e)}function IA(t,e){t.uniform3iv(this.addr,e)}function UA(t,e){t.uniform4iv(this.addr,e)}function FA(t,e){t.uniform1uiv(this.addr,e)}function OA(t,e){t.uniform2uiv(this.addr,e)}function kA(t,e){t.uniform3uiv(this.addr,e)}function BA(t,e){t.uniform4uiv(this.addr,e)}function zA(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Cf:a=Rx;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function VA(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Px,s[a])}function HA(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Lx,s[a])}function GA(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Cx,s[a])}function WA(t){switch(t){case 5126:return wA;case 35664:return AA;case 35665:return bA;case 35666:return RA;case 35674:return CA;case 35675:return PA;case 35676:return LA;case 5124:case 35670:return NA;case 35667:case 35671:return DA;case 35668:case 35672:return IA;case 35669:case 35673:return UA;case 5125:return FA;case 36294:return OA;case 36295:return kA;case 36296:return BA;case 35678:case 36198:case 36298:case 36306:case 35682:return zA;case 35679:case 36299:case 36307:return VA;case 35680:case 36300:case 36308:case 36293:return HA;case 36289:case 36303:case 36311:case 36292:return GA}}class XA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=TA(n.type)}}class jA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=WA(n.type)}}class YA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Bu=/(\w+)(\])?(\[|\.)?/g;function p0(t,e){t.seq.push(e),t.map[e.id]=e}function $A(t,e,n){const i=t.name,r=i.length;for(Bu.lastIndex=0;;){const s=Bu.exec(i),a=Bu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){p0(n,c===void 0?new XA(o,t,e):new jA(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new YA(o),p0(n,h)),n=h}}}class Rl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);$A(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function m0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const qA=37297;let KA=0;function ZA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const g0=new Ie;function JA(t){je._getMatrix(g0,je.workingColorSpace,t);const e=`mat3( ${g0.elements.map(n=>n.toFixed(4))} )`;switch(je.getTransfer(t)){case ic:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function v0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+ZA(t.getShaderSource(e),o)}else return s}function QA(t,e){const n=JA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const e2={[Jv]:"Linear",[Qv]:"Reinhard",[ex]:"Cineon",[Ch]:"ACESFilmic",[nx]:"AgX",[ix]:"Neutral",[tx]:"Custom"};function t2(t,e){const n=e2[e];return n===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ul=new k;function n2(){je.getLuminanceCoefficients(ul);const t=ul.x.toFixed(4),e=ul.y.toFixed(4),n=ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ra).join(`
`)}function r2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function s2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ra(t){return t!==""}function x0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const a2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pf(t){return t.replace(a2,l2)}const o2=new Map;function l2(t,e){let n=ze[e];if(n===void 0){const i=o2.get(e);if(i!==void 0)n=ze[i],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Pf(n)}const c2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function y0(t){return t.replace(c2,u2)}function u2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function S0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const d2={[El]:"SHADOWMAP_TYPE_PCF",[Aa]:"SHADOWMAP_TYPE_VSM"};function f2(t){return d2[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const h2={[Xr]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE",[bc]:"ENVMAP_TYPE_CUBE_UV"};function p2(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":h2[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const m2={[Ks]:"ENVMAP_MODE_REFRACTION"};function g2(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":m2[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const v2={[Zv]:"ENVMAP_BLENDING_MULTIPLY",[B1]:"ENVMAP_BLENDING_MIX",[z1]:"ENVMAP_BLENDING_ADD"};function x2(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":v2[t.combine]||"ENVMAP_BLENDING_NONE"}function _2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function y2(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=f2(n),c=p2(n),f=g2(n),h=x2(n),d=_2(n),p=i2(n),g=r2(s),E=r.createProgram();let m,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ra).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ra).join(`
`),u.length>0&&(u+=`
`)):(m=[S0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),u=[S0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mi?"#define TONE_MAPPING":"",n.toneMapping!==mi?ze.tonemapping_pars_fragment:"",n.toneMapping!==mi?t2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,QA("linearToOutputTexel",n.outputColorSpace),n2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ra).join(`
`)),a=Pf(a),a=x0(a,n),a=_0(a,n),o=Pf(o),o=x0(o,n),o=_0(o,n),a=y0(a),o=y0(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Am?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Am?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const M=v+m+a,S=v+u+o,A=m0(r,r.VERTEX_SHADER,M),w=m0(r,r.FRAGMENT_SHADER,S);r.attachShader(E,A),r.attachShader(E,w),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function R(L){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(E)||"",q=r.getShaderInfoLog(A)||"",ee=r.getShaderInfoLog(w)||"",z=B.trim(),K=q.trim(),V=ee.trim();let D=!0,j=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(D=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,A,w);else{const ne=v0(r,A,"vertex"),re=v0(r,w,"fragment");$e("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+ne+`
`+re)}else z!==""?De("WebGLProgram: Program Info Log:",z):(K===""||V==="")&&(j=!1);j&&(L.diagnostics={runnable:D,programLog:z,vertexShader:{log:K,prefix:m},fragmentShader:{log:V,prefix:u}})}r.deleteShader(A),r.deleteShader(w),_=new Rl(r,E),b=s2(r,E)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(E,qA)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=KA++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=A,this.fragmentShader=w,this}let S2=0;class M2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new E2(e),n.set(e,i)),i}}class E2{constructor(e){this.id=S2++,this.code=e,this.usedTimes=0}}function T2(t){return t===jr||t===ec||t===tc}function w2(t,e,n,i,r,s){const a=new px,o=new M2,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function E(_,b,P,L,B,q){const ee=L.fog,z=B.geometry,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,D=e.get(_.envMap||K,V),j=D&&D.mapping===bc?D.image.height:null,ne=p[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&De("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const re=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,oe=re!==void 0?re.length:0;let Be=0;z.morphAttributes.position!==void 0&&(Be=1),z.morphAttributes.normal!==void 0&&(Be=2),z.morphAttributes.color!==void 0&&(Be=3);let qe,He,U,J;if(ne){const we=ci[ne];qe=we.vertexShader,He=we.fragmentShader}else{qe=_.vertexShader,He=_.fragmentShader;const we=o.getVertexShaderStage(_),St=o.getFragmentShaderStage(_);o.update(_,we,St),U=we.id,J=St.id}const Y=t.getRenderTarget(),he=t.state.buffers.depth.getReversed(),Te=B.isInstancedMesh===!0,Ee=B.isBatchedMesh===!0,Ye=!!_.map,Ue=!!_.matcap,st=!!D,Qe=!!_.aoMap,Ke=!!_.lightMap,bt=!!_.bumpMap&&_.wireframe===!1,Nt=!!_.normalMap,kt=!!_.displacementMap,Ht=!!_.emissiveMap,yt=!!_.metalnessMap,Rt=!!_.roughnessMap,I=_.anisotropy>0,hn=_.clearcoat>0,et=_.dispersion>0,C=_.iridescence>0,x=_.sheen>0,O=_.transmission>0,W=I&&!!_.anisotropyMap,$=hn&&!!_.clearcoatMap,ae=hn&&!!_.clearcoatNormalMap,ce=hn&&!!_.clearcoatRoughnessMap,Z=C&&!!_.iridescenceMap,te=C&&!!_.iridescenceThicknessMap,ue=x&&!!_.sheenColorMap,Re=x&&!!_.sheenRoughnessMap,pe=!!_.specularMap,de=!!_.specularColorMap,Le=!!_.specularIntensityMap,Ne=O&&!!_.transmissionMap,Fe=O&&!!_.thicknessMap,N=!!_.gradientMap,le=!!_.alphaMap,Q=_.alphaTest>0,fe=!!_.alphaHash,xe=!!_.extensions;let ie=mi;_.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ie=t.toneMapping);const be={shaderID:ne,shaderType:_.type,shaderName:_.name,vertexShader:qe,fragmentShader:He,defines:_.defines,customVertexShaderID:U,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Ee,batchingColor:Ee&&B._colorsTexture!==null,instancing:Te,instancingColor:Te&&B.instanceColor!==null,instancingMorph:Te&&B.morphTexture!==null,outputColorSpace:Y===null?t.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ye,matcap:Ue,envMap:st,envMapMode:st&&D.mapping,envMapCubeUVHeight:j,aoMap:Qe,lightMap:Ke,bumpMap:bt,normalMap:Nt,displacementMap:kt,emissiveMap:Ht,normalMapObjectSpace:Nt&&_.normalMapType===G1,normalMapTangentSpace:Nt&&_.normalMapType===Tf,packedNormalMap:Nt&&_.normalMapType===Tf&&T2(_.normalMap.format),metalnessMap:yt,roughnessMap:Rt,anisotropy:I,anisotropyMap:W,clearcoat:hn,clearcoatMap:$,clearcoatNormalMap:ae,clearcoatRoughnessMap:ce,dispersion:et,iridescence:C,iridescenceMap:Z,iridescenceThicknessMap:te,sheen:x,sheenColorMap:ue,sheenRoughnessMap:Re,specularMap:pe,specularColorMap:de,specularIntensityMap:Le,transmission:O,transmissionMap:Ne,thicknessMap:Fe,gradientMap:N,opaque:_.transparent===!1&&_.blending===Bs&&_.alphaToCoverage===!1,alphaMap:le,alphaTest:Q,alphaHash:fe,combine:_.combine,mapUv:Ye&&g(_.map.channel),aoMapUv:Qe&&g(_.aoMap.channel),lightMapUv:Ke&&g(_.lightMap.channel),bumpMapUv:bt&&g(_.bumpMap.channel),normalMapUv:Nt&&g(_.normalMap.channel),displacementMapUv:kt&&g(_.displacementMap.channel),emissiveMapUv:Ht&&g(_.emissiveMap.channel),metalnessMapUv:yt&&g(_.metalnessMap.channel),roughnessMapUv:Rt&&g(_.roughnessMap.channel),anisotropyMapUv:W&&g(_.anisotropyMap.channel),clearcoatMapUv:$&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Re&&g(_.sheenRoughnessMap.channel),specularMapUv:pe&&g(_.specularMap.channel),specularColorMapUv:de&&g(_.specularColorMap.channel),specularIntensityMapUv:Le&&g(_.specularIntensityMap.channel),transmissionMapUv:Ne&&g(_.transmissionMap.channel),thicknessMapUv:Fe&&g(_.thicknessMap.channel),alphaMapUv:le&&g(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Nt||I),vertexNormals:!!z.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&(Ye||le),fog:!!ee,useFog:_.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||z.attributes.normal===void 0&&Nt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:he,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Be,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:ie,decodeVideoTexture:Ye&&_.map.isVideoTexture===!0&&je.getTransfer(_.map.colorSpace)===tt,decodeVideoTextureEmissive:Ht&&_.emissiveMap.isVideoTexture===!0&&je.getTransfer(_.emissiveMap.colorSpace)===tt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===qn,flipSided:_.side===ln,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:xe&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&_.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function m(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)b.push(P),b.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(u(b,_),v(b,_),b.push(t.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function u(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function v(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){const b=p[_.type];let P;if(b){const L=ci[b];P=HM.clone(L.uniforms)}else P=_.uniforms;return P}function S(_,b){let P=f.get(b);return P!==void 0?++P.usedTimes:(P=new y2(t,b,_,r),c.push(P),f.set(b,P)),P}function A(_){if(--_.usedTimes===0){const b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function R(){o.dispose()}return{getParameters:E,getProgramCacheKey:m,getUniforms:M,acquireProgram:S,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:R}}function A2(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function b2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function M0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function E0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,g,E,m,u){let v=t[e];return v===void 0?(v={id:d.id,object:d,geometry:p,material:g,materialVariant:a(d),groupOrder:E,renderOrder:d.renderOrder,z:m,group:u},t[e]=v):(v.id=d.id,v.object=d,v.geometry=p,v.material=g,v.materialVariant=a(d),v.groupOrder=E,v.renderOrder=d.renderOrder,v.z=m,v.group=u),e++,v}function l(d,p,g,E,m,u){const v=o(d,p,g,E,m,u);g.transmission>0?i.push(v):g.transparent===!0?r.push(v):n.push(v)}function c(d,p,g,E,m,u){const v=o(d,p,g,E,m,u);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):n.unshift(v)}function f(d,p,g){n.length>1&&n.sort(d||b2),i.length>1&&i.sort(p||M0),r.length>1&&r.sort(p||M0),g&&(n.reverse(),i.reverse(),r.reverse())}function h(){for(let d=e,p=t.length;d<p;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function R2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new E0,t.set(i,[a])):r>=s.length?(a=new E0,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function C2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Ge};break;case"SpotLight":n={position:new k,direction:new k,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function P2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let L2=0;function N2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function D2(t){const e=new C2,n=P2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new pt,a=new pt;function o(c){let f=0,h=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,g=0,E=0,m=0,u=0,v=0,M=0,S=0,A=0,w=0,R=0;c.sort(N2);for(let b=0,P=c.length;b<P;b++){const L=c[b],B=L.color,q=L.intensity,ee=L.distance;let z=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===jr?z=L.shadow.map.texture:z=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)f+=B.r*q,h+=B.g*q,d+=B.b*q;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],q);R++}else if(L.isDirectionalLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const V=L.shadow,D=n.get(L);D.shadowIntensity=V.intensity,D.shadowBias=V.bias,D.shadowNormalBias=V.normalBias,D.shadowRadius=V.radius,D.shadowMapSize=V.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=L.shadow.matrix,v++}i.directional[p]=K,p++}else if(L.isSpotLight){const K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(B).multiplyScalar(q),K.distance=ee,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[E]=K;const V=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,V.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[E]=V.matrix,L.castShadow){const D=n.get(L);D.shadowIntensity=V.intensity,D.shadowBias=V.bias,D.shadowNormalBias=V.normalBias,D.shadowRadius=V.radius,D.shadowMapSize=V.mapSize,i.spotShadow[E]=D,i.spotShadowMap[E]=z,S++}E++}else if(L.isRectAreaLight){const K=e.get(L);K.color.copy(B).multiplyScalar(q),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=K,m++}else if(L.isPointLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){const V=L.shadow,D=n.get(L);D.shadowIntensity=V.intensity,D.shadowBias=V.bias,D.shadowNormalBias=V.normalBias,D.shadowRadius=V.radius,D.shadowMapSize=V.mapSize,D.shadowCameraNear=V.camera.near,D.shadowCameraFar=V.camera.far,i.pointShadow[g]=D,i.pointShadowMap[g]=z,i.pointShadowMatrix[g]=L.shadow.matrix,M++}i.point[g]=K,g++}else if(L.isHemisphereLight){const K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(q),K.groundColor.copy(L.groundColor).multiplyScalar(q),i.hemi[u]=K,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const _=i.hash;(_.directionalLength!==p||_.pointLength!==g||_.spotLength!==E||_.rectAreaLength!==m||_.hemiLength!==u||_.numDirectionalShadows!==v||_.numPointShadows!==M||_.numSpotShadows!==S||_.numSpotMaps!==A||_.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,_.directionalLength=p,_.pointLength=g,_.spotLength=E,_.rectAreaLength=m,_.hemiLength=u,_.numDirectionalShadows=v,_.numPointShadows=M,_.numSpotShadows=S,_.numSpotMaps=A,_.numLightProbes=R,i.version=L2++)}function l(c,f){let h=0,d=0,p=0,g=0,E=0;const m=f.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const M=c[u];if(M.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(M.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const S=i.hemi[E];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),E++}}}return{setup:o,setupView:l,state:i}}function T0(t){const e=new D2(t),n=[],i=[],r=[];function s(d){h.camera=d,n.length=0,i.length=0,r.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function f(d){e.setupView(n,d)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function I2(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new T0(t),e.set(r,[o])):s>=a.length?(o=new T0(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const U2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F2=`uniform sampler2D shadow_pass;
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
}`,O2=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],k2=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],w0=new pt,Sa=new k,zu=new k;function B2(t,e,n){let i=new Vh;const r=new ke,s=new ke,a=new vt,o=new YM,l=new $M,c={},f=n.maxTextureSize,h={[gr]:ln,[ln]:gr,[qn]:qn},d=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:U2,fragmentShader:F2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new un;g.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new an(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=El;let u=this.type;this.render=function(w,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===y1&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=El);const b=t.getRenderTarget(),P=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Pi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const q=u!==this.type;q&&R.traverse(function(ee){ee.material&&(Array.isArray(ee.material)?ee.material.forEach(z=>z.needsUpdate=!0):ee.material.needsUpdate=!0)});for(let ee=0,z=w.length;ee<z;ee++){const K=w[ee],V=K.shadow;if(V===void 0){De("WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const D=V.getFrameExtents();r.multiply(D),s.copy(V.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/D.x),r.x=s.x*D.x,V.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/D.y),r.y=s.y*D.y,V.mapSize.y=s.y));const j=t.state.buffers.depth.getReversed();if(V.camera._reversedDepth=j,V.map===null||q===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Aa){if(K.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new gi(r.x,r.y,{format:jr,type:Oi,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),V.map.texture.name=K.name+".shadowMap",V.map.depthTexture=new Zs(r.x,r.y,di),V.map.depthTexture.name=K.name+".shadowMapDepth",V.map.depthTexture.format=ki,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Wt,V.map.depthTexture.magFilter=Wt}else K.isPointLight?(V.map=new bx(r.x),V.map.depthTexture=new zM(r.x,vi)):(V.map=new gi(r.x,r.y),V.map.depthTexture=new Zs(r.x,r.y,vi)),V.map.depthTexture.name=K.name+".shadowMap",V.map.depthTexture.format=ki,this.type===El?(V.map.depthTexture.compareFunction=j?Oh:Fh,V.map.depthTexture.minFilter=Qt,V.map.depthTexture.magFilter=Qt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Wt,V.map.depthTexture.magFilter=Wt);V.camera.updateProjectionMatrix()}const ne=V.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<ne;re++){if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,re),t.clear();else{re===0&&(t.setRenderTarget(V.map),t.clear());const oe=V.getViewport(re);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),B.viewport(a)}if(K.isPointLight){const oe=V.camera,Be=V.matrix,qe=K.distance||oe.far;qe!==oe.far&&(oe.far=qe,oe.updateProjectionMatrix()),Sa.setFromMatrixPosition(K.matrixWorld),oe.position.copy(Sa),zu.copy(oe.position),zu.add(O2[re]),oe.up.copy(k2[re]),oe.lookAt(zu),oe.updateMatrixWorld(),Be.makeTranslation(-Sa.x,-Sa.y,-Sa.z),w0.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),V._frustum.setFromProjectionMatrix(w0,oe.coordinateSystem,oe.reversedDepth)}else V.updateMatrices(K);i=V.getFrustum(),S(R,_,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===Aa&&v(V,_),V.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(b,P,L)};function v(w,R){const _=e.update(E);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new gi(r.x,r.y,{format:jr,type:Oi})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(R,null,_,d,E,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(R,null,_,p,E,null)}function M(w,R,_,b){let P=null;const L=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)P=L;else if(P=_.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const B=P.uuid,q=R.uuid;let ee=c[B];ee===void 0&&(ee={},c[B]=ee);let z=ee[q];z===void 0&&(z=P.clone(),ee[q]=z,R.addEventListener("dispose",A)),P=z}if(P.visible=R.visible,P.wireframe=R.wireframe,b===Aa?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:h[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const B=t.properties.get(P);B.light=_}return P}function S(w,R,_,b,P){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Aa)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);const q=e.update(w),ee=w.material;if(Array.isArray(ee)){const z=q.groups;for(let K=0,V=z.length;K<V;K++){const D=z[K],j=ee[D.materialIndex];if(j&&j.visible){const ne=M(w,j,b,P);w.onBeforeShadow(t,w,R,_,q,ne,D),t.renderBufferDirect(_,null,q,ne,w,D),w.onAfterShadow(t,w,R,_,q,ne,D)}}}else if(ee.visible){const z=M(w,ee,b,P);w.onBeforeShadow(t,w,R,_,q,z,null),t.renderBufferDirect(_,null,q,z,w,null),w.onAfterShadow(t,w,R,_,q,z,null)}}const B=w.children;for(let q=0,ee=B.length;q<ee;q++)S(B[q],R,_,b,P)}function A(w){w.target.removeEventListener("dispose",A);for(const _ in c){const b=c[_],P=w.target.uuid;P in b&&(b[P].dispose(),delete b[P])}}}function z2(t,e){function n(){let N=!1;const le=new vt;let Q=null;const fe=new vt(0,0,0,0);return{setMask:function(xe){Q!==xe&&!N&&(t.colorMask(xe,xe,xe,xe),Q=xe)},setLocked:function(xe){N=xe},setClear:function(xe,ie,be,we,St){St===!0&&(xe*=we,ie*=we,be*=we),le.set(xe,ie,be,we),fe.equals(le)===!1&&(t.clearColor(xe,ie,be,we),fe.copy(le))},reset:function(){N=!1,Q=null,fe.set(-1,0,0,0)}}}function i(){let N=!1,le=!1,Q=null,fe=null,xe=null;return{setReversed:function(ie){if(le!==ie){const be=e.get("EXT_clip_control");ie?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),le=ie;const we=xe;xe=null,this.setClear(we)}},getReversed:function(){return le},setTest:function(ie){ie?Y(t.DEPTH_TEST):he(t.DEPTH_TEST)},setMask:function(ie){Q!==ie&&!N&&(t.depthMask(ie),Q=ie)},setFunc:function(ie){if(le&&(ie=Q1[ie]),fe!==ie){switch(ie){case kd:t.depthFunc(t.NEVER);break;case Bd:t.depthFunc(t.ALWAYS);break;case zd:t.depthFunc(t.LESS);break;case qs:t.depthFunc(t.LEQUAL);break;case Vd:t.depthFunc(t.EQUAL);break;case Hd:t.depthFunc(t.GEQUAL);break;case Gd:t.depthFunc(t.GREATER);break;case Wd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=ie}},setLocked:function(ie){N=ie},setClear:function(ie){xe!==ie&&(xe=ie,le&&(ie=1-ie),t.clearDepth(ie))},reset:function(){N=!1,Q=null,fe=null,xe=null,le=!1}}}function r(){let N=!1,le=null,Q=null,fe=null,xe=null,ie=null,be=null,we=null,St=null;return{setTest:function(lt){N||(lt?Y(t.STENCIL_TEST):he(t.STENCIL_TEST))},setMask:function(lt){le!==lt&&!N&&(t.stencilMask(lt),le=lt)},setFunc:function(lt,ti,ni){(Q!==lt||fe!==ti||xe!==ni)&&(t.stencilFunc(lt,ti,ni),Q=lt,fe=ti,xe=ni)},setOp:function(lt,ti,ni){(ie!==lt||be!==ti||we!==ni)&&(t.stencilOp(lt,ti,ni),ie=lt,be=ti,we=ni)},setLocked:function(lt){N=lt},setClear:function(lt){St!==lt&&(t.clearStencil(lt),St=lt)},reset:function(){N=!1,le=null,Q=null,fe=null,xe=null,ie=null,be=null,we=null,St=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},h={},d={},p=new WeakMap,g=[],E=null,m=!1,u=null,v=null,M=null,S=null,A=null,w=null,R=null,_=new Ge(0,0,0),b=0,P=!1,L=null,B=null,q=null,ee=null,z=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,D=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(j)[1]),V=D>=1):j.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),V=D>=2);let ne=null,re={};const oe=t.getParameter(t.SCISSOR_BOX),Be=t.getParameter(t.VIEWPORT),qe=new vt().fromArray(oe),He=new vt().fromArray(Be);function U(N,le,Q,fe){const xe=new Uint8Array(4),ie=t.createTexture();t.bindTexture(N,ie),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<Q;be++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(le+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return ie}const J={};J[t.TEXTURE_2D]=U(t.TEXTURE_2D,t.TEXTURE_2D,1),J[t.TEXTURE_CUBE_MAP]=U(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[t.TEXTURE_2D_ARRAY]=U(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),J[t.TEXTURE_3D]=U(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(t.DEPTH_TEST),a.setFunc(qs),bt(!1),Nt(Mm),Y(t.CULL_FACE),Qe(Pi);function Y(N){f[N]!==!0&&(t.enable(N),f[N]=!0)}function he(N){f[N]!==!1&&(t.disable(N),f[N]=!1)}function Te(N,le){return d[N]!==le?(t.bindFramebuffer(N,le),d[N]=le,N===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=le),N===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=le),!0):!1}function Ee(N,le){let Q=g,fe=!1;if(N){Q=p.get(le),Q===void 0&&(Q=[],p.set(le,Q));const xe=N.textures;if(Q.length!==xe.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,be=xe.length;ie<be;ie++)Q[ie]=t.COLOR_ATTACHMENT0+ie;Q.length=xe.length,fe=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,fe=!0);fe&&t.drawBuffers(Q)}function Ye(N){return E!==N?(t.useProgram(N),E=N,!0):!1}const Ue={[Lr]:t.FUNC_ADD,[M1]:t.FUNC_SUBTRACT,[E1]:t.FUNC_REVERSE_SUBTRACT};Ue[T1]=t.MIN,Ue[w1]=t.MAX;const st={[A1]:t.ZERO,[b1]:t.ONE,[R1]:t.SRC_COLOR,[Fd]:t.SRC_ALPHA,[I1]:t.SRC_ALPHA_SATURATE,[N1]:t.DST_COLOR,[P1]:t.DST_ALPHA,[C1]:t.ONE_MINUS_SRC_COLOR,[Od]:t.ONE_MINUS_SRC_ALPHA,[D1]:t.ONE_MINUS_DST_COLOR,[L1]:t.ONE_MINUS_DST_ALPHA,[U1]:t.CONSTANT_COLOR,[F1]:t.ONE_MINUS_CONSTANT_COLOR,[O1]:t.CONSTANT_ALPHA,[k1]:t.ONE_MINUS_CONSTANT_ALPHA};function Qe(N,le,Q,fe,xe,ie,be,we,St,lt){if(N===Pi){m===!0&&(he(t.BLEND),m=!1);return}if(m===!1&&(Y(t.BLEND),m=!0),N!==S1){if(N!==u||lt!==P){if((v!==Lr||A!==Lr)&&(t.blendEquation(t.FUNC_ADD),v=Lr,A=Lr),lt)switch(N){case Bs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ti:t.blendFunc(t.ONE,t.ONE);break;case Em:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:$e("WebGLState: Invalid blending: ",N);break}else switch(N){case Bs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ti:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Em:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tm:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",N);break}M=null,S=null,w=null,R=null,_.set(0,0,0),b=0,u=N,P=lt}return}xe=xe||le,ie=ie||Q,be=be||fe,(le!==v||xe!==A)&&(t.blendEquationSeparate(Ue[le],Ue[xe]),v=le,A=xe),(Q!==M||fe!==S||ie!==w||be!==R)&&(t.blendFuncSeparate(st[Q],st[fe],st[ie],st[be]),M=Q,S=fe,w=ie,R=be),(we.equals(_)===!1||St!==b)&&(t.blendColor(we.r,we.g,we.b,St),_.copy(we),b=St),u=N,P=!1}function Ke(N,le){N.side===qn?he(t.CULL_FACE):Y(t.CULL_FACE);let Q=N.side===ln;le&&(Q=!Q),bt(Q),N.blending===Bs&&N.transparent===!1?Qe(Pi):Qe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const fe=N.stencilWrite;o.setTest(fe),fe&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ht(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Y(t.SAMPLE_ALPHA_TO_COVERAGE):he(t.SAMPLE_ALPHA_TO_COVERAGE)}function bt(N){L!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),L=N)}function Nt(N){N!==x1?(Y(t.CULL_FACE),N!==B&&(N===Mm?t.cullFace(t.BACK):N===_1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):he(t.CULL_FACE),B=N}function kt(N){N!==q&&(V&&t.lineWidth(N),q=N)}function Ht(N,le,Q){N?(Y(t.POLYGON_OFFSET_FILL),(ee!==le||z!==Q)&&(ee=le,z=Q,a.getReversed()&&(le=-le),t.polygonOffset(le,Q))):he(t.POLYGON_OFFSET_FILL)}function yt(N){N?Y(t.SCISSOR_TEST):he(t.SCISSOR_TEST)}function Rt(N){N===void 0&&(N=t.TEXTURE0+K-1),ne!==N&&(t.activeTexture(N),ne=N)}function I(N,le,Q){Q===void 0&&(ne===null?Q=t.TEXTURE0+K-1:Q=ne);let fe=re[Q];fe===void 0&&(fe={type:void 0,texture:void 0},re[Q]=fe),(fe.type!==N||fe.texture!==le)&&(ne!==Q&&(t.activeTexture(Q),ne=Q),t.bindTexture(N,le||J[N]),fe.type=N,fe.texture=le)}function hn(){const N=re[ne];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function et(){try{t.compressedTexImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function x(){try{t.texSubImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function O(){try{t.texSubImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function $(){try{t.compressedTexSubImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function ae(){try{t.texStorage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function ce(){try{t.texStorage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function Z(){try{t.texImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function te(){try{t.texImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function ue(N){return h[N]!==void 0?h[N]:t.getParameter(N)}function Re(N,le){h[N]!==le&&(t.pixelStorei(N,le),h[N]=le)}function pe(N){qe.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),qe.copy(N))}function de(N){He.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),He.copy(N))}function Le(N,le){let Q=c.get(le);Q===void 0&&(Q=new WeakMap,c.set(le,Q));let fe=Q.get(N);fe===void 0&&(fe=t.getUniformBlockIndex(le,N.name),Q.set(N,fe))}function Ne(N,le){const fe=c.get(le).get(N);l.get(le)!==fe&&(t.uniformBlockBinding(le,fe,N.__bindingPointIndex),l.set(le,fe))}function Fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},h={},ne=null,re={},d={},p=new WeakMap,g=[],E=null,m=!1,u=null,v=null,M=null,S=null,A=null,w=null,R=null,_=new Ge(0,0,0),b=0,P=!1,L=null,B=null,q=null,ee=null,z=null,qe.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Y,disable:he,bindFramebuffer:Te,drawBuffers:Ee,useProgram:Ye,setBlending:Qe,setMaterial:Ke,setFlipSided:bt,setCullFace:Nt,setLineWidth:kt,setPolygonOffset:Ht,setScissorTest:yt,activeTexture:Rt,bindTexture:I,unbindTexture:hn,compressedTexImage2D:et,compressedTexImage3D:C,texImage2D:Z,texImage3D:te,pixelStorei:Re,getParameter:ue,updateUBOMapping:Le,uniformBlockBinding:Ne,texStorage2D:ae,texStorage3D:ce,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:W,compressedTexSubImage3D:$,scissor:pe,viewport:de,reset:Fe}}function V2(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,f=new WeakMap,h=new Set;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(C,x){return g?new OffscreenCanvas(C,x):rc("canvas")}function m(C,x,O){let W=1;const $=et(C);if(($.width>O||$.height>O)&&(W=O/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ae=Math.floor(W*$.width),ce=Math.floor(W*$.height);d===void 0&&(d=E(ae,ce));const Z=x?E(ae,ce):d;return Z.width=ae,Z.height=ce,Z.getContext("2d").drawImage(C,0,0,ae,ce),De("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ae+"x"+ce+")."),Z}else return"data"in C&&De("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function u(C){return C.generateMipmaps}function v(C){t.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(C,x,O,W,$,ae=!1){if(C!==null){if(t[C]!==void 0)return t[C];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ce;W&&(ce=e.get("EXT_texture_norm16"),ce||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===t.RED&&(O===t.FLOAT&&(Z=t.R32F),O===t.HALF_FLOAT&&(Z=t.R16F),O===t.UNSIGNED_BYTE&&(Z=t.R8),O===t.UNSIGNED_SHORT&&ce&&(Z=ce.R16_EXT),O===t.SHORT&&ce&&(Z=ce.R16_SNORM_EXT)),x===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.R8UI),O===t.UNSIGNED_SHORT&&(Z=t.R16UI),O===t.UNSIGNED_INT&&(Z=t.R32UI),O===t.BYTE&&(Z=t.R8I),O===t.SHORT&&(Z=t.R16I),O===t.INT&&(Z=t.R32I)),x===t.RG&&(O===t.FLOAT&&(Z=t.RG32F),O===t.HALF_FLOAT&&(Z=t.RG16F),O===t.UNSIGNED_BYTE&&(Z=t.RG8),O===t.UNSIGNED_SHORT&&ce&&(Z=ce.RG16_EXT),O===t.SHORT&&ce&&(Z=ce.RG16_SNORM_EXT)),x===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.RG8UI),O===t.UNSIGNED_SHORT&&(Z=t.RG16UI),O===t.UNSIGNED_INT&&(Z=t.RG32UI),O===t.BYTE&&(Z=t.RG8I),O===t.SHORT&&(Z=t.RG16I),O===t.INT&&(Z=t.RG32I)),x===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),O===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),O===t.UNSIGNED_INT&&(Z=t.RGB32UI),O===t.BYTE&&(Z=t.RGB8I),O===t.SHORT&&(Z=t.RGB16I),O===t.INT&&(Z=t.RGB32I)),x===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),O===t.UNSIGNED_INT&&(Z=t.RGBA32UI),O===t.BYTE&&(Z=t.RGBA8I),O===t.SHORT&&(Z=t.RGBA16I),O===t.INT&&(Z=t.RGBA32I)),x===t.RGB&&(O===t.UNSIGNED_SHORT&&ce&&(Z=ce.RGB16_EXT),O===t.SHORT&&ce&&(Z=ce.RGB16_SNORM_EXT),O===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),O===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),x===t.RGBA){const te=ae?ic:je.getTransfer($);O===t.FLOAT&&(Z=t.RGBA32F),O===t.HALF_FLOAT&&(Z=t.RGBA16F),O===t.UNSIGNED_BYTE&&(Z=te===tt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT&&ce&&(Z=ce.RGBA16_EXT),O===t.SHORT&&ce&&(Z=ce.RGBA16_SNORM_EXT),O===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function A(C,x){let O;return C?x===null||x===vi||x===oo?O=t.DEPTH24_STENCIL8:x===di?O=t.DEPTH32F_STENCIL8:x===ao&&(O=t.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===vi||x===oo?O=t.DEPTH_COMPONENT24:x===di?O=t.DEPTH_COMPONENT32F:x===ao&&(O=t.DEPTH_COMPONENT16),O}function w(C,x){return u(C)===!0||C.isFramebufferTexture&&C.minFilter!==Wt&&C.minFilter!==Qt?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function R(C){const x=C.target;x.removeEventListener("dispose",R),b(x),x.isVideoTexture&&f.delete(x),x.isHTMLTexture&&h.delete(x)}function _(C){const x=C.target;x.removeEventListener("dispose",_),L(x)}function b(C){const x=i.get(C);if(x.__webglInit===void 0)return;const O=C.source,W=p.get(O);if(W){const $=W[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&P(C),Object.keys(W).length===0&&p.delete(O)}i.remove(C)}function P(C){const x=i.get(C);t.deleteTexture(x.__webglTexture);const O=C.source,W=p.get(O);delete W[x.__cacheKey],a.memory.textures--}function L(C){const x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let $=0;$<x.__webglFramebuffer[W].length;$++)t.deleteFramebuffer(x.__webglFramebuffer[W][$]);else t.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)t.deleteFramebuffer(x.__webglFramebuffer[W]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=C.textures;for(let W=0,$=O.length;W<$;W++){const ae=i.get(O[W]);ae.__webglTexture&&(t.deleteTexture(ae.__webglTexture),a.memory.textures--),i.remove(O[W])}i.remove(C)}let B=0;function q(){B=0}function ee(){return B}function z(C){B=C}function K(){const C=B;return C>=r.maxTextures&&De("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),B+=1,C}function V(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function D(C,x){const O=i.get(C);if(C.isVideoTexture&&I(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const W=C.image;if(W===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{he(O,C,x);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+x)}function j(C,x){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){he(O,C,x);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+x)}function ne(C,x){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){he(O,C,x);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+x)}function re(C,x){const O=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){Te(O,C,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+x)}const oe={[Xd]:t.REPEAT,[Ri]:t.CLAMP_TO_EDGE,[jd]:t.MIRRORED_REPEAT},Be={[Wt]:t.NEAREST,[V1]:t.NEAREST_MIPMAP_NEAREST,[ko]:t.NEAREST_MIPMAP_LINEAR,[Qt]:t.LINEAR,[cu]:t.LINEAR_MIPMAP_NEAREST,[Fr]:t.LINEAR_MIPMAP_LINEAR},qe={[W1]:t.NEVER,[q1]:t.ALWAYS,[X1]:t.LESS,[Fh]:t.LEQUAL,[j1]:t.EQUAL,[Oh]:t.GEQUAL,[Y1]:t.GREATER,[$1]:t.NOTEQUAL};function He(C,x){if(x.type===di&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Qt||x.magFilter===cu||x.magFilter===ko||x.magFilter===Fr||x.minFilter===Qt||x.minFilter===cu||x.minFilter===ko||x.minFilter===Fr)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,oe[x.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,oe[x.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,oe[x.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Be[x.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Be[x.minFilter]),x.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,qe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Wt||x.minFilter!==ko&&x.minFilter!==Fr||x.type===di&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function U(C,x){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",R));const W=x.source;let $=p.get(W);$===void 0&&($={},p.set(W,$));const ae=V(x);if(ae!==C.__cacheKey){$[ae]===void 0&&($[ae]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[ae].usedTimes++;const ce=$[C.__cacheKey];ce!==void 0&&($[C.__cacheKey].usedTimes--,ce.usedTimes===0&&P(x)),C.__cacheKey=ae,C.__webglTexture=$[ae].texture}return O}function J(C,x,O){return Math.floor(Math.floor(C/O)/x)}function Y(C,x,O,W){const ae=C.updateRanges;if(ae.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,O,W,x.data);else{ae.sort((Re,pe)=>Re.start-pe.start);let ce=0;for(let Re=1;Re<ae.length;Re++){const pe=ae[ce],de=ae[Re],Le=pe.start+pe.count,Ne=J(de.start,x.width,4),Fe=J(pe.start,x.width,4);de.start<=Le+1&&Ne===Fe&&J(de.start+de.count-1,x.width,4)===Ne?pe.count=Math.max(pe.count,de.start+de.count-pe.start):(++ce,ae[ce]=de)}ae.length=ce+1;const Z=n.getParameter(t.UNPACK_ROW_LENGTH),te=n.getParameter(t.UNPACK_SKIP_PIXELS),ue=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let Re=0,pe=ae.length;Re<pe;Re++){const de=ae[Re],Le=Math.floor(de.start/4),Ne=Math.ceil(de.count/4),Fe=Le%x.width,N=Math.floor(Le/x.width),le=Ne,Q=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,Fe,N,le,Q,O,W,x.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Z),n.pixelStorei(t.UNPACK_SKIP_PIXELS,te),n.pixelStorei(t.UNPACK_SKIP_ROWS,ue)}}function he(C,x,O){let W=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=t.TEXTURE_3D);const $=U(C,x),ae=x.source;n.bindTexture(W,C.__webglTexture,t.TEXTURE0+O);const ce=i.get(ae);if(ae.version!==ce.__version||$===!0){if(n.activeTexture(t.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const Q=je.getPrimaries(je.workingColorSpace),fe=x.colorSpace===er?null:je.getPrimaries(x.colorSpace),xe=x.colorSpace===er||Q===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment);let te=m(x.image,!1,r.maxTextureSize);te=hn(x,te);const ue=s.convert(x.format,x.colorSpace),Re=s.convert(x.type);let pe=S(x.internalFormat,ue,Re,x.normalized,x.colorSpace,x.isVideoTexture);He(W,x);let de;const Le=x.mipmaps,Ne=x.isVideoTexture!==!0,Fe=ce.__version===void 0||$===!0,N=ae.dataReady,le=w(x,te);if(x.isDepthTexture)pe=A(x.format===Or,x.type),Fe&&(Ne?n.texStorage2D(t.TEXTURE_2D,1,pe,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,pe,te.width,te.height,0,ue,Re,null));else if(x.isDataTexture)if(Le.length>0){Ne&&Fe&&n.texStorage2D(t.TEXTURE_2D,le,pe,Le[0].width,Le[0].height);for(let Q=0,fe=Le.length;Q<fe;Q++)de=Le[Q],Ne?N&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,de.width,de.height,ue,Re,de.data):n.texImage2D(t.TEXTURE_2D,Q,pe,de.width,de.height,0,ue,Re,de.data);x.generateMipmaps=!1}else Ne?(Fe&&n.texStorage2D(t.TEXTURE_2D,le,pe,te.width,te.height),N&&Y(x,te,ue,Re)):n.texImage2D(t.TEXTURE_2D,0,pe,te.width,te.height,0,ue,Re,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ne&&Fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,pe,Le[0].width,Le[0].height,te.depth);for(let Q=0,fe=Le.length;Q<fe;Q++)if(de=Le[Q],x.format!==Zn)if(ue!==null)if(Ne){if(N)if(x.layerUpdates.size>0){const xe=n0(de.width,de.height,x.format,x.type);for(const ie of x.layerUpdates){const be=de.data.subarray(ie*xe/de.data.BYTES_PER_ELEMENT,(ie+1)*xe/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,ie,de.width,de.height,1,ue,be)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,te.depth,ue,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,pe,de.width,de.height,te.depth,0,de.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,te.depth,ue,Re,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,pe,de.width,de.height,te.depth,0,ue,Re,de.data)}else{Ne&&Fe&&n.texStorage2D(t.TEXTURE_2D,le,pe,Le[0].width,Le[0].height);for(let Q=0,fe=Le.length;Q<fe;Q++)de=Le[Q],x.format!==Zn?ue!==null?Ne?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,de.width,de.height,ue,de.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,pe,de.width,de.height,0,de.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?N&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,de.width,de.height,ue,Re,de.data):n.texImage2D(t.TEXTURE_2D,Q,pe,de.width,de.height,0,ue,Re,de.data)}else if(x.isDataArrayTexture)if(Ne){if(Fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,pe,te.width,te.height,te.depth),N)if(x.layerUpdates.size>0){const Q=n0(te.width,te.height,x.format,x.type);for(const fe of x.layerUpdates){const xe=te.data.subarray(fe*Q/te.data.BYTES_PER_ELEMENT,(fe+1)*Q/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,fe,te.width,te.height,1,ue,Re,xe)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ue,Re,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,te.width,te.height,te.depth,0,ue,Re,te.data);else if(x.isData3DTexture)Ne?(Fe&&n.texStorage3D(t.TEXTURE_3D,le,pe,te.width,te.height,te.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ue,Re,te.data)):n.texImage3D(t.TEXTURE_3D,0,pe,te.width,te.height,te.depth,0,ue,Re,te.data);else if(x.isFramebufferTexture){if(Fe)if(Ne)n.texStorage2D(t.TEXTURE_2D,le,pe,te.width,te.height);else{let Q=te.width,fe=te.height;for(let xe=0;xe<le;xe++)n.texImage2D(t.TEXTURE_2D,xe,pe,Q,fe,0,ue,Re,null),Q>>=1,fe>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in t){const Q=t.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),te.parentNode!==Q){Q.appendChild(te),h.add(x),Q.onpaint=fe=>{const xe=fe.changedElements;for(const ie of h)xe.includes(ie.image)&&(ie.needsUpdate=!0)},Q.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,te);else{const xe=t.RGBA,ie=t.RGBA,be=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,xe,ie,be,te)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Ne&&Fe){const Q=et(Le[0]);n.texStorage2D(t.TEXTURE_2D,le,pe,Q.width,Q.height)}for(let Q=0,fe=Le.length;Q<fe;Q++)de=Le[Q],Ne?N&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ue,Re,de):n.texImage2D(t.TEXTURE_2D,Q,pe,ue,Re,de);x.generateMipmaps=!1}else if(Ne){if(Fe){const Q=et(te);n.texStorage2D(t.TEXTURE_2D,le,pe,Q.width,Q.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,Re,te)}else n.texImage2D(t.TEXTURE_2D,0,pe,ue,Re,te);u(x)&&v(W),ce.__version=ae.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Te(C,x,O){if(x.image.length!==6)return;const W=U(C,x),$=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+O);const ae=i.get($);if($.version!==ae.__version||W===!0){n.activeTexture(t.TEXTURE0+O);const ce=je.getPrimaries(je.workingColorSpace),Z=x.colorSpace===er?null:je.getPrimaries(x.colorSpace),te=x.colorSpace===er||ce===Z?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ue=x.isCompressedTexture||x.image[0].isCompressedTexture,Re=x.image[0]&&x.image[0].isDataTexture,pe=[];for(let ie=0;ie<6;ie++)!ue&&!Re?pe[ie]=m(x.image[ie],!0,r.maxCubemapSize):pe[ie]=Re?x.image[ie].image:x.image[ie],pe[ie]=hn(x,pe[ie]);const de=pe[0],Le=s.convert(x.format,x.colorSpace),Ne=s.convert(x.type),Fe=S(x.internalFormat,Le,Ne,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,le=ae.__version===void 0||W===!0,Q=$.dataReady;let fe=w(x,de);He(t.TEXTURE_CUBE_MAP,x);let xe;if(ue){N&&le&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Fe,de.width,de.height);for(let ie=0;ie<6;ie++){xe=pe[ie].mipmaps;for(let be=0;be<xe.length;be++){const we=xe[be];x.format!==Zn?Le!==null?N?Q&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be,0,0,we.width,we.height,Le,we.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be,Fe,we.width,we.height,0,we.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be,0,0,we.width,we.height,Le,Ne,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be,Fe,we.width,we.height,0,Le,Ne,we.data)}}}else{if(xe=x.mipmaps,N&&le){xe.length>0&&fe++;const ie=et(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Fe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Re){N?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,pe[ie].width,pe[ie].height,Le,Ne,pe[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,pe[ie].width,pe[ie].height,0,Le,Ne,pe[ie].data);for(let be=0;be<xe.length;be++){const St=xe[be].image[ie].image;N?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be+1,0,0,St.width,St.height,Le,Ne,St.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be+1,Fe,St.width,St.height,0,Le,Ne,St.data)}}else{N?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Le,Ne,pe[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,Le,Ne,pe[ie]);for(let be=0;be<xe.length;be++){const we=xe[be];N?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be+1,0,0,Le,Ne,we.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be+1,Fe,Le,Ne,we.image[ie])}}}u(x)&&v(t.TEXTURE_CUBE_MAP),ae.__version=$.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Ee(C,x,O,W,$,ae){const ce=s.convert(O.format,O.colorSpace),Z=s.convert(O.type),te=S(O.internalFormat,ce,Z,O.normalized,O.colorSpace),ue=i.get(x),Re=i.get(O);if(Re.__renderTarget=x,!ue.__hasExternalTextures){const pe=Math.max(1,x.width>>ae),de=Math.max(1,x.height>>ae);$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?n.texImage3D($,ae,te,pe,de,x.depth,0,ce,Z,null):n.texImage2D($,ae,te,pe,de,0,ce,Z,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Rt(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,$,Re.__webglTexture,0,yt(x)):($===t.TEXTURE_2D||$>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,$,Re.__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ye(C,x,O){if(t.bindRenderbuffer(t.RENDERBUFFER,C),x.depthBuffer){const W=x.depthTexture,$=W&&W.isDepthTexture?W.type:null,ae=A(x.stencilBuffer,$),ce=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Rt(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(x),ae,x.width,x.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(x),ae,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,ae,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,C)}else{const W=x.textures;for(let $=0;$<W.length;$++){const ae=W[$],ce=s.convert(ae.format,ae.colorSpace),Z=s.convert(ae.type),te=S(ae.internalFormat,ce,Z,ae.normalized,ae.colorSpace);Rt(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(x),te,x.width,x.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(x),te,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,te,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ue(C,x,O){const W=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=i.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),$.__webglTexture===void 0){$.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),He(t.TEXTURE_CUBE_MAP,x.depthTexture);const ue=s.convert(x.depthTexture.format),Re=s.convert(x.depthTexture.type);let pe;x.depthTexture.format===ki?pe=t.DEPTH_COMPONENT24:x.depthTexture.format===Or&&(pe=t.DEPTH24_STENCIL8);for(let de=0;de<6;de++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,pe,x.width,x.height,0,ue,Re,null)}}else D(x.depthTexture,0);const ae=$.__webglTexture,ce=yt(x),Z=W?t.TEXTURE_CUBE_MAP_POSITIVE_X+O:t.TEXTURE_2D,te=x.depthTexture.format===Or?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===ki)Rt(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,Z,ae,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,te,Z,ae,0);else if(x.depthTexture.format===Or)Rt(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,Z,ae,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,te,Z,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(C){const x=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const W=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=W}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let W=0;W<6;W++)Ue(x.__webglFramebuffer[W],C,W);else{const W=C.texture.mipmaps;W&&W.length>0?Ue(x.__webglFramebuffer[0],C,0):Ue(x.__webglFramebuffer,C,0)}else if(O){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=t.createRenderbuffer(),Ye(x.__webglDepthbuffer[W],C,!1);else{const $=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=x.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,ae)}}else{const W=C.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),Ye(x.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,ae)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Qe(C,x,O){const W=i.get(C);x!==void 0&&Ee(W.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&st(C)}function Ke(C){const x=C.texture,O=i.get(C),W=i.get(x);C.addEventListener("dispose",_);const $=C.textures,ae=C.isWebGLCubeRenderTarget===!0,ce=$.length>1;if(ce||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=x.version,a.memory.textures++),ae){O.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[Z]=[];for(let te=0;te<x.mipmaps.length;te++)O.__webglFramebuffer[Z][te]=t.createFramebuffer()}else O.__webglFramebuffer[Z]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)O.__webglFramebuffer[Z]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(ce)for(let Z=0,te=$.length;Z<te;Z++){const ue=i.get($[Z]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),a.memory.textures++)}if(C.samples>0&&Rt(C)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Z=0;Z<$.length;Z++){const te=$[Z];O.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[Z]);const ue=s.convert(te.format,te.colorSpace),Re=s.convert(te.type),pe=S(te.internalFormat,ue,Re,te.normalized,te.colorSpace,C.isXRRenderTarget===!0),de=yt(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,pe,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,O.__webglColorRenderbuffer[Z])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),Ye(O.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),He(t.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)Ee(O.__webglFramebuffer[Z][te],C,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,te);else Ee(O.__webglFramebuffer[Z],C,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);u(x)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){for(let Z=0,te=$.length;Z<te;Z++){const ue=$[Z],Re=i.get(ue);let pe=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,Re.__webglTexture),He(pe,ue),Ee(O.__webglFramebuffer,C,ue,t.COLOR_ATTACHMENT0+Z,pe,0),u(ue)&&v(pe)}n.unbindTexture()}else{let Z=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Z,W.__webglTexture),He(Z,x),x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)Ee(O.__webglFramebuffer[te],C,x,t.COLOR_ATTACHMENT0,Z,te);else Ee(O.__webglFramebuffer,C,x,t.COLOR_ATTACHMENT0,Z,0);u(x)&&v(Z),n.unbindTexture()}C.depthBuffer&&st(C)}function bt(C){const x=C.textures;for(let O=0,W=x.length;O<W;O++){const $=x[O];if(u($)){const ae=M(C),ce=i.get($).__webglTexture;n.bindTexture(ae,ce),v(ae),n.unbindTexture()}}}const Nt=[],kt=[];function Ht(C){if(C.samples>0){if(Rt(C)===!1){const x=C.textures,O=C.width,W=C.height;let $=t.COLOR_BUFFER_BIT;const ae=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(C),Z=x.length>1;if(Z)for(let ue=0;ue<x.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const te=C.texture.mipmaps;te&&te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ue=0;ue<x.length;ue++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=t.STENCIL_BUFFER_BIT)),Z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const Re=i.get(x[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Re,0)}t.blitFramebuffer(0,0,O,W,0,0,O,W,$,t.NEAREST),l===!0&&(Nt.length=0,kt.length=0,Nt.push(t.COLOR_ATTACHMENT0+ue),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Nt.push(ae),kt.push(ae),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,kt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Nt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let ue=0;ue<x.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const Re=i.get(x[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,Re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const x=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function yt(C){return Math.min(r.maxSamples,C.samples)}function Rt(C){const x=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function I(C){const x=a.render.frame;f.get(C)!==x&&(f.set(C,x),C.update())}function hn(C,x){const O=C.colorSpace,W=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==nc&&O!==er&&(je.getTransfer(O)===tt?(W!==Zn||$!==wn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",O)),x}function et(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=q,this.getTextureUnits=ee,this.setTextureUnits=z,this.setTexture2D=D,this.setTexture2DArray=j,this.setTexture3D=ne,this.setTextureCube=re,this.rebindTextures=Qe,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function H2(t,e){function n(i,r=er){let s;const a=je.getTransfer(r);if(i===wn)return t.UNSIGNED_BYTE;if(i===Lh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Nh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ox)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===lx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===sx)return t.BYTE;if(i===ax)return t.SHORT;if(i===ao)return t.UNSIGNED_SHORT;if(i===Ph)return t.INT;if(i===vi)return t.UNSIGNED_INT;if(i===di)return t.FLOAT;if(i===Oi)return t.HALF_FLOAT;if(i===cx)return t.ALPHA;if(i===ux)return t.RGB;if(i===Zn)return t.RGBA;if(i===ki)return t.DEPTH_COMPONENT;if(i===Or)return t.DEPTH_STENCIL;if(i===dx)return t.RED;if(i===Dh)return t.RED_INTEGER;if(i===jr)return t.RG;if(i===Ih)return t.RG_INTEGER;if(i===Uh)return t.RGBA_INTEGER;if(i===Tl||i===wl||i===Al||i===bl)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Tl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Tl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yd||i===$d||i===qd||i===Kd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Yd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$d)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Kd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zd||i===Jd||i===Qd||i===ef||i===tf||i===ec||i===nf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Zd||i===Jd)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Qd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ef)return s.COMPRESSED_R11_EAC;if(i===tf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ec)return s.COMPRESSED_RG11_EAC;if(i===nf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===rf||i===sf||i===af||i===of||i===lf||i===cf||i===uf||i===df||i===ff||i===hf||i===pf||i===mf||i===gf||i===vf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===rf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===af)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===of)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===df)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ff)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xf||i===_f||i===yf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===xf)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_f)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sf||i===Mf||i===tc||i===Ef)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Sf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Mf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ef)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===oo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const G2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W2=`
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

}`;class X2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Sx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Vn({vertexShader:G2,fragmentShader:W2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new an(new Cc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j2 extends Zr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,d=null,p=null,g=null;const E=typeof XRWebGLBinding<"u",m=new X2,u={},v=n.getContextAttributes();let M=null,S=null;const A=[],w=[],R=new ke;let _=null;const b=new Tn;b.viewport=new vt;const P=new Tn;P.viewport=new vt;const L=[b,P],B=new tE;let q=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let J=A[U];return J===void 0&&(J=new mu,A[U]=J),J.getTargetRaySpace()},this.getControllerGrip=function(U){let J=A[U];return J===void 0&&(J=new mu,A[U]=J),J.getGripSpace()},this.getHand=function(U){let J=A[U];return J===void 0&&(J=new mu,A[U]=J),J.getHandSpace()};function z(U){const J=w.indexOf(U.inputSource);if(J===-1)return;const Y=A[J];Y!==void 0&&(Y.update(U.inputSource,U.frame,c||a),Y.dispatchEvent({type:U.type,data:U.inputSource}))}function K(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",V);for(let U=0;U<A.length;U++){const J=w[U];J!==null&&(w[U]=null,A[U].disconnect(J))}q=null,ee=null,m.reset();for(const U in u)delete u[U];e.setRenderTarget(M),p=null,d=null,h=null,r=null,S=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",K),r.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Y=null,he=null,Te=null;v.depth&&(Te=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Y=v.stencil?Or:ki,he=v.stencil?oo:vi);const Ee={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ee),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new gi(d.textureWidth,d.textureHeight,{format:Zn,type:wn,depthTexture:new Zs(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Y={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Y),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new gi(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(U){for(let J=0;J<U.removed.length;J++){const Y=U.removed[J],he=w.indexOf(Y);he>=0&&(w[he]=null,A[he].disconnect(Y))}for(let J=0;J<U.added.length;J++){const Y=U.added[J];let he=w.indexOf(Y);if(he===-1){for(let Ee=0;Ee<A.length;Ee++)if(Ee>=w.length){w.push(Y),he=Ee;break}else if(w[Ee]===null){w[Ee]=Y,he=Ee;break}if(he===-1)break}const Te=A[he];Te&&Te.connect(Y)}}const D=new k,j=new k;function ne(U,J,Y){D.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(Y.matrixWorld);const he=D.distanceTo(j),Te=J.projectionMatrix.elements,Ee=Y.projectionMatrix.elements,Ye=Te[14]/(Te[10]-1),Ue=Te[14]/(Te[10]+1),st=(Te[9]+1)/Te[5],Qe=(Te[9]-1)/Te[5],Ke=(Te[8]-1)/Te[0],bt=(Ee[8]+1)/Ee[0],Nt=Ye*Ke,kt=Ye*bt,Ht=he/(-Ke+bt),yt=Ht*-Ke;if(J.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(yt),U.translateZ(Ht),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),Te[10]===-1)U.projectionMatrix.copy(J.projectionMatrix),U.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Rt=Ye+Ht,I=Ue+Ht,hn=Nt-yt,et=kt+(he-yt),C=st*Ue/I*Rt,x=Qe*Ue/I*Rt;U.projectionMatrix.makePerspective(hn,et,C,x,Rt,I),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function re(U,J){J===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(J.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;let J=U.near,Y=U.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(Y=m.depthFar)),B.near=P.near=b.near=J,B.far=P.far=b.far=Y,(q!==B.near||ee!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),q=B.near,ee=B.far),B.layers.mask=U.layers.mask|6,b.layers.mask=B.layers.mask&-5,P.layers.mask=B.layers.mask&-3;const he=U.parent,Te=B.cameras;re(B,he);for(let Ee=0;Ee<Te.length;Ee++)re(Te[Ee],he);Te.length===2?ne(B,b,P):B.projectionMatrix.copy(b.projectionMatrix),oe(U,B,he)};function oe(U,J,Y){Y===null?U.matrix.copy(J.matrixWorld):(U.matrix.copy(Y.matrixWorld),U.matrix.invert(),U.matrix.multiply(J.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(J.projectionMatrix),U.projectionMatrixInverse.copy(J.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=co*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(U){l=U,d!==null&&(d.fixedFoveation=U),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=U)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(U){return u[U]};let Be=null;function qe(U,J){if(f=J.getViewerPose(c||a),g=J,f!==null){const Y=f.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let he=!1;Y.length!==B.cameras.length&&(B.cameras.length=0,he=!0);for(let Ue=0;Ue<Y.length;Ue++){const st=Y[Ue];let Qe=null;if(p!==null)Qe=p.getViewport(st);else{const bt=h.getViewSubImage(d,st);Qe=bt.viewport,Ue===0&&(e.setRenderTargetTextures(S,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(S))}let Ke=L[Ue];Ke===void 0&&(Ke=new Tn,Ke.layers.enable(Ue),Ke.viewport=new vt,L[Ue]=Ke),Ke.matrix.fromArray(st.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(st.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ue===0&&(B.matrix.copy(Ke.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),he===!0&&B.cameras.push(Ke)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){h=i.getBinding();const Ue=h.getDepthInformation(Y[0]);Ue&&Ue.isValid&&Ue.texture&&m.init(Ue,r.renderState)}if(Te&&Te.includes("camera-access")&&E){e.state.unbindTexture(),h=i.getBinding();for(let Ue=0;Ue<Y.length;Ue++){const st=Y[Ue].camera;if(st){let Qe=u[st];Qe||(Qe=new Sx,u[st]=Qe);const Ke=h.getCameraImage(st);Qe.sourceTexture=Ke}}}}for(let Y=0;Y<A.length;Y++){const he=w[Y],Te=A[Y];he!==null&&Te!==void 0&&Te.update(he,J,c||a)}Be&&Be(U,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const He=new wx;He.setAnimationLoop(qe),this.setAnimationLoop=function(U){Be=U},this.dispose=function(){}}}const Y2=new pt,Nx=new Ie;Nx.set(-1,0,0,0,1,0,0,0,1);function $2(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Mx(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,v,M,S){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(m,u):u.isMeshLambertMaterial?(s(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,S)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),E(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,v,M):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===ln&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===ln&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u),M=v.envMap,S=v.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(Y2.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Nx),m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,M){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=M*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===ln&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function E(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function q2(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,A){const w=A.program;i.uniformBlockBinding(S,w)}function c(S,A){let w=r[S.id];w===void 0&&(m(S),w=f(S),r[S.id]=w,S.addEventListener("dispose",v));const R=A.program;i.updateUBOMapping(S,R);const _=e.render.frame;s[S.id]!==_&&(d(S),s[S.id]=_)}function f(S){const A=h();S.__bindingPointIndex=A;const w=t.createBuffer(),R=S.__size,_=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,R,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,A,w),w}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const A=r[S.id],w=S.uniforms,R=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,A);for(let _=0,b=w.length;_<b;_++){const P=w[_];if(Array.isArray(P))for(let L=0,B=P.length;L<B;L++)p(P[L],_,L,R);else p(P,_,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,A,w,R){if(E(S,A,w,R)===!0){const _=S.__offset,b=S.value;if(Array.isArray(b)){let P=0;for(let L=0;L<b.length;L++){const B=b[L],q=u(B);g(B,S.__data,P),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,S.__data)}}function g(S,A,w){typeof S=="number"||typeof S=="boolean"?A[0]=S:S.isMatrix3?(A[0]=S.elements[0],A[1]=S.elements[1],A[2]=S.elements[2],A[3]=0,A[4]=S.elements[3],A[5]=S.elements[4],A[6]=S.elements[5],A[7]=0,A[8]=S.elements[6],A[9]=S.elements[7],A[10]=S.elements[8],A[11]=0):ArrayBuffer.isView(S)?A.set(new S.constructor(S.buffer,S.byteOffset,A.length)):S.toArray(A,w)}function E(S,A,w,R){const _=S.value,b=A+"_"+w;if(R[b]===void 0)return typeof _=="number"||typeof _=="boolean"?R[b]=_:ArrayBuffer.isView(_)?R[b]=_.slice():R[b]=_.clone(),!0;{const P=R[b];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return R[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function m(S){const A=S.uniforms;let w=0;const R=16;for(let b=0,P=A.length;b<P;b++){const L=Array.isArray(A[b])?A[b]:[A[b]];for(let B=0,q=L.length;B<q;B++){const ee=L[B],z=Array.isArray(ee.value)?ee.value:[ee.value];for(let K=0,V=z.length;K<V;K++){const D=z[K],j=u(D),ne=w%R,re=ne%j.boundary,oe=ne+re;w+=re,oe!==0&&R-oe<j.storage&&(w+=R-oe),ee.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=w,w+=j.storage}}}const _=w%R;return _>0&&(w+=R-_),S.__size=w,S.__cache={},this}function u(S){const A={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(A.boundary=4,A.storage=4):S.isVector2?(A.boundary=8,A.storage=8):S.isVector3||S.isColor?(A.boundary=16,A.storage=12):S.isVector4?(A.boundary=16,A.storage=16):S.isMatrix3?(A.boundary=48,A.storage=48):S.isMatrix4?(A.boundary=64,A.storage=64):S.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(A.boundary=16,A.storage=S.byteLength):De("WebGLRenderer: Unsupported uniform value type.",S),A}function v(S){const A=S.target;A.removeEventListener("dispose",v);const w=a.indexOf(A.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function M(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:M}}const K2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ai=null;function Z2(){return ai===null&&(ai=new FM(K2,16,16,jr,Oi),ai.name="DFG_LUT",ai.minFilter=Qt,ai.magFilter=Qt,ai.wrapS=Ri,ai.wrapT=Ri,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}class J2{constructor(e={}){const{canvas:n=Z1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=wn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const E=p,m=new Set([Uh,Ih,Dh]),u=new Set([wn,vi,ao,oo,Lh,Nh]),v=new Uint32Array(4),M=new Int32Array(4),S=new k;let A=null,w=null;const R=[],_=[];let b=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,B=null,q=null,ee=null,z=null;this._outputColorSpace=En;let K=0,V=0,D=null,j=-1,ne=null;const re=new vt,oe=new vt;let Be=null;const qe=new Ge(0);let He=0,U=n.width,J=n.height,Y=1,he=null,Te=null;const Ee=new vt(0,0,U,J),Ye=new vt(0,0,U,J);let Ue=!1;const st=new Vh;let Qe=!1,Ke=!1;const bt=new pt,Nt=new k,kt=new vt,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Rt(){return D===null?Y:1}let I=i;function hn(T,F){return n.getContext(T,F)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Rh}`),n.addEventListener("webglcontextlost",St,!1),n.addEventListener("webglcontextrestored",lt,!1),n.addEventListener("webglcontextcreationerror",ti,!1),I===null){const F="webgl2";if(I=hn(F,T),I===null)throw hn(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw $e("WebGLRenderer: "+T.message),T}let et,C,x,O,W,$,ae,ce,Z,te,ue,Re,pe,de,Le,Ne,Fe,N,le,Q,fe,xe,ie;function be(){et=new Zw(I),et.init(),fe=new H2(I,et),C=new Gw(I,et,e,fe),x=new z2(I,et),C.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),q=I.createFramebuffer(),ee=I.createFramebuffer(),z=I.createFramebuffer(),O=new eA(I),W=new A2,$=new V2(I,et,x,W,C,fe,O),ae=new Kw(P),ce=new rE(I),xe=new Vw(I,ce),Z=new Jw(I,ce,O,xe),te=new nA(I,Z,ce,xe,O),N=new tA(I,C,$),Le=new Ww(W),ue=new w2(P,ae,et,C,xe,Le),Re=new $2(P,W),pe=new R2,de=new I2(et),Fe=new zw(P,ae,x,te,g,l),Ne=new B2(P,te,C),ie=new q2(I,O,C,x),le=new Hw(I,et,O),Q=new Qw(I,et,O),O.programs=ue.programs,P.capabilities=C,P.extensions=et,P.properties=W,P.renderLists=pe,P.shadowMap=Ne,P.state=x,P.info=O}be(),E!==wn&&(b=new rA(E,n.width,n.height,o,r,s));const we=new j2(P,I);this.xr=we,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=et.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=et.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(U,J,!1))},this.getSize=function(T){return T.set(U,J)},this.setSize=function(T,F,X=!0){if(we.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,J=F,n.width=Math.floor(T*Y),n.height=Math.floor(F*Y),X===!0&&(n.style.width=T+"px",n.style.height=F+"px"),b!==null&&b.setSize(n.width,n.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(U*Y,J*Y).floor()},this.setDrawingBufferSize=function(T,F,X){U=T,J=F,Y=X,n.width=Math.floor(T*X),n.height=Math.floor(F*X),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(E===wn){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(re)},this.getViewport=function(T){return T.copy(Ee)},this.setViewport=function(T,F,X,H){T.isVector4?Ee.set(T.x,T.y,T.z,T.w):Ee.set(T,F,X,H),x.viewport(re.copy(Ee).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(Ye)},this.setScissor=function(T,F,X,H){T.isVector4?Ye.set(T.x,T.y,T.z,T.w):Ye.set(T,F,X,H),x.scissor(oe.copy(Ye).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(T){x.setScissorTest(Ue=T)},this.setOpaqueSort=function(T){he=T},this.setTransparentSort=function(T){Te=T},this.getClearColor=function(T){return T.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,X=!0){let H=0;if(T){let G=!1;if(D!==null){const ve=D.texture.format;G=m.has(ve)}if(G){const ve=D.texture.type,ye=u.has(ve),ge=Fe.getClearColor(),Ae=Fe.getClearAlpha(),Ce=ge.r,Oe=ge.g,Ve=ge.b;ye?(v[0]=Ce,v[1]=Oe,v[2]=Ve,v[3]=Ae,I.clearBufferuiv(I.COLOR,0,v)):(M[0]=Ce,M[1]=Oe,M[2]=Ve,M[3]=Ae,I.clearBufferiv(I.COLOR,0,M))}else H|=I.COLOR_BUFFER_BIT}F&&(H|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),B=T},this.dispose=function(){n.removeEventListener("webglcontextlost",St,!1),n.removeEventListener("webglcontextrestored",lt,!1),n.removeEventListener("webglcontextcreationerror",ti,!1),Fe.dispose(),pe.dispose(),de.dispose(),W.dispose(),ae.dispose(),te.dispose(),xe.dispose(),ie.dispose(),ue.dispose(),we.dispose(),we.removeEventListener("sessionstart",Kh),we.removeEventListener("sessionend",Zh),Mr.stop()};function St(T){T.preventDefault(),sc("WebGLRenderer: Context Lost."),L=!0}function lt(){sc("WebGLRenderer: Context Restored."),L=!1;const T=O.autoReset,F=Ne.enabled,X=Ne.autoUpdate,H=Ne.needsUpdate,G=Ne.type;be(),O.autoReset=T,Ne.enabled=F,Ne.autoUpdate=X,Ne.needsUpdate=H,Ne.type=G}function ti(T){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ni(T){const F=T.target;F.removeEventListener("dispose",ni),Dx(F)}function Dx(T){Ix(T),W.remove(T)}function Ix(T){const F=W.get(T).programs;F!==void 0&&(F.forEach(function(X){ue.releaseProgram(X)}),T.isShaderMaterial&&ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,X,H,G,ve){F===null&&(F=Ht);const ye=G.isMesh&&G.matrixWorld.determinantAffine()<0,ge=Ox(T,F,X,H,G);x.setMaterial(H,ye);let Ae=X.index,Ce=1;if(H.wireframe===!0){if(Ae=Z.getWireframeAttribute(X),Ae===void 0)return;Ce=2}const Oe=X.drawRange,Ve=X.attributes.position;let Pe=Oe.start*Ce,rt=(Oe.start+Oe.count)*Ce;ve!==null&&(Pe=Math.max(Pe,ve.start*Ce),rt=Math.min(rt,(ve.start+ve.count)*Ce)),Ae!==null?(Pe=Math.max(Pe,0),rt=Math.min(rt,Ae.count)):Ve!=null&&(Pe=Math.max(Pe,0),rt=Math.min(rt,Ve.count));const Tt=rt-Pe;if(Tt<0||Tt===1/0)return;xe.setup(G,H,ge,X,Ae);let Mt,at=le;if(Ae!==null&&(Mt=ce.get(Ae),at=Q,at.setIndex(Mt)),G.isMesh)H.wireframe===!0?(x.setLineWidth(H.wireframeLinewidth*Rt()),at.setMode(I.LINES)):at.setMode(I.TRIANGLES);else if(G.isLine){let Yt=H.linewidth;Yt===void 0&&(Yt=1),x.setLineWidth(Yt*Rt()),G.isLineSegments?at.setMode(I.LINES):G.isLineLoop?at.setMode(I.LINE_LOOP):at.setMode(I.LINE_STRIP)}else G.isPoints?at.setMode(I.POINTS):G.isSprite&&at.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(et.get("WEBGL_multi_draw"))at.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Yt=G._multiDrawStarts,_e=G._multiDrawCounts,_n=G._multiDrawCount,Ze=Ae?ce.get(Ae).bytesPerElement:1,Nn=W.get(H).currentProgram.getUniforms();for(let ii=0;ii<_n;ii++)Nn.setValue(I,"_gl_DrawID",ii),at.render(Yt[ii]/Ze,_e[ii])}else if(G.isInstancedMesh)at.renderInstances(Pe,Tt,G.count);else if(X.isInstancedBufferGeometry){const Yt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,_e=Math.min(X.instanceCount,Yt);at.renderInstances(Pe,Tt,_e)}else at.render(Pe,Tt)};function qh(T,F,X){T.transparent===!0&&T.side===qn&&T.forceSinglePass===!1?(T.side=ln,T.needsUpdate=!0,yo(T,F,X),T.side=gr,T.needsUpdate=!0,yo(T,F,X),T.side=qn):yo(T,F,X)}this.compile=function(T,F,X=null){X===null&&(X=T),w=de.get(X),w.init(F),_.push(w),X.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),T!==X&&T.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights();const H=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ve=G.material;if(ve)if(Array.isArray(ve))for(let ye=0;ye<ve.length;ye++){const ge=ve[ye];qh(ge,X,G),H.add(ge)}else qh(ve,X,G),H.add(ve)}),w=_.pop(),H},this.compileAsync=function(T,F,X=null){const H=this.compile(T,F,X);return new Promise(G=>{function ve(){if(H.forEach(function(ye){W.get(ye).currentProgram.isReady()&&H.delete(ye)}),H.size===0){G(T);return}setTimeout(ve,10)}et.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Nc=null;function Ux(T){Nc&&Nc(T)}function Kh(){Mr.stop()}function Zh(){Mr.start()}const Mr=new wx;Mr.setAnimationLoop(Ux),typeof self<"u"&&Mr.setContext(self),this.setAnimationLoop=function(T){Nc=T,we.setAnimationLoop(T),T===null?Mr.stop():Mr.start()},we.addEventListener("sessionstart",Kh),we.addEventListener("sessionend",Zh),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;B!==null&&B.renderStart(T,F);const X=we.enabled===!0&&we.isPresenting===!0,H=b!==null&&(D===null||X)&&b.begin(P,D);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(F),F=we.getCamera()),T.isScene===!0&&T.onBeforeRender(P,T,F,D),w=de.get(T,_.length),w.init(F),w.state.textureUnits=$.getTextureUnits(),_.push(w),bt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),st.setFromProjectionMatrix(bt,fi,F.reversedDepth),Ke=this.localClippingEnabled,Qe=Le.init(this.clippingPlanes,Ke),A=pe.get(T,R.length),A.init(),R.push(A),we.enabled===!0&&we.isPresenting===!0){const ye=P.xr.getDepthSensingMesh();ye!==null&&Dc(ye,F,-1/0,P.sortObjects)}Dc(T,F,0,P.sortObjects),A.finish(),P.sortObjects===!0&&A.sort(he,Te,F.reversedDepth),yt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,yt&&Fe.addToRenderList(A,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&Le.beginShadows();const G=w.state.shadowsArray;if(Ne.render(G,T,F),Qe===!0&&Le.endShadows(),(H&&b.hasRenderPass())===!1){const ye=A.opaque,ge=A.transmissive;if(w.setupLights(),F.isArrayCamera){const Ae=F.cameras;if(ge.length>0)for(let Ce=0,Oe=Ae.length;Ce<Oe;Ce++){const Ve=Ae[Ce];Qh(ye,ge,T,Ve)}yt&&Fe.render(T);for(let Ce=0,Oe=Ae.length;Ce<Oe;Ce++){const Ve=Ae[Ce];Jh(A,T,Ve,Ve.viewport)}}else ge.length>0&&Qh(ye,ge,T,F),yt&&Fe.render(T),Jh(A,T,F)}D!==null&&V===0&&($.updateMultisampleRenderTarget(D),$.updateRenderTargetMipmap(D)),H&&b.end(P),T.isScene===!0&&T.onAfterRender(P,T,F),xe.resetDefaultState(),j=-1,ne=null,_.pop(),_.length>0?(w=_[_.length-1],$.setTextureUnits(w.state.textureUnits),Qe===!0&&Le.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?A=R[R.length-1]:A=null,B!==null&&B.renderEnd()};function Dc(T,F,X,H){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||st.intersectsSprite(T)){H&&kt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(bt);const ye=te.update(T),ge=T.material;ge.visible&&A.push(T,ye,ge,X,kt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||st.intersectsObject(T))){const ye=te.update(T),ge=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),kt.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),kt.copy(ye.boundingSphere.center)),kt.applyMatrix4(T.matrixWorld).applyMatrix4(bt)),Array.isArray(ge)){const Ae=ye.groups;for(let Ce=0,Oe=Ae.length;Ce<Oe;Ce++){const Ve=Ae[Ce],Pe=ge[Ve.materialIndex];Pe&&Pe.visible&&A.push(T,ye,Pe,X,kt.z,Ve)}}else ge.visible&&A.push(T,ye,ge,X,kt.z,null)}}const ve=T.children;for(let ye=0,ge=ve.length;ye<ge;ye++)Dc(ve[ye],F,X,H)}function Jh(T,F,X,H){const{opaque:G,transmissive:ve,transparent:ye}=T;w.setupLightsView(X),Qe===!0&&Le.setGlobalState(P.clippingPlanes,X),H&&x.viewport(re.copy(H)),G.length>0&&_o(G,F,X),ve.length>0&&_o(ve,F,X),ye.length>0&&_o(ye,F,X),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Qh(T,F,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){const Pe=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new gi(1,1,{generateMipmaps:!0,type:Pe?Oi:wn,minFilter:Fr,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const ve=w.state.transmissionRenderTarget[H.id],ye=H.viewport||re;ve.setSize(ye.z*P.transmissionResolutionScale,ye.w*P.transmissionResolutionScale);const ge=P.getRenderTarget(),Ae=P.getActiveCubeFace(),Ce=P.getActiveMipmapLevel();P.setRenderTarget(ve),P.getClearColor(qe),He=P.getClearAlpha(),He<1&&P.setClearColor(16777215,.5),P.clear(),yt&&Fe.render(X);const Oe=P.toneMapping;P.toneMapping=mi;const Ve=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),Qe===!0&&Le.setGlobalState(P.clippingPlanes,H),_o(T,X,H),$.updateMultisampleRenderTarget(ve),$.updateRenderTargetMipmap(ve),et.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let rt=0,Tt=F.length;rt<Tt;rt++){const Mt=F[rt],{object:at,geometry:Yt,material:_e,group:_n}=Mt;if(_e.side===qn&&at.layers.test(H.layers)){const Ze=_e.side;_e.side=ln,_e.needsUpdate=!0,ep(at,X,H,Yt,_e,_n),_e.side=Ze,_e.needsUpdate=!0,Pe=!0}}Pe===!0&&($.updateMultisampleRenderTarget(ve),$.updateRenderTargetMipmap(ve))}P.setRenderTarget(ge,Ae,Ce),P.setClearColor(qe,He),Ve!==void 0&&(H.viewport=Ve),P.toneMapping=Oe}function _o(T,F,X){const H=F.isScene===!0?F.overrideMaterial:null;for(let G=0,ve=T.length;G<ve;G++){const ye=T[G],{object:ge,geometry:Ae,group:Ce}=ye;let Oe=ye.material;Oe.allowOverride===!0&&H!==null&&(Oe=H),ge.layers.test(X.layers)&&ep(ge,F,X,Ae,Oe,Ce)}}function ep(T,F,X,H,G,ve){T.onBeforeRender(P,F,X,H,G,ve),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(P,F,X,H,T,ve),G.transparent===!0&&G.side===qn&&G.forceSinglePass===!1?(G.side=ln,G.needsUpdate=!0,P.renderBufferDirect(X,F,H,G,T,ve),G.side=gr,G.needsUpdate=!0,P.renderBufferDirect(X,F,H,G,T,ve),G.side=qn):P.renderBufferDirect(X,F,H,G,T,ve),T.onAfterRender(P,F,X,H,G,ve)}function yo(T,F,X){F.isScene!==!0&&(F=Ht);const H=W.get(T),G=w.state.lights,ve=w.state.shadowsArray,ye=G.state.version,ge=ue.getParameters(T,G.state,ve,F,X,w.state.lightProbeGridArray),Ae=ue.getProgramCacheKey(ge);let Ce=H.programs;H.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;const Oe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;H.envMap=ae.get(T.envMap||H.environment,Oe),H.envMapRotation=H.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Ce===void 0&&(T.addEventListener("dispose",ni),Ce=new Map,H.programs=Ce);let Ve=Ce.get(Ae);if(Ve!==void 0){if(H.currentProgram===Ve&&H.lightsStateVersion===ye)return np(T,ge),Ve}else ge.uniforms=ue.getUniforms(T),B!==null&&T.isNodeMaterial&&B.build(T,X,ge),T.onBeforeCompile(ge,P),Ve=ue.acquireProgram(ge,Ae),Ce.set(Ae,Ve),H.uniforms=ge.uniforms;const Pe=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=Le.uniform),np(T,ge),H.needsLights=Bx(T),H.lightsStateVersion=ye,H.needsLights&&(Pe.ambientLightColor.value=G.state.ambient,Pe.lightProbe.value=G.state.probe,Pe.directionalLights.value=G.state.directional,Pe.directionalLightShadows.value=G.state.directionalShadow,Pe.spotLights.value=G.state.spot,Pe.spotLightShadows.value=G.state.spotShadow,Pe.rectAreaLights.value=G.state.rectArea,Pe.ltc_1.value=G.state.rectAreaLTC1,Pe.ltc_2.value=G.state.rectAreaLTC2,Pe.pointLights.value=G.state.point,Pe.pointLightShadows.value=G.state.pointShadow,Pe.hemisphereLights.value=G.state.hemi,Pe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Pe.spotLightMatrix.value=G.state.spotLightMatrix,Pe.spotLightMap.value=G.state.spotLightMap,Pe.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=w.state.lightProbeGridArray.length>0,H.currentProgram=Ve,H.uniformsList=null,Ve}function tp(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=Rl.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function np(T,F){const X=W.get(T);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Fx(T,F){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;S.setFromMatrixPosition(F.matrixWorld);for(let X=0,H=T.length;X<H;X++){const G=T[X];if(G.texture!==null&&G.boundingBox.containsPoint(S))return G}return null}function Ox(T,F,X,H,G){F.isScene!==!0&&(F=Ht),$.resetTextureUnits();const ve=F.fog,ye=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,ge=D===null?P.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:je.workingColorSpace,Ae=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ce=ae.get(H.envMap||ye,Ae),Oe=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ve=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Pe=!!X.morphAttributes.position,rt=!!X.morphAttributes.normal,Tt=!!X.morphAttributes.color;let Mt=mi;H.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Mt=P.toneMapping);const at=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Yt=at!==void 0?at.length:0,_e=W.get(H),_n=w.state.lights;if(Qe===!0&&(Ke===!0||T!==ne)){const ct=T===ne&&H.id===j;Le.setState(H,T,ct)}let Ze=!1;H.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==_n.state.version||_e.outputColorSpace!==ge||G.isBatchedMesh&&_e.batching===!1||!G.isBatchedMesh&&_e.batching===!0||G.isBatchedMesh&&_e.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&_e.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&_e.instancing===!1||!G.isInstancedMesh&&_e.instancing===!0||G.isSkinnedMesh&&_e.skinning===!1||!G.isSkinnedMesh&&_e.skinning===!0||G.isInstancedMesh&&_e.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&_e.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&_e.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&_e.instancingMorph===!1&&G.morphTexture!==null||_e.envMap!==Ce||H.fog===!0&&_e.fog!==ve||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Le.numPlanes||_e.numIntersection!==Le.numIntersection)||_e.vertexAlphas!==Oe||_e.vertexTangents!==Ve||_e.morphTargets!==Pe||_e.morphNormals!==rt||_e.morphColors!==Tt||_e.toneMapping!==Mt||_e.morphTargetsCount!==Yt||!!_e.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Ze=!0):(Ze=!0,_e.__version=H.version);let Nn=_e.currentProgram;Ze===!0&&(Nn=yo(H,F,G),B&&H.isNodeMaterial&&B.onUpdateProgram(H,Nn,_e));let ii=!1,zi=!1,Qr=!1;const ot=Nn.getUniforms(),wt=_e.uniforms;if(x.useProgram(Nn.program)&&(ii=!0,zi=!0,Qr=!0),H.id!==j&&(j=H.id,zi=!0),_e.needsLights){const ct=Fx(w.state.lightProbeGridArray,G);_e.lightProbeGrid!==ct&&(_e.lightProbeGrid=ct,zi=!0)}if(ii||ne!==T){x.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ot.setValue(I,"projectionMatrix",T.projectionMatrix),ot.setValue(I,"viewMatrix",T.matrixWorldInverse);const Hi=ot.map.cameraPosition;Hi!==void 0&&Hi.setValue(I,Nt.setFromMatrixPosition(T.matrixWorld)),C.logarithmicDepthBuffer&&ot.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ot.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),ne!==T&&(ne=T,zi=!0,Qr=!0)}if(_e.needsLights&&(_n.state.directionalShadowMap.length>0&&ot.setValue(I,"directionalShadowMap",_n.state.directionalShadowMap,$),_n.state.spotShadowMap.length>0&&ot.setValue(I,"spotShadowMap",_n.state.spotShadowMap,$),_n.state.pointShadowMap.length>0&&ot.setValue(I,"pointShadowMap",_n.state.pointShadowMap,$)),G.isSkinnedMesh){ot.setOptional(I,G,"bindMatrix"),ot.setOptional(I,G,"bindMatrixInverse");const ct=G.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),ot.setValue(I,"boneTexture",ct.boneTexture,$))}G.isBatchedMesh&&(ot.setOptional(I,G,"batchingTexture"),ot.setValue(I,"batchingTexture",G._matricesTexture,$),ot.setOptional(I,G,"batchingIdTexture"),ot.setValue(I,"batchingIdTexture",G._indirectTexture,$),ot.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&ot.setValue(I,"batchingColorTexture",G._colorsTexture,$));const Vi=X.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&N.update(G,X,Nn),(zi||_e.receiveShadow!==G.receiveShadow)&&(_e.receiveShadow=G.receiveShadow,ot.setValue(I,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(wt.envMapIntensity.value=F.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=Z2()),zi){if(ot.setValue(I,"toneMappingExposure",P.toneMappingExposure),_e.needsLights&&kx(wt,Qr),ve&&H.fog===!0&&Re.refreshFogUniforms(wt,ve),Re.refreshMaterialUniforms(wt,H,Y,J,w.state.transmissionRenderTarget[T.id]),_e.needsLights&&_e.lightProbeGrid){const ct=_e.lightProbeGrid;wt.probesSH.value=ct.texture,wt.probesMin.value.copy(ct.boundingBox.min),wt.probesMax.value.copy(ct.boundingBox.max),wt.probesResolution.value.copy(ct.resolution)}Rl.upload(I,tp(_e),wt,$)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Rl.upload(I,tp(_e),wt,$),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ot.setValue(I,"center",G.center),ot.setValue(I,"modelViewMatrix",G.modelViewMatrix),ot.setValue(I,"normalMatrix",G.normalMatrix),ot.setValue(I,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const ct=H.uniformsGroups;for(let Hi=0,es=ct.length;Hi<es;Hi++){const ip=ct[Hi];ie.update(ip,Nn),ie.bind(ip,Nn)}}return Nn}function kx(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Bx(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,F,X){const H=W.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),W.get(T.texture).__webglTexture=F,W.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){const X=W.get(T);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,X=0){D=T,K=F,V=X;let H=null,G=!1,ve=!1;if(T){const ge=W.get(T);if(ge.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(I.FRAMEBUFFER,ge.__webglFramebuffer),re.copy(T.viewport),oe.copy(T.scissor),Be=T.scissorTest,x.viewport(re),x.scissor(oe),x.setScissorTest(Be),j=-1;return}else if(ge.__webglFramebuffer===void 0)$.setupRenderTarget(T);else if(ge.__hasExternalTextures)$.rebindTextures(T,W.get(T.texture).__webglTexture,W.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Oe=T.depthTexture;if(ge.__boundDepthTexture!==Oe){if(Oe!==null&&W.has(Oe)&&(T.width!==Oe.image.width||T.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(T)}}const Ae=T.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ve=!0);const Ce=W.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ce[F])?H=Ce[F][X]:H=Ce[F],G=!0):T.samples>0&&$.useMultisampledRTT(T)===!1?H=W.get(T).__webglMultisampledFramebuffer:Array.isArray(Ce)?H=Ce[X]:H=Ce,re.copy(T.viewport),oe.copy(T.scissor),Be=T.scissorTest}else re.copy(Ee).multiplyScalar(Y).floor(),oe.copy(Ye).multiplyScalar(Y).floor(),Be=Ue;if(X!==0&&(H=q),x.bindFramebuffer(I.FRAMEBUFFER,H)&&x.drawBuffers(T,H),x.viewport(re),x.scissor(oe),x.setScissorTest(Be),G){const ge=W.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,ge.__webglTexture,X)}else if(ve){const ge=F;for(let Ae=0;Ae<T.textures.length;Ae++){const Ce=W.get(T.textures[Ae]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ae,Ce.__webglTexture,X,ge)}}else if(T!==null&&X!==0){const ge=W.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ge.__webglTexture,X)}j=-1},this.readRenderTargetPixels=function(T,F,X,H,G,ve,ye,ge=0){if(!(T&&T.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=W.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){x.bindFramebuffer(I.FRAMEBUFFER,Ae);try{const Ce=T.textures[ge],Oe=Ce.format,Ve=Ce.type;if(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),!C.textureFormatReadable(Oe)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(Ve)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-H&&X>=0&&X<=T.height-G&&I.readPixels(F,X,H,G,fe.convert(Oe),fe.convert(Ve),ve)}finally{const Ce=D!==null?W.get(D).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(T,F,X,H,G,ve,ye,ge=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=W.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae)if(F>=0&&F<=T.width-H&&X>=0&&X<=T.height-G){x.bindFramebuffer(I.FRAMEBUFFER,Ae);const Ce=T.textures[ge],Oe=Ce.format,Ve=Ce.type;if(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),!C.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Pe),I.bufferData(I.PIXEL_PACK_BUFFER,ve.byteLength,I.STREAM_READ),I.readPixels(F,X,H,G,fe.convert(Oe),fe.convert(Ve),0);const rt=D!==null?W.get(D).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,rt);const Tt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await J1(I,Tt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Pe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ve),I.deleteBuffer(Pe),I.deleteSync(Tt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,X=0){const H=Math.pow(2,-X),G=Math.floor(T.image.width*H),ve=Math.floor(T.image.height*H),ye=F!==null?F.x:0,ge=F!==null?F.y:0;$.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,ye,ge,G,ve),x.unbindTexture()},this.copyTextureToTexture=function(T,F,X=null,H=null,G=0,ve=0){let ye,ge,Ae,Ce,Oe,Ve,Pe,rt,Tt;const Mt=T.isCompressedTexture?T.mipmaps[ve]:T.image;if(X!==null)ye=X.max.x-X.min.x,ge=X.max.y-X.min.y,Ae=X.isBox3?X.max.z-X.min.z:1,Ce=X.min.x,Oe=X.min.y,Ve=X.isBox3?X.min.z:0;else{const wt=Math.pow(2,-G);ye=Math.floor(Mt.width*wt),ge=Math.floor(Mt.height*wt),T.isDataArrayTexture?Ae=Mt.depth:T.isData3DTexture?Ae=Math.floor(Mt.depth*wt):Ae=1,Ce=0,Oe=0,Ve=0}H!==null?(Pe=H.x,rt=H.y,Tt=H.z):(Pe=0,rt=0,Tt=0);const at=fe.convert(F.format),Yt=fe.convert(F.type);let _e;F.isData3DTexture?($.setTexture3D(F,0),_e=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?($.setTexture2DArray(F,0),_e=I.TEXTURE_2D_ARRAY):($.setTexture2D(F,0),_e=I.TEXTURE_2D),x.activeTexture(I.TEXTURE0),x.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const _n=x.getParameter(I.UNPACK_ROW_LENGTH),Ze=x.getParameter(I.UNPACK_IMAGE_HEIGHT),Nn=x.getParameter(I.UNPACK_SKIP_PIXELS),ii=x.getParameter(I.UNPACK_SKIP_ROWS),zi=x.getParameter(I.UNPACK_SKIP_IMAGES);x.pixelStorei(I.UNPACK_ROW_LENGTH,Mt.width),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Mt.height),x.pixelStorei(I.UNPACK_SKIP_PIXELS,Ce),x.pixelStorei(I.UNPACK_SKIP_ROWS,Oe),x.pixelStorei(I.UNPACK_SKIP_IMAGES,Ve);const Qr=T.isDataArrayTexture||T.isData3DTexture,ot=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const wt=W.get(T),Vi=W.get(F),ct=W.get(wt.__renderTarget),Hi=W.get(Vi.__renderTarget);x.bindFramebuffer(I.READ_FRAMEBUFFER,ct.__webglFramebuffer),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let es=0;es<Ae;es++)Qr&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,W.get(T).__webglTexture,G,Ve+es),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,W.get(F).__webglTexture,ve,Tt+es)),I.blitFramebuffer(Ce,Oe,ye,ge,Pe,rt,ye,ge,I.DEPTH_BUFFER_BIT,I.NEAREST);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||W.has(T)){const wt=W.get(T),Vi=W.get(F);x.bindFramebuffer(I.READ_FRAMEBUFFER,ee),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,z);for(let ct=0;ct<Ae;ct++)Qr?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,wt.__webglTexture,G,Ve+ct):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,wt.__webglTexture,G),ot?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vi.__webglTexture,ve,Tt+ct):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Vi.__webglTexture,ve),G!==0?I.blitFramebuffer(Ce,Oe,ye,ge,Pe,rt,ye,ge,I.COLOR_BUFFER_BIT,I.NEAREST):ot?I.copyTexSubImage3D(_e,ve,Pe,rt,Tt+ct,Ce,Oe,ye,ge):I.copyTexSubImage2D(_e,ve,Pe,rt,Ce,Oe,ye,ge);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ot?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(_e,ve,Pe,rt,Tt,ye,ge,Ae,at,Yt,Mt.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(_e,ve,Pe,rt,Tt,ye,ge,Ae,at,Mt.data):I.texSubImage3D(_e,ve,Pe,rt,Tt,ye,ge,Ae,at,Yt,Mt):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ve,Pe,rt,ye,ge,at,Yt,Mt.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ve,Pe,rt,Mt.width,Mt.height,at,Mt.data):I.texSubImage2D(I.TEXTURE_2D,ve,Pe,rt,ye,ge,at,Yt,Mt);x.pixelStorei(I.UNPACK_ROW_LENGTH,_n),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ze),x.pixelStorei(I.UNPACK_SKIP_PIXELS,Nn),x.pixelStorei(I.UNPACK_SKIP_ROWS,ii),x.pixelStorei(I.UNPACK_SKIP_IMAGES,zi),ve===0&&F.generateMipmaps&&I.generateMipmap(_e),x.unbindTexture()},this.initRenderTarget=function(T){W.get(T).__webglFramebuffer===void 0&&$.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?$.setTextureCube(T,0):T.isData3DTexture?$.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?$.setTexture2DArray(T,0):$.setTexture2D(T,0),x.unbindTexture()},this.resetState=function(){K=0,V=0,D=null,x.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),n.unpackColorSpace=je._getUnpackColorSpace()}}function Sr({title:t,children:e}){return y.jsxs("div",{className:"page",children:[y.jsxs("header",{children:[y.jsx("h1",{children:"🎉 Happy 25th Birthday 🎉"}),y.jsx("p",{children:"Personal site scaffold for a data analyst."})]}),y.jsxs("nav",{children:[y.jsx(Er,{to:"/",children:"Home"}),y.jsx(Er,{to:"/kenton",children:"Kenton"}),y.jsx(Er,{to:"/ml",children:"ML"}),y.jsx(Er,{to:"/code",children:"Code"}),y.jsx(Er,{to:"/links",children:"Links"}),y.jsx(Er,{to:"/contact",children:"Contact"}),y.jsx(Er,{to:"/more",children:"More"})]}),y.jsxs("main",{children:[y.jsx("h2",{children:t}),e]})]})}function Q2(){const t=gt.useRef(null);return gt.useEffect(()=>{const e=t.current;if(!e)return;const n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=new J2({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.toneMapping=Ch,i.toneMappingExposure=1.25;const r=new CM;r.fog=new zh(197125,.038);const s=new Tn(42,1,.1,80);s.position.set(0,.08,4.5);const a=new ba;a.position.y=.46,a.rotation.z=-.18,r.add(a);let o=7421;const l=()=>((o=o*16807%2147483647)-1)/2147483646,c=(U,J="rgba(0,0,0,0)")=>{const Y=document.createElement("canvas");Y.width=Y.height=128;const he=Y.getContext("2d"),Te=he.createRadialGradient(64,64,0,64,64,64);return Te.addColorStop(0,"#fff"),Te.addColorStop(.08,U),Te.addColorStop(.34,"rgba(255,70,12,.65)"),Te.addColorStop(1,J),he.fillStyle=Te,he.fillRect(0,0,128,128),new Du(Y)},f=document.createElement("canvas");f.width=2048,f.height=1024;const h=f.getContext("2d"),d=h.createLinearGradient(0,0,0,1024);d.addColorStop(0,"#07111d"),d.addColorStop(.45,"#062338"),d.addColorStop(1,"#04080e"),h.fillStyle=d,h.fillRect(0,0,2048,1024),h.strokeStyle="rgba(109,164,180,.07)",h.lineWidth=1;for(let U=84;U<1024;U+=86)h.beginPath(),h.moveTo(0,U),h.lineTo(2048,U),h.stroke();for(let U=0;U<2048;U+=128)h.beginPath(),h.moveTo(U,0),h.lineTo(U,1024),h.stroke();[[[95,280],[170,180],[330,152],[465,220],[520,330],[445,382],[390,465],[270,448],[198,370]],[[430,450],[570,455],[650,555],[625,702],[552,866],[492,776],[472,610]],[[790,182],[870,120],[962,145],[1008,230],[955,282],[850,270]],[[930,290],[1070,255],[1190,330],[1160,470],[1080,610],[1015,785],[930,690],[890,518]],[[1020,235],[1245,150],[1530,185],[1800,305],[1725,430],[1512,470],[1400,390],[1220,418],[1120,338]],[[1575,650],[1720,612],[1838,685],[1785,800],[1645,824],[1550,742]],[[845,850],[1200,875],[1540,842],[1800,895],[1640,950],[1050,958]]].forEach(U=>{h.beginPath(),U.forEach(([J,Y],he)=>he?h.lineTo(J,Y):h.moveTo(J,Y)),h.closePath(),h.fillStyle="#19231f",h.fill(),h.strokeStyle="rgba(226,124,67,.38)",h.lineWidth=4,h.stroke()});const g=[[-118,34],[-74,40],[-46,-23],[2,48],[37,55],[31,30],[77,28],[116,39],[139,35],[151,-33],[18,-34]];g.forEach(([U,J],Y)=>{const he=(U+180)/360*2048,Te=(90-J)/180*1024,Ee=Y%3===0?82:54,Ye=h.createRadialGradient(he,Te,0,he,Te,Ee);Ye.addColorStop(0,"#fff7c2"),Ye.addColorStop(.08,"#ff9a1f"),Ye.addColorStop(.25,"#d52d09"),Ye.addColorStop(.58,"rgba(92,15,4,.72)"),Ye.addColorStop(1,"rgba(0,0,0,0)"),h.fillStyle=Ye,h.fillRect(he-Ee,Te-Ee,Ee*2,Ee*2)});for(let U=0;U<210;U++){const J=l()*2048,Y=250+l()*560;h.fillStyle=`rgba(255,${70+Math.floor(l()*100)},25,${.18+l()*.48})`,h.fillRect(J,Y,1+l()*3,1+l()*3)}const E=new Du(f);E.colorSpace=En,E.anisotropy=i.capabilities.getMaxAnisotropy();const m=new an(new Ns(1.18,96,96),new jM({map:E,roughness:.96,metalness:.02,emissive:2163968,emissiveIntensity:.42}));m.rotation.y=-1.15,a.add(m);const u={uTime:{value:0},uHeat:{value:.2}},v=new an(new Ns(1.205,96,96),new Vn({uniforms:u,transparent:!0,depthWrite:!1,blending:Ti,vertexShader:"varying vec3 vN; varying vec3 vP; void main(){vN=normalize(normalMatrix*normal);vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uTime; uniform float uHeat; varying vec3 vN; varying vec3 vP; void main(){float bands=sin(vP.x*31.+sin(vP.y*19.)+uTime*1.8)*sin(vP.y*27.-uTime);float cracks=smoothstep(.72,.96,bands);float rim=pow(1.-abs(vN.z),3.);vec3 c=mix(vec3(1.,.055,.005),vec3(1.,.68,.12),cracks);gl_FragColor=vec4(c,(cracks*.26+rim*.19)*uHeat);}"}));v.rotation.y=m.rotation.y,a.add(v);const M=document.createElement("canvas");M.width=1024,M.height=512;const S=M.getContext("2d");for(let U=0;U<420;U++){const J=l()*1024,Y=l()*512,he=6+l()*45,Te=S.createRadialGradient(J,Y,0,J,Y,he);Te.addColorStop(0,`rgba(38,20,18,${.06+l()*.13})`),Te.addColorStop(1,"rgba(0,0,0,0)"),S.fillStyle=Te,S.fillRect(J-he,Y-he,he*2,he*2)}const A=new Du(M),w=new an(new Ns(1.245,72,72),new za({map:A,transparent:!0,opacity:.82,depthWrite:!1,color:7155751}));w.rotation.y=m.rotation.y+.2,a.add(w);const R=new an(new Ns(1.3,72,72),new Vn({transparent:!0,side:ln,blending:Ti,depthWrite:!1,vertexShader:"varying vec3 n;void main(){n=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 n;void main(){float i=pow(max(0.,.72-dot(n,vec3(0.,0.,1.))),3.2);gl_FragColor=vec4(1.,.11,.025,i*.72);}"}));a.add(R);const _=c("#fff3b0"),b=[],P=new k(0,0,1);g.forEach(([U,J],Y)=>{const he=Cm.degToRad(90-J),Te=Cm.degToRad(U+180),Ee=new k().setFromSphericalCoords(1,he,Te),Ye=new Gm(new Af({map:_,color:Y<3?16773798:16730891,transparent:!0,blending:Ti,depthWrite:!1,opacity:0}));Ye.position.copy(Ee).multiplyScalar(1.235),Ye.scale.setScalar(.07),Ye.userData={delay:Y*.24,index:Y},m.add(Ye),b.push(Ye);const Ue=new an(new oc(.035,.047,32),new za({color:16738835,transparent:!0,opacity:0,side:qn,blending:Ti,depthWrite:!1}));Ue.position.copy(Ee).multiplyScalar(1.224),Ue.quaternion.setFromUnitVectors(P,Ee),Ue.userData={delay:Y*.24,index:Y},m.add(Ue),b.push(Ue)});const L=new Float32Array(5400);for(let U=0;U<L.length;U+=3)L[U]=(l()-.5)*28,L[U+1]=(l()-.5)*17,L[U+2]=-3-l()*20;const B=new un;B.setAttribute("position",new Rn(L,3));const q=new $m(B,new bf({color:14477823,size:.018,transparent:!0,opacity:.7,sizeAttenuation:!0}));r.add(q);const ee=new Float32Array(1800);for(let U=0;U<ee.length;U+=3){const J=1.35+l()*2.2,Y=l()*Math.PI*2,he=(l()-.5)*1.4;ee[U]=Math.cos(Y)*J,ee[U+1]=he,ee[U+2]=Math.sin(Y)*J}const z=new un;z.setAttribute("position",new Rn(ee,3));const K=new $m(z,new bf({color:16734742,size:.018,transparent:!0,opacity:.68,blending:Ti,depthWrite:!1}));r.add(K);const V=c("#ffdf91"),D=new Gm(new Af({map:V,color:16723208,transparent:!0,opacity:.42,blending:Ti,depthWrite:!1}));D.position.set(-3.4,1.5,-4),D.scale.set(7,7,1),r.add(D);const j=[0,1,2].map(U=>{const J=new an(new oc(1.31,1.326,128),new za({color:U===0?16769441:16727050,transparent:!0,opacity:0,side:qn,blending:Ti,depthWrite:!1}));return J.position.y=.46,J.userData.index=U,r.add(J),J});r.add(new qM(8358566,1310976,.55));const ne=new QM(16765347,2.5);ne.position.set(-4,2.8,5),r.add(ne);const re=new ZM(16723200,13,8,1.7);re.position.set(1,-.25,2.3),r.add(re);const oe=new nE,Be=()=>{const U=e.clientWidth||1,J=e.clientHeight||1;i.setSize(U,J,!1),s.aspect=U/J,s.updateProjectionMatrix()};Be(),window.addEventListener("resize",Be);let qe;const He=()=>{qe=requestAnimationFrame(He);const U=oe.getElapsedTime(),J=n?0:.0014;m.rotation.y+=J,v.rotation.y+=J*.82,w.rotation.y-=J*.32,u.uTime.value=U,u.uHeat.value=Math.min(1.35,.18+U*.22),w.material.opacity=Math.min(.92,.38+U*.075),b.forEach(Y=>{const he=Math.max(0,U-Y.userData.delay);Y.isSprite?(Y.material.opacity=Math.min(1,he*2.4)*(.64+Math.sin(U*8+Y.userData.index)*.24),Y.scale.setScalar(.04+Math.min(.17,he*.045))):(Y.material.opacity=he>0?Math.max(0,.7-he%2.1/2.1):0,Y.scale.setScalar(1+he%2.1*2.8))}),j.forEach((Y,he)=>{const Te=Math.max(0,U-he*.65),Ee=Te%4.2;Y.scale.setScalar(1+Ee*.52),Y.material.opacity=Te>0?Math.max(0,.44-Ee*.105):0}),K.rotation.z+=J*.38,K.rotation.y-=J*.2,re.intensity=10+Math.sin(U*5.4)*3.5+Math.sin(U*13)*1.2,s.position.z=4.25+Math.min(.5,U*.035),n||(s.position.x=Math.sin(U*19)*Math.max(0,.018-U*.002),s.position.y=.08+Math.sin(U*14)*Math.max(0,.011-U*.001)),s.lookAt(0,0,0),i.render(r,s)};return He(),()=>{cancelAnimationFrame(qe),window.removeEventListener("resize",Be),r.traverse(U=>{var J,Y;(J=U.geometry)==null||J.dispose(),Array.isArray(U.material)?U.material.forEach(he=>he.dispose()):(Y=U.material)==null||Y.dispose()}),E.dispose(),A.dispose(),_.dispose(),V.dispose(),i.dispose()}},[]),y.jsx("canvas",{ref:t,"aria-label":"A burning Earth surrounded by global firestorms and ash",style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}})}function eb({onReset:t}){const[e,n]=gt.useState(0);gt.useEffect(()=>{const l=Date.now(),c=setInterval(()=>n(Math.floor((Date.now()-l)/1e3)),1e3);return()=>clearInterval(c)},[]);const i=`T+00:${String(e).padStart(2,"0")}`,r=[{x:0,w:9,h:43},{x:7,w:7,h:31},{x:13,w:11,h:55},{x:22,w:6,h:36},{x:27,w:10,h:63,falling:!0},{x:36,w:7,h:44},{x:42,w:12,h:38},{x:53,w:8,h:57},{x:60,w:6,h:34},{x:65,w:12,h:69},{x:76,w:7,h:46},{x:82,w:11,h:58},{x:92,w:9,h:39}],s=Array.from({length:34},(l,c)=>({x:c*31%101,size:22+c*17%58,delay:-(c*13%24)/10})),a=Array.from({length:9},(l,c)=>({x:5+c*19%92,delay:-(c*7%31)/10,scale:.55+c%4*.2})),o=Array.from({length:46},(l,c)=>({x:c*37%101,delay:-(c*11%53)/10,duration:3.5+c%6*.7}));return y.jsxs("section",{className:"doomsday","aria-live":"polite",children:[y.jsx(Q2,{}),y.jsx("div",{className:"doom-vignette"}),y.jsx("div",{className:"doom-grain"}),y.jsx("div",{className:"doom-scan"}),y.jsx("div",{className:"meteor-field","aria-hidden":"true",children:a.map((l,c)=>y.jsx("i",{className:"meteor",style:{"--x":`${l.x}%`,"--delay":`${l.delay}s`,"--scale":l.scale}},c))}),y.jsx("div",{className:"sky-blast sky-blast-one","aria-hidden":"true"}),y.jsx("div",{className:"sky-blast sky-blast-two","aria-hidden":"true"}),y.jsx("div",{className:"ash-field","aria-hidden":"true",children:o.map((l,c)=>y.jsx("i",{style:{"--x":`${l.x}%`,"--delay":`${l.delay}s`,"--duration":`${l.duration}s`}},c))}),y.jsxs("div",{className:"doom-topline mono",children:[y.jsxs("div",{children:[y.jsx("span",{className:"doom-live"}),"PLANETARY EXTINCTION"]}),y.jsx("div",{children:i})]}),y.jsxs("div",{className:"city-destruction","aria-hidden":"true",children:[y.jsx("div",{className:"smoke-column smoke-one"}),y.jsx("div",{className:"smoke-column smoke-two"}),y.jsx("div",{className:"smoke-column smoke-three"}),y.jsx("div",{className:"ruined-skyline",children:r.map((l,c)=>y.jsx("i",{className:`ruin ruin-${c%3}${l.falling?" ruin-falling":""}`,style:{"--x":`${l.x}%`,"--w":`${l.w}%`,"--h":`${l.h}%`},children:y.jsx("b",{})},c))}),y.jsxs("svg",{className:"broken-bridge",viewBox:"0 0 1200 190",preserveAspectRatio:"none",children:[y.jsx("path",{d:"M0 136 L176 130 L315 92 L452 124 L512 143 M688 147 L756 113 L910 100 L1035 132 L1200 139"}),y.jsx("path",{d:"M188 130 L188 35 M1008 132 L1008 38 M188 42 Q360 51 452 124 M1008 44 Q850 52 756 113"}),y.jsx("path",{className:"bridge-cable",d:"M452 124 L512 182 M756 113 L690 180"})]}),y.jsx("div",{className:"fireline",children:s.map((l,c)=>y.jsx("i",{className:"flame",style:{"--x":`${l.x}%`,"--size":`${l.size}px`,"--delay":`${l.delay}s`}},c))})]}),y.jsxs("div",{className:"doom-end",children:[y.jsx("strong",{children:"THE END"}),y.jsx("span",{className:"mono",children:"NO CITIES LEFT TO NAME"})]}),y.jsx("div",{className:"doom-bottom",children:y.jsxs("button",{onClick:t,className:"doom-reset mono","aria-label":"Reset the experiment",children:["REWIND ",y.jsx("span",{children:"↺"})]})})]})}function tb(){const[t,e]=gt.useState(1.4),[n,i]=gt.useState(1),r=[{f:8,w:1.5,h:1.8},{f:22,w:2,h:.9}];return y.jsxs("div",{style:{height:320,position:"relative",background:"#020617",overflow:"hidden"},children:[y.jsxs("svg",{viewBox:"0 0 400 200",style:{width:"100%",height:"100%",display:"block"},children:[y.jsx("rect",{width:400,height:200,fill:"#020617"}),y.jsx("text",{x:12,y:18,fill:"#22d3ee",fontSize:8,className:"mono",children:"PSD(f) = A / f^χ · x·y + Σ peaks"}),y.jsx("text",{x:12,y:192,fill:"#64748b",fontSize:6,className:"mono",children:"f (Hz) log — 1 ─── 10 ─── 100"}),y.jsx("path",{d:`M ${Array.from({length:80},(s,a)=>{const o=1+99*a/79,l=30+Math.log10(o)/2*340,c=170-60*n/Math.pow(o,t)*40-r.reduce((f,h)=>f+h.h*Math.exp(-Math.pow(Math.log10(o)-Math.log10(h.f),2)/(2*Math.pow(h.w/10,2))),0)*30;return`${a===0?"M":"L"} ${l.toFixed(1)} ${c.toFixed(1)}`}).join(" ")}`,fill:"none",stroke:"#f472b6",strokeWidth:1.6,opacity:.95}),y.jsx("path",{d:`M ${Array.from({length:80},(s,a)=>{const o=1+99*a/79,l=30+Math.log10(o)/2*340,c=170-60*n/Math.pow(o,t)*40;return`${a===0?"M":"L"} ${l.toFixed(1)} ${c.toFixed(1)}`}).join(" ")}`,fill:"none",stroke:"#22d3ee",strokeWidth:1,opacity:.35,strokeDasharray:"4 4"}),r.map((s,a)=>{const o=30+Math.log10(s.f)/2*340;return y.jsxs("g",{children:[y.jsx("line",{x1:o,y1:40,x2:o,y2:170,stroke:"rgba(99,102,241,0.18)",strokeWidth:1}),y.jsxs("text",{x:o,y:36,textAnchor:"middle",fill:"#a78bfa",fontSize:6,className:"mono",children:[s.f,"Hz"]})]},a)}),y.jsxs("text",{x:320,y:28,fill:"#f472b6",fontSize:7,className:"mono",children:["χ=",t.toFixed(2)]}),y.jsxs("text",{x:320,y:38,fill:"#22d3ee",fontSize:7,className:"mono",children:["A·x·y=",n.toFixed(2)]})]}),y.jsxs("div",{style:{position:"absolute",bottom:42,left:12,right:12,display:"flex",gap:12,alignItems:"center"},children:[y.jsxs("label",{className:"mono",style:{fontSize:10,color:"#e2e8f0",display:"flex",gap:6,alignItems:"center"},children:["χ ",y.jsx("input",{type:"range",min:.5,max:2.5,step:.05,value:t,onChange:s=>e(parseFloat(s.target.value)),style:{width:90}})]}),y.jsxs("label",{className:"mono",style:{fontSize:10,color:"#e2e8f0",display:"flex",gap:6,alignItems:"center"},children:["A ",y.jsx("input",{type:"range",min:.4,max:1.8,step:.05,value:n,onChange:s=>i(parseFloat(s.target.value)),style:{width:90}})]}),y.jsx("span",{className:"mono",style:{fontSize:9,color:"#94a3b8",marginLeft:"auto"},children:"x·y = lateral · anterior — aperiodic × space"})]})]})}function nb(){const t={sea:"#8E9EAC",ink:"#0A0A0B"},e=[{id:"kenton",label:"CABIN",sub:"KENTON",href:"/kenton",x:180,y:320,w:132,h:104},{id:"store",label:"STORE",sub:"LINKS / CODE",href:"/links",x:390,y:268,w:120,h:102},{id:"theatre",label:"THEATRE",sub:"ML LAB",href:"/ml",x:620,y:312,w:138,h:110},{id:"contact",label:"POST",sub:"CONTACT",href:"/contact",x:500,y:448,w:104,h:76},{id:"more",label:"SHED",sub:"MORE",href:"/more",x:780,y:398,w:86,h:68}],[n,i]=gt.useState({x:500,y:220}),[r,s]=gt.useState(null),[a,o]=gt.useState(!1);gt.useEffect(()=>{const f=new Set,h=E=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","a","s","d","W","A","S","D"].includes(E.key)&&(E.preventDefault(),f.add(E.key.toLowerCase()))},d=E=>f.delete(E.key.toLowerCase());window.addEventListener("keydown",h),window.addEventListener("keyup",d);let p;const g=()=>{let E=0,m=0;(f.has("arrowleft")||f.has("a"))&&(E-=10),(f.has("arrowright")||f.has("d"))&&(E+=10),(f.has("arrowup")||f.has("w"))&&(m-=10),(f.has("arrowdown")||f.has("s"))&&(m+=10),(E||m)&&i(u=>{let v=Math.max(18,Math.min(982,u.x+E)),M=Math.max(18,Math.min(632,u.y+m));return(v<=20||v>=980||M<=20||M>=630)&&(o(!0),setTimeout(()=>{window.location.href="/avery"},200)),{x:v,y:M}}),p=requestAnimationFrame(g)};return p=requestAnimationFrame(g),()=>{cancelAnimationFrame(p),window.removeEventListener("keydown",h),window.removeEventListener("keyup",d)}},[]),gt.useEffect(()=>{const c=e.find(f=>n.x>f.x-18&&n.x<f.x+f.w+18&&n.y>f.y-18&&n.y<f.y+f.h+18);s((c==null?void 0:c.id)||null)},[n]);const l=()=>{const c=e.find(f=>f.id===r);c&&(window.location.href=c.href)};return gt.useEffect(()=>{const c=f=>{(f.key==="Enter"||f.key===" ")&&l()};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)}),y.jsxs("div",{style:{margin:"-24px -24px 0",background:"#E8E0C8",color:t.ink,minHeight:"calc(100vh - 72px)",position:"relative",overflow:"hidden",filter:"sepia(0.38) saturate(0.82)"},children:[y.jsx("style",{children:"@keyframes drift{from{transform:translateX(-180px)}to{transform:translateX(1160px)}} @keyframes drift2{from{transform:translateX(-220px)}to{transform:translateX(1160px)}} @keyframes flash{0%,49%{fill:#9A8E7A}50%,100%{fill:#7E8FA3}} @keyframes flashStroke{0%,49%{stroke:#9A8E7A}50%,100%{stroke:#7E8FA3}} .flash{animation:flash 0.28s steps(1) infinite} .flashStroke{animation:flashStroke 0.28s steps(1) infinite} .ink{stroke:#0A0A0B; stroke-linecap:round; stroke-linejoin:round}"}),y.jsx("div",{style:{position:"absolute",top:10,left:"50%",transform:"translateX(-50%)",zIndex:5,background:"#F5EED8",border:"2.5px solid #0A0A0B",borderRadius:10,padding:"7px 18px",fontFamily:"JetBrains Mono,monospace",fontSize:11,letterSpacing:2,fontWeight:800,boxShadow:"0 4px 14px rgba(0,0,0,0.18)"},children:"MY-ESPIRIT · CORNSWEEPER MENU — WALK TO BUILDINGS · EDGE → AVERY"}),a&&y.jsx("div",{style:{position:"absolute",inset:0,zIndex:10,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(10,10,11,0.72)",color:"#F5EED8",fontFamily:"JetBrains Mono,monospace",fontSize:18,letterSpacing:4},children:"WARPING TO AVERY…"}),y.jsxs("svg",{viewBox:"0 0 1000 650",style:{width:"100%",height:"calc(100vh - 72px)",display:"block"},onClick:c=>{const f=c.currentTarget.getBoundingClientRect(),h=(c.clientX-f.left)/f.width*1e3,d=(c.clientY-f.top)/f.height*650;i({x:Math.max(18,Math.min(982,h)),y:Math.max(18,Math.min(632,d))})},children:[y.jsx("rect",{x:"0",y:"0",width:"1000",height:"650",fill:"#E8E0C8"}),y.jsx("rect",{x:"0",y:"538",width:"1000",height:"112",fill:t.sea,stroke:"#0A0A0B",strokeWidth:"3"}),y.jsx("g",{stroke:"#0A0A0B",strokeWidth:"1.6",opacity:"0.9",fill:"none",children:Array.from({length:6}).map((c,f)=>y.jsx("path",{d:`M ${-40+f*180} ${560+f%2*10} q 30 -10 60 0 t 60 0 t 60 0`},f))}),y.jsxs("g",{opacity:"0.95",children:[y.jsxs("g",{style:{animation:"drift 26s linear infinite"},children:[y.jsx("ellipse",{cx:"180",cy:"78",rx:"54",ry:"22",fill:"#F5EED8",className:"ink",strokeWidth:"2.5"}),y.jsx("ellipse",{cx:"210",cy:"68",rx:"36",ry:"20",fill:"#F5EED8",className:"ink",strokeWidth:"2.5"}),y.jsx("ellipse",{cx:"150",cy:"86",rx:"30",ry:"16",fill:"#F5EED8",className:"ink",strokeWidth:"2.5"})]}),y.jsxs("g",{style:{animation:"drift2 34s linear infinite"},children:[y.jsx("ellipse",{cx:"520",cy:"96",rx:"62",ry:"24",fill:"#F5EED8",className:"ink",strokeWidth:"2.5"}),y.jsx("ellipse",{cx:"560",cy:"84",rx:"40",ry:"18",fill:"#F5EED8",className:"ink",strokeWidth:"2.5"}),y.jsx("ellipse",{cx:"480",cy:"102",rx:"32",ry:"16",fill:"#F5EED8",className:"ink",strokeWidth:"2.5"})]}),y.jsxs("g",{style:{animation:"drift 42s linear infinite",animationDelay:"-12s"},children:[y.jsx("ellipse",{cx:"820",cy:"72",rx:"48",ry:"20",fill:"#F5EED8",className:"ink",strokeWidth:"2.5"}),y.jsx("ellipse",{cx:"848",cy:"62",rx:"30",ry:"16",fill:"#F5EED8",className:"ink",strokeWidth:"2.5"})]})]}),y.jsx("ellipse",{cx:"500",cy:"430",rx:"420",ry:"148",fill:"#C2B8A3",className:"ink",strokeWidth:"3"}),y.jsx("ellipse",{cx:"500",cy:"420",rx:"400",ry:"132",fill:"#D9D0B6",stroke:"#0A0A0B",strokeWidth:"2"}),[[120,340],[140,400],[820,300],[860,360],[300,480],[700,480],[88,300]].map(([c,f],h)=>y.jsxs("g",{children:[y.jsx("rect",{x:c-4,y:f,width:"8",height:"18",fill:"#6B6254",className:"ink",strokeWidth:"1.8"}),y.jsx("circle",{cx:c,cy:f-6,r:"18",fill:"#9A8E7A",stroke:"#0A0A0B",strokeWidth:"2.2"}),y.jsx("circle",{cx:c-8,cy:f,r:"12",fill:"#C2B8A3",className:"ink",strokeWidth:"1.8"}),y.jsx("circle",{cx:c+9,cy:f-2,r:"10",fill:"#D9D0B6",className:"ink",strokeWidth:"1.8"})]},h)),e.map(c=>{const f=r===c.id;return y.jsxs("g",{onClick:()=>window.location.href=c.href,style:{cursor:"pointer"},children:[y.jsx("rect",{x:c.x,y:c.y,width:c.w,height:c.h,rx:"10",fill:f?"#9A8E7A":"#F5EED8",className:f?"flash ink":"ink",strokeWidth:"3"}),y.jsx("rect",{x:c.x+10,y:c.y+14,width:c.w-20,height:"14",rx:"4",fill:"#0A0A0B"}),y.jsx("text",{x:c.x+c.w/2,y:c.y+24,textAnchor:"middle",fontSize:"8",fontFamily:"JetBrains Mono,monospace",fill:"#F5EED8",fontWeight:"800",children:c.label}),y.jsx("text",{x:c.x+c.w/2,y:c.y+c.h-14,textAnchor:"middle",fontSize:"7",fontFamily:"JetBrains Mono,monospace",fill:"#0A0A0B",fontWeight:"700",children:c.sub}),y.jsx("rect",{x:c.x+c.w/2-14,y:c.y+c.h-28,width:"28",height:"22",rx:"3",fill:"#C2B8A3",className:"ink",strokeWidth:"2"}),f&&y.jsx("text",{x:c.x+c.w/2,y:c.y-10,textAnchor:"middle",fontSize:"9",fontFamily:"JetBrains Mono,monospace",fill:"#0A0A0B",fontWeight:"800",children:"▶ ENTER [↵]"})]},c.id)}),y.jsxs("g",{transform:`translate(${n.x},${n.y})`,children:[y.jsx("ellipse",{cx:"0",cy:"14",rx:"10",ry:"4",fill:"rgba(0,0,0,0.22)"}),y.jsx("rect",{x:"-9",y:"-14",width:"18",height:"18",rx:"6",fill:"#0A0A0B",stroke:"#F5EED8",strokeWidth:"1.2"}),y.jsx("circle",{cx:"0",cy:"-7",r:"5",fill:"#F5EED8",stroke:"#0A0A0B",strokeWidth:"1.6"}),y.jsx("text",{x:"0",y:"-5",textAnchor:"middle",fontSize:"7",children:"◉"})]}),y.jsxs("g",{opacity:"0.55",fontFamily:"JetBrains Mono,monospace",fontSize:"7",fill:"#0A0A0B",textAnchor:"middle",children:[y.jsx("text",{x:"500",y:"18",children:"▲ EDGE → AVERY"}),y.jsx("text",{x:"500",y:"644",children:"▼ EDGE → AVERY"}),y.jsx("text",{x:"14",y:"330",transform:"rotate(-90 14 330)",children:"◀ EDGE → AVERY"}),y.jsx("text",{x:"986",y:"330",transform:"rotate(90 986 330)",children:"EDGE → AVERY ▶"})]})]}),y.jsxs("div",{style:{position:"absolute",bottom:10,left:12,display:"flex",gap:8,fontFamily:"JetBrains Mono,monospace",fontSize:10,zIndex:5},children:[y.jsx("span",{style:{background:"#0A0A0B",color:"#F5EED8",padding:"6px 10px",borderRadius:999},children:"WASD / ARROWS move · CLICK to walk · ENTER to enter"}),y.jsxs("button",{onClick:l,disabled:!r,style:{background:r?"#0A0A0B":"#9A8E7A",color:"#F5EED8",border:"2px solid #0A0A0B",borderRadius:999,padding:"6px 12px",fontWeight:800,cursor:r?"pointer":"not-allowed"},children:["ENTER → ",r||"—"]})]})]})}function ib(){return y.jsxs(Sr,{title:"",children:[y.jsx("style",{children:`
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
      `}),y.jsxs("div",{className:"kenton-wrap",children:[y.jsx("div",{className:"kenton-hero",children:y.jsx("div",{className:"kenton-shell",children:y.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.15fr 0.85fr",gap:28,alignItems:"center",padding:"8px 0 28px"},children:[y.jsxs("div",{children:[y.jsx("div",{className:"mono",style:{fontSize:11,letterSpacing:3,color:"#6366f1",fontWeight:700},children:"KENTON GUARIAN — SAN DIEGO · UCSD MATH-CS"}),y.jsxs("div",{style:{fontSize:"clamp(30px,3.6vw,42px)",fontWeight:800,letterSpacing:"-0.04em",lineHeight:1.05,marginTop:8,color:"#0f172a"},children:["Data · software ·",y.jsx("br",{}),y.jsx("span",{style:{background:"linear-gradient(90deg,#6366f1,#06b6d4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"signal research."})]}),y.jsxs("p",{style:{fontSize:15,color:"#475569",lineHeight:1.65,marginTop:14,maxWidth:560},children:["Mathematics-Computer Science, UC San Diego (Dec 2023) — Voytek Lab alum, Machine Learning Engineer in Cognitive Science. Built deep nets for brain signals at ",y.jsx("strong",{children:"98% accuracy"}),", patent-pending heart-signal parametrization (",y.jsx("strong",{children:"1000× faster"}),"), and secure data platforms that lifted research efficiency 30%. Published: ",y.jsx("em",{children:"Sleep breathing patterns and neurocognitive function in a diverse Hispanic/Latino cohort"})," — ",y.jsx("em",{children:"Alzheimer's & Dementia"})," (2023) ",y.jsx("a",{href:"https://doi.org/10.1002/alz.074342",target:"_blank",rel:"noreferrer",style:{color:"#6366f1"},children:"doi:10.1002/alz.074342 ↗"}),"."]}),y.jsxs("div",{style:{display:"flex",gap:10,marginTop:16,flexWrap:"wrap"},children:[y.jsx("a",{href:"mailto:Kenton.Guarian@gmail.com",className:"mono",style:{padding:"11px 16px",borderRadius:999,textDecoration:"none",fontWeight:700,fontSize:13,background:"#0f172a",color:"#fff"},children:"Kenton.Guarian@gmail.com"}),y.jsx("a",{href:"https://www.linkedin.com/in/kguarian/",target:"_blank",rel:"noreferrer",className:"mono",style:{fontSize:11,alignSelf:"center",color:"#0a66c2",background:"#fff",border:"1px solid #e2e8f0",padding:"6px 10px",borderRadius:999,textDecoration:"none"},children:"in · kguarian ↗"}),y.jsx("a",{href:"https://github.com/kguarian",target:"_blank",rel:"noreferrer",className:"mono",style:{fontSize:11,alignSelf:"center",color:"#0f172a",background:"#fff",border:"1px solid #e2e8f0",padding:"6px 10px",borderRadius:999,textDecoration:"none"},children:"GitHub · 34 repos ↗"}),y.jsx("a",{href:"https://voyteklab.com/members",target:"_blank",rel:"noreferrer",className:"mono",style:{fontSize:11,alignSelf:"center",color:"#6366f1"},children:"Voytek Lab ↗"})]})]}),y.jsxs("div",{style:{position:"relative"},children:[y.jsxs("div",{className:"kglass",style:{borderRadius:20,overflow:"hidden",position:"relative",background:"#0f172a"},children:[y.jsx(tb,{}),y.jsxs("div",{style:{position:"absolute",bottom:10,left:10,right:10,display:"flex",gap:8,flexWrap:"wrap"},children:[y.jsx("span",{className:"kglass mono",style:{fontSize:10,padding:"6px 10px",borderRadius:999},children:"NEURAL OSCILLATIONS"}),y.jsx("span",{className:"kglass mono",style:{fontSize:10,padding:"6px 10px",borderRadius:999},children:"1/f · aperiodic"})]})]}),y.jsxs("div",{className:"kglass",style:{position:"absolute",bottom:-16,left:-8,borderRadius:14,padding:"10px 12px",display:"flex",gap:10,alignItems:"center",maxWidth:280},children:[y.jsx("div",{style:{width:54,height:54,borderRadius:10,background:"linear-gradient(135deg,#6366f1,#06b6d4)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:12},children:"UCSD"}),y.jsxs("div",{children:[y.jsx("div",{style:{fontWeight:700,fontSize:13},children:"UC San Diego"}),y.jsx("div",{className:"mono",style:{fontSize:10,color:"#64748b"},children:"B.S. Math-CS · Provost Honors · PATHS/Golden Pyramid"})]})]})]})]})})}),y.jsxs("div",{className:"kenton-grid",children:[y.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[y.jsxs("div",{className:"kglass",style:{borderRadius:16,padding:16},children:[y.jsx("div",{className:"mono",style:{fontSize:10,letterSpacing:2,color:"#6366f1"},children:"EXPERIENCE"}),y.jsxs("div",{style:{marginTop:12,borderLeft:"2px solid #e2e8f0",paddingLeft:14,display:"flex",flexDirection:"column",gap:14},children:[y.jsxs("div",{children:[y.jsx("div",{style:{fontWeight:700},children:"Machine Learning Engineer — UC San Diego, CogSci (Voytek Lab)"}),y.jsx("div",{className:"mono",style:{fontSize:11,color:"#64748b"},children:"Mar 2021 – Present · La Jolla"}),y.jsxs("ul",{style:{margin:"6px 0 0",paddingLeft:16,fontSize:13,color:"#334155",lineHeight:1.6},children:[y.jsxs("li",{children:["Deep net for brain signals — ",y.jsx("strong",{children:"98% accuracy"}),", new benchmark"]}),y.jsxs("li",{children:["Patent-pending heart-signal parametrization — ",y.jsx("strong",{children:"1000×"})," speedup"]}),y.jsx("li",{children:"Secure data collection platform — +30% research efficiency"}),y.jsxs("li",{children:[y.jsx("em",{children:"Alzheimer's & Dementia"})," 2023 — Sleep breathing patterns (co-author) — ",y.jsx("a",{href:"https://doi.org/10.1002/alz.074342",target:"_blank",rel:"noreferrer",style:{color:"#6366f1"},children:"doi:10.1002/alz.074342"})]})]})]}),y.jsxs("div",{children:[y.jsx("div",{style:{fontWeight:700},children:"Software Engineer — Mechanical Music Digest"}),y.jsx("div",{className:"mono",style:{fontSize:11,color:"#64748b"},children:"Oct 2020 – Mar 2021 · San Diego"}),y.jsx("ul",{style:{margin:"6px 0 0",paddingLeft:16,fontSize:13,color:"#334155",lineHeight:1.6},children:y.jsx("li",{children:"AI behavioral monitoring, automated compliance, newsletter distribution, VirtualDJ extensions"})})]}),y.jsxs("div",{children:[y.jsx("div",{style:{fontWeight:700},children:"Front-End Developer — UC San Diego, CSE"}),y.jsx("div",{className:"mono",style:{fontSize:11,color:"#64748b"},children:"Jun – Sep 2021"}),y.jsx("ul",{style:{margin:"6px 0 0",paddingLeft:16,fontSize:13,color:"#334155"},children:y.jsx("li",{children:"Serverless code execution — zero-infra, instant scale"})})]})]})]}),y.jsxs("div",{className:"kglass",style:{borderRadius:16,padding:16},children:[y.jsx("div",{className:"mono",style:{fontSize:10,letterSpacing:2,color:"#6366f1"},children:"TECHNICAL SKILLS"}),y.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap",marginTop:10},children:["Python","SQL","JavaScript","Go","Java","C++","PyTorch","NumPy","Pandas","Scikit-Learn","Jupyter","DNNs","DSP","Systems Programming","API Design"].map(t=>y.jsx("span",{className:"mono",style:{fontSize:11,padding:"6px 10px",borderRadius:999,background:"#f1f5f9",border:"1px solid #e2e8f0"},children:t},t))})]})]}),y.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[y.jsxs("div",{className:"kglass",style:{borderRadius:16,overflow:"hidden"},children:[y.jsx("div",{style:{width:"100%",height:36,background:"linear-gradient(90deg,#f1f5f9,#e0e7ff)"}}),y.jsxs("div",{style:{padding:14},children:[y.jsx("div",{style:{fontWeight:700},children:"Selected Projects"}),y.jsxs("ul",{style:{margin:"6px 0 0",paddingLeft:16,fontSize:13,color:"#475569",lineHeight:1.6},children:[y.jsx("li",{children:"Brain Monitoring — ML predicts mental exercise"}),y.jsx("li",{children:"CS Education — browser code execution platform"}),y.jsx("li",{children:"Optimized Stock Portfolio — linear algebra"}),y.jsx("li",{children:"Music Analytics — listening records & analytics"})]})]})]}),y.jsxs("div",{className:"kglass",style:{borderRadius:16,overflow:"hidden"},children:[y.jsx("div",{style:{width:"100%",height:36,background:"linear-gradient(90deg,#ecfeff,#f0f9ff)"}}),y.jsxs("div",{style:{padding:12},children:[y.jsx("div",{style:{fontWeight:700,fontSize:14},children:"San Diego · La Jolla"}),y.jsx("div",{style:{fontSize:12,color:"#64748b"},children:"UC San Diego Math-CS — Data Science, Neural Data Science, Stats, Algorithms"}),y.jsxs("div",{style:{marginTop:8,display:"flex",gap:8},children:[y.jsx("a",{href:"/ml",style:{fontSize:12,fontWeight:700,color:"#6366f1",textDecoration:"none"},children:"ML →"}),y.jsx("a",{href:"/code",style:{fontSize:12,color:"#475569",textDecoration:"none"},children:"Code →"}),y.jsx("a",{href:"https://doi.org/10.1002/alz.074342",target:"_blank",rel:"noreferrer",style:{fontSize:11,color:"#94a3b8"},children:"Alzheimer's & Dementia (2023) ↗"})]})]})]}),y.jsxs("div",{className:"kglass mono",style:{borderRadius:16,padding:12,fontSize:11,color:"#64748b",display:"flex",gap:8,flexWrap:"wrap"},children:[y.jsx("span",{children:"📄 Resumes in repo root"}),y.jsx("span",{children:"·"}),y.jsx("span",{children:"Highly recommended by Prof. Brad Voytek (voytek@ucsd.edu)"})]})]})]})]})]})}function rb(){const[t,e]=gt.useState("ready"),[n]=gt.useState(1),[i,r]=gt.useState({alive:0,dead:0}),[s,a]=gt.useState(0),o=i.alive+i.dead;gt.useRef(null);function l(){t==="ready"&&(e("arming"),setTimeout(()=>e("superposed"),1200))}function c(){if(t!=="superposed")return;e("measuring");let h=0;const d=setInterval(()=>{a(p=>p+1),h++,h>6&&clearInterval(d)},120);setTimeout(()=>{const p=Math.random()<.5;e(p?"alive":"dead"),r(g=>({alive:g.alive+(p?1:0),dead:g.dead+(p?0:1)}))},1100)}function f(){e("ready"),a(0)}return y.jsxs(Sr,{title:"",children:[y.jsx("style",{children:`
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
      `}),y.jsxs("div",{className:`avery-root ${t==="dead"?"avery-dead-root":""}`,children:[t!=="dead"&&y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"avery-bg"}),y.jsx("div",{className:"avery-grid"})]}),y.jsxs("div",{className:"avery-shell",children:[t!=="dead"&&y.jsxs("div",{style:{padding:"18px 18px 0",display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12},children:[y.jsxs("div",{children:[y.jsx("div",{className:"mono",style:{fontSize:10,letterSpacing:3,opacity:.7,color:"#22d3ee"},children:"AVERY LAB // SCHRÖDINGER PROTOCOL"}),y.jsx("div",{className:"avery-title",style:{background:"linear-gradient(90deg,#f472b6,#22d3ee,#a78bfa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"The Cat Experiment"}),y.jsx("div",{style:{fontSize:12,opacity:.75},children:"Physically accurate · sealed box · single ²¹⁰Po atom · Geiger + hammer + HCN vial · unitary evolution until measurement"})]}),y.jsxs("div",{className:"glass",style:{borderRadius:12,padding:"10px 14px",minWidth:160},children:[y.jsx("div",{className:"mono",style:{fontSize:10,opacity:.7},children:"STATE VECTOR"}),y.jsxs("div",{className:"mono",style:{fontSize:13},children:["|ψ⟩ = ",y.jsx("span",{style:{color:t==="alive"?"#10b981":t==="dead"?"#ef4444":"#f472b6"},children:t==="alive"?"1|alive⟩":t==="dead"?"1|dead⟩":t==="superposed"||t==="measuring"?"(|alive⟩+|dead⟩)/√2":"—"})]}),y.jsxs("div",{className:"mono",style:{fontSize:10,opacity:.6},children:["P(alive)=P(dead)=50% · t½=",n,"s · HFS"]})]})]}),t==="dead"?y.jsx(eb,{onReset:f}):y.jsxs("div",{className:"avery-main",children:[y.jsxs("div",{className:"glass neon",style:{borderRadius:16,padding:14,position:"relative",overflow:"hidden"},children:[y.jsx("div",{className:"mono",style:{fontSize:10,letterSpacing:2,opacity:.7,marginBottom:8},children:"APPARATUS — CROSS SECTION"}),y.jsx("div",{style:{background:"rgba(0,0,0,0.35)",borderRadius:12,padding:8,border:"1px solid rgba(255,255,255,0.08)"},children:y.jsxs("svg",{viewBox:"0 0 640 360",width:"100%",style:{display:"block",maxHeight:360},children:[y.jsx("rect",{x:12,y:12,width:616,height:336,rx:18,fill:"none",stroke:"rgba(255,255,255,0.12)",strokeWidth:1.2}),y.jsx("text",{x:22,y:28,fill:"#94a3b8",fontSize:8,className:"mono",children:"LEAD SHIELD · 5cm · THERMALLY ISOLATED"}),y.jsxs("g",{children:[y.jsx("rect",{x:28,y:48,width:160,height:120,rx:12,fill:"rgba(139,92,246,0.12)",stroke:"#a78bfa",strokeWidth:1.2}),y.jsx("text",{x:36,y:64,fill:"#c4b5fd",fontSize:9,className:"mono",children:"ATOM CHAMBER"}),y.jsx("text",{x:36,y:76,fill:"#c4b5fd",fontSize:7,className:"mono",children:"single ²¹⁰Po · α-decay · t½=1s"}),y.jsx("circle",{cx:108,cy:112,r:18,fill:"#7c3aed",stroke:"#ddd6fe",strokeWidth:1,opacity:t==="superposed"?.95:.7,style:{animation:t==="superposed"?"glowPulse 1.2s infinite":""}}),y.jsx("circle",{cx:108,cy:112,r:4,fill:"#fde68a"}),y.jsx("ellipse",{cx:108,cy:112,rx:38,ry:18,fill:"none",stroke:"#22d3ee",strokeWidth:.9,opacity:.5}),y.jsx("ellipse",{cx:108,cy:112,rx:18,ry:38,fill:"none",stroke:"#ec4899",strokeWidth:.9,opacity:.5}),y.jsx("circle",{cx:146,cy:112,r:3,fill:"#22d3ee",style:{animation:t!=="ready"?"spin 1s linear infinite":""}}),y.jsx("path",{d:"M 28 148 Q 60 132 92 148 T 156 148 T 188 148",fill:"none",stroke:"#f472b6",strokeWidth:1.2,strokeDasharray:"6 4",style:{animation:"wave 1s linear infinite",opacity:t==="superposed"?1:.25}}),(t==="alive"||t==="dead")&&y.jsx("text",{x:108,y:134,textAnchor:"middle",fill:t==="dead"?"#f87171":"#34d399",fontSize:7,className:"mono",children:t==="dead"?"DECAYED → α":"NOT DECAYED"})]}),y.jsxs("g",{children:[y.jsx("rect",{x:200,y:78,width:110,height:52,rx:10,fill:"rgba(6,182,212,0.14)",stroke:"#22d3ee",strokeWidth:1.2}),y.jsx("text",{x:208,y:94,fill:"#67e8f9",fontSize:8,className:"mono",children:"GEIGER-MÜLLER"}),y.jsx("rect",{x:214,y:102,width:82,height:10,rx:5,fill:t==="measuring"||t==="dead"?"#22d3ee":"#334155"}),y.jsx("rect",{x:214,y:102,width:t==="measuring"?s%4*20+10:t==="dead"?82:8,height:10,rx:5,fill:"#f472b6",style:{transition:"width 0.15s"}}),y.jsx("circle",{cx:304,cy:107,r:4,fill:t==="measuring"?"#fde68a":"#64748b",style:{animation:t==="measuring"?"decayFlash 0.25s infinite":""}}),y.jsx("text",{x:208,y:124,fill:"#94a3b8",fontSize:6,className:"mono",children:"Ar + HV · avalanche"}),y.jsx("path",{d:"M188 112 H200",stroke:"#67e8f9",strokeWidth:1.2})]}),y.jsxs("g",{children:[y.jsx("rect",{x:328,y:66,width:86,height:74,rx:10,fill:"rgba(251,146,60,0.12)",stroke:"#fb923c",strokeWidth:1.2}),y.jsx("text",{x:336,y:82,fill:"#fed7aa",fontSize:8,className:"mono",children:"HAMMER RELAY"}),y.jsx("rect",{x:348,y:90,width:46,height:28,rx:6,fill:t==="dead"?"#fb923c":"#1f2937",stroke:"#fdba74"}),y.jsx("line",{x1:371,y1:118,x2:371,y2:148,stroke:"#fdba74",strokeWidth:3,strokeLinecap:"round",style:{transform:t==="dead"?"rotate(42deg)":"rotate(0deg)",transformOrigin:"371px 118px",transition:"transform 0.4s"}}),y.jsx("text",{x:336,y:134,fill:"#94a3b8",fontSize:6,className:"mono",children:t==="dead"?"TRIGGERED":"ARMED"}),y.jsx("path",{d:"M310 107 H328",stroke:"#fb923c",strokeWidth:1.2})]}),y.jsxs("g",{children:[y.jsx("rect",{x:434,y:88,width:44,height:56,rx:8,fill:t==="dead"?"rgba(239,68,68,0.28)":"rgba(16,185,129,0.14)",stroke:t==="dead"?"#ef4444":"#10b981",strokeWidth:1.2}),y.jsx("text",{x:438,y:104,fill:t==="dead"?"#fecaca":"#6ee7b7",fontSize:6,className:"mono",children:"HCN"}),y.jsx("text",{x:438,y:112,fill:t==="dead"?"#fecaca":"#6ee7b7",fontSize:6,className:"mono",children:"VIAL"}),y.jsx("path",{d:"M 442 122 Q 456 130 470 122",stroke:t==="dead"?"#fecaca":"#6ee7b7",strokeWidth:1,fill:"none",opacity:t==="dead"?.9:.4,style:{strokeDasharray:t==="dead"?"0":"2 3"}}),t==="dead"&&y.jsx("text",{x:456,y:138,textAnchor:"middle",fill:"#fecaca",fontSize:6,className:"mono",children:"SHATTERED"}),y.jsx("path",{d:"M414 107 H434",stroke:"#fb923c",strokeWidth:1.2})]}),y.jsxs("g",{children:[y.jsx("rect",{x:28,y:190,width:450,height:148,rx:16,fill:t==="superposed"?"rgba(255,255,255,0.04)":t==="alive"?"rgba(16,185,129,0.10)":t==="dead"?"rgba(239,68,68,0.10)":"rgba(15,23,42,0.5)",stroke:t==="alive"?"#10b981":t==="dead"?"#ef4444":"rgba(255,255,255,0.14)",strokeWidth:1.4}),y.jsx("text",{x:36,y:206,fill:"#e2e8f0",fontSize:9,className:"mono",children:"CAT CHAMBER · SEALED · NO DECOHERENCE UNTIL MEASURED"}),y.jsx("text",{x:248,y:278,textAnchor:"middle",fontSize:t==="superposed"?56:68,style:{filter:t==="superposed"?"blur(0.3px) brightness(1.1)":"",opacity:t==="superposed"?.92:1,transition:"all 0.4s"},children:t==="superposed"?"🐱":t==="alive"?"😸":t==="dead"?"😵":"📦"}),t==="superposed"&&y.jsxs(y.Fragment,{children:[y.jsx("text",{x:248,y:300,textAnchor:"middle",fill:"#f472b6",fontSize:8,className:"mono",children:"|ψ_cat⟩ = (|alive⟩ + |dead⟩)/√2"}),y.jsxs("g",{opacity:.75,children:[y.jsx("text",{x:180,y:250,fill:"#22d3ee",fontSize:10,children:"😺"}),y.jsx("text",{x:300,y:250,fill:"#f87171",fontSize:10,children:"💀"}),y.jsx("path",{d:"M200 255 Q248 235 296 255",fill:"none",stroke:"url(#grad)",strokeWidth:1.2,strokeDasharray:"4 3"})]})]}),t==="measuring"&&y.jsx("text",{x:248,y:300,textAnchor:"middle",fill:"#fde68a",fontSize:9,className:"mono",children:"DECOHERING… ENTANGLING WITH APPARATUS"}),t==="alive"&&y.jsx("text",{x:248,y:302,textAnchor:"middle",fill:"#6ee7b7",fontSize:9,className:"mono",children:"COLLAPSED → |alive⟩ · NO DECAY OBSERVED"}),t==="dead"&&y.jsx("text",{x:248,y:298,textAnchor:"middle",fill:"#fecaca",fontSize:9,className:"mono",children:"COLLAPSED → |dead⟩ · WORLD BURNS"}),t==="dead"&&y.jsx("text",{x:248,y:312,textAnchor:"middle",fill:"#f87171",fontSize:7,className:"mono",children:"nuclear ash · hymn to Virgil: facilis descensus Averno"}),y.jsx("path",{d:"M108 168 V190",stroke:"#a78bfa",strokeWidth:1,strokeDasharray:"5 4",opacity:.6}),y.jsx("path",{d:"M456 144 V190",stroke:t==="dead"?"#ef4444":"#10b981",strokeWidth:1,strokeDasharray:"5 4",opacity:.65})]}),y.jsxs("g",{children:[y.jsx("rect",{x:496,y:48,width:132,height:290,rx:12,fill:"rgba(255,255,255,0.05)",stroke:"rgba(255,255,255,0.08)"}),y.jsx("text",{x:506,y:66,fill:"#e2e8f0",fontSize:8,className:"mono",children:"PHYSICS"}),y.jsx("text",{x:506,y:80,fill:"#94a3b8",fontSize:6,className:"mono",children:"U(t)=exp(-iHt/ħ) · unitary"}),y.jsx("text",{x:506,y:92,fill:"#94a3b8",fontSize:6,className:"mono",children:"measurement = projection"}),y.jsx("text",{x:506,y:108,fill:"#f472b6",fontSize:7,className:"mono",children:"Born rule: |α|²=|β|²=½"}),y.jsx("text",{x:506,y:124,fill:"#22d3ee",fontSize:7,className:"mono",children:"atom → Geiger entangled"}),y.jsx("text",{x:506,y:136,fill:"#a78bfa",fontSize:7,className:"mono",children:"cat entangled → macro"}),y.jsx("text",{x:506,y:152,fill:"#fde68a",fontSize:7,className:"mono",children:"observer collapses"}),y.jsx("line",{x1:506,y1:162,x2:618,y2:162,stroke:"rgba(255,255,255,0.08)"}),y.jsx("text",{x:506,y:176,fill:"#94a3b8",fontSize:6,className:"mono",children:"TRIAL STATS"}),y.jsxs("text",{x:506,y:190,fill:"#6ee7b7",fontSize:9,className:"mono",children:["ALIVE ",i.alive]}),y.jsxs("text",{x:566,y:190,fill:"#f87171",fontSize:9,className:"mono",children:["DEAD ",i.dead]}),y.jsxs("text",{x:506,y:204,fill:"#cbd5e1",fontSize:7,className:"mono",children:["N=",o," · expect 50/50"]})]}),y.jsx("defs",{children:y.jsxs("linearGradient",{id:"grad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[y.jsx("stop",{offset:"0%",stopColor:"#22d3ee"}),y.jsx("stop",{offset:"100%",stopColor:"#f472b6"})]})})]})}),y.jsxs("div",{style:{display:"flex",gap:8,marginTop:12,flexWrap:"wrap"},children:[t==="ready"&&y.jsx("button",{onClick:l,className:"avery-btn avery-btn-primary",children:"⚡ Arm atom — seal box"}),t==="arming"&&y.jsx("span",{className:"mono",style:{fontSize:12,padding:"10px 0",color:"#fde68a"},children:"Sealing… evacuating decoherence…"}),t==="superposed"&&y.jsx("button",{onClick:c,className:"avery-btn avery-btn-primary",children:"👁️ Measure — open box"}),t==="measuring"&&y.jsx("span",{className:"mono",style:{fontSize:12,padding:"10px 0",color:"#fde68a"},children:"Collapsing wavefunction…"}),(t==="alive"||t==="dead")&&y.jsx("button",{onClick:f,className:"avery-btn avery-btn-ghost",children:"↺ New run — re-prepare |ψ⟩"}),o>0&&y.jsx("button",{onClick:()=>r({alive:0,dead:0}),className:"avery-btn",style:{background:"transparent",color:"#94a3b8",border:"1px solid rgba(148,163,184,0.25)"},children:"Reset stats"})]})]}),y.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[y.jsxs("div",{className:"glass",style:{borderRadius:16,padding:14},children:[y.jsx("div",{className:"mono",style:{fontSize:10,letterSpacing:2,opacity:.7},children:"WAVEFUNCTION"}),y.jsxs("div",{className:"mono",style:{fontSize:11,marginTop:6,lineHeight:1.6},children:[y.jsx("span",{style:{color:"#f472b6"},children:"|ψ(t)⟩"})," = α(t)|not decayed⟩|alive⟩ + β(t)|decayed⟩|dead⟩",y.jsx("br",{}),y.jsxs("span",{style:{opacity:.6},children:["α = e",y.jsx("sup",{children:"-λt/2"}),", |α|² = e",y.jsx("sup",{children:"-λt"}),", |β|² = 1-e",y.jsx("sup",{children:"-λt"})]}),y.jsx("br",{}),y.jsx("span",{style:{opacity:.6},children:"Half-life 1s ⇒ λ=ln2≈0.693 s⁻¹. At t=1s, P=½."})]}),y.jsxs("div",{style:{marginTop:10,height:54,background:"rgba(0,0,0,0.35)",borderRadius:10,padding:6,display:"flex",alignItems:"center",gap:6},children:[y.jsxs("div",{style:{flex:1,height:8,borderRadius:6,background:"#0f172a",overflow:"hidden",display:"flex"},children:[y.jsx("div",{style:{width:`${t==="alive"?100:t==="dead"?0:50}%`,background:"linear-gradient(90deg,#10b981,#22d3ee)",transition:"width 0.6s"}}),y.jsx("div",{style:{flex:1,background:"linear-gradient(90deg,#ef4444,#f472b6)",transition:"width 0.6s",opacity:t==="superposed"?.9:t==="alive"?.15:t==="dead"?1:.9}})]}),y.jsxs("div",{className:"mono",style:{fontSize:10,minWidth:64,textAlign:"right"},children:[y.jsx("span",{style:{color:"#34d399"},children:t==="alive"?"100%":t==="dead"?"0%":"50%"}),y.jsx("span",{style:{opacity:.5},children:" / "}),y.jsx("span",{style:{color:"#f87171"},children:t==="dead"?"100%":t==="alive"?"0%":"50%"})]})]}),y.jsxs("div",{style:{marginTop:8,display:"flex",gap:6},children:[y.jsxs("span",{className:"mono",style:{fontSize:10,padding:"4px 8px",borderRadius:20,background:"rgba(16,185,129,0.14)",color:"#6ee7b7",border:"1px solid rgba(16,185,129,0.3)"},children:["alive ",i.alive]}),y.jsxs("span",{className:"mono",style:{fontSize:10,padding:"4px 8px",borderRadius:20,background:"rgba(239,68,68,0.14)",color:"#fecaca",border:"1px solid rgba(239,68,68,0.3)"},children:["dead ",i.dead]}),y.jsxs("span",{className:"mono",style:{fontSize:10,padding:"4px 8px",borderRadius:20,background:"rgba(255,255,255,0.06)",color:"#cbd5e1"},children:["N=",o]})]})]}),y.jsxs("div",{className:"glass",style:{borderRadius:16,padding:14},children:[y.jsx("div",{className:"mono",style:{fontSize:10,letterSpacing:2,opacity:.7},children:"WHAT YOU'RE SEEING"}),y.jsxs("ul",{style:{margin:"8px 0 0",paddingLeft:16,fontSize:12,lineHeight:1.5,opacity:.85},children:[y.jsxs("li",{children:[y.jsx("strong",{children:"Atom chamber:"})," single ²¹⁰Po nucleus. α-decay is quantum tunneling — truly random, no hidden variable. Orbitals shimmer while superposed."]}),y.jsxs("li",{children:[y.jsx("strong",{children:"Geiger + relay + vial:"})," decay → avalanche → hammer shatters HCN. Chain is unitary until you look."]}),y.jsxs("li",{children:[y.jsx("strong",{children:"Cat:"})," entangled with atom. Not “unknown” — ",y.jsx("em",{children:"undetermined"}),". Measurement projects to |alive⟩ or |dead⟩ with Born probabilities."]}),y.jsxs("li",{children:[y.jsx("strong",{children:"Repeat:"})," each run re-prepares |ψ⟩. Over many trials, ~50/50. No memory."]})]})]}),y.jsxs("div",{className:"glass",style:{borderRadius:16,padding:12,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsx("div",{className:"mono",style:{fontSize:10,opacity:.6},children:"Avery’s lab • punk-rock liquid glass • neon cyber-physics"}),y.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:t==="superposed"?"#f472b6":t==="alive"?"#10b981":t==="dead"?"#ef4444":"#334155",boxShadow:`0 0 10px ${t==="superposed"?"#ec4899":t==="alive"?"#10b981":t==="dead"?"#ef4444":"transparent"}`,animation:t!=="ready"?"glowPulse 1s infinite":""}})]})]})]})]})]})]})}function sb(){var r,s,a,o,l,c,f,h,d,p,g,E,m,u,v,M,S,A,w,R,_,b,P,L,B,q,ee,z,K,V;const[t,e]=gt.useState(null),[n,i]=gt.useState(null);return gt.useEffect(()=>{fetch("/ml/validate.json").then(D=>D.json()).then(e).catch(()=>fetch("./ml/validate.json").then(D=>D.json()).then(e).catch(D=>i(String(D)))),t||fetch("/docs/ml/validate.json").then(D=>D.json()).then(e).catch(()=>{})},[]),gt.useEffect(()=>{t||fetch("ml/validate.json").then(D=>D.json()).then(e).catch(()=>{})},[t]),y.jsxs(Sr,{title:"",children:[y.jsx("style",{children:".ml-root{margin:0 -24px; padding:24px; background:#f8fafc} .ml-shell{max-width:1100px; margin:0 auto} .mono{font-family:'JetBrains Mono',monospace}"}),y.jsx("div",{className:"ml-root",children:y.jsxs("div",{className:"ml-shell",children:[y.jsx("div",{className:"mono",style:{fontSize:10,letterSpacing:2,color:"#6366f1"},children:"ML LAB — TREASURY · YIELD CURVE · P/E · M2 · DXY · OIL · GOLD · SILVER · GSR · REIT · REPO · 200MA"}),y.jsx("div",{style:{fontSize:26,fontWeight:800,letterSpacing:"-0.02em"},children:"SPY & NVDA — next-day NN"}),y.jsxs("p",{style:{fontSize:13,color:"#475569"},children:["17-feature MLP 32×16 — adds ",y.jsx("strong",{children:"P/E (SPY 27.7, NVDA ~35)"})," and ",y.jsx("strong",{children:"10Y−2Y curve"}),". Trained 5y, validate holdout. WASM via JSON."]}),n&&y.jsxs("div",{style:{color:"#ef4444",fontSize:12},children:["Load failed: ",n," — run ",y.jsx("code",{children:"python3 ml/train.py"})," to regenerate ml/*.json"]}),t?y.jsxs(y.Fragment,{children:[y.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginTop:16},children:[y.jsxs("div",{style:{background:"#fff",border:"1px solid #e2e8f0",borderRadius:14,padding:16},children:[y.jsx("div",{style:{fontWeight:700},children:"Traditional — what inputs say"}),y.jsxs("div",{className:"mono",style:{fontSize:11,marginTop:8,lineHeight:1.7,color:"#334155"},children:["Yield curve ",y.jsxs("strong",{style:{color:((r=t.traditional)==null?void 0:r.yield_curve)>0?"#10b981":"#ef4444"},children:[(a=(s=t.traditional)==null?void 0:s.yield_curve)==null?void 0:a.toFixed(2),"% ",(o=t.traditional)!=null&&o.curve_inv?" (inverted!)":""]})," — ",((l=t.traditional)==null?void 0:l.yield_curve)>0?"upward, risk-on":"inverted, caution",y.jsx("br",{}),"P/E SPY ",y.jsx("strong",{children:(f=(c=t.traditional)==null?void 0:c.pe_spy)==null?void 0:f.toFixed(1)})," ",y.jsxs("span",{style:{color:((h=t.traditional)==null?void 0:h.pe_spy_z)>1?"#ef4444":"#64748b"},children:["(z ",(p=(d=t.traditional)==null?void 0:d.pe_spy_z)==null?void 0:p.toFixed(2),")"]})," — ",((g=t.traditional)==null?void 0:g.pe_spy_z)>1?"rich":"fair",y.jsx("br",{}),"SPY vs 200MA ",y.jsxs("strong",{children:[(((E=t.traditional)==null?void 0:E.spy_vs_200)*100).toFixed(1),"%"]})," — ",((m=t.traditional)==null?void 0:m.spy_vs_200)>.05?"extended":((u=t.traditional)==null?void 0:u.spy_vs_200)>0?"above":"below",y.jsx("br",{}),"DXY ",y.jsx("strong",{children:(M=(v=t.traditional)==null?void 0:v.dxy)==null?void 0:M.toFixed(1)})]}),y.jsxs("svg",{viewBox:"0 0 300 60",style:{width:"100%",height:60,marginTop:8,background:"#f8fafc",borderRadius:8},children:[y.jsxs("text",{x:8,y:12,fontSize:7,className:"mono",fill:"#64748b",children:["10Y-2Y curve (last 5y proxy, now ",(A=(S=t.traditional)==null?void 0:S.yield_curve)==null?void 0:A.toFixed(2),"%)"]}),y.jsx("line",{x1:20,y1:30,x2:280,y2:30,stroke:"#e2e8f0"}),y.jsx("line",{x1:150,y1:20,x2:150,y2:40,stroke:"#10b981",strokeDasharray:"3 3"}),y.jsxs("text",{x:150,y:50,textAnchor:"middle",fontSize:6,className:"mono",fill:"#10b981",children:["today ",((w=t.traditional)==null?void 0:w.yield_curve)>0?"+":"",(_=(R=t.traditional)==null?void 0:R.yield_curve)==null?void 0:_.toFixed(2),"%"]}),y.jsx("circle",{cx:150+((b=t.traditional)==null?void 0:b.yield_curve)*40,cy:30,r:4,fill:((P=t.traditional)==null?void 0:P.yield_curve)>0?"#10b981":"#ef4444"})]})]}),y.jsxs("div",{style:{background:"#0f172a",color:"#e2e8f0",borderRadius:14,padding:16},children:[y.jsx("div",{className:"mono",style:{fontSize:11,color:"#22d3ee"},children:"ML TOTAL EVALUATION"}),y.jsxs("div",{style:{display:"flex",gap:12,marginTop:8},children:[y.jsxs("div",{children:[y.jsx("div",{className:"mono",style:{fontSize:10,color:"#94a3b8"},children:"SPY"}),y.jsxs("div",{style:{fontSize:20,fontWeight:800},children:["$",(L=t.pred_px_spy)==null?void 0:L.toFixed(2)," ",y.jsxs("span",{style:{fontSize:11,color:t.pred_ret_spy>0?"#34d399":"#f87171"},children:[(t.pred_ret_spy*100).toFixed(2),"%"]})]})]}),y.jsxs("div",{children:[y.jsx("div",{className:"mono",style:{fontSize:10,color:"#94a3b8"},children:"NVDA"}),y.jsxs("div",{style:{fontSize:20,fontWeight:800},children:["$",(B=t.pred_px_nvda)==null?void 0:B.toFixed(2)," ",y.jsxs("span",{style:{fontSize:11,color:t.pred_ret_nvda>0?"#34d399":"#f87171"},children:[(t.pred_ret_nvda*100).toFixed(2),"%"]})]})]})]}),y.jsxs("div",{className:"mono",style:{fontSize:10,marginTop:8,color:t.hold?"#34d399":"#f87171"},children:[t.hold?"✓ HOLD — MAE ok, toy signal":"✗ HOLD FAILED — MAE too high, toy only (not trading)"," · MAE SPY ",(t.mae_spy*100).toFixed(1),"% NVDA ",(t.mae_nvda*100).toFixed(1),"%"]}),y.jsxs("div",{className:"mono",style:{fontSize:10,marginTop:6,opacity:.6},children:["close SPY ",(q=t.last_close_spy)==null?void 0:q.toFixed(2)," / NVDA ",(ee=t.last_close_nvda)==null?void 0:ee.toFixed(2)," · ",t.n_train," train / ",t.n_test," test · ",t.pred_date]})]})]}),y.jsxs("div",{className:"mono",style:{fontSize:10,marginTop:10,color:"#64748b"},children:["Traditional said: curve ",((z=t.traditional)==null?void 0:z.yield_curve)>0?"steep":"flat/inverted",", P/E ",(V=(K=t.traditional)==null?void 0:K.pe_spy)==null?void 0:V.toFixed(1)," — ML blends all 17 feats (treasury, P/E, DXY, gold… ) into one number above. Backtest must be green before this becomes more than a toy."]})]}):y.jsx("div",{className:"mono",style:{fontSize:12,color:"#64748b",marginTop:12},children:"Loading ml/validate.json…"}),y.jsxs("div",{style:{marginTop:16,fontSize:12,color:"#475569"},children:["Full feature list in ",y.jsx("code",{children:"ml/meta.json"})," — includes yield curve, monetary supply (M2 proxy via SHV), DXY, oil, gold, silver, GSR, real estate (VNQ), repo (SHV), VOO/SPY vs 200MA. Add more via ",y.jsx("code",{children:"TICKERS"})," in ",y.jsx("code",{children:"ml/train.py"}),"."]})]})})]})}function ab(){return y.jsx(Sr,{title:"Contact",children:y.jsx("p",{children:"Contact page scaffold."})})}function ob(){return y.jsx(Sr,{title:"Links",children:y.jsx("p",{children:"Links page scaffold."})})}function lb(){return y.jsx(Sr,{title:"Code",children:y.jsx("p",{children:"Code/projects page scaffold."})})}function cb(){return y.jsx(Sr,{title:"More",children:y.jsx("p",{children:"Extra page scaffold."})})}function ub(){return y.jsx(Sr,{title:"Not Found",children:y.jsx("p",{children:"That page does not exist."})})}kv(document.getElementById("root")).render(y.jsx(gt.StrictMode,{children:y.jsx(p1,{children:y.jsxs(o1,{children:[y.jsx(oi,{path:"/",element:y.jsx(nb,{})}),y.jsx(oi,{path:"/kenton",element:y.jsx(ib,{})}),y.jsx(oi,{path:"/avery",element:y.jsx(rb,{})}),y.jsx(oi,{path:"/ml",element:y.jsx(sb,{})}),y.jsx(oi,{path:"/contact",element:y.jsx(ab,{})}),y.jsx(oi,{path:"/links",element:y.jsx(ob,{})}),y.jsx(oi,{path:"/code",element:y.jsx(lb,{})}),y.jsx(oi,{path:"/more",element:y.jsx(cb,{})}),y.jsx(oi,{path:"*",element:y.jsx(ub,{})})]})})}));
