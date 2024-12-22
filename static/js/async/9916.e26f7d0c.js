"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["9916"],{8115:function(e,r,t){t.r(r),t.d(r,{default:function(){return l}});var n=t(85893),c=t(50065);function a(e){let r=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3"},(0,c.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.h1,{id:"reflect",children:["Reflect",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#reflect",children:"#"})]}),"\n",(0,n.jsxs)(r.h2,{id:"介绍",children:["介绍",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#介绍",children:"#"})]}),"\n",(0,n.jsx)(r.p,{children:"Reflect 对象与Proxy 对象一样，也是 ES6 为了操作对象而提供的新 API。 Reflect 对象的设计目的有这样几个。"}),"\n",(0,n.jsx)(r.p,{children:"（1） 将 Object 对象的一些明显属于语言内部的方法（比如 Object.defineProperty ），放到 Reflect 对象上。现阶段，某些方法同时在 Object 和 Reflect 对象上部署，未来的新方法将只部署在 Reflect 对象上。也就是说，从 Reflect 对象上可以拿到语言内部的方法。"}),"\n",(0,n.jsx)(r.p,{children:"（2） 修改某些 Object 方法的返回结果，让其变得更合理。比如， Object.defineProperty(obj, name, desc) 在无法定义属性时，会抛出一个错误，而 Reflect.defineProperty(obj, name, desc) 则会返回 false 。"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"// 老写法\r\ntry {\r\n    Object.defineProperty(target, property, attributes);\r\n    // success\r\n} catch (e) {\r\n    // failure\r\n}\r\n// 新写法\r\nif (Reflect.defineProperty(target, property, attributes)) {\r\n    // success\r\n} else {\r\n    // failure\r\n}\n"})}),"\n",(0,n.jsx)(r.p,{children:"（3） 让 Object 操作都变成函数行为。某些 Object 操作是命令式，比如 name in obj 和 delete obj[name] ，而 Reflect.has(obj, name) 和 Reflect.deleteProperty(obj, name) 让它们变成了函数行为。"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"// 老写法\r\n'assign' in Object // true\r\n// 新写法\r\nReflect.has(Object, 'assign') // true\n"})}),"\n",(0,n.jsx)(r.p,{children:"（4） Reflect对象的方法与 Proxy对象的方法一一对应，只要是 Proxy 对象的方法，就能在 Reflect 对象上找到对应的方法。这就让 Proxy 对象可以方便地调用对应的 Reflect 方法，完成默认行为，作为修改行为的基础。也就是说，不管 Proxy 怎么修改默认行为，你总可以在 Reflect 上获取默认行为。"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"Proxy(target, {\r\n  set: function(target, name, value, receiver) {\r\n    var success = Reflect.set(target, name, value, receiver);\r\n    if (success) {\r\n      console.log('property ' + name + ' on ' + target + ' set to ' + value);\r\n    }\r\n    return success;\r\n  }\r\n});\n"})}),"\n",(0,n.jsxs)(r.h2,{id:"静态方法",children:["静态方法",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#静态方法",children:"#"})]}),"\n",(0,n.jsx)(r.p,{children:"它与 Proxy 对象的方法是一一对应的。下面是对它们的解释。"}),"\n",(0,n.jsxs)(r.h3,{id:"reflectgettarget-name-receiver",children:["Reflect.get(target, name, receiver)",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#reflectgettarget-name-receiver",children:"#"})]}),"\n",(0,n.jsx)(r.p,{children:"Reflect.get方法查找并返回 target 对象的 name 属性，如果没有该属性，则返回 undefined"})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,c.ah)(),e.components);return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}let l=s;s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["JavaScript%2Fes6%2Fes6-13.md"]={toc:[{text:"介绍",id:"介绍",depth:2},{text:"静态方法",id:"静态方法",depth:2},{text:"Reflect.get(target, name, receiver)",id:"reflectgettarget-name-receiver",depth:3}],title:"Reflect",frontmatter:{}}}}]);