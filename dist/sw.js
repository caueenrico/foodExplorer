if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>n(e,o),f={module:{uri:o},exports:c,require:t};i[o]=Promise.all(s.map((e=>f[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-KWv9Les2.css",revision:null},{url:"assets/index-QXzk70Q2.js",revision:null},{url:"index.html",revision:"ee5211c3f6f51165ed3b809c7323f151"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"0092f40a08377e35719b4dd28af2e354"},{url:"apple-touch-icon.png",revision:"909242e0951221cf10164ff0c19a7b29"},{url:"android-chrome-192x192.png",revision:"6db8b408fc23e9e7197064a5072a8788"},{url:"./android-chrome-512x512.png",revision:"0ac0e103a28bdfebcece46f9994c3b5e"},{url:"manifest.webmanifest",revision:"bb0f18f5fc28429136effaba80bdbc80"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));