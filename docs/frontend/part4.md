:::tip 来源
本文整理自 [SegmentFault · 【笔记】重学前端-winter](https://segmentfault.com/a/1190000018238345)
:::

# JavaScript 类型：你不知道的细节

1.开篇winter提出了几个问题，测试是否了解js类型
为什么有的编程规范要求用 void 0 代替 undefined
字符串有最大长度吗？
0.1 + 0.2 不是等于 0.3 么？为什么JavaScript 里不是这样的？
ES6 新加入的 Symbol 是个什么东西？
为什么给对象添加的方法能用在基本类型上？

2.js七种基本类型
1)Undefined
定义：是全局对象的一个属性
**什么时候值为Undefined：**
1.任何变量在赋值前是 Undefined 类型、值为 Undefined
2.或使用void 运算来把任一一个表达式变成 undefined 值
3.函数不定义return返回值时，函数返回undefined
**判断一个值是否为Undefined**

```
全等，不能用==： == undefined 会检查x是不是null
if (x === undefined)
typeof x === 'undefined'
x === void 0
```

**为什么有的编程规范要求用 void 0 代替 undefined：**
js中undefined 是一个变量，而并非是一个关键字，避免无意中被篡改，我建议使用 void 0 来获取 **Undefined 跟 null 的区别**
2)Null
null 是 JavaScript 关键字
Null 类型也只有一个值，就是 null，它的语义表示空值
可以放心用 null 关键字来获取 null 值
3)Boolean
4)String
**长度：**最大长度是 2^53 - 1
字符串的编码长度影响，我们字符串的操作 charAt、charCodeAt、length 等方法针对的都是 UTF16 编码，所以处理非 BMP（超出 U+0000 - U+FFFF 范围）要谨慎
（补充： 字符是以 Unicode 的方式表示的，每一个 Unicode 的码点表示一个字符，UTF 是 Unicode 的编码方式，规定了码点在计算机中的表示方法，常见的有 UTF16 和 UTF8）
JavaScript 中的字符串是永远无法变更的，字符串具有值类型的特征。

5)Number
**范围：**
Number 类型有 18437736874454810627(即 2^64-2^53+3) 个值
**基本符合 IEEE 754-2008 规定的双精度浮点数规则**
**为了表达几个额外的语言场景，规定了几个例外情况**
1.NaN，占用了 9007199254740990，这原本是符合 IEEE 规则的数字
2.Infinity，无穷大；
3.-Infinity，负无穷大。
**JavaScript 中有 +0 和 -0**
注意除法：“忘记检测除以 -0，而得到负无穷大”
区分 +0 和 -0 的方式，正是检测 1/x 是 Infinity 还是  -Infinity
**Number 类型中有效的整数范围是** -0x1fffffffffffff 至 0x1fffffffffffff
**浮点数非整数的 Number 类型无法用 ==（=== 也不行）**
原因：有些小数以二进制表示位数是无穷的

```
十进制           二进制
    0.1              0.0001 1001 1001 1001 ...
    0.2              0.0011 0011 0011 0011 ...
    0.3              0.0100 1100 1100 1100 ...
    0.4              0.0110 0110 0110 0110 ...
    0.5              0.1
    0.6              0.1001 1001 1001 1001 ...
```

现象：

```js
console.log(1.0-0.9 == 0.1)    //false
console.log(1.0-0.8 == 0.2)    //false
console.log(1.0-0.7 == 0.3)    //false
console.log(1.0-0.6 == 0.4)    //true
console.log(1.0-0.5 == 0.5)    //true
console.log(1.0-0.4 == 0.6)    //true
```

解决：

```js
1.console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);
2.((0.3*1000)-(0.2*1000))/1000 = 0.1
3. 在判断浮点运算结果前对计算结果进行精度缩小，因为在精度缩小的过程总会自动四舍五入
console.log(parseFloat((1.0-0.9).toFixed(10)) === 0.1)   //true
```

6)Symbol
7)Object
