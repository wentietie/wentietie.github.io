import{_ as e,p as n,q as a,a1 as s}from"./framework-5866ffd3.js";const i={},d=s(`<h1 id="centos7安装jenkins" tabindex="-1"><a class="header-anchor" href="#centos7安装jenkins" aria-hidden="true">#</a> CentOs7安装jenkins</h1><h1 id="_1-检查jdk是否安装" tabindex="-1"><a class="header-anchor" href="#_1-检查jdk是否安装" aria-hidden="true">#</a> 1.检查jdk是否安装</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="" alt=""></p><p>未安装的话，需要安装jdk。</p><h1 id="_2-下载安装包" tabindex="-1"><a class="header-anchor" href="#_2-下载安装包" aria-hidden="true">#</a> 2.下载安装包</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载安装包</span>
<span class="token function">wget</span> <span class="token parameter variable">-O</span> /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo

<span class="token comment"># 更新密钥签名</span>
<span class="token function">rpm</span> <span class="token parameter variable">--import</span> https://pkg.jenkins.io/redhat-stable/jenkins.io.key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-安装" tabindex="-1"><a class="header-anchor" href="#_3-安装" aria-hidden="true">#</a> 3.安装</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_4-修改jenkins配置文件" tabindex="-1"><a class="header-anchor" href="#_4-修改jenkins配置文件" aria-hidden="true">#</a> 4.修改jenkins配置文件</h1><p>jenkins相关配置都在文件<code>/etc/sysconfig/jenkins</code>中</p><h2 id="_4-1修改jenkins端口" tabindex="-1"><a class="header-anchor" href="#_4-1修改jenkins端口" aria-hidden="true">#</a> 4.1修改jenkins端口</h2><p>进入<code>/etc/sysconfig/jenkins</code>文件中，将<code>JENKINS_PORT</code>改为自己想要的即可。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/sysconfig/jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-2修改jenkins默认的操作用户" tabindex="-1"><a class="header-anchor" href="#_4-2修改jenkins默认的操作用户" aria-hidden="true">#</a> 4.2修改jenkins默认的操作用户</h2><p>linux下jenkins默认使用<code>jenkins</code>用户进行脚本和文件的操作，如果不修改，在部署项目时需要调整涉及到的文件和目录的操作权限，可以调整jenkins配置文件，将用户修改为root用户。即将<code>JENKINS_USER=&quot;jenkins&quot;</code>调整为<code>JENKINS_USER=“root”</code>：</p><h1 id="_5-检查jenkins是否匹配jdk" tabindex="-1"><a class="header-anchor" href="#_5-检查jenkins是否匹配jdk" aria-hidden="true">#</a> 5.检查jenkins是否匹配jdk</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/rc.d/init.d/jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_6-运行" tabindex="-1"><a class="header-anchor" href="#_6-运行" aria-hidden="true">#</a> 6.运行</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重新加载jenkins配置</span>
systemctl daemon-reload

<span class="token comment"># 启动</span>
systemctl start jenkins

<span class="token comment"># 停止</span>
systemctl stop jenkins

<span class="token comment"># 重启</span>
systemctl restart jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7-打开" tabindex="-1"><a class="header-anchor" href="#_7-打开" aria-hidden="true">#</a> 7.打开</h1><p>在浏览器中输入<code>ip+端口号</code>，即可打开jenkins界面。首次登录需要按照页面提示获取登录密码。</p><h1 id="_8-jenkin设置" tabindex="-1"><a class="header-anchor" href="#_8-jenkin设置" aria-hidden="true">#</a> 8.jenkin设置</h1><h2 id="_8-1选择安装插件" tabindex="-1"><a class="header-anchor" href="#_8-1选择安装插件" aria-hidden="true">#</a> 8.1选择安装插件</h2><p>第一个为默认安装，第二个为手动安装。选择第一个即可。</p><h2 id="_8-1设置管理员账号" tabindex="-1"><a class="header-anchor" href="#_8-1设置管理员账号" aria-hidden="true">#</a> 8.1设置管理员账号</h2>`,26),r=[d];function c(t,l){return n(),a("div",null,r)}const o=e(i,[["render",c],["__file","part4.html.vue"]]);export{o as default};
