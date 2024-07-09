import{_ as s,o as a,c as n,b as e}from"./app-DRxAhH5h.js";const i="/assets/es_install-SrONg5pa.png",l="/assets/es_sudo_power-Cr3gA_5z.png",c="/assets/es_file_limits-B8fN3wiU.png",t="/assets/es_visit-DneTzf60.png",p={},r=e('<h1 id="_9-linux安装es相关工具" tabindex="-1"><a class="header-anchor" href="#_9-linux安装es相关工具"><span>9 Linux安装ES相关工具</span></a></h1><h2 id="_9-1-安装elasticsearch" tabindex="-1"><a class="header-anchor" href="#_9-1-安装elasticsearch"><span>9.1 安装Elasticsearch</span></a></h2><p>在Linux服务器上创建/opt/es文件夹，下载Elasticsearch7.8安装包，上传到该文件夹，进行解压即可。</p><p><img src="'+i+`" alt=""></p><h2 id="_9-2-配置elasticsearch环境参数" tabindex="-1"><a class="header-anchor" href="#_9-2-配置elasticsearch环境参数"><span>9.2 配置Elasticsearch环境参数</span></a></h2><h3 id="_9-2-1-创建用户" tabindex="-1"><a class="header-anchor" href="#_9-2-1-创建用户"><span>9.2.1 创建用户</span></a></h3><p><strong>Elasticsearch不能直接通过root用户启动</strong>，所以需要先创建一个普通用户。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 创建用户</span></span>
<span class="line"><span class="token function">useradd</span> es</span>
<span class="line"><span class="token comment"># 设置密码（输入如下命令后，按照提示输入密码）</span></span>
<span class="line"><span class="token function">passwd</span> es</span>
<span class="line"><span class="token comment"># 授权（授权后，/opt/es 文件夹的Owner由root用户变为es用户）</span></span>
<span class="line"><span class="token function">chown</span> <span class="token parameter variable">-R</span> es /opt/es</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-2-给用户设置sudo权限" tabindex="-1"><a class="header-anchor" href="#_9-2-2-给用户设置sudo权限"><span>9.2.2 给用户设置sudo权限</span></a></h3><p>相当于临时给某个用户类似于管理员的权限</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 使用root用户执行visudo（相当于vim /etc/sudoers）</span></span>
<span class="line">visudo</span>
<span class="line"><span class="token comment"># 在root    ALL=(ALL)       ALL下面新增如下命令</span></span>
<span class="line">es      <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span>       ALL</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+`" alt=""></p><h3 id="_9-2-3-修改普通用户打开文件最大数限制、启动线程数限制" tabindex="-1"><a class="header-anchor" href="#_9-2-3-修改普通用户打开文件最大数限制、启动线程数限制"><span>9.2.3 修改普通用户打开文件最大数限制、启动线程数限制</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">vim</span> /etc/security/limits.conf</span>
<span class="line"><span class="token comment"># 在文件中添加入下内容（*表示所有用户）</span></span>
<span class="line">* soft nofile <span class="token number">65535</span></span>
<span class="line">* hard nofile <span class="token number">65535</span></span>
<span class="line">* soft nproc <span class="token number">4096</span></span>
<span class="line">* hard nproc <span class="token number">4096</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+c+`" alt=""></p><h3 id="_9-2-4-为普通用户增大虚拟内存" tabindex="-1"><a class="header-anchor" href="#_9-2-4-为普通用户增大虚拟内存"><span>9.2.4 为普通用户增大虚拟内存</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">vim</span> /etc/sysctl.conf</span>
<span class="line"><span class="token comment"># 在文件中添加以下内容</span></span>
<span class="line">vm.max_map_count <span class="token operator">=</span> <span class="token number">262144</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-5-使以上配置生效" tabindex="-1"><a class="header-anchor" href="#_9-2-5-使以上配置生效"><span>9.2.5 使以上配置生效</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">sysctl</span> <span class="token parameter variable">-p</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>以上步骤完成后，需要重新打开终端，重新登入，才可看到配置生效。</strong></p><h3 id="_9-2-6-修改elasticsearch-yml文件" tabindex="-1"><a class="header-anchor" href="#_9-2-6-修改elasticsearch-yml文件"><span>9.2.6 修改elasticsearch.yml文件</span></a></h3><p><strong>需要使用es用户执行以下操作</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 切换es用户（由root用户切换到普通用户，不需要密码）</span></span>
<span class="line"><span class="token function">su</span> - es</span>
<span class="line"><span class="token comment"># 编辑elasticsearch.yml文件</span></span>
<span class="line"><span class="token function">vim</span>  /opt/es/elasticsearch-7.8.0/config/elasticsearch.yml</span>
<span class="line"><span class="token comment"># 按照如下内容进行修改</span></span>
<span class="line"><span class="token comment"># 集群名称</span></span>
<span class="line">cluster.name: my-application</span>
<span class="line"><span class="token comment"># 节点名</span></span>
<span class="line">node.name: node-1</span>
<span class="line"><span class="token comment"># 配置文件</span></span>
<span class="line">path.data: ./data</span>
<span class="line"><span class="token comment"># 日志文件</span></span>
<span class="line">path.logs: ./logs</span>
<span class="line"><span class="token comment"># 0.0.0.0表示允许任意ip访问，如此，便可以远程访问</span></span>
<span class="line">network.host: <span class="token number">0.0</span>.0.0</span>
<span class="line">http.port: <span class="token number">9200</span></span>
<span class="line"><span class="token comment"># 集群初始化时的master节点</span></span>
<span class="line">cluster.initial_master_nodes: <span class="token punctuation">[</span><span class="token string">&quot;node-1&quot;</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-7-修改jvm配置" tabindex="-1"><a class="header-anchor" href="#_9-2-7-修改jvm配置"><span>9.2.7 修改jvm配置</span></a></h3><p><strong>需要使用es用户执行以下操作</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">vim</span> /opt/es/elasticsearch-7.8.0/config/jvm.options</span>
<span class="line"><span class="token comment"># 按照如下内容进行修改</span></span>
<span class="line"><span class="token parameter variable">-Xms512m</span></span>
<span class="line"><span class="token parameter variable">-Xmx512m</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-3-启动elasticsearch" tabindex="-1"><a class="header-anchor" href="#_9-3-启动elasticsearch"><span>9.3 启动Elasticsearch</span></a></h2><p><strong>需要使用es用户执行以下操作</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 执行/opt/es/elasticsearch-7.8.0/bin/elasticsearch</span></span>
<span class="line">/opt/es/elasticsearch-7.8.0/bin/elasticsearch</span>
<span class="line"><span class="token comment"># 若想后台启动，可加-d参数</span></span>
<span class="line">/opt/es/elasticsearch-7.8.0/bin/elasticsearch <span class="token parameter variable">-d</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-4-访问elasticsearch" tabindex="-1"><a class="header-anchor" href="#_9-4-访问elasticsearch"><span>9.4 访问Elasticsearch</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">curl</span> http://localhost:9200</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="`+t+`" alt=""></p><h2 id="_9-5-安装kibana" tabindex="-1"><a class="header-anchor" href="#_9-5-安装kibana"><span>9.5 安装Kibana</span></a></h2><p>下载Kibana7.8安装包，上传到/opt/es文件夹，进行解压即可。</p><h2 id="_9-6-配置kibana环境参数" tabindex="-1"><a class="header-anchor" href="#_9-6-配置kibana环境参数"><span>9.6 配置Kibana环境参数</span></a></h2><h3 id="_9-6-1-授权" tabindex="-1"><a class="header-anchor" href="#_9-6-1-授权"><span>9.6.1 授权</span></a></h3><p>将kibana-7.8.0的操作权限赋给es用户</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">chown</span> <span class="token parameter variable">-R</span> es /opt/es/kibana-7.8.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_9-6-2-修改kibana配置" tabindex="-1"><a class="header-anchor" href="#_9-6-2-修改kibana配置"><span>9.6.2 修改kibana配置</span></a></h3><p>修改/opt/es/kibana-7.8.0/config/kibana.yml，内容如下：</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token comment"># 服务端口</span></span>
<span class="line"><span class="token key atrule">server.port</span><span class="token punctuation">:</span> <span class="token number">5601</span></span>
<span class="line"><span class="token comment"># 访问IP设置，0.0.0.0表示可以远程访问</span></span>
<span class="line"><span class="token key atrule">server.host</span><span class="token punctuation">:</span> <span class="token string">&quot;0.0.0.0&quot;</span></span>
<span class="line"><span class="token comment"># 配置es访问地址（使用ip不要用localhost。以后使用集群的时候，必须得用ip）</span></span>
<span class="line"><span class="token key atrule">elasticsearch.hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;http://192.168.1.11:9200&quot;</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-7-后台运行kibana" tabindex="-1"><a class="header-anchor" href="#_9-7-后台运行kibana"><span>9.7 后台运行kibana</span></a></h2><p><strong>需要使用es用户执行以下操作</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">nohup</span> /opt/es/kibana-7.8.0/bin/kibana <span class="token operator">&amp;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_9-8-访问kibana" tabindex="-1"><a class="header-anchor" href="#_9-8-访问kibana"><span>9.8 访问kibana</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">curl</span> http://localhost:5601</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_9-9-安装ik分词器" tabindex="-1"><a class="header-anchor" href="#_9-9-安装ik分词器"><span>9.9 安装ik分词器</span></a></h2><p>在/opt/es/elasticsearch-7.8.0/plugins/文件夹创建ik文件夹。 下载ik安装包，上传到/opt/es/elasticsearch-7.8.0/plugins/ik文件夹，进行解压。<strong>解压后，将安装包删除</strong></p><h2 id="_9-8-ik分词器文件夹授权" tabindex="-1"><a class="header-anchor" href="#_9-8-ik分词器文件夹授权"><span>9.8 ik分词器文件夹授权</span></a></h2><p>将ik分词器的操作权限赋给es用户</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">chown</span> <span class="token parameter variable">-R</span> es /opt/es/elasticsearch-7.8.0/plugins/ik</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_9-9-重启es和kibana" tabindex="-1"><a class="header-anchor" href="#_9-9-重启es和kibana"><span>9.9 重启es和kibana</span></a></h2><p>重启后，ik分词器生效。</p>`,53),d=[r];function o(h,u){return a(),n("div",null,d)}const v=s(p,[["render",o],["__file","09_Linux 安装 Elasticsearch.html.vue"]]),b=JSON.parse('{"path":"/static/tang/Elasticsearch/09_Linux%20%E5%AE%89%E8%A3%85%20Elasticsearch.html","title":"9 Linux安装ES相关工具","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"9.1 安装Elasticsearch","slug":"_9-1-安装elasticsearch","link":"#_9-1-安装elasticsearch","children":[]},{"level":2,"title":"9.2 配置Elasticsearch环境参数","slug":"_9-2-配置elasticsearch环境参数","link":"#_9-2-配置elasticsearch环境参数","children":[{"level":3,"title":"9.2.1 创建用户","slug":"_9-2-1-创建用户","link":"#_9-2-1-创建用户","children":[]},{"level":3,"title":"9.2.2 给用户设置sudo权限","slug":"_9-2-2-给用户设置sudo权限","link":"#_9-2-2-给用户设置sudo权限","children":[]},{"level":3,"title":"9.2.3 修改普通用户打开文件最大数限制、启动线程数限制","slug":"_9-2-3-修改普通用户打开文件最大数限制、启动线程数限制","link":"#_9-2-3-修改普通用户打开文件最大数限制、启动线程数限制","children":[]},{"level":3,"title":"9.2.4 为普通用户增大虚拟内存","slug":"_9-2-4-为普通用户增大虚拟内存","link":"#_9-2-4-为普通用户增大虚拟内存","children":[]},{"level":3,"title":"9.2.5 使以上配置生效","slug":"_9-2-5-使以上配置生效","link":"#_9-2-5-使以上配置生效","children":[]},{"level":3,"title":"9.2.6 修改elasticsearch.yml文件","slug":"_9-2-6-修改elasticsearch-yml文件","link":"#_9-2-6-修改elasticsearch-yml文件","children":[]},{"level":3,"title":"9.2.7 修改jvm配置","slug":"_9-2-7-修改jvm配置","link":"#_9-2-7-修改jvm配置","children":[]}]},{"level":2,"title":"9.3 启动Elasticsearch","slug":"_9-3-启动elasticsearch","link":"#_9-3-启动elasticsearch","children":[]},{"level":2,"title":"9.4 访问Elasticsearch","slug":"_9-4-访问elasticsearch","link":"#_9-4-访问elasticsearch","children":[]},{"level":2,"title":"9.5 安装Kibana","slug":"_9-5-安装kibana","link":"#_9-5-安装kibana","children":[]},{"level":2,"title":"9.6 配置Kibana环境参数","slug":"_9-6-配置kibana环境参数","link":"#_9-6-配置kibana环境参数","children":[{"level":3,"title":"9.6.1 授权","slug":"_9-6-1-授权","link":"#_9-6-1-授权","children":[]},{"level":3,"title":"9.6.2 修改kibana配置","slug":"_9-6-2-修改kibana配置","link":"#_9-6-2-修改kibana配置","children":[]}]},{"level":2,"title":"9.7 后台运行kibana","slug":"_9-7-后台运行kibana","link":"#_9-7-后台运行kibana","children":[]},{"level":2,"title":"9.8 访问kibana","slug":"_9-8-访问kibana","link":"#_9-8-访问kibana","children":[]},{"level":2,"title":"9.9 安装ik分词器","slug":"_9-9-安装ik分词器","link":"#_9-9-安装ik分词器","children":[]},{"level":2,"title":"9.8 ik分词器文件夹授权","slug":"_9-8-ik分词器文件夹授权","link":"#_9-8-ik分词器文件夹授权","children":[]},{"level":2,"title":"9.9 重启es和kibana","slug":"_9-9-重启es和kibana","link":"#_9-9-重启es和kibana","children":[]}],"git":{},"filePathRelative":"static/tang/Elasticsearch/09_Linux 安装 Elasticsearch.md"}');export{v as comp,b as data};
