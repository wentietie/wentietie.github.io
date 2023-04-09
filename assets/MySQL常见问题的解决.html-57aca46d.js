import{_ as e,p as i,q as n,a1 as s}from"./framework-5866ffd3.js";const l={},a=s(`<h1 id="mysql常见问题的解决" tabindex="-1"><a class="header-anchor" href="#mysql常见问题的解决" aria-hidden="true">#</a> MySQL常见问题的解决</h1><h2 id="_1-mysql8-0时间与系统时间相差8小时" tabindex="-1"><a class="header-anchor" href="#_1-mysql8-0时间与系统时间相差8小时" aria-hidden="true">#</a> 1.MySQL8.0时间与系统时间相差8小时</h2><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 查看mysql时间
select now();

# 查看时区
show variables like &quot;%time_zone%&quot;;

# 修改mysql全局时区为北京时间，即东八区
set global time_zone = &#39;+8:00&#39;;

# 修改当前会话时间为北京时间
set time_zone = &#39;+8:00&#39;;

# 刷新配置立即生效
flush privileges;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d=[a];function r(c,v){return i(),n("div",null,d)}const t=e(l,[["render",r],["__file","MySQL常见问题的解决.html.vue"]]);export{t as default};
