(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4765],{82685:function(e,t,n){Promise.resolve().then(n.bind(n,56670)),Promise.resolve().then(n.t.bind(n,38173,23)),Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.bind(n,52305))},52305:function(e,t){"use strict";t.default={src:"/_next/static/media/og-image.c7531f82.png",height:630,width:1200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAP1BMVEX//fy5x8Djxbjn6OicvKjM3NKgoJvz8vClvq/09/WnqKeCppLq1smQo5Ta5N7Bv8F+mHrW29ZSf2J9cjz7+PerCm6nAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVR4nGNg4GRnYGXhY2dg5mLj5xUW4GBgZ+IRFGLjYGEAAVZuRk4AEYsA7Zhb4mEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4}},94859:function(e,t,n){"use strict";let r;n.d(t,{a:function(){return eo},c:function(){return L},e:function(){return el},o:function(){return J},s:function(){return _},v:function(){return h}});var i,o={0:8203,1:8204,2:8205,3:8290,4:8291,5:8288,6:65279,7:8289,8:119155,9:119156,a:119157,b:119158,c:119159,d:119160,e:119161,f:119162},s={0:8203,1:8204,2:8205,3:65279},a=[,,,,].fill(String.fromCodePoint(s[0])).join(""),u=Object.fromEntries(Object.entries(s).map(e=>e.reverse())),l=Object.fromEntries(Object.entries(o).map(e=>e.reverse())),c=`${Object.values(o).map(e=>`\\u{${e.toString(16)}}`).join("")}`,p=RegExp(`[${c}]{4,}`,"gu"),f=n(57437);let d=new Uint8Array(16),m=[];for(let e=0;e<256;++e)m.push((e+256).toString(16).slice(1));var y={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function h(e,t,n){if(y.randomUUID&&!t&&!e)return y.randomUUID();let i=(e=e||{}).random||(e.rng||function(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(d)})();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=i[e];return t}return function(e,t=0){return m[e[t+0]]+m[e[t+1]]+m[e[t+2]]+m[e[t+3]]+"-"+m[e[t+4]]+m[e[t+5]]+"-"+m[e[t+6]]+m[e[t+7]]+"-"+m[e[t+8]]+m[e[t+9]]+"-"+m[e[t+10]]+m[e[t+11]]+m[e[t+12]]+m[e[t+13]]+m[e[t+14]]+m[e[t+15]]}(i)}let g=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,v=/_key\s*==\s*['"](.*)['"]/,b=/^\d*:\d*$/;function E(e){return"number"==typeof e||"string"==typeof e&&/^\[\d+\]$/.test(e)}function w(e){return"string"==typeof e?v.test(e.trim()):"object"==typeof e&&"_key"in e}function A(e){if("string"==typeof e&&b.test(e))return!0;if(!Array.isArray(e)||2!==e.length)return!1;let[t,n]=e;return!("number"!=typeof t&&""!==t||"number"!=typeof n&&""!==n)}function k(e){if(!Array.isArray(e))throw Error("Path is not an array");return e.reduce((e,t,n)=>{let r=typeof t;if("number"===r)return"".concat(e,"[").concat(t,"]");if("string"===r)return"".concat(e).concat(0===n?"":".").concat(t);if(w(t)&&t._key)return"".concat(e,'[_key=="').concat(t._key,'"]');if(Array.isArray(t)){let[n,r]=t;return"".concat(e,"[").concat(n,":").concat(r,"]")}throw Error("Unsupported path segment `".concat(JSON.stringify(t),"`"))},"")}function x(e){if("string"!=typeof e)throw Error("Path is not a string");let t=e.match(g);if(!t)throw Error("Invalid path string");return t.map(P)}function P(e){return E(e)?Number(e.replace(/[^\d]/g,"")):w(e)?{_key:e.match(v)[1]}:A(e)?function(e){let[t,n]=e.split(":").map(e=>""===e?e:Number(e));return[t,n]}(e):e}var _=Object.freeze({__proto__:null,fromString:x,get:function(e,t,n){let r="string"==typeof t?x(t):t;if(!Array.isArray(r))throw Error("Path must be an array or a string");let i=e;for(let e=0;e<r.length;e++){let t=r[e];if(E(t)){if(!Array.isArray(i))return n;i=i[t]}if(w(t)){if(!Array.isArray(i))return n;i=i.find(e=>e._key===t._key)}if("string"==typeof t&&(i="object"==typeof i&&null!==i?i[t]:void 0),void 0===i)return n}return i},isIndexSegment:E,isIndexTuple:A,isKeySegment:w,reKeySegment:v,toString:k});let j="drafts.";function L(e){let{baseUrl:t,workspace:n="default",tool:r="default",id:i,type:o,path:s}=e;if(!t)throw Error("baseUrl is required");if(!s)throw Error("path is required");if(!i)throw Error("id is required");if("/"!==t&&t.endsWith("/"))throw Error("baseUrl must not end with a slash");let a="default"===n?void 0:n,u="default"===r?void 0:r,l=i.startsWith(j)?i.slice(j.length):i,c=Array.isArray(s)?k(s.map(e=>{if("string"==typeof e||"number"==typeof e)return e;if(""!==e._key)return{_key:e._key};if(-1!==e._index)return e._index;throw Error("invalid segment:".concat(JSON.stringify(e)))})):s,p=new URLSearchParams({baseUrl:t,id:l,type:o,path:c});a&&p.set("workspace",a),u&&p.set("tool",u);let f=["/"===t?"":t];a&&f.push(a);let d=["mode=presentation","id=".concat(l),"type=".concat(o),"path=".concat(encodeURIComponent(c))];return u&&d.push("tool=".concat(u)),f.push("intent","edit","".concat(d.join(";"),"?").concat(p)),f.join("/")}var I,N,O,U,S=class extends Error{issues;constructor(e){super(e[0].message),this.name="ValiError",this.issues=e}};function C(e,t){return Array.isArray(e)?[void 0,e]:[e,t]}function R(e){return{lang:e?.lang??I?.lang,message:e?.message,abortEarly:e?.abortEarly??I?.abortEarly,abortPipeEarly:e?.abortPipeEarly??I?.abortPipeEarly,skipPipe:e?.skipPipe??I?.skipPipe}}function $(e,t,n,r){var i,o,s;let a=e.message??(o=r.lang,U?.get(t)?.get(o))??("type"===e.type?(i=r.lang,O?.get(i)):null)??n?.message??(s=r.lang,N?.get(s))??r.message;return"function"==typeof a?a(r):a}function T(e,t,n){return{typed:e,output:t,issues:n}}function M(e){let t=typeof e;return"object"===t&&(t=e?Object.getPrototypeOf(e).constructor.name:"null"),"string"===t?`"${e}"`:"number"===t||"bigint"===t||"boolean"===t?`${e}`:t}function z(e,t,n,r){if(e.pipe&&!n?.skipPipe)for(let i of e.pipe){let o=i._parse(t);if(o.issues){for(let t of o.issues){let i=function(e,t,n){let r=n.received??M(n.input),i={reason:e.type,context:n.context.type,expected:n.context.expects,received:r,message:`Invalid ${n.label}: ${n.context.expects?`Expected ${n.context.expects} but r`:"R"}eceived ${r}`,input:n.input,requirement:n.context.requirement,path:n.path,lang:t?.lang,abortEarly:t?.abortEarly,abortPipeEarly:t?.abortPipeEarly,skipPipe:t?.skipPipe};return i.message=$(n.context,n.reference,t,i),i}(e,n,t);r?r.push(i):r=[i]}if(n?.abortEarly||n?.abortPipeEarly)break}else t=o.output}return T(!0,t,r)}function D(e,t,n,r,i){let o=M(n),s=i?.expected??e.expects,a={reason:i?.reason??"type",context:e.type,expected:s,received:o,message:`Invalid type: Expected ${s} but received ${o}`,input:n,path:i?.path,issues:i?.issues,lang:r?.lang,abortEarly:r?.abortEarly,abortPipeEarly:r?.abortPipeEarly,skipPipe:r?.skipPipe};return a.message=$(e,t,r,a),{typed:!1,output:n,issues:[a]}}function q(e,t,n,r){let i;let[o,s,a]=function(e,t,n){if(!e||"object"==typeof e&&!Array.isArray(e)){let[r,i]=C(t,n);return[e,r,i]}let[r,i]=C(e,t);return[void 0,r,i]}(t,n,r);return{type:"object",expects:"Object",async:!1,entries:e,rest:o,message:s,pipe:a,_parse(e,t){if(e&&"object"==typeof e){i=i??Object.entries(this.entries);let n,r=!0,o={};for(let[s,a]of i){let i=e[s],u=a._parse(i,t);if(u.issues){let o={type:"object",origin:"value",input:e,key:s,value:i};for(let e of u.issues)e.path?e.path.unshift(o):e.path=[o],n?.push(e);if(n||(n=u.issues),t?.abortEarly){r=!1;break}}u.typed||(r=!1),(void 0!==u.output||s in e)&&(o[s]=u.output)}if(this.rest&&(!t?.abortEarly||!n)){for(let i in e)if(!(i in this.entries)){let s=e[i],a=this.rest._parse(s,t);if(a.issues){let o={type:"object",origin:"value",input:e,key:i,value:s};for(let e of a.issues)e.path?e.path.unshift(o):e.path=[o],n?.push(e);if(n||(n=a.issues),t?.abortEarly){r=!1;break}}a.typed||(r=!1),o[i]=a.output}}return r?z(this,o,t,n):T(!1,o,n)}return D(this,q,e,t)}}}function W(e,t,n){let r=e._parse(t,R(n));return{typed:r.typed,success:!r.issues,data:r.output,output:r.output,error:r.issues&&new S(r.issues),issues:r.issues}}function J(e){let t="";for(let n of e)"string"!=typeof n?"number"!=typeof n?null!==n&&Array.isArray(n)?(t&&(t+=":"),t+="".concat(n.join(","),"}")):n._key&&(t&&(t+=":"),t+="".concat(n._key)):(t&&(t+=":"),t+="".concat(n)):(t&&(t+="."),t+=n);return t}let V=/^([A-Za-z]+):([0-9]+)$/,G=/^([A-Za-z]+):([0-9]+),([0-9]+)$/,H=/^([A-Za-z]+):([a-z0-9]+)$/,K=function e(t,n){let[r,i]=C(t,n);return{type:"string",expects:"string",async:!1,message:r,pipe:i,_parse(t,n){return"string"==typeof t?z(this,t,n):D(this,e,t,n)}}}([function e(t,n){return{type:"min_length",expects:`>=${t}`,async:!1,message:n,requirement:t,_parse(t){return t.length>=this.requirement?{output:t}:{issues:[{context:this,reference:e,input:t,label:"length",received:`${t.length}`}]}}}}(1)]),B={type:"optional",expects:`${K.expects} | undefined`,async:!1,wrapped:K,default:i,_parse(e,t){if(void 0===e){let t="function"==typeof this.default?this.default():this.default;if(void 0===t)return T(!0,e);e=t}return this.wrapped._parse(e,t)}},Y=q({id:K,path:K,type:B,baseUrl:K,workspace:B,tool:B}),Z=q({origin:K,href:K,data:B}),X="sanity-visual-editing";function F(e,t=!1){return p.lastIndex=0,p.test(e)?function(e,t=!1){var n;let r=function(e){let t=e.match(p);if(t)return function(e,t=!1){let n=Array.from(e);if(n.length%2==0){if(n.length%4||!e.startsWith(a))return function(e,t){var n;let r=[];for(let t=.5*e.length;t--;){let n=`${l[e[2*t].codePointAt(0)]}${l[e[2*t+1].codePointAt(0)]}`;r.unshift(String.fromCharCode(parseInt(n,16)))}let i=[],o=[r.join("")],s=10;for(;o.length;){let e=o.shift();try{if(i.push(JSON.parse(e)),t)break}catch(r){if(!s--)throw r;let t=+(null==(n=r.message.match(/\sposition\s(\d+)$/))?void 0:n[1]);if(!t)throw r;o.unshift(e.substring(0,t),e.substring(t))}}return i}(n,t)}else throw Error("Encoded data has invalid length");let r=[];for(let e=.25*n.length;e--;){let t=n.slice(4*e,4*e+4).map(e=>u[e.codePointAt(0)]).join("");r.unshift(String.fromCharCode(parseInt(t,4)))}if(t){r.shift();let e=r.indexOf("\0");return -1===e&&(e=r.length),[JSON.parse(r.slice(0,e).join(""))]}return r.join("").split("\0").filter(Boolean).map(e=>JSON.parse(e))}(t[0],!0)[0]}(e);return r&&"sanity.io"===r.origin?(t&&(r.href=null==(n=r.href)?void 0:n.replace(".alt","")),JSON.stringify(r)):""}(e,t):""}let Q=e=>e.nodeType===Node.ELEMENT_NODE,ee=e=>"IMG"===e.tagName,et=e=>"TIME"===e.tagName;function en(e){return"path"in e}function er(e){var t,n,r;let i=[];function o(e,t){let n=function(e){try{return function(e){let t=W(Y,e);if(t.success)return t.output;let n=W(Z,e);if(n.success)try{let e=new URL(n.output.href,"undefined"==typeof document?"https://example.com":location.origin);return e.searchParams.size>0?function(e,t,n){let r=e._parse(t,R(void 0));if(r.issues)throw new S(r.issues);return r.output}(Y,Object.fromEntries(e.searchParams.entries())):n.output}catch(e){return console.error("Failed to parse sanity node",e),n.output}}(JSON.parse(e))}catch{return function(e){var t;let n=e.split(";").reduce((e,t)=>{let[n,r]=t.split("=");if(!n||!r)return e;switch(n){case"id":e.id=r;break;case"type":e.type=r;break;case"path":e.path=_.toString(function(e){let t=[];for(let n of e.split(".")){let e=V.exec(n);if(e){t.push(e[1],Number(e[2]));continue}let r=G.exec(n);if(r){t.push(r[1],[Number(r[2]),Number(r[3])]);continue}let i=H.exec(n);i?t.push(i[1],{_key:i[2]}):t.push(n)}return t}(r));break;case"base":e.baseUrl=decodeURIComponent(r);break;case"tool":e.tool=r;break;case"workspace":e.workspace=r}return e},{});if(!Y._parse(n,{abortEarly:!0,skipPipe:R(t)?.skipPipe}).issues)return n}(e)}}(t);if(!n)return;let r=function e(t){let{display:n}=window.getComputedStyle(t);if("inline"!==n)return t;let r=t.parentElement;return r?e(r):null}(e);r&&i.push({elements:{element:e,measureElement:r},sanity:n})}if(e)for(let s of e.childNodes){let{nodeType:e,parentElement:a,textContent:u}=s;if(Q(s)&&void 0!==(null==(t=s.dataset)?void 0:t.sanityEditTarget)){let e=er(s).map(({sanity:e})=>e);if(!e.map(e=>en(e)).every((e,t,n)=>e===n[0]))continue;let t=function(e){if(!e.length||!e.map(e=>en(e)).every((e,t,n)=>e===n[0]))return;if(!en(e[0]))return e[0];let t=e.filter(en),n=e[0],r=["projectId","dataset","id","baseUrl","workspace","tool"];for(let e=1;e<t.length;e++){let i=t[e];if(r.some(e=>i[e]!==(null==n?void 0:n[e]))){n=void 0;break}n.path=function(e,t){let n=e.split("."),r=t.split("."),i=Math.min(n.length,r.length);return n=n.slice(0,i).reverse(),r=r.slice(0,i).reverse(),n.reduce((e,t,n)=>t===r[n]?[...e,t]:[],[]).reverse().join(".")}(n.path,i.path)}return n}(e);t&&i.push({elements:{element:s,measureElement:s},sanity:t})}else if(e===Node.TEXT_NODE&&a&&u){let e=F(u);if(!e)continue;o(a,e)}else if(Q(s)){if("SCRIPT"===s.tagName||s.id===X)continue;if(null==(n=s.dataset)?void 0:n.sanity)o(s,s.dataset.sanity);else if(null==(r=s.dataset)?void 0:r.sanityEditInfo)o(s,s.dataset.sanityEditInfo);else{if(ee(s)){let e=F(s.alt,!0);if(!e)continue;o(s,e);continue}et(s)&&o(s,F(s.dateTime,!0))}i.push(...er(s))}}return i}function ei(e){let t=e.getBoundingClientRect();return{x:t.x+scrollX,y:t.y+scrollY,w:t.width,h:t.height}}function eo({handler:e,overlayElement:t,preventDefault:n}){let r=!1,i=new Map,o=new WeakMap,s=new Set,a=new WeakMap,u,l,c,p=[],f=()=>p[p.length-1];function d(e,t){e.removeEventListener("click",t.click,{capture:!0}),e.removeEventListener("mousemove",t.mousemove,{capture:!0}),e.removeEventListener("mousedown",t.mousedown,{capture:!0}),e.removeEventListener("mouseenter",t.mouseenter),e.removeEventListener("mouseleave",t.mouseleave)}function m({id:t,elements:n,handlers:r,sanity:i}){let{element:o,measureElement:s}=n;o.addEventListener("click",r.click,{capture:!0}),o.addEventListener("mousemove",r.mousemove,{once:!0,capture:!0}),o.addEventListener("mousedown",r.mousedown,{capture:!0}),u.observe(s),e({type:"element/activate",id:t,rect:ei(o),sanity:i})}function y(r){for(let c of er(r))c.elements.element instanceof HTMLElement&&!o.has(c.elements.element)&&function({elements:r,sanity:c}){let{element:d,measureElement:y}=r,g={click(t){let r=t.target;d===f()&&d.contains(r)&&(n&&(t.preventDefault(),t.stopPropagation()),e({type:"element/click",id:v,sanity:c}))},mousedown(e){e.preventDefault()},mousemove(e){g.mouseenter(e);let t=e.currentTarget;t&&(t.addEventListener("mouseenter",g.mouseenter),t.addEventListener("mouseleave",g.mouseleave))},mouseenter(){p.push(d),e({type:"element/mouseenter",id:v,rect:ei(d)})},mouseleave(n){function r(){p.pop();let t=f();if(e({type:"element/mouseleave",id:v}),t){let n=o.get(t);n&&e({type:"element/mouseenter",id:n.id,rect:ei(t)})}}let{relatedTarget:i}=n;if(i instanceof HTMLElement&&t.contains(i)){let e=()=>{r(),i.removeEventListener("mouseleave",e)};i.addEventListener("mouseleave",e)}else r()}},v=h(),b={id:v,elements:r,sanity:c,handlers:g};s.add(d),a.set(y,d),i.set(v,d),o.set(d,b),l.observe(d),u.observe(y),e({type:"element/register",id:v,rect:ei(d),sanity:c}),m(b)}(c)}function g(t){let n=o.get(t);if(n){let{id:r,handlers:a}=n;d(t,a),u.unobserve(t),o.delete(t),s.delete(t),i.delete(r),e({type:"element/unregister",id:r})}}function v(e){if(e.filter(e=>{let n=e.target;return!(n===t||t.contains(n))&&(n instanceof HTMLElement&&(o.has(n)?er({childNodes:[n]}).length||g(n):y({childNodes:[n]})),!0)}).length)for(let e of s)e.isConnected?b(e):g(e)}function b(t){let n=o.get(t);n&&e({type:"element/updateRect",id:n.id,rect:ei(t)})}function E(e){for(let t of e){let e=t.target;if(e instanceof HTMLElement){let t=a.get(e);if(!t)return;b(t)}}}function w(t){for(let n of t){let{target:t}=n,r=t instanceof HTMLElement&&o.get(t);r&&(n.isIntersecting?m(r):function({id:t,elements:n,handlers:r}){let{element:i,measureElement:o}=n;d(i,r),u.unobserve(o),p=p.filter(e=>e!==i),e({type:"element/deactivate",id:t})}(r))}}function A(){p=[],e({type:"overlay/blur"})}function k(){for(let e of s)b(e)}function x(e){let{target:t}=e;if(t!==window.document&&t instanceof HTMLElement)for(let e of s)t.contains(e)&&b(e)}function P(){r||(window.addEventListener("click",A),window.addEventListener("resize",k),window.addEventListener("scroll",x,{capture:!0,passive:!0}),l=new IntersectionObserver(w,{threshold:.3}),u=new ResizeObserver(E),(c=new MutationObserver(v)).observe(document.body,{attributes:!0,characterData:!0,childList:!0,subtree:!0}),y(document.body),r=!0,e({type:"overlay/activate"}))}return window.document.fonts.ready.then(()=>{for(let e of s)b(e)}),P(),{activate:P,deactivate:function(){r&&(window.removeEventListener("click",A),window.removeEventListener("resize",k),window.removeEventListener("scroll",x),l.disconnect(),c.disconnect(),u.disconnect(),s.forEach(e=>{g(e)}),i.clear(),s.clear(),p=[],r=!1,e({type:"overlay/deactivate"}))}}}let es=null,ea=null,eu=null;function el(e={}){eu&&clearTimeout(eu);let t=new AbortController;return Promise.all([Promise.resolve().then(n.t.bind(n,34040,19)),Promise.all([n.e(7008),n.e(8106)]).then(n.bind(n,46940))]).then(([n,{Overlays:r}])=>{if(t.signal.aborted)return;let{history:i,zIndex:o}=e;if(es||((es=document.createElement("div")).id=X,document.body.appendChild(es)),!ea){let{createRoot:e}="default"in n?n.default:n;ea=e(es)}ea.render((0,f.jsx)(r,{history:i,zIndex:o}))}),()=>{t.abort(),eu=window.setTimeout(()=>{ea&&(ea.unmount(),ea=null),es&&(document.body.removeChild(es),es=null)},1e3)}}},56670:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(94859),i=n(71169),o=n(2265);function s(e){let{zIndex:t}=e,n=(0,i.useRouter)(),s=(0,o.useRef)(n),[a,u]=(0,o.useState)();(0,o.useEffect)(()=>{s.current=n},[n]),(0,o.useEffect)(()=>{let e=(0,r.e)({zIndex:t,history:{subscribe:e=>(u(()=>e),()=>u(void 0)),update:e=>{switch(e.type){case"push":return s.current.push(e.url);case"pop":return s.current.back();case"replace":return s.current.replace(e.url);default:throw Error("Unknown update type: ".concat(e.type))}}}});return()=>e()},[t]);let l=(0,i.usePathname)(),c=(0,i.useSearchParams)();return(0,o.useEffect)(()=>{a&&a({type:"push",url:"".concat(l).concat((null==c?void 0:c.size)?"?".concat(c):"")})},[a,l,c]),null}}},function(e){e.O(0,[231,8173,2971,7023,1744],function(){return e(e.s=82685)}),_N_E=e.O()}]);