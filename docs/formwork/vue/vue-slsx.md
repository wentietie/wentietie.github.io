# vue实例属性
## data: 自定义变量
示例： 
```javascript
<script>
export default {
  name: "test",
  data(){
    return {
        example1: '',
        example2: [],
        example3: {}
    }
  },
}
</script>

```

## methods: 自定义函数

示例： 

```javascript

<script>
export default {
  name: "test",
  data(){
    return {
        example1: '',
        example2: [],
        example3: {}
    }
  },
  methods: {
    // es6写法
    functionName(){
        
    },
    // es5写法
    function functionName(){
        
    }
  }
}
</script>
```

## components: 自定义组件

示例：

```javascript
<template>
    <div>
    	<compName></compName>
    </div>
</template>

<script>
    import compName from './component.vue'
export default {
  name: "test",
    components: {
        compName, // 直接注册
        compName: () => import('./component.vue') // 异步注册
    },
}
</script>
```

## computed: 计算属性

示例：

```js
<template>
    <div>
    	{{ example }}
    </div>
</template>

<script>
   
    export default {
        name: "test",
        data(){
            return {
                example1: '',
            }
        },
        computed: {
            example(){
            	// 当this.example 发生变化 此计算属性会重新进行计算
                let res = this.example1
            	return res
            }
        },
    }
</script>
```

## watch: 计算属性

示例：

```
<script>
   
    export default {
        name: "test",
        data(){
            return {
                example: '',
            }
        },
        watch: {
            example(newvalue, oldvalue){
            	// 执行的函数
            }
        },
    }
</script>
```

```js
// 三种形式
props: ['title', 'likes', 'isPublished', 'commentIds', 'author']
props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // or any other constructor
}
props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
```

