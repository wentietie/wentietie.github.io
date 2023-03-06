import{_ as a,c as n}from"./app.9b52f51c.js";const s={},e=n(`<h1 id="\u8DE8\u57DF" tabindex="-1"><a class="header-anchor" href="#\u8DE8\u57DF" aria-hidden="true">#</a> \u8DE8\u57DF</h1><p>\u5F53\u4E00\u4E2A\u8BF7\u6C42url\u7684\u534F\u8BAE\u3001\u57DF\u540D\u3001\u7AEF\u53E3\u4E09\u8005\u4E4B\u95F4\u4EFB\u610F\u4E00\u4E2A\u4E0E\u5F53\u524D\u9875\u9762url\u4E0D\u540C\u5373\u4E3A\u8DE8\u57DF\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u51FA\u4E8E\u6D4F\u89C8\u5668\u7684\u540C\u6E90\u7B56\u7565\u9650\u5236\u3002\u540C\u6E90\u7B56\u7565\uFF08Sameoriginpolicy\uFF09\u662F\u4E00\u79CD\u7EA6\u5B9A\uFF0C\u5B83\u662F\u6D4F\u89C8\u5668\u6700\u6838\u5FC3\u4E5F\u6700\u57FA\u672C\u7684\u5B89\u5168\u529F\u80FD\uFF0C\u5982\u679C\u7F3A\u5C11\u4E86\u540C\u6E90\u7B56\u7565\uFF0C\u5219\u6D4F\u89C8\u5668\u7684\u6B63\u5E38\u529F\u80FD\u53EF\u80FD\u90FD\u4F1A\u53D7\u5230\u5F71\u54CD\u3002\u53EF\u4EE5\u8BF4Web\u662F\u6784\u5EFA\u5728\u540C\u6E90\u7B56\u7565\u57FA\u7840\u4E4B\u4E0A\u7684\uFF0C\u6D4F\u89C8\u5668\u53EA\u662F\u9488\u5BF9\u540C\u6E90\u7B56\u7565\u7684\u4E00\u79CD\u5B9E\u73B0\u3002\u540C\u6E90\u7B56\u7565\u4F1A\u963B\u6B62\u4E00\u4E2A\u57DF\u7684javascript\u811A\u672C\u548C\u53E6\u5916\u4E00\u4E2A\u57DF\u7684\u5185\u5BB9\u8FDB\u884C\u4EA4\u4E92\u3002\u6240\u8C13\u540C\u6E90\uFF08\u5373\u6307\u5728\u540C\u4E00\u4E2A\u57DF\uFF09\u5C31\u662F\u4E24\u4E2A\u9875\u9762\u5177\u6709\u76F8\u540C\u7684\u534F\u8BAE\uFF08protocol\uFF09\uFF0C\u4E3B\u673A\uFF08host\uFF09\u548C\u7AEF\u53E3\u53F7\uFF08port\uFF09\u3002</p></div><h2 id="\u975E\u540C\u6E90\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u975E\u540C\u6E90\u9650\u5236" aria-hidden="true">#</a> \u975E\u540C\u6E90\u9650\u5236</h2><ul><li>\u65E0\u6CD5\u8BFB\u53D6\u975E\u540C\u6E90\u7F51\u9875\u7684 Cookie\u3001LocalStorage \u548C IndexedDB</li><li>\u65E0\u6CD5\u63A5\u89E6\u975E\u540C\u6E90\u7F51\u9875\u7684 DOM</li><li>\u65E0\u6CD5\u5411\u975E\u540C\u6E90\u5730\u5740\u53D1\u9001 AJAX \u8BF7\u6C42</li></ul><h2 id="\u5982\u4F55\u5B9E\u73B0\u8DE8\u57DF\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5B9E\u73B0\u8DE8\u57DF\u8BF7\u6C42" aria-hidden="true">#</a> \u5982\u4F55\u5B9E\u73B0\u8DE8\u57DF\u8BF7\u6C42</h2><h3 id="jsonp" tabindex="-1"><a class="header-anchor" href="#jsonp" aria-hidden="true">#</a> jsonp</h3><p>JSONP\u662FJSON with Padding\u7684\u7565\u79F0\u3002\u5B83\u662F\u4E00\u4E2A\u975E\u5B98\u65B9\u7684\u534F\u8BAE\uFF0C\u5B83\u5141\u8BB8\u5728\u670D\u52A1\u5668\u7AEF\u96C6\u6210Script tags\u8FD4\u56DE\u81F3\u5BA2\u6237\u7AEF\uFF0C\u901A\u8FC7javascript callback\u7684\u5F62\u5F0F\u5B9E\u73B0\u8DE8\u57DF\u8BBF\u95EE\uFF08\u8FD9\u4EC5\u4EC5\u662FJSONP\u7B80\u5355\u7684\u5B9E\u73B0\u5F62\u5F0F\uFF09\u3002 \u5229\u7528\u4E86 script \u4E0D\u53D7\u540C\u6E90\u7B56\u7565\u7684\u9650\u5236\uFF0C\u5B9E\u73B0\u4E86\u8DE8\u57DF\u8BF7\u6C42</p><p>\u7F3A\u70B9\uFF1A\u53EA\u80FD get \u65B9\u5F0F\uFF0C\u6613\u53D7\u5230 XSS\u653B\u51FB</p><h3 id="cors-cross-origin-resource-sharing-\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB" tabindex="-1"><a class="header-anchor" href="#cors-cross-origin-resource-sharing-\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB" aria-hidden="true">#</a> CORS\uFF08Cross-Origin Resource Sharing\uFF09,\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB</h3><p>\u5F53\u4F7F\u7528XMLHttpRequest\u53D1\u9001\u8BF7\u6C42\u65F6\uFF0C\u5982\u679C\u6D4F\u89C8\u5668\u53D1\u73B0\u8FDD\u53CD\u4E86\u540C\u6E90\u7B56\u7565\u5C31\u4F1A\u81EA\u52A8\u52A0\u4E0A\u4E00\u4E2A\u8BF7\u6C42\u5934 origin\uFF1B</p><p>\u540E\u7AEF\u5728\u63A5\u53D7\u5230\u8BF7\u6C42\u540E\u786E\u5B9A\u54CD\u5E94\u540E\u4F1A\u5728 Response Headers \u4E2D\u52A0\u5165\u4E00\u4E2A\u5C5E\u6027 Access-Control-Allow-Origin\uFF1B</p><p>\u6D4F\u89C8\u5668\u5224\u65AD\u54CD\u5E94\u4E2D\u7684 Access-Control-Allow-Origin \u503C\u662F\u5426\u548C\u5F53\u524D\u7684\u5730\u5740\u76F8\u540C\uFF0C\u5339\u914D\u6210\u529F\u540E\u624D\u7EE7\u7EED\u54CD\u5E94\u5904\u7406\uFF0C\u5426\u5219\u62A5\u9519</p><p>\u7F3A\u70B9\uFF1A\u5FFD\u7565 cookie\uFF0C\u6D4F\u89C8\u5668\u7248\u672C\u6709\u4E00\u5B9A\u8981\u6C42</p><h3 id="\u4EE3\u7406\u8DE8\u57DF\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7406\u8DE8\u57DF\u8BF7\u6C42" aria-hidden="true">#</a> \u4EE3\u7406\u8DE8\u57DF\u8BF7\u6C42</h3><p>\u524D\u7AEF\u5411\u53D1\u9001\u8BF7\u6C42\uFF0C\u7ECF\u8FC7\u4EE3\u7406\uFF0C\u8BF7\u6C42\u9700\u8981\u7684\u670D\u52A1\u5668\u8D44\u6E90</p><p>\u7F3A\u70B9\uFF1A\u9700\u8981\u989D\u5916\u7684\u4EE3\u7406\u670D\u52A1\u5668</p><h3 id="html5-postmessage-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#html5-postmessage-\u65B9\u6CD5" aria-hidden="true">#</a> Html5 postMessage \u65B9\u6CD5</h3><p>\u5141\u8BB8\u6765\u81EA\u4E0D\u540C\u6E90\u7684\u811A\u672C\u91C7\u7528\u5F02\u6B65\u65B9\u5F0F\u8FDB\u884C\u6709\u9650\u7684\u901A\u4FE1\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u8DE8\u6587\u672C\u3001\u591A\u7A97\u53E3\u3001\u8DE8\u57DF\u6D88\u606F\u4F20\u9012</p><p>\u7F3A\u70B9\uFF1A\u6D4F\u89C8\u5668\u7248\u672C\u8981\u6C42\uFF0C\u90E8\u5206\u6D4F\u89C8\u5668\u8981\u914D\u7F6E\u653E\u5F00\u8DE8\u57DF\u9650\u5236</p><h3 id="\u4FEE\u6539-document-domain-\u8DE8\u5B50\u57DF" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539-document-domain-\u8DE8\u5B50\u57DF" aria-hidden="true">#</a> \u4FEE\u6539 document.domain \u8DE8\u5B50\u57DF</h3><p>\u76F8\u540C\u4E3B\u57DF\u540D\u4E0B\u7684\u4E0D\u540C\u5B50\u57DF\u540D\u8D44\u6E90\uFF0C\u8BBE\u7F6E document.domain \u4E3A \u76F8\u540C\u7684\u4E00\u7EA7\u57DF\u540D</p><p>\u7F3A\u70B9\uFF1A\u53EA\u80FD\u662F\u540C\u4E00\u4E00\u7EA7\u57DF\u540D\uFF1B\u76F8\u540C\u534F\u8BAE\uFF1B\u76F8\u540C\u7AEF\u53E3</p><h3 id="\u57FA\u4E8E-html5-websocket-\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8E-html5-websocket-\u534F\u8BAE" aria-hidden="true">#</a> \u57FA\u4E8E Html5 websocket \u534F\u8BAE</h3><p>websocket \u662F Html5 \u4E00\u79CD\u65B0\u7684\u534F\u8BAE\uFF0C\u57FA\u4E8E\u8BE5\u534F\u8BAE\u53EF\u4EE5\u505A\u5230\u6D4F\u89C8\u5668\u4E0E\u670D\u52A1\u5668\u5168\u53CC\u5DE5\u901A\u4FE1\uFF0C\u5141\u8BB8\u8DE8\u57DF\u8BF7\u6C42</p><p>\u7F3A\u70B9\uFF1A\u6D4F\u89C8\u5668\u4E00\u5B9A\u7248\u672C\u8981\u6C42\uFF0C\u670D\u52A1\u5668\u9700\u8981\u652F\u6301 websocket \u534F\u8BAE</p><h3 id="document-xxx-iframe" tabindex="-1"><a class="header-anchor" href="#document-xxx-iframe" aria-hidden="true">#</a> document.xxx + iframe</h3><p>\u901A\u8FC7 iframe \u662F\u6D4F\u89C8\u5668\u975E\u540C\u6E90\u6807\u7B7E\uFF0C\u52A0\u8F7D\u5185\u5BB9\u4E2D\u8F6C\uFF0C\u4F20\u5230\u5F53\u524D\u9875\u9762\u7684\u5C5E\u6027\u4E2D</p><p>\u7F3A\u70B9\uFF1A\u9875\u9762\u7684\u5C5E\u6027\u503C\u6709\u5927\u5C0F\u9650\u5236</p><h2 id="\u524D\u7AEF\u5E38\u7528\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u5E38\u7528\u4EE3\u7406" aria-hidden="true">#</a> \u524D\u7AEF\u5E38\u7528\u4EE3\u7406</h2><h3 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9000</span><span class="token punctuation">,</span>
        <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;https://api.github.com&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="vite" tabindex="-1"><a class="header-anchor" href="#vite" aria-hidden="true">#</a> vite</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5B57\u7B26\u4E32\u65B9\u5F0F</span>
            <span class="token string-property property">&#39;/foo&#39;</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:4567&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// \u914D\u7F6E\u9879\u65B9\u5F0F</span>
            <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;https://jsonplaceholder.typicode.com&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,34);function p(t,r){return e}var c=a(s,[["render",p],["__file","kuayu.html.vue"]]);export{c as default};
