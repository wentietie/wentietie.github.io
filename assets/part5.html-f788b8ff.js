import{_ as a,p as s,q as e,a1 as n}from"./framework-5866ffd3.js";const i="/assets/sever-install-mysql-1-48eb023d.png",r="/assets/sever-install-mysql-2-c62fddc9.png",d="/assets/sever-install-mysql-3-ec3b0787.png",l={},t=n(`<h1 id="使用yum源安装mysql5-7-centos7安装mysql5-7" tabindex="-1"><a class="header-anchor" href="#使用yum源安装mysql5-7-centos7安装mysql5-7" aria-hidden="true">#</a> 使用yum源安装MySQL5.7 CentOS7安装mysql5.7</h1><h2 id="_1-配置yum源" tabindex="-1"><a class="header-anchor" href="#_1-配置yum源" aria-hidden="true">#</a> 1.配置yum源</h2><h3 id="_1-1下载yum源" tabindex="-1"><a class="header-anchor" href="#_1-1下载yum源" aria-hidden="true">#</a> 1.1下载yum源</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token string">&#39;https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-2安装yum源" tabindex="-1"><a class="header-anchor" href="#_1-2安装yum源" aria-hidden="true">#</a> 1.2安装yum源</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-Uvh</span> mysql57-community-release-el7-11.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-3查看mysql版本" tabindex="-1"><a class="header-anchor" href="#_1-3查看mysql版本" aria-hidden="true">#</a> 1.3查看mysql版本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum repolist all <span class="token operator">|</span> <span class="token function">grep</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+i+`" alt=""></p><h2 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装" aria-hidden="true">#</a> 2.安装</h2><p>如果安装5.7.x版本，直接安装即可；如果安装5.6.x版本，需要先修改mysql的repo文件。</p><h3 id="_2-1-安装5-7-x版本" tabindex="-1"><a class="header-anchor" href="#_2-1-安装5-7-x版本" aria-hidden="true">#</a> 2.1 安装5.7.x版本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> mysql-community-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2安装5-6-x版本" tabindex="-1"><a class="header-anchor" href="#_2-2安装5-6-x版本" aria-hidden="true">#</a> 2.2安装5.6.x版本</h3><p>修改文件 <code>/etc/yum.repos.d/mysql-community.repo</code> ，如下图所示</p><p><img src="`+r+`" alt=""></p><h2 id="_3-启动mysql" tabindex="-1"><a class="header-anchor" href="#_3-启动mysql" aria-hidden="true">#</a> 3.启动mysql</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-登录mysql" tabindex="-1"><a class="header-anchor" href="#_4-登录mysql" aria-hidden="true">#</a> 4.登录mysql</h2><h3 id="_4-1查看mysql初始密码" tabindex="-1"><a class="header-anchor" href="#_4-1查看mysql初始密码" aria-hidden="true">#</a> 4.1查看mysql初始密码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token string">&#39;temporary password&#39;</span> /var/log/mysqld.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+d+`" alt=""></p><h3 id="_4-2登录" tabindex="-1"><a class="header-anchor" href="#_4-2登录" aria-hidden="true">#</a> 4.2登录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p7N4eJhw</span><span class="token operator">=</span>aty+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-3-修改密码" tabindex="-1"><a class="header-anchor" href="#_4-3-修改密码" aria-hidden="true">#</a> 4.3 修改密码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>SET PASSWORD <span class="token operator">=</span> PASSWORD<span class="token punctuation">(</span><span class="token string">&#39;Tang123456!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 设置密码永不过期</span>
ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> PASSWORD EXPIRE NEVER<span class="token punctuation">;</span>
flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4设置mysql允许远程访问" tabindex="-1"><a class="header-anchor" href="#_4-4设置mysql允许远程访问" aria-hidden="true">#</a> 4.4设置mysql允许远程访问</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GRANT ALL PRIVILEGES ON *.* TO <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED BY <span class="token string">&#39;Tang123456!&#39;</span> WITH GRANT OPTION<span class="token punctuation">;</span>
flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,28),c=[t];function o(h,p){return s(),e("div",null,c)}const u=a(l,[["render",o],["__file","part5.html.vue"]]);export{u as default};
