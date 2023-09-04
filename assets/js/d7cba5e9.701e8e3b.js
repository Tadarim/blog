"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2887],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,y=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(y,o(o({ref:t},i),{},{components:n})):r.createElement(y,o({ref:t},i))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={sidebarDepth:4},o="Mysql",s={unversionedId:"mysql",id:"mysql",title:"Mysql",description:"\u4e3b\u8981\u662f\u8bb0\u4e00\u4e9bAPI\uff0c\u8bb0\u5fc6\u529b\u4e0b\u964d\u5bb9\u6613\u5fd8",source:"@site/docs/mysql.md",sourceDirName:".",slug:"/mysql",permalink:"/blog/docs/mysql",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mysql.md",tags:[],version:"current",frontMatter:{sidebarDepth:4},sidebar:"tutorialSidebar",previous:{title:"MongoDB",permalink:"/blog/docs/mongodb"},next:{title:"Node",permalink:"/blog/docs/node/"}},u={},p=[],i={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mysql"},"Mysql"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e3b\u8981\u662f\u8bb0\u4e00\u4e9bAPI\uff0c\u8bb0\u5fc6\u529b\u4e0b\u964d\u5bb9\u6613\u5fd8")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"mysql -u root -p password # \u8fde\u63a5\u6570\u636e\u5e93\n\nSHOW DATABASES; # \u663e\u793a\u6240\u6709\u6570\u636e\u5e93\nCREATE DATABASE xxx; # \u521b\u5efa\u6570\u636e\u5e93 \nDROP DATABASE xxx; # \u5220\u9664\u6570\u636e\u5e93\n\nuse xxx; # \u9009\u62e9\u6570\u636e\u5e93\n\nSHOW TABLES; # \u663e\u793a\u6240\u6709\u8868\nCREATE TABLE yyy(column_name column_type); # \u65b0\u5efa\u8868\u3002\u53ef\u4ee5\u540c\u65f6\u8bbe\u7f6e\u4e3b\u952e/not null/\u9012\u589e/\u5b57\u7b26\u96c6\u7b49\u8868\u7684\u5c5e\u6027\nDROP TABLE yyy;\n\nSHOW CREATE TABLE yyy; # \u67e5\u770b\u67d0\u4e2a\u8868\u7684\u5177\u4f53\u5c5e\u6027\nALTER TABLE yyy engine=innodb # ALTER\u7528\u4e8e\u4fee\u6539\u8868\u7684\u5c5e\u6027\uff0c\u6b64\u4f8b\u5b50\u7528\u6765\u4fee\u6539\u5f15\u64ce\n\nINSERT INTO user VALUES(null, 'akara', 'root') # \u63d2\u5165\u6570\u636e\nDELETE FROM user WHERE user_id = '111' # \u5220\u9664\u6570\u636e\nUPDATE user SET user_name = 'admin' WHERE user_id = '111' # \u66f4\u65b0\u6570\u636e\nSELECT user_name, user_psw FROM user WHERE user_id = '111' # \u67e5\u627e\u6570\u636e\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Node\u4e2d\u4f7f\u7528Mysql")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const mysql = require('mysql')\nconst bluebird = require('bluebird') // \u975e\u5fc5\u987b\nconst config = {\n    host: 'localhost',\n    user: 'user', // \u6570\u636e\u5e93\u7528\u6237\u540d\n    password: 'password', // \u6570\u636e\u5e93\u5bc6\u7801\n    database: 'node', // \u9009\u4e2d\u7684\u6570\u636e\u5e93\n}\nlet conn = mysql.createConnection(config)\nconn = bluebird.promisifyAll(conn) // \u975e\u5fc5\u987b\n\nconn.connect() // \u597d\u50cf\u4e0d\u52a0\u8fd9\u4e2a\u4e5f\u80fd\u7528\uff0c\u5efa\u8bae\u52a0\u4e0a\n\nasync function A() {\n    let data = await conn.queryAsync('SELECT * FROM user')\n    // do something\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8054\u8868\u67e5\u8be2")),(0,a.kt)("p",null,"\u6bd4\u5982\u6211\u4eec\u6709\u4e24\u4e2a\u8868user\u548cquestion\uff0c\u5927\u6982\u7ed3\u6784\u5982\u4e0b"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"user_id"),(0,a.kt)("th",{parentName:"tr",align:null},"user_name"),(0,a.kt)("th",{parentName:"tr",align:null},"user_psw"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"akara"),(0,a.kt)("td",{parentName:"tr",align:null},"123456")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"q_id"),(0,a.kt)("th",{parentName:"tr",align:null},"q_title"),(0,a.kt)("th",{parentName:"tr",align:null},"q_info"),(0,a.kt)("th",{parentName:"tr",align:null},"user_id"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6211\u662f\u95ee\u9898"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6211\u662f\u63cf\u8ff0"),(0,a.kt)("td",{parentName:"tr",align:null},"1")))),(0,a.kt)("p",null,"\u901a\u8fc7",(0,a.kt)("strong",{parentName:"p"},"\u5185\u8054\u8868\u67e5\u8be2"),"\uff0c\u53ef\u4ee5\u83b7\u5f97\u6bcf\u4e2a\u95ee\u9898\u7684\u63d0\u95ee\u4eba\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT u.user_name, q.q_title, q.q_info FROM user as u, question as q WHERE u.user_id = q.user_id\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e8b\u52a1")),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u5728MYSQL\u4e2d\u53ea\u6709\u4f7f\u7528\u4e86",(0,a.kt)("strong",{parentName:"p"},"Innodb"),"\u6570\u636e\u5e93\u5f15\u64ce\u7684\u6570\u636e\u5e93\u6216\u8868\u624d\u652f\u6301\u4e8b\u52a1\u3002\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"show create table yyy"),"\u6765\u67e5\u8be2\u4e00\u4e2a\u8868\u6240\u4f7f\u7528\u7684\u5f15\u64ce\u3002"),(0,a.kt)("p",null,"\u901a\u5e38Mysql\u9ed8\u8ba4\u662f\u81ea\u52a8\u63d0\u4ea4\u6a21\u5f0f\uff08\u5373\u53d8\u91cfautocommit\u4e3aON\uff09\uff0c\u4e5f\u5c31\u662f\u4f1a\u81ea\u52a8\u8fdb\u884ccommit\u64cd\u4f5c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"show session variables like 'autocommit'; # \u67e5\u8be2autocommit\u7684\u503c\nset autocommit=0 # \u4e0d\u4f1a\u81ea\u52a8\u63d0\u4ea4\uff0c\u6b64\u65f6\u4e3aOFF\nset autocommit=1 # \u81ea\u52a8\u63d0\u4ea4\uff0c\u6b64\u65f6\u4e3aON\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e0d\u8fc7\u901a\u8fc7\u8fd9\u6837\u4fee\u6539\u53d8\u91cf\uff0c\u5e76\u4e0d\u4f1a\u6c38\u4e45\u751f\u6548\u3002\u82e5\u60f3\u6c38\u4e45\u751f\u6548\uff0c\u9700\u8981\u4fee\u6539mysql\u914d\u7f6e\u6587\u4ef6\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"BEGIN \u5f00\u59cb\u4e8b\u52a1"),(0,a.kt)("li",{parentName:"ul"},"COMMIT \u63d0\u4ea4\u4e8b\u52a1"),(0,a.kt)("li",{parentName:"ul"},"ROLLBACK \u56de\u6eda\u4e8b\u52a1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"BEGIN;\nINSERT INTO user VALUES(NULL, 'A', 'a'); # \u8fd8\u672aCOMMIT\uff0c\u6570\u636e\u5e93\u65e0\u8be5\u6570\u636e\nINSERT INTO user VALUE(NULL, 'B', 'b'); # \u8fd8\u672aCOMMIT\uff0c\u6570\u636e\u5e93\u65e0\u8be5\u6570\u636e\nCOMMIT; # \u6570\u636e\u5e93\u6709\u4e86A\u548cB\u7684\u6570\u636e\nINSERT INTO user VALUES(NULL, 'C', 'c');\nROLLBACK; # \u56de\u6eda\u4e86\uff0c\u76f8\u5f53\u4e8e\u4e0a\u4e00\u6761\u6ca1\u8f93\u5165\u8fc7\nCOMMIT; # \u56e0\u4e3a\u5df2\u7ecf\u56de\u6eda\uff0c\u5373\u4f7fCOMMIT\u4e5f\u65e0C\u7684\u6570\u636e\n")))}m.isMDXComponent=!0}}]);