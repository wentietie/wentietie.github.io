# 5 MySQL一些常用命令

## 5.1 查看所有的数据库

```mysql
show databases;
```

- “information_schema”是 MySQL 系统自带的数据库，主要保存 MySQL 数据库服务器的系统信息， 比如数据库的名称、数据表的名称、字段名称、存取权限、数据文件
  所在的文件夹和系统使用的 文件夹，等等
- “performance_schema”是 MySQL 系统自带的数据库，可以用来监控 MySQL 的各类性能指标。
- “sys”数据库是 MySQL 系统自带的数据库，主要作用是以一种更容易被理解的方式展示 MySQL 数据 库服务器的各类性能指标，帮助系统管理员和开发人员监控
  MySQL 的技术性能。
- “mysql”数据库保存了 MySQL 数据库服务器运行时需要的系统信息，比如数据文件夹、当前使用的 字符集、约束检查信息，等等

## 5.2 查看库、表的创建信息

```mysql
# 查看库的创建信息
show create database 库名;
# 查看表的创建信息
show create table 表名称;
```

## 5.3 显示表结构

`describe 表名`或`desc 表名`

```mysql
mysql> describe dw_project; #也可以使用d
+-------------+--------------+------+-----+---------+-------+
| Field       | Type         | Null | Key | Default | Extra |
+-------------+--------------+------+-----+---------+-------+
| id          | int          | NO   | PRI | NULL    |       |
| Source_Name | varchar(255) | YES  |     | NULL    |       |
| Fund_Usd    | varchar(100) | YES  |     | NULL    |       |
+-------------+--------------+------+-----+---------+-------+
3 rows in set (0.01 sec)
```

## 5.4 分页

`limit`

- 语法： `limit 位置偏移量, 行数`，其中位置偏移量可省（省略时表示从0开始）
- **limit字句必须放在select语句的最后！**
- <front style="background: yellow">MySQL8.0新特性</front>：`limit 行数 offset 位置偏移量` 和  `limit 位置偏移量, 行数`
  效果一致
- 使用limit的优点：
    - 减少表的网格传输量，提升查询效率。
    - 当知道返回结果只有1条时，就可以使用`limit 1`，这样不需扫描整张表，从而提升效率

## 5.5 多表查询

![](./images/img4.png)

- `inner join ... on`或`join ... on`：内连接。`A inner join B ... on`表示取A和B的交集

- `left outer join ... on`或`left join ... on`：左外连接。`A left join B ... on`表示取所有满足条件的A中元素

- `right outer join ... on`或`right join ... on`：左外连接。`A right join B ... on`表示取所有满足条件的B中元素

- `union`或`union all`：合并查询结果。即将多条select的结果集组合成一个结果集。

    - `union`：返回两个查询结果集的并集，并**去除重复记录**。

    - `union all`：返回两个查询结果集的并集，**不去重，效率高**

      当明知道合并数据后的结果不存在重复数据，或者不需要去重的情况下，尽量使用`union all`。

- `natural join`：自然连接。<front style="background: yellow">SQL99新特性</front>。会自动查询两张表中**所有同名的字段**
  ，并对它们进行**等值连接**

  在SQL92标准中：

  ```mysql
  SELECT employee_id,last_name,department_name
  FROM employees e 
  JOIN departments d ON e.`department_id` = d.`department_id` AND e.`manager_id` = d.`manager_id`;
  ```

  在 SQL99 中可以写成：

  ```mysql
  SELECT employee_id,last_name,department_name
  FROM employees e 
  NATURAL JOIN departments d;
  ```

- `join ... using(字段名)`：<front style="background: yellow">SQL99新特性</front>。**指定数据表里的同名字段**进行**等值连接
  **，**只能配合join使用**。

  在SQL92标准中：

  ```mysql
  SELECT employee_id,last_name,department_name
  FROM employees e 
  JOIN departments d ON e.`department_id` = d.`department_id`;
  ```

  在 SQL99 中可以写成：

  ```mysql
  SELECT employee_id,last_name,department_name
  FROM employees e 
  JOIN departments d USING (department_id);
  ```

> 注意

要**控制连接表的数量** 。多表连接就相当于嵌套 for 循环一样，非常消耗资源，会让 SQL 查询性能下 降得很严重，因此不要连接不必要的表。

阿里巴巴《Java开发手册》中，**超过三个表禁止 join**。

## 5.6 编码集设置

在**MySQL 8.0版本之前**，默认字符集为latin1，utf8字符集指向的是utf8mb3，如果没有修改编码，**会出现乱码问题**。但是从MySQL 8.0
开始，数据库的默认编码改为 utf8mb4，从而避免了乱码问题。因此，此处编码集设置是**针对MySQL5.7版本**。

> 问题再现

```mysql
mysql> INSERT INTO t_stu VALUES(1,'张三','男');
ERROR 1366 (HY000): Incorrect string value: '\xD5\xC5\xC8\xFD' for column 'sname' at
row 1
```

> 问题解决

- 步骤1：查看编码命令

  ```mysql
  show variables like 'character_%';
  show variables like 'collation_%';
  ```

- 步骤2：修改mysql的数据目录下的my.ini配置文件

  ```ini
  [mysql] #大概在63行左右，在其下添加
  ...
  default-character-set=utf8 #默认字符集
  [mysqld] # 大概在76行左右，在其下添加
  ...
  character-set-server=utf8
  collation-server=utf8_general_ci
  ```

- 步骤3：重启服务

- 步骤4：查看编码信息

  ```mysql
  mysql> show variables like 'character_%';
  +--------------------------+---------------------------------------------+
  | Variable_name            | Value                                       |
  +--------------------------+---------------------------------------------+
  | character_set_client     | utf8                                        |
  | character_set_connection | utf8                                        |
  | character_set_database   | utf8                                        |
  | character_set_filesystem | binary                                      |
  | character_set_results    | utf8                                        |
  | character_set_server     | utf8                                        |
  | character_set_system     | utf8                                        |
  | character_sets_dir       | D:\soft\mysql-8.0.23-winx64\share\charsets\ |
  +--------------------------+---------------------------------------------+
  8 rows in set, 1 warning (0.03 sec)
  
  mysql> show variables like 'collation_%';
  +----------------------+--------------------+
  | Variable_name        | Value              |
  +----------------------+--------------------+
  | collation_connection | utf8               |
  | collation_database   | utf8               |
  | collation_server     | utf8               |
  +----------------------+--------------------+
  ```
