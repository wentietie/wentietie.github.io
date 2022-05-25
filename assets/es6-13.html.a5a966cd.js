import{_ as n,c as s}from"./app.65ac8be1.js";const a={},e=s(`<h1 id="reflect" tabindex="-1"><a class="header-anchor" href="#reflect" aria-hidden="true">#</a> Reflect</h1><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>Reflect \u5BF9\u8C61\u4E0EProxy \u5BF9\u8C61\u4E00\u6837\uFF0C\u4E5F\u662F ES6 \u4E3A\u4E86\u64CD\u4F5C\u5BF9\u8C61\u800C\u63D0\u4F9B\u7684\u65B0 API\u3002 Reflect \u5BF9\u8C61\u7684\u8BBE\u8BA1\u76EE\u7684\u6709\u8FD9\u6837\u51E0\u4E2A\u3002</p><p>\uFF081\uFF09 \u5C06 Object \u5BF9\u8C61\u7684\u4E00\u4E9B\u660E\u663E\u5C5E\u4E8E\u8BED\u8A00\u5185\u90E8\u7684\u65B9\u6CD5\uFF08\u6BD4\u5982 Object.defineProperty \uFF09\uFF0C\u653E\u5230 Reflect \u5BF9\u8C61\u4E0A\u3002\u73B0\u9636\u6BB5\uFF0C\u67D0\u4E9B\u65B9\u6CD5\u540C\u65F6\u5728 Object \u548C Reflect \u5BF9\u8C61\u4E0A\u90E8\u7F72\uFF0C\u672A\u6765\u7684\u65B0\u65B9\u6CD5\u5C06\u53EA\u90E8\u7F72\u5728 Reflect \u5BF9\u8C61\u4E0A\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4ECE Reflect \u5BF9\u8C61\u4E0A\u53EF\u4EE5\u62FF\u5230\u8BED\u8A00\u5185\u90E8\u7684\u65B9\u6CD5\u3002</p><p>\uFF082\uFF09 \u4FEE\u6539\u67D0\u4E9B Object \u65B9\u6CD5\u7684\u8FD4\u56DE\u7ED3\u679C\uFF0C\u8BA9\u5176\u53D8\u5F97\u66F4\u5408\u7406\u3002\u6BD4\u5982\uFF0C Object.defineProperty(obj, name, desc) \u5728\u65E0\u6CD5\u5B9A\u4E49\u5C5E\u6027\u65F6\uFF0C\u4F1A\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\uFF0C\u800C Reflect.defineProperty(obj, name, desc) \u5219\u4F1A\u8FD4\u56DE false \u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8001\u5199\u6CD5</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> property<span class="token punctuation">,</span> attributes<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// success</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// failure</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u65B0\u5199\u6CD5</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> property<span class="token punctuation">,</span> attributes<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// success</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// failure</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\uFF083\uFF09 \u8BA9 Object \u64CD\u4F5C\u90FD\u53D8\u6210\u51FD\u6570\u884C\u4E3A\u3002\u67D0\u4E9B Object \u64CD\u4F5C\u662F\u547D\u4EE4\u5F0F\uFF0C\u6BD4\u5982 name in obj \u548C delete obj[name] \uFF0C\u800C Reflect.has(obj, name) \u548C Reflect.deleteProperty(obj, name) \u8BA9\u5B83\u4EEC\u53D8\u6210\u4E86\u51FD\u6570\u884C\u4E3A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8001\u5199\u6CD5</span>
<span class="token string">&#39;assign&#39;</span> <span class="token keyword">in</span> Object <span class="token comment">// true</span>
<span class="token comment">// \u65B0\u5199\u6CD5</span>
Reflect<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>Object<span class="token punctuation">,</span> <span class="token string">&#39;assign&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\uFF084\uFF09 Reflect\u5BF9\u8C61\u7684\u65B9\u6CD5\u4E0E Proxy\u5BF9\u8C61\u7684\u65B9\u6CD5\u4E00\u4E00\u5BF9\u5E94\uFF0C\u53EA\u8981\u662F Proxy \u5BF9\u8C61\u7684\u65B9\u6CD5\uFF0C\u5C31\u80FD\u5728 Reflect \u5BF9\u8C61\u4E0A\u627E\u5230\u5BF9\u5E94\u7684\u65B9\u6CD5\u3002\u8FD9\u5C31\u8BA9 Proxy \u5BF9\u8C61\u53EF\u4EE5\u65B9\u4FBF\u5730\u8C03\u7528\u5BF9\u5E94\u7684 Reflect \u65B9\u6CD5\uFF0C\u5B8C\u6210\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u4F5C\u4E3A\u4FEE\u6539\u884C\u4E3A\u7684\u57FA\u7840\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E0D\u7BA1 Proxy \u600E\u4E48\u4FEE\u6539\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u4F60\u603B\u53EF\u4EE5\u5728 Reflect \u4E0A\u83B7\u53D6\u9ED8\u8BA4\u884C\u4E3A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> name<span class="token punctuation">,</span> value<span class="token punctuation">,</span> receiver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> success <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> name<span class="token punctuation">,</span> value<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;property &#39;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&#39; on &#39;</span> <span class="token operator">+</span> target <span class="token operator">+</span> <span class="token string">&#39; set to &#39;</span> <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> success<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u9759\u6001\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u65B9\u6CD5" aria-hidden="true">#</a> \u9759\u6001\u65B9\u6CD5</h2><p>\u5B83\u4E0E Proxy \u5BF9\u8C61\u7684\u65B9\u6CD5\u662F\u4E00\u4E00\u5BF9\u5E94\u7684\u3002\u4E0B\u9762\u662F\u5BF9\u5B83\u4EEC\u7684\u89E3\u91CA\u3002</p><h3 id="reflect-get-target-name-receiver" tabindex="-1"><a class="header-anchor" href="#reflect-get-target-name-receiver" aria-hidden="true">#</a> Reflect.get(target, name, receiver)</h3><p>Reflect.get\u65B9\u6CD5\u67E5\u627E\u5E76\u8FD4\u56DE target \u5BF9\u8C61\u7684 name \u5C5E\u6027\uFF0C\u5982\u679C\u6CA1\u6709\u8BE5\u5C5E\u6027\uFF0C\u5219\u8FD4\u56DE undefined</p>`,14);function t(p,c){return e}var l=n(a,[["render",t],["__file","es6-13.html.vue"]]);export{l as default};
