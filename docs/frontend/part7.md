:::tip 来源
本文整理自 [SegmentFault · 浏览器：一个浏览器是如何工作的？（阶段三）](https://segmentfault.com/a/1190000018931498)
:::

# 浏览器是如何工作的（三）：CSS 加载与 CSSOM

### 加载css

- 加载是异步，不会影响DOM树的构建，只是说在CSS没处理好之前，构建好的DOM并不会显示出来
  - 启发：所以CSS不能太大，页面一打开将会停留较长时间的白屏，所以把图片/字体等转成base64放到CSS里面是一种不太推荐的做法
- DOM去匹配css rule的时候必须先等页面的css都下载完成
  - 启发：head中的css是要下载完的，body中放CSS的话，会重新计算

### css语法：选择器

- 在9课程中可以了解更多选择器：compound-selector
- 特点(css设计原则)：选择器的出现顺序，必定跟构建 DOM 树的顺序一致，即：保证选择器在 DOM 树构建到当前节点时，已经可以准确判断是否匹配，不需要后续节点信息 - 未来不可能会出现“父元素选择器”这种东西
- 流式渲染，每生成一个dom节点，便立刻去匹配相应的css规则
  - 空格: 后代，选中它的子节点和所有子节点的后代节点
  - : 子代，选中它的子节点
  - +：直接后继选择器，选中它的下一个相邻节点
  - ~：后继，选中它之后所有的相邻节点
  - ||：列，选中表格中的一列
- winter不讲怎么解析css规则啦，词法分析和语法分析不做赘述

### cssom

- CSSOM主要是DOM结构上的盒的描述，它基本上是依附于DOM树的，不要和css的语法树混淆
- cssom是有rule部分和view部分的，rule部分是在dom开始之前就构件完成的，而view部分是跟着dom同步构建的。

### css选择器匹配流程

前进：一个 CSS 选择器按照 compound-selector来拆成数段，每当满足一段条件的时候，就前进一段。

后退：选择器的作用范围，匹配到本标签的结束标签时（作用范围边缘）回退。

- 后代选择器 “空格” 规则：
  - 前进：找到了匹配 a#b 的元素时，我们才会开始检查它所有的子代是否匹配 .cls(前进到.cls)
  - 后退：当遇到 时，必须使得规则 a#b .cls 回退一步(回退到a#b)这样第三个 span 才不会被选中 - 后代选择器的作用范围是父节点的所有子节点，因此规则是在匹配到本标签的结束标签时回退。
- a#b .cls {
  ```js
      width: 100px;
  }

  <a id=b>
      <span>1<span>
      <span class=cls>2<span>
  </a>
  <span class=cls>3<span>
  ```
- 后继选择器“ ~ ” 规则：给选择器的激活- 带上一个条件：父元素 原因：后继选择器只作用于一层.按照 DOM 树的构造顺序，4 在 3 和 5 中间，我们就没有办法像前面讲的后代选择器一样通过激活或者关闭规则来实现匹配 过程：当前半段的 .cls 匹配成功时，后续 * 所匹配的所有元素的父元素都已经确定了（后继节点和当前节点父元素相同是充分必要条件
  ```js
  .cls~* {
      border:solid 1px green;
  }
  <div>
  <span>1<span>
  <span class=cls>2<span>
  <span>
      3
      <span>4</span>
  <span>
  <span>5</span>
  </div>
  ```
- 子代选择器“ >” 规则：拿当前节点的父元素作为父元素 当 DOM 树构造到 div 时，匹配了 CSS 规则的第一段 激活.cls并且指定父元素必须是当前 div
  ```js
  div>.cls {
      border:solid 1px green;
  }
  <div>
  <span>1<span>
  <span class=cls>2<span>
  <span>
      3
      <span>4</span>
  <span>
  <span>5</span>
  </div>
  ```
- 直接后继选择器“ +”
  - 思路1：只对唯一一个元素生效，把 #id+.cls 都当做检查某一个元素的选择器
  - 思路2：给后继选择器加上一个 flag，使它匹配一次后失效
- 列选择器“ || ” 专门针对表格的选择器，跟表格的模型建立相关，winter不讲这个啦
- 其他
  - CSS 选择器还支持逗号分隔
    ```
    视为两条规则的一种简易写法
    a#b, .cls {}
    a#b {}
    ```
  - 选择器可能有重合
    ```
     使用树形结构来进行一些合并
     #a .cls {}
     #a span {}
     #a>span {}

     #a 
         < 空格 >.cls
         < 空格 >span 
    ```
- 总结：
  - CSS 计算：把 CSS 规则应用到 DOM 树上，为 DOM 结构添加显示相关属性的过程，得到了一棵带有 CSS 属性的树
  - 介绍了选择器的几种复合结构应该如何实现
- 扩展阅读：从Chrome源码看浏览器如何计算CSS [https://zhuanlan.zhihu.com/p/...](https://link.segmentfault.com/?enc=EwJzdEzD%2BFspC45CQLDaKQ%3D%3D.wP%2FSSh7VTEhx9oFguT%2BdW%2FtSW1iP9mTrM3BcZRv1rw2UDENZfgSiFAxjprg0wsuS)
