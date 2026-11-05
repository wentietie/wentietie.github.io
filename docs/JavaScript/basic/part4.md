:::tip 来源
本文整理自 [前端知识体库 · 重学js](https://wuzaofeng.github.io/learning/javascript/deep/)
:::

# this、闭包与参数传递

## this
### 从ECMAScript规范

判断this

1. 计算 `MemberExpression` 的结果赋值给 `ref` `MemberExpression` 左边表达式
2. 判断 `ref` 是不是一个 `Reference` 类型。

2.1 如果 ref 是 Reference，并且 IsPropertyReference(ref) 是 true, 那么 this 的值为 GetBase(ref)

2.2 如果 ref 是 Reference，并且 base value 值是 Environment Record, 那么this的值为 ImplicitThisValue(ref)

2.3 如果 ref 不是 Reference，那么 this 的值为 undefined

由于不是严格模式，this如果是undefined，会指向全局对象window

[JavaScript深入之从ECMAScript规范解读this](https://github.com/mqyqingfeng/Blog/issues/7)

### 常规理解

this就是最后调用他的函数，

1. 直接调用 window （window 绑定）
2. 对象调用指向对象 （隐式绑定）
3. new 调用指向实例 （new 绑定）
4. 可以通过call， apply, bind改变（显式绑定）

```js
1. 查看函数在哪被调用。
2. 左侧有没有对象？如果有，它就是 “this” 的引用。如果没有，继续第 3 步。
3. 该函数是不是用 “call”、“apply” 或者 “bind” 调用的？如果是，它会显式地指明 “this” 的引用。如果不是，继续第 4 步。
4. 该函数是不是用 “new” 调用的？如果是，“this” 指向的就是 JavaScript 解释器新创建的对象。如果不是，继续第 5 步。
5. 是否在“严格模式”下？如果是，“this” 就是 undefined，如果不是，继续第 6 步。
6. JavaScript 很奇怪，“this” 会指向 “window” 对象。
```

## 闭包
指那些能够访问**自由变量**的函数

1. 创建它的执行上下文被销毁了，但它仍然存在（比如内部函数从父函数返回过来）
2. 在代码中引用了自由变量

因为闭包能访问以及销毁它但执行上下文访问到变量。而这个变量是无法被销毁的，存储在内存中。

## 参数按值传递
参数传递都是按值来传递的，但是js中有分`基本类型和引用类型`，所说的值传递是指栈中的值拷贝

基本类型是存储在栈内存中，但引用类型是将引用地址存在栈内存中，而数据存在堆内存中
