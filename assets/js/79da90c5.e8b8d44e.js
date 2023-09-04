"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[663],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),i=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},_=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=i(t),_=a,d=u["".concat(p,".").concat(_)]||u[_]||m[_]||o;return t?r.createElement(d,c(c({ref:n},s),{},{components:t})):r.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=_;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=t[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}_.displayName="MDXCreateElement"},3691:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=t(7462),a=(t(7294),t(3905));const o={sidebarDepth:4},c=void 0,l={unversionedId:"php",id:"php",title:"php",description:"\u5927\u5b66\u65f6\u5019\u8bb0\u7684\u7b14\u8bb0\uff0c\u5982\u4ecaPHP\u5df2\u6b7b",source:"@site/docs/php.mdx",sourceDirName:".",slug:"/php",permalink:"/blog/docs/php",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/php.mdx",tags:[],version:"current",frontMatter:{sidebarDepth:4},sidebar:"tutorialSidebar",previous:{title:"\u524d\u7aef\u535a\u5ba2",permalink:"/blog/docs/others"},next:{title:"React",permalink:"/blog/docs/react/"}},p={},i=[],s={toc:i},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u5927\u5b66\u65f6\u5019\u8bb0\u7684\u7b14\u8bb0\uff0c\u5982\u4ecaPHP\u5df2\u6b7b")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5355\u53cc\u5f15\u53f7")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n$value = 'abc';\necho \"\u53d8\u91cf\u7684\u503c\u4e3a$value\"; // \u8f93\u51faabc\necho '\u53d8\u91cf\u7684\u503c\u4e3a$value'; // \u8f93\u51fa$value\necho '\u53d8\u91cf\u7684\u503c\u4e3a'.$value; // \u8f93\u51faabc\n?>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6570\u7ec4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'$arr = array(\'a\', \'b\', \'c\');\n$arr1 = array("a"=>"aaa", "b"=>"bbb", "c"=>"ccc");\n\necho implode(\'=\', $arr); // a=b=c\necho $arr1[1]; // bbb\n\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7c7b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// \u4e24\u4e2a\u4e0b\u5212\u7ebf\u5f00\u5934\u7684\u51fd\u6570\u901a\u5e38\u88ab\u79f0\u4e3a\u9b54\u672f\u65b9\u6cd5\uff0c\u5305\u62ec__construct, __destruct, __call,\n// __callStatic, __get, __set, __inset, __unset, __sleep, __wakeup, __clone\u7b49\u7b49\u3002\nclass People {\n    var $id; // \u53ef\u4ee5\u7528public/protected/private\n    var $name;\n    \n    private $n;\n    \n    // \u6784\u9020\u51fd\u6570\n    function __construct($id, $name, $n) {\n        $this->id = $id;\n        $this->name = $name;\n        $this->n = $n;\n    }\n    \n    // \u6790\u6784\u51fd\u6570\n    function __destruct() {\n        \n    }\n    \n    // \u642d\u914dclone\u4f7f\u7528\n    function __clone() {\n        echo \"clone function\"\n    }\n    \n    // \u5b9e\u4f8b\u8c03\u7528\u65b9\u6cd5\u65f6\uff0c\u82e5\u627e\u4e0d\u5230\u65b9\u6cd5\uff0c\u5219\u8c03\u7528\u8be5\u51fd\u6570\n    function __call($name, $arguments) {\n        echo 'call function';\n    }\n    // \u9664\u6b64\u4e4b\u5916\u8fd8\u6709__callStatic\uff0c\u5bf9\u5e94\u7684\u662f\u7c7b\u65b9\u6cd5\n    // BTW\uff0c\u7c7b\u5916\u90e8\u8c03\u7528\u7c7b\u51fd\u6570\u65f6 People::Fn\uff0c\u7c7b\u5185\u90e8\u8c03\u7528\u65f6Self::Fn\n    static function __callStatic($name, $arguments) {\n        echo \"$name\".implode(',', $arguments);\n    }\n    \n    // \u83b7\u53d6 $p->n\u7684\u503c\u7684\u65f6\u5019\uff0c\u56e0\u4e3aprivate\uff0c\u6240\u4ee5\u5b9e\u9645\u4e0a\u65e0\u6cd5\u8bbf\u95ee\u8be5\u5c5e\u6027\u7684\u503c\u3002\n    // \u6b64\u65f6\u4f1a\u81ea\u52a8\u8c03\u7528__get\u51fd\u6570\n    function __get($property) {\n        echo $this->$property;\n    }\n    \n    // \u4fee\u6539 $p->n\u7684\u503c\u7684\u65f6\u5019\uff0c\u56e0\u4e3aprivate\uff0c\u6240\u4ee5\u5b9e\u9645\u4e0a\u65e0\u6cd5\u4fee\u6539\u8be5\u5c5e\u6027\u7684\u503c\u3002\n    // \u6b64\u65f6\u4f1a\u81ea\u52a8\u8c03\u7528__set\u51fd\u6570\n    function __set($property, $value) {\n        $this->$property = $value;\n    }\n    \n    \n    function getInfo() {\n        echo $this->id.'\u53f7\u662f'.$this->name;\n    }\n}\n\n$p = new People(1, 'akara');\n$p->getInfo();\n\n$p->test(); // \u627e\u4e0d\u5230\uff0c\u6240\u4ee5\u8c03\u7528__call\u51fd\u6570\n\necho $p->n; // \u8c03\u7528__get\u51fd\u6570\n$p->n = 1; // \u8c03\u7528__set\u51fd\u6570\n\n$s = clone $p; // \u8c03\u7528__clone\u51fd\u6570\n\n\n\n$data = serialize($arr); // \u5e8f\u5217\u5316\necho $data;\nunserialize($data); // \u53cd\u5e8f\u5217\u5316\n\n// \u8c03\u7528serialize\u51fd\u6570\u65f6\uff0c\u5148\u4f1a\u67e5\u627e\u7c7b\u4e2d\u662f\u5426\u6709__sleep\uff0c\u5982\u679c\u6709\u5219\u8c03\u7528\u540e\u518d\u5e8f\u5217\u5316\n// \u540c\u7406\uff0c\u8c03\u7528unserialize\u65f6\uff0c\u67e5\u770b\u662f\u5426\u6709__wakeup\uff0c\u8c03\u7528\u540e\u624d\u53cd\u5e8f\u5217\u5316\u3002\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"PHP\u8fde\u63a5\u6570\u636e\u5e93")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n    $link = mysqli_connect('localhost:3308', 'root', '');\n    mysqli_select_db($link, 'test');\n    $sql = \"SELECT * FROM comments\";\n    $result = mysqli_query($link, $sql);\n    if (mysqli_num_rows($result) > 0) {\n        while ($row = mysqli_fetch_assoc($result)) {\n\n        }\n    }\n\n    mysqli_close($link)\n?>\n")))}m.isMDXComponent=!0}}]);