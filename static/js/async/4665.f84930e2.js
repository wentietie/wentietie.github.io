"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["4665"],{416:function(r,n,e){e.r(n),e.d(n,{default:function(){return d}});var t=e(85893),a=e(50065);function s(r){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",pre:"pre",code:"code"},(0,a.ah)(),r.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"vue实例属性",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vue实例属性",children:"#"}),"vue实例属性"]}),"\n",(0,t.jsxs)(n.h2,{id:"data-自定义变量",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#data-自定义变量",children:"#"}),"data: 自定义变量"]}),"\n",(0,t.jsx)(n.p,{children:"示例："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",meta:"",children:"<script>\r\nexport default {\r\n  name: \"test\",\r\n  data(){\r\n    return {\r\n        example1: '',\r\n        example2: [],\r\n        example3: {}\r\n    }\r\n  },\r\n}\r\n<\/script>\r\n\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"methods-自定义函数",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#methods-自定义函数",children:"#"}),"methods: 自定义函数"]}),"\n",(0,t.jsx)(n.p,{children:"示例："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",meta:"",children:"\r\n<script>\r\nexport default {\r\n  name: \"test\",\r\n  data(){\r\n    return {\r\n        example1: '',\r\n        example2: [],\r\n        example3: {}\r\n    }\r\n  },\r\n  methods: {\r\n    // es6写法\r\n    functionName(){\r\n        \r\n    },\r\n    // es5写法\r\n    function functionName(){\r\n        \r\n    }\r\n  }\r\n}\r\n<\/script>\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"components-自定义组件",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#components-自定义组件",children:"#"}),"components: 自定义组件"]}),"\n",(0,t.jsx)(n.p,{children:"示例："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",meta:"",children:"<template>\r\n    <div>\r\n    	<compName></compName>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    import compName from './component.vue'\r\nexport default {\r\n  name: \"test\",\r\n    components: {\r\n        compName, // 直接注册\r\n        compName: () => import('./component.vue') // 异步注册\r\n    },\r\n}\r\n<\/script>\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"computed-计算属性",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#computed-计算属性",children:"#"}),"computed: 计算属性"]}),"\n",(0,t.jsx)(n.p,{children:"示例："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:"",children:"<template>\r\n    <div>\r\n    	{{ example }}\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n   \r\n    export default {\r\n        name: \"test\",\r\n        data(){\r\n            return {\r\n                example1: '',\r\n            }\r\n        },\r\n        computed: {\r\n            example(){\r\n            	// 当this.example 发生变化 此计算属性会重新进行计算\r\n                let res = this.example1\r\n            	return res\r\n            }\r\n        },\r\n    }\r\n<\/script>\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"watch-计算属性",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#watch-计算属性",children:"#"}),"watch: 计算属性"]}),"\n",(0,t.jsx)(n.p,{children:"示例："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{meta:"",children:"<script>\r\n   \r\n    export default {\r\n        name: \"test\",\r\n        data(){\r\n            return {\r\n                example: '',\r\n            }\r\n        },\r\n        watch: {\r\n            example(newvalue, oldvalue){\r\n            	// 执行的函数\r\n            }\r\n        },\r\n    }\r\n<\/script>\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:"",children:"// 三种形式\r\nprops: ['title', 'likes', 'isPublished', 'commentIds', 'author']\r\nprops: {\r\n  title: String,\r\n  likes: Number,\r\n  isPublished: Boolean,\r\n  commentIds: Array,\r\n  author: Object,\r\n  callback: Function,\r\n  contactsPromise: Promise // or any other constructor\r\n}\r\nprops: {\r\n    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)\r\n    propA: Number,\r\n    // 多个可能的类型\r\n    propB: [String, Number],\r\n    // 必填的字符串\r\n    propC: {\r\n      type: String,\r\n      required: true\r\n    },\r\n    // 带有默认值的数字\r\n    propD: {\r\n      type: Number,\r\n      default: 100\r\n    },\r\n    // 带有默认值的对象\r\n    propE: {\r\n      type: Object,\r\n      // 对象或数组默认值必须从一个工厂函数获取\r\n      default: function () {\r\n        return { message: 'hello' }\r\n      }\r\n    },\r\n    // 自定义验证函数\r\n    propF: {\r\n      validator: function (value) {\r\n        // 这个值必须匹配下列字符串中的一个\r\n        return ['success', 'warning', 'danger'].indexOf(value) !== -1\r\n      }\r\n    }\r\n  }\n"})})]})}function c(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.ah)(),r.components);return n?(0,t.jsx)(n,Object.assign({},r,{children:(0,t.jsx)(s,r)})):s(r)}let d=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["formwork%2Fvue%2Fvue-slsx.md"]={toc:[{id:"data-自定义变量",text:"data: 自定义变量",depth:2},{id:"methods-自定义函数",text:"methods: 自定义函数",depth:2},{id:"components-自定义组件",text:"components: 自定义组件",depth:2},{id:"computed-计算属性",text:"computed: 计算属性",depth:2},{id:"watch-计算属性",text:"watch: 计算属性",depth:2}],title:"vue实例属性",headingTitle:"vue实例属性",frontmatter:{}}}}]);