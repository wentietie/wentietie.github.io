:::tip 来源
本文整理自 [SegmentFault · JavaScript执行（一）：Promise里的代码为什么比setTimeout先执行？](https://segmentfault.com/a/1190000018931543)
:::

# JavaScript 执行（一）：Promise 里的代码为什么比 setTimeout 先执行

### js实现异步的几种形式

- 回调函数
- 事件监听 - 事件驱动模式
- 发布/订阅 - 观察者模式
- Promises对象

### js异步历史

- 一个 JavaScript 引擎会常驻于内存中，它等待着我们把JavaScript 代码或者函数传递给它执行
- 在 ES3 和更早的版本中，JavaScript 本身还没有异步执行代码的能力，引擎就把代码直接顺次执行了，这个任务也就是宿主发起的任务。
- 在 ES5 之后，JavaScript 引入了 Promise，这样，不需要浏览器的安排，JavaScript 引擎本身也可以发起任务了。

### 宏观和微观任务

- 宏观任务：宿主发起的任务，每次的一段js代码执行过程，其实都是一个宏观任务(可大致理解为：宏观任务的队列就相当于事件循环）-  宿主级别
- 微观任务：JavaScript 引擎发起的任务 - JS 引擎级别
- 关系：每个宏观任务中维护一个微观任务队列 - 宏观任务中，JavaScript 的 Promise 还会产生异步代码，JavaScript 必须保证这些异步代码在一个宏观任务中完成
- 例子
  - Promise 永远在队列尾部添加微观任务
  - setTimeout 等宿主 API，则会添加宏观任务
- 执行顺序：
  - 微观任务：在所属的宏观任务队列所有同步任务执行完成之后执行
  - 宏观任务：宏任务的触发规则和调用次序
- eg:执行一个耗时 1 秒的 Promise。   即使耗时一秒的 c1 执行完毕，再 enque 的 c2，仍然先于 d 执行了，这很好地解释了微任务优先的原理。
  ```js
      setTimeout(()=>console.log("d"), 0)
    var r1 = new Promise(function(resolve, reject){
        resolve()
    });
    r.then(() => { 
        var begin = Date.now();
        // 强制了 1 秒的执行耗时，这样，我们可以确保任务 c2 是在setTimeout d后加入任务队列
        while(Date.now() - begin < 1000);
        console.log("c1") 
        new Promise(function(resolve, reject){
            resolve()
        }).then(() => console.log("c2"))
    });
  ```

### 事件循环

- 定义：JavaScript 引擎等待宿主环境分配宏观任务，在操作系统中，通常等待的行为都是一个事件循环 - 就是反复“等待 - 执行”
- 功能：判断循环是否结束、宏观任务队列等逻辑

- 如何分析异步执行的顺序：
  - 首先我们分析有多少个宏任务；
  - 在每个宏任务中，分析有多少个微任务；
  - 根据调用次序，确定宏任务中的微任务执行次序；
  - 根据宏任务的触发规则和调用次序，确定宏任务的执行次序；
  - 确定整个顺序。
- eg: setTimeout 把整个代码分割成了 2 个宏观任务，这里不论是 5 秒还是 0 秒，都是一样的。 第一个宏观任务中，包含了先后同步执行的 console.log(“a”); 和 console.log("b") setTimeout 后，第二个宏观任务执行调用了resolve，然后 then 中的代码异步得到执行，所以调用了 console.log(“c”)，最终输出的顺序才是a,b,c
  ```js
      function sleep(duration) {
          return new Promise(function(resolve, reject) {
              console.log("b");
              setTimeout(resolve,duration);
          })
      }
      console.log("a");
      sleep(5000).then(()=>console.log("c"));
  ```
