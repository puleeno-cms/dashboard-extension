if(!self.define){let e,s={};const o=(o,r)=>(o=new URL(o+".js",r).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(r,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let n={};const d=e=>o(e,i),c={module:{uri:i},exports:n,require:d};s[i]=Promise.all(r.map((e=>c[e]||d(e)))).then((e=>(t(...e),n)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/dashboard.css",revision:"b3fc414da2e8cd21fb476f6870d7fa83"},{url:"js/dashboard.js",revision:"d41d8cd98f00b204e9800998ecf8427e"}],{})}));
