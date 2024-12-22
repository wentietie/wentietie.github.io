# 组件基础
## 定义一个组件
每一个.vue都是组件。叫单文件组件。
```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>
```

## 使用方法
```vue
<script setup>
// 1. 引入
import ButtonCounter from './ButtonCounter.vue'
</script>

<template>
<!--  父组件-->
  <h1>Here is a child component!</h1>
<!--  2. 使用-->
  <ButtonCounter />
</template>
```

## 数据传递
父组件引用子组件
```vue
<script setup>
// 1. 引入
import Child from './Child.vue';
const fData = ref({
  someFields: '123'
})
</script>

<template>
<!--  父组件-->
  <h1>Here is a child component!</h1>
<!--  2. 使用-->
<!-- 数据传递格式为 :xx="yy" xx为子组件接收的变量名， yy为父组件的变量 -->
  <Child :receive-data="fData" />
</template>
```

子组件
```vue
<script setup>
// 使用defineProps函数获取接受的变量 变量为小驼峰
const props = defineProps(['receiveData'])
</script>

<template>
<!--  模板中使用变量-->
{{props.receiveData}}
</template>
```
当然也可以为props标注类型。可以参考官网[为props标注类型](https://cn.vuejs.org/guide/typescript/composition-api.html#typing-component-props)

## 事件交互
步骤与数据交互相同，区别在于使用方式。
父组件引用子组件
```vue
<script setup>
// 1. 引入
import Child from './Child.vue';
const fn = () => {
//  do some things
}
</script>

<template>
<!--  父组件-->
  <h1>Here is a child component!</h1>
<!--  2. 使用-->
<!-- 数据传递格式为 :xx="yy" xx为子组件接收的变量名， yy为父组件的变量 -->
  <Child @receive-fn="fn" />
</template>
```

子组件
```vue
<script setup>
// 使用defineProps函数获取接受的变量 变量为小驼峰
const emit = defineEmits(['receive-fn'])
</script>

<template>
<!--  模板中使用传入的方法 emit('方法名', 参数)-->
<button @click="emit('receive-fn', data)">触发</button>
</template>
```

