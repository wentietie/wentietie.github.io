import{_ as n,c as s}from"./app.9b52f51c.js";const a={},p=s(`<h1 id="\u8BA1\u7B97\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u5C5E\u6027" aria-hidden="true">#</a> \u8BA1\u7B97\u5C5E\u6027</h1><p>\u6A21\u677F\u4E2D\u7684\u8868\u8FBE\u5F0F\u867D\u7136\u65B9\u4FBF\uFF0C\u4F46\u4E5F\u53EA\u80FD\u7528\u6765\u505A\u7B80\u5355\u7684\u64CD\u4F5C\u3002\u5982\u679C\u5728\u6A21\u677F\u4E2D\u5199\u592A\u591A\u903B\u8F91\uFF0C\u4F1A\u8BA9\u6A21\u677F\u53D8\u5F97\u81C3\u80BF\uFF0C\u96BE\u4EE5\u7EF4\u62A4\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u8BA1\u7B97\u5C5E\u6027\u5C31\u4F1A\u66F4\u52A0\u9002\u5408\u3002</p><h2 id="\u57FA\u7840\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u793A\u4F8B" aria-hidden="true">#</a> \u57FA\u7840\u793A\u4F8B</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Has published books:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ author.books.length &gt; 0 ? &#39;Yes&#39; : &#39;No&#39; }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> author <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;John Doe&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">books</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;Vue 2 - Advanced Guide&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Vue 3 - Basic Guide&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Vue 4 - The Mystery&#39;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u8FD9\u91CC\u7684\u6A21\u677F\u770B\u8D77\u6765\u6709\u4E9B\u590D\u6742\u3002\u66F4\u91CD\u8981\u7684\u662F\uFF0C\u5982\u679C\u5728\u6A21\u677F\u4E2D\u9700\u8981\u4E0D\u6B62\u4E00\u6B21\u8FD9\u6837\u7684\u8BA1\u7B97\uFF0C\u8FD9\u6837\u7684\u4EE3\u7801\u5C06\u5728\u6A21\u677F\u91CC\u91CD\u590D\u597D\u591A\u904D\u3002\u56E0\u6B64\u63A8\u8350\u4F7F\u7528\u8BA1\u7B97\u5C5E\u6027\u6765\u63CF\u8FF0\u4F9D\u8D56\u54CD\u5E94\u5F0F\u72B6\u6001\u7684\u590D\u6742\u903B\u8F91\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Has published books:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ publishedBooksMessage }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> author <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;John Doe&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">books</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;Vue 2 - Advanced Guide&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Vue 3 - Basic Guide&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Vue 4 - The Mystery&#39;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027 ref</span>
<span class="token keyword">const</span> publishedBooksMessage <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> author<span class="token punctuation">.</span>books<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&#39;Yes&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;No&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u5728\u8FD9\u91CC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027 publishedBooksMessage\u3002computed() \u65B9\u6CD5\u9ED8\u8BA4\u63A5\u6536\u4E00\u4E2A getter \u51FD\u6570\uFF0C\u8FD4\u56DE\u503C\u4E3A\u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027 ref\u3002\u548C\u5176\u4ED6\u4E00\u822C\u7684 ref \u7C7B\u4F3C\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 publishedBooksMessage.value \u8BBF\u95EE\u8BA1\u7B97\u7ED3\u679C\u3002\u8BA1\u7B97\u5C5E\u6027 ref \u4E5F\u4F1A\u5728\u6A21\u677F\u4E2D\u81EA\u52A8\u89E3\u5305\uFF0C\u56E0\u6B64\u5728\u6A21\u677F\u8868\u8FBE\u5F0F\u4E2D\u5F15\u7528\u65F6\u65E0\u9700\u6DFB\u52A0 .value\u3002</p><p>Vue \u7684\u8BA1\u7B97\u5C5E\u6027\u4F1A\u81EA\u52A8\u8FFD\u8E2A\u54CD\u5E94\u5F0F\u4F9D\u8D56\u3002\u5B83\u4F1A\u68C0\u6D4B\u5230 publishedBooksMessage \u4F9D\u8D56\u4E8E author.books\uFF0C\u6240\u4EE5\u5F53 author.books \u6539\u53D8\u65F6\uFF0C\u4EFB\u4F55\u4F9D\u8D56\u4E8E publishedBooksMessage \u7684\u7ED1\u5B9A\u90FD\u4F1A\u540C\u65F6\u66F4\u65B0\u3002</p><h2 id="\u53EF\u5199\u8BA1\u7B97\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u53EF\u5199\u8BA1\u7B97\u5C5E\u6027" aria-hidden="true">#</a> \u53EF\u5199\u8BA1\u7B97\u5C5E\u6027</h2><p>\u8BA1\u7B97\u5C5E\u6027\u9ED8\u8BA4\u662F\u53EA\u8BFB\u7684\u3002\u5F53\u4F60\u5C1D\u8BD5\u4FEE\u6539\u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027\u65F6\uFF0C\u4F60\u4F1A\u6536\u5230\u4E00\u4E2A\u8FD0\u884C\u65F6\u8B66\u544A\u3002\u53EA\u5728\u67D0\u4E9B\u7279\u6B8A\u573A\u666F\u4E2D\u4F60\u53EF\u80FD\u624D\u9700\u8981\u7528\u5230\u201C\u53EF\u5199\u201D\u7684\u5C5E\u6027\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u540C\u65F6\u63D0\u4F9B getter \u548C setter \u6765\u521B\u5EFA\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> firstName <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;John&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> lastName <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Doe&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> fullName <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// getter</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> firstName<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> lastName<span class="token punctuation">.</span>value
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// setter</span>
  <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6CE8\u610F\uFF1A\u6211\u4EEC\u8FD9\u91CC\u4F7F\u7528\u7684\u662F\u89E3\u6784\u8D4B\u503C\u8BED\u6CD5</span>
    <span class="token punctuation">[</span>firstName<span class="token punctuation">.</span>value<span class="token punctuation">,</span> lastName<span class="token punctuation">.</span>value<span class="token punctuation">]</span> <span class="token operator">=</span> newValue<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="custom-container danger"><p class="custom-container-title">\u4E0D\u8981\u5728 getter \u4E2D\u505A\u5F02\u6B65\u8BF7\u6C42\u6216\u8005\u66F4\u6539 DOM\uFF01</p><p>\u8BA1\u7B97\u5C5E\u6027\u7684 getter \u5E94\u53EA\u505A\u8BA1\u7B97\u800C\u6CA1\u6709\u4EFB\u4F55\u5176\u4ED6\u7684\u526F\u4F5C\u7528\uFF0C\u8FD9\u4E00\u70B9\u975E\u5E38\u91CD\u8981\uFF0C\u8BF7\u52A1\u5FC5\u7262\u8BB0\u3002</p></div><h2 id="\u8BA1\u7B97\u5C5E\u6027\u7F13\u5B58-vs-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u5C5E\u6027\u7F13\u5B58-vs-\u65B9\u6CD5" aria-hidden="true">#</a> \u8BA1\u7B97\u5C5E\u6027\u7F13\u5B58 vs \u65B9\u6CD5</h2><p>\u82E5\u6211\u4EEC\u5C06\u540C\u6837\u7684\u51FD\u6570\u5B9A\u4E49\u4E3A\u4E00\u4E2A\u65B9\u6CD5\u800C\u4E0D\u662F\u8BA1\u7B97\u5C5E\u6027\uFF0C\u4E24\u79CD\u65B9\u5F0F\u5728\u7ED3\u679C\u4E0A\u786E\u5B9E\u662F\u5B8C\u5168\u76F8\u540C\u7684\uFF0C\u7136\u800C\uFF0C\u4E0D\u540C\u4E4B\u5904\u5728\u4E8E\u8BA1\u7B97\u5C5E\u6027\u503C\u4F1A\u57FA\u4E8E\u5176\u54CD\u5E94\u5F0F\u4F9D\u8D56\u88AB\u7F13\u5B58\u3002\u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027\u4EC5\u4F1A\u5728\u5176\u54CD\u5E94\u5F0F\u4F9D\u8D56\u66F4\u65B0\u65F6\u624D\u91CD\u65B0\u8BA1\u7B97\u3002\u8FD9\u610F\u5473\u7740\u53EA\u8981 author.books \u4E0D\u6539\u53D8\uFF0C\u65E0\u8BBA\u591A\u5C11\u6B21\u8BBF\u95EE publishedBooksMessage \u90FD\u4F1A\u7ACB\u5373\u8FD4\u56DE\u5148\u524D\u7684\u8BA1\u7B97\u7ED3\u679C\uFF0C\u800C\u4E0D\u7528\u91CD\u590D\u6267\u884C getter \u51FD\u6570\u3002</p><p>\u76F8\u6BD4\u4E4B\u4E0B\uFF0C\u65B9\u6CD5\u603B\u662F\u4F1A\u5728\u91CD\u6E32\u67D3\u53D1\u751F\u65F6\u518D\u6B21\u6267\u884C\u51FD\u6570\u3002</p><p>\u4E3A\u4EC0\u4E48\u9700\u8981\u7F13\u5B58\u5462\uFF1F\u60F3\u8C61\u4E00\u4E0B\u6211\u4EEC\u6709\u4E00\u4E2A\u975E\u5E38\u8017\u6027\u80FD\u7684\u8BA1\u7B97\u5C5E\u6027 list\uFF0C\u9700\u8981\u5FAA\u73AF\u4E00\u4E2A\u5DE8\u5927\u7684\u6570\u7EC4\u5E76\u505A\u8BB8\u591A\u8BA1\u7B97\u903B\u8F91\uFF0C\u5E76\u4E14\u53EF\u80FD\u4E5F\u6709\u5176\u4ED6\u8BA1\u7B97\u5C5E\u6027\u4F9D\u8D56\u4E8E list\u3002\u6CA1\u6709\u7F13\u5B58\u7684\u8BDD\uFF0C\u6211\u4EEC\u4F1A\u91CD\u590D\u6267\u884C\u975E\u5E38\u591A\u6B21 list \u7684 getter\uFF0C\u7136\u800C\u8FD9\u5B9E\u9645\u4E0A\u6CA1\u6709\u5FC5\u8981\uFF01\u5982\u679C\u4F60\u786E\u5B9A\u4E0D\u9700\u8981\u7F13\u5B58\uFF0C\u90A3\u4E48\u4E5F\u53EF\u4EE5\u4F7F\u7528\u65B9\u6CD5\u8C03\u7528\u3002</p>`,16);function t(e,o){return p}var l=n(a,[["render",t],["__file","part2.html.vue"]]);export{l as default};
