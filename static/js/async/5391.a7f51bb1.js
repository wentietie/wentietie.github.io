"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([["5391"],{67413:function(n,r,e){e.r(r),e.d(r,{default:()=>h});var i=e("85893"),a=e("50065");let s=e.p+"static/image/nginx-update-1.1e830d85.png";function t(n){let r=Object.assign({h1:"h1",a:"a",blockquote:"blockquote",p:"p",code:"code",pre:"pre",h2:"h2",h3:"h3",img:"img"},(0,a.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.h1,{id:"centos7平滑升级nginx",children:["CentOS7平滑升级nginx",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#centos7平滑升级nginx",children:"#"})]}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"准备："}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["下载并上传",(0,i.jsx)(r.code,{children:"nginx-1.14.2.tar.gz"}),"、",(0,i.jsx)(r.code,{children:"nginx-1.22.0.tar.gz"}),"到",(0,i.jsx)(r.code,{children:"/usr/tth/"}),"路径。"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"[root@iZ2zear1vazpz6ydchstjnZ tth]# pwd\r\n/usr/tth\r\n[root@iZ2zear1vazpz6ydchstjnZ tth]# ll\r\ntotal 2044\r\n-rw-r--r-- 1 root root 1015384 Oct 18 11:13 nginx-1.14.2.tar.gz\r\n-rw-r--r-- 1 root root 1073322 Oct 18 11:13 nginx-1.22.0.tar.gz\n"})}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"说明"}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["本教程是将nginx从1.14.2版本平滑升级到1.22.0版本。首先介绍1.14.2版本的nginx的安装，然后再进行平滑升级。\r\n如果已有低版本的nginx，可以跳过","1 安装旧版本nginx","部分。"]}),"\n",(0,i.jsxs)(r.h2,{id:"1-安装旧版本nginx",children:["1 安装旧版本nginx",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#1-安装旧版本nginx",children:"#"})]}),"\n",(0,i.jsxs)(r.h3,{id:"11-解压-nginx-1142targz",children:["1.1 解压 nginx-1.14.2.tar.gz",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#11-解压-nginx-1142targz",children:"#"})]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"# 进入/usr/tth/目录\r\n[root@iZ2zear1vazpz6ydchstjnZ tth]# cd /usr/tth/\r\n# 解压\r\n[root@iZ2zear1vazpz6ydchstjnZ tth]# tar zxf nginx-1.14.2.tar.gz\r\n# 查看解压结果\r\n[root@iZ2zear1vazpz6ydchstjnZ tth]# ll\r\ntotal 2044\r\ndrwxr-xr-x 8 1001 1001     158 Dec  4  2018 nginx-1.14.2 # 新增nginx-1.14.2文件夹\r\n-rw-r--r-- 1 root root 1015384 Oct 18 11:13 nginx-1.14.2.tar.gz\r\n-rw-r--r-- 1 root root 1073322 Oct 18 11:13 nginx-1.22.0.tar.gz\r\n\n"})}),"\n",(0,i.jsxs)(r.h3,{id:"12-准备nginx安装路径",children:["1.2 准备nginx安装路径",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#12-准备nginx安装路径",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["创建",(0,i.jsx)(r.code,{children:"/usr/local/nginx/1.14.2/"}),"文件夹，作为nginx-1.14.2的安装目录"]}),"\n",(0,i.jsxs)(r.h3,{id:"13-编译安装",children:["1.3 编译安装",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#13-编译安装",children:"#"})]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"# 进入/usr/tth/nginx-1.14.2/目录\r\n[root@iZ2zear1vazpz6ydchstjnZ tth]# cd /usr/tth/nginx-1.14.2/\r\n\r\n# 配置nginx\r\n[root@iZ2zear1vazpz6ydchstjnZ nginx-1.14.2]# ./configure --prefix=/usr/local/nginx/1.14.2\r\n\r\n# 编译并安装\r\n[root@iZ2zear1vazpz6ydchstjnZ nginx-1.14.2]# make && make install\r\n\r\n# 查看安装结果\r\n[root@iZ2zear1vazpz6ydchstjnZ nginx-1.14.2]# ll /usr/local/nginx/1.14.2/\r\ntotal 0\r\ndrwxr-xr-x 2 root root 333 Oct 18 15:43 conf\r\ndrwxr-xr-x 2 root root  40 Oct 18 15:43 html\r\ndrwxr-xr-x 2 root root   6 Oct 18 15:43 logs\r\ndrwxr-xr-x 2 root root  19 Oct 18 15:43 sbin\r\n\n"})}),"\n",(0,i.jsxs)(r.h3,{id:"14-修改nginx端口",children:["1.4 修改nginx端口",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#14-修改nginx端口",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"将nginx端口，由80改为81（此步骤可省，用80也行。此处是为了确保在升级时，旧版本的配置仍旧生效）"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"vim /usr/local/nginx/1.14.2/conf/nginx.conf\n"})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)("img",{src:s,alt:""})}),"\n",(0,i.jsxs)(r.h3,{id:"15-运行",children:["1.5 运行",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#15-运行",children:"#"})]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:'# 测试配置文件是否正确（输出内容为ok、successful，表示正确。否则需要修改配置文件）\r\n[root@iZ2zear1vazpz6ydchstjnZ nginx-1.14.2]# /usr/local/nginx/1.14.2/sbin/nginx -t\r\nnginx: the configuration file /usr/local/nginx/1.14.2/conf/nginx.conf syntax is ok\r\nnginx: configuration file /usr/local/nginx/1.14.2/conf/nginx.conf test is successful\r\n\r\n# 运行\r\n[root@iZ2zear1vazpz6ydchstjnZ nginx-1.14.2]# /usr/local/nginx/1.14.2/sbin/nginx\r\n\r\n# 查看进程\r\n[root@iZ2zear1vazpz6ydchstjnZ nginx-1.14.2]# ps -ef | grep nginx\r\nroot     2837549       1  0 15:50 ?        00:00:00 nginx: master process /usr/local/nginx/1.14.2/sbin/nginx\r\nnobody   2837550 2837549  0 15:50 ?        00:00:00 nginx: worker process\r\nroot     2837555 2834706  0 15:52 pts/2    00:00:00 grep --color=auto nginx\r\n\r\n#访问测试（访问成功）\r\n[root@iZ2zear1vazpz6ydchstjnZ nginx-1.14.2]# curl http://localhost:81\r\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n<title>Welcome to nginx!</title>\r\n<style>\r\n    body {\r\n        width: 35em;\r\n        margin: 0 auto;\r\n        font-family: Tahoma, Verdana, Arial, sans-serif;\r\n    }\r\n</style>\r\n</head>\r\n<body>\r\n<h1>Welcome to nginx!</h1>\r\n<p>If you see this page, the nginx web server is successfully installed and\r\nworking. Further configuration is required.</p>\r\n\r\n<p>For online documentation and support please refer to\r\n<a href="http://nginx.org/">nginx.org</a>.<br/>\r\nCommercial support is available at\r\n<a href="http://nginx.com/">nginx.com</a>.</p>\r\n\r\n<p><em>Thank you for using nginx.</em></p>\r\n</body>\r\n</html>\n'})}),"\n",(0,i.jsxs)(r.h3,{id:"16-查看nginx版本号",children:["1.6 查看nginx版本号",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#16-查看nginx版本号",children:"#"})]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"[root@iZ2zear1vazpz6ydchstjnZ tth]#  /usr/local/nginx/1.14.2/sbin/nginx -v\r\nnginx version: nginx/1.14.2\n"})}),"\n",(0,i.jsxs)(r.h2,{id:"2-安装新版本nginx",children:["2 安装新版本nginx",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#2-安装新版本nginx",children:"#"})]}),"\n",(0,i.jsxs)(r.h3,{id:"21-解压nginx-1220",children:["2.1 解压nginx-1.22.0",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#21-解压nginx-1220",children:"#"})]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"# 进入/usr/tth/目录\r\n[root@iZ2zear1vazpz6ydchstjnZ tth]# cd /usr/tth/\r\n\r\n# 解压\r\n[root@iZ2zear1vazpz6ydchstjnZ tth]# tar zxf nginx-1.22.0.tar.gz\r\n\r\n# 查看解压结果\r\n[root@iZ2zear1vazpz6ydchstjnZ tth]# ll\r\ntotal 2044\r\ndrwxr-xr-x 9 1001 1001     186 Oct 18 15:35 nginx-1.14.2\r\n-rw-r--r-- 1 root root 1015384 Oct 18 11:13 nginx-1.14.2.tar.gz\r\ndrwxr-xr-x 8 1001 1001     158 May 24 07:59 nginx-1.22.0\r\n-rw-r--r-- 1 root root 1073322 Oct 18 11:13 nginx-1.22.0.tar.gz\n"})}),"\n",(0,i.jsxs)(r.h3,{id:"22-查看旧版本配置",children:["2.2 查看旧版本配置",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#22-查看旧版本配置",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["新版本在执行",(0,i.jsx)(r.code,{children:"./config"}),"命令时，需要用到旧版本的配置参数。"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"[root@iZ2zear1vazpz6ydchstjnZ tth]# /usr/local/nginx/1.14.2/sbin/nginx -V\r\nnginx version: nginx/1.14.2\r\nbuilt by gcc 8.5.0 20210514 (Red Hat 8.5.0-4) (GCC)\r\nconfigure arguments: --prefix=/usr/local/nginx/1.14.2 # 旧版本配置参数\r\n\n"})}),"\n",(0,i.jsxs)(r.h3,{id:"23-编译",children:["2.3 编译",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#23-编译",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["注意：此处只编译，不安装。执行完",(0,i.jsx)(r.code,{children:"make"}),"命令之后，",(0,i.jsx)(r.code,{children:"/usr/tth/nginx-1.22.0/"}),"会多出一个文件夹"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"# 进入/usr/tth/nginx-1.22.0目录\r\n[root@iZ2zear1vazpz6ydchstjnZ tth]# cd nginx-1.22.0/\r\n\r\n# 配置nginx（需要用到上一步中的nginx配置信息）\r\n[root@iZ2zear1vazpz6ydchstjnZ nginx-1.22.0]# ./configure --prefix=/usr/local/nginx/1.14.2\r\n# 此时，/usr/tth/nginx-1.22.0路径下会多出objs文件夹\r\n\r\n# 编译\r\n[root@iZ2zear1vazpz6ydchstjnZ nginx-1.22.0]# make\r\n# 此时/usr/tth/nginx-1.22.0/objs/文件夹下会多出nginx文件，下面会用到\n"})}),"\n",(0,i.jsxs)(r.h2,{id:"3-升级",children:["3 升级",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#3-升级",children:"#"})]}),"\n",(0,i.jsxs)(r.h3,{id:"31-备份旧版本用新版本替换",children:["3.1 备份旧版本，用新版本替换",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#31-备份旧版本用新版本替换",children:"#"})]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"# 备份旧版本\r\n[root@iZ2zear1vazpz6ydchstjnZ nginx-1.22.0]# mv /usr/local/nginx/1.14.2/sbin/nginx /usr/local/nginx/1.14.2/sbin/nginx_1.14.2\r\n\r\n# 查看备份结果\r\n[root@iZ2zear1vazpz6ydchstjnZ nginx-1.22.0]# ll /usr/local/nginx/1.14.2/sbin\r\ntotal 4888\r\n-rwxr-xr-x 1 root root 5001856 Oct 18 15:43 nginx_1.14.2\r\n\r\n# 复制新版本nginx到/usr/local/nginx/1.14.2/sbin路径下\r\n[root@iZ2zear1vazpz6ydchstjnZ nginx-1.22.0]# cp /usr/tth/nginx-1.22.0/objs/nginx /usr/local/nginx/1.14.2/sbin/\r\n\r\n# 查看复制结果\r\n[root@iZ2zear1vazpz6ydchstjnZ nginx-1.22.0]# ll /usr/local/nginx/1.14.2/sbin\r\ntotal 9828\r\n-rwxr-xr-x 1 root root 5056008 Oct 18 16:13 nginx\r\n-rwxr-xr-x 1 root root 5001856 Oct 18 15:43 nginx_1.14.2\r\n[root@iZ2zear1vazpz6ydchstjnZ nginx-1.22.0]#\n"})}),"\n",(0,i.jsxs)(r.h3,{id:"32-测试配置文件是否正确",children:["3.2 测试配置文件是否正确",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#32-测试配置文件是否正确",children:"#"})]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"[root@iZ2zear1vazpz6ydchstjnZ nginx-1.22.0]# /usr/local/nginx/1.14.2/sbin/nginx -t\r\nnginx: the configuration file /usr/local/nginx/1.14.2/conf/nginx.conf syntax is ok\r\nnginx: configuration file /usr/local/nginx/1.14.2/conf/nginx.conf test is successful\n"})}),"\n",(0,i.jsxs)(r.h3,{id:"33-查看nginx进程",children:["3.3 查看nginx进程",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#33-查看nginx进程",children:"#"})]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"[root@iZ2zear1vazpz6ydchstjnZ nginx-1.22.0]# ps -ef | grep nginx\r\nroot     2837549       1  0 15:50 ?        00:00:00 nginx: master process /usr/local/nginx/1.14.2/sbin/nginx\r\nnobody   2837550 2837549  0 15:50 ?        00:00:00 nginx: worker process\r\nroot     2840201 2837586  0 16:17 pts/4    00:00:00 grep --color=auto nginx\n"})}),"\n",(0,i.jsxs)(r.h3,{id:"34-发送usr2信号",children:["3.4 发送USR2信号",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#34-发送usr2信号",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"向主进程（master）发送usr2信号，nginx会启动一个新的版本的master进程和对应工作进程，和旧版本一起处理请求。"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"[root@iZ2zear1vazpz6ydchstjnZ nginx-1.22.0]# kill -USR2 2837549\n"})}),"\n",(0,i.jsxs)(r.h3,{id:"35-查看nginx进程",children:["3.5 查看nginx进程",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#35-查看nginx进程",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"如下，多了两个新的进程，说明USR2信号发送成功。"}),"\n",(0,i.jsx)(r.p,{children:"此时，新旧两个版本的nginx都处于可用状态"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"[root@iZ2zear1vazpz6ydchstjnZ nginx-1.22.0]# ps -ef | grep nginx\r\nroot     2837549       1  0 15:50 ?        00:00:00 nginx: master process /usr/local/nginx/1.14.2/sbin/nginx # 旧的nginx\r\nnobody   2837550 2837549  0 15:50 ?        00:00:00 nginx: worker process\r\nroot     2840202 2837549  0 16:17 ?        00:00:00 nginx: master process /usr/local/nginx/1.14.2/sbin/nginx # 新的nginx\r\nnobody   2840203 2840202  0 16:17 ?        00:00:00 nginx: worker process\r\nroot     2840205 2837586  0 16:17 pts/4    00:00:00 grep --color=auto nginx\n"})}),"\n",(0,i.jsxs)(r.h3,{id:"36-发送winch信号",children:["3.6 发送WINCH信号",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#36-发送winch信号",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"让旧版本的nginx的进程逐步退出。"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"# 发送WINCH信号\r\n[root@iZ2zear1vazpz6ydchstjnZ nginx-1.22.0]# kill -WINCH 2837549\r\n\r\n# 查看nginx进程\r\n[root@iZ2zear1vazpz6ydchstjnZ nginx-1.22.0]# ps aux |grep nginx\r\nroot     2837549  0.0  0.1  34328  2232 ?        Ss   15:50   0:00 nginx: master process /usr/local/nginx/1.14.2/sbin/nginx\r\nroot     2840202  0.0  0.1  34436  2940 ?        S    16:17   0:00 nginx: master process /usr/local/nginx/1.14.2/sbin/nginx\r\nnobody   2840203  0.0  0.2  66608  4520 ?        S    16:17   0:00 nginx: worker process\r\nroot     2840222  0.0  0.0  12132  1152 pts/4    S+   16:31   0:00 grep --color=auto nginx\n"})}),"\n",(0,i.jsxs)(r.h3,{id:"37-访问验证",children:["3.7 访问验证",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#37-访问验证",children:"#"})]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:'[root@iZ2zear1vazpz6ydchstjnZ nginx-1.22.0]# curl http://localhost:81\r\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n<title>Welcome to nginx!</title>\r\n<style>\r\n  body {\r\n      width: 35em;\r\n      margin: 0 auto;\r\n      font-family: Tahoma, Verdana, Arial, sans-serif;\r\n  }\r\n</style>\r\n</head>\r\n<body>\r\n<h1>Welcome to nginx!</h1>\r\n<p>If you see this page, the nginx web server is successfully installed and\r\nworking. Further configuration is required.</p>\r\n\r\n<p>For online documentation and support please refer to\r\n<a href="http://nginx.org/">nginx.org</a>.<br/>\r\nCommercial support is available at\r\n<a href="http://nginx.com/">nginx.com</a>.</p>\r\n\r\n<p><em>Thank you for using nginx.</em></p>\r\n</body>\r\n</html>\n'})}),"\n",(0,i.jsxs)(r.h3,{id:"38-发送hup信号如果需要回滚的话",children:["3.8 发送HUP信号（如果需要回滚的话）",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#38-发送hup信号如果需要回滚的话",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"注意：此步骤是回滚步骤。如果不需要回滚，直接跳过该步骤"}),"\n",(0,i.jsx)(r.p,{children:"如果这时需要回退继续使用旧版本，可向旧的Nginx主进程发送HUP信号，它会重新启动工作进程，仍使用旧版配置文件。然后可以将新版Nginx进程杀死（使用QUIT、TERM  、或者KILL）"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"kill -HUP 2837549\n"})}),"\n",(0,i.jsxs)(r.h3,{id:"39-发送quit信号",children:["3.9 发送QUIT信号",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#39-发送quit信号",children:"#"})]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"# 发送QUIT信号\r\n[root@iZ2zear1vazpz6ydchstjnZ nginx-1.22.0]# kill -QUIT 2837549\r\n\r\n# 查看nginx进程（旧版本进程消失）\r\n[root@iZ2zear1vazpz6ydchstjnZ nginx-1.22.0]# ps aux |grep nginx\r\nroot     2840202  0.0  0.1  34436  2940 ?        S    16:17   0:00 nginx: master process /usr/local/nginx/1.14.2/sbin/nginx\r\nnobody   2840203  0.0  0.2  66608  4520 ?        S    16:17   0:00 nginx: worker process\r\nroot     2840231  0.0  0.0  12132  1124 pts/4    R+   16:38   0:00 grep --color=auto nginx\n"})}),"\n",(0,i.jsxs)(r.h3,{id:"310-验证nginx版本号并进行访问测试",children:["3.10 验证nginx版本号，并进行访问测试",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#310-验证nginx版本号并进行访问测试",children:"#"})]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:'# 查看版本号\r\n[root@iZ2zear1vazpz6ydchstjnZ nginx-1.22.0]# /usr/local/nginx/1.14.2/sbin/nginx -v\r\nnginx version: nginx/1.22.0\r\n\r\n\r\n# 访问测试\r\n[root@iZ2zear1vazpz6ydchstjnZ nginx-1.22.0]# curl http://localhost:81\r\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n<title>Welcome to nginx!</title>\r\n<style>\r\n  body {\r\n      width: 35em;\r\n      margin: 0 auto;\r\n      font-family: Tahoma, Verdana, Arial, sans-serif;\r\n  }\r\n</style>\r\n</head>\r\n<body>\r\n<h1>Welcome to nginx!</h1>\r\n<p>If you see this page, the nginx web server is successfully installed and\r\nworking. Further configuration is required.</p>\r\n\r\n<p>For online documentation and support please refer to\r\n<a href="http://nginx.org/">nginx.org</a>.<br/>\r\nCommercial support is available at\r\n<a href="http://nginx.com/">nginx.com</a>.</p>\r\n\r\n<p><em>Thank you for using nginx.</em></p>\r\n</body>\r\n</html>\n'})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,a.ah)(),n.components);return r?(0,i.jsx)(r,{...n,children:(0,i.jsx)(t,{...n})}):t(n)}let h=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["tang%2Fserver%2FCentOS7%E5%B9%B3%E6%BB%91%E5%8D%87%E7%BA%A7nginx.md"]={toc:[{text:"1 安装旧版本nginx",id:"1-安装旧版本nginx",depth:2},{text:"1.1 解压 nginx-1.14.2.tar.gz",id:"11-解压-nginx-1142targz",depth:3},{text:"1.2 准备nginx安装路径",id:"12-准备nginx安装路径",depth:3},{text:"1.3 编译安装",id:"13-编译安装",depth:3},{text:"1.4 修改nginx端口",id:"14-修改nginx端口",depth:3},{text:"1.5 运行",id:"15-运行",depth:3},{text:"1.6 查看nginx版本号",id:"16-查看nginx版本号",depth:3},{text:"2 安装新版本nginx",id:"2-安装新版本nginx",depth:2},{text:"2.1 解压nginx-1.22.0",id:"21-解压nginx-1220",depth:3},{text:"2.2 查看旧版本配置",id:"22-查看旧版本配置",depth:3},{text:"2.3 编译",id:"23-编译",depth:3},{text:"3 升级",id:"3-升级",depth:2},{text:"3.1 备份旧版本，用新版本替换",id:"31-备份旧版本用新版本替换",depth:3},{text:"3.2 测试配置文件是否正确",id:"32-测试配置文件是否正确",depth:3},{text:"3.3 查看nginx进程",id:"33-查看nginx进程",depth:3},{text:"3.4 发送USR2信号",id:"34-发送usr2信号",depth:3},{text:"3.5 查看nginx进程",id:"35-查看nginx进程",depth:3},{text:"3.6 发送WINCH信号",id:"36-发送winch信号",depth:3},{text:"3.7 访问验证",id:"37-访问验证",depth:3},{text:"3.8 发送HUP信号（如果需要回滚的话）",id:"38-发送hup信号如果需要回滚的话",depth:3},{text:"3.9 发送QUIT信号",id:"39-发送quit信号",depth:3},{text:"3.10 验证nginx版本号，并进行访问测试",id:"310-验证nginx版本号并进行访问测试",depth:3}],title:"CentOS7平滑升级nginx",frontmatter:{}}}}]);