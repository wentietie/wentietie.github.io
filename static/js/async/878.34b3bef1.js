"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["878"],{83822:function(e,r,n){n.r(r),n.d(r,{default:()=>g});var a=n("85893"),s=n("50065");let o=n.p+"static/image/image-20210926173948018.5500e4d4.png",i=n.p+"static/image/image-20210926174422445.e76ff9c6.png",t=n.p+"static/image/image-20210927143258137.dfa778f2.png",d=n.p+"static/image/image-20210927151040966.f1823f2e.png",c=n.p+"static/image/image-20210927164301904.5f108175.png",l=n.p+"static/image/image-20210927164615544.0d433b8e.png",h=n.p+"static/image/image-20210927163554140.14508c40.png",m=n.p+"static/image/image-20210927163700269.aa499afc.png",p=n.p+"static/image/image-20210927165146601.970f31ef.png",f=n.p+"static/image/image-20210927165458817.1b710df7.png",j=n.p+"static/image/image-20210927170033213.f44a6ca0.png",k=n.p+"static/image/image-20210927170100944.04707379.png";function u(e){let r=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",h3:"h3",blockquote:"blockquote",ul:"ul",li:"li",img:"img",pre:"pre",h4:"h4",strong:"strong"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.h1,{id:"docker-进阶",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#docker-进阶",children:"#"}),"Docker 进阶"]}),"\n",(0,a.jsxs)(r.h2,{id:"docker-compose",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#docker-compose",children:"#"}),"Docker Compose"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.code,{children:"[DaoCloud | Docker 极速下载](http://get.daocloud.io/)"})}),"\n",(0,a.jsxs)(r.h3,{id:"简介",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#简介",children:"#"}),"简介"]}),"\n",(0,a.jsx)(r.p,{children:"通过YAML文件，定义、运行多个容器。"}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"使用Docker Compose的三步骤："}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"1.定义Dockerfile文件。"}),"\n",(0,a.jsx)(r.p,{children:"2.编写docker-compose.yaml文件"}),"\n",(0,a.jsx)(r.p,{children:"3.启动项目"}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"狂神说"}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"Compose是Docker官方开源项目，需要安装！"}),"\n",(0,a.jsx)(r.p,{children:"Compose重要概念："}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"服务Services：单个的容器/应用"}),"\n",(0,a.jsx)(r.li,{children:"项目Project：一组关联的容器"}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.code,{children:"大神福利看"})}),"\n",(0,a.jsxs)(r.h3,{id:"安装",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#安装",children:"#"}),"安装"]}),"\n",(0,a.jsx)(r.p,{children:"1.下载"}),"\n",(0,a.jsxs)(r.p,{children:["可以在",(0,a.jsx)(r.a,{href:"http://get.daocloud.io/",rel:"noopener noreferrer",target:"_blank",children:"http://get.daocloud.io/"})," 网站中找到国内下载地址"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"image-20210926173948018",src:o})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",meta:"",children:"curl -L https://get.daocloud.io/docker/compose/releases/download/1.29.2/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose\n"})}),"\n",(0,a.jsx)(r.p,{children:"2.授权"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",meta:"",children:"chmod +x /usr/local/bin/docker-compose\n"})}),"\n",(0,a.jsx)(r.p,{children:"3.验证是否安装成功"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",meta:"",children:"docker-compose --version\n"})}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"image-20210926174422445",src:i})}),"\n",(0,a.jsxs)(r.h3,{id:"体验",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#体验",children:"#"}),"体验"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["官方python计数器应用。",(0,a.jsx)(r.a,{href:"https://docs.docker.com/compose/gettingstarted/",rel:"noopener noreferrer",target:"_blank",children:"Get started with Docker Compose | Docker Documentation"})]}),"\n",(0,a.jsxs)(r.li,{children:["搭建WordPress博客应用。",(0,a.jsx)(r.a,{href:"https://docs.docker.com/samples/wordpress/",rel:"noopener noreferrer",target:"_blank",children:"Quickstart: Compose and WordPress | Docker Documentation"})]}),"\n"]}),"\n",(0,a.jsxs)(r.h2,{id:"docker-swarm",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#docker-swarm",children:"#"}),"Docker Swarm"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.a,{href:"https://docs.docker.com/engine/swarm/how-swarm-mode-works/nodes/",rel:"noopener noreferrer",target:"_blank",children:"How nodes work | Docker Documentation"})}),"\n",(0,a.jsxs)(r.h3,{id:"安装-1",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#安装-1",children:"#"}),"安装"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",meta:"",children:'# 准备好4台虚拟机（centos7.8系统），3台用作master节点（10.1.93.40, 10.1.93.42, 10.1.93.43），一台用作node节点（10.1.93.44）\r\n\r\n# 关闭虚拟机防火墙\r\n[root@localhost ~]# systemctl stop firewalld\r\n# 开机不启动防火墙\r\n[root@localhost ~]# systemctl disable firewalld\r\nRemoved symlink /etc/systemd/system/multi-user.target.wants/firewalld.service.\r\nRemoved symlink /etc/systemd/system/dbus-org.fedoraproject.FirewallD1.service.\r\n\r\n# 设置主机名分别为master1、master2、master3、node（以master1为例）\r\n[root@localhost ~]# hostnamectl set-hostname master1\r\n[root@localhost ~]# hostname\r\nmaster1\r\n\r\n\r\n# 查看docker swarm 帮助文档\r\n[root@localhost ~]# docker swarm --help\r\n\r\nUsage:  docker swarm COMMAND\r\n\r\nManage Swarm\r\n\r\nCommands:\r\n  ca          Display and rotate the root CA\r\n  init        Initialize a swarm # 初始化docker swarm\r\n  join        Join a swarm as a node and/or manager # 在docker swarm集群中假如一个node（工作）节点或者manager（管理）节点\r\n  join-token  Manage join tokens # 管理加入swarm集群的token\r\n  leave       Leave the swarm # 离开swarm集群\r\n  unlock      Unlock swarm\r\n  unlock-key  Manage the unlock key\r\n  update      Update the swarm\r\n\r\nRun \'docker swarm COMMAND --help\' for more information on a command.\r\n\r\n# 查看swarm初始化命令的帮助文档\r\n[root@localhost ~]# docker swarm init --help\r\n\r\nUsage:  docker swarm init [OPTIONS]\r\n\r\nInitialize a swarm\r\n\r\nOptions:\r\n      --advertise-addr string                  Advertised address (format: <ip|interface>[:port])  # 节点的ip\r\n      --autolock                               Enable manager autolocking (requiring an unlock key to start a stopped manager)\r\n      --availability string                    Availability of the node ("active"|"pause"|"drain") (default "active")\r\n      --cert-expiry duration                   Validity period for node certificates (ns|us|ms|s|m|h) (default 2160h0m0s)\r\n      --data-path-addr string                  Address or interface to use for data path traffic (format: <ip|interface>)\r\n      --data-path-port uint32                  Port number to use for data path traffic (1024 - 49151). If no value is set or is set to 0, the default port (4789) is used.\r\n      --default-addr-pool ipNetSlice           default address pool in CIDR format (default [])\r\n      --default-addr-pool-mask-length uint32   default address pool subnet mask length (default 24)\r\n      --dispatcher-heartbeat duration          Dispatcher heartbeat period (ns|us|ms|s|m|h) (default 5s)\r\n      --external-ca external-ca                Specifications of one or more certificate signing endpoints\r\n      --force-new-cluster                      Force create a new cluster from current state\r\n      --listen-addr node-addr                  Listen address (format: <ip|interface>[:port]) (default 0.0.0.0:2377)\r\n      --max-snapshots uint                     Number of additional Raft snapshots to retain\r\n      --snapshot-interval uint                 Number of log entries between Raft snapshots (default 10000)\r\n      --task-history-limit int                 Task history retention limit (default 5)\r\n[root@localhost ~]# ip a s\r\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000\r\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\r\n    inet 127.0.0.1/8 scope host lo\r\n       valid_lft forever preferred_lft forever\r\n    inet6 ::1/128 scope host\r\n       valid_lft forever preferred_lft forever\r\n2: enp0s3: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000\r\n    link/ether 08:00:27:12:b7:b0 brd ff:ff:ff:ff:ff:ff\r\n    inet 10.1.93.12/24 brd 10.1.93.255 scope global noprefixroute dynamic enp0s3\r\n       valid_lft 28641sec preferred_lft 28641sec\r\n    inet 10.1.93.40/24 brd 10.1.93.255 scope global secondary noprefixroute enp0s3\r\n       valid_lft forever preferred_lft forever\r\n    inet6 fe80::8f66:341c:c632:dbe/64 scope link tentative noprefixroute dadfailed\r\n       valid_lft forever preferred_lft forever\r\n    inet6 fe80::11b0:6c7b:f3d5:528/64 scope link tentative noprefixroute dadfailed\r\n       valid_lft forever preferred_lft forever\r\n    inet6 fe80::a259:11c5:d707:87d6/64 scope link tentative noprefixroute dadfailed\r\n       valid_lft forever preferred_lft forever\r\n3: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default\r\n    link/ether 02:42:13:36:ad:88 brd ff:ff:ff:ff:ff:ff\r\n    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0\r\n       valid_lft forever preferred_lft forever\r\n       \r\n# 初始化swarm集群\r\n[root@localhost ~]# docker swarm init --advertise-addr 10.1.93.40\r\nSwarm initialized: current node (u0bt4gq1cjcbrr5sm75w7btmg) is now a manager. # swarm初始化，当前节点是一个manager节点\r\n\r\nTo add a worker to this swarm, run the following command: # 如果想要加入一个worker（工作）节点，就执行下面的命令\r\n\r\n    docker swarm join --token SWMTKN-1-0sal3yuz8pf9fqku0q284jpwonbulc1auelurkcikqhyqhk91q-bp090fqdn83y8tu0340xjty5n 10.1.93.40:2377\r\n\r\nTo add a manager to this swarm, run \'docker swarm join-token manager\' and follow the instructions. # 如果想要加入一个manager节点，执行该命令来获取令牌。\r\n\r\n# 获取worker节点令牌 docker swarm join-token worker\r\n\r\n# 获取manager节点令牌 docker swarm join-token manager\r\n\r\n\r\n# 加入node节点（在node节点中执行）\r\n[root@localhost ~]# docker swarm join --token SWMTKN-1-0sal3yuz8pf9fqku0q284jpwonbulc1auelurkcikqhyqhk91q-bp090fqdn83y8tu0340xjty5n 10.1.93.40:2377\r\nThis node joined a swarm as a worker.\r\n# 查看node节点是否加入成功（在master1节点中执行）\r\nroot@localhost ~]# docker node ls\r\nID                            HOSTNAME   STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION\r\nu0bt4gq1cjcbrr5sm75w7btmg *   master1    Ready     Active         Leader           20.10.8\r\nygfjk8z1o38ojxcp9bmh8djxs     node       Ready     Active                          20.10.8\r\n# 新增node，node节点加入成功\r\n\r\n# 加入manager节点\r\n# 获取manager节点令牌（在master节点中执行）\r\n[root@localhost ~]# docker swarm join-token manager\r\nTo add a manager to this swarm, run the following command:\r\n\r\n    docker swarm join --token SWMTKN-1-0sal3yuz8pf9fqku0q284jpwonbulc1auelurkcikqhyqhk91q-5ruytdhj863jahojyzd0h031g 10.1.93.40:2377\r\n# 加入master2（在master2中执行）\r\n[root@localhost ~]# docker swarm join --token SWMTKN-1-0sal3yuz8pf9fqku0q284jpwonbulc1auelurkcikqhyqhk91q-5ruytdhj863jahojyzd0h031g 10.1.93.40:2377\r\nThis node joined a swarm as a manager.\r\n# 加入master3（在master3中执行）\r\n[root@localhost ~]# docker swarm join --token SWMTKN-1-0sal3yuz8pf9fqku0q284jpwonbulc1auelurkcikqhyqhk91q-5ruytdhj863jahojyzd0h031g 10.1.93.40:2377\r\nThis node joined a swarm as a manager.\r\n# 查看manager节点是否加入成功（在master1节点中执行）\r\n[root@localhost ~]# docker node ls\r\nID                            HOSTNAME   STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION\r\nu0bt4gq1cjcbrr5sm75w7btmg *   master1    Ready     Active         Leader           20.10.8\r\neumyzjkk6y8hy3qiw1fdiu6nm     master2    Ready     Active         Reachable        20.10.8\r\njjcybt4dhej1tfl9zmhatnvzi     master3    Ready     Active         Reachable        20.10.8\r\nygfjk8z1o38ojxcp9bmh8djxs     node       Ready     Active                          20.10.8\r\n# 新增master2， master3，两个master节点加入成功\r\n# 至此，集群搭建完毕\r\n# 只有管理节点才能执行docker swarm命令.\n'})}),"\n",(0,a.jsxs)(r.h3,{id:"raft协议",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#raft协议",children:"#"}),"Raft协议"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"image-20210927143258137",src:t})}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"定义：保证大多数节点存活才可以使用。"}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"如果两主两从，挂了一个主节点，另外一个主节点也不能用了。"}),"\n",(0,a.jsx)(r.p,{children:"如果三住一从，挂了一个主节点，另外两个可以使用；如果挂了两个主节点，另外一个也不能用了。"}),"\n",(0,a.jsxs)(r.h3,{id:"体会",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#体会",children:"#"}),"体会"]}),"\n",(0,a.jsx)(r.p,{children:"可以类比k8s。"}),"\n",(0,a.jsxs)(r.p,{children:["命令：",(0,a.jsx)(r.code,{children:"docker service"})]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"image-20210927151040966",src:d})}),"\n",(0,a.jsxs)(r.h4,{id:"创建服务",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#创建服务",children:"#"}),"创建服务"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",meta:"",children:"# 启动nginx服务\r\n[root@localhost ~]# docker service create -p 8888:80 --name my-nginx nginx\r\n3ab10q4uk6ujhiukrelj8i804\r\noverall progress: 1 out of 1 tasks\r\n1/1: running   [==================================================>]\r\nverify: Service converged\r\n\r\n# 查看服务列表\r\n[root@localhost ~]# docker service ls\r\nID             NAME       MODE         REPLICAS   IMAGE          PORTS\r\n3ab10q4uk6uj   my-nginx   replicated   1/1        nginx:latest   *:8888->80/tcp\r\n\r\n# 查看服务运行状态\r\n[root@localhost ~]# docker service ps my-nginx\r\nID             NAME         IMAGE          NODE      DESIRED STATE   CURRENT STATE           ERROR     PORTS\r\n89duy7m0qs22   my-nginx.1   nginx:latest   master1   Running         Running 4 minutes ago\n"})}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"dokcer run 和 docker service 对比："}),"\n"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"docker run：容器启动，单机版，不具有扩缩容功能"}),"\n",(0,a.jsx)(r.li,{children:"docker service：服务启动，集群操作，具有扩缩容功能"}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"==docker swarm创建的服务随机分配到各个节点上，包括master节点和node节点=="}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"副本服务与全局服务"}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"image-20210927164301904",src:c})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"副本服务：只运行在worker节点上"}),"\n",(0,a.jsx)(r.li,{children:"全局服务：既可运行在worker节点上，又可运行在manager节点上。默认为全局服务"}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"==可以使用--mode设置服务规则=="}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"image-20210927164615544",src:l})}),"\n",(0,a.jsxs)(r.h4,{id:"动态扩缩容",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#动态扩缩容",children:"#"}),"动态扩缩容"]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"两种方法"}),"\n"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"docker service update --replicas"}),"\n",(0,a.jsx)(r.li,{children:"docker service scale"}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",meta:"",children:"# 使用 docker service update --replicas 将my-nginx扩展为3个副本\r\n[root@localhost ~]# docker service update --replicas 3 my-nginx\r\nmy-nginx\r\noverall progress: 3 out of 3 tasks\r\n1/3: running   [==================================================>]\r\n2/3: running   [==================================================>]\r\n3/3: running   [==================================================>]\r\nverify: Service converged\r\n\r\n# 查看服务列表\r\n[root@localhost ~]# docker service ls\r\nID             NAME       MODE         REPLICAS   IMAGE          PORTS\r\n3ab10q4uk6uj   my-nginx   replicated   3/3        nginx:latest   *:8888->80/tcp\r\n\r\n# 使用docker service scale 将my-nginx扩展为5个副本\r\n[root@localhost ~]# docker service scale my-nginx=5\r\nmy-nginx scaled to 5\r\noverall progress: 5 out of 5 tasks\r\n1/5: running   [==================================================>]\r\n2/5: running   [==================================================>]\r\n3/5: running   [==================================================>]\r\n4/5: running   [==================================================>]\r\n5/5: running   [==================================================>]\r\nverify: Service converged\r\n\r\n# 查看服务列表\r\n[root@localhost ~]# docker service ls\r\nID             NAME       MODE         REPLICAS   IMAGE          PORTS\r\n3ab10q4uk6uj   my-nginx   replicated   5/5        nginx:latest   *:8888->80/tcp\n"})}),"\n",(0,a.jsx)(r.p,{children:"动态更新"}),"\n",(0,a.jsx)(r.p,{children:"灰度发布（金丝雀发布）"}),"\n",(0,a.jsxs)(r.h3,{id:"概念",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#概念",children:"#"}),"概念"]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"task：容器内的命令，细节任务！"}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"一个service可创建多个副本，每个副本都是一个task任务，每个task任务中运行一个容器。"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"image-20210927163554140",src:h})}),"\n",(0,a.jsxs)(r.h3,{id:"内部原理",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#内部原理",children:"#"}),"内部原理"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"image-20210927163700269",src:m})}),"\n",(0,a.jsxs)(r.h3,{id:"网络模式",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#网络模式",children:"#"}),"网络模式"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Overlay：使得各个节点能够ping通，变成一个集群。"}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"ingress：特殊的Overlay，具有负载均衡的功能。"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"image-20210927165146601",src:p})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"image-20210927165458817",src:f})}),"\n",(0,a.jsxs)(r.h2,{id:"docker-stack",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#docker-stack",children:"#"}),"Docker Stack"]}),"\n",(0,a.jsx)(r.p,{children:"docker-compose 单击部署项目。"}),"\n",(0,a.jsx)(r.p,{children:"Docker Stack 集群部署项目。"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",meta:"",children:"# 单击部署\r\ndocker-compose up -d wordpress\r\n\r\n# 集群部署\r\ndocker stack deploy wordpress.yaml\n"})}),"\n",(0,a.jsxs)(r.h2,{id:"docker-secret",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#docker-secret",children:"#"}),"Docker Secret"]}),"\n",(0,a.jsx)(r.p,{children:"安全！配置密码，证书"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"image-20210927170033213",src:j})}),"\n",(0,a.jsxs)(r.h2,{id:"docker-config",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#docker-config",children:"#"}),"Docker Config"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"image-20210927170100944",src:k})}),"\n",(0,a.jsxs)(r.h2,{id:"扩展到k8s",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#扩展到k8s",children:"#"}),"扩展到K8S"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"云原生时代"})}),"\n",(0,a.jsx)(r.p,{children:"超过10台服务器，首选k8s，而非docker swarm！"}),"\n",(0,a.jsx)(r.p,{children:"先掌握go语言，在学习k8s会更好。"}),"\n",(0,a.jsx)(r.p,{children:"java就是用go语言写的。"}),"\n",(0,a.jsx)(r.p,{children:"go的效率接近于c语言。"})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,s.ah)(),e.components);return r?(0,a.jsx)(r,Object.assign({},e,{children:(0,a.jsx)(u,e)})):u(e)}let g=x;x.__RSPRESS_PAGE_META={},x.__RSPRESS_PAGE_META["tang%2Fdocker%2FDocker.md"]={toc:[{id:"docker-compose",text:"Docker Compose",depth:2},{id:"简介",text:"简介",depth:3},{id:"安装",text:"安装",depth:3},{id:"体验",text:"体验",depth:3},{id:"docker-swarm",text:"Docker Swarm",depth:2},{id:"安装-1",text:"安装",depth:3},{id:"raft协议",text:"Raft协议",depth:3},{id:"体会",text:"体会",depth:3},{id:"创建服务",text:"创建服务",depth:4},{id:"动态扩缩容",text:"动态扩缩容",depth:4},{id:"概念",text:"概念",depth:3},{id:"内部原理",text:"内部原理",depth:3},{id:"网络模式",text:"网络模式",depth:3},{id:"docker-stack",text:"Docker Stack",depth:2},{id:"docker-secret",text:"Docker Secret",depth:2},{id:"docker-config",text:"Docker Config",depth:2},{id:"扩展到k8s",text:"扩展到K8S",depth:2}],title:"Docker 进阶",headingTitle:"Docker 进阶",frontmatter:{}}}}]);