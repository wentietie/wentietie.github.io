"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["9608"],{97823:function(e,n,r){r.r(n),r.d(n,{default:function(){return i}});var a=r(85893),s=r(50065);function l(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",div:"div",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"变量的解构赋值",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#变量的解构赋值",children:"#"}),"变量的解构赋值"]}),"\n",(0,a.jsx)(n.p,{children:"ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构"}),"\n",(0,a.jsxs)(n.h2,{id:"数组的解构赋值",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#数组的解构赋值",children:"#"}),"数组的解构赋值"]}),"\n",(0,a.jsxs)(n.h3,{id:"基本用法",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#基本用法",children:"#"}),"基本用法"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"",children:"// 之前的写法\r\nlet a = 1;\r\nlet b = 2;\r\nlet c = 3;\r\n\r\n// 解构写法\r\nlet [a, b, c] = [1, 2, 3];\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"例子",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#例子",children:"#"}),"例子"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"",children:'let [foo, [[bar], baz]] = [1, [[2], 3]];\r\nfoo // 1\r\nbar // 2\r\nbaz // 3\r\nlet [ , , third] = ["foo", "bar", "baz"];\r\nthird // "baz"\r\nlet [x, , y] = [1, 2, 3];\r\nx // 1\r\ny // 3\r\nlet [head, ...tail] = [1, 2, 3, 4];\r\nhead // 1\r\ntail // [2, 3, 4]\r\nlet [x, y, ...z] = [\'a\'];\r\nx // "a"\r\ny // undefined\r\nz // []\n'})}),"\n",(0,a.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,a.jsx)(n.div,{className:"rspress-directive-title",children:"注"}),(0,a.jsx)(n.div,{className:"rspress-directive-content",children:(0,a.jsx)(n.p,{children:"\n如果解构不成功，变量的值就等于undefined。"})})]}),"\n",(0,a.jsxs)(n.h3,{id:"不完全解构",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#不完全解构",children:"#"}),"不完全解构"]}),"\n",(0,a.jsx)(n.p,{children:"不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功。"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"",children:"let [x, y] = [1, 2, 3];\r\nx // 1\r\ny // 2\r\nlet [a, [b], d] = [1, [2, 3], 4];\r\na // 1\r\nb // 2\r\nd // 4\n"})}),"\n",(0,a.jsx)(n.p,{children:"如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"",children:"// 报错\r\nlet [foo] = 1;\r\nlet [foo] = false;\r\nlet [foo] = NaN;\r\nlet [foo] = undefined;\r\nlet [foo] = null;\r\nlet [foo] = {};\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"默认值",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认值",children:"#"}),"默认值"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"",children:"let [foo = true] = [];\r\nfoo // true\r\nlet [x, y = 'b'] = ['a']; // x='a', y='b'\r\nlet [x, y = 'b'] = ['a', undefined]; // x='a', y='b'\r\n\r\nfunction f() {\r\n  console.log('aaa');\r\n}\r\nlet [x = f()] = [1];\n"})}),"\n",(0,a.jsxs)(n.div,{className:"rspress-directive warning",children:[(0,a.jsx)(n.div,{className:"rspress-directive-title",children:"注"}),(0,a.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,a.jsx)(n.p,{children:"\nES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"",children:"let [x = 1] = [undefined];\r\nx // 1\r\nlet [x = 1] = [null];\r\nx // null\n"})})]})]}),"\n",(0,a.jsxs)(n.h2,{id:"对象的解构赋值",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#对象的解构赋值",children:"#"}),"对象的解构赋值"]}),"\n",(0,a.jsx)(n.p,{children:"解构不仅可以用于数组，还可以用于对象。对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。如果解构失败，变量的值等于undefined。"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"",children:"let { foo, bar } = { foo: 'aaa', bar: 'bbb' };\r\nfoo // \"aaa\"\r\nbar // \"bbb\"\r\n\r\n\r\nlet { baz } = { foo: 'aaa', bar: 'bbb' };\r\nbaz // undefined\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"自定义变量名",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义变量名",children:"#"}),"自定义变量名"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"",children:"let { foo: baz } = { foo: 'aaa', bar: 'bbb' };\r\nbaz // \"aaa\"\r\nlet obj = { first: 'hello', last: 'world' };\r\nlet { first: f, last: l } = obj;\r\nf // 'hello'\r\nl // 'world'\r\n/* 由此可见，对象的解构赋值是下面形式的简写。\r\n * 也就是说，对象的解构赋值的内部机制，是先找到同名属性，\r\n * 然后再赋给对应的变量。真正被赋值的是后者，而不是前者。\r\n */\r\nlet { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' };\r\n\r\n\r\n// 对象同样可以使用嵌套写法\r\nlet obj = {\r\n  p: [\r\n    'Hello',\r\n    { y: 'World' }\r\n  ]\r\n};\r\nlet { p: [x, { y }] } = obj;\r\nx // \"Hello\"\r\ny // \"World\"\r\n\r\n// 需要注意的是，这时p是模式，不是变量，因此不会被赋值。如果p也要作为变量赋值，可以写成下面这样。\r\nlet { p, p: [x, { y }] } = obj;\r\nx // \"Hello\"\r\ny // \"World\"\r\np // [\"Hello\", {y: \"World\"}]\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"例子-1",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#例子-1",children:"#"}),"例子"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"",children:"const node = {\r\n  loc: {\r\n    start: {\r\n      line: 1,\r\n      column: 5\r\n    }\r\n  }\r\n};\r\nlet { loc, loc: { start }, loc: { start: { line }} } = node;\r\nline // 1\r\nloc  // Object {start: Object}\r\nstart // Object {line: 1, column: 5}\r\n\r\n/**\r\n * \r\n * 上面代码有三次解构赋值，分别是对loc、start、line三个属性的解构赋值。\r\n * 注意，最后一次对line属性的解构赋值之中，只有line是变量，loc和start都是模式，不是变量。\r\n */ \n"})}),"\n",(0,a.jsxs)(n.h3,{id:"默认值-1",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认值-1",children:"#"}),"默认值"]}),"\n",(0,a.jsx)(n.p,{children:"对象的解构也可以指定默认值。默认值生效的条件是，对象的属性值严格等于undefined。"}),"\n",(0,a.jsxs)(n.div,{className:"rspress-directive warning",children:[(0,a.jsx)(n.div,{className:"rspress-directive-title",children:"注"}),(0,a.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"如果要将一个已经声明的变量用于解构赋值，必须非常小心。"}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"",children:"// 错误的写法\r\nlet x;\r\n{x} = {x: 1};\r\n// SyntaxError: syntax error\r\n\r\n// 正确的写法\r\nlet x;\r\n({x} = {x: 1});\r\n\r\n//上面代码将整个解构赋值语句，放在一个圆括号里面，就可以正确执行。\n"})}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"解构赋值允许等号左边的模式之中，不放置任何变量名。因此，可以写出非常古怪的赋值表达式。"}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"",children:"({} = [true, false]);\r\n({} = 'abc');\r\n({} = []);\r\n// 上面的表达式虽然毫无意义，但是语法是合法的，可以执行。\n"})}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构。"}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"",children:"let arr = [1, 2, 3];\r\nlet {0 : first, [arr.length - 1] : last} = arr;\r\nfirst // 1\r\nlast // 3\r\n// 上面代码对数组进行对象解构。数组arr的0键对应的值是1，[arr.length - 1]就是2键，对应的值是3。\n"})})]})]}),"\n",(0,a.jsxs)(n.h2,{id:"字符串的解构赋值",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#字符串的解构赋值",children:"#"}),"字符串的解构赋值"]}),"\n",(0,a.jsx)(n.p,{children:"字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"",children:'const [a, b, c, d, e] = \'hello\';\r\na // "h"\r\nb // "e"\r\nc // "l"\r\nd // "l"\r\ne // "o"\r\n\r\n//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。\r\nlet {length : len} = \'hello\';\r\nlen // 5\n'})}),"\n",(0,a.jsxs)(n.h2,{id:"数值和布尔值的解构赋值",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#数值和布尔值的解构赋值",children:"#"}),"数值和布尔值的解构赋值"]}),"\n",(0,a.jsx)(n.p,{children:"解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"",children:"let {toString: s} = 123;\r\ns === Number.prototype.toString // true\r\nlet {toString: s} = true;\r\ns === Boolean.prototype.toString // true\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"函数参数的解构赋值",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数参数的解构赋值",children:"#"}),"函数参数的解构赋值"]}),"\n",(0,a.jsx)(n.p,{children:"函数的参数也可以使用解构赋值。"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"",children:"function add([x, y]){\r\n  return x + y;\r\n}\r\nadd([1, 2]); // 3\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"默认值-2",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认值-2",children:"#"}),"默认值"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"",children:"function move({x = 0, y = 0} = {}) {\r\n  return [x, y];\r\n}\r\nmove({x: 3, y: 8}); // [3, 8]\r\nmove({x: 3}); // [3, 0]\r\nmove({}); // [0, 0]\r\nmove(); // [0, 0]\r\n\r\n// 另一种情况\r\nfunction move({x, y} = { x: 0, y: 0 }) {\r\n  return [x, y];\r\n}\r\nmove({x: 3, y: 8}); // [3, 8]\r\nmove({x: 3}); // [3, undefined]\r\nmove({}); // [undefined, undefined]\r\nmove(); // [0, 0]\r\n// 上面代码是为函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果。\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(l,e)})):l(e)}let i=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["JavaScript%2Fes6%2Fes6-2.md"]={toc:[{id:"数组的解构赋值",text:"数组的解构赋值",depth:2},{id:"基本用法",text:"基本用法",depth:3},{id:"例子",text:"例子",depth:3},{id:"不完全解构",text:"不完全解构",depth:3},{id:"默认值",text:"默认值",depth:3},{id:"对象的解构赋值",text:"对象的解构赋值",depth:2},{id:"自定义变量名",text:"自定义变量名",depth:3},{id:"例子-1",text:"例子",depth:3},{id:"默认值-1",text:"默认值",depth:3},{id:"字符串的解构赋值",text:"字符串的解构赋值",depth:2},{id:"数值和布尔值的解构赋值",text:"数值和布尔值的解构赋值",depth:2},{id:"函数参数的解构赋值",text:"函数参数的解构赋值",depth:2},{id:"默认值-2",text:"默认值",depth:3}],title:"变量的解构赋值",headingTitle:"变量的解构赋值",frontmatter:{}}}}]);