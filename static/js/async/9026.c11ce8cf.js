"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["9026"],{39586:function(n,r,e){e.r(r),e.d(r,{default:function(){return h}});var o=e(85893),i=e(50065);function s(n){let r=Object.assign({h1:"h1",a:"a",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p",h4:"h4",div:"div",strong:"strong",h5:"h5",ol:"ol",li:"li",br:"br"},(0,i.ah)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.h1,{id:"第二部分-this和对象原型",children:["第二部分 this和对象原型",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#第二部分-this和对象原型",children:"#"})]}),"\n",(0,o.jsxs)(r.h2,{id:"1-关于this",children:["1 关于this",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#1-关于this",children:"#"})]}),"\n",(0,o.jsxs)(r.h3,{id:"11-为什么要用this",children:["1.1 为什么要用this",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#11-为什么要用this",children:"#"})]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:'function identify() {\r\n    return this.name.toUpperCase();\r\n}\r\n\r\nfunction speak() {\r\n    var greeting = "Hello, I\'m " + identify.call(this);\r\n    console.log(greeting);\r\n}\r\n\r\nvar me = {\r\n    name: "Kyle"\r\n};\r\nvar you = {\r\n    name: "Reader"\r\n};\r\nidentify.call(me); // KYLE\r\nidentify.call(you); // READER\r\nspeak.call(me); // Hello, 我是 KYLE\r\nspeak.call(you); // Hello, 我是 READER\n'})}),"\n",(0,o.jsx)(r.p,{children:"这段代码可以在不同的上下文对象（me 和 you）中重复使用函数 identify() 和 speak()， 不用针对每个对象编写不同版本的函数。如果不使用 this，那就需要给 identify() 和 speak()\r\n显式传入一个上下文对象"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:'function identify(context) {\r\n    return context.name.toUpperCase();\r\n}\r\n\r\nfunction speak(context) {\r\n    var greeting = "Hello, I\'m " + identify(context);\r\n    console.log(greeting);\r\n}\r\n\r\nidentify(you); // READER\r\nspeak(me); //hello, 我是 KYLE\n'})}),"\n",(0,o.jsx)(r.p,{children:"随着你的使用模式越来越复杂，显式传递上下文对象会让代码变得越来越混乱，使用 this则不会这样。当我们介绍对象和原型时，你就会明白函数可以自动引用合适的上下文对象有多重要。"}),"\n",(0,o.jsxs)(r.h3,{id:"12-误解",children:["1.2 误解",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#12-误解",children:"#"})]}),"\n",(0,o.jsxs)(r.h4,{id:"121-指向自身",children:["1.2.1 指向自身",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#121-指向自身",children:"#"})]}),"\n",(0,o.jsx)(r.p,{children:"人们很容易把 this 理解成指向函数自身。那么为什么需要从函数内部引用函数自身呢？常见的原因是递归（从函数内部调用这个函数）或者可以写一个在第一次被调用后自己解除绑定的事件处理器。 JavaScript\r\n的新手开发者通常会认为，既然函数看作一个对象（JavaScript\r\n中的所有函数都是对象），那就可以在调用函数时存储状态（属性的值）。这是可行的，有些时候也确实有用，但是在本书即将介绍的许多模式中你会发现，除了函数对象还有许多更合适存储状态的地方。"}),"\n",(0,o.jsx)(r.p,{children:"不过现在我们先来分析一下这个模式，让大家看到 this 并不像我们所想的那样指向函数本身。"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:'function foo(num) {\r\n    console.log("foo: " + num);\r\n    // 记录 foo 被调用的次数\r\n    this.count++;\r\n}\r\n\r\nfoo.count = 0;\r\nvar i;\r\nfor (i = 0; i < 10; i++) {\r\n    if (i > 5) {\r\n        foo(i);\r\n    }\r\n}\r\n// foo: 6\r\n// foo: 7\r\n// foo: 8\r\n// foo: 9\r\n// foo 被调用了多少次？\r\nconsole.log(foo.count); // 0 -- WTF?\r\n\n'})}),"\n",(0,o.jsx)(r.p,{children:"console.log 语句产生了 4 条输出，证明 foo(..) 确实被调用了 4 次，但是 foo.count 仍然是 0。显然从字面意思来理解 this 是错误的。"}),"\n",(0,o.jsx)(r.p,{children:"执行 foo.count = 0 时，的确向函数对象 foo 添加了一个属性 count。但是函数内部代码this.count 中的 this 并不是指向那个函数对象，所以虽然属性名相同，根对象却并不相同，困惑随之产生。"}),"\n",(0,o.jsx)(r.p,{children:"如果要从函数对象内部引用它自身，那只使用 this 是不够的。一般来说你需要通过一个指向函数对象的词法标识符（变量）来引用它。"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:"function foo() {\r\n    foo.count = 4; // foo 指向它自身\r\n}\r\n\r\nsetTimeout(function () {\r\n// 匿名（没有名字的）函数无法指向自身\r\n}, 10)\n"})}),"\n",(0,o.jsxs)(r.div,{className:"rspress-directive warning",children:[(0,o.jsx)(r.div,{className:"rspress-directive-title",children:"还有一种传统的但是现在已经被弃用和批判的用法，是使用 arguments.callee"}),(0,o.jsx)(r.div,{className:"rspress-directive-content",children:(0,o.jsx)(r.p,{children:"来引用当前正在运行的函数对象。这是唯一一种可以从匿名函数对象内部引用自身的方法。然而，更好的方式是避免使用匿名函数，至少在需要自引用时使用具名函数（表达式）。arguments.callee 已经被弃用，不应该再使用它。"})})]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:'function foo(num) {\r\n    console.log("foo: " + num);\r\n// 记录 foo 被调用的次数\r\n    foo.count++;\r\n}\r\n\r\nfoo.count = 0\r\nvar i;\r\nfor (i = 0; i < 10; i++) {\r\n    if (i > 5) {\r\n        foo(i);\r\n    }\r\n}\r\n\r\n// foo: 6\r\n// foo: 7\r\n// foo: 8\r\n// foo: 9\r\n// foo 被调用了多少次？\r\nconsole.log(foo.count); // 4\n'})}),"\n",(0,o.jsx)(r.p,{children:"然而，这种方法同样回避了 this 的问题，并且完全依赖于变量 foo 的词法作用域。另一种方法是强制 this 指向 foo 函数对象："}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:'function foo(num) {\r\n    console.log("foo: " + num);\r\n// 记录 foo 被调用的次数\r\n// 注意，在当前的调用方式下（参见下方代码），this 确实指向 foo\r\n    this.count++;\r\n}\r\n\r\nfoo.count = 0;\r\nvar i;\r\nfor (i = 0; i < 10; i++) {\r\n    if (i > 5) {\r\n        // 使用 call(..) 可以确保 this 指向函数对象 foo 本身\r\n        foo.call(foo, i);\r\n    }\r\n}\r\n// foo: 6\r\n// foo: 7\r\n// foo: 8\r\n// foo: 9\r\n// foo 被调用了多少次？\r\nconsole.log(foo.count); // 4\n'})}),"\n",(0,o.jsxs)(r.h4,{id:"122-它的作用域",children:["1.2.2 它的作用域",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#122-它的作用域",children:"#"})]}),"\n",(0,o.jsx)(r.p,{children:"第二种常见的误解是，this 指向函数的作用域。需要明确的是，this 在任何情况下都不指向函数的词法作用域。在 JavaScript 内部，作用域确实和对象类似，可见的标识符都是它的属性。但是作用域“对象”无法通过\r\nJavaScript代码访问，它存在于 JavaScript 引擎内部。"}),"\n",(0,o.jsx)(r.p,{children:"思考一下下面的代码，它试图（但是没有成功）跨越边界，使用 this 来隐式引用函数的词法作用域："}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:"function foo() {\r\n    var a = 2;\r\n    this.bar();\r\n}\r\n\r\nfunction bar() {\r\n    console.log(this.a);\r\n}\r\n\r\nfoo(); // ReferenceError: a is not defined\n"})}),"\n",(0,o.jsx)(r.p,{children:"首先，这段代码试图通过 this.bar() 来引用 bar() 函数。这是绝对不可能成功的，我们之后会解释原因。调用 bar() 最自然的方法是省略前面的 this，直接使用词法引用标识符。"}),"\n",(0,o.jsx)(r.p,{children:"此外，编写这段代码的开发者还试图使用 this 联通 foo() 和 bar() 的词法作用域，从而让bar() 可以访问 foo() 作用域里的变量 a。这是不可能实现的，你不能使用 this 来引用一个词法作用域内部的东西。"}),"\n",(0,o.jsxs)(r.h3,{id:"13-this到底是什么",children:["1.3 this到底是什么",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#13-this到底是什么",children:"#"})]}),"\n",(0,o.jsx)(r.p,{children:"this 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调用时的各种条件。this\r\n的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。当一个函数被调用时，会创建一个活动记录（有时候也称为执行上下文）。这个记录会包含函数在哪里被调用（调用栈）、函数的调用方法、传入的参数等信息。this\r\n就是记录的其中一个属性，会在函数执行的过程中用到。"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"总而言之，this 实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。"})}),"\n",(0,o.jsxs)(r.h2,{id:"2-this-全面解析",children:["2 this 全面解析",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#2-this-全面解析",children:"#"})]}),"\n",(0,o.jsxs)(r.h3,{id:"21-调用位置",children:["2.1 调用位置",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#21-调用位置",children:"#"})]}),"\n",(0,o.jsx)(r.p,{children:"在理解 this 的绑定过程之前，首先要理解调用位置：调用位置就是函数在代码中被调用的位置（而不是声明的位置）。只有仔细分析调用位置才能回答这个问题：这个 this 到底引用的是什么？"}),"\n",(0,o.jsx)(r.p,{children:"通常来说，寻找调用位置就是寻找“函数被调用的位置”，但是做起来并没有这么简单，因为某些编程模式可能会隐藏真正的调用位置。"}),"\n",(0,o.jsx)(r.p,{children:"最重要的是要分析调用栈（就是为了到达当前执行位置所调用的所有函数）。我们关心的调用位置就在当前正在执行的函数的前一个调用中。"}),"\n",(0,o.jsx)(r.p,{children:"下面我们来看看到底什么是调用栈和调用位置："}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:'function baz() {\r\n// 当前调用栈是：baz\r\n// 因此，当前调用位置是全局作用域\r\n    console.log("baz");\r\n    bar(); // <-- bar 的调用位置\r\n}\r\n\r\nfunction bar() {\r\n// 当前调用栈是 baz -> bar\r\n// 因此，当前调用位置在 baz 中\r\n    console.log("bar");\r\n    foo(); // <-- foo 的调用位置\r\n}\r\n\r\nfunction foo() {\r\n// 当前调用栈是 baz -> bar -> foo\r\n// 因此，当前调用位置在 bar 中\r\n    console.log("foo");\r\n}\r\n\r\nbaz(); // <-- baz 的调用位置\n'})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"注意我们是如何（从调用栈中）分析出真正的调用位置的，因为它决定了 this 的绑定"}),"\r\n:::tip 你可以把调用栈想象成一个函数调用链，就像我们在前面代码段的注释中所写的一样。但是这种方法非常麻烦并且容易出错。"]}),"\n",(0,o.jsx)(r.p,{children:"另一个查看调用栈的方法是使用浏览器的调试工具。绝大多数现代桌面浏览器都内置了开发者工具，其中包含 JavaScript 调试器。就本例来说，你可以在工具中给 foo() 函数的第一行代码设置一个断点，或者直接在第一行代码之前插入一条\r\ndebugger;语句。运行代码时，调试器会在那个位置暂停，同时会展示当前位置的函数调用列表，这就是你的调用栈。因此，如果你想要分析 this 的绑定，使用开发者工具得到调用栈，然后找到栈中第二个元素，这就是真正的调用位置。\r\n:::"}),"\n",(0,o.jsxs)(r.h3,{id:"22-绑定规则",children:["2.2 绑定规则",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#22-绑定规则",children:"#"})]}),"\n",(0,o.jsxs)(r.h4,{id:"221-默认绑定",children:["2.2.1 默认绑定",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#221-默认绑定",children:"#"})]}),"\n",(0,o.jsx)(r.p,{children:"首先要介绍的是最常用的函数调用类型：独立函数调用。可以把这条规则看作是无法应用其他规则时的默认规则。"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:"function foo() {\r\n    console.log(this.a);\r\n}\r\n\r\nvar a = 2;\r\nfoo(); // 2\n"})}),"\n",(0,o.jsx)(r.p,{children:"你应该注意到的第一件事是，声明在全局作用域中的变量（比如 var a = 2）就是全局对象的一个同名属性。它们本质上就是同一个东西，并不是通过复制得到的。"}),"\n",(0,o.jsx)(r.p,{children:"接下来我们可以看到当调用 foo() 时，this.a 被解析成了全局变量 a。为什么？因为在本例中，函数调用时应用了 this 的默认绑定，因此 this 指向全局对象。"}),"\n",(0,o.jsx)(r.p,{children:"那么我们怎么知道这里应用了默认绑定呢？可以通过分析调用位置来看看 foo() 是如何调用的。在代码中，foo() 是直接使用不带任何修饰的函数引用进行调用的，因此只能使用默认绑定，无法应用其他规则。"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"如果使用严格模式（strict mode），那么全局对象将无法使用默认绑定，因此 this 会绑定到 undefined"})}),"\n",(0,o.jsxs)(r.h4,{id:"222-隐式绑定",children:["2.2.2 隐式绑定",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#222-隐式绑定",children:"#"})]}),"\n",(0,o.jsx)(r.p,{children:"另一条需要考虑的规则是调用位置是否有上下文对象，或者说是否被某个对象拥有或者包含，不过这种说法可能会造成一些误导。"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:"function foo() {\r\n    console.log(this.a);\r\n}\r\n\r\nvar obj = {\r\n    a: 2,\r\n    foo: foo\r\n};\r\nobj.foo(); // 2\n"})}),"\n",(0,o.jsx)(r.p,{children:"首先需要注意的是 foo() 的声明方式，及其之后是如何被当作引用属性添加到 obj 中的。但是无论是直接在 obj 中定义还是先定义再添加为引用属性，这个函数严格来说都不属于obj 对象。"}),"\n",(0,o.jsx)(r.p,{children:"然而，调用位置会使用 obj 上下文来引用函数，因此你可以说函数被调用时 obj 对象“拥有”或者“包含”它。"}),"\n",(0,o.jsx)(r.p,{children:"无论你如何称呼这个模式，当 foo() 被调用时，它的落脚点确实指向 obj 对象。当函数引用有上下文对象时，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象。因为调用 foo() 时 this 被绑定到 obj，因此\r\nthis.a 和 obj.a 是一样的。"}),"\n",(0,o.jsx)(r.p,{children:"对象属性引用链中只有最顶层或者说最后一层会影响调用位置。举例来说："}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:"function foo() {\r\n    console.log(this.a);\r\n}\r\n\r\nvar obj2 = {\r\n    a: 42,\r\n    foo: foo\r\n};\r\nvar obj1 = {\r\n    a: 2,\r\n    obj2: obj2\r\n};\r\nobj1.obj2.foo(); // 42\n"})}),"\n",(0,o.jsxs)(r.h5,{id:"隐式丢失",children:[(0,o.jsx)(r.strong,{children:"隐式丢失"}),(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#隐式丢失",children:"#"})]}),"\n",(0,o.jsx)(r.p,{children:"一个最常见的 this 绑定问题就是被隐式绑定的函数会丢失绑定对象，也就是说它会应用默认绑定，从而把 this 绑定到全局对象或者 undefined 上，取决于是否是严格模式。"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:'function foo() {\r\n    console.log(this.a);\r\n}\r\n\r\nvar obj = {\r\n    a: 2,\r\n    foo: foo\r\n};\r\nvar bar = obj.foo; // 函数别名！\r\nvar a = "oops, global"; // a 是全局对象的属性\r\nbar(); // "oops, global"\r\n\n'})}),"\n",(0,o.jsx)(r.p,{children:"虽然 bar 是 obj.foo 的一个引用，但是实际上，它引用的是 foo 函数本身，因此此时的bar() 其实是一个不带任何修饰的函数调用，因此应用了默认绑定。"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:'function foo() {\r\n    console.log(this.a);\r\n}\r\n\r\nfunction doFoo(fn) {\r\n// fn 其实引用的是 foo\r\n    fn(); // <-- 调用位置！\r\n}\r\n\r\nvar obj = {\r\n    a: 2,\r\n    foo: foo\r\n};\r\nvar a = "oops, global"; // a 是全局对象的属性\r\ndoFoo(obj.foo); // "oops, global"\n'})}),"\n",(0,o.jsxs)(r.h4,{id:"223-显式绑定",children:["2.2.3 显式绑定",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#223-显式绑定",children:"#"})]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:"function foo() {\r\n    console.log(this.a);\r\n}\r\n\r\nvar obj = {\r\n    a: 2\r\n};\r\nfoo.call(obj); // 2\n"})}),"\n",(0,o.jsxs)(r.h4,{id:"224-new绑定",children:["2.2.4 new绑定",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#224-new绑定",children:"#"})]}),"\n",(0,o.jsx)(r.p,{children:"在传统的面向类的语言中，“构造函数”是类中的一些特殊方法，使用 new 初始化类时会调用类中的构造函数。通常的形式是这样的： something = new MyClass(..);JavaScript 也有一个 new\r\n操作符，使用方法看起来也和那些面向类的语言一样，绝大多数开 发者都认为 JavaScript 中 new 的机制也和那些语言一样。然而，JavaScript 中 new 的机制实 际上和面向类的语言完全不同。"}),"\n",(0,o.jsx)(r.p,{children:"在 JavaScript 中，构造函数只是一些 使用 new 操作符时被调用的函数。它们并不会属于某个类，也不会实例化一个类。实际上， 它们甚至都不能说是一种特殊的函数类型，它们只是被 new\r\n操作符调用的普通函数而已。包括内置对象函数（比如 Number(..)，详情请查看第 3 章）在内的所有函数都可 以用 new 来调用，这种函数调用被称为构造函数调用。"}),"\n",(0,o.jsx)(r.p,{children:"这里有一个重要但是非常细微的区别：实际上并不存在所谓的“构造函数”，只有对于函数的“构造调用”"}),"\n",(0,o.jsx)(r.p,{children:"使用 new 来调用函数，或者说发生构造函数调用时，会自动执行下面的操作。"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsx)(r.li,{children:"创建（或者说构造）一个全新的对象。"}),"\n",(0,o.jsx)(r.li,{children:'这个新对象会被执行 "原型" 连接。'}),"\n",(0,o.jsx)(r.li,{children:"这个新对象会绑定到函数调用的 this。"}),"\n",(0,o.jsx)(r.li,{children:"如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。"}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:"function foo(a) {\r\n    this.a = a;\r\n}\r\n\r\nvar bar = new foo(2);\r\nconsole.log(bar.a); // 2\n"})}),"\n",(0,o.jsx)(r.p,{children:"使用 new 来调用 foo(..) 时，我们会构造一个新对象并把它绑定到 foo(..) 调用中的 this上。new 是最后一种可以影响函数调用时 this 绑定行为的方法，我们称之为 new 绑定。"}),"\n",(0,o.jsxs)(r.h3,{id:"23-优先级",children:["2.3 优先级",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#23-优先级",children:"#"})]}),"\n",(0,o.jsx)(r.p,{children:"现在我们已经了解了函数调用中 this 绑定的四条规则，你需要做的就是找到函数的调用位置并判断应当应用哪条规则。但是，如果某个调用位置可以应用多条规则该怎么办？为了解决这个问题就必须给这些规则设定优先级。\r\n隐式绑定和显式绑定哪个优先级更高？我们来测试一下："}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:"function foo() {\r\n    console.log(this.a);\r\n}\r\n\r\nvar obj1 = {\r\n    a: 2,\r\n    foo: foo\r\n};\r\nvar obj2 = {\r\n    a: 3,\r\n    foo: foo\r\n};\r\nobj1.foo(); // 2\r\nobj2.foo(); // 3\r\nobj1.foo.call(obj2); // 3\r\nobj2.foo.call(obj1); // 2\n"})}),"\n",(0,o.jsx)(r.p,{children:"可以看到，显式绑定优先级更高，也就是说在判断时应当先考虑是否可以应用显式绑定。"}),"\n",(0,o.jsxs)(r.div,{className:"rspress-directive warning",children:[(0,o.jsx)(r.div,{className:"rspress-directive-title",children:"WARNING"}),(0,o.jsx)(r.div,{className:"rspress-directive-content",children:(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.br,{}),"\n","new 和 call/apply 无法一起使用，因此无法通过 new foo.call(obj1) 来直接 进行测试。但是我们可以使用硬绑定来测试它俩的优先级。\r\n"]})})]}),"\n",(0,o.jsx)(r.p,{children:"在看代码之前先回忆一下硬绑定是如何工作的。Function.prototype.bind(..) 会创建一个 新的包装函数，这个函数会忽略它当前的 this 绑定（无论绑定的对象是什么），并把我们 提供的对象绑定到 this 上。\r\n这样看起来硬绑定（也是显式绑定的一种）似乎比 new 绑定的优先级更高，无法使用 new 来控制 this 绑定。"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:"function foo(something) {\r\n    this.a = something;\r\n}\r\n\r\nvar obj1 = {};\r\nvar bar = foo.bind(obj1);\r\nbar(2);\r\nconsole.log(obj1.a); // 2\r\nvar baz = new bar(3);\r\nconsole.log(obj1.a); // 2\r\nconsole.log(baz.a); // 3\n"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"判断this"}),"\r\n现在我们可以根据优先级来判断函数在某个调用位置应用的是哪条规则。可以按照下面的 顺序来进行判断："]}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsx)(r.li,{children:"函数是否在 new 中调用（new 绑定）？如果是的话 this 绑定的是新创建的对象。 var bar = new foo()"}),"\n",(0,o.jsx)(r.li,{children:"函数是否通过 call、apply（显式绑定）或者硬绑定调用？如果是的话，this 绑定的是 指定的对象。 var bar = foo.call(obj2)"}),"\n",(0,o.jsx)(r.li,{children:"函数是否在某个上下文对象中调用（隐式绑定）？如果是的话，this 绑定的是那个上 下文对象。 var bar = obj1.foo()"}),"\n",(0,o.jsx)(r.li,{children:"如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到 undefined，否则绑定到 全局对象。 var bar = foo()\r\n就是这样。对于正常的函数调用来说，理解了这些知识你就可以明白 this 的绑定原理了。 不过……凡事总有例外。"}),"\n"]}),"\n",(0,o.jsxs)(r.h3,{id:"24-绑定例外",children:["2.4 绑定例外",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#24-绑定例外",children:"#"})]}),"\n",(0,o.jsxs)(r.h4,{id:"241-被忽略的this",children:["2.4.1 被忽略的this",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#241-被忽略的this",children:"#"})]}),"\n",(0,o.jsx)(r.p,{children:"如果你把 null 或者 undefined 作为 this 的绑定对象传入 call、apply 或者 bind，这些值 在调用时会被忽略，实际应用的是默认绑定规则，那么什么情况下你会传入 null 呢？ 一种非常常见的做法是使用\r\napply(..) 来“展开”一个数组，并当作参数传入一个函数。 类似地，bind(..) 可以对参数进行柯里化（预先设置一些参数），这种方法有时非常有用"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:'function foo(a, b) {\r\n    console.log("a:" + a + ", b:" + b);\r\n}\r\n\r\n// 把数组“展开”成参数\r\nfoo.apply(null, [2, 3]); // a:2, b:3\r\n// 使用 bind(..) 进行柯里化\r\nvar bar = foo.bind(null, 2);\r\nbar(3); // a:2, b:3\n'})}),"\n",(0,o.jsx)(r.p,{children:"这两种方法都需要传入一个参数当作 this 的绑定对象。如果函数并不关心 this 的话，你 仍然需要传入一个占位值，这时 null 可能是一个不错的选择，就像代码所示的那样。\r\n:::tip 尽管本书中未提到，但在 ES6 中，可以用 ... 操作符代替 apply(..) 来“展 开”数组，foo(...[1,2]) 和 foo(1,2) 是一样的，这样可以避免不必要的 this 绑定。可惜，在 ES6\r\n中没有柯里化的相关语法，因此还是需要使用 bind(..)。\r\n:::\r\n然而，总是使用 null 来忽略 this 绑定可能产生一些副作用。如果某个函数确实使用了 this（比如第三方库中的一个函数），那默认绑定规则会把 this 绑定到全局对象（在浏览 器中这个对象是\r\nwindow），这将导致不可预计的后果（比如修改全局对象）。 显而易见，这种方式可能会导致许多难以分析和追踪的 bug。"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"更安全的this"})}),"\n",(0,o.jsx)(r.p,{children:"一种“更安全”的做法是传入一个特殊的对象，把 this 绑定到这个对象不会对你的程序 产生任何副作用。就像网络（以及军队）一样，我们可以创建一个“DMZ”（demilitarized\r\nzone，非军事区）对象——它就是一个空的非委托的对象（委托在第 5 章和第 6 章介绍）。 如果我们在忽略 this 绑定时总是传入一个 DMZ 对象，那就什么都不用担心了，因为任何 对于 this\r\n的使用都会被限制在这个空对象中，不会对全局对象产生任何影响。 由于这个对象完全是一个空对象，我自己喜欢用变量名 \xf8（这是数学中表示空集合符号的 小写形式）来表示它。在大多数键盘（比如说 Mac 的 US 布局键盘）上都可以使用⌥ +o\r\n（Option-o）来打出这个符号。有些系统允许你为特殊符号设定快捷键。如果你不喜欢 \xf8 符 号或者你的键盘不太容易打出这个符号，那你可以换一个喜欢的名字来称呼它。 无论你叫它什么，在 JavaScript 中创建一个空对象最简单的方法都是\r\nObject.create(null)\r\n（ 详 细 介 绍 请 看 第 5 章 ）。Object.create(null) 和 {} 很 像， 但 是 并 不 会 创 建 Object. prototype 这个委托，所以它比 {}“更空”："}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:'function foo(a, b) {\r\n    console.log("a:" + a + ", b:" + b);\r\n}\r\n\r\n// 我们的 DMZ 空对象\r\nvar \xf8 = Object.create(null);\r\n// 把数组展开成参数\r\nfoo.apply(\xf8, [2, 3]); // a:2, b:3\r\n// 使用 bind(..) 进行柯里化\r\nvar bar = foo.bind(\xf8, 2);\r\nbar(3); // a:2, b:3\n'})}),"\n",(0,o.jsx)(r.p,{children:"使用变量名 \xf8 不仅让函数变得更加“安全”，而且可以提高代码的可读性，因为 \xf8 表示 “我希望 this 是空”，这比 null 的含义更清楚。不过再说一遍，你可以用任何喜欢的名字 来命名 DMZ 对象。"}),"\n",(0,o.jsxs)(r.h4,{id:"242-间接引用",children:["2.4.2 间接引用",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#242-间接引用",children:"#"})]}),"\n",(0,o.jsx)(r.p,{children:"另一个需要注意的是，你有可能（有意或者无意地）创建一个函数的“间接引用”，在这 种情况下，调用这个函数会应用默认绑定规则。间接引用最容易在赋值时发生："}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:"function foo() {\r\n    console.log(this.a);\r\n}\r\n\r\nvar a = 2;\r\nvar o = {a: 3, foo: foo};\r\nvar p = {a: 4};\r\no.foo(); // 3\r\n(p.foo = o.foo)(); // 2\n"})}),"\n",(0,o.jsx)(r.p,{children:"赋值表达式 p.foo = o.foo 的返回值是目标函数的引用，因此调用位置是 foo() 而不是\r\np.foo() 或者 o.foo()。根据我们之前说过的，这里会应用默认绑定。"})]})}function a(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,i.ah)(),n.components);return r?(0,o.jsx)(r,{...n,children:(0,o.jsx)(s,{...n})}):s(n)}let h=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["JavaScript%2Fyoudontknowjs%2Fpart2.md"]={toc:[{text:"1 关于this",id:"1-关于this",depth:2},{text:"1.1 为什么要用this",id:"11-为什么要用this",depth:3},{text:"1.2 误解",id:"12-误解",depth:3},{text:"1.2.1 指向自身",id:"121-指向自身",depth:4},{text:"1.2.2 它的作用域",id:"122-它的作用域",depth:4},{text:"1.3 this到底是什么",id:"13-this到底是什么",depth:3},{text:"2 this 全面解析",id:"2-this-全面解析",depth:2},{text:"2.1 调用位置",id:"21-调用位置",depth:3},{text:"2.2 绑定规则",id:"22-绑定规则",depth:3},{text:"2.2.1 默认绑定",id:"221-默认绑定",depth:4},{text:"2.2.2 隐式绑定",id:"222-隐式绑定",depth:4},{text:"2.2.3 显式绑定",id:"223-显式绑定",depth:4},{text:"2.2.4 new绑定",id:"224-new绑定",depth:4},{text:"2.3 优先级",id:"23-优先级",depth:3},{text:"2.4 绑定例外",id:"24-绑定例外",depth:3},{text:"2.4.1 被忽略的this",id:"241-被忽略的this",depth:4},{text:"2.4.2 间接引用",id:"242-间接引用",depth:4}],title:"第二部分 this和对象原型",frontmatter:{}}}}]);