:::tip 来源
本文整理自 [SegmentFault · vue3 语法糖setup 兄弟组件传值](https://segmentfault.com/a/1190000043383498)
:::

# vue3 语法糖 setup 与兄弟组件传值

使用 mitt

```
// 全局引入
npm install mitt
或者
cnpm install mitt
```

在main文件中挂载

```js
import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt' // 导入mitt

const app = createApp(App)
app.config.globalProperties.$mitt = new mitt() // mitt在vue3中挂载到全局
app.mount('#app')
```

**组件1**   借助imtt 通过emit传值

```js
<script setup>
import { defineComponent,ref,reactive,getCurrentInstance } from 'vue'
// 兄弟组件传值
let { proxy } = getCurrentInstance()
let brother = ref(100)
function sendBrotherData() {
        // 通过暴露info  传递 brother 的值
        proxy.$mitt.emit('info', brother.value)
}
</script>
```

**组件2**

```js
<script setup>
import { defineComponent,ref,reactive,getCurrentInstance } from 'vue'

let { proxy } = getCurrentInstance()
    // 拿到info，获取info内部的值
    proxy.$mitt.on('info', (res) => {
        console.log(res)
        // 打印 100
    })
</script>
```

关于父子组件传值的内容请看另一篇：[vue3语法糖+ts组件传值](https://link.segmentfault.com/?enc=7afRImc%2FB%2BDwHrTVOyrNIg%3D%3D.j9EGoRvQBiCj9%2BJjr2f2hFvMO1tYteWllmiOe3%2BFA2bo9%2FmRYWV0rPSsHgB4OnRXyvx6Fc6c45iOr%2BTnGQQzMr4gMAA3kXXhQICiYQTpXfjOOkQkEaOh8oUxQhvwCI1B)
