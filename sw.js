if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,o)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const f=e=>i(e,n),d={module:{uri:n},exports:t,require:f};s[n]=Promise.all(r.map((e=>d[e]||f(e)))).then((e=>(o(...e),t)))}}define(["./workbox-e86d08d3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.css",revision:"1820b5caa9d8fede0ee87f63506bcb45"},{url:"img/logopwa.jpg",revision:"2081eadaee3331db9f5d0a9d541f47fc"},{url:"index.html",revision:"4999ee50168319fffc44bbe333765a3f"},{url:"js/app.js",revision:"5baea13736551cf5e5484f31217d0760"},{url:"manifest.json",revision:"d1d7a242f49a9cecfbbfd20b2d1d7fe5"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
