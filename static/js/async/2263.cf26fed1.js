"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["2263"],{32249:function(n,e,r){r.r(e),r.d(e,{default:function(){return o}});var t=r(85893),a=r(50065);function s(n){let e=Object.assign({h1:"h1",a:"a",p:"p",pre:"pre",code:"code",h2:"h2"},(0,a.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.h1,{id:"侦听器",children:[(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#侦听器",children:"#"}),"侦听器"]}),"\n",(0,t.jsx)(e.p,{children:"计算属性允许我们声明性地计算衍生值。然而在有些情况下，我们需要在状态变化时执行一些“副作用”：例如更改 DOM，或是根据异步操作的结果去修改另一处的状态。"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-vue",meta:"",children:"<script setup>\r\nimport { ref, watch } from 'vue'\r\n\r\nconst question = ref('')\r\nconst answer = ref('Questions usually contain a question mark. ;-)')\r\n\r\n// 可以直接侦听一个 ref\r\nwatch(question, async (newQuestion, oldQuestion) => {\r\n  if (newQuestion.indexOf('?') > -1) {\r\n    answer.value = 'Thinking...'\r\n    try {\r\n      const res = await fetch('https://yesno.wtf/api')\r\n      answer.value = (await res.json()).answer\r\n    } catch (error) {\r\n      answer.value = 'Error! Could not reach the API. ' + error\r\n    }\r\n  }\r\n})\r\n<\/script>\r\n\r\n<template>\r\n  <p>\r\n    Ask a yes/no question:\r\n    <input v-model=\"question\" />\r\n  </p>\r\n  <p>{{ answer }}</p>\r\n</template>\n"})}),"\n",(0,t.jsxs)(e.h2,{id:"侦听数据源类型",children:[(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#侦听数据源类型",children:"#"}),"侦听数据源类型"]}),"\n",(0,t.jsx)(e.p,{children:"watch 的第一个参数可以是不同形式的“数据源”：它可以是一个 ref (包括计算属性)、一个响应式对象、一个 getter 函数、或多个数据源组成的数组："}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",meta:"",children:"const x = ref(0)\r\nconst y = ref(0)\r\n\r\n// 单个 ref\r\nwatch(x, (newX) => {\r\n  console.log(`x is ${newX}`)\r\n})\r\n\r\n// getter 函数\r\nwatch(\r\n  () => x.value + y.value,\r\n  (sum) => {\r\n    console.log(`sum of x + y is: ${sum}`)\r\n  }\r\n)\r\n\r\n// 多个来源组成的数组\r\nwatch([x, () => y.value], ([newX, newY]) => {\r\n  console.log(`x is ${newX} and y is ${newY}`)\r\n})\n"})}),"\n",(0,t.jsx)(e.p,{children:"注意，你不能直接侦听响应式对象的属性值，例如:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",meta:"",children:"const obj = reactive({ count: 0 })\r\n\r\n// 错误，因为 watch() 得到的参数是一个 number\r\nwatch(obj.count, (count) => {\r\n  console.log(`count is: ${count}`)\r\n})\r\n\r\n// 正确\r\n// 提供一个 getter 函数\r\nwatch(\r\n  () => obj.count,\r\n  (count) => {\r\n    console.log(`count is: ${count}`)\r\n  }\r\n)\n"})}),"\n",(0,t.jsxs)(e.h2,{id:"深层侦听器",children:[(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#深层侦听器",children:"#"}),"深层侦听器"]}),"\n",(0,t.jsx)(e.p,{children:"直接给 watch() 传入一个响应式对象，会隐式地创建一个深层侦听器——该回调函数在所有嵌套的值变更时都会被触发："}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",meta:"",children:"const obj = reactive({ count: 0 })\r\n\r\nwatch(obj, (newValue, oldValue) => {\r\n  // 在嵌套的属性变更时触发\r\n  // 注意：`newValue` 此处和 `oldValue` 是相等的\r\n  // 因为它们是同一个对象！\r\n})\r\n\r\nobj.count++\n"})}),"\n",(0,t.jsx)(e.p,{children:"一个返回响应式对象的 getter 函数，只有在返回不同的对象时，才会触发回调："}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",meta:"",children:"watch(\r\n  () => state.someObject,\r\n  () => {\r\n    // 仅当 state.someObject 被替换时触发\r\n  }\r\n)\r\n\r\n// 给上面这个例子显式地加上 deep 选项，强制转成深层侦听器：\r\nwatch(\r\n  () => state.someObject,\r\n  (newValue, oldValue) => {\r\n    // 注意：`newValue` 此处和 `oldValue` 是相等的\r\n    // *除非* state.someObject 被整个替换了\r\n  },\r\n  { deep: true }\r\n)\n"})})]})}function c(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(s,n)})):s(n)}let o=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["formwork%2Fvue3%2Freactive%2Fpart9.md"]={toc:[{id:"侦听数据源类型",text:"侦听数据源类型",depth:2},{id:"深层侦听器",text:"深层侦听器",depth:2}],title:"侦听器",headingTitle:"侦听器",frontmatter:{}}}}]);