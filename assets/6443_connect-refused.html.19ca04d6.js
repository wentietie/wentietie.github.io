import{_ as s,c as n}from"./app.222641c0.js";var a="/assets/k8s-connect-refused.2c68a5db.png";const e={},t=n('<h1 id="_6443-connect-refused" tabindex="-1"><a class="header-anchor" href="#_6443-connect-refused" aria-hidden="true">#</a> 6443_connect-refused</h1><h1 id="\u9519\u8BEF\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u4FE1\u606F" aria-hidden="true">#</a> \u9519\u8BEF\u4FE1\u606F</h1><p>The connection to the server 192.168.100.170:6443 was refused</p><p><img src="'+a+`" alt="k8s-connect-refused"></p><h1 id="\u89E3\u51B3\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u6B65\u9AA4" aria-hidden="true">#</a> \u89E3\u51B3\u6B65\u9AA4</h1><p>\u53C2\u8003\u6587\u6863\uFF1Ahttps://www.jianshu.com/p/6edc9f171df1</p><h2 id="step1-\u67E5\u770B6443\u7AEF\u53E3\u662F\u5426\u6B63\u5E38\u6216\u8005\u662F\u5426\u5F00\u542F\u9632\u706B\u5899" tabindex="-1"><a class="header-anchor" href="#step1-\u67E5\u770B6443\u7AEF\u53E3\u662F\u5426\u6B63\u5E38\u6216\u8005\u662F\u5426\u5F00\u542F\u9632\u706B\u5899" aria-hidden="true">#</a> step1. \u67E5\u770B6443\u7AEF\u53E3\u662F\u5426\u6B63\u5E38\u6216\u8005\u662F\u5426\u5F00\u542F\u9632\u706B\u5899</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">netstat</span> -pnlt <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">6443</span>

<span class="token comment"># \u5982\u679C\u63D0\u793A netstat\uFF1A </span>
yum <span class="token function">install</span> net-tools
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8FD0\u884C\u4E4B\u540E\u4EC0\u4E48\u90FD\u6CA1\u6709\u8FD4\u56DE\uFF0C\u4E5F\u5C31\u662F\u8BF4 <strong>APIServer \u5B8C\u5168\u6CA1\u6709\u63D0\u4F9B\u670D\u52A1</strong>\uFF0C\u90A3\u6211\u4EEC\u5C31\u53BB\u67E5\u770B\u4E00\u4E0B kubelet \u7684\u65E5\u5FD7\uFF0C\u5927\u5BB6\u90FD\u77E5\u9053\u4F7F\u7528 kubeadm \u642D\u5EFA\u7684 k8s\u96C6\u7FA4\u91CC\uFF0CAPIServer \u90FD\u662F\u5728 docker \u91CC\u8FD0\u884C\u7684\uFF0C\u8FD9\u91CC\u6211\u4EEC\u5148\u627E\u5230\u5BF9\u5E94\u7684\u5BB9\u5668\uFF0C\u8BB0\u5F97\u52A0 <code>-a</code>\uFF0C\u56E0\u4E3A\u8BE5\u5BB9\u5668\u53EF\u80FD\u5DF2\u7ECF\u5904\u4E8E\u975E\u6B63\u5E38\u72B6\u6001\u4E86\u3002</p><h2 id="step2-\u67E5\u770Bapiserver" tabindex="-1"><a class="header-anchor" href="#step2-\u67E5\u770Bapiserver" aria-hidden="true">#</a> step2.\u67E5\u770BAPIServer</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> -a <span class="token operator">|</span> <span class="token function">grep</span> apiserver

<span class="token comment"># \u8F93\u51FA</span>
f40d97ee2be6        40a63db91ef8                                                    <span class="token string">&quot;kube-apiserver --au\u2026&quot;</span>   <span class="token number">2</span> minutes ago        Exited <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token number">2</span> minutes ago                            k8s_kube-apiserver_kube-apiserver-master1_kube-system_7beef975d93d634ecee05282d3d3a9ac_718
4b866fe71e33        registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.1   <span class="token string">&quot;/pause&quot;</span>                 <span class="token number">2</span> days ago           Up <span class="token number">2</span> days                                             k8s_POD_kube-apiserver-master1_kube-system_7beef975d93d634ecee05282d3d3a9ac_0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u91CC\u80FD\u770B\u5230\u4E24\u4E2A\u5BB9\u5668\uFF0C\u53EF\u4EE5\u770B\u5230 <strong>\u5BB9\u5668\u7684\u72B6\u6001\u5DF2\u7ECF\u662F <code>Exited</code> \u4E86</strong>\uFF0C\u6CE8\u610F\u4E0B\u9762\u7684<code>pause</code>\u5BB9\u5668\uFF0C\u8FD9\u4E2A\u53EA\u662F\u7528\u6765\u5F15\u5BFC APIServer \u7684\uFF0C\u5E76\u4E0D\u662F\u670D\u52A1\u7684\u5B9E\u9645\u8FD0\u884C\u5BB9\u5668\uFF0C\u6240\u4EE5\u770B\u4E0D\u5230\u65E5\u5FD7\uFF0C\u6240\u4EE5\u67E5\u770B\u65E5\u5FD7\u65F6\u4E0D\u8981\u8F93\u9519\u5BB9\u5668 id \u4E86\u3002\u63A5\u4E0B\u6765\u67E5\u770B APIServer \u7684\u65E5\u5FD7\u3002</p><h2 id="step3-\u67E5\u770Bapiserver-\u7684\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#step3-\u67E5\u770Bapiserver-\u7684\u65E5\u5FD7" aria-hidden="true">#</a> Step3.\u67E5\u770BAPIServer \u7684\u65E5\u5FD7</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> logs -f f40d97ee2be6

<span class="token comment"># \u8F93\u51FA</span>
I1230 01:39:42.942786       <span class="token number">1</span> server.go:557<span class="token punctuation">]</span> external <span class="token function">host</span> was not specified, using <span class="token number">192.168</span>.100.171
I1230 01:39:42.942924       <span class="token number">1</span> server.go:146<span class="token punctuation">]</span> Version: v1.13.1
I1230 01:39:43.325424       <span class="token number">1</span> plugins.go:158<span class="token punctuation">]</span> Loaded <span class="token number">8</span> mutating admission controller<span class="token punctuation">(</span>s<span class="token punctuation">)</span> successfully <span class="token keyword">in</span> the following order: NamespaceLifecycle,LimitRanger,ServiceAccount,NodeRestriction,Priority,DefaultTolerationSeconds,DefaultStorageClass,MutatingAdmissionWebhook.
I1230 01:39:43.325451       <span class="token number">1</span> plugins.go:161<span class="token punctuation">]</span> Loaded <span class="token number">6</span> validating admission controller<span class="token punctuation">(</span>s<span class="token punctuation">)</span> successfully <span class="token keyword">in</span> the following order: LimitRanger,ServiceAccount,Priority,PersistentVolumeClaimResize,ValidatingAdmissionWebhook,ResourceQuota.
I1230 01:39:43.326327       <span class="token number">1</span> plugins.go:158<span class="token punctuation">]</span> Loaded <span class="token number">8</span> mutating admission controller<span class="token punctuation">(</span>s<span class="token punctuation">)</span> successfully <span class="token keyword">in</span> the following order: NamespaceLifecycle,LimitRanger,ServiceAccount,NodeRestriction,Priority,DefaultTolerationSeconds,DefaultStorageClass,MutatingAdmissionWebhook.
I1230 01:39:43.326340       <span class="token number">1</span> plugins.go:161<span class="token punctuation">]</span> Loaded <span class="token number">6</span> validating admission controller<span class="token punctuation">(</span>s<span class="token punctuation">)</span> successfully <span class="token keyword">in</span> the following order: LimitRanger,ServiceAccount,Priority,PersistentVolumeClaimResize,ValidatingAdmissionWebhook,ResourceQuota.
F1230 01:40:03.328865       <span class="token number">1</span> storage_decorator.go:57<span class="token punctuation">]</span> Unable to create storage backend: config <span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token punctuation">{</span> /registry <span class="token punctuation">[</span>https://127.0.0.1:2379<span class="token punctuation">]</span> /etc/kubernetes/pki/apiserver-etcd-client.key /etc/kubernetes/pki/apiserver-etcd-client.crt /etc/kubernetes/pki/etcd/ca.crt <span class="token boolean">true</span> 0xc0004bd440 <span class="token operator">&lt;</span>nil<span class="token operator">&gt;</span> 5m0s 1m0s<span class="token punctuation">}</span><span class="token punctuation">)</span>, err <span class="token punctuation">(</span>dial tcp <span class="token number">127.0</span>.0.1:2379: connect: connection refused<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4ECE\u6700\u540E\u4E00\u884C\u53EF\u4EE5\u770B\u5230\uFF0C\u662F APIServer \u5728\u5C1D\u8BD5\u521B\u5EFA\u5B58\u50A8\u65F6\u51FA\u73B0\u4E86\u95EE\u9898\uFF0C\u5BFC\u81F4\u65E0\u6CD5\u6B63\u786E\u542F\u52A8\u670D\u52A1\uFF0C\u7531\u4E8E k8s \u662F\u4F7F\u7528 etcd \u4F5C\u4E3A\u5B58\u50A8\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u518D\u6765\u67E5\u770B etcd \u7684\u65E5\u5FD7 \u3002</p><h2 id="step4-\u67E5\u770Betcd\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#step4-\u67E5\u770Betcd\u65E5\u5FD7" aria-hidden="true">#</a> Step4.\u67E5\u770Betcd\u65E5\u5FD7</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B etcd \u5BB9\u5668\uFF0C\u6CE8\u610F etcd \u4E5F\u6709\u5BF9\u5E94\u7684 pause \u5BB9\u5668</span>
<span class="token function">docker</span> <span class="token function">ps</span> -a <span class="token operator">|</span> <span class="token function">grep</span> etcd

<span class="token comment"># \u8F93\u51FA</span>
1b8b522ee4e8        3cab8e1b9802                                                    <span class="token string">&quot;etcd --advertise-cl\u2026&quot;</span>   <span class="token number">7</span> minutes ago        Exited <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">6</span> minutes ago                              k8s_etcd_etcd-master1_kube-system_1051dec0649f2b816946cb1fea184325_942
c9440543462e        registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.1   <span class="token string">&quot;/pause&quot;</span>                 <span class="token number">2</span> days ago           Up <span class="token number">2</span> days                                             k8s_POD_etcd-master1_kube-system_1051dec0649f2b816946cb1fea184325_0


<span class="token comment"># \u67E5\u770B etcd \u65E5\u5FD7</span>
<span class="token function">docker</span> logs -f 1b8b522ee4e8

<span class="token comment"># \u8F93\u51FA</span>
<span class="token punctuation">..</span>.
<span class="token number">2021</span>-03-24 03:10:27.339748 I <span class="token operator">|</span> embed: initial advertise peer URLs <span class="token operator">=</span> https://10.1.93.160:2380
<span class="token number">2021</span>-03-24 03:10:27.339752 I <span class="token operator">|</span> embed: initial cluster <span class="token operator">=</span>
<span class="token number">2021</span>-03-24 03:10:27.339927 W <span class="token operator">|</span> pkg/fileutil: check <span class="token function">file</span> permission: directory <span class="token string">&quot;/var/lib/etcd/member/snap&quot;</span> exist, but the permission is <span class="token string">&quot;drwxr-xr-x&quot;</span><span class="token builtin class-name">.</span> The recommendedo the data.
<span class="token number">2021</span>-03-24 03:10:27.950522 I <span class="token operator">|</span> etcdserver: recovered store from snapshot at index <span class="token number">11841307</span>
<span class="token number">2021</span>-03-24 03:10:27.951270 I <span class="token operator">|</span> mvcc: restore compact to <span class="token number">11013220</span>
<span class="token number">2021</span>-03-24 03:10:27.958062 E <span class="token operator">|</span> wal: failed to allocate space when creating new wal <span class="token function">file</span> <span class="token punctuation">(</span>no space left on device<span class="token punctuation">)</span>
<span class="token number">2021</span>-03-24 03:10:28.111238 C <span class="token operator">|</span> etcdserver: <span class="token builtin class-name">read</span> wal error <span class="token punctuation">(</span>no space left on device<span class="token punctuation">)</span> and cannot be repaired
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u4ECE\u6700\u540E\u4E00\u884C\u53EF\u4EE5\u770B\u51FA\uFF0C<code>no space left on device</code>\uFF0C\u8868\u793A\u78C1\u76D8\u7A7A\u95F4\u4E0D\u591F\u4E86\u3002\u89E3\u51B3\u65B9\u6CD5\uFF0C\u8981\u4E48\u662F\u5220\u6389\u865A\u62DF\u673A\u4E2D\u65E0\u7528\u6587\u4EF6\uFF0C\u8981\u4E48\u662F\u7ED9\u865A\u62DF\u673A\u589E\u52A0\u5185\u5B58\u3002</p>`,18);function p(c,o){return t}var l=s(e,[["render",p],["__file","6443_connect-refused.html.vue"]]);export{l as default};
