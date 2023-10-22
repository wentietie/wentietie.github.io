import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const t="/assets/1651217604(1)-955c71f3.jpg",p={},c=e(`<h1 id="第一部分-作用域和闭包" tabindex="-1"><a class="header-anchor" href="#第一部分-作用域和闭包" aria-hidden="true">#</a> 第一部分 作用域和闭包</h1><h2 id="_1-1-编译原理" tabindex="-1"><a class="header-anchor" href="#_1-1-编译原理" aria-hidden="true">#</a> 1.1 编译原理</h2><div class="custom-container tip"><p class="custom-container-title">尽管通常将 JavaScript 归类为“动态”或“解释执行”语言，但事实上它是一门编译语言。 但与传统的编译语言不同，它不是提前编译的，编译结果也不能在分布式系统中进行移植。</p></div><h3 id="_1-1-1-传统编译语言编译过程" tabindex="-1"><a class="header-anchor" href="#_1-1-1-传统编译语言编译过程" aria-hidden="true">#</a> 1.1.1 传统编译语言编译过程</h3><p>以JS语言举例</p><ol><li>分词/词法分析 这个过程会将书写的编程字符串分解成有意义的代码块，这些代码块被称为词法单元（token）。 例如：var a = 2;。这段程序通常被分解为var、a、=、2、;。空格是否被当作词法单元取决于空格在语言中是否有意义。</li></ol><div class="custom-container tip"><p class="custom-container-title">关于分词和词法分析的区别</p><ul><li>本书中原文的描述中文翻译是：<strong>如果词法单元生成器在判断 a 是一个独立的词法单元还是其他词法单元的一部分时，调用的是有状态的解析规则，那么这个过程就被称为词法分析</strong>。</li><li>通过查询资料本人的理解为：<strong>词法分析是用来做分词的手段，词法分析的目的是分词</strong>。</li></ul></div><ol start="2"><li>解析/语法分析 这个过程将词法单元流（数组）转换成一个由元素逐级嵌套所组成的代表了程序语法结构的树。这个树被称为“抽象语法树”(AST) 抽象语法树类似一个对象，这个对象中存储了对分词的的描述。</li><li>代码生成 将 AST 转换为可执行代码的过程被称为代码生成。</li></ol><h3 id="_1-1-2-js编译" tabindex="-1"><a class="header-anchor" href="#_1-1-2-js编译" aria-hidden="true">#</a> 1.1.2 JS编译</h3><p>简单地说，任何 JavaScript 代码片段在执行前都要进行编译（通常就在执行前）。因此， JavaScript 编译器首先会对 var a = 2; 这段程序进行编译，然后做好执行它的准备，并且 通常马上就会执行它。</p><h3 id="_1-1-3理解作用域" tabindex="-1"><a class="header-anchor" href="#_1-1-3理解作用域" aria-hidden="true">#</a> 1.1.3理解作用域</h3><h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><ol><li>引擎 从头到尾负责整个JS程序的编译及执行过程</li><li>编译器 负责语法分析及代码生成</li><li>作用域 负责收集并维护由所有声明的标识符（变量）组成的一系列查询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限。</li></ol><h4 id="过程" tabindex="-1"><a class="header-anchor" href="#过程" aria-hidden="true">#</a> 过程</h4><p>以“var a = 2;”为例</p><ol><li>编译器过程 <ol><li>遇到var a，编译器会查询作用域中是否存在变量a，如果有则忽略，没有则创建一个变量，并命名为a。这个过程被称为LHS查询。即赋值操作的左侧查询。</li><li>为引擎生成运行时所需要的代码，这些代码用来处理a = 2这个赋值操作。</li></ol></li><li>引擎过程 <ol><li>引擎会查询作用域中是否有a这个变量，如果有就直接使用这个变量，如果没有则向上一层作用域中查询。这个过程被称为RHS查询。即赋值操作的非左侧查询。</li><li>如果最后引擎没有找到a这个变量，则会抛出一个异常<div class="custom-container tip"><p class="custom-container-title">LHS和RHS LHS的意思是试图找到变量的容器本身，从而可以进行复制，而RHS的目的更强调“取到他的源值”。</p></div></li></ol></li></ol><p>GO/AO过程</p><ol><li>创建执行上下文</li><li>挂载变量（形参）声明 挂载函数声明</li><li>执行</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 以这段代码为例
 * a 的引用是一个RHS引用，因为这里a 并没有被赋予给任何变量，
 * 而是需要取到a的值并将值传递给log方法。
 * 而对a = 2 这个a的引用则是LHS引用，
 * 因为实际上我们并不关心a的值是什么，我们只需要将2赋值给a
 */</span>

<span class="token comment">// 举例</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2 </span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 *  首先对于方法foo 需要先声明一个变量foo，并将function赋值给foo（LHS）。
 *  所以foo(2) 的执行则是找到foo所对应的方法（RHS）并执行。
 *  而方法中形参的赋值a = 2是隐式的所以这个是需要一次LHS查询的。
 */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结论：LHS 和 RHS 的含义是“赋值操作的目标是谁（LHS）”以及“谁是赋值操作的源头 （RHS）”。 :::</p><h4 id="作用域嵌套" tabindex="-1"><a class="header-anchor" href="#作用域嵌套" aria-hidden="true">#</a> 作用域嵌套</h4><p>这一部分很好理解。就是当一个作用域中包含子作用域，那LHS和RHS在进行查询的时候，如果在当前作用域中没有查询到结果，会在外层嵌套作用域中继续查找。</p><h2 id="_1-2-词法作用域" tabindex="-1"><a class="header-anchor" href="#_1-2-词法作用域" aria-hidden="true">#</a> 1.2 词法作用域</h2><h3 id="_1-2-1-词法阶段" tabindex="-1"><a class="header-anchor" href="#_1-2-1-词法阶段" aria-hidden="true">#</a> 1.2.1 词法阶段</h3><p>词法作用域就是定义在词法阶段的作用域</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> b <span class="token operator">=</span> a <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">bar</span><span class="token punctuation">(</span>b <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2, 4, 12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中有三个逐级嵌套的作用域。为了帮助理解，可以将它们想象成几个逐级包含的气泡。</p><p><img src="`+t+`" alt="1651217604(1)"></p><ol><li>包含着整个全局作用域，其中只有一个标识符：foo。</li><li>包含着 foo 所创建的作用域，其中有三个标识符：a、bar 和 b。</li><li>包含着 bar 所创建的作用域，其中只有一个标识符：c。</li></ol><div class="custom-container tip"><p class="custom-container-title">遮蔽效应</p><ul><li>作用域查找会在找到第一个匹配的标识符时停止。在多层的嵌套作用域中可以定义同名的标识符，这叫作<strong>遮蔽效应</strong></li><li>抛开遮蔽效应，作用域查找始终从运行时所处的最内部作用域开始，逐级向外或者说向上进行，直到遇见第一个匹配的标识符为止。</li></ul></div><p>::: 注 全局变量会自动成为全局对象（比如浏览器中的 window 对象）的属性。可以通过形如window.a的方式去查找变量，绕开遮蔽效应 :::</p><h3 id="_1-2-2-欺骗词法" tabindex="-1"><a class="header-anchor" href="#_1-2-2-欺骗词法" aria-hidden="true">#</a> 1.2.2 欺骗词法</h3><p>eval方法和with方法。 eval会对js的性能产生影响，不建议使用。 另外一个不推荐使用 eval和with 的原因是会被严格模式所影响（限制）。with 被完全禁止，而在保留核心功能的前提下，间接或非安全地使用 eval也被禁止了。</p><h2 id="_1-3-函数作用域和块作用域" tabindex="-1"><a class="header-anchor" href="#_1-3-函数作用域和块作用域" aria-hidden="true">#</a> 1.3 函数作用域和块作用域</h2><div class="custom-container tip"><p class="custom-container-title">这一部分感觉比较浅显，所以写的比较少</p></div><h3 id="_1-3-1-函数中的作用域" tabindex="-1"><a class="header-anchor" href="#_1-3-1-函数中的作用域" aria-hidden="true">#</a> 1.3.1 函数中的作用域</h3><p>函数作用域的含义是指，属于这个函数的全部变量都可以在整个函数的范围内使用及复用（事实上在嵌套的作用域中也可以使用）</p><h4 id="隐藏内部实现" tabindex="-1"><a class="header-anchor" href="#隐藏内部实现" aria-hidden="true">#</a> 隐藏内部实现</h4><p>方法内部内容私有化，可以有效地规避重名带来的冲突</p><h4 id="函数作用域" tabindex="-1"><a class="header-anchor" href="#函数作用域" aria-hidden="true">#</a> 函数作用域</h4><p>声明函数名本身就会对所在作用域进行污染，所以在某些时候可以用立即执行函数来包裹方法。</p><p>#1.3.2 块级作用域</p><p>with关键字省略。</p><h4 id="try-catch" tabindex="-1"><a class="header-anchor" href="#try-catch" aria-hidden="true">#</a> try/catch</h4><p>catch会创建一个块级作用域，其中声明的变量只能在catch内部使用。当试图从别处引用时会抛出错误。</p><h4 id="let-和-const" tabindex="-1"><a class="header-anchor" href="#let-和-const" aria-hidden="true">#</a> let 和 const</h4><p>ES6 引入了let 和 const 关键字，提供了除了var 之外的声明变量的方式。 let 和 const 关键字可以将变量绑定到所在的任意作用域中。 其中两者的区别是 let 可以重新赋值 而const不可以。但是const声明的是对象或者数组，可以用来直接更改内部的属性。 比如const obj = {}; obj.name = &#39;wenatie&#39;</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> bar <span class="token operator">=</span> foo <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> bar1 <span class="token operator">=</span> bar
    bar <span class="token operator">=</span> <span class="token function">something</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>垃圾收集 另一个块作用域非常有用的原因和闭包及回收内存垃圾的回收机制相关。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在这里做点有趣的事情</span>
<span class="token punctuation">}</span>

<span class="token comment">// 在这个块中定义的内容完事可以销毁！</span>
<span class="token punctuation">{</span>
    <span class="token keyword">let</span> someReallyBigData <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">process</span><span class="token punctuation">(</span>someReallyBigData<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;my_button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">click</span><span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;button clicked&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">/*capturingPhase=*/</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * click 函数的点击回调并不需要 someReallyBigData 变量。这意味着当 process(..)
 * 执行后，在内存中占用大量空间的数据结构就可以被垃圾回收了。
 * 但是，如果使用var，由于 click 函数形成了一个覆盖整个作用域的闭包，
 * JavaScript 引擎极有可能依然保存着这个结构
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>let的for循环</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>
<span class="token doc-comment comment">/**
 * for 循环头部的 let 不仅将 i 绑定到了 for 循环的块中，
 * 事实上它将其重新绑定到了循环的每一个迭代中，确保使用上一个循环迭代结束时的值重新进行赋值。
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-4-提升" tabindex="-1"><a class="header-anchor" href="#_1-4-提升" aria-hidden="true">#</a> 1.4 提升</h2><h3 id="_1-4-1-先有鸡还是先有蛋" tabindex="-1"><a class="header-anchor" href="#_1-4-1-先有鸡还是先有蛋" aria-hidden="true">#</a> 1.4.1 先有鸡还是先有蛋</h3><p>直觉上会认为 JavaScript 代码在执行时是由上到下一行一行执行的。但实际上这并不完全正确，有一种特殊情况会导致这个假设是错误的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> a<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * 很多初学者会认为是 undefined，因为 var a 声明在 a = 2 之后，
 * 他们自然而然地认为变量被重新赋值了，因此会被赋予默认值 undefined。
 * 事实上真正的输出结果是 2。
 */</span>

<span class="token comment">// 再来看另外一段代码</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 鉴于上一个代码片段所表现出来的某种非自上而下的行为特点，
 * 你可能会认为这个代码片段也会有同样的行为而输出 2。
 * 还有人可能会认为，由于变量 a 在使用前没有先进行声明，因此会抛出 ReferenceError 异常。
 * 不幸的是两种猜测都是不对的。输出来的会是 undefined。
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-2-变量提升" tabindex="-1"><a class="header-anchor" href="#_1-4-2-变量提升" aria-hidden="true">#</a> 1.4.2 变量提升</h3><p>包括变量和函数在内的所有声明都会在任何代码被执行前首先被处理。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 当你看到 var a = 2; 时，可能会认为这是一个声明。
 * 但 JavaScript 实际上会将其看成两个声明：var a; 和 a = 2;。
 * 第一个定义声明是在编译阶段进行的。第二个赋值声明会被留在原地等待执行阶段。
 * 所以上边的代码会被处理成一下代码
 */</span>
<span class="token keyword">var</span> a<span class="token punctuation">;</span>
a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个过程就好像变量和函数声明从它们在代码中出现的位置被“移动”到了当前作用域的最上面。这个过程就叫作<strong>提升</strong>。 <br> 函数也是同理。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//这里</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined </span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 这段代码会被理解为一下形式</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined </span>
    a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 如下代码会报错是因为函数声明会被提升，但是函数表达式却不会被提升</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不是 ReferenceError, 而是 TypeError! </span>
<span class="token keyword">var</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ... </span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 另一种情况</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// TypeError </span>
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError </span>
<span class="token keyword">var</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ... </span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 会理解为如下代码</span>
<span class="token keyword">var</span> foo<span class="token punctuation">;</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// TypeError：foo is not a function </span>
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError：bar is not defined </span>
<span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> bar <span class="token operator">=</span> __self__
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">not defined 和 undefined 的区别</p><ul><li>not defined是没有定义</li><li>undefined是定义了没有赋值</li></ul></div><h3 id="_1-4-3-函数优先" tabindex="-1"><a class="header-anchor" href="#_1-4-3-函数优先" aria-hidden="true">#</a> 1.4.3 函数优先</h3><p>函数声明和变量声明都会被提升。但是一个值得注意的细节是函数会首先被提升，然后才是变量。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1 </span>
<span class="token keyword">var</span> foo<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 会被理解为</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1 </span>
<span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//var foo 尽管出现在 function foo()... 的声明之前，但它是重复的声明，因此被忽略了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-5-作用域闭包" tabindex="-1"><a class="header-anchor" href="#_1-5-作用域闭包" aria-hidden="true">#</a> 1.5 作用域闭包</h2><p>当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> bar<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> baz <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token comment">// 这就是闭包的效果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>无论使用何种方式对函数类型的值进行传递，当函数在别处被调用时都可以观察到闭包。也就是说我们常用的callback也是闭包</p><h3 id="_1-5-1-模块" tabindex="-1"><a class="header-anchor" href="#_1-5-1-模块" aria-hidden="true">#</a> 1.5.1 模块</h3>`,70),o=[c];function i(l,u){return s(),a("div",null,o)}const r=n(p,[["render",i],["__file","part1.html.vue"]]);export{r as default};
