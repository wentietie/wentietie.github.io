import{_ as n,p as a,q as s,a1 as e}from"./framework-5866ffd3.js";const t={},o=e(`<h1 id="js事件-beforeunload" tabindex="-1"><a class="header-anchor" href="#js事件-beforeunload" aria-hidden="true">#</a> JS事件-beforeunload</h1><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;beforeunload&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    ev<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ev<span class="token punctuation">.</span>returnValue <span class="token operator">=</span> <span class="token string">&#39;真的要关闭咯&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>页面加载完成后，如果用户未对页面进行操作，比如“点击”、“输入”等等，onbeforeunload将不会被执行</p></div>`,4),c=[o];function p(i,l){return a(),s("div",null,c)}const r=n(t,[["render",p],["__file","beforeunload.html.vue"]]);export{r as default};