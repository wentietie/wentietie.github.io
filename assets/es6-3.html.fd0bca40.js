import{_ as n,e as s}from"./app.aae14d96.js";const a={},p=s(`<h1 id="\u5B57\u7B26\u4E32\u7684\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u7684\u6269\u5C55" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u7684\u6269\u5C55</h1><p>ES6 \u52A0\u5F3A\u4E86\u5BF9 Unicode \u7684\u652F\u6301\uFF0C\u5141\u8BB8\u91C7\u7528\\uxxxx\u5F62\u5F0F\u8868\u793A\u4E00\u4E2A\u5B57\u7B26\uFF0C\u5176\u4E2Dxxxx\u8868\u793A\u5B57\u7B26\u7684 Unicode \u7801\u70B9\u3002\u4F46\u662F\uFF0C\u8FD9\u79CD\u8868\u793A\u6CD5\u53EA\u9650\u4E8E\u7801\u70B9\u5728\\u0000~\\uFFFF\u4E4B\u95F4\u7684\u5B57\u7B26\u3002\u8D85\u51FA\u8FD9\u4E2A\u8303\u56F4\u7684\u5B57\u7B26\uFF0C\u5FC5\u987B\u7528\u4E24\u4E2A\u53CC\u5B57\u8282\u7684\u5F62\u5F0F\u8868\u793A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;\\u0061&quot;</span>
<span class="token comment">// &quot;a&quot;</span>

<span class="token string">&quot;\\uD842\\uDFB7&quot;</span>
<span class="token comment">// &quot;\u{20BB7}&quot;</span>

<span class="token string">&quot;\\u20BB7&quot;</span>
<span class="token comment">// &quot; 7&quot;</span>

<span class="token comment">//\u4E0A\u9762\u4EE3\u7801\u8868\u793A\uFF0C\u5982\u679C\u76F4\u63A5\u5728\\u\u540E\u9762\u8DDF\u4E0A\u8D85\u8FC70xFFFF\u7684\u6570\u503C\uFF08\u6BD4\u5982\\u20BB7\uFF09\uFF0CJavaScript \u4F1A\u7406\u89E3\u6210\\u20BB+7\u3002\u7531\u4E8E\\u20BB\u662F\u4E00\u4E2A\u4E0D\u53EF\u6253\u5370\u5B57\u7B26\uFF0C\u6240\u4EE5\u53EA\u4F1A\u663E\u793A\u4E00\u4E2A\u7A7A\u683C\uFF0C\u540E\u9762\u8DDF\u7740\u4E00\u4E2A7\u3002ES6 \u5BF9\u8FD9\u4E00\u70B9\u505A\u51FA\u4E86\u6539\u8FDB\uFF0C\u53EA\u8981\u5C06\u7801\u70B9\u653E\u5165\u5927\u62EC\u53F7\uFF0C\u5C31\u80FD\u6B63\u786E\u89E3\u8BFB\u8BE5\u5B57\u7B26\u3002</span>

<span class="token string">&quot;\\u{20BB7}&quot;</span>
<span class="token comment">// &quot;\u{20BB7}&quot;</span>
<span class="token string">&quot;\\u{41}\\u{42}\\u{43}&quot;</span>
<span class="token comment">// &quot;ABC&quot;</span>
<span class="token keyword">let</span> hello <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
hell\\u<span class="token punctuation">{</span>6F<span class="token punctuation">}</span> <span class="token comment">// 123</span>
<span class="token string">&#39;\\u{1F680}&#39;</span> <span class="token operator">===</span> <span class="token string">&#39;\\uD83D\\uDE80&#39;</span>
<span class="token comment">// true</span>


<span class="token comment">//\u6709\u4E86\u8FD9\u79CD\u8868\u793A\u6CD5\u4E4B\u540E\uFF0CJavaScript \u5171\u6709 6 \u79CD\u65B9\u6CD5\u53EF\u4EE5\u8868\u793A\u4E00\u4E2A\u5B57\u7B26\u3002</span>
<span class="token string">&#39;\\z&#39;</span> <span class="token operator">===</span> <span class="token string">&#39;z&#39;</span>  <span class="token comment">// true</span>
<span class="token string">&#39;\\172&#39;</span> <span class="token operator">===</span> <span class="token string">&#39;z&#39;</span> <span class="token comment">// true</span>
<span class="token string">&#39;\\x7A&#39;</span> <span class="token operator">===</span> <span class="token string">&#39;z&#39;</span> <span class="token comment">// true</span>
<span class="token string">&#39;\\u007A&#39;</span> <span class="token operator">===</span> <span class="token string">&#39;z&#39;</span> <span class="token comment">// true</span>
<span class="token string">&#39;\\u{7A}&#39;</span> <span class="token operator">===</span> <span class="token string">&#39;z&#39;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="\u5B57\u7B26\u4E32\u7684\u904D\u5386\u5668\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u7684\u904D\u5386\u5668\u63A5\u53E3" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u7684\u904D\u5386\u5668\u63A5\u53E3</h2><p>ES6 \u4E3A\u5B57\u7B26\u4E32\u6DFB\u52A0\u4E86\u904D\u5386\u5668\u63A5\u53E3\uFF08\u8BE6\u89C1\u300AIterator\u300B\u4E00\u7AE0\uFF09\uFF0C\u4F7F\u5F97\u5B57\u7B26\u4E32\u53EF\u4EE5\u88ABfor...of\u5FAA\u73AF\u904D\u5386\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> codePoint <span class="token keyword">of</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>codePoint<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// &quot;f&quot;</span>
<span class="token comment">// &quot;o&quot;</span>
<span class="token comment">// &quot;o&quot;</span>

<span class="token comment">// \u9664\u4E86\u904D\u5386\u5B57\u7B26\u4E32\uFF0C\u8FD9\u4E2A\u904D\u5386\u5668\u6700\u5927\u7684\u4F18\u70B9\u662F\u53EF\u4EE5\u8BC6\u522B\u5927\u4E8E0xFFFF\u7684\u7801\u70B9\uFF0C\u4F20\u7EDF\u7684for\u5FAA\u73AF\u65E0\u6CD5\u8BC6\u522B\u8FD9\u6837\u7684\u7801\u70B9\u3002</span>
<span class="token keyword">let</span> text <span class="token operator">=</span> String<span class="token punctuation">.</span><span class="token function">fromCodePoint</span><span class="token punctuation">(</span><span class="token number">0x20BB7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> text<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// &quot; &quot;</span>
<span class="token comment">// &quot; &quot;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// &quot;\u{20BB7}&quot;</span>
<span class="token comment">//\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u5B57\u7B26\u4E32text\u53EA\u6709\u4E00\u4E2A\u5B57\u7B26\uFF0C\u4F46\u662Ffor\u5FAA\u73AF\u4F1A\u8BA4\u4E3A\u5B83\u5305\u542B\u4E24\u4E2A\u5B57\u7B26\uFF08\u90FD\u4E0D\u53EF\u6253\u5370\uFF09\uFF0C\u800Cfor...of\u5FAA\u73AF\u4F1A\u6B63\u786E\u8BC6\u522B\u51FA\u8FD9\u4E00\u4E2A\u5B57\u7B26\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="json-stringify-\u7684\u6539\u9020" tabindex="-1"><a class="header-anchor" href="#json-stringify-\u7684\u6539\u9020" aria-hidden="true">#</a> JSON.stringify() \u7684\u6539\u9020</h2><p>\u6839\u636E\u6807\u51C6\uFF0CJSON \u6570\u636E\u5FC5\u987B\u662F UTF-8 \u7F16\u7801\u3002\u4F46\u662F\uFF0C\u73B0\u5728\u7684JSON.stringify()\u65B9\u6CD5\u6709\u53EF\u80FD\u8FD4\u56DE\u4E0D\u7B26\u5408 UTF-8 \u6807\u51C6\u7684\u5B57\u7B26\u4E32\u3002\u4E3A\u4E86\u786E\u4FDD\u8FD4\u56DE\u7684\u662F\u5408\u6CD5\u7684 UTF-8 \u5B57\u7B26\uFF0CES2019 \u6539\u53D8\u4E86JSON.stringify()\u7684\u884C\u4E3A\u3002\u5982\u679C\u9047\u52300xD800\u52300xDFFF\u4E4B\u95F4\u7684\u5355\u4E2A\u7801\u70B9\uFF0C\u6216\u8005\u4E0D\u5B58\u5728\u7684\u914D\u5BF9\u5F62\u5F0F\uFF0C\u5B83\u4F1A\u8FD4\u56DE\u8F6C\u4E49\u5B57\u7B26\u4E32\uFF0C\u7559\u7ED9\u5E94\u7528\u81EA\u5DF1\u51B3\u5B9A\u4E0B\u4E00\u6B65\u7684\u5904\u7406\u3002</p><h2 id="\u6A21\u677F\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u6A21\u677F\u5B57\u7B26\u4E32</h2><p>\u6A21\u677F\u5B57\u7B26\u4E32\uFF08template string\uFF09\u662F\u589E\u5F3A\u7248\u7684\u5B57\u7B26\u4E32\uFF0C\u7528\u53CD\u5F15\u53F7\uFF08\`\uFF09\u6807\u8BC6\u3002\u5B83\u53EF\u4EE5\u5F53\u4F5C\u666E\u901A\u5B57\u7B26\u4E32\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u7528\u6765\u5B9A\u4E49\u591A\u884C\u5B57\u7B26\u4E32\uFF0C\u6216\u8005\u5728\u5B57\u7B26\u4E32\u4E2D\u5D4C\u5165\u53D8\u91CF\u3002<br> \u4F20\u7EDF\u7684 JavaScript \u8BED\u8A00\uFF0C\u8F93\u51FA\u6A21\u677F\u901A\u5E38\u662F\u8FD9\u6837\u5199\u7684\uFF08\u4E0B\u9762\u4F7F\u7528\u4E86 jQuery \u7684\u65B9\u6CD5\uFF09\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#result&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>
  <span class="token string">&#39;There are &lt;b&gt;&#39;</span> <span class="token operator">+</span> basket<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token string">&#39;&lt;/b&gt; &#39;</span> <span class="token operator">+</span>
  <span class="token string">&#39;items in your basket, &#39;</span> <span class="token operator">+</span>
  <span class="token string">&#39;&lt;em&gt;&#39;</span> <span class="token operator">+</span> basket<span class="token punctuation">.</span>onSale <span class="token operator">+</span>
  <span class="token string">&#39;&lt;/em&gt; are on sale!&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E0A\u9762\u8FD9\u79CD\u5199\u6CD5\u76F8\u5F53\u7E41\u7410\u4E0D\u65B9\u4FBF\uFF0CES6 \u5F15\u5165\u4E86\u6A21\u677F\u5B57\u7B26\u4E32\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#result&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  There are &lt;b&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>basket<span class="token punctuation">.</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/b&gt; items
   in your basket, &lt;em&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>basket<span class="token punctuation">.</span>onSale<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/em&gt;
  are on sale!
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5E76\u4E14\u53EF\u4EE5\u5B9A\u4E49\u591A\u884C\u5B57\u7B26\u4E32\u548C\u4F7F\u7528\u53D8\u91CF</span>
<span class="token comment">// \u666E\u901A\u5B57\u7B26\u4E32</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">In JavaScript &#39;\\n&#39; is a line-feed.</span><span class="token template-punctuation string">\`</span></span>

<span class="token comment">// \u591A\u884C\u5B57\u7B26\u4E32</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">In JavaScript this is
 not legal.</span><span class="token template-punctuation string">\`</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">string text line 1
string text line 2</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6A21\u677F\u5B57\u7B26\u4E32\u4E2D\u5D4C\u5165\u53D8\u91CF\uFF0C\u9700\u8981\u5C06\u53D8\u91CF\u540D\u5199\u5728\${}\u4E4B\u4E2D\u3002\u5927\u62EC\u53F7\u5185\u90E8\u53EF\u4EE5\u653E\u5165\u4EFB\u610F\u7684 JavaScript \u8868\u8FBE\u5F0F\uFF0C\u53EF\u4EE5\u8FDB\u884C\u8FD0\u7B97\uFF0C\u4EE5\u53CA\u5F15\u7528\u5BF9\u8C61\u5C5E\u6027\u3002</span>
<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> time <span class="token operator">=</span> <span class="token string">&quot;today&quot;</span><span class="token punctuation">;</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, how are you </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>time<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?</span><span class="token template-punctuation string">\`</span></span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>obj<span class="token punctuation">.</span>x <span class="token operator">+</span> obj<span class="token punctuation">.</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token comment">// &quot;3&quot;</span>

<span class="token comment">// \u6A21\u677F\u5B57\u7B26\u4E32\u4E4B\u4E2D\u8FD8\u80FD\u8C03\u7528\u51FD\u6570\u3002</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">foo </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> bar</span><span class="token template-punctuation string">\`</span></span>
<span class="token comment">// foo Hello World bar</span>

<span class="token comment">//\u5982\u679C\u5927\u62EC\u53F7\u4E2D\u7684\u503C\u4E0D\u662F\u5B57\u7B26\u4E32\uFF0C\u5C06\u6309\u7167\u4E00\u822C\u7684\u89C4\u5219\u8F6C\u4E3A\u5B57\u7B26\u4E32\u3002\u6BD4\u5982\uFF0C\u5927\u62EC\u53F7\u4E2D\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5C06\u9ED8\u8BA4\u8C03\u7528\u5BF9\u8C61\u7684toString\u65B9\u6CD5\u3002\u5982\u679C\u6A21\u677F\u5B57\u7B26\u4E32\u4E2D\u7684\u53D8\u91CF\u6CA1\u6709\u58F0\u660E\uFF0C\u5C06\u62A5\u9519\u3002</span>

<span class="token comment">// \u6A21\u677F\u5B57\u7B26\u4E32\u751A\u81F3\u8FD8\u80FD\u5D4C\u5957\u3002</span>
<span class="token keyword">const</span> <span class="token function-variable function">tmpl</span> <span class="token operator">=</span> <span class="token parameter">addrs</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  &lt;table&gt;
  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>addrs<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">addr</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;tr&gt;&lt;td&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>addr<span class="token punctuation">.</span>first<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>addr<span class="token punctuation">.</span>last<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td&gt;&lt;/tr&gt;
  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
  &lt;/table&gt;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>




<span class="token comment">// \u5982\u679C\u4F7F\u7528\u6A21\u677F\u5B57\u7B26\u4E32\u8868\u793A\u591A\u884C\u5B57\u7B26\u4E32\uFF0C\u6240\u6709\u7684\u7A7A\u683C\u548C\u7F29\u8FDB\u90FD\u4F1A\u88AB\u4FDD\u7559\u5728\u8F93\u51FA\u4E4B\u4E2D\u3002\u5982\u679C\u4F60\u4E0D\u60F3\u8981\u8FD9\u4E2A\u6362\u884C\uFF0C\u53EF\u4EE5\u4F7F\u7528trim\u65B9\u6CD5\u6D88\u9664\u5B83\u3002</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\u7684\u6A21\u677F\u5B57\u7B26\u4E32\uFF0C\u90FD\u662F\u7528\u53CD\u5F15\u53F7\u8868\u793A\u3002\u5982\u679C\u5728\u6A21\u677F\u5B57\u7B26\u4E32\u4E2D\u9700\u8981\u4F7F\u7528\u53CD\u5F15\u53F7\uFF0C\u5219\u524D\u9762\u8981\u7528\u53CD\u659C\u6760\u8F6C\u4E49\u3002</p></div><h3 id="\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u9650\u5236" aria-hidden="true">#</a> \u9650\u5236</h3><p>\u6A21\u677F\u5B57\u7B26\u4E32\u9ED8\u8BA4\u4F1A\u5C06\u5B57\u7B26\u4E32\u8F6C\u4E49\uFF0C\u5BFC\u81F4\u65E0\u6CD5\u5D4C\u5165\u5176\u4ED6\u8BED\u8A00\u3002</p>`,16);function t(e,o){return p}var c=n(a,[["render",t],["__file","es6-3.html.vue"]]);export{c as default};
