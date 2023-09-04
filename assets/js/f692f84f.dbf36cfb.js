"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[281],{3905:(e,n,l)=>{l.d(n,{Zo:()=>k,kt:()=>c});var a=l(7294);function t(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function r(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,a)}return l}function p(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?r(Object(l),!0).forEach((function(n){t(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function i(e,n){if(null==e)return{};var l,a,t=function(e,n){if(null==e)return{};var l,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],n.indexOf(l)>=0||(t[l]=e[l]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(t[l]=e[l])}return t}var o=a.createContext({}),s=function(e){var n=a.useContext(o),l=n;return e&&(l="function"==typeof e?e(n):p(p({},n),e)),l},k=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var l=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),d=s(l),u=t,c=d["".concat(o,".").concat(u)]||d[u]||m[u]||r;return l?a.createElement(c,p(p({ref:n},k),{},{components:l})):a.createElement(c,p({ref:n},k))}));function c(e,n){var l=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=l.length,p=new Array(r);p[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[d]="string"==typeof e?e:t,p[1]=i;for(var s=2;s<r;s++)p[s]=l[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,l)}u.displayName="MDXCreateElement"},4271:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=l(7462),t=(l(7294),l(3905));const r={sidebarDepth:4},p="Linux",i={unversionedId:"linux",id:"linux",title:"Linux",description:"\u5b8c\u5584\u4e2d",source:"@site/docs/linux.md",sourceDirName:".",slug:"/linux",permalink:"/blog/docs/linux",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/linux.md",tags:[],version:"current",frontMatter:{sidebarDepth:4},sidebar:"tutorialSidebar",previous:{title:"koa",permalink:"/blog/docs/koa"},next:{title:"MongoDB",permalink:"/blog/docs/mongodb"}},o={},s=[{value:"\u5feb\u6377\u952e",id:"\u5feb\u6377\u952e",level:2},{value:"VIM\u5feb\u6377\u952e",id:"vim\u5feb\u6377\u952e",level:2},{value:"Shell",id:"shell",level:2},{value:"\u53d8\u91cf",id:"\u53d8\u91cf",level:3},{value:"\u4f20\u9012\u53c2\u6570",id:"\u4f20\u9012\u53c2\u6570",level:3},{value:"\u8fd0\u7b97\u7b26",id:"\u8fd0\u7b97\u7b26",level:3},{value:"\u8f93\u51fa\u91cd\u5b9a\u5411",id:"\u8f93\u51fa\u91cd\u5b9a\u5411",level:3},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2},{value:"ls",id:"ls",level:3},{value:"chmod",id:"chmod",level:3},{value:"alias",id:"alias",level:3},{value:"grep",id:"grep",level:3},{value:"\u7ba1\u9053",id:"\u7ba1\u9053",level:3},{value:"sudo",id:"sudo",level:3},{value:"ssh",id:"ssh",level:3},{value:"ssh-keygen",id:"ssh-keygen",level:3},{value:"whoami",id:"whoami",level:3},{value:"who",id:"who",level:3},{value:"useradd",id:"useradd",level:3},{value:"passwd",id:"passwd",level:3},{value:"export",id:"export",level:3},{value:"wc",id:"wc",level:3},{value:"man",id:"man",level:3},{value:"whereis",id:"whereis",level:3},{value:"which",id:"which",level:3},{value:"ln",id:"ln",level:3},{value:"tar",id:"tar",level:3},{value:"crontab",id:"crontab",level:3},{value:"clear",id:"clear",level:3},{value:"\u5e38\u89c1\u914d\u7f6e\u6587\u4ef6",id:"\u5e38\u89c1\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u6838\u5fc3\u914d\u7f6e",id:"\u6838\u5fc3\u914d\u7f6e",level:3},{value:"\u7528\u6237\u4fe1\u606f",id:"\u7528\u6237\u4fe1\u606f",level:3},{value:"ssh",id:"ssh-1",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:3}],k={toc:s},d="wrapper";function m(e){let{components:n,...l}=e;return(0,t.kt)(d,(0,a.Z)({},k,l,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"linux"},"Linux"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"\u5b8c\u5584\u4e2d")),(0,t.kt)("h2",{id:"\u5feb\u6377\u952e"},"\u5feb\u6377\u952e"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u5149\u6807\u56de\u5230\u5f00\u5934\uff1a",(0,t.kt)("inlineCode",{parentName:"p"},"ctrl + a"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u5149\u6807\u56de\u5230\u672b\u5c3e\uff1a",(0,t.kt)("inlineCode",{parentName:"p"},"ctrl + e")))),(0,t.kt)("h2",{id:"vim\u5feb\u6377\u952e"},"VIM\u5feb\u6377\u952e"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"undo\uff1a",(0,t.kt)("inlineCode",{parentName:"li"},"u")),(0,t.kt)("li",{parentName:"ol"},"redo\uff1a",(0,t.kt)("inlineCode",{parentName:"li"},"ctrl + r")),(0,t.kt)("li",{parentName:"ol"},"\u5220\u9664\u5f53\u524d\u5b57\u7b26\uff1a",(0,t.kt)("inlineCode",{parentName:"li"},"x")),(0,t.kt)("li",{parentName:"ol"},"\u5220\u9664\u5f53\u524d\u884c\uff1a",(0,t.kt)("inlineCode",{parentName:"li"},"dd")),(0,t.kt)("li",{parentName:"ol"},"pageup\uff1a",(0,t.kt)("inlineCode",{parentName:"li"},"fn + up ")),(0,t.kt)("li",{parentName:"ol"},"pagedown\uff1a",(0,t.kt)("inlineCode",{parentName:"li"},"fn + down ")),(0,t.kt)("li",{parentName:"ol"},"\u641c\u7d22\u5355\u8bcd\uff1a",(0,t.kt)("inlineCode",{parentName:"li"},"/word"),"\u56de\u8f66\uff0c\u7136\u540e\u6309n\u4e0d\u505c\u641c"),(0,t.kt)("li",{parentName:"ol"},"\u884c\u9996\uff1a",(0,t.kt)("inlineCode",{parentName:"li"},"^")),(0,t.kt)("li",{parentName:"ol"},"\u884c\u5c3e\uff1a",(0,t.kt)("inlineCode",{parentName:"li"},"$")),(0,t.kt)("li",{parentName:"ol"},"\u4e0b\u4e2a\u5355\u8bcd\uff1a",(0,t.kt)("inlineCode",{parentName:"li"},"w")),(0,t.kt)("li",{parentName:"ol"},"\u4e0a\u4e2a\u5355\u8bcd\uff1a",(0,t.kt)("inlineCode",{parentName:"li"},"b")),(0,t.kt)("li",{parentName:"ol"},"\u5220\u9664\u5305\u62ec\u672c\u884c\u5728\u5185\u7684\u540e\u7eed\u884c\uff1a",(0,t.kt)("inlineCode",{parentName:"li"},":,$d")),(0,t.kt)("li",{parentName:"ol"},"\u591a\u9009\u5b57\u7b26\uff1a",(0,t.kt)("inlineCode",{parentName:"li"},"v")),(0,t.kt)("li",{parentName:"ol"},"\u5757\u6a21\u5f0f\u591a\u9009\u5b57\u7b26\uff1a",(0,t.kt)("inlineCode",{parentName:"li"},"ctrl + v"),"\uff0c\u591a\u9009\u5b8c\u6309d\u6216x\u5220\u9664\uff0c\u4e5f\u53ef\u4ee5\u6309c\u66ff\u6362"),(0,t.kt)("li",{parentName:"ol"},"\u7f29\u8fdb\uff1a",(0,t.kt)("inlineCode",{parentName:"li"},"<<"),"\u548c",(0,t.kt)("inlineCode",{parentName:"li"},">>"))),(0,t.kt)("h2",{id:"shell"},"Shell"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"\u811a\u672c\u4ee5",(0,t.kt)("inlineCode",{parentName:"li"},"#!/bin/bash"),"\u5f00\u5934"),(0,t.kt)("li",{parentName:"ol"},"\u53ef\u901a\u8fc7",(0,t.kt)("inlineCode",{parentName:"li"},"chmod +x ./index.sh"),"\u4f7f\u5176\u53ef\u6267\u884c")),(0,t.kt)("h3",{id:"\u53d8\u91cf"},"\u53d8\u91cf"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},'name="akara" # \u58f0\u660e\u53d8\u91cf \u7b49\u53f7\u524d\u540e\u8981\u7c98\u7740\necho $name # \u4f7f\u7528\u53d8\u91cf\necho ${name} # \u4f7f\u7528\u53d8\u91cf *\u63a8\u8350\nreadonly name # \u4f7f\u53d8\u91cf\u53ea\u8bfb\nunset name # \u5220\u9664\u53d8\u91cf\uff0c\u4e0d\u80fd\u5220\u9664\u53ea\u8bfb\u53d8\u91cf\n')),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"Shell"),"\u53d8\u91cf\u53ef\u5206\u4e3a\u5f53\u524d\u811a\u672c\u4e0b\u7684\u5c40\u90e8\u53d8\u91cf\uff0c\u4ee5\u53ca\u73af\u5883\u53d8\u91cf\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5b57\u7b26\u4e32\uff08\u5355\u5f15\u53f7\uff09\nname='akara'\n# \u5b57\u7b26\u4e32\uff08\u53cc\u5f15\u53f7\uff09\nname=\"akara\"\n")),(0,t.kt)("p",null,"\u5355\u5f15\u53f7\u5b57\u7b26\u4e32\u5185\u90e8\u5b57\u7b26\u4f1a\u539f\u6837\u8f93\u51fa\uff0c\u5373\u5185\u90e8\u4e0d\u80fd\u6709\u53d8\u91cf\u548c\u8f6c\u4e49\u7b26\u53f7\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5355\u5f15\u53f7\nname='akara'\necho 'i am ${name}' # i am ${name}\n\n# \u53cc\u5f15\u53f7\nname='akara'\necho \"i am ${name}\"\" # i am akara\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},'arr=("a" "b" "c") # \u6570\u7ec4\necho ${arr[0]} # "a"\necho ${arr[@]} # \u8f93\u51fa\u6570\u7ec4\u6240\u6709\u9879 "a" "b" "c"\n')),(0,t.kt)("h3",{id:"\u4f20\u9012\u53c2\u6570"},"\u4f20\u9012\u53c2\u6570"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},'echo "$1 $2 $3"\n./index.sh a b c # a b c\n')),(0,t.kt)("h3",{id:"\u8fd0\u7b97\u7b26"},"\u8fd0\u7b97\u7b26"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"shell"),"\u4e2d\u8fdb\u884c\u8fd0\u7b97\u901a\u5e38\u4f7f\u7528\u53cd\u5f15\u53f7\u914d\u5408",(0,t.kt)("inlineCode",{parentName:"p"},"expr"),"\u6765\u5b9e\u73b0"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"a=10\nb=20\n\necho `expr $a + $b`\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"\u6761\u4ef6\u5224\u65ad\uff1a")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"if [ $name == 'akara' ] # \u6ce8\u610f\uff0c\u4e00\u5b9a\u8981\u7559\u51fa\u7a7a\u683c\nthen\n    echo \"\u76f8\u7b49\"\nfi\n")),(0,t.kt)("p",null,"\u8865\u5145\uff1a\u5224\u65ad\u76f8\u7b49\u65f6\u53ef\u4ee5\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"=="),"\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"=")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"\u903b\u8f91\u8fd0\u7b97\uff1a")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},'name="akara"\nage=22\n\nif [[ $name == \'akara\' && $age == 20 ]]\nthen\n    echo "\u76f8\u7b49"\nelse \n    echo "\u4e0d\u76f8\u7b49"\nfi\n')),(0,t.kt)("h3",{id:"\u8f93\u51fa\u91cd\u5b9a\u5411"},"\u8f93\u51fa\u91cd\u5b9a\u5411"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},'echo "hello" > index.js # \u8986\u76d6\necho "hello" >> index.js # \u4e0d\u8986\u76d6\uff0c\u6dfb\u52a0\u5230\u6587\u4ef6\u5c3e\u90e8\n')),(0,t.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u91cd\u5b9a\u5411\uff0c\u8ba9\u6211\u4eec\u5728\u6267\u884c\u67d0\u4e9b\u811a\u672c\u65f6\u5c4f\u853d\u8f93\u51fa"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"./index.sh > /dev/null\n")),(0,t.kt)("h2",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,t.kt)("p",null,"\u5f88\u7b80\u5355\u7684\u547d\u4ee4\u5c31\u4e0d\u5199\u4e86\u3002"),(0,t.kt)("h3",{id:"ls"},"ls"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"ls \nls -a # \u9690\u85cf\u6587\u4ef6 \nls -l # \u663e\u793a\u5b8c\u6574\u4fe1\u606f\uff0c\u5305\u62ec\u8bfb\u5199\u6267\u884c\u7684\u6743\u9650\u7b49\n")),(0,t.kt)("p",null,"\u901a\u8fc7",(0,t.kt)("inlineCode",{parentName:"p"},"ls -l"),"\u53ef\u4ee5\u770b\u5230\u5b8c\u6574\u7684\u6587\u4ef6\u4fe1\u606f\uff0c\u5982\u4e0b\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"-rwxr-xr-x 1 root root 27776 Apr 17 2012 test.txt\n")),(0,t.kt)("p",null,"\u5176\u4e2d",(0,t.kt)("inlineCode",{parentName:"p"},"- rwx r-x r-x"),"\u7531\u56db\u90e8\u5206\u7ec4\u6210\uff1a\u6587\u4ef6\u7c7b\u578b\u3001\u62e5\u6709\u8005\u6743\u9650\u3001\u62e5\u6709\u8005\u6240\u5c5e\u7528\u6237\u7ec4\u6743\u9650\u3001\u5176\u4ed6\u7528\u6237\u6743\u9650\u3002"),(0,t.kt)("p",null,"\u6587\u4ef6\u7c7b\u578b\u4e2d\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"-"),"\u8868\u793a\u666e\u901a\u6587\u4ef6\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"d"),"\u8868\u793a\u76ee\u5f55\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"l"),"\u8868\u793a\u8f6f\u94fe\u63a5\uff08\u786c\u94fe\u63a5\u65e0\u7279\u6b8a\u6807\u8bb0\uff09"),(0,t.kt)("p",null,"\u6743\u9650\u5305\u62ec",(0,t.kt)("inlineCode",{parentName:"p"},"rwx"),"\uff0c\u5373\u8bfb\u3001\u5199\u3001\u6267\u884c\u3002\u53ef\u4ee5\u4f7f\u7528\u6570\u5b57\u6765\u4ee3\u8868\u6743\u9650\uff0c\u8bfb\uff1a4\u3001\u5199\uff1a2\u3001\u6267\u884c\uff1a1\u3002\u56e0\u6b64",(0,t.kt)("inlineCode",{parentName:"p"},"r-x"),"\u5bf9\u5e94\u7740",(0,t.kt)("inlineCode",{parentName:"p"},"5"),"\u3002"),(0,t.kt)("h3",{id:"chmod"},"chmod"),(0,t.kt)("p",null,"\u901a\u8fc7",(0,t.kt)("inlineCode",{parentName:"p"},"ls"),"\u53ef\u4ee5\u770b\u5230\u4e00\u4e2a\u6587\u4ef6\u7684\u64cd\u4f5c\u6743\u9650\uff0c\u800c\u901a\u8fc7",(0,t.kt)("inlineCode",{parentName:"p"},"chmod"),"\u53ef\u4ee5\u4fee\u6539\u6587\u4ef6\u7684\u6743\u9650\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"chmod 777 text.txt\n")),(0,t.kt)("p",null,"\u6216\u8005"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"chmod +x test.txt # \u4f7f\u5176\u53ef\u6267\u884c\n")),(0,t.kt)("h3",{id:"alias"},"alias"),(0,t.kt)("p",null,"\u7528\u4e8e\u8d77\u547d\u4ee4\u7684\u522b\u540d"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"alias ..='cd ..'\n")),(0,t.kt)("h3",{id:"grep"},"grep"),(0,t.kt)("p",null,"\u7528\u4e8e\u5b57\u7b26\u4e32\u67e5\u627e"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"grep 'content' test.txt\n-e # \u6b63\u5219\u67e5\u627e \n")),(0,t.kt)("h3",{id:"\u7ba1\u9053"},"\u7ba1\u9053"),(0,t.kt)("p",null,"\u7ba1\u9053\u7528\u6765\u5b9e\u73b0\u8fdb\u7a0b\u4e4b\u95f4\u7684\u901a\u4fe1\uff0c\u5177\u4f53\u6765\u8bf4\u5c31\u662f\u628a\u4e00\u4e2a\u7a0b\u5e8f\u7684\u8f93\u51fa\u4f5c\u4e3a\u53e6\u4e00\u4e2a\u7a0b\u5e8f\u7684\u8f93\u5165"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"cat test.txt | wc # \u901a\u8fc7cat\u5f97\u5230test.txt\u5185\u5bb9\uff0c\u628a\u8be5\u5185\u5bb9\u4f5c\u4e3awc\u547d\u4ee4\u7684\u8f93\u5165\n")),(0,t.kt)("h3",{id:"sudo"},"sudo"),(0,t.kt)("p",null,"\u8ba9\u666e\u901a\u7528\u6237\u4e34\u65f6\u5177\u5907",(0,t.kt)("inlineCode",{parentName:"p"},"root"),"\u7528\u6237\u7684\u6743\u9650"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"sudo ls\n")),(0,t.kt)("h3",{id:"ssh"},"ssh"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"ssh user@host\n-p # \u6307\u5b9a\u7aef\u53e3\u53f7\uff0c\u9ed8\u8ba4\u662fssh\u768422\u7aef\u53e3\u53f7\nssh host # \u4ee5root\u7528\u6237\u767b\u5f55\n")),(0,t.kt)("p",null,"\u53e6\u5916\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"~/.ssh/config"),"\u7528\u4e8e\u5b58\u50a8\u670d\u52a1\u5668\u76f8\u5173\u7684\u914d\u7f6e\uff0c\u5982\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"# ssh config\n#\n#\nhost myserver\n        hostName 111.111.111.111\n        User root\n        port 2045\n")),(0,t.kt)("p",null,"\u6211\u4eec\u53ea\u9700\u8981\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"ssh myserver"),"\u5373\u53ef\u5feb\u901f\u8fde\u63a5\u670d\u52a1\u5668"),(0,t.kt)("h3",{id:"ssh-keygen"},"ssh-keygen"),(0,t.kt)("p",null,"\u7528\u6765\u521b\u5efa\u5bc6\u94a5\uff0c\u751f\u6210\u7684\u5bc6\u94a5\u5b58\u653e\u4e8e",(0,t.kt)("inlineCode",{parentName:"p"},"~/.ssh/"),"\u4e0b"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"ssh-keygen\n")),(0,t.kt)("h3",{id:"whoami"},"whoami"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"whoami # \u8f93\u51fa\u6211\u7684\u540d\u5b57\n")),(0,t.kt)("h3",{id:"who"},"who"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"who # \u8f93\u51fa\u5f53\u524d\u4e3b\u673a\u6240\u6709\u767b\u5f55\u7528\u6237\u7684\u4fe1\u606f\n")),(0,t.kt)("h3",{id:"useradd"},"useradd"),(0,t.kt)("p",null,"\u6dfb\u52a0\u7528\u6237\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"adduser"),"\u547d\u4ee4\u4e5f\u884c\uff0c\u4f46\u662f\u4e8c\u8005\u7565\u6709\u5dee\u5f02"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"useradd akara\n")),(0,t.kt)("h3",{id:"passwd"},"passwd"),(0,t.kt)("p",null,"\u4fee\u6539\u7528\u6237\u5bc6\u7801"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"passwd akara\n")),(0,t.kt)("h3",{id:"export"},"export"),(0,t.kt)("p",null,"\u7528\u4e8e\u6211\u4eec\u5728\u914d\u7f6e\u6587\u4ef6",(0,t.kt)("inlineCode",{parentName:"p"},"/etc/profile"),"\u6216",(0,t.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),"\u4e2d\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"export"),"\u6765\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},'# /etc/profile\nexport name="aka"\n')),(0,t.kt)("h3",{id:"wc"},"wc"),(0,t.kt)("p",null,"\u7528\u4e8e\u8ba1\u7b97\u6587\u4ef6\u7684\u5b57\u6570\u3001\u884c\u6570\u7b49\u4fe1\u606f"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"wc -l test.txt # \u8f93\u51fa\u884c\u6570\n")),(0,t.kt)("h3",{id:"man"},"man"),(0,t.kt)("p",null,"\u7528\u4e8e\u67e5\u8be2\u4e00\u4e2a\u547d\u4ee4\u7684\u4f7f\u7528\u65b9\u6cd5"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"man ls\n")),(0,t.kt)("h3",{id:"whereis"},"whereis"),(0,t.kt)("p",null,"\u7528\u4e8e\u67e5\u627e\u6587\u4ef6\uff0c\u901a\u5e38\u53ef\u4ee5\u62ff\u6765\u67e5\u914d\u7f6e\u6587\u4ef6\u6216\u53ef\u6267\u884c\u6587\u4ef6\u7684\u4f4d\u7f6e"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"whereis profile\n# profile: /etc/profile.d /etc/profile\n")),(0,t.kt)("h3",{id:"which"},"which"),(0,t.kt)("p",null,"\u4e5f\u662f\u7528\u4e8e\u67e5\u627e\u6587\u4ef6\uff0c\u901a\u5e38\u7528\u6765\u67e5\u53ef\u6267\u884c\u6587\u4ef6\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"which bash\n")),(0,t.kt)("h3",{id:"ln"},"ln"),(0,t.kt)("p",null,"\u7528\u4e8e\u521b\u5efa\u94fe\u63a5\uff0c\u94fe\u63a5\u5206\u4e3a\u8f6f\u94fe\u63a5\uff08\u7b26\u53f7\u94fe\u63a5\uff09\u548c\u786c\u94fe\u63a5"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"ln /bin/bash sh # \u9ed8\u8ba4\u521b\u5efa\u786c\u94fe\u63a5\nln -s /bin/bash sh # \u8f6f\u94fe\u63a5\n")),(0,t.kt)("p",null,"\u8f6f\u94fe\u63a5\u53ef\u4ee5\u7406\u89e3\u6210windows\u4e2d\u7684\u5feb\u6377\u65b9\u5f0f\uff1b\u786c\u94fe\u63a5\u53ef\u4ee5\u770b\u6210\u4e00\u4e2a\u6587\u4ef6\u62e5\u6709\u4e0d\u540c\u7684\u8def\u5f84\u3002"),(0,t.kt)("h3",{id:"tar"},"tar"),(0,t.kt)("p",null,"\u7528\u4e8e\u6253\u5305\u538b\u7f29\u6587\u4ef6\u3002"),(0,t.kt)("p",null,"\u6211\u4eec\u4f1a\u7ecf\u5e38\u770b\u5230\u8fd9\u6837\u7684\u6587\u4ef6\uff1a",(0,t.kt)("inlineCode",{parentName:"p"},"*.tar.gz"),"\u3001",(0,t.kt)("inlineCode",{parentName:"p"},"*.tar.bz2"),"\u3001",(0,t.kt)("inlineCode",{parentName:"p"},"*.tar.xz"),"\u3002\u8fd9\u4e9b\u90fd\u662f\u901a\u8fc7",(0,t.kt)("inlineCode",{parentName:"p"},"tar"),"\u6253\u5305\u800c\u6210\u7684\uff0c\u540e\u7f00\u7684\u4e0d\u540c\u662f\u56e0\u4e3a\u5176\u6240\u91c7\u7528\u7684\u538b\u7f29\u7b97\u6cd5\u4e0d\u540c\u3002"),(0,t.kt)("p",null,"\u538b\u7f29\u6bd4\uff1a",(0,t.kt)("inlineCode",{parentName:"p"},"gz")," < ",(0,t.kt)("inlineCode",{parentName:"p"},"bz2")," < ",(0,t.kt)("inlineCode",{parentName:"p"},"xz")),(0,t.kt)("p",null,"\u538b\u7f29\u901f\u5ea6\uff1a",(0,t.kt)("inlineCode",{parentName:"p"},"gz")," > ",(0,t.kt)("inlineCode",{parentName:"p"},"bz2")," > ",(0,t.kt)("inlineCode",{parentName:"p"},"xz")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"\u538b\u7f29\u6587\u4ef6\uff1a")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"# \u591a\u79cd\u65b9\u5f0f\ntar -zcvf filename.tar.gz FILES # z\u8868\u793agz\ntar -jcvf filename.tar.bz2 FILES # j\u8868\u793abz2\ntar -Jcvf filename.tar.xz FILES # J\u8868\u793axz\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"\u89e3\u538b\u7f29\u6587\u4ef6\uff1a")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"tar -vx -f filename\n# or\ntar -vxf filename\n")),(0,t.kt)("h3",{id:"crontab"},"crontab"),(0,t.kt)("p",null,"\u5b9a\u65f6\u4efb\u52a1\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"crontab -l # \u67e5\u770b\u5b9a\u65f6\u4efb\u52a1\n")),(0,t.kt)("h3",{id:"clear"},"clear"),(0,t.kt)("p",null,"\u6e05\u7a7a\u8f93\u51fa"),(0,t.kt)("h2",{id:"\u5e38\u89c1\u914d\u7f6e\u6587\u4ef6"},"\u5e38\u89c1\u914d\u7f6e\u6587\u4ef6"),(0,t.kt)("h3",{id:"\u6838\u5fc3\u914d\u7f6e"},"\u6838\u5fc3\u914d\u7f6e"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"/etc/profile"),"\uff1a \u7cfb\u7edf\u7ea7\u914d\u7f6e"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),"\uff1a\u7528\u6237\u7ea7\u914d\u7f6e"),(0,t.kt)("p",null,"\u5f53\u6211\u4eec\u66f4\u6539\u914d\u7f6e\u540e\uff0c\u901a\u8fc7",(0,t.kt)("inlineCode",{parentName:"p"},"source ~/.bashrc"),"\u4f7f\u5176\u751f\u6548"),(0,t.kt)("h3",{id:"\u7528\u6237\u4fe1\u606f"},"\u7528\u6237\u4fe1\u606f"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"/etc/passwd"),"\uff1a\u7528\u6237\u4fe1\u606f\uff08\u7528\u6237ID\uff0c\u7ec4ID\u7b49\uff09"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"/etc/group"),": \u7528\u6237\u7ec4\u4fe1\u606f"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"/etc/shadow"),": \u7528\u6237\u5bc6\u7801\uff08\u5bc6\u6587\u62a5\u9519\uff09"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"/etc/sudoers"),"\uff1a\u7528\u6237\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"sudo"),"\u6743\u9650"),(0,t.kt)("h3",{id:"ssh-1"},"ssh"),(0,t.kt)("p",null,"\u4e2a\u4eba\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"ssh"),"\u76f8\u5173\u6587\u4ef6\u5728",(0,t.kt)("inlineCode",{parentName:"p"},"~/.ssh"),"\u4e0b\uff0c\u5305\u62ec\u4e2a\u4eba\u7684\u79c1\u94a5\u3001\u516c\u94a5\u3001SSH\u914d\u7f6e\u6587\u4ef6",(0,t.kt)("inlineCode",{parentName:"p"},"config"),"\u3001",(0,t.kt)("inlineCode",{parentName:"p"},"authorized_keys"),"\u3001",(0,t.kt)("inlineCode",{parentName:"p"},"known_hosts"),"\u3002"),(0,t.kt)("p",null,"\u901a\u5e38\u6211\u4eec\u5728\u670d\u52a1\u5668\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"authorized_keys"),"\u5b58\u653e\u6211\u4eec\u81ea\u5df1\u7535\u8111\u7684\u516c\u94a5\uff0c\u4e4b\u540e\u5c31\u65e0\u9700\u4f7f\u7528\u5bc6\u7801\u6765\u8fde\u63a5\u670d\u52a1\u5668\u4e86\u3002"),(0,t.kt)("p",null,"\u5728\u6211\u4eec\u6210\u529f\u8fde\u63a5\u670d\u52a1\u5668\u540e\uff0c\u6211\u4eec\u7535\u8111\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"known_hosts"),"\u6587\u4ef6\u4e5f\u4f1a\u8bb0\u5f55\u4e0b\u670d\u52a1\u5668\u7684\u516c\u94a5\u3002"),(0,t.kt)("h3",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"~/.bash_history"),"\uff1a\u8bb0\u5f55\u5386\u53f2\u547d\u4ee4\u884c"))}m.isMDXComponent=!0}}]);