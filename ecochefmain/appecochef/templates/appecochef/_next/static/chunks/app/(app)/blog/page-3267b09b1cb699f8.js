(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1669],{62819:function(e,t,l){Promise.resolve().then(l.bind(l,56670)),Promise.resolve().then(l.bind(l,52305)),Promise.resolve().then(l.bind(l,81713)),Promise.resolve().then(l.bind(l,29711))},72437:function(e,t,l){"use strict";l.d(t,{Sx:function(){return n},gx:function(){return a},hH:function(){return i},tW:function(){return s}});let s=l(25566).env.NEXT_PUBLIC_SANITY_API_VERSION||"2024-04-20",n=c("13sz3xxy","Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"),a=c("production","Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"),i=!1;function c(e,t){if(void 0===e)throw Error(t);return e}},45247:function(e,t,l){"use strict";l.d(t,{i:function(){return c}});var s=l(36103),n=l.n(s),a=l(72437);let i=n()({projectId:a.Sx||"",dataset:a.gx||""}),c=e=>null==i?void 0:i.image(e)},81713:function(e,t,l){"use strict";l.d(t,{default:function(){return d}});var s=l(57437),n=l(87138),a=l(66648),i=l(76235),c=l(45247);function d(e){var t,l,d,o;let{post:r}=e,m=null===(t=(0,c.i)(r.mainImage))||void 0===t?void 0:t.auto("format").url();return(0,s.jsx)("div",{className:"max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto py-8",children:(0,s.jsxs)("div",{className:"lg:flex lg:items-center lg:gap-8",children:[m&&(0,s.jsx)(n.default,{href:"/blog/".concat(r.slug.current),children:(0,s.jsx)(a.default,{src:m,alt:(null===(d=r.mainImage)||void 0===d?void 0:null===(l=d.asset)||void 0===l?void 0:l.altText)||"",className:"rounded-box",width:r.mainImage.asset.metadata.dimensions.width,height:r.mainImage.asset.metadata.dimensions.height,blurDataURL:null===(o=r.mainImage)||void 0===o?void 0:o.asset.metadata.lqip,placeholder:"blur",priority:!0})}),(0,s.jsxs)("div",{className:"mt-4 lg:w-1/2 lg:flex-grow lg:flex-shrink-0",children:[(0,s.jsx)("h2",{className:"font-poppins font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-4",children:(0,s.jsx)(n.default,{href:"/blog/".concat(r.slug.current),className:"link link-hover",children:r.title})}),(0,s.jsx)("p",{className:"md:text-lg",children:r.excerpt}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"divider"}),(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)("p",{className:"md:text-lg",children:(0,i.WU)(r.publishedAt,"MMMM dd, yyyy")}),(0,s.jsx)("div",{className:"badge badge-secondary font-semibold badge-lg",children:r.category.title})]})]})]})]})})}},29711:function(e,t,l){"use strict";l.d(t,{default:function(){return x}});var s=l(57437),n=l(2265),a=l(3865),i=l(72437);let c=(0,a.eI)({apiVersion:i.tW,dataset:i.gx,projectId:i.Sx,useCdn:i.hH}),d=e=>{let{start:t,end:l,featuredPostId:s,categorySlug:n}=e;return'\n{\n  "posts": *[_type == "post" '.concat(s?"&& _id != '".concat(s,"'"):""," ").concat(n?"&& category->slug.current == '".concat(n,"'"):"","] {\n    title,\n    slug,\n    publishedAt,\n    mainImage { ..., asset-> },\n    category -> { title, slug },\n    excerpt,\n  } | order(publishedAt desc) [").concat(t,"..").concat(l,'],\n  "totalDocs": count(*[_type == "post" ').concat(s?"&& _id != '".concat(s,"'"):""," ").concat(n?"&& category->slug.current == '".concat(n,"'"):"","])\n}")};var o=l(66648),r=l(87138),m=l(76235),u=l(45247);function g(e){var t,l,n,a;let{post:i}=e,c=null===(t=(0,u.i)(i.mainImage))||void 0===t?void 0:t.auto("format").url();return(0,s.jsxs)("div",{className:"flex flex-col md:col-span-1",children:[c&&(0,s.jsx)(r.default,{href:"/blog/".concat(i.slug.current),children:(0,s.jsx)(o.default,{src:c,alt:(null===(n=i.mainImage)||void 0===n?void 0:null===(l=n.asset)||void 0===l?void 0:l.altText)||"",className:"rounded-box",width:i.mainImage.asset.metadata.dimensions.width,height:i.mainImage.asset.metadata.dimensions.height,blurDataURL:null===(a=i.mainImage)||void 0===a?void 0:a.asset.metadata.lqip,placeholder:"blur"})}),(0,s.jsxs)("div",{className:"mt-4 flex flex-col flex-grow",children:[(0,s.jsx)("h2",{className:"font-poppins font-bold text-2xl sm:text-3xl md:text-4xl mb-4",children:(0,s.jsx)(r.default,{href:"/blog/".concat(i.slug.current),className:"link link-hover",children:i.title})}),(0,s.jsx)("p",{className:"md:text-lg",children:i.excerpt}),(0,s.jsxs)("div",{className:"mt-auto",children:[(0,s.jsx)("div",{className:"divider"}),(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)("p",{className:"md:text-lg",children:(0,m.WU)(i.publishedAt,"MMMM dd, yyyy")}),(0,s.jsx)("div",{className:"badge badge-secondary font-semibold badge-lg",children:i.category.title})]})]})]})]})}function x(e){let{postsData:t,featuredPostId:l,categories:a}=e,[i,o]=(0,n.useState)(void 0),[r,m]=(0,n.useState)(t.posts),[u,x]=(0,n.useState)(t.posts.length<t.totalDocs),[h,f]=(0,n.useState)(1);return(0,n.useEffect)(()=>{i&&async function(){let e=await c.fetch(d({start:0,end:9,featuredPostId:l,categorySlug:"all"!==i?i:void 0}));m(e.posts),x(e.posts.length<e.totalDocs),f(1)}()},[i]),(0,n.useEffect)(()=>{h>1&&async function(){let e=(h-1)*10,t=await c.fetch(d({start:e,end:e+9,featuredPostId:l,categorySlug:i&&"all"!==i?i:void 0})),s=[...r,...t.posts];m(s),x(s.length<t.totalDocs)}()},[h]),(0,s.jsx)(s.Fragment,{children:r&&r.length>0&&(0,s.jsx)("div",{className:"max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto py-16",children:(0,s.jsxs)("div",{className:"lg:flex lg:items-start lg:gap-8",children:[(0,s.jsxs)("div",{className:"lg:w-1/4 xl:w-1/3 lg:min-w-[25%] xl:min-w-[33.333333%] lg:sticky lg:top-8",children:[(0,s.jsx)("h2",{className:"font-poppins font-bold text-3xl md:text-4xl lg:text-6xl text-center md:text-left mb-8",children:"Latest posts"}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row lg:flex-col sm:justify-center md:justify-start lg:items-start gap-4",children:[(0,s.jsx)("button",{className:"btn btn-outline md:btn-lg lg:btn-wide lg:max-w-full ".concat("all"===i||void 0===i?"btn-active":""),onClick:()=>o("all"),children:"All"}),a.map(e=>(0,s.jsx)("button",{className:"btn btn-outline md:btn-lg lg:btn-wide lg:max-w-full ".concat(i===e.slug.current?"btn-active":""),onClick:()=>o(e.slug.current),children:e.title},e.slug.current))]})]}),r&&r.length>0&&(0,s.jsxs)("div",{className:"flex flex-col items-center gap-8 lg:gap-16",children:[(0,s.jsx)("div",{className:"grid md:grid-cols-2 content-stretch gap-12 md:gap-x-8 py-8 lg:py-0",children:r.map(e=>(0,s.jsx)(g,{post:e},e.slug.current))}),u&&(0,s.jsx)("button",{type:"button",className:"btn btn-outline",onClick:()=>f(h+1),children:"Load more"})]})]})})})}},52305:function(e,t){"use strict";t.default={src:"/_next/static/media/og-image.c7531f82.png",height:630,width:1200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAP1BMVEX//fy5x8Djxbjn6OicvKjM3NKgoJvz8vClvq/09/WnqKeCppLq1smQo5Ta5N7Bv8F+mHrW29ZSf2J9cjz7+PerCm6nAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVR4nGNg4GRnYGXhY2dg5mLj5xUW4GBgZ+IRFGLjYGEAAVZuRk4AEYsA7Zhb4mEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4}}},function(e){e.O(0,[231,8173,1522,7933,2971,7023,1744],function(){return e(e.s=62819)}),_N_E=e.O()}]);