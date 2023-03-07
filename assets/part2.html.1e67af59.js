import{_ as s,c as n}from"./app.bc507441.js";var a="/assets/sever-install-gitlab-1.9cc0c5c9.png",e="/assets/sever-install-gitlab-2.00a02a88.png",l="/assets/sever-install-gitlab-4.982c4031.png",p="/assets/sever-install-gitlab-6.a2f1d4a1.png",t="/assets/sever-install-gitlab-3.8bfd1fa4.png";const r={},i=n(`<h1 id="centos7\u5B89\u88C5gitlab" tabindex="-1"><a class="header-anchor" href="#centos7\u5B89\u88C5gitlab" aria-hidden="true">#</a> CentOS7\u5B89\u88C5GitLab</h1><p>\u672C\u6559\u7A0B\u4E2D\uFF0C\u9632\u706B\u5899\u662F\u5173\u95ED\u7684\u3002</p><h1 id="_1-\u5B89\u88C5ssh" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5ssh" aria-hidden="true">#</a> 1.\u5B89\u88C5ssh</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u68C0\u67E5\u662F\u5426\u5B89\u88C5\u4E86ssh\u670D\u52A1</span>
systemctl status <span class="token function">ssh</span>

<span class="token comment"># \u5982\u679C\u6CA1\u5B89\u88C5\uFF0C\u5219\u5B89\u88C5\uFF1B\u5B89\u88C5\u7684\u8BDD\uFF0C\u8DF3\u8FC7\u8BE5\u547D\u4EE4</span>
yum <span class="token function">install</span> -y <span class="token function">curl</span> policycoreutils-pythonopenssh-server

<span class="token comment"># \u8BBE\u7F6Essh\u5F00\u673A\u81EA\u542F</span>
systemctl <span class="token builtin class-name">enable</span> sshd

<span class="token comment"># \u542F\u52A8ssh</span>
systemctl start sshd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h1 id="_2-\u5B89\u88C5-postfix" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5-postfix" aria-hidden="true">#</a> 2.\u5B89\u88C5 Postfix</h1><p>Postfix \u662F\u7528\u6765\u53D1\u9001\u901A\u77E5\u90AE\u4EF6\u7684\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u68C0\u67E5\u662F\u5426\u5B89\u88C5\u4E86postfix\u670D\u52A1</span>
systemctl status postfix

<span class="token comment"># \u5982\u679C\u6CA1\u5B89\u88C5\uFF0C\u5219\u5B89\u88C5\uFF1B\u5B89\u88C5\u7684\u8BDD\uFF0C\u8DF3\u8FC7\u8BE5\u547D\u4EE4</span>
yum <span class="token function">install</span> -y postfix

<span class="token comment"># \u8BBE\u7F6Epostfix\u5F00\u673A\u81EA\u542F</span>
systemctl <span class="token builtin class-name">enable</span> postfix

<span class="token comment"># \u542F\u52A8postfix</span>
systemctl start postfix
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h1 id="_3-\u5B89\u88C5-policycoreutils-python" tabindex="-1"><a class="header-anchor" href="#_3-\u5B89\u88C5-policycoreutils-python" aria-hidden="true">#</a> 3.\u5B89\u88C5 policycoreutils-python</h1><p>policycoreutils-python \u662Fgitlab\u7684\u4E00\u4E2A\u4F9D\u8D56\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> policycoreutils-python
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="_4-\u5B89\u88C5gitlab" tabindex="-1"><a class="header-anchor" href="#_4-\u5B89\u88C5gitlab" aria-hidden="true">#</a> 4.\u5B89\u88C5GitLab</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6DFB\u52A0gitlab\u955C\u50CF\u6E90</span>
<span class="token function">wget</span> https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/gitlab-ce-12.3.5-ce.0.el7.x86_64.rpm

<span class="token comment"># \u5B89\u88C5</span>
<span class="token function">rpm</span> -i gitlab-ce-12.3.5-ce.0.el7.x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5B89\u88C5\u8FC7\u7A0B\u9700\u8981\u4E9B\u65F6\u95F4\uFF0C\u5982\u679C\u51FA\u73B0\u4E0B\u56FE\uFF0C\u5219\u8BF4\u660E\u5B89\u88C5\u6210\u529F\u3002</p><p><img src="`+a+'" alt=""></p><h1 id="_5-\u914D\u7F6Egitlab" tabindex="-1"><a class="header-anchor" href="#_5-\u914D\u7F6Egitlab" aria-hidden="true">#</a> 5.\u914D\u7F6EGitLab</h1><p>GitLab\u76F8\u5173\u53C2\u6570\u914D\u7F6E\u90FD\u5728 <code>/etc/gitlab/gitlab.rb</code> \u6587\u4EF6\u91CC\uFF0C\u6BCF\u6B21\u914D\u7F6E\u5B8C\u6210\u4E4B\u540E\u9700\u8981\u6267\u884C<code>gitlab-ctl reconfigure</code>\uFF0C\u91CD\u65B0\u914D\u7F6E\u624D\u80FD\u751F\u6548\u3002</p><h2 id="_5-1\u914D\u7F6E-external-url" tabindex="-1"><a class="header-anchor" href="#_5-1\u914D\u7F6E-external-url" aria-hidden="true">#</a> 5.1\u914D\u7F6E external_url</h2><p>\u4FEE\u6539 external_url \u2018[http://ip:address]\u2018\u4E3A\u771F\u5B9E\u7684\u670D\u52A1\u5668IP\u548C\u7AEF\u53E3\u3002</p><p><img src="'+e+'" alt=""></p><h2 id="_5-2\u914D\u7F6E\u90AE\u4EF6\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_5-2\u914D\u7F6E\u90AE\u4EF6\u670D\u52A1" aria-hidden="true">#</a> 5.2\u914D\u7F6E\u90AE\u4EF6\u670D\u52A1</h2><p>\u4EE5qq\u90AE\u7BB1\u5411\u5916\u53D1\u9001gitlab\u7684\u76F8\u5173\u90AE\u4EF6\u4E3A\u4F8B\u3002</p><h3 id="_5-2-1-\u5F00\u542Fqq\u90AE\u7BB1\u7684stmp\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_5-2-1-\u5F00\u542Fqq\u90AE\u7BB1\u7684stmp\u670D\u52A1" aria-hidden="true">#</a> 5.2.1 \u5F00\u542Fqq\u90AE\u7BB1\u7684STMP\u670D\u52A1</h3><p><img src="'+l+`" alt=""></p><h3 id="_5-2-2-\u4FEE\u6539gitlab\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_5-2-2-\u4FEE\u6539gitlab\u914D\u7F6E" aria-hidden="true">#</a> 5.2.2 \u4FEE\u6539gitlab\u914D\u7F6E</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FDB\u5165\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">vim</span> /etc/gitlab/gitlab.rb

<span class="token comment"># \u53EF\u4EE5\u5728\u6587\u4EF6\u4E2D\u67E5\u627E\u8FD9\u4E9B\u5185\u5BB9\u8FDB\u884C\u4FEE\u6539\uFF0C\u7531\u4E8E\u8FD9\u4E9B\u5185\u5BB9\u662F\u6CE8\u91CA\u7684\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u6DFB\u52A0</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_enable&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_address&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;smtp.qq.com&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_port&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">465</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_user_name&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u90AE\u7BB1@qq.com&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_password&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u5F00\u901Asmtp\u65F6\u8FD4\u56DE\u7684\u6388\u6743\u7801&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_domain&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;qq.com&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_authentication&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;login&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_enable_starttls_auto&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_tls&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>

user<span class="token punctuation">[</span><span class="token string">&#39;git_user_email&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u90AE\u7BB1@qq.com&quot;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;gitlab_email_from&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;\u90AE\u7BB1@qq.com&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="_5-3\u91CD\u542Fgitlab" tabindex="-1"><a class="header-anchor" href="#_5-3\u91CD\u542Fgitlab" aria-hidden="true">#</a> 5.3\u91CD\u542Fgitlab</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4F7F\u4FEE\u6539\u7684\u914D\u7F6E\u751F\u6548</span>
gitlab-ctl reconfigure

<span class="token comment"># \u91CD\u542F</span>
gitlab-ctl restart
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong><code>gitlab-ctl reconfigure</code>\uFF08\u7B49\u5F85\u65F6\u95F4\u8F83\u957F\uFF09 \u82E5\u5B89\u88C5\u8FC7\u7A0B\u9047\u5230<code>\u201C ruby_block[wait for redis service socket] action run\u201D</code>\u5904\u5361\u4F4F\uFF0C\u53EF\u901A\u8FC7<code>ctrl+c</code>\u9000\u51FA\uFF0C\u5E76\u6267\u884C<code>systemctl restart gitlab-runsvdir</code>\uFF0C\u518D\u7EE7\u7EED\u6267\u884Cg<code>itlab-ctl reconfigure</code>\uFF0C\u5982\u5B89\u88C5\u8FC7\u7A0B\u9047\u5230\u62A5\u9519\u4FE1\u606F\uFF0C\u53EF\u91CD\u590D\u6267\u884C<code>gitlab-ctl reconfigure</code>\u3002</strong></p><h2 id="_5-4\u6D4B\u8BD5\u90AE\u4EF6\u662F\u5426\u751F\u6548" tabindex="-1"><a class="header-anchor" href="#_5-4\u6D4B\u8BD5\u90AE\u4EF6\u662F\u5426\u751F\u6548" aria-hidden="true">#</a> 5.4\u6D4B\u8BD5\u90AE\u4EF6\u662F\u5426\u751F\u6548</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6253\u5F00gitlab\u63A7\u5236\u53F0</span>
gitlab-rails console

<span class="token comment"># \u53D1\u9001\u90AE\u4EF6</span>
Notify.test_email<span class="token punctuation">(</span><span class="token string">&#39;\u63A5\u6536\u65B9\u90AE\u4EF6\u5730\u5740&#39;</span>,<span class="token string">&#39;\u90AE\u4EF6\u6807\u9898&#39;</span>,<span class="token string">&#39;\u90AE\u4EF6\u5185\u5BB9&#39;</span><span class="token punctuation">)</span>.deliver_now
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="`+p+'" alt=""></p><h2 id="_5-5-\u8BBE\u7F6Eroot\u8D26\u53F7\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#_5-5-\u8BBE\u7F6Eroot\u8D26\u53F7\u5BC6\u7801" aria-hidden="true">#</a> 5.5 \u8BBE\u7F6Eroot\u8D26\u53F7\u5BC6\u7801</h2><p>\u6253\u5F00\u6D4F\u89C8\u5668\uFF0C\u8F93\u5165gitlab\u7684ip+\u7AEF\u53E3\u53F7\uFF0C\u5982\u679C\u672A\u8BBE\u7F6Eroot\u8D26\u53F7\u7684\u5BC6\u7801\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8F6C\u5230\u5982\u4E0B\u754C\u9762\uFF0C\u5728\u8BE5\u754C\u9762\u91CC\u4FBF\u53EF\u8BBE\u7F6Eroot\u8D26\u53F7\u5BC6\u7801\u3002</p><p><img src="'+t+`" alt=""></p><h1 id="_6-gitlab\u7684\u8FC1\u79FB" tabindex="-1"><a class="header-anchor" href="#_6-gitlab\u7684\u8FC1\u79FB" aria-hidden="true">#</a> 6.gitlab\u7684\u8FC1\u79FB</h1><h2 id="_6-1-gitlab\u7248\u672C\u7684\u5347\u7EA7" tabindex="-1"><a class="header-anchor" href="#_6-1-gitlab\u7248\u672C\u7684\u5347\u7EA7" aria-hidden="true">#</a> 6.1 gitlab\u7248\u672C\u7684\u5347\u7EA7</h2><p>gitlab\u8FC1\u79FB\uFF0C\u9700\u8981\u4FDD\u8BC1\u4E24\u53F0\u670D\u52A1\u5668gitlab\u7248\u672C\u4E00\u81F4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770Bgitlab\u7248\u672C\u53F7</span>
<span class="token function">cat</span> /opt/gitlab/embedded/service/gitlab-rails/VERSION
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5982\u679C\u7248\u672C\u53F7\u4E0D\u4E00\u81F4\uFF0C\u5219\u9700\u8981\u5BF9gitlab\u8FDB\u884C\u5347\u7EA7\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5728\u5E26\u6709\u4F4E\u7248\u672Cgitlab\u7684\u670D\u52A1\u5668\u4E0A\u4E0B\u8F7D\u76F8\u5E94\u9AD8\u7248\u672C\u7684\u955C\u50CF\u6E90</span>
<span class="token function">wget</span> https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/gitlab-ce-12.3.5-ce.0.el7.x86_64.rpm

<span class="token comment"># \u5173\u95ED\u90E8\u5206gitlab\u670D\u52A1</span>
gitlab-ctl stop unicorn
gitlab-ctl stop sidekiq
gitlab-ctl stop nginx

<span class="token comment"># \u5347\u7EA7</span>
<span class="token function">rpm</span> -Uvh gitlab-ce-12.3.5-ce.0.el7.x86_64.rpm

<span class="token comment"># \u91CD\u65B0\u52A0\u8F7Dgitlab\u914D\u7F6E</span>
gitlab-ctl reconfigure

<span class="token comment"># \u91CD\u542Fgitlab</span>
gitlab-ctl restart
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="_6-2-\u5F00\u59CB\u8FC1\u79FB" tabindex="-1"><a class="header-anchor" href="#_6-2-\u5F00\u59CB\u8FC1\u79FB" aria-hidden="true">#</a> 6.2 \u5F00\u59CB\u8FC1\u79FB</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5907\u4EFD\u5C31\u6570\u636E\u5E93\u6570\u636E</span>
gitlab-rake gitlab:backup:create

<span class="token comment"># \u4F7F\u7528scp\u547D\u4EE4\u4ECE\u672C\u5730\u65E7\u670D\u52A1\u5668\u590D\u5236\u6587\u4EF6\u5230\u65B0\u670D\u52A1\u5668</span>
<span class="token function">scp</span> /var/opt/gitlab/backups/1614564759_2021_02_28_12.3.5_gitlab_backup.tar root@xxx.xxx.xxx.xxx:/var/opt/gitlab/backups/


<span class="token comment"># \u65B0\u670D\u52A1\u5668\u6062\u590DGitLab</span>
<span class="token comment"># \u5C06\u5907\u4EFD\u6587\u4EF6\u6743\u9650\u4FEE\u6539\u4E3A777\uFF0C\u907F\u514D\u51FA\u73B0\u6743\u9650\u4E0D\u591F\u7684\u95EE\u9898</span>
<span class="token builtin class-name">cd</span> /var/opt/gitlab/backups
chomd <span class="token number">777</span> 1614564759_2021_02_28_12.3.5_gitlab_backup.tar 

<span class="token comment"># \u505C\u6B62\u6570\u636E\u8FDE\u63A5\u670D\u52A1</span>
gitlab-ctl stop unicorn
gitlab-ctl stop sidekiq

<span class="token comment"># \u6062\u590D\u5907\u4EFD\u6587\u4EF6\u5230GitLab</span>
gitlab-rake gitlab:backup:restore <span class="token assign-left variable">BACKUP</span><span class="token operator">=</span>\u5907\u4EFD\u6587\u4EF6\u7F16\u53F7
<span class="token comment">#\u4F8B\u5982\uFF1A\u5907\u4EFD\u6587\u4EF6\u540D\u4E3A1614564759_2021_02_28_12.3.5_gitlab_backup.tar\uFF0C\u5219\u7F16\u53F7\u4E3A1614564759_2021_02_28_12.3.5\u3002\u5728\u63D0\u793A\u4E2D\u6572\u5165\u201Cyes\u201D\u7EE7\u7EED\u3002</span>

<span class="token comment"># \u542F\u52A8</span>
gitlab-ctl start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h1 id="_7-\u5378\u8F7Dgitlab" tabindex="-1"><a class="header-anchor" href="#_7-\u5378\u8F7Dgitlab" aria-hidden="true">#</a> 7.\u5378\u8F7Dgitlab</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u505C\u6B62gitlab</span>
gitlab-ctl stop

<span class="token comment"># \u5378\u8F7D</span>
<span class="token function">rpm</span> -e gitlab-ce

<span class="token comment"># \u67E5\u770Bgitlab\u8FDB\u7A0B</span>
<span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> gitlab

<span class="token comment"># \u6740\u6389\u7B2C\u4E00\u4E2A\u8FDB\u7A0B\uFF08\u5C31\u662F\u5E26\u6709\u597D\u591A.............\u7684\u8FDB\u7A0B\uFF09</span>
<span class="token function">kill</span> -9 XXXXX

<span class="token comment"># \u5220\u9664\u6240\u6709\u5305\u542Bgitlab\u6587\u4EF6</span>
<span class="token function">find</span> / -name gitlab <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">rm</span> -rf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,44);function c(o,b){return i}var m=s(r,[["render",c],["__file","part2.html.vue"]]);export{m as default};
