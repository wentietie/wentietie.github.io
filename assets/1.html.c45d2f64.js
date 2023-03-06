import{_ as s,c as n}from"./app.9b52f51c.js";const a={},e=n(`<h1 id="\u4E0B\u8F7D\u955C\u50CF\u63D0\u793A\u6CA1\u6709\u78C1\u76D8\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u955C\u50CF\u63D0\u793A\u6CA1\u6709\u78C1\u76D8\u7A7A\u95F4" aria-hidden="true">#</a> \u4E0B\u8F7D\u955C\u50CF\u63D0\u793A\u6CA1\u6709\u78C1\u76D8\u7A7A\u95F4</h1><p>1.\u67E5\u770Bdocker\u6839\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker info | grep -i &quot;docker root dir&quot;</span>
 Docker Root Dir: /docker
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>2.\u67E5\u770B\u76EE\u5F55\u5269\u4F59\u7A7A\u95F4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># df -hl /docker</span>
\u6587\u4EF6\u7CFB\u7EDF                 \u5BB9\u91CF  \u5DF2\u7528  \u53EF\u7528 \u5DF2\u7528% \u6302\u8F7D\u70B9
/dev/mapper/centos-root  <span class="token number">6</span>.2G  <span class="token number">5</span>.5G  803M   <span class="token number">88</span>% /
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u78C1\u76D8\u7A7A\u95F4\u53EA\u5269803M\u53EF\u7528\uFF0C\u53EF\u4EE5\u5C06\u4ED6\u653E\u5230\u4E00\u4E2A\u66F4\u5927\u7684\u76EE\u5F55\u4E2D\u53BB\u3002</p><p>3.\u521B\u5EFA\u76EE\u6807\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /etc/systemd/system/docker.service.d/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>4.\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/systemd/system/docker.service.d/devicemapper.conf</span>
<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/dockerd  --graph<span class="token operator">=</span>/docker-root
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>5.\u91CD\u542Fdocker</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,12);function c(r,p){return e}var o=s(a,[["render",c],["__file","1.html.vue"]]);export{o as default};
