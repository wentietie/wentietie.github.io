"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["2950"],{95027:function(e,s,r){r.r(s),r.d(s,{default:()=>a});var i=r("85893"),n=r("50065");let d=r.p+"static/image/5.d69e685c.png";function c(e){let s=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",div:"div",h3:"h3",ul:"ul",li:"li",blockquote:"blockquote",img:"img"},(0,n.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"应用架构设计基础",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#应用架构设计基础",children:"#"}),"应用架构设计基础"]}),"\n",(0,i.jsxs)(s.h2,{id:"mvvm模式",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#mvvm模式",children:"#"}),"MVVM模式"]}),"\n",(0,i.jsx)(s.p,{children:"ArkUI采取MVVM = Model + View + ViewModel模式，其中状态管理模块起到的就是ViewModel的作用，将数据与视图绑定在一起，更新数据的时候直接更新视图。"}),"\n",(0,i.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,i.jsx)(s.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(s.div,{className:"rspress-directive-content",children:(0,i.jsx)(s.p,{children:"\nArkUI中，model为我们定义的数据结构和数据来源，通过ArkUI提供的装饰器@State等装饰对应的数据，就提供了响应式能力，model数据的变化能够触发UI的更新。"})})]}),"\n",(0,i.jsxs)(s.h3,{id:"目录",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#目录",children:"#"}),"目录"]}),"\n",(0,i.jsxs)(s.div,{className:"rspress-directive info",children:[(0,i.jsx)(s.div,{className:"rspress-directive-title",children:"目录结构"}),(0,i.jsx)(s.div,{className:"rspress-directive-content",children:(0,i.jsx)(s.p,{children:"\n为了让代码更加清晰，容易维护，我们需要对代码进行分层管理，常见的数据结构放置在model文件夹中，UI组件放置在view文件夹中，并以对应的组件名命名。"})})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["建立model文件夹。在entry/src/main/ets文件夹下点击右键 - > new - > Directory。文件夹命名为model。","\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"model文件夹用于存储数据模型。它表示组件或其他相关业务逻辑之间传输的数据，是对原始数据的进一步处理。"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"创建view文件夹，用于存储UI组件.在entry/src/main/ets文件夹下点击右键 - > new - > Directory，命名为view，用于存放页面相关的自定义组件。"}),"\n"]}),"\n",(0,i.jsxs)(s.h2,{id:"三层架构",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#三层架构",children:"#"}),"三层架构"]}),"\n",(0,i.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,i.jsx)(s.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(s.div,{className:"rspress-directive-content",children:(0,i.jsxs)(s.p,{children:["\n",(0,i.jsx)(s.a,{href:"https://developer.huawei.com/consumer/cn/codelabsPortal/carddetails/tutorials_Next-BasicArchitectureDesignPart2",rel:"noopener noreferrer",target:"_blank",children:"官网三层架构介绍"})]})})]}),"\n",(0,i.jsx)(s.p,{children:"前面我们介绍了MVVM的目录组织方式，一般适用于单个模块内文件组织，为了更好地适配复杂应用的开发，建议采用三层架构的方式对整个应用的功能进行模块化，实现高内聚、低耦合开发。前面我们介绍了MVVM的目录组织方式，一般适用于单个模块内文件组织，为了更好地适配复杂应用的开发，建议采用三层架构的方式对整个应用的功能进行模块化，实现高内聚、低耦合开发。"}),"\n",(0,i.jsxs)(s.h3,{id:"三层架构设计",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#三层架构设计",children:"#"}),"三层架构设计"]}),"\n",(0,i.jsx)(s.p,{children:"“一次开发，多端部署”推荐在应用开发过程中使用如下的“三层工程结构”"}),"\n",(0,i.jsxs)(s.div,{className:"rspress-directive info",children:[(0,i.jsx)(s.div,{className:"rspress-directive-title",children:"三层工程结构如下"}),(0,i.jsxs)(s.div,{className:"rspress-directive-content",children:[(0,i.jsxs)(s.p,{children:["\n",(0,i.jsx)(s.img,{alt:"image.png",src:d})]}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"commons（公共能力层）：用于存放公共基础能力集合（如工具库、公共配置等）。commons层可编译成一个或多个HAR包或HSP包，只可以被products和features依赖，不可以反向依赖。"}),"\n",(0,i.jsx)(s.li,{children:"features（基础特性层）：用于存放基础特性集合（如应用中相对独立的各个功能的UI及业务逻辑实现等）。各个feature高内聚、低耦合、可定制，供产品灵活部署。不需要单独部署的feature通常编译为HAR包或HSP包，供products或其它feature使用。需要单独部署的feature通常编译为Feature类型的HAP包，和products下Entry类型的HAP包进行组合部署。features层可以横向调用及依赖common层，同时可以被products层不同设备形态的HAP所依赖，但是不能反向依赖products层。"}),"\n",(0,i.jsx)(s.li,{children:"products（产品定制层）：用于针对不同设备形态进行功能和特性集成。products层各个子目录各自编译为一个Entry类型的HAP包，作为应用主入口。products层不可以横向调用。"}),"\n"]})]})]})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,n.ah)(),e.components);return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}let a=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["harmony%2Fkuaisurumen%2Fpart4.md"]={toc:[{id:"mvvm模式",text:"MVVM模式",depth:2},{id:"目录",text:"目录",depth:3},{id:"三层架构",text:"三层架构",depth:2},{id:"三层架构设计",text:"三层架构设计",depth:3}],title:"应用架构设计基础",headingTitle:"应用架构设计基础",frontmatter:{}}}}]);