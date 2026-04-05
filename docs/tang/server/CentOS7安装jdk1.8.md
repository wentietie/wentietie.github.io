# CentOS7安装jdk1.8
## 1 官网下载jdk

[https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)

![](./images/CentOS7Installjdk1.8/sever-install-jdk-1.png)

## 2 安装

创建`/usr/java8`文件夹，将压缩包上传至该文件夹内，进行解压。

![](./images/CentOS7Installjdk1.8/sever-install-jdk-2.png)

## 3 配置JDK

编辑 `/etc/profile`文件，进行全局变量的设置，在文件末尾添加如下内容即可：

```shell
#java environment
export JAVA_HOME=/usr/java8/jdk1.8.0_281
export CLASSPATH=.:${JAVA_HOME}/jre/lib/rt.jar:${JAVA_HOME}/lib/dt.jar:${JAVA_HOME}/lib/tools.jar
export PATH=$PATH:${JAVA_HOME}/bin
```

![](./images/CentOS7Installjdk1.8/sever-install-jdk-3.png)

## 4 让环境变量生效

```shell
source /etc/profile
```

## 5 检查是否安装成功

```shell
java -version
javac -version
```

![](./images/CentOS7Installjdk1.8/sever-install-jdk-4.png)