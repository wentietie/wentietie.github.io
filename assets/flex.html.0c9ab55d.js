import{_ as a,c as n}from"./app.bc507441.js";const l={},s=n(`<h1 id="\u5F39\u6027\u76D2\u5B50\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u5F39\u6027\u76D2\u5B50\u6A21\u578B" aria-hidden="true">#</a> \u5F39\u6027\u76D2\u5B50\u6A21\u578B</h1><p>Flex\u662FFlexible Box\u7684\u7F29\u5199\uFF0C\u610F\u4E3A&quot;\u5F39\u6027\u5E03\u5C40&quot;\uFF0C\u7528\u6765\u4E3A\u76D2\u72B6\u6A21\u578B\u63D0\u4F9B\u6700\u5927\u7684\u7075\u6D3B\u6027\u3002\u4EFB\u4F55\u4E00\u4E2A\u5BB9\u5668\u90FD\u53EF\u4EE5\u6307\u5B9A\u4E3AFlex\u5E03\u5C40\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u8BBE\u4E3AFlex\u5E03\u5C40\u4EE5\u540E\uFF0C\u5B50\u5143\u7D20\u7684float\u3001clear\u548Cvertical-align\u5C5E\u6027\u5C06\u5931\u6548\u3002position\u5B9A\u4F4D\u4E0D\u53D7\u5F71\u54CD\u3002</p></div><h2 id="\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> \u57FA\u672C\u6982\u5FF5</h2><p>\u5BB9\u5668: \u88AB\u8BBE\u4E3Adisplay: flex\u7684\u5143\u7D20 \u4E3B\u8F74: \u9ED8\u8BA4\u4E3A\u5BB9\u5668\u7684\u6C34\u5E73\u8F74 \u4EA4\u53C9\u8F74: \u4E0E\u4E3B\u8F74\u5782\u76F4\u7684\u8F74</p><h2 id="\u5C06\u5143\u7D20\u8BBE\u7F6E\u4E3A\u5F39\u6027\u76D2\u5B50" tabindex="-1"><a class="header-anchor" href="#\u5C06\u5143\u7D20\u8BBE\u7F6E\u4E3A\u5F39\u6027\u76D2\u5B50" aria-hidden="true">#</a> \u5C06\u5143\u7D20\u8BBE\u7F6E\u4E3A\u5F39\u6027\u76D2\u5B50</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex-test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.flex-test</span><span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u5BB9\u5668\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668\u7684\u5C5E\u6027" aria-hidden="true">#</a> \u5BB9\u5668\u7684\u5C5E\u6027</h2><ul><li><strong>flex-direction</strong>: \u5C5E\u6027\u51B3\u5B9A\u4E3B\u8F74\u7684\u65B9\u5411\uFF08\u5373\u9879\u76EE\u7684\u6392\u5217\u65B9\u5411\uFF09\u3002 <ul><li>row: \u4E3B\u8F74\u4E3A\u6C34\u5E73\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u5DE6\u7AEF</li><li>row-reverse: \u4E3B\u8F74\u4E3A\u6C34\u5E73\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u53F3\u7AEF</li><li>column: \u4E3B\u8F74\u4E3A\u5782\u76F4\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u4E0A\u6CBF\u3002</li><li>column-reverse: \u4E3B\u8F74\u4E3A\u5782\u76F4\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u4E0B\u6CBF\u3002</li></ul></li></ul><hr><ul><li><strong>flex-wrap</strong>: \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u9879\u76EE\u90FD\u6392\u5728\u4E00\u6761\u7EBF\uFF08\u53C8\u79F0&quot;\u8F74\u7EBF&quot;\uFF09\u4E0A\u3002flex-wrap\u5C5E\u6027\u5B9A\u4E49\uFF0C\u5982\u679C\u4E00\u6761\u8F74\u7EBF\u6392\u4E0D\u4E0B\uFF0C\u5982\u4F55\u6362\u884C\u3002 <ul><li>nowrap: \uFF08\u9ED8\u8BA4\uFF09\u4E0D\u6362\u884C\u3002</li><li>wrap: \u6362\u884C\uFF0C\u7B2C\u4E00\u884C\u5728\u4E0A\u65B9</li><li>wrap-reverse: \u6362\u884C\uFF0C\u7B2C\u4E00\u884C\u5728\u4E0B\u65B9</li></ul></li></ul><hr><ul><li><strong>flex-flow</strong>: \u5C5E\u6027\u662Fflex-direction\u5C5E\u6027\u548Cflex-wrap\u5C5E\u6027\u7684\u7B80\u5199\u5F62\u5F0F\uFF0C\u9ED8\u8BA4\u503C\u4E3Arow nowrap</li></ul><hr><ul><li><strong>justify-content</strong>: \u5C5E\u6027\u5B9A\u4E49\u4E86\u9879\u76EE\u5728\u4E3B\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002 <ul><li>flex-start: \uFF08\u9ED8\u8BA4\u503C\uFF09\u8D77\u70B9\u5BF9\u9F50</li><li>flex-end: \u7EC8\u70B9\u5BF9\u9F50</li><li>center: \u5C45\u4E2D</li><li>space-between: \u4E24\u7AEF\u5BF9\u9F50\uFF0C\u9879\u76EE\u4E4B\u95F4\u7684\u95F4\u9694\u90FD\u76F8\u7B49\u3002</li><li>space-around: \u6BCF\u4E2A\u9879\u76EE\u4E24\u4FA7\u7684\u95F4\u9694\u76F8\u7B49\u3002\u6240\u4EE5\uFF0C\u9879\u76EE\u4E4B\u95F4\u7684\u95F4\u9694\u6BD4\u9879\u76EE\u4E0E\u8FB9\u6846\u7684\u95F4\u9694\u5927\u4E00\u500D\u3002</li></ul></li></ul><hr><ul><li><strong>align-items</strong>: \u5C5E\u6027\u5B9A\u4E49\u9879\u76EE\u5728\u4EA4\u53C9\u8F74\u4E0A\u5982\u4F55\u5BF9\u9F50\u3002 <ul><li>flex-start: \u4EA4\u53C9\u8F74\u7684\u8D77\u70B9\u5BF9\u9F50\u3002</li><li>flex-end: \u4EA4\u53C9\u8F74\u7684\u7EC8\u70B9\u5BF9\u9F50\u3002</li><li>center: \u4EA4\u53C9\u8F74\u7684\u4E2D\u70B9\u5BF9\u9F50\u3002</li><li>baseline: \u9879\u76EE\u7684\u7B2C\u4E00\u884C\u6587\u5B57\u7684\u57FA\u7EBF\u5BF9\u9F50\u3002</li><li>stretch\uFF08\u9ED8\u8BA4\u503C\uFF09: \u5982\u679C\u9879\u76EE\u672A\u8BBE\u7F6E\u9AD8\u5EA6\u6216\u8BBE\u4E3Aauto\uFF0C\u5C06\u5360\u6EE1\u6574\u4E2A\u5BB9\u5668\u7684\u9AD8\u5EA6\u3002</li></ul></li></ul><hr><ul><li><strong>align-content</strong>: \u5C5E\u6027\u5B9A\u4E49\u4E86\u591A\u6839\u8F74\u7EBF\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002\u5982\u679C\u9879\u76EE\u53EA\u6709\u4E00\u6839\u8F74\u7EBF\uFF0C\u8BE5\u5C5E\u6027\u4E0D\u8D77\u4F5C\u7528\u3002 <ul><li>flex-start: \u4E0E\u4EA4\u53C9\u8F74\u7684\u8D77\u70B9\u5BF9\u9F50\u3002</li><li>flex-end: \u4E0E\u4EA4\u53C9\u8F74\u7684\u7EC8\u70B9\u5BF9\u9F50\u3002</li><li>center: \u4E0E\u4EA4\u53C9\u8F74\u7684\u4E2D\u70B9\u5BF9\u9F50\u3002</li><li>space-between: \u4E0E\u4EA4\u53C9\u8F74\u4E24\u7AEF\u5BF9\u9F50\uFF0C\u8F74\u7EBF\u4E4B\u95F4\u7684\u95F4\u9694\u5E73\u5747\u5206\u5E03\u3002</li><li>space-around: \u6BCF\u6839\u8F74\u7EBF\u4E24\u4FA7\u7684\u95F4\u9694\u90FD\u76F8\u7B49\u3002\u6240\u4EE5\uFF0C\u8F74\u7EBF\u4E4B\u95F4\u7684\u95F4\u9694\u6BD4\u8F74\u7EBF\u4E0E\u8FB9\u6846\u7684\u95F4\u9694\u5927\u4E00\u500D\u3002</li><li>stretch\uFF08\u9ED8\u8BA4\u503C\uFF09: \u8F74\u7EBF\u5360\u6EE1\u6574\u4E2A\u4EA4\u53C9\u8F74\u3002</li></ul></li></ul><h2 id="\u9879\u76EE\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u7684\u5C5E\u6027" aria-hidden="true">#</a> \u9879\u76EE\u7684\u5C5E\u6027</h2><ul><li>order: \u5C5E\u6027\u5B9A\u4E49\u9879\u76EE\u7684\u6392\u5217\u987A\u5E8F\u3002\u6570\u503C\u8D8A\u5C0F\uFF0C\u6392\u5217\u8D8A\u9760\u524D\uFF0C\u9ED8\u8BA4\u4E3A0\u3002</li></ul><hr><ul><li>flex-grow: \u5C5E\u6027\u5B9A\u4E49\u9879\u76EE\u7684\u653E\u5927\u6BD4\u4F8B\uFF0C\u9ED8\u8BA4\u4E3A0\uFF0C\u5373\u5982\u679C\u5B58\u5728\u5269\u4F59\u7A7A\u95F4\uFF0C\u4E5F\u4E0D\u653E\u5927\u3002 \u5982\u679C\u6240\u6709\u9879\u76EE\u7684flex-grow\u5C5E\u6027\u90FD\u4E3A1\uFF0C\u5219\u5B83\u4EEC\u5C06\u7B49\u5206\u5269\u4F59\u7A7A\u95F4\uFF08\u5982\u679C\u6709\u7684\u8BDD\uFF09\u3002\u5982\u679C\u4E00\u4E2A\u9879\u76EE\u7684flex-grow\u5C5E\u6027\u4E3A2\uFF0C\u5176\u4ED6\u9879\u76EE\u90FD\u4E3A1\uFF0C\u5219\u524D\u8005\u5360\u636E\u7684\u5269\u4F59\u7A7A\u95F4\u5C06\u6BD4\u5176\u4ED6\u9879\u591A\u4E00\u500D\u3002</li></ul><hr><ul><li>flex-shrink: \u5C5E\u6027\u5B9A\u4E49\u4E86\u9879\u76EE\u7684\u7F29\u5C0F\u6BD4\u4F8B\uFF0C\u9ED8\u8BA4\u4E3A1\uFF0C\u5373\u5982\u679C\u7A7A\u95F4\u4E0D\u8DB3\uFF0C\u8BE5\u9879\u76EE\u5C06\u7F29\u5C0F\u3002 \u5982\u679C\u6240\u6709\u9879\u76EE\u7684flex-shrink\u5C5E\u6027\u90FD\u4E3A1\uFF0C\u5F53\u7A7A\u95F4\u4E0D\u8DB3\u65F6\uFF0C\u90FD\u5C06\u7B49\u6BD4\u4F8B\u7F29\u5C0F\u3002\u5982\u679C\u4E00\u4E2A\u9879\u76EE\u7684flex-shrink\u5C5E\u6027\u4E3A0\uFF0C\u5176\u4ED6\u9879\u76EE\u90FD\u4E3A1\uFF0C\u5219\u7A7A\u95F4\u4E0D\u8DB3\u65F6\uFF0C\u524D\u8005\u4E0D\u7F29\u5C0F\u3002</li></ul><hr><ul><li>flex-basis: \u5C5E\u6027\u5B9A\u4E49\u4E86\u5728\u5206\u914D\u591A\u4F59\u7A7A\u95F4\u4E4B\u524D\uFF0C\u9879\u76EE\u5360\u636E\u7684\u4E3B\u8F74\u7A7A\u95F4\uFF08main size\uFF09\u3002\u6D4F\u89C8\u5668\u6839\u636E\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u8BA1\u7B97\u4E3B\u8F74\u662F\u5426\u6709\u591A\u4F59\u7A7A\u95F4\u3002\u5B83\u7684\u9ED8\u8BA4\u503C\u4E3Aauto\uFF0C\u5373\u9879\u76EE\u7684\u672C\u6765\u5927\u5C0F\u3002 \u53EF\u4EE5\u8BBE\u4E3A\u8DDFwidth\u6216height\u5C5E\u6027\u4E00\u6837\u7684\u503C\uFF08\u6BD4\u5982350px\uFF09\uFF0C\u5219\u9879\u76EE\u5C06\u5360\u636E\u56FA\u5B9A\u7A7A\u95F4\u3002</li></ul><hr><ul><li>flex: \u5C5E\u6027\u662Fflex-grow, flex-shrink \u548C flex-basis\u7684\u7B80\u5199\uFF0C\u9ED8\u8BA4\u503C\u4E3A0 1 auto\u3002\u540E\u4E24\u4E2A\u5C5E\u6027\u53EF\u9009\u3002</li></ul><hr><ul><li>align-self: \u5C5E\u6027\u5141\u8BB8\u5355\u4E2A\u9879\u76EE\u6709\u4E0E\u5176\u4ED6\u9879\u76EE\u4E0D\u4E00\u6837\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u8986\u76D6align-items\u5C5E\u6027\u3002\u9ED8\u8BA4\u503C\u4E3Aauto\uFF0C\u8868\u793A\u7EE7\u627F\u7236\u5143\u7D20\u7684align-items\u5C5E\u6027\uFF0C\u5982\u679C\u6CA1\u6709\u7236\u5143\u7D20\uFF0C\u5219\u7B49\u540C\u4E8Estretch\u3002</li></ul>`,31);function e(t,i){return s}var p=a(l,[["render",e],["__file","flex.html.vue"]]);export{p as default};