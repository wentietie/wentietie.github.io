import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const t="/assets/1616641821310-665b67a7.png",p="/assets/1616642793574-b087cd7c.png",l="/assets/1616642006422-a53d7af5.png",c="/assets/1616643085380-97b92b22.png",i="/assets/1616643201018-e738ad19.png",o={},u=e('<h1 id="nacos的使用" tabindex="-1"><a class="header-anchor" href="#nacos的使用" aria-hidden="true">#</a> Nacos的使用</h1><p>Nacos官方文档：https://nacos.io/zh-cn/docs/quick-start.html</p><h1 id="_1-windows环境启动nacos" tabindex="-1"><a class="header-anchor" href="#_1-windows环境启动nacos" aria-hidden="true">#</a> 1.windows环境启动Nacos</h1><ul><li>环境准备： 64 bit JDK 1.8+ 、 Maven 3.2.x+</li><li>Nacos有两种启动方式。一种是下载源码，进行编译后再启动；另一种是直接下载<code>nacos-server-$version.zip</code>解压后再启动。本文介绍使用下载zip文件的方式进行启动。</li><li>目前稳定版本是1.4.1，推荐使用该版本，下载地址：https://github.com/alibaba/nacos/releases/download/1.4.1/nacos-server-1.4.1.zip。我这里使用的是最新版2.0.0。</li></ul><h2 id="_1-1解压" tabindex="-1"><a class="header-anchor" href="#_1-1解压" aria-hidden="true">#</a> 1.1解压</h2><p><img src="'+t+'" alt="1616641821310"></p><h2 id="_1-2创建数据库" tabindex="-1"><a class="header-anchor" href="#_1-2创建数据库" aria-hidden="true">#</a> 1.2创建数据库</h2><p>在mysql中创建nacos数据库，导入<code>D:\\Nacos\\nacos\\conf\\nacos-mysql.sql</code>:</p><p><img src="'+p+'" alt="1616642793574"></p><h2 id="_1-3修改配置文件" tabindex="-1"><a class="header-anchor" href="#_1-3修改配置文件" aria-hidden="true">#</a> 1.3修改配置文件</h2><p>用记事本打开<code>D:\\Nacos\\nacos\\conf\\application.properties</code>文件进行修改。</p><p><img src="'+l+'" alt="1616642006422"></p><h2 id="_1-4启动" tabindex="-1"><a class="header-anchor" href="#_1-4启动" aria-hidden="true">#</a> 1.4启动</h2><p>cmd进入<code>D:\\Nacos\\nacos\\bin</code>路径，执行<code>startup.cmd -m standalone</code>命令。</p><p><img src="'+c+'" alt="1616643085380"></p><h2 id="_1-5访问" tabindex="-1"><a class="header-anchor" href="#_1-5访问" aria-hidden="true">#</a> 1.5访问</h2><p>浏览器输入http://localhost:8848/nacos/ 进行访问。登录账号/密码为：nacos/nacos</p><p><img src="'+i+`" alt="1616643201018"></p><h1 id="_2-云平台部署nacos" tabindex="-1"><a class="header-anchor" href="#_2-云平台部署nacos" aria-hidden="true">#</a> 2.云平台部署Nacos</h1><p>一个yaml文件搞定~</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> pano<span class="token punctuation">-</span>dev <span class="token comment"># 此处改成自己的namespace</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nacos
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8848</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos<span class="token punctuation">-</span>server
      <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8848</span>
      <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nacos
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos<span class="token punctuation">-</span>cm
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> pano<span class="token punctuation">-</span>dev <span class="token comment"># 此处改成自己的namespace</span>
<span class="token key atrule">data</span><span class="token punctuation">:</span> <span class="token comment"># 根据自己的数据库信息进行配置</span>
  <span class="token key atrule">mysql.db.name</span><span class="token punctuation">:</span> <span class="token string">&quot;ry-config&quot;</span>
  <span class="token key atrule">mysql.port</span><span class="token punctuation">:</span> <span class="token string">&quot;3306&quot;</span>
  <span class="token key atrule">mysql.user</span><span class="token punctuation">:</span> <span class="token string">&quot;root&quot;</span>
  <span class="token key atrule">mysql.password</span><span class="token punctuation">:</span> <span class="token string">&quot;bd@20!Cloud#123&quot;</span>
  <span class="token key atrule">mysql.host</span><span class="token punctuation">:</span> <span class="token string">&quot;10.1.93.168&quot;</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> StatefulSet
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> pano<span class="token punctuation">-</span>dev <span class="token comment"># 此处改成自己的namespace</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">serviceName</span><span class="token punctuation">:</span> nacos
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> nacos
      <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
        <span class="token key atrule">pod.alpha.kubernetes.io/initialized</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">affinity</span><span class="token punctuation">:</span>
        <span class="token key atrule">podAntiAffinity</span><span class="token punctuation">:</span>
          <span class="token key atrule">requiredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">labelSelector</span><span class="token punctuation">:</span>
                <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span>
                  <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token string">&quot;app&quot;</span>
                    <span class="token key atrule">operator</span><span class="token punctuation">:</span> In
                    <span class="token key atrule">values</span><span class="token punctuation">:</span>
                      <span class="token punctuation">-</span> nacos
              <span class="token key atrule">topologyKey</span><span class="token punctuation">:</span> <span class="token string">&quot;kubernetes.io/hostname&quot;</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> k8snacos
          <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
          <span class="token key atrule">image</span><span class="token punctuation">:</span> nacos/nacos<span class="token punctuation">-</span>server<span class="token punctuation">:</span>latest
          <span class="token key atrule">ports</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8848</span>
              <span class="token key atrule">name</span><span class="token punctuation">:</span> client
          <span class="token key atrule">env</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> NACOS_REPLICAS
              <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;1&quot;</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> MYSQL_SERVICE_DB_NAME
              <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
                <span class="token key atrule">configMapKeyRef</span><span class="token punctuation">:</span>
                  <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos<span class="token punctuation">-</span>cm
                  <span class="token key atrule">key</span><span class="token punctuation">:</span> mysql.db.name
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> MYSQL_SERVICE_PORT
              <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
                <span class="token key atrule">configMapKeyRef</span><span class="token punctuation">:</span>
                  <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos<span class="token punctuation">-</span>cm
                  <span class="token key atrule">key</span><span class="token punctuation">:</span> mysql.port
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> MYSQL_SERVICE_USER
              <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
                <span class="token key atrule">configMapKeyRef</span><span class="token punctuation">:</span>
                  <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos<span class="token punctuation">-</span>cm
                  <span class="token key atrule">key</span><span class="token punctuation">:</span> mysql.user
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> MYSQL_SERVICE_PASSWORD
              <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
                <span class="token key atrule">configMapKeyRef</span><span class="token punctuation">:</span>
                  <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos<span class="token punctuation">-</span>cm
                  <span class="token key atrule">key</span><span class="token punctuation">:</span> mysql.password
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> MYSQL_SERVICE_HOST
              <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
                <span class="token key atrule">configMapKeyRef</span><span class="token punctuation">:</span>
                  <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos<span class="token punctuation">-</span>cm
                  <span class="token key atrule">key</span><span class="token punctuation">:</span> mysql.host
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> NACOS_SERVER_PORT
              <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;8848&quot;</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> NACOS_APPLICATION_PORT
              <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;8848&quot;</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> PREFER_HOST_MODE
              <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;hostname&quot;</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> NACOS_SERVERS
              <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;nacos-0.nacos-headless.default.svc.cluster.local:8848&quot;</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> nacos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> nacos.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>访问的话，需要去查询service的端口号进行访问：http://IP:端口号/nacos。</p>`,23),k=[u];function r(d,v){return s(),a("div",null,k)}const b=n(o,[["render",r],["__file","1.html.vue"]]);export{b as default};
