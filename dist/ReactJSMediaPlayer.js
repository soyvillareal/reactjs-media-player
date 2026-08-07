var ReactJSMediaPlayer=(()=>{var pc=Object.create;var tr=Object.defineProperty;var dc=Object.getOwnPropertyDescriptor;var fc=Object.getOwnPropertyNames;var mc=Object.getPrototypeOf,hc=Object.prototype.hasOwnProperty;var yc=(e,t,r)=>t in e?tr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var rr=(e,t)=>()=>(e&&(t=e(e=0)),t);var je=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),An=(e,t)=>{for(var r in t)tr(e,r,{get:t[r],enumerable:!0})},Ln=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of fc(t))!hc.call(e,n)&&n!==r&&tr(e,n,{get:()=>t[n],enumerable:!(o=dc(t,n))||o.enumerable});return e};var m=(e,t,r)=>(r=e!=null?pc(mc(e)):{},Ln(t||!e||!e.__esModule?tr(r,"default",{value:e,enumerable:!0}):r,e)),gc=e=>Ln(tr({},"__esModule",{value:!0}),e);var w=(e,t,r)=>(yc(e,typeof t!="symbol"?t+"":t,r),r);var T=je((cp,In)=>{In.exports=globalThis.React});var Mn=je((up,On)=>{On.exports=function(t,r,o){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");typeof r=="function"&&(o=r,r={}),r=r||{},o=o||function(){},i.type=r.type||"text/javascript",i.charset=r.charset||"utf8",i.async="async"in r?!!r.async:!0,i.src=t,r.attrs&&bc(i,r.attrs),r.text&&(i.text=""+r.text);var s="onload"in i?Rn:Sc;s(i,o),i.onload||Rn(i,o),n.appendChild(i)};function bc(e,t){for(var r in t)e.setAttribute(r,t[r])}function Rn(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function Sc(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}});function Eo(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}function Fn(e){return(e==null?void 0:e.mozHasAudio)||(e==null?void 0:e.webkitAudioDecodedByteCount)>0||(e==null?void 0:e.audioTracks)!==void 0&&e.audioTracks.length>0}function Tt(e){let t=e||document.createElement("video"),r=/iPhone|iPod/.test(navigator.userAgent)===!1;return t.webkitSupportsPresentationMode&&typeof t.webkitSetPresentationMode=="function"&&r}var Dn,_n,Bn,nt,Or,To=rr(()=>{Dn=m(T()),_n=m(Mn()),Bn=e=>(0,Dn.lazy)(async()=>{let t=await e();return typeof t.default=="function"?t:t.default});nt={},Or=function(t,r,o=null,n=()=>!0,i=_n.default){let s=Eo(r);return s&&n&&n(s)?Promise.resolve(s):new Promise((c,a)=>{if(nt[t]){nt[t].push({resolve:c,reject:a});return}nt[t]=[{resolve:c,reject:a}];let l=u=>{nt[t].forEach(p=>p.resolve(u)),nt[t]=null};if(o){let u=window[o];window[o]=function(){u&&u(),l(Eo(r))}}i(t,u=>{u?(nt[t].forEach(p=>p.reject(u)),nt[t]=null):o||l(Eo(r))})})}});function Nn(e,...t){let o=[].concat(...t),n={},i=Object.keys(e);for(let s of i)o.indexOf(s)===-1&&(n[s]=e[s]);return n}function Ze(e){return typeof window!="undefined"&&typeof window.MediaStream!="undefined"&&e instanceof window.MediaStream}function Vn(e){return/^blob:/.test(e)}function qn(e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r&&(r.current=t)})}}var it,Ao,_e=rr(()=>{it=e=>{let t=Math.floor(e/3600),r=Math.floor(e%3600/60),o=e%60;return t>0?`${String(t).padStart(2,"0")}:${String(r).padStart(2,"0")}:${String(o).padStart(2,"0")}`:`${String(r).padStart(2,"0")}:${String(o).padStart(2,"0")}`},Ao=(e,t)=>e.reduce((r,o)=>(r[o[t]]=o,r),{})});var vc,Lo,Io,Ro,wc,or,Oo=rr(()=>{_e();vc=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,Lo=/\.(m3u8)($|\?)/i,Io=/\.(mpd)($|\?)/i,Ro=/\.(flv)($|\?)/i,wc=(e,t)=>t&&t.length>0||Ze(e)||Vn(e)?!0:vc.test(e)||Lo.test(e)||Io.test(e)||Ro.test(e),or=wc});var Mo,xc,Do,Hn,zn,$n,jn,Un,Qn,Wn,Yn=rr(()=>{Mo=typeof navigator!="undefined",xc=Mo&&navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Do=Mo&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||xc)&&!window.MSStream,Hn=Mo&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!window.MSStream,zn="https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js",$n="Hls",jn="https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js",Un="dashjs",Qn="https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js",Wn="flvjs"});var Gn={};An(Gn,{default:()=>At});var Mr,At,Kn=rr(()=>{Mr=m(T());Yn();_e();To();Oo();At=class extends Mr.default.Component{constructor(){super(...arguments);w(this,"onReady",r=>this.props.onReady(r));w(this,"onPlay",r=>this.props.onPlay({...r,hasAudio:Fn(this.player)}));w(this,"onBuffer",r=>this.props.onBuffer(r));w(this,"onBufferEnd",r=>this.props.onBufferEnd(r));w(this,"onPause",r=>this.props.onPause(r));w(this,"onEnded",r=>this.props.onEnded(r));w(this,"onError",(r,o,n,i)=>this.props.onError(r,o,n,i));w(this,"onPlayBackRateChange",r=>{this.props.onPlayBackRateChange(r.target.playbackRate)});w(this,"onEnablePIP",r=>this.props.onEnablePIP(r));w(this,"onDisablePIP",r=>{let{onDisablePIP:o,playing:n}=this.props;o&&o(r),n&&this.play()});w(this,"onPresentationModeChange",r=>{if(this.player&&Tt(this.player)){let{webkitPresentationMode:o}=this.player;o==="picture-in-picture"?this.onEnablePIP(r):o==="inline"&&this.onDisablePIP(r)}});w(this,"onSeek",r=>{var o;this.props.onSeek((o=r.target)==null?void 0:o.currentTime)});w(this,"mute",()=>{this.player.muted=!0});w(this,"unmute",()=>{this.player.muted=!1});w(this,"renderTrack",(r,o)=>Mr.default.createElement("track",{key:o,...r}));w(this,"ref",r=>{this.player&&(this.prevPlayer=this.player),this.player=r})}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);let r=this.getSource(this.props.url);r&&(this.player.src=r),(Do||this.props.config.forceDisableHls)&&this.player.load()}componentDidUpdate(r){this.prevPlayer&&this.prevPlayer!==this.player&&(this.removeListeners(this.prevPlayer),this.listenersAttached=!1),this.listenersAttached||this.addListeners(this.player),this.props.url!==r.url&&Ze(this.props.url)===!1&&(this.player.srcObject=null)}componentWillUnmount(){this.player.removeAttribute("src"),this.removeListeners(this.player),this.listenersAttached=!1}addListeners(r){let{url:o,playsinline:n}=this.props;r&&(this.removeListeners(r),this.listenersAttached=!0,r.addEventListener("play",this.onPlay),r.addEventListener("waiting",this.onBuffer),r.addEventListener("playing",this.onBufferEnd),r.addEventListener("pause",this.onPause),r.addEventListener("seeked",this.onSeek),r.addEventListener("ended",this.onEnded),r.addEventListener("error",this.onError),r.addEventListener("ratechange",this.onPlayBackRateChange),r.addEventListener("enterpictureinpicture",this.onEnablePIP),r.addEventListener("leavepictureinpicture",this.onDisablePIP),r.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(o)===!1&&r.addEventListener("canplay",this.onReady),n&&(r.setAttribute("playsinline",""),r.setAttribute("webkit-playsinline",""),r.setAttribute("x5-playsinline","")))}removeListeners(r){r&&(r.removeEventListener("canplay",this.onReady),r.removeEventListener("play",this.onPlay),r.removeEventListener("waiting",this.onBuffer),r.removeEventListener("playing",this.onBufferEnd),r.removeEventListener("pause",this.onPause),r.removeEventListener("seeked",this.onSeek),r.removeEventListener("ended",this.onEnded),r.removeEventListener("error",this.onError),r.removeEventListener("ratechange",this.onPlayBackRateChange),r.removeEventListener("enterpictureinpicture",this.onEnablePIP),r.removeEventListener("leavepictureinpicture",this.onDisablePIP),r.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange))}shouldUseHLS(r){return Hn&&this.props.config.forceSafariHLS||this.props.config.forceHLS?!0:Do||this.props.config.forceDisableHls?!1:Lo.test(r)}shouldUseDASH(r){return Io.test(r)||this.props.config.forceDASH}shouldUseFLV(r){return Ro.test(r)||this.props.config.forceFLV}load(r,o){let{hlsVersion:n,hlsOptions:i,dashVersion:s,flvVersion:c}=this.props.config;if(o===!1)return;this.hls&&this.hls.destroy(),this.dash&&this.dash.reset(),this.flv&&this.flv.unload(),this.loadSequence=(this.loadSequence||0)+1;let a=this.loadSequence;if(this.shouldUseHLS(r))Or(zn.replace("VERSION",n),$n).then(l=>{a===this.loadSequence&&(this.hls=new l(i),this.hls.on(l.Events.MANIFEST_PARSED,()=>{this.props.onReady()}),this.hls.on(l.Events.ERROR,(u,p)=>{this.props.onError(u,p,this.hls,l)}),this.hls.loadSource(r),this.hls.attachMedia(this.player),this.props.onLoaded())}).catch(l=>this.props.onError(l));else if(this.shouldUseDASH(r))Or(jn.replace("VERSION",s),Un).then(l=>{a===this.loadSequence&&(this.dash=l.MediaPlayer().create(),this.dash.initialize(this.player,r,this.props.playing),this.dash.on("error",u=>{this.props.onError(u,null,this.dash,l)}),parseInt(s)<3?this.dash.getDebug().setLogToBrowserConsole(!1):this.dash.updateSettings({debug:{logLevel:l.LogLevel.LOG_LEVEL_NONE}}),this.props.onLoaded())}).catch(l=>this.props.onError(l));else if(this.shouldUseFLV(r))Or(Qn.replace("VERSION",c),Wn).then(l=>{a===this.loadSequence&&(this.flv=l.createPlayer({type:"flv",url:r}),this.flv.attachMediaElement(this.player),this.flv.on(l.Events.ERROR,(u,p)=>{this.props.onError(u,p,this.flv,l)}),this.flv.load(),this.props.onLoaded())}).catch(l=>this.props.onError(l));else if(Ze(r))try{this.player.srcObject=r}catch{this.player.src=window.URL.createObjectURL(r)}}getPlayer(){return this.player}play(){let r=this.player.play();r&&r.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.removeAttribute("src"),this.dash&&this.dash.reset()}seekTo(r,o=!0){this.player.currentTime=r,o===!1&&this.pause()}setVolume(r){this.player.volume=r}enablePIP(){if(this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player){let r=this.player.requestPictureInPicture();r&&r.catch&&r.catch(o=>this.props.onError(o))}else Tt(this.player)&&this.player.webkitPresentationMode!=="picture-in-picture"&&this.player.webkitSetPresentationMode("picture-in-picture")}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player?document.exitPictureInPicture():Tt(this.player)&&this.player.webkitPresentationMode!=="inline"&&this.player.webkitSetPresentationMode("inline")}setPlaybackRate(r){try{this.player.playbackRate=r}catch(o){this.props.onError(o)}}getDuration(){if(!this.player)return null;let{duration:r,seekable:o}=this.player;return r===1/0&&o.length>0?o.end(o.length-1):r}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;let{buffered:r}=this.player;if(r.length===0)return 0;let o=r.end(r.length-1),n=this.getDuration();return n!==null&&o>n?n:o}getSource(r){if(!(Ze(r)||this.shouldUseHLS(r)||this.shouldUseDASH(r)||this.shouldUseFLV(r)))return r}render(){var u;let{url:r,playing:o,loop:n,muted:i,config:s,width:c,height:a}=this.props,l={width:c==="auto"?c:"100%",height:a==="auto"?a:"100%"};return Mr.default.createElement("video",{"data-testid":"video-element",ref:this.ref,src:this.getSource(r),style:l,preload:"auto",autoPlay:o||void 0,controls:!1,muted:i,loop:n,...s.attributes},(u=s.tracks)==null?void 0:u.map(this.renderTrack))}};w(At,"displayName","PlayerCore"),w(At,"canPlay",or)});var ti=je((Pp,ei)=>{"use strict";var kc=function(t){return Pc(t)&&!Cc(t)};function Pc(e){return!!e&&typeof e=="object"}function Cc(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Ac(e)}var Ec=typeof Symbol=="function"&&Symbol.for,Tc=Ec?Symbol.for("react.element"):60103;function Ac(e){return e.$$typeof===Tc}function Lc(e){return Array.isArray(e)?[]:{}}function nr(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Lt(Lc(e),e,t):e}function Ic(e,t,r){return e.concat(t).map(function(o){return nr(o,r)})}function Rc(e,t){if(!t.customMerge)return Lt;var r=t.customMerge(e);return typeof r=="function"?r:Lt}function Oc(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function Zn(e){return Object.keys(e).concat(Oc(e))}function Jn(e,t){try{return t in e}catch{return!1}}function Mc(e,t){return Jn(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function Dc(e,t,r){var o={};return r.isMergeableObject(e)&&Zn(e).forEach(function(n){o[n]=nr(e[n],r)}),Zn(t).forEach(function(n){Mc(e,n)||(Jn(e,n)&&r.isMergeableObject(t[n])?o[n]=Rc(n,r)(e[n],t[n],r):o[n]=nr(t[n],r))}),o}function Lt(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||Ic,r.isMergeableObject=r.isMergeableObject||kc,r.cloneUnlessOtherwiseSpecified=nr;var o=Array.isArray(t),n=Array.isArray(e),i=o===n;return i?o?r.arrayMerge(e,t,r):Dc(e,t,r):nr(t,r)}Lt.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(o,n){return Lt(o,n,r)},{})};var _c=Lt;ei.exports=_c});var _o=je((Ep,oi)=>{var Vc=typeof Element!="undefined",qc=typeof Map=="function",Hc=typeof Set=="function",zc=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Dr(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,o,n;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(o=r;o--!==0;)if(!Dr(e[o],t[o]))return!1;return!0}var i;if(qc&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(o=i.next()).done;)if(!t.has(o.value[0]))return!1;for(i=e.entries();!(o=i.next()).done;)if(!Dr(o.value[1],t.get(o.value[0])))return!1;return!0}if(Hc&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(o=i.next()).done;)if(!t.has(o.value[0]))return!1;return!0}if(zc&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(o=r;o--!==0;)if(e[o]!==t[o])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(n=Object.keys(e),r=n.length,r!==Object.keys(t).length)return!1;for(o=r;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[o]))return!1;if(Vc&&e instanceof Element)return!1;for(o=r;o--!==0;)if(!((n[o]==="_owner"||n[o]==="__v"||n[o]==="__o")&&e.$$typeof)&&!Dr(e[n[o]],t[n[o]]))return!1;return!0}return e!==e&&t!==t}oi.exports=function(t,r){try{return Dr(t,r)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}});var ii=je((Tp,ni)=>{"use strict";var $c="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";ni.exports=$c});var ci=je((Ap,li)=>{"use strict";var jc=ii();function si(){}function ai(){}ai.resetWarningCache=si;li.exports=function(){function e(o,n,i,s,c,a){if(a!==jc){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ai,resetWarningCache:si};return r.PropTypes=r,r}});var J=je((Rp,ui)=>{ui.exports=ci()();var Lp,Ip});var xi=je((Gp,wi)=>{wi.exports=function(t,r,o,n){var i=o?o.call(n,t,r):void 0;if(i!==void 0)return!!i;if(t===r)return!0;if(typeof t!="object"||!t||typeof r!="object"||!r)return!1;var s=Object.keys(t),c=Object.keys(r);if(s.length!==c.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(r),l=0;l<s.length;l++){var u=s[l];if(!a(u))return!1;var p=t[u],d=r[u];if(i=o?o.call(n,p,d,u):void 0,i===!1||i===void 0&&p!==d)return!1}return!0}});var Rl=je((sy,Il)=>{Il.exports=globalThis.ReactDOM});var ap={};An(ap,{default:()=>sp});To();Oo();var Xn={key:"core",name:"PlayerCore",canPlay:or,canEnablePIP:e=>or(e)&&(document.pictureInPictureEnabled||Tt()),lazyPlayer:Bn(()=>Promise.resolve().then(()=>(Kn(),Gn)))};var Xt=m(T()),ic=m(ti());var ri=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Bc(e,t){return!!(e===t||ri(e)&&ri(t))}function Fc(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!Bc(e[r],t[r]))return!1;return!0}function Nc(e,t){t===void 0&&(t=Fc);var r,o=[],n,i=!1;function s(){for(var c=[],a=0;a<arguments.length;a++)c[a]=arguments[a];return i&&r===this&&t(c,o)||(n=e.apply(this,c),i=!0,r=this,o=c),n}return s}var ir=Nc;var Tn=m(_o());var Re=m(J());var pi={exitFullScreenMode:"Salir del modo de pantalla completa (f)",fullScreen:"Pantalla completa",play:"Reproducir",pause:"Pausar",normal:"Normal",settings:"Configuraci\xF3n",speed:"Velocidad",quality:"Calidad",hd:"HD",live:"En vivo",clickToUnmute:"Haga clic para desactivar el silencio",playbackStuckClickResumePlayback:"La reproducci\xF3n est\xE1 bloqueada, haga clic para reanudar la reproducci\xF3n.",mute:"Silenciar (m)",activateSound:"Activar sonido",thisVideoHasNoSound:"Este video no tiene sonido",timeBar:"Barra de tiempo",loop:"En Bucle",pictureInPicture:"Pantalla en pantalla"};var di={exitFullScreenMode:"Exit full screen mode (f)",fullScreen:"Full screen",play:"Play",pause:"Pause",normal:"Normal",settings:"Settings",speed:"Speed",quality:"Quality",hd:"HD",live:"Live",clickToUnmute:"Click to unmute",playbackStuckClickResumePlayback:"Playback is stuck, click to resume playback.",mute:"Mute (m)",activateSound:"Activate sound",thisVideoHasNoSound:"This video has no sound",timeBar:"Time bar",loop:"Loop",pictureInPicture:"Picture in picture"};var It={en:di,es:pi};var{string:Je,bool:he,number:sr,array:Uc,oneOfType:Bo,shape:fi,object:mi,func:ne}=Re.default,hi=Object.keys(It),Fo={url:Je,sources:Re.default.arrayOf(Re.default.shape({src:Re.default.string.isRequired,resolution:Re.default.number.isRequired}).isRequired),fullHDQualityBreak:Re.default.number,spriteVTTFile:Re.default.string,playing:he,loop:he,volume:sr,muted:he,playbackRate:sr,width:Bo([Je,sr]),height:Bo([Je,sr]),progressInterval:sr,playsinline:he,language:Re.default.oneOf(hi),poster:Je,pip:he,stopOnUnmount:he,fallback:Re.node,waiting:he,prevented:he,wrapper:Bo([Je,ne,fi({render:ne.isRequired})]),config:fi({attributes:mi,tracks:Uc,forceVideo:he,forceHLS:he,forceSafariHLS:he,forceDisableHls:he,forceDASH:he,forceFLV:he,hlsOptions:mi,hlsVersion:Je,dashVersion:Je,flvVersion:Je}),onReady:ne,onStart:ne,onPlay:ne,onPause:ne,onBuffer:ne,onBufferEnd:ne,onEnded:ne,onError:ne,onDuration:ne,onSeek:ne,onPlayBackRateChange:ne,onPlayBackQualityChange:ne,onProgress:ne,onEnablePIP:ne,onDisablePIP:ne},le=()=>{},_r={url:"",sources:[],playing:!1,loop:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,fallback:null,waiting:!1,prevented:!1,wrapper:"div",language:hi[0],poster:"",config:{attributes:{},tracks:[],forceVideo:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.5.7",dashVersion:"4.7.4",flvVersion:"1.6.2",forceDisableHls:!1},onReady:le,onStart:le,onPlay:le,onPause:le,onBuffer:le,onBufferEnd:le,onEnded:le,onError:le,onDuration:le,onSeek:le,onPlayBackRateChange:le,onPlayBackQualityChange:le,onProgress:le,onEnablePIP:le,onDisablePIP:le};var se=m(T());var No=m(T()),vi=m(_o());var Br=m(J()),{string:Rt,bool:ke,number:ar,array:Qc,oneOfType:yi,shape:Wc,object:gi,func:ce}=Br.default,bi={url:Rt,fullHDQualityBreak:Br.default.number,spriteVTTFile:Br.default.string,playing:ke,loop:ke,volume:ar,muted:ke,playbackRate:ar,width:yi([Rt,ar]),height:yi([Rt,ar]),progressInterval:ar,playsinline:ke,pip:ke,stopOnUnmount:ke,config:Wc({attributes:gi,tracks:Qc,forceVideo:ke,forceHLS:ke,forceSafariHLS:ke,forceDisableHls:ke,forceDASH:ke,forceFLV:ke,hlsOptions:gi,hlsVersion:Rt,dashVersion:Rt,flvVersion:Rt}),onReady:ce,onStart:ce,onPlay:ce,onPause:ce,onBuffer:ce,onBufferEnd:ce,onEnded:ce,onError:ce,onDuration:ce,onSeek:ce,onPlayBackRateChange:ce,onPlayBackQualityChange:ce,onProgress:ce,onEnablePIP:ce,onDisablePIP:ce},ue=()=>{},Si={playing:!1,loop:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,config:{attributes:{},tracks:[],forceVideo:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.5.7",dashVersion:"4.7.4",flvVersion:"1.6.2",forceDisableHls:!1},onReady:ue,onStart:ue,onPlay:ue,onPause:ue,onBuffer:ue,onBufferEnd:ue,onEnded:ue,onError:ue,onDuration:ue,onSeek:ue,onPlayBackRateChange:ue,onPlayBackQualityChange:ue,onProgress:ue,onEnablePIP:ue,onDisablePIP:ue};_e();var Yc=5e3,Be=class extends No.default.Component{constructor(){super(...arguments);w(this,"progressTimeout",0);w(this,"durationCheckTimeout",0);w(this,"seekOnPlayTimeout",0);w(this,"volumeTimeout",0);w(this,"prevPlayed",0);w(this,"prevLoaded",0);w(this,"player",null);w(this,"loadOnReady",null);w(this,"seekOnPlay",null);w(this,"mounted",!1);w(this,"isReady",!1);w(this,"isPlaying",!1);w(this,"isLoading",!0);w(this,"startOnPlay",!0);w(this,"onDurationCalled",!1);w(this,"handlePlayerMount",r=>{this.player=r,this.player.load(this.props.url),this.progress()});w(this,"getInternalPlayer",r=>this.player?this.player[r]:null);w(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady&&this.mounted){let r=this.getCurrentTime()||0,o=this.getSecondsLoaded(),n=this.getDuration();if(n){let i={playedSeconds:r,played:r/n,loadedSeconds:null};o!==null&&(i.loadedSeconds=o,i.loaded=o/n),(i.playedSeconds!==this.prevPlayed||i.loadedSeconds!==this.prevLoaded)&&this.props.onProgress({loaded:i.loaded,loadedSeconds:i.loadedSeconds,played:i.played,playedSeconds:i.playedSeconds}),this.prevPlayed=i.playedSeconds,i.loadedSeconds!==void 0&&(this.prevLoaded=i.loadedSeconds)}}this.isPlaying&&this.mounted&&(this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval))});w(this,"handleReady",()=>{if(this.mounted===!1)return;this.isReady=!0,this.isLoading=!1;let{onReady:r,playing:o,volume:n,muted:i}=this.props;r&&r(),!i&&n!==null&&this.player.setVolume(n),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):o&&this.player.play(),this.handleDurationCheck()});w(this,"handlePlay",r=>{this.isPlaying=!0,this.isLoading=!1;let{onStart:o,onPlay:n,playbackRate:i}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&i!==1&&this.player.setPlaybackRate(i),o&&o(),this.startOnPlay=!1),n&&n(r),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck(),clearTimeout(this.progressTimeout),this.progress()});w(this,"handlePause",r=>{this.isPlaying=!1,!this.isLoading&&this.props.onPause&&this.props.onPause(r)});w(this,"handleEnded",()=>{let{activePlayer:r,loop:o,onEnded:n}=this.props;if(o===!0){r.defaultProps!==void 0&&r.defaultProps.config!==void 0&&r.defaultProps.config.loopOnEnded&&this.seekTo(0);return}this.isPlaying=!1,n&&n()});w(this,"handleError",(r,o,n,i)=>{this.isLoading=!1,this.props.onError&&this.props.onError(r,o,n,i)});w(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);let r=this.getDuration();r?!this.onDurationCalled&&this.props.onDuration&&(this.props.onDuration(r),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)});w(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),clearTimeout(this.seekOnPlayTimeout),clearTimeout(this.volumeTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(r){if(!this.player)return;let{url:o,playing:n,volume:i,muted:s,playbackRate:c,playbackQuality:a,pip:l,activePlayer:u,disableDeferredLoading:p}=this.props;if((0,vi.default)(r.url,o)===!1){if(clearTimeout(this.progressTimeout),this.isLoading&&!(u!=null&&u.forceLoad)&&!p&&!Ze(o)){console.warn(`ReactJSMediaPlayer: the attempt to load ${o} is being deferred until the player has loaded`),this.loadOnReady=o;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(o,this.isReady),r.playbackQuality!==a&&this.player.seekTo(this.prevPlayed)}r.playing===!1&&n&&this.isPlaying===!1&&this.player.play(),r.playing&&n===!1&&this.isPlaying&&this.player.pause(),r.pip===!1&&l&&this.player.enablePIP&&this.player.enablePIP(),r.pip&&l===!1&&this.player.disablePIP&&this.player.disablePIP(),r.volume!==i&&i!==null&&this.player.setVolume(i),r.muted!==s&&(s?this.player.mute():(this.player.unmute(),i!==null&&(clearTimeout(this.volumeTimeout),this.volumeTimeout=setTimeout(()=>{this.mounted&&this.player&&this.player.setVolume(i)})))),r.playbackRate!==c&&this.player.setPlaybackRate&&this.player.setPlaybackRate(c)}getDuration(){return this.isReady===!1?null:this.player.getDuration()}getCurrentTime(){return this.isReady===!1?null:this.player.getCurrentTime()}getSecondsLoaded(){return this.isReady===!1?null:this.player.getSecondsLoaded()}getPlayer(){return this.player.getPlayer()}seekTo(r,o,n){if(this.isReady===!1){r!==0&&(this.seekOnPlay=r,this.seekOnPlayTimeout=setTimeout(()=>{this.seekOnPlay=null},Yc));return}if(o?o==="fraction":r>0&&r<1){let s=this.player.getDuration();if(!s){console.warn("ReactJSMediaPlayer: could not seek using fraction \u2013\xA0duration not yet available");return}this.player.seekTo(s*r,n);return}this.player.seekTo(r,n)}render(){let r=this.props.activePlayer;return r?No.default.createElement(r,{loop:this.props.loop,muted:this.props.muted,playsinline:this.props.playsinline,url:this.props.url,width:this.props.width,height:this.props.height,playing:this.props.playing,config:this.props.config,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError,onBuffer:this.props.onBuffer,onBufferEnd:this.props.onBufferEnd,onDisablePIP:this.props.onDisablePIP,onEnablePIP:this.props.onEnablePIP,onPlayBackRateChange:this.props.onPlayBackRateChange,onSeek:this.props.onSeek}):null}};w(Be,"displayName","PlayerProxy"),w(Be,"propTypes",bi),w(Be,"defaultProps",Si);var Rr=m(T()),V=m(J());var z=m(T()),O=m(J());var ge=m(T()),dt=m(J());var te=function(){return te=Object.assign||function(t){for(var r,o=1,n=arguments.length;o<n;o++){r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},te.apply(this,arguments)};function Ot(e,t,r){if(r||arguments.length===2)for(var o=0,n=t.length,i;o<n;o++)(i||!(o in t))&&(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o]);return e.concat(i||Array.prototype.slice.call(t))}var U=m(T()),es=m(xi());var j="-ms-",st="-moz-",H="-webkit-",Fr="comm",et="rule",Mt="decl";var ki="@import";var Nr="@keyframes";var Pi="@layer";var Vo=Math.abs,lr=String.fromCharCode,cr=Object.assign;function Ci(e,t){return K(e,0)^45?(((t<<2^K(e,0))<<2^K(e,1))<<2^K(e,2))<<2^K(e,3):0}function Vr(e){return e.trim()}function Oe(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,r){return e.replace(t,r)}function Dt(e,t,r){return e.indexOf(t,r)}function K(e,t){return e.charCodeAt(t)|0}function Fe(e,t,r){return e.slice(t,r)}function pe(e){return e.length}function qr(e){return e.length}function at(e,t){return t.push(e),e}function Ei(e,t){return e.map(t).join("")}function qo(e,t){return e.filter(function(r){return!Oe(r,t)})}var Hr=1,_t=1,Ti=0,Pe=0,ee=0,Bt="";function ur(e,t,r,o,n,i,s,c){return{value:e,root:t,parent:r,type:o,props:n,children:i,line:Hr,column:_t,length:s,return:"",siblings:c}}function Ue(e,t){return cr(ur("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function lt(e){for(;e.root;)e=Ue(e.root,{children:[e]});at(e,e.siblings)}function Ai(){return ee}function Li(){return ee=Pe>0?K(Bt,--Pe):0,_t--,ee===10&&(_t=1,Hr--),ee}function Ce(){return ee=Pe<Ti?K(Bt,Pe++):0,_t++,ee===10&&(_t=1,Hr++),ee}function tt(){return K(Bt,Pe)}function pr(){return Pe}function zr(e,t){return Fe(Bt,e,t)}function Ho(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ii(e){return Hr=_t=1,Ti=pe(Bt=e),Pe=0,[]}function Ri(e){return Bt="",e}function $r(e){return Vr(zr(Pe-1,zo(e===91?e+2:e===40?e+1:e)))}function Oi(e){for(;(ee=tt())&&ee<33;)Ce();return Ho(e)>2||Ho(ee)>3?"":" "}function Mi(e,t){for(;--t&&Ce()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return zr(e,pr()+(t<6&&tt()==32&&Ce()==32))}function zo(e){for(;Ce();)switch(ee){case e:return Pe;case 34:case 39:e!==34&&e!==39&&zo(ee);break;case 40:e===41&&zo(e);break;case 92:Ce();break}return Pe}function Di(e,t){for(;Ce()&&e+ee!==57;)if(e+ee===84&&tt()===47)break;return"/*"+zr(t,Pe-1)+"*"+lr(e===47?e:Ce())}function _i(e){for(;!Ho(tt());)Ce();return zr(e,Pe)}function Ni(e){return Ri(jr("",null,null,null,[""],e=Ii(e),0,[0],e))}function jr(e,t,r,o,n,i,s,c,a){for(var l=0,u=0,p=s,d=0,y=0,P=0,f=1,A=1,g=1,h=0,C="",v=n,M=i,R=o,x=C;A;)switch(P=h,h=Ce()){case 40:if(P!=108&&K(x,p-1)==58){Dt(x+=D($r(h),"&","&\f"),"&\f",Vo(l?c[l-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:x+=$r(h);break;case 9:case 10:case 13:case 32:x+=Oi(P);break;case 92:x+=Mi(pr()-1,7);continue;case 47:switch(tt()){case 42:case 47:at(Gc(Di(Ce(),pr()),t,r,a),a);break;default:x+="/"}break;case 123*f:c[l++]=pe(x)*g;case 125*f:case 59:case 0:switch(h){case 0:case 125:A=0;case 59+u:g==-1&&(x=D(x,/\f/g,"")),y>0&&pe(x)-p&&at(y>32?Fi(x+";",o,r,p-1,a):Fi(D(x," ","")+";",o,r,p-2,a),a);break;case 59:x+=";";default:if(at(R=Bi(x,t,r,l,u,n,c,C,v=[],M=[],p,i),i),h===123)if(u===0)jr(x,t,R,R,v,i,p,c,M);else switch(d===99&&K(x,3)===110?100:d){case 100:case 108:case 109:case 115:jr(e,R,R,o&&at(Bi(e,R,R,0,0,n,c,C,n,v=[],p,M),M),n,M,p,c,o?v:M);break;default:jr(x,R,R,R,[""],M,0,c,M)}}l=u=y=0,f=g=1,C=x="",p=s;break;case 58:p=1+pe(x),y=P;default:if(f<1){if(h==123)--f;else if(h==125&&f++==0&&Li()==125)continue}switch(x+=lr(h),h*f){case 38:g=u>0?1:(x+="\f",-1);break;case 44:c[l++]=(pe(x)-1)*g,g=1;break;case 64:tt()===45&&(x+=$r(Ce())),d=tt(),u=p=pe(C=x+=_i(pr())),h++;break;case 45:P===45&&pe(x)==2&&(f=0)}}return i}function Bi(e,t,r,o,n,i,s,c,a,l,u,p){for(var d=n-1,y=n===0?i:[""],P=qr(y),f=0,A=0,g=0;f<o;++f)for(var h=0,C=Fe(e,d+1,d=Vo(A=s[f])),v=e;h<P;++h)(v=Vr(A>0?y[h]+" "+C:D(C,/&\f/g,y[h])))&&(a[g++]=v);return ur(e,t,r,n===0?et:c,a,l,u,p)}function Gc(e,t,r,o){return ur(e,t,r,Fr,lr(Ai()),Fe(e,2,-2),0,o)}function Fi(e,t,r,o,n){return ur(e,t,r,Mt,Fe(e,0,o),Fe(e,o+1,-1),o,n)}function $o(e,t,r){switch(Ci(e,t)){case 5103:return H+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return H+e+e;case 4789:return st+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return H+e+st+e+j+e+e;case 5936:switch(K(e,t+11)){case 114:return H+e+j+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return H+e+j+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return H+e+j+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return H+e+j+e+e;case 6165:return H+e+j+"flex-"+e+e;case 5187:return H+e+D(e,/(\w+).+(:[^]+)/,H+"box-$1$2"+j+"flex-$1$2")+e;case 5443:return H+e+j+"flex-item-"+D(e,/flex-|-self/g,"")+(Oe(e,/flex-|baseline/)?"":j+"grid-row-"+D(e,/flex-|-self/g,""))+e;case 4675:return H+e+j+"flex-line-pack"+D(e,/align-content|flex-|-self/g,"")+e;case 5548:return H+e+j+D(e,"shrink","negative")+e;case 5292:return H+e+j+D(e,"basis","preferred-size")+e;case 6060:return H+"box-"+D(e,"-grow","")+H+e+j+D(e,"grow","positive")+e;case 4554:return H+D(e,/([^-])(transform)/g,"$1"+H+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,H+"$1"),/(image-set)/,H+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,H+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,H+"box-pack:$3"+j+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+H+e+e;case 4200:if(!Oe(e,/flex-|baseline/))return j+"grid-column-align"+Fe(e,t)+e;break;case 2592:case 3360:return j+D(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(o,n){return t=n,Oe(o.props,/grid-\w+-end/)})?~Dt(e+(r=r[t].value),"span",0)?e:j+D(e,"-start","")+e+j+"grid-row-span:"+(~Dt(r,"span",0)?Oe(r,/\d+/):+Oe(r,/\d+/)-+Oe(e,/\d+/))+";":j+D(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(o){return Oe(o.props,/grid-\w+-start/)})?e:j+D(D(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,H+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pe(e)-1-t>6)switch(K(e,t+1)){case 109:if(K(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+H+"$2-$3$1"+st+(K(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Dt(e,"stretch",0)?$o(D(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return D(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,n,i,s,c,a,l){return j+n+":"+i+l+(s?j+n+"-span:"+(c?a:+a-+i)+l:"")+e});case 4949:if(K(e,t+6)===121)return D(e,":",":"+H)+e;break;case 6444:switch(K(e,K(e,14)===45?18:11)){case 120:return D(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+H+(K(e,14)===45?"inline-":"")+"box$3$1"+H+"$2$3$1"+j+"$2box$3")+e;case 100:return D(e,":",":"+j)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return D(e,"scroll-","scroll-snap-")+e}return e}function Ft(e,t){for(var r="",o=0;o<e.length;o++)r+=t(e[o],o,e,t)||"";return r}function Vi(e,t,r,o){switch(e.type){case Pi:if(e.children.length)break;case ki:case Mt:return e.return=e.return||e.value;case Fr:return"";case Nr:return e.return=e.value+"{"+Ft(e.children,o)+"}";case et:if(!pe(e.value=e.props.join(",")))return""}return pe(r=Ft(e.children,o))?e.return=e.value+"{"+r+"}":""}function qi(e){var t=qr(e);return function(r,o,n,i){for(var s="",c=0;c<t;c++)s+=e[c](r,o,n,i)||"";return s}}function Hi(e){return function(t){t.root||(t=t.return)&&e(t)}}function zi(e,t,r,o){if(e.length>-1&&!e.return)switch(e.type){case Mt:e.return=$o(e.value,e.length,r);return;case Nr:return Ft([Ue(e,{value:D(e.value,"@","@"+H)})],o);case et:if(e.length)return Ei(r=e.props,function(n){switch(Oe(n,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":lt(Ue(e,{props:[D(n,/:(read-\w+)/,":"+st+"$1")]})),lt(Ue(e,{props:[n]})),cr(e,{props:qo(r,o)});break;case"::placeholder":lt(Ue(e,{props:[D(n,/:(plac\w+)/,":"+H+"input-$1")]})),lt(Ue(e,{props:[D(n,/:(plac\w+)/,":"+st+"$1")]})),lt(Ue(e,{props:[D(n,/:(plac\w+)/,j+"input-$1")]})),lt(Ue(e,{props:[n]})),cr(e,{props:qo(r,o)});break}return""})}}var $i={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var We=typeof process!="undefined"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",ts="active",Gr="data-styled-version",Vt="6.1.14",Zo=`/*!sc*/
`,Kr=typeof window!="undefined"&&"HTMLElement"in window,Kc=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""&&process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY),Xc={};var eo=Object.freeze([]),qt=Object.freeze({});function rs(e,t,r){return r===void 0&&(r=qt),e.theme!==r.theme&&e.theme||t||r.theme}var os=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Zc=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Jc=/(^-|-$)/g;function ji(e){return e.replace(Zc,"-").replace(Jc,"")}var eu=/(a)(d)/gi,Ur=52,Ui=function(e){return String.fromCharCode(e+(e>25?39:97))};function Wo(e){var t,r="";for(t=Math.abs(e);t>Ur;t=t/Ur|0)r=Ui(t%Ur)+r;return(Ui(t%Ur)+r).replace(eu,"$1-$2")}var jo,ns=5381,Nt=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},is=function(e){return Nt(ns,e)};function ss(e){return Wo(is(e)>>>0)}function tu(e){return e.displayName||e.name||"Component"}function Uo(e){return typeof e=="string"&&!0}var as=typeof Symbol=="function"&&Symbol.for,ls=as?Symbol.for("react.memo"):60115,ru=as?Symbol.for("react.forward_ref"):60112,ou={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},nu={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},cs={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},iu=((jo={})[ru]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jo[ls]=cs,jo);function Qi(e){return("type"in(t=e)&&t.type.$$typeof)===ls?cs:"$$typeof"in e?iu[e.$$typeof]:ou;var t}var su=Object.defineProperty,au=Object.getOwnPropertyNames,Wi=Object.getOwnPropertySymbols,lu=Object.getOwnPropertyDescriptor,cu=Object.getPrototypeOf,Yi=Object.prototype;function us(e,t,r){if(typeof t!="string"){if(Yi){var o=cu(t);o&&o!==Yi&&us(e,o,r)}var n=au(t);Wi&&(n=n.concat(Wi(t)));for(var i=Qi(e),s=Qi(t),c=0;c<n.length;++c){var a=n[c];if(!(a in nu||r&&r[a]||s&&a in s||i&&a in i)){var l=lu(t,a);try{su(e,a,l)}catch{}}}}return e}function Ht(e){return typeof e=="function"}function Jo(e){return typeof e=="object"&&"styledComponentId"in e}function ct(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Xr(e,t){if(e.length===0)return"";for(var r=e[0],o=1;o<e.length;o++)r+=t?t+e[o]:e[o];return r}function dr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Yo(e,t,r){if(r===void 0&&(r=!1),!r&&!dr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var o=0;o<t.length;o++)e[o]=Yo(e[o],t[o]);else if(dr(t))for(var o in t)e[o]=Yo(e[o],t[o]);return e}function en(e,t){Object.defineProperty(e,"toString",{value:t})}function Qe(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var uu=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,o=0;o<t;o++)r+=this.groupSizes[o];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var o=this.groupSizes,n=o.length,i=n;t>=i;)if((i<<=1)<0)throw Qe(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(var s=n;s<i;s++)this.groupSizes[s]=0}for(var c=this.indexOfGroup(t+1),a=(s=0,r.length);s<a;s++)this.tag.insertRule(c,r[s])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],o=this.indexOfGroup(t),n=o+r;this.groupSizes[t]=0;for(var i=o;i<n;i++)this.tag.deleteRule(o)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var o=this.groupSizes[t],n=this.indexOfGroup(t),i=n+o,s=n;s<i;s++)r+="".concat(this.tag.getRule(s)).concat(Zo);return r},e}(),Cd=1<<30,Wr=new Map,Zr=new Map,Yr=1,Qr=function(e){if(Wr.has(e))return Wr.get(e);for(;Zr.has(Yr);)Yr++;var t=Yr++;return Wr.set(e,t),Zr.set(t,e),t},pu=function(e,t){Yr=t+1,Wr.set(e,t),Zr.set(t,e)},du="style[".concat(We,"][").concat(Gr,'="').concat(Vt,'"]'),fu=new RegExp("^".concat(We,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),mu=function(e,t,r){for(var o,n=r.split(","),i=0,s=n.length;i<s;i++)(o=n[i])&&e.registerName(t,o)},hu=function(e,t){for(var r,o=((r=t.textContent)!==null&&r!==void 0?r:"").split(Zo),n=[],i=0,s=o.length;i<s;i++){var c=o[i].trim();if(c){var a=c.match(fu);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(pu(u,l),mu(e,u,a[3]),e.getTag().insertRules(l,n)),n.length=0}else n.push(c)}}},Gi=function(e){for(var t=document.querySelectorAll(du),r=0,o=t.length;r<o;r++){var n=t[r];n&&n.getAttribute(We)!==ts&&(hu(e,n),n.parentNode&&n.parentNode.removeChild(n))}};function Go(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var ps=function(e){var t=document.head,r=e||t,o=document.createElement("style"),n=function(c){var a=Array.from(c.querySelectorAll("style[".concat(We,"]")));return a[a.length-1]}(r),i=n!==void 0?n.nextSibling:null;o.setAttribute(We,ts),o.setAttribute(Gr,Vt);var s=Go();return s&&o.setAttribute("nonce",s),r.insertBefore(o,i),o},yu=function(){function e(t){this.element=ps(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var o=document.styleSheets,n=0,i=o.length;n<i;n++){var s=o[n];if(s.ownerNode===r)return s}throw Qe(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),gu=function(){function e(t){this.element=ps(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var o=document.createTextNode(r);return this.element.insertBefore(o,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),bu=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ki=Kr,Su={isServer:!Kr,useCSSOMInjection:!Kc},fr=function(){function e(t,r,o){t===void 0&&(t=qt),r===void 0&&(r={});var n=this;this.options=te(te({},Su),t),this.gs=r,this.names=new Map(o),this.server=!!t.isServer,!this.server&&Kr&&Ki&&(Ki=!1,Gi(this)),en(this,function(){return function(i){for(var s=i.getTag(),c=s.length,a="",l=function(p){var d=function(g){return Zr.get(g)}(p);if(d===void 0)return"continue";var y=i.names.get(d),P=s.getGroup(p);if(y===void 0||!y.size||P.length===0)return"continue";var f="".concat(We,".g").concat(p,'[id="').concat(d,'"]'),A="";y!==void 0&&y.forEach(function(g){g.length>0&&(A+="".concat(g,","))}),a+="".concat(P).concat(f,'{content:"').concat(A,'"}').concat(Zo)},u=0;u<c;u++)l(u);return a}(n)})}return e.registerId=function(t){return Qr(t)},e.prototype.rehydrate=function(){!this.server&&Kr&&Gi(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(te(te({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var o=r.useCSSOMInjection,n=r.target;return r.isServer?new bu(n):o?new yu(n):new gu(n)}(this.options),new uu(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(Qr(t),this.names.has(t))this.names.get(t).add(r);else{var o=new Set;o.add(r),this.names.set(t,o)}},e.prototype.insertRules=function(t,r,o){this.registerName(t,r),this.getTag().insertRules(Qr(t),o)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Qr(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),vu=/&/g,wu=/^\s*\/\/.*$/gm;function ds(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(o){return"".concat(t," ").concat(o)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=ds(r.children,t)),r})}function fs(e){var t,r,o,n=e===void 0?qt:e,i=n.options,s=i===void 0?qt:i,c=n.plugins,a=c===void 0?eo:c,l=function(d,y,P){return P.startsWith(r)&&P.endsWith(r)&&P.replaceAll(r,"").length>0?".".concat(t):d},u=a.slice();u.push(function(d){d.type===et&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(vu,r).replace(o,l))}),s.prefix&&u.push(zi),u.push(Vi);var p=function(d,y,P,f){y===void 0&&(y=""),P===void 0&&(P=""),f===void 0&&(f="&"),t=f,r=y,o=new RegExp("\\".concat(r,"\\b"),"g");var A=d.replace(wu,""),g=Ni(P||y?"".concat(P," ").concat(y," { ").concat(A," }"):A);s.namespace&&(g=ds(g,s.namespace));var h=[];return Ft(g,qi(u.concat(Hi(function(C){return h.push(C)})))),h};return p.hash=a.length?a.reduce(function(d,y){return y.name||Qe(15),Nt(d,y.name)},ns).toString():"",p}var xu=new fr,Ko=fs(),tn=U.default.createContext({shouldForwardProp:void 0,styleSheet:xu,stylis:Ko}),Ed=tn.Consumer,ku=U.default.createContext(void 0);function Jr(){return(0,U.useContext)(tn)}function Pu(e){var t=(0,U.useState)(e.stylisPlugins),r=t[0],o=t[1],n=Jr().styleSheet,i=(0,U.useMemo)(function(){var a=n;return e.sheet?a=e.sheet:e.target&&(a=a.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(a=a.reconstructWithOptions({useCSSOMInjection:!1})),a},[e.disableCSSOMInjection,e.sheet,e.target,n]),s=(0,U.useMemo)(function(){return fs({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,U.useEffect)(function(){(0,es.default)(r,e.stylisPlugins)||o(e.stylisPlugins)},[e.stylisPlugins]);var c=(0,U.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:s}},[e.shouldForwardProp,i,s]);return U.default.createElement(tn.Provider,{value:c},U.default.createElement(ku.Provider,{value:s},e.children))}var Cu=function(){function e(t,r){var o=this;this.inject=function(n,i){i===void 0&&(i=Ko);var s=o.name+i.hash;n.hasNameForId(o.id,s)||n.insertRules(o.id,s,i(o.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,en(this,function(){throw Qe(12,String(o.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ko),this.name+t.hash},e}(),Eu=function(e){return e>="A"&&e<="Z"};function Xi(e){for(var t="",r=0;r<e.length;r++){var o=e[r];if(r===1&&o==="-"&&e[0]==="-")return e;Eu(o)?t+="-"+o.toLowerCase():t+=o}return t.startsWith("ms-")?"-"+t:t}var ms=function(e){return e==null||e===!1||e===""},hs=function(e){var t,r,o=[];for(var n in e){var i=e[n];e.hasOwnProperty(n)&&!ms(i)&&(Array.isArray(i)&&i.isCss||Ht(i)?o.push("".concat(Xi(n),":"),i,";"):dr(i)?o.push.apply(o,Ot(Ot(["".concat(n," {")],hs(i),!1),["}"],!1)):o.push("".concat(Xi(n),": ").concat((t=n,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in $i||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return o};function rt(e,t,r,o){if(ms(e))return[];if(Jo(e))return[".".concat(e.styledComponentId)];if(Ht(e)){if(!Ht(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var n=e(t);return rt(n,t,r,o)}var i;return e instanceof Cu?r?(e.inject(r,o),[e.getName(o)]):[e]:dr(e)?hs(e):Array.isArray(e)?Array.prototype.concat.apply(eo,e.map(function(s){return rt(s,t,r,o)})):[e.toString()]}function ys(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ht(r)&&!Jo(r))return!1}return!0}var Tu=is(Vt),Au=function(){function e(t,r,o){this.rules=t,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&ys(t),this.componentId=r,this.baseHash=Nt(Tu,r),this.baseStyle=o,fr.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,o){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))n=ct(n,this.staticRulesId);else{var i=Xr(rt(this.rules,t,r,o)),s=Wo(Nt(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,s)){var c=o(i,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,c)}n=ct(n,s),this.staticRulesId=s}else{for(var a=Nt(this.baseHash,o.hash),l="",u=0;u<this.rules.length;u++){var p=this.rules[u];if(typeof p=="string")l+=p;else if(p){var d=Xr(rt(p,t,r,o));a=Nt(a,d+u),l+=d}}if(l){var y=Wo(a>>>0);r.hasNameForId(this.componentId,y)||r.insertRules(this.componentId,y,o(l,".".concat(y),void 0,this.componentId)),n=ct(n,y)}}return n},e}(),rn=U.default.createContext(void 0),Td=rn.Consumer;var Qo={};function Lu(e,t,r){var o=Jo(e),n=e,i=!Uo(e),s=t.attrs,c=s===void 0?eo:s,a=t.componentId,l=a===void 0?function(v,M){var R=typeof v!="string"?"sc":ji(v);Qo[R]=(Qo[R]||0)+1;var x="".concat(R,"-").concat(ss(Vt+R+Qo[R]));return M?"".concat(M,"-").concat(x):x}(t.displayName,t.parentComponentId):a,u=t.displayName,p=u===void 0?function(v){return Uo(v)?"styled.".concat(v):"Styled(".concat(tu(v),")")}(e):u,d=t.displayName&&t.componentId?"".concat(ji(t.displayName),"-").concat(t.componentId):t.componentId||l,y=o&&n.attrs?n.attrs.concat(c).filter(Boolean):c,P=t.shouldForwardProp;if(o&&n.shouldForwardProp){var f=n.shouldForwardProp;if(t.shouldForwardProp){var A=t.shouldForwardProp;P=function(v,M){return f(v,M)&&A(v,M)}}else P=f}var g=new Au(r,d,o?n.componentStyle:void 0);function h(v,M){return function(R,x,_){var q=R.attrs,k=R.componentStyle,b=R.defaultProps,E=R.foldedComponentIds,B=R.styledComponentId,F=R.target,$=U.default.useContext(rn),L=Jr(),I=R.shouldForwardProp||L.shouldForwardProp,re=rs(x,$,b)||qt,Z=function(kt,Xe,Pt){for(var $e,Le=te(te({},Xe),{className:void 0,theme:Pt}),Ct=0;Ct<kt.length;Ct+=1){var Ie=Ht($e=kt[Ct])?$e(Le):$e;for(var xe in Ie)Le[xe]=xe==="className"?ct(Le[xe],Ie[xe]):xe==="style"?te(te({},Le[xe]),Ie[xe]):Ie[xe]}return Xe.className&&(Le.className=ct(Le.className,Xe.className)),Le}(q,x,re),ae=Z.as||F,oe={};for(var G in Z)Z[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&Z.theme===re||(G==="forwardedAs"?oe.as=Z.forwardedAs:I&&!I(G,ae)||(oe[G]=Z[G]));var we=function(kt,Xe){var Pt=Jr(),$e=kt.generateAndInjectStyles(Xe,Pt.styleSheet,Pt.stylis);return $e}(k,Z),me=ct(E,B);return we&&(me+=" "+we),Z.className&&(me+=" "+Z.className),oe[Uo(ae)&&!os.has(ae)?"class":"className"]=me,_&&(oe.ref=_),(0,U.createElement)(ae,oe)}(C,v,M)}h.displayName=p;var C=U.default.forwardRef(h);return C.attrs=y,C.componentStyle=g,C.displayName=p,C.shouldForwardProp=P,C.foldedComponentIds=o?ct(n.foldedComponentIds,n.styledComponentId):"",C.styledComponentId=d,C.target=o?n.target:e,Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=o?function(M){for(var R=[],x=1;x<arguments.length;x++)R[x-1]=arguments[x];for(var _=0,q=R;_<q.length;_++)Yo(M,q[_],!0);return M}({},n.defaultProps,v):v}}),en(C,function(){return".".concat(C.styledComponentId)}),i&&us(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),C}function Zi(e,t){for(var r=[e[0]],o=0,n=t.length;o<n;o+=1)r.push(t[o],e[o+1]);return r}var Ji=function(e){return Object.assign(e,{isCss:!0})};function ye(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Ht(e)||dr(e))return Ji(rt(Zi(eo,Ot([e],t,!0))));var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?rt(o):Ji(rt(Zi(o,t)))}function Xo(e,t,r){if(r===void 0&&(r=qt),!t)throw Qe(1,t);var o=function(n){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,r,ye.apply(void 0,Ot([n],i,!1)))};return o.attrs=function(n){return Xo(e,t,te(te({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},o.withConfig=function(n){return Xo(e,t,te(te({},r),n))},o}var gs=function(e){return Xo(Lu,e)},S=gs;os.forEach(function(e){S[e]=gs(e)});var Iu=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=ys(t),fr.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,o,n){var i=n(Xr(rt(this.rules,r,o,n)),""),s=this.componentId+t;o.insertRules(s,s,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,o,n){t>2&&fr.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,r,o,n)},e}();function bs(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var o=ye.apply(void 0,Ot([e],t,!1)),n="sc-global-".concat(ss(JSON.stringify(o))),i=new Iu(o,n),s=function(a){var l=Jr(),u=U.default.useContext(rn),p=U.default.useRef(l.styleSheet.allocateGSInstance(n)).current;return l.styleSheet.server&&c(p,a,l.styleSheet,u,l.stylis),U.default.useLayoutEffect(function(){if(!l.styleSheet.server)return c(p,a,l.styleSheet,u,l.stylis),function(){return i.removeStyles(p,l.styleSheet)}},[p,a,l.styleSheet,u,l.stylis]),null};function c(a,l,u,p,d){if(i.isStatic)i.renderStyles(a,Xc,u,d);else{var y=te(te({},l),{theme:rs(l,p,s.defaultProps)});i.renderStyles(a,y,u,d)}}return U.default.memo(s)}var Ad=function(){function e(){var t=this;this._emitSheetCSS=function(){var r=t.instance.toString();if(!r)return"";var o=Go(),n=Xr([o&&'nonce="'.concat(o,'"'),"".concat(We,'="true"'),"".concat(Gr,'="').concat(Vt,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(r,"</style>")},this.getStyleTags=function(){if(t.sealed)throw Qe(2);return t._emitSheetCSS()},this.getStyleElement=function(){var r;if(t.sealed)throw Qe(2);var o=t.instance.toString();if(!o)return[];var n=((r={})[We]="",r[Gr]=Vt,r.dangerouslySetInnerHTML={__html:o},r),i=Go();return i&&(n.nonce=i),[U.default.createElement("style",te({},n,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new fr({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(t){if(this.sealed)throw Qe(2);return U.default.createElement(Pu,{sheet:this.instance},t)},e.prototype.interleaveWithNodeStream=function(t){throw Qe(3)},e}();var Ld="__sc-".concat(We,"__");var pt=m(T());var ut=m(J()),Q={width:ut.default.oneOfType([ut.default.number,ut.default.string]),height:ut.default.oneOfType([ut.default.number,ut.default.string])},W=(e,t)=>e.width===t.width&&e.height===t.height;var on=({width:e=36,height:t=36})=>pt.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},pt.default.createElement("path",{d:"M 22.5 18 C 22.5 16.235 21.48 14.71 20 13.975 L 20 16.185 L 22.455 18.64 C 22.485 18.43 22.5 18.215 22.5 18 Z"}),pt.default.createElement("path",{d:"M 25 18 C 25 18.94 24.795 19.825 24.46 20.64 L 25.975 22.155 C 26.625 20.91 27 19.5 27 18 C 27 13.72 24.005 10.14 20 9.23 L 20 11.295 C 22.89 12.155 25 14.83 25 18 Z"}),pt.default.createElement("polygon",{points:"18 10 15.91 12.09 18 14.18"}),pt.default.createElement("path",{d:"M 10.275 9 L 9 10.275 L 13.725 15 L 9 15 L 9 21 L 13 21 L 18 26 L 18 19.275 L 22.255 23.53 C 21.585 24.045 20.83 24.46 20 24.71 L 20 26.775 C 21.375 26.46 22.63 25.83 23.685 24.965 L 25.725 27 L 27 25.725 L 18 16.725 L 10.275 9 Z"}));on.displayName="MutedIcon";on.propTypes=Q;var to=pt.default.memo(on,W);var ro=m(T());var nn=({width:e=36,height:t=36})=>ro.default.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor"},ro.default.createElement("path",{d:"M 23.804 18.319 L 12.478 25.924 C 12.347 26.014 12.235 26.024 12.141 25.955 C 12.047 25.886 12 25.763 12 25.584 L 12 10.416 C 12 10.237 12.047 10.113 12.141 10.045 C 12.235 9.976 12.347 9.986 12.478 10.076 L 23.804 17.68 C 23.935 17.77 24 17.876 24 18 C 24 18.124 23.935 18.23 23.804 18.319 Z"}));nn.displayName="PlayIcon";nn.propTypes=Q;var zt=ro.default.memo(nn,W);var sn=S.div`
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
`,Ss=ye`
  font-size: 20px;
  margin-right: 8px;
`,vs=S(zt)`
  ${Ss}
`,ws=S(to)`
  ${Ss}
`,xs=S.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 5;
`;var Ps=m(T());var ks=m(T()),an={contextMenuVisible:!1,controlsHovering:!1,timeSliding:!1,volumeSliding:!1,hiding:!1,menuVisible:!1,subMenuVisible:!1,fullscreen:!1,playerRef:null,videoRef:null},$t=(0,ks.createContext)({state:an,dispatch:()=>null});var Ru=()=>{let{state:e}=(0,Ps.useContext)($t);return e},N=Ru;var Cs=({hasResource:e=!1,prevented:t,paused:r,muted:o,currentTime:n,onClick:i})=>{let{i18n:s}=N(),[c,a]=ge.default.useState(!1),l=ge.default.useCallback(()=>{if(e===!1||t===!1||r)return null;if(o===!0&&!c){let p=d=>{a(!0),i(d)};return ge.default.createElement(ge.default.Fragment,{key:"preventedClickedTip"},ge.default.createElement(xs,{onClick:p}),ge.default.createElement(sn,null,ge.default.createElement(ws,null),s.clickToUnmute))}return null},[e,t,c,i,s.clickToUnmute,o,r]);return[ge.default.useCallback(()=>e===!1||t===!1?null:n===0&&r?ge.default.createElement(ge.default.Fragment,{key:"preventedTip"},ge.default.createElement(sn,null,ge.default.createElement(vs,null),s.playbackStuckClickResumePlayback)):null,[n,r,e,s.playbackStuckClickResumePlayback,t])(),l()]};Cs.propTypes={hasResource:dt.default.bool.isRequired,prevented:dt.default.bool.isRequired,paused:dt.default.bool.isRequired,muted:dt.default.bool.isRequired,currentTime:dt.default.number.isRequired,onClick:dt.default.func.isRequired};var Es=ge.default.memo(Cs,(e,t)=>e.hasResource===t.hasResource&&e.prevented===t.prevented&&e.paused===t.paused&&e.muted===t.muted&&e.currentTime===t.currentTime&&e.onClick===t.onClick);var mr=m(T()),Ye=m(J());var ln=m(T());var Ts=ln.default.forwardRef(({showing:e,...t},r)=>ln.default.createElement("button",{ref:r,...t}));Ts.displayName="PlayButton";var As=S(Ts)`
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
`;var oo=m(T());var Ou=S.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  align-items: center;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
`,Mu=S.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
`,Du=S.div`
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
`,_u=()=>oo.default.createElement(Ou,null,oo.default.createElement(Mu,null,oo.default.createElement(Du,null))),no=_u;var Ls=({hasResource:e,loading:t,paused:r,ended:o,seeking:n,waiting:i,kernelMsg:s,onClick:c})=>e===!1||t||s?null:i||n?mr.default.createElement(no,null):mr.default.createElement(As,{showing:r||o,onClick:c},mr.default.createElement(zt,{width:"20%",height:"100%"}));Ls.propTypes={hasResource:Ye.default.bool.isRequired,loading:Ye.default.bool.isRequired,paused:Ye.default.bool.isRequired,ended:Ye.default.bool.isRequired,seeking:Ye.default.bool.isRequired,waiting:Ye.default.bool.isRequired,kernelMsg:Ye.default.object,onClick:Ye.default.func.isRequired};var Is=mr.default.memo(Ls,(e,t)=>e.hasResource===t.hasResource&&e.loading===t.loading&&e.paused===t.paused&&e.ended===t.ended&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.kernelMsg===t.kernelMsg&&e.onClick===t.onClick);var so=m(T()),io=m(J());var Rs=S.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 2em;
  background: rgba(0, 0, 0, 0.65);
`;var Os=({hasResource:e,loading:t,kernelMsg:r=null})=>e===!1?null:r?so.default.createElement(Rs,null,r.type,": ",r.detail):t?so.default.createElement(no,null):null;Os.propTypes={hasResource:io.default.bool.isRequired,loading:io.default.bool.isRequired,kernelMsg:io.default.object};var Ms=so.default.memo(Os,(e,t)=>e.hasResource===t.hasResource&&e.loading===t.loading&&e.kernelMsg===t.kernelMsg);var Ds=ye`
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
`;var _s=bs`
  * {
    margin: 0;
    padding: 0;
  }

  div[data-testid="media-player-skin"].reactjs-media-player {
    *, *::before, *::after {
      box-sizing: border-box;
    }
    ${Ds}
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
`,Ne=S.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  user-select: none;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
`,Bs=S.div`
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 10%;
  height: 55px !important;
  z-index: 2;
`,Fs=S.div`
  padding: 10px 20px;
  font-size: 140%;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  border-radius: 3px;
  color: #eee;
`,Ns=S.div`
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
`,Vs=S.div`
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
`;var ao={32:"SPACE_KEY",27:"ESCAPE_KEY",37:"ARROW_LEFT_KEY",39:"ARROW_RIGHT_KEY",38:"ARROW_UP_KEY",40:"ARROW_DOWN_KEY",77:"MUTE_KEY",16:"SHIFT_KEY",67:"SUBTITLES_KEY",70:"F_KEY",84:"T_KEY",78:"N_KEY"},lo={" ":"SPACE_KEY",Escape:"ESCAPE_KEY",ArrowLeft:"ARROW_LEFT_KEY",ArrowRight:"ARROW_RIGHT_KEY",ArrowUp:"ARROW_UP_KEY",ArrowDown:"ARROW_DOWN_KEY",m:"MUTE_KEY",Shift:"SHIFT_KEY",c:"SUBTITLES_KEY",f:"F_KEY",t:"T_KEY",n:"N_KEY"},Ge=e=>e?83:55,Ve=e=>e?{width:54,height:54}:{width:36,height:36};var yr=m(T()),hr=m(J());var cn=m(T());var qs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuQAAADyCAQAAACvvRhBAAADYklEQVR42u3cwY3DQAwEQdlQ/jE7BvEhor1VIdyjMeCtdV+fC4Cw258AQMgBWA250wqARQ6ARQ6ARQ5gkQNgkQMg5AA8DLnTCoBFDoBFDoBFDmCRA2CRA2CRA2CRA1jkAFjkAFjkAFjkABY5ABY5ABY5ABY5gEUOgEUOgEUOgJAD/FvIAbDIAbDIAbDIAYQcgGTIAbDIAbDIAbDIAYQcgGTIAbDIARByAMYhB8AiB0DIARiHHAAhB2Az5E4rAEIOwGbIAbDIARByAIQcQMgBSIYcAIscACEHYBxyACxyAIQcgHHIAbDIARByAMYhByAe8q8/AoBFDsBiyN3IAYQcgM2QA2CRAyDkAAg5wKkhB8AiB0DIARiHHIB4yH1rBcAiB2Az5G7kAEIOgJADMA45ABY5AEIOgJADCDkAyZADEA+5n+gDWOQAbIbcjRxAyAEQcgDGIQcgHnKvVgAscgA2Q+5GDiDkAAg5AOOQAxAPuVcrABY5AJshdyMHEHIAhBwAIQcQcgCSIQcgHnLvyAEscgA2Q+5GDiDkAAg5AEIOcGrIAYiH3PNDAIscAIscAIsc4NSQe7UCIOQACDkAQg4g5AAIOQBCDoCQAwg5AKGQAxAPuW+tAFjkAGyG3I0cQMgBEHIAhBxAyAEQcgCEHAAhBxByAEIhByAect9aAbDIAbDIAbDIAU4NuVcrAEIOgJADIOQAQg6AkAMg5AAIOYCQAyDkAAg5AEIOcELIAYiH3GdsASxyADZD7kYOEA+50wpAPOQAWOQAWOQAjEPun50A8ZA7rQDEQw5APOROKwBCDoCQAyDkAKeGHIB4yD0/BIiH3GkFQMgBEHIAxiEHIB5y/+wEsMgB2Ay5GzlAPOROKwDxkAMQD7nTCoCQAyDkAAg5gJADIOQACDkAQg4g5ACEQg5APOS+tQJgkQNgkQNgkQOcGnKvVgDiIXdaAYiHHIB4yJ1WAIQcACEHQMgBhBwAIQfg/ZADEA+5HwQBWOQAbIbcjRwgHnKnFYB4yAGIh9xpBUDIARByAIQcQMgBEHIA3g85APGQ+0EQgEUOgEUOgEUOcGrIvVoBEHIAhBwAIQcQcgCSIQfAIgdAyAEQcgAhB0DIARByAB6GHIB4yH3GFsAiB2Az5G7kAEIOgJADMA45AGk/i98EjA2eeD8AAAAASUVORK5CYII=";var Hs=cn.default.forwardRef(({hiding:e,...t},r)=>cn.default.createElement("div",{ref:r,...t}));Hs.displayName="Controls";var zs=S(Hs)`
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
    background-image: url(${qs});
    transition: opacity 0.3s;
  }
  ${({hiding:e})=>e?`
      opacity: 0;
    `:`
      opacity: 1;
    `}
`;var co=m(T());var Bu=()=>{let{state:e,dispatch:t}=co.default.useContext($t),r=co.default.useRef(e);return r.current=e,co.default.useCallback(n=>{if(typeof n=="function"){let i=n(r.current);t(i)}else t(n)},[t])},ie=Bu;var $s=({children:e})=>{let t=N(),r=ie(),o=yr.default.useCallback(()=>{if(typeof window!="undefined"&&window.matchMedia){let i=window.matchMedia("(hover: none), (pointer: coarse)");if(i&&i.matches)return}r({type:"controlsHovering",payload:!0})},[r]),n=yr.default.useCallback(()=>{r({type:"controlsHovering",payload:!1})},[r]);return yr.default.createElement(zs,{hiding:t.hiding,onMouseEnter:o,onMouseLeave:n},e)};$s.propTypes={children:hr.default.oneOfType([hr.default.arrayOf(hr.default.node),hr.default.node]).isRequired};var js=yr.default.memo($s,(e,t)=>e.children===t.children);var gr=m(T()),ft=m(J());var uo=m(T());var Us=(0,uo.forwardRef)(({isFullscreen:e,...t},r)=>uo.default.createElement("div",{ref:r,...t}));Us.displayName="ControlBar";var Qs=S(Us)`
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
`,Ws=ye`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  flex: 1;
`,Ys=S.div`
  ${Ws}
  justify-content: flex-start;
  margin-left: 15px;
`,Gs=S.div`
  ${Ws}
  justify-content: flex-end;
  margin-right: 15px;
`;var Ks=({children:e,extra:t,fullscreen:r})=>gr.default.createElement(Qs,{isFullscreen:r},gr.default.createElement(Ys,null,e),gr.default.createElement(Gs,null,t));Ks.propTypes={children:ft.default.oneOfType([ft.default.arrayOf(ft.default.node),ft.default.node]).isRequired,extra:ft.default.node.isRequired,fullscreen:ft.default.bool.isRequired};var Xs=gr.default.memo(Ks,(e,t)=>e.fullscreen===t.fullscreen&&e.children===t.children&&e.extra===t.extra);var Ee=m(T()),yt=m(J());var mt=m(T());var br=m(T());var Zs=br.default.forwardRef(({isFullscreen:e,...t},r)=>br.default.createElement("div",{ref:r,...t}));Zs.displayName="Tooltip";var po=S(Zs)`
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
`,Js=br.default.forwardRef(({isFullscreen:e,showTooltipOnly:t,...r},o)=>br.default.createElement("div",{ref:o,...r}));Js.displayName="Tip";var ea=S(Js)`
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
`;var qe=S.div`
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
`;var jt=S.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
`,ra=mt.default.forwardRef(({isFullscreen:e,...t},r)=>mt.default.createElement("button",{ref:r,...t}));ra.displayName="SliderHandle";var Ut=S(ra)`
  ${qe} ${Ne} & {
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
`,ta=`
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
`,oa=mt.default.forwardRef(({isSliding:e,isFullscreen:t,...r},o)=>mt.default.createElement("div",{ref:o,...r}));oa.displayName="Slider";var na=S(oa)`
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
  & ${jt} {
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
          & ${jt} {
            -moz-transform: none;
            -ms-transform: none;
            -webkit-transform: none;
            transform: none;
          }
          & ${Ut} {
            ${ta}
          }
          & ${po} {
            display: block;
          }
        `:`
        &:focus ${jt},
        &:hover ${jt} {
          -moz-transform: none;
          -ms-transform: none;
          -webkit-transform: none;
          transform: none;
        }
        &:focus ${Ut},
        &:hover ${Ut} {
          ${ta}
        }
      `}
`,ia=mt.default.forwardRef(({isFullscreen:e,...t},r)=>mt.default.createElement("div",{ref:r,...t}));ia.displayName="SlideRail";var sa=S(ia)`
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
`,aa=S.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  transform-origin: center left;
  background-color: rgba(255, 255, 255, 0.5);
`,la=S.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translate(-100%, 0);
  background: #f00;
`,ca=S.div`
  position: absolute;
  top: -4px;
  left: 0;
  width: 100%;
  height: 12px;
  transform: translate(-100%, 0);
  z-index: 4;
`;var de=m(T()),ot=m(J());var un=m(T());var ua=un.default.forwardRef(({isFullscreen:e,showing:t,...r},o)=>un.default.createElement("div",{ref:o,...r}));ua.displayName="TimelensThumbnail";var pa=S(ua)`
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
`,da=S.div`
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20px;
  z-index: 4;
`;var Fu=e=>"changedTouches"in e&&e.changedTouches&&1<=e.changedTouches.length?e.changedTouches[0].pageX:"clientX"in e?e.clientX:0,Sr=(e,t,r)=>{let o=Fu(e)-t.left;return 0>=o?0:o>=t.width?r:Math.round(r*o/t.width)},ma=({duration:e,currentTime:t,sliderWidth:r,elementWidth:o,offset:n=0})=>{if(e<=0||r<=0||o<=0)return 0;let i=t/e*r,s=o/2,c=s+n,a=r-s-n;return Math.min(a,Math.max(c,i))},ha=({duration:e,currentTime:t,sliderWidth:r,handleWidth:o})=>{if(e===0)return{trackTranslateX:"-100",handleTranslateX:"-100"};let n=ma({duration:e,currentTime:t,sliderWidth:r,elementWidth:o,offset:0}),i=(100*t/e-100).toFixed(1),s=(n/r*100-100).toFixed(1);return{trackTranslateX:i,handleTranslateX:s}},ya=({duration:e,currentTime:t,sliderWidth:r,tooltipWidth:o})=>(ma({duration:e,currentTime:t,sliderWidth:r,elementWidth:o,offset:5})/r*100).toFixed(1),fa=e=>{if(typeof e!="string")throw new TypeError("Time must be a string");if(e.indexOf(";")>0&&(e=e.replace(";",":"),!/\d{2}(:\d{2}){0,3}/i.test(e)))throw new TypeError("Time code must have the format `00:00:00`");let t=e.split(":"),r=0,o=0,n=0,i=0,s=25,c=Math.round(s),a=3600*c,l=60*c;switch(t.length){default:case 1:n=parseInt(t[0],10);break;case 2:o=parseInt(t[0],10),n=parseInt(t[1],10);break;case 3:r=parseInt(t[0],10),o=parseInt(t[1],10),n=parseInt(t[2],10);break;case 4:r=parseInt(t[0],10),o=parseInt(t[1],10),n=parseInt(t[2],10),i=parseInt(t[3],10)}let u=(a*r+l*o+s*n+i)/s;return parseFloat(u.toFixed(3))},ga=e=>{var t=e.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+o,left:t.left+r}},ba=e=>{let t=0,r=0,o=[];for(var n of e.split(`
`))if(/-->/.test(n)){let[i,s]=(n.match(/(.*) --> (.*)/)||[]).slice(1);t=fa(i),r=fa(s)}else if(/png/.test(n)){let[i,s,c,a,l]=(n.match(/(.*)\?xywh=(.*),(.*),(.*),(.*)/)||[]).slice(1);o.push({from:t,to:r,file:i,x:s,y:c,w:a,h:l})}return o};var pn=de.default.forwardRef(({spriteVTTFile:e,sliderRef:t,duration:r=0,fullscreen:o},n)=>{let i=N(),[s,c]=de.default.useState([]),a=de.default.useRef(null),[l,u]=de.default.useState(!1),[p,d]=de.default.useState({backgroundImage:"",backgroundPosition:"-480px -360px",width:"160px",height:"90px",marginLeft:"0px"});de.default.useEffect(()=>{(async()=>{try{let f=await fetch(e).then(g=>g.text()),A=ba(f);c(A)}catch(f){console.error("Error parsing VTT file: ",f)}})()},[e]);let y=de.default.useCallback(async f=>{var C;let A=a==null?void 0:a.current,g=t==null?void 0:t.current;if(A&&g&&s.length>0&&i.menuVisible===!1&&i.subMenuVisible===!1){let v=ga(g),M=f==null?void 0:f.pageX;f!=null&&f.originalEvent&&((C=f==null?void 0:f.originalEvent)!=null&&C.changedTouches)?M=f.originalEvent.changedTouches[0].pageX:f!=null&&f.changedTouches&&(M=f.changedTouches[0].pageX);let x=(M-v.left-g.offsetLeft)/g.offsetWidth,_=x*r,q=x*g.offsetWidth;for(var h of s)if(_>=h.from&&_<=h.to){let k=Math.min(Math.max(0,q-A.offsetWidth/2),g.offsetWidth-A.offsetWidth);d({backgroundImage:`url(${h.file})`,backgroundPosition:-h.x+"px "+-h.y+"px",width:h.w+"px",height:h.h+"px",marginLeft:k+"px"});break}u(!0)}},[a,t,r,s,i.menuVisible,i.subMenuVisible]),P=de.default.useCallback(()=>{u(!1)},[]);return de.default.useImperativeHandle(n,()=>({handleTimelens:y,setShowTimelens:u})),de.default.createElement(de.default.Fragment,null,de.default.createElement(da,{onMouseMove:y,onMouseEnter:y,onMouseLeave:P}),de.default.createElement(pa,{ref:a,showing:l||i.timeSliding,isFullscreen:o,style:p}))});pn.displayName="Timelens";pn.propTypes={sliderRef:ot.default.oneOfType([ot.default.func,ot.default.shape({current:ot.default.instanceOf(HTMLDivElement)})]),spriteVTTFile:ot.default.string.isRequired,duration:ot.default.number.isRequired,fullscreen:ot.default.bool.isRequired};var Sa=de.default.memo(pn,(e,t)=>e.fullscreen===t.fullscreen&&e.sliderRef===t.sliderRef&&e.spriteVTTFile===t.spriteVTTFile&&e.duration===t.duration);var ht=m(T()),He=m(J());_e();var va=({sliderRef:e,duration:t,tooltip:r,showTooltip:o,showTooltipOnly:n=!1,fullscreen:i})=>{let s=ht.default.useRef(null),[c,a]=ht.default.useState("0");return ht.default.useEffect(()=>{var u,p;let l=ya({duration:t,currentTime:r,sliderWidth:((u=e.current)==null?void 0:u.offsetWidth)||0,tooltipWidth:((p=s.current)==null?void 0:p.offsetWidth)||0});a(l)},[t,r,s,e]),ht.default.createElement(po,{style:{display:o?"block":"",transform:`translateX(${c}%)`},isFullscreen:i},ht.default.createElement(ea,{ref:s,isFullscreen:i,showTooltipOnly:n},it(r)))};va.propTypes={sliderRef:He.default.oneOfType([He.default.func,He.default.shape({current:He.default.instanceOf(HTMLDivElement)})]),duration:He.default.number.isRequired,tooltip:He.default.number.isRequired,showTooltip:He.default.bool.isRequired,showTooltipOnly:He.default.bool,fullscreen:He.default.bool.isRequired};var wa=ht.default.memo(va,(e,t)=>e.sliderRef===t.sliderRef&&e.duration===t.duration&&e.tooltip===t.tooltip&&e.showTooltip===t.showTooltip&&e.showTooltipOnly===t.showTooltipOnly&&e.fullscreen===t.fullscreen);var X=m(T());var Nu=({timelensRef:e,currentTime:t,duration:r,onChange:o,onSeeking:n})=>{let i=ie(),s=X.default.useRef(null),c=X.default.useRef(null),[a,l]=X.default.useState(!1),[u,p]=X.default.useState(!1),[d,y]=X.default.useState({left:0,width:0}),[P,f]=X.default.useState({value:0,tooltip:0}),A=X.default.useCallback(E=>{E.preventDefault();let B=E.currentTarget.getBoundingClientRect(),F=Sr(E,B,r);i({type:"timeSliding",payload:!1}),p(!1),o(F),n(!1),e.current&&e.current.handleTimelens(E)},[o,r,i,e,n]),g=X.default.useCallback(E=>{if(E.preventDefault(),s.current!==null){let B=s.current.getBoundingClientRect();i({type:"timeSliding",payload:!0}),y(F=>({...F,left:B.left,width:B.width})),e.current&&e.current.handleTimelens(E),p(!0),n(!0)}},[e,i,n]),h=X.default.useCallback(E=>{E.preventDefault();let B=Sr(E,{left:d.left,width:d.width},r);i({type:"timeSliding",payload:!1}),p(!1),f(F=>({...F,value:B})),o(B),n(!1),e.current&&e.current.setShowTimelens(!1)},[o,r,d,i,n,e]),C=X.default.useRef(null),v=X.default.useCallback(E=>{var $,L,I,re,Z,ae,oe,G;E.preventDefault(),C.current&&cancelAnimationFrame(C.current);let B=(re=(I=E.clientX)!=null?I:(L=($=E.touches)==null?void 0:$[0])==null?void 0:L.clientX)!=null?re:0,F=(G=(oe=E.pageX)!=null?oe:(ae=(Z=E.touches)==null?void 0:Z[0])==null?void 0:ae.pageX)!=null?G:0;C.current=requestAnimationFrame(()=>{let we=Sr({clientX:B},{left:d.left,width:d.width},r);f(me=>({...me,value:we})),e.current&&e.current.handleTimelens({clientX:B,pageX:F}),C.current=null})},[r,d,e]);X.default.useEffect(()=>(u&&(document.addEventListener("mousemove",v),document.addEventListener("mouseup",h),document.addEventListener("touchmove",v),document.addEventListener("touchcancel",h),document.addEventListener("touchend",h)),()=>{document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",h),document.removeEventListener("touchmove",v),document.removeEventListener("touchcancel",h),document.removeEventListener("touchend",h),C.current&&(cancelAnimationFrame(C.current),C.current=null)}),[u,v,h]);let M=X.default.useCallback(E=>{if(E.preventDefault(),s.current!==null){let B=s.current.getBoundingClientRect();y(F=>({...F,left:B.left,width:B.width})),e.current&&e.current.handleTimelens(E)}},[e]),R=X.default.useCallback(E=>{E.preventDefault();let B=Sr(E,{left:d.left,width:d.width},r);f(F=>({...F,tooltip:B})),e.current&&e.current.handleTimelens(E)},[r,d.left,d.width,e]),x=X.default.useRef(null),_=X.default.useCallback(()=>{x.current&&clearTimeout(x.current),x.current=setTimeout(()=>{if(!s||!s.current)return;let E=s.current.getBoundingClientRect();y(B=>({...B,left:E.left,width:E.width})),x.current=null},100)},[]),q=X.default.useCallback(E=>{e.current&&e.current.handleTimelens(E),l(!0)},[e]),k=X.default.useCallback(()=>{e.current&&e.current.setShowTimelens(!1),l(!1)},[e]);X.default.useEffect(()=>{if(typeof window!="undefined")return window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_),x.current&&clearTimeout(x.current)}},[_]);let b=X.default.useMemo(()=>{var E;return ha({duration:r,currentTime:u?P.value:t,sliderWidth:d.width,handleWidth:((E=c.current)==null?void 0:E.offsetWidth)||0})},[r,t,P.value,u,c,d]);return{sliderRef:s,handleRef:c,showTooltip:a,timeSliderSliding:u,timeSliderState:P,trackTranslateX:{track:b.trackTranslateX,handle:b.handleTranslateX},onClick:A,onMouseDown:g,onSliderMouseOver:M,onSliderMouseMove:R,onMouseEnter:q,onMouseLeave:k}},xa=Nu;_e();var ka=({spriteVTTFile:e,currentTime:t,duration:r,buffered:o,onChange:n,onSeeking:i,fullscreen:s})=>{let{i18n:c}=N(),a=Ee.default.useRef(null),{sliderRef:l,handleRef:u,showTooltip:p,timeSliderSliding:d,timeSliderState:y,trackTranslateX:P,onClick:f,onMouseDown:A,onSliderMouseOver:g,onSliderMouseMove:h,onMouseEnter:C,onMouseLeave:v}=xa({timelensRef:a,currentTime:t,duration:r,onChange:n,onSeeking:i});return Ee.default.createElement(na,{ref:l,role:"slider","aria-label":c.timeBar,"aria-valuemin":0,"aria-valuemax":r,"aria-valuenow":t,"aria-valuetext":it(Math.round(t)),tabIndex:0,onClick:f,onKeyDown:()=>{},onMouseOver:g,onMouseMove:h,onMouseEnter:C,onMouseLeave:v,onFocus:()=>{},isSliding:d,isFullscreen:s},Ee.default.createElement(jt,null,Ee.default.createElement(sa,{isFullscreen:s},Ee.default.createElement(aa,{style:{transform:`scaleX(${o})`}}),Ee.default.createElement(la,{style:{transform:`translateX(${P.track}%)`}})),Ee.default.createElement(ca,{style:{transform:`translateX(${P.handle}%)`}},Ee.default.createElement(Ut,{ref:u,type:"button",onMouseDown:A,onTouchStart:A,isFullscreen:s}))),Ee.default.createElement(wa,{sliderRef:l,showTooltip:p,duration:r,tooltip:d?y.value:y.tooltip,showTooltipOnly:!e,fullscreen:s}),e&&Ee.default.createElement(Sa,{ref:a,sliderRef:l,duration:r,spriteVTTFile:e,fullscreen:s}))};ka.propTypes={spriteVTTFile:yt.default.string,currentTime:yt.default.number.isRequired,duration:yt.default.number.isRequired,buffered:yt.default.number.isRequired||null,onChange:yt.default.func.isRequired,fullscreen:yt.default.bool.isRequired};var Pa=Ee.default.memo(ka,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.currentTime===t.currentTime&&e.duration===t.duration&&e.buffered===t.buffered&&e.onChange===t.onChange&&e.onSeeking===t.onSeeking&&e.fullscreen===t.fullscreen);var kr=m(T()),bt=m(J());var wr=m(T());var Te=m(T());var Vu=ye`
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
`,qu=ye`
  align-items: center;
  padding: 0 8px;
  font-size: 14px;
`,Hu=ye`
  width: 54px;
  height: 54px;
`,zu=ye`
  width: 36px;
  height: 36px;
`,$u=ye`
  font-size: 145% !important;
`,Ca=Te.default.forwardRef(({isFullscreen:e=!1,title:t,...r},o)=>Te.default.createElement("div",{ref:o,...r}));Ca.displayName="TooltipText";var ju=S(Ca)`
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
`,Ea=Te.default.forwardRef(({isText:e,isFullscreen:t=!1,isTooltipActive:r=!1,isFakeDisabled:o=!1,title:n,...i},s)=>{let c=N(),a=Te.default.useRef(null),[l,u]=Te.default.useState(null),p=Te.default.useCallback(f=>{var x;i.onMouseEnter&&i.onMouseEnter(f);let A=a==null?void 0:a.current,g=(x=c.playerRef)==null?void 0:x.current;if(!A||!g||g.querySelectorAll('[aria-expanded="true"]').length>0||r===!1){u(null);return}let h=A.getBoundingClientRect(),C=g.getBoundingClientRect(),v=f.target.hasAttribute("aria-expanded")?f.target.parentElement:f.target,M=(v==null?void 0:v.offsetWidth)||0,R=(v==null?void 0:v.offsetLeft)||0;R+M/2<=h.width/2?u(-R+15):R<=15?u(0):R+h.width/2>C.width-15?u(-1*(h.width-M)):u(-1*(h.width/2-M/2))},[r,i,c.playerRef]),d=Te.default.useCallback(f=>{u(null),i.onMouseLeave&&i.onMouseLeave(f)},[i]),y=Te.default.useCallback(f=>{o===!1&&u(null),i.onClick&&i.onClick(f)},[i,o]),P=Te.default.useCallback(f=>{o===!1&&u(null),i.onMouseDown&&i.onMouseDown(f)},[i,o]);return Te.default.createElement("button",{ref:s,title:n,onMouseEnter:p,onMouseLeave:d,onClick:y,onMouseDown:P,...i},i.children,Te.default.createElement(ju,{ref:a,isFullscreen:t,style:{opacity:l===null?0:1,left:l||0}},n))});Ea.displayName="GeneralButton";var Uu=S(Ea)`
  ${qe} ${Ne} & {
    ${Vu}
    ${({isFullscreen:e,isText:t})=>!t&&(e?Hu:zu)}
    ${({isFullscreen:e,isText:t})=>e&&t&&$u}
    ${({isText:e})=>e&&qu}
    ${({isFakeDisabled:e})=>e&&`
      color: #a4a4a4;
    `}
  }
`,Y=Uu;var Ta=wr.default.forwardRef(({isFullscreen:e,...t},r)=>wr.default.createElement("div",{ref:r,...t}));Ta.displayName="SliderWrapper";var vr=S(Ta)`
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
`,Aa=wr.default.forwardRef(({isSliding:e,isFullscreen:t,...r},o)=>wr.default.createElement("div",{ref:o,...r}));Aa.displayName="SliderContainer";var La=S(Aa)`
  display: flex;
  padding-right: 3px;
  @media (max-width: 575px) {
    display: none;
  }

  ${({isSliding:e,isFullscreen:t})=>e?`
      & ${vr} {
        width: ${Ge(t)}px;
        -moz-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
        -webkit-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
        transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
      }
      `:`
          & ${Y}:hover ~ ${vr},
          & ${vr}:hover {
              width: ${Ge(t)}px;
              -moz-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
              -webkit-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
              transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
          }
      `}
`;var Qt=m(T()),xr=m(J());var Ae=m(T());var fo=({clientX:e,sliderRef:t,isFullcreen:r})=>{if(!t.current)return 0;let o=t.current.getBoundingClientRect(),i=(e-o.left)/Ge(r)*100;return i<0?i=0:i>100&&(i=100),i};var Qu=({fullscreen:e,value:t,onChange:r})=>{let o=N(),n=ie(),i=Ae.default.useRef(null),s=Ae.default.useRef(null),[c,a]=Ae.default.useState(!1),[l,u]=Ae.default.useState(0);Ae.default.useEffect(()=>{if(i!=null&&i.current&&(s!=null&&s.current)){let A=s.current.getBoundingClientRect(),g=t/100*Ge(e)-A.width/2,h=g;g<0?h=0:g>Ge(e)-A.width&&(h=Ge(e)-A.width),u(h)}},[t,e]);let p=Ae.default.useCallback(A=>{if(r){let g=fo({clientX:A.clientX,sliderRef:i,isFullcreen:e});r(g)}},[r,e]),d=Ae.default.useCallback(A=>{A.preventDefault(),i!=null&&i.current&&(a(!0),n({type:"volumeSliding",payload:!0}))},[n]),y=Ae.default.useCallback(A=>{A.preventDefault(),n({type:"volumeSliding",payload:!1});let g=fo({clientX:A.clientX,sliderRef:i,isFullcreen:e});r(g),a(!1)},[r,e,n]),P=Ae.default.useRef(null),f=Ae.default.useCallback(A=>{var h,C,v,M;if(A.preventDefault(),!c)return;P.current&&cancelAnimationFrame(P.current);let g=(M=(v=A.clientX)!=null?v:(C=(h=A.touches)==null?void 0:h[0])==null?void 0:C.clientX)!=null?M:0;P.current=requestAnimationFrame(()=>{let R=fo({clientX:g,sliderRef:i,isFullcreen:e});r(R),P.current=null})},[c,e,r]);return Ae.default.useEffect(()=>(o.volumeSliding&&(document.addEventListener("mousemove",f),document.addEventListener("mouseup",y),document.addEventListener("touchmove",f),document.addEventListener("touchcancel",y),document.addEventListener("touchend",y)),()=>{document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",y),document.removeEventListener("touchmove",f),document.removeEventListener("touchcancel",y),document.removeEventListener("touchend",y),P.current&&(cancelAnimationFrame(P.current),P.current=null)}),[o.volumeSliding,f,y]),{thumbLeft:l,sliderRef:i,thumbRef:s,onMouseDown:d,onMouseMove:f,handleChange:p}},Ia=Qu;var gt=m(T());var Ra=gt.default.forwardRef(({isFullscreen:e,...t},r)=>gt.default.createElement("div",{ref:r,...t}));Ra.displayName="SliderContainer";var Oa=S(Ra)`
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
`,Ma=gt.default.forwardRef(({isFullscreen:e,isDisabled:t,...r},o)=>gt.default.createElement("div",{ref:o,...r}));Ma.displayName="SliderTrack";var Da=S(Ma)`
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
`,_a=gt.default.forwardRef(({isFullscreen:e,isDisabled:t,...r},o)=>gt.default.createElement("div",{ref:o,...r}));_a.displayName="SliderThumb";var Ba=S(_a)`
  ${qe} ${Ne} & {
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
`;var Fa=({fullscreen:e,value:t,isDisabled:r,onChange:o})=>{let{thumbLeft:n,sliderRef:i,thumbRef:s,onMouseMove:c,onMouseDown:a,handleChange:l}=Ia({fullscreen:e,value:t,onChange:o});return Qt.default.createElement(vr,{ref:i,role:"slider","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":Math.round(t),"aria-valuetext":`${Math.round(t)}%`,onClick:l,onMouseDown:a,onTouchStart:a,isFullscreen:e},Qt.default.createElement(Oa,{onMouseMove:c,isFullscreen:e},Qt.default.createElement(Da,{style:{width:`${t}%`},isFullscreen:e,isDisabled:r}),Qt.default.createElement(Ba,{ref:s,style:{left:`${n}px`},onMouseDown:a,onTouchStart:a,isFullscreen:e,isDisabled:r})))};Fa.propTypes={value:xr.default.number.isRequired,onChange:xr.default.func.isRequired,isDisabled:xr.default.bool.isRequired,fullscreen:xr.default.bool.isRequired};var Na=Qt.default.memo(Fa,(e,t)=>e.fullscreen===t.fullscreen&&e.value===t.value&&e.onChange===t.onChange&&e.isDisabled===t.isDisabled);var Ke=m(T());var Wt=m(T());var dn=({width:e=36,height:t=36})=>Wt.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},Wt.default.createElement("path",{d:"M 22.5 18 C 22.5 16.189 21.48 14.624 20 13.87 L 20 22.136 C 21.48 21.377 22.5 19.812 22.5 18 Z"}),Wt.default.createElement("polygon",{points:"9 14.922 9 21.078 13 21.078 18 26.21 18 9.79 13 14.922"}),Wt.default.createElement("path",{d:"M 20 9 L 20 11.119 C 22.89 12.002 25 14.747 25 18 C 25 21.253 22.89 23.999 20 24.881 L 20 27 C 24.005 26.066 27 22.398 27 18 C 27 13.603 24.005 9.934 20 9 Z"}));dn.displayName="UnmutedIcon";dn.propTypes=Q;var Va=Wt.default.memo(dn,W);var Wu=({fullscreen:e,isMuted:t,volume:r,forceMuted:o,changeVolume:n,onMutedClick:i})=>{let s=N(),c=Ke.default.useMemo(()=>Ve(e),[e]),a=Ke.default.useMemo(()=>t===!0||r===0||o,[t,r,o]),l=Ke.default.useCallback(()=>a?Ke.default.createElement(to,{...c}):Ke.default.createElement(Va,{...c}),[a,c]),u=Ke.default.useMemo(()=>o?s.i18n.thisVideoHasNoSound:a?s.i18n.activateSound:s.i18n.mute,[a,o,s.i18n]),p=Ke.default.useCallback(y=>{o===!1&&n(y/100)},[n,o]),d=Ke.default.useCallback(()=>{o===!1&&i(a)},[i,a,o]);return{titleMemorized:u,renderIcon:l,handleOnClick:d,handleChange:p}},qa=Wu;var Ha=({fullscreen:e,isMuted:t,volume:r,forceMuted:o,changeVolume:n,onMutedClick:i})=>{let s=N(),{titleMemorized:c,renderIcon:a,handleOnClick:l,handleChange:u}=qa({fullscreen:e,isMuted:t,volume:r,forceMuted:o,changeVolume:n,onMutedClick:i});return kr.default.createElement(La,{isSliding:s.volumeSliding,isFullscreen:e},kr.default.createElement(Y,{type:"button","aria-label":c,title:c,onClick:l,isFullscreen:e,isFakeDisabled:o,isTooltipActive:!0},a()),kr.default.createElement(Na,{fullscreen:e,value:r*100,isDisabled:o,onChange:u}))};Ha.propTypes={fullscreen:bt.default.bool.isRequired,isMuted:bt.default.bool.isRequired,volume:bt.default.number.isRequired,onMutedClick:bt.default.func.isRequired,forceMuted:bt.default.bool.isRequired,changeVolume:bt.default.func.isRequired};var za=kr.default.memo(Ha,(e,t)=>e.fullscreen===t.fullscreen&&e.isMuted===t.isMuted&&e.volume===t.volume&&e.forceMuted===t.forceMuted&&e.onMutedClick===t.onMutedClick&&e.changeVolume===t.changeVolume);var Pr=m(T()),mo=m(J());var fn=S.div`
  display: inline-block;
  height: 36px;
  padding: 0 5px;
  font-size: 13px;
  line-height: 35px;
  white-space: nowrap;
`,$a=S.span`
  position: relative;
  top: -2px;
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-right: 8px;
  vertical-align: middle;
  border-radius: 50%;
  background: #ff0000;
`;_e();var ja=({live:e,duration:t,currentTime:r})=>{let{i18n:o}=N();return Pr.default.createElement(fn,{role:"timer","aria-live":"off"},it(Math.round(r)),e?Pr.default.createElement(fn,null,Pr.default.createElement($a,null),o.live):` / ${it(Math.round(t))}`)};ja.propTypes={live:mo.default.bool.isRequired,duration:mo.default.number.isRequired,currentTime:mo.default.number.isRequired};var Ua=Pr.default.memo(ja,(e,t)=>e.live===t.live&&e.duration===t.duration&&e.currentTime===t.currentTime);var St=m(T()),Yt=m(J());var Cr=m(T());var mn=({width:e=36,height:t=36})=>Cr.default.createElement("svg",{height:e,width:t,version:"1.1",viewBox:"0 0 36 36",fill:"currentColor"},Cr.default.createElement("rect",{x:"12",y:"10",width:"3",height:"16"}),Cr.default.createElement("rect",{x:"21",y:"10",width:"3",height:"16"}));mn.displayName="PauseIcon";mn.propTypes=Q;var Qa=Cr.default.memo(mn,W);var Wa=({fullscreen:e,paused:t,ended:r,onPlayClick:o,onPauseClick:n})=>{let{i18n:i}=N(),s=St.default.useMemo(()=>Ve(e),[e]);return t||r?St.default.createElement(Y,{type:"button","aria-label":i.play,title:i.play,onClick:o,isFullscreen:e,isTooltipActive:!0},St.default.createElement(zt,{...s})):St.default.createElement(Y,{type:"button","aria-label":i.pause,title:i.pause,onClick:n,isFullscreen:e,isTooltipActive:!0},St.default.createElement(Qa,{...s}))};Wa.propTypes={fullscreen:Yt.default.bool.isRequired,paused:Yt.default.bool.isRequired,ended:Yt.default.bool.isRequired,onPlayClick:Yt.default.func.isRequired,onPauseClick:Yt.default.func.isRequired};var Ya=St.default.memo(Wa,(e,t)=>e.fullscreen===t.fullscreen&&e.paused===t.paused&&e.ended===t.ended&&e.onPlayClick===t.onPlayClick&&e.onPauseClick===t.onPauseClick);var vt=m(T()),go=m(J());var ho=m(T());var hn=({width:e=36,height:t=36})=>ho.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36"},ho.default.createElement("path",{fill:"currentColor",d:"M 12 20.667 L 10 20.667 L 10 26 L 15.333 26 L 15.333 24 L 12 24 L 12 20.667 Z M 10 15.333 L 12 15.333 L 12 12 L 15.333 12 L 15.333 10 L 10 10 L 10 15.333 Z M 24 24 L 20.667 24 L 20.667 26 L 26 26 L 26 20.667 L 24 20.667 L 24 24 Z M 20.667 10 L 20.667 12 L 24 12 L 24 15.333 L 26 15.333 L 26 10 L 20.667 10 Z"}));hn.displayName="FullscreenIcon";hn.propTypes=Q;var Ga=ho.default.memo(hn,W);var yo=m(T());var yn=({width:e=36,height:t=36})=>yo.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor"},yo.default.createElement("path",{d:"M 10 22.667 L 13.333 22.667 L 13.333 26 L 15.333 26 L 15.333 20.667 L 10 20.667 L 10 22.667 Z M 13.333 13.333 L 10 13.333 L 10 15.333 L 15.333 15.333 L 15.333 10 L 13.333 10 L 13.333 13.333 Z M 20.667 26 L 22.667 26 L 22.667 22.667 L 26 22.667 L 26 20.667 L 20.667 20.667 L 20.667 26 Z M 22.667 13.333 L 22.667 10 L 20.667 10 L 20.667 15.333 L 26 15.333 L 26 13.333 L 22.667 13.333 Z"}));yn.displayName="UnfullscreenIcon";yn.propTypes=Q;var Ka=yo.default.memo(yn,W);var Xa=({fullscreen:e,requestFullscreen:t,exitFullscreen:r})=>{let{i18n:o}=N(),n=vt.default.useMemo(()=>Ve(e),[e]);return e?vt.default.createElement(Y,{type:"button","aria-label":o.exitFullScreenMode,title:o.exitFullScreenMode,onClick:r,isFullscreen:!0,isTooltipActive:!0},vt.default.createElement(Ka,{...n})):vt.default.createElement(Y,{type:"button","aria-label":o.fullScreen,title:o.fullScreen,onClick:t,isTooltipActive:!0},vt.default.createElement(Ga,{...n}))};Xa.propTypes={fullscreen:go.default.bool.isRequired,requestFullscreen:go.default.func.isRequired,exitFullscreen:go.default.func.isRequired};var Za=vt.default.memo(Xa,(e,t)=>e.fullscreen===t.fullscreen&&e.requestFullscreen===t.requestFullscreen&&e.exitFullscreen===t.exitFullscreen);var Gt=m(T());var Yu=3*1e3,Gu=({hasResource:e,loading:t,prevented:r,paused:o,ended:n,waiting:i,seeking:s,kernelMsg:c})=>{let{controlsHovering:a,timeSliding:l,menuVisible:u,subMenuVisible:p}=N(),d=ie(),y=Gt.default.useRef(void 0),P=Gt.default.useCallback(()=>{typeof window!="undefined"&&window.clearTimeout(y.current),d({type:"hiding",payload:!1}),!(e===!1||t||r||o||n||i||s||l||u||p||a||c)&&(y.current=window.setTimeout(()=>{d({type:"hiding",payload:!0})},Yu))},[e,t,r,o,n,i,s,l,u,p,a,c,d]),f=Gt.default.useCallback(()=>{if(typeof window!="undefined"&&window.clearTimeout(y.current),e===!1||t||r||o||n||i||s||l||u||p||a||c){d({type:"hiding",payload:!1});return}d({type:"hiding",payload:!0})},[e,t,r,o,n,i,s,l,u,p,a,c,d]);return Gt.default.useEffect(()=>{typeof window!="undefined"&&(o||n)?(window.clearTimeout(y.current),d({type:"hiding",payload:!1})):o||P()},[o,n,P,d]),Gt.default.useEffect(()=>()=>{typeof window!="undefined"&&window.clearTimeout(y.current)},[]),{showControls:P,hideControls:f}},Ja=Gu;var Se=m(T()),ze=m(J());var Er=m(T());var el=S.div`
  position: relative;
  display: inline-block;
`,tl=Er.default.forwardRef(({singleOption:e,hiding:t,isFullscreen:r,...o},n)=>Er.default.createElement("div",{ref:n,...o}));tl.displayName="DropdownOverlay";var rl=S(tl)`
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
`,ol=S.ul`
  min-width: 250px;
  padding: 10px 0;
`,nl=S.li`
  & ${Y} {
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
  & ${Y}:focus, & ${Y}:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
`,il=S.div`
  margin-right: auto;
`,sl=S.div`
  font-size: 87%;
`,al=S.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`,ll=Er.default.forwardRef(({isFullHD:e=!1,isExpanded:t=!1,isFullscreen:r=!1,...o},n)=>Er.default.createElement(Y,{ref:n,isFullscreen:r,...o}));ll.displayName="DropdownButton";var cl=S(ll)`
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
`;var bo=m(T());var gn=({width:e=36,height:t=36})=>bo.default.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor"},bo.default.createElement("path",{d:"M 25.089 17.774 C 25.056 17.032 24.908 16.3 24.649 15.604 L 25.796 14.535 C 26.013 14.326 26.065 13.997 25.921 13.732 C 25.463 12.886 24.874 12.117 24.177 11.453 C 23.965 11.247 23.641 11.211 23.39 11.366 L 22.034 12.21 C 21.424 11.786 20.75 11.461 20.039 11.247 L 19.9 9.677 C 19.877 9.375 19.646 9.13 19.345 9.09 C 18.927 9.029 18.505 8.999 18.082 9 C 17.543 8.998 17.006 9.045 16.476 9.141 C 16.19 9.187 15.97 9.419 15.939 9.706 L 15.772 11.311 C 15.117 11.533 14.498 11.849 13.934 12.249 L 12.614 11.398 C 12.362 11.236 12.032 11.269 11.817 11.478 C 11.108 12.158 10.512 12.947 10.053 13.816 C 9.913 14.076 9.961 14.398 10.172 14.606 L 11.329 15.72 C 11.115 16.314 10.981 16.933 10.93 17.563 L 9.44 18.086 C 9.155 18.18 8.974 18.459 9.003 18.757 C 9.068 19.751 9.296 20.727 9.677 21.646 C 9.786 21.924 10.073 22.091 10.368 22.048 L 11.93 21.823 C 12.234 22.337 12.602 22.811 13.025 23.232 L 12.473 24.754 C 12.372 25.032 12.468 25.342 12.707 25.515 C 13.505 26.099 14.394 26.548 15.338 26.844 C 15.625 26.937 15.938 26.818 16.09 26.559 L 16.897 25.207 C 17.245 25.265 17.597 25.297 17.95 25.303 C 18.215 25.305 18.48 25.292 18.744 25.261 L 19.55 26.658 C 19.69 26.921 19.991 27.054 20.28 26.979 C 21.228 26.728 22.128 26.321 22.943 25.775 C 23.195 25.609 23.302 25.293 23.203 25.008 L 22.686 23.512 C 23.198 23.057 23.643 22.532 24.006 21.951 L 25.568 22.202 C 25.862 22.25 26.151 22.089 26.265 21.813 C 26.657 20.921 26.903 19.971 26.994 19.001 C 27.034 18.698 26.855 18.41 26.567 18.311 Z M 25.266 20.834 L 23.37 20.532 L 22.917 21.258 C 22.62 21.735 22.257 22.167 21.838 22.542 L 21.195 23.123 L 21.838 24.947 C 21.392 25.208 20.92 25.423 20.431 25.589 L 19.467 23.9 L 18.641 23.984 C 18.428 24.009 18.213 24.02 17.999 24.019 C 17.708 24.013 17.418 23.986 17.131 23.939 L 16.238 23.769 L 15.255 25.438 C 14.764 25.253 14.294 25.017 13.854 24.732 L 14.526 22.898 L 13.931 22.311 C 13.587 21.962 13.286 21.573 13.035 21.152 L 12.595 20.413 L 10.696 20.686 C 10.526 20.188 10.406 19.674 10.336 19.152 L 12.158 18.51 L 12.216 17.668 C 12.255 17.154 12.364 16.648 12.537 16.163 L 12.816 15.366 L 11.422 14.021 C 11.69 13.582 12.001 13.17 12.35 12.792 L 13.957 13.832 L 14.66 13.328 C 15.122 13.002 15.629 12.743 16.164 12.56 L 16.951 12.297 L 17.154 10.352 C 17.458 10.311 17.765 10.289 18.072 10.284 C 18.268 10.284 18.464 10.284 18.664 10.313 L 18.834 12.239 L 19.672 12.493 C 20.254 12.668 20.805 12.933 21.304 13.28 L 21.995 13.761 L 23.634 12.74 C 23.973 13.107 24.276 13.504 24.54 13.928 L 23.139 15.244 L 23.46 16.063 C 23.67 16.632 23.792 17.23 23.82 17.835 L 23.859 18.705 L 25.664 19.364 C 25.581 19.866 25.447 20.358 25.266 20.834 Z M 17.979 21.2 C 15.506 21.2 13.96 18.524 15.197 16.384 C 16.434 14.244 19.525 14.244 20.762 16.384 C 21.048 16.88 21.197 17.443 21.192 18.015 C 21.189 19.783 19.748 21.211 17.979 21.2 Z M 18.021 16.063 C 16.537 16.046 15.591 17.64 16.318 18.933 C 17.045 20.226 18.9 20.248 19.657 18.972 C 19.833 18.675 19.926 18.335 19.926 17.99 C 19.926 16.934 19.077 16.075 18.021 16.063 Z"}));gn.displayName="SettingsIcon";gn.propTypes=Q;var ul=bo.default.memo(gn,W);var So=m(T());var bn=({width:e=36,height:t=36})=>So.default.createElement("svg",{width:e,height:t,viewBox:"0 0 24 24"},So.default.createElement("path",{fill:"currentColor",d:"M 15.7 12 C 15.7 12.105 15.658 12.196 15.573 12.277 L 9.648 17.88 C 9.563 17.96 9.466 18 9.355 18 C 9.245 18 9.148 17.96 9.063 17.88 L 8.427 17.278 C 8.342 17.199 8.3 17.106 8.3 17.002 C 8.3 16.898 8.342 16.806 8.427 16.725 L 13.424 12 L 8.427 7.275 C 8.342 7.194 8.3 7.102 8.3 6.998 C 8.3 6.894 8.342 6.801 8.427 6.722 L 9.063 6.12 C 9.148 6.04 9.245 6 9.355 6 C 9.466 6 9.563 6.04 9.648 6.12 L 15.573 11.723 C 15.658 11.804 15.7 11.895 15.7 12 Z"}));bn.displayName="ArrowRightIcon";bn.propTypes=Q;var pl=So.default.memo(bn,W);var Tr=m(T());var be=m(T());var vo=m(T());var Sn=({width:e=36,height:t=36})=>vo.default.createElement("svg",{width:e,height:t,viewBox:"0 0 24 24"},vo.default.createElement("path",{fill:"currentColor",d:"M 15.7 6.998 C 15.7 7.102 15.658 7.194 15.573 7.275 L 10.576 12 L 15.573 16.725 C 15.658 16.806 15.7 16.898 15.7 17.002 C 15.7 17.106 15.658 17.198 15.573 17.279 L 14.937 17.88 C 14.852 17.96 14.755 18 14.645 18 C 14.534 18 14.437 17.96 14.352 17.88 L 8.427 12.277 C 8.342 12.196 8.3 12.104 8.3 12 C 8.3 11.896 8.342 11.804 8.427 11.723 L 14.352 6.12 C 14.437 6.04 14.534 6 14.645 6 C 14.755 6 14.852 6.04 14.937 6.12 L 15.573 6.721 C 15.658 6.802 15.7 6.894 15.7 6.998 Z"}));Sn.displayName="ArrowLeftIcon";Sn.propTypes=Q;var dl=vo.default.memo(Sn,W);var fl=be.default.forwardRef(({title:e,options:t,value:r,hiding:o,isFullscreen:n,onClick:i,goBack:s,...c},a)=>{let{i18n:l}=N(),[u,p]=be.default.useState(!1);return be.default.useEffect(()=>{p(!1),o&&setTimeout(()=>{p(!0)},100)},[o]),be.default.createElement("div",{ref:a,...c},be.default.createElement(hl,null,be.default.createElement(Y,{onClick:s,isFullscreen:n,isText:!0},be.default.createElement(dl,{width:28,height:28}),be.default.createElement("span",null,e))),be.default.createElement(yl,{show:u},be.default.createElement(gl,null,t.map((d,y)=>be.default.createElement(bl,{key:y,selected:d.value===r,isFullscreen:n},be.default.createElement(Y,{onClick:()=>i(d.value),isFullscreen:n,isText:!0},d.label,"isFullHD"in d&&d.isFullHD&&be.default.createElement(Sl,null,l.hd)))))))});fl.displayName="DropdownOverlay";var ml=fl;var vl=S(ml)`
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
`,hl=S.div`
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
  & ${Y} {
    width: 100%;
    font-size: 91%;
    padding: 20px 5px;
    height: 57px;
  }
`,wl=Tr.default.forwardRef(({show:e,...t},r)=>Tr.default.createElement("div",{ref:r,...t}));wl.displayName="DropdownContent";var yl=S(wl)`
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
`,gl=S.ul`
  padding: 10px 0;
`,xl=Tr.default.forwardRef(({selected:e,isFullscreen:t,...r},o)=>Tr.default.createElement("li",{ref:o,...r}));xl.displayName="DropdownItem";var bl=S(xl)`
  ${qe} ${Ne} & {
    padding: 0 15px;

    & ${Y} {
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
    & ${Y}:hover {
      background: rgba(255, 255, 255, 0.1) !important;
    }
  }
`,Sl=S.sub`
  font-size: 10px;
  font-weight: 500;
  color: #cb0e0b;
  margin-left: 3px;
`;var fe=m(T());var Ar={generalMenu:!1,speed:!1,quality:!1};var Lr=({label:e,value:t,i18n:r})=>e==="quality"?`${t}p`:e==="speed"&&t==="1"?r.normal:t;var kl=({qualityOptions:e,live:t,i18n:r})=>{let o=[];return t||o.push({label:r.speed,value:"speed",options:[{label:"2",value:"2"},{label:"1.5",value:"1.5"},{label:"1.25",value:"1.25"},{label:"Normal",value:"1"},{label:"0.75",value:"0.75"},{label:"0.5",value:"0.5"},{label:"0.25",value:"0.25"}]}),e.length>0&&o.push({label:r.quality,value:"quality",options:e}),o};var Ku=({live:e,fullHDQualityBreak:t,qualities:r,playbackRate:o,changeSettings:n,fullscreen:i})=>{var v,M,R,x,_,q;let{i18n:s}=N(),c=ie(),a=fe.default.useRef(null),[l,u]=fe.default.useState(Ar),[p,d]=fe.default.useState({quality:{label:(M=(v=r[0])==null?void 0:v.label)!=null?M:"",value:(x=(R=r[0])==null?void 0:R.value)!=null?x:"",isFullHD:(q=(_=r[0])==null?void 0:_.isFullHD)!=null?q:!1},speed:{label:s.normal,value:"1"}});(0,fe.useEffect)(()=>{let k=o.toString();d(b=>({...b,speed:{label:Lr({label:"speed",value:k,i18n:s}),value:k}}))},[s,o]);let y=fe.default.useCallback(k=>{k.stopPropagation(),c(b=>({menuVisible:b.subMenuVisible?!1:!b.menuVisible,subMenuVisible:!1})),u(b=>({...Ar,generalMenu:!b.speed&&!b.quality?!b.generalMenu:!1}))},[c]),P=fe.default.useCallback(k=>b=>{d(E=>({...E,[k]:{label:Lr({label:k,value:b,i18n:s}),value:b,isFullHD:t!==void 0&&Number(b!=null?b:"0")>=t}})),c({menuVisible:!1,subMenuVisible:!1}),u(Ar)},[t,s,c]),f=fe.default.useCallback(k=>{c({menuVisible:!1,subMenuVisible:!0}),u(b=>({...b,generalMenu:!1,[k]:!0}))},[c]),A=fe.default.useCallback(k=>()=>{c({menuVisible:!0,subMenuVisible:!1}),u(b=>({...b,generalMenu:!0,[k]:!1}))},[c]);fe.default.useEffect(()=>{let k=b=>{a.current&&!a.current.contains(b.target)&&(c({menuVisible:!1,subMenuVisible:!1}),u(Ar))};return document.body.addEventListener("click",k),()=>document.body.removeEventListener("click",k)},[c]);let g=fe.default.useMemo(()=>kl({qualityOptions:r,live:e,i18n:s}),[e,r,s]),h=fe.default.useMemo(()=>Ve(i),[i]),C=fe.default.useRef(p);return fe.default.useEffect(()=>{var b,E,B,F;let k=C.current;if(k!==p){C.current=p;let $={};((b=k.speed)==null?void 0:b.value)!==((E=p.speed)==null?void 0:E.value)&&($.speed=p.speed),((B=k.quality)==null?void 0:B.value)!==((F=p.quality)==null?void 0:F.value)&&($.quality=p.quality),($.speed||$.quality)&&n($)}},[p,n]),{dropdownRef:a,settings:l,values:p,iconProps:h,settingsOptions:g,handleButtonClick:y,handleMenuItemClick:f,handleMenuClick:P,handleGoBack:A}},Pl=Ku;var Cl=({live:e,qualities:t,playbackRate:r,fullHDQualityBreak:o,changeSettings:n,fullscreen:i})=>{var A;let{i18n:s}=N(),{dropdownRef:c,settings:a,values:l,iconProps:u,settingsOptions:p,handleButtonClick:d,handleMenuItemClick:y,handleMenuClick:P,handleGoBack:f}=Pl({live:e,fullHDQualityBreak:o,qualities:t,playbackRate:r,changeSettings:n,fullscreen:i});return Se.default.createElement(el,{ref:c},Se.default.createElement(cl,{type:"button","aria-label":s.settings,title:s.settings,"aria-expanded":a.generalMenu,onClick:d,isFullscreen:i,isFullHD:(A=l.quality)==null?void 0:A.isFullHD,isExpanded:a.generalMenu,isTooltipActive:!0},Se.default.createElement(ul,{...u})),Se.default.createElement(rl,{hiding:a.generalMenu,singleOption:e||t.length===0,isFullscreen:i},Se.default.createElement(ol,null,p.map((g,h)=>{var C;return Se.default.createElement(nl,{key:h},Se.default.createElement(Y,{onClick:()=>y(g.value),isFullscreen:i,isText:!0},Se.default.createElement(il,null,g.label),Se.default.createElement(al,null,Se.default.createElement(sl,null,(C=l[g.value])==null?void 0:C.label),Se.default.createElement(pl,{width:28,height:28}))))}))),p.map((g,h)=>{var C;return Se.default.createElement(vl,{key:h,hiding:a[g.value],title:g.label,options:g.options,value:(C=l[g.value])==null?void 0:C.value,isFullscreen:i,onClick:P(g.value),goBack:f(g.value)})}))};Cl.propTypes={live:ze.default.bool.isRequired,qualities:ze.default.arrayOf(ze.default.shape({label:ze.default.string.isRequired,value:ze.default.string.isRequired}).isRequired).isRequired,playbackRate:ze.default.number.isRequired,fullHDQualityBreak:ze.default.number,changeSettings:ze.default.func.isRequired,fullscreen:ze.default.bool.isRequired};var El=Se.default.memo(Cl,(e,t)=>e.live===t.live&&e.qualities===t.qualities&&e.playbackRate===t.playbackRate&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.changeSettings===t.changeSettings&&e.fullscreen===t.fullscreen);var wt=m(T());var wo=m(T());var vn=({width:e=36,height:t=36})=>wo.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},wo.default.createElement("path",{d:"M 21.333 23.666 C 21.333 23.758 21.3 23.835 21.235 23.902 C 21.168 23.967 21.091 24 21 24 L 11 24 C 10.944 24 10.898 23.995 10.859 23.979 C 10.821 23.966 10.789 23.942 10.765 23.906 C 10.741 23.871 10.723 23.844 10.708 23.822 C 10.695 23.803 10.684 23.762 10.678 23.703 C 10.671 23.644 10.667 23.604 10.667 23.583 L 10.667 17.335 L 8.667 17.335 C 8.487 17.335 8.329 17.266 8.198 17.134 C 8.067 17.004 8 16.846 8 16.666 C 8 16.5 8.052 16.358 8.156 16.239 L 11.489 12.24 C 11.621 12.087 11.792 12.01 12 12.01 C 12.208 12.01 12.379 12.087 12.511 12.24 L 15.844 16.239 C 15.948 16.358 16 16.5 16 16.666 C 16 16.846 15.933 17.004 15.803 17.134 C 15.671 17.266 15.513 17.335 15.333 17.335 L 13.333 17.335 L 13.333 21.334 L 19.333 21.334 C 19.444 21.334 19.532 21.372 19.593 21.448 L 21.26 23.448 C 21.309 23.518 21.333 23.59 21.333 23.666 Z M 28 19.334 C 28 19.5 27.948 19.642 27.844 19.761 L 24.511 23.76 C 24.372 23.92 24.201 24 24 24 C 23.799 24 23.628 23.92 23.489 23.76 L 20.156 19.761 C 20.052 19.642 20 19.5 20 19.334 C 20 19.154 20.067 18.996 20.198 18.866 C 20.329 18.734 20.487 18.667 20.667 18.667 L 22.667 18.667 L 22.667 14.666 L 16.667 14.666 C 16.556 14.666 16.468 14.626 16.407 14.542 L 14.74 12.542 C 14.691 12.478 14.667 12.41 14.667 12.334 C 14.667 12.243 14.7 12.166 14.765 12.098 C 14.832 12.034 14.909 12 15 12 L 25 12 C 25.056 12 25.103 12.007 25.141 12.022 C 25.179 12.034 25.211 12.058 25.235 12.094 C 25.259 12.13 25.278 12.156 25.292 12.178 C 25.305 12.199 25.316 12.238 25.323 12.298 C 25.329 12.356 25.333 12.396 25.333 12.418 L 25.333 18.667 L 27.333 18.667 C 27.513 18.667 27.671 18.734 27.803 18.866 C 27.933 18.996 28 19.154 28 19.334 Z"}));vn.displayName="InLoopIcon";vn.propTypes=Q;var Tl=wo.default.memo(vn,W);var xo=m(T());var wn=({width:e=36,height:t=36})=>xo.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor"},xo.default.createElement("path",{d:"M25 17H17v6H25zM29 25V10.981a1.989 1.989 0 0 0 -2 -1.981H9a1.989 1.989 0 0 0 -2 1.981V25c0 1.1 0.9 2 2 2h18c1.1 0 2 -0.9 2 -2m-2 0.019H9V10.969h18z"}));wn.displayName="PipIcon";wn.propTypes=Q;var Al=xo.default.memo(wn,W);var Xu=({fullscreen:e,contextMenuRef:t,pictureInPictureEnabled:r,pip:o,loop:n=!1,requestPictureInPicture:i,exitPictureInPicture:s,onLoopClick:c})=>{let a=ie(),{i18n:l}=N(),[u,p]=wt.default.useState({x:0,y:0}),d=wt.default.useCallback(f=>{var $,L;f.preventDefault();let A=(($=t.current)==null?void 0:$.offsetWidth)||0,g=((L=t.current)==null?void 0:L.offsetHeight)||0,h=f.pageX,C=f.pageY,v=document.documentElement,M=v.scrollLeft||0,R=v.scrollTop||0,x=v.clientLeft||0,_=v.clientTop||0,q=window.innerWidth||0,k=window.innerHeight||0,b=(window.pageXOffset||M)-(x||0),E=(window.pageYOffset||R)-(_||0),B=h+A>q+b?h-A:h,F=C+g>k+E?C-g:C;p({x:B,y:F}),a({type:"contextMenuVisible",payload:!0})},[t,a]),y=wt.default.useMemo(()=>Ve(e),[e]),P=wt.default.useMemo(()=>{let f=[{action:()=>c(),label:l.loop,icon:wt.default.createElement(Tl,{...y}),isCheckable:!0,defaultChecked:n}];return r&&f.push({action:()=>o?s():i(),label:l.pictureInPicture,icon:wt.default.createElement(Al,{...y}),isCheckable:!1,defaultChecked:!1}),f},[y,l,r,o,n,i,s,c]);return{handleContextMenu:d,contextMenuPosition:u,contextMenuItems:P}},Ll=Xu;var Me=m(T()),Vl=m(Rl());var Ir=m(T());var Ol=Ir.default.forwardRef(({showing:e,positionX:t,positionY:r,...o},n)=>Ir.default.createElement("div",{ref:n,...o}));Ol.displayName="StyledContextMenu";var Ml=S(Ol)`
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
`,Dl=Ir.default.forwardRef(({isFullscreen:e,...t},r)=>Ir.default.createElement("div",{ref:r,...t}));Dl.displayName="ContextMenuItem";var _l=S(Dl)`
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
`,Bl=S.span`
  padding: 0 12px;
  font-size: 118%;
`,Fl=S.div`
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
`;_e();var ko=m(T());var xn=({width:e=36,height:t=36})=>ko.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},ko.default.createElement("path",{d:"M4.8 19.582 13.237 28.05 31.2 9.877 29.295 7.95 13.237 24.197 6.705 17.586Z"}));xn.displayName="CheckedIcon";xn.propTypes=Q;var Nl=ko.default.memo(xn,W);var ql=Me.default.forwardRef(({fullscreen:e,position:t,menuItems:r},o)=>{let n=N(),i=ie(),s=Me.default.useRef(),c=Me.default.useMemo(()=>{var l;return e&&((l=n.playerRef)!=null&&l.current)?n.playerRef.current:document.body},[e,n.playerRef]);Me.default.useEffect(()=>{let l=u=>{var p;s.current&&(!s.current.contains(u.target)||!Array.from((p=s.current)==null?void 0:p.querySelectorAll("*")).map(d=>d.contains(u.target)).includes(!0))&&i({type:"contextMenuVisible",payload:!1})};return window.addEventListener("click",l),()=>{window.removeEventListener("click",l)}},[i,s]);let a=Me.default.createElement(Ml,{ref:qn([o,s]),showing:n.contextMenuVisible,positionX:t.x,positionY:t.y,"data-itemindex":"0","aria-checked":n.contextMenuVisible},r.map((l,u)=>Me.default.createElement(_l,{key:u,onClick:()=>{l.action(),i({type:"contextMenuVisible",payload:!1})},isFullscreen:e},l.icon,Me.default.createElement(Bl,null,l.label),l.isCheckable&&l.defaultChecked&&Me.default.createElement(Fl,null,Me.default.createElement(Nl,{width:24,height:24})))));return Vl.default.createPortal(a,c)});ql.displayName="ContextMenu";var Hl=Me.default.memo(ql,(e,t)=>e.fullscreen===t.fullscreen&&e.position===t.position&&e.menuItems===t.menuItems);var kn=z.default.forwardRef(({videoRef:e,playerRef:t,live:r=!1,hasResource:o=!1,hasAudio:n,prevented:i,loading:s,paused:c,ended:a,seeking:l,waiting:u,duration:p,buffered:d=null,currentTime:y,muted:P,volume:f,pictureInPictureEnabled:A,pip:g,fullscreen:h,qualities:C,spriteVTTFile:v,fullHDQualityBreak:M,playbackRate:R,loop:x,poster:_,onPlayClick:q,onPauseClick:k,onTogglePlay:b,changePlaybackRate:E,changePlayBackQuality:B,changeVolume:F,onMutedClick:$,changeCurrentTime:L,requestPictureInPicture:I,exitPictureInPicture:re,requestFullscreen:Z,exitFullscreen:ae,onSeeking:oe,onLoopClick:G,onPreventedClick:we,kernelMsg:me=null},kt)=>{let Xe=ie(),[Pt,$e]=z.default.useState(!1),Le=z.default.useRef(),Ct=z.default.useRef(null),{showControls:Ie,hideControls:xe}=Ja({hasResource:o,loading:s,prevented:i,paused:c,ended:a,waiting:u,seeking:l,kernelMsg:me}),{contextMenuItems:ac,contextMenuPosition:lc,handleContextMenu:cc}=Ll({fullscreen:h,contextMenuRef:Ct,pip:g,loop:x,pictureInPictureEnabled:A,requestPictureInPicture:I,exitPictureInPicture:re,onLoopClick:G});z.default.useEffect(()=>{Xe({videoRef:e,playerRef:t})},[e,t,Xe]),z.default.useImperativeHandle(kt,()=>({showControls:Ie,hideControls:xe}),[Ie,xe]),z.default.useEffect(()=>{if(t.current){let Zt=t.current,Jt=Et=>{let er=ao[Et.which||Et.keyCode]||lo[Et.key];clearTimeout(Le.current),er==="ARROW_UP_KEY"||er==="ARROW_DOWN_KEY"?($e(!0),Le.current=setTimeout(()=>$e(!1),2e3)):$e(!1)};return Zt.addEventListener("keydown",Jt),()=>{clearTimeout(Le.current),Zt.removeEventListener("keydown",Jt)}}},[P,f,t]);let uc=z.default.useCallback(({quality:Zt,speed:Jt})=>{var Et,er;Jt&&E(Number((Et=Jt.value)!=null?Et:1)),Zt&&B((er=Number(Zt.value))!=null?er:0)},[E,B]);return z.default.createElement(Ne,{onContextMenu:cc,onMouseLeave:xe,onMouseMove:Ie,onTouchStart:Ie,onMouseEnter:Ie,onClick:Ie},z.default.createElement(_s,null),z.default.createElement(Es,{hasResource:o,prevented:i,paused:c,muted:P,currentTime:y,onClick:we}),_&&z.default.createElement(Ns,{style:{opacity:y<=0||a?1:0}},z.default.createElement(Vs,{style:{backgroundImage:`url(${_})`}})),z.default.createElement(Bs,null,z.default.createElement(Fs,{style:{display:Pt?"inline-block":"none"}},Math.round(f*100),"%")),z.default.createElement(Hl,{ref:Ct,fullscreen:h,position:lc,menuItems:ac}),z.default.createElement(Is,{hasResource:o,loading:s,paused:c,ended:a,waiting:u,seeking:l,kernelMsg:me,onClick:b}),z.default.createElement(js,null,r===!1&&z.default.createElement(Pa,{spriteVTTFile:v,currentTime:y,duration:p,buffered:d,onChange:L,onSeeking:oe,fullscreen:h}),z.default.createElement(Xs,{extra:z.default.createElement(z.default.Fragment,null,z.default.createElement(El,{live:r,qualities:C,playbackRate:R,fullscreen:h,fullHDQualityBreak:M,changeSettings:uc}),z.default.createElement(Za,{fullscreen:h,requestFullscreen:Z,exitFullscreen:ae})),fullscreen:h},z.default.createElement(Ya,{fullscreen:h,paused:c,ended:a,onPauseClick:k,onPlayClick:q}),z.default.createElement(za,{fullscreen:h,isMuted:P,forceMuted:!n,volume:f,onMutedClick:$,changeVolume:F}),z.default.createElement(Ua,{live:r,currentTime:y,duration:p}))),z.default.createElement(Ms,{hasResource:o,loading:s,kernelMsg:me}))});kn.displayName="PlayerSkin";kn.propTypes={spriteVTTFile:O.default.string,videoRef:O.default.oneOfType([O.default.func,O.default.shape({current:O.default.instanceOf(HTMLVideoElement)})]).isRequired,playerRef:O.default.oneOfType([O.default.func,O.default.shape({current:O.default.instanceOf(HTMLDivElement)})]).isRequired,prevented:O.default.bool,waiting:O.default.bool,live:O.default.bool.isRequired,hasResource:O.default.bool.isRequired,loading:O.default.bool.isRequired,paused:O.default.bool.isRequired,ended:O.default.bool.isRequired,seeking:O.default.bool.isRequired,onPlayClick:O.default.func.isRequired,onPauseClick:O.default.func.isRequired,duration:O.default.number.isRequired,buffered:O.default.number.isRequired||null,currentTime:O.default.number.isRequired,changeCurrentTime:O.default.func.isRequired,muted:O.default.bool.isRequired,volume:O.default.number.isRequired,changeVolume:O.default.func.isRequired,onMutedClick:O.default.func.isRequired,changePlaybackRate:O.default.func.isRequired,pictureInPictureEnabled:O.default.bool.isRequired,pip:O.default.bool.isRequired,requestPictureInPicture:O.default.func.isRequired,exitPictureInPicture:O.default.func.isRequired,fullscreen:O.default.bool.isRequired,qualities:O.default.arrayOf(O.default.shape({label:O.default.string.isRequired,value:O.default.string.isRequired,isFullHD:O.default.bool.isRequired}).isRequired).isRequired,playbackRate:O.default.number.isRequired,loop:O.default.bool.isRequired,requestFullscreen:O.default.func.isRequired,exitFullscreen:O.default.func.isRequired,onLoopClick:O.default.func.isRequired,onPreventedClick:O.default.func.isRequired,kernelMsg:O.default.oneOfType([O.default.shape({type:O.default.string.isRequired,detail:O.default.string.isRequired}),O.default.oneOf([void 0])]),fullHDQualityBreak:O.default.number,poster:O.default.string.isRequired};var zl=z.default.memo(kn,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.videoRef===t.videoRef&&e.playerRef===t.playerRef&&e.live===t.live&&e.hasResource===t.hasResource&&e.hasAudio===t.hasAudio&&e.loading===t.loading&&e.prevented===t.prevented&&e.paused===t.paused&&e.ended===t.ended&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.pictureInPictureEnabled===t.pictureInPictureEnabled&&e.pip===t.pip&&e.fullscreen===t.fullscreen&&e.qualities===t.qualities&&e.playbackRate===t.playbackRate&&e.loop===t.loop&&e.kernelMsg===t.kernelMsg&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.poster===t.poster&&e.onPauseClick===t.onPauseClick&&e.onPlayClick===t.onPlayClick&&e.onTogglePlay===t.onTogglePlay&&e.changeCurrentTime===t.changeCurrentTime&&e.onMutedClick===t.onMutedClick&&e.changeVolume===t.changeVolume&&e.changePlaybackRate===t.changePlaybackRate&&e.requestPictureInPicture===t.requestPictureInPicture&&e.exitPictureInPicture===t.exitPictureInPicture&&e.requestFullscreen===t.requestFullscreen&&e.exitFullscreen===t.exitFullscreen&&e.onSeeking===t.onSeeking&&e.onLoopClick===t.onLoopClick&&e.onPreventedClick===t.onPreventedClick);var Po=m(T());var Pn=["i18n","contextMenuVisible","controlsHovering","hiding","menuVisible","subMenuVisible","timeSliding","volumeSliding","videoRef","playerRef"];function $l(e,t){try{if(!e||!t)throw new Error("Reducer params has not been provided!");if("type"in t){let{type:r,payload:o}=t;if(Pn.includes(r)===!1)throw new Error(`Invalid type "${r}" in action payload!`);return e[r]===o?e:{...e,[r]:o}}else if(typeof t=="object"){if(Object.keys(t).length===0)throw new Error("Reducer action object is empty!");let r=!1,o={...e};for(let n in t){let i=t[n];if(Pn.includes(n)===!1)throw new Error(`Invalid type "${n}" in action object!`);e[n]!==i&&(r=!0,o={...o,[n]:i})}return r?o:e}return e}catch(r){return console.error("Error in AppReducer: ",r),e}}var jl=({children:e,language:t})=>{let[r,o]=Po.default.useReducer($l,{...an,i18n:It[t]}),n=Po.default.useMemo(()=>({state:r,dispatch:o}),[r,o]);return Po.default.createElement($t.Provider,{value:n},e)};var ve=m(T());var xt=m(T()),Zu=({prevented:e,muted:t,videoRef:r,src:o,updateState:n})=>{let i=xt.default.useCallback(l=>{if(!r.current)return;let u=l.target.muted;l.target.volume===0&&(u=!0),n({volume:l.target.volume,muted:u})},[r,n]),s=xt.default.useCallback(()=>{if(!r.current)return;let l=r.current;if(l){let u=0;(e||t||l.volume===0)&&l.muted===!0&&(u=1),n({volume:u,muted:!l.muted})}},[r,e,t,n]),c=xt.default.useCallback(l=>{if(!r.current)return;let u=r.current,p=l===0;u&&(u.volume=l),l!==0&&u.muted===!0&&(p=!1),n({volume:l,muted:p})},[r,n]),a=xt.default.useCallback(l=>{if(!r.current)return;let p=r.current.volume,d=l(p);c(d)},[r,c]);return xt.default.useEffect(()=>{if(!r.current)return()=>{};let l=r.current;return l?(l.addEventListener("volumechange",i),()=>{l.removeEventListener("volumechange",i)}):()=>{}},[i,r]),xt.default.useEffect(()=>{if(!r.current)return;let l=r.current;l&&(t||(l.muted=!1))},[o,r,t]),{onMutedClick:s,changeVolume:c,updateVolumeWithCallback:a}},Ul=Zu;var Kt=m(T()),Ju=({updateState:e,videoRef:t,playerRef:r})=>{let o=Kt.default.useCallback(()=>{let c=r==null?void 0:r.current,a=t==null?void 0:t.current;if(!c){console.error("useVideoFullscreen: the player element is not ready");return}if(c.requestFullscreen){let l=c.requestFullscreen();l&&l.catch&&l.catch(()=>{})}else c.msRequestFullscreen?c.msRequestFullscreen():c.webkitRequestFullscreen?c.webkitRequestFullscreen():a&&a.webkitEnterFullScreen&&a.webkitEnterFullScreen()},[t,r]),n=Kt.default.useCallback(()=>{document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},[]),i=Kt.default.useCallback(()=>{let c=r==null?void 0:r.current;(document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement)===c?n():o()},[r,n,o]),s=Kt.default.useCallback(()=>{let c=r==null?void 0:r.current,a=document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement;e({fullscreen:!!c&&a===c})},[e,r]);return Kt.default.useEffect(()=>(document.addEventListener("fullscreenchange",s),document.addEventListener("webkitfullscreenchange",s),document.onmsfullscreenchange=s,()=>{document.removeEventListener("fullscreenchange",s),document.removeEventListener("webkitfullscreenchange",s),document.onmsfullscreenchange=null}),[s]),{requestFullscreen:o,exitFullscreen:n,requestToggleFullscreen:i}},Ql=Ju;var ep=({ref:e,playerRef:t,url:r,player:o,fullHDQualityBreak:n,sources:i,prevented:s,muted:c,updateState:a})=>{let{i18n:l}=N(),u=ve.default.useRef(null),p=ve.default.useRef(null),d=ve.default.useCallback(({fullscreen:b})=>{a(E=>({...E,isFullScreen:b}))},[a]),{requestFullscreen:y,exitFullscreen:P,requestToggleFullscreen:f}=Ql({updateState:d,videoRef:u,playerRef:t}),A=ve.default.useMemo(()=>i.length>0?i.map(b=>({label:Lr({label:"quality",value:b.resolution.toString(),i18n:l}),value:b.resolution.toString(),isFullHD:n!==void 0&&b.resolution>=n})):[],[i,n,l]),{onMutedClick:g,changeVolume:h,updateVolumeWithCallback:C}=Ul({prevented:s,muted:c,videoRef:u,src:r,updateState:({muted:b,volume:E})=>a(B=>({...B,isMuted:b!=null?b:!1,volume:E!=null?E:0}))}),v=ve.default.useCallback(b=>{o&&(a(E=>({...E,played:b})),o.seekTo(b))},[o,a]),M=ve.default.useCallback(b=>{if(!o)return;let E=o.getCurrentTime()||0,B=o.getDuration()||0,F=b(E,B);v(F)},[o,v]),R=ve.default.useRef(g);R.current=g;let x=ve.default.useRef(v);x.current=v;let _=ve.default.useRef(o);_.current=o;let q=ve.default.useMemo(()=>({onPlayClick:()=>_.current&&a(b=>({...b,playing:!0})),onPauseClick:()=>_.current&&a(b=>({...b,playing:!1})),onTogglePlay:()=>_.current&&a(b=>({...b,playing:!b.playing})),changePlaybackRate:b=>_.current&&a(E=>({...E,playbackRate:b})),changePlayBackQuality:b=>{_.current&&a(E=>({...E,playbackQuality:b}))},requestPictureInPicture:()=>_.current&&a(b=>({...b,isPIP:!0})),exitPictureInPicture:()=>_.current&&a(b=>({...b,isPIP:!1})),onSeeking:b=>_.current&&a(E=>({...E,seeking:b})),onMutedClick:()=>_.current&&R.current(),onLoopClick:()=>_.current&&a(b=>({...b,loop:!b.loop})),onPreventedClick:()=>a(b=>({...b,isMuted:!1,volume:1})),changeCurrentTime:b=>x.current(b)}),[a]),k=ve.default.useCallback(b=>{var B;b.preventDefault(),b.stopPropagation();let E=ao[b.which||b.keyCode]||lo[b.key];if(o)switch((B=p.current)==null||B.showControls(),E){case"SPACE_KEY":{a(F=>({...F,playing:!F.playing}));break}case"F_KEY":{f();break}case"MUTE_KEY":{g();break}case"ARROW_LEFT_KEY":{M(F=>{let $=F-5;return $<0?0:$});break}case"ARROW_RIGHT_KEY":{M((F,$)=>{let L=F+5;return L>=$?$:L});break}case"ARROW_UP_KEY":{C(F=>{let $=F+.1;return $>=1?1:$});break}case"ARROW_DOWN_KEY":{C(F=>{let $=F-.1;return $<0?0:$});break}default:break}},[o,a,f,g,M,C]);return ve.default.useImperativeHandle(e,()=>({handleKeyDown:k})),ve.default.useEffect(()=>{var b;u.current=(b=o==null?void 0:o.getPlayer())!=null?b:null},[o]),{playerSkinRef:p,videoRef:u,qualities:A,memorizedProps:q,handleKeyDown:k,requestFullscreen:y,exitFullscreen:P,changeVolume:h}},Wl=ep;var Cn=Rr.default.forwardRef(({url:e,sources:t,playerRef:r,player:o,hasAudio:n,fullHDQualityBreak:i,live:s=!1,language:c=Object.keys(It)[0],hasResource:a=!1,buffered:l=null,kernelMsg:u=null,updateState:p,waiting:d=!1,prevented:y=!1,muted:P=!1,...f},A)=>{let{playerSkinRef:g,videoRef:h,qualities:C,memorizedProps:v,handleKeyDown:M,requestFullscreen:R,exitFullscreen:x,changeVolume:_}=Wl({ref:A,playerRef:r,url:e,player:o,fullHDQualityBreak:i,sources:t,prevented:y,muted:P,updateState:p});return Rr.default.createElement(jl,{language:c},Rr.default.createElement(zl,{ref:g,videoRef:h,playerRef:r,qualities:C,hasAudio:n,handleKeyDown:M,requestFullscreen:R,exitFullscreen:x,changeVolume:_,fullHDQualityBreak:i,live:s,hasResource:a,buffered:l,kernelMsg:u,prevented:y,waiting:d,muted:P,...f,...v}))});Cn.displayName="PlayerSkinWrapper";Cn.propTypes={playerRef:V.default.oneOfType([V.default.func,V.default.shape({current:V.default.instanceOf(HTMLDivElement)})]).isRequired,player:V.default.instanceOf(Be),live:V.default.bool,prevented:V.default.bool,waiting:V.default.bool,hasResource:V.default.bool.isRequired,hasAudio:V.default.bool.isRequired,loading:V.default.bool.isRequired,paused:V.default.bool.isRequired,ended:V.default.bool.isRequired,seeking:V.default.bool.isRequired,duration:V.default.number.isRequired,buffered:V.default.number.isRequired||null,currentTime:V.default.number.isRequired,muted:V.default.bool.isRequired,volume:V.default.number.isRequired,playbackRate:V.default.number.isRequired,pictureInPictureEnabled:V.default.bool.isRequired,fullHDQualityBreak:V.default.number,pip:V.default.bool.isRequired,fullscreen:V.default.bool.isRequired,kernelMsg:V.default.oneOfType([V.default.shape({type:V.default.string.isRequired,detail:V.default.string.isRequired}),V.default.oneOf([void 0])]),url:V.default.string,sources:V.default.arrayOf(V.default.shape({src:V.default.string.isRequired,resolution:V.default.number.isRequired}).isRequired).isRequired,loop:V.default.bool.isRequired};var Yl=Rr.default.memo(Cn,(e,t)=>e.playerRef===t.playerRef&&e.player===t.player&&e.live===t.live&&e.hasResource===t.hasResource&&e.hasAudio===t.hasAudio&&e.loading===t.loading&&e.prevented===t.prevented&&e.paused===t.paused&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.playbackRate===t.playbackRate&&e.loop===t.loop&&e.pictureInPictureEnabled===t.pictureInPictureEnabled&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.pip===t.pip&&e.fullscreen===t.fullscreen&&e.kernelMsg===t.kernelMsg&&e.url===t.url&&e.sources===t.sources&&e.poster===t.poster);var Co={kernelError:null,seeking:!1,seek:0,played:0,loaded:0,duration:0,isFullScreen:!1,isEnded:!1,isPIP:!1,isLoading:!0,volume:.8,playbackRate:1,playbackQuality:null,videoUrl:null,hasAudio:!0,loop:!1,playing:!1,isMuted:!1};var En=m(T());var Gl=En.default.forwardRef(({children:e,...t},r)=>En.default.createElement(qe,{ref:r,...t},e));Gl.displayName="MediaPlayerWrapper";var Kl=Gl;var De=m(T());_e();var Xl=e=>{if(typeof document=="undefined")return null;let t=`rmp_${e}=`,r=document.cookie.split(";");for(let o=0;o<r.length;o++){let n=r[o];for(;n.charAt(0)===" ";)n=n.substring(1,n.length);if(n.indexOf(t)===0)try{return decodeURIComponent(n.substring(t.length,n.length))}catch{return n.substring(t.length,n.length)}}return null},Zl=(e,t,r)=>{if(typeof document=="undefined")return;let o="";if(r){let n=new Date;n.setTime(n.getTime()+r*24*60*60*1e3),o=`; expires=${n.toUTCString()}`}document.cookie=`rmp_${e}=${encodeURIComponent(t||"")}${o}; path=/`};var Jl=async()=>{let e="https://cdn.jsdelivr.net/npm/hls.js@1.5.7/dist/hls.min.js";try{let r=Xl("internet_speed");if(r)return parseFloat(r);let o=new AbortController,n=setTimeout(()=>o.abort(),1e4),i=performance.now(),c=await(await fetch(e,{signal:o.signal,cache:"no-store"})).blob();clearTimeout(n);let a=performance.now(),l=c.size*8||1638400,u=(a-i)/1e3,p=l/(u*1024*1024);return Zl("internet_speed",p.toString(),7),p}catch(r){return r.name!=="AbortError"&&console.error("An error occurred while measuring the network speed: ",r),null}},ec=(e,t)=>{let r=[{quality:144,minSpeed:.3},{quality:270,minSpeed:.5},{quality:360,minSpeed:.7},{quality:480,minSpeed:1},{quality:720,minSpeed:2.5},{quality:1080,minSpeed:5},{quality:2160,minSpeed:20}],o;for(let n=r.length-1;n>=0;n--){let i=r[n];if(e>=i.minSpeed){o=i.quality;break}}if(o&&t.includes(o))return o;if(o)for(let n=r.length-1;n>=0;n--){let i=r[n];if(i.quality<=o&&t.includes(i.quality))return i.quality}for(let n=0;n<r.length;n++){let i=r[n];if(t.includes(i.quality))return i.quality}return t.length>0?t[0]:void 0};var tp=({onBuffer:e,onBufferEnd:t,onDisablePIP:r,onDuration:o,onEnablePIP:n,onEnded:i,onError:s,onPause:c,onPlay:a,onPlayBackQualityChange:l,onPlayBackRateChange:u,onProgress:p,onReady:d,onSeek:y,onStart:P,onLoaded:f,onMount:A,updateState:g,playerState:h,extraProps:{url:C,sources:v,fullHDQualityBreak:M,prevented:R}})=>{let[x,_]=De.default.useState(null),q=De.default.useRef(g);q.current=g;let k=De.default.useRef({onBuffer:e,onBufferEnd:t,onDisablePIP:r,onDuration:o,onEnablePIP:n,onEnded:i,onError:s,onPause:c,onPlay:a,onPlayBackQualityChange:l,onPlayBackRateChange:u,onProgress:p,onReady:d,onSeek:y,onStart:P,onLoaded:f,onMount:A});k.current={onBuffer:e,onBufferEnd:t,onDisablePIP:r,onDuration:o,onEnablePIP:n,onEnded:i,onError:s,onPause:c,onPlay:a,onPlayBackQualityChange:l,onPlayBackRateChange:u,onProgress:p,onReady:d,onSeek:y,onStart:P,onLoaded:f,onMount:A};let b=De.default.useRef(R);b.current=R;let E=De.default.useRef(h.seeking);E.current=h.seeking;let B=De.default.useRef(!1);if(De.default.useEffect(()=>{B.current=!1},[v,M]),v.length>0&&!B.current){let L=v.map(I=>I.resolution);L.includes(M)===!1&&(console.error(`ReactJSMediaPlayer: Invalid fullHDQualityBreak value "${M}". Accepted resolutions are: ${L.join(", ")}. Falling back to highest available.`),B.current=!0)}De.default.useEffect(()=>{let L=!1;return(async()=>{var I,re;if(v&&v.length>0){let Z=Ao(v,"resolution");if(x===null&&Z)try{let ae=await Jl();if(L)return;let oe=Object.keys(Z).map(Number),G=ec(ae||0,oe);if(ae!==null&&G)_((re=(I=Z[G==null?void 0:G.toString()])==null?void 0:I.src)!=null?re:v[0].src),q.current(we=>({...we,playbackQuality:G}));else{let we=v[0].src;_(we),q.current(me=>({...me,playbackQuality:Number(we)}))}}catch{if(L)return;let oe=v[0].src;_(oe),q.current(G=>({...G,playbackQuality:Number(oe)}))}}})(),()=>{L=!0}},[v,x]);let F=De.default.useMemo(()=>{var L,I;if(v&&v.length>0){let re=Ao(v,"resolution");return h.playbackQuality===null||h.playbackQuality===void 0?x!==null?x:v[0].src:(I=(L=re[h.playbackQuality])==null?void 0:L.src)!=null?I:v[0].src}return C},[C,v,h.playbackQuality,x]);return{...De.default.useMemo(()=>({onBuffer:(...L)=>{k.current.onBuffer&&k.current.onBuffer(...L)},onBufferEnd:(...L)=>{k.current.onBufferEnd&&k.current.onBufferEnd(...L)},onDisablePIP:L=>{k.current.onDisablePIP&&k.current.onDisablePIP(L),q.current(I=>({...I,isPIP:!1}))},onDuration:L=>{k.current.onDuration&&k.current.onDuration(L),q.current(I=>({...I,duration:L}))},onEnablePIP:L=>{k.current.onEnablePIP&&k.current.onEnablePIP(L),q.current(I=>({...I,isPIP:!0}))},onEnded:L=>{k.current.onEnded&&k.current.onEnded(L),q.current(I=>({...I,isEnded:!0}))},onError:(L,I,re,Z)=>{k.current.onError&&k.current.onError(L,I,re,Z);let ae=["networkError"],oe=["bufferStalledError","bufferNudgeOnStall","bufferAppendError","fragParsingError"];ae.includes(I==null?void 0:I.type)||(I==null?void 0:I.type)==="mediaError"&&oe.includes(I==null?void 0:I.details)||q.current(we=>{var me;return{...we,kernelError:I?{type:(I==null?void 0:I.type)||"UnknownError",detail:((me=I==null?void 0:I.error)==null?void 0:me.message)||"Something was wrong with the playback. Please try again."}:null,isLoading:!1,playing:!1}})},onPause:L=>{k.current.onPause&&k.current.onPause(L),q.current(I=>({...I,playing:!1}))},onPlay:L=>{k.current.onPlay&&k.current.onPlay(L),q.current(I=>{var re;return{...I,playing:!0,isEnded:!1,hasAudio:b.current?!0:(re=L==null?void 0:L.hasAudio)!=null?re:!1}})},onPlayBackQualityChange:L=>{k.current.onPlayBackQualityChange&&k.current.onPlayBackQualityChange(L),q.current(I=>({...I,playbackQuality:L}))},onPlayBackRateChange:L=>{k.current.onPlayBackRateChange&&k.current.onPlayBackRateChange(L),q.current(I=>({...I,playbackRate:L}))},onProgress:L=>{k.current.onProgress&&k.current.onProgress(L),E.current||q.current(I=>({...I,played:L.playedSeconds,loaded:L.loaded}))},onReady:L=>{k.current.onReady&&k.current.onReady(L),q.current(I=>({...I,isLoading:!1}))},onSeek:L=>{k.current.onSeek&&k.current.onSeek(L),q.current(I=>({...I,seek:L}))},onStart:()=>{k.current.onStart&&k.current.onStart()},onLoaded:(...L)=>{k.current.onLoaded&&k.current.onLoaded(...L)},onMount:(...L)=>{k.current.onMount&&k.current.onMount(...L)}}),[]),videoUrl:F!=null?F:x}},tc=tp;var rc=S.div`
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  margin: auto;
`;var oc=se.default.forwardRef((e,t)=>{var f;let[r,o]=se.default.useState({}),[n,i]=se.default.useState({...Co,isPIP:e.pip,isMuted:e.muted,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,volume:e.muted?0:(f=e.volume)!=null?f:Co.volume}),[s,c]=se.default.useState({pip:e.pip,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,muted:e.muted,volume:e.volume});(e.pip!==s.pip||e.playbackRate!==s.playbackRate||e.loop!==s.loop||e.playing!==s.playing||e.muted!==s.muted||e.volume!==s.volume)&&(c({pip:e.pip,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,muted:e.muted,volume:e.volume}),i(A=>{var g;return{...A,isPIP:e.pip,isMuted:e.muted,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,volume:e.muted?0:(g=e.volume)!=null?g:Co.volume}}));let a=se.default.useRef(null),l=se.default.useRef(null),u=se.default.useCallback(A=>{var g,h;(h=(g=a.current)==null?void 0:g.handleKeyDown)==null||h.call(g,A)},[]),p=se.default.useMemo(()=>e.prevented||e.playing&&e.muted,[e.muted,e.playing,e.prevented]);se.default.useEffect(()=>{if(e.player&&n.isLoading===!1){let g=e.player.getPlayer(),h=setTimeout(()=>{o({width:`${g.offsetWidth}px`,height:`${g.offsetHeight}px`})},500);return()=>{clearTimeout(h)}}},[e.player,n.isLoading]);let{videoUrl:d,...y}=tc({onBuffer:e.onBuffer,onBufferEnd:e.onBufferEnd,onDisablePIP:e.onDisablePIP,onDuration:e.onDuration,onEnablePIP:e.onEnablePIP,onEnded:e.onEnded,onError:e.onError,onPause:e.onPause,onPlay:e.onPlay,onPlayBackQualityChange:e.onPlayBackQualityChange,onPlayBackRateChange:e.onPlayBackRateChange,onProgress:e.onProgress,onReady:e.onReady,onSeek:e.onSeek,onStart:e.onStart,onLoaded:e.onLoaded,onMount:e.onMount,updateState:i,playerState:n,extraProps:{url:e.url,sources:e.sources,fullHDQualityBreak:e.fullHDQualityBreak,prevented:p}}),P=se.default.useMemo(()=>({attributes:e.config.attributes,tracks:e.config.tracks,forceVideo:e.config.forceVideo,forceHLS:e.config.forceHLS,dashVersion:e.config.dashVersion,forceDASH:e.config.forceDASH,forceFLV:e.config.forceFLV,flvVersion:e.config.flvVersion,forceLoad:e.config.forceLoad,forceDisableHls:e.config.forceDisableHls,hlsOptions:e.config.hlsOptions,hlsVersion:e.config.hlsVersion,forceSafariHLS:e.config.forceSafariHLS,loopOnEnded:e.config.loopOnEnded}),[e.config]);return se.default.createElement(Kl,{tabIndex:0,role:"application",dir:"ltr",ref:l,onKeyDown:u,style:r},se.default.createElement(rc,null,d&&se.default.createElement(Be,{ref:t,activePlayer:e.activePlayer,loop:n.loop,muted:n.isMuted,pip:n.isPIP,playbackRate:n.playbackRate,playbackQuality:n.playbackQuality,playsinline:e.playsinline,progressInterval:e.progressInterval,stopOnUnmount:e.stopOnUnmount,volume:n.volume,url:d,width:e.width,height:e.height,playing:n.playing,config:P,disableDeferredLoading:e.disableDeferredLoading,progressFrequency:e.progressFrequency,...y})),se.default.createElement(Yl,{ref:a,playerRef:l,url:d,sources:e.sources,hasAudio:n.hasAudio,spriteVTTFile:e.spriteVTTFile,hasResource:typeof d=="string"||e.sources.length>0,kernelMsg:n.kernelError,loading:n.isLoading,prevented:p,muted:n.isMuted,paused:n.playing===!1,live:e.live,buffered:n.loaded,ended:n.isEnded,seeking:n.seeking,waiting:e.waiting,duration:n.duration,currentTime:n.played,volume:n.volume,playbackRate:n.playbackRate,pictureInPictureEnabled:!0,pip:n.isPIP,loop:n.loop,fullscreen:n.isFullScreen,fullHDQualityBreak:e.fullHDQualityBreak,language:e.language,poster:e.poster,updateState:i,player:e.player}))});oc.displayName="MediaPlayerSkin";var nc=se.default.memo(oc,(e,t)=>e.url===t.url&&e.sources===t.sources&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.spriteVTTFile===t.spriteVTTFile&&e.prevented===t.prevented&&e.waiting===t.waiting&&e.playing===t.playing&&e.loop===t.loop&&e.volume===t.volume&&e.muted===t.muted&&e.paused===t.paused&&e.live===t.live&&e.pip===t.pip&&e.playbackRate===t.playbackRate&&e.width===t.width&&e.height===t.height&&e.progressInterval===t.progressInterval&&e.playsinline===t.playsinline&&e.pipeline===t.pipeline&&e.stopOnUnmount===t.stopOnUnmount&&e.activePlayer===t.activePlayer&&e.player===t.player&&e.progressFrequency===t.progressFrequency&&e.disableDeferredLoading===t.disableDeferredLoading&&e.language===t.language&&e.poster===t.poster&&e.config===t.config&&e.onReady===t.onReady&&e.onStart===t.onStart&&e.onPlay===t.onPlay&&e.onPause===t.onPause&&e.onBuffer===t.onBuffer&&e.onBufferEnd===t.onBufferEnd&&e.onEnded===t.onEnded&&e.onError===t.onError&&e.onDuration===t.onDuration&&e.onSeek===t.onSeek&&e.onPlayBackRateChange===t.onPlayBackRateChange&&e.onPlayBackQualityChange===t.onPlayBackQualityChange&&e.onProgress===t.onProgress&&e.onEnablePIP===t.onEnablePIP&&e.onDisablePIP===t.onDisablePIP&&e.onLoaded===t.onLoaded&&e.onMount===t.onMount);_e();var rp=typeof window!="undefined"&&window.document&&typeof document!="undefined",op=typeof global!="undefined"&&global.window&&global.window.document,np=Object.keys(Fo),ip=rp||op?Xt.default.Suspense:()=>null,sc=e=>{var t;return t=class extends Xt.default.Component{constructor(){super(...arguments);w(this,"player",null);w(this,"state",{});w(this,"references",{wrapper:n=>{this.wrapper=n},player:n=>{this.player=n}});w(this,"getDuration",()=>this.player?this.player.getDuration():null);w(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null);w(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null);w(this,"getInternalPlayer",(n="player")=>this.player?this.player.getInternalPlayer(n):null);w(this,"seekTo",(n,i,s)=>{if(!this.player)return null;this.player.seekTo(n,i,s)});w(this,"handleReady",()=>{this.props.onReady&&this.props.onReady(this)});w(this,"getActivePlayer",ir((n,i)=>e.canPlay(n,i)?e:null));w(this,"getConfig",ir((n,i,s)=>{let{config:c}=this.props;return ic.default.all([_r.config,_r.config[s]||{},c,c[s]||{}])}));w(this,"getAttributes",ir(()=>Nn(this.props,np)));w(this,"getPlayerConfig",ir(n=>({attributes:n.attributes,tracks:n.tracks,forceVideo:n.forceVideo,forceHLS:n.forceHLS,dashVersion:n.dashVersion,forceDASH:n.forceDASH,forceFLV:n.forceFLV,flvVersion:n.flvVersion,forceLoad:n.forceLoad,forceDisableHls:n.forceDisableHls,hlsOptions:n.hlsOptions,hlsVersion:n.hlsVersion,forceSafariHLS:n.forceSafariHLS,loopOnEnded:n.loopOnEnded})));w(this,"getSourceProps",()=>"sources"in this.props&&this.props.sources!==void 0?{sources:this.props.sources,fullHDQualityBreak:this.props.fullHDQualityBreak}:{sources:[]});w(this,"getUrlProp",()=>"url"in this.props&&this.props.url!==void 0?this.props.url:"");w(this,"renderActivePlayer",(n,i)=>{if(!n&&!i)return null;let s=this.getActivePlayer(n,i);if(!s)return null;let c=this.getConfig(n,i,s.key),a=this.getPlayerConfig(c),l=this.getSourceProps(),u=this.getUrlProp();return Xt.default.createElement(nc,{key:s.key,ref:this.references.player,activePlayer:s.lazyPlayer,player:this.player,loop:this.props.loop,muted:this.props.muted,pip:this.props.pip,playbackRate:this.props.playbackRate,playsinline:this.props.playsinline,progressInterval:this.props.progressInterval,stopOnUnmount:this.props.stopOnUnmount,volume:this.props.volume,url:u,sources:l.sources,width:this.props.width,height:this.props.height,playing:this.props.playing,config:a,prevented:this.props.prevented,waiting:this.props.waiting,onBuffer:this.props.onBuffer,onBufferEnd:this.props.onBufferEnd,onDisablePIP:this.props.onDisablePIP,onDuration:this.props.onDuration,onEnablePIP:this.props.onEnablePIP,onEnded:this.props.onEnded,onError:this.props.onError,onPause:this.props.onPause,onPlay:this.props.onPlay,onPlayBackQualityChange:this.props.onPlayBackQualityChange,onPlayBackRateChange:this.props.onPlayBackRateChange,fullHDQualityBreak:l.fullHDQualityBreak,language:this.props.language,live:this.props.live,onProgress:this.props.onProgress,onReady:this.handleReady,onSeek:this.props.onSeek,onStart:this.props.onStart,onLoaded:this.props.onLoaded,onMount:this.props.onMount,disableDeferredLoading:this.props.disableDeferredLoading,progressFrequency:this.props.progressFrequency,spriteVTTFile:this.props.spriteVTTFile,poster:this.props.poster})})}shouldComponentUpdate(n,i){return!(0,Tn.default)(this.props,n)||!(0,Tn.default)(this.state,i)}componentDidUpdate(){}render(){let{wrapper:n}=this.props,i=this.getUrlProp(),s=this.getSourceProps(),{className:c,...a}=this.getAttributes(),l=typeof n=="string"?this.references.wrapper:void 0;return Xt.default.createElement(n,{ref:l,"data-testid":"media-player-skin",className:`reactjs-media-player${c?` ${c}`:""}`,...a},Xt.default.createElement(ip,{fallback:this.props.fallback},this.renderActivePlayer(i,s.sources)))}},w(t,"displayName","MediaPlayer"),w(t,"propTypes",Fo),w(t,"defaultProps",_r),w(t,"canPlay",(n,i)=>!!e.canPlay(n,i)),w(t,"canEnablePIP",n=>!!(e.canEnablePIP&&e.canEnablePIP(n))),t};var sp=sc(Xn);return gc(ap);})();
ReactJSMediaPlayer = ReactJSMediaPlayer.default;
//# sourceMappingURL=ReactJSMediaPlayer.js.map
