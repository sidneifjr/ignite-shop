if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const o=e=>n(e,i),r={module:{uri:i},exports:t,require:o};s[i]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(c(...e),t)))}}define(["./workbox-80ca14c3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/WGxNoG4bCIoZr1T56ps3J/_buildManifest.js",revision:"dd44d9b95fc1e6a2b6603af4bd7354b2"},{url:"/_next/static/WGxNoG4bCIoZr1T56ps3J/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/651-468ee3f3edcec7c9.js",revision:"468ee3f3edcec7c9"},{url:"/_next/static/chunks/framework-a4b9f4216022cc2d.js",revision:"a4b9f4216022cc2d"},{url:"/_next/static/chunks/main-873b1b00527f5cd2.js",revision:"873b1b00527f5cd2"},{url:"/_next/static/chunks/pages/404-afa2d8f524b7b1cf.js",revision:"afa2d8f524b7b1cf"},{url:"/_next/static/chunks/pages/_app-cb86baf3f0c22149.js",revision:"cb86baf3f0c22149"},{url:"/_next/static/chunks/pages/_error-019743681d857ba8.js",revision:"019743681d857ba8"},{url:"/_next/static/chunks/pages/index-558e6ed3c0ba1c60.js",revision:"558e6ed3c0ba1c60"},{url:"/_next/static/chunks/pages/product/%5Bid%5D-1f1b6cbaaf261c49.js",revision:"1f1b6cbaaf261c49"},{url:"/_next/static/chunks/pages/success-fc7277e6d719d05f.js",revision:"fc7277e6d719d05f"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-fd8027ecb5121007.js",revision:"fd8027ecb5121007"},{url:"/bag.svg",revision:"f9a459972ad6e5084b71c5915e91791f"},{url:"/close.svg",revision:"e74532633e1f54140e7d030719e14283"},{url:"/favicon.svg",revision:"1ba2c36c7592bdc018bfefdb4aa804a8"},{url:"/icon-192x192.png",revision:"ea6334b944d9758786a9b1f8ec3a99f3"},{url:"/icon-256x256.png",revision:"cea46b6ea5ec6ab65467183d533c1346"},{url:"/icon-384x384.png",revision:"b169b0e342a7a7a6d6ade6a241d0c8f0"},{url:"/icon-512x512.png",revision:"211873d1acb5b8f70ad7250733dba2fd"},{url:"/ignite-shop-logo.svg",revision:"f77e2fd8f5106d336326dc1a095719e6"},{url:"/loader.svg",revision:"7562f8fd4ca66317e8eec1951cb2f8aa"},{url:"/manifest.json",revision:"2a5903916e10a2fe340a690ccf82822e"},{url:"/sad.svg",revision:"5a65a02016b9e5e0f6e1419347239319"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));