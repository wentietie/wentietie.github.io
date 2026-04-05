# 设计模式
### 单例模式
一个类只有一个实例，并提供一个访问他的全局访问接口。
```js
class Singleton {
    constructor(){
        this._instance = null    
    }
    static getInstance(){
        if (this._instance){
            return this._instance
        }
    }
}
```

### 工厂模式
根据不同的参数，返回不同类的实例。
核心思想：将对象的创建与对象的实现分离。实现复杂，但使用简单。工厂会给我们提供一个工厂方法，我们直接去调用即可。

例子： js 中的 document.createElement() 方法；Vue 和 React中的createElement() 方法


### 策略模式
利用对象或Map来简化if-else和switch
```js
function switchFn (type) {
    switch (type){
        case 1: 
            // ...
            break;
        case 2:
            //
            break;
        default:
            break;
    }
}

/**
 * 改写
 */
class KeyToFn {
    static __keyFn = {}
    static add(key, fn) {
        if(!KeyToFn.__keyFn[key]){
            KeyToFn.__keyFn[key] = fn
        }else {
            throw new Error('已经包含该键名对应的方法，如果想继续更改，请使用update方法')
        }
    }
    static update(key, fn) {
        if(KeyToFn.__keyFn[key]){
            KeyToFn.__keyFn[key] = fn
        }else {
            throw new Error('不包含该键名对应的方法，如果想继续添加，请使用add方法')
        }
    }
    static delete(key){
        if(KeyToFn.__keyFn[key]){
            Reflect.deleteProperty(KeyToFn.__keyFn, key)
        }else {
            throw new Error('对象中不包含该键值对')
        }
    }
    static exeFn (key, ...option){
        KeyToFn.__keyFn[key] && KeyToFn.__keyFn[key](...option)
    }
}
KeyToFn.add('1', (a) => {
    console.log(a)
})
KeyToFn.add('2', (a, b) => {
    console.log(a + b)
})

KeyToFn.exeFn('1', 'abc')
KeyToFn.exeFn('2', 'abc', 'def')
```

### 