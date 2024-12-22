# docker 安装 ftp 服务端
# 1.拉取镜像

```shell
docker pull fauria/vsftpd
```

fauria/vsftpd是官方的FTP服务器镜像

## 2.启动docker容器

```shell
docker run -d -v /home/share/pano_sources/pano-dev-sources-pvc-555f9685-2ff8-4932-bcfd-f2ac309925e7:/home/vsftpd/pano \
-p 20:20 -p 21:21 -p  21100-21110:21100-21110 \
-e FTP_USER=pano -e FTP_PASS=bd_21_pano \
-e PASV_ADDRESS=10.1.93.172 \
-e PASV_MIN_PORT=21100 -e PASV_MAX_PORT=21110 \
--name vsftpd1 --restart=always fauria/vsftpd
```

参数说明：

`-p `是将容器中的端口映射到宿主机的端口，冒号前边是宿主机的端口；

`/home/share/pano_sources/pano-dev-sources-pvc-555f9685-2ff8-4932-bcfd-f2ac309925e7:/home/vsftpd/pano`是将容器中的`/home/vsftpd/pano`挂载到宿主机的`/home/share/pano_sources/pano-dev-sources-pvc-555f9685-2ff8-4932-bcfd-f2ac309925e7`路径下；

`FTP_USER`、`FTP_PASS`分别是FTP登录的用户名和密码；

`PASV_ADDRESS`是宿主机IP；

`PASV_MIN_PORT`、`PASV_MAX_PORT`分别是给客户端提供下载服务随机的端口号范围，默认是21100-2111。此处要和前面docker端口映射设置成一样。

`name`是容器名称；

`--restart=always /fauria/vsftpd`指定重启策略以及容器镜像。

# 3.登录

浏览器输入`ftp://pano:bd_21_pano@10.1.93.172`即可访问

注意：pano用户的根目录为`/home/vsftpd/pano/`

