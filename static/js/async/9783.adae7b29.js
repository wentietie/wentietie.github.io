"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["9783"],{43696:function(n,e,s){s.r(e),s.d(e,{default:()=>y});var r=s("85893"),i=s("50065");let t=s.p+"static/image/aliyun_home.edd6662c.png",c=s.p+"static/image/domain_buy.dfd8fd73.png",a=s.p+"static/image/domain_list.dd1dcdc0.png",l=s.p+"static/image/domain_list_analysis.e7ccb9ea.png",h=s.p+"static/image/domain_analysis.919a6afb.png",d=s.p+"static/image/domain_dv_apply.5a299696.png",x=s.p+"static/image/ssl_creat.1f7c7aa4.png",p=s.p+"static/image/ssl_apply.9470abc3.png",o=s.p+"static/image/ssl_download.62dc38c5.png",g=s.p+"static/image/ssl_project_path.804f3d8a.png",j=s.p+"static/image/ssl_download_nginx.958995ea.png",m=s.p+"static/image/ssl_project_path_nginx.9b47e0cd.png",u=s.p+"static/image/nginx_tar.38340743.png",_=s.p+"static/image/nginx_install_path.b0ec5b58.png",b=s.p+"static/image/nginx_install_result.904e7be1.png",f=s.p+"static/image/nginx_run_result.1fae9dfd.png";function k(n){let e=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",blockquote:"blockquote",img:"img",strong:"strong",h3:"h3",pre:"pre",code:"code"},(0,i.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"记一次小程序接口的发布",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#记一次小程序接口的发布",children:"#"}),"记一次小程序接口的发布"]}),"\n",(0,r.jsxs)(e.h2,{id:"0-前言",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#0-前言",children:"#"}),"0 前言"]}),"\n",(0,r.jsx)(e.p,{children:"本文是记录某个小程序后台接口的部署全过程。"}),"\n",(0,r.jsx)(e.p,{children:"因为小程序需要使用https的域名，所以，本文内容包括域名的申请、域名的解析、免费https证书的申请与配置。"}),"\n",(0,r.jsxs)(e.h2,{id:"1-申请域名",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1-申请域名",children:"#"}),"1 申请域名"]}),"\n",(0,r.jsx)(e.p,{children:"本文是在阿里云申请的域名，具体操作如下："}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Step1. 进入域名注册页面"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"在阿里云官网搜索“域名”，在弹出框的下拉列表中点击“域名注册”，跳转到域名注册页面。"}),"\n",(0,r.jsxs)(e.p,{children:["或者，直接通过网址进入",(0,r.jsx)(e.a,{href:"https://wanwang.aliyun.com/domain?spm=5176.28055625.J_3207526240.11.1d01154acqHumI&scm=20140722.S_function@@product@@999997._.ID_function@@product@@999997-RL_%E5%9F%9F%E5%90%8D-LOC_bar-OR_ser-V_2-P0_0",rel:"noopener noreferrer",target:"_blank",children:"域名注册"}),"页面。"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:t})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Step2. 选择域名，进行购买"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:c})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Step3. 查看已购买的域名"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:a})}),"\n",(0,r.jsxs)(e.h2,{id:"2-域名备案",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#2-域名备案",children:"#"}),"2 域名备案"]}),"\n",(0,r.jsxs)(e.p,{children:["因为我的域名和服务器都是阿里云的，所以在阿里云上备案，备案地址为：",(0,r.jsx)(e.a,{href:"https://beian.aliyun.com/?spm=a2cmq.17630005.icp_beian.1.1fa579feAWYL4C",rel:"noopener noreferrer",target:"_blank",children:"阿里云网站备案"})]}),"\n",(0,r.jsx)(e.p,{children:"具体操作按照按照网页上的表单填写即可。"}),"\n",(0,r.jsxs)(e.h2,{id:"3-域名解析",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#3-域名解析",children:"#"}),"3 域名解析"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Step1. 在域名列表页面，点击“解析”，进入域名解析页面"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:l})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Step2. 解析域名"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:h})}),"\n",(0,r.jsxs)(e.h2,{id:"4-申请免费https证书",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#4-申请免费https证书",children:"#"}),"4 申请免费https证书"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"说明："})," 免费证书一般仅用于个人网站或测试使用，不建议业务成熟的企业类型网站使用。"]}),"\n",(0,r.jsxs)(e.p,{children:["每个经过实名认证的阿里云账号（主账号），在每一个自然年内，可以通过数字证书管理服务的免费证书购买页，免费获取20个DV单域名证书【免费试用】（",(0,r.jsx)(e.a,{href:"https://help.aliyun.com/document_detail/205510.html?spm=a2c4g.365559.0.i1",rel:"noopener noreferrer",target:"_blank",children:"参考文档"}),"）。"]}),"\n",(0,r.jsx)(e.p,{children:"因此，申请免费https证书，需要先申请20个DV单域名证书，然后在“数字证书管理服务”中创建证书、申请证书、下载证书等。"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Step1. 申请DV单域名证书"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://common-buy.aliyun.com/?spm=a2c4g.205510.0.0.15edae8aJJkb83&commodityCode=cas_dv_public_cn&request=%7B%22product%22%3A%22free_product%22%7D",rel:"noopener noreferrer",target:"_blank",children:"申请DV单域名证书链接"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:d})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Step2. 创建证书"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"在【数字证书管理服务】-【SSL证书】-【免费证书】标签中，创建证书。"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:x})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Step3. 证书申请"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:p})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Step4. 证书审核"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"官方说，证书审核需要1~2个工作日，但是我申请的两个10分钟之内就通过了，所以可以稍微耐心等待下。审核通过之后会有短信和邮件通知。"}),"\n",(0,r.jsxs)(e.h2,{id:"5-配置https证书",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#5-配置https证书",children:"#"}),"5 配置https证书"]}),"\n",(0,r.jsxs)(e.h3,{id:"51-配置tomcat类型服务器的证书",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#51-配置tomcat类型服务器的证书",children:"#"}),"5.1 配置Tomcat类型服务器的证书"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"说明："})," 因为小程序接口是SpringBoot项目，所以尝试配置一次Tomcat类型服务器的证书。"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Step1. 下载Tomcat服务器对应的证书"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:o})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Step2. 将证书放到项目的resources文件夹下"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:g})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Step3. 在项目的application.yaml配置文件中，添加如下配置"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yml",meta:"",children:"server:\r\n  port: 7878 # 项目端口号\r\n  ssl:\r\n    key-alias: alias #证书别名\r\n    key-store-password: 6es4fnd2 #证书密码，可以在pfx-password.txt文件中查看\r\n    key-store-type: PKCS12\r\n    key-store: classpath:<your domain>.pfx # 证书文件\r\n  servlet:\r\n    context-path: /drive\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"证书别名查看命令"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",meta:"",children:"# 进入jre\\\\lib\\\\security文件夹\r\ncd D:\\\\soft\\\\java8\\\\jre\\\\lib\\\\security\r\n# 查看证书别名\r\nkeytool -list -v -keystore 证书所在文件夹\\\\证书名.pfx -storepass 6es4fnd2\n"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Step4. 项目启动与测试"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["将项目打包，上传至服务器并运行。项目运行成功后，浏览器访问 【 ",(0,r.jsx)(e.a,{href:"https://%E5%9F%9F%E5%90%8D",rel:"noopener noreferrer",target:"_blank",children:"https://域名"})," 】 。如果能有应答，表示https设置完成。"]}),"\n",(0,r.jsxs)(e.h3,{id:"52-配置nginx类型服务器的证书",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#52-配置nginx类型服务器的证书",children:"#"}),"5.2 配置nginx类型服务器的证书"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Step1. 下载Nginx服务器对应的证书"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:j})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Step2. 上传nginx证书到服务器"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"在nginx安装路径下，新建cert文件夹，将nginx证书上传至该文件夹"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:m})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Step3. 配置nginx"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["我的nginx版本号是1.22.0。低于1.15.0版本号的，需要将",(0,r.jsx)(e.code,{children:"listen 443 ssl;"}),"替换成",(0,r.jsx)(e.code,{children:"listen 443; ssl on;"}),"。"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-conf",meta:"",children:'server {\r\n        listen       80;\r\n        server_name api.drive.lyctth.top;\r\n        #将所有HTTP请求通过rewrite指令重定向到HTTPS。\r\n        rewrite ^(.*)$ https://$host$1 permanent;\r\n    }\r\n\r\n    server {\r\n        listen       443 ssl;\r\n        server_name  api.drive.lyctth.top;\r\n\r\n        ssl_certificate  /usr/nginx/1.22.0/cert/证书.pem;\r\n        ssl_certificate_key /usr/nginx/1.22.0/cert/证书.key;\r\n\r\n        ssl_session_cache    shared:SSL:1m;\r\n        ssl_session_timeout  5m;\r\n\r\n        ssl_ciphers  HIGH:!aNULL:!MD5;\r\n        ssl_prefer_server_ciphers  on;\r\n\r\n        location /drive/ {\r\n          proxy_pass http://127.0.0.1:7878/drive/;\r\n          proxy_http_version 1.1;\r\n    			proxy_set_header Upgrade $http_upgrade;\r\n    			proxy_set_header Connection "upgrade";\r\n      }\r\n    }\n'})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Step4. 测试"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["启动nginx，浏览器访问 【 ",(0,r.jsx)(e.a,{href:"https://%E5%9F%9F%E5%90%8D",rel:"noopener noreferrer",target:"_blank",children:"https://域名"})," 】 。如果能有应答，表示https设置完成"]}),"\n",(0,r.jsxs)(e.h2,{id:"附nginx的安装",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#附nginx的安装",children:"#"}),"附：nginx的安装"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Step1. 下载nginx安装包"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://nginx.org/en/download.html",rel:"noopener noreferrer",target:"_blank",children:"nginx下载地址"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Step2. 上传nginx安装包到服务器并解压"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",meta:"",children:"# 解压命令\r\ntar -zxvf nginx-1.22.0.tar.gz\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:u})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Step3. 创建文件夹，作为nginx的安装路径"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",meta:"",children:"mkdir /usr/nginx/1.22.0\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:_})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Step4. 安装"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",meta:"",children:"# 进入/usr/tth/nginx-1.14.2/目录\r\ncd /usr/nginx/nginx-1.22.0/\r\n\r\n# 配置nginx\r\n# 注意：一定要加上--with-http_ssl_module选项，否则在配置https时，nginx配置文件校验不通过\r\n./configure --prefix=/usr/nginx/1.22.0 --with-http_ssl_module\r\n\r\n# 编译并安装\r\nmake && make install\n"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Step5. 查看nginx安装结果"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",meta:"",children:"# 注意：V大写。小写的v只能查看nginx版本号\r\n/usr/nginx/1.22.0/sbin/nginx -V\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:b})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Step6. 启动nginx，并访问"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",meta:"",children:"/usr/nginx/1.22.0/sbin/nginx\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:f})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Step7. nginx常用命令"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",meta:"",children:"# nginx 配置文件修改后，可以使用-t命令校验配置文件是否正确(test is successful说明配置正确)\r\n/usr/nginx/1.22.0/sbin/nginx -t\r\n\r\n# 启动nginx\r\n/usr/nginx/1.22.0/sbin/nginx\r\n\r\n# 启动nginx时指定配置文件\r\n/usr/nginx/1.22.0/sbin/nginx -c /usr/local/nginx/conf/nginx.conf\r\n\r\n# 强制停止nginx\r\n/usr/nginx/1.22.0/sbin/nginx -s stop\r\n\r\n# 处理完请求后停止nginx\r\n/usr/nginx/1.22.0/sbin/nginx -s quit\r\n\r\n# 重新加载nginx配置文件\r\n/usr/nginx/1.22.0/sbin/nginx -s reload\n"})})]})}function S(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(k,n)})):k(n)}let y=S;S.__RSPRESS_PAGE_META={},S.__RSPRESS_PAGE_META["tang%2F%E9%A1%B9%E7%9B%AE%E4%B8%8A%E7%BA%BF%2Fxiaochengxu.md"]={toc:[{id:"0-前言",text:"0 前言",depth:2},{id:"1-申请域名",text:"1 申请域名",depth:2},{id:"2-域名备案",text:"2 域名备案",depth:2},{id:"3-域名解析",text:"3 域名解析",depth:2},{id:"4-申请免费https证书",text:"4 申请免费https证书",depth:2},{id:"5-配置https证书",text:"5 配置https证书",depth:2},{id:"51-配置tomcat类型服务器的证书",text:"5.1 配置Tomcat类型服务器的证书",depth:3},{id:"52-配置nginx类型服务器的证书",text:"5.2 配置nginx类型服务器的证书",depth:3},{id:"附nginx的安装",text:"附：nginx的安装",depth:2}],title:"记一次小程序接口的发布",headingTitle:"记一次小程序接口的发布",frontmatter:{}}}}]);