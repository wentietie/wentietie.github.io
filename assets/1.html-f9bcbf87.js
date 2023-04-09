import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const t="/assets/1616552351873-9377980b.png",l="/assets/1616552817376-0ca07ba5.png",p="/assets/20200729191908564-9d9e6b8c.png",i="/assets/20200729191924720-6ea744c1.png",c="/assets/20200729191937113-45296117.png",o="/assets/2020072919195143-485d588d.png",u="/assets/2020072919200356-7e3743de.png",r="/assets/20200729192014827-f0ba1b07.png",d="/assets/2020072919202645-5d7f82a9.png",k="/assets/202007291920401-15162c27.png",v="/assets/20200729192053371-033b751f.png",m="/assets/2020072919210429-12aa2475.png",b="/assets/20200729192120498-0b62f33d.png",y="/assets/20200729192130944-bb5a1632.png",g="/assets/20200729192140965-647db4ac.png",h={},_=e(`<h1 id="k8s部署prometheus-grafana" tabindex="-1"><a class="header-anchor" href="#k8s部署prometheus-grafana" aria-hidden="true">#</a> k8s部署prometheus + grafana</h1><p>k8s以Deployment方式部署prometheus + grafana：</p><hr><ul><li>主机说明：</li></ul><table><thead><tr><th style="text-align:left;">系统</th><th style="text-align:left;">ip</th><th style="text-align:left;">角色</th><th style="text-align:left;">cpu</th><th style="text-align:left;">内存</th><th style="text-align:left;">hostname</th></tr></thead><tbody><tr><td style="text-align:left;">CentOS 7.8</td><td style="text-align:left;">192.168.30.128</td><td style="text-align:left;">master</td><td style="text-align:left;">&gt;=2</td><td style="text-align:left;">&gt;=2G</td><td style="text-align:left;">master1</td></tr><tr><td style="text-align:left;">CentOS 7.8</td><td style="text-align:left;">192.168.30.129</td><td style="text-align:left;">master</td><td style="text-align:left;">&gt;=2</td><td style="text-align:left;">&gt;=2G</td><td style="text-align:left;">master2</td></tr><tr><td style="text-align:left;">CentOS 7.8</td><td style="text-align:left;">192.168.30.130</td><td style="text-align:left;">node</td><td style="text-align:left;">&gt;=2</td><td style="text-align:left;">&gt;=2G</td><td style="text-align:left;">node1</td></tr><tr><td style="text-align:left;">CentOS 7.8</td><td style="text-align:left;">192.168.30.131</td><td style="text-align:left;">node</td><td style="text-align:left;">&gt;=2</td><td style="text-align:left;">&gt;=2G</td><td style="text-align:left;">node2</td></tr><tr><td style="text-align:left;">CentOS 7.8</td><td style="text-align:left;">192.168.30.132</td><td style="text-align:left;">node</td><td style="text-align:left;">&gt;=2</td><td style="text-align:left;">&gt;=2G</td><td style="text-align:left;">node3</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get node</span>
NAME     STATUS   ROLES    AGE    VERSION
master   Ready    master   141d   v1.19.2
node1    Ready    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>   141d   v1.19.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>采集方案：</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>1.通过prometheus<span class="token punctuation">-</span>node<span class="token punctuation">-</span>exporter采集主机的性能指标数据，并通过暴露的 /metrics 接口用prometheus抓取 

2.通过kube<span class="token punctuation">-</span>apiserver、kube<span class="token punctuation">-</span>controller<span class="token punctuation">-</span>manager、kube<span class="token punctuation">-</span>scheduler、etcd、kubelet、kube<span class="token punctuation">-</span>proxy自身暴露的 /metrics 获取节点上与k8s集群相关的一些指标数据 

3.通过cadvisor采集容器、Pod相关的性能指标数据，并通过暴露的 /metrics 接口用prometheus抓取 通过blackbox<span class="token punctuation">-</span>exporter采集应用的网络性能(http、tcp、icmp等)数据，并通过暴露的 /metrics 接口用prometheus抓取 

4.通过kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics采集k8s资源对象的状态指标数据，并通过暴露的 /metrics 接口用prometheus抓取 

5.应用自己采集容器中进程主动暴露的指标数据（暴露指标的功能由应用自己实现，并添加约定的annotation，prometheus负责根据annotation实现抓取）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>抓取介绍：</li></ul><p>Kubernetes可以约定好带哪些annotation前缀的服务是自主暴露监控指标的服务。应用添加约定的这些annotations，Prometheus可以根据annotation实现抓取。例如：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>prometheus.io/scrape<span class="token operator">:</span> &#39;<span class="token boolean">true</span>&#39;    # 获知对应的endpoint是需要被scrape的 
prometheus.io/app-metrics<span class="token operator">:</span> &#39;<span class="token boolean">true</span>&#39;   # 获知对应的endpoint中有应用进程暴露的metrics 
prometheus.io/app-metrics-port<span class="token operator">:</span> &#39;<span class="token number">8080</span>&#39;  # 获知进程暴露的metrics的端口 
prometheus.io/app-metrics-path<span class="token operator">:</span> &#39;/metrics&#39;  # 获知进程暴露的metrics的具体路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用可以在service中指定约定的annotation，实现Prometheus对该应用的网络服务进行探测：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>http探测<span class="token operator">:</span>
	prometheus.io/scrape<span class="token operator">:</span> &#39;<span class="token boolean">true</span>&#39;    
	prometheus.io/http-probe<span class="token operator">:</span> &#39;<span class="token boolean">true</span>&#39;    
	prometheus.io/http-probe-port<span class="token operator">:</span> &#39;<span class="token number">8080</span>&#39;    
	prometheus.io/http-probe-path<span class="token operator">:</span> &#39;/healthz&#39; 
tcp探测<span class="token operator">:</span>
	prometheus.io/scrape<span class="token operator">:</span> &#39;<span class="token boolean">true</span>&#39;    
	prometheus.io/tcp-probe<span class="token operator">:</span> &#39;<span class="token boolean">true</span>&#39;    
	prometheus.io/tcp-probe-port<span class="token operator">:</span> &#39;<span class="token number">80</span>&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Prometheus根据这些annotations可以获知相应service是需要被探测的，探测的网络协议可以是http、tcp或其他，以及具体的探测端口。http探测需要知道探测的具体url。</p><hr><h3 id="namespace" tabindex="-1"><a class="header-anchor" href="#namespace" aria-hidden="true">#</a> namespace</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/k8s/monitoring/<span class="token punctuation">{</span>node-exporter,k8s,kube-state-metrics,blackbox-exporter,dingtalk,alertmanager,prometheus,grafana<span class="token punctuation">}</span> 

<span class="token builtin class-name">cd</span> /home/k8s/monitoring 

<span class="token function">vim</span> namespace.yaml

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Namespace
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>  
  <span class="token key atrule">name</span><span class="token punctuation">:</span> monitoring
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="node-exporter" tabindex="-1"><a class="header-anchor" href="#node-exporter" aria-hidden="true">#</a> node-exporter</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> node-exporter/node-exporter.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">prometheus.io/scrape</span><span class="token punctuation">:</span> <span class="token string">&#39;true&#39;</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9100</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">9100</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
 
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> DaemonSet
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
        <span class="token key atrule">image</span><span class="token punctuation">:</span> prom/node<span class="token punctuation">-</span>exporter<span class="token punctuation">:</span>latest
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">9100</span>
          <span class="token key atrule">hostPort</span><span class="token punctuation">:</span> <span class="token number">9100</span>
      <span class="token key atrule">hostNetwork</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">hostPID</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">tolerations</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>role.kubernetes.io/master
        <span class="token key atrule">operator</span><span class="token punctuation">:</span> Exists
        <span class="token key atrule">effect</span><span class="token punctuation">:</span> NoSchedule
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="k8s组件" tabindex="-1"><a class="header-anchor" href="#k8s组件" aria-hidden="true">#</a> k8s组件</h3><p>==controller-manager：==</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> k8s/kube-controller-manager-prometheus-discovery.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>controller<span class="token punctuation">-</span>manager<span class="token punctuation">-</span>prometheus<span class="token punctuation">-</span>discovery
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">component</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>controller<span class="token punctuation">-</span>manager
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">prometheus.io/scrape</span><span class="token punctuation">:</span> <span class="token string">&#39;true&#39;</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">component</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>controller<span class="token punctuation">-</span>manager
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> http<span class="token punctuation">-</span>metrics
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">10252</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">10252</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>==kube-scheduler：==</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> k8s/kube-scheduler-prometheus-discovery.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>scheduler<span class="token punctuation">-</span>prometheus<span class="token punctuation">-</span>discovery
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">component</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>scheduler
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">prometheus.io/scrape</span><span class="token punctuation">:</span> <span class="token string">&#39;true&#39;</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">component</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>scheduler
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> http<span class="token punctuation">-</span>metrics
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">10251</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">10251</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>==kube-proxy：==</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> k8s/kube-proxy-prometheus-discovery.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>proxy<span class="token punctuation">-</span>prometheus<span class="token punctuation">-</span>discovery
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>proxy
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">prometheus.io/scrape</span><span class="token punctuation">:</span> <span class="token string">&#39;true&#39;</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>proxy
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> http<span class="token punctuation">-</span>metrics
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">10249</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">10249</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="kube-state-metrics" tabindex="-1"><a class="header-anchor" href="#kube-state-metrics" aria-hidden="true">#</a> kube-state-metrics</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> kube-state-metrics/rbac.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
 
<span class="token punctuation">---</span> 
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
<span class="token key atrule">rules</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;&quot;</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> configmaps
  <span class="token punctuation">-</span> secrets
  <span class="token punctuation">-</span> nodes
  <span class="token punctuation">-</span> pods
  <span class="token punctuation">-</span> services
  <span class="token punctuation">-</span> resourcequotas
  <span class="token punctuation">-</span> replicationcontrollers
  <span class="token punctuation">-</span> limitranges
  <span class="token punctuation">-</span> persistentvolumeclaims
  <span class="token punctuation">-</span> persistentvolumes
  <span class="token punctuation">-</span> namespaces
  <span class="token punctuation">-</span> endpoints
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> extensions
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> daemonsets
  <span class="token punctuation">-</span> deployments
  <span class="token punctuation">-</span> replicasets
  <span class="token punctuation">-</span> ingresses
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> apps
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> statefulsets
  <span class="token punctuation">-</span> daemonsets
  <span class="token punctuation">-</span> deployments
  <span class="token punctuation">-</span> replicasets
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> batch
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> cronjobs
  <span class="token punctuation">-</span> jobs
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> autoscaling
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> horizontalpodautoscalers
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> authentication.k8s.io
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> tokenreviews
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> create
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> authorization.k8s.io
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> subjectaccessreviews
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> create
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> policy
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> poddisruptionbudgets
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> certificates.k8s.io
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> certificatesigningrequests
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> storage.k8s.io
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> storageclasses
  <span class="token punctuation">-</span> volumeattachments
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> admissionregistration.k8s.io
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> mutatingwebhookconfigurations
  <span class="token punctuation">-</span> validatingwebhookconfigurations
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> networking.k8s.io
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> networkpolicies
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> coordination.k8s.io
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> leases
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
  
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRoleBinding
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> kube-state-metrics/kube-state-metrics.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">prometheus.io/scrape</span><span class="token punctuation">:</span> <span class="token string">&#39;true&#39;</span>
    <span class="token key atrule">prometheus.io/http-probe</span><span class="token punctuation">:</span> <span class="token string">&#39;true&#39;</span>
    <span class="token key atrule">prometheus.io/http-probe-path</span><span class="token punctuation">:</span> <span class="token string">&#39;/healthz&#39;</span>
    <span class="token key atrule">prometheus.io/http-probe-port</span><span class="token punctuation">:</span> <span class="token string">&#39;8080&#39;</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
   
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">serviceAccountName</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
        <span class="token key atrule">image</span><span class="token punctuation">:</span> quay.mirrors.ustc.edu.cn/coreos/kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics<span class="token punctuation">:</span>v1.8.0                <span class="token comment"># kube-state-metrics:v1.9.7 适用于Kubernetes 1.16以上版本</span>
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
      <span class="token key atrule">nodeSelector</span><span class="token punctuation">:</span>
        <span class="token key atrule">node-role.kubernetes.io/master</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token key atrule">kubernetes.io/hostname</span><span class="token punctuation">:</span> <span class="token string">&quot;master&quot;</span>
      <span class="token key atrule">tolerations</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>role.kubernetes.io/master
        <span class="token key atrule">operator</span><span class="token punctuation">:</span> Exists
        <span class="token key atrule">effect</span><span class="token punctuation">:</span> NoSchedule
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="blackbox-exporter" tabindex="-1"><a class="header-anchor" href="#blackbox-exporter" aria-hidden="true">#</a> blackbox-exporter</h3><p>blackbox-exporter是一个黑盒探测工具，可以对服务的http、tcp、icmp等进行网络探测。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> blackbox-exporter/config.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> blackbox<span class="token punctuation">-</span>exporter
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> blackbox<span class="token punctuation">-</span>exporter
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">blackbox.yml</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span>
    <span class="token key atrule">modules</span><span class="token punctuation">:</span>
      <span class="token key atrule">http_2xx</span><span class="token punctuation">:</span>
        <span class="token key atrule">prober</span><span class="token punctuation">:</span> http
        <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 10s
        <span class="token key atrule">http</span><span class="token punctuation">:</span>
          <span class="token key atrule">valid_http_versions</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;HTTP/1.1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;HTTP/2&quot;</span><span class="token punctuation">]</span>
          <span class="token key atrule">valid_status_codes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
          <span class="token key atrule">method</span><span class="token punctuation">:</span> GET
          <span class="token key atrule">preferred_ip_protocol</span><span class="token punctuation">:</span> <span class="token string">&quot;ip4&quot;</span>
      <span class="token key atrule">http_post_2xx</span><span class="token punctuation">:</span>
        <span class="token key atrule">prober</span><span class="token punctuation">:</span> http
        <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 10s
        <span class="token key atrule">http</span><span class="token punctuation">:</span>
          <span class="token key atrule">valid_http_versions</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;HTTP/1.1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;HTTP/2&quot;</span><span class="token punctuation">]</span>
          <span class="token key atrule">method</span><span class="token punctuation">:</span> POST
          <span class="token key atrule">preferred_ip_protocol</span><span class="token punctuation">:</span> <span class="token string">&quot;ip4&quot;</span>
      <span class="token key atrule">tcp_connect</span><span class="token punctuation">:</span>
        <span class="token key atrule">prober</span><span class="token punctuation">:</span> tcp
        <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 10s
      <span class="token key atrule">icmp</span><span class="token punctuation">:</span>
        <span class="token key atrule">prober</span><span class="token punctuation">:</span> icmp
        <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 10s
        <span class="token key atrule">icmp</span><span class="token punctuation">:</span>
          <span class="token key atrule">preferred_ip_protocol</span><span class="token punctuation">:</span> <span class="token string">&quot;ip4&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> blackbox-exporter/blackbox-exporter.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> blackbox<span class="token punctuation">-</span>exporter
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> blackbox<span class="token punctuation">-</span>exporter
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">prometheus.io/scrape</span><span class="token punctuation">:</span> <span class="token string">&#39;true&#39;</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> blackbox<span class="token punctuation">-</span>exporter
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> blackbox
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9115</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">9115</span>
    <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">30115</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
  
<span class="token punctuation">---</span>  
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> blackbox<span class="token punctuation">-</span>exporter
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> blackbox<span class="token punctuation">-</span>exporter
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> blackbox<span class="token punctuation">-</span>exporter
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> blackbox<span class="token punctuation">-</span>exporter
        <span class="token key atrule">image</span><span class="token punctuation">:</span> prom/blackbox<span class="token punctuation">-</span>exporter<span class="token punctuation">:</span>latest
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">9115</span>
        <span class="token key atrule">readinessProbe</span><span class="token punctuation">:</span>
          <span class="token key atrule">tcpSocket</span><span class="token punctuation">:</span>
            <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9115</span>
          <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">10</span>
          <span class="token key atrule">timeoutSeconds</span><span class="token punctuation">:</span> <span class="token number">5</span>
        <span class="token key atrule">resources</span><span class="token punctuation">:</span>
          <span class="token key atrule">requests</span><span class="token punctuation">:</span>
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 50Mi
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 100m
          <span class="token key atrule">limits</span><span class="token punctuation">:</span>
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 60Mi
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 200m
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/blackbox_exporter
        <span class="token key atrule">args</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&#39;--config.file=/etc/blackbox_exporter/blackbox.yml&#39;</span>
        <span class="token punctuation">-</span> <span class="token string">&#39;--web.listen-address=:9115&#39;</span>
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config
        <span class="token key atrule">configMap</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> blackbox<span class="token punctuation">-</span>exporter
      <span class="token key atrule">nodeSelector</span><span class="token punctuation">:</span>
        <span class="token key atrule">node-role.kubernetes.io/master</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token key atrule">tolerations</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>role.kubernetes.io/master
        <span class="token key atrule">operator</span><span class="token punctuation">:</span> Exists
        <span class="token key atrule">effect</span><span class="token punctuation">:</span> NoSchedule

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意： blackbox-exporter的配置文件为 <code>/etc/blackbox_exporter/blackbox.yml</code>， 运行时可以动态重载配置文件，当重新加载配置文件失败时，不影响运行中的配置。</p><p>重载方式：<code>curl -XPOST http://ip:9115/-/reload</code></p></blockquote><hr><h3 id="dingtalk" tabindex="-1"><a class="header-anchor" href="#dingtalk" aria-hidden="true">#</a> dingtalk</h3><p>未验证！！</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> dingtalk/config.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> dingtalk<span class="token punctuation">-</span>config
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">config.yml</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span>
    <span class="token key atrule">targets</span><span class="token punctuation">:</span>
      <span class="token key atrule">webhook</span><span class="token punctuation">:</span>
        <span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//oapi.dingtalk.com/robot/send<span class="token punctuation">?</span>access_token=xxxxxxxxxxxx             <span class="token comment">#修改为钉钉机器人的webhook</span>
        <span class="token key atrule">mention</span><span class="token punctuation">:</span>
          <span class="token key atrule">all</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>             <span class="token comment">#@所有</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> dingtalk/dingtalk.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> dingtalk
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> dingtalk
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">prometheus.io/scrape</span><span class="token punctuation">:</span> <span class="token string">&#39;false&#39;</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> dingtalk
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> dingtalk
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8060</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8060</span>
  
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> dingtalk
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> dingtalk
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> dingtalk
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> dingtalk
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> dingtalk
        <span class="token key atrule">image</span><span class="token punctuation">:</span> timonwong/prometheus<span class="token punctuation">-</span>webhook<span class="token punctuation">-</span>dingtalk<span class="token punctuation">:</span>latest
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8060</span>
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/prometheus<span class="token punctuation">-</span>webhook<span class="token punctuation">-</span>dingtalk
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config
        <span class="token key atrule">configMap</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> dingtalk<span class="token punctuation">-</span>config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="alertmanager" tabindex="-1"><a class="header-anchor" href="#alertmanager" aria-hidden="true">#</a> alertmanager</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> alertmanager/templates.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> alertmanager<span class="token punctuation">-</span>templates
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">default.tmpl</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    {{ define &quot;__alertmanager&quot; }}AlertManager{{ end }}
    {{ define &quot;__alertmanagerURL&quot; }}{{ .ExternalURL }}/#/alerts?receiver={{ .Receiver }}{{ end }}
    {{ define &quot;__subject&quot; }}[{{ .Status | toUpper }}{{ if eq .Status &quot;firing&quot; }}:{{ .Alerts.Firing | len }}{{ end }}] {{ .GroupLabels.SortedPairs.Values | join &quot; &quot; }} {{ if gt (len .CommonLabels) (len .GroupLabels) }}({{ with .CommonLabels.Remove .GroupLabels.Names }}{{ .Values | join &quot; &quot; }}{{ end }}){{ end }}{{ end }}
    {{ define &quot;__description&quot; }}{{ end }}
    {{ define &quot;__text_alert_list&quot; }}{{ range . }}Labels:
    {{ range .Labels.SortedPairs }} - {{ .Name }} = {{ .Value }}
    {{ end }}Annotations:
    {{ range .Annotations.SortedPairs }} - {{ .Name }} = {{ .Value }}
    {{ end }}Source: {{ .GeneratorURL }}
    {{ end }}{{ end }}
    {{ define &quot;slack.default.title&quot; }}{{ template &quot;__subject&quot; . }}{{ end }}
    {{ define &quot;slack.default.username&quot; }}{{ template &quot;__alertmanager&quot; . }}{{ end }}
    {{ define &quot;slack.default.fallback&quot; }}{{ template &quot;slack.default.title&quot; . }} | {{ template &quot;slack.default.titlelink&quot; . }}{{ end }}
    {{ define &quot;slack.default.pretext&quot; }}{{ end }}
    {{ define &quot;slack.default.titlelink&quot; }}{{ template &quot;__alertmanagerURL&quot; . }}{{ end }}
    {{ define &quot;slack.default.iconemoji&quot; }}{{ end }}
    {{ define &quot;slack.default.iconurl&quot; }}{{ end }}
    {{ define &quot;slack.default.text&quot; }}{{ end }}
    {{ define &quot;hipchat.default.from&quot; }}{{ template &quot;__alertmanager&quot; . }}{{ end }}
    {{ define &quot;hipchat.default.message&quot; }}{{ template &quot;__subject&quot; . }}{{ end }}
    {{ define &quot;pagerduty.default.description&quot; }}{{ template &quot;__subject&quot; . }}{{ end }}
    {{ define &quot;pagerduty.default.client&quot; }}{{ template &quot;__alertmanager&quot; . }}{{ end }}
    {{ define &quot;pagerduty.default.clientURL&quot; }}{{ template &quot;__alertmanagerURL&quot; . }}{{ end }}
    {{ define &quot;pagerduty.default.instances&quot; }}{{ template &quot;__text_alert_list&quot; . }}{{ end }}
    {{ define &quot;opsgenie.default.message&quot; }}{{ template &quot;__subject&quot; . }}{{ end }}
    {{ define &quot;opsgenie.default.description&quot; }}{{ .CommonAnnotations.SortedPairs.Values | join &quot; &quot; }}
    {{ if gt (len .Alerts.Firing) 0 -}}
    Alerts Firing:
    {{ template &quot;__text_alert_list&quot; .Alerts.Firing }}
    {{- end }}
    {{ if gt (len .Alerts.Resolved) 0 -}}
    Alerts Resolved:
    {{ template &quot;__text_alert_list&quot; .Alerts.Resolved }}
    {{- end }}
    {{- end }}
    {{ define &quot;opsgenie.default.source&quot; }}{{ template &quot;__alertmanagerURL&quot; . }}{{ end }}
    {{ define &quot;victorops.default.message&quot; }}{{ template &quot;__subject&quot; . }} | {{ template &quot;__alertmanagerURL&quot; . }}{{ end }}
    {{ define &quot;victorops.default.from&quot; }}{{ template &quot;__alertmanager&quot; . }}{{ end }}
    {{ define &quot;email.default.subject&quot; }}{{ template &quot;__subject&quot; . }}{{ end }}
    {{ define &quot;email.default.html&quot; }}
    &lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot; &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;&gt;
    &lt;!--
    Style and HTML derived from https://github.com/mailgun/transactional-email-templates
    The MIT License (MIT)
    Copyright (c) 2014 Mailgun
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the &quot;Software&quot;), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    --&gt;
    &lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot; xmlns=&quot;http://www.w3.org/1999/xhtml&quot; style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot;&gt;
    &lt;head style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width&quot; style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot; /&gt;
    &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=UTF-8&quot; style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot; /&gt;
    &lt;title style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot;&gt;{{ template &quot;__subject&quot; . }}&lt;/title&gt;
    &lt;/head&gt;
    &lt;body itemscope=&quot;&quot; itemtype=&quot;http://schema.org/EmailMessage&quot; style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; height: 100%; line-height: 1.6em; width: 100% !important; background-color: #f6f6f6; margin: 0; padding: 0;&quot; bgcolor=&quot;#f6f6f6&quot;&gt;
    &lt;table style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: #f6f6f6; margin: 0;&quot; bgcolor=&quot;#f6f6f6&quot;&gt;
      &lt;tr style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot;&gt;
        &lt;td style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;&quot; valign=&quot;top&quot;&gt;&lt;/td&gt;
        &lt;td width=&quot;600&quot; style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; width: 100% !important; margin: 0 auto; padding: 0;&quot; valign=&quot;top&quot;&gt;
          &lt;div style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 0;&quot;&gt;
            &lt;table width=&quot;100%&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background-color: #fff; margin: 0; border: 1px solid #e9e9e9;&quot; bgcolor=&quot;#fff&quot;&gt;
              &lt;tr style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot;&gt;
                &lt;td style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 16px; vertical-align: top; color: #fff; font-weight: 500; text-align: center; border-radius: 3px 3px 0 0; background-color: #E6522C; margin: 0; padding: 20px;&quot; align=&quot;center&quot; bgcolor=&quot;#E6522C&quot; valign=&quot;top&quot;&gt;
                  {{ .Alerts | len }} alert{{ if gt (len .Alerts) 1 }}s{{ end }} for {{ range .GroupLabels.SortedPairs }}
                    {{ .Name }}={{ .Value }}
                  {{ end }}
                &lt;/td&gt;
              &lt;/tr&gt;
              &lt;tr style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot;&gt;
                &lt;td style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 10px;&quot; valign=&quot;top&quot;&gt;
                  &lt;table width=&quot;100%&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot;&gt;
                    &lt;tr style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot;&gt;
                      &lt;td style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;&quot; valign=&quot;top&quot;&gt;
                        &lt;a href=&quot;{{ template &quot;__alertmanagerURL&quot; . }}&quot; style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize; background-color: #348eda; margin: 0; border-color: #348eda; border-style: solid; border-width: 10px 20px;&quot;&gt;View in {{ template &quot;__alertmanager&quot; . }}&lt;/a&gt;
                      &lt;/td&gt;
                    &lt;/tr&gt;
                    {{ if gt (len .Alerts.Firing) 0 }}
                    &lt;tr style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot;&gt;
                      &lt;td style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;&quot; valign=&quot;top&quot;&gt;
                        &lt;strong style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot;&gt;[{{ .Alerts.Firing | len }}] Firing&lt;/strong&gt;
                      &lt;/td&gt;
                    &lt;/tr&gt;
                    {{ end }}
                    {{ range .Alerts.Firing }}
                    &lt;tr style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot;&gt;
                      &lt;td style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;&quot; valign=&quot;top&quot;&gt;
                        &lt;strong style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot;&gt;Labels&lt;/strong&gt;&lt;br style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot; /&gt;
                        {{ range .Labels.SortedPairs }}{{ .Name }} = {{ .Value }}&lt;br style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot; /&gt;{{ end }}
                        {{ if gt (len .Annotations) 0 }}&lt;strong style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot;&gt;Annotations&lt;/strong&gt;&lt;br style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot; /&gt;{{ end }}
                        {{ range .Annotations.SortedPairs }}{{ .Name }} = {{ .Value }}&lt;br style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot; /&gt;{{ end }}
                        &lt;a href=&quot;{{ .GeneratorURL }}&quot; style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; color: #348eda; text-decoration: underline; margin: 0;&quot;&gt;Source&lt;/a&gt;&lt;br style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot; /&gt;
                      &lt;/td&gt;
                    &lt;/tr&gt;
                    {{ end }}
                    {{ if gt (len .Alerts.Resolved) 0 }}
                      {{ if gt (len .Alerts.Firing) 0 }}
                    &lt;tr style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot;&gt;
                      &lt;td style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;&quot; valign=&quot;top&quot;&gt;
                        &lt;br style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot; /&gt;
                        &lt;hr style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot; /&gt;
                        &lt;br style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot; /&gt;
                      &lt;/td&gt;
                    &lt;/tr&gt;
                      {{ end }}
                    &lt;tr style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot;&gt;
                      &lt;td style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;&quot; valign=&quot;top&quot;&gt;
                        &lt;strong style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot;&gt;[{{ .Alerts.Resolved | len }}] Resolved&lt;/strong&gt;
                      &lt;/td&gt;
                    &lt;/tr&gt;
                    {{ end }}
                    {{ range .Alerts.Resolved }}
                    &lt;tr style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot;&gt;
                      &lt;td style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;&quot; valign=&quot;top&quot;&gt;
                        &lt;strong style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot;&gt;Labels&lt;/strong&gt;&lt;br style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot; /&gt;
                        {{ range .Labels.SortedPairs }}{{ .Name }} = {{ .Value }}&lt;br style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot; /&gt;{{ end }}
                        {{ if gt (len .Annotations) 0 }}&lt;strong style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot;&gt;Annotations&lt;/strong&gt;&lt;br style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot; /&gt;{{ end }}
                        {{ range .Annotations.SortedPairs }}{{ .Name }} = {{ .Value }}&lt;br style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot; /&gt;{{ end }}
                        &lt;a href=&quot;{{ .GeneratorURL }}&quot; style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; color: #348eda; text-decoration: underline; margin: 0;&quot;&gt;Source&lt;/a&gt;&lt;br style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot; /&gt;
                      &lt;/td&gt;
                    &lt;/tr&gt;
                    {{ end }}
                  &lt;/table&gt;
                &lt;/td&gt;
              &lt;/tr&gt;
            &lt;/table&gt;
            &lt;div style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; clear: both; color: #999; margin: 0; padding: 20px;&quot;&gt;
              &lt;table width=&quot;100%&quot; style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot;&gt;
                &lt;tr style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;&quot;&gt;
                  &lt;td style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 12px; vertical-align: top; text-align: center; color: #999; margin: 0; padding: 0 0 20px;&quot; align=&quot;center&quot; valign=&quot;top&quot;&gt;&lt;a href=&quot;{{ .ExternalURL }}&quot; style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 12px; color: #999; text-decoration: underline; margin: 0;&quot;&gt;Sent by {{ template &quot;__alertmanager&quot; . }}&lt;/a&gt;&lt;/td&gt;
                &lt;/tr&gt;
              &lt;/table&gt;
            &lt;/div&gt;&lt;/div&gt;
        &lt;/td&gt;
        &lt;td style=&quot;font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;&quot; valign=&quot;top&quot;&gt;&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/table&gt;
    &lt;/body&gt;
    &lt;/html&gt;
    {{ end }}
    {{ define &quot;pushover.default.title&quot; }}{{ template &quot;__subject&quot; . }}{{ end }}
    {{ define &quot;pushover.default.message&quot; }}{{ .CommonAnnotations.SortedPairs.Values | join &quot; &quot; }}
    {{ if gt (len .Alerts.Firing) 0 }}
    Alerts Firing:
    {{ template &quot;__text_alert_list&quot; .Alerts.Firing }}
    {{ end }}
    {{ if gt (len .Alerts.Resolved) 0 }}
    Alerts Resolved:
    {{ template &quot;__text_alert_list&quot; .Alerts.Resolved }}
    {{ end }}
    {{ end }}
    {{ define &quot;pushover.default.url&quot; }}{{ template &quot;__alertmanagerURL&quot; . }}{{ end }}</span>
  <span class="token key atrule">slack.tmpl</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    {{ define &quot;slack.devops.text&quot; }}
    {{range .Alerts}}{{.Annotations.DESCRIPTION}}
    {{end}}
    {{ end }}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> alertmanager/config.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> alertmanager<span class="token punctuation">-</span>config
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">config.yml</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span>
    <span class="token key atrule">global</span><span class="token punctuation">:</span>
      <span class="token key atrule">resolve_timeout</span><span class="token punctuation">:</span> 5m
      <span class="token key atrule">smtp_smarthost</span><span class="token punctuation">:</span> <span class="token string">&#39;smtp.163.com:465&#39;</span>                <span class="token comment">#邮箱smtp服务器代理，启用SSL发信, 端口一般是465</span>
      <span class="token key atrule">smtp_from</span><span class="token punctuation">:</span> <span class="token string">&#39;alert@163.com&#39;</span>                <span class="token comment">#发送邮箱名称</span>
      <span class="token key atrule">smtp_auth_username</span><span class="token punctuation">:</span> <span class="token string">&#39;alert@163.com&#39;</span>               <span class="token comment">#邮箱名称</span>
      <span class="token key atrule">smtp_auth_password</span><span class="token punctuation">:</span> <span class="token string">&#39;password&#39;</span>                <span class="token comment">#邮箱密码或授权码</span>
      <span class="token key atrule">smtp_require_tls</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">templates</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&#39;/etc/templates/*.tmpl&#39;</span>
    <span class="token key atrule">route</span><span class="token punctuation">:</span>
      <span class="token key atrule">receiver</span><span class="token punctuation">:</span> <span class="token string">&#39;default&#39;</span>
      <span class="token key atrule">group_wait</span><span class="token punctuation">:</span> 10s
      <span class="token key atrule">group_interval</span><span class="token punctuation">:</span> 1m
      <span class="token key atrule">repeat_interval</span><span class="token punctuation">:</span> 1h
      <span class="token key atrule">group_by</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;alertname&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;instance&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cluster&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;service&#39;</span><span class="token punctuation">]</span>
      <span class="token key atrule">routes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">receiver</span><span class="token punctuation">:</span> <span class="token string">&#39;default&#39;</span>
        <span class="token key atrule">match</span><span class="token punctuation">:</span>
          <span class="token key atrule">severity</span><span class="token punctuation">:</span> <span class="token string">&#39;warning&#39;</span>
      <span class="token punctuation">-</span> <span class="token key atrule">receiver</span><span class="token punctuation">:</span> <span class="token string">&#39;dingtalk&#39;</span>
        <span class="token key atrule">match</span><span class="token punctuation">:</span>
          <span class="token key atrule">severity</span><span class="token punctuation">:</span> <span class="token string">&#39;critical&#39;</span>
    <span class="token key atrule">inhibit_rules</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">source_match</span><span class="token punctuation">:</span>
        <span class="token key atrule">severity</span><span class="token punctuation">:</span> <span class="token string">&#39;critical&#39;</span>
      <span class="token key atrule">target_match</span><span class="token punctuation">:</span>
        <span class="token key atrule">severity</span><span class="token punctuation">:</span> <span class="token string">&#39;warning&#39;</span>
      <span class="token key atrule">equal</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;alertname&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;instance&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cluster&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;service&#39;</span><span class="token punctuation">]</span>
    <span class="token key atrule">receivers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;default&#39;</span>
      <span class="token key atrule">email_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">to</span><span class="token punctuation">:</span> <span class="token string">&#39;receiver@163.com&#39;</span>
        <span class="token key atrule">send_resolved</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;dingtalk&#39;</span>
      <span class="token key atrule">webhook_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&#39;http://dingtalk:8060/dingtalk/webhook/send&#39;</span>
        <span class="token key atrule">send_resolved</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> alertmanager/alertmanager.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> alertmanager
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> alertmanager
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">prometheus.io/scrape</span><span class="token punctuation">:</span> <span class="token string">&#39;true&#39;</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> alertmanager
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> alertmanager
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9093</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">9093</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort 
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> alertmanager
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> alertmanager
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> alertmanager
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> alertmanager
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> alertmanager
        <span class="token key atrule">image</span><span class="token punctuation">:</span> prom/alertmanager<span class="token punctuation">:</span>latest
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">9093</span>
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> POD_IP
          <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
            <span class="token key atrule">fieldRef</span><span class="token punctuation">:</span>
              <span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
              <span class="token key atrule">fieldPath</span><span class="token punctuation">:</span> status.podIP
        <span class="token key atrule">args</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token string">&quot;--config.file=/etc/alertmanager/config.yml&quot;</span>
          <span class="token punctuation">-</span> <span class="token string">&quot;--storage.path=/alertmanager&quot;</span>
          <span class="token punctuation">-</span> <span class="token string">&quot;--cluster.advertise-address=$(POD_IP):6783&quot;</span>                <span class="token comment">#没有该参数会报错：Failed to get final advertise address</span>
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/alertmanager
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> templates
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/templates
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> alertmanager
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /alertmanager
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config
        <span class="token key atrule">configMap</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> alertmanager<span class="token punctuation">-</span>config
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> templates
        <span class="token key atrule">configMap</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> alertmanager<span class="token punctuation">-</span>templates
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> alertmanager
        <span class="token key atrule">emptyDir</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="prometheus" tabindex="-1"><a class="header-anchor" href="#prometheus" aria-hidden="true">#</a> prometheus</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> prometheus/rbac.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>         
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> prometheus
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">prometheus.io/scrape</span><span class="token punctuation">:</span> <span class="token string">&#39;true&#39;</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> prometheus
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9090</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">9090</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
          
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> prometheus
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> prometheus
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> prometheus
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">serviceAccountName</span><span class="token punctuation">:</span> prometheus
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
        <span class="token key atrule">image</span><span class="token punctuation">:</span> prom/prometheus<span class="token punctuation">:</span>latest
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
        <span class="token key atrule">args</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token string">&#39;--storage.tsdb.path=/prometheus&#39;</span>
          <span class="token punctuation">-</span> <span class="token string">&#39;--storage.tsdb.retention.time=30d&#39;</span>
          <span class="token punctuation">-</span> <span class="token string">&#39;--config.file=/etc/prometheus/prometheus.yml&#39;</span>
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">9090</span>
        <span class="token key atrule">resources</span><span class="token punctuation">:</span>
          <span class="token key atrule">requests</span><span class="token punctuation">:</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 500m
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 500M
          <span class="token key atrule">limits</span><span class="token punctuation">:</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 500m
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 500M
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/prometheus
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> rules
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/prometheus<span class="token punctuation">-</span>rules
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /prometheus
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config
        <span class="token key atrule">configMap</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus<span class="token punctuation">-</span>config
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> rules
        <span class="token key atrule">configMap</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus<span class="token punctuation">-</span>rules
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
        <span class="token key atrule">emptyDir</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token key atrule">nodeSelector</span><span class="token punctuation">:</span>
        <span class="token key atrule">node-role.kubernetes.io/master</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token key atrule">kubernetes.io/hostname</span><span class="token punctuation">:</span> <span class="token string">&quot;master&quot;</span>
      <span class="token key atrule">tolerations</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>role.kubernetes.io/master
        <span class="token key atrule">operator</span><span class="token punctuation">:</span> Exists
        <span class="token key atrule">effect</span><span class="token punctuation">:</span> NoSchedule

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>==prometheus配置文件说明：==</p><blockquote><p>annotations将任何非标识metadata附加到对象，而labels可用于选择对象并查找满足某些条件的对象集合。相比之下，annotations不用于标识和选择对象，虽然它也是键值形式。annotations不会被Kubernetes直接使用，其主要目的是方便用户阅读查找。</p><p>Kubernetes的API SERVER会暴露API服务，Promethues集成了对Kubernetes的自动发现，它有5种模式：node、service、pod、endpoints、ingress。 上面是Prometheus官方给出的对Kubernetes服务发现的配置。可以看到大量的relabel_configs，其实把所有的relabel_configs去掉一样可以对kubernetes做服务发现。 relabel_configs仅仅是对采集过来的指标做二次处理，比如要什么、不要什么以及替换什么等等。而以 _<em>meta</em> 开头的这些元数据标签都是实例中包含的， 而relabel则是动态的修改、覆盖、添加删除这些标签或者这些标签对应的值。而且以 __ 开头的标签通常是系统内部使用的，因此这些标签不会被写入样本数据中， 如果我们要收集这些东西那么则要进行relabel操作。当然relabel操作也不仅限于操作以 __ 开头的标签。</p><p><strong>action的行为：</strong></p><p>----&gt;replace：默认行为，不配置action的话就采用这种行为，它会根据regex来去匹配source_labels标签上的值，并将并将匹配到的值写入target_label中;</p><p>----&gt;labelmap：它会根据regex去匹配标签名称，并将匹配到的内容作为新标签的名称，其值作为新标签的值;</p><p>----&gt;keep：仅收集匹配到regex的源标签，而会丢弃没有匹配到的所有标签，用于选择;</p><p>----&gt;drop：丢弃匹配到regex的源标签，而会收集没有匹配到的所有标签，用于排除;</p><p>----&gt;labeldrop：使用regex匹配标签，符合regex规则的标签将从target实例中移除，其实也就是不收集不保存;</p><p>----&gt;abelkeep：使用regex匹配标签，仅收集符合regex规则的标签，不符合的不收集。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> prometheus/config.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus<span class="token punctuation">-</span>config
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">prometheus.yml</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    global:
      scrape_interval: 10s
      scrape_timeout: 10s
      evaluation_interval: 10s
    alerting:
      alertmanagers:
      - static_configs:
        - targets:
          - alertmanager:9093
    rule_files:
      - &quot;/etc/prometheus-rules/*.rules&quot;
    scrape_configs:
      - job_name: &#39;node-exporter&#39;                #node节点性能指标数据
        tls_config:
          ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
        bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token
        kubernetes_sd_configs:
        - role: endpoints
        relabel_configs:
        - source_labels: [__meta_kubernetes_service_annotation_prometheus_io_scrape, __meta_kubernetes_endpoint_port_name]
          regex: true;node-exporter
          action: keep
        - source_labels: [__meta_kubernetes_service_annotation_prometheus_io_scheme]
          action: replace
          target_label: __scheme__
          regex: (https?)
        - source_labels: [__meta_kubernetes_service_annotation_prometheus_io_path]
          action: replace
          target_label: __metrics_path__
          regex: (.+)
        - source_labels: [__address__, __meta_kubernetes_service_annotation_prometheus_io_port]
          action: replace
          target_label: __address__
          regex: (.+)(?::\\d+);(\\d+)
          replacement: $1:$2
        - action: labelmap
          regex: __meta_kubernetes_service_label_(.+)
        - source_labels: [__meta_kubernetes_namespace]
          action: replace
          target_label: kubernetes_namespace
        - source_labels: [__meta_kubernetes_service_name]
          action: replace
          target_label: kubernetes_name</span>

      <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;k8s-nodes&#39;</span>
        <span class="token key atrule">scheme</span><span class="token punctuation">:</span> https
        <span class="token key atrule">tls_config</span><span class="token punctuation">:</span>
          <span class="token key atrule">ca_file</span><span class="token punctuation">:</span> /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
        <span class="token key atrule">bearer_token_file</span><span class="token punctuation">:</span> /var/run/secrets/kubernetes.io/serviceaccount/token
        <span class="token key atrule">kubernetes_sd_configs</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> node
        <span class="token key atrule">relabel_configs</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">action</span><span class="token punctuation">:</span> labelmap
          <span class="token key atrule">regex</span><span class="token punctuation">:</span> __meta_kubernetes_node_label_(.+)
        <span class="token punctuation">-</span> <span class="token key atrule">target_label</span><span class="token punctuation">:</span> __address__
          <span class="token key atrule">replacement</span><span class="token punctuation">:</span> 10.1.93.190<span class="token punctuation">:</span><span class="token number">6443</span>
        <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__meta_kubernetes_node_name<span class="token punctuation">]</span>
          <span class="token key atrule">regex</span><span class="token punctuation">:</span> (.+)
          <span class="token key atrule">target_label</span><span class="token punctuation">:</span> __metrics_path__
          <span class="token key atrule">replacement</span><span class="token punctuation">:</span> /api/v1/nodes/$<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>/proxy/metrics

      <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;kubernetes-cadvisor&#39;</span>                <span class="token comment">#容器、Pod相关的性能指标数据</span>
        <span class="token key atrule">scheme</span><span class="token punctuation">:</span> https
        <span class="token key atrule">tls_config</span><span class="token punctuation">:</span>
          <span class="token key atrule">ca_file</span><span class="token punctuation">:</span> /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
        <span class="token key atrule">bearer_token_file</span><span class="token punctuation">:</span> /var/run/secrets/kubernetes.io/serviceaccount/token
        <span class="token key atrule">kubernetes_sd_configs</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> node
        <span class="token key atrule">relabel_configs</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">action</span><span class="token punctuation">:</span> labelmap
          <span class="token key atrule">regex</span><span class="token punctuation">:</span> __meta_kubernetes_node_label_(.+)
        <span class="token punctuation">-</span> <span class="token key atrule">target_label</span><span class="token punctuation">:</span> __address__
          <span class="token key atrule">replacement</span><span class="token punctuation">:</span> 10.1.93.190<span class="token punctuation">:</span><span class="token number">6443</span>
        <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__meta_kubernetes_node_name<span class="token punctuation">]</span>
          <span class="token key atrule">regex</span><span class="token punctuation">:</span> (.+)
          <span class="token key atrule">target_label</span><span class="token punctuation">:</span> __metrics_path__
          <span class="token key atrule">replacement</span><span class="token punctuation">:</span> /api/v1/nodes/$<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>/proxy/metrics/cadvisor
        <span class="token key atrule">metric_relabel_configs</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>id<span class="token punctuation">]</span>
          <span class="token key atrule">action</span><span class="token punctuation">:</span> replace
          <span class="token key atrule">regex</span><span class="token punctuation">:</span> <span class="token string">&#39;^/machine\\.slice/machine-rkt\\\\x2d([^\\\\]+)\\\\.+/([^/]+)\\.service$&#39;</span>
          <span class="token key atrule">target_label</span><span class="token punctuation">:</span> rkt_container_name
          <span class="token key atrule">replacement</span><span class="token punctuation">:</span> <span class="token string">&#39;\${2}-\${1}&#39;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>id<span class="token punctuation">]</span>
          <span class="token key atrule">action</span><span class="token punctuation">:</span> replace
          <span class="token key atrule">regex</span><span class="token punctuation">:</span> <span class="token string">&#39;^/system\\.slice/(.+)\\.service$&#39;</span>
          <span class="token key atrule">target_label</span><span class="token punctuation">:</span> systemd_service_name
          <span class="token key atrule">replacement</span><span class="token punctuation">:</span> <span class="token string">&#39;\${1}&#39;</span>

      <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;kube-state-metrics&#39;</span>              <span class="token comment">#资源对象(Deployment、Pod等)的状态</span>
        <span class="token key atrule">tls_config</span><span class="token punctuation">:</span>
          <span class="token key atrule">ca_file</span><span class="token punctuation">:</span> /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
        <span class="token key atrule">bearer_token_file</span><span class="token punctuation">:</span> /var/run/secrets/kubernetes.io/serviceaccount/token
        <span class="token key atrule">kubernetes_sd_configs</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> endpoints
        <span class="token key atrule">relabel_configs</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__meta_kubernetes_service_annotation_prometheus_io_scrape<span class="token punctuation">,</span> __meta_kubernetes_endpoint_port_name<span class="token punctuation">]</span>
          <span class="token key atrule">regex</span><span class="token punctuation">:</span> true;kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
          <span class="token key atrule">action</span><span class="token punctuation">:</span> keep
        <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__meta_kubernetes_service_annotation_prometheus_io_scheme<span class="token punctuation">]</span>
          <span class="token key atrule">action</span><span class="token punctuation">:</span> replace
          <span class="token key atrule">target_label</span><span class="token punctuation">:</span> __scheme__
          <span class="token key atrule">regex</span><span class="token punctuation">:</span> (https<span class="token punctuation">?</span>)
        <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__meta_kubernetes_service_annotation_prometheus_io_path<span class="token punctuation">]</span>
          <span class="token key atrule">action</span><span class="token punctuation">:</span> replace
          <span class="token key atrule">target_label</span><span class="token punctuation">:</span> __metrics_path__
          <span class="token key atrule">regex</span><span class="token punctuation">:</span> (.+)
        <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__address__<span class="token punctuation">,</span> __meta_kubernetes_service_annotation_prometheus_io_port<span class="token punctuation">]</span>
          <span class="token key atrule">action</span><span class="token punctuation">:</span> replace
          <span class="token key atrule">target_label</span><span class="token punctuation">:</span> __address__
          <span class="token key atrule">regex</span><span class="token punctuation">:</span> (.+)(<span class="token punctuation">?</span><span class="token punctuation">:</span><span class="token punctuation">:</span>\\d+);(\\d+)
          <span class="token key atrule">replacement</span><span class="token punctuation">:</span> $1<span class="token punctuation">:</span>$2
        <span class="token punctuation">-</span> <span class="token key atrule">action</span><span class="token punctuation">:</span> labelmap
          <span class="token key atrule">regex</span><span class="token punctuation">:</span> __meta_kubernetes_service_label_(.+)
        <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__meta_kubernetes_namespace<span class="token punctuation">]</span>
          <span class="token key atrule">action</span><span class="token punctuation">:</span> replace
          <span class="token key atrule">target_label</span><span class="token punctuation">:</span> kubernetes_namespace
        <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__meta_kubernetes_service_name<span class="token punctuation">]</span>
          <span class="token key atrule">action</span><span class="token punctuation">:</span> replace
          <span class="token key atrule">target_label</span><span class="token punctuation">:</span> kubernetes_name

      <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;kubernetes-service-http-probe&#39;</span>               <span class="token comment">#通过http方式探测Service状态</span>
        <span class="token key atrule">tls_config</span><span class="token punctuation">:</span>
          <span class="token key atrule">ca_file</span><span class="token punctuation">:</span> /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
        <span class="token key atrule">bearer_token_file</span><span class="token punctuation">:</span> /var/run/secrets/kubernetes.io/serviceaccount/token
        <span class="token key atrule">kubernetes_sd_configs</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> service
        <span class="token key atrule">metrics_path</span><span class="token punctuation">:</span> /probe
        <span class="token key atrule">params</span><span class="token punctuation">:</span>
          <span class="token key atrule">module</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>http_2xx<span class="token punctuation">]</span>
        <span class="token key atrule">relabel_configs</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__meta_kubernetes_service_annotation_prometheus_io_scrape<span class="token punctuation">,</span> __meta_kubernetes_service_annotation_prometheus_io_http_probe<span class="token punctuation">]</span>
          <span class="token key atrule">regex</span><span class="token punctuation">:</span> true;true
          <span class="token key atrule">action</span><span class="token punctuation">:</span> keep
        <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__meta_kubernetes_service_name<span class="token punctuation">,</span> __meta_kubernetes_namespace<span class="token punctuation">,</span> __meta_kubernetes_service_annotation_prometheus_io_http_probe_port<span class="token punctuation">,</span> __meta_kubernetes_service_annotation_prometheus_io_http_probe_path<span class="token punctuation">]</span>
          <span class="token key atrule">action</span><span class="token punctuation">:</span> replace
          <span class="token key atrule">target_label</span><span class="token punctuation">:</span> __param_target
          <span class="token key atrule">regex</span><span class="token punctuation">:</span> (.+);(.+);(.+);(.+)
          <span class="token key atrule">replacement</span><span class="token punctuation">:</span> $1.$2<span class="token punctuation">:</span>$3$4
        <span class="token punctuation">-</span> <span class="token key atrule">target_label</span><span class="token punctuation">:</span> __address__
          <span class="token key atrule">replacement</span><span class="token punctuation">:</span> 10.1.93.190<span class="token punctuation">:</span><span class="token number">30115</span>
        <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__param_target<span class="token punctuation">]</span>
          <span class="token key atrule">target_label</span><span class="token punctuation">:</span> instance
        <span class="token punctuation">-</span> <span class="token key atrule">action</span><span class="token punctuation">:</span> labelmap
          <span class="token key atrule">regex</span><span class="token punctuation">:</span> __meta_kubernetes_service_annotation_prometheus_io_app_info_(.+)

      <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;kubernetes-service-tcp-probe&#39;</span>                <span class="token comment">#通过tcp方式探测Service状态</span>
        <span class="token key atrule">tls_config</span><span class="token punctuation">:</span>
          <span class="token key atrule">ca_file</span><span class="token punctuation">:</span> /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
        <span class="token key atrule">bearer_token_file</span><span class="token punctuation">:</span> /var/run/secrets/kubernetes.io/serviceaccount/token
        <span class="token key atrule">kubernetes_sd_configs</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> service
        <span class="token key atrule">metrics_path</span><span class="token punctuation">:</span> /probe
        <span class="token key atrule">params</span><span class="token punctuation">:</span>
          <span class="token key atrule">module</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>tcp_connect<span class="token punctuation">]</span>
        <span class="token key atrule">relabel_configs</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__meta_kubernetes_service_annotation_prometheus_io_scrape<span class="token punctuation">,</span> __meta_kubernetes_service_annotation_prometheus_io_tcp_probe<span class="token punctuation">]</span>
          <span class="token key atrule">regex</span><span class="token punctuation">:</span> true;true
          <span class="token key atrule">action</span><span class="token punctuation">:</span> keep
        <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__meta_kubernetes_service_name<span class="token punctuation">,</span> __meta_kubernetes_namespace<span class="token punctuation">,</span> __meta_kubernetes_service_annotation_prometheus_io_tcp_probe_port<span class="token punctuation">]</span>
          <span class="token key atrule">action</span><span class="token punctuation">:</span> replace
          <span class="token key atrule">target_label</span><span class="token punctuation">:</span> __param_target
          <span class="token key atrule">regex</span><span class="token punctuation">:</span> (.+);(.+);(.+)
          <span class="token key atrule">replacement</span><span class="token punctuation">:</span> $1.$2<span class="token punctuation">:</span>$3
        <span class="token punctuation">-</span> <span class="token key atrule">target_label</span><span class="token punctuation">:</span> __address__
          <span class="token key atrule">replacement</span><span class="token punctuation">:</span> 10.1.93.190<span class="token punctuation">:</span><span class="token number">30115</span>
        <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__param_target<span class="token punctuation">]</span>
          <span class="token key atrule">target_label</span><span class="token punctuation">:</span> instance
        <span class="token punctuation">-</span> <span class="token key atrule">action</span><span class="token punctuation">:</span> labelmap
          <span class="token key atrule">regex</span><span class="token punctuation">:</span> __meta_kubernetes_service_annotation_prometheus_io_app_info_(.+)

      <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;kubernetes-ingresses&#39;</span>              <span class="token comment">#通过http方式探测ingresses状态</span>
        <span class="token key atrule">kubernetes_sd_configs</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> ingress
        <span class="token key atrule">metrics_path</span><span class="token punctuation">:</span> /probe
        <span class="token key atrule">params</span><span class="token punctuation">:</span>
          <span class="token key atrule">module</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>http_2xx<span class="token punctuation">]</span>
        <span class="token key atrule">relabel_configs</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__meta_kubernetes_ingress_scheme<span class="token punctuation">,</span> __address__<span class="token punctuation">,</span> __meta_kubernetes_ingress_path<span class="token punctuation">]</span>
          <span class="token key atrule">regex</span><span class="token punctuation">:</span> (.+);(.+);(.+)
          <span class="token key atrule">replacement</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">:</span>//$<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>$<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span>
          <span class="token key atrule">target_label</span><span class="token punctuation">:</span> __param_target
        <span class="token punctuation">-</span> <span class="token key atrule">target_label</span><span class="token punctuation">:</span> __address__
          <span class="token key atrule">replacement</span><span class="token punctuation">:</span> 10.1.93.190<span class="token punctuation">:</span><span class="token number">30115</span>
        <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__param_target<span class="token punctuation">]</span>
          <span class="token key atrule">target_label</span><span class="token punctuation">:</span> instance
        <span class="token punctuation">-</span> <span class="token key atrule">action</span><span class="token punctuation">:</span> labelmap
          <span class="token key atrule">regex</span><span class="token punctuation">:</span> __meta_kubernetes_ingress_label_(.+)
        <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__meta_kubernetes_namespace<span class="token punctuation">]</span>
          <span class="token key atrule">target_label</span><span class="token punctuation">:</span> kubernetes_namespace
        <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__meta_kubernetes_ingress_name<span class="token punctuation">]</span>
          <span class="token key atrule">target_label</span><span class="token punctuation">:</span> kubernetes_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> prometheus/rules.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus<span class="token punctuation">-</span>rules
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">node.rules</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    groups:
    - name: node
      rules:
      - alert: NodeDown
        expr: up == 0
        for: 3m
        labels:
          severity: critical
        annotations:
          summary: &quot;{{ $labels.instance }}: down&quot;
          description: &quot;{{ $labels.instance }} has been down for more than 3m&quot;
          value: &quot;{{ $value }}&quot;
      - alert: NodeCPUHigh
        expr: (1 - avg by (instance) (irate(node_cpu_seconds_total{mode=&quot;idle&quot;}[5m]))) * 100 &gt; 75
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: &quot;{{$labels.instance}}: High CPU usage&quot;
          description: &quot;{{$labels.instance}}: CPU usage is above 75%&quot;
          value: &quot;{{ $value }}&quot;</span>
 
      <span class="token punctuation">-</span> <span class="token key atrule">alert</span><span class="token punctuation">:</span> NodeCPUIowaitHigh
        <span class="token key atrule">expr</span><span class="token punctuation">:</span> avg by (instance) (irate(node_cpu_seconds_total<span class="token punctuation">{</span>mode=&quot;iowait&quot;<span class="token punctuation">}</span><span class="token punctuation">[</span>5m<span class="token punctuation">]</span>)) * 100 <span class="token punctuation">&gt;</span> 50
        <span class="token key atrule">for</span><span class="token punctuation">:</span> 5m
        <span class="token key atrule">labels</span><span class="token punctuation">:</span>
          <span class="token key atrule">severity</span><span class="token punctuation">:</span> warning
        <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
          <span class="token key atrule">summary</span><span class="token punctuation">:</span> <span class="token string">&quot;{{$labels.instance}}: High CPU iowait usage&quot;</span>
          <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&quot;{{$labels.instance}}: CPU iowait usage is above 50%&quot;</span>
          <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ $value }}&quot;</span>
 
      <span class="token punctuation">-</span> <span class="token key atrule">alert</span><span class="token punctuation">:</span> NodeMemoryUsageHigh
        <span class="token key atrule">expr</span><span class="token punctuation">:</span> (1 <span class="token punctuation">-</span> node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes) * 100 <span class="token punctuation">&gt;</span> 90
        <span class="token key atrule">for</span><span class="token punctuation">:</span> 5m
        <span class="token key atrule">labels</span><span class="token punctuation">:</span>
          <span class="token key atrule">severity</span><span class="token punctuation">:</span> warning
        <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
          <span class="token key atrule">summary</span><span class="token punctuation">:</span> <span class="token string">&quot;{{$labels.instance}}: High memory usage&quot;</span>
          <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&quot;{{$labels.instance}}: Memory usage is above 90%&quot;</span>
          <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ $value }}&quot;</span>
 
      <span class="token punctuation">-</span> <span class="token key atrule">alert</span><span class="token punctuation">:</span> NodeDiskRootLow
        <span class="token key atrule">expr</span><span class="token punctuation">:</span> (1 <span class="token punctuation">-</span> node_filesystem_avail_bytes<span class="token punctuation">{</span>fstype=~&quot;ext.<span class="token important">*|xfs&quot;</span><span class="token punctuation">,</span>mountpoint =&quot;/&quot;<span class="token punctuation">}</span> / node_filesystem_size_bytes<span class="token punctuation">{</span>fstype=~&quot;ext.<span class="token important">*|xfs&quot;</span><span class="token punctuation">,</span>mountpoint =&quot;/&quot;<span class="token punctuation">}</span>) * 100 <span class="token punctuation">&gt;</span> 80
        <span class="token key atrule">for</span><span class="token punctuation">:</span> 10m
        <span class="token key atrule">labels</span><span class="token punctuation">:</span>
          <span class="token key atrule">severity</span><span class="token punctuation">:</span> warning
        <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
          <span class="token key atrule">summary</span><span class="token punctuation">:</span> <span class="token string">&quot;{{$labels.instance}}: Low disk(the / partition) space&quot;</span>
          <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&quot;{{$labels.instance}}: Disk(the / partition) usage is above 80%&quot;</span>
          <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ $value }}&quot;</span>
        
      <span class="token punctuation">-</span> <span class="token key atrule">alert</span><span class="token punctuation">:</span> NodeDiskBootLow
        <span class="token key atrule">expr</span><span class="token punctuation">:</span> (1 <span class="token punctuation">-</span> node_filesystem_avail_bytes<span class="token punctuation">{</span>fstype=~&quot;ext.<span class="token important">*|xfs&quot;</span><span class="token punctuation">,</span>mountpoint =&quot;/boot&quot;<span class="token punctuation">}</span> / node_filesystem_size_bytes<span class="token punctuation">{</span>fstype=~&quot;ext.<span class="token important">*|xfs&quot;</span><span class="token punctuation">,</span>mountpoint =&quot;/boot&quot;<span class="token punctuation">}</span>) * 100 <span class="token punctuation">&gt;</span> 80
        <span class="token key atrule">for</span><span class="token punctuation">:</span> 10m
        <span class="token key atrule">labels</span><span class="token punctuation">:</span>
          <span class="token key atrule">severity</span><span class="token punctuation">:</span> warning
        <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
          <span class="token key atrule">summary</span><span class="token punctuation">:</span> <span class="token string">&quot;{{$labels.instance}}: Low disk(the /boot partition) space&quot;</span>
          <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&quot;{{$labels.instance}}: Disk(the /boot partition) usage is above 80%&quot;</span>
          <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ $value }}&quot;</span>
 
      <span class="token punctuation">-</span> <span class="token key atrule">alert</span><span class="token punctuation">:</span> NodeLoad5High
        <span class="token key atrule">expr</span><span class="token punctuation">:</span> (node_load5) <span class="token punctuation">&gt;</span> (count by (instance) (node_cpu_seconds_total<span class="token punctuation">{</span>mode=&#39;system&#39;<span class="token punctuation">}</span>) * 2)
        <span class="token key atrule">for</span><span class="token punctuation">:</span> 5m
        <span class="token key atrule">labels</span><span class="token punctuation">:</span>
          <span class="token key atrule">severity</span><span class="token punctuation">:</span> warning
        <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
          <span class="token key atrule">summary</span><span class="token punctuation">:</span> <span class="token string">&quot;{{$labels.instance}}: Load(5m) High&quot;</span>
          <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&quot;{{$labels.instance}}: Load(5m) is 2 times the number of CPU cores&quot;</span>
          <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ $value }}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> prometheus/prometheus.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>         
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> prometheus
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">prometheus.io/scrape</span><span class="token punctuation">:</span> <span class="token string">&#39;true&#39;</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> prometheus
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9090</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">9090</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
          
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> prometheus
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> prometheus
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> prometheus
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">serviceAccountName</span><span class="token punctuation">:</span> prometheus
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
        <span class="token key atrule">image</span><span class="token punctuation">:</span> prom/prometheus<span class="token punctuation">:</span>latest
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
        <span class="token key atrule">args</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token string">&#39;--storage.tsdb.path=/prometheus&#39;</span>
          <span class="token punctuation">-</span> <span class="token string">&#39;--storage.tsdb.retention.time=30d&#39;</span>
          <span class="token punctuation">-</span> <span class="token string">&#39;--config.file=/etc/prometheus/prometheus.yml&#39;</span>
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">9090</span>
        <span class="token key atrule">resources</span><span class="token punctuation">:</span>
          <span class="token key atrule">requests</span><span class="token punctuation">:</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 500m
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 500M
          <span class="token key atrule">limits</span><span class="token punctuation">:</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 500m
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 500M
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/prometheus
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> rules
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/prometheus<span class="token punctuation">-</span>rules
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /prometheus
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config
        <span class="token key atrule">configMap</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus<span class="token punctuation">-</span>config
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> rules
        <span class="token key atrule">configMap</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus<span class="token punctuation">-</span>rules
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
        <span class="token key atrule">emptyDir</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token key atrule">nodeSelector</span><span class="token punctuation">:</span>
        <span class="token key atrule">node-role.kubernetes.io/master</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token key atrule">kubernetes.io/hostname</span><span class="token punctuation">:</span> <span class="token string">&quot;master&quot;</span>
      <span class="token key atrule">tolerations</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>role.kubernetes.io/master
        <span class="token key atrule">operator</span><span class="token punctuation">:</span> Exists
        <span class="token key atrule">effect</span><span class="token punctuation">:</span> NoSchedule
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="grafana" tabindex="-1"><a class="header-anchor" href="#grafana" aria-hidden="true">#</a> grafana</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> grafana/secret.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Secret
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> grafana
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">admin-password</span><span class="token punctuation">:</span> YWRtaW4=              <span class="token comment"># base64 加解密</span>
  <span class="token key atrule">admin-username</span><span class="token punctuation">:</span> YWRtaW4=
<span class="token key atrule">type</span><span class="token punctuation">:</span> Opaque
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> grafana/grafana.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> grafana
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> grafana
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">prometheus.io/scrape</span><span class="token punctuation">:</span> <span class="token string">&#39;true&#39;</span>
    <span class="token key atrule">prometheus.io/path</span><span class="token punctuation">:</span> <span class="token string">&#39;/metrics&#39;</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> grafana
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> grafana
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">3000</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">3000</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> grafana
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> grafana
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> grafana
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> grafana
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> grafana
        <span class="token key atrule">image</span><span class="token punctuation">:</span> grafana/grafana<span class="token punctuation">:</span>latest
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">3000</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> grafana
        <span class="token key atrule">resources</span><span class="token punctuation">:</span>
          <span class="token key atrule">limits</span><span class="token punctuation">:</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 100m
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 100Mi
          <span class="token key atrule">requests</span><span class="token punctuation">:</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 100m
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 100Mi
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> GF_AUTH_BASIC_ENABLED
            <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> GF_AUTH_ANONYMOUS_ENABLED
            <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;false&quot;</span>
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> GF_AUTH_ANONYMOUS_ORG_ROLE
            <span class="token key atrule">value</span><span class="token punctuation">:</span> Admin
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> GF_DASHBOARDS_JSON_ENABLED
            <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> GF_INSTALL_PLUGINS
            <span class="token key atrule">value</span><span class="token punctuation">:</span> grafana<span class="token punctuation">-</span>kubernetes<span class="token punctuation">-</span>app               <span class="token comment">#安装grafana-kubernetes-app插件</span>
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> GF_SECURITY_ADMIN_USER
            <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
              <span class="token key atrule">secretKeyRef</span><span class="token punctuation">:</span>
                <span class="token key atrule">name</span><span class="token punctuation">:</span> grafana
                <span class="token key atrule">key</span><span class="token punctuation">:</span> admin<span class="token punctuation">-</span>username
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> GF_SECURITY_ADMIN_PASSWORD
            <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
              <span class="token key atrule">secretKeyRef</span><span class="token punctuation">:</span>
                <span class="token key atrule">name</span><span class="token punctuation">:</span> grafana
                <span class="token key atrule">key</span><span class="token punctuation">:</span> admin<span class="token punctuation">-</span>password
        <span class="token key atrule">readinessProbe</span><span class="token punctuation">:</span>
          <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>
            <span class="token key atrule">path</span><span class="token punctuation">:</span> /login
            <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">3000</span>
          <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">10</span>
          <span class="token key atrule">timeoutSeconds</span><span class="token punctuation">:</span> <span class="token number">5</span>
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> grafana<span class="token punctuation">-</span>storage
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /var/lib/grafana
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> grafana<span class="token punctuation">-</span>storage
        <span class="token key atrule">emptyDir</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 文件目录结构</span>
<span class="token punctuation">[</span>root@master prometheus2<span class="token punctuation">]</span><span class="token comment"># tree</span>
<span class="token builtin class-name">.</span>
├── alertmanager
│   ├── alertmanager.yaml
│   ├── config.yaml
│   └── templates.yaml
├── blackbox-exporter
│   ├── blackbox-exporter.yaml
│   └── config.yaml
├── dingtalk
│   ├── config.yaml
│   └── dingtalk.yaml
├── grafana
│   ├── grafana.yaml
│   └── secret.yaml
├── k8s
│   ├── kube-controller-manager-prometheus-discovery.yaml
│   ├── kube-proxy-prometheus-discovery.yaml
│   └── kube-scheduler-prometheus-discovery.yaml
├── kube-state-metrics
│   ├── kube-state-metrics.yaml
│   └── rbac.yaml
├── node-exporter
│   └── node-exporter.yaml
└── prometheus
    ├── config.yaml
    ├── nc.yaml
    ├── prometheus.yaml
    ├── rbac.yaml
    └── rules.yaml

<span class="token number">8</span> directories, <span class="token number">20</span> files

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 部署</span>
kubectl apply <span class="token parameter variable">-f</span> namespace.yaml
 
kubectl apply <span class="token parameter variable">-f</span> node-exporter/
 
kubectl apply <span class="token parameter variable">-f</span> k8s/
 
kubectl apply <span class="token parameter variable">-f</span> kube-state-metrics/
 
kubectl apply <span class="token parameter variable">-f</span> blackbox-exporter/
 
kubectl apply <span class="token parameter variable">-f</span> dingtalk/
 
kubectl apply <span class="token parameter variable">-f</span> alertmanager/
 
kubectl apply <span class="token parameter variable">-f</span> prometheus/
 
kubectl apply <span class="token parameter variable">-f</span> grafana/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看部署结果</span>
<span class="token punctuation">[</span>root@master prometheus2<span class="token punctuation">]</span><span class="token comment"># kubectl get all -n monitoring</span>
NAME                                      READY   STATUS    RESTARTS   AGE
pod/alertmanager-59f9ddcccf-kbbvc         <span class="token number">1</span>/1     Running   <span class="token number">0</span>          22h
pod/blackbox-exporter-b74677477-f2sf5     <span class="token number">1</span>/1     Running   <span class="token number">0</span>          23h
pod/grafana-74bfb44dbf-6rtrn              <span class="token number">1</span>/1     Running   <span class="token number">0</span>          22h
pod/kube-state-metrics-5f6f7c9fbb-zcf6k   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          23h
pod/node-exporter-4nxpb                   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          23h
pod/node-exporter-xz5kq                   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          23h
pod/prometheus-7f99f9888d-kdn9d           <span class="token number">1</span>/1     Running   <span class="token number">0</span>          16h

NAME                         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>          AGE
service/alertmanager         NodePort    <span class="token number">10.96</span>.167.209   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">9093</span>:31973/TCP   22h
service/blackbox-exporter    NodePort    <span class="token number">10.96</span>.179.56    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">9115</span>:30115/TCP   23h
service/dingtalk             ClusterIP   <span class="token number">10.96</span>.168.175   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">8060</span>/TCP         23h
service/grafana              NodePort    <span class="token number">10.96</span>.158.146   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">3000</span>:31170/TCP   22h
service/kube-state-metrics   NodePort    <span class="token number">10.96</span>.106.100   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">8080</span>:31493/TCP   23h
service/node-exporter        NodePort    <span class="token number">10.96</span>.215.144   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">9100</span>:30181/TCP   22h
service/prometheus           NodePort    <span class="token number">10.96</span>.229.43    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">9090</span>:32343/TCP   22h

NAME                           DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
daemonset.apps/node-exporter   <span class="token number">1</span>         <span class="token number">1</span>         <span class="token number">1</span>       <span class="token number">1</span>            <span class="token number">1</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>          23h

NAME                                 READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/alertmanager         <span class="token number">1</span>/1     <span class="token number">1</span>            <span class="token number">1</span>           22h
deployment.apps/blackbox-exporter    <span class="token number">1</span>/1     <span class="token number">1</span>            <span class="token number">1</span>           23h
deployment.apps/dingtalk             <span class="token number">1</span>/1     <span class="token number">1</span>            <span class="token number">1</span>           23h
deployment.apps/grafana              <span class="token number">1</span>/1     <span class="token number">1</span>            <span class="token number">1</span>           22h
deployment.apps/kube-state-metrics   <span class="token number">1</span>/1     <span class="token number">1</span>            <span class="token number">1</span>           23h
deployment.apps/prometheus           <span class="token number">1</span>/1     <span class="token number">1</span>            <span class="token number">1</span>           22h

NAME                                            DESIRED   CURRENT   READY   AGE
replicaset.apps/alertmanager-59f9ddcccf         <span class="token number">1</span>         <span class="token number">1</span>         <span class="token number">1</span>       22h
replicaset.apps/blackbox-exporter-b74677477     <span class="token number">1</span>         <span class="token number">1</span>         <span class="token number">1</span>       23h
replicaset.apps/dingtalk-77d475cc8              <span class="token number">1</span>         <span class="token number">1</span>         <span class="token number">1</span>       23h
replicaset.apps/grafana-74bfb44dbf              <span class="token number">1</span>         <span class="token number">1</span>         <span class="token number">1</span>       22h
replicaset.apps/kube-state-metrics-5f6f7c9fbb   <span class="token number">1</span>         <span class="token number">1</span>         <span class="token number">1</span>       23h
replicaset.apps/kube-state-metrics-7d4b4fb7c8   <span class="token number">1</span>         <span class="token number">1</span>         <span class="token number">1</span>       23h
replicaset.apps/prometheus-7f99f9888d           <span class="token number">1</span>         <span class="token number">1</span>         <span class="token number">1</span>       22h

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>==访问prometheus：==浏览器输入http://10.1.93.190:32343/targets （端口号视service而定）</p><p><img src="`+t+'" alt="1616552351873"></p><p><img src="'+l+'" alt="1616552817376"></p><p>==访问grafana：==浏览器输入http://10.1.93.190:31170/targets （端口号视service而定）</p><p>以下均未验证！！！</p><p>数据源是<code>http://prometheus:32343</code>，导入<code>主机详情</code>模板8919，</p><p><img src="'+p+`" alt="在这里插入图片描述"></p><hr><h3 id="grafana配置kubernetes数据源" tabindex="-1"><a class="header-anchor" href="#grafana配置kubernetes数据源" aria-hidden="true">#</a> grafana配置kubernetes数据源</h3><p>启动插件：<code>Plugins</code> → <code>kubernetes</code> → <code>Enable</code>，然后配置集群访问地址及访问证书：</p><p>如果是通过kubeadm方式搭建的k8s集群，会有一个 <code>/etc/kubernetes/admin.conf</code> 文件，里面包含了客户端的证书和密码base64编码。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat /etc/kubernetes/admin.conf
apiVersion: v1clusters:- cluster:    certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUN5RENDQWJDZ0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRc0ZBREFWTVJNd0VRWURWUVFERXdwcmRXSmwKY201bGRHVnpNQjRYRFRJd01EVXhNakV3TURBek1Gb1hEVE13TURVeE1ERXdNREF6TUZvd0ZURVRNQkVHQTFVRQpBeE1LYTNWaVpYSnVaWFJsY3pDQ0FTSXdEUVlKS29aSWh2Y05BUUVCQlFBRGdnRVBBRENDQVFvQ2dnRUJBTDVpCmYxTGcxUUlqN0VlWlZ0cVFmS3dGZjg4V3NVbVVialZldll5NDZTUittMWpwRWdvM2wxWEIvZHBFNzRWOGtqTGQKZkdGdmVWZkVxNy8rMzdyamNGMXRpSm1BbThLZnMrMW9QdEpLOE0yZjNTSm5FZVVIQUlBeFl2cUE4ZFNsbThTQwpmSkJWU2J3K1pROTBTelpKNzdQUzFuZTBmYnRod0Y2VHE0Uy9FV3h3cUZZMzF5cENub05lVUNtcElsSjVnYWdtCnJ2QmhkTmFNb2oyQlRrMWNDVjh3dkRVS3RlbXFVYVE4R2ZCalZLeHhkdWtwcjJ3S3RPbXZkem1vMEdLSE11MFcKWmQ1TVd0dStIQVZrTXhzcE95Yk41NkFkNnloUkN5YkFJbTN2ZWJlTFV5cjBEY2JhNzJXNVlPRHRCY3ZBOEJxOAoxR1JQc1EwaXBUdGtYbDVCZEhzQ0F3RUFBYU1qTUNFd0RnWURWUjBQQVFIL0JBUURBZ0trTUE4R0ExVWRFd0VCCi93UUZNQU1CQWY4d0RRWUpLb1pJaHZjTkFRRUxCUUFEZ2dFQkFJS0lIb25wVllFWWpwR3JrN2wraGJyeGlxZXkKeGFQT1M3UW5TZEVZMC94TWtiUWxKcy9rUFcxU2lVemdoUk4wQWJxMnFtTXVuNHhlZ0pLdGVPNXhYRGJZNEhZbgpVVCtPWG0rQ1hBQjd3S3pYcDlmUTZBUDk3cmY0L2FRaXlGZEtsZUJ6Y3JNUkErZHZWTjk3NGlHUW94aFh3T1FNCmZXeGNrMDNhU0Qvc2s5UnJrcFhlL1g2NHQrV3BkUlFGRjE2YVFlSHVxNnJQRWZTR2VPUWVpcVIrQVgvdWpIOHoKZzJZY2JKWE85U3ZheXcyb3oxSlozTUx6K0FpeE5RTHFNYU00Tm43TklvMExxUHFqNzZoU3d1Qk1nREE0VnFtZAowZHRtS211OVZjTGZHcW9ITnZnajlTYlVlZ1crL3VEbzcwVXdvb2NGTmlnSnRnOVVSZWpEUXJJSm4rUT0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=    server: https://192.168.30.188:6443  name: kubernetescontexts:- context:    cluster: kubernetes    user: kubernetes-admin  name: kubernetes-admin@kubernetescurrent-context: kubernetes-admin@kuberneteskind: Configpreferences: {}users:- name: kubernetes-admin  user:    client-certificate-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUM4akNDQWRxZ0F3SUJBZ0lJZWtMYS9Fc1ZDSGd3RFFZSktvWklodmNOQVFFTEJRQXdGVEVUTUJFR0ExVUUKQXhNS2EzVmlaWEp1WlhSbGN6QWVGdzB5TURBMU1USXhNREF3TXpCYUZ3MHlNVEExTVRJeE1EQXdNekphTURReApGekFWQmdOVkJBb1REbk41YzNSbGJUcHRZWE4wWlhKek1Sa3dGd1lEVlFRREV4QnJkV0psY201bGRHVnpMV0ZrCmJXbHVNSUlCSWpBTkJna3Foa2lHOXcwQkFRRUZBQU9DQVE4QU1JSUJDZ0tDQVFFQXJ2a084MUg0ZW9zak5kM3oKSy9UUEhHcGtCR1FvZm1hbm9ldjRlWXNmUTlPZW0wYzBvVUJ3cXoxM2JabmJUbmJweFFqbmdZMkc4bHF4UmkwaQpCdlA2ZmtmS0ZFQlZzUTd4dGlqZXBrdnByWEdPL08wUUE1U0k4NHJzTjVHOVhOa2pQbWdzYTBlblZxNUVvRTBGClRaNXpRRjlwUlkxWUZZZXYrTDE1bU5FaXlScUg4UDJRY3BoUmxWK09IUXVHaVdLNEhIRVB2QWw2QUpJeWN6d3MKWWMrdk1IdHlZbmF5NUMwUldVWHhyUmc0ZytKMksrY1h1YlF0elhXdjdxaTNhNjFDekpaZi9TZkNOd0Jyam9zRwp0b215WEJWNVZTVGJUYVk1OFZrLzFPK1NSc3BybjF3TDc0djdXUXVEaE9ydXhBRXpuYmRXWWxOMEZBMm5MTjlZCmwxWkVKUUlEQVFBQm95Y3dKVEFPQmdOVkhROEJBZjhFQkFNQ0JhQXdFd1lEVlIwbEJBd3dDZ1lJS3dZQkJRVUgKQXdJd0RRWUpLb1pJaHZjTkFRRUxCUUFEZ2dFQkFHazlIRDAxRmRRUnd4THhGUi8yRjdPM2ZpdGRFV3pDTC9UawpsZUxZaGlQaVh3NjNwOGtWU0VabEIyNEYzNEd2WlB3YS9LWnNUQnZXM0Mwek9uNGpHQ2hueHEvaVdqTWFnVEdBCktPUFV2bUI2VzhvVzhlb0lrSStOOEs0NFhSRnZzeGIwNUtqaCtwd0VZZzJUQXpBNEFlQzlnSjZYaTBzbHpnVnIKcWRzbXZtV0QzNEdXYzJOcVIzSDA3cW43RlJwRHIrTjlrTHE4Ukt4L0YwMWNCV1I3VVRZcnJTLzJEQ2t1N3lsWgptdTcwcXZicndYWnF6TkI5b05hQk82SHJsZXpuU2JQbnFKZUo0Q1czc2NMNmJ1N3A3bEppV1VQb0VHT0xic3YvCnFjT0xqdnZSRFF6eC9Xak5DWFZLNFhxbzJjVERGYitXeFJ1U2xGaUlQclk1QjlkQlFJWT0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=    client-key-data: LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFb2dJQkFBS0NBUUVBcnZrTzgxSDRlb3NqTmQzeksvVFBIR3BrQkdRb2ZtYW5vZXY0ZVlzZlE5T2VtMGMwCm9VQndxejEzYlpuYlRuYnB4UWpuZ1kyRzhscXhSaTBpQnZQNmZrZktGRUJWc1E3eHRpamVwa3ZwclhHTy9PMFEKQTVTSTg0cnNONUc5WE5ralBtZ3NhMGVuVnE1RW9FMEZUWjV6UUY5cFJZMVlGWWV2K0wxNW1ORWl5UnFIOFAyUQpjcGhSbFYrT0hRdUdpV0s0SEhFUHZBbDZBSkl5Y3p3c1ljK3ZNSHR5WW5heTVDMFJXVVh4clJnNGcrSjJLK2NYCnViUXR6WFd2N3FpM2E2MUN6SlpmL1NmQ053QnJqb3NHdG9teVhCVjVWU1RiVGFZNThWay8xTytTUnNwcm4xd0wKNzR2N1dRdURoT3J1eEFFem5iZFdZbE4wRkEybkxOOVlsMVpFSlFJREFRQUJBb0lCQUI4OHI0S1krN2RFNThCUwpJM3VSZFBncHRqbGllQ2c0dzJ5UTZBY3E0eVlFdmFnVENqNVBkczNiWjFyVndPVTlMWGJUcENEbzExS2xCa2owCi9jSW9CR3hPL0xDbzI2T0VlM3A5eVdIKzQzVG5kUk9LYnZWMHF3NXZtc1JBN0lHSzhsUE4zVUE1eHBJZkFubHIKeHFxWXd4S1c5Z0JJdjVUNGFGNEwxWTJHcUtNbUlhenVjLzVleU5rZjk3bnRyOFJncXQxcDJyaWJIVS9nRzFlYgpIWktyNm01UWx2MWJpYTFIYms2SWI2b1pYTVFIWWJSckpVemJSaWp6eE1RVkRmZ2tpalhSR3pSRjdZeVFZbTk5CmwwUzI1bDYzY1dIT3J6czM5R21xRmQ4Z0JJc0M3SkxuUThUY01nb1Axb0M5WXUzMGRrSDBvUi95M2lOTnFxRW8KZVJ2d0w0RUNnWUVBeG1tY2JDZXRlRDI5VWZDTE1kKzByTU14aVV4bHI3TTdrYUJOeWxPK2lOZWxKbUk5UHRXcwpkUzQzS2hkeElnSVNIQVRTdWxpR3VKMStEekxTWWNGZ2FkSmQxd25NNHppOUc2cW9NOXZTTVN2ZGtvK28ydXRqCmNscVBZcnVRbC9nK252dkE2N1ZyZzAyUXF0NFlqcmkrYmxQL1RNaDZGS3NGa0VQeXZPTHUxOTBDZ1lFQTRjSFgKUm43WUl2TWtMNGQrR3dkUmRwcXl5YStxVC9nbUtKTnNwb3VLUVZlaUd3aW9vR21BR0E0MEJBR2hyN24vMXB6Rwo5VkVQb201VDdPRnVmVWxGaUNURmJBblN2RWU5RTREUHJ3SDNhazlXR0JzcWxYcUZwMjdwWWFyZ3NSS2JDWU9UCm9Nc1FJR0wxelN4NEpkdFArMUxDQ1BuRnowMTNkajhRbmc4TVBPa0NnWUFwczF5cTVwUHc1NWo0dGNPcmtjYloKWUpUeXRGblMyYXExYXFtdTBuY0RMNytJRjdHam1Ta0wzOUM4U2Z6L0ZzeFRremZ1N2xneVNQZUxualRWVXQwKwpvSFlVa2Z5NzdOcmlDN1lhWUNNSExwNzlCTENLZ2xwK1dFWTJqQkZSdjF6NThST1U5cVpJREc5UldpaHpKcVR2CmJ6d0RHVWQvUElxSXpaOGd6OWsvQ1FLQmdIbEFRaDVEdkZReElNdENTM0c2NFg4QklXdC9wTXFrcmVIM0pGRGkKKzFPUy9LYm1aS01iWnNnRXdOMHgveVJCa3U0eWNBMk1Cd2lubHYzUUtpYXlOdDBqV3NGbkdUODBqSkd3Q2x1bApnN3dlZGxBbUx4M3ZtMTlOQzU0QVNBUHl5VUEzNGc5bllQYjBENjZ0NXEzMmQ2TzFWQys3N3dralF6bElMK1drCmtWOFpBb0dBVk01R1lLbnpNVjUzVzNXT3I0dFdLSm5XUHFiaHVlUEt5SXMzbTNkUzhGUE56SDU2UHhNKzRUM24Ka2NzT1VsZTlkQkFENXRXT3E5eHFmNWF4MXpaU2s1SzFhdUphSzRaa3RzNkdMRUgrU09WckdoK1JXQWtRcUFVbgo0Qmk4ZVA4MmR5M3N2RmV1UkNvTWFXRVQ0QlFHaGRQaFFCd1NNdlYrSWI2R3U0VldwN289Ci0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0tCg==
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中属性<code>certificate-authority-data</code>、<code>client-certificate-data</code>、<code>client-key-data</code> 对应 CA 证书、Client 证书、Client 私钥，文件里面的内容是base64编码过后的，分别执行 <code>echo &quot;&quot; | base64 -d</code> 就能还原成证书源文件。</p><p>首先将<code>Datasource</code>设置为<code>Prometheus</code>，</p><p><img src="`+i+'" alt="在这里插入图片描述"></p><p>点击<code>Save</code>保存即可，grafana中自动出现下图中的dashboard，</p><p><img src="'+c+'" alt="在这里插入图片描述"></p><p><img src="'+o+'" alt="在这里插入图片描述"></p><p>K8s Cluster：</p><p><img src="'+u+'" alt="在这里插入图片描述"></p><p>K8s Node：</p><p>没有显示是因为prometheus的metric有更新，比如<code>node_cpu</code>改成了<code>node_cpu_seconds_total</code>。可以重新定义该dashboard的变量（可以参考8919 dashboard的变量），然后根据prometheus界面的metrics来调试。调试完毕示图：</p><p><img src="'+r+'" alt="在这里插入图片描述"></p><p>K8s Deployments：</p><p><img src="'+d+'" alt="在这里插入图片描述"></p><p>K8s Container：</p><p><img src="'+k+`" alt="在这里插入图片描述"></p><p>grafana配置kubernetes数据源完成，接下来测试告警。</p><hr><h3 id="告警测试" tabindex="-1"><a class="header-anchor" href="#告警测试" aria-hidden="true">#</a> 告警测试</h3><ul><li>宕机测试：</li></ul><p>模拟node-exporter宕机，测试钉钉告警（<code>critical</code>）是否正常。这里选择<code>node3</code>作为测试机器。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> kill_node-exporter.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
 
<span class="token assign-left variable">nodepid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">netstat</span> <span class="token parameter variable">-lntp</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">9100</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $NF}&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;/&#39;</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">\`</span></span>
<span class="token assign-left variable">nodenum</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">netstat</span> <span class="token parameter variable">-lntp</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">9100</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> pause <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span>
 
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$nodenum</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">exit</span>
<span class="token keyword">else</span>
    <span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">$nodepid</span>
    <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等待3m，收到钉钉故障告警和恢复告警，</p><p><img src="`+v+'" alt="在这里插入图片描述"></p><p><img src="'+m+`" alt="在这里插入图片描述"></p><ul><li>CPU测试：</li></ul><p>模拟CPU使用率为80%，测试邮件告警（<code>warning</code>)是否正常。这里选择<code>node3</code>作为测试机器。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> stress-ng stress-ng <span class="token parameter variable">-c</span> <span class="token number">0</span> <span class="token parameter variable">-l</span> <span class="token number">80</span>            
<span class="token comment"># -c 指定压力源进程的数量，以匹配在线CPU的数量，0表示加载每个cpu；-l 指定CPU使用率；Ctrl + C 退出</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+b+'" alt="在这里插入图片描述"></p><p>等待5m，收到邮件故障告警和恢复告警，</p><p><img src="'+y+'" alt="在这里插入图片描述"></p><p><img src="'+g+'" alt="在这里插入图片描述"></p><p>测试钉钉和邮件告警均没有问题。更多关于k8s集群的指标监控可以自行配置，此处仅作为演示。</p><p>k8s以Deployment方式部署 prometheus + grafana 完成。生产环境建议使用StatefulSet方式部署集群，大致过程与上面类似。已存放至个人gitee：https://gitee.com/xinbadayt/prometheus.git</p><p>转载至https://blog.csdn.net/miss1181248983/article/details/107673128</p>',132),f=[_];function x(q,N){return s(),a("div",null,f)}const U=n(h,[["render",x],["__file","1.html.vue"]]);export{U as default};
