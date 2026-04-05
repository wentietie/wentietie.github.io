# JS事件-beforeunload

## 用法
```js
window.addEventListener('beforeunload',function (ev){
    ev.preventDefault();
    ev.returnValue = '真的要关闭咯';
})
```
:::warning
页面加载完成后，如果用户未对页面进行操作，比如“点击”、“输入”等等，onbeforeunload将不会被执行
:::
