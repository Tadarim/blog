"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5353],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>m});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=i,m=s["".concat(c,".").concat(d)]||s[d]||f[d]||a;return n?t.createElement(m,o(o({ref:r},u),{},{components:n})):t.createElement(m,o({ref:r},u))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8558:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var t=n(7462),i=(n(7294),n(3905));const a={sidebarDepth:4},o="\u6392\u5e8f\u7b97\u6cd5",l={unversionedId:"\u6392\u5e8f",id:"\u6392\u5e8f",title:"\u6392\u5e8f\u7b97\u6cd5",description:"",source:"@site/docs/\u6392\u5e8f.md",sourceDirName:".",slug:"/\u6392\u5e8f",permalink:"/blog/docs/\u6392\u5e8f",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u6392\u5e8f.md",tags:[],version:"current",frontMatter:{sidebarDepth:4},sidebar:"tutorialSidebar",previous:{title:"\u5f02\u5e38\u5904\u7406",permalink:"/blog/docs/\u5f02\u5e38\u5904\u7406"},next:{title:"\u6570\u636e\u7ed3\u6784",permalink:"/blog/docs/\u6570\u636e\u7ed3\u6784"}},c={},p=[],u={toc:p},s="wrapper";function f(e){let{components:r,...n}=e;return(0,i.kt)(s,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6392\u5e8f\u7b97\u6cd5"},"\u6392\u5e8f\u7b97\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"let arr = [9, 8, 7, 6, 2, 3, 4, 5, 1, 10]\n\n// \u5feb\u901f\u6392\u5e8f\n// \u5148\u627e\u4e00\u4e2a\u4e2d\u95f4\u6570\uff0c\u628a\u6bd4\u5b83\u5c0f\u7684\u653ea\u6570\u7ec4\uff0c\u5927\u7684\u653eb\u6570\u7ec4\u3002\u9012\u5f52\u3002\nfunction quickSort(arr) {\n    if (arr.length <= 1) return arr\n    let pivotIndex = Math.floor(arr.length / 2)\n    let pivot = arr.splice(pivotIndex, 1)[0]\n    let [left, right] = [[], []]\n    for (let i = 0; i < arr.length; i++) {\n        let item = arr[i]\n        if (item <= pivot) {\n            left.push(item)\n        }\n        else {\n            right.push(item)\n        }\n    }\n\n    return quickSort(left).concat([pivot], quickSort(right))\n}\n\n//\u5192\u6ce1\u6392\u5e8f\nfunction bubbleSort (arr) {\n    let len = arr.length\n    for (let j = 0; j < len - 1; j++) {\n        for (let i = 0; i < len - 1 - j; i++) {\n            if (arr[i] > arr[i + 1]) {\n                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]\n            }\n        }\n    }\n\n    return arr\n}\n\n//\u9009\u62e9\u6392\u5e8f\nfunction selectSort(arr) {\n    let len = arr.length\n    for (let i = 0; i < len - 1; i++) {\n        let minIndex = i\n        for (let j = i + 1; j < len; j++) {\n            if (arr[j] < arr[minIndex]) {\n                minIndex = j\n            }\n        }\n        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]\n    }\n    return arr\n}\n//\u63d2\u5165\u6392\u5e8f\nfunction insertSort(arr) {\n    let len = arr.length\n    for (let i = 1; i < len; i++) {\n        let current = arr[i]\n        let preIndex = i - 1\n        while (preIndex >= 0 && arr[preIndex] > current) {\n            arr[preIndex + 1] = arr[preIndex]\n            preIndex--\n        }\n        arr[preIndex + 1] = current\n    }\n\n    return arr\n}\n\n")))}f.isMDXComponent=!0}}]);