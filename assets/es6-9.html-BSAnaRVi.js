import{_ as s,o as n,c as a,b as e}from"./app-CW2dCZSC.js";const p={},t=e(`<h1 id="对象的扩展" tabindex="-1"><a class="header-anchor" href="#对象的扩展"><span>对象的扩展</span></a></h1><h2 id="属性的简洁表示" tabindex="-1"><a class="header-anchor" href="#属性的简洁表示"><span>属性的简洁表示</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// es5中对象使用变量</span></span>
<span class="line"><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token string">&#39;1&#39;</span></span>
<span class="line"><span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token string">&#39;2&#39;</span></span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">x</span><span class="token operator">:</span> x<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">y</span><span class="token operator">:</span> y</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// es6写法</span></span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    x<span class="token punctuation">,</span>  </span>
<span class="line">    y</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性名表达式" tabindex="-1"><a class="header-anchor" href="#属性名表达式"><span>属性名表达式</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span></span>
<span class="line"><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&#39;123&#39;</span></span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 以下几种表示方式是等价的</span></span>
<span class="line">obj<span class="token punctuation">.</span>foo <span class="token operator">=</span> foo</span>
<span class="line">obj<span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> foo</span>
<span class="line">obj<span class="token punctuation">[</span><span class="token string">&#39;f&#39;</span> <span class="token operator">+</span> <span class="token string">&#39;oo&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> foo</span>
<span class="line">obj<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> foo</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">注意</p><p>属性名表达式和简洁写法不能同时使用。</p></div><h2 id="方法的-name-属性" tabindex="-1"><a class="header-anchor" href="#方法的-name-属性"><span>方法的 name 属性</span></a></h2><p>函数的name属性，返回函数名。对象方法也是函数，因此也有 name 属性。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">person<span class="token punctuation">.</span>sayName<span class="token punctuation">.</span>name   <span class="token comment">// &quot;sayName&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果对象的方法使用了取值函数（ getter ）和存值函数（ setter ），则 name 属性不是在该方法上面，而是该方法的属性的描述对象的 get 和 set 属性上面，返回值是方法名前加上 get 和 set 。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">get</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token keyword">set</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">obj<span class="token punctuation">.</span>foo<span class="token punctuation">.</span>name</span>
<span class="line"><span class="token comment">// TypeError: Cannot read property &#39;name&#39; of undefined</span></span>
<span class="line"><span class="token keyword">const</span> descriptor <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">descriptor<span class="token punctuation">.</span>get<span class="token punctuation">.</span>name <span class="token comment">// &quot;get foo&quot;</span></span>
<span class="line">descriptor<span class="token punctuation">.</span>set<span class="token punctuation">.</span>name <span class="token comment">// &quot;set foo&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性的可枚举性和遍历" tabindex="-1"><a class="header-anchor" href="#属性的可枚举性和遍历"><span>属性的可枚举性和遍历</span></a></h2><h3 id="可枚举性" tabindex="-1"><a class="header-anchor" href="#可枚举性"><span>可枚举性</span></a></h3><p>引入“可枚举”（ enumerable ）这个概念的最初目的，就是让某些属性可以规避掉 for...in 操作，不然所有内部属性和方法都会被遍历到。比如，对象原型的 toString 方法，以及数组的 length 属性，就通过“可枚举性”，从而避免被 for...in 遍历到。</p><p>对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。 Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//  {</span></span>
<span class="line"><span class="token comment">//    value: 123,</span></span>
<span class="line"><span class="token comment">//    writable: true,</span></span>
<span class="line"><span class="token comment">//    enumerable: true,</span></span>
<span class="line"><span class="token comment">//    configurable: true</span></span>
<span class="line"><span class="token comment">//  }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性的遍历" tabindex="-1"><a class="header-anchor" href="#属性的遍历"><span>属性的遍历</span></a></h3><p>一共有5 种方法可以遍历对象的属性。</p><ul><li>for...in：循环遍历对象自身的和继承的可枚举属性</li><li>Object.keys(obj)： 返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。</li><li>Object.getOwnPropertyNames(obj)： 返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。</li><li>Object.getOwnPropertySymbols(obj)： 返回一个数组，包含对象自身的所有 Symbol 属性的键名。</li><li>Reflect.ownKeys(obj)：返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。</li></ul><h2 id="super-关键字" tabindex="-1"><a class="header-anchor" href="#super-关键字"><span>super 关键字</span></a></h2><p>我们知道， this关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字 super ，指向当前对象的原型对象。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> proto <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span>foo<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> proto<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">obj<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;hello&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>super 关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。</p></div><h2 id="对象的扩展运算符" tabindex="-1"><a class="header-anchor" href="#对象的扩展运算符"><span>对象的扩展运算符</span></a></h2><h3 id="解构赋值" tabindex="-1"><a class="header-anchor" href="#解构赋值"><span>解构赋值</span></a></h3><p>对象的解构赋值用于从一个对象取值，相当于将目标对象自身的所有可遍历的（enumerable）、尚未被读取的属性，分配到指定的对象上面。所有的键和它们的值，都会拷贝到新对象上面。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token operator">...</span>z<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">}</span></span>
<span class="line">x <span class="token comment">// 1</span></span>
<span class="line">y <span class="token comment">//2</span></span>
<span class="line">z <span class="token comment">// {a:3, b:4}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于解构赋值要求等号右边是一个对象，所以如果等号右边是 undefined 或 null ，就会报错，因为它们无法转为对象。 解构赋值必须是最后一个参数，否则会报错。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> <span class="token punctuation">{</span> <span class="token operator">...</span>z <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 运行时错误</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token punctuation">{</span> <span class="token operator">...</span>z <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// 运行时错误</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token punctuation">{</span> <span class="token operator">...</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">}</span> <span class="token operator">=</span> someObject<span class="token punctuation">;</span> <span class="token comment">// 句法错误</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> <span class="token operator">...</span>y<span class="token punctuation">,</span> <span class="token operator">...</span>z <span class="token punctuation">}</span> <span class="token operator">=</span> someObject<span class="token punctuation">;</span> <span class="token comment">// 句法错误</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，解构赋值的拷贝是浅拷贝，即如果一个键的值是复合类型的值（数组、对象、函数）、那么解构赋值拷贝的是这个值的引用，而不是这个值的副本。 另外，扩展运算符的解构赋值，不能复制继承自原型对象的属性。</p><h3 id="扩展运算符" tabindex="-1"><a class="header-anchor" href="#扩展运算符"><span>扩展运算符</span></a></h3><p>对象的扩展运算符（ ... ）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> z <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>z <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">n <span class="token comment">// { a: 3, b: 4 }</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//由于数组是特殊的对象，所以对象的扩展运算符也可以用于数组。</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">foo</span>
<span class="line"><span class="token comment">// {0: &quot;a&quot;, 1: &quot;b&quot;, 2: &quot;c&quot;}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//如果扩展运算符后面是一个空对象，则没有任何效果。</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// {...{}, a: 1}</span></span>
<span class="line"><span class="token comment">// { a: 1 }</span></span>
<span class="line">如果扩展运算符后面不是对象，则会自动将其转为对象。</span>
<span class="line"></span>
<span class="line"><span class="token comment">// 等同于 {...Object(1)}</span></span>
<span class="line"><span class="token comment">//{...1} // {}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 但是，如果扩展运算符后面是字符串，它会自动转成一个类似数组的对象，因此返回的不是空对象。</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span><span class="token operator">...</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// {0: &quot;h&quot;, 1: &quot;e&quot;, 2: &quot;l&quot;, 3: &quot;l&quot;, 4: &quot;o&quot;}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//上面的例子只是拷贝了对象实例的属性，如果想完整克隆一个对象，还拷贝对象原型的属性，可以采用下面的写法。</span></span>
<span class="line"><span class="token comment">// 写法一</span></span>
<span class="line"><span class="token keyword">const</span> clone1 <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">__proto__</span><span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token operator">...</span>obj</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 写法二</span></span>
<span class="line"><span class="token keyword">const</span> clone2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span></span>
<span class="line">    Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    obj</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 写法三</span></span>
<span class="line"><span class="token keyword">const</span> clone3 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span></span>
<span class="line">    Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptors</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//扩展运算符可以用于合并两个对象。</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> ab <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>a<span class="token punctuation">,</span> <span class="token operator">...</span>b <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 等同于</span></span>
<span class="line"><span class="token keyword">let</span> ab <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="链判断运算符" tabindex="-1"><a class="header-anchor" href="#链判断运算符"><span>链判断运算符</span></a></h2><p>在实际编程中，如果读取对象内部的某个属性，往往需要判断一下该对象是否存在。比如，要读取 message.body.user.firstName ，安全的写法是写成下面这样。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> firstName <span class="token operator">=</span> <span class="token punctuation">(</span>message</span>
<span class="line">  <span class="token operator">&amp;&amp;</span> message<span class="token punctuation">.</span>body</span>
<span class="line">  <span class="token operator">&amp;&amp;</span> message<span class="token punctuation">.</span>body<span class="token punctuation">.</span>user</span>
<span class="line">  <span class="token operator">&amp;&amp;</span> message<span class="token punctuation">.</span>body<span class="token punctuation">.</span>user<span class="token punctuation">.</span>firstName<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//或者使用三元运算符 ?: ，判断一个对象是否存在。</span></span>
<span class="line"><span class="token keyword">const</span> fooInput <span class="token operator">=</span> myForm<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;input[name=foo]&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> fooValue <span class="token operator">=</span> fooInput <span class="token operator">?</span> fooInput<span class="token punctuation">.</span>value <span class="token operator">:</span> <span class="token keyword">undefined</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样的层层判断非常麻烦，因此 ES2020 引入了“链判断运算符”（optional chaining operator） ?. ，简化上面的写法。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> firstName <span class="token operator">=</span> message<span class="token operator">?.</span>body<span class="token operator">?.</span>user<span class="token operator">?.</span>firstName <span class="token operator">||</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> fooValue <span class="token operator">=</span> myForm<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;input[name=foo]&#39;</span><span class="token punctuation">)</span><span class="token operator">?.</span>value</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>链判断运算符有三种用法。</p><ul><li>obj?.prop // 对象属性</li><li>obj?.[expr] // 同上</li><li>func?.(...args) // 函数或对象方法的调用</li></ul><h2 id="对象的新增方法" tabindex="-1"><a class="header-anchor" href="#对象的新增方法"><span>对象的新增方法</span></a></h2><h3 id="object-is" tabindex="-1"><a class="header-anchor" href="#object-is"><span>Object.is()</span></a></h3><p>Object.is用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。</p><h3 id="object-assign" tabindex="-1"><a class="header-anchor" href="#object-assign"><span>Object.assign()</span></a></h3><p>Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> source1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> source2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> source1<span class="token punctuation">,</span> source2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">target <span class="token comment">// {a:1, b:2, c:3}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46),l=[t];function o(c,i){return n(),a("div",null,l)}const u=s(p,[["render",o],["__file","es6-9.html.vue"]]),d=JSON.parse('{"path":"/static/JavaScript/es6/es6-9.html","title":"对象的扩展","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"属性的简洁表示","slug":"属性的简洁表示","link":"#属性的简洁表示","children":[]},{"level":2,"title":"属性名表达式","slug":"属性名表达式","link":"#属性名表达式","children":[]},{"level":2,"title":"方法的 name 属性","slug":"方法的-name-属性","link":"#方法的-name-属性","children":[]},{"level":2,"title":"属性的可枚举性和遍历","slug":"属性的可枚举性和遍历","link":"#属性的可枚举性和遍历","children":[{"level":3,"title":"可枚举性","slug":"可枚举性","link":"#可枚举性","children":[]},{"level":3,"title":"属性的遍历","slug":"属性的遍历","link":"#属性的遍历","children":[]}]},{"level":2,"title":"super 关键字","slug":"super-关键字","link":"#super-关键字","children":[]},{"level":2,"title":"对象的扩展运算符","slug":"对象的扩展运算符","link":"#对象的扩展运算符","children":[{"level":3,"title":"解构赋值","slug":"解构赋值","link":"#解构赋值","children":[]},{"level":3,"title":"扩展运算符","slug":"扩展运算符","link":"#扩展运算符","children":[]}]},{"level":2,"title":"链判断运算符","slug":"链判断运算符","link":"#链判断运算符","children":[]},{"level":2,"title":"对象的新增方法","slug":"对象的新增方法","link":"#对象的新增方法","children":[{"level":3,"title":"Object.is()","slug":"object-is","link":"#object-is","children":[]},{"level":3,"title":"Object.assign()","slug":"object-assign","link":"#object-assign","children":[]}]}],"git":{"updatedTime":1720499771000,"contributors":[{"name":"文铁铁~","email":"1179131421@qq.com","commits":1}]},"filePathRelative":"static/JavaScript/es6/es6-9.md"}');export{u as comp,d as data};