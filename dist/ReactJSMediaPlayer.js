var ReactJSMediaPlayer=(()=>{var iu=Object.create;var Xt=Object.defineProperty;var su=Object.getOwnPropertyDescriptor;var au=Object.getOwnPropertyNames;var lu=Object.getPrototypeOf,cu=Object.prototype.hasOwnProperty;var uu=(e,t,r)=>t in e?Xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var m=(e=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(e,{get:(t,r)=>(typeof require!="undefined"?require:t)[r]}):e)(function(e){if(typeof require!="undefined")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var Zt=(e,t)=>()=>(e&&(t=e(e=0)),t);var We=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Qn=(e,t)=>{for(var r in t)Xt(e,r,{get:t[r],enumerable:!0})},Wn=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of au(t))!cu.call(e,n)&&n!==r&&Xt(e,n,{get:()=>t[n],enumerable:!(o=su(t,n))||o.enumerable});return e};var g=(e,t,r)=>(r=e!=null?iu(lu(e)):{},Wn(t||!e||!e.__esModule?Xt(r,"default",{value:e,enumerable:!0}):r,e)),pu=e=>Wn(Xt({},"__esModule",{value:!0}),e);var k=(e,t,r)=>(uu(e,typeof t!="symbol"?t+"":t,r),r);var C=We((od,jn)=>{jn.exports=globalThis.React});var Kn=We((nd,Gn)=>{Gn.exports=function(t,r,o){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");typeof r=="function"&&(o=r,r={}),r=r||{},o=o||function(){},i.type=r.type||"text/javascript",i.charset=r.charset||"utf8",i.async="async"in r?!!r.async:!0,i.src=t,r.attrs&&du(i,r.attrs),r.text&&(i.text=""+r.text);var s="onload"in i?Yn:fu;s(i,o),i.onload||Yn(i,o),n.appendChild(i)};function du(e,t){for(var r in t)e.setAttribute(r,t[r])}function Yn(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function fu(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}});function bo(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}function ei(e){return(e==null?void 0:e.mozHasAudio)||(e==null?void 0:e.webkitAudioDecodedByteCount)>0||(e==null?void 0:e.audioTracks)!==void 0&&e.audioTracks.length>0}function Et(e){let t=e||document.createElement("video"),r=/iPhone|iPod/.test(navigator.userAgent)===!1;return t.webkitSupportsPresentationMode&&typeof t.webkitSetPresentationMode=="function"&&r}var Xn,Zn,Jn,Ct,Tr,So=Zt(()=>{Xn=g(C()),Zn=g(Kn()),Jn=e=>(0,Xn.lazy)(async()=>{let t=await e();return typeof t.default=="function"?t:t.default});Ct={},Tr=function(t,r,o=null,n=()=>!0,i=Zn.default){let s=bo(r);return s&&n&&n(s)?Promise.resolve(s):new Promise((l,a)=>{if(Ct[t]){Ct[t].push({resolve:l,reject:a});return}Ct[t]=[{resolve:l,reject:a}];let c=u=>{Ct[t].forEach(p=>p.resolve(u))};if(o){let u=window[o];window[o]=function(){u&&u(),c(bo(r))}}i(t,u=>{u?(Ct[t].forEach(p=>p.reject(u)),Ct[t]=null):o||c(bo(r))})})}});function ti(e,...t){let o=[].concat(...t),n={},i=Object.keys(e);for(let s of i)o.indexOf(s)===-1&&(n[s]=e[s]);return n}function je(e){return typeof window!="undefined"&&typeof window.MediaStream!="undefined"&&e instanceof window.MediaStream}function ri(e){return/^blob:/.test(e)}function oi(e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r&&(r.current=t)})}}var ot,vo,Ce=Zt(()=>{ot=e=>{let t=Math.floor(e/3600),r=Math.floor(e%3600/60),o=e%60;return t>0?`${String(t).padStart(2,"0")}:${String(r).padStart(2,"0")}:${String(o).padStart(2,"0")}`:`${String(r).padStart(2,"0")}:${String(o).padStart(2,"0")}`},vo=(e,t)=>e.reduce((r,o)=>(r[o[t]]=o,r),{})});var mu,wo,xo,ko,hu,Jt,Po=Zt(()=>{Ce();mu=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,wo=/\.(m3u8)($|\?)/i,xo=/\.(mpd)($|\?)/i,ko=/\.(flv)($|\?)/i,hu=(e,t)=>t&&t.length>0||je(e)||ri(e)?!0:mu.test(e)||wo.test(e)||xo.test(e)||ko.test(e),Jt=hu});var Co,yu,Eo,ni,ii,si,ai,li,ci,ui,pi=Zt(()=>{Co=typeof navigator!="undefined",yu=Co&&navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Eo=Co&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||yu)&&!window.MSStream,ni=Co&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!window.MSStream,ii="https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js",si="Hls",ai="https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js",li="dashjs",ci="https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js",ui="flvjs"});var fi={};Qn(fi,{default:()=>Rt});var di,Ro,Rt,mi=Zt(()=>{di=g(C());pi();Ce();So();Po();Ro=m("react/jsx-runtime"),Rt=class extends di.default.Component{constructor(){super(...arguments);k(this,"onReady",r=>this.props.onReady(r));k(this,"onPlay",r=>this.props.onPlay({...r,hasAudio:ei(this.player)}));k(this,"onBuffer",r=>this.props.onBuffer(r));k(this,"onBufferEnd",r=>this.props.onBufferEnd(r));k(this,"onPause",r=>this.props.onPause(r));k(this,"onEnded",r=>this.props.onEnded(r));k(this,"onError",(r,o,n,i)=>this.props.onError(r,o,n,i));k(this,"onPlayBackRateChange",r=>{this.props.onPlayBackRateChange(r.target.playbackRate)});k(this,"onEnablePIP",r=>this.props.onEnablePIP(r));k(this,"onDisablePIP",r=>{let{onDisablePIP:o,playing:n}=this.props;o&&o(r),n&&this.play()});k(this,"onPresentationModeChange",r=>{if(this.player&&Et(this.player)){let{webkitPresentationMode:o}=this.player;o==="picture-in-picture"?this.onEnablePIP(r):o==="inline"&&this.onDisablePIP(r)}});k(this,"onSeek",r=>{var o;this.props.onSeek((o=r.target)==null?void 0:o.currentTime)});k(this,"mute",()=>{this.player.muted=!0});k(this,"unmute",()=>{this.player.muted=!1});k(this,"renderTrack",(r,o)=>(0,Ro.jsx)("track",{...r},o));k(this,"ref",r=>{this.player&&(this.prevPlayer=this.player),this.player=r})}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);let r=this.getSource(this.props.url);r&&(this.player.src=r),(Eo||this.props.config.forceDisableHls)&&this.player.load()}componentDidUpdate(r){this.removeListeners(this.prevPlayer,r.url),this.addListeners(this.player),this.props.url!==r.url&&je(this.props.url)===!1&&(this.player.srcObject=null)}componentWillUnmount(){this.player.removeAttribute("src"),this.removeListeners(this.player)}addListeners(r){let{url:o,playsinline:n}=this.props;r&&(r.addEventListener("play",this.onPlay),r.addEventListener("waiting",this.onBuffer),r.addEventListener("playing",this.onBufferEnd),r.addEventListener("pause",this.onPause),r.addEventListener("seeked",this.onSeek),r.addEventListener("ended",this.onEnded),r.addEventListener("error",this.onError),r.addEventListener("ratechange",this.onPlayBackRateChange),r.addEventListener("enterpictureinpicture",this.onEnablePIP),r.addEventListener("leavepictureinpicture",this.onDisablePIP),r.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(o)===!1&&r.addEventListener("canplay",this.onReady),n&&(r.setAttribute("playsinline",""),r.setAttribute("webkit-playsinline",""),r.setAttribute("x5-playsinline","")))}removeListeners(r,o){r&&(r.removeEventListener("canplay",this.onReady),r.removeEventListener("play",this.onPlay),r.removeEventListener("waiting",this.onBuffer),r.removeEventListener("playing",this.onBufferEnd),r.removeEventListener("pause",this.onPause),r.removeEventListener("seeked",this.onSeek),r.removeEventListener("ended",this.onEnded),r.removeEventListener("error",this.onError),r.removeEventListener("ratechange",this.onPlayBackRateChange),r.removeEventListener("enterpictureinpicture",this.onEnablePIP),r.removeEventListener("leavepictureinpicture",this.onDisablePIP),r.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(o)||r.removeEventListener("canplay",this.onReady))}shouldUseHLS(r){return ni&&this.props.config.forceSafariHLS||this.props.config.forceHLS?!0:Eo||this.props.config.forceDisableHls?!1:wo.test(r)}shouldUseDASH(r){return xo.test(r)||this.props.config.forceDASH}shouldUseFLV(r){return ko.test(r)||this.props.config.forceFLV}load(r,o){let{hlsVersion:n,hlsOptions:i,dashVersion:s,flvVersion:l}=this.props.config;if(o!==!1){if(this.hls&&this.hls.destroy(),this.dash&&this.dash.reset(),this.flv&&this.flv.unload(),this.shouldUseHLS(r))Tr(ii.replace("VERSION",n),si).then(a=>{this.hls=new a(i),this.hls.on(a.Events.MANIFEST_PARSED,()=>{this.props.onReady()}),this.hls.on(a.Events.ERROR,(c,u)=>{this.props.onError(c,u,this.hls,a)}),this.hls.loadSource(r),this.hls.attachMedia(this.player),this.props.onLoaded()});else if(this.shouldUseDASH(r))Tr(ai.replace("VERSION",s),li).then(a=>{this.dash=a.MediaPlayer().create(),this.dash.initialize(this.player,r,this.props.playing),this.dash.on("error",function(c){this.props.onError(c,null,this.dash,a)}),parseInt(s)<3?this.dash.getDebug().setLogToBrowserConsole(!1):this.dash.updateSettings({debug:{logLevel:a.LogLevel.LOG_LEVEL_NONE}}),this.props.onLoaded()});else if(this.shouldUseFLV(r))Tr(ci.replace("VERSION",l),ui).then(a=>{this.flv=a.createPlayer({type:"flv",url:r}),this.flv.attachMediaElement(this.player),this.flv.on(a.Events.ERROR,(c,u)=>{this.props.onError(c,u,this.flv,a)}),this.flv.load(),this.props.onLoaded()});else if(je(r))try{this.player.srcObject=r}catch{this.player.src=window.URL.createObjectURL(r)}}}getPlayer(){return this.player}play(){let r=this.player.play();r&&r.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.removeAttribute("src"),this.dash&&this.dash.reset()}seekTo(r,o=!0){this.player.currentTime=r,o===!1&&this.pause()}setVolume(r){this.player.volume=r}enablePIP(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player?this.player.requestPictureInPicture():Et(this.player)&&this.player.webkitPresentationMode!=="picture-in-picture"&&this.player.webkitSetPresentationMode("picture-in-picture")}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player?document.exitPictureInPicture():Et(this.player)&&this.player.webkitPresentationMode!=="inline"&&this.player.webkitSetPresentationMode("inline")}setPlaybackRate(r){try{this.player.playbackRate=r}catch(o){this.props.onError(o)}}getDuration(){if(!this.player)return null;let{duration:r,seekable:o}=this.player;return r===1/0&&o.length>0?o.end(o.length-1):r}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;let{buffered:r}=this.player;if(r.length===0)return 0;let o=r.end(r.length-1),n=this.getDuration();return n!==null&&o>n?n:o}getSource(r){if(!(je(r)||this.shouldUseHLS(r)||this.shouldUseDASH(r)||this.shouldUseFLV(r)))return r}render(){var p;let{url:r,playing:o,loop:n,controls:i,muted:s,config:l,width:a,height:c}=this.props,u={width:a==="auto"?a:"100%",height:c==="auto"?c:"100%"};return(0,Ro.jsx)("video",{"data-testid":"video-element",ref:this.ref,src:this.getSource(r),style:u,preload:"auto",autoPlay:o||void 0,controls:i,muted:s,loop:n,...l.attributes,children:(p=l.tracks)==null?void 0:p.map(this.renderTrack)})}};k(Rt,"displayName","PlayerCore"),k(Rt,"canPlay",Jt)});var Si=We((bd,bi)=>{"use strict";var gu=function(t){return bu(t)&&!Su(t)};function bu(e){return!!e&&typeof e=="object"}function Su(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||xu(e)}var vu=typeof Symbol=="function"&&Symbol.for,wu=vu?Symbol.for("react.element"):60103;function xu(e){return e.$$typeof===wu}function ku(e){return Array.isArray(e)?[]:{}}function er(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Tt(ku(e),e,t):e}function Pu(e,t,r){return e.concat(t).map(function(o){return er(o,r)})}function Cu(e,t){if(!t.customMerge)return Tt;var r=t.customMerge(e);return typeof r=="function"?r:Tt}function Eu(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function yi(e){return Object.keys(e).concat(Eu(e))}function gi(e,t){try{return t in e}catch{return!1}}function Ru(e,t){return gi(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function Tu(e,t,r){var o={};return r.isMergeableObject(e)&&yi(e).forEach(function(n){o[n]=er(e[n],r)}),yi(t).forEach(function(n){Ru(e,n)||(gi(e,n)&&r.isMergeableObject(t[n])?o[n]=Cu(n,r)(e[n],t[n],r):o[n]=er(t[n],r))}),o}function Tt(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||Pu,r.isMergeableObject=r.isMergeableObject||gu,r.cloneUnlessOtherwiseSpecified=er;var o=Array.isArray(t),n=Array.isArray(e),i=o===n;return i?o?r.arrayMerge(e,t,r):Tu(e,t,r):er(t,r)}Tt.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(o,n){return Tt(o,n,r)},{})};var Au=Tt;bi.exports=Au});var To=We((vd,wi)=>{var Mu=typeof Element!="undefined",Du=typeof Map=="function",_u=typeof Set=="function",Bu=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Lr(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,o,n;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(o=r;o--!==0;)if(!Lr(e[o],t[o]))return!1;return!0}var i;if(Du&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(o=i.next()).done;)if(!t.has(o.value[0]))return!1;for(i=e.entries();!(o=i.next()).done;)if(!Lr(o.value[1],t.get(o.value[0])))return!1;return!0}if(_u&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(o=i.next()).done;)if(!t.has(o.value[0]))return!1;return!0}if(Bu&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(o=r;o--!==0;)if(e[o]!==t[o])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(n=Object.keys(e),r=n.length,r!==Object.keys(t).length)return!1;for(o=r;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[o]))return!1;if(Mu&&e instanceof Element)return!1;for(o=r;o--!==0;)if(!((n[o]==="_owner"||n[o]==="__v"||n[o]==="__o")&&e.$$typeof)&&!Lr(e[n[o]],t[n[o]]))return!1;return!0}return e!==e&&t!==t}wi.exports=function(t,r){try{return Lr(t,r)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}});var ki=We((wd,xi)=>{"use strict";var Fu="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";xi.exports=Fu});var Ri=We((xd,Ei)=>{"use strict";var Nu=ki();function Pi(){}function Ci(){}Ci.resetWarningCache=Pi;Ei.exports=function(){function e(o,n,i,s,l,a){if(a!==Nu){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ci,resetWarningCache:Pi};return r.PropTypes=r,r}});var j=We((Cd,Ti)=>{Ti.exports=Ri()();var kd,Pd});var zi=We(($d,Hi)=>{Hi.exports=function(t,r,o,n){var i=o?o.call(n,t,r):void 0;if(i!==void 0)return!!i;if(t===r)return!0;if(typeof t!="object"||!t||typeof r!="object"||!r)return!1;var s=Object.keys(t),l=Object.keys(r);if(s.length!==l.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(r),c=0;c<s.length;c++){var u=s[c];if(!a(u))return!1;var p=t[u],f=r[u];if(i=o?o.call(n,p,f,u):void 0,i===!1||i===void 0&&p!==f)return!1}return!0}});var td={};Qn(td,{default:()=>ed});So();Po();var hi={key:"core",name:"PlayerCore",canPlay:Jt,canEnablePIP:e=>Jt(e)&&(document.pictureInPictureEnabled||Et()),lazyPlayer:Jn(()=>Promise.resolve().then(()=>(mi(),fi)))};var Un=g(C()),eu=g(Si());var vi=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Lu(e,t){return!!(e===t||vi(e)&&vi(t))}function Iu(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!Lu(e[r],t[r]))return!1;return!0}function Ou(e,t){t===void 0&&(t=Iu);var r,o=[],n,i=!1;function s(){for(var l=[],a=0;a<arguments.length;a++)l[a]=arguments[a];return i&&r===this&&t(l,o)||(n=e.apply(this,l),i=!0,r=this,o=l),n}return s}var Ar=Ou;var $n=g(To());var Se=g(j());var Ai={exitFullScreenMode:"Salir del modo de pantalla completa (f)",fullScreen:"Pantalla completa",play:"Reproducir",pause:"Pausar",normal:"Normal",settings:"Configuraci\xF3n",speed:"Velocidad",quality:"Calidad",hd:"HD",live:"En vivo",clickToUnmute:"Haga clic para desactivar el silencio",playbackStuckClickResumePlayback:"La reproducci\xF3n est\xE1 bloqueada, haga clic para reanudar la reproducci\xF3n.",mute:"Silenciar (m)",activateSound:"Activar sonido",thisVideoHasNoSound:"Este video no tiene sonido",timeBar:"Barra de tiempo"};var Li={exitFullScreenMode:"Exit full screen mode (f)",fullScreen:"Full screen",play:"Play",pause:"Pause",normal:"Normal",settings:"Settings",speed:"Speed",quality:"Quality",hd:"HD",live:"Live",clickToUnmute:"Click to unmute",playbackStuckClickResumePlayback:"Playback is stuck, click to resume playback.",mute:"Mute (m)",activateSound:"Activate sound",thisVideoHasNoSound:"This video has no sound",timeBar:"Time bar"};var At={en:Li,es:Ai};var{string:Ye,bool:ee,number:tr,array:Vu,oneOfType:Ao,shape:Ii,object:Oi,func:Z}=Se.default,Mi=Object.keys(At),Lo={url:Ye,sources:Se.default.arrayOf(Se.default.shape({src:Se.default.string.isRequired,resolution:Se.default.number.isRequired}).isRequired),fullHDQualityBreak:Se.default.number,spriteVTTFile:Se.default.string,playing:ee,loop:ee,controls:ee,volume:tr,muted:ee,playbackRate:tr,width:Ao([Ye,tr]),height:Ao([Ye,tr]),progressInterval:tr,playsinline:ee,language:Se.default.oneOf(Mi),poster:Ye,pip:ee,stopOnUnmount:ee,fallback:Se.node,waiting:ee,prevented:ee,wrapper:Ao([Ye,Z,Ii({render:Z.isRequired})]),config:Ii({attributes:Oi,tracks:Vu,forceVideo:ee,forceHLS:ee,forceSafariHLS:ee,forceDisableHls:ee,forceDASH:ee,forceFLV:ee,hlsOptions:Oi,hlsVersion:Ye,dashVersion:Ye,flvVersion:Ye}),onReady:Z,onStart:Z,onPlay:Z,onPause:Z,onBuffer:Z,onBufferEnd:Z,onEnded:Z,onError:Z,onDuration:Z,onSeek:Z,onPlayBackRateChange:Z,onPlayBackQualityChange:Z,onProgress:Z,onEnablePIP:Z,onDisablePIP:Z},te=()=>{},Ir={url:"",sources:[],playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,fallback:null,waiting:!1,prevented:!1,wrapper:"div",language:Mi[0],poster:"",config:{attributes:{},tracks:[],forceVideo:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.5.7",dashVersion:"4.7.4",flvVersion:"1.6.2",forceDisableHls:!1},onReady:te,onStart:te,onPlay:te,onPause:te,onBuffer:te,onBufferEnd:te,onEnded:te,onError:te,onDuration:te,onSeek:te,onPlayBackRateChange:te,onPlayBackQualityChange:te,onProgress:te,onEnablePIP:te,onDisablePIP:te};var De=g(C());var Ni=g(C()),Vi=g(To());var Or=g(j()),{string:Lt,bool:ue,number:rr,array:qu,oneOfType:Di,shape:Hu,object:_i,func:re}=Or.default,Bi={url:Lt,fullHDQualityBreak:Or.default.number,spriteVTTFile:Or.default.string,playing:ue,loop:ue,controls:ue,volume:rr,muted:ue,playbackRate:rr,width:Di([Lt,rr]),height:Di([Lt,rr]),progressInterval:rr,playsinline:ue,pip:ue,stopOnUnmount:ue,config:Hu({attributes:_i,tracks:qu,forceVideo:ue,forceHLS:ue,forceSafariHLS:ue,forceDisableHls:ue,forceDASH:ue,forceFLV:ue,hlsOptions:_i,hlsVersion:Lt,dashVersion:Lt,flvVersion:Lt}),onReady:re,onStart:re,onPlay:re,onPause:re,onBuffer:re,onBufferEnd:re,onEnded:re,onError:re,onDuration:re,onSeek:re,onPlayBackRateChange:re,onPlayBackQualityChange:re,onProgress:re,onEnablePIP:re,onDisablePIP:re},oe=()=>{},Fi={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,config:{attributes:{},tracks:[],forceVideo:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.5.7",dashVersion:"4.7.4",flvVersion:"1.6.2",forceDisableHls:!1},onReady:oe,onStart:oe,onPlay:oe,onPause:oe,onBuffer:oe,onBufferEnd:oe,onEnded:oe,onError:oe,onDuration:oe,onSeek:oe,onPlayBackRateChange:oe,onPlayBackQualityChange:oe,onProgress:oe,onEnablePIP:oe,onDisablePIP:oe};Ce();var qi=m("react/jsx-runtime"),zu=5e3,Ee=class extends Ni.default.Component{constructor(){super(...arguments);k(this,"progressTimeout",0);k(this,"durationCheckTimeout",0);k(this,"prevPlayed",0);k(this,"prevLoaded",0);k(this,"player",null);k(this,"loadOnReady",null);k(this,"seekOnPlay",null);k(this,"mounted",!1);k(this,"isReady",!1);k(this,"isPlaying",!1);k(this,"isLoading",!0);k(this,"startOnPlay",!0);k(this,"onDurationCalled",!1);k(this,"handlePlayerMount",r=>{this.player=r,this.player.load(this.props.url),this.progress()});k(this,"getInternalPlayer",r=>this.player?this.player[r]:null);k(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){let r=this.getCurrentTime()||0,o=this.getSecondsLoaded(),n=this.getDuration();if(n){let i={playedSeconds:r,played:r/n,loadedSeconds:null};o!==null&&(i.loadedSeconds=o,i.loaded=o/n),(i.playedSeconds!==this.prevPlayed||i.loadedSeconds!==this.prevLoaded)&&this.props.onProgress({loaded:i.loaded,loadedSeconds:i.loadedSeconds,played:i.played,playedSeconds:i.playedSeconds}),this.prevPlayed=i.playedSeconds,i.loadedSeconds!==void 0&&(this.prevLoaded=i.loadedSeconds)}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)});k(this,"handleReady",()=>{if(this.mounted===!1)return;this.isReady=!0,this.isLoading=!1;let{onReady:r,playing:o,volume:n,muted:i}=this.props;r&&r(),!i&&n!==null&&this.player.setVolume(n),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):o&&this.player.play(),this.handleDurationCheck()});k(this,"handlePlay",r=>{this.isPlaying=!0,this.isLoading=!1;let{onStart:o,onPlay:n,playbackRate:i}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&i!==1&&this.player.setPlaybackRate(i),o&&o(),this.startOnPlay=!1),n&&n(r),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()});k(this,"handlePause",r=>{this.isPlaying=!1,!this.isLoading&&this.props.onPause&&this.props.onPause(r)});k(this,"handleEnded",()=>{let{activePlayer:r,loop:o,onEnded:n}=this.props;r.defaultProps!==void 0&&r.defaultProps.config!==void 0&&r.defaultProps.config.loopOnEnded&&o===!0&&this.seekTo(0),o===!1&&(this.isPlaying=!1,n&&n())});k(this,"handleError",(r,o,n,i)=>{this.isLoading=!1,this.props.onError&&this.props.onError(r,o,n,i)});k(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);let r=this.getDuration();r?!this.onDurationCalled&&this.props.onDuration&&(this.props.onDuration(r),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)});k(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(r){if(!this.player)return;let{url:o,playing:n,volume:i,muted:s,playbackRate:l,playbackQuality:a,pip:c,activePlayer:u,disableDeferredLoading:p}=this.props;if((0,Vi.default)(r.url,o)===!1){if(this.isLoading&&!(u!=null&&u.forceLoad)&&!p&&!je(o)){console.warn(`ReactJSMediaPlayer: the attempt to load ${o} is being deferred until the player has loaded`),this.loadOnReady=o;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(o,this.isReady),r.playbackQuality!==a&&this.player.seekTo(this.prevPlayed)}r.playing===!1&&n&&this.isPlaying===!1&&this.player.play(),r.playing&&n===!1&&this.isPlaying&&this.player.pause(),r.pip===!1&&c&&this.player.enablePIP&&this.player.enablePIP(),r.pip&&c===!1&&this.player.disablePIP&&this.player.disablePIP(),r.volume!==i&&i!==null&&this.player.setVolume(i),r.muted!==s&&(s?this.player.mute():(this.player.unmute(),i!==null&&setTimeout(()=>this.player.setVolume(i)))),r.playbackRate!==l&&this.player.setPlaybackRate&&this.player.setPlaybackRate(l)}getDuration(){return this.isReady===!1?null:this.player.getDuration()}getCurrentTime(){return this.isReady===!1?null:this.player.getCurrentTime()}getSecondsLoaded(){return this.isReady===!1?null:this.player.getSecondsLoaded()}getPlayer(){return this.player.getPlayer()}seekTo(r,o,n){if(this.isReady===!1){r!==0&&(this.seekOnPlay=r,setTimeout(()=>{this.seekOnPlay=null},zu));return}if(o?o==="fraction":r>0&&r<1){let s=this.player.getDuration();if(!s){console.warn("ReactJSMediaPlayer: could not seek using fraction \u2013\xA0duration not yet available");return}this.player.seekTo(s*r,n);return}this.player.seekTo(r,n)}render(){let r=this.props.activePlayer;return r?(0,qi.jsx)(r,{controls:this.props.controls,loop:this.props.loop,muted:this.props.muted,playsinline:this.props.playsinline,url:this.props.url,width:this.props.width,height:this.props.height,playing:this.props.playing,config:this.props.config,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError,onBuffer:this.props.onBuffer,onBufferEnd:this.props.onBufferEnd,onDisablePIP:this.props.onDisablePIP,onEnablePIP:this.props.onEnablePIP,onPlayBackRateChange:this.props.onPlayBackRateChange,onSeek:this.props.onSeek}):null}};k(Ee,"displayName","PlayerProxy"),k(Ee,"propTypes",Bi),k(Ee,"defaultProps",Fi);var Hn=g(C()),F=g(j());var Qe=g(C()),L=g(j());var pt=g(C()),ut=g(j());var K=function(){return K=Object.assign||function(t){for(var r,o=1,n=arguments.length;o<n;o++){r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},K.apply(this,arguments)};function It(e,t,r){if(r||arguments.length===2)for(var o=0,n=t.length,i;o<n;o++)(i||!(o in t))&&(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o]);return e.concat(i||Array.prototype.slice.call(t))}var H=g(C()),vs=g(zi());var q="-ms-",nt="-moz-",V="-webkit-",Mr="comm",Ge="rule",Ot="decl";var $i="@import";var Dr="@keyframes";var Ui="@layer";var Io=Math.abs,or=String.fromCharCode,nr=Object.assign;function Qi(e,t){return W(e,0)^45?(((t<<2^W(e,0))<<2^W(e,1))<<2^W(e,2))<<2^W(e,3):0}function _r(e){return e.trim()}function ve(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,r){return e.replace(t,r)}function Mt(e,t,r){return e.indexOf(t,r)}function W(e,t){return e.charCodeAt(t)|0}function Re(e,t,r){return e.slice(t,r)}function ne(e){return e.length}function Br(e){return e.length}function it(e,t){return t.push(e),e}function Wi(e,t){return e.map(t).join("")}function Oo(e,t){return e.filter(function(r){return!ve(r,t)})}var Fr=1,Dt=1,ji=0,fe=0,Y=0,_t="";function ir(e,t,r,o,n,i,s,l){return{value:e,root:t,parent:r,type:o,props:n,children:i,line:Fr,column:Dt,length:s,return:"",siblings:l}}function Ne(e,t){return nr(ir("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function st(e){for(;e.root;)e=Ne(e.root,{children:[e]});it(e,e.siblings)}function Yi(){return Y}function Gi(){return Y=fe>0?W(_t,--fe):0,Dt--,Y===10&&(Dt=1,Fr--),Y}function me(){return Y=fe<ji?W(_t,fe++):0,Dt++,Y===10&&(Dt=1,Fr++),Y}function Ke(){return W(_t,fe)}function sr(){return fe}function Nr(e,t){return Re(_t,e,t)}function Mo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ki(e){return Fr=Dt=1,ji=ne(_t=e),fe=0,[]}function Xi(e){return _t="",e}function Vr(e){return _r(Nr(fe-1,Do(e===91?e+2:e===40?e+1:e)))}function Zi(e){for(;(Y=Ke())&&Y<33;)me();return Mo(e)>2||Mo(Y)>3?"":" "}function Ji(e,t){for(;--t&&me()&&!(Y<48||Y>102||Y>57&&Y<65||Y>70&&Y<97););return Nr(e,sr()+(t<6&&Ke()==32&&me()==32))}function Do(e){for(;me();)switch(Y){case e:return fe;case 34:case 39:e!==34&&e!==39&&Do(Y);break;case 40:e===41&&Do(e);break;case 92:me();break}return fe}function es(e,t){for(;me()&&e+Y!==57;)if(e+Y===84&&Ke()===47)break;return"/*"+Nr(t,fe-1)+"*"+or(e===47?e:me())}function ts(e){for(;!Mo(Ke());)me();return Nr(e,fe)}function ns(e){return Xi(qr("",null,null,null,[""],e=Ki(e),0,[0],e))}function qr(e,t,r,o,n,i,s,l,a){for(var c=0,u=0,p=s,f=0,h=0,w=0,y=1,T=1,b=1,v=0,R="",E=n,O=i,A=o,d=R;T;)switch(w=v,v=me()){case 40:if(w!=108&&W(d,p-1)==58){Mt(d+=D(Vr(v),"&","&\f"),"&\f",Io(c?l[c-1]:0))!=-1&&(b=-1);break}case 34:case 39:case 91:d+=Vr(v);break;case 9:case 10:case 13:case 32:d+=Zi(w);break;case 92:d+=Ji(sr()-1,7);continue;case 47:switch(Ke()){case 42:case 47:it($u(es(me(),sr()),t,r,a),a);break;default:d+="/"}break;case 123*y:l[c++]=ne(d)*b;case 125*y:case 59:case 0:switch(v){case 0:case 125:T=0;case 59+u:b==-1&&(d=D(d,/\f/g,"")),h>0&&ne(d)-p&&it(h>32?os(d+";",o,r,p-1,a):os(D(d," ","")+";",o,r,p-2,a),a);break;case 59:d+=";";default:if(it(A=rs(d,t,r,c,u,n,l,R,E=[],O=[],p,i),i),v===123)if(u===0)qr(d,t,A,A,E,i,p,l,O);else switch(f===99&&W(d,3)===110?100:f){case 100:case 108:case 109:case 115:qr(e,A,A,o&&it(rs(e,A,A,0,0,n,l,R,n,E=[],p,O),O),n,O,p,l,o?E:O);break;default:qr(d,A,A,A,[""],O,0,l,O)}}c=u=h=0,y=b=1,R=d="",p=s;break;case 58:p=1+ne(d),h=w;default:if(y<1){if(v==123)--y;else if(v==125&&y++==0&&Gi()==125)continue}switch(d+=or(v),v*y){case 38:b=u>0?1:(d+="\f",-1);break;case 44:l[c++]=(ne(d)-1)*b,b=1;break;case 64:Ke()===45&&(d+=Vr(me())),f=Ke(),u=p=ne(R=d+=ts(sr())),v++;break;case 45:w===45&&ne(d)==2&&(y=0)}}return i}function rs(e,t,r,o,n,i,s,l,a,c,u,p){for(var f=n-1,h=n===0?i:[""],w=Br(h),y=0,T=0,b=0;y<o;++y)for(var v=0,R=Re(e,f+1,f=Io(T=s[y])),E=e;v<w;++v)(E=_r(T>0?h[v]+" "+R:D(R,/&\f/g,h[v])))&&(a[b++]=E);return ir(e,t,r,n===0?Ge:l,a,c,u,p)}function $u(e,t,r,o){return ir(e,t,r,Mr,or(Yi()),Re(e,2,-2),0,o)}function os(e,t,r,o,n){return ir(e,t,r,Ot,Re(e,0,o),Re(e,o+1,-1),o,n)}function _o(e,t,r){switch(Qi(e,t)){case 5103:return V+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return V+e+e;case 4789:return nt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return V+e+nt+e+q+e+e;case 5936:switch(W(e,t+11)){case 114:return V+e+q+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return V+e+q+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return V+e+q+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return V+e+q+e+e;case 6165:return V+e+q+"flex-"+e+e;case 5187:return V+e+D(e,/(\w+).+(:[^]+)/,V+"box-$1$2"+q+"flex-$1$2")+e;case 5443:return V+e+q+"flex-item-"+D(e,/flex-|-self/g,"")+(ve(e,/flex-|baseline/)?"":q+"grid-row-"+D(e,/flex-|-self/g,""))+e;case 4675:return V+e+q+"flex-line-pack"+D(e,/align-content|flex-|-self/g,"")+e;case 5548:return V+e+q+D(e,"shrink","negative")+e;case 5292:return V+e+q+D(e,"basis","preferred-size")+e;case 6060:return V+"box-"+D(e,"-grow","")+V+e+q+D(e,"grow","positive")+e;case 4554:return V+D(e,/([^-])(transform)/g,"$1"+V+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,V+"$1"),/(image-set)/,V+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,V+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,V+"box-pack:$3"+q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+V+e+e;case 4200:if(!ve(e,/flex-|baseline/))return q+"grid-column-align"+Re(e,t)+e;break;case 2592:case 3360:return q+D(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(o,n){return t=n,ve(o.props,/grid-\w+-end/)})?~Mt(e+(r=r[t].value),"span",0)?e:q+D(e,"-start","")+e+q+"grid-row-span:"+(~Mt(r,"span",0)?ve(r,/\d+/):+ve(r,/\d+/)-+ve(e,/\d+/))+";":q+D(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(o){return ve(o.props,/grid-\w+-start/)})?e:q+D(D(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,V+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ne(e)-1-t>6)switch(W(e,t+1)){case 109:if(W(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+V+"$2-$3$1"+nt+(W(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Mt(e,"stretch",0)?_o(D(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return D(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,n,i,s,l,a,c){return q+n+":"+i+c+(s?q+n+"-span:"+(l?a:+a-+i)+c:"")+e});case 4949:if(W(e,t+6)===121)return D(e,":",":"+V)+e;break;case 6444:switch(W(e,W(e,14)===45?18:11)){case 120:return D(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+V+(W(e,14)===45?"inline-":"")+"box$3$1"+V+"$2$3$1"+q+"$2box$3")+e;case 100:return D(e,":",":"+q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return D(e,"scroll-","scroll-snap-")+e}return e}function Bt(e,t){for(var r="",o=0;o<e.length;o++)r+=t(e[o],o,e,t)||"";return r}function is(e,t,r,o){switch(e.type){case Ui:if(e.children.length)break;case $i:case Ot:return e.return=e.return||e.value;case Mr:return"";case Dr:return e.return=e.value+"{"+Bt(e.children,o)+"}";case Ge:if(!ne(e.value=e.props.join(",")))return""}return ne(r=Bt(e.children,o))?e.return=e.value+"{"+r+"}":""}function ss(e){var t=Br(e);return function(r,o,n,i){for(var s="",l=0;l<t;l++)s+=e[l](r,o,n,i)||"";return s}}function as(e){return function(t){t.root||(t=t.return)&&e(t)}}function ls(e,t,r,o){if(e.length>-1&&!e.return)switch(e.type){case Ot:e.return=_o(e.value,e.length,r);return;case Dr:return Bt([Ne(e,{value:D(e.value,"@","@"+V)})],o);case Ge:if(e.length)return Wi(r=e.props,function(n){switch(ve(n,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":st(Ne(e,{props:[D(n,/:(read-\w+)/,":"+nt+"$1")]})),st(Ne(e,{props:[n]})),nr(e,{props:Oo(r,o)});break;case"::placeholder":st(Ne(e,{props:[D(n,/:(plac\w+)/,":"+V+"input-$1")]})),st(Ne(e,{props:[D(n,/:(plac\w+)/,":"+nt+"$1")]})),st(Ne(e,{props:[D(n,/:(plac\w+)/,q+"input-$1")]})),st(Ne(e,{props:[n]})),nr(e,{props:Oo(r,o)});break}return""})}}var cs={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var qe=typeof process!="undefined"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",ws="active",Qr="data-styled-version",Nt="6.1.14",Uo=`/*!sc*/
`,Wr=typeof window!="undefined"&&"HTMLElement"in window,Uu=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""&&process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY),Qu={};var Kr=Object.freeze([]),Vt=Object.freeze({});function xs(e,t,r){return r===void 0&&(r=Vt),e.theme!==r.theme&&e.theme||t||r.theme}var ks=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Wu=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ju=/(^-|-$)/g;function us(e){return e.replace(Wu,"-").replace(ju,"")}var Yu=/(a)(d)/gi,Hr=52,ps=function(e){return String.fromCharCode(e+(e>25?39:97))};function Vo(e){var t,r="";for(t=Math.abs(e);t>Hr;t=t/Hr|0)r=ps(t%Hr)+r;return(ps(t%Hr)+r).replace(Yu,"$1-$2")}var Bo,Ps=5381,Ft=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Cs=function(e){return Ft(Ps,e)};function Es(e){return Vo(Cs(e)>>>0)}function Gu(e){return e.displayName||e.name||"Component"}function Fo(e){return typeof e=="string"&&!0}var Rs=typeof Symbol=="function"&&Symbol.for,Ts=Rs?Symbol.for("react.memo"):60115,Ku=Rs?Symbol.for("react.forward_ref"):60112,Xu={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Zu={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},As={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ju=((Bo={})[Ku]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Bo[Ts]=As,Bo);function ds(e){return("type"in(t=e)&&t.type.$$typeof)===Ts?As:"$$typeof"in e?Ju[e.$$typeof]:Xu;var t}var ep=Object.defineProperty,tp=Object.getOwnPropertyNames,fs=Object.getOwnPropertySymbols,rp=Object.getOwnPropertyDescriptor,op=Object.getPrototypeOf,ms=Object.prototype;function Ls(e,t,r){if(typeof t!="string"){if(ms){var o=op(t);o&&o!==ms&&Ls(e,o,r)}var n=tp(t);fs&&(n=n.concat(fs(t)));for(var i=ds(e),s=ds(t),l=0;l<n.length;++l){var a=n[l];if(!(a in Zu||r&&r[a]||s&&a in s||i&&a in i)){var c=rp(t,a);try{ep(e,a,c)}catch{}}}}return e}function qt(e){return typeof e=="function"}function Qo(e){return typeof e=="object"&&"styledComponentId"in e}function at(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function jr(e,t){if(e.length===0)return"";for(var r=e[0],o=1;o<e.length;o++)r+=t?t+e[o]:e[o];return r}function ar(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function qo(e,t,r){if(r===void 0&&(r=!1),!r&&!ar(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var o=0;o<t.length;o++)e[o]=qo(e[o],t[o]);else if(ar(t))for(var o in t)e[o]=qo(e[o],t[o]);return e}function Wo(e,t){Object.defineProperty(e,"toString",{value:t})}function Ve(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var np=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,o=0;o<t;o++)r+=this.groupSizes[o];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var o=this.groupSizes,n=o.length,i=n;t>=i;)if((i<<=1)<0)throw Ve(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(var s=n;s<i;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),a=(s=0,r.length);s<a;s++)this.tag.insertRule(l,r[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],o=this.indexOfGroup(t),n=o+r;this.groupSizes[t]=0;for(var i=o;i<n;i++)this.tag.deleteRule(o)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var o=this.groupSizes[t],n=this.indexOfGroup(t),i=n+o,s=n;s<i;s++)r+="".concat(this.tag.getRule(s)).concat(Uo);return r},e}(),vf=1<<30,$r=new Map,Yr=new Map,Ur=1,zr=function(e){if($r.has(e))return $r.get(e);for(;Yr.has(Ur);)Ur++;var t=Ur++;return $r.set(e,t),Yr.set(t,e),t},ip=function(e,t){Ur=t+1,$r.set(e,t),Yr.set(t,e)},sp="style[".concat(qe,"][").concat(Qr,'="').concat(Nt,'"]'),ap=new RegExp("^".concat(qe,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),lp=function(e,t,r){for(var o,n=r.split(","),i=0,s=n.length;i<s;i++)(o=n[i])&&e.registerName(t,o)},cp=function(e,t){for(var r,o=((r=t.textContent)!==null&&r!==void 0?r:"").split(Uo),n=[],i=0,s=o.length;i<s;i++){var l=o[i].trim();if(l){var a=l.match(ap);if(a){var c=0|parseInt(a[1],10),u=a[2];c!==0&&(ip(u,c),lp(e,u,a[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(l)}}},hs=function(e){for(var t=document.querySelectorAll(sp),r=0,o=t.length;r<o;r++){var n=t[r];n&&n.getAttribute(qe)!==ws&&(cp(e,n),n.parentNode&&n.parentNode.removeChild(n))}};function Ho(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Is=function(e){var t=document.head,r=e||t,o=document.createElement("style"),n=function(l){var a=Array.from(l.querySelectorAll("style[".concat(qe,"]")));return a[a.length-1]}(r),i=n!==void 0?n.nextSibling:null;o.setAttribute(qe,ws),o.setAttribute(Qr,Nt);var s=Ho();return s&&o.setAttribute("nonce",s),r.insertBefore(o,i),o},up=function(){function e(t){this.element=Is(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var o=document.styleSheets,n=0,i=o.length;n<i;n++){var s=o[n];if(s.ownerNode===r)return s}throw Ve(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),pp=function(){function e(t){this.element=Is(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var o=document.createTextNode(r);return this.element.insertBefore(o,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),dp=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ys=Wr,fp={isServer:!Wr,useCSSOMInjection:!Uu},lr=function(){function e(t,r,o){t===void 0&&(t=Vt),r===void 0&&(r={});var n=this;this.options=K(K({},fp),t),this.gs=r,this.names=new Map(o),this.server=!!t.isServer,!this.server&&Wr&&ys&&(ys=!1,hs(this)),Wo(this,function(){return function(i){for(var s=i.getTag(),l=s.length,a="",c=function(p){var f=function(b){return Yr.get(b)}(p);if(f===void 0)return"continue";var h=i.names.get(f),w=s.getGroup(p);if(h===void 0||!h.size||w.length===0)return"continue";var y="".concat(qe,".g").concat(p,'[id="').concat(f,'"]'),T="";h!==void 0&&h.forEach(function(b){b.length>0&&(T+="".concat(b,","))}),a+="".concat(w).concat(y,'{content:"').concat(T,'"}').concat(Uo)},u=0;u<l;u++)c(u);return a}(n)})}return e.registerId=function(t){return zr(t)},e.prototype.rehydrate=function(){!this.server&&Wr&&hs(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(K(K({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var o=r.useCSSOMInjection,n=r.target;return r.isServer?new dp(n):o?new up(n):new pp(n)}(this.options),new np(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(zr(t),this.names.has(t))this.names.get(t).add(r);else{var o=new Set;o.add(r),this.names.set(t,o)}},e.prototype.insertRules=function(t,r,o){this.registerName(t,r),this.getTag().insertRules(zr(t),o)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(zr(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),mp=/&/g,hp=/^\s*\/\/.*$/gm;function Os(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(o){return"".concat(t," ").concat(o)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Os(r.children,t)),r})}function Ms(e){var t,r,o,n=e===void 0?Vt:e,i=n.options,s=i===void 0?Vt:i,l=n.plugins,a=l===void 0?Kr:l,c=function(f,h,w){return w.startsWith(r)&&w.endsWith(r)&&w.replaceAll(r,"").length>0?".".concat(t):f},u=a.slice();u.push(function(f){f.type===Ge&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(mp,r).replace(o,c))}),s.prefix&&u.push(ls),u.push(is);var p=function(f,h,w,y){h===void 0&&(h=""),w===void 0&&(w=""),y===void 0&&(y="&"),t=y,r=h,o=new RegExp("\\".concat(r,"\\b"),"g");var T=f.replace(hp,""),b=ns(w||h?"".concat(w," ").concat(h," { ").concat(T," }"):T);s.namespace&&(b=Os(b,s.namespace));var v=[];return Bt(b,ss(u.concat(as(function(R){return v.push(R)})))),v};return p.hash=a.length?a.reduce(function(f,h){return h.name||Ve(15),Ft(f,h.name)},Ps).toString():"",p}var yp=new lr,zo=Ms(),jo=H.default.createContext({shouldForwardProp:void 0,styleSheet:yp,stylis:zo}),wf=jo.Consumer,gp=H.default.createContext(void 0);function Gr(){return(0,H.useContext)(jo)}function bp(e){var t=(0,H.useState)(e.stylisPlugins),r=t[0],o=t[1],n=Gr().styleSheet,i=(0,H.useMemo)(function(){var a=n;return e.sheet?a=e.sheet:e.target&&(a=a.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(a=a.reconstructWithOptions({useCSSOMInjection:!1})),a},[e.disableCSSOMInjection,e.sheet,e.target,n]),s=(0,H.useMemo)(function(){return Ms({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,H.useEffect)(function(){(0,vs.default)(r,e.stylisPlugins)||o(e.stylisPlugins)},[e.stylisPlugins]);var l=(0,H.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:s}},[e.shouldForwardProp,i,s]);return H.default.createElement(jo.Provider,{value:l},H.default.createElement(gp.Provider,{value:s},e.children))}var Sp=function(){function e(t,r){var o=this;this.inject=function(n,i){i===void 0&&(i=zo);var s=o.name+i.hash;n.hasNameForId(o.id,s)||n.insertRules(o.id,s,i(o.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Wo(this,function(){throw Ve(12,String(o.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=zo),this.name+t.hash},e}(),vp=function(e){return e>="A"&&e<="Z"};function gs(e){for(var t="",r=0;r<e.length;r++){var o=e[r];if(r===1&&o==="-"&&e[0]==="-")return e;vp(o)?t+="-"+o.toLowerCase():t+=o}return t.startsWith("ms-")?"-"+t:t}var Ds=function(e){return e==null||e===!1||e===""},_s=function(e){var t,r,o=[];for(var n in e){var i=e[n];e.hasOwnProperty(n)&&!Ds(i)&&(Array.isArray(i)&&i.isCss||qt(i)?o.push("".concat(gs(n),":"),i,";"):ar(i)?o.push.apply(o,It(It(["".concat(n," {")],_s(i),!1),["}"],!1)):o.push("".concat(gs(n),": ").concat((t=n,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in cs||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return o};function Xe(e,t,r,o){if(Ds(e))return[];if(Qo(e))return[".".concat(e.styledComponentId)];if(qt(e)){if(!qt(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var n=e(t);return Xe(n,t,r,o)}var i;return e instanceof Sp?r?(e.inject(r,o),[e.getName(o)]):[e]:ar(e)?_s(e):Array.isArray(e)?Array.prototype.concat.apply(Kr,e.map(function(s){return Xe(s,t,r,o)})):[e.toString()]}function Bs(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(qt(r)&&!Qo(r))return!1}return!0}var wp=Cs(Nt),xp=function(){function e(t,r,o){this.rules=t,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&Bs(t),this.componentId=r,this.baseHash=Ft(wp,r),this.baseStyle=o,lr.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,o){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))n=at(n,this.staticRulesId);else{var i=jr(Xe(this.rules,t,r,o)),s=Vo(Ft(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,s)){var l=o(i,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,l)}n=at(n,s),this.staticRulesId=s}else{for(var a=Ft(this.baseHash,o.hash),c="",u=0;u<this.rules.length;u++){var p=this.rules[u];if(typeof p=="string")c+=p;else if(p){var f=jr(Xe(p,t,r,o));a=Ft(a,f+u),c+=f}}if(c){var h=Vo(a>>>0);r.hasNameForId(this.componentId,h)||r.insertRules(this.componentId,h,o(c,".".concat(h),void 0,this.componentId)),n=at(n,h)}}return n},e}(),Yo=H.default.createContext(void 0),xf=Yo.Consumer;var No={};function kp(e,t,r){var o=Qo(e),n=e,i=!Fo(e),s=t.attrs,l=s===void 0?Kr:s,a=t.componentId,c=a===void 0?function(E,O){var A=typeof E!="string"?"sc":us(E);No[A]=(No[A]||0)+1;var d="".concat(A,"-").concat(Es(Nt+A+No[A]));return O?"".concat(O,"-").concat(d):d}(t.displayName,t.parentComponentId):a,u=t.displayName,p=u===void 0?function(E){return Fo(E)?"styled.".concat(E):"Styled(".concat(Gu(E),")")}(e):u,f=t.displayName&&t.componentId?"".concat(us(t.displayName),"-").concat(t.componentId):t.componentId||c,h=o&&n.attrs?n.attrs.concat(l).filter(Boolean):l,w=t.shouldForwardProp;if(o&&n.shouldForwardProp){var y=n.shouldForwardProp;if(t.shouldForwardProp){var T=t.shouldForwardProp;w=function(E,O){return y(E,O)&&T(E,O)}}else w=y}var b=new xp(r,f,o?n.componentStyle:void 0);function v(E,O){return function(A,d,M){var B=A.attrs,x=A.componentStyle,_=A.defaultProps,P=A.foldedComponentIds,I=A.styledComponentId,X=A.target,ye=H.default.useContext(Yo),St=Gr(),le=A.shouldForwardProp||St.shouldForwardProp,pe=xs(d,ye,_)||Vt,ce=function(wt,rt,xt){for(var _e,ge=K(K({},rt),{className:void 0,theme:xt}),kt=0;kt<wt.length;kt+=1){var be=qt(_e=wt[kt])?_e(ge):_e;for(var de in be)ge[de]=de==="className"?at(ge[de],be[de]):de==="style"?K(K({},ge[de]),be[de]):be[de]}return rt.className&&(ge.className=at(ge.className,rt.className)),ge}(B,d,pe),vt=ce.as||X,et={};for(var Pe in ce)ce[Pe]===void 0||Pe[0]==="$"||Pe==="as"||Pe==="theme"&&ce.theme===pe||(Pe==="forwardedAs"?et.as=ce.forwardedAs:le&&!le(Pe,vt)||(et[Pe]=ce[Pe]));var Rr=function(wt,rt){var xt=Gr(),_e=wt.generateAndInjectStyles(rt,xt.styleSheet,xt.stylis);return _e}(x,ce),tt=at(P,I);return Rr&&(tt+=" "+Rr),ce.className&&(tt+=" "+ce.className),et[Fo(vt)&&!ks.has(vt)?"class":"className"]=tt,M&&(et.ref=M),(0,H.createElement)(vt,et)}(R,E,O)}v.displayName=p;var R=H.default.forwardRef(v);return R.attrs=h,R.componentStyle=b,R.displayName=p,R.shouldForwardProp=w,R.foldedComponentIds=o?at(n.foldedComponentIds,n.styledComponentId):"",R.styledComponentId=f,R.target=o?n.target:e,Object.defineProperty(R,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=o?function(O){for(var A=[],d=1;d<arguments.length;d++)A[d-1]=arguments[d];for(var M=0,B=A;M<B.length;M++)qo(O,B[M],!0);return O}({},n.defaultProps,E):E}}),Wo(R,function(){return".".concat(R.styledComponentId)}),i&&Ls(R,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),R}function bs(e,t){for(var r=[e[0]],o=0,n=t.length;o<n;o+=1)r.push(t[o],e[o+1]);return r}var Ss=function(e){return Object.assign(e,{isCss:!0})};function ie(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(qt(e)||ar(e))return Ss(Xe(bs(Kr,It([e],t,!0))));var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?Xe(o):Ss(Xe(bs(o,t)))}function $o(e,t,r){if(r===void 0&&(r=Vt),!t)throw Ve(1,t);var o=function(n){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,r,ie.apply(void 0,It([n],i,!1)))};return o.attrs=function(n){return $o(e,t,K(K({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},o.withConfig=function(n){return $o(e,t,K(K({},r),n))},o}var Fs=function(e){return $o(kp,e)},S=Fs;ks.forEach(function(e){S[e]=Fs(e)});var Pp=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Bs(t),lr.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,o,n){var i=n(jr(Xe(this.rules,r,o,n)),""),s=this.componentId+t;o.insertRules(s,s,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,o,n){t>2&&lr.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,r,o,n)},e}();function Ns(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var o=ie.apply(void 0,It([e],t,!1)),n="sc-global-".concat(Es(JSON.stringify(o))),i=new Pp(o,n),s=function(a){var c=Gr(),u=H.default.useContext(Yo),p=H.default.useRef(c.styleSheet.allocateGSInstance(n)).current;return c.styleSheet.server&&l(p,a,c.styleSheet,u,c.stylis),H.default.useLayoutEffect(function(){if(!c.styleSheet.server)return l(p,a,c.styleSheet,u,c.stylis),function(){return i.removeStyles(p,c.styleSheet)}},[p,a,c.styleSheet,u,c.stylis]),null};function l(a,c,u,p,f){if(i.isStatic)i.renderStyles(a,Qu,u,f);else{var h=K(K({},c),{theme:xs(c,p,s.defaultProps)});i.renderStyles(a,h,u,f)}}return H.default.memo(s)}var kf=function(){function e(){var t=this;this._emitSheetCSS=function(){var r=t.instance.toString();if(!r)return"";var o=Ho(),n=jr([o&&'nonce="'.concat(o,'"'),"".concat(qe,'="true"'),"".concat(Qr,'="').concat(Nt,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(r,"</style>")},this.getStyleTags=function(){if(t.sealed)throw Ve(2);return t._emitSheetCSS()},this.getStyleElement=function(){var r;if(t.sealed)throw Ve(2);var o=t.instance.toString();if(!o)return[];var n=((r={})[qe]="",r[Qr]=Nt,r.dangerouslySetInnerHTML={__html:o},r),i=Ho();return i&&(n.nonce=i),[H.default.createElement("style",K({},n,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new lr({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(t){if(this.sealed)throw Ve(2);return H.default.createElement(bp,{sheet:this.instance},t)},e.prototype.interleaveWithNodeStream=function(t){throw Ve(3)},e}();var Pf="__sc-".concat(qe,"__");var Vs=g(C());var lt=g(j()),z={width:lt.default.oneOfType([lt.default.number,lt.default.string]),height:lt.default.oneOfType([lt.default.number,lt.default.string])},$=(e,t)=>e.width===t.width&&e.height===t.height;var ct=m("react/jsx-runtime"),Go=({width:e=36,height:t=36})=>(0,ct.jsxs)("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",children:[(0,ct.jsx)("path",{d:"M 22.5 18 C 22.5 16.235 21.48 14.71 20 13.975 L 20 16.185 L 22.455 18.64 C 22.485 18.43 22.5 18.215 22.5 18 Z"}),(0,ct.jsx)("path",{d:"M 25 18 C 25 18.94 24.795 19.825 24.46 20.64 L 25.975 22.155 C 26.625 20.91 27 19.5 27 18 C 27 13.72 24.005 10.14 20 9.23 L 20 11.295 C 22.89 12.155 25 14.83 25 18 Z"}),(0,ct.jsx)("polygon",{points:"18 10 15.91 12.09 18 14.18"}),(0,ct.jsx)("path",{d:"M 10.275 9 L 9 10.275 L 13.725 15 L 9 15 L 9 21 L 13 21 L 18 26 L 18 19.275 L 22.255 23.53 C 21.585 24.045 20.83 24.46 20 24.71 L 20 26.775 C 21.375 26.46 22.63 25.83 23.685 24.965 L 25.725 27 L 27 25.725 L 18 16.725 L 10.275 9 Z"})]});Go.displayName="MutedIcon";Go.propTypes=z;var Xr=Vs.default.memo(Go,$);var qs=g(C());var Ko=m("react/jsx-runtime"),Xo=({width:e=36,height:t=36})=>(0,Ko.jsx)("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor",children:(0,Ko.jsx)("path",{d:"M 23.804 18.319 L 12.478 25.924 C 12.347 26.014 12.235 26.024 12.141 25.955 C 12.047 25.886 12 25.763 12 25.584 L 12 10.416 C 12 10.237 12.047 10.113 12.141 10.045 C 12.235 9.976 12.347 9.986 12.478 10.076 L 23.804 17.68 C 23.935 17.77 24 17.876 24 18 C 24 18.124 23.935 18.23 23.804 18.319 Z"})});Xo.displayName="PlayIcon";Xo.propTypes=z;var Ht=qs.default.memo(Xo,$);var Zo=S.div`
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
`,Hs=ie`
  font-size: 20px;
  margin-right: 8px;
`,zs=S(Ht)`
  ${Hs}
`,$s=S(Xr)`
  ${Hs}
`,Us=S.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 5;
`;var Ws=g(C());var Qs=g(C()),Jo={contextMenuVisible:!1,controlsHovering:!1,timeSliding:!1,volumeSliding:!1,hiding:!1,menuVisible:!1,subMenuVisible:!1,fullscreen:!1,playerRef:null,videoRef:null},zt=(0,Qs.createContext)({state:Jo,dispatch:()=>null});var Cp=()=>{let{state:e}=(0,Ws.useContext)(zt);return e},N=Cp;var He=m("react/jsx-runtime"),js=({hasResource:e=!1,prevented:t,paused:r,muted:o,currentTime:n,onClick:i})=>{let{i18n:s}=N(),[l,a]=pt.default.useState(!1),c=f=>{a(!0),i(f)},u=pt.default.useCallback(()=>e===!1||t===!1||r?null:o===!0&&!l?(0,He.jsxs)(pt.default.Fragment,{children:[(0,He.jsx)(Us,{onClick:c}),(0,He.jsxs)(Zo,{children:[(0,He.jsx)($s,{}),s.clickToUnmute]})]},"preventedClickedTip"):null,[e,t,l]);return[pt.default.useCallback(()=>e===!1||t===!1?null:n===0&&r?(0,He.jsx)(pt.default.Fragment,{children:(0,He.jsxs)(Zo,{children:[(0,He.jsx)(zs,{}),s.playbackStuckClickResumePlayback]})},"preventedTip"):null,[n,r])(),u()]};js.propTypes={hasResource:ut.default.bool.isRequired,prevented:ut.default.bool.isRequired,paused:ut.default.bool.isRequired,muted:ut.default.bool.isRequired,currentTime:ut.default.number.isRequired,onClick:ut.default.func.isRequired};var Ys=pt.default.memo(js,(e,t)=>e.hasResource===t.hasResource&&e.prevented===t.prevented&&e.paused===t.paused&&e.muted===t.muted&&e.currentTime===t.currentTime&&e.onClick===t.onClick);var Js=g(C()),ze=g(j());var Gs=g(C());var Zs=m("react/jsx-runtime"),Ks=Gs.default.forwardRef(({showing:e,...t},r)=>(0,Zs.jsx)("button",{ref:r,...t}));Ks.displayName="PlayButton";var Xs=S(Ks)`
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
`;var $f=g(C());var Zr=m("react/jsx-runtime"),Ep=S.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  align-items: center;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
`,Rp=S.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
`,Tp=S.div`
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
`,Ap=()=>(0,Zr.jsx)(Ep,{children:(0,Zr.jsx)(Rp,{children:(0,Zr.jsx)(Tp,{})})}),Jr=Ap;var eo=m("react/jsx-runtime"),ea=({hasResource:e,loading:t,paused:r,ended:o,seeking:n,waiting:i,kernelMsg:s,onClick:l})=>e===!1||t||s?null:i||n?(0,eo.jsx)(Jr,{}):(0,eo.jsx)(Xs,{showing:r||o,onClick:l,children:(0,eo.jsx)(Ht,{width:"20%",height:"100%"})});ea.propTypes={hasResource:ze.default.bool.isRequired,loading:ze.default.bool.isRequired,paused:ze.default.bool.isRequired,ended:ze.default.bool.isRequired,seeking:ze.default.bool.isRequired,waiting:ze.default.bool.isRequired,kernelMsg:ze.default.object,onClick:ze.default.func.isRequired};var ta=Js.default.memo(ea,(e,t)=>e.hasResource===t.hasResource&&e.loading===t.loading&&e.paused===t.paused&&e.ended===t.ended&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.kernelMsg===t.kernelMsg&&e.onClick===t.onClick);var oa=g(C()),to=g(j());var ra=S.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 2em;
  background: rgba(0, 0, 0, 0.65);
`;var ro=m("react/jsx-runtime"),na=({hasResource:e,loading:t,kernelMsg:r=null})=>e===!1?null:r?(0,ro.jsxs)(ra,{children:[r.type,": ",r.detail]}):t?(0,ro.jsx)(Jr,{}):null;na.propTypes={hasResource:to.default.bool.isRequired,loading:to.default.bool.isRequired,kernelMsg:to.default.object};var ia=oa.default.memo(na,(e,t)=>e.hasResource===t.hasResource&&e.loading===t.loading&&e.kernelMsg===t.kernelMsg);var sa=ie`
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
`;var aa=Ns`
  * {
    margin: 0;
    padding: 0;
  }

  div[data-testid="media-player-skin"].reactjs-media-player {
    *, *::before, *::after {
      box-sizing: border-box;
    }
    ${sa}
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
`,Te=S.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  user-select: none;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
`,la=S.div`
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 10%;
  height: 55px !important;
  z-index: 2;
`,ca=S.div`
  padding: 10px 20px;
  font-size: 140%;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  border-radius: 3px;
  color: #eee;
`,ua=S.div`
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
`,pa=S.div`
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
`;var oo={32:"SPACE_KEY",27:"ESCAPE_KEY",37:"ARROW_LEFT_KEY",39:"ARROW_RIGHT_KEY",38:"ARROW_UP_KEY",40:"ARROW_DOWN_KEY",77:"MUTE_KEY",16:"SHIFT_KEY",67:"SUBTITLES_KEY",70:"F_KEY",84:"T_KEY",78:"N_KEY"},no={" ":"SPACE_KEY",Escape:"ESCAPE_KEY",ArrowLeft:"ARROW_LEFT_KEY",ArrowRight:"ARROW_RIGHT_KEY",ArrowUp:"ARROW_UP_KEY",ArrowDown:"ARROW_DOWN_KEY",m:"MUTE_KEY",Shift:"SHIFT_KEY",c:"SUBTITLES_KEY",f:"F_KEY",t:"T_KEY",n:"N_KEY"},$e=e=>e?83:55,Ae=e=>e?{width:54,height:54}:{width:36,height:36};var io=g(C()),cr=g(j());var fa=g(C());var da="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuQAAADyCAQAAACvvRhBAAADYklEQVR42u3cwY3DQAwEQdlQ/jE7BvEhor1VIdyjMeCtdV+fC4Cw258AQMgBWA250wqARQ6ARQ6ARQ5gkQNgkQMg5AA8DLnTCoBFDoBFDoBFDmCRA2CRA2CRA2CRA1jkAFjkAFjkAFjkABY5ABY5ABY5ABY5gEUOgEUOgEUOgJAD/FvIAbDIAbDIAbDIAYQcgGTIAbDIAbDIAbDIAYQcgGTIAbDIARByAMYhB8AiB0DIARiHHAAhB2Az5E4rAEIOwGbIAbDIARByAIQcQMgBSIYcAIscACEHYBxyACxyAIQcgHHIAbDIARByAMYhByAe8q8/AoBFDsBiyN3IAYQcgM2QA2CRAyDkAAg5wKkhB8AiB0DIARiHHIB4yH1rBcAiB2Az5G7kAEIOgJADMA45ABY5AEIOgJADCDkAyZADEA+5n+gDWOQAbIbcjRxAyAEQcgDGIQcgHnKvVgAscgA2Q+5GDiDkAAg5AOOQAxAPuVcrABY5AJshdyMHEHIAhBwAIQcQcgCSIQcgHnLvyAEscgA2Q+5GDiDkAAg5AEIOcGrIAYiH3PNDAIscAIscAIsc4NSQe7UCIOQACDkAQg4g5AAIOQBCDoCQAwg5AKGQAxAPuW+tAFjkAGyG3I0cQMgBEHIAhBxAyAEQcgCEHAAhBxByAEIhByAect9aAbDIAbDIAbDIAU4NuVcrAEIOgJADIOQAQg6AkAMg5AAIOYCQAyDkAAg5AEIOcELIAYiH3GdsASxyADZD7kYOEA+50wpAPOQAWOQAWOQAjEPun50A8ZA7rQDEQw5APOROKwBCDoCQAyDkAKeGHIB4yD0/BIiH3GkFQMgBEHIAxiEHIB5y/+wEsMgB2Ay5GzlAPOROKwDxkAMQD7nTCoCQAyDkAAg5gJADIOQACDkAQg4g5ACEQg5APOS+tQJgkQNgkQNgkQOcGnKvVgDiIXdaAYiHHIB4yJ1WAIQcACEHQMgBhBwAIQfg/ZADEA+5HwQBWOQAbIbcjRwgHnKnFYB4yAGIh9xpBUDIARByAIQcQMgBEHIA3g85APGQ+0EQgEUOgEUOgEUOcGrIvVoBEHIAhBwAIQcQcgCSIQfAIgdAyAEQcgAhB0DIARByAB6GHIB4yH3GFsAiB2Az5G7kAEIOgJADMA45AGk/i98EjA2eeD8AAAAASUVORK5CYII=";var ya=m("react/jsx-runtime"),ma=fa.default.forwardRef(({hiding:e,...t},r)=>(0,ya.jsx)("div",{ref:r,...t}));ma.displayName="Controls";var ha=S(ma)`
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
    background-image: url(${da});
    transition: opacity 0.3s;
  }
  ${({hiding:e})=>e?`
      opacity: 0;
    `:`
      opacity: 1;
    `}
`;var en=g(C());var Lp=()=>{let{state:e,dispatch:t}=en.default.useContext(zt);return en.default.useCallback(o=>{if(typeof o=="function"){let n=o(e);t(n)}else t(o)},[e])},J=Lp;var Sa=m("react/jsx-runtime"),ga=({children:e})=>{let t=N(),r=J(),o=io.default.useCallback(()=>{if(typeof window!="undefined"&&window.matchMedia){let i=window.matchMedia("(hover: none), (pointer: coarse)");if(i&&i.matches)return}r({type:"controlsHovering",payload:!0})},[]),n=io.default.useCallback(()=>{r({type:"controlsHovering",payload:!1})},[]);return(0,Sa.jsx)(ha,{hiding:t.hiding,onMouseEnter:o,onMouseLeave:n,children:e})};ga.propTypes={children:cr.default.oneOfType([cr.default.arrayOf(cr.default.node),cr.default.node]).isRequired};var ba=io.default.memo(ga,(e,t)=>e.children===t.children);var Ra=g(C()),dt=g(j());var va=g(C());var Ea=m("react/jsx-runtime"),wa=(0,va.forwardRef)(({isFullscreen:e,...t},r)=>(0,Ea.jsx)("div",{ref:r,...t}));wa.displayName="ControlBar";var xa=S(wa)`
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
`,ka=ie`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  flex: 1;
`,Pa=S.div`
  ${ka}
  justify-content: flex-start;
  margin-left: 15px;
`,Ca=S.div`
  ${ka}
  justify-content: flex-end;
  margin-right: 15px;
`;var ur=m("react/jsx-runtime"),Ta=({children:e,extra:t,fullscreen:r})=>(0,ur.jsxs)(xa,{isFullscreen:r,children:[(0,ur.jsx)(Pa,{children:e}),(0,ur.jsx)(Ca,{children:t})]});Ta.propTypes={children:dt.default.oneOfType([dt.default.arrayOf(dt.default.node),dt.default.node]).isRequired,extra:dt.default.node.isRequired,fullscreen:dt.default.bool.isRequired};var Aa=Ra.default.memo(Ta,(e,t)=>e.fullscreen===t.fullscreen&&e.children===t.children&&e.extra===t.extra);var sn=g(C()),mt=g(j());var ao=g(C());var tn=g(C());var rn=m("react/jsx-runtime"),La=tn.default.forwardRef(({isFullscreen:e,...t},r)=>(0,rn.jsx)("div",{ref:r,...t}));La.displayName="Tooltip";var so=S(La)`
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
`,Ia=tn.default.forwardRef(({isFullscreen:e,showTooltipOnly:t,...r},o)=>(0,rn.jsx)("div",{ref:o,...r}));Ia.displayName="Tip";var Oa=S(Ia)`
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
`;var Le=S.div`
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
`;var lo=m("react/jsx-runtime"),$t=S.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
`,Da=ao.default.forwardRef(({isFullscreen:e,...t},r)=>(0,lo.jsx)("button",{ref:r,...t}));Da.displayName="SliderHandle";var Ut=S(Da)`
  ${Le} ${Te} & {
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
`,Ma=`
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
`,_a=ao.default.forwardRef(({isSliding:e,isFullscreen:t,...r},o)=>(0,lo.jsx)("div",{ref:o,...r}));_a.displayName="Slider";var Ba=S(_a)`
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
  & ${$t} {
    -moz-transform: scaleY(0.6);
    -ms-transform: scaleY(0.6);
    -webkit-transform: scaleY(0.6);
    transform: scaleY(0.6);
    -moz-transition: -moz-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    -webkit-transition: -webkit-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    -ms-transition: -ms-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
    transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);
  }
  & ${Ut} {
    @media (hover: none), (pointer: coarse) {
      pointer-events: auto;
      opacity: 1;
      box-shadow: none;
    }
  }
  ${({isSliding:e})=>e?`
          & ${$t} {
            -moz-transform: none;
            -ms-transform: none;
            -webkit-transform: none;
            transform: none;
          }
          & ${Ut} {
            ${Ma}
          }
          & ${so} {
            display: block;
          }
        `:`
        &:focus ${$t},
        &:hover ${$t} {
          -moz-transform: none;
          -ms-transform: none;
          -webkit-transform: none;
          transform: none;
        }
        &:focus ${Ut},
        &:hover ${Ut} {
          ${Ma}
        }
      `}
`,Fa=ao.default.forwardRef(({isFullscreen:e,...t},r)=>(0,lo.jsx)("div",{ref:r,...t}));Fa.displayName="SlideRail";var Na=S(Fa)`
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
`,Va=S.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  transform-origin: center left;
  background-color: rgba(255, 255, 255, 0.5);
`,qa=S.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translate(-100%, 0);
  background: #f00;
`,Ha=S.div`
  position: absolute;
  top: -4px;
  left: 0;
  width: 100%;
  height: 12px;
  transform: translate(-100%, 0);
  z-index: 4;
`;var we=g(C()),Ze=g(j());var za=g(C());var Wa=m("react/jsx-runtime"),$a=za.default.forwardRef(({isFullscreen:e,showing:t,...r},o)=>(0,Wa.jsx)("div",{ref:o,...r}));$a.displayName="TimelensThumbnail";var Ua=S($a)`
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
`,Qa=S.div`
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20px;
  z-index: 4;
`;var Ip=e=>"changedTouches"in e&&e.changedTouches&&1<=e.changedTouches.length?e.changedTouches[0].pageX:"clientX"in e?e.clientX:0,pr=(e,t,r)=>{let o=Ip(e)-t.left;return 0>=o?0:o>=t.width?r:Math.round(r*o/t.width)},Ya=({duration:e,currentTime:t,sliderWidth:r,elementWidth:o,offset:n=0})=>{if(e<=0||r<=0||o<=0)return 0;let i=t/e*r,s=o/2,l=s+n,a=r-s-n;return Math.min(a,Math.max(l,i))},Ga=({duration:e,currentTime:t,sliderWidth:r,handleWidth:o})=>{if(e===0)return{trackTranslateX:"-100",handleTranslateX:"-100"};let n=Ya({duration:e,currentTime:t,sliderWidth:r,elementWidth:o,offset:0}),i=(100*t/e-100).toFixed(1),s=(n/r*100-100).toFixed(1);return{trackTranslateX:i,handleTranslateX:s}},Ka=({duration:e,currentTime:t,sliderWidth:r,tooltipWidth:o})=>(Ya({duration:e,currentTime:t,sliderWidth:r,elementWidth:o,offset:5})/r*100).toFixed(1),ja=e=>{if(typeof e!="string")throw new TypeError("Time must be a string");if(e.indexOf(";")>0&&(e=e.replace(";",":"),!/\d{2}(\:\d{2}){0,3}/i.test(e)))throw new TypeError("Time code must have the format `00:00:00`");let t=e.split(":"),r=0,o=0,n=0,i=0,s=25,l=Math.round(s),a=3600*l,c=60*l;switch(t.length){default:case 1:n=parseInt(t[0],10);break;case 2:o=parseInt(t[0],10),n=parseInt(t[1],10);break;case 3:r=parseInt(t[0],10),o=parseInt(t[1],10),n=parseInt(t[2],10);break;case 4:r=parseInt(t[0],10),o=parseInt(t[1],10),n=parseInt(t[2],10),i=parseInt(t[3],10)}let u=(a*r+c*o+s*n+i)/s;return parseFloat(u.toFixed(3))},Xa=e=>{var t=e.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+o,left:t.left+r}},Za=e=>{let t=0,r=0,o=[];for(var n of e.split(`
`))if(/-->/.test(n)){let[i,s]=(n.match(/(.*) --> (.*)/)||[]).slice(1);t=ja(i),r=ja(s)}else if(/png/.test(n)){let[i,s,l,a,c]=(n.match(/(.*)\?xywh=(.*),(.*),(.*),(.*)/)||[]).slice(1);o.push({from:t,to:r,file:i,x:s,y:l,w:a,h:c})}return o};var ft=m("react/jsx-runtime"),on=we.default.forwardRef(({spriteVTTFile:e,sliderRef:t,duration:r=0,fullscreen:o},n)=>{let i=N(),[s,l]=we.default.useState([]),a=we.default.useRef(null),[c,u]=we.default.useState(!1),[p,f]=we.default.useState({backgroundImage:"",backgroundPosition:"-480px -360px",width:"160px",height:"90px",marginLeft:"0px"});we.default.useEffect(()=>{(async()=>{try{let y=await fetch(e).then(b=>b.text()),T=Za(y);l(T)}catch(y){console.error("Error parsing VTT file: ",y)}})()},[e]);let h=we.default.useCallback(async y=>{var R;let T=a==null?void 0:a.current,b=t==null?void 0:t.current;if(T&&b&&s.length>0&&i.menuVisible===!1&&i.subMenuVisible===!1){let E=Xa(b),O=y==null?void 0:y.pageX;y!=null&&y.originalEvent&&((R=y==null?void 0:y.originalEvent)!=null&&R.changedTouches)?O=y.originalEvent.changedTouches[0].pageX:y!=null&&y.changedTouches&&(O=y.changedTouches[0].pageX);let d=(O-E.left-b.offsetLeft)/b.offsetWidth,M=d*r,B=d*b.offsetWidth;for(var v of s)if(M>=v.from&&M<=v.to){let x=Math.min(Math.max(0,B-T.offsetWidth/2),b.offsetWidth-T.offsetWidth);f({backgroundImage:`url(${v.file})`,backgroundPosition:-v.x+"px "+-v.y+"px",width:v.w+"px",height:v.h+"px",marginLeft:x+"px"});break}u(!0)}},[a,t,r,s,i.menuVisible,i.subMenuVisible]),w=we.default.useCallback(()=>{u(!1)},[]);return we.default.useImperativeHandle(n,()=>({handleTimelens:h,setShowTimelens:u})),(0,ft.jsxs)(ft.Fragment,{children:[(0,ft.jsx)(Qa,{onMouseMove:h,onMouseEnter:h,onMouseLeave:w}),(0,ft.jsx)(Ua,{ref:a,showing:c||i.timeSliding,isFullscreen:o,style:p})]})});on.displayName="Timelens";on.propTypes={sliderRef:Ze.default.oneOfType([Ze.default.func,Ze.default.shape({current:Ze.default.instanceOf(HTMLDivElement)})]),spriteVTTFile:Ze.default.string.isRequired,duration:Ze.default.number.isRequired,fullscreen:Ze.default.bool.isRequired};var Ja=we.default.memo(on,(e,t)=>e.fullscreen===t.fullscreen&&e.sliderRef===t.sliderRef&&e.spriteVTTFile===t.spriteVTTFile&&e.duration===t.duration);var dr=g(C()),Ie=g(j());Ce();var nn=m("react/jsx-runtime"),el=({sliderRef:e,duration:t,tooltip:r,showTooltip:o,showTooltipOnly:n=!1,fullscreen:i})=>{let s=dr.default.useRef(null),[l,a]=dr.default.useState("0");return dr.default.useEffect(()=>{var u,p;let c=Ka({duration:t,currentTime:r,sliderWidth:((u=e.current)==null?void 0:u.offsetWidth)||0,tooltipWidth:((p=s.current)==null?void 0:p.offsetWidth)||0});a(c)},[t,r,s,e]),(0,nn.jsx)(so,{style:{display:o?"block":"",transform:`translateX(${l}%)`},isFullscreen:i,children:(0,nn.jsx)(Oa,{ref:s,isFullscreen:i,showTooltipOnly:n,children:ot(r)})})};el.propTypes={sliderRef:Ie.default.oneOfType([Ie.default.func,Ie.default.shape({current:Ie.default.instanceOf(HTMLDivElement)})]),duration:Ie.default.number.isRequired,tooltip:Ie.default.number.isRequired,showTooltip:Ie.default.bool.isRequired,showTooltipOnly:Ie.default.bool,fullscreen:Ie.default.bool.isRequired};var tl=dr.default.memo(el,(e,t)=>e.sliderRef===t.sliderRef&&e.duration===t.duration&&e.tooltip===t.tooltip&&e.showTooltip===t.showTooltip&&e.showTooltipOnly===t.showTooltipOnly&&e.fullscreen===t.fullscreen);var G=g(C());var Op=({timelensRef:e,currentTime:t,duration:r,onChange:o,onSeeking:n})=>{let i=J(),s=G.default.useRef(null),l=G.default.useRef(null),[a,c]=G.default.useState(!1),[u,p]=G.default.useState(!1),[f,h]=G.default.useState({left:0,width:0}),[w,y]=G.default.useState({value:0,tooltip:0}),T=G.default.useCallback(x=>{x.preventDefault();let _=x.currentTarget.getBoundingClientRect(),P=pr(x,_,r);i({type:"timeSliding",payload:!1}),p(!1),o(P),n(!1),e.current&&e.current.handleTimelens(x)},[o,r,i,e]),b=G.default.useCallback(x=>{if(x.preventDefault(),s.current!==null){let _=s.current.getBoundingClientRect();i({type:"timeSliding",payload:!0}),h(P=>({...P,left:_.left,width:_.width})),e.current&&e.current.handleTimelens(x),p(!0),n(!0)}},[e]),v=G.default.useCallback(x=>{x.preventDefault();let _=pr(x,{left:f.left,width:f.width},r);i({type:"timeSliding",payload:!1}),p(!1),y(P=>({...P,value:_})),o(_),n(!1),e.current&&e.current.setShowTimelens(!1)},[o,r,f,i]),R=G.default.useCallback(x=>{x.preventDefault();let _=pr(x,{left:f.left,width:f.width},r);y(P=>({...P,value:_})),e.current&&e.current.handleTimelens(x)},[r,f]);G.default.useEffect(()=>u?(document.addEventListener("mousemove",R),document.addEventListener("mouseup",v),document.addEventListener("touchmove",R),document.addEventListener("touchcancel",v),document.addEventListener("touchend",v),()=>{document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",v),document.removeEventListener("touchmove",R),document.removeEventListener("touchcancel",v),document.removeEventListener("touchend",v)}):()=>{},[u,R,v]);let E=G.default.useCallback(x=>{if(x.preventDefault(),s.current!==null){let _=s.current.getBoundingClientRect();h(P=>({...P,left:_.left,width:_.width})),e.current&&e.current.handleTimelens(x)}},[e]),O=G.default.useCallback(x=>{x.preventDefault();let _=pr(x,{left:f.left,width:f.width},r);y(P=>({...P,tooltip:_})),e.current&&e.current.handleTimelens(x)},[r,f.left,f.width,e]),A=G.default.useCallback(x=>{if(x.preventDefault(),!s||!s.current)return;let _=s.current.getBoundingClientRect();h(P=>({...P,left:_.left,width:_.width}))},[]),d=G.default.useCallback(x=>{e.current&&e.current.handleTimelens(x),c(!0)},[e]),M=G.default.useCallback(()=>{e.current&&e.current.setShowTimelens(!1),c(!1)},[e]);G.default.useEffect(()=>{if(typeof window!="undefined")return window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A)}},[A]);let B=G.default.useMemo(()=>{var x;return Ga({duration:r,currentTime:u?w.value:t,sliderWidth:f.width,handleWidth:((x=l.current)==null?void 0:x.offsetWidth)||0})},[r,t,w.value,u,l,f]);return{sliderRef:s,handleRef:l,showTooltip:a,timeSliderSliding:u,timeSliderState:w,trackTranslateX:{track:B.trackTranslateX,handle:B.handleTranslateX},onClick:T,onMouseDown:b,onSliderMouseOver:E,onSliderMouseMove:O,onMouseEnter:d,onMouseLeave:M}},rl=Op;Ce();var xe=m("react/jsx-runtime"),ol=({spriteVTTFile:e,currentTime:t,duration:r,buffered:o,onChange:n,onSeeking:i,fullscreen:s})=>{let{i18n:l}=N(),a=sn.default.useRef(null),{sliderRef:c,handleRef:u,showTooltip:p,timeSliderSliding:f,timeSliderState:h,trackTranslateX:w,onClick:y,onMouseDown:T,onSliderMouseOver:b,onSliderMouseMove:v,onMouseEnter:R,onMouseLeave:E}=rl({timelensRef:a,currentTime:t,duration:r,onChange:n,onSeeking:i});return(0,xe.jsxs)(Ba,{ref:c,role:"slider","aria-label":l.timeBar,"aria-valuemin":0,"aria-valuemax":r,"aria-valuenow":t,"aria-valuetext":ot(Math.round(t)),tabIndex:0,onClick:y,onKeyDown:()=>{},onMouseOver:b,onMouseMove:v,onMouseEnter:R,onMouseLeave:E,onFocus:()=>{},isSliding:f,isFullscreen:s,children:[(0,xe.jsxs)($t,{children:[(0,xe.jsxs)(Na,{isFullscreen:s,children:[(0,xe.jsx)(Va,{style:{transform:`scaleX(${o})`}}),(0,xe.jsx)(qa,{style:{transform:`translateX(${w.track}%)`}})]}),(0,xe.jsx)(Ha,{style:{transform:`translateX(${w.handle}%)`},children:(0,xe.jsx)(Ut,{ref:u,type:"button",onMouseDown:T,onTouchStart:T,isFullscreen:s})})]}),(0,xe.jsx)(tl,{sliderRef:c,showTooltip:p,duration:r,tooltip:f?h.value:h.tooltip,showTooltipOnly:!e,fullscreen:s}),e&&(0,xe.jsx)(Ja,{ref:a,sliderRef:c,duration:r,spriteVTTFile:e,fullscreen:s})]})};ol.propTypes={spriteVTTFile:mt.default.string,currentTime:mt.default.number.isRequired,duration:mt.default.number.isRequired,buffered:mt.default.number.isRequired||null,onChange:mt.default.func.isRequired,fullscreen:mt.default.bool.isRequired};var nl=sn.default.memo(ol,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.currentTime===t.currentTime&&e.duration===t.duration&&e.buffered===t.buffered&&e.onChange===t.onChange&&e.onSeeking===t.onSeeking&&e.fullscreen===t.fullscreen);var kl=g(C()),yt=g(j());var an=g(C());var Ue=g(C());var fr=m("react/jsx-runtime"),Mp=ie`
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
`,Dp=ie`
  align-items: center;
  padding: 0 8px;
  font-size: 14px;
`,_p=ie`
  width: 54px;
  height: 54px;
`,Bp=ie`
  width: 36px;
  height: 36px;
`,Fp=ie`
  font-size: 145% !important;
`,il=Ue.default.forwardRef(({isFullscreen:e=!1,title:t,...r},o)=>(0,fr.jsx)("div",{ref:o,...r}));il.displayName="TooltipText";var Np=S(il)`
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
`,sl=Ue.default.forwardRef(({isText:e,isFullscreen:t=!1,isTooltipActive:r=!1,isFakeDisabled:o=!1,title:n,...i},s)=>{let l=N(),a=Ue.default.useRef(null),[c,u]=Ue.default.useState(null),p=Ue.default.useCallback(y=>{var d;i.onMouseEnter&&i.onMouseEnter(y);let T=a==null?void 0:a.current,b=(d=l.playerRef)==null?void 0:d.current;if(!T||!b||b.querySelectorAll('[aria-expanded="true"]').length>0||r===!1){u(null);return}let v=T.getBoundingClientRect(),R=b.getBoundingClientRect(),E=y.target.hasAttribute("aria-expanded")?y.target.parentElement:y.target,O=(E==null?void 0:E.offsetWidth)||0,A=(E==null?void 0:E.offsetLeft)||0;A+O/2<=v.width/2?u(-A+15):A<=15?u(0):A+v.width/2>R.width-15?u(-1*(v.width-O)):u(-1*(v.width/2-O/2))},[r,i,l.playerRef]),f=Ue.default.useCallback(y=>{u(null),i.onMouseLeave&&i.onMouseLeave(y)},[i]),h=Ue.default.useCallback(y=>{o===!1&&u(null),i.onClick&&i.onClick(y)},[i,o]),w=Ue.default.useCallback(y=>{o===!1&&u(null),i.onMouseDown&&i.onMouseDown(y)},[i,o]);return(0,fr.jsxs)("button",{ref:s,title:n,onMouseEnter:p,onMouseLeave:f,onClick:h,onMouseDown:w,...i,children:[i.children,(0,fr.jsx)(Np,{ref:a,isFullscreen:t,style:{opacity:c===null?0:1,left:c||0},children:n})]})});sl.displayName="GeneralButton";var Vp=S(sl)`
  ${Le} ${Te} & {
    ${Mp}
    ${({isFullscreen:e,isText:t})=>!t&&(e?_p:Bp)}
    ${({isFullscreen:e,isText:t})=>e&&t&&Fp}
    ${({isText:e})=>e&&Dp}
    ${({isFakeDisabled:e})=>e&&`
      color: #a4a4a4;
    `}
  }
`,U=Vp;var ln=m("react/jsx-runtime"),al=an.default.forwardRef(({isFullscreen:e,...t},r)=>(0,ln.jsx)("div",{ref:r,...t}));al.displayName="SliderWrapper";var mr=S(al)`
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
`,ll=an.default.forwardRef(({isSliding:e,isFullscreen:t,...r},o)=>(0,ln.jsx)("div",{ref:o,...r}));ll.displayName="SliderContainer";var cl=S(ll)`
  display: flex;
  padding-right: 3px;
  @media (max-width: 575px) {
    display: none;
  }

  ${({isSliding:e,isFullscreen:t})=>e?`
      & ${mr} {
        width: ${$e(t)}px;
        -moz-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
        -webkit-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
        transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
      }
      `:`
          & ${U}:hover ~ ${mr},
          & ${mr}:hover {
              width: ${$e(t)}px;
              -moz-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
              -webkit-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
              transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
          }
      `}
`;var gl=g(C()),hr=g(j());var ke=g(C());var co=({clientX:e,sliderRef:t,isFullcreen:r})=>{if(!t.current)return 0;let o=t.current.getBoundingClientRect(),i=(e-o.left)/$e(r)*100;return i<0?i=0:i>100&&(i=100),i};var qp=({fullscreen:e,value:t,onChange:r})=>{let o=N(),n=J(),i=ke.default.useRef(null),s=ke.default.useRef(null),[l,a]=ke.default.useState(!1),[c,u]=ke.default.useState(0);ke.default.useEffect(()=>{if(i!=null&&i.current&&(s!=null&&s.current)){let y=s.current.getBoundingClientRect(),T=t/100*$e(e)-y.width/2,b=T;T<0?b=0:T>$e(e)-y.width&&(b=$e(e)-y.width),u(b)}},[t,e]);let p=ke.default.useCallback(y=>{if(r){let T=co({clientX:y.clientX,sliderRef:i,isFullcreen:e});r(T)}},[r,e]),f=ke.default.useCallback(y=>{y.preventDefault(),i!=null&&i.current&&(a(!0),n({type:"volumeSliding",payload:!0}))},[]),h=ke.default.useCallback(y=>{y.preventDefault(),n({type:"volumeSliding",payload:!1});let T=co({clientX:y.clientX,sliderRef:i,isFullcreen:e});r(T),a(!1)},[r,e]),w=ke.default.useCallback(y=>{if(y.preventDefault(),!l)return;let T=co({clientX:y.clientX,sliderRef:i,isFullcreen:e});r(T)},[l,e]);return ke.default.useEffect(()=>o.volumeSliding?(document.addEventListener("mousemove",w),document.addEventListener("mouseup",h),document.addEventListener("touchmove",w),document.addEventListener("touchcancel",h),document.addEventListener("touchend",h),()=>{document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",h),document.removeEventListener("touchmove",w),document.removeEventListener("touchcancel",h),document.removeEventListener("touchend",h)}):()=>{},[o.volumeSliding,w,h]),{thumbLeft:c,sliderRef:i,thumbRef:s,onMouseDown:f,onMouseMove:w,handleChange:p}},ul=qp;var uo=g(C());var po=m("react/jsx-runtime"),pl=uo.default.forwardRef(({isFullscreen:e,...t},r)=>(0,po.jsx)("div",{ref:r,...t}));pl.displayName="SliderContainer";var dl=S(pl)`
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
`,fl=uo.default.forwardRef(({isFullscreen:e,isDisabled:t,...r},o)=>(0,po.jsx)("div",{ref:o,...r}));fl.displayName="SliderTrack";var ml=S(fl)`
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
`,hl=uo.default.forwardRef(({isFullscreen:e,isDisabled:t,...r},o)=>(0,po.jsx)("div",{ref:o,...r}));hl.displayName="SliderThumb";var yl=S(hl)`
  ${Le} ${Te} & {
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
`;var Qt=m("react/jsx-runtime"),bl=({fullscreen:e,value:t,isDisabled:r,onChange:o})=>{let{thumbLeft:n,sliderRef:i,thumbRef:s,onMouseMove:l,onMouseDown:a,handleChange:c}=ul({fullscreen:e,value:t,onChange:o});return(0,Qt.jsx)(mr,{ref:i,role:"slider","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":Math.round(t),"aria-valuetext":`${Math.round(t)}%`,onClick:c,onMouseDown:a,onTouchStart:a,isFullscreen:e,children:(0,Qt.jsxs)(dl,{onMouseMove:l,isFullscreen:e,children:[(0,Qt.jsx)(ml,{style:{width:`${t}%`},isFullscreen:e,isDisabled:r}),(0,Qt.jsx)(yl,{ref:s,style:{left:`${n}px`},onMouseDown:a,onTouchStart:a,isFullscreen:e,isDisabled:r})]})})};bl.propTypes={value:hr.default.number.isRequired,onChange:hr.default.func.isRequired,isDisabled:hr.default.bool.isRequired,fullscreen:hr.default.bool.isRequired};var Sl=gl.default.memo(bl,(e,t)=>e.fullscreen===t.fullscreen&&e.value===t.value&&e.onChange===t.onChange&&e.isDisabled===t.isDisabled);var ht=g(C());var vl=g(C());var Wt=m("react/jsx-runtime"),cn=({width:e=36,height:t=36})=>(0,Wt.jsxs)("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",children:[(0,Wt.jsx)("path",{d:"M 22.5 18 C 22.5 16.189 21.48 14.624 20 13.87 L 20 22.136 C 21.48 21.377 22.5 19.812 22.5 18 Z"}),(0,Wt.jsx)("polygon",{points:"9 14.922 9 21.078 13 21.078 18 26.21 18 9.79 13 14.922"}),(0,Wt.jsx)("path",{d:"M 20 9 L 20 11.119 C 22.89 12.002 25 14.747 25 18 C 25 21.253 22.89 23.999 20 24.881 L 20 27 C 24.005 26.066 27 22.398 27 18 C 27 13.603 24.005 9.934 20 9 Z"})]});cn.displayName="UnmutedIcon";cn.propTypes=z;var wl=vl.default.memo(cn,$);var un=m("react/jsx-runtime"),Hp=({fullscreen:e,isMuted:t,volume:r,forceMuted:o,changeVolume:n,onMutedClick:i})=>{let s=N(),l=ht.default.useMemo(()=>Ae(e),[e]),a=ht.default.useMemo(()=>t===!0||r===0||o,[t,r,o]),c=ht.default.useCallback(()=>a?(0,un.jsx)(Xr,{...l}):(0,un.jsx)(wl,{...l}),[a,l]),u=ht.default.useMemo(()=>o?s.i18n.thisVideoHasNoSound:a?s.i18n.activateSound:s.i18n.mute,[a,o,s.i18n]),p=ht.default.useCallback(h=>{o===!1&&n(h/100)},[n,o]),f=ht.default.useCallback(()=>{o===!1&&i(a)},[i,a,o]);return{titleMemorized:u,renderIcon:c,handleOnClick:f,handleChange:p}},xl=Hp;var yr=m("react/jsx-runtime"),Pl=({fullscreen:e,isMuted:t,volume:r,forceMuted:o,changeVolume:n,onMutedClick:i})=>{let s=N(),{titleMemorized:l,renderIcon:a,handleOnClick:c,handleChange:u}=xl({fullscreen:e,isMuted:t,volume:r,forceMuted:o,changeVolume:n,onMutedClick:i});return(0,yr.jsxs)(cl,{isSliding:s.volumeSliding,isFullscreen:e,children:[(0,yr.jsx)(U,{type:"button","aria-label":l,title:l,onClick:c,isFullscreen:e,isFakeDisabled:o,isTooltipActive:!0,children:a()}),(0,yr.jsx)(Sl,{fullscreen:e,value:r*100,isDisabled:o,onChange:u})]})};Pl.propTypes={fullscreen:yt.default.bool.isRequired,isMuted:yt.default.bool.isRequired,volume:yt.default.number.isRequired,onMutedClick:yt.default.func.isRequired,forceMuted:yt.default.bool.isRequired,changeVolume:yt.default.func.isRequired};var Cl=kl.default.memo(Pl,(e,t)=>e.fullscreen===t.fullscreen&&e.isMuted===t.isMuted&&e.volume===t.volume&&e.forceMuted===t.forceMuted&&e.onMutedClick===t.onMutedClick&&e.changeVolume===t.changeVolume);var Rl=g(C()),fo=g(j());var pn=S.div`
  display: inline-block;
  height: 36px;
  padding: 0 5px;
  font-size: 13px;
  line-height: 35px;
  white-space: nowrap;
`,El=S.span`
  position: relative;
  top: -2px;
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-right: 8px;
  vertical-align: middle;
  border-radius: 50%;
  background: #ff0000;
`;Ce();var gr=m("react/jsx-runtime"),Tl=({live:e,duration:t,currentTime:r})=>{let{i18n:o}=N();return(0,gr.jsxs)(pn,{role:"timer","aria-live":"off",children:[ot(Math.round(r)),e?(0,gr.jsxs)(pn,{children:[(0,gr.jsx)(El,{}),o.live]}):` / ${ot(Math.round(t))}`]})};Tl.propTypes={live:fo.default.bool.isRequired,duration:fo.default.number.isRequired,currentTime:fo.default.number.isRequired};var Al=Rl.default.memo(Tl,(e,t)=>e.live===t.live&&e.duration===t.duration&&e.currentTime===t.currentTime);var fn=g(C()),jt=g(j());var Ll=g(C());var br=m("react/jsx-runtime"),dn=({width:e=36,height:t=36})=>(0,br.jsxs)("svg",{height:e,width:t,version:"1.1",viewBox:"0 0 36 36",fill:"currentColor",children:[(0,br.jsx)("rect",{x:"12",y:"10",width:"3",height:"16"}),(0,br.jsx)("rect",{x:"21",y:"10",width:"3",height:"16"})]});dn.displayName="PauseIcon";dn.propTypes=z;var Il=Ll.default.memo(dn,$);var Sr=m("react/jsx-runtime"),Ol=({fullscreen:e,paused:t,ended:r,onPlayClick:o,onPauseClick:n})=>{let{i18n:i}=N(),s=fn.default.useMemo(()=>Ae(e),[e]);return t||r?(0,Sr.jsx)(U,{type:"button","aria-label":i.play,title:i.play,onClick:o,isFullscreen:e,isTooltipActive:!0,children:(0,Sr.jsx)(Ht,{...s})}):(0,Sr.jsx)(U,{type:"button","aria-label":i.pause,title:i.pause,onClick:n,isFullscreen:e,isTooltipActive:!0,children:(0,Sr.jsx)(Il,{...s})})};Ol.propTypes={fullscreen:jt.default.bool.isRequired,paused:jt.default.bool.isRequired,ended:jt.default.bool.isRequired,onPlayClick:jt.default.func.isRequired,onPauseClick:jt.default.func.isRequired};var Ml=fn.default.memo(Ol,(e,t)=>e.fullscreen===t.fullscreen&&e.paused===t.paused&&e.ended===t.ended&&e.onPlayClick===t.onPlayClick&&e.onPauseClick===t.onPauseClick);var bn=g(C()),mo=g(j());var Dl=g(C());var mn=m("react/jsx-runtime"),hn=({width:e=36,height:t=36})=>(0,mn.jsx)("svg",{width:e,height:t,viewBox:"0 0 36 36",children:(0,mn.jsx)("path",{fill:"currentColor",d:"M 12 20.667 L 10 20.667 L 10 26 L 15.333 26 L 15.333 24 L 12 24 L 12 20.667 Z M 10 15.333 L 12 15.333 L 12 12 L 15.333 12 L 15.333 10 L 10 10 L 10 15.333 Z M 24 24 L 20.667 24 L 20.667 26 L 26 26 L 26 20.667 L 24 20.667 L 24 24 Z M 20.667 10 L 20.667 12 L 24 12 L 24 15.333 L 26 15.333 L 26 10 L 20.667 10 Z"})});hn.displayName="FullscreenIcon";hn.propTypes=z;var _l=Dl.default.memo(hn,$);var Bl=g(C());var yn=m("react/jsx-runtime"),gn=({width:e=36,height:t=36})=>(0,yn.jsx)("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor",children:(0,yn.jsx)("path",{d:"M 10 22.667 L 13.333 22.667 L 13.333 26 L 15.333 26 L 15.333 20.667 L 10 20.667 L 10 22.667 Z M 13.333 13.333 L 10 13.333 L 10 15.333 L 15.333 15.333 L 15.333 10 L 13.333 10 L 13.333 13.333 Z M 20.667 26 L 22.667 26 L 22.667 22.667 L 26 22.667 L 26 20.667 L 20.667 20.667 L 20.667 26 Z M 22.667 13.333 L 22.667 10 L 20.667 10 L 20.667 15.333 L 26 15.333 L 26 13.333 L 22.667 13.333 Z"})});gn.displayName="UnfullscreenIcon";gn.propTypes=z;var Fl=Bl.default.memo(gn,$);var vr=m("react/jsx-runtime"),Nl=({fullscreen:e,requestFullscreen:t,exitFullscreen:r})=>{let{i18n:o}=N(),n=bn.default.useMemo(()=>Ae(e),[e]);return e?(0,vr.jsx)(U,{type:"button","aria-label":o.exitFullScreenMode,title:o.exitFullScreenMode,onClick:r,isFullscreen:!0,isTooltipActive:!0,children:(0,vr.jsx)(Fl,{...n})}):(0,vr.jsx)(U,{type:"button","aria-label":o.fullScreen,title:o.fullScreen,onClick:t,isTooltipActive:!0,children:(0,vr.jsx)(_l,{...n})})};Nl.propTypes={fullscreen:mo.default.bool.isRequired,requestFullscreen:mo.default.func.isRequired,exitFullscreen:mo.default.func.isRequired};var Vl=bn.default.memo(Nl,(e,t)=>e.fullscreen===t.fullscreen&&e.requestFullscreen===t.requestFullscreen&&e.exitFullscreen===t.exitFullscreen);var wr=g(C());var zp=3*1e3,$p=({hasResource:e,loading:t,prevented:r,paused:o,ended:n,waiting:i,seeking:s,kernelMsg:l})=>{let{controlsHovering:a,timeSliding:c,menuVisible:u,subMenuVisible:p}=N(),f=J(),h=wr.default.useRef(void 0),w=wr.default.useCallback(()=>{typeof window!="undefined"&&window.clearTimeout(h.current),f({type:"hiding",payload:!1}),!(e===!1||t||r||o||n||i||s||c||u||p||a||l)&&(h.current=window.setTimeout(()=>{f({type:"hiding",payload:!0})},zp))},[e,t,r,o,n,i,s,c,u,p,a,l]),y=wr.default.useCallback(()=>{if(typeof window!="undefined"&&window.clearTimeout(h.current),e===!1||t||r||o||n||i||s||c||u||p||a||l){f({type:"hiding",payload:!1});return}f({type:"hiding",payload:!0})},[e,t,r,o,n,i,s,c,u,p,a,h,l]);return wr.default.useEffect(()=>{typeof window!="undefined"&&(o||n)?(window.clearTimeout(h.current),f({type:"hiding",payload:!1})):o||w()},[o,n,h]),{showControls:w,hideControls:y}},ql=$p;var hc=g(C()),Oe=g(j());var Sn=g(C());var vn=m("react/jsx-runtime"),Hl=S.div`
  position: relative;
  display: inline-block;
`,zl=Sn.default.forwardRef(({singleOption:e,hiding:t,isFullscreen:r,...o},n)=>(0,vn.jsx)("div",{ref:n,...o}));zl.displayName="DropdownOverlay";var $l=S(zl)`
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
`,Ul=S.ul`
  min-width: 250px;
  padding: 10px 0;
`,Ql=S.li`
  & ${U} {
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
  & ${U}:focus, & ${U}:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
`,Wl=S.div`
  margin-right: auto;
`,jl=S.div`
  font-size: 87%;
`,Yl=S.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`,Gl=Sn.default.forwardRef(({isFullHD:e=!1,isExpanded:t=!1,isFullscreen:r=!1,...o},n)=>(0,vn.jsx)(U,{ref:n,isFullscreen:r,...o}));Gl.displayName="DropdownButton";var Kl=S(Gl)`
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
`;var Xl=g(C());var wn=m("react/jsx-runtime"),xn=({width:e=36,height:t=36})=>(0,wn.jsx)("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor",children:(0,wn.jsx)("path",{d:"M 25.089 17.774 C 25.056 17.032 24.908 16.3 24.649 15.604 L 25.796 14.535 C 26.013 14.326 26.065 13.997 25.921 13.732 C 25.463 12.886 24.874 12.117 24.177 11.453 C 23.965 11.247 23.641 11.211 23.39 11.366 L 22.034 12.21 C 21.424 11.786 20.75 11.461 20.039 11.247 L 19.9 9.677 C 19.877 9.375 19.646 9.13 19.345 9.09 C 18.927 9.029 18.505 8.999 18.082 9 C 17.543 8.998 17.006 9.045 16.476 9.141 C 16.19 9.187 15.97 9.419 15.939 9.706 L 15.772 11.311 C 15.117 11.533 14.498 11.849 13.934 12.249 L 12.614 11.398 C 12.362 11.236 12.032 11.269 11.817 11.478 C 11.108 12.158 10.512 12.947 10.053 13.816 C 9.913 14.076 9.961 14.398 10.172 14.606 L 11.329 15.72 C 11.115 16.314 10.981 16.933 10.93 17.563 L 9.44 18.086 C 9.155 18.18 8.974 18.459 9.003 18.757 C 9.068 19.751 9.296 20.727 9.677 21.646 C 9.786 21.924 10.073 22.091 10.368 22.048 L 11.93 21.823 C 12.234 22.337 12.602 22.811 13.025 23.232 L 12.473 24.754 C 12.372 25.032 12.468 25.342 12.707 25.515 C 13.505 26.099 14.394 26.548 15.338 26.844 C 15.625 26.937 15.938 26.818 16.09 26.559 L 16.897 25.207 C 17.245 25.265 17.597 25.297 17.95 25.303 C 18.215 25.305 18.48 25.292 18.744 25.261 L 19.55 26.658 C 19.69 26.921 19.991 27.054 20.28 26.979 C 21.228 26.728 22.128 26.321 22.943 25.775 C 23.195 25.609 23.302 25.293 23.203 25.008 L 22.686 23.512 C 23.198 23.057 23.643 22.532 24.006 21.951 L 25.568 22.202 C 25.862 22.25 26.151 22.089 26.265 21.813 C 26.657 20.921 26.903 19.971 26.994 19.001 C 27.034 18.698 26.855 18.41 26.567 18.311 Z M 25.266 20.834 L 23.37 20.532 L 22.917 21.258 C 22.62 21.735 22.257 22.167 21.838 22.542 L 21.195 23.123 L 21.838 24.947 C 21.392 25.208 20.92 25.423 20.431 25.589 L 19.467 23.9 L 18.641 23.984 C 18.428 24.009 18.213 24.02 17.999 24.019 C 17.708 24.013 17.418 23.986 17.131 23.939 L 16.238 23.769 L 15.255 25.438 C 14.764 25.253 14.294 25.017 13.854 24.732 L 14.526 22.898 L 13.931 22.311 C 13.587 21.962 13.286 21.573 13.035 21.152 L 12.595 20.413 L 10.696 20.686 C 10.526 20.188 10.406 19.674 10.336 19.152 L 12.158 18.51 L 12.216 17.668 C 12.255 17.154 12.364 16.648 12.537 16.163 L 12.816 15.366 L 11.422 14.021 C 11.69 13.582 12.001 13.17 12.35 12.792 L 13.957 13.832 L 14.66 13.328 C 15.122 13.002 15.629 12.743 16.164 12.56 L 16.951 12.297 L 17.154 10.352 C 17.458 10.311 17.765 10.289 18.072 10.284 C 18.268 10.284 18.464 10.284 18.664 10.313 L 18.834 12.239 L 19.672 12.493 C 20.254 12.668 20.805 12.933 21.304 13.28 L 21.995 13.761 L 23.634 12.74 C 23.973 13.107 24.276 13.504 24.54 13.928 L 23.139 15.244 L 23.46 16.063 C 23.67 16.632 23.792 17.23 23.82 17.835 L 23.859 18.705 L 25.664 19.364 C 25.581 19.866 25.447 20.358 25.266 20.834 Z M 17.979 21.2 C 15.506 21.2 13.96 18.524 15.197 16.384 C 16.434 14.244 19.525 14.244 20.762 16.384 C 21.048 16.88 21.197 17.443 21.192 18.015 C 21.189 19.783 19.748 21.211 17.979 21.2 Z M 18.021 16.063 C 16.537 16.046 15.591 17.64 16.318 18.933 C 17.045 20.226 18.9 20.248 19.657 18.972 C 19.833 18.675 19.926 18.335 19.926 17.99 C 19.926 16.934 19.077 16.075 18.021 16.063 Z"})});xn.displayName="SettingsIcon";xn.propTypes=z;var Zl=Xl.default.memo(xn,$);var Jl=g(C());var kn=m("react/jsx-runtime"),Pn=({width:e=36,height:t=36})=>(0,kn.jsx)("svg",{width:e,height:t,viewBox:"0 0 24 24",children:(0,kn.jsx)("path",{fill:"currentColor",d:"M 15.7 12 C 15.7 12.105 15.658 12.196 15.573 12.277 L 9.648 17.88 C 9.563 17.96 9.466 18 9.355 18 C 9.245 18 9.148 17.96 9.063 17.88 L 8.427 17.278 C 8.342 17.199 8.3 17.106 8.3 17.002 C 8.3 16.898 8.342 16.806 8.427 16.725 L 13.424 12 L 8.427 7.275 C 8.342 7.194 8.3 7.102 8.3 6.998 C 8.3 6.894 8.342 6.801 8.427 6.722 L 9.063 6.12 C 9.148 6.04 9.245 6 9.355 6 C 9.466 6 9.563 6.04 9.648 6.12 L 15.573 11.723 C 15.658 11.804 15.7 11.895 15.7 12 Z"})});Pn.displayName="ArrowRightIcon";Pn.propTypes=z;var ec=Jl.default.memo(Pn,$);var Rn=g(C());var ho=g(C());var tc=g(C());var Cn=m("react/jsx-runtime"),En=({width:e=36,height:t=36})=>(0,Cn.jsx)("svg",{width:e,height:t,viewBox:"0 0 24 24",children:(0,Cn.jsx)("path",{fill:"currentColor",d:"M 15.7 6.998 C 15.7 7.102 15.658 7.194 15.573 7.275 L 10.576 12 L 15.573 16.725 C 15.658 16.806 15.7 16.898 15.7 17.002 C 15.7 17.106 15.658 17.198 15.573 17.279 L 14.937 17.88 C 14.852 17.96 14.755 18 14.645 18 C 14.534 18 14.437 17.96 14.352 17.88 L 8.427 12.277 C 8.342 12.196 8.3 12.104 8.3 12 C 8.3 11.896 8.342 11.804 8.427 11.723 L 14.352 6.12 C 14.437 6.04 14.534 6 14.645 6 C 14.755 6 14.852 6.04 14.937 6.12 L 15.573 6.721 C 15.658 6.802 15.7 6.894 15.7 6.998 Z"})});En.displayName="ArrowLeftIcon";En.propTypes=z;var rc=tc.default.memo(En,$);var he=m("react/jsx-runtime"),oc=ho.default.forwardRef(({title:e,options:t,value:r,hiding:o,isFullscreen:n,onClick:i,goBack:s,...l},a)=>{let{i18n:c}=N(),[u,p]=ho.default.useState(!1);return ho.default.useEffect(()=>{p(!1),o&&setTimeout(()=>{p(!0)},100)},[o]),(0,he.jsxs)("div",{ref:a,...l,children:[(0,he.jsx)(ic,{children:(0,he.jsxs)(U,{onClick:s,isFullscreen:n,isText:!0,children:[(0,he.jsx)(rc,{width:28,height:28}),(0,he.jsx)("span",{children:e})]})}),(0,he.jsx)(sc,{show:u,children:(0,he.jsx)(ac,{children:t.map((f,h)=>(0,he.jsx)(lc,{selected:f.value===r,isFullscreen:n,children:(0,he.jsxs)(U,{onClick:()=>i(f.value),isFullscreen:n,isText:!0,children:[f.label,"isFullHD"in f&&f.isFullHD&&(0,he.jsx)(cc,{children:c.hd})]})},h))})})]})});oc.displayName="DropdownOverlay";var nc=oc;var Tn=m("react/jsx-runtime"),uc=S(nc)`
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
`,ic=S.div`
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
  & ${U} {
    width: 100%;
    font-size: 91%;
    padding: 20px 5px;
    height: 57px;
  }
`,pc=Rn.default.forwardRef(({show:e,...t},r)=>(0,Tn.jsx)("div",{ref:r,...t}));pc.displayName="DropdownContent";var sc=S(pc)`
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
`,ac=S.ul`
  padding: 10px 0;
`,dc=Rn.default.forwardRef(({selected:e,isFullscreen:t,...r},o)=>(0,Tn.jsx)("li",{ref:o,...r}));dc.displayName="DropdownItem";var lc=S(dc)`
  ${Le} ${Te} & {
    padding: 0 15px;

    & ${U} {
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
    & ${U}:hover {
      background: rgba(255, 255, 255, 0.1) !important;
    }
  }
`,cc=S.sub`
  font-size: 10px;
  font-weight: 500;
  color: #cb0e0b;
  margin-left: 3px;
`;var se=g(C());var xr={generalMenu:!1,speed:!1,quality:!1};var kr=({label:e,value:t,i18n:r})=>e==="quality"?`${t}p`:e==="speed"&&t==="1"?r.normal:t;var fc=({qualityOptions:e,live:t,i18n:r})=>{let o=[];return t||o.push({label:r.speed,value:"speed",options:[{label:"2",value:"2"},{label:"1.5",value:"1.5"},{label:"1.25",value:"1.25"},{label:"Normal",value:"1"},{label:"0.75",value:"0.75"},{label:"0.5",value:"0.5"},{label:"0.25",value:"0.25"}]}),e.length>0&&o.push({label:r.quality,value:"quality",options:e}),o};var Up=({live:e,fullHDQualityBreak:t,qualities:r,playbackRate:o,changeSettings:n,fullscreen:i})=>{var R,E,O,A,d,M;let{i18n:s}=N(),l=J(),a=se.default.useRef(null),[c,u]=se.default.useState(xr),[p,f]=se.default.useState({quality:{label:(E=(R=r[0])==null?void 0:R.label)!=null?E:"",value:(A=(O=r[0])==null?void 0:O.value)!=null?A:"",isFullHD:(M=(d=r[0])==null?void 0:d.isFullHD)!=null?M:!1},speed:{label:s.normal,value:"1"}});(0,se.useEffect)(()=>{let B=o.toString();f(x=>({...x,speed:{label:kr({label:"speed",value:B,i18n:s}),value:B}}))},[s,o]);let h=se.default.useCallback(B=>{B.stopPropagation(),l(x=>({type:"menuVisible",payload:x.subMenuVisible?!1:!x.menuVisible})),l({type:"subMenuVisible",payload:!1}),u(x=>({...xr,generalMenu:!x.speed&&!x.quality?!x.generalMenu:!1}))},[]),w=se.default.useCallback(B=>x=>{f(_=>({..._,[B]:{label:kr({label:B,value:x,i18n:s}),value:x,isFullHD:t!==void 0&&Number(x!=null?x:"0")>=t}})),l({menuVisible:!1,subMenuVisible:!1}),u(xr)},[t,s]),y=se.default.useCallback(B=>{l({menuVisible:!1,subMenuVisible:!0}),u(x=>({...x,generalMenu:!1,[B]:!0}))},[]),T=se.default.useCallback(B=>()=>{l({menuVisible:!0,subMenuVisible:!1}),u(x=>({...x,generalMenu:!0,[B]:!1}))},[]);se.default.useEffect(()=>{let B=x=>{var _;a.current&&(!a.current.contains(x.target)||!Array.from((_=a.current)==null?void 0:_.querySelectorAll("*")).map(P=>P.contains(x.target)).includes(!0))&&(l({menuVisible:!1,subMenuVisible:!1}),u(xr))};return document.body.addEventListener("click",B),()=>document.body.removeEventListener("click",B)},[]);let b=se.default.useMemo(()=>fc({qualityOptions:r,live:e,i18n:s}),[e,r,s]),v=se.default.useMemo(()=>Ae(i),[i]);return se.default.useEffect(()=>{n(p)},[p]),{dropdownRef:a,settings:c,values:p,iconProps:v,settingsOptions:b,handleButtonClick:h,handleMenuItemClick:y,handleMenuClick:w,handleGoBack:T}},mc=Up;var ae=m("react/jsx-runtime"),yc=({live:e,qualities:t,playbackRate:r,fullHDQualityBreak:o,changeSettings:n,fullscreen:i})=>{var T;let{i18n:s}=N(),{dropdownRef:l,settings:a,values:c,iconProps:u,settingsOptions:p,handleButtonClick:f,handleMenuItemClick:h,handleMenuClick:w,handleGoBack:y}=mc({live:e,fullHDQualityBreak:o,qualities:t,playbackRate:r,changeSettings:n,fullscreen:i});return(0,ae.jsxs)(Hl,{ref:l,children:[(0,ae.jsx)(Kl,{type:"button","aria-label":s.settings,title:s.settings,"aria-expanded":a.generalMenu,onClick:f,isFullscreen:i,isFullHD:(T=c.quality)==null?void 0:T.isFullHD,isExpanded:a.generalMenu,isTooltipActive:!0,children:(0,ae.jsx)(Zl,{...u})}),(0,ae.jsx)($l,{hiding:a.generalMenu,singleOption:e||t.length===0,isFullscreen:i,children:(0,ae.jsx)(Ul,{children:p.map((b,v)=>{var R;return(0,ae.jsx)(Ql,{children:(0,ae.jsxs)(U,{onClick:()=>h(b.value),isFullscreen:i,isText:!0,children:[(0,ae.jsx)(Wl,{children:b.label}),(0,ae.jsxs)(Yl,{children:[(0,ae.jsx)(jl,{children:(R=c[b.value])==null?void 0:R.label}),(0,ae.jsx)(ec,{width:28,height:28})]})]})},v)})})}),p.map((b,v)=>{var R;return(0,ae.jsx)(uc,{hiding:a[b.value],title:b.label,options:b.options,value:(R=c[b.value])==null?void 0:R.value,isFullscreen:i,onClick:w(b.value),goBack:y(b.value)},v)})]})};yc.propTypes={live:Oe.default.bool.isRequired,qualities:Oe.default.arrayOf(Oe.default.shape({label:Oe.default.string.isRequired,value:Oe.default.string.isRequired}).isRequired).isRequired,playbackRate:Oe.default.number.isRequired,fullHDQualityBreak:Oe.default.number,changeSettings:Oe.default.func.isRequired,fullscreen:Oe.default.bool.isRequired};var gc=hc.default.memo(yc,(e,t)=>e.live===t.live&&e.qualities===t.qualities&&e.playbackRate===t.playbackRate&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.changeSettings===t.changeSettings&&e.fullscreen===t.fullscreen);var Pr=g(C());var bc=g(C());var An=m("react/jsx-runtime"),Ln=({width:e=36,height:t=36})=>(0,An.jsx)("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",children:(0,An.jsx)("path",{d:"M 21.333 23.666 C 21.333 23.758 21.3 23.835 21.235 23.902 C 21.168 23.967 21.091 24 21 24 L 11 24 C 10.944 24 10.898 23.995 10.859 23.979 C 10.821 23.966 10.789 23.942 10.765 23.906 C 10.741 23.871 10.723 23.844 10.708 23.822 C 10.695 23.803 10.684 23.762 10.678 23.703 C 10.671 23.644 10.667 23.604 10.667 23.583 L 10.667 17.335 L 8.667 17.335 C 8.487 17.335 8.329 17.266 8.198 17.134 C 8.067 17.004 8 16.846 8 16.666 C 8 16.5 8.052 16.358 8.156 16.239 L 11.489 12.24 C 11.621 12.087 11.792 12.01 12 12.01 C 12.208 12.01 12.379 12.087 12.511 12.24 L 15.844 16.239 C 15.948 16.358 16 16.5 16 16.666 C 16 16.846 15.933 17.004 15.803 17.134 C 15.671 17.266 15.513 17.335 15.333 17.335 L 13.333 17.335 L 13.333 21.334 L 19.333 21.334 C 19.444 21.334 19.532 21.372 19.593 21.448 L 21.26 23.448 C 21.309 23.518 21.333 23.59 21.333 23.666 Z M 28 19.334 C 28 19.5 27.948 19.642 27.844 19.761 L 24.511 23.76 C 24.372 23.92 24.201 24 24 24 C 23.799 24 23.628 23.92 23.489 23.76 L 20.156 19.761 C 20.052 19.642 20 19.5 20 19.334 C 20 19.154 20.067 18.996 20.198 18.866 C 20.329 18.734 20.487 18.667 20.667 18.667 L 22.667 18.667 L 22.667 14.666 L 16.667 14.666 C 16.556 14.666 16.468 14.626 16.407 14.542 L 14.74 12.542 C 14.691 12.478 14.667 12.41 14.667 12.334 C 14.667 12.243 14.7 12.166 14.765 12.098 C 14.832 12.034 14.909 12 15 12 L 25 12 C 25.056 12 25.103 12.007 25.141 12.022 C 25.179 12.034 25.211 12.058 25.235 12.094 C 25.259 12.13 25.278 12.156 25.292 12.178 C 25.305 12.199 25.316 12.238 25.323 12.298 C 25.329 12.356 25.333 12.396 25.333 12.418 L 25.333 18.667 L 27.333 18.667 C 27.513 18.667 27.671 18.734 27.803 18.866 C 27.933 18.996 28 19.154 28 19.334 Z"})});Ln.displayName="InLoopIcon";Ln.propTypes=z;var Sc=bc.default.memo(Ln,$);var vc=g(C());var In=m("react/jsx-runtime"),On=({width:e=36,height:t=36})=>(0,In.jsx)("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor",children:(0,In.jsx)("path",{d:"M25 17H17v6H25zM29 25V10.981a1.989 1.989 0 0 0 -2 -1.981H9a1.989 1.989 0 0 0 -2 1.981V25c0 1.1 0.9 2 2 2h18c1.1 0 2 -0.9 2 -2m-2 0.019H9V10.969h18z"})});On.displayName="PipIcon";On.propTypes=z;var wc=vc.default.memo(On,$);var Mn=m("react/jsx-runtime"),Qp=({fullscreen:e,contextMenuRef:t,pictureInPictureEnabled:r,pip:o,loop:n=!1,requestPictureInPicture:i,exitPictureInPicture:s,onLoopClick:l})=>{let a=J(),[c,u]=Pr.default.useState({x:0,y:0}),p=Pr.default.useCallback(w=>{var X,ye;w.preventDefault();let y=((X=t.current)==null?void 0:X.offsetWidth)||0,T=((ye=t.current)==null?void 0:ye.offsetHeight)||0,b=w.pageX,v=w.pageY,R=document.documentElement,E=R.scrollLeft||0,O=R.scrollTop||0,A=R.clientLeft||0,d=R.clientTop||0,M=window.innerWidth||0,B=window.innerHeight||0,x=(window.pageXOffset||E)-(A||0),_=(window.pageYOffset||O)-(d||0),P=b+y>M+x?b-y:b,I=v+T>B+_?v-T:v;u({x:P,y:I}),a({type:"contextMenuVisible",payload:!0})},[t]),f=Pr.default.useMemo(()=>Ae(e),[e]),h=Pr.default.useMemo(()=>{let w=[{action:()=>l(),label:"En Bucle",icon:(0,Mn.jsx)(Sc,{...f}),isCheckable:!0,defaultChecked:n}];return r&&w.push({action:()=>o?s():i(),label:"Pantalla en pantalla",icon:(0,Mn.jsx)(wc,{...f}),isCheckable:!1,defaultChecked:!1}),w},[f,r,o,n,i,s]);return{handleContextMenu:p,contextMenuPosition:c,contextMenuItems:h}},xc=Qp;var gt=g(C()),Ic=g(m("react-dom"));var Dn=g(C());var _n=m("react/jsx-runtime"),kc=Dn.default.forwardRef(({showing:e,positionX:t,positionY:r,...o},n)=>(0,_n.jsx)("div",{ref:n,...o}));kc.displayName="StyledContextMenu";var Pc=S(kc)`
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
`,Cc=Dn.default.forwardRef(({isFullscreen:e,...t},r)=>(0,_n.jsx)("div",{ref:r,...t}));Cc.displayName="ContextMenuItem";var Ec=S(Cc)`
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
`,Rc=S.span`
  padding: 0 12px;
  font-size: 118%;
`,Tc=S.div`
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
`;Ce();var Ac=g(C());var Bn=m("react/jsx-runtime"),Fn=({width:e=36,height:t=36})=>(0,Bn.jsx)("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",children:(0,Bn.jsx)("path",{d:"M4.8 19.582 13.237 28.05 31.2 9.877 29.295 7.95 13.237 24.197 6.705 17.586Z"})});Fn.displayName="CheckedIcon";Fn.propTypes=z;var Lc=Ac.default.memo(Fn,$);var bt=m("react/jsx-runtime"),Oc=gt.default.forwardRef(({fullscreen:e,position:t,menuItems:r},o)=>{let n=N(),i=J(),s=gt.default.useRef(),[l,a]=gt.default.useState({}),c=gt.default.useMemo(()=>{var p;return e?(p=n.playerRef)==null?void 0:p.current:document.body},[e,n.playerRef]);gt.default.useEffect(()=>{let p=f=>{var h;s.current&&(!s.current.contains(f.target)||!Array.from((h=s.current)==null?void 0:h.querySelectorAll("*")).map(w=>w.contains(f.target)).includes(!0))&&i({type:"contextMenuVisible",payload:!1})};return window.addEventListener("click",p),()=>{window.removeEventListener("click",p)}},[i,s]);let u=(0,bt.jsx)(Pc,{ref:oi([o,s]),showing:n.contextMenuVisible,positionX:t.x,positionY:t.y,"data-itemindex":"0","aria-checked":n.contextMenuVisible,children:r.map((p,f)=>(0,bt.jsxs)(Ec,{onClick:()=>{p.action(),i({type:"contextMenuVisible",payload:!1}),a(h=>({...h,[f]:!h[f]}))},isFullscreen:e,children:[p.icon,(0,bt.jsx)(Rc,{children:p.label}),p.isCheckable&&(l[f]||p.defaultChecked)&&(0,bt.jsx)(Tc,{children:(0,bt.jsx)(Lc,{width:24,height:24})})]},f))});return Ic.default.createPortal(u,c)});Oc.displayName="ContextMenu";var Mc=gt.default.memo(Oc,(e,t)=>e.fullscreen===t.fullscreen&&e.position===t.position&&e.menuItems===t.menuItems);var Q=m("react/jsx-runtime"),Nn=Qe.default.forwardRef(({videoRef:e,playerRef:t,live:r=!1,hasResource:o=!1,hasAudio:n,prevented:i,loading:s,paused:l,ended:a,seeking:c,waiting:u,duration:p,buffered:f=null,currentTime:h,muted:w,volume:y,pictureInPictureEnabled:T,pip:b,fullscreen:v,qualities:R,spriteVTTFile:E,fullHDQualityBreak:O,playbackRate:A,loop:d,poster:M,onPlayClick:B,onPauseClick:x,onTogglePlay:_,changePlaybackRate:P,changePlayBackQuality:I,changeVolume:X,onMutedClick:ye,changeCurrentTime:St,requestPictureInPicture:le,exitPictureInPicture:pe,requestFullscreen:ce,exitFullscreen:vt,onSeeking:et,onLoopClick:Pe,onPreventedClick:Rr,kernelMsg:tt=null},wt)=>{let rt=J(),[xt,_e]=Qe.default.useState(!1),ge=Qe.default.useRef(),kt=Qe.default.useRef(null),{showControls:be,hideControls:de}=ql({hasResource:o,loading:s,prevented:i,paused:l,ended:a,waiting:u,seeking:c,kernelMsg:tt}),{contextMenuItems:ru,contextMenuPosition:ou,handleContextMenu:nu}=xc({fullscreen:v,contextMenuRef:kt,pip:b,loop:d,pictureInPictureEnabled:T,requestPictureInPicture:le,exitPictureInPicture:pe,onLoopClick:Pe});return Qe.default.useEffect(()=>{var Be;rt({videoRef:e,playerRef:t}),(Be=t.current)==null||Be.focus()},[e,t]),Qe.default.useImperativeHandle(wt,()=>({showControls:be,hideControls:de}),[be,de]),Qe.default.useEffect(()=>{var Be;if(t.current){let Pt=Fe=>{let Kt=oo[Fe.which||Fe.keyCode]||no[Fe.key];clearTimeout(ge.current),Kt==="ARROW_UP_KEY"||Kt==="ARROW_DOWN_KEY"?(_e(!0),ge.current=setTimeout(()=>_e(!1),2e3)):_e(!1)};return(Be=t.current)==null||Be.addEventListener("keydown",Pt),()=>{var Fe;(Fe=t.current)==null||Fe.removeEventListener("keydown",Pt)}}},[w,y,t,ge]),(0,Q.jsxs)(Te,{onContextMenu:nu,onMouseLeave:de,onMouseMove:be,onTouchStart:be,onMouseEnter:be,onClick:be,children:[(0,Q.jsx)(aa,{}),(0,Q.jsx)(Ys,{hasResource:o,prevented:i,paused:l,muted:w,currentTime:h,onClick:Rr}),M&&(0,Q.jsx)(ua,{style:{opacity:h<=0||a?1:0},children:(0,Q.jsx)(pa,{style:{backgroundImage:`url(${M})`}})}),(0,Q.jsx)(la,{children:(0,Q.jsxs)(ca,{style:{display:xt?"inline-block":"none"},children:[Math.round(y*100),"%"]})}),(0,Q.jsx)(Mc,{ref:kt,fullscreen:v,position:ou,menuItems:ru}),(0,Q.jsx)(ta,{hasResource:o,loading:s,paused:l,ended:a,waiting:u,seeking:c,kernelMsg:tt,onClick:_}),(0,Q.jsxs)(ba,{children:[r===!1&&(0,Q.jsx)(nl,{spriteVTTFile:E,currentTime:h,duration:p,buffered:f,onChange:St,onSeeking:et,fullscreen:v}),(0,Q.jsxs)(Aa,{extra:(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(gc,{live:r,qualities:R,playbackRate:A,fullscreen:v,fullHDQualityBreak:O,changeSettings:({quality:Be,speed:Pt})=>{var Fe,Kt;P(Number((Fe=Pt==null?void 0:Pt.value)!=null?Fe:1)),I((Kt=Number(Be==null?void 0:Be.value))!=null?Kt:0)}}),(0,Q.jsx)(Vl,{fullscreen:v,requestFullscreen:ce,exitFullscreen:vt})]}),fullscreen:v,children:[(0,Q.jsx)(Ml,{fullscreen:v,paused:l,ended:a,onPauseClick:x,onPlayClick:B}),(0,Q.jsx)(Cl,{fullscreen:v,isMuted:w,forceMuted:!n,volume:y,onMutedClick:ye,changeVolume:X}),(0,Q.jsx)(Al,{live:r,currentTime:h,duration:p})]})]}),(0,Q.jsx)(ia,{hasResource:o,loading:s,kernelMsg:tt})]})});Nn.displayName="PlayerSkin";Nn.propTypes={spriteVTTFile:L.default.string,videoRef:L.default.oneOfType([L.default.func,L.default.shape({current:L.default.instanceOf(HTMLVideoElement)})]).isRequired,playerRef:L.default.oneOfType([L.default.func,L.default.shape({current:L.default.instanceOf(HTMLDivElement)})]).isRequired,prevented:L.default.bool,waiting:L.default.bool,live:L.default.bool.isRequired,hasResource:L.default.bool.isRequired,loading:L.default.bool.isRequired,paused:L.default.bool.isRequired,ended:L.default.bool.isRequired,seeking:L.default.bool.isRequired,onPlayClick:L.default.func.isRequired,onPauseClick:L.default.func.isRequired,duration:L.default.number.isRequired,buffered:L.default.number.isRequired||null,currentTime:L.default.number.isRequired,changeCurrentTime:L.default.func.isRequired,muted:L.default.bool.isRequired,volume:L.default.number.isRequired,changeVolume:L.default.func.isRequired,onMutedClick:L.default.func.isRequired,changePlaybackRate:L.default.func.isRequired,pictureInPictureEnabled:L.default.bool.isRequired,pip:L.default.bool.isRequired,requestPictureInPicture:L.default.func.isRequired,exitPictureInPicture:L.default.func.isRequired,fullscreen:L.default.bool.isRequired,qualities:L.default.arrayOf(L.default.shape({label:L.default.string.isRequired,value:L.default.string.isRequired,isFullHD:L.default.bool.isRequired}).isRequired).isRequired,playbackRate:L.default.number.isRequired,loop:L.default.bool.isRequired,requestFullscreen:L.default.func.isRequired,exitFullscreen:L.default.func.isRequired,onLoopClick:L.default.func.isRequired,onPreventedClick:L.default.func.isRequired,kernelMsg:L.default.oneOfType([L.default.shape({type:L.default.string.isRequired,detail:L.default.string.isRequired}),L.default.oneOf([void 0])]),fullHDQualityBreak:L.default.number,poster:L.default.string.isRequired};var Dc=Qe.default.memo(Nn,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.videoRef===t.videoRef&&e.playerRef===t.playerRef&&e.live===t.live&&e.hasResource===t.hasResource&&e.loading===t.loading&&e.prevented===t.prevented&&e.paused===t.paused&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.pictureInPictureEnabled===t.pictureInPictureEnabled&&e.pip===t.pip&&e.fullscreen===t.fullscreen&&e.qualities===t.qualities&&e.playbackRate===t.playbackRate&&e.loop===t.loop&&e.kernelMsg===t.kernelMsg&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.poster===t.poster&&e.onPauseClick===t.onPauseClick&&e.onPlayClick===t.onPlayClick&&e.changeCurrentTime===t.changeCurrentTime&&e.onMutedClick===t.onMutedClick&&e.changeVolume===t.changeVolume&&e.changePlaybackRate===t.changePlaybackRate&&e.requestPictureInPicture===t.requestPictureInPicture&&e.exitPictureInPicture===t.exitPictureInPicture&&e.requestFullscreen===t.requestFullscreen&&e.exitFullscreen===t.exitFullscreen&&e.onSeeking===t.onSeeking&&e.onLoopClick===t.onLoopClick&&e.onPreventedClick===t.onPreventedClick);var Vn=g(C());var Cr=["i18n","contextMenuVisible","controlsHovering","hiding","menuVisible","subMenuVisible","timeSliding","volumeSliding","videoRef","playerRef"];function _c(e,t){try{if(!e||!t)throw new Error("Reducer params has not been provided!");if("type"in t){let{type:r,payload:o}=t;for(let n=0;n<Cr.length;n++){let i=Cr[n];if(Cr.includes(r)===!1)throw new Error(`Invalid type "${r}" in action payload!`);if(i===r)return{...e,[i]:o}}}else if(typeof t=="object"){if(Object.keys(t).length===0)throw new Error("Reducer action object is empty!");let r={...e};for(let o in t){let n=t[o];if(Cr.includes(o)===!1)throw new Error(`Invalid type "${o}" in action object!`);r={...r,[o]:n}}return r}return e}catch(r){return console.error("Error in AppReducer: ",r),e}}var Fc=m("react/jsx-runtime"),Bc=({children:e,language:t})=>{let[r,o]=Vn.default.useReducer(_c,{...Jo,i18n:At[t]}),n=Vn.default.useMemo(()=>({state:r,dispatch:o}),[r,o]);return(0,Fc.jsx)(zt.Provider,{value:n,children:e})};var Me=g(C());var Je=g(C()),Wp=({prevented:e,muted:t,videoRef:r,src:o,updateState:n})=>{let i=Je.default.useCallback(c=>{if(!r.current)return;let u=c.target.muted;c.target.volume===0&&(u=!0),n({volume:c.target.volume,muted:u})},[r]),s=Je.default.useCallback(()=>{if(!r.current)return;let c=r.current;if(c){let u=0;(e||t||c.volume===0)&&c.muted===!0&&(u=1),n({volume:u,muted:!c.muted})}},[r,e,t]),l=Je.default.useCallback(c=>{if(!r.current)return;let u=r.current,p=c===0;u&&(u.volume=c),c!==0&&u.muted===!0&&(p=!1),n({volume:c,muted:p})},[r]),a=Je.default.useCallback(c=>{if(!r.current)return;let p=r.current.volume,f=c(p);l(f)},[r,l]);return Je.default.useEffect(()=>()=>{r.current=null},[r]),Je.default.useEffect(()=>{if(!r.current)return()=>{};let c=r.current;return c?(c.addEventListener("volumechange",i),()=>{c.removeEventListener("volumechange",i)}):()=>{}},[i]),Je.default.useEffect(()=>{if(!r.current)return;let c=r.current;c&&(c.muted=!1,c.volume=1)},[o,r]),{onMutedClick:s,changeVolume:l,updateVolumeWithCallback:a}},Nc=Wp;var Yt=g(C()),jp=({updateState:e,videoRef:t,playerRef:r})=>{let o=Yt.default.useCallback(()=>{let l=r==null?void 0:r.current,a=t==null?void 0:t.current;if(!l){console.error("useVideoFullscreen: the player element is not ready");return}l.requestFullscreen?l.requestFullscreen():l.msRequestFullscreen?l.msRequestFullscreen():l.webkitRequestFullscreen?l.webkitRequestFullscreen():a&&a.webkitEnterFullScreen&&a.webkitEnterFullScreen()},[t,r]),n=Yt.default.useCallback(()=>{document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},[]),i=Yt.default.useCallback(()=>{let l=r==null?void 0:r.current;(document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement)===l?n():o()},[r,n,o]),s=Yt.default.useCallback(()=>{let l=r==null?void 0:r.current,a=document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement;e({fullscreen:!!l&&a===l})},[e,r]);return Yt.default.useEffect(()=>(document.addEventListener("fullscreenchange",s),document.addEventListener("webkitfullscreenchange",s),document.onmsfullscreenchange=s,()=>{document.removeEventListener("fullscreenchange",s),document.removeEventListener("webkitfullscreenchange",s),document.onmsfullscreenchange=null}),[s]),{requestFullscreen:o,exitFullscreen:n,requestToggleFullscreen:i}},Vc=jp;var Yp=({ref:e,playerRef:t,url:r,player:o,fullHDQualityBreak:n,sources:i,prevented:s,muted:l,updateState:a})=>{let{i18n:c}=N(),u=Me.default.useRef(null),p=Me.default.useRef(null),{requestFullscreen:f,exitFullscreen:h,requestToggleFullscreen:w}=Vc({updateState:({fullscreen:d})=>{a(M=>({...M,isFullScreen:d}))},videoRef:u,playerRef:t}),y=Me.default.useMemo(()=>i.length>0?i.map(d=>({label:kr({label:"quality",value:d.resolution.toString(),i18n:c}),value:d.resolution.toString(),isFullHD:n!==void 0&&d.resolution>=n})):[],[i,n,c]),{onMutedClick:T,changeVolume:b,updateVolumeWithCallback:v}=Nc({prevented:s,muted:l,videoRef:u,src:r,updateState:({muted:d,volume:M})=>a(B=>({...B,isMuted:d!=null?d:!1,volume:M!=null?M:0}))}),R=Me.default.useCallback(d=>{o&&(a(M=>({...M,played:d})),o.seekTo(d))},[o]),E=Me.default.useCallback(d=>{if(!o)return;let M=o.getCurrentTime()||0,B=o.getDuration()||0,x=d(M,B);R(x)},[o]),O=Me.default.useMemo(()=>({onPlayClick:()=>o&&a(d=>({...d,playing:!0})),onPauseClick:()=>o&&a(d=>({...d,playing:!1})),onTogglePlay:()=>o&&a(d=>({...d,playing:!d.playing})),changePlaybackRate:d=>o&&a(M=>({...M,playbackRate:d})),changePlayBackQuality:d=>{o&&a(M=>({...M,playbackQuality:d}))},requestPictureInPicture:()=>o&&a(d=>({...d,isPIP:!0})),exitPictureInPicture:()=>o&&a(d=>({...d,isPIP:!1})),onSeeking:d=>o&&a(M=>({...M,seeking:d})),onMutedClick:()=>o&&T(),onLoopClick:()=>o&&a(d=>({...d,loop:!d.loop})),onPreventedClick:()=>a(d=>({...d,isMuted:!1,volume:1})),changeCurrentTime:R}),[o]),A=Me.default.useCallback(d=>{var B;d.preventDefault(),d.stopPropagation();let M=oo[d.which||d.keyCode]||no[d.key];if(o)switch((B=p.current)==null||B.showControls(),M){case"SPACE_KEY":{a(x=>({...x,playing:!x.playing}));break}case"F_KEY":{w();break}case"MUTE_KEY":{T();break}case"ARROW_LEFT_KEY":{E(x=>{let _=x-5;return _<0?0:_});break}case"ARROW_RIGHT_KEY":{E((x,_)=>{let P=x+5;return P>=_?_:P});break}case"ARROW_UP_KEY":{v(x=>{let _=x+.1;return _>=1?1:_});break}case"ARROW_DOWN_KEY":{v(x=>{let _=x-.1;return _<0?0:_});break}default:break}},[o]);return Me.default.useImperativeHandle(e,()=>({handleKeyDown:A})),Me.default.useEffect(()=>{var d;u.current=(d=o==null?void 0:o.getPlayer())!=null?d:null},[o==null?void 0:o.getPlayer]),{playerSkinRef:p,videoRef:u,qualities:y,memorizedProps:O,handleKeyDown:A,requestFullscreen:f,exitFullscreen:h,changeVolume:b}},qc=Yp;var qn=m("react/jsx-runtime"),zn=Hn.default.forwardRef(({url:e,sources:t,playerRef:r,player:o,hasAudio:n,fullHDQualityBreak:i,live:s=!1,language:l=Object.keys(At)[0],hasResource:a=!1,buffered:c=null,kernelMsg:u=null,updateState:p,waiting:f=!1,prevented:h=!1,muted:w=!1,...y},T)=>{let{playerSkinRef:b,videoRef:v,qualities:R,memorizedProps:E,handleKeyDown:O,requestFullscreen:A,exitFullscreen:d,changeVolume:M}=qc({ref:T,playerRef:r,url:e,player:o,fullHDQualityBreak:i,sources:t,prevented:h,muted:w,updateState:p});return(0,qn.jsx)(Bc,{language:l,children:(0,qn.jsx)(Dc,{ref:b,videoRef:v,playerRef:r,qualities:R,hasAudio:n,handleKeyDown:O,requestFullscreen:A,exitFullscreen:d,changeVolume:M,fullHDQualityBreak:i,live:s,hasResource:a,buffered:c,kernelMsg:u,prevented:h,waiting:f,muted:w,...y,...E})})});zn.displayName="PlayerSkinWrapper";zn.propTypes={playerRef:F.default.oneOfType([F.default.func,F.default.shape({current:F.default.instanceOf(HTMLDivElement)})]).isRequired,player:F.default.instanceOf(Ee),live:F.default.bool,prevented:F.default.bool,waiting:F.default.bool,hasResource:F.default.bool.isRequired,hasAudio:F.default.bool.isRequired,loading:F.default.bool.isRequired,paused:F.default.bool.isRequired,ended:F.default.bool.isRequired,seeking:F.default.bool.isRequired,duration:F.default.number.isRequired,buffered:F.default.number.isRequired||null,currentTime:F.default.number.isRequired,muted:F.default.bool.isRequired,volume:F.default.number.isRequired,playbackRate:F.default.number.isRequired,pictureInPictureEnabled:F.default.bool.isRequired,fullHDQualityBreak:F.default.number,pip:F.default.bool.isRequired,fullscreen:F.default.bool.isRequired,kernelMsg:F.default.oneOfType([F.default.shape({type:F.default.string.isRequired,detail:F.default.string.isRequired}),F.default.oneOf([void 0])]),url:F.default.string,sources:F.default.arrayOf(F.default.shape({src:F.default.string.isRequired,resolution:F.default.number.isRequired}).isRequired).isRequired,loop:F.default.bool.isRequired};var Hc=Hn.default.memo(zn,(e,t)=>e.playerRef===t.playerRef&&e.player===t.player&&e.live===t.live&&e.hasResource===t.hasResource&&e.hasAudio===t.hasAudio&&e.loading===t.loading&&e.prevented===t.prevented&&e.paused===t.paused&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.playbackRate===t.playbackRate&&e.loop===t.loop&&e.pictureInPictureEnabled===t.pictureInPictureEnabled&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.pip===t.pip&&e.fullscreen===t.fullscreen&&e.kernelMsg===t.kernelMsg&&e.url===t.url&&e.sources===t.sources&&e.poster===t.poster);var yo={kernelError:null,seeking:!1,seek:0,played:0,loaded:0,duration:0,isFullScreen:!1,isEnded:!1,isPIP:!1,isLoading:!0,volume:.8,playbackRate:1,playbackQuality:null,videoUrl:null,hasAudio:!0,loop:!1,playing:!1,isMuted:!1};var zc=g(C());var Qc=m("react/jsx-runtime"),$c=zc.default.forwardRef(({children:e,...t},r)=>(0,Qc.jsx)(Le,{ref:r,...t,children:e}));$c.displayName="MediaPlayerWrapper";var Uc=$c;var Er=g(C());Ce();var Wc=e=>{let t=`rmp_${e}=`,r=document.cookie.split(";");for(let o=0;o<r.length;o++){let n=r[o];for(;n.charAt(0)===" ";)n=n.substring(1,n.length);if(n.indexOf(t)===0)return n.substring(t.length,n.length)}return null},jc=(e,t,r)=>{let o="";if(r){let n=new Date;n.setTime(n.getTime()+r*24*60*60*1e3),o=`; expires=${n.toUTCString()}`}document.cookie=`rmp_${e}=${t||""}${o}; path=/`};var Yc=async()=>{let e="https://files.testfile.org/PDF/10MB-TESTFILE.ORG.pdf",r=performance.now();try{let o=Wc("internet_speed");if(o)return parseFloat(o);await(await fetch(e,{mode:"no-cors"})).blob();let l=83886080/((performance.now()-r)/1e3*1024*1024);return jc("internet_speed",l.toString(),7),l}catch(o){return console.error("An error occurred while measuring the network speed: ",o),null}},Gc=(e,t)=>{let r=[{quality:144,minSpeed:.3},{quality:270,minSpeed:.5},{quality:360,minSpeed:.7},{quality:480,minSpeed:1},{quality:720,minSpeed:2.5},{quality:1080,minSpeed:5},{quality:2160,minSpeed:20}],o;for(let n=r.length-1;n>=0;n--){let i=r[n];if(e>=i.minSpeed){o=i.quality;break}}if(o&&t.includes(o))return o;for(let n=r.length-1;n>=0;n--){let i=r[n];if(t.includes(i.quality))return i.quality}};var Gp=({onBuffer:e,onBufferEnd:t,onDisablePIP:r,onDuration:o,onEnablePIP:n,onEnded:i,onError:s,onPause:l,onPlay:a,onPlayBackQualityChange:c,onPlayBackRateChange:u,onProgress:p,onReady:f,onSeek:h,onStart:w,onLoaded:y,onMount:T,updateState:b,playerState:v,extraProps:{url:R,sources:E,fullHDQualityBreak:O,prevented:A}})=>{let[d,M]=Er.default.useState(null),B=E.map(P=>P.resolution);if(E.length>0&&B.includes(O)===!1)throw new Error(`Invalid values in fullHDQualityBreak. Accepted resolutions are: ${B.join(", ")}`);Er.default.useEffect(()=>{(async()=>{var P,I;if(E&&E.length>0){let X=vo(E,"resolution");if(d===null&&X){let ye=await Yc(),St=Object.keys(X).map(Number),le=Gc(ye||0,St);if(ye!==null&&le)M((I=(P=X[le==null?void 0:le.toString()])==null?void 0:P.src)!=null?I:E[0].src),b(pe=>({...pe,playbackQuality:le}));else{let pe=E[0].src;M(pe),b(ce=>({...ce,playbackQuality:Number(pe)}))}}}})()},[E,d]);let x=Er.default.useMemo(()=>{var P,I;if(E&&E.length>0){let X=vo(E,"resolution");return v.playbackQuality===null||v.playbackQuality===void 0?d!==null?d:E[0].src:(I=(P=X[v.playbackQuality])==null?void 0:P.src)!=null?I:E[0].src}return R},[R,E,v.playbackQuality,d]);return{...Er.default.useMemo(()=>({onBuffer:e,onBufferEnd:t,onDisablePIP:P=>{r&&r(P),b(I=>({...I,isPIP:!1}))},onDuration:P=>{o&&o(P),b(I=>({...I,duration:P}))},onEnablePIP:P=>{n&&n(P),b(I=>({...I,isPIP:!0}))},onEnded:P=>{i&&i(P),b(I=>({...I,isEnded:!0}))},onError:(P,I,X,ye)=>{s(P,I,X,ye),["networkError"].includes(I==null?void 0:I.type)===!1&&b(le=>{var pe;return{...le,kernelError:I?{type:(I==null?void 0:I.type)||"UnknownError",detail:((pe=I==null?void 0:I.error)==null?void 0:pe.message)||"Something was wrong with the playback. Please try again."}:null,isLoading:!1,playing:!1}})},onPause:P=>{l&&l(P),b(I=>({...I,playing:!1}))},onPlay:P=>{a&&a(P),b(I=>{var X;return{...I,playing:!0,isEnded:!1,hasAudio:A?!0:(X=P==null?void 0:P.hasAudio)!=null?X:!1}})},onPlayBackQualityChange:P=>{c&&c(P),b(I=>({...I,playbackQuality:P}))},onPlayBackRateChange:P=>{u&&u(P),b(I=>({...I,playbackRate:P}))},onProgress:P=>{p&&p(P),v.seeking||b(I=>({...I,played:P.playedSeconds,loaded:P.loaded}))},onReady:P=>{f&&f(P),b(I=>({...I,isLoading:!1}))},onSeek:P=>{h&&h(P),b(I=>({...I,seek:P}))},onStart:()=>{w&&w()},onLoaded:y,onMount:T}),[v.seeking,A]),videoUrl:x!=null?x:d}},Kc=Gp;var Xc=S.div`
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  margin: auto;
`;var Gt=m("react/jsx-runtime"),Zc=De.default.forwardRef((e,t)=>{var p,f;let[r,o]=De.default.useState({}),[n,i]=De.default.useState({...yo,isPIP:e.pip,isMuted:e.muted,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,volume:e.muted?0:(p=e.volume)!=null?p:yo.volume});De.default.useEffect(()=>{i(h=>{var w;return{...h,isPIP:e.pip,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,volume:e.muted?0:(w=e.volume)!=null?w:yo.volume}})},[e.muted,e.volume,e.playing,e.pip,e.playbackRate,e.loop]);let s=De.default.useRef(null),l=De.default.useRef(null),a=De.default.useMemo(()=>e.prevented||e.playing&&e.muted,[e.muted,e.playing,e.prevented]);De.default.useEffect(()=>{if(e.player&&n.isLoading===!1){let w=e.player.getPlayer(),y=setTimeout(()=>{o({width:`${w.offsetWidth}px`,height:`${w.offsetHeight}px`})},500);return()=>{clearTimeout(y)}}},[e.player,n.isLoading]);let{videoUrl:c,...u}=Kc({onBuffer:e.onBuffer,onBufferEnd:e.onBufferEnd,onDisablePIP:e.onDisablePIP,onDuration:e.onDuration,onEnablePIP:e.onEnablePIP,onEnded:e.onEnded,onError:e.onError,onPause:e.onPause,onPlay:e.onPlay,onPlayBackQualityChange:e.onPlayBackQualityChange,onPlayBackRateChange:e.onPlayBackRateChange,onProgress:e.onProgress,onReady:e.onReady,onSeek:e.onSeek,onStart:e.onStart,onLoaded:e.onLoaded,onMount:e.onMount,updateState:i,playerState:n,extraProps:{url:e.url,sources:e.sources,fullHDQualityBreak:e.fullHDQualityBreak,prevented:a}});return(0,Gt.jsxs)(Uc,{tabIndex:0,role:"application",dir:"ltr",ref:l,onKeyDown:(f=s.current)==null?void 0:f.handleKeyDown,style:r,children:[(0,Gt.jsx)(Xc,{children:c&&(0,Gt.jsx)(Ee,{ref:t,activePlayer:e.activePlayer,controls:e.controls,loop:n.loop,muted:n.isMuted,pip:n.isPIP,playbackRate:n.playbackRate,playbackQuality:n.playbackQuality,playsinline:e.playsinline,progressInterval:e.progressInterval,stopOnUnmount:e.stopOnUnmount,volume:n.volume,url:c,width:e.width,height:e.height,playing:n.playing,config:{attributes:e.config.attributes,tracks:e.config.tracks,forceVideo:e.config.forceVideo,forceHLS:e.config.forceHLS,dashVersion:e.config.dashVersion,forceDASH:e.config.forceDASH,forceFLV:e.config.forceFLV,flvVersion:e.config.flvVersion,forceLoad:e.config.forceLoad,forceDisableHls:e.config.forceDisableHls,hlsOptions:e.config.hlsOptions,hlsVersion:e.config.hlsVersion,forceSafariHLS:e.config.forceSafariHLS,loopOnEnded:e.config.loopOnEnded},disableDeferredLoading:e.disableDeferredLoading,progressFrequency:e.progressFrequency,...u})}),(0,Gt.jsx)(Hc,{ref:s,playerRef:l,url:c,sources:e.sources,hasAudio:n.hasAudio,spriteVTTFile:e.spriteVTTFile,hasResource:typeof c=="string"||e.sources.length>0,kernelMsg:n.kernelError,loading:n.isLoading,prevented:a,muted:n.isMuted,paused:n.playing===!1,live:e.live,buffered:n.loaded,ended:n.isEnded,seeking:n.seeking,waiting:e.waiting,duration:n.duration,currentTime:n.played,volume:n.volume,playbackRate:n.playbackRate,pictureInPictureEnabled:!0,pip:n.isPIP,loop:n.loop,fullscreen:n.isFullScreen,fullHDQualityBreak:e.fullHDQualityBreak,language:e.language,poster:e.poster,updateState:i,player:e.player})]})});Zc.displayName="MediaPlayerSkin";var Jc=De.default.memo(Zc,(e,t)=>e.url===t.url&&e.sources===t.sources&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.spriteVTTFile===t.spriteVTTFile&&e.prevented===t.prevented&&e.waiting===t.waiting&&e.playing===t.playing&&e.loop===t.loop&&e.controls===t.controls&&e.volume===t.volume&&e.muted===t.muted&&e.paused===t.paused&&e.live===t.live&&e.pip===t.pip&&e.playbackRate===t.playbackRate&&e.width===t.width&&e.height===t.height&&e.progressInterval===t.progressInterval&&e.playsinline===t.playsinline&&e.pipeline===t.pipeline&&e.stopOnUnmount===t.stopOnUnmount&&e.activePlayer===t.activePlayer&&e.player===t.player&&e.progressFrequency===t.progressFrequency&&e.disableDeferredLoading===t.disableDeferredLoading&&e.language===t.language&&e.poster===t.poster&&e.config===t.config&&e.onReady===t.onReady&&e.onStart===t.onStart&&e.onPlay===t.onPlay&&e.onPause===t.onPause&&e.onBuffer===t.onBuffer&&e.onBufferEnd===t.onBufferEnd&&e.onEnded===t.onEnded&&e.onError===t.onError&&e.onDuration===t.onDuration&&e.onSeek===t.onSeek&&e.onPlayBackRateChange===t.onPlayBackRateChange&&e.onPlayBackQualityChange===t.onPlayBackQualityChange&&e.onProgress===t.onProgress&&e.onEnablePIP===t.onEnablePIP&&e.onDisablePIP===t.onDisablePIP&e.onLoaded===t.onLoaded&&e.onMount===t.onMount);Ce();var go=m("react/jsx-runtime"),Kp=typeof window!="undefined"&&window.document&&typeof document!="undefined",Xp=typeof global!="undefined"&&global.window&&global.window.document,Zp=Object.keys(Lo),Jp=Kp||Xp?Un.default.Suspense:()=>null,tu=e=>{var t;return t=class extends Un.default.Component{constructor(){super(...arguments);k(this,"player",null);k(this,"state",{});k(this,"references",{wrapper:n=>{this.wrapper=n},player:n=>{this.player=n}});k(this,"getDuration",()=>this.player?this.player.getDuration():null);k(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null);k(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null);k(this,"getInternalPlayer",(n="player")=>this.player?this.player.getInternalPlayer(n):null);k(this,"seekTo",(n,i,s)=>{if(!this.player)return null;this.player.seekTo(n,i,s)});k(this,"handleReady",()=>{this.props.onReady&&this.props.onReady(this)});k(this,"getActivePlayer",Ar((n,i)=>e.canPlay(n,i)?e:null));k(this,"getConfig",Ar((n,i,s)=>{let{config:l}=this.props;return eu.default.all([Ir.config,Ir.config[s]||{},l,l[s]||{}])}));k(this,"getAttributes",Ar(()=>ti(this.props,Zp)));k(this,"getSourceProps",()=>"sources"in this.props&&this.props.sources!==void 0?{sources:this.props.sources,fullHDQualityBreak:this.props.fullHDQualityBreak}:{sources:[]});k(this,"getUrlProp",()=>"url"in this.props&&this.props.url!==void 0?this.props.url:"");k(this,"renderActivePlayer",(n,i)=>{if(!n&&!i)return null;let s=this.getActivePlayer(n,i);if(!s)return null;let l=this.getConfig(n,i,s.key),a=this.getSourceProps(),c=this.getUrlProp();return(0,go.jsx)(Jc,{ref:this.references.player,activePlayer:s.lazyPlayer,player:this.player,controls:this.props.controls,loop:this.props.loop,muted:this.props.muted,pip:this.props.pip,playbackRate:this.props.playbackRate,playsinline:this.props.playsinline,progressInterval:this.props.progressInterval,stopOnUnmount:this.props.stopOnUnmount,volume:this.props.volume,url:c,sources:a.sources,width:this.props.width,height:this.props.height,playing:this.props.playing,config:{attributes:l.attributes,tracks:l.tracks,forceVideo:l.forceVideo,forceHLS:l.forceHLS,dashVersion:l.dashVersion,forceDASH:l.forceDASH,forceFLV:l.forceFLV,flvVersion:l.flvVersion,forceLoad:l.forceLoad,forceDisableHls:l.forceDisableHls,hlsOptions:l.hlsOptions,hlsVersion:l.hlsVersion,forceSafariHLS:l.forceSafariHLS,loopOnEnded:l.loopOnEnded},prevented:this.props.prevented,waiting:this.props.waiting,onBuffer:this.props.onBuffer,onBufferEnd:this.props.onBufferEnd,onDisablePIP:this.props.onDisablePIP,onDuration:this.props.onDuration,onEnablePIP:this.props.onEnablePIP,onEnded:this.props.onEnded,onError:this.props.onError,onPause:this.props.onPause,onPlay:this.props.onPlay,onPlayBackQualityChange:this.props.onPlayBackQualityChange,onPlayBackRateChange:this.props.onPlayBackRateChange,fullHDQualityBreak:a.fullHDQualityBreak,language:this.props.language,live:this.props.live,onProgress:this.props.onProgress,onReady:this.handleReady,onSeek:this.props.onSeek,onStart:this.props.onStart,onLoaded:this.props.onLoaded,onMount:this.props.onMount,disableDeferredLoading:this.props.disableDeferredLoading,progressFrequency:this.props.progressFrequency,spriteVTTFile:this.props.spriteVTTFile,poster:this.props.poster},s.key)})}shouldComponentUpdate(n,i){return!(0,$n.default)(this.props,n)||!(0,$n.default)(this.state,i)}componentDidUpdate(n){}render(){let{wrapper:n}=this.props,i=this.getUrlProp(),s=this.getSourceProps(),{className:l,...a}=this.getAttributes(),c=typeof n=="string"?this.references.wrapper:void 0;return(0,go.jsx)(n,{ref:c,"data-testid":"media-player-skin",className:`reactjs-media-player${l?` ${l}`:""}`,...a,children:(0,go.jsx)(Jp,{fallback:this.props.fallback,children:this.renderActivePlayer(i,s.sources)})})}},k(t,"displayName","MediaPlayer"),k(t,"propTypes",Lo),k(t,"defaultProps",Ir),k(t,"canPlay",(n,i)=>!!e.canPlay(n,i)),k(t,"canEnablePIP",n=>!!(e.canEnablePIP&&e.canEnablePIP(n))),t};var ed=tu(hi);return pu(td);})();
ReactJSMediaPlayer = ReactJSMediaPlayer.default;
//# sourceMappingURL=ReactJSMediaPlayer.js.map
