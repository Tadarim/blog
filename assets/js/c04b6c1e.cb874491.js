"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),g=r,y=m["".concat(i,".").concat(g)]||m[g]||u[g]||l;return n?a.createElement(y,o(o({ref:t},s),{},{components:n})):a.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=g;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:r,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={},o="Proxy And Reflect",p={unversionedId:"javascript/Proxy",id:"javascript/Proxy",title:"Proxy And Reflect",description:"Proxy",source:"@site/docs/javascript/Proxy.md",sourceDirName:"javascript",slug:"/javascript/Proxy",permalink:"/blog/docs/javascript/Proxy",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/javascript/Proxy.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Promise",permalink:"/blog/docs/javascript/Promise"},next:{title:"Set And Map",permalink:"/blog/docs/javascript/Set-Map"}},i={},c=[{value:"Proxy",id:"proxy",level:2},{value:"\u4ee3\u7406\u5bf9\u8c61",id:"\u4ee3\u7406\u5bf9\u8c61",level:3},{value:"\u4ee3\u7406\u51fd\u6570",id:"\u4ee3\u7406\u51fd\u6570",level:3},{value:"Reflect",id:"reflect",level:2},{value:"Reflect.apply",id:"reflectapply",level:3},{value:"Reflect.construct",id:"reflectconstruct",level:3},{value:"Reflect.ownKeys",id:"reflectownkeys",level:3}],s={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"proxy-and-reflect"},"Proxy And Reflect"),(0,r.kt)("h2",{id:"proxy"},"Proxy"),(0,r.kt)("p",null,"Proxy \u53ef\u4ee5\u7406\u89e3\u6210\uff0c\u5728\u76ee\u6807\u5bf9\u8c61\u4e4b\u524d\u67b6\u8bbe\u4e00\u5c42\u201c\u62e6\u622a\u201d\uff0c\u5916\u754c\u5bf9\u8be5\u5bf9\u8c61\u7684\u8bbf\u95ee\uff0c\u90fd\u5fc5\u987b\u5148\u901a\u8fc7\u8fd9\u5c42\u62e6\u622a\uff0c\u56e0\u6b64\u63d0\u4f9b\u4e86\u4e00\u79cd\u673a\u5236\uff0c\u53ef\u4ee5\u5bf9\u5916\u754c\u7684\u8bbf\u95ee\u8fdb\u884c\u8fc7\u6ee4\u548c\u6539\u5199\u3002Proxy \u8fd9\u4e2a\u8bcd\u7684\u539f\u610f\u662f\u4ee3\u7406\uff0c\u7528\u5728\u8fd9\u91cc\u8868\u793a\u7531\u5b83\u6765\u201c\u4ee3\u7406\u201d\u67d0\u4e9b\u64cd\u4f5c\uff0c\u53ef\u4ee5\u8bd1\u4e3a\u201c\u4ee3\u7406\u5668\u201d\u3002"),(0,r.kt)("h3",{id:"\u4ee3\u7406\u5bf9\u8c61"},"\u4ee3\u7406\u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let handleer = {\n    get: function (target, propKey, receiver) {\n        console.log(target, propKey, receiver)\n        console.log(target[propKey])\n    },\n    set: function (target, propKey, newValue, receiver) {\n        target[propKey] = newValue\n    }\n}\n\nlet proxy = new Proxy({\n    name: 'akara',\n}, handler)\n\nproxy.name\n// \u8f93\u51fa\n// {name: 'akara'}   \"name\"   Proxy {name: 'akara'}\n// 'akara'\n")),(0,r.kt)("h3",{id:"\u4ee3\u7406\u51fd\u6570"},"\u4ee3\u7406\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"handler = {\n    get: function (target, propKey, receiver) {\n        return target[propKey]\n    },\n\n    apply: function (target, myThis, args) {\n        console.log(target, myThis, args)\n        target.apply(myThis, args)\n    },\n\n    construct(target, args) {\n        return new target(...args)\n    }\n}\n\nlet proxy = new Proxy(function (a, b) {\n    this.name = a\n    this.age = b\n}, handler)\n\nproxy('akara', 20) \n// \u0192 (a, b) {\n//     this.name = a\n//     this.age = b\n//     console.log(a, b)\n// } undefined (2)\xa0[\"akara\", 20]\n\nproxy.call({}, 'akara', 20) \n// \u0192 (a, b) {\n//     this.name = a\n//     this.age = b\n//     console.log(a, b)\n// } {} (2)\xa0[\"akara\", 20]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"get(target, propKey, receiver)"),"\uff1a\u62e6\u622a\u5bf9\u8c61\u5c5e\u6027\u7684\u8bfb\u53d6\uff0c\u6bd4\u5982",(0,r.kt)("inlineCode",{parentName:"li"},"proxy.foo"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"proxy['foo']"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"set(target, propKey, value, receiver)"),"\uff1a\u62e6\u622a\u5bf9\u8c61\u5c5e\u6027\u7684\u8bbe\u7f6e\uff0c\u6bd4\u5982",(0,r.kt)("inlineCode",{parentName:"li"},"proxy.foo = v"),"\u6216",(0,r.kt)("inlineCode",{parentName:"li"},"proxy['foo'] = v"),"\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"apply(target, object, args)"),"\uff1a\u62e6\u622a Proxy \u5b9e\u4f8b\u4f5c\u4e3a\u51fd\u6570\u8c03\u7528\u7684\u64cd\u4f5c\uff0c\u6bd4\u5982",(0,r.kt)("inlineCode",{parentName:"li"},"proxy(...args)"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"proxy.call(object, ...args)"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"proxy.apply(...)"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"construct(target, args)"),"\uff1a\u62e6\u622a Proxy \u5b9e\u4f8b\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u8c03\u7528\u7684\u64cd\u4f5c\uff0c\u6bd4\u5982",(0,r.kt)("inlineCode",{parentName:"li"},"new proxy(...args)"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://es6.ruanyifeng.com/#docs/proxy#Proxy-%E5%AE%9E%E4%BE%8B%E7%9A%84%E6%96%B9%E6%B3%95"},"\u5176\u4ed6\u7684\u62e6\u622a\u64cd\u4f5c"))),(0,r.kt)("h2",{id:"reflect"},"Reflect"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Reflect"),"\u5bf9\u8c61\u7684\u8bbe\u8ba1\u76ee\u7684\u6709\u8fd9\u6837\u51e0\u4e2a\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u8bb8\u591a",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),"\u4e0a\u7684\u65b9\u6cd5\uff0c\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"Object.defineProperty"),"\u653e\u5728\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"Reflect"),"\u4e0a\u3002\u73b0\u9636\u6bb5\uff0c\u67d0\u4e9b\u65b9\u6cd5\u540c\u65f6\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Reflect"),"\u5bf9\u8c61\u4e0a\u90e8\u7f72\uff0c\u672a\u6765\u7684\u65b0\u65b9\u6cd5\u5c06\u53ea\u90e8\u7f72\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Reflect"),"\u5bf9\u8c61\u4e0a\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"Reflect"),"\u5bf9\u8c61\u4e0a\u53ef\u4ee5\u62ff\u5230\u8bed\u8a00\u5185\u90e8\u7684\u65b9\u6cd5\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4fee\u6539\u67d0\u4e9b",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),"\u65b9\u6cd5\u7684\u8fd4\u56de\u7ed3\u679c\uff0c\u8ba9\u5176\u53d8\u5f97\u66f4\u5408\u7406\u3002\u6bd4\u5982\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Object.defineProperty(obj, name, desc)"),"\u5728\u65e0\u6cd5\u5b9a\u4e49\u5c5e\u6027\u65f6\uff0c\u4f1a\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\uff0c\u800c",(0,r.kt)("inlineCode",{parentName:"p"},"Reflect.defineProperty(obj, name, desc)"),"\u5219\u4f1a\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u8001\u5199\u6cd5\ntry {\n  Object.defineProperty(target, property, attributes);\n  // success\n} catch (e) {\n  // failure\n}\n\n// \u65b0\u5199\u6cd5\nif (Reflect.defineProperty(target, property, attributes)) {\n  // success\n} else {\n  // failure\n}\n")))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8ba9",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),"\u64cd\u4f5c\u90fd\u53d8\u6210\u51fd\u6570\u884c\u4e3a\u3002\u67d0\u4e9b",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),"\u64cd\u4f5c\u662f\u547d\u4ee4\u5f0f\uff0c\u6bd4\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"name in obj"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"delete obj[name]"),"\uff0c\u800c",(0,r.kt)("inlineCode",{parentName:"p"},"Reflect.has(obj, name)"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Reflect.deleteProperty(obj, name)"),"\u8ba9\u5b83\u4eec\u53d8\u6210\u4e86\u51fd\u6570\u884c\u4e3a\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u8001\u5199\u6cd5\n'assign' in Object // true\ndelete obj.name\n\n// \u65b0\u5199\u6cd5\nReflect.has(Object, 'assign') // true\nReflect.deleteProperty(obj, 'name')\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Reflect"),"\u5bf9\u8c61\u7684\u65b9\u6cd5\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"Proxy"),"\u5bf9\u8c61\u7684\u65b9\u6cd5\u4e00\u4e00\u5bf9\u5e94\uff0c\u53ea\u8981\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Proxy"),"\u5bf9\u8c61\u7684\u65b9\u6cd5\uff0c\u5c31\u80fd\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Reflect"),"\u5bf9\u8c61\u4e0a\u627e\u5230\u5bf9\u5e94\u7684\u65b9\u6cd5\u3002\u8fd9\u5c31\u8ba9",(0,r.kt)("inlineCode",{parentName:"p"},"Proxy"),"\u5bf9\u8c61\u53ef\u4ee5\u65b9\u4fbf\u5730\u8c03\u7528\u5bf9\u5e94\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Reflect"),"\u65b9\u6cd5\uff0c\u5b8c\u6210\u9ed8\u8ba4\u884c\u4e3a\uff0c\u4f5c\u4e3a\u4fee\u6539\u884c\u4e3a\u7684\u57fa\u7840\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e0d\u7ba1",(0,r.kt)("inlineCode",{parentName:"p"},"Proxy"),"\u600e\u4e48\u4fee\u6539\u9ed8\u8ba4\u884c\u4e3a\uff0c\u4f60\u603b\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Reflect"),"\u4e0a\u83b7\u53d6\u9ed8\u8ba4\u884c\u4e3a\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u8001\u5199\u6cd5\nProxy(target, {\n    set: function(target, name, value, receiver) {\n        target[name] = value\n    }\n})\n\n// \u65b0\u5199\u6cd5\nProxy(target, {\n    set: function(target, name, value, receiver) {\n        Reflect.set(target, name, value, receiver)\n    }\n})\n")),(0,r.kt)("p",{parentName:"li"},"\u4e0b\u9762\u662f\u53e6\u4e00\u4e2a\u4f8b\u5b50"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var loggedObj = new Proxy(obj, {\n  get(target, name) {\n    console.log('get', target, name);\n    return Reflect.get(target, name);\n  },\n  deleteProperty(target, name) {\n    console.log('delete' + name);\n    return Reflect.deleteProperty(target, name);\n  },\n  has(target, name) {\n    console.log('has' + name);\n    return Reflect.has(target, name);\n  }\n});\n")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Reflect"),"\u5bf9\u8c61\u4e00\u5171\u6709 13 \u4e2a\u9759\u6001\u65b9\u6cd5\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reflect.apply(target, thisArg, args)"),(0,r.kt)("li",{parentName:"ul"},"Reflect.construct(target, args)"),(0,r.kt)("li",{parentName:"ul"},"Reflect.get(target, name, receiver)"),(0,r.kt)("li",{parentName:"ul"},"Reflect.set(target, name, value, receiver)"),(0,r.kt)("li",{parentName:"ul"},"Reflect.defineProperty(target, name, desc)"),(0,r.kt)("li",{parentName:"ul"},"Reflect.deleteProperty(target, name)"),(0,r.kt)("li",{parentName:"ul"},"Reflect.has(target, name)"),(0,r.kt)("li",{parentName:"ul"},"Reflect.ownKeys(target)"),(0,r.kt)("li",{parentName:"ul"},"Reflect.isExtensible(target)"),(0,r.kt)("li",{parentName:"ul"},"Reflect.preventExtensions(target)"),(0,r.kt)("li",{parentName:"ul"},"Reflect.getOwnPropertyDescriptor(target, name)"),(0,r.kt)("li",{parentName:"ul"},"Reflect.getPrototypeOf(target)"),(0,r.kt)("li",{parentName:"ul"},"Reflect.setPrototypeOf(target, prototype)")),(0,r.kt)("p",null,"\u9664\u53bb\u4e00\u4e9b",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),"\u4e0a\u5df2\u7ecf\u90e8\u7f72\u7684\u65b9\u6cd5\uff0c\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"Object.getPrototypeOf"),"\u5bf9\u5e94\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Reflect.getPrototypeOf"),"\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Reflect"),"\u4e0a\u8fd8\u90e8\u7f72\u4e86\u4e00\u4e9b\u6709\u610f\u601d\u7684\u65b9\u6cd5\u3002"),(0,r.kt)("h3",{id:"reflectapply"},"Reflect.apply"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Reflect.apply(function (a, b) {\n    console.log(this.name)\n    console.log(a + b)\n}, {name: 'akara'}, [1, 2])\n")),(0,r.kt)("h3",{id:"reflectconstruct"},"Reflect.construct"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function People(name) {\n    this.name = name\n}\n\nReflect.construct(People, ['akara'])\n")),(0,r.kt)("h3",{id:"reflectownkeys"},"Reflect.ownKeys"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Reflect.ownKeys"),"\u65b9\u6cd5\u7528\u4e8e\u8fd4\u56de\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027\uff0c\u57fa\u672c\u7b49\u540c\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"Object.getOwnPropertyNames"),"\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"Object.getOwnPropertySymbols"),"\u4e4b\u548c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let obj = {\n    [Symbol('name')]: 'akara',\n    age: 21\n}\n\nObject.getOwnPropertyNames(obj)\n// [\"age\"]\n\nObject.getOwnPropertySymbols(obj)\n// [Symbol(name)]\n\nReflect.ownKeys(obj)\n//\xa0[\"age\", Symbol(name)]\n")))}u.isMDXComponent=!0}}]);