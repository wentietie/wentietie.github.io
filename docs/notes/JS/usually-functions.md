# 一些常用的方法

### 防抖

```js
const debounce = (() => {
    let timer = null
    return (callback, wait = 800) => {
        timer && clearTimeout(timer)
        timer = setTimeout(callback, wait)
    }
})()
```

### 节流

```js
const throttle = (() => {
    let last = 0
    return (callback, wait = 800) => {
        let now = +new Date()
        if (now - last > wait) {
            callback()
            last = now
        }
    }
})()
```

### 大小写转换

```js
/**
 *
 * @param str 待转换的字符串
 * @param type 1-全大写 2-全小写 3-首字母大写
 * @returns {string|*}
 */
const turnCase = (str, type) => {
        switch (type) {
            case 1:
                return str.toUpperCase()
            case 2:
                return str.toLowerCase()
            case 3:
                return str[0].toUpperCase() + str.substring(1).toLowerCase()
            default:
                return str
        }
    }
```

### 数组去重

```typescript
const uniqueArrayObject = (arr: Array<T> = [], key: string = ''): Array<T> => {
    if (key) {
        return Array.from(new Set(arr))
    }
    const map = new Map()
    arr.map((item: T) => {
        if (!map.has(item[key])) {
            map.set(item[key], item)
        }
    })
    return [...map].map((item: Array) => {
        return item[1]
    })
}
```

### 存储操作

```js
class MyCache {
    constructor(isLocal = true) {
        this.storage = isLocal ? localStorage : sessionStorage
    }

    setItem(key, value) {
        if (typeof (value) === 'object') value = JSON.stringify(value)
        this.storage.setItem(key, value)
    }

    getItem(key) {
        try {
            return JSON.parse(this.storage.getItem(key))
        } catch (err) {
            return this.storage.getItem(key)
        }
    }

    removeItem(key) {
        this.storage.removeItem(key)
    }

    clear() {
        this.storage.clear()
    }

    key(index) {
        return this.storage.key(index)
    }

    length() {
        return this.storage.length
    }
}

const localCache = new MyCache()
const sessionCache = new MyCache(false)

export {localCache, sessionCache}
```

### 深拷贝

### 遍历

#### 深度优先
```ts
function deep(node: any[]) {
    const list = []

    function tra(nodeC) {
        nodeC.forEach(item => {
            list.push(item)
            if(item.children){
                tra(item.children)
            }
        })
    }
    tra(node)
    return list
}
```
#### 广度优先
```typescript
/**
 * 
 * @param node
 */
function wide(node: any[]){
    const list = [...node]
    for(let i=0;i<list.length;i++){
        const item = list[i]
        if(item.children){
            list.push(...item.children)
        }
    }
    return list
}
```