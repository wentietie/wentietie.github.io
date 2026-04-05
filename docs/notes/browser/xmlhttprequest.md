# XMLHttpRequest,fetch和axios

## XMLHttpRequest

| 属性或方法         | 说明                                                         |
| ------------------ | ------------------------------------------------------------ |
| onreadystatechange | 方法，当readyState属性发生变化时触发                         |
| readyState         | 一个短整型数字，代表请求的状态码                             |
| response           | 返回响应体                                                   |
| responseText       | 返回DOMString，是一个响应文本，包含请求的响应。失败时是null  |
| responseType       | 响应的类型                                                   |
| status             | 代表响应的状态，即浏览器状态码                               |
| statusText         | 响应状态文本                                                 |
| timeout            | 请求的最大请求时间                                           |
| upload             | 代表上传进度                                                 |
| abort              | 方法，用于中止请求                                           |
| open               | 方法，初始化请求。只能在js代码中使用，如果在native code中初始化，请使用openRequest（） |
| send               | 方法，发送请求                                               |
| setRequestHeader   | 方法，设置请求头，必须在open和send之间进行设置               |
|                    |                                                              |

readyState说明

| 值   | 状态               | 描述                                                |
| ---- | ------------------ | --------------------------------------------------- |
| `0`  | `UNSENT`           | 代理被创建，但尚未调用 open() 方法。                |
| `1`  | `OPENED`           | `open()` 方法已经被调用。                           |
| `2`  | `HEADERS_RECEIVED` | `send()` 方法已经被调用，并且头部和状态已经可获得。 |
| `3`  | `LOADING`          | 下载中； `responseText` 属性已经包含部分数据。      |
| `4`  | `DONE`             | 下载操作已完成。                                    |

实现一个简单的ajax

```js
function (config: {
           	url: '',
           	method: 'get',
           	data: {},
    		success,
            fail
           }) {
    const xhr = new XMLHttpRequest()
	xhr.open(method, url, true);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
               success(xhr.responseText)
            }else{
                fail(xhr.responseText)
            }
        }
    }
    xhr.send()
}
```

实现一个简单的fetch

```js
function

```

 从url到页面渲染的全过程

1. DNS域名接续

   DNS服务器解析域名，获取ip地址

2. 三次握手

   进行tcp连接

   第一次：客户端给服务端发送一个SYN报文，并指定初始化序列号。服务端收到时会得到客户端的发送能力和服务端的接受能力正常的结论

   第二次：服务端收到报文后回应答一个报文给客户端。客户端收到后，会得到服务端的发送能力，接受能力 客户端的接受能力正常。

   第三次：客户端再次发送一个报文。服务端收到后确认客户端的接受能力正常

   三次握手目的：确认客户端和服务端确认对方的发送和接受能力是否正常

3. 浏览器发送http请求

4. 服务器处理http请求

5. 浏览器解析并渲染界面

   1. 解析html，构建DOM树
   2. 解析css，生成css规则树
   3. 合并DOM树和CSS规则，生成render树
   4. 布局render树，进行各元素的尺寸位置的计算
   5. 回值render树，回值页面像素信息

6. 断开连接 4次挥手

   

