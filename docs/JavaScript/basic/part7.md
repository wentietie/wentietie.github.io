:::tip 来源
本文整理自 [前端知识体库 · 重学js](https://wuzaofeng.github.io/learning/javascript/deep/)
:::

# 模块机制

## 模块
### AMD 与 CMD 区别

1. 写法上的区别，AMD推崇依赖前置, CMD 推崇依赖就近
2. 加载时机: AMD 是提前执行，CMD 是延迟执行

### CommonJS 与 AMD区别

CommonJS 规范加载模块是同步的, Node.js 主要用于**服务器编程**，模块文件一般都已经**存在于本地硬盘**，所以**加载起来比较快**，不用考虑非同步加载的方式

如果是**浏览器环境**，要从**服务器端加载模块**，这时就必须采用非同步模式，因此浏览器端一般采用 AMD 规范

### ES6 与 CommonJS

1. CommonJS是值的拷贝， es6是值的动态引用，不会缓存值
2. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口

因为 CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成
