"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2686],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),i=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(t),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(k,l(l({ref:n},c),{},{components:t})):r.createElement(k,l({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4732:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=t(7462),a=(t(7294),t(3905));const o={},l="\u7b2c\u4e09\u65b9\u5e93",s={unversionedId:"node/library",id:"node/library",title:"\u7b2c\u4e09\u65b9\u5e93",description:"bluebird",source:"@site/docs/node/library.md",sourceDirName:"node",slug:"/node/library",permalink:"/blog/docs/node/library",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/node/library.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e8b\u4ef6\u5faa\u73af",permalink:"/blog/docs/node/eventloop"},next:{title:"\u6a21\u5757\u5316",permalink:"/blog/docs/node/module"}},p={},i=[{value:"bluebird",id:"bluebird",level:2},{value:"bluebird + fs",id:"bluebird--fs",level:3},{value:"bluebird + mysql",id:"bluebird--mysql",level:3},{value:"PM2",id:"pm2",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:3},{value:"\u547d\u4ee4\u884c\u5de5\u5177",id:"\u547d\u4ee4\u884c\u5de5\u5177",level:2},{value:"chalk",id:"chalk",level:3},{value:"yargs",id:"yargs",level:3},{value:"commander",id:"commander",level:3},{value:"inquirer",id:"inquirer",level:3},{value:"readline",id:"readline",level:3},{value:"puppeteer",id:"puppeteer",level:2},{value:"Koa",id:"koa",level:2},{value:"\u57fa\u7840",id:"\u57fa\u7840",level:3},{value:"\u6838\u5fc3\u5b9e\u73b0",id:"\u6838\u5fc3\u5b9e\u73b0",level:4},{value:"koa-compose",id:"koa-compose",level:4},{value:"koa-router",id:"koa-router",level:3},{value:"\u7b80\u6613\u5b9e\u73b0",id:"\u7b80\u6613\u5b9e\u73b0",level:4},{value:"koa-static",id:"koa-static",level:3},{value:"koa-body",id:"koa-body",level:3},{value:"koa-logger",id:"koa-logger",level:3},{value:"koa-views",id:"koa-views",level:3},{value:"NestJS",id:"nestjs",level:2},{value:"Controller",id:"controller",level:3},{value:"Service",id:"service",level:3}],c={toc:i},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7b2c\u4e09\u65b9\u5e93"},"\u7b2c\u4e09\u65b9\u5e93"),(0,a.kt)("h2",{id:"bluebird"},"bluebird"),(0,a.kt)("p",null,"\u53ef\u4ee5\u5c06\u56de\u8c03\u51fd\u6570\u5b9e\u73b0\u7684\u5f02\u6b65\u6539\u5199\u6210Promise\u7684\u65b9\u5f0f\u6765\u5199\u7684\u7b2c\u4e09\u65b9\u5e93\u3002"),(0,a.kt)("h3",{id:"bluebird--fs"},"bluebird + fs"),(0,a.kt)("p",null,"\u56de\u8c03"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const fs = require('fs')\nfs.readFile('index.html', (err, data) => {\n    response.end(data)\n})\n")),(0,a.kt)("p",null,"Promise"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const bluebird = require('bluebird')\nconst fs = bluebird.promisifyAll(require('fs'))\n\nfs.readFileAsync('index.html')\n.then(data => {\n    response.end(data)\n})\n")),(0,a.kt)("h3",{id:"bluebird--mysql"},"bluebird + mysql"),(0,a.kt)("p",null,"\u56de\u8c03"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const mysql = require('mysql')\n// mysql\u914d\u7f6e\u6587\u4ef6\nlet config = require('./config')\nconn.connect()\n\n// \u4f7f\u7528\nconn.query(`sql code here...`, (err, data) => {\n\n})\n")),(0,a.kt)("p",null,"Promise"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const bluebird = require('bluebird')\nconst mysql = require('mysql')\n// mysql\u914d\u7f6e\u6587\u4ef6\nlet config = require('./config')\nconst conn = bluebird.promisifyAll(mysql.createConnection(config))\nconn.connect()\n\n// \u4f7f\u7528\nlet data = await conn.queryAsync(`sql code here...`)\n")),(0,a.kt)("h2",{id:"pm2"},"PM2"),(0,a.kt)("p",null,"\u9664\u4e86\u5e38\u89c1\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"pm2 start index.js"),"\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// \u6bd4\u5982\u53d6\u540d\u4e3a ecosystem.config.js\nmodule.exports = {\n  apps: [{\n    script: \'./server/app.js\',\n    watch: \'.\',\n    env_development: {\n      "REACT_APP_NODE_ENV": "development"\n    },\n    env_production: {\n      "REACT_APP_NODE_ENV": "production"\n    }\n  }]\n}\n')),(0,a.kt)("p",null,"\u4e4b\u540e\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6765\u542f\u52a8\u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pm2 start ecosystem.config.js --env development\n// or\npm2 start ecosystem.config.js --env production\n")),(0,a.kt)("h3",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"pm2 start app.js\npm2 list\npm2 delete [app-id]\npm2 logs\npm2 logs [app-name]\npm2 monit\n// ...\n")),(0,a.kt)("h2",{id:"\u547d\u4ee4\u884c\u5de5\u5177"},"\u547d\u4ee4\u884c\u5de5\u5177"),(0,a.kt)("p",null,"\u4ecb\u7ecd\u5e38\u7528\u7684\u547d\u4ee4\u884c\u5de5\u5177"),(0,a.kt)("h3",{id:"chalk"},"chalk"),(0,a.kt)("p",null,"\u7ed9\u65e5\u5fd7\u8f93\u51fa\u52a0\u4e0a\u989c\u8272\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import chalk from 'chalk'\nconsole.log(chalk.blue('akara'))  // \u84dd\u8272\u5b57\u4f53\nconsole.log(chalk.blue.bgRed('akara')) // \u84dd\u8272\u5b57\u4f53\uff0c\u7ea2\u8272\u80cc\u666f\n")),(0,a.kt)("h3",{id:"yargs"},"yargs"),(0,a.kt)("p",null,"\u63d0\u4f9b\u4e86\u5bf9\u547d\u4ee4\u884c\u53c2\u6570\u7684\u89e3\u6790\u529f\u80fd\uff0c\u5e76\u4e14\u9ed8\u8ba4\u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"--help"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"--version"),"\u9009\u9879\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'#!/usr/bin/env node\nconst yargs = require("yargs/yargs");\nconst { hideBin } = require("yargs/helpers");\nconst http = require("http");\n\nyargs(hideBin(process.argv)) // hideBin(process.argv) \u76f8\u5f53\u4e8e process.argv.slice(2)\n    .command( \n        "serve [port]", // [port]\u4e3a\u53ef\u9009\u53c2\u6570\n        "\u542f\u52a8\u670d\u52a1\u5668",\n        { // \u8bbe\u7f6e\u547d\u4ee4\u53c2\u6570\u7684\u522b\u540d\u3001\u9ed8\u8ba4\u503c\u7b49\u4fe1\u606f\n            port: {\n                alias: "p",\n                default: 3000,\n            },\n        },\n        (argv) => {\n            http.createServer((req, res) => {}).listen(argv.port, () => {\n                console.log(`\u670d\u52a1\u5668\u8fd0\u884c\u5728${argv.port}\u7aef\u53e3`);\n            });\n        }\n    )\n    .command("curl <url>", "\u53d1\u9001\u8bf7\u6c42", {}, (argv) => { // <url>\u4e3a\u5fc5\u987b\u53c2\u6570\n        if (argv.verbose) console.log(\'\u5df2\u7ecf\u5f00\u542fverbose\')\n        console.log(argv.url);\n    })\n    .option(\'verbose\', {\n      alias: \'v\',\n      type: \'boolean\',\n      description: \'Run with verbose logging\'\n    })\n    .argv;\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cli --help\ncli --version\ncli serve 8000 # cli serve -p 8000 | cli serve --port=8000\ncli curl 'google.com' -v\n")),(0,a.kt)("h3",{id:"commander"},"commander"),(0,a.kt)("p",null,"\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"yargs"),"\u4f5c\u7528\u5dee\u4e0d\u591a\uff0c\u53ef\u4ee5\u9009\u62e9\u5176\u4e2d\u4e00\u4e2a\u6765\u5f00\u53d1\u81ea\u5df1\u7684\u547d\u4ee4\u884c\u5de5\u5177\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"#!/usr/bin/env node\nconst { program } = require('commander')\n\nprogram\n    .version('1.0.0')\n    .description('cli tool')\n    .option('--verbose', 'use verbose') // \u5e03\u5c14\u503c\n    .option('-u, --url <url>', 'url\u53c2\u6570') // \u5fc5\u987b\u53c2\u6570\n    .option('-p, --port [port]', 'port\u53c2\u6570', 3000) // \u53ef\u9009\u53c2\u6570\uff0c\u53ef\u8bbe\u7f6e\u9ed8\u8ba4\u503c\n    .parse(process.argv)\n\nconsole.log(program.opts());\n")),(0,a.kt)("h3",{id:"inquirer"},"inquirer"),(0,a.kt)("p",null,"\u975e\u5e38\u6709\u7528\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5e38\u89c1\u4e8e\u5404\u79cd\u811a\u624b\u67b6\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"#!/usr/bin/env node\nconst inquirer = require('inquirer')\nconst questions = [\n    {\n        type: 'confirm',\n        name: 'isPeople',\n        message: '\u4f60\u662f\u4eba\u5417?',\n        default: false\n    },\n    {\n        type: 'input',\n        name: 'name',\n        message: '\u8bf7\u8f93\u5165\u4f60\u7684\u540d\u5b57',\n    },\n    {\n        type: 'input',\n        name: 'phone',\n        message: '\u8bf7\u8f93\u5165\u4f60\u7684\u7535\u8bdd\u53f7\u7801',\n        validate(value) {\n            const pass = value.match(/^1[34578]\\d{9}$/g)\n            if (pass) return true\n            return '\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7535\u8bdd\u53f7\u7801'\n        }\n    },\n    {\n        type: 'list',\n        name: 'sex',\n        message: '\u8bf7\u9009\u62e9\u4f60\u7684\u6027\u522b',\n        choices: ['Male', 'Female', 'None'],\n        filter(val) {\n            return val.toLowerCase();\n        },\n\n    }\n]\ninquirer\n    .prompt(questions)\n    .then(answers => {\n        console.log(JSON.stringify(answers, null, ' '));\n    })\n")),(0,a.kt)("h3",{id:"readline"},"readline"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u5b98\u7f51\u4ee3\u7801\nconst readline = require('readline')\n\nconst rl = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout\n})\n\nrl.question('\u4f60\u597d', (answer) => {\n    console.log('666');\n    rl.close()\n})\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u5b98\u7f51\u4ee3\u7801\nconst fs = require('fs');\nconst readline = require('readline');\n\nasync function processLineByLine() {\n  const fileStream = fs.createReadStream('log.txt');\n\n  const rl = readline.createInterface({\n    input: fileStream,\n    crlfDelay: Infinity\n  });\n  // \u6ce8\u610f\uff1a\u6211\u4eec\u4f7f\u7528 crlfDelay \u9009\u9879\u5c06 input.txt \u4e2d\u7684\u6240\u6709 CR LF \u5b9e\u4f8b\uff08'\\r\\n'\uff09\u8bc6\u522b\u4e3a\u5355\u4e2a\u6362\u884c\u7b26\u3002\n\n  for await (const line of rl) {\n    // input.txt \u4e2d\u7684\u6bcf\u4e00\u884c\u5728\u8fd9\u91cc\u5c06\u4f1a\u88ab\u8fde\u7eed\u5730\u7528\u4f5c `line`\u3002\n    console.log(`Line from file: ${line}`);\n  }\n}\n\nprocessLineByLine();\n")),(0,a.kt)("h2",{id:"puppeteer"},"puppeteer"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"puppeteer.connect"),"\u6765\u590d\u7528\u5df2\u542f\u52a8\u7684\u6d4f\u89c8\u5668\u8fdb\u7a0b\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u542f\u52a8Chrome\u7684\u65f6\u5019\u52a0\u4e0a ",(0,a.kt)("inlineCode",{parentName:"li"},"--remote-debugging-port=9222 "),"\uff0c\u91cd\u542f\u6d4f\u89c8\u5668"),(0,a.kt)("li",{parentName:"ol"},"\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:9222/json/version"),"\u62ff\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"webSocketDebuggerUrl"),"\u5b57\u6bb5"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const url = 'ws://127.0.0.1:9222/devtools/browser/81daad69-fb53-49ea-9f97-3683b73afea0'\nconst browser = await puppeteer.connect({\n    browserWSEndpoint: url,\n});\n")))),(0,a.kt)("p",null,"\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@jaredpotter1/connecting-puppeteer-to-existing-chrome-window-8a10828149e0"},"https://medium.com/@jaredpotter1/connecting-puppeteer-to-existing-chrome-window-8a10828149e0")),(0,a.kt)("h2",{id:"koa"},"Koa"),(0,a.kt)("h3",{id:"\u57fa\u7840"},"\u57fa\u7840"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const Koa = require('koa');\nconst app = new Koa();\n\napp.use(async (ctx, next) => {\n  const start = Date.now();\n  await next();\n  const ms = Date.now() - start;\n  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);\n});\n\n\n// response\napp.use(ctx => {\n  ctx.status = 200\n  ctx.set('Content-type', 'text/plain; charset=utf-8')\n  ctx.body = 'Hello Koa'\n});\n\napp.listen(3000);\n\n// \u4e00\u4e9b\u5176\u4ed6\u7684\u65b9\u6cd5\nctx.redirect('/home')\n// \u76f8\u5f53\u4e8e\n// res.status = 302\n// res.setHeader('Location', '/home')\n")),(0,a.kt)("h4",{id:"\u6838\u5fc3\u5b9e\u73b0"},"\u6838\u5fc3\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const Emitter = require('events')\n// \u4e09\u4e2a\u5bf9\u8c61\uff0c\u63d0\u524d\u5b9a\u4e49\u597d\u539f\u578b\u7684\u65b9\u6cd5\nconst context = require('./context')\nconst request = require('./request')\nconst response = require('./response')\nclass Koa extends Emitter {\n    constructor() {\n        super()\n        this.middleware = []\n        this.context = Object.create(context)\n        this.request = Object.create(request)\n        this.response = Object.create(response)\n    }\n\n    callback() {\n        const fn = compose(this.middleware)\n        return (req, res) => {\n            const ctx = this.createContext(req, res)\n            return this.handlerRequest(ctx, fn)\n        }\n    }\n\n    use(fn) {\n        if (typeof fn !== 'function') throw new TypeError('middleware must be a function!')\n        this.middleware.push(fn)\n        return this\n    }\n\n    listen(...args) {\n        const server = http.createServer(this.callback())\n        return server.listen(...args)\n    }\n\n    createContext(req, res) {\n        // \u5176\u5b9e\u5c31\u662f\u6839\u636e\u5df2\u6709\u7684req\u548cres\u521b\u5efa\u4e0a\u4e0b\u6587context\n        const context = Object.create(this.context);\n        const request = Object.create(this.request);\n        const response = Object.create(this.response);\n        context.request = request\n        context.response = response\n        context.app = request.app = response.app = this;\n        // \u91cd\u70b9\uff0c\u6302\u8f7dreq\u548cres\n        context.req = request.req = response.req = req;\n        context.res = request.res = response.res = res;\n        // \u4e92\u76f8\u5f15\u7528\n        request.ctx = response.ctx = context;\n        request.response = response;\n        response.request = request;\n        return context\n    }\n\n    handlerRequest(ctx, fn) {\n        const res = ctx.res\n        res.statusCode = 404\n        fn(ctx).catch(reason => {\n            console.log(reason)\n        })\n    }\n}\n")),(0,a.kt)("p",null,"Koa\u7684\u5b9e\u4f8bapp\u6709\u4e09\u4e2a\u516c\u5171\u7684API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"use"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"app.use((ctx, next) => {\n\n})\n")),(0,a.kt)("p",{parentName:"li"},"use\u65b9\u6cd5\u7528\u4e8e\u5c06\u53c2\u6570\u4e2d\u95f4\u4ef6\u653e\u8fdbapp\u7684middleware\u6570\u7ec4\u91cc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"listen"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"app.listen(3000)\n")),(0,a.kt)("p",{parentName:"li"},"\u7b49\u4ef7\u4e8e"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"}," const server = http.createServer(this.callback())\n server.listen(3000)\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"callback"),(0,a.kt)("p",{parentName:"li"},"\u8be5\u51fd\u6570\u5185\u90e8\u5b9e\u73b0\u4e09\u4e2a\u529f\u80fd"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528koa-compose\u51fd\u6570\u5c06middleware\u4e2d\u95f4\u4ef6\u6570\u7ec4\u8f6c\u5316\u4e3a\u4e2d\u95f4\u4ef6fn")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8c03\u7528app.createContext\u51fd\u6570\u3002\u521b\u5efacontext\uff0crequest\uff0cresponse\u5bf9\u8c61\uff1b\u5c06request\u548cresponse\u6302\u8f7d\u5728context\u4e0a\uff1b\u628areq\u548cres\u6302\u8f7d\u5728\u4e09\u4e2a\u5bf9\u8c61\u4e0a\u3002"),(0,a.kt)("p",{parentName:"li"},"\u4f8b\u5982\uff1arequest\u7684\u539f\u578b\u5bf9\u8c61\u4e0a\u90e8\u5206\u4ee3\u7801\u5982\u4e0b"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"get header() {\n    return this.req.headers;\n},\nset header(val) {\n    this.req.headers = val;\n},\n")),(0,a.kt)("p",{parentName:"li"},"\u6211\u4eec\u73b0\u5728\u5c31\u53ef\u4ee5\u6839\u636e ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.request.header"),"\u83b7\u53d6req\u7684headers\u4e86")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6267\u884chandleRequest\u51fd\u6570\uff0c\u672c\u8d28\u662f\u628a\u7ec4\u88c5\u597d\u7684context\u4f20\u5165\u4e2d\u95f4\u4ef6fn\u6267\u884c"))))),(0,a.kt)("p",null,"Koa\u6e90\u7801\u4e2d\u4f7f\u7528\u5230\u4e86Koa-compose\uff0c \u7528\u4e8e\u5c06\u591a\u4e2a\u4e2d\u95f4\u4ef6\u51fd\u6570\u7ec4\u5408\u4e3a\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u51fd\u6570"),(0,a.kt)("h4",{id:"koa-compose"},"koa-compose"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const compose = (middleware) => {\n    if (!Array.isArray(middleware)) throw new TypeError(\"Middleware stack must be an array!\")\n    for (const fn of middleware) {\n        if (typeof fn !== 'function') throw new TypeError(\"Middleware must be composed of functions!\")\n    }\n    let length = middleware.length\n    return function (ctx, next) {\n        let index = -1\n        return dispatch(0)\n        function dispatch(i) {\n            // \u4e00\u4e2a\u4e2d\u95f4\u4ef6\u5185\u90e8\u591a\u6b21\u8c03\u7528next\u65f6\uff0cindex\u5927\u4e8e\u7b49\u4e8ei\n            if ( index >= i) {\n                return Promise.reject(new Error('next() called multiple times'))\n            }\n            let fn\n            index = i\n            if (i < length) {\n                fn = middleware[i]\n            }\n            else if (i === length) {\n                // \u91cd\u70b9\uff0c \u5916\u90e8compose\u7684next\u4f20\u8fdb\u5185\u90e8compose\n                fn = next\n            }\n            // \u6700\u540e\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u8c03\u7528next\u65f6\uff0c\u4ec0\u4e48\u4e5f\u4e0d\u505a\n            if (!fn) return\n            // \u5b98\u65b9\u6e90\u7801\u4f7f\u7528Promise\u662f\u4e3a\u4e86\u4f7f\u7528async\u4e2d\u95f4\u4ef6\uff0c\u4e0d\u8fc7\u8fd9\u91cc\u6ca1\u6709\u600e\u4e48\u5b9e\u73b0\u8fd9\u4e2a\u529f\u80fd\uff0c\u5c31\u4e00\u4e2a\u6837\u5b50\n            return Promise.resolve(fn(ctx, dispatch.bind(null, (i + 1))))\n        }\n    }\n}\n")),(0,a.kt)("h3",{id:"koa-router"},"koa-router"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const Router = require('koa-router')\nconst router = new Router()\nrouter\n  .get('/', (ctx, next) => {\n    ctx.body = 'Hello World!';\n  })\n  .post('/users', (ctx, next) => {\n    // ...\n  })\n  .put('/users/:id', (ctx, next) => {\n    // ...\n  })\n  .del('/users/:id', (ctx, next) => {\n    // ...\n  })\n  .all('/users/:id', (ctx, next) => {\n    // ...\n  });\napp.use(router.routes())\napp.use(router.allowedMethods()) // \u6b64\u5904\u4f8b\u5b50\u6ca1\u6709\u5b9e\u73b0\u8be5\u65b9\u6cd5\n")),(0,a.kt)("h4",{id:"\u7b80\u6613\u5b9e\u73b0"},"\u7b80\u6613\u5b9e\u73b0"),(0,a.kt)("p",null,"\u7b80\u6613\u5b9e\u73b0\uff0c\u53ea\u5b9e\u73b0\u4e00\u4e2aget\u65b9\u6cd5\uff0c\u5b9e\u9645\u4e0a\u8981\u66f4\u590d\u6742\u7684\u591a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class Router {\n    constructor() {\n        this.stack = []\n    }\n\n    get(url, fn) {\n        function middleware(ctx, next) {\n            if (ctx.req.method.toLowerCase() === 'get' && ctx.req.url === url) {\n                console.log('\u8def\u7531\u5339\u914d\u6210\u529f');\n                fn(ctx, next)\n            }\n            else {\n                console.log('\u8def\u7531\u5339\u914d\u5931\u8d25');\n                next()\n            }\n        }\n        this.stack.push(middleware)\n        return this\n    }\n\n    routes() {\n        return (ctx, next) => {\n            let fn = compose(this.stack)\n            // \u5fc5\u987b\u52a0\u4e0anext\u53c2\u6570\n            // koa\u672c\u8eab\u6709\u4e00\u4e2acompose\uff0c \u8fd9\u91cc\u4e5f\u6709\u4e00\u4e2a\uff0c\u6240\u4ee5\u8981\u628a\u5916\u90e8\u7684next\u4f20\u7ed9\u5185\u90e8\n            fn(ctx, next)\n        }\n    }\n}\n")),(0,a.kt)("h3",{id:"koa-static"},"koa-static"),(0,a.kt)("p",null,"\u7528\u4e8e\u5904\u7406\u9759\u6001\u8d44\u6e90\u7684koa\u4e2d\u95f4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const static = require('koa-static')\napp.use(static('public'))\n")),(0,a.kt)("h3",{id:"koa-body"},"koa-body"),(0,a.kt)("p",null,"\u5904\u7406\u8bf7\u6c42\u7684\u4e2d\u95f4\u4ef6\uff0c\u53ef\u4ee5\u8f7b\u677e\u83b7\u5f97\u8bf7\u6c42\u7684\u5185\u5bb9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const body = require('koa-body')\napp.use(body({multipart: true}))\napp.use((ctx) => {\n    console.log(ctx.request.body)\n})\n")),(0,a.kt)("h3",{id:"koa-logger"},"koa-logger"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const logger = require('koa-logger')\napp.use(logger())\n")),(0,a.kt)("h3",{id:"koa-views"},"koa-views"),(0,a.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u642d\u914d\u6a21\u677f\u5f15\u64ce\u8fdb\u884c\u670d\u52a1\u7aef\u6e32\u67d3\uff0c\u4e0d\u8fc7\u4f3c\u4e4e\u73b0\u5728\u4e0d\u600e\u4e48\u7528\u4e86\u3002"),(0,a.kt)("p",null,"\u53e6\u5916\u4f7f\u7528\u7684\u573a\u5408\u8981\u989d\u5916\u53bb\u5b89\u88c5\u5bf9\u5e94\u7684\u6a21\u677f\u5f15\u64ce\uff0c\u6bd4\u5982\u60f3\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ejs"),"\u8bb0\u5f97\u5148 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i ejs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const views = require('koa-views')\nconst render = views('./views', { extension: 'ejs'})\n\napp.use(render)\napp.use(async ctx => {\n    await ctx.render('template', {\n        content: 'hello'\n    }) \n})\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ejs"},"\x3c!-- template.ejs --\x3e\n<!DOCTYPE html>\n<html>\n<head></head>\n<body>\n    <div><%= content %></div>  \n</body>\n</html>\n")),(0,a.kt)("h2",{id:"nestjs"},"NestJS"),(0,a.kt)("p",null,"NextJS\u4f7f\u7528\u88c5\u9970\u5668\u6a21\u5f0f\uff08\u98ce\u683c\u7c7b\u4f3c\u524d\u7aef\u7684Angular\uff09\u3001\u4f9d\u8d56\u6ce8\u5165\u6a21\u5f0f\u3001\u5bf9TypeScript\u652f\u6301\u53cb\u597d\uff0c\u662f\u4e00\u95e8\u5e7f\u6cdb\u88ab\u5e94\u7528\u7684Node\u540e\u7aefWeb\u6846\u67b6\u3002"),(0,a.kt)("p",null,"\u5728NextJS\u4e2d\u901a\u8fc7",(0,a.kt)("em",{parentName:"p"},"Module"),"\u8fdb\u884c\u529f\u80fd\u6a21\u5757\u7684\u5212\u5206\uff0c\u6bcf\u4e2a",(0,a.kt)("em",{parentName:"p"},"Module"),"\u901a\u5e38\u5305\u62ecController\u548cService\uff0cController\u7528\u4e8e\u63d0\u4f9b\u540e\u7aef\u63a5\u53e3\uff0cService\u5219\u7528\u4e8e\u63d0\u4f9b\u5404\u79cd\u670d\u52a1\uff0c\u4e00\u4e2a",(0,a.kt)("em",{parentName:"p"},"Module"),"\u5185\u5b9a\u4e49\u7684Service\u53ef\u4ee5\u901a\u8fc7\u653e\u5728",(0,a.kt)("em",{parentName:"p"},"exports"),"\u4e2d\u5411\u5916\u66b4\u9732\uff0c\u518d\u53e6\u4e00\u4e2a\u6a21\u5757\u4e2d\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("em",{parentName:"p"},"imports"),"\u6765\u5f15\u5165\u8be5\u6a21\u5757\uff0c\u4ece\u800c\u4f7f\u7528\u8be5\u6a21\u5757\u66b4\u9732\u51fa\u7684Service\u670d\u52a1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"npm i -g @nestjs/cli\nnest new my-project\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// main.ts\nimport { NestFactory } from '@nestjs/core';\nimport { AppModule } from './app.module';\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  await app.listen(3000);\n}\nbootstrap();\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.module.ts\nimport { Module } from '@nestjs/common';\nimport { AppController, MyController } from './app.controller';\nimport { AppService } from './app.service';\n\n@Module({\n  imports: [],\n  controllers: [AppController, MyController],\n  providers: [AppService],\n    exports: [],\n})\nexport class AppModule {}\n")),(0,a.kt)("h3",{id:"controller"},"Controller"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u7f16\u5199 ",(0,a.kt)("inlineCode",{parentName:"p"},"controller"),"\u6765\u5b9e\u73b0\u540e\u7aef\u8def\u7531\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.controller.ts\nimport { Controller, Get, Post, Req, Res, Body, Param, Query, Headers, Header, HttpCode } from '@nestjs/common';\nimport { Request } from 'express'\n\nexport class DTO { // \u6570\u636e\u4f20\u8f93\u5bf9\u8c61\n  value: string\n}\n\n@Controller()\nexport class AppController {\n  @Get() // \u5339\u914d/\u8def\u5f84\n  getText(): string {\n    return 'hello'\n  }\n\n  @Get('admin') // \u5339\u914d/admin\u8def\u5f84\n  getAdmin(): string {\n    return 'admin'\n  }\n}\n\n@Controller('/api')\nexport class MyController {\n  @Get('fetchAllInfo') // \u5339\u914d/api/fetchAllInfo\n  fetchInfo(@Req() req: Request, @Query() query): string[] { // \u62ff\u5230Req\u3001Query\n    console.log(req.url)\n    console.log(query)\n    return ['a', 'b', 'c']\n  }\n\n  @Get('/fetchOneInfo/:id')\n  fetchOneInfo(@Param() params, @Headers() headers): string { // \u62ff\u5230Params\u3001\u54cd\u5e94\u5934Headers\n    console.log(params.id)\n    console.log(headers)\n    return 'a'\n  }\n\n  @Post('/updateOneInfo/:id')\n  updateOneInfo(@Param('id') id: number, @Body() body: DTO) { // \u901a\u8fc7@Param('id')\u53ef\u4ee5\u76f4\u63a5\u62ff\u5230\u5177\u4f53\u7684Param\u3002\u62ff\u5230Body\n    console.log(id)\n    console.log(body)\n    return { // \u81ea\u52a8\u5e8f\u5217\u5316\u4e3aJSON\u5e76\u8bbe\u7f6e\u5bf9\u5e94Content-Type\n      code: 200,\n      msg: 'success'\n    }\n  }\n\n  @Get('html')\n  @Header('Cache-Control', 'none') // \u8bbe\u7f6e\u54cd\u5e94\u5934\u90e8\n  getHtml(): string { // \u81ea\u52a8\u8bbe\u7f6eContent-Type\n    return `\n      <html>\n        <body>\n          <h1>hello nest</hi>\n        </body>\n      </html>\n    `\n  }\n\n  @HttpCode(404) // \u8bbe\u7f6e\u54cd\u5e94\u72b6\u6001\u7801\n  @Get('404')\n  four0four() {\n    return '404 not Found'\n  }\n\n  @Get('async')\n  async testAsync(): Promise<string[]> {\n    return ['aa', 'bb', 'cc']\n  } \n\n  @Get('res')\n  async testRes(@Res() res) {\n    res.send('hello nest')\n  }\n}\n")),(0,a.kt)("h3",{id:"service"},"Service"),(0,a.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Controller"),"\u6765\u8fdb\u884c\u8def\u7531\u63a7\u5236\uff0c\u5177\u4f53\u7684\u6570\u636e\u64cd\u4f5c\u6216\u903b\u8f91\u64cd\u4f5c\u7531 ",(0,a.kt)("inlineCode",{parentName:"p"},"Service"),"\u8d1f\u8d23\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"Service"),"\u662f\u4e00\u79cd ",(0,a.kt)("inlineCode",{parentName:"p"},"Provider"),"\uff09"),(0,a.kt)("p",null,"\u9996\u5148\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"Service"),"\u7c7b\uff0c\u5e76\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"app.module.ts"),"\u4e2d\u58f0\u660e\u8be5 ",(0,a.kt)("inlineCode",{parentName:"p"},"Service"),"\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Provider"),"\uff0c\u7136\u540e ",(0,a.kt)("inlineCode",{parentName:"p"},"Controller"),"\u7684\u6784\u9020\u51fd\u6570\u6dfb\u52a0\u4e00\u4e2a\u5165\u53c2\uff08\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Service"),"\u7c7b\u7684\u5b9e\u4f8b\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// app.service.ts\nimport { Injectable } from '@nestjs/common';\n\n@Injectable()\nexport class AppService {\n  private name: string = 'akara'\n\n  getName(): string {\n    return this.name\n  }\n\n  setName(name: string): void {\n    this.name = name\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// app.controller.ts\nimport { Controller, Get} from '@nestjs/common';\nimport { AppService } from './app.service';\n\n@Controller()\nexport class AppController {\n  constructor(private readonly appService: AppService) {}\n\n  @Get('/get/service')\n  async testGetService() {\n    return this.appService.getName()\n  }\n\n  @Get('/set/service')\n  async testSetService() {\n    return this.appService.setName('bkb')\n  }\n}\n")))}d.isMDXComponent=!0}}]);