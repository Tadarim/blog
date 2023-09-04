"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7484],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>b});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(b,o(o({ref:n},l),{},{components:t})):r.createElement(b,o({ref:n},l))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[u]="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1463:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const a={},o="\u6301\u7eed\u96c6\u6210(CI)",p={unversionedId:"infra/CI",id:"infra/CI",title:"\u6301\u7eed\u96c6\u6210(CI)",description:"\u5e02\u9762\u4e0a\u5b58\u5728\u591a\u6b3e\u5f00\u6e90\u7684\u6301\u7eed\u96c6\u6210\u5de5\u5177\uff0c\u5982Jenkins\u3001travis-ci\u3001Github Action\uff0c\u672c\u535a\u5ba2\u5c31\u662f\u501f\u52a9travis-ci\u642d\u5efa\u7684\uff0c\u800c\u4e2a\u4eba\u611f\u89c9Github Action\u5f88\u660e\u663e\u8981\u66f4\u52a0\u4f18\u79c0\u3002",source:"@site/docs/infra/CI.md",sourceDirName:"infra",slug:"/infra/CI",permalink:"/blog/docs/infra/CI",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/infra/CI.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Babel",permalink:"/blog/docs/infra/Babel"},next:{title:"ESLint And Prettier",permalink:"/blog/docs/infra/ESLint-and-Prettier"}},s={},c=[{value:"Github Action",id:"github-action",level:2}],l={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6301\u7eed\u96c6\u6210ci"},"\u6301\u7eed\u96c6\u6210(CI)"),(0,i.kt)("p",null,"\u5e02\u9762\u4e0a\u5b58\u5728\u591a\u6b3e\u5f00\u6e90\u7684\u6301\u7eed\u96c6\u6210\u5de5\u5177\uff0c\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"Jenkins"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"travis-ci"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Github Action"),"\uff0c\u672c\u535a\u5ba2\u5c31\u662f\u501f\u52a9",(0,i.kt)("inlineCode",{parentName:"p"},"travis-ci"),"\u642d\u5efa\u7684\uff0c\u800c\u4e2a\u4eba\u611f\u89c9",(0,i.kt)("inlineCode",{parentName:"p"},"Github Action"),"\u5f88\u660e\u663e\u8981\u66f4\u52a0\u4f18\u79c0\u3002"),(0,i.kt)("h2",{id:"github-action"},"Github Action"),(0,i.kt)("p",null,"\u60f3\u8981\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"Github Action"),"\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u521b\u5efa",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows/index.yml"),"\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"yaml"),"\u6587\u4ef6\u540d\u53ef\u4ee5\u968f\u4fbf\u53d6\uff09\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"workflow"),"\u6765\u8bf4\uff0c\u6211\u4eec\u9700\u8981\u8bbe\u7f6e\u4f55\u65f6\u89e6\u53d1\u5de5\u4f5c\u6d41\uff0c\u4ee5\u53ca\u5de5\u4f5c\u6d41\u7684\u5177\u4f53\u4efb\u52a1\u3002\u7b80\u5355\u6765\u8bf4\uff0c\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"workflow"),"\u5305\u62ec\u591a\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"job"),"\uff0c\u6bcf\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"job"),"\u5305\u62ec\u591a\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"step"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"step"),"\u4e2d\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"action"),"\u6216\u6267\u884c\u547d\u4ee4\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# ./.github/workflows/npm-publish.yml \n\nname: Node.js Package\n\non: # \u4f55\u65f6\u89e6\u53d1\u5de5\u4f5c\u6d41\n  push:\n    branches:\n      - master # master\u5206\u652fpush\u6210\u529f\u65f6\u89e6\u53d1\njobs:\n  build: # \u7b2c\u4e00\u4e2ajob\u540d\n    runs-on: ubuntu-latest # \u865a\u62df\u673a\u73af\u5883\n    steps:\n      - uses: actions/checkout@v2 # \u62c9\u53d6\u4ed3\u5e93\u4ee3\u7801\n      - uses: actions/setup-node@v2 # \u642d\u5efanode\u73af\u5883\n        with:\n          node-version: 14\n      - run: npm ci\n      - run: npm run test\n  publish-npm: # \u7b2c\u4e8c\u4e2ajob\u540d\n    needs: build\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - uses: actions/setup-node@v2\n        with:\n          node-version: 14\n          registry-url: https://registry.npmjs.org/\n      - run: npm ci\n      - run: npm publish\n        env:\n          NODE_AUTH_TOKEN: ${{secrets.npm_token}}\n  github-page:\n    needs: build\n    runs-on: ubuntu-latest\n    steps:\n        - uses: actions/checkout@v2\n        - uses: crazy-max/ghaction-github-pages@v2\n          with:\n            target_branch: gh-pages\n            build_dir: public\n          env:\n            GITHUB_TOKEN: ${{ secrets.REPO_TOKEN }}\n")),(0,i.kt)("p",null,"\u5728\u8be5\u914d\u7f6e\u4e2d\uff0c\u6211\u4f7f\u7528\u4e86\u5b98\u65b9\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"action"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"actions/checkout@v2"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"actions/setup-node@v2"),"\uff0c\u4ee5\u53ca\u7b2c\u4e09\u65b9\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"action"),"\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u81ea\u5df1\u7f16\u5199",(0,i.kt)("inlineCode",{parentName:"p"},"action"),"\u4f9b\u4ed6\u4eba\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u80fd\u591f\u5728CI\u4e2d\u53d1\u5e03NPM\u6a21\u5757\uff0c\u6216\u662f\u521b\u5efaGit\u5206\u652f\uff0c\u6211\u4eec\u90fd\u9700\u8981\u80fd\u591f\u62ff\u5230\u5bf9\u5e94\u7684\u8bfb\u5199\u6743\u9650\u3002\u4e3a\u6b64\u6211\u4eec\u53ef\u4ee5\u5148\u5728\u8fd9\u4e24\u4e2a\u7f51\u7ad9\u521b\u5efa",(0,i.kt)("inlineCode",{parentName:"p"},"Person Access Token"),"\uff0c\u7136\u540e\u4ee5\u952e\u503c\u5bf9\u7684\u5f62\u5f0f\u4fdd\u5b58\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"repo - Settings - Secrets"),"\uff0c\u4e4b\u540e\u6211\u4eec\u7684\u811a\u672c\u5c31\u80fd\u591f\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u7684\u952e\u540d\u62ff\u5230\u8be5Token\u3002"))}d.isMDXComponent=!0}}]);