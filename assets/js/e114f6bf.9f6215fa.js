"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3298],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),i=p(t),d=r,f=i["".concat(s,".").concat(d)]||i[d]||m[d]||o;return t?a.createElement(f,l(l({ref:n},u),{},{components:t})):a.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[i]="string"==typeof e?e:r,l[1]=c;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3605:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={},l="Object",c={unversionedId:"javascript/\u5bf9\u8c61",id:"javascript/\u5bf9\u8c61",title:"Object",description:"new\u64cd\u4f5c\u7b26",source:"@site/docs/javascript/\u5bf9\u8c61.md",sourceDirName:"javascript",slug:"/javascript/\u5bf9\u8c61",permalink:"/blog/docs/javascript/\u5bf9\u8c61",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/javascript/\u5bf9\u8c61.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Function",permalink:"/blog/docs/javascript/\u51fd\u6570"},next:{title:"Array",permalink:"/blog/docs/javascript/\u6570\u7ec4"}},s={},p=[{value:"new\u64cd\u4f5c\u7b26",id:"new\u64cd\u4f5c\u7b26",level:2},{value:"\u5b9e\u73b0\u4e00\u4e2anew",id:"\u5b9e\u73b0\u4e00\u4e2anew",level:3},{value:"instanceof",id:"instanceof",level:2},{value:"\u5b9e\u73b0\u4e00\u4e2ainstanceof",id:"\u5b9e\u73b0\u4e00\u4e2ainstanceof",level:3},{value:"\u5b9e\u73b0\u79c1\u6709\u53d8\u91cf",id:"\u5b9e\u73b0\u79c1\u6709\u53d8\u91cf",level:2},{value:"\u6d45\u62f7\u8d1d",id:"\u6d45\u62f7\u8d1d",level:2},{value:"\u6df1\u62f7\u8d1d",id:"\u6df1\u62f7\u8d1d",level:2},{value:"\u7ee7\u627f",id:"\u7ee7\u627f",level:2},{value:"\u6784\u9020\u7ee7\u627f",id:"\u6784\u9020\u7ee7\u627f",level:3},{value:"\u539f\u578b\u94fe\u7ee7\u627f",id:"\u539f\u578b\u94fe\u7ee7\u627f",level:3},{value:"\u7ec4\u5408\u7ee7\u627f",id:"\u7ec4\u5408\u7ee7\u627f",level:3},{value:"\u5bc4\u751f\u7ec4\u5408\u7ee7\u627f(\u9664es6\u7ee7\u627f\u5916\u6700\u63a8\u8350\u7684\u65b9\u6cd5)",id:"\u5bc4\u751f\u7ec4\u5408\u7ee7\u627f\u9664es6\u7ee7\u627f\u5916\u6700\u63a8\u8350\u7684\u65b9\u6cd5",level:3},{value:"es6\u7684extends",id:"es6\u7684extends",level:3}],u={toc:p},i="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(i,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"object"},"Object"),(0,r.kt)("h2",{id:"new\u64cd\u4f5c\u7b26"},"new\u64cd\u4f5c\u7b26"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9996\u5148\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u5bf9\u8c61\uff0c\u7a7a\u5bf9\u8c61\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"__proto__"),"\u5c5e\u6027\u6307\u5411\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u5bf9\u8c61"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const obj = {\n    __proto__: fn.prototype\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u628a\u4e0a\u9762\u521b\u5efa\u7684\u7a7a\u5bf9\u8c61\u8d4b\u503c\u6784\u9020\u51fd\u6570\u5185\u90e8\u7684this\uff0c\u7528\u6784\u9020\u51fd\u6570\u5185\u90e8\u7684\u65b9\u6cd5\u4fee\u6539\u7a7a\u5bf9\u8c61")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u6784\u9020\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u975e\u57fa\u672c\u7c7b\u578b\u7684\u503ca\uff0c\u5219\u8fd4\u56de\u8fd9\u4e2a\u503ca\uff0c\u5426\u5219\u8fd4\u56de\u4e0a\u9762\u521b\u5efa\u7684\u5bf9\u8c61obj"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function A() {\n    return [123]\n}\nnew A() // [123]\n")),(0,r.kt)("h3",{id:"\u5b9e\u73b0\u4e00\u4e2anew"},"\u5b9e\u73b0\u4e00\u4e2anew"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function _new(fn, ...arg) {\n    const obj = Object.create(fn.prototype);\n    const ret = fn.apply(obj, arg);\n    return ret instanceof Object ? ret : obj;\n}\n")),(0,r.kt)("h2",{id:"instanceof"},"instanceof"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"({}) instanceof Object; // true\n[] instanceof Array; // true\n[] instanceof Object; // true\n")),(0,r.kt)("h3",{id:"\u5b9e\u73b0\u4e00\u4e2ainstanceof"},"\u5b9e\u73b0\u4e00\u4e2ainstanceof"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function myInstanceof(a, b) {\n    if (typeof a !== 'object' || a === null) return false\n    let proto = Object.getPrototypeOf(a)\n    while(true) {\n        if (proto === null) return false\n        if (proto === b.prototype) return true\n        proto = Object.getPrototypeOf(proto)\n    }\n}\n")),(0,r.kt)("h2",{id:"\u5b9e\u73b0\u79c1\u6709\u53d8\u91cf"},"\u5b9e\u73b0\u79c1\u6709\u53d8\u91cf"),(0,r.kt)("p",null,"\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u662f\u63d0\u524d\u7ea6\u5b9a\u597d\u79c1\u6709\u53d8\u91cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class Person {\n    constructor(age) {\n        this._age = age\n    }\n}\nlet p = new Person()\n// \u8fd8\u662f\u53ef\u4ee5\u83b7\u53d6p._age\n")),(0,r.kt)("p",null,"\u6bd4\u8f83\u597d\u7684\u65b9\u6cd5\u662f\u7ed3\u5408\u95ed\u5305 + Symbol\u3002"),(0,r.kt)("p",null,"\u5982\u9898\u76ee\uff1a\u521b\u5efa\u4e00\u4e2a Person \u7c7b\uff0c\u5176\u5305\u542b\u516c\u6709\u5c5e\u6027 name \u548c\u79c1\u6709\u5c5e\u6027 age \u4ee5\u53ca\u516c\u6709\u65b9\u6cd5 setAge \uff1b\u521b\u5efa\u4e00\u4e2a Teacher \u7c7b\uff0c\u4f7f\u5176\u7ee7\u627f Person \uff0c\u5e76\u5305\u542b\u79c1\u6709\u5c5e\u6027 studentCount \u548c\u79c1\u6709\u65b9\u6cd5 setStudentCount \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u8fd9\u91cc\u5199\u5728\u4e00\u4e2a\u7acb\u5373\u6267\u884c\u51fd\u6570\u91cc\uff0c\u5206\u5f00\u5199\u4e5f\u662f\u53ef\u4ee5\u7684\nconst [Person, Teacher] = (function () {\n    const _age = Symbol('age')\n    const _studentCount = Symbol('studentCount')\n    const _setStudentCount = Symbol('setStudentCount')\n    class Person {\n        constructor(name, age) {\n            this.name = name\n            this[_age] = age\n        }\n\n        setAge(age) {\n            this[_age] = age\n        }\n    }\n    \n    class Teacher extends Person {\n        constructor(name, age, count) {\n            super(name, age)\n            this[_studentCount] = count\n        }\n        [_setStudentCount](count) {\n            this[_studentCount] = count\n        }\n        set(count) {\n            this[_setStudentCount](count)\n        }\n    }\n    return [Person, Teacher]\n})()\n")),(0,r.kt)("h2",{id:"\u6d45\u62f7\u8d1d"},"\u6d45\u62f7\u8d1d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Object.assign\nlet source = {\n    name: 'akara',\n    age: 20,\n}\nlet target = Object.assign({}, source)\n\n// \u6269\u5c55\u8fd0\u7b97\u7b26\nlet source = {\n    name: 'akara',\n    age: 20,\n}\nlet target = {...source}\n\n// slice\nlet source = [1, 2, 3]\nlet target = source.slice()\n\n// concat\nlet source = [1, 2, 3]\nlet target = source.concat()\n")),(0,r.kt)("h2",{id:"\u6df1\u62f7\u8d1d"},"\u6df1\u62f7\u8d1d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u4e00:\u53ea\u80fd\u7528\u4e8e\u5bf9\u8c61\u5185\u90e8\u6ca1\u6709\u65b9\u6cd5\u65f6\nJSON.parse(JSON.stringify(obj))\n\n// \u4e8c: \u9012\u5f52\uff0c\u7b80\u964b\u7248\u672c\n// \u5c5e\u6027\u503c\u53ef\u4ee5\u662f\u6570\u7ec4\u6216\u5bf9\u8c61\uff0c\u6b64\u65f6\u8fdb\u884c\u9012\u5f52\n// \u5c5e\u6027\u503c\u4e5f\u53ef\u4ee5\u51fd\u6570\nfunction deepClone(source) {\n    let target = null\n    if (typeof source === 'object' && source !== null) {\n        target = Array.isArray(source) ? [] : {}\n        for (let [key, value] of Object.entries(source)) {\n            target[key] = deepClone(value)\n        }\n    } else {\n        target = source\n    }\n    return target\n}\n\n// \u4f46\u65e0\u6cd5\u89e3\u51b3\u5faa\u73af\u5f15\u7528\u7684\u95ee\u9898\n// \u4f8b\u5982\nlet obj = {}\nobj.a = obj\ndeepClone(obj)\n// \u4f1a\u4e00\u76f4\u9012\u5f52\u6267\u884cdeepClone\uff0c\u9020\u6210\u51fd\u6570\u6808\u6ea2\u51fa\n\n\n// \u590d\u6742\u7248\u672c\n// \u4f7f\u7528WeakMap\u89e3\u51b3\u5faa\u73af\u5f15\u7528\u7684\u95ee\u9898\n// \u4f7f\u7528WeakMap\u800c\u4e0d\u662fMap\u662f\u56e0\u4e3a\u5176\u4f7f\u7528\u7684\u5f31\u5f15\u7528\u3002\u8be5\u5f15\u7528\u4e0d\u4f1a\u88ab\u5783\u573e\u56de\u6536\u5668\u8bb0\u5f55\u3002\nfunction deepClone(source, hash = new WeakMap()) {\n    let target\n    if (hash.has(source)) {\n        return hash.get(source)\n    }\n    if (typeof source === 'object' && source !== null) {\n        target = Array.isArray(source) ? [] : {}\n        hash.set(source, target)\n        for (let [key, value] of Object.entries(source)) {\n            target[key] = deepClone(value, hash)\n        }   \n    }\n    else {\n        target = source\n    }\n\n    return target\n}\nvar obj = {}\nobj.a = obj\ndeepClone(obj)\n\n")),(0,r.kt)("p",null,"\u4e0d\u8fc7\u4ee5\u4e0a\u7684\u6df1\u514b\u9686\u53ea\u514b\u9686\u4e86\u5bf9\u8c61\u81ea\u8eab\u7684\u5c5e\u6027\uff0c\u4e22\u5931\u4e86\u539f\u578b\u94fe\u4e0a\u7684\u5c5e\u6027\uff0c\u4e3a\u4e86\u4e0d\u4e22\u5931\uff0c\u53ef\u4ee5\u8fd9\u4e48\u505a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function completeDeepClone(source) {\n    function deepClone(source, hash = new WeakMap()) {\n        // ... \u4e0a\u9762\u7684\u4ee3\u7801\n    }\n    let ret = deepClone(source)\n    Object.setPrototypeOf(ret, Object.getPrototypeOf(source))\n    return ret\n}\n\n// \u4f7f\u7528\nfunction Animal(name) {\n    this.name = name\n}\nAnimal.prototype.master = 'akara'\ncompleteDeepClone(new Animal())\n")),(0,r.kt)("h2",{id:"\u7ee7\u627f"},"\u7ee7\u627f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function Animal(name, size) {\n    this.name = name\n    this.size = size\n}\n\nAnimal.prototype.eat = function (food) {\n    console.log(this.name + "\u6b63\u5728\u5403" + food)\n}\n')),(0,r.kt)("h3",{id:"\u6784\u9020\u7ee7\u627f"},"\u6784\u9020\u7ee7\u627f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u591a\u7ee7\u627f\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53ea\u80fd\u7ee7\u627f\u7236\u7c7b\u7684\u5b9e\u4f8b\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u4e0d\u80fd\u7ee7\u627f\u539f\u578b\u5c5e\u6027\u548c\u65b9\u6cd5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function Cat() {\n    Animal.call(this)\n}\n\nvar cat = new Cat()\n")),(0,r.kt)("h3",{id:"\u539f\u578b\u94fe\u7ee7\u627f"},"\u539f\u578b\u94fe\u7ee7\u627f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e0d\u80fd\u591a\u7ee7\u627f\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6240\u6709\u65b0\u5b9e\u4f8b\u4f1a\u5171\u4eab\u7236\u7c7b\u7684\u5c5e\u6027")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// cat >= Cat.prototype >= Animal.prototype >= Object.prototype\nfunction Cat() {\n\n}\n\nCat.prototype = new Animal()\nCat.prototype.name = "cat"\n\nvar cat = new Cat()\n')),(0,r.kt)("h3",{id:"\u7ec4\u5408\u7ee7\u627f"},"\u7ec4\u5408\u7ee7\u627f"),(0,r.kt)("p",null,"\u53ef\u4ee5\u7ee7\u627f\u5b9e\u4f8b\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u4e5f\u53ef\u4ee5\u7ee7\u627f\u539f\u578b\u5c5e\u6027\u548c\u65b9\u6cd5\n\u7f3a\u70b9: \u8c03\u7528\u4e24\u6b21\u7236\u7c7b\u6784\u9020\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function Cat (name) {\n    Animal.call(this)\n    this.name = name\n}\n\nCat.prototype = new Animal()\nCat.prototype.constructor = Cat\n\nvar cat = new Cat()\n")),(0,r.kt)("h3",{id:"\u5bc4\u751f\u7ec4\u5408\u7ee7\u627f\u9664es6\u7ee7\u627f\u5916\u6700\u63a8\u8350\u7684\u65b9\u6cd5"},"\u5bc4\u751f\u7ec4\u5408\u7ee7\u627f(\u9664es6\u7ee7\u627f\u5916\u6700\u63a8\u8350\u7684\u65b9\u6cd5)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function Cat(name) {\n    Animal.call(this)\n}\n\nCat.prototype = Object.create(Animal.prototype)\nCat.prototype.constructor = Cat\n")),(0,r.kt)("h3",{id:"es6\u7684extends"},"es6\u7684extends"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"class Cat extends Animal {\n    constructor(name) {\n        super(name)\n    }\n}\n")))}m.isMDXComponent=!0}}]);