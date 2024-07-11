import{_ as s,o as n,c as a,b as e}from"./app-CW2dCZSC.js";const p={},t=e(`<h1 id="promise-对象" tabindex="-1"><a class="header-anchor" href="#promise-对象"><span>Promise 对象</span></a></h1><h2 id="promise-的含义" tabindex="-1"><a class="header-anchor" href="#promise-的含义"><span>Promise 的含义</span></a></h2><p>Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了 Promise 对象。</p><p>所谓 Promise ，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。</p><p>Promise 对象有以下两个特点。</p><ol><li><p>对象的状态不受外界影响。 Promise 对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是 Promise 这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。</p></li><li><p>一旦状态改变，就不会再变，任何时候都可以得到这个结果。 Promise 对象的状态改变，只有两种可能：从 pending 变为 fulfilled 和从 pending 变为 rejected 。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对 Promise 对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。</p></li></ol><p><strong>注意，为了行文方便，本章后面的 resolved 统一只指 fulfilled 状态，不包含 rejected 状态。</strong></p><h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h2><p>ES6 规定，Promise 对象是一个构造函数，用来生成Promise 实例。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ... some code</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* 异步操作成功 */</span></span>
<span class="line">    <span class="token function">resolve</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise-prototype-then" tabindex="-1"><a class="header-anchor" href="#promise-prototype-then"><span>Promise.prototype.then()</span></a></h2><p>Promise 实例具有then方法，也就是说， then 方法是定义在原型对象 Promise.prototype 上的。它的作用是为 Promise 实例添加状态改变时的回调函数。前面说过， then 方法的第一个参数是 resolved 状态的回调函数，第二个参数（可选）是 rejected 状态的回调函数。</p><p>then 方法返回的是一个新的 Promise 实例（注意，不是原来那个 Promise 实例）。因此可以采用链式写法，即 then 方法后面再调用另一个 then 方法。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token function">getJSON</span><span class="token punctuation">(</span><span class="token string">&quot;/post/1.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token parameter">post</span> <span class="token operator">=&gt;</span> <span class="token function">getJSON</span><span class="token punctuation">(</span>post<span class="token punctuation">.</span>commentURL<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token parameter">comments</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;resolved: &quot;</span><span class="token punctuation">,</span> comments<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token parameter">err</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;rejected: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise-prototype-catch" tabindex="-1"><a class="header-anchor" href="#promise-prototype-catch"><span>Promise.prototype.catch()</span></a></h2><p>Promise.prototype.catch()方法是 .then(null, rejection)或 .then(undefined, rejection)的别名，用于指定发生错误时的回调函数。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token function">getJSON</span><span class="token punctuation">(</span><span class="token string">&#39;/posts.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">posts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 处理 getJSON 和 前一个回调函数运行时发生的错误</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;发生错误！&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个 catch 语句捕获。</strong></p><h2 id="promise-prototype-finally" tabindex="-1"><a class="header-anchor" href="#promise-prototype-finally"><span>Promise.prototype.finally()</span></a></h2><p>finally()方法用于指定不管Promise对象最后状态如何，都会执行的操作。该方法是 ES2018引入标准的。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">promise</span>
<span class="line"><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//code</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//code</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//code</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise-all" tabindex="-1"><a class="header-anchor" href="#promise-all"><span>Promise.all()</span></a></h2><p>Promise.all()方法用于将多个Promise 实例，包装成一个新的 Promise 实例。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> databasePromise <span class="token operator">=</span> <span class="token function">connectDatabase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> booksPromise <span class="token operator">=</span> databasePromise</span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>findAllBooks<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> userPromise <span class="token operator">=</span> databasePromise</span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>getCurrentUser<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">    booksPromise<span class="token punctuation">,</span></span>
<span class="line">    userPromise</span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>books<span class="token punctuation">,</span> user<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">pickTopRecommendations</span><span class="token punctuation">(</span>books<span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise-race" tabindex="-1"><a class="header-anchor" href="#promise-race"><span>Promise.race()</span></a></h2><p>Promise.race() 方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。只要其中有一个实例率先改变状态， 状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给回调函数。</p><h2 id="promise-allsettled" tabindex="-1"><a class="header-anchor" href="#promise-allsettled"><span>Promise.allSettled()</span></a></h2><p>Promise.allSettled() 方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只有等到所有这些参数实例都返回结果，不管是 fulfilled 还是 rejected ，包装实例才会结束。该方法由 ES2020 引入。</p><h2 id="promise-any" tabindex="-1"><a class="header-anchor" href="#promise-any"><span>Promise.any()</span></a></h2><p>Promise.any()方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只要参数实例有一个变成 fulfilled 状态，包装实例就会变成 fulfilled 状态；如果所有参数实例都变成 rejected 状态，包装实例就会变成 rejected 状态。该方法目前是一个第三阶段的提案 。</p><div class="custom-container warning"><p class="custom-container-title">注</p><p>Promise.any() 跟 Promise.race() 方法很像，只有一点不同，就是不会因为某个 Promise 变成 rejected 状态而结束。</p></div>`,31),o=[t];function i(l,c){return n(),a("div",null,o)}const u=s(p,[["render",i],["__file","es6-14.html.vue"]]),d=JSON.parse('{"path":"/static/JavaScript/es6/es6-14.html","title":"Promise 对象","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Promise 的含义","slug":"promise-的含义","link":"#promise-的含义","children":[]},{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":2,"title":"Promise.prototype.then()","slug":"promise-prototype-then","link":"#promise-prototype-then","children":[]},{"level":2,"title":"Promise.prototype.catch()","slug":"promise-prototype-catch","link":"#promise-prototype-catch","children":[]},{"level":2,"title":"Promise.prototype.finally()","slug":"promise-prototype-finally","link":"#promise-prototype-finally","children":[]},{"level":2,"title":"Promise.all()","slug":"promise-all","link":"#promise-all","children":[]},{"level":2,"title":"Promise.race()","slug":"promise-race","link":"#promise-race","children":[]},{"level":2,"title":"Promise.allSettled()","slug":"promise-allsettled","link":"#promise-allsettled","children":[]},{"level":2,"title":"Promise.any()","slug":"promise-any","link":"#promise-any","children":[]}],"git":{"updatedTime":1720499771000,"contributors":[{"name":"文铁铁~","email":"1179131421@qq.com","commits":1}]},"filePathRelative":"static/JavaScript/es6/es6-14.md"}');export{u as comp,d as data};