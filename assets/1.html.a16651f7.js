import{_ as n,c as s}from"./app.9b52f51c.js";var a="/assets/1616552351873.9377980b.png",e="/assets/1616552817376.0ca07ba5.png",p="/assets/20200729191908564.9d9e6b8c.png",t="/assets/20200729191924720.6ea744c1.png",l="/assets/20200729191937113.45296117.png",c="/assets/2020072919195143.485d588d.png",o="/assets/2020072919200356.7e3743de.png",u="/assets/20200729192014827.f0ba1b07.png",r="/assets/2020072919202645.5d7f82a9.png",i="/assets/202007291920401.15162c27.png",k="/assets/20200729192053371.033b751f.png",b="/assets/2020072919210429.12aa2475.png",m="/assets/20200729192120498.0b62f33d.png",d="/assets/20200729192130944.bb5a1632.png",y="/assets/20200729192140965.647db4ac.png";const g={},h=s(`<h1 id="k8s\u90E8\u7F72prometheus-grafana" tabindex="-1"><a class="header-anchor" href="#k8s\u90E8\u7F72prometheus-grafana" aria-hidden="true">#</a> k8s\u90E8\u7F72prometheus + grafana</h1><p>k8s\u4EE5Deployment\u65B9\u5F0F\u90E8\u7F72prometheus + grafana\uFF1A</p><hr><ul><li>\u4E3B\u673A\u8BF4\u660E\uFF1A</li></ul><table><thead><tr><th style="text-align:left;">\u7CFB\u7EDF</th><th style="text-align:left;">ip</th><th style="text-align:left;">\u89D2\u8272</th><th style="text-align:left;">cpu</th><th style="text-align:left;">\u5185\u5B58</th><th style="text-align:left;">hostname</th></tr></thead><tbody><tr><td style="text-align:left;">CentOS 7.8</td><td style="text-align:left;">192.168.30.128</td><td style="text-align:left;">master</td><td style="text-align:left;">&gt;=2</td><td style="text-align:left;">&gt;=2G</td><td style="text-align:left;">master1</td></tr><tr><td style="text-align:left;">CentOS 7.8</td><td style="text-align:left;">192.168.30.129</td><td style="text-align:left;">master</td><td style="text-align:left;">&gt;=2</td><td style="text-align:left;">&gt;=2G</td><td style="text-align:left;">master2</td></tr><tr><td style="text-align:left;">CentOS 7.8</td><td style="text-align:left;">192.168.30.130</td><td style="text-align:left;">node</td><td style="text-align:left;">&gt;=2</td><td style="text-align:left;">&gt;=2G</td><td style="text-align:left;">node1</td></tr><tr><td style="text-align:left;">CentOS 7.8</td><td style="text-align:left;">192.168.30.131</td><td style="text-align:left;">node</td><td style="text-align:left;">&gt;=2</td><td style="text-align:left;">&gt;=2G</td><td style="text-align:left;">node2</td></tr><tr><td style="text-align:left;">CentOS 7.8</td><td style="text-align:left;">192.168.30.132</td><td style="text-align:left;">node</td><td style="text-align:left;">&gt;=2</td><td style="text-align:left;">&gt;=2G</td><td style="text-align:left;">node3</td></tr></tbody></table><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get node</span>
NAME     STATUS   ROLES    AGE    VERSION
master   Ready    master   141d   v1.19.2
node1    Ready    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>   141d   v1.19.2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>\u91C7\u96C6\u65B9\u6848\uFF1A</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>1.\u901A\u8FC7prometheus<span class="token punctuation">-</span>node<span class="token punctuation">-</span>exporter\u91C7\u96C6\u4E3B\u673A\u7684\u6027\u80FD\u6307\u6807\u6570\u636E\uFF0C\u5E76\u901A\u8FC7\u66B4\u9732\u7684 /metrics \u63A5\u53E3\u7528prometheus\u6293\u53D6 

2.\u901A\u8FC7kube<span class="token punctuation">-</span>apiserver\u3001kube<span class="token punctuation">-</span>controller<span class="token punctuation">-</span>manager\u3001kube<span class="token punctuation">-</span>scheduler\u3001etcd\u3001kubelet\u3001kube<span class="token punctuation">-</span>proxy\u81EA\u8EAB\u66B4\u9732\u7684 /metrics \u83B7\u53D6\u8282\u70B9\u4E0A\u4E0Ek8s\u96C6\u7FA4\u76F8\u5173\u7684\u4E00\u4E9B\u6307\u6807\u6570\u636E 

3.\u901A\u8FC7cadvisor\u91C7\u96C6\u5BB9\u5668\u3001Pod\u76F8\u5173\u7684\u6027\u80FD\u6307\u6807\u6570\u636E\uFF0C\u5E76\u901A\u8FC7\u66B4\u9732\u7684 /metrics \u63A5\u53E3\u7528prometheus\u6293\u53D6 \u901A\u8FC7blackbox<span class="token punctuation">-</span>exporter\u91C7\u96C6\u5E94\u7528\u7684\u7F51\u7EDC\u6027\u80FD(http\u3001tcp\u3001icmp\u7B49)\u6570\u636E\uFF0C\u5E76\u901A\u8FC7\u66B4\u9732\u7684 /metrics \u63A5\u53E3\u7528prometheus\u6293\u53D6 

4.\u901A\u8FC7kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics\u91C7\u96C6k8s\u8D44\u6E90\u5BF9\u8C61\u7684\u72B6\u6001\u6307\u6807\u6570\u636E\uFF0C\u5E76\u901A\u8FC7\u66B4\u9732\u7684 /metrics \u63A5\u53E3\u7528prometheus\u6293\u53D6 

5.\u5E94\u7528\u81EA\u5DF1\u91C7\u96C6\u5BB9\u5668\u4E2D\u8FDB\u7A0B\u4E3B\u52A8\u66B4\u9732\u7684\u6307\u6807\u6570\u636E\uFF08\u66B4\u9732\u6307\u6807\u7684\u529F\u80FD\u7531\u5E94\u7528\u81EA\u5DF1\u5B9E\u73B0\uFF0C\u5E76\u6DFB\u52A0\u7EA6\u5B9A\u7684annotation\uFF0Cprometheus\u8D1F\u8D23\u6839\u636Eannotation\u5B9E\u73B0\u6293\u53D6\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>\u6293\u53D6\u4ECB\u7ECD\uFF1A</li></ul><p>Kubernetes\u53EF\u4EE5\u7EA6\u5B9A\u597D\u5E26\u54EA\u4E9Bannotation\u524D\u7F00\u7684\u670D\u52A1\u662F\u81EA\u4E3B\u66B4\u9732\u76D1\u63A7\u6307\u6807\u7684\u670D\u52A1\u3002\u5E94\u7528\u6DFB\u52A0\u7EA6\u5B9A\u7684\u8FD9\u4E9Bannotations\uFF0CPrometheus\u53EF\u4EE5\u6839\u636Eannotation\u5B9E\u73B0\u6293\u53D6\u3002\u4F8B\u5982\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>prometheus.io/scrape<span class="token operator">:</span> &#39;<span class="token boolean">true</span>&#39;    # \u83B7\u77E5\u5BF9\u5E94\u7684endpoint\u662F\u9700\u8981\u88ABscrape\u7684 
prometheus.io/app-metrics<span class="token operator">:</span> &#39;<span class="token boolean">true</span>&#39;   # \u83B7\u77E5\u5BF9\u5E94\u7684endpoint\u4E2D\u6709\u5E94\u7528\u8FDB\u7A0B\u66B4\u9732\u7684metrics 
prometheus.io/app-metrics-port<span class="token operator">:</span> &#39;<span class="token number">8080</span>&#39;  # \u83B7\u77E5\u8FDB\u7A0B\u66B4\u9732\u7684metrics\u7684\u7AEF\u53E3 
prometheus.io/app-metrics-path<span class="token operator">:</span> &#39;/metrics&#39;  # \u83B7\u77E5\u8FDB\u7A0B\u66B4\u9732\u7684metrics\u7684\u5177\u4F53\u8DEF\u5F84
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5E94\u7528\u53EF\u4EE5\u5728service\u4E2D\u6307\u5B9A\u7EA6\u5B9A\u7684annotation\uFF0C\u5B9E\u73B0Prometheus\u5BF9\u8BE5\u5E94\u7528\u7684\u7F51\u7EDC\u670D\u52A1\u8FDB\u884C\u63A2\u6D4B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>http\u63A2\u6D4B<span class="token operator">:</span>
	prometheus.io/scrape<span class="token operator">:</span> &#39;<span class="token boolean">true</span>&#39;    
	prometheus.io/http-probe<span class="token operator">:</span> &#39;<span class="token boolean">true</span>&#39;    
	prometheus.io/http-probe-port<span class="token operator">:</span> &#39;<span class="token number">8080</span>&#39;    
	prometheus.io/http-probe-path<span class="token operator">:</span> &#39;/healthz&#39; 
tcp\u63A2\u6D4B<span class="token operator">:</span>
	prometheus.io/scrape<span class="token operator">:</span> &#39;<span class="token boolean">true</span>&#39;    
	prometheus.io/tcp-probe<span class="token operator">:</span> &#39;<span class="token boolean">true</span>&#39;    
	prometheus.io/tcp-probe-port<span class="token operator">:</span> &#39;<span class="token number">80</span>&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Prometheus\u6839\u636E\u8FD9\u4E9Bannotations\u53EF\u4EE5\u83B7\u77E5\u76F8\u5E94service\u662F\u9700\u8981\u88AB\u63A2\u6D4B\u7684\uFF0C\u63A2\u6D4B\u7684\u7F51\u7EDC\u534F\u8BAE\u53EF\u4EE5\u662Fhttp\u3001tcp\u6216\u5176\u4ED6\uFF0C\u4EE5\u53CA\u5177\u4F53\u7684\u63A2\u6D4B\u7AEF\u53E3\u3002http\u63A2\u6D4B\u9700\u8981\u77E5\u9053\u63A2\u6D4B\u7684\u5177\u4F53url\u3002</p><hr><h3 id="namespace" tabindex="-1"><a class="header-anchor" href="#namespace" aria-hidden="true">#</a> namespace</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /home/k8s/monitoring/<span class="token punctuation">{</span>node-exporter,k8s,kube-state-metrics,blackbox-exporter,dingtalk,alertmanager,prometheus,grafana<span class="token punctuation">}</span> 

<span class="token builtin class-name">cd</span> /home/k8s/monitoring 

<span class="token function">vim</span> namespace.yaml

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Namespace
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>  
  <span class="token key atrule">name</span><span class="token punctuation">:</span> monitoring
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><hr><h3 id="node-exporter" tabindex="-1"><a class="header-anchor" href="#node-exporter" aria-hidden="true">#</a> node-exporter</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> node-exporter/node-exporter.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><hr><h3 id="k8s\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#k8s\u7EC4\u4EF6" aria-hidden="true">#</a> k8s\u7EC4\u4EF6</h3><p>==controller-manager\uFF1A==</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> k8s/kube-controller-manager-prometheus-discovery.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>==kube-scheduler\uFF1A==</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> k8s/kube-scheduler-prometheus-discovery.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>==kube-proxy\uFF1A==</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> k8s/kube-proxy-prometheus-discovery.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><hr><h3 id="kube-state-metrics" tabindex="-1"><a class="header-anchor" href="#kube-state-metrics" aria-hidden="true">#</a> kube-state-metrics</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> kube-state-metrics/rbac.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> kube-state-metrics/kube-state-metrics.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
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
        <span class="token key atrule">image</span><span class="token punctuation">:</span> quay.mirrors.ustc.edu.cn/coreos/kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics<span class="token punctuation">:</span>v1.8.0                <span class="token comment"># kube-state-metrics:v1.9.7 \u9002\u7528\u4E8EKubernetes 1.16\u4EE5\u4E0A\u7248\u672C</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><hr><h3 id="blackbox-exporter" tabindex="-1"><a class="header-anchor" href="#blackbox-exporter" aria-hidden="true">#</a> blackbox-exporter</h3><p>blackbox-exporter\u662F\u4E00\u4E2A\u9ED1\u76D2\u63A2\u6D4B\u5DE5\u5177\uFF0C\u53EF\u4EE5\u5BF9\u670D\u52A1\u7684http\u3001tcp\u3001icmp\u7B49\u8FDB\u884C\u7F51\u7EDC\u63A2\u6D4B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> blackbox-exporter/config.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> blackbox-exporter/blackbox-exporter.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
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

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br></div></div><blockquote><p>\u6CE8\u610F\uFF1A blackbox-exporter\u7684\u914D\u7F6E\u6587\u4EF6\u4E3A <code>/etc/blackbox_exporter/blackbox.yml</code>\uFF0C \u8FD0\u884C\u65F6\u53EF\u4EE5\u52A8\u6001\u91CD\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u5F53\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\u5931\u8D25\u65F6\uFF0C\u4E0D\u5F71\u54CD\u8FD0\u884C\u4E2D\u7684\u914D\u7F6E\u3002</p><p>\u91CD\u8F7D\u65B9\u5F0F\uFF1A<code>curl -XPOST http://ip:9115/-/reload</code></p></blockquote><hr><h3 id="dingtalk" tabindex="-1"><a class="header-anchor" href="#dingtalk" aria-hidden="true">#</a> dingtalk</h3><p>\u672A\u9A8C\u8BC1\uFF01\uFF01</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> dingtalk/config.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> dingtalk<span class="token punctuation">-</span>config
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">config.yml</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span>
    <span class="token key atrule">targets</span><span class="token punctuation">:</span>
      <span class="token key atrule">webhook</span><span class="token punctuation">:</span>
        <span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//oapi.dingtalk.com/robot/send<span class="token punctuation">?</span>access_token=xxxxxxxxxxxx             <span class="token comment">#\u4FEE\u6539\u4E3A\u9489\u9489\u673A\u5668\u4EBA\u7684webhook</span>
        <span class="token key atrule">mention</span><span class="token punctuation">:</span>
          <span class="token key atrule">all</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>             <span class="token comment">#@\u6240\u6709</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> dingtalk/dingtalk.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h3 id="alertmanager" tabindex="-1"><a class="header-anchor" href="#alertmanager" aria-hidden="true">#</a> alertmanager</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> alertmanager/templates.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> alertmanager/config.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> alertmanager<span class="token punctuation">-</span>config
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">config.yml</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span>
    <span class="token key atrule">global</span><span class="token punctuation">:</span>
      <span class="token key atrule">resolve_timeout</span><span class="token punctuation">:</span> 5m
      <span class="token key atrule">smtp_smarthost</span><span class="token punctuation">:</span> <span class="token string">&#39;smtp.163.com:465&#39;</span>                <span class="token comment">#\u90AE\u7BB1smtp\u670D\u52A1\u5668\u4EE3\u7406\uFF0C\u542F\u7528SSL\u53D1\u4FE1, \u7AEF\u53E3\u4E00\u822C\u662F465</span>
      <span class="token key atrule">smtp_from</span><span class="token punctuation">:</span> <span class="token string">&#39;alert@163.com&#39;</span>                <span class="token comment">#\u53D1\u9001\u90AE\u7BB1\u540D\u79F0</span>
      <span class="token key atrule">smtp_auth_username</span><span class="token punctuation">:</span> <span class="token string">&#39;alert@163.com&#39;</span>               <span class="token comment">#\u90AE\u7BB1\u540D\u79F0</span>
      <span class="token key atrule">smtp_auth_password</span><span class="token punctuation">:</span> <span class="token string">&#39;password&#39;</span>                <span class="token comment">#\u90AE\u7BB1\u5BC6\u7801\u6216\u6388\u6743\u7801</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> alertmanager/alertmanager.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
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
          <span class="token punctuation">-</span> <span class="token string">&quot;--cluster.advertise-address=$(POD_IP):6783&quot;</span>                <span class="token comment">#\u6CA1\u6709\u8BE5\u53C2\u6570\u4F1A\u62A5\u9519\uFF1AFailed to get final advertise address</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><hr><h3 id="prometheus" tabindex="-1"><a class="header-anchor" href="#prometheus" aria-hidden="true">#</a> prometheus</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> prometheus/rbac.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>         
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

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br></div></div><p>==prometheus\u914D\u7F6E\u6587\u4EF6\u8BF4\u660E\uFF1A==</p><blockquote><p>annotations\u5C06\u4EFB\u4F55\u975E\u6807\u8BC6metadata\u9644\u52A0\u5230\u5BF9\u8C61\uFF0C\u800Clabels\u53EF\u7528\u4E8E\u9009\u62E9\u5BF9\u8C61\u5E76\u67E5\u627E\u6EE1\u8DB3\u67D0\u4E9B\u6761\u4EF6\u7684\u5BF9\u8C61\u96C6\u5408\u3002\u76F8\u6BD4\u4E4B\u4E0B\uFF0Cannotations\u4E0D\u7528\u4E8E\u6807\u8BC6\u548C\u9009\u62E9\u5BF9\u8C61\uFF0C\u867D\u7136\u5B83\u4E5F\u662F\u952E\u503C\u5F62\u5F0F\u3002annotations\u4E0D\u4F1A\u88ABKubernetes\u76F4\u63A5\u4F7F\u7528\uFF0C\u5176\u4E3B\u8981\u76EE\u7684\u662F\u65B9\u4FBF\u7528\u6237\u9605\u8BFB\u67E5\u627E\u3002</p><p>Kubernetes\u7684API SERVER\u4F1A\u66B4\u9732API\u670D\u52A1\uFF0CPromethues\u96C6\u6210\u4E86\u5BF9Kubernetes\u7684\u81EA\u52A8\u53D1\u73B0\uFF0C\u5B83\u67095\u79CD\u6A21\u5F0F\uFF1Anode\u3001service\u3001pod\u3001endpoints\u3001ingress\u3002 \u4E0A\u9762\u662FPrometheus\u5B98\u65B9\u7ED9\u51FA\u7684\u5BF9Kubernetes\u670D\u52A1\u53D1\u73B0\u7684\u914D\u7F6E\u3002\u53EF\u4EE5\u770B\u5230\u5927\u91CF\u7684relabel_configs\uFF0C\u5176\u5B9E\u628A\u6240\u6709\u7684relabel_configs\u53BB\u6389\u4E00\u6837\u53EF\u4EE5\u5BF9kubernetes\u505A\u670D\u52A1\u53D1\u73B0\u3002 relabel_configs\u4EC5\u4EC5\u662F\u5BF9\u91C7\u96C6\u8FC7\u6765\u7684\u6307\u6807\u505A\u4E8C\u6B21\u5904\u7406\uFF0C\u6BD4\u5982\u8981\u4EC0\u4E48\u3001\u4E0D\u8981\u4EC0\u4E48\u4EE5\u53CA\u66FF\u6362\u4EC0\u4E48\u7B49\u7B49\u3002\u800C\u4EE5 _<em>meta</em> \u5F00\u5934\u7684\u8FD9\u4E9B\u5143\u6570\u636E\u6807\u7B7E\u90FD\u662F\u5B9E\u4F8B\u4E2D\u5305\u542B\u7684\uFF0C \u800Crelabel\u5219\u662F\u52A8\u6001\u7684\u4FEE\u6539\u3001\u8986\u76D6\u3001\u6DFB\u52A0\u5220\u9664\u8FD9\u4E9B\u6807\u7B7E\u6216\u8005\u8FD9\u4E9B\u6807\u7B7E\u5BF9\u5E94\u7684\u503C\u3002\u800C\u4E14\u4EE5 __ \u5F00\u5934\u7684\u6807\u7B7E\u901A\u5E38\u662F\u7CFB\u7EDF\u5185\u90E8\u4F7F\u7528\u7684\uFF0C\u56E0\u6B64\u8FD9\u4E9B\u6807\u7B7E\u4E0D\u4F1A\u88AB\u5199\u5165\u6837\u672C\u6570\u636E\u4E2D\uFF0C \u5982\u679C\u6211\u4EEC\u8981\u6536\u96C6\u8FD9\u4E9B\u4E1C\u897F\u90A3\u4E48\u5219\u8981\u8FDB\u884Crelabel\u64CD\u4F5C\u3002\u5F53\u7136relabel\u64CD\u4F5C\u4E5F\u4E0D\u4EC5\u9650\u4E8E\u64CD\u4F5C\u4EE5 __ \u5F00\u5934\u7684\u6807\u7B7E\u3002</p><p><strong>action\u7684\u884C\u4E3A\uFF1A</strong></p><p>----&gt;replace\uFF1A\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u4E0D\u914D\u7F6Eaction\u7684\u8BDD\u5C31\u91C7\u7528\u8FD9\u79CD\u884C\u4E3A\uFF0C\u5B83\u4F1A\u6839\u636Eregex\u6765\u53BB\u5339\u914Dsource_labels\u6807\u7B7E\u4E0A\u7684\u503C\uFF0C\u5E76\u5C06\u5E76\u5C06\u5339\u914D\u5230\u7684\u503C\u5199\u5165target_label\u4E2D;</p><p>----&gt;labelmap\uFF1A\u5B83\u4F1A\u6839\u636Eregex\u53BB\u5339\u914D\u6807\u7B7E\u540D\u79F0\uFF0C\u5E76\u5C06\u5339\u914D\u5230\u7684\u5185\u5BB9\u4F5C\u4E3A\u65B0\u6807\u7B7E\u7684\u540D\u79F0\uFF0C\u5176\u503C\u4F5C\u4E3A\u65B0\u6807\u7B7E\u7684\u503C;</p><p>----&gt;keep\uFF1A\u4EC5\u6536\u96C6\u5339\u914D\u5230regex\u7684\u6E90\u6807\u7B7E\uFF0C\u800C\u4F1A\u4E22\u5F03\u6CA1\u6709\u5339\u914D\u5230\u7684\u6240\u6709\u6807\u7B7E\uFF0C\u7528\u4E8E\u9009\u62E9;</p><p>----&gt;drop\uFF1A\u4E22\u5F03\u5339\u914D\u5230regex\u7684\u6E90\u6807\u7B7E\uFF0C\u800C\u4F1A\u6536\u96C6\u6CA1\u6709\u5339\u914D\u5230\u7684\u6240\u6709\u6807\u7B7E\uFF0C\u7528\u4E8E\u6392\u9664;</p><p>----&gt;labeldrop\uFF1A\u4F7F\u7528regex\u5339\u914D\u6807\u7B7E\uFF0C\u7B26\u5408regex\u89C4\u5219\u7684\u6807\u7B7E\u5C06\u4ECEtarget\u5B9E\u4F8B\u4E2D\u79FB\u9664\uFF0C\u5176\u5B9E\u4E5F\u5C31\u662F\u4E0D\u6536\u96C6\u4E0D\u4FDD\u5B58;</p><p>----&gt;abelkeep\uFF1A\u4F7F\u7528regex\u5339\u914D\u6807\u7B7E\uFF0C\u4EC5\u6536\u96C6\u7B26\u5408regex\u89C4\u5219\u7684\u6807\u7B7E\uFF0C\u4E0D\u7B26\u5408\u7684\u4E0D\u6536\u96C6\u3002</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> prometheus/config.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
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
      - job_name: &#39;node-exporter&#39;                #node\u8282\u70B9\u6027\u80FD\u6307\u6807\u6570\u636E
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

      <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;kubernetes-cadvisor&#39;</span>                <span class="token comment">#\u5BB9\u5668\u3001Pod\u76F8\u5173\u7684\u6027\u80FD\u6307\u6807\u6570\u636E</span>
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

      <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;kube-state-metrics&#39;</span>              <span class="token comment">#\u8D44\u6E90\u5BF9\u8C61(Deployment\u3001Pod\u7B49)\u7684\u72B6\u6001</span>
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

      <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;kubernetes-service-http-probe&#39;</span>               <span class="token comment">#\u901A\u8FC7http\u65B9\u5F0F\u63A2\u6D4BService\u72B6\u6001</span>
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

      <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;kubernetes-service-tcp-probe&#39;</span>                <span class="token comment">#\u901A\u8FC7tcp\u65B9\u5F0F\u63A2\u6D4BService\u72B6\u6001</span>
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

      <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;kubernetes-ingresses&#39;</span>              <span class="token comment">#\u901A\u8FC7http\u65B9\u5F0F\u63A2\u6D4Bingresses\u72B6\u6001</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> prometheus/rules.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> prometheus/prometheus.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>         
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br></div></div><hr><h3 id="grafana" tabindex="-1"><a class="header-anchor" href="#grafana" aria-hidden="true">#</a> grafana</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> grafana/secret.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Secret
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> grafana
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">admin-password</span><span class="token punctuation">:</span> YWRtaW4=              <span class="token comment"># base64 \u52A0\u89E3\u5BC6</span>
  <span class="token key atrule">admin-username</span><span class="token punctuation">:</span> YWRtaW4=
<span class="token key atrule">type</span><span class="token punctuation">:</span> Opaque
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> grafana/grafana.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
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
            <span class="token key atrule">value</span><span class="token punctuation">:</span> grafana<span class="token punctuation">-</span>kubernetes<span class="token punctuation">-</span>app               <span class="token comment">#\u5B89\u88C5grafana-kubernetes-app\u63D2\u4EF6</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br></div></div><hr><h3 id="\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a> \u90E8\u7F72</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6587\u4EF6\u76EE\u5F55\u7ED3\u6784</span>
<span class="token punctuation">[</span>root@master prometheus2<span class="token punctuation">]</span><span class="token comment"># tree</span>
<span class="token builtin class-name">.</span>
\u251C\u2500\u2500 alertmanager
\u2502   \u251C\u2500\u2500 alertmanager.yaml
\u2502   \u251C\u2500\u2500 config.yaml
\u2502   \u2514\u2500\u2500 templates.yaml
\u251C\u2500\u2500 blackbox-exporter
\u2502   \u251C\u2500\u2500 blackbox-exporter.yaml
\u2502   \u2514\u2500\u2500 config.yaml
\u251C\u2500\u2500 dingtalk
\u2502   \u251C\u2500\u2500 config.yaml
\u2502   \u2514\u2500\u2500 dingtalk.yaml
\u251C\u2500\u2500 grafana
\u2502   \u251C\u2500\u2500 grafana.yaml
\u2502   \u2514\u2500\u2500 secret.yaml
\u251C\u2500\u2500 k8s
\u2502   \u251C\u2500\u2500 kube-controller-manager-prometheus-discovery.yaml
\u2502   \u251C\u2500\u2500 kube-proxy-prometheus-discovery.yaml
\u2502   \u2514\u2500\u2500 kube-scheduler-prometheus-discovery.yaml
\u251C\u2500\u2500 kube-state-metrics
\u2502   \u251C\u2500\u2500 kube-state-metrics.yaml
\u2502   \u2514\u2500\u2500 rbac.yaml
\u251C\u2500\u2500 node-exporter
\u2502   \u2514\u2500\u2500 node-exporter.yaml
\u2514\u2500\u2500 prometheus
    \u251C\u2500\u2500 config.yaml
    \u251C\u2500\u2500 nc.yaml
    \u251C\u2500\u2500 prometheus.yaml
    \u251C\u2500\u2500 rbac.yaml
    \u2514\u2500\u2500 rules.yaml

<span class="token number">8</span> directories, <span class="token number">20</span> files

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u90E8\u7F72</span>
kubectl apply -f namespace.yaml
 
kubectl apply -f node-exporter/
 
kubectl apply -f k8s/
 
kubectl apply -f kube-state-metrics/
 
kubectl apply -f blackbox-exporter/
 
kubectl apply -f dingtalk/
 
kubectl apply -f alertmanager/
 
kubectl apply -f prometheus/
 
kubectl apply -f grafana/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u90E8\u7F72\u7ED3\u679C</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>==\u8BBF\u95EEprometheus\uFF1A==\u6D4F\u89C8\u5668\u8F93\u5165http://10.1.93.190:32343/targets \uFF08\u7AEF\u53E3\u53F7\u89C6service\u800C\u5B9A\uFF09</p><p><img src="`+a+'" alt="1616552351873"></p><p><img src="'+e+'" alt="1616552817376"></p><p>==\u8BBF\u95EEgrafana\uFF1A==\u6D4F\u89C8\u5668\u8F93\u5165http://10.1.93.190:31170/targets \uFF08\u7AEF\u53E3\u53F7\u89C6service\u800C\u5B9A\uFF09</p><p>\u4EE5\u4E0B\u5747\u672A\u9A8C\u8BC1\uFF01\uFF01\uFF01</p><p>\u6570\u636E\u6E90\u662F<code>http://prometheus:32343</code>\uFF0C\u5BFC\u5165<code>\u4E3B\u673A\u8BE6\u60C5</code>\u6A21\u677F8919\uFF0C</p><p><img src="'+p+`" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><hr><h3 id="grafana\u914D\u7F6Ekubernetes\u6570\u636E\u6E90" tabindex="-1"><a class="header-anchor" href="#grafana\u914D\u7F6Ekubernetes\u6570\u636E\u6E90" aria-hidden="true">#</a> grafana\u914D\u7F6Ekubernetes\u6570\u636E\u6E90</h3><p>\u542F\u52A8\u63D2\u4EF6\uFF1A<code>Plugins</code> \u2192 <code>kubernetes</code> \u2192 <code>Enable</code>\uFF0C\u7136\u540E\u914D\u7F6E\u96C6\u7FA4\u8BBF\u95EE\u5730\u5740\u53CA\u8BBF\u95EE\u8BC1\u4E66\uFF1A</p><p>\u5982\u679C\u662F\u901A\u8FC7kubeadm\u65B9\u5F0F\u642D\u5EFA\u7684k8s\u96C6\u7FA4\uFF0C\u4F1A\u6709\u4E00\u4E2A <code>/etc/kubernetes/admin.conf</code> \u6587\u4EF6\uFF0C\u91CC\u9762\u5305\u542B\u4E86\u5BA2\u6237\u7AEF\u7684\u8BC1\u4E66\u548C\u5BC6\u7801base64\u7F16\u7801\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat /etc/kubernetes/admin.conf
apiVersion: v1clusters:- cluster:    certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUN5RENDQWJDZ0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRc0ZBREFWTVJNd0VRWURWUVFERXdwcmRXSmwKY201bGRHVnpNQjRYRFRJd01EVXhNakV3TURBek1Gb1hEVE13TURVeE1ERXdNREF6TUZvd0ZURVRNQkVHQTFVRQpBeE1LYTNWaVpYSnVaWFJsY3pDQ0FTSXdEUVlKS29aSWh2Y05BUUVCQlFBRGdnRVBBRENDQVFvQ2dnRUJBTDVpCmYxTGcxUUlqN0VlWlZ0cVFmS3dGZjg4V3NVbVVialZldll5NDZTUittMWpwRWdvM2wxWEIvZHBFNzRWOGtqTGQKZkdGdmVWZkVxNy8rMzdyamNGMXRpSm1BbThLZnMrMW9QdEpLOE0yZjNTSm5FZVVIQUlBeFl2cUE4ZFNsbThTQwpmSkJWU2J3K1pROTBTelpKNzdQUzFuZTBmYnRod0Y2VHE0Uy9FV3h3cUZZMzF5cENub05lVUNtcElsSjVnYWdtCnJ2QmhkTmFNb2oyQlRrMWNDVjh3dkRVS3RlbXFVYVE4R2ZCalZLeHhkdWtwcjJ3S3RPbXZkem1vMEdLSE11MFcKWmQ1TVd0dStIQVZrTXhzcE95Yk41NkFkNnloUkN5YkFJbTN2ZWJlTFV5cjBEY2JhNzJXNVlPRHRCY3ZBOEJxOAoxR1JQc1EwaXBUdGtYbDVCZEhzQ0F3RUFBYU1qTUNFd0RnWURWUjBQQVFIL0JBUURBZ0trTUE4R0ExVWRFd0VCCi93UUZNQU1CQWY4d0RRWUpLb1pJaHZjTkFRRUxCUUFEZ2dFQkFJS0lIb25wVllFWWpwR3JrN2wraGJyeGlxZXkKeGFQT1M3UW5TZEVZMC94TWtiUWxKcy9rUFcxU2lVemdoUk4wQWJxMnFtTXVuNHhlZ0pLdGVPNXhYRGJZNEhZbgpVVCtPWG0rQ1hBQjd3S3pYcDlmUTZBUDk3cmY0L2FRaXlGZEtsZUJ6Y3JNUkErZHZWTjk3NGlHUW94aFh3T1FNCmZXeGNrMDNhU0Qvc2s5UnJrcFhlL1g2NHQrV3BkUlFGRjE2YVFlSHVxNnJQRWZTR2VPUWVpcVIrQVgvdWpIOHoKZzJZY2JKWE85U3ZheXcyb3oxSlozTUx6K0FpeE5RTHFNYU00Tm43TklvMExxUHFqNzZoU3d1Qk1nREE0VnFtZAowZHRtS211OVZjTGZHcW9ITnZnajlTYlVlZ1crL3VEbzcwVXdvb2NGTmlnSnRnOVVSZWpEUXJJSm4rUT0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=    server: https://192.168.30.188:6443  name: kubernetescontexts:- context:    cluster: kubernetes    user: kubernetes-admin  name: kubernetes-admin@kubernetescurrent-context: kubernetes-admin@kuberneteskind: Configpreferences: {}users:- name: kubernetes-admin  user:    client-certificate-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUM4akNDQWRxZ0F3SUJBZ0lJZWtMYS9Fc1ZDSGd3RFFZSktvWklodmNOQVFFTEJRQXdGVEVUTUJFR0ExVUUKQXhNS2EzVmlaWEp1WlhSbGN6QWVGdzB5TURBMU1USXhNREF3TXpCYUZ3MHlNVEExTVRJeE1EQXdNekphTURReApGekFWQmdOVkJBb1REbk41YzNSbGJUcHRZWE4wWlhKek1Sa3dGd1lEVlFRREV4QnJkV0psY201bGRHVnpMV0ZrCmJXbHVNSUlCSWpBTkJna3Foa2lHOXcwQkFRRUZBQU9DQVE4QU1JSUJDZ0tDQVFFQXJ2a084MUg0ZW9zak5kM3oKSy9UUEhHcGtCR1FvZm1hbm9ldjRlWXNmUTlPZW0wYzBvVUJ3cXoxM2JabmJUbmJweFFqbmdZMkc4bHF4UmkwaQpCdlA2ZmtmS0ZFQlZzUTd4dGlqZXBrdnByWEdPL08wUUE1U0k4NHJzTjVHOVhOa2pQbWdzYTBlblZxNUVvRTBGClRaNXpRRjlwUlkxWUZZZXYrTDE1bU5FaXlScUg4UDJRY3BoUmxWK09IUXVHaVdLNEhIRVB2QWw2QUpJeWN6d3MKWWMrdk1IdHlZbmF5NUMwUldVWHhyUmc0ZytKMksrY1h1YlF0elhXdjdxaTNhNjFDekpaZi9TZkNOd0Jyam9zRwp0b215WEJWNVZTVGJUYVk1OFZrLzFPK1NSc3BybjF3TDc0djdXUXVEaE9ydXhBRXpuYmRXWWxOMEZBMm5MTjlZCmwxWkVKUUlEQVFBQm95Y3dKVEFPQmdOVkhROEJBZjhFQkFNQ0JhQXdFd1lEVlIwbEJBd3dDZ1lJS3dZQkJRVUgKQXdJd0RRWUpLb1pJaHZjTkFRRUxCUUFEZ2dFQkFHazlIRDAxRmRRUnd4THhGUi8yRjdPM2ZpdGRFV3pDTC9UawpsZUxZaGlQaVh3NjNwOGtWU0VabEIyNEYzNEd2WlB3YS9LWnNUQnZXM0Mwek9uNGpHQ2hueHEvaVdqTWFnVEdBCktPUFV2bUI2VzhvVzhlb0lrSStOOEs0NFhSRnZzeGIwNUtqaCtwd0VZZzJUQXpBNEFlQzlnSjZYaTBzbHpnVnIKcWRzbXZtV0QzNEdXYzJOcVIzSDA3cW43RlJwRHIrTjlrTHE4Ukt4L0YwMWNCV1I3VVRZcnJTLzJEQ2t1N3lsWgptdTcwcXZicndYWnF6TkI5b05hQk82SHJsZXpuU2JQbnFKZUo0Q1czc2NMNmJ1N3A3bEppV1VQb0VHT0xic3YvCnFjT0xqdnZSRFF6eC9Xak5DWFZLNFhxbzJjVERGYitXeFJ1U2xGaUlQclk1QjlkQlFJWT0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=    client-key-data: LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFb2dJQkFBS0NBUUVBcnZrTzgxSDRlb3NqTmQzeksvVFBIR3BrQkdRb2ZtYW5vZXY0ZVlzZlE5T2VtMGMwCm9VQndxejEzYlpuYlRuYnB4UWpuZ1kyRzhscXhSaTBpQnZQNmZrZktGRUJWc1E3eHRpamVwa3ZwclhHTy9PMFEKQTVTSTg0cnNONUc5WE5ralBtZ3NhMGVuVnE1RW9FMEZUWjV6UUY5cFJZMVlGWWV2K0wxNW1ORWl5UnFIOFAyUQpjcGhSbFYrT0hRdUdpV0s0SEhFUHZBbDZBSkl5Y3p3c1ljK3ZNSHR5WW5heTVDMFJXVVh4clJnNGcrSjJLK2NYCnViUXR6WFd2N3FpM2E2MUN6SlpmL1NmQ053QnJqb3NHdG9teVhCVjVWU1RiVGFZNThWay8xTytTUnNwcm4xd0wKNzR2N1dRdURoT3J1eEFFem5iZFdZbE4wRkEybkxOOVlsMVpFSlFJREFRQUJBb0lCQUI4OHI0S1krN2RFNThCUwpJM3VSZFBncHRqbGllQ2c0dzJ5UTZBY3E0eVlFdmFnVENqNVBkczNiWjFyVndPVTlMWGJUcENEbzExS2xCa2owCi9jSW9CR3hPL0xDbzI2T0VlM3A5eVdIKzQzVG5kUk9LYnZWMHF3NXZtc1JBN0lHSzhsUE4zVUE1eHBJZkFubHIKeHFxWXd4S1c5Z0JJdjVUNGFGNEwxWTJHcUtNbUlhenVjLzVleU5rZjk3bnRyOFJncXQxcDJyaWJIVS9nRzFlYgpIWktyNm01UWx2MWJpYTFIYms2SWI2b1pYTVFIWWJSckpVemJSaWp6eE1RVkRmZ2tpalhSR3pSRjdZeVFZbTk5CmwwUzI1bDYzY1dIT3J6czM5R21xRmQ4Z0JJc0M3SkxuUThUY01nb1Axb0M5WXUzMGRrSDBvUi95M2lOTnFxRW8KZVJ2d0w0RUNnWUVBeG1tY2JDZXRlRDI5VWZDTE1kKzByTU14aVV4bHI3TTdrYUJOeWxPK2lOZWxKbUk5UHRXcwpkUzQzS2hkeElnSVNIQVRTdWxpR3VKMStEekxTWWNGZ2FkSmQxd25NNHppOUc2cW9NOXZTTVN2ZGtvK28ydXRqCmNscVBZcnVRbC9nK252dkE2N1ZyZzAyUXF0NFlqcmkrYmxQL1RNaDZGS3NGa0VQeXZPTHUxOTBDZ1lFQTRjSFgKUm43WUl2TWtMNGQrR3dkUmRwcXl5YStxVC9nbUtKTnNwb3VLUVZlaUd3aW9vR21BR0E0MEJBR2hyN24vMXB6Rwo5VkVQb201VDdPRnVmVWxGaUNURmJBblN2RWU5RTREUHJ3SDNhazlXR0JzcWxYcUZwMjdwWWFyZ3NSS2JDWU9UCm9Nc1FJR0wxelN4NEpkdFArMUxDQ1BuRnowMTNkajhRbmc4TVBPa0NnWUFwczF5cTVwUHc1NWo0dGNPcmtjYloKWUpUeXRGblMyYXExYXFtdTBuY0RMNytJRjdHam1Ta0wzOUM4U2Z6L0ZzeFRremZ1N2xneVNQZUxualRWVXQwKwpvSFlVa2Z5NzdOcmlDN1lhWUNNSExwNzlCTENLZ2xwK1dFWTJqQkZSdjF6NThST1U5cVpJREc5UldpaHpKcVR2CmJ6d0RHVWQvUElxSXpaOGd6OWsvQ1FLQmdIbEFRaDVEdkZReElNdENTM0c2NFg4QklXdC9wTXFrcmVIM0pGRGkKKzFPUy9LYm1aS01iWnNnRXdOMHgveVJCa3U0eWNBMk1Cd2lubHYzUUtpYXlOdDBqV3NGbkdUODBqSkd3Q2x1bApnN3dlZGxBbUx4M3ZtMTlOQzU0QVNBUHl5VUEzNGc5bllQYjBENjZ0NXEzMmQ2TzFWQys3N3dralF6bElMK1drCmtWOFpBb0dBVk01R1lLbnpNVjUzVzNXT3I0dFdLSm5XUHFiaHVlUEt5SXMzbTNkUzhGUE56SDU2UHhNKzRUM24Ka2NzT1VsZTlkQkFENXRXT3E5eHFmNWF4MXpaU2s1SzFhdUphSzRaa3RzNkdMRUgrU09WckdoK1JXQWtRcUFVbgo0Qmk4ZVA4MmR5M3N2RmV1UkNvTWFXRVQ0QlFHaGRQaFFCd1NNdlYrSWI2R3U0VldwN289Ci0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0tCg==
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5176\u4E2D\u5C5E\u6027<code>certificate-authority-data</code>\u3001<code>client-certificate-data</code>\u3001<code>client-key-data</code> \u5BF9\u5E94 CA \u8BC1\u4E66\u3001Client \u8BC1\u4E66\u3001Client \u79C1\u94A5\uFF0C\u6587\u4EF6\u91CC\u9762\u7684\u5185\u5BB9\u662Fbase64\u7F16\u7801\u8FC7\u540E\u7684\uFF0C\u5206\u522B\u6267\u884C <code>echo &quot;&quot; | base64 -d</code> \u5C31\u80FD\u8FD8\u539F\u6210\u8BC1\u4E66\u6E90\u6587\u4EF6\u3002</p><p>\u9996\u5148\u5C06<code>Datasource</code>\u8BBE\u7F6E\u4E3A<code>Prometheus</code>\uFF0C</p><p><img src="`+t+'" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><p>\u70B9\u51FB<code>Save</code>\u4FDD\u5B58\u5373\u53EF\uFF0Cgrafana\u4E2D\u81EA\u52A8\u51FA\u73B0\u4E0B\u56FE\u4E2D\u7684dashboard\uFF0C</p><p><img src="'+l+'" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><p><img src="'+c+'" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><p>K8s Cluster\uFF1A</p><p><img src="'+o+'" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><p>K8s Node\uFF1A</p><p>\u6CA1\u6709\u663E\u793A\u662F\u56E0\u4E3Aprometheus\u7684metric\u6709\u66F4\u65B0\uFF0C\u6BD4\u5982<code>node_cpu</code>\u6539\u6210\u4E86<code>node_cpu_seconds_total</code>\u3002\u53EF\u4EE5\u91CD\u65B0\u5B9A\u4E49\u8BE5dashboard\u7684\u53D8\u91CF\uFF08\u53EF\u4EE5\u53C2\u80038919 dashboard\u7684\u53D8\u91CF\uFF09\uFF0C\u7136\u540E\u6839\u636Eprometheus\u754C\u9762\u7684metrics\u6765\u8C03\u8BD5\u3002\u8C03\u8BD5\u5B8C\u6BD5\u793A\u56FE\uFF1A</p><p><img src="'+u+'" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><p>K8s Deployments\uFF1A</p><p><img src="'+r+'" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><p>K8s Container\uFF1A</p><p><img src="'+i+`" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><p>grafana\u914D\u7F6Ekubernetes\u6570\u636E\u6E90\u5B8C\u6210\uFF0C\u63A5\u4E0B\u6765\u6D4B\u8BD5\u544A\u8B66\u3002</p><hr><h3 id="\u544A\u8B66\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u544A\u8B66\u6D4B\u8BD5" aria-hidden="true">#</a> \u544A\u8B66\u6D4B\u8BD5</h3><ul><li>\u5B95\u673A\u6D4B\u8BD5\uFF1A</li></ul><p>\u6A21\u62DFnode-exporter\u5B95\u673A\uFF0C\u6D4B\u8BD5\u9489\u9489\u544A\u8B66\uFF08<code>critical</code>\uFF09\u662F\u5426\u6B63\u5E38\u3002\u8FD9\u91CC\u9009\u62E9<code>node3</code>\u4F5C\u4E3A\u6D4B\u8BD5\u673A\u5668\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> kill_node-exporter.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
 
<span class="token assign-left variable">nodepid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">netstat</span> -lntp <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">9100</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $NF}&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> -F <span class="token string">&#39;/&#39;</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">\`</span></span>
<span class="token assign-left variable">nodenum</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">netstat</span> -lntp <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">9100</span> <span class="token operator">|</span> <span class="token function">grep</span> -v pause <span class="token operator">|</span> <span class="token function">wc</span> -l<span class="token variable">\`</span></span>
 
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$nodenum</span> -eq <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">exit</span>
<span class="token keyword">else</span>
    <span class="token function">kill</span> -9 <span class="token variable">$nodepid</span>
    <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u7B49\u5F853m\uFF0C\u6536\u5230\u9489\u9489\u6545\u969C\u544A\u8B66\u548C\u6062\u590D\u544A\u8B66\uFF0C</p><p><img src="`+k+'" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><p><img src="'+b+`" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><ul><li>CPU\u6D4B\u8BD5\uFF1A</li></ul><p>\u6A21\u62DFCPU\u4F7F\u7528\u7387\u4E3A80%\uFF0C\u6D4B\u8BD5\u90AE\u4EF6\u544A\u8B66\uFF08<code>warning</code>)\u662F\u5426\u6B63\u5E38\u3002\u8FD9\u91CC\u9009\u62E9<code>node3</code>\u4F5C\u4E3A\u6D4B\u8BD5\u673A\u5668\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> -y stress-ng stress-ng -c <span class="token number">0</span> -l <span class="token number">80</span>            
<span class="token comment"># -c \u6307\u5B9A\u538B\u529B\u6E90\u8FDB\u7A0B\u7684\u6570\u91CF\uFF0C\u4EE5\u5339\u914D\u5728\u7EBFCPU\u7684\u6570\u91CF\uFF0C0\u8868\u793A\u52A0\u8F7D\u6BCF\u4E2Acpu\uFF1B-l \u6307\u5B9ACPU\u4F7F\u7528\u7387\uFF1BCtrl + C \u9000\u51FA</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="`+m+'" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><p>\u7B49\u5F855m\uFF0C\u6536\u5230\u90AE\u4EF6\u6545\u969C\u544A\u8B66\u548C\u6062\u590D\u544A\u8B66\uFF0C</p><p><img src="'+d+'" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><p><img src="'+y+'" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><p>\u6D4B\u8BD5\u9489\u9489\u548C\u90AE\u4EF6\u544A\u8B66\u5747\u6CA1\u6709\u95EE\u9898\u3002\u66F4\u591A\u5173\u4E8Ek8s\u96C6\u7FA4\u7684\u6307\u6807\u76D1\u63A7\u53EF\u4EE5\u81EA\u884C\u914D\u7F6E\uFF0C\u6B64\u5904\u4EC5\u4F5C\u4E3A\u6F14\u793A\u3002</p><p>k8s\u4EE5Deployment\u65B9\u5F0F\u90E8\u7F72 prometheus + grafana \u5B8C\u6210\u3002\u751F\u4EA7\u73AF\u5883\u5EFA\u8BAE\u4F7F\u7528StatefulSet\u65B9\u5F0F\u90E8\u7F72\u96C6\u7FA4\uFF0C\u5927\u81F4\u8FC7\u7A0B\u4E0E\u4E0A\u9762\u7C7B\u4F3C\u3002\u5DF2\u5B58\u653E\u81F3\u4E2A\u4EBAgitee\uFF1Ahttps://gitee.com/xinbadayt/prometheus.git</p><p>\u8F6C\u8F7D\u81F3https://blog.csdn.net/miss1181248983/article/details/107673128</p>',132);function _(v,f){return h}var q=n(g,[["render",_],["__file","1.html.vue"]]);export{q as default};
