import{_ as n,o as s,c as a,b as t}from"./app-CW2dCZSC.js";const p={},e=t(`<h1 id="字符串的新增方法" tabindex="-1"><a class="header-anchor" href="#字符串的新增方法"><span>字符串的新增方法</span></a></h1><h2 id="string-fromcodepoint" tabindex="-1"><a class="header-anchor" href="#string-fromcodepoint"><span>String.fromCodePoint()</span></a></h2><p>ES5 提供String.fromCharCode()方法，用于从 Unicode 码点返回对应字符，但是这个方法不能识别码点大于0xFFFF的字符。ES6 提供了String.fromCodePoint()方法，可以识别大于0xFFFF的字符，弥补了String.fromCharCode()方法的不足。在作用上，正好与之后的codePointAt()方法相反。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">String<span class="token punctuation">.</span><span class="token function">fromCodePoint</span><span class="token punctuation">(</span><span class="token number">0x20BB7</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// &quot;𠮷&quot;</span></span>
<span class="line">String<span class="token punctuation">.</span><span class="token function">fromCodePoint</span><span class="token punctuation">(</span><span class="token number">0x78</span><span class="token punctuation">,</span> <span class="token number">0x1f680</span><span class="token punctuation">,</span> <span class="token number">0x79</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;x\\uD83D\\uDE80y&#39;</span></span>
<span class="line"><span class="token comment">// true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="string-raw" tabindex="-1"><a class="header-anchor" href="#string-raw"><span>String.raw()</span></a></h2><p>ES6 还为原生的 String 对象，提供了一个raw()方法。该方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，往往用于模板字符串的处理方法。</p><h2 id="codepointat" tabindex="-1"><a class="header-anchor" href="#codepointat"><span>codePointAt()</span></a></h2><p>JavaScript 内部，字符以 UTF-16 的格式储存，每个字符固定为2个字节。对于那些需要4个字节储存的字符（Unicode 码点大于0xFFFF的字符），JavaScript 会认为它们是两个字符。 ES6 提供了codePointAt()方法，能够正确处理 4 个字节储存的字符，返回一个字符的码点</p><h2 id="normalize" tabindex="-1"><a class="header-anchor" href="#normalize"><span>normalize()</span></a></h2><p>许多欧洲语言有语调符号和重音符号。为了表示它们，Unicode 提供了两种方法。一种是直接提供带重音符号的字符，比如Ǒ（\\u01D1）。另一种是提供合成符号（combining character），即原字符与重音符号的合成，两个字符合成一个字符，比如O（\\u004F）和ˇ（\\u030C）合成Ǒ（\\u004F\\u030C）。</p><p>这两种表示方法，在视觉和语义上都等价，但是 JavaScript 不能识别。 ES6 提供字符串实例的normalize()方法，用来将字符的不同表示方法统一为同样的形式，这称为 Unicode 正规化。</p><h2 id="includes-startswith-endswith" tabindex="-1"><a class="header-anchor" href="#includes-startswith-endswith"><span>includes(), startsWith(), endsWith()</span></a></h2><p>传统上，JavaScript 只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6 又提供了三种新方法。</p><ul><li>includes()：返回布尔值，表示是否找到了参数字符串。</li><li>startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。</li><li>endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token string">&#39;Hello world!&#39;</span><span class="token punctuation">;</span></span>
<span class="line">s<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line">s<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;!&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line">s<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;o&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//这三个方法都支持第二个参数，表示开始搜索的位置。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">s<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line">s<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line">s<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token comment">// false</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。</p></div><h2 id="repeat" tabindex="-1"><a class="header-anchor" href="#repeat"><span>repeat()</span></a></h2><p>repeat方法返回一个新字符串，表示将原字符串重复n次。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token string">&#39;x&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// &quot;xxx&quot;</span></span>
<span class="line"><span class="token string">&#39;hello&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// &quot;hellohello&quot;</span></span>
<span class="line"><span class="token string">&#39;na&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// &quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//参数如果是小数，会被取整。</span></span>
<span class="line"><span class="token string">&#39;na&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">2.9</span><span class="token punctuation">)</span> <span class="token comment">// &quot;nana&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//如果repeat的参数是负数或者Infinity，会报错</span></span>
<span class="line"><span class="token string">&#39;na&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// RangeError</span></span>
<span class="line"><span class="token string">&#39;na&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// RangeError</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//如果参数是 0 到-1 之间的小数，则等同于 0，这是因为会先进行取整运算。0 到-1 之间的小数，取整以后等于-0，repeat视同为 0。</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//参数NaN等同于 0。</span></span>
<span class="line"><span class="token string">&#39;na&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// &quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 如果repeat的参数是字符串，则会先转换成数字。</span></span>
<span class="line"><span class="token string">&#39;na&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token string">&#39;na&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &quot;&quot;</span></span>
<span class="line"><span class="token string">&#39;na&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &quot;nanana&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="padstart-padend" tabindex="-1"><a class="header-anchor" href="#padstart-padend"><span>padStart()，padEnd()</span></a></h2><p>ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token string">&#39;x&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;ab&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;ababx&#39;</span></span>
<span class="line"><span class="token string">&#39;x&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;ab&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;abax&#39;</span></span>
<span class="line"><span class="token string">&#39;x&#39;</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;ab&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;xabab&#39;</span></span>
<span class="line"><span class="token string">&#39;x&#39;</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;ab&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;xaba&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串。</span></span>
<span class="line"><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;ab&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;xxx&#39;</span></span>
<span class="line"><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;ab&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;xxx&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串。</span></span>
<span class="line"><span class="token string">&#39;abc&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;0123456789&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// &#39;0123456abc&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//如果省略第二个参数，默认使用空格补全长度。</span></span>
<span class="line"><span class="token string">&#39;x&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// &#39;   x&#39;</span></span>
<span class="line"><span class="token string">&#39;x&#39;</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// &#39;x  </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="trimstart-trimend" tabindex="-1"><a class="header-anchor" href="#trimstart-trimend"><span>trimStart()，trimEnd()</span></a></h2><p>ES2019 对字符串实例新增了trimStart()和trimEnd()这两个方法。它们的行为与trim()一致，trimStart()消除字符串头部的空格，trimEnd()消除尾部的空格。它们返回的都是新字符串，不会修改原始字符串。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&#39;  abc  &#39;</span><span class="token punctuation">;</span></span>
<span class="line">s<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;abc&quot;</span></span>
<span class="line">s<span class="token punctuation">.</span><span class="token function">trimStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;abc  &quot;</span></span>
<span class="line">s<span class="token punctuation">.</span><span class="token function">trimEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;  abc&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器还部署了额外的两个方法，trimLeft()是trimStart()的别名，trimRight()是trimEnd()的别名。</p><h2 id="matchall" tabindex="-1"><a class="header-anchor" href="#matchall"><span>matchAll()</span></a></h2><p>matchAll()方法返回一个正则表达式在当前字符串的所有匹配，详见《正则的扩展》的一章。</p>`,28),c=[e];function i(l,o){return s(),a("div",null,c)}const r=n(p,[["render",i],["__file","es6-4.html.vue"]]),d=JSON.parse('{"path":"/static/JavaScript/es6/es6-4.html","title":"字符串的新增方法","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"String.fromCodePoint()","slug":"string-fromcodepoint","link":"#string-fromcodepoint","children":[]},{"level":2,"title":"String.raw()","slug":"string-raw","link":"#string-raw","children":[]},{"level":2,"title":"codePointAt()","slug":"codepointat","link":"#codepointat","children":[]},{"level":2,"title":"normalize()","slug":"normalize","link":"#normalize","children":[]},{"level":2,"title":"includes(), startsWith(), endsWith()","slug":"includes-startswith-endswith","link":"#includes-startswith-endswith","children":[]},{"level":2,"title":"repeat()","slug":"repeat","link":"#repeat","children":[]},{"level":2,"title":"padStart()，padEnd()","slug":"padstart-padend","link":"#padstart-padend","children":[]},{"level":2,"title":"trimStart()，trimEnd()","slug":"trimstart-trimend","link":"#trimstart-trimend","children":[]},{"level":2,"title":"matchAll()","slug":"matchall","link":"#matchall","children":[]}],"git":{"updatedTime":1720499771000,"contributors":[{"name":"文铁铁~","email":"1179131421@qq.com","commits":1}]},"filePathRelative":"static/JavaScript/es6/es6-4.md"}');export{r as comp,d as data};