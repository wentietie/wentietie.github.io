import{_ as s,o as n,c as a,b as e}from"./app-CQavEA7Q.js";const l="/assets/sever-install-gitlab-1-CoUVkzC3.png",i="/assets/sever-install-gitlab-2-TWvV4Ti4.png",t="/assets/sever-install-gitlab-4-B5_pS3DA.png",p="/assets/sever-install-gitlab-6-trLCkIqu.png",c="/assets/sever-install-gitlab-3-D_ZqkQCg.png",r={},o=e(`<h1 id="centos7安装gitlab" tabindex="-1"><a class="header-anchor" href="#centos7安装gitlab"><span>CentOS7安装GitLab</span></a></h1><p><strong>本教程中，防火墙是关闭的。</strong></p><h2 id="_1-安装ssh" tabindex="-1"><a class="header-anchor" href="#_1-安装ssh"><span>1 安装ssh</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 检查是否安装了ssh服务</span></span>
<span class="line">systemctl status <span class="token function">ssh</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 如果没安装，则安装；安装的话，跳过该命令</span></span>
<span class="line">yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">curl</span> policycoreutils-pythonopenssh-server</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置ssh开机自启</span></span>
<span class="line">systemctl <span class="token builtin class-name">enable</span> sshd</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 启动ssh</span></span>
<span class="line">systemctl start sshd</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-安装-postfix" tabindex="-1"><a class="header-anchor" href="#_2-安装-postfix"><span>2 安装 Postfix</span></a></h2><p>Postfix 是用来发送通知邮件的。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 检查是否安装了postfix服务</span></span>
<span class="line">systemctl status postfix</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 如果没安装，则安装；安装的话，跳过该命令</span></span>
<span class="line">yum <span class="token function">install</span> <span class="token parameter variable">-y</span> postfix</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置postfix开机自启</span></span>
<span class="line">systemctl <span class="token builtin class-name">enable</span> postfix</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 启动postfix</span></span>
<span class="line">systemctl start postfix</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-安装-policycoreutils-python" tabindex="-1"><a class="header-anchor" href="#_3-安装-policycoreutils-python"><span>3 安装 policycoreutils-python</span></a></h2><p>policycoreutils-python 是gitlab的一个依赖。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">yum <span class="token function">install</span> policycoreutils-python</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_4-安装gitlab" tabindex="-1"><a class="header-anchor" href="#_4-安装gitlab"><span>4 安装GitLab</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 添加gitlab镜像源</span></span>
<span class="line"><span class="token function">wget</span> https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/gitlab-ce-12.3.5-ce.0.el7.x86_64.rpm</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装</span></span>
<span class="line"><span class="token function">rpm</span> <span class="token parameter variable">-i</span> gitlab-ce-12.3.5-ce.0.el7.x86_64.rpm</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装过程需要些时间，如果出现下图，则说明安装成功。</p><p><img src="`+l+'" alt=""></p><h2 id="_5-配置gitlab" tabindex="-1"><a class="header-anchor" href="#_5-配置gitlab"><span>5 配置GitLab</span></a></h2><p>GitLab相关参数配置都在 <code>/etc/gitlab/gitlab.rb</code> 文件里，每次配置完成之后需要执行<code>gitlab-ctl reconfigure</code>，重新配置才能生效。</p><h3 id="_5-1-配置-external-url" tabindex="-1"><a class="header-anchor" href="#_5-1-配置-external-url"><span>5.1 配置 external_url</span></a></h3><p>修改 external_url ‘[http://ip:address]‘为真实的服务器IP和端口。</p><p><img src="'+i+'" alt=""></p><h3 id="_5-2-配置邮件服务" tabindex="-1"><a class="header-anchor" href="#_5-2-配置邮件服务"><span>5.2 配置邮件服务</span></a></h3><p>以qq邮箱向外发送gitlab的相关邮件为例。</p><h4 id="_5-2-1-开启qq邮箱的stmp服务" tabindex="-1"><a class="header-anchor" href="#_5-2-1-开启qq邮箱的stmp服务"><span>5.2.1 开启qq邮箱的STMP服务</span></a></h4><p><img src="'+t+`" alt=""></p><h4 id="_5-2-2-修改gitlab配置" tabindex="-1"><a class="header-anchor" href="#_5-2-2-修改gitlab配置"><span>5.2.2 修改gitlab配置</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 进入配置文件</span></span>
<span class="line"><span class="token function">vim</span> /etc/gitlab/gitlab.rb</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 可以在文件中查找这些内容进行修改，由于这些内容是注释的，也可以直接添加</span></span>
<span class="line">gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_enable&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line">gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_address&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;smtp.qq.com&quot;</span></span>
<span class="line">gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_port&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">465</span></span>
<span class="line">gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_user_name&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;邮箱@qq.com&quot;</span></span>
<span class="line">gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_password&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;开通smtp时返回的授权码&quot;</span></span>
<span class="line">gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_domain&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;qq.com&quot;</span></span>
<span class="line">gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_authentication&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;login&quot;</span></span>
<span class="line">gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_enable_starttls_auto&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line">gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;smtp_tls&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line"></span>
<span class="line">user<span class="token punctuation">[</span><span class="token string">&#39;git_user_email&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;邮箱@qq.com&quot;</span></span>
<span class="line">gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;gitlab_email_from&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;邮箱@qq.com&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-重启gitlab" tabindex="-1"><a class="header-anchor" href="#_5-3-重启gitlab"><span>5.3 重启gitlab</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 使修改的配置生效</span></span>
<span class="line">gitlab-ctl reconfigure</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重启</span></span>
<span class="line">gitlab-ctl restart</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>gitlab-ctl reconfigure</code>（等待时间较长） 若安装过程遇到<code>“ ruby_block[wait for redis service socket] action run”</code>处卡住，可通过<code>ctrl+c</code>退出，并执行<code>systemctl restart gitlab-runsvdir</code>，再继续执行g<code>itlab-ctl reconfigure</code>，如安装过程遇到报错信息，可重复执行<code>gitlab-ctl reconfigure</code>。</strong></p><h3 id="_5-4-测试邮件是否生效" tabindex="-1"><a class="header-anchor" href="#_5-4-测试邮件是否生效"><span>5.4 测试邮件是否生效</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 打开gitlab控制台</span></span>
<span class="line">gitlab-rails console</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 发送邮件</span></span>
<span class="line">Notify.test_email<span class="token punctuation">(</span><span class="token string">&#39;接收方邮件地址&#39;</span>,<span class="token string">&#39;邮件标题&#39;</span>,<span class="token string">&#39;邮件内容&#39;</span><span class="token punctuation">)</span>.deliver_now</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+'" alt=""></p><h3 id="_5-5-设置root账号密码" tabindex="-1"><a class="header-anchor" href="#_5-5-设置root账号密码"><span>5.5 设置root账号密码</span></a></h3><p>打开浏览器，输入gitlab的ip+端口号，如果未设置root账号的密码，会自动跳转到如下界面，在该界面里便可设置root账号密码。</p><p><img src="'+c+`" alt=""></p><h2 id="_6-gitlab的迁移" tabindex="-1"><a class="header-anchor" href="#_6-gitlab的迁移"><span>6 gitlab的迁移</span></a></h2><h3 id="_6-1-gitlab版本的升级" tabindex="-1"><a class="header-anchor" href="#_6-1-gitlab版本的升级"><span>6.1 gitlab版本的升级</span></a></h3><p>gitlab迁移，需要保证两台服务器gitlab版本一致。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 查看gitlab版本号</span></span>
<span class="line"><span class="token function">cat</span> /opt/gitlab/embedded/service/gitlab-rails/VERSION</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果版本号不一致，则需要对gitlab进行升级。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 在带有低版本gitlab的服务器上下载相应高版本的镜像源</span></span>
<span class="line"><span class="token function">wget</span> https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/gitlab-ce-12.3.5-ce.0.el7.x86_64.rpm</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 关闭部分gitlab服务</span></span>
<span class="line">gitlab-ctl stop unicorn</span>
<span class="line">gitlab-ctl stop sidekiq</span>
<span class="line">gitlab-ctl stop nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 升级</span></span>
<span class="line"><span class="token function">rpm</span> <span class="token parameter variable">-Uvh</span> gitlab-ce-12.3.5-ce.0.el7.x86_64.rpm</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重新加载gitlab配置</span></span>
<span class="line">gitlab-ctl reconfigure</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重启gitlab</span></span>
<span class="line">gitlab-ctl restart</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-开始迁移" tabindex="-1"><a class="header-anchor" href="#_6-2-开始迁移"><span>6.2 开始迁移</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 备份就数据库数据</span></span>
<span class="line">gitlab-rake gitlab:backup:create</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用scp命令从本地旧服务器复制文件到新服务器</span></span>
<span class="line"><span class="token function">scp</span> /var/opt/gitlab/backups/1614564759_2021_02_28_12.3.5_gitlab_backup.tar root@xxx.xxx.xxx.xxx:/var/opt/gitlab/backups/</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 新服务器恢复GitLab</span></span>
<span class="line"><span class="token comment"># 将备份文件权限修改为777，避免出现权限不够的问题</span></span>
<span class="line"><span class="token builtin class-name">cd</span> /var/opt/gitlab/backups</span>
<span class="line">chomd <span class="token number">777</span> 1614564759_2021_02_28_12.3.5_gitlab_backup.tar </span>
<span class="line"></span>
<span class="line"><span class="token comment"># 停止数据连接服务</span></span>
<span class="line">gitlab-ctl stop unicorn</span>
<span class="line">gitlab-ctl stop sidekiq</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 恢复备份文件到GitLab</span></span>
<span class="line">gitlab-rake gitlab:backup:restore <span class="token assign-left variable">BACKUP</span><span class="token operator">=</span>备份文件编号</span>
<span class="line"><span class="token comment">#例如：备份文件名为1614564759_2021_02_28_12.3.5_gitlab_backup.tar，则编号为1614564759_2021_02_28_12.3.5。在提示中敲入“yes”继续。</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 启动</span></span>
<span class="line">gitlab-ctl start</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-卸载gitlab" tabindex="-1"><a class="header-anchor" href="#_7-卸载gitlab"><span>7 卸载gitlab</span></a></h2><p><strong>如不需要，可不操作</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 停止gitlab</span></span>
<span class="line">gitlab-ctl stop</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 卸载</span></span>
<span class="line"><span class="token function">rpm</span> <span class="token parameter variable">-e</span> gitlab-ce</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看gitlab进程</span></span>
<span class="line"><span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> gitlab</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 杀掉第一个进程（就是带有好多.............的进程）</span></span>
<span class="line"><span class="token function">kill</span> <span class="token parameter variable">-9</span> XXXXX</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除所有包含gitlab文件</span></span>
<span class="line"><span class="token function">find</span> / <span class="token parameter variable">-name</span> gitlab <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45),d=[o];function u(b,m){return n(),a("div",null,d)}const g=s(r,[["render",u],["__file","CentOS7安装GitLab.html.vue"]]),h=JSON.parse('{"path":"/static/tang/server/CentOS7%E5%AE%89%E8%A3%85GitLab.html","title":"CentOS7安装GitLab","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1 安装ssh","slug":"_1-安装ssh","link":"#_1-安装ssh","children":[]},{"level":2,"title":"2 安装 Postfix","slug":"_2-安装-postfix","link":"#_2-安装-postfix","children":[]},{"level":2,"title":"3 安装 policycoreutils-python","slug":"_3-安装-policycoreutils-python","link":"#_3-安装-policycoreutils-python","children":[]},{"level":2,"title":"4 安装GitLab","slug":"_4-安装gitlab","link":"#_4-安装gitlab","children":[]},{"level":2,"title":"5 配置GitLab","slug":"_5-配置gitlab","link":"#_5-配置gitlab","children":[{"level":3,"title":"5.1 配置 external_url","slug":"_5-1-配置-external-url","link":"#_5-1-配置-external-url","children":[]},{"level":3,"title":"5.2 配置邮件服务","slug":"_5-2-配置邮件服务","link":"#_5-2-配置邮件服务","children":[]},{"level":3,"title":"5.3 重启gitlab","slug":"_5-3-重启gitlab","link":"#_5-3-重启gitlab","children":[]},{"level":3,"title":"5.4 测试邮件是否生效","slug":"_5-4-测试邮件是否生效","link":"#_5-4-测试邮件是否生效","children":[]},{"level":3,"title":"5.5 设置root账号密码","slug":"_5-5-设置root账号密码","link":"#_5-5-设置root账号密码","children":[]}]},{"level":2,"title":"6 gitlab的迁移","slug":"_6-gitlab的迁移","link":"#_6-gitlab的迁移","children":[{"level":3,"title":"6.1 gitlab版本的升级","slug":"_6-1-gitlab版本的升级","link":"#_6-1-gitlab版本的升级","children":[]},{"level":3,"title":"6.2 开始迁移","slug":"_6-2-开始迁移","link":"#_6-2-开始迁移","children":[]}]},{"level":2,"title":"7 卸载gitlab","slug":"_7-卸载gitlab","link":"#_7-卸载gitlab","children":[]}],"git":{"updatedTime":1720499771000,"contributors":[{"name":"文铁铁~","email":"1179131421@qq.com","commits":1}]},"filePathRelative":"static/tang/server/CentOS7安装GitLab.md"}');export{g as comp,h as data};
