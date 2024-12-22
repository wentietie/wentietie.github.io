"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["4195"],{61728:function(e,r,n){n.r(r),n.d(r,{default:function(){return i}});var t=n(85893),o=n(50065);function s(e){let r=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",pre:"pre",code:"code",strong:"strong",ul:"ul",li:"li",h3:"h3",div:"div"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"proxy",children:["Proxy",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#proxy",children:"#"})]}),"\n",(0,t.jsxs)(r.h2,{id:"介绍",children:["介绍",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#介绍",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"Proxy用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。"}),"\n",(0,t.jsx)(r.p,{children:"Proxy可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。这也是Vue3的实现核心实现方法。"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"var obj = new Proxy({}, {\r\n    get: function (target, propKey, receiver) {\r\n        console.log(`getting ${propKey}!`);\r\n        return Reflect.get(target, propKey, receiver);\r\n    },\r\n    set: function (target, propKey, value, receiver) {\r\n        console.log(`setting ${propKey}!`);\r\n        return Reflect.set(target, propKey, value, receiver);\r\n    }\r\n});\n"})}),"\n",(0,t.jsxs)(r.h2,{id:"proxy-实例的方法",children:["Proxy 实例的方法",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#proxy-实例的方法",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Proxy 支持的拦截操作一共 13 种。"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"get(target, propKey, receiver)：拦截对象属性的读取，比如 proxy.foo 和 proxy['foo'] 。"}),"\n",(0,t.jsx)(r.li,{children:"set(target, propKey, value, receiver)：拦截对象属性的设置，比如 proxy.foo = v 或 proxy['foo'] = v ，返回一个布尔值。"}),"\n",(0,t.jsx)(r.li,{children:"has(target, propKey)：拦截 propKey in proxy 的操作，返回一个布尔值。"}),"\n",(0,t.jsx)(r.li,{children:"deleteProperty(target, propKey)：拦截 delete proxy[propKey] 的操作，返回一个布尔值。"}),"\n",(0,t.jsx)(r.li,{children:"ownKeys(target)：拦截 Object.getOwnPropertyNames(proxy) 、 Object.getOwnPropertySymbols(proxy) 、 Object.keys(proxy) 、 for...in 循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而 Object.keys() 的返回结果仅包括目标对象自身的可遍历属性。"}),"\n",(0,t.jsx)(r.li,{children:"getOwnPropertyDescriptor(target, propKey)：拦截 Object.getOwnPropertyDescriptor(proxy, propKey) ，返回属性的描述对象。"}),"\n",(0,t.jsx)(r.li,{children:"defineProperty(target, propKey, propDesc)：拦截 Object.defineProperty(proxy, propKey, propDesc） 、 Object.defineProperties(proxy, propDescs) ，返回一个布尔值。"}),"\n",(0,t.jsx)(r.li,{children:"preventExtensions(target)：拦截 Object.preventExtensions(proxy) ，返回一个布尔值。"}),"\n",(0,t.jsx)(r.li,{children:"getPrototypeOf(target)：拦截 Object.getPrototypeOf(proxy) ，返回一个对象。"}),"\n",(0,t.jsx)(r.li,{children:"isExtensible(target)：拦截 Object.isExtensible(proxy) ，返回一个布尔值。"}),"\n",(0,t.jsx)(r.li,{children:"setPrototypeOf(target, proto)：拦截 Object.setPrototypeOf(proxy, proto) ，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。"}),"\n",(0,t.jsx)(r.li,{children:"apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如 proxy(...args) 、 proxy.call(object, ...args) 、 proxy.apply(...) 。"}),"\n",(0,t.jsx)(r.li,{children:"construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如 new proxy(...args) 。"}),"\n"]}),"\n",(0,t.jsxs)(r.h3,{id:"get",children:["get()",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#get",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"get方法用于拦截某个属性的读取操作，可以接受三个参数，依次为目标对象、属性名和 proxy 实例本身（严格地说，是操作行为所针对的对象），其中最后一个参数可选。"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:'// 如果访问目标对象不存在的属性，会抛出一个错误。如果没有这个拦截函数，访问不存在的属性，只会返回 undefined 。\r\nvar person = {\r\n  name: "张三"\r\n};\r\nvar proxy = new Proxy(person, {\r\n  get: function(target, propKey) {\r\n    if (propKey in target) {\r\n      return target[propKey];\r\n    } else {\r\n      throw new ReferenceError("Prop name \\"" + propKey + "\\" does not exist.");\r\n    }\r\n  }\r\n});\r\nproxy.name // "张三"\r\nproxy.age // 抛出一个错误\n'})}),"\n",(0,t.jsx)(r.p,{children:"get 方法可以继承。"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"let proto = new Proxy({}, {\r\n  get(target, propertyKey, receiver) {\r\n    console.log('GET ' + propertyKey);\r\n    return target[propertyKey];\r\n  }\r\n});\r\nlet obj = Object.create(proto);\r\nobj.foo // \"GET foo\"\n"})}),"\n",(0,t.jsx)(r.p,{children:"上面代码中，拦截操作定义在 Prototype 对象上面，所以如果读取 obj 对象继承的属性时，拦截会生效。"}),"\n",(0,t.jsxs)(r.h3,{id:"set",children:["set()",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#set",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"set方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和 Proxy 实例本身，其中最后一个参数可选。"}),"\n",(0,t.jsx)(r.p,{children:"假定 Person 对象有一个 age 属性，该属性应该是一个不大于 200 的整数，那么可以使用 Proxy 保证 age 的属性值符合要求。"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"let validator = {\r\n  set: function(obj, prop, value) {\r\n    if (prop === 'age') {\r\n      if (!Number.isInteger(value)) {\r\n        throw new TypeError('The age is not an integer');\r\n      }\r\n      if (value > 200) {\r\n        throw new RangeError('The age seems invalid');\r\n      }\r\n    }\r\n    // 对于满足条件的 age 属性以及其他属性，直接保存\r\n    obj[prop] = value;\r\n  }\r\n};\r\nlet person = new Proxy({}, validator);\r\nperson.age = 100;\r\nperson.age // 100\r\nperson.age = 'young' // 报错\r\nperson.age = 300 // 报错\n"})}),"\n",(0,t.jsxs)(r.h3,{id:"apply",children:["apply()",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#apply",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"apply方法拦截函数的调用、 call 和 apply 操作。apply方法可以接受三个参数，分别是目标对象、目标对象的上下文对象（ this ）和目标对象的参数数组。"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"var twice = {\r\n    apply (target, ctx, args) {\r\n        return Reflect.apply(...arguments) * 2;\r\n    }\r\n};\r\nfunction sum (left, right) {\r\n    return left + right;\r\n};\r\nvar proxy = new Proxy(sum, twice);\r\nconsole.log(proxy(1, 2)); // 6\r\nconsole.log(proxy.call(null, 5, 6)); // 22\r\nconsole.log(proxy.apply(null, [7, 8])); // 30\n"})}),"\n",(0,t.jsxs)(r.h3,{id:"has",children:["has",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#has",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"has方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。典型的操作就是 in 运算符。has 方法可以接受两个参数，分别是目标对象、需查询的属性名。"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"var handler = {\r\n  has (target, key) {\r\n    if (key[0] === '_') {\r\n      return false;\r\n    }\r\n    return key in target;\r\n  }\r\n};\r\nvar target = { _prop: 'foo', prop: 'foo' };\r\nvar proxy = new Proxy(target, handler);\r\n'_prop' in proxy // false\n"})}),"\n",(0,t.jsxs)(r.div,{className:"rspress-directive tip",children:[(0,t.jsx)(r.div,{className:"rspress-directive-title",children:"TIP"}),(0,t.jsxs)(r.div,{className:"rspress-directive-content",children:["\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"如果原对象不可配置或者禁止扩展，这时 has 拦截会报错。"}),"\n",(0,t.jsx)(r.li,{children:"has 拦截只对 in 运算符生效，对 for...in 循环不生效，导致不符合要求的属性没有被 for...in 循环所排除。\r\n:::"}),"\n"]}),"\n",(0,t.jsxs)(r.h3,{id:"construct",children:["construct()",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#construct",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"construct方法用于拦截new命令，construct 方法可以接受三个参数。\r\ntarget ：目标对象\r\nargs ：构造函数的参数对象\r\nnewTarget ：创造实例对象时， new 命令作用的构造函数\r\n下面是拦截对象的写法。"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"var p = new Proxy(function () {}, {\r\n  construct: function(target, args) {\r\n    console.log('called: ' + args.join(', '));\r\n    return { value: args[0] * 10 };\r\n  }\r\n});\r\n(new p(1)).value\r\n// \"called: 1\"\r\n// 10\n"})}),"\n"]})]}),"\n",(0,t.jsxs)(r.h3,{id:"deleteproperty",children:["deleteProperty()",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#deleteproperty",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"deleteProperty方法用于拦截delete 操作，如果这个方法抛出错误或者返回 false ，当前属性就无法被 delete 命令删除。"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"var handler = {\r\n  deleteProperty (target, key) {\r\n    invariant(key, 'delete');\r\n    delete target[key];\r\n    return true;\r\n  }\r\n};\r\nfunction invariant (key, action) {\r\n  if (key[0] === '_') {\r\n    throw new Error(`Invalid attempt to ${action} private \"${key}\" property`);\r\n  }\r\n}\r\nvar target = { _prop: 'foo' };\r\nvar proxy = new Proxy(target, handler);\r\ndelete proxy._prop\r\n// Error: Invalid attempt to delete private \"_prop\" property\n"})}),"\n",(0,t.jsxs)(r.h3,{id:"defineproperty",children:["defineProperty()",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#defineproperty",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"defineProperty()方法拦截了 Object.defineProperty()操作。"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"var handler = {\r\n  defineProperty (target, key, descriptor) {\r\n    return false;\r\n  }\r\n};\r\nvar target = {};\r\nvar proxy = new Proxy(target, handler);\r\nproxy.foo = 'bar' // 不会生效\n"})}),"\n",(0,t.jsxs)(r.h3,{id:"getownpropertydescriptor",children:["getOwnPropertyDescriptor()",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#getownpropertydescriptor",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"getOwnPropertyDescriptor()方法拦截 Object.getOwnPropertyDescriptor()，返回一个属性描述对象或者 undefined 。"}),"\n",(0,t.jsxs)(r.h3,{id:"getprototypeof",children:["getPrototypeOf()",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#getprototypeof",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"getPrototypeOf()方法主要用来拦截获取对象原型。具体来说，拦截下面这些操作。"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Object.prototype.proto"}),"\n",(0,t.jsx)(r.li,{children:"Object.prototype.isPrototypeOf()"}),"\n",(0,t.jsx)(r.li,{children:"Object.getPrototypeOf()"}),"\n",(0,t.jsx)(r.li,{children:"Reflect.getPrototypeOf()"}),"\n",(0,t.jsx)(r.li,{children:"instanceof"}),"\n"]}),"\n",(0,t.jsxs)(r.h3,{id:"isextensible",children:["isExtensible()",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#isextensible",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"isExtensible() 方法拦截 Object.isExtensible() 操作。"}),"\n",(0,t.jsxs)(r.h3,{id:"ownkeys",children:["ownKeys()",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#ownkeys",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"ownKeys() 方法用来拦截对象自身属性的读取操作。具体来说，拦截以下操作。"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Object.getOwnPropertyNames()"}),"\n",(0,t.jsx)(r.li,{children:"Object.getOwnPropertySymbols()"}),"\n",(0,t.jsx)(r.li,{children:"Object.keys()"}),"\n",(0,t.jsx)(r.li,{children:"for...in 循环"}),"\n"]}),"\n",(0,t.jsxs)(r.h3,{id:"preventextensions",children:["preventExtensions()",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#preventextensions",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"preventExtensions()方法拦截 Object.preventExtensions() 。该方法必须返回一个布尔值，否则会被自动转为布尔值。"}),"\n",(0,t.jsxs)(r.h3,{id:"setprototypeof",children:["setPrototypeOf()",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#setprototypeof",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"setPrototypeOf() 方法主要用来拦截 Object.setPrototypeOf()方法。"}),"\n",(0,t.jsxs)(r.h3,{id:"proxyrevocable",children:["Proxy.revocable()",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#proxyrevocable",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"Proxy.revocable() 方法返回一个可取消的 Proxy实例。"}),"\n",(0,t.jsxs)(r.h2,{id:"this-问题",children:["this 问题",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#this-问题",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"虽然 Proxy 可以代理针对目标对象的访问，但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致。主要原因就是在 Proxy 代理的情况下，目标对象内部的 this 关键字会指向 Proxy 代理。"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"const target = {\r\n  m: function () {\r\n    console.log(this === proxy);\r\n  }\r\n};\r\nconst handler = {};\r\nconst proxy = new Proxy(target, handler);\r\ntarget.m() // false\r\nproxy.m()  // true\n"})}),"\n",(0,t.jsx)(r.p,{children:"一旦 proxy 代理 target.m ，后者内部的 this 就是指向 proxy ，而不是 target 。"})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}let i=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["JavaScript%2Fes6%2Fes6-12.md"]={toc:[{text:"介绍",id:"介绍",depth:2},{text:"Proxy 实例的方法",id:"proxy-实例的方法",depth:2},{text:"get()",id:"get",depth:3},{text:"set()",id:"set",depth:3},{text:"apply()",id:"apply",depth:3},{text:"has",id:"has",depth:3},{text:"construct()",id:"construct",depth:3},{text:"deleteProperty()",id:"deleteproperty",depth:3},{text:"defineProperty()",id:"defineproperty",depth:3},{text:"getOwnPropertyDescriptor()",id:"getownpropertydescriptor",depth:3},{text:"getPrototypeOf()",id:"getprototypeof",depth:3},{text:"isExtensible()",id:"isextensible",depth:3},{text:"ownKeys()",id:"ownkeys",depth:3},{text:"preventExtensions()",id:"preventextensions",depth:3},{text:"setPrototypeOf()",id:"setprototypeof",depth:3},{text:"Proxy.revocable()",id:"proxyrevocable",depth:3},{text:"this 问题",id:"this-问题",depth:2}],title:"Proxy",frontmatter:{}}}}]);