# 本地储存
SessionStorage 和 LocalStorage 使用操作基本类似，两者最主要的区别在于生命周期不同。

SessionStorage 顾名思义就是存在与会话阶段，当会话结束时，SessionStorage 存储的数据即会失效。
当前标签页关闭，即代表当前会话结束，当前页面的sessionStorage就会清空。而刷新和强制刷新并不会对sessionStorage产生影响。

相比之下 LocalStorage 生命周期就很长了，LocalStorage 是可以一直存活的，哪怕是你关闭浏览器，他依然存在。除非人为手动删除，所以我们可以将一些需要永久性存储的数据放置在 LocalStorage 中。
