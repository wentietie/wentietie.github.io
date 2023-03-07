import{_ as t,r as o,o as c,a as l,b as n,e as p,F as r,d as s,c as e}from"./app.bc507441.js";const i={},u={class:"custom-container tip"},k=n("p",{class:"custom-container-title"},"\u58F0\u660E",-1),d=s("\u672C\u7B14\u8BB0\u5B66\u4E60\u81EA: "),b={href:"https://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"},m=s("\u962E\u4E00\u5CF0\u7684\u300AECMAScript 6 \u5165\u95E8\u6559\u7A0B\u300B"),h=e(`<h1 id="let-\u548C-const-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#let-\u548C-const-\u547D\u4EE4" aria-hidden="true">#</a> let \u548C const \u547D\u4EE4</h1><h2 id="let" tabindex="-1"><a class="header-anchor" href="#let" aria-hidden="true">#</a> let</h2><p>\u57FA\u672C\u7528\u6CD5 ES6 \u65B0\u589E\u4E86let\u547D\u4EE4\uFF0C\u7528\u6765\u58F0\u660E\u53D8\u91CF\u3002\u5B83\u7684\u7528\u6CD5\u7C7B\u4F3C\u4E8Evar\uFF0C\u4F46\u662F\u6240\u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u53EA\u5728let\u547D\u4EE4\u6240\u5728\u7684\u4EE3\u7801\u5757\u5185\u6709\u6548\u3002\u4E0D\u5B58\u5728\u53D8\u91CF\u63D0\u5347\u7684\u5F0A\u7AEF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
a <span class="token comment">// ReferenceError: a is not defined.</span>
b <span class="token comment">// 1</span>
<span class="token comment">// \u5173\u4E8Evar\u7684\u4F7F\u7528\u5F0A\u7AEF, \u8BF7\u53C2\u8003\u4F60\u4E0D\u77E5\u9053\u7684js\u4E2D\u7684\u63D0\u5347\u90E8\u5206</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5728for\u5FAA\u73AF\u4E2D\u7684\u5DEE\u5F02</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
a<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
a<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="\u6682\u65F6\u6027\u6B7B\u533A" tabindex="-1"><a class="header-anchor" href="#\u6682\u65F6\u6027\u6B7B\u533A" aria-hidden="true">#</a> \u6682\u65F6\u6027\u6B7B\u533A</h3><p>\u5728\u4EE3\u7801\u5757\u5185\uFF0C\u4F7F\u7528let\u547D\u4EE4\u58F0\u660E\u53D8\u91CF\u4E4B\u524D\uFF0C\u8BE5\u53D8\u91CF\u90FD\u662F\u4E0D\u53EF\u7528\u7684\u3002\u8FD9\u5728\u8BED\u6CD5\u4E0A\uFF0C\u79F0\u4E3A\u201C\u6682\u65F6\u6027\u6B7B\u533A\u201D\uFF08temporal dead zone\uFF0C\u7B80\u79F0 TDZ\uFF09\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TDZ\u5F00\u59CB</span>
    tmp <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>
    <span class="token keyword">let</span> tmp<span class="token punctuation">;</span> <span class="token comment">// TDZ\u7ED3\u675F</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
    tmp <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u4E0D\u5141\u8BB8\u91CD\u590D\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u5141\u8BB8\u91CD\u590D\u58F0\u660E" aria-hidden="true">#</a> \u4E0D\u5141\u8BB8\u91CD\u590D\u58F0\u660E</h3><p>let\u4E0D\u5141\u8BB8\u5728\u76F8\u540C\u4F5C\u7528\u57DF\u5185\uFF0C\u91CD\u590D\u58F0\u660E\u540C\u4E00\u4E2A\u53D8\u91CF\u3002</p><h2 id="\u5757\u7EA7\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u5757\u7EA7\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u5757\u7EA7\u4F5C\u7528\u57DF</h2>`,12),v=s("\u8BF7\u53C2\u8003"),g={href:"https://wentietie.github.io/JavaScript/youdontknowjs/part1.html#%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86",target:"_blank",rel:"noopener noreferrer"},f=s("\u4F60\u4E0D\u77E5\u9053\u7684JS\u7684\u4F5C\u7528\u57DF"),_=e(`<h2 id="const-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#const-\u547D\u4EE4" aria-hidden="true">#</a> const \u547D\u4EE4</h2><p>const\u58F0\u660E\u4E00\u4E2A\u53EA\u8BFB\u7684\u5E38\u91CF\u3002\u4E00\u65E6\u58F0\u660E\uFF0C\u5E38\u91CF\u7684\u503C\u5C31\u4E0D\u80FD\u6539\u53D8\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u7528\u6CD5\u548Clet\u76F8\u540C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.1415</span><span class="token punctuation">;</span>
<span class="token constant">PI</span> <span class="token comment">// 3.1415</span>
<span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token comment">// TypeError: Assignment to constant variable.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>const\u4E00\u65E6\u58F0\u660E\u53D8\u91CF\u5FC5\u987B\u521D\u59CB\u5316</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> foo<span class="token punctuation">;</span>
<span class="token comment">// SyntaxError: Missing initializer in const declaration</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u672C\u8D28" tabindex="-1"><a class="header-anchor" href="#\u672C\u8D28" aria-hidden="true">#</a> \u672C\u8D28</h3><p>const\u5B9E\u9645\u4E0A\u4FDD\u8BC1\u7684\uFF0C\u5E76\u4E0D\u662F\u53D8\u91CF\u7684\u503C\u4E0D\u5F97\u6539\u52A8\uFF0C\u800C\u662F\u53D8\u91CF\u6307\u5411\u7684\u90A3\u4E2A\u5185\u5B58\u5730\u5740\u6240\u4FDD\u5B58\u7684\u6570\u636E\u4E0D\u5F97\u6539\u52A8\u3002\u5BF9\u4E8E\u7B80\u5355\u7C7B\u578B\u7684\u6570\u636E\uFF08\u6570\u503C\u3001\u5B57\u7B26\u4E32\u3001\u5E03\u5C14\u503C\uFF09\uFF0C\u503C\u5C31\u4FDD\u5B58\u5728\u53D8\u91CF\u6307\u5411\u7684\u90A3\u4E2A\u5185\u5B58\u5730\u5740\uFF0C\u56E0\u6B64\u7B49\u540C\u4E8E\u5E38\u91CF\u3002\u4F46\u5BF9\u4E8E\u590D\u5408\u7C7B\u578B\u7684\u6570\u636E\uFF08\u4E3B\u8981\u662F\u5BF9\u8C61\u548C\u6570\u7EC4\uFF09\uFF0C\u53D8\u91CF\u6307\u5411\u7684\u5185\u5B58\u5730\u5740\uFF0C\u4FDD\u5B58\u7684\u53EA\u662F\u4E00\u4E2A\u6307\u5411\u5B9E\u9645\u6570\u636E\u7684\u6307\u9488\uFF0Cconst\u53EA\u80FD\u4FDD\u8BC1\u8FD9\u4E2A\u6307\u9488\u662F\u56FA\u5B9A\u7684\uFF08\u5373\u603B\u662F\u6307\u5411\u53E6\u4E00\u4E2A\u56FA\u5B9A\u7684\u5730\u5740\uFF09\uFF0C\u81F3\u4E8E\u5B83\u6307\u5411\u7684\u6570\u636E\u7ED3\u6784\u662F\u4E0D\u662F\u53EF\u53D8\u7684\uFF0C\u5C31\u5B8C\u5168\u4E0D\u80FD\u63A7\u5236\u4E86\u3002\u56E0\u6B64\uFF0C\u5C06\u4E00\u4E2A\u5BF9\u8C61\u58F0\u660E\u4E3A\u5E38\u91CF\u5FC5\u987B\u975E\u5E38\u5C0F\u5FC3\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u4E3A foo \u6DFB\u52A0\u4E00\u4E2A\u5C5E\u6027\uFF0C\u53EF\u4EE5\u6210\u529F</span>
foo<span class="token punctuation">.</span>prop <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>prop <span class="token comment">// 123</span>
<span class="token comment">// \u5C06 foo \u6307\u5411\u53E6\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5C31\u4F1A\u62A5\u9519</span>
foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// TypeError: &quot;foo&quot; is read-only</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027" aria-hidden="true">#</a> \u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027</h2><p>\u9876\u5C42\u5BF9\u8C61\uFF0C\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u6307\u7684\u662Fwindow\u5BF9\u8C61\uFF0C\u5728 Node \u6307\u7684\u662Fglobal\u5BF9\u8C61\u3002ES5 \u4E4B\u4E2D\uFF0C\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027\u4E0E\u5168\u5C40\u53D8\u91CF\u662F\u7B49\u4EF7\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
a <span class="token comment">// 1</span>
a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>a <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027\u8D4B\u503C\u4E0E\u5168\u5C40\u53D8\u91CF\u7684\u8D4B\u503C\uFF0C\u662F\u540C\u4E00\u4EF6\u4E8B\u3002<br> \u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027\u4E0E\u5168\u5C40\u53D8\u91CF\u6302\u94A9\uFF0C\u88AB\u8BA4\u4E3A\u662F JavaScript \u8BED\u8A00\u6700\u5927\u7684\u8BBE\u8BA1\u8D25\u7B14\u4E4B\u4E00\u3002\u8FD9\u6837\u7684\u8BBE\u8BA1\u5E26\u6765\u4E86\u51E0\u4E2A\u5F88\u5927\u7684\u95EE\u9898\uFF0C\u9996\u5148\u662F\u6CA1\u6CD5\u5728\u7F16\u8BD1\u65F6\u5C31\u62A5\u51FA\u53D8\u91CF\u672A\u58F0\u660E\u7684\u9519\u8BEF\uFF0C\u53EA\u6709\u8FD0\u884C\u65F6\u624D\u80FD\u77E5\u9053\uFF08\u56E0\u4E3A\u5168\u5C40\u53D8\u91CF\u53EF\u80FD\u662F\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027\u521B\u9020\u7684\uFF0C\u800C\u5C5E\u6027\u7684\u521B\u9020\u662F\u52A8\u6001\u7684\uFF09\uFF1B\u5176\u6B21\uFF0C\u7A0B\u5E8F\u5458\u5F88\u5BB9\u6613\u4E0D\u77E5\u4E0D\u89C9\u5730\u5C31\u521B\u5EFA\u4E86\u5168\u5C40\u53D8\u91CF\uFF08\u6BD4\u5982\u6253\u5B57\u51FA\u9519\uFF09\uFF1B\u6700\u540E\uFF0C\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027\u662F\u5230\u5904\u53EF\u4EE5\u8BFB\u5199\u7684\uFF0C\u8FD9\u975E\u5E38\u4E0D\u5229\u4E8E\u6A21\u5757\u5316\u7F16\u7A0B\u3002\u53E6\u4E00\u65B9\u9762\uFF0Cwindow\u5BF9\u8C61\u6709\u5B9E\u4F53\u542B\u4E49\uFF0C\u6307\u7684\u662F\u6D4F\u89C8\u5668\u7684\u7A97\u53E3\u5BF9\u8C61\uFF0C\u9876\u5C42\u5BF9\u8C61\u662F\u4E00\u4E2A\u6709\u5B9E\u4F53\u542B\u4E49\u7684\u5BF9\u8C61\uFF0C\u4E5F\u662F\u4E0D\u5408\u9002\u7684\u3002</p><p>ES6 \u4E3A\u4E86\u6539\u53D8\u8FD9\u4E00\u70B9\uFF0C\u4E00\u65B9\u9762\u89C4\u5B9A\uFF0C\u4E3A\u4E86\u4FDD\u6301\u517C\u5BB9\u6027\uFF0Cvar\u547D\u4EE4\u548Cfunction\u547D\u4EE4\u58F0\u660E\u7684\u5168\u5C40\u53D8\u91CF\uFF0C\u4F9D\u65E7\u662F\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027\uFF1B\u53E6\u4E00\u65B9\u9762\u89C4\u5B9A\uFF0Clet\u547D\u4EE4\u3001const\u547D\u4EE4\u3001class\u547D\u4EE4\u58F0\u660E\u7684\u5168\u5C40\u53D8\u91CF\uFF0C\u4E0D\u5C5E\u4E8E\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4ECE ES6 \u5F00\u59CB\uFF0C\u5168\u5C40\u53D8\u91CF\u5C06\u9010\u6B65\u4E0E\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027\u8131\u94A9\u3002</p><h3 id="globalthis-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#globalthis-\u5BF9\u8C61" aria-hidden="true">#</a> globalThis \u5BF9\u8C61</h3><p>JavaScript \u8BED\u8A00\u5B58\u5728\u4E00\u4E2A\u9876\u5C42\u5BF9\u8C61\uFF0C\u5B83\u63D0\u4F9B\u5168\u5C40\u73AF\u5883\uFF08\u5373\u5168\u5C40\u4F5C\u7528\u57DF\uFF09\uFF0C\u6240\u6709\u4EE3\u7801\u90FD\u662F\u5728\u8FD9\u4E2A\u73AF\u5883\u4E2D\u8FD0\u884C\u3002\u4F46\u662F\uFF0C\u9876\u5C42\u5BF9\u8C61\u5728\u5404\u79CD\u5B9E\u73B0\u91CC\u9762\u662F\u4E0D\u7EDF\u4E00\u7684\u3002</p><ul><li>\u6D4F\u89C8\u5668\u91CC\u9762\uFF0C\u9876\u5C42\u5BF9\u8C61\u662Fwindow\uFF0C\u4F46 Node \u548C Web Worker \u6CA1\u6709window\u3002</li><li>\u6D4F\u89C8\u5668\u548C Web Worker \u91CC\u9762\uFF0Cself\u4E5F\u6307\u5411\u9876\u5C42\u5BF9\u8C61\uFF0C\u4F46\u662F Node \u6CA1\u6709self\u3002</li><li>Node \u91CC\u9762\uFF0C\u9876\u5C42\u5BF9\u8C61\u662Fglobal\uFF0C\u4F46\u5176\u4ED6\u73AF\u5883\u90FD\u4E0D\u652F\u6301\u3002</li></ul><p>ES2020 \u5728\u8BED\u8A00\u6807\u51C6\u7684\u5C42\u9762\uFF0C\u5F15\u5165globalThis\u4F5C\u4E3A\u9876\u5C42\u5BF9\u8C61\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4EFB\u4F55\u73AF\u5883\u4E0B\uFF0CglobalThis\u90FD\u662F\u5B58\u5728\u7684\uFF0C\u90FD\u53EF\u4EE5\u4ECE\u5B83\u62FF\u5230\u9876\u5C42\u5BF9\u8C61\uFF0C\u6307\u5411\u5168\u5C40\u73AF\u5883\u4E0B\u7684this\u3002</p><p>\u57AB\u7247\u5E93global-this\u6A21\u62DF\u4E86\u8FD9\u4E2A\u63D0\u6848\uFF0C\u53EF\u4EE5\u5728\u6240\u6709\u73AF\u5883\u62FF\u5230globalThis\u3002</p><h1 id="\u53D8\u91CF\u7684\u89E3\u6784\u8D4B\u503C" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u7684\u89E3\u6784\u8D4B\u503C" aria-hidden="true">#</a> \u53D8\u91CF\u7684\u89E3\u6784\u8D4B\u503C</h1><h2 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u672C\u7528\u6CD5</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4E4B\u524D\u7684\u5199\u6CD5</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token comment">// \u89E3\u6784\u5199\u6CD5</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,21);function w(j,x){const a=o("ExternalLinkIcon");return c(),l(r,null,[n("div",u,[k,n("p",null,[d,n("a",b,[m,p(a)])])]),h,n("p",null,[v,n("a",g,[f,p(a)])]),_],64)}var E=t(i,[["render",w],["__file","es6-1.html.vue"]]);export{E as default};