"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["6161"],{22235:function(n,r,e){e.r(r),e.d(r,{default:function(){return l}});var s=e(85893),t=e(50065);function a(n){let r=Object.assign({h1:"h1",a:"a",h2:"h2",h3:"h3",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,t.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"class-的基本语法",children:["Class 的基本语法",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#class-的基本语法",children:"#"})]}),"\n",(0,s.jsxs)(r.h2,{id:"简介",children:["简介",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#简介",children:"#"})]}),"\n",(0,s.jsxs)(r.h3,{id:"类的由来",children:["类的由来",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#类的由来",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"JavaScript 语言中，生成实例对象的传统方法是通过构造函数。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"function Point(x, y) {\r\n  this.x = x;\r\n  this.y = y;\r\n}\r\nPoint.prototype.toString = function () {\r\n  return '(' + this.x + ', ' + this.y + ')';\r\n};\r\nvar p = new Point(1, 2);\n"})}),"\n",(0,s.jsx)(r.p,{children:"上面这种写法跟传统的面向对象语言（比如 C++ 和 Java）差异很大，很容易让新学习这门语言的程序员感到困惑。"}),"\n",(0,s.jsx)(r.p,{children:"ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过 class 关键字，可以定义类。"}),"\n",(0,s.jsx)(r.p,{children:"基本上，ES6 的 class 可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的 class 写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。上面的代码用 ES6 的 class 改写，就是下面这样。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"class Point {\r\n  constructor(x, y) {\r\n    this.x = x;\r\n    this.y = y;\r\n  }\r\n  toString() {\r\n    return '(' + this.x + ', ' + this.y + ')';\r\n  }\r\n}\n"})}),"\n",(0,s.jsx)(r.p,{children:"ES6 的类，完全可以看作构造函数的另一种写法。使用的时候，也是直接对类使用 new 命令，跟构造函数的用法完全一致。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"class Bar {\r\n  doStuff() {\r\n    console.log('stuff');\r\n  }\r\n}\r\nvar b = new Bar();\r\nb.doStuff() // \"stuff\"\n"})}),"\n",(0,s.jsx)(r.p,{children:"构造函数的 prototype 属性，在 ES6 的“类”上面继续存在。事实上，类的所有方法都定义在类的 prototype 属性上面。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"class Point {\r\n  constructor() {\r\n    // ...\r\n  }\r\n  toString() {\r\n    // ...\r\n  }\r\n  toValue() {\r\n    // ...\r\n  }\r\n}\r\n// 等同于\r\nPoint.prototype = {\r\n  constructor() {},\r\n  toString() {},\r\n  toValue() {},\r\n};\n"})}),"\n",(0,s.jsx)(r.p,{children:"在类的实例上面调用方法，其实就是调用原型上的方法。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"class B {}\r\nlet b = new B();\r\nb.constructor === B.prototype.constructor // true\n"})}),"\n",(0,s.jsx)(r.p,{children:"prototype 对象的 constructor 属性，直接指向“类”的本身，这与 ES5 的行为是一致的。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"Point.prototype.constructor === Point // true\n"})}),"\n",(0,s.jsxs)(r.h3,{id:"constructor-方法",children:["constructor 方法",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#constructor-方法",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"constructor 方法是类的默认方法，通过 new 命令生成对象实例时，自动调用该方法。一个类必须有 constructor 方法，如果没有显式定义，一个空的 constructor 方法会被默认添加。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"class Point {\r\n}\r\n// 等同于\r\nclass Point {\r\n  constructor() {}\r\n}\r\n\r\n//constructor 方法默认返回实例对象（即 this ），完全可以指定返回另外一个对象。\r\nclass Foo {\r\n    constructor() {\r\n        return Object.create(null);\r\n    }\r\n}\r\nnew Foo() instanceof Foo\r\n// false\r\n\r\n//类必须使用 new 调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用 new 也可以执行。\n"})}),"\n",(0,s.jsxs)(r.h3,{id:"类的实例",children:["类的实例",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#类的实例",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"生成类的实例的写法，与 ES5 完全一样，也是使用 new 命令。前面说过，如果忘记加上 new ，像函数那样调用 Class ，将会报错。\r\n与 ES5 一样，实例的属性除非显式定义在其本身（即定义在 this 对象上），否则都是定义在原型上（即定义在 class 上）。\r\n类的所有实例共享一个原型对象。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"//定义类\r\nclass Point {\r\n  constructor(x, y) {\r\n    this.x = x;\r\n    this.y = y;\r\n  }\r\n  toString() {\r\n    return '(' + this.x + ', ' + this.y + ')';\r\n  }\r\n}\r\nvar point = new Point(2, 3);\r\npoint.toString() // (2, 3)\r\npoint.hasOwnProperty('x') // true\r\npoint.hasOwnProperty('y') // true\r\npoint.hasOwnProperty('toString') // false\r\npoint.__proto__.hasOwnProperty('toString') // true\n"})}),"\n",(0,s.jsxs)(r.h3,{id:"取值函数getter和存值函数setter",children:["取值函数（getter）和存值函数（setter）",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#取值函数getter和存值函数setter",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"与 ES5 一样，在“类”的内部可以使用 get和 set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"class MyClass {\r\n  constructor() {\r\n    // ...\r\n  }\r\n  get prop() {\r\n    return 'getter';\r\n  }\r\n  set prop(value) {\r\n    console.log('setter: '+value);\r\n  }\r\n}\r\nlet inst = new MyClass();\r\ninst.prop = 123;\r\n// setter: 123\r\ninst.prop\r\n// 'getter'\r\n\r\n/**\r\n * 存值函数和取值函数是设置在属性的 Descriptor 对象上的。\r\n */\n"})}),"\n",(0,s.jsxs)(r.h3,{id:"属性表达式",children:["属性表达式",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#属性表达式",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"类的属性名，可以采用表达式。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"let methodName = 'getArea';\r\nclass Square {\r\n  constructor(length) {\r\n    // ...\r\n  }\r\n  [methodName]() {\r\n    // ...\r\n  }\r\n}\n"})}),"\n",(0,s.jsxs)(r.h3,{id:"class-表达式",children:["Class 表达式",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#class-表达式",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"与函数一样，类也可以使用表达式的形式定义。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const MyClass = class Me {\r\n  getClassName() {\r\n    return Me.name;\r\n  }\r\n};\n"})}),"\n",(0,s.jsx)(r.p,{children:"上面代码使用表达式定义了一个类。需要注意的是，这个类的名字是 Me ，但是 Me 只在 Class 的内部可用，指代当前类。在 Class 外部，这个类只能用 MyClass 引用。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"let inst = new MyClass();\r\ninst.getClassName() // Me\r\nMe.name // ReferenceError: Me is not defined\r\n// Me 只在 Class 内部有定义。\n"})}),"\n",(0,s.jsx)(r.p,{children:":::tip 注意点"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"严格模式\r\n类和模块的内部，默认就是严格模式，所以不需要使用 use strict 指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用。考虑到未来所有的代码，其实都是运行在模块之中，所以 ES6 实际上把整个语言升级到了严格模式。"}),"\n",(0,s.jsx)(r.li,{children:"不存在提升\r\n类不存在变量提升（hoist），这一点与 ES5 完全不同。"}),"\n",(0,s.jsx)(r.li,{children:"name 属性\r\n由于本质上，ES6 的类只是 ES5 的构造函数的一层包装，所以函数的许多特性都被Class继承，包括 name 属性。"}),"\n",(0,s.jsx)(r.li,{children:"Generator 方法\r\n如果某个方法之前加上星号（ * ），就表示该方法是一个 Generator 函数。"}),"\n",(0,s.jsx)(r.li,{children:"this 的指向\r\n类的方法内部如果含有 this ，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错。\r\n:::"}),"\n"]}),"\n",(0,s.jsxs)(r.h2,{id:"静态方法",children:["静态方法",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#静态方法",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上 static 关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"class Foo {\r\n  static classMethod() {\r\n    return 'hello';\r\n  }\r\n}\r\nFoo.classMethod() // 'hello'\r\nvar foo = new Foo();\r\nfoo.classMethod()\r\n// TypeError: foo.classMethod is not a function\r\n/**\r\n * 注意，如果静态方法包含 this 关键字，这个 this 指的是类，而不是实例。\r\n */\r\n\r\nclass Foo {\r\n    static bar() {\r\n        this.baz();\r\n    }\r\n    static baz() {\r\n        console.log('hello');\r\n    }\r\n    baz() {\r\n        console.log('world');\r\n    }\r\n}\r\nFoo.bar() // hello\n"})}),"\n",(0,s.jsx)(r.p,{children:"上面代码中，静态方法 bar 调用了 this.baz ，这里的 this 指的是 Foo 类，而不是 Foo 的实例，等同于调用 Foo.baz 。另外，从这个例子还可以看出，静态方法可以与非静态方法重名。"}),"\n",(0,s.jsx)(r.p,{children:"父类的静态方法，可以被子类继承。"}),"\n",(0,s.jsxs)(r.h2,{id:"实例属性的新写法",children:["实例属性的新写法",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#实例属性的新写法",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"实例属性除了定义在constructor()方法里面的 this 上面，也可以定义在类的最顶层。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"class IncreasingCounter {\r\n  constructor() {\r\n    this._count = 0;\r\n  }\r\n  get value() {\r\n    console.log('Getting the current value!');\r\n    return this._count;\r\n  }\r\n  increment() {\r\n    this._count++;\r\n  }\r\n}\r\n\r\n// 另一种写法\r\nclass IncreasingCounter {\r\n    _count = 0;\r\n    get value() {\r\n        console.log('Getting the current value!');\r\n        return this._count;\r\n    }\r\n    increment() {\r\n        this._count++;\r\n    }\r\n}\n"})}),"\n",(0,s.jsxs)(r.h2,{id:"静态属性",children:["静态属性",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#静态属性",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"静态属性指的是Class本身的属性，即 Class.propName，而不是定义在实例对象（ this ）上的属性。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"class Foo {\r\n}\r\nFoo.prop = 1;\r\nFoo.prop // 1\r\n//目前，只有这种写法可行，因为 ES6 明确规定，Class内部只有静态方法，没有静态属性。\r\n// 现在有一个提案提供了类的静态属性，写法是在实例属性的前面，加上 static 关键字。这个新写法大大方便了静态属性的表达。\r\nclass MyClass {\r\n    static myStaticProp = 42;\r\n    constructor() {\r\n        console.log(MyClass.myStaticProp); // 42\r\n    }\r\n}\n"})}),"\n",(0,s.jsxs)(r.h2,{id:"私有方法和私有属性",children:["私有方法和私有属性",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#私有方法和私有属性",children:"#"})]}),"\n",(0,s.jsxs)(r.h3,{id:"现有的解决方案",children:["现有的解决方案",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#现有的解决方案",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。这是常见需求，有利于代码的封装，但 ES6 不提供，只能通过变通方法模拟实现。"}),"\n",(0,s.jsx)(r.p,{children:"一种做法是在命名上加以区别。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"class Widget {\r\n  // 公有方法\r\n  foo (baz) {\r\n    this._bar(baz);\r\n  }\r\n  // 私有方法\r\n  _bar(baz) {\r\n    return this.snaf = baz;\r\n  }\r\n  // ...\r\n}\n"})}),"\n",(0,s.jsx)(r.p,{children:"上面代码中， _bar 方法前面的下划线，表示这是一个只限于内部使用的私有方法。但是，这种命名是不保险的，在类的外部，还是可以调用到这个方法。"}),"\n",(0,s.jsx)(r.p,{children:"另一种方法就是索性将私有方法移出模块，因为模块内部的所有方法都是对外可见的。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"class Widget {\r\n  foo (baz) {\r\n    bar.call(this, baz);\r\n  }\r\n  // ...\r\n}\r\nfunction bar(baz) {\r\n  return this.snaf = baz;\r\n}\n"})}),"\n",(0,s.jsx)(r.p,{children:"还有一种方法是利用Symbol值的唯一性，将私有方法的名字命名为一个 Symbol 值。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const bar = Symbol('bar');\r\nconst snaf = Symbol('snaf');\r\nexport default class myClass{\r\n  // 公有方法\r\n  foo(baz) {\r\n    this[bar](baz);\r\n  }\r\n  // 私有方法\r\n  [bar](baz) {\r\n    return this[snaf] = baz;\r\n  }\r\n  // ...\r\n};\r\n/**\r\n * 上面代码中， bar 和 snaf 都是 Symbol 值，一般情况下无法获取到它们，因此达到了私有方法和私有属性的效果。\r\n * 但是也不是绝对不行， Reflect.ownKeys() 依然可以拿到它们。\r\n */\n"})}),"\n",(0,s.jsxs)(r.h3,{id:"私有属性的提案",children:["私有属性的提案",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#私有属性的提案",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"目前，有一个提案，为 class 加了私有属性。方法是在属性名之前，使用 # 表示。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"class IncreasingCounter {\r\n  #count = 0;\r\n  get value() {\r\n    console.log('Getting the current value!');\r\n    return this.#count;\r\n  }\r\n  increment() {\r\n    this.#count++;\r\n  }\r\n}\r\n\r\n/**\r\n * 上面代码中， #count 就是私有属性，只能在类的内部使用（ this.#count ）。\r\n * 如果在类的外部使用，就会报错。\r\n */\r\n\r\nconst counter = new IncreasingCounter();\r\ncounter.#count // 报错\r\ncounter.#count = 42 // 报错\n"})}),"\n",(0,s.jsxs)(r.h2,{id:"newtarget-属性",children:["new.target 属性",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#newtarget-属性",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"new是从构造函数生成实例对象的命令。ES6 为 new 命令引入了一个 new.target 属性，该属性一般用在构造函数之中，返回 new 命令作用于的那个构造函数。如果构造函数不是通过 new 命令或 Reflect.construct() 调用的， new.target 会返回 undefined ，因此这个属性可以用来确定构造函数是怎么调用的。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"function Person(name) {\r\n  if (new.target !== undefined) {\r\n    this.name = name;\r\n  } else {\r\n    throw new Error('必须使用 new 命令生成实例');\r\n  }\r\n}\r\n// 另一种写法\r\nfunction Person(name) {\r\n  if (new.target === Person) {\r\n    this.name = name;\r\n  } else {\r\n    throw new Error('必须使用 new 命令生成实例');\r\n  }\r\n}\r\nvar person = new Person('张三'); // 正确\r\nvar notAPerson = Person.call(person, '张三');  // 报错\n"})}),"\n",(0,s.jsx)(r.p,{children:"Class 内部调用 new.target ，返回当前 Class。需要注意的是，子类继承父类时， new.target 会返回子类。利用这个特点，可以写出不能独立使用、必须继承后才能使用的类。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"class Shape {\r\n  constructor() {\r\n    if (new.target === Shape) {\r\n      throw new Error('本类不能实例化');\r\n    }\r\n  }\r\n}\r\nclass Rectangle extends Shape {\r\n  constructor(length, width) {\r\n    super();\r\n    // ...\r\n  }\r\n}\r\nvar x = new Shape();  // 报错\r\nvar y = new Rectangle(3, 4);  // 正确\n"})})]})}function c(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,t.ah)(),n.components);return r?(0,s.jsx)(r,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}let l=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["JavaScript%2Fes6%2Fes6-15.md"]={toc:[{text:"简介",id:"简介",depth:2},{text:"类的由来",id:"类的由来",depth:3},{text:"constructor 方法",id:"constructor-方法",depth:3},{text:"类的实例",id:"类的实例",depth:3},{text:"取值函数（getter）和存值函数（setter）",id:"取值函数getter和存值函数setter",depth:3},{text:"属性表达式",id:"属性表达式",depth:3},{text:"Class 表达式",id:"class-表达式",depth:3},{text:"静态方法",id:"静态方法",depth:2},{text:"实例属性的新写法",id:"实例属性的新写法",depth:2},{text:"静态属性",id:"静态属性",depth:2},{text:"私有方法和私有属性",id:"私有方法和私有属性",depth:2},{text:"现有的解决方案",id:"现有的解决方案",depth:3},{text:"私有属性的提案",id:"私有属性的提案",depth:3},{text:"new.target 属性",id:"newtarget-属性",depth:2}],title:"Class 的基本语法",frontmatter:{}}}}]);