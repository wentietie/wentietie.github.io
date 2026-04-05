# 第二部分 this和对象原型

## 1 关于this

### 1.1 为什么要用this

```js
function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = "Hello, I'm " + identify.call(this);
    console.log(greeting);
}

var me = {
    name: "Kyle"
};
var you = {
    name: "Reader"
};
identify.call(me); // KYLE
identify.call(you); // READER
speak.call(me); // Hello, 我是 KYLE
speak.call(you); // Hello, 我是 READER
```

这段代码可以在不同的上下文对象（me 和 you）中重复使用函数 identify() 和 speak()， 不用针对每个对象编写不同版本的函数。如果不使用 this，那就需要给 identify() 和 speak()
显式传入一个上下文对象

```js
function identify(context) {
    return context.name.toUpperCase();
}

function speak(context) {
    var greeting = "Hello, I'm " + identify(context);
    console.log(greeting);
}

identify(you); // READER
speak(me); //hello, 我是 KYLE
```

随着你的使用模式越来越复杂，显式传递上下文对象会让代码变得越来越混乱，使用 this则不会这样。当我们介绍对象和原型时，你就会明白函数可以自动引用合适的上下文对象有多重要。

### 1.2 误解

#### 1.2.1 指向自身

人们很容易把 this 理解成指向函数自身。那么为什么需要从函数内部引用函数自身呢？常见的原因是递归（从函数内部调用这个函数）或者可以写一个在第一次被调用后自己解除绑定的事件处理器。 JavaScript
的新手开发者通常会认为，既然函数看作一个对象（JavaScript
中的所有函数都是对象），那就可以在调用函数时存储状态（属性的值）。这是可行的，有些时候也确实有用，但是在本书即将介绍的许多模式中你会发现，除了函数对象还有许多更合适存储状态的地方。

不过现在我们先来分析一下这个模式，让大家看到 this 并不像我们所想的那样指向函数本身。

```js
function foo(num) {
    console.log("foo: " + num);
    // 记录 foo 被调用的次数
    this.count++;
}

foo.count = 0;
var i;
for (i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i);
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9
// foo 被调用了多少次？
console.log(foo.count); // 0 -- WTF?

```

console.log 语句产生了 4 条输出，证明 foo(..) 确实被调用了 4 次，但是 foo.count 仍然是 0。显然从字面意思来理解 this 是错误的。

执行 foo.count = 0 时，的确向函数对象 foo 添加了一个属性 count。但是函数内部代码this.count 中的 this 并不是指向那个函数对象，所以虽然属性名相同，根对象却并不相同，困惑随之产生。

如果要从函数对象内部引用它自身，那只使用 this 是不够的。一般来说你需要通过一个指向函数对象的词法标识符（变量）来引用它。

```js
function foo() {
    foo.count = 4; // foo 指向它自身
}

setTimeout(function () {
// 匿名（没有名字的）函数无法指向自身
}, 10)
```

:::warning 还有一种传统的但是现在已经被弃用和批判的用法，是使用 arguments.callee
来引用当前正在运行的函数对象。这是唯一一种可以从匿名函数对象内部引用自身的方法。然而，更好的方式是避免使用匿名函数，至少在需要自引用时使用具名函数（表达式）。arguments.callee 已经被弃用，不应该再使用它。
:::
一种解决方法是使用 foo 标识符替代 this 来引用函数对象：

```js
function foo(num) {
    console.log("foo: " + num);
// 记录 foo 被调用的次数
    foo.count++;
}

foo.count = 0
var i;
for (i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i);
    }
}

// foo: 6
// foo: 7
// foo: 8
// foo: 9
// foo 被调用了多少次？
console.log(foo.count); // 4
```

然而，这种方法同样回避了 this 的问题，并且完全依赖于变量 foo 的词法作用域。另一种方法是强制 this 指向 foo 函数对象：

```js
function foo(num) {
    console.log("foo: " + num);
// 记录 foo 被调用的次数
// 注意，在当前的调用方式下（参见下方代码），this 确实指向 foo
    this.count++;
}

foo.count = 0;
var i;
for (i = 0; i < 10; i++) {
    if (i > 5) {
        // 使用 call(..) 可以确保 this 指向函数对象 foo 本身
        foo.call(foo, i);
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9
// foo 被调用了多少次？
console.log(foo.count); // 4
```

#### 1.2.2 它的作用域

第二种常见的误解是，this 指向函数的作用域。需要明确的是，this 在任何情况下都不指向函数的词法作用域。在 JavaScript 内部，作用域确实和对象类似，可见的标识符都是它的属性。但是作用域“对象”无法通过
JavaScript代码访问，它存在于 JavaScript 引擎内部。

思考一下下面的代码，它试图（但是没有成功）跨越边界，使用 this 来隐式引用函数的词法作用域：

```js
function foo() {
    var a = 2;
    this.bar();
}

function bar() {
    console.log(this.a);
}

foo(); // ReferenceError: a is not defined
```

首先，这段代码试图通过 this.bar() 来引用 bar() 函数。这是绝对不可能成功的，我们之后会解释原因。调用 bar() 最自然的方法是省略前面的 this，直接使用词法引用标识符。

此外，编写这段代码的开发者还试图使用 this 联通 foo() 和 bar() 的词法作用域，从而让bar() 可以访问 foo() 作用域里的变量 a。这是不可能实现的，你不能使用 this 来引用一个词法作用域内部的东西。

### 1.3 this到底是什么

this 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调用时的各种条件。this
的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。当一个函数被调用时，会创建一个活动记录（有时候也称为执行上下文）。这个记录会包含函数在哪里被调用（调用栈）、函数的调用方法、传入的参数等信息。this
就是记录的其中一个属性，会在函数执行的过程中用到。

**总而言之，this 实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。**

## 2 this 全面解析

### 2.1 调用位置

在理解 this 的绑定过程之前，首先要理解调用位置：调用位置就是函数在代码中被调用的位置（而不是声明的位置）。只有仔细分析调用位置才能回答这个问题：这个 this 到底引用的是什么？

通常来说，寻找调用位置就是寻找“函数被调用的位置”，但是做起来并没有这么简单，因为某些编程模式可能会隐藏真正的调用位置。

最重要的是要分析调用栈（就是为了到达当前执行位置所调用的所有函数）。我们关心的调用位置就在当前正在执行的函数的前一个调用中。

下面我们来看看到底什么是调用栈和调用位置：

```js
function baz() {
// 当前调用栈是：baz
// 因此，当前调用位置是全局作用域
    console.log("baz");
    bar(); // <-- bar 的调用位置
}

function bar() {
// 当前调用栈是 baz -> bar
// 因此，当前调用位置在 baz 中
    console.log("bar");
    foo(); // <-- foo 的调用位置
}

function foo() {
// 当前调用栈是 baz -> bar -> foo
// 因此，当前调用位置在 bar 中
    console.log("foo");
}

baz(); // <-- baz 的调用位置
```

**注意我们是如何（从调用栈中）分析出真正的调用位置的，因为它决定了 this 的绑定**
:::tip 你可以把调用栈想象成一个函数调用链，就像我们在前面代码段的注释中所写的一样。但是这种方法非常麻烦并且容易出错。

另一个查看调用栈的方法是使用浏览器的调试工具。绝大多数现代桌面浏览器都内置了开发者工具，其中包含 JavaScript 调试器。就本例来说，你可以在工具中给 foo() 函数的第一行代码设置一个断点，或者直接在第一行代码之前插入一条
debugger;语句。运行代码时，调试器会在那个位置暂停，同时会展示当前位置的函数调用列表，这就是你的调用栈。因此，如果你想要分析 this 的绑定，使用开发者工具得到调用栈，然后找到栈中第二个元素，这就是真正的调用位置。
:::

### 2.2 绑定规则

#### 2.2.1 默认绑定

首先要介绍的是最常用的函数调用类型：独立函数调用。可以把这条规则看作是无法应用其他规则时的默认规则。

```js
function foo() {
    console.log(this.a);
}

var a = 2;
foo(); // 2
```

你应该注意到的第一件事是，声明在全局作用域中的变量（比如 var a = 2）就是全局对象的一个同名属性。它们本质上就是同一个东西，并不是通过复制得到的。

接下来我们可以看到当调用 foo() 时，this.a 被解析成了全局变量 a。为什么？因为在本例中，函数调用时应用了 this 的默认绑定，因此 this 指向全局对象。

那么我们怎么知道这里应用了默认绑定呢？可以通过分析调用位置来看看 foo() 是如何调用的。在代码中，foo() 是直接使用不带任何修饰的函数引用进行调用的，因此只能使用默认绑定，无法应用其他规则。

**如果使用严格模式（strict mode），那么全局对象将无法使用默认绑定，因此 this 会绑定到 undefined**

#### 2.2.2 隐式绑定

另一条需要考虑的规则是调用位置是否有上下文对象，或者说是否被某个对象拥有或者包含，不过这种说法可能会造成一些误导。

```js
function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo
};
obj.foo(); // 2
```

首先需要注意的是 foo() 的声明方式，及其之后是如何被当作引用属性添加到 obj 中的。但是无论是直接在 obj 中定义还是先定义再添加为引用属性，这个函数严格来说都不属于obj 对象。

然而，调用位置会使用 obj 上下文来引用函数，因此你可以说函数被调用时 obj 对象“拥有”或者“包含”它。

无论你如何称呼这个模式，当 foo() 被调用时，它的落脚点确实指向 obj 对象。当函数引用有上下文对象时，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象。因为调用 foo() 时 this 被绑定到 obj，因此
this.a 和 obj.a 是一样的。

对象属性引用链中只有最顶层或者说最后一层会影响调用位置。举例来说：

```js
function foo() {
    console.log(this.a);
}

var obj2 = {
    a: 42,
    foo: foo
};
var obj1 = {
    a: 2,
    obj2: obj2
};
obj1.obj2.foo(); // 42
```

##### **隐式丢失**

一个最常见的 this 绑定问题就是被隐式绑定的函数会丢失绑定对象，也就是说它会应用默认绑定，从而把 this 绑定到全局对象或者 undefined 上，取决于是否是严格模式。

```js
function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo
};
var bar = obj.foo; // 函数别名！
var a = "oops, global"; // a 是全局对象的属性
bar(); // "oops, global"

```

虽然 bar 是 obj.foo 的一个引用，但是实际上，它引用的是 foo 函数本身，因此此时的bar() 其实是一个不带任何修饰的函数调用，因此应用了默认绑定。

```js
function foo() {
    console.log(this.a);
}

function doFoo(fn) {
// fn 其实引用的是 foo
    fn(); // <-- 调用位置！
}

var obj = {
    a: 2,
    foo: foo
};
var a = "oops, global"; // a 是全局对象的属性
doFoo(obj.foo); // "oops, global"
```

#### 2.2.3 显式绑定

```js
function foo() {
    console.log(this.a);
}

var obj = {
    a: 2
};
foo.call(obj); // 2
```

#### 2.2.4 new绑定

在传统的面向类的语言中，“构造函数”是类中的一些特殊方法，使用 new 初始化类时会调用类中的构造函数。通常的形式是这样的： something = new MyClass(..);JavaScript 也有一个 new
操作符，使用方法看起来也和那些面向类的语言一样，绝大多数开 发者都认为 JavaScript 中 new 的机制也和那些语言一样。然而，JavaScript 中 new 的机制实 际上和面向类的语言完全不同。

在 JavaScript 中，构造函数只是一些 使用 new 操作符时被调用的函数。它们并不会属于某个类，也不会实例化一个类。实际上， 它们甚至都不能说是一种特殊的函数类型，它们只是被 new
操作符调用的普通函数而已。包括内置对象函数（比如 Number(..)，详情请查看第 3 章）在内的所有函数都可 以用 new 来调用，这种函数调用被称为构造函数调用。

这里有一个重要但是非常细微的区别：实际上并不存在所谓的“构造函数”，只有对于函数的“构造调用”

使用 new 来调用函数，或者说发生构造函数调用时，会自动执行下面的操作。

1. 创建（或者说构造）一个全新的对象。
2. 这个新对象会被执行 "原型" 连接。
3. 这个新对象会绑定到函数调用的 this。
4. 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。

```js
function foo(a) {
    this.a = a;
}

var bar = new foo(2);
console.log(bar.a); // 2
```

使用 new 来调用 foo(..) 时，我们会构造一个新对象并把它绑定到 foo(..) 调用中的 this上。new 是最后一种可以影响函数调用时 this 绑定行为的方法，我们称之为 new 绑定。

### 2.3 优先级

现在我们已经了解了函数调用中 this 绑定的四条规则，你需要做的就是找到函数的调用位置并判断应当应用哪条规则。但是，如果某个调用位置可以应用多条规则该怎么办？为了解决这个问题就必须给这些规则设定优先级。
隐式绑定和显式绑定哪个优先级更高？我们来测试一下：

```js
function foo() {
    console.log(this.a);
}

var obj1 = {
    a: 2,
    foo: foo
};
var obj2 = {
    a: 3,
    foo: foo
};
obj1.foo(); // 2
obj2.foo(); // 3
obj1.foo.call(obj2); // 3
obj2.foo.call(obj1); // 2
```

可以看到，显式绑定优先级更高，也就是说在判断时应当先考虑是否可以应用显式绑定。

:::warning  
new 和 call/apply 无法一起使用，因此无法通过 new foo.call(obj1) 来直接 进行测试。但是我们可以使用硬绑定来测试它俩的优先级。
:::

在看代码之前先回忆一下硬绑定是如何工作的。Function.prototype.bind(..) 会创建一个 新的包装函数，这个函数会忽略它当前的 this 绑定（无论绑定的对象是什么），并把我们 提供的对象绑定到 this 上。
这样看起来硬绑定（也是显式绑定的一种）似乎比 new 绑定的优先级更高，无法使用 new 来控制 this 绑定。

```js
function foo(something) {
    this.a = something;
}

var obj1 = {};
var bar = foo.bind(obj1);
bar(2);
console.log(obj1.a); // 2
var baz = new bar(3);
console.log(obj1.a); // 2
console.log(baz.a); // 3
```

**判断this**
现在我们可以根据优先级来判断函数在某个调用位置应用的是哪条规则。可以按照下面的 顺序来进行判断：

1. 函数是否在 new 中调用（new 绑定）？如果是的话 this 绑定的是新创建的对象。 var bar = new foo()
2. 函数是否通过 call、apply（显式绑定）或者硬绑定调用？如果是的话，this 绑定的是 指定的对象。 var bar = foo.call(obj2)
3. 函数是否在某个上下文对象中调用（隐式绑定）？如果是的话，this 绑定的是那个上 下文对象。 var bar = obj1.foo()
4. 如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到 undefined，否则绑定到 全局对象。 var bar = foo()
   就是这样。对于正常的函数调用来说，理解了这些知识你就可以明白 this 的绑定原理了。 不过……凡事总有例外。

### 2.4 绑定例外

#### 2.4.1 被忽略的this

如果你把 null 或者 undefined 作为 this 的绑定对象传入 call、apply 或者 bind，这些值 在调用时会被忽略，实际应用的是默认绑定规则，那么什么情况下你会传入 null 呢？ 一种非常常见的做法是使用
apply(..) 来“展开”一个数组，并当作参数传入一个函数。 类似地，bind(..) 可以对参数进行柯里化（预先设置一些参数），这种方法有时非常有用

```js
function foo(a, b) {
    console.log("a:" + a + ", b:" + b);
}

// 把数组“展开”成参数
foo.apply(null, [2, 3]); // a:2, b:3
// 使用 bind(..) 进行柯里化
var bar = foo.bind(null, 2);
bar(3); // a:2, b:3
```

这两种方法都需要传入一个参数当作 this 的绑定对象。如果函数并不关心 this 的话，你 仍然需要传入一个占位值，这时 null 可能是一个不错的选择，就像代码所示的那样。
:::tip 尽管本书中未提到，但在 ES6 中，可以用 ... 操作符代替 apply(..) 来“展 开”数组，foo(...[1,2]) 和 foo(1,2) 是一样的，这样可以避免不必要的 this 绑定。可惜，在 ES6
中没有柯里化的相关语法，因此还是需要使用 bind(..)。
:::
然而，总是使用 null 来忽略 this 绑定可能产生一些副作用。如果某个函数确实使用了 this（比如第三方库中的一个函数），那默认绑定规则会把 this 绑定到全局对象（在浏览 器中这个对象是
window），这将导致不可预计的后果（比如修改全局对象）。 显而易见，这种方式可能会导致许多难以分析和追踪的 bug。

**更安全的this**

一种“更安全”的做法是传入一个特殊的对象，把 this 绑定到这个对象不会对你的程序 产生任何副作用。就像网络（以及军队）一样，我们可以创建一个“DMZ”（demilitarized
zone，非军事区）对象——它就是一个空的非委托的对象（委托在第 5 章和第 6 章介绍）。 如果我们在忽略 this 绑定时总是传入一个 DMZ 对象，那就什么都不用担心了，因为任何 对于 this
的使用都会被限制在这个空对象中，不会对全局对象产生任何影响。 由于这个对象完全是一个空对象，我自己喜欢用变量名 ø（这是数学中表示空集合符号的 小写形式）来表示它。在大多数键盘（比如说 Mac 的 US 布局键盘）上都可以使用⌥ +o
（Option-o）来打出这个符号。有些系统允许你为特殊符号设定快捷键。如果你不喜欢 ø 符 号或者你的键盘不太容易打出这个符号，那你可以换一个喜欢的名字来称呼它。 无论你叫它什么，在 JavaScript 中创建一个空对象最简单的方法都是
Object.create(null)
（ 详 细 介 绍 请 看 第 5 章 ）。Object.create(null) 和 {} 很 像， 但 是 并 不 会 创 建 Object. prototype 这个委托，所以它比 {}“更空”：

```js
function foo(a, b) {
    console.log("a:" + a + ", b:" + b);
}

// 我们的 DMZ 空对象
var ø = Object.create(null);
// 把数组展开成参数
foo.apply(ø, [2, 3]); // a:2, b:3
// 使用 bind(..) 进行柯里化
var bar = foo.bind(ø, 2);
bar(3); // a:2, b:3
```

使用变量名 ø 不仅让函数变得更加“安全”，而且可以提高代码的可读性，因为 ø 表示 “我希望 this 是空”，这比 null 的含义更清楚。不过再说一遍，你可以用任何喜欢的名字 来命名 DMZ 对象。

#### 2.4.2 间接引用

另一个需要注意的是，你有可能（有意或者无意地）创建一个函数的“间接引用”，在这 种情况下，调用这个函数会应用默认绑定规则。间接引用最容易在赋值时发生：

```js
function foo() {
    console.log(this.a);
}

var a = 2;
var o = {a: 3, foo: foo};
var p = {a: 4};
o.foo(); // 3
(p.foo = o.foo)(); // 2
```
赋值表达式 p.foo = o.foo 的返回值是目标函数的引用，因此调用位置是 foo() 而不是
p.foo() 或者 o.foo()。根据我们之前说过的，这里会应用默认绑定。
