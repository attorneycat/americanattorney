!function(e){function t(t){for(var r,o,c=t[0],i=t[1],u=t[2],l=0,p=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(m&&m(t);p.length;)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={11:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(e){return o.p+"templates/"+({0:"vendors~Users/cat/Documents/GitHub/americanattorney/src/pages/components/Contact.jsx~Users/cat/Docum~daa20281",1:"Users/cat/Documents/GitHub/americanattorney/src/pages/404",2:"Users/cat/Documents/GitHub/americanattorney/src/pages/components/Contact.jsx",3:"Users/cat/Documents/GitHub/americanattorney/src/pages/components/ContactForm.jsx",4:"Users/cat/Documents/GitHub/americanattorney/src/pages/components/Hero.jsx",5:"Users/cat/Documents/GitHub/americanattorney/src/pages/components/PictureTextBlock.jsx",6:"Users/cat/Documents/GitHub/americanattorney/src/pages/components/ServicesIOffer.jsx",7:"Users/cat/Documents/GitHub/americanattorney/src/pages/components/Testimonials.jsx",8:"Users/cat/Documents/GitHub/americanattorney/src/pages/components/TextOverPictureBlock.jsx",9:"Users/cat/Documents/GitHub/americanattorney/src/pages/components/core/index",10:"Users/cat/Documents/GitHub/americanattorney/src/pages/index"}[e]||e)+"."+{0:"1e9781f5",1:"6a8cab61",2:"f4d2f54d",3:"46e69244",4:"91c715c7",5:"b1688a15",6:"6a854e3b",7:"2d46115a",8:"f6ddd6d3",9:"f3d3224f",10:"e5ae77a6"}[e]+".js"}(e);var i=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",i.name="ChunkLoadError",i.type=r,i.request=s,n[1](i)}a[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="https://usaatty.com/",o.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var m=i;s.push([61,12,13]),n()}({120:function(e,t,n){var r={".":13,"./":13,"./index":13,"./index.js":13};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id=120},127:function(e,t,n){"use strict";n.r(t),function(e){var r=n(0),a=n.n(r),s=n(24),o=n.n(s),c=n(49),i=n(19);if(t.default=i.a,"undefined"!=typeof document){var u=document.getElementById("root"),m=u.hasChildNodes()?o.a.hydrate:o.a.render,l=function(e){m(a.a.createElement(c.AppContainer,null,a.a.createElement(e,null)),u)};l(i.a),e&&e.hot&&e.hot.accept("./App",(function(){l(i.a)}))}}.call(this,n(128)(e))},19:function(e,t,n){"use strict";var r=n(0),a=n.n(r),s=n(14),o=n(18),c=function(){return a.a.createElement("div",null,"This is a dynamic page! It will not be statically exported, but is available at runtime")};n(132);Object(s.addPrefetchExcludes)(["dynamic"]);t.a=function(){return a.a.createElement(s.Root,null,a.a.createElement("nav",null,a.a.createElement(o.Link,{to:"/"},"Home"),a.a.createElement(o.Link,{to:"/blog"},"Blog"),a.a.createElement(o.Link,{to:"/services"},"Services"),a.a.createElement(o.Link,{to:"/about"},"About"),a.a.createElement(o.Link,{to:"/reviews"},"Reviews"),a.a.createElement(o.Link,{to:"/contact"},"Contact")),a.a.createElement("div",{className:"content"},a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("em",null,"Loading...")},a.a.createElement(o.Router,null,a.a.createElement(c,{path:"dynamic"}),a.a.createElement(s.Routes,{path:"*"})))))}},25:function(e,t,n){"use strict";n.r(t);var r=n(47),a=[{location:"/Users/cat/Documents/GitHub/americanattorney/node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"/Users/cat/Documents/GitHub/americanattorney/node_modules/react-static-plugin-reach-router",plugins:[],hooks:n.n(r)()({})},{location:"/Users/cat/Documents/GitHub/americanattorney/node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"/Users/cat/Documents/GitHub/americanattorney",plugins:[],hooks:{}}];t.default=a},45:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"notFoundTemplate",(function(){return H}));var r=n(2),a=n.n(r),s=n(3),o=n.n(s),c=n(0),i=n.n(c),u=n(5),m=n.n(u);Object(u.setHasBabelPlugin)();var l={loading:function(){return null},error:function(e){return console.error(e.error),i.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},p=m()(o()({id:"/Users/cat/Documents/GitHub/americanattorney/src/pages/404.js",load:function(){return Promise.all([n.e(1).then(n.bind(null,59))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"/Users/cat/Documents/GitHub/americanattorney/src/pages/404.js")},resolve:function(){return 59},chunkName:function(){return"Users/cat/Documents/GitHub/americanattorney/src/pages/404"}}),l);p.template="/Users/cat/Documents/GitHub/americanattorney/src/pages/404.js";var f=m()(o()({id:"/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Contact.jsx",load:function(){return Promise.all([Promise.all([n.e(0),n.e(2)]).then(n.bind(null,51))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Contact.jsx")},resolve:function(){return 51},chunkName:function(){return"Users/cat/Documents/GitHub/americanattorney/src/pages/components/Contact.jsx"}}),l);f.template="/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Contact.jsx";var d=m()(o()({id:"/Users/cat/Documents/GitHub/americanattorney/src/pages/components/ContactForm.jsx",load:function(){return Promise.all([Promise.all([n.e(0),n.e(3)]).then(n.bind(null,52))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"/Users/cat/Documents/GitHub/americanattorney/src/pages/components/ContactForm.jsx")},resolve:function(){return 52},chunkName:function(){return"Users/cat/Documents/GitHub/americanattorney/src/pages/components/ContactForm.jsx"}}),l);d.template="/Users/cat/Documents/GitHub/americanattorney/src/pages/components/ContactForm.jsx";var b=m()(o()({id:"/Users/cat/Documents/GitHub/americanattorney/src/pages/components/core/index.js",load:function(){return Promise.all([Promise.all([n.e(0),n.e(9)]).then(n.bind(null,50))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"/Users/cat/Documents/GitHub/americanattorney/src/pages/components/core/index.js")},resolve:function(){return 50},chunkName:function(){return"Users/cat/Documents/GitHub/americanattorney/src/pages/components/core/index"}}),l);b.template="/Users/cat/Documents/GitHub/americanattorney/src/pages/components/core/index.js";var y=m()(o()({id:"/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Hero.jsx",load:function(){return Promise.all([Promise.all([n.e(0),n.e(4)]).then(n.bind(null,53))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Hero.jsx")},resolve:function(){return 53},chunkName:function(){return"Users/cat/Documents/GitHub/americanattorney/src/pages/components/Hero.jsx"}}),l);y.template="/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Hero.jsx";var g=m()(o()({id:"/Users/cat/Documents/GitHub/americanattorney/src/pages/components/PictureTextBlock.jsx",load:function(){return Promise.all([Promise.all([n.e(0),n.e(5)]).then(n.bind(null,54))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"/Users/cat/Documents/GitHub/americanattorney/src/pages/components/PictureTextBlock.jsx")},resolve:function(){return 54},chunkName:function(){return"Users/cat/Documents/GitHub/americanattorney/src/pages/components/PictureTextBlock.jsx"}}),l);g.template="/Users/cat/Documents/GitHub/americanattorney/src/pages/components/PictureTextBlock.jsx";var h=m()(o()({id:"/Users/cat/Documents/GitHub/americanattorney/src/pages/components/ServicesIOffer.jsx",load:function(){return Promise.all([Promise.all([n.e(0),n.e(6)]).then(n.bind(null,55))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"/Users/cat/Documents/GitHub/americanattorney/src/pages/components/ServicesIOffer.jsx")},resolve:function(){return 55},chunkName:function(){return"Users/cat/Documents/GitHub/americanattorney/src/pages/components/ServicesIOffer.jsx"}}),l);h.template="/Users/cat/Documents/GitHub/americanattorney/src/pages/components/ServicesIOffer.jsx";var j=m()(o()({id:"/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Testimonials.jsx",load:function(){return Promise.all([Promise.all([n.e(0),n.e(7)]).then(n.bind(null,56))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Testimonials.jsx")},resolve:function(){return 56},chunkName:function(){return"Users/cat/Documents/GitHub/americanattorney/src/pages/components/Testimonials.jsx"}}),l);j.template="/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Testimonials.jsx";var x=m()(o()({id:"/Users/cat/Documents/GitHub/americanattorney/src/pages/components/TextOverPictureBlock.jsx",load:function(){return Promise.all([Promise.all([n.e(0),n.e(8)]).then(n.bind(null,57))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"/Users/cat/Documents/GitHub/americanattorney/src/pages/components/TextOverPictureBlock.jsx")},resolve:function(){return 57},chunkName:function(){return"Users/cat/Documents/GitHub/americanattorney/src/pages/components/TextOverPictureBlock.jsx"}}),l);x.template="/Users/cat/Documents/GitHub/americanattorney/src/pages/components/TextOverPictureBlock.jsx";var v=m()(o()({id:"/Users/cat/Documents/GitHub/americanattorney/src/pages/index.js",load:function(){return Promise.all([Promise.all([n.e(0),n.e(10)]).then(n.bind(null,60))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"/Users/cat/Documents/GitHub/americanattorney/src/pages/index.js")},resolve:function(){return 60},chunkName:function(){return"Users/cat/Documents/GitHub/americanattorney/src/pages/index"}}),l);v.template="/Users/cat/Documents/GitHub/americanattorney/src/pages/index.js",t.default={"/Users/cat/Documents/GitHub/americanattorney/src/pages/404.js":p,"/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Contact.jsx":f,"/Users/cat/Documents/GitHub/americanattorney/src/pages/components/ContactForm.jsx":d,"/Users/cat/Documents/GitHub/americanattorney/src/pages/components/core/index.js":b,"/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Hero.jsx":y,"/Users/cat/Documents/GitHub/americanattorney/src/pages/components/PictureTextBlock.jsx":g,"/Users/cat/Documents/GitHub/americanattorney/src/pages/components/ServicesIOffer.jsx":h,"/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Testimonials.jsx":j,"/Users/cat/Documents/GitHub/americanattorney/src/pages/components/TextOverPictureBlock.jsx":x,"/Users/cat/Documents/GitHub/americanattorney/src/pages/index.js":v};var H="/Users/cat/Documents/GitHub/americanattorney/src/pages/404.js"}.call(this,"/")},61:function(e,t,n){n(62),n(118),e.exports=n(124)}});