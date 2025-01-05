"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["8511"],{90102:function(e,r,n){n.r(r),n.d(r,{default:function(){return o}});var s=n(85893),t=n(50065);function a(e){let r=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre",h4:"h4",ol:"ol",li:"li",h5:"h5"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"响应式基础",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#响应式基础",children:"#"}),"响应式基础"]}),"\n",(0,s.jsxs)(r.div,{className:"rspress-directive tip",children:[(0,s.jsx)(r.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsx)(r.div,{className:"rspress-directive-content",children:(0,s.jsxs)(r.p,{children:["\nvue的",(0,s.jsx)(r.a,{href:"https://cn.vuejs.org/guide/introduction.html",rel:"noopener noreferrer",target:"_blank",children:"官方文档"}),"是一个非常好的学习网站。"]})})]}),"\n",(0,s.jsxs)(r.h2,{id:"声明响应式状态",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#声明响应式状态",children:"#"}),"声明响应式状态"]}),"\n",(0,s.jsxs)(r.h3,{id:"",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#",children:"#"}),(0,s.jsx)(r.a,{href:"https://cn.vuejs.org/api/reactivity-core.html#reactive",rel:"noopener noreferrer",target:"_blank",children:(0,s.jsx)(r.code,{children:"reactive()"})})]}),"\n",(0,s.jsxs)(r.p,{children:["利用",(0,s.jsx)(r.code,{children:"reactive"}),"函数可以创建一个响应式的对象或者数组。 大致过程如下："]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",meta:"",children:"import {reactive} from 'vue';\r\n\r\nconst state = reactive({\r\n  count: 0,\r\n})\n"})}),"\n",(0,s.jsx)(r.p,{children:"以上是一个官网的例子，这个例子很好地展示了一个响应式对象声明的过程。"}),"\n",(0,s.jsxs)(r.p,{children:["下面是一个在vue模板中的示例。\r\nvue3 可以省略setup方法，使用",(0,s.jsx)(r.code,{children:"<script setup>"}),"语法糖。"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-vue",meta:"",children:"<template>\r\n  <button @click=\"increment\">\r\n    {{ state.count }}\r\n  </button>\r\n</template>\r\n\r\n<script setup>\r\nimport {reactive} from 'vue';\r\n\r\nconst state = reactive({count: 0})\r\n\r\nfunction increment() {\r\n  state.count++\r\n}\r\n<\/script>\n"})}),"\n",(0,s.jsx)(r.p,{children:"这样创建的变量就是响应式的，在js中更改变量的值，dom就会相应的刷新。"}),"\n",(0,s.jsxs)(r.h4,{id:"深层响应性",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#深层响应性",children:"#"}),"深层响应性"]}),"\n",(0,s.jsx)(r.p,{children:"在 Vue 中，状态都是默认深层响应式的。这意味着即使在更改深层次的对象或数组，你的改动也能被检测到。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",meta:"",children:"import { reactive } from 'vue'\r\n\r\nconst obj = reactive({\r\n  nested: { count: 0 },\r\n  arr: ['foo', 'bar']\r\n})\r\n\r\nfunction mutateDeeply() {\r\n  // 以下都会按照期望工作\r\n  obj.nested.count++\r\n  obj.arr.push('baz')\r\n}\n"})}),"\n",(0,s.jsxs)(r.p,{children:["也可以直接创建一个",(0,s.jsx)(r.a,{href:"https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive",rel:"noopener noreferrer",target:"_blank",children:"浅层响应式对象"}),"。它们仅在顶层具有响应性，一般仅在某些特殊场景中需要。"]}),"\n",(0,s.jsxs)(r.h3,{id:"ref",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#ref",children:"#"}),"ref()"]}),"\n",(0,s.jsxs)(r.h4,{id:"reactive-的局限性",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#reactive-的局限性",children:"#"}),"reactive() 的局限性"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"reactive()"})," API 有两条限制："]}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["仅对对象类型有效（对象、数组和 ",(0,s.jsx)(r.code,{children:"Map"}),"、",(0,s.jsx)(r.code,{children:"Set"})," 这样的",(0,s.jsx)(r.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects#%E4%BD%BF%E7%94%A8%E9%94%AE%E7%9A%84%E9%9B%86%E5%90%88%E5%AF%B9%E8%B1%A1",rel:"noopener noreferrer",target:"_blank",children:"集合类型"}),"），而对 ",(0,s.jsx)(r.code,{children:"string"}),"、",(0,s.jsx)(r.code,{children:"number"})," 和 ",(0,s.jsx)(r.code,{children:"boolean"})," 这样的 ",(0,s.jsx)(r.a,{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive",rel:"noopener noreferrer",target:"_blank",children:"原始类型"})," 无效。"]}),"\n",(0,s.jsx)(r.li,{children:"因为 Vue 的响应式系统是通过属性访问进行追踪的，因此我们必须始终保持对该响应式对象的相同引用。这意味着我们不可以随意地“替换”一个响应式对象，因为这将导致对初始引用的响应性连接丢失："}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",meta:"",children:"let state = reactive({ count: 0 })\r\n\r\n// 上面的引用 ({ count: 0 }) 将不再被追踪（响应性连接已丢失！）\r\nstate = reactive({ count: 1 })\n"})}),"\n",(0,s.jsx)(r.p,{children:"ref函数没有任何类型限制，可以创建任意类型的响应式。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-vue",meta:"",children:"<template>\r\n  <p>{{count}}</p>\r\n  <p>{{str}}</p>\r\n  <p>{{booleanValue}}</p>\r\n  <p>{{nullValue}}</p>\r\n  <p>{{undefinedValue}}</p>\r\n  <ul>\r\n    <li v-for=\"item in list\">{{item}}</li>\r\n  </ul>\r\n  <ul>\r\n    <li v-for=\"item in Object.keys(obj)\">key:{{item}}, value: {{obj[item]}}</li>\r\n  </ul>\r\n</template>\r\n\r\n<script setup>\r\n  import { ref } from 'vue'\r\n\r\n  const count = ref(0);\r\n  const str = ref('0');\r\n  const booleanValue = ref(true);\r\n  const nullValue = ref(null);\r\n  const undefinedValue = ref(undefined);\r\n  const list = ref(['a', 'b']);\r\n  const obj = ref({\r\n    a: 'a',\r\n    b: 'b',\r\n  });\r\n<\/script>\n"})}),"\n",(0,s.jsx)(r.p,{children:"ref() 将传入参数的值包装为一个带 .value 属性的 ref 对象："}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",meta:"",children:"const count = ref(0)\r\n\r\nconsole.log(count) // { value: 0 }\r\nconsole.log(count.value) // 0\r\n\r\ncount.value++\r\nconsole.log(count.value) // 1\n"})}),"\n",(0,s.jsxs)(r.p,{children:["这意味这我们修改ref声明的变量时，需要使用",(0,s.jsx)(r.code,{children:"xx.value = xx"}),"或者",(0,s.jsx)(r.code,{children:"xx.value.ff = xx"}),"这种形式:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",meta:"",children:"const count = ref(0);\r\n  const list = ref(['a', 'b']);\r\n  const obj = ref({\r\n    a: 'a',\r\n    b: 'b',\r\n  });\r\n  \r\n  count.value = 1;\r\n  list.value.push('c');\r\n  list.value = [];\r\n  obj.value.a = 'c';\r\n  obj.value = {\r\n    a: 'c',\r\n    b: 'd'\r\n  }\n"})}),"\n",(0,s.jsx)(r.p,{children:"ref 被传递给函数或是从一般对象上被解构时，不会丢失响应性："}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",meta:"",children:"const obj = {\r\n  foo: ref(1),\r\n  bar: ref(2)\r\n}\r\n\r\n// 该函数接收一个 ref\r\n// 需要通过 .value 取值\r\n// 但它会保持响应性\r\ncallSomeFunction(obj.foo)\r\n\r\n// 仍然是响应式的\r\nconst { foo, bar } = obj\n"})}),"\n",(0,s.jsxs)(r.h2,{id:"ref的解包",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#ref的解包",children:"#"}),"ref的解包"]}),"\n",(0,s.jsxs)(r.h3,{id:"在模板中的解包",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#在模板中的解包",children:"#"}),"在模板中的解包"]}),"\n",(0,s.jsx)(r.p,{children:"当 ref 在模板中作为顶层属性被访问时，它们会被自动“解包”，所以不需要使用 .value。下面是之前的计数器例子，用 ref() 代替："}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-vue",meta:"",children:"<script setup>\r\n  import { ref } from 'vue'\r\n\r\n  const count = ref(0)\r\n\r\n  function increment() {\r\n  count.value++\r\n}\r\n<\/script>\r\n\r\n<template>\r\n  <button @click=\"increment\">\r\n  {{ count }} \x3c!-- 无需 .value --\x3e\r\n</button>\r\n</template>\n"})}),"\n",(0,s.jsxs)(r.div,{className:"rspress-directive warning",children:[(0,s.jsx)(r.div,{className:"rspress-directive-title",children:"WARNING"}),(0,s.jsxs)(r.div,{className:"rspress-directive-content",children:[(0,s.jsx)(r.p,{children:"\n请注意，仅当 ref 是模板渲染上下文的顶层属性时才适用自动“解包”。 例如， object 是顶层属性，但 object.foo 不是。"}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",meta:"",children:"const object = { foo: ref(1) }\r\n// 下面的表达式将不会像预期的那样工作：渲染的结果会是一个 [object Object]1\r\n{{ object.foo + 1 }}\r\n\r\n// 可以通过将 foo 改成顶层属性来解决这个问题：\r\nconst { foo } = object\r\n{{ foo + 1 }}\n"})})]})]}),"\n",(0,s.jsxs)(r.h3,{id:"ref-在响应式对象中的解包",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#ref-在响应式对象中的解包",children:"#"}),"ref 在响应式对象中的解包"]}),"\n",(0,s.jsx)(r.p,{children:"当一个 ref 被嵌套在一个响应式对象中，作为属性被访问或更改时，它会自动解包，因此会表现得和一般的属性一样："}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",meta:"",children:"const count = ref(0)\r\nconst state = reactive({\r\n  count\r\n})\r\n\r\nconsole.log(state.count) // 0\r\n\r\nstate.count = 1\r\nconsole.log(count.value) // 1\n"})}),"\n",(0,s.jsx)(r.p,{children:"如果将一个新的 ref 赋值给一个关联了已有 ref 的属性，那么它会替换掉旧的 ref："}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",meta:"",children:"const otherCount = ref(2)\r\n\r\nstate.count = otherCount\r\nconsole.log(state.count) // 2\r\n// 原始 ref 现在已经和 state.count 失去联系\r\nconsole.log(count.value) // 1\n"})}),"\n",(0,s.jsxs)(r.h3,{id:"数组和集合类型的-ref-解包",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#数组和集合类型的-ref-解包",children:"#"}),"数组和集合类型的 ref 解包"]}),"\n",(0,s.jsx)(r.p,{children:"跟响应式对象不同，当 ref 作为响应式数组或像 Map 这种原生集合类型的元素被访问时，不会进行解包。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",meta:"",children:"const books = reactive([ref('Vue 3 Guide')])\r\n// 这里需要 .value\r\nconsole.log(books[0].value)\r\n\r\nconst map = reactive(new Map([['count', ref(0)]]))\r\n// 这里需要 .value\r\nconsole.log(map.get('count').value)\n"})}),"\n",(0,s.jsxs)(r.h2,{id:"常见问题",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#常见问题",children:"#"}),"常见问题"]}),"\n",(0,s.jsxs)(r.h3,{id:"要将响应式对象中的某个或多个属性单独提供给外部使用时",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#要将响应式对象中的某个或多个属性单独提供给外部使用时",children:"#"}),"要将响应式对象中的某个或多个属性单独提供给外部使用时"]}),"\n",(0,s.jsx)(r.p,{children:"日常开发中经常碰到上述情形，但是直接使用ref的value进行赋值，新创建的响应式并不能与源数据保持同步。\r\n要解决这类问题，有三种解决方式。"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"使用toRef/toRefs"}),"\n"]}),"\n",(0,s.jsxs)(r.h4,{id:"toref",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#toref",children:"#"}),"toRef()"]}),"\n",(0,s.jsx)(r.p,{children:"基于响应式对象上的一个属性，创建一个对应的 ref。这样创建的 ref 与其源属性保持同步：改变源属性的值将更新 ref 的值，反之亦然。"}),"\n",(0,s.jsxs)(r.h5,{id:"示例",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"}),"示例"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",meta:"",children:"const state = reactive({\r\n  foo: 1,\r\n  bar: 2\r\n})\r\n\r\nconst fooRef = toRef(state, 'foo')\r\n\r\n// 更改该 ref 会更新源属性\r\nfooRef.value++\r\nconsole.log(state.foo) // 2\r\n\r\n// 更改源属性也会更新该 ref\r\nstate.foo++\r\nconsole.log(fooRef.value) // 3\n"})}),"\n",(0,s.jsxs)(r.h4,{id:"torefs",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#torefs",children:"#"}),"toRefs()"]}),"\n",(0,s.jsx)(r.p,{children:"将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref。每个单独的 ref 都是使用 toRef() 创建的。"}),"\n",(0,s.jsxs)(r.h5,{id:"示例-1",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#示例-1",children:"#"}),"示例"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",meta:"",children:"const state = reactive({\r\n  foo: 1,\r\n  bar: 2\r\n})\r\n\r\nconst stateAsRefs = toRefs(state)\r\n/*\r\nstateAsRefs 的类型：{\r\n  foo: Ref<number>,\r\n  bar: Ref<number>\r\n}\r\n*/\r\n\r\n// 这个 ref 和源属性已经“链接上了”\r\nstate.foo++\r\nconsole.log(stateAsRefs.foo.value) // 2\r\n\r\nstateAsRefs.foo.value++\r\nconsole.log(state.foo) // 3\n"})}),"\n",(0,s.jsxs)(r.ol,{start:"2",children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/formwork/vue3/reactive/part2.html",children:"计算属性"})}),"\n",(0,s.jsxs)(r.li,{children:["使用",(0,s.jsx)(r.a,{href:"/formwork/vue3/reactive/part9.html",children:"watch"}),"进行数据监听"]}),"\n"]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,t.ah)(),e.components);return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}let o=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["formwork%2Fvue3%2Freactive%2Fpart1.md"]={toc:[{id:"声明响应式状态",text:"声明响应式状态",depth:2},{id:"reactive",text:"reactive()",depth:3},{id:"深层响应性",text:"深层响应性",depth:4},{id:"ref",text:"ref()",depth:3},{id:"reactive-的局限性",text:"reactive() 的局限性",depth:4},{id:"ref的解包",text:"ref的解包",depth:2},{id:"在模板中的解包",text:"在模板中的解包",depth:3},{id:"ref-在响应式对象中的解包",text:"ref 在响应式对象中的解包",depth:3},{id:"数组和集合类型的-ref-解包",text:"数组和集合类型的 ref 解包",depth:3},{id:"常见问题",text:"常见问题",depth:2},{id:"要将响应式对象中的某个或多个属性单独提供给外部使用时",text:"要将响应式对象中的某个或多个属性单独提供给外部使用时",depth:3},{id:"toref",text:"toRef()",depth:4},{id:"torefs",text:"toRefs()",depth:4}],title:"响应式基础",headingTitle:"响应式基础",frontmatter:{}}}}]);