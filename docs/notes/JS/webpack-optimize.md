# WEBPACK 常用优化技巧

## 分析打包数据

- friendly-errors-webpack-plugins 插件可以在打包过程中输出错误、警告等信息，并且可以生成一个包含打包数据的报告。
- webpack-bundle-analyzer 插件可以生成一个包含打包数据的报告，并以可视化的方式展示出来。
- speed-measure-webpack-plugin 插件可以测量各个插件和loader的耗时，从而帮助优化构建过程。
- webpack-chart 插件可以生成一个包含打包数据的图表，从而帮助优化构建过程。
- webpack-dashboard 插件可以生成一个包含打包数据的仪表盘，从而帮助优化构建过程。
- webpack-visualizer 插件可以生成一个包含打包数据的可视化视图，从而帮助优化构建过程。

## 构建时间优化

### thread-loader

多进程打包，可以大大提高构建的速度，使用方法是将thread-loader放在比较费时间的loader之前，比如babel-loader

:::tip 建议
由于启动项目和打包项目都需要加速，所以配置在webpack.base.js
:::

```shell
npm i thread-loader -D
```

```js
// webpack.base.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'thread-loader',
          'babel-loader'
        ],
      }
    ],
  },
};
```

### cache-loader

缓存资源，提高二次构建的速度，使用方法是将cache-loader放在比较费时间的loader之前，比如babel-loader

:::tip 建议
由于启动项目和打包项目都需要加速，所以配置在webpack.base.js
:::

```shell
npm i cache-loader -D
```

```js
// webpack.base.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'cache-loader',
          'thread-loader',
          'babel-loader'
        ],
      },
    ],
  },
};
```

### 开启热更新

比如你修改了项目中某一个文件，会导致整个项目刷新，这非常耗时间。如果只刷新修改的这个模块，其他保持原状，那将大大提高修改代码的重新构建时间

:::tip 建议
只用于开发中，所以配置在webpack.dev.js。
全部配置参考[HMR模块中文文档](https://www.webpackjs.com/guides/hot-module-replacement/)
:::

```js
// webpack.dev.js

//引入webpack
const webpack = require('webpack');

module.exports = {
  //使用webpack提供的热更新插件
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  //最后需要在我们的devserver中配置
  devServer: {
    hot: true
  },
};
```

#### 其他代码和框架

社区还提供许多其他 loader 和示例，可以使 HMR 与各种框架和库平滑地进行交互……

- **[React Hot Loader](https://github.com/gaearon/react-hot-loader)**: 实时调整 react 组件。
- **[Vue Loader](https://github.com/vuejs/vue-loader)**: 此 loader 支持 vue 组件的 HMR，提供开箱即用体验。
- **[Elm Hot webpack Loader](https://github.com/klazuka/elm-hot-webpack-loader)**: 支持 Elm 编程语言的 HMR。
- **[Angular HMR](https://github.com/gdi2290/angular-hmr)**: 没有必要使用 loader！直接修改 NgModule 主文件就够了，它可以完全控制
  HMR API。
- **[Svelte Loader](https://github.com/sveltejs/svelte-loader)**: 此 loader 开箱即用地支持 Svelte 组件的热更新。

### exclude & include

- exclude：不需要处理的文件
- include：需要处理的文件
  合理设置这两个属性，可以大大提高构建速度

:::tip 建议
由于启动项目和打包项目都需要加速，所以配置在webpack.base.js
:::

```js
// webpack.base.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        //使用include来指定编译文件夹
        include: path.resolve(__dirname, '../src'),
        //使用exclude排除指定文件夹
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
    ],
  },
};
```

### 构建区分环境

区分环境去构建是非常重要的，我们要明确知道，开发环境时我们需要哪些配置，不需要哪些配置；而最终打包生产环境时又需要哪些配置，不需要哪些配置：

- 开发环境：去除代码压缩、gzip、体积分析等优化的配置，大大提高构建速度
- 生产环境：需要代码压缩、gzip、体积分析等优化的配置，大大降低最终项目打包体积

### 提升webpack版本

webpack版本越新，打包的效果肯定更好

## 打包体积优化

### CSS代码压缩

CSS代码压缩使用css-minimizer-webpack-plugin，效果包括压缩、去重

:::tip 建议
代码的压缩比较耗时间，所以只用在打包项目时，所以只需要在webpack.prod.js中配置
:::

```shell
npm i css-minimizer-webpack-plugin -D
```

```js
// webpack.base.js
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
module.exports = {
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), // 去重压缩css
    ],
  }
};
```

### JS代码压缩

JS代码压缩使用terser-webpack-plugin，实现打包后JS代码的压缩

:::tip 建议
代码的压缩比较耗时间，所以只用在打包项目时，所以只需要在webpack.prod.js中配置
:::

```shell
npm i terser-webpack-plugin -D
```

```js
// webpack.base.js
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
module.exports = {
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), // 去重压缩css
      new TerserPlugin({ // 压缩JS代码
        terserOptions: {
          compress: {
            drop_console: true, // 去除console
          },
        },
      })
    ],
  }
};
```

### tree-shaking

tree-shaking简单说作用就是：只打包用到的代码，没用到的代码不打包，而webpack5默认开启tree-shaking，当打包的mode为production时，自动开启tree-shaking进行优化.

### source-map类型

source-map的作用是：方便你报错的时候能定位到错误代码的位置。它的体积不容小觑，所以对于不同环境设置不同的类型是很有必要的。

- **开发环境**

开发环境的时候我们需要能精准定位错误代码的位置

```js
module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map'
}
```

- **生产环境**

  生产环境，我们想开启source-map，但是又不想体积太大，那么可以换一种类型

```js
module.exports = {
  mode: 'production',
  devtool: 'nosources-source-map'
}
```

### 打包体积分析

使用webpack-bundle-analyzer可以审查打包后的体积分布，进而进行相应的体积优化
:::tip 建议
代码的压缩比较耗时间，所以只用在打包项目时，所以只需要在webpack.prod.js中配置
:::

```shell
npm i webpack-bundle-analyzer -D
```

```js
// webpack.base.js
const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer')

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin(),
  ]
};
```

## 用户体验优化

模块懒加载
如果不进行`模块懒加载`
的话，最后整个项目代码都会被打包到一个js文件里，单个js文件体积非常大，那么当用户网页请求的时候，首屏加载时间会比较长，使用`模块懒加载`
之后，大js文件会分成多个小js文件，网页加载时会按需加载，大大提升首屏加载速度

```js
// src/router/index.js

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    // 懒加载
    component: () => import('../views/home/home.vue'),
  },
]
```

### Gzip

开启Gzip后，大大提高用户的页面加载速度，因为gzip的体积比原文件小很多，当然需要后端的配合，使用compression-webpack-plugin
:::tip 建议
代码的压缩比较耗时间，所以只用在打包项目时，所以只需要在webpack.prod.js中配置
:::

```shell
npm i compression-webpack-plugin -D
```

```js
// webpack.base.js
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  plugins: [
    // 之前的代码...

    // gzip
    new CompressionPlugin({
      algorithm: 'gzip',
      threshold: 10240,
      minRatio: 0.8
    })
  ]
};
```

### 小图片转base64

对于一些小图片，可以转`
`，这样可以减少用户的http网络请求次数，提高用户的体验。webpack5中`url-loader`已被废弃，改用`asset-module`

:::tip 建议
在webpack.base.js中配置
:::

```js
// webpack.base.js

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        type: 'asset',
        parser: {
          // 转base64的条件
          dataUrlCondition: {
            maxSize: 25 * 1024, // 25kb
          }
        },
        generator: {
          // 打包到 image 文件下
          filename: 'images/[contenthash][ext][query]',
        },
      },
    ],
  },
};

```

### 合理配置hash

我们要保证，改过的文件需要更新hash值，而没改过的文件依然保持原本的hash值，这样才能保证在上线后，浏览器访问时没有改变的文件会命中缓存，从而达到性能优化的目的

:::tip 建议
在webpack.base.js中配置
:::

```js
module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    // 给js文件加上 contenthash
    filename: 'js/chunk-[contenthash].js',
    clean: true,
  },
};
```

