:::tip 来源
本文整理自 [前端知识体库 · 重学js](https://wuzaofeng.github.io/learning/javascript/deep/)
:::

# 继承

## 继承
面向对象三大特性

继承

封装：低耦合高内聚

多态：重载和重写

- 重载：方法名相同，形参的个数或者类型不一样（js不存在真正意义上的重载）（可以通过`arguments`）实现重载
- 重写：类的继承中，子类可以重写继承父类的方法

### 原型链继承

原理：`child.prototype = new Parent()`

1. 引用类型的属性会被所有实例共享
2. 在创建实例的时候，不能向父级构造函数传参
3. 不能实现多继承

### 构造函数继承

原理：`Parent.call(this)`

#### 优点

1. 避免引用类型属性被所有实例共享
2. 创建实例的时候可以传入参数
3. 多继承

#### 缺点

方法都定义在构造器中，每次创建实例，会创建一遍方法

### 组合(原型链和构造函数)继承

融合原型链和构造函数都优点

缺点
调用两次父构造函数

```js
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {

    Parent.call(this, name);
    this.age = age;

}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

var child1 = new Child('kevin', '18');

child1.colors.push('black');

console.log(child1.name); // kevin
console.log(child1.age); // 18
console.log(child1.colors); // ["red", "blue", "green", "black"]

var child2 = new Child('daisy', '20');

console.log(child2.name); // daisy
console.log(child2.age); // 20
console.log(child2.colors); // ["red", "blue", "green"]
```

### 原型式继承

缺点 引用类型属性共享在实例中，和原型链继承一样

```js
Object.create
function createObj(o) {
    function F(){}
    F.prototype = o;
    return new F();
}
```

### 寄生式继承

缺点 跟借用构造函数模式一样，每次创建对象都会创建一遍方法

```js
function createObj (o) {
    var clone = Object.create(o);
    clone.sayName = function () {
        console.log('hi');
    }
    return clone;
}
```

### 寄生组合式继承

它只调用了一次 Parent 构造函数
