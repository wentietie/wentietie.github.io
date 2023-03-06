import{_ as e,r as l,o as i,a as r,b as n,e as o,F as c,d as s,c as d}from"./app.9b52f51c.js";const t={},p=n("h1",{id:"\u5728linux\u4E0A\u5B89\u88C5node",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5728linux\u4E0A\u5B89\u88C5node","aria-hidden":"true"},"#"),s(" \u5728linux\u4E0A\u5B89\u88C5node")],-1),u=n("h2",{id:"\u89E3\u538B\u7F29\u65B9\u5F0F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u89E3\u538B\u7F29\u65B9\u5F0F","aria-hidden":"true"},"#"),s(" \u89E3\u538B\u7F29\u65B9\u5F0F")],-1),h=s("\u4E0B\u8F7Dnode\u5B89\u88C5\u5305\u3002"),b={href:"https://npmmirror.com/mirrors/node/v16.15.0/node-v16.15.0-linux-x64.tar.xz",target:"_blank",rel:"noopener noreferrer"},m=s("Linux \u4E8C\u8FDB\u5236\u6587\u4EF6 (x64) v16.15.0"),x=n("li",null,"\u5C06\u5B89\u88C5\u5305\u590D\u5236\u5230linux\u4E0A\u3002",-1),_=n("li",null,"\u89E3\u538B\u5B89\u88C5\u5305",-1),v=d(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -xJf node-v6.10.2-linux-x64.tar.xz
<span class="token comment"># \u89E3\u538B\u540E\u5EFA\u8BAE\u91CD\u547D\u540D\u4E3Anodejs</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="4"><li>\u5EFA\u7ACB\u8F6F\u8FDE\u63A5</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">ln</span> -s /nodejs/bin/node /usr/local/bin/node
<span class="token function">sudo</span> <span class="token function">ln</span> -s /nodejs/bin/npm /usr/local/bin/npm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u5E38\u7528linux\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528linux\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528linux\u547D\u4EE4</h2><h3 id="\u538B\u7F29\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u538B\u7F29\u6587\u4EF6" aria-hidden="true">#</a> \u538B\u7F29\u6587\u4EF6</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u538B\u7F29\u6587\u4EF6</span>
<span class="token function">zip</span> -r *.zip *
<span class="token comment"># \u89E3\u538B\u6587\u4EF6</span>
<span class="token function">unzip</span> *.zip
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u67E5\u770B\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6587\u4EF6\u5939" aria-hidden="true">#</a> \u67E5\u770B\u6587\u4EF6\u5939</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u67E5\u770B\u6587\u4EF6\u5217\u8868</span>
ll
<span class="token comment">#\u67E5\u770B\u6240\u6709\u6587\u4EF6</span>
<span class="token function">ls</span> -a
<span class="token comment">#\u67E5\u770B\u9690\u85CF\u6587\u4EF6</span>
l.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u4FEE\u6539\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u4FEE\u6539\u73AF\u5883\u53D8\u91CF</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,10);function f(g,k){const a=l("ExternalLinkIcon");return i(),r(c,null,[p,u,n("ol",null,[n("li",null,[h,n("a",b,[m,o(a)])]),x,_]),v],64)}var N=e(t,[["render",f],["__file","linuxinstallnode.html.vue"]]);export{N as default};
