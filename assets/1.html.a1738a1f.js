import{_ as n,c as s}from"./app.a1031244.js";var a="/assets/1616641821310.665b67a7.png",p="/assets/1616642793574.b087cd7c.png",e="/assets/1616642006422.a53d7af5.png",t="/assets/1616643085380.97b92b22.png",l="/assets/1616643201018.e738ad19.png";const c={},o=s('<h1 id="nacos\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#nacos\u7684\u4F7F\u7528" aria-hidden="true">#</a> Nacos\u7684\u4F7F\u7528</h1><p>Nacos\u5B98\u65B9\u6587\u6863\uFF1Ahttps://nacos.io/zh-cn/docs/quick-start.html</p><h1 id="_1-windows\u73AF\u5883\u542F\u52A8nacos" tabindex="-1"><a class="header-anchor" href="#_1-windows\u73AF\u5883\u542F\u52A8nacos" aria-hidden="true">#</a> 1.windows\u73AF\u5883\u542F\u52A8Nacos</h1><ul><li>\u73AF\u5883\u51C6\u5907\uFF1A 64 bit JDK 1.8+ \u3001 Maven 3.2.x+</li><li>Nacos\u6709\u4E24\u79CD\u542F\u52A8\u65B9\u5F0F\u3002\u4E00\u79CD\u662F\u4E0B\u8F7D\u6E90\u7801\uFF0C\u8FDB\u884C\u7F16\u8BD1\u540E\u518D\u542F\u52A8\uFF1B\u53E6\u4E00\u79CD\u662F\u76F4\u63A5\u4E0B\u8F7D<code>nacos-server-$version.zip</code>\u89E3\u538B\u540E\u518D\u542F\u52A8\u3002\u672C\u6587\u4ECB\u7ECD\u4F7F\u7528\u4E0B\u8F7Dzip\u6587\u4EF6\u7684\u65B9\u5F0F\u8FDB\u884C\u542F\u52A8\u3002</li><li>\u76EE\u524D\u7A33\u5B9A\u7248\u672C\u662F1.4.1\uFF0C\u63A8\u8350\u4F7F\u7528\u8BE5\u7248\u672C\uFF0C\u4E0B\u8F7D\u5730\u5740\uFF1Ahttps://github.com/alibaba/nacos/releases/download/1.4.1/nacos-server-1.4.1.zip\u3002\u6211\u8FD9\u91CC\u4F7F\u7528\u7684\u662F\u6700\u65B0\u72482.0.0\u3002</li></ul><h2 id="_1-1\u89E3\u538B" tabindex="-1"><a class="header-anchor" href="#_1-1\u89E3\u538B" aria-hidden="true">#</a> 1.1\u89E3\u538B</h2><p><img src="'+a+'" alt="1616641821310"></p><h2 id="_1-2\u521B\u5EFA\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#_1-2\u521B\u5EFA\u6570\u636E\u5E93" aria-hidden="true">#</a> 1.2\u521B\u5EFA\u6570\u636E\u5E93</h2><p>\u5728mysql\u4E2D\u521B\u5EFAnacos\u6570\u636E\u5E93\uFF0C\u5BFC\u5165<code>D:\\Nacos\\nacos\\conf\\nacos-mysql.sql</code>:</p><p><img src="'+p+'" alt="1616642793574"></p><h2 id="_1-3\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-3\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 1.3\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</h2><p>\u7528\u8BB0\u4E8B\u672C\u6253\u5F00<code>D:\\Nacos\\nacos\\conf\\application.properties</code>\u6587\u4EF6\u8FDB\u884C\u4FEE\u6539\u3002</p><p><img src="'+e+'" alt="1616642006422"></p><h2 id="_1-4\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_1-4\u542F\u52A8" aria-hidden="true">#</a> 1.4\u542F\u52A8</h2><p>cmd\u8FDB\u5165<code>D:\\Nacos\\nacos\\bin</code>\u8DEF\u5F84\uFF0C\u6267\u884C<code>startup.cmd -m standalone</code>\u547D\u4EE4\u3002</p><p><img src="'+t+'" alt="1616643085380"></p><h2 id="_1-5\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#_1-5\u8BBF\u95EE" aria-hidden="true">#</a> 1.5\u8BBF\u95EE</h2><p>\u6D4F\u89C8\u5668\u8F93\u5165http://localhost:8848/nacos/ \u8FDB\u884C\u8BBF\u95EE\u3002\u767B\u5F55\u8D26\u53F7/\u5BC6\u7801\u4E3A\uFF1Anacos/nacos</p><p><img src="'+l+`" alt="1616643201018"></p><h1 id="_2-\u4E91\u5E73\u53F0\u90E8\u7F72nacos" tabindex="-1"><a class="header-anchor" href="#_2-\u4E91\u5E73\u53F0\u90E8\u7F72nacos" aria-hidden="true">#</a> 2.\u4E91\u5E73\u53F0\u90E8\u7F72Nacos</h1><p>\u4E00\u4E2Ayaml\u6587\u4EF6\u641E\u5B9A~</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> pano<span class="token punctuation">-</span>dev <span class="token comment"># \u6B64\u5904\u6539\u6210\u81EA\u5DF1\u7684namespace</span>
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
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> pano<span class="token punctuation">-</span>dev <span class="token comment"># \u6B64\u5904\u6539\u6210\u81EA\u5DF1\u7684namespace</span>
<span class="token key atrule">data</span><span class="token punctuation">:</span> <span class="token comment"># \u6839\u636E\u81EA\u5DF1\u7684\u6570\u636E\u5E93\u4FE1\u606F\u8FDB\u884C\u914D\u7F6E</span>
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
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> pano<span class="token punctuation">-</span>dev <span class="token comment"># \u6B64\u5904\u6539\u6210\u81EA\u5DF1\u7684namespace</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl apply -f nacos.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8BBF\u95EE\u7684\u8BDD\uFF0C\u9700\u8981\u53BB\u67E5\u8BE2service\u7684\u7AEF\u53E3\u53F7\u8FDB\u884C\u8BBF\u95EE\uFF1Ahttp://IP:\u7AEF\u53E3\u53F7/nacos\u3002</p>`,23);function u(r,i){return o}var b=n(c,[["render",u],["__file","1.html.vue"]]);export{b as default};
