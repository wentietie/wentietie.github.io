# 样式绑定

class绑定：

1. 对象语法

   ```html
   <div v-bind:class="{ active: isActive }"></div>
   // 或
   <div :class="{ active: isActive }"></div>
   ```


2. 数组语法

   ```html
   <div v-bind:class="['activeClass', 'errorClass']"></div>
   ```

style绑定：

