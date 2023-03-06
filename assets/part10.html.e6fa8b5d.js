import{_ as n,c as s}from"./app.cfeeb12a.js";const a={},t=s(`<h1 id="\u6A21\u677F\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F\u5F15\u7528" aria-hidden="true">#</a> \u6A21\u677F\u5F15\u7528</h1><p>\u867D\u7136 Vue \u7684\u58F0\u660E\u6027\u6E32\u67D3\u6A21\u578B\u4E3A\u4F60\u62BD\u8C61\u4E86\u5927\u90E8\u5206\u5BF9 DOM \u7684\u76F4\u63A5\u64CD\u4F5C\uFF0C\u4F46\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u4ECD\u7136\u9700\u8981\u76F4\u63A5\u8BBF\u95EE\u5E95\u5C42 DOM \u5143\u7D20\u3002\u8981\u5B9E\u73B0\u8FD9\u4E00\u70B9\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u7279\u6B8A\u7684 ref attribute\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token comment">// \u58F0\u660E\u4E00\u4E2A ref \u6765\u5B58\u653E\u8BE5\u5143\u7D20\u7684\u5F15\u7528</span>
<span class="token comment">// \u5FC5\u987B\u548C\u6A21\u677F\u91CC\u7684 ref \u540C\u540D</span>
<span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  input<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u4F7F\u7528\u6B65\u9AA4\u4E3A\uFF1A</p><ol><li>\u5728DOM\u5143\u7D20\u6216vue\u7EC4\u4EF6\u4E0A\u4F7F\u7528ref\u5C5E\u6027\uFF0C\u5E76\u4E3A\u5176\u8D4B\u503C\uFF1A<code>&lt;input ref=&quot;input&quot; /&gt;</code>\u3002</li><li>\u5728script\u4E2D\u4F7F\u7528ref\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\uFF0C\u53D8\u91CF\u540D\u9700\u8981\u4E0E1\u4E2D\u7684ref\u7684\u503C\u76F8\u540C\u3002<code>const input = ref(null)</code>.</li><li>\u5728\u7EC4\u4EF6\u6302\u8F7D\u4E4B\u540E\u4F7F\u7528ref\u58F0\u660E\u7684\u53D8\u91CF\u5373\u53EF\u83B7\u53D6\u5143\u7D20\u3002</li></ol><h2 id="v-for-\u4E2D\u7684\u6A21\u677F\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#v-for-\u4E2D\u7684\u6A21\u677F\u5F15\u7528" aria-hidden="true">#</a> v-for \u4E2D\u7684\u6A21\u677F\u5F15\u7528</h2><p>\u5F53\u5728 v-for \u4E2D\u4F7F\u7528\u6A21\u677F\u5F15\u7528\u65F6\uFF0C\u5BF9\u5E94\u7684 ref \u4E2D\u5305\u542B\u7684\u503C\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5B83\u5C06\u5728\u5143\u7D20\u88AB\u6302\u8F7D\u540E\u5305\u542B\u5BF9\u5E94\u6574\u4E2A\u5217\u8868\u7684\u6240\u6709\u5143\u7D20\u3002</p>`,7);function p(e,c){return t}var l=n(a,[["render",p],["__file","part10.html.vue"]]);export{l as default};
