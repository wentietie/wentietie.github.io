# 条件渲染和列表渲染
## 条件渲染 `v-if`
`v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回真值时才被渲染。 使用逻辑和表达式中的if-else相同
### v-if
```vue
<h1 v-if="awesome">Vue is awesome!</h1>
```
### v-else
使用 v-else 为 v-if 添加一个“else 区块”。
```vue
<button @click="awesome = !awesome">Toggle</button>

<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```
:::tip
一个 v-else 元素必须跟在一个 v-if 或者 v-else-if 元素后面，否则它将不会被识别。
:::

### v-show
另一个可以用来按条件显示一个元素的指令是 v-show。其用法与v-if相同.

不同之处在于 v-show 会在 DOM 渲染中保留该元素；v-show 仅切换了该元素上名为 display 的 CSS 属性。v-show 不支持在 `<template>` 元素上使用，也不能和 v-else 搭配使用。

## v-for
我们可以使用 v-for 指令基于一个数组来渲染一个列表。v-for 指令的值需要使用 item in items 形式的特殊语法，其中 items 是源数据的数组，而 item 是迭代项的别名.

在 v-for 块中可以完整地访问父作用域内的属性和变量。v-for 也支持使用可选的第二个参数表示当前项的位置索引。
```vue
<li v-for="(item, index) in items">
  {{ item.message }} - {{index}}
</li>

const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
```
v-for 变量的作用域和下面的 JavaScript 代码很类似：
```js
const parentMessage = 'Parent'
const items = [
  /* ... */
]

items.forEach((item, index) => {
  // 可以访问外层的 `parentMessage`
  // 而 `item` 和 `index` 只在这个作用域可用
  console.log(parentMessage, item.message, index)
})

```