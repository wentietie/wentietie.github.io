# 4 MySQL的登录

## 4.1 服务的启动与停止

- 方式1：使用图形界面工具 

  - 步骤1：打开windows服务 
  - 步骤2：找到MySQL（点击鼠标右键）→ 启动或停止（点击） 

- 方式2：使用命令行工具（需要管理员权限） 

  ```sh
  # 启动 MySQL 服务命令：
  net start MySQL服务名
  # 停止 MySQL 服务命令：
  net stop MySQL服务名
  ```

## 4.2 使用命令行登录MySQL

> 登录MySQL

```sh
mysql -h主机名 -P端口号 -u用户名 -p密码
```

连接成功后，有关于MySQL Server服务版本的信息，还有第几次连接的id标识

> 查看MySQL Server服务版本信息

- 登录前：

  `c:\> mysql -V`或`c:\> mysql --version`

- 登录后

  `mysql> select version();`

> 退出登录

`exit`或`quit`
