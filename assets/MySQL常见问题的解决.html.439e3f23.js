import{_ as n,c as s}from"./app.cfeeb12a.js";const e={},a=s(`<h1 id="mysql\u5E38\u89C1\u95EE\u9898\u7684\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#mysql\u5E38\u89C1\u95EE\u9898\u7684\u89E3\u51B3" aria-hidden="true">#</a> MySQL\u5E38\u89C1\u95EE\u9898\u7684\u89E3\u51B3</h1><h2 id="_1-mysql8-0\u65F6\u95F4\u4E0E\u7CFB\u7EDF\u65F6\u95F4\u76F8\u5DEE8\u5C0F\u65F6" tabindex="-1"><a class="header-anchor" href="#_1-mysql8-0\u65F6\u95F4\u4E0E\u7CFB\u7EDF\u65F6\u95F4\u76F8\u5DEE8\u5C0F\u65F6" aria-hidden="true">#</a> 1.MySQL8.0\u65F6\u95F4\u4E0E\u7CFB\u7EDF\u65F6\u95F4\u76F8\u5DEE8\u5C0F\u65F6</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code># \u67E5\u770Bmysql\u65F6\u95F4
select now();

# \u67E5\u770B\u65F6\u533A
show variables like &quot;%time_zone%&quot;;

# \u4FEE\u6539mysql\u5168\u5C40\u65F6\u533A\u4E3A\u5317\u4EAC\u65F6\u95F4\uFF0C\u5373\u4E1C\u516B\u533A
set global time_zone = &#39;+8:00&#39;;

# \u4FEE\u6539\u5F53\u524D\u4F1A\u8BDD\u65F6\u95F4\u4E3A\u5317\u4EAC\u65F6\u95F4
set time_zone = &#39;+8:00&#39;;

# \u5237\u65B0\u914D\u7F6E\u7ACB\u5373\u751F\u6548
flush privileges;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,3);function r(l,i){return a}var b=n(e,[["render",r],["__file","MySQL\u5E38\u89C1\u95EE\u9898\u7684\u89E3\u51B3.html.vue"]]);export{b as default};
