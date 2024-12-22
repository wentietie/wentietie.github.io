# webpack 基础

## 基本配置

```js
/* 
webpack的配置文件 

作用：指示webpack干哪些活（当你运行webpack指令时，会加载里面的配置）
配置文件默认叫webpack.config.js，如果不想叫这个名字，可以通过--config指定配置文件名
所有构建工具都是基于nodejs平台运行的～模块化默认采用commonjs。
*/

/resolve用来拼接绝对路径的方法9

const resolve = require('path');

module.exports = {
  // 入口：指定webpack打包入口文件
  entry: './src/index.js',

  // 输出：指定webpack打包输出相关配置
  output: {
    // 输出文件存放路径
    path: resolve(__dirname, 'dist'),
    // 输出文件名称
    filename: 'bundle.js'
  },

  // 模块：用于加载非js模块
  module: {
    rules: [
      // 每一个规则都是一个对象，对象中属性有：test、use
      // test：匹配文件的正则表达式
      // use：指定要使用的loader 
      // loader执行顺序 从右到左 从下到上
      {
        test: /\.css$/, use: [
          // 创建style标签，将js中的样式资源添加到head中
          'style-loader',
          // 将css文件变成commonjs模块加载到js中，内容是样式字符串
          'css-loader'
        ]
      },
      {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
      {test: /\.jpg|png|gif$/, use: 'url-loader?limit=4kb'},
      {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
    ]
  },

  // 插件：用于执行范围更广的任务，比如：打包优化、资源管理和环境变量注入
  plugins: [],

  // 解析模块规则
  resolve: {
    // 配置别名
    alias: {
      $css: resolve(__dirname, 'src/css')
    },

    // 配置省略后缀名
    extensions: ['.js', '.css', '.json']
  },

  // 模式：development | production
  mode: 'development',

  // 开发服务器：用于快速开发，代码修改后自动刷新
  devServer: {
    contentBase: resolve(__dirname, 'dist'), // 服务器目录
    compress: true, // 启用gzip压缩
    port: 3000 // 端口号
  },

}


```

## webpack 打包HTML

## webpack 开发优化

### PWA 离线加载

### Tree Shaking

### 代码分割

### 懒加载

### 多进程打包

`thread-loader`

### externals

忽略需要打包到bundle中的库，通过cdn引入

### dll
