import{_ as s,o as n,c as e,b as a}from"./app-CQavEA7Q.js";const l={},i=a(`<h1 id="_99-mysql常见问题的解决" tabindex="-1"><a class="header-anchor" href="#_99-mysql常见问题的解决"><span>99 MySQL常见问题的解决</span></a></h1><h2 id="_1-mysql8-0时间与系统时间相差8小时" tabindex="-1"><a class="header-anchor" href="#_1-mysql8-0时间与系统时间相差8小时"><span>1.MySQL8.0时间与系统时间相差8小时</span></a></h2><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code><span class="line"># 查看mysql时间</span>
<span class="line">select now();</span>
<span class="line"></span>
<span class="line"># 查看时区</span>
<span class="line">show variables like &quot;%time_zone%&quot;;</span>
<span class="line"></span>
<span class="line"># 修改mysql全局时区为北京时间，即东八区</span>
<span class="line">set global time_zone = &#39;+8:00&#39;;</span>
<span class="line"></span>
<span class="line"># 修改当前会话时间为北京时间</span>
<span class="line">set time_zone = &#39;+8:00&#39;;</span>
<span class="line"></span>
<span class="line"># 刷新配置立即生效</span>
<span class="line">flush privileges;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[i];function t(d,m){return n(),e("div",null,c)}const p=s(l,[["render",t],["__file","99_MySQL常见问题的解决.html.vue"]]),v=JSON.parse('{"path":"/static/tang/mysql/99_MySQL%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E7%9A%84%E8%A7%A3%E5%86%B3.html","title":"99 MySQL常见问题的解决","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1.MySQL8.0时间与系统时间相差8小时","slug":"_1-mysql8-0时间与系统时间相差8小时","link":"#_1-mysql8-0时间与系统时间相差8小时","children":[]}],"git":{"updatedTime":1720499771000,"contributors":[{"name":"文铁铁~","email":"1179131421@qq.com","commits":1}]},"filePathRelative":"static/tang/mysql/99_MySQL常见问题的解决.md"}');export{p as comp,v as data};
