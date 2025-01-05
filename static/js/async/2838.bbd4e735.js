"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["2838"],{47402:function(e,i,n){n.r(i),n.d(i,{default:()=>d});var s=n("85893"),h=n("50065");let l=n.p+"static/image/img.08a6c949.png";function c(e){let i=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",h3:"h3",ul:"ul",li:"li",div:"div",img:"img",ol:"ol"},(0,h.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.h1,{id:"vue-项目性能优化",children:[(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#vue-项目性能优化",children:"#"}),"vue 项目性能优化"]}),"\n",(0,s.jsxs)(i.h2,{id:"性能优化标准",children:[(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#性能优化标准",children:"#"}),"性能优化标准"]}),"\n",(0,s.jsxs)(i.p,{children:["既然说性能优化，那他总得有一个公认的标准，这就是我们很多次听到的",(0,s.jsx)(i.code,{children:"Lighthouse"})]}),"\n",(0,s.jsxs)(i.h3,{id:"lighthouse",children:[(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#lighthouse",children:"#"}),"Lighthouse"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"lighthouse"}),"是 Google Chrome 推出的一款开源自动化工具，它可以搜集多个现代网页性能指标，分析 ",(0,s.jsx)(i.code,{children:"Web"})," 应用的性能并生成报告，为开发人员进行性能优化的提供了参考方向。说起",(0,s.jsx)(i.code,{children:"Lighthouse"}),"在现代的谷歌浏览器中业已经集成"]}),"\n",(0,s.jsx)(i.p,{children:"他可以通过几个指标分析出我们的页面性能:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"首次内容绘制（First Contentful Paint）。即浏览器首次将任意内容（如文字、图像、canvas 等）绘制到屏幕上的时间点。"}),"\n",(0,s.jsx)(i.li,{children:"可交互时间（Time to Interactive）。指的是所有的页面内容都已经成功加载，且能够快速地对用户的操作做出反应的时间点。"}),"\n",(0,s.jsx)(i.li,{children:"速度指标（Speed Index）。衡量了首屏可见内容绘制在屏幕上的速度。在首次加载页面的过程中尽量展现更多的内容，往往能给用户带来更好的体验，所以速度指标的值约小越好。"}),"\n",(0,s.jsx)(i.li,{children:"总阻塞时间（Total Blocking Time）。指First Contentful Paint 首次内容绘制 (FCP)与Time to Interactive 可交互时间 (TTI)之间的总时间"}),"\n",(0,s.jsx)(i.li,{children:"最大内容绘制（Largest Contentful Paint）。度量标准报告视口内可见的最大图像或文本块的呈现时间"}),"\n",(0,s.jsx)(i.li,{children:"累积布局偏移（# Cumulative Layout Shift）。衡量的是页面整个生命周期中每次元素发生的非预期布局偏移得分的总和。每次可视元素在两次渲染帧中的起始位置不同时，就说是发生了LS（Layout Shift）。"}),"\n"]}),"\n",(0,s.jsxs)(i.div,{className:"rspress-directive warning",children:[(0,s.jsx)(i.div,{className:"rspress-directive-title",children:"提示"}),(0,s.jsx)(i.div,{className:"rspress-directive-content",children:(0,s.jsx)(i.p,{children:"\n在一般情况下，由于性能监控平台的和本地平台的差异，本地可能要达到70分，线上才有可能达到及格的状态,如果有性能优化的需求时，大家酌情处理即可"})})]}),"\n",(0,s.jsxs)(i.h2,{id:"通用常规优化手段",children:[(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#通用常规优化手段",children:"#"}),"通用常规优化手段"]}),"\n",(0,s.jsx)(i.p,{children:"lighthouse的的牛x之处就是它能找出你页面中的一些常规的性能瓶颈，并提出优化建议，比如："}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{alt:"img",src:l}),"\r\n于是针对这些优化建议，我们需要做一些常规的优化："]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"修改被延迟图片的加载时机."}),"\n",(0,s.jsx)(i.li,{children:"设置明确的图片大小."}),"\n",(0,s.jsx)(i.li,{children:"精简DOM结构."}),"\n",(0,s.jsx)(i.li,{children:"提供较小的 JS 载荷减少为解析、编译和执行 JS 而花费的时间。"}),"\n"]}),"\n",(0,s.jsxs)(i.h2,{id:"通用性能优化分析",children:[(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#通用性能优化分析",children:"#"}),"通用性能优化分析"]}),"\n",(0,s.jsx)(i.p,{children:"我们知道lighthouse 中有六个性能指标，而在这六个指标中，LCP、 FCP、speed index、 这三个指数尤为重要，因为在一般情况下 这个三个指标会影响 TTI、TBT、CLS 的分数"}),"\n",(0,s.jsxs)(i.h3,{id:"fcpfirst-contentful-paint",children:[(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#fcpfirst-contentful-paint",children:"#"}),"FCP（First Contentful Paint）"]}),"\n",(0,s.jsxs)(i.p,{children:["顾名思义就是",(0,s.jsx)(i.code,{children:"首次内容绘制"}),"，也就是页面最开始绘制内容的时间，但是由于我们现在开发的页面都是spa应用，所以，框架层面的初始化是一定会有一定的性能损耗的，以vue-cli 搭建的脚手架为例，当我初始化空的脚手架，打包后上传cdn部署，FCP 就会从0.8s提上到1.5秒，由此可见vue 的diff 也不是免费的他也会有性能上的损耗"]}),"\n",(0,s.jsx)(i.p,{children:"在优化页面的内容之前我们声明三个前提:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"提高FCP的时间其实就是在优化关键渲染路径"}),"\n",(0,s.jsx)(i.li,{children:"如果它是一个样式文件（CSS文件），浏览器就必须在渲染页面之前完全解析它（这就是为什么说CSS具有渲染阻碍性）"}),"\n",(0,s.jsx)(i.li,{children:"如果它是一个脚本文件（JavaScript文件），浏览器必须：停止解析，下载脚本，并运行它。只有在这之后，它才能继续解析，因为 JavaScript 脚本可以改变页面内容（特别是HTML）。（这就是为什么说JavaScript阻塞解析）"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"针对以上的用例测试，我们发现，无论我们怎么优化，框架本身的性能损耗是无法抹除的，我们唯一能做的就是让框架更早的去执行初始化，并且初始化更少的内容，可做的优化手段如下："}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"所有初始化用不到的js 文件全部走异步加载，也就是加上defer或者asnyc ，并且一些需要走cdn的第三方插件需要放在页面底部（因为放在顶部，他的解析会阻止html 的解析，从而影响css 等文件的下载，这也是雅虎军规的一条）"}),"\n",(0,s.jsx)(i.li,{children:"js 文件拆包，以vue-cli 为例，一般情况下我们可以通过cli的配置 splitChunks 做代码分割，将一些第三方的包走cdn，或者拆包。如果有路由的情况下将路由做拆包处理，保证每个路由只加载当前路由对应的js代码"}),"\n",(0,s.jsx)(i.li,{children:"优化文件大小 减少字体包、css文件、以及js文件的大小（当然这些 脚手架默认都已经做了）"}),"\n",(0,s.jsx)(i.li,{children:"优化项目结构，每个组件的初始化都是有性能损耗的，在在保证可维护性的基础上，尽量减少初始化组件的加载数量"}),"\n",(0,s.jsx)(i.li,{children:"网络协议层面的优化，这个优化手段需要服务端配合纯前端已经无法达到，在现在云服务器盛行的时代,自家单位一般都会默认在云服务器中开启这些优化手段，比如开启gzip，使用cdn 等等"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["其实说来说去，提高FCP 的核心只有理念之后两个",(0,s.jsx)(i.code,{children:"减少初始化视图内容"}),"和",(0,s.jsx)(i.code,{children:"减少初始化下载资源大小"})]}),"\n",(0,s.jsx)(i.p,{children:"未完待续。。。"})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:i}=Object.assign({},(0,h.ah)(),e.components);return i?(0,s.jsx)(i,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}let d=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["notes%2FJS%2Fvue-webpack-optimize.md"]={toc:[{id:"性能优化标准",text:"性能优化标准",depth:2},{id:"lighthouse",text:"Lighthouse",depth:3},{id:"通用常规优化手段",text:"通用常规优化手段",depth:2},{id:"通用性能优化分析",text:"通用性能优化分析",depth:2},{id:"fcpfirst-contentful-paint",text:"FCP（First Contentful Paint）",depth:3}],title:"vue 项目性能优化",headingTitle:"vue 项目性能优化",frontmatter:{}}}}]);