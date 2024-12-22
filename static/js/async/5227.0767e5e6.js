"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["5227"],{80346:function(e,s,r){r.r(s),r.d(s,{default:()=>g});var d=r("85893"),i=r("50065");let n=r.p+"static/image/sever-install-redis-8.06651e36.png",c=r.p+"static/image/sever-install-redis-7.505e26ca.png",a=r.p+"static/image/sever-install-redis-6.2b98ae54.png",l=r.p+"static/image/sever-install-redis-5.c3981464.png",h=r.p+"static/image/sever-install-redis-4.118008b3.png",t=r.p+"static/image/sever-install-redis-2-1616296377058.833102f3.png",x=r.p+"static/image/sever-install-redis-3.5395a31a.png",j=r.p+"static/image/sever-install-redis-2.833102f3.png",o=r.p+"static/image/sever-install-redis-1.daa1ac35.png";function p(e){let s=Object.assign({h1:"h1",a:"a",pre:"pre",code:"code",p:"p",img:"img",strong:"strong",h2:"h2"},(0,i.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.h1,{id:"centos7安装redis",children:["CentOS7安装redis",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#centos7安装redis",children:"#"})]}),"\n",(0,d.jsxs)(s.h1,{id:"1安装gcc",children:["1.安装gcc",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#1安装gcc",children:"#"})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-shell",children:"yum -y install gcc\n"})}),"\n",(0,d.jsxs)(s.h1,{id:"2创建usrlocalredis文件夹",children:["2.创建/usr/local/redis文件夹",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#2创建usrlocalredis文件夹",children:"#"})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-shell",children:"mkdir /usr/local/redis\n"})}),"\n",(0,d.jsxs)(s.h1,{id:"3下载redis安装包并解压",children:["3.下载redis安装包并解压",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#3下载redis安装包并解压",children:"#"})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-shell",children:"cd /usr/local/redis\r\nwget http://download.redis.io/releases/redis-4.0.6.tar.gz\r\ntar -zxvf redis-4.0.6.tar.gz\n"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)("img",{src:o,alt:""})}),"\n",(0,d.jsxs)(s.h1,{id:"4开始安装",children:["4.开始安装",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#4开始安装",children:"#"})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-shell",children:"cd redis-4.0.6/\r\nmake\r\ncd src\r\nmake install\n"})}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"如果执行make的时候报错"}),"： ",(0,d.jsx)(s.code,{children:"redis编译报致命错误：jemalloc/jemalloc.h：没有那个文件或目录"}),"\r\n，将make命令改为",(0,d.jsx)(s.code,{children:"make MALLOC=libc"})]}),"\n",(0,d.jsxs)(s.h1,{id:"5设置后台启动redis",children:["5.设置后台启动redis",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#5设置后台启动redis",children:"#"})]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)("img",{src:j,alt:""})}),"\n",(0,d.jsxs)(s.p,{children:["将",(0,d.jsx)(s.code,{children:"redis-4.0.6/redis.conf"}),"文件中的",(0,d.jsx)(s.code,{children:"daemonize"}),"改为",(0,d.jsx)(s.code,{children:"yes"}),"，如下图"]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)("img",{src:x,alt:""})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"启动命令为："})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-shell",children:"src/redis-server  redis.conf\n"})}),"\n",(0,d.jsxs)(s.h1,{id:"6设置密码",children:["6.设置密码",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#6设置密码",children:"#"})]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)("img",{src:t,alt:""})}),"\n",(0,d.jsxs)(s.p,{children:["将",(0,d.jsx)(s.code,{children:"redis-4.0.6/redis.conf"}),"文件中的",(0,d.jsx)(s.code,{children:"requirepass"}),"的注释取消，并设置密码，如下图："]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)("img",{src:h,alt:""})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"启动命令为："})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-shell",children:"src/redis-server  redis.conf\n"})}),"\n",(0,d.jsxs)(s.h1,{id:"7设置远程访问",children:["7.设置远程访问",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#7设置远程访问",children:"#"})]}),"\n",(0,d.jsxs)(s.p,{children:["将",(0,d.jsx)(s.code,{children:"redis-4.0.6/redis.conf"}),"文件中的",(0,d.jsx)(s.code,{children:"bind 127.0.0.1"}),"的注释掉，并将",(0,d.jsx)(s.code,{children:"protected-mode"}),"值改为",(0,d.jsx)(s.code,{children:"no"}),"，如下图："]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)("img",{src:l,alt:""})}),"\n",(0,d.jsxs)(s.h1,{id:"8将redis添加为服务",children:["8.将redis添加为服务",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#8将redis添加为服务",children:"#"})]}),"\n",(0,d.jsxs)(s.h2,{id:"81复制redis脚本",children:["8.1复制redis脚本",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#81复制redis脚本",children:"#"})]}),"\n",(0,d.jsxs)(s.p,{children:["将脚本文件 ",(0,d.jsx)(s.code,{children:"redis_init_script"})," 复制到",(0,d.jsx)(s.code,{children:"/etc/rc.d/init.d/"}),"，并改名为",(0,d.jsx)(s.code,{children:"redis"}),":"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-shell",children:"cp utils/redis_init_script /etc/rc.d/init.d/redis\n"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)("img",{src:a,alt:""})}),"\n",(0,d.jsxs)(s.h2,{id:"82更改redis脚本",children:["8.2更改redis脚本",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#82更改redis脚本",children:"#"})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-shell",children:"vim /etc/rc.d/init.d/redis\n"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)("img",{src:c,alt:""})}),"\n",(0,d.jsxs)(s.h2,{id:"83复制redis配置文件",children:["8.3复制redis配置文件",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#83复制redis配置文件",children:"#"})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-shell",children:"mkdir /etc/redis\r\ncp redis.conf /etc/redis/6379.conf\n"})}),"\n",(0,d.jsxs)(s.h2,{id:"84注册服务",children:["8.4注册服务",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#84注册服务",children:"#"})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-shell",children:"chkconfig --add redis\n"})}),"\n",(0,d.jsxs)(s.h2,{id:"85启动服务",children:["8.5启动服务",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#85启动服务",children:"#"})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-shell",children:"# 刷新服务单元\r\nsystemctl daemon-reload\r\n# 启动redis\r\nsystemctl start redis\n"})}),"\n",(0,d.jsxs)(s.h2,{id:"86可能遇到的问题",children:["8.6可能遇到的问题",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#86可能遇到的问题",children:"#"})]}),"\n",(0,d.jsx)(s.p,{children:"使用systemctl start redis启动redis时，可能遇到如下问题:"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)("img",{src:n,alt:""})}),"\n",(0,d.jsxs)(s.p,{children:["解决方法：直接删掉",(0,d.jsx)(s.code,{children:"/var/run/redis_6379.pid"}),"即可。"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-shell",children:"rm -f /var/run/redis_6379.pid\n"})})]})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(p,{...e})}):p(e)}let g=m;m.__RSPRESS_PAGE_META={},m.__RSPRESS_PAGE_META["tang%2Fserver%2FCentOS7%E5%AE%89%E8%A3%85redis.md"]={toc:[{text:"8.1复制redis脚本",id:"81复制redis脚本",depth:2},{text:"8.2更改redis脚本",id:"82更改redis脚本",depth:2},{text:"8.3复制redis配置文件",id:"83复制redis配置文件",depth:2},{text:"8.4注册服务",id:"84注册服务",depth:2},{text:"8.5启动服务",id:"85启动服务",depth:2},{text:"8.6可能遇到的问题",id:"86可能遇到的问题",depth:2}],title:"8.将redis添加为服务",frontmatter:{}}}}]);