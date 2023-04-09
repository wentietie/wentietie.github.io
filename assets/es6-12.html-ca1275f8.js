import{_ as n,p as s,q as a,a1 as t}from"./framework-5866ffd3.js";const p={},e=t(`<h1 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> Proxy</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>Proxy用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。</p><p>Proxy可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。这也是Vue3的实现核心实现方法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> propKey<span class="token punctuation">,</span> receiver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">getting </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>propKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propKey<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> propKey<span class="token punctuation">,</span> value<span class="token punctuation">,</span> receiver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">setting </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>propKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propKey<span class="token punctuation">,</span> value<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="proxy-实例的方法" tabindex="-1"><a class="header-anchor" href="#proxy-实例的方法" aria-hidden="true">#</a> Proxy 实例的方法</h2><p><strong>Proxy 支持的拦截操作一共 13 种。</strong></p><ul><li>get(target, propKey, receiver)：拦截对象属性的读取，比如 proxy.foo 和 proxy[&#39;foo&#39;] 。</li><li>set(target, propKey, value, receiver)：拦截对象属性的设置，比如 proxy.foo = v 或 proxy[&#39;foo&#39;] = v ，返回一个布尔值。</li><li>has(target, propKey)：拦截 propKey in proxy 的操作，返回一个布尔值。</li><li>deleteProperty(target, propKey)：拦截 delete proxy[propKey] 的操作，返回一个布尔值。</li><li>ownKeys(target)：拦截 Object.getOwnPropertyNames(proxy) 、 Object.getOwnPropertySymbols(proxy) 、 Object.keys(proxy) 、 for...in 循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而 Object.keys() 的返回结果仅包括目标对象自身的可遍历属性。</li><li>getOwnPropertyDescriptor(target, propKey)：拦截 Object.getOwnPropertyDescriptor(proxy, propKey) ，返回属性的描述对象。</li><li>defineProperty(target, propKey, propDesc)：拦截 Object.defineProperty(proxy, propKey, propDesc） 、 Object.defineProperties(proxy, propDescs) ，返回一个布尔值。</li><li>preventExtensions(target)：拦截 Object.preventExtensions(proxy) ，返回一个布尔值。</li><li>getPrototypeOf(target)：拦截 Object.getPrototypeOf(proxy) ，返回一个对象。</li><li>isExtensible(target)：拦截 Object.isExtensible(proxy) ，返回一个布尔值。</li><li>setPrototypeOf(target, proto)：拦截 Object.setPrototypeOf(proxy, proto) ，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。</li><li>apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如 proxy(...args) 、 proxy.call(object, ...args) 、 proxy.apply(...) 。</li><li>construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如 new proxy(...args) 。</li></ul><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get()</h3><p>get方法用于拦截某个属性的读取操作，可以接受三个参数，依次为目标对象、属性名和 proxy 实例本身（严格地说，是操作行为所针对的对象），其中最后一个参数可选。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 如果访问目标对象不存在的属性，会抛出一个错误。如果没有这个拦截函数，访问不存在的属性，只会返回 undefined 。</span>
<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> propKey</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>propKey <span class="token keyword">in</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> target<span class="token punctuation">[</span>propKey<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ReferenceError</span><span class="token punctuation">(</span><span class="token string">&quot;Prop name \\&quot;&quot;</span> <span class="token operator">+</span> propKey <span class="token operator">+</span> <span class="token string">&quot;\\&quot; does not exist.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
proxy<span class="token punctuation">.</span>name <span class="token comment">// &quot;张三&quot;</span>
proxy<span class="token punctuation">.</span>age <span class="token comment">// 抛出一个错误</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>get 方法可以继承。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> proto <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propertyKey<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;GET &#39;</span> <span class="token operator">+</span> propertyKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> target<span class="token punctuation">[</span>propertyKey<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>proto<span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>foo <span class="token comment">// &quot;GET foo&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，拦截操作定义在 Prototype 对象上面，所以如果读取 obj 对象继承的属性时，拦截会生效。</p><h3 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> set()</h3><p>set方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和 Proxy 实例本身，其中最后一个参数可选。</p><p>假定 Person 对象有一个 age 属性，该属性应该是一个不大于 200 的整数，那么可以使用 Proxy 保证 age 的属性值符合要求。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> validator <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prop <span class="token operator">===</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;The age is not an integer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RangeError</span><span class="token punctuation">(</span><span class="token string">&#39;The age seems invalid&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 对于满足条件的 age 属性以及其他属性，直接保存</span>
    obj<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> validator<span class="token punctuation">)</span><span class="token punctuation">;</span>
person<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
person<span class="token punctuation">.</span>age <span class="token comment">// 100</span>
person<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token string">&#39;young&#39;</span> <span class="token comment">// 报错</span>
person<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">300</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="apply" tabindex="-1"><a class="header-anchor" href="#apply" aria-hidden="true">#</a> apply()</h3><p>apply方法拦截函数的调用、 call 和 apply 操作。apply方法可以接受三个参数，分别是目标对象、目标对象的上下文对象（ this ）和目标对象的参数数组。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> twice <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">apply</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> ctx<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">Reflect</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">sum</span> <span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> left <span class="token operator">+</span> right<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span> twice<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">proxy</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">proxy</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 22</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">proxy</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="has" tabindex="-1"><a class="header-anchor" href="#has" aria-hidden="true">#</a> has</h3><p>has方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。典型的操作就是 in 运算符。has 方法可以接受两个参数，分别是目标对象、需查询的属性名。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">has</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> key <span class="token keyword">in</span> target<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> target <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">_prop</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token string">&#39;_prop&#39;</span> <span class="token keyword">in</span> proxy <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>如果原对象不可配置或者禁止扩展，这时 has 拦截会报错。</li><li>has 拦截只对 in 运算符生效，对 for...in 循环不生效，导致不符合要求的属性没有被 for...in 循环所排除。</li></ul></div><h3 id="construct" tabindex="-1"><a class="header-anchor" href="#construct" aria-hidden="true">#</a> construct()</h3><p>construct方法用于拦截new命令，construct 方法可以接受三个参数。 target ：目标对象 args ：构造函数的参数对象 newTarget ：创造实例对象时， new 命令作用的构造函数 下面是拦截对象的写法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">construct</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;called: &#39;</span> <span class="token operator">+</span> args<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;, &#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">p</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value
<span class="token comment">// &quot;called: 1&quot;</span>
<span class="token comment">// 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>construct方法返回的必须是一个对象，否则会报错。</p></div><h3 id="deleteproperty" tabindex="-1"><a class="header-anchor" href="#deleteproperty" aria-hidden="true">#</a> deleteProperty()</h3><p>deleteProperty方法用于拦截delete 操作，如果这个方法抛出错误或者返回 false ，当前属性就无法被 delete 命令删除。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">deleteProperty</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">invariant</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token string">&#39;delete&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">delete</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">invariant</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>key<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Invalid attempt to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>action<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> private &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; property</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> target <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">_prop</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">delete</span> proxy<span class="token punctuation">.</span>_prop
<span class="token comment">// Error: Invalid attempt to delete private &quot;_prop&quot; property</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="defineproperty" tabindex="-1"><a class="header-anchor" href="#defineproperty" aria-hidden="true">#</a> defineProperty()</h3><p>defineProperty()方法拦截了 Object.defineProperty()操作。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">defineProperty</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> descriptor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> target <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
proxy<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span> <span class="token comment">// 不会生效</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getownpropertydescriptor" tabindex="-1"><a class="header-anchor" href="#getownpropertydescriptor" aria-hidden="true">#</a> getOwnPropertyDescriptor()</h3><p>getOwnPropertyDescriptor()方法拦截 Object.getOwnPropertyDescriptor()，返回一个属性描述对象或者 undefined 。</p><h3 id="getprototypeof" tabindex="-1"><a class="header-anchor" href="#getprototypeof" aria-hidden="true">#</a> getPrototypeOf()</h3><p>getPrototypeOf()方法主要用来拦截获取对象原型。具体来说，拦截下面这些操作。</p><ul><li>Object.prototype.proto</li><li>Object.prototype.isPrototypeOf()</li><li>Object.getPrototypeOf()</li><li>Reflect.getPrototypeOf()</li><li>instanceof</li></ul><h3 id="isextensible" tabindex="-1"><a class="header-anchor" href="#isextensible" aria-hidden="true">#</a> isExtensible()</h3><p>isExtensible() 方法拦截 Object.isExtensible() 操作。</p><h3 id="ownkeys" tabindex="-1"><a class="header-anchor" href="#ownkeys" aria-hidden="true">#</a> ownKeys()</h3><p>ownKeys() 方法用来拦截对象自身属性的读取操作。具体来说，拦截以下操作。</p><ul><li>Object.getOwnPropertyNames()</li><li>Object.getOwnPropertySymbols()</li><li>Object.keys()</li><li>for...in 循环</li></ul><h3 id="preventextensions" tabindex="-1"><a class="header-anchor" href="#preventextensions" aria-hidden="true">#</a> preventExtensions()</h3><p>preventExtensions()方法拦截 Object.preventExtensions() 。该方法必须返回一个布尔值，否则会被自动转为布尔值。</p><h3 id="setprototypeof" tabindex="-1"><a class="header-anchor" href="#setprototypeof" aria-hidden="true">#</a> setPrototypeOf()</h3><p>setPrototypeOf() 方法主要用来拦截 Object.setPrototypeOf()方法。</p><h3 id="proxy-revocable" tabindex="-1"><a class="header-anchor" href="#proxy-revocable" aria-hidden="true">#</a> Proxy.revocable()</h3><p>Proxy.revocable() 方法返回一个可取消的 Proxy实例。</p><h2 id="this-问题" tabindex="-1"><a class="header-anchor" href="#this-问题" aria-hidden="true">#</a> this 问题</h2><p>虽然 Proxy 可以代理针对目标对象的访问，但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致。主要原因就是在 Proxy 代理的情况下，目标对象内部的 this 关键字会指向 Proxy 代理。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">m</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> proxy<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
target<span class="token punctuation">.</span><span class="token function">m</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
proxy<span class="token punctuation">.</span><span class="token function">m</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一旦 proxy 代理 target.m ，后者内部的 this 就是指向 proxy ，而不是 target 。</p>`,55),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","es6-12.html.vue"]]);export{r as default};
