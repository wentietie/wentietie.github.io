import{_ as s,o as a,c as e,b as n}from"./app-DRxAhH5h.js";const t="/assets/sever-nopass-login-1-BT0PW4CO.png",r="/assets/sever-nopass-login-2-CaJ2QjLE.png",o="/assets/sever-nopass-login-3-ThYE4v6L.png",i={},c=n(`<h1 id="centos7root账号免密登录" tabindex="-1"><a class="header-anchor" href="#centos7root账号免密登录"><span>CentOS7root账号免密登录</span></a></h1><p><strong>本笔记实现的是在服务器A上使用ssh免密登录到服务器B。</strong></p><h1 id="_1-在服务器a上生成密钥文件" tabindex="-1"><a class="header-anchor" href="#_1-在服务器a上生成密钥文件"><span>1.在服务器A上生成密钥文件</span></a></h1><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">ssh-keygen <span class="token parameter variable">-t</span> rsa</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>执行过程中一路回车即可。</p><p><img src="`+t+`" alt=""></p><p>执行完成后，会在<code>/root</code>下生成<code>.ssh</code>文件夹，该文件夹下会生成<code>id_rsa</code>和<code>id_rsa.pub</code>文件。</p><h1 id="_2-在服务器a上将密钥发送到服务器b上" tabindex="-1"><a class="header-anchor" href="#_2-在服务器a上将密钥发送到服务器b上"><span>2.在服务器A上将密钥发送到服务器B上</span></a></h1><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token builtin class-name">cd</span> ~/.ssh</span>
<span class="line">ssh-copy-id <span class="token parameter variable">-i</span> id_rsa.pub root@10.1.93.191</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+'" alt=""></p><h1 id="_3-修改服务器b上的文件权限" tabindex="-1"><a class="header-anchor" href="#_3-修改服务器b上的文件权限"><span>3.修改服务器B上的文件权限</span></a></h1><p><strong>修改服务器B上的<code>/root/.ssh</code>文件夹和<code>/root/.ssh/authorized_keys</code>文件权限分别为<code>700</code>、<code>600</code></strong></p><h1 id="_4-在服务器a上实现免密登录服务器b" tabindex="-1"><a class="header-anchor" href="#_4-在服务器a上实现免密登录服务器b"><span>4.在服务器A上实现免密登录服务器B</span></a></h1><p><img src="'+o+'" alt=""></p>',14),d=[c];function l(p,h){return a(),e("div",null,d)}const m=s(i,[["render",l],["__file","CentOS7root账号免密登录.html.vue"]]),b=JSON.parse('{"path":"/static/tang/server/CentOS7root%E8%B4%A6%E5%8F%B7%E5%85%8D%E5%AF%86%E7%99%BB%E5%BD%95.html","title":"CentOS7root账号免密登录","lang":"zh-CN","frontmatter":{},"headers":[],"git":{},"filePathRelative":"static/tang/server/CentOS7root账号免密登录.md"}');export{m as comp,b as data};
