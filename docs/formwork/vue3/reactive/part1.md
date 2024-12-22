# 响应式基础

:::tip
vue的[官方文档](https://cn.vuejs.org/guide/introduction.html)是一个非常好的学习网站。
:::

## 声明响应式状态

### [`reactive()`](https://cn.vuejs.org/api/reactivity-core.html#reactive)

利用`reactive`函数可以创建一个响应式的对象或者数组。 大致过程如下：

```js
import {reactive} from 'vue';

const state = reactive({
  count: 0,
})
```

以上是一个官网的例子，这个例子很好地展示了一个响应式对象声明的过程。

下面是一个在vue模板中的示例。
vue3 可以省略setup方法，使用`<script setup>`语法糖。

```vue
<template>
  <button @click="increment">
    {{ state.count }}
  </button>
</template>

<script setup>
import {reactive} from 'vue';

const state = reactive({count: 0})

function increment() {
  state.count++
}
</script>
```
这样创建的变量就是响应式的，在js中更改变量的值，dom就会相应的刷新。

#### 深层响应性
在 Vue 中，状态都是默认深层响应式的。这意味着即使在更改深层次的对象或数组，你的改动也能被检测到。
```js
import { reactive } from 'vue'

const obj = reactive({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

function mutateDeeply() {
  // 以下都会按照期望工作
  obj.nested.count++
  obj.arr.push('baz')
}
```

也可以直接创建一个[浅层响应式对象](https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive)。它们仅在顶层具有响应性，一般仅在某些特殊场景中需要。


### ref()
#### reactive() 的局限性

`reactive()` API 有两条限制：

1. 仅对对象类型有效（对象、数组和 `Map`、`Set` 这样的[集合类型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects#使用键的集合对象)），而对 `string`、`number` 和 `boolean` 这样的 [原始类型](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive) 无效。
2. 因为 Vue 的响应式系统是通过属性访问进行追踪的，因此我们必须始终保持对该响应式对象的相同引用。这意味着我们不可以随意地“替换”一个响应式对象，因为这将导致对初始引用的响应性连接丢失：

```js
let state = reactive({ count: 0 })

// 上面的引用 ({ count: 0 }) 将不再被追踪（响应性连接已丢失！）
state = reactive({ count: 1 })
```


ref函数没有任何类型限制，可以创建任意类型的响应式。
```vue
<template>
  <p>{{count}}</p>
  <p>{{str}}</p>
  <p>{{booleanValue}}</p>
  <p>{{nullValue}}</p>
  <p>{{undefinedValue}}</p>
  <ul>
    <li v-for="item in list">{{item}}</li>
  </ul>
  <ul>
    <li v-for="item in Object.keys(obj)">key:{{item}}, value: {{obj[item]}}</li>
  </ul>
</template>

<script setup>
  import { ref } from 'vue'

  const count = ref(0);
  const str = ref('0');
  const booleanValue = ref(true);
  const nullValue = ref(null);
  const undefinedValue = ref(undefined);
  const list = ref(['a', 'b']);
  const obj = ref({
    a: 'a',
    b: 'b',
  });
</script>
```

ref() 将传入参数的值包装为一个带 .value 属性的 ref 对象：
```js
const count = ref(0)

console.log(count) // { value: 0 }
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
```
这意味这我们修改ref声明的变量时，需要使用`xx.value = xx`或者`xx.value.ff = xx`这种形式:
```js
const count = ref(0);
  const list = ref(['a', 'b']);
  const obj = ref({
    a: 'a',
    b: 'b',
  });
  
  count.value = 1;
  list.value.push('c');
  list.value = [];
  obj.value.a = 'c';
  obj.value = {
    a: 'c',
    b: 'd'
  }
```
ref 被传递给函数或是从一般对象上被解构时，不会丢失响应性：
```js
const obj = {
  foo: ref(1),
  bar: ref(2)
}

// 该函数接收一个 ref
// 需要通过 .value 取值
// 但它会保持响应性
callSomeFunction(obj.foo)

// 仍然是响应式的
const { foo, bar } = obj
```

## ref的解包
### 在模板中的解包
当 ref 在模板中作为顶层属性被访问时，它们会被自动“解包”，所以不需要使用 .value。下面是之前的计数器例子，用 ref() 代替：
```vue
<script setup>
  import { ref } from 'vue'

  const count = ref(0)

  function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">
  {{ count }} <!-- 无需 .value -->
</button>
</template>
```
:::warning
请注意，仅当 ref 是模板渲染上下文的顶层属性时才适用自动“解包”。 例如， object 是顶层属性，但 object.foo 不是。
```js
const object = { foo: ref(1) }
// 下面的表达式将不会像预期的那样工作：渲染的结果会是一个 [object Object]1
{{ object.foo + 1 }}

// 可以通过将 foo 改成顶层属性来解决这个问题：
const { foo } = object
{{ foo + 1 }}
```
:::

### ref 在响应式对象中的解包
当一个 ref 被嵌套在一个响应式对象中，作为属性被访问或更改时，它会自动解包，因此会表现得和一般的属性一样：
```js
const count = ref(0)
const state = reactive({
  count
})

console.log(state.count) // 0

state.count = 1
console.log(count.value) // 1
```
如果将一个新的 ref 赋值给一个关联了已有 ref 的属性，那么它会替换掉旧的 ref：
```js
const otherCount = ref(2)

state.count = otherCount
console.log(state.count) // 2
// 原始 ref 现在已经和 state.count 失去联系
console.log(count.value) // 1
```
### 数组和集合类型的 ref 解包
跟响应式对象不同，当 ref 作为响应式数组或像 Map 这种原生集合类型的元素被访问时，不会进行解包。
```js
const books = reactive([ref('Vue 3 Guide')])
// 这里需要 .value
console.log(books[0].value)

const map = reactive(new Map([['count', ref(0)]]))
// 这里需要 .value
console.log(map.get('count').value)
```

## 常见问题

### 要将响应式对象中的某个或多个属性单独提供给外部使用时
日常开发中经常碰到上述情形，但是直接使用ref的value进行赋值，新创建的响应式并不能与源数据保持同步。
要解决这类问题，有三种解决方式。
1. 使用toRef/toRefs
#### toRef()
基于响应式对象上的一个属性，创建一个对应的 ref。这样创建的 ref 与其源属性保持同步：改变源属性的值将更新 ref 的值，反之亦然。
##### 示例
```js
const state = reactive({
  foo: 1,
  bar: 2
})

const fooRef = toRef(state, 'foo')

// 更改该 ref 会更新源属性
fooRef.value++
console.log(state.foo) // 2

// 更改源属性也会更新该 ref
state.foo++
console.log(fooRef.value) // 3
```
#### toRefs()
将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref。每个单独的 ref 都是使用 toRef() 创建的。
##### 示例
```js
const state = reactive({
  foo: 1,
  bar: 2
})

const stateAsRefs = toRefs(state)
/*
stateAsRefs 的类型：{
  foo: Ref<number>,
  bar: Ref<number>
}
*/

// 这个 ref 和源属性已经“链接上了”
state.foo++
console.log(stateAsRefs.foo.value) // 2

stateAsRefs.foo.value++
console.log(state.foo) // 3
```
2. [计算属性](./part2.md)
3. 使用[watch](./part9.md)进行数据监听

