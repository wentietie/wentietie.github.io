"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["326"],{91732:function(h,n,e){e.r(n),e.d(n,{default:function(){return i}});var t=e(85893),s=e(50065);function r(h){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),h.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"路由",children:["路由",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#路由",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"URL到函数的映射。路由的映射函数通常是进行一些DOM的显示隐藏操作。当访问不同路径时，就会显示不同的页面组件。"}),"\n",(0,t.jsx)(n.p,{children:"优点：访问不同页面时，仅仅只是变换了路径而已，没有网络延迟，提升了用户体验。"}),"\n",(0,t.jsx)(n.p,{children:"缺点：使用浏览器的前进后退时，会重新发送请求，没有合理的利用缓存，不利于SEO。"}),"\n",(0,t.jsxs)(n.h2,{id:"前端路由两种主要实现方案",children:["前端路由两种主要实现方案",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#前端路由两种主要实现方案",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"hash：hash实现就是基于location.hash来实现的，早期前端路由都是用hash。location.hash的值就是URL中#后面的内容。"}),"\n",(0,t.jsx)(n.li,{children:"history API：更美观的实现URL的变化，由H5提供的history API。最主要的API：history.pushState()、history.replaceState()。这两个API可以在不刷新的情况下，操作浏览器的历史记录。区别：pushState()是会增加新的历史记录，而replaceState()是替换当前的历史记录。都接受三个参数（state，title，URL）。"}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"hash和history的区别",children:["hash和history的区别",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hash和history的区别",children:"#"})]}),"\n",(0,t.jsxs)(n.table,{children:["\n",(0,t.jsxs)(n.thead,{children:["\n",(0,t.jsxs)(n.tr,{children:["\n",(0,t.jsx)(n.th,{children:"hash"}),"\n",(0,t.jsx)(n.th,{children:"history"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.tbody,{children:["\n",(0,t.jsxs)(n.tr,{children:["\n",(0,t.jsx)(n.td,{children:"兼容更好"}),"\n",(0,t.jsx)(n.td,{children:"更正式美观"}),"\n"]}),"\n",(0,t.jsxs)(n.tr,{children:["\n",(0,t.jsx)(n.td,{children:"只修改#后面内容"}),"\n",(0,t.jsx)(n.td,{children:"可以设置同源下任意URL"}),"\n"]}),"\n",(0,t.jsxs)(n.tr,{children:["\n",(0,t.jsx)(n.td,{children:"新值不能与旧值相同，一样的不会触发动作将记录添加到栈中"}),"\n",(0,t.jsx)(n.td,{children:"新旧值可以相同，pushSate该添加的会添加到栈中"}),"\n"]}),"\n",(0,t.jsxs)(n.tr,{children:["\n",(0,t.jsx)(n.td,{children:"对服务器无需改动"}),"\n",(0,t.jsx)(n.td,{children:"刷新时，若服务器没有响应数据或资源，会404。需要对服务器做一些改造，对不同的路由进行相应的设置。"}),"\n"]}),"\n",(0,t.jsxs)(n.tr,{children:["\n",(0,t.jsx)(n.td,{children:"更改时不会发送请求"}),"\n",(0,t.jsx)(n.td,{children:"会向服务器发送请求，避免404服务器应该做处理。当匹配不到资源时，应返回同一个html页面"}),"\n"]}),"\n"]}),"\n"]})]})}function d(){let h=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),h.components);return n?(0,t.jsx)(n,{...h,children:(0,t.jsx)(r,{...h})}):r(h)}let i=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["notes%2Fbrowser%2Froute.md"]={toc:[{text:"前端路由两种主要实现方案",id:"前端路由两种主要实现方案",depth:2},{text:"hash和history的区别",id:"hash和history的区别",depth:2}],title:"路由",frontmatter:{}}}}]);