"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["8826"],{71228:function(n,e,a){a.r(e),a.d(e,{default:function(){return i}});var r=a(85893),s=a(50065);function t(n){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ol:"ol",li:"li",pre:"pre",code:"code"},(0,s.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"npm包打补丁",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#npm包打补丁",children:"#"}),"npm包打补丁"]}),"\n",(0,r.jsxs)(e.p,{children:[":::tip\r\n参考地址：",(0,r.jsx)(e.a,{href:"https://juejin.cn/post/6944999020943114254",rel:"noopener noreferrer",target:"_blank",children:"临时修改npm库"}),"\r\n:::\r\n使用patch-package和postinstall-postinstall"]}),"\n",(0,r.jsxs)(e.h2,{id:"步骤",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#步骤",children:"#"}),"步骤"]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"添加库\r\nyarn add patch-package postinstall-postinstall -D"}),"\n",(0,r.jsx)(e.li,{children:"修改文件\r\n修改需要修改的文件"}),"\n",(0,r.jsx)(e.li,{children:"创建布丁，package-name是修改的包名\r\nnpx patch-package package-name"}),"\n",(0,r.jsx)(e.li,{children:"package.json中scripts添加"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",meta:"",children:'"scripts": {\r\n  "postinstall": "patch-package"\r\n}\n'})})]})}function c(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(t,n)})):t(n)}let i=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["notes%2FJS%2Fbuding.md"]={toc:[{id:"步骤",text:"步骤",depth:2}],title:"npm包打补丁",headingTitle:"npm包打补丁",frontmatter:{}}}}]);