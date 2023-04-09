import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const t="/assets/1616383973322-6a3359ee.png",p="/assets/1616392720399-f08adc26.png",l="/assets/1616407155699-d87e63cd.png",c={},i=e(`<h1 id="使用prometheus监控kubernetes" tabindex="-1"><a class="header-anchor" href="#使用prometheus监控kubernetes" aria-hidden="true">#</a> 使用Prometheus监控Kubernetes</h1><p><span style="color:red;">以下操作均是在prometheus名称空间内进行。</span></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl create namespace prometheus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_1-部署prometheus" tabindex="-1"><a class="header-anchor" href="#_1-部署prometheus" aria-hidden="true">#</a> 1.部署Prometheus</h1><h2 id="_1-1-使用configmap管理prometheus配置" tabindex="-1"><a class="header-anchor" href="#_1-1-使用configmap管理prometheus配置" aria-hidden="true">#</a> 1.1 使用ConfigMap管理Prometheus配置</h2><h3 id="_1-1-1创建config-yaml文件" tabindex="-1"><a class="header-anchor" href="#_1-1-1创建config-yaml文件" aria-hidden="true">#</a> 1.1.1创建config.yaml文件</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus<span class="token punctuation">-</span>config
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> prometheus
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">prometheus.yml</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    global:
      scrape_interval:     15s 
      evaluation_interval: 15s
    scrape_configs:
      - job_name: &#39;prometheus&#39;
        static_configs:
        - targets: [&#39;localhost:9090&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-2创建configmap" tabindex="-1"><a class="header-anchor" href="#_1-1-2创建configmap" aria-hidden="true">#</a> 1.1.2创建ConfigMap</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> config.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-2-使用deployment部署prometheus" tabindex="-1"><a class="header-anchor" href="#_1-2-使用deployment部署prometheus" aria-hidden="true">#</a> 1.2 使用Deployment部署Prometheus</h2><h3 id="_1-2-1创建prometheus-deploy-yaml文件" tabindex="-1"><a class="header-anchor" href="#_1-2-1创建prometheus-deploy-yaml文件" aria-hidden="true">#</a> 1.2.1创建prometheus_deploy.yaml文件</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 创建service</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> <span class="token string">&quot;Service&quot;</span>
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> prometheus
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9090</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">9090</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> prometheus
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
<span class="token punctuation">---</span>
<span class="token comment"># 创建deployment</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
  <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> prometheus
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> prometheus
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> prometheus
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
        <span class="token key atrule">image</span><span class="token punctuation">:</span> prom/prometheus<span class="token punctuation">:</span>v2.2.1
        <span class="token key atrule">command</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;/bin/prometheus&quot;</span>
        <span class="token key atrule">args</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;--config.file=/etc/prometheus/prometheus.yml&quot;</span>
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">9090</span>
          <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> <span class="token string">&quot;/etc/prometheus&quot;</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus<span class="token punctuation">-</span>config
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus<span class="token punctuation">-</span>config
        <span class="token key atrule">configMap</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus<span class="token punctuation">-</span>config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-2-创建prometheus-deployment与service" tabindex="-1"><a class="header-anchor" href="#_1-2-2-创建prometheus-deployment与service" aria-hidden="true">#</a> 1.2.2 创建prometheus Deployment与Service</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> prometheus_deploy.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-3访问prometheus服务" tabindex="-1"><a class="header-anchor" href="#_1-3访问prometheus服务" aria-hidden="true">#</a> 1.3访问Prometheus服务</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看Prometheus服务</span>
kubectl get svc <span class="token parameter variable">-n</span> prometheus

NAME         TYPE       CLUSTER-IP     EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>          AGE
prometheus   NodePort   <span class="token number">10.96</span>.165.65   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">9090</span>:30525/TCP   25m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，可以通过http://10.1.93.190:30525/ 查看部署的Prometheus服务。</p><p><img src="`+t+`" alt="1_1"></p><h1 id="_2-kubernetes下的服务发现" tabindex="-1"><a class="header-anchor" href="#_2-kubernetes下的服务发现" aria-hidden="true">#</a> 2.Kubernetes下的服务发现</h1><p>原理：==Prometheus通过与kubernetes API的交互，实现动态发现kubernetes中部署的所有可监控的目标资源。==</p><h2 id="_2-1kubernetes访问授权" tabindex="-1"><a class="header-anchor" href="#_2-1kubernetes访问授权" aria-hidden="true">#</a> 2.1kubernetes访问授权</h2><p>为了能够让Prometheus能够访问受到认证保护的Kubernetes API，我们需要对Prometheus进行访问授权。授权方法为：<strong>定义ClusterRole并赋予相应访问权限 ---&gt;创建ServiceAccount ---&gt;将ServiceAccount与ClusterRole进行绑定(即创建ClusterRoleBinding)</strong>。可以通过yaml文件完成以上操作。</p><h3 id="_2-2-1创建rbac-yaml文件" tabindex="-1"><a class="header-anchor" href="#_2-2-1创建rbac-yaml文件" aria-hidden="true">#</a> 2.2.1创建rbac.yaml文件</h3><p><span style="color:red;">注意：ClusterRole是全局的，不需要指定namespace；ServiceAccount是属于特定名称空间的，需要指定名称空间(prometheus)。</span></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
<span class="token key atrule">rules</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> nodes
  <span class="token punctuation">-</span> nodes/proxy
  <span class="token punctuation">-</span> services
  <span class="token punctuation">-</span> endpoints
  <span class="token punctuation">-</span> pods
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;watch&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> extensions
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> ingresses
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;watch&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">-</span> <span class="token key atrule">nonResourceURLs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/metrics&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> prometheus
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRoleBinding
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
  <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
  <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> prometheus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-2-访问授权" tabindex="-1"><a class="header-anchor" href="#_2-2-2-访问授权" aria-hidden="true">#</a> 2.2.2 访问授权</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> rbac.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-2使用指定的serviceaccount创建pod" tabindex="-1"><a class="header-anchor" href="#_2-2使用指定的serviceaccount创建pod" aria-hidden="true">#</a> 2.2使用指定的ServiceAccount创建Pod</h2><h3 id="_2-2-1修改prometheus-deploy-yaml文件" tabindex="-1"><a class="header-anchor" href="#_2-2-1修改prometheus-deploy-yaml文件" aria-hidden="true">#</a> 2.2.1修改prometheus_deploy.yaml文件</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> prometheus
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> prometheus
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token comment"># 添加ServiceAccountName和ServiceAccount</span>
      <span class="token key atrule">serviceAccountName</span><span class="token punctuation">:</span> prometheus
      <span class="token key atrule">serviceAccount</span><span class="token punctuation">:</span> prometheus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-2-升级deployment" tabindex="-1"><a class="header-anchor" href="#_2-2-2-升级deployment" aria-hidden="true">#</a> 2.2.2 升级Deployment</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>kubectl apply <span class="token punctuation">-</span>f prometheus_deploy.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-3-查看证书" tabindex="-1"><a class="header-anchor" href="#_2-2-3-查看证书" aria-hidden="true">#</a> 2.2.3 查看证书</h3><p>指定ServiceAccount创建的Pod，会自动将用于访问Kubernetes API的CA证书以及当前账户对应的访问令牌文件挂载到Pod实例的 /var/run/secrets/kubernetes.io/serviceaccount/ 目录下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看pod名字</span>
<span class="token punctuation">[</span>root@master prometheus<span class="token punctuation">]</span><span class="token comment"># kubectl get pod -n prometheus</span>
NAME                          READY   STATUS    RESTARTS   AGE
prometheus-5674f89f9f-shcqw   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          5m45s

<span class="token comment"># 查看pod的/var/run/secrets/kubernetes.io/serviceaccount/目录下文件列表</span>
<span class="token punctuation">[</span>root@master prometheus<span class="token punctuation">]</span><span class="token comment"># kubectl exec -it prometheus-5674f89f9f-shcqw -n prometheus -- ls /var/run/secrets/kubernetes.io/serviceaccount/</span>
ca.crt     namespace  token
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3服务发现" tabindex="-1"><a class="header-anchor" href="#_2-3服务发现" aria-hidden="true">#</a> 2.3服务发现</h2><p>目前，Prometheus通过Kubernetes API目前主要支持5种服务发现模式，包括<code>Node</code>、<code>Service</code>、<code>Pod</code>、<code>Endpoints</code>、<code>Ingress</code>。</p><h3 id="_2-3-1部署node-exporter" tabindex="-1"><a class="header-anchor" href="#_2-3-1部署node-exporter" aria-hidden="true">#</a> 2.3.1部署Node Exporter</h3><p>在Prometheus的架构设计中，Prometheus server并不直接服务监控的特定目标，其主要负责数据的收集、存储以及对外提供数据查询支持。因此，为了能够监控到某些东西(如主机的CPU使用率)，我们需要使用Node Exporter。==Prometheus周期性的从Node Exporter暴露的HTTP服务地址(通常是http://IP:port/netrices)拉取监控样本数据。==</p><h4 id="_2-3-1-1创建node-exporter-yaml文件" tabindex="-1"><a class="header-anchor" href="#_2-3-1-1创建node-exporter-yaml文件" aria-hidden="true">#</a> 2.3.1.1创建node_exporter.yaml文件</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> DaemonSet
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> prometheus
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> prom/node<span class="token punctuation">-</span>exporter
        <span class="token key atrule">name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">9100</span>
          <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
          <span class="token key atrule">name</span><span class="token punctuation">:</span> http
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
  <span class="token key atrule">name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> prometheus
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> http
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9100</span>
    <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">31672</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-1-2创建node-exporter-daemonset与service" tabindex="-1"><a class="header-anchor" href="#_2-3-1-2创建node-exporter-daemonset与service" aria-hidden="true">#</a> 2.3.1.2创建Node Exporter DaemonSet与Service</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 部署</span>
<span class="token punctuation">[</span>root@master prometheus<span class="token punctuation">]</span>kubectl apply <span class="token parameter variable">-f</span> node_exporter.yaml

<span class="token comment"># 查看服务：Node Exporter服务外部访问端口号为31672</span>
<span class="token punctuation">[</span>root@master prometheus<span class="token punctuation">]</span><span class="token comment"># kubectl get service -n prometheus</span>
NAME            TYPE       CLUSTER-IP     EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>          AGE
node-exporter   NodePort   <span class="token number">10.96</span>.55.154   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">9100</span>:31672/TCP   43m
prometheus      NodePort   <span class="token number">10.96</span>.165.65   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">9090</span>:30525/TCP   6h34m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-2修改config-yaml文件" tabindex="-1"><a class="header-anchor" href="#_2-3-2修改config-yaml文件" aria-hidden="true">#</a> 2.3.2修改config.yaml文件</h3><p>以下通过修改config.yaml文件实现Prometheus对以上5种服务的监控：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus<span class="token punctuation">-</span>config
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> prometheus
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">prometheus.yml</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span>
    <span class="token key atrule">global</span><span class="token punctuation">:</span>
      <span class="token key atrule">scrape_interval</span><span class="token punctuation">:</span>     15s 
      <span class="token key atrule">evaluation_interval</span><span class="token punctuation">:</span> 15s
    <span class="token key atrule">scrape_configs</span><span class="token punctuation">:</span>

    <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;kubernetes-nodes&#39;</span>
      <span class="token key atrule">tls_config</span><span class="token punctuation">:</span>
        <span class="token key atrule">ca_file</span><span class="token punctuation">:</span> /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
      <span class="token key atrule">bearer_token_file</span><span class="token punctuation">:</span> /var/run/secrets/kubernetes.io/serviceaccount/token
      <span class="token key atrule">kubernetes_sd_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> node
      <span class="token comment"># Prometheus在发现Node模式的服务时，访问端口默认是10250，是需要认证的https协议才有权访问的。实际上我们并不是希望访问10250端口的/metrics，而是访问Node Exporter的/metrics。以下是将10250端口替换为Node Exporter的端口(即31672，端口查询方法在标题2.3.1.2中)</span>
      <span class="token key atrule">relabel_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__address__<span class="token punctuation">]</span>
        <span class="token key atrule">regex</span><span class="token punctuation">:</span> <span class="token string">&#39;(.*):10250&#39;</span>
        <span class="token key atrule">replacement</span><span class="token punctuation">:</span> <span class="token string">&#39;\${1}:31672&#39;</span>
        <span class="token key atrule">target_label</span><span class="token punctuation">:</span> __address__
        <span class="token key atrule">action</span><span class="token punctuation">:</span> replace

    <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;kubernetes-service&#39;</span>
      <span class="token key atrule">tls_config</span><span class="token punctuation">:</span>
        <span class="token key atrule">ca_file</span><span class="token punctuation">:</span> /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
      <span class="token key atrule">bearer_token_file</span><span class="token punctuation">:</span> /var/run/secrets/kubernetes.io/serviceaccount/token
      <span class="token key atrule">kubernetes_sd_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> service

    <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;kubernetes-endpoints&#39;</span>
      <span class="token key atrule">tls_config</span><span class="token punctuation">:</span>
        <span class="token key atrule">ca_file</span><span class="token punctuation">:</span> /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
      <span class="token key atrule">bearer_token_file</span><span class="token punctuation">:</span> /var/run/secrets/kubernetes.io/serviceaccount/token
      <span class="token key atrule">kubernetes_sd_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> endpoints

    <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;kubernetes-ingress&#39;</span>
      <span class="token key atrule">tls_config</span><span class="token punctuation">:</span>
        <span class="token key atrule">ca_file</span><span class="token punctuation">:</span> /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
      <span class="token key atrule">bearer_token_file</span><span class="token punctuation">:</span> /var/run/secrets/kubernetes.io/serviceaccount/token
      <span class="token key atrule">kubernetes_sd_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> ingress

    <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;kubernetes-pods&#39;</span>
      <span class="token key atrule">tls_config</span><span class="token punctuation">:</span>
        <span class="token key atrule">ca_file</span><span class="token punctuation">:</span> /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
      <span class="token key atrule">bearer_token_file</span><span class="token punctuation">:</span> /var/run/secrets/kubernetes.io/serviceaccount/token
      <span class="token key atrule">kubernetes_sd_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> pod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-3更新prometheus" tabindex="-1"><a class="header-anchor" href="#_2-3-3更新prometheus" aria-hidden="true">#</a> 2.3.3更新Prometheus</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 更新Prometheus配置文件</span>
kubectl apply <span class="token parameter variable">-f</span> config.yaml
configmap/prometheus-config configured

<span class="token comment"># 查看pod名称，删除pod实例</span>
<span class="token punctuation">[</span>root@master prometheus<span class="token punctuation">]</span><span class="token comment"># kubectl get pod -n prometheus</span>
NAME                          READY   STATUS    RESTARTS   AGE
prometheus-5674f89f9f-shcqw   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          21m
<span class="token punctuation">[</span>root@master prometheus<span class="token punctuation">]</span><span class="token comment"># kubectl delete pod prometheus-5674f89f9f-shcqw -n prometheus</span>
pod <span class="token string">&quot;prometheus-5674f89f9f-shcqw&quot;</span> deleted

<span class="token comment"># 再次查看pod名称，与上方不一致，Prometheus实例重建成功</span>
<span class="token punctuation">[</span>root@master prometheus<span class="token punctuation">]</span><span class="token comment"># kubectl get pod -n prometheus</span>
NAME                          READY   STATUS    RESTARTS   AGE
prometheus-5674f89f9f-2s48w   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          20s

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-4访问prometheus服务" tabindex="-1"><a class="header-anchor" href="#_2-3-4访问prometheus服务" aria-hidden="true">#</a> 2.3.4访问Prometheus服务</h3><h4 id="_2-3-4-1-访问service-discovery页面" tabindex="-1"><a class="header-anchor" href="#_2-3-4-1-访问service-discovery页面" aria-hidden="true">#</a> 2.3.4.1 访问Service Discovery页面</h4><p>Prometheus更新完成后，访问http://10.1.93.190:30525/，通过<code>Status ---&gt;Service Discovery</code>页面，可以查看到Prometheus监控到Kubernetes的<code>Node</code>、<code>Service</code>、<code>Pod</code>、<code>Endpoints</code>、<code>Ingress</code> 5种资源对象了。</p><p><img src="`+p+'" alt="1616392720399"></p><h4 id="_2-3-4-2访问targets页面" tabindex="-1"><a class="header-anchor" href="#_2-3-4-2访问targets页面" aria-hidden="true">#</a> 2.3.4.2访问Targets页面</h4><p><img src="'+l+'" alt="1616407155699"></p><p>附：关于以上红色错误信息，可以后期研究prometheus.yml文件中的<code>relabel_configs</code>编写规则进行改正。</p><h1 id="_3-其他参考文档" tabindex="-1"><a class="header-anchor" href="#_3-其他参考文档" aria-hidden="true">#</a> 3.其他参考文档</h1><p>k8s 部署prometheus+grafana：https://blog.csdn.net/vic_qxz/article/details/109347645</p><p>其中<code>prometheus/config.yaml</code> 文件中的IP需要改成自己的IP。</p>',58),o=[i];function u(r,d){return s(),a("div",null,o)}const v=n(c,[["render",u],["__file","2.html.vue"]]);export{v as default};
