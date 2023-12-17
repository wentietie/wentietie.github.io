import{_ as a,p as e,q as s,a1 as i}from"./framework-5866ffd3.js";const t="/assets/gitlab_error_1-8114bd26.png",n="/assets/gitlab_error_1_step_1-29d2d664.png",l="/assets/gitlab_error_1_step_2-99b70e8b.png",r={},d=i('<h1 id="gitlab-报错" tabindex="-1"><a class="header-anchor" href="#gitlab-报错" aria-hidden="true">#</a> gitlab 报错</h1><h1 id="_1-gitlab报503错误" tabindex="-1"><a class="header-anchor" href="#_1-gitlab报503错误" aria-hidden="true">#</a> 1.gitlab报503错误</h1><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <img src="'+t+`" alt="gitlab_error_1"></h1><p>解决步骤：</p><p>1.查看gitlab状态</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gitlab-ctl status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+n+`" alt=""></p><p>2.从1中看到是gitaly down了，删掉/var/opt/gitlab/gitaly/gitaly.pid文件，重启即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#删掉/var/opt/gitlab/gitaly/gitaly.pid文件</span>
<span class="token function">rm</span> /var/opt/gitlab/gitaly/gitaly.pid
<span class="token comment">#重启gitlab</span>
gitlab-ctl restart
<span class="token comment">#再次查看gitlab状态</span>
gitlab-ctl status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+'" alt=""></p>',10),c=[d];function o(b,g){return e(),s("div",null,c)}const _=a(r,[["render",o],["__file","gitlab-error.html.vue"]]);export{_ as default};