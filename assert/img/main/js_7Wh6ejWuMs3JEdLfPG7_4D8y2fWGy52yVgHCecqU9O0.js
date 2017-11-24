/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a)if(j[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function L(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(k),g.offsetWidth,e=k.value!=l,g.removeChild(k)):e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.5.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),k.appendChild(j);return f=["&#173;","<style>",a,"</style>"].join(""),k.id=h,(l?k:m).innerHTML+=f,m.appendChild(k),l||(m.style.background="",g.appendChild(m)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e});var K=function(c,d){var f=c.join(""),g=d.length;y(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"",i=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch||(j.touch&&j.touch.offsetTop)===9,e.csstransforms3d=(j.csstransforms3d&&j.csstransforms3d.offsetLeft)===9&&j.csstransforms3d.offsetHeight===3,e.generatedcontent=(j.generatedcontent&&j.generatedcontent.offsetHeight)>=1,e.fontface=/src/i.test(h)&&h.indexOf(d.split(" ")[0])===0},g,d)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",n.join("touch-enabled),("),h,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",n.join("transform-3d),("),h,")","{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join(""),['#generatedcontent:after{content:"',l,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]);s.flexbox=function(){return J("flexOrder")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){try{var d=b.createElement("canvas"),e;e=!(!a.WebGLRenderingContext||!d.getContext("experimental-webgl")&&!d.getContext("webgl")),d=c}catch(f){e=!1}return e},s.touch=function(){return e.touch},s.geolocation=function(){return!!navigator.geolocation},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){for(var b=-1,c=p.length;++b<c;)if(a[p[b]+"WebSocket"])return!0;return"WebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&(a=e.csstransforms3d),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){return e.fontface},s.generatedcontent=function(){return e.generatedcontent},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var M in s)C(s,M)&&(x=M.toLowerCase(),e[x]=s[M](),v.push((e[x]?"":"no-")+x));return e.input||L(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,g.className+=" "+(b?"":"no-")+a,e[a]=b}return e},D(""),i=k=null,function(a,b){function g(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function h(){var a=k.elements;return typeof a=="string"?a.split(" "):a}function i(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){var e=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&e.canHaveChildren&&!d.test(a)?f.appendChild(e):e},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/\w+/g,function(a){return b[a]=c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(k,f)}function j(a){var b;return a.documentShived?a:(k.shivCSS&&!e&&(b=!!g(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),f||(b=!i(a)),b&&(a.documentShived=b),a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea)$/i,e,f;(function(){var a=b.createElement("a");a.innerHTML="<xyz></xyz>",e="hidden"in a,f=a.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var k={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:j};a.html5=k,j(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};;
/*
 * TotalStorage
 *
 * Copyright (c) 2012 Jared Novack & Upstatement (upstatement.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Total Storage is the conceptual the love child of jStorage by Andris Reinman, 
 * and Cookie by Klaus Hartl -- though this is not connected to either project.
 *
 * @name $.totalStorage
 * @cat Plugins/Cookie
 * @author Jared Novack/jared@upstatement.com
 * @version 1.1.2
 * @url http://upstatement.com/blog/2012/01/jquery-local-storage-done-right-and-easy/
 */
;(function($){var ls=window.localStorage;var supported;if(typeof ls=='undefined'||typeof window.JSON=='undefined'){supported=false;}else{supported=true;}
$.totalStorage=function(key,value,options){return $.totalStorage.impl.init(key,value);}
$.totalStorage.setItem=function(key,value){return $.totalStorage.impl.setItem(key,value);}
$.totalStorage.getItem=function(key){return $.totalStorage.impl.getItem(key);}
$.totalStorage.getAll=function(){return $.totalStorage.impl.getAll();}
$.totalStorage.deleteItem=function(key){return $.totalStorage.impl.deleteItem(key);}
$.totalStorage.impl={init:function(key,value){if(typeof value!='undefined'){return this.setItem(key,value);}else{return this.getItem(key);}},setItem:function(key,value){if(!supported){try{$.cookie(key,value);return value;}catch(e){console.log('Local Storage not supported by this browser. Install the cookie plugin on your site to take advantage of the same functionality. You can get it at https://github.com/carhartl/jquery-cookie');}}
var saver=JSON.stringify(value);ls.setItem(key,saver);return this.parseResult(saver);},getItem:function(key){if(!supported){try{return this.parseResult($.cookie(key));}catch(e){return null;}}
return this.parseResult(ls.getItem(key));},deleteItem:function(key){if(!supported){try{$.cookie(key,null);return true;}catch(e){return false;}}
ls.removeItem(key);return true;},getAll:function(){var items=new Array();if(!supported){try{var pairs=document.cookie.split(";");for(var i=0;i<pairs.length;i++){var pair=pairs[i].split('=');var key=pair[0];items.push({key:key,value:this.parseResult($.cookie(key))});}}catch(e){return null;}}else{for(var i in ls){if(i.length){items.push({key:i,value:this.parseResult(ls.getItem(i))});}}}
return items;},parseResult:function(res){var ret;try{ret=JSON.parse(res);if(ret=='true'){ret=true;}
if(ret=='false'){ret=false;}
if(parseFloat(ret)==ret&&typeof ret!="object"){ret=parseFloat(ret);}}catch(e){}
return ret;}}})(jQuery);;
/*
 * jQuery FlexSlider v2.2.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */(function(e){e.flexslider=function(t,n){var r=e(t);r.vars=e.extend({},e.flexslider.defaults,n);var i=r.vars.namespace,s=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,o=("ontouchstart"in window||s||window.DocumentTouch&&document instanceof DocumentTouch)&&r.vars.touch,u="click touchend MSPointerUp",a="",f,l=r.vars.direction==="vertical",c=r.vars.reverse,h=r.vars.itemWidth>0,p=r.vars.animation==="fade",d=r.vars.asNavFor!=="",v={},m=!0;e.data(t,"flexslider",r);v={init:function(){r.animating=!1;r.currentSlide=parseInt(r.vars.startAt?r.vars.startAt:0);isNaN(r.currentSlide)&&(r.currentSlide=0);r.animatingTo=r.currentSlide;r.atEnd=r.currentSlide===0||r.currentSlide===r.last;r.containerSelector=r.vars.selector.substr(0,r.vars.selector.search(" "));r.slides=e(r.vars.selector,r);r.container=e(r.containerSelector,r);r.count=r.slides.length;r.syncExists=e(r.vars.sync).length>0;r.vars.animation==="slide"&&(r.vars.animation="swing");r.prop=l?"top":"marginLeft";r.args={};r.manualPause=!1;r.stopped=!1;r.started=!1;r.startTimeout=null;r.transitions=!r.vars.video&&!p&&r.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(e.style[t[n]]!==undefined){r.pfx=t[n].replace("Perspective","").toLowerCase();r.prop="-"+r.pfx+"-transform";return!0}return!1}();r.vars.controlsContainer!==""&&(r.controlsContainer=e(r.vars.controlsContainer).length>0&&e(r.vars.controlsContainer));r.vars.manualControls!==""&&(r.manualControls=e(r.vars.manualControls).length>0&&e(r.vars.manualControls));if(r.vars.randomize){r.slides.sort(function(){return Math.round(Math.random())-.5});r.container.empty().append(r.slides)}r.doMath();r.setup("init");r.vars.controlNav&&v.controlNav.setup();r.vars.directionNav&&v.directionNav.setup();r.vars.keyboard&&(e(r.containerSelector).length===1||r.vars.multipleKeyboard)&&e(document).bind("keyup",function(e){var t=e.keyCode;if(!r.animating&&(t===39||t===37)){var n=t===39?r.getTarget("next"):t===37?r.getTarget("prev"):!1;r.flexAnimate(n,r.vars.pauseOnAction)}});r.vars.mousewheel&&r.bind("mousewheel",function(e,t,n,i){e.preventDefault();var s=t<0?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(s,r.vars.pauseOnAction)});r.vars.pausePlay&&v.pausePlay.setup();r.vars.slideshow&&r.vars.pauseInvisible&&v.pauseInvisible.init();if(r.vars.slideshow){r.vars.pauseOnHover&&r.hover(function(){!r.manualPlay&&!r.manualPause&&r.pause()},function(){!r.manualPause&&!r.manualPlay&&!r.stopped&&r.play()});if(!r.vars.pauseInvisible||!v.pauseInvisible.isHidden())r.vars.initDelay>0?r.startTimeout=setTimeout(r.play,r.vars.initDelay):r.play()}d&&v.asNav.setup();o&&r.vars.touch&&v.touch();(!p||p&&r.vars.smoothHeight)&&e(window).bind("resize orientationchange focus",v.resize);r.find("img").attr("draggable","false");setTimeout(function(){r.vars.start(r)},200)},asNav:{setup:function(){r.asNav=!0;r.animatingTo=Math.floor(r.currentSlide/r.move);r.currentItem=r.currentSlide;r.slides.removeClass(i+"active-slide").eq(r.currentItem).addClass(i+"active-slide");if(!s)r.slides.click(function(t){t.preventDefault();var n=e(this),s=n.index(),o=n.offset().left-e(r).scrollLeft();if(o<=0&&n.hasClass(i+"active-slide"))r.flexAnimate(r.getTarget("prev"),!0);else if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass(i+"active-slide")){r.direction=r.currentItem<s?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction,!1,!0,!0)}});else{t._slider=r;r.slides.each(function(){var t=this;t._gesture=new MSGesture;t._gesture.target=t;t.addEventListener("MSPointerDown",function(e){e.preventDefault();e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1);t.addEventListener("MSGestureTap",function(t){t.preventDefault();var n=e(this),i=n.index();if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass("active")){r.direction=r.currentItem<i?"next":"prev";r.flexAnimate(i,r.vars.pauseOnAction,!1,!0,!0)}})})}}},controlNav:{setup:function(){r.manualControls?v.controlNav.setupManual():v.controlNav.setupPaging()},setupPaging:function(){var t=r.vars.controlNav==="thumbnails"?"control-thumbs":"control-paging",n=1,s,o;r.controlNavScaffold=e('<ol class="'+i+"control-nav "+i+t+'"></ol>');if(r.pagingCount>1)for(var f=0;f<r.pagingCount;f++){o=r.slides.eq(f);s=r.vars.controlNav==="thumbnails"?'<img src="'+o.attr("data-thumb")+'"/>':"<a>"+n+"</a>";if("thumbnails"===r.vars.controlNav&&!0===r.vars.thumbCaptions){var l=o.attr("data-thumbcaption");""!=l&&undefined!=l&&(s+='<span class="'+i+'caption">'+l+"</span>")}r.controlNavScaffold.append("<li>"+s+"</li>");n++}r.controlsContainer?e(r.controlsContainer).append(r.controlNavScaffold):r.append(r.controlNavScaffold);v.controlNav.set();v.controlNav.active();r.controlNavScaffold.delegate("a, img",u,function(t){t.preventDefault();if(a===""||a===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){r.direction=s>r.currentSlide?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction)}}a===""&&(a=t.type);v.setToClearWatchedEvent()})},setupManual:function(){r.controlNav=r.manualControls;v.controlNav.active();r.controlNav.bind(u,function(t){t.preventDefault();if(a===""||a===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){s>r.currentSlide?r.direction="next":r.direction="prev";r.flexAnimate(s,r.vars.pauseOnAction)}}a===""&&(a=t.type);v.setToClearWatchedEvent()})},set:function(){var t=r.vars.controlNav==="thumbnails"?"img":"a";r.controlNav=e("."+i+"control-nav li "+t,r.controlsContainer?r.controlsContainer:r)},active:function(){r.controlNav.removeClass(i+"active").eq(r.animatingTo).addClass(i+"active")},update:function(t,n){r.pagingCount>1&&t==="add"?r.controlNavScaffold.append(e("<li><a>"+r.count+"</a></li>")):r.pagingCount===1?r.controlNavScaffold.find("li").remove():r.controlNav.eq(n).closest("li").remove();v.controlNav.set();r.pagingCount>1&&r.pagingCount!==r.controlNav.length?r.update(n,t):v.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+i+'direction-nav"><li><a class="'+i+'prev" href="#">'+r.vars.prevText+'</a></li><li><a class="'+i+'next" href="#">'+r.vars.nextText+"</a></li></ul>");if(r.controlsContainer){e(r.controlsContainer).append(t);r.directionNav=e("."+i+"direction-nav li a",r.controlsContainer)}else{r.append(t);r.directionNav=e("."+i+"direction-nav li a",r)}v.directionNav.update();r.directionNav.bind(u,function(t){t.preventDefault();var n;if(a===""||a===t.type){n=e(this).hasClass(i+"next")?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(n,r.vars.pauseOnAction)}a===""&&(a=t.type);v.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";r.pagingCount===1?r.directionNav.addClass(e).attr("tabindex","-1"):r.vars.animationLoop?r.directionNav.removeClass(e).removeAttr("tabindex"):r.animatingTo===0?r.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1"):r.animatingTo===r.last?r.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1"):r.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var t=e('<div class="'+i+'pauseplay"><a></a></div>');if(r.controlsContainer){r.controlsContainer.append(t);r.pausePlay=e("."+i+"pauseplay a",r.controlsContainer)}else{r.append(t);r.pausePlay=e("."+i+"pauseplay a",r)}v.pausePlay.update(r.vars.slideshow?i+"pause":i+"play");r.pausePlay.bind(u,function(t){t.preventDefault();if(a===""||a===t.type)if(e(this).hasClass(i+"pause")){r.manualPause=!0;r.manualPlay=!1;r.pause()}else{r.manualPause=!1;r.manualPlay=!0;r.play()}a===""&&(a=t.type);v.setToClearWatchedEvent()})},update:function(e){e==="play"?r.pausePlay.removeClass(i+"pause").addClass(i+"play").html(r.vars.playText):r.pausePlay.removeClass(i+"play").addClass(i+"pause").html(r.vars.pauseText)}},touch:function(){var e,n,i,o,u,a,f=!1,d=0,v=0,m=0;if(!s){t.addEventListener("touchstart",g,!1);function g(s){if(r.animating)s.preventDefault();else if(window.navigator.msPointerEnabled||s.touches.length===1){r.pause();o=l?r.h:r.w;a=Number(new Date);d=s.touches[0].pageX;v=s.touches[0].pageY;i=h&&c&&r.animatingTo===r.last?0:h&&c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:h&&r.currentSlide===r.last?r.limit:h?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:c?(r.last-r.currentSlide+r.cloneOffset)*o:(r.currentSlide+r.cloneOffset)*o;e=l?v:d;n=l?d:v;t.addEventListener("touchmove",y,!1);t.addEventListener("touchend",b,!1)}}function y(t){d=t.touches[0].pageX;v=t.touches[0].pageY;u=l?e-v:e-d;f=l?Math.abs(u)<Math.abs(d-n):Math.abs(u)<Math.abs(v-n);var s=500;if(!f||Number(new Date)-a>s){t.preventDefault();if(!p&&r.transitions){r.vars.animationLoop||(u/=r.currentSlide===0&&u<0||r.currentSlide===r.last&&u>0?Math.abs(u)/o+2:1);r.setProps(i+u,"setTouch")}}}function b(s){t.removeEventListener("touchmove",y,!1);if(r.animatingTo===r.currentSlide&&!f&&u!==null){var l=c?-u:u,h=l>0?r.getTarget("next"):r.getTarget("prev");r.canAdvance(h)&&(Number(new Date)-a<550&&Math.abs(l)>50||Math.abs(l)>o/2)?r.flexAnimate(h,r.vars.pauseOnAction):p||r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,!0)}t.removeEventListener("touchend",b,!1);e=null;n=null;u=null;i=null}}else{t.style.msTouchAction="none";t._gesture=new MSGesture;t._gesture.target=t;t.addEventListener("MSPointerDown",w,!1);t._slider=r;t.addEventListener("MSGestureChange",E,!1);t.addEventListener("MSGestureEnd",S,!1);function w(e){e.stopPropagation();if(r.animating)e.preventDefault();else{r.pause();t._gesture.addPointer(e.pointerId);m=0;o=l?r.h:r.w;a=Number(new Date);i=h&&c&&r.animatingTo===r.last?0:h&&c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:h&&r.currentSlide===r.last?r.limit:h?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:c?(r.last-r.currentSlide+r.cloneOffset)*o:(r.currentSlide+r.cloneOffset)*o}}function E(e){e.stopPropagation();var n=e.target._slider;if(!n)return;var r=-e.translationX,s=-e.translationY;m+=l?s:r;u=m;f=l?Math.abs(m)<Math.abs(-r):Math.abs(m)<Math.abs(-s);if(e.detail===e.MSGESTURE_FLAG_INERTIA){setImmediate(function(){t._gesture.stop()});return}if(!f||Number(new Date)-a>500){e.preventDefault();if(!p&&n.transitions){n.vars.animationLoop||(u=m/(n.currentSlide===0&&m<0||n.currentSlide===n.last&&m>0?Math.abs(m)/o+2:1));n.setProps(i+u,"setTouch")}}}function S(t){t.stopPropagation();var r=t.target._slider;if(!r)return;if(r.animatingTo===r.currentSlide&&!f&&u!==null){var s=c?-u:u,l=s>0?r.getTarget("next"):r.getTarget("prev");r.canAdvance(l)&&(Number(new Date)-a<550&&Math.abs(s)>50||Math.abs(s)>o/2)?r.flexAnimate(l,r.vars.pauseOnAction):p||r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,!0)}e=null;n=null;u=null;i=null;m=0}}},resize:function(){if(!r.animating&&r.is(":visible")){h||r.doMath();if(p)v.smoothHeight();else if(h){r.slides.width(r.computedW);r.update(r.pagingCount);r.setProps()}else if(l){r.viewport.height(r.h);r.setProps(r.h,"setTotal")}else{r.vars.smoothHeight&&v.smoothHeight();r.newSlides.width(r.computedW);r.setProps(r.computedW,"setTotal")}}},smoothHeight:function(e){if(!l||p){var t=p?r:r.viewport;e?t.animate({height:r.slides.eq(r.animatingTo).height()},e):t.height(r.slides.eq(r.animatingTo).height())}},sync:function(t){var n=e(r.vars.sync).data("flexslider"),i=r.animatingTo;switch(t){case"animate":n.flexAnimate(i,r.vars.pauseOnAction,!1,!0);break;case"play":!n.playing&&!n.asNav&&n.play();break;case"pause":n.pause()}},pauseInvisible:{visProp:null,init:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)e[t]+"Hidden"in document&&(v.pauseInvisible.visProp=e[t]+"Hidden");if(v.pauseInvisible.visProp){var n=v.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(n,function(){v.pauseInvisible.isHidden()?r.startTimeout?clearTimeout(r.startTimeout):r.pause():r.started?r.play():r.vars.initDelay>0?setTimeout(r.play,r.vars.initDelay):r.play()})}},isHidden:function(){return document[v.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(f);f=setTimeout(function(){a=""},3e3)}};r.flexAnimate=function(t,n,s,u,a){!r.vars.animationLoop&&t!==r.currentSlide&&(r.direction=t>r.currentSlide?"next":"prev");d&&r.pagingCount===1&&(r.direction=r.currentItem<t?"next":"prev");if(!r.animating&&(r.canAdvance(t,a)||s)&&r.is(":visible")){if(d&&u){var f=e(r.vars.asNavFor).data("flexslider");r.atEnd=t===0||t===r.count-1;f.flexAnimate(t,!0,!1,!0,a);r.direction=r.currentItem<t?"next":"prev";f.direction=r.direction;if(Math.ceil((t+1)/r.visible)-1===r.currentSlide||t===0){r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");return!1}r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");t=Math.floor(t/r.visible)}r.animating=!0;r.animatingTo=t;n&&r.pause();r.vars.before(r);r.syncExists&&!a&&v.sync("animate");r.vars.controlNav&&v.controlNav.active();h||r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");r.atEnd=t===0||t===r.last;r.vars.directionNav&&v.directionNav.update();if(t===r.last){r.vars.end(r);r.vars.animationLoop||r.pause()}if(!p){var m=l?r.slides.filter(":first").height():r.computedW,g,y,b;if(h){g=r.vars.itemMargin;b=(r.itemW+g)*r.move*r.animatingTo;y=b>r.limit&&r.visible!==1?r.limit:b}else r.currentSlide===0&&t===r.count-1&&r.vars.animationLoop&&r.direction!=="next"?y=c?(r.count+r.cloneOffset)*m:0:r.currentSlide===r.last&&t===0&&r.vars.animationLoop&&r.direction!=="prev"?y=c?0:(r.count+1)*m:y=c?(r.count-1-t+r.cloneOffset)*m:(t+r.cloneOffset)*m;r.setProps(y,"",r.vars.animationSpeed);if(r.transitions){if(!r.vars.animationLoop||!r.atEnd){r.animating=!1;r.currentSlide=r.animatingTo}r.container.unbind("webkitTransitionEnd transitionend");r.container.bind("webkitTransitionEnd transitionend",function(){r.wrapup(m)})}else r.container.animate(r.args,r.vars.animationSpeed,r.vars.easing,function(){r.wrapup(m)})}else if(!o){r.slides.eq(r.currentSlide).css({zIndex:1}).animate({opacity:0},r.vars.animationSpeed,r.vars.easing);r.slides.eq(t).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing,r.wrapup)}else{r.slides.eq(r.currentSlide).css({opacity:0,zIndex:1});r.slides.eq(t).css({opacity:1,zIndex:2});r.wrapup(m)}r.vars.smoothHeight&&v.smoothHeight(r.vars.animationSpeed)}};r.wrapup=function(e){!p&&!h&&(r.currentSlide===0&&r.animatingTo===r.last&&r.vars.animationLoop?r.setProps(e,"jumpEnd"):r.currentSlide===r.last&&r.animatingTo===0&&r.vars.animationLoop&&r.setProps(e,"jumpStart"));r.animating=!1;r.currentSlide=r.animatingTo;r.vars.after(r)};r.animateSlides=function(){!r.animating&&m&&r.flexAnimate(r.getTarget("next"))};r.pause=function(){clearInterval(r.animatedSlides);r.animatedSlides=null;r.playing=!1;r.vars.pausePlay&&v.pausePlay.update("play");r.syncExists&&v.sync("pause")};r.play=function(){r.playing&&clearInterval(r.animatedSlides);r.animatedSlides=r.animatedSlides||setInterval(r.animateSlides,r.vars.slideshowSpeed);r.started=r.playing=!0;r.vars.pausePlay&&v.pausePlay.update("pause");r.syncExists&&v.sync("play")};r.stop=function(){r.pause();r.stopped=!0};r.canAdvance=function(e,t){var n=d?r.pagingCount-1:r.last;return t?!0:d&&r.currentItem===r.count-1&&e===0&&r.direction==="prev"?!0:d&&r.currentItem===0&&e===r.pagingCount-1&&r.direction!=="next"?!1:e===r.currentSlide&&!d?!1:r.vars.animationLoop?!0:r.atEnd&&r.currentSlide===0&&e===n&&r.direction!=="next"?!1:r.atEnd&&r.currentSlide===n&&e===0&&r.direction==="next"?!1:!0};r.getTarget=function(e){r.direction=e;return e==="next"?r.currentSlide===r.last?0:r.currentSlide+1:r.currentSlide===0?r.last:r.currentSlide-1};r.setProps=function(e,t,n){var i=function(){var n=e?e:(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo,i=function(){if(h)return t==="setTouch"?e:c&&r.animatingTo===r.last?0:c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:r.animatingTo===r.last?r.limit:n;switch(t){case"setTotal":return c?(r.count-1-r.currentSlide+r.cloneOffset)*e:(r.currentSlide+r.cloneOffset)*e;case"setTouch":return c?e:e;case"jumpEnd":return c?e:r.count*e;case"jumpStart":return c?r.count*e:e;default:return e}}();return i*-1+"px"}();if(r.transitions){i=l?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)";n=n!==undefined?n/1e3+"s":"0s";r.container.css("-"+r.pfx+"-transition-duration",n)}r.args[r.prop]=i;(r.transitions||n===undefined)&&r.container.css(r.args)};r.setup=function(t){if(!p){var n,s;if(t==="init"){r.viewport=e('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(r).append(r.container);r.cloneCount=0;r.cloneOffset=0;if(c){s=e.makeArray(r.slides).reverse();r.slides=e(s);r.container.empty().append(r.slides)}}if(r.vars.animationLoop&&!h){r.cloneCount=2;r.cloneOffset=1;t!=="init"&&r.container.find(".clone").remove();r.container.append(r.slides.first().clone().addClass("clone").attr("aria-hidden","true")).prepend(r.slides.last().clone().addClass("clone").attr("aria-hidden","true"))}r.newSlides=e(r.vars.selector,r);n=c?r.count-1-r.currentSlide+r.cloneOffset:r.currentSlide+r.cloneOffset;if(l&&!h){r.container.height((r.count+r.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){r.newSlides.css({display:"block"});r.doMath();r.viewport.height(r.h);r.setProps(n*r.h,"init")},t==="init"?100:0)}else{r.container.width((r.count+r.cloneCount)*200+"%");r.setProps(n*r.computedW,"init");setTimeout(function(){r.doMath();r.newSlides.css({width:r.computedW,"float":"left",display:"block"});r.vars.smoothHeight&&v.smoothHeight()},t==="init"?100:0)}}else{r.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"});t==="init"&&(o?r.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+r.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(r.currentSlide).css({opacity:1,zIndex:2}):r.slides.css({opacity:0,display:"block",zIndex:1}).eq(r.currentSlide).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing));r.vars.smoothHeight&&v.smoothHeight()}h||r.slides.removeClass(i+"active-slide").eq(r.currentSlide).addClass(i+"active-slide")};r.doMath=function(){var e=r.slides.first(),t=r.vars.itemMargin,n=r.vars.minItems,i=r.vars.maxItems;r.w=r.viewport===undefined?r.width():r.viewport.width();r.h=e.height();r.boxPadding=e.outerWidth()-e.width();if(h){r.itemT=r.vars.itemWidth+t;r.minW=n?n*r.itemT:r.w;r.maxW=i?i*r.itemT-t:r.w;r.itemW=r.minW>r.w?(r.w-t*(n-1))/n:r.maxW<r.w?(r.w-t*(i-1))/i:r.vars.itemWidth>r.w?r.w:r.vars.itemWidth;r.visible=Math.floor(r.w/r.itemW);r.move=r.vars.move>0&&r.vars.move<r.visible?r.vars.move:r.visible;r.pagingCount=Math.ceil((r.count-r.visible)/r.move+1);r.last=r.pagingCount-1;r.limit=r.pagingCount===1?0:r.vars.itemWidth>r.w?r.itemW*(r.count-1)+t*(r.count-1):(r.itemW+t)*r.count-r.w-t}else{r.itemW=r.w;r.pagingCount=r.count;r.last=r.count-1}r.computedW=r.itemW-r.boxPadding};r.update=function(e,t){r.doMath();if(!h){e<r.currentSlide?r.currentSlide+=1:e<=r.currentSlide&&e!==0&&(r.currentSlide-=1);r.animatingTo=r.currentSlide}if(r.vars.controlNav&&!r.manualControls)if(t==="add"&&!h||r.pagingCount>r.controlNav.length)v.controlNav.update("add");else if(t==="remove"&&!h||r.pagingCount<r.controlNav.length){if(h&&r.currentSlide>r.last){r.currentSlide-=1;r.animatingTo-=1}v.controlNav.update("remove",r.last)}r.vars.directionNav&&v.directionNav.update()};r.addSlide=function(t,n){var i=e(t);r.count+=1;r.last=r.count-1;l&&c?n!==undefined?r.slides.eq(r.count-n).after(i):r.container.prepend(i):n!==undefined?r.slides.eq(n).before(i):r.container.append(i);r.update(n,"add");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.added(r)};r.removeSlide=function(t){var n=isNaN(t)?r.slides.index(e(t)):t;r.count-=1;r.last=r.count-1;isNaN(t)?e(t,r.slides).remove():l&&c?r.slides.eq(r.last).remove():r.slides.eq(t).remove();r.doMath();r.update(n,"remove");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.removed(r)};v.init()};e(window).blur(function(e){focused=!1}).focus(function(e){focused=!0});e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};e.fn.flexslider=function(t){t===undefined&&(t={});if(typeof t=="object")return this.each(function(){var n=e(this),r=t.selector?t.selector:".slides > li",i=n.find(r);if(i.length===1&&t.allowOneSlide===!0||i.length===0){i.fadeIn(400);t.start&&t.start(n)}else n.data("flexslider")===undefined&&new e.flexslider(this,t)});var n=e(this).data("flexslider");switch(t){case"play":n.play();break;case"pause":n.pause();break;case"stop":n.stop();break;case"next":n.flexAnimate(n.getTarget("next"),!0);break;case"prev":case"previous":n.flexAnimate(n.getTarget("prev"),!0);break;default:typeof t=="number"&&n.flexAnimate(t,!0)}}})(jQuery);;
(function(a){function b(b,c){return parseInt(a.css(b[0],c))||0}function c(a){if(a[0])return a[0].offsetWidth+b(a,"marginLeft")+b(a,"marginRight");else return;null}function d(a){if(a[0])return a[0].offsetHeight+b(a,"marginTop")+b(a,"marginBottom");else return null}a.fn.jCarouselLite=function(b){b=a.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:200,easing:null,vertical:false,circular:true,visible:1,start:0,scroll:1,beforeStart:null,afterEnd:null,onEndFirst:false,pauseOnHover:false,showPager:false,pager:"pager"},b||{});return this.each(function(){function D(a){if(b.showPager){w.children("li"+z).removeClass("selected");if(b.circular){a-=1;s-2==a?z=".0":z="."+a.toString()}else if(b.onEndFirst)a==0?z=".0":z="."+a.toString();else return;w.children("li"+z).addClass("selected")}}function E(){return n.slice(t).slice(0,m)}function F(c){if(!e&&!u){if(b.beforeStart)b.beforeStart.call(this,E());if(b.circular){if(c<=b.start-m-1){j.css(f,-((s-m*2)*p)+"px");t=c==b.start-m-1?s-m*2-1:s-m*2-b.scroll;D(t)}else if(c>=s-m+1){j.css(f,-(m*p)+"px");t=c==s-m+1?m+1:m+b.scroll;D(t)}else{t=c;D(t)}}else{if(b.onEndFirst&&c>s-m){t=0;D(t)}else{if(c<0||c>s-m)return;t=c;D(t)}}e=true;j.animate(f=="left"?{left:-(t*p)}:{top:-(t*p)},b.speed,b.easing,function(){if(b.afterEnd)b.afterEnd.call(this,E());e=false});if(!b.circular){a(b.btnPrev+","+b.btnNext).removeClass("disabled");a(t-b.scroll<0&&b.btnPrev||t+b.scroll>s-m&&b.btnNext||[]).addClass("disabled")}}return false}var e,f,g,h,j,k,l,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C;A=b.start;B=A;if(b.onEndFirst&&b.circular)console.log("Please diable either circular or onEndFirst. Both cannot be enabled.");e=false,f=b.vertical?"top":"left",g=b.vertical?"height":"width";h=a(this),j=a("ul",h),k=a("li",j),l=k.size(),m=b.visible;if(b.circular){j.prepend(k.slice(l-m-1+1).clone()).append(k.slice(0,m).clone());b.start+=m}n=a("li",j),s=n.size(),t=b.start;h.css("visibility","visible");n.css({overflow:"hidden","float":b.vertical?"none":"left"});j.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});h.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});p=b.vertical?d(n):c(n);q=p*s;r=p*m;n.css({width:n.width(),height:n.height()});j.css(g,q+"px").css(f,-(t*p));h.css(g,r+"px");u=false;x=null;z="."+(A+="");y=l;if(b.pauseOnHover){h.hover(function(){u=true},function(){u=false})}if(b.showPager){w=a("<ul></ul>");x=new Array;for(i=y-1;i>=0;i--){C=a("<li></li>");x[i]="."+(i+="");C.addClass(i+="");if(i==A)C.addClass("selected");C.appendTo(w)}v=a("<div></div>");v.addClass(b.pager);v.css({"z-index":"3"});w.appendTo(v);v.appendTo(h);v.hover(function(){u=false},function(){u=false})}if(b.btnPrev)a(b.btnPrev).click(function(){return F(t-b.scroll)});if(b.btnNext)a(b.btnNext).click(function(){return F(t+b.scroll)});if(b.btnGo)a.each(b.btnGo,function(c,d){a(d).click(function(){return F(b.circular?b.visible+c:c)})});if(b.showPager&&x)a.each(x,function(c,d){a(d).click(function(){return F(b.circular?b.visible+c:c)})});if(b.mouseWheel&&h.mousewheel)h.mousewheel(function(a,c){return c>0?F(t-b.scroll):F(t+b.scroll)});if(b.auto)setInterval(function(){F(t+b.scroll)},b.auto+b.speed);})};})(jQuery);
/* jQuery Carousel 0.9.8
Copyright 2010 Thomas Lanciaux and Pierre Bertet.
This software is licensed under the CC-GNU LGPL <http://creativecommons.org/licenses/LGPL/2.1/>
*/
(function(g){g.fn.carousel=function(q){var q=g.extend({direction:"horizontal",loop:false,dispItems:1,pagination:false,paginationPosition:"inside",nextBtn:'<input type="button" value="Next" />',prevBtn:'<input type="button" value="Previous" />',btnsPosition:"inside",nextBtnInsert:"insertAfter",prevBtnInsert:"insertBefore",nextBtnInsertFn:false,prevBtnInsertFn:false,autoSlide:false,autoSlideInterval:3000,delayAutoSlide:false,combinedClasses:false,effect:"slide",slideEasing:"swing",animSpeed:300,equalWidths:"true",verticalMargin:0,callback:function(){},useAddress:false,adressIdentifier:"carousel",tabLabel:function(r){return r},showEmptyItems:true,ajaxMode:false,ajaxUrl:"",stopSlideBtn:false,stopSlideTextPause:"Pause",stopSlideTextPlay:"Play"},q);if(q.btnsPosition=="outside"){q.prevBtnInsert="insertBefore";q.nextBtnInsert="insertAfter"}q.delayAutoSlide=0+q.delayAutoSlide;return this.each(function(){var r={$elts:{},params:q,launchOnLoad:[]};r.$elts.carousel=g(this).addClass("js");r.$elts.content=g(this).children().css({position:"absolute",top:0});r.$elts.wrap=r.$elts.content.wrap('<div class="carousel-wrap"></div>').parent().css({overflow:"hidden",position:"relative"});r.steps={first:0,count:r.$elts.content.children().length};r.$elts.loader=g('<div class="loader"></div>').css({position:"absolute"});r.steps.last=r.steps.count-1;if(r.params.pagination){o(r)}if(g.isFunction(r.params.prevBtnInsertFn)){r.$elts.prevBtn=r.params.prevBtnInsertFn(r.$elts)}else{if(q.btnsPosition=="outside"){r.$elts.prevBtn=g(q.prevBtn)[q.prevBtnInsert](r.$elts.carousel)}else{r.$elts.prevBtn=g(q.prevBtn)[q.prevBtnInsert](r.$elts.wrap)}}if(g.isFunction(r.params.nextBtnInsertFn)){r.$elts.nextBtn=r.params.nextBtnInsertFn(r.$elts)}else{if(q.btnsPosition=="outside"){r.$elts.nextBtn=g(q.nextBtn)[q.nextBtnInsert](r.$elts.carousel)}else{r.$elts.nextBtn=g(q.nextBtn)[q.nextBtnInsert](r.$elts.wrap)}}r.$elts.nextBtn.addClass("carousel-control next carousel-next");r.$elts.prevBtn.addClass("carousel-control previous carousel-previous");r.lastItemsToLoad;d(r);r.$elts.carousel.attr("tabindex",0).add(r.$elts.carousel.children()).bind({focus:function(s){g(document).bind("keypress",function(t){switch(t.keyCode){case 39:r.$elts.nextBtn.click();break;case 37:r.$elts.prevBtn.click();break}switch(t.charCode){case 110:r.$elts.nextBtn.click();break;case 112:r.$elts.prevBtn.click();break}})},blur:function(){g(document).unbind("keypress")}});n(r);g(function(){c(r);g.each(r.launchOnLoad,function(s,t){t()});if(r.params.autoSlide){f(r)}if(q.stopSlideBtn==true){r.$elts.stopSlideBtn=g('<button type="button" class="slide-control play">'+q.stopSlideTextPause+"</button>");a(r)}})})};function c(s){var t=s.$elts.content.children();var r=0;t.each(function(){$item=g(this);$itemHeight=$item.outerHeight();if($itemHeight>r){r=$itemHeight}});if(s.params.verticalMargin>0){r=r+s.params.verticalMargin}t.height(r);var q=s.$elts.content.children(":first");s.itemWidth=q.outerWidth();if(s.params.direction=="vertical"){s.contentWidth=s.itemWidth}else{if(s.params.equalWidths){s.contentWidth=s.itemWidth*s.steps.count}else{s.contentWidth=(function(){var u=0;s.$elts.content.children().each(function(){u+=g(this).outerWidth()});return u})()}}s.$elts.content.width(s.contentWidth);s.itemHeight=r;if(s.params.direction=="vertical"){s.$elts.content.css({height:s.itemHeight*s.steps.count+"px"});s.$elts.content.parent().css({height:s.itemHeight*s.params.dispItems+"px"})}else{s.$elts.content.parent().css({height:s.itemHeight+"px"})}i(s)}function d(q){q.$elts.nextBtn.add(q.$elts.prevBtn).bind("enable",function(){var r=g(this).unbind("click").bind("click",function(){if(q.params.ajaxMode&&r.is(".next")&&b(q)==(p(q)-1)&&!q.lastItemsToLoad){h(q);q.$elts.content.ajaxSuccess(function(){})}else{e(q,j(q,(r.is(".next")?"next":"prev")));if(q.params.stopSlideBtn==true){q.$elts.stopSlideBtn.trigger("pause")}else{m(q)}}}).removeClass("disabled").removeAttr("disabled");if(q.params.combinedClasses){r.removeClass("next-disabled previous-disabled").removeAttr("disabled")}}).bind("disable",function(){var r=g(this).unbind("click").addClass("disabled").attr("disabled","disabled");if(q.params.combinedClasses){if(r.is(".next")){r.addClass("next-disabled")}else{if(r.is(".previous")){r.addClass("previous-disabled")}}}}).hover(function(){g(this).toggleClass("hover")})}function o(q){q.$elts.pagination=g('<div class="center-wrap"><div class="carousel-pagination"><p></p></div></div>')[((q.params.paginationPosition=="outside")?"insertAfter":"appendTo")](q.$elts.carousel).find("p");q.$elts.paginationBtns=g([]);q.$elts.content.find("li").each(function(r){if(r%q.params.dispItems==0){k(q,r)}})}function k(r,q){if(r.params.pagination){r.$elts.paginationBtns=r.$elts.paginationBtns.add(g('<a role="button"><span>'+r.params.tabLabel(r.$elts.paginationBtns.length+1)+"</span></a>").data("firstStep",q)).appendTo(r.$elts.pagination);r.$elts.paginationBtns.slice(0,1).addClass("active");r.$elts.paginationBtns.click(function(s){e(r,g(this).data("firstStep"));if(r.params.stopSlideBtn==true){r.$elts.stopSlideBtn.trigger("pause")}else{m(r)}})}}function n(q){if(q.params.useAddress&&g.isFunction(g.fn.address)){g.address.init(function(s){var r=g.address.pathNames();if(r[0]===q.params.adressIdentifier&&!!r[1]){e(q,r[1]-1)}else{g.address.value("/"+q.params.adressIdentifier+"/1")}}).change(function(s){var r=g.address.pathNames();if(r[0]===q.params.adressIdentifier&&!!r[1]){e(q,r[1]-1)}})}else{q.params.useAddress=false}}function e(q,r){q.params.callback(r);l(q,r);q.steps.first=r;i(q);if(q.params.useAddress){g.address.value("/"+q.params.adressIdentifier+"/"+(r+1))}}function j(r,q){if(q=="prev"){if(!r.params.showEmptyItems){if(r.steps.first==0){return((r.params.loop)?(r.steps.count-r.params.dispItems):false)}else{return Math.max(0,r.steps.first-r.params.dispItems)}}else{if((r.steps.first-r.params.dispItems)>=0){return r.steps.first-r.params.dispItems}else{return((r.params.loop)?(r.steps.count-r.params.dispItems):false)}}}else{if(q=="next"){if((r.steps.first+r.params.dispItems)<r.steps.count){if(!r.params.showEmptyItems){return Math.min(r.steps.first+r.params.dispItems,r.steps.count-r.params.dispItems)}else{return r.steps.first+r.params.dispItems}}else{return((r.params.loop)?0:false)}}}}function l(q,r){switch(q.params.effect){case"no":if(q.params.direction=="vertical"){q.$elts.content.css("top",-(q.itemHeight*r)+"px")}else{q.$elts.content.css("left",-(q.itemWidth*r)+"px")}break;case"fade":if(q.params.direction=="vertical"){q.$elts.content.hide().css("top",-(q.itemHeight*r)+"px").fadeIn(q.params.animSpeed)}else{q.$elts.content.hide().css("left",-(q.itemWidth*r)+"px").fadeIn(q.params.animSpeed)}break;default:if(q.params.direction=="vertical"){q.$elts.content.stop().animate({top:-(q.itemHeight*r)+"px"},q.params.animSpeed,q.params.slideEasing)}else{q.$elts.content.stop().animate({left:-(q.itemWidth*r)+"px"},q.params.animSpeed,q.params.slideEasing)}break}}function i(q){if(j(q,"prev")!==false){q.$elts.prevBtn.trigger("enable")}else{q.$elts.prevBtn.trigger("disable")}if(j(q,"next")!==false){q.$elts.nextBtn.trigger("enable")}else{q.$elts.nextBtn.trigger("disable")}if(q.params.pagination){q.$elts.paginationBtns.removeClass("active").filter(function(){return(g(this).data("firstStep")==q.steps.first)}).addClass("active")}}function f(q){q.delayAutoSlide=window.setTimeout(function(){q.autoSlideInterval=window.setInterval(function(){e(q,j(q,"next"))},q.params.autoSlideInterval)},q.params.delayAutoSlide)}function m(q){window.clearTimeout(q.delayAutoSlide);window.clearInterval(q.autoSlideInterval);q.params.delayAutoSlide=0}function a(r){var q=r.$elts.stopSlideBtn;q.bind({play:function(){f(r);q.removeClass("pause").addClass("play").html(r.params.stopSlideTextPause)},pause:function(){m(r);q.removeClass("play").addClass("pause").html(r.params.stopSlideTextPlay)}});q.click(function(s){if(q.is(".play")){q.trigger("pause")}else{if(q.is(".pause")){q.trigger("play")}}});q.prependTo(r.$elts.wrap)}function p(q){return q.$elts.pagination.children().length}function b(q){return q.steps.first/q.params.dispItems}function h(q){q.$elts.carousel.prepend(q.$elts.loader);g.ajax({url:q.params.ajaxUrl,dataType:"json",success:function(r){q.lastItemsToLoad=r.bLastItemsToLoad;g(q.$elts.content).append(r.shtml);q.steps={first:q.steps.first+q.params.dispItems,count:q.$elts.content.children().length};q.steps.last=q.steps.count-1;c(q);k(q,q.steps.first);e(q,q.steps.first);if(q.params.stopSlideBtn==true){q.$elts.stopSlideBtn.trigger("pause")}else{m(q)}q.$elts.loader.remove()}})}})(jQuery);;
/*! iScroll v5.1.1 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
(function (window, document, Math) {
var rAF = window.requestAnimationFrame	||
	window.webkitRequestAnimationFrame	||
	window.mozRequestAnimationFrame		||
	window.oRequestAnimationFrame		||
	window.msRequestAnimationFrame		||
	function (callback) { window.setTimeout(callback, 1000 / 60); };

var utils = (function () {
	var me = {};

	var _elementStyle = document.createElement('div').style;
	var _vendor = (function () {
		var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			transform,
			i = 0,
			l = vendors.length;

		for ( ; i < l; i++ ) {
			transform = vendors[i] + 'ransform';
			if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
		}

		return false;
	})();

	function _prefixStyle (style) {
		if ( _vendor === false ) return false;
		if ( _vendor === '' ) return style;
		return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
	}

	me.getTime = Date.now || function getTime () { return new Date().getTime(); };

	me.extend = function (target, obj) {
		for ( var i in obj ) {
			target[i] = obj[i];
		}
	};

	me.addEvent = function (el, type, fn, capture) {
		el.addEventListener(type, fn, !!capture);
	};

	me.removeEvent = function (el, type, fn, capture) {
		el.removeEventListener(type, fn, !!capture);
	};

	me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
		var distance = current - start,
			speed = Math.abs(distance) / time,
			destination,
			duration;

		deceleration = deceleration === undefined ? 0.0006 : deceleration;

		destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
		duration = speed / deceleration;

		if ( destination < lowerMargin ) {
			destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
			distance = Math.abs(destination - current);
			duration = distance / speed;
		} else if ( destination > 0 ) {
			destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
			distance = Math.abs(current) + destination;
			duration = distance / speed;
		}

		return {
			destination: Math.round(destination),
			duration: duration
		};
	};

	var _transform = _prefixStyle('transform');

	me.extend(me, {
		hasTransform: _transform !== false,
		hasPerspective: _prefixStyle('perspective') in _elementStyle,
		hasTouch: 'ontouchstart' in window,
		hasPointer: navigator.msPointerEnabled,
		hasTransition: _prefixStyle('transition') in _elementStyle
	});

	// This should find all Android browsers lower than build 535.19 (both stock browser and webview)
	me.isBadAndroid = /Android /.test(window.navigator.appVersion) && !(/Chrome\/\d/.test(window.navigator.appVersion));

	me.extend(me.style = {}, {
		transform: _transform,
		transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
		transitionDuration: _prefixStyle('transitionDuration'),
		transitionDelay: _prefixStyle('transitionDelay'),
		transformOrigin: _prefixStyle('transformOrigin')
	});

	me.hasClass = function (e, c) {
		var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
		return re.test(e.className);
	};

	me.addClass = function (e, c) {
		if ( me.hasClass(e, c) ) {
			return;
		}

		var newclass = e.className.split(' ');
		newclass.push(c);
		e.className = newclass.join(' ');
	};

	me.removeClass = function (e, c) {
		if ( !me.hasClass(e, c) ) {
			return;
		}

		var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
		e.className = e.className.replace(re, ' ');
	};

	me.offset = function (el) {
		var left = -el.offsetLeft,
			top = -el.offsetTop;

		// jshint -W084
		while (el = el.offsetParent) {
			left -= el.offsetLeft;
			top -= el.offsetTop;
		}
		// jshint +W084

		return {
			left: left,
			top: top
		};
	};

	me.preventDefaultException = function (el, exceptions) {
		for ( var i in exceptions ) {
			if ( exceptions[i].test(el[i]) ) {
				return true;
			}
		}

		return false;
	};

	me.extend(me.eventType = {}, {
		touchstart: 1,
		touchmove: 1,
		touchend: 1,

		mousedown: 2,
		mousemove: 2,
		mouseup: 2,

		MSPointerDown: 3,
		MSPointerMove: 3,
		MSPointerUp: 3
	});

	me.extend(me.ease = {}, {
		quadratic: {
			style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			fn: function (k) {
				return k * ( 2 - k );
			}
		},
		circular: {
			style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
			fn: function (k) {
				return Math.sqrt( 1 - ( --k * k ) );
			}
		},
		back: {
			style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
			fn: function (k) {
				var b = 4;
				return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
			}
		},
		bounce: {
			style: '',
			fn: function (k) {
				if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
					return 7.5625 * k * k;
				} else if ( k < ( 2 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
				} else if ( k < ( 2.5 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
				} else {
					return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
				}
			}
		},
		elastic: {
			style: '',
			fn: function (k) {
				var f = 0.22,
					e = 0.4;

				if ( k === 0 ) { return 0; }
				if ( k == 1 ) { return 1; }

				return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
			}
		}
	});

	me.tap = function (e, eventName) {
		var ev = document.createEvent('Event');
		ev.initEvent(eventName, true, true);
		ev.pageX = e.pageX;
		ev.pageY = e.pageY;
		e.target.dispatchEvent(ev);
	};

	me.click = function (e) {
		var target = e.target,
			ev;

		if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
			ev = document.createEvent('MouseEvents');
			ev.initMouseEvent('click', true, true, e.view, 1,
				target.screenX, target.screenY, target.clientX, target.clientY,
				e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
				0, null);

			ev._constructed = true;
			target.dispatchEvent(ev);
		}
	};

	return me;
})();

function IScroll (el, options) {
	this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
	this.scroller = this.wrapper.children[0];
	this.scrollerStyle = this.scroller.style;		// cache style for better performance

	this.options = {

		resizeScrollbars: true,

		mouseWheelSpeed: 20,

		snapThreshold: 0.334,

// INSERT POINT: OPTIONS 

		startX: 0,
		startY: 0,
		scrollY: true,
		directionLockThreshold: 5,
		momentum: true,

		bounce: true,
		bounceTime: 600,
		bounceEasing: '',

		preventDefault: true,
		preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

		HWCompositing: true,
		useTransition: true,
		useTransform: true
	};

	for ( var i in options ) {
		this.options[i] = options[i];
	}

	// Normalize options
	this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

	this.options.useTransition = utils.hasTransition && this.options.useTransition;
	this.options.useTransform = utils.hasTransform && this.options.useTransform;

	this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
	this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

	// If you want eventPassthrough I have to lock one of the axes
	this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
	this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

	// With eventPassthrough we also need lockDirection mechanism
	this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
	this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

	this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

	this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

	if ( this.options.tap === true ) {
		this.options.tap = 'tap';
	}

	if ( this.options.shrinkScrollbars == 'scale' ) {
		this.options.useTransition = false;
	}

	this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

// INSERT POINT: NORMALIZATION

	// Some defaults	
	this.x = 0;
	this.y = 0;
	this.directionX = 0;
	this.directionY = 0;
	this._events = {};

// INSERT POINT: DEFAULTS

	this._init();
	this.refresh();

	this.scrollTo(this.options.startX, this.options.startY);
	this.enable();
}

IScroll.prototype = {
	version: '5.1.1',

	_init: function () {
		this._initEvents();

		if ( this.options.scrollbars || this.options.indicators ) {
			this._initIndicators();
		}

		if ( this.options.mouseWheel ) {
			this._initWheel();
		}

		if ( this.options.snap ) {
			this._initSnap();
		}

		if ( this.options.keyBindings ) {
			this._initKeys();
		}

// INSERT POINT: _init

	},

	destroy: function () {
		this._initEvents(true);

		this._execEvent('destroy');
	},

	_transitionEnd: function (e) {
		if ( e.target != this.scroller || !this.isInTransition ) {
			return;
		}

		this._transitionTime();
		if ( !this.resetPosition(this.options.bounceTime) ) {
			this.isInTransition = false;
			this._execEvent('scrollEnd');
		}
	},

	_start: function (e) {
		// React to left mouse button only
		if ( utils.eventType[e.type] != 1 ) {
			if ( e.button !== 0 ) {
				return;
			}
		}

		if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
			return;
		}

		if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.touches ? e.touches[0] : e,
			pos;

		this.initiated	= utils.eventType[e.type];
		this.moved		= false;
		this.distX		= 0;
		this.distY		= 0;
		this.directionX = 0;
		this.directionY = 0;
		this.directionLocked = 0;

		this._transitionTime();

		this.startTime = utils.getTime();

		if ( this.options.useTransition && this.isInTransition ) {
			this.isInTransition = false;
			pos = this.getComputedPosition();
			this._translate(Math.round(pos.x), Math.round(pos.y));
			this._execEvent('scrollEnd');
		} else if ( !this.options.useTransition && this.isAnimating ) {
			this.isAnimating = false;
			this._execEvent('scrollEnd');
		}

		this.startX    = this.x;
		this.startY    = this.y;
		this.absStartX = this.x;
		this.absStartY = this.y;
		this.pointX    = point.pageX;
		this.pointY    = point.pageY;

		this._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault ) {	// increases performance on Android? TODO: check!
			e.preventDefault();
		}

		var point		= e.touches ? e.touches[0] : e,
			deltaX		= point.pageX - this.pointX,
			deltaY		= point.pageY - this.pointY,
			timestamp	= utils.getTime(),
			newX, newY,
			absDistX, absDistY;

		this.pointX		= point.pageX;
		this.pointY		= point.pageY;

		this.distX		+= deltaX;
		this.distY		+= deltaY;
		absDistX		= Math.abs(this.distX);
		absDistY		= Math.abs(this.distY);

		// We need to move at least 10 pixels for the scrolling to initiate
		if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
			return;
		}

		// If you are scrolling in one direction lock the other
		if ( !this.directionLocked && !this.options.freeScroll ) {
			if ( absDistX > absDistY + this.options.directionLockThreshold ) {
				this.directionLocked = 'h';		// lock horizontally
			} else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
				this.directionLocked = 'v';		// lock vertically
			} else {
				this.directionLocked = 'n';		// no lock
			}
		}

		if ( this.directionLocked == 'h' ) {
			if ( this.options.eventPassthrough == 'vertical' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'horizontal' ) {
				this.initiated = false;
				return;
			}

			deltaY = 0;
		} else if ( this.directionLocked == 'v' ) {
			if ( this.options.eventPassthrough == 'horizontal' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'vertical' ) {
				this.initiated = false;
				return;
			}

			deltaX = 0;
		}

		deltaX = this.hasHorizontalScroll ? deltaX : 0;
		deltaY = this.hasVerticalScroll ? deltaY : 0;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		// Slow down if outside of the boundaries
		if ( newX > 0 || newX < this.maxScrollX ) {
			newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
		}
		if ( newY > 0 || newY < this.maxScrollY ) {
			newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
		}

		this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
		this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

		if ( !this.moved ) {
			this._execEvent('scrollStart');
		}

		this.moved = true;

		this._translate(newX, newY);

/* REPLACE START: _move */

		if ( timestamp - this.startTime > 300 ) {
			this.startTime = timestamp;
			this.startX = this.x;
			this.startY = this.y;
		}

/* REPLACE END: _move */

	},

	_end: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.changedTouches ? e.changedTouches[0] : e,
			momentumX,
			momentumY,
			duration = utils.getTime() - this.startTime,
			newX = Math.round(this.x),
			newY = Math.round(this.y),
			distanceX = Math.abs(newX - this.startX),
			distanceY = Math.abs(newY - this.startY),
			time = 0,
			easing = '';

		this.isInTransition = 0;
		this.initiated = 0;
		this.endTime = utils.getTime();

		// reset if we are outside of the boundaries
		if ( this.resetPosition(this.options.bounceTime) ) {
			return;
		}

		this.scrollTo(newX, newY);	// ensures that the last position is rounded

		// we scrolled less than 10 pixels
		if ( !this.moved ) {
			if ( this.options.tap ) {
				utils.tap(e, this.options.tap);
			}

			if ( this.options.click ) {
				utils.click(e);
			}

			this._execEvent('scrollCancel');
			return;
		}

		if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
			this._execEvent('flick');
			return;
		}

		// start momentum animation if needed
		if ( this.options.momentum && duration < 300 ) {
			momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
			momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
			newX = momentumX.destination;
			newY = momentumY.destination;
			time = Math.max(momentumX.duration, momentumY.duration);
			this.isInTransition = 1;
		}


		if ( this.options.snap ) {
			var snap = this._nearestSnap(newX, newY);
			this.currentPage = snap;
			time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(newX - snap.x), 1000),
						Math.min(Math.abs(newY - snap.y), 1000)
					), 300);
			newX = snap.x;
			newY = snap.y;

			this.directionX = 0;
			this.directionY = 0;
			easing = this.options.bounceEasing;
		}

// INSERT POINT: _end

		if ( newX != this.x || newY != this.y ) {
			// change easing function when scroller goes out of the boundaries
			if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
				easing = utils.ease.quadratic;
			}

			this.scrollTo(newX, newY, time, easing);
			return;
		}

		this._execEvent('scrollEnd');
	},

	_resize: function () {
		var that = this;

		clearTimeout(this.resizeTimeout);

		this.resizeTimeout = setTimeout(function () {
			that.refresh();
		}, this.options.resizePolling);
	},

	resetPosition: function (time) {
		var x = this.x,
			y = this.y;

		time = time || 0;

		if ( !this.hasHorizontalScroll || this.x > 0 ) {
			x = 0;
		} else if ( this.x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( !this.hasVerticalScroll || this.y > 0 ) {
			y = 0;
		} else if ( this.y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		if ( x == this.x && y == this.y ) {
			return false;
		}

		this.scrollTo(x, y, time, this.options.bounceEasing);

		return true;
	},

	disable: function () {
		this.enabled = false;
	},

	enable: function () {
		this.enabled = true;
	},

	refresh: function () {
		var rf = this.wrapper.offsetHeight;		// Force reflow

		this.wrapperWidth	= this.wrapper.clientWidth;
		this.wrapperHeight	= this.wrapper.clientHeight;

/* REPLACE START: refresh */

		this.scrollerWidth	= this.scroller.offsetWidth;
		this.scrollerHeight	= this.scroller.offsetHeight;

		this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
		this.maxScrollY		= this.wrapperHeight - this.scrollerHeight;

/* REPLACE END: refresh */

		this.hasHorizontalScroll	= this.options.scrollX && this.maxScrollX < 0;
		this.hasVerticalScroll		= this.options.scrollY && this.maxScrollY < 0;

		if ( !this.hasHorizontalScroll ) {
			this.maxScrollX = 0;
			this.scrollerWidth = this.wrapperWidth;
		}

		if ( !this.hasVerticalScroll ) {
			this.maxScrollY = 0;
			this.scrollerHeight = this.wrapperHeight;
		}

		this.endTime = 0;
		this.directionX = 0;
		this.directionY = 0;

		this.wrapperOffset = utils.offset(this.wrapper);

		this._execEvent('refresh');

		this.resetPosition();

// INSERT POINT: _refresh

	},

	on: function (type, fn) {
		if ( !this._events[type] ) {
			this._events[type] = [];
		}

		this._events[type].push(fn);
	},

	off: function (type, fn) {
		if ( !this._events[type] ) {
			return;
		}

		var index = this._events[type].indexOf(fn);

		if ( index > -1 ) {
			this._events[type].splice(index, 1);
		}
	},

	_execEvent: function (type) {
		if ( !this._events[type] ) {
			return;
		}

		var i = 0,
			l = this._events[type].length;

		if ( !l ) {
			return;
		}

		for ( ; i < l; i++ ) {
			this._events[type][i].apply(this, [].slice.call(arguments, 1));
		}
	},

	scrollBy: function (x, y, time, easing) {
		x = this.x + x;
		y = this.y + y;
		time = time || 0;

		this.scrollTo(x, y, time, easing);
	},

	scrollTo: function (x, y, time, easing) {
		easing = easing || utils.ease.circular;

		this.isInTransition = this.options.useTransition && time > 0;

		if ( !time || (this.options.useTransition && easing.style) ) {
			this._transitionTimingFunction(easing.style);
			this._transitionTime(time);
			this._translate(x, y);
		} else {
			this._animate(x, y, time, easing.fn);
		}
	},

	scrollToElement: function (el, time, offsetX, offsetY, easing) {
		el = el.nodeType ? el : this.scroller.querySelector(el);

		if ( !el ) {
			return;
		}

		var pos = utils.offset(el);

		pos.left -= this.wrapperOffset.left;
		pos.top  -= this.wrapperOffset.top;

		// if offsetX/Y are true we center the element to the screen
		if ( offsetX === true ) {
			offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
		}
		if ( offsetY === true ) {
			offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
		}

		pos.left -= offsetX || 0;
		pos.top  -= offsetY || 0;

		pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
		pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;

		time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;

		this.scrollTo(pos.left, pos.top, time, easing);
	},

	_transitionTime: function (time) {
		time = time || 0;

		this.scrollerStyle[utils.style.transitionDuration] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.scrollerStyle[utils.style.transitionDuration] = '0.001s';
		}


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].transitionTime(time);
			}
		}


// INSERT POINT: _transitionTime

	},

	_transitionTimingFunction: function (easing) {
		this.scrollerStyle[utils.style.transitionTimingFunction] = easing;


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].transitionTimingFunction(easing);
			}
		}


// INSERT POINT: _transitionTimingFunction

	},

	_translate: function (x, y) {
		if ( this.options.useTransform ) {

/* REPLACE START: _translate */

			this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

/* REPLACE END: _translate */

		} else {
			x = Math.round(x);
			y = Math.round(y);
			this.scrollerStyle.left = x + 'px';
			this.scrollerStyle.top = y + 'px';
		}

		this.x = x;
		this.y = y;


	if ( this.indicators ) {
		for ( var i = this.indicators.length; i--; ) {
			this.indicators[i].updatePosition();
		}
	}


// INSERT POINT: _translate

	},

	_initEvents: function (remove) {
		var eventType = remove ? utils.removeEvent : utils.addEvent,
			target = this.options.bindToWrapper ? this.wrapper : window;

		eventType(window, 'orientationchange', this);
		eventType(window, 'resize', this);

		if ( this.options.click ) {
			eventType(this.wrapper, 'click', this, true);
		}

		if ( !this.options.disableMouse ) {
			eventType(this.wrapper, 'mousedown', this);
			eventType(target, 'mousemove', this);
			eventType(target, 'mousecancel', this);
			eventType(target, 'mouseup', this);
		}

		if ( utils.hasPointer && !this.options.disablePointer ) {
			eventType(this.wrapper, 'MSPointerDown', this);
			eventType(target, 'MSPointerMove', this);
			eventType(target, 'MSPointerCancel', this);
			eventType(target, 'MSPointerUp', this);
		}

		if ( utils.hasTouch && !this.options.disableTouch ) {
			eventType(this.wrapper, 'touchstart', this);
			eventType(target, 'touchmove', this);
			eventType(target, 'touchcancel', this);
			eventType(target, 'touchend', this);
		}

		eventType(this.scroller, 'transitionend', this);
		eventType(this.scroller, 'webkitTransitionEnd', this);
		eventType(this.scroller, 'oTransitionEnd', this);
		eventType(this.scroller, 'MSTransitionEnd', this);
	},

	getComputedPosition: function () {
		var matrix = window.getComputedStyle(this.scroller, null),
			x, y;

		if ( this.options.useTransform ) {
			matrix = matrix[utils.style.transform].split(')')[0].split(', ');
			x = +(matrix[12] || matrix[4]);
			y = +(matrix[13] || matrix[5]);
		} else {
			x = +matrix.left.replace(/[^-\d.]/g, '');
			y = +matrix.top.replace(/[^-\d.]/g, '');
		}

		return { x: x, y: y };
	},

	_initIndicators: function () {
		var interactive = this.options.interactiveScrollbars,
			customStyle = typeof this.options.scrollbars != 'string',
			indicators = [],
			indicator;

		var that = this;

		this.indicators = [];

		if ( this.options.scrollbars ) {
			// Vertical scrollbar
			if ( this.options.scrollY ) {
				indicator = {
					el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenX: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}

			// Horizontal scrollbar
			if ( this.options.scrollX ) {
				indicator = {
					el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenY: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}
		}

		if ( this.options.indicators ) {
			// TODO: check concat compatibility
			indicators = indicators.concat(this.options.indicators);
		}

		for ( var i = indicators.length; i--; ) {
			this.indicators.push( new Indicator(this, indicators[i]) );
		}

		// TODO: check if we can use array.map (wide compatibility and performance issues)
		function _indicatorsMap (fn) {
			for ( var i = that.indicators.length; i--; ) {
				fn.call(that.indicators[i]);
			}
		}

		if ( this.options.fadeScrollbars ) {
			this.on('scrollEnd', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollCancel', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1);
				});
			});

			this.on('beforeScrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1, true);
				});
			});
		}


		this.on('refresh', function () {
			_indicatorsMap(function () {
				this.refresh();
			});
		});

		this.on('destroy', function () {
			_indicatorsMap(function () {
				this.destroy();
			});

			delete this.indicators;
		});
	},

	_initWheel: function () {
		utils.addEvent(this.wrapper, 'wheel', this);
		utils.addEvent(this.wrapper, 'mousewheel', this);
		utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

		this.on('destroy', function () {
			utils.removeEvent(this.wrapper, 'wheel', this);
			utils.removeEvent(this.wrapper, 'mousewheel', this);
			utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
		});
	},

	_wheel: function (e) {
		if ( !this.enabled ) {
			return;
		}

		e.preventDefault();
		e.stopPropagation();

		var wheelDeltaX, wheelDeltaY,
			newX, newY,
			that = this;

		if ( this.wheelTimeout === undefined ) {
			that._execEvent('scrollStart');
		}

		// Execute the scrollEnd event after 400ms the wheel stopped scrolling
		clearTimeout(this.wheelTimeout);
		this.wheelTimeout = setTimeout(function () {
			that._execEvent('scrollEnd');
			that.wheelTimeout = undefined;
		}, 400);

		if ( 'deltaX' in e ) {
			wheelDeltaX = -e.deltaX;
			wheelDeltaY = -e.deltaY;
		} else if ( 'wheelDeltaX' in e ) {
			wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
			wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
		} else if ( 'wheelDelta' in e ) {
			wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
		} else if ( 'detail' in e ) {
			wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
		} else {
			return;
		}

		wheelDeltaX *= this.options.invertWheelDirection;
		wheelDeltaY *= this.options.invertWheelDirection;

		if ( !this.hasVerticalScroll ) {
			wheelDeltaX = wheelDeltaY;
			wheelDeltaY = 0;
		}

		if ( this.options.snap ) {
			newX = this.currentPage.pageX;
			newY = this.currentPage.pageY;

			if ( wheelDeltaX > 0 ) {
				newX--;
			} else if ( wheelDeltaX < 0 ) {
				newX++;
			}

			if ( wheelDeltaY > 0 ) {
				newY--;
			} else if ( wheelDeltaY < 0 ) {
				newY++;
			}

			this.goToPage(newX, newY);

			return;
		}

		newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
		newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

		if ( newX > 0 ) {
			newX = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
		}

		if ( newY > 0 ) {
			newY = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
		}

		this.scrollTo(newX, newY, 0);

// INSERT POINT: _wheel
	},

	_initSnap: function () {
		this.currentPage = {};

		if ( typeof this.options.snap == 'string' ) {
			this.options.snap = this.scroller.querySelectorAll(this.options.snap);
		}

		this.on('refresh', function () {
			var i = 0, l,
				m = 0, n,
				cx, cy,
				x = 0, y,
				stepX = this.options.snapStepX || this.wrapperWidth,
				stepY = this.options.snapStepY || this.wrapperHeight,
				el;

			this.pages = [];

			if ( !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight ) {
				return;
			}

			if ( this.options.snap === true ) {
				cx = Math.round( stepX / 2 );
				cy = Math.round( stepY / 2 );

				while ( x > -this.scrollerWidth ) {
					this.pages[i] = [];
					l = 0;
					y = 0;

					while ( y > -this.scrollerHeight ) {
						this.pages[i][l] = {
							x: Math.max(x, this.maxScrollX),
							y: Math.max(y, this.maxScrollY),
							width: stepX,
							height: stepY,
							cx: x - cx,
							cy: y - cy
						};

						y -= stepY;
						l++;
					}

					x -= stepX;
					i++;
				}
			} else {
				el = this.options.snap;
				l = el.length;
				n = -1;

				for ( ; i < l; i++ ) {
					if ( i === 0 || el[i].offsetLeft <= el[i-1].offsetLeft ) {
						m = 0;
						n++;
					}

					if ( !this.pages[m] ) {
						this.pages[m] = [];
					}

					x = Math.max(-el[i].offsetLeft, this.maxScrollX);
					y = Math.max(-el[i].offsetTop, this.maxScrollY);
					cx = x - Math.round(el[i].offsetWidth / 2);
					cy = y - Math.round(el[i].offsetHeight / 2);

					this.pages[m][n] = {
						x: x,
						y: y,
						width: el[i].offsetWidth,
						height: el[i].offsetHeight,
						cx: cx,
						cy: cy
					};

					if ( x > this.maxScrollX ) {
						m++;
					}
				}
			}

			this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

			// Update snap threshold if needed
			if ( this.options.snapThreshold % 1 === 0 ) {
				this.snapThresholdX = this.options.snapThreshold;
				this.snapThresholdY = this.options.snapThreshold;
			} else {
				this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
				this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
			}
		});

		this.on('flick', function () {
			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.x - this.startX), 1000),
						Math.min(Math.abs(this.y - this.startY), 1000)
					), 300);

			this.goToPage(
				this.currentPage.pageX + this.directionX,
				this.currentPage.pageY + this.directionY,
				time
			);
		});
	},

	_nearestSnap: function (x, y) {
		if ( !this.pages.length ) {
			return { x: 0, y: 0, pageX: 0, pageY: 0 };
		}

		var i = 0,
			l = this.pages.length,
			m = 0;

		// Check if we exceeded the snap threshold
		if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
			Math.abs(y - this.absStartY) < this.snapThresholdY ) {
			return this.currentPage;
		}

		if ( x > 0 ) {
			x = 0;
		} else if ( x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( y > 0 ) {
			y = 0;
		} else if ( y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		for ( ; i < l; i++ ) {
			if ( x >= this.pages[i][0].cx ) {
				x = this.pages[i][0].x;
				break;
			}
		}

		l = this.pages[i].length;

		for ( ; m < l; m++ ) {
			if ( y >= this.pages[0][m].cy ) {
				y = this.pages[0][m].y;
				break;
			}
		}

		if ( i == this.currentPage.pageX ) {
			i += this.directionX;

			if ( i < 0 ) {
				i = 0;
			} else if ( i >= this.pages.length ) {
				i = this.pages.length - 1;
			}

			x = this.pages[i][0].x;
		}

		if ( m == this.currentPage.pageY ) {
			m += this.directionY;

			if ( m < 0 ) {
				m = 0;
			} else if ( m >= this.pages[0].length ) {
				m = this.pages[0].length - 1;
			}

			y = this.pages[0][m].y;
		}

		return {
			x: x,
			y: y,
			pageX: i,
			pageY: m
		};
	},

	goToPage: function (x, y, time, easing) {
		easing = easing || this.options.bounceEasing;

		if ( x >= this.pages.length ) {
			x = this.pages.length - 1;
		} else if ( x < 0 ) {
			x = 0;
		}

		if ( y >= this.pages[x].length ) {
			y = this.pages[x].length - 1;
		} else if ( y < 0 ) {
			y = 0;
		}

		var posX = this.pages[x][y].x,
			posY = this.pages[x][y].y;

		time = time === undefined ? this.options.snapSpeed || Math.max(
			Math.max(
				Math.min(Math.abs(posX - this.x), 1000),
				Math.min(Math.abs(posY - this.y), 1000)
			), 300) : time;

		this.currentPage = {
			x: posX,
			y: posY,
			pageX: x,
			pageY: y
		};

		this.scrollTo(posX, posY, time, easing);
	},

	next: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x++;

		if ( x >= this.pages.length && this.hasVerticalScroll ) {
			x = 0;
			y++;
		}

		this.goToPage(x, y, time, easing);
	},

	prev: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x--;

		if ( x < 0 && this.hasVerticalScroll ) {
			x = 0;
			y--;
		}

		this.goToPage(x, y, time, easing);
	},

	_initKeys: function (e) {
		// default key bindings
		var keys = {
			pageUp: 33,
			pageDown: 34,
			end: 35,
			home: 36,
			left: 37,
			up: 38,
			right: 39,
			down: 40
		};
		var i;

		// if you give me characters I give you keycode
		if ( typeof this.options.keyBindings == 'object' ) {
			for ( i in this.options.keyBindings ) {
				if ( typeof this.options.keyBindings[i] == 'string' ) {
					this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
				}
			}
		} else {
			this.options.keyBindings = {};
		}

		for ( i in keys ) {
			this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
		}

		utils.addEvent(window, 'keydown', this);

		this.on('destroy', function () {
			utils.removeEvent(window, 'keydown', this);
		});
	},

	_key: function (e) {
		if ( !this.enabled ) {
			return;
		}

		var snap = this.options.snap,	// we are using this alot, better to cache it
			newX = snap ? this.currentPage.pageX : this.x,
			newY = snap ? this.currentPage.pageY : this.y,
			now = utils.getTime(),
			prevTime = this.keyTime || 0,
			acceleration = 0.250,
			pos;

		if ( this.options.useTransition && this.isInTransition ) {
			pos = this.getComputedPosition();

			this._translate(Math.round(pos.x), Math.round(pos.y));
			this.isInTransition = false;
		}

		this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

		switch ( e.keyCode ) {
			case this.options.keyBindings.pageUp:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX += snap ? 1 : this.wrapperWidth;
				} else {
					newY += snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.pageDown:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX -= snap ? 1 : this.wrapperWidth;
				} else {
					newY -= snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.end:
				newX = snap ? this.pages.length-1 : this.maxScrollX;
				newY = snap ? this.pages[0].length-1 : this.maxScrollY;
				break;
			case this.options.keyBindings.home:
				newX = 0;
				newY = 0;
				break;
			case this.options.keyBindings.left:
				newX += snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.up:
				newY += snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.right:
				newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.down:
				newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			default:
				return;
		}

		if ( snap ) {
			this.goToPage(newX, newY);
			return;
		}

		if ( newX > 0 ) {
			newX = 0;
			this.keyAcceleration = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
			this.keyAcceleration = 0;
		}

		if ( newY > 0 ) {
			newY = 0;
			this.keyAcceleration = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
			this.keyAcceleration = 0;
		}

		this.scrollTo(newX, newY, 0);

		this.keyTime = now;
	},

	_animate: function (destX, destY, duration, easingFn) {
		var that = this,
			startX = this.x,
			startY = this.y,
			startTime = utils.getTime(),
			destTime = startTime + duration;

		function step () {
			var now = utils.getTime(),
				newX, newY,
				easing;

			if ( now >= destTime ) {
				that.isAnimating = false;
				that._translate(destX, destY);

				if ( !that.resetPosition(that.options.bounceTime) ) {
					that._execEvent('scrollEnd');
				}

				return;
			}

			now = ( now - startTime ) / duration;
			easing = easingFn(now);
			newX = ( destX - startX ) * easing + startX;
			newY = ( destY - startY ) * easing + startY;
			that._translate(newX, newY);

			if ( that.isAnimating ) {
				rAF(step);
			}
		}

		this.isAnimating = true;
		step();
	},
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
			case 'orientationchange':
			case 'resize':
				this._resize();
				break;
			case 'transitionend':
			case 'webkitTransitionEnd':
			case 'oTransitionEnd':
			case 'MSTransitionEnd':
				this._transitionEnd(e);
				break;
			case 'wheel':
			case 'DOMMouseScroll':
			case 'mousewheel':
				this._wheel(e);
				break;
			case 'keydown':
				this._key(e);
				break;
			case 'click':
				if ( !e._constructed ) {
					e.preventDefault();
					e.stopPropagation();
				}
				break;
		}
	}
};
function createDefaultScrollbar (direction, interactive, type) {
	var scrollbar = document.createElement('div'),
		indicator = document.createElement('div');

	if ( type === true ) {
		scrollbar.style.cssText = 'position:absolute;z-index:9999';
		indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
	}

	indicator.className = 'iScrollIndicator';

	if ( direction == 'h' ) {
		if ( type === true ) {
			scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
			indicator.style.height = '100%';
		}
		scrollbar.className = 'iScrollHorizontalScrollbar';
	} else {
		if ( type === true ) {
			scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
			indicator.style.width = '100%';
		}
		scrollbar.className = 'iScrollVerticalScrollbar';
	}

	scrollbar.style.cssText += ';overflow:hidden';

	if ( !interactive ) {
		scrollbar.style.pointerEvents = 'none';
	}

	scrollbar.appendChild(indicator);

	return scrollbar;
}

function Indicator (scroller, options) {
	this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
	this.wrapperStyle = this.wrapper.style;
	this.indicator = this.wrapper.children[0];
	this.indicatorStyle = this.indicator.style;
	this.scroller = scroller;

	this.options = {
		listenX: true,
		listenY: true,
		interactive: false,
		resize: true,
		defaultScrollbars: false,
		shrink: false,
		fade: false,
		speedRatioX: 0,
		speedRatioY: 0
	};

	for ( var i in options ) {
		this.options[i] = options[i];
	}

	this.sizeRatioX = 1;
	this.sizeRatioY = 1;
	this.maxPosX = 0;
	this.maxPosY = 0;

	if ( this.options.interactive ) {
		if ( !this.options.disableTouch ) {
			utils.addEvent(this.indicator, 'touchstart', this);
			utils.addEvent(window, 'touchend', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(this.indicator, 'MSPointerDown', this);
			utils.addEvent(window, 'MSPointerUp', this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(this.indicator, 'mousedown', this);
			utils.addEvent(window, 'mouseup', this);
		}
	}

	if ( this.options.fade ) {
		this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
		this.wrapperStyle[utils.style.transitionDuration] = utils.isBadAndroid ? '0.001s' : '0ms';
		this.wrapperStyle.opacity = '0';
	}
}

Indicator.prototype = {
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
		}
	},

	destroy: function () {
		if ( this.options.interactive ) {
			utils.removeEvent(this.indicator, 'touchstart', this);
			utils.removeEvent(this.indicator, 'MSPointerDown', this);
			utils.removeEvent(this.indicator, 'mousedown', this);

			utils.removeEvent(window, 'touchmove', this);
			utils.removeEvent(window, 'MSPointerMove', this);
			utils.removeEvent(window, 'mousemove', this);

			utils.removeEvent(window, 'touchend', this);
			utils.removeEvent(window, 'MSPointerUp', this);
			utils.removeEvent(window, 'mouseup', this);
		}

		if ( this.options.defaultScrollbars ) {
			this.wrapper.parentNode.removeChild(this.wrapper);
		}
	},

	_start: function (e) {
		var point = e.touches ? e.touches[0] : e;

		e.preventDefault();
		e.stopPropagation();

		this.transitionTime();

		this.initiated = true;
		this.moved = false;
		this.lastPointX	= point.pageX;
		this.lastPointY	= point.pageY;

		this.startTime	= utils.getTime();

		if ( !this.options.disableTouch ) {
			utils.addEvent(window, 'touchmove', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(window, 'MSPointerMove', this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(window, 'mousemove', this);
		}

		this.scroller._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		var point = e.touches ? e.touches[0] : e,
			deltaX, deltaY,
			newX, newY,
			timestamp = utils.getTime();

		if ( !this.moved ) {
			this.scroller._execEvent('scrollStart');
		}

		this.moved = true;

		deltaX = point.pageX - this.lastPointX;
		this.lastPointX = point.pageX;

		deltaY = point.pageY - this.lastPointY;
		this.lastPointY = point.pageY;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		this._pos(newX, newY);

// INSERT POINT: indicator._move

		e.preventDefault();
		e.stopPropagation();
	},

	_end: function (e) {
		if ( !this.initiated ) {
			return;
		}

		this.initiated = false;

		e.preventDefault();
		e.stopPropagation();

		utils.removeEvent(window, 'touchmove', this);
		utils.removeEvent(window, 'MSPointerMove', this);
		utils.removeEvent(window, 'mousemove', this);

		if ( this.scroller.options.snap ) {
			var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.scroller.x - snap.x), 1000),
						Math.min(Math.abs(this.scroller.y - snap.y), 1000)
					), 300);

			if ( this.scroller.x != snap.x || this.scroller.y != snap.y ) {
				this.scroller.directionX = 0;
				this.scroller.directionY = 0;
				this.scroller.currentPage = snap;
				this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
			}
		}

		if ( this.moved ) {
			this.scroller._execEvent('scrollEnd');
		}
	},

	transitionTime: function (time) {
		time = time || 0;
		this.indicatorStyle[utils.style.transitionDuration] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.indicatorStyle[utils.style.transitionDuration] = '0.001s';
		}
	},

	transitionTimingFunction: function (easing) {
		this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
	},

	refresh: function () {
		this.transitionTime();

		if ( this.options.listenX && !this.options.listenY ) {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
		} else if ( this.options.listenY && !this.options.listenX ) {
			this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
		} else {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
		}

		if ( this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ) {
			utils.addClass(this.wrapper, 'iScrollBothScrollbars');
			utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '8px';
				} else {
					this.wrapper.style.bottom = '8px';
				}
			}
		} else {
			utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
			utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '2px';
				} else {
					this.wrapper.style.bottom = '2px';
				}
			}
		}

		var r = this.wrapper.offsetHeight;	// force refresh

		if ( this.options.listenX ) {
			this.wrapperWidth = this.wrapper.clientWidth;
			if ( this.options.resize ) {
				this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
				this.indicatorStyle.width = this.indicatorWidth + 'px';
			} else {
				this.indicatorWidth = this.indicator.clientWidth;
			}

			this.maxPosX = this.wrapperWidth - this.indicatorWidth;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryX = -this.indicatorWidth + 8;
				this.maxBoundaryX = this.wrapperWidth - 8;
			} else {
				this.minBoundaryX = 0;
				this.maxBoundaryX = this.maxPosX;
			}

			this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));	
		}

		if ( this.options.listenY ) {
			this.wrapperHeight = this.wrapper.clientHeight;
			if ( this.options.resize ) {
				this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
				this.indicatorStyle.height = this.indicatorHeight + 'px';
			} else {
				this.indicatorHeight = this.indicator.clientHeight;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryY = -this.indicatorHeight + 8;
				this.maxBoundaryY = this.wrapperHeight - 8;
			} else {
				this.minBoundaryY = 0;
				this.maxBoundaryY = this.maxPosY;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;
			this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
		}

		this.updatePosition();
	},

	updatePosition: function () {
		var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
			y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

		if ( !this.options.ignoreBoundaries ) {
			if ( x < this.minBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth + x, 8);
					this.indicatorStyle.width = this.width + 'px';
				}
				x = this.minBoundaryX;
			} else if ( x > this.maxBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
					this.indicatorStyle.width = this.width + 'px';
					x = this.maxPosX + this.indicatorWidth - this.width;
				} else {
					x = this.maxBoundaryX;
				}
			} else if ( this.options.shrink == 'scale' && this.width != this.indicatorWidth ) {
				this.width = this.indicatorWidth;
				this.indicatorStyle.width = this.width + 'px';
			}

			if ( y < this.minBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight + y * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
				}
				y = this.minBoundaryY;
			} else if ( y > this.maxBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
					y = this.maxPosY + this.indicatorHeight - this.height;
				} else {
					y = this.maxBoundaryY;
				}
			} else if ( this.options.shrink == 'scale' && this.height != this.indicatorHeight ) {
				this.height = this.indicatorHeight;
				this.indicatorStyle.height = this.height + 'px';
			}
		}

		this.x = x;
		this.y = y;

		if ( this.scroller.options.useTransform ) {
			this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
		} else {
			this.indicatorStyle.left = x + 'px';
			this.indicatorStyle.top = y + 'px';
		}
	},

	_pos: function (x, y) {
		if ( x < 0 ) {
			x = 0;
		} else if ( x > this.maxPosX ) {
			x = this.maxPosX;
		}

		if ( y < 0 ) {
			y = 0;
		} else if ( y > this.maxPosY ) {
			y = this.maxPosY;
		}

		x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
		y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

		this.scroller.scrollTo(x, y);
	},

	fade: function (val, hold) {
		if ( hold && !this.visible ) {
			return;
		}

		clearTimeout(this.fadeTimeout);
		this.fadeTimeout = null;

		var time = val ? 250 : 500,
			delay = val ? 0 : 300;

		val = val ? '1' : '0';

		this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

		this.fadeTimeout = setTimeout((function (val) {
			this.wrapperStyle.opacity = val;
			this.visible = +val;
		}).bind(this, val), delay);
	}
};

IScroll.utils = utils;

if ( typeof module != 'undefined' && module.exports ) {
	module.exports = IScroll;
} else {
	window.IScroll = IScroll;
}

})(window, document, Math);;
/*
 *	jQuery carouFredSel 6.1.0
 *	Demo's and documentation:
 *	caroufredsel.frebsite.nl
 *
 *	Copyright (c) 2012 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(C($){8($.1r.1v){G}$.1r.6s=$.1r.1v=C(u,w){8(1k.R==0){17(I,\'6t 57 6u 1j "\'+1k.4p+\'".\');G 1k}8(1k.R>1){G 1k.1W(C(){$(1k).1v(u,w)})}E y=1k,$13=1k[0],59=K;8(y.1m(\'5a\')){59=y.1Q(\'3p\',\'4q\');y.S(\'3p\',[\'4r\',I])}y.5b=C(o,a,b){o=3T($13,o);o.D=6v($13,o.D);o.1M=6w($13,o.1M);o.M=6x($13,o.M);o.V=5c($13,o.V);o.Z=5c($13,o.Z);o.1a=6y($13,o.1a);o.1q=6z($13,o.1q);o.1h=6A($13,o.1h);8(a){34=$.1N(I,{},$.1r.1v.5d,o)}7=$.1N(I,{},$.1r.1v.5d,o);7.d=6B(7);z.2b=(7.2b==\'4s\'||7.2b==\'1n\')?\'Z\':\'V\';E c=y.14(),2n=5e($1s,7,\'N\');8(3q(7.23)){7.23=\'7T\'+F.3U}7.3V=5f(7,2n);7.D=6C(7.D,7,c,b);7[7.d[\'N\']]=6D(7[7.d[\'N\']],7,c);7[7.d[\'1d\']]=6E(7[7.d[\'1d\']],7,c);8(7.2o){8(!3W(7[7.d[\'N\']])){7[7.d[\'N\']]=\'2J%\'}}8(3W(7[7.d[\'N\']])){z.6F=I;z.4t=7[7.d[\'N\']];7[7.d[\'N\']]=4u(2n,z.4t);8(!7.D.L){7.D.T.1c=I}}8(7.2o){7.1R=K;7.1i=[0,0,0,0];7.1A=K;7.D.T.1c=K}O{8(!7.D.L){7=6G(7,2n)}8(!7[7.d[\'N\']]){8(!7.D.T.1c&&11(7.D[7.d[\'N\']])&&7.D.1t==\'*\'){7[7.d[\'N\']]=7.D.L*7.D[7.d[\'N\']];7.1A=K}O{7[7.d[\'N\']]=\'1c\'}}8(1E(7.1A)){7.1A=(11(7[7.d[\'N\']]))?\'5g\':K}8(7.D.T.1c){7.D.L=35(c,7,0)}}8(7.D.1t!=\'*\'&&!7.D.T.1c){7.D.T.4v=7.D.L;7.D.L=3X(c,7,0)}7.D.L=2z(7.D.L,7,7.D.T.2c,$13);7.D.T.1Z=7.D.L;8(7.2o){8(!7.D.T.36){7.D.T.36=7.D.L}8(!7.D.T.1X){7.D.T.1X=7.D.L}7=5h(7,c,2n)}O{7.1i=6H(7.1i);8(7.1A==\'3r\'){7.1A=\'1n\'}O 8(7.1A==\'5i\'){7.1A=\'3a\'}1B(7.1A){Q\'5g\':Q\'1n\':Q\'3a\':8(7[7.d[\'N\']]!=\'1c\'){7=5j(7,c);7.1R=I}16;2A:7.1A=K;7.1R=(7.1i[0]==0&&7.1i[1]==0&&7.1i[2]==0&&7.1i[3]==0)?K:I;16}}8(!11(7.1M.1F)){7.1M.1F=6I}8(1E(7.1M.D)){7.1M.D=(7.2o||7.D.T.1c||7.D.1t!=\'*\')?\'L\':7.D.L}7.M=$.1N(I,{},7.1M,7.M);7.V=$.1N(I,{},7.1M,7.V);7.Z=$.1N(I,{},7.1M,7.Z);7.1a=$.1N(I,{},7.1M,7.1a);7.M=6J($13,7.M);7.V=5k($13,7.V);7.Z=5k($13,7.Z);7.1a=6K($13,7.1a);7.1q=6L($13,7.1q);7.1h=6M($13,7.1h);8(7.2p){7.2p=5l(7.2p)}8(7.M.5m){7.M.4w=7.M.5m;2K(\'M.5m\',\'M.4w\')}8(7.M.5n){7.M.4x=7.M.5n;2K(\'M.5n\',\'M.4x\')}8(7.M.5o){7.M.4y=7.M.5o;2K(\'M.5o\',\'M.4y\')}8(7.M.5p){7.M.2L=7.M.5p;2K(\'M.5p\',\'M.2L\')}};y.6N=C(){y.1m(\'5a\',I);E a=y.14(),3Y=5q(y,[\'6O\',\'6P\',\'3s\',\'3r\',\'3a\',\'5i\',\'1n\',\'3Z\',\'N\',\'1d\',\'6Q\',\'1S\',\'5r\',\'6R\']),5s=\'7U\';1B(3Y.3s){Q\'6S\':Q\'7V\':5s=3Y.3s;16}$1s.X(3Y).X({\'7W\':\'3t\',\'3s\':5s});y.1m(\'5t\',3Y).X({\'6O\':\'1n\',\'6P\':\'41\',\'3s\':\'6S\',\'3r\':0,\'3a\':\'M\',\'5i\':\'M\',\'1n\':0,\'6Q\':0,\'1S\':0,\'5r\':0,\'6R\':0});4z(a,7);5u(a,7);8(7.2o){5v(7,a)}};y.6T=C(){y.5w();y.12(H(\'5x\',F),C(e,a){e.1f();8(!z.2d){8(7.M.W){7.M.W.3b(2B(\'4A\',F))}}z.2d=I;8(7.M.1G){7.M.1G=K;y.S(H(\'3c\',F),a)}G I});y.12(H(\'5y\',F),C(e){e.1f();8(z.25){42(U)}G I});y.12(H(\'3c\',F),C(e,a,b){e.1f();1u=3u(1u);8(a&&z.25){U.2d=I;E c=2q()-U.2M;U.1F-=c;8(U.3v){U.3v.1F-=c}8(U.3w){U.3w.1F-=c}42(U,K)}8(!z.26&&!z.25){8(b){1u.3x+=2q()-1u.2M}}8(!z.26){8(7.M.W){7.M.W.3b(2B(\'6U\',F))}}z.26=I;8(7.M.4x){E d=7.M.2L-1u.3x,3d=2J-1H.2C(d*2J/7.M.2L);7.M.4x.1g($13,3d,d)}G I});y.12(H(\'1G\',F),C(e,b,c,d){e.1f();1u=3u(1u);E v=[b,c,d],t=[\'2N\',\'27\',\'3e\'],a=3f(v,t);b=a[0];c=a[1];d=a[2];8(b!=\'V\'&&b!=\'Z\'){b=z.2b}8(!11(c)){c=0}8(!1l(d)){d=K}8(d){z.2d=K;7.M.1G=I}8(!7.M.1G){e.2e();G 17(F,\'3y 4A: 2r 3g.\')}8(z.26){8(7.M.W){7.M.W.2O(2B(\'4A\',F));7.M.W.2O(2B(\'6U\',F))}}z.26=K;1u.2M=2q();E f=7.M.2L+c;43=f-1u.3x;3d=2J-1H.2C(43*2J/f);8(7.M.1e){1u.1e=7X(C(){E a=2q()-1u.2M+1u.3x,3d=1H.2C(a*2J/f);7.M.1e.4B.1g(7.M.1e.2s[0],3d)},7.M.1e.5z)}1u.M=7Y(C(){8(7.M.1e){7.M.1e.4B.1g(7.M.1e.2s[0],2J)}8(7.M.4y){7.M.4y.1g($13,3d,43)}8(z.25){y.S(H(\'1G\',F),b)}O{y.S(H(b,F),7.M)}},43);8(7.M.4w){7.M.4w.1g($13,3d,43)}G I});y.12(H(\'3h\',F),C(e){e.1f();8(U.2d){U.2d=K;z.26=K;z.25=I;U.2M=2q();2P(U)}O{y.S(H(\'1G\',F))}G I});y.12(H(\'V\',F)+\' \'+H(\'Z\',F),C(e,b,f,g,h){e.1f();8(z.2d||y.2f(\':3t\')){e.2e();G 17(F,\'3y 4A 7Z 3t: 2r 3g.\')}E i=(11(7.D.4C))?7.D.4C:7.D.L+1;8(i>J.P){e.2e();G 17(F,\'2r 6V D (\'+J.P+\' P, \'+i+\' 6W): 2r 3g.\')}E v=[b,f,g,h],t=[\'2g\',\'27/2N\',\'C\',\'3e\'],a=3f(v,t);b=a[0];f=a[1];g=a[2];h=a[3];E k=e.5A.18(F.3z.44.R);8(!1I(b)){b={}}8(1o(g)){b.3i=g}8(1l(h)){b.2Q=h}b=$.1N(I,{},7[k],b);8(b.5B&&!b.5B.1g($13,k)){e.2e();G 17(F,\'80 "5B" 81 K.\')}8(!11(f)){8(7.D.1t!=\'*\'){f=\'L\'}O{E m=[f,b.D,7[k].D];1j(E a=0,l=m.R;a<l;a++){8(11(m[a])||m[a]==\'6X\'||m[a]==\'L\'){f=m[a];16}}}1B(f){Q\'6X\':e.2e();G y.1Q(H(k+\'82\',F),[b,g]);16;Q\'L\':8(!7.D.T.1c&&7.D.1t==\'*\'){f=7.D.L}16}}8(U.2d){y.S(H(\'3h\',F));y.S(H(\'2Q\',F),[k,[b,f,g]]);e.2e();G 17(F,\'3y 83 3g.\')}8(b.1F>0){8(z.25){8(b.2Q){8(b.2Q==\'2R\'){2h=[]}8(b.2Q!=\'Y\'||2h.R==0){y.S(H(\'2Q\',F),[k,[b,f,g]])}}e.2e();G 17(F,\'3y 84 3g.\')}}1u.3x=0;y.S(H(\'6Y\'+k,F),[b,f]);8(7.2p){E s=7.2p,c=[b,f];1j(E j=0,l=s.R;j<l;j++){E d=k;8(!s[j][2]){d=(d==\'V\')?\'Z\':\'V\'}8(!s[j][1]){c[0]=s[j][0].1Q(\'3p\',[\'4D\',d])}c[1]=f+s[j][3];s[j][0].S(\'3p\',[\'6Y\'+d,c])}}G I});y.12(H(\'85\',F),C(e,b,c){e.1f();E d=y.14();8(!7.1T){8(J.Y==0){8(7.3A){y.S(H(\'Z\',F),J.P-1)}G e.2e()}}1U(d,7);8(!11(c)){8(7.D.T.1c){c=4E(d,7,J.P-1)}O 8(7.D.1t!=\'*\'){E f=(11(b.D))?b.D:5C(y,7);c=6Z(d,7,J.P-1,f)}O{c=7.D.L}c=4F(c,7,b.D,$13)}8(!7.1T){8(J.P-c<J.Y){c=J.P-J.Y}}7.D.T.1Z=7.D.L;8(7.D.T.1c){E g=2z(35(d,7,J.P-c),7,7.D.T.2c,$13);8(7.D.L+c<=g&&c<J.P){c++;g=2z(35(d,7,J.P-c),7,7.D.T.2c,$13)}7.D.L=g}O 8(7.D.1t!=\'*\'){E g=3X(d,7,J.P-c);7.D.L=2z(g,7,7.D.T.2c,$13)}1U(d,7,I);8(c==0){e.2e();G 17(F,\'0 D 45 1M: 2r 3g.\')}17(F,\'70 \'+c+\' D 5D.\');J.Y+=c;2i(J.Y>=J.P){J.Y-=J.P}8(!7.1T){8(J.Y==0&&b.4G){b.4G.1g($13,\'V\')}8(!7.3A){3B(7,J.Y,F)}}y.14().18(J.P-c,J.P).86(y);8(J.P<7.D.L+c){y.14().18(0,(7.D.L+c)-J.P).4H(I).46(y)}E d=y.14(),3j=71(d,7,c),2j=72(d,7),1Y=d.1O(c-1),20=3j.2R(),2t=2j.2R();1U(d,7);E h=0,2D=0;8(7.1A){E p=4I(2j,7);h=p[0];2D=p[1]}E i=(h<0)?7.1i[7.d[3]]:0;E j=K,2S=$();8(7.D.L<c){2S=d.18(7.D.T.1Z,c);8(b.1V==\'73\'){E k=7.D[7.d[\'N\']];j=2S;1Y=2t;5E(j);7.D[7.d[\'N\']]=\'1c\'}}E l=K,3C=2T(d.18(0,c),7,\'N\'),2k=4J(4K(2j,7,I),7,!7.1R),3D=0,28={},4L={},2u={},2U={},4M={},2V={},5F={},2W=5G(b,7,c,3C);1B(b.1V){Q\'1J\':Q\'1J-1w\':3D=2T(d.18(0,7.D.L),7,\'N\');16}8(j){7.D[7.d[\'N\']]=k}1U(d,7,I);8(2D>=0){1U(20,7,7.1i[7.d[1]])}8(h>=0){1U(1Y,7,7.1i[7.d[3]])}8(7.1A){7.1i[7.d[1]]=2D;7.1i[7.d[3]]=h}2V[7.d[\'1n\']]=-(3C-i);5F[7.d[\'1n\']]=-(3D-i);4L[7.d[\'1n\']]=2k[7.d[\'N\']];E m=C(){},1P=C(){},1C=C(){},3E=C(){},2E=C(){},5H=C(){},1D=C(){},3F=C(){},1x=C(){},1y=C(){},1K=C(){};1B(b.1V){Q\'3k\':Q\'1J\':Q\'1J-1w\':Q\'21\':Q\'21-1w\':l=y.4H(I).46($1s);16}1B(b.1V){Q\'3k\':Q\'21\':Q\'21-1w\':l.14().18(0,c).2v();l.14().18(7.D.T.1Z).2v();16;Q\'1J\':Q\'1J-1w\':l.14().18(7.D.L).2v();l.X(5F);16}y.X(2V);U=47(2W,b.2l);28[7.d[\'1n\']]=(7.1R)?7.1i[7.d[3]]:0;8(7[7.d[\'N\']]==\'1c\'||7[7.d[\'1d\']]==\'1c\'){m=C(){$1s.X(2k)};1P=C(){U.19.1b([$1s,2k])}}8(7.1R){8(2t.4N(1Y).R){2u[7.d[\'1S\']]=1Y.1m(\'29\');8(h<0){1Y.X(2u)}O{1D=C(){1Y.X(2u)};3F=C(){U.19.1b([1Y,2u])}}}1B(b.1V){Q\'1J\':Q\'1J-1w\':l.14().1O(c-1).X(2u);16}8(2t.4N(20).R){2U[7.d[\'1S\']]=20.1m(\'29\');1C=C(){20.X(2U)};3E=C(){U.19.1b([20,2U])}}8(2D>=0){4M[7.d[\'1S\']]=2t.1m(\'29\')+7.1i[7.d[1]];2E=C(){2t.X(4M)};5H=C(){U.19.1b([2t,4M])}}}1K=C(){y.X(28)};E n=7.D.L+c-J.P;1y=C(){8(n>0){y.14().18(J.P).2v();3j=$(y.14().18(J.P-(7.D.L-n)).3G().74(y.14().18(0,n).3G()))}5I(j);8(7.1R){E a=y.14().1O(7.D.L+c-1);a.X(7.d[\'1S\'],a.1m(\'29\'))}};E o=5J(3j,2S,2j,c,\'V\',2W,2k);1x=C(){5K(y,l,b);z.25=K;2a.3i=48($13,b,\'3i\',o,2a);2h=5L(y,2h,F);8(!z.26){y.S(H(\'1G\',F))}};z.25=I;1u=3u(1u);2a.3H=48($13,b,\'3H\',o,2a);1B(b.1V){Q\'41\':y.X(28);m();1C();2E();1D();1K();1y();1x();16;Q\'1w\':U.19.1b([y,{\'1L\':0},C(){m();1C();2E();1D();1K();1y();U=47(2W,b.2l);U.19.1b([y,{\'1L\':1},1x]);2P(U)}]);16;Q\'3k\':y.X({\'1L\':0});U.19.1b([l,{\'1L\':0}]);U.19.1b([y,{\'1L\':1},1x]);1P();1C();2E();1D();1K();1y();16;Q\'1J\':U.19.1b([l,28,C(){1C();2E();1D();1K();1y();1x()}]);1P();16;Q\'1J-1w\':U.19.1b([y,{\'1L\':0}]);U.19.1b([l,28,C(){y.X({\'1L\':1});1C();2E();1D();1K();1y();1x()}]);1P();16;Q\'21\':U.19.1b([l,4L,1x]);1P();1C();2E();1D();1K();1y();16;Q\'21-1w\':y.X({\'1L\':0});U.19.1b([y,{\'1L\':1}]);U.19.1b([l,4L,1x]);1P();1C();2E();1D();1K();1y();16;2A:U.19.1b([y,28,C(){1y();1x()}]);1P();3E();5H();3F();16}2P(U);5M(7.23,y,F);y.S(H(\'3I\',F),[K,2k]);G I});y.12(H(\'87\',F),C(e,c,d){e.1f();E f=y.14();8(!7.1T){8(J.Y==7.D.L){8(7.3A){y.S(H(\'V\',F),J.P-1)}G e.2e()}}1U(f,7);8(!11(d)){8(7.D.1t!=\'*\'){E g=(11(c.D))?c.D:5C(y,7);d=75(f,7,0,g)}O{d=7.D.L}d=4F(d,7,c.D,$13)}E h=(J.Y==0)?J.P:J.Y;8(!7.1T){8(7.D.T.1c){E i=35(f,7,d),g=4E(f,7,h-1)}O{E i=7.D.L,g=7.D.L}8(d+i>h){d=h-g}}7.D.T.1Z=7.D.L;8(7.D.T.1c){E i=2z(5N(f,7,d,h),7,7.D.T.2c,$13);2i(7.D.L-d>=i&&d<J.P){d++;i=2z(5N(f,7,d,h),7,7.D.T.2c,$13)}7.D.L=i}O 8(7.D.1t!=\'*\'){E i=3X(f,7,d);7.D.L=2z(i,7,7.D.T.2c,$13)}1U(f,7,I);8(d==0){e.2e();G 17(F,\'0 D 45 1M: 2r 3g.\')}17(F,\'70 \'+d+\' D 76.\');J.Y-=d;2i(J.Y<0){J.Y+=J.P}8(!7.1T){8(J.Y==7.D.L&&c.4G){c.4G.1g($13,\'Z\')}8(!7.3A){3B(7,J.Y,F)}}8(J.P<7.D.L+d){y.14().18(0,(7.D.L+d)-J.P).4H(I).46(y)}E f=y.14(),3j=77(f,7),2j=78(f,7,d),1Y=f.1O(d-1),20=3j.2R(),2t=2j.2R();1U(f,7);E j=0,2D=0;8(7.1A){E p=4I(2j,7);j=p[0];2D=p[1]}E k=K,2S=$();8(7.D.T.1Z<d){2S=f.18(7.D.T.1Z,d);8(c.1V==\'73\'){E l=7.D[7.d[\'N\']];k=2S;1Y=20;5E(k);7.D[7.d[\'N\']]=\'1c\'}}E m=K,3C=2T(f.18(0,d),7,\'N\'),2k=4J(4K(2j,7,I),7,!7.1R),3D=0,28={},4O={},2u={},2U={},2V={},2W=5G(c,7,d,3C);1B(c.1V){Q\'21\':Q\'21-1w\':3D=2T(f.18(0,7.D.T.1Z),7,\'N\');16}8(k){7.D[7.d[\'N\']]=l}8(7.1A){8(7.1i[7.d[1]]<0){7.1i[7.d[1]]=0}}1U(f,7,I);1U(20,7,7.1i[7.d[1]]);8(7.1A){7.1i[7.d[1]]=2D;7.1i[7.d[3]]=j}2V[7.d[\'1n\']]=(7.1R)?7.1i[7.d[3]]:0;E n=C(){},1P=C(){},1C=C(){},3E=C(){},1D=C(){},3F=C(){},1x=C(){},1y=C(){},1K=C(){};1B(c.1V){Q\'3k\':Q\'1J\':Q\'1J-1w\':Q\'21\':Q\'21-1w\':m=y.4H(I).46($1s);m.14().18(7.D.T.1Z).2v();16}1B(c.1V){Q\'3k\':Q\'1J\':Q\'1J-1w\':y.X(\'3Z\',1);m.X(\'3Z\',0);16}U=47(2W,c.2l);28[7.d[\'1n\']]=-3C;4O[7.d[\'1n\']]=-3D;8(j<0){28[7.d[\'1n\']]+=j}8(7[7.d[\'N\']]==\'1c\'||7[7.d[\'1d\']]==\'1c\'){n=C(){$1s.X(2k)};1P=C(){U.19.1b([$1s,2k])}}8(7.1R){E o=2t.1m(\'29\');8(2D>=0){o+=7.1i[7.d[1]]}2t.X(7.d[\'1S\'],o);8(1Y.4N(20).R){2U[7.d[\'1S\']]=20.1m(\'29\')}1C=C(){20.X(2U)};3E=C(){U.19.1b([20,2U])};E q=1Y.1m(\'29\');8(j>0){q+=7.1i[7.d[3]]}2u[7.d[\'1S\']]=q;1D=C(){1Y.X(2u)};3F=C(){U.19.1b([1Y,2u])}}1K=C(){y.X(2V)};E r=7.D.L+d-J.P;1y=C(){8(r>0){y.14().18(J.P).2v()}E a=y.14().18(0,d).46(y).2R();8(r>0){2j=3J(f,7)}5I(k);8(7.1R){8(J.P<7.D.L+d){E b=y.14().1O(7.D.L-1);b.X(7.d[\'1S\'],b.1m(\'29\')+7.1i[7.d[3]])}a.X(7.d[\'1S\'],a.1m(\'29\'))}};E s=5J(3j,2S,2j,d,\'Z\',2W,2k);1x=C(){y.X(\'3Z\',y.1m(\'5t\').3Z);5K(y,m,c);z.25=K;2a.3i=48($13,c,\'3i\',s,2a);2h=5L(y,2h,F);8(!z.26){y.S(H(\'1G\',F))}};z.25=I;1u=3u(1u);2a.3H=48($13,c,\'3H\',s,2a);1B(c.1V){Q\'41\':y.X(28);n();1C();1D();1K();1y();1x();16;Q\'1w\':U.19.1b([y,{\'1L\':0},C(){n();1C();1D();1K();1y();U=47(2W,c.2l);U.19.1b([y,{\'1L\':1},1x]);2P(U)}]);16;Q\'3k\':y.X({\'1L\':0});U.19.1b([m,{\'1L\':0}]);U.19.1b([y,{\'1L\':1},1x]);1P();1C();1D();1K();1y();16;Q\'1J\':y.X(7.d[\'1n\'],$1s[7.d[\'N\']]());U.19.1b([y,2V,1x]);1P();1C();1D();1y();16;Q\'1J-1w\':y.X(7.d[\'1n\'],$1s[7.d[\'N\']]());U.19.1b([m,{\'1L\':0}]);U.19.1b([y,2V,1x]);1P();1C();1D();1y();16;Q\'21\':U.19.1b([m,4O,1x]);1P();1C();1D();1K();1y();16;Q\'21-1w\':y.X({\'1L\':0});U.19.1b([y,{\'1L\':1}]);U.19.1b([m,4O,1x]);1P();1C();1D();1K();1y();16;2A:U.19.1b([y,28,C(){1K();1y();1x()}]);1P();3E();3F();16}2P(U);5M(7.23,y,F);y.S(H(\'3I\',F),[K,2k]);G I});y.12(H(\'3l\',F),C(e,b,c,d,f,g,h){e.1f();E v=[b,c,d,f,g,h],t=[\'2N/27/2g\',\'27\',\'3e\',\'2g\',\'2N\',\'C\'],a=3f(v,t);f=a[3];g=a[4];h=a[5];b=3K(a[0],a[1],a[2],J,y);8(b==0){G K}8(!1I(f)){f=K}8(g!=\'V\'&&g!=\'Z\'){8(7.1T){g=(b<=J.P/2)?\'Z\':\'V\'}O{g=(J.Y==0||J.Y>b)?\'Z\':\'V\'}}8(g==\'V\'){b=J.P-b}y.S(H(g,F),[f,b,h]);G I});y.12(H(\'88\',F),C(e,a,b){e.1f();E c=y.1Q(H(\'4a\',F));G y.1Q(H(\'5O\',F),[c-1,a,\'V\',b])});y.12(H(\'89\',F),C(e,a,b){e.1f();E c=y.1Q(H(\'4a\',F));G y.1Q(H(\'5O\',F),[c+1,a,\'Z\',b])});y.12(H(\'5O\',F),C(e,a,b,c,d){e.1f();8(!11(a)){a=y.1Q(H(\'4a\',F))}E f=7.1a.D||7.D.L,1X=1H.2C(J.P/f)-1;8(a<0){a=1X}8(a>1X){a=0}G y.1Q(H(\'3l\',F),[a*f,0,I,b,c,d])});y.12(H(\'79\',F),C(e,s){e.1f();8(s){s=3K(s,0,I,J,y)}O{s=0}s+=J.Y;8(s!=0){8(J.P>0){2i(s>J.P){s-=J.P}}y.8a(y.14().18(s,J.P))}G I});y.12(H(\'2p\',F),C(e,s){e.1f();8(s){s=5l(s)}O 8(7.2p){s=7.2p}O{G 17(F,\'6t 8b 45 2p.\')}E n=y.1Q(H(\'4q\',F)),x=I;1j(E j=0,l=s.R;j<l;j++){8(!s[j][0].1Q(H(\'3l\',F),[n,s[j][3],I])){x=K}}G x});y.12(H(\'2Q\',F),C(e,a,b){e.1f();8(1o(a)){a.1g($13,2h)}O 8(2X(a)){2h=a}O 8(!1E(a)){2h.1b([a,b])}G 2h});y.12(H(\'8c\',F),C(e,b,c,d,f){e.1f();E v=[b,c,d,f],t=[\'2N/2g\',\'2N/27/2g\',\'3e\',\'27\'],a=3f(v,t);b=a[0];c=a[1];d=a[2];f=a[3];8(1I(b)&&!2w(b)){b=$(b)}O 8(1p(b)){b=$(b)}8(!2w(b)||b.R==0){G 17(F,\'2r a 5P 2g.\')}8(1E(c)){c=\'4b\'}4z(b,7);5u(b,7);E g=c,4c=\'4c\';8(c==\'4b\'){8(d){8(J.Y==0){c=J.P-1;4c=\'7a\'}O{c=J.Y;J.Y+=b.R}8(c<0){c=0}}O{c=J.P-1;4c=\'7a\'}}O{c=3K(c,f,d,J,y)}E h=y.14().1O(c);8(h.R){h[4c](b)}O{17(F,\'8d 8e-3s 4N 6u! 8f 8g 45 3L 4b.\');y.7b(b)}8(g!=\'4b\'&&!d){8(c<J.Y){J.Y+=b.R}}J.P=y.14().R;8(J.Y>=J.P){J.Y-=J.P}y.S(H(\'4P\',F));y.S(H(\'5Q\',F));G I});y.12(H(\'7c\',F),C(e,c,d,f){e.1f();E v=[c,d,f],t=[\'2N/27/2g\',\'3e\',\'27\'],a=3f(v,t);c=a[0];d=a[1];f=a[2];E g=K;8(c 2Y $&&c.R>1){h=$();c.1W(C(i,a){E b=y.S(H(\'7c\',F),[$(1k),d,f]);8(b)h=h.8h(b)});G h}8(1E(c)||c==\'4b\'){h=y.14().2R()}O{c=3K(c,f,d,J,y);E h=y.14().1O(c);8(h.R){8(c<J.Y)J.Y-=h.R}}8(h&&h.R){h.8i();J.P=y.14().R;y.S(H(\'4P\',F))}G h});y.12(H(\'3H\',F)+\' \'+H(\'3i\',F),C(e,a){e.1f();E b=e.5A.18(F.3z.44.R);8(2X(a)){2a[b]=a}8(1o(a)){2a[b].1b(a)}G 2a[b]});y.12(H(\'4q\',F),C(e,a){e.1f();8(J.Y==0){E b=0}O{E b=J.P-J.Y}8(1o(a)){a.1g($13,b)}G b});y.12(H(\'4a\',F),C(e,a){e.1f();E b=7.1a.D||7.D.L,1X=1H.2C(J.P/b-1),2m;8(J.Y==0){2m=0}O 8(J.Y<J.P%b){2m=0}O 8(J.Y==b&&!7.1T){2m=1X}O{2m=1H.7d((J.P-J.Y)/b)}8(2m<0){2m=0}8(2m>1X){2m=1X}8(1o(a)){a.1g($13,2m)}G 2m});y.12(H(\'8j\',F),C(e,a){e.1f();E b=3J(y.14(),7);8(1o(a)){a.1g($13,b)}G b});y.12(H(\'18\',F),C(e,f,l,b){e.1f();8(J.P==0){G K}E v=[f,l,b],t=[\'27\',\'27\',\'C\'],a=3f(v,t);f=(11(a[0]))?a[0]:0;l=(11(a[1]))?a[1]:J.P;b=a[2];f+=J.Y;l+=J.Y;8(D.P>0){2i(f>J.P){f-=J.P}2i(l>J.P){l-=J.P}2i(f<0){f+=J.P}2i(l<0){l+=J.P}}E c=y.14(),$i;8(l>f){$i=c.18(f,l)}O{$i=$(c.18(f,J.P).3G().74(c.18(0,l).3G()))}8(1o(b)){b.1g($13,$i)}G $i});y.12(H(\'26\',F)+\' \'+H(\'2d\',F)+\' \'+H(\'25\',F),C(e,a){e.1f();E b=e.5A.18(F.3z.44.R),5R=z[b];8(1o(a)){a.1g($13,5R)}G 5R});y.12(H(\'4D\',F),C(e,a,b,c){e.1f();E d=K;8(1o(a)){a.1g($13,7)}O 8(1I(a)){34=$.1N(I,{},34,a);8(b!==K)d=I;O 7=$.1N(I,{},7,a)}O 8(!1E(a)){8(1o(b)){E f=4Q(\'7.\'+a);8(1E(f)){f=\'\'}b.1g($13,f)}O 8(!1E(b)){8(2Z c!==\'3e\')c=I;4Q(\'34.\'+a+\' = b\');8(c!==K)d=I;O 4Q(\'7.\'+a+\' = b\')}O{G 4Q(\'7.\'+a)}}8(d){1U(y.14(),7);y.5b(34);y.5S();E g=4R(y,7);y.S(H(\'3I\',F),[I,g])}G 7});y.12(H(\'5Q\',F),C(e,a,b){e.1f();8(1E(a)){a=$(\'8k\')}O 8(1p(a)){a=$(a)}8(!2w(a)||a.R==0){G 17(F,\'2r a 5P 2g.\')}8(!1p(b)){b=\'a.6s\'}a.8l(b).1W(C(){E h=1k.7e||\'\';8(h.R>0&&y.14().7f($(h))!=-1){$(1k).22(\'5T\').5T(C(e){e.2F();y.S(H(\'3l\',F),h)})}});G I});y.12(H(\'3I\',F),C(e,b,c){e.1f();8(!7.1a.1z){G}E d=7.1a.D||7.D.L,4S=1H.2C(J.P/d);8(b){8(7.1a.3M){7.1a.1z.14().2v();7.1a.1z.1W(C(){1j(E a=0;a<4S;a++){E i=y.14().1O(3K(a*d,0,I,J,y));$(1k).7b(7.1a.3M.1g(i[0],a+1))}})}7.1a.1z.1W(C(){$(1k).14().22(7.1a.3N).1W(C(a){$(1k).12(7.1a.3N,C(e){e.2F();y.S(H(\'3l\',F),[a*d,-7.1a.4T,I,7.1a])})})})}E f=y.1Q(H(\'4a\',F))+7.1a.4T;8(f>=4S){f=0}8(f<0){f=4S-1}7.1a.1z.1W(C(){$(1k).14().2O(2B(\'7g\',F)).1O(f).3b(2B(\'7g\',F))});G I});y.12(H(\'4P\',F),C(e){E a=7.D.L,2G=y.14(),2n=5e($1s,7,\'N\');J.P=2G.R;8(z.4t){7.3V=2n;7[7.d[\'N\']]=4u(2n,z.4t)}O{7.3V=5f(7,2n)}8(7.2o){7.D.N=7.D.3O.N;7.D.1d=7.D.3O.1d;7=5h(7,2G,2n);a=7.D.L;5v(7,2G)}O 8(7.D.T.1c){a=35(2G,7,0)}O 8(7.D.1t!=\'*\'){a=3X(2G,7,0)}8(!7.1T&&J.Y!=0&&a>J.Y){8(7.D.T.1c){E b=4E(2G,7,J.Y)-J.Y}O 8(7.D.1t!=\'*\'){E b=7h(2G,7,J.Y)-J.Y}O{E b=7.D.L-J.Y}17(F,\'8m 8n-1T: 8o \'+b+\' D 5D.\');y.S(H(\'V\',F),b)}7.D.L=2z(a,7,7.D.T.2c,$13);7.D.T.1Z=7.D.L;7=5j(7,2G);E c=4R(y,7);y.S(H(\'3I\',F),[I,c]);4U(7,J.P,F);3B(7,J.Y,F);G c});y.12(H(\'4r\',F),C(e,a){e.1f();1u=3u(1u);y.1m(\'5a\',K);y.S(H(\'5y\',F));8(a){y.S(H(\'79\',F))}1U(y.14(),7);8(7.2o){y.14().1W(C(){$(1k).X($(1k).1m(\'7i\'))})}y.X(y.1m(\'5t\'));y.5w();y.5U();$1s.8p(y);G I});y.12(H(\'17\',F),C(e){17(F,\'3y N: \'+7.N);17(F,\'3y 1d: \'+7.1d);17(F,\'7j 8q: \'+7.D.N);17(F,\'7j 8r: \'+7.D.1d);17(F,\'4d 4e D L: \'+7.D.L);8(7.M.1G){17(F,\'4d 4e D 5V 8s: \'+7.M.D)}8(7.V.W){17(F,\'4d 4e D 5V 5D: \'+7.V.D)}8(7.Z.W){17(F,\'4d 4e D 5V 76: \'+7.Z.D)}G F.17});y.12(\'3p\',C(e,n,o){e.1f();G y.1Q(H(n,F),o)})};y.5w=C(){y.22(H(\'\',F));y.22(H(\'\',F,K));y.22(\'3p\')};y.5S=C(){y.5U();4U(7,J.P,F);3B(7,J.Y,F);8(7.M.2H){E b=3P(7.M.2H);$1s.12(H(\'4V\',F,K),C(){y.S(H(\'3c\',F),b)}).12(H(\'4W\',F,K),C(){y.S(H(\'3h\',F))})}8(7.M.W){7.M.W.12(H(7.M.3N,F,K),C(e){e.2F();E a=K,b=2x;8(z.26){a=\'1G\'}O 8(7.M.4X){a=\'3c\';b=3P(7.M.4X)}8(a){y.S(H(a,F),b)}})}8(7.V.W){7.V.W.12(H(7.V.3N,F,K),C(e){e.2F();y.S(H(\'V\',F))});8(7.V.2H){E b=3P(7.V.2H);7.V.W.12(H(\'4V\',F,K),C(){y.S(H(\'3c\',F),b)}).12(H(\'4W\',F,K),C(){y.S(H(\'3h\',F))})}}8(7.Z.W){7.Z.W.12(H(7.Z.3N,F,K),C(e){e.2F();y.S(H(\'Z\',F))});8(7.Z.2H){E b=3P(7.Z.2H);7.Z.W.12(H(\'4V\',F,K),C(){y.S(H(\'3c\',F),b)}).12(H(\'4W\',F,K),C(){y.S(H(\'3h\',F))})}}8(7.1a.1z){8(7.1a.2H){E b=3P(7.1a.2H);7.1a.1z.12(H(\'4V\',F,K),C(){y.S(H(\'3c\',F),b)}).12(H(\'4W\',F,K),C(){y.S(H(\'3h\',F))})}}8(7.V.31||7.Z.31){$(4f).12(H(\'7k\',F,K,I,I),C(e){E k=e.7l;8(k==7.Z.31){e.2F();y.S(H(\'Z\',F))}8(k==7.V.31){e.2F();y.S(H(\'V\',F))}})}8(7.1a.4Y){$(4f).12(H(\'7k\',F,K,I,I),C(e){E k=e.7l;8(k>=49&&k<58){k=(k-49)*7.D.L;8(k<=J.P){e.2F();y.S(H(\'3l\',F),[k,0,I,7.1a])}}})}8(7.V.4Z||7.Z.4Z){2K(\'3L 4g-7m\',\'3L 8t-7m\');8($.1r.4g){E c=(7.V.4Z)?C(){y.S(H(\'V\',F))}:2x,4h=(7.Z.4Z)?C(){y.S(H(\'Z\',F))}:2x;8(4h||4h){8(!z.4g){z.4g=I;E d={\'8u\':30,\'8v\':30,\'8w\':I};1B(7.2b){Q\'4s\':Q\'5W\':d.8x=c;d.8y=4h;16;2A:d.8z=4h;d.8A=c}$1s.4g(d)}}}}8($.1r.1q){E f=\'8B\'8C 3m;8((f&&7.1q.4i)||(!f&&7.1q.5X)){E g=$.1N(I,{},7.V,7.1q),7n=$.1N(I,{},7.Z,7.1q),5Y=C(){y.S(H(\'V\',F),[g])},5Z=C(){y.S(H(\'Z\',F),[7n])};1B(7.2b){Q\'4s\':Q\'5W\':7.1q.2I.8D=5Z;7.1q.2I.8E=5Y;16;2A:7.1q.2I.8F=5Z;7.1q.2I.8G=5Y}8(z.1q){y.1q(\'4r\')}$1s.1q(7.1q.2I);$1s.X(\'7o\',\'8H\');z.1q=I}}8($.1r.1h){8(7.V.1h){2K(\'7p V.1h 7q\',\'3L 1h 4D 2g\');7.V.1h=2x;7.1h={D:61(7.V.1h)}}8(7.Z.1h){2K(\'7p Z.1h 7q\',\'3L 1h 4D 2g\');7.Z.1h=2x;7.1h={D:61(7.Z.1h)}}8(7.1h){E h=$.1N(I,{},7.V,7.1h),7r=$.1N(I,{},7.Z,7.1h);8(z.1h){$1s.22(H(\'1h\',F,K))}$1s.12(H(\'1h\',F,K),C(e,a){e.2F();8(a>0){y.S(H(\'V\',F),[h])}O{y.S(H(\'Z\',F),[7r])}});z.1h=I}}8(7.M.1G){y.S(H(\'1G\',F),7.M.62)}8(z.6F){E i=C(e){y.S(H(\'5y\',F));8(7.M.63&&!z.26){y.S(H(\'1G\',F))}1U(y.14(),7);y.S(H(\'4P\',F))};E j=$(3m),4j=2x;8($.64&&F.65==\'64\'){4j=$.64(8I,i)}O 8($.51&&F.65==\'51\'){4j=$.51(8J,i)}O{E l=0,66=0;4j=C(){E a=j.N(),68=j.1d();8(a!=l||68!=66){i();l=a;66=68}}}j.12(H(\'8K\',F,K,I,I),4j)}};y.5U=C(){E a=H(\'\',F),3Q=H(\'\',F,K);69=H(\'\',F,K,I,I);$(4f).22(69);$(3m).22(69);$1s.22(3Q);8(7.M.W){7.M.W.22(3Q)}8(7.V.W){7.V.W.22(3Q)}8(7.Z.W){7.Z.W.22(3Q)}8(7.1a.1z){7.1a.1z.22(3Q);8(7.1a.3M){7.1a.1z.14().2v()}}8(z.1q){y.1q(\'4r\');$1s.X(\'7o\',\'2A\');z.1q=K}8(z.1h){z.1h=K}4U(7,\'4k\',F);3B(7,\'2O\',F)};8(1l(w)){w={\'17\':w}}E z={\'2b\':\'Z\',\'26\':I,\'25\':K,\'2d\':K,\'1h\':K,\'1q\':K},J={\'P\':y.14().R,\'Y\':0},1u={\'M\':2x,\'1e\':2x,\'2M\':2q(),\'3x\':0},U={\'2d\':K,\'1F\':0,\'2M\':0,\'2l\':\'\',\'19\':[]},2a={\'3H\':[],\'3i\':[]},2h=[],F=$.1N(I,{},$.1r.1v.7s,w),7={},34=$.1N(I,{},u),$1s=y.8L(\'<\'+F.6a.57+\' 8M="\'+F.6a.7t+\'" />\').6b();F.4p=y.4p;F.3U=$.1r.1v.3U++;y.5b(34,I,59);y.6N();y.6T();y.5S();8(2X(7.D.3n)){E A=7.D.3n}O{E A=[];8(7.D.3n!=0){A.1b(7.D.3n)}}8(7.23){A.8N(4l(7u(7.23),10))}8(A.R>0){1j(E a=0,l=A.R;a<l;a++){E s=A[a];8(s==0){6c}8(s===I){s=3m.8O.7e;8(s.R<1){6c}}O 8(s===\'7v\'){s=1H.4m(1H.7v()*J.P)}8(y.1Q(H(\'3l\',F),[s,0,I,{1V:\'41\'}])){16}}}E B=4R(y,7),7w=3J(y.14(),7);8(7.7x){7.7x.1g($13,{\'N\':B.N,\'1d\':B.1d,\'D\':7w})}y.S(H(\'3I\',F),[I,B]);y.S(H(\'5Q\',F));8(F.17){y.S(H(\'17\',F))}G y};$.1r.1v.3U=1;$.1r.1v.5d={\'2p\':K,\'3A\':I,\'1T\':I,\'2o\':K,\'2b\':\'1n\',\'D\':{\'3n\':0},\'1M\':{\'2l\':\'8P\',\'1F\':6I,\'2H\':K,\'3N\':\'5T\',\'2Q\':K}};$.1r.1v.7s={\'17\':K,\'65\':\'51\',\'3z\':{\'44\':\'\',\'7y\':\'8Q\'},\'6a\':{\'57\':\'8R\',\'7t\':\'8S\'},\'6d\':{}};$.1r.1v.7z=C(a){G\'<a 8T="#"><7A>\'+a+\'</7A></a>\'};$.1r.1v.7B=C(a){$(1k).X(\'N\',a+\'%\')};$.1r.1v.23={3G:C(n){n+=\'=\';E b=4f.23.3R(\';\');1j(E a=0,l=b.R;a<l;a++){E c=b[a];2i(c.8U(0)==\' \'){c=c.18(1)}8(c.3S(n)==0){G c.18(n.R)}}G 0},6e:C(n,v,d){E e="";8(d){E a=6f 7C();a.8V(a.2q()+(d*24*60*60*8W));e="; 8X="+a.8Y()}4f.23=n+\'=\'+v+e+\'; 8Z=/\'},2v:C(n){$.1r.1v.23.6e(n,"",-1)}};C 47(d,e){G{19:[],1F:d,90:d,2l:e,2M:2q()}}C 2P(s){8(1I(s.3v)){2P(s.3v)}1j(E a=0,l=s.19.R;a<l;a++){E b=s.19[a];8(!b){6c}8(b[3]){b[0].5x()}b[0].91(b[1],{92:b[2],1F:s.1F,2l:s.2l})}8(1I(s.3w)){2P(s.3w)}}C 42(s,c){8(!1l(c)){c=I}8(1I(s.3v)){42(s.3v,c)}1j(E a=0,l=s.19.R;a<l;a++){E b=s.19[a];b[0].5x(I);8(c){b[0].X(b[1]);8(1o(b[2])){b[2]()}}}8(1I(s.3w)){42(s.3w,c)}}C 5K(a,b,o){8(b){b.2v()}1B(o.1V){Q\'1w\':Q\'3k\':Q\'1J-1w\':Q\'21-1w\':a.X(\'1t\',\'\');16}}C 48(d,o,b,a,c){8(o[b]){o[b].1g(d,a)}8(c[b].R){1j(E i=0,l=c[b].R;i<l;i++){c[b][i].1g(d,a)}}G[]}C 5L(a,q,c){8(q.R){a.S(H(q[0][0],c),q[0][1]);q.93()}G q}C 5E(b){b.1W(C(){E a=$(1k);a.1m(\'7D\',a.2f(\':3t\')).4k()})}C 5I(b){8(b){b.1W(C(){E a=$(1k);8(!a.1m(\'7D\')){a.4n()}})}}C 3u(t){8(t.M){94(t.M)}8(t.1e){95(t.1e)}G t}C 5J(a,b,c,d,e,f,g){G{\'N\':g.N,\'1d\':g.1d,\'D\':{\'1Z\':a,\'96\':b,\'L\':c,\'6f\':c},\'1M\':{\'D\':d,\'2b\':e,\'1F\':f}}}C 5G(a,o,b,c){E d=a.1F;8(a.1V==\'41\'){G 0}8(d==\'M\'){d=o.1M.1F/o.1M.D*b}O 8(d<10){d=c/d}8(d<1){G 0}8(a.1V==\'1w\'){d=d/2}G 1H.7d(d)}C 4U(o,t,c){E a=(11(o.D.4C))?o.D.4C:o.D.L+1;8(t==\'4n\'||t==\'4k\'){E f=t}O 8(a>t){17(c,\'2r 6V D (\'+t+\' P, \'+a+\' 6W): 97 98.\');E f=\'4k\'}O{E f=\'4n\'}E s=(f==\'4n\')?\'2O\':\'3b\',h=2B(\'3t\',c);8(o.M.W){o.M.W[f]()[s](h)}8(o.V.W){o.V.W[f]()[s](h)}8(o.Z.W){o.Z.W[f]()[s](h)}8(o.1a.1z){o.1a.1z[f]()[s](h)}}C 3B(o,f,c){8(o.1T||o.3A)G;E a=(f==\'2O\'||f==\'3b\')?f:K,52=2B(\'99\',c);8(o.M.W&&a){o.M.W[a](52)}8(o.V.W){E b=a||(f==0)?\'3b\':\'2O\';o.V.W[b](52)}8(o.Z.W){E b=a||(f==o.D.L)?\'3b\':\'2O\';o.Z.W[b](52)}}C 3T(a,b){8(1o(b)){b=b.1g(a)}O 8(1E(b)){b={}}G b}C 6v(a,b){b=3T(a,b);8(11(b)){b={\'L\':b}}O 8(b==\'1c\'){b={\'L\':b,\'N\':b,\'1d\':b}}O 8(!1I(b)){b={}}G b}C 6w(a,b){b=3T(a,b);8(11(b)){8(b<=50){b={\'D\':b}}O{b={\'1F\':b}}}O 8(1p(b)){b={\'2l\':b}}O 8(!1I(b)){b={}}G b}C 53(a,b){b=3T(a,b);8(1p(b)){E c=6g(b);8(c==-1){b=$(b)}O{b=c}}G b}C 6x(a,b){b=53(a,b);8(2w(b)){b={\'W\':b}}O 8(1l(b)){b={\'1G\':b}}O 8(11(b)){b={\'2L\':b}}8(b.1e){8(1p(b.1e)||2w(b.1e)){b.1e={\'2s\':b.1e}}}G b}C 6J(a,b){8(1o(b.W)){b.W=b.W.1g(a)}8(1p(b.W)){b.W=$(b.W)}8(!1l(b.1G)){b.1G=I}8(!11(b.62)){b.62=0}8(1E(b.4X)){b.4X=I}8(!1l(b.63)){b.63=I}8(!11(b.2L)){b.2L=(b.1F<10)?9a:b.1F*5}8(b.1e){8(1o(b.1e.2s)){b.1e.2s=b.1e.2s.1g(a)}8(1p(b.1e.2s)){b.1e.2s=$(b.1e.2s)}8(b.1e.2s){8(!1o(b.1e.4B)){b.1e.4B=$.1r.1v.7B}8(!11(b.1e.5z)){b.1e.5z=50}}O{b.1e=K}}G b}C 5c(a,b){b=53(a,b);8(2w(b)){b={\'W\':b}}O 8(11(b)){b={\'31\':b}}G b}C 5k(a,b){8(1o(b.W)){b.W=b.W.1g(a)}8(1p(b.W)){b.W=$(b.W)}8(1p(b.31)){b.31=6g(b.31)}G b}C 6y(a,b){b=53(a,b);8(2w(b)){b={\'1z\':b}}O 8(1l(b)){b={\'4Y\':b}}G b}C 6K(a,b){8(1o(b.1z)){b.1z=b.1z.1g(a)}8(1p(b.1z)){b.1z=$(b.1z)}8(!11(b.D)){b.D=K}8(!1l(b.4Y)){b.4Y=K}8(!1o(b.3M)&&!54(b.3M)){b.3M=$.1r.1v.7z}8(!11(b.4T)){b.4T=0}G b}C 6z(a,b){8(1o(b)){b=b.1g(a)}8(1E(b)){b={\'4i\':K}}8(3q(b)){b={\'4i\':b}}O 8(11(b)){b={\'D\':b}}G b}C 6L(a,b){8(!1l(b.4i)){b.4i=I}8(!1l(b.5X)){b.5X=K}8(!1I(b.2I)){b.2I={}}8(!1l(b.2I.7E)){b.2I.7E=K}G b}C 6A(a,b){8(1o(b)){b=b.1g(a)}8(3q(b)){b={}}O 8(11(b)){b={\'D\':b}}O 8(1E(b)){b=K}G b}C 6M(a,b){G b}C 3K(a,b,c,d,e){8(1p(a)){a=$(a,e)}8(1I(a)){a=$(a,e)}8(2w(a)){a=e.14().7f(a);8(!1l(c)){c=K}}O{8(!1l(c)){c=I}}8(!11(a)){a=0}8(!11(b)){b=0}8(c){a+=d.Y}a+=b;8(d.P>0){2i(a>=d.P){a-=d.P}2i(a<0){a+=d.P}}G a}C 4E(i,o,s){E t=0,x=0;1j(E a=s;a>=0;a--){E j=i.1O(a);t+=(j.2f(\':L\'))?j[o.d[\'2y\']](I):0;8(t>o.3V){G x}8(a==0){a=i.R}x++}}C 7h(i,o,s){G 6h(i,o.D.1t,o.D.T.4v,s)}C 6Z(i,o,s,m){G 6h(i,o.D.1t,m,s)}C 6h(i,f,m,s){E t=0,x=0;1j(E a=s,l=i.R;a>=0;a--){x++;8(x==l){G x}E j=i.1O(a);8(j.2f(f)){t++;8(t==m){G x}}8(a==0){a=l}}}C 5C(a,o){G o.D.T.4v||a.14().18(0,o.D.L).1t(o.D.1t).R}C 35(i,o,s){E t=0,x=0;1j(E a=s,l=i.R-1;a<=l;a++){E j=i.1O(a);t+=(j.2f(\':L\'))?j[o.d[\'2y\']](I):0;8(t>o.3V){G x}x++;8(x==l+1){G x}8(a==l){a=-1}}}C 5N(i,o,s,l){E v=35(i,o,s);8(!o.1T){8(s+v>l){v=l-s}}G v}C 3X(i,o,s){G 6i(i,o.D.1t,o.D.T.4v,s,o.1T)}C 75(i,o,s,m){G 6i(i,o.D.1t,m+1,s,o.1T)-1}C 6i(i,f,m,s,c){E t=0,x=0;1j(E a=s,l=i.R-1;a<=l;a++){x++;8(x>=l){G x}E j=i.1O(a);8(j.2f(f)){t++;8(t==m){G x}}8(a==l){a=-1}}}C 3J(i,o){G i.18(0,o.D.L)}C 71(i,o,n){G i.18(n,o.D.T.1Z+n)}C 72(i,o){G i.18(0,o.D.L)}C 77(i,o){G i.18(0,o.D.T.1Z)}C 78(i,o,n){G i.18(n,o.D.L+n)}C 4z(i,o,d){8(o.1R){8(!1p(d)){d=\'29\'}i.1W(C(){E j=$(1k),m=4l(j.X(o.d[\'1S\']),10);8(!11(m)){m=0}j.1m(d,m)})}}C 1U(i,o,m){8(o.1R){E x=(1l(m))?m:K;8(!11(m)){m=0}4z(i,o,\'7F\');i.1W(C(){E j=$(1k);j.X(o.d[\'1S\'],((x)?j.1m(\'7F\'):m+j.1m(\'29\')))})}}C 5u(i,o){8(o.2o){i.1W(C(){E j=$(1k),s=5q(j,[\'N\',\'1d\']);j.1m(\'7i\',s)})}}C 5v(o,b){E c=o.D.L,7G=o.D[o.d[\'N\']],6j=o[o.d[\'1d\']],7H=3W(6j);b.1W(C(){E a=$(1k),6k=7G-7I(a,o,\'9b\');a[o.d[\'N\']](6k);8(7H){a[o.d[\'1d\']](4u(6k,6j))}})}C 4R(a,o){E b=a.6b(),$i=a.14(),$v=3J($i,o),55=4J(4K($v,o,I),o,K);b.X(55);8(o.1R){E p=o.1i,r=p[o.d[1]];8(o.1A&&r<0){r=0}E c=$v.2R();c.X(o.d[\'1S\'],c.1m(\'29\')+r);a.X(o.d[\'3r\'],p[o.d[0]]);a.X(o.d[\'1n\'],p[o.d[3]])}a.X(o.d[\'N\'],55[o.d[\'N\']]+(2T($i,o,\'N\')*2));a.X(o.d[\'1d\'],6l($i,o,\'1d\'));G 55}C 4K(i,o,a){G[2T(i,o,\'N\',a),6l(i,o,\'1d\',a)]}C 6l(i,o,a,b){8(!1l(b)){b=K}8(11(o[o.d[a]])&&b){G o[o.d[a]]}8(11(o.D[o.d[a]])){G o.D[o.d[a]]}a=(a.6m().3S(\'N\')>-1)?\'2y\':\'3o\';G 4o(i,o,a)}C 4o(i,o,b){E s=0;1j(E a=0,l=i.R;a<l;a++){E j=i.1O(a);E m=(j.2f(\':L\'))?j[o.d[b]](I):0;8(s<m){s=m}}G s}C 2T(i,o,b,c){8(!1l(c)){c=K}8(11(o[o.d[b]])&&c){G o[o.d[b]]}8(11(o.D[o.d[b]])){G o.D[o.d[b]]*i.R}E d=(b.6m().3S(\'N\')>-1)?\'2y\':\'3o\',s=0;1j(E a=0,l=i.R;a<l;a++){E j=i.1O(a);s+=(j.2f(\':L\'))?j[o.d[d]](I):0}G s}C 5e(a,o,d){E b=a.2f(\':L\');8(b){a.4k()}E s=a.6b()[o.d[d]]();8(b){a.4n()}G s}C 5f(o,a){G(11(o[o.d[\'N\']]))?o[o.d[\'N\']]:a}C 6n(i,o,b){E s=K,v=K;1j(E a=0,l=i.R;a<l;a++){E j=i.1O(a);E c=(j.2f(\':L\'))?j[o.d[b]](I):0;8(s===K){s=c}O 8(s!=c){v=I}8(s==0){v=I}}G v}C 7I(i,o,d){G i[o.d[\'9c\'+d]](I)-i[o.d[d.6m()]]()}C 4u(s,o){8(3W(o)){o=4l(o.18(0,-1),10);8(!11(o)){G s}s*=o/2J}G s}C H(n,c,a,b,d){8(!1l(a)){a=I}8(!1l(b)){b=I}8(!1l(d)){d=K}8(a){n=c.3z.44+n}8(b){n=n+\'.\'+c.3z.7y}8(b&&d){n+=c.3U}G n}C 2B(n,c){G(1p(c.6d[n]))?c.6d[n]:n}C 4J(a,o,p){8(!1l(p)){p=I}E b=(o.1R&&p)?o.1i:[0,0,0,0];E c={};c[o.d[\'N\']]=a[0]+b[1]+b[3];c[o.d[\'1d\']]=a[1]+b[0]+b[2];G c}C 3f(c,d){E e=[];1j(E a=0,7J=c.R;a<7J;a++){1j(E b=0,7K=d.R;b<7K;b++){8(d[b].3S(2Z c[a])>-1&&1E(e[b])){e[b]=c[a];16}}}G e}C 6H(p){8(1E(p)){G[0,0,0,0]}8(11(p)){G[p,p,p,p]}8(1p(p)){p=p.3R(\'9d\').7L(\'\').3R(\'9e\').7L(\'\').3R(\' \')}8(!2X(p)){G[0,0,0,0]}1j(E i=0;i<4;i++){p[i]=4l(p[i],10)}1B(p.R){Q 0:G[0,0,0,0];Q 1:G[p[0],p[0],p[0],p[0]];Q 2:G[p[0],p[1],p[0],p[1]];Q 3:G[p[0],p[1],p[2],p[1]];2A:G[p[0],p[1],p[2],p[3]]}}C 4I(a,o){E x=(11(o[o.d[\'N\']]))?1H.2C(o[o.d[\'N\']]-2T(a,o,\'N\')):0;1B(o.1A){Q\'1n\':G[0,x];Q\'3a\':G[x,0];Q\'5g\':2A:G[1H.2C(x/2),1H.4m(x/2)]}}C 6B(o){E a=[[\'N\',\'7M\',\'2y\',\'1d\',\'7N\',\'3o\',\'1n\',\'3r\',\'1S\',0,1,2,3],[\'1d\',\'7N\',\'3o\',\'N\',\'7M\',\'2y\',\'3r\',\'1n\',\'5r\',3,2,1,0]];E b=a[0].R,7O=(o.2b==\'3a\'||o.2b==\'1n\')?0:1;E c={};1j(E d=0;d<b;d++){c[a[0][d]]=a[7O][d]}G c}C 4F(x,o,a,b){E v=x;8(1o(a)){v=a.1g(b,v)}O 8(1p(a)){E p=a.3R(\'+\'),m=a.3R(\'-\');8(m.R>p.R){E c=I,6o=m[0],32=m[1]}O{E c=K,6o=p[0],32=p[1]}1B(6o){Q\'9f\':v=(x%2==1)?x-1:x;16;Q\'9g\':v=(x%2==0)?x-1:x;16;2A:v=x;16}32=4l(32,10);8(11(32)){8(c){32=-32}v+=32}}8(!11(v)||v<1){v=1}G v}C 2z(x,o,a,b){G 6p(4F(x,o,a,b),o.D.T)}C 6p(v,i){8(11(i.36)&&v<i.36){v=i.36}8(11(i.1X)&&v>i.1X){v=i.1X}8(v<1){v=1}G v}C 5l(s){8(!2X(s)){s=[[s]]}8(!2X(s[0])){s=[s]}1j(E j=0,l=s.R;j<l;j++){8(1p(s[j][0])){s[j][0]=$(s[j][0])}8(!1l(s[j][1])){s[j][1]=I}8(!1l(s[j][2])){s[j][2]=I}8(!11(s[j][3])){s[j][3]=0}}G s}C 6g(k){8(k==\'3a\'){G 39}8(k==\'1n\'){G 37}8(k==\'4s\'){G 38}8(k==\'5W\'){G 40}G-1}C 5M(n,a,c){8(n){E v=a.1Q(H(\'4q\',c));$.1r.1v.23.6e(n,v)}}C 7u(n){E c=$.1r.1v.23.3G(n);G(c==\'\')?0:c}C 5q(a,b){E c={},56;1j(E p=0,l=b.R;p<l;p++){56=b[p];c[56]=a.X(56)}G c}C 6C(a,b,c,d){8(!1I(a.T)){a.T={}}8(!1I(a.3O)){a.3O={}}8(a.3n==0&&11(d)){a.3n=d}8(1I(a.L)){a.T.36=a.L.36;a.T.1X=a.L.1X;a.L=K}O 8(1p(a.L)){8(a.L==\'1c\'){a.T.1c=I}O{a.T.2c=a.L}a.L=K}O 8(1o(a.L)){a.T.2c=a.L;a.L=K}8(!1p(a.1t)){a.1t=(c.1t(\':3t\').R>0)?\':L\':\'*\'}8(!a[b.d[\'N\']]){8(b.2o){17(I,\'7P a \'+b.d[\'N\']+\' 1j 3L D!\');a[b.d[\'N\']]=4o(c,b,\'2y\')}O{a[b.d[\'N\']]=(6n(c,b,\'2y\'))?\'1c\':c[b.d[\'2y\']](I)}}8(!a[b.d[\'1d\']]){a[b.d[\'1d\']]=(6n(c,b,\'3o\'))?\'1c\':c[b.d[\'3o\']](I)}a.3O.N=a.N;a.3O.1d=a.1d;G a}C 6G(a,b){8(a.D[a.d[\'N\']]==\'1c\'){a.D.T.1c=I}8(!a.D.T.1c){8(11(a[a.d[\'N\']])){a.D.L=1H.4m(a[a.d[\'N\']]/a.D[a.d[\'N\']])}O{a.D.L=1H.4m(b/a.D[a.d[\'N\']]);a[a.d[\'N\']]=a.D.L*a.D[a.d[\'N\']];8(!a.D.T.2c){a.1A=K}}8(a.D.L==\'9h\'||a.D.L<1){17(I,\'2r a 5P 27 4e L D: 7P 45 "1c".\');a.D.T.1c=I}}G a}C 6D(a,b,c){8(a==\'M\'){a=4o(c,b,\'2y\')}G a}C 6E(a,b,c){8(a==\'M\'){a=4o(c,b,\'3o\')}8(!a){a=b.D[b.d[\'1d\']]}G a}C 5j(o,a){E p=4I(3J(a,o),o);o.1i[o.d[1]]=p[1];o.1i[o.d[3]]=p[0];G o}C 5h(o,a,b){E c=6p(1H.2C(o[o.d[\'N\']]/o.D[o.d[\'N\']]),o.D.T);8(c>a.R){c=a.R}E d=1H.4m(o[o.d[\'N\']]/c);o.D.L=c;o.D[o.d[\'N\']]=d;o[o.d[\'N\']]=c*d;G o}C 3P(p){8(1p(p)){E i=(p.3S(\'9i\')>-1)?I:K,r=(p.3S(\'3h\')>-1)?I:K}O{E i=r=K}G[i,r]}C 61(a){G(11(a))?a:2x}C 6q(a){G(a===2x)}C 1E(a){G(6q(a)||2Z a==\'7Q\'||a===\'\'||a===\'7Q\')}C 2X(a){G(a 2Y 9j)}C 2w(a){G(a 2Y 7R)}C 1I(a){G((a 2Y 9k||2Z a==\'2g\')&&!6q(a)&&!2w(a)&&!2X(a))}C 11(a){G((a 2Y 4d||2Z a==\'27\')&&!9l(a))}C 1p(a){G((a 2Y 9m||2Z a==\'2N\')&&!1E(a)&&!3q(a)&&!54(a))}C 1o(a){G(a 2Y 9n||2Z a==\'C\')}C 1l(a){G(a 2Y 9o||2Z a==\'3e\'||3q(a)||54(a))}C 3q(a){G(a===I||a===\'I\')}C 54(a){G(a===K||a===\'K\')}C 3W(x){G(1p(x)&&x.18(-1)==\'%\')}C 2q(){G 6f 7C().2q()}C 2K(o,n){17(I,o+\' 2f 9p, 9q 1j 9r 9s 9t 9u. 9v \'+n+\' 9w.\')}C 17(d,m){8(1I(d)){E s=\' (\'+d.4p+\')\';d=d.17}O{E s=\'\'}8(!d){G K}8(1p(m)){m=\'1v\'+s+\': \'+m}O{m=[\'1v\'+s+\':\',m]}8(3m.6r&&3m.6r.7S){3m.6r.7S(m)}G K}$.1N($.2l,{\'9x\':C(t){E a=t*t;G t*(-a*t+4*a-6*t+4)},\'9y\':C(t){G t*(4*t*t-9*t+6)},\'9z\':C(t){E a=t*t;G t*(33*a*a-9A*a*t+9B*a-67*t+15)}})})(7R);',62,596,'|||||||opts|if||||||||||||||||||||||||||||||function|items|var|conf|return|cf_e|true|itms|false|visible|auto|width|else|total|case|length|trigger|visibleConf|scrl|prev|button|css|first|next||is_number|bind|tt0|children||break|debug|slice|anims|pagination|push|variable|height|progress|stopPropagation|call|mousewheel|padding|for|this|is_boolean|data|left|is_function|is_string|swipe|fn|wrp|filter|tmrs|carouFredSel|fade|_onafter|_moveitems|container|align|switch|_s_paddingold|_s_paddingcur|is_undefined|duration|play|Math|is_object|cover|_position|opacity|scroll|extend|eq|_a_wrapper|triggerHandler|usePadding|marginRight|circular|sz_resetMargin|fx|each|max|i_cur_l|old|i_old_l|uncover|unbind|cookie||isScrolling|isPaused|number|a_cfs|_cfs_origCssMargin|clbk|direction|adjust|isStopped|stopImmediatePropagation|is|object|queu|while|i_new|w_siz|easing|nr|avail_primary|responsive|synchronise|getTime|Not|bar|i_new_l|a_cur|remove|is_jquery|null|outerWidth|cf_getItemsAdjust|default|cf_c|ceil|pR|_s_paddingnew|preventDefault|a_itm|pauseOnHover|options|100|deprecated|timeoutDuration|startTime|string|removeClass|sc_startScroll|queue|last|i_skp|ms_getTotalSize|a_old|a_lef|a_dur|is_array|instanceof|typeof||key|adj||opts_orig|gn_getVisibleItemsNext|min||||right|addClass|pause|perc|boolean|cf_sortParams|scrolling|resume|onAfter|i_old|crossfade|slideTo|window|start|outerHeight|_cfs_triggerEvent|is_true|top|position|hidden|sc_clearTimers|pre|post|timePassed|Carousel|events|infinite|nv_enableNavi|i_siz|i_siz_vis|_a_paddingold|_a_paddingcur|get|onBefore|updatePageStatus|gi_getCurrentItems|gn_getItemIndex|the|anchorBuilder|event|sizesConf|bt_pauseOnHoverConfig|ns2|split|indexOf|go_getObject|serialNumber|maxDimension|is_percentage|gn_getVisibleItemsNextFilter|orgCSS|zIndex||none|sc_stopScroll|dur2|prefix|to|appendTo|sc_setScroll|sc_fireCallbacks||currentPage|end|before|Number|of|document|touchwipe|wN|onTouch|onResize|hide|parseInt|floor|show|ms_getTrueLargestSize|selector|currentPosition|destroy|up|primarySizePercentage|ms_getPercentage|org|onTimeoutStart|onTimeoutPause|onTimeoutEnd|sz_storeMargin|stopped|updater|minimum|configuration|gn_getVisibleItemsPrev|cf_getAdjust|onEnd|clone|cf_getAlignPadding|cf_mapWrapperSizes|ms_getSizes|a_wsz|a_new|not|a_cfs_vis|updateSizes|eval|sz_setSizes|pgs|deviation|nv_showNavi|mouseenter|mouseleave|pauseOnEvent|keys|wipe||throttle|di|go_getNaviObject|is_false|sz|prop|element||starting_position|_cfs_isCarousel|_cfs_init|go_getPrevNextObject|defaults|ms_getParentSize|ms_getMaxDimension|center|in_getResponsiveValues|bottom|in_getAlignPadding|go_complementPrevNextObject|cf_getSynchArr|onPauseStart|onPausePause|onPauseEnd|pauseDuration|in_mapCss|marginBottom|newPosition|_cfs_origCss|sz_storeSizes|sz_setResponsiveSizes|_cfs_unbind_events|stop|finish|interval|type|conditions|gn_getVisibleOrg|backward|sc_hideHiddenItems|a_lef_vis|sc_getDuration|_a_paddingnew|sc_showHiddenItems|sc_mapCallbackArguments|sc_afterScroll|sc_fireQueue|cf_setCookie|gn_getVisibleItemsNextTestCircular|slideToPage|valid|linkAnchors|value|_cfs_bind_buttons|click|_cfs_unbind_buttons|scrolled|down|onMouse|swP|swN||bt_mousesheelNumber|delay|pauseOnResize|debounce|onWindowResize|_windowHeight||nh|ns3|wrapper|parent|continue|classnames|set|new|cf_getKeyCode|gn_getItemsPrevFilter|gn_getItemsNextFilter|seco|nw|ms_getLargestSize|toLowerCase|ms_hasVariableSizes|sta|cf_getItemAdjustMinMax|is_null|console|caroufredsel|No|found|go_getItemsObject|go_getScrollObject|go_getAutoObject|go_getPaginationObject|go_getSwipeObject|go_getMousewheelObject|cf_getDimensions|in_complementItems|in_complementPrimarySize|in_complementSecondarySize|upDateOnWindowResize|in_complementVisibleItems|cf_getPadding|500|go_complementAutoObject|go_complementPaginationObject|go_complementSwipeObject|go_complementMousewheelObject|_cfs_build|textAlign|float|marginTop|marginLeft|absolute|_cfs_bind_events|paused|enough|needed|page|slide_|gn_getScrollItemsPrevFilter|Scrolling|gi_getOldItemsPrev|gi_getNewItemsPrev|directscroll|concat|gn_getScrollItemsNextFilter|forward|gi_getOldItemsNext|gi_getNewItemsNext|jumpToStart|after|append|removeItem|round|hash|index|selected|gn_getVisibleItemsPrevFilter|_cfs_origCssSizes|Item|keyup|keyCode|plugin|scN|cursor|The|option|mcN|configs|classname|cf_getCookie|random|itm|onCreate|namespace|pageAnchorBuilder|span|progressbarUpdater|Date|_cfs_isHidden|triggerOnTouchEnd|_cfs_tempCssMargin|newS|secp|ms_getPaddingBorderMargin|l1|l2|join|innerWidth|innerHeight|dx|Set|undefined|jQuery|log|caroufredsel_cookie_|relative|fixed|overflow|setInterval|setTimeout|or|Callback|returned|Page|resumed|currently|slide_prev|prependTo|slide_next|prevPage|nextPage|prepend|carousel|insertItem|Correct|insert|Appending|item|add|detach|currentVisible|body|find|Preventing|non|sliding|replaceWith|widths|heights|automatically|touchSwipe|min_move_x|min_move_y|preventDefaultEvents|wipeUp|wipeDown|wipeLeft|wipeRight|ontouchstart|in|swipeUp|swipeDown|swipeLeft|swipeRight|move|200|300|resize|wrap|class|unshift|location|swing|cfs|div|caroufredsel_wrapper|href|charAt|setTime|1000|expires|toGMTString|path|orgDuration|animate|complete|shift|clearTimeout|clearInterval|skipped|Hiding|navigation|disabled|2500|Width|outer|px|em|even|odd|Infinity|immediate|Array|Object|isNaN|String|Function|Boolean|DEPRECATED|support|it|will|be|removed|Use|instead|quadratic|cubic|elastic|106|126'.split('|'),0,{}));
/*!
 * imagesLoaded PACKAGED v4.1.3
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return-1==n.indexOf(t)&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return-1!=n&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=0,o=i[n];t=t||[];for(var r=this._onceEvents&&this._onceEvents[e];o;){var s=r&&r[o];s&&(this.off(e,o),delete r[o]),o.apply(this,t),n+=s?0:1,o=i[n]}return this}},t.allOff=t.removeAllListeners=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){var t=[];if(Array.isArray(e))t=e;else if("number"==typeof e.length)for(var i=0;i<e.length;i++)t.push(e[i]);else t.push(e);return t}function o(e,t,r){return this instanceof o?("string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=n(e),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(e,t,r)}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&d[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});;
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();;
// Site specific js goes here. All generic js is in dc_misc or factoids modules

(function($) {
  // Using Enquire to scope js to mobile
  enquire.register("screen and (max-width: 780px) and (-webkit-device-pixel-ratio:2), screen and (max-width: 780px) and (device-pixel-ratio:2), screen and (max-width: 780px) and (-webkit-device-pixel-ratio:3), screen and (max-width: 600px)", function() {
    Drupal.behaviors.mobileEtc = {
      attach: function (context) {

        // Vertically space Video landing title
        $('.landing-title').once(function() {
          var padding = Math.round((55 - $(this).height()) / 2);
          $('.landing-title').css('padding-top', padding - 1);
        });

        // Force social widget to work on mobile
        $('#footer .custom-social-widgets .social-section', context).on('touchend', function(e) {
          if ($(this).hasClass('open')) {
            $(this).removeClass('open');
          } else {
            $('#footer .custom-social-widgets .social-section').removeClass('open');
            $(this).addClass('open');
          }
        });
      }
    };

    // iScroll setup
    Drupal.behaviors.initiScroll = {
      attach: function (context) {

        $( ".glossary" ).wrap( "<div class='glossWrap'></div>" );

        // wrap start-here's view-content in a div for our iScroll
        $('.start-here .pane-content  .view-content').once('wrapper', function () {
          $(this).wrap('<div class="scroll-wrapper"></div>');
        });

        var initScroll = function() {
          // Array of candidates for iScroll
          var els = [
            '.pane-must-list .view-content',
            '.pane-whos-who .pane-content',
            '.start-here .pane-content  .scroll-wrapper',
            '.killer-sidekicks .pane-content',
            '.pane-video-featured-videos .pane-content',
            '.view-featured-blog-posts .item-list',
            '.marquee-promos.processed',
            '.glossWrap'
          ];


          // Delaying init per documentation's advice http://iscrolljs.com/#getting-started
          var scrollers = [];
          setTimeout(function(){
            // set width of promos iscroll
            var promo_width = 134 * $('.marquee-promos.processed .view-content .views-row').length + 10;
            $('.marquee-promos.processed .view-content').css('width', promo_width + 'px');

            for (var i = 0; i < els.length; i++) {
              if ($(els[i]).length > 0) {
                scrollers[i] = new IScroll(els[i], {
                  eventPassthrough: true,
                  scrollX: true,
                  scrollY: true,
                  bounce: false
                });
                if (els[i] === '.pane-must-list .view-content') {
                  scrollers[i].scrollTo(-506, 0);
                  scrollers[i].refresh();
                }
              }
            }
          }, 200);
        };


        // Who's who link handling
        $('.view-whos-who').once(function() {
          var link = $('.view-whos-who .see-all-link');
          $('.pane-whos-who .pane-title').after(link);
        });

        // Special treatment for homepage marquee
        if ($('#block-views-three-image-marquee-block .view-three-image-marquee.view-display-id-block')) {
          $(window).resize(function(){
            var width = $(window).width();
            $('#block-views-three-image-marquee-block .view-three-image-marquee.view-display-id-block').css('width', width*3);
          });
          $(window).trigger('resize');
          initScroll();
        } else {
          initScroll();
        }
      }
    };

    Drupal.behaviors.mobileMenuInteraction = {
      attach: function (context) {
        // Main menu display/hide
        $('.mobile-menu').once(function() {
          // Jam the other two menus into the main menu
          var output = '';
          output += '<li class="expanded"><a>All Sites</a>';
          output += $('#block-system-main-menu--2 .content').html();
          output += '</li>';
          output += '<li class="expanded"><a>DC Entertainment Info</a>';
          output += $('#block-menu-menu-footer-dc .content').html();
          output += '</li>';
          $('#block-system-main-menu--2, #block-menu-menu-footer-dc').remove();
          $('#block-menu-menu-dc-menu--2 ul.menu:first-child').append(output);
          // Modify search button
          $('.mobile-search #edit-submit').attr('value', 'Go');
        });

        // Open submenus & handle scrolling while open
        var pos;
        $('.mobile-trigger', context).on('click', function(e) {
          e.preventDefault();
          if (!$(this).next('.mobile-sub').hasClass('open')) {
            $('.mobile-sub, .mobile-trigger').removeClass('open');
            $(this).addClass('open').next('.mobile-sub').addClass('open');
            pos = $('#header').offset().top;
            $('#header').addClass('paused').css('top', pos);
          } else {
            $('.mobile-trigger, .mobile-sub').removeClass('open');
            $('#header').removeClass('paused').css('top', 'initial');
          }

          // Fix Youtube embed messing up menu.
          var player = $('iframe.media-youtube-player');
          if (player.length > 0) {
            player.remove();
            $('.fluid-width-video-wrapper').append(player);
          }
        });

        $('.mobile-search input').focus(function(e) {
          e.preventDefault();
        }).attr('placeholder', 'WHAT ARE YOU LOOKING FOR?');

        // Return menu to pos fixed and close it if scrolled above
        $(window).scroll(function(e) {
          pos = $('#header').offset().top;
          var win = $(window).scrollTop();
          if (win <= pos && !$('.mobile-search input').focus()) {
            $('.mobile-sub, .mobile-trigger').removeClass('open');
            $('#header').removeClass('paused').css('top', 'initial');
          }
        });

        $('a.close').click(function() {
          if ($(this).parent().hasClass('open')) {
            $('.mobile-trigger, .mobile-sub, .mobile-menu li').removeClass('open');
            $('#header').removeClass('paused').css('top', 'initial');
          }
        });

        // Submenu behaviors
        $('.mobile-menu li.expanded a:first-child', context).click(function(e) {
          if (!$(this).parent().hasClass('leaf')) {
            e.preventDefault();
            $('.mobile-menu li.expanded').not($(this).parent()).removeClass('open');
            if (!$(this).parent().hasClass('open')) {
              $(this).parent().addClass('open');
            } else {
              $(this).parent().removeClass('open');
            }
          }
        });
      }
    };

    Drupal.behaviors.mobileCurrentSeriesGrid = {
      attach: function (context) {
        var width = $(window).width();
        if ($('.pane-dc-current-series')) {
          $('.pane-dc-current-series .views-row', context).each(function() {
            var cover = $(this).find('img'),
            title = $(this).find('.views-field-field-series-name a'),
            itemWidth = width / 2 - 10;
            cover[0].width = itemWidth;
            cover[0].height = itemWidth;
            title.css('width', itemWidth);
          });
        }
      }
    };
  //End Enquire Mobile detection
  });

  Drupal.behaviors.searchTakeOver = {
    attach: function (context) {
      var search = $('#block-search-form'),
      searchInput = $('input[name="search_block_form"]', search);
      $(searchInput).on('focus', function() {
        $(search).addClass('take-over').once().append('<span class="close"></span>');
        $(this).attr('placeholder', 'WHAT ARE YOU LOOKING FOR?');
        close();
      });
      var close = function() {
        $('.take-over .close').on('click tap touch', function() {
          $(search).removeClass('take-over');
        });
      };
    }
  };

  Drupal.behaviors.androidDetect = {
    attach: function(context) {
      $('body').once('android-mobile-detect', function() {
        var uagent = navigator.userAgent.toLowerCase();
        var device_android = 'android';

        function DetectAndroid() {
          if(uagent.search(device_android) > -1) {
            return true;
          }
          else {
            return false;
          }
        }

        if(DetectAndroid()) {
          // On Android, we need to add top padding for the app play store ad.
          // Add in conditional to verify that we have a Smart
          if ($('#smartbanner').length > 0 && $('#smartbanner').hasClass('shown')) {
            $('body').addClass('android-smartbanner');
          }
        }
        else {
          if ($('#smartbanner').length > 0 && $('#smartbanner').hasClass('shown')) {
            $('#smartbanner').addClass('hidden');
          }
        }

      });
    }
  };

  Drupal.behaviors.androidSmartBanner = {
    attach: function(context) {
      // When the Android Smartbanner is closed, we need to remove the body class.
      // that adds padding to the header.
      $('.sb-close').on('click tap touch', function() {
        $('body').removeClass('android-smartbanner');
        $('body').addClass('removed-sb');
      });

      // Also, when we have scrolled down, we need to remove the padding too.
      if ($('#smartbanner').length > 0 && $('#smartbanner').hasClass('shown')) {
        if($('body').hasClass('front')) {
          $('.front #content-area').waypoint(function (direction) {
            if (direction === "down") {
              $('body').removeClass('android-smartbanner');
              $('body').addClass('android-smartbanner-hidden');
            } else {
              if(!($('body').hasClass('removed-sb'))) {
                $('body').addClass('android-smartbanner');
              }
            }
          });
        }
        else {
          $('#main').waypoint(function (direction) {
            if (direction === "down") {
              $('body').removeClass('android-smartbanner');
              $('body').addClass('android-smartbanner-hidden');
            } else {
                if(!($('body').hasClass('removed-sb'))) {
                  $('body').addClass('android-smartbanner');
                }
              }
            });
          }
        }
      }
    };

  Drupal.behaviors.rebirthFloodlightTags = {
    attach: function(context) {
      $('#dce-fl-rebirth').click(function () {
        var axel = Math.random() + "";
        var a = axel * 10000000000000;
        $(this).append('<iframe src="https://3461539.fls.doubleclick.net/activityi;src=3461539;type=dcreb0;cat=dcreb00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
      });
    }
  };

  Drupal.behaviors.comicLandingSeeAll = {
    attach: function(context) {
      if (!$('#comics-carousel-jumper').length) {
          $('#quicktabs-comic_carousel_landing_2016 ul').append('<li id="comics-carousel-jumper"><a href="/comics?all=1#browse">See All</a><li>');
      }
    }
  };

  Drupal.behaviors.collectibleLandingSeeAll = {
    attach: function(context) {
      if (!$('#collectibles-carousel-jumper').length) {
          $('#quicktabs-collectibles_landing_carousel ul').append('<li id="collectibles-carousel-jumper"><a href="/collectibles?all=1#browse">See All</a><li>');
      }
    }
  };

  Drupal.behaviors.fadeableMenu = {
    attach: function(context) {

      var didScroll,
      lastScrollTop = 0,
      delta = 5,
      navbarPosition,
      navbarHeight,
      fadeableWindow,
      fadeableDocument,
      fadeableBody;

      var headerPersistent = $(window).width() > 780 ? $('#header-persistent', context) : $('#header-mobile', context);

      // prevent breakpoint-panels from firing script multiple times
      if (headerPersistent.length > 0) {

        navbarHeight = headerPersistent.outerHeight();
        navbarPosition = headerPersistent.offset().top;
        fadeableWindow = $(window);
        fadeableDocument = $(document);
        fadeableBody = $('body');

        // Hide Header on on scroll down
        fadeableWindow.off('scroll.fadeable').on('scroll.fadeable', function(event){
            didScroll = true;
        });

        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);

        function hasScrolled() {
          var st = $(this).scrollTop();

          // Make sure they scroll more than delta
          if(Math.abs(lastScrollTop - st) <= delta)
              return;

          if (st < lastScrollTop && st <= navbarPosition) {
              headerPersistent.removeClass('nav-sticky nav-up nav-down');
          } else {
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > (navbarPosition + navbarHeight)) {
                // Scroll Down
                headerPersistent.removeClass('nav-down').addClass('nav-up');
            } else {
                // Scroll Up
                if (st > (navbarPosition + navbarHeight) && (st + fadeableWindow.height()) < fadeableDocument.height()) {
                    headerPersistent.removeClass('nav-up').addClass('nav-sticky nav-down');
                }
            }
          }

          lastScrollTop = st;
        }
      }
    }
  };

  Drupal.behaviors.allsitesMenu = {
    attach: function(context) {

      var allsitesOuter = $('#block-system-main-menu', context),
      allsitesLink,
      allsitesLinkWrapper;

      if (allsitesOuter.length > 0) {
        allsitesOuter.once('allsites', function() {
          allsitesLink = document.createElement('a');
          allsitesLink.href = '#';
          allsitesLink.appendChild(document.createTextNode('Additional DC Sites'));
          allsitesLinkWrapper = document.createElement('div');
          allsitesLinkWrapper.className = 'title droparrow all-sites';
          allsitesLinkWrapper.appendChild(allsitesLink);
          allsitesOuter.prepend(allsitesLinkWrapper);

          allsitesLink = $(allsitesLink);
          allsitesLink.off('click.allsites').on('click.allsites', function(event) {
            event.preventDefault();
            allsitesOuter.toggleClass('allsites-active');
          });
        });
      }
    }
  };

  // Custom semi-slideshow for Essentials view
  Drupal.behaviors.essentialsOverlay = {
    attach: function(context) {
      // Establish some vars
      var content = $('.view-display-id-landing_essentials .view-content'),
      inner_elements = $('.view-display-id-landing_essentials .view-content > div'),
      scrollerWidth = 0,
      tiles = $('.essential-card'),
      tileCount = $(tiles).length,
      windowWidth = $(window).width(),
      scrollIncrement = 60,
      isAutoScrolling = false,
      scrollDirection = -1;

      if (content.length === 0) {
        return;
      }

      // Dynamically calculate scroller width
      for (var i = 0; i < inner_elements.length; ++i) {
        var $element = $(inner_elements[i]);
        scrollerWidth += $element.width();
      }

      $(content).width(scrollerWidth);

      // Init iScroll
      var essentialsScroll = new IScroll('.view-display-id-landing_essentials', {
        scrollY: false,
        scrollX: true,
        eventPassthrough: true,
        scrollbars: 'custom',
        interactiveScrollbars: true,
        resizeScrollbars: false,
        bounce: false,
        bindToWrapper: true,
      });

      // Add hover zones
      $('.view-display-id-landing_essentials').prepend('<span class="scroll-left"></span>').append('<span class="scroll-right"></span>');

      // Trigger auto scrolling on mouseenter
      $('.scroll-left, .scroll-right').on('mouseenter', function() {
        isAutoScrolling = true;
        if ($(this).hasClass('scroll-right')) {
          scrollDirection = 1;
          essentialsScroll.scrollBy(-scrollIncrement, 0, 100, IScroll.utils.ease.quadratic);
        } else {
          scrollDirection = -1;
          essentialsScroll.scrollBy(scrollIncrement, 0, 100, IScroll.utils.ease.quadratic);
        }
      });

      // Stop autoscrolling on mouseleave
      $('.scroll-left, .scroll-right').on('mouseleave', function() {
        isAutoScrolling = false;
      });

      // On scrollEnd, check to see if we need to continue autoscrolling
      essentialsScroll.on('scrollEnd', function() {
        if (isAutoScrolling) {
          if (scrollDirection === 1) {
            // Scroll right
            essentialsScroll.scrollBy(-scrollIncrement, 0, 100, IScroll.utils.ease.quadratic);
          } else {
            // Scroll left
            essentialsScroll.scrollBy(scrollIncrement, 0, 100, IScroll.utils.ease.quadratic);
          }

          // Check bounds and disable autoscrolling if we have hit the boundary point
          if (essentialsScroll.x < essentialsScroll.maxScrollX) {
            isAutoScrolling = false;
          }
          if (essentialsScroll.x > 0) {
            isAutoScrolling = false;
          }
        }
      });

      // Click handler for cards
      $('.view-display-id-landing_essentials .views-row.essential-card').on('click tap touch', function() {
        slideIn($(this));
      });

      // Close overlay
      var close = function() {
        $('.essential-meta.active .close').on('click tap touch', function(e) {
          $('.view-display-id-landing_essentials .views-row').removeClass('active');
          $(this).parent().remove();
        });
      };


      var slideIn = function(item) {
        // Apply css for active
        $('.view-display-id-landing_essentials .views-row').removeClass('active');
        $(item).addClass('active');

        // Create overlay and animate it in
        var meta = $('.essential-meta', item);
        $(meta).clone(true).appendTo('.view-display-id-landing_essentials').addClass('animated');
        setTimeout(function() {
          $('.essential-meta.animated').addClass('active');
           // Initialize paging & close buttons
          paging();
          close();
        }, 10);
      };

      // handle pseudo paging
      var paging = function() {
        // init variable
        var nextCard;
        // Prev functionality
        $('.essential-meta.active .prev').on('click tap touch', function() {
          nextCard = $('.essential-card.active').prev();
          page(nextCard);
          // Call function on itself to re-init bindings
          paging();
        });
        // Next functionality
        $('.essential-meta.active .next').on('click tap touch', function() {
          nextCard = $('.essential-card.active').next();
          page(nextCard);
          // Call function on itself to re-init bindings
          paging();
        });
      };


      // Do the paging
      var page = function(nextCard) {
        // Remove the old active state & dom element
        $('.view-display-id-landing_essentials .views-row').removeClass('active');
        $('.essential-meta.active').addClass('slideOut');
        setTimeout(function() {
          $('.essential-meta.slideOut').remove();
        }, 1000);

        slideIn(nextCard);
      };
    }
  };

  Drupal.behaviors.youngAnimalFloodlightTags = {
    attach: function(context) {
      if (window.location.pathname === "/comics/doom-patrol-2016/doom-patrol-1") {
        $('.buy-now-tab').click(function () {
          var axel = Math.random() + "";
          var a = axel * 10000000000000;
          $(this).append('<iframe src="https://3461539.fls.doubleclick.net/activityi;src=3461539;type=dcyou00;cat=dcyou00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
        });
      }
    }
  };

  Drupal.behaviors.pullList = {
    attach: function(context) {
      // Homepage only
      if (!$('body').hasClass('front')) {
        return;
      }
      var originalTitle = $('.pane-must-list .start-here-title');
      originalTitle.html(originalTitle.html().replace(/^(\w+)/, '<span>$1</span>'));
    }
  };

  $(document).ready(function() {
    homeNewsGrid();
  });

  var homeNewsGrid = function() {
    // Homepage only
    if (!$('body').hasClass('front')) {
      return;
    }
    var newsSection = $('.front').find('.news-section'),
    newsContent = newsSection.find('.view-content');
    // Desktop
    enquire.register("screen and (min-width: 781px)", function() {
      var settings = {
        itemSelector: '.views-row',
        columnWidth: 300,
        gutter: 20
      };
      newsContent.masonry(settings);
      // re-trigger masonry layout when images finish loading
      newsSection.imagesLoaded(function () {
        newsContent.masonry('layout');
      });
    });
    // "Mobile"
    enquire.register("screen and (max-width: 780px)", function() {
      var newsContentRows = newsContent.find('.views-row'),
      containerWidth = newsContent.width(),
      // Parent minus gutter, split into two columns
      columnWidth = Math.floor((containerWidth - 10) / 2),
      settings = {
        itemSelector: '.views-row',
        columnWidth: columnWidth,
        gutter: 10
      };
      // resize columns with inline styles (should be replaced with CSS media queries)
      newsSection.css('margin-bottom', 0);
      newsContentRows.eq(0).width(containerWidth);
      newsContentRows.not(':eq(0)').width(columnWidth);
      newsContentRows.find('img').css({ 'max-width': '100%', 'width': '100%' });
      newsContent.masonry(settings);
      // re-trigger masonry layout when images finish loading
      newsSection.imagesLoaded(function () {
        newsContent.masonry('layout');
      });
    });
  };
})(jQuery);
;
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.
/**
 * jQuery Mobile Select
 * @Author: Jochen Vandendriessche <jochen@builtbyrobot.com>
 * @Author URI: http://builtbyrobot.com
 *
**/
(function(b){var c={init:function(a){a=b.extend({autoHide:!0,defaultOption:"Go to...",deviceWidth:480,appendTo:"",className:"mobileselect",useWindowWidth:!1},a);if((a.useWindowWidth===!0?b(window).width():screen.width)<a.deviceWidth){var d=b(this),c=a.appendTo.length?b(a.appendTo):d.parent(),e=b('<select class="'+a.className+'" />');e.appendTo(c);b("<option />",{selected:!b(".current",d).length?"selected":!1,value:"",text:a.defaultOption}).appendTo(e);b("a",d).each(function(){var a=b(this),c=a.parent("li").hasClass("current")||a.hasClass("current")?"selected":!1;b("<option />",{selected:c,value:a.attr("href"),text:a.text()}).appendTo(e)});a.autoHide&&b(d).hide();e.change(function(){window.location=b(this).find("option:selected").val()})}}};b.fn.mobileSelect=function(a){if(c[a])return c[a].apply(this,Array.prototype.slice.call(arguments,1));else if(typeof a==="object"||!a)return c.init.apply(this,arguments);else b.error("Method "+a+" does not exist on jQuery.mobileselect")}})(this.jQuery);;
/**
 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch and iPad, should also work with Android mobile phones (not tested yet!)
 * Common usage: wipe images (left and right to show the previous or next image)
 * 
 * @author Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
 * @version 1.1.1 (9th December 2010) - fix bug (older IE's had problems)
 * @version 1.1 (1st September 2010) - support wipe up and wipe down
 * @version 1.0 (15th July 2010)
 */
(function($){$.fn.touchwipe=function(settings){var config={min_move_x:20,min_move_y:20,wipeLeft:function(){},wipeRight:function(){},wipeUp:function(){},wipeDown:function(){},preventDefaultEvents:true};if(settings)$.extend(config,settings);this.each(function(){var startX;var startY;var isMoving=false;function cancelTouch(){this.removeEventListener('touchmove',onTouchMove);startX=null;isMoving=false}function onTouchMove(e){if(config.preventDefaultEvents){e.preventDefault()}if(isMoving){var x=e.touches[0].pageX;var y=e.touches[0].pageY;var dx=startX-x;var dy=startY-y;if(Math.abs(dx)>=config.min_move_x){cancelTouch();if(dx>0){config.wipeLeft()}else{config.wipeRight()}}else if(Math.abs(dy)>=config.min_move_y){cancelTouch();if(dy>0){config.wipeDown()}else{config.wipeUp()}}}}function onTouchStart(e){if(e.touches.length==1){startX=e.touches[0].pageX;startY=e.touches[0].pageY;isMoving=true;this.addEventListener('touchmove',onTouchMove,false)}}if('ontouchstart'in document.documentElement){this.addEventListener('touchstart',onTouchStart,false)}});return this}})(jQuery);;
