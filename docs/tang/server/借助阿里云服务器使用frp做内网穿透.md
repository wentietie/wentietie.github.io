# 借助阿里云服务器使用frp做内网穿透
# 1.安装包准备

frp git地址：https://github.com/fatedier/frp/releases

也可以使用wget命令直接下载：

```shell script
wget https://github.com/fatedier/frp/releases/download/v0.33.0/frp_0.33.0_linux_amd64.tar.gz
```

# 2.服务端配置frp

## 2.1解压

```shell
tar -zxvf frp_0.33.0_linux_amd64.tar.gz
```

## 2.2编辑frps.ini文件

注：此处的`vhost_http_port`、`dashboard_port`、`bind_port`需要设置对外开放。

Step1.在阿里云后台添加安全组。

Step2.在防火墙放开以上单个端口

```shell
firewall-cmd --add-port=31468/tcp –permanent
firewall-cmd --add-port=31468/tcp –permanent
firewall-cmd --add-port=31468/tcp –permanent
# 刷新，重新载入配置
firewall-cmd --reload
```

## 2.3启动frp服务端

```shell
nohup ./frps -c ./frps.ini > /var/log/frps.log 2>&1 &
```

## 2.4查看启动日志

若输出以下信息，说明启动成功。

## 2.5登录frp管理后台

http://120.27.54.55:7500/

 

# 3.客户端配置frp

## 3.1解压

```shell
tar -zxvf frp_0.33.0_linux_amd64.tar.gz
```

## 3.2配置frpc.ini

可以先将无用文件`frps`、`frps.ini`、`frps_full.ini`文件删掉。

## 3.3启动frp客户端

```shell
nohup ./frps -c ./frps.ini > /var/log/frps.log 2>&1 &
```

## 3.4查看启动日志

若输出以下信息，说明启动成功。

至此，内网穿透设置成功。

# 4.附

如果想使用frp映射多个项目，需要有域名。具体操作可参考：https://blog.csdn.net/Aria_Miazzy/article/details/100055828