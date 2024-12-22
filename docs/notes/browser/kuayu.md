# 跨域
当一个请求url的协议、域名、端口三者之间任意一个与当前页面url不同即为跨域。
:::tip
出于浏览器的同源策略限制。同源策略（Sameoriginpolicy）是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，则浏览器的正常功能可能都会受到影响。可以说Web是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现。同源策略会阻止一个域的javascript脚本和另外一个域的内容进行交互。所谓同源（即指在同一个域）就是两个页面具有相同的协议（protocol），主机（host）和端口号（port）。
:::
## 非同源限制
- 无法读取非同源网页的 Cookie、LocalStorage 和 IndexedDB
- 无法接触非同源网页的 DOM
- 无法向非同源地址发送 AJAX 请求

## 如何实现跨域请求

### jsonp
JSONP是JSON with Padding的略称。它是一个非官方的协议，它允许在服务器端集成Script tags返回至客户端，通过javascript callback的形式实现跨域访问（这仅仅是JSONP简单的实现形式）。
利用了 script 不受同源策略的限制，实现了跨域请求

缺点：只能 get 方式，易受到 XSS攻击

### CORS（Cross-Origin Resource Sharing）,跨域资源共享
当使用XMLHttpRequest发送请求时，如果浏览器发现违反了同源策略就会自动加上一个请求头 origin；

后端在接受到请求后确定响应后会在 Response Headers 中加入一个属性 Access-Control-Allow-Origin；

浏览器判断响应中的 Access-Control-Allow-Origin 值是否和当前的地址相同，匹配成功后才继续响应处理，否则报错

缺点：忽略 cookie，浏览器版本有一定要求

### 代理跨域请求
前端向发送请求，经过代理，请求需要的服务器资源

缺点：需要额外的代理服务器

### Html5 postMessage 方法
允许来自不同源的脚本采用异步方式进行有限的通信，可以实现跨文本、多窗口、跨域消息传递

缺点：浏览器版本要求，部分浏览器要配置放开跨域限制

### 修改 document.domain 跨子域

相同主域名下的不同子域名资源，设置 document.domain 为 相同的一级域名

缺点：只能是同一一级域名；相同协议；相同端口

### 基于 Html5 websocket 协议
websocket 是 Html5 一种新的协议，基于该协议可以做到浏览器与服务器全双工通信，允许跨域请求

缺点：浏览器一定版本要求，服务器需要支持 websocket 协议

### document.xxx + iframe
通过 iframe 是浏览器非同源标签，加载内容中转，传到当前页面的属性中

缺点：页面的属性值有大小限制

## 前端常用代理

### webpack
```js
module.exports = {
    // ...
    devServer: {
        port: 9000,
        proxy: {
            '/api': {
                target: 'https://api.github.com'
            }
        }
        // ...
    }
}
```

### vite
```js
export default defineConfig({
    server: {
        proxy: {
            // 字符串方式
            '/foo': 'http://localhost:4567',
            // 配置项方式
            '/api': {
                target: 'https://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
        }
    }
})
```
