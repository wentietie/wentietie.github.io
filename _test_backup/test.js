const obj = {
    foo: 'foo'
}
function reactive(target){
    // 首先，不是对象直接返回
    if (typeof target !== 'object' || target === null) {
        return target
    }
    // 如果是对象的话，则要遍历对象的key
    Object.keys(target).map(key => {
        defineReactive(target, key, target[key])
    })
}

// 此时需要递归遍历对象，使对象所有的值都拦截到
function defineReactive(obj, key, value){
    reactive(value)
    Object.defineProperty(obj, key, {
        get(){
            console.log('get:::'+key);
            return value
        },
        set(newVal){
            if(newVal != value){
                // 修改的时候将新的值改为响应式
                reactive(newVal)
                console.log('set:::' + key + "=" + newVal)
                value = newVal
                // 在这个地方我们监听到了对象的修改那我们就需要在更改之后调用更新页面的方法
                update()
            }
        }
    })
}

function update() {

}

const reactiveData = reactive(obj)

obj.foo
obj.foo = '123'
