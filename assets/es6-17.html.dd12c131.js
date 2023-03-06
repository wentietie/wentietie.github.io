import{_ as p,r as e,o as t,a as o,b as n,e as c,w as l,F as r,d as s,c as u}from"./app.cfeeb12a.js";const i={},k=n("h1",{id:"module-\u7684\u8BED\u6CD5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#module-\u7684\u8BED\u6CD5","aria-hidden":"true"},"#"),s(" Module \u7684\u8BED\u6CD5")],-1),m=n("h2",{id:"\u6982\u8FF0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6982\u8FF0","aria-hidden":"true"},"#"),s(" \u6982\u8FF0")],-1),b=n("p",null,"\u5728 ES6 \u4E4B\u524D\uFF0C\u793E\u533A\u5236\u5B9A\u4E86\u4E00\u4E9B\u6A21\u5757\u52A0\u8F7D\u65B9\u6848\uFF0C\u6700\u4E3B\u8981\u7684\u6709CommonJS\u548CAMD\u4E24\u79CD\u3002\u524D\u8005\u7528\u4E8E\u670D\u52A1\u5668\uFF0C\u540E\u8005\u7528\u4E8E\u6D4F\u89C8\u5668\u3002ES6 \u5728\u8BED\u8A00\u6807\u51C6\u7684\u5C42\u9762\u4E0A\uFF0C\u5B9E\u73B0\u4E86\u6A21\u5757\u529F\u80FD\uFF0C\u800C\u4E14\u5B9E\u73B0\u5F97\u76F8\u5F53\u7B80\u5355\uFF0C\u5B8C\u5168\u53EF\u4EE5\u53D6\u4EE3 CommonJS \u548C AMD \u89C4\u8303\uFF0C\u6210\u4E3A\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u901A\u7528\u7684\u6A21\u5757\u89E3\u51B3\u65B9\u6848\u3002",-1),d=s("\u533A\u522B\u8BE6\u89C1"),f=s("\u968F\u7B14\u7B14\u8BB0/js\u968F\u7B14"),y=u(`<p>ES6 \u6A21\u5757\u7684\u8BBE\u8BA1\u601D\u60F3\u662F\u5C3D\u91CF\u7684\u9759\u6001\u5316\uFF0C\u4F7F\u5F97\u7F16\u8BD1\u65F6\u5C31\u80FD\u786E\u5B9A\u6A21\u5757\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u4EE5\u53CA\u8F93\u5165\u548C\u8F93\u51FA\u7684\u53D8\u91CF\u3002CommonJS \u548C AMD \u6A21\u5757\uFF0C\u90FD\u53EA\u80FD\u5728\u8FD0\u884C\u65F6\u786E\u5B9A\u8FD9\u4E9B\u4E1C\u897F\u3002\u6BD4\u5982\uFF0CCommonJS \u6A21\u5757\u5C31\u662F\u5BF9\u8C61\uFF0C\u8F93\u5165\u65F6\u5FC5\u987B\u67E5\u627E\u5BF9\u8C61\u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// CommonJS\u6A21\u5757</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> stat<span class="token punctuation">,</span> exists<span class="token punctuation">,</span> readfile <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u7B49\u540C\u4E8E</span>
<span class="token keyword">let</span> _fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> stat <span class="token operator">=</span> _fs<span class="token punctuation">.</span>stat<span class="token punctuation">;</span>
<span class="token keyword">let</span> exists <span class="token operator">=</span> _fs<span class="token punctuation">.</span>exists<span class="token punctuation">;</span>
<span class="token keyword">let</span> readfile <span class="token operator">=</span> _fs<span class="token punctuation">.</span>readfile<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u7684\u5B9E\u8D28\u662F\u6574\u4F53\u52A0\u8F7D fs \u6A21\u5757\uFF08\u5373\u52A0\u8F7D fs \u7684\u6240\u6709\u65B9\u6CD5\uFF09\uFF0C\u751F\u6210\u4E00\u4E2A\u5BF9\u8C61\uFF08 _fs \uFF09\uFF0C\u7136\u540E\u518D\u4ECE\u8FD9\u4E2A\u5BF9\u8C61\u4E0A\u9762\u8BFB\u53D6 3 \u4E2A\u65B9\u6CD5\u3002\u8FD9\u79CD\u52A0\u8F7D\u79F0\u4E3A\u201C\u8FD0\u884C\u65F6\u52A0\u8F7D\u201D\uFF0C\u56E0\u4E3A\u53EA\u6709\u8FD0\u884C\u65F6\u624D\u80FD\u5F97\u5230\u8FD9\u4E2A\u5BF9\u8C61\uFF0C\u5BFC\u81F4\u5B8C\u5168\u6CA1\u529E\u6CD5\u5728\u7F16\u8BD1\u65F6\u505A\u201C\u9759\u6001\u4F18\u5316\u201D\u3002</p><p>ES6 \u6A21\u5757\u4E0D\u662F\u5BF9\u8C61\uFF0C\u800C\u662F\u901A\u8FC7 export \u547D\u4EE4\u663E\u5F0F\u6307\u5B9A\u8F93\u51FA\u7684\u4EE3\u7801\uFF0C\u518D\u901A\u8FC7 import \u547D\u4EE4\u8F93\u5165\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> stat<span class="token punctuation">,</span> exists<span class="token punctuation">,</span> readFile <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fs&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u4E25\u683C\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E25\u683C\u6A21\u5F0F" aria-hidden="true">#</a> \u4E25\u683C\u6A21\u5F0F</h2><p>ES6 \u7684\u6A21\u5757\u81EA\u52A8\u91C7\u7528\u4E25\u683C\u6A21\u5F0F\uFF0C\u4E0D\u7BA1\u4F60\u6709\u6CA1\u6709\u5728\u6A21\u5757\u5934\u90E8\u52A0\u4E0A &quot;use strict&quot;; \u3002 \u4E25\u683C\u6A21\u5F0F\u4E3B\u8981\u6709\u4EE5\u4E0B\u9650\u5236\u3002</p><ul><li>\u53D8\u91CF\u5FC5\u987B\u58F0\u660E\u540E\u518D\u4F7F\u7528</li><li>\u51FD\u6570\u7684\u53C2\u6570\u4E0D\u80FD\u6709\u540C\u540D\u5C5E\u6027\uFF0C\u5426\u5219\u62A5\u9519</li><li>\u4E0D\u80FD\u4F7F\u7528 with \u8BED\u53E5</li><li>\u4E0D\u80FD\u5BF9\u53EA\u8BFB\u5C5E\u6027\u8D4B\u503C\uFF0C\u5426\u5219\u62A5\u9519</li><li>\u4E0D\u80FD\u4F7F\u7528\u524D\u7F00 0 \u8868\u793A\u516B\u8FDB\u5236\u6570\uFF0C\u5426\u5219\u62A5\u9519</li><li>\u4E0D\u80FD\u5220\u9664\u4E0D\u53EF\u5220\u9664\u7684\u5C5E\u6027\uFF0C\u5426\u5219\u62A5\u9519</li><li>\u4E0D\u80FD\u5220\u9664\u53D8\u91CF delete prop \uFF0C\u4F1A\u62A5\u9519\uFF0C\u53EA\u80FD\u5220\u9664\u5C5E\u6027 delete global[prop]</li><li>eval \u4E0D\u4F1A\u5728\u5B83\u7684\u5916\u5C42\u4F5C\u7528\u57DF\u5F15\u5165\u53D8\u91CF</li><li>eval \u548C arguments \u4E0D\u80FD\u88AB\u91CD\u65B0\u8D4B\u503C</li><li>arguments \u4E0D\u4F1A\u81EA\u52A8\u53CD\u6620\u51FD\u6570\u53C2\u6570\u7684\u53D8\u5316</li><li>\u4E0D\u80FD\u4F7F\u7528 arguments.callee</li><li>\u4E0D\u80FD\u4F7F\u7528 arguments.caller</li><li>\u7981\u6B62 this \u6307\u5411\u5168\u5C40\u5BF9\u8C61</li><li>\u4E0D\u80FD\u4F7F\u7528 fn.caller \u548C fn.arguments \u83B7\u53D6\u51FD\u6570\u8C03\u7528\u7684\u5806\u6808</li><li>\u589E\u52A0\u4E86\u4FDD\u7559\u5B57\uFF08\u6BD4\u5982 protected \u3001 static \u548C interface \uFF09</li></ul><h2 id="export-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#export-\u547D\u4EE4" aria-hidden="true">#</a> export \u547D\u4EE4</h2><p>\u6A21\u5757\u529F\u80FD\u4E3B\u8981\u7531\u4E24\u4E2A\u547D\u4EE4\u6784\u6210\uFF1Aexport\u548Cimport \u3002 export \u547D\u4EE4\u7528\u4E8E\u89C4\u5B9A\u6A21\u5757\u7684\u5BF9\u5916\u63A5\u53E3\uFF0C import \u547D\u4EE4\u7528\u4E8E\u8F93\u5165\u5176\u4ED6\u6A21\u5757\u63D0\u4F9B\u7684\u529F\u80FD\u3002 \u4E00\u4E2A\u6A21\u5757\u5C31\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u6587\u4EF6\u3002\u8BE5\u6587\u4EF6\u5185\u90E8\u7684\u6240\u6709\u53D8\u91CF\uFF0C\u5916\u90E8\u65E0\u6CD5\u83B7\u53D6\u3002\u5982\u679C\u4F60\u5E0C\u671B\u5916\u90E8\u80FD\u591F\u8BFB\u53D6\u6A21\u5757\u5185\u90E8\u7684\u67D0\u4E2A\u53D8\u91CF\uFF0C\u5C31\u5FC5\u987B\u4F7F\u7528 export \u5173\u952E\u5B57\u8F93\u51FA\u8BE5\u53D8\u91CF\u3002\u4E0B\u9762\u662F\u4E00\u4E2A JS \u6587\u4EF6\uFF0C\u91CC\u9762\u4F7F\u7528 export \u547D\u4EE4\u8F93\u51FA\u53D8\u91CF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// profile.js</span>
<span class="token keyword">export</span> <span class="token keyword">var</span> firstName <span class="token operator">=</span> <span class="token string">&#39;Michael&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">var</span> lastName <span class="token operator">=</span> <span class="token string">&#39;Jackson&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">var</span> year <span class="token operator">=</span> <span class="token number">1958</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4E0A\u9762\u4EE3\u7801\u662F profile.js \u6587\u4EF6\uFF0C\u4FDD\u5B58\u4E86\u7528\u6237\u4FE1\u606F\u3002
 * ES6 \u5C06\u5176\u89C6\u4E3A\u4E00\u4E2A\u6A21\u5757\uFF0C\u91CC\u9762\u7528 export \u547D\u4EE4\u5BF9\u5916\u90E8\u8F93\u51FA\u4E86\u4E09\u4E2A\u53D8\u91CF\u3002
 * export \u7684\u5199\u6CD5\uFF0C\u9664\u4E86\u50CF\u4E0A\u9762\u8FD9\u6837\uFF0C\u8FD8\u6709\u53E6\u5916\u4E00\u79CD\u3002
 */</span>

<span class="token comment">// profile.js</span>
<span class="token keyword">var</span> firstName <span class="token operator">=</span> <span class="token string">&#39;Michael&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> lastName <span class="token operator">=</span> <span class="token string">&#39;Jackson&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> year <span class="token operator">=</span> <span class="token number">1958</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> firstName<span class="token punctuation">,</span> lastName<span class="token punctuation">,</span> year <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//export \u547D\u4EE4\u9664\u4E86\u8F93\u51FA\u53D8\u91CF\uFF0C\u8FD8\u53EF\u4EE5\u8F93\u51FA\u51FD\u6570\u6216\u7C7B\uFF08class\uFF09\u3002</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">*</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4E0A\u9762\u4EE3\u7801\u5BF9\u5916\u8F93\u51FA\u4E00\u4E2A\u51FD\u6570 multiply \u3002
 * \u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C export \u8F93\u51FA\u7684\u53D8\u91CF\u5C31\u662F\u672C\u6765\u7684\u540D\u5B57\uFF0C\u4F46\u662F\u53EF\u4EE5\u4F7F\u7528 as \u5173\u952E\u5B57\u91CD\u547D\u540D\u3002
 */</span>

<span class="token keyword">function</span> <span class="token function">v1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">v2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>
    v1 <span class="token keyword">as</span> streamV1<span class="token punctuation">,</span>
    v2 <span class="token keyword">as</span> streamV2<span class="token punctuation">,</span>
    v2 <span class="token keyword">as</span> streamLatestVersion
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>\u9700\u8981\u7279\u522B\u6CE8\u610F\u7684\u662F\uFF0C export \u547D\u4EE4\u89C4\u5B9A\u7684\u662F\u5BF9\u5916\u7684\u63A5\u53E3\uFF0C\u5FC5\u987B\u4E0E\u6A21\u5757\u5185\u90E8\u7684\u53D8\u91CF\u5EFA\u7ACB\u4E00\u4E00\u5BF9\u5E94\u5173\u7CFB\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u62A5\u9519</span>
<span class="token keyword">export</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// \u62A5\u9519</span>
<span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> m<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4E0A\u9762\u4E24\u79CD\u5199\u6CD5\u90FD\u4F1A\u62A5\u9519\uFF0C\u56E0\u4E3A\u6CA1\u6709\u63D0\u4F9B\u5BF9\u5916\u7684\u63A5\u53E3\u3002\u7B2C\u4E00\u79CD\u5199\u6CD5\u76F4\u63A5\u8F93\u51FA 1\uFF0C\u7B2C\u4E8C\u79CD\u5199\u6CD5\u901A\u8FC7\u53D8\u91CF m \uFF0C\u8FD8\u662F\u76F4\u63A5\u8F93\u51FA 1\u3002 1 \u53EA\u662F\u4E00\u4E2A\u503C\uFF0C\u4E0D\u662F\u63A5\u53E3\u3002\u6B63\u786E\u7684\u5199\u6CD5\u662F\u4E0B\u9762\u8FD9\u6837\u3002
 */</span>

<span class="token comment">// \u5199\u6CD5\u4E00</span>
<span class="token keyword">export</span> <span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// \u5199\u6CD5\u4E8C</span>
<span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>m<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u5199\u6CD5\u4E09</span>
<span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>n <span class="token keyword">as</span> m<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//\u540C\u6837\u7684\uFF0C function \u548C class \u7684\u8F93\u51FA\uFF0C\u4E5F\u5FC5\u987B\u9075\u5B88\u8FD9\u6837\u7684\u5199\u6CD5\u3002</span>
<span class="token comment">// \u62A5\u9519</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">export</span> f<span class="token punctuation">;</span>
<span class="token comment">// \u6B63\u786E</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u6B63\u786E</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>f<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//\u53E6\u5916\uFF0C export \u8BED\u53E5\u8F93\u51FA\u7684\u63A5\u53E3\uFF0C\u4E0E\u5176\u5BF9\u5E94\u7684\u503C\u662F\u52A8\u6001\u7ED1\u5B9A\u5173\u7CFB\uFF0C\u5373\u901A\u8FC7\u8BE5\u63A5\u53E3\uFF0C\u53EF\u4EE5\u53D6\u5230\u6A21\u5757\u5185\u90E8\u5B9E\u65F6\u7684\u503C\u3002</span>
<span class="token keyword">export</span> <span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> foo <span class="token operator">=</span> <span class="token string">&#39;baz&#39;</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="import-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#import-\u547D\u4EE4" aria-hidden="true">#</a> import \u547D\u4EE4</h2><p>\u4F7F\u7528export \u547D\u4EE4\u5B9A\u4E49\u4E86\u6A21\u5757\u7684\u5BF9\u5916\u63A5\u53E3\u4EE5\u540E\uFF0C\u5176\u4ED6JS\u6587\u4EF6\u5C31\u53EF\u4EE5\u901A\u8FC7import\u547D\u4EE4\u52A0\u8F7D\u8FD9\u4E2A\u6A21\u5757\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> firstName<span class="token punctuation">,</span> lastName<span class="token punctuation">,</span> year <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./profile.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  element<span class="token punctuation">.</span>textContent <span class="token operator">=</span> firstName <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> lastName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,16);function x(v,w){const a=e("RouterLink");return t(),o(r,null,[k,m,b,n("p",null,[d,c(a,{to:"/notes/JS/modules.html"},{default:l(()=>[f]),_:1})]),y],64)}var g=p(i,[["render",x],["__file","es6-17.html.vue"]]);export{g as default};
