import{_ as n,c as s}from"./app.9b52f51c.js";const a={},e=s(`<h1 id="\u6761\u4EF6\u6E32\u67D3\u548C\u5217\u8868\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u6E32\u67D3\u548C\u5217\u8868\u6E32\u67D3" aria-hidden="true">#</a> \u6761\u4EF6\u6E32\u67D3\u548C\u5217\u8868\u6E32\u67D3</h1><h2 id="\u6761\u4EF6\u6E32\u67D3-v-if" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u6E32\u67D3-v-if" aria-hidden="true">#</a> \u6761\u4EF6\u6E32\u67D3 <code>v-if</code></h2><p><code>v-if</code> \u6307\u4EE4\u7528\u4E8E\u6761\u4EF6\u6027\u5730\u6E32\u67D3\u4E00\u5757\u5185\u5BB9\u3002\u8FD9\u5757\u5185\u5BB9\u53EA\u4F1A\u5728\u6307\u4EE4\u7684\u8868\u8FBE\u5F0F\u8FD4\u56DE\u771F\u503C\u65F6\u624D\u88AB\u6E32\u67D3\u3002 \u4F7F\u7528\u903B\u8F91\u548C\u8868\u8FBE\u5F0F\u4E2D\u7684if-else\u76F8\u540C</p><h3 id="v-if" tabindex="-1"><a class="header-anchor" href="#v-if" aria-hidden="true">#</a> v-if</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>awesome<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Vue is awesome!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="v-else" tabindex="-1"><a class="header-anchor" href="#v-else" aria-hidden="true">#</a> v-else</h3><p>\u4F7F\u7528 v-else \u4E3A v-if \u6DFB\u52A0\u4E00\u4E2A\u201Celse \u533A\u5757\u201D\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>awesome = !awesome<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Toggle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>awesome<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Vue is awesome!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-else</span><span class="token punctuation">&gt;</span></span>Oh no \u{1F622}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u4E00\u4E2A v-else \u5143\u7D20\u5FC5\u987B\u8DDF\u5728\u4E00\u4E2A v-if \u6216\u8005 v-else-if \u5143\u7D20\u540E\u9762\uFF0C\u5426\u5219\u5B83\u5C06\u4E0D\u4F1A\u88AB\u8BC6\u522B\u3002</p></div><h3 id="v-show" tabindex="-1"><a class="header-anchor" href="#v-show" aria-hidden="true">#</a> v-show</h3><p>\u53E6\u4E00\u4E2A\u53EF\u4EE5\u7528\u6765\u6309\u6761\u4EF6\u663E\u793A\u4E00\u4E2A\u5143\u7D20\u7684\u6307\u4EE4\u662F v-show\u3002\u5176\u7528\u6CD5\u4E0Ev-if\u76F8\u540C.</p><p>\u4E0D\u540C\u4E4B\u5904\u5728\u4E8E v-show \u4F1A\u5728 DOM \u6E32\u67D3\u4E2D\u4FDD\u7559\u8BE5\u5143\u7D20\uFF1Bv-show \u4EC5\u5207\u6362\u4E86\u8BE5\u5143\u7D20\u4E0A\u540D\u4E3A display \u7684 CSS \u5C5E\u6027\u3002v-show \u4E0D\u652F\u6301\u5728 <code>&lt;template&gt;</code> \u5143\u7D20\u4E0A\u4F7F\u7528\uFF0C\u4E5F\u4E0D\u80FD\u548C v-else \u642D\u914D\u4F7F\u7528\u3002</p><h2 id="v-for" tabindex="-1"><a class="header-anchor" href="#v-for" aria-hidden="true">#</a> v-for</h2><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 v-for \u6307\u4EE4\u57FA\u4E8E\u4E00\u4E2A\u6570\u7EC4\u6765\u6E32\u67D3\u4E00\u4E2A\u5217\u8868\u3002v-for \u6307\u4EE4\u7684\u503C\u9700\u8981\u4F7F\u7528 item in items \u5F62\u5F0F\u7684\u7279\u6B8A\u8BED\u6CD5\uFF0C\u5176\u4E2D items \u662F\u6E90\u6570\u636E\u7684\u6570\u7EC4\uFF0C\u800C item \u662F\u8FED\u4EE3\u9879\u7684\u522B\u540D.</p><p>\u5728 v-for \u5757\u4E2D\u53EF\u4EE5\u5B8C\u6574\u5730\u8BBF\u95EE\u7236\u4F5C\u7528\u57DF\u5185\u7684\u5C5E\u6027\u548C\u53D8\u91CF\u3002v-for \u4E5F\u652F\u6301\u4F7F\u7528\u53EF\u9009\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u8868\u793A\u5F53\u524D\u9879\u7684\u4F4D\u7F6E\u7D22\u5F15\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in items<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{ item.message }} - {{index}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

const items = ref([{ message: &#39;Foo&#39; }, { message: &#39;Bar&#39; }])
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>v-for \u53D8\u91CF\u7684\u4F5C\u7528\u57DF\u548C\u4E0B\u9762\u7684 JavaScript \u4EE3\u7801\u5F88\u7C7B\u4F3C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> parentMessage <span class="token operator">=</span> <span class="token string">&#39;Parent&#39;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">]</span>

items<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u53EF\u4EE5\u8BBF\u95EE\u5916\u5C42\u7684 \`parentMessage\`</span>
  <span class="token comment">// \u800C \`item\` \u548C \`index\` \u53EA\u5728\u8FD9\u4E2A\u4F5C\u7528\u57DF\u53EF\u7528</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>parentMessage<span class="token punctuation">,</span> item<span class="token punctuation">.</span>message<span class="token punctuation">,</span> index<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,18);function t(p,o){return e}var l=n(a,[["render",t],["__file","part3.html.vue"]]);export{l as default};
