// ==UserScript==
// @name           [DEFFFIS] - Voice Over Translation
// @name:de        [DEFFFIS] - Voice-Over-Video-Übersetzung
// @name:es        [DEFFFIS] - Traducción de vídeo en off
// @name:fr        [DEFFFIS] - Traduction vidéo voix-off
// @name:it        [DEFFFIS] - Traduzione Video fuori campo
// @name:ru        [DEFFFIS] - Закадровый перевод видео
// @name:zh        [DEFFFIS] - 画外音视频翻译
// @description    A small extension that adds a Yandex Browser video translation to other browsers
// @description:de Eine kleine Erweiterung, die eine Voice-over-Übersetzung von Videos aus dem Yandex-Browser zu anderen Browsern hinzufügt
// @description:es Una pequeña extensión que agrega una traducción de voz en off de un video de Yandex Browser a otros navegadores
// @description:fr Une petite extension qui ajoute la traduction vocale de la vidéo du Navigateur Yandex à d'autres navigateurs
// @description:it Una piccola estensione che aggiunge la traduzione vocale del video dal browser Yandex ad altri browser
// @description:ru Небольшое расширение, которое добавляет закадровый перевод видео из Яндекс Браузера в другие браузеры
// @description:zh 一个小扩展，它增加了视频从Yandex浏览器到其他浏览器的画外音翻译
// @grant          GM_addStyle
// @grant          GM_deleteValue
// @grant          GM_listValues
// @grant          GM_setValue
// @grant          GM_getValue
// @grant          GM_xmlhttpRequest
// @grant          GM_info
// @require        https://cdn.jsdelivr.net/npm/protobufjs/dist/light/protobuf.min.js
// @require        https://cdn.jsdelivr.net/npm/hls.js/dist/hls.light.min.js
// @require        https://gist.githubusercontent.com/ilyhalight/6eb5bb4dffc7ca9e3c57d6933e2452f3/raw/7ab38af2228d0bed13912e503bc8a9ee4b11828d/gm-addstyle-polyfill.js
// @match          *://*.youtube.com/*
// @match          *://*.youtube-nocookie.com/*
// @match          *://*.youtubekids.com/*
// @match          *://*.twitch.tv/*
// @match          *://*.xvideos.com/*
// @match          *://*.pornhub.com/*
// @match          *://m.pornhub.com/*
// @match          *://*.vk.com/*
// @match          *://*.vk.ru/*
// @match          *://invidious.snopyta.org/*
// @match          *://invidious.kavin.rocks/*
// @match          *://vid.puffyan.us/*
// @match          *://invidious.namazso.eu/*
// @match          *://inv.riverside.rocks/*
// @match          *://yt.artemislena.eu/*
// @match          *://invidious.flokinet.to/*
// @match          *://invidious.esmailelbob.xyz/*
// @match          *://invidious.nerdvpn.de/*
// @match          *://invidious.slipfox.xyz/*
// @match          *://invidio.xamh.de/*
// @match          *://invidious.dhusch.de/*
// @match          *://*.piped.video/*
// @match          *://piped.tokhmi.xyz/*
// @match          *://piped.moomoo.me/*
// @match          *://piped.syncpundit.io/*
// @match          *://piped.mha.fi/*
// @match          *://watch.whatever.social/*
// @match          *://piped.garudalinux.org/*
// @match          *://efy.piped.pages.dev/*
// @match          *://watch.leptons.xyz/*
// @match          *://piped.lunar.icu/*
// @match          *://yt.dc09.ru/*
// @match          *://piped.mint.lgbt/*
// @match          *://*.il.ax/*
// @match          *://piped.privacy.com.de/*
// @match          *://piped.esmailelbob.xyz/*
// @match          *://piped.projectsegfau.lt/*
// @match          *://piped.in.projectsegfau.lt/*
// @match          *://piped.us.projectsegfau.lt/*
// @match          *://piped.privacydev.net/*
// @match          *://piped.palveluntarjoaja.eu/*
// @match          *://piped.smnz.de/*
// @match          *://piped.adminforge.de/*
// @match          *://piped.qdi.fi/*
// @match          *://piped.hostux.net/*
// @match          *://piped.chauvet.pro/*
// @match          *://piped.jotoma.de/*
// @match          *://piped.pfcd.me/*
// @match          *://piped.frontendfriendly.xyz/*
// @match          *://*.yewtu.be/*
// @match          *://inv.vern.cc/*
// @match          *://*.vimeo.com/*
// @match          *://*.9gag.com/*
// @match          *://*.twitter.com/*
// @match          *://*.facebook.com/*
// @match          *://*.rutube.ru/*
// @match          *://*.bilibili.com/*
// @match          *://my.mail.ru/*
// @match          *://*.bitchute.com/*
// @match          *://*.coursera.org/learn/*
// @match          *://*.udemy.com/course/*
// @match          *://*.tiktok.com/*
// @match          *://proxitok.pabloferreiro.es/*
// @match          *://proxitok.pussthecat.org/*
// @match          *://tok.habedieeh.re/*
// @match          *://proxitok.esmailelbob.xyz/*
// @match          *://proxitok.privacydev.net/*
// @match          *://tok.artemislena.eu/*
// @match          *://tok.adminforge.de/*
// @match          *://tik.hostux.net/*
// @match          *://tt.vern.cc/*
// @match          *://cringe.whatever.social/*
// @match          *://proxitok.lunar.icu/*
// @match          *://proxitok.privacy.com.de/*
// @match          *://rumble.com/*
// @match          *://*.eporner.com/*
// @match          *://peertube.1312.media/*
// @match          *://tube.shanti.cafe/*
// @match          *://bee-tube.fr/*
// @match          *://video.sadmin.io/*
// @match          *://dalek.zone/*
// @match          *://review.peertube.biz/*
// @match          *://peervideo.club/*
// @match          *://tube.la-dina.net/*
// @match          *://peertube.tmp.rcp.tf/*
// @match          *://peertube.su/*
// @match          *://geo.dailymotion.com/*
// @match          *://*.ok.ru/*
// @match          *://trovo.live/*
// @match          *://disk.yandex.ru/i/*
// @match          *://coursehunter.net/*
// @match          *://youtube.googleapis.com/embed/*
// @match          *://*.banned.video/*
// @match          *://*.weverse.io/*
// @match          *://*.newgrounds.com/*
// @match          *://*.egghead.io/*
// @match          *://*.youku.com/*
// @match          *://*/*.mp4*
// @exclude        file://*/*.mp4*
// @connect        yandex.ru
// @connect        yandex.net
// @connect        raw.githubusercontent.com
// @connect        toil.cc
// @connect        deno.dev
// @connect        onrender.com
// @connect        workers.dev
// @namespace      vot-cloudflare-min
// @version        1.5.3.3
// @icon           https://translate.yandex.ru/icons/favicon.ico
// @author         sodapng, mynovelhost, Toil, SashaXser, MrSoczekXD
// @homepageURL    https://github.com/ilyhalight/voice-over-translation/issues
// @updateURL      https://raw.githubusercontent.com/defffis/voice-over-translation/master/dist/vot-cloudflare-min.user.js
// @downloadURL    https://raw.githubusercontent.com/defffis/voice-over-translation/master/dist/vot-cloudflare-min.user.js
// @supportURL     https://github.com/ilyhalight/voice-over-translation/issues
// ==/UserScript==


/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/bowser/es5.js":
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=90)}({17:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(18),i=function(){function e(){}return e.getFirstMatch=function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||""},e.getSecondMatch=function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||""},e.matchAndReturnConst=function(e,t,r){if(e.test(t))return r},e.getWindowsVersionName=function(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},e.getMacOSVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),10===t[0])switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},e.getAndroidVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0},e.getVersionPrecision=function(e){return e.split(".").length},e.compareVersions=function(t,r,n){void 0===n&&(n=!1);var i=e.getVersionPrecision(t),s=e.getVersionPrecision(r),a=Math.max(i,s),o=0,u=e.map([t,r],(function(t){var r=a-e.getVersionPrecision(t),n=t+new Array(r+1).join(".0");return e.map(n.split("."),(function(e){return new Array(20-e.length).join("0")+e})).reverse()}));for(n&&(o=a-Math.min(i,s)),a-=1;a>=o;){if(u[0][a]>u[1][a])return 1;if(u[0][a]===u[1][a]){if(a===o)return 0;a-=1}else if(u[0][a]<u[1][a])return-1}},e.map=function(e,t){var r,n=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)n.push(t(e[r]));return n},e.find=function(e,t){var r,n;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(r=0,n=e.length;r<n;r+=1){var i=e[r];if(t(i,r))return i}},e.assign=function(e){for(var t,r,n=e,i=arguments.length,s=new Array(i>1?i-1:0),a=1;a<i;a++)s[a-1]=arguments[a];if(Object.assign)return Object.assign.apply(Object,[e].concat(s));var o=function(){var e=s[t];"object"==typeof e&&null!==e&&Object.keys(e).forEach((function(t){n[t]=e[t]}))};for(t=0,r=s.length;t<r;t+=1)o();return e},e.getBrowserAlias=function(e){return n.BROWSER_ALIASES_MAP[e]},e.getBrowserTypeByAlias=function(e){return n.BROWSER_MAP[e]||""},e}();t.default=i,e.exports=t.default},18:function(e,t,r){"use strict";t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0;t.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"};t.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"};t.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"};t.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"};t.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(91))&&n.__esModule?n:{default:n},s=r(18);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){}var t,r,n;return e.getParser=function(e,t){if(void 0===t&&(t=!1),"string"!=typeof e)throw new Error("UserAgent should be a string");return new i.default(e,t)},e.parse=function(e){return new i.default(e).getResult()},t=e,n=[{key:"BROWSER_MAP",get:function(){return s.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return s.ENGINE_MAP}},{key:"OS_MAP",get:function(){return s.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return s.PLATFORMS_MAP}}],(r=null)&&a(t.prototype,r),n&&a(t,n),e}();t.default=o,e.exports=t.default},91:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=u(r(92)),i=u(r(93)),s=u(r(94)),a=u(r(95)),o=u(r(17));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||""===e)throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},!0!==t&&this.parse()}var t=e.prototype;return t.getUA=function(){return this._ua},t.test=function(e){return e.test(this._ua)},t.parseBrowser=function(){var e=this;this.parsedResult.browser={};var t=o.default.find(n.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},t.getBrowserVersion=function(){return this.getBrowser().version},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},t.parseOS=function(){var e=this;this.parsedResult.os={};var t=o.default.find(i.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os},t.getOSName=function(e){var t=this.getOS().name;return e?String(t).toLowerCase()||"":t||""},t.getOSVersion=function(){return this.getOS().version},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},t.getPlatformType=function(e){void 0===e&&(e=!1);var t=this.getPlatform().type;return e?String(t).toLowerCase()||"":t||""},t.parsePlatform=function(){var e=this;this.parsedResult.platform={};var t=o.default.find(s.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform},t.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},t.getEngineName=function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},t.parseEngine=function(){var e=this;this.parsedResult.engine={};var t=o.default.find(a.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},t.getResult=function(){return o.default.assign({},this.parsedResult)},t.satisfies=function(e){var t=this,r={},n=0,i={},s=0;if(Object.keys(e).forEach((function(t){var a=e[t];"string"==typeof a?(i[t]=a,s+=1):"object"==typeof a&&(r[t]=a,n+=1)})),n>0){var a=Object.keys(r),u=o.default.find(a,(function(e){return t.isOS(e)}));if(u){var d=this.satisfies(r[u]);if(void 0!==d)return d}var c=o.default.find(a,(function(e){return t.isPlatform(e)}));if(c){var f=this.satisfies(r[c]);if(void 0!==f)return f}}if(s>0){var l=Object.keys(i),h=o.default.find(l,(function(e){return t.isBrowser(e,!0)}));if(void 0!==h)return this.compareVersion(i[h])}},t.isBrowser=function(e,t){void 0===t&&(t=!1);var r=this.getBrowserName().toLowerCase(),n=e.toLowerCase(),i=o.default.getBrowserTypeByAlias(n);return t&&i&&(n=i.toLowerCase()),n===r},t.compareVersion=function(e){var t=[0],r=e,n=!1,i=this.getBrowserVersion();if("string"==typeof i)return">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(n=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(n=!0,r=e.substr(1)),t.indexOf(o.default.compareVersions(i,r,n))>-1},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase()},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase()},t.isEngine=function(e){return this.getEngineName(!0)===String(e).toLowerCase()},t.is=function(e,t){return void 0===t&&(t=!1),this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)},t.some=function(e){var t=this;return void 0===e&&(e=[]),e.some((function(e){return t.is(e)}))},e}();t.default=d,e.exports=t.default},92:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n};var s=/version\/(\d+(\.?_?\d+)+)/i,a=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(e){var t={name:"Opera Touch"},r=i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=i.default.getFirstMatch(/(?:slimerjs)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe:function(e){var t={name:"Electron"},r=i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MiuiBrowser/i],describe:function(e){var t={name:"Miui"},r=i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},r=i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:i.default.getFirstMatch(t,e),version:i.default.getSecondMatch(t,e)}}}];t.default=a,e.exports=t.default},93:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/Roku\/DVP/],describe:function(e){var t=i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:s.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.WindowsPhone,version:t}}},{test:[/windows /i],describe:function(e){var t=i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=i.default.getWindowsVersionName(t);return{name:s.OS_MAP.Windows,version:t,versionName:r}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(e){var t={name:s.OS_MAP.iOS},r=i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return r&&(t.version=r),t}},{test:[/macintosh/i],describe:function(e){var t=i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=i.default.getMacOSVersionName(t),n={name:s.OS_MAP.MacOS,version:t};return r&&(n.versionName=r),n}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:s.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=i.default.getAndroidVersionName(t),n={name:s.OS_MAP.Android,version:t};return r&&(n.versionName=r),n}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:s.OS_MAP.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||i.default.getFirstMatch(/\bbb(\d+)/i,e);return{name:s.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:s.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:s.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.?_?\d+)+)/i,e);return{name:s.OS_MAP.PlayStation4,version:t}}}];t.default=a,e.exports=t.default},94:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=i.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:s.PLATFORMS_MAP.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=i.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:s.PLATFORMS_MAP.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"playstation 4"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}},{test:function(e){return"roku"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}}];t.default=a,e.exports=t.default},95:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){if(/\sedg\//i.test(e))return{name:s.ENGINE_MAP.Blink};var t=i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:s.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:s.ENGINE_MAP.Trident},r=i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:s.ENGINE_MAP.Presto},r=i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:s.ENGINE_MAP.Gecko},r=i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:s.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:s.ENGINE_MAP.WebKit},r=i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];t.default=a,e.exports=t.default}})}));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.vot-button{--vot-helper-theme: var( --vot-theme-rgb, var(--vot-primary-rgb, 33, 150, 243) );--vot-helper-ontheme: var( --vot-ontheme-rgb, var(--vot-onprimary-rgb, 255, 255, 255) );position:relative;display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:none;border-radius:4px;padding:0 16px;min-width:64px;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;color:rgb(var(--vot-helper-ontheme));background-color:rgb(var(--vot-helper-theme));box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:14px;font-weight:500;line-height:36px;outline:none;cursor:pointer;transition:box-shadow .2s}.vot-button[hidden]{display:none !important}.vot-button::-moz-focus-inner{border:none}.vot-button::before,.vot-button::after{content:"";position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;opacity:0}.vot-button::before{background-color:rgb(var(--vot-helper-ontheme));transition:opacity .2s}.vot-button::after{background:radial-gradient(circle at center, currentColor 1%, transparent 1%) center/10000% 10000% no-repeat;transition:opacity 1s,background-size .5s}.vot-button:hover{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.vot-button:hover::before{opacity:.08}.vot-button:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.vot-button:active::after{opacity:.32;background-size:100% 100%;transition:background-size 0s}.vot-button:disabled{background-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.12);color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38);box-shadow:none;cursor:initial}.vot-button:disabled::before,.vot-button:disabled::after{opacity:0}.vot-outlined-button{--vot-helper-theme: var( --vot-theme-rgb, var(--vot-primary-rgb, 33, 150, 243) );position:relative;display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;border:solid 1px;border-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.24);border-radius:4px;padding:0 16px;min-width:64px;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;color:rgb(var(--vot-helper-theme));background-color:rgba(0,0,0,0);font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:14px;font-weight:500;line-height:34px;outline:none;cursor:pointer}.vot-outlined-button[hidden]{display:none !important}.vot-outlined-button::-moz-focus-inner{border:none}.vot-outlined-button::before,.vot-outlined-button::after{content:"";position:absolute;border-radius:3px;top:0;right:0;bottom:0;left:0;opacity:0}.vot-outlined-button::before{background-color:rgb(var(--vot-helper-theme));transition:opacity .2s}.vot-outlined-button::after{background:radial-gradient(circle at center, currentColor 1%, transparent 1%) center/10000% 10000% no-repeat;transition:opacity 1s,background-size .5s}.vot-outlined-button:hover::before{opacity:.04}.vot-outlined-button:active::after{opacity:.16;background-size:100% 100%;transition:background-size 0s}.vot-outlined-button:disabled{background-color:rgba(0,0,0,0);color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38);cursor:initial}.vot-outlined-button:disabled::before,.vot-outlined-button:disabled::after{opacity:0}.vot-text-button{--vot-helper-theme: var( --vot-theme-rgb, var(--vot-primary-rgb, 33, 150, 243) );position:relative;display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;border:none;border-radius:4px;padding:0 8px;min-width:64px;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;color:rgb(var(--vot-helper-theme));background-color:rgba(0,0,0,0);font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:14px;font-weight:500;line-height:36px;outline:none;cursor:pointer}.vot-text-button[hidden]{display:none !important}.vot-text-button::-moz-focus-inner{border:none}.vot-text-button::before,.vot-text-button::after{content:"";position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;opacity:0}.vot-text-button::before{background-color:rgb(var(--vot-helper-theme));transition:opacity .2s}.vot-text-button::after{background:radial-gradient(circle at center, currentColor 1%, transparent 1%) center/10000% 10000% no-repeat;transition:opacity 1s,background-size .5s}.vot-text-button:hover::before{opacity:.04}.vot-text-button:active::after{opacity:.16;background-size:100% 100%;transition:background-size 0s}.vot-text-button:disabled{background-color:rgba(0,0,0,0);color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38);cursor:initial}.vot-text-button:disabled::before,.vot-text-button:disabled::after{opacity:0}.vot-icon-button{--vot-helper-onsurface: rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.87);position:relative;display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;border:none;border-radius:50%;padding:0;width:36px;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;fill:var(--vot-helper-onsurface);color:var(--vot-helper-onsurface);background-color:rgba(0,0,0,0);font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:14px;font-weight:500;line-height:36px;outline:none;cursor:pointer}.vot-icon-button[hidden]{display:none !important}.vot-icon-button::-moz-focus-inner{border:none}.vot-icon-button::before,.vot-icon-button::after{content:"";position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;opacity:0}.vot-icon-button::before{background-color:var(--vot-helper-onsurface);transition:opacity .2s}.vot-icon-button::after{background:radial-gradient(circle at center, currentColor 1%, transparent 1%) center/10000% 10000% no-repeat;transition:opacity .3s,background-size .4s}.vot-icon-button:hover::before{opacity:.04}.vot-icon-button:active::after{opacity:.32;background-size:100% 100%;transition:background-size 0s,opacity 0s}.vot-icon-button:disabled{background-color:rgba(0,0,0,0);color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38);fill:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38);cursor:initial}.vot-icon-button:disabled::before,.vot-icon-button:disabled::after{opacity:0}.vot-textfield{--vot-helper-theme: rgb( var(--vot-theme-rgb, var(--vot-primary-rgb, 33, 150, 243)) ) !important;--vot-helper-safari1: rgba( var(--vot-onsurface-rgb, 0, 0, 0), 0.38 ) !important;--vot-helper-safari2: rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.6) !important;--vot-helper-safari3: rgba( var(--vot-onsurface-rgb, 0, 0, 0), 0.87 ) !important;position:relative !important;display:inline-block;padding-top:6px !important;font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system) !important;font-size:16px !important;line-height:1.5 !important;text-align:start !important}.vot-textfield[hidden]{display:none !important}.vot-textfield>input,.vot-textfield>textarea{-webkit-box-sizing:border-box !important;-moz-box-sizing:border-box !important;box-sizing:border-box !important;margin:0 !important;border-style:solid !important;border-width:1px !important;border-color:rgba(0,0,0,0) var(--vot-helper-safari2) var(--vot-helper-safari2) !important;border-radius:4px !important;padding:15px 13px 15px !important;width:100% !important;height:inherit !important;color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.87) !important;-webkit-text-fill-color:currentColor !important;background-color:rgba(0,0,0,0) !important;box-shadow:inset 1px 0 rgba(0,0,0,0),inset -1px 0 rgba(0,0,0,0),inset 0 -1px rgba(0,0,0,0) !important;font-family:inherit !important;font-size:inherit !important;line-height:inherit !important;caret-color:var(--vot-helper-theme) !important;transition:border .2s,box-shadow .2s !important}.vot-textfield>input:not(:focus):placeholder-shown,.vot-textfield>textarea:not(:focus):placeholder-shown{border-top-color:var(--vot-helper-safari2) !important}.vot-textfield>input+span,.vot-textfield>textarea+span{position:absolute !important;top:0 !important;left:0 !important;display:flex !important;width:100% !important;max-height:100% !important;color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.6) !important;font-size:75% !important;line-height:15px !important;cursor:text !important;transition:color .2s,font-size .2s,line-height .2s !important;pointer-events:none !important}.vot-textfield>input:not(:focus):placeholder-shown+span,.vot-textfield>textarea:not(:focus):placeholder-shown+span{font-size:inherit !important;line-height:68px !important}.vot-textfield>input+span::before,.vot-textfield>input+span::after,.vot-textfield>textarea+span::before,.vot-textfield>textarea+span::after{content:"" !important;display:block !important;-webkit-box-sizing:border-box !important;-moz-box-sizing:border-box !important;box-sizing:border-box !important;margin-top:6px !important;border-top:solid 1px var(--vot-helper-safari2) !important;min-width:10px !important;height:8px !important;pointer-events:none !important;box-shadow:inset 0 1px rgba(0,0,0,0) !important;transition:border .2s,box-shadow .2s !important}.vot-textfield>input+span::before,.vot-textfield>textarea+span::before{margin-right:4px !important;border-left:solid 1px rgba(0,0,0,0) !important;border-radius:4px 0 !important}.vot-textfield>input+span::after,.vot-textfield>textarea+span::after{flex-grow:1 !important;margin-left:4px !important;border-right:solid 1px rgba(0,0,0,0) !important;border-radius:0 4px !important}.vot-textfield>input:not(:focus):placeholder-shown+span::before,.vot-textfield>input:not(:focus):placeholder-shown+span::after,.vot-textfield>textarea:not(:focus):placeholder-shown+span::before,.vot-textfield>textarea:not(:focus):placeholder-shown+span::after{border-top-color:rgba(0,0,0,0) !important}.vot-textfield:hover>input,.vot-textfield:hover>textarea{border-color:rgba(0,0,0,0) var(--vot-helper-safari3) var(--vot-helper-safari3) !important}.vot-textfield:hover>input+span::before,.vot-textfield:hover>input+span::after,.vot-textfield:hover>textarea+span::before,.vot-textfield:hover>textarea+span::after{border-top-color:var(--vot-helper-safari3) !important}.vot-textfield:hover>input:not(:focus):placeholder-shown,.vot-textfield:hover>textarea:not(:focus):placeholder-shown{border-color:var(--vot-helper-safari3) !important}.vot-textfield>input:focus,.vot-textfield>textarea:focus{border-color:rgba(0,0,0,0) var(--vot-helper-theme) var(--vot-helper-theme) !important;border-top-color:transparent !important;box-shadow:inset 1px 0 var(--vot-helper-theme),inset -1px 0 var(--vot-helper-theme),inset 0 -2px var(--vot-helper-theme) !important;outline:none !important}.vot-textfield>input:focus+span,.vot-textfield>textarea:focus+span{color:var(--vot-helper-theme) !important}.vot-textfield>input:focus+span::before,.vot-textfield>input:focus+span::after,.vot-textfield>textarea:focus+span::before,.vot-textfield>textarea:focus+span::after{border-top-color:var(--vot-helper-theme) !important}.vot-textfield>input:disabled,.vot-textfield>textarea:disabled{border-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.06) !important;color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38) !important;background-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.06) !important;box-shadow:inset 1px 0 rgba(0,0,0,0),inset -1px 0 rgba(0,0,0,0),inset 0 -1px rgba(0,0,0,0) !important;cursor:initial !important}.vot-textfield>input:disabled+span,.vot-textfield>textarea:disabled+span{color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38) !important}.vot-textfield>input:disabled+span::before,.vot-textfield>input:disabled+span::after,.vot-textfield>textarea:disabled+span::before,.vot-textfield>textarea:disabled+span::after{border-top-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.06) !important}.vot-textfield>input:disabled::placeholder,.vot-textfield>textarea:disabled::placeholder{color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38) !important}.vot-textfield>input[aria-invalid="true"],.vot-textfield>textarea[aria-invalid="true"]{border-color:rgba(255,0,0,0) #b00020 #b00020 !important}.vot-textfield>input[aria-invalid="true"]+span,.vot-textfield>textarea[aria-invalid="true"]+span{color:#b00020 !important}.vot-textfield>input[aria-invalid="true"]+span::before,.vot-textfield>input[aria-invalid="true"]+span::after,.vot-textfield>textarea[aria-invalid="true"]+span::before,.vot-textfield>textarea[aria-invalid="true"]+span::after{border-top-color:#b00020 !important}.vot-textfield>input+span>span,.vot-textfield>textarea+span>span{padding-left:4px;padding-right:4px;display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;transform-origin:left bottom;transition:inherit}.vot-dictionary-output{--vot-helper-surface: rgba( var(--vot-surface-rgb, 255, 255, 255) );display:block;white-space:pre-wrap !important;padding:16px 16px 4px !important;border-radius:4px !important;box-shadow:0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12) !important;background-color:var(--vot-helper-surface) !important;font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system) !important;font-size:16px !important}.vot-dictionary-output[hidden]{display:none !important}.vot-dictionary-output>.vot-dictionary-content{display:flex !important;padding:0 !important}.vot-dictionary-output>.vot-dictionary-content>div{display:block !important;flex:1 1 0px !important;padding:0 !important;margin:0 !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph{display:block !important;position:relative !important;padding:8px 0 6px 0 !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph[hidden]{display:none !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-caption{display:block !important;color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.6) !important;font-size:14px !important;line-height:1.5 !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-caption[hidden]{display:none !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content{display:block !important;color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.87) !important;line-height:1.5 !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content[hidden]{display:none !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container{display:inline-block !important;position:relative !important;width:18px !important;height:18px !important;vertical-align:middle !important;margin-left:4px !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container[hidden]{display:none !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container>.vot-audio-play{display:inline-block !important;width:inherit !important;height:inherit !important;background-size:contain !important;background-position:center !important;background-repeat:no-repeat !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container>.vot-audio-play[hidden]{display:none !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container>.vot-audio-play[aria-checked=true]{opacity:0 !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container>.vot-audio-play[aria-checked=false]{opacity:1 !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container>.vot-audio-play.vot-ready{cursor:pointer !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container>.vot-audio-play.vot-busy{cursor:wait !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container>.vot-audio-play.vot-disabled{opacity:.38 !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container>.vot-audio-play::before{content:"" !important;display:block !important;width:100% !important;height:100% !important;background-size:contain !important;background-position:center !important;background-repeat:no-repeat !important;background-image:url(https://translate.yandex.ru/icons/play-sound.svg) !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container>.vot-audio-play.vot-busy::before{background-image:url(https://translate.yandex.ru/icons/play-sound-busy.svg) !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container>.vot-audio-play.vot-disabled::before{background-image:url(https://translate.yandex.ru/icons/play-sound-disabled.svg) !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container>.vot-audio-play[aria-checked=true]::before{background-image:url(https://translate.yandex.ru/icons/play-sound-stop.svg) !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-translation{display:block !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-translation[hidden]{display:none !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-translation>.vot-meanings{display:block !important;margin-left:4px !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-translation>.vot-meanings[hidden]{display:none !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-translation>.vot-meanings>.vot-meaning{display:inline-block !important;margin-right:4px !important;color:rgb(var(--vot-helper-theme)) !important;line-height:1.5 !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-translation>.vot-meanings>.vot-meaning[hidden]{display:none !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-translation>.vot-examples{display:block !important;margin-left:4px !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-translation>.vot-examples[hidden]{display:none !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-translation>.vot-examples>.vot-example{display:block !important;color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.6) !important;line-height:1.5 !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-translation>.vot-examples>.vot-example[hidden]{display:none !important}.vot-io-loading{position:absolute !important;top:50% !important;left:50% !important;transform:translate(-50%, -50%) !important;pointer-events:none !important}.vot-io-loading>div{display:inline-block !important;width:40px !important;height:40px !important;vertical-align:middle !important}.vot-io-loading>div::after{content:" " !important;display:block !important;width:40px !important;height:40px !important;margin:1px !important;border-radius:50% !important;border:5px solid !important;border-color:var(--vot-helper-theme) transparent var(--vot-helper-theme) transparent !important;-webkit-animation:vot-io-loading 1.2s linear infinite !important;animation:vot-io-loading 1.2s linear infinite !important}@-webkit-keyframes vot-io-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes vot-io-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = `${id} ${count}`;
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addElementStyle(obj, options),
        references: 1,
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);

  api.update(obj);

  return function update(newObj) {
    if (newObj) {
      if (
        newObj.css === obj.css &&
        newObj.media === obj.media &&
        newObj.sourceMap === obj.sourceMap
      ) {
        return;
      }

      api.update((obj = newObj));
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};

  list = list || [];

  var lastIdentifiers = modulesToDom(list, options);

  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);

      if (stylesInDom[index].references === 0) {
        stylesInDom[index].updater();

        stylesInDom.splice(index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/***/ ((module) => {

"use strict";


var memo = {};

module.exports = function (options) {
  var target = options.target || "head";
  var targetSelector = options.insert || "head";
  var parent = memo[targetSelector];

  if (!parent) {
    parent = memo[targetSelector] = document.querySelector(targetSelector);
  }

  if (!parent) {
    throw new Error(
      "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
    );
  }

  var lastStyleElementInsertedAtTop = memo[target];

  if (options.insertAt === "top") {
    if (!lastStyleElementInsertedAtTop) {
      parent.insertBefore(
        (lastStyleElementInsertedAtTop = document.createElement("style")),
        parent.firstChild
      );
    }

    return function insert(styleElement) {
      parent.insertBefore(styleElement, lastStyleElementInsertedAtTop);
    };
  }

  return function insert(styleElement) {
    parent.appendChild(styleElement);
  };
};


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/***/ ((module) => {

"use strict";


module.exports = function (options) {
  var element = document.createElement("style");

  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);

  return element;
};


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/***/ ((module) => {

"use strict";


module.exports = function (options) {
  var style = options.insertStyleElement(options);

  return {
    update: function update(obj) {
      if (obj.css) {
        style.textContent = obj.css;
      }

      if (obj.media) {
        style.setAttribute("media", obj.media);
      }

      if (obj.sourceMap) {
        style.setAttribute("data-source-map", obj.sourceMap);
      }
    },
    remove: function remove() {
      style.parentNode.removeChild(style);
    },
  };
};


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/***/ ((module) => {

"use strict";


module.exports = function cssWithMappingToString(item) {
  var content = item[1] || "";
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  return (
    content +
    "\n/*# sourceURL=" +
    cssMapping.sources[0] +
    " */\n/*# sourceMappingURL=data:application/json;base64," +
    btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))) +
    " */"
  );
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/  ******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = (__webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {},
/******/ 		});
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(
			module.exports,
			module,
			module.exports,
			__webpack_require__
		);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (
					__webpack_require__.o(definition, key) &&
					!__webpack_require__.o(exports, key)
				) {
/******/ 					Object.defineProperty(exports, key, {
						enumerable: true,
						get: definition[key],
					});
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) =>
			Object.prototype.hasOwnProperty.call(obj, prop);
/******/ 	})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, {
					value: "Module",
				});
/******/ 			}
/******/ 			Object.defineProperty(exports, "__esModule", {
				value: true,
			});
/******/ 		};
/******/ 	})();
/******/
/************************************************************************/
var __webpack_exports__ = {};
(() => {
	// CONCATENATED MODULE: ./src/index.js
	const bowser = __webpack_require__("./node_modules/bowser/es5.js").default;

	let script = document.createElement("script");
	script.innerHTML = `(function() {
  if (bowser.getParser(window.navigator.userAgent).satisfies({mobile: { safari: ">0" }})) {
    let buttons = document.querySelectorAll(".vot-button");
    buttons.forEach((button) => {
      button.style.fontSize = "20px";
    });
  }
})();`;
	document.head.appendChild(script);
})();

/******/ })();
/******/ })();
/*!
 ** Voice-Over-Translation V1.5.3.3 (17-10-2022) - Yandex-Translate
 ** https://github.com/ilyhalight/voice-over-translation
 **/
/******/ (() => {
var __webpack_exports__ = {};
/*!************************************************************!*\
  !*** ./src/styles/main.scss ***!
  \************************************************************/
var module = __webpack_require__.exports;
__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(
	__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss"),
	{
		insert: "head",
		singleton: false,
	},
	{
		styleTagTransform: __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),
		setAttributes: function (styleElement) {
			styleElement.setAttribute("data-style", "1");
		},
		insertStyleElement: __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),
		domAPI: __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),
		insertBySelector: __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),
	}
);

module.exports = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js")();
module.exports.push([
	"module.id",
	".vot-button {--vot-helper-theme: var( --vot-theme-rgb, var(--vot-primary-rgb, 33, 150, 243) );--vot-helper-ontheme: var( --vot-ontheme-rgb, var(--vot-onprimary-rgb, 255, 255, 255) );position:relative;display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:none;border-radius:4px;padding:0 16px;min-width:64px;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;color:rgb(var(--vot-helper-ontheme));background-color:rgb(var(--vot-helper-theme));box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);font-family:var(--vot-font-family, \"Roboto\", \"Segoe UI\", BlinkMacSystemFont, system-ui, -apple-system);font-size:14px;font-weight:500;line-height:36px;outline:none;cursor:pointer;transition:box-shadow .2s}.vot-button[hidden]{display:none !important}.vot-button::-moz-focus-inner{border:none}.vot-button::before,.vot-button::after{content:\"\";position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;opacity:0}.vot-button::before{background-color:rgb(var(--vot-helper-ontheme));transition:opacity .2s}.vot-button::after{background:radial-gradient(circle at center, currentColor 1%, transparent 1%) center/10000% 10000% no-repeat;transition:opacity 1s,background-size .5s}.vot-button:hover{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.vot-button:hover::before{opacity:.08}.vot-button:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.vot-button:active::after{opacity:.32;background-size:100% 100%;transition:background-size 0s}.vot-button:disabled{background-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.12);color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38);box-shadow:none;cursor:initial}.vot-button:disabled::before,.vot-button:disabled::after{opacity:0}.vot-outlined-button{--vot-helper-theme: var( --vot-theme-rgb, var(--vot-primary-rgb, 33, 150, 243) );position:relative;display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;border:solid 1px;border-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.24);border-radius:4px;padding:0 16px;min-width:64px;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;color:rgb(var(--vot-helper-theme));background-color:rgba(0,0,0,0);font-family:var(--vot-font-family, \"Roboto\", \"Segoe UI\", BlinkMacSystemFont, system-ui, -apple-system);font-size:14px;font-weight:500;line-height:34px;outline:none;cursor:pointer}.vot-outlined-button[hidden]{display:none !important}.vot-outlined-button::-moz-focus-inner{border:none}.vot-outlined-button::before,.vot-outlined-button::after{content:\"\";position:absolute;border-radius:3px;top:0;right:0;bottom:0;left:0;opacity:0}.vot-outlined-button::before{background-color:rgb(var(--vot-helper-theme));transition:opacity .2s}.vot-outlined-button::after{background:radial-gradient(circle at center, currentColor 1%, transparent 1%) center/10000% 10000% no-repeat;transition:opacity 1s,background-size .5s}.vot-outlined-button:hover::before{opacity:.04}.vot-outlined-button:active::after{opacity:.16;background-size:100% 100%;transition:background-size 0s}.vot-outlined-button:disabled{background-color:rgba(0,0,0,0);color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38);cursor:initial}.vot-outlined-button:disabled::before,.vot-outlined-button:disabled::after{opacity:0}.vot-text-button{--vot-helper-theme: var( --vot-theme-rgb, var(--vot-primary-rgb, 33, 150, 243) );position:relative;display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;border:none;border-radius:4px;padding:0 8px;min-width:64px;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;color:rgb(var(--vot-helper-theme));background-color:rgba(0,0,0,0);font-family:var(--vot-font-family, \"Roboto\", \"Segoe UI\", BlinkMacSystemFont, system-ui, -apple-system);font-size:14px;font-weight:500;line-height:36px;outline:none;cursor:pointer}.vot-text-button[hidden]{display:none !important}.vot-text-button::-moz-focus-inner{border:none}.vot-text-button::before,.vot-text-button::after{content:\"\";position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;opacity:0}.vot-text-button::before{background-color:rgb(var(--vot-helper-theme));transition:opacity .2s}.vot-text-button::after{background:radial-gradient(circle at center, currentColor 1%, transparent 1%) center/10000% 10000% no-repeat;transition:opacity 1s,background-size .5s}.vot-text-button:hover::before{opacity:.04}.vot-text-button:active::after{opacity:.16;background-size:100% 100%;transition:background-size 0s}.vot-text-button:disabled{background-color:rgba(0,0,0,0);color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38);cursor:initial}.vot-text-button:disabled::before,.vot-text-button:disabled::after{opacity:0}.vot-icon-button{--vot-helper-onsurface: rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.87);position:relative;display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;border:none;border-radius:50%;padding:0;width:36px;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;fill:var(--vot-helper-onsurface);color:var(--vot-helper-onsurface);background-color:rgba(0,0,0,0);font-family:var(--vot-font-family, \"Roboto\", \"Segoe UI\", BlinkMacSystemFont, system-ui, -apple-system);font-size:14px;font-weight:500;line-height:36px;outline:none;cursor:pointer}.vot-icon-button[hidden]{display:none !important}.vot-icon-button::-moz-focus-inner{border:none}.vot-icon-button::before,.vot-icon-button::after{content:\"\";position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;opacity:0}.vot-icon-button::before{background-color:var(--vot-helper-onsurface);transition:opacity .2s}.vot-icon-button::after{background:radial-gradient(circle at center, currentColor 1%, transparent 1%) center/10000% 10000% no-repeat;transition:opacity .3s,background-size .4s}.vot-icon-button:hover::before{opacity:.04}.vot-icon-button:active::after{opacity:.32;background-size:100% 100%;transition:background-size 0s,opacity 0s}.vot-icon-button:disabled{background-color:rgba(0,0,0,0);color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38);fill:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38);cursor:initial}.vot-icon-button:disabled::before,.vot-icon-button:disabled::after{opacity:0}.vot-textfield{--vot-helper-theme: rgb( var(--vot-theme-rgb, var(--vot-primary-rgb, 33, 150, 243)) ) !important;--vot-helper-safari1: rgba( var(--vot-onsurface-rgb, 0, 0, 0), 0.38 ) !important;--vot-helper-safari2: rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.6) !important;--vot-helper-safari3: rgba( var(--vot-onsurface-rgb, 0, 0, 0), 0.87 ) !important;position:relative !important;display:inline-block;padding-top:6px !important;font-family:var(--vot-font-family, \"Roboto\", \"Segoe UI\", BlinkMacSystemFont, system-ui, -apple-system) !important;font-size:16px !important;line-height:1.5 !important;text-align:start !important}.vot-textfield[hidden]{display:none !important}.vot-textfield>input,.vot-textfield>textarea{-webkit-box-sizing:border-box !important;-moz-box-sizing:border-box !important;box-sizing:border-box !important;margin:0 !important;border-style:solid !important;border-width:1px !important;border-color:rgba(0,0,0,0) var(--vot-helper-safari2) var(--vot-helper-safari2) !important;border-radius:4px !important;padding:15px 13px 15px !important;width:100% !important;height:inherit !important;color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.87) !important;-webkit-text-fill-color:currentColor !important;background-color:rgba(0,0,0,0) !important;box-shadow:inset 1px 0 rgba(0,0,0,0),inset -1px 0 rgba(0,0,0,0),inset 0 -1px rgba(0,0,0,0) !important;font-family:inherit !important;font-size:inherit !important;line-height:inherit !important;caret-color:var(--vot-helper-theme) !important;transition:border .2s,box-shadow .2s !important}.vot-textfield>input:not(:focus):placeholder-shown,.vot-textfield>textarea:not(:focus):placeholder-shown{border-top-color:var(--vot-helper-safari2) !important}.vot-textfield>input+span,.vot-textfield>textarea+span{position:absolute !important;top:0 !important;left:0 !important;display:flex !important;width:100% !important;max-height:100% !important;color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.6) !important;font-size:75% !important;line-height:15px !important;cursor:text !important;transition:color .2s,font-size .2s,line-height .2s !important;pointer-events:none !important}.vot-textfield>input:not(:focus):placeholder-shown+span,.vot-textfield>textarea:not(:focus):placeholder-shown+span{font-size:inherit !important;line-height:68px !important}.vot-textfield>input+span::before,.vot-textfield>input+span::after,.vot-textfield>textarea+span::before,.vot-textfield>textarea+span::after{content:\"\" !important;display:block !important;-webkit-box-sizing:border-box !important;-moz-box-sizing:border-box !important;box-sizing:border-box !important;margin-top:6px !important;border-top:solid 1px var(--vot-helper-safari2) !important;min-width:10px !important;height:8px !important;pointer-events:none !important;box-shadow:inset 0 1px rgba(0,0,0,0) !important;transition:border .2s,box-shadow .2s !important}.vot-textfield>input+span::before,.vot-textfield>textarea+span::before{margin-right:4px !important;border-left:solid 1px rgba(0,0,0,0) !important;border-radius:4px 0 !important}.vot-textfield>input+span::after,.vot-textfield>textarea+span::after{flex-grow:1 !important;margin-left:4px !important;border-right:solid 1px rgba(0,0,0,0) !important;border-radius:0 4px !important}.vot-textfield>input:not(:focus):placeholder-shown+span::before,.vot-textfield>input:not(:focus):placeholder-shown+span::after,.vot-textfield>textarea:not(:focus):placeholder-shown+span::before,.vot-textfield>textarea:not(:focus):placeholder-shown+span::after{border-top-color:rgba(0,0,0,0) !important}.vot-textfield:hover>input,.vot-textfield:hover>textarea{border-color:rgba(0,0,0,0) var(--vot-helper-safari3) var(--vot-helper-safari3) !important}.vot-textfield:hover>input+span::before,.vot-textfield:hover>input+span::after,.vot-textfield:hover>textarea+span::before,.vot-textfield:hover>textarea+span::after{border-top-color:var(--vot-helper-safari3) !important}.vot-textfield:hover>input:not(:focus):placeholder-shown,.vot-textfield:hover>textarea:not(:focus):placeholder-shown{border-color:var(--vot-helper-safari3) !important}.vot-textfield>input:focus,.vot-textfield>textarea:focus{border-color:rgba(0,0,0,0) var(--vot-helper-theme) var(--vot-helper-theme) !important;border-top-color:transparent !important;box-shadow:inset 1px 0 var(--vot-helper-theme),inset -1px 0 var(--vot-helper-theme),inset 0 -2px var(--vot-helper-theme) !important;outline:none !important}.vot-textfield>input:focus+span,.vot-textfield>textarea:focus+span{color:var(--vot-helper-theme) !important}.vot-textfield>input:focus+span::before,.vot-textfield>input:focus+span::after,.vot-textfield>textarea:focus+span::before,.vot-textfield>textarea:focus+span::after{border-top-color:var(--vot-helper-theme) !important}.vot-textfield>input:disabled,.vot-textfield>textarea:disabled{border-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.06) !important;color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38) !important;background-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.06) !important;box-shadow:inset 1px 0 rgba(0,0,0,0),inset -1px 0 rgba(0,0,0,0),inset 0 -1px rgba(0,0,0,0) !important;cursor:initial !important}.vot-textfield>input:disabled+span,.vot-textfield>textarea:disabled+span{color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38) !important}.vot-textfield>input:disabled+span::before,.vot-textfield>input:disabled+span::after,.vot-textfield>textarea:disabled+span::before,.vot-textfield>textarea:disabled+span::after{border-top-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.06) !important}.vot-textfield>input:disabled::placeholder,.vot-textfield>textarea:disabled::placeholder{color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38) !important}.vot-textfield>input[aria-invalid=\"true\"],.vot-textfield>textarea[aria-invalid=\"true\"]{border-color:rgba(255,0,0,0) #b00020 #b00020 !important}.vot-textfield>input[aria-invalid=\"true\"]+span,.vot-textfield>textarea[aria-invalid=\"true\"]+span{color:#b00020 !important}.vot-textfield>input[aria-invalid=\"true\"]+span::before,.vot-textfield>input[aria-invalid=\"true\"]+span::after,.vot-textfield>textarea[aria-invalid=\"true\"]+span::before,.vot-textfield>textarea[aria-invalid=\"true\"]+span::after{border-top-color:#b00020 !important}.vot-textfield>input+span>span,.vot-textfield>textarea+span>span{padding-left:4px;padding-right:4px;display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;transform-origin:left bottom;transition:inherit}.vot-dictionary-output{--vot-helper-surface: rgba( var(--vot-surface-rgb, 255, 255, 255) );display:block;white-space:pre-wrap !important;padding:16px 16px 4px !important;border-radius:4px !important;box-shadow:0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12) !important;background-color:var(--vot-helper-surface) !important;font-family:var(--vot-font-family, \"Roboto\", \"Segoe UI\", BlinkMacSystemFont, system-ui, -apple-system) !important;font-size:16px !important}.vot-dictionary-output[hidden]{display:none !important}.vot-dictionary-output>.vot-dictionary-content{display:flex !important;padding:0 !important}.vot-dictionary-output>.vot-dictionary-content>div{display:block !important;flex:1 1 0px !important;padding:0 !important;margin:0 !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph{display:block !important;position:relative !important;padding:8px 0 6px 0 !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph[hidden]{display:none !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-caption{display:block !important;color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.6) !important;font-size:14px !important;line-height:1.5 !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-caption[hidden]{display:none !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content{display:block !important;color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.87) !important;line-height:1.5 !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content[hidden]{display:none !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container{display:inline-block !important;position:relative !important;width:18px !important;height:18px !important;vertical-align:middle !important;margin-left:4px !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container[hidden]{display:none !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container>.vot-audio-play{display:inline-block !important;width:inherit !important;height:inherit !important;background-size:contain !important;background-position:center !important;background-repeat:no-repeat !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container>.vot-audio-play[hidden]{display:none !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container>.vot-audio-play[aria-checked=true]{opacity:0 !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container>.vot-audio-play[aria-checked=false]{opacity:1 !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container>.vot-audio-play.vot-ready{cursor:pointer !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container>.vot-audio-play.vot-busy{cursor:wait !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container>.vot-audio-play.vot-disabled{opacity:.38 !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container>.vot-audio-play::before{content:\"\" !important;display:block !important;width:100% !important;height:100% !important;background-size:contain !important;background-position:center !important;background-repeat:no-repeat !important;background-image:url(https://translate.yandex.ru/icons/play-sound.svg) !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container>.vot-audio-play.vot-busy::before{background-image:url(https://translate.yandex.ru/icons/play-sound-busy.svg) !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container>.vot-audio-play.vot-disabled::before{background-image:url(https://translate.yandex.ru/icons/play-sound-disabled.svg) !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-audio-container>.vot-audio-play[aria-checked=true]::before{background-image:url(https://translate.yandex.ru/icons/play-sound-stop.svg) !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-translation{display:block !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-translation[hidden]{display:none !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-paragraph-content>.vot-translation>.vot-meanings{display:block !important;margin-left:4px !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-translation>.vot-meanings[hidden]{display:none !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-translation>.vot-meanings>.vot-meaning{display:inline-block !important;margin-right:4px !important;color:rgb(var(--vot-helper-theme)) !important;line-height:1.5 !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-translation>.vot-meanings>.vot-meaning[hidden]{display:none !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-translation>.vot-examples{display:block !important;margin-left:4px !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-translation>.vot-examples[hidden]{display:none !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-translation>.vot-examples>.vot-example{display:block !important;color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.6) !important;line-height:1.5 !important}.vot-dictionary-output>.vot-dictionary-content>div>.vot-paragraph>.vot-translation>.vot-examples>.vot-example[hidden]{display:none !important}.vot-io-loading{position:absolute !important;top:50% !important;left:50% !important;transform:translate(-50%, -50%) !important;pointer-events:none !important}.vot-io-loading>div{display:inline-block !important;width:40px !important;height:40px !important;vertical-align:middle !important}.vot-io-loading>div::after{content:\" \" !important;display:block !important;width:40px !important;height:40px !important;margin:1px !important;border-radius:50% !important;border:5px solid !important;border-color:var(--vot-helper-theme) transparent var(--vot-helper-theme) transparent !important;-webkit-animation:vot-io-loading 1.2s linear infinite !important;animation:vot-io-loading 1.2s linear infinite !important}@-webkit-keyframes vot-io-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes vot-io-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
	"",
]);

/******/ })();
/************************************************************************/
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./src/js/yandex-voice-over/main.js ***!
  \******************************************/
var main_module = __webpack_require__.exports;

// requires
__webpack_require__("./node_modules/protobufjs/dist/light/protobuf.min.js");
__webpack_require__("./node_modules/hls.js/dist/hls.light.min.js");

(function (window) {
	if (typeof window !== "undefined" && window) {
		// HTML DOM API
		let GM_addStyle = window.GM_addStyle;
		if (!GM_addStyle) {
			GM_addStyle = (css) => {
				const style = document.createElement("style");
				style.textContent = css;
				document.head.appendChild(style);
			};
		}
		const GM_xmlhttpRequest = window.GM_xmlhttpRequest;

		// webpack dependency `protobufjs`
		const $protobuf = window.protobuf;

		// window.fetch
		const fetch = window.fetch;

		// Yandex Video Translation Service API
		const YandexVideoTranslationServiceAPI = {
			Translate: "https://voice-over-translation.toil.cc/",
		};

		// Service Worker URL
		const SERVICE_WORKER_URL = "https://yandex-voice-over.sw.toil.cc/";

		// Initial check
		const CHECK_INTERVALES = 5 * 1000;
		let checkTimer;

		// Ensure HTML5 audio support
		if (!document.createElement("audio").canPlayType) {
			return;
		}

		// Ensure Media Source Extensions (MSE) support
		if (!window.MediaSource || !window.MediaSource.isTypeSupported("audio/mp4; codecs=\"mp4a.40.2\"")) {
			return;
		}

		// Yandex TTS Engine
		const YandexTTSEngine = (() => {
			// TTS API
			const TTS_API = "https://tts.voicetech.yandex.net/tts";

			// Initialize queue
			let queue = [];

			// Initialize audio element
			const audio = new Audio();
			audio.onended = () => {
				if (queue.length)
					{
						// Get next item from queue
						const item = queue.shift();

						// Set audio source
						audio.src = item.url;

						// Play audio
						audio.play();
					}
				};
			
			// Get audio URL
			const getAudioURL = async (text, lang) => {
				const response = await fetch(`${TTS_API}?text=${encodeURIComponent(text)}&lang=${lang}`);
				const data = await response.json();
				return data.url;
			};

			// Add to queue
			const addToQueue = async (text, lang) => {
				const url = await getAudioURL(text, lang);
				queue.push({ text, lang, url });
				if (audio.paused) {
					audio.src = url;
					audio.play();
				}
			};

			return {
				addToQueue,
			};
		})();

		// Insert CSS
		GM_addStyle(`
			.vot-button {
				position: relative;
				display: inline-block;
				box-sizing: border-box;
				border: none;
				border-radius: 4px;
				padding: 0 16px;
				min-width: 64px;
				height: 36px;
				vertical-align: middle;
				text-align: center;
				text-overflow: ellipsis;
				color: rgb(255, 255, 255);
				background-color: rgb(33, 150, 243);
				box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);
				font-family: "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system;
				font-size: 14px;
				font-weight: 500;
				line-height: 36px;
				outline: none;
				cursor: pointer;
				transition: box-shadow .2s;
			}

			.vot-button[hidden] {
				display: none !important;
			}

			.vot-button:hover {
				box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);
			}

			.vot-button:active {
				box-shadow: 0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);
			}

			.vot-button:disabled {
				background-color: rgba(0, 0, 0, 0.12);
				color: rgba(0, 0, 0, 0.38);
				box-shadow: none;
				cursor: initial;
			}
		`);

		// Initialize
		const init = () => {
			const container = document.createElement('div');
			container.className = 'vot-container';
			container.innerHTML = `
				<button class="vot-button">Translate</button>
			`;
			document.body.appendChild(container);

			const button = container.querySelector('.vot-button');
			button.addEventListener('click', () => {
				const video = document.querySelector('video');
				if (video) {
					const text = 'Translating the video...';
					const lang = 'en-US';
					YandexTTSEngine.addToQueue(text, lang);
				}
			});
		};

		// Check for video element
		const checkForVideo = () => {
			const video = document.querySelector('video');
			if (video) {
				clearInterval(checkTimer);
				init();
			}
		};

		checkTimer = setInterval(checkForVideo, CHECK_INTERVALES);

		// Run the script
		checkForVideo();
	}
})(window);

