"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["3310"],{74364:function(e,r,n){n.r(r),n.d(r,{default:function(){return t}});var s=n(85893),a=n(50065);function d(e){let r=Object.assign({h1:"h1",a:"a",h2:"h2",pre:"pre",code:"code",h3:"h3",p:"p"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"webpack-基础",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack-基础",children:"#"}),"webpack 基础"]}),"\n",(0,s.jsxs)(r.h2,{id:"基本配置",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#基本配置",children:"#"}),"基本配置"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",meta:"",children:"/* \r\nwebpack的配置文件 \r\n\r\n作用：指示webpack干哪些活（当你运行webpack指令时，会加载里面的配置）\r\n配置文件默认叫webpack.config.js，如果不想叫这个名字，可以通过--config指定配置文件名\r\n所有构建工具都是基于nodejs平台运行的～模块化默认采用commonjs。\r\n*/\r\n\r\n/resolve用来拼接绝对路径的方法9\r\n\r\nconst resolve = require('path');\r\n\r\nmodule.exports = {\r\n  // 入口：指定webpack打包入口文件\r\n  entry: './src/index.js',\r\n\r\n  // 输出：指定webpack打包输出相关配置\r\n  output: {\r\n    // 输出文件存放路径\r\n    path: resolve(__dirname, 'dist'),\r\n    // 输出文件名称\r\n    filename: 'bundle.js'\r\n  },\r\n\r\n  // 模块：用于加载非js模块\r\n  module: {\r\n    rules: [\r\n      // 每一个规则都是一个对象，对象中属性有：test、use\r\n      // test：匹配文件的正则表达式\r\n      // use：指定要使用的loader \r\n      // loader执行顺序 从右到左 从下到上\r\n      {\r\n        test: /\\.css$/, use: [\r\n          // 创建style标签，将js中的样式资源添加到head中\r\n          'style-loader',\r\n          // 将css文件变成commonjs模块加载到js中，内容是样式字符串\r\n          'css-loader'\r\n        ]\r\n      },\r\n      {test: /\\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},\r\n      {test: /\\.jpg|png|gif$/, use: 'url-loader?limit=4kb'},\r\n      {test: /\\.js$/, use: 'babel-loader', exclude: /node_modules/}\r\n    ]\r\n  },\r\n\r\n  // 插件：用于执行范围更广的任务，比如：打包优化、资源管理和环境变量注入\r\n  plugins: [],\r\n\r\n  // 解析模块规则\r\n  resolve: {\r\n    // 配置别名\r\n    alias: {\r\n      $css: resolve(__dirname, 'src/css')\r\n    },\r\n\r\n    // 配置省略后缀名\r\n    extensions: ['.js', '.css', '.json']\r\n  },\r\n\r\n  // 模式：development | production\r\n  mode: 'development',\r\n\r\n  // 开发服务器：用于快速开发，代码修改后自动刷新\r\n  devServer: {\r\n    contentBase: resolve(__dirname, 'dist'), // 服务器目录\r\n    compress: true, // 启用gzip压缩\r\n    port: 3000 // 端口号\r\n  },\r\n\r\n}\r\n\r\n\n"})}),"\n",(0,s.jsxs)(r.h2,{id:"webpack-打包html",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack-打包html",children:"#"}),"webpack 打包HTML"]}),"\n",(0,s.jsxs)(r.h2,{id:"webpack-开发优化",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack-开发优化",children:"#"}),"webpack 开发优化"]}),"\n",(0,s.jsxs)(r.h3,{id:"pwa-离线加载",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#pwa-离线加载",children:"#"}),"PWA 离线加载"]}),"\n",(0,s.jsxs)(r.h3,{id:"tree-shaking",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#tree-shaking",children:"#"}),"Tree Shaking"]}),"\n",(0,s.jsxs)(r.h3,{id:"代码分割",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#代码分割",children:"#"}),"代码分割"]}),"\n",(0,s.jsxs)(r.h3,{id:"懒加载",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#懒加载",children:"#"}),"懒加载"]}),"\n",(0,s.jsxs)(r.h3,{id:"多进程打包",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#多进程打包",children:"#"}),"多进程打包"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"thread-loader"})}),"\n",(0,s.jsxs)(r.h3,{id:"externals",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#externals",children:"#"}),"externals"]}),"\n",(0,s.jsx)(r.p,{children:"忽略需要打包到bundle中的库，通过cdn引入"}),"\n",(0,s.jsxs)(r.h3,{id:"dll",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#dll",children:"#"}),"dll"]})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,a.ah)(),e.components);return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}let t=h;h.__RSPRESS_PAGE_META={},h.__RSPRESS_PAGE_META["gongjushu%2Fwebpack%2Fwp1.md"]={toc:[{id:"基本配置",text:"基本配置",depth:2},{id:"webpack-打包html",text:"webpack 打包HTML",depth:2},{id:"webpack-开发优化",text:"webpack 开发优化",depth:2},{id:"pwa-离线加载",text:"PWA 离线加载",depth:3},{id:"tree-shaking",text:"Tree Shaking",depth:3},{id:"代码分割",text:"代码分割",depth:3},{id:"懒加载",text:"懒加载",depth:3},{id:"多进程打包",text:"多进程打包",depth:3},{id:"externals",text:"externals",depth:3},{id:"dll",text:"dll",depth:3}],title:"webpack 基础",headingTitle:"webpack 基础",frontmatter:{}}}}]);