"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["5060"],{6834:function(e,r,n){n.r(r),n.d(r,{default:function(){return l}});var c=n(85893),s=n(50065);function t(e){let r=Object.assign({h1:"h1",a:"a",p:"p",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.h1,{id:"下载镜像提示没有磁盘空间",children:[(0,c.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#下载镜像提示没有磁盘空间",children:"#"}),"下载镜像提示没有磁盘空间"]}),"\n",(0,c.jsx)(r.p,{children:"1.查看docker根目录"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-shell",meta:"",children:'[root@localhost ~]# docker info | grep -i "docker root dir"\r\n Docker Root Dir: /docker\n'})}),"\n",(0,c.jsx)(r.p,{children:"2.查看目录剩余空间"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-shell",meta:"",children:"[root@localhost ~]# df -hl /docker\r\n文件系统                 容量  已用  可用 已用% 挂载点\r\n/dev/mapper/centos-root  6.2G  5.5G  803M   88% /\n"})}),"\n",(0,c.jsx)(r.p,{children:"磁盘空间只剩803M可用，可以将他放到一个更大的目录中去。"}),"\n",(0,c.jsx)(r.p,{children:"3.创建目标目录"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-shell",meta:"",children:"mkdir -p /etc/systemd/system/docker.service.d/\n"})}),"\n",(0,c.jsx)(r.p,{children:"4.创建配置文件"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-shell",meta:"",children:"[root@localhost ~]# cat /etc/systemd/system/docker.service.d/devicemapper.conf\r\n[Service]\r\nExecStart=\r\nExecStart=/usr/bin/dockerd  --graph=/docker-root\n"})}),"\n",(0,c.jsx)(r.p,{children:"5.重启docker"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-shell",meta:"",children:"systemctl daemon-reload\r\nsystemctl restart docker\r\nsystemctl enable docker\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,s.ah)(),e.components);return r?(0,c.jsx)(r,Object.assign({},e,{children:(0,c.jsx)(t,e)})):t(e)}let l=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["tang%2Fk8s%2F%E9%94%99%E8%AF%AF%E9%9B%86%E9%94%A6%2F1.md"]={toc:[],title:"下载镜像提示没有磁盘空间",headingTitle:"下载镜像提示没有磁盘空间",frontmatter:{}}}}]);