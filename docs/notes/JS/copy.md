:::tip 来源
本文整理自 [SegmentFault · 深拷贝与浅拷贝](https://segmentfault.com/a/1190000021110303)
:::

# 深拷贝与浅拷贝

**如何区分深拷贝与浅拷贝**

首先我们需要了解js的数据类型

```js
Javascript共有8种数据类型：Object,Number,String,Boolean,Undefined,Null,Symbol,Bigint，
这些数据类型又分为基本数据类型（原始数据类型）与复杂的数据类型（引用数据类型）
   
   基本数据类型：Number,String,Boolean,Undefined,Null,
   复杂数据类型：Object 可以分成3个子类型【狭义的对象(object),数组（array),函数(function)】
   ES6新增的Symbol:表示独一无二的值，最大的用法是用来定义对象的唯一属性名。
   ES6新增的BigInt:是一种数字类型的数据，它可以表示任意精度格式的整数。
```

**浅拷贝**

```js
let a=[0,1,2,3,4]
let b=a;
console.log(a===b); //true
a[0]=1;
console.log(a,b);
//a:[1,1,2,3,4]
//b:[1,1,2,3,4]
```

由于引用数据类型--名存在栈内存中（存的只是个地址，该地址指向堆内存），值存在于堆内存中。b=a只是把引用地址赋值给了b，当修改数组的时候a，b依旧是指向同一个堆内存。因此修改a，b会跟着变。

**深拷贝**

```js
let c=1
let d=c;
c=2
//c:2
//d:1
```

由于基本类型--名值存储在栈内存中，当d=c时栈内存会新开辟一个内存存放d与d的值，因此修改c=2，对d不会造成影响。但这也不算深拷贝，深拷贝本身只针对较为复杂的object类型数据，深拷贝，是拷贝对象各个层级的属性。

**通过上面的两个例子，我们可以得出，如果在堆内存中开辟一个新的内存专门为b存放值，像基本类型那样，就达到深拷贝的效果了。**

使用JSON进行深拷贝

```js
function deep(obj){
    let obj = JSON.stringify(obj)
    let objClone = JSON.parse(obj);
    return objClone
}    
let a=[0,1,[2,3],4]
let b=deep(a);
a[0]=1;
a[2][0]=1;
console.log(a,b);
```

使用递归进行深拷贝

```js
function deep(obj){
    let objClone = Array.isArray(obj)?[]:{};
    if(obj && typeof obj==="object"){
        for(key in obj){
            if(obj.hasOwnProperty(key)){
                //判断ojb子元素是否为对象，如果是，递归复制
                if(obj[key]&&typeof obj[key] ==="object"){
                    objClone[key] = deep(obj[key]);
                }else{
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}    
let a=[1,2,3,4]
let b=deep(a)
a[0]=2;
console.log(a,b);
```

总结：**简单来说深拷贝就是赋值，浅拷贝就是赋对象。**
