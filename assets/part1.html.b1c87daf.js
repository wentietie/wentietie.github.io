import{_ as e,c as a}from"./app.9b52f51c.js";var s="/assets/sever-nopass-login-1.1b875700.png",r="/assets/sever-nopass-login-2.c6289bd4.png",n="/assets/sever-nopass-login-3.a02c5314.png";const d={},o=a(`<h1 id="centos7root\u8D26\u53F7\u514D\u5BC6\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#centos7root\u8D26\u53F7\u514D\u5BC6\u767B\u5F55" aria-hidden="true">#</a> CentOS7root\u8D26\u53F7\u514D\u5BC6\u767B\u5F55</h1><p><strong>\u672C\u7B14\u8BB0\u5B9E\u73B0\u7684\u662F\u5728\u670D\u52A1\u5668A\u4E0A\u4F7F\u7528ssh\u514D\u5BC6\u767B\u5F55\u5230\u670D\u52A1\u5668B\u3002</strong></p><h1 id="_1-\u5728\u670D\u52A1\u5668a\u4E0A\u751F\u6210\u5BC6\u94A5\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u5728\u670D\u52A1\u5668a\u4E0A\u751F\u6210\u5BC6\u94A5\u6587\u4EF6" aria-hidden="true">#</a> 1.\u5728\u670D\u52A1\u5668A\u4E0A\u751F\u6210\u5BC6\u94A5\u6587\u4EF6</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-keygen -t rsa
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6267\u884C\u8FC7\u7A0B\u4E2D\u4E00\u8DEF\u56DE\u8F66\u5373\u53EF\u3002</p><p><img src="`+s+`" alt=""></p><p>\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u4F1A\u5728<code>/root</code>\u4E0B\u751F\u6210<code>.ssh</code>\u6587\u4EF6\u5939\uFF0C\u8BE5\u6587\u4EF6\u5939\u4E0B\u4F1A\u751F\u6210<code>id_rsa</code>\u548C<code>id_rsa.pub</code>\u6587\u4EF6\u3002</p><h1 id="_2-\u5728\u670D\u52A1\u5668a\u4E0A\u5C06\u5BC6\u94A5\u53D1\u9001\u5230\u670D\u52A1\u5668b\u4E0A" tabindex="-1"><a class="header-anchor" href="#_2-\u5728\u670D\u52A1\u5668a\u4E0A\u5C06\u5BC6\u94A5\u53D1\u9001\u5230\u670D\u52A1\u5668b\u4E0A" aria-hidden="true">#</a> 2.\u5728\u670D\u52A1\u5668A\u4E0A\u5C06\u5BC6\u94A5\u53D1\u9001\u5230\u670D\u52A1\u5668B\u4E0A</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.ssh
ssh-copy-id -i id_rsa.pub root@10.1.93.191
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="`+r+'" alt=""></p><h1 id="_3-\u4FEE\u6539\u670D\u52A1\u5668b\u4E0A\u7684\u6587\u4EF6\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#_3-\u4FEE\u6539\u670D\u52A1\u5668b\u4E0A\u7684\u6587\u4EF6\u6743\u9650" aria-hidden="true">#</a> 3.\u4FEE\u6539\u670D\u52A1\u5668B\u4E0A\u7684\u6587\u4EF6\u6743\u9650</h1><p><strong>\u4FEE\u6539\u670D\u52A1\u5668B\u4E0A\u7684<code>/root/.ssh</code>\u6587\u4EF6\u5939\u548C<code>/root/.ssh/authorized_keys</code>\u6587\u4EF6\u6743\u9650\u5206\u522B\u4E3A<code>700</code>\u3001<code>600</code></strong></p><h1 id="_4-\u5728\u670D\u52A1\u5668a\u4E0A\u5B9E\u73B0\u514D\u5BC6\u767B\u5F55\u670D\u52A1\u5668b" tabindex="-1"><a class="header-anchor" href="#_4-\u5728\u670D\u52A1\u5668a\u4E0A\u5B9E\u73B0\u514D\u5BC6\u767B\u5F55\u670D\u52A1\u5668b" aria-hidden="true">#</a> 4.\u5728\u670D\u52A1\u5668A\u4E0A\u5B9E\u73B0\u514D\u5BC6\u767B\u5F55\u670D\u52A1\u5668B</h1><p><img src="'+n+'" alt=""></p>',14);function c(i,t){return o}var p=e(d,[["render",c],["__file","part1.html.vue"]]);export{p as default};
