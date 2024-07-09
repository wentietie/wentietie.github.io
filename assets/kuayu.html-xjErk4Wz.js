import{_ as s,o as n,c as a,b as e}from"./app-DRxAhH5h.js";const p={},t=e(`<h1 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域"><span>跨域</span></a></h1><p>当一个请求url的协议、域名、端口三者之间任意一个与当前页面url不同即为跨域。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>出于浏览器的同源策略限制。同源策略（Sameoriginpolicy）是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，则浏览器的正常功能可能都会受到影响。可以说Web是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现。同源策略会阻止一个域的javascript脚本和另外一个域的内容进行交互。所谓同源（即指在同一个域）就是两个页面具有相同的协议（protocol），主机（host）和端口号（port）。</p></div><h2 id="非同源限制" tabindex="-1"><a class="header-anchor" href="#非同源限制"><span>非同源限制</span></a></h2><ul><li>无法读取非同源网页的 Cookie、LocalStorage 和 IndexedDB</li><li>无法接触非同源网页的 DOM</li><li>无法向非同源地址发送 AJAX 请求</li></ul><h2 id="如何实现跨域请求" tabindex="-1"><a class="header-anchor" href="#如何实现跨域请求"><span>如何实现跨域请求</span></a></h2><h3 id="jsonp" tabindex="-1"><a class="header-anchor" href="#jsonp"><span>jsonp</span></a></h3><p>JSONP是JSON with Padding的略称。它是一个非官方的协议，它允许在服务器端集成Script tags返回至客户端，通过javascript callback的形式实现跨域访问（这仅仅是JSONP简单的实现形式）。 利用了 script 不受同源策略的限制，实现了跨域请求</p><p>缺点：只能 get 方式，易受到 XSS攻击</p><h3 id="cors-cross-origin-resource-sharing-跨域资源共享" tabindex="-1"><a class="header-anchor" href="#cors-cross-origin-resource-sharing-跨域资源共享"><span>CORS（Cross-Origin Resource Sharing）,跨域资源共享</span></a></h3><p>当使用XMLHttpRequest发送请求时，如果浏览器发现违反了同源策略就会自动加上一个请求头 origin；</p><p>后端在接受到请求后确定响应后会在 Response Headers 中加入一个属性 Access-Control-Allow-Origin；</p><p>浏览器判断响应中的 Access-Control-Allow-Origin 值是否和当前的地址相同，匹配成功后才继续响应处理，否则报错</p><p>缺点：忽略 cookie，浏览器版本有一定要求</p><h3 id="代理跨域请求" tabindex="-1"><a class="header-anchor" href="#代理跨域请求"><span>代理跨域请求</span></a></h3><p>前端向发送请求，经过代理，请求需要的服务器资源</p><p>缺点：需要额外的代理服务器</p><h3 id="html5-postmessage-方法" tabindex="-1"><a class="header-anchor" href="#html5-postmessage-方法"><span>Html5 postMessage 方法</span></a></h3><p>允许来自不同源的脚本采用异步方式进行有限的通信，可以实现跨文本、多窗口、跨域消息传递</p><p>缺点：浏览器版本要求，部分浏览器要配置放开跨域限制</p><h3 id="修改-document-domain-跨子域" tabindex="-1"><a class="header-anchor" href="#修改-document-domain-跨子域"><span>修改 document.domain 跨子域</span></a></h3><p>相同主域名下的不同子域名资源，设置 document.domain 为 相同的一级域名</p><p>缺点：只能是同一一级域名；相同协议；相同端口</p><h3 id="基于-html5-websocket-协议" tabindex="-1"><a class="header-anchor" href="#基于-html5-websocket-协议"><span>基于 Html5 websocket 协议</span></a></h3><p>websocket 是 Html5 一种新的协议，基于该协议可以做到浏览器与服务器全双工通信，允许跨域请求</p><p>缺点：浏览器一定版本要求，服务器需要支持 websocket 协议</p><h3 id="document-xxx-iframe" tabindex="-1"><a class="header-anchor" href="#document-xxx-iframe"><span>document.xxx + iframe</span></a></h3><p>通过 iframe 是浏览器非同源标签，加载内容中转，传到当前页面的属性中</p><p>缺点：页面的属性值有大小限制</p><h2 id="前端常用代理" tabindex="-1"><a class="header-anchor" href="#前端常用代理"><span>前端常用代理</span></a></h2><h3 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack"><span>webpack</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;https://api.github.com&#39;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vite" tabindex="-1"><a class="header-anchor" href="#vite"><span>vite</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 字符串方式</span></span>
<span class="line">            <span class="token string-property property">&#39;/foo&#39;</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:4567&#39;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// 配置项方式</span></span>
<span class="line">            <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;https://jsonplaceholder.typicode.com&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),l=[t];function i(o,c){return n(),a("div",null,l)}const d=s(p,[["render",i],["__file","kuayu.html.vue"]]),u=JSON.parse('{"path":"/static/notes/browser/kuayu.html","title":"跨域","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"非同源限制","slug":"非同源限制","link":"#非同源限制","children":[]},{"level":2,"title":"如何实现跨域请求","slug":"如何实现跨域请求","link":"#如何实现跨域请求","children":[{"level":3,"title":"jsonp","slug":"jsonp","link":"#jsonp","children":[]},{"level":3,"title":"CORS（Cross-Origin Resource Sharing）,跨域资源共享","slug":"cors-cross-origin-resource-sharing-跨域资源共享","link":"#cors-cross-origin-resource-sharing-跨域资源共享","children":[]},{"level":3,"title":"代理跨域请求","slug":"代理跨域请求","link":"#代理跨域请求","children":[]},{"level":3,"title":"Html5 postMessage 方法","slug":"html5-postmessage-方法","link":"#html5-postmessage-方法","children":[]},{"level":3,"title":"修改 document.domain 跨子域","slug":"修改-document-domain-跨子域","link":"#修改-document-domain-跨子域","children":[]},{"level":3,"title":"基于 Html5 websocket 协议","slug":"基于-html5-websocket-协议","link":"#基于-html5-websocket-协议","children":[]},{"level":3,"title":"document.xxx + iframe","slug":"document-xxx-iframe","link":"#document-xxx-iframe","children":[]}]},{"level":2,"title":"前端常用代理","slug":"前端常用代理","link":"#前端常用代理","children":[{"level":3,"title":"webpack","slug":"webpack","link":"#webpack","children":[]},{"level":3,"title":"vite","slug":"vite","link":"#vite","children":[]}]}],"git":{},"filePathRelative":"static/notes/browser/kuayu.md"}');export{d as comp,u as data};
