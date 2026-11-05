:::tip 来源
本文整理自 [SegmentFault · vue3语法糖+ts组件传值](https://segmentfault.com/a/1190000043362378)
:::

# vue3 语法糖 + ts 组件传值

在开发中有些功能是通用的，而且逻辑大致相同，像这种东西可以封成一个组件，比较常用的就是函数封装，组件封装，组件封装是需要引入到页面使用的，所以通常它会有一些自己的方法，父子组件可以通过一些值来进行关联，这种方式也就是我们所说的组件传值，`vue3+ts`的组件传值其实就是组件传值加上了数据类型约束，并没有什么区别。
这里主要介绍`vue3`的`setup语法糖`组件传值，以删除功能为例子，父子组件主要用到`defineProps`和`defineEmits`来实现组件传值。

## 父传子

这里通过`import 自定义组件名 from 子组件路径` 来引入组件，在页面中使用`<组件名></组件名>`即可
**父组件**

```js
// 父组件引入子组件 通过自定义名称传入父组件的值
<DeleteGoods :father="userStatus" ></DeleteGoods>

<script setup lang="ts">
import { ref } from "vue"  
import DeleteGoods from '@/components/A_组件传值/A组件.vue'    // 引入子组件

// 父组件的值
const userStatus = ref('user')
</script>
```

**子组件**

```js
<div class="deleteName">子组件A</div>

<script setup lang="ts">
import { ref,defineProps} from "vue" 
// 通过defineProps接收父组件的值
const fatherElement = defineProps({
    // 接收传值   此处的father就是父组件的自定义名称 
    father:{   
        type:String,  // 数据类型
        default:"未传值"  // 未传值时的默认值
    }
 })
 console.log(fatherElement.father)  // 打印父组件的值：user
</script>
```

---

## 子传父

**子组件**

```js
<div class="deleteName" @click="deleteGoods">子组件A</div>

<script setup lang="ts">
import { ref,defineEmits} from "vue" 

// 子传父通过数组的形式传值，定义子传父的事件defineEmits([自定义名称])
const emit = defineEmits(['deleteOutcome'])

// 子组件值
const backStatus = ref<string>('back')

// 删除
const deleteGoods = () => {
// 通过emit来定义自定义名称和值，deleteOutcome为名称，{backStatus:backStatus.value}为值
        emit('deleteOutcome',{backStatus:backStatus.value}) // 回传 deleteOutcome为自定义名称
    }
}
</script>
```

**父组件**

```js
// 父组件引入子组件，通过@子组件的自定义名称关联子组件，valChange为自定义函数，子组件在触发回传deleteOutcome事件的时候，valChange函数会自动调用
<DeleteGoods @deleteOutcome="valChange"></DeleteGoods>

<script setup lang="ts">
import { ref } from "vue"  
import DeleteGoods from '@/components/A_组件传值/A组件.vue'    // 引入子组件

// 子组件回传的数据类型接口
interface IBackStatus {
    backStatus : string
}
// 子组件事件 自带val（自定义）回调参数，在参数这里规定数据类型
const valChange = (val : IBackStatus ) => {
    console.log(val); // 获取子组件的值  打印 user2
}
</script>
```

---

## 多个值的组件传值

上面演示了父子组件的单个传值，多个传值也是一样的，在组件上增加自定义名称或自定义事件即可。
父组件传值其实只需要定义好值和接收触发子组件回传事件即可，其余的什么也不用做，更多的是在子组件内完成的，子组件需要接收父组件的传值和回传子组件的值，如下：
**父组件**

```js
/*
:father="userStatus"   // 父传子
:moreA="moreA"  // 父传子
@moreB="moreB"   // 子传父
@deleteOutcome="valChange"  // 子传父
*/
<DeleteGoods 
:father="userStatus" 
:moreA="moreA" 
@moreB="moreB" 
@deleteOutcome="valChange"
>
</DeleteGoods>

// 子组件事件
interface IBackStatus {
    backStatus : string
}
const valChange = (val : IBackStatus) => {
    console.log(val); // 获取子组件的值
    userStatus.value = val.backStatus  // 更改父组件的值
}

// 子组件事件2
interface IBoreB {
    moreB : number
}
const moreB = (val : IBoreB) => {
    console.log(val); // 子组件的值
    moreA.value = val.moreB   // 更改父组件的值
}
```

**子组件**

```js
// 接收父组件的值
const fatherElement = defineProps({
    // 接收传值   此处的father就是父组件的自定义名称 
    father:{   
        type:String,  // 数据类型
        default:"未传值"  // 未传值时的默认值
    },
    moreA:{   
        type:Number,  // 数据类型
        default:"未传值"  // 未传值时的默认值
    }
 })

// 回传子组件的值
const emit = defineEmits(['deleteOutcome','moreB'])

const backStatus = ref<string>('back')

const deleteGoods = () => {
        emit('deleteOutcome',{backStatus:backStatus.value}) // 回传 
        emit('moreB',{moreB:200}) // 回传
    } 
}
```

**需要注意地方**

- 父传子的数据是单向绑的，而且是同步的，父组件的值更改，子组件的值也会同时更改，子组件不能更改父组件传来的值，因为它是只读的。
- 子组件不能直接操纵父组件的值，只能通过子传父，触发子传父的自定义事件，在这个事件里更改父组件的值。
- 子组件回传后，父组件这里接收的自定义事件会自动触发。
- ts中，数据回传时需要注意数据类型，父子组件的数据类型不一致会报错。

关于兄弟组件传值，请看另一篇：[vue3 语法糖setup 兄弟组件传值](https://link.segmentfault.com/?enc=t%2BbY10LcyOFZzubMnuOpGg%3D%3D.33BsZTz9pU5CbLPSm12MlJj%2Bhn7QQFMRunIAc%2FEiJCy%2BoY5aXALKjIVouD%2FZOCTtVvfxTmyCNg%2FAyT8Yom4z0CL%2Fo%2BnSC%2BVGG5bpqFZ7adsutv8prrN%2BMgm5a0rQjXSp)

---

案例源码：[https://gitee.com/wang_fan_w/ts-seminar](https://link.segmentfault.com/?enc=JDAtw6Jjecf3BKnSHaADiw%3D%3D.6xq0Ajl04CSsp9Yn2a%2FMXz0PtTBMAIUwoJZ6DVaaFby0vFa%2FYRHn4w%2BYuVYd9J0c)

如果觉得这篇文章对你有帮助，欢迎点亮一下star
