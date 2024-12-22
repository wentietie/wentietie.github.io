"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["6475"],{62394:function(e,n,r){r.r(n),r.d(n,{default:function(){return c}});var s=r(85893),i=r(50065);function a(e){let n=Object.assign({div:"div",p:"p",a:"a",h1:"h1",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"声明"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsxs)(n.p,{children:["本笔记学习自: ",(0,s.jsx)(n.a,{href:"https://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer",children:"阮一峰的《ECMAScript 6 入门教程》"}),"\r\n"]})})]}),"\n",(0,s.jsxs)(n.h1,{id:"let-和-const-命令",children:["let 和 const 命令",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#let-和-const-命令",children:"#"})]}),"\n",(0,s.jsxs)(n.h2,{id:"let",children:["let",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#let",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"基本用法 ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。不存在变量提升的弊端。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"{\r\n    let a = 10;\r\n    var b = 1;\r\n}\r\na // ReferenceError: a is not defined.\r\nb // 1\r\n// 关于var的使用弊端, 请参考你不知道的js中的提升部分\r\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"在for循环中的差异"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"var a = [];\r\nfor (var i = 0; i < 10; i++) {\r\n    a[i] = function () {\r\n        console.log(i);\r\n    };\r\n}\r\na[6](); // 10\r\n\r\nvar a = [];\r\nfor (let i = 0; i < 10; i++) {\r\n    a[i] = function () {\r\n        console.log(i);\r\n    };\r\n}\r\na[6](); // 6\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"暂时性死区",children:["暂时性死区",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#暂时性死区",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"if (true) {\r\n    // TDZ开始\r\n    tmp = 'abc'; // ReferenceError\r\n    console.log(tmp); // ReferenceError\r\n    let tmp; // TDZ结束\r\n    console.log(tmp); // undefined\r\n    tmp = 123;\r\n    console.log(tmp); // 123\r\n}\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"不允许重复声明",children:["不允许重复声明",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#不允许重复声明",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"let不允许在相同作用域内，重复声明同一个变量。"}),"\n",(0,s.jsxs)(n.h2,{id:"块级作用域",children:["块级作用域",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#块级作用域",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["请参考",(0,s.jsx)(n.a,{href:"https://wentietie.github.io/JavaScript/youdontknowjs/part1.html#%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86",target:"_blank",rel:"noopener noreferrer",children:"你不知道的JS的作用域"})]}),"\n",(0,s.jsxs)(n.h2,{id:"const-命令",children:["const 命令",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#const-命令",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"const声明一个只读的常量。一旦声明，常量的值就不能改变。除此之外，用法和let相同。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const PI = 3.1415;\r\nPI // 3.1415\r\nPI = 3;\r\n// TypeError: Assignment to constant variable.\n"})}),"\n",(0,s.jsx)(n.p,{children:"const一旦声明变量必须初始化"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const foo;\r\n// SyntaxError: Missing initializer in const declaration\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"本质",children:["本质",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#本质",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const foo = {};\r\n// 为 foo 添加一个属性，可以成功\r\nfoo.prop = 123;\r\nfoo.prop // 123\r\n// 将 foo 指向另一个对象，就会报错\r\nfoo = {}; // TypeError: "foo" is read-only\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"顶层对象的属性",children:["顶层对象的属性",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#顶层对象的属性",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"顶层对象，在浏览器环境指的是window对象，在 Node 指的是global对象。ES5 之中，顶层对象的属性与全局变量是等价的。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"window.a = 1;\r\na // 1\r\na = 2;\r\nwindow.a // 2\n"})}),"\n",(0,s.jsxs)(n.p,{children:["上面代码中，顶层对象的属性赋值与全局变量的赋值，是同一件事。","\r\n顶层对象的属性与全局变量挂钩，被认为是 JavaScript 语言最大的设计败笔之一。这样的设计带来了几个很大的问题，首先是没法在编译时就报出变量未声明的错误，只有运行时才能知道（因为全局变量可能是顶层对象的属性创造的，而属性的创造是动态的）；其次，程序员很容易不知不觉地就创建了全局变量（比如打字出错）；最后，顶层对象的属性是到处可以读写的，这非常不利于模块化编程。另一方面，window对象有实体含义，指的是浏览器的窗口对象，顶层对象是一个有实体含义的对象，也是不合适的。"]}),"\n",(0,s.jsx)(n.p,{children:"ES6 为了改变这一点，一方面规定，为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。也就是说，从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩。"}),"\n",(0,s.jsxs)(n.h3,{id:"globalthis-对象",children:["globalThis 对象",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#globalthis-对象",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"JavaScript 语言存在一个顶层对象，它提供全局环境（即全局作用域），所有代码都是在这个环境中运行。但是，顶层对象在各种实现里面是不统一的。"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。"}),"\n",(0,s.jsx)(n.li,{children:"浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。"}),"\n",(0,s.jsx)(n.li,{children:"Node 里面，顶层对象是global，但其他环境都不支持。"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"ES2020 在语言标准的层面，引入globalThis作为顶层对象。也就是说，任何环境下，globalThis都是存在的，都可以从它拿到顶层对象，指向全局环境下的this。"}),"\n",(0,s.jsx)(n.p,{children:"垫片库global-this模拟了这个提案，可以在所有环境拿到globalThis。"})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}let c=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["JavaScript%2Fes6%2Fes6-1.md"]={toc:[{text:"let",id:"let",depth:2},{text:"暂时性死区",id:"暂时性死区",depth:3},{text:"不允许重复声明",id:"不允许重复声明",depth:3},{text:"块级作用域",id:"块级作用域",depth:2},{text:"const 命令",id:"const-命令",depth:2},{text:"本质",id:"本质",depth:3},{text:"顶层对象的属性",id:"顶层对象的属性",depth:2},{text:"globalThis 对象",id:"globalthis-对象",depth:3}],title:"let 和 const 命令",frontmatter:{}}}}]);