"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["92"],{32225:function(e,r,n){n.r(r),n.d(r,{default:()=>d});var s=n("85893"),t=n("50065");let a=n.p+"static/image/1616407155699.b834c5de.png",o=n.p+"static/image/1616392720399.8a29fbf3.png",c=n.p+"static/image/1616383973322.34f67389.png";function i(e){let r=Object.assign({h1:"h1",a:"a",p:"p",pre:"pre",code:"code",h2:"h2",h3:"h3",img:"img",strong:"strong",h4:"h4"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"使用prometheus监控kubernetes",children:["使用Prometheus监控Kubernetes",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#使用prometheus监控kubernetes",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"以下操作均是在prometheus名称空间内进行。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"kubectl create namespace prometheus\n"})}),"\n",(0,s.jsxs)(r.h1,{id:"1部署prometheus",children:["1.部署Prometheus",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#1部署prometheus",children:"#"})]}),"\n",(0,s.jsxs)(r.h2,{id:"11-使用configmap管理prometheus配置",children:["1.1 使用ConfigMap管理Prometheus配置",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#11-使用configmap管理prometheus配置",children:"#"})]}),"\n",(0,s.jsxs)(r.h3,{id:"111创建configyaml文件",children:["1.1.1创建config.yaml文件",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#111创建configyaml文件",children:"#"})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yaml",children:"apiVersion: v1\r\nkind: ConfigMap\r\nmetadata:\r\n  name: prometheus-config\r\n  namespace: prometheus\r\ndata:\r\n  prometheus.yml: |\r\n    global:\r\n      scrape_interval:     15s \r\n      evaluation_interval: 15s\r\n    scrape_configs:\r\n      - job_name: 'prometheus'\r\n        static_configs:\r\n        - targets: ['localhost:9090']\n"})}),"\n",(0,s.jsxs)(r.h3,{id:"112创建configmap",children:["1.1.2创建ConfigMap",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#112创建configmap",children:"#"})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"kubectl apply -f config.yaml\n"})}),"\n",(0,s.jsxs)(r.h2,{id:"12-使用deployment部署prometheus",children:["1.2 使用Deployment部署Prometheus",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#12-使用deployment部署prometheus",children:"#"})]}),"\n",(0,s.jsxs)(r.h3,{id:"121创建prometheus_deployyaml文件",children:["1.2.1创建prometheus_deploy.yaml文件",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#121创建prometheus_deployyaml文件",children:"#"})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yaml",children:'# 创建service\r\napiVersion: v1\r\nkind: "Service"\r\nmetadata:\r\n  name: prometheus\r\n  namespace: prometheus\r\n  labels:\r\n    name: prometheus\r\nspec:\r\n  ports:\r\n  - name: prometheus\r\n    protocol: TCP\r\n    port: 9090\r\n    targetPort: 9090\r\n  selector:\r\n    app: prometheus\r\n  type: NodePort\r\n---\r\n# 创建deployment\r\napiVersion: apps/v1\r\nkind: Deployment\r\nmetadata:\r\n  labels:\r\n    name: prometheus\r\n  name: prometheus\r\n  namespace: prometheus\r\nspec:\r\n  replicas: 1\r\n  selector:\r\n    matchLabels:\r\n      app: prometheus\r\n  template:\r\n    metadata:\r\n      labels:\r\n        app: prometheus\r\n    spec:\r\n      containers:\r\n      - name: prometheus\r\n        image: prom/prometheus:v2.2.1\r\n        command:\r\n        - "/bin/prometheus"\r\n        args:\r\n        - "--config.file=/etc/prometheus/prometheus.yml"\r\n        ports:\r\n        - containerPort: 9090\r\n          protocol: TCP\r\n        volumeMounts:\r\n        - mountPath: "/etc/prometheus"\r\n          name: prometheus-config\r\n      volumes:\r\n      - name: prometheus-config\r\n        configMap:\r\n          name: prometheus-config\n'})}),"\n",(0,s.jsxs)(r.h3,{id:"122-创建prometheus-deployment与service",children:["1.2.2 创建prometheus Deployment与Service",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#122-创建prometheus-deployment与service",children:"#"})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"kubectl apply -f prometheus_deploy.yaml\n"})}),"\n",(0,s.jsxs)(r.h2,{id:"13访问prometheus服务",children:["1.3访问Prometheus服务",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#13访问prometheus服务",children:"#"})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"# 查看Prometheus服务\r\nkubectl get svc -n prometheus\r\n\r\nNAME         TYPE       CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE\r\nprometheus   NodePort   10.96.165.65   <none>        9090:30525/TCP   25m\n"})}),"\n",(0,s.jsxs)(r.p,{children:["至此，可以通过",(0,s.jsx)(r.a,{href:"http://10.1.93.190:30525/",target:"_blank",rel:"noopener noreferrer",children:"http://10.1.93.190:30525/"})," 查看部署的Prometheus服务。"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)("img",{src:c,alt:"1_1"})}),"\n",(0,s.jsxs)(r.h1,{id:"2kubernetes下的服务发现",children:["2.Kubernetes下的服务发现",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#2kubernetes下的服务发现",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"原理：==Prometheus通过与kubernetes API的交互，实现动态发现kubernetes中部署的所有可监控的目标资源。=="}),"\n",(0,s.jsxs)(r.h2,{id:"21kubernetes访问授权",children:["2.1kubernetes访问授权",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#21kubernetes访问授权",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:["为了能够让Prometheus能够访问受到认证保护的Kubernetes API，我们需要对Prometheus进行访问授权。授权方法为：",(0,s.jsx)(r.strong,{children:"定义ClusterRole并赋予相应访问权限 ---\x3e创建ServiceAccount ---\x3e将ServiceAccount与ClusterRole进行绑定(即创建ClusterRoleBinding)"}),"。可以通过yaml文件完成以上操作。"]}),"\n",(0,s.jsxs)(r.h3,{id:"221创建rbacyaml文件",children:["2.2.1创建rbac.yaml文件",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#221创建rbacyaml文件",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"注意：ClusterRole是全局的，不需要指定namespace；ServiceAccount是属于特定名称空间的，需要指定名称空间(prometheus)。"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yaml",children:'apiVersion: rbac.authorization.k8s.io/v1\r\nkind: ClusterRole\r\nmetadata:\r\n  name: prometheus\r\nrules:\r\n- apiGroups: [""]\r\n  resources:\r\n  - nodes\r\n  - nodes/proxy\r\n  - services\r\n  - endpoints\r\n  - pods\r\n  verbs: ["get", "list", "watch"]\r\n- apiGroups:\r\n  - extensions\r\n  resources:\r\n  - ingresses\r\n  verbs: ["get", "list", "watch"]\r\n- nonResourceURLs: ["/metrics"]\r\n  verbs: ["get"]\r\n---\r\napiVersion: v1\r\nkind: ServiceAccount\r\nmetadata:\r\n  name: prometheus\r\n  namespace: prometheus\r\n---\r\napiVersion: rbac.authorization.k8s.io/v1\r\nkind: ClusterRoleBinding\r\nmetadata:\r\n  name: prometheus\r\nroleRef:\r\n  apiGroup: rbac.authorization.k8s.io\r\n  kind: ClusterRole\r\n  name: prometheus\r\nsubjects:\r\n- kind: ServiceAccount\r\n  name: prometheus\r\n  namespace: prometheus\n'})}),"\n",(0,s.jsxs)(r.h3,{id:"222-访问授权",children:["2.2.2 访问授权",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#222-访问授权",children:"#"})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"kubectl apply -f rbac.yaml\n"})}),"\n",(0,s.jsxs)(r.h2,{id:"22使用指定的serviceaccount创建pod",children:["2.2使用指定的ServiceAccount创建Pod",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#22使用指定的serviceaccount创建pod",children:"#"})]}),"\n",(0,s.jsxs)(r.h3,{id:"221修改prometheus_deployyaml文件",children:["2.2.1修改prometheus_deploy.yaml文件",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#221修改prometheus_deployyaml文件",children:"#"})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yaml",children:"spec:\r\n  replicas: 1\r\n  selector:\r\n    matchLabels:\r\n      app: prometheus\r\n  template:\r\n    metadata:\r\n      labels:\r\n        app: prometheus\r\n    spec:\r\n      # 添加ServiceAccountName和ServiceAccount\r\n      serviceAccountName: prometheus\r\n      serviceAccount: prometheus\n"})}),"\n",(0,s.jsxs)(r.h3,{id:"222-升级deployment",children:["2.2.2 升级Deployment",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#222-升级deployment",children:"#"})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yaml",children:"kubectl apply -f prometheus_deploy.yaml\n"})}),"\n",(0,s.jsxs)(r.h3,{id:"223-查看证书",children:["2.2.3 查看证书",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#223-查看证书",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"指定ServiceAccount创建的Pod，会自动将用于访问Kubernetes API的CA证书以及当前账户对应的访问令牌文件挂载到Pod实例的 /var/run/secrets/kubernetes.io/serviceaccount/ 目录下："}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"# 查看pod名字\r\n[root@master prometheus]# kubectl get pod -n prometheus\r\nNAME                          READY   STATUS    RESTARTS   AGE\r\nprometheus-5674f89f9f-shcqw   1/1     Running   0          5m45s\r\n\r\n# 查看pod的/var/run/secrets/kubernetes.io/serviceaccount/目录下文件列表\r\n[root@master prometheus]# kubectl exec -it prometheus-5674f89f9f-shcqw -n prometheus -- ls /var/run/secrets/kubernetes.io/serviceaccount/\r\nca.crt     namespace  token\n"})}),"\n",(0,s.jsxs)(r.h2,{id:"23服务发现",children:["2.3服务发现",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#23服务发现",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:["目前，Prometheus通过Kubernetes API目前主要支持5种服务发现模式，包括",(0,s.jsx)(r.code,{children:"Node"}),"、",(0,s.jsx)(r.code,{children:"Service"}),"、",(0,s.jsx)(r.code,{children:"Pod"}),"、",(0,s.jsx)(r.code,{children:"Endpoints"}),"、",(0,s.jsx)(r.code,{children:"Ingress"}),"。"]}),"\n",(0,s.jsxs)(r.h3,{id:"231部署node-exporter",children:["2.3.1部署Node Exporter",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#231部署node-exporter",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:["在Prometheus的架构设计中，Prometheus server并不直接服务监控的特定目标，其主要负责数据的收集、存储以及对外提供数据查询支持。因此，为了能够监控到某些东西(如主机的CPU使用率)，我们需要使用Node Exporter。==Prometheus周期性的从Node Exporter暴露的HTTP服务地址(通常是",(0,s.jsx)(r.a,{href:"http://IP:port/netrices)%E6%8B%89%E5%8F%96%E7%9B%91%E6%8E%A7%E6%A0%B7%E6%9C%AC%E6%95%B0%E6%8D%AE%E3%80%82==",target:"_blank",rel:"noopener noreferrer",children:"http://IP:port/netrices)拉取监控样本数据。=="})]}),"\n",(0,s.jsxs)(r.h4,{id:"2311创建node_exporteryaml文件",children:["2.3.1.1创建node_exporter.yaml文件",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#2311创建node_exporteryaml文件",children:"#"})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yaml",children:"apiVersion: apps/v1\r\nkind: DaemonSet\r\nmetadata:\r\n  name: node-exporter\r\n  namespace: prometheus\r\n  labels:\r\n    k8s-app: node-exporter\r\nspec:\r\n  selector:\r\n    matchLabels:\r\n      k8s-app: node-exporter\r\n  template:\r\n    metadata:\r\n      labels:\r\n        k8s-app: node-exporter\r\n    spec:\r\n      containers:\r\n      - image: prom/node-exporter\r\n        name: node-exporter\r\n        ports:\r\n        - containerPort: 9100\r\n          protocol: TCP\r\n          name: http\r\n---\r\napiVersion: v1\r\nkind: Service\r\nmetadata:\r\n  labels:\r\n    k8s-app: node-exporter\r\n  name: node-exporter\r\n  namespace: prometheus\r\nspec:\r\n  ports:\r\n  - name: http\r\n    port: 9100\r\n    nodePort: 31672\r\n    protocol: TCP\r\n  type: NodePort\r\n  selector:\r\n    k8s-app: node-exporter\n"})}),"\n",(0,s.jsxs)(r.h4,{id:"2312创建node-exporter-daemonset与service",children:["2.3.1.2创建Node Exporter DaemonSet与Service",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#2312创建node-exporter-daemonset与service",children:"#"})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"# 部署\r\n[root@master prometheus]kubectl apply -f node_exporter.yaml\r\n\r\n# 查看服务：Node Exporter服务外部访问端口号为31672\r\n[root@master prometheus]# kubectl get service -n prometheus\r\nNAME            TYPE       CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE\r\nnode-exporter   NodePort   10.96.55.154   <none>        9100:31672/TCP   43m\r\nprometheus      NodePort   10.96.165.65   <none>        9090:30525/TCP   6h34m\n"})}),"\n",(0,s.jsxs)(r.h3,{id:"232修改configyaml文件",children:["2.3.2修改config.yaml文件",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#232修改configyaml文件",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"以下通过修改config.yaml文件实现Prometheus对以上5种服务的监控："}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yaml",children:"apiVersion: v1\r\nkind: ConfigMap\r\nmetadata:\r\n  name: prometheus-config\r\n  namespace: prometheus\r\ndata:\r\n  prometheus.yml: |-\r\n    global:\r\n      scrape_interval:     15s \r\n      evaluation_interval: 15s\r\n    scrape_configs:\r\n\r\n    - job_name: 'kubernetes-nodes'\r\n      tls_config:\r\n        ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt\r\n      bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token\r\n      kubernetes_sd_configs:\r\n      - role: node\r\n      # Prometheus在发现Node模式的服务时，访问端口默认是10250，是需要认证的https协议才有权访问的。实际上我们并不是希望访问10250端口的/metrics，而是访问Node Exporter的/metrics。以下是将10250端口替换为Node Exporter的端口(即31672，端口查询方法在标题2.3.1.2中)\r\n      relabel_configs:\r\n      - source_labels: [__address__]\r\n        regex: '(.*):10250'\r\n        replacement: '${1}:31672'\r\n        target_label: __address__\r\n        action: replace\r\n\r\n    - job_name: 'kubernetes-service'\r\n      tls_config:\r\n        ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt\r\n      bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token\r\n      kubernetes_sd_configs:\r\n      - role: service\r\n\r\n    - job_name: 'kubernetes-endpoints'\r\n      tls_config:\r\n        ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt\r\n      bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token\r\n      kubernetes_sd_configs:\r\n      - role: endpoints\r\n\r\n    - job_name: 'kubernetes-ingress'\r\n      tls_config:\r\n        ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt\r\n      bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token\r\n      kubernetes_sd_configs:\r\n      - role: ingress\r\n\r\n    - job_name: 'kubernetes-pods'\r\n      tls_config:\r\n        ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt\r\n      bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token\r\n      kubernetes_sd_configs:\r\n      - role: pod\n"})}),"\n",(0,s.jsxs)(r.h3,{id:"233更新prometheus",children:["2.3.3更新Prometheus",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#233更新prometheus",children:"#"})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'# 更新Prometheus配置文件\r\nkubectl apply -f config.yaml\r\nconfigmap/prometheus-config configured\r\n\r\n# 查看pod名称，删除pod实例\r\n[root@master prometheus]# kubectl get pod -n prometheus\r\nNAME                          READY   STATUS    RESTARTS   AGE\r\nprometheus-5674f89f9f-shcqw   1/1     Running   0          21m\r\n[root@master prometheus]# kubectl delete pod prometheus-5674f89f9f-shcqw -n prometheus\r\npod "prometheus-5674f89f9f-shcqw" deleted\r\n\r\n# 再次查看pod名称，与上方不一致，Prometheus实例重建成功\r\n[root@master prometheus]# kubectl get pod -n prometheus\r\nNAME                          READY   STATUS    RESTARTS   AGE\r\nprometheus-5674f89f9f-2s48w   1/1     Running   0          20s\r\n\n'})}),"\n",(0,s.jsxs)(r.h3,{id:"234访问prometheus服务",children:["2.3.4访问Prometheus服务",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#234访问prometheus服务",children:"#"})]}),"\n",(0,s.jsxs)(r.h4,{id:"2341-访问service-discovery页面",children:["2.3.4.1 访问Service Discovery页面",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#2341-访问service-discovery页面",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:["Prometheus更新完成后，访问",(0,s.jsx)(r.a,{href:"http://10.1.93.190:30525/%EF%BC%8C%E9%80%9A%E8%BF%87%60Status",target:"_blank",rel:"noopener noreferrer",children:"http://10.1.93.190:30525/，通过`Status"})," ---\x3eService Discovery",(0,s.jsx)(r.code,{children:"页面，可以查看到Prometheus监控到Kubernetes的"}),"Node",(0,s.jsx)(r.code,{children:"、"}),"Service",(0,s.jsx)(r.code,{children:"、"}),"Pod",(0,s.jsx)(r.code,{children:"、"}),"Endpoints",(0,s.jsx)(r.code,{children:"、"}),"Ingress` 5种资源对象了。"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)("img",{src:o,alt:"1616392720399"})}),"\n",(0,s.jsxs)(r.h4,{id:"2342访问targets页面",children:["2.3.4.2访问Targets页面",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#2342访问targets页面",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)("img",{src:a,alt:"1616407155699"})}),"\n",(0,s.jsxs)(r.p,{children:["附：关于以上红色错误信息，可以后期研究prometheus.yml文件中的",(0,s.jsx)(r.code,{children:"relabel_configs"}),"编写规则进行改正。"]}),"\n",(0,s.jsxs)(r.h1,{id:"3其他参考文档",children:["3.其他参考文档",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#3其他参考文档",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:["k8s 部署prometheus+grafana：",(0,s.jsx)(r.a,{href:"https://blog.csdn.net/vic_qxz/article/details/109347645",target:"_blank",rel:"noopener noreferrer",children:"https://blog.csdn.net/vic_qxz/article/details/109347645"})]}),"\n",(0,s.jsxs)(r.p,{children:["其中",(0,s.jsx)(r.code,{children:"prometheus/config.yaml"})," 文件中的IP需要改成自己的IP。"]})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,t.ah)(),e.components);return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}let d=h;h.__RSPRESS_PAGE_META={},h.__RSPRESS_PAGE_META["tang%2FPrometheus%2F2.md"]={toc:[{text:"1.1 使用ConfigMap管理Prometheus配置",id:"11-使用configmap管理prometheus配置",depth:2},{text:"1.1.1创建config.yaml文件",id:"111创建configyaml文件",depth:3},{text:"1.1.2创建ConfigMap",id:"112创建configmap",depth:3},{text:"1.2 使用Deployment部署Prometheus",id:"12-使用deployment部署prometheus",depth:2},{text:"1.2.1创建prometheus_deploy.yaml文件",id:"121创建prometheus_deployyaml文件",depth:3},{text:"1.2.2 创建prometheus Deployment与Service",id:"122-创建prometheus-deployment与service",depth:3},{text:"1.3访问Prometheus服务",id:"13访问prometheus服务",depth:2},{text:"2.1kubernetes访问授权",id:"21kubernetes访问授权",depth:2},{text:"2.2.1创建rbac.yaml文件",id:"221创建rbacyaml文件",depth:3},{text:"2.2.2 访问授权",id:"222-访问授权",depth:3},{text:"2.2使用指定的ServiceAccount创建Pod",id:"22使用指定的serviceaccount创建pod",depth:2},{text:"2.2.1修改prometheus_deploy.yaml文件",id:"221修改prometheus_deployyaml文件",depth:3},{text:"2.2.2 升级Deployment",id:"222-升级deployment",depth:3},{text:"2.2.3 查看证书",id:"223-查看证书",depth:3},{text:"2.3服务发现",id:"23服务发现",depth:2},{text:"2.3.1部署Node Exporter",id:"231部署node-exporter",depth:3},{text:"2.3.1.1创建node_exporter.yaml文件",id:"2311创建node_exporteryaml文件",depth:4},{text:"2.3.1.2创建Node Exporter DaemonSet与Service",id:"2312创建node-exporter-daemonset与service",depth:4},{text:"2.3.2修改config.yaml文件",id:"232修改configyaml文件",depth:3},{text:"2.3.3更新Prometheus",id:"233更新prometheus",depth:3},{text:"2.3.4访问Prometheus服务",id:"234访问prometheus服务",depth:3},{text:"2.3.4.1 访问Service Discovery页面",id:"2341-访问service-discovery页面",depth:4},{text:"2.3.4.2访问Targets页面",id:"2342访问targets页面",depth:4}],title:"3.其他参考文档",frontmatter:{}}}}]);