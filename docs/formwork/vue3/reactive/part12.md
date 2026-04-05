# 组件深入

## 组件注册

### 全局注册

可以使用 Vue 应用实例的 app.component() 方法，让组件在当前 Vue 应用中全局可用。

```js
import {createApp} from 'vue'

const app = createApp({})
// js 对象形式
app.component(
// 注册的名字
  'MyComponent',
// 组件的实现
  {
    /* ... */
  }
)
// 单文件形式
import MyComponent from './App.vue'

app.component('MyComponent', MyComponent);
```

app.component() 方法可以被链式调用：

```js
app
  .component('ComponentA', ComponentA)
  .component('ComponentB', ComponentB)
  .component('ComponentC', ComponentC)
```

### 局部注册

全局注册虽然很方便，但有以下几个问题：

1. 全局注册，但并没有被使用的组件无法在生产打包时被自动移除 (也叫“tree-shaking”)。如果你全局注册了一个组件，即使它并没有被实际使用，它仍然会出现在打包后的
   JS 文件中。
2. 全局注册在大型项目中使项目的依赖关系变得不那么明确。在父组件中使用子组件时，不太容易定位子组件的实现。和使用过多的全局变量一样，这可能会影响应用长期的可维护性。

相比之下，局部注册的组件需要在使用它的父组件中显式导入，并且只能在该父组件中使用。它的优点是使组件之间的依赖关系更加明确，并且对
tree-shaking 更加友好。

在使用 `<script setup>` 的单文件组件中，导入的组件可以直接在模板中使用，无需注册：

```vue

<script setup>
import ComponentA from './ComponentA.vue'
</script>

<template>
  <ComponentA/>
</template>
```

如果没有使用 `<script setup>`，则需要使用 components 选项来显式注册：

```js 
import ComponentA from './ComponentA.js'

export default {
  components: {
    ComponentA
  },
  setup() {
// ...
  }
}
```

:::warning 局部注册的组件在后代组件中并不可用。
:::

## Props

### prop 的声明

一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props，哪些是透传 attribute.

```vue
<!-- 在使用 <script setup> 的单文件组件中，props 可以使用 defineProps() 宏来声明：-->
<script setup>
const props = defineProps(['foo'])

console.log(props.foo)
</script>
<!--在没有使用 <script setup> 的组件中，prop 可以使用 props 选项来声明：-->
<script>
export default {
  props: ['foo'],
  setup(props) {
// setup() 接收 props 作为第一个参数
    console.log(props.foo)
  }
}
</script>

```

#### 除了使用字符串数组来声明 prop 外，还可以使用对象的形式

```js
// 使用 <script setup>
defineProps({
  title: String,
  likes: Number
})

// 非 <script setup>
export default {
  props: {
    title: String,
    likes: Number
  }
}
```

### 传递 prop 的细节

#### Prop的名字格式

如果一个 prop 的名字很长，应使用 camelCase 形式，因为它们是合法的 JavaScript 标识符，可以直接在模板的表达式中使用，也可以避免在作为属性
key 名时必须加上引号。

```vue

<template>
  <span>{{ greetingMessage }}</span>
</template>
<script>
defineProps({
  greetingMessage: String
})
</script>
```