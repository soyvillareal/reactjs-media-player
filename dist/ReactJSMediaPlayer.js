var ReactJSMediaPlayer=(()=>{var lc=Object.create;var Zt=Object.defineProperty;var cc=Object.getOwnPropertyDescriptor;var uc=Object.getOwnPropertyNames;var pc=Object.getPrototypeOf,dc=Object.prototype.hasOwnProperty;var fc=(e,t,r)=>t in e?Zt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var mc=(e=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(e,{get:(t,r)=>(typeof require!="undefined"?require:t)[r]}):e)(function(e){if(typeof require!="undefined")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var Jt=(e,t)=>()=>(e&&(t=e(e=0)),t);var Qe=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),An=(e,t)=>{for(var r in t)Zt(e,r,{get:t[r],enumerable:!0})},Ln=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of uc(t))!dc.call(e,n)&&n!==r&&Zt(e,n,{get:()=>t[n],enumerable:!(o=cc(t,n))||o.enumerable});return e};var y=(e,t,r)=>(r=e!=null?lc(pc(e)):{},Ln(t||!e||!e.__esModule?Zt(r,"default",{value:e,enumerable:!0}):r,e)),hc=e=>Ln(Zt({},"__esModule",{value:!0}),e);var x=(e,t,r)=>(fc(e,typeof t!="symbol"?t+"":t,r),r);var P=Qe((ap,In)=>{In.exports=globalThis.React});var Rn=Qe((lp,Mn)=>{Mn.exports=function(t,r,o){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");typeof r=="function"&&(o=r,r={}),r=r||{},o=o||function(){},i.type=r.type||"text/javascript",i.charset=r.charset||"utf8",i.async="async"in r?!!r.async:!0,i.src=t,r.attrs&&yc(i,r.attrs),r.text&&(i.text=""+r.text);var s="onload"in i?On:gc;s(i,o),i.onload||On(i,o),n.appendChild(i)};function yc(e,t){for(var r in t)e.setAttribute(r,t[r])}function On(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function gc(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}});function Eo(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}function Fn(e){return(e==null?void 0:e.mozHasAudio)||(e==null?void 0:e.webkitAudioDecodedByteCount)>0||(e==null?void 0:e.audioTracks)!==void 0&&e.audioTracks.length>0}function Tt(e){let t=e||document.createElement("video"),r=/iPhone|iPod/.test(navigator.userAgent)===!1;return t.webkitSupportsPresentationMode&&typeof t.webkitSetPresentationMode=="function"&&r}var Dn,_n,Bn,Et,Mr,To=Jt(()=>{Dn=y(P()),_n=y(Rn()),Bn=e=>(0,Dn.lazy)(async()=>{let t=await e();return typeof t.default=="function"?t:t.default});Et={},Mr=function(t,r,o=null,n=()=>!0,i=_n.default){let s=Eo(r);return s&&n&&n(s)?Promise.resolve(s):new Promise((l,a)=>{if(Et[t]){Et[t].push({resolve:l,reject:a});return}Et[t]=[{resolve:l,reject:a}];let c=u=>{Et[t].forEach(p=>p.resolve(u))};if(o){let u=window[o];window[o]=function(){u&&u(),c(Eo(r))}}i(t,u=>{u?(Et[t].forEach(p=>p.reject(u)),Et[t]=null):o||c(Eo(r))})})}});function Nn(e,...t){let o=[].concat(...t),n={},i=Object.keys(e);for(let s of i)o.indexOf(s)===-1&&(n[s]=e[s]);return n}function We(e){return typeof window!="undefined"&&typeof window.MediaStream!="undefined"&&e instanceof window.MediaStream}function Vn(e){return/^blob:/.test(e)}function qn(e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r&&(r.current=t)})}}var ot,Ao,Ae=Jt(()=>{ot=e=>{let t=Math.floor(e/3600),r=Math.floor(e%3600/60),o=e%60;return t>0?`${String(t).padStart(2,"0")}:${String(r).padStart(2,"0")}:${String(o).padStart(2,"0")}`:`${String(r).padStart(2,"0")}:${String(o).padStart(2,"0")}`},Ao=(e,t)=>e.reduce((r,o)=>(r[o[t]]=o,r),{})});var bc,Lo,Io,Oo,Sc,er,Mo=Jt(()=>{Ae();bc=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,Lo=/\.(m3u8)($|\?)/i,Io=/\.(mpd)($|\?)/i,Oo=/\.(flv)($|\?)/i,Sc=(e,t)=>t&&t.length>0||We(e)||Vn(e)?!0:bc.test(e)||Lo.test(e)||Io.test(e)||Oo.test(e),er=Sc});var Ro,vc,Do,Hn,zn,$n,jn,Un,Qn,Wn,Yn=Jt(()=>{Ro=typeof navigator!="undefined",vc=Ro&&navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Do=Ro&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||vc)&&!window.MSStream,Hn=Ro&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!window.MSStream,zn="https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js",$n="Hls",jn="https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js",Un="dashjs",Qn="https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js",Wn="flvjs"});var Gn={};An(Gn,{default:()=>At});var Rr,At,Kn=Jt(()=>{Rr=y(P());Yn();Ae();To();Mo();At=class extends Rr.default.Component{constructor(){super(...arguments);x(this,"onReady",r=>this.props.onReady(r));x(this,"onPlay",r=>this.props.onPlay({...r,hasAudio:Fn(this.player)}));x(this,"onBuffer",r=>this.props.onBuffer(r));x(this,"onBufferEnd",r=>this.props.onBufferEnd(r));x(this,"onPause",r=>this.props.onPause(r));x(this,"onEnded",r=>this.props.onEnded(r));x(this,"onError",(r,o,n,i)=>this.props.onError(r,o,n,i));x(this,"onPlayBackRateChange",r=>{this.props.onPlayBackRateChange(r.target.playbackRate)});x(this,"onEnablePIP",r=>this.props.onEnablePIP(r));x(this,"onDisablePIP",r=>{let{onDisablePIP:o,playing:n}=this.props;o&&o(r),n&&this.play()});x(this,"onPresentationModeChange",r=>{if(this.player&&Tt(this.player)){let{webkitPresentationMode:o}=this.player;o==="picture-in-picture"?this.onEnablePIP(r):o==="inline"&&this.onDisablePIP(r)}});x(this,"onSeek",r=>{var o;this.props.onSeek((o=r.target)==null?void 0:o.currentTime)});x(this,"mute",()=>{this.player.muted=!0});x(this,"unmute",()=>{this.player.muted=!1});x(this,"renderTrack",(r,o)=>Rr.default.createElement("track",{key:o,...r}));x(this,"ref",r=>{this.player&&(this.prevPlayer=this.player),this.player=r})}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);let r=this.getSource(this.props.url);r&&(this.player.src=r),(Do||this.props.config.forceDisableHls)&&this.player.load()}componentDidUpdate(r){this.removeListeners(this.prevPlayer,r.url),this.addListeners(this.player),this.props.url!==r.url&&We(this.props.url)===!1&&(this.player.srcObject=null)}componentWillUnmount(){this.player.removeAttribute("src"),this.removeListeners(this.player)}addListeners(r){let{url:o,playsinline:n}=this.props;r&&(r.addEventListener("play",this.onPlay),r.addEventListener("waiting",this.onBuffer),r.addEventListener("playing",this.onBufferEnd),r.addEventListener("pause",this.onPause),r.addEventListener("seeked",this.onSeek),r.addEventListener("ended",this.onEnded),r.addEventListener("error",this.onError),r.addEventListener("ratechange",this.onPlayBackRateChange),r.addEventListener("enterpictureinpicture",this.onEnablePIP),r.addEventListener("leavepictureinpicture",this.onDisablePIP),r.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(o)===!1&&r.addEventListener("canplay",this.onReady),n&&(r.setAttribute("playsinline",""),r.setAttribute("webkit-playsinline",""),r.setAttribute("x5-playsinline","")))}removeListeners(r,o){r&&(r.removeEventListener("canplay",this.onReady),r.removeEventListener("play",this.onPlay),r.removeEventListener("waiting",this.onBuffer),r.removeEventListener("playing",this.onBufferEnd),r.removeEventListener("pause",this.onPause),r.removeEventListener("seeked",this.onSeek),r.removeEventListener("ended",this.onEnded),r.removeEventListener("error",this.onError),r.removeEventListener("ratechange",this.onPlayBackRateChange),r.removeEventListener("enterpictureinpicture",this.onEnablePIP),r.removeEventListener("leavepictureinpicture",this.onDisablePIP),r.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(o)||r.removeEventListener("canplay",this.onReady))}shouldUseHLS(r){return Hn&&this.props.config.forceSafariHLS||this.props.config.forceHLS?!0:Do||this.props.config.forceDisableHls?!1:Lo.test(r)}shouldUseDASH(r){return Io.test(r)||this.props.config.forceDASH}shouldUseFLV(r){return Oo.test(r)||this.props.config.forceFLV}load(r,o){let{hlsVersion:n,hlsOptions:i,dashVersion:s,flvVersion:l}=this.props.config;if(o!==!1){if(this.hls&&this.hls.destroy(),this.dash&&this.dash.reset(),this.flv&&this.flv.unload(),this.shouldUseHLS(r))Mr(zn.replace("VERSION",n),$n).then(a=>{this.hls=new a(i),this.hls.on(a.Events.MANIFEST_PARSED,()=>{this.props.onReady()}),this.hls.on(a.Events.ERROR,(c,u)=>{this.props.onError(c,u,this.hls,a)}),this.hls.loadSource(r),this.hls.attachMedia(this.player),this.props.onLoaded()});else if(this.shouldUseDASH(r))Mr(jn.replace("VERSION",s),Un).then(a=>{this.dash=a.MediaPlayer().create(),this.dash.initialize(this.player,r,this.props.playing),this.dash.on("error",function(c){this.props.onError(c,null,this.dash,a)}),parseInt(s)<3?this.dash.getDebug().setLogToBrowserConsole(!1):this.dash.updateSettings({debug:{logLevel:a.LogLevel.LOG_LEVEL_NONE}}),this.props.onLoaded()});else if(this.shouldUseFLV(r))Mr(Qn.replace("VERSION",l),Wn).then(a=>{this.flv=a.createPlayer({type:"flv",url:r}),this.flv.attachMediaElement(this.player),this.flv.on(a.Events.ERROR,(c,u)=>{this.props.onError(c,u,this.flv,a)}),this.flv.load(),this.props.onLoaded()});else if(We(r))try{this.player.srcObject=r}catch{this.player.src=window.URL.createObjectURL(r)}}}getPlayer(){return this.player}play(){let r=this.player.play();r&&r.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.removeAttribute("src"),this.dash&&this.dash.reset()}seekTo(r,o=!0){this.player.currentTime=r,o===!1&&this.pause()}setVolume(r){this.player.volume=r}enablePIP(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player?this.player.requestPictureInPicture():Tt(this.player)&&this.player.webkitPresentationMode!=="picture-in-picture"&&this.player.webkitSetPresentationMode("picture-in-picture")}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player?document.exitPictureInPicture():Tt(this.player)&&this.player.webkitPresentationMode!=="inline"&&this.player.webkitSetPresentationMode("inline")}setPlaybackRate(r){try{this.player.playbackRate=r}catch(o){this.props.onError(o)}}getDuration(){if(!this.player)return null;let{duration:r,seekable:o}=this.player;return r===1/0&&o.length>0?o.end(o.length-1):r}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;let{buffered:r}=this.player;if(r.length===0)return 0;let o=r.end(r.length-1),n=this.getDuration();return n!==null&&o>n?n:o}getSource(r){if(!(We(r)||this.shouldUseHLS(r)||this.shouldUseDASH(r)||this.shouldUseFLV(r)))return r}render(){var u;let{url:r,playing:o,loop:n,muted:i,config:s,width:l,height:a}=this.props,c={width:l==="auto"?l:"100%",height:a==="auto"?a:"100%"};return Rr.default.createElement("video",{"data-testid":"video-element",ref:this.ref,src:this.getSource(r),style:c,preload:"auto",autoPlay:o||void 0,controls:!1,muted:i,loop:n,...s.attributes},(u=s.tracks)==null?void 0:u.map(this.renderTrack))}};x(At,"displayName","PlayerCore"),x(At,"canPlay",er)});var ti=Qe((xp,ei)=>{"use strict";var wc=function(t){return xc(t)&&!kc(t)};function xc(e){return!!e&&typeof e=="object"}function kc(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Ec(e)}var Pc=typeof Symbol=="function"&&Symbol.for,Cc=Pc?Symbol.for("react.element"):60103;function Ec(e){return e.$$typeof===Cc}function Tc(e){return Array.isArray(e)?[]:{}}function tr(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Lt(Tc(e),e,t):e}function Ac(e,t,r){return e.concat(t).map(function(o){return tr(o,r)})}function Lc(e,t){if(!t.customMerge)return Lt;var r=t.customMerge(e);return typeof r=="function"?r:Lt}function Ic(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function Zn(e){return Object.keys(e).concat(Ic(e))}function Jn(e,t){try{return t in e}catch{return!1}}function Oc(e,t){return Jn(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function Mc(e,t,r){var o={};return r.isMergeableObject(e)&&Zn(e).forEach(function(n){o[n]=tr(e[n],r)}),Zn(t).forEach(function(n){Oc(e,n)||(Jn(e,n)&&r.isMergeableObject(t[n])?o[n]=Lc(n,r)(e[n],t[n],r):o[n]=tr(t[n],r))}),o}function Lt(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||Ac,r.isMergeableObject=r.isMergeableObject||wc,r.cloneUnlessOtherwiseSpecified=tr;var o=Array.isArray(t),n=Array.isArray(e),i=o===n;return i?o?r.arrayMerge(e,t,r):Mc(e,t,r):tr(t,r)}Lt.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(o,n){return Lt(o,n,r)},{})};var Rc=Lt;ei.exports=Rc});var _o=Qe((Pp,oi)=>{var Fc=typeof Element!="undefined",Nc=typeof Map=="function",Vc=typeof Set=="function",qc=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function _r(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,o,n;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(o=r;o--!==0;)if(!_r(e[o],t[o]))return!1;return!0}var i;if(Nc&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(o=i.next()).done;)if(!t.has(o.value[0]))return!1;for(i=e.entries();!(o=i.next()).done;)if(!_r(o.value[1],t.get(o.value[0])))return!1;return!0}if(Vc&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(o=i.next()).done;)if(!t.has(o.value[0]))return!1;return!0}if(qc&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(o=r;o--!==0;)if(e[o]!==t[o])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(n=Object.keys(e),r=n.length,r!==Object.keys(t).length)return!1;for(o=r;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[o]))return!1;if(Fc&&e instanceof Element)return!1;for(o=r;o--!==0;)if(!((n[o]==="_owner"||n[o]==="__v"||n[o]==="__o")&&e.$$typeof)&&!_r(e[n[o]],t[n[o]]))return!1;return!0}return e!==e&&t!==t}oi.exports=function(t,r){try{return _r(t,r)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}});var ii=Qe((Cp,ni)=>{"use strict";var Hc="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";ni.exports=Hc});var ci=Qe((Ep,li)=>{"use strict";var zc=ii();function si(){}function ai(){}ai.resetWarningCache=si;li.exports=function(){function e(o,n,i,s,l,a){if(a!==zc){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ai,resetWarningCache:si};return r.PropTypes=r,r}});var Q=Qe((Lp,ui)=>{ui.exports=ci()();var Tp,Ap});var xi=Qe((Wp,wi)=>{wi.exports=function(t,r,o,n){var i=o?o.call(n,t,r):void 0;if(i!==void 0)return!!i;if(t===r)return!0;if(typeof t!="object"||!t||typeof r!="object"||!r)return!1;var s=Object.keys(t),l=Object.keys(r);if(s.length!==l.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(r),c=0;c<s.length;c++){var u=s[c];if(!a(u))return!1;var p=t[u],f=r[u];if(i=o?o.call(n,p,f,u):void 0,i===!1||i===void 0&&p!==f)return!1}return!0}});var ip={};An(ip,{default:()=>np});To();Mo();var Xn={key:"core",name:"PlayerCore",canPlay:er,canEnablePIP:e=>er(e)&&(document.pictureInPictureEnabled||Tt()),lazyPlayer:Bn(()=>Promise.resolve().then(()=>(Kn(),Gn)))};var Kt=y(P()),oc=y(ti());var ri=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Dc(e,t){return!!(e===t||ri(e)&&ri(t))}function _c(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!Dc(e[r],t[r]))return!1;return!0}function Bc(e,t){t===void 0&&(t=_c);var r,o=[],n,i=!1;function s(){for(var l=[],a=0;a<arguments.length;a++)l[a]=arguments[a];return i&&r===this&&t(l,o)||(n=e.apply(this,l),i=!0,r=this,o=l),n}return s}var Dr=Bc;var Tn=y(_o());var Pe=y(Q());var pi={exitFullScreenMode:"Salir del modo de pantalla completa (f)",fullScreen:"Pantalla completa",play:"Reproducir",pause:"Pausar",normal:"Normal",settings:"Configuraci\xF3n",speed:"Velocidad",quality:"Calidad",hd:"HD",live:"En vivo",clickToUnmute:"Haga clic para desactivar el silencio",playbackStuckClickResumePlayback:"La reproducci\xF3n est\xE1 bloqueada, haga clic para reanudar la reproducci\xF3n.",mute:"Silenciar (m)",activateSound:"Activar sonido",thisVideoHasNoSound:"Este video no tiene sonido",timeBar:"Barra de tiempo"};var di={exitFullScreenMode:"Exit full screen mode (f)",fullScreen:"Full screen",play:"Play",pause:"Pause",normal:"Normal",settings:"Settings",speed:"Speed",quality:"Quality",hd:"HD",live:"Live",clickToUnmute:"Click to unmute",playbackStuckClickResumePlayback:"Playback is stuck, click to resume playback.",mute:"Mute (m)",activateSound:"Activate sound",thisVideoHasNoSound:"This video has no sound",timeBar:"Time bar"};var It={en:di,es:pi};var{string:Ye,bool:ne,number:rr,array:$c,oneOfType:Bo,shape:fi,object:mi,func:X}=Pe.default,hi=Object.keys(It),Fo={url:Ye,sources:Pe.default.arrayOf(Pe.default.shape({src:Pe.default.string.isRequired,resolution:Pe.default.number.isRequired}).isRequired),fullHDQualityBreak:Pe.default.number,spriteVTTFile:Pe.default.string,playing:ne,loop:ne,volume:rr,muted:ne,playbackRate:rr,width:Bo([Ye,rr]),height:Bo([Ye,rr]),progressInterval:rr,playsinline:ne,language:Pe.default.oneOf(hi),poster:Ye,pip:ne,stopOnUnmount:ne,fallback:Pe.node,waiting:ne,prevented:ne,wrapper:Bo([Ye,X,fi({render:X.isRequired})]),config:fi({attributes:mi,tracks:$c,forceVideo:ne,forceHLS:ne,forceSafariHLS:ne,forceDisableHls:ne,forceDASH:ne,forceFLV:ne,hlsOptions:mi,hlsVersion:Ye,dashVersion:Ye,flvVersion:Ye}),onReady:X,onStart:X,onPlay:X,onPause:X,onBuffer:X,onBufferEnd:X,onEnded:X,onError:X,onDuration:X,onSeek:X,onPlayBackRateChange:X,onPlayBackQualityChange:X,onProgress:X,onEnablePIP:X,onDisablePIP:X},J=()=>{},Br={url:"",sources:[],playing:!1,loop:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,fallback:null,waiting:!1,prevented:!1,wrapper:"div",language:hi[0],poster:"",config:{attributes:{},tracks:[],forceVideo:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.5.7",dashVersion:"4.7.4",flvVersion:"1.6.2",forceDisableHls:!1},onReady:J,onStart:J,onPlay:J,onPause:J,onBuffer:J,onBufferEnd:J,onEnded:J,onError:J,onDuration:J,onSeek:J,onPlayBackRateChange:J,onPlayBackQualityChange:J,onProgress:J,onEnablePIP:J,onDisablePIP:J};var ue=y(P());var No=y(P()),vi=y(_o());var Fr=y(Q()),{string:Ot,bool:he,number:or,array:jc,oneOfType:yi,shape:Uc,object:gi,func:ee}=Fr.default,bi={url:Ot,fullHDQualityBreak:Fr.default.number,spriteVTTFile:Fr.default.string,playing:he,loop:he,volume:or,muted:he,playbackRate:or,width:yi([Ot,or]),height:yi([Ot,or]),progressInterval:or,playsinline:he,pip:he,stopOnUnmount:he,config:Uc({attributes:gi,tracks:jc,forceVideo:he,forceHLS:he,forceSafariHLS:he,forceDisableHls:he,forceDASH:he,forceFLV:he,hlsOptions:gi,hlsVersion:Ot,dashVersion:Ot,flvVersion:Ot}),onReady:ee,onStart:ee,onPlay:ee,onPause:ee,onBuffer:ee,onBufferEnd:ee,onEnded:ee,onError:ee,onDuration:ee,onSeek:ee,onPlayBackRateChange:ee,onPlayBackQualityChange:ee,onProgress:ee,onEnablePIP:ee,onDisablePIP:ee},te=()=>{},Si={playing:!1,loop:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,config:{attributes:{},tracks:[],forceVideo:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.5.7",dashVersion:"4.7.4",flvVersion:"1.6.2",forceDisableHls:!1},onReady:te,onStart:te,onPlay:te,onPause:te,onBuffer:te,onBufferEnd:te,onEnded:te,onError:te,onDuration:te,onSeek:te,onPlayBackRateChange:te,onPlayBackQualityChange:te,onProgress:te,onEnablePIP:te,onDisablePIP:te};Ae();var Qc=5e3,Le=class extends No.default.Component{constructor(){super(...arguments);x(this,"progressTimeout",0);x(this,"durationCheckTimeout",0);x(this,"prevPlayed",0);x(this,"prevLoaded",0);x(this,"player",null);x(this,"loadOnReady",null);x(this,"seekOnPlay",null);x(this,"mounted",!1);x(this,"isReady",!1);x(this,"isPlaying",!1);x(this,"isLoading",!0);x(this,"startOnPlay",!0);x(this,"onDurationCalled",!1);x(this,"handlePlayerMount",r=>{this.player=r,this.player.load(this.props.url),this.progress()});x(this,"getInternalPlayer",r=>this.player?this.player[r]:null);x(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){let r=this.getCurrentTime()||0,o=this.getSecondsLoaded(),n=this.getDuration();if(n){let i={playedSeconds:r,played:r/n,loadedSeconds:null};o!==null&&(i.loadedSeconds=o,i.loaded=o/n),(i.playedSeconds!==this.prevPlayed||i.loadedSeconds!==this.prevLoaded)&&this.props.onProgress({loaded:i.loaded,loadedSeconds:i.loadedSeconds,played:i.played,playedSeconds:i.playedSeconds}),this.prevPlayed=i.playedSeconds,i.loadedSeconds!==void 0&&(this.prevLoaded=i.loadedSeconds)}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)});x(this,"handleReady",()=>{if(this.mounted===!1)return;this.isReady=!0,this.isLoading=!1;let{onReady:r,playing:o,volume:n,muted:i}=this.props;r&&r(),!i&&n!==null&&this.player.setVolume(n),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):o&&this.player.play(),this.handleDurationCheck()});x(this,"handlePlay",r=>{this.isPlaying=!0,this.isLoading=!1;let{onStart:o,onPlay:n,playbackRate:i}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&i!==1&&this.player.setPlaybackRate(i),o&&o(),this.startOnPlay=!1),n&&n(r),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()});x(this,"handlePause",r=>{this.isPlaying=!1,!this.isLoading&&this.props.onPause&&this.props.onPause(r)});x(this,"handleEnded",()=>{let{activePlayer:r,loop:o,onEnded:n}=this.props;r.defaultProps!==void 0&&r.defaultProps.config!==void 0&&r.defaultProps.config.loopOnEnded&&o===!0&&this.seekTo(0),o===!1&&(this.isPlaying=!1,n&&n())});x(this,"handleError",(r,o,n,i)=>{this.isLoading=!1,this.props.onError&&this.props.onError(r,o,n,i)});x(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);let r=this.getDuration();r?!this.onDurationCalled&&this.props.onDuration&&(this.props.onDuration(r),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)});x(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(r){if(!this.player)return;let{url:o,playing:n,volume:i,muted:s,playbackRate:l,playbackQuality:a,pip:c,activePlayer:u,disableDeferredLoading:p}=this.props;if((0,vi.default)(r.url,o)===!1){if(this.isLoading&&!(u!=null&&u.forceLoad)&&!p&&!We(o)){console.warn(`ReactJSMediaPlayer: the attempt to load ${o} is being deferred until the player has loaded`),this.loadOnReady=o;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(o,this.isReady),r.playbackQuality!==a&&this.player.seekTo(this.prevPlayed)}r.playing===!1&&n&&this.isPlaying===!1&&this.player.play(),r.playing&&n===!1&&this.isPlaying&&this.player.pause(),r.pip===!1&&c&&this.player.enablePIP&&this.player.enablePIP(),r.pip&&c===!1&&this.player.disablePIP&&this.player.disablePIP(),r.volume!==i&&i!==null&&this.player.setVolume(i),r.muted!==s&&(s?this.player.mute():(this.player.unmute(),i!==null&&setTimeout(()=>this.player.setVolume(i)))),r.playbackRate!==l&&this.player.setPlaybackRate&&this.player.setPlaybackRate(l)}getDuration(){return this.isReady===!1?null:this.player.getDuration()}getCurrentTime(){return this.isReady===!1?null:this.player.getCurrentTime()}getSecondsLoaded(){return this.isReady===!1?null:this.player.getSecondsLoaded()}getPlayer(){return this.player.getPlayer()}seekTo(r,o,n){if(this.isReady===!1){r!==0&&(this.seekOnPlay=r,setTimeout(()=>{this.seekOnPlay=null},Qc));return}if(o?o==="fraction":r>0&&r<1){let s=this.player.getDuration();if(!s){console.warn("ReactJSMediaPlayer: could not seek using fraction \u2013\xA0duration not yet available");return}this.player.seekTo(s*r,n);return}this.player.seekTo(r,n)}render(){let r=this.props.activePlayer;return r?No.default.createElement(r,{loop:this.props.loop,muted:this.props.muted,playsinline:this.props.playsinline,url:this.props.url,width:this.props.width,height:this.props.height,playing:this.props.playing,config:this.props.config,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError,onBuffer:this.props.onBuffer,onBufferEnd:this.props.onBufferEnd,onDisablePIP:this.props.onDisablePIP,onEnablePIP:this.props.onEnablePIP,onPlayBackRateChange:this.props.onPlayBackRateChange,onSeek:this.props.onSeek}):null}};x(Le,"displayName","PlayerProxy"),x(Le,"propTypes",bi),x(Le,"defaultProps",Si);var Lr=y(P()),B=y(Q());var V=y(P()),L=y(Q());var se=y(P()),ut=y(Q());var G=function(){return G=Object.assign||function(t){for(var r,o=1,n=arguments.length;o<n;o++){r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},G.apply(this,arguments)};function Mt(e,t,r){if(r||arguments.length===2)for(var o=0,n=t.length,i;o<n;o++)(i||!(o in t))&&(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o]);return e.concat(i||Array.prototype.slice.call(t))}var H=y(P()),es=y(xi());var q="-ms-",nt="-moz-",N="-webkit-",Nr="comm",Ge="rule",Rt="decl";var ki="@import";var Vr="@keyframes";var Pi="@layer";var Vo=Math.abs,nr=String.fromCharCode,ir=Object.assign;function Ci(e,t){return U(e,0)^45?(((t<<2^U(e,0))<<2^U(e,1))<<2^U(e,2))<<2^U(e,3):0}function qr(e){return e.trim()}function Ce(e,t){return(e=t.exec(e))?e[0]:e}function R(e,t,r){return e.replace(t,r)}function Dt(e,t,r){return e.indexOf(t,r)}function U(e,t){return e.charCodeAt(t)|0}function Ie(e,t,r){return e.slice(t,r)}function re(e){return e.length}function Hr(e){return e.length}function it(e,t){return t.push(e),e}function Ei(e,t){return e.map(t).join("")}function qo(e,t){return e.filter(function(r){return!Ce(r,t)})}var zr=1,_t=1,Ti=0,ye=0,W=0,Bt="";function sr(e,t,r,o,n,i,s,l){return{value:e,root:t,parent:r,type:o,props:n,children:i,line:zr,column:_t,length:s,return:"",siblings:l}}function qe(e,t){return ir(sr("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function st(e){for(;e.root;)e=qe(e.root,{children:[e]});it(e,e.siblings)}function Ai(){return W}function Li(){return W=ye>0?U(Bt,--ye):0,_t--,W===10&&(_t=1,zr--),W}function ge(){return W=ye<Ti?U(Bt,ye++):0,_t++,W===10&&(_t=1,zr++),W}function Ke(){return U(Bt,ye)}function ar(){return ye}function $r(e,t){return Ie(Bt,e,t)}function Ho(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ii(e){return zr=_t=1,Ti=re(Bt=e),ye=0,[]}function Oi(e){return Bt="",e}function jr(e){return qr($r(ye-1,zo(e===91?e+2:e===40?e+1:e)))}function Mi(e){for(;(W=Ke())&&W<33;)ge();return Ho(e)>2||Ho(W)>3?"":" "}function Ri(e,t){for(;--t&&ge()&&!(W<48||W>102||W>57&&W<65||W>70&&W<97););return $r(e,ar()+(t<6&&Ke()==32&&ge()==32))}function zo(e){for(;ge();)switch(W){case e:return ye;case 34:case 39:e!==34&&e!==39&&zo(W);break;case 40:e===41&&zo(e);break;case 92:ge();break}return ye}function Di(e,t){for(;ge()&&e+W!==57;)if(e+W===84&&Ke()===47)break;return"/*"+$r(t,ye-1)+"*"+nr(e===47?e:ge())}function _i(e){for(;!Ho(Ke());)ge();return $r(e,ye)}function Ni(e){return Oi(Ur("",null,null,null,[""],e=Ii(e),0,[0],e))}function Ur(e,t,r,o,n,i,s,l,a){for(var c=0,u=0,p=s,f=0,m=0,v=0,h=1,T=1,g=1,S=0,E="",C=n,O=i,A=o,d=E;T;)switch(v=S,S=ge()){case 40:if(v!=108&&U(d,p-1)==58){Dt(d+=R(jr(S),"&","&\f"),"&\f",Vo(c?l[c-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:d+=jr(S);break;case 9:case 10:case 13:case 32:d+=Mi(v);break;case 92:d+=Ri(ar()-1,7);continue;case 47:switch(Ke()){case 42:case 47:it(Wc(Di(ge(),ar()),t,r,a),a);break;default:d+="/"}break;case 123*h:l[c++]=re(d)*g;case 125*h:case 59:case 0:switch(S){case 0:case 125:T=0;case 59+u:g==-1&&(d=R(d,/\f/g,"")),m>0&&re(d)-p&&it(m>32?Fi(d+";",o,r,p-1,a):Fi(R(d," ","")+";",o,r,p-2,a),a);break;case 59:d+=";";default:if(it(A=Bi(d,t,r,c,u,n,l,E,C=[],O=[],p,i),i),S===123)if(u===0)Ur(d,t,A,A,C,i,p,l,O);else switch(f===99&&U(d,3)===110?100:f){case 100:case 108:case 109:case 115:Ur(e,A,A,o&&it(Bi(e,A,A,0,0,n,l,E,n,C=[],p,O),O),n,O,p,l,o?C:O);break;default:Ur(d,A,A,A,[""],O,0,l,O)}}c=u=m=0,h=g=1,E=d="",p=s;break;case 58:p=1+re(d),m=v;default:if(h<1){if(S==123)--h;else if(S==125&&h++==0&&Li()==125)continue}switch(d+=nr(S),S*h){case 38:g=u>0?1:(d+="\f",-1);break;case 44:l[c++]=(re(d)-1)*g,g=1;break;case 64:Ke()===45&&(d+=jr(ge())),f=Ke(),u=p=re(E=d+=_i(ar())),S++;break;case 45:v===45&&re(d)==2&&(h=0)}}return i}function Bi(e,t,r,o,n,i,s,l,a,c,u,p){for(var f=n-1,m=n===0?i:[""],v=Hr(m),h=0,T=0,g=0;h<o;++h)for(var S=0,E=Ie(e,f+1,f=Vo(T=s[h])),C=e;S<v;++S)(C=qr(T>0?m[S]+" "+E:R(E,/&\f/g,m[S])))&&(a[g++]=C);return sr(e,t,r,n===0?Ge:l,a,c,u,p)}function Wc(e,t,r,o){return sr(e,t,r,Nr,nr(Ai()),Ie(e,2,-2),0,o)}function Fi(e,t,r,o,n){return sr(e,t,r,Rt,Ie(e,0,o),Ie(e,o+1,-1),o,n)}function $o(e,t,r){switch(Ci(e,t)){case 5103:return N+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return N+e+e;case 4789:return nt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return N+e+nt+e+q+e+e;case 5936:switch(U(e,t+11)){case 114:return N+e+q+R(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return N+e+q+R(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return N+e+q+R(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return N+e+q+e+e;case 6165:return N+e+q+"flex-"+e+e;case 5187:return N+e+R(e,/(\w+).+(:[^]+)/,N+"box-$1$2"+q+"flex-$1$2")+e;case 5443:return N+e+q+"flex-item-"+R(e,/flex-|-self/g,"")+(Ce(e,/flex-|baseline/)?"":q+"grid-row-"+R(e,/flex-|-self/g,""))+e;case 4675:return N+e+q+"flex-line-pack"+R(e,/align-content|flex-|-self/g,"")+e;case 5548:return N+e+q+R(e,"shrink","negative")+e;case 5292:return N+e+q+R(e,"basis","preferred-size")+e;case 6060:return N+"box-"+R(e,"-grow","")+N+e+q+R(e,"grow","positive")+e;case 4554:return N+R(e,/([^-])(transform)/g,"$1"+N+"$2")+e;case 6187:return R(R(R(e,/(zoom-|grab)/,N+"$1"),/(image-set)/,N+"$1"),e,"")+e;case 5495:case 3959:return R(e,/(image-set\([^]*)/,N+"$1$`$1");case 4968:return R(R(e,/(.+:)(flex-)?(.*)/,N+"box-pack:$3"+q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+N+e+e;case 4200:if(!Ce(e,/flex-|baseline/))return q+"grid-column-align"+Ie(e,t)+e;break;case 2592:case 3360:return q+R(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(o,n){return t=n,Ce(o.props,/grid-\w+-end/)})?~Dt(e+(r=r[t].value),"span",0)?e:q+R(e,"-start","")+e+q+"grid-row-span:"+(~Dt(r,"span",0)?Ce(r,/\d+/):+Ce(r,/\d+/)-+Ce(e,/\d+/))+";":q+R(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(o){return Ce(o.props,/grid-\w+-start/)})?e:q+R(R(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return R(e,/(.+)-inline(.+)/,N+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(re(e)-1-t>6)switch(U(e,t+1)){case 109:if(U(e,t+4)!==45)break;case 102:return R(e,/(.+:)(.+)-([^]+)/,"$1"+N+"$2-$3$1"+nt+(U(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Dt(e,"stretch",0)?$o(R(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return R(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,n,i,s,l,a,c){return q+n+":"+i+c+(s?q+n+"-span:"+(l?a:+a-+i)+c:"")+e});case 4949:if(U(e,t+6)===121)return R(e,":",":"+N)+e;break;case 6444:switch(U(e,U(e,14)===45?18:11)){case 120:return R(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+N+(U(e,14)===45?"inline-":"")+"box$3$1"+N+"$2$3$1"+q+"$2box$3")+e;case 100:return R(e,":",":"+q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return R(e,"scroll-","scroll-snap-")+e}return e}function Ft(e,t){for(var r="",o=0;o<e.length;o++)r+=t(e[o],o,e,t)||"";return r}function Vi(e,t,r,o){switch(e.type){case Pi:if(e.children.length)break;case ki:case Rt:return e.return=e.return||e.value;case Nr:return"";case Vr:return e.return=e.value+"{"+Ft(e.children,o)+"}";case Ge:if(!re(e.value=e.props.join(",")))return""}return re(r=Ft(e.children,o))?e.return=e.value+"{"+r+"}":""}function qi(e){var t=Hr(e);return function(r,o,n,i){for(var s="",l=0;l<t;l++)s+=e[l](r,o,n,i)||"";return s}}function Hi(e){return function(t){t.root||(t=t.return)&&e(t)}}function zi(e,t,r,o){if(e.length>-1&&!e.return)switch(e.type){case Rt:e.return=$o(e.value,e.length,r);return;case Vr:return Ft([qe(e,{value:R(e.value,"@","@"+N)})],o);case Ge:if(e.length)return Ei(r=e.props,function(n){switch(Ce(n,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":st(qe(e,{props:[R(n,/:(read-\w+)/,":"+nt+"$1")]})),st(qe(e,{props:[n]})),ir(e,{props:qo(r,o)});break;case"::placeholder":st(qe(e,{props:[R(n,/:(plac\w+)/,":"+N+"input-$1")]})),st(qe(e,{props:[R(n,/:(plac\w+)/,":"+nt+"$1")]})),st(qe(e,{props:[R(n,/:(plac\w+)/,q+"input-$1")]})),st(qe(e,{props:[n]})),ir(e,{props:qo(r,o)});break}return""})}}var $i={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var ze=typeof process!="undefined"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",ts="active",Kr="data-styled-version",Vt="6.1.14",Zo=`/*!sc*/
`,Xr=typeof window!="undefined"&&"HTMLElement"in window,Yc=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""&&process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY),Gc={};var to=Object.freeze([]),qt=Object.freeze({});function rs(e,t,r){return r===void 0&&(r=qt),e.theme!==r.theme&&e.theme||t||r.theme}var os=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Kc=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xc=/(^-|-$)/g;function ji(e){return e.replace(Kc,"-").replace(Xc,"")}var Zc=/(a)(d)/gi,Qr=52,Ui=function(e){return String.fromCharCode(e+(e>25?39:97))};function Wo(e){var t,r="";for(t=Math.abs(e);t>Qr;t=t/Qr|0)r=Ui(t%Qr)+r;return(Ui(t%Qr)+r).replace(Zc,"$1-$2")}var jo,ns=5381,Nt=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},is=function(e){return Nt(ns,e)};function ss(e){return Wo(is(e)>>>0)}function Jc(e){return e.displayName||e.name||"Component"}function Uo(e){return typeof e=="string"&&!0}var as=typeof Symbol=="function"&&Symbol.for,ls=as?Symbol.for("react.memo"):60115,eu=as?Symbol.for("react.forward_ref"):60112,tu={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ru={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},cs={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ou=((jo={})[eu]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jo[ls]=cs,jo);function Qi(e){return("type"in(t=e)&&t.type.$$typeof)===ls?cs:"$$typeof"in e?ou[e.$$typeof]:tu;var t}var nu=Object.defineProperty,iu=Object.getOwnPropertyNames,Wi=Object.getOwnPropertySymbols,su=Object.getOwnPropertyDescriptor,au=Object.getPrototypeOf,Yi=Object.prototype;function us(e,t,r){if(typeof t!="string"){if(Yi){var o=au(t);o&&o!==Yi&&us(e,o,r)}var n=iu(t);Wi&&(n=n.concat(Wi(t)));for(var i=Qi(e),s=Qi(t),l=0;l<n.length;++l){var a=n[l];if(!(a in ru||r&&r[a]||s&&a in s||i&&a in i)){var c=su(t,a);try{nu(e,a,c)}catch{}}}}return e}function Ht(e){return typeof e=="function"}function Jo(e){return typeof e=="object"&&"styledComponentId"in e}function at(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Zr(e,t){if(e.length===0)return"";for(var r=e[0],o=1;o<e.length;o++)r+=t?t+e[o]:e[o];return r}function lr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Yo(e,t,r){if(r===void 0&&(r=!1),!r&&!lr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var o=0;o<t.length;o++)e[o]=Yo(e[o],t[o]);else if(lr(t))for(var o in t)e[o]=Yo(e[o],t[o]);return e}function en(e,t){Object.defineProperty(e,"toString",{value:t})}function He(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var lu=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,o=0;o<t;o++)r+=this.groupSizes[o];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var o=this.groupSizes,n=o.length,i=n;t>=i;)if((i<<=1)<0)throw He(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(var s=n;s<i;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),a=(s=0,r.length);s<a;s++)this.tag.insertRule(l,r[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],o=this.indexOfGroup(t),n=o+r;this.groupSizes[t]=0;for(var i=o;i<n;i++)this.tag.deleteRule(o)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var o=this.groupSizes[t],n=this.indexOfGroup(t),i=n+o,s=n;s<i;s++)r+="".concat(this.tag.getRule(s)).concat(Zo);return r},e}(),kd=1<<30,Yr=new Map,Jr=new Map,Gr=1,Wr=function(e){if(Yr.has(e))return Yr.get(e);for(;Jr.has(Gr);)Gr++;var t=Gr++;return Yr.set(e,t),Jr.set(t,e),t},cu=function(e,t){Gr=t+1,Yr.set(e,t),Jr.set(t,e)},uu="style[".concat(ze,"][").concat(Kr,'="').concat(Vt,'"]'),pu=new RegExp("^".concat(ze,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),du=function(e,t,r){for(var o,n=r.split(","),i=0,s=n.length;i<s;i++)(o=n[i])&&e.registerName(t,o)},fu=function(e,t){for(var r,o=((r=t.textContent)!==null&&r!==void 0?r:"").split(Zo),n=[],i=0,s=o.length;i<s;i++){var l=o[i].trim();if(l){var a=l.match(pu);if(a){var c=0|parseInt(a[1],10),u=a[2];c!==0&&(cu(u,c),du(e,u,a[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(l)}}},Gi=function(e){for(var t=document.querySelectorAll(uu),r=0,o=t.length;r<o;r++){var n=t[r];n&&n.getAttribute(ze)!==ts&&(fu(e,n),n.parentNode&&n.parentNode.removeChild(n))}};function Go(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var ps=function(e){var t=document.head,r=e||t,o=document.createElement("style"),n=function(l){var a=Array.from(l.querySelectorAll("style[".concat(ze,"]")));return a[a.length-1]}(r),i=n!==void 0?n.nextSibling:null;o.setAttribute(ze,ts),o.setAttribute(Kr,Vt);var s=Go();return s&&o.setAttribute("nonce",s),r.insertBefore(o,i),o},mu=function(){function e(t){this.element=ps(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var o=document.styleSheets,n=0,i=o.length;n<i;n++){var s=o[n];if(s.ownerNode===r)return s}throw He(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),hu=function(){function e(t){this.element=ps(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var o=document.createTextNode(r);return this.element.insertBefore(o,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),yu=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ki=Xr,gu={isServer:!Xr,useCSSOMInjection:!Yc},cr=function(){function e(t,r,o){t===void 0&&(t=qt),r===void 0&&(r={});var n=this;this.options=G(G({},gu),t),this.gs=r,this.names=new Map(o),this.server=!!t.isServer,!this.server&&Xr&&Ki&&(Ki=!1,Gi(this)),en(this,function(){return function(i){for(var s=i.getTag(),l=s.length,a="",c=function(p){var f=function(g){return Jr.get(g)}(p);if(f===void 0)return"continue";var m=i.names.get(f),v=s.getGroup(p);if(m===void 0||!m.size||v.length===0)return"continue";var h="".concat(ze,".g").concat(p,'[id="').concat(f,'"]'),T="";m!==void 0&&m.forEach(function(g){g.length>0&&(T+="".concat(g,","))}),a+="".concat(v).concat(h,'{content:"').concat(T,'"}').concat(Zo)},u=0;u<l;u++)c(u);return a}(n)})}return e.registerId=function(t){return Wr(t)},e.prototype.rehydrate=function(){!this.server&&Xr&&Gi(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(G(G({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var o=r.useCSSOMInjection,n=r.target;return r.isServer?new yu(n):o?new mu(n):new hu(n)}(this.options),new lu(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(Wr(t),this.names.has(t))this.names.get(t).add(r);else{var o=new Set;o.add(r),this.names.set(t,o)}},e.prototype.insertRules=function(t,r,o){this.registerName(t,r),this.getTag().insertRules(Wr(t),o)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Wr(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),bu=/&/g,Su=/^\s*\/\/.*$/gm;function ds(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(o){return"".concat(t," ").concat(o)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=ds(r.children,t)),r})}function fs(e){var t,r,o,n=e===void 0?qt:e,i=n.options,s=i===void 0?qt:i,l=n.plugins,a=l===void 0?to:l,c=function(f,m,v){return v.startsWith(r)&&v.endsWith(r)&&v.replaceAll(r,"").length>0?".".concat(t):f},u=a.slice();u.push(function(f){f.type===Ge&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(bu,r).replace(o,c))}),s.prefix&&u.push(zi),u.push(Vi);var p=function(f,m,v,h){m===void 0&&(m=""),v===void 0&&(v=""),h===void 0&&(h="&"),t=h,r=m,o=new RegExp("\\".concat(r,"\\b"),"g");var T=f.replace(Su,""),g=Ni(v||m?"".concat(v," ").concat(m," { ").concat(T," }"):T);s.namespace&&(g=ds(g,s.namespace));var S=[];return Ft(g,qi(u.concat(Hi(function(E){return S.push(E)})))),S};return p.hash=a.length?a.reduce(function(f,m){return m.name||He(15),Nt(f,m.name)},ns).toString():"",p}var vu=new cr,Ko=fs(),tn=H.default.createContext({shouldForwardProp:void 0,styleSheet:vu,stylis:Ko}),Pd=tn.Consumer,wu=H.default.createContext(void 0);function eo(){return(0,H.useContext)(tn)}function xu(e){var t=(0,H.useState)(e.stylisPlugins),r=t[0],o=t[1],n=eo().styleSheet,i=(0,H.useMemo)(function(){var a=n;return e.sheet?a=e.sheet:e.target&&(a=a.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(a=a.reconstructWithOptions({useCSSOMInjection:!1})),a},[e.disableCSSOMInjection,e.sheet,e.target,n]),s=(0,H.useMemo)(function(){return fs({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,H.useEffect)(function(){(0,es.default)(r,e.stylisPlugins)||o(e.stylisPlugins)},[e.stylisPlugins]);var l=(0,H.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:s}},[e.shouldForwardProp,i,s]);return H.default.createElement(tn.Provider,{value:l},H.default.createElement(wu.Provider,{value:s},e.children))}var ku=function(){function e(t,r){var o=this;this.inject=function(n,i){i===void 0&&(i=Ko);var s=o.name+i.hash;n.hasNameForId(o.id,s)||n.insertRules(o.id,s,i(o.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,en(this,function(){throw He(12,String(o.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ko),this.name+t.hash},e}(),Pu=function(e){return e>="A"&&e<="Z"};function Xi(e){for(var t="",r=0;r<e.length;r++){var o=e[r];if(r===1&&o==="-"&&e[0]==="-")return e;Pu(o)?t+="-"+o.toLowerCase():t+=o}return t.startsWith("ms-")?"-"+t:t}var ms=function(e){return e==null||e===!1||e===""},hs=function(e){var t,r,o=[];for(var n in e){var i=e[n];e.hasOwnProperty(n)&&!ms(i)&&(Array.isArray(i)&&i.isCss||Ht(i)?o.push("".concat(Xi(n),":"),i,";"):lr(i)?o.push.apply(o,Mt(Mt(["".concat(n," {")],hs(i),!1),["}"],!1)):o.push("".concat(Xi(n),": ").concat((t=n,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in $i||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return o};function Xe(e,t,r,o){if(ms(e))return[];if(Jo(e))return[".".concat(e.styledComponentId)];if(Ht(e)){if(!Ht(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var n=e(t);return Xe(n,t,r,o)}var i;return e instanceof ku?r?(e.inject(r,o),[e.getName(o)]):[e]:lr(e)?hs(e):Array.isArray(e)?Array.prototype.concat.apply(to,e.map(function(s){return Xe(s,t,r,o)})):[e.toString()]}function ys(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ht(r)&&!Jo(r))return!1}return!0}var Cu=is(Vt),Eu=function(){function e(t,r,o){this.rules=t,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&ys(t),this.componentId=r,this.baseHash=Nt(Cu,r),this.baseStyle=o,cr.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,o){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))n=at(n,this.staticRulesId);else{var i=Zr(Xe(this.rules,t,r,o)),s=Wo(Nt(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,s)){var l=o(i,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,l)}n=at(n,s),this.staticRulesId=s}else{for(var a=Nt(this.baseHash,o.hash),c="",u=0;u<this.rules.length;u++){var p=this.rules[u];if(typeof p=="string")c+=p;else if(p){var f=Zr(Xe(p,t,r,o));a=Nt(a,f+u),c+=f}}if(c){var m=Wo(a>>>0);r.hasNameForId(this.componentId,m)||r.insertRules(this.componentId,m,o(c,".".concat(m),void 0,this.componentId)),n=at(n,m)}}return n},e}(),rn=H.default.createContext(void 0),Cd=rn.Consumer;var Qo={};function Tu(e,t,r){var o=Jo(e),n=e,i=!Uo(e),s=t.attrs,l=s===void 0?to:s,a=t.componentId,c=a===void 0?function(C,O){var A=typeof C!="string"?"sc":ji(C);Qo[A]=(Qo[A]||0)+1;var d="".concat(A,"-").concat(ss(Vt+A+Qo[A]));return O?"".concat(O,"-").concat(d):d}(t.displayName,t.parentComponentId):a,u=t.displayName,p=u===void 0?function(C){return Uo(C)?"styled.".concat(C):"Styled(".concat(Jc(C),")")}(e):u,f=t.displayName&&t.componentId?"".concat(ji(t.displayName),"-").concat(t.componentId):t.componentId||c,m=o&&n.attrs?n.attrs.concat(l).filter(Boolean):l,v=t.shouldForwardProp;if(o&&n.shouldForwardProp){var h=n.shouldForwardProp;if(t.shouldForwardProp){var T=t.shouldForwardProp;v=function(C,O){return h(C,O)&&T(C,O)}}else v=h}var g=new Eu(r,f,o?n.componentStyle:void 0);function S(C,O){return function(A,d,M){var _=A.attrs,w=A.componentStyle,D=A.defaultProps,k=A.foldedComponentIds,I=A.styledComponentId,K=A.target,we=H.default.useContext(rn),vt=eo(),pe=A.shouldForwardProp||vt.shouldForwardProp,fe=rs(d,we,D)||qt,de=function(xt,rt,kt){for(var Fe,xe=G(G({},rt),{className:void 0,theme:kt}),Pt=0;Pt<xt.length;Pt+=1){var ke=Ht(Fe=xt[Pt])?Fe(xe):Fe;for(var me in ke)xe[me]=me==="className"?at(xe[me],ke[me]):me==="style"?G(G({},xe[me]),ke[me]):ke[me]}return rt.className&&(xe.className=at(xe.className,rt.className)),xe}(_,d,fe),wt=de.as||K,et={};for(var Te in de)de[Te]===void 0||Te[0]==="$"||Te==="as"||Te==="theme"&&de.theme===fe||(Te==="forwardedAs"?et.as=de.forwardedAs:pe&&!pe(Te,wt)||(et[Te]=de[Te]));var Or=function(xt,rt){var kt=eo(),Fe=xt.generateAndInjectStyles(rt,kt.styleSheet,kt.stylis);return Fe}(w,de),tt=at(k,I);return Or&&(tt+=" "+Or),de.className&&(tt+=" "+de.className),et[Uo(wt)&&!os.has(wt)?"class":"className"]=tt,M&&(et.ref=M),(0,H.createElement)(wt,et)}(E,C,O)}S.displayName=p;var E=H.default.forwardRef(S);return E.attrs=m,E.componentStyle=g,E.displayName=p,E.shouldForwardProp=v,E.foldedComponentIds=o?at(n.foldedComponentIds,n.styledComponentId):"",E.styledComponentId=f,E.target=o?n.target:e,Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=o?function(O){for(var A=[],d=1;d<arguments.length;d++)A[d-1]=arguments[d];for(var M=0,_=A;M<_.length;M++)Yo(O,_[M],!0);return O}({},n.defaultProps,C):C}}),en(E,function(){return".".concat(E.styledComponentId)}),i&&us(E,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),E}function Zi(e,t){for(var r=[e[0]],o=0,n=t.length;o<n;o+=1)r.push(t[o],e[o+1]);return r}var Ji=function(e){return Object.assign(e,{isCss:!0})};function ie(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Ht(e)||lr(e))return Ji(Xe(Zi(to,Mt([e],t,!0))));var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?Xe(o):Ji(Xe(Zi(o,t)))}function Xo(e,t,r){if(r===void 0&&(r=qt),!t)throw He(1,t);var o=function(n){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,r,ie.apply(void 0,Mt([n],i,!1)))};return o.attrs=function(n){return Xo(e,t,G(G({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},o.withConfig=function(n){return Xo(e,t,G(G({},r),n))},o}var gs=function(e){return Xo(Tu,e)},b=gs;os.forEach(function(e){b[e]=gs(e)});var Au=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=ys(t),cr.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,o,n){var i=n(Zr(Xe(this.rules,r,o,n)),""),s=this.componentId+t;o.insertRules(s,s,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,o,n){t>2&&cr.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,r,o,n)},e}();function bs(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var o=ie.apply(void 0,Mt([e],t,!1)),n="sc-global-".concat(ss(JSON.stringify(o))),i=new Au(o,n),s=function(a){var c=eo(),u=H.default.useContext(rn),p=H.default.useRef(c.styleSheet.allocateGSInstance(n)).current;return c.styleSheet.server&&l(p,a,c.styleSheet,u,c.stylis),H.default.useLayoutEffect(function(){if(!c.styleSheet.server)return l(p,a,c.styleSheet,u,c.stylis),function(){return i.removeStyles(p,c.styleSheet)}},[p,a,c.styleSheet,u,c.stylis]),null};function l(a,c,u,p,f){if(i.isStatic)i.renderStyles(a,Gc,u,f);else{var m=G(G({},c),{theme:rs(c,p,s.defaultProps)});i.renderStyles(a,m,u,f)}}return H.default.memo(s)}var Ed=function(){function e(){var t=this;this._emitSheetCSS=function(){var r=t.instance.toString();if(!r)return"";var o=Go(),n=Zr([o&&'nonce="'.concat(o,'"'),"".concat(ze,'="true"'),"".concat(Kr,'="').concat(Vt,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(r,"</style>")},this.getStyleTags=function(){if(t.sealed)throw He(2);return t._emitSheetCSS()},this.getStyleElement=function(){var r;if(t.sealed)throw He(2);var o=t.instance.toString();if(!o)return[];var n=((r={})[ze]="",r[Kr]=Vt,r.dangerouslySetInnerHTML={__html:o},r),i=Go();return i&&(n.nonce=i),[H.default.createElement("style",G({},n,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new cr({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(t){if(this.sealed)throw He(2);return H.default.createElement(xu,{sheet:this.instance},t)},e.prototype.interleaveWithNodeStream=function(t){throw He(3)},e}();var Td="__sc-".concat(ze,"__");var ct=y(P());var lt=y(Q()),z={width:lt.default.oneOfType([lt.default.number,lt.default.string]),height:lt.default.oneOfType([lt.default.number,lt.default.string])},$=(e,t)=>e.width===t.width&&e.height===t.height;var on=({width:e=36,height:t=36})=>ct.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},ct.default.createElement("path",{d:"M 22.5 18 C 22.5 16.235 21.48 14.71 20 13.975 L 20 16.185 L 22.455 18.64 C 22.485 18.43 22.5 18.215 22.5 18 Z"}),ct.default.createElement("path",{d:"M 25 18 C 25 18.94 24.795 19.825 24.46 20.64 L 25.975 22.155 C 26.625 20.91 27 19.5 27 18 C 27 13.72 24.005 10.14 20 9.23 L 20 11.295 C 22.89 12.155 25 14.83 25 18 Z"}),ct.default.createElement("polygon",{points:"18 10 15.91 12.09 18 14.18"}),ct.default.createElement("path",{d:"M 10.275 9 L 9 10.275 L 13.725 15 L 9 15 L 9 21 L 13 21 L 18 26 L 18 19.275 L 22.255 23.53 C 21.585 24.045 20.83 24.46 20 24.71 L 20 26.775 C 21.375 26.46 22.63 25.83 23.685 24.965 L 25.725 27 L 27 25.725 L 18 16.725 L 10.275 9 Z"}));on.displayName="MutedIcon";on.propTypes=z;var ro=ct.default.memo(on,$);var oo=y(P());var nn=({width:e=36,height:t=36})=>oo.default.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor"},oo.default.createElement("path",{d:"M 23.804 18.319 L 12.478 25.924 C 12.347 26.014 12.235 26.024 12.141 25.955 C 12.047 25.886 12 25.763 12 25.584 L 12 10.416 C 12 10.237 12.047 10.113 12.141 10.045 C 12.235 9.976 12.347 9.986 12.478 10.076 L 23.804 17.68 C 23.935 17.77 24 17.876 24 18 C 24 18.124 23.935 18.23 23.804 18.319 Z"}));nn.displayName="PlayIcon";nn.propTypes=z;var zt=oo.default.memo(nn,$);var sn=b.div`
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
`,Ss=ie`
  font-size: 20px;
  margin-right: 8px;
`,vs=b(zt)`
  ${Ss}
`,ws=b(ro)`
  ${Ss}
`,xs=b.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 5;
`;var Ps=y(P());var ks=y(P()),an={contextMenuVisible:!1,controlsHovering:!1,timeSliding:!1,volumeSliding:!1,hiding:!1,menuVisible:!1,subMenuVisible:!1,fullscreen:!1,playerRef:null,videoRef:null},$t=(0,ks.createContext)({state:an,dispatch:()=>null});var Lu=()=>{let{state:e}=(0,Ps.useContext)($t);return e},F=Lu;var Cs=({hasResource:e=!1,prevented:t,paused:r,muted:o,currentTime:n,onClick:i})=>{let{i18n:s}=F(),[l,a]=se.default.useState(!1),c=f=>{a(!0),i(f)},u=se.default.useCallback(()=>e===!1||t===!1||r?null:o===!0&&!l?se.default.createElement(se.default.Fragment,{key:"preventedClickedTip"},se.default.createElement(xs,{onClick:c}),se.default.createElement(sn,null,se.default.createElement(ws,null),s.clickToUnmute)):null,[e,t,l]);return[se.default.useCallback(()=>e===!1||t===!1?null:n===0&&r?se.default.createElement(se.default.Fragment,{key:"preventedTip"},se.default.createElement(sn,null,se.default.createElement(vs,null),s.playbackStuckClickResumePlayback)):null,[n,r])(),u()]};Cs.propTypes={hasResource:ut.default.bool.isRequired,prevented:ut.default.bool.isRequired,paused:ut.default.bool.isRequired,muted:ut.default.bool.isRequired,currentTime:ut.default.number.isRequired,onClick:ut.default.func.isRequired};var Es=se.default.memo(Cs,(e,t)=>e.hasResource===t.hasResource&&e.prevented===t.prevented&&e.paused===t.paused&&e.muted===t.muted&&e.currentTime===t.currentTime&&e.onClick===t.onClick);var ur=y(P()),$e=y(Q());var ln=y(P());var Ts=ln.default.forwardRef(({showing:e,...t},r)=>ln.default.createElement("button",{ref:r,...t}));Ts.displayName="PlayButton";var As=b(Ts)`
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
`;var no=y(P());var Iu=b.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  align-items: center;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
`,Ou=b.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
`,Mu=b.div`
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
`,Ru=()=>no.default.createElement(Iu,null,no.default.createElement(Ou,null,no.default.createElement(Mu,null))),io=Ru;var Ls=({hasResource:e,loading:t,paused:r,ended:o,seeking:n,waiting:i,kernelMsg:s,onClick:l})=>e===!1||t||s?null:i||n?ur.default.createElement(io,null):ur.default.createElement(As,{showing:r||o,onClick:l},ur.default.createElement(zt,{width:"20%",height:"100%"}));Ls.propTypes={hasResource:$e.default.bool.isRequired,loading:$e.default.bool.isRequired,paused:$e.default.bool.isRequired,ended:$e.default.bool.isRequired,seeking:$e.default.bool.isRequired,waiting:$e.default.bool.isRequired,kernelMsg:$e.default.object,onClick:$e.default.func.isRequired};var Is=ur.default.memo(Ls,(e,t)=>e.hasResource===t.hasResource&&e.loading===t.loading&&e.paused===t.paused&&e.ended===t.ended&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.kernelMsg===t.kernelMsg&&e.onClick===t.onClick);var ao=y(P()),so=y(Q());var Os=b.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 2em;
  background: rgba(0, 0, 0, 0.65);
`;var Ms=({hasResource:e,loading:t,kernelMsg:r=null})=>e===!1?null:r?ao.default.createElement(Os,null,r.type,": ",r.detail):t?ao.default.createElement(io,null):null;Ms.propTypes={hasResource:so.default.bool.isRequired,loading:so.default.bool.isRequired,kernelMsg:so.default.object};var Rs=ao.default.memo(Ms,(e,t)=>e.hasResource===t.hasResource&&e.loading===t.loading&&e.kernelMsg===t.kernelMsg);var Ds=ie`
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
`,Oe=b.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  user-select: none;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
`,Bs=b.div`
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 10%;
  height: 55px !important;
  z-index: 2;
`,Fs=b.div`
  padding: 10px 20px;
  font-size: 140%;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  border-radius: 3px;
  color: #eee;
`,Ns=b.div`
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
`,Vs=b.div`
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
`;var lo={32:"SPACE_KEY",27:"ESCAPE_KEY",37:"ARROW_LEFT_KEY",39:"ARROW_RIGHT_KEY",38:"ARROW_UP_KEY",40:"ARROW_DOWN_KEY",77:"MUTE_KEY",16:"SHIFT_KEY",67:"SUBTITLES_KEY",70:"F_KEY",84:"T_KEY",78:"N_KEY"},co={" ":"SPACE_KEY",Escape:"ESCAPE_KEY",ArrowLeft:"ARROW_LEFT_KEY",ArrowRight:"ARROW_RIGHT_KEY",ArrowUp:"ARROW_UP_KEY",ArrowDown:"ARROW_DOWN_KEY",m:"MUTE_KEY",Shift:"SHIFT_KEY",c:"SUBTITLES_KEY",f:"F_KEY",t:"T_KEY",n:"N_KEY"},je=e=>e?83:55,Me=e=>e?{width:54,height:54}:{width:36,height:36};var dr=y(P()),pr=y(Q());var cn=y(P());var qs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuQAAADyCAQAAACvvRhBAAADYklEQVR42u3cwY3DQAwEQdlQ/jE7BvEhor1VIdyjMeCtdV+fC4Cw258AQMgBWA250wqARQ6ARQ6ARQ5gkQNgkQMg5AA8DLnTCoBFDoBFDoBFDmCRA2CRA2CRA2CRA1jkAFjkAFjkAFjkABY5ABY5ABY5ABY5gEUOgEUOgEUOgJAD/FvIAbDIAbDIAbDIAYQcgGTIAbDIAbDIAbDIAYQcgGTIAbDIARByAMYhB8AiB0DIARiHHAAhB2Az5E4rAEIOwGbIAbDIARByAIQcQMgBSIYcAIscACEHYBxyACxyAIQcgHHIAbDIARByAMYhByAe8q8/AoBFDsBiyN3IAYQcgM2QA2CRAyDkAAg5wKkhB8AiB0DIARiHHIB4yH1rBcAiB2Az5G7kAEIOgJADMA45ABY5AEIOgJADCDkAyZADEA+5n+gDWOQAbIbcjRxAyAEQcgDGIQcgHnKvVgAscgA2Q+5GDiDkAAg5AOOQAxAPuVcrABY5AJshdyMHEHIAhBwAIQcQcgCSIQcgHnLvyAEscgA2Q+5GDiDkAAg5AEIOcGrIAYiH3PNDAIscAIscAIsc4NSQe7UCIOQACDkAQg4g5AAIOQBCDoCQAwg5AKGQAxAPuW+tAFjkAGyG3I0cQMgBEHIAhBxAyAEQcgCEHAAhBxByAEIhByAect9aAbDIAbDIAbDIAU4NuVcrAEIOgJADIOQAQg6AkAMg5AAIOYCQAyDkAAg5AEIOcELIAYiH3GdsASxyADZD7kYOEA+50wpAPOQAWOQAWOQAjEPun50A8ZA7rQDEQw5APOROKwBCDoCQAyDkAKeGHIB4yD0/BIiH3GkFQMgBEHIAxiEHIB5y/+wEsMgB2Ay5GzlAPOROKwDxkAMQD7nTCoCQAyDkAAg5gJADIOQACDkAQg4g5ACEQg5APOS+tQJgkQNgkQNgkQOcGnKvVgDiIXdaAYiHHIB4yJ1WAIQcACEHQMgBhBwAIQfg/ZADEA+5HwQBWOQAbIbcjRwgHnKnFYB4yAGIh9xpBUDIARByAIQcQMgBEHIA3g85APGQ+0EQgEUOgEUOgEUOcGrIvVoBEHIAhBwAIQcQcgCSIQfAIgdAyAEQcgAhB0DIARByAB6GHIB4yH3GFsAiB2Az5G7kAEIOgJADMA45AGk/i98EjA2eeD8AAAAASUVORK5CYII=";var Hs=cn.default.forwardRef(({hiding:e,...t},r)=>cn.default.createElement("div",{ref:r,...t}));Hs.displayName="Controls";var zs=b(Hs)`
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
`;var un=y(P());var Du=()=>{let{state:e,dispatch:t}=un.default.useContext($t);return un.default.useCallback(o=>{if(typeof o=="function"){let n=o(e);t(n)}else t(o)},[e])},Z=Du;var $s=({children:e})=>{let t=F(),r=Z(),o=dr.default.useCallback(()=>{if(typeof window!="undefined"&&window.matchMedia){let i=window.matchMedia("(hover: none), (pointer: coarse)");if(i&&i.matches)return}r({type:"controlsHovering",payload:!0})},[]),n=dr.default.useCallback(()=>{r({type:"controlsHovering",payload:!1})},[]);return dr.default.createElement(zs,{hiding:t.hiding,onMouseEnter:o,onMouseLeave:n},e)};$s.propTypes={children:pr.default.oneOfType([pr.default.arrayOf(pr.default.node),pr.default.node]).isRequired};var js=dr.default.memo($s,(e,t)=>e.children===t.children);var fr=y(P()),pt=y(Q());var uo=y(P());var Us=(0,uo.forwardRef)(({isFullscreen:e,...t},r)=>uo.default.createElement("div",{ref:r,...t}));Us.displayName="ControlBar";var Qs=b(Us)`
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
`,Ws=ie`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  flex: 1;
`,Ys=b.div`
  ${Ws}
  justify-content: flex-start;
  margin-left: 15px;
`,Gs=b.div`
  ${Ws}
  justify-content: flex-end;
  margin-right: 15px;
`;var Ks=({children:e,extra:t,fullscreen:r})=>fr.default.createElement(Qs,{isFullscreen:r},fr.default.createElement(Ys,null,e),fr.default.createElement(Gs,null,t));Ks.propTypes={children:pt.default.oneOfType([pt.default.arrayOf(pt.default.node),pt.default.node]).isRequired,extra:pt.default.node.isRequired,fullscreen:pt.default.bool.isRequired};var Xs=fr.default.memo(Ks,(e,t)=>e.fullscreen===t.fullscreen&&e.children===t.children&&e.extra===t.extra);var be=y(P()),mt=y(Q());var dt=y(P());var mr=y(P());var Zs=mr.default.forwardRef(({isFullscreen:e,...t},r)=>mr.default.createElement("div",{ref:r,...t}));Zs.displayName="Tooltip";var po=b(Zs)`
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
`,Js=mr.default.forwardRef(({isFullscreen:e,showTooltipOnly:t,...r},o)=>mr.default.createElement("div",{ref:o,...r}));Js.displayName="Tip";var ea=b(Js)`
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
`;var Re=b.div`
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
`;var jt=b.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
`,ra=dt.default.forwardRef(({isFullscreen:e,...t},r)=>dt.default.createElement("button",{ref:r,...t}));ra.displayName="SliderHandle";var Ut=b(ra)`
  ${Re} ${Oe} & {
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
`,oa=dt.default.forwardRef(({isSliding:e,isFullscreen:t,...r},o)=>dt.default.createElement("div",{ref:o,...r}));oa.displayName="Slider";var na=b(oa)`
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
`,ia=dt.default.forwardRef(({isFullscreen:e,...t},r)=>dt.default.createElement("div",{ref:r,...t}));ia.displayName="SlideRail";var sa=b(ia)`
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
`,aa=b.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  transform-origin: center left;
  background-color: rgba(255, 255, 255, 0.5);
`,la=b.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translate(-100%, 0);
  background: #f00;
`,ca=b.div`
  position: absolute;
  top: -4px;
  left: 0;
  width: 100%;
  height: 12px;
  transform: translate(-100%, 0);
  z-index: 4;
`;var oe=y(P()),Ze=y(Q());var pn=y(P());var ua=pn.default.forwardRef(({isFullscreen:e,showing:t,...r},o)=>pn.default.createElement("div",{ref:o,...r}));ua.displayName="TimelensThumbnail";var pa=b(ua)`
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
`,da=b.div`
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20px;
  z-index: 4;
`;var _u=e=>"changedTouches"in e&&e.changedTouches&&1<=e.changedTouches.length?e.changedTouches[0].pageX:"clientX"in e?e.clientX:0,hr=(e,t,r)=>{let o=_u(e)-t.left;return 0>=o?0:o>=t.width?r:Math.round(r*o/t.width)},ma=({duration:e,currentTime:t,sliderWidth:r,elementWidth:o,offset:n=0})=>{if(e<=0||r<=0||o<=0)return 0;let i=t/e*r,s=o/2,l=s+n,a=r-s-n;return Math.min(a,Math.max(l,i))},ha=({duration:e,currentTime:t,sliderWidth:r,handleWidth:o})=>{if(e===0)return{trackTranslateX:"-100",handleTranslateX:"-100"};let n=ma({duration:e,currentTime:t,sliderWidth:r,elementWidth:o,offset:0}),i=(100*t/e-100).toFixed(1),s=(n/r*100-100).toFixed(1);return{trackTranslateX:i,handleTranslateX:s}},ya=({duration:e,currentTime:t,sliderWidth:r,tooltipWidth:o})=>(ma({duration:e,currentTime:t,sliderWidth:r,elementWidth:o,offset:5})/r*100).toFixed(1),fa=e=>{if(typeof e!="string")throw new TypeError("Time must be a string");if(e.indexOf(";")>0&&(e=e.replace(";",":"),!/\d{2}(\:\d{2}){0,3}/i.test(e)))throw new TypeError("Time code must have the format `00:00:00`");let t=e.split(":"),r=0,o=0,n=0,i=0,s=25,l=Math.round(s),a=3600*l,c=60*l;switch(t.length){default:case 1:n=parseInt(t[0],10);break;case 2:o=parseInt(t[0],10),n=parseInt(t[1],10);break;case 3:r=parseInt(t[0],10),o=parseInt(t[1],10),n=parseInt(t[2],10);break;case 4:r=parseInt(t[0],10),o=parseInt(t[1],10),n=parseInt(t[2],10),i=parseInt(t[3],10)}let u=(a*r+c*o+s*n+i)/s;return parseFloat(u.toFixed(3))},ga=e=>{var t=e.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+o,left:t.left+r}},ba=e=>{let t=0,r=0,o=[];for(var n of e.split(`
`))if(/-->/.test(n)){let[i,s]=(n.match(/(.*) --> (.*)/)||[]).slice(1);t=fa(i),r=fa(s)}else if(/png/.test(n)){let[i,s,l,a,c]=(n.match(/(.*)\?xywh=(.*),(.*),(.*),(.*)/)||[]).slice(1);o.push({from:t,to:r,file:i,x:s,y:l,w:a,h:c})}return o};var dn=oe.default.forwardRef(({spriteVTTFile:e,sliderRef:t,duration:r=0,fullscreen:o},n)=>{let i=F(),[s,l]=oe.default.useState([]),a=oe.default.useRef(null),[c,u]=oe.default.useState(!1),[p,f]=oe.default.useState({backgroundImage:"",backgroundPosition:"-480px -360px",width:"160px",height:"90px",marginLeft:"0px"});oe.default.useEffect(()=>{(async()=>{try{let h=await fetch(e).then(g=>g.text()),T=ba(h);l(T)}catch(h){console.error("Error parsing VTT file: ",h)}})()},[e]);let m=oe.default.useCallback(async h=>{var E;let T=a==null?void 0:a.current,g=t==null?void 0:t.current;if(T&&g&&s.length>0&&i.menuVisible===!1&&i.subMenuVisible===!1){let C=ga(g),O=h==null?void 0:h.pageX;h!=null&&h.originalEvent&&((E=h==null?void 0:h.originalEvent)!=null&&E.changedTouches)?O=h.originalEvent.changedTouches[0].pageX:h!=null&&h.changedTouches&&(O=h.changedTouches[0].pageX);let d=(O-C.left-g.offsetLeft)/g.offsetWidth,M=d*r,_=d*g.offsetWidth;for(var S of s)if(M>=S.from&&M<=S.to){let w=Math.min(Math.max(0,_-T.offsetWidth/2),g.offsetWidth-T.offsetWidth);f({backgroundImage:`url(${S.file})`,backgroundPosition:-S.x+"px "+-S.y+"px",width:S.w+"px",height:S.h+"px",marginLeft:w+"px"});break}u(!0)}},[a,t,r,s,i.menuVisible,i.subMenuVisible]),v=oe.default.useCallback(()=>{u(!1)},[]);return oe.default.useImperativeHandle(n,()=>({handleTimelens:m,setShowTimelens:u})),oe.default.createElement(oe.default.Fragment,null,oe.default.createElement(da,{onMouseMove:m,onMouseEnter:m,onMouseLeave:v}),oe.default.createElement(pa,{ref:a,showing:c||i.timeSliding,isFullscreen:o,style:p}))});dn.displayName="Timelens";dn.propTypes={sliderRef:Ze.default.oneOfType([Ze.default.func,Ze.default.shape({current:Ze.default.instanceOf(HTMLDivElement)})]),spriteVTTFile:Ze.default.string.isRequired,duration:Ze.default.number.isRequired,fullscreen:Ze.default.bool.isRequired};var Sa=oe.default.memo(dn,(e,t)=>e.fullscreen===t.fullscreen&&e.sliderRef===t.sliderRef&&e.spriteVTTFile===t.spriteVTTFile&&e.duration===t.duration);var ft=y(P()),De=y(Q());Ae();var va=({sliderRef:e,duration:t,tooltip:r,showTooltip:o,showTooltipOnly:n=!1,fullscreen:i})=>{let s=ft.default.useRef(null),[l,a]=ft.default.useState("0");return ft.default.useEffect(()=>{var u,p;let c=ya({duration:t,currentTime:r,sliderWidth:((u=e.current)==null?void 0:u.offsetWidth)||0,tooltipWidth:((p=s.current)==null?void 0:p.offsetWidth)||0});a(c)},[t,r,s,e]),ft.default.createElement(po,{style:{display:o?"block":"",transform:`translateX(${l}%)`},isFullscreen:i},ft.default.createElement(ea,{ref:s,isFullscreen:i,showTooltipOnly:n},ot(r)))};va.propTypes={sliderRef:De.default.oneOfType([De.default.func,De.default.shape({current:De.default.instanceOf(HTMLDivElement)})]),duration:De.default.number.isRequired,tooltip:De.default.number.isRequired,showTooltip:De.default.bool.isRequired,showTooltipOnly:De.default.bool,fullscreen:De.default.bool.isRequired};var wa=ft.default.memo(va,(e,t)=>e.sliderRef===t.sliderRef&&e.duration===t.duration&&e.tooltip===t.tooltip&&e.showTooltip===t.showTooltip&&e.showTooltipOnly===t.showTooltipOnly&&e.fullscreen===t.fullscreen);var Y=y(P());var Bu=({timelensRef:e,currentTime:t,duration:r,onChange:o,onSeeking:n})=>{let i=Z(),s=Y.default.useRef(null),l=Y.default.useRef(null),[a,c]=Y.default.useState(!1),[u,p]=Y.default.useState(!1),[f,m]=Y.default.useState({left:0,width:0}),[v,h]=Y.default.useState({value:0,tooltip:0}),T=Y.default.useCallback(w=>{w.preventDefault();let D=w.currentTarget.getBoundingClientRect(),k=hr(w,D,r);i({type:"timeSliding",payload:!1}),p(!1),o(k),n(!1),e.current&&e.current.handleTimelens(w)},[o,r,i,e]),g=Y.default.useCallback(w=>{if(w.preventDefault(),s.current!==null){let D=s.current.getBoundingClientRect();i({type:"timeSliding",payload:!0}),m(k=>({...k,left:D.left,width:D.width})),e.current&&e.current.handleTimelens(w),p(!0),n(!0)}},[e]),S=Y.default.useCallback(w=>{w.preventDefault();let D=hr(w,{left:f.left,width:f.width},r);i({type:"timeSliding",payload:!1}),p(!1),h(k=>({...k,value:D})),o(D),n(!1),e.current&&e.current.setShowTimelens(!1)},[o,r,f,i]),E=Y.default.useCallback(w=>{w.preventDefault();let D=hr(w,{left:f.left,width:f.width},r);h(k=>({...k,value:D})),e.current&&e.current.handleTimelens(w)},[r,f]);Y.default.useEffect(()=>u?(document.addEventListener("mousemove",E),document.addEventListener("mouseup",S),document.addEventListener("touchmove",E),document.addEventListener("touchcancel",S),document.addEventListener("touchend",S),()=>{document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",S),document.removeEventListener("touchmove",E),document.removeEventListener("touchcancel",S),document.removeEventListener("touchend",S)}):()=>{},[u,E,S]);let C=Y.default.useCallback(w=>{if(w.preventDefault(),s.current!==null){let D=s.current.getBoundingClientRect();m(k=>({...k,left:D.left,width:D.width})),e.current&&e.current.handleTimelens(w)}},[e]),O=Y.default.useCallback(w=>{w.preventDefault();let D=hr(w,{left:f.left,width:f.width},r);h(k=>({...k,tooltip:D})),e.current&&e.current.handleTimelens(w)},[r,f.left,f.width,e]),A=Y.default.useCallback(w=>{if(w.preventDefault(),!s||!s.current)return;let D=s.current.getBoundingClientRect();m(k=>({...k,left:D.left,width:D.width}))},[]),d=Y.default.useCallback(w=>{e.current&&e.current.handleTimelens(w),c(!0)},[e]),M=Y.default.useCallback(()=>{e.current&&e.current.setShowTimelens(!1),c(!1)},[e]);Y.default.useEffect(()=>{if(typeof window!="undefined")return window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A)}},[A]);let _=Y.default.useMemo(()=>{var w;return ha({duration:r,currentTime:u?v.value:t,sliderWidth:f.width,handleWidth:((w=l.current)==null?void 0:w.offsetWidth)||0})},[r,t,v.value,u,l,f]);return{sliderRef:s,handleRef:l,showTooltip:a,timeSliderSliding:u,timeSliderState:v,trackTranslateX:{track:_.trackTranslateX,handle:_.handleTranslateX},onClick:T,onMouseDown:g,onSliderMouseOver:C,onSliderMouseMove:O,onMouseEnter:d,onMouseLeave:M}},xa=Bu;Ae();var ka=({spriteVTTFile:e,currentTime:t,duration:r,buffered:o,onChange:n,onSeeking:i,fullscreen:s})=>{let{i18n:l}=F(),a=be.default.useRef(null),{sliderRef:c,handleRef:u,showTooltip:p,timeSliderSliding:f,timeSliderState:m,trackTranslateX:v,onClick:h,onMouseDown:T,onSliderMouseOver:g,onSliderMouseMove:S,onMouseEnter:E,onMouseLeave:C}=xa({timelensRef:a,currentTime:t,duration:r,onChange:n,onSeeking:i});return be.default.createElement(na,{ref:c,role:"slider","aria-label":l.timeBar,"aria-valuemin":0,"aria-valuemax":r,"aria-valuenow":t,"aria-valuetext":ot(Math.round(t)),tabIndex:0,onClick:h,onKeyDown:()=>{},onMouseOver:g,onMouseMove:S,onMouseEnter:E,onMouseLeave:C,onFocus:()=>{},isSliding:f,isFullscreen:s},be.default.createElement(jt,null,be.default.createElement(sa,{isFullscreen:s},be.default.createElement(aa,{style:{transform:`scaleX(${o})`}}),be.default.createElement(la,{style:{transform:`translateX(${v.track}%)`}})),be.default.createElement(ca,{style:{transform:`translateX(${v.handle}%)`}},be.default.createElement(Ut,{ref:u,type:"button",onMouseDown:T,onTouchStart:T,isFullscreen:s}))),be.default.createElement(wa,{sliderRef:c,showTooltip:p,duration:r,tooltip:f?m.value:m.tooltip,showTooltipOnly:!e,fullscreen:s}),e&&be.default.createElement(Sa,{ref:a,sliderRef:c,duration:r,spriteVTTFile:e,fullscreen:s}))};ka.propTypes={spriteVTTFile:mt.default.string,currentTime:mt.default.number.isRequired,duration:mt.default.number.isRequired,buffered:mt.default.number.isRequired||null,onChange:mt.default.func.isRequired,fullscreen:mt.default.bool.isRequired};var Pa=be.default.memo(ka,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.currentTime===t.currentTime&&e.duration===t.duration&&e.buffered===t.buffered&&e.onChange===t.onChange&&e.onSeeking===t.onSeeking&&e.fullscreen===t.fullscreen);var Sr=y(P()),yt=y(Q());var gr=y(P());var Se=y(P());var Fu=ie`
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
`,Nu=ie`
  align-items: center;
  padding: 0 8px;
  font-size: 14px;
`,Vu=ie`
  width: 54px;
  height: 54px;
`,qu=ie`
  width: 36px;
  height: 36px;
`,Hu=ie`
  font-size: 145% !important;
`,Ca=Se.default.forwardRef(({isFullscreen:e=!1,title:t,...r},o)=>Se.default.createElement("div",{ref:o,...r}));Ca.displayName="TooltipText";var zu=b(Ca)`
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
`,Ea=Se.default.forwardRef(({isText:e,isFullscreen:t=!1,isTooltipActive:r=!1,isFakeDisabled:o=!1,title:n,...i},s)=>{let l=F(),a=Se.default.useRef(null),[c,u]=Se.default.useState(null),p=Se.default.useCallback(h=>{var d;i.onMouseEnter&&i.onMouseEnter(h);let T=a==null?void 0:a.current,g=(d=l.playerRef)==null?void 0:d.current;if(!T||!g||g.querySelectorAll('[aria-expanded="true"]').length>0||r===!1){u(null);return}let S=T.getBoundingClientRect(),E=g.getBoundingClientRect(),C=h.target.hasAttribute("aria-expanded")?h.target.parentElement:h.target,O=(C==null?void 0:C.offsetWidth)||0,A=(C==null?void 0:C.offsetLeft)||0;A+O/2<=S.width/2?u(-A+15):A<=15?u(0):A+S.width/2>E.width-15?u(-1*(S.width-O)):u(-1*(S.width/2-O/2))},[r,i,l.playerRef]),f=Se.default.useCallback(h=>{u(null),i.onMouseLeave&&i.onMouseLeave(h)},[i]),m=Se.default.useCallback(h=>{o===!1&&u(null),i.onClick&&i.onClick(h)},[i,o]),v=Se.default.useCallback(h=>{o===!1&&u(null),i.onMouseDown&&i.onMouseDown(h)},[i,o]);return Se.default.createElement("button",{ref:s,title:n,onMouseEnter:p,onMouseLeave:f,onClick:m,onMouseDown:v,...i},i.children,Se.default.createElement(zu,{ref:a,isFullscreen:t,style:{opacity:c===null?0:1,left:c||0}},n))});Ea.displayName="GeneralButton";var $u=b(Ea)`
  ${Re} ${Oe} & {
    ${Fu}
    ${({isFullscreen:e,isText:t})=>!t&&(e?Vu:qu)}
    ${({isFullscreen:e,isText:t})=>e&&t&&Hu}
    ${({isText:e})=>e&&Nu}
    ${({isFakeDisabled:e})=>e&&`
      color: #a4a4a4;
    `}
  }
`,j=$u;var Ta=gr.default.forwardRef(({isFullscreen:e,...t},r)=>gr.default.createElement("div",{ref:r,...t}));Ta.displayName="SliderWrapper";var yr=b(Ta)`
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
`,Aa=gr.default.forwardRef(({isSliding:e,isFullscreen:t,...r},o)=>gr.default.createElement("div",{ref:o,...r}));Aa.displayName="SliderContainer";var La=b(Aa)`
  display: flex;
  padding-right: 3px;
  @media (max-width: 575px) {
    display: none;
  }

  ${({isSliding:e,isFullscreen:t})=>e?`
      & ${yr} {
        width: ${je(t)}px;
        -moz-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
        -webkit-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
        transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
      }
      `:`
          & ${j}:hover ~ ${yr},
          & ${yr}:hover {
              width: ${je(t)}px;
              -moz-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
              -webkit-transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
              transition: margin 0.2s cubic-bezier(0, 0, 0.2, 1), width 0.2s cubic-bezier(0, 0, 0.2, 1);
          }
      `}
`;var Qt=y(P()),br=y(Q());var Ee=y(P());var fo=({clientX:e,sliderRef:t,isFullcreen:r})=>{if(!t.current)return 0;let o=t.current.getBoundingClientRect(),i=(e-o.left)/je(r)*100;return i<0?i=0:i>100&&(i=100),i};var ju=({fullscreen:e,value:t,onChange:r})=>{let o=F(),n=Z(),i=Ee.default.useRef(null),s=Ee.default.useRef(null),[l,a]=Ee.default.useState(!1),[c,u]=Ee.default.useState(0);Ee.default.useEffect(()=>{if(i!=null&&i.current&&(s!=null&&s.current)){let h=s.current.getBoundingClientRect(),T=t/100*je(e)-h.width/2,g=T;T<0?g=0:T>je(e)-h.width&&(g=je(e)-h.width),u(g)}},[t,e]);let p=Ee.default.useCallback(h=>{if(r){let T=fo({clientX:h.clientX,sliderRef:i,isFullcreen:e});r(T)}},[r,e]),f=Ee.default.useCallback(h=>{h.preventDefault(),i!=null&&i.current&&(a(!0),n({type:"volumeSliding",payload:!0}))},[]),m=Ee.default.useCallback(h=>{h.preventDefault(),n({type:"volumeSliding",payload:!1});let T=fo({clientX:h.clientX,sliderRef:i,isFullcreen:e});r(T),a(!1)},[r,e]),v=Ee.default.useCallback(h=>{if(h.preventDefault(),!l)return;let T=fo({clientX:h.clientX,sliderRef:i,isFullcreen:e});r(T)},[l,e]);return Ee.default.useEffect(()=>o.volumeSliding?(document.addEventListener("mousemove",v),document.addEventListener("mouseup",m),document.addEventListener("touchmove",v),document.addEventListener("touchcancel",m),document.addEventListener("touchend",m),()=>{document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",m),document.removeEventListener("touchmove",v),document.removeEventListener("touchcancel",m),document.removeEventListener("touchend",m)}):()=>{},[o.volumeSliding,v,m]),{thumbLeft:c,sliderRef:i,thumbRef:s,onMouseDown:f,onMouseMove:v,handleChange:p}},Ia=ju;var ht=y(P());var Oa=ht.default.forwardRef(({isFullscreen:e,...t},r)=>ht.default.createElement("div",{ref:r,...t}));Oa.displayName="SliderContainer";var Ma=b(Oa)`
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
`,Ra=ht.default.forwardRef(({isFullscreen:e,isDisabled:t,...r},o)=>ht.default.createElement("div",{ref:o,...r}));Ra.displayName="SliderTrack";var Da=b(Ra)`
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
`,_a=ht.default.forwardRef(({isFullscreen:e,isDisabled:t,...r},o)=>ht.default.createElement("div",{ref:o,...r}));_a.displayName="SliderThumb";var Ba=b(_a)`
  ${Re} ${Oe} & {
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
`;var Fa=({fullscreen:e,value:t,isDisabled:r,onChange:o})=>{let{thumbLeft:n,sliderRef:i,thumbRef:s,onMouseMove:l,onMouseDown:a,handleChange:c}=Ia({fullscreen:e,value:t,onChange:o});return Qt.default.createElement(yr,{ref:i,role:"slider","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":Math.round(t),"aria-valuetext":`${Math.round(t)}%`,onClick:c,onMouseDown:a,onTouchStart:a,isFullscreen:e},Qt.default.createElement(Ma,{onMouseMove:l,isFullscreen:e},Qt.default.createElement(Da,{style:{width:`${t}%`},isFullscreen:e,isDisabled:r}),Qt.default.createElement(Ba,{ref:s,style:{left:`${n}px`},onMouseDown:a,onTouchStart:a,isFullscreen:e,isDisabled:r})))};Fa.propTypes={value:br.default.number.isRequired,onChange:br.default.func.isRequired,isDisabled:br.default.bool.isRequired,fullscreen:br.default.bool.isRequired};var Na=Qt.default.memo(Fa,(e,t)=>e.fullscreen===t.fullscreen&&e.value===t.value&&e.onChange===t.onChange&&e.isDisabled===t.isDisabled);var Ue=y(P());var Wt=y(P());var fn=({width:e=36,height:t=36})=>Wt.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},Wt.default.createElement("path",{d:"M 22.5 18 C 22.5 16.189 21.48 14.624 20 13.87 L 20 22.136 C 21.48 21.377 22.5 19.812 22.5 18 Z"}),Wt.default.createElement("polygon",{points:"9 14.922 9 21.078 13 21.078 18 26.21 18 9.79 13 14.922"}),Wt.default.createElement("path",{d:"M 20 9 L 20 11.119 C 22.89 12.002 25 14.747 25 18 C 25 21.253 22.89 23.999 20 24.881 L 20 27 C 24.005 26.066 27 22.398 27 18 C 27 13.603 24.005 9.934 20 9 Z"}));fn.displayName="UnmutedIcon";fn.propTypes=z;var Va=Wt.default.memo(fn,$);var Uu=({fullscreen:e,isMuted:t,volume:r,forceMuted:o,changeVolume:n,onMutedClick:i})=>{let s=F(),l=Ue.default.useMemo(()=>Me(e),[e]),a=Ue.default.useMemo(()=>t===!0||r===0||o,[t,r,o]),c=Ue.default.useCallback(()=>a?Ue.default.createElement(ro,{...l}):Ue.default.createElement(Va,{...l}),[a,l]),u=Ue.default.useMemo(()=>o?s.i18n.thisVideoHasNoSound:a?s.i18n.activateSound:s.i18n.mute,[a,o,s.i18n]),p=Ue.default.useCallback(m=>{o===!1&&n(m/100)},[n,o]),f=Ue.default.useCallback(()=>{o===!1&&i(a)},[i,a,o]);return{titleMemorized:u,renderIcon:c,handleOnClick:f,handleChange:p}},qa=Uu;var Ha=({fullscreen:e,isMuted:t,volume:r,forceMuted:o,changeVolume:n,onMutedClick:i})=>{let s=F(),{titleMemorized:l,renderIcon:a,handleOnClick:c,handleChange:u}=qa({fullscreen:e,isMuted:t,volume:r,forceMuted:o,changeVolume:n,onMutedClick:i});return Sr.default.createElement(La,{isSliding:s.volumeSliding,isFullscreen:e},Sr.default.createElement(j,{type:"button","aria-label":l,title:l,onClick:c,isFullscreen:e,isFakeDisabled:o,isTooltipActive:!0},a()),Sr.default.createElement(Na,{fullscreen:e,value:r*100,isDisabled:o,onChange:u}))};Ha.propTypes={fullscreen:yt.default.bool.isRequired,isMuted:yt.default.bool.isRequired,volume:yt.default.number.isRequired,onMutedClick:yt.default.func.isRequired,forceMuted:yt.default.bool.isRequired,changeVolume:yt.default.func.isRequired};var za=Sr.default.memo(Ha,(e,t)=>e.fullscreen===t.fullscreen&&e.isMuted===t.isMuted&&e.volume===t.volume&&e.forceMuted===t.forceMuted&&e.onMutedClick===t.onMutedClick&&e.changeVolume===t.changeVolume);var vr=y(P()),mo=y(Q());var mn=b.div`
  display: inline-block;
  height: 36px;
  padding: 0 5px;
  font-size: 13px;
  line-height: 35px;
  white-space: nowrap;
`,$a=b.span`
  position: relative;
  top: -2px;
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-right: 8px;
  vertical-align: middle;
  border-radius: 50%;
  background: #ff0000;
`;Ae();var ja=({live:e,duration:t,currentTime:r})=>{let{i18n:o}=F();return vr.default.createElement(mn,{role:"timer","aria-live":"off"},ot(Math.round(r)),e?vr.default.createElement(mn,null,vr.default.createElement($a,null),o.live):` / ${ot(Math.round(t))}`)};ja.propTypes={live:mo.default.bool.isRequired,duration:mo.default.number.isRequired,currentTime:mo.default.number.isRequired};var Ua=vr.default.memo(ja,(e,t)=>e.live===t.live&&e.duration===t.duration&&e.currentTime===t.currentTime);var gt=y(P()),Yt=y(Q());var wr=y(P());var hn=({width:e=36,height:t=36})=>wr.default.createElement("svg",{height:e,width:t,version:"1.1",viewBox:"0 0 36 36",fill:"currentColor"},wr.default.createElement("rect",{x:"12",y:"10",width:"3",height:"16"}),wr.default.createElement("rect",{x:"21",y:"10",width:"3",height:"16"}));hn.displayName="PauseIcon";hn.propTypes=z;var Qa=wr.default.memo(hn,$);var Wa=({fullscreen:e,paused:t,ended:r,onPlayClick:o,onPauseClick:n})=>{let{i18n:i}=F(),s=gt.default.useMemo(()=>Me(e),[e]);return t||r?gt.default.createElement(j,{type:"button","aria-label":i.play,title:i.play,onClick:o,isFullscreen:e,isTooltipActive:!0},gt.default.createElement(zt,{...s})):gt.default.createElement(j,{type:"button","aria-label":i.pause,title:i.pause,onClick:n,isFullscreen:e,isTooltipActive:!0},gt.default.createElement(Qa,{...s}))};Wa.propTypes={fullscreen:Yt.default.bool.isRequired,paused:Yt.default.bool.isRequired,ended:Yt.default.bool.isRequired,onPlayClick:Yt.default.func.isRequired,onPauseClick:Yt.default.func.isRequired};var Ya=gt.default.memo(Wa,(e,t)=>e.fullscreen===t.fullscreen&&e.paused===t.paused&&e.ended===t.ended&&e.onPlayClick===t.onPlayClick&&e.onPauseClick===t.onPauseClick);var bt=y(P()),go=y(Q());var ho=y(P());var yn=({width:e=36,height:t=36})=>ho.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36"},ho.default.createElement("path",{fill:"currentColor",d:"M 12 20.667 L 10 20.667 L 10 26 L 15.333 26 L 15.333 24 L 12 24 L 12 20.667 Z M 10 15.333 L 12 15.333 L 12 12 L 15.333 12 L 15.333 10 L 10 10 L 10 15.333 Z M 24 24 L 20.667 24 L 20.667 26 L 26 26 L 26 20.667 L 24 20.667 L 24 24 Z M 20.667 10 L 20.667 12 L 24 12 L 24 15.333 L 26 15.333 L 26 10 L 20.667 10 Z"}));yn.displayName="FullscreenIcon";yn.propTypes=z;var Ga=ho.default.memo(yn,$);var yo=y(P());var gn=({width:e=36,height:t=36})=>yo.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor"},yo.default.createElement("path",{d:"M 10 22.667 L 13.333 22.667 L 13.333 26 L 15.333 26 L 15.333 20.667 L 10 20.667 L 10 22.667 Z M 13.333 13.333 L 10 13.333 L 10 15.333 L 15.333 15.333 L 15.333 10 L 13.333 10 L 13.333 13.333 Z M 20.667 26 L 22.667 26 L 22.667 22.667 L 26 22.667 L 26 20.667 L 20.667 20.667 L 20.667 26 Z M 22.667 13.333 L 22.667 10 L 20.667 10 L 20.667 15.333 L 26 15.333 L 26 13.333 L 22.667 13.333 Z"}));gn.displayName="UnfullscreenIcon";gn.propTypes=z;var Ka=yo.default.memo(gn,$);var Xa=({fullscreen:e,requestFullscreen:t,exitFullscreen:r})=>{let{i18n:o}=F(),n=bt.default.useMemo(()=>Me(e),[e]);return e?bt.default.createElement(j,{type:"button","aria-label":o.exitFullScreenMode,title:o.exitFullScreenMode,onClick:r,isFullscreen:!0,isTooltipActive:!0},bt.default.createElement(Ka,{...n})):bt.default.createElement(j,{type:"button","aria-label":o.fullScreen,title:o.fullScreen,onClick:t,isTooltipActive:!0},bt.default.createElement(Ga,{...n}))};Xa.propTypes={fullscreen:go.default.bool.isRequired,requestFullscreen:go.default.func.isRequired,exitFullscreen:go.default.func.isRequired};var Za=bt.default.memo(Xa,(e,t)=>e.fullscreen===t.fullscreen&&e.requestFullscreen===t.requestFullscreen&&e.exitFullscreen===t.exitFullscreen);var xr=y(P());var Qu=3*1e3,Wu=({hasResource:e,loading:t,prevented:r,paused:o,ended:n,waiting:i,seeking:s,kernelMsg:l})=>{let{controlsHovering:a,timeSliding:c,menuVisible:u,subMenuVisible:p}=F(),f=Z(),m=xr.default.useRef(void 0),v=xr.default.useCallback(()=>{typeof window!="undefined"&&window.clearTimeout(m.current),f({type:"hiding",payload:!1}),!(e===!1||t||r||o||n||i||s||c||u||p||a||l)&&(m.current=window.setTimeout(()=>{f({type:"hiding",payload:!0})},Qu))},[e,t,r,o,n,i,s,c,u,p,a,l]),h=xr.default.useCallback(()=>{if(typeof window!="undefined"&&window.clearTimeout(m.current),e===!1||t||r||o||n||i||s||c||u||p||a||l){f({type:"hiding",payload:!1});return}f({type:"hiding",payload:!0})},[e,t,r,o,n,i,s,c,u,p,a,m,l]);return xr.default.useEffect(()=>{typeof window!="undefined"&&(o||n)?(window.clearTimeout(m.current),f({type:"hiding",payload:!1})):o||v()},[o,n,m]),{showControls:v,hideControls:h}},Ja=Wu;var ce=y(P()),_e=y(Q());var kr=y(P());var el=b.div`
  position: relative;
  display: inline-block;
`,tl=kr.default.forwardRef(({singleOption:e,hiding:t,isFullscreen:r,...o},n)=>kr.default.createElement("div",{ref:n,...o}));tl.displayName="DropdownOverlay";var rl=b(tl)`
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
`,ol=b.ul`
  min-width: 250px;
  padding: 10px 0;
`,nl=b.li`
  & ${j} {
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
  & ${j}:focus, & ${j}:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
`,il=b.div`
  margin-right: auto;
`,sl=b.div`
  font-size: 87%;
`,al=b.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`,ll=kr.default.forwardRef(({isFullHD:e=!1,isExpanded:t=!1,isFullscreen:r=!1,...o},n)=>kr.default.createElement(j,{ref:n,isFullscreen:r,...o}));ll.displayName="DropdownButton";var cl=b(ll)`
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
`;var bo=y(P());var bn=({width:e=36,height:t=36})=>bo.default.createElement("svg",{height:t,width:e,viewBox:"0 0 36 36",fill:"currentColor"},bo.default.createElement("path",{d:"M 25.089 17.774 C 25.056 17.032 24.908 16.3 24.649 15.604 L 25.796 14.535 C 26.013 14.326 26.065 13.997 25.921 13.732 C 25.463 12.886 24.874 12.117 24.177 11.453 C 23.965 11.247 23.641 11.211 23.39 11.366 L 22.034 12.21 C 21.424 11.786 20.75 11.461 20.039 11.247 L 19.9 9.677 C 19.877 9.375 19.646 9.13 19.345 9.09 C 18.927 9.029 18.505 8.999 18.082 9 C 17.543 8.998 17.006 9.045 16.476 9.141 C 16.19 9.187 15.97 9.419 15.939 9.706 L 15.772 11.311 C 15.117 11.533 14.498 11.849 13.934 12.249 L 12.614 11.398 C 12.362 11.236 12.032 11.269 11.817 11.478 C 11.108 12.158 10.512 12.947 10.053 13.816 C 9.913 14.076 9.961 14.398 10.172 14.606 L 11.329 15.72 C 11.115 16.314 10.981 16.933 10.93 17.563 L 9.44 18.086 C 9.155 18.18 8.974 18.459 9.003 18.757 C 9.068 19.751 9.296 20.727 9.677 21.646 C 9.786 21.924 10.073 22.091 10.368 22.048 L 11.93 21.823 C 12.234 22.337 12.602 22.811 13.025 23.232 L 12.473 24.754 C 12.372 25.032 12.468 25.342 12.707 25.515 C 13.505 26.099 14.394 26.548 15.338 26.844 C 15.625 26.937 15.938 26.818 16.09 26.559 L 16.897 25.207 C 17.245 25.265 17.597 25.297 17.95 25.303 C 18.215 25.305 18.48 25.292 18.744 25.261 L 19.55 26.658 C 19.69 26.921 19.991 27.054 20.28 26.979 C 21.228 26.728 22.128 26.321 22.943 25.775 C 23.195 25.609 23.302 25.293 23.203 25.008 L 22.686 23.512 C 23.198 23.057 23.643 22.532 24.006 21.951 L 25.568 22.202 C 25.862 22.25 26.151 22.089 26.265 21.813 C 26.657 20.921 26.903 19.971 26.994 19.001 C 27.034 18.698 26.855 18.41 26.567 18.311 Z M 25.266 20.834 L 23.37 20.532 L 22.917 21.258 C 22.62 21.735 22.257 22.167 21.838 22.542 L 21.195 23.123 L 21.838 24.947 C 21.392 25.208 20.92 25.423 20.431 25.589 L 19.467 23.9 L 18.641 23.984 C 18.428 24.009 18.213 24.02 17.999 24.019 C 17.708 24.013 17.418 23.986 17.131 23.939 L 16.238 23.769 L 15.255 25.438 C 14.764 25.253 14.294 25.017 13.854 24.732 L 14.526 22.898 L 13.931 22.311 C 13.587 21.962 13.286 21.573 13.035 21.152 L 12.595 20.413 L 10.696 20.686 C 10.526 20.188 10.406 19.674 10.336 19.152 L 12.158 18.51 L 12.216 17.668 C 12.255 17.154 12.364 16.648 12.537 16.163 L 12.816 15.366 L 11.422 14.021 C 11.69 13.582 12.001 13.17 12.35 12.792 L 13.957 13.832 L 14.66 13.328 C 15.122 13.002 15.629 12.743 16.164 12.56 L 16.951 12.297 L 17.154 10.352 C 17.458 10.311 17.765 10.289 18.072 10.284 C 18.268 10.284 18.464 10.284 18.664 10.313 L 18.834 12.239 L 19.672 12.493 C 20.254 12.668 20.805 12.933 21.304 13.28 L 21.995 13.761 L 23.634 12.74 C 23.973 13.107 24.276 13.504 24.54 13.928 L 23.139 15.244 L 23.46 16.063 C 23.67 16.632 23.792 17.23 23.82 17.835 L 23.859 18.705 L 25.664 19.364 C 25.581 19.866 25.447 20.358 25.266 20.834 Z M 17.979 21.2 C 15.506 21.2 13.96 18.524 15.197 16.384 C 16.434 14.244 19.525 14.244 20.762 16.384 C 21.048 16.88 21.197 17.443 21.192 18.015 C 21.189 19.783 19.748 21.211 17.979 21.2 Z M 18.021 16.063 C 16.537 16.046 15.591 17.64 16.318 18.933 C 17.045 20.226 18.9 20.248 19.657 18.972 C 19.833 18.675 19.926 18.335 19.926 17.99 C 19.926 16.934 19.077 16.075 18.021 16.063 Z"}));bn.displayName="SettingsIcon";bn.propTypes=z;var ul=bo.default.memo(bn,$);var So=y(P());var Sn=({width:e=36,height:t=36})=>So.default.createElement("svg",{width:e,height:t,viewBox:"0 0 24 24"},So.default.createElement("path",{fill:"currentColor",d:"M 15.7 12 C 15.7 12.105 15.658 12.196 15.573 12.277 L 9.648 17.88 C 9.563 17.96 9.466 18 9.355 18 C 9.245 18 9.148 17.96 9.063 17.88 L 8.427 17.278 C 8.342 17.199 8.3 17.106 8.3 17.002 C 8.3 16.898 8.342 16.806 8.427 16.725 L 13.424 12 L 8.427 7.275 C 8.342 7.194 8.3 7.102 8.3 6.998 C 8.3 6.894 8.342 6.801 8.427 6.722 L 9.063 6.12 C 9.148 6.04 9.245 6 9.355 6 C 9.466 6 9.563 6.04 9.648 6.12 L 15.573 11.723 C 15.658 11.804 15.7 11.895 15.7 12 Z"}));Sn.displayName="ArrowRightIcon";Sn.propTypes=z;var pl=So.default.memo(Sn,$);var Pr=y(P());var ae=y(P());var vo=y(P());var vn=({width:e=36,height:t=36})=>vo.default.createElement("svg",{width:e,height:t,viewBox:"0 0 24 24"},vo.default.createElement("path",{fill:"currentColor",d:"M 15.7 6.998 C 15.7 7.102 15.658 7.194 15.573 7.275 L 10.576 12 L 15.573 16.725 C 15.658 16.806 15.7 16.898 15.7 17.002 C 15.7 17.106 15.658 17.198 15.573 17.279 L 14.937 17.88 C 14.852 17.96 14.755 18 14.645 18 C 14.534 18 14.437 17.96 14.352 17.88 L 8.427 12.277 C 8.342 12.196 8.3 12.104 8.3 12 C 8.3 11.896 8.342 11.804 8.427 11.723 L 14.352 6.12 C 14.437 6.04 14.534 6 14.645 6 C 14.755 6 14.852 6.04 14.937 6.12 L 15.573 6.721 C 15.658 6.802 15.7 6.894 15.7 6.998 Z"}));vn.displayName="ArrowLeftIcon";vn.propTypes=z;var dl=vo.default.memo(vn,$);var fl=ae.default.forwardRef(({title:e,options:t,value:r,hiding:o,isFullscreen:n,onClick:i,goBack:s,...l},a)=>{let{i18n:c}=F(),[u,p]=ae.default.useState(!1);return ae.default.useEffect(()=>{p(!1),o&&setTimeout(()=>{p(!0)},100)},[o]),ae.default.createElement("div",{ref:a,...l},ae.default.createElement(hl,null,ae.default.createElement(j,{onClick:s,isFullscreen:n,isText:!0},ae.default.createElement(dl,{width:28,height:28}),ae.default.createElement("span",null,e))),ae.default.createElement(yl,{show:u},ae.default.createElement(gl,null,t.map((f,m)=>ae.default.createElement(bl,{key:m,selected:f.value===r,isFullscreen:n},ae.default.createElement(j,{onClick:()=>i(f.value),isFullscreen:n,isText:!0},f.label,"isFullHD"in f&&f.isFullHD&&ae.default.createElement(Sl,null,c.hd)))))))});fl.displayName="DropdownOverlay";var ml=fl;var vl=b(ml)`
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
`,hl=b.div`
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
  & ${j} {
    width: 100%;
    font-size: 91%;
    padding: 20px 5px;
    height: 57px;
  }
`,wl=Pr.default.forwardRef(({show:e,...t},r)=>Pr.default.createElement("div",{ref:r,...t}));wl.displayName="DropdownContent";var yl=b(wl)`
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
`,gl=b.ul`
  padding: 10px 0;
`,xl=Pr.default.forwardRef(({selected:e,isFullscreen:t,...r},o)=>Pr.default.createElement("li",{ref:o,...r}));xl.displayName="DropdownItem";var bl=b(xl)`
  ${Re} ${Oe} & {
    padding: 0 15px;

    & ${j} {
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
    & ${j}:hover {
      background: rgba(255, 255, 255, 0.1) !important;
    }
  }
`,Sl=b.sub`
  font-size: 10px;
  font-weight: 500;
  color: #cb0e0b;
  margin-left: 3px;
`;var le=y(P());var Cr={generalMenu:!1,speed:!1,quality:!1};var Er=({label:e,value:t,i18n:r})=>e==="quality"?`${t}p`:e==="speed"&&t==="1"?r.normal:t;var kl=({qualityOptions:e,live:t,i18n:r})=>{let o=[];return t||o.push({label:r.speed,value:"speed",options:[{label:"2",value:"2"},{label:"1.5",value:"1.5"},{label:"1.25",value:"1.25"},{label:"Normal",value:"1"},{label:"0.75",value:"0.75"},{label:"0.5",value:"0.5"},{label:"0.25",value:"0.25"}]}),e.length>0&&o.push({label:r.quality,value:"quality",options:e}),o};var Yu=({live:e,fullHDQualityBreak:t,qualities:r,playbackRate:o,changeSettings:n,fullscreen:i})=>{var E,C,O,A,d,M;let{i18n:s}=F(),l=Z(),a=le.default.useRef(null),[c,u]=le.default.useState(Cr),[p,f]=le.default.useState({quality:{label:(C=(E=r[0])==null?void 0:E.label)!=null?C:"",value:(A=(O=r[0])==null?void 0:O.value)!=null?A:"",isFullHD:(M=(d=r[0])==null?void 0:d.isFullHD)!=null?M:!1},speed:{label:s.normal,value:"1"}});(0,le.useEffect)(()=>{let _=o.toString();f(w=>({...w,speed:{label:Er({label:"speed",value:_,i18n:s}),value:_}}))},[s,o]);let m=le.default.useCallback(_=>{_.stopPropagation(),l(w=>({type:"menuVisible",payload:w.subMenuVisible?!1:!w.menuVisible})),l({type:"subMenuVisible",payload:!1}),u(w=>({...Cr,generalMenu:!w.speed&&!w.quality?!w.generalMenu:!1}))},[]),v=le.default.useCallback(_=>w=>{f(D=>({...D,[_]:{label:Er({label:_,value:w,i18n:s}),value:w,isFullHD:t!==void 0&&Number(w!=null?w:"0")>=t}})),l({menuVisible:!1,subMenuVisible:!1}),u(Cr)},[t,s]),h=le.default.useCallback(_=>{l({menuVisible:!1,subMenuVisible:!0}),u(w=>({...w,generalMenu:!1,[_]:!0}))},[]),T=le.default.useCallback(_=>()=>{l({menuVisible:!0,subMenuVisible:!1}),u(w=>({...w,generalMenu:!0,[_]:!1}))},[]);le.default.useEffect(()=>{let _=w=>{var D;a.current&&(!a.current.contains(w.target)||!Array.from((D=a.current)==null?void 0:D.querySelectorAll("*")).map(k=>k.contains(w.target)).includes(!0))&&(l({menuVisible:!1,subMenuVisible:!1}),u(Cr))};return document.body.addEventListener("click",_),()=>document.body.removeEventListener("click",_)},[]);let g=le.default.useMemo(()=>kl({qualityOptions:r,live:e,i18n:s}),[e,r,s]),S=le.default.useMemo(()=>Me(i),[i]);return le.default.useEffect(()=>{n(p)},[p]),{dropdownRef:a,settings:c,values:p,iconProps:S,settingsOptions:g,handleButtonClick:m,handleMenuItemClick:h,handleMenuClick:v,handleGoBack:T}},Pl=Yu;var Cl=({live:e,qualities:t,playbackRate:r,fullHDQualityBreak:o,changeSettings:n,fullscreen:i})=>{var T;let{i18n:s}=F(),{dropdownRef:l,settings:a,values:c,iconProps:u,settingsOptions:p,handleButtonClick:f,handleMenuItemClick:m,handleMenuClick:v,handleGoBack:h}=Pl({live:e,fullHDQualityBreak:o,qualities:t,playbackRate:r,changeSettings:n,fullscreen:i});return ce.default.createElement(el,{ref:l},ce.default.createElement(cl,{type:"button","aria-label":s.settings,title:s.settings,"aria-expanded":a.generalMenu,onClick:f,isFullscreen:i,isFullHD:(T=c.quality)==null?void 0:T.isFullHD,isExpanded:a.generalMenu,isTooltipActive:!0},ce.default.createElement(ul,{...u})),ce.default.createElement(rl,{hiding:a.generalMenu,singleOption:e||t.length===0,isFullscreen:i},ce.default.createElement(ol,null,p.map((g,S)=>{var E;return ce.default.createElement(nl,{key:S},ce.default.createElement(j,{onClick:()=>m(g.value),isFullscreen:i,isText:!0},ce.default.createElement(il,null,g.label),ce.default.createElement(al,null,ce.default.createElement(sl,null,(E=c[g.value])==null?void 0:E.label),ce.default.createElement(pl,{width:28,height:28}))))}))),p.map((g,S)=>{var E;return ce.default.createElement(vl,{key:S,hiding:a[g.value],title:g.label,options:g.options,value:(E=c[g.value])==null?void 0:E.value,isFullscreen:i,onClick:v(g.value),goBack:h(g.value)})}))};Cl.propTypes={live:_e.default.bool.isRequired,qualities:_e.default.arrayOf(_e.default.shape({label:_e.default.string.isRequired,value:_e.default.string.isRequired}).isRequired).isRequired,playbackRate:_e.default.number.isRequired,fullHDQualityBreak:_e.default.number,changeSettings:_e.default.func.isRequired,fullscreen:_e.default.bool.isRequired};var El=ce.default.memo(Cl,(e,t)=>e.live===t.live&&e.qualities===t.qualities&&e.playbackRate===t.playbackRate&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.changeSettings===t.changeSettings&&e.fullscreen===t.fullscreen);var St=y(P());var wo=y(P());var wn=({width:e=36,height:t=36})=>wo.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},wo.default.createElement("path",{d:"M 21.333 23.666 C 21.333 23.758 21.3 23.835 21.235 23.902 C 21.168 23.967 21.091 24 21 24 L 11 24 C 10.944 24 10.898 23.995 10.859 23.979 C 10.821 23.966 10.789 23.942 10.765 23.906 C 10.741 23.871 10.723 23.844 10.708 23.822 C 10.695 23.803 10.684 23.762 10.678 23.703 C 10.671 23.644 10.667 23.604 10.667 23.583 L 10.667 17.335 L 8.667 17.335 C 8.487 17.335 8.329 17.266 8.198 17.134 C 8.067 17.004 8 16.846 8 16.666 C 8 16.5 8.052 16.358 8.156 16.239 L 11.489 12.24 C 11.621 12.087 11.792 12.01 12 12.01 C 12.208 12.01 12.379 12.087 12.511 12.24 L 15.844 16.239 C 15.948 16.358 16 16.5 16 16.666 C 16 16.846 15.933 17.004 15.803 17.134 C 15.671 17.266 15.513 17.335 15.333 17.335 L 13.333 17.335 L 13.333 21.334 L 19.333 21.334 C 19.444 21.334 19.532 21.372 19.593 21.448 L 21.26 23.448 C 21.309 23.518 21.333 23.59 21.333 23.666 Z M 28 19.334 C 28 19.5 27.948 19.642 27.844 19.761 L 24.511 23.76 C 24.372 23.92 24.201 24 24 24 C 23.799 24 23.628 23.92 23.489 23.76 L 20.156 19.761 C 20.052 19.642 20 19.5 20 19.334 C 20 19.154 20.067 18.996 20.198 18.866 C 20.329 18.734 20.487 18.667 20.667 18.667 L 22.667 18.667 L 22.667 14.666 L 16.667 14.666 C 16.556 14.666 16.468 14.626 16.407 14.542 L 14.74 12.542 C 14.691 12.478 14.667 12.41 14.667 12.334 C 14.667 12.243 14.7 12.166 14.765 12.098 C 14.832 12.034 14.909 12 15 12 L 25 12 C 25.056 12 25.103 12.007 25.141 12.022 C 25.179 12.034 25.211 12.058 25.235 12.094 C 25.259 12.13 25.278 12.156 25.292 12.178 C 25.305 12.199 25.316 12.238 25.323 12.298 C 25.329 12.356 25.333 12.396 25.333 12.418 L 25.333 18.667 L 27.333 18.667 C 27.513 18.667 27.671 18.734 27.803 18.866 C 27.933 18.996 28 19.154 28 19.334 Z"}));wn.displayName="InLoopIcon";wn.propTypes=z;var Tl=wo.default.memo(wn,$);var xo=y(P());var xn=({width:e=36,height:t=36})=>xo.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",fill:"currentColor"},xo.default.createElement("path",{d:"M25 17H17v6H25zM29 25V10.981a1.989 1.989 0 0 0 -2 -1.981H9a1.989 1.989 0 0 0 -2 1.981V25c0 1.1 0.9 2 2 2h18c1.1 0 2 -0.9 2 -2m-2 0.019H9V10.969h18z"}));xn.displayName="PipIcon";xn.propTypes=z;var Al=xo.default.memo(xn,$);var Gu=({fullscreen:e,contextMenuRef:t,pictureInPictureEnabled:r,pip:o,loop:n=!1,requestPictureInPicture:i,exitPictureInPicture:s,onLoopClick:l})=>{let a=Z(),[c,u]=St.default.useState({x:0,y:0}),p=St.default.useCallback(v=>{var K,we;v.preventDefault();let h=((K=t.current)==null?void 0:K.offsetWidth)||0,T=((we=t.current)==null?void 0:we.offsetHeight)||0,g=v.pageX,S=v.pageY,E=document.documentElement,C=E.scrollLeft||0,O=E.scrollTop||0,A=E.clientLeft||0,d=E.clientTop||0,M=window.innerWidth||0,_=window.innerHeight||0,w=(window.pageXOffset||C)-(A||0),D=(window.pageYOffset||O)-(d||0),k=g+h>M+w?g-h:g,I=S+T>_+D?S-T:S;u({x:k,y:I}),a({type:"contextMenuVisible",payload:!0})},[t]),f=St.default.useMemo(()=>Me(e),[e]),m=St.default.useMemo(()=>{let v=[{action:()=>l(),label:"En Bucle",icon:St.default.createElement(Tl,{...f}),isCheckable:!0,defaultChecked:n}];return r&&v.push({action:()=>o?s():i(),label:"Pantalla en pantalla",icon:St.default.createElement(Al,{...f}),isCheckable:!1,defaultChecked:!1}),v},[f,r,o,n,i,s]);return{handleContextMenu:p,contextMenuPosition:c,contextMenuItems:m}},Ll=Gu;var ve=y(P()),Fl=y(mc("react-dom"));var Tr=y(P());var Il=Tr.default.forwardRef(({showing:e,positionX:t,positionY:r,...o},n)=>Tr.default.createElement("div",{ref:n,...o}));Il.displayName="StyledContextMenu";var Ol=b(Il)`
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
`,Ml=Tr.default.forwardRef(({isFullscreen:e,...t},r)=>Tr.default.createElement("div",{ref:r,...t}));Ml.displayName="ContextMenuItem";var Rl=b(Ml)`
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
`,Dl=b.span`
  padding: 0 12px;
  font-size: 118%;
`,_l=b.div`
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
`;Ae();var ko=y(P());var kn=({width:e=36,height:t=36})=>ko.default.createElement("svg",{width:e,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},ko.default.createElement("path",{d:"M4.8 19.582 13.237 28.05 31.2 9.877 29.295 7.95 13.237 24.197 6.705 17.586Z"}));kn.displayName="CheckedIcon";kn.propTypes=z;var Bl=ko.default.memo(kn,$);var Nl=ve.default.forwardRef(({fullscreen:e,position:t,menuItems:r},o)=>{let n=F(),i=Z(),s=ve.default.useRef(),[l,a]=ve.default.useState({}),c=ve.default.useMemo(()=>{var p;return e?(p=n.playerRef)==null?void 0:p.current:document.body},[e,n.playerRef]);ve.default.useEffect(()=>{let p=f=>{var m;s.current&&(!s.current.contains(f.target)||!Array.from((m=s.current)==null?void 0:m.querySelectorAll("*")).map(v=>v.contains(f.target)).includes(!0))&&i({type:"contextMenuVisible",payload:!1})};return window.addEventListener("click",p),()=>{window.removeEventListener("click",p)}},[i,s]);let u=ve.default.createElement(Ol,{ref:qn([o,s]),showing:n.contextMenuVisible,positionX:t.x,positionY:t.y,"data-itemindex":"0","aria-checked":n.contextMenuVisible},r.map((p,f)=>ve.default.createElement(Rl,{key:f,onClick:()=>{p.action(),i({type:"contextMenuVisible",payload:!1}),a(m=>({...m,[f]:!m[f]}))},isFullscreen:e},p.icon,ve.default.createElement(Dl,null,p.label),p.isCheckable&&(l[f]||p.defaultChecked)&&ve.default.createElement(_l,null,ve.default.createElement(Bl,{width:24,height:24})))));return Fl.default.createPortal(u,c)});Nl.displayName="ContextMenu";var Vl=ve.default.memo(Nl,(e,t)=>e.fullscreen===t.fullscreen&&e.position===t.position&&e.menuItems===t.menuItems);var Pn=V.default.forwardRef(({videoRef:e,playerRef:t,live:r=!1,hasResource:o=!1,hasAudio:n,prevented:i,loading:s,paused:l,ended:a,seeking:c,waiting:u,duration:p,buffered:f=null,currentTime:m,muted:v,volume:h,pictureInPictureEnabled:T,pip:g,fullscreen:S,qualities:E,spriteVTTFile:C,fullHDQualityBreak:O,playbackRate:A,loop:d,poster:M,onPlayClick:_,onPauseClick:w,onTogglePlay:D,changePlaybackRate:k,changePlayBackQuality:I,changeVolume:K,onMutedClick:we,changeCurrentTime:vt,requestPictureInPicture:pe,exitPictureInPicture:fe,requestFullscreen:de,exitFullscreen:wt,onSeeking:et,onLoopClick:Te,onPreventedClick:Or,kernelMsg:tt=null},xt)=>{let rt=Z(),[kt,Fe]=V.default.useState(!1),xe=V.default.useRef(),Pt=V.default.useRef(null),{showControls:ke,hideControls:me}=Ja({hasResource:o,loading:s,prevented:i,paused:l,ended:a,waiting:u,seeking:c,kernelMsg:tt}),{contextMenuItems:ic,contextMenuPosition:sc,handleContextMenu:ac}=Ll({fullscreen:S,contextMenuRef:Pt,pip:g,loop:d,pictureInPictureEnabled:T,requestPictureInPicture:pe,exitPictureInPicture:fe,onLoopClick:Te});return V.default.useEffect(()=>{var Ne;rt({videoRef:e,playerRef:t}),(Ne=t.current)==null||Ne.focus()},[e,t]),V.default.useImperativeHandle(xt,()=>({showControls:ke,hideControls:me}),[ke,me]),V.default.useEffect(()=>{var Ne;if(t.current){let Ct=Ve=>{let Xt=lo[Ve.which||Ve.keyCode]||co[Ve.key];clearTimeout(xe.current),Xt==="ARROW_UP_KEY"||Xt==="ARROW_DOWN_KEY"?(Fe(!0),xe.current=setTimeout(()=>Fe(!1),2e3)):Fe(!1)};return(Ne=t.current)==null||Ne.addEventListener("keydown",Ct),()=>{var Ve;(Ve=t.current)==null||Ve.removeEventListener("keydown",Ct)}}},[v,h,t,xe]),V.default.createElement(Oe,{onContextMenu:ac,onMouseLeave:me,onMouseMove:ke,onTouchStart:ke,onMouseEnter:ke,onClick:ke},V.default.createElement(_s,null),V.default.createElement(Es,{hasResource:o,prevented:i,paused:l,muted:v,currentTime:m,onClick:Or}),M&&V.default.createElement(Ns,{style:{opacity:m<=0||a?1:0}},V.default.createElement(Vs,{style:{backgroundImage:`url(${M})`}})),V.default.createElement(Bs,null,V.default.createElement(Fs,{style:{display:kt?"inline-block":"none"}},Math.round(h*100),"%")),V.default.createElement(Vl,{ref:Pt,fullscreen:S,position:sc,menuItems:ic}),V.default.createElement(Is,{hasResource:o,loading:s,paused:l,ended:a,waiting:u,seeking:c,kernelMsg:tt,onClick:D}),V.default.createElement(js,null,r===!1&&V.default.createElement(Pa,{spriteVTTFile:C,currentTime:m,duration:p,buffered:f,onChange:vt,onSeeking:et,fullscreen:S}),V.default.createElement(Xs,{extra:V.default.createElement(V.default.Fragment,null,V.default.createElement(El,{live:r,qualities:E,playbackRate:A,fullscreen:S,fullHDQualityBreak:O,changeSettings:({quality:Ne,speed:Ct})=>{var Ve,Xt;k(Number((Ve=Ct==null?void 0:Ct.value)!=null?Ve:1)),I((Xt=Number(Ne==null?void 0:Ne.value))!=null?Xt:0)}}),V.default.createElement(Za,{fullscreen:S,requestFullscreen:de,exitFullscreen:wt})),fullscreen:S},V.default.createElement(Ya,{fullscreen:S,paused:l,ended:a,onPauseClick:w,onPlayClick:_}),V.default.createElement(za,{fullscreen:S,isMuted:v,forceMuted:!n,volume:h,onMutedClick:we,changeVolume:K}),V.default.createElement(Ua,{live:r,currentTime:m,duration:p}))),V.default.createElement(Rs,{hasResource:o,loading:s,kernelMsg:tt}))});Pn.displayName="PlayerSkin";Pn.propTypes={spriteVTTFile:L.default.string,videoRef:L.default.oneOfType([L.default.func,L.default.shape({current:L.default.instanceOf(HTMLVideoElement)})]).isRequired,playerRef:L.default.oneOfType([L.default.func,L.default.shape({current:L.default.instanceOf(HTMLDivElement)})]).isRequired,prevented:L.default.bool,waiting:L.default.bool,live:L.default.bool.isRequired,hasResource:L.default.bool.isRequired,loading:L.default.bool.isRequired,paused:L.default.bool.isRequired,ended:L.default.bool.isRequired,seeking:L.default.bool.isRequired,onPlayClick:L.default.func.isRequired,onPauseClick:L.default.func.isRequired,duration:L.default.number.isRequired,buffered:L.default.number.isRequired||null,currentTime:L.default.number.isRequired,changeCurrentTime:L.default.func.isRequired,muted:L.default.bool.isRequired,volume:L.default.number.isRequired,changeVolume:L.default.func.isRequired,onMutedClick:L.default.func.isRequired,changePlaybackRate:L.default.func.isRequired,pictureInPictureEnabled:L.default.bool.isRequired,pip:L.default.bool.isRequired,requestPictureInPicture:L.default.func.isRequired,exitPictureInPicture:L.default.func.isRequired,fullscreen:L.default.bool.isRequired,qualities:L.default.arrayOf(L.default.shape({label:L.default.string.isRequired,value:L.default.string.isRequired,isFullHD:L.default.bool.isRequired}).isRequired).isRequired,playbackRate:L.default.number.isRequired,loop:L.default.bool.isRequired,requestFullscreen:L.default.func.isRequired,exitFullscreen:L.default.func.isRequired,onLoopClick:L.default.func.isRequired,onPreventedClick:L.default.func.isRequired,kernelMsg:L.default.oneOfType([L.default.shape({type:L.default.string.isRequired,detail:L.default.string.isRequired}),L.default.oneOf([void 0])]),fullHDQualityBreak:L.default.number,poster:L.default.string.isRequired};var ql=V.default.memo(Pn,(e,t)=>e.spriteVTTFile===t.spriteVTTFile&&e.videoRef===t.videoRef&&e.playerRef===t.playerRef&&e.live===t.live&&e.hasResource===t.hasResource&&e.loading===t.loading&&e.prevented===t.prevented&&e.paused===t.paused&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.pictureInPictureEnabled===t.pictureInPictureEnabled&&e.pip===t.pip&&e.fullscreen===t.fullscreen&&e.qualities===t.qualities&&e.playbackRate===t.playbackRate&&e.loop===t.loop&&e.kernelMsg===t.kernelMsg&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.poster===t.poster&&e.onPauseClick===t.onPauseClick&&e.onPlayClick===t.onPlayClick&&e.changeCurrentTime===t.changeCurrentTime&&e.onMutedClick===t.onMutedClick&&e.changeVolume===t.changeVolume&&e.changePlaybackRate===t.changePlaybackRate&&e.requestPictureInPicture===t.requestPictureInPicture&&e.exitPictureInPicture===t.exitPictureInPicture&&e.requestFullscreen===t.requestFullscreen&&e.exitFullscreen===t.exitFullscreen&&e.onSeeking===t.onSeeking&&e.onLoopClick===t.onLoopClick&&e.onPreventedClick===t.onPreventedClick);var Po=y(P());var Ar=["i18n","contextMenuVisible","controlsHovering","hiding","menuVisible","subMenuVisible","timeSliding","volumeSliding","videoRef","playerRef"];function Hl(e,t){try{if(!e||!t)throw new Error("Reducer params has not been provided!");if("type"in t){let{type:r,payload:o}=t;for(let n=0;n<Ar.length;n++){let i=Ar[n];if(Ar.includes(r)===!1)throw new Error(`Invalid type "${r}" in action payload!`);if(i===r)return{...e,[i]:o}}}else if(typeof t=="object"){if(Object.keys(t).length===0)throw new Error("Reducer action object is empty!");let r={...e};for(let o in t){let n=t[o];if(Ar.includes(o)===!1)throw new Error(`Invalid type "${o}" in action object!`);r={...r,[o]:n}}return r}return e}catch(r){return console.error("Error in AppReducer: ",r),e}}var zl=({children:e,language:t})=>{let[r,o]=Po.default.useReducer(Hl,{...an,i18n:It[t]}),n=Po.default.useMemo(()=>({state:r,dispatch:o}),[r,o]);return Po.default.createElement($t.Provider,{value:n},e)};var Be=y(P());var Je=y(P()),Ku=({prevented:e,muted:t,videoRef:r,src:o,updateState:n})=>{let i=Je.default.useCallback(c=>{if(!r.current)return;let u=c.target.muted;c.target.volume===0&&(u=!0),n({volume:c.target.volume,muted:u})},[r]),s=Je.default.useCallback(()=>{if(!r.current)return;let c=r.current;if(c){let u=0;(e||t||c.volume===0)&&c.muted===!0&&(u=1),n({volume:u,muted:!c.muted})}},[r,e,t]),l=Je.default.useCallback(c=>{if(!r.current)return;let u=r.current,p=c===0;u&&(u.volume=c),c!==0&&u.muted===!0&&(p=!1),n({volume:c,muted:p})},[r]),a=Je.default.useCallback(c=>{if(!r.current)return;let p=r.current.volume,f=c(p);l(f)},[r,l]);return Je.default.useEffect(()=>()=>{r.current=null},[r]),Je.default.useEffect(()=>{if(!r.current)return()=>{};let c=r.current;return c?(c.addEventListener("volumechange",i),()=>{c.removeEventListener("volumechange",i)}):()=>{}},[i]),Je.default.useEffect(()=>{if(!r.current)return;let c=r.current;c&&(c.muted=!1,c.volume=1)},[o,r]),{onMutedClick:s,changeVolume:l,updateVolumeWithCallback:a}},$l=Ku;var Gt=y(P()),Xu=({updateState:e,videoRef:t,playerRef:r})=>{let o=Gt.default.useCallback(()=>{let l=r==null?void 0:r.current,a=t==null?void 0:t.current;if(!l){console.error("useVideoFullscreen: the player element is not ready");return}l.requestFullscreen?l.requestFullscreen():l.msRequestFullscreen?l.msRequestFullscreen():l.webkitRequestFullscreen?l.webkitRequestFullscreen():a&&a.webkitEnterFullScreen&&a.webkitEnterFullScreen()},[t,r]),n=Gt.default.useCallback(()=>{document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},[]),i=Gt.default.useCallback(()=>{let l=r==null?void 0:r.current;(document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement)===l?n():o()},[r,n,o]),s=Gt.default.useCallback(()=>{let l=r==null?void 0:r.current,a=document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement;e({fullscreen:!!l&&a===l})},[e,r]);return Gt.default.useEffect(()=>(document.addEventListener("fullscreenchange",s),document.addEventListener("webkitfullscreenchange",s),document.onmsfullscreenchange=s,()=>{document.removeEventListener("fullscreenchange",s),document.removeEventListener("webkitfullscreenchange",s),document.onmsfullscreenchange=null}),[s]),{requestFullscreen:o,exitFullscreen:n,requestToggleFullscreen:i}},jl=Xu;var Zu=({ref:e,playerRef:t,url:r,player:o,fullHDQualityBreak:n,sources:i,prevented:s,muted:l,updateState:a})=>{let{i18n:c}=F(),u=Be.default.useRef(null),p=Be.default.useRef(null),{requestFullscreen:f,exitFullscreen:m,requestToggleFullscreen:v}=jl({updateState:({fullscreen:d})=>{a(M=>({...M,isFullScreen:d}))},videoRef:u,playerRef:t}),h=Be.default.useMemo(()=>i.length>0?i.map(d=>({label:Er({label:"quality",value:d.resolution.toString(),i18n:c}),value:d.resolution.toString(),isFullHD:n!==void 0&&d.resolution>=n})):[],[i,n,c]),{onMutedClick:T,changeVolume:g,updateVolumeWithCallback:S}=$l({prevented:s,muted:l,videoRef:u,src:r,updateState:({muted:d,volume:M})=>a(_=>({..._,isMuted:d!=null?d:!1,volume:M!=null?M:0}))}),E=Be.default.useCallback(d=>{o&&(a(M=>({...M,played:d})),o.seekTo(d))},[o]),C=Be.default.useCallback(d=>{if(!o)return;let M=o.getCurrentTime()||0,_=o.getDuration()||0,w=d(M,_);E(w)},[o]),O=Be.default.useMemo(()=>({onPlayClick:()=>o&&a(d=>({...d,playing:!0})),onPauseClick:()=>o&&a(d=>({...d,playing:!1})),onTogglePlay:()=>o&&a(d=>({...d,playing:!d.playing})),changePlaybackRate:d=>o&&a(M=>({...M,playbackRate:d})),changePlayBackQuality:d=>{o&&a(M=>({...M,playbackQuality:d}))},requestPictureInPicture:()=>o&&a(d=>({...d,isPIP:!0})),exitPictureInPicture:()=>o&&a(d=>({...d,isPIP:!1})),onSeeking:d=>o&&a(M=>({...M,seeking:d})),onMutedClick:()=>o&&T(),onLoopClick:()=>o&&a(d=>({...d,loop:!d.loop})),onPreventedClick:()=>a(d=>({...d,isMuted:!1,volume:1})),changeCurrentTime:E}),[o]),A=Be.default.useCallback(d=>{var _;d.preventDefault(),d.stopPropagation();let M=lo[d.which||d.keyCode]||co[d.key];if(o)switch((_=p.current)==null||_.showControls(),M){case"SPACE_KEY":{a(w=>({...w,playing:!w.playing}));break}case"F_KEY":{v();break}case"MUTE_KEY":{T();break}case"ARROW_LEFT_KEY":{C(w=>{let D=w-5;return D<0?0:D});break}case"ARROW_RIGHT_KEY":{C((w,D)=>{let k=w+5;return k>=D?D:k});break}case"ARROW_UP_KEY":{S(w=>{let D=w+.1;return D>=1?1:D});break}case"ARROW_DOWN_KEY":{S(w=>{let D=w-.1;return D<0?0:D});break}default:break}},[o]);return Be.default.useImperativeHandle(e,()=>({handleKeyDown:A})),Be.default.useEffect(()=>{var d;u.current=(d=o==null?void 0:o.getPlayer())!=null?d:null},[o==null?void 0:o.getPlayer]),{playerSkinRef:p,videoRef:u,qualities:h,memorizedProps:O,handleKeyDown:A,requestFullscreen:f,exitFullscreen:m,changeVolume:g}},Ul=Zu;var Cn=Lr.default.forwardRef(({url:e,sources:t,playerRef:r,player:o,hasAudio:n,fullHDQualityBreak:i,live:s=!1,language:l=Object.keys(It)[0],hasResource:a=!1,buffered:c=null,kernelMsg:u=null,updateState:p,waiting:f=!1,prevented:m=!1,muted:v=!1,...h},T)=>{let{playerSkinRef:g,videoRef:S,qualities:E,memorizedProps:C,handleKeyDown:O,requestFullscreen:A,exitFullscreen:d,changeVolume:M}=Ul({ref:T,playerRef:r,url:e,player:o,fullHDQualityBreak:i,sources:t,prevented:m,muted:v,updateState:p});return Lr.default.createElement(zl,{language:l},Lr.default.createElement(ql,{ref:g,videoRef:S,playerRef:r,qualities:E,hasAudio:n,handleKeyDown:O,requestFullscreen:A,exitFullscreen:d,changeVolume:M,fullHDQualityBreak:i,live:s,hasResource:a,buffered:c,kernelMsg:u,prevented:m,waiting:f,muted:v,...h,...C}))});Cn.displayName="PlayerSkinWrapper";Cn.propTypes={playerRef:B.default.oneOfType([B.default.func,B.default.shape({current:B.default.instanceOf(HTMLDivElement)})]).isRequired,player:B.default.instanceOf(Le),live:B.default.bool,prevented:B.default.bool,waiting:B.default.bool,hasResource:B.default.bool.isRequired,hasAudio:B.default.bool.isRequired,loading:B.default.bool.isRequired,paused:B.default.bool.isRequired,ended:B.default.bool.isRequired,seeking:B.default.bool.isRequired,duration:B.default.number.isRequired,buffered:B.default.number.isRequired||null,currentTime:B.default.number.isRequired,muted:B.default.bool.isRequired,volume:B.default.number.isRequired,playbackRate:B.default.number.isRequired,pictureInPictureEnabled:B.default.bool.isRequired,fullHDQualityBreak:B.default.number,pip:B.default.bool.isRequired,fullscreen:B.default.bool.isRequired,kernelMsg:B.default.oneOfType([B.default.shape({type:B.default.string.isRequired,detail:B.default.string.isRequired}),B.default.oneOf([void 0])]),url:B.default.string,sources:B.default.arrayOf(B.default.shape({src:B.default.string.isRequired,resolution:B.default.number.isRequired}).isRequired).isRequired,loop:B.default.bool.isRequired};var Ql=Lr.default.memo(Cn,(e,t)=>e.playerRef===t.playerRef&&e.player===t.player&&e.live===t.live&&e.hasResource===t.hasResource&&e.hasAudio===t.hasAudio&&e.loading===t.loading&&e.prevented===t.prevented&&e.paused===t.paused&&e.seeking===t.seeking&&e.waiting===t.waiting&&e.duration===t.duration&&e.currentTime===t.currentTime&&e.buffered===t.buffered&&e.muted===t.muted&&e.volume===t.volume&&e.playbackRate===t.playbackRate&&e.loop===t.loop&&e.pictureInPictureEnabled===t.pictureInPictureEnabled&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.pip===t.pip&&e.fullscreen===t.fullscreen&&e.kernelMsg===t.kernelMsg&&e.url===t.url&&e.sources===t.sources&&e.poster===t.poster);var Co={kernelError:null,seeking:!1,seek:0,played:0,loaded:0,duration:0,isFullScreen:!1,isEnded:!1,isPIP:!1,isLoading:!0,volume:.8,playbackRate:1,playbackQuality:null,videoUrl:null,hasAudio:!0,loop:!1,playing:!1,isMuted:!1};var En=y(P());var Wl=En.default.forwardRef(({children:e,...t},r)=>En.default.createElement(Re,{ref:r,...t},e));Wl.displayName="MediaPlayerWrapper";var Yl=Wl;var Ir=y(P());Ae();var Gl=e=>{let t=`rmp_${e}=`,r=document.cookie.split(";");for(let o=0;o<r.length;o++){let n=r[o];for(;n.charAt(0)===" ";)n=n.substring(1,n.length);if(n.indexOf(t)===0)return n.substring(t.length,n.length)}return null},Kl=(e,t,r)=>{let o="";if(r){let n=new Date;n.setTime(n.getTime()+r*24*60*60*1e3),o=`; expires=${n.toUTCString()}`}document.cookie=`rmp_${e}=${t||""}${o}; path=/`};var Xl=async()=>{let e="https://files.testfile.org/PDF/10MB-TESTFILE.ORG.pdf",r=performance.now();try{let o=Gl("internet_speed");if(o)return parseFloat(o);await(await fetch(e,{mode:"no-cors"})).blob();let l=83886080/((performance.now()-r)/1e3*1024*1024);return Kl("internet_speed",l.toString(),7),l}catch(o){return console.error("An error occurred while measuring the network speed: ",o),null}},Zl=(e,t)=>{let r=[{quality:144,minSpeed:.3},{quality:270,minSpeed:.5},{quality:360,minSpeed:.7},{quality:480,minSpeed:1},{quality:720,minSpeed:2.5},{quality:1080,minSpeed:5},{quality:2160,minSpeed:20}],o;for(let n=r.length-1;n>=0;n--){let i=r[n];if(e>=i.minSpeed){o=i.quality;break}}if(o&&t.includes(o))return o;for(let n=r.length-1;n>=0;n--){let i=r[n];if(t.includes(i.quality))return i.quality}};var Ju=({onBuffer:e,onBufferEnd:t,onDisablePIP:r,onDuration:o,onEnablePIP:n,onEnded:i,onError:s,onPause:l,onPlay:a,onPlayBackQualityChange:c,onPlayBackRateChange:u,onProgress:p,onReady:f,onSeek:m,onStart:v,onLoaded:h,onMount:T,updateState:g,playerState:S,extraProps:{url:E,sources:C,fullHDQualityBreak:O,prevented:A}})=>{let[d,M]=Ir.default.useState(null),_=C.map(k=>k.resolution);if(C.length>0&&_.includes(O)===!1)throw new Error(`Invalid values in fullHDQualityBreak. Accepted resolutions are: ${_.join(", ")}`);Ir.default.useEffect(()=>{(async()=>{var k,I;if(C&&C.length>0){let K=Ao(C,"resolution");if(d===null&&K){let we=await Xl(),vt=Object.keys(K).map(Number),pe=Zl(we||0,vt);if(we!==null&&pe)M((I=(k=K[pe==null?void 0:pe.toString()])==null?void 0:k.src)!=null?I:C[0].src),g(fe=>({...fe,playbackQuality:pe}));else{let fe=C[0].src;M(fe),g(de=>({...de,playbackQuality:Number(fe)}))}}}})()},[C,d]);let w=Ir.default.useMemo(()=>{var k,I;if(C&&C.length>0){let K=Ao(C,"resolution");return S.playbackQuality===null||S.playbackQuality===void 0?d!==null?d:C[0].src:(I=(k=K[S.playbackQuality])==null?void 0:k.src)!=null?I:C[0].src}return E},[E,C,S.playbackQuality,d]);return{...Ir.default.useMemo(()=>({onBuffer:e,onBufferEnd:t,onDisablePIP:k=>{r&&r(k),g(I=>({...I,isPIP:!1}))},onDuration:k=>{o&&o(k),g(I=>({...I,duration:k}))},onEnablePIP:k=>{n&&n(k),g(I=>({...I,isPIP:!0}))},onEnded:k=>{i&&i(k),g(I=>({...I,isEnded:!0}))},onError:(k,I,K,we)=>{s(k,I,K,we),["networkError"].includes(I==null?void 0:I.type)===!1&&g(pe=>{var fe;return{...pe,kernelError:I?{type:(I==null?void 0:I.type)||"UnknownError",detail:((fe=I==null?void 0:I.error)==null?void 0:fe.message)||"Something was wrong with the playback. Please try again."}:null,isLoading:!1,playing:!1}})},onPause:k=>{l&&l(k),g(I=>({...I,playing:!1}))},onPlay:k=>{a&&a(k),g(I=>{var K;return{...I,playing:!0,isEnded:!1,hasAudio:A?!0:(K=k==null?void 0:k.hasAudio)!=null?K:!1}})},onPlayBackQualityChange:k=>{c&&c(k),g(I=>({...I,playbackQuality:k}))},onPlayBackRateChange:k=>{u&&u(k),g(I=>({...I,playbackRate:k}))},onProgress:k=>{p&&p(k),S.seeking||g(I=>({...I,played:k.playedSeconds,loaded:k.loaded}))},onReady:k=>{f&&f(k),g(I=>({...I,isLoading:!1}))},onSeek:k=>{m&&m(k),g(I=>({...I,seek:k}))},onStart:()=>{v&&v()},onLoaded:h,onMount:T}),[S.seeking,A]),videoUrl:w!=null?w:d}},Jl=Ju;var ec=b.div`
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  margin: auto;
`;var tc=ue.default.forwardRef((e,t)=>{var p,f;let[r,o]=ue.default.useState({}),[n,i]=ue.default.useState({...Co,isPIP:e.pip,isMuted:e.muted,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,volume:e.muted?0:(p=e.volume)!=null?p:Co.volume});ue.default.useEffect(()=>{i(m=>{var v;return{...m,isPIP:e.pip,playbackRate:e.playbackRate,loop:e.loop,playing:e.playing,volume:e.muted?0:(v=e.volume)!=null?v:Co.volume}})},[e.muted,e.volume,e.playing,e.pip,e.playbackRate,e.loop]);let s=ue.default.useRef(null),l=ue.default.useRef(null),a=ue.default.useMemo(()=>e.prevented||e.playing&&e.muted,[e.muted,e.playing,e.prevented]);ue.default.useEffect(()=>{if(e.player&&n.isLoading===!1){let v=e.player.getPlayer(),h=setTimeout(()=>{o({width:`${v.offsetWidth}px`,height:`${v.offsetHeight}px`})},500);return()=>{clearTimeout(h)}}},[e.player,n.isLoading]);let{videoUrl:c,...u}=Jl({onBuffer:e.onBuffer,onBufferEnd:e.onBufferEnd,onDisablePIP:e.onDisablePIP,onDuration:e.onDuration,onEnablePIP:e.onEnablePIP,onEnded:e.onEnded,onError:e.onError,onPause:e.onPause,onPlay:e.onPlay,onPlayBackQualityChange:e.onPlayBackQualityChange,onPlayBackRateChange:e.onPlayBackRateChange,onProgress:e.onProgress,onReady:e.onReady,onSeek:e.onSeek,onStart:e.onStart,onLoaded:e.onLoaded,onMount:e.onMount,updateState:i,playerState:n,extraProps:{url:e.url,sources:e.sources,fullHDQualityBreak:e.fullHDQualityBreak,prevented:a}});return ue.default.createElement(Yl,{tabIndex:0,role:"application",dir:"ltr",ref:l,onKeyDown:(f=s.current)==null?void 0:f.handleKeyDown,style:r},ue.default.createElement(ec,null,c&&ue.default.createElement(Le,{ref:t,activePlayer:e.activePlayer,loop:n.loop,muted:n.isMuted,pip:n.isPIP,playbackRate:n.playbackRate,playbackQuality:n.playbackQuality,playsinline:e.playsinline,progressInterval:e.progressInterval,stopOnUnmount:e.stopOnUnmount,volume:n.volume,url:c,width:e.width,height:e.height,playing:n.playing,config:{attributes:e.config.attributes,tracks:e.config.tracks,forceVideo:e.config.forceVideo,forceHLS:e.config.forceHLS,dashVersion:e.config.dashVersion,forceDASH:e.config.forceDASH,forceFLV:e.config.forceFLV,flvVersion:e.config.flvVersion,forceLoad:e.config.forceLoad,forceDisableHls:e.config.forceDisableHls,hlsOptions:e.config.hlsOptions,hlsVersion:e.config.hlsVersion,forceSafariHLS:e.config.forceSafariHLS,loopOnEnded:e.config.loopOnEnded},disableDeferredLoading:e.disableDeferredLoading,progressFrequency:e.progressFrequency,...u})),ue.default.createElement(Ql,{ref:s,playerRef:l,url:c,sources:e.sources,hasAudio:n.hasAudio,spriteVTTFile:e.spriteVTTFile,hasResource:typeof c=="string"||e.sources.length>0,kernelMsg:n.kernelError,loading:n.isLoading,prevented:a,muted:n.isMuted,paused:n.playing===!1,live:e.live,buffered:n.loaded,ended:n.isEnded,seeking:n.seeking,waiting:e.waiting,duration:n.duration,currentTime:n.played,volume:n.volume,playbackRate:n.playbackRate,pictureInPictureEnabled:!0,pip:n.isPIP,loop:n.loop,fullscreen:n.isFullScreen,fullHDQualityBreak:e.fullHDQualityBreak,language:e.language,poster:e.poster,updateState:i,player:e.player}))});tc.displayName="MediaPlayerSkin";var rc=ue.default.memo(tc,(e,t)=>e.url===t.url&&e.sources===t.sources&&e.fullHDQualityBreak===t.fullHDQualityBreak&&e.spriteVTTFile===t.spriteVTTFile&&e.prevented===t.prevented&&e.waiting===t.waiting&&e.playing===t.playing&&e.loop===t.loop&&e.volume===t.volume&&e.muted===t.muted&&e.paused===t.paused&&e.live===t.live&&e.pip===t.pip&&e.playbackRate===t.playbackRate&&e.width===t.width&&e.height===t.height&&e.progressInterval===t.progressInterval&&e.playsinline===t.playsinline&&e.pipeline===t.pipeline&&e.stopOnUnmount===t.stopOnUnmount&&e.activePlayer===t.activePlayer&&e.player===t.player&&e.progressFrequency===t.progressFrequency&&e.disableDeferredLoading===t.disableDeferredLoading&&e.language===t.language&&e.poster===t.poster&&e.config===t.config&&e.onReady===t.onReady&&e.onStart===t.onStart&&e.onPlay===t.onPlay&&e.onPause===t.onPause&&e.onBuffer===t.onBuffer&&e.onBufferEnd===t.onBufferEnd&&e.onEnded===t.onEnded&&e.onError===t.onError&&e.onDuration===t.onDuration&&e.onSeek===t.onSeek&&e.onPlayBackRateChange===t.onPlayBackRateChange&&e.onPlayBackQualityChange===t.onPlayBackQualityChange&&e.onProgress===t.onProgress&&e.onEnablePIP===t.onEnablePIP&&e.onDisablePIP===t.onDisablePIP&e.onLoaded===t.onLoaded&&e.onMount===t.onMount);Ae();var ep=typeof window!="undefined"&&window.document&&typeof document!="undefined",tp=typeof global!="undefined"&&global.window&&global.window.document,rp=Object.keys(Fo),op=ep||tp?Kt.default.Suspense:()=>null,nc=e=>{var t;return t=class extends Kt.default.Component{constructor(){super(...arguments);x(this,"player",null);x(this,"state",{});x(this,"references",{wrapper:n=>{this.wrapper=n},player:n=>{this.player=n}});x(this,"getDuration",()=>this.player?this.player.getDuration():null);x(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null);x(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null);x(this,"getInternalPlayer",(n="player")=>this.player?this.player.getInternalPlayer(n):null);x(this,"seekTo",(n,i,s)=>{if(!this.player)return null;this.player.seekTo(n,i,s)});x(this,"handleReady",()=>{this.props.onReady&&this.props.onReady(this)});x(this,"getActivePlayer",Dr((n,i)=>e.canPlay(n,i)?e:null));x(this,"getConfig",Dr((n,i,s)=>{let{config:l}=this.props;return oc.default.all([Br.config,Br.config[s]||{},l,l[s]||{}])}));x(this,"getAttributes",Dr(()=>Nn(this.props,rp)));x(this,"getSourceProps",()=>"sources"in this.props&&this.props.sources!==void 0?{sources:this.props.sources,fullHDQualityBreak:this.props.fullHDQualityBreak}:{sources:[]});x(this,"getUrlProp",()=>"url"in this.props&&this.props.url!==void 0?this.props.url:"");x(this,"renderActivePlayer",(n,i)=>{if(!n&&!i)return null;let s=this.getActivePlayer(n,i);if(!s)return null;let l=this.getConfig(n,i,s.key),a=this.getSourceProps(),c=this.getUrlProp();return Kt.default.createElement(rc,{key:s.key,ref:this.references.player,activePlayer:s.lazyPlayer,player:this.player,loop:this.props.loop,muted:this.props.muted,pip:this.props.pip,playbackRate:this.props.playbackRate,playsinline:this.props.playsinline,progressInterval:this.props.progressInterval,stopOnUnmount:this.props.stopOnUnmount,volume:this.props.volume,url:c,sources:a.sources,width:this.props.width,height:this.props.height,playing:this.props.playing,config:{attributes:l.attributes,tracks:l.tracks,forceVideo:l.forceVideo,forceHLS:l.forceHLS,dashVersion:l.dashVersion,forceDASH:l.forceDASH,forceFLV:l.forceFLV,flvVersion:l.flvVersion,forceLoad:l.forceLoad,forceDisableHls:l.forceDisableHls,hlsOptions:l.hlsOptions,hlsVersion:l.hlsVersion,forceSafariHLS:l.forceSafariHLS,loopOnEnded:l.loopOnEnded},prevented:this.props.prevented,waiting:this.props.waiting,onBuffer:this.props.onBuffer,onBufferEnd:this.props.onBufferEnd,onDisablePIP:this.props.onDisablePIP,onDuration:this.props.onDuration,onEnablePIP:this.props.onEnablePIP,onEnded:this.props.onEnded,onError:this.props.onError,onPause:this.props.onPause,onPlay:this.props.onPlay,onPlayBackQualityChange:this.props.onPlayBackQualityChange,onPlayBackRateChange:this.props.onPlayBackRateChange,fullHDQualityBreak:a.fullHDQualityBreak,language:this.props.language,live:this.props.live,onProgress:this.props.onProgress,onReady:this.handleReady,onSeek:this.props.onSeek,onStart:this.props.onStart,onLoaded:this.props.onLoaded,onMount:this.props.onMount,disableDeferredLoading:this.props.disableDeferredLoading,progressFrequency:this.props.progressFrequency,spriteVTTFile:this.props.spriteVTTFile,poster:this.props.poster})})}shouldComponentUpdate(n,i){return!(0,Tn.default)(this.props,n)||!(0,Tn.default)(this.state,i)}componentDidUpdate(n){}render(){let{wrapper:n}=this.props,i=this.getUrlProp(),s=this.getSourceProps(),{className:l,...a}=this.getAttributes(),c=typeof n=="string"?this.references.wrapper:void 0;return Kt.default.createElement(n,{ref:c,"data-testid":"media-player-skin",className:`reactjs-media-player${l?` ${l}`:""}`,...a},Kt.default.createElement(op,{fallback:this.props.fallback},this.renderActivePlayer(i,s.sources)))}},x(t,"displayName","MediaPlayer"),x(t,"propTypes",Fo),x(t,"defaultProps",Br),x(t,"canPlay",(n,i)=>!!e.canPlay(n,i)),x(t,"canEnablePIP",n=>!!(e.canEnablePIP&&e.canEnablePIP(n))),t};var np=nc(Xn);return hc(ip);})();
ReactJSMediaPlayer = ReactJSMediaPlayer.default;
//# sourceMappingURL=ReactJSMediaPlayer.js.map
