"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["3212"],{96259:function(e,n,r){r.r(n),r.d(n,{default:function(){return h}});var d=r(85893),s=r(50065);function c(e){let n=Object.assign({h1:"h1",a:"a",pre:"pre",code:"code",p:"p",h2:"h2"},(0,s.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"docker-安装-ftp-服务端",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#docker-安装-ftp-服务端",children:"#"}),"docker 安装 ftp 服务端"]}),"\n",(0,d.jsxs)(n.h1,{id:"1拉取镜像",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1拉取镜像",children:"#"}),"1.拉取镜像"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",meta:"",children:"docker pull fauria/vsftpd\n"})}),"\n",(0,d.jsx)(n.p,{children:"fauria/vsftpd是官方的FTP服务器镜像"}),"\n",(0,d.jsxs)(n.h2,{id:"2启动docker容器",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2启动docker容器",children:"#"}),"2.启动docker容器"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",meta:"",children:"docker run -d -v /home/share/pano_sources/pano-dev-sources-pvc-555f9685-2ff8-4932-bcfd-f2ac309925e7:/home/vsftpd/pano \\\r\n-p 20:20 -p 21:21 -p  21100-21110:21100-21110 \\\r\n-e FTP_USER=pano -e FTP_PASS=bd_21_pano \\\r\n-e PASV_ADDRESS=10.1.93.172 \\\r\n-e PASV_MIN_PORT=21100 -e PASV_MAX_PORT=21110 \\\r\n--name vsftpd1 --restart=always fauria/vsftpd\n"})}),"\n",(0,d.jsx)(n.p,{children:"参数说明："}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"-p "}),"是将容器中的端口映射到宿主机的端口，冒号前边是宿主机的端口；"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"/home/share/pano_sources/pano-dev-sources-pvc-555f9685-2ff8-4932-bcfd-f2ac309925e7:/home/vsftpd/pano"}),"是将容器中的",(0,d.jsx)(n.code,{children:"/home/vsftpd/pano"}),"挂载到宿主机的",(0,d.jsx)(n.code,{children:"/home/share/pano_sources/pano-dev-sources-pvc-555f9685-2ff8-4932-bcfd-f2ac309925e7"}),"路径下；"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"FTP_USER"}),"、",(0,d.jsx)(n.code,{children:"FTP_PASS"}),"分别是FTP登录的用户名和密码；"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"PASV_ADDRESS"}),"是宿主机IP；"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"PASV_MIN_PORT"}),"、",(0,d.jsx)(n.code,{children:"PASV_MAX_PORT"}),"分别是给客户端提供下载服务随机的端口号范围，默认是21100-2111。此处要和前面docker端口映射设置成一样。"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"name"}),"是容器名称；"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"--restart=always /fauria/vsftpd"}),"指定重启策略以及容器镜像。"]}),"\n",(0,d.jsxs)(n.h1,{id:"3登录",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3登录",children:"#"}),"3.登录"]}),"\n",(0,d.jsxs)(n.p,{children:["浏览器输入",(0,d.jsx)(n.code,{children:"ftp://pano:bd_21_pano@10.1.93.172"}),"即可访问"]}),"\n",(0,d.jsxs)(n.p,{children:["注意：pano用户的根目录为",(0,d.jsx)(n.code,{children:"/home/vsftpd/pano/"})]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(c,e)})):c(e)}let h=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["tang%2Fk8s%2F%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%96%99%2Fftp.md"]={toc:[{id:"2启动docker容器",text:"2.启动docker容器",depth:2}],title:"docker 安装 ftp 服务端",headingTitle:"docker 安装 ftp 服务端",frontmatter:{}}}}]);