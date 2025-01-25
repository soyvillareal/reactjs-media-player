var xc=Object.create;var lr=Object.defineProperty;var kc=Object.getOwnPropertyDescriptor;var Pc=Object.getOwnPropertyNames;var Cc=Object.getPrototypeOf,Ec=Object.prototype.hasOwnProperty;var Rc=(e,t,r)=>t in e?lr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Ht=(e,t)=>()=>(e&&(t=e(e=0)),t);var Ke=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Tc=(e,t)=>{for(var r in t)lr(e,r,{get:t[r],enumerable:!0})},Ac=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Pc(t))!Ec.call(e,n)&&n!==r&&lr(e,n,{get:()=>t[n],enumerable:!(o=kc(t,n))||o.enumerable});return e};var N=(e,t,r)=>(r=e!=null?xc(Cc(e)):{},Ac(t||!e||!e.__esModule?lr(r,"default",{value:e,enumerable:!0}):r,e));var w=(e,t,r)=>(Rc(e,typeof t!="symbol"?t+"":t,r),r);var fn=Ke((Ed,dn)=>{dn.exports=function(t,r,o){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");typeof r=="function"&&(o=r,r={}),r=r||{},o=o||function(){},i.type=r.type||"text/javascript",i.charset=r.charset||"utf8",i.async="async"in r?!!r.async:!0,i.src=t,r.attrs&&Lc(i,r.attrs),r.text&&(i.text=""+r.text);var s="onload"in i?pn:Ic;s(i,o),i.onload||pn(i,o),n.appendChild(i)};function Lc(e,t){for(var r in t)e.setAttribute(r,t[r])}function pn(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function Ic(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}});import{lazy as Oc}from"react";function Xr(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}function yn(e){return(e==null?void 0:e.mozHasAudio)||(e==null?void 0:e.webkitAudioDecodedByteCount)>0||(e==null?void 0:e.audioTracks)!==void 0&&e.audioTracks.length>0}function yt(e){let t=e||document.createElement("video"),r=/iPhone|iPod/.test(navigator.userAgent)===!1;return t.webkitSupportsPresentationMode&&typeof t.webkitSetPresentationMode=="function"&&r}var mn,hn,ht,cr,Zr=Ht(()=>{mn=N(fn()),hn=e=>Oc(async()=>{let t=await e();return typeof t.default=="function"?t:t.default});ht={},cr=function(t,r,o=null,n=()=>!0,i=mn.default){let s=Xr(r);return s&&n&&n(s)?Promise.resolve(s):new Promise((l,a)=>{if(ht[t]){ht[t].push({resolve:l,reject:a});return}ht[t]=[{resolve:l,reject:a}];let c=u=>{ht[t].forEach(p=>p.resolve(u))};if(o){let u=window[o];window[o]=function(){u&&u(),c(Xr(r))}}i(t,u=>{u?(ht[t].forEach(p=>p.reject(u)),ht[t]=null):o||c(Xr(r))})})}});function gn(e,...t){let o=[].concat(...t),n={},i=Object.keys(e);for(let s of i)o.indexOf(s)===-1&&(n[s]=e[s]);return n}function Ve(e){return typeof window!="undefined"&&typeof window.MediaStream!="undefined"&&e instanceof window.MediaStream}function bn(e){return/^blob:/.test(e)}function Sn(e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r&&(r.current=t)})}}var Xe,Jr,be=Ht(()=>{Xe=e=>{let t=Math.floor(e/3600),r=Math.floor(e%3600/60),o=e%60;return t>0?`${String(t).padStart(2,"0")}:${String(r).padStart(2,"0")}:${String(o).padStart(2,"0")}`:`${String(r).padStart(2,"0")}:${String(o).padStart(2,"0")}`},Jr=(e,t)=>e.reduce((r,o)=>(r[o[t]]=o,r),{})});var Mc,eo,to,ro,Dc,zt,oo=Ht(()=>{be();Mc=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,eo=/\.(m3u8)($|\?)/i,to=/\.(mpd)($|\?)/i,ro=/\.(flv)($|\?)/i,Dc=(e,t)=>t&&t.length>0||Ve(e)||bn(e)?!0:Mc.test(e)||eo.test(e)||to.test(e)||ro.test(e),zt=Dc});var no,_c,io,vn,wn,xn,kn,Pn,Cn,En,Rn=Ht(()=>{no=typeof navigator!="undefined",_c=no&&navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,io=no&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||_c)&&!window.MSStream,vn=no&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!window.MSStream,wn="https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js",xn="Hls",kn="https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js",Pn="dashjs",Cn="https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js",En="flvjs"});var An={};Tc(An,{default:()=>gt});import Bc from"react";import{jsx as Tn}from"react/jsx-runtime";var gt,Ln=Ht(()=>{Rn();be();Zr();oo();gt=class extends Bc.Component{constructor(){super(...arguments);w(this,"onReady",r=>this.props.onReady(r));w(this,"onPlay",r=>this.props.onPlay({...r,hasAudio:yn(this.player)}));w(this,"onBuffer",r=>this.props.onBuffer(r));w(this,"onBufferEnd",r=>this.props.onBufferEnd(r));w(this,"onPause",r=>this.props.onPause(r));w(this,"onEnded",r=>this.props.onEnded(r));w(this,"onError",(r,o,n,i)=>this.props.onError(r,o,n,i));w(this,"onPlayBackRateChange",r=>{this.props.onPlayBackRateChange(r.target.playbackRate)});w(this,"onEnablePIP",r=>this.props.onEnablePIP(r));w(this,"onDisablePIP",r=>{let{onDisablePIP:o,playing:n}=this.props;o&&o(r),n&&this.play()});w(this,"onPresentationModeChange",r=>{if(this.player&&yt(this.player)){let{webkitPresentationMode:o}=this.player;o==="picture-in-picture"?this.onEnablePIP(r):o==="inline"&&this.onDisablePIP(r)}});w(this,"onSeek",r=>{var o;this.props.onSeek((o=r.target)==null?void 0:o.currentTime)});w(this,"mute",()=>{this.player.muted=!0});w(this,"unmute",()=>{this.player.muted=!1});w(this,"renderTrack",(r,o)=>Tn("track",{...r},o));w(this,"ref",r=>{this.player&&(this.prevPlayer=this.player),this.player=r})}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);let r=this.getSource(this.props.url);r&&(this.player.src=r),(io||this.props.config.forceDisableHls)&&this.player.load()}componentDidUpdate(r){this.removeListeners(this.prevPlayer,r.url),this.addListeners(this.player),this.props.url!==r.url&&Ve(this.props.url)===!1&&(this.player.srcObject=null)}componentWillUnmount(){this.player.removeAttribute("src"),this.removeListeners(this.player)}addListeners(r){let{url:o,playsinline:n}=this.props;r&&(r.addEventListener("play",this.onPlay),r.addEventListener("waiting",this.onBuffer),r.addEventListener("playing",this.onBufferEnd),r.addEventListener("pause",this.onPause),r.addEventListener("seeked",this.onSeek),r.addEventListener("ended",this.onEnded),r.addEventListener("error",this.onError),r.addEventListener("ratechange",this.onPlayBackRateChange),r.addEventListener("enterpictureinpicture",this.onEnablePIP),r.addEventListener("leavepictureinpicture",this.onDisablePIP),r.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(o)===!1&&r.addEventListener("canplay",this.onReady),n&&(r.setAttribute("playsinline",""),r.setAttribute("webkit-playsinline",""),r.setAttribute("x5-playsinline","")))}removeListeners(r,o){r&&(r.removeEventListener("canplay",this.onReady),r.removeEventListener("play",this.onPlay),r.removeEventListener("waiting",this.onBuffer),r.removeEventListener("playing",this.onBufferEnd),r.removeEventListener("pause",this.onPause),r.removeEventListener("seeked",this.onSeek),r.removeEventListener("ended",this.onEnded),r.removeEventListener("error",this.onError),r.removeEventListener("ratechange",this.onPlayBackRateChange),r.removeEventListener("enterpictureinpicture",this.onEnablePIP),r.removeEventListener("leavepictureinpicture",this.onDisablePIP),r.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(o)||r.removeEventListener("canplay",this.onReady))}shouldUseHLS(r){return vn&&this.props.config.forceSafariHLS||this.props.config.forceHLS?!0:io||this.props.config.forceDisableHls?!1:eo.test(r)}shouldUseDASH(r){return to.test(r)||this.props.config.forceDASH}shouldUseFLV(r){return ro.test(r)||this.props.config.forceFLV}load(r,o){let{hlsVersion:n,hlsOptions:i,dashVersion:s,flvVersion:l}=this.props.config;if(o!==!1){if(this.hls&&this.hls.destroy(),this.dash&&this.dash.reset(),this.flv&&this.flv.unload(),this.shouldUseHLS(r))cr(wn.replace("VERSION",n),xn).then(a=>{this.hls=new a(i),this.hls.on(a.Events.MANIFEST_PARSED,()=>{this.props.onReady()}),this.hls.on(a.Events.ERROR,(c,u)=>{this.props.onError(c,u,this.hls,a)}),this.hls.loadSource(r),this.hls.attachMedia(this.player),this.props.onLoaded()});else if(this.shouldUseDASH(r))cr(kn.replace("VERSION",s),Pn).then(a=>{this.dash=a.MediaPlayer().create(),this.dash.initialize(this.player,r,this.props.playing),this.dash.on("error",function(c){this.props.onError(c,null,this.dash,a)}),parseInt(s)<3?this.dash.getDebug().setLogToBrowserConsole(!1):this.dash.updateSettings({debug:{logLevel:a.LogLevel.LOG_LEVEL_NONE}}),this.props.onLoaded()});else if(this.shouldUseFLV(r))cr(Cn.replace("VERSION",l),En).then(a=>{this.flv=a.createPlayer({type:"flv",url:r}),this.flv.attachMediaElement(this.player),this.flv.on(a.Events.ERROR,(c,u)=>{this.props.onError(c,u,this.flv,a)}),this.flv.load(),this.props.onLoaded()});else if(Ve(r))try{this.player.srcObject=r}catch{this.player.src=window.URL.createObjectURL(r)}}}getPlayer(){return this.player}play(){let r=this.player.play();r&&r.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.removeAttribute("src"),this.dash&&this.dash.reset()}seekTo(r,o=!0){this.player.currentTime=r,o===!1&&this.pause()}setVolume(r){this.player.volume=r}enablePIP(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player?this.player.requestPictureInPicture():yt(this.player)&&this.player.webkitPresentationMode!=="picture-in-picture"&&this.player.webkitSetPresentationMode("picture-in-picture")}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player?document.exitPictureInPicture():yt(this.player)&&this.player.webkitPresentationMode!=="inline"&&this.player.webkitSetPresentationMode("inline")}setPlaybackRate(r){try{this.player.playbackRate=r}catch(o){this.props.onError(o)}}getDuration(){if(!this.player)return null;let{duration:r,seekable:o}=this.player;return r===1/0&&o.length>0?o.end(o.length-1):r}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;let{buffered:r}=this.player;if(r.length===0)return 0;let o=r.end(r.length-1),n=this.getDuration();return n!==null&&o>n?n:o}getSource(r){if(!(Ve(r)||this.shouldUseHLS(r)||this.shouldUseDASH(r)||this.shouldUseFLV(r)))return r}render(){var p;let{url:r,playing:o,loop:n,controls:i,muted:s,config:l,width:a,height:c}=this.props,u={width:a==="auto"?a:"100%",height:c==="auto"?c:"100%"};return Tn("video",{"data-testid":"video-element",ref:this.ref,src:this.getSource(r),style:u,preload:"auto",autoPlay:o||void 0,controls:i,muted:s,loop:n,...l.attributes,children:(p=l.tracks)==null?void 0:p.map(this.renderTrack)})}};w(gt,"displayName","PlayerCore"),w(gt,"canPlay",zt)});var _n=Ke(($d,Dn)=>{"use strict";var Fc=function(t){return Nc(t)&&!Vc(t)};function Nc(e){return!!e&&typeof e=="object"}function Vc(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||zc(e)}var qc=typeof Symbol=="function"&&Symbol.for,Hc=qc?Symbol.for("react.element"):60103;function zc(e){return e.$$typeof===Hc}function $c(e){return Array.isArray(e)?[]:{}}function $t(e,t){return t.clone!==!1&&t.isMergeableObject(e)?bt($c(e),e,t):e}function Uc(e,t,r){return e.concat(t).map(function(o){return $t(o,r)})}function Qc(e,t){if(!t.customMerge)return bt;var r=t.customMerge(e);return typeof r=="function"?r:bt}function Wc(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function On(e){return Object.keys(e).concat(Wc(e))}function Mn(e,t){try{return t in e}catch{return!1}}function jc(e,t){return Mn(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function Yc(e,t,r){var o={};return r.isMergeableObject(e)&&On(e).forEach(function(n){o[n]=$t(e[n],r)}),On(t).forEach(function(n){jc(e,n)||(Mn(e,n)&&r.isMergeableObject(t[n])?o[n]=Qc(n,r)(e[n],t[n],r):o[n]=$t(t[n],r))}),o}function bt(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||Uc,r.isMergeableObject=r.isMergeableObject||Fc,r.cloneUnlessOtherwiseSpecified=$t;var o=Array.isArray(t),n=Array.isArray(e),i=o===n;return i?o?r.arrayMerge(e,t,r):Yc(e,t,r):$t(t,r)}bt.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(o,n){return bt(o,n,r)},{})};var Gc=bt;Dn.exports=Gc});var so=Ke((Qd,Fn)=>{var Jc=typeof Element!="undefined",eu=typeof Map=="function",tu=typeof Set=="function",ru=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function pr(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,o,n;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(o=r;o--!==0;)if(!pr(e[o],t[o]))return!1;return!0}var i;if(eu&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(o=i.next()).done;)if(!t.has(o.value[0]))return!1;for(i=e.entries();!(o=i.next()).done;)if(!pr(o.value[1],t.get(o.value[0])))return!1;return!0}if(tu&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(o=i.next()).done;)if(!t.has(o.value[0]))return!1;return!0}if(ru&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(o=r;o--!==0;)if(e[o]!==t[o])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(n=Object.keys(e),r=n.length,r!==Object.keys(t).length)return!1;for(o=r;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[o]))return!1;if(Jc&&e instanceof Element)return!1;for(o=r;o--!==0;)if(!((n[o]==="_owner"||n[o]==="__v"||n[o]==="__o")&&e.$$typeof)&&!pr(e[n[o]],t[n[o]]))return!1;return!0}return e!==e&&t!==t}Fn.exports=function(t,r){try{return pr(t,r)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}});var Vn=Ke((Wd,Nn)=>{"use strict";var ou="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";Nn.exports=ou});var $n=Ke((jd,zn)=>{"use strict";var nu=Vn();function qn(){}function Hn(){}Hn.resetWarningCache=qn;zn.exports=function(){function e(o,n,i,s,l,a){if(a!==nu){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Hn,resetWarningCache:qn};return r.PropTypes=r,r}});var $=Ke((Kd,Un)=>{Un.exports=$n()();var Yd,Gd});var ri=Ke((gf,ti)=>{ti.exports=function(t,r,o,n){var i=o?o.call(n,t,r):void 0;if(i!==void 0)return!!i;if(t===r)return!0;if(typeof t!="object"||!t||typeof r!="object"||!r)return!1;var s=Object.keys(t),l=Object.keys(r);if(s.length!==l.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(r),c=0;c<s.length;c++){var u=s[c];if(!a(u))return!1;var p=t[u],f=r[u];if(i=o?o.call(n,p,f,u):void 0,i===!1||i===void 0&&p!==f)return!1}return!0}});import"react";import{createRoot as xd}from"react-dom/client";Zr();oo();var In={key:"core",name:"PlayerCore",canPlay:zt,canEnablePIP:e=>zt(e)&&(document.pictureInPictureEnabled||yt()),lazyPlayer:hn(()=>Promise.resolve().then(()=>(Ln(),An)))};var yc=N(_n());import hc from"react";var Bn=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Kc(e,t){return!!(e===t||Bn(e)&&Bn(t))}function Xc(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!Kc(e[r],t[r]))return!1;return!0}function Zc(e,t){t===void 0&&(t=Xc);var r,o=[],n,i=!1;function s(){for(var l=[],a=0;a<arguments.length;a++)l[a]=arguments[a];return i&&r===this&&t(l,o)||(n=e.apply(this,l),i=!0,r=this,o=l),n}return s}var ur=Zc;var un=N(so());var me=N($());var Qn={exitFullScreenMode:"Salir del modo de pantalla completa (f)",fullScreen:"Pantalla completa",play:"Reproducir",pause:"Pausar",normal:"Normal",settings:"Configuraci\xF3n",speed:"Velocidad",quality:"Calidad",hd:"HD",live:"En vivo",clickToUnmute:"Haga clic para desactivar el silencio",playbackStuckClickResumePlayback:"La reproducci\xF3n est\xE1 bloqueada, haga clic para reanudar la reproducci\xF3n.",mute:"Silenciar (m)",activateSound:"Activar sonido",thisVideoHasNoSound:"Este video no tiene sonido",timeBar:"Barra de tiempo"};var Wn={exitFullScreenMode:"Exit full screen mode (f)",fullScreen:"Full screen",play:"Play",pause:"Pause",normal:"Normal",settings:"Settings",speed:"Speed",quality:"Quality",hd:"HD",live:"Live",clickToUnmute:"Click to unmute",playbackStuckClickResumePlayback:"Playback is stuck, click to resume playback.",mute:"Mute (m)",activateSound:"Activate sound",thisVideoHasNoSound:"This video has no sound",timeBar:"Time bar"};var St={en:Wn,es:Qn};var{string:qe,bool:K,number:Ut,array:iu,oneOfType:ao,shape:jn,object:Yn,func:Y}=me.default,Gn=Object.keys(St),lo={url:qe,sources:me.default.arrayOf(me.default.shape({src:me.default.string.isRequired,resolution:me.default.number.isRequired}).isRequired),fullHDQualityBreak:me.default.number,spriteVTTFile:me.default.string,playing:K,loop:K,controls:K,volume:Ut,muted:K,playbackRate:Ut,width:ao([qe,Ut]),height:ao([qe,Ut]),progressInterval:Ut,playsinline:K,language:me.default.oneOf(Gn),poster:qe,pip:K,stopOnUnmount:K,fallback:me.node,waiting:K,prevented:K,wrapper:ao([qe,Y,jn({render:Y.isRequired})]),config:jn({attributes:Yn,tracks:iu,forceVideo:K,forceHLS:K,forceSafariHLS:K,forceDisableHls:K,forceDASH:K,forceFLV:K,hlsOptions:Yn,hlsVersion:qe,dashVersion:qe,flvVersion:qe}),onReady:Y,onStart:Y,onPlay:Y,onPause:Y,onBuffer:Y,onBufferEnd:Y,onEnded:Y,onError:Y,onDuration:Y,onSeek:Y,onPlayBackRateChange:Y,onPlayBackQualityChange:Y,onProgress:Y,onEnablePIP:Y,onDisablePIP:Y},X=()=>{},dr={url:"",sources:[],playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,fallback:null,waiting:!1,prevented:!1,wrapper:"div",language:Gn[0],poster:"",config:{attributes:{},tracks:[],forceVideo:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.5.7",dashVersion:"4.7.4",flvVersion:"1.6.2",forceDisableHls:!1},onReady:X,onStart:X,onPlay:X,onPause:X,onBuffer:X,onBufferEnd:X,onEnded:X,onError:X,onDuration:X,onSeek:X,onPlayBackRateChange:X,onPlayBackQualityChange:X,onProgress:X,onEnablePIP:X,onDisablePIP:X};import Ne from"react";var ei=N(so());import lu from"react";var fr=N($()),{string:vt,bool:ie,number:Qt,array:su,oneOfType:Kn,shape:au,object:Xn,func:Z}=fr.default,Zn={url:vt,fullHDQualityBreak:fr.default.number,spriteVTTFile:fr.default.string,playing:ie,loop:ie,controls:ie,volume:Qt,muted:ie,playbackRate:Qt,width:Kn([vt,Qt]),height:Kn([vt,Qt]),progressInterval:Qt,playsinline:ie,pip:ie,stopOnUnmount:ie,config:au({attributes:Xn,tracks:su,forceVideo:ie,forceHLS:ie,forceSafariHLS:ie,forceDisableHls:ie,forceDASH:ie,forceFLV:ie,hlsOptions:Xn,hlsVersion:vt,dashVersion:vt,flvVersion:vt}),onReady:Z,onStart:Z,onPlay:Z,onPause:Z,onBuffer:Z,onBufferEnd:Z,onEnded:Z,onError:Z,onDuration:Z,onSeek:Z,onPlayBackRateChange:Z,onPlayBackQualityChange:Z,onProgress:Z,onEnablePIP:Z,onDisablePIP:Z},J=()=>{},Jn={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,config:{attributes:{},tracks:[],forceVideo:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.5.7",dashVersion:"4.7.4",flvVersion:"1.6.2",forceDisableHls:!1},onReady:J,onStart:J,onPlay:J,onPause:J,onBuffer:J,onBufferEnd:J,onEnded:J,onError:J,onDuration:J,onSeek:J,onPlayBackRateChange:J,onPlayBackQualityChange:J,onProgress:J,onEnablePIP:J,onDisablePIP:J};be();import{jsx as uu}from"react/jsx-runtime";var cu=5e3,Se=class extends lu.Component{constructor(){super(...arguments);w(this,"progressTimeout",0);w(this,"durationCheckTimeout",0);w(this,"prevPlayed",0);w(this,"prevLoaded",0);w(this,"player",null);w(this,"loadOnReady",null);w(this,"seekOnPlay",null);w(this,"mounted",!1);w(this,"isReady",!1);w(this,"isPlaying",!1);w(this,"isLoading",!0);w(this,"startOnPlay",!0);w(this,"onDurationCalled",!1);w(this,"handlePlayerMount",r=>{this.player=r,this.player.load(this.props.url),this.progress()});w(this,"getInternalPlayer",r=>this.player?this.player[r]:null);w(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){let r=this.getCurrentTime()||0,o=this.getSecondsLoaded(),n=this.getDuration();if(n){let i={playedSeconds:r,played:r/n,loadedSeconds:null};o!==null&&(i.loadedSeconds=o,i.loaded=o/n),(i.playedSeconds!==this.prevPlayed||i.loadedSeconds!==this.prevLoaded)&&this.props.onProgress({loaded:i.loaded,loadedSeconds:i.loadedSeconds,played:i.played,playedSeconds:i.playedSeconds}),this.prevPlayed=i.playedSeconds,i.loadedSeconds!==void 0&&(this.prevLoaded=i.loadedSeconds)}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)});w(this,"handleReady",()=>{if(this.mounted===!1)return;this.isReady=!0,this.isLoading=!1;let{onReady:r,playing:o,volume:n,muted:i}=this.props;r&&r(),!i&&n!==null&&this.player.setVolume(n),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):o&&this.player.play(),this.handleDurationCheck()});w(this,"handlePlay",r=>{this.isPlaying=!0,this.isLoading=!1;let{onStart:o,onPlay:n,playbackRate:i}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&i!==1&&this.player.setPlaybackRate(i),o&&o(),this.startOnPlay=!1),n&&n(r),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()});w(this,"handlePause",r=>{this.isPlaying=!1,!this.isLoading&&this.props.onPause&&this.props.onPause(r)});w(this,"handleEnded",()=>{let{activePlayer:r,loop:o,onEnded:n}=this.props;r.defaultProps!==void 0&&r.defaultProps.config!==void 0&&r.defaultProps.config.loopOnEnded&&o===!0&&this.seekTo(0),o===!1&&(this.isPlaying=!1,n&&n())});w(this,"handleError",(r,o,n,i)=>{this.isLoading=!1,this.props.onError&&this.props.onError(r,o,n,i)});w(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);let r=this.getDuration();r?!this.onDurationCalled&&this.props.onDuration&&(this.props.onDuration(r),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)});w(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(r){if(!this.player)return;let{url:o,playing:n,volume:i,muted:s,playbackRate:l,playbackQuality:a,pip:c,activePlayer:u,disableDeferredLoading:p}=this.props;if((0,ei.default)(r.url,o)===!1){if(this.isLoading&&!(u!=null&&u.forceLoad)&&!p&&!Ve(o)){console.warn(`ReactJSMediaPlayer: the attempt to load ${o} is being deferred until the player has loaded`),this.loadOnReady=o;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(o,this.isReady),r.playbackQuality!==a&&this.player.seekTo(this.prevPlayed)}r.playing===!1&&n&&this.isPlaying===!1&&this.player.play(),r.playing&&n===!1&&this.isPlaying&&this.player.pause(),r.pip===!1&&c&&this.player.enablePIP&&this.player.enablePIP(),r.pip&&c===!1&&this.player.disablePIP&&this.player.disablePIP(),r.volume!==i&&i!==null&&this.player.setVolume(i),r.muted!==s&&(s?this.player.mute():(this.player.unmute(),i!==null&&setTimeout(()=>this.player.setVolume(i)))),r.playbackRate!==l&&this.player.setPlaybackRate&&this.player.setPlaybackRate(l)}getDuration(){return this.isReady===!1?null:this.player.getDuration()}getCurrentTime(){return this.isReady===!1?null:this.player.getCurrentTime()}getSecondsLoaded(){return this.isReady===!1?null:this.player.getSecondsLoaded()}getPlayer(){return this.player.getPlayer()}seekTo(r,o,n){if(this.isReady===!1){r!==0&&(this.seekOnPlay=r,setTimeout(()=>{this.seekOnPlay=null},cu));return}if(o?o==="fraction":r>0&&r<1){let s=this.player.getDuration();if(!s){console.warn("ReactJSMediaPlayer: could not seek using fraction \u2013\xA0duration not yet available");return}this.player.seekTo(s*r,n);return}this.player.seekTo(r,n)}render(){let r=this.props.activePlayer;return r?uu(r,{controls:this.props.controls,loop:this.props.loop,muted:this.props.muted,playsinline:this.props.playsinline,url:this.props.url,width:this.props.width,height:this.props.height,playing:this.props.playing,config:this.props.config,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError,onBuffer:this.props.onBuffer,onBufferEnd:this.props.onBufferEnd,onDisablePIP:this.props.onDisablePIP,onEnablePIP:this.props.onEnablePIP,onPlayBackRateChange:this.props.onPlayBackRateChange,onSeek:this.props.onSeek}):null}};w(Se,"displayName","PlayerProxy"),w(Se,"propTypes",Zn),w(Se,"defaultProps",Jn);var D=N($());import oc from"react";var R=N($());import We from"react";var ot=N($());import Mt from"react";var Q=function(){return Q=Object.assign||function(t){for(var r,o=1,n=arguments.length;o<n;o++){r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},Q.apply(this,arguments)};function wt(e,t,r){if(r||arguments.length===2)for(var o=0,n=t.length,i;o<n;o++)(i||!(o in t))&&(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o]);return e.concat(i||Array.prototype.slice.call(t))}var Di=N(ri());import se,{useState as du,useMemo as ho,useEffect as fu,useContext as mu,createElement as hu}from"react";var F="-ms-",Ze="-moz-",B="-webkit-",mr="comm",He="rule",xt="decl";var oi="@import";var hr="@keyframes";var ni="@layer";var co=Math.abs,Wt=String.fromCharCode,jt=Object.assign;function ii(e,t){return z(e,0)^45?(((t<<2^z(e,0))<<2^z(e,1))<<2^z(e,2))<<2^z(e,3):0}function yr(e){return e.trim()}function he(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,r){return e.replace(t,r)}function kt(e,t,r){return e.indexOf(t,r)}function z(e,t){return e.charCodeAt(t)|0}function ve(e,t,r){return e.slice(t,r)}function ee(e){return e.length}function gr(e){return e.length}function Je(e,t){return t.push(e),e}function si(e,t){return e.map(t).join("")}function uo(e,t){return e.filter(function(r){return!he(r,t)})}var br=1,Pt=1,ai=0,ce=0,U=0,Ct="";function Yt(e,t,r,o,n,i,s,l){return{value:e,root:t,parent:r,type:o,props:n,children:i,line:br,column:Pt,length:s,return:"",siblings:l}}function Ie(e,t){return jt(Yt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function et(e){for(;e.root;)e=Ie(e.root,{children:[e]});Je(e,e.siblings)}function li(){return U}function ci(){return U=ce>0?z(Ct,--ce):0,Pt--,U===10&&(Pt=1,br--),U}function ue(){return U=ce<ai?z(Ct,ce++):0,Pt++,U===10&&(Pt=1,br++),U}function ze(){return z(Ct,ce)}function Gt(){return ce}function Sr(e,t){return ve(Ct,e,t)}function po(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ui(e){return br=Pt=1,ai=ee(Ct=e),ce=0,[]}function pi(e){return Ct="",e}function vr(e){return yr(Sr(ce-1,fo(e===91?e+2:e===40?e+1:e)))}function di(e){for(;(U=ze())&&U<33;)ue();return po(e)>2||po(U)>3?"":" "}function fi(e,t){for(;--t&&ue()&&!(U<48||U>102||U>57&&U<65||U>70&&U<97););return Sr(e,Gt()+(t<6&&ze()==32&&ue()==32))}function fo(e){for(;ue();)switch(U){case e:return ce;case 34:case 39:e!==34&&e!==39&&fo(U);break;case 40:e===41&&fo(e);break;case 92:ue();break}return ce}function mi(e,t){for(;ue()&&e+U!==57;)if(e+U===84&&ze()===47)break;return"/*"+Sr(t,ce-1)+"*"+Wt(e===47?e:ue())}function hi(e){for(;!po(ze());)ue();return Sr(e,ce)}function bi(e){return pi(wr("",null,null,null,[""],e=ui(e),0,[0],e))}function wr(e,t,r,o,n,i,s,l,a){for(var c=0,u=0,p=s,f=0,m=0,S=0,h=1,C=1,y=1,b=0,P="",k=n,A=i,E=o,d=P;C;)switch(S=b,b=ue()){case 40:if(S!=108&&z(d,p-1)==58){kt(d+=I(vr(b),"&","&\f"),"&\f",co(c?l[c-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:d+=vr(b);break;case 9:case 10:case 13:case 32:d+=di(S);break;case 92:d+=fi(Gt()-1,7);continue;case 47:switch(ze()){case 42:case 47:Je(pu(mi(ue(),Gt()),t,r,a),a);break;default:d+="/"}break;case 123*h:l[c++]=ee(d)*y;case 125*h:case 59:case 0:switch(b){case 0:case 125:C=0;case 59+u:y==-1&&(d=I(d,/\f/g,"")),m>0&&ee(d)-p&&Je(m>32?gi(d+";",o,r,p-1,a):gi(I(d," ","")+";",o,r,p-2,a),a);break;case 59:d+=";";default:if(Je(E=yi(d,t,r,c,u,n,l,P,k=[],A=[],p,i),i),b===123)if(u===0)wr(d,t,E,E,k,i,p,l,A);else switch(f===99&&z(d,3)===110?100:f){case 100:case 108:case 109:case 115:wr(e,E,E,o&&Je(yi(e,E,E,0,0,n,l,P,n,k=[],p,A),A),n,A,p,l,o?k:A);break;default:wr(d,E,E,E,[""],A,0,l,A)}}c=u=m=0,h=y=1,P=d="",p=s;break;case 58:p=1+ee(d),m=S;default:if(h<1){if(b==123)--h;else if(b==125&&h++==0&&ci()==125)continue}switch(d+=Wt(b),b*h){case 38:y=u>0?1:(d+="\f",-1);break;case 44:l[c++]=(ee(d)-1)*y,y=1;break;case 64:ze()===45&&(d+=vr(ue())),f=ze(),u=p=ee(P=d+=hi(Gt())),b++;break;case 45:S===45&&ee(d)==2&&(h=0)}}return i}function yi(e,t,r,o,n,i,s,l,a,c,u,p){for(var f=n-1,m=n===0?i:[""],S=gr(m),h=0,C=0,y=0;h<o;++h)for(var b=0,P=ve(e,f+1,f=co(C=s[h])),k=e;b<S;++b)(k=yr(C>0?m[b]+" "+P:I(P,/&\f/g,m[b])))&&(a[y++]=k);return Yt(e,t,r,n===0?He:l,a,c,u,p)}function pu(e,t,r,o){return Yt(e,t,r,mr,Wt(li()),ve(e,2,-2),0,o)}function gi(e,t,r,o,n){return Yt(e,t,r,xt,ve(e,0,o),ve(e,o+1,-1),o,n)}function mo(e,t,r){switch(ii(e,t)){case 5103:return B+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return B+e+e;case 4789:return Ze+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+Ze+e+F+e+e;case 5936:switch(z(e,t+11)){case 114:return B+e+F+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return B+e+F+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return B+e+F+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return B+e+F+e+e;case 6165:return B+e+F+"flex-"+e+e;case 5187:return B+e+I(e,/(\w+).+(:[^]+)/,B+"box-$1$2"+F+"flex-$1$2")+e;case 5443:return B+e+F+"flex-item-"+I(e,/flex-|-self/g,"")+(he(e,/flex-|baseline/)?"":F+"grid-row-"+I(e,/flex-|-self/g,""))+e;case 4675:return B+e+F+"flex-line-pack"+I(e,/align-content|flex-|-self/g,"")+e;case 5548:return B+e+F+I(e,"shrink","negative")+e;case 5292:return B+e+F+I(e,"basis","preferred-size")+e;case 6060:return B+"box-"+I(e,"-grow","")+B+e+F+I(e,"grow","positive")+e;case 4554:return B+I(e,/([^-])(transform)/g,"$1"+B+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,B+"$1"),/(image-set)/,B+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,B+"box-pack:$3"+F+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+B+e+e;case 4200:if(!he(e,/flex-|baseline/))return F+"grid-column-align"+ve(e,t)+e;break;case 2592:case 3360:return F+I(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(o,n){return t=n,he(o.props,/grid-\w+-end/)})?~kt(e+(r=r[t].value),"span",0)?e:F+I(e,"-start","")+e+F+"grid-row-span:"+(~kt(r,"span",0)?he(r,/\d+/):+he(r,/\d+/)-+he(e,/\d+/))+";":F+I(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(o){return he(o.props,/grid-\w+-start/)})?e:F+I(I(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,B+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ee(e)-1-t>6)switch(z(e,t+1)){case 109:if(z(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+B+"$2-$3$1"+Ze+(z(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~kt(e,"stretch",0)?mo(I(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return I(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,n,i,s,l,a,c){return F+n+":"+i+c+(s?F+n+"-span:"+(l?a:+a-+i)+c:"")+e});case 4949:if(z(e,t+6)===121)return I(e,":",":"+B)+e;break;case 6444:switch(z(e,z(e,14)===45?18:11)){case 120:return I(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+B+(z(e,14)===45?"inline-":"")+"box$3$1"+B+"$2$3$1"+F+"$2box$3")+e;case 100:return I(e,":",":"+F)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return I(e,"scroll-","scroll-snap-")+e}return e}function Et(e,t){for(var r="",o=0;o<e.length;o++)r+=t(e[o],o,e,t)||"";return r}function Si(e,t,r,o){switch(e.type){case ni:if(e.children.length)break;case oi:case xt:return e.return=e.return||e.value;case mr:return"";case hr:return e.return=e.value+"{"+Et(e.children,o)+"}";case He:if(!ee(e.value=e.props.join(",")))return""}return ee(r=Et(e.children,o))?e.return=e.value+"{"+r+"}":""}function vi(e){var t=gr(e);return function(r,o,n,i){for(var s="",l=0;l<t;l++)s+=e[l](r,o,n,i)||"";return s}}function wi(e){return function(t){t.root||(t=t.return)&&e(t)}}function xi(e,t,r,o){if(e.length>-1&&!e.return)switch(e.type){case xt:e.return=mo(e.value,e.length,r);return;case hr:return Et([Ie(e,{value:I(e.value,"@","@"+B)})],o);case He:if(e.length)return si(r=e.props,function(n){switch(he(n,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":et(Ie(e,{props:[I(n,/:(read-\w+)/,":"+Ze+"$1")]})),et(Ie(e,{props:[n]})),jt(e,{props:uo(r,o)});break;case"::placeholder":et(Ie(e,{props:[I(n,/:(plac\w+)/,":"+B+"input-$1")]})),et(Ie(e,{props:[I(n,/:(plac\w+)/,":"+Ze+"$1")]})),et(Ie(e,{props:[I(n,/:(plac\w+)/,F+"input-$1")]})),et(Ie(e,{props:[n]})),jt(e,{props:uo(r,o)});break}return""})}}var ki={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var Me=typeof process!="undefined"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",_i="active",Er="data-styled-version",Tt="6.1.14",Po=`/*!sc*/
`,Rr=typeof window!="undefined"&&"HTMLElement"in window,yu=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""&&process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY),gu={};var Ir=Object.freeze([]),At=Object.freeze({});function Bi(e,t,r){return r===void 0&&(r=At),e.theme!==r.theme&&e.theme||t||r.theme}var Fi=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),bu=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Su=/(^-|-$)/g;function Pi(e){return e.replace(bu,"-").replace(Su,"")}var vu=/(a)(d)/gi,xr=52,Ci=function(e){return String.fromCharCode(e+(e>25?39:97))};function So(e){var t,r="";for(t=Math.abs(e);t>xr;t=t/xr|0)r=Ci(t%xr)+r;return(Ci(t%xr)+r).replace(vu,"$1-$2")}var yo,Ni=5381,Rt=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Vi=function(e){return Rt(Ni,e)};function qi(e){return So(Vi(e)>>>0)}function wu(e){return e.displayName||e.name||"Component"}function go(e){return typeof e=="string"&&!0}var Hi=typeof Symbol=="function"&&Symbol.for,zi=Hi?Symbol.for("react.memo"):60115,xu=Hi?Symbol.for("react.forward_ref"):60112,ku={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Pu={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Cu=((yo={})[xu]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yo[zi]=$i,yo);function Ei(e){return("type"in(t=e)&&t.type.$$typeof)===zi?$i:"$$typeof"in e?Cu[e.$$typeof]:ku;var t}var Eu=Object.defineProperty,Ru=Object.getOwnPropertyNames,Ri=Object.getOwnPropertySymbols,Tu=Object.getOwnPropertyDescriptor,Au=Object.getPrototypeOf,Ti=Object.prototype;function Ui(e,t,r){if(typeof t!="string"){if(Ti){var o=Au(t);o&&o!==Ti&&Ui(e,o,r)}var n=Ru(t);Ri&&(n=n.concat(Ri(t)));for(var i=Ei(e),s=Ei(t),l=0;l<n.length;++l){var a=n[l];if(!(a in Pu||r&&r[a]||s&&a in s||i&&a in i)){var c=Tu(t,a);try{Eu(e,a,c)}catch{}}}}return e}function Lt(e){return typeof e=="function"}function Co(e){return typeof e=="object"&&"styledComponentId"in e}function tt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Tr(e,t){if(e.length===0)return"";for(var r=e[0],o=1;o<e.length;o++)r+=t?t+e[o]:e[o];return r}function Kt(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function vo(e,t,r){if(r===void 0&&(r=!1),!r&&!Kt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var o=0;o<t.length;o++)e[o]=vo(e[o],t[o]);else if(Kt(t))for(var o in t)e[o]=vo(e[o],t[o]);return e}function Eo(e,t){Object.defineProperty(e,"toString",{value:t})}function Oe(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Lu=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,o=0;o<t;o++)r+=this.groupSizes[o];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var o=this.groupSizes,n=o.length,i=n;t>=i;)if((i<<=1)<0)throw Oe(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(var s=n;s<i;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),a=(s=0,r.length);s<a;s++)this.tag.insertRule(l,r[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],o=this.indexOfGroup(t),n=o+r;this.groupSizes[t]=0;for(var i=o;i<n;i++)this.tag.deleteRule(o)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var o=this.groupSizes[t],n=this.indexOfGroup(t),i=n+o,s=n;s<i;s++)r+="".concat(this.tag.getRule(s)).concat(Po);return r},e}(),Yf=1<<30,Pr=new Map,Ar=new Map,Cr=1,kr=function(e){if(Pr.has(e))return Pr.get(e);for(;Ar.has(Cr);)Cr++;var t=Cr++;return Pr.set(e,t),Ar.set(t,e),t},Iu=function(e,t){Cr=t+1,Pr.set(e,t),Ar.set(t,e)},Ou="style[".concat(Me,"][").concat(Er,'="').concat(Tt,'"]'),Mu=new RegExp("^".concat(Me,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Du=function(e,t,r){for(var o,n=r.split(","),i=0,s=n.length;i<s;i++)(o=n[i])&&e.registerName(t,o)},_u=function(e,t){for(var r,o=((r=t.textContent)!==null&&r!==void 0?r:"").split(Po),n=[],i=0,s=o.length;i<s;i++){var l=o[i].trim();if(l){var a=l.match(Mu);if(a){var c=0|parseInt(a[1],10),u=a[2];c!==0&&(Iu(u,c),Du(e,u,a[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(l)}}},Ai=function(e){for(var t=document.querySelectorAll(Ou),r=0,o=t.length;r<o;r++){var n=t[r];n&&n.getAttribute(Me)!==_i&&(_u(e,n),n.parentNode&&n.parentNode.removeChild(n))}};function wo(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Qi=function(e){var t=document.head,r=e||t,o=document.createElement("style"),n=function(l){var a=Array.from(l.querySelectorAll("style[".concat(Me,"]")));return a[a.length-1]}(r),i=n!==void 0?n.nextSibling:null;o.setAttribute(Me,_i),o.setAttribute(Er,Tt);var s=wo();return s&&o.setAttribute("nonce",s),r.insertBefore(o,i),o},Bu=function(){function e(t){this.element=Qi(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var o=document.styleSheets,n=0,i=o.length;n<i;n++){var s=o[n];if(s.ownerNode===r)return s}throw Oe(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),Fu=function(){function e(t){this.element=Qi(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var o=document.createTextNode(r);return this.element.insertBefore(o,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Nu=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Li=Rr,Vu={isServer:!Rr,useCSSOMInjection:!yu},Xt=function(){function e(t,r,o){t===void 0&&(t=At),r===void 0&&(r={});var n=this;this.options=Q(Q({},Vu),t),this.gs=r,this.names=new Map(o),this.server=!!t.isServer,!this.server&&Rr&&Li&&(Li=!1,Ai(this)),Eo(this,function(){return function(i){for(var s=i.getTag(),l=s.length,a="",c=function(p){var f=function(y){return Ar.get(y)}(p);if(f===void 0)return"continue";var m=i.names.get(f),S=s.getGroup(p);if(m===void 0||!m.size||S.length===0)return"continue";var h="".concat(Me,".g").concat(p,'[id="').concat(f,'"]'),C="";m!==void 0&&m.forEach(function(y){y.length>0&&(C+="".concat(y,","))}),a+="".concat(S).concat(h,'{content:"').concat(C,'"}').concat(Po)},u=0;u<l;u++)c(u);return a}(n)})}return e.registerId=function(t){return kr(t)},e.prototype.rehydrate=function(){!this.server&&Rr&&Ai(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(Q(Q({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var o=r.useCSSOMInjection,n=r.target;return r.isServer?new Nu(n):o?new Bu(n):new Fu(n)}(this.options),new Lu(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(kr(t),this.names.has(t))this.names.get(t).add(r);else{var o=new Set;o.add(r),this.names.set(t,o)}},e.prototype.insertRules=function(t,r,o){this.registerName(t,r),this.getTag().insertRules(kr(t),o)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(kr(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),qu=/&/g,Hu=/^\s*\/\/.*$/gm;function Wi(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(o){return"".concat(t," ").concat(o)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Wi(r.children,t)),r})}function ji(e){var t,r,o,n=e===void 0?At:e,i=n.options,s=i===void 0?At:i,l=n.plugins,a=l===void 0?Ir:l,c=function(f,m,S){return S.startsWith(r)&&S.endsWith(r)&&S.replaceAll(r,"").length>0?".".concat(t):f},u=a.slice();u.push(function(f){f.type===He&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(qu,r).replace(o,c))}),s.prefix&&u.push(xi),u.push(Si);var p=function(f,m,S,h){m===void 0&&(m=""),S===void 0&&(S=""),h===void 0&&(h="&"),t=h,r=m,o=new RegExp("\\".concat(r,"\\b"),"g");var C=f.replace(Hu,""),y=bi(S||m?"".concat(S," ").concat(m," { ").concat(C," }"):C);s.namespace&&(y=Wi(y,s.namespace));var b=[];return Et(y,vi(u.concat(wi(function(P){return b.push(P)})))),b};return p.hash=a.length?a.reduce(function(f,m){return m.name||Oe(15),Rt(f,m.name)},Ni).toString():"",p}var zu=new Xt,xo=ji(),Ro=se.createContext({shouldForwardProp:void 0,styleSheet:zu,stylis:xo}),Gf=Ro.Consumer,$u=se.createContext(void 0);function Lr(){return mu(Ro)}function Uu(e){var t=du(e.stylisPlugins),r=t[0],o=t[1],n=Lr().styleSheet,i=ho(function(){var a=n;return e.sheet?a=e.sheet:e.target&&(a=a.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(a=a.reconstructWithOptions({useCSSOMInjection:!1})),a},[e.disableCSSOMInjection,e.sheet,e.target,n]),s=ho(function(){return ji({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);fu(function(){(0,Di.default)(r,e.stylisPlugins)||o(e.stylisPlugins)},[e.stylisPlugins]);var l=ho(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:s}},[e.shouldForwardProp,i,s]);return se.createElement(Ro.Provider,{value:l},se.createElement($u.Provider,{value:s},e.children))}var Qu=function(){function e(t,r){var o=this;this.inject=function(n,i){i===void 0&&(i=xo);var s=o.name+i.hash;n.hasNameForId(o.id,s)||n.insertRules(o.id,s,i(o.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Eo(this,function(){throw Oe(12,String(o.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=xo),this.name+t.hash},e}(),Wu=function(e){return e>="A"&&e<="Z"};function Ii(e){for(var t="",r=0;r<e.length;r++){var o=e[r];if(r===1&&o==="-"&&e[0]==="-")return e;Wu(o)?t+="-"+o.toLowerCase():t+=o}return t.startsWith("ms-")?"-"+t:t}var Yi=function(e){return e==null||e===!1||e===""},Gi=function(e){var t,r,o=[];for(var n in e){var i=e[n];e.hasOwnProperty(n)&&!Yi(i)&&(Array.isArray(i)&&i.isCss||Lt(i)?o.push("".concat(Ii(n),":"),i,";"):Kt(i)?o.push.apply(o,wt(wt(["".concat(n," {")],Gi(i),!1),["}"],!1)):o.push("".concat(Ii(n),": ").concat((t=n,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in ki||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return o};function $e(e,t,r,o){if(Yi(e))return[];if(Co(e))return[".".concat(e.styledComponentId)];if(Lt(e)){if(!Lt(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var n=e(t);return $e(n,t,r,o)}var i;return e instanceof Qu?r?(e.inject(r,o),[e.getName(o)]):[e]:Kt(e)?Gi(e):Array.isArray(e)?Array.prototype.concat.apply(Ir,e.map(function(s){return $e(s,t,r,o)})):[e.toString()]}function Ki(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Lt(r)&&!Co(r))return!1}return!0}var ju=Vi(Tt),Yu=function(){function e(t,r,o){this.rules=t,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&Ki(t),this.componentId=r,this.baseHash=Rt(ju,r),this.baseStyle=o,Xt.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,o){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))n=tt(n,this.staticRulesId);else{var i=Tr($e(this.rules,t,r,o)),s=So(Rt(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,s)){var l=o(i,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,l)}n=tt(n,s),this.staticRulesId=s}else{for(var a=Rt(this.baseHash,o.hash),c="",u=0;u<this.rules.length;u++){var p=this.rules[u];if(typeof p=="string")c+=p;else if(p){var f=Tr($e(p,t,r,o));a=Rt(a,f+u),c+=f}}if(c){var m=So(a>>>0);r.hasNameForId(this.componentId,m)||r.insertRules(this.componentId,m,o(c,".".concat(m),void 0,this.componentId)),n=tt(n,m)}}return n},e}(),To=se.createContext(void 0),Kf=To.Consumer;var bo={};function Gu(e,t,r){var o=Co(e),n=e,i=!go(e),s=t.attrs,l=s===void 0?Ir:s,a=t.componentId,c=a===void 0?function(k,A){var E=typeof k!="string"?"sc":Pi(k);bo[E]=(bo[E]||0)+1;var d="".concat(E,"-").concat(qi(Tt+E+bo[E]));return A?"".concat(A,"-").concat(d):d}(t.displayName,t.parentComponentId):a,u=t.displayName,p=u===void 0?function(k){return go(k)?"styled.".concat(k):"Styled(".concat(wu(k),")")}(e):u,f=t.displayName&&t.componentId?"".concat(Pi(t.displayName),"-").concat(t.componentId):t.componentId||c,m=o&&n.attrs?n.attrs.concat(l).filter(Boolean):l,S=t.shouldForwardProp;if(o&&n.shouldForwardProp){var h=n.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;S=function(k,A){return h(k,A)&&C(k,A)}}else S=h}var y=new Yu(r,f,o?n.componentStyle:void 0);function b(k,A){return function(E,d,L){var M=E.attrs,v=E.componentStyle,O=E.defaultProps,x=E.foldedComponentIds,T=E.styledComponentId,j=E.target,pe=se.useContext(To),ct=Lr(),oe=E.shouldForwardProp||ct.shouldForwardProp,ae=Bi(d,pe,O)||At,ne=function(pt,Ge,dt){for(var Te,de=Q(Q({},Ge),{className:void 0,theme:dt}),ft=0;ft<pt.length;ft+=1){var fe=Lt(Te=pt[ft])?Te(de):Te;for(var le in fe)de[le]=le==="className"?tt(de[le],fe[le]):le==="style"?Q(Q({},de[le]),fe[le]):fe[le]}return Ge.className&&(de.className=tt(de.className,Ge.className)),de}(M,d,ae),ut=ne.as||j,je={};for(var ge in ne)ne[ge]===void 0||ge[0]==="$"||ge==="as"||ge==="theme"&&ne.theme===ae||(ge==="forwardedAs"?je.as=ne.forwardedAs:oe&&!oe(ge,ut)||(je[ge]=ne[ge]));var ar=function(pt,Ge){var dt=Lr(),Te=pt.generateAndInjectStyles(Ge,dt.styleSheet,dt.stylis);return Te}(v,ne),Ye=tt(x,T);return ar&&(Ye+=" "+ar),ne.className&&(Ye+=" "+ne.className),je[go(ut)&&!Fi.has(ut)?"class":"className"]=Ye,L&&(je.ref=L),hu(ut,je)}(P,k,A)}b.displayName=p;var P=se.forwardRef(b);return P.attrs=m,P.componentStyle=y,P.displayName=p,P.shouldForwardProp=S,P.foldedComponentIds=o?tt(n.foldedComponentIds,n.styledComponentId):"",P.styledComponentId=f,P.target=o?n.target:e,Object.defineProperty(P,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=o?function(A){for(var E=[],d=1;d<arguments.length;d++)E[d-1]=arguments[d];for(var L=0,M=E;L<M.length;L++)vo(A,M[L],!0);return A}({},n.defaultProps,k):k}}),Eo(P,function(){return".".concat(P.styledComponentId)}),i&&Ui(P,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),P}function Oi(e,t){for(var r=[e[0]],o=0,n=t.length;o<n;o+=1)r.push(t[o],e[o+1]);return r}var Mi=function(e){return Object.assign(e,{isCss:!0})};function te(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Lt(e)||Kt(e))return Mi($e(Oi(Ir,wt([e],t,!0))));var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?$e(o):Mi($e(Oi(o,t)))}function ko(e,t,r){if(r===void 0&&(r=At),!t)throw Oe(1,t);var o=function(n){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,r,te.apply(void 0,wt([n],i,!1)))};return o.attrs=function(n){return ko(e,t,Q(Q({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},o.withConfig=function(n){return ko(e,t,Q(Q({},r),n))},o}var Xi=function(e){return ko(Gu,e)},g=Xi;Fi.forEach(function(e){g[e]=Xi(e)});var Ku=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Ki(t),Xt.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,o,n){var i=n(Tr($e(this.rules,r,o,n)),""),s=this.componentId+t;o.insertRules(s,s,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,o,n){t>2&&Xt.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,r,o,n)},e}();function Zi(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var o=te.apply(void 0,wt([e],t,!1)),n="sc-global-".concat(qi(JSON.stringify(o))),i=new Ku(o,n),s=function(a){var c=Lr(),u=se.useContext(To),p=se.useRef(c.styleSheet.allocateGSInstance(n)).current;return c.styleSheet.server&&l(p,a,c.styleSheet,u,c.stylis),se.useLayoutEffect(function(){if(!c.styleSheet.server)return l(p,a,c.styleSheet,u,c.stylis),function(){return i.removeStyles(p,c.styleSheet)}},[p,a,c.styleSheet,u,c.stylis]),null};function l(a,c,u,p,f){if(i.isStatic)i.renderStyles(a,gu,u,f);else{var m=Q(Q({},c),{theme:Bi(c,p,s.defaultProps)});i.renderStyles(a,m,u,f)}}return se.memo(s)}var Xf=function(){function e(){var t=this;this._emitSheetCSS=function(){var r=t.instance.toString();if(!r)return"";var o=wo(),n=Tr([o&&'nonce="'.concat(o,'"'),"".concat(Me,'="true"'),"".concat(Er,'="').concat(Tt,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(r,"</style>")},this.getStyleTags=function(){if(t.sealed)throw Oe(2);return t._emitSheetCSS()},this.getStyleElement=function(){var r;if(t.sealed)throw Oe(2);var o=t.instance.toString();if(!o)return[];var n=((r={})[Me]="",r[Er]=Tt,r.dangerouslySetInnerHTML={__html:o},r),i=wo();return i&&(n.nonce=i),[se.createElement("style",Q({},n,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new Xt({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(t){if(this.sealed)throw Oe(2);return se.createElement(Uu,{sheet:this.instance},t)},e.prototype.interleaveWithNodeStream=function(t){throw Oe(3)},e}();var Zf="__sc-".concat(Me,"__");import Xu from"react";var rt=N($()),V={width:rt.default.oneOfType([rt.default.number,rt.default.string]),height:rt.default.oneOfType([rt.default.number,rt.default.string])},q=(e,t)=>e.width===t.width&&e.height===t.height;import{jsx as Or,jsxs as Zu}from"react/jsx-runtime";var Ao=({width:e=36,height:t=36})=>Zu("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",children:[Or("path",{d:"M 22.5 18 C 22.5 16.235 21.48 14.71 20 13.975 L 20 16.185 L 22.455 18.64 C 22.485 18.43 22.5 18.215 22.5 18 Z"}),Or("path",{d:"M 25 18 C 25 18.94 24.795 19.825 24.46 20.64 L 25.975 22.155 C 26.625 20.91 27 19.5 27 18 C 27 13.72 24.005 10.14 20 9.23 L 20 11.295 C 22.89 12.155 25 14.83 25 18 Z"}),Or("polygon",{points:"18 10 15.91 12.09 18 14.18"}),Or("path",{d:"M 10.275 9 L 9 10.275 L 13.725 15 L 9 15 L 9 21 L 13 21 L 18 26 L 18 19.275 L 22.255 23.53 C 21.585 24.045 20.83 24.46 20 24.71 L 20 26.775 C 21.375 26.46 22.63 25.83 23.685 24.965 L 25.725 27 L 27 25.725 L 18 16.725 L 10.275 9 Z"})]});Ao.displayName="MutedIcon";Ao.propTypes=V;var Mr=Xu.memo(Ao,q);import Ju from"react";import{jsx as Ji}from"react/jsx-runtime";var Lo=({width:e=36,height:t=36})=>Ji("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor",children:Ji("path",{d:"M 23.804 18.319 L 12.478 25.924 C 12.347 26.014 12.235 26.024 12.141 25.955 C 12.047 25.886 12 25.763 12 25.584 L 12 10.416 C 12 10.237 12.047 10.113 12.141 10.045 C 12.235 9.976 12.347 9.986 12.478 10.076 L 23.804 17.68 C 23.935 17.77 24 17.876 24 18 C 24 18.124 23.935 18.23 23.804 18.319 Z"})});Lo.displayName="PlayIcon";Lo.propTypes=V;var It=Ju.memo(Lo,q);var Io=g.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 15px;
  left: 15px;
  padding: 8px;
  width: auto;
  height: auto;
  font-size: 14px;
  line-height: 1.5em;
  border-radius: 2px;
  color: #fff;
  background: rgba(15, 15, 15, 0.8);
  cursor: pointer;
  z-index: 6;
`,es=te`
  font-size: 20px;
  margin-right: 8px;
`,ts=g(It)`
  ${es}
`,rs=g(Mr)`
  ${es}
`,os=g.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 5;
`;import{useContext as tp}from"react";import{createContext as ep}from"react";var Oo={contextMenuVisible:!1,controlsHovering:!1,timeSliding:!1,volumeSliding:!1,hiding:!1,menuVisible:!1,subMenuVisible:!1,fullscreen:!1,playerRef:null,videoRef:null},Ot=ep({state:Oo,dispatch:()=>null});var rp=()=>{let{state:e}=tp(Ot);return e},_=rp;import{jsx as Dr,jsxs as Mo}from"react/jsx-runtime";var ns=({hasResource:e=!1,prevented:t,paused:r,muted:o,currentTime:n,onClick:i})=>{let{i18n:s}=_(),[l,a]=Mt.useState(!1),c=f=>{a(!0),i(f)},u=Mt.useCallback(()=>e===!1||t===!1||r?null:o===!0&&!l?Mo(Mt.Fragment,{children:[Dr(os,{onClick:c}),Mo(Io,{children:[Dr(rs,{}),s.clickToUnmute]})]},"preventedClickedTip"):null,[e,t,l]);return[Mt.useCallback(()=>e===!1||t===!1?null:n===0&&r?Dr(Mt.Fragment,{children:Mo(Io,{children:[Dr(ts,{}),s.playbackStuckClickResumePlayback]})},"preventedTip"):null,[n,r])(),u()]};ns.propTypes={hasResource:ot.default.bool.isRequired,prevented:ot.default.bool.isRequired,paused:ot.default.bool.isRequired,muted:ot.default.bool.isRequired,currentTime:ot.default.number.isRequired,onClick:ot.default.func.isRequired};var is=Mt.memo(ns,(e,t)=>e.hasResource===t.hasResource&&e.prevented===t.prevented&&e.paused===t.paused&&e.muted===t.muted&&e.currentTime===t.currentTime&&e.onClick===t.onClick);var De=N($());import cp from"react";import op from"react";import{jsx as np}from"react/jsx-runtime";var ss=op.forwardRef(({showing:e,...t},r)=>np("button",{ref:r,...t}));ss.displayName="PlayButton";var as=g(ss)`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  color: #fff;
  border: 0;
  background: rgba(0, 0, 0, 0.5) !important;
  font-size: 64px;
  -webkit-tap-highlight-color: transparent;
  transition: opacity 0.3s;
  ${({showing:e})=>e?`
    opacity: 1;
    cursor: pointer;
  `:`
    opacity: 0;
    cursor: default;
  `}
`;import"react";import{jsx as Do}from"react/jsx-runtime";var ip=g.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  align-items: center;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
`,sp=g.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
`,ap=g.div`
  @keyframes loading-spinner {
    0% {
      transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  width: 48px;
  height: 48px;
  border-width: 3px;
  border-top-color: rgba(255, 255, 255, 0.15);
  border-bottom-color: rgba(255, 255, 255, 0.15);
  border-right-color: rgba(255, 255, 255, 0.15);
  border-left-color: #fff;
  border-style: solid;
  border-radius: 50%;
  animation: loading-spinner 0.5s linear infinite;
`,lp=()=>Do(ip,{children:Do(sp,{children:Do(ap,{})})}),_r=lp;import{jsx as _o}from"react/jsx-runtime";var ls=({hasResource:e,loading:t,paused:r,ended:o,seeking:n,waiting:i,kernelMsg:s,onClick:l})=>e===!1||t||s?null:i||n?_o(_r,{}):_o(as,{showing:r||o,onClick:l,children:_o(It,{width:"20%",height:"100%"})});ls.propTypes={hasResource:De.default.bool.isRequired,loading:De.default.bool.isRequired,paused:De.default.bool.isRequired,ended:De.default.bool.isRequired,seeking:De.default.bool.isRequired,waiting:De.default.bool.isRequired,kernelMsg:De.default.object,onClick:De.default.func.isRequired};var cs=cp.memo(ls,(e,t)=>e.hasResource===t.hasResource&&e.loading===t.loading&&e.paused===t.paused&&e.ended===t.ended&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.kernelMsg===t.kernelMsg&&e.onClick===t.onClick);var Br=N($());import up from"react";var us=g.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 2em;
  background: rgba(0, 0, 0, 0.65);
`;import{jsx as dp,jsxs as pp}from"react/jsx-runtime";var ps=({hasResource:e,loading:t,kernelMsg:r=null})=>e===!1?null:r?pp(us,{children:[r.type,": ",r.detail]}):t?dp(_r,{}):null;ps.propTypes={hasResource:Br.default.bool.isRequired,loading:Br.default.bool.isRequired,kernelMsg:Br.default.object};var ds=up.memo(ps,(e,t)=>e.hasResource===t.hasResource&&e.loading===t.loading&&e.kernelMsg===t.kernelMsg);var fs=te`
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img,
  picture,
  video,
  canvas {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    font-style: italic;
    background-repeat: no-repeat;
    background-size: cover;
  }

  input,
  button,
  textarea,
  select {
    background: none !important;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
  }
`;var ms=Zi`
  * {
    margin: 0;
    padding: 0;
  }

  div[data-testid="media-player-skin"].reactjs-media-player {
    *, *::before, *::after {
      box-sizing: border-box;
    }
    ${fs}
  }
  body,
  html {
    height: 100%;
    scroll-behavior: smooth;
  }
  html:focus-within {
    scroll-behavior: smooth;
  }
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
      transition: none;
    }
  }
`,we=g.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  user-select: none;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
`,hs=g.div`
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 10%;
  height: 55px !important;
  z-index: 2;
`,ys=g.div`
  padding: 10px 20px;
  font-size: 140%;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  border-radius: 3px;
  color: #eee;
`,gs=g.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
`,bs=g.div`
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
`;var Fr={32:"SPACE_KEY",27:"ESCAPE_KEY",37:"ARROW_LEFT_KEY",39:"ARROW_RIGHT_KEY",38:"ARROW_UP_KEY",40:"ARROW_DOWN_KEY",77:"MUTE_KEY",16:"SHIFT_KEY",67:"SUBTITLES_KEY",70:"F_KEY",84:"T_KEY",78:"N_KEY"},Nr={" ":"SPACE_KEY",Escape:"ESCAPE_KEY",ArrowLeft:"ARROW_LEFT_KEY",ArrowRight:"ARROW_RIGHT_KEY",ArrowUp:"ARROW_UP_KEY",ArrowDown:"ARROW_DOWN_KEY",m:"MUTE_KEY",Shift:"SHIFT_KEY",c:"SUBTITLES_KEY",f:"F_KEY",t:"T_KEY",n:"N_KEY"},_e=e=>e?83:55,xe=e=>e?{width:54,height:54}:{width:36,height:36};var Zt=N($());import Bo from"react";import fp from"react";var Ss="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuQAAADyCAQAAACvvRhBAAADYklEQVR42u3cwY3DQAwEQdlQ/jE7BvEhor1VIdyjMeCtdV+fC4Cw258AQMgBWA250wqARQ6ARQ6ARQ5gkQNgkQMg5AA8DLnTCoBFDoBFDoBFDmCRA2CRA2CRA2CRA1jkAFjkAFjkAFjkABY5ABY5ABY5ABY5gEUOgEUOgEUOgJAD/FvIAbDIAbDIAbDIAYQcgGTIAbDIAbDIAbDIAYQcgGTIAbDIARByAMYhB8AiB0DIARiHHAAhB2Az5E4rAEIOwGbIAbDIARByAIQcQMgBSIYcAIscACEHYBxyACxyAIQcgHHIAbDIARByAMYhByAe8q8/AoBFDsBiyN3IAYQcgM2QA2CRAyDkAAg5wKkhB8AiB0DIARiHHIB4yH1rBcAiB2Az5G7kAEIOgJADMA45ABY5AEIOgJADCDkAyZADEA+5n+gDWOQAbIbcjRxAyAEQcgDGIQcgHnKvVgAscgA2Q+5GDiDkAAg5AOOQAxAPuVcrABY5AJshdyMHEHIAhBwAIQcQcgCSIQcgHnLvyAEscgA2Q+5GDiDkAAg5AEIOcGrIAYiH3PNDAIscAIscAIsc4NSQe7UCIOQACDkAQg4g5AAIOQBCDoCQAwg5AKGQAxAPuW+tAFjkAGyG3I0cQMgBEHIAhBxAyAEQcgCEHAAhBxByAEIhByAect9aAbDIAbDIAbDIAU4NuVcrAEIOgJADIOQAQg6AkAMg5AAIOYCQAyDkAAg5AEIOcELIAYiH3GdsASxyADZD7kYOEA+50wpAPOQAWOQAWOQAjEPun50A8ZA7rQDEQw5APOROKwBCDoCQAyDkAKeGHIB4yD0/BIiH3GkFQMgBEHIAxiEHIB5y/+wEsMgB2Ay5GzlAPOROKwDxkAMQD7nTCoCQAyDkAAg5gJADIOQACDkAQg4g5ACEQg5APOS+tQJgkQNgkQNgkQOcGnKvVgDiIXdaAYiHHIB4yJ1WAIQcACEHQMgBhBwAIQfg/ZADEA+5HwQBWOQAbIbcjRwgHnKnFYB4yAGIh9xpBUDIARByAIQcQMgBEHIA3g85APGQ+0EQgEUOgEUOgEUOcGrIvVoBEHIAhBwAIQcQcgCSIQfAIgdAyAEQcgAhB0DIARByAB6GHIB4yH3GFsAiB2Az5G7kAEIOgJADMA45AGk/i98EjA2eeD8AAAAASUVORK5CYII=";import{jsx as mp}from"react/jsx-runtime";var vs=fp.forwardRef(({hiding:e,...t},r)=>mp("div",{ref:r,...t}));vs.displayName="Controls";var ws=g(vs)`
  display: flex;
  bottom: 0;
  position: absolute;
  width: 100%;
  transition: opacity 0.3s;
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    z-index: 4;
    width: 100%;
    height: 2000%;
    pointer-events: none;
    background-repeat: repeat-x;
    background-position: bottom;
    background-image: url(${Ss});
    transition: opacity 0.3s;
  }
  ${({hiding:e})=>e?`
      opacity: 0;
    `:`
      opacity: 1;
    `}
`;import xs from"react";var hp=()=>{let{state:e,dispatch:t}=xs.useContext(Ot);return xs.useCallback(o=>{if(typeof o=="function"){let n=o(e);t(n)}else t(o)},[e])},G=hp;import{jsx as yp}from"react/jsx-runtime";var ks=({children:e})=>{let t=_(),r=G(),o=Bo.useCallback(()=>{if(typeof window!="undefined"&&window.matchMedia){let i=window.matchMedia("(hover: none), (pointer: coarse)");if(i&&i.matches)return}r({type:"controlsHovering",payload:!0})},[]),n=Bo.useCallback(()=>{r({type:"controlsHovering",payload:!1})},[]);return yp(ws,{hiding:t.hiding,onMouseEnter:o,onMouseLeave:n,children:e})};ks.propTypes={children:Zt.default.oneOfType([Zt.default.arrayOf(Zt.default.node),Zt.default.node]).isRequired};var Ps=Bo.memo(ks,(e,t)=>e.children===t.children);var nt=N($());import Sp from"react";import{forwardRef as gp}from"react";import{jsx as bp}from"react/jsx-runtime";var Cs=gp(({isFullscreen:e,...t},r)=>bp("div",{ref:r,...t}));Cs.displayName="ControlBar";var Es=g(Cs)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  z-index: 6;
  ${({isFullscreen:e})=>e?`
    height: 54px;
  `:`
    height: 36px;
  `}
`,Rs=te`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  flex: 1;
`,Ts=g.div`
  ${Rs}
  justify-content: flex-start;
  margin-left: 15px;
`,As=g.div`
  ${Rs}
  justify-content: flex-end;
  margin-right: 15px;
`;import{jsx as Ls,jsxs as vp}from"react/jsx-runtime";var Is=({children:e,extra:t,fullscreen:r})=>vp(Es,{isFullscreen:r,children:[Ls(Ts,{children:e}),Ls(As,{children:t})]});Is.propTypes={children:nt.default.oneOfType([nt.default.arrayOf(nt.default.node),nt.default.node]).isRequired,extra:nt.default.node.isRequired,fullscreen:nt.default.bool.isRequired};var Os=Sp.memo(Is,(e,t)=>e.fullscreen===t.fullscreen&&e.children===t.children&&e.extra===t.extra);var it=N($());import la from"react";import Fo from"react";import Ms from"react";import{jsx as Fs}from"react/jsx-runtime";var Ds=Ms.forwardRef(({isFullscreen:e,...t},r)=>Fs("div",{ref:r,...t}));Ds.displayName="Tooltip";var Vr=g(Ds)`
  display: none;
  position: absolute;
  left: 0;
  width: 100%;
  pointer-events: none;
  ${({isFullscreen:e})=>e?`
    bottom: 13px;
  `:`
    bottom: 10px;
  `}
`,_s=Ms.forwardRef(({isFullscreen:e,showTooltipOnly:t,...r},o)=>Fs("div",{ref:o,...r}));_s.displayName="Tip";var Bs=g(_s)`
  display: inline-block;
  padding: 0.4em 0.8em;
  transform: translateX(-50%);
  font-weight: 500;
  text-align: center;
  color: #fff;
  ${({showTooltipOnly:e})=>e&&`
    border-radius: 4px;
    background: #333;
    &:after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #333 transparent transparent transparent;
    }
  `}
  ${({isFullscreen:e})=>e?`
    font-size: 18px;
  `:`
    font-size: 12px;
  `}
`;var ke=g.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    PingFang SC,
    Hiragino Sans GB,
    Microsoft YaHei,
    Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
`;import{jsx as No}from"react/jsx-runtime";var Dt=g.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
`,Vs=Fo.forwardRef(({isFullscreen:e,...t},r)=>No("button",{ref:r,...t}));Vs.displayName="SliderHandle";var _t=g(Vs)`
  ${ke} ${we} & {
    position: absolute;
    cursor: pointer;
    padding: 0;
    margin: 0;
    pointer-events: none;
    outline: 0 transparent none;
    border: transparent 0 none;
    box-shadow: none;
    border-radius: 50%;
    background-color: #cb0e0b !important;
    -moz-transition: -moz-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    -webkit-transition: -webkit-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    -ms-transition: -ms-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -webkit-transform: scale(0);
    ${({isFullscreen:e})=>e?`
      width: 20px;
      height: 20px;
      top: -3px;
      right: -9px;
    `:`
      width: 12px;
      height: 12px;
      top: 0px;
      right: -6px;
    `}
  }
`,Ns=`
  -moz-transform: none;
  -ms-transform: none;
  -webkit-transform: none;
  transform: none;
  -moz-transition: -moz-transform 0.1s cubic-bezier(0, 0, 0.2, 1);
  -webkit-transition: -webkit-transform 0.1s cubic-bezier(0, 0, 0.2, 1);
  -ms-transition: -ms-transform 0.1s cubic-bezier(0, 0, 0.2, 1);
  transition: transform 0.1s cubic-bezier(0, 0, 0.2, 1);
  box-shadow: 0 0 0 5px rgba(255, 0, 0, 0.2);
  outline: 0 transparent none;
  pointer-events: auto;
  opacity: 1;
`,qs=Fo.forwardRef(({isSliding:e,isFullscreen:t,...r},o)=>No("div",{ref:o,...r}));qs.displayName="Slider";var Hs=g(qs)`
  width: 100%;
  flex-grow: 1;
  position: absolute;
  top: -5px;
  z-index: 6;
  cursor: pointer;
  user-select: none;
  &:focus {
    outline: 0 transparent none;
  }
  ${({isFullscreen:e})=>e?`
    height: 6px;
  `:`
    height: 4px;
  `}
  & ${Dt} {
    -moz-transform: scaleY(0.6);
    -ms-transform: scaleY(0.6);
    -webkit-transform: scaleY(0.6);
    transform: scaleY(0.6);
    -moz-transition: -moz-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    -webkit-transition: -webkit-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    -ms-transition: -ms-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);
  }
  & ${_t} {
    @media (hover: none), (pointer: coarse) {
      pointer-events: auto;
      opacity: 1;
      box-shadow: none;
    }
  }
  ${({isSliding:e})=>e?`
          & ${Dt} {
            -moz-transform: none;
            -ms-transform: none;
            -webkit-transform: none;
            transform: none;
          }
          & ${_t} {
            ${Ns}
          }
          & ${Vr} {
            display: block;
          }
        `:`
        &:focus ${Dt},
        &:hover ${Dt} {
          -moz-transform: none;
          -ms-transform: none;
          -webkit-transform: none;
          transform: none;
        }
        &:focus ${_t},
        &:hover ${_t} {
          ${Ns}
        }
      `}
`,zs=Fo.forwardRef(({isFullscreen:e,...t},r)=>No("div",{ref:r,...t}));zs.displayName="SlideRail";var $s=g(zs)`
  position: absolute;
  top: 0px;
  left: 0;
  overflow: hidden;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  ${({isFullscreen:e})=>e?`
    height: 6px;
  `:`
    height: 4px;
  `}
`,Us=g.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  transform-origin: center left;
  background-color: rgba(255, 255, 255, 0.5);
`,Qs=g.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translate(-100%, 0);
  background: #f00;
`,Ws=g.div`
  position: absolute;
  top: -4px;
  left: 0;
  width: 100%;
  height: 12px;
  transform: translate(-100%, 0);
  z-index: 4;
`;var Ue=N($());import Pe from"react";import wp from"react";import{jsx as xp}from"react/jsx-runtime";var js=wp.forwardRef(({isFullscreen:e,showing:t,...r},o)=>xp("div",{ref:o,...r}));js.displayName="TimelensThumbnail";var Ys=g(js)`
  background: #fff;
  border: solid #fff 2px !important;
  border-radius: 2px;
  background-clip: content-box;
  width: 0;
  height: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  transition:
    opacity 0.2s,
    z-index 0.2s;
  transform: translateY(-100%) translateY(-7px);
  ${({isFullscreen:e})=>e?`
      top: -45px;
    `:`
      top: -35px;
    `}
  ${({showing:e})=>e?`
        opacity: 1;
    `:`
        opacity: 0;
    `}
`,Gs=g.div`
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20px;
  z-index: 4;
`;var kp=e=>"changedTouches"in e&&e.changedTouches&&1<=e.changedTouches.length?e.changedTouches[0].pageX:"clientX"in e?e.clientX:0,Jt=(e,t,r)=>{let o=kp(e)-t.left;return 0>=o?0:o>=t.width?r:Math.round(r*o/t.width)},Xs=({duration:e,currentTime:t,sliderWidth:r,elementWidth:o,offset:n=0})=>{if(e<=0||r<=0||o<=0)return 0;let i=t/e*r,s=o/2,l=s+n,a=r-s-n;return Math.min(a,Math.max(l,i))},Zs=({duration:e,currentTime:t,sliderWidth:r,handleWidth:o})=>{if(e===0)return{trackTranslateX:"-100",handleTranslateX:"-100"};let n=Xs({duration:e,currentTime:t,sliderWidth:r,elementWidth:o,offset:0}),i=(100*t/e-100).toFixed(1),s=(n/r*100-100).toFixed(1);return{trackTranslateX:i,handleTranslateX:s}},Js=({duration:e,currentTime:t,sliderWidth:r,tooltipWidth:o})=>(Xs({duration:e,currentTime:t,sliderWidth:r,elementWidth:o,offset:5})/r*100).toFixed(1),Ks=e=>{if(typeof e!="string")throw new TypeError("Time must be a string");if(e.indexOf(";")>0&&(e=e.replace(";",":"),!/\d{2}(\:\d{2}){0,3}/i.test(e)))throw new TypeError("Time code must have the format `00:00:00`");let t=e.split(":"),r=0,o=0,n=0,i=0,s=25,l=Math.round(s),a=3600*l,c=60*l;switch(t.length){default:case 1:n=parseInt(t[0],10);break;case 2:o=parseInt(t[0],10),n=parseInt(t[1],10);break;case 3:r=parseInt(t[0],10),o=parseInt(t[1],10),n=parseInt(t[2],10);break;case 4:r=parseInt(t[0],10),o=parseInt(t[1],10),n=parseInt(t[2],10),i=parseInt(t[3],10)}let u=(a*r+c*o+s*n+i)/s;return parseFloat(u.toFixed(3))},ea=e=>{var t=e.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+o,left:t.left+r}},ta=e=>{let t=0,r=0,o=[];for(var n of e.split(`
`))if(/-->/.test(n)){let[i,s]=(n.match(/(.*) --> (.*)/)||[]).slice(1);t=Ks(i),r=Ks(s)}else if(/png/.test(n)){let[i,s,l,a,c]=(n.match(/(.*)\?xywh=(.*),(.*),(.*),(.*)/)||[]).slice(1);o.push({from:t,to:r,file:i,x:s,y:l,w:a,h:c})}return o};import{Fragment as Pp,jsx as ra,jsxs as Cp}from"react/jsx-runtime";var Vo=Pe.forwardRef(({spriteVTTFile:e,sliderRef:t,duration:r=0,fullscreen:o},n)=>{let i=_(),[s,l]=Pe.useState([]),a=Pe.useRef(null),[c,u]=Pe.useState(!1),[p,f]=Pe.useState({backgroundImage:"",backgroundPosition:"-480px -360px",width:"160px",height:"90px",marginLeft:"0px"});Pe.useEffect(()=>{(async()=>{try{let h=await fetch(e).then(y=>y.text()),C=ta(h);l(C)}catch(h){console.error("Error parsing VTT file: ",h)}})()},[e]);let m=Pe.useCallback(async h=>{var P;let C=a==null?void 0:a.current,y=t==null?void 0:t.current;if(C&&y&&s.length>0&&i.menuVisible===!1&&i.subMenuVisible===!1){let k=ea(y),A=h==null?void 0:h.pageX;h!=null&&h.originalEvent&&((P=h==null?void 0:h.originalEvent)!=null&&P.changedTouches)?A=h.originalEvent.changedTouches[0].pageX:h!=null&&h.changedTouches&&(A=h.changedTouches[0].pageX);let d=(A-k.left-y.offsetLeft)/y.offsetWidth,L=d*r,M=d*y.offsetWidth;for(var b of s)if(L>=b.from&&L<=b.to){let v=Math.min(Math.max(0,M-C.offsetWidth/2),y.offsetWidth-C.offsetWidth);f({backgroundImage:`url(${b.file})`,backgroundPosition:-b.x+"px "+-b.y+"px",width:b.w+"px",height:b.h+"px",marginLeft:v+"px"});break}u(!0)}},[a,t,r,s,i.menuVisible,i.subMenuVisible]),S=Pe.useCallback(()=>{u(!1)},[]);return Pe.useImperativeHandle(n,()=>({handleTimelens:m,setShowTimelens:u})),Cp(Pp,{children:[ra(Gs,{onMouseMove:m,onMouseEnter:m,onMouseLeave:S}),ra(Ys,{ref:a,showing:c||i.timeSliding,isFullscreen:o,style:p})]})});Vo.displayName="Timelens";Vo.propTypes={sliderRef:Ue.default.oneOfType([Ue.default.func,Ue.default.shape({current:Ue.default.instanceOf(HTMLDivElement)})]),spriteVTTFile:Ue.default.string.isRequired,duration:Ue.default.number.isRequired,fullscreen:Ue.default.bool.isRequired};var oa=Pe.memo(Vo,(e,t)=>e.fullscreen===t.fullscreen&&e.sliderRef===t.sliderRef&&e.spriteVTTFile===t.spriteVTTFile&&e.duration===t.duration);var Ce=N($());import qr from"react";be();import{jsx as na}from"react/jsx-runtime";var ia=({sliderRef:e,duration:t,tooltip:r,showTooltip:o,showTooltipOnly:n=!1,fullscreen:i})=>{let s=qr.useRef(null),[l,a]=qr.useState("0");return qr.useEffect(()=>{var u,p;let c=Js({duration:t,currentTime:r,sliderWidth:((u=e.current)==null?void 0:u.offsetWidth)||0,tooltipWidth:((p=s.current)==null?void 0:p.offsetWidth)||0});a(c)},[t,r,s,e]),na(Vr,{style:{display:o?"block":"",transform:`translateX(${l}%)`},isFullscreen:i,children:na(Bs,{ref:s,isFullscreen:i,showTooltipOnly:n,children:Xe(r)})})};ia.propTypes={sliderRef:Ce.default.oneOfType([Ce.default.func,Ce.default.shape({current:Ce.default.instanceOf(HTMLDivElement)})]),duration:Ce.default.number.isRequired,tooltip:Ce.default.number.isRequired,showTooltip:Ce.default.bool.isRequired,showTooltipOnly:Ce.default.bool,fullscreen:Ce.default.bool.isRequired};var sa=qr.memo(ia,(e,t)=>e.sliderRef===t.sliderRef&&e.duration===t.duration&&e.tooltip===t.tooltip&&e.showTooltip===t.showTooltip&&e.showTooltipOnly===t.showTooltipOnly&&e.fullscreen===t.fullscreen);import W from"react";var Ep=({timelensRef:e,currentTime:t,duration:r,onChange:o,onSeeking:n})=>{let i=G(),s=W.useRef(null),l=W.useRef(null),[a,c]=W.useState(!1),[u,p]=W.useState(!1),[f,m]=W.useState({left:0,width:0}),[S,h]=W.useState({value:0,tooltip:0}),C=W.useCallback(v=>{v.preventDefault();let O=v.currentTarget.getBoundingClientRect(),x=Jt(v,O,r);i({type:"timeSliding",payload:!1}),p(!1),o(x),n(!1),e.current&&e.current.handleTimelens(v)},[o,r,i,e]),y=W.useCallback(v=>{if(v.preventDefault(),s.current!==null){let O=s.current.getBoundingClientRect();i({type:"timeSliding",payload:!0}),m(x=>({...x,left:O.left,width:O.width})),e.current&&e.current.handleTimelens(v),p(!0),n(!0)}},[e]),b=W.useCallback(v=>{v.preventDefault();let O=Jt(v,{left:f.left,width:f.width},r);i({type:"timeSliding",payload:!1}),p(!1),h(x=>({...x,value:O})),o(O),n(!1),e.current&&e.current.setShowTimelens(!1)},[o,r,f,i]),P=W.useCallback(v=>{v.preventDefault();let O=Jt(v,{left:f.left,width:f.width},r);h(x=>({...x,value:O})),e.current&&e.current.handleTimelens(v)},[r,f]);W.useEffect(()=>u?(document.addEventListener("mousemove",P),document.addEventListener("mouseup",b),document.addEventListener("touchmove",P),document.addEventListener("touchcancel",b),document.addEventListener("touchend",b),()=>{document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",b),document.removeEventListener("touchmove",P),document.removeEventListener("touchcancel",b),document.removeEventListener("touchend",b)}):()=>{},[u,P,b]);let k=W.useCallback(v=>{if(v.preventDefault(),s.current!==null){let O=s.current.getBoundingClientRect();m(x=>({...x,left:O.left,width:O.width})),e.current&&e.current.handleTimelens(v)}},[e]),A=W.useCallback(v=>{v.preventDefault();let O=Jt(v,{left:f.left,width:f.width},r);h(x=>({...x,tooltip:O})),e.current&&e.current.handleTimelens(v)},[r,f.left,f.width,e]),E=W.useCallback(v=>{if(v.preventDefault(),!s||!s.current)return;let O=s.current.getBoundingClientRect();m(x=>({...x,left:O.left,width:O.width}))},[]),d=W.useCallback(v=>{e.current&&e.current.handleTimelens(v),c(!0)},[e]),L=W.useCallback(()=>{e.current&&e.current.setShowTimelens(!1),c(!1)},[e]);W.useEffect(()=>{if(typeof window!="undefined")return window.addEventListener("resize",E),()=>{window.removeEventListener("resize",E)}},[E]);let M=W.useMemo(()=>{var v;return Zs({duration:r,currentTime:u?S.value:t,sliderWidth:f.width,handleWidth:((v=l.current)==null?void 0:v.offsetWidth)||0})},[r,t,S.value,u,l,f]);return{sliderRef:s,handleRef:l,showTooltip:a,timeSliderSliding:u,timeSliderState:S,trackTranslateX:{track:M.trackTranslateX,handle:M.handleTranslateX},onClick:C,onMouseDown:y,onSliderMouseOver:k,onSliderMouseMove:A,onMouseEnter:d,onMouseLeave:L}},aa=Ep;be();import{jsx as Bt,jsxs as qo}from"react/jsx-runtime";var ca=({spriteVTTFile:e,currentTime:t,duration:r,buffered:o,onChange:n,onSeeking:i,fullscreen:s})=>{let{i18n:l}=_(),a=la.useRef(null),{sliderRef:c,handleRef:u,showTooltip:p,timeSliderSliding:f,timeSliderState:m,trackTranslateX:S,onClick:h,onMouseDown:C,onSliderMouseOver:y,onSliderMouseMove:b,onMouseEnter:P,onMouseLeave:k}=aa({timelensRef:a,currentTime:t,duration:r,onChange:n,onSeeking:i});return qo(Hs,{ref:c,role:"slider","aria-label":l.timeBar,"aria-valuemin":0,"aria-valuemax":r,"aria-valuenow":t,"aria-valuetext":Xe(Math.round(t)),tabIndex:0,onClick:h,onKeyDown:()=>{},onMouseOver:y,onMouseMove:b,onMouseEnter:P,onMouseLeave:k,onFocus:()=>{},isSliding:f,isFullscreen:s,children:[qo(Dt,{children:[qo($s,{isFullscreen:s,children:[Bt(Us,{style:{transform:`scaleX(${o})`}}),Bt(Qs,{style:{transform:`translateX(${S.track}%)`}})]}),Bt(Ws,{style:{transform:`translateX(${S.handle}%)`},children:Bt(_t,{ref:u,type:"button",onMouseDown:C,onTouchStart:C,isFullscreen:s})})]}),Bt(sa,{sliderRef:c,showTooltip:p,duration:r,tooltip:f?m.value:m.tooltip,showTooltipOnly:!e,fullscreen:s}),e&&Bt(oa,{ref:a,sliderRef:c,duration:r,spriteVTTFile:e,fullscreen:s})]})};ca.propTypes={spriteVTTFile:it.default.string,currentTime:it.default.number.isRequired,duration:it.default.number.isRequired,buffered:it.default.number.isRequired||null,onChange:it.default.func.isRequired,fullscreen:it.default.bool.isRequired};var ua=la.memo(ca,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.currentTime===t.currentTime&&e.duration===t.duration&&e.buffered===t.buffered&&e.onChange===t.onChange&&e.onSeeking===t.onSeeking&&e.fullscreen===t.fullscreen);var st=N($());import Hp from"react";import ma from"react";import Qe from"react";import{jsx as fa,jsxs as Dp}from"react/jsx-runtime";var Rp=te`
  display: flex;
  position: relative;
  color: #fff;
  cursor: pointer;
  opacity: 0.8;
  &:focus,
  &:hover {
    opacity: 1;
  }
  &:disabled {
    cursor: not-allowed;
    color: #a4a4a4;
  }
  & * {
    pointer-events: none;
  }
`,Tp=te`
  align-items: center;
  padding: 0 8px;
  font-size: 14px;
`,Ap=te`
  width: 54px;
  height: 54px;
`,Lp=te`
  width: 36px;
  height: 36px;
`,Ip=te`
  font-size: 145% !important;
`,pa=Qe.forwardRef(({isFullscreen:e=!1,title:t,...r},o)=>fa("div",{ref:o,...r}));pa.displayName="TooltipText";var Op=g(pa)`
  display: flex;
  position: absolute;
  pointer-events: none;
  font-weight: 500;
  z-index: 7;
  background-color: rgba(15, 15, 15, 0.9);
  border-radius: 4px;
  padding: 5px 10px;
  min-height: 25px;
  white-space: pre;
  ${({isFullscreen:e})=>e?`
    top: -45px;
    font-size: 130%;
  `:`
    top: -35px;
    font-size: 90%;
  `}
`,da=Qe.forwardRef(({isText:e,isFullscreen:t=!1,isTooltipActive:r=!1,isFakeDisabled:o=!1,title:n,...i},s)=>{let l=_(),a=Qe.useRef(null),[c,u]=Qe.useState(null),p=Qe.useCallback(h=>{var d;i.onMouseEnter&&i.onMouseEnter(h);let C=a==null?void 0:a.current,y=(d=l.playerRef)==null?void 0:d.current;if(!C||!y||y.querySelectorAll('[aria-expanded="true"]').length>0||r===!1){u(null);return}let b=C.getBoundingClientRect(),P=y.getBoundingClientRect(),k=h.target.hasAttribute("aria-expanded")?h.target.parentElement:h.target,A=(k==null?void 0:k.offsetWidth)||0,E=(k==null?void 0:k.offsetLeft)||0;E+A/2<=b.width/2?u(-E+15):E<=15?u(0):E+b.width/2>P.width-15?u(-1*(b.width-A)):u(-1*(b.width/2-A/2))},[r,i,l.playerRef]),f=Qe.useCallback(h=>{u(null),i.onMouseLeave&&i.onMouseLeave(h)},[i]),m=Qe.useCallback(h=>{o===!1&&u(null),i.onClick&&i.onClick(h)},[i,o]),S=Qe.useCallback(h=>{o===!1&&u(null),i.onMouseDown&&i.onMouseDown(h)},[i,o]);return Dp("button",{ref:s,title:n,onMouseEnter:p,onMouseLeave:f,onClick:m,onMouseDown:S,...i,children:[i.children,fa(Op,{ref:a,isFullscreen:t,style:{opacity:c===null?0:1,left:c||0},children:n})]})});da.displayName="GeneralButton";var Mp=g(da)`
  ${ke} ${we} & {
    ${Rp}
    ${({isFullscreen:e,isText:t})=>!t&&(e?Ap:Lp)}
    ${({isFullscreen:e,isText:t})=>e&&t&&Ip}
    ${({isText:e})=>e&&Tp}
    ${({isFakeDisabled:e})=>e&&`
      color: #a4a4a4;
    `}
  }
`,H=Mp;import{jsx as ba}from"react/jsx-runtime";var ha=ma.forwardRef(({isFullscreen:e,...t},r)=>ba("div",{ref:r,...t}));ha.displayName="SliderWrapper";var er=g(ha)`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 0px;
  overflow: hidden;
  -webkit-user-drag: element;
  -webkit-user-select: none;
  -moz-transition:
    margin 0.2s cubic-bezier(0.4, 0, 1, 1),
    width 0.2s cubic-bezier(0.4, 0, 1, 1);
  -webkit-transition:
    margin 0.2s cubic-bezier(0.4, 0, 1, 1),
    width 0.2s cubic-bezier(0.4, 0, 1, 1);
  transition:
    margin 0.2s cubic-bezier(0.4, 0, 1, 1),
    width 0.2s cubic-bezier(0.4, 0, 1, 1);
  ${({isFullscreen:e})=>e?`
    height: 54px;
  `:`
    height: 36px;
  `}
`,ya=ma.forwardRef(({isSliding:e,isFullscreen:t,...r},o)=>ba("div",{ref:o,...r}));ya.displayName="SliderContainer";var ga=g(ya)`
  display: flex;
  padding-right: 3px;
  @media (max-width: 575px) {
    display: none;
  }

  ${({isSliding:e,isFullscreen:t})=>e?`
      & ${er} {
        width: ${_e(t)}px;
        -moz-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
        -webkit-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
        transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
      }
      `:`
          & ${H}:hover ~ ${er},
          & ${er}:hover {
              width: ${_e(t)}px;
              -moz-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
              -webkit-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
              transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
          }
      `}
`;var tr=N($());import Bp from"react";import Ee from"react";var Hr=({clientX:e,sliderRef:t,isFullcreen:r})=>{if(!t.current)return 0;let o=t.current.getBoundingClientRect(),i=(e-o.left)/_e(r)*100;return i<0?i=0:i>100&&(i=100),i};var _p=({fullscreen:e,value:t,onChange:r})=>{let o=_(),n=G(),i=Ee.useRef(null),s=Ee.useRef(null),[l,a]=Ee.useState(!1),[c,u]=Ee.useState(0);Ee.useEffect(()=>{if(i!=null&&i.current&&(s!=null&&s.current)){let h=s.current.getBoundingClientRect(),C=t/100*_e(e)-h.width/2,y=C;C<0?y=0:C>_e(e)-h.width&&(y=_e(e)-h.width),u(y)}},[t,e]);let p=Ee.useCallback(h=>{if(r){let C=Hr({clientX:h.clientX,sliderRef:i,isFullcreen:e});r(C)}},[r,e]),f=Ee.useCallback(h=>{h.preventDefault(),i!=null&&i.current&&(a(!0),n({type:"volumeSliding",payload:!0}))},[]),m=Ee.useCallback(h=>{h.preventDefault(),n({type:"volumeSliding",payload:!1});let C=Hr({clientX:h.clientX,sliderRef:i,isFullcreen:e});r(C),a(!1)},[r,e]),S=Ee.useCallback(h=>{if(h.preventDefault(),!l)return;let C=Hr({clientX:h.clientX,sliderRef:i,isFullcreen:e});r(C)},[l,e]);return Ee.useEffect(()=>o.volumeSliding?(document.addEventListener("mousemove",S),document.addEventListener("mouseup",m),document.addEventListener("touchmove",S),document.addEventListener("touchcancel",m),document.addEventListener("touchend",m),()=>{document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",m),document.removeEventListener("touchmove",S),document.removeEventListener("touchcancel",m),document.removeEventListener("touchend",m)}):()=>{},[o.volumeSliding,S,m]),{thumbLeft:c,sliderRef:i,thumbRef:s,onMouseDown:f,onMouseMove:S,handleChange:p}},Sa=_p;import Ho from"react";import{jsx as zo}from"react/jsx-runtime";var va=Ho.forwardRef(({isFullscreen:e,...t},r)=>zo("div",{ref:r,...t}));va.displayName="SliderContainer";var wa=g(va)`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  position: relative;
  border-radius: 5px;
  cursor: pointer;
  ${({isFullscreen:e})=>e?`
          height: 4px;
        `:`
          height: 2px;
        `}
`,xa=Ho.forwardRef(({isFullscreen:e,isDisabled:t,...r},o)=>zo("div",{ref:o,...r}));xa.displayName="SliderTrack";var ka=g(xa)`
  border-radius: 2px;
  ${({isDisabled:e})=>e?`
    background-color: #a4a4a4;
  `:`
    background-color: #fff;
  `}
  ${({isFullscreen:e})=>e?`
          height: 4px;
        `:`
          height: 2px;
        `}
`,Pa=Ho.forwardRef(({isFullscreen:e,isDisabled:t,...r},o)=>zo("div",{ref:o,...r}));Pa.displayName="SliderThumb";var Ca=g(Pa)`
  ${ke} ${we} & {
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: calc(50% - 10px);
    ${({isDisabled:e})=>e?`
      background-color: #a4a4a4;
    `:`
      background-color: #fff;
    `}
    ${({isFullscreen:e})=>e?`
      width: 18px;
      height: 18px;
    `:`
      width: 14px;
      height: 14px;
    `}
  }
`;import{jsx as $o,jsxs as Fp}from"react/jsx-runtime";var Ea=({fullscreen:e,value:t,isDisabled:r,onChange:o})=>{let{thumbLeft:n,sliderRef:i,thumbRef:s,onMouseMove:l,onMouseDown:a,handleChange:c}=Sa({fullscreen:e,value:t,onChange:o});return $o(er,{ref:i,role:"slider","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":Math.round(t),"aria-valuetext":`${Math.round(t)}%`,onClick:c,onMouseDown:a,onTouchStart:a,isFullscreen:e,children:Fp(wa,{onMouseMove:l,isFullscreen:e,children:[$o(ka,{style:{width:`${t}%`},isFullscreen:e,isDisabled:r}),$o(Ca,{ref:s,style:{left:`${n}px`},onMouseDown:a,onTouchStart:a,isFullscreen:e,isDisabled:r})]})})};Ea.propTypes={value:tr.default.number.isRequired,onChange:tr.default.func.isRequired,isDisabled:tr.default.bool.isRequired,fullscreen:tr.default.bool.isRequired};var Ra=Bp.memo(Ea,(e,t)=>e.fullscreen===t.fullscreen&&e.value===t.value&&e.onChange===t.onChange&&e.isDisabled===t.isDisabled);import Ft from"react";import Np from"react";import{jsx as Uo,jsxs as Vp}from"react/jsx-runtime";var Qo=({width:e=36,height:t=36})=>Vp("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",children:[Uo("path",{d:"M 22.5 18 C 22.5 16.189 21.48 14.624 20 13.87 L 20 22.136 C 21.48 21.377 22.5 19.812 22.5 18 Z"}),Uo("polygon",{points:"9 14.922 9 21.078 13 21.078 18 26.21 18 9.79 13 14.922"}),Uo("path",{d:"M 20 9 L 20 11.119 C 22.89 12.002 25 14.747 25 18 C 25 21.253 22.89 23.999 20 24.881 L 20 27 C 24.005 26.066 27 22.398 27 18 C 27 13.603 24.005 9.934 20 9 Z"})]});Qo.displayName="UnmutedIcon";Qo.propTypes=V;var Ta=Np.memo(Qo,q);import{jsx as Aa}from"react/jsx-runtime";var qp=({fullscreen:e,isMuted:t,volume:r,forceMuted:o,changeVolume:n,onMutedClick:i})=>{let s=_(),l=Ft.useMemo(()=>xe(e),[e]),a=Ft.useMemo(()=>t===!0||r===0||o,[t,r,o]),c=Ft.useCallback(()=>a?Aa(Mr,{...l}):Aa(Ta,{...l}),[a,l]),u=Ft.useMemo(()=>o?s.i18n.thisVideoHasNoSound:a?s.i18n.activateSound:s.i18n.mute,[a,o,s.i18n]),p=Ft.useCallback(m=>{o===!1&&n(m/100)},[n,o]),f=Ft.useCallback(()=>{o===!1&&i(a)},[i,a,o]);return{titleMemorized:u,renderIcon:c,handleOnClick:f,handleChange:p}},La=qp;import{jsx as Ia,jsxs as zp}from"react/jsx-runtime";var Oa=({fullscreen:e,isMuted:t,volume:r,forceMuted:o,changeVolume:n,onMutedClick:i})=>{let s=_(),{titleMemorized:l,renderIcon:a,handleOnClick:c,handleChange:u}=La({fullscreen:e,isMuted:t,volume:r,forceMuted:o,changeVolume:n,onMutedClick:i});return zp(ga,{isSliding:s.volumeSliding,isFullscreen:e,children:[Ia(H,{type:"button","aria-label":l,title:l,onClick:c,isFullscreen:e,isFakeDisabled:o,isTooltipActive:!0,children:a()}),Ia(Ra,{fullscreen:e,value:r*100,isDisabled:o,onChange:u})]})};Oa.propTypes={fullscreen:st.default.bool.isRequired,isMuted:st.default.bool.isRequired,volume:st.default.number.isRequired,onMutedClick:st.default.func.isRequired,forceMuted:st.default.bool.isRequired,changeVolume:st.default.func.isRequired};var Ma=Hp.memo(Oa,(e,t)=>e.fullscreen===t.fullscreen&&e.isMuted===t.isMuted&&e.volume===t.volume&&e.forceMuted===t.forceMuted&&e.onMutedClick===t.onMutedClick&&e.changeVolume===t.changeVolume);var zr=N($());import $p from"react";var Wo=g.div`
  display: inline-block;
  height: 36px;
  padding: 0 5px;
  font-size: 13px;
  line-height: 35px;
  white-space: nowrap;
`,Da=g.span`
  position: relative;
  top: -2px;
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-right: 8px;
  vertical-align: middle;
  border-radius: 50%;
  background: #ff0000;
`;be();import{jsx as Up,jsxs as _a}from"react/jsx-runtime";var Ba=({live:e,duration:t,currentTime:r})=>{let{i18n:o}=_();return _a(Wo,{role:"timer","aria-live":"off",children:[Xe(Math.round(r)),e?_a(Wo,{children:[Up(Da,{}),o.live]}):` / ${Xe(Math.round(t))}`]})};Ba.propTypes={live:zr.default.bool.isRequired,duration:zr.default.number.isRequired,currentTime:zr.default.number.isRequired};var Fa=$p.memo(Ba,(e,t)=>e.live===t.live&&e.duration===t.duration&&e.currentTime===t.currentTime);var Nt=N($());import qa from"react";import Qp from"react";import{jsx as Na,jsxs as Wp}from"react/jsx-runtime";var jo=({width:e=36,height:t=36})=>Wp("svg",{height:e,width:t,version:"1.1",viewBox:"0 0 36 36",fill:"currentColor",children:[Na("rect",{x:"12",y:"10",width:"3",height:"16"}),Na("rect",{x:"21",y:"10",width:"3",height:"16"})]});jo.displayName="PauseIcon";jo.propTypes=V;var Va=Qp.memo(jo,q);import{jsx as $r}from"react/jsx-runtime";var Ha=({fullscreen:e,paused:t,ended:r,onPlayClick:o,onPauseClick:n})=>{let{i18n:i}=_(),s=qa.useMemo(()=>xe(e),[e]);return t||r?$r(H,{type:"button","aria-label":i.play,title:i.play,onClick:o,isFullscreen:e,isTooltipActive:!0,children:$r(It,{...s})}):$r(H,{type:"button","aria-label":i.pause,title:i.pause,onClick:n,isFullscreen:e,isTooltipActive:!0,children:$r(Va,{...s})})};Ha.propTypes={fullscreen:Nt.default.bool.isRequired,paused:Nt.default.bool.isRequired,ended:Nt.default.bool.isRequired,onPlayClick:Nt.default.func.isRequired,onPauseClick:Nt.default.func.isRequired};var za=qa.memo(Ha,(e,t)=>e.fullscreen===t.fullscreen&&e.paused===t.paused&&e.ended===t.ended&&e.onPlayClick===t.onPlayClick&&e.onPauseClick===t.onPauseClick);var Qr=N($());import ja from"react";import jp from"react";import{jsx as $a}from"react/jsx-runtime";var Yo=({width:e=36,height:t=36})=>$a("svg",{width:e,height:t,viewBox:"0 0 36 36",children:$a("path",{fill:"currentColor",d:"M 12 20.667 L 10 20.667 L 10 26 L 15.333 26 L 15.333 24 L 12 24 L 12 20.667 Z M 10 15.333 L 12 15.333 L 12 12 L 15.333 12 L 15.333 10 L 10 10 L 10 15.333 Z M 24 24 L 20.667 24 L 20.667 26 L 26 26 L 26 20.667 L 24 20.667 L 24 24 Z M 20.667 10 L 20.667 12 L 24 12 L 24 15.333 L 26 15.333 L 26 10 L 20.667 10 Z"})});Yo.displayName="FullscreenIcon";Yo.propTypes=V;var Ua=jp.memo(Yo,q);import Yp from"react";import{jsx as Qa}from"react/jsx-runtime";var Go=({width:e=36,height:t=36})=>Qa("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor",children:Qa("path",{d:"M 10 22.667 L 13.333 22.667 L 13.333 26 L 15.333 26 L 15.333 20.667 L 10 20.667 L 10 22.667 Z M 13.333 13.333 L 10 13.333 L 10 15.333 L 15.333 15.333 L 15.333 10 L 13.333 10 L 13.333 13.333 Z M 20.667 26 L 22.667 26 L 22.667 22.667 L 26 22.667 L 26 20.667 L 20.667 20.667 L 20.667 26 Z M 22.667 13.333 L 22.667 10 L 20.667 10 L 20.667 15.333 L 26 15.333 L 26 13.333 L 22.667 13.333 Z"})});Go.displayName="UnfullscreenIcon";Go.propTypes=V;var Wa=Yp.memo(Go,q);import{jsx as Ur}from"react/jsx-runtime";var Ya=({fullscreen:e,requestFullscreen:t,exitFullscreen:r})=>{let{i18n:o}=_(),n=ja.useMemo(()=>xe(e),[e]);return e?Ur(H,{type:"button","aria-label":o.exitFullScreenMode,title:o.exitFullScreenMode,onClick:r,isFullscreen:!0,isTooltipActive:!0,children:Ur(Wa,{...n})}):Ur(H,{type:"button","aria-label":o.fullScreen,title:o.fullScreen,onClick:t,isTooltipActive:!0,children:Ur(Ua,{...n})})};Ya.propTypes={fullscreen:Qr.default.bool.isRequired,requestFullscreen:Qr.default.func.isRequired,exitFullscreen:Qr.default.func.isRequired};var Ga=ja.memo(Ya,(e,t)=>e.fullscreen===t.fullscreen&&e.requestFullscreen===t.requestFullscreen&&e.exitFullscreen===t.exitFullscreen);import Wr from"react";var Gp=3*1e3,Kp=({hasResource:e,loading:t,prevented:r,paused:o,ended:n,waiting:i,seeking:s,kernelMsg:l})=>{let{controlsHovering:a,timeSliding:c,menuVisible:u,subMenuVisible:p}=_(),f=G(),m=Wr.useRef(void 0),S=Wr.useCallback(()=>{typeof window!="undefined"&&window.clearTimeout(m.current),f({type:"hiding",payload:!1}),!(e===!1||t||r||o||n||i||s||c||u||p||a||l)&&(m.current=window.setTimeout(()=>{f({type:"hiding",payload:!0})},Gp))},[e,t,r,o,n,i,s,c,u,p,a,l]),h=Wr.useCallback(()=>{if(typeof window!="undefined"&&window.clearTimeout(m.current),e===!1||t||r||o||n||i||s||c||u||p||a||l){f({type:"hiding",payload:!1});return}f({type:"hiding",payload:!0})},[e,t,r,o,n,i,s,c,u,p,a,m,l]);return Wr.useEffect(()=>{typeof window!="undefined"&&(o||n)?(window.clearTimeout(m.current),f({type:"hiding",payload:!1})):o||S()},[o,n,m]),{showControls:S,hideControls:h}},Ka=Kp;var Re=N($());import rd from"react";import Xa from"react";import{jsx as ll}from"react/jsx-runtime";var Za=g.div`
  position: relative;
  display: inline-block;
`,Ja=Xa.forwardRef(({singleOption:e,hiding:t,isFullscreen:r,...o},n)=>ll("div",{ref:n,...o}));Ja.displayName="DropdownOverlay";var el=g(Ja)`
  width: 250px;
  position: absolute;
  overflow: hidden;
  z-index: 8;
  background: rgba(15, 15, 15, 0.9);
  ${({isFullscreen:e})=>e?`
      right: -52px;
      bottom: 75px;
    `:`
      right: -35px;
      bottom: 55px;
    `}
  ${({hiding:e})=>e?`
      display: block;
    `:`
      display: none;
    `}
  ${({singleOption:e})=>e?`
      height: 60px;
    `:`
      height: 100px;
    `}
`,tl=g.ul`
  min-width: 250px;
  padding: 10px 0;
`,rl=g.li`
  & ${H} {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    flex-direction: row;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 0 15px;
    cursor: pointer;
    opacity: 1;
  }
  & ${H}:focus, & ${H}:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
`,ol=g.div`
  margin-right: auto;
`,nl=g.div`
  font-size: 87%;
`,il=g.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`,sl=Xa.forwardRef(({isFullHD:e=!1,isExpanded:t=!1,isFullscreen:r=!1,...o},n)=>ll(H,{ref:n,isFullscreen:r,...o}));sl.displayName="DropdownButton";var al=g(sl)`
  ${({isExpanded:e})=>e&&`
    & svg {
      transform: rotate(45deg);
      transition: all 0.2s ease-in-out;
    }
  `}
  ${({isFullHD:e})=>e&&`
      &:after {
        content: "HD";
        position: absolute;
        top: 9px;
        right: 4px;
        background-color: #cb0e0b;
        border-radius: 1px;
        font-weight: 700;
      }
    `}
  ${({isFullscreen:e})=>e?`
    &:after {
      width: 20px;
      height: 16px;
      font-size: 11px;
      line-height: 15px;
    }
  `:`
    &:after {
      width: 13px;
      height: 9px;
      font-size: 7px;
      line-height: 10px;
    }
  `}
`;import Xp from"react";import{jsx as cl}from"react/jsx-runtime";var Ko=({width:e=36,height:t=36})=>cl("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor",children:cl("path",{d:"M 25.089 17.774 C 25.056 17.032 24.908 16.3 24.649 15.604 L 25.796 14.535 C 26.013 14.326 26.065 13.997 25.921 13.732 C 25.463 12.886 24.874 12.117 24.177 11.453 C 23.965 11.247 23.641 11.211 23.39 11.366 L 22.034 12.21 C 21.424 11.786 20.75 11.461 20.039 11.247 L 19.9 9.677 C 19.877 9.375 19.646 9.13 19.345 9.09 C 18.927 9.029 18.505 8.999 18.082 9 C 17.543 8.998 17.006 9.045 16.476 9.141 C 16.19 9.187 15.97 9.419 15.939 9.706 L 15.772 11.311 C 15.117 11.533 14.498 11.849 13.934 12.249 L 12.614 11.398 C 12.362 11.236 12.032 11.269 11.817 11.478 C 11.108 12.158 10.512 12.947 10.053 13.816 C 9.913 14.076 9.961 14.398 10.172 14.606 L 11.329 15.72 C 11.115 16.314 10.981 16.933 10.93 17.563 L 9.44 18.086 C 9.155 18.18 8.974 18.459 9.003 18.757 C 9.068 19.751 9.296 20.727 9.677 21.646 C 9.786 21.924 10.073 22.091 10.368 22.048 L 11.93 21.823 C 12.234 22.337 12.602 22.811 13.025 23.232 L 12.473 24.754 C 12.372 25.032 12.468 25.342 12.707 25.515 C 13.505 26.099 14.394 26.548 15.338 26.844 C 15.625 26.937 15.938 26.818 16.09 26.559 L 16.897 25.207 C 17.245 25.265 17.597 25.297 17.95 25.303 C 18.215 25.305 18.48 25.292 18.744 25.261 L 19.55 26.658 C 19.69 26.921 19.991 27.054 20.28 26.979 C 21.228 26.728 22.128 26.321 22.943 25.775 C 23.195 25.609 23.302 25.293 23.203 25.008 L 22.686 23.512 C 23.198 23.057 23.643 22.532 24.006 21.951 L 25.568 22.202 C 25.862 22.25 26.151 22.089 26.265 21.813 C 26.657 20.921 26.903 19.971 26.994 19.001 C 27.034 18.698 26.855 18.41 26.567 18.311 Z M 25.266 20.834 L 23.37 20.532 L 22.917 21.258 C 22.62 21.735 22.257 22.167 21.838 22.542 L 21.195 23.123 L 21.838 24.947 C 21.392 25.208 20.92 25.423 20.431 25.589 L 19.467 23.9 L 18.641 23.984 C 18.428 24.009 18.213 24.02 17.999 24.019 C 17.708 24.013 17.418 23.986 17.131 23.939 L 16.238 23.769 L 15.255 25.438 C 14.764 25.253 14.294 25.017 13.854 24.732 L 14.526 22.898 L 13.931 22.311 C 13.587 21.962 13.286 21.573 13.035 21.152 L 12.595 20.413 L 10.696 20.686 C 10.526 20.188 10.406 19.674 10.336 19.152 L 12.158 18.51 L 12.216 17.668 C 12.255 17.154 12.364 16.648 12.537 16.163 L 12.816 15.366 L 11.422 14.021 C 11.69 13.582 12.001 13.17 12.35 12.792 L 13.957 13.832 L 14.66 13.328 C 15.122 13.002 15.629 12.743 16.164 12.56 L 16.951 12.297 L 17.154 10.352 C 17.458 10.311 17.765 10.289 18.072 10.284 C 18.268 10.284 18.464 10.284 18.664 10.313 L 18.834 12.239 L 19.672 12.493 C 20.254 12.668 20.805 12.933 21.304 13.28 L 21.995 13.761 L 23.634 12.74 C 23.973 13.107 24.276 13.504 24.54 13.928 L 23.139 15.244 L 23.46 16.063 C 23.67 16.632 23.792 17.23 23.82 17.835 L 23.859 18.705 L 25.664 19.364 C 25.581 19.866 25.447 20.358 25.266 20.834 Z M 17.979 21.2 C 15.506 21.2 13.96 18.524 15.197 16.384 C 16.434 14.244 19.525 14.244 20.762 16.384 C 21.048 16.88 21.197 17.443 21.192 18.015 C 21.189 19.783 19.748 21.211 17.979 21.2 Z M 18.021 16.063 C 16.537 16.046 15.591 17.64 16.318 18.933 C 17.045 20.226 18.9 20.248 19.657 18.972 C 19.833 18.675 19.926 18.335 19.926 17.99 C 19.926 16.934 19.077 16.075 18.021 16.063 Z"})});Ko.displayName="SettingsIcon";Ko.propTypes=V;var ul=Xp.memo(Ko,q);import Zp from"react";import{jsx as pl}from"react/jsx-runtime";var Xo=({width:e=36,height:t=36})=>pl("svg",{width:e,height:t,viewBox:"0 0 24 24",children:pl("path",{fill:"currentColor",d:"M 15.7 12 C 15.7 12.105 15.658 12.196 15.573 12.277 L 9.648 17.88 C 9.563 17.96 9.466 18 9.355 18 C 9.245 18 9.148 17.96 9.063 17.88 L 8.427 17.278 C 8.342 17.199 8.3 17.106 8.3 17.002 C 8.3 16.898 8.342 16.806 8.427 16.725 L 13.424 12 L 8.427 7.275 C 8.342 7.194 8.3 7.102 8.3 6.998 C 8.3 6.894 8.342 6.801 8.427 6.722 L 9.063 6.12 C 9.148 6.04 9.245 6 9.355 6 C 9.466 6 9.563 6.04 9.648 6.12 L 15.573 11.723 C 15.658 11.804 15.7 11.895 15.7 12 Z"})});Xo.displayName="ArrowRightIcon";Xo.propTypes=V;var dl=Zp.memo(Xo,q);import xl from"react";import Jo from"react";import Jp from"react";import{jsx as fl}from"react/jsx-runtime";var Zo=({width:e=36,height:t=36})=>fl("svg",{width:e,height:t,viewBox:"0 0 24 24",children:fl("path",{fill:"currentColor",d:"M 15.7 6.998 C 15.7 7.102 15.658 7.194 15.573 7.275 L 10.576 12 L 15.573 16.725 C 15.658 16.806 15.7 16.898 15.7 17.002 C 15.7 17.106 15.658 17.198 15.573 17.279 L 14.937 17.88 C 14.852 17.96 14.755 18 14.645 18 C 14.534 18 14.437 17.96 14.352 17.88 L 8.427 12.277 C 8.342 12.196 8.3 12.104 8.3 12 C 8.3 11.896 8.342 11.804 8.427 11.723 L 14.352 6.12 C 14.437 6.04 14.534 6 14.645 6 C 14.755 6 14.852 6.04 14.937 6.12 L 15.573 6.721 C 15.658 6.802 15.7 6.894 15.7 6.998 Z"})});Zo.displayName="ArrowLeftIcon";Zo.propTypes=V;var ml=Jp.memo(Zo,q);import{jsx as at,jsxs as en}from"react/jsx-runtime";var hl=Jo.forwardRef(({title:e,options:t,value:r,hiding:o,isFullscreen:n,onClick:i,goBack:s,...l},a)=>{let{i18n:c}=_(),[u,p]=Jo.useState(!1);return Jo.useEffect(()=>{p(!1),o&&setTimeout(()=>{p(!0)},100)},[o]),en("div",{ref:a,...l,children:[at(gl,{children:en(H,{onClick:s,isFullscreen:n,isText:!0,children:[at(ml,{width:28,height:28}),at("span",{children:e})]})}),at(bl,{show:u,children:at(Sl,{children:t.map((f,m)=>at(vl,{selected:f.value===r,isFullscreen:n,children:en(H,{onClick:()=>i(f.value),isFullscreen:n,isText:!0,children:[f.label,"isFullHD"in f&&f.isFullHD&&at(wl,{children:c.hd})]})},m))})})]})});hl.displayName="DropdownOverlay";var yl=hl;import{jsx as El}from"react/jsx-runtime";var kl=g(yl)`
  width: 250px;
  height: 283.5px;
  max-height: 283.5px;
  position: absolute;
  overflow: hidden;
  overflow-y: auto;
  overflow-x: hidden;
  background: rgba(15, 15, 15, 0.9);
  ${({isFullscreen:e})=>e?`
      right: -52px;
      bottom: 75px;
    `:`
      right: -35px;
      bottom: 55px;
    `}
  ${({hiding:e})=>e?`
      display: block;
    `:`
      display: none;
    `}
  &::-webkit-scrollbar {
    width: 8px;
    background-color: #4c4c4c;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #909090;
    border-radius: 10px;
  }
`,gl=g.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  & ${H} {
    width: 100%;
    font-size: 91%;
    padding: 20px 5px;
    height: 57px;
  }
`,Pl=xl.forwardRef(({show:e,...t},r)=>El("div",{ref:r,...t}));Pl.displayName="DropdownContent";var bl=g(Pl)`
  opacity: 0;
  -webkit-transform: translate(100px, 0);
  -ms-transform: translate(100px, 0);
  transform: translate(100px, 0);
  transition:
    opacity 0.15s linear,
    -webkit-transform 0.15s ease-out;
  transition:
    opacity 0.15s linear,
    transform 0.15s ease-out;
  transition:
    opacity 0.15s linear,
    transform 0.15s ease-out,
    -webkit-transform 0.15s ease-out;
  ${({show:e})=>e?`
      opacity: 1;
      -webkit-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      transform: translate(0, 0);
    `:""}
`,Sl=g.ul`
  padding: 10px 0;
`,Cl=xl.forwardRef(({selected:e,isFullscreen:t,...r},o)=>El("li",{ref:o,...r}));Cl.displayName="DropdownItem";var vl=g(Cl)`
  ${ke} ${we} & {
    padding: 0 15px;

    & ${H} {
      border-radius: 8px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 500;
      width: 100%;
      line-height: 40px;
      padding: 0 15px;
      margin: 0;
      ${({isFullscreen:e})=>e?`
        height: 49px;
      `:`
        height: 40px;
      `}
      ${({selected:e})=>e?"background-color: rgb(204, 54, 43, 0.4) !important;":""}
    }
    & ${H}:hover {
      background: rgba(255, 255, 255, 0.1) !important;
    }
  }
`,wl=g.sub`
  font-size: 10px;
  font-weight: 500;
  color: #cb0e0b;
  margin-left: 3px;
`;import ye,{useEffect as ed}from"react";var rr={generalMenu:!1,speed:!1,quality:!1};var or=({label:e,value:t,i18n:r})=>e==="quality"?`${t}p`:e==="speed"&&t==="1"?r.normal:t;var Rl=({qualityOptions:e,live:t,i18n:r})=>{let o=[];return t||o.push({label:r.speed,value:"speed",options:[{label:"2",value:"2"},{label:"1.5",value:"1.5"},{label:"1.25",value:"1.25"},{label:"Normal",value:"1"},{label:"0.75",value:"0.75"},{label:"0.5",value:"0.5"},{label:"0.25",value:"0.25"}]}),e.length>0&&o.push({label:r.quality,value:"quality",options:e}),o};var td=({live:e,fullHDQualityBreak:t,qualities:r,playbackRate:o,changeSettings:n,fullscreen:i})=>{var P,k,A,E,d,L;let{i18n:s}=_(),l=G(),a=ye.useRef(null),[c,u]=ye.useState(rr),[p,f]=ye.useState({quality:{label:(k=(P=r[0])==null?void 0:P.label)!=null?k:"",value:(E=(A=r[0])==null?void 0:A.value)!=null?E:"",isFullHD:(L=(d=r[0])==null?void 0:d.isFullHD)!=null?L:!1},speed:{label:s.normal,value:"1"}});ed(()=>{let M=o.toString();f(v=>({...v,speed:{label:or({label:"speed",value:M,i18n:s}),value:M}}))},[s,o]);let m=ye.useCallback(M=>{M.stopPropagation(),l(v=>({type:"menuVisible",payload:v.subMenuVisible?!1:!v.menuVisible})),l({type:"subMenuVisible",payload:!1}),u(v=>({...rr,generalMenu:!v.speed&&!v.quality?!v.generalMenu:!1}))},[]),S=ye.useCallback(M=>v=>{f(O=>({...O,[M]:{label:or({label:M,value:v,i18n:s}),value:v,isFullHD:t!==void 0&&Number(v!=null?v:"0")>=t}})),l({menuVisible:!1,subMenuVisible:!1}),u(rr)},[t,s]),h=ye.useCallback(M=>{l({menuVisible:!1,subMenuVisible:!0}),u(v=>({...v,generalMenu:!1,[M]:!0}))},[]),C=ye.useCallback(M=>()=>{l({menuVisible:!0,subMenuVisible:!1}),u(v=>({...v,generalMenu:!0,[M]:!1}))},[]);ye.useEffect(()=>{let M=v=>{var O;a.current&&(!a.current.contains(v.target)||!Array.from((O=a.current)==null?void 0:O.querySelectorAll("*")).map(x=>x.contains(v.target)).includes(!0))&&(l({menuVisible:!1,subMenuVisible:!1}),u(rr))};return document.body.addEventListener("click",M),()=>document.body.removeEventListener("click",M)},[]);let y=ye.useMemo(()=>Rl({qualityOptions:r,live:e,i18n:s}),[e,r,s]),b=ye.useMemo(()=>xe(i),[i]);return ye.useEffect(()=>{n(p)},[p]),{dropdownRef:a,settings:c,values:p,iconProps:b,settingsOptions:y,handleButtonClick:m,handleMenuItemClick:h,handleMenuClick:S,handleGoBack:C}},Tl=td;import{jsx as Be,jsxs as tn}from"react/jsx-runtime";var Al=({live:e,qualities:t,playbackRate:r,fullHDQualityBreak:o,changeSettings:n,fullscreen:i})=>{var C;let{i18n:s}=_(),{dropdownRef:l,settings:a,values:c,iconProps:u,settingsOptions:p,handleButtonClick:f,handleMenuItemClick:m,handleMenuClick:S,handleGoBack:h}=Tl({live:e,fullHDQualityBreak:o,qualities:t,playbackRate:r,changeSettings:n,fullscreen:i});return tn(Za,{ref:l,children:[Be(al,{type:"button","aria-label":s.settings,title:s.settings,"aria-expanded":a.generalMenu,onClick:f,isFullscreen:i,isFullHD:(C=c.quality)==null?void 0:C.isFullHD,isExpanded:a.generalMenu,isTooltipActive:!0,children:Be(ul,{...u})}),Be(el,{hiding:a.generalMenu,singleOption:e||t.length===0,isFullscreen:i,children:Be(tl,{children:p.map((y,b)=>{var P;return Be(rl,{children:tn(H,{onClick:()=>m(y.value),isFullscreen:i,isText:!0,children:[Be(ol,{children:y.label}),tn(il,{children:[Be(nl,{children:(P=c[y.value])==null?void 0:P.label}),Be(dl,{width:28,height:28})]})]})},b)})})}),p.map((y,b)=>{var P;return Be(kl,{hiding:a[y.value],title:y.label,options:y.options,value:(P=c[y.value])==null?void 0:P.value,isFullscreen:i,onClick:S(y.value),goBack:h(y.value)},b)})]})};Al.propTypes={live:Re.default.bool.isRequired,qualities:Re.default.arrayOf(Re.default.shape({label:Re.default.string.isRequired,value:Re.default.string.isRequired}).isRequired).isRequired,playbackRate:Re.default.number.isRequired,fullHDQualityBreak:Re.default.number,changeSettings:Re.default.func.isRequired,fullscreen:Re.default.bool.isRequired};var Ll=rd.memo(Al,(e,t)=>e.live===t.live&&e.qualities===t.qualities&&e.playbackRate===t.playbackRate&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.changeSettings===t.changeSettings&&e.fullscreen===t.fullscreen);import jr from"react";import od from"react";import{jsx as Il}from"react/jsx-runtime";var rn=({width:e=36,height:t=36})=>Il("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",children:Il("path",{d:"M 21.333 23.666 C 21.333 23.758 21.3 23.835 21.235 23.902 C 21.168 23.967 21.091 24 21 24 L 11 24 C 10.944 24 10.898 23.995 10.859 23.979 C 10.821 23.966 10.789 23.942 10.765 23.906 C 10.741 23.871 10.723 23.844 10.708 23.822 C 10.695 23.803 10.684 23.762 10.678 23.703 C 10.671 23.644 10.667 23.604 10.667 23.583 L 10.667 17.335 L 8.667 17.335 C 8.487 17.335 8.329 17.266 8.198 17.134 C 8.067 17.004 8 16.846 8 16.666 C 8 16.5 8.052 16.358 8.156 16.239 L 11.489 12.24 C 11.621 12.087 11.792 12.01 12 12.01 C 12.208 12.01 12.379 12.087 12.511 12.24 L 15.844 16.239 C 15.948 16.358 16 16.5 16 16.666 C 16 16.846 15.933 17.004 15.803 17.134 C 15.671 17.266 15.513 17.335 15.333 17.335 L 13.333 17.335 L 13.333 21.334 L 19.333 21.334 C 19.444 21.334 19.532 21.372 19.593 21.448 L 21.26 23.448 C 21.309 23.518 21.333 23.59 21.333 23.666 Z M 28 19.334 C 28 19.5 27.948 19.642 27.844 19.761 L 24.511 23.76 C 24.372 23.92 24.201 24 24 24 C 23.799 24 23.628 23.92 23.489 23.76 L 20.156 19.761 C 20.052 19.642 20 19.5 20 19.334 C 20 19.154 20.067 18.996 20.198 18.866 C 20.329 18.734 20.487 18.667 20.667 18.667 L 22.667 18.667 L 22.667 14.666 L 16.667 14.666 C 16.556 14.666 16.468 14.626 16.407 14.542 L 14.74 12.542 C 14.691 12.478 14.667 12.41 14.667 12.334 C 14.667 12.243 14.7 12.166 14.765 12.098 C 14.832 12.034 14.909 12 15 12 L 25 12 C 25.056 12 25.103 12.007 25.141 12.022 C 25.179 12.034 25.211 12.058 25.235 12.094 C 25.259 12.13 25.278 12.156 25.292 12.178 C 25.305 12.199 25.316 12.238 25.323 12.298 C 25.329 12.356 25.333 12.396 25.333 12.418 L 25.333 18.667 L 27.333 18.667 C 27.513 18.667 27.671 18.734 27.803 18.866 C 27.933 18.996 28 19.154 28 19.334 Z"})});rn.displayName="InLoopIcon";rn.propTypes=V;var Ol=od.memo(rn,q);import nd from"react";import{jsx as Ml}from"react/jsx-runtime";var on=({width:e=36,height:t=36})=>Ml("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor",children:Ml("path",{d:"M25 17H17v6H25zM29 25V10.981a1.989 1.989 0 0 0 -2 -1.981H9a1.989 1.989 0 0 0 -2 1.981V25c0 1.1 0.9 2 2 2h18c1.1 0 2 -0.9 2 -2m-2 0.019H9V10.969h18z"})});on.displayName="PipIcon";on.propTypes=V;var Dl=nd.memo(on,q);import{jsx as _l}from"react/jsx-runtime";var id=({fullscreen:e,contextMenuRef:t,pictureInPictureEnabled:r,pip:o,loop:n=!1,requestPictureInPicture:i,exitPictureInPicture:s,onLoopClick:l})=>{let a=G(),[c,u]=jr.useState({x:0,y:0}),p=jr.useCallback(S=>{var j,pe;S.preventDefault();let h=((j=t.current)==null?void 0:j.offsetWidth)||0,C=((pe=t.current)==null?void 0:pe.offsetHeight)||0,y=S.pageX,b=S.pageY,P=document.documentElement,k=P.scrollLeft||0,A=P.scrollTop||0,E=P.clientLeft||0,d=P.clientTop||0,L=window.innerWidth||0,M=window.innerHeight||0,v=(window.pageXOffset||k)-(E||0),O=(window.pageYOffset||A)-(d||0),x=y+h>L+v?y-h:y,T=b+C>M+O?b-C:b;u({x,y:T}),a({type:"contextMenuVisible",payload:!0})},[t]),f=jr.useMemo(()=>xe(e),[e]),m=jr.useMemo(()=>{let S=[{action:()=>l(),label:"En Bucle",icon:_l(Ol,{...f}),isCheckable:!0,defaultChecked:n}];return r&&S.push({action:()=>o?s():i(),label:"Pantalla en pantalla",icon:_l(Dl,{...f}),isCheckable:!1,defaultChecked:!1}),S},[f,r,o,n,i,s]);return{handleContextMenu:p,contextMenuPosition:c,contextMenuItems:m}},Bl=id;import Vt from"react";import ad from"react-dom";import Fl from"react";import{jsx as Ul}from"react/jsx-runtime";var Nl=Fl.forwardRef(({showing:e,positionX:t,positionY:r,...o},n)=>Ul("div",{ref:n,...o}));Nl.displayName="StyledContextMenu";var Vl=g(Nl)`
  position: absolute;
  border-radius: 4px;
  background: rgba(15, 15, 15, 0.9);
  transition: all 0.1s;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  padding: 8px 0;
  z-index: 9999;
  color: #fff;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    PingFang SC,
    Hiragino Sans GB,
    Microsoft YaHei,
    Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol;
  font-variant: tabular-nums;
  font-size: 11px;
  line-height: 1.5;

  ${({showing:e,positionX:t,positionY:r})=>`
        display: ${e?"block":"none"};
        top: ${r}px;
        left: ${t}px;
    `}
`,ql=Fl.forwardRef(({isFullscreen:e,...t},r)=>Ul("div",{ref:r,...t}));ql.displayName="ContextMenuItem";var Hl=g(ql)`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
  height: 40px;
  &:hover {
    background: rgba(255, 255, 255, 0.1) !important;
  }
  ${({isFullscreen:e})=>e?`
    height: 49px;
    `:`
    height: 40px;
  `}
`,zl=g.span`
  padding: 0 12px;
  font-size: 118%;
`,$l=g.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  font-size: 109%;
  margin-right: 12px;
  margin-left: auto;
`;be();import sd from"react";import{jsx as Ql}from"react/jsx-runtime";var nn=({width:e=36,height:t=36})=>Ql("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",children:Ql("path",{d:"M4.8 19.582 13.237 28.05 31.2 9.877 29.295 7.95 13.237 24.197 6.705 17.586Z"})});nn.displayName="CheckedIcon";nn.propTypes=V;var Wl=sd.memo(nn,q);import{jsx as Yr,jsxs as ld}from"react/jsx-runtime";var jl=Vt.forwardRef(({fullscreen:e,position:t,menuItems:r},o)=>{let n=_(),i=G(),s=Vt.useRef(),[l,a]=Vt.useState({}),c=Vt.useMemo(()=>{var p;return e?(p=n.playerRef)==null?void 0:p.current:document.body},[e,n.playerRef]);Vt.useEffect(()=>{let p=f=>{var m;s.current&&(!s.current.contains(f.target)||!Array.from((m=s.current)==null?void 0:m.querySelectorAll("*")).map(S=>S.contains(f.target)).includes(!0))&&i({type:"contextMenuVisible",payload:!1})};return window.addEventListener("click",p),()=>{window.removeEventListener("click",p)}},[i,s]);let u=Yr(Vl,{ref:Sn([o,s]),showing:n.contextMenuVisible,positionX:t.x,positionY:t.y,"data-itemindex":"0","aria-checked":n.contextMenuVisible,children:r.map((p,f)=>ld(Hl,{onClick:()=>{p.action(),i({type:"contextMenuVisible",payload:!1}),a(m=>({...m,[f]:!m[f]}))},isFullscreen:e,children:[p.icon,Yr(zl,{children:p.label}),p.isCheckable&&(l[f]||p.defaultChecked)&&Yr($l,{children:Yr(Wl,{width:24,height:24})})]},f))});return ad.createPortal(u,c)});jl.displayName="ContextMenu";var Yl=Vt.memo(jl,(e,t)=>e.fullscreen===t.fullscreen&&e.position===t.position&&e.menuItems===t.menuItems);import{Fragment as cd,jsx as re,jsxs as nr}from"react/jsx-runtime";var sn=We.forwardRef(({videoRef:e,playerRef:t,live:r=!1,hasResource:o=!1,hasAudio:n,prevented:i,loading:s,paused:l,ended:a,seeking:c,waiting:u,duration:p,buffered:f=null,currentTime:m,muted:S,volume:h,pictureInPictureEnabled:C,pip:y,fullscreen:b,qualities:P,spriteVTTFile:k,fullHDQualityBreak:A,playbackRate:E,loop:d,poster:L,onPlayClick:M,onPauseClick:v,onTogglePlay:O,changePlaybackRate:x,changePlayBackQuality:T,changeVolume:j,onMutedClick:pe,changeCurrentTime:ct,requestPictureInPicture:oe,exitPictureInPicture:ae,requestFullscreen:ne,exitFullscreen:ut,onSeeking:je,onLoopClick:ge,onPreventedClick:ar,kernelMsg:Ye=null},pt)=>{let Ge=G(),[dt,Te]=We.useState(!1),de=We.useRef(),ft=We.useRef(null),{showControls:fe,hideControls:le}=Ka({hasResource:o,loading:s,prevented:i,paused:l,ended:a,waiting:u,seeking:c,kernelMsg:Ye}),{contextMenuItems:Sc,contextMenuPosition:vc,handleContextMenu:wc}=Bl({fullscreen:b,contextMenuRef:ft,pip:y,loop:d,pictureInPictureEnabled:C,requestPictureInPicture:oe,exitPictureInPicture:ae,onLoopClick:ge});return We.useEffect(()=>{var Ae;Ge({videoRef:e,playerRef:t}),(Ae=t.current)==null||Ae.focus()},[e,t]),We.useImperativeHandle(pt,()=>({showControls:fe,hideControls:le}),[fe,le]),We.useEffect(()=>{var Ae;if(t.current){let mt=Le=>{let qt=Fr[Le.which||Le.keyCode]||Nr[Le.key];clearTimeout(de.current),qt==="ARROW_UP_KEY"||qt==="ARROW_DOWN_KEY"?(Te(!0),de.current=setTimeout(()=>Te(!1),2e3)):Te(!1)};return(Ae=t.current)==null||Ae.addEventListener("keydown",mt),()=>{var Le;(Le=t.current)==null||Le.removeEventListener("keydown",mt)}}},[S,h,t,de]),nr(we,{onContextMenu:wc,onMouseLeave:le,onMouseMove:fe,onTouchStart:fe,onMouseEnter:fe,onClick:fe,children:[re(ms,{}),re(is,{hasResource:o,prevented:i,paused:l,muted:S,currentTime:m,onClick:ar}),L&&re(gs,{style:{opacity:m<=0||a?1:0},children:re(bs,{style:{backgroundImage:`url(${L})`}})}),re(hs,{children:nr(ys,{style:{display:dt?"inline-block":"none"},children:[Math.round(h*100),"%"]})}),re(Yl,{ref:ft,fullscreen:b,position:vc,menuItems:Sc}),re(cs,{hasResource:o,loading:s,paused:l,ended:a,waiting:u,seeking:c,kernelMsg:Ye,onClick:O}),nr(Ps,{children:[r===!1&&re(ua,{spriteVTTFile:k,currentTime:m,duration:p,buffered:f,onChange:ct,onSeeking:je,fullscreen:b}),nr(Os,{extra:nr(cd,{children:[re(Ll,{live:r,qualities:P,playbackRate:E,fullscreen:b,fullHDQualityBreak:A,changeSettings:({quality:Ae,speed:mt})=>{var Le,qt;x(Number((Le=mt==null?void 0:mt.value)!=null?Le:1)),T((qt=Number(Ae==null?void 0:Ae.value))!=null?qt:0)}}),re(Ga,{fullscreen:b,requestFullscreen:ne,exitFullscreen:ut})]}),fullscreen:b,children:[re(za,{fullscreen:b,paused:l,ended:a,onPauseClick:v,onPlayClick:M}),re(Ma,{fullscreen:b,isMuted:S,forceMuted:!n,volume:h,onMutedClick:pe,changeVolume:j}),re(Fa,{live:r,currentTime:m,duration:p})]})]}),re(ds,{hasResource:o,loading:s,kernelMsg:Ye})]})});sn.displayName="PlayerSkin";sn.propTypes={spriteVTTFile:R.default.string,videoRef:R.default.oneOfType([R.default.func,R.default.shape({current:R.default.instanceOf(HTMLVideoElement)})]).isRequired,playerRef:R.default.oneOfType([R.default.func,R.default.shape({current:R.default.instanceOf(HTMLDivElement)})]).isRequired,prevented:R.default.bool,waiting:R.default.bool,live:R.default.bool.isRequired,hasResource:R.default.bool.isRequired,loading:R.default.bool.isRequired,paused:R.default.bool.isRequired,ended:R.default.bool.isRequired,seeking:R.default.bool.isRequired,onPlayClick:R.default.func.isRequired,onPauseClick:R.default.func.isRequired,duration:R.default.number.isRequired,buffered:R.default.number.isRequired||null,currentTime:R.default.number.isRequired,changeCurrentTime:R.default.func.isRequired,muted:R.default.bool.isRequired,volume:R.default.number.isRequired,changeVolume:R.default.func.isRequired,onMutedClick:R.default.func.isRequired,changePlaybackRate:R.default.func.isRequired,pictureInPictureEnabled:R.default.bool.isRequired,pip:R.default.bool.isRequired,requestPictureInPicture:R.default.func.isRequired,exitPictureInPicture:R.default.func.isRequired,fullscreen:R.default.bool.isRequired,qualities:R.default.arrayOf(R.default.shape({label:R.default.string.isRequired,value:R.default.string.isRequired,isFullHD:R.default.bool.isRequired}).isRequired).isRequired,playbackRate:R.default.number.isRequired,loop:R.default.bool.isRequired,requestFullscreen:R.default.func.isRequired,exitFullscreen:R.default.func.isRequired,onLoopClick:R.default.func.isRequired,onPreventedClick:R.default.func.isRequired,kernelMsg:R.default.oneOfType([R.default.shape({type:R.default.string.isRequired,detail:R.default.string.isRequired}),R.default.oneOf([void 0])]),fullHDQualityBreak:R.default.number,poster:R.default.string.isRequired};var Gl=We.memo(sn,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.videoRef===t.videoRef&&e.playerRef===t.playerRef&&e.live===t.live&&e.hasResource===t.hasResource&&e.loading===t.loading&&e.prevented===t.prevented&&e.paused===t.paused&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.pictureInPictureEnabled===t.pictureInPictureEnabled&&e.pip===t.pip&&e.fullscreen===t.fullscreen&&e.qualities===t.qualities&&e.playbackRate===t.playbackRate&&e.loop===t.loop&&e.kernelMsg===t.kernelMsg&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.poster===t.poster&&e.onPauseClick===t.onPauseClick&&e.onPlayClick===t.onPlayClick&&e.changeCurrentTime===t.changeCurrentTime&&e.onMutedClick===t.onMutedClick&&e.changeVolume===t.changeVolume&&e.changePlaybackRate===t.changePlaybackRate&&e.requestPictureInPicture===t.requestPictureInPicture&&e.exitPictureInPicture===t.exitPictureInPicture&&e.requestFullscreen===t.requestFullscreen&&e.exitFullscreen===t.exitFullscreen&&e.onSeeking===t.onSeeking&&e.onLoopClick===t.onLoopClick&&e.onPreventedClick===t.onPreventedClick);import Xl from"react";var ir=["i18n","contextMenuVisible","controlsHovering","hiding","menuVisible","subMenuVisible","timeSliding","volumeSliding","videoRef","playerRef"];function Kl(e,t){try{if(!e||!t)throw new Error("Reducer params has not been provided!");if("type"in t){let{type:r,payload:o}=t;for(let n=0;n<ir.length;n++){let i=ir[n];if(ir.includes(r)===!1)throw new Error(`Invalid type "${r}" in action payload!`);if(i===r)return{...e,[i]:o}}}else if(typeof t=="object"){if(Object.keys(t).length===0)throw new Error("Reducer action object is empty!");let r={...e};for(let o in t){let n=t[o];if(ir.includes(o)===!1)throw new Error(`Invalid type "${o}" in action object!`);r={...r,[o]:n}}return r}return e}catch(r){return console.error("Error in AppReducer: ",r),e}}import{jsx as ud}from"react/jsx-runtime";var Zl=({children:e,language:t})=>{let[r,o]=Xl.useReducer(Kl,{...Oo,i18n:St[t]}),n=Xl.useMemo(()=>({state:r,dispatch:o}),[r,o]);return ud(Ot.Provider,{value:n,children:e})};import Fe from"react";import lt from"react";var pd=({prevented:e,muted:t,videoRef:r,src:o,updateState:n})=>{let i=lt.useCallback(c=>{if(!r.current)return;let u=c.target.muted;c.target.volume===0&&(u=!0),n({volume:c.target.volume,muted:u})},[r]),s=lt.useCallback(()=>{if(!r.current)return;let c=r.current;if(c){let u=0;(e||t||c.volume===0)&&c.muted===!0&&(u=1),n({volume:u,muted:!c.muted})}},[r,e,t]),l=lt.useCallback(c=>{if(!r.current)return;let u=r.current,p=c===0;u&&(u.volume=c),c!==0&&u.muted===!0&&(p=!1),n({volume:c,muted:p})},[r]),a=lt.useCallback(c=>{if(!r.current)return;let p=r.current.volume,f=c(p);l(f)},[r,l]);return lt.useEffect(()=>()=>{r.current=null},[r]),lt.useEffect(()=>{if(!r.current)return()=>{};let c=r.current;return c?(c.addEventListener("volumechange",i),()=>{c.removeEventListener("volumechange",i)}):()=>{}},[i]),lt.useEffect(()=>{if(!r.current)return;let c=r.current;c&&(c.muted=!1,c.volume=1)},[o,r]),{onMutedClick:s,changeVolume:l,updateVolumeWithCallback:a}},Jl=pd;import sr from"react";var dd=({updateState:e,videoRef:t,playerRef:r})=>{let o=sr.useCallback(()=>{let l=r==null?void 0:r.current,a=t==null?void 0:t.current;if(!l){console.error("useVideoFullscreen: the player element is not ready");return}l.requestFullscreen?l.requestFullscreen():l.msRequestFullscreen?l.msRequestFullscreen():l.webkitRequestFullscreen?l.webkitRequestFullscreen():a&&a.webkitEnterFullScreen&&a.webkitEnterFullScreen()},[t,r]),n=sr.useCallback(()=>{document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},[]),i=sr.useCallback(()=>{let l=r==null?void 0:r.current;(document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement)===l?n():o()},[r,n,o]),s=sr.useCallback(()=>{let l=r==null?void 0:r.current,a=document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement;e({fullscreen:!!l&&a===l})},[e,r]);return sr.useEffect(()=>(document.addEventListener("fullscreenchange",s),document.addEventListener("webkitfullscreenchange",s),document.onmsfullscreenchange=s,()=>{document.removeEventListener("fullscreenchange",s),document.removeEventListener("webkitfullscreenchange",s),document.onmsfullscreenchange=null}),[s]),{requestFullscreen:o,exitFullscreen:n,requestToggleFullscreen:i}},ec=dd;var fd=({ref:e,playerRef:t,url:r,player:o,fullHDQualityBreak:n,sources:i,prevented:s,muted:l,updateState:a})=>{let{i18n:c}=_(),u=Fe.useRef(null),p=Fe.useRef(null),{requestFullscreen:f,exitFullscreen:m,requestToggleFullscreen:S}=ec({updateState:({fullscreen:d})=>{a(L=>({...L,isFullScreen:d}))},videoRef:u,playerRef:t}),h=Fe.useMemo(()=>i.length>0?i.map(d=>({label:or({label:"quality",value:d.resolution.toString(),i18n:c}),value:d.resolution.toString(),isFullHD:n!==void 0&&d.resolution>=n})):[],[i,n,c]),{onMutedClick:C,changeVolume:y,updateVolumeWithCallback:b}=Jl({prevented:s,muted:l,videoRef:u,src:r,updateState:({muted:d,volume:L})=>a(M=>({...M,isMuted:d!=null?d:!1,volume:L!=null?L:0}))}),P=Fe.useCallback(d=>{o&&(a(L=>({...L,played:d})),o.seekTo(d))},[o]),k=Fe.useCallback(d=>{if(!o)return;let L=o.getCurrentTime()||0,M=o.getDuration()||0,v=d(L,M);P(v)},[o]),A=Fe.useMemo(()=>({onPlayClick:()=>o&&a(d=>({...d,playing:!0})),onPauseClick:()=>o&&a(d=>({...d,playing:!1})),onTogglePlay:()=>o&&a(d=>({...d,playing:!d.playing})),changePlaybackRate:d=>o&&a(L=>({...L,playbackRate:d})),changePlayBackQuality:d=>{o&&a(L=>({...L,playbackQuality:d}))},requestPictureInPicture:()=>o&&a(d=>({...d,isPIP:!0})),exitPictureInPicture:()=>o&&a(d=>({...d,isPIP:!1})),onSeeking:d=>o&&a(L=>({...L,seeking:d})),onMutedClick:()=>o&&C(),onLoopClick:()=>o&&a(d=>({...d,loop:!d.loop})),onPreventedClick:()=>a(d=>({...d,isMuted:!1,volume:1})),changeCurrentTime:P}),[o]),E=Fe.useCallback(d=>{var M;d.preventDefault(),d.stopPropagation();let L=Fr[d.which||d.keyCode]||Nr[d.key];if(o)switch((M=p.current)==null||M.showControls(),L){case"SPACE_KEY":{a(v=>({...v,playing:!v.playing}));break}case"F_KEY":{S();break}case"MUTE_KEY":{C();break}case"ARROW_LEFT_KEY":{k(v=>{let O=v-5;return O<0?0:O});break}case"ARROW_RIGHT_KEY":{k((v,O)=>{let x=v+5;return x>=O?O:x});break}case"ARROW_UP_KEY":{b(v=>{let O=v+.1;return O>=1?1:O});break}case"ARROW_DOWN_KEY":{b(v=>{let O=v-.1;return O<0?0:O});break}default:break}},[o]);return Fe.useImperativeHandle(e,()=>({handleKeyDown:E})),Fe.useEffect(()=>{var d;u.current=(d=o==null?void 0:o.getPlayer())!=null?d:null},[o==null?void 0:o.getPlayer]),{playerSkinRef:p,videoRef:u,qualities:h,memorizedProps:A,handleKeyDown:E,requestFullscreen:f,exitFullscreen:m,changeVolume:y}},tc=fd;import{jsx as rc}from"react/jsx-runtime";var an=oc.forwardRef(({url:e,sources:t,playerRef:r,player:o,hasAudio:n,fullHDQualityBreak:i,live:s=!1,language:l=Object.keys(St)[0],hasResource:a=!1,buffered:c=null,kernelMsg:u=null,updateState:p,waiting:f=!1,prevented:m=!1,muted:S=!1,...h},C)=>{let{playerSkinRef:y,videoRef:b,qualities:P,memorizedProps:k,handleKeyDown:A,requestFullscreen:E,exitFullscreen:d,changeVolume:L}=tc({ref:C,playerRef:r,url:e,player:o,fullHDQualityBreak:i,sources:t,prevented:m,muted:S,updateState:p});return rc(Zl,{language:l,children:rc(Gl,{ref:y,videoRef:b,playerRef:r,qualities:P,hasAudio:n,handleKeyDown:A,requestFullscreen:E,exitFullscreen:d,changeVolume:L,fullHDQualityBreak:i,live:s,hasResource:a,buffered:c,kernelMsg:u,prevented:m,waiting:f,muted:S,...h,...k})})});an.displayName="PlayerSkinWrapper";an.propTypes={playerRef:D.default.oneOfType([D.default.func,D.default.shape({current:D.default.instanceOf(HTMLDivElement)})]).isRequired,player:D.default.instanceOf(Se),live:D.default.bool,prevented:D.default.bool,waiting:D.default.bool,hasResource:D.default.bool.isRequired,hasAudio:D.default.bool.isRequired,loading:D.default.bool.isRequired,paused:D.default.bool.isRequired,ended:D.default.bool.isRequired,seeking:D.default.bool.isRequired,duration:D.default.number.isRequired,buffered:D.default.number.isRequired||null,currentTime:D.default.number.isRequired,muted:D.default.bool.isRequired,volume:D.default.number.isRequired,playbackRate:D.default.number.isRequired,pictureInPictureEnabled:D.default.bool.isRequired,fullHDQualityBreak:D.default.number,pip:D.default.bool.isRequired,fullscreen:D.default.bool.isRequired,kernelMsg:D.default.oneOfType([D.default.shape({type:D.default.string.isRequired,detail:D.default.string.isRequired}),D.default.oneOf([void 0])]),url:D.default.string,sources:D.default.arrayOf(D.default.shape({src:D.default.string.isRequired,resolution:D.default.number.isRequired}).isRequired).isRequired,loop:D.default.bool.isRequired};var nc=oc.memo(an,(e,t)=>e.playerRef===t.playerRef&&e.player===t.player&&e.live===t.live&&e.hasResource===t.hasResource&&e.hasAudio===t.hasAudio&&e.loading===t.loading&&e.prevented===t.prevented&&e.paused===t.paused&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.playbackRate===t.playbackRate&&e.loop===t.loop&&e.pictureInPictureEnabled===t.pictureInPictureEnabled&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.pip===t.pip&&e.fullscreen===t.fullscreen&&e.kernelMsg===t.kernelMsg&&e.url===t.url&&e.sources===t.sources&&e.poster===t.poster);var Gr={kernelError:null,seeking:!1,seek:0,played:0,loaded:0,duration:0,isFullScreen:!1,isEnded:!1,isPIP:!1,isLoading:!0,volume:.8,playbackRate:1,playbackQuality:null,videoUrl:null,hasAudio:!0,loop:!1,playing:!1,isMuted:!1};import md from"react";import{jsx as hd}from"react/jsx-runtime";var ic=md.forwardRef(({children:e,...t},r)=>hd(ke,{ref:r,...t,children:e}));ic.displayName="MediaPlayerWrapper";var sc=ic;be();import Kr from"react";var ac=e=>{let t=`rmp_${e}=`,r=document.cookie.split(";");for(let o=0;o<r.length;o++){let n=r[o];for(;n.charAt(0)===" ";)n=n.substring(1,n.length);if(n.indexOf(t)===0)return n.substring(t.length,n.length)}return null},lc=(e,t,r)=>{let o="";if(r){let n=new Date;n.setTime(n.getTime()+r*24*60*60*1e3),o=`; expires=${n.toUTCString()}`}document.cookie=`rmp_${e}=${t||""}${o}; path=/`};var cc=async()=>{let e="https://files.testfile.org/PDF/10MB-TESTFILE.ORG.pdf",r=performance.now();try{let o=ac("internet_speed");if(o)return parseFloat(o);await(await fetch(e,{mode:"no-cors"})).blob();let l=83886080/((performance.now()-r)/1e3*1024*1024);return lc("internet_speed",l.toString(),7),l}catch(o){return console.error("An error occurred while measuring the network speed: ",o),null}},uc=(e,t)=>{let r=[{quality:144,minSpeed:.3},{quality:270,minSpeed:.5},{quality:360,minSpeed:.7},{quality:480,minSpeed:1},{quality:720,minSpeed:2.5},{quality:1080,minSpeed:5},{quality:2160,minSpeed:20}],o;for(let n=r.length-1;n>=0;n--){let i=r[n];if(e>=i.minSpeed){o=i.quality;break}}if(o&&t.includes(o))return o;for(let n=r.length-1;n>=0;n--){let i=r[n];if(t.includes(i.quality))return i.quality}};var yd=({onBuffer:e,onBufferEnd:t,onDisablePIP:r,onDuration:o,onEnablePIP:n,onEnded:i,onError:s,onPause:l,onPlay:a,onPlayBackQualityChange:c,onPlayBackRateChange:u,onProgress:p,onReady:f,onSeek:m,onStart:S,onLoaded:h,onMount:C,updateState:y,playerState:b,extraProps:{url:P,sources:k,fullHDQualityBreak:A,prevented:E}})=>{let[d,L]=Kr.useState(null),M=k.map(x=>x.resolution);if(k.length>0&&M.includes(A)===!1)throw new Error(`Invalid values in fullHDQualityBreak. Accepted resolutions are: ${M.join(", ")}`);Kr.useEffect(()=>{(async()=>{var x,T;if(k&&k.length>0){let j=Jr(k,"resolution");if(d===null&&j){let pe=await cc(),ct=Object.keys(j).map(Number),oe=uc(pe||0,ct);if(pe!==null&&oe)L((T=(x=j[oe==null?void 0:oe.toString()])==null?void 0:x.src)!=null?T:k[0].src),y(ae=>({...ae,playbackQuality:oe}));else{let ae=k[0].src;L(ae),y(ne=>({...ne,playbackQuality:Number(ae)}))}}}})()},[k,d]);let v=Kr.useMemo(()=>{var x,T;if(k&&k.length>0){let j=Jr(k,"resolution");return b.playbackQuality===null||b.playbackQuality===void 0?d!==null?d:k[0].src:(T=(x=j[b.playbackQuality])==null?void 0:x.src)!=null?T:k[0].src}return P},[P,k,b.playbackQuality,d]);return{...Kr.useMemo(()=>({onBuffer:e,onBufferEnd:t,onDisablePIP:x=>{r&&r(x),y(T=>({...T,isPIP:!1}))},onDuration:x=>{o&&o(x),y(T=>({...T,duration:x}))},onEnablePIP:x=>{n&&n(x),y(T=>({...T,isPIP:!0}))},onEnded:x=>{i&&i(x),y(T=>({...T,isEnded:!0}))},onError:(x,T,j,pe)=>{s(x,T,j,pe),["networkError"].includes(T==null?void 0:T.type)===!1&&y(oe=>{var ae;return{...oe,kernelError:T?{type:(T==null?void 0:T.type)||"UnknownError",detail:((ae=T==null?void 0:T.error)==null?void 0:ae.message)||"Something was wrong with the playback. Please try again."}:null,isLoading:!1,playing:!1}})},onPause:x=>{l&&l(x),y(T=>({...T,playing:!1}))},onPlay:x=>{a&&a(x),y(T=>{var j;return{...T,playing:!0,isEnded:!1,hasAudio:E?!0:(j=x==null?void 0:x.hasAudio)!=null?j:!1}})},onPlayBackQualityChange:x=>{c&&c(x),y(T=>({...T,playbackQuality:x}))},onPlayBackRateChange:x=>{u&&u(x),y(T=>({...T,playbackRate:x}))},onProgress:x=>{p&&p(x),b.seeking||y(T=>({...T,played:x.playedSeconds,loaded:x.loaded}))},onReady:x=>{f&&f(x),y(T=>({...T,isLoading:!1}))},onSeek:x=>{m&&m(x),y(T=>({...T,seek:x}))},onStart:()=>{S&&S()},onLoaded:h,onMount:C}),[b.seeking,E]),videoUrl:v!=null?v:d}},pc=yd;var dc=g.div`
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  margin: auto;
`;import{jsx as ln,jsxs as gd}from"react/jsx-runtime";var fc=Ne.forwardRef((e,t)=>{var p,f;let[r,o]=Ne.useState({}),[n,i]=Ne.useState({...Gr,isPIP:e.pip,isMuted:e.muted,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,volume:e.muted?0:(p=e.volume)!=null?p:Gr.volume});Ne.useEffect(()=>{i(m=>{var S;return{...m,isPIP:e.pip,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,volume:e.muted?0:(S=e.volume)!=null?S:Gr.volume}})},[e.muted,e.volume,e.playing,e.pip,e.playbackRate,e.loop]);let s=Ne.useRef(null),l=Ne.useRef(null),a=Ne.useMemo(()=>e.prevented||e.playing&&e.muted,[e.muted,e.playing,e.prevented]);Ne.useEffect(()=>{if(e.player&&n.isLoading===!1){let S=e.player.getPlayer(),h=setTimeout(()=>{o({width:`${S.offsetWidth}px`,height:`${S.offsetHeight}px`})},500);return()=>{clearTimeout(h)}}},[e.player,n.isLoading]);let{videoUrl:c,...u}=pc({onBuffer:e.onBuffer,onBufferEnd:e.onBufferEnd,onDisablePIP:e.onDisablePIP,onDuration:e.onDuration,onEnablePIP:e.onEnablePIP,onEnded:e.onEnded,onError:e.onError,onPause:e.onPause,onPlay:e.onPlay,onPlayBackQualityChange:e.onPlayBackQualityChange,onPlayBackRateChange:e.onPlayBackRateChange,onProgress:e.onProgress,onReady:e.onReady,onSeek:e.onSeek,onStart:e.onStart,onLoaded:e.onLoaded,onMount:e.onMount,updateState:i,playerState:n,extraProps:{url:e.url,sources:e.sources,fullHDQualityBreak:e.fullHDQualityBreak,prevented:a}});return gd(sc,{tabIndex:0,role:"application",dir:"ltr",ref:l,onKeyDown:(f=s.current)==null?void 0:f.handleKeyDown,style:r,children:[ln(dc,{children:c&&ln(Se,{ref:t,activePlayer:e.activePlayer,controls:e.controls,loop:n.loop,muted:n.isMuted,pip:n.isPIP,playbackRate:n.playbackRate,playbackQuality:n.playbackQuality,playsinline:e.playsinline,progressInterval:e.progressInterval,stopOnUnmount:e.stopOnUnmount,volume:n.volume,url:c,width:e.width,height:e.height,playing:n.playing,config:{attributes:e.config.attributes,tracks:e.config.tracks,forceVideo:e.config.forceVideo,forceHLS:e.config.forceHLS,dashVersion:e.config.dashVersion,forceDASH:e.config.forceDASH,forceFLV:e.config.forceFLV,flvVersion:e.config.flvVersion,forceLoad:e.config.forceLoad,forceDisableHls:e.config.forceDisableHls,hlsOptions:e.config.hlsOptions,hlsVersion:e.config.hlsVersion,forceSafariHLS:e.config.forceSafariHLS,loopOnEnded:e.config.loopOnEnded},disableDeferredLoading:e.disableDeferredLoading,progressFrequency:e.progressFrequency,...u})}),ln(nc,{ref:s,playerRef:l,url:c,sources:e.sources,hasAudio:n.hasAudio,spriteVTTFile:e.spriteVTTFile,hasResource:typeof c=="string"||e.sources.length>0,kernelMsg:n.kernelError,loading:n.isLoading,prevented:a,muted:n.isMuted,paused:n.playing===!1,live:e.live,buffered:n.loaded,ended:n.isEnded,seeking:n.seeking,waiting:e.waiting,duration:n.duration,currentTime:n.played,volume:n.volume,playbackRate:n.playbackRate,pictureInPictureEnabled:!0,pip:n.isPIP,loop:n.loop,fullscreen:n.isFullScreen,fullHDQualityBreak:e.fullHDQualityBreak,language:e.language,poster:e.poster,updateState:i,player:e.player})]})});fc.displayName="MediaPlayerSkin";var mc=Ne.memo(fc,(e,t)=>e.url===t.url&&e.sources===t.sources&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.spriteVTTFile===t.spriteVTTFile&&e.prevented===t.prevented&&e.waiting===t.waiting&&e.playing===t.playing&&e.loop===t.loop&&e.controls===t.controls&&e.volume===t.volume&&e.muted===t.muted&&e.paused===t.paused&&e.live===t.live&&e.pip===t.pip&&e.playbackRate===t.playbackRate&&e.width===t.width&&e.height===t.height&&e.progressInterval===t.progressInterval&&e.playsinline===t.playsinline&&e.pipeline===t.pipeline&&e.stopOnUnmount===t.stopOnUnmount&&e.activePlayer===t.activePlayer&&e.player===t.player&&e.progressFrequency===t.progressFrequency&&e.disableDeferredLoading===t.disableDeferredLoading&&e.language===t.language&&e.poster===t.poster&&e.config===t.config&&e.onReady===t.onReady&&e.onStart===t.onStart&&e.onPlay===t.onPlay&&e.onPause===t.onPause&&e.onBuffer===t.onBuffer&&e.onBufferEnd===t.onBufferEnd&&e.onEnded===t.onEnded&&e.onError===t.onError&&e.onDuration===t.onDuration&&e.onSeek===t.onSeek&&e.onPlayBackRateChange===t.onPlayBackRateChange&&e.onPlayBackQualityChange===t.onPlayBackQualityChange&&e.onProgress===t.onProgress&&e.onEnablePIP===t.onEnablePIP&&e.onDisablePIP===t.onDisablePIP&e.onLoaded===t.onLoaded&&e.onMount===t.onMount);be();import{jsx as cn}from"react/jsx-runtime";var bd=typeof window!="undefined"&&window.document&&typeof document!="undefined",Sd=typeof global!="undefined"&&global.window&&global.window.document,vd=Object.keys(lo),wd=bd||Sd?hc.Suspense:()=>null,gc=e=>{var t;return t=class extends hc.Component{constructor(){super(...arguments);w(this,"player",null);w(this,"state",{});w(this,"references",{wrapper:n=>{this.wrapper=n},player:n=>{this.player=n}});w(this,"getDuration",()=>this.player?this.player.getDuration():null);w(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null);w(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null);w(this,"getInternalPlayer",(n="player")=>this.player?this.player.getInternalPlayer(n):null);w(this,"seekTo",(n,i,s)=>{if(!this.player)return null;this.player.seekTo(n,i,s)});w(this,"handleReady",()=>{this.props.onReady&&this.props.onReady(this)});w(this,"getActivePlayer",ur((n,i)=>e.canPlay(n,i)?e:null));w(this,"getConfig",ur((n,i,s)=>{let{config:l}=this.props;return yc.default.all([dr.config,dr.config[s]||{},l,l[s]||{}])}));w(this,"getAttributes",ur(()=>gn(this.props,vd)));w(this,"getSourceProps",()=>"sources"in this.props&&this.props.sources!==void 0?{sources:this.props.sources,fullHDQualityBreak:this.props.fullHDQualityBreak}:{sources:[]});w(this,"getUrlProp",()=>"url"in this.props&&this.props.url!==void 0?this.props.url:"");w(this,"renderActivePlayer",(n,i)=>{if(!n&&!i)return null;let s=this.getActivePlayer(n,i);if(!s)return null;let l=this.getConfig(n,i,s.key),a=this.getSourceProps(),c=this.getUrlProp();return cn(mc,{ref:this.references.player,activePlayer:s.lazyPlayer,player:this.player,controls:this.props.controls,loop:this.props.loop,muted:this.props.muted,pip:this.props.pip,playbackRate:this.props.playbackRate,playsinline:this.props.playsinline,progressInterval:this.props.progressInterval,stopOnUnmount:this.props.stopOnUnmount,volume:this.props.volume,url:c,sources:a.sources,width:this.props.width,height:this.props.height,playing:this.props.playing,config:{attributes:l.attributes,tracks:l.tracks,forceVideo:l.forceVideo,forceHLS:l.forceHLS,dashVersion:l.dashVersion,forceDASH:l.forceDASH,forceFLV:l.forceFLV,flvVersion:l.flvVersion,forceLoad:l.forceLoad,forceDisableHls:l.forceDisableHls,hlsOptions:l.hlsOptions,hlsVersion:l.hlsVersion,forceSafariHLS:l.forceSafariHLS,loopOnEnded:l.loopOnEnded},prevented:this.props.prevented,waiting:this.props.waiting,onBuffer:this.props.onBuffer,onBufferEnd:this.props.onBufferEnd,onDisablePIP:this.props.onDisablePIP,onDuration:this.props.onDuration,onEnablePIP:this.props.onEnablePIP,onEnded:this.props.onEnded,onError:this.props.onError,onPause:this.props.onPause,onPlay:this.props.onPlay,onPlayBackQualityChange:this.props.onPlayBackQualityChange,onPlayBackRateChange:this.props.onPlayBackRateChange,fullHDQualityBreak:a.fullHDQualityBreak,language:this.props.language,live:this.props.live,onProgress:this.props.onProgress,onReady:this.handleReady,onSeek:this.props.onSeek,onStart:this.props.onStart,onLoaded:this.props.onLoaded,onMount:this.props.onMount,disableDeferredLoading:this.props.disableDeferredLoading,progressFrequency:this.props.progressFrequency,spriteVTTFile:this.props.spriteVTTFile,poster:this.props.poster},s.key)})}shouldComponentUpdate(n,i){return!(0,un.default)(this.props,n)||!(0,un.default)(this.state,i)}componentDidUpdate(n){}render(){let{wrapper:n}=this.props,i=this.getUrlProp(),s=this.getSourceProps(),{className:l,...a}=this.getAttributes(),c=typeof n=="string"?this.references.wrapper:void 0;return cn(n,{ref:c,"data-testid":"media-player-skin",className:`reactjs-media-player${l?` ${l}`:""}`,...a,children:cn(wd,{fallback:this.props.fallback,children:this.renderActivePlayer(i,s.sources)})})}},w(t,"displayName","MediaPlayer"),w(t,"propTypes",lo),w(t,"defaultProps",dr),w(t,"canPlay",(n,i)=>!!e.canPlay(n,i)),w(t,"canEnablePIP",n=>!!(e.canEnablePIP&&e.canEnablePIP(n))),t};var bc=gc(In);import{jsx as Pd}from"react/jsx-runtime";function kd(e,t){xd(e).render(Pd(bc,{...t}))}export{kd as default};
