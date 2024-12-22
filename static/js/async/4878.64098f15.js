"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["4878"],{78576:function(e,r,n){n.r(r),n.d(r,{default:function(){return h}});var s=n(85893),i=n(50065);function d(e){let r=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"跨域",children:["跨域",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#跨域",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"当一个请求url的协议、域名、端口三者之间任意一个与当前页面url不同即为跨域。\r\n:::tip\r\n出于浏览器的同源策略限制。同源策略（Sameoriginpolicy）是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，则浏览器的正常功能可能都会受到影响。可以说Web是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现。同源策略会阻止一个域的javascript脚本和另外一个域的内容进行交互。所谓同源（即指在同一个域）就是两个页面具有相同的协议（protocol），主机（host）和端口号（port）。\r\n:::"}),"\n",(0,s.jsxs)(r.h2,{id:"非同源限制",children:["非同源限制",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#非同源限制",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"无法读取非同源网页的 Cookie、LocalStorage 和 IndexedDB"}),"\n",(0,s.jsx)(r.li,{children:"无法接触非同源网页的 DOM"}),"\n",(0,s.jsx)(r.li,{children:"无法向非同源地址发送 AJAX 请求"}),"\n"]}),"\n",(0,s.jsxs)(r.h2,{id:"如何实现跨域请求",children:["如何实现跨域请求",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#如何实现跨域请求",children:"#"})]}),"\n",(0,s.jsxs)(r.h3,{id:"jsonp",children:["jsonp",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#jsonp",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"JSONP是JSON with Padding的略称。它是一个非官方的协议，它允许在服务器端集成Script tags返回至客户端，通过javascript callback的形式实现跨域访问（这仅仅是JSONP简单的实现形式）。\r\n利用了 script 不受同源策略的限制，实现了跨域请求"}),"\n",(0,s.jsx)(r.p,{children:"缺点：只能 get 方式，易受到 XSS攻击"}),"\n",(0,s.jsxs)(r.h3,{id:"corscross-origin-resource-sharing跨域资源共享",children:["CORS（Cross-Origin Resource Sharing）,跨域资源共享",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#corscross-origin-resource-sharing跨域资源共享",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"当使用XMLHttpRequest发送请求时，如果浏览器发现违反了同源策略就会自动加上一个请求头 origin；"}),"\n",(0,s.jsx)(r.p,{children:"后端在接受到请求后确定响应后会在 Response Headers 中加入一个属性 Access-Control-Allow-Origin；"}),"\n",(0,s.jsx)(r.p,{children:"浏览器判断响应中的 Access-Control-Allow-Origin 值是否和当前的地址相同，匹配成功后才继续响应处理，否则报错"}),"\n",(0,s.jsx)(r.p,{children:"缺点：忽略 cookie，浏览器版本有一定要求"}),"\n",(0,s.jsxs)(r.h3,{id:"代理跨域请求",children:["代理跨域请求",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#代理跨域请求",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"前端向发送请求，经过代理，请求需要的服务器资源"}),"\n",(0,s.jsx)(r.p,{children:"缺点：需要额外的代理服务器"}),"\n",(0,s.jsxs)(r.h3,{id:"html5-postmessage-方法",children:["Html5 postMessage 方法",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#html5-postmessage-方法",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"允许来自不同源的脚本采用异步方式进行有限的通信，可以实现跨文本、多窗口、跨域消息传递"}),"\n",(0,s.jsx)(r.p,{children:"缺点：浏览器版本要求，部分浏览器要配置放开跨域限制"}),"\n",(0,s.jsxs)(r.h3,{id:"修改-documentdomain-跨子域",children:["修改 document.domain 跨子域",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#修改-documentdomain-跨子域",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"相同主域名下的不同子域名资源，设置 document.domain 为 相同的一级域名"}),"\n",(0,s.jsx)(r.p,{children:"缺点：只能是同一一级域名；相同协议；相同端口"}),"\n",(0,s.jsxs)(r.h3,{id:"基于-html5-websocket-协议",children:["基于 Html5 websocket 协议",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#基于-html5-websocket-协议",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"websocket 是 Html5 一种新的协议，基于该协议可以做到浏览器与服务器全双工通信，允许跨域请求"}),"\n",(0,s.jsx)(r.p,{children:"缺点：浏览器一定版本要求，服务器需要支持 websocket 协议"}),"\n",(0,s.jsxs)(r.h3,{id:"documentxxx--iframe",children:["document.xxx + iframe",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#documentxxx--iframe",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"通过 iframe 是浏览器非同源标签，加载内容中转，传到当前页面的属性中"}),"\n",(0,s.jsx)(r.p,{children:"缺点：页面的属性值有大小限制"}),"\n",(0,s.jsxs)(r.h2,{id:"前端常用代理",children:["前端常用代理",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#前端常用代理",children:"#"})]}),"\n",(0,s.jsxs)(r.h3,{id:"webpack",children:["webpack",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack",children:"#"})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"module.exports = {\r\n    // ...\r\n    devServer: {\r\n        port: 9000,\r\n        proxy: {\r\n            '/api': {\r\n                target: 'https://api.github.com'\r\n            }\r\n        }\r\n        // ...\r\n    }\r\n}\n"})}),"\n",(0,s.jsxs)(r.h3,{id:"vite",children:["vite",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#vite",children:"#"})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"export default defineConfig({\r\n    server: {\r\n        proxy: {\r\n            // 字符串方式\r\n            '/foo': 'http://localhost:4567',\r\n            // 配置项方式\r\n            '/api': {\r\n                target: 'https://jsonplaceholder.typicode.com',\r\n                changeOrigin: true,\r\n                rewrite: (path) => path.replace(/^\\/api/, '')\r\n            },\r\n        }\r\n    }\r\n})\n"})})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,i.ah)(),e.components);return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}let h=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["notes%2Fbrowser%2Fkuayu.md"]={toc:[{text:"非同源限制",id:"非同源限制",depth:2},{text:"如何实现跨域请求",id:"如何实现跨域请求",depth:2},{text:"jsonp",id:"jsonp",depth:3},{text:"CORS（Cross-Origin Resource Sharing）,跨域资源共享",id:"corscross-origin-resource-sharing跨域资源共享",depth:3},{text:"代理跨域请求",id:"代理跨域请求",depth:3},{text:"Html5 postMessage 方法",id:"html5-postmessage-方法",depth:3},{text:"修改 document.domain 跨子域",id:"修改-documentdomain-跨子域",depth:3},{text:"基于 Html5 websocket 协议",id:"基于-html5-websocket-协议",depth:3},{text:"document.xxx + iframe",id:"documentxxx--iframe",depth:3},{text:"前端常用代理",id:"前端常用代理",depth:2},{text:"webpack",id:"webpack",depth:3},{text:"vite",id:"vite",depth:3}],title:"跨域",frontmatter:{}}}}]);