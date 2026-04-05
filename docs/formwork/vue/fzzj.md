# 父子组件

父组件：

```html
template>
  <div>
    <input type="text" v-model="currentValue">
    <customInput
    	ref="child"
      :params-test="currentValue"
      @changeFatherValue="changeFatherValue"
    />
  </div>
</template>

<script>
import customInput from './test'
export default {
  name: "second",
  components: {
    customInput
  },
  data(){
    return{
      currentValue: ''
    }
  },
  methods:{
    changeFatherValue(value){
      this.currentValue = value
    },
    
    // 调用子组件方法
    exeChildFunc(){
    	this.$refs.child.otherFunc()
    }
  }
}
</script>

<style scoped>

</style>
```

子组件：

```html
<template>
<div class="">
  <input type="text" @input="inputFunc" v-model="value">
</div>
</template>

<script>
export default {
  name: "test",
  props: ['paramsTest'],
  data(){
    return{
      value:''
    }
  },
  methods:{
    inputFunc(){
    
    	// 调用父组件方法
      this.$emit('changeFatherValue', this.value)
    },
    otherFunc(){}
  },
}
</script>

<style scoped>

</style>
```

