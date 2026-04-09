(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function tl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ht={},Qi=[],vn=()=>{},vu=()=>!1,Ys=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),nl=n=>n.startsWith("onUpdate:"),Ot=Object.assign,il=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},_h=Object.prototype.hasOwnProperty,nt=(n,e)=>_h.call(n,e),We=Array.isArray,er=n=>$s(n)==="[object Map]",Su=n=>$s(n)==="[object Set]",qe=n=>typeof n=="function",vt=n=>typeof n=="string",hi=n=>typeof n=="symbol",dt=n=>n!==null&&typeof n=="object",Mu=n=>(dt(n)||qe(n))&&qe(n.then)&&qe(n.catch),Eu=Object.prototype.toString,$s=n=>Eu.call(n),xh=n=>$s(n).slice(8,-1),yu=n=>$s(n)==="[object Object]",rl=n=>vt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Cr=tl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ks=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},vh=/-\w/g,ci=Ks(n=>n.replace(vh,e=>e.slice(1).toUpperCase())),Sh=/\B([A-Z])/g,Li=Ks(n=>n.replace(Sh,"-$1").toLowerCase()),bu=Ks(n=>n.charAt(0).toUpperCase()+n.slice(1)),la=Ks(n=>n?`on${bu(n)}`:""),oi=(n,e)=>!Object.is(n,e),ca=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Tu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Mh=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Xl;const js=()=>Xl||(Xl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sl(n){if(We(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=vt(i)?Th(i):sl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(vt(n)||dt(n))return n}const Eh=/;(?![^(]*\))/g,yh=/:([^]+)/,bh=/\/\*[^]*?\*\//g;function Th(n){const e={};return n.replace(bh,"").split(Eh).forEach(t=>{if(t){const i=t.split(yh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function al(n){let e="";if(vt(n))e=n;else if(We(n))for(let t=0;t<n.length;t++){const i=al(n[t]);i&&(e+=i+" ")}else if(dt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ah="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wh=tl(Ah);function Au(n){return!!n||n===""}const wu=n=>!!(n&&n.__v_isRef===!0),Ts=n=>vt(n)?n:n==null?"":We(n)||dt(n)&&(n.toString===Eu||!qe(n.toString))?wu(n)?Ts(n.value):JSON.stringify(n,Ru,2):String(n),Ru=(n,e)=>wu(e)?Ru(n,e.value):er(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[ua(i,s)+" =>"]=r,t),{})}:Su(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ua(t))}:hi(e)?ua(e):dt(e)&&!We(e)&&!yu(e)?String(e):e,ua=(n,e="")=>{var t;return hi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let Gt;class Cu{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Gt,!e&&Gt&&(this.index=(Gt.scopes||(Gt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Gt;try{return Gt=this,e()}finally{Gt=t}}}on(){++this._on===1&&(this.prevScope=Gt,Gt=this)}off(){this._on>0&&--this._on===0&&(Gt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Rh(n){return new Cu(n)}function Ch(){return Gt}let ft;const fa=new WeakSet;class Pu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Gt&&Gt.active&&Gt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fa.has(this)&&(fa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Lu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ql(this),Iu(this);const e=ft,t=on;ft=this,on=!0;try{return this.fn()}finally{Uu(this),ft=e,on=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)cl(e);this.deps=this.depsTail=void 0,ql(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ja(this)&&this.run()}get dirty(){return ja(this)}}let Du=0,Pr,Dr;function Lu(n,e=!1){if(n.flags|=8,e){n.next=Dr,Dr=n;return}n.next=Pr,Pr=n}function ol(){Du++}function ll(){if(--Du>0)return;if(Dr){let e=Dr;for(Dr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Pr;){let e=Pr;for(Pr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Iu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Uu(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),cl(i),Ph(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function ja(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Nu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Nu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Br)||(n.globalVersion=Br,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ja(n))))return;n.flags|=2;const e=n.dep,t=ft,i=on;ft=n,on=!0;try{Iu(n);const r=n.fn(n._value);(e.version===0||oi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ft=t,on=i,Uu(n),n.flags&=-3}}function cl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)cl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Ph(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let on=!0;const Fu=[];function Gn(){Fu.push(on),on=!1}function Hn(){const n=Fu.pop();on=n===void 0?!0:n}function ql(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ft;ft=void 0;try{e()}finally{ft=t}}}let Br=0;class Dh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ul{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ft||!on||ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ft)t=this.activeLink=new Dh(ft,this),ft.deps?(t.prevDep=ft.depsTail,ft.depsTail.nextDep=t,ft.depsTail=t):ft.deps=ft.depsTail=t,Ou(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ft.depsTail,t.nextDep=void 0,ft.depsTail.nextDep=t,ft.depsTail=t,ft.deps===t&&(ft.deps=i)}return t}trigger(e){this.version++,Br++,this.notify(e)}notify(e){ol();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ll()}}}function Ou(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Ou(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Za=new WeakMap,Ci=Symbol(""),Ja=Symbol(""),zr=Symbol("");function At(n,e,t){if(on&&ft){let i=Za.get(n);i||Za.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new ul),r.map=i,r.key=t),r.track()}}function Nn(n,e,t,i,r,s){const a=Za.get(n);if(!a){Br++;return}const o=l=>{l&&l.trigger()};if(ol(),e==="clear")a.forEach(o);else{const l=We(n),c=l&&rl(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===zr||!hi(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(zr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Ci)),er(n)&&o(a.get(Ja)));break;case"delete":l||(o(a.get(Ci)),er(n)&&o(a.get(Ja)));break;case"set":er(n)&&o(a.get(Ci));break}}ll()}function Ui(n){const e=tt(n);return e===n?e:(At(e,"iterate",zr),ln(n)?e:e.map(kn))}function fl(n){return At(n=tt(n),"iterate",zr),n}function ti(n,e){return ui(n)?tr(n)?Vr(kn(e)):Vr(e):kn(e)}const Lh={__proto__:null,[Symbol.iterator](){return ha(this,Symbol.iterator,n=>ti(this,n))},concat(...n){return Ui(this).concat(...n.map(e=>We(e)?Ui(e):e))},entries(){return ha(this,"entries",n=>(n[1]=ti(this,n[1]),n))},every(n,e){return Rn(this,"every",n,e,void 0,arguments)},filter(n,e){return Rn(this,"filter",n,e,t=>t.map(i=>ti(this,i)),arguments)},find(n,e){return Rn(this,"find",n,e,t=>ti(this,t),arguments)},findIndex(n,e){return Rn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Rn(this,"findLast",n,e,t=>ti(this,t),arguments)},findLastIndex(n,e){return Rn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Rn(this,"forEach",n,e,void 0,arguments)},includes(...n){return da(this,"includes",n)},indexOf(...n){return da(this,"indexOf",n)},join(n){return Ui(this).join(n)},lastIndexOf(...n){return da(this,"lastIndexOf",n)},map(n,e){return Rn(this,"map",n,e,void 0,arguments)},pop(){return _r(this,"pop")},push(...n){return _r(this,"push",n)},reduce(n,...e){return Yl(this,"reduce",n,e)},reduceRight(n,...e){return Yl(this,"reduceRight",n,e)},shift(){return _r(this,"shift")},some(n,e){return Rn(this,"some",n,e,void 0,arguments)},splice(...n){return _r(this,"splice",n)},toReversed(){return Ui(this).toReversed()},toSorted(n){return Ui(this).toSorted(n)},toSpliced(...n){return Ui(this).toSpliced(...n)},unshift(...n){return _r(this,"unshift",n)},values(){return ha(this,"values",n=>ti(this,n))}};function ha(n,e,t){const i=fl(n),r=i[e]();return i!==n&&!ln(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Ih=Array.prototype;function Rn(n,e,t,i,r,s){const a=fl(n),o=a!==n&&!ln(n),l=a[e];if(l!==Ih[e]){const f=l.apply(n,s);return o?kn(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,ti(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function Yl(n,e,t,i){const r=fl(n);let s=t;return r!==n&&(ln(n)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,n)}):s=function(a,o,l){return t.call(this,a,ti(n,o),l,n)}),r[e](s,...i)}function da(n,e,t){const i=tt(n);At(i,"iterate",zr);const r=i[e](...t);return(r===-1||r===!1)&&ml(t[0])?(t[0]=tt(t[0]),i[e](...t)):r}function _r(n,e,t=[]){Gn(),ol();const i=tt(n)[e].apply(n,t);return ll(),Hn(),i}const Uh=tl("__proto__,__v_isRef,__isVue"),Bu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(hi));function Nh(n){hi(n)||(n=String(n));const e=tt(this);return At(e,"has",n),e.hasOwnProperty(n)}class zu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Xh:ku:s?Hu:Gu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=We(e);if(!r){let l;if(a&&(l=Lh[t]))return l;if(t==="hasOwnProperty")return Nh}const o=Reflect.get(e,t,Rt(e)?e:i);if((hi(t)?Bu.has(t):Uh(t))||(r||At(e,"get",t),s))return o;if(Rt(o)){const l=a&&rl(t)?o:o.value;return r&&dt(l)?eo(l):l}return dt(o)?r?eo(o):dl(o):o}}class Vu extends zu{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=We(e)&&rl(t);if(!this._isShallow){const c=ui(s);if(!ln(i)&&!ui(i)&&(s=tt(s),i=tt(i)),!a&&Rt(s)&&!Rt(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:nt(e,t),l=Reflect.set(e,t,i,Rt(e)?e:r);return e===tt(r)&&(o?oi(i,s)&&Nn(e,"set",t,i):Nn(e,"add",t,i)),l}deleteProperty(e,t){const i=nt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Nn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!hi(t)||!Bu.has(t))&&At(e,"has",t),i}ownKeys(e){return At(e,"iterate",We(e)?"length":Ci),Reflect.ownKeys(e)}}class Fh extends zu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Oh=new Vu,Bh=new Fh,zh=new Vu(!0);const Qa=n=>n,ts=n=>Reflect.getPrototypeOf(n);function Vh(n,e,t){return function(...i){const r=this.__v_raw,s=tt(r),a=er(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Qa:e?Vr:kn;return!e&&At(s,"iterate",l?Ja:Ci),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ns(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Gh(n,e){const t={get(r){const s=this.__v_raw,a=tt(s),o=tt(r);n||(oi(r,o)&&At(a,"get",r),At(a,"get",o));const{has:l}=ts(a),c=e?Qa:n?Vr:kn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&At(tt(r),"iterate",Ci),r.size},has(r){const s=this.__v_raw,a=tt(s),o=tt(r);return n||(oi(r,o)&&At(a,"has",r),At(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=tt(o),c=e?Qa:n?Vr:kn;return!n&&At(l,"iterate",Ci),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return Ot(t,n?{add:ns("add"),set:ns("set"),delete:ns("delete"),clear:ns("clear")}:{add(r){!e&&!ln(r)&&!ui(r)&&(r=tt(r));const s=tt(this);return ts(s).has.call(s,r)||(s.add(r),Nn(s,"add",r,r)),this},set(r,s){!e&&!ln(s)&&!ui(s)&&(s=tt(s));const a=tt(this),{has:o,get:l}=ts(a);let c=o.call(a,r);c||(r=tt(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?oi(s,u)&&Nn(a,"set",r,s):Nn(a,"add",r,s),this},delete(r){const s=tt(this),{has:a,get:o}=ts(s);let l=a.call(s,r);l||(r=tt(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Nn(s,"delete",r,void 0),c},clear(){const r=tt(this),s=r.size!==0,a=r.clear();return s&&Nn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Vh(r,n,e)}),t}function hl(n,e){const t=Gh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(nt(t,r)&&r in i?t:i,r,s)}const Hh={get:hl(!1,!1)},kh={get:hl(!1,!0)},Wh={get:hl(!0,!1)};const Gu=new WeakMap,Hu=new WeakMap,ku=new WeakMap,Xh=new WeakMap;function qh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yh(n){return n.__v_skip||!Object.isExtensible(n)?0:qh(xh(n))}function dl(n){return ui(n)?n:pl(n,!1,Oh,Hh,Gu)}function $h(n){return pl(n,!1,zh,kh,Hu)}function eo(n){return pl(n,!0,Bh,Wh,ku)}function pl(n,e,t,i,r){if(!dt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Yh(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function tr(n){return ui(n)?tr(n.__v_raw):!!(n&&n.__v_isReactive)}function ui(n){return!!(n&&n.__v_isReadonly)}function ln(n){return!!(n&&n.__v_isShallow)}function ml(n){return n?!!n.__v_raw:!1}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function Wu(n){return!nt(n,"__v_skip")&&Object.isExtensible(n)&&Tu(n,"__v_skip",!0),n}const kn=n=>dt(n)?dl(n):n,Vr=n=>dt(n)?eo(n):n;function Rt(n){return n?n.__v_isRef===!0:!1}function Ji(n){return Kh(n,!1)}function Kh(n,e){return Rt(n)?n:new jh(n,e)}class jh{constructor(e,t){this.dep=new ul,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:tt(e),this._value=t?e:kn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||ln(e)||ui(e);e=i?e:tt(e),oi(e,t)&&(this._rawValue=e,this._value=i?e:kn(e),this.dep.trigger())}}function Ki(n){return Rt(n)?n.value:n}const Zh={get:(n,e,t)=>e==="__v_raw"?n:Ki(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Rt(r)&&!Rt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Xu(n){return tr(n)?n:new Proxy(n,Zh)}class Jh{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ul(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Br-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ft!==this)return Lu(this,!0),!0}get value(){const e=this.dep.track();return Nu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Qh(n,e,t=!1){let i,r;return qe(n)?i=n:(i=n.get,r=n.set),new Jh(i,r,t)}const is={},Os=new WeakMap;let yi;function ed(n,e=!1,t=yi){if(t){let i=Os.get(t);i||Os.set(t,i=[]),i.push(n)}}function td(n,e,t=ht){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=b=>r?b:ln(b)||r===!1||r===0?ri(b,1):ri(b);let u,f,h,m,_=!1,S=!1;if(Rt(n)?(f=()=>n.value,_=ln(n)):tr(n)?(f=()=>c(n),_=!0):We(n)?(S=!0,_=n.some(b=>tr(b)||ln(b)),f=()=>n.map(b=>{if(Rt(b))return b.value;if(tr(b))return c(b);if(qe(b))return l?l(b,2):b()})):qe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Gn();try{h()}finally{Hn()}}const b=yi;yi=u;try{return l?l(n,3,[m]):n(m)}finally{yi=b}}:f=vn,e&&r){const b=f,R=r===!0?1/0:r;f=()=>ri(b(),R)}const g=Ch(),d=()=>{u.stop(),g&&g.active&&il(g.effects,u)};if(s&&e){const b=e;e=(...R)=>{b(...R),d()}}let T=S?new Array(n.length).fill(is):is;const A=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const R=u.run();if(r||_||(S?R.some((D,L)=>oi(D,T[L])):oi(R,T))){h&&h();const D=yi;yi=u;try{const L=[R,T===is?void 0:S&&T[0]===is?[]:T,m];T=R,l?l(e,3,L):e(...L)}finally{yi=D}}}else u.run()};return o&&o(A),u=new Pu(f),u.scheduler=a?()=>a(A,!1):A,m=b=>ed(b,!1,u),h=u.onStop=()=>{const b=Os.get(u);if(b){if(l)l(b,4);else for(const R of b)R();Os.delete(u)}},e?i?A(!0):T=u.run():a?a(A.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function ri(n,e=1/0,t){if(e<=0||!dt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Rt(n))ri(n.value,e,t);else if(We(n))for(let i=0;i<n.length;i++)ri(n[i],e,t);else if(Su(n)||er(n))n.forEach(i=>{ri(i,e,t)});else if(yu(n)){for(const i in n)ri(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ri(n[i],e,t)}return n}function Kr(n,e,t,i){try{return i?n(...i):n()}catch(r){Zs(r,e,t)}}function yn(n,e,t,i){if(qe(n)){const r=Kr(n,e,t,i);return r&&Mu(r)&&r.catch(s=>{Zs(s,e,t)}),r}if(We(n)){const r=[];for(let s=0;s<n.length;s++)r.push(yn(n[s],e,t,i));return r}}function Zs(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ht;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){Gn(),Kr(s,null,10,[n,l,c]),Hn();return}}nd(n,t,r,i,a)}function nd(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Ut=[];let hn=-1;const nr=[];let ni=null,ji=0;const qu=Promise.resolve();let Bs=null;function id(n){const e=Bs||qu;return n?e.then(this?n.bind(this):n):e}function rd(n){let e=hn+1,t=Ut.length;for(;e<t;){const i=e+t>>>1,r=Ut[i],s=Gr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function gl(n){if(!(n.flags&1)){const e=Gr(n),t=Ut[Ut.length-1];!t||!(n.flags&2)&&e>=Gr(t)?Ut.push(n):Ut.splice(rd(e),0,n),n.flags|=1,Yu()}}function Yu(){Bs||(Bs=qu.then(Ku))}function sd(n){We(n)?nr.push(...n):ni&&n.id===-1?ni.splice(ji+1,0,n):n.flags&1||(nr.push(n),n.flags|=1),Yu()}function $l(n,e,t=hn+1){for(;t<Ut.length;t++){const i=Ut[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ut.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function $u(n){if(nr.length){const e=[...new Set(nr)].sort((t,i)=>Gr(t)-Gr(i));if(nr.length=0,ni){ni.push(...e);return}for(ni=e,ji=0;ji<ni.length;ji++){const t=ni[ji];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ni=null,ji=0}}const Gr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ku(n){try{for(hn=0;hn<Ut.length;hn++){const e=Ut[hn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Kr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;hn<Ut.length;hn++){const e=Ut[hn];e&&(e.flags&=-2)}hn=-1,Ut.length=0,$u(),Bs=null,(Ut.length||nr.length)&&Ku()}}let gn=null,ju=null;function zs(n){const e=gn;return gn=n,ju=n&&n.type.__scopeId||null,e}function ad(n,e=gn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&rc(-1);const s=zs(e);let a;try{a=n(...r)}finally{zs(s),i._d&&rc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function mi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Gn(),yn(l,t,8,[n.el,o,n,e]),Hn())}}function od(n,e){if(Nt){let t=Nt.provides;const i=Nt.parent&&Nt.parent.provides;i===t&&(t=Nt.provides=Object.create(i)),t[n]=e}}function As(n,e,t=!1){const i=sp();if(i||ir){let r=ir?ir._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&qe(e)?e.call(i&&i.proxy):e}}const ld=Symbol.for("v-scx"),cd=()=>As(ld);function pa(n,e,t){return Zu(n,e,t)}function Zu(n,e,t=ht){const{immediate:i,deep:r,flush:s,once:a}=t,o=Ot({},t),l=e&&i||!e&&s!=="post";let c;if(kr){if(s==="sync"){const m=cd();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=vn,m.resume=vn,m.pause=vn,m}}const u=Nt;o.call=(m,_,S)=>yn(m,u,_,S);let f=!1;s==="post"?o.scheduler=m=>{$t(m,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(m,_)=>{_?m():gl(m)}),o.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const h=td(n,e,o);return kr&&(c?c.push(h):l&&h()),h}function ud(n,e,t){const i=this.proxy,r=vt(n)?n.includes(".")?Ju(i,n):()=>i[n]:n.bind(i,i);let s;qe(e)?s=e:(s=e.handler,t=e);const a=jr(this),o=Zu(r,s.bind(i),t);return a(),o}function Ju(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const fd=Symbol("_vte"),hd=n=>n.__isTeleport,dd=Symbol("_leaveCb");function _l(n,e){n.shapeFlag&6&&n.component?(n.transition=e,_l(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Qu(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Vs=new WeakMap;function Lr(n,e,t,i,r=!1){if(We(n)){n.forEach((_,S)=>Lr(_,e&&(We(e)?e[S]:e),t,i,r));return}if(Ir(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Lr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Ml(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===ht?o.refs={}:o.refs,f=o.setupState,h=tt(f),m=f===ht?vu:_=>nt(h,_);if(c!=null&&c!==l){if(Kl(e),vt(c))u[c]=null,m(c)&&(f[c]=null);else if(Rt(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(qe(l))Kr(l,o,12,[a,u]);else{const _=vt(l),S=Rt(l);if(_||S){const g=()=>{if(n.f){const d=_?m(l)?f[l]:u[l]:l.value;if(r)We(d)&&il(d,s);else if(We(d))d.includes(s)||d.push(s);else if(_)u[l]=[s],m(l)&&(f[l]=u[l]);else{const T=[s];l.value=T,n.k&&(u[n.k]=T)}}else _?(u[l]=a,m(l)&&(f[l]=a)):S&&(l.value=a,n.k&&(u[n.k]=a))};if(a){const d=()=>{g(),Vs.delete(n)};d.id=-1,Vs.set(n,d),$t(d,t)}else Kl(n),g()}}}function Kl(n){const e=Vs.get(n);e&&(e.flags|=8,Vs.delete(n))}js().requestIdleCallback;js().cancelIdleCallback;const Ir=n=>!!n.type.__asyncLoader,ef=n=>n.type.__isKeepAlive;function pd(n,e){tf(n,"a",e)}function md(n,e){tf(n,"da",e)}function tf(n,e,t=Nt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Js(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ef(r.parent.vnode)&&gd(i,e,t,r),r=r.parent}}function gd(n,e,t,i){const r=Js(e,n,i,!0);sf(()=>{il(i[e],r)},t)}function Js(n,e,t=Nt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Gn();const o=jr(t),l=yn(e,t,n,a);return o(),Hn(),l});return i?r.unshift(s):r.push(s),s}}const Yn=n=>(e,t=Nt)=>{(!kr||n==="sp")&&Js(n,(...i)=>e(...i),t)},_d=Yn("bm"),nf=Yn("m"),xd=Yn("bu"),vd=Yn("u"),rf=Yn("bum"),sf=Yn("um"),Sd=Yn("sp"),Md=Yn("rtg"),Ed=Yn("rtc");function yd(n,e=Nt){Js("ec",n,e)}const bd=Symbol.for("v-ndc"),to=n=>n?bf(n)?Ml(n):to(n.parent):null,Ur=Ot(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>to(n.parent),$root:n=>to(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>of(n),$forceUpdate:n=>n.f||(n.f=()=>{gl(n.update)}),$nextTick:n=>n.n||(n.n=id.bind(n.proxy)),$watch:n=>ud.bind(n)}),ma=(n,e)=>n!==ht&&!n.__isScriptSetup&&nt(n,e),Td={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ma(i,e))return a[e]=1,i[e];if(r!==ht&&nt(r,e))return a[e]=2,r[e];if(nt(s,e))return a[e]=3,s[e];if(t!==ht&&nt(t,e))return a[e]=4,t[e];no&&(a[e]=0)}}const c=Ur[e];let u,f;if(c)return e==="$attrs"&&At(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==ht&&nt(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,nt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return ma(r,e)?(r[e]=t,!0):i!==ht&&nt(i,e)?(i[e]=t,!0):nt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==ht&&o[0]!=="$"&&nt(n,o)||ma(e,o)||nt(s,o)||nt(i,o)||nt(Ur,o)||nt(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:nt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function jl(n){return We(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let no=!0;function Ad(n){const e=of(n),t=n.proxy,i=n.ctx;no=!1,e.beforeCreate&&Zl(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:_,activated:S,deactivated:g,beforeDestroy:d,beforeUnmount:T,destroyed:A,unmounted:b,render:R,renderTracked:D,renderTriggered:L,errorCaptured:V,serverPrefetch:M,expose:E,inheritAttrs:I,components:$,directives:k,filters:ie}=e;if(c&&wd(c,i,null),a)for(const F in a){const Z=a[F];qe(Z)&&(i[F]=Z.bind(t))}if(r){const F=r.call(t,t);dt(F)&&(n.data=dl(F))}if(no=!0,s)for(const F in s){const Z=s[F],de=qe(Z)?Z.bind(t,t):qe(Z.get)?Z.get.bind(t,t):vn,he=!qe(Z)&&qe(Z.set)?Z.set.bind(t):vn,ge=fp({get:de,set:he});Object.defineProperty(i,F,{enumerable:!0,configurable:!0,get:()=>ge.value,set:Fe=>ge.value=Fe})}if(o)for(const F in o)af(o[F],i,t,F);if(l){const F=qe(l)?l.call(t):l;Reflect.ownKeys(F).forEach(Z=>{od(Z,F[Z])})}u&&Zl(u,n,"c");function q(F,Z){We(Z)?Z.forEach(de=>F(de.bind(t))):Z&&F(Z.bind(t))}if(q(_d,f),q(nf,h),q(xd,m),q(vd,_),q(pd,S),q(md,g),q(yd,V),q(Ed,D),q(Md,L),q(rf,T),q(sf,b),q(Sd,M),We(E))if(E.length){const F=n.exposed||(n.exposed={});E.forEach(Z=>{Object.defineProperty(F,Z,{get:()=>t[Z],set:de=>t[Z]=de,enumerable:!0})})}else n.exposed||(n.exposed={});R&&n.render===vn&&(n.render=R),I!=null&&(n.inheritAttrs=I),$&&(n.components=$),k&&(n.directives=k),M&&Qu(n)}function wd(n,e,t=vn){We(n)&&(n=io(n));for(const i in n){const r=n[i];let s;dt(r)?"default"in r?s=As(r.from||i,r.default,!0):s=As(r.from||i):s=As(r),Rt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Zl(n,e,t){yn(We(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function af(n,e,t,i){let r=i.includes(".")?Ju(t,i):()=>t[i];if(vt(n)){const s=e[n];qe(s)&&pa(r,s)}else if(qe(n))pa(r,n.bind(t));else if(dt(n))if(We(n))n.forEach(s=>af(s,e,t,i));else{const s=qe(n.handler)?n.handler.bind(t):e[n.handler];qe(s)&&pa(r,s,n)}}function of(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Gs(l,c,a,!0)),Gs(l,e,a)),dt(e)&&s.set(e,l),l}function Gs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Gs(n,s,t,!0),r&&r.forEach(a=>Gs(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Rd[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Rd={data:Jl,props:Ql,emits:Ql,methods:Tr,computed:Tr,beforeCreate:Dt,created:Dt,beforeMount:Dt,mounted:Dt,beforeUpdate:Dt,updated:Dt,beforeDestroy:Dt,beforeUnmount:Dt,destroyed:Dt,unmounted:Dt,activated:Dt,deactivated:Dt,errorCaptured:Dt,serverPrefetch:Dt,components:Tr,directives:Tr,watch:Pd,provide:Jl,inject:Cd};function Jl(n,e){return e?n?function(){return Ot(qe(n)?n.call(this,this):n,qe(e)?e.call(this,this):e)}:e:n}function Cd(n,e){return Tr(io(n),io(e))}function io(n){if(We(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Dt(n,e){return n?[...new Set([].concat(n,e))]:e}function Tr(n,e){return n?Ot(Object.create(null),n,e):e}function Ql(n,e){return n?We(n)&&We(e)?[...new Set([...n,...e])]:Ot(Object.create(null),jl(n),jl(e??{})):e}function Pd(n,e){if(!n)return e;if(!e)return n;const t=Ot(Object.create(null),n);for(const i in e)t[i]=Dt(n[i],e[i]);return t}function lf(){return{app:null,config:{isNativeTag:vu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dd=0;function Ld(n,e){return function(i,r=null){qe(i)||(i=Ot({},i)),r!=null&&!dt(r)&&(r=null);const s=lf(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:Dd++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:hp,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&qe(u.install)?(a.add(u),u.install(c,...f)):qe(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const m=c._ceVNode||li(i,r);return m.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(m,u,h),l=!0,c._container=u,u.__vue_app__=c,Ml(m.component)}},onUnmount(u){o.push(u)},unmount(){l&&(yn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=ir;ir=c;try{return u()}finally{ir=f}}};return c}}let ir=null;const Id=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ci(e)}Modifiers`]||n[`${Li(e)}Modifiers`];function Ud(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ht;let r=t;const s=e.startsWith("update:"),a=s&&Id(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>vt(u)?u.trim():u)),a.number&&(r=t.map(Mh)));let o,l=i[o=la(e)]||i[o=la(ci(e))];!l&&s&&(l=i[o=la(Li(e))]),l&&yn(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,yn(c,n,6,r)}}const Nd=new WeakMap;function cf(n,e,t=!1){const i=t?Nd:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!qe(n)){const l=c=>{const u=cf(c,e,!0);u&&(o=!0,Ot(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(dt(n)&&i.set(n,null),null):(We(s)?s.forEach(l=>a[l]=null):Ot(a,s),dt(n)&&i.set(n,a),a)}function Qs(n,e){return!n||!Ys(e)?!1:(e=e.slice(2).replace(/Once$/,""),nt(n,e[0].toLowerCase()+e.slice(1))||nt(n,Li(e))||nt(n,e))}function ec(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:m,ctx:_,inheritAttrs:S}=n,g=zs(n);let d,T;try{if(t.shapeFlag&4){const b=r||i,R=b;d=pn(c.call(R,b,u,f,m,h,_)),T=o}else{const b=e;d=pn(b.length>1?b(f,{attrs:o,slots:a,emit:l}):b(f,null)),T=e.props?o:Fd(o)}}catch(b){Nr.length=0,Zs(b,n,1),d=li(ar)}let A=d;if(T&&S!==!1){const b=Object.keys(T),{shapeFlag:R}=A;b.length&&R&7&&(s&&b.some(nl)&&(T=Od(T,s)),A=or(A,T,!1,!0))}return t.dirs&&(A=or(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&_l(A,t.transition),d=A,zs(g),d}const Fd=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ys(t))&&((e||(e={}))[t]=n[t]);return e},Od=(n,e)=>{const t={};for(const i in n)(!nl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Bd(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?tc(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!Qs(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?tc(i,a,c):!0:!!a;return!1}function tc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Qs(t,s))return!0}return!1}function zd({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const uf={},ff=()=>Object.create(uf),hf=n=>Object.getPrototypeOf(n)===uf;function Vd(n,e,t,i=!1){const r={},s=ff();n.propsDefaults=Object.create(null),df(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:$h(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Gd(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=tt(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Qs(n.emitsOptions,h))continue;const m=e[h];if(l)if(nt(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const _=ci(h);r[_]=ro(l,o,_,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{df(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!nt(e,f)&&((u=Li(f))===f||!nt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=ro(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!nt(e,f))&&(delete s[f],c=!0)}c&&Nn(n.attrs,"set","")}function df(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Cr(l))continue;const c=e[l];let u;r&&nt(r,u=ci(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Qs(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=tt(t),c=o||ht;for(let u=0;u<s.length;u++){const f=s[u];t[f]=ro(r,l,f,c[f],n,!nt(c,f))}}return a}function ro(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=nt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&qe(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=jr(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Li(t))&&(i=!0))}return i}const Hd=new WeakMap;function pf(n,e,t=!1){const i=t?Hd:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!qe(n)){const u=f=>{l=!0;const[h,m]=pf(f,e,!0);Ot(a,h),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return dt(n)&&i.set(n,Qi),Qi;if(We(s))for(let u=0;u<s.length;u++){const f=ci(s[u]);nc(f)&&(a[f]=ht)}else if(s)for(const u in s){const f=ci(u);if(nc(f)){const h=s[u],m=a[f]=We(h)||qe(h)?{type:h}:Ot({},h),_=m.type;let S=!1,g=!0;if(We(_))for(let d=0;d<_.length;++d){const T=_[d],A=qe(T)&&T.name;if(A==="Boolean"){S=!0;break}else A==="String"&&(g=!1)}else S=qe(_)&&_.name==="Boolean";m[0]=S,m[1]=g,(S||nt(m,"default"))&&o.push(f)}}const c=[a,o];return dt(n)&&i.set(n,c),c}function nc(n){return n[0]!=="$"&&!Cr(n)}const xl=n=>n==="_"||n==="_ctx"||n==="$stable",vl=n=>We(n)?n.map(pn):[pn(n)],kd=(n,e,t)=>{if(e._n)return e;const i=ad((...r)=>vl(e(...r)),t);return i._c=!1,i},mf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(xl(r))continue;const s=n[r];if(qe(s))e[r]=kd(r,s,i);else if(s!=null){const a=vl(s);e[r]=()=>a}}},gf=(n,e)=>{const t=vl(e);n.slots.default=()=>t},_f=(n,e,t)=>{for(const i in e)(t||!xl(i))&&(n[i]=e[i])},Wd=(n,e,t)=>{const i=n.slots=ff();if(n.vnode.shapeFlag&32){const r=e._;r?(_f(i,e,t),t&&Tu(i,"_",r,!0)):mf(e,i)}else e&&gf(n,e)},Xd=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=ht;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:_f(r,e,t):(s=!e.$stable,mf(e,r)),a=e}else e&&(gf(n,e),a={default:1});if(s)for(const o in r)!xl(o)&&a[o]==null&&delete r[o]},$t=jd;function qd(n){return Yd(n)}function Yd(n,e){const t=js();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=vn,insertStaticContent:_}=n,S=(w,P,z,Q=null,Y=null,te=null,y=void 0,oe=null,re=!!P.dynamicChildren)=>{if(w===P)return;w&&!xr(w,P)&&(Q=ne(w),Fe(w,Y,te,!0),w=null),P.patchFlag===-2&&(re=!1,P.dynamicChildren=null);const{type:J,ref:se,shapeFlag:x}=P;switch(J){case ea:g(w,P,z,Q);break;case ar:d(w,P,z,Q);break;case _a:w==null&&T(P,z,Q,y);break;case dn:$(w,P,z,Q,Y,te,y,oe,re);break;default:x&1?R(w,P,z,Q,Y,te,y,oe,re):x&6?k(w,P,z,Q,Y,te,y,oe,re):(x&64||x&128)&&J.process(w,P,z,Q,Y,te,y,oe,re,Re)}se!=null&&Y?Lr(se,w&&w.ref,te,P||w,!P):se==null&&w&&w.ref!=null&&Lr(w.ref,null,te,w,!0)},g=(w,P,z,Q)=>{if(w==null)i(P.el=o(P.children),z,Q);else{const Y=P.el=w.el;P.children!==w.children&&c(Y,P.children)}},d=(w,P,z,Q)=>{w==null?i(P.el=l(P.children||""),z,Q):P.el=w.el},T=(w,P,z,Q)=>{[w.el,w.anchor]=_(w.children,P,z,Q,w.el,w.anchor)},A=({el:w,anchor:P},z,Q)=>{let Y;for(;w&&w!==P;)Y=h(w),i(w,z,Q),w=Y;i(P,z,Q)},b=({el:w,anchor:P})=>{let z;for(;w&&w!==P;)z=h(w),r(w),w=z;r(P)},R=(w,P,z,Q,Y,te,y,oe,re)=>{if(P.type==="svg"?y="svg":P.type==="math"&&(y="mathml"),w==null)D(P,z,Q,Y,te,y,oe,re);else{const J=w.el&&w.el._isVueCE?w.el:null;try{J&&J._beginPatch(),M(w,P,Y,te,y,oe,re)}finally{J&&J._endPatch()}}},D=(w,P,z,Q,Y,te,y,oe)=>{let re,J;const{props:se,shapeFlag:x,transition:p,dirs:C}=w;if(re=w.el=a(w.type,te,se&&se.is,se),x&8?u(re,w.children):x&16&&V(w.children,re,null,Q,Y,ga(w,te),y,oe),C&&mi(w,null,Q,"created"),L(re,w,w.scopeId,y,Q),se){for(const j in se)j!=="value"&&!Cr(j)&&s(re,j,null,se[j],te,Q);"value"in se&&s(re,"value",null,se.value,te),(J=se.onVnodeBeforeMount)&&un(J,Q,w)}C&&mi(w,null,Q,"beforeMount");const G=$d(Y,p);G&&p.beforeEnter(re),i(re,P,z),((J=se&&se.onVnodeMounted)||G||C)&&$t(()=>{J&&un(J,Q,w),G&&p.enter(re),C&&mi(w,null,Q,"mounted")},Y)},L=(w,P,z,Q,Y)=>{if(z&&m(w,z),Q)for(let te=0;te<Q.length;te++)m(w,Q[te]);if(Y){let te=Y.subTree;if(P===te||Mf(te.type)&&(te.ssContent===P||te.ssFallback===P)){const y=Y.vnode;L(w,y,y.scopeId,y.slotScopeIds,Y.parent)}}},V=(w,P,z,Q,Y,te,y,oe,re=0)=>{for(let J=re;J<w.length;J++){const se=w[J]=oe?ii(w[J]):pn(w[J]);S(null,se,P,z,Q,Y,te,y,oe)}},M=(w,P,z,Q,Y,te,y)=>{const oe=P.el=w.el;let{patchFlag:re,dynamicChildren:J,dirs:se}=P;re|=w.patchFlag&16;const x=w.props||ht,p=P.props||ht;let C;if(z&&gi(z,!1),(C=p.onVnodeBeforeUpdate)&&un(C,z,P,w),se&&mi(P,w,z,"beforeUpdate"),z&&gi(z,!0),(x.innerHTML&&p.innerHTML==null||x.textContent&&p.textContent==null)&&u(oe,""),J?E(w.dynamicChildren,J,oe,z,Q,ga(P,Y),te):y||Z(w,P,oe,null,z,Q,ga(P,Y),te,!1),re>0){if(re&16)I(oe,x,p,z,Y);else if(re&2&&x.class!==p.class&&s(oe,"class",null,p.class,Y),re&4&&s(oe,"style",x.style,p.style,Y),re&8){const G=P.dynamicProps;for(let j=0;j<G.length;j++){const B=G[j],Ee=x[B],ce=p[B];(ce!==Ee||B==="value")&&s(oe,B,Ee,ce,Y,z)}}re&1&&w.children!==P.children&&u(oe,P.children)}else!y&&J==null&&I(oe,x,p,z,Y);((C=p.onVnodeUpdated)||se)&&$t(()=>{C&&un(C,z,P,w),se&&mi(P,w,z,"updated")},Q)},E=(w,P,z,Q,Y,te,y)=>{for(let oe=0;oe<P.length;oe++){const re=w[oe],J=P[oe],se=re.el&&(re.type===dn||!xr(re,J)||re.shapeFlag&198)?f(re.el):z;S(re,J,se,null,Q,Y,te,y,!0)}},I=(w,P,z,Q,Y)=>{if(P!==z){if(P!==ht)for(const te in P)!Cr(te)&&!(te in z)&&s(w,te,P[te],null,Y,Q);for(const te in z){if(Cr(te))continue;const y=z[te],oe=P[te];y!==oe&&te!=="value"&&s(w,te,oe,y,Y,Q)}"value"in z&&s(w,"value",P.value,z.value,Y)}},$=(w,P,z,Q,Y,te,y,oe,re)=>{const J=P.el=w?w.el:o(""),se=P.anchor=w?w.anchor:o("");let{patchFlag:x,dynamicChildren:p,slotScopeIds:C}=P;C&&(oe=oe?oe.concat(C):C),w==null?(i(J,z,Q),i(se,z,Q),V(P.children||[],z,se,Y,te,y,oe,re)):x>0&&x&64&&p&&w.dynamicChildren&&w.dynamicChildren.length===p.length?(E(w.dynamicChildren,p,z,Y,te,y,oe),(P.key!=null||Y&&P===Y.subTree)&&xf(w,P,!0)):Z(w,P,z,se,Y,te,y,oe,re)},k=(w,P,z,Q,Y,te,y,oe,re)=>{P.slotScopeIds=oe,w==null?P.shapeFlag&512?Y.ctx.activate(P,z,Q,y,re):ie(P,z,Q,Y,te,y,re):ee(w,P,re)},ie=(w,P,z,Q,Y,te,y)=>{const oe=w.component=rp(w,Q,Y);if(ef(w)&&(oe.ctx.renderer=Re),ap(oe,!1,y),oe.asyncDep){if(Y&&Y.registerDep(oe,q,y),!w.el){const re=oe.subTree=li(ar);d(null,re,P,z),w.placeholder=re.el}}else q(oe,w,P,z,Y,te,y)},ee=(w,P,z)=>{const Q=P.component=w.component;if(Bd(w,P,z))if(Q.asyncDep&&!Q.asyncResolved){F(Q,P,z);return}else Q.next=P,Q.update();else P.el=w.el,Q.vnode=P},q=(w,P,z,Q,Y,te,y)=>{const oe=()=>{if(w.isMounted){let{next:x,bu:p,u:C,parent:G,vnode:j}=w;{const Le=vf(w);if(Le){x&&(x.el=j.el,F(w,x,y)),Le.asyncDep.then(()=>{w.isUnmounted||oe()});return}}let B=x,Ee;gi(w,!1),x?(x.el=j.el,F(w,x,y)):x=j,p&&ca(p),(Ee=x.props&&x.props.onVnodeBeforeUpdate)&&un(Ee,G,x,j),gi(w,!0);const ce=ec(w),Ae=w.subTree;w.subTree=ce,S(Ae,ce,f(Ae.el),ne(Ae),w,Y,te),x.el=ce.el,B===null&&zd(w,ce.el),C&&$t(C,Y),(Ee=x.props&&x.props.onVnodeUpdated)&&$t(()=>un(Ee,G,x,j),Y)}else{let x;const{el:p,props:C}=P,{bm:G,m:j,parent:B,root:Ee,type:ce}=w,Ae=Ir(P);gi(w,!1),G&&ca(G),!Ae&&(x=C&&C.onVnodeBeforeMount)&&un(x,B,P),gi(w,!0);{Ee.ce&&Ee.ce._def.shadowRoot!==!1&&Ee.ce._injectChildStyle(ce);const Le=w.subTree=ec(w);S(null,Le,z,Q,w,Y,te),P.el=Le.el}if(j&&$t(j,Y),!Ae&&(x=C&&C.onVnodeMounted)){const Le=P;$t(()=>un(x,B,Le),Y)}(P.shapeFlag&256||B&&Ir(B.vnode)&&B.vnode.shapeFlag&256)&&w.a&&$t(w.a,Y),w.isMounted=!0,P=z=Q=null}};w.scope.on();const re=w.effect=new Pu(oe);w.scope.off();const J=w.update=re.run.bind(re),se=w.job=re.runIfDirty.bind(re);se.i=w,se.id=w.uid,re.scheduler=()=>gl(se),gi(w,!0),J()},F=(w,P,z)=>{P.component=w;const Q=w.vnode.props;w.vnode=P,w.next=null,Gd(w,P.props,Q,z),Xd(w,P.children,z),Gn(),$l(w),Hn()},Z=(w,P,z,Q,Y,te,y,oe,re=!1)=>{const J=w&&w.children,se=w?w.shapeFlag:0,x=P.children,{patchFlag:p,shapeFlag:C}=P;if(p>0){if(p&128){he(J,x,z,Q,Y,te,y,oe,re);return}else if(p&256){de(J,x,z,Q,Y,te,y,oe,re);return}}C&8?(se&16&&K(J,Y,te),x!==J&&u(z,x)):se&16?C&16?he(J,x,z,Q,Y,te,y,oe,re):K(J,Y,te,!0):(se&8&&u(z,""),C&16&&V(x,z,Q,Y,te,y,oe,re))},de=(w,P,z,Q,Y,te,y,oe,re)=>{w=w||Qi,P=P||Qi;const J=w.length,se=P.length,x=Math.min(J,se);let p;for(p=0;p<x;p++){const C=P[p]=re?ii(P[p]):pn(P[p]);S(w[p],C,z,null,Y,te,y,oe,re)}J>se?K(w,Y,te,!0,!1,x):V(P,z,Q,Y,te,y,oe,re,x)},he=(w,P,z,Q,Y,te,y,oe,re)=>{let J=0;const se=P.length;let x=w.length-1,p=se-1;for(;J<=x&&J<=p;){const C=w[J],G=P[J]=re?ii(P[J]):pn(P[J]);if(xr(C,G))S(C,G,z,null,Y,te,y,oe,re);else break;J++}for(;J<=x&&J<=p;){const C=w[x],G=P[p]=re?ii(P[p]):pn(P[p]);if(xr(C,G))S(C,G,z,null,Y,te,y,oe,re);else break;x--,p--}if(J>x){if(J<=p){const C=p+1,G=C<se?P[C].el:Q;for(;J<=p;)S(null,P[J]=re?ii(P[J]):pn(P[J]),z,G,Y,te,y,oe,re),J++}}else if(J>p)for(;J<=x;)Fe(w[J],Y,te,!0),J++;else{const C=J,G=J,j=new Map;for(J=G;J<=p;J++){const xe=P[J]=re?ii(P[J]):pn(P[J]);xe.key!=null&&j.set(xe.key,J)}let B,Ee=0;const ce=p-G+1;let Ae=!1,Le=0;const le=new Array(ce);for(J=0;J<ce;J++)le[J]=0;for(J=C;J<=x;J++){const xe=w[J];if(Ee>=ce){Fe(xe,Y,te,!0);continue}let we;if(xe.key!=null)we=j.get(xe.key);else for(B=G;B<=p;B++)if(le[B-G]===0&&xr(xe,P[B])){we=B;break}we===void 0?Fe(xe,Y,te,!0):(le[we-G]=J+1,we>=Le?Le=we:Ae=!0,S(xe,P[we],z,null,Y,te,y,oe,re),Ee++)}const me=Ae?Kd(le):Qi;for(B=me.length-1,J=ce-1;J>=0;J--){const xe=G+J,we=P[xe],pe=P[xe+1],He=xe+1<se?pe.el||Sf(pe):Q;le[J]===0?S(null,we,z,He,Y,te,y,oe,re):Ae&&(B<0||J!==me[B]?ge(we,z,He,2):B--)}}},ge=(w,P,z,Q,Y=null)=>{const{el:te,type:y,transition:oe,children:re,shapeFlag:J}=w;if(J&6){ge(w.component.subTree,P,z,Q);return}if(J&128){w.suspense.move(P,z,Q);return}if(J&64){y.move(w,P,z,Re);return}if(y===dn){i(te,P,z);for(let x=0;x<re.length;x++)ge(re[x],P,z,Q);i(w.anchor,P,z);return}if(y===_a){A(w,P,z);return}if(Q!==2&&J&1&&oe)if(Q===0)oe.beforeEnter(te),i(te,P,z),$t(()=>oe.enter(te),Y);else{const{leave:x,delayLeave:p,afterLeave:C}=oe,G=()=>{w.ctx.isUnmounted?r(te):i(te,P,z)},j=()=>{te._isLeaving&&te[dd](!0),x(te,()=>{G(),C&&C()})};p?p(te,G,j):j()}else i(te,P,z)},Fe=(w,P,z,Q=!1,Y=!1)=>{const{type:te,props:y,ref:oe,children:re,dynamicChildren:J,shapeFlag:se,patchFlag:x,dirs:p,cacheIndex:C}=w;if(x===-2&&(Y=!1),oe!=null&&(Gn(),Lr(oe,null,z,w,!0),Hn()),C!=null&&(P.renderCache[C]=void 0),se&256){P.ctx.deactivate(w);return}const G=se&1&&p,j=!Ir(w);let B;if(j&&(B=y&&y.onVnodeBeforeUnmount)&&un(B,P,w),se&6)Te(w.component,z,Q);else{if(se&128){w.suspense.unmount(z,Q);return}G&&mi(w,null,P,"beforeUnmount"),se&64?w.type.remove(w,P,z,Re,Q):J&&!J.hasOnce&&(te!==dn||x>0&&x&64)?K(J,P,z,!1,!0):(te===dn&&x&384||!Y&&se&16)&&K(re,P,z),Q&&Ve(w)}(j&&(B=y&&y.onVnodeUnmounted)||G)&&$t(()=>{B&&un(B,P,w),G&&mi(w,null,P,"unmounted")},z)},Ve=w=>{const{type:P,el:z,anchor:Q,transition:Y}=w;if(P===dn){ot(z,Q);return}if(P===_a){b(w);return}const te=()=>{r(z),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(w.shapeFlag&1&&Y&&!Y.persisted){const{leave:y,delayLeave:oe}=Y,re=()=>y(z,te);oe?oe(w.el,te,re):re()}else te()},ot=(w,P)=>{let z;for(;w!==P;)z=h(w),r(w),w=z;r(P)},Te=(w,P,z)=>{const{bum:Q,scope:Y,job:te,subTree:y,um:oe,m:re,a:J}=w;ic(re),ic(J),Q&&ca(Q),Y.stop(),te&&(te.flags|=8,Fe(y,w,P,z)),oe&&$t(oe,P),$t(()=>{w.isUnmounted=!0},P)},K=(w,P,z,Q=!1,Y=!1,te=0)=>{for(let y=te;y<w.length;y++)Fe(w[y],P,z,Q,Y)},ne=w=>{if(w.shapeFlag&6)return ne(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const P=h(w.anchor||w.el),z=P&&P[fd];return z?h(z):P};let Se=!1;const Be=(w,P,z)=>{let Q;w==null?P._vnode&&(Fe(P._vnode,null,null,!0),Q=P._vnode.component):S(P._vnode||null,w,P,null,null,null,z),P._vnode=w,Se||(Se=!0,$l(Q),$u(),Se=!1)},Re={p:S,um:Fe,m:ge,r:Ve,mt:ie,mc:V,pc:Z,pbc:E,n:ne,o:n};return{render:Be,hydrate:void 0,createApp:Ld(Be)}}function ga({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function gi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function $d(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function xf(n,e,t=!1){const i=n.children,r=e.children;if(We(i)&&We(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=ii(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&xf(a,o)),o.type===ea&&(o.patchFlag!==-1?o.el=a.el:o.__elIndex=s+(n.type===dn?1:0)),o.type===ar&&!o.el&&(o.el=a.el)}}function Kd(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function vf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:vf(e)}function ic(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Sf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Sf(e.subTree):null}const Mf=n=>n.__isSuspense;function jd(n,e){e&&e.pendingBranch?We(n)?e.effects.push(...n):e.effects.push(n):sd(n)}const dn=Symbol.for("v-fgt"),ea=Symbol.for("v-txt"),ar=Symbol.for("v-cmt"),_a=Symbol.for("v-stc"),Nr=[];let jt=null;function ws(n=!1){Nr.push(jt=n?null:[])}function Zd(){Nr.pop(),jt=Nr[Nr.length-1]||null}let Hr=1;function rc(n,e=!1){Hr+=n,n<0&&jt&&e&&(jt.hasOnce=!0)}function Jd(n){return n.dynamicChildren=Hr>0?jt||Qi:null,Zd(),Hr>0&&jt&&jt.push(n),n}function Rs(n,e,t,i,r,s){return Jd(Vt(n,e,t,i,r,s,!0))}function Ef(n){return n?n.__v_isVNode===!0:!1}function xr(n,e){return n.type===e.type&&n.key===e.key}const yf=({key:n})=>n??null,Cs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?vt(n)||Rt(n)||qe(n)?{i:gn,r:n,k:e,f:!!t}:n:null);function Vt(n,e=null,t=null,i=0,r=null,s=n===dn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&yf(e),ref:e&&Cs(e),scopeId:ju,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:gn};return o?(Sl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=vt(t)?8:16),Hr>0&&!a&&jt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&jt.push(l),l}const li=Qd;function Qd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===bd)&&(n=ar),Ef(n)){const o=or(n,e,!0);return t&&Sl(o,t),Hr>0&&!s&&jt&&(o.shapeFlag&6?jt[jt.indexOf(n)]=o:jt.push(o)),o.patchFlag=-2,o}if(up(n)&&(n=n.__vccOpts),e){e=ep(e);let{class:o,style:l}=e;o&&!vt(o)&&(e.class=al(o)),dt(l)&&(ml(l)&&!We(l)&&(l=Ot({},l)),e.style=sl(l))}const a=vt(n)?1:Mf(n)?128:hd(n)?64:dt(n)?4:qe(n)?2:0;return Vt(n,e,t,i,r,a,s,!0)}function ep(n){return n?ml(n)||hf(n)?Ot({},n):n:null}function or(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?tp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&yf(c),ref:e&&e.ref?t&&s?We(s)?s.concat(Cs(e)):[s,Cs(e)]:Cs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==dn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&or(n.ssContent),ssFallback:n.ssFallback&&or(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&_l(u,l.clone(u)),u}function Ar(n=" ",e=0){return li(ea,null,n,e)}function pn(n){return n==null||typeof n=="boolean"?li(ar):We(n)?li(dn,null,n.slice()):Ef(n)?ii(n):li(ea,null,String(n))}function ii(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:or(n)}function Sl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(We(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Sl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!hf(e)?e._ctx=gn:r===3&&gn&&(gn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:gn},t=32):(e=String(e),i&64?(t=16,e=[Ar(e)]):t=8);n.children=e,n.shapeFlag|=t}function tp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=al([e.class,i.class]));else if(r==="style")e.style=sl([e.style,i.style]);else if(Ys(r)){const s=e[r],a=i[r];a&&s!==a&&!(We(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function un(n,e,t,i=null){yn(n,e,7,[t,i])}const np=lf();let ip=0;function rp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||np,s={uid:ip++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Cu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pf(i,r),emitsOptions:cf(i,r),emit:null,emitted:null,propsDefaults:ht,inheritAttrs:i.inheritAttrs,ctx:ht,data:ht,props:ht,attrs:ht,slots:ht,refs:ht,setupState:ht,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ud.bind(null,s),n.ce&&n.ce(s),s}let Nt=null;const sp=()=>Nt||gn;let Hs,so;{const n=js(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Hs=e("__VUE_INSTANCE_SETTERS__",t=>Nt=t),so=e("__VUE_SSR_SETTERS__",t=>kr=t)}const jr=n=>{const e=Nt;return Hs(n),n.scope.on(),()=>{n.scope.off(),Hs(e)}},sc=()=>{Nt&&Nt.scope.off(),Hs(null)};function bf(n){return n.vnode.shapeFlag&4}let kr=!1;function ap(n,e=!1,t=!1){e&&so(e);const{props:i,children:r}=n.vnode,s=bf(n);Vd(n,i,s,e),Wd(n,r,t||e);const a=s?op(n,e):void 0;return e&&so(!1),a}function op(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Td);const{setup:i}=t;if(i){Gn();const r=n.setupContext=i.length>1?cp(n):null,s=jr(n),a=Kr(i,n,0,[n.props,r]),o=Mu(a);if(Hn(),s(),(o||n.sp)&&!Ir(n)&&Qu(n),o){if(a.then(sc,sc),e)return a.then(l=>{ac(n,l)}).catch(l=>{Zs(l,n,0)});n.asyncDep=a}else ac(n,a)}else Tf(n)}function ac(n,e,t){qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:dt(e)&&(n.setupState=Xu(e)),Tf(n)}function Tf(n,e,t){const i=n.type;n.render||(n.render=i.render||vn);{const r=jr(n);Gn();try{Ad(n)}finally{Hn(),r()}}}const lp={get(n,e){return At(n,"get",""),n[e]}};function cp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,lp),slots:n.slots,emit:n.emit,expose:e}}function Ml(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Xu(Wu(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ur)return Ur[t](n)},has(e,t){return t in e||t in Ur}})):n.proxy}function up(n){return qe(n)&&"__vccOpts"in n}const fp=(n,e)=>Qh(n,e,kr),hp="3.5.26";let ao;const oc=typeof window<"u"&&window.trustedTypes;if(oc)try{ao=oc.createPolicy("vue",{createHTML:n=>n})}catch{}const Af=ao?n=>ao.createHTML(n):n=>n,dp="http://www.w3.org/2000/svg",pp="http://www.w3.org/1998/Math/MathML",Un=typeof document<"u"?document:null,lc=Un&&Un.createElement("template"),mp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Un.createElementNS(dp,n):e==="mathml"?Un.createElementNS(pp,n):t?Un.createElement(n,{is:t}):Un.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Un.createTextNode(n),createComment:n=>Un.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Un.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{lc.innerHTML=Af(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=lc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},gp=Symbol("_vtc");function _p(n,e,t){const i=n[gp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const cc=Symbol("_vod"),xp=Symbol("_vsh"),vp=Symbol(""),Sp=/(?:^|;)\s*display\s*:/;function Mp(n,e,t){const i=n.style,r=vt(t);let s=!1;if(t&&!r){if(e)if(vt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Ps(i,o,"")}else for(const a in e)t[a]==null&&Ps(i,a,"");for(const a in t)a==="display"&&(s=!0),Ps(i,a,t[a])}else if(r){if(e!==t){const a=i[vp];a&&(t+=";"+a),i.cssText=t,s=Sp.test(t)}}else e&&n.removeAttribute("style");cc in n&&(n[cc]=s?i.display:"",n[xp]&&(i.display="none"))}const uc=/\s*!important$/;function Ps(n,e,t){if(We(t))t.forEach(i=>Ps(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Ep(n,e);uc.test(t)?n.setProperty(Li(i),t.replace(uc,""),"important"):n[i]=t}}const fc=["Webkit","Moz","ms"],xa={};function Ep(n,e){const t=xa[e];if(t)return t;let i=ci(e);if(i!=="filter"&&i in n)return xa[e]=i;i=bu(i);for(let r=0;r<fc.length;r++){const s=fc[r]+i;if(s in n)return xa[e]=s}return e}const hc="http://www.w3.org/1999/xlink";function dc(n,e,t,i,r,s=wh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(hc,e.slice(6,e.length)):n.setAttributeNS(hc,e,t):t==null||s&&!Au(t)?n.removeAttribute(e):n.setAttribute(e,s?"":hi(t)?String(t):t)}function pc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Af(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Au(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function yp(n,e,t,i){n.addEventListener(e,t,i)}function bp(n,e,t,i){n.removeEventListener(e,t,i)}const mc=Symbol("_vei");function Tp(n,e,t,i,r=null){const s=n[mc]||(n[mc]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Ap(e);if(i){const c=s[e]=Cp(i,r);yp(n,o,c,l)}else a&&(bp(n,o,a,l),s[e]=void 0)}}const gc=/(?:Once|Passive|Capture)$/;function Ap(n){let e;if(gc.test(n)){e={};let i;for(;i=n.match(gc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Li(n.slice(2)),e]}let va=0;const wp=Promise.resolve(),Rp=()=>va||(wp.then(()=>va=0),va=Date.now());function Cp(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;yn(Pp(i,t.value),e,5,[i])};return t.value=n,t.attached=Rp(),t}function Pp(n,e){if(We(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const _c=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Dp=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?_p(n,i,a):e==="style"?Mp(n,t,i):Ys(e)?nl(e)||Tp(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Lp(n,e,i,a))?(pc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&dc(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!vt(i))?pc(n,ci(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),dc(n,e,i,a))};function Lp(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&_c(e)&&qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return _c(e)&&vt(t)?!1:e in n}const Ip=Ot({patchProp:Dp},mp);let xc;function Up(){return xc||(xc=qd(Ip))}const Np=((...n)=>{const e=Up().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Op(i);if(!r)return;const s=e._component;!qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,Fp(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function Fp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Op(n){return vt(n)?document.querySelector(n):n}const Bp=Symbol();var vc;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(vc||(vc={}));function zp(){const n=Rh(!0),e=n.run(()=>Ji({}));let t=[],i=[];const r=Wu({install(s){r._a=s,s.provide(Bp,r),s.config.globalProperties.$pinia=r,i.forEach(a=>t.push(a)),i=[]},use(s){return this._a?t.push(s):i.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const Vp=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Gp={class:"hud"},Hp={class:"row"},kp={key:0,class:"gameover"},Wp={key:1,class:"hint"},Xp={__name:"GameHUD",props:{score:{type:Number,required:!0},best:{type:Number,required:!0},speed:{type:Number,required:!0},isGameOver:{type:Boolean,required:!0}},setup(n){return(e,t)=>(ws(),Rs("div",Gp,[Vt("div",Hp,[Vt("div",null,[t[2]||(t[2]=Vt("b",null,"Puntuación:",-1)),Ar(" "+Ts(n.score),1)]),Vt("div",null,[t[3]||(t[3]=Vt("b",null,"Récord:",-1)),Ar(" "+Ts(n.best),1)]),Vt("div",null,[t[4]||(t[4]=Vt("b",null,"Velocidad:",-1)),Ar(" "+Ts(n.speed.toFixed(1)),1)])]),n.isGameOver?(ws(),Rs("div",kp,[t[5]||(t[5]=Vt("h2",null,"Game Over",-1)),Vt("button",{onClick:t[0]||(t[0]=i=>e.$emit("restart"))},"Reiniciar"),t[6]||(t[6]=Vt("p",{class:"hint"},"Controles: ← → o A/D para moverte · Espacio para saltar",-1))])):(ws(),Rs("div",Wp,[t[7]||(t[7]=Ar(" Controles: ← → o A/D para moverte · Espacio para saltar ",-1)),Vt("button",{class:"small",onClick:t[1]||(t[1]=i=>e.$emit("restart"))},"Reiniciar")]))]))}},qp=Vp(Xp,[["__scopeId","data-v-1d8c1a86"]]);const El="182",Yp=0,Sc=1,$p=2,Ds=1,Kp=2,wr=3,fi=0,Ht=1,Fn=2,Bn=0,rr=1,Mc=2,Ec=3,yc=4,jp=5,Ti=100,Zp=101,Jp=102,Qp=103,em=104,tm=200,nm=201,im=202,rm=203,oo=204,lo=205,sm=206,am=207,om=208,lm=209,cm=210,um=211,fm=212,hm=213,dm=214,co=0,uo=1,fo=2,lr=3,ho=4,po=5,mo=6,go=7,wf=0,pm=1,mm=2,Sn=0,Rf=1,Cf=2,Pf=3,Df=4,Lf=5,If=6,Uf=7,Nf=300,Pi=301,cr=302,_o=303,xo=304,ta=306,vo=1e3,On=1001,So=1002,yt=1003,gm=1004,rs=1005,wt=1006,Sa=1007,wi=1008,Kt=1009,Ff=1010,Of=1011,Wr=1012,yl=1013,bn=1014,_n=1015,Wn=1016,bl=1017,Tl=1018,Xr=1020,Bf=35902,zf=35899,Vf=1021,Gf=1022,an=1023,Xn=1026,Ri=1027,Hf=1028,Al=1029,ur=1030,wl=1031,Rl=1033,Ls=33776,Is=33777,Us=33778,Ns=33779,Mo=35840,Eo=35841,yo=35842,bo=35843,To=36196,Ao=37492,wo=37496,Ro=37488,Co=37489,Po=37490,Do=37491,Lo=37808,Io=37809,Uo=37810,No=37811,Fo=37812,Oo=37813,Bo=37814,zo=37815,Vo=37816,Go=37817,Ho=37818,ko=37819,Wo=37820,Xo=37821,qo=36492,Yo=36494,$o=36495,Ko=36283,jo=36284,Zo=36285,Jo=36286,_m=3200,kf=0,xm=1,si="",Qt="srgb",fr="srgb-linear",ks="linear",st="srgb",Ni=7680,bc=519,vm=512,Sm=513,Mm=514,Cl=515,Em=516,ym=517,Pl=518,bm=519,Tc=35044,Ac="300 es",xn=2e3,Ws=2001;function Wf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Xs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Tm(){const n=Xs("canvas");return n.style.display="block",n}const wc={};function Rc(...n){const e="THREE."+n.shift();console.log(e,...n)}function ze(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Qe(...n){const e="THREE."+n.shift();console.error(e,...n)}function qr(...n){const e=n.join(" ");e in wc||(wc[e]=!0,ze(...n))}function Am(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cc=1234567;const Fr=Math.PI/180,Yr=180/Math.PI;function pr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function Dl(n,e){return(n%e+e)%e}function wm(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Rm(n,e,t){return n!==e?(t-n)/(e-n):0}function Or(n,e,t){return(1-t)*n+t*e}function Cm(n,e,t,i){return Or(n,e,1-Math.exp(-t*i))}function Pm(n,e=1){return e-Math.abs(Dl(n,e*2)-e)}function Dm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Lm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Im(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Um(n,e){return n+Math.random()*(e-n)}function Nm(n){return n*(.5-Math.random())}function Fm(n){n!==void 0&&(Cc=n);let e=Cc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Om(n){return n*Fr}function Bm(n){return n*Yr}function zm(n){return(n&n-1)===0&&n!==0}function Vm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Gm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Hm(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),h=a((e-i)/2),m=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*f,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*m,o*u,o*c);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Pc={DEG2RAD:Fr,RAD2DEG:Yr,generateUUID:pr,clamp:Ke,euclideanModulo:Dl,mapLinear:wm,inverseLerp:Rm,lerp:Or,damp:Cm,pingpong:Pm,smoothstep:Dm,smootherstep:Lm,randInt:Im,randFloat:Um,randFloatSpread:Nm,seededRandom:Fm,degToRad:Om,radToDeg:Bm,isPowerOfTwo:zm,ceilPowerOfTwo:Vm,floorPowerOfTwo:Gm,setQuaternionFromProperEuler:Hm,normalize:Lt,denormalize:Zi};class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[a+0],m=s[a+1],_=s[a+2],S=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=S;return}if(f!==S||l!==h||c!==m||u!==_){let g=l*h+c*m+u*_+f*S;g<0&&(h=-h,m=-m,_=-_,S=-S,g=-g);let d=1-o;if(g<.9995){const T=Math.acos(g),A=Math.sin(T);d=Math.sin(d*T)/A,o=Math.sin(o*T)/A,l=l*d+h*o,c=c*d+m*o,u=u*d+_*o,f=f*d+S*o}else{l=l*d+h*o,c=c*d+m*o,u=u*d+_*o,f=f*d+S*o;const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*m-c*h,e[t+1]=l*_+u*h+c*f-o*m,e[t+2]=c*_+u*m+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"YXZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"ZXY":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"ZYX":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"YZX":this._x=h*u*f+c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f-h*m*_;break;case"XZY":this._x=h*u*f-c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f+h*m*_;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ma.copy(this).projectOnVector(e),this.sub(Ma)}reflect(e){return this.sub(Ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new H,Dc=new Zr;class ke{constructor(e,t,i,r,s,a,o,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],_=i[8],S=r[0],g=r[3],d=r[6],T=r[1],A=r[4],b=r[7],R=r[2],D=r[5],L=r[8];return s[0]=a*S+o*T+l*R,s[3]=a*g+o*A+l*D,s[6]=a*d+o*b+l*L,s[1]=c*S+u*T+f*R,s[4]=c*g+u*A+f*D,s[7]=c*d+u*b+f*L,s[2]=h*S+m*T+_*R,s[5]=h*g+m*A+_*D,s[8]=h*d+m*b+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,_=t*f+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=f*S,e[1]=(r*c-u*i)*S,e[2]=(o*i-r*a)*S,e[3]=h*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-o*t)*S,e[6]=m*S,e[7]=(i*l-c*t)*S,e[8]=(a*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ea.makeScale(e,t)),this}rotate(e){return this.premultiply(Ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ea=new ke,Lc=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ic=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function km(){const n={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=zn(r.r),r.g=zn(r.g),r.b=zn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=sr(r.r),r.g=sr(r.g),r.b=sr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===si?ks:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return qr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return qr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[fr]:{primaries:e,whitePoint:i,transfer:ks,toXYZ:Lc,fromXYZ:Ic,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:i,transfer:st,toXYZ:Lc,fromXYZ:Ic,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),n}const je=km();function zn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function sr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Fi;class Wm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Fi===void 0&&(Fi=Xs("canvas")),Fi.width=e.width,Fi.height=e.height;const r=Fi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Fi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=zn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zn(t[i]/255)*255):t[i]=zn(t[i]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xm=0;class Ll{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=pr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ya(r[a].image)):s.push(ya(r[a]))}else s=ya(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ya(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let qm=0;const ba=new H;class Ft extends dr{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=On,r=On,s=wt,a=wi,o=an,l=Kt,c=Ft.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=pr(),this.name="",this.source=new Ll(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ba).x}get height(){return this.source.getSize(ba).y}get depth(){return this.source.getSize(ba).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vo:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case So:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vo:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case So:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Nf;Ft.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],_=l[9],S=l[2],g=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,b=(m+1)/2,R=(d+1)/2,D=(u+h)/4,L=(f+S)/4,V=(_+g)/4;return A>b&&A>R?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=D/i,s=L/i):b>R?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=D/r,s=V/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=L/s,r=V/s),this.set(i,r,s,t),this}let T=Math.sqrt((g-_)*(g-_)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(g-_)/T,this.y=(f-S)/T,this.z=(h-u)/T,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ym extends dr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Ft(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ll(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mn extends Ym{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Xf extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $m extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,tn):tn.fromBufferAttribute(s,a),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ss.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ss.copy(i.boundingBox)),ss.applyMatrix4(e.matrixWorld),this.union(ss)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),as.subVectors(this.max,vr),Oi.subVectors(e.a,vr),Bi.subVectors(e.b,vr),zi.subVectors(e.c,vr),Kn.subVectors(Bi,Oi),jn.subVectors(zi,Bi),_i.subVectors(Oi,zi);let t=[0,-Kn.z,Kn.y,0,-jn.z,jn.y,0,-_i.z,_i.y,Kn.z,0,-Kn.x,jn.z,0,-jn.x,_i.z,0,-_i.x,-Kn.y,Kn.x,0,-jn.y,jn.x,0,-_i.y,_i.x,0];return!Ta(t,Oi,Bi,zi,as)||(t=[1,0,0,0,1,0,0,0,1],!Ta(t,Oi,Bi,zi,as))?!1:(os.crossVectors(Kn,jn),t=[os.x,os.y,os.z],Ta(t,Oi,Bi,zi,as))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Cn=[new H,new H,new H,new H,new H,new H,new H,new H],tn=new H,ss=new Di,Oi=new H,Bi=new H,zi=new H,Kn=new H,jn=new H,_i=new H,vr=new H,as=new H,os=new H,xi=new H;function Ta(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){xi.fromArray(n,s);const o=r.x*Math.abs(xi.x)+r.y*Math.abs(xi.y)+r.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),u=i.dot(xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Km=new Di,Sr=new H,Aa=new H;class Il{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Km.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);const t=Sr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Sr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(Aa)),this.expandByPoint(Sr.copy(e.center).sub(Aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Pn=new H,wa=new H,ls=new H,Zn=new H,Ra=new H,cs=new H,Ca=new H;class jm{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){wa.copy(e).add(t).multiplyScalar(.5),ls.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(wa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ls),o=Zn.dot(this.direction),l=-Zn.dot(ls),c=Zn.lengthSq(),u=Math.abs(1-a*a);let f,h,m,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const S=1/u;f*=S,h*=S,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(wa).addScaledVector(ls,h),m}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const i=Pn.dot(this.direction),r=Pn.dot(Pn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,i,r,s){Ra.subVectors(t,e),cs.subVectors(i,e),Ca.crossVectors(Ra,cs);let a=this.direction.dot(Ca),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zn.subVectors(this.origin,e);const l=o*this.direction.dot(cs.crossVectors(Zn,cs));if(l<0)return null;const c=o*this.direction.dot(Ra.cross(Zn));if(c<0||l+c>a)return null;const u=-o*Zn.dot(Ca);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,i,r,s,a,o,l,c,u,f,h,m,_,S,g){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,m,_,S,g)}set(e,t,i,r,s,a,o,l,c,u,f,h,m,_,S,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=_,d[11]=S,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Vi.setFromMatrixColumn(e,0).length(),s=1/Vi.setFromMatrixColumn(e,1).length(),a=1/Vi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,_=o*u,S=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=h-S*c,t[9]=-o*l,t[2]=S-h*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,_=c*u,S=c*f;t[0]=h+S*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=S+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,_=c*u,S=c*f;t[0]=h-S*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=S-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,_=o*u,S=o*f;t[0]=l*u,t[4]=_*c-m,t[8]=h*c+S,t[1]=l*f,t[5]=S*c+h,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=S-h*f,t[8]=_*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+_,t[10]=h-S*f}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+S,t[5]=a*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*u,t[10]=S*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zm,e,Jm)}lookAt(e,t,i){const r=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Jn.crossVectors(i,qt),Jn.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Jn.crossVectors(i,qt)),Jn.normalize(),us.crossVectors(qt,Jn),r[0]=Jn.x,r[4]=us.x,r[8]=qt.x,r[1]=Jn.y,r[5]=us.y,r[9]=qt.y,r[2]=Jn.z,r[6]=us.z,r[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],_=i[2],S=i[6],g=i[10],d=i[14],T=i[3],A=i[7],b=i[11],R=i[15],D=r[0],L=r[4],V=r[8],M=r[12],E=r[1],I=r[5],$=r[9],k=r[13],ie=r[2],ee=r[6],q=r[10],F=r[14],Z=r[3],de=r[7],he=r[11],ge=r[15];return s[0]=a*D+o*E+l*ie+c*Z,s[4]=a*L+o*I+l*ee+c*de,s[8]=a*V+o*$+l*q+c*he,s[12]=a*M+o*k+l*F+c*ge,s[1]=u*D+f*E+h*ie+m*Z,s[5]=u*L+f*I+h*ee+m*de,s[9]=u*V+f*$+h*q+m*he,s[13]=u*M+f*k+h*F+m*ge,s[2]=_*D+S*E+g*ie+d*Z,s[6]=_*L+S*I+g*ee+d*de,s[10]=_*V+S*$+g*q+d*he,s[14]=_*M+S*k+g*F+d*ge,s[3]=T*D+A*E+b*ie+R*Z,s[7]=T*L+A*I+b*ee+R*de,s[11]=T*V+A*$+b*q+R*he,s[15]=T*M+A*k+b*F+R*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],_=e[3],S=e[7],g=e[11],d=e[15],T=l*m-c*h,A=o*m-c*f,b=o*h-l*f,R=a*m-c*u,D=a*h-l*u,L=a*f-o*u;return t*(S*T-g*A+d*b)-i*(_*T-g*R+d*D)+r*(_*A-S*R+d*L)-s*(_*b-S*D+g*L)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],_=e[12],S=e[13],g=e[14],d=e[15],T=f*g*c-S*h*c+S*l*m-o*g*m-f*l*d+o*h*d,A=_*h*c-u*g*c-_*l*m+a*g*m+u*l*d-a*h*d,b=u*S*c-_*f*c+_*o*m-a*S*m-u*o*d+a*f*d,R=_*f*l-u*S*l-_*o*h+a*S*h+u*o*g-a*f*g,D=t*T+i*A+r*b+s*R;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/D;return e[0]=T*L,e[1]=(S*h*s-f*g*s-S*r*m+i*g*m+f*r*d-i*h*d)*L,e[2]=(o*g*s-S*l*s+S*r*c-i*g*c-o*r*d+i*l*d)*L,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*L,e[4]=A*L,e[5]=(u*g*s-_*h*s+_*r*m-t*g*m-u*r*d+t*h*d)*L,e[6]=(_*l*s-a*g*s-_*r*c+t*g*c+a*r*d-t*l*d)*L,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*m+t*l*m)*L,e[8]=b*L,e[9]=(_*f*s-u*S*s-_*i*m+t*S*m+u*i*d-t*f*d)*L,e[10]=(a*S*s-_*o*s+_*i*c-t*S*c-a*i*d+t*o*d)*L,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*L,e[12]=R*L,e[13]=(u*S*r-_*f*r+_*i*h-t*S*h-u*i*g+t*f*g)*L,e[14]=(_*o*r-a*S*r-_*i*l+t*S*l+a*i*g-t*o*g)*L,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,_=s*f,S=a*u,g=a*f,d=o*f,T=l*c,A=l*u,b=l*f,R=i.x,D=i.y,L=i.z;return r[0]=(1-(S+d))*R,r[1]=(m+b)*R,r[2]=(_-A)*R,r[3]=0,r[4]=(m-b)*D,r[5]=(1-(h+d))*D,r[6]=(g+T)*D,r[7]=0,r[8]=(_+A)*L,r[9]=(g-T)*L,r[10]=(1-(h+S))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=Vi.set(r[0],r[1],r[2]).length();const a=Vi.set(r[4],r[5],r[6]).length(),o=Vi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),nn.copy(this);const c=1/s,u=1/a,f=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=f,nn.elements[9]*=f,nn.elements[10]*=f,t.setFromRotationMatrix(nn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=xn,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),m=(i+r)/(i-r);let _,S;if(l)_=s/(a-s),S=a*s/(a-s);else if(o===xn)_=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===Ws)_=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=xn,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),m=-(i+r)/(i-r);let _,S;if(l)_=1/(a-s),S=a/(a-s);else if(o===xn)_=-2/(a-s),S=-(a+s)/(a-s);else if(o===Ws)_=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Vi=new H,nn=new _t,Zm=new H(0,0,0),Jm=new H(1,1,1),Jn=new H,us=new H,qt=new H,Uc=new _t,Nc=new Zr;class Tn{constructor(e=0,t=0,i=0,r=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class qf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qm=0;const Fc=new H,Gi=new Zr,Dn=new _t,fs=new H,Mr=new H,eg=new H,tg=new Zr,Oc=new H(1,0,0),Bc=new H(0,1,0),zc=new H(0,0,1),Vc={type:"added"},ng={type:"removed"},Hi={type:"childadded",child:null},Pa={type:"childremoved",child:null};class Ct extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new H,t=new Tn,i=new Zr,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new ke}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(Oc,e)}rotateY(e){return this.rotateOnAxis(Bc,e)}rotateZ(e){return this.rotateOnAxis(zc,e)}translateOnAxis(e,t){return Fc.copy(e).applyQuaternion(this.quaternion),this.position.add(Fc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oc,e)}translateY(e){return this.translateOnAxis(Bc,e)}translateZ(e){return this.translateOnAxis(zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fs.copy(e):fs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Mr,fs,this.up):Dn.lookAt(fs,Mr,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),Gi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vc),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ng),Pa.child=e,this.dispatchEvent(Pa),Pa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vc),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,eg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,tg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ct.DEFAULT_UP=new H(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new H,Ln=new H,Da=new H,In=new H,ki=new H,Wi=new H,Gc=new H,La=new H,Ia=new H,Ua=new H,Na=new gt,Fa=new gt,Oa=new gt;class sn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),rn.subVectors(e,t),r.cross(rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){rn.subVectors(r,t),Ln.subVectors(i,t),Da.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(Ln),l=rn.dot(Da),c=Ln.dot(Ln),u=Ln.dot(Da),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Na.setScalar(0),Fa.setScalar(0),Oa.setScalar(0),Na.fromBufferAttribute(e,t),Fa.fromBufferAttribute(e,i),Oa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Na,s.x),a.addScaledVector(Fa,s.y),a.addScaledVector(Oa,s.z),a}static isFrontFacing(e,t,i,r){return rn.subVectors(i,t),Ln.subVectors(e,t),rn.cross(Ln).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),rn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return sn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ki.subVectors(r,i),Wi.subVectors(s,i),La.subVectors(e,i);const l=ki.dot(La),c=Wi.dot(La);if(l<=0&&c<=0)return t.copy(i);Ia.subVectors(e,r);const u=ki.dot(Ia),f=Wi.dot(Ia);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ki,a);Ua.subVectors(e,s);const m=ki.dot(Ua),_=Wi.dot(Ua);if(_>=0&&m<=_)return t.copy(s);const S=m*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Wi,o);const g=u*_-m*f;if(g<=0&&f-u>=0&&m-_>=0)return Gc.subVectors(s,r),o=(f-u)/(f-u+(m-_)),t.copy(r).addScaledVector(Gc,o);const d=1/(g+S+h);return a=S*d,o=h*d,t.copy(i).addScaledVector(ki,a).addScaledVector(Wi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},hs={h:0,s:0,l:0};function Ba(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=Dl(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ba(a,s,e+1/3),this.g=Ba(a,s,e),this.b=Ba(a,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,t=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=Yf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return je.workingToColorSpace(Tt.copy(this),e),Math.round(Ke(Tt.r*255,0,255))*65536+Math.round(Ke(Tt.g*255,0,255))*256+Math.round(Ke(Tt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Tt.copy(this),t);const i=Tt.r,r=Tt.g,s=Tt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Qt){je.workingToColorSpace(Tt.copy(this),e);const t=Tt.r,i=Tt.g,r=Tt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(hs);const i=Or(Qn.h,hs.h,t),r=Or(Qn.s,hs.s,t),s=Or(Qn.l,hs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Ze;Ze.NAMES=Yf;let ig=0;class Jr extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=pr(),this.name="",this.type="Material",this.blending=rr,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oo,this.blendDst=lo,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rr&&(i.blending=this.blending),this.side!==fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oo&&(i.blendSrc=this.blendSrc),this.blendDst!==lo&&(i.blendDst=this.blendDst),this.blendEquation!==Ti&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $f extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new H,ds=new et;let rg=0;class En{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Tc,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ds.fromBufferAttribute(this,t),ds.applyMatrix3(e),this.setXY(t,ds.x,ds.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Zi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tc&&(e.usage=this.usage),e}}class Kf extends En{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class jf extends En{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Vn extends En{constructor(e,t,i){super(new Float32Array(e),t,i)}}let sg=0;const Jt=new _t,za=new Ct,Xi=new H,Yt=new Di,Er=new Di,Et=new H;class $n extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wf(e)?jf:Kf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,i){return Jt.makeTranslation(e,t,i),this.applyMatrix4(Jt),this}scale(e,t,i){return Jt.makeScale(e,t,i),this.applyMatrix4(Jt),this}lookAt(e){return za.lookAt(e),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Vn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Yt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Il);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Er.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Yt.min,Er.min),Yt.expandByPoint(Et),Et.addVectors(Yt.max,Er.max),Yt.expandByPoint(Et)):(Yt.expandByPoint(Er.min),Yt.expandByPoint(Er.max))}Yt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Et.fromBufferAttribute(o,c),l&&(Xi.fromBufferAttribute(e,c),Et.add(Xi)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let V=0;V<i.count;V++)o[V]=new H,l[V]=new H;const c=new H,u=new H,f=new H,h=new et,m=new et,_=new et,S=new H,g=new H;function d(V,M,E){c.fromBufferAttribute(i,V),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,E),h.fromBufferAttribute(s,V),m.fromBufferAttribute(s,M),_.fromBufferAttribute(s,E),u.sub(c),f.sub(c),m.sub(h),_.sub(h);const I=1/(m.x*_.y-_.x*m.y);isFinite(I)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(I),g.copy(f).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(I),o[V].add(S),o[M].add(S),o[E].add(S),l[V].add(g),l[M].add(g),l[E].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let V=0,M=T.length;V<M;++V){const E=T[V],I=E.start,$=E.count;for(let k=I,ie=I+$;k<ie;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const A=new H,b=new H,R=new H,D=new H;function L(V){R.fromBufferAttribute(r,V),D.copy(R);const M=o[V];A.copy(M),A.sub(R.multiplyScalar(R.dot(M))).normalize(),b.crossVectors(D,M);const I=b.dot(l[V])<0?-1:1;a.setXYZW(V,A.x,A.y,A.z,I)}for(let V=0,M=T.length;V<M;++V){const E=T[V],I=E.start,$=E.count;for(let k=I,ie=I+$;k<ie;k+=3)L(e.getX(k+0)),L(e.getX(k+1)),L(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),S=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,g),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*u;for(let d=0;d<u;d++)h[_++]=c[m++]}return new En(h,u,f)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $n,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hc=new _t,vi=new jm,ps=new Il,kc=new H,ms=new H,gs=new H,_s=new H,Va=new H,xs=new H,Wc=new H,vs=new H;class kt extends Ct{constructor(e=new $n,t=new $f){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){xs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Va.fromBufferAttribute(f,e),a?xs.addScaledVector(Va,u):xs.addScaledVector(Va.sub(t),u))}t.add(xs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere),ps.applyMatrix4(s),vi.copy(e.ray).recast(e.near),!(ps.containsPoint(vi.origin)===!1&&(vi.intersectSphere(ps,kc)===null||vi.origin.distanceToSquared(kc)>(e.far-e.near)**2))&&(Hc.copy(s).invert(),vi.copy(e.ray).applyMatrix4(Hc),!(i.boundingBox!==null&&vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const g=h[_],d=a[g.materialIndex],T=Math.max(g.start,m.start),A=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let b=T,R=A;b<R;b+=3){const D=o.getX(b),L=o.getX(b+1),V=o.getX(b+2);r=Ss(this,d,e,i,c,u,f,D,L,V),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let g=_,d=S;g<d;g+=3){const T=o.getX(g),A=o.getX(g+1),b=o.getX(g+2);r=Ss(this,a,e,i,c,u,f,T,A,b),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const g=h[_],d=a[g.materialIndex],T=Math.max(g.start,m.start),A=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let b=T,R=A;b<R;b+=3){const D=b,L=b+1,V=b+2;r=Ss(this,d,e,i,c,u,f,D,L,V),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let g=_,d=S;g<d;g+=3){const T=g,A=g+1,b=g+2;r=Ss(this,a,e,i,c,u,f,T,A,b),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function ag(n,e,t,i,r,s,a,o){let l;if(e.side===Ht?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===fi,o),l===null)return null;vs.copy(o),vs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(vs);return c<t.near||c>t.far?null:{distance:c,point:vs.clone(),object:n}}function Ss(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ms),n.getVertexPosition(l,gs),n.getVertexPosition(c,_s);const u=ag(n,e,t,i,ms,gs,_s,Wc);if(u){const f=new H;sn.getBarycoord(Wc,ms,gs,_s,f),r&&(u.uv=sn.getInterpolatedAttribute(r,o,l,c,f,new et)),s&&(u.uv1=sn.getInterpolatedAttribute(s,o,l,c,f,new et)),a&&(u.normal=sn.getInterpolatedAttribute(a,o,l,c,f,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new H,materialIndex:0};sn.getNormal(ms,gs,_s,h.normal),u.face=h,u.barycoord=f}return u}class qn extends $n{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Vn(c,3)),this.setAttribute("normal",new Vn(u,3)),this.setAttribute("uv",new Vn(f,2));function _(S,g,d,T,A,b,R,D,L,V,M){const E=b/L,I=R/V,$=b/2,k=R/2,ie=D/2,ee=L+1,q=V+1;let F=0,Z=0;const de=new H;for(let he=0;he<q;he++){const ge=he*I-k;for(let Fe=0;Fe<ee;Fe++){const Ve=Fe*E-$;de[S]=Ve*T,de[g]=ge*A,de[d]=ie,c.push(de.x,de.y,de.z),de[S]=0,de[g]=0,de[d]=D>0?1:-1,u.push(de.x,de.y,de.z),f.push(Fe/L),f.push(1-he/V),F+=1}}for(let he=0;he<V;he++)for(let ge=0;ge<L;ge++){const Fe=h+ge+ee*he,Ve=h+ge+ee*(he+1),ot=h+(ge+1)+ee*(he+1),Te=h+(ge+1)+ee*he;l.push(Fe,Ve,Te),l.push(Ve,ot,Te),Z+=6}o.addGroup(m,Z,M),m+=Z,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function It(n){const e={};for(let t=0;t<n.length;t++){const i=hr(n[t]);for(const r in i)e[r]=i[r]}return e}function og(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const lg={clone:hr,merge:It};var cg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ug=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends Jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cg,this.fragmentShader=ug,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=og(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Jf extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new H,Xc=new et,qc=new et;class en extends Jf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ei.x,ei.y).multiplyScalar(-e/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ei.x,ei.y).multiplyScalar(-e/ei.z)}getViewSize(e,t){return this.getViewBounds(e,Xc,qc),t.subVectors(qc,Xc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qi=-90,Yi=1;class fg extends Ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new en(qi,Yi,e,t);r.layers=this.layers,this.add(r);const s=new en(qi,Yi,e,t);s.layers=this.layers,this.add(s);const a=new en(qi,Yi,e,t);a.layers=this.layers,this.add(a);const o=new en(qi,Yi,e,t);o.layers=this.layers,this.add(o);const l=new en(qi,Yi,e,t);l.layers=this.layers,this.add(l);const c=new en(qi,Yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===xn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ws)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Qf extends Ft{constructor(e=[],t=Pi,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eh extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Qf(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new qn(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:Bn});s.uniforms.tEquirect.value=t;const a=new kt(r,s),o=t.minFilter;return t.minFilter===wi&&(t.minFilter=wt),new fg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Ms extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hg={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const g=t.getJointPose(S,i),d=this._getHandJoint(c,S);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ms;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ul{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ze(e),this.near=t,this.far=i}clone(){return new Ul(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class dg extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class pg extends Ft{constructor(e=null,t=1,i=1,r,s,a,o,l,c=yt,u=yt,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ha=new H,mg=new H,gg=new ke;class bi{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ha.subVectors(i,t).cross(mg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ha),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||gg.getNormalMatrix(e),r=this.coplanarPoint(Ha).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new Il,_g=new et(.5,.5),Es=new H;class Nl{constructor(e=new bi,t=new bi,i=new bi,r=new bi,s=new bi,a=new bi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],m=s[7],_=s[8],S=s[9],g=s[10],d=s[11],T=s[12],A=s[13],b=s[14],R=s[15];if(r[0].setComponents(c-a,m-u,d-_,R-T).normalize(),r[1].setComponents(c+a,m+u,d+_,R+T).normalize(),r[2].setComponents(c+o,m+f,d+S,R+A).normalize(),r[3].setComponents(c-o,m-f,d-S,R-A).normalize(),i)r[4].setComponents(l,h,g,b).normalize(),r[5].setComponents(c-l,m-h,d-g,R-b).normalize();else if(r[4].setComponents(c-l,m-h,d-g,R-b).normalize(),t===xn)r[5].setComponents(c+l,m+h,d+g,R+b).normalize();else if(t===Ws)r[5].setComponents(l,h,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){Si.center.set(0,0,0);const t=_g.distanceTo(e.center);return Si.radius=.7071067811865476+t,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Es.x=r.normal.x>0?e.max.x:e.min.x,Es.y=r.normal.y>0?e.max.y:e.min.y,Es.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $r extends Ft{constructor(e,t,i=bn,r,s,a,o=yt,l=yt,c,u=Xn,f=1){if(u!==Xn&&u!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ll(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xg extends $r{constructor(e,t=bn,i=Pi,r,s,a=yt,o=yt,l,c=Xn){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class th extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class na extends $n{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,m=[],_=[],S=[],g=[];for(let d=0;d<u;d++){const T=d*h-a;for(let A=0;A<c;A++){const b=A*f-s;_.push(b,-T,0),S.push(0,0,1),g.push(A/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<o;T++){const A=T+c*d,b=T+c*(d+1),R=T+1+c*(d+1),D=T+1+c*d;m.push(A,b,D),m.push(b,R,D)}this.setIndex(m),this.setAttribute("position",new Vn(_,3)),this.setAttribute("normal",new Vn(S,3)),this.setAttribute("uv",new Vn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.width,e.height,e.widthSegments,e.heightSegments)}}class vg extends An{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qs extends Jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kf,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sg extends Jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_m,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mg extends Jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class nh extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ka=new _t,Yc=new H,$c=new H;class Eg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=Kt,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nl,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Yc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yc),$c.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($c),t.updateMatrixWorld(),ka.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fl extends Jf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class yg extends Eg{constructor(){super(new Fl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bg extends nh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new yg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Tg extends nh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ag extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class wg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Kc(n,e,t,i){const r=Rg(i);switch(t){case Vf:return n*e;case Hf:return n*e/r.components*r.byteLength;case Al:return n*e/r.components*r.byteLength;case ur:return n*e*2/r.components*r.byteLength;case wl:return n*e*2/r.components*r.byteLength;case Gf:return n*e*3/r.components*r.byteLength;case an:return n*e*4/r.components*r.byteLength;case Rl:return n*e*4/r.components*r.byteLength;case Ls:case Is:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Us:case Ns:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Eo:case bo:return Math.max(n,16)*Math.max(e,8)/4;case Mo:case yo:return Math.max(n,8)*Math.max(e,8)/2;case To:case Ao:case Ro:case Co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wo:case Po:case Do:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Io:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case No:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case zo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Vo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Go:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ko:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Wo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Xo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case qo:case Yo:case $o:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ko:case jo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Zo:case Jo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rg(n){switch(n){case Kt:case Ff:return{byteLength:1,components:1};case Wr:case Of:case Wn:return{byteLength:2,components:1};case bl:case Tl:return{byteLength:2,components:4};case bn:case yl:case _n:return{byteLength:4,components:1};case Bf:case zf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:El}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=El);function ih(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Cg(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<f.length;m++){const _=f[h],S=f[m];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,f[h]=S)}f.length=h+1;for(let m=0,_=f.length;m<_;m++){const S=f[m];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Pg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dg=`#ifdef USE_ALPHAHASH
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
#endif`,Lg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ig=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ug=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ng=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fg=`#ifdef USE_AOMAP
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
#endif`,Og=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bg=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kg=`#ifdef USE_IRIDESCENCE
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
#endif`,Wg=`#ifdef USE_BUMPMAP
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
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Qg=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,e_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,t_=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,n_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a_="gl_FragColor = linearToOutputTexel( gl_FragColor );",o_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,c_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,u_=`#ifdef USE_ENVMAP
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
#endif`,f_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,d_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,__=`#ifdef USE_GRADIENTMAP
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
}`,x_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M_=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,E_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,y_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w_=`PhysicalMaterial material;
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
#endif`,R_=`uniform sampler2D dfgLUT;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
}`,C_=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,P_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,D_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,z_=`#if defined( USE_POINTS_UV )
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
#endif`,V_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,G_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X_=`#ifdef USE_MORPHTARGETS
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
#endif`,q_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,K_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,J_=`#ifdef USE_NORMALMAP
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
#endif`,Q_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,r0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,s0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,p0=`float getShadowMask() {
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
}`,m0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g0=`#ifdef USE_SKINNING
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
#endif`,_0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x0=`#ifdef USE_SKINNING
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
#endif`,v0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y0=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,b0=`#ifdef USE_TRANSMISSION
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P0=`uniform sampler2D t2D;
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
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`#include <common>
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
}`,F0=`#if DEPTH_PACKING == 3200
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
}`,O0=`#define DISTANCE
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
}`,B0=`#define DISTANCE
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
void main () {
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`uniform float scale;
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
}`,H0=`uniform vec3 diffuse;
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
}`,k0=`#include <common>
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
}`,W0=`uniform vec3 diffuse;
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
}`,X0=`#define LAMBERT
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
}`,q0=`#define LAMBERT
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Y0=`#define MATCAP
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
}`,$0=`#define MATCAP
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
}`,K0=`#define NORMAL
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
}`,j0=`#define NORMAL
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
}`,Z0=`#define PHONG
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
}`,J0=`#define PHONG
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Q0=`#define STANDARD
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
}`,ex=`#define STANDARD
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
}`,tx=`#define TOON
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
}`,nx=`#define TOON
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
}`,ix=`uniform float size;
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
}`,rx=`uniform vec3 diffuse;
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
}`,sx=`#include <common>
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
}`,ax=`uniform vec3 color;
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
}`,ox=`uniform float rotation;
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
}`,lx=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Pg,alphahash_pars_fragment:Dg,alphamap_fragment:Lg,alphamap_pars_fragment:Ig,alphatest_fragment:Ug,alphatest_pars_fragment:Ng,aomap_fragment:Fg,aomap_pars_fragment:Og,batching_pars_vertex:Bg,batching_vertex:zg,begin_vertex:Vg,beginnormal_vertex:Gg,bsdfs:Hg,iridescence_fragment:kg,bumpmap_pars_fragment:Wg,clipping_planes_fragment:Xg,clipping_planes_pars_fragment:qg,clipping_planes_pars_vertex:Yg,clipping_planes_vertex:$g,color_fragment:Kg,color_pars_fragment:jg,color_pars_vertex:Zg,color_vertex:Jg,common:Qg,cube_uv_reflection_fragment:e_,defaultnormal_vertex:t_,displacementmap_pars_vertex:n_,displacementmap_vertex:i_,emissivemap_fragment:r_,emissivemap_pars_fragment:s_,colorspace_fragment:a_,colorspace_pars_fragment:o_,envmap_fragment:l_,envmap_common_pars_fragment:c_,envmap_pars_fragment:u_,envmap_pars_vertex:f_,envmap_physical_pars_fragment:E_,envmap_vertex:h_,fog_vertex:d_,fog_pars_vertex:p_,fog_fragment:m_,fog_pars_fragment:g_,gradientmap_pars_fragment:__,lightmap_pars_fragment:x_,lights_lambert_fragment:v_,lights_lambert_pars_fragment:S_,lights_pars_begin:M_,lights_toon_fragment:y_,lights_toon_pars_fragment:b_,lights_phong_fragment:T_,lights_phong_pars_fragment:A_,lights_physical_fragment:w_,lights_physical_pars_fragment:R_,lights_fragment_begin:C_,lights_fragment_maps:P_,lights_fragment_end:D_,logdepthbuf_fragment:L_,logdepthbuf_pars_fragment:I_,logdepthbuf_pars_vertex:U_,logdepthbuf_vertex:N_,map_fragment:F_,map_pars_fragment:O_,map_particle_fragment:B_,map_particle_pars_fragment:z_,metalnessmap_fragment:V_,metalnessmap_pars_fragment:G_,morphinstance_vertex:H_,morphcolor_vertex:k_,morphnormal_vertex:W_,morphtarget_pars_vertex:X_,morphtarget_vertex:q_,normal_fragment_begin:Y_,normal_fragment_maps:$_,normal_pars_fragment:K_,normal_pars_vertex:j_,normal_vertex:Z_,normalmap_pars_fragment:J_,clearcoat_normal_fragment_begin:Q_,clearcoat_normal_fragment_maps:e0,clearcoat_pars_fragment:t0,iridescence_pars_fragment:n0,opaque_fragment:i0,packing:r0,premultiplied_alpha_fragment:s0,project_vertex:a0,dithering_fragment:o0,dithering_pars_fragment:l0,roughnessmap_fragment:c0,roughnessmap_pars_fragment:u0,shadowmap_pars_fragment:f0,shadowmap_pars_vertex:h0,shadowmap_vertex:d0,shadowmask_pars_fragment:p0,skinbase_vertex:m0,skinning_pars_vertex:g0,skinning_vertex:_0,skinnormal_vertex:x0,specularmap_fragment:v0,specularmap_pars_fragment:S0,tonemapping_fragment:M0,tonemapping_pars_fragment:E0,transmission_fragment:y0,transmission_pars_fragment:b0,uv_pars_fragment:T0,uv_pars_vertex:A0,uv_vertex:w0,worldpos_vertex:R0,background_vert:C0,background_frag:P0,backgroundCube_vert:D0,backgroundCube_frag:L0,cube_vert:I0,cube_frag:U0,depth_vert:N0,depth_frag:F0,distance_vert:O0,distance_frag:B0,equirect_vert:z0,equirect_frag:V0,linedashed_vert:G0,linedashed_frag:H0,meshbasic_vert:k0,meshbasic_frag:W0,meshlambert_vert:X0,meshlambert_frag:q0,meshmatcap_vert:Y0,meshmatcap_frag:$0,meshnormal_vert:K0,meshnormal_frag:j0,meshphong_vert:Z0,meshphong_frag:J0,meshphysical_vert:Q0,meshphysical_frag:ex,meshtoon_vert:tx,meshtoon_frag:nx,points_vert:ix,points_frag:rx,shadow_vert:sx,shadow_frag:ax,sprite_vert:ox,sprite_frag:lx},Me={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},mn={basic:{uniforms:It([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:It([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:It([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:It([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:It([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:It([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:It([Me.points,Me.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:It([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:It([Me.common,Me.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:It([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:It([Me.sprite,Me.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:It([Me.common,Me.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:It([Me.lights,Me.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};mn.physical={uniforms:It([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const ys={r:0,b:0,g:0},Mi=new Tn,cx=new _t;function ux(n,e,t,i,r,s,a){const o=new Ze(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function _(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?t:e).get(b)),b}function S(A){let b=!1;const R=_(A);R===null?d(o,l):R&&R.isColor&&(d(R,1),b=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(A,b){const R=_(b);R&&(R.isCubeTexture||R.mapping===ta)?(u===void 0&&(u=new kt(new qn(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:hr(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,L,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Mi.copy(b.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cx.makeRotationFromEuler(Mi)),u.material.toneMapped=je.getTransfer(R.colorSpace)!==st,(f!==R||h!==R.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=R,h=R.version,m=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new kt(new na(2,2),new An({name:"BackgroundMaterial",uniforms:hr(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=je.getTransfer(R.colorSpace)!==st,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||h!==R.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=R,h=R.version,m=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function d(A,b){A.getRGB(ys,Zf(n)),i.buffers.color.setClear(ys.r,ys.g,ys.b,b,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,b=1){o.set(A),l=b,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(o,l)},render:S,addToRenderList:g,dispose:T}}function fx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(E,I,$,k,ie){let ee=!1;const q=f(k,$,I);s!==q&&(s=q,c(s.object)),ee=m(E,k,$,ie),ee&&_(E,k,$,ie),ie!==null&&e.update(ie,n.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,b(E,I,$,k),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function f(E,I,$){const k=$.wireframe===!0;let ie=i[E.id];ie===void 0&&(ie={},i[E.id]=ie);let ee=ie[I.id];ee===void 0&&(ee={},ie[I.id]=ee);let q=ee[k];return q===void 0&&(q=h(l()),ee[k]=q),q}function h(E){const I=[],$=[],k=[];for(let ie=0;ie<t;ie++)I[ie]=0,$[ie]=0,k[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:$,attributeDivisors:k,object:E,attributes:{},index:null}}function m(E,I,$,k){const ie=s.attributes,ee=I.attributes;let q=0;const F=$.getAttributes();for(const Z in F)if(F[Z].location>=0){const he=ie[Z];let ge=ee[Z];if(ge===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(ge=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(ge=E.instanceColor)),he===void 0||he.attribute!==ge||ge&&he.data!==ge.data)return!0;q++}return s.attributesNum!==q||s.index!==k}function _(E,I,$,k){const ie={},ee=I.attributes;let q=0;const F=$.getAttributes();for(const Z in F)if(F[Z].location>=0){let he=ee[Z];he===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(he=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(he=E.instanceColor));const ge={};ge.attribute=he,he&&he.data&&(ge.data=he.data),ie[Z]=ge,q++}s.attributes=ie,s.attributesNum=q,s.index=k}function S(){const E=s.newAttributes;for(let I=0,$=E.length;I<$;I++)E[I]=0}function g(E){d(E,0)}function d(E,I){const $=s.newAttributes,k=s.enabledAttributes,ie=s.attributeDivisors;$[E]=1,k[E]===0&&(n.enableVertexAttribArray(E),k[E]=1),ie[E]!==I&&(n.vertexAttribDivisor(E,I),ie[E]=I)}function T(){const E=s.newAttributes,I=s.enabledAttributes;for(let $=0,k=I.length;$<k;$++)I[$]!==E[$]&&(n.disableVertexAttribArray($),I[$]=0)}function A(E,I,$,k,ie,ee,q){q===!0?n.vertexAttribIPointer(E,I,$,ie,ee):n.vertexAttribPointer(E,I,$,k,ie,ee)}function b(E,I,$,k){S();const ie=k.attributes,ee=$.getAttributes(),q=I.defaultAttributeValues;for(const F in ee){const Z=ee[F];if(Z.location>=0){let de=ie[F];if(de===void 0&&(F==="instanceMatrix"&&E.instanceMatrix&&(de=E.instanceMatrix),F==="instanceColor"&&E.instanceColor&&(de=E.instanceColor)),de!==void 0){const he=de.normalized,ge=de.itemSize,Fe=e.get(de);if(Fe===void 0)continue;const Ve=Fe.buffer,ot=Fe.type,Te=Fe.bytesPerElement,K=ot===n.INT||ot===n.UNSIGNED_INT||de.gpuType===yl;if(de.isInterleavedBufferAttribute){const ne=de.data,Se=ne.stride,Be=de.offset;if(ne.isInstancedInterleavedBuffer){for(let Re=0;Re<Z.locationSize;Re++)d(Z.location+Re,ne.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Re=0;Re<Z.locationSize;Re++)g(Z.location+Re);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let Re=0;Re<Z.locationSize;Re++)A(Z.location+Re,ge/Z.locationSize,ot,he,Se*Te,(Be+ge/Z.locationSize*Re)*Te,K)}else{if(de.isInstancedBufferAttribute){for(let ne=0;ne<Z.locationSize;ne++)d(Z.location+ne,de.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ne=0;ne<Z.locationSize;ne++)g(Z.location+ne);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let ne=0;ne<Z.locationSize;ne++)A(Z.location+ne,ge/Z.locationSize,ot,he,ge*Te,ge/Z.locationSize*ne*Te,K)}}else if(q!==void 0){const he=q[F];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(Z.location,he);break;case 3:n.vertexAttrib3fv(Z.location,he);break;case 4:n.vertexAttrib4fv(Z.location,he);break;default:n.vertexAttrib1fv(Z.location,he)}}}}T()}function R(){V();for(const E in i){const I=i[E];for(const $ in I){const k=I[$];for(const ie in k)u(k[ie].object),delete k[ie];delete I[$]}delete i[E]}}function D(E){if(i[E.id]===void 0)return;const I=i[E.id];for(const $ in I){const k=I[$];for(const ie in k)u(k[ie].object),delete k[ie];delete I[$]}delete i[E.id]}function L(E){for(const I in i){const $=i[I];if($[E.id]===void 0)continue;const k=$[E.id];for(const ie in k)u(k[ie].object),delete k[ie];delete $[E.id]}}function V(){M(),a=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:V,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:D,releaseStatesOfProgram:L,initAttributes:S,enableAttribute:g,disableUnusedAttributes:T}}function hx(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let _=0;_<f;_++)m+=u[_];t.update(m,i,1)}function l(c,u,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],u[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let S=0;S<f;S++)_+=u[S]*h[S];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function dx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==an&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const V=L===Wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Kt&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==_n&&!V)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),D=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:b,maxSamples:R,samples:D}}function px(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new bi,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,S=f.clipIntersection,g=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!g)s?u(null):c();else{const T=s?0:i,A=T*4;let b=d.clippingState||null;l.value=b,b=u(_,h,A,m);for(let R=0;R!==A;++R)b[R]=t[R];d.clippingState=b,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,_){const S=f!==null?f.length:0;let g=null;if(S!==0){if(g=l.value,_!==!0||g===null){const d=m+S*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<d)&&(g=new Float32Array(d));for(let A=0,b=m;A!==S;++A,b+=4)a.copy(f[A]).applyMatrix4(T,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function mx(n){let e=new WeakMap;function t(a,o){return o===_o?a.mapping=Pi:o===xo&&(a.mapping=cr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===_o||o===xo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new eh(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ai=4,jc=[.125,.215,.35,.446,.526,.582],Ai=20,gx=256,yr=new Fl,Zc=new Ze;let Wa=null,Xa=0,qa=0,Ya=!1;const _x=new H;class Jc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=_x}=s;Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wa,Xa,qa),this._renderer.xr.enabled=Ya,e.scissorTest=!1,$i(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:Wn,format:an,colorSpace:fr,depthBuffer:!1},r=Qc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qc(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=xx(s)),this._blurMaterial=Sx(s,e,t),this._ggxMaterial=vx(s,e,t)}return r}_compileMaterial(e){const t=new kt(new $n,e);this._renderer.compile(t,yr)}_sceneToCubeUV(e,t,i,r,s){const l=new en(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,m=f.toneMapping;f.getClearColor(Zc),f.toneMapping=Sn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new kt(new qn,new $f({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,g=S.material;let d=!1;const T=e.background;T?T.isColor&&(g.color.copy(T),e.background=null,d=!0):(g.color.copy(Zc),d=!0);for(let A=0;A<6;A++){const b=A%3;b===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):b===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));const R=this._cubeSize;$i(r,b*R,A>2?R:0,R,R),f.setRenderTarget(r),d&&f.render(S,l),f.render(e,l)}f.toneMapping=m,f.autoClear=h,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Pi||e.mapping===cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;$i(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,yr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,m=f*h,{_lodMax:_}=this,S=this._sizeLods[i],g=3*S*(i>_-ai?i-_+ai:0),d=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=_-t,$i(s,g,d,3*S,2*S),r.setRenderTarget(s),r.render(o,yr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,$i(e,g,d,3*S,2*S),r.setRenderTarget(e),r.render(o,yr)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ai-1),S=s/_,g=isFinite(s)?1+Math.floor(u*S):Ai;g>Ai&&ze(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ai}`);const d=[];let T=0;for(let L=0;L<Ai;++L){const V=L/S,M=Math.exp(-V*V/2);d.push(M),L===0?T+=M:L<g&&(T+=2*M)}for(let L=0;L<d.length;L++)d[L]=d[L]/T;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:A}=this;h.dTheta.value=_,h.mipInt.value=A-i;const b=this._sizeLods[r],R=3*b*(r>A-ai?r-A+ai:0),D=4*(this._cubeSize-b);$i(t,R,D,3*b,2*b),l.setRenderTarget(t),l.render(f,yr)}}function xx(n){const e=[],t=[],i=[];let r=n;const s=n-ai+1+jc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-ai?l=jc[a-n+ai-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,S=3,g=2,d=1,T=new Float32Array(S*_*m),A=new Float32Array(g*_*m),b=new Float32Array(d*_*m);for(let D=0;D<m;D++){const L=D%3*2/3-1,V=D>2?0:-1,M=[L,V,0,L+2/3,V,0,L+2/3,V+1,0,L,V,0,L+2/3,V+1,0,L,V+1,0];T.set(M,S*_*D),A.set(h,g*_*D);const E=[D,D,D,D,D,D];b.set(E,d*_*D)}const R=new $n;R.setAttribute("position",new En(T,S)),R.setAttribute("uv",new En(A,g)),R.setAttribute("faceIndex",new En(b,d)),i.push(new kt(R,null)),r>ai&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Qc(n,e,t){const i=new Mn(n,e,t);return i.texture.mapping=ta,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $i(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function vx(n,e,t){return new An({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ia(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Sx(n,e,t){const i=new Float32Array(Ai),r=new H(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ia(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function eu(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ia(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function tu(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function ia(){return`

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
	`}function Mx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===_o||l===xo,u=l===Pi||l===cr;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Jc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Jc(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Ex(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&qr("WebGLRenderer: "+i+" extension not supported."),r}}}function yx(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const m in h)e.update(h[m],n.ARRAY_BUFFER)}function c(f){const h=[],m=f.index,_=f.attributes.position;let S=0;if(m!==null){const T=m.array;S=m.version;for(let A=0,b=T.length;A<b;A+=3){const R=T[A+0],D=T[A+1],L=T[A+2];h.push(R,D,D,L,L,R)}}else if(_!==void 0){const T=_.array;S=_.version;for(let A=0,b=T.length/3-1;A<b;A+=3){const R=A+0,D=A+1,L=A+2;h.push(R,D,D,L,L,R)}}else return;const g=new(Wf(h)?jf:Kf)(h,1);g.version=S;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function bx(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,m){n.drawElements(i,m,s,h*a),t.update(m,i,1)}function c(h,m,_){_!==0&&(n.drawElementsInstanced(i,m,s,h*a,_),t.update(m,i,_))}function u(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,_);let g=0;for(let d=0;d<_;d++)g+=m[d];t.update(g,i,1)}function f(h,m,_,S){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<h.length;d++)c(h[d]/a,m[d],S[d]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,S,0,_);let d=0;for(let T=0;T<_;T++)d+=m[T]*S[T];t.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Tx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ax(n,e,t){const i=new WeakMap,r=new gt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let E=function(){V.dispose(),i.delete(o),o.removeEventListener("dispose",E)};var m=E;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let b=0;_===!0&&(b=1),S===!0&&(b=2),g===!0&&(b=3);let R=o.attributes.position.count*b,D=1;R>e.maxTextureSize&&(D=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const L=new Float32Array(R*D*4*f),V=new Xf(L,R,D,f);V.type=_n,V.needsUpdate=!0;const M=b*4;for(let I=0;I<f;I++){const $=d[I],k=T[I],ie=A[I],ee=R*D*4*I;for(let q=0;q<$.count;q++){const F=q*M;_===!0&&(r.fromBufferAttribute($,q),L[ee+F+0]=r.x,L[ee+F+1]=r.y,L[ee+F+2]=r.z,L[ee+F+3]=0),S===!0&&(r.fromBufferAttribute(k,q),L[ee+F+4]=r.x,L[ee+F+5]=r.y,L[ee+F+6]=r.z,L[ee+F+7]=0),g===!0&&(r.fromBufferAttribute(ie,q),L[ee+F+8]=r.x,L[ee+F+9]=r.y,L[ee+F+10]=r.z,L[ee+F+11]=ie.itemSize===4?r.w:1)}}h={count:f,texture:V,size:new et(R,D)},i.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function wx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Rx={[Rf]:"LINEAR_TONE_MAPPING",[Cf]:"REINHARD_TONE_MAPPING",[Pf]:"CINEON_TONE_MAPPING",[Df]:"ACES_FILMIC_TONE_MAPPING",[If]:"AGX_TONE_MAPPING",[Uf]:"NEUTRAL_TONE_MAPPING",[Lf]:"CUSTOM_TONE_MAPPING"};function Cx(n,e,t,i,r){const s=new Mn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new Mn(e,t,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),o=new $n;o.setAttribute("position",new Vn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Vn([0,2,0,0,2,0],2));const l=new vg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new kt(o,l),u=new Fl(-1,1,1,-1,0,1);let f=null,h=null,m=!1,_,S=null,g=[],d=!1;this.setSize=function(T,A){s.setSize(T,A),a.setSize(T,A);for(let b=0;b<g.length;b++){const R=g[b];R.setSize&&R.setSize(T,A)}},this.setEffects=function(T){g=T,d=g.length>0&&g[0].isRenderPass===!0;const A=s.width,b=s.height;for(let R=0;R<g.length;R++){const D=g[R];D.setSize&&D.setSize(A,b)}},this.begin=function(T,A){if(m||T.toneMapping===Sn&&g.length===0)return!1;if(S=A,A!==null){const b=A.width,R=A.height;(s.width!==b||s.height!==R)&&this.setSize(b,R)}return d===!1&&T.setRenderTarget(s),_=T.toneMapping,T.toneMapping=Sn,!0},this.hasRenderPass=function(){return d},this.end=function(T,A){T.toneMapping=_,m=!0;let b=s,R=a;for(let D=0;D<g.length;D++){const L=g[D];if(L.enabled!==!1&&(L.render(T,R,b,A),L.needsSwap!==!1)){const V=b;b=R,R=V}}if(f!==T.outputColorSpace||h!==T.toneMapping){f=T.outputColorSpace,h=T.toneMapping,l.defines={},je.getTransfer(f)===st&&(l.defines.SRGB_TRANSFER="");const D=Rx[h];D&&(l.defines[D]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,T.setRenderTarget(S),T.render(c,u),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const rh=new Ft,Qo=new $r(1,1),sh=new Xf,ah=new $m,oh=new Qf,nu=[],iu=[],ru=new Float32Array(16),su=new Float32Array(9),au=new Float32Array(4);function mr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=nu[r];if(s===void 0&&(s=new Float32Array(r),nu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ra(n,e){let t=iu[e];t===void 0&&(t=new Int32Array(e),iu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Px(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Dx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function Lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function Ix(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function Ux(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;au.set(i),n.uniformMatrix2fv(this.addr,!1,au),Mt(t,i)}}function Nx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;su.set(i),n.uniformMatrix3fv(this.addr,!1,su),Mt(t,i)}}function Fx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;ru.set(i),n.uniformMatrix4fv(this.addr,!1,ru),Mt(t,i)}}function Ox(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function Vx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function Gx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Hx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function Wx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function Xx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Qo.compareFunction=t.isReversedDepthBuffer()?Pl:Cl,s=Qo):s=rh,t.setTexture2D(e||s,r)}function qx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ah,r)}function Yx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||oh,r)}function $x(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||sh,r)}function Kx(n){switch(n){case 5126:return Px;case 35664:return Dx;case 35665:return Lx;case 35666:return Ix;case 35674:return Ux;case 35675:return Nx;case 35676:return Fx;case 5124:case 35670:return Ox;case 35667:case 35671:return Bx;case 35668:case 35672:return zx;case 35669:case 35673:return Vx;case 5125:return Gx;case 36294:return Hx;case 36295:return kx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Xx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return $x}}function jx(n,e){n.uniform1fv(this.addr,e)}function Zx(n,e){const t=mr(e,this.size,2);n.uniform2fv(this.addr,t)}function Jx(n,e){const t=mr(e,this.size,3);n.uniform3fv(this.addr,t)}function Qx(n,e){const t=mr(e,this.size,4);n.uniform4fv(this.addr,t)}function ev(n,e){const t=mr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function tv(n,e){const t=mr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function nv(n,e){const t=mr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function iv(n,e){n.uniform1iv(this.addr,e)}function rv(n,e){n.uniform2iv(this.addr,e)}function sv(n,e){n.uniform3iv(this.addr,e)}function av(n,e){n.uniform4iv(this.addr,e)}function ov(n,e){n.uniform1uiv(this.addr,e)}function lv(n,e){n.uniform2uiv(this.addr,e)}function cv(n,e){n.uniform3uiv(this.addr,e)}function uv(n,e){n.uniform4uiv(this.addr,e)}function fv(n,e,t){const i=this.cache,r=e.length,s=ra(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Qo:a=rh;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function hv(n,e,t){const i=this.cache,r=e.length,s=ra(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ah,s[a])}function dv(n,e,t){const i=this.cache,r=e.length,s=ra(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||oh,s[a])}function pv(n,e,t){const i=this.cache,r=e.length,s=ra(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||sh,s[a])}function mv(n){switch(n){case 5126:return jx;case 35664:return Zx;case 35665:return Jx;case 35666:return Qx;case 35674:return ev;case 35675:return tv;case 35676:return nv;case 5124:case 35670:return iv;case 35667:case 35671:return rv;case 35668:case 35672:return sv;case 35669:case 35673:return av;case 5125:return ov;case 36294:return lv;case 36295:return cv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return fv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return dv;case 36289:case 36303:case 36311:case 36292:return pv}}class gv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Kx(t.type)}}class _v{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mv(t.type)}}class xv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function ou(n,e){n.seq.push(e),n.map[e.id]=e}function vv(n,e,t){const i=n.name,r=i.length;for($a.lastIndex=0;;){const s=$a.exec(i),a=$a.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ou(t,c===void 0?new gv(o,n,e):new _v(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new xv(o),ou(t,f)),t=f}}}class Fs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);vv(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function lu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Sv=37297;let Mv=0;function Ev(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const cu=new ke;function yv(n){je._getMatrix(cu,je.workingColorSpace,n);const e=`mat3( ${cu.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case ks:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function uu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Ev(n.getShaderSource(e),o)}else return s}function bv(n,e){const t=yv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Tv={[Rf]:"Linear",[Cf]:"Reinhard",[Pf]:"Cineon",[Df]:"ACESFilmic",[If]:"AgX",[Uf]:"Neutral",[Lf]:"Custom"};function Av(n,e){const t=Tv[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bs=new H;function wv(){je.getLuminanceCoefficients(bs);const n=bs.x.toFixed(4),e=bs.y.toFixed(4),t=bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function Cv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Pv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Rr(n){return n!==""}function fu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dv=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(n){return n.replace(Dv,Iv)}const Lv=new Map;function Iv(n,e){let t=Xe[e];if(t===void 0){const i=Lv.get(e);if(i!==void 0)t=Xe[i],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return el(t)}const Uv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function du(n){return n.replace(Uv,Nv)}function Nv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Fv={[Ds]:"SHADOWMAP_TYPE_PCF",[wr]:"SHADOWMAP_TYPE_VSM"};function Ov(n){return Fv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Bv={[Pi]:"ENVMAP_TYPE_CUBE",[cr]:"ENVMAP_TYPE_CUBE",[ta]:"ENVMAP_TYPE_CUBE_UV"};function zv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Bv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Vv={[cr]:"ENVMAP_MODE_REFRACTION"};function Gv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Vv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Hv={[wf]:"ENVMAP_BLENDING_MULTIPLY",[pm]:"ENVMAP_BLENDING_MIX",[mm]:"ENVMAP_BLENDING_ADD"};function kv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Hv[n.combine]||"ENVMAP_BLENDING_NONE"}function Wv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Xv(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ov(t),c=zv(t),u=Gv(t),f=kv(t),h=Wv(t),m=Rv(t),_=Cv(s),S=r.createProgram();let g,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Rr).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Rr).join(`
`),d.length>0&&(d+=`
`)):(g=[pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),d=[pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Sn?Av("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,bv("linearToOutputTexel",t.outputColorSpace),wv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),a=el(a),a=fu(a,t),a=hu(a,t),o=el(o),o=fu(o,t),o=hu(o,t),a=du(a),o=du(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===Ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=T+g+a,b=T+d+o,R=lu(r,r.VERTEX_SHADER,A),D=lu(r,r.FRAGMENT_SHADER,b);r.attachShader(S,R),r.attachShader(S,D),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function L(I){if(n.debug.checkShaderErrors){const $=r.getProgramInfoLog(S)||"",k=r.getShaderInfoLog(R)||"",ie=r.getShaderInfoLog(D)||"",ee=$.trim(),q=k.trim(),F=ie.trim();let Z=!0,de=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,R,D);else{const he=uu(r,R,"vertex"),ge=uu(r,D,"fragment");Qe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+ee+`
`+he+`
`+ge)}else ee!==""?ze("WebGLProgram: Program Info Log:",ee):(q===""||F==="")&&(de=!1);de&&(I.diagnostics={runnable:Z,programLog:ee,vertexShader:{log:q,prefix:g},fragmentShader:{log:F,prefix:d}})}r.deleteShader(R),r.deleteShader(D),V=new Fs(r,S),M=Pv(r,S)}let V;this.getUniforms=function(){return V===void 0&&L(this),V};let M;this.getAttributes=function(){return M===void 0&&L(this),M};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(S,Sv)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mv++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=R,this.fragmentShader=D,this}let qv=0;class Yv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new $v(e),t.set(e,i)),i}}class $v{constructor(e){this.id=qv++,this.code=e,this.usedTimes=0}}function Kv(n,e,t,i,r,s,a){const o=new qf,l=new Yv,c=new Set,u=[],f=new Map,h=r.logarithmicDepthBuffer;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,E,I,$,k){const ie=$.fog,ee=k.geometry,q=M.isMeshStandardMaterial?$.environment:null,F=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),Z=F&&F.mapping===ta?F.image.height:null,de=_[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&ze("WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const he=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ge=he!==void 0?he.length:0;let Fe=0;ee.morphAttributes.position!==void 0&&(Fe=1),ee.morphAttributes.normal!==void 0&&(Fe=2),ee.morphAttributes.color!==void 0&&(Fe=3);let Ve,ot,Te,K;if(de){const it=mn[de];Ve=it.vertexShader,ot=it.fragmentShader}else Ve=M.vertexShader,ot=M.fragmentShader,l.update(M),Te=l.getVertexShaderID(M),K=l.getFragmentShaderID(M);const ne=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),Be=k.isInstancedMesh===!0,Re=k.isBatchedMesh===!0,$e=!!M.map,w=!!M.matcap,P=!!F,z=!!M.aoMap,Q=!!M.lightMap,Y=!!M.bumpMap,te=!!M.normalMap,y=!!M.displacementMap,oe=!!M.emissiveMap,re=!!M.metalnessMap,J=!!M.roughnessMap,se=M.anisotropy>0,x=M.clearcoat>0,p=M.dispersion>0,C=M.iridescence>0,G=M.sheen>0,j=M.transmission>0,B=se&&!!M.anisotropyMap,Ee=x&&!!M.clearcoatMap,ce=x&&!!M.clearcoatNormalMap,Ae=x&&!!M.clearcoatRoughnessMap,Le=C&&!!M.iridescenceMap,le=C&&!!M.iridescenceThicknessMap,me=G&&!!M.sheenColorMap,xe=G&&!!M.sheenRoughnessMap,we=!!M.specularMap,pe=!!M.specularColorMap,He=!!M.specularIntensityMap,U=j&&!!M.transmissionMap,be=j&&!!M.thicknessMap,fe=!!M.gradientMap,Ce=!!M.alphaMap,ue=M.alphaTest>0,ae=!!M.alphaHash,_e=!!M.extensions;let Ge=Sn;M.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ge=n.toneMapping);const ct={shaderID:de,shaderType:M.type,shaderName:M.name,vertexShader:Ve,fragmentShader:ot,defines:M.defines,customVertexShaderID:Te,customFragmentShaderID:K,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Re,batchingColor:Re&&k._colorsTexture!==null,instancing:Be,instancingColor:Be&&k.instanceColor!==null,instancingMorph:Be&&k.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:fr,alphaToCoverage:!!M.alphaToCoverage,map:$e,matcap:w,envMap:P,envMapMode:P&&F.mapping,envMapCubeUVHeight:Z,aoMap:z,lightMap:Q,bumpMap:Y,normalMap:te,displacementMap:y,emissiveMap:oe,normalMapObjectSpace:te&&M.normalMapType===xm,normalMapTangentSpace:te&&M.normalMapType===kf,metalnessMap:re,roughnessMap:J,anisotropy:se,anisotropyMap:B,clearcoat:x,clearcoatMap:Ee,clearcoatNormalMap:ce,clearcoatRoughnessMap:Ae,dispersion:p,iridescence:C,iridescenceMap:Le,iridescenceThicknessMap:le,sheen:G,sheenColorMap:me,sheenRoughnessMap:xe,specularMap:we,specularColorMap:pe,specularIntensityMap:He,transmission:j,transmissionMap:U,thicknessMap:be,gradientMap:fe,opaque:M.transparent===!1&&M.blending===rr&&M.alphaToCoverage===!1,alphaMap:Ce,alphaTest:ue,alphaHash:ae,combine:M.combine,mapUv:$e&&S(M.map.channel),aoMapUv:z&&S(M.aoMap.channel),lightMapUv:Q&&S(M.lightMap.channel),bumpMapUv:Y&&S(M.bumpMap.channel),normalMapUv:te&&S(M.normalMap.channel),displacementMapUv:y&&S(M.displacementMap.channel),emissiveMapUv:oe&&S(M.emissiveMap.channel),metalnessMapUv:re&&S(M.metalnessMap.channel),roughnessMapUv:J&&S(M.roughnessMap.channel),anisotropyMapUv:B&&S(M.anisotropyMap.channel),clearcoatMapUv:Ee&&S(M.clearcoatMap.channel),clearcoatNormalMapUv:ce&&S(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&S(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&S(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&S(M.iridescenceThicknessMap.channel),sheenColorMapUv:me&&S(M.sheenColorMap.channel),sheenRoughnessMapUv:xe&&S(M.sheenRoughnessMap.channel),specularMapUv:we&&S(M.specularMap.channel),specularColorMapUv:pe&&S(M.specularColorMap.channel),specularIntensityMapUv:He&&S(M.specularIntensityMap.channel),transmissionMapUv:U&&S(M.transmissionMap.channel),thicknessMapUv:be&&S(M.thicknessMap.channel),alphaMapUv:Ce&&S(M.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(te||se),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!ee.attributes.uv&&($e||Ce),fog:!!ie,useFog:M.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Se,skinning:k.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Fe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:$e&&M.map.isVideoTexture===!0&&je.getTransfer(M.map.colorSpace)===st,decodeVideoTextureEmissive:oe&&M.emissiveMap.isVideoTexture===!0&&je.getTransfer(M.emissiveMap.colorSpace)===st,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Fn,flipSided:M.side===Ht,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:_e&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&M.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function d(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)E.push(I),E.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(T(E,M),A(E,M),E.push(n.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function T(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function A(M,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),M.push(o.mask)}function b(M){const E=_[M.type];let I;if(E){const $=mn[E];I=lg.clone($.uniforms)}else I=M.uniforms;return I}function R(M,E){let I=f.get(E);return I!==void 0?++I.usedTimes:(I=new Xv(n,E,M,s),u.push(I),f.set(E,I)),I}function D(M){if(--M.usedTimes===0){const E=u.indexOf(M);u[E]=u[u.length-1],u.pop(),f.delete(M.cacheKey),M.destroy()}}function L(M){l.remove(M)}function V(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:b,acquireProgram:R,releaseProgram:D,releaseShaderCache:L,programs:u,dispose:V}}function jv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Zv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function mu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,m,_,S,g){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:S,group:g},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=S,d.group=g),e++,d}function o(f,h,m,_,S,g){const d=a(f,h,m,_,S,g);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(f,h,m,_,S,g){const d=a(f,h,m,_,S,g);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||Zv),i.length>1&&i.sort(h||mu),r.length>1&&r.sort(h||mu)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Jv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new gu,n.set(i,[a])):r>=s.length?(a=new gu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Qv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ze};break;case"SpotLight":t={position:new H,direction:new H,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function eS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let tS=0;function nS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function iS(n){const e=new Qv,t=eS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new _t,a=new _t;function o(c){let u=0,f=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let m=0,_=0,S=0,g=0,d=0,T=0,A=0,b=0,R=0,D=0,L=0;c.sort(nS);for(let M=0,E=c.length;M<E;M++){const I=c[M],$=I.color,k=I.intensity,ie=I.distance;let ee=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ur?ee=I.shadow.map.texture:ee=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=$.r*k,f+=$.g*k,h+=$.b*k;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],k);L++}else if(I.isDirectionalLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const F=I.shadow,Z=t.get(I);Z.shadowIntensity=F.intensity,Z.shadowBias=F.bias,Z.shadowNormalBias=F.normalBias,Z.shadowRadius=F.radius,Z.shadowMapSize=F.mapSize,i.directionalShadow[m]=Z,i.directionalShadowMap[m]=ee,i.directionalShadowMatrix[m]=I.shadow.matrix,T++}i.directional[m]=q,m++}else if(I.isSpotLight){const q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy($).multiplyScalar(k),q.distance=ie,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[S]=q;const F=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,F.updateMatrices(I),I.castShadow&&D++),i.spotLightMatrix[S]=F.matrix,I.castShadow){const Z=t.get(I);Z.shadowIntensity=F.intensity,Z.shadowBias=F.bias,Z.shadowNormalBias=F.normalBias,Z.shadowRadius=F.radius,Z.shadowMapSize=F.mapSize,i.spotShadow[S]=Z,i.spotShadowMap[S]=ee,b++}S++}else if(I.isRectAreaLight){const q=e.get(I);q.color.copy($).multiplyScalar(k),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=q,g++}else if(I.isPointLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const F=I.shadow,Z=t.get(I);Z.shadowIntensity=F.intensity,Z.shadowBias=F.bias,Z.shadowNormalBias=F.normalBias,Z.shadowRadius=F.radius,Z.shadowMapSize=F.mapSize,Z.shadowCameraNear=F.camera.near,Z.shadowCameraFar=F.camera.far,i.pointShadow[_]=Z,i.pointShadowMap[_]=ee,i.pointShadowMatrix[_]=I.shadow.matrix,A++}i.point[_]=q,_++}else if(I.isHemisphereLight){const q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(k),q.groundColor.copy(I.groundColor).multiplyScalar(k),i.hemi[d]=q,d++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const V=i.hash;(V.directionalLength!==m||V.pointLength!==_||V.spotLength!==S||V.rectAreaLength!==g||V.hemiLength!==d||V.numDirectionalShadows!==T||V.numPointShadows!==A||V.numSpotShadows!==b||V.numSpotMaps!==R||V.numLightProbes!==L)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=g,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=b+R-D,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=L,V.directionalLength=m,V.pointLength=_,V.spotLength=S,V.rectAreaLength=g,V.hemiLength=d,V.numDirectionalShadows=T,V.numPointShadows=A,V.numSpotShadows=b,V.numSpotMaps=R,V.numLightProbes=L,i.version=tS++)}function l(c,u){let f=0,h=0,m=0,_=0,S=0;const g=u.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){const A=c[d];if(A.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),f++}else if(A.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),m++}else if(A.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(g),a.identity(),s.copy(A.matrixWorld),s.premultiply(g),a.extractRotation(s),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(A.isPointLight){const b=i.point[h];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(g),h++}else if(A.isHemisphereLight){const b=i.hemi[S];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(g),S++}}}return{setup:o,setupView:l,state:i}}function _u(n){const e=new iS(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function rS(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new _u(n),e.set(r,[o])):s>=a.length?(o=new _u(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const sS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aS=`uniform sampler2D shadow_pass;
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
}`,oS=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],lS=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],xu=new _t,br=new H,Ka=new H;function cS(n,e,t){let i=new Nl;const r=new et,s=new et,a=new gt,o=new Sg,l=new Mg,c={},u=t.maxTextureSize,f={[fi]:Ht,[Ht]:fi,[Fn]:Fn},h=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:sS,fragmentShader:aS}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new $n;_.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new kt(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ds;let d=this.type;this.render=function(D,L,V){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;D.type===Kp&&(ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),D.type=Ds);const M=n.getRenderTarget(),E=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Bn),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const k=d!==this.type;k&&L.traverse(function(ie){ie.material&&(Array.isArray(ie.material)?ie.material.forEach(ee=>ee.needsUpdate=!0):ie.material.needsUpdate=!0)});for(let ie=0,ee=D.length;ie<ee;ie++){const q=D[ie],F=q.shadow;if(F===void 0){ze("WebGLShadowMap:",q,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const Z=F.getFrameExtents();if(r.multiply(Z),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,F.mapSize.y=s.y)),F.map===null||k===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===wr){if(q.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Mn(r.x,r.y,{format:ur,type:Wn,minFilter:wt,magFilter:wt,generateMipmaps:!1}),F.map.texture.name=q.name+".shadowMap",F.map.depthTexture=new $r(r.x,r.y,_n),F.map.depthTexture.name=q.name+".shadowMapDepth",F.map.depthTexture.format=Xn,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=yt,F.map.depthTexture.magFilter=yt}else{q.isPointLight?(F.map=new eh(r.x),F.map.depthTexture=new xg(r.x,bn)):(F.map=new Mn(r.x,r.y),F.map.depthTexture=new $r(r.x,r.y,bn)),F.map.depthTexture.name=q.name+".shadowMap",F.map.depthTexture.format=Xn;const he=n.state.buffers.depth.getReversed();this.type===Ds?(F.map.depthTexture.compareFunction=he?Pl:Cl,F.map.depthTexture.minFilter=wt,F.map.depthTexture.magFilter=wt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=yt,F.map.depthTexture.magFilter=yt)}F.camera.updateProjectionMatrix()}const de=F.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<de;he++){if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,he),n.clear();else{he===0&&(n.setRenderTarget(F.map),n.clear());const ge=F.getViewport(he);a.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),$.viewport(a)}if(q.isPointLight){const ge=F.camera,Fe=F.matrix,Ve=q.distance||ge.far;Ve!==ge.far&&(ge.far=Ve,ge.updateProjectionMatrix()),br.setFromMatrixPosition(q.matrixWorld),ge.position.copy(br),Ka.copy(ge.position),Ka.add(oS[he]),ge.up.copy(lS[he]),ge.lookAt(Ka),ge.updateMatrixWorld(),Fe.makeTranslation(-br.x,-br.y,-br.z),xu.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),F._frustum.setFromProjectionMatrix(xu,ge.coordinateSystem,ge.reversedDepth)}else F.updateMatrices(q);i=F.getFrustum(),b(L,V,F.camera,q,this.type)}F.isPointLightShadow!==!0&&this.type===wr&&T(F,V),F.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(M,E,I)};function T(D,L){const V=e.update(S);h.defines.VSM_SAMPLES!==D.blurSamples&&(h.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Mn(r.x,r.y,{format:ur,type:Wn})),h.uniforms.shadow_pass.value=D.map.depthTexture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(L,null,V,h,S,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(L,null,V,m,S,null)}function A(D,L,V,M){let E=null;const I=V.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(I!==void 0)E=I;else if(E=V.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const $=E.uuid,k=L.uuid;let ie=c[$];ie===void 0&&(ie={},c[$]=ie);let ee=ie[k];ee===void 0&&(ee=E.clone(),ie[k]=ee,L.addEventListener("dispose",R)),E=ee}if(E.visible=L.visible,E.wireframe=L.wireframe,M===wr?E.side=L.shadowSide!==null?L.shadowSide:L.side:E.side=L.shadowSide!==null?L.shadowSide:f[L.side],E.alphaMap=L.alphaMap,E.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,E.map=L.map,E.clipShadows=L.clipShadows,E.clippingPlanes=L.clippingPlanes,E.clipIntersection=L.clipIntersection,E.displacementMap=L.displacementMap,E.displacementScale=L.displacementScale,E.displacementBias=L.displacementBias,E.wireframeLinewidth=L.wireframeLinewidth,E.linewidth=L.linewidth,V.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const $=n.properties.get(E);$.light=V}return E}function b(D,L,V,M,E){if(D.visible===!1)return;if(D.layers.test(L.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&E===wr)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,D.matrixWorld);const k=e.update(D),ie=D.material;if(Array.isArray(ie)){const ee=k.groups;for(let q=0,F=ee.length;q<F;q++){const Z=ee[q],de=ie[Z.materialIndex];if(de&&de.visible){const he=A(D,de,M,E);D.onBeforeShadow(n,D,L,V,k,he,Z),n.renderBufferDirect(V,null,k,he,D,Z),D.onAfterShadow(n,D,L,V,k,he,Z)}}}else if(ie.visible){const ee=A(D,ie,M,E);D.onBeforeShadow(n,D,L,V,k,ee,null),n.renderBufferDirect(V,null,k,ee,D,null),D.onAfterShadow(n,D,L,V,k,ee,null)}}const $=D.children;for(let k=0,ie=$.length;k<ie;k++)b($[k],L,V,M,E)}function R(D){D.target.removeEventListener("dispose",R);for(const V in c){const M=c[V],E=D.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}const uS={[co]:uo,[fo]:mo,[ho]:go,[lr]:po,[uo]:co,[mo]:fo,[go]:ho,[po]:lr};function fS(n,e){function t(){let U=!1;const be=new gt;let fe=null;const Ce=new gt(0,0,0,0);return{setMask:function(ue){fe!==ue&&!U&&(n.colorMask(ue,ue,ue,ue),fe=ue)},setLocked:function(ue){U=ue},setClear:function(ue,ae,_e,Ge,ct){ct===!0&&(ue*=Ge,ae*=Ge,_e*=Ge),be.set(ue,ae,_e,Ge),Ce.equals(be)===!1&&(n.clearColor(ue,ae,_e,Ge),Ce.copy(be))},reset:function(){U=!1,fe=null,Ce.set(-1,0,0,0)}}}function i(){let U=!1,be=!1,fe=null,Ce=null,ue=null;return{setReversed:function(ae){if(be!==ae){const _e=e.get("EXT_clip_control");ae?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),be=ae;const Ge=ue;ue=null,this.setClear(Ge)}},getReversed:function(){return be},setTest:function(ae){ae?ne(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(ae){fe!==ae&&!U&&(n.depthMask(ae),fe=ae)},setFunc:function(ae){if(be&&(ae=uS[ae]),Ce!==ae){switch(ae){case co:n.depthFunc(n.NEVER);break;case uo:n.depthFunc(n.ALWAYS);break;case fo:n.depthFunc(n.LESS);break;case lr:n.depthFunc(n.LEQUAL);break;case ho:n.depthFunc(n.EQUAL);break;case po:n.depthFunc(n.GEQUAL);break;case mo:n.depthFunc(n.GREATER);break;case go:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ce=ae}},setLocked:function(ae){U=ae},setClear:function(ae){ue!==ae&&(be&&(ae=1-ae),n.clearDepth(ae),ue=ae)},reset:function(){U=!1,fe=null,Ce=null,ue=null,be=!1}}}function r(){let U=!1,be=null,fe=null,Ce=null,ue=null,ae=null,_e=null,Ge=null,ct=null;return{setTest:function(it){U||(it?ne(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(it){be!==it&&!U&&(n.stencilMask(it),be=it)},setFunc:function(it,cn,wn){(fe!==it||Ce!==cn||ue!==wn)&&(n.stencilFunc(it,cn,wn),fe=it,Ce=cn,ue=wn)},setOp:function(it,cn,wn){(ae!==it||_e!==cn||Ge!==wn)&&(n.stencilOp(it,cn,wn),ae=it,_e=cn,Ge=wn)},setLocked:function(it){U=it},setClear:function(it){ct!==it&&(n.clearStencil(it),ct=it)},reset:function(){U=!1,be=null,fe=null,Ce=null,ue=null,ae=null,_e=null,Ge=null,ct=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,m=[],_=null,S=!1,g=null,d=null,T=null,A=null,b=null,R=null,D=null,L=new Ze(0,0,0),V=0,M=!1,E=null,I=null,$=null,k=null,ie=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,F=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=F>=1):Z.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=F>=2);let de=null,he={};const ge=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),Ve=new gt().fromArray(ge),ot=new gt().fromArray(Fe);function Te(U,be,fe,Ce){const ue=new Uint8Array(4),ae=n.createTexture();n.bindTexture(U,ae),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _e=0;_e<fe;_e++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,Ce,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(be+_e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return ae}const K={};K[n.TEXTURE_2D]=Te(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=Te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=Te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=Te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(n.DEPTH_TEST),a.setFunc(lr),Y(!1),te(Sc),ne(n.CULL_FACE),z(Bn);function ne(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function Se(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Be(U,be){return f[U]!==be?(n.bindFramebuffer(U,be),f[U]=be,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=be),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=be),!0):!1}function Re(U,be){let fe=m,Ce=!1;if(U){fe=h.get(be),fe===void 0&&(fe=[],h.set(be,fe));const ue=U.textures;if(fe.length!==ue.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,_e=ue.length;ae<_e;ae++)fe[ae]=n.COLOR_ATTACHMENT0+ae;fe.length=ue.length,Ce=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Ce=!0);Ce&&n.drawBuffers(fe)}function $e(U){return _!==U?(n.useProgram(U),_=U,!0):!1}const w={[Ti]:n.FUNC_ADD,[Zp]:n.FUNC_SUBTRACT,[Jp]:n.FUNC_REVERSE_SUBTRACT};w[Qp]=n.MIN,w[em]=n.MAX;const P={[tm]:n.ZERO,[nm]:n.ONE,[im]:n.SRC_COLOR,[oo]:n.SRC_ALPHA,[cm]:n.SRC_ALPHA_SATURATE,[om]:n.DST_COLOR,[sm]:n.DST_ALPHA,[rm]:n.ONE_MINUS_SRC_COLOR,[lo]:n.ONE_MINUS_SRC_ALPHA,[lm]:n.ONE_MINUS_DST_COLOR,[am]:n.ONE_MINUS_DST_ALPHA,[um]:n.CONSTANT_COLOR,[fm]:n.ONE_MINUS_CONSTANT_COLOR,[hm]:n.CONSTANT_ALPHA,[dm]:n.ONE_MINUS_CONSTANT_ALPHA};function z(U,be,fe,Ce,ue,ae,_e,Ge,ct,it){if(U===Bn){S===!0&&(Se(n.BLEND),S=!1);return}if(S===!1&&(ne(n.BLEND),S=!0),U!==jp){if(U!==g||it!==M){if((d!==Ti||b!==Ti)&&(n.blendEquation(n.FUNC_ADD),d=Ti,b=Ti),it)switch(U){case rr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mc:n.blendFunc(n.ONE,n.ONE);break;case Ec:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Qe("WebGLState: Invalid blending: ",U);break}else switch(U){case rr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ec:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yc:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",U);break}T=null,A=null,R=null,D=null,L.set(0,0,0),V=0,g=U,M=it}return}ue=ue||be,ae=ae||fe,_e=_e||Ce,(be!==d||ue!==b)&&(n.blendEquationSeparate(w[be],w[ue]),d=be,b=ue),(fe!==T||Ce!==A||ae!==R||_e!==D)&&(n.blendFuncSeparate(P[fe],P[Ce],P[ae],P[_e]),T=fe,A=Ce,R=ae,D=_e),(Ge.equals(L)===!1||ct!==V)&&(n.blendColor(Ge.r,Ge.g,Ge.b,ct),L.copy(Ge),V=ct),g=U,M=!1}function Q(U,be){U.side===Fn?Se(n.CULL_FACE):ne(n.CULL_FACE);let fe=U.side===Ht;be&&(fe=!fe),Y(fe),U.blending===rr&&U.transparent===!1?z(Bn):z(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const Ce=U.stencilWrite;o.setTest(Ce),Ce&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),oe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function Y(U){E!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),E=U)}function te(U){U!==Yp?(ne(n.CULL_FACE),U!==I&&(U===Sc?n.cullFace(n.BACK):U===$p?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),I=U}function y(U){U!==$&&(q&&n.lineWidth(U),$=U)}function oe(U,be,fe){U?(ne(n.POLYGON_OFFSET_FILL),(k!==be||ie!==fe)&&(n.polygonOffset(be,fe),k=be,ie=fe)):Se(n.POLYGON_OFFSET_FILL)}function re(U){U?ne(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function J(U){U===void 0&&(U=n.TEXTURE0+ee-1),de!==U&&(n.activeTexture(U),de=U)}function se(U,be,fe){fe===void 0&&(de===null?fe=n.TEXTURE0+ee-1:fe=de);let Ce=he[fe];Ce===void 0&&(Ce={type:void 0,texture:void 0},he[fe]=Ce),(Ce.type!==U||Ce.texture!==be)&&(de!==fe&&(n.activeTexture(fe),de=fe),n.bindTexture(U,be||K[U]),Ce.type=U,Ce.texture=be)}function x(){const U=he[de];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function p(){try{n.compressedTexImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function G(){try{n.texSubImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function j(){try{n.texSubImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function B(){try{n.compressedTexSubImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function Ee(){try{n.compressedTexSubImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function ce(){try{n.texStorage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function Ae(){try{n.texStorage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function Le(){try{n.texImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function le(){try{n.texImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function me(U){Ve.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Ve.copy(U))}function xe(U){ot.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ot.copy(U))}function we(U,be){let fe=c.get(be);fe===void 0&&(fe=new WeakMap,c.set(be,fe));let Ce=fe.get(U);Ce===void 0&&(Ce=n.getUniformBlockIndex(be,U.name),fe.set(U,Ce))}function pe(U,be){const Ce=c.get(be).get(U);l.get(be)!==Ce&&(n.uniformBlockBinding(be,Ce,U.__bindingPointIndex),l.set(be,Ce))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},de=null,he={},f={},h=new WeakMap,m=[],_=null,S=!1,g=null,d=null,T=null,A=null,b=null,R=null,D=null,L=new Ze(0,0,0),V=0,M=!1,E=null,I=null,$=null,k=null,ie=null,Ve.set(0,0,n.canvas.width,n.canvas.height),ot.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:Se,bindFramebuffer:Be,drawBuffers:Re,useProgram:$e,setBlending:z,setMaterial:Q,setFlipSided:Y,setCullFace:te,setLineWidth:y,setPolygonOffset:oe,setScissorTest:re,activeTexture:J,bindTexture:se,unbindTexture:x,compressedTexImage2D:p,compressedTexImage3D:C,texImage2D:Le,texImage3D:le,updateUBOMapping:we,uniformBlockBinding:pe,texStorage2D:ce,texStorage3D:Ae,texSubImage2D:G,texSubImage3D:j,compressedTexSubImage2D:B,compressedTexSubImage3D:Ee,scissor:me,viewport:xe,reset:He}}function hS(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(x,p){return m?new OffscreenCanvas(x,p):Xs("canvas")}function S(x,p,C){let G=1;const j=se(x);if((j.width>C||j.height>C)&&(G=C/Math.max(j.width,j.height)),G<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const B=Math.floor(G*j.width),Ee=Math.floor(G*j.height);f===void 0&&(f=_(B,Ee));const ce=p?_(B,Ee):f;return ce.width=B,ce.height=Ee,ce.getContext("2d").drawImage(x,0,0,B,Ee),ze("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+B+"x"+Ee+")."),ce}else return"data"in x&&ze("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),x;return x}function g(x){return x.generateMipmaps}function d(x){n.generateMipmap(x)}function T(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(x,p,C,G,j=!1){if(x!==null){if(n[x]!==void 0)return n[x];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let B=p;if(p===n.RED&&(C===n.FLOAT&&(B=n.R32F),C===n.HALF_FLOAT&&(B=n.R16F),C===n.UNSIGNED_BYTE&&(B=n.R8)),p===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(B=n.R8UI),C===n.UNSIGNED_SHORT&&(B=n.R16UI),C===n.UNSIGNED_INT&&(B=n.R32UI),C===n.BYTE&&(B=n.R8I),C===n.SHORT&&(B=n.R16I),C===n.INT&&(B=n.R32I)),p===n.RG&&(C===n.FLOAT&&(B=n.RG32F),C===n.HALF_FLOAT&&(B=n.RG16F),C===n.UNSIGNED_BYTE&&(B=n.RG8)),p===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(B=n.RG8UI),C===n.UNSIGNED_SHORT&&(B=n.RG16UI),C===n.UNSIGNED_INT&&(B=n.RG32UI),C===n.BYTE&&(B=n.RG8I),C===n.SHORT&&(B=n.RG16I),C===n.INT&&(B=n.RG32I)),p===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(B=n.RGB8UI),C===n.UNSIGNED_SHORT&&(B=n.RGB16UI),C===n.UNSIGNED_INT&&(B=n.RGB32UI),C===n.BYTE&&(B=n.RGB8I),C===n.SHORT&&(B=n.RGB16I),C===n.INT&&(B=n.RGB32I)),p===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(B=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(B=n.RGBA16UI),C===n.UNSIGNED_INT&&(B=n.RGBA32UI),C===n.BYTE&&(B=n.RGBA8I),C===n.SHORT&&(B=n.RGBA16I),C===n.INT&&(B=n.RGBA32I)),p===n.RGB&&(C===n.UNSIGNED_INT_5_9_9_9_REV&&(B=n.RGB9_E5),C===n.UNSIGNED_INT_10F_11F_11F_REV&&(B=n.R11F_G11F_B10F)),p===n.RGBA){const Ee=j?ks:je.getTransfer(G);C===n.FLOAT&&(B=n.RGBA32F),C===n.HALF_FLOAT&&(B=n.RGBA16F),C===n.UNSIGNED_BYTE&&(B=Ee===st?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(B=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(B=n.RGB5_A1)}return(B===n.R16F||B===n.R32F||B===n.RG16F||B===n.RG32F||B===n.RGBA16F||B===n.RGBA32F)&&e.get("EXT_color_buffer_float"),B}function b(x,p){let C;return x?p===null||p===bn||p===Xr?C=n.DEPTH24_STENCIL8:p===_n?C=n.DEPTH32F_STENCIL8:p===Wr&&(C=n.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===bn||p===Xr?C=n.DEPTH_COMPONENT24:p===_n?C=n.DEPTH_COMPONENT32F:p===Wr&&(C=n.DEPTH_COMPONENT16),C}function R(x,p){return g(x)===!0||x.isFramebufferTexture&&x.minFilter!==yt&&x.minFilter!==wt?Math.log2(Math.max(p.width,p.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?p.mipmaps.length:1}function D(x){const p=x.target;p.removeEventListener("dispose",D),V(p),p.isVideoTexture&&u.delete(p)}function L(x){const p=x.target;p.removeEventListener("dispose",L),E(p)}function V(x){const p=i.get(x);if(p.__webglInit===void 0)return;const C=x.source,G=h.get(C);if(G){const j=G[p.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(x),Object.keys(G).length===0&&h.delete(C)}i.remove(x)}function M(x){const p=i.get(x);n.deleteTexture(p.__webglTexture);const C=x.source,G=h.get(C);delete G[p.__cacheKey],a.memory.textures--}function E(x){const p=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(p.__webglFramebuffer[G]))for(let j=0;j<p.__webglFramebuffer[G].length;j++)n.deleteFramebuffer(p.__webglFramebuffer[G][j]);else n.deleteFramebuffer(p.__webglFramebuffer[G]);p.__webglDepthbuffer&&n.deleteRenderbuffer(p.__webglDepthbuffer[G])}else{if(Array.isArray(p.__webglFramebuffer))for(let G=0;G<p.__webglFramebuffer.length;G++)n.deleteFramebuffer(p.__webglFramebuffer[G]);else n.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&n.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&n.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let G=0;G<p.__webglColorRenderbuffer.length;G++)p.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(p.__webglColorRenderbuffer[G]);p.__webglDepthRenderbuffer&&n.deleteRenderbuffer(p.__webglDepthRenderbuffer)}const C=x.textures;for(let G=0,j=C.length;G<j;G++){const B=i.get(C[G]);B.__webglTexture&&(n.deleteTexture(B.__webglTexture),a.memory.textures--),i.remove(C[G])}i.remove(x)}let I=0;function $(){I=0}function k(){const x=I;return x>=r.maxTextures&&ze("WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),I+=1,x}function ie(x){const p=[];return p.push(x.wrapS),p.push(x.wrapT),p.push(x.wrapR||0),p.push(x.magFilter),p.push(x.minFilter),p.push(x.anisotropy),p.push(x.internalFormat),p.push(x.format),p.push(x.type),p.push(x.generateMipmaps),p.push(x.premultiplyAlpha),p.push(x.flipY),p.push(x.unpackAlignment),p.push(x.colorSpace),p.join()}function ee(x,p){const C=i.get(x);if(x.isVideoTexture&&re(x),x.isRenderTargetTexture===!1&&x.isExternalTexture!==!0&&x.version>0&&C.__version!==x.version){const G=x.image;if(G===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{K(C,x,p);return}}else x.isExternalTexture&&(C.__webglTexture=x.sourceTexture?x.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+p)}function q(x,p){const C=i.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&C.__version!==x.version){K(C,x,p);return}else x.isExternalTexture&&(C.__webglTexture=x.sourceTexture?x.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+p)}function F(x,p){const C=i.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&C.__version!==x.version){K(C,x,p);return}t.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+p)}function Z(x,p){const C=i.get(x);if(x.isCubeDepthTexture!==!0&&x.version>0&&C.__version!==x.version){ne(C,x,p);return}t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+p)}const de={[vo]:n.REPEAT,[On]:n.CLAMP_TO_EDGE,[So]:n.MIRRORED_REPEAT},he={[yt]:n.NEAREST,[gm]:n.NEAREST_MIPMAP_NEAREST,[rs]:n.NEAREST_MIPMAP_LINEAR,[wt]:n.LINEAR,[Sa]:n.LINEAR_MIPMAP_NEAREST,[wi]:n.LINEAR_MIPMAP_LINEAR},ge={[vm]:n.NEVER,[bm]:n.ALWAYS,[Sm]:n.LESS,[Cl]:n.LEQUAL,[Mm]:n.EQUAL,[Pl]:n.GEQUAL,[Em]:n.GREATER,[ym]:n.NOTEQUAL};function Fe(x,p){if(p.type===_n&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===wt||p.magFilter===Sa||p.magFilter===rs||p.magFilter===wi||p.minFilter===wt||p.minFilter===Sa||p.minFilter===rs||p.minFilter===wi)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,de[p.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,de[p.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,de[p.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,he[p.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,he[p.minFilter]),p.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,ge[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===yt||p.minFilter!==rs&&p.minFilter!==wi||p.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||i.get(p).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,r.getMaxAnisotropy())),i.get(p).__currentAnisotropy=p.anisotropy}}}function Ve(x,p){let C=!1;x.__webglInit===void 0&&(x.__webglInit=!0,p.addEventListener("dispose",D));const G=p.source;let j=h.get(G);j===void 0&&(j={},h.set(G,j));const B=ie(p);if(B!==x.__cacheKey){j[B]===void 0&&(j[B]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,C=!0),j[B].usedTimes++;const Ee=j[x.__cacheKey];Ee!==void 0&&(j[x.__cacheKey].usedTimes--,Ee.usedTimes===0&&M(p)),x.__cacheKey=B,x.__webglTexture=j[B].texture}return C}function ot(x,p,C){return Math.floor(Math.floor(x/C)/p)}function Te(x,p,C,G){const B=x.updateRanges;if(B.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,p.width,p.height,C,G,p.data);else{B.sort((le,me)=>le.start-me.start);let Ee=0;for(let le=1;le<B.length;le++){const me=B[Ee],xe=B[le],we=me.start+me.count,pe=ot(xe.start,p.width,4),He=ot(me.start,p.width,4);xe.start<=we+1&&pe===He&&ot(xe.start+xe.count-1,p.width,4)===pe?me.count=Math.max(me.count,xe.start+xe.count-me.start):(++Ee,B[Ee]=xe)}B.length=Ee+1;const ce=n.getParameter(n.UNPACK_ROW_LENGTH),Ae=n.getParameter(n.UNPACK_SKIP_PIXELS),Le=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,p.width);for(let le=0,me=B.length;le<me;le++){const xe=B[le],we=Math.floor(xe.start/4),pe=Math.ceil(xe.count/4),He=we%p.width,U=Math.floor(we/p.width),be=pe,fe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,He),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,He,U,be,fe,C,G,p.data)}x.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ce),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ae),n.pixelStorei(n.UNPACK_SKIP_ROWS,Le)}}function K(x,p,C){let G=n.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),p.isData3DTexture&&(G=n.TEXTURE_3D);const j=Ve(x,p),B=p.source;t.bindTexture(G,x.__webglTexture,n.TEXTURE0+C);const Ee=i.get(B);if(B.version!==Ee.__version||j===!0){t.activeTexture(n.TEXTURE0+C);const ce=je.getPrimaries(je.workingColorSpace),Ae=p.colorSpace===si?null:je.getPrimaries(p.colorSpace),Le=p.colorSpace===si||ce===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,p.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let le=S(p.image,!1,r.maxTextureSize);le=J(p,le);const me=s.convert(p.format,p.colorSpace),xe=s.convert(p.type);let we=A(p.internalFormat,me,xe,p.colorSpace,p.isVideoTexture);Fe(G,p);let pe;const He=p.mipmaps,U=p.isVideoTexture!==!0,be=Ee.__version===void 0||j===!0,fe=B.dataReady,Ce=R(p,le);if(p.isDepthTexture)we=b(p.format===Ri,p.type),be&&(U?t.texStorage2D(n.TEXTURE_2D,1,we,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,we,le.width,le.height,0,me,xe,null));else if(p.isDataTexture)if(He.length>0){U&&be&&t.texStorage2D(n.TEXTURE_2D,Ce,we,He[0].width,He[0].height);for(let ue=0,ae=He.length;ue<ae;ue++)pe=He[ue],U?fe&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,pe.width,pe.height,me,xe,pe.data):t.texImage2D(n.TEXTURE_2D,ue,we,pe.width,pe.height,0,me,xe,pe.data);p.generateMipmaps=!1}else U?(be&&t.texStorage2D(n.TEXTURE_2D,Ce,we,le.width,le.height),fe&&Te(p,le,me,xe)):t.texImage2D(n.TEXTURE_2D,0,we,le.width,le.height,0,me,xe,le.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){U&&be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,we,He[0].width,He[0].height,le.depth);for(let ue=0,ae=He.length;ue<ae;ue++)if(pe=He[ue],p.format!==an)if(me!==null)if(U){if(fe)if(p.layerUpdates.size>0){const _e=Kc(pe.width,pe.height,p.format,p.type);for(const Ge of p.layerUpdates){const ct=pe.data.subarray(Ge*_e/pe.data.BYTES_PER_ELEMENT,(Ge+1)*_e/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,Ge,pe.width,pe.height,1,me,ct)}p.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,pe.width,pe.height,le.depth,me,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,we,pe.width,pe.height,le.depth,0,pe.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,pe.width,pe.height,le.depth,me,xe,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,we,pe.width,pe.height,le.depth,0,me,xe,pe.data)}else{U&&be&&t.texStorage2D(n.TEXTURE_2D,Ce,we,He[0].width,He[0].height);for(let ue=0,ae=He.length;ue<ae;ue++)pe=He[ue],p.format!==an?me!==null?U?fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,pe.width,pe.height,me,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,we,pe.width,pe.height,0,pe.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?fe&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,pe.width,pe.height,me,xe,pe.data):t.texImage2D(n.TEXTURE_2D,ue,we,pe.width,pe.height,0,me,xe,pe.data)}else if(p.isDataArrayTexture)if(U){if(be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,we,le.width,le.height,le.depth),fe)if(p.layerUpdates.size>0){const ue=Kc(le.width,le.height,p.format,p.type);for(const ae of p.layerUpdates){const _e=le.data.subarray(ae*ue/le.data.BYTES_PER_ELEMENT,(ae+1)*ue/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,le.width,le.height,1,me,xe,_e)}p.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,me,xe,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,le.width,le.height,le.depth,0,me,xe,le.data);else if(p.isData3DTexture)U?(be&&t.texStorage3D(n.TEXTURE_3D,Ce,we,le.width,le.height,le.depth),fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,me,xe,le.data)):t.texImage3D(n.TEXTURE_3D,0,we,le.width,le.height,le.depth,0,me,xe,le.data);else if(p.isFramebufferTexture){if(be)if(U)t.texStorage2D(n.TEXTURE_2D,Ce,we,le.width,le.height);else{let ue=le.width,ae=le.height;for(let _e=0;_e<Ce;_e++)t.texImage2D(n.TEXTURE_2D,_e,we,ue,ae,0,me,xe,null),ue>>=1,ae>>=1}}else if(He.length>0){if(U&&be){const ue=se(He[0]);t.texStorage2D(n.TEXTURE_2D,Ce,we,ue.width,ue.height)}for(let ue=0,ae=He.length;ue<ae;ue++)pe=He[ue],U?fe&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,me,xe,pe):t.texImage2D(n.TEXTURE_2D,ue,we,me,xe,pe);p.generateMipmaps=!1}else if(U){if(be){const ue=se(le);t.texStorage2D(n.TEXTURE_2D,Ce,we,ue.width,ue.height)}fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,xe,le)}else t.texImage2D(n.TEXTURE_2D,0,we,me,xe,le);g(p)&&d(G),Ee.__version=B.version,p.onUpdate&&p.onUpdate(p)}x.__version=p.version}function ne(x,p,C){if(p.image.length!==6)return;const G=Ve(x,p),j=p.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+C);const B=i.get(j);if(j.version!==B.__version||G===!0){t.activeTexture(n.TEXTURE0+C);const Ee=je.getPrimaries(je.workingColorSpace),ce=p.colorSpace===si?null:je.getPrimaries(p.colorSpace),Ae=p.colorSpace===si||Ee===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,p.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Le=p.isCompressedTexture||p.image[0].isCompressedTexture,le=p.image[0]&&p.image[0].isDataTexture,me=[];for(let ae=0;ae<6;ae++)!Le&&!le?me[ae]=S(p.image[ae],!0,r.maxCubemapSize):me[ae]=le?p.image[ae].image:p.image[ae],me[ae]=J(p,me[ae]);const xe=me[0],we=s.convert(p.format,p.colorSpace),pe=s.convert(p.type),He=A(p.internalFormat,we,pe,p.colorSpace),U=p.isVideoTexture!==!0,be=B.__version===void 0||G===!0,fe=j.dataReady;let Ce=R(p,xe);Fe(n.TEXTURE_CUBE_MAP,p);let ue;if(Le){U&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,He,xe.width,xe.height);for(let ae=0;ae<6;ae++){ue=me[ae].mipmaps;for(let _e=0;_e<ue.length;_e++){const Ge=ue[_e];p.format!==an?we!==null?U?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e,0,0,Ge.width,Ge.height,we,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e,He,Ge.width,Ge.height,0,Ge.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e,0,0,Ge.width,Ge.height,we,pe,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e,He,Ge.width,Ge.height,0,we,pe,Ge.data)}}}else{if(ue=p.mipmaps,U&&be){ue.length>0&&Ce++;const ae=se(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,He,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(le){U?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,me[ae].width,me[ae].height,we,pe,me[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,He,me[ae].width,me[ae].height,0,we,pe,me[ae].data);for(let _e=0;_e<ue.length;_e++){const ct=ue[_e].image[ae].image;U?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e+1,0,0,ct.width,ct.height,we,pe,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e+1,He,ct.width,ct.height,0,we,pe,ct.data)}}else{U?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,we,pe,me[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,He,we,pe,me[ae]);for(let _e=0;_e<ue.length;_e++){const Ge=ue[_e];U?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e+1,0,0,we,pe,Ge.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e+1,He,we,pe,Ge.image[ae])}}}g(p)&&d(n.TEXTURE_CUBE_MAP),B.__version=j.version,p.onUpdate&&p.onUpdate(p)}x.__version=p.version}function Se(x,p,C,G,j,B){const Ee=s.convert(C.format,C.colorSpace),ce=s.convert(C.type),Ae=A(C.internalFormat,Ee,ce,C.colorSpace),Le=i.get(p),le=i.get(C);if(le.__renderTarget=p,!Le.__hasExternalTextures){const me=Math.max(1,p.width>>B),xe=Math.max(1,p.height>>B);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,B,Ae,me,xe,p.depth,0,Ee,ce,null):t.texImage2D(j,B,Ae,me,xe,0,Ee,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),oe(p)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,j,le.__webglTexture,0,y(p)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,j,le.__webglTexture,B),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(x,p,C){if(n.bindRenderbuffer(n.RENDERBUFFER,x),p.depthBuffer){const G=p.depthTexture,j=G&&G.isDepthTexture?G.type:null,B=b(p.stencilBuffer,j),Ee=p.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;oe(p)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,y(p),B,p.width,p.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,y(p),B,p.width,p.height):n.renderbufferStorage(n.RENDERBUFFER,B,p.width,p.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,x)}else{const G=p.textures;for(let j=0;j<G.length;j++){const B=G[j],Ee=s.convert(B.format,B.colorSpace),ce=s.convert(B.type),Ae=A(B.internalFormat,Ee,ce,B.colorSpace);oe(p)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,y(p),Ae,p.width,p.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,y(p),Ae,p.width,p.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,p.width,p.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(x,p,C){const G=p.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(p.depthTexture);if(j.__renderTarget=p,(!j.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),G){if(j.__webglInit===void 0&&(j.__webglInit=!0,p.depthTexture.addEventListener("dispose",D)),j.__webglTexture===void 0){j.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,p.depthTexture);const Le=s.convert(p.depthTexture.format),le=s.convert(p.depthTexture.type);let me;p.depthTexture.format===Xn?me=n.DEPTH_COMPONENT24:p.depthTexture.format===Ri&&(me=n.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,me,p.width,p.height,0,Le,le,null)}}else ee(p.depthTexture,0);const B=j.__webglTexture,Ee=y(p),ce=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+C:n.TEXTURE_2D,Ae=p.depthTexture.format===Ri?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(p.depthTexture.format===Xn)oe(p)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,ce,B,0,Ee):n.framebufferTexture2D(n.FRAMEBUFFER,Ae,ce,B,0);else if(p.depthTexture.format===Ri)oe(p)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,ce,B,0,Ee):n.framebufferTexture2D(n.FRAMEBUFFER,Ae,ce,B,0);else throw new Error("Unknown depthTexture format")}function $e(x){const p=i.get(x),C=x.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==x.depthTexture){const G=x.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),G){const j=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,G.removeEventListener("dispose",j)};G.addEventListener("dispose",j),p.__depthDisposeCallback=j}p.__boundDepthTexture=G}if(x.depthTexture&&!p.__autoAllocateDepthBuffer)if(C)for(let G=0;G<6;G++)Re(p.__webglFramebuffer[G],x,G);else{const G=x.texture.mipmaps;G&&G.length>0?Re(p.__webglFramebuffer[0],x,0):Re(p.__webglFramebuffer,x,0)}else if(C){p.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer[G]),p.__webglDepthbuffer[G]===void 0)p.__webglDepthbuffer[G]=n.createRenderbuffer(),Be(p.__webglDepthbuffer[G],x,!1);else{const j=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=p.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,B),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,B)}}else{const G=x.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=n.createRenderbuffer(),Be(p.__webglDepthbuffer,x,!1);else{const j=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=p.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,B),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,B)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function w(x,p,C){const G=i.get(x);p!==void 0&&Se(G.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&$e(x)}function P(x){const p=x.texture,C=i.get(x),G=i.get(p);x.addEventListener("dispose",L);const j=x.textures,B=x.isWebGLCubeRenderTarget===!0,Ee=j.length>1;if(Ee||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=p.version,a.memory.textures++),B){C.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(p.mipmaps&&p.mipmaps.length>0){C.__webglFramebuffer[ce]=[];for(let Ae=0;Ae<p.mipmaps.length;Ae++)C.__webglFramebuffer[ce][Ae]=n.createFramebuffer()}else C.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){C.__webglFramebuffer=[];for(let ce=0;ce<p.mipmaps.length;ce++)C.__webglFramebuffer[ce]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let ce=0,Ae=j.length;ce<Ae;ce++){const Le=i.get(j[ce]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),a.memory.textures++)}if(x.samples>0&&oe(x)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ce=0;ce<j.length;ce++){const Ae=j[ce];C.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[ce]);const Le=s.convert(Ae.format,Ae.colorSpace),le=s.convert(Ae.type),me=A(Ae.internalFormat,Le,le,Ae.colorSpace,x.isXRRenderTarget===!0),xe=y(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,me,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,C.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(C.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(B){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,p);for(let ce=0;ce<6;ce++)if(p.mipmaps&&p.mipmaps.length>0)for(let Ae=0;Ae<p.mipmaps.length;Ae++)Se(C.__webglFramebuffer[ce][Ae],x,p,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae);else Se(C.__webglFramebuffer[ce],x,p,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(p)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ce=0,Ae=j.length;ce<Ae;ce++){const Le=j[ce],le=i.get(Le);let me=n.TEXTURE_2D;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(me=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,le.__webglTexture),Fe(me,Le),Se(C.__webglFramebuffer,x,Le,n.COLOR_ATTACHMENT0+ce,me,0),g(Le)&&d(me)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ce=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,G.__webglTexture),Fe(ce,p),p.mipmaps&&p.mipmaps.length>0)for(let Ae=0;Ae<p.mipmaps.length;Ae++)Se(C.__webglFramebuffer[Ae],x,p,n.COLOR_ATTACHMENT0,ce,Ae);else Se(C.__webglFramebuffer,x,p,n.COLOR_ATTACHMENT0,ce,0);g(p)&&d(ce),t.unbindTexture()}x.depthBuffer&&$e(x)}function z(x){const p=x.textures;for(let C=0,G=p.length;C<G;C++){const j=p[C];if(g(j)){const B=T(x),Ee=i.get(j).__webglTexture;t.bindTexture(B,Ee),d(B),t.unbindTexture()}}}const Q=[],Y=[];function te(x){if(x.samples>0){if(oe(x)===!1){const p=x.textures,C=x.width,G=x.height;let j=n.COLOR_BUFFER_BIT;const B=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(x),ce=p.length>1;if(ce)for(let Le=0;Le<p.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Ae=x.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Le=0;Le<p.length;Le++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Le]);const le=i.get(p[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,C,G,0,0,C,G,j,n.NEAREST),l===!0&&(Q.length=0,Y.length=0,Q.push(n.COLOR_ATTACHMENT0+Le),x.depthBuffer&&x.resolveDepthBuffer===!1&&(Q.push(B),Y.push(B),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let Le=0;Le<p.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Le]);const le=i.get(p[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const p=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[p])}}}function y(x){return Math.min(r.maxSamples,x.samples)}function oe(x){const p=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function re(x){const p=a.render.frame;u.get(x)!==p&&(u.set(x,p),x.update())}function J(x,p){const C=x.colorSpace,G=x.format,j=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||C!==fr&&C!==si&&(je.getTransfer(C)===st?(G!==an||j!==Kt)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",C)),p}function se(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=$,this.setTexture2D=ee,this.setTexture2DArray=q,this.setTexture3D=F,this.setTextureCube=Z,this.rebindTextures=w,this.setupRenderTarget=P,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=oe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function dS(n,e){function t(i,r=si){let s;const a=je.getTransfer(r);if(i===Kt)return n.UNSIGNED_BYTE;if(i===bl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Bf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ff)return n.BYTE;if(i===Of)return n.SHORT;if(i===Wr)return n.UNSIGNED_SHORT;if(i===yl)return n.INT;if(i===bn)return n.UNSIGNED_INT;if(i===_n)return n.FLOAT;if(i===Wn)return n.HALF_FLOAT;if(i===Vf)return n.ALPHA;if(i===Gf)return n.RGB;if(i===an)return n.RGBA;if(i===Xn)return n.DEPTH_COMPONENT;if(i===Ri)return n.DEPTH_STENCIL;if(i===Hf)return n.RED;if(i===Al)return n.RED_INTEGER;if(i===ur)return n.RG;if(i===wl)return n.RG_INTEGER;if(i===Rl)return n.RGBA_INTEGER;if(i===Ls||i===Is||i===Us||i===Ns)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ls)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ls)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Is)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Us)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ns)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mo||i===Eo||i===yo||i===bo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Mo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Eo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===To||i===Ao||i===wo||i===Ro||i===Co||i===Po||i===Do)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===To||i===Ao)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===wo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ro)return s.COMPRESSED_R11_EAC;if(i===Co)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Po)return s.COMPRESSED_RG11_EAC;if(i===Do)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Lo||i===Io||i===Uo||i===No||i===Fo||i===Oo||i===Bo||i===zo||i===Vo||i===Go||i===Ho||i===ko||i===Wo||i===Xo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Lo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Io)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Uo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===No)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Oo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Go)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ho)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ko)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qo||i===Yo||i===$o)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===qo)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$o)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ko||i===jo||i===Zo||i===Jo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ko)return s.COMPRESSED_RED_RGTC1_EXT;if(i===jo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const pS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mS=`
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

}`;class gS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new th(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new An({vertexShader:pS,fragmentShader:mS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new na(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _S extends dr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,_=null;const S=typeof XRWebGLBinding<"u",g=new gS,d={},T=t.getContextAttributes();let A=null,b=null;const R=[],D=[],L=new et;let V=null;const M=new en;M.viewport=new gt;const E=new en;E.viewport=new gt;const I=[M,E],$=new Ag;let k=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=R[K];return ne===void 0&&(ne=new Ga,R[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=R[K];return ne===void 0&&(ne=new Ga,R[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=R[K];return ne===void 0&&(ne=new Ga,R[K]=ne),ne.getHandSpace()};function ee(K){const ne=D.indexOf(K.inputSource);if(ne===-1)return;const Se=R[ne];Se!==void 0&&(Se.update(K.inputSource,K.frame,c||a),Se.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",F);for(let K=0;K<R.length;K++){const ne=D[K];ne!==null&&(D[K]=null,R[K].disconnect(ne))}k=null,ie=null,g.reset();for(const K in d)delete d[K];e.setRenderTarget(A),m=null,h=null,f=null,r=null,b=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(V),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",q),r.addEventListener("inputsourceschange",F),T.xrCompatible!==!0&&await t.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(L),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Be=null,Re=null;T.depth&&(Re=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=T.stencil?Ri:Xn,Be=T.stencil?Xr:bn);const $e={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer($e),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new Mn(h.textureWidth,h.textureHeight,{format:an,type:Kt,depthTexture:new $r(h.textureWidth,h.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Se={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Mn(m.framebufferWidth,m.framebufferHeight,{format:an,type:Kt,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Te.setContext(r),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function F(K){for(let ne=0;ne<K.removed.length;ne++){const Se=K.removed[ne],Be=D.indexOf(Se);Be>=0&&(D[Be]=null,R[Be].disconnect(Se))}for(let ne=0;ne<K.added.length;ne++){const Se=K.added[ne];let Be=D.indexOf(Se);if(Be===-1){for(let $e=0;$e<R.length;$e++)if($e>=D.length){D.push(Se),Be=$e;break}else if(D[$e]===null){D[$e]=Se,Be=$e;break}if(Be===-1)break}const Re=R[Be];Re&&Re.connect(Se)}}const Z=new H,de=new H;function he(K,ne,Se){Z.setFromMatrixPosition(ne.matrixWorld),de.setFromMatrixPosition(Se.matrixWorld);const Be=Z.distanceTo(de),Re=ne.projectionMatrix.elements,$e=Se.projectionMatrix.elements,w=Re[14]/(Re[10]-1),P=Re[14]/(Re[10]+1),z=(Re[9]+1)/Re[5],Q=(Re[9]-1)/Re[5],Y=(Re[8]-1)/Re[0],te=($e[8]+1)/$e[0],y=w*Y,oe=w*te,re=Be/(-Y+te),J=re*-Y;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(J),K.translateZ(re),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Re[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const se=w+re,x=P+re,p=y-J,C=oe+(Be-J),G=z*P/x*se,j=Q*P/x*se;K.projectionMatrix.makePerspective(p,C,G,j,se,x),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ge(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ne=K.near,Se=K.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(Se=g.depthFar)),$.near=E.near=M.near=ne,$.far=E.far=M.far=Se,(k!==$.near||ie!==$.far)&&(r.updateRenderState({depthNear:$.near,depthFar:$.far}),k=$.near,ie=$.far),$.layers.mask=K.layers.mask|6,M.layers.mask=$.layers.mask&3,E.layers.mask=$.layers.mask&5;const Be=K.parent,Re=$.cameras;ge($,Be);for(let $e=0;$e<Re.length;$e++)ge(Re[$e],Be);Re.length===2?he($,M,E):$.projectionMatrix.copy(M.projectionMatrix),Fe(K,$,Be)};function Fe(K,ne,Se){Se===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(Se.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Yr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh($)},this.getCameraTexture=function(K){return d[K]};let Ve=null;function ot(K,ne){if(u=ne.getViewerPose(c||a),_=ne,u!==null){const Se=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let Be=!1;Se.length!==$.cameras.length&&($.cameras.length=0,Be=!0);for(let P=0;P<Se.length;P++){const z=Se[P];let Q=null;if(m!==null)Q=m.getViewport(z);else{const te=f.getViewSubImage(h,z);Q=te.viewport,P===0&&(e.setRenderTargetTextures(b,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(b))}let Y=I[P];Y===void 0&&(Y=new en,Y.layers.enable(P),Y.viewport=new gt,I[P]=Y),Y.matrix.fromArray(z.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(z.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(Q.x,Q.y,Q.width,Q.height),P===0&&($.matrix.copy(Y.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Be===!0&&$.cameras.push(Y)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=i.getBinding();const P=f.getDepthInformation(Se[0]);P&&P.isValid&&P.texture&&g.init(P,r.renderState)}if(Re&&Re.includes("camera-access")&&S){e.state.unbindTexture(),f=i.getBinding();for(let P=0;P<Se.length;P++){const z=Se[P].camera;if(z){let Q=d[z];Q||(Q=new th,d[z]=Q);const Y=f.getCameraImage(z);Q.sourceTexture=Y}}}}for(let Se=0;Se<R.length;Se++){const Be=D[Se],Re=R[Se];Be!==null&&Re!==void 0&&Re.update(Be,ne,c||a)}Ve&&Ve(K,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}const Te=new ih;Te.setAnimationLoop(ot),this.setAnimationLoop=function(K){Ve=K},this.dispose=function(){}}}const Ei=new Tn,xS=new _t;function vS(n,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,Zf(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,T,A,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),u(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&m(g,d,b)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),S(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,T,A):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Ht&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Ht&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const T=e.get(d),A=T.envMap,b=T.envMapRotation;A&&(g.envMap.value=A,Ei.copy(b),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),g.envMapRotation.value.setFromMatrix4(xS.makeRotationFromEuler(Ei)),g.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,T,A){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*T,g.scale.value=A*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,T){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ht&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function S(g,d){const T=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function SS(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,A){const b=A.program;i.uniformBlockBinding(T,b)}function c(T,A){let b=r[T.id];b===void 0&&(_(T),b=u(T),r[T.id]=b,T.addEventListener("dispose",g));const R=A.program;i.updateUBOMapping(T,R);const D=e.render.frame;s[T.id]!==D&&(h(T),s[T.id]=D)}function u(T){const A=f();T.__bindingPointIndex=A;const b=n.createBuffer(),R=T.__size,D=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,b),b}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const A=r[T.id],b=T.uniforms,R=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let D=0,L=b.length;D<L;D++){const V=Array.isArray(b[D])?b[D]:[b[D]];for(let M=0,E=V.length;M<E;M++){const I=V[M];if(m(I,D,M,R)===!0){const $=I.__offset,k=Array.isArray(I.value)?I.value:[I.value];let ie=0;for(let ee=0;ee<k.length;ee++){const q=k[ee],F=S(q);typeof q=="number"||typeof q=="boolean"?(I.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,$+ie,I.__data)):q.isMatrix3?(I.__data[0]=q.elements[0],I.__data[1]=q.elements[1],I.__data[2]=q.elements[2],I.__data[3]=0,I.__data[4]=q.elements[3],I.__data[5]=q.elements[4],I.__data[6]=q.elements[5],I.__data[7]=0,I.__data[8]=q.elements[6],I.__data[9]=q.elements[7],I.__data[10]=q.elements[8],I.__data[11]=0):(q.toArray(I.__data,ie),ie+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,A,b,R){const D=T.value,L=A+"_"+b;if(R[L]===void 0)return typeof D=="number"||typeof D=="boolean"?R[L]=D:R[L]=D.clone(),!0;{const V=R[L];if(typeof D=="number"||typeof D=="boolean"){if(V!==D)return R[L]=D,!0}else if(V.equals(D)===!1)return V.copy(D),!0}return!1}function _(T){const A=T.uniforms;let b=0;const R=16;for(let L=0,V=A.length;L<V;L++){const M=Array.isArray(A[L])?A[L]:[A[L]];for(let E=0,I=M.length;E<I;E++){const $=M[E],k=Array.isArray($.value)?$.value:[$.value];for(let ie=0,ee=k.length;ie<ee;ie++){const q=k[ie],F=S(q),Z=b%R,de=Z%F.boundary,he=Z+de;b+=de,he!==0&&R-he<F.storage&&(b+=R-he),$.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=b,b+=F.storage}}}const D=b%R;return D>0&&(b+=R-D),T.__size=b,T.__cache={},this}function S(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ze("WebGLRenderer: Unsupported uniform value type.",T),A}function g(T){const A=T.target;A.removeEventListener("dispose",g);const b=a.indexOf(A.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}const MS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fn=null;function ES(){return fn===null&&(fn=new pg(MS,16,16,ur,Wn),fn.name="DFG_LUT",fn.minFilter=wt,fn.magFilter=wt,fn.wrapS=On,fn.wrapT=On,fn.generateMipmaps=!1,fn.needsUpdate=!0),fn}class yS{constructor(e={}){const{canvas:t=Tm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:m=Kt}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const S=m,g=new Set([Rl,wl,Al]),d=new Set([Kt,bn,Wr,Xr,bl,Tl]),T=new Uint32Array(4),A=new Int32Array(4);let b=null,R=null;const D=[],L=[];let V=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let E=!1;this._outputColorSpace=Qt;let I=0,$=0,k=null,ie=-1,ee=null;const q=new gt,F=new gt;let Z=null;const de=new Ze(0);let he=0,ge=t.width,Fe=t.height,Ve=1,ot=null,Te=null;const K=new gt(0,0,ge,Fe),ne=new gt(0,0,ge,Fe);let Se=!1;const Be=new Nl;let Re=!1,$e=!1;const w=new _t,P=new H,z=new gt,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Y=!1;function te(){return k===null?Ve:1}let y=i;function oe(v,N){return t.getContext(v,N)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${El}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",it,!1),y===null){const N="webgl2";if(y=oe(N,v),y===null)throw oe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw Qe("WebGLRenderer: "+v.message),v}let re,J,se,x,p,C,G,j,B,Ee,ce,Ae,Le,le,me,xe,we,pe,He,U,be,fe,Ce,ue;function ae(){re=new Ex(y),re.init(),fe=new dS(y,re),J=new dx(y,re,e,fe),se=new fS(y,re),J.reversedDepthBuffer&&h&&se.buffers.depth.setReversed(!0),x=new Tx(y),p=new jv,C=new hS(y,re,se,p,J,fe,x),G=new mx(M),j=new Mx(M),B=new Cg(y),Ce=new fx(y,B),Ee=new yx(y,B,x,Ce),ce=new wx(y,Ee,B,x),He=new Ax(y,J,C),xe=new px(p),Ae=new Kv(M,G,j,re,J,Ce,xe),Le=new vS(M,p),le=new Jv,me=new rS(re),pe=new ux(M,G,j,se,ce,_,l),we=new cS(M,ce,J),ue=new SS(y,x,J,se),U=new hx(y,re,x),be=new bx(y,re,x),x.programs=Ae.programs,M.capabilities=J,M.extensions=re,M.properties=p,M.renderLists=le,M.shadowMap=we,M.state=se,M.info=x}ae(),S!==Kt&&(V=new Cx(S,t.width,t.height,r,s));const _e=new _S(M,y);this.xr=_e,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const v=re.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=re.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Ve},this.setPixelRatio=function(v){v!==void 0&&(Ve=v,this.setSize(ge,Fe,!1))},this.getSize=function(v){return v.set(ge,Fe)},this.setSize=function(v,N,X=!0){if(_e.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=v,Fe=N,t.width=Math.floor(v*Ve),t.height=Math.floor(N*Ve),X===!0&&(t.style.width=v+"px",t.style.height=N+"px"),V!==null&&V.setSize(t.width,t.height),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(ge*Ve,Fe*Ve).floor()},this.setDrawingBufferSize=function(v,N,X){ge=v,Fe=N,Ve=X,t.width=Math.floor(v*X),t.height=Math.floor(N*X),this.setViewport(0,0,v,N)},this.setEffects=function(v){if(S===Kt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let N=0;N<v.length;N++)if(v[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(q)},this.getViewport=function(v){return v.copy(K)},this.setViewport=function(v,N,X,W){v.isVector4?K.set(v.x,v.y,v.z,v.w):K.set(v,N,X,W),se.viewport(q.copy(K).multiplyScalar(Ve).round())},this.getScissor=function(v){return v.copy(ne)},this.setScissor=function(v,N,X,W){v.isVector4?ne.set(v.x,v.y,v.z,v.w):ne.set(v,N,X,W),se.scissor(F.copy(ne).multiplyScalar(Ve).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(v){se.setScissorTest(Se=v)},this.setOpaqueSort=function(v){ot=v},this.setTransparentSort=function(v){Te=v},this.getClearColor=function(v){return v.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(v=!0,N=!0,X=!0){let W=0;if(v){let O=!1;if(k!==null){const ve=k.texture.format;O=g.has(ve)}if(O){const ve=k.texture.type,Pe=d.has(ve),ye=pe.getClearColor(),De=pe.getClearAlpha(),Ie=ye.r,Oe=ye.g,Ue=ye.b;Pe?(T[0]=Ie,T[1]=Oe,T[2]=Ue,T[3]=De,y.clearBufferuiv(y.COLOR,0,T)):(A[0]=Ie,A[1]=Oe,A[2]=Ue,A[3]=De,y.clearBufferiv(y.COLOR,0,A))}else W|=y.COLOR_BUFFER_BIT}N&&(W|=y.DEPTH_BUFFER_BIT),X&&(W|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",it,!1),pe.dispose(),le.dispose(),me.dispose(),p.dispose(),G.dispose(),j.dispose(),ce.dispose(),Ce.dispose(),ue.dispose(),Ae.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Bl),_e.removeEventListener("sessionend",zl),di.stop()};function Ge(v){v.preventDefault(),Rc("WebGLRenderer: Context Lost."),E=!0}function ct(){Rc("WebGLRenderer: Context Restored."),E=!1;const v=x.autoReset,N=we.enabled,X=we.autoUpdate,W=we.needsUpdate,O=we.type;ae(),x.autoReset=v,we.enabled=N,we.autoUpdate=X,we.needsUpdate=W,we.type=O}function it(v){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function cn(v){const N=v.target;N.removeEventListener("dispose",cn),wn(N)}function wn(v){ch(v),p.remove(v)}function ch(v){const N=p.get(v).programs;N!==void 0&&(N.forEach(function(X){Ae.releaseProgram(X)}),v.isShaderMaterial&&Ae.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,X,W,O,ve){N===null&&(N=Q);const Pe=O.isMesh&&O.matrixWorld.determinant()<0,ye=fh(v,N,X,W,O);se.setMaterial(W,Pe);let De=X.index,Ie=1;if(W.wireframe===!0){if(De=Ee.getWireframeAttribute(X),De===void 0)return;Ie=2}const Oe=X.drawRange,Ue=X.attributes.position;let Ye=Oe.start*Ie,at=(Oe.start+Oe.count)*Ie;ve!==null&&(Ye=Math.max(Ye,ve.start*Ie),at=Math.min(at,(ve.start+ve.count)*Ie)),De!==null?(Ye=Math.max(Ye,0),at=Math.min(at,De.count)):Ue!=null&&(Ye=Math.max(Ye,0),at=Math.min(at,Ue.count));const pt=at-Ye;if(pt<0||pt===1/0)return;Ce.setup(O,W,ye,X,De);let mt,lt=U;if(De!==null&&(mt=B.get(De),lt=be,lt.setIndex(mt)),O.isMesh)W.wireframe===!0?(se.setLineWidth(W.wireframeLinewidth*te()),lt.setMode(y.LINES)):lt.setMode(y.TRIANGLES);else if(O.isLine){let Ne=W.linewidth;Ne===void 0&&(Ne=1),se.setLineWidth(Ne*te()),O.isLineSegments?lt.setMode(y.LINES):O.isLineLoop?lt.setMode(y.LINE_LOOP):lt.setMode(y.LINE_STRIP)}else O.isPoints?lt.setMode(y.POINTS):O.isSprite&&lt.setMode(y.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)qr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))lt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ne=O._multiDrawStarts,rt=O._multiDrawCounts,Je=O._multiDrawCount,Wt=De?B.get(De).bytesPerElement:1,Ii=p.get(W).currentProgram.getUniforms();for(let Xt=0;Xt<Je;Xt++)Ii.setValue(y,"_gl_DrawID",Xt),lt.render(Ne[Xt]/Wt,rt[Xt])}else if(O.isInstancedMesh)lt.renderInstances(Ye,pt,O.count);else if(X.isInstancedBufferGeometry){const Ne=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,rt=Math.min(X.instanceCount,Ne);lt.renderInstances(Ye,pt,rt)}else lt.render(Ye,pt)};function Ol(v,N,X){v.transparent===!0&&v.side===Fn&&v.forceSinglePass===!1?(v.side=Ht,v.needsUpdate=!0,es(v,N,X),v.side=fi,v.needsUpdate=!0,es(v,N,X),v.side=Fn):es(v,N,X)}this.compile=function(v,N,X=null){X===null&&(X=v),R=me.get(X),R.init(N),L.push(R),X.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(R.pushLight(O),O.castShadow&&R.pushShadow(O))}),v!==X&&v.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(R.pushLight(O),O.castShadow&&R.pushShadow(O))}),R.setupLights();const W=new Set;return v.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ve=O.material;if(ve)if(Array.isArray(ve))for(let Pe=0;Pe<ve.length;Pe++){const ye=ve[Pe];Ol(ye,X,O),W.add(ye)}else Ol(ve,X,O),W.add(ve)}),R=L.pop(),W},this.compileAsync=function(v,N,X=null){const W=this.compile(v,N,X);return new Promise(O=>{function ve(){if(W.forEach(function(Pe){p.get(Pe).currentProgram.isReady()&&W.delete(Pe)}),W.size===0){O(v);return}setTimeout(ve,10)}re.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let sa=null;function uh(v){sa&&sa(v)}function Bl(){di.stop()}function zl(){di.start()}const di=new ih;di.setAnimationLoop(uh),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(v){sa=v,_e.setAnimationLoop(v),v===null?di.stop():di.start()},_e.addEventListener("sessionstart",Bl),_e.addEventListener("sessionend",zl),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;const X=_e.enabled===!0&&_e.isPresenting===!0,W=V!==null&&(k===null||X)&&V.begin(M,k);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(N),N=_e.getCamera()),v.isScene===!0&&v.onBeforeRender(M,v,N,k),R=me.get(v,L.length),R.init(N),L.push(R),w.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Be.setFromProjectionMatrix(w,xn,N.reversedDepth),$e=this.localClippingEnabled,Re=xe.init(this.clippingPlanes,$e),b=le.get(v,D.length),b.init(),D.push(b),_e.enabled===!0&&_e.isPresenting===!0){const Pe=M.xr.getDepthSensingMesh();Pe!==null&&aa(Pe,N,-1/0,M.sortObjects)}aa(v,N,0,M.sortObjects),b.finish(),M.sortObjects===!0&&b.sort(ot,Te),Y=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,Y&&pe.addToRenderList(b,v),this.info.render.frame++,Re===!0&&xe.beginShadows();const O=R.state.shadowsArray;if(we.render(O,v,N),Re===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&V.hasRenderPass())===!1){const Pe=b.opaque,ye=b.transmissive;if(R.setupLights(),N.isArrayCamera){const De=N.cameras;if(ye.length>0)for(let Ie=0,Oe=De.length;Ie<Oe;Ie++){const Ue=De[Ie];Gl(Pe,ye,v,Ue)}Y&&pe.render(v);for(let Ie=0,Oe=De.length;Ie<Oe;Ie++){const Ue=De[Ie];Vl(b,v,Ue,Ue.viewport)}}else ye.length>0&&Gl(Pe,ye,v,N),Y&&pe.render(v),Vl(b,v,N)}k!==null&&$===0&&(C.updateMultisampleRenderTarget(k),C.updateRenderTargetMipmap(k)),W&&V.end(M),v.isScene===!0&&v.onAfterRender(M,v,N),Ce.resetDefaultState(),ie=-1,ee=null,L.pop(),L.length>0?(R=L[L.length-1],Re===!0&&xe.setGlobalState(M.clippingPlanes,R.state.camera)):R=null,D.pop(),D.length>0?b=D[D.length-1]:b=null};function aa(v,N,X,W){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)X=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLight)R.pushLight(v),v.castShadow&&R.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Be.intersectsSprite(v)){W&&z.setFromMatrixPosition(v.matrixWorld).applyMatrix4(w);const Pe=ce.update(v),ye=v.material;ye.visible&&b.push(v,Pe,ye,X,z.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Be.intersectsObject(v))){const Pe=ce.update(v),ye=v.material;if(W&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),z.copy(v.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),z.copy(Pe.boundingSphere.center)),z.applyMatrix4(v.matrixWorld).applyMatrix4(w)),Array.isArray(ye)){const De=Pe.groups;for(let Ie=0,Oe=De.length;Ie<Oe;Ie++){const Ue=De[Ie],Ye=ye[Ue.materialIndex];Ye&&Ye.visible&&b.push(v,Pe,Ye,X,z.z,Ue)}}else ye.visible&&b.push(v,Pe,ye,X,z.z,null)}}const ve=v.children;for(let Pe=0,ye=ve.length;Pe<ye;Pe++)aa(ve[Pe],N,X,W)}function Vl(v,N,X,W){const{opaque:O,transmissive:ve,transparent:Pe}=v;R.setupLightsView(X),Re===!0&&xe.setGlobalState(M.clippingPlanes,X),W&&se.viewport(q.copy(W)),O.length>0&&Qr(O,N,X),ve.length>0&&Qr(ve,N,X),Pe.length>0&&Qr(Pe,N,X),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Gl(v,N,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[W.id]===void 0){const Ye=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[W.id]=new Mn(1,1,{generateMipmaps:!0,type:Ye?Wn:Kt,minFilter:wi,samples:J.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const ve=R.state.transmissionRenderTarget[W.id],Pe=W.viewport||q;ve.setSize(Pe.z*M.transmissionResolutionScale,Pe.w*M.transmissionResolutionScale);const ye=M.getRenderTarget(),De=M.getActiveCubeFace(),Ie=M.getActiveMipmapLevel();M.setRenderTarget(ve),M.getClearColor(de),he=M.getClearAlpha(),he<1&&M.setClearColor(16777215,.5),M.clear(),Y&&pe.render(X);const Oe=M.toneMapping;M.toneMapping=Sn;const Ue=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),R.setupLightsView(W),Re===!0&&xe.setGlobalState(M.clippingPlanes,W),Qr(v,X,W),C.updateMultisampleRenderTarget(ve),C.updateRenderTargetMipmap(ve),re.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let at=0,pt=N.length;at<pt;at++){const mt=N[at],{object:lt,geometry:Ne,material:rt,group:Je}=mt;if(rt.side===Fn&&lt.layers.test(W.layers)){const Wt=rt.side;rt.side=Ht,rt.needsUpdate=!0,Hl(lt,X,W,Ne,rt,Je),rt.side=Wt,rt.needsUpdate=!0,Ye=!0}}Ye===!0&&(C.updateMultisampleRenderTarget(ve),C.updateRenderTargetMipmap(ve))}M.setRenderTarget(ye,De,Ie),M.setClearColor(de,he),Ue!==void 0&&(W.viewport=Ue),M.toneMapping=Oe}function Qr(v,N,X){const W=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ve=v.length;O<ve;O++){const Pe=v[O],{object:ye,geometry:De,group:Ie}=Pe;let Oe=Pe.material;Oe.allowOverride===!0&&W!==null&&(Oe=W),ye.layers.test(X.layers)&&Hl(ye,N,X,De,Oe,Ie)}}function Hl(v,N,X,W,O,ve){v.onBeforeRender(M,N,X,W,O,ve),v.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),O.onBeforeRender(M,N,X,W,v,ve),O.transparent===!0&&O.side===Fn&&O.forceSinglePass===!1?(O.side=Ht,O.needsUpdate=!0,M.renderBufferDirect(X,N,W,O,v,ve),O.side=fi,O.needsUpdate=!0,M.renderBufferDirect(X,N,W,O,v,ve),O.side=Fn):M.renderBufferDirect(X,N,W,O,v,ve),v.onAfterRender(M,N,X,W,O,ve)}function es(v,N,X){N.isScene!==!0&&(N=Q);const W=p.get(v),O=R.state.lights,ve=R.state.shadowsArray,Pe=O.state.version,ye=Ae.getParameters(v,O.state,ve,N,X),De=Ae.getProgramCacheKey(ye);let Ie=W.programs;W.environment=v.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(v.isMeshStandardMaterial?j:G).get(v.envMap||W.environment),W.envMapRotation=W.environment!==null&&v.envMap===null?N.environmentRotation:v.envMapRotation,Ie===void 0&&(v.addEventListener("dispose",cn),Ie=new Map,W.programs=Ie);let Oe=Ie.get(De);if(Oe!==void 0){if(W.currentProgram===Oe&&W.lightsStateVersion===Pe)return Wl(v,ye),Oe}else ye.uniforms=Ae.getUniforms(v),v.onBeforeCompile(ye,M),Oe=Ae.acquireProgram(ye,De),Ie.set(De,Oe),W.uniforms=ye.uniforms;const Ue=W.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ue.clippingPlanes=xe.uniform),Wl(v,ye),W.needsLights=dh(v),W.lightsStateVersion=Pe,W.needsLights&&(Ue.ambientLightColor.value=O.state.ambient,Ue.lightProbe.value=O.state.probe,Ue.directionalLights.value=O.state.directional,Ue.directionalLightShadows.value=O.state.directionalShadow,Ue.spotLights.value=O.state.spot,Ue.spotLightShadows.value=O.state.spotShadow,Ue.rectAreaLights.value=O.state.rectArea,Ue.ltc_1.value=O.state.rectAreaLTC1,Ue.ltc_2.value=O.state.rectAreaLTC2,Ue.pointLights.value=O.state.point,Ue.pointLightShadows.value=O.state.pointShadow,Ue.hemisphereLights.value=O.state.hemi,Ue.directionalShadowMap.value=O.state.directionalShadowMap,Ue.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ue.spotShadowMap.value=O.state.spotShadowMap,Ue.spotLightMatrix.value=O.state.spotLightMatrix,Ue.spotLightMap.value=O.state.spotLightMap,Ue.pointShadowMap.value=O.state.pointShadowMap,Ue.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Oe,W.uniformsList=null,Oe}function kl(v){if(v.uniformsList===null){const N=v.currentProgram.getUniforms();v.uniformsList=Fs.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function Wl(v,N){const X=p.get(v);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function fh(v,N,X,W,O){N.isScene!==!0&&(N=Q),C.resetTextureUnits();const ve=N.fog,Pe=W.isMeshStandardMaterial?N.environment:null,ye=k===null?M.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:fr,De=(W.isMeshStandardMaterial?j:G).get(W.envMap||Pe),Ie=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Oe=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ue=!!X.morphAttributes.position,Ye=!!X.morphAttributes.normal,at=!!X.morphAttributes.color;let pt=Sn;W.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(pt=M.toneMapping);const mt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,lt=mt!==void 0?mt.length:0,Ne=p.get(W),rt=R.state.lights;if(Re===!0&&($e===!0||v!==ee)){const Pt=v===ee&&W.id===ie;xe.setState(W,v,Pt)}let Je=!1;W.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==rt.state.version||Ne.outputColorSpace!==ye||O.isBatchedMesh&&Ne.batching===!1||!O.isBatchedMesh&&Ne.batching===!0||O.isBatchedMesh&&Ne.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ne.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ne.instancing===!1||!O.isInstancedMesh&&Ne.instancing===!0||O.isSkinnedMesh&&Ne.skinning===!1||!O.isSkinnedMesh&&Ne.skinning===!0||O.isInstancedMesh&&Ne.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ne.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ne.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ne.instancingMorph===!1&&O.morphTexture!==null||Ne.envMap!==De||W.fog===!0&&Ne.fog!==ve||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==xe.numPlanes||Ne.numIntersection!==xe.numIntersection)||Ne.vertexAlphas!==Ie||Ne.vertexTangents!==Oe||Ne.morphTargets!==Ue||Ne.morphNormals!==Ye||Ne.morphColors!==at||Ne.toneMapping!==pt||Ne.morphTargetsCount!==lt)&&(Je=!0):(Je=!0,Ne.__version=W.version);let Wt=Ne.currentProgram;Je===!0&&(Wt=es(W,N,O));let Ii=!1,Xt=!1,gr=!1;const ut=Wt.getUniforms(),Bt=Ne.uniforms;if(se.useProgram(Wt.program)&&(Ii=!0,Xt=!0,gr=!0),W.id!==ie&&(ie=W.id,Xt=!0),Ii||ee!==v){se.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ut.setValue(y,"projectionMatrix",v.projectionMatrix),ut.setValue(y,"viewMatrix",v.matrixWorldInverse);const zt=ut.map.cameraPosition;zt!==void 0&&zt.setValue(y,P.setFromMatrixPosition(v.matrixWorld)),J.logarithmicDepthBuffer&&ut.setValue(y,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ut.setValue(y,"isOrthographic",v.isOrthographicCamera===!0),ee!==v&&(ee=v,Xt=!0,gr=!0)}if(Ne.needsLights&&(rt.state.directionalShadowMap.length>0&&ut.setValue(y,"directionalShadowMap",rt.state.directionalShadowMap,C),rt.state.spotShadowMap.length>0&&ut.setValue(y,"spotShadowMap",rt.state.spotShadowMap,C),rt.state.pointShadowMap.length>0&&ut.setValue(y,"pointShadowMap",rt.state.pointShadowMap,C)),O.isSkinnedMesh){ut.setOptional(y,O,"bindMatrix"),ut.setOptional(y,O,"bindMatrixInverse");const Pt=O.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ut.setValue(y,"boneTexture",Pt.boneTexture,C))}O.isBatchedMesh&&(ut.setOptional(y,O,"batchingTexture"),ut.setValue(y,"batchingTexture",O._matricesTexture,C),ut.setOptional(y,O,"batchingIdTexture"),ut.setValue(y,"batchingIdTexture",O._indirectTexture,C),ut.setOptional(y,O,"batchingColorTexture"),O._colorsTexture!==null&&ut.setValue(y,"batchingColorTexture",O._colorsTexture,C));const Zt=X.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&He.update(O,X,Wt),(Xt||Ne.receiveShadow!==O.receiveShadow)&&(Ne.receiveShadow=O.receiveShadow,ut.setValue(y,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Bt.envMap.value=De,Bt.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(Bt.envMapIntensity.value=N.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=ES()),Xt&&(ut.setValue(y,"toneMappingExposure",M.toneMappingExposure),Ne.needsLights&&hh(Bt,gr),ve&&W.fog===!0&&Le.refreshFogUniforms(Bt,ve),Le.refreshMaterialUniforms(Bt,W,Ve,Fe,R.state.transmissionRenderTarget[v.id]),Fs.upload(y,kl(Ne),Bt,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Fs.upload(y,kl(Ne),Bt,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ut.setValue(y,"center",O.center),ut.setValue(y,"modelViewMatrix",O.modelViewMatrix),ut.setValue(y,"normalMatrix",O.normalMatrix),ut.setValue(y,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Pt=W.uniformsGroups;for(let zt=0,oa=Pt.length;zt<oa;zt++){const pi=Pt[zt];ue.update(pi,Wt),ue.bind(pi,Wt)}}return Wt}function hh(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function dh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(v,N,X){const W=p.get(v);W.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),p.get(v.texture).__webglTexture=N,p.get(v.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,N){const X=p.get(v);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0};const ph=y.createFramebuffer();this.setRenderTarget=function(v,N=0,X=0){k=v,I=N,$=X;let W=null,O=!1,ve=!1;if(v){const ye=p.get(v);if(ye.__useDefaultFramebuffer!==void 0){se.bindFramebuffer(y.FRAMEBUFFER,ye.__webglFramebuffer),q.copy(v.viewport),F.copy(v.scissor),Z=v.scissorTest,se.viewport(q),se.scissor(F),se.setScissorTest(Z),ie=-1;return}else if(ye.__webglFramebuffer===void 0)C.setupRenderTarget(v);else if(ye.__hasExternalTextures)C.rebindTextures(v,p.get(v.texture).__webglTexture,p.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Oe=v.depthTexture;if(ye.__boundDepthTexture!==Oe){if(Oe!==null&&p.has(Oe)&&(v.width!==Oe.image.width||v.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(v)}}const De=v.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ve=!0);const Ie=p.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ie[N])?W=Ie[N][X]:W=Ie[N],O=!0):v.samples>0&&C.useMultisampledRTT(v)===!1?W=p.get(v).__webglMultisampledFramebuffer:Array.isArray(Ie)?W=Ie[X]:W=Ie,q.copy(v.viewport),F.copy(v.scissor),Z=v.scissorTest}else q.copy(K).multiplyScalar(Ve).floor(),F.copy(ne).multiplyScalar(Ve).floor(),Z=Se;if(X!==0&&(W=ph),se.bindFramebuffer(y.FRAMEBUFFER,W)&&se.drawBuffers(v,W),se.viewport(q),se.scissor(F),se.setScissorTest(Z),O){const ye=p.get(v.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye.__webglTexture,X)}else if(ve){const ye=N;for(let De=0;De<v.textures.length;De++){const Ie=p.get(v.textures[De]);y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0+De,Ie.__webglTexture,X,ye)}}else if(v!==null&&X!==0){const ye=p.get(v.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,ye.__webglTexture,X)}ie=-1},this.readRenderTargetPixels=function(v,N,X,W,O,ve,Pe,ye=0){if(!(v&&v.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=p.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Pe!==void 0&&(De=De[Pe]),De){se.bindFramebuffer(y.FRAMEBUFFER,De);try{const Ie=v.textures[ye],Oe=Ie.format,Ue=Ie.type;if(!J.textureFormatReadable(Oe)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Ue)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-W&&X>=0&&X<=v.height-O&&(v.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+ye),y.readPixels(N,X,W,O,fe.convert(Oe),fe.convert(Ue),ve))}finally{const Ie=k!==null?p.get(k).__webglFramebuffer:null;se.bindFramebuffer(y.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(v,N,X,W,O,ve,Pe,ye=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=p.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Pe!==void 0&&(De=De[Pe]),De)if(N>=0&&N<=v.width-W&&X>=0&&X<=v.height-O){se.bindFramebuffer(y.FRAMEBUFFER,De);const Ie=v.textures[ye],Oe=Ie.format,Ue=Ie.type;if(!J.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,Ye),y.bufferData(y.PIXEL_PACK_BUFFER,ve.byteLength,y.STREAM_READ),v.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+ye),y.readPixels(N,X,W,O,fe.convert(Oe),fe.convert(Ue),0);const at=k!==null?p.get(k).__webglFramebuffer:null;se.bindFramebuffer(y.FRAMEBUFFER,at);const pt=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await Am(y,pt,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,Ye),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,ve),y.deleteBuffer(Ye),y.deleteSync(pt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,N=null,X=0){const W=Math.pow(2,-X),O=Math.floor(v.image.width*W),ve=Math.floor(v.image.height*W),Pe=N!==null?N.x:0,ye=N!==null?N.y:0;C.setTexture2D(v,0),y.copyTexSubImage2D(y.TEXTURE_2D,X,0,0,Pe,ye,O,ve),se.unbindTexture()};const mh=y.createFramebuffer(),gh=y.createFramebuffer();this.copyTextureToTexture=function(v,N,X=null,W=null,O=0,ve=null){ve===null&&(O!==0?(qr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=O,O=0):ve=0);let Pe,ye,De,Ie,Oe,Ue,Ye,at,pt;const mt=v.isCompressedTexture?v.mipmaps[ve]:v.image;if(X!==null)Pe=X.max.x-X.min.x,ye=X.max.y-X.min.y,De=X.isBox3?X.max.z-X.min.z:1,Ie=X.min.x,Oe=X.min.y,Ue=X.isBox3?X.min.z:0;else{const Zt=Math.pow(2,-O);Pe=Math.floor(mt.width*Zt),ye=Math.floor(mt.height*Zt),v.isDataArrayTexture?De=mt.depth:v.isData3DTexture?De=Math.floor(mt.depth*Zt):De=1,Ie=0,Oe=0,Ue=0}W!==null?(Ye=W.x,at=W.y,pt=W.z):(Ye=0,at=0,pt=0);const lt=fe.convert(N.format),Ne=fe.convert(N.type);let rt;N.isData3DTexture?(C.setTexture3D(N,0),rt=y.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(C.setTexture2DArray(N,0),rt=y.TEXTURE_2D_ARRAY):(C.setTexture2D(N,0),rt=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,N.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,N.unpackAlignment);const Je=y.getParameter(y.UNPACK_ROW_LENGTH),Wt=y.getParameter(y.UNPACK_IMAGE_HEIGHT),Ii=y.getParameter(y.UNPACK_SKIP_PIXELS),Xt=y.getParameter(y.UNPACK_SKIP_ROWS),gr=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,mt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,mt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Ie),y.pixelStorei(y.UNPACK_SKIP_ROWS,Oe),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Ue);const ut=v.isDataArrayTexture||v.isData3DTexture,Bt=N.isDataArrayTexture||N.isData3DTexture;if(v.isDepthTexture){const Zt=p.get(v),Pt=p.get(N),zt=p.get(Zt.__renderTarget),oa=p.get(Pt.__renderTarget);se.bindFramebuffer(y.READ_FRAMEBUFFER,zt.__webglFramebuffer),se.bindFramebuffer(y.DRAW_FRAMEBUFFER,oa.__webglFramebuffer);for(let pi=0;pi<De;pi++)ut&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,p.get(v).__webglTexture,O,Ue+pi),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,p.get(N).__webglTexture,ve,pt+pi)),y.blitFramebuffer(Ie,Oe,Pe,ye,Ye,at,Pe,ye,y.DEPTH_BUFFER_BIT,y.NEAREST);se.bindFramebuffer(y.READ_FRAMEBUFFER,null),se.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(O!==0||v.isRenderTargetTexture||p.has(v)){const Zt=p.get(v),Pt=p.get(N);se.bindFramebuffer(y.READ_FRAMEBUFFER,mh),se.bindFramebuffer(y.DRAW_FRAMEBUFFER,gh);for(let zt=0;zt<De;zt++)ut?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Zt.__webglTexture,O,Ue+zt):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Zt.__webglTexture,O),Bt?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Pt.__webglTexture,ve,pt+zt):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Pt.__webglTexture,ve),O!==0?y.blitFramebuffer(Ie,Oe,Pe,ye,Ye,at,Pe,ye,y.COLOR_BUFFER_BIT,y.NEAREST):Bt?y.copyTexSubImage3D(rt,ve,Ye,at,pt+zt,Ie,Oe,Pe,ye):y.copyTexSubImage2D(rt,ve,Ye,at,Ie,Oe,Pe,ye);se.bindFramebuffer(y.READ_FRAMEBUFFER,null),se.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else Bt?v.isDataTexture||v.isData3DTexture?y.texSubImage3D(rt,ve,Ye,at,pt,Pe,ye,De,lt,Ne,mt.data):N.isCompressedArrayTexture?y.compressedTexSubImage3D(rt,ve,Ye,at,pt,Pe,ye,De,lt,mt.data):y.texSubImage3D(rt,ve,Ye,at,pt,Pe,ye,De,lt,Ne,mt):v.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,ve,Ye,at,Pe,ye,lt,Ne,mt.data):v.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,ve,Ye,at,mt.width,mt.height,lt,mt.data):y.texSubImage2D(y.TEXTURE_2D,ve,Ye,at,Pe,ye,lt,Ne,mt);y.pixelStorei(y.UNPACK_ROW_LENGTH,Je),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Wt),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Ii),y.pixelStorei(y.UNPACK_SKIP_ROWS,Xt),y.pixelStorei(y.UNPACK_SKIP_IMAGES,gr),ve===0&&N.generateMipmaps&&y.generateMipmap(rt),se.unbindTexture()},this.initRenderTarget=function(v){p.get(v).__webglFramebuffer===void 0&&C.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?C.setTextureCube(v,0):v.isData3DTexture?C.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?C.setTexture2DArray(v,0):C.setTexture2D(v,0),se.unbindTexture()},this.resetState=function(){I=0,$=0,k=null,se.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}function bS(){const n=new qn(.9,.9,.9),e=new qs({color:65484,metalness:.2,roughness:.4}),t=new kt(n,e);return t.position.set(0,.45,0),t.userData={laneX:0,targetX:0,isJumping:!1,vy:0,groundY:.45},t}function TS(){const i=new qn(.9,.9,.9),r=new qs({color:16731469,metalness:.1,roughness:.5}),s=new kt(i,r);return s.position.y=.9/2,s.userData={type:"obstacle"},s}function AS(n){const e=Ji(0),t=Ji(Number(localStorage.getItem("bestScore")??0)),i=Ji(7),r=Ji(!1);let s,a,o,l=null,c=null,u=null;const f=[];let h=null;const m=new Set;let _=0;const S=[-2,0,2],g=-35,d=10,T=0,A=-20,b=9.5,R=new Di,D=new Di;function L(){s=new dg,s.background=new Ze(1052696),s.fog=new Ul(1052696,12,55);const Te=window.innerWidth,K=window.innerHeight;a=new en(70,Te/K,.1,200),a.position.set(0,4.2,8),a.lookAt(0,1,-6),o=new yS({canvas:n.value,antialias:!0}),o.setSize(Te,K),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.shadowMap.enabled=!0,s.add(new Tg(16777215,.55));const ne=new bg(16777215,1.1);ne.position.set(6,10,6),ne.castShadow=!0,ne.shadow.mapSize.width=1024,ne.shadow.mapSize.height=1024,s.add(ne);const Se=new qn(8,.3,80),Be=new qs({color:2763322,roughness:.9});h=new kt(Se,Be),h.position.set(0,-.15,-20),h.receiveShadow=!0,s.add(h);const Re=new qn(.15,.4,80),$e=new qs({color:5921535,roughness:.6}),w=new kt(Re,$e),P=new kt(Re,$e);w.position.set(-4,.1,-20),P.position.set(4,.1,-20),w.receiveShadow=!0,P.receiveShadow=!0,s.add(w,P),u=bS(),u.castShadow=!0,u.position.z=T,s.add(u),c=new wg,window.addEventListener("resize",V),window.addEventListener("keydown",M),window.addEventListener("keyup",E)}function V(){if(!o||!a)return;const Te=window.innerWidth,K=window.innerHeight;a.aspect=Te/K,a.updateProjectionMatrix(),o.setSize(Te,K),o.setPixelRatio(Math.min(window.devicePixelRatio,2))}function M(Te){m.add(Te.code),(Te.code==="ArrowLeft"||Te.code==="KeyA")&&I(-1),(Te.code==="ArrowRight"||Te.code==="KeyD")&&I(1),Te.code==="Space"&&$()}function E(Te){m.delete(Te.code)}function I(Te){if(!u||r.value)return;const K=u.userData.targetX,ne=S.indexOf(K),Se=Pc.clamp(ne+Te,0,S.length-1);u.userData.targetX=S[Se]}function $(){!u||r.value||u.userData.isJumping||(u.userData.isJumping=!0,u.userData.vy=b)}function k(){const Te=TS();Te.castShadow=!0,Te.position.z=g,Te.position.x=S[Math.floor(Math.random()*S.length)],Te.position.y=.45,f.push(Te),s.add(Te)}function ie(Te){const K=u.userData.targetX;u.position.x=Pc.damp(u.position.x,K,12,Te),u.userData.isJumping&&(u.userData.vy+=A*Te,u.position.y+=u.userData.vy*Te,u.position.y<=u.userData.groundY&&(u.position.y=u.userData.groundY,u.userData.isJumping=!1,u.userData.vy=0))}function ee(Te){i.value=Math.min(50,i.value+Te*.25),_+=Te,_>=.9&&(_=0,k());const K=i.value*Te;for(let ne=f.length-1;ne>=0;ne--){const Se=f[ne];Se.position.z+=K,Se.position.z>d&&(s.remove(Se),f.splice(ne,1))}h.position.z+=K,h.position.z>0&&(h.position.z=-20)}function q(){R.setFromObject(u);for(let Te=0;Te<f.length;Te++)if(D.setFromObject(f[Te]),R.intersectsBox(D)){F();return}}function F(){r.value=!0,e.value>t.value&&(t.value=e.value,localStorage.setItem("bestScore",String(t.value)))}function Z(Te){e.value+=Math.floor(Te*10)}function de(){l=requestAnimationFrame(de);const Te=c.getDelta();r.value||(ie(Te),ee(Te),q(),Z(Te)),o.render(s,a)}function he(){for(const Te of f)s.remove(Te);f.length=0}function ge(){e.value=0,i.value=7,r.value=!1,he(),u.position.set(0,.45,T),u.userData.targetX=0,u.userData.isJumping=!1,u.userData.vy=0,h.position.z=-20,_=0}function Fe(){L(),ge(),de()}function Ve(){l&&cancelAnimationFrame(l),l=null,window.removeEventListener("resize",V),window.removeEventListener("keydown",M),window.removeEventListener("keyup",E),o&&(o.dispose(),o=null),s=null,a=null}function ot(){ge()}return{start:Fe,stop:Ve,restart:ot,score:e,best:t,speed:i,isGameOver:r}}const wS={class:"app"},RS={__name:"App",setup(n){const e=Ji(null),{start:t,stop:i,restart:r,score:s,best:a,speed:o,isGameOver:l}=AS(e);return nf(()=>t()),rf(()=>i()),(c,u)=>(ws(),Rs("div",wS,[Vt("canvas",{ref_key:"canvas",ref:e,class:"game-canvas"},null,512),li(qp,{score:Ki(s),best:Ki(a),speed:Ki(o),isGameOver:Ki(l),onRestart:Ki(r)},null,8,["score","best","speed","isGameOver","onRestart"])]))}},lh=Np(RS);lh.use(zp());lh.mount("#app");
