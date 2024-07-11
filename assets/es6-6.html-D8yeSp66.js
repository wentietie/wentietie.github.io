import{_ as n,o as s,c as a,b as e}from"./app-CW2dCZSC.js";const p={},t=e(`<h1 id="数值的扩展" tabindex="-1"><a class="header-anchor" href="#数值的扩展"><span>数值的扩展</span></a></h1><h2 id="二进制和八进制表示法" tabindex="-1"><a class="header-anchor" href="#二进制和八进制表示法"><span>二进制和八进制表示法</span></a></h2><p>ES6 提供了二进制和八进制数值的新的写法，分别用前缀0b（或0B）和0o（或0O）表示。从 ES5 开始，在严格模式之中，八进制就不再允许使用前缀0表示，ES6 进一步明确，要使用前缀0o表示。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token number">0b111110111</span> <span class="token operator">===</span> <span class="token number">503</span> <span class="token comment">// true</span></span>
<span class="line"><span class="token number">0o767</span> <span class="token operator">===</span> <span class="token number">503</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 如果要将0b和0o前缀的字符串数值转为十进制，要使用Number方法。</span></span>
<span class="line"></span>
<span class="line"><span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&#39;0b111&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// 7</span></span>
<span class="line"><span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&#39;0o10&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// 8</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="number-isfinite-number-isnan" tabindex="-1"><a class="header-anchor" href="#number-isfinite-number-isnan"><span>Number.isFinite(), Number.isNaN()</span></a></h2><p>ES6 在Number对象上，新提供了Number.isFinite()和Number.isNaN()两个方法。</p><p>Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity。注意，如果参数类型不是数值，Number.isFinite一律返回false。</p><p>Number.isNaN()用来检查一个值是否为NaN。如果参数类型不是NaN，Number.isNaN一律返回false。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token number">0.8</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line">Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line">Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line">Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line">Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token string">&#39;15&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line">Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line"></span>
<span class="line">Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line">Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span> <span class="token comment">// false</span></span>
<span class="line">Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">&#39;15&#39;</span><span class="token punctuation">)</span> <span class="token comment">// false</span></span>
<span class="line">Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// false</span></span>
<span class="line">Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token operator">/</span><span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line">Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">&#39;true&#39;</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line">Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">&#39;true&#39;</span> <span class="token operator">/</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="number-parseint-number-parsefloat" tabindex="-1"><a class="header-anchor" href="#number-parseint-number-parsefloat"><span>Number.parseInt(), Number.parseFloat()</span></a></h2><p>ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。这样做的目的，是逐步减少全局性方法，使得语言逐步模块化。</p><h2 id="number-isinteger" tabindex="-1"><a class="header-anchor" href="#number-isinteger"><span>Number.isInteger()</span></a></h2><p>Number.isInteger()用来判断一个数值是否为整数。如果参数不是数值，Number.isInteger返回false。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line">Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token number">25.1</span><span class="token punctuation">)</span> <span class="token comment">// false</span></span>
<span class="line"><span class="token comment">// JavaScript 内部，整数和浮点数采用的是同样的储存方法，所以 25 和 25.0 被视为同一个值。</span></span>
<span class="line">Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line">Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token number">25.0</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="number-epsilon" tabindex="-1"><a class="header-anchor" href="#number-epsilon"><span>Number.EPSILON</span></a></h2><p>ES6 在Number对象上面，新增一个极小的常量Number.EPSILON。根据规格，它表示 1 与大于 1 的最小浮点数之间的差。</p><p>Number.EPSILON实际上是 JavaScript 能够表示的最小精度。误差如果小于这个值，就可以认为已经没有意义了，即不存在误差了。引入一个这么小的量的目的，在于为浮点数计算，设置一个误差范围。我们知道浮点数计算是不精确的。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span></span>
<span class="line"><span class="token comment">// 0.30000000000000004</span></span>
<span class="line"><span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span> <span class="token operator">-</span> <span class="token number">0.3</span></span>
<span class="line"><span class="token comment">// 5.551115123125783e-17</span></span>
<span class="line"><span class="token number">5.551115123125783e-17</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// &#39;0.00000000000000005551&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="math-对象的扩展" tabindex="-1"><a class="header-anchor" href="#math-对象的扩展"><span>Math 对象的扩展</span></a></h2><p>ES6 在 Math 对象上新增了 17 个与数学相关的方法。所有这些方法都是静态方法，只能在 Math 对象上调用。</p><h3 id="math-trunc" tabindex="-1"><a class="header-anchor" href="#math-trunc"><span>Math.trunc()</span></a></h3><p>Math.trunc方法用于去除一个数的小数部分，返回整数部分。对于非数值，Math.trunc内部使用Number方法将其先转为数值。对于空值和无法截取整数的值，返回NaN。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token number">4.1</span><span class="token punctuation">)</span> <span class="token comment">// 4</span></span>
<span class="line">Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token string">&#39;123.456&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 123</span></span>
<span class="line">Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//1</span></span>
<span class="line">Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// 0</span></span>
<span class="line">Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// 0</span></span>
<span class="line">Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// NaN</span></span>
<span class="line">Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// NaN</span></span>
<span class="line">Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">// NaN</span></span>
<span class="line">Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="math-sign" tabindex="-1"><a class="header-anchor" href="#math-sign"><span>Math.sign()</span></a></h3><p>Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。 它会返回五种值。</p><ul><li>参数为正数，返回+1；</li><li>参数为负数，返回-1；</li><li>参数为 0，返回0；</li><li>参数为-0，返回-0;</li><li>其他值，返回NaN。 如果参数是非数值，会自动转为数值。对于那些无法转为数值的值，会返回NaN。</li></ul><h3 id="指数运算符" tabindex="-1"><a class="header-anchor" href="#指数运算符"><span>指数运算符</span></a></h3><p>ES2016 新增了一个指数运算符（**）。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token number">2</span> <span class="token operator">**</span> <span class="token number">2</span> <span class="token comment">// 4</span></span>
<span class="line"><span class="token number">2</span> <span class="token operator">**</span> <span class="token number">3</span> <span class="token comment">// 8</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//这个运算符的一个特点是右结合，而不是常见的左结合。多个指数运算符连用时，是从最右边开始计算的。</span></span>
<span class="line"><span class="token number">2</span> <span class="token operator">**</span> <span class="token number">3</span> <span class="token operator">**</span> <span class="token number">2</span></span>
<span class="line"><span class="token comment">// 相当于 2 ** (3 ** 2)</span></span>
<span class="line"><span class="token comment">// 512</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bigint-数据类型" tabindex="-1"><a class="header-anchor" href="#bigint-数据类型"><span>BigInt 数据类型</span></a></h2><p>JavaScript 所有数字都保存成 64 位浮点数，这给数值的表示带来了两大限制。一是数值的精度只能到 53 个二进制位（相当于 16 个十进制位），大于这个范围的整数，JavaScript 是无法精确表示的，这使得 JavaScript 不适合进行科学和金融方面的精确计算。二是大于或等于2的1024次方的数值，JavaScript 无法表示，会返回Infinity。</p>`,31),i=[t];function c(l,o){return s(),a("div",null,i)}const r=n(p,[["render",c],["__file","es6-6.html.vue"]]),m=JSON.parse('{"path":"/static/JavaScript/es6/es6-6.html","title":"数值的扩展","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"二进制和八进制表示法","slug":"二进制和八进制表示法","link":"#二进制和八进制表示法","children":[]},{"level":2,"title":"Number.isFinite(), Number.isNaN()","slug":"number-isfinite-number-isnan","link":"#number-isfinite-number-isnan","children":[]},{"level":2,"title":"Number.parseInt(), Number.parseFloat()","slug":"number-parseint-number-parsefloat","link":"#number-parseint-number-parsefloat","children":[]},{"level":2,"title":"Number.isInteger()","slug":"number-isinteger","link":"#number-isinteger","children":[]},{"level":2,"title":"Number.EPSILON","slug":"number-epsilon","link":"#number-epsilon","children":[]},{"level":2,"title":"Math 对象的扩展","slug":"math-对象的扩展","link":"#math-对象的扩展","children":[{"level":3,"title":"Math.trunc()","slug":"math-trunc","link":"#math-trunc","children":[]},{"level":3,"title":"Math.sign()","slug":"math-sign","link":"#math-sign","children":[]},{"level":3,"title":"指数运算符","slug":"指数运算符","link":"#指数运算符","children":[]}]},{"level":2,"title":"BigInt 数据类型","slug":"bigint-数据类型","link":"#bigint-数据类型","children":[]}],"git":{"updatedTime":1720499771000,"contributors":[{"name":"文铁铁~","email":"1179131421@qq.com","commits":1}]},"filePathRelative":"static/JavaScript/es6/es6-6.md"}');export{r as comp,m as data};