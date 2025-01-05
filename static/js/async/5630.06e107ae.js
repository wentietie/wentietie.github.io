"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["5630"],{99265:function(r,n,e){e.r(n),e.d(n,{default:function(){return d}});var a=e(85893),i=e(50065);function s(r){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3",ol:"ol",li:"li"},(0,i.ah)(),r.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"数组的扩展",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#数组的扩展",children:"#"}),"数组的扩展"]}),"\n",(0,a.jsxs)(n.h2,{id:"扩展运算符",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#扩展运算符",children:"#"}),"扩展运算符"]}),"\n",(0,a.jsx)(n.p,{children:"扩展运算符（spread）是三个点（ ... ）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"",children:"console.log(...[1, 2, 3])\r\n// 1 2 3\r\nconsole.log(1, ...[2, 3, 4], 5)\r\n// 1 2 3 4 5\r\n\r\n//扩展运算符后面还可以放置表达式。\r\nconst arr = [\r\n    ...(x > 0 ? ['a'] : []),\r\n    'b',\r\n];\r\n// 由于扩展运算符可以展开数组，所以不再需要 apply 方法，将数组转为函数的参数了。\r\n// ES5 的写法\r\nfunction f(x, y, z) {\r\n    // ...\r\n}\r\n\r\nvar args = [0, 1, 2];\r\nf.apply(null, args);\r\n\r\n// ES6的写法\r\nfunction f(x, y, z) {\r\n    // ...\r\n}\r\n\r\nlet args = [0, 1, 2];\r\nf(...args);\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"扩展运算符的应用",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#扩展运算符的应用",children:"#"}),"扩展运算符的应用"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"复制数组"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"",children:"const a1 = [1, 2];\r\n// 写法一\r\nconst a2 = [...a1];\r\n// 写法二\r\nconst [...a2] = a1;\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"合并数组"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"",children:"const arr1 = ['a', 'b'];\r\nconst arr2 = ['c'];\r\nconst arr3 = ['d', 'e'];\r\n// ES5 的合并数组\r\narr1.concat(arr2, arr3);\r\n// [ 'a', 'b', 'c', 'd', 'e' ]\r\n// ES6 的合并数组\r\n[...arr1, ...arr2, ...arr3]\r\n// [ 'a', 'b', 'c', 'd', 'e' ]\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"与解构赋值结合"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"",children:"const list = [1, 2, 4]\r\n// ES5\r\na = list[0], rest = list.slice(1)\r\n// ES6\r\nconst [a, ...rest] = list\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"字符串转数组"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"",children:'[...\'hello\']\r\n// [ "h", "e", "l", "l", "o" ]\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsx)(n.li,{children:"实现了 Iterator 接口的对象 任何定义了遍历器（Iterator）接口的对象（参阅 Iterator 一章），都可以用扩展运算符转为真正的数组。"}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"arrayfrom",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#arrayfrom",children:"#"}),"Array.from()"]}),"\n",(0,a.jsx)(n.p,{children:"用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"",children:"let arrayLike = {\r\n    '0': 'a',\r\n    '1': 'b',\r\n    '2': 'c',\r\n    length: 3\r\n};\r\n// ES5的写法\r\nvar arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']\r\n// ES6的写法\r\nlet arr2 = Array.from(arrayLike); // ['a', 'b', 'c']\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"arrayof",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#arrayof",children:"#"}),"Array.of()"]}),"\n",(0,a.jsx)(n.p,{children:"用于将一组值，转换为数组。基本上可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载。它的行为非常统一。"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"",children:"Array.of(3, 11, 8) // [3,11,8]\r\nArray.of(3) // [3]\r\nArray.of(3).length // 1\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"copywithin",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#copywithin",children:"#"}),"copyWithin()"]}),"\n",(0,a.jsxs)(n.h2,{id:"find-和-findindex",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#find-和-findindex",children:"#"}),"find() 和 findIndex()"]}),"\n",(0,a.jsx)(n.p,{children:"find方法，用于找出第一个符合条件的数组成员. 它的参数是一个回调函数,回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。 findIndex 方法的用法与 find\r\n方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回 -1 。"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"",children:"[1, 4, -5, 10].find((n) => n < 0)\r\n// -5\r\n    [1, 5, 10, 15].findIndex(function (value, index, arr) {\r\n    return value > 9;\r\n}) // 2\n"})}),"\n",(0,a.jsx)(n.p,{children:"这两个方法都可以接受第二个参数，用来绑定回调函数的 this 对象。"}),"\n",(0,a.jsxs)(n.h2,{id:"fill",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#fill",children:"#"}),"fill()"]}),"\n",(0,a.jsx)(n.p,{children:"fill方法使用给定值，填充一个数组。"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"",children:"['a', 'b', 'c'].fill(7)\r\n// [7, 7, 7]\r\n\r\nnew Array(3).fill(7)\r\n// [7, 7, 7]\r\n\r\n//fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。\r\n['a', 'b', 'c'].fill(7, 1, 2)\r\n// ['a', 7, 'c']\n"})}),"\n",(0,a.jsx)(n.h2,{id:"",children:(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#",children:"#"})})]})}function l(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),r.components);return n?(0,a.jsx)(n,Object.assign({},r,{children:(0,a.jsx)(s,r)})):s(r)}let d=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["JavaScript%2Fes6%2Fes6-8.md"]={toc:[{id:"扩展运算符",text:"扩展运算符",depth:2},{id:"扩展运算符的应用",text:"扩展运算符的应用",depth:3},{id:"arrayfrom",text:"Array.from()",depth:2},{id:"arrayof",text:"Array.of()",depth:2},{id:"copywithin",text:"copyWithin()",depth:2},{id:"find-和-findindex",text:"find() 和 findIndex()",depth:2},{id:"fill",text:"fill()",depth:2},{id:"",text:"",depth:2}],title:"数组的扩展",headingTitle:"数组的扩展",frontmatter:{}}}}]);