# Commonjs、CMD、ESM和AMD

模块化的开发方式可以提供代码复用率，方便进行代码的管理。通常来说，**一个文件就是一个模块，有自己的作用域，只向外暴露特定的变量和函数**。目前流行的js模块化规范有CommonJS、AMD、CMD以及ES6的模块系统。

## CommonJS

NodeJS是CommonJS规范的主要实践者，它有四个重要的环境变量为模块化的实现提供支持：`module`、`exports`、`require`、`global`。实际使用时，用`module.exports`
定义当前模块对外输出的接口（不推荐直接用`exports`），用`require`加载模块。

```js
// 定义模块math.js
var basicNum = 0;

function add(a, b) {
    return a + b;
}

module.exports = { //在这里写上需要向外暴露的函数、变量
    add: add,
    basicNum: basicNum
}

/** 必须加./路径，不加的话只会去node_modules文件找 **/
// 引用自定义的模块时，参数包含路径，可省略.js
var math = require('./math');
math.add(2, 5);
```

CommonJS用同步的方式加载模块。**在服务端，模块文件都存放在本地磁盘，读取非常快，所以这样做不会有问题。但是在浏览器端，限于网络原因，更合理的方案是使用异步加载。**

:::tip exports和module.export区别：

- exports：对于本身来讲是一个变量（对象），它不是module的引用，它是`{}`的引用，它指向`module.exports`的{}模块。只能使用`.`语法 向外暴露变量。
- module.exports：`module`是一个变量，指向一块内存，`exports`是`module`中的一个属性，存储在内存中，然后`exports`属性指向`{}`模块。既可以使用`.`语法，也可以使用`=`直接赋值。

:::

## AMD和require.js

AMD规范采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。这里介绍用require.js实现AMD规范的模块化：用require.config()
指定引用路径等，用definde()定义模块，用require()加载模块。

首先我们需要引入require.js文件和一个入口文件main.js。main.js中配置require.config()并规定项目中用到的基础模块。

```js
/** 网页中引入require.js及main.js **/
<script src="js/require.js" data-main="js/main"></script>

/** main.js 入口文件/主模块 **/
// 首先用config()指定各模块路径和引用名
require.config({
    baseUrl: "js/lib",
    paths: {
        "jquery": "jquery.min",  //实际路径为js/lib/jquery.min.js
        "underscore": "underscore.min",
    }
});
// 执行基本操作
require(["jquery", "underscore"], function ($, _) {
    // some code here
});
```

引用模块的时候，我们将模块名放在[]中作为reqiure()的第一参数；如果我们定义的模块本身也依赖其他模块,那就需要将它们放在[]中作为define()的第一参数。

```js
// 定义math.js模块
define(function () {
    var basicNum = 0;
    var add = function (x, y) {
        return x + y;
    };
    return {
        add: add,
        basicNum: basicNum
    };
});

// 定义一个依赖underscore.js的模块
define(['underscore'], function (_) {
    var classify = function (list) {
        _.countBy(list, function (num) {
            return num > 30 ? 'old' : 'young';
        })
    };
    return {
        classify: classify
    };
})

// 引用模块，将模块放在[]内
require(['jquery', 'math'], function ($, math) {
    var sum = math.add(10, 20);
    $("#sum").html(sum);
});
```

## CMD和sea.js

CMD是另一种js模块化方案，它与AMD很类似，不同点在于：AMD推崇依赖前置、提前执行，CMD推崇依赖就近、延迟执行。此规范其实是在sea.js推广过程中产生的。

```js
/** AMD写法 **/
define(["a", "b", "c", "d", "e", "f"], function (a, b, c, d, e, f) {
    // 等于在最前面声明并初始化了要用到的所有模块
    a.doSomething();
    if (false) {
        // 即便没用到某个模块 b，但 b 还是提前执行了
        b.doSomething()
    }
});

/** CMD写法 **/
define(function (require, exports, module) {
    var a = require('./a'); //在需要时申明
    a.doSomething();
    if (false) {
        var b = require('./b');
        b.doSomething();
    }
});

/** sea.js **/
// 定义模块 math.js
define(function (require, exports, module) {
    var $ = require('jquery.js');
    var add = function (a, b) {
        return a + b;
    }
    exports.add = add;
});

// 加载模块
seajs.use(['math.js'], function (math) {
    var sum = math.add(1 + 2);
});
```

## ES6 Module

ES6
在语言标准的层面上，实现了模块功能，而且实现得相当简单，旨在成为浏览器和服务器通用的模块解决方案。其模块功能主要由两个命令构成：export和import。export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。

```js
/** 定义模块 math.js **/
var basicNum = 0;
var add = function (a, b) {
    return a + b;
};
export {basicNum, add};

/** 引用模块 **/
import {basicNum, add} from './math';

function test(ele) {
    ele.textContent = add(99 + basicNum);
}
```

:::tip ES6 模块的特征：

- 严格模式：ES6 的模块自动采用严格模式
- import read-only特性： import的属性是只读的，不能赋值，类似于const的特性
- export/import提升： import/export必须位于模块顶级，不能位于作用域内；其次对于模块内的import/export会提升到模块顶部，这是在编译阶段完成的
  
:::

## ES6 模块与 CommonJS 模块的差异

**1. CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用**。

- CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。
- ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令import，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。换句话说，ES6
  的import有点像 Unix 系统的“符号连接”，原始值变了，import加载的值也会跟着变。因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。

**2. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口**

- 运行时加载: CommonJS模块就是对象；即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。
- 编译时加载: ES6模块不是对象，而是通过export命令显式指定输出的代码，import时采用静态命令的形式。即在import时可以指定加载某个输出值，而不是加载整个模块，这种加载称为“编译时加载”。模块内部引用的变化，会反应在外部。

首先看个CommonJS输出拷贝的例子：
```js
// a.js
let a = 1;
let b = { num: 1 }
setTimeout(() => {
    a = 2;
    b = { num: 2 };
}, 200);
module.exports = {
    a,
    b,
};

// main.js
// node main.js
let {a, b} = require('./a');
console.log(a);  // 1
console.log(b);  // { num: 1 }
setTimeout(() => {
    console.log(a);  // 1
    console.log(b);  // { num: 1 }
}, 500);
```
所谓输出拷贝，如果了解过 NodeJS 或者 webpack 对 CommonJS 的实现（不了解可以看这篇文章），就会知道：exports对象是模块内外的唯一关联， CommonJS 输出的内容，就是exports对象的属性，模块运行结束，属性就确定了。
再看ES6 Module输出的例子：
```js
// a.mjs
let a = 1;
let b = { num: 1 }
setTimeout(() => {
    a = 2;
    b = { num: 2 };
}, 200);
export {
    a,
    b,
};

// main.mjs
// node --experimental-modules main.mjs
import {a, b} from './a';
console.log(a);  // 1
console.log(b);  // { num: 1 }
setTimeout(() => {
    console.log(a);  // 2
    console.log(b);  // { num: 2 }
}, 500);
```
以上就是 ES6 Module 输出引用和 CommonJS 输出值的区别，模块内部引用的变化，会反应在外部，这是 ES6 Module 的规范。

## 总结
1. AMD/CMD/CommonJs 是js模块化开发的规范，对应的实现是require.js/sea.js/Node.js
2. CommonJs 主要针对服务端，AMD/CMD/ES Module主要针对浏览器端，容易混淆的是AMD/CMD。（顺便提一下，针对服务器端和针对浏览器端有什么本质的区别呢？服务器端一般采用同步加载文件，也就是说需要某个模块，服务器端便停下来，等待它加载再执行。这里如果有其他后端语言，如java。而浏览器端要保证效率，需要采用异步加载，这就需要一个预处理，提前将所需要的模块文件并行加载好。）
3. AMD/CMD区别，虽然都是并行加载js文件，但还是有所区别，AMD是预加载，在并行加载js文件同时，还会解析执行该模块（因为还需要执行，所以在加载某个模块前，这个模块的依赖模块需要先加载完成）；而CMD是懒加载，虽然会一开始就并行加载js文件，但是不会执行，而是在需要的时候才执行。
4. AMD/CMD的优缺点.一个的优点就是另一个的缺点， 可以对照浏览。
   AMD优点：加载快速，尤其遇到多个大文件，因为并行解析，所以同一时间可以解析多个文件。
   AMD缺点：并行加载，异步处理，加载顺序不一定，可能会造成一些困扰，甚至为程序埋下大坑。 
   CMD优点：因为只有在使用的时候才会解析执行js文件，因此，每个JS文件的执行顺序在代码中是有体现的，是可控的。
   CMD缺点：执行等待时间会叠加。因为每个文件执行时是同步执行（串行执行），因此时间是所有文件解析执行时间之和，尤其在文件较多较大时，这种缺点尤为明显。（PS：重新看这篇文章，发现这里写的不是很准确。确切来说，JS是单线程，所有JS文件执行时间叠加在AMD和CMD中是一样的。但是CMD是使用时执行，没法利用空闲时间，而AMD是文件加载好就执行，往往可以利用一些空闲时间。这么来看，CMD比AMD的优点还是很明显的，毕竟AMD加载好的时候也未必就是JS引擎的空闲时间！）

5. CommonJS 和 ES Module 区别：CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。

6. 如何使用？CommonJs的话，因为NodeJS就是它的实现，所以使用node就行，也不用引入其他包。AMD则是通过script标签引入require.js，CMD则是引入sea.js
