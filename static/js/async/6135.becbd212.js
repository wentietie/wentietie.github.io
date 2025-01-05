"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["6135"],{28181:function(e,r,n){n.r(r),n.d(r,{default:function(){return h}});var i=n(85893),a=n(50065);function s(e){let r=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.h1,{id:"数值的扩展",children:[(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#数值的扩展",children:"#"}),"数值的扩展"]}),"\n",(0,i.jsxs)(r.h2,{id:"二进制和八进制表示法",children:[(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#二进制和八进制表示法",children:"#"}),"二进制和八进制表示法"]}),"\n",(0,i.jsx)(r.p,{children:"ES6 提供了二进制和八进制数值的新的写法，分别用前缀0b（或0B）和0o（或0O）表示。从 ES5 开始，在严格模式之中，八进制就不再允许使用前缀0表示，ES6 进一步明确，要使用前缀0o表示。"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",meta:"",children:"0b111110111 === 503 // true\r\n0o767 === 503 // true\r\n\r\n\r\n// 如果要将0b和0o前缀的字符串数值转为十进制，要使用Number方法。\r\n\r\nNumber('0b111')  // 7\r\nNumber('0o10')  // 8\n"})}),"\n",(0,i.jsxs)(r.h2,{id:"numberisfinite-numberisnan",children:[(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#numberisfinite-numberisnan",children:"#"}),"Number.isFinite(), Number.isNaN()"]}),"\n",(0,i.jsx)(r.p,{children:"ES6 在Number对象上，新提供了Number.isFinite()和Number.isNaN()两个方法。"}),"\n",(0,i.jsx)(r.p,{children:"Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity。注意，如果参数类型不是数值，Number.isFinite一律返回false。"}),"\n",(0,i.jsx)(r.p,{children:"Number.isNaN()用来检查一个值是否为NaN。如果参数类型不是NaN，Number.isNaN一律返回false。"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",meta:"",children:"Number.isFinite(15); // true\r\nNumber.isFinite(0.8); // true\r\nNumber.isFinite(NaN); // false\r\nNumber.isFinite(Infinity); // false\r\nNumber.isFinite(-Infinity); // false\r\nNumber.isFinite('foo'); // false\r\nNumber.isFinite('15'); // false\r\nNumber.isFinite(true); // false\r\n\r\nNumber.isNaN(NaN) // true\r\nNumber.isNaN(15) // false\r\nNumber.isNaN('15') // false\r\nNumber.isNaN(true) // false\r\nNumber.isNaN(9/NaN) // true\r\nNumber.isNaN('true' / 0) // true\r\nNumber.isNaN('true' / 'true') // true\n"})}),"\n",(0,i.jsxs)(r.h2,{id:"numberparseint-numberparsefloat",children:[(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#numberparseint-numberparsefloat",children:"#"}),"Number.parseInt(), Number.parseFloat()"]}),"\n",(0,i.jsx)(r.p,{children:"ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。这样做的目的，是逐步减少全局性方法，使得语言逐步模块化。"}),"\n",(0,i.jsxs)(r.h2,{id:"numberisinteger",children:[(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#numberisinteger",children:"#"}),"Number.isInteger()"]}),"\n",(0,i.jsx)(r.p,{children:"Number.isInteger()用来判断一个数值是否为整数。如果参数不是数值，Number.isInteger返回false。"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",meta:"",children:"Number.isInteger(25) // true\r\nNumber.isInteger(25.1) // false\r\n// JavaScript 内部，整数和浮点数采用的是同样的储存方法，所以 25 和 25.0 被视为同一个值。\r\nNumber.isInteger(25) // true\r\nNumber.isInteger(25.0) // true\n"})}),"\n",(0,i.jsxs)(r.h2,{id:"numberepsilon",children:[(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#numberepsilon",children:"#"}),"Number.EPSILON"]}),"\n",(0,i.jsx)(r.p,{children:"ES6 在Number对象上面，新增一个极小的常量Number.EPSILON。根据规格，它表示 1 与大于 1 的最小浮点数之间的差。"}),"\n",(0,i.jsx)(r.p,{children:"Number.EPSILON实际上是 JavaScript 能够表示的最小精度。误差如果小于这个值，就可以认为已经没有意义了，即不存在误差了。引入一个这么小的量的目的，在于为浮点数计算，设置一个误差范围。我们知道浮点数计算是不精确的。"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",meta:"",children:"0.1 + 0.2\r\n// 0.30000000000000004\r\n0.1 + 0.2 - 0.3\r\n// 5.551115123125783e-17\r\n5.551115123125783e-17.toFixed(20)\r\n// '0.00000000000000005551'\n"})}),"\n",(0,i.jsxs)(r.h2,{id:"math-对象的扩展",children:[(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#math-对象的扩展",children:"#"}),"Math 对象的扩展"]}),"\n",(0,i.jsx)(r.p,{children:"ES6 在 Math 对象上新增了 17 个与数学相关的方法。所有这些方法都是静态方法，只能在 Math 对象上调用。"}),"\n",(0,i.jsxs)(r.h3,{id:"mathtrunc",children:[(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#mathtrunc",children:"#"}),"Math.trunc()"]}),"\n",(0,i.jsx)(r.p,{children:"Math.trunc方法用于去除一个数的小数部分，返回整数部分。对于非数值，Math.trunc内部使用Number方法将其先转为数值。对于空值和无法截取整数的值，返回NaN。"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",meta:"",children:"Math.trunc(4.1) // 4\r\nMath.trunc('123.456') // 123\r\nMath.trunc(true) //1\r\nMath.trunc(false) // 0\r\nMath.trunc(null) // 0\r\nMath.trunc(NaN);      // NaN\r\nMath.trunc('foo');    // NaN\r\nMath.trunc();         // NaN\r\nMath.trunc(undefined) // NaN\n"})}),"\n",(0,i.jsxs)(r.h3,{id:"mathsign",children:[(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#mathsign",children:"#"}),"Math.sign()"]}),"\n",(0,i.jsx)(r.p,{children:"Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。\r\n它会返回五种值。"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"参数为正数，返回+1；"}),"\n",(0,i.jsx)(r.li,{children:"参数为负数，返回-1；"}),"\n",(0,i.jsx)(r.li,{children:"参数为 0，返回0；"}),"\n",(0,i.jsx)(r.li,{children:"参数为-0，返回-0;"}),"\n",(0,i.jsx)(r.li,{children:"其他值，返回NaN。\r\n如果参数是非数值，会自动转为数值。对于那些无法转为数值的值，会返回NaN。"}),"\n"]}),"\n",(0,i.jsxs)(r.h3,{id:"指数运算符",children:[(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#指数运算符",children:"#"}),"指数运算符"]}),"\n",(0,i.jsx)(r.p,{children:"ES2016 新增了一个指数运算符（**）。"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",meta:"",children:"2 ** 2 // 4\r\n2 ** 3 // 8\r\n\r\n//这个运算符的一个特点是右结合，而不是常见的左结合。多个指数运算符连用时，是从最右边开始计算的。\r\n2 ** 3 ** 2\r\n// 相当于 2 ** (3 ** 2)\r\n// 512\n"})}),"\n",(0,i.jsxs)(r.h2,{id:"bigint-数据类型",children:[(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#bigint-数据类型",children:"#"}),"BigInt 数据类型"]}),"\n",(0,i.jsx)(r.p,{children:"JavaScript 所有数字都保存成 64 位浮点数，这给数值的表示带来了两大限制。一是数值的精度只能到 53 个二进制位（相当于 16 个十进制位），大于这个范围的整数，JavaScript 是无法精确表示的，这使得 JavaScript 不适合进行科学和金融方面的精确计算。二是大于或等于2的1024次方的数值，JavaScript 无法表示，会返回Infinity。"})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,a.ah)(),e.components);return r?(0,i.jsx)(r,Object.assign({},e,{children:(0,i.jsx)(s,e)})):s(e)}let h=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["JavaScript%2Fes6%2Fes6-6.md"]={toc:[{id:"二进制和八进制表示法",text:"二进制和八进制表示法",depth:2},{id:"numberisfinite-numberisnan",text:"Number.isFinite(), Number.isNaN()",depth:2},{id:"numberparseint-numberparsefloat",text:"Number.parseInt(), Number.parseFloat()",depth:2},{id:"numberisinteger",text:"Number.isInteger()",depth:2},{id:"numberepsilon",text:"Number.EPSILON",depth:2},{id:"math-对象的扩展",text:"Math 对象的扩展",depth:2},{id:"mathtrunc",text:"Math.trunc()",depth:3},{id:"mathsign",text:"Math.sign()",depth:3},{id:"指数运算符",text:"指数运算符",depth:3},{id:"bigint-数据类型",text:"BigInt 数据类型",depth:2}],title:"数值的扩展",headingTitle:"数值的扩展",frontmatter:{}}}}]);