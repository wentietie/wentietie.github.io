# 在linux上安装node

## 解压缩方式
1. 下载node安装包。[Linux 二进制文件 (x64) v16.15.0](https://npmmirror.com/mirrors/node/v16.15.0/node-v16.15.0-linux-x64.tar.xz)
2. 将安装包复制到linux上。
3. 解压安装包
```shell
tar -xJf node-v6.10.2-linux-x64.tar.xz
# 解压后建议重命名为nodejs
```
4. 建立软连接
```shell
sudo ln -s /nodejs/bin/node /usr/local/bin/node
sudo ln -s /nodejs/bin/npm /usr/local/bin/npm
```


## 常用linux命令
### 压缩文件
```shell
# 创建压缩文件
zip -r *.zip *
# 解压文件
unzip *.zip
```

### 查看文件夹
```shell
#查看文件列表
ll
#查看所有文件
ls -a
#查看隐藏文件
l.
```
### 修改环境变量
```shell
vi /etc/profile
```
