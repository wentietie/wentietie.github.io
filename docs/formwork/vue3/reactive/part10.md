# 模板引用

虽然 Vue 的声明性渲染模型为你抽象了大部分对 DOM 的直接操作，但在某些情况下，我们仍然需要直接访问底层 DOM 元素。要实现这一点，我们可以使用特殊的 ref attribute：
```vue
<template>
  <input ref="input" />
</template>
<script setup>
import { ref, onMounted } from 'vue'

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const input = ref(null)

onMounted(() => {
  input.value.focus()
})
</script>
```
使用步骤为：
1. 在DOM元素或vue组件上使用ref属性，并为其赋值：`<input ref="input" />`。
2. 在script中使用ref声明一个变量，变量名需要与1中的ref的值相同。`const input = ref(null)`.
3. 在组件挂载之后使用ref声明的变量即可获取元素。
## v-for 中的模板引用
当在 v-for 中使用模板引用时，对应的 ref 中包含的值是一个数组，它将在元素被挂载后包含对应整个列表的所有元素。
