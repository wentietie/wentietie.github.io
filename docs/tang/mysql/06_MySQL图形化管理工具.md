# 6 MySQL图形化管理工具

## 6.1 工具分类

- MySQL Workbench：MySQL 官方提供的图形化管理工具

  下载地址：https://dev.mysql.com/downloads/workbench/

- Navicat Preminum：

  下载地址：http://www.navicat.com/

- SQLyog：

  下载地 址：http://www.webyog.com/

## 6.2 常见问题

> Authentication plugin 'caching_sha2_password' cannot be loaded

有些图形界面工具，特别是旧版本的图形界面工具，在连接MySQL8时出现“Authentication plugin 'caching_sha2_password' cannot be loaded”错误。

`分析`:

出现这个原因是MySQL8之前的版本中加密规则是mysql_native_password，而在MySQL8之后，加密规则 是caching_sha2_password。

`解决`:

- 方法1：升级图形界面工具版本

- 方法2：把MySQL8 用户登录密码加密规则还原成mysql_native_password。

  ```mysql
  #使用mysql数据库
  USE mysql;
  #修改'root'@'localhost'用户的密码规则和密码
  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '密码';
  #刷新权限
  FLUSH PRIVILEGES;
  ```

> root用户密码忘记--重置用户密码

- 通过任务管理器或者服务管理，关掉mysqld(服务进程) 

- 通过命令行+特殊参数开启mysqld mysqld -- defaults-file="D:\ProgramFiles\mysql\MySQLServer5.7Data\my.ini" --skip-grant-tables 。此时，mysqld服务进程已经打开。并且不需要权限检查 

- 另启动一 个客户端进行，通过mysql -uroot 无密码登陆服务器。 

- 修改密码

  ```mysql
  use mysql; 
  update user set authentication_string=password('新密码') where user='root' and Host='localhost'; 
  flush privileges;
  ```

- 重启mysql后，即可使用新密码登录root用户