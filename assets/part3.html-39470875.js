import{_ as a,p as n,q as s,a1 as e}from"./framework-5866ffd3.js";const t={},p=e(`<h1 id="条件渲染和列表渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染和列表渲染" aria-hidden="true">#</a> 条件渲染和列表渲染</h1><h2 id="条件渲染-v-if" tabindex="-1"><a class="header-anchor" href="#条件渲染-v-if" aria-hidden="true">#</a> 条件渲染 <code>v-if</code></h2><p><code>v-if</code> 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回真值时才被渲染。 使用逻辑和表达式中的if-else相同</p><h3 id="v-if" tabindex="-1"><a class="header-anchor" href="#v-if" aria-hidden="true">#</a> v-if</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>awesome<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Vue is awesome!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="v-else" tabindex="-1"><a class="header-anchor" href="#v-else" aria-hidden="true">#</a> v-else</h3><p>使用 v-else 为 v-if 添加一个“else 区块”。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>awesome = !awesome<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Toggle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>awesome<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Vue is awesome!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-else</span><span class="token punctuation">&gt;</span></span>Oh no 😢<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>一个 v-else 元素必须跟在一个 v-if 或者 v-else-if 元素后面，否则它将不会被识别。</p></div><h3 id="v-show" tabindex="-1"><a class="header-anchor" href="#v-show" aria-hidden="true">#</a> v-show</h3><p>另一个可以用来按条件显示一个元素的指令是 v-show。其用法与v-if相同.</p><p>不同之处在于 v-show 会在 DOM 渲染中保留该元素；v-show 仅切换了该元素上名为 display 的 CSS 属性。v-show 不支持在 <code>&lt;template&gt;</code> 元素上使用，也不能和 v-else 搭配使用。</p><h2 id="v-for" tabindex="-1"><a class="header-anchor" href="#v-for" aria-hidden="true">#</a> v-for</h2><p>我们可以使用 v-for 指令基于一个数组来渲染一个列表。v-for 指令的值需要使用 item in items 形式的特殊语法，其中 items 是源数据的数组，而 item 是迭代项的别名.</p><p>在 v-for 块中可以完整地访问父作用域内的属性和变量。v-for 也支持使用可选的第二个参数表示当前项的位置索引。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in items<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{ item.message }} - {{index}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

const items = ref([{ message: &#39;Foo&#39; }, { message: &#39;Bar&#39; }])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>v-for 变量的作用域和下面的 JavaScript 代码很类似：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> parentMessage <span class="token operator">=</span> <span class="token string">&#39;Parent&#39;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">]</span>

items<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 可以访问外层的 \`parentMessage\`</span>
  <span class="token comment">// 而 \`item\` 和 \`index\` 只在这个作用域可用</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>parentMessage<span class="token punctuation">,</span> item<span class="token punctuation">.</span>message<span class="token punctuation">,</span> index<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),o=[p];function c(i,l){return n(),s("div",null,o)}const d=a(t,[["render",c],["__file","part3.html.vue"]]);export{d as default};