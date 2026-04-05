# 自动高度
以vue示例

```vue
<script setup lang="ts">
import {Icon, Field} from 'vant'
import {reactive, ref} from "vue";

const form = reactive({
  name: '',
  desc: '',
  price: '',
  stock: '',
})

const showContent = ref(true)
</script>

<template>
  <div class="groupForm">
    <div class="groupTitle" @click="showContent = !showContent">
      <span>头部</span>
      <div :class="['titleIcon', showContent && 'titleIconRound']">
        <Icon name="shop-o"></Icon>
      </div>
    </div>
    <div :class="['groupFormContent', showContent && 'groupFormContentShow']">
      <div>
        <Field v-model="form.name" label="名称" placeholder="请输入名称"/>
        <Field v-model="form.desc" label="描述" placeholder="请输入描述"/>
        <Field v-model="form.price" label="价格" placeholder="请输入价格"/>
        <Field v-model="form.stock" label="库存" placeholder="请输入库存"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.groupForm {

}

.groupTitle {
  width: 100%;
  height: 20px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  background-color: red;
}

.titleIcon {
  transition: 0.1s;
}

.titleIconRound {
  transform: rotateZ(180deg);
}

.groupFormContent {
  display: grid;
  grid-template-rows: 0fr;
  transition: 100ms grid-template-rows ease;
}

.groupFormContentShow {
  grid-template-rows: 1fr;
}

.groupFormContent > div {
  overflow: hidden;
}
</style>

```
