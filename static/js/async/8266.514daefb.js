"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["8266"],{6913:function(r,n,e){e.r(n),e.d(n,{default:function(){return d}});var t=e(85893),s=e(50065);function i(r){let n=Object.assign({h1:"h1",a:"a",p:"p",pre:"pre",code:"code",h2:"h2",div:"div",h3:"h3"},(0,s.ah)(),r.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"字符串的扩展",children:["字符串的扩展",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#字符串的扩展",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"ES6 加强了对 Unicode 的支持，允许采用\\uxxxx形式表示一个字符，其中xxxx表示字符的 Unicode 码点。但是，这种表示法只限于码点在\\u0000~\\uFFFF之间的字符。超出这个范围的字符，必须用两个双字节的形式表示。"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"\"\\u0061\"\r\n// \"a\"\r\n\r\n\"\uD842\uDFB7\"\r\n// \"\uD842\uDFB7\"\r\n\r\n\"\\u20BB7\"\r\n// \" 7\"\r\n\r\n//上面代码表示，如果直接在\\u后面跟上超过0xFFFF的数值（比如\\u20BB7），JavaScript 会理解成\\u20BB+7。由于\\u20BB是一个不可打印字符，所以只会显示一个空格，后面跟着一个7。ES6 对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。\r\n\r\n\"\\u{20BB7}\"\r\n// \"\uD842\uDFB7\"\r\n\"\\u{41}\\u{42}\\u{43}\"\r\n// \"ABC\"\r\nlet hello = 123;\r\nhell\\u{6F} // 123\r\n'\\u{1F680}' === '\uD83D\uDE80'\r\n// true\r\n\r\n\r\n//有了这种表示法之后，JavaScript 共有 6 种方法可以表示一个字符。\r\n'\\z' === 'z'  // true\r\n'\\172' === 'z' // true\r\n'\\x7A' === 'z' // true\r\n'\\u007A' === 'z' // true\r\n'\\u{7A}' === 'z' // true\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"字符串的遍历器接口",children:["字符串的遍历器接口",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#字符串的遍历器接口",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"ES6 为字符串添加了遍历器接口（详见《Iterator》一章），使得字符串可以被for...of循环遍历。"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'for (let codePoint of \'foo\') {\r\n  console.log(codePoint)\r\n}\r\n// "f"\r\n// "o"\r\n// "o"\r\n\r\n// 除了遍历字符串，这个遍历器最大的优点是可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点。\r\nlet text = String.fromCodePoint(0x20BB7);\r\nfor (let i = 0; i < text.length; i++) {\r\n  console.log(text[i]);\r\n}\r\n// " "\r\n// " "\r\nfor (let i of text) {\r\n  console.log(i);\r\n}\r\n// "\uD842\uDFB7"\r\n//上面代码中，字符串text只有一个字符，但是for循环会认为它包含两个字符（都不可打印），而for...of循环会正确识别出这一个字符。\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"jsonstringify-的改造",children:["JSON.stringify() 的改造",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#jsonstringify-的改造",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"根据标准，JSON 数据必须是 UTF-8 编码。但是，现在的JSON.stringify()方法有可能返回不符合 UTF-8 标准的字符串。为了确保返回的是合法的 UTF-8 字符，ES2019 改变了JSON.stringify()的行为。如果遇到0xD800到0xDFFF之间的单个码点，或者不存在的配对形式，它会返回转义字符串，留给应用自己决定下一步的处理。"}),"\n",(0,t.jsxs)(n.h2,{id:"模板字符串",children:["模板字符串",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#模板字符串",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。","\r\n传统的 JavaScript 语言，输出模板通常是这样写的（下面使用了 jQuery 的方法）。"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"$('#result').append(\r\n  'There are <b>' + basket.count + '</b> ' +\r\n  'items in your basket, ' +\r\n  '<em>' + basket.onSale +\r\n  '</em> are on sale!'\r\n);\r\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"上面这种写法相当繁琐不方便，ES6 引入了模板字符串解决这个问题。"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'$(\'#result\').append(`\r\n  There are <b>${basket.count}</b> items\r\n   in your basket, <em>${basket.onSale}</em>\r\n  are on sale!\r\n`);\r\n\r\n// 并且可以定义多行字符串和使用变量\r\n// 普通字符串\r\n`In JavaScript \'\\n\' is a line-feed.`\r\n\r\n// 多行字符串\r\n`In JavaScript this is\r\n not legal.`\r\nconsole.log(`string text line 1\r\nstring text line 2`);\r\n\r\n// 模板字符串中嵌入变量，需要将变量名写在${}之中。大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。\r\nlet name = "Bob", time = "today";\r\n`Hello ${name}, how are you ${time}?`\r\n\r\nlet obj = {x: 1, y: 2};\r\n`${obj.x + obj.y}`\r\n// "3"\r\n\r\n// 模板字符串之中还能调用函数。\r\nfunction fn() {\r\n  return "Hello World";\r\n}\r\n`foo ${fn()} bar`\r\n// foo Hello World bar\r\n\r\n//如果大括号中的值不是字符串，将按照一般的规则转为字符串。比如，大括号中是一个对象，将默认调用对象的toString方法。如果模板字符串中的变量没有声明，将报错。\r\n\r\n// 模板字符串甚至还能嵌套。\r\nconst tmpl = addrs => `\r\n  <table>\r\n  ${addrs.map(addr => `\r\n    <tr><td>${addr.first}</td></tr>\r\n    <tr><td>${addr.last}</td></tr>\r\n  `).join(\'\')}\r\n  </table>\r\n`;\r\n\r\n\r\n\r\n\r\n// 如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。如果你不想要这个换行，可以使用trim方法消除它。\r\n\n'})}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"rspress-directive-content",children:(0,t.jsx)(n.p,{children:"上面代码中的模板字符串，都是用反引号表示。如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。"})})]}),"\n",(0,t.jsxs)(n.h3,{id:"限制",children:["限制",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#限制",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"模板字符串默认会将字符串转义，导致无法嵌入其他语言。"})]})}function a(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),r.components);return n?(0,t.jsx)(n,{...r,children:(0,t.jsx)(i,{...r})}):i(r)}let d=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["JavaScript%2Fes6%2Fes6-3.md"]={toc:[{text:"字符串的遍历器接口",id:"字符串的遍历器接口",depth:2},{text:"JSON.stringify() 的改造",id:"jsonstringify-的改造",depth:2},{text:"模板字符串",id:"模板字符串",depth:2},{text:"限制",id:"限制",depth:3}],title:"字符串的扩展",frontmatter:{}}}}]);