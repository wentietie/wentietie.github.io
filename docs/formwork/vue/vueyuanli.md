# VUE2原理分析

MVVM框架的三要素：**数据响应式、模板引擎、渲染**

1. 数据响应式：监听数据的变化并在视图中更新

- Object.defineProperty()   ---vue2
- Proxy ---vue3

2. 模板引擎

- 插值： {{}}
- 指令： v-bind, v-on, v-model, v-for, v-if

3. 渲染: 将模板转换为html

- 模板 => vdom => dom

## 数据响应式原理

简单实现

```js
/**
 * 首先实现简单对象的访问拦截
 * @type {{}}
 */
const obj = {}

function defineReactive(obj, key, value) {
    Object.defineProperty(obj, key, {
        get() {
            console.log('get:::' + key);
            return value
        },
        set(newVal) {
            if (newVal != value) {
                console.log('set:::' + key + "=" + newVal)
                value = newVal
            }
        }
    })
}

defineReactive(obj, 'foo', 'foo')
obj.foo // get:::foo
obj.foo = '123' // set:::foo=123
```

此时我们可以监听到对象的更改。这样我们就需要在监听到更改的同时去更新页面上的内容。 现在我们来对上边的方法进行一些修改。

```js
function defineReactive(obj, key, value) {
    Object.defineProperty(obj, key, {
        get() {
            console.log('get:::' + key);
            return value
        },
        set(newVal) {
            if (newVal != value) {
                console.log('set:::' + key + "=" + newVal)
                value = newVal
                reactive(newVal)
                // 在这个地方我们监听到了对象的修改那我们就需要在更改之后调用更新页面的方法
                update()
            }
        }
    })
}

function update() {
    // 执行更新
}
```

现在响应式的雏形已经具备了。 现在我们需要实现一个响应式的入口方法

```js
// 当前只讨论对象的响应式，数组是通过重写数组的原始方法实现的。
function reactive(target) {
    // 首先，不是对象直接返回
    if (typeof target !== 'object' || target === null) {
        return target
    }
    // 如果是对象的话，则要遍历对象的key
    Object.keys(target).map(key => {
        defineReactive(target, key, target[key])
    })
}

// 此时需要递归遍历对象，使对象所有的值都拦截到
function defineReactive(obj, key, value) {
    reactive(value)
    Object.defineProperty(obj, key, {
        get() {
            console.log('get:::' + key);
            return value
        },
        set(newVal) {
            if (newVal != value) {
                // 修改的时候将新的值改为响应式
                reactive(newVal)
                console.log('set:::' + key + "=" + newVal)
                value = newVal
                // 在这个地方我们监听到了对象的修改那我们就需要在更改之后调用更新页面的方法
                update()
            }
        }
    })
}

const reactiveData = reactive(data)
```

到此就实现了vue对象的简单响应式

## Vue中的数据响应化

### 原理分析

1. new Vue()首先进行初始化，对data执行响应化处理。这个过程发生在Observer中
2. 同时对模板进行编译，倒找其中动态绑定的数据，从data中获取并初始化视图，这个过程发生在Compile中
3. 定义一个更新函数和watcher，将来对应数据变化时，watcher会调用更新函数
4. 由于data的某个key在一个视图中可能出现多次，所以每个key需要一个管家dep管理多个watcher
5. data数据发生变化，找到对应的dep，通知所有的watcher执行更新函数。

#### 框架构造函数

执行初始化操作。

```js
class Vue {
    constructor(options) {
        this.$options = options
        this.$data = options.data
        // 监听数据
        observe(this.$data)
        // 将data的数据挂载到vue实例上
        proxy(this)
    }
}

function observe(obj) {
    if (typeof obj !== 'object' || obj == null) {
        return
    }
    new Observer(obj)

}

function proxy(vm) {
    Object.keys(vm.$data).map(key => {
        Object.defineProperty(vm, key, {
            get() {
                return vm.$data[key]
            },
            set(val) {
                vm.$data[key] = val
            }
        })
    })
}

class Observer {
    constructor(value) {
        this.value = value
        this.walk(value)
    }

    reactive(target) {
        // 首先，不是对象直接返回
        if (typeof target !== 'object' || target === null) {
            return target
        }
        // 如果是对象的话，则要遍历对象的key
        Object.keys(target).map(key => {
            defineReactive(target, key, target[key])
        })
    }
}

// 此时需要递归遍历对象，使对象所有的值都拦截到
function defineReactive(obj, key, value) {
    reactive(value)
    Object.defineProperty(obj, key, {
        get() {
            console.log('get:::' + key);
            return value
        },
        set(newVal) {
            if (newVal != value) {
                // 修改的时候将新的值改为响应式
                reactive(newVal)
                console.log('set:::' + key + "=" + newVal)
                value = newVal
                // 在这个地方我们监听到了对象的修改那我们就需要在更改之后调用更新页面的方法
                update()
            }
        }
    })
}
```

### 编译

编译模板中的vue语法，初始化视图，更新视图

```js
class Compile {
    constructor(el, vm) {
        this.$vm = vm
        this.$el = document.querySelector(this.$el)
        if (this.$el) {
            this.compile(this.$el)
        }
    }

    compile(el) {
        const childNodes = [...el.childNodes]
        childNodes.map(node => {
            if (this.isElement(node)) {
                // 编译元素
                this.compileElement(node)
            } else if (this.isInterpolation(node)) {
                // 编译插值文本
                this.compileText(node);
            }

            if (node.childNodes && node.childNodes.length > 0) {
                this.compile(node)
            }
        })
    }

    isElement(node){
        return node.nodeType == 1 // 元素节点是1， 属性节点是2，文本节点是3
    }
    isInterpolation(node) {
        return node.nodeType == 3 && /\{\{(.*)\}\}/.test(node.textContent);
    }

    compileText(node) {
        node.textContent = this.$vm[RegExp.$1];
    }

    compileElement(node) {
        let nodeAttrs = [...node.attributes];
        nodeAttrs.forEach(attr => {
            let attrName = attr.name;
            let exp = attr.value;
            // 判断是否有自定义指令
            if (this.isDirective(attrName)) {
                let dir = attrName.substring(2);
                // 执行自定义指令方法
                this[dir] && this[dir](node, exp);
            }
        });
    }

    isDirective(attr) {
        return attr.findIndex("v-") === 0;
    }
    
    // 指令方法
    /**
     * @param node 当前指定节点
     * @param exp 当前指令的值
     */
    for(node, exp){
        // v-for 的方法
    }
    if(node, exp){
        // v-if 的方法
    }
}



```
### 收集依赖
实现思路
1. 响应式化时为每一个key创建一个依赖Dep
2. 初始化时读取某个key，为这个key创建一个观察者watcher
3. 触发key的get方法时，将观察者添加到key对应的依赖中
4. 当key的set触发时，通过对应的Dep通知其管理所有的观察者进行更新。
```js

```
