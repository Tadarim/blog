"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[846],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var i=2;i<s;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const s={},a="PostCSS",p={unversionedId:"infra/PostCSS",id:"infra/PostCSS",title:"PostCSS",description:"postcss\u63d0\u4f9b\u4e86CSS\u4ee3\u7801\u7684\u7f16\u8bd1\u529f\u80fd\uff1bpostcss-cli\u5141\u8bb8\u6211\u4eec\u5728\u547d\u4ee4\u884c\u8fdb\u884c\u7f16\u8bd1\uff1b\u800c\u6211\u4eec\u5927\u591a\u6570\u60c5\u51b5\u662f\u5728webpack\u4e2d\u642d\u914d\u4f7f\u7528postcss\uff0c\u6b64\u65f6\u9700\u8981\u989d\u5916\u5b89\u88c5postcss-loader\u3002",source:"@site/docs/infra/PostCSS.md",sourceDirName:"infra",slug:"/infra/PostCSS",permalink:"/blog/docs/infra/PostCSS",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/infra/PostCSS.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ESLint And Prettier",permalink:"/blog/docs/infra/ESLint-and-Prettier"},next:{title:"Prettier",permalink:"/blog/docs/infra/Prettier"}},l={},i=[{value:"plugins",id:"plugins",level:2},{value:"autoprefixer",id:"autoprefixer",level:3},{value:"postcss-preset-env",id:"postcss-preset-env",level:3},{value:"postcss-modules",id:"postcss-modules",level:3}],c={toc:i},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"postcss"},"PostCSS"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"postcss"),"\u63d0\u4f9b\u4e86",(0,o.kt)("strong",{parentName:"p"},"CSS\u4ee3\u7801\u7684\u7f16\u8bd1\u529f\u80fd"),"\uff1b",(0,o.kt)("inlineCode",{parentName:"p"},"postcss-cli"),"\u5141\u8bb8\u6211\u4eec\u5728\u547d\u4ee4\u884c\u8fdb\u884c\u7f16\u8bd1\uff1b\u800c\u6211\u4eec\u5927\u591a\u6570\u60c5\u51b5\u662f\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"webpack"),"\u4e2d\u642d\u914d\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"postcss"),"\uff0c\u6b64\u65f6\u9700\u8981\u989d\u5916\u5b89\u88c5",(0,o.kt)("inlineCode",{parentName:"p"},"postcss-loader"),"\u3002"),(0,o.kt)("p",null,"\u9664\u4e86\u547d\u4ee4\u884c\u4f20\u53c2\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"postcss.config.js"),"\u5199\u5165\u914d\u7f6e\u4fe1\u606f\u3002"),(0,o.kt)("p",null,"\u7c7b\u4f3c",(0,o.kt)("inlineCode",{parentName:"p"},"babel"),"\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u7f16\u8bd1\u524d\u540e\u4ee3\u7801\u683c\u5f0f\u4e00\u6837\uff0c\u6211\u4eec\u9700\u8981",(0,o.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u63d2\u4ef6\u6765\u6307\u5b9a\u8f6c\u5316\u529f\u80fd"),"\u3002"),(0,o.kt)("h2",{id:"plugins"},"plugins"),(0,o.kt)("h3",{id:"autoprefixer"},"autoprefixer"),(0,o.kt)("p",null,"\u8fd9\u662f\u6700\u5e38\u89c1\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"PostCSS"),"\u63d2\u4ef6\uff0c\u80fd\u591f\u7ed9CSS\u89c4\u5219\u6dfb\u52a0\u5404\u79cd\u524d\u7f00\u4ece\u800c\u517c\u5bb9\u4e0d\u540c\u6d4f\u89c8\u5668\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* \u6e90\u6587\u4ef6 */\n::placeholder {\n  color: gray;\n}\n\n/* \u7f16\u8bd1\u540e\u6587\u4ef6 */\n::-moz-placeholder {\n  color: gray;\n}\n:-ms-input-placeholder {\n  color: gray;\n}\n::placeholder {\n  color: gray;\n}\n")),(0,o.kt)("p",null,"\u4f7f\u7528\u7684\u65b9\u5f0f\u4e5f\u5f88\u7b80\u5355\uff0c\u8fd9\u91cc\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"webpack"),"\u4e2d\u4f7f\u7528\u4e3a\u4f8b\u5b50\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// webpack.config.js\nmodule.exports = {\n    module: {\n        rules: [\n            {\n                test: /\\.css$/,\n                use: ["style-loader", "css-loader", "postcss-loader"] // \u5728\u6700\u540e\u9762\u52a0\u4e0a\u4e86postcss-loader\n            }\n        ]\n    },\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// postcss.config.js\nconst autoprefixer = require('autoprefixer')\n\nmodule.exports = {\n    plugins: [\n        autoprefixer, // \u6216 autoprefixer()\n    ]\n}\n")),(0,o.kt)("h3",{id:"postcss-preset-env"},"postcss-preset-env"),(0,o.kt)("p",null,"\u8be5\u63d2\u4ef6\u901a\u8fc7\u57ab\u7247\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"poyfills"),"\uff09\u8ba9\u6211\u4eec\u80fd\u5728\u6d4f\u89c8\u5668\u4f7f\u7528\u8fd8\u6ca1\u6709\u6210\u4e3a\u89c4\u8303\u7684\u5c5e\u6027\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// postcss.config.js\nconst env = require('postcss-preset-env')\nconst autoprefixer = require('autoprefixer')\n\nmodule.exports = {\n    plugins: [\n        autoprefixer,\n        env({ stage: 0 })\n    ]\n}\n")),(0,o.kt)("h3",{id:"postcss-modules"},"postcss-modules"),(0,o.kt)("p",null,"\u8be5\u63d2\u4ef6\u80fd\u5b9e\u73b0\u7c7b\u540d\u7684\u8f6c\u5316\uff0c\u4ece\u800c\u907f\u514d\u7c7b\u540d\u7684\u91cd\u590d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* \u6e90\u6587\u4ef6 */\n.name {\n  color: gray;\n}\n\n/* \u7f16\u8bd1\u540e\u6587\u4ef6 */\n.Logo__name__SVK0g {\n  color: gray;\n}\n")),(0,o.kt)("p",null,"\u7f16\u8bd1\u7684\u540c\u65f6\u4f1a\u751f\u6210\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"json"),"\u6587\u4ef6\u8bb0\u5f55\u524d\u540e\u7c7b\u540d\u7684\u5bf9\u5e94\u5173\u7cfb\uff0c\u4ee5\u65b9\u4fbf\u6211\u4eec\u5408\u7406\u5730\u5f15\u5165\u7c7b\u540d\u3002"))}d.isMDXComponent=!0}}]);