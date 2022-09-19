import{_ as n,c as s}from"./app.a1031244.js";var a="/assets/1616383973322.6a3359ee.png",e="/assets/1616392720399.f08adc26.png",p="/assets/1616407155699.d87e63cd.png";const t={},l=s(`<h1 id="\u4F7F\u7528prometheus\u76D1\u63A7kubernetes" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528prometheus\u76D1\u63A7kubernetes" aria-hidden="true">#</a> \u4F7F\u7528Prometheus\u76D1\u63A7Kubernetes</h1><p><span style="color:red;">\u4EE5\u4E0B\u64CD\u4F5C\u5747\u662F\u5728prometheus\u540D\u79F0\u7A7A\u95F4\u5185\u8FDB\u884C\u3002</span></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl create namespace prometheus
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="_1-\u90E8\u7F72prometheus" tabindex="-1"><a class="header-anchor" href="#_1-\u90E8\u7F72prometheus" aria-hidden="true">#</a> 1.\u90E8\u7F72Prometheus</h1><h2 id="_1-1-\u4F7F\u7528configmap\u7BA1\u7406prometheus\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4F7F\u7528configmap\u7BA1\u7406prometheus\u914D\u7F6E" aria-hidden="true">#</a> 1.1 \u4F7F\u7528ConfigMap\u7BA1\u7406Prometheus\u914D\u7F6E</h2><h3 id="_1-1-1\u521B\u5EFAconfig-yaml\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-1-1\u521B\u5EFAconfig-yaml\u6587\u4EF6" aria-hidden="true">#</a> 1.1.1\u521B\u5EFAconfig.yaml\u6587\u4EF6</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="_1-1-2\u521B\u5EFAconfigmap" tabindex="-1"><a class="header-anchor" href="#_1-1-2\u521B\u5EFAconfigmap" aria-hidden="true">#</a> 1.1.2\u521B\u5EFAConfigMap</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl apply -f config.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_1-2-\u4F7F\u7528deployment\u90E8\u7F72prometheus" tabindex="-1"><a class="header-anchor" href="#_1-2-\u4F7F\u7528deployment\u90E8\u7F72prometheus" aria-hidden="true">#</a> 1.2 \u4F7F\u7528Deployment\u90E8\u7F72Prometheus</h2><h3 id="_1-2-1\u521B\u5EFAprometheus-deploy-yaml\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-2-1\u521B\u5EFAprometheus-deploy-yaml\u6587\u4EF6" aria-hidden="true">#</a> 1.2.1\u521B\u5EFAprometheus_deploy.yaml\u6587\u4EF6</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u521B\u5EFAservice</span>
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
<span class="token comment"># \u521B\u5EFAdeployment</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><h3 id="_1-2-2-\u521B\u5EFAprometheus-deployment\u4E0Eservice" tabindex="-1"><a class="header-anchor" href="#_1-2-2-\u521B\u5EFAprometheus-deployment\u4E0Eservice" aria-hidden="true">#</a> 1.2.2 \u521B\u5EFAprometheus Deployment\u4E0EService</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl apply -f prometheus_deploy.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_1-3\u8BBF\u95EEprometheus\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_1-3\u8BBF\u95EEprometheus\u670D\u52A1" aria-hidden="true">#</a> 1.3\u8BBF\u95EEPrometheus\u670D\u52A1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770BPrometheus\u670D\u52A1</span>
kubectl get svc -n prometheus

NAME         TYPE       CLUSTER-IP     EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>          AGE
prometheus   NodePort   <span class="token number">10.96</span>.165.65   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">9090</span>:30525/TCP   25m
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u81F3\u6B64\uFF0C\u53EF\u4EE5\u901A\u8FC7http://10.1.93.190:30525/ \u67E5\u770B\u90E8\u7F72\u7684Prometheus\u670D\u52A1\u3002</p><p><img src="`+a+`" alt="1_1"></p><h1 id="_2-kubernetes\u4E0B\u7684\u670D\u52A1\u53D1\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-kubernetes\u4E0B\u7684\u670D\u52A1\u53D1\u73B0" aria-hidden="true">#</a> 2.Kubernetes\u4E0B\u7684\u670D\u52A1\u53D1\u73B0</h1><p>\u539F\u7406\uFF1A==Prometheus\u901A\u8FC7\u4E0Ekubernetes API\u7684\u4EA4\u4E92\uFF0C\u5B9E\u73B0\u52A8\u6001\u53D1\u73B0kubernetes\u4E2D\u90E8\u7F72\u7684\u6240\u6709\u53EF\u76D1\u63A7\u7684\u76EE\u6807\u8D44\u6E90\u3002==</p><h2 id="_2-1kubernetes\u8BBF\u95EE\u6388\u6743" tabindex="-1"><a class="header-anchor" href="#_2-1kubernetes\u8BBF\u95EE\u6388\u6743" aria-hidden="true">#</a> 2.1kubernetes\u8BBF\u95EE\u6388\u6743</h2><p>\u4E3A\u4E86\u80FD\u591F\u8BA9Prometheus\u80FD\u591F\u8BBF\u95EE\u53D7\u5230\u8BA4\u8BC1\u4FDD\u62A4\u7684Kubernetes API\uFF0C\u6211\u4EEC\u9700\u8981\u5BF9Prometheus\u8FDB\u884C\u8BBF\u95EE\u6388\u6743\u3002\u6388\u6743\u65B9\u6CD5\u4E3A\uFF1A<strong>\u5B9A\u4E49ClusterRole\u5E76\u8D4B\u4E88\u76F8\u5E94\u8BBF\u95EE\u6743\u9650 ---&gt;\u521B\u5EFAServiceAccount ---&gt;\u5C06ServiceAccount\u4E0EClusterRole\u8FDB\u884C\u7ED1\u5B9A(\u5373\u521B\u5EFAClusterRoleBinding)</strong>\u3002\u53EF\u4EE5\u901A\u8FC7yaml\u6587\u4EF6\u5B8C\u6210\u4EE5\u4E0A\u64CD\u4F5C\u3002</p><h3 id="_2-2-1\u521B\u5EFArbac-yaml\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-2-1\u521B\u5EFArbac-yaml\u6587\u4EF6" aria-hidden="true">#</a> 2.2.1\u521B\u5EFArbac.yaml\u6587\u4EF6</h3><p><span style="color:red;">\u6CE8\u610F\uFF1AClusterRole\u662F\u5168\u5C40\u7684\uFF0C\u4E0D\u9700\u8981\u6307\u5B9Anamespace\uFF1BServiceAccount\u662F\u5C5E\u4E8E\u7279\u5B9A\u540D\u79F0\u7A7A\u95F4\u7684\uFF0C\u9700\u8981\u6307\u5B9A\u540D\u79F0\u7A7A\u95F4(prometheus)\u3002</span></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h3 id="_2-2-2-\u8BBF\u95EE\u6388\u6743" tabindex="-1"><a class="header-anchor" href="#_2-2-2-\u8BBF\u95EE\u6388\u6743" aria-hidden="true">#</a> 2.2.2 \u8BBF\u95EE\u6388\u6743</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl apply -f rbac.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2-2\u4F7F\u7528\u6307\u5B9A\u7684serviceaccount\u521B\u5EFApod" tabindex="-1"><a class="header-anchor" href="#_2-2\u4F7F\u7528\u6307\u5B9A\u7684serviceaccount\u521B\u5EFApod" aria-hidden="true">#</a> 2.2\u4F7F\u7528\u6307\u5B9A\u7684ServiceAccount\u521B\u5EFAPod</h2><h3 id="_2-2-1\u4FEE\u6539prometheus-deploy-yaml\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-2-1\u4FEE\u6539prometheus-deploy-yaml\u6587\u4EF6" aria-hidden="true">#</a> 2.2.1\u4FEE\u6539prometheus_deploy.yaml\u6587\u4EF6</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> prometheus
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> prometheus
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token comment"># \u6DFB\u52A0ServiceAccountName\u548CServiceAccount</span>
      <span class="token key atrule">serviceAccountName</span><span class="token punctuation">:</span> prometheus
      <span class="token key atrule">serviceAccount</span><span class="token punctuation">:</span> prometheus
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_2-2-2-\u5347\u7EA7deployment" tabindex="-1"><a class="header-anchor" href="#_2-2-2-\u5347\u7EA7deployment" aria-hidden="true">#</a> 2.2.2 \u5347\u7EA7Deployment</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>kubectl apply <span class="token punctuation">-</span>f prometheus_deploy.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2-2-3-\u67E5\u770B\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_2-2-3-\u67E5\u770B\u8BC1\u4E66" aria-hidden="true">#</a> 2.2.3 \u67E5\u770B\u8BC1\u4E66</h3><p>\u6307\u5B9AServiceAccount\u521B\u5EFA\u7684Pod\uFF0C\u4F1A\u81EA\u52A8\u5C06\u7528\u4E8E\u8BBF\u95EEKubernetes API\u7684CA\u8BC1\u4E66\u4EE5\u53CA\u5F53\u524D\u8D26\u6237\u5BF9\u5E94\u7684\u8BBF\u95EE\u4EE4\u724C\u6587\u4EF6\u6302\u8F7D\u5230Pod\u5B9E\u4F8B\u7684 /var/run/secrets/kubernetes.io/serviceaccount/ \u76EE\u5F55\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770Bpod\u540D\u5B57</span>
<span class="token punctuation">[</span>root@master prometheus<span class="token punctuation">]</span><span class="token comment"># kubectl get pod -n prometheus</span>
NAME                          READY   STATUS    RESTARTS   AGE
prometheus-5674f89f9f-shcqw   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          5m45s

<span class="token comment"># \u67E5\u770Bpod\u7684/var/run/secrets/kubernetes.io/serviceaccount/\u76EE\u5F55\u4E0B\u6587\u4EF6\u5217\u8868</span>
<span class="token punctuation">[</span>root@master prometheus<span class="token punctuation">]</span><span class="token comment"># kubectl exec -it prometheus-5674f89f9f-shcqw -n prometheus -- ls /var/run/secrets/kubernetes.io/serviceaccount/</span>
ca.crt     namespace  token
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_2-3\u670D\u52A1\u53D1\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-3\u670D\u52A1\u53D1\u73B0" aria-hidden="true">#</a> 2.3\u670D\u52A1\u53D1\u73B0</h2><p>\u76EE\u524D\uFF0CPrometheus\u901A\u8FC7Kubernetes API\u76EE\u524D\u4E3B\u8981\u652F\u63015\u79CD\u670D\u52A1\u53D1\u73B0\u6A21\u5F0F\uFF0C\u5305\u62EC<code>Node</code>\u3001<code>Service</code>\u3001<code>Pod</code>\u3001<code>Endpoints</code>\u3001<code>Ingress</code>\u3002</p><h3 id="_2-3-1\u90E8\u7F72node-exporter" tabindex="-1"><a class="header-anchor" href="#_2-3-1\u90E8\u7F72node-exporter" aria-hidden="true">#</a> 2.3.1\u90E8\u7F72Node Exporter</h3><p>\u5728Prometheus\u7684\u67B6\u6784\u8BBE\u8BA1\u4E2D\uFF0CPrometheus server\u5E76\u4E0D\u76F4\u63A5\u670D\u52A1\u76D1\u63A7\u7684\u7279\u5B9A\u76EE\u6807\uFF0C\u5176\u4E3B\u8981\u8D1F\u8D23\u6570\u636E\u7684\u6536\u96C6\u3001\u5B58\u50A8\u4EE5\u53CA\u5BF9\u5916\u63D0\u4F9B\u6570\u636E\u67E5\u8BE2\u652F\u6301\u3002\u56E0\u6B64\uFF0C\u4E3A\u4E86\u80FD\u591F\u76D1\u63A7\u5230\u67D0\u4E9B\u4E1C\u897F(\u5982\u4E3B\u673A\u7684CPU\u4F7F\u7528\u7387)\uFF0C\u6211\u4EEC\u9700\u8981\u4F7F\u7528Node Exporter\u3002==Prometheus\u5468\u671F\u6027\u7684\u4ECENode Exporter\u66B4\u9732\u7684HTTP\u670D\u52A1\u5730\u5740(\u901A\u5E38\u662Fhttp://IP:port/netrices)\u62C9\u53D6\u76D1\u63A7\u6837\u672C\u6570\u636E\u3002==</p><h4 id="_2-3-1-1\u521B\u5EFAnode-exporter-yaml\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-3-1-1\u521B\u5EFAnode-exporter-yaml\u6587\u4EF6" aria-hidden="true">#</a> 2.3.1.1\u521B\u5EFAnode_exporter.yaml\u6587\u4EF6</h4><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h4 id="_2-3-1-2\u521B\u5EFAnode-exporter-daemonset\u4E0Eservice" tabindex="-1"><a class="header-anchor" href="#_2-3-1-2\u521B\u5EFAnode-exporter-daemonset\u4E0Eservice" aria-hidden="true">#</a> 2.3.1.2\u521B\u5EFANode Exporter DaemonSet\u4E0EService</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u90E8\u7F72</span>
<span class="token punctuation">[</span>root@master prometheus<span class="token punctuation">]</span>kubectl apply -f node_exporter.yaml

<span class="token comment"># \u67E5\u770B\u670D\u52A1\uFF1ANode Exporter\u670D\u52A1\u5916\u90E8\u8BBF\u95EE\u7AEF\u53E3\u53F7\u4E3A31672</span>
<span class="token punctuation">[</span>root@master prometheus<span class="token punctuation">]</span><span class="token comment"># kubectl get service -n prometheus</span>
NAME            TYPE       CLUSTER-IP     EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>          AGE
node-exporter   NodePort   <span class="token number">10.96</span>.55.154   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">9100</span>:31672/TCP   43m
prometheus      NodePort   <span class="token number">10.96</span>.165.65   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">9090</span>:30525/TCP   6h34m
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_2-3-2\u4FEE\u6539config-yaml\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-3-2\u4FEE\u6539config-yaml\u6587\u4EF6" aria-hidden="true">#</a> 2.3.2\u4FEE\u6539config.yaml\u6587\u4EF6</h3><p>\u4EE5\u4E0B\u901A\u8FC7\u4FEE\u6539config.yaml\u6587\u4EF6\u5B9E\u73B0Prometheus\u5BF9\u4EE5\u4E0A5\u79CD\u670D\u52A1\u7684\u76D1\u63A7\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
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
      <span class="token comment"># Prometheus\u5728\u53D1\u73B0Node\u6A21\u5F0F\u7684\u670D\u52A1\u65F6\uFF0C\u8BBF\u95EE\u7AEF\u53E3\u9ED8\u8BA4\u662F10250\uFF0C\u662F\u9700\u8981\u8BA4\u8BC1\u7684https\u534F\u8BAE\u624D\u6709\u6743\u8BBF\u95EE\u7684\u3002\u5B9E\u9645\u4E0A\u6211\u4EEC\u5E76\u4E0D\u662F\u5E0C\u671B\u8BBF\u95EE10250\u7AEF\u53E3\u7684/metrics\uFF0C\u800C\u662F\u8BBF\u95EENode Exporter\u7684/metrics\u3002\u4EE5\u4E0B\u662F\u5C0610250\u7AEF\u53E3\u66FF\u6362\u4E3ANode Exporter\u7684\u7AEF\u53E3(\u537331672\uFF0C\u7AEF\u53E3\u67E5\u8BE2\u65B9\u6CD5\u5728\u6807\u98982.3.1.2\u4E2D)</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><h3 id="_2-3-3\u66F4\u65B0prometheus" tabindex="-1"><a class="header-anchor" href="#_2-3-3\u66F4\u65B0prometheus" aria-hidden="true">#</a> 2.3.3\u66F4\u65B0Prometheus</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u66F4\u65B0Prometheus\u914D\u7F6E\u6587\u4EF6</span>
kubectl apply -f config.yaml
configmap/prometheus-config configured

<span class="token comment"># \u67E5\u770Bpod\u540D\u79F0\uFF0C\u5220\u9664pod\u5B9E\u4F8B</span>
<span class="token punctuation">[</span>root@master prometheus<span class="token punctuation">]</span><span class="token comment"># kubectl get pod -n prometheus</span>
NAME                          READY   STATUS    RESTARTS   AGE
prometheus-5674f89f9f-shcqw   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          21m
<span class="token punctuation">[</span>root@master prometheus<span class="token punctuation">]</span><span class="token comment"># kubectl delete pod prometheus-5674f89f9f-shcqw -n prometheus</span>
pod <span class="token string">&quot;prometheus-5674f89f9f-shcqw&quot;</span> deleted

<span class="token comment"># \u518D\u6B21\u67E5\u770Bpod\u540D\u79F0\uFF0C\u4E0E\u4E0A\u65B9\u4E0D\u4E00\u81F4\uFF0CPrometheus\u5B9E\u4F8B\u91CD\u5EFA\u6210\u529F</span>
<span class="token punctuation">[</span>root@master prometheus<span class="token punctuation">]</span><span class="token comment"># kubectl get pod -n prometheus</span>
NAME                          READY   STATUS    RESTARTS   AGE
prometheus-5674f89f9f-2s48w   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          20s

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="_2-3-4\u8BBF\u95EEprometheus\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_2-3-4\u8BBF\u95EEprometheus\u670D\u52A1" aria-hidden="true">#</a> 2.3.4\u8BBF\u95EEPrometheus\u670D\u52A1</h3><h4 id="_2-3-4-1-\u8BBF\u95EEservice-discovery\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#_2-3-4-1-\u8BBF\u95EEservice-discovery\u9875\u9762" aria-hidden="true">#</a> 2.3.4.1 \u8BBF\u95EEService Discovery\u9875\u9762</h4><p>Prometheus\u66F4\u65B0\u5B8C\u6210\u540E\uFF0C\u8BBF\u95EEhttp://10.1.93.190:30525/\uFF0C\u901A\u8FC7<code>Status ---&gt;Service Discovery</code>\u9875\u9762\uFF0C\u53EF\u4EE5\u67E5\u770B\u5230Prometheus\u76D1\u63A7\u5230Kubernetes\u7684<code>Node</code>\u3001<code>Service</code>\u3001<code>Pod</code>\u3001<code>Endpoints</code>\u3001<code>Ingress</code> 5\u79CD\u8D44\u6E90\u5BF9\u8C61\u4E86\u3002</p><p><img src="`+e+'" alt="1616392720399"></p><h4 id="_2-3-4-2\u8BBF\u95EEtargets\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#_2-3-4-2\u8BBF\u95EEtargets\u9875\u9762" aria-hidden="true">#</a> 2.3.4.2\u8BBF\u95EETargets\u9875\u9762</h4><p><img src="'+p+'" alt="1616407155699"></p><p>\u9644\uFF1A\u5173\u4E8E\u4EE5\u4E0A\u7EA2\u8272\u9519\u8BEF\u4FE1\u606F\uFF0C\u53EF\u4EE5\u540E\u671F\u7814\u7A76prometheus.yml\u6587\u4EF6\u4E2D\u7684<code>relabel_configs</code>\u7F16\u5199\u89C4\u5219\u8FDB\u884C\u6539\u6B63\u3002</p><h1 id="_3-\u5176\u4ED6\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#_3-\u5176\u4ED6\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> 3.\u5176\u4ED6\u53C2\u8003\u6587\u6863</h1><p>k8s \u90E8\u7F72prometheus+grafana\uFF1Ahttps://blog.csdn.net/vic_qxz/article/details/109347645</p><p>\u5176\u4E2D<code>prometheus/config.yaml</code> \u6587\u4EF6\u4E2D\u7684IP\u9700\u8981\u6539\u6210\u81EA\u5DF1\u7684IP\u3002</p>',58);function c(r,o){return l}var i=n(t,[["render",c],["__file","2.html.vue"]]);export{i as default};
